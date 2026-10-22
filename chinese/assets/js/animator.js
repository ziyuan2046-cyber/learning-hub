/**
 * 笔顺动画播放器
 * 逐笔演示书写过程：已完成笔画加深，当前笔画沿中线运笔、由笔尖向前逐步显现。
 */
var StrokeAnimator = (function () {
  var TZ = TianZiGe;

  /** 把指令数组描到 ctx 路径上 */
  function traceCmds(ctx, cmds, ox, oy, s) {
    for (var k = 0; k < cmds.length; k++) {
      var cm = cmds[k], p = cm.p;
      if (cm.c === 'M') ctx.moveTo(ox + p[0] * s, oy + p[1] * s);
      else if (cm.c === 'L') ctx.lineTo(ox + p[0] * s, oy + p[1] * s);
      else if (cm.c === 'Q') ctx.quadraticCurveTo(ox + p[0] * s, oy + p[1] * s, ox + p[2] * s, oy + p[3] * s);
      else if (cm.c === 'C') ctx.bezierCurveTo(ox + p[0] * s, oy + p[1] * s, ox + p[2] * s, oy + p[3] * s, ox + p[4] * s, oy + p[5] * s);
      else if (cm.c === 'Z') ctx.closePath();
    }
  }

  /**
   * 把折线加密：每段按固定步长插入插值点。
   *
   * 笔顺数据里的中线点很稀疏（多数笔画只有 2–10 个点），
   * 直接连线画粗线时，线段会从弯曲笔画的中间斜切过去，
   * 与轮廓求交后笔画就被削掉一块。加密后粗线才真正贴合笔画走向。
   */
  function densify(pts, per) {
    if (pts.length < 2) return pts;
    var out = [pts[0]];
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i];
      // 步长按格宽的 1% 换算到 1024 坐标系，保证加密后的密度与格宽无关
      var n = per;
      for (var k = 1; k <= n; k++) {
        var t = k / n;
        out.push([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
      }
    }
    return out;
  }

  /**
   * 估算遮罩粗线所需的宽度（像素）。
   *
   * 取「轮廓上所有点到中线的最大距离 × 2」—— 这是保证粗线完全覆盖该笔轮廓的
   * 几何最小值：任何轮廓点到中线的距离都 ≤ 最大距离，所以半宽取最大距离就不会露白。
   *
   * 为什么不用「面积 ÷ 中线长度」：那个估法对「点」这类笔画会严重低估。
   * 例如「盼」第 7 笔，中线只有 2 个点、长约 122 单位（面积÷长度算出 22px），
   * 但轮廓是胖的菱形，偏离中线达 122 单位（35.7px）—— 直接导致笔画被削瘦。
   *
   * 也不会过粗：宽度与该笔实际粗细成正比，汉字笔画通常 14–30px，
   * 远小于旧实现写死的 size*0.34（340px 格子下就是 116px，粗 4–8 倍）。
   *
   * @param {Array} cmds  该笔的轮廓指令
   * @param {Array} median 该笔的中线点（1024 坐标系）
   * @param {number} s     1024 坐标系 → 像素的缩放比
   */
  function strokeWidthPx(cmds, median, s) {
    var pts = flattenOutline(cmds);
    if (!pts.length || median.length < 2) return 8 * s;

    // 轮廓点到中线折线的最短距离，取最大值
    var maxD = 0;
    for (var k = 0; k < pts.length; k += 2) {
      var px = pts[k], py = pts[k + 1];
      var best = Infinity;
      for (var i = 1; i < median.length; i++) {
        var ax = median[i - 1][0], ay = median[i - 1][1];
        var bx = median[i][0], by = median[i][1];
        var dx = bx - ax, dy = by - ay;
        var l2 = dx * dx + dy * dy;
        var t = l2 ? ((px - ax) * dx + (py - ay) * dy) / l2 : 0;
        t = t < 0 ? 0 : t > 1 ? 1 : t;
        var ddx = px - (ax + dx * t), ddy = py - (ay + dy * t);
        var d2 = ddx * ddx + ddy * ddy;
        if (d2 < best) best = d2;
      }
      if (best > maxD) maxD = best;
    }
    if (!maxD) return 8 * s;

    // maxD 是距离的平方，开方得最大偏离距离，×2 得完全覆盖所需的最小宽度
    var need = Math.sqrt(maxD) * s * 2;

    // 关键取舍：粗线只用来「限制显现进度」，不会把笔画画粗 ——
    // 因为最终保留的是「轮廓 ∩ 粗线」，黑色永远被轮廓边界约束。
    // 所以宁可宽一点保证笔画完整（笔画被削缺比稍早显现明显得多），
    // 只在 need 明显过大时按平均厚度收一收。
    var avg = outlineArea(cmds) / medianLen(median);
    var w = avg > 0 ? need * 0.8 + Math.min(need, avg * s * 1.8) * 0.2 : need * 1.1;

    return Math.max(5, w);
  }

  /** 轮廓总面积（1024 坐标系，鞋带公式对各闭合子路径求和） */
  function outlineArea(cmds) {
    var area = 0;
    var ring = [];
    for (var k = 0; k < cmds.length; k++) {
      var cm = cmds[k], p = cm.p;
      if (cm.c === 'M') {
        if (ring.length >= 6) area += Math.abs(shoelace(ring));
        ring = [p[0], p[1]];
      } else if (cm.c === 'L' && ring.length) {
        ring.push(p[0], p[1]);
      } else if (cm.c === 'Q' && ring.length && p.length >= 4) {
        var x0 = ring[ring.length - 2], y0 = ring[ring.length - 1];
        for (var t = 1; t <= 6; t++) {
          var u = t / 6, iu = 1 - u;
          ring.push(iu * iu * x0 + 2 * iu * u * p[0] + u * u * p[2],
                    iu * iu * y0 + 2 * iu * u * p[1] + u * u * p[3]);
        }
      } else if (cm.c === 'C' && ring.length && p.length >= 6) {
        var bx = ring[ring.length - 2], by = ring[ring.length - 1];
        for (var v = 1; v <= 8; v++) {
          var q = v / 8, iv = 1 - q;
          ring.push(iv * iv * iv * bx + 3 * iv * iv * q * p[0] +
                      3 * iv * q * q * p[2] + q * q * q * p[4],
                    iv * iv * iv * by + 3 * iv * iv * q * p[1] +
                      3 * iv * q * q * p[3] + q * q * q * p[5]);
        }
      } else if (cm.c === 'Z' && ring.length) {
        if (ring.length >= 6) area += Math.abs(shoelace(ring));
        ring = [];
      }
    }
    if (ring.length >= 6) area += Math.abs(shoelace(ring));
    return area;
  }

  /** 中线折线总长 */
  function medianLen(median) {
    var len = 0;
    for (var i = 1; i < median.length; i++) {
      var dx = median[i][0] - median[i - 1][0];
      var dy = median[i][1] - median[i - 1][1];
      len += Math.sqrt(dx * dx + dy * dy);
    }
    return len;
  }

  /** 鞋带公式求多边形面积（扁平数组 [x,y,...]） */
  function shoelace(pts) {
    var s = 0;
    for (var i = 0, n = pts.length / 2; i < n; i++) {
      var j = (i + 1) % n;
      s += pts[i * 2] * pts[j * 2 + 1] - pts[j * 2] * pts[i * 2 + 1];
    }
    return s / 2;
  }

  /** 把轮廓指令离散为扁平的 [x,y,...] 数组（1024 坐标系） */
  function flattenOutline(cmds) {
    var out = [];
    var ring = null;
    for (var k = 0; k < cmds.length; k++) {
      var cm = cmds[k], p = cm.p;
      if (cm.c === 'M') {
        if (ring && ring.length >= 4) out = out.concat(ring);
        ring = [p[0], p[1]];
      } else if (cm.c === 'L' && ring) {
        ring.push(p[0], p[1]);
      } else if (cm.c === 'Q' && ring && p.length >= 4) {
        var x0 = ring[ring.length - 2], y0 = ring[ring.length - 1];
        for (var t = 1; t <= 6; t++) {
          var u = t / 6, iu = 1 - u;
          ring.push(iu * iu * x0 + 2 * iu * u * p[0] + u * u * p[2],
                    iu * iu * y0 + 2 * iu * u * p[1] + u * u * p[3]);
        }
      } else if (cm.c === 'C' && ring && p.length >= 6) {
        var bx = ring[ring.length - 2], by = ring[ring.length - 1];
        for (var v = 1; v <= 8; v++) {
          var q = v / 8, iv = 1 - q;
          ring.push(iv * iv * iv * bx + 3 * iv * iv * q * p[0] +
                      3 * iv * q * q * p[2] + q * q * q * p[4],
                    iv * iv * iv * by + 3 * iv * iv * q * p[1] +
                      3 * iv * q * q * p[3] + q * q * q * p[5]);
        }
      } else if (cm.c === 'Z' && ring) {
        if (ring.length >= 4) out = out.concat(ring);
        ring = null;
      }
    }
    if (ring && ring.length >= 4) out = out.concat(ring);
    return out;
  }

  /**
   * @param canvas 目标 canvas
   * @param opt { strokeColor, tipColor, speed, onFrame, onEnd }
   */
  function StrokeAnimator(canvas, opt) {
    opt = opt || {};
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.opt = opt;
    this.speed = opt.speed || 1;
    this.gridOpt = opt.gridOpt || {};
    this.raf = null;
    this.playing = false;
    this.cssW = 300;
    this.cssH = 300;
    this.dpr = 2;
    // 离屏遮罩：用于「笔画轮廓 ∩ 已写过路径」的像素级求交
    this._mask = null;
    this._maskCtx = null;
  }

  /** 取（或按当前尺寸重建）离屏遮罩画布 */
  StrokeAnimator.prototype._maskCtxFor = function (size) {
    var w = Math.max(1, Math.round(size * this.dpr));
    if (!this._mask) {
      this._mask = document.createElement('canvas');
      this._maskCtx = this._mask.getContext('2d');
    }
    if (this._mask.width !== w || this._mask.height !== w) {
      this._mask.width = w;
      this._mask.height = w;
    }
    var m = this._maskCtx;
    m.setTransform(1, 0, 0, 1, 0, 0);
    m.clearRect(0, 0, w, w);
    return m;
  };

  StrokeAnimator.prototype.resize = function () {
    var dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 2;
    var rect = this.canvas.getBoundingClientRect();
    var w = rect.width || this.canvas.clientWidth || 0;
    var h = rect.height || this.canvas.clientHeight || 0;
    // 元素尚未布局完成时（如弹窗刚显示、display 刚从 none 切回），
    // 拿到的尺寸可能是 0；此时退回上一次的有效尺寸，避免画出畸形字形。
    if (w > 0) this.cssW = w;
    if (h > 0) this.cssH = h;
    if (!this.cssW) this.cssW = 300;
    if (!this.cssH) this.cssH = 300;
    this.dpr = dpr;
    this.canvas.width = Math.round(this.cssW * dpr);
    this.canvas.height = Math.round(this.cssH * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w: this.cssW, h: this.cssH };
  };

  StrokeAnimator.prototype._geom = function () {
    var size = Math.min(this.cssW, this.cssH);
    return { ox: (this.cssW - size) / 2, oy: (this.cssH - size) / 2, size: size };
  };

  /** 静态绘制：前 upto 笔已写出，其余为淡色字模 */
  StrokeAnimator.prototype.render = function (data, upto, showGhost) {
    if (!data) return;
    this._frame(data, upto === undefined ? data.strokes.length : upto, 0, -1, showGhost !== false);
  };

  /** 单帧渲染核心 */
  StrokeAnimator.prototype._frame = function (data, done, frac, curIdx, showGhost) {
    var ctx = this.ctx;
    var g = this._geom();
    var size = g.size, ox = g.ox, oy = g.oy;

    TZ.drawGrid(ctx, ox, oy, size, size, this.gridOpt);

    // 未写部分：淡色字模
    if (showGhost !== false) {
      TZ.drawStrokes(ctx, data.strokes, ox, oy, size, {
        color: '#c9d4e4', alpha: 0.55, pad: size * 0.06
      });
    }
    // 已完成笔画
    if (done > 0) {
      TZ.drawStrokes(ctx, data.strokes.slice(0, done), ox, oy, size, {
        color: this.opt.strokeColor || '#1f2937', pad: size * 0.06
      });
    }
    // 当前笔渐进
    if (curIdx >= 0) this._drawCurrent(data, curIdx, frac, ox, oy, size);
  };

  /**
   * 当前笔的渐进显现。
   *
   * 做法：在离屏画布上用「中线粗线」与「笔画轮廓」求交，只保留已写过的部分。
   *
   * 为什么必须用离屏合成而不是 ctx.clip()：
   *   ctx.clip() 裁的是「当前路径的填充区域」。开放折线在填充时会隐式闭合一条
   *   「笔尖 → 起点」的直线弦，得到的区域是透镜状 —— 直线笔画只剩一条细缝，
   *   弯曲笔画那片区域又异常肥厚。这就是「显示不正常 + 黑色太粗大」的同一个根因。
   *
   * 为什么宽度要动态算：
   *   写死 size*0.34 在 340px 格子里是 116px，而汉字笔画实际只有 14–30px，
   *   粗了 4–8 倍，看上去就是「黑色描边太粗大」。
   */
  StrokeAnimator.prototype._drawCurrent = function (data, idx, frac, ox, oy, size) {
    var ctx = this.ctx;
    var cur = data.strokes[idx];
    var med = data.medians[idx] || [];
    if (!cur || frac <= 0 || med.length < 2) return;

    var pad = size * 0.06;
    var s = (size - pad * 2) / 1024;
    var tip = TZ.medianPoint(med, frac);
    // 用弧长切片取「起点→笔尖」的完整点序列。
    // 早期实现用「到笔尖距离 < 到起点距离」判断该画到哪，
    // 在捺、弯钩等弯曲笔画上会失效。
    var pts = TZ.medianSlice(med, frac);
    if (pts.length < 2) return;

    var m = this._maskCtxFor(size);
    var dpr = this.dpr;
    m.setTransform(dpr, 0, 0, dpr, 0, 0);

    // 1) 当前笔的完整轮廓（destination-in 的 destination）
    m.beginPath();
    traceCmds(m, cur, pad, pad, s);
    m.closePath();
    m.fillStyle = '#000';
    m.fill('evenodd');

    // 2) 中线粗线（source）：保留两者交集
    //    先加密中线 —— 数据里的中线点很稀疏（如「以」只有 8 点），
    //    直接连线会从弯曲的笔画中间斜切过去，导致笔画被削掉一截。
    var w = strokeWidthPx(cur, med, s);
    var dense = densify(pts, 6);
    m.globalCompositeOperation = 'destination-in';
    m.beginPath();
    m.moveTo(pad + dense[0][0] * s, pad + dense[0][1] * s);
    for (var i = 1; i < dense.length; i++) {
      m.lineTo(pad + dense[i][0] * s, pad + dense[i][1] * s);
    }
    m.lineWidth = w;
    m.lineCap = 'round';
    m.lineJoin = 'round';
    m.strokeStyle = '#000';
    m.stroke();
    m.globalCompositeOperation = 'source-over';

    // 3) 贴回主画布
    ctx.drawImage(this._mask, ox, oy, size, size);

    // 4) 笔尖光点：半径按笔画粗细自适应，避免光点比笔画还粗而显得臃肿
    if (frac > 0.02) {
      var bx = ox + pad + tip[0] * s, by = oy + pad + tip[1] * s;
      var r = Math.max(3.5, Math.min(w * 0.7, size * 0.028));
      ctx.save();
      var grd = ctx.createRadialGradient(bx, by, 0, bx, by, r);
      grd.addColorStop(0, 'rgba(240,140,40,0.9)');
      grd.addColorStop(1, 'rgba(240,140,40,0)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(bx, by, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = this.opt.tipColor || '#f08c28';
      ctx.beginPath();
      ctx.arc(bx, by, Math.max(1.4, r * 0.36), 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  };

  /** 播放动画（匀速：笔尖线速度恒定） */
  StrokeAnimator.prototype.play = function (data, from, onDone) {
    this.stop();
    var n = data.strokes.length;
    if (!n) return;
    var start = from || 0;
    if (start >= n) start = 0;
    var self = this;
    var t0 = 0;

    // 每笔时长与其中线弧长成正比，保证笔尖匀速。
    // 基准：一笔「平均长度」的用时仍是 640/speed 毫秒，总时长与旧实现一致。
    var lens = [], totalLen = 0, i;
    for (i = 0; i < n; i++) {
      lens[i] = medianLen(data.medians[i] || []);
      totalLen += lens[i];
    }
    if (totalLen <= 0) {          // 极端兜底：无中线数据时退化为等长
      for (i = 0; i < n; i++) lens[i] = 1;
      totalLen = n;
    }
    var clen = [0];
    for (i = 0; i < n; i++) clen[i + 1] = clen[i] + lens[i];

    var msPerLen = (640 / this.speed) * n / totalLen;   // 单位弧长耗时
    var L = clen[n] - clen[start];                       // 本次要描的总弧长
    var T = L * msPerLen;                                // 本次总时长

    this.playing = true;
    function frame(ts) {
      if (!t0) t0 = ts;
      var el = ts - t0;
      var pos = clen[start] + Math.min(el / msPerLen, L);

      var idx = start;
      while (idx < n - 1 && clen[idx + 1] <= pos) idx++;
      if (idx >= n) idx = n - 1;
      var segLen = lens[idx];
      var frac = segLen > 0 ? (pos - clen[idx]) / segLen : 1;
      if (frac < 0) frac = 0; else if (frac > 1) frac = 1;

      self._frame(data, idx, frac, idx);
      if (self.opt.onFrame) self.opt.onFrame(idx + 1, n, frac);

      if (el >= T) {
        self.playing = false;
        self.render(data, n, false);
        if (self.opt.onEnd) self.opt.onEnd();
        if (onDone) onDone();
        return;
      }
      self.raf = requestAnimationFrame(frame);
    }
    this.raf = requestAnimationFrame(frame);
  };

  StrokeAnimator.prototype.stop = function () {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.raf = null;
    this.playing = false;
  };

  return StrokeAnimator;
})();

if (typeof module !== 'undefined' && module.exports) module.exports = StrokeAnimator;

/**
 * 田字格汉字渲染器（Canvas 2D，浏览器与小程序通用）
 *
 * 特性：
 *  - 标准田字格：外框 + 米字虚线 + 中心十字
 *  - 笔顺动画：按笔画顺序逐笔演示，可暂停/重播/逐笔前后翻
 *  - 描红模式：浅色字模供孩子临摹，支持手指/鼠标书写
 *  - 拼音标注、笔画编号
 *
 * 坐标系：数据为 0..1024，渲染时映射到格子内边距范围。
 */
var TianZiGe = (function () {
  var BOX = 1024;

  /* ---------------- 基础工具 ---------------- */

  function mkColor(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + alpha + ')';
  }

  /* ---------------- 田字格背景 ---------------- */

  /**
   * 绘制田字格
   * @param ctx canvas 2d 上下文
   * @param x,y,w,h 格子区域
   * @param opt { lineColor, dashColor, showCross, showDiagonal, borderWidth }
   */
  function drawGrid(ctx, x, y, w, h, opt) {
    opt = opt || {};
    var lineColor = opt.lineColor || '#e8a0a0';
    var dashColor = opt.dashColor || '#f0b8b8';
    var bw = opt.borderWidth || 2;

    ctx.save();
    ctx.clearRect(x, y, w, h);

    // 白底
    ctx.fillStyle = opt.bg || '#fffdf9';
    ctx.fillRect(x, y, w, h);

    // 外框（实线）
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = bw;
    ctx.strokeRect(x + bw / 2, y + bw / 2, w - bw, h - bw);

    var cx = x + w / 2, cy = y + h / 2;

    ctx.save();
    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.clip();

    // 米字虚线
    ctx.strokeStyle = dashColor;
    ctx.lineWidth = 1;
    if (ctx.setLineDash) ctx.setLineDash([6, 5]);
    ctx.beginPath();
    if (opt.showCross !== false) {
      ctx.moveTo(cx, y); ctx.lineTo(cx, y + h);
      ctx.moveTo(x, cy); ctx.lineTo(x + w, cy);
    }
    if (opt.showDiagonal !== false) {
      ctx.moveTo(x, y); ctx.lineTo(x + w, y + h);
      ctx.moveTo(x + w, y); ctx.lineTo(x, y + h);
    }
    ctx.stroke();
    if (ctx.setLineDash) ctx.setLineDash([]);
    ctx.restore();
    ctx.restore();
  }

  /* ---------------- 字符渲染 ---------------- */

  /**
   * 绘制已解码的笔画路径
   * @param opt { color, alpha, scale, offsetX, offsetY, lineWidth, strokeMode }
   */
  function drawStrokes(ctx, strokes, x, y, size, opt) {
    opt = opt || {};
    var pad = opt.pad === undefined ? size * 0.06 : opt.pad;
    var inner = size - pad * 2;
    var sx = inner / BOX;
    var ox = x + pad, oy = y + pad;

    ctx.save();
    ctx.fillStyle = opt.color || '#2b2b2b';
    if (opt.alpha !== undefined) ctx.globalAlpha = opt.alpha;

    for (var i = 0; i < strokes.length; i++) {
      var cmds = strokes[i];
      ctx.beginPath();
      var cx = 0, cy = 0, sx0 = 0, sy0 = 0;
      for (var k = 0; k < cmds.length; k++) {
        var s = cmds[k];
        var p = s.p;
        if (s.c === 'M') {
          cx = ox + p[0] * sx; cy = oy + p[1] * sx;
          sx0 = cx; sy0 = cy;
          ctx.moveTo(cx, cy);
        } else if (s.c === 'L') {
          ctx.lineTo(ox + p[0] * sx, oy + p[1] * sx);
          cx = ox + p[0] * sx; cy = oy + p[1] * sx;
        } else if (s.c === 'Q') {
          ctx.quadraticCurveTo(
            ox + p[0] * sx, oy + p[1] * sx,
            ox + p[2] * sx, oy + p[3] * sx
          );
          cx = ox + p[2] * sx; cy = oy + p[3] * sx;
        } else if (s.c === 'C') {
          ctx.bezierCurveTo(
            ox + p[0] * sx, oy + p[1] * sx,
            ox + p[2] * sx, oy + p[3] * sx,
            ox + p[4] * sx, oy + p[5] * sx
          );
          cx = ox + p[4] * sx; cy = oy + p[5] * sx;
        } else if (s.c === 'Z') {
          ctx.closePath();
          cx = sx0; cy = sy0;
        }
      }
      ctx.closePath();
      ctx.fill('evenodd');
    }
    ctx.restore();
  }

  /**
   * 沿中线插值取点（用于笔顺动画的运笔轨迹）
   * @returns [x,y] 归一化 0..1024
   */
  function medianPoint(median, t) {
    if (!median || !median.length) return [BOX / 2, BOX / 2];
    // 按段长均匀参数化
    var segs = [], total = 0, i;
    for (i = 1; i < median.length; i++) {
      var dx = median[i][0] - median[i - 1][0];
      var dy = median[i][1] - median[i - 1][1];
      var len = Math.sqrt(dx * dx + dy * dy) || 0.0001;
      segs.push(len); total += len;
    }
    if (total === 0) return median[0].slice();
    var target = t * total, acc = 0;
    for (i = 0; i < segs.length; i++) {
      if (acc + segs[i] >= target) {
        var r = (target - acc) / segs[i];
        return [
          median[i][0] + (median[i + 1][0] - median[i][0]) * r,
          median[i][1] + (median[i + 1][1] - median[i][1]) * r
        ];
      }
      acc += segs[i];
    }
    return median[median.length - 1].slice();
  }

  /**
   * 沿中线取「从起点到 t 处」的点序列（用于笔顺渐进裁切）
   *
   * 按累积弧长精确插值，不依赖「距离比较」——
   * 后者在弯曲笔画（如捺、弯钩）上会失效，导致裁切点判断错误，
   * 从起点到笔尖拉出一条粗斜线，视觉上就是一块黑色方块。
   *
   * @param median 中线点集
   * @param t      0..1 的进度
   * @returns [[x,y], ...] 至少含起点；t=0 时只返回起点
   */
  function medianSlice(median, t) {
    if (!median || median.length === 0) return [];
    if (median.length === 1) return [median[0].slice()];

    // 累积弧长
    var acc = [0], total = 0, i;
    for (i = 1; i < median.length; i++) {
      var dx = median[i][0] - median[i - 1][0];
      var dy = median[i][1] - median[i - 1][1];
      total += Math.sqrt(dx * dx + dy * dy) || 0.0001;
      acc.push(total);
    }
    if (total <= 0) return [median[0].slice()];

    var target = Math.max(0, Math.min(1, t)) * total;
    var pts = [median[0].slice()];

    for (i = 1; i < acc.length; i++) {
      if (acc[i] <= target) {
        pts.push(median[i].slice());   // 整段都在范围内
      } else {
        // 目标落在这段内，插值出精确点后结束
        var segLen = acc[i] - acc[i - 1];
        var k = segLen > 0 ? (target - acc[i - 1]) / segLen : 0;
        k = Math.max(0, Math.min(1, k));
        pts.push([
          median[i - 1][0] + (median[i][0] - median[i - 1][0]) * k,
          median[i - 1][1] + (median[i][1] - median[i - 1][1]) * k
        ]);
        break;
      }
    }

    // t=1 时补终点，避免浮点误差导致缺最后一点
    var last = pts[pts.length - 1];
    var end = median[median.length - 1];
    if (t >= 1 && (Math.abs(last[0] - end[0]) > 0.5 || Math.abs(last[1] - end[1]) > 0.5)) {
      pts.push(end.slice());
    }
    return pts;
  }

  /* ---------------- 描红画板 ---------------- */

  /**
   * 描红画板：管理用户笔迹
   *
   * 真机兼容要点（踩过的坑）：
   *  1) 笔迹统一存「canvas 内部坐标」（已乘 dpr），绘制时不再换算。
   *     旧实现存 CSS 像素，绘制时也没乘 dpr —— 真机 dpr 常为 2.5/3，
   *     笔迹会与浅色字模明显错位，对不上笔画。
   *  2) touchmove / pointermove 绑到 window：手指划出 canvas 也能继续画。
   *     绑在 canvas 上会断笔。
   *  3) PointerEvent 与 TouchEvent 同时注册，用 _usingPointer 标志去重，
   *     避免同一手势被处理两次产生双线。
   *  4) 监听 resize / visualViewport.resize：真机地址栏收起、屏幕旋转
   *     会改变可视高度，需重算尺寸与 dpr。
   */
  function TraceBoard(canvas, opt) {
    opt = opt || {};
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.strokes = [];
    this.current = null;
    this.color = opt.color || '#2f6fd0';
    this.lineW = opt.width || 12;      // CSS 像素
    this._dpr = 1;
    this._rect = null;
    this._usingPointer = false;
    this._bind();
  }

  /** 重新测量尺寸并同步画布分辨率；布局未就绪返回 false */
  TraceBoard.prototype.sync = function () {
    var c = this.canvas;
    var rect = c.getBoundingClientRect();
    var w = rect.width || c.clientWidth || 0;
    var h = rect.height || c.clientHeight || 0;
    if (w <= 0 || h <= 0) return false;
    var dpr = (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
    this._rect = rect;
    this._dpr = dpr;
    this._cssW = w;
    this._cssH = h;
    var pw = Math.round(w * dpr);
    var ph = Math.round(h * dpr);
    if (c.width !== pw || c.height !== ph) {
      c.width = pw;
      c.height = ph;
    }
    return true;
  };

  /** 屏幕坐标 → canvas 内部坐标（乘 dpr） */
  TraceBoard.prototype._pos = function (clientX, clientY) {
    if (!this._rect) this.sync();
    var r = this._rect || this.canvas.getBoundingClientRect();
    var d = this._dpr || 1;
    return { x: (clientX - r.left) * d, y: (clientY - r.top) * d };
  };

  function touchPoint(e) {
    if (e.touches && e.touches.length) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    if (e.changedTouches && e.changedTouches.length) {
      return { x: e.changedTouches[0].clientX, y: e.changedTouches[0].clientY };
    }
    return null;
  }

  TraceBoard.prototype._bind = function () {
    var self = this;
    var c = this.canvas;

    function start(cx, cy) {
      self.sync();
      var p = self._pos(cx, cy);
      self.current = [p];
      self.strokes.push(self.current);
      self._redraw();
    }
    function move(cx, cy) {
      if (!self.current) return;
      var p = self._pos(cx, cy);
      var last = self.current[self.current.length - 1];
      if (Math.abs(p.x - last.x) + Math.abs(p.y - last.y) < 1.5) return;
      self.current.push(p);
      self._redraw();
    }
    function end() { self.current = null; }

    // ---- Pointer Event ----
    if (window.PointerEvent) {
      c.addEventListener('pointerdown', function (e) {
        e.preventDefault();
        self._usingPointer = true;
        if (c.setPointerCapture && e.pointerId !== undefined) {
          try { c.setPointerCapture(e.pointerId); } catch (err) { /* 真机可能不支持 */ }
        }
        start(e.clientX, e.clientY);
      });
      // 绑 window：滑出 canvas 继续画
      window.addEventListener('pointermove', function (e) {
        if (!self.current) return;
        e.preventDefault();
        move(e.clientX, e.clientY);
      }, { passive: false });
      window.addEventListener('pointerup', end);
      window.addEventListener('pointercancel', end);
    }

    // ---- Touch Event（真机兜底）----
    c.addEventListener('touchstart', function (e) {
      e.preventDefault();
      if (self._usingPointer) { self._usingPointer = false; return; }
      var t = touchPoint(e);
      if (t) start(t.x, t.y);
    }, { passive: false });

    window.addEventListener('touchmove', function (e) {
      if (!self.current) return;
      e.preventDefault();
      var t = touchPoint(e);
      if (t) move(t.x, t.y);
    }, { passive: false });

    window.addEventListener('touchend', end);
    window.addEventListener('touchcancel', end);

    // ---- Mouse 兜底 ----
    c.addEventListener('mousedown', function (e) {
      if (self._usingPointer) return;
      e.preventDefault();
      start(e.clientX, e.clientY);
    });
    window.addEventListener('mousemove', function (e) {
      if (!self.current || self._usingPointer) return;
      move(e.clientX, e.clientY);
    });
    window.addEventListener('mouseup', end);

    // ---- 尺寸变化重算 ----
    window.addEventListener('resize', function () {
      if (self.sync()) self._redraw();
    });
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', function () {
        if (self.sync()) self._redraw();
      });
    }
  };

  TraceBoard.prototype._redraw = function () {
    var ctx = this.ctx;
    if (!ctx) return;
    if (!this._rect) this.sync();
    var d = this._dpr || 1;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineW * d;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    for (var i = 0; i < this.strokes.length; i++) {
      var s = this.strokes[i];
      if (s.length < 2) {
        if (s.length === 1) {
          ctx.beginPath();
          ctx.arc(s[0].x, s[0].y, this.lineW * d / 2, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
        continue;
      }
      ctx.beginPath();
      ctx.moveTo(s[0].x, s[0].y);
      for (var k = 1; k < s.length; k++) ctx.lineTo(s[k].x, s[k].y);
      ctx.stroke();
    }
    ctx.restore();
  };

  TraceBoard.prototype.clear = function () {
    this.strokes = [];
    this._redraw();
  };

  TraceBoard.prototype.undo = function () {
    this.strokes.pop();
    this._redraw();
  };

  TraceBoard.prototype.isEmpty = function () { return this.strokes.length === 0; };

  return {
    BOX: BOX,
    drawGrid: drawGrid,
    drawStrokes: drawStrokes,
    medianPoint: medianPoint,
    medianSlice: medianSlice,
    TraceBoard: TraceBoard,
    mkColor: mkColor
  };
})();

if (typeof module !== 'undefined' && module.exports) module.exports = TianZiGe;

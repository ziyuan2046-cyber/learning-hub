/**
 * 网页版应用逻辑（移动优先）
 * 2026 统编版语文写字表 · 田字格笔顺 · 偏旁部首
 */
(function () {
  'use strict';

  var $ = function (id) { return document.getElementById(id); };

  var state = {
    books: [],
    grade: 1,
    bookId: null,
    book: null,
    index: -1,
    current: 0,
    playing: false,
    autoPlay: true,      // 默认开启：打开页面 / 选字后立即播放笔顺
    mode: 'demo',
    allChars: null,
    modalOpen: false,
    gridOpen: false,
    gridBookId: null,
    scrollY: null
  };

  var demo, board, modalDemo, modalTrace, modalBoard;
  var seqCanvases = [];   // 笔顺总览的小 canvas

  /* ---------------- 数据读取（兼容 file:// 直开） ----------------
   * 直接双击打开 index.html 时页面协议是 file://，浏览器会拦截 fetch，
   * 表现为「数据加载失败 / Failed to fetch」且整页空白。
   * 因此每份数据都额外提供内容等价的 assets/data/<名字>.js，
   * 把数据注册到 window.__HANZI_DATA__，用 <script> 载入不受该限制影响。
   * 读取顺序：已注册数据 -> 动态加载 .js -> fetch（http 环境兜底）。
   */

  function dataStore() {
    return (typeof window !== 'undefined' && window.__HANZI_DATA__) || {};
  }

  /* 其余册数据以 JSON 字符串内嵌，解析到 LRU 缓存里；
     这样首屏不必解析几百 KB 的对象，切册时才付这笔开销。 */
  var lazyCache = {};
  var lazyRaw = null;

  function lazyGet(key) {
    if (lazyCache[key] !== undefined) return lazyCache[key];
    if (lazyRaw === null) {
      lazyRaw = (typeof window !== 'undefined' && window.__HANZI_LAZY__) || {};
    }
    var raw = lazyRaw[key];
    if (raw === undefined) return undefined;
    var val;
    try {
      val = JSON.parse(raw);
    } catch (e) {
      return undefined;
    }
    lazyCache[key] = val;
    return val;
  }

  function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement('script');
      s.src = src;
      s.async = false;
      s.onload = function () { resolve(); };
      s.onerror = function () { reject(new Error('无法加载 ' + src)); };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  function fetchJSON(url) {
    if (!canFetchFiles()) return Promise.reject(new Error('当前环境不允许读取本地文件'));
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ' ' + r.status);
      return r.json();
    });
  }

  function fetchText(url) {
    if (!canFetchFiles()) return Promise.reject(new Error('当前环境不允许读取本地文件'));
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ' ' + r.status);
      return r.text();
    });
  }

  /**
   * 能否用 fetch 读取本地数据文件。
   * 以下情况都不能：file:// 直开、沙箱 iframe（不给 allow-same-origin 时
   * 每个外部资源请求都被拦截）、老 WebView 没有 fetch。
   * 这些场景一律改走已经内联好的 window.__HANZI_DATA__。
   */
  function canFetchFiles() {
    if (typeof fetch !== 'function') return false;
    if (typeof location === 'undefined' || location.protocol === 'file:') return false;
    return true;
  }

  function loadJSON(url, key) {
    var d = dataStore();
    if (key && d[key] !== undefined) return Promise.resolve(d[key]);
    if (key) {
      var lazy = lazyGet(key);
      if (lazy !== undefined) return Promise.resolve(lazy);
    }
    // 优先读 .json；缺失时回退到等价的 .js（仓库里通常只有 .js）
    var tryJson = canFetchFiles() ? fetchJSON(url).catch(function () { return null; }) : Promise.resolve(null);
    return tryJson.then(function (v) {
      if (v !== null) return v;
      if (!key) throw new Error('无法读取 ' + url);
      return loadScript('assets/data/' + key + '.js?v=20261023-1').then(function () {
        var s = dataStore();
        if (s[key] !== undefined) return s[key];
        var lz = lazyGet(key);
        if (lz !== undefined) return lz;
        throw new Error('无法读取 ' + key);
      });
    });
  }

  /** 笔画名称表：{ 字: ['横','竖',...] }（可选数据，缺失时只是不显示名称） */
  var strokeNames = null;

  function getStrokeNames(ch) {
    if (!strokeNames || !ch) return null;
    var list = strokeNames[ch];
    return (list && list.length) ? list : null;
  }

  function loadStrokeNames() {
    if (typeof window !== 'undefined' && window.__HANZI_STROKE_NAMES__) {
      strokeNames = window.__HANZI_STROKE_NAMES__.names || null;
      if (strokeNames) return Promise.resolve(strokeNames);
    }
    var lazyNames = lazyGet('strokenames');
    if (lazyNames) {
      strokeNames = lazyNames;
      return Promise.resolve(strokeNames);
    }
    var url = 'assets/data/strokenames';
    if (canFetchFiles()) {
      return fetchJSON(url + '.json').then(function (map) {
        strokeNames = map;
        return map;
      }).catch(function () { return null; });
    }
    return loadScript(url + '.js').then(function () {
      strokeNames = (window.__HANZI_STROKE_NAMES__ || {}).names || null;
      return strokeNames;
    }).catch(function () { return null; });
  }

  /* ---------------- 识字表 / 名称表数据 ---------------- */

  var shiziBooks = null;     // [{id,grade,term,title,chars:[{ch,py,strokes:[],poly}],groups?}]
  var strokeTable = null;    // [[笔画, 名称, 例字正常],[...]]
  var radicalTable = null;   // [[偏旁, 名称, 例字正常],[...]]

  function fromStore(prop) {
    var box = (typeof window !== 'undefined') ? window[prop] : null;
    if (box === undefined || box === null) return null;
    return box.val !== undefined ? box.val : box;
  }

  /**
   * 读取一份数据：优先 .js（仓库里一定有），再退 .json。
   * 之前只读 .json，线上 404 时返回 null，导致识字表/名称表空白。
   */
  function loadData(name, jsonPath) {
    var prop = '__HANZI_' + name.toUpperCase() + '__';
    var cached = fromStore(prop);
    if (cached) return Promise.resolve(cached);

    return loadScript('assets/data/' + name + '.js?v=20261024-1').then(function () {
      var v = fromStore(prop);
      if (v) return v;
      return null;
    }).catch(function () {
      return null;
    }).then(function (v) {
      if (v) return v;
      if (!canFetchFiles() || !jsonPath) return null;
      return fetchJSON(jsonPath).catch(function () { return null; });
    });
  }

  /* 识字表：先读目录（很小），每册按需加载 */
  var shiziIndex = null;
  var shiziBooksCache = {};

  function loadShiziIndex() {
    if (shiziIndex) return Promise.resolve(shiziIndex);
    var inline = typeof window !== 'undefined' && window.__HANZI_SHIZI_INDEX__;
    if (inline) {
      shiziIndex = inline.val !== undefined ? inline.val : inline;
      return Promise.resolve(shiziIndex);
    }
    var lazy = lazyGet('shizi_index');
    if (lazy) { shiziIndex = lazy; return Promise.resolve(lazy); }

    return loadScript('assets/data/shizi_index.js?v=20261024-1').then(function () {
      var b = (typeof window !== 'undefined') && window.__HANZI_SHIZI_INDEX__;
      if (b) shiziIndex = b.val !== undefined ? b.val : b;
      return shiziIndex;
    }).catch(function () {
      return null;
    });
  }

  function loadShiziBook(entry) {
    if (shiziBooksCache[entry.id]) return Promise.resolve(shiziBooksCache[entry.id]);
    var inline = typeof window !== 'undefined' && window['__HANZI_' + entry.key.toUpperCase() + '__'];
    if (inline) {
      var v0 = inline.val !== undefined ? inline.val : inline;
      shiziBooksCache[entry.id] = v0;
      return Promise.resolve(v0);
    }
    return loadScript('assets/data/' + entry.key + '.js?v=20261024-1').then(function () {
      var b = (typeof window !== 'undefined') && window['__HANZI_' + entry.key.toUpperCase() + '__'];
      if (!b) return null;
      var v = b.val !== undefined ? b.val : b;
      shiziBooksCache[entry.id] = v;
      return v;
    }).catch(function () { return null; });
  }

  function loadRefTables() {
    var a = typeof window !== 'undefined' && window.__HANZI_STROKETABLE__;
    var b = typeof window !== 'undefined' && window.__HANZI_RADICALTABLE__;
    if (a && b) {
      return Promise.resolve({
        strokes: a.val !== undefined ? a.val : a,
        radicals: b.val !== undefined ? b.val : b
      });
    }
    return Promise.all([
      loadData('stroketable', 'assets/data/stroketable.json'),
      loadData('radicaltable', 'assets/data/radicaltable.json')
    ]).then(function (r) { return { strokes: r[0], radicals: r[1] }; });
  }

  function loadBookText(id) {
    var d = dataStore();
    if (d[id] !== undefined) {
      return Promise.resolve(HanziCodec.parseBook(d[id]));
    }
    var url = 'assets/data/' + id;
    // 1) 内嵌惰性数据（单文件版）
    var lazy = lazyGet(id);
    if (typeof lazy === 'string') {
      return Promise.resolve(HanziCodec.parseBook(lazy));
    }
    // 2) 按需加载该册的 .js（file:// 与 http(s) 都适用，且可被浏览器缓存）
    return loadScript(url + '.js?v=20261023-1').then(function () {
      var s = dataStore();
      if (typeof s[id] === 'string') return HanziCodec.parseBook(s[id]);
      var lz = lazyGet(id);
      if (typeof lz === 'string') return HanziCodec.parseBook(lz);
      return fetchText(url + '.txt').then(HanziCodec.parseBook);
    });
  }

  /* ---------------- 初始化 ---------------- */

  function init() {
    demo = new StrokeAnimator($('demoCanvas'), {
      strokeColor: '#1f2937',
      tipColor: '#e2703a',
      speed: 1 / 3,
      onFrame: function (done) {
        if (state.modalOpen) return;      // 弹窗打开时以弹窗动画为准，避免两边互相覆盖
        state.current = done;
        updateProgress();
      },
      onEnd: function () {
        if (state.modalOpen) return;      // 弹窗内的结束处理见 modalDemo
        state.playing = false;
        state.current = curChar() ? curChar().count : 0;
        $('playBtn').textContent = '播放笔顺';
        updateProgress();
        drawDemo();
        markSeq();
      }
    });

    board = new TianZiGe.TraceBoard($('traceCanvas'), { color: '#2f6fd0', width: 15 });

    modalDemo = new StrokeAnimator($('modalCanvas'), {
      strokeColor: '#1f2937',
      tipColor: '#e2703a',
      speed: 1 / 3,
      onFrame: function (done) {
        state.current = done;          // 与主页面共用进度，笔顺小格高亮才会同步
        updateModalProgress(done);
        markSeq();
      },
      onEnd: function () {
        state.playing = false;
        state.current = curChar() ? curChar().count : 0;
        $('mPlayBtn').textContent = '播放';
        $('playBtn').textContent = '播放笔顺';
        updateProgress();
        drawModal();
        drawDemo();
        markSeq();
      }
    });

    window.addEventListener('resize', function () {
      demo.resize();
      drawDemo();
      drawTrace();
      drawSeq();
      if (state.modalOpen) { modalDemo.resize(); drawModal(); }
    });

    // 名称表是异步的，好了以后再补画一次（笔顺小格与弹窗同步更新）
    loadStrokeNames().then(function (names) {
      if (!names || !state.book) return;
      drawSeq();
      if (state.modalOpen) renderSeq('mSeqGrid', 'mSeqCv', 52);
      markSeq();
    });

    loadJSON('assets/data/books.json', 'books')
      .then(function (books) {
        state.books = books;
        var totalEl = $('totalChars');
        if (totalEl) {
          totalEl.textContent = books.reduce(function (sum, b) {
            return sum + (b.count || 0);
          }, 0);
        }
        renderGradeTabs();
        var first = books.filter(function (b) { return b.grade === 1; })[0];
        return selectBook(first.id);
      })
      .catch(function (e) {
        $('bookTitle').textContent = '数据加载失败';
        $('charGrid').innerHTML = '<div class="empty">' +
          '无法读取 assets/data/ 下的数据文件。<br>' +
          '请确认 app 文件夹完整（含 assets/data 里的 .js 与 .txt）。<br>' +
          '<span style="font-size:11px;color:#b0a48f">' + e.message + '</span>' +
          '</div>';
      });

    bindEvents();
    bindMainTabs();
    bindReadEvents();
    bindElemEvents();
    initElemView();
    bindGlobalSearch();
    bindZoomModal();
    bindRefEvents();
    initReadView();
  }

  function curChar() {
    if (!state.book || state.index < 0) return null;
    return state.book.chars[state.index];
  }

  /* ---------------- 册 / 字表 ---------------- */

  function renderGradeTabs() {
    var html = '';
    for (var g = 1; g <= 6; g++) {
      var list = state.books.filter(function (b) { return b.grade === g; });
      if (!list.length) continue;
      var total = list.reduce(function (s, b) { return s + b.count; }, 0);
      html += '<div class="grade-tab' + (g === state.grade ? ' on' : '') +
        '" data-g="' + g + '">' + g + '年级<span class="n">' + total + '</span></div>';
    }
    $('gradeTabs').innerHTML = html;
  }

  function renderTermTabs() {
    var list = state.books.filter(function (b) { return b.grade === state.grade; });
    var html = '';
    list.forEach(function (b) {
      html += '<div class="term-tab' + (b.id === state.bookId ? ' on' : '') +
        '" data-id="' + b.id + '">' + b.title + '<span class="n">' + b.count + '字</span></div>';
    });
    $('termTabs').innerHTML = html;

    var cur = list.filter(function (b) { return b.id === state.bookId; })[0];
    var note = $('revNote');
    if (cur && cur.rev) {
      note.textContent = '2026 修订：' + cur.rev;
      note.hidden = false;
    } else {
      note.hidden = true;
    }
  }

  function selectBook(id) {
    state.bookId = id;
    $('bookTitle').textContent = '加载中…';
    $('charGrid').innerHTML = '<div class="empty">加载中…</div>';
    return loadBookText(id).then(function (book) {
      state.book = book;
      state.grade = book.meta.grade;
      $('bookTitle').textContent = book.meta.title;
      $('bookCount').textContent = book.chars.length + ' 字';
      renderGradeTabs();
      renderTermTabs();
      renderGrid();
      closeModal();
      if (book.chars.length) selectChar(0);
    });
  }

  function renderGrid() {
    var b = state.book;
    var html = '';
    for (var i = 0; i < b.chars.length; i++) {
      var c = b.chars[i];
      html += '<div class="cell' + (i === state.index ? ' on' : '') + '" data-i="' + i + '">' +
        '<div class="py">' + (c.pinyin || '') + '</div>' +
        '<div class="ch">' + b.meta.chars[i] + '</div>' +
        '<div class="mt">' + (c.radical || '?') + '部 ' + c.count + '画</div>' +
        '</div>';
    }
    $('charGrid').innerHTML = html;
  }

  /* ---------------- 选字 ---------------- */

  function selectChar(i) {
    if (!state.book || i < 0 || i >= state.book.chars.length) return;
    state.index = i;
    state.current = 0;
    state.playing = false;
    demo.stop();
    $('playBtn').textContent = '播放笔顺';
    setMode('demo');
    if (board) board.clear();

    var c = state.book.chars[i];
    $('bigChar').textContent = state.book.meta.chars[i];
    $('py').textContent = c.pinyin;
    $('info').textContent = state.book.meta.title + ' · 第 ' + (i + 1) + ' / ' +
      state.book.chars.length + ' 字';
    $('tagRad').textContent = c.radical || '—';
    $('tagStruct').textContent = c.struct || '—';
    $('tagStroke').textContent = c.count + ' 画';
    updateProgress();
    updateNavBtns();

    var cells = $('charGrid').querySelectorAll('.cell');
    for (var k = 0; k < cells.length; k++) {
      cells[k].classList.toggle('on', k === i);
    }
    var on = $('charGrid').querySelector('.cell.on');
    if (on && on.scrollIntoView) on.scrollIntoView({ block: 'nearest' });

    drawDemo();
    drawSeq();
    // 弹窗内容始终同步（即使当前关闭），打开时即为最新状态
    syncModalInfo();
    renderSeq('mSeqGrid', 'mSeqCv', 52);
    markSeq();
    if (state.modalOpen) { modalDemo.resize(); drawModal(); }
    if (state.gridOpen) renderGridModal();

    if (state.autoPlay) playCurrent();
    // 手机上字表占满屏，选字后需要把写字卡片带进视野，否则看不到任何变化
    if (!state.modalOpen && !state.gridOpen) revealCard();
  }

  var lastReveal = 0;
  function revealCard() {
    var now = Date.now();
    if (now - lastReveal < 1200) return;   // 连续切字时不反复弹跳
    lastReveal = now;

    var card = document.querySelector('.card');
    if (!card) return;

    var rect = card.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight || rect.height || 1;

    // 卡片头部已经出现在屏幕里就不用动
    if (rect.top < vh && rect.bottom > 60) return;

    var before = window.pageYOffset || document.documentElement.scrollTop || 0;
    var target = Math.max(0, before + rect.top - 16);

    try {
      window.scrollTo({ top: target, behavior: 'smooth' });
    } catch (e) {
      window.scrollTo(0, target);
    }
    setTimeout(function () {
      var cur = window.pageYOffset || document.documentElement.scrollTop || 0;
      if (Math.abs(cur - before) < 4) window.scrollTo(0, target);
    }, 320);
  }

  /** 自动播放：当前字从头播放（弹窗打开时同步播放） */
  function playCurrent() {
    var c = curChar();
    if (!c) return;
    state.current = 0;
    setMode('demo');
    state.playing = true;
    $('playBtn').textContent = '暂停';
    updateProgress();
    demo.play(c, 0);
    if (state.modalOpen) {
      $('mPlayBtn').textContent = '暂停';
      modalDemo.play(c, 0);
    }
  }

  function updateNavBtns() {
    if (!state.book) return;
    $('prevCharBtn').disabled = state.index <= 0;
    $('nextCharBtn').disabled = state.index >= state.book.chars.length - 1;
  }

  /* ---------------- 绘制 ---------------- */

  function drawDemo() {
    var c = curChar();
    if (!c) return;
    demo.resize();
    demo.render(c, state.current, true);
  }

  function drawTrace() {
    var c = curChar();
    if (!c) return;
    var cv = $('traceCanvas');
    var rect = cv.getBoundingClientRect();
    var dpr = window.devicePixelRatio || 1;
    if (cv.width !== Math.round(rect.width * dpr)) {
      cv.width = Math.round(rect.width * dpr);
      cv.height = Math.round(rect.height * dpr);
      board.canvas = cv;
      board.width = Math.max(8, rect.width * 0.045);
    }
    var ctx = cv.getContext('2d');
    var size = Math.min(rect.width, rect.height);
    TianZiGe.drawGrid(ctx, 0, 0, size, size, {});
    TianZiGe.drawStrokes(ctx, c.strokes, 0, 0, size, {
      color: '#dbe4f0', alpha: 0.9, pad: size * 0.06
    });
    board._redraw();
  }

  /* ---- 笔顺分解：每笔一个小田字格，主页面与弹窗共用 ---- */

  /**
   * 在指定容器里渲染笔顺分解
   * @param boxId  容器 id
   * @param prefix canvas id 前缀（避免主页面与弹窗 id 冲突）
   * @param size   单格尺寸
   */
  function renderSeq(boxId, prefix, size) {
    var c = curChar();
    var box = $(boxId);
    if (!c || !box) return null;

    var names = getStrokeNames(state.book.meta.chars[state.index]);
    if (names && names.length !== c.count) names = null;   // 数据对不上就不显示，避免错标

    var html = '';
    for (var i = 0; i < c.count; i++) {
      var nm = names ? names[i] : '';
      html += '<div class="seq-item" data-s="' + i + '">' +
        '<canvas id="' + prefix + i + '"></canvas>' +
        '<div class="no">' + (nm ? '<b class="nm">' + nm + '</b>' : '') +
        '第' + (i + 1) + '笔</div></div>';
    }
    box.innerHTML = html;

    var dpr = window.devicePixelRatio || 1;
    var list = [];
    for (var j = 0; j < c.count; j++) {
      var cv = $(prefix + j);
      if (!cv) { list.push(null); continue; }
      cv.width = size * dpr;
      cv.height = size * dpr;
      var ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      TianZiGe.drawGrid(ctx, 0, 0, size, size, { lineWidth: 1, showDiagonal: false });
      // 该笔及之前已完成
      TianZiGe.drawStrokes(ctx, c.strokes.slice(0, j + 1), 0, 0, size, {
        color: '#1f2937', pad: size * 0.06
      });
      list.push(cv);
    }
    return list;
  }

  function drawSeq() {
    seqCanvases = renderSeq('seqScroll', 'seqCv', 62) || [];
    markSeq();
  }

  function markSeq() {
    ['seqScroll', 'mSeqGrid'].forEach(function (id) {
      var box = $(id);
      if (!box) return;
      var items = box.querySelectorAll('.seq-item');
      for (var i = 0; i < items.length; i++) {
        items[i].classList.toggle('on', i === state.current - 1);
      }
    });
  }

  function updateProgress() {
    var c = curChar();
    var total = c ? c.count : 0;
    $('stepText').textContent = '第 ' + state.current + ' / ' + total + ' 笔';
    $('barIn').style.width = (total ? (state.current / total * 100) : 0) + '%';
    markSeq();
  }

  /* ---------------- 模式 ---------------- */

  function setMode(m) {
    state.mode = m;
    var isTrace = m === 'trace';
    $('traceCanvas').classList.toggle('hidden', !isTrace);
    $('tip').textContent = isTrace
      ? '在浅色字模上直接用手指书写，练习这一笔一画。'
      : '跟着橙色笔尖看每一笔的写法，可逐笔翻看。';
    $('traceBtn').textContent = isTrace ? '返回笔顺' : '去描红';
    if (isTrace) {
      demo.stop();
      state.playing = false;
      $('playBtn').textContent = '播放笔顺';
      drawTrace();
    } else {
      drawDemo();
    }
  }

  /* ---------------- 弹窗 ---------------- */

  /** 锁定背景滚动（position:fixed 比 overflow:hidden 可靠，iOS 不会穿透） */
  function lockScroll() {
    if (state.scrollY === undefined || state.scrollY === null) {
      state.scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    }
    var s = document.body.style;
    s.position = 'fixed';
    s.top = -state.scrollY + 'px';
    s.left = '0';
    s.right = '0';
    s.width = '100%';
  }

  function unlockScroll() {
    var s = document.body.style;
    s.position = '';
    s.top = '';
    s.left = '';
    s.right = '';
    s.width = '';
    s.overflow = '';
    window.scrollTo(0, state.scrollY || 0);
    state.scrollY = null;
  }

  function openModal() {
    var c = curChar();
    if (!c) return;
    state.modalOpen = true;
    lockScroll();

    $('modal').hidden = false;
    syncModalInfo();
    $('mPlayBtn').textContent = '播放';
    renderSeq('mSeqGrid', 'mSeqCv', 52);
    markSeq();
    // 弹窗刚显示时布局还没完成，直接量尺寸会得到 0。
    // 这里全部用定时器（不用 rAF）：部分 WebView / 无头浏览器下 rAF 不回调，
    // 会导致弹窗既不重绘也不播放。
    var redraw = function () {
      if (!state.modalOpen) return;
      modalDemo.resize();
      drawModal();
    };
    setTimeout(redraw, 30);
    setTimeout(redraw, 120);
    // 自动播放开启时，弹窗打开即从头播放笔顺
    if (state.autoPlay) setTimeout(function () { playInModal(true); }, 160);
  }

  /**
   * 在弹窗内播放当前字
   * 只驱动弹窗画布；主画布保持静态到当前笔，避免两个动画互相打断。
   * @param fromStart true 时从头播放，否则从当前笔继续
   */
  function playInModal(fromStart) {
    var c = curChar();
    if (!c || !state.modalOpen) return;
    if (fromStart) state.current = 0;

    state.playing = true;
    $('playBtn').textContent = '暂停';
    $('mPlayBtn').textContent = '暂停';
    updateProgress();

    var from = fromStart ? 0 : (state.current >= c.count ? 0 : state.current);

    // 等弹窗布局完成再播；计时器拿不到有效时间基准时会瞬间跑完，故做一次校验重播
    var start = function (attempt) {
      if (!state.modalOpen) return;
      modalDemo.resize();
      var box = modalDemo.canvas.getBoundingClientRect();
      // 布局还没就绪时最多等 6 次；再拿不到尺寸也照常播放，绝不能让动画不启动
      if (attempt < 6 && (box.width < 40 || box.height < 40)) {
        setTimeout(function () { start(attempt + 1); }, 60);
        return;
      }
      modalDemo.stop();
      modalDemo.play(c, from);
      setTimeout(function () {
        if (state.modalOpen && c.count >= 3 && state.current >= c.count) {
          state.current = 0;
          modalDemo.resize();
          modalDemo.play(c, 0);
        }
      }, 450);
    };
    setTimeout(function () { start(0); }, 60);
  }

  /** 弹窗内字头信息（与主页面一致） */
  function syncModalInfo() {
    var c = curChar();
    if (!c || !state.book) return;
    $('modalTitle').textContent = state.book.meta.title;
    $('mBigChar').textContent = state.book.meta.chars[state.index];
    $('mPy').textContent = c.pinyin;
    $('mInfo').textContent = '第 ' + (state.index + 1) + ' / ' +
      state.book.chars.length + ' 字';
    $('mRad').textContent = c.radical || '—';
    $('mStruct').textContent = c.struct || '—';
    $('mStroke').textContent = c.count + ' 画';
    $('mPrevCharBtn').disabled = state.index <= 0;
    $('mNextCharBtn').disabled = state.index >= state.book.chars.length - 1;
  }

  function closeModal() {
    if (!state.modalOpen) return;
    state.modalOpen = false;
    modalDemo.stop();
    $('modal').hidden = true;
    unlockScroll();
    // 主页面继续显示当前进度，并按需重绘
    drawDemo();
    markSeq();
  }

  function drawModal() {
    var c = curChar();
    if (!c || !state.modalOpen) return;
    modalDemo.render(c, state.current, true);
    updateModalProgress(state.current);
  }

  function updateModalProgress(done) {
    var c = curChar();
    var total = c ? c.count : 0;
    $('modalStep').textContent = '第 ' + done + ' / ' + total + ' 笔';
    $('modalBar').style.width = (total ? (done / total * 100) : 0) + '%';
  }

  /* ---------------- 全览弹窗：该册所有字，完整无滚动 ---------------- */

  function openGridModal() {
    state.gridBookId = state.bookId;
    state.gridOpen = true;
    $('gridModal').hidden = false;
    $('gridModal').classList.add('scrollable');
    lockScroll();
    renderGridModal();
  }

  function closeGridModal() {
    if (!state.gridOpen) return;
    state.gridOpen = false;
    $('gridModal').hidden = true;
    $('gridModal').classList.remove('scrollable');
    unlockScroll();
  }

  /** 渲染全览：把该册所有字一次列全，不设 max-height */
  function renderGridModal() {
    var b = state.book;
    if (!b) return;
    $('gridModalTitle').textContent = state.grade + '年级全部汉字';
    $('gridModalName').textContent = b.meta.title;
    $('gridAllCount').textContent = b.chars.length;

    var html = '';
    for (var i = 0; i < b.chars.length; i++) {
      var c = b.chars[i];
      html += '<div class="cell' + (i === state.index ? ' on' : '') + '" data-i="' + i + '">' +
        '<div class="py">' + (c.pinyin || '') + '</div>' +
        '<div class="ch">' + b.meta.chars[i] + '</div>' +
        '<div class="mt">' + (c.radical || '?') + '部 ' + c.count + '画</div>' +
        '</div>';
    }
    $('gridAll').innerHTML = html;
  }

  /** 在 12 册之间前后切换 */
  function stepTerm(dir) {
    var idx = -1;
    state.books.forEach(function (b, i) { if (b.id === state.gridBookId) idx = i; });
    if (idx < 0) return;
    var next = idx + dir;
    if (next < 0 || next >= state.books.length) return;
    state.gridBookId = state.books[next].id;
    // 同步主页面到该册
    selectBook(state.gridBookId).then(function () {
      if (state.gridOpen) renderGridModal();
    });
  }

  /* ---------------- 事件 ---------------- */

  function bindEvents() {
    // 自动播放默认开启：让开关的视觉状态与 state 保持一致
    var autoBox = $('autoPlay');
    if (autoBox) autoBox.checked = state.autoPlay;

    // 年级
    $('gradeTabs').addEventListener('click', function (e) {
      var t = e.target.closest('.grade-tab');
      if (!t) return;
      var g = parseInt(t.dataset.g, 10);
      if (g === state.grade) return;
      var list = state.books.filter(function (b) { return b.grade === g; });
      if (!list.length) return;
      var prev = state.books.filter(function (b) { return b.id === state.bookId; })[0];
      var wantLower = prev && prev.term === '下册';
      var target = null;
      list.forEach(function (b) { if (!target && b.term === (wantLower ? '下册' : '上册')) target = b; });
      selectBook((target || list[0]).id);
    });

    // 册信息栏的「全部展开」按钮
    $('expandBtn').addEventListener('click', openGridModal);

    // 全览弹窗：上一册 / 下一册
    $('gridPrevTerm').addEventListener('click', function () { stepTerm(-1); });
    $('gridNextTerm').addEventListener('click', function () { stepTerm(1); });
    $('gridModalClose').addEventListener('click', closeGridModal);
    $('gridAll').addEventListener('click', function (e) {
      var t = e.target.closest('.cell');
      if (!t) return;
      var i = parseInt(t.dataset.i, 10);
      closeGridModal();
      if (state.bookId === state.gridBookId) {
        selectChar(i);
      } else {
        var keep = state.gridBookId;
        selectBook(keep).then(function () { selectChar(i); });
      }
    });

    // 上下册
    $('termTabs').addEventListener('click', function (e) {
      var t = e.target.closest('.term-tab');
      if (!t || t.dataset.id === state.bookId) return;
      selectBook(t.dataset.id);
    });

    // 字表点击
    $('charGrid').addEventListener('click', function (e) {
      var t = e.target.closest('.cell');
      if (!t) return;
      selectChar(parseInt(t.dataset.i, 10));
    });

    // 上/下一个字
    $('prevCharBtn').addEventListener('click', function () { selectChar(state.index - 1); });
    $('nextCharBtn').addEventListener('click', function () { selectChar(state.index + 1); });

    // 播放
    $('playBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      if (state.playing) {
        demo.stop();
        state.playing = false;
        $('playBtn').textContent = '播放笔顺';
        drawDemo();
        return;
      }
      setMode('demo');
      state.playing = true;
      $('playBtn').textContent = '暂停';
      demo.play(c, state.current >= c.count ? 0 : state.current);
    });

    // 自动播放开关：开启时切换新字自动播放；关闭时停止当前播放
    $('autoPlay').addEventListener('change', function () {
      state.autoPlay = this.checked;
      if (state.autoPlay) {
        playCurrent();
      } else {
        demo.stop();
        modalDemo.stop();
        state.playing = false;
        $('playBtn').textContent = '播放笔顺';
        $('mPlayBtn').textContent = '播放';
        drawDemo();
        updateProgress();
      }
    });

    $('replayBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      setMode('demo');
      state.current = 0;
      state.playing = true;
      $('playBtn').textContent = '暂停';
      updateProgress();
      demo.play(c, 0);
    });

    $('prevBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      demo.stop();
      state.playing = false;
      $('playBtn').textContent = '播放笔顺';
      setMode('demo');
      state.current = Math.max(0, state.current - 1);
      updateProgress();
      drawDemo();
    });

    $('nextBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      demo.stop();
      state.playing = false;
      $('playBtn').textContent = '播放笔顺';
      setMode('demo');
      state.current = Math.min(c.count, state.current + 1);
      updateProgress();
      drawDemo();
    });

    $('traceBtn').addEventListener('click', function () {
      if (state.mode === 'trace') {
        setMode('demo');
      } else {
        board.clear();
        setMode('trace');
      }
    });

    // 笔顺总览点击：跳到该笔
    $('seqScroll').addEventListener('click', function (e) {
      var t = e.target.closest('.seq-item');
      if (!t) return;
      var n = parseInt(t.dataset.s, 10) + 1;
      demo.stop();
      state.playing = false;
      $('playBtn').textContent = '播放笔顺';
      setMode('demo');
      state.current = n;
      updateProgress();
      drawDemo();
    });

    // 放大
    $('zoomBtn').addEventListener('click', openModal);
    $('modalClose').addEventListener('click', closeModal);
    $('modal').addEventListener('click', function (e) {
      if (e.target === $('modal')) closeModal();
    });

    $('mPlayBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      if (state.playing) {                 // 正在播放 -> 暂停
        modalDemo.stop();
        demo.stop();
        state.playing = false;
        $('mPlayBtn').textContent = '播放';
        $('playBtn').textContent = '播放笔顺';
        return;
      }
      playInModal(false);                  // 从当前笔继续
    });

    $('mPrevBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      modalDemo.stop();
      $('mPlayBtn').textContent = '播放';
      state.current = Math.max(0, state.current - 1);
      updateProgress();
      drawModal();
      markSeq();
    });

    $('mNextBtn').addEventListener('click', function () {
      var c = curChar();
      if (!c) return;
      modalDemo.stop();
      $('mPlayBtn').textContent = '播放';
      state.current = Math.min(c.count, state.current + 1);
      updateProgress();
      drawModal();
      markSeq();
    });

    // 弹窗内切换上/下一个字
    $('mPrevCharBtn').addEventListener('click', function () {
      selectChar(state.index - 1);
    });
    $('mNextCharBtn').addEventListener('click', function () {
      selectChar(state.index + 1);
    });

    // 弹窗内点笔顺分解跳笔
    $('mSeqGrid').addEventListener('click', function (e) {
      var t = e.target.closest('.seq-item');
      if (!t) return;
      modalDemo.stop();
      $('mPlayBtn').textContent = '播放';
      state.current = parseInt(t.dataset.s, 10) + 1;
      updateProgress();
      drawModal();
      markSeq();
    });

    $('mReplayBtn').addEventListener('click', function () {
      if (!curChar()) return;
      playInModal(true);
    });

    $('mTraceBtn').addEventListener('click', function () {
      if (!state.modalOpen) return;
      var c = curChar();
      if (!c) return;
      // 弹窗内直接显示完整字，提示可在此练习
      modalDemo.stop();
      modalDemo.render(c, c.count, false);
      $('modalStep').textContent = '完整字形 · ' + c.count + ' 画';
      $('modalBar').style.width = '100%';
    });

    // 搜索
    var input = $('search');
    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { doSearch(input.value.trim()); }, 200);
    });

    // 键盘
    document.addEventListener('keydown', function (e) {
      if (e.target && e.target.tagName === 'INPUT') return;
      if (e.key === 'Escape') { closeModal(); return; }
      if (!state.book || state.index < 0) return;
      if (e.key === 'ArrowLeft') selectChar(state.index - 1);
      else if (e.key === 'ArrowRight') selectChar(state.index + 1);
    });
  }

  /* ---------------- 搜索 ---------------- */

  function plainPinyin(py) {
    return (py || '')
      .replace(/[āáǎà]/g, 'a').replace(/[ēéěè]/g, 'e')
      .replace(/[īíǐì]/g, 'i').replace(/[ōóǒò]/g, 'o')
      .replace(/[ūúǔù]/g, 'u').replace(/[ǖǘǚǜ]/g, 'v')
      .replace(/[ńňǹ]/g, 'n').replace(/[ḿ]/g, 'm');
  }

  var RADICAL_ALIAS = {
    '三点水': '氵', '两点水': '冫', '提手旁': '扌', '木字旁': '木', '单人旁': '亻',
    '双人旁': '彳', '言字旁': '讠', '竖心旁': '忄', '宝盖头': '宀', '广字旁': '广',
    '走之底': '辶', '走之旁': '辶', '捺': '辶', '绞丝旁': '纟', '丝字旁': '纟',
    '草字头': '艹', '竹字头': '⺮', '反犬旁': '犭', '犬字旁': '犭', '月字旁': '月',
    '肉月旁': '月', '耳刀旁': '阝', '左耳旁': '阝', '右耳旁': '阝',
    '立刀旁': '刂', '刀字旁': '刂', '建之旁': '廴', '宿字头': '宀', '点字头': '亠',
    '单人': '亻', '双人': '彳', '宝盖': '宀', '草头': '艹', '竹头': '⺮',
    '提手': '扌', '木字': '木', '言字': '讠', '竖心': '忄', '走之': '辶',
    '绞丝': '纟', '反犬': '犭', '立刀': '刂', '耳刀': '阝', '点字': '亠',
    '三点': '氵', '两点': '冫'
  };

  function normalizeRadical(q) {
    if (!q) return q;
    if (RADICAL_ALIAS[q]) return RADICAL_ALIAS[q];
    var stripped = q.replace(/(旁|边|底|头)$/, '');
    if (stripped !== q) {
      if (RADICAL_ALIAS[stripped]) return RADICAL_ALIAS[stripped];
      var noZi = stripped.replace(/字$/, '');
      if (RADICAL_ALIAS[noZi]) return RADICAL_ALIAS[noZi];
      if (noZi.length === 1) return noZi;
    }
    return q;
  }

  function buildIndex() {
    if (state.allChars) return Promise.resolve(state.allChars);
    var jobs = state.books.map(function (b) {
      return loadBookText(b.id).then(function (book) {
        return book.chars.map(function (c, i) {
          return {
            ch: book.meta.chars[i],
            pinyin: c.pinyin,
            py: plainPinyin(c.pinyin),
            radical: c.radical,
            struct: c.struct,
            count: c.count,
            book: b.id,
            i: i,
            title: book.meta.title
          };
        });
      });
    });
    return Promise.all(jobs).then(function (lists) {
      state.allChars = [].concat.apply([], lists);
      return state.allChars;
    });
  }

  function doSearch(q) {
    var box = $('searchRes');
    if (!q) { box.innerHTML = ''; return; }

    buildIndex().then(function (list) {
      var lower = q.toLowerCase();
      var lowerPlain = plainPinyin(lower);
      var rad = normalizeRadical(q);
      var hits = list.filter(function (o) {
        if (o.ch === q) return true;
        if (o.pinyin && o.pinyin.toLowerCase().indexOf(lower) === 0) return true;
        if (o.py && o.py.indexOf(lowerPlain) === 0) return true;
        if (rad && o.radical === rad) return true;
        return false;
      });

      if (!hits.length) {
        box.innerHTML = '<div class="none">没有找到「' + q + '」</div>';
        return;
      }
      var html = hits.slice(0, 50).map(function (o) {
        return '<div class="r" data-book="' + o.book + '" data-i="' + o.i + '">' +
          o.ch + '<b>' + o.pinyin + '</b>' +
          '<span class="rs">' + o.radical + '部 ' + o.struct + '</span></div>';
      }).join('');
      if (hits.length > 50) html += '<div class="none">共 ' + hits.length + ' 个</div>';
      box.innerHTML = html;
    });
  }

  $('searchRes').addEventListener('click', function (e) {
    var r = e.target.closest('.r');
    if (!r || !r.dataset.book) return;
    var book = r.dataset.book, i = parseInt(r.dataset.i, 10);
    $('searchRes').innerHTML = '';
    $('search').value = '';
    if (book === state.bookId) {
      selectChar(i);
    } else {
      selectBook(book).then(function () { selectChar(i); });
    }
  });

  /* ================================================================
   *  识字表视图
   * ================================================================ */

  var read = {
    catalog: [],        // 目录（id/title/grade/term/count）
    books: [],          // 已加载的册
    grade: 1,
    bookId: null,
    book: null,
    index: -1,          // 当前字下标
    current: 0,
    playing: false,
    autoPlay: true,
    demo: null
  };

  function readChar() {
    if (!read.book || read.index < 0) return null;
    return read.book.chars[read.index];
  }

  function initReadView() {
    read.demo = new StrokeAnimator($('readCanvas'), {
      strokeColor: '#1f2937',
      tipColor: '#e2703a',
      speed: 1 / 3,
      onFrame: function (done) {
        read.current = done;
        updateReadProgress();
        markReadSeq();
      },
      onEnd: function () {
        read.playing = false;
        read.current = readChar() ? readChar().strokes.length : 0;
        $('readPlay').textContent = '播放笔顺';
        updateReadProgress();
        drawRead();
        markReadSeq();
      }
    });

    var box = $('rAutoPlay');
    if (box) box.checked = read.autoPlay;

    loadShiziIndex().then(function (idx) {
      if (!idx || !idx.length) {
        $('readTitle').textContent = '识字表数据加载失败';
        $('readGrid').innerHTML = '<div class="empty">未能读取识字表数据</div>';
        return;
      }
      read.catalog = idx;        // 目录（只有 id/title/count）
      read.books = [];           // 已加载的册
      var first = idx.filter(function (b) { return b.grade === 1; })[0] || idx[0];
      read.grade = first.grade;
      renderReadGradeTabs();
      selectReadBookEntry(first);
    });
  }

  /** 目录里该年级的册（含未加载的） */
  function readEntriesOf(grade) {
    return (read.catalog || []).filter(function (b) { return b.grade === grade; });
  }

  function renderReadGradeTabs() {
    var html = '';
    for (var g = 1; g <= 6; g++) {
      var list = readEntriesOf(g);
      if (!list.length) continue;
      var total = 0;
      list.forEach(function (b) { total += b.count || 0; });
      html += '<div class="grade-tab' + (g === read.grade ? ' on' : '') +
        '" data-g="' + g + '">' + g + '年级<span class="n">' + total + '</span></div>';
    }
    $('readGradeTabs').innerHTML = html;
  }

  function renderReadTermTabs() {
    var list = readEntriesOf(read.grade);
    var html = '';
    list.forEach(function (b) {
      html += '<div class="term-tab' + (b.id === read.bookId ? ' on' : '') +
        '" data-id="' + b.id + '">' + b.title +
        '<span class="n">' + (b.count || 0) + '字</span></div>';
    });
    $('readTermTabs').innerHTML = html;

    var note = $('readNote');
    var cur = read.book;
    if (cur && cur.kind === 'image') {
      note.hidden = false;
      note.textContent = '按教材识字表照片逐字录入：识字 → 汉语拼音 → 阅读 → 语文园地，共 280 个生字（另标 4 个多音字）';
    } else {
      note.hidden = true;
    }
  }

  /** 按目录项加载并显示某一册 */
  function selectReadBookEntry(entry) {
    if (!entry) return;
    read.bookId = entry.id;
    read.grade = entry.grade;
    $('readTitle').textContent = entry.title + '识字表';
    $('readCount').textContent = (entry.count || 0) + ' 字';
    if (!read.book || read.book.id !== entry.id) {
      $('readGrid').innerHTML = '<div class="empty">加载中…</div>';
    }
    renderReadGradeTabs();
    renderReadTermTabs();

    var cached = shiziBooksCache[entry.id];
    if (cached) { applyReadBook(cached); return; }
    loadShiziBook(entry).then(function (b) {
      if (!b) {
        $('readGrid').innerHTML = '<div class="empty">该册数据加载失败</div>';
        return;
      }
      if (read.bookId !== entry.id) return;   // 用户已切走
      applyReadBook(b);
    });
  }

  function applyReadBook(book) {
    // 字段名对齐
    (book.chars || []).forEach(function (c) {
      if (c.nm && !c.strokes) c.strokes = c.nm;
      if (c.strokes && !c.nm) c.nm = c.strokes;
      if (c.ol && !c.paths) { c.paths = c.ol; c.medians = c.med; }
    });
    read.book = book;
    read.grade = book.grade || read.grade;
    $('readTitle').textContent = book.title + '识字表';
    $('readCount').textContent = (book.chars || []).length + ' 字';
    renderReadGradeTabs();
    renderReadTermTabs();
    renderReadGrid();
    if (book.chars && book.chars.length) selectReadChar(0);
  }

  /** 兼容旧调用 */
  function selectReadBook(id) {
    var e = (read.catalog || []).filter(function (b) { return b.id === id; })[0];
    if (e) selectReadBookEntry(e);
  }

  function renderReadGrid() {
    var b = read.book;
    if (!b) return;
    var html = '';
    for (var i = 0; i < b.chars.length; i++) {
      var c = b.chars[i];
      html += '<div class="cell' + (i === read.index ? ' on' : '') +
        (c.poly ? ' poly' : '') + '" data-i="' + i + '">' +
        '<div class="py">' + (c.py || '') + '</div>' +
        '<div class="ch">' + c.ch + '</div>' +
        '<div class="mt">' + (c.strokes ? c.strokes.length : 0) + '画</div>' +
        '</div>';
    }
    $('readGrid').innerHTML = html;
  }

  function selectReadChar(i) {
    var b = read.book;
    if (!b || i < 0 || i >= b.chars.length) return;
    read.index = i;
    read.current = 0;
    read.playing = false;
    read.demo.stop();
    $('readPlay').textContent = '播放笔顺';

    var c = b.chars[i];
    $('rBigChar').textContent = c.ch;
    $('rPy').textContent = c.py || '';
    $('rInfo').textContent = b.title + ' · 第 ' + (i + 1) + ' / ' + b.chars.length + ' 字';
    $('rStroke').textContent = (c.strokes ? c.strokes.length : 0) + ' 画';
    $('rPolyTag').hidden = !c.poly;

    var cells = $('readGrid').querySelectorAll('.cell');
    for (var k = 0; k < cells.length; k++) cells[k].classList.toggle('on', k === i);

    updateReadProgress();
    drawRead();
    renderReadSeq();
    markReadSeq();

    if (read.autoPlay) playRead();
  }

  function drawRead() {
    var c = readChar();
    if (!c) return;
    read.demo.resize();
    var d = toStrokeData(c);
    if (!d.strokes.length) {
      // 索引尚未就绪，稍后补画
      setTimeout(function () {
        if (readChar() === c) drawRead();
      }, 260);
      return;
    }
    read.demo.render(d, read.current, true);
  }

  /* 写字表里的字可直接借用它的笔顺轮廓，识字表只为独有字内置轮廓 */
  var pathIndex = {};      // ch -> {medians, outlines}

  /** 识字表第 N 册 大致对应写字表第 N 册 */
  function guessWritingBook(ch) {
    var b = read.book;
    if (!b) return 'b0';
    var m = /shizi(\d+)/.exec(b.id || '');
    if (m) return 'b' + m[1];
    return 'b0';
  }

  function buildPathIndex() {
    if (pathIndexReady) return pathIndexReady;
    var jobs = (state.books || []).map(function (b) {
      return loadBookText(b.id).then(function (book) {
        var metaChars = book.meta.chars;
        book.chars.forEach(function (c, i) {
          var ch = metaChars[i];
          if (!ch || pathIndex[ch]) return;
          pathIndex[ch] = { medians: c.medians, outlines: c.strokes };
        });
      });
    });
    pathIndexReady = Promise.all(jobs).catch(function () {});
    return pathIndexReady;
  }

  function decodeOutline(list) {
    return (list || []).map(function (s) {
      return (typeof s === 'string') ? HanziCodec.decodePath(s) : s;
    });
  }

  /** 把当前册加入路径索引（避免一次加载全部 12 册） */
  var indexedBooks = {};

  function indexBook(bookId) {
    if (indexedBooks[bookId]) return;
    indexedBooks[bookId] = true;
    loadBookText(bookId).then(function (book) {
      var metaChars = book.meta.chars;
      book.chars.forEach(function (c, i) {
        var ch = metaChars[i];
        if (!ch || pathIndex[ch]) return;
        pathIndex[ch] = { medians: c.medians, outlines: c.strokes };
      });
      // 数据到了，补画一次
      if (read.book && bookId === (read.book.linkBook || read.book.id)) {
        drawRead(); renderReadSeq(); markReadSeq();
      }
    }).catch(function () {});
  }

  /** 识字表数据 -> 动画器所需结构 {strokes:指令, medians:中线} */
  function toStrokeData(c) {
    var paths = c.paths, medians = c.medians;
    if (!paths) {
      var p = pathIndex[c.ch];
      if (p) { paths = p.outlines; medians = p.medians; }
      else if (c.ch) {
        // 该字不在识字表自带的轮廓里，按册索引写字表数据（只取当前册）
        var bid = guessWritingBook(c.ch);
        if (bid) indexBook(bid);
      }
    }
    return {
      strokes: decodeOutline(paths),
      medians: medians || [],
      count: (c.strokes || []).length
    };
  }

  function playRead() {
    var c = readChar();
    if (!c) return;
    read.current = 0;
    read.playing = true;
    $('readPlay').textContent = '暂停';
    updateReadProgress();
    read.demo.play(toStrokeData(c), 0);
  }

  function updateReadProgress() {
    var c = readChar();
    var total = c ? (c.strokes ? c.strokes.length : 0) : 0;
    $('readStep').textContent = '第 ' + read.current + ' / ' + total + ' 笔';
    $('readBar').style.width = (total ? (read.current / total * 100) : 0) + '%';
  }

  function renderReadSeq() {
    var c = readChar();
    var box = $('readSeq');
    if (!c || !box) return;
    var names = c.strokes || [];
    var html = '';
    for (var i = 0; i < names.length; i++) {
      html += '<div class="seq-item" data-s="' + i + '">' +
        '<canvas id="readCv' + i + '"></canvas>' +
        '<div class="no"><b class="nm">' + names[i] + '</b>第' + (i + 1) + '笔</div></div>';
    }
    box.innerHTML = html;

    var dpr = window.devicePixelRatio || 1, size = 56;
    // 关键：共用写字表数据时 c.paths 不存在，必须走 toStrokeData 的取路径逻辑
    var strokeData = toStrokeData(c);
    if (strokeData.strokes.length !== names.length) {
      // 轮廓还没准备好（写字表异步索引未完成），稍后重试一次
      setTimeout(function () {
        if (readChar() === c) { renderReadSeq(); markReadSeq(); }
      }, 260);
    }
    var paths = strokeData.strokes;
    for (var j = 0; j < names.length; j++) {
      var cv = $('readCv' + j);
      if (!cv) continue;
      cv.width = size * dpr; cv.height = size * dpr;
      var ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      TianZiGe.drawGrid(ctx, 0, 0, size, size, { lineWidth: 1, showDiagonal: false });
      TianZiGe.drawStrokes(ctx, paths.slice(0, j + 1), 0, 0, size, {
        color: '#1f2937', pad: size * 0.06
      });
    }
  }

  function markReadSeq() {
    var box = $('readSeq');
    if (!box) return;
    var items = box.querySelectorAll('.seq-item');
    for (var i = 0; i < items.length; i++) {
      items[i].classList.toggle('on', i === read.current - 1);
    }
  }

  function bindReadEvents() {
    $('readGradeTabs').addEventListener('click', function (e) {
      var t = e.target.closest('.grade-tab');
      if (!t) return;
      var g = parseInt(t.dataset.g, 10);
      if (g === read.grade) return;
      var list = readEntriesOf(g);
      if (!list.length) return;
      var wantLower = read.book && read.book.term === '下册';
      var target = null;
      list.forEach(function (b) {
        if (!target && b.term === (wantLower ? '下册' : '上册')) target = b;
      });
      selectReadBookEntry(target || list[0]);
    });

    $('readTermTabs').addEventListener('click', function (e) {
      var t = e.target.closest('.term-tab');
      if (!t || t.dataset.id === read.bookId) return;
      selectReadBook(t.dataset.id);
    });

    $('readGrid').addEventListener('click', function (e) {
      var t = e.target.closest('.cell');
      if (!t) return;
      selectReadChar(parseInt(t.dataset.i, 10));
    });

    $('readPrevChar').addEventListener('click', function () { selectReadChar(read.index - 1); });
    $('readNextChar').addEventListener('click', function () { selectReadChar(read.index + 1); });

    $('readPlay').addEventListener('click', function () {
      if (!readChar()) return;
      if (read.playing) {
        read.demo.stop();
        read.playing = false;
        $('readPlay').textContent = '播放笔顺';
        drawRead();
        return;
      }
      read.demo.play(toStrokeData(readChar()), read.current >= (readChar().strokes || []).length ? 0 : read.current);
      read.playing = true;
      $('readPlay').textContent = '暂停';
    });

    $('readReplay').addEventListener('click', function () { playRead(); });

    $('readPrev').addEventListener('click', function () {
      var c = readChar(); if (!c) return;
      read.demo.stop(); read.playing = false;
      $('readPlay').textContent = '播放笔顺';
      read.current = Math.max(0, read.current - 1);
      updateReadProgress(); drawRead(); markReadSeq();
    });

    $('readNext').addEventListener('click', function () {
      var c = readChar(); if (!c) return;
      read.demo.stop(); read.playing = false;
      $('readPlay').textContent = '播放笔顺';
      read.current = Math.min((c.strokes || []).length, read.current + 1);
      updateReadProgress(); drawRead(); markReadSeq();
    });

    $('readSeq').addEventListener('click', function (e) {
      var t = e.target.closest('.seq-item');
      if (!t) return;
      read.demo.stop(); read.playing = false;
      $('readPlay').textContent = '播放笔顺';
      read.current = parseInt(t.dataset.s, 10) + 1;
      updateReadProgress(); drawRead(); markReadSeq();
    });

    $('rAutoPlay').addEventListener('change', function () {
      read.autoPlay = this.checked;
      if (read.autoPlay) playRead();
      else { read.demo.stop(); read.playing = false; $('readPlay').textContent = '播放笔顺'; drawRead(); }
    });

    $('readExpandBtn').addEventListener('click', function () {
      var b = read.book;
      if (!b) return;
      var html = '';
      for (var i = 0; i < b.chars.length; i++) {
        var c = b.chars[i];
        html += '<div class="cell' + (i === read.index ? ' on' : '') + (c.poly ? ' poly' : '') +
          '" data-i="' + i + '"><div class="py">' + (c.py || '') + '</div>' +
          '<div class="ch">' + c.ch + '</div><div class="mt">' + (c.strokes || []).length + '画</div></div>';
      }
      var box = $('readGrid');
      box.classList.toggle('expanded');
      box.innerHTML = html;
    });

    window.addEventListener('resize', function () {
      if (!$('viewRead').hidden) { read.demo.resize(); drawRead(); }
    });
  }

  /* ================================================================
   *  名称表视图（笔画名称表 / 常用偏旁名称表）
   * ================================================================ */

  var refState = { tab: 'stroke', strokes: null, radicals: null };

  /**
   * 笔画示意：楷体真实笔画轮廓。
   * 数据 m = [scale, tx, ty]，已按正方形视框等比缩放并居中，笔形不变形。
   */
  /**
   * 字形/笔画示意。
   *  data.vb = [x,y,w,h]  -> 用 viewBox 裁切（偏旁部件，保持原字形不变形）
   *  data.m  = [s, tx, ty] -> 等比缩放并居中（笔画）
   */
  /**
   * 字形/笔画示意。
   *  data.vb = [x,y,w,h] -> 裁出该区域并铺满格子（偏旁部件）
   *  data.m  = [s, tx, ty] -> 等比缩放居中（笔画）
   */
  function glyphHtml(glyph, data) {
    if (data && data.d && data.vb) {
      var v = data.vb;
      return '<div class="glyph-cell">' +
        '<svg viewBox="' + v.join(' ') + '" width="52" height="52" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
        '<path d="' + data.d + '" fill="#1a1a1a" fill-rule="nonzero"/></svg></div>';
    }
    if (data && data.d && data.m) {
      var m = data.m;
      return '<div class="glyph-cell">' +
        '<svg viewBox="0 0 100 100" width="52" height="52" preserveAspectRatio="xMidYMid meet" aria-hidden="true">' +
        '<g transform="translate(' + m[1] + ',' + m[2] + ') scale(' + m[0] + ')">' +
        '<path d="' + data.d + '" fill="#1a1a1a" fill-rule="nonzero"/></g></svg></div>';
    }
    if (!glyph) return '<div class="glyph-cell"></div>';
    return '<div class="glyph-cell">' + glyph + '</div>';
  }

  function refRow(glyph, name, examples, svg, headLabel) {
    if (headLabel) {
      return '<div class="ref-row head"><div>' + headLabel[0] + '</div><div>' +
        headLabel[1] + '</div><div>' + headLabel[2] + '</div></div>';
    }
    var ex = '';
    for (var i = 0; i < examples.length; i++) {
      ex += '<span data-ch="' + examples[i] + '">' + examples[i] + '</span>';
    }
    return '<div class="ref-row">' +
      glyphHtml(glyph, svg) +
      '<div class="name-cell">' + name + '</div>' +
      '<div class="ex">' + ex + '</div>' +
      '</div>';
  }

  function renderRefTables() {
    var st = $('strokeTable'), rd = $('radicalTable');

    if (refState.strokes) {
      var h = refRow('', '', [], null, ['笔画', '名称', '例字']);
      refState.strokes.forEach(function (row) {
        h += refRow(row[0], row[1], splitChars(row[2]), row[3]);
      });
      st.innerHTML = h;
      $('strokeTableCount').textContent = refState.strokes.length + ' 种';
    }

    if (refState.radicals) {
      var h2 = refRow('', '', [], null, ['偏旁', '名称', '例字']);
      refState.radicals.forEach(function (row) {
        h2 += refRow(row[0], row[1], splitChars(row[2]), row[3]);
      });
      rd.innerHTML = h2;
      $('radicalTableCount').textContent = refState.radicals.length + ' 种';
    }
  }

  function splitChars(s) {
    var out = [];
    for (var i = 0; i < s.length; i++) out.push(s.charAt(i));
    return out;
  }

  /** 点例字 -> 跳到该字的笔顺（优先必会写字表，其次识字表） */
  function openCharFromRef(ch) {
    if (!ch) return;
    var inWrite = null;
    if (state.books && state.allChars) {
      inWrite = state.allChars.filter(function (o) { return o.ch === ch; })[0];
    }
    if (inWrite) {
      switchView('write');
      if (inWrite.book === state.bookId) selectChar(inWrite.i);
      else selectBook(inWrite.book).then(function () { selectChar(inWrite.i); });
      return;
    }
    var hit = null;
    if (read.books) {
      for (var i = 0; i < read.books.length; i++) {
        var idx = read.books[i].chars.findIndex(function (c) { return c.ch === ch; });
        if (idx >= 0) { hit = { book: read.books[i].id, i: idx }; break; }
      }
    }
    if (hit) {
      switchView('read');
      selectReadBook(hit.book);
      selectReadChar(hit.i);
      return;
    }
    searchChar(ch);
  }

  function searchChar(ch) {
    switchView('write');
    var s = $('search');
    s.value = ch;
    s.dispatchEvent(new Event('input', { bubbles: true }));
  }

  function bindRefEvents() {
    $('refTabs').addEventListener('click', function (e) {
      var t = e.target.closest('.main-tab');
      if (!t) return;
      refState.tab = t.dataset.ref;
      var btns = $('refTabs').querySelectorAll('.main-tab');
      for (var i = 0; i < btns.length; i++) btns[i].classList.toggle('on', btns[i] === t);
      $('strokePanel').hidden = refState.tab !== 'stroke';
      $('radicalPanel').hidden = refState.tab !== 'radical';
    });

    ['strokeTable', 'radicalTable', 'refResult'].forEach(function (id) {
      $(id).addEventListener('click', function (e) {
        var t = e.target.closest('[data-ch]');
        if (!t) return;
        openCharFromRef(t.dataset.ch);
      });
    });

    var input = $('refSearch');
    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () { doRefSearch(input.value.trim()); }, 180);
    });
  }

  function doRefSearch(q) {
    var box = $('refResult');
    if (!q) { box.innerHTML = ''; return; }
    var hits = [];
    if (refState.strokes) {
      refState.strokes.forEach(function (r) {
        if (r[1].indexOf(q) >= 0 || r[0] === q) hits.push({ kind: '笔画', g: r[0], n: r[1], ex: r[2] });
      });
    }
    if (refState.radicals) {
      refState.radicals.forEach(function (r) {
        if (r[1].indexOf(q) >= 0 || r[0] === q) hits.push({ kind: '偏旁', g: r[0], n: r[1], ex: r[2] });
      });
    }
    if (!hits.length) {
      box.innerHTML = '<div class="none">没有找到「' + q + '」相关的笔画或偏旁</div>';
      return;
    }
    box.innerHTML = hits.map(function (h) {
      var ex = splitChars(h.ex).map(function (c) {
        return '<span data-ch="' + c + '">' + c + '</span>';
      }).join('');
      return '<div class="hit"><div class="g">' + h.g + '</div>' +
        '<div class="n">' + h.n + '<small>' + h.kind + '</small></div>' +
        '<div class="ex">' + ex + '</div></div>';
    }).join('');
  }

  function initRefView() {
    loadRefTables().then(function (r) {
      if (!r) {
        $('strokeTable').innerHTML = '<div class="empty">笔画名称表加载失败</div>';
        $('radicalTable').innerHTML = '<div class="empty">偏旁名称表加载失败</div>';
        return;
      }
      refState.strokes = r.strokes;
      refState.radicals = r.radicals;
      renderRefTables();
    });
  }

  /** 名称表按需加载（切到该页签时才取） */
  function ensureRefTables() {
    if (refState.strokes && refState.radicals) return Promise.resolve();
    if (refState.loading) return refState.loading;
    refState.strokes = refState.strokes || null;
    refState.loading = loadRefTables().then(function (r) {
      refState.loading = null;
      if (!r) return;
      refState.strokes = r.strokes;
      refState.radicals = r.radicals;
      renderRefTables();
    });
    return refState.loading;
  }

  /* ---------------- 主视图切换 ---------------- */

  function switchView(name) {
    ['write', 'read', 'ref', 'elem'].forEach(function (v) {
      var el = $('view' + v.charAt(0).toUpperCase() + v.slice(1));
      if (el) el.hidden = (v !== name);
    });
    var btns = $('mainTabs').querySelectorAll('.main-tab');
    for (var i = 0; i < btns.length; i++) {
      btns[i].classList.toggle('on', btns[i].dataset.view === name);
    }
    $('appTitle').textContent = name === 'read' ? '小学必认识字'
      : name === 'ref' ? '字表速查'
      : name === 'elem' ? '化学元素周期表' : '小学必会写字';

    if (name === 'write') {
      demo.resize(); drawDemo(); drawSeq();
    } else if (name === 'read') {
      if (read.charTick === undefined && $('readGrid').children.length === 0) {
        // 视图首次打开时若数据未就绪，补一次
        var first = read.catalog.filter(function (b) { return b.grade === read.grade; })[0];
        if (first) selectReadBookEntry(first);
      }
      if (read.demo) { read.demo.resize(); drawRead(); renderReadSeq(); markReadSeq(); }
    } else if (name === 'ref') {
      ensureRefTables();
    } else if (name === 'elem') {
      if (elem.demo) { elem.demo.resize(); drawElem(); renderElemSeq(); markElemSeq(); }
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  function bindMainTabs() {
    $('mainTabs').addEventListener('click', function (e) {
      var t = e.target.closest('.main-tab');
      if (!t) return;
      switchView(t.dataset.view);
    });

    // 支持 ?view=read / ?view=ref 直达（便于分享与二维码）
    var m = /[?&]view=(write|read|ref|elem)/.exec(location.search || '');
    if (m) {
      setTimeout(function () { switchView(m[1]); }, 60);
    }
  }

  /* ================================================================
   *  元素周期表视图
   * ================================================================ */

  var elem = { list: null, index: 0, current: 0, playing: false, autoPlay: true, demo: null, byPeriod: false };

  function loadElements() {
    var inline = typeof window !== 'undefined' && window.__HANZI_ELEMENTS__;
    if (inline) return Promise.resolve(inline.val !== undefined ? inline.val : inline);
    return loadData('elements', 'assets/data/elements.json');
  }

  function curElem() {
    if (!elem.list || !elem.list.length) return null;
    return elem.list[elem.index] || null;
  }

  function initElemView() {
    elem.demo = new StrokeAnimator($('elemCanvas'), {
      strokeColor: '#1f2937',
      tipColor: '#e2703a',
      speed: 1 / 3,
      onFrame: function (done) {
        elem.current = done;
        updateElemProgress();
        markElemSeq();
      },
      onEnd: function () {
        elem.playing = false;
        var e = curElem();
        elem.current = e && e.strokes ? e.strokes.length : 0;
        $('ePlay').textContent = '播放笔顺';
        updateElemProgress();
        drawElem();
        markElemSeq();
      }
    });
    var box = $('eAutoPlay');
    if (box) box.checked = elem.autoPlay;

    loadElements().then(function (list) {
      if (!list || !list.length) {
        $('elemGrid').innerHTML = '<div class="empty">元素数据加载失败</div>';
        return;
      }
      elem.list = list;
      renderElemGrid();
      selectElem(0);
    });
  }

  function renderElemGrid() {
    var html = '';
    for (var i = 0; i < elem.list.length; i++) {
      var e = elem.list[i];
      // 新造字（104 号起）系统字体里有字形，格子照常显示汉字与拼音
      html += '<div class="elem-cell' + (i === elem.index ? ' on' : '') +
        (e.noGlyph ? ' nostroke' : '') + '" data-i="' + i + '">' +
        '<div class="no"><span>' + e.no + '</span><span class="sym">' + e.symbol + '</span></div>' +
        '<div class="ch">' + (e.fallback || e.ch) + '</div>' +
        '<div class="py">' + (e.py || '') + '</div></div>';
    }
    $('elemGrid').innerHTML = html;
    $('elemCount').textContent = elem.list.length + ' 种';
  }

  function elemStrokeData(e) {
    if (!e) return null;
    var paths = e.paths || e.strokes;
    if (!paths || !paths.length) return null;
    return { strokes: paths, medians: e.medians || [], count: paths.length };
  }

  function selectElem(i) {
    if (!elem.list || i < 0 || i >= elem.list.length) return;
    elem.index = i;
    elem.current = 0;
    elem.playing = false;
    elem.demo.stop();
    $('ePlay').textContent = '播放笔顺';

    var e = curElem();
    $('eBigChar').textContent = e.noGlyph ? '—' : e.ch;
    $('eBigChar').style.fontFamily = "'HanziKai','KaiTi',serif";
    $('ePy').textContent = e.noGlyph ? '' : (e.py || '');
    $('eInfo').textContent = '第 ' + e.no + ' 号元素 · ' + e.symbol +
      (e.noGlyph ? ' · 该元素汉字暂无可用字形' : '');
    $('eNo').textContent = e.no;
    $('eSym').textContent = e.symbol;
    var esd = elemStrokeData(e);
    $('eStroke').textContent = esd ? (esd.count + ' 画') : '暂无';

    var cells = $('elemGrid').querySelectorAll('.elem-cell');
    for (var k = 0; k < cells.length; k++) cells[k].classList.toggle('on', k === i);

    var gw = $('elemCanvas').closest('.grid-box');
    if (gw) gw.style.display = e.noGlyph ? 'none' : '';
    var zb = $('elemZoomBtn');
    if (zb) zb.style.display = e.noGlyph ? 'none' : '';

    updateElemProgress();
    drawElem();
    renderElemSeq();
    markElemSeq();
    if (esd && elem.autoPlay) playElem();
  }

  function drawElem() {
    var e = curElem();
    if (!e) return;
    elem.demo.resize();
    var d = elemStrokeData(e);
    if (d) { elem.demo.render(d, elem.current, true); return; }
    // 无笔顺数据：直接画字形轮廓
    var ctx = elem.demo.ctx;
    var g = elem.demo._geom();
    var size = g.size, ox = g.ox, oy = g.oy;
    TianZiGe.drawGrid(ctx, ox, oy, size, size, elem.demo.gridOpt || {});
    if (e.glyphPath) {
      TianZiGe.drawStrokes(ctx, [e.glyphPath], ox, oy, size, {
        color: '#243042', pad: size * 0.06
      });
    }
  }

  function renderElemSeq() {
    var e = curElem();
    var box = $('elemSeq');
    if (!e || !box) return;
    var esd = elemStrokeData(e);
    if (!esd) {
      // 新造字没有分笔数据：显示整字一格 + 说明，避免整块空白
      if (e.glyphPath) {
        box.innerHTML = '<div class="seq-item" data-s="0">' +
          '<canvas id="elemCvGlyph"></canvas>' +
          '<div class="no"><b class="nm">整字</b>暂无分笔</div></div>' +
          '<div class="empty" style="padding:10px 0;width:100%">该元素汉字为近年新造字，暂无笔顺分解</div>';
        var cv0 = $('elemCvGlyph');
        if (cv0) {
          var dpr0 = window.devicePixelRatio || 1, sz0 = 56;
          cv0.width = sz0 * dpr0; cv0.height = sz0 * dpr0;
          var c0 = cv0.getContext('2d');
          c0.setTransform(dpr0, 0, 0, dpr0, 0, 0);
          TianZiGe.drawGrid(c0, 0, 0, sz0, sz0, { lineWidth: 1, showDiagonal: false });
          TianZiGe.drawStrokes(c0, [e.glyphPath], 0, 0, sz0, { color: '#1f2937', pad: sz0 * 0.06 });
        }
      } else {
        box.innerHTML = '<div class="empty" style="padding:14px 0">该元素汉字为近年新造字，暂缺笔顺数据</div>';
      }
      return;
    }
    var paths = esd.strokes;
    var html = '';
    for (var i = 0; i < paths.length; i++) {
      html += '<div class="seq-item" data-s="' + i + '">' +
        '<canvas id="elemCv' + i + '"></canvas>' +
        '<div class="no">第' + (i + 1) + '笔</div></div>';
    }
    box.innerHTML = html;
    var dpr = window.devicePixelRatio || 1, size = 56;
    for (var j = 0; j < paths.length; j++) {
      var cv = $('elemCv' + j);
      if (!cv) continue;
      cv.width = size * dpr; cv.height = size * dpr;
      var ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      TianZiGe.drawGrid(ctx, 0, 0, size, size, { lineWidth: 1, showDiagonal: false });
      TianZiGe.drawStrokes(ctx, paths.slice(0, j + 1), 0, 0, size, { color: '#1f2937', pad: size * 0.06 });
    }
  }

  function markElemSeq() {
    var box = $('elemSeq');
    if (!box) return;
    var items = box.querySelectorAll('.seq-item');
    for (var i = 0; i < items.length; i++) items[i].classList.toggle('on', i === elem.current - 1);
  }

  function updateElemProgress() {
    var e = curElem();
    var esd = e ? elemStrokeData(e) : null;
    var total = esd ? esd.count : 0;
    $('eStep').textContent = '第 ' + elem.current + ' / ' + total + ' 笔';
    $('eBar').style.width = (total ? (elem.current / total * 100) : 0) + '%';
    markElemSeq();
  }

  function playElem() {
    var e = curElem();
    var d = elemStrokeData(e);
    if (!d) return;
    elem.current = 0;
    elem.playing = true;
    $('ePlay').textContent = '暂停';
    updateElemProgress();
    elem.demo.play(d, 0);
  }

  function bindElemEvents() {
    $('elemGrid').addEventListener('click', function (ev) {
      var t = ev.target.closest('.elem-cell');
      if (!t) return;
      selectElem(parseInt(t.dataset.i, 10));
    });
    $('ePrev').addEventListener('click', function () { selectElem(elem.index - 1); });
    $('eNext').addEventListener('click', function () { selectElem(elem.index + 1); });
    $('ePlay').addEventListener('click', function () {
      var d = elemStrokeData(curElem());
      if (!d) return;
      if (elem.playing) {
        elem.demo.stop(); elem.playing = false;
        $('ePlay').textContent = '播放笔顺'; drawElem(); return;
      }
      elem.demo.play(d, elem.current >= d.count ? 0 : elem.current);
      elem.playing = true;
      $('ePlay').textContent = '暂停';
    });
    $('eReplay').addEventListener('click', playElem);
    $('ePrevStroke').addEventListener('click', function () {
      var d = elemStrokeData(curElem()); if (!d) return;
      elem.demo.stop(); elem.playing = false; $('ePlay').textContent = '播放笔顺';
      elem.current = Math.max(0, elem.current - 1);
      updateElemProgress(); drawElem(); markElemSeq();
    });
    $('eNextStroke').addEventListener('click', function () {
      var d2 = elemStrokeData(curElem()); if (!d2) return;
      elem.demo.stop(); elem.playing = false; $('ePlay').textContent = '播放笔顺';
      elem.current = Math.min(d2.count, elem.current + 1);
      updateElemProgress(); drawElem(); markElemSeq();
    });
    $('elemSeq').addEventListener('click', function (ev) {
      var t = ev.target.closest('.seq-item');
      if (!t) return;
      elem.demo.stop(); elem.playing = false; $('ePlay').textContent = '播放笔顺';
      elem.current = parseInt(t.dataset.s, 10) + 1;
      updateElemProgress(); drawElem(); markElemSeq();
    });
    $('eAutoPlay').addEventListener('change', function () {
      elem.autoPlay = this.checked;
      if (elem.autoPlay) playElem();
      else { elem.demo.stop(); elem.playing = false; $('ePlay').textContent = '播放笔顺'; drawElem(); }
    });
    $('eBack').addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    $('elemToggle').addEventListener('click', function () {
      elem.byPeriod = !elem.byPeriod;
      $('elemGrid').classList.toggle('by-period', elem.byPeriod);
      this.textContent = elem.byPeriod ? '按列表显示' : '按周期显示';
    });
  }

  /* ================================================================
   *  全库查询（写字表 + 识字表 + 元素周期表）
   * ================================================================ */

  var gIndex = null;         // [{ch, py, plain, kind, ref...}]
  var gIndexPromise = null;

  function plainPinyin2(py) {
    return (py || '')
      .replace(/[āáǎà]/g, 'a').replace(/[ēéěè]/g, 'e')
      .replace(/[īíǐì]/g, 'i').replace(/[ōóǒò]/g, 'o')
      .replace(/[ūúǔù]/g, 'u').replace(/[ǖǘǚǜü]/g, 'v')
      .replace(/[ńňǹ]/g, 'n').replace(/[ḿ]/g, 'm')
      .toLowerCase();
  }

  /** 懒加载地建立全库索引（只建一次） */
  function buildGlobalIndex() {
    if (gIndex) return Promise.resolve(gIndex);
    if (gIndexPromise) return gIndexPromise;

    var jobs = [];

    // 1) 写字表：12 册
    (state.books || []).forEach(function (b) {
      jobs.push(loadBookText(b.id).then(function (book) {
        return book.chars.map(function (c, i) {
          return {
            ch: book.meta.chars[i], py: c.pinyin, plain: plainPinyin2(c.pinyin),
            kind: 'write', book: b.id, i: i, title: book.meta.title,
            extra: (c.radical || '') + '部 · ' + (c.count || 0) + '画'
          };
        });
      }).catch(function () { return []; }));
    });

    // 2) 识字表：目录中的每一册
    var cat = read.catalog || [];
    cat.forEach(function (entry) {
      jobs.push(loadShiziBook(entry).then(function (book) {
        if (!book || !book.chars) return [];
        return book.chars.map(function (c, i) {
          return {
            ch: c.ch, py: c.py, plain: plainPinyin2(c.py),
            kind: 'read', book: entry.id, i: i, title: entry.title,
            extra: (c.strokes ? c.strokes.length : 0) + '画'
          };
        });
      }).catch(function () { return []; }));
    });

    // 3) 元素周期表
    jobs.push(loadElements().then(function (list) {
      if (!list) return [];
      return list.map(function (e, i) {
        return {
          ch: e.ch, py: e.py, plain: plainPinyin2(e.py),
          kind: 'elem', i: i, title: '元素周期表',
          symbol: e.symbol, no: e.no,
          extra: e.no + '号 · ' + e.symbol
        };
      });
    }).catch(function () { return []; }));

    gIndexPromise = Promise.all(jobs).then(function (lists) {
      gIndex = [].concat.apply([], lists).filter(function (o) { return o && o.ch; });
      return gIndex;
    });
    return gIndexPromise;
  }

  function doGlobalSearch(q) {
    var box = $('gSearchRes');
    if (!q) { box.innerHTML = ''; return; }
    buildGlobalIndex().then(function (list) {
      var low = q.trim().toLowerCase();
      var plain = plainPinyin2(low);
      var hits = list.filter(function (o) {
        if (o.ch === q) return true;
        if (o.symbol && o.symbol.toLowerCase() === low) return true;
        if (o.py && o.py.toLowerCase().indexOf(low) === 0) return true;
        if (o.plain && o.plain.indexOf(plain) === 0) return true;
        if (String(o.no) === low) return true;
        return false;
      });
      // 同一个字在多处出现时合并显示，优先显示写字表
      var order = { write: 0, read: 1, elem: 2 };
      hits.sort(function (a, b) {
        if (a.ch === b.ch) return order[a.kind] - order[b.kind];
        return order[a.kind] - order[b.kind];
      });
      if (!hits.length) {
        box.innerHTML = '<div class="gr-more">没有找到「' + q + '」</div>';
        return;
      }
      var shown = hits.slice(0, 40);
      var label = { write: '写字', read: '识字', elem: '元素' };
      box.innerHTML = shown.map(function (o, i) {
        var meta = o.kind === 'elem' ? (o.no + '号 ' + o.symbol) : (o.title || '');
        return '<div class="gr-chip" data-k="' + i + '">' +
          '<span class="c">' + o.ch + '</span>' +
          '<span class="p">' + (o.py || '') + '</span>' +
          '<span class="t ' + o.kind + '">' + label[o.kind] + '</span>' +
          '</div>';
      }).join('') + (hits.length > 40 ?
        '<div class="gr-more">共 ' + hits.length + ' 条，仅显示前 40 条</div>' : '');

      var btns = box.querySelectorAll('.gr-chip');
      for (var k = 0; k < btns.length; k++) {
        (function (idx) {
          btns[k].addEventListener('click', function () { openGlobalHit(shown[idx]); });
        })(k);
      }
    });
  }

  /** 点击搜索结果 -> 跳到对应视图并选中 */
  function openGlobalHit(o) {
    $('gSearchRes').innerHTML = '';
    $('gSearch').value = '';
    if (o.kind === 'write') {
      switchView('write');
      if (o.book === state.bookId) selectChar(o.i);
      else selectBook(o.book).then(function () { selectChar(o.i); });
    } else if (o.kind === 'read') {
      switchView('read');
      selectReadBook(o.book);
      setTimeout(function () { selectReadChar(o.i); }, 60);
    } else if (o.kind === 'elem') {
      switchView('elem');
      selectElem(o.i);
    }
  }

  function bindGlobalSearch() {
    var input = $('gSearch');
    var timer = null;
    input.addEventListener('input', function () {
      clearTimeout(timer);
      var v = input.value.trim();
      timer = setTimeout(function () { doGlobalSearch(v); }, 180);
    });
    // 预建索引：空闲时后台做，不阻塞首屏
    setTimeout(function () { buildGlobalIndex(); }, 2500);
  }

  /* ================================================================
   *  通用放大弹窗（识字表 / 元素周期表共用）
   * ================================================================ */

  var zoomView = {
    anim: null, src: null, cur: 0, playing: false, open: false
  };

  function zoomData() {
    if (zoomView.src === 'read') {
      var c = readChar();
      return c ? toStrokeData(c) : null;
    }
    if (zoomView.src === 'elem') {
      return elemStrokeData(curElem());
    }
    return null;
  }

  function zoomCaption() {
    if (zoomView.src === 'read') {
      var c = readChar();
      return c ? (c.ch + ' · ' + read.book.title) : '田字格';
    }
    if (zoomView.src === 'elem') {
      var e = curElem();
      return e ? (e.ch + ' · ' + e.no + ' 号元素 ' + e.symbol) : '田字格';
    }
    return '田字格';
  }

  function openZoom(src) {
    zoomView.src = src;
    var d = zoomData();
    if (!d || !d.count) return;
    zoomView.open = true;
    lockScroll();
    $('zoomModal').hidden = false;
    $('zoomTitle').textContent = zoomCaption();

    if (!zoomView.anim) {
      zoomView.anim = new StrokeAnimator($('zoomCanvas'), {
        strokeColor: '#1f2937',
        tipColor: '#e2703a',
        speed: 1 / 3,
        onFrame: function (done) {
          zoomView.cur = done;
          $('zoomStep').textContent = '第 ' + done + ' / ' + d.count + ' 笔';
          $('zoomBar').style.width = (done / d.count * 100) + '%';
        },
        onEnd: function () {
          zoomView.playing = false;
          $('zoomPlay').textContent = '播放笔顺';
        }
      });
    }
    buildZoomSeq(d);
    $('zoomStep').textContent = '第 0 / ' + d.count + ' 笔';
    $('zoomBar').style.width = '0%';
    zoomView.cur = 0;
    setTimeout(function () {
      if (!zoomView.open) return;
      zoomView.anim.resize();
      zoomView.anim.render(d, 0, true);
      setTimeout(function () {
        if (!zoomView.open) return;
        zoomView.anim.resize();
        zoomView.anim.render(d, 0, true);
      }, 60);
    }, 40);
  }

  function buildZoomSeq(d) {
    var box = $('zoomSeq');
    var html = '';
    var names = [];
    if (zoomView.src === 'read') {
      var c = readChar();
      names = (c && c.strokes) || [];
    }
    for (var i = 0; i < d.count; i++) {
      html += '<div class="seq-item" data-s="' + i + '">' +
        '<canvas id="zCv' + i + '"></canvas>' +
        '<div class="no">' + (names[i] ? '<b class="nm">' + names[i] + '</b>' : '') +
        '第' + (i + 1) + '笔</div></div>';
    }
    box.innerHTML = html;
    var dpr = window.devicePixelRatio || 1, size = 52;
    for (var j = 0; j < d.count; j++) {
      var cv = $('zCv' + j);
      if (!cv) continue;
      cv.width = size * dpr; cv.height = size * dpr;
      var ctx = cv.getContext('2d');
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      TianZiGe.drawGrid(ctx, 0, 0, size, size, { lineWidth: 1, showDiagonal: false });
      TianZiGe.drawStrokes(ctx, d.strokes.slice(0, j + 1), 0, 0, size,
        { color: '#1f2937', pad: size * 0.06 });
    }
  }

  function closeZoom() {
    if (!zoomView.open) return;
    zoomView.open = false;
    if (zoomView.anim) zoomView.anim.stop();
    $('zoomModal').hidden = true;
    unlockScroll();
  }

  function bindZoomModal() {
    $('readZoomBtn').addEventListener('click', function () { openZoom('read'); });
    $('elemZoomBtn').addEventListener('click', function () { openZoom('elem'); });
    $('zoomClose').addEventListener('click', closeZoom);
    $('zoomModal').addEventListener('click', function (e) {
      if (e.target === $('zoomModal')) closeZoom();
    });
    $('zoomPlay').addEventListener('click', function () {
      var d = zoomData();
      if (!d) return;
      if (zoomView.playing) {
        zoomView.anim.stop();
        zoomView.playing = false;
        $('zoomPlay').textContent = '播放笔顺';
        zoomView.anim.render(d, zoomView.cur, true);
        return;
      }
      zoomView.anim.play(d, zoomView.cur >= d.count ? 0 : zoomView.cur);
      zoomView.playing = true;
      $('zoomPlay').textContent = '暂停';
    });
    $('zoomReplay').addEventListener('click', function () {
      var d = zoomData();
      if (!d) return;
      zoomView.cur = 0;
      zoomView.anim.play(d, 0);
      zoomView.playing = true;
      $('zoomPlay').textContent = '暂停';
    });
    $('zoomPrev').addEventListener('click', function () {
      var d = zoomData();
      if (!d) return;
      zoomView.anim.stop(); zoomView.playing = false;
      $('zoomPlay').textContent = '播放笔顺';
      zoomView.cur = Math.max(0, zoomView.cur - 1);
      $('zoomStep').textContent = '第 ' + zoomView.cur + ' / ' + d.count + ' 笔';
      $('zoomBar').style.width = (zoomView.cur / d.count * 100) + '%';
      zoomView.anim.render(d, zoomView.cur, true);
    });
    $('zoomNext').addEventListener('click', function () {
      var d = zoomData();
      if (!d) return;
      zoomView.anim.stop(); zoomView.playing = false;
      $('zoomPlay').textContent = '播放笔顺';
      zoomView.cur = Math.min(d.count, zoomView.cur + 1);
      $('zoomStep').textContent = '第 ' + zoomView.cur + ' / ' + d.count + ' 笔';
      $('zoomBar').style.width = (zoomView.cur / d.count * 100) + '%';
      zoomView.anim.render(d, zoomView.cur, true);
    });
    $('zoomSeq').addEventListener('click', function (e) {
      var t = e.target.closest('.seq-item');
      if (!t) return;
      var d = zoomData();
      if (!d) return;
      zoomView.anim.stop(); zoomView.playing = false;
      $('zoomPlay').textContent = '播放笔顺';
      zoomView.cur = parseInt(t.dataset.s, 10) + 1;
      $('zoomStep').textContent = '第 ' + zoomView.cur + ' / ' + d.count + ' 笔';
      $('zoomBar').style.width = (zoomView.cur / d.count * 100) + '%';
      zoomView.anim.render(d, zoomView.cur, true);
    });
    window.addEventListener('resize', function () {
      if (!zoomView.open) return;
      var d = zoomData();
      if (!d) return;
      zoomView.anim.resize();
      zoomView.anim.render(d, zoomView.cur, true);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

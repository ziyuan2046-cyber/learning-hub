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
    autoPlay: false,
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
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ' ' + r.status);
      return r.json();
    });
  }

  function fetchText(url) {
    return fetch(url).then(function (r) {
      if (!r.ok) throw new Error(url + ' ' + r.status);
      return r.text();
    });
  }

  /** 当前是否为本地文件协议（此时 fetch 被浏览器拦截） */
  function isFileProtocol() {
    return typeof location !== 'undefined' && location.protocol === 'file:';
  }

  function loadJSON(url, key) {
    var d = dataStore();
    if (key && d[key] !== undefined) return Promise.resolve(d[key]);
    // http(s) 下 fetch 可用：直接用原始 books.json 作为唯一数据源
    if (!isFileProtocol()) return fetchJSON(url);
    return loadScript('assets/data/' + key + '.js').then(function () {
      var s = dataStore();
      if (s[key] !== undefined) return s[key];
      return fetchJSON(url);
    });
  }

  function loadBookText(id) {
    var d = dataStore();
    if (d[id] !== undefined) {
      return Promise.resolve(HanziCodec.parseBook(d[id]));
    }
    var url = 'assets/data/' + id;
    // http(s) 下 fetch 可用：直接用原始 .txt 作为唯一数据源
    if (!isFileProtocol()) {
      return fetchText(url + '.txt').then(HanziCodec.parseBook);
    }
    return loadScript(url + '.js').then(function () {
      var s = dataStore();
      if (s[id] !== undefined) return HanziCodec.parseBook(s[id]);
      return fetchText(url + '.txt').then(HanziCodec.parseBook);
    });
  }

  /* ---------------- 初始化 ---------------- */

  function init() {
    demo = new StrokeAnimator($('demoCanvas'), {
      strokeColor: '#1f2937',
      tipColor: '#e2703a',
      speed: 1 / 3,
      onFrame: function (done) { state.current = done; updateProgress(); },
      onEnd: function () {
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
      onFrame: function (done) { updateModalProgress(done); },
      onEnd: function () {
        $('mPlayBtn').textContent = '播放';
        drawModal();
      }
    });

    window.addEventListener('resize', function () {
      demo.resize();
      drawDemo();
      drawTrace();
      drawSeq();
      if (state.modalOpen) { modalDemo.resize(); drawModal(); }
    });

    loadJSON('assets/data/books.json', 'books')
      .then(function (books) {
        state.books = books;
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

    var html = '';
    for (var i = 0; i < c.count; i++) {
      html += '<div class="seq-item" data-s="' + i + '">' +
        '<canvas id="' + prefix + i + '"></canvas>' +
        '<div class="no">第' + (i + 1) + '笔</div></div>';
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
    // 等浏览器完成布局后再量尺寸绘制。
    // 用 rAF + setTimeout 双保险：rAF 保证已过一轮布局，timeout 兜底慢设备。
    requestAnimationFrame(function () {
      modalDemo.resize();
      drawModal();
      setTimeout(function () {
        if (!state.modalOpen) return;
        modalDemo.resize();
        drawModal();
      }, 60);
    });
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
    $('modal').hidden = true;
    unlockScroll();
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
      modalDemo.stop();
      modalDemo.play(c, state.current >= c.count ? 0 : state.current);
      $('mPlayBtn').textContent = '暂停';
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
      var c = curChar();
      if (!c) return;
      state.current = 0;
      updateProgress();
      modalDemo.stop();
      modalDemo.play(c, 0);
      $('mPlayBtn').textContent = '暂停';
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

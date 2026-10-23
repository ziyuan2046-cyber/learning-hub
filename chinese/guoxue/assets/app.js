import { categories, grades, items, searchItems } from './data.js'; import { icon } from './icons.js'; import { illustration } from './art.js'; import { mediaFinders, makeVideoLinks } from './media.js'; import { volumeOptions, volumeLabel, scopeLabels, referenceLinks } from './curriculum.js';

﻿const app = document.querySelector('#app');
const KEYS = { favorites: 'guoxue-favorites-v2', read: 'guoxue-read-v2', prefs: 'guoxue-prefs-v2' };
const load = (key, fallback) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
};
const save = (key, value) => {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
};
const savedPrefs = load(KEYS.prefs, {});
const state = {
  view: 'home', category: 'all', grade: 'all', volume: 'all', scope: 'all', keyword: '',
  favorites: new Set(load(KEYS.favorites, [])), read: new Set(load(KEYS.read, [])),
  itemId: null, quiz: false, quizIndex: 0, quizChoice: null, toastTimer: null,
  ...savedPrefs,
};
const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const categoryStyle = (c) => '--cat-color:' + c.color + ';--cat-soft:' + c.soft;
const scopeOf = (item) => scopeLabels[item.scopeType] || scopeLabels.classic;
function savePrefs() { save(KEYS.prefs, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope }); }
function toast(message, iconName = 'check') {
  const el = document.querySelector('#toast');
  if (!el) return;
  clearTimeout(state.toastTimer);
  el.innerHTML = icon(iconName, 15) + '<span>' + esc(message) + '</span>';
  el.classList.add('show');
  state.toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}
function toggleFavorite(id, event) {
  event?.stopPropagation(); event?.preventDefault();
  if (state.favorites.has(id)) { state.favorites.delete(id); toast('已取消收藏', 'heart'); }
  else { state.favorites.add(id); toast('已加入收藏', 'heart'); }
  save(KEYS.favorites, [...state.favorites]);
  render();
}
function markRead(id) { if (!state.read.has(id)) { state.read.add(id); save(KEYS.read, [...state.read]); } }
function updateFilter(patch) { Object.assign(state, patch); savePrefs(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function clearFilters() { Object.assign(state, { category: 'all', grade: 'all', volume: 'all', scope: 'all', keyword: '' }); savePrefs(); render(); }


﻿
function topbar() {
  return '<header class="topbar"><a class="brand" href="#/"><span class="brand-seal">学</span><span class="brand-text"><span class="brand-name">课本国学</span><span class="brand-sub">人教版 · 小学语文</span></span></a><div class="top-actions"><button class="icon-btn ' + (state.favorites.size ? 'active' : '') + '" data-go="favorites" aria-label="收藏">' + icon('heart', 19) + '</button></div></header>';
}
function nav() {
  const active = v => state.view === v ? 'active' : '';
  return '<nav class="bottom-nav" aria-label="主导航"><button class="nav-item ' + active('home') + '" data-go="home">' + icon('home', 19) + '<span>首页</span></button><button class="nav-item ' + active('search') + '" data-go="search">' + icon('search', 19) + '<span>查询</span></button><button class="nav-fab" data-go="random" aria-label="随机读一篇">' + icon('sparkle', 20) + '</button><button class="nav-item ' + active('favorites') + '" data-go="favorites">' + icon('heart', 19) + '<span>收藏</span></button></nav>';
}
function categoryHub() {
  const used = categories.filter(c => items.some(i => i.category === c.id));
  return '<div class="category-hub">' + used.map(c => {
    const count = items.filter(i => i.category === c.id).length;
    const selected = state.category === c.id;
    return '<button class="hub-card ' + (selected ? 'active' : '') + '" style="' + categoryStyle(c) + '" data-category="' + c.id + '"><span class="hub-main"><b>' + c.name + '</b><small>' + (c.description || '') + '</small></span><span class="hub-count">' + count + '</span></button>';
  }).join('') + '</div>';
}
function gradeChips() {
  return '<div class="quick-chips">' + [{ id: 'all', label: '全年级' }, ...grades.map(g => ({ id: String(g.grade), label: g.grade + '年级' }))].map(g => '<button class="quick-chip ' + (state.grade === g.id ? 'active' : '') + '" data-grade="' + g.id + '">' + g.label + '</button>').join('') + '</div>';
}
function volumeChips() {
  return '<div class="segment-row">' + volumeOptions.map(v => '<button class="segment ' + (state.volume === v.id ? 'active' : '') + '" data-volume="' + v.id + '">' + v.label + '</button>').join('') + '</div>';
}
function scopeChips() {
  return '<div class="quick-chips scope-chips">' + [{ id: 'all', label: '全部来源' }, { id: 'textbook', label: '统编课文' }, { id: 'garden', label: '语文园地' }].map(s => '<button class="quick-chip ' + (state.scope === s.id ? 'active' : '') + '" data-scope="' + s.id + '">' + s.label + '</button>').join('') + '</div>';
}
function libraryCard(item) {
  const c = categoryMap[item.category];
  const favorite = state.favorites.has(item.id);
  return '<article class="library-card" style="' + categoryStyle(c) + '" data-open="' + esc(item.id) + '" tabindex="0" role="button" aria-label="阅读' + esc(item.title) + '">' +
    '<div class="library-info"><div class="library-kicker"><span>' + esc(item.categoryName) + '</span><span>' + esc(item.volumeLabel || '') + '</span></div><h3>' + esc(item.title) + '</h3><p class="library-author">' + esc(item.dynasty) + ' · ' + esc(item.author) + '</p><p class="library-excerpt">' + esc(item.excerpt) + '</p><div class="library-meta"><span>' + esc(item.gradeLabel) + '</span><span>' + esc(item.sourceLabel) + '</span></div></div>' +
    '<button class="list-fav ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="' + (favorite ? '取消收藏' : '收藏') + '">' + icon('heart', 16) + '</button></article>';
}
function homeView() {
  const current = filteredItems();
  const cat = state.category === 'all' ? '全部内容' : categoryMap[state.category].name;
  return '<main class="page-enter mobile-page">' + topbar() +
    '<section class="mobile-intro"><h1>课本国学</h1></section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>内容分类</h2></div>' + categoryHub() + '</section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>' + cat + '</h2><span id="result-count">' + current.length + ' 篇</span></div>' +
      '<div class="mobile-filters"><div class="mobile-filter-row"><span>年级</span>' + gradeChips() + '</div><div class="mobile-filter-row"><span>册次</span>' + volumeChips() + '</div></div>' +
      '<div class="mobile-search"><div class="search-input-wrap">' + icon('search', 18) + '<input class="search-input" id="inline-search" value="' + esc(state.keyword) + '" placeholder="搜索篇名、作者或原文" aria-label="搜索课文"><button class="clear-search" data-clear-search aria-label="清空搜索">' + icon('close', 14) + '</button></div></div>' +
      '<div class="mobile-list" id="library-list">' + (current.length ? current.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn btn-secondary" data-reset-filters>清除筛选</button></div>') + '</div>' +
    '</section></main>' + nav();
}
function filteredItems() {
  return searchItems(items, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, keyword: state.keyword, favoriteIds: [...state.favorites] });
}
function splitLines(text) { return String(text || '').split(/\n+/).filter(Boolean); }
function splitPairs(item) {
  const textLines = splitLines(item.excerpt);
  const pyLines = splitLines(item.pinyin);
  return textLines.map((text, index) => ({ text, pinyin: pyLines[index] || '' }));
}
function relatedFor(item) {
  return items.filter(i => i.id !== item.id).sort((a, b) => {
    const score = x => (x.category === item.category ? 3 : 0) + (x.grade === item.grade ? 2 : 0) + (x.volume === item.volume ? 1 : 0);
    return score(b) - score(a);
  }).slice(0, 3);
}function detailView() {
  const item = items.find(i => i.id === state.itemId);
  if (!item) return homeView();
  const pairs = splitPairs(item);
  const isFav = state.favorites.has(item.id);
  return '<main class="page-enter detail-page mobile-page">' + topbar() +
    '<div class="reader-back"><button class="back-btn" data-go="home">' + icon('back', 18) + ' 返回</button><button class="icon-btn ' + (isFav ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏">' + icon('heart', 20) + '</button></div>' +
    '<article class="reader-article"><header class="reader-header"><span class="reader-category">' + esc(item.categoryName) + '</span><h1>' + esc(item.title) + '</h1><div class="reader-meta">' + esc(item.gradeLabel) + '</div><div class="reader-source">' + esc(item.sourceLabel) + '</div></header>' +
    '<div class="reader-audio"><button class="audio-button" data-speak="' + esc(item.id) + '" id="speak-btn">' + icon('volume', 20) + ' 朗读</button><audio id="reader-audio" preload="metadata" webkit-playsinline playsinline src="audio/' + esc(item.id) + '.mp3"></audio></div>' +
    '<section class="reader-text"><div class="reader-label">原文与拼音</div>' + pairs.map(pair => '<div class="reader-line"><div class="reader-pinyin">' + esc(pair.pinyin) + '</div><div class="reader-text-content">' + esc(pair.text) + '</div></div>').join('') + '</section>' +
    '<section class="reader-meaning"><h2>译文</h2><p>' + esc(item.meaning) + '</p></section>' +
    '<section class="reader-note"><h2>赏析</h2><p>' + esc(item.appreciation) + '</p></section>' +
    '<figure class="reader-illustration">' + illustration(item.image) + '<figcaption>' + esc(item.title) + ' · 课文配图</figcaption></figure></article></main>' + nav();
}
function escapeRegex(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function highlight(text, query) {
  const safe = esc(text);
  if (!query) return safe;
  return safe.replace(new RegExp('(' + escapeRegex(esc(query)) + ')', 'gi'), '<mark>$1</mark>');
}
function favoritesView() {
  const allFav = items.filter(i => state.favorites.has(i.id));
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="favorites-page"><div class="page-header"><h1>收藏</h1></div>' +
    (allFav.length ? '<div class="favorite-list">' + allFav.map(item => '<article class="favorite-card" data-open="' + esc(item.id) + '" tabindex="0" role="button"><span class="favorite-info"><h3>' + esc(item.title) + '</h3><span class="favorite-meta">' + esc(item.gradeLabel) + ' · ' + esc(item.categoryName) + '</span></span></article>').join('') + '</div>' : '<div class="favorite-empty"><h2>还没有收藏</h2><p>在课文页面点击爱心，即可在这里找到。</p><button class="btn btn-primary" data-go="home">返回首页</button></div>') + '</div></main>' + nav();
}
function searchView() {
  const result = searchItems(items, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, keyword: state.keyword, favoriteIds: [...state.favorites] });
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="search-page"><h1>查询</h1>' +
    '<form class="big-search" id="search-form">' + icon('search', 21) + '<input id="search-main" value="' + esc(state.keyword) + '" placeholder="篇名、作者或原文" autocomplete="off" aria-label="搜索国学内容"><button class="search-submit" type="submit">查询</button></form>' +
    '<section class="search-filter-panel"><div class="search-filter-group"><span class="filter-label">分类</span><div class="filter-options"><button class="filter-option ' + (state.category === 'all' ? 'active' : '') + '" data-category="all">全部</button>' + categories.map(c => '<button class="filter-option ' + (state.category === c.id ? 'active' : '') + '" data-category="' + c.id + '">' + c.name + '</button>').join('') + '</div></div>' +
    '<div class="search-filter-group"><span class="filter-label">年级</span><div class="filter-options"><button class="filter-option ' + (state.grade === 'all' ? 'active' : '') + '" data-grade="all">全年级</button>' + grades.map(g => '<button class="filter-option ' + (state.grade === String(g.grade) ? 'active' : '') + '" data-grade="' + g.grade + '">' + g.label + '</button>').join('') + '</div></div>' +
    '<div class="search-filter-group"><span class="filter-label">册次</span><div class="filter-options">' + volumeOptions.map(v => '<button class="filter-option ' + (state.volume === v.id ? 'active' : '') + '" data-volume="' + v.id + '">' + v.label + '</button>').join('') + '</div></div></section>' +
    '<div class="search-results-heading"><h2>查询结果</h2><span>' + result.length + ' 篇</span></div>' +
    '<div class="search-results-list">' + (result.length ? result.map(item => '<article class="search-result-card" data-open="' + esc(item.id) + '" tabindex="0" role="button"><span class="search-result-text"><div class="search-result-title">' + highlight(item.title, state.keyword) + '</div><div class="search-result-meta">' + esc(item.gradeLabel) + ' · ' + esc(item.categoryName) + ' · ' + esc(item.sourceLabel) + '</div><p class="search-result-summary">' + highlight(item.excerpt, state.keyword) + '</p></span></article>').join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn btn-secondary" data-reset-filters>重置筛选</button></div>') + '</div></div></main>' + nav();
}
function openItem(id) {
  state.itemId = id;
  markRead(id);
  state.view = 'detail';
  state.quiz = false;
  state.quizChoice = null;
  state.quizIndex = 0;
  location.hash = 'read/' + encodeURIComponent(id);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function randomItem() {
  const pool = filteredItems().length ? filteredItems() : items;
  openItem(pool[Math.floor(Math.random() * pool.length)].id);
}
function speakText(id) {
  const player = document.getElementById('reader-audio');
  const button = document.getElementById('speak-btn');
  if (!player || !button) return;
  if (!player.paused) {
    player.pause();
    button.innerHTML = icon('volume', 20) + ' 朗读';
    return;
  }
  player.play().then(() => {
    button.innerHTML = icon('volume', 20) + ' 暂停';
    toast('正在朗读', 'volume');
  }).catch(() => {
    button.innerHTML = icon('volume', 20) + ' 朗读';
    toast('录音加载失败，请检查网络后重试', 'volume');
  });
  player.onended = () => { button.innerHTML = icon('volume', 20) + ' 朗读'; };
}
function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    done();
  } catch {
    toast('复制失败', 'book');
  }
  ta.remove();
}
function copyOriginal(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  const text = item.title + '\n' + item.sourceLabel + '\n' + item.excerpt + '\n\n' + item.meaning;
  const done = () => toast('原文与译文已复制', 'book');
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  else fallbackCopy(text, done);
}
function quizData(item) {
  return [
    { q: '这篇内容属于哪一类？', options: categories.map(c => c.name), answer: categoryMap[item.category].name, explain: '这是' + item.categoryName + '中的内容。' },
    { q: '它标注在哪个年级与册次？', options: grades.map(g => g.label + '上册').concat(grades.map(g => g.label + '下册')), answer: item.gradeLabel, explain: '本资料按' + item.gradeLabel + '整理。' },
    { q: '它的教材来源是什么？', options: ['统编课文', '语文园地', '课外国学'], answer: item.scopeName, explain: item.sourceNote + '。' },
  ];
}
function openQuiz() { state.quiz = true; state.quizIndex = 0; state.quizChoice = null; render(); }
function closeQuiz() { state.quiz = false; state.quizChoice = null; render(); }
function chooseQuiz(index) { if (state.quizChoice !== null) return; state.quizChoice = index; render(); }
function nextQuiz() {
  const item = items.find(i => i.id === state.itemId);
  if (!item) return;
  const qs = quizData(item);
  if (state.quizIndex < qs.length - 1) {
    state.quizIndex++;
    state.quizChoice = null;
    render();
  } else {
    state.quiz = false;
    toast('完成随堂问答', 'star');
    render();
  }
}
function quizModal() {
  if (!state.quiz) return '';
  const item = items.find(i => i.id === state.itemId);
  if (!item) return '';
  const qs = quizData(item), q = qs[state.quizIndex];
  const options = q.options.map((opt, i) => {
    let cls = '';
    if (state.quizChoice !== null && opt === q.answer) cls = 'correct';
    if (state.quizChoice === i && opt !== q.answer) cls = 'incorrect';
    return '<button class="quiz-option ' + cls + '" data-quiz-choice="' + i + '"><span class="option-mark">' + String.fromCharCode(65 + i) + '</span>' + esc(opt) + '</button>';
  }).join('');
  const status = state.quizChoice === null ? '' : '<div class="quiz-feedback">' + (q.options[state.quizChoice] === q.answer ? '回答正确。' : '再想一想。') + ' ' + esc(q.explain) + '</div>';
  return '<div class="reader-modal-backdrop"><div class="reader-modal" role="dialog" aria-modal="true"><div class="modal-head"><h2>随堂一问</h2><button class="icon-btn" data-close-quiz aria-label="关闭">' + icon('close', 19) + '</button></div><div class="modal-content"><div class="quiz-prompt">' + esc(q.q) + '</div><div class="quiz-options">' + options + '</div>' + status + '<div class="quiz-footer"><span class="quiz-progress">第 ' + (state.quizIndex + 1) + ' / ' + qs.length + ' 题</span><button class="btn btn-primary" data-next-quiz>' + (state.quizIndex === qs.length - 1 ? '完成练习' : '下一题') + '</button></div></div></div></div>';
}
function render() {
  document.body.classList.toggle('no-scroll', state.quiz);
  let view = homeView;
  if (state.view === 'detail') view = detailView;
  else if (state.view === 'search') view = searchView;
  else if (state.view === 'favorites') view = favoritesView;
  app.innerHTML = view() + quizModal() + '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
}
function route() {
  const hash = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  if (hash.startsWith('read/')) {
    const id = hash.slice(5);
    if (items.some(i => i.id === id)) {
      state.itemId = id;
      markRead(id);
      state.view = 'detail';
    }
  } else if (hash === 'search') state.view = 'search';
  else if (hash === 'favorites') state.view = 'favorites';
  else state.view = 'home';
  render();
}document.addEventListener('click', event => {
  const el = event.target.closest('[data-go],[data-grade],[data-category],[data-volume],[data-scope],[data-fav],[data-open],[data-clear-search],[data-reset-filters],[data-search],[data-speak],[data-copy],[data-quiz],[data-close-quiz],[data-quiz-choice],[data-next-quiz]');
  if (!el) return;
  if (el.dataset.fav) { toggleFavorite(el.dataset.fav, event); return; }
  if (el.dataset.open) { openItem(el.dataset.open); return; }
  if (el.dataset.grade !== undefined) { updateFilter({ grade: el.dataset.grade }); return; }
  if (el.dataset.category !== undefined) { updateFilter({ category: el.dataset.category }); return; }
  if (el.dataset.volume !== undefined) { updateFilter({ volume: el.dataset.volume }); return; }
  if (el.dataset.scope !== undefined) { updateFilter({ scope: el.dataset.scope }); return; }
  if (el.dataset.clearSearch !== undefined) { updateFilter({ keyword: '' }); return; }
  if (el.dataset.resetFilters !== undefined) { clearFilters(); return; }
  if (el.dataset.search !== undefined) { state.keyword = el.dataset.search; state.view = 'search'; location.hash = 'search'; render(); return; }
  if (el.dataset.speak) { speakText(el.dataset.speak); return; }
  if (el.dataset.copy) { copyOriginal(el.dataset.copy); return; }
  if (el.dataset.quiz !== undefined) { openQuiz(); return; }
  if (el.dataset.closeQuiz !== undefined) { closeQuiz(); return; }
  if (el.dataset.quizChoice !== undefined) { chooseQuiz(Number(el.dataset.quizChoice)); return; }
  if (el.dataset.nextQuiz !== undefined) { nextQuiz(); return; }
  if (el.dataset.go) {
    const view = el.dataset.go;
    if (view === 'random') { randomItem(); return; }
    state.view = view;
    location.hash = view === 'home' ? '' : view;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
document.addEventListener('input', event => {
  if (event.target.id === 'inline-search') {
    state.keyword = event.target.value;
    const current = filteredItems();
    const list = document.querySelector('#library-list');
    if (list) list.innerHTML = current.length ? current.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn btn-secondary" data-reset-filters>清除筛选</button></div>';
    const count = document.querySelector('#result-count');
    if (count) count.textContent = current.length + ' 篇';
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && state.quiz) closeQuiz();
  if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') {
    event.preventDefault();
    state.view = 'search';
    location.hash = 'search';
    render();
    setTimeout(() => document.querySelector('#search-main')?.focus(), 30);
  }
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-open]')) {
    event.preventDefault();
    openItem(event.target.dataset.open);
  }
});
document.addEventListener('submit', event => {
  if (event.target.id === 'search-form') {
    event.preventDefault();
    state.keyword = document.querySelector('#search-main')?.value || '';
    render();
  }
});
window.addEventListener('hashchange', route);
route();

import { categories, grades, items, lessonItems, extraItems, searchItems } from './data.js';
import { icon } from './icons.js';
import { illustration } from './art.js';

const app = document.querySelector('#app');
const KEYS = { favorites: 'guoxue-favorites-v3', read: 'guoxue-read-v3', prefs: 'guoxue-prefs-v3' };
const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
};
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
const savedPrefs = load(KEYS.prefs, {});
const state = {
  view: 'home', category: 'all', grade: 'all', volume: 'all', scope: 'textbook', keyword: '',
  favorites: new Set(load(KEYS.favorites, [])), read: new Set(load(KEYS.read, [])),
  itemId: null, toastTimer: null,
  ...savedPrefs,
};
const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function savePrefs() {
  save(KEYS.prefs, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope });
}
function toast(message, iconName = 'check') {
  const el = document.querySelector('#toast');
  if (!el) return;
  clearTimeout(state.toastTimer);
  el.innerHTML = icon(iconName, 15) + '<span>' + esc(message) + '</span>';
  el.classList.add('show');
  state.toastTimer = setTimeout(() => el.classList.remove('show'), 2000);
}
function toggleFavorite(id, event) {
  event?.preventDefault(); event?.stopPropagation();
  if (state.favorites.has(id)) { state.favorites.delete(id); toast('已取消收藏', 'heart'); }
  else { state.favorites.add(id); toast('已加入收藏', 'heart'); }
  save(KEYS.favorites, [...state.favorites]);
  render();
}
function markRead(id) { if (!state.read.has(id)) { state.read.add(id); save(KEYS.read, [...state.read]); } }
function filteredItems() {
  return searchItems(items, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, keyword: state.keyword });
}
function updateFilter(patch) {
  Object.assign(state, patch);
  if (patch.scope) { state.category = 'all'; state.grade = 'all'; state.volume = 'all'; state.keyword = ''; }
  savePrefs(); render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function topbar() {
  return '<header class="topbar"><a class="brand" href="#/"><span class="brand-seal">学</span><span class="brand-text"><span class="brand-name">课本国学</span><span class="brand-sub">必背 · 拓展 · 视频</span></span></a><div class="top-actions"><button class="icon-btn ' + (state.favorites.size ? 'active' : '') + '" data-go="favorites" aria-label="收藏">' + icon('heart', 19) + '</button></div></header>';
}
function nav() {
  const active = v => state.view === v ? 'active' : '';
  return '<nav class="bottom-nav"><button class="nav-item ' + active('home') + '" data-go="home">' + icon('home', 19) + '<span>首页</span></button><button class="nav-item ' + active('search') + '" data-go="search">' + icon('search', 19) + '<span>查询</span></button><button class="nav-fab" data-go="random" aria-label="随机读一篇">' + icon('sparkle', 20) + '</button><button class="nav-item ' + active('favorites') + '" data-go="favorites">' + icon('heart', 19) + '<span>收藏</span></button></nav>';
}

function sourceTabs() {
  return '<div class="source-tabs"><button class="source-tab ' + (state.scope === 'textbook' ? 'active' : '') + '" data-scope="textbook">教材必背 <b>' + lessonItems.length + '</b></button><button class="source-tab ' + (state.scope === 'extra' ? 'active' : '') + '" data-scope="extra">课外拓展 <b>' + extraItems.length + '</b></button></div>';
}
function categoryHub() {
  const list = state.scope === 'textbook' ? lessonItems : extraItems;
  const used = categories.filter(c => list.some(i => i.category === c.id));
  return '<div class="category-hub">' + used.map(c => {
    const count = list.filter(i => i.category === c.id).length;
    return '<button class="hub-card ' + (state.category === c.id ? 'active' : '') + '" style="--cat-color:' + c.color + ';--cat-soft:' + c.soft + '" data-category="' + c.id + '"><span class="hub-main"><b>' + c.name + '</b><small>' + c.description + '</small></span><span class="hub-count">' + count + '</span></button>';
  }).join('') + '</div>';
}
function gradeChips() {
  return '<div class="quick-chips">' + [{ id: 'all', label: '全年级' }, ...grades.map(g => ({ id: String(g.grade), label: g.label }))].map(g => '<button class="quick-chip ' + (state.grade === g.id ? 'active' : '') + '" data-grade="' + g.id + '">' + g.label + '</button>').join('') + '</div>';
}
function volumeChips() {
  return '<div class="segment-row">' + [{ id: 'all', label: '全册' }, { id: '上', label: '上册' }, { id: '下', label: '下册' }].map(v => '<button class="segment ' + (state.volume === v.id ? 'active' : '') + '" data-volume="' + v.id + '">' + v.label + '</button>').join('') + '</div>';
}
function libraryCard(item) {
  const c = categoryMap[item.category];
  const favorite = state.favorites.has(item.id);
  const video = item.video ? '<span class="video-chip">' + icon('play', 12) + '对应视频</span>' : '';
  return '<article class="library-card" style="--cat-color:' + c.color + ';--cat-soft:' + c.soft + '" data-open="' + esc(item.id) + '" tabindex="0" role="button"><div class="library-info"><div class="library-kicker"><span>' + esc(item.categoryName) + '</span>' + video + '</div><h3>' + esc(item.title) + '</h3><p class="library-author">' + esc(item.dynasty) + ' · ' + esc(item.author) + '</p><p class="library-excerpt">' + esc(item.excerpt) + '</p><div class="library-meta"><span>' + esc(item.gradeLabel) + '</span></div></div><button class="list-fav ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏">' + icon('heart', 16) + '</button></article>';
}
function homeView() {
  const current = filteredItems();
  const cat = state.category === 'all' ? '全部内容' : categoryMap[state.category].name;
  const filters = state.scope === 'textbook' ? '<div class="mobile-filter-row"><span>年级</span>' + gradeChips() + '</div><div class="mobile-filter-row"><span>册次</span>' + volumeChips() + '</div>' : '';
  return '<main class="page-enter mobile-page">' + topbar() +
    '<section class="mobile-intro"><h1>小学古诗文</h1></section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>内容来源</h2></div>' + sourceTabs() + '</section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>内容分类</h2></div>' + categoryHub() + '</section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>' + cat + '</h2><span id="result-count">' + current.length + ' 篇</span></div>' +
      '<div class="mobile-filters">' + filters + '</div><div class="mobile-search"><div class="search-input-wrap">' + icon('search', 18) + '<input class="search-input" id="inline-search" value="' + esc(state.keyword) + '" placeholder="搜索篇名、作者或原文"><button class="clear-search" data-clear-search aria-label="清空">' + icon('close', 14) + '</button></div></div>' +
      '<div class="mobile-list" id="library-list">' + (current.length ? current.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn" data-reset-filters>清除筛选</button></div>') + '</div></section></main>' + nav();
}

function splitLines(text) { return String(text || '').split(/\n+/).filter(Boolean); }
function splitPairs(item) {
  const textLines = splitLines(item.excerpt);
  const pyLines = splitLines(item.pinyin);
  return textLines.map((text, index) => ({ text, pinyin: pyLines[index] || '' }));
}
function detailView() {
  const item = items.find(i => i.id === state.itemId);
  if (!item) return homeView();
  const pairs = splitPairs(item);
  const favorite = state.favorites.has(item.id);
  const video = item.video
    ? '<section class="video-section"><div class="video-head"><span class="video-label">' + icon('play', 15) + '不白吃古诗词漫游记</span><span class="video-series">' + esc(item.video.season) + ' · 第' + item.video.episode + '集</span></div><a class="video-card" href="' + esc(item.video.url) + '" target="_blank" rel="noopener"><span class="video-cover">' + icon('play', 26) + '</span><span class="video-info"><b>对应视频</b><span>' + esc(item.video.title) + '</span></span>' + icon('external', 17) + '</a></section>'
    : '<section class="video-section video-fallback"><div class="video-head"><span class="video-label">' + icon('play', 15) + '不白吃古诗词漫游记</span></div><a class="video-card" href="https://www.bilibili.com/bangumi/play/ss47087" target="_blank" rel="noopener"><span class="video-cover">' + icon('play', 26) + '</span><span class="video-info"><b>官方合集</b><span>本篇暂无已核实的单集对应视频，可进入第一季合集浏览</span></span>' + icon('external', 17) + '</a></section>';
  return '<main class="page-enter detail-page mobile-page">' + topbar() +
    '<div class="reader-back"><button class="back-btn" data-go="home">' + icon('back', 18) + ' 返回</button><button class="icon-btn ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏">' + icon('heart', 20) + '</button></div>' +
    '<article class="reader-article"><header class="reader-header"><span class="reader-category">' + esc(item.categoryName) + '</span><h1>' + esc(item.title) + '</h1><div class="reader-meta">' + esc(item.gradeLabel) + ' · ' + esc(item.dynasty) + ' · ' + esc(item.author) + '</div><div class="reader-source">' + esc(item.sourceLabel) + '</div></header>' +
    '<div class="reader-audio"><button class="audio-button" data-speak="' + esc(item.id) + '" id="speak-btn">' + icon('volume', 20) + ' 朗读</button><audio id="reader-audio" preload="metadata" playsinline webkit-playsinline src="audio/' + encodeURIComponent(item.id) + '.mp3"></audio></div>' +
    '<section class="reader-text"><div class="reader-label">原文 · 拼音</div>' + pairs.map(p => '<div class="reader-line"><div class="reader-pinyin">' + esc(p.pinyin) + '</div><div class="reader-text-content">' + esc(p.text) + '</div></div>').join('') + '</section>' +
    (item.meaning && item.meaning !== '本册必背。' ? '<section class="reader-meaning"><h2>译文</h2><p>' + esc(item.meaning) + '</p></section>' : '') +
    (item.appreciation ? '<section class="reader-note"><h2>赏析</h2><p>' + esc(item.appreciation) + '</p></section>' : '') + video +
    '<figure class="reader-illustration">' + illustration(item.image) + '<figcaption>' + esc(item.title) + ' · 配图</figcaption></figure></article></main>' + nav();
}
function speakText(id) {
  const player = document.querySelector('#reader-audio');
  const button = document.querySelector('#speak-btn');
  if (!player || !button) return;
  if (!player.paused) { player.pause(); button.innerHTML = icon('volume', 20) + ' 朗读'; return; }
  player.play().then(() => { button.innerHTML = icon('volume', 20) + ' 暂停'; toast('正在朗读', 'volume'); }).catch(() => toast('音频加载失败', 'volume'));
  player.onended = () => { button.innerHTML = icon('volume', 20) + ' 朗读'; };
}
function searchView() {
  const result = filteredItems();
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="search-page"><h1>查询</h1><form class="big-search" id="search-form">' + icon('search', 21) + '<input id="search-main" value="' + esc(state.keyword) + '" placeholder="篇名、作者或原文"><button class="search-submit" type="submit">查询</button></form>' +
    '<div class="search-filter-panel"><div class="search-filter-group"><span class="filter-label">来源</span><div class="filter-options"><button class="filter-option ' + (state.scope === 'all' ? 'active' : '') + '" data-scope="all">全部</button><button class="filter-option ' + (state.scope === 'textbook' ? 'active' : '') + '" data-scope="textbook">教材必背</button><button class="filter-option ' + (state.scope === 'extra' ? 'active' : '') + '" data-scope="extra">课外拓展</button></div></div>' +
    '<div class="search-filter-group"><span class="filter-label">分类</span><div class="filter-options"><button class="filter-option ' + (state.category === 'all' ? 'active' : '') + '" data-category="all">全部</button>' + categories.map(c => '<button class="filter-option ' + (state.category === c.id ? 'active' : '') + '" data-category="' + c.id + '">' + c.name + '</button>').join('') + '</div></div>' +
    '<div class="search-filter-group"><span class="filter-label">年级</span><div class="filter-options"><button class="filter-option ' + (state.grade === 'all' ? 'active' : '') + '" data-grade="all">全部</button>' + grades.map(g => '<button class="filter-option ' + (state.grade === String(g.grade) ? 'active' : '') + '" data-grade="' + g.grade + '">' + g.label + '</button>').join('') + '</div></div></div>' +
    '<div class="search-results-heading"><h2>查询结果</h2><span>' + result.length + ' 篇</span></div><div class="search-results-list">' + (result.length ? result.map(item => '<article class="search-result-card" data-open="' + esc(item.id) + '" tabindex="0" role="button"><div class="search-result-title">' + esc(item.title) + '</div><div class="search-result-meta">' + esc(item.gradeLabel) + ' · ' + esc(item.categoryName) + (item.video ? ' · 有视频' : '') + '</div><p class="search-result-summary">' + esc(item.excerpt) + '</p></article>').join('') : '<div class="empty-state"><h3>没有找到内容</h3></div>') + '</div></div></main>' + nav();
}
function favoritesView() {
  const list = items.filter(i => state.favorites.has(i.id));
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="favorites-page"><h1>收藏</h1>' + (list.length ? '<div class="favorite-list">' + list.map(i => '<article class="favorite-card" data-open="' + esc(i.id) + '" tabindex="0" role="button"><h3>' + esc(i.title) + '</h3><span>' + esc(i.gradeLabel) + ' · ' + esc(i.categoryName) + '</span></article>').join('') + '</div>' : '<div class="favorite-empty"><p>还没有收藏。</p><button class="btn" data-go="home">返回首页</button></div>') + '</div></main>' + nav();
}
function openItem(id) {
  state.itemId = id; state.view = 'detail'; markRead(id);
  location.hash = 'read/' + encodeURIComponent(id);
  render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}
function randomItem() { const pool = filteredItems(); if (pool.length) openItem(pool[Math.floor(Math.random() * pool.length)].id); }
function render() {
  let view = homeView;
  if (state.view === 'detail') view = detailView;
  else if (state.view === 'search') view = searchView;
  else if (state.view === 'favorites') view = favoritesView;
  app.innerHTML = view() + '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
}
function route() {
  const hash = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  if (hash.startsWith('read/')) { const id = hash.slice(5); if (items.some(i => i.id === id)) { state.itemId = id; state.view = 'detail'; markRead(id); } }
  else if (hash === 'search') state.view = 'search';
  else if (hash === 'favorites') state.view = 'favorites';
  else state.view = 'home';
  render();
}
document.addEventListener('click', event => {
  const el = event.target.closest('[data-go],[data-grade],[data-category],[data-volume],[data-scope],[data-fav],[data-open],[data-clear-search],[data-reset-filters],[data-speak]');
  if (!el) return;
  if (el.dataset.fav) return toggleFavorite(el.dataset.fav, event);
  if (el.dataset.open) return openItem(el.dataset.open);
  if (el.dataset.grade !== undefined) return updateFilter({ grade: el.dataset.grade });
  if (el.dataset.category !== undefined) return updateFilter({ category: el.dataset.category });
  if (el.dataset.volume !== undefined) return updateFilter({ volume: el.dataset.volume });
  if (el.dataset.scope !== undefined) return updateFilter({ scope: el.dataset.scope });
  if (el.dataset.clearSearch !== undefined) return updateFilter({ keyword: '' });
  if (el.dataset.resetFilters !== undefined) { Object.assign(state, { category: 'all', grade: 'all', volume: 'all', keyword: '' }); return render(); }
  if (el.dataset.speak) return speakText(el.dataset.speak);
  if (el.dataset.go) {
    if (el.dataset.go === 'random') return randomItem();
    state.view = el.dataset.go; location.hash = el.dataset.go === 'home' ? '' : el.dataset.go; render(); window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
document.addEventListener('input', event => {
  if (event.target.id !== 'inline-search') return;
  state.keyword = event.target.value;
  const current = filteredItems();
  const list = document.querySelector('#library-list');
  if (list) list.innerHTML = current.length ? current.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3></div>';
  const count = document.querySelector('#result-count');
  if (count) count.textContent = current.length + ' 篇';
});
document.addEventListener('submit', event => {
  if (event.target.id === 'search-form') { event.preventDefault(); state.keyword = document.querySelector('#search-main')?.value || ''; render(); }
});
window.addEventListener('hashchange', route);
route();

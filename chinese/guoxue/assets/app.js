import { categories, grades, items, lessonItems, extraItems, classicItems, searchItems } from './data.js';
import { icon } from './icons.js';
import { glossary } from './glossary-data.js';

const app = document.querySelector('#app');
const KEYS = { favorites: 'guoxue-favorites-v5', read: 'guoxue-read-v5', prefs: 'guoxue-prefs-v5', history: 'guoxue-history-v1' };
const load = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
const savedPrefs = load(KEYS.prefs, {});
const state = {
  view: 'home', category: 'all', grade: 'all', volume: 'all', scope: 'textbook', keyword: '',
  topQuery: '', videoOnly: false, itemId: null, toastTimer: null,
  favorites: new Set(load(KEYS.favorites, [])), read: new Set(load(KEYS.read, [])), history: load(KEYS.history, []), historyUndo: null,
  ...savedPrefs
};
if (state.scope === 'classics') state.scope = 'textbook';
state.view = 'home';
const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const scopeName = scope => scope === 'textbook' ? '教材内容' : '课外拓展';

function savePrefs() {
  save(KEYS.prefs, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, videoOnly: state.videoOnly });
}
function toast(message, iconName = 'check') {
  const el = document.querySelector('#toast'); if (!el) return;
  clearTimeout(state.toastTimer);
  el.innerHTML = icon(iconName, 16) + '<span>' + esc(message) + '</span>';
  el.classList.add('show'); state.toastTimer = setTimeout(() => el.classList.remove('show'), 1800);
}
function toggleFavorite(id, event) {
  event?.preventDefault(); event?.stopPropagation();
  state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
  save(KEYS.favorites, [...state.favorites]); toast(state.favorites.has(id) ? '已收藏' : '已取消收藏', 'heart'); render();
}
function markRead(id) { if (!state.read.has(id)) { state.read.add(id); save(KEYS.read, [...state.read]); } state.history = [id, ...state.history.filter(x => x !== id)].slice(0, 30); save(KEYS.history, state.history); }
function removeHistory(id) { state.historyUndo = [...state.history]; state.history = state.history.filter(x => x !== id); save(KEYS.history, state.history); render(); toast('已移除，可撤销', 'check'); }
function undoHistory() { if (!state.historyUndo) return; state.history = state.historyUndo; state.historyUndo = null; save(KEYS.history, state.history); render(); toast('已恢复历史', 'history'); }
function clearHistory() { state.historyUndo = [...state.history]; state.history = []; save(KEYS.history, state.history); render(); toast('历史已清空', 'check'); }
function scopePool(scope = state.scope) { return scope === 'textbook' ? lessonItems : extraItems; }
function filteredItems() {
  const result = searchItems(items, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, keyword: state.keyword });
  return state.videoOnly ? result.filter(i => i.video) : result;
}
function globalResults() {
  if (!state.topQuery.trim()) return [];
  return searchItems(items, { keyword: state.topQuery.trim(), scope: 'all' });
}
function updateFilter(patch) {
  Object.assign(state, patch);
  if (patch.scope) { state.category = 'all'; state.grade = 'all'; state.volume = 'all'; state.keyword = ''; state.videoOnly = false; }
  savePrefs(); render(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function topbar() {
  const fav = state.favorites.size ? 'active' : '';
  return '<header class="topbar"><a class="brand" href="#/"><span class="brand-seal">学</span><span class="brand-name">课本国学</span></a></header>';
}
function topSearch() {
  const results = globalResults();
  return '<section class="top-search-section"><form class="top-search" id="top-search-form">' + icon('search', 21) + '<input id="top-search-input" autocomplete="off" value="' + esc(state.topQuery) + '" placeholder="搜索古诗、成语、文言文"><button type="submit" class="top-search-button">查询</button></form>' + (state.topQuery.trim() ? '<div class="top-search-results">' + (results.length ? results.slice(0, 8).map(i => '<button class="top-result" data-open="' + esc(i.id) + '"><span><b>' + esc(i.title) + '</b><small>' + (esc(scopeName(i.scopeType)) + ' · ' + esc(i.gradeLabel)) + '</small></span>' + icon('chevron', 16) + '</button>').join('') + '<div class="top-result-count">共 ' + results.length + ' 条结果</div>' : '<div class="top-result-empty">没有找到相关内容</div>') + '</div>' : '') + '</section>';
}
function nav() {
  const active = v => state.view === v ? 'active' : '';
  return '<nav class="bottom-nav"><button class="nav-item ' + active('home') + '" data-go="home">' + icon('home', 20) + '<span>首页</span></button><button class="nav-item ' + active('search') + '" data-go="search">' + icon('search', 20) + '<span>查询</span></button><button class="nav-item ' + active('history') + '" data-go="history">' + icon('history', 20) + '<span>历史</span></button><button class="nav-item ' + active('favorites') + '" data-go="favorites">' + icon('heart', 20) + '<span>收藏</span></button></nav>';
}
function sourceTabs() {
  const tabs = [{ id:'textbook', label:'教材内容', count:lessonItems.length }, { id:'extra', label:'课外拓展', count:extraItems.length }];
  return '<div class="source-tabs">' + tabs.map(t => '<button class="source-tab ' + (state.scope === t.id ? 'active' : '') + '" data-scope="' + t.id + '"><span>' + t.label + '</span><b>' + t.count + '</b></button>').join('') + '</div>';
}
function categoryHub() {
  const list = scopePool();
  const used = categories.filter(c => list.some(i => i.category === c.id));
  return '<div class="category-hub">' + used.map(c => {
    const count = list.filter(i => i.category === c.id).length;
    return '<button class="hub-card ' + (state.category === c.id ? 'active' : '') + '" style="--cat-color:' + c.color + ';--cat-soft:' + c.soft + '" data-category="' + c.id + '"><span class="hub-main"><b>' + c.name + '</b></span><span class="hub-count">' + count + '</span></button>';
  }).join('') + '</div>';
}
function gradeChips() {
  return '<div class="quick-chips">' + [{ id:'all', label:'全年级' }, ...grades.map(g => ({ id:String(g.grade), label:g.label }))].map(g => '<button class="quick-chip ' + (state.grade === g.id ? 'active' : '') + '" data-grade="' + g.id + '">' + g.label + '</button>').join('') + '</div>';
}
function volumeChips() {
  return '<div class="segment-row">' + [{ id:'all', label:'全部' }, { id:'上', label:'上册' }, { id:'下', label:'下册' }].map(v => '<button class="segment ' + (state.volume === v.id ? 'active' : '') + '" data-volume="' + v.id + '">' + v.label + '</button>').join('') + '</div>';
}
function libraryCard(item) {
  const c = categoryMap[item.category] || categories[0];
  const favorite = state.favorites.has(item.id);
  const video = item.video ? '<a class="card-play" href="' + esc(item.video.url) + '" target="_blank" rel="noopener" aria-label="播放视频">' + icon('play', 15) + '<span>看视频</span></a>' : '';
  return '<article class="library-card" style="--cat-color:' + c.color + ';--cat-soft:' + c.soft + '" data-open="' + esc(item.id) + '" tabindex="0" role="button"><div class="library-card-top"><div class="library-kicker"><span class="cat-dot"></span><span>' + esc(item.categoryName) + '</span></div>' + (item.video ? '<span class="has-video">视频</span>' : '') + '</div><h3>' + esc(item.title) + '</h3><p class="library-author">' + esc(item.dynasty) + ' · ' + esc(item.author) + '</p><p class="library-excerpt">' + esc(item.excerpt) + '</p><div class="library-footer"><span class="grade-pill">' + esc(item.gradeLabel) + '</span><div class="library-actions">' + video + '<button class="card-fav ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏">' + icon('heart', 17) + '</button></div></div></article>';
}
function homeView() {
  const current = filteredItems();
  const cat = state.category === 'all' ? '全部内容' : categoryMap[state.category].name;
  const showFilters = state.scope === 'textbook';
  const filters = showFilters ? '<div class="mobile-filter-row"><span>年级</span>' + gradeChips() + '</div>' + '<div class="mobile-filter-row"><span>册次</span>' + volumeChips() + '</div>' : '';
  return '<main class="page-enter mobile-page">' + topbar() + topSearch() +
    
    '<section class="mobile-section source-section">' + sourceTabs() + '</section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>分类</h2><button class="text-action" data-category="all">全部</button></div>' + categoryHub() + '</section>' +
    '<section class="mobile-section"><div class="mobile-section-head"><h2>' + cat + '</h2><span id="result-count">' + current.length + ' 项</span></div>' +
      '<div class="filter-actions"><button class="filters-toggle" type="button" data-toggle-filters aria-expanded="false">筛选</button></div><div class="mobile-filters collapsed" id="filters-panel">' + filters + '<div class="mobile-filter-row video-row"><span></span><button class="video-filter ' + (state.videoOnly ? 'active' : '') + '" data-video-only="1">' + icon('play', 14) + ' 只看有视频</button></div></div>' +
      '<div class="mobile-search"><div class="search-input-wrap">' + icon('search', 18) + '<input class="search-input" id="inline-search" value="' + esc(state.keyword) + '" placeholder="在当前内容中搜索"><button class="clear-search" data-clear-search aria-label="清空">' + icon('close', 14) + '</button></div></div>' +
      '<div class="mobile-list" id="library-list">' + (current.length ? current.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn" data-reset-filters>清除筛选</button></div>') + '</div></section></main>' + nav();
}

function splitLines(text) { return String(text || '').split(/\n+/).filter(Boolean); }
function splitPairs(item) { const a = splitLines(item.excerpt), b = splitLines(item.pinyin); return a.map((text, i) => ({ text, pinyin: b[i] || '' })); }
function videoBlock(item) {
  if (item.category === 'idiom' || !item.video) return '';
  return '<section class="video-section"><div class="video-head"><span class="video-label">' + icon('play', 16) + '对应视频</span><span class="video-series">' + esc(item.video.season) + ' · 第' + item.video.episode + '集</span></div><a class="video-card" href="' + esc(item.video.url) + '" target="_blank" rel="noopener"><span class="video-cover">' + icon('play', 22) + '</span><span class="video-info"><b>播放视频</b><span>' + esc(item.video.title) + '</span></span></a></section>';
}
function glossaryBlock(item) {
  const terms = glossary[item.title] || [];
  if (!terms.length || item.category === 'idiom') return '';
  return '<section class="reader-glossary"><h2>重点字词</h2><dl>' + terms.slice(0, 4).map(([word, meaning]) => '<div class="glossary-item"><dt>' + esc(word) + '</dt><dd>' + esc(meaning) + '</dd></div>').join('') + '</dl></section>';
}
function detailView() {
  const item = items.find(i => i.id === state.itemId); if (!item) return homeView();
  const pairs = splitPairs(item), favorite = state.favorites.has(item.id);
  const isIdiom = item.category === 'idiom';
  return '<main class="page-enter detail-page mobile-page">' + topbar() +
    '<div class="breadcrumb"><button data-go="home">首页</button><span>/</span><span>' + esc(scopeName(item.scopeType)) + '</span><span>/</span><span>' + esc(item.categoryName) + '</span></div>' +
    '<article class="reader-article"><header class="reader-header"><div class="reader-title-line"><span class="reader-category">' + esc(item.categoryName) + '</span><button class="icon-btn ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏">' + icon('heart', 21) + '</button></div><h1>' + esc(item.title) + '</h1><div class="reader-author">' + esc(item.dynasty) + ' · ' + esc(item.author) + '</div><div class="reader-meta">' + esc(item.gradeLabel) + '</div></header>' +
    '<audio id="reader-audio" preload="metadata" playsinline src="audio/' + encodeURIComponent(item.id) + '.mp3"></audio><audio id="meaning-audio" preload="metadata" playsinline src="audio/' + encodeURIComponent(item.id) + '-meaning.mp3"></audio>' +
    '<section class="reader-text"><div class="reader-section-head"><div class="reader-label">' + (isIdiom ? '释义' : '原文') + '</div><button class="inline-audio-button" data-speak="text" id="speak-btn">' + icon('volume', 16) + ' ' + (isIdiom ? '读释义' : '读原文') + '</button></div>' + pairs.map(p => '<div class="reader-line"><div class="reader-pinyin">' + esc(p.pinyin) + '</div><div class="reader-text-content">' + esc(p.text) + '</div></div>').join('') + '</section>' +
    (item.meaning ? '<section class="reader-meaning"><div class="reader-section-head"><h2>' + (isIdiom ? '释义与例句' : '译文') + '</h2>' + (isIdiom ? '' : '<button class="inline-audio-button" data-speak="meaning" id="meaning-speak-btn">' + icon('volume', 16) + ' 读译文</button>') + '</div><p>' + esc(item.meaning) + '</p></section>' : '') +
    glossaryBlock(item) + videoBlock(item) + '</article></main>' + nav();
}
let currentAudio = null;
function playAudio(kind) {
  const meaning = kind === 'meaning';
  const player = document.querySelector(meaning ? '#meaning-audio' : '#reader-audio');
  const button = document.querySelector(meaning ? '#meaning-speak-btn' : '#speak-btn');
  if (!player || !button) return;
  const isIdiom = document.querySelector('.reader-label')?.textContent.includes('释义') || false;
  const label = meaning ? (isIdiom ? '读例句' : '读译文') : (isIdiom ? '读释义' : '读原文');
  if (currentAudio && currentAudio !== player) { currentAudio.pause(); currentAudio.currentTime = 0; }
  currentAudio = player;
  const resetLabel = () => { button.innerHTML = icon('volume', 17) + ' ' + label; button.classList.remove('playing'); };
  if (!player.paused) { player.pause(); resetLabel(); return; }
  player.volume = 1;
  const playPromise = player.play();
  if (playPromise?.then) {
    playPromise.then(() => { button.innerHTML = icon('pause', 17) + ' 暂停'; button.classList.add('playing'); })
      .catch(err => { resetLabel(); toast(err?.name === 'NotAllowedError' ? '请再点一次播放' : '音频加载失败', 'volume'); });
  }
  player.onended = resetLabel;
  player.onerror = () => { resetLabel(); toast('音频加载失败', 'volume'); };
}

function searchView() {
  const result = filteredItems();
  return '<main class="page-enter mobile-page">' + topbar() + topSearch() + '<div class="search-page"><h1>查询</h1><form class="big-search" id="search-form">' + icon('search', 21) + '<input id="search-main" value="' + esc(state.keyword) + '" placeholder="输入篇名、作者或正文"><button class="search-submit">查询</button></form><div class="search-filter-panel"><div class="search-filter-group"><span class="filter-label">来源</span><div class="filter-options"><button class="filter-option ' + (state.scope === 'all' ? 'active' : '') + '" data-scope="all">全部</button><button class="filter-option ' + (state.scope === 'textbook' ? 'active' : '') + '" data-scope="textbook">教材</button><button class="filter-option ' + (state.scope === 'extra' ? 'active' : '') + '" data-scope="extra">拓展</button></div></div><div class="search-filter-group"><span class="filter-label">分类</span><div class="filter-options"><button class="filter-option ' + (state.category === 'all' ? 'active' : '') + '" data-category="all">全部</button>' + categories.map(c => '<button class="filter-option ' + (state.category === c.id ? 'active' : '') + '" data-category="' + c.id + '">' + c.name + '</button>').join('') + '</div></div><div class="search-filter-group"><span class="filter-label">年级</span><div class="filter-options"><button class="filter-option ' + (state.grade === 'all' ? 'active' : '') + '" data-grade="all">全部</button>' + grades.map(g => '<button class="filter-option ' + (state.grade === String(g.grade) ? 'active' : '') + '" data-grade="' + g.grade + '">' + g.label + '</button>').join('') + '</div></div></div><div class="search-results-heading"><h2>查询结果</h2><span>' + result.length + ' 项</span></div><div class="search-results-list">' + (result.length ? result.map(item => '<article class="search-result-card" data-open="' + esc(item.id) + '"><div class="search-result-title">' + esc(item.title) + '</div><div class="search-result-meta">' + (esc(scopeName(item.scopeType)) + ' · ' + esc(item.categoryName) + ' · ' + esc(item.gradeLabel)) + '</div><p class="search-result-summary">' + esc(item.excerpt) + '</p></article>').join('') : '<div class="empty-state"><h3>没有找到内容</h3></div>') + '</div></div></main>' + nav();
}
function favoritesView() {
  const list = items.filter(i => state.favorites.has(i.id));
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="favorites-page"><h1>收藏</h1>' + (list.length ? '<div class="favorite-list">' + list.map(i => '<article class="favorite-card" data-open="' + esc(i.id) + '"><div class="favorite-info"><h3>' + esc(i.title) + '</h3><span class="favorite-meta">' + (esc(scopeName(i.scopeType)) + ' · ' + esc(i.gradeLabel)) + '</span></div></article>').join('') + '</div>' : '<div class="favorite-empty"><h2>还没有收藏</h2><p>点击内容页右上角的心形按钮即可收藏。</p><button class="btn" data-go="home">去浏览</button></div>') + '</div></main>' + nav();
}

function historyView() {
  const list = state.history.map(id => items.find(i => i.id === id)).filter(Boolean);
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="collection-page"><div class="collection-head"><div><h1>历史</h1><p>最近阅读</p></div><div class="collection-actions">' + (state.historyUndo ? '<button class="text-action undo-action" data-history-undo>撤销</button>' : '') + (list.length ? '<button class="text-action" data-history-clear>清空</button>' : '') + '</div></div>' + (list.length ? '<div class="favorite-list">' + list.map(i => '<article class="favorite-card" data-open="' + esc(i.id) + '"><div class="collection-index">' + icon('history', 17) + '</div><div class="favorite-info"><h3>' + esc(i.title) + '</h3><span class="favorite-meta">' + esc(i.categoryName) + ' · ' + esc(i.gradeLabel) + '</span></div><button class="history-remove" data-history-remove="' + esc(i.id) + '" aria-label="删除这条历史">' + icon('close', 17) + '</button></article>').join('') + '</div>' : '<div class="favorite-empty"><h2>暂无浏览记录</h2><button class="btn" data-go="home">去阅读</button></div>') + '</div></main>' + nav();
}
function openItem(id) { state.itemId = id; state.view = 'detail'; markRead(id); location.hash = 'read/' + encodeURIComponent(id); render(); window.scrollTo({ top: 0, behavior: 'auto' }); }

function render() { let view = homeView; if (state.view === 'detail') view = detailView; else if (state.view === 'search') view = searchView; else if (state.view === 'favorites') view = favoritesView; else if (state.view === 'history') view = historyView; app.innerHTML = view() + '<div class="toast" id="toast" role="status" aria-live="polite"></div>'; }
function route() { const hash = decodeURIComponent(location.hash.replace(/^#\/?/, '')); if (hash.startsWith('read/')) { const id = hash.slice(5); if (items.some(i => i.id === id)) { state.itemId = id; state.view = 'detail'; markRead(id); } } else if (hash === 'search') state.view = 'search'; else if (hash === 'favorites') state.view = 'favorites'; else if (hash === 'history') state.view = 'history'; else state.view = 'home'; render(); }
document.addEventListener('click', event => {
  if (event.target.closest('.card-play, .video-card')) return;

  const el = event.target.closest('[data-go],[data-grade],[data-category],[data-volume],[data-scope],[data-fav],[data-open],[data-clear-search],[data-reset-filters],[data-speak],[data-video-only],[data-history-remove],[data-history-clear],[data-history-undo],[data-toggle-filters]');
  if (!el) return;

  if (el.dataset.toggleFilters !== undefined) { const panel = document.querySelector('#filters-panel'); panel.classList.toggle('collapsed'); el.setAttribute('aria-expanded', String(!panel.classList.contains('collapsed'))); return; }
  if (el.dataset.historyRemove) { event.stopPropagation(); return removeHistory(el.dataset.historyRemove); }
  if (el.dataset.historyClear !== undefined) return clearHistory();
  if (el.dataset.historyUndo !== undefined) return undoHistory();
  if (el.dataset.fav) return toggleFavorite(el.dataset.fav, event);
  if (el.dataset.open) return openItem(el.dataset.open);
  if (el.dataset.grade !== undefined) return updateFilter({ grade: el.dataset.grade });
  if (el.dataset.category !== undefined) return updateFilter({ category: el.dataset.category });
  if (el.dataset.volume !== undefined) return updateFilter({ volume: el.dataset.volume });
  if (el.dataset.scope !== undefined) return updateFilter({ scope: el.dataset.scope });
  if (el.dataset.videoOnly !== undefined) return updateFilter({ videoOnly: !state.videoOnly });
  if (el.dataset.clearSearch !== undefined) return updateFilter({ keyword: '' });
  if (el.dataset.resetFilters !== undefined) { Object.assign(state, { category:'all', grade:'all', volume:'all', keyword:'', videoOnly:false }); savePrefs(); return render(); }
  if (el.dataset.speak) return playAudio(el.dataset.speak);
  if (el.dataset.go) { state.view = el.dataset.go; location.hash = el.dataset.go === 'home' ? '' : el.dataset.go; render(); window.scrollTo({ top: 0, behavior: 'auto' }); }
});
document.addEventListener('input', event => { if (event.target.id === 'top-search-input') { state.topQuery = event.target.value; render(); const input = document.querySelector('#top-search-input'); if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); } } if (event.target.id === 'inline-search') { state.keyword = event.target.value; const current = filteredItems(); const list = document.querySelector('#library-list'); if (list) list.innerHTML = current.length ? current.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3></div>'; const count = document.querySelector('#result-count'); if (count) count.textContent = current.length + ' 项'; } });
document.addEventListener('submit', event => { if (event.target.id === 'top-search-form') { event.preventDefault(); state.topQuery = document.querySelector('#top-search-input')?.value.trim() || ''; render(); } if (event.target.id === 'search-form') { event.preventDefault(); state.keyword = document.querySelector('#search-main')?.value || ''; render(); } });
window.addEventListener('hashchange', route);
route();

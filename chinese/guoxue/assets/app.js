import { categories, grades, items, lessonItems, extraItems, itemById, searchItems } from './data.js';
import { icon } from './icons.js';
import { glossary } from './glossary-data.js';
import { isRecitation, examPoint } from './review-data.js';

const app = document.querySelector('#app');
const KEYS = { favorites: 'guoxue-favorites-v5', read: 'guoxue-read-v5', prefs: 'guoxue-prefs-v5', history: 'guoxue-history-v1', memorized: 'guoxue-memorized-v1' };
const load = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
const savedPrefs = load(KEYS.prefs, {});
const state = {
  view: 'home', category: 'all', grade: 'all', volume: 'all', scope: 'textbook', keyword: '',
  topQuery: '', videoOnly: false, examOnly: false, itemId: null, toastTimer: null, recalling: false,
  favorites: new Set(load(KEYS.favorites, [])), read: new Set(load(KEYS.read, [])), history: load(KEYS.history, []), historyUndo: null,
  ...savedPrefs,
  memorized: new Set(load(KEYS.memorized, []))
};
if (!['textbook', 'recitation', 'extra', 'all'].includes(state.scope)) state.scope = 'textbook';
state.view = 'home';
const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const recitationItems = lessonItems.filter(isRecitation);
const scopeName = scope => ({ textbook: '教材内容', recitation: '课本必背', extra: '课外拓展' })[scope];

function savePrefs() {
  save(KEYS.prefs, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, videoOnly: state.videoOnly, examOnly: state.examOnly });
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
  save(KEYS.favorites, [...state.favorites]); render(); toast(state.favorites.has(id) ? '已收藏' : '已取消收藏', 'heart');
}
function markRead(id) { if (!state.read.has(id)) { state.read.add(id); save(KEYS.read, [...state.read]); } state.history = [id, ...state.history.filter(x => x !== id)].slice(0, 30); save(KEYS.history, state.history); }
function removeFavorite(id) { state.favorites.delete(id); save(KEYS.favorites, [...state.favorites]); render(); toast('已取消收藏', 'heart'); }
function clearFavorites() { state.favorites.clear(); save(KEYS.favorites, []); render(); toast('已取消全部收藏', 'heart'); }
function removeHistory(id) { state.historyUndo = [...state.history]; state.history = state.history.filter(x => x !== id); save(KEYS.history, state.history); render(); toast('已移除，可撤销', 'check'); }
function undoHistory() { if (!state.historyUndo) return; state.history = state.historyUndo; state.historyUndo = null; save(KEYS.history, state.history); render(); toast('已恢复历史', 'history'); }
function clearHistory() { state.historyUndo = [...state.history]; state.history = []; save(KEYS.history, state.history); render(); toast('历史已清空', 'check'); }
function scopePool(scope = state.scope) {
  return scope === 'recitation' ? recitationItems : scope === 'textbook' ? lessonItems : scope === 'extra' ? extraItems : items;
}
function isExamFocus(item) { return Boolean(examPoint(item)); }
function filteredItems() {
  const result = searchItems(scopePool(), { category: state.category, grade: state.grade, volume: state.volume, keyword: state.keyword });
  const videoFiltered = state.videoOnly ? result.filter(i => i.video) : result;
  return state.examOnly ? videoFiltered.filter(isExamFocus) : videoFiltered;
}
function globalResults() {
  if (!state.topQuery.trim()) return [];
  return searchItems(items, { keyword: state.topQuery.trim(), scope: 'all' });
}
function updateFilter(patch, control = null) {
  if (patch.scope === state.scope) return;
  if (patch.scope) {
    if (!scopePool(patch.scope).some(item => item.category === state.category)) state.category = 'all';
    if (patch.scope === 'extra') Object.assign(state, { grade: 'all', volume: 'all', examOnly: false });
    state.keyword = '';
  }
  Object.assign(state, patch);
  savePrefs();
  render();
  // Re-rendered filter chips should keep keyboard focus and the reading position.
  if (control) {
    const [key] = Object.keys(control.dataset);
    const attr = 'data-' + key.replace(/[A-Z]/g, letter => '-' + letter.toLowerCase());
    [...app.querySelectorAll('[' + attr + ']')].find(el => el.dataset[key] === control.dataset[key])?.focus({ preventScroll: true });
  }
}

function topbar() {
  return '<header class="topbar"><a class="brand" href="#/"><span class="brand-seal">学</span><span class="brand-name">课本国学</span></a><a class="back-home" href="https://ziyuan2046-cyber.github.io/learning-hub/" aria-label="返回学习空间主页">' + icon('back', 16) + '<span>返回主页</span></a></header>';
}
function topSearch() {
  return `<section class="top-search-section"><form class="top-search" id="top-search-form">${icon('search', 21)}<input id="top-search-input" autocomplete="off" value="${esc(state.topQuery)}" placeholder="搜索古诗、成语、文言文" aria-label="全站搜索"><button type="submit" class="top-search-button">查询</button></form><div id="top-search-matches">${topSearchMatches()}</div></section>`;
}
function topSearchMatches() {
  const results = globalResults();
  return state.topQuery.trim() ? '<div class="top-search-results">' + (results.length ? results.slice(0, 8).map(i => `<button class="top-result" data-open="${esc(i.id)}"><span><b>${esc(i.title)}</b><small>${esc(i.categoryName)} · ${esc(i.gradeLabel)}</small></span>${examBadge(i)}${icon('chevron', 16)}</button>`).join('') + '<div class="top-result-count">共 ' + results.length + ' 条结果</div>' : '<div class="top-result-empty">没有找到相关内容</div>') + '</div>' : '';
}
function nav() {
  const active = v => state.view === v ? 'active' : '';
  return '<nav class="bottom-nav"><button class="nav-item ' + active('home') + '" data-go="home">' + icon('home', 20) + '<span>首页</span></button><button class="nav-item ' + active('search') + '" data-go="search">' + icon('search', 20) + '<span>查询</span></button><button class="nav-item ' + active('history') + '" data-go="history">' + icon('history', 20) + '<span>历史</span></button><button class="nav-item ' + active('favorites') + '" data-go="favorites">' + icon('heart', 20) + '<span>收藏</span></button></nav>';
}
function sourceTabs() {
  const tabs = [['textbook', lessonItems.length], ['recitation', recitationItems.length], ['extra', extraItems.length]];
  return '<div class="source-tabs" role="group" aria-label="内容范围">' + tabs.map(([id, count]) =>
    `<button class="source-tab ${state.scope === id ? 'active' : ''}" data-scope="${id}" aria-pressed="${state.scope === id}"><span>${scopeName(id)}</span><b>${count}</b></button>`).join('') + '</div>';
}
function categoryHub() {
  const list = scopePool();
  const used = categories.filter(c => list.some(i => i.category === c.id));
  return '<div class="category-hub">' + used.map(c => {
    const count = list.filter(i => i.category === c.id).length;
    return `<button class="hub-card ${state.category === c.id ? 'active' : ''}" style="--cat-color:${c.color};--cat-soft:${c.soft}" data-category="${c.id}" aria-pressed="${state.category === c.id}">${icon(c.icon, 18)}<span class="hub-main"><b>${c.name}</b></span><span class="hub-count">${count}</span></button>`;
  }).join('') + '</div>';
}
function gradeChips() {
  return '<div class="quick-chips">' + [{ id:'all', label:'全年级' }, ...grades.map(g => ({ id:String(g.grade), label:g.label }))].map(g => `<button class="quick-chip ${state.grade === g.id ? 'active' : ''}" data-grade="${g.id}" aria-pressed="${state.grade === g.id}">${g.label}</button>`).join('') + '</div>';
}
function volumeChips() {
  return '<div class="segment-row">' + [{ id:'all', label:'全部' }, { id:'上', label:'上册' }, { id:'下', label:'下册' }].map(v => `<button class="segment ${state.volume === v.id ? 'active' : ''}" data-volume="${v.id}" aria-pressed="${state.volume === v.id}">${v.label}</button>`).join('') + '</div>';
}
function focusPoints(item) {
  const grade = Number(item.grade) || 1;
  const category = item.category;
  if (category === 'poetry') return grade <= 2 ? ['全文背诵与易错字默写', '结合诗句说出画面和季节'] : grade <= 4 ? ['名句默写与重点词义', '结合关键词体会景物和情感'] : ['理解诗句含义并背诵默写', '结合意象、表达方式体会情感'];
  if (category === 'idiom') return ['掌握成语字形、读音和含义', '结合语境正确理解或运用'];
  if (category === 'classical') return grade <= 3 ? ['读准字音，理解重点词句', '按顺序复述内容或人物表现'] : ['理解重点实词和关键句', '概括内容，说明人物特点或文章道理'];
  if (category === 'fable') return ['梳理故事起因、经过和结果', '概括寓意，并联系生活说明'];
  if (['sanzi','lunyu','dizigui','qianziwen'].includes(category)) return ['熟读背诵，注意易错字词', '理解句意，并联系主题表达'];
  if (category === 'myth') return ['梳理主要情节和人物表现', '概括故事主题，理解想象特点'];
  return ['读懂重点词句，概括主要内容', '联系语境说明人物、情感或道理'];
}
function focusBlock(item) {
  const isTextbook = item.scopeType === 'textbook';
  const points = focusPoints(item);
  return '<section class="learning-focus study-focus"><div class="learning-focus-title"><span class="learning-focus-icon">' + icon('book', 17) + '</span><h2>' + (isTextbook ? '学习重点' : '拓展积累') + '</h2></div><ul>' + points.map((x,i)=>'<li><b>'+(i+1)+'</b><span>'+esc(x)+'</span></li>').join('') + '</ul></section>';
}
function examBadge(item) {
  const point = examPoint(item);
  return point ? `<span class="learning-badge exam-badge">${icon('star', 13)} 考点 · ${esc(point[0])}</span>` : '';
}
function examBlock(item) {
  const point = examPoint(item);
  if (!point) return '';
  const [type, question, answer] = point;
  return `<section class="learning-focus exam-practice" id="reader-exam" tabindex="-1" aria-labelledby="exam-heading">
    <div class="learning-focus-title"><span class="learning-focus-icon">${icon('star', 18)}</span><h2 id="exam-heading">考点练习</h2><span class="learning-badge exam-badge">${esc(type)}</span></div>
    <p class="exam-question">${esc(question)}</p>
    <details class="exam-answer"><summary>参考答案</summary><p>${esc(answer)}</p></details>
    <p class="focus-note">自编复习题，非考试预测</p>
  </section>`;
}
function libraryCard(item) {
  const c = categoryMap[item.category] || categories[0];
  const favorite = state.favorites.has(item.id);
  const video = item.video ? '<a class="card-play" href="' + esc(item.video.url) + '" target="_blank" rel="noopener" aria-label="播放视频">' + icon('play', 15) + '<span>看视频</span></a>' : '';
  const id = esc(item.id);
  const learned = isRecitation(item) && state.memorized.has(item.id);
  return `<article class="library-card" style="--cat-color:${c.color}" data-open="${id}">
    <div class="library-card-top"><div class="library-kicker"><span class="cat-dot"></span>${esc(item.categoryName)}</div>${examBadge(item)}</div>
    <h3><a href="#read/${encodeURIComponent(item.id)}">${esc(item.title)}</a></h3>
    <p class="library-author">${esc(item.dynasty)} · ${esc(item.author)}</p>
    <p class="library-excerpt">${esc(item.excerpt)}</p>
    <div class="library-footer"><div class="card-metadata"><span class="grade-pill">${esc(item.gradeLabel)}</span>${isRecitation(item) ? `<span class="learning-badge ${learned ? 'memorized-badge' : 'study-badge'}">${learned ? '已背' : '必背'}</span>` : ''}</div>
    <div class="library-actions">${video}<button class="card-fav ${favorite ? 'active' : ''}" data-fav="${id}" aria-pressed="${favorite}" aria-label="收藏">${icon('heart', 17)}</button></div></div>
  </article>`;
}
function libraryResults(list) {
  return list.length ? list.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn" data-reset-filters>清除筛选</button></div>';
}
function homeView() {
  const current = filteredItems();
  const title = categoryMap[state.category]?.name || scopeName(state.scope) || '全部内容';
  const gradeLabel = grades.find(g => String(g.grade) === state.grade)?.label || '全年级';
  const volumeLabel = state.volume === 'all' ? '全部册次' : state.volume + '册';
  const showGrade = state.scope !== 'extra';
  const progress = state.scope === 'recitation'
    ? `<span class="recitation-progress">已背 ${recitationItems.filter(item => state.memorized.has(item.id)).length} / ${recitationItems.length} 篇</span>` : '';
  return `<main class="page-enter mobile-page library-page">${topbar()}${topSearch()}
    <div class="library-layout">
      <aside class="library-sidebar" aria-label="篇目筛选">
        ${sourceTabs()}
        <section class="library-categories" aria-labelledby="category-heading"><div class="mobile-section-head"><h2 id="category-heading">分类</h2><button class="text-action" aria-pressed="${state.category === 'all'}" data-category="all">全部</button></div>${categoryHub()}</section>
        <section class="mobile-filters" id="filters-panel" aria-label="筛选条件">
          ${showGrade ? `<div class="filter-summary"><b>${gradeLabel} · ${volumeLabel}</b><button type="button" data-reset-grade>重置</button></div><div class="mobile-filter-row"><span>年级</span>${gradeChips()}</div><div class="mobile-filter-row"><span>册次</span>${volumeChips()}</div>` : ''}
          <div class="filter-toggles">
            ${state.scope !== 'extra' ? `<button class="exam-filter ${state.examOnly ? 'active' : ''}" data-exam-only aria-pressed="${state.examOnly}">${icon('star', 15)} 只看考点</button>` : ''}
            <button class="video-filter ${state.videoOnly ? 'active' : ''}" data-video-only aria-pressed="${state.videoOnly}">${icon('play', 15)} 只看有视频</button>
          </div>
        </section>
      </aside>
      <section class="library-content" aria-labelledby="library-heading">
        <header class="library-heading"><div><h1 id="library-heading">${title}</h1>${progress}</div><span id="result-count" aria-live="polite">${current.length} 项</span></header>
        <div class="mobile-search"><div class="search-input-wrap">${icon('search', 18)}<input class="search-input" id="inline-search" value="${esc(state.keyword)}" placeholder="在当前内容中搜索" aria-label="在当前内容中搜索"><button class="clear-search" data-clear-search aria-label="清空搜索">${icon('close', 14)}</button></div></div>
        <div class="mobile-list" id="library-list">${libraryResults(current)}</div>
      </section>
    </div></main>${nav()}`;
}

function splitLines(text) { return String(text || '').split(/(?:\r?\n|\\n)+/).map(line => line.trim()).filter(Boolean); }
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
  const item = itemById[state.itemId]; if (!item) return homeView();
  const pairs = splitPairs(item), favorite = state.favorites.has(item.id);
  const isIdiom = item.category === 'idiom';
  const canRecite = isRecitation(item), memorized = canRecite && state.memorized.has(item.id);
  return '<main class="page-enter detail-page mobile-page">' + topbar() +
    '<div class="breadcrumb"><button data-go="home">首页</button><span>/</span><span>' + esc(scopeName(item.scopeType)) + '</span><span>/</span><span>' + esc(item.categoryName) + '</span></div>' +
    '<article class="reader-article"><header class="reader-header"><div class="reader-title-line"><span class="reader-category">' + esc(item.categoryName) + '</span><button class="icon-btn ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏" aria-pressed="' + favorite + '">' + icon('heart', 21) + '</button></div><h1>' + esc(item.title) + '</h1><div class="reader-author">' + esc(item.dynasty) + ' · ' + esc(item.author) + '</div><div class="reader-meta">' + esc(item.gradeLabel) + (canRecite ? '<span class="learning-badge study-badge">课本必背</span>' : '') + (isExamFocus(item) ? '<button class="exam-jump" data-jump-exam>' + icon('star', 15) + ' 看考点</button>' : '') + '</div></header>' +
    '<audio id="reader-audio" preload="metadata" playsinline src="audio/' + encodeURIComponent(item.id) + '.mp3"></audio><audio id="meaning-audio" preload="metadata" playsinline src="audio/' + encodeURIComponent(item.id) + '-meaning.mp3"></audio>' +
    '<div class="reader-layout"><section class="reader-text"><div class="reader-section-head"><div class="reader-label">' + (isIdiom ? '释义' : '原文') + '</div><button class="inline-audio-button" data-speak="text" id="speak-btn">' + icon('volume', 16) + ' ' + (isIdiom ? '读释义' : '读原文') + '</button></div>' +
    (canRecite ? `<div class="recite-toolbar"><button data-recall aria-expanded="true" aria-controls="reader-original">遮住原文</button><button data-memorized aria-pressed="${memorized}">${icon('check', 16)} <span>${memorized ? '已背' : '标为已背'}</span></button></div>` : '') +
    '<div id="reader-original">' + pairs.map(p => '<div class="reader-line"><div class="reader-pinyin">' + esc(p.pinyin) + '</div><div class="reader-text-content">' + esc(p.text) + '</div></div>').join('') + '</div></section><div class="reader-companion">' +
    examBlock(item) + '<div class="reader-notes">' +
    (item.meaning ? '<section class="reader-meaning"><div class="reader-section-head"><h2>' + (isIdiom ? '释义与例句' : '译文') + '</h2>' + (isIdiom ? '' : '<button class="inline-audio-button" data-speak="meaning" id="meaning-speak-btn">' + icon('volume', 16) + ' 读译文</button>') + '</div><p>' + esc(item.meaning) + '</p></section>' : '') +
    glossaryBlock(item) + focusBlock(item) + videoBlock(item) + '</div></div></div></article></main>' + nav();
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
  const results = filteredItems();
  const scopes = ['all', 'textbook', 'recitation', 'extra'];
  return `<main class="page-enter mobile-page">${topbar()}
    <div class="search-page"><h1>查询</h1>
      <form class="big-search" id="search-form">${icon('search', 21)}<input id="search-main" value="${esc(state.keyword)}" placeholder="搜索篇名、作者或正文" aria-label="搜索篇名、作者或正文"><button class="search-submit">查询</button></form>
      <div class="mobile-filters search-filter-panel">
        <div class="mobile-filter-row"><span>范围</span><div class="quick-chips">${scopes.map(scope => `<button data-scope="${scope}" class="quick-chip ${state.scope === scope ? 'active' : ''}" aria-pressed="${state.scope === scope}">${scopeName(scope) || '全部'}</button>`).join('')}</div></div>
        <div class="mobile-filter-row"><span>分类</span><div class="quick-chips">${[{ id: 'all', name: '全部' }, ...categories.filter(category => scopePool().some(item => item.category === category.id))].map(category => `<button data-category="${category.id}" class="quick-chip ${state.category === category.id ? 'active' : ''}" aria-pressed="${state.category === category.id}">${category.name}</button>`).join('')}</div></div>
        ${state.scope !== 'extra' ? `<div class="mobile-filter-row"><span>年级</span>${gradeChips()}</div><div class="mobile-filter-row"><span>册次</span>${volumeChips()}</div>` : ''}
        <div class="filter-toggles">${state.scope !== 'extra' ? `<button class="exam-filter ${state.examOnly ? 'active' : ''}" data-exam-only aria-pressed="${state.examOnly}">${icon('star', 15)} 只看考点</button>` : ''}<button class="video-filter ${state.videoOnly ? 'active' : ''}" data-video-only aria-pressed="${state.videoOnly}">${icon('play', 15)} 只看有视频</button></div>
      </div>
      <div class="search-results-heading"><h2>查询结果</h2><span>${results.length} 项</span></div>
      <div class="search-results-list">${libraryResults(results)}</div>
    </div></main>${nav()}`;
}
function favoritesView() {
  const list = items.filter(i => state.favorites.has(i.id));
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="collection-page"><div class="collection-head"><div><h1>收藏</h1><p>我的收藏</p></div><div class="collection-actions">' + (list.length ? '<button class="text-action" data-favorites-clear>全部取消</button>' : '') + '</div></div>' + (list.length ? '<div class="favorite-list">' + list.map(i => '<article class="favorite-card" data-open="' + esc(i.id) + '"><div class="collection-index favorite-index">' + icon('heart', 18) + '</div><div class="favorite-info"><h3>' + esc(i.title) + '</h3><span class="favorite-meta">' + esc(i.categoryName) + ' · ' + esc(i.gradeLabel) + '</span></div><button class="favorite-remove" data-favorite-remove="' + esc(i.id) + '" aria-label="取消收藏">' + icon('close', 17) + '</button></article>').join('') + '</div>' : '<div class="favorite-empty"><h2>还没有收藏</h2><button class="btn" data-go="home">去浏览</button></div>') + '</div></main>' + nav();
}
function historyView() {
  const list = state.history.map(id => items.find(i => i.id === id)).filter(Boolean);
  return '<main class="page-enter mobile-page">' + topbar() + '<div class="collection-page"><div class="collection-head"><div><h1>历史</h1><p>最近阅读</p></div><div class="collection-actions">' + (state.historyUndo ? '<button class="text-action undo-action" data-history-undo>撤销</button>' : '') + (list.length ? '<button class="text-action" data-history-clear>清空</button>' : '') + '</div></div>' + (list.length ? '<div class="favorite-list">' + list.map(i => '<article class="favorite-card" data-open="' + esc(i.id) + '"><div class="collection-index">' + icon('history', 17) + '</div><div class="favorite-info"><h3>' + esc(i.title) + '</h3><span class="favorite-meta">' + esc(i.categoryName) + ' · ' + esc(i.gradeLabel) + '</span></div><button class="history-remove" data-history-remove="' + esc(i.id) + '" aria-label="删除这条历史">' + icon('close', 17) + '</button></article>').join('') + '</div>' : '<div class="favorite-empty"><h2>暂无浏览记录</h2><button class="btn" data-go="home">去阅读</button></div>') + '</div></main>' + nav();
}
function openItem(id) {
  const hash = '#read/' + encodeURIComponent(id);
  if (location.hash !== hash) history.pushState(null, '', hash);
  route();
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function setRecall(active) {
  state.recalling = active;
  const original = app.querySelector('#reader-original');
  const button = app.querySelector('[data-recall]');
  if (!original || !button) return;
  original.classList.toggle('recall-masked', active);
  original.inert = active;
  const notes = app.querySelector('.reader-notes');
  if (notes) notes.hidden = active;
  if (active) app.querySelector('.exam-answer')?.removeAttribute('open');
  button.textContent = active ? '显示原文' : '遮住原文';
  button.setAttribute('aria-expanded', String(!active));
}
function render() {
  currentAudio?.pause();
  currentAudio = null;
  const view = { detail: detailView, search: searchView, favorites: favoritesView, history: historyView }[state.view] || homeView;
  app.innerHTML = view() + '<div class="toast" id="toast" role="status" aria-live="polite"></div>';
  if (state.view === 'detail' && state.recalling) setRecall(true);
}
function route() {
  let hash = '';
  try { hash = decodeURIComponent(location.hash.replace(/^#\/?/, '')); } catch { /* Fall back to the library. */ }
  const id = hash.startsWith('read/') ? hash.slice(5) : '';
  state.recalling = false;
  if (Object.hasOwn(itemById, id)) {
    state.itemId = id;
    state.view = 'detail';
    markRead(id);
  } else {
    state.itemId = null;
    state.view = ['search', 'favorites', 'history'].includes(hash) ? hash : 'home';
  }
  render();
}
document.addEventListener('click', event => {
  if (event.target.closest('.card-play, .video-card') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const el = event.target.closest('[data-go],[data-grade],[data-category],[data-volume],[data-scope],[data-fav],[data-open],[data-clear-search],[data-reset-filters],[data-speak],[data-video-only],[data-exam-only],[data-history-remove],[data-history-clear],[data-history-undo],[data-reset-grade],[data-favorite-remove],[data-favorites-clear],[data-jump-exam],[data-recall],[data-memorized]');
  if (!el) return;
  if ('jumpExam' in el.dataset) {
    const section = app.querySelector('#reader-exam');
    section?.focus({ preventScroll: true });
    section?.scrollIntoView({ block: 'start' });
    return;
  }
  if ('recall' in el.dataset) return setRecall(!state.recalling);
  if ('memorized' in el.dataset) {
    const id = state.itemId;
    const reached = !state.memorized.has(id);
    if (reached) state.memorized.add(id); else state.memorized.delete(id);
    save(KEYS.memorized, [...state.memorized]);
    el.setAttribute('aria-pressed', String(reached));
    el.querySelector('span').textContent = reached ? '已背' : '标为已背';
    toast(reached ? '已标为已背' : '已取消已背标记');
    return;
  }

  if (el.dataset.resetGrade !== undefined) return updateFilter({ grade: 'all', volume: 'all' });
  if (el.dataset.favoriteRemove) { event.stopPropagation(); return removeFavorite(el.dataset.favoriteRemove); }
  if (el.dataset.favoritesClear !== undefined) return clearFavorites();
  if (el.dataset.historyRemove) { event.stopPropagation(); return removeHistory(el.dataset.historyRemove); }
  if (el.dataset.historyClear !== undefined) return clearHistory();
  if (el.dataset.historyUndo !== undefined) return undoHistory();
  if (el.dataset.fav) return toggleFavorite(el.dataset.fav, event);
  if (el.dataset.open) { event.preventDefault(); return openItem(el.dataset.open); }
  if (el.dataset.grade !== undefined) return updateFilter({ grade: el.dataset.grade }, el);
  if (el.dataset.category !== undefined) return updateFilter({ category: el.dataset.category }, el);
  if (el.dataset.volume !== undefined) return updateFilter({ volume: el.dataset.volume }, el);
  if (el.dataset.scope !== undefined) return updateFilter({ scope: el.dataset.scope }, el);
  if (el.dataset.videoOnly !== undefined) return updateFilter({ videoOnly: !state.videoOnly }, el);
  if (el.dataset.examOnly !== undefined) return updateFilter({ examOnly: !state.examOnly }, el);
  if (el.dataset.clearSearch !== undefined) { updateFilter({ keyword: '' }); return app.querySelector('#inline-search')?.focus({ preventScroll: true }); }
  if (el.dataset.resetFilters !== undefined) { Object.assign(state, { category:'all', grade:'all', volume:'all', keyword:'', videoOnly:false, examOnly:false }); savePrefs(); return render(); }
  if (el.dataset.speak) return playAudio(el.dataset.speak);
  if (el.dataset.go) {
    const url = el.dataset.go === 'home' ? '#/' : '#' + el.dataset.go;
    if (url !== location.hash) history.pushState(null, '', url);
    route();
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
});
document.addEventListener('input', event => {
  if (event.target.id === 'top-search-input') {
    state.topQuery = event.target.value;
    app.querySelector('#top-search-matches').innerHTML = topSearchMatches();
  }
  if (event.target.id === 'inline-search') {
    state.keyword = event.target.value;
    const current = filteredItems();
    app.querySelector('#library-list').innerHTML = libraryResults(current);
    app.querySelector('#result-count').textContent = current.length + ' 项';
  }
});
document.addEventListener('submit', event => {
  if (event.target.id === 'top-search-form') {
    event.preventDefault();
    const keyword = app.querySelector('#top-search-input').value.trim();
    if (!keyword) return;
    state.topQuery = '';
    Object.assign(state, { scope: 'all', grade: 'all', volume: 'all', category: 'all', examOnly: false, videoOnly: false, keyword });
    history.pushState(null, '', '#search');
    route();
    window.scrollTo({ top: 0, behavior: 'instant' });
    app.querySelector('#search-main')?.focus({ preventScroll: true });
  }
  if (event.target.id === 'search-form') { event.preventDefault(); updateFilter({ keyword: app.querySelector('#search-main').value }); }
});
window.addEventListener('hashchange', route);
route();

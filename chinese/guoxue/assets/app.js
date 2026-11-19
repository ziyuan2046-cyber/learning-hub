import { categories, grades, items, lessonItems, extraItems, itemById, searchItems, handoutItems, reciteAliases } from './data.js';
import { icon } from './icons.js';
import { glossary } from './glossary-data.js';
import { isRecitation, examPoint } from './review-data.js';
import { lessonStudy, publicLessonText, sharedLessonStudy } from './lesson-study.js';
import { completionDay, restoreRecitation, completedRecitations } from './recitation-progress.js';
import { readerMeaning, distinctTexts, isTranslationLabel } from './reader-meaning.js';

const app = document.querySelector('#app');
const KEYS = { favorites: 'guoxue-favorites-v5', read: 'guoxue-read-v5', prefs: 'guoxue-prefs-v5', history: 'guoxue-history-v1', memorized: 'guoxue-memorized-v1', completedAt: 'guoxue-completed-days-v1' };
const load = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
const savedPrefs = load(KEYS.prefs, {});
const state = {
  view: 'home', category: 'all', grade: 'all', volume: 'all', scope: 'textbook', keyword: '',
  topQuery: '', videoOnly: false, examOnly: false, memorizedFilter: 'all', progressGrade: 'all', itemId: null, toastTimer: null, recalling: false,
  favorites: new Set(load(KEYS.favorites, [])), read: new Set(load(KEYS.read, [])), history: load(KEYS.history, []), historyUndo: null,
  ...savedPrefs,
  ...restoreRecitation(load(KEYS.memorized, []), load(KEYS.completedAt, {}), reciteAliases),
};
if (!['textbook', 'recitation', 'extra', 'all'].includes(state.scope)) state.scope = 'textbook';
state.view = 'home';
const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
const esc = v => String(v ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const recitationItems = handoutItems;
const statusFilters = [['all', '全部'], ['done', '已背'], ['todo', '未背']];
if (!statusFilters.some(([id]) => id === state.memorizedFilter)) state.memorizedFilter = 'all';
const isTextbookLesson = item => item.sourceType === 'text-recitation';
const matchesCategory = (item, category) => item.category === category;
const scopeName = scope => ({ textbook: '教材内容', recitation: '课本必背', extra: '课外拓展' })[scope];

function savePrefs() {
  save(KEYS.prefs, { category: state.category, grade: state.grade, volume: state.volume, scope: state.scope, videoOnly: state.videoOnly, examOnly: state.examOnly, memorizedFilter: state.memorizedFilter });
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
const attachmentExams = item => item.notes?.filter(([label]) => /常考|考点|题型|考题/.test(label)) || [];
function isExamFocus(item) { return Boolean(examPoint(item) || attachmentExams(item).length); }
function filteredItems(ignoreMemorized = false) {
  const result = searchItems(scopePool(), { category: state.category, grade: state.grade, volume: state.volume, keyword: state.keyword });
  return result.filter(item => (!state.videoOnly || item.video) && (!state.examOnly || isExamFocus(item)) &&
    (ignoreMemorized || state.view !== 'home' || state.scope !== 'recitation' || state.memorizedFilter === 'all' ||
      (state.memorizedFilter === 'done') === state.memorized.has(item.id)));
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
  const tabs = [['home', 'home', '首页'], ['progress', 'trophy', '背诵榜'], ['history', 'history', '历史'], ['favorites', 'heart', '收藏']];
  return `<nav class="bottom-nav" aria-label="底部导航">${tabs.map(([view, symbol, label]) => {
    const active = state.view === view;
    return `<button class="nav-item${active ? ' active' : ''}" data-go="${view}"${active ? ' aria-current="page"' : ''}>${icon(symbol, 20)}<span>${label}</span></button>`;
  }).join('')}</nav>`;
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
    const count = list.filter(i => matchesCategory(i, c.id)).length;
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
  const study = lessonStudy[item.id] || sharedLessonStudy[item.id];
  if (study) return study.goals;
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
  const isTextbook = item.scopeType !== 'extra';
  const points = focusPoints(item);
  return '<section class="learning-focus study-focus"><div class="learning-focus-title"><span class="learning-focus-icon">' + icon('book', 17) + '</span><h2>' + (isTextbook ? '学习重点' : '拓展积累') + '</h2></div><ul>' + points.map((x,i)=>'<li><b>'+(i+1)+'</b><span>'+esc(x)+'</span></li>').join('') + '</ul></section>';
}
function examBadge(item) {
  const point = examPoint(item);
  return (attachmentExams(item).length || point) ? `<span class="learning-badge exam-badge">${icon('star', 13)} 考点${attachmentExams(item).length ? '' : ` · ${esc(point[0])}`}</span>` : '';
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
  return `<article class="library-card${item.scopeType !== 'extra' ? ' textbook-preview' : ''}" style="--cat-color:${c.color}" data-open="${id}">
    <div class="library-card-top"><div class="library-kicker"><span class="cat-dot"></span>${esc(item.categoryName)}</div>${examBadge(item)}</div>
    <h3><a href="#read/${encodeURIComponent(item.id)}">${esc(item.title)}</a></h3>
    <p class="library-author">${item.handout ? esc([item.dynasty, item.author, item.range].filter(Boolean).join(' · ')) : item.range ? `${esc(item.gradeLabel)} · 第 ${item.page} 页 · ${esc(item.range)}` : `${esc(item.dynasty)} · ${esc(item.author)}`}</p>
    <p class="library-excerpt">${esc(item.excerpt)}</p>
    <div class="library-footer"><div class="card-metadata"><span class="grade-pill">${esc(item.gradeLabel)}</span>${item.optional ? '<span class="learning-badge optional-badge">选背／待核对</span>' : ''}${isRecitation(item) ? `<span class="learning-badge ${learned ? 'memorized-badge' : 'study-badge'}">${learned ? '已背' : item.optional ? '未背' : '必背'}</span>` : ''}</div>
    <div class="library-actions">${video}<button class="card-fav ${favorite ? 'active' : ''}" data-fav="${id}" aria-pressed="${favorite}" aria-label="收藏">${icon('heart', 17)}</button></div></div>
  </article>`;
}
function libraryResults(list) {
  if (!list.length && state.view === 'home' && state.scope === 'recitation' && state.memorizedFilter === 'done') return '<div class="empty-state"><h3>当前筛选下还没有已背篇目</h3><button class="btn" data-memorized-filter="todo">去看未背</button></div>';
  if (!list.length && state.view === 'home' && state.scope === 'recitation' && state.memorizedFilter === 'todo' && filteredItems(true).length) return '<div class="empty-state"><h3>这里的篇目都背会了</h3><button class="btn" data-go="progress">查看背诵榜</button></div>';
  return list.length ? list.map(libraryCard).join('') : '<div class="empty-state"><h3>没有找到内容</h3><button class="btn" data-reset-filters>清除筛选</button></div>';
}
function memorizedFilters() {
  if (state.scope !== 'recitation') return '';
  const list = filteredItems(true);
  const completed = list.filter(item => state.memorized.has(item.id)).length;
  const counts = {all: list.length, done: completed, todo: list.length - completed};
  return statusFilters.map(([id, label]) => `<button class="segment${state.memorizedFilter === id ? ' active' : ''}" data-memorized-filter="${id}" aria-pressed="${state.memorizedFilter === id}">${label}<b>${counts[id]}</b></button>`).join('');
}
function homeView() {
  const current = filteredItems();
  const title = categoryMap[state.category]?.name || scopeName(state.scope) || '全部内容';
  const gradeLabel = grades.find(g => String(g.grade) === state.grade)?.label || '全年级';
  const volumeLabel = state.volume === 'all' ? '全部册次' : state.volume + '册';
  const showGrade = state.scope !== 'extra';
  const progress = state.scope === 'recitation'
    ? `<span class="recitation-progress">已背 ${recitationItems.filter(item => !item.optional && state.memorized.has(item.id)).length} / ${recitationItems.filter(item => !item.optional).length} 篇必背</span>` : '';
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
        ${state.scope === 'recitation' ? `<div class="recitation-filters" role="group" aria-label="背诵状态">${memorizedFilters()}</div>` : ''}
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
  const terms = lessonStudy[item.id]?.glossary || glossary[item.title] || [];
  if (!terms.length || item.category === 'idiom') return '';
  return '<section class="reader-glossary"><h2>重点字词</h2><dl>' + terms.slice(0, 4).map(([word, meaning]) => '<div class="glossary-item"><dt>' + esc(word) + '</dt><dd>' + esc(meaning) + '</dd></div>').join('') + '</dl></section>';
}
function memorizedButton(item) {
  const memorized = state.memorized.has(item.id);
  return `<button data-memorized aria-pressed="${memorized}">${icon('check', 16)} <span>${memorized ? '已背' : '标为已背'}</span></button>`;
}
function completionDate(item) {
  const date = completionDay(state.completedAt.get(item.id));
  return date ? `<time class="completion-date" datetime="${esc(date)}">${esc(date)} 背会</time>` : '';
}
const personalTextKey = id => `guoxue-personal-text-v1:${id}`;

function savePersonalText(text) {
  try {
    const key = personalTextKey(state.itemId);
    if (text) localStorage.setItem(key, JSON.stringify(text));
    else localStorage.removeItem(key);
  } catch {
    toast('无法保存，请检查浏览器的存储设置', 'book');
    return;
  }
  render();
  app.querySelector('#lesson-reading-heading')?.focus({ preventScroll: true });
  app.querySelector('#lesson-reading-heading')?.scrollIntoView({ block: 'nearest' });
  toast(text ? '原文已保存到本机' : '已清除本机原文', 'book');
}

function progressView() {
  const entries = completedRecitations(items, state.memorized, state.completedAt);
  const gradeCounts = new Map();
  for (const {item} of entries) gradeCounts.set(item.grade, (gradeCounts.get(item.grade) || 0) + 1);
  if (state.progressGrade !== 'all' && !gradeCounts.has(Number(state.progressGrade))) state.progressGrade = 'all';
  const shown = state.progressGrade === 'all' ? entries : entries.filter(({item}) => String(item.grade) === state.progressGrade);
  const filters = [['all', '全部', entries.length], ...grades.filter(g => gradeCounts.has(g.grade)).map(g => [String(g.grade), g.label, gradeCounts.get(g.grade)])];
  const latest = completionDay(entries[0]?.stamp);
  const currentGrade = grades.find(g => String(g.grade) === state.progressGrade)?.label || '全部年级';
  return `<main class="page-enter mobile-page progress-page">${topbar()}
    <header class="progress-heading"><div class="progress-emblem">${icon('trophy', 28)}</div><h1>背诵榜</h1></header>
    <dl class="progress-summary" aria-label="背诵数据汇总"><div><dt>累计已背</dt><dd><b>${entries.length}</b> 篇</dd></div><div><dt>已背年级</dt><dd><b>${gradeCounts.size}</b> 个</dd></div><div><dt>最近背诵</dt><dd>${latest ? `<time datetime="${esc(latest)}">${esc(latest)}</time>` : '—'}</dd></div></dl>
    ${entries.length ? `<div class="progress-grades" role="group" aria-label="已背年级">${filters.map(([id, label, count]) =>
      `<button class="segment${state.progressGrade === id ? ' active' : ''}" data-progress-grade="${id}" aria-pressed="${state.progressGrade === id}">${label} <b>${count}</b></button>`).join('')}</div>
    <div class="progress-list-heading"><h2>${currentGrade}</h2><span aria-live="polite">${shown.length} 篇 · 最新在前</span></div>
    <ol class="progress-list" aria-label="已背篇目">${shown.map(({item, stamp}, index) => {
      const day = completionDay(stamp);
      return `<li><a href="#read/${encodeURIComponent(item.id)}" data-open="${esc(item.id)}"><span class="progress-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><div><strong>${esc(item.title)}</strong><small>${esc(item.gradeLabel)}</small></div>${day ? `<time datetime="${esc(day)}">${esc(day)}</time>` : '<span class="progress-undated">日期未记录</span>'}${icon('chevron', 16)}</a></li>`;
    }).join('')}</ol>` : '<div class="progress-empty">还没有已背篇目</div>'}
  </main>${nav()}`;
}

function meaningBlock(item) {
  const {label, paragraphs, audioId} = readerMeaning(item);
  if (!paragraphs.length) return '';
  const audio = audioId ? `<audio id="meaning-audio" preload="none" playsinline src="audio/${encodeURIComponent(audioId)}.mp3"></audio><button class="inline-audio-button" data-speak="meaning" id="meaning-speak-btn" data-audio-label="读${label}">${icon('volume', 16)} 读${label}</button>` : '';
  return `<section class="reader-meaning reader-inline-meaning" aria-labelledby="reader-meaning-heading"><div class="reader-section-head"><h2 id="reader-meaning-heading">${label}</h2>${audio}</div><div class="reader-meaning-body">${paragraphs.map(text => `<p>${esc(text)}</p>`).join('')}</div></section>`;
}

function handoutNotes(item) {
  const prompts = attachmentExams(item);
  const group = {terms: [], focus: [], errors: []};
  for (const [label, value] of item.notes) {
    if (/常考|考点|题型|考题/.test(label) || isTranslationLabel(label)) continue;
    const key = /易错|易混/.test(label) ? 'errors' :
      /重点字词|词义|注释|字词|实词|虚词/.test(label) || (!/主旨|重点|修辞|名句|赏析|要点|提示|情感|思路|文体|作者|出处|文学|句式|版|读法|背诵/.test(label) && label.length <= 10) ? 'terms' : 'focus';
    group[key].push([label, value]);
  }
  const guide = lessonStudy[item.id];
  const terms = group.terms.length ? group.terms : guide?.glossary || glossary[item.title] || [];
  const notesList = rows => {
    const groups = new Map();
    for (const [label, value] of rows) {
      if (!groups.has(label)) groups.set(label, []);
      groups.get(label).push(value);
    }
    return `<dl>${[...groups].map(([label, values]) => `<div><dt>${esc(label)}</dt>${distinctTexts(values).map(value => `<dd>${esc(value)}</dd>`).join('')}</div>`).join('')}</dl>`;
  };
  const section = (title, css, rows) => rows.length ? `<section class="learning-focus handout-notes ${css}"><div class="learning-focus-title"><h2>${title}</h2></div>${notesList(rows)}</section>` : '';
  return section('重点字词', 'reader-glossary', terms) + section('学习重点', 'study-focus', group.focus) + section('默写易错', 'reader-glossary', group.errors) +
    (prompts.length ? `<section class="learning-focus exam-practice handout-notes" id="reader-exam" tabindex="-1" aria-labelledby="exam-heading"><div class="learning-focus-title"><h2 id="exam-heading">考点练习</h2></div><details class="exam-answer"><summary>展开考点和参考答案</summary>${notesList(prompts)}</details></section>` : examBlock(item));
}

function alignHandoutPinyin(item) {
  const audioLines = splitLines(item.audioText);
  const pinyinLines = splitLines(item.pinyin);
  if (audioLines.length !== pinyinLines.length) return null;
  const stripped = text => text.replace(/[\p{P}\p{Z}\s]/gu, '');
  const pairs = [];
  let index = 0;
  for (const text of item.excerpt.split('\n')) {
    if (!text.trim()) { pairs.push({text, pinyin: ''}); continue; }
    const expected = stripped(text);
    let actual = '';
    const pinyin = [];
    while (actual.length < expected.length && index < audioLines.length) {
      actual += stripped(audioLines[index]);
      pinyin.push(pinyinLines[index++]);
    }
    if (!expected || actual !== expected) return null;
    pairs.push({text, pinyin: pinyin.join(' ')});
  }
  return index === audioLines.length ? pairs : null;
}

function handoutView(item) {
  const favorite = state.favorites.has(item.id);
  const audio = Boolean(item.audioId);
  const paired = audio ? alignHandoutPinyin(item) : null;
  return `<main class="page-enter detail-page mobile-page textbook-lesson-page">${topbar()}
    <div class="breadcrumb"><button data-go="home">首页</button><span>/</span><span>课本必背</span><span>/</span><span>${esc(item.categoryName)}</span></div>
    <article class="reader-article"><header class="reader-header">
      <div class="reader-title-line"><span class="reader-category">${esc(item.categoryName)}</span><button class="icon-btn ${favorite ? 'active' : ''}" data-fav="${esc(item.id)}" aria-label="收藏" aria-pressed="${favorite}">${icon('heart', 21)}</button></div>
      <h1>${esc(item.title)}</h1>${item.author ? `<div class="reader-author">${esc([item.dynasty,item.author].filter(Boolean).join(' · '))}</div>` : ''}
      <div class="reader-meta">${esc(item.gradeLabel)}<span class="learning-badge ${item.optional ? 'optional-badge' : 'study-badge'}">${item.optional ? '选背／待核对' : esc(item.range)}</span>${item.optional ? `<span>${esc(item.range)}</span>` : ''}</div>
    </header><div class="reader-layout">
      <section class="reader-text" aria-labelledby="lesson-reading-heading">
        <div class="reader-section-head"><h2 id="lesson-reading-heading" class="reader-label" tabindex="-1">背诵原文</h2>
          ${isExamFocus(item) ? `<button class="exam-jump" data-jump-exam>${icon('star', 15)} 看考点</button>` : ''}</div>
        <div class="recite-toolbar">${audio ? `<audio id="reader-audio" preload="none" playsinline src="audio/${encodeURIComponent(item.audioId)}.mp3"></audio><button class="inline-audio-button" data-speak="text" id="speak-btn">${icon('volume',16)} 读原文</button>` : ''}<button data-recall aria-expanded="true" aria-controls="reader-original">遮住原文</button>${memorizedButton(item)}</div>
        <div class="completion-slot">${completionDate(item)}</div>
        <div id="reader-original" class="lesson-reading handout-reading">${paired ? paired.map(p => p.text.trim() ? `<div class="reader-line"><div class="reader-pinyin">${esc(p.pinyin)}</div><div class="reader-text-content">${esc(p.text)}</div></div>` : '<div class="handout-line-break" aria-hidden="true"></div>').join('') : `<div class="handout-prose">${esc(item.excerpt)}</div>`}</div>
        ${meaningBlock(item)}
        <div class="reader-notes lesson-extras">
          ${item.cues?.length ? `<details class="lesson-disclosure"><summary>背诵提示</summary><ol class="recitation-cues">${item.cues.map(cue => `<li>${esc(cue)}</li>`).join('')}</ol></details>` : ''}
        </div>
      </section>
      <div class="reader-companion">${handoutNotes(item)}${videoBlock(item)}<footer class="lesson-source">附件整理资料 · ${esc(item.position || item.kind)}</footer></div>
    </div></article></main>${nav()}`;
}

function textbookLessonView(item) {
  const favorite = state.favorites.has(item.id);
  const study = lessonStudy[item.id];
  const original = publicLessonText[item.id];
  const personalText = load(personalTextKey(item.id), '');
  const hasPersonalText = typeof personalText === 'string' && Boolean(personalText.trim());
  const reading = hasPersonalText ? splitLines(personalText) : original?.paragraphs || study.reading;
  const readingLabel = hasPersonalText ? '我的原文' : original ? '原文 · 早期版本' : '课文导读';
  const recallLabel = original || hasPersonalText ? '原文' : '导读';
  return `<main class="page-enter detail-page mobile-page textbook-lesson-page">${topbar()}
    <div class="breadcrumb"><button data-go="home">首页</button><span>/</span><span>课本必背</span><span>/</span><span>课文背诵</span></div>
    <article class="reader-article"><header class="reader-header">
      <div class="reader-title-line"><span class="reader-category">课文背诵</span><button class="icon-btn ${favorite ? 'active' : ''}" data-fav="${esc(item.id)}" aria-label="收藏" aria-pressed="${favorite}">${icon('heart', 21)}</button></div>
      <h1>${esc(item.title)}</h1><div class="reader-meta">${esc(item.gradeLabel)}<span class="learning-badge study-badge">${esc(item.range)}</span></div>
    </header><div class="reader-layout">
      <section class="reader-text" aria-labelledby="lesson-reading-heading">
        <div class="reader-section-head"><h2 id="lesson-reading-heading" class="reader-label" tabindex="-1">${readingLabel}</h2>
          <button class="exam-jump" data-jump-exam>${icon('star', 15)} 看考点</button></div>
        <div class="recite-toolbar"><button data-recall data-recall-label="${recallLabel}" aria-expanded="true" aria-controls="reader-original">遮住${recallLabel}</button>${memorizedButton(item)}</div>
        <div id="reader-original" class="lesson-reading" aria-label="${readingLabel}">
          ${reading.map(paragraph => `<p>${esc(paragraph)}</p>`).join('')}
          ${original && !hasPersonalText ? `<footer>${esc(original.credit)}</footer>` : ''}
        </div>
        <div class="reader-notes lesson-extras">
          <details class="lesson-disclosure"><summary>背诵提示</summary><ol class="recitation-cues">${item.cues.map(cue => `<li>${esc(cue)}</li>`).join('')}</ol></details>
          ${!original ? `<details class="lesson-disclosure lesson-private-text"><summary>${hasPersonalText ? '编辑我的原文' : '添加我的原文'}</summary>
            <form id="personal-text-form">
              <label for="personal-text">粘贴手头课本中需要背诵的部分</label>
              <textarea id="personal-text" name="text" rows="6" maxlength="10000" required>${esc(hasPersonalText ? personalText : '')}</textarea>
              <p>原文只保存在本机浏览器。</p>
              <div class="recite-toolbar"><button class="btn" type="submit">保存原文</button>${hasPersonalText ? '<button type="button" data-remove-personal-text>清除原文</button>' : ''}</div>
            </form></details>` : ''}
        </div>
      </section>
      <div class="reader-companion">
        ${glossaryBlock(item)}
        ${focusBlock(item)}
        ${examBlock(item)}
        <footer class="lesson-source">人教版统编语文 · ${esc(item.edition)} · 课文第 ${item.page} 页 · 背诵要求第 ${item.exercisePage} 页</footer>
      </div>
    </div></article></main>${nav()}`;
}
function detailView() {
  const item = itemById[state.itemId]; if (!item) return homeView();
  if (item.handout) return handoutView(item);
  if (isTextbookLesson(item)) return textbookLessonView(item);
  const pairs = splitPairs(item), favorite = state.favorites.has(item.id);
  const isIdiom = item.category === 'idiom';
  const canRecite = isRecitation(item);
  return '<main class="page-enter detail-page mobile-page">' + topbar() +
    '<div class="breadcrumb"><button data-go="home">首页</button><span>/</span><span>' + esc(scopeName(item.scopeType)) + '</span><span>/</span><span>' + esc(item.categoryName) + '</span></div>' +
    '<article class="reader-article"><header class="reader-header"><div class="reader-title-line"><span class="reader-category">' + esc(item.categoryName) + '</span><button class="icon-btn ' + (favorite ? 'active' : '') + '" data-fav="' + esc(item.id) + '" aria-label="收藏" aria-pressed="' + favorite + '">' + icon('heart', 21) + '</button></div><h1>' + esc(item.title) + '</h1><div class="reader-author">' + esc(item.dynasty) + ' · ' + esc(item.author) + '</div><div class="reader-meta">' + esc(item.gradeLabel) + (canRecite ? '<span class="learning-badge study-badge">课本必背</span>' : '') + (isExamFocus(item) ? '<button class="exam-jump" data-jump-exam>' + icon('star', 15) + ' 看考点</button>' : '') + '</div></header>' +
    '<audio id="reader-audio" preload="none" playsinline src="audio/' + encodeURIComponent(item.id) + '.mp3"></audio>' +
    '<div class="reader-layout"><section class="reader-text"><div class="reader-section-head"><div class="reader-label">' + (isIdiom ? '释义' : '原文') + '</div><button class="inline-audio-button" data-speak="text" id="speak-btn">' + icon('volume', 16) + ' ' + (isIdiom ? '读释义' : '读原文') + '</button></div>' +
    (canRecite ? `<div class="recite-toolbar"><button data-recall aria-expanded="true" aria-controls="reader-original">遮住原文</button>${memorizedButton(item)}</div>` : '') +
    '<div id="reader-original">' + pairs.map(p => '<div class="reader-line"><div class="reader-pinyin">' + esc(p.pinyin) + '</div><div class="reader-text-content">' + esc(p.text) + '</div></div>').join('') + '</div>' + meaningBlock(item) + '</section><div class="reader-companion">' +
    examBlock(item) + '<div class="reader-notes">' +
    glossaryBlock(item) + focusBlock(item) + videoBlock(item) + '</div></div></div></article></main>' + nav();
}
let currentAudio = null;
function playAudio(kind) {
  const meaning = kind === 'meaning';
  const player = document.querySelector(meaning ? '#meaning-audio' : '#reader-audio');
  const button = document.querySelector(meaning ? '#meaning-speak-btn' : '#speak-btn');
  if (!player || !button) return;
  const isIdiom = document.querySelector('.reader-label')?.textContent.includes('释义') || false;
  const label = button.dataset.audioLabel || (meaning ? '读译文' : (isIdiom ? '读释义' : '读原文'));
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
  player.onpause = resetLabel;
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
  for (const block of app.querySelectorAll('.reader-notes, .reader-inline-meaning')) block.hidden = active;
  if (active) currentAudio?.pause();
  if (active) app.querySelector('.exam-answer')?.removeAttribute('open');
  button.textContent = (active ? '显示' : '遮住') + (button.dataset.recallLabel || '原文');
  button.setAttribute('aria-expanded', String(!active));
}
function render() {
  currentAudio?.pause();
  currentAudio = null;
  const view = { detail: detailView, search: searchView, favorites: favoritesView, history: historyView, progress: progressView }[state.view] || homeView;
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
    state.view = ['search', 'favorites', 'history', 'progress'].includes(hash) ? hash : 'home';
  }
  render();
}
document.addEventListener('click', event => {
  if (event.target.closest('.card-play, .video-card') || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

  const el = event.target.closest('[data-go],[data-grade],[data-category],[data-volume],[data-scope],[data-fav],[data-open],[data-clear-search],[data-reset-filters],[data-speak],[data-video-only],[data-exam-only],[data-history-remove],[data-history-clear],[data-history-undo],[data-reset-grade],[data-favorite-remove],[data-favorites-clear],[data-jump-exam],[data-recall],[data-memorized],[data-remove-personal-text],[data-memorized-filter],[data-progress-grade]');
  if (!el) return;
  if ('progressGrade' in el.dataset) {
    state.progressGrade = el.dataset.progressGrade;
    render();
    app.querySelector('[data-progress-grade][aria-pressed="true"]')?.focus({ preventScroll: true });
    return;
  }
  if ('removePersonalText' in el.dataset) return savePersonalText('');
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
    if (reached) { state.memorized.add(id); state.completedAt.set(id, new Date().toISOString()); }
    else { state.memorized.delete(id); state.completedAt.delete(id); }
    save(KEYS.memorized, [...state.memorized]);
    save(KEYS.completedAt, Object.fromEntries(state.completedAt));
    el.setAttribute('aria-pressed', String(reached));
    el.querySelector('span').textContent = reached ? '已背' : '标为已背';
    const slot = app.querySelector('.completion-slot');
    if (slot) slot.innerHTML = completionDate(itemById[id]);
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
  if (el.dataset.category !== undefined) return updateFilter({ category: el.dataset.category,
    ...(el.dataset.category === 'text-recitation' ? { examOnly: false, videoOnly: false } : {}) }, el);
  if (el.dataset.volume !== undefined) return updateFilter({ volume: el.dataset.volume }, el);
  if (el.dataset.scope !== undefined) return updateFilter({ scope: el.dataset.scope }, el);
  if (el.dataset.memorizedFilter !== undefined) return updateFilter({ memorizedFilter: el.dataset.memorizedFilter }, el);
  if (el.dataset.videoOnly !== undefined) return updateFilter({ videoOnly: !state.videoOnly }, el);
  if (el.dataset.examOnly !== undefined) return updateFilter({ examOnly: !state.examOnly }, el);
  if (el.dataset.clearSearch !== undefined) { updateFilter({ keyword: '' }); return app.querySelector('#inline-search')?.focus({ preventScroll: true }); }
  if (el.dataset.resetFilters !== undefined) { Object.assign(state, { category:'all', grade:'all', volume:'all', keyword:'', videoOnly:false, examOnly:false, memorizedFilter:'all' }); savePrefs(); return render(); }
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
    const statuses = app.querySelector('.recitation-filters');
    if (statuses) statuses.innerHTML = memorizedFilters();
  }
});
document.addEventListener('submit', event => {
  if (event.target.id === 'personal-text-form') {
    event.preventDefault();
    const text = new FormData(event.target).get('text').trim();
    if (!text) return toast('请先输入原文', 'book');
    return savePersonalText(text);
  }
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

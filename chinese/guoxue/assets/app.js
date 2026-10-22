import { categories, grades, items, searchItems } from './data.js';
import { icon } from './icons.js';
import { illustration } from './art.js';
import { mediaFinders, makeVideoLinks } from './media.js';

const app = document.querySelector('#app');
const KEYS = { favorites: 'guoxue-favorites-v1', read: 'guoxue-read-v1', grade: 'guoxue-grade-v1' };
const load = (key, fallback) => { try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} };
const state = {
  view: 'home', grade: load(KEYS.grade, 'all'), category: 'all', keyword: '',
  favorites: new Set(load(KEYS.favorites, [])), read: new Set(load(KEYS.read, [])),
  itemId: null, quiz: false, quizIndex: 0, quizChoice: null, toastTimer: null,
};
const categoryMap = Object.fromEntries(categories.map(c => [c.id, c]));
const esc = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const categoryStyle = (c) => `--cat-color:${c.color};--cat-soft:${c.soft}`;
const gradeCount = (grade) => items.filter(i => grade === 'all' || i.grade === Number(grade)).length;

function toast(message, iconName = 'check') {
  const el = document.querySelector('#toast');
  if (!el) return;
  clearTimeout(state.toastTimer);
  el.innerHTML = `${icon(iconName, 15)}<span>${esc(message)}</span>`;
  el.classList.add('show');
  state.toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

function persistFavorites() { save(KEYS.favorites, [...state.favorites]); }
function toggleFavorite(id, event) {
  event?.stopPropagation(); event?.preventDefault();
  if (state.favorites.has(id)) { state.favorites.delete(id); toast('已从收藏中移除', 'heart'); }
  else { state.favorites.add(id); toast('已加入收藏', 'heart'); }
  persistFavorites();
  render();
}

function markRead(id) {
  if (!state.read.has(id)) { state.read.add(id); save(KEYS.read, [...state.read]); }
}

function go(view, options = {}) {
  if (options.itemId) state.itemId = options.itemId;
  if (options.grade !== undefined) state.grade = options.grade;
  if (options.category !== undefined) state.category = options.category;
  if (options.keyword !== undefined) state.keyword = options.keyword;
  state.view = view;
  if (view !== 'detail') { state.quiz = false; state.quizChoice = null; state.quizIndex = 0; }
  save(KEYS.grade, state.grade);
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function topbar() {
  return `<header class="topbar">
    <a class="brand" href="#/" aria-label="回到首页">
      <span class="brand-seal">学</span>
      <span><span class="brand-name">国学启蒙</span><span class="brand-sub">CHINESE CLASSICS</span></span>
    </a>
    <div class="top-actions">
      <button class="search-btn" data-go="search" aria-label="搜索学习内容">${icon('search', 17)}<span class="search-label">搜索篇目与知识点</span><kbd>/</kbd></button>
      <button class="icon-btn ${state.favorites.size ? 'active' : ''}" data-go="favorites" aria-label="我的收藏">${icon('heart', 19)}</button>
    </div>
  </header>`;
}

function nav() {
  const is = (v) => state.view === v ? 'active' : '';
  return `<nav class="bottom-nav" aria-label="主导航">
    <button class="nav-item ${is('home')}" data-go="home">${icon('home', 19)}<span>首页</span></button>
    <button class="nav-item ${is('search')}" data-go="search">${icon('search', 19)}<span>查询</span></button>
    <button class="nav-fab" data-go="random" aria-label="随机读一篇">${icon('sparkle', 21)}</button>
    <button class="nav-item ${is('favorites')}" data-go="favorites">${icon('heart', 19)}<span>收藏</span></button>
    <button class="nav-item ${is('detail')}" data-go="random" aria-label="今日一读">${icon('book', 19)}<span>阅读</span></button>
  </nav>`;
}
function card(item) {
  const c = categoryMap[item.category];
  const favorite = state.favorites.has(item.id);
  return `<article class="content-card" style="${categoryStyle(c)}" data-open="${esc(item.id)}" tabindex="0" role="button" aria-label="阅读${esc(item.title)}">
    <div class="content-thumb">${illustration(item.image, { small: true })}
      <span class="thumb-label">${esc(item.categoryName)}</span>
      <span class="thumb-grade">${item.grade}年</span>
      <button class="favorite-btn ${favorite ? 'active' : ''}" data-fav="${esc(item.id)}" aria-label="${favorite ? '取消收藏' : '收藏'}${esc(item.title)}">${icon('heart', 15)}</button>
    </div>
    <div class="content-body">
      <h3 class="content-title">${esc(item.title)}</h3>
      <div class="content-author">${esc(item.dynasty)} · ${esc(item.author)}</div>
      <p class="content-excerpt">${esc(item.excerpt)}</p>
      <div class="content-bottom"><div class="content-tags">${(item.tags || []).slice(0, 1).map(tag => `<span class="content-tag">${esc(tag)}</span>`).join('')}</div><span class="content-arrow">${icon('arrow', 15)}</span></div>
    </div>
  </article>`;
}

function filteredItems() {
  return searchItems(items, { grade: state.grade, category: state.category, keyword: state.keyword, favoriteIds: [...state.favorites] });
}

function gradeStrip() {
  return `<div class="grade-strip" aria-label="按年级筛选">
    <button class="grade-card ${state.grade === 'all' ? 'selected' : ''}" data-grade="all" data-num="全"><span class="g-label">全年级</span><span class="g-title">经典共读</span><span class="g-sub">七类内容 · 自由探索</span><span class="g-arrow">${icon('arrow', 15)}</span></button>
    ${grades.map(g => `<button class="grade-card ${state.grade === String(g.grade) ? 'selected' : ''}" data-grade="${g.grade}" data-num="${g.grade}"><span class="g-label">${g.label}</span><span class="g-title-alone">${esc(g.title)}</span><span class="g-sub">${esc(g.subtitle)}</span><span class="g-arrow">${icon('arrow', 15)}</span></button>`).join('')}
  </div>`;
}

function categoryGrid() {
  const current = filteredItems();
  return `<div class="category-grid">${categories.map(c => {
    const count = current.filter(i => i.category === c.id).length;
    return `<button class="category-card" style="${categoryStyle(c)}" data-category="${c.id}"><span class="cat-icon">${icon(c.icon, 18)}</span><span class="cat-name">${c.name}</span><span class="cat-desc">${c.description}</span><span class="cat-footer"><span>${state.grade === 'all' ? '全年级' : state.grade + '年级'}</span><b>${count}</b></span></button>`;
  }).join('')}</div>`;
}

function featured(item) {
  if (!item) return '';
  const c = categoryMap[item.category];
  return `<article class="featured-card" data-open="${esc(item.id)}"><div class="featured-art">${illustration(item.image)}</div><div class="featured-content"><span class="featured-chip">今日一读 · ${esc(c.name)}</span><h3 class="featured-title">${esc(item.title)}</h3><div class="featured-meta">${esc(item.dynasty)} · ${esc(item.author)} · ${item.grade}年级</div><p class="featured-excerpt">${esc(item.excerpt)}</p><button class="featured-cta" data-open="${esc(item.id)}">开始诵读 ${icon('arrow', 15)}</button></div></article>`;
}

function quotePanel() {
  const quote = items.find(i => i.id === 'lunyu-g1-xueer') || items[0];
  return `<button class="quote-panel" data-open="${esc(quote.id)}"><span class="quote-source">论语 · 学而篇</span><blockquote>学而时习之，<br>不亦说乎？</blockquote><span class="quote-explain">学习并按时温习、实践，内心自然会生出喜悦。</span><span class="quote-arrow">${icon('arrow', 17)}</span></button>`;
}

function progressPanel() {
  const readCount = items.filter(i => state.read.has(i.id)).length;
  const pct = Math.round(readCount / items.length * 100);
  return `<button class="daily-progress" data-go="favorites"><span class="progress-ring" style="--percent:${pct}%"><span>${pct}%</span></span><span><h4>我的诵读足迹</h4><p>已读 ${readCount} / ${items.length} 篇 · 收藏 ${state.favorites.size} 篇</p></span></button>`;
}
function homeView() {
  const current = filteredItems();
  const feature = items.find(i => i.id === 'poetry-g1-yonge') || items[0];
  return `<main class="page-enter">
    ${topbar()}
    <section class="hero">
      <div class="hero-art">${illustration('poetry-mountain-river')}</div>
      <div class="hero-copy">
        <span class="eyebrow">小学国学 · 分级阅读</span>
        <h1>让经典，<br>成为孩子的<span class="accent">日常</span>。</h1>
        <p class="hero-desc">从一首诗、一个成语到一段圣贤之言。按年级循序而读，在声音、图画与故事里，读懂中国人的精神底色。</p>
        <div class="hero-meta"><span><b>${items.length}</b>篇精选</span><span><b>6</b>个年级</span><span><b>7</b>类国学</span><span><b>${categories.length * 2}</b>个视频入口</span></div>
        <button class="hero-start" data-scroll="grade-section">从这里开始 ${icon('arrow', 17)}</button>
      </div>
      <span class="hero-stamp">童蒙<br>养正</span>
    </section>
    <section class="section" id="grade-section">
      <div class="section-head"><div class="section-title-wrap"><span class="section-index">01</span><h2 class="section-title">按年级选读</h2></div><span class="section-note">从启蒙识字到综合赏析，循序渐进</span></div>
      ${gradeStrip()}
    </section>
    <section class="section">
      <div class="section-head"><div class="section-title-wrap"><span class="section-index">02</span><h2 class="section-title">七类经典</h2></div><span class="section-note">古诗、成语、寓言与国学蒙学</span></div>
      ${categoryGrid()}
    </section>
    <section class="section">
      <div class="section-head"><div class="section-title-wrap"><span class="section-index">03</span><h2 class="section-title">今日书房</h2></div><button class="text-link" data-go="random">换一篇 ${icon('arrow', 14)}</button></div>
      <div class="daily-layout">${featured(feature)}<div class="daily-side">${quotePanel()}${progressPanel()}</div></div>
    </section>
    <section class="section">
      <div class="browse-panel">
        <div class="browse-toolbar">
          <div class="browse-topline"><div class="browse-heading"><h2>${state.grade === 'all' ? '经典文库' : state.grade + '年级选读'}</h2><span class="result-count"><b>${current.length}</b> 篇内容</span></div>
            <div class="search-area"><div class="search-input-wrap">${icon('search', 17)}<input class="search-input" id="inline-search" value="${esc(state.keyword)}" placeholder="搜篇目、作者、关键词" aria-label="搜索当前文库"><button class="clear-search" data-clear-search aria-label="清空搜索">${icon('close', 14)}</button></div></div>
          </div>
          <div class="filter-bar">${[{id:'all',name:'全部'},...categories].map(c => `<button class="filter-chip ${state.category === c.id ? 'active' : ''}" data-category="${c.id}">${c.name}<span>${c.id === 'all' ? current.length : current.filter(i => i.category === c.id).length}</span></button>`).join('')}</div>
        </div>
        <div class="browse-divider"></div>
        <div class="browse-count-row"><span class="selected-query">${state.grade === 'all' ? '全部年级' : state.grade + '年级'} · ${state.category === 'all' ? '全部篇目' : categoryMap[state.category].name}${state.keyword ? ` · “${esc(state.keyword)}”` : ''}</span><span class="view-actions"><button class="small-icon-btn active" aria-label="卡片视图">${icon('book', 16)}</button><button class="small-icon-btn" data-reset-filters aria-label="重置筛选">${icon('filter', 16)}</button></span></div>
        <div class="content-grid" id="content-grid">${current.length ? current.map(card).join('') : `<div class="empty-state"><span class="empty-icon">${icon('search', 22)}</span><h3>没有找到相关篇目</h3><p>试试换一个关键词，或者放宽年级与分类条件。</p><button class="btn btn-secondary" data-reset-filters>清除筛选</button></div>`}</div>
      </div>
    </section>
    <footer class="footer-note"><span>国学启蒙 · 分级阅读与检索</span><span>READ · LISTEN · UNDERSTAND</span></footer>
  </main>${nav()}`;
}
function splitLines(text) { return String(text || '').split(/\n+/).filter(Boolean); }
function splitPairs(item) {
  const lines = splitLines(item.excerpt);
  const pys = splitLines(item.pinyin);
  return lines.map((line, i) => ({ text: line, pinyin: pys[i] || '' }));
}

function relatedFor(item) {
  return items.filter(i => i.id !== item.id).sort((a, b) => {
    const score = (x) => (x.category === item.category ? 2 : 0) + (x.grade === item.grade ? 1 : 0);
    return score(b) - score(a);
  }).slice(0, 4);
}

function detailView() {
  const item = items.find(i => i.id === state.itemId);
  if (!item) return homeView();
  const c = categoryMap[item.category];
  const favorite = state.favorites.has(item.id);
  const pairs = splitPairs(item);
  const isRead = state.read.has(item.id);
  const videoLinks = makeVideoLinks(item);
  const finder = mediaFinders[item.category];
  return `<main class="page-enter">
    ${topbar()}
    <div class="detail-back"><button class="back-btn" data-go="home">${icon('back', 17)} 返回文库</button><div class="detail-actions"><button class="icon-btn ${favorite ? 'active' : ''}" data-fav="${esc(item.id)}" aria-label="${favorite ? '取消收藏' : '收藏'}">${icon('heart', 19)}</button><button class="icon-btn" data-go="search" aria-label="搜索">${icon('search', 18)}</button></div></div>
    <div class="detail-grid">
      <article class="detail-main">
        <section class="detail-hero" style="${categoryStyle(c)}">
          <div class="detail-art">${illustration(item.image)}<span class="detail-art-caption">${esc(item.categoryName)} · ${item.grade}年级 · 分级读本</span></div>
          <div class="detail-heading"><div class="detail-meta"><span class="badge">${esc(item.categoryName)}</span><span class="badge outline">${item.grade}年级</span>${(item.tags || []).slice(0, 2).map(t => `<span class="badge outline">${esc(t)}</span>`).join('')}</div><h1 class="detail-title">${esc(item.title)}</h1><div class="detail-author">${esc(item.dynasty)} · ${esc(item.author)}</div><p class="detail-lead">${esc(item.summary)}</p>
          <div class="read-actions"><button class="btn btn-listen" data-speak="${esc(item.id)}" id="speak-btn">${icon('volume', 16)} 朗读全文</button><button class="btn btn-secondary" data-quiz="${esc(item.id)}">${icon('quiz', 16)} 随堂一问</button><button class="btn btn-secondary" data-copy="${esc(item.id)}">${icon('book', 16)} 复制原文</button></div></div>
        </section>
        <section class="text-panel"><div class="panel-heading"><h2>原文与拼音</h2><span class="panel-hint">点击朗读，跟读时注意停顿</span></div><div class="original-lines">${pairs.map(pair => `<div class="original-line"><div class="line-pinyin">${esc(pair.pinyin)}</div><div class="line-text">${esc(pair.text)}</div></div>`).join('')}</div><div class="annotation"><h3>内容提要</h3><p>${esc(item.summary)}</p></div></section>
        <section class="meaning-panel"><h3>${icon('book', 16)} 白话译文</h3><p>${esc(item.meaning)}</p></section>
        <section class="appreciation"><h3>赏析与启发</h3><p>${esc(item.appreciation)}</p></section>
        <section class="keywords"><h3>关键词</h3><div class="keyword-row">${(item.keywords || []).map(k => `<button class="keyword" data-go="search" data-search="${esc(k)}">${esc(k)}</button>`).join('')}</div><div class="quote-action">${icon('light', 15)} 读完想一想：这篇内容最适合用在哪个生活场景？</div></section>
      </article>
      <aside class="detail-aside">
        <section class="aside-card media-card"><h3>视频课堂</h3><p>${esc(finder?.label || '相关视频讲解')}。点击后在新标签页打开平台搜索结果，可自行选择版本。</p><div class="media-list">${videoLinks.map(link => `<a class="media-link" href="${esc(link.url)}" target="_blank" rel="noopener noreferrer"><span class="media-mark">${link.name === 'B站' ? 'B' : '抖'}</span><span class="media-text"><span class="media-name">${esc(link.label)}</span><span class="media-desc">${esc(finder?.note || '拓展学习')}</span></span>${icon('external', 15)}</a>`).join('')}</div><p class="disclaimer">视频链接为动态检索，内容版权归原作者所有；打开结果后在平台内挑选适合孩子年龄的版本。</p></section>
        <section class="aside-card"><h3>同年级推荐</h3><div class="related-list">${relatedFor(item).map(r => `<button class="related-item" data-open="${esc(r.id)}"><span class="related-thumb">${illustration(r.image, { small: true })}</span><span class="related-text"><span class="related-title">${esc(r.title)}</span><span class="related-meta">${esc(r.categoryName)} · ${r.grade}年级</span></span></button>`).join('')}</div></section>
        <div class="aside-tip"><strong>读法建议</strong>${item.grade <= 2 ? '先听一遍，再跟读。遇到生字看拼音，不必一次背会。' : item.grade <= 4 ? '先读原文，再看译文。试着用自己的话复述故事或诗中画面。' : '关注作者写了什么、为什么这样写，最后联系生活写一句感受。'}</div>
      </aside>
    </div>
    <footer class="footer-note"><span>${esc(item.categoryName)} · ${esc(item.title)}</span><span>${isRead ? '已读' : '未读完'} · 国学启蒙</span></footer>
  </main>${nav()}`;
}
function escapeRegex(value) { return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
function highlight(text, query) {
  const safe = esc(text);
  if (!query) return safe;
  return safe.replace(new RegExp('(' + escapeRegex(esc(query)) + ')', 'gi'), '<mark>$1</mark>');
}

function searchView() {
  const result = searchItems(items, { grade: state.grade, category: state.category, keyword: state.keyword, favoriteIds: [...state.favorites] });
  const suggestions = ['月亮', '春天', '学习', '孝亲', '坚持', '李白', '论语', '成语'];
  return '<main class="page-enter">' + topbar() + '<div class="search-page">' +
    '<span class="eyebrow">检索 · 发现 · 连接</span><h1>查一篇，读懂它。</h1><p class="search-lead">按年级、分类或关键词查找内容，也可以直接搜索作者、意象和生活主题。</p>' +
    '<form class="big-search" id="search-form">' + icon('search', 21) + '<input id="search-main" value="' + esc(state.keyword) + '" placeholder="试试：春天、李白、学习、月亮……" autocomplete="off" aria-label="搜索国学内容"><button class="search-submit" type="submit">检索</button></form>' +
    '<div class="search-suggestions"><span>试试</span>' + suggestions.map(s => '<button class="suggestion-chip" data-search="' + esc(s) + '">' + esc(s) + '</button>').join('') + '</div>' +
    '<section class="search-filter-panel"><div class="search-filter-group"><span class="filter-label">年级</span><div class="filter-options">' + [{id:'all',name:'全年级'},...grades.map(g => ({id:String(g.grade),name:g.label}))].map(g => '<button class="filter-option ' + (state.grade === g.id ? 'active' : '') + '" data-grade="' + g.id + '">' + g.name + '</button>').join('') + '</div></div>' +
    '<div class="search-filter-group"><span class="filter-label">分类</span><div class="filter-options">' + [{id:'all',name:'全部'},...categories].map(c => '<button class="filter-option ' + (state.category === c.id ? 'active' : '') + '" data-category="' + c.id + '">' + c.name + '</button>').join('') + '</div></div></section>' +
    '<div class="search-results-heading"><h2>' + (state.keyword ? '搜索结果' : '全部内容') + '</h2><span>' + result.length + ' 篇 · ' + (state.grade === 'all' ? '全年级' : state.grade + '年级') + '</span></div>' +
    '<div class="search-results-list">' + (result.length ? result.map(item => { const c = categoryMap[item.category]; return '<article class="search-result-card" style="' + categoryStyle(c) + '" data-open="' + esc(item.id) + '" tabindex="0" role="button"><span class="search-result-thumb">' + illustration(item.image, { small: true }) + '</span><span class="search-result-text"><div class="search-result-title">' + highlight(item.title, state.keyword) + '</div><div class="search-result-meta">' + item.grade + '年级 · ' + esc(item.categoryName) + ' · ' + esc(item.dynasty) + ' · ' + highlight(item.author, state.keyword) + '</div><p class="search-result-summary">' + highlight(item.summary, state.keyword) + '</p></span></article>'; }).join('') : '<div class="empty-state"><span class="empty-icon">' + icon('search', 23) + '</span><h3>没有找到相关内容</h3><p>换一个更短的关键词，或清除年级和分类筛选后再试。</p><button class="btn btn-secondary" data-reset-filters>重置筛选</button></div>') + '</div>' +
    '<footer class="footer-note"><span>支持标题、作者、朝代、主题与关键词检索</span><span>SEARCH</span></footer></div></main>' + nav();
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
function resetFilters() {
  state.grade = 'all';
  state.category = 'all';
  state.keyword = '';
  save(KEYS.grade, 'all');
  render();
}

function favoritesView() {
  const allFav = items.filter(i => state.favorites.has(i.id));
  const readCount = items.filter(i => state.read.has(i.id)).length;
  return '<main class="page-enter">' + topbar() + '<div class="favorites-page"><div class="page-header"><div><span class="eyebrow">我的书房 · 学习足迹</span><h1>收藏与足迹</h1><p>把想再读一遍的篇目留在这里。</p></div></div>' +
    '<div class="favorite-stats"><div class="favorite-stat"><b>' + allFav.length + '</b><span>篇收藏</span></div><div class="favorite-stat"><b>' + readCount + '</b><span>篇已读</span></div></div>' +
    (allFav.length ? '<div class="favorite-list">' + allFav.map(item => '<article class="favorite-card" data-open="' + esc(item.id) + '" tabindex="0" role="button"><span class="favorite-thumb">' + illustration(item.image, { small: true }) + '</span><span class="favorite-info"><h3>' + esc(item.title) + '</h3><span class="favorite-meta">' + item.grade + '年级 · ' + esc(item.categoryName) + '</span><p>' + esc(item.summary) + '</p></span></article>').join('') + '</div>' : '<div class="favorite-empty"><h2>书房里还没有收藏</h2><p>读到喜欢的篇目，点一下爱心，就能在这里找到。</p><button class="btn btn-primary" data-go="home">去文库看看</button></div>') +
    '<footer class="footer-note"><span>收藏与已读记录保存在本机浏览器</span><span>MY LIBRARY</span></footer></div></main>' + nav();
}

function speakText(text) {
  if (!('speechSynthesis' in window)) {
    toast('当前浏览器不支持语音朗读', 'volume');
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text.replace(/\n/g, '，'));
  u.lang = 'zh-CN';
  u.rate = .72;
  const btn = document.querySelector('#speak-btn');
  btn?.classList.add('speaking');
  u.onend = () => btn?.classList.remove('speaking');
  u.onerror = () => btn?.classList.remove('speaking');
  speechSynthesis.speak(u);
  toast('正在朗读，请跟读', 'volume');
}
function fallbackCopy(text, done) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.position = 'fixed';
  ta.style.opacity = '0';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); done(); } catch { toast('复制失败，请手动选择', 'book'); }
  ta.remove();
}
function copyOriginal(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  const text = item.title + '\n' + item.excerpt + '\n\n' + item.meaning;
  const done = () => toast('原文与译文已复制', 'book');
  if (navigator.clipboard?.writeText) navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
  else fallbackCopy(text, done);
}

function quizData(item) {
  const c = categoryMap[item.category];
  return [
    { q: '这篇内容属于哪一类国学经典？', options: categories.map(x => x.name), answer: c.name, explain: '这是' + c.name + '中的内容。' },
    { q: '这篇内容适合哪个年级阅读？', options: grades.map(g => g.label), answer: item.grade + '年级', explain: '本应用中将它安排在' + item.grade + '年级。' },
    { q: '这篇内容的作者或出处是？', options: [item.author, '陶渊明', '司马迁', '曹雪芹'], answer: item.author, explain: '本文出自' + item.dynasty + '的' + item.author + '。' },
  ];
}
function openQuiz() { state.quiz = true; state.quizIndex = 0; state.quizChoice = null; render(); }
function closeQuiz() { state.quiz = false; state.quizChoice = null; render(); }
function chooseQuiz(index) { if (state.quizChoice !== null) return; state.quizChoice = index; render(); }
function nextQuiz() {
  const item = items.find(i => i.id === state.itemId);
  if (!item) return;
  const qs = quizData(item);
  if (state.quizIndex < qs.length - 1) { state.quizIndex++; state.quizChoice = null; render(); }
  else { state.quiz = false; toast('完成随堂问答，继续保持', 'star'); render(); }
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
    return '<button class="quiz-option ' + cls + '" data-quiz-choice="' + i + '"><span class="option-mark">' + ('ABCD'[i] || '') + '</span>' + esc(opt) + '</button>';
  }).join('');
  return '<div class="reader-modal-backdrop" data-close-quiz><div class="reader-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-title" data-stop-close><div class="modal-head"><h2 id="quiz-title">随堂一问</h2><button class="icon-btn" data-close-quiz aria-label="关闭">' + icon('close', 19) + '</button></div><div class="modal-content"><div class="quiz-prompt">' + esc(q.q) + '</div><div class="quiz-options">' + options + '</div>' + (state.quizChoice !== null ? '<div class="quiz-feedback">' + (q.options[state.quizChoice] === q.answer ? '回答正确。' : '再想一想。') + ' ' + esc(q.explain) + '</div>' : '') + '<div class="quiz-footer"><span class="quiz-progress">第 ' + (state.quizIndex + 1) + ' / ' + qs.length + ' 题</span><button class="btn btn-primary" data-next-quiz>' + (state.quizIndex === qs.length - 1 ? '完成练习' : '下一题') + '</button></div></div></div></div>';
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
    if (items.some(i => i.id === id)) { state.itemId = id; markRead(id); state.view = 'detail'; }
  } else if (hash === 'search') state.view = 'search';
  else if (hash === 'favorites') state.view = 'favorites';
  else state.view = 'home';
  render();
}
document.addEventListener('click', (event) => {
  if (event.target.closest('[data-stop-close]') && !event.target.closest('[data-close-quiz]')) return;
  const el = event.target.closest('[data-go],[data-grade],[data-category],[data-fav],[data-open],[data-clear-search],[data-reset-filters],[data-search],[data-speak],[data-copy],[data-quiz],[data-close-quiz],[data-quiz-choice],[data-next-quiz],[data-scroll]');
  if (!el) return;
  if (el.dataset.fav) { toggleFavorite(el.dataset.fav, event); return; }
  if (el.dataset.open) { openItem(el.dataset.open); return; }
  if (el.dataset.grade !== undefined) { state.grade = el.dataset.grade; state.category = 'all'; save(KEYS.grade, state.grade); render(); return; }
  if (el.dataset.category !== undefined) { state.category = el.dataset.category; render(); return; }
  if (el.dataset.clearSearch !== undefined) { state.keyword = ''; render(); return; }
  if (el.dataset.resetFilters !== undefined) { resetFilters(); return; }
  if (el.dataset.search !== undefined) { state.keyword = el.dataset.search; state.view = 'search'; location.hash = 'search'; render(); return; }
  if (el.dataset.speak) { speakText(items.find(i => i.id === el.dataset.speak)?.excerpt || ''); return; }
  if (el.dataset.copy) { copyOriginal(el.dataset.copy); return; }
  if (el.dataset.quiz !== undefined) { openQuiz(); return; }
  if (el.dataset.closeQuiz !== undefined) { closeQuiz(); return; }
  if (el.dataset.quizChoice !== undefined) { chooseQuiz(Number(el.dataset.quizChoice)); return; }
  if (el.dataset.nextQuiz !== undefined) { nextQuiz(); return; }
  if (el.dataset.scroll) { document.getElementById(el.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }); return; }
  if (el.dataset.go) {
    const v = el.dataset.go;
    if (v === 'random') { randomItem(); return; }
    state.keyword = '';
    state.grade = 'all';
    state.category = 'all';
    state.view = v;
    location.hash = v === 'home' ? '' : v;
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
document.addEventListener('input', (event) => {
  if (event.target.id === 'inline-search') {
    state.keyword = event.target.value;
    const current = filteredItems();
    const grid = document.querySelector('#content-grid');
    if (grid) grid.innerHTML = current.length ? current.map(card).join('') : '<div class="empty-state"><h3>没有找到相关篇目</h3><p>试试其他关键词。</p></div>';
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && state.quiz) closeQuiz();
  if (event.key === '/' && document.activeElement?.tagName !== 'INPUT') { event.preventDefault(); state.view = 'search'; location.hash = 'search'; render(); setTimeout(() => document.querySelector('#search-main')?.focus(), 30); }
  if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-open]')) { event.preventDefault(); openItem(event.target.dataset.open); }
});
document.addEventListener('submit', (event) => {
  if (event.target.id === 'search-form') { event.preventDefault(); state.keyword = document.querySelector('#search-main')?.value || ''; render(); }
});
window.addEventListener('hashchange', route);
route();


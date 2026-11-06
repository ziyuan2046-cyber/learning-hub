"use strict";

const COURSES = Array.isArray(window.XIAOYUAN_COURSES) ? window.XIAOYUAN_COURSES : [];
const READINGS = Array.isArray(window.XIAOYUAN_READINGS) ? window.XIAOYUAN_READINGS : [];
const ALL_STEPS = [
  { id: "letters", label: "字母声音", render: renderLettersStep },
  { id: "words", label: "核心单词", render: renderCoreWordsStep },
  { id: "phonics", label: "自然拼读", render: renderPhonicsStep },
  { id: "sentences", label: "重点句子", render: renderSentencesStep },
  { id: "chants", label: "歌谣律动", render: renderChantsStep },
  { id: "story", label: "故事时间", render: renderStoryStep },
  { id: "sources", label: "课件原页", render: renderSourcesStep }
];
const AUDIO_CDN_ROOT = "https://cdn.jsdelivr.net/gh/ziyuan2046-cyber/learning-hub@main/xiaoyuan/";
const AUDIO_PREFETCH_CONCURRENCY = 2;

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const escapeHtml = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
}[char]));
const stripHtml = (value) => String(value == null ? "" : value).replace(/<[^>]*>/g, "");
const formatSentence = (value) => escapeHtml(value)
  .replace(/&lt;u&gt;/g, "<u>")
  .replace(/&lt;\/u&gt;/g, "</u>");
const slug = (value) => String(value || "item").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "item";
const pad = (value) => String(value).padStart(2, "0");

let COURSE = READINGS[0] || COURSES.find((item) => item.available) || COURSES[0] || null;
let catalogTrack = "reading";
let STEPS = ALL_STEPS;
let stepIndex = 0;
let sourceIndex = 0;
let sourcePageIndex = 0;
const videoSelections = new Map();
let storyIndex = 0;
const focusIndexes = { letters: 0, words: 0, phonics: 0, sentences: 0, chants: 0 };
let quizRound = 0;
let quizAnswered = false;
let currentView = "catalog";
let audio = null;
let currentObjectUrl = "";
let playRequestId = 0;
let audioPrefetchQueue = [];
let audioPrefetchActive = 0;
let toastTimer = 0;

const audioBlobCache = new Map();
const audioBlobRequests = new Map();
const playerState = {
  queue: [],
  index: -1,
  title: "",
  eyebrow: "",
  trigger: null,
  currentKey: "",
  sourceUrl: "",
  solo: false
};

function getProgressKey() {
  return COURSE?.id ? `xiaoyuan:progress:${COURSE.id}` : "xiaoyuan:progress:no-course";
}

function showToast(message) {
  const element = $("#toast");
  if (!element) { return; }
  element.textContent = message;
  element.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => element.classList.remove("is-visible"), 2200);
}

function emptyMarkup(message) {
  return `<div class="empty-state"><strong>内容正在整理</strong><p>${escapeHtml(message)}</p></div>`;
}

function imageMarkup(path, alt, className = "") {
  if (!path) { return ""; }
  return `<img${className ? ` class="${escapeHtml(className)}"` : ""} src="${escapeHtml(path)}" alt="${escapeHtml(alt || "")}" loading="lazy" decoding="async">`;
}

function renderCatalog() {
  const openCount = COURSES.filter((item) => item.available).length;
  $("#catalogOpenCount").textContent = openCount;
  $("#catalogOpenBar").style.width = `${COURSES.length ? (openCount / COURSES.length) * 100 : 0}%`;
  $("#courseGrid").innerHTML = COURSES.map((item, index) => {
    const available = Boolean(item.available);
    return `<button class="course-card ${available ? "is-open" : "is-locked"}" type="button" ${available ? `data-course-id="${escapeHtml(item.id)}"` : "disabled"} aria-label="${escapeHtml(available ? "进入自然拼读课 " + item.title : "第 " + (index + 1) + " 课待补充")}">
      <span class="course-card-top"><span class="course-card-index">LESSON ${pad(item.lesson || index + 1)}</span><span class="course-card-status">${available ? escapeHtml(item.subtitle) : "待补充"}</span></span>
      <span class="course-card-body"><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(available ? item.titleCn : "后续课件和音频的位置已预留")}</span></span>
      <span class="course-card-cta">${available ? "字母 · 拼读 · 词句 · 故事" : "等待补充"}</span></button>`;
  }).join("");
  const confirmed = READINGS.filter((book) => book.orderConfirmed);
  const pending = READINGS.filter((book) => !book.orderConfirmed);
  const card = (book) => `<button class="reading-row" type="button" data-course-id="${escapeHtml(book.id)}" aria-label="阅读 ${escapeHtml(book.title)}，${escapeHtml(book.titleCn)}">
    <span class="reading-number">${book.readingOrder ? pad(book.readingOrder) : "＋"}</span>
    <span class="reading-main"><strong>${escapeHtml(book.title)}</strong><span>${escapeHtml(book.titleCn)}</span><small>${book.storySentences.length} 个句子 · ${book.coreWords.length} 个关键词${book.orderConfirmed ? "" : " · 课次待核对"}</small></span>
    <span class="reading-enter" aria-hidden="true">→</span></button>`;
  $("#readingGrid").innerHTML = confirmed.map(card).join("");
  $("#pendingReadingGrid").innerHTML = pending.map(card).join("");
  updateCatalogTrack();
}

function updateCatalogTrack() {
  const reading = catalogTrack === "reading";
  $("#readingPanel").hidden = !reading;
  $("#phonicsPanel").hidden = reading;
  $$("[data-catalog-track]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.catalogTrack === catalogTrack)));
  const count = $("#headerCourseCount");
  if (count) { count.textContent = reading ? READINGS.length + " 本" : COURSES.filter((c) => c.available).length + " / " + COURSES.length; }
}

function renderLesson() {
  if (!COURSE) { return; }
  const lessonNo = pad(COURSE.lesson || 1);
  $("#lessonEyebrow").textContent = COURSE.isReading ? `绘本精读 · ${COURSE.readingOrder ? `第 ${pad(COURSE.readingOrder)} 课` : "已有资料 / 课次待核对"}` : `自然拼读 · LESSON ${lessonNo} · ${COURSE.subtitle || ""}`;
  $("#lessonTitle").textContent = COURSE.title || `Lesson ${lessonNo}`;
  $("#lessonTitleCn").textContent = COURSE.titleCn || "课程内容";
  $("#lessonDescription").textContent = COURSE.description || "本课内容正在整理，后续会补充完整。";

  const meta = [
    COURSE.subtitle ? `字母与拼读 · ${COURSE.subtitle}` : "",
    COURSE.level || "",
    `${STEPS.length} 个学习步骤`
  ].filter(Boolean);
  $("#lessonMeta").innerHTML = meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("");

  const cover = $("#lessonCover");
  if (COURSE.coverImage) {
    $("#lessonCoverImage").removeAttribute("src");
    $("#lessonCoverImage").alt = `${COURSE.title || "课程"} 课程总览`;
    $("#lessonCoverCaption").textContent = `Lesson ${lessonNo} · ${COURSE.titleCn || "课程总览"}`;
    cover.hidden = false;
  } else {
    cover.hidden = true;
    $("#lessonCoverImage").removeAttribute("src");
  }
  document.title = `${COURSE.title || `Lesson ${lessonNo}`} · 森林英语`;
  $("#currentLessonLink").textContent = COURSE.title || `Lesson ${lessonNo}`;
  renderVideoSection();
}

function renderStep(options = {}) {
  if (!COURSE) { return; }
  const step = STEPS[stepIndex];
  $("#stepNumber").textContent = pad(stepIndex + 1);
  $("#stepTitle").textContent = step.label;
  $("#stepCurrent").textContent = stepIndex + 1;
  $("#stepTotal").textContent = STEPS.length;
  $("#stepTabs").innerHTML = STEPS.map((item, index) => `
    <button class="step-tab ${index === stepIndex ? "is-active" : ""}" type="button"
      data-step-index="${index}" aria-current="${index === stepIndex ? "step" : "false"}">
      <span class="tab-no">${pad(index + 1)}</span>${escapeHtml(item.label)}
    </button>`).join("");
  $("#stepContent").innerHTML = step.render();
  $("#stepPrev").disabled = stepIndex === 0;
  $("#stepNext").disabled = false;
  $("#stepNext").innerHTML = stepIndex === STEPS.length - 1
    ? `返回目录 <span aria-hidden="true">↗</span>`
    : `下一步 <span aria-hidden="true">→</span>`;

  if (step.id === "story") {
    renderQuizRound();
    updateProgress();
  }
  if (options.scroll) {
    $(".study-heading")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (options.focus) {
    $("#stepContent")?.focus({ preventScroll: true });
  }
}

function stepIntro(title, description, count, unit) {
  return `
    <header class="step-intro">
      <div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div>
      <span class="stat-badge"><strong>${count}</strong><span>${escapeHtml(unit)}</span></span>
    </header>`;
}

function focusPageLabel(index, total) {
  return `${pad(index + 1)} / ${pad(total)}`;
}

function clampFocus(stepId, total) {
  const safeTotal = Math.max(0, total);
  const current = Number(focusIndexes[stepId] || 0);
  const next = Math.max(0, Math.min(current, Math.max(0, safeTotal - 1)));
  focusIndexes[stepId] = next;
  return next;
}

function focusPager(stepId, index, total, unit, detail = "") {
  return `
    <nav class="focus-pager" aria-label="${escapeHtml(unit)}翻页">
      <button type="button" data-focus-step="${escapeHtml(stepId)}" data-focus-direction="-1" ${index <= 0 ? "disabled" : ""}>← 上一项</button>
      <span><b>${index + 1}</b> / ${total}${detail ? ` · ${escapeHtml(detail)}` : ""}</span>
      <button type="button" data-focus-step="${escapeHtml(stepId)}" data-focus-direction="1" ${index >= total - 1 ? "disabled" : ""}>下一项 →</button>
    </nav>`;
}

function getSentenceItems() {
  const intro = Array.isArray(COURSE.introSentences) ? COURSE.introSentences : [];
  const story = Array.isArray(COURSE.storySentences) ? COURSE.storySentences : [];
  const seen = new Set();
  return [
    ...intro.map((item) => ({ ...item, source: "intro" })),
    ...story.map((item) => ({ ...item, source: "story" }))
  ].filter((item) => {
    const value = stripHtml(item.text).trim().toLowerCase();
    if (!value || seen.has(value)) { return false; }
    seen.add(value);
    return true;
  });
}

function renderLettersStep() {
  const letters = Array.isArray(COURSE.letters) ? COURSE.letters : [];
  if (!letters.length) { return emptyMarkup("本课还没有字母学习内容。"); }
  const index = clampFocus("letters", letters.length);
  const item = letters[index];
  const guides = Array.isArray(item.guides) ? item.guides.filter((guide) => guide.image) : [];
  const letterKey = `letter-${slug(item.letter)}`;
  const wordKey = `letter-${slug(item.letter)}-word`;
  return `
    ${stepIntro("一个字母，听清两个声音", "每一页只认识一个字母。先听字母名，再听它在单词里的发音，最后跟读例词。", letters.length, "个字母")}
    <article class="focus-card focus-letter ${guides.length ? "has-image" : "no-image"}">
      ${guides.length ? `<div class="focus-media">${guides.map((guide) => `<figure>${imageMarkup(guide.image, guide.alt || guide.caption || "字母书写示范")}<figcaption>${escapeHtml(guide.caption || "")}</figcaption></figure>`).join("")}</div>` : ""}
      <div class="focus-copy">
        <div class="focus-topline"><span class="focus-label">字母声音 · ${escapeHtml(item.letter || "")}</span><span class="focus-page">PAGE ${focusPageLabel(index, letters.length)}</span></div>
        <p class="focus-eyebrow">字母名与字母音</p>
        <h4 class="focus-en focus-letter-glyph">${escapeHtml(item.letter || "")}<small>${escapeHtml(item.lower || String(item.letter || "").toLowerCase())}</small></h4>
        <p class="focus-phonetic">字母名 ${escapeHtml(item.name || "")} · 字母音 ${escapeHtml(item.sound || "")}</p>
        <p class="focus-cn">字母名读作 ${escapeHtml(item.name || "")}，在单词中常发 ${escapeHtml(item.sound || "")} 的音。</p>
        <div class="focus-example"><span>例词</span><strong>${escapeHtml(item.word || "")}</strong><b>${escapeHtml(item.wordCn || "")}</b></div>
        <div class="focus-audio-actions">
          <button class="play-button focus-play" type="button" data-audio="${escapeHtml(item.audio || "")}" data-key="${letterKey}" data-title="${escapeHtml(`${item.letter} · ${item.nameAudioOnly ? "字母名（合成）" : "字母名与字母音"}`)}" data-eyebrow="LETTER SOUND" aria-label="播放 ${escapeHtml(item.letter)} 的字母名与字母音">
            <span class="play-icon" aria-hidden="true"></span>${item.nameAudioOnly ? "听字母名（合成朗读）" : "播放重点发音"}
          </button>
          ${item.wordAudio ? `<button class="play-button focus-secondary" type="button" data-audio="${escapeHtml(item.wordAudio)}" data-key="${wordKey}" data-title="${escapeHtml(`${item.word} · ${item.wordCn || ""}`)}" data-eyebrow="EXAMPLE WORD" aria-label="播放例词 ${escapeHtml(item.word)}"><span class="play-icon" aria-hidden="true"></span>听例词</button>` : ""}
        </div>
        ${Array.isArray(item.extras) && item.extras.length ? `
          <div class="focus-extras">
            <p>还可以听</p>
            ${item.extras.map((extra) => `<button class="extra-word" type="button" data-audio="${escapeHtml(extra.audio || "")}" data-key="letter-${slug(item.letter)}-extra-${slug(extra.word)}" data-title="${escapeHtml(`${extra.word} · ${extra.cn || ""}`)}" data-eyebrow="MORE WORDS"><span class="play-icon" aria-hidden="true"></span><b>${escapeHtml(extra.word)}</b>${escapeHtml(extra.cn || "")}</button>`).join("")}
          </div>` : ""}
        ${focusPager("letters", index, letters.length, "个字母", item.letter || "")}
      </div>
    </article>`;
}

function renderCoreWordsStep() {
  const words = Array.isArray(COURSE.coreWords) ? COURSE.coreWords : [];
  if (!words.length) { return emptyMarkup("本课还没有核心单词。"); }
  const index = clampFocus("words", words.length);
  const item = words[index];
  const key = `word-${slug(item.id || item.en)}`;
  return `
    ${stepIntro("一个单词，一次听清", "每页只练一个核心词。图片只在素材存在时显示，没有图片时页面会自动收紧，不留空白框。", words.length, "个核心词")}
    <article class="focus-card focus-word ${item.image ? "has-image" : "no-image"}">
      ${item.image ? `<div class="focus-media single">${imageMarkup(item.image, item.cn || item.en, "focus-image")}</div>` : ""}
      <div class="focus-copy">
        <div class="focus-topline"><span class="focus-label">核心单词</span><span class="focus-page">PAGE ${focusPageLabel(index, words.length)}</span></div>
        <p class="focus-eyebrow">听发音 · 看中文</p>
        <h4 class="focus-en">${escapeHtml(item.en || "")}</h4>
        <p class="focus-phonetic">${escapeHtml(item.phonetic || "")}</p>
        <p class="focus-cn">${escapeHtml(item.cn || "")}</p>
        <div class="focus-audio-actions">
          <button class="play-button focus-play" type="button" data-audio="${escapeHtml(item.audio || "")}" data-key="${key}" data-title="${escapeHtml(`${item.en} · ${item.cn || ""}`)}" data-eyebrow="CORE WORD" aria-label="播放单词 ${escapeHtml(item.en)}，中文 ${escapeHtml(item.cn || "")}">
            <span class="play-icon" aria-hidden="true"></span>播放这个单词
          </button>
        </div>
        ${focusPager("words", index, words.length, "个单词", item.en || "")}
      </div>
    </article>`;
}

function renderPhonicsStep() {
  const words = Array.isArray(COURSE.phonicsWords) ? COURSE.phonicsWords : [];
  if (!words.length) { return emptyMarkup("本课还没有自然拼读内容。"); }
  const index = clampFocus("phonics", words.length);
  const item = words[index];
  const key = `phonics-${slug(item.en)}`;
  return `
    ${stepIntro("一个词，一步一步拼", "每页只出现一个拼读词。先听完整发音，再看音标和中文，跟着节奏读一次。", words.length, "个拼读词")}
    <article class="focus-card focus-phonics no-image">
      <div class="focus-copy">
        <div class="focus-topline"><span class="focus-label">自然拼读</span><span class="focus-page">PAGE ${focusPageLabel(index, words.length)}</span></div>
        <p class="focus-eyebrow">先听 · 再拼 · 后跟读</p>
        <h4 class="focus-en">${escapeHtml(item.en || "")}</h4>
        <p class="focus-phonetic">${escapeHtml(item.phonetic || "")}</p>
        <p class="focus-cn">${escapeHtml(item.cn || "")}</p>
        <div class="focus-audio-actions">
          <button class="play-button focus-play" type="button" data-audio="${escapeHtml(item.audio || "")}" data-key="${key}" data-title="${escapeHtml(`${item.en} · ${item.cn || ""}`)}" data-eyebrow="PHONICS" aria-label="播放拼读示范 ${escapeHtml(item.en)}，中文 ${escapeHtml(item.cn || "")}">
            <span class="play-icon" aria-hidden="true"></span>播放拼读示范
          </button>
        </div>
        ${focusPager("phonics", index, words.length, "个拼读词", item.en || "")}
      </div>
    </article>`;
}

function renderSentencesStep() {
  const items = getSentenceItems();
  if (!items.length) { return emptyMarkup("本课还没有重点句子。"); }
  const index = clampFocus("sentences", items.length);
  const item = items[index];
  const key = `sentence-${slug(item.id || stripHtml(item.text))}`;
  return `
    ${stepIntro("一个句子，听完整语气", "每页集中听一句话。英文用大字号显示，下面保留中文翻译；相同句子只出现一次。", items.length, "个句子")}
    <article class="focus-card focus-sentence no-image">
      <div class="focus-copy">
        <div class="focus-topline"><span class="focus-label">${escapeHtml(item.source === "intro" ? "表达练习" : "绘本重点句")}</span><span class="focus-page">PAGE ${focusPageLabel(index, items.length)}</span></div>
        <p class="focus-eyebrow">${escapeHtml(item.tag || "重点句子")}</p>
        <h4 class="focus-en focus-sentence-en">${formatSentence(item.text || "")}</h4>
        <p class="focus-cn focus-sentence-cn">${escapeHtml(item.cn || "")}</p>
        <div class="focus-audio-actions">
          <button class="play-button focus-play" type="button" data-audio="${escapeHtml(item.audio || "")}" data-key="${key}" data-title="${escapeHtml(stripHtml(item.text))}" data-eyebrow="${escapeHtml(item.source === "intro" ? "SENTENCE" : "STORY LINE")}" aria-label="播放句子 ${escapeHtml(stripHtml(item.text))}，中文 ${escapeHtml(item.cn || "")}">
            <span class="play-icon" aria-hidden="true"></span>播放整句
          </button>
        </div>
        ${focusPager("sentences", index, items.length, "个句子", item.source === "intro" ? "表达练习" : "绘本重点句")}
      </div>
    </article>`;
}

function renderChantsStep() {
  const chants = Array.isArray(COURSE.chants) ? COURSE.chants : [];
  if (!chants.length) { return emptyMarkup("本课还没有歌谣内容。"); }
  const index = clampFocus("chants", chants.length);
  const item = chants[index];
  const key = `chant-${slug(item.id || item.letter)}`;
  const lines = Array.isArray(item.lines) ? item.lines : [item.lines || ""];
  return `
    ${stepIntro("一首歌谣，跟着节奏唱", "每页只放一首歌谣。先点整首音频，再看着大号英文跟唱，中文意思放在下方。", chants.length, "首歌谣")}
    <article class="focus-card focus-chant no-image">
      <div class="focus-copy">
        <div class="focus-topline"><span class="focus-label">歌谣律动 · ${escapeHtml(item.letter || "")}</span><span class="focus-page">PAGE ${focusPageLabel(index, chants.length)}</span></div>
        <p class="focus-eyebrow">CHANT · ${escapeHtml(item.letter || "")}</p>
        <div class="focus-chant-lines">${lines.map((line) => `<span>${escapeHtml(line)}</span>`).join("")}</div>
        <p class="focus-cn focus-chant-cn">${escapeHtml(item.cn || "")}</p>
        ${item.synthesized ? `<p class="audio-origin-note">这是合成文字朗读，不是原课歌谣演唱，也不替代字母音示范。</p>` : ""}
        <div class="focus-audio-actions">
          <button class="play-button focus-play" type="button" data-audio="${escapeHtml(item.audio || "")}" data-key="${key}" data-title="${escapeHtml(`歌谣 ${item.letter || ""}`)}" data-eyebrow="CHANT" aria-label="播放字母 ${escapeHtml(item.letter || "")} 的歌谣">
            <span class="play-icon" aria-hidden="true"></span>${item.synthesized ? "听歌谣文字（朗读）" : "播放整首歌谣"}
          </button>
        </div>
        ${focusPager("chants", index, chants.length, "首歌谣", `字母 ${item.letter || ""}`)}
      </div>
    </article>`;
}

function renderStoryStep() {
  const story = Array.isArray(COURSE.story) ? COURSE.story : [];
  if (!story.length) { return emptyMarkup("本课还没有故事页面。"); }
  storyIndex = Math.max(0, Math.min(storyIndex, story.length - 1));
  const item = story[storyIndex];
  const hasImage = Boolean(item.image);
  const isLast = storyIndex === story.length - 1;
  const label = item.original ? "故事原句" : "看图导读 · 非课件原文";
  return `
    ${stepIntro("一页一句，听懂再往下读", "英文、中文与朗读一一对应；原绘本图片保留在下方参考。", story.length, "句故事")}
    <article class="story-layout ${hasImage ? "" : "no-story-image"}">
      ${hasImage ? `
        <figure class="story-figure">
          ${imageMarkup(item.image, item.caption || item.text || `故事第 ${storyIndex + 1} 页`)}
          <figcaption><span class="story-pageno">${pad(storyIndex + 1)} / ${pad(story.length)}</span><span>${escapeHtml(item.caption || "")}</span></figcaption>
        </figure>` : ""}
      <section class="story-copy" aria-labelledby="storyText">
        <div class="story-topline"><span class="story-label ${item.original ? "" : "is-hint"}">${escapeHtml(label)}</span><span class="story-pageno">PAGE ${pad(storyIndex + 1)}</span></div>
        <p class="story-text" id="storyText">${escapeHtml(item.text || "")}</p>
        <p class="story-translation">${escapeHtml(item.cn || "")}</p>
        ${item.hint ? `<p class="story-hint">${escapeHtml(item.hint)}</p>` : ""}
        ${renderSentenceReadButtons(item)}
        <div class="story-actions">
          <button class="play-button story-audio" type="button" data-audio="${escapeHtml(item.audio || "")}" data-key="story-${storyIndex}" data-title="${escapeHtml(item.text || "")}" data-eyebrow="STORY AUDIO" aria-label="播放当前故事句子">
            <span class="play-icon" aria-hidden="true"></span>读这一句
          </button>
          <span class="story-audio-note">英文 + 中文译文</span>
        </div>
        <div class="story-pager">
          <button type="button" data-story-step="-1" ${storyIndex === 0 ? "disabled" : ""}>← 上一句</button>
          <span>第 ${storyIndex + 1} / ${story.length} 句</span>
          <button type="button" data-story-step="1" ${isLast ? "disabled" : ""}>下一句 →</button>
        </div>
      </section>
    </article>
    ${isLast ? renderPractice() : `<p class="story-continue-note">读到最后一句后，会显示听音练习和学习清单。</p>`}`;
}

function getQuizRounds() {
  const source = (COURSE.coreWords?.length ? COURSE.coreWords : COURSE.phonicsWords || [])
    .filter((item) => item.en && item.audio);
  return source.slice(0, 3).map((answer, index) => {
    const options = [];
    [answer, ...source.filter((item) => item !== answer)].forEach((item) => {
      if (options.length < 3 && !options.some((option) => option.en === item.en)) { options.push(item); }
    });
    const offset = index % options.length;
    return { answer: answer.en, options: options.slice(offset).concat(options.slice(0, offset)), audio: answer.audio };
  });
}

function renderPractice() {
  const rounds = getQuizRounds();
  const checklist = Array.isArray(COURSE.checklist) ? COURSE.checklist : [];
  return `
    <div class="practice-wrap">
      <section class="practice-block">
        <div class="practice-heading"><h3>听音小练习</h3><p>听一个词，选出正确选项</p></div>
        ${rounds.length ? `
          <div class="quiz-box">
            <div class="quiz-topline"><p>QUICK CHECK · 第 <strong id="quizIndex">1</strong> / ${rounds.length} 题</p><button class="play-button quiz-audio" id="quizAudio" type="button" data-audio="${escapeHtml(rounds[0].audio)}" data-key="quiz-0" data-title="听音选词 · 第 1 题" data-eyebrow="QUICK CHECK"><span class="play-icon" aria-hidden="true"></span>播放题目</button></div>
            <div class="quiz-options" id="quizOptions"></div>
            <p class="quiz-feedback" id="quizFeedback">准备好了吗？先点播放题目。</p>
          </div>` : `<p class="story-continue-note">本课音频不足，听音练习会在内容补充后显示。</p>`}
      </section>
      ${checklist.length ? `
        <section class="practice-block">
          <div class="practice-heading"><h3>本课学习清单</h3><p>勾选后会自动保存</p></div>
          <ul class="checklist-box" id="checklist">
            ${checklist.map((item) => `<li><input type="checkbox" id="check-${escapeHtml(item.id)}" data-check="${escapeHtml(item.id)}"><label for="check-${escapeHtml(item.id)}">${escapeHtml(item.text)}</label></li>`).join("")}
          </ul>
          <div class="progress-summary">
            <div class="progress-summary-track"><i id="progressBar"></i></div>
            <span><b id="progressDone">0</b> / <span id="progressTotal">${checklist.length}</span> 已完成</span>
          </div>
          <button class="reset-button" id="resetProgress" type="button">清空本课进度</button>
        </section>` : ""}
    </div>`;
}

function renderQuizRound() {
  const rounds = getQuizRounds();
  if (!rounds.length) { return; }
  quizRound %= rounds.length;
  quizAnswered = false;
  const round = rounds[quizRound];
  const options = $("#quizOptions");
  const feedback = $("#quizFeedback");
  const audioButton = $("#quizAudio");
  if (!options || !feedback || !audioButton) { return; }
  $("#quizIndex").textContent = quizRound + 1;
  options.innerHTML = round.options.map((option) => `<button class="quiz-option" type="button" data-quiz-answer="${escapeHtml(option.en)}">${escapeHtml(option.en)}</button>`).join("");
  feedback.textContent = "听一听，选出你听到的单词。";
  audioButton.dataset.audio = round.audio;
  audioButton.dataset.key = `quiz-${quizRound}`;
  audioButton.dataset.title = `听音选词 · 第 ${quizRound + 1} 题`;
  updateProgress();
}

function loadProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(getProgressKey()) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveProgress(value) {
  try { localStorage.setItem(getProgressKey(), JSON.stringify(value)); } catch (error) {}
}

function updateProgress() {
  if (!COURSE) { return; }
  const checklist = Array.isArray(COURSE.checklist) ? COURSE.checklist : [];
  const valid = new Set(checklist.map((item) => item.id));
  const completed = loadProgress().filter((id) => valid.has(id));
  const percent = checklist.length ? Math.round((completed.length / checklist.length) * 100) : 0;
  $$(".checklist-box li").forEach((item) => {
    const input = $("input", item);
    if (!input) { return; }
    input.checked = completed.includes(input.dataset.check);
    item.classList.toggle("is-done", input.checked);
  });
  const bar = $("#progressBar");
  if (bar) { bar.style.width = `${percent}%`; }
  const done = $("#progressDone");
  if (done) { done.textContent = completed.length; }
  const total = $("#progressTotal");
  if (total) { total.textContent = checklist.length; }
}

function resetProgress() {
  saveProgress([]);
  updateProgress();
  showToast("本课学习进度已清空");
}

function openCourse(id) {
  const nextCourse = [...COURSES, ...READINGS].find((item) => item.id === id);
  if (!nextCourse || !nextCourse.available) {
    showToast("这一课的内容还在补充中");
    return;
  }
  stopAllMedia();
  COURSE = nextCourse;
  catalogTrack = COURSE.isReading ? "reading" : "phonics";
  updateCatalogTrack();
  STEPS = getCourseSteps(COURSE);
  Object.keys(focusIndexes).forEach((key) => { focusIndexes[key] = 0; });
  sourceIndex = 0;
  sourcePageIndex = 0;
  stepIndex = 0;
  storyIndex = 0;
  quizRound = 0;
  quizAnswered = false;
  renderLesson();
  renderStep();
  showView("lesson");
  scheduleAudioPrefetch();
}

function showView(view) {
  currentView = view;
  $("#catalogView").hidden = view !== "catalog";
  $("#lessonView").hidden = view !== "lesson";
  $$("[data-view-link]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.viewLink === view);
    link.setAttribute("aria-current", link.dataset.viewLink === view ? "page" : "false");
  });
  if (view === "catalog") {
    stopAllMedia();
    document.title = "森林英语 · 课程学习空间";
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function changeStep(nextIndex, scroll = false) {
  const next = Math.max(0, Math.min(STEPS.length - 1, nextIndex));
  if (next === stepIndex) { return; }
  stopAllMedia();
  stepIndex = next;
  renderStep({ scroll });
}

function changeStory(direction) {
  const story = Array.isArray(COURSE.story) ? COURSE.story : [];
  const next = Math.max(0, Math.min(story.length - 1, storyIndex + direction));
  if (next === storyIndex) { return; }
  stopAllMedia();
  storyIndex = next;
  renderStep({ scroll: true, focus: false });
}

function getFocusTotal(stepId) {
  if (!COURSE) { return 0; }
  if (stepId === "letters") { return (COURSE.letters || []).length; }
  if (stepId === "words") { return (COURSE.coreWords || []).length; }
  if (stepId === "phonics") { return (COURSE.phonicsWords || []).length; }
  if (stepId === "sentences") { return getSentenceItems().length; }
  if (stepId === "chants") { return (COURSE.chants || []).length; }
  return 0;
}

function changeFocus(stepId, direction) {
  const total = getFocusTotal(stepId);
  if (!total) { return; }
  const current = Number(focusIndexes[stepId] || 0);
  const next = Math.max(0, Math.min(total - 1, current + direction));
  if (next === current) { return; }
  stopAllMedia();
  focusIndexes[stepId] = next;
  renderStep({ scroll: true, focus: false });
}

function normalizeAudioUrl(path) {
  return new URL(path, document.baseURI).href;
}

function getAudioCandidates(path) {
  const localUrl = normalizeAudioUrl(path);
  if (!/(^|\.)github\.io$/i.test(location.hostname)) { return [localUrl]; }
  try {
    const local = new URL(localUrl);
    const base = new URL("./", document.baseURI);
    if (local.origin !== location.origin || !local.pathname.startsWith(base.pathname)) { return [localUrl]; }
    const relativePath = local.pathname.slice(base.pathname.length);
    return [localUrl, new URL(relativePath, AUDIO_CDN_ROOT).href];
  } catch {
    return [localUrl];
  }
}

function fetchAudioBlob(url) {
  if (audioBlobCache.has(url)) { return Promise.resolve(audioBlobCache.get(url)); }
  if (audioBlobRequests.has(url)) { return audioBlobRequests.get(url); }
  const request = (async () => {
    let lastError = null;
    for (const candidate of getAudioCandidates(url)) {
      try {
        const signal = typeof AbortSignal.timeout === "function" ? AbortSignal.timeout(8000) : undefined;
        const response = await fetch(candidate, { cache: "force-cache", signal });
        if (!response.ok) { throw new Error(`Audio request failed: ${response.status}`); }
        const blob = await response.blob();
        if (!blob.size) { throw new Error("Empty audio file"); }
        audioBlobCache.set(url, blob);
        return blob;
      } catch (error) {
        lastError = error;
      }
    }
    throw lastError || new Error("No audio source available");
  })().finally(() => audioBlobRequests.delete(url));
  audioBlobRequests.set(url, request);
  return request;
}

function pumpAudioPrefetch() {
  while (audioPrefetchActive < AUDIO_PREFETCH_CONCURRENCY && audioPrefetchQueue.length) {
    const url = audioPrefetchQueue.shift();
    if (audioBlobCache.has(url) || audioBlobRequests.has(url)) { continue; }
    audioPrefetchActive += 1;
    fetchAudioBlob(url).catch(() => {}).finally(() => {
      audioPrefetchActive -= 1;
      window.setTimeout(pumpAudioPrefetch, 80);
    });
  }
}

function queueAudioPrefetch(urls, priority = false) {
  const pending = new Set(audioPrefetchQueue);
  urls.forEach((path) => {
    if (!path) { return; }
    const url = normalizeAudioUrl(path);
    if (!audioBlobCache.has(url) && !audioBlobRequests.has(url) && !pending.has(url)) {
      if (priority) { audioPrefetchQueue.unshift(url); } else { audioPrefetchQueue.push(url); }
      pending.add(url);
    }
  });
  pumpAudioPrefetch();
}

function collectAudioUrls() {
  if (!COURSE) { return []; }
  const urls = [];
  (COURSE.letters || []).forEach((item) => {
    urls.push(item.audio, item.wordAudio);
    (item.extras || []).forEach((extra) => urls.push(extra.audio));
  });
  ["coreWords", "phonicsWords", "introSentences", "storySentences", "chants", "story"].forEach((key) => {
    (COURSE[key] || []).forEach((item) => urls.push(item.audio));
  });
  $$("[data-audio]").forEach((element) => urls.push(element.dataset.audio));
  return Array.from(new Set(urls.filter(Boolean)));
}

function scheduleAudioPrefetch() {
  const urls = Array.from(new Set($$("[data-audio]", $("#stepContent")).map((element) => element.dataset.audio).filter(Boolean)));
  const start = () => queueAudioPrefetch(urls);
  if (window.requestIdleCallback) {
    window.requestIdleCallback(start, { timeout: 1200 });
  } else {
    window.setTimeout(start, 350);
  }
}

function getPlaylist(name) {
  if (!COURSE) { return []; }
  if (name === "letters") {
    return (COURSE.letters || []).flatMap((item) => {
      const tracks = [
        { audio: item.audio, title: `${item.letter} · 字母名与字母音`, eyebrow: "LETTER SOUND", key: `letter-${slug(item.letter)}` },
        { audio: item.wordAudio, title: `${item.word} · ${item.wordCn || ""}`, eyebrow: "EXAMPLE WORD", key: `letter-${slug(item.letter)}-word` }
      ];
      (item.extras || []).forEach((extra) => tracks.push({ audio: extra.audio, title: `${extra.word} · ${extra.cn || ""}`, eyebrow: "MORE WORDS", key: `letter-${slug(item.letter)}-extra-${slug(extra.word)}` }));
      return tracks.filter((track) => track.audio);
    });
  }
  if (name === "words") {
    return [
      ...(COURSE.coreWords || []).map((item) => ({ audio: item.audio, title: `${item.en} · ${item.cn || ""}`, eyebrow: "CORE WORD", key: `word-${slug(item.id || item.en)}` })),
      ...(COURSE.phonicsWords || []).map((item) => ({ audio: item.audio, title: `${item.en} · ${item.cn || ""}`, eyebrow: "PHONICS", key: `phonics-${slug(item.en)}` }))
    ].filter((track) => track.audio);
  }
  if (name === "sentences") {
    return getSentenceItems().map((item) => ({
      audio: item.audio,
      title: stripHtml(item.text),
      eyebrow: item.source === "intro" ? "SENTENCE" : "STORY LINE",
      key: `sentence-${slug(item.id || stripHtml(item.text))}`
    })).filter((track) => track.audio);
  }
  if (name === "chants") {
    return (COURSE.chants || []).map((item) => ({ audio: item.audio, title: `字母歌谣 ${item.letter || ""}`, eyebrow: "CHANT", key: `chant-${slug(item.id || item.letter)}` })).filter((track) => track.audio);
  }
  if (name === "story") {
    return (COURSE.story || []).map((item, index) => ({ audio: item.audio, title: item.text, eyebrow: `STORY · ${index + 1} / ${COURSE.story.length}`, key: `story-${index}` })).filter((track) => track.audio);
  }
  return [];
}

function getPlaylistName(key) {
  if (!key) { return ""; }
  if (key.startsWith("letter-")) { return "letters"; }
  if (key.startsWith("word-") || key.startsWith("phonics-")) { return "words"; }
  if (key.startsWith("sentence-")) { return "sentences"; }
  if (key.startsWith("chant-")) { return "chants"; }
  if (key.startsWith("story-")) { return "story"; }
  return "";
}

function findAudioTrigger(key) {
  return $$("[data-audio]").find((element) => element.dataset.key === key) || null;
}

function disposeAudioSource() {
  if (!audio) { return; }
  audio.pause();
  audio.removeAttribute("src");
  audio.load();
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = "";
  }
}

function mountAudioSource(source, token, objectUrl = "") {
  if (token !== playRequestId || !audio) { return null; }
  disposeAudioSource();
  currentObjectUrl = objectUrl;
  audio.src = source;
  audio.load();
  return audio;
}

function attemptPlayback(token) {
  if (token !== playRequestId || !audio) { return; }
  const playback = audio.play();
  if (playback) {
    playback.catch(() => {
      window.setTimeout(() => {
        if (token === playRequestId && audio.paused) { showToast("音频正在准备，请稍后再点一次"); }
      }, 2400);
    });
  }
}

function clearPlayingHighlights() {
  $$(".is-playing").forEach((item) => item.classList.remove("is-playing"));
}

function updatePauseButton() {
  const button = $("#playerToggle");
  if (!button || !audio) { return; }
  button.innerHTML = audio.paused ? '<span class="play-icon" aria-hidden="true"></span>' : '<span class="pause-icon" aria-hidden="true"></span>';
  button.setAttribute("aria-label", audio.paused ? "继续播放" : "暂停");
}

function updateProgressBar() {
  const bar = $("#playerProgress");
  if (!bar || !audio) { return; }
  const percent = audio.duration && Number.isFinite(audio.duration) ? (audio.currentTime / audio.duration) * 100 : 0;
  bar.style.width = `${Math.min(100, Math.max(0, percent))}%`;
}

function updatePlayer(show = false) {
  const bar = $("#playerBar");
  if (!bar) { return; }
  if (show || playerState.title) { bar.classList.add("is-visible"); }
  $("#playerTitle").textContent = playerState.title || "选择一个重点内容开始点读";
  $("#playerEyebrow").textContent = playerState.eyebrow || "NOW PLAYING";
  updatePauseButton();
  updateProgressBar();
}

function syncStoryForTrack(track) {
  const match = /^story-(\d+)$/.exec(track.key || "");
  if (!match || !COURSE.story?.length) { return; }
  const next = Math.max(0, Math.min(COURSE.story.length - 1, Number(match[1])));
  if (next !== storyIndex) {
    storyIndex = next;
    if (currentView === "lesson" && STEPS[stepIndex]?.id === "story") { renderStep(); }
  }
}

function playTrack(track, queue = null, index = null) {
  if (!track || !track.audio || !audio) { return; }
  syncStoryForTrack(track);
  if (queue) {
    playerState.queue = queue;
    playerState.index = index == null ? 0 : index;
  } else {
    playerState.queue = [track];
    playerState.index = 0;
  }
  playerState.title = track.title || "重点音频";
  playerState.eyebrow = track.eyebrow || "NOW PLAYING";
  playerState.currentKey = track.key || "";
  playerState.solo = Boolean(track.solo);
  window.speechSynthesis?.cancel();
  const token = ++playRequestId;
  const sourceUrl = normalizeAudioUrl(track.audio);
  playerState.sourceUrl = sourceUrl;
  const cachedBlob = audioBlobCache.get(sourceUrl);

  if (cachedBlob) {
    const objectUrl = URL.createObjectURL(cachedBlob);
    mountAudioSource(objectUrl, token, objectUrl);
  } else {
    mountAudioSource(getAudioCandidates(sourceUrl)[0], token);
    queueAudioPrefetch([sourceUrl], true);
    fetchAudioBlob(sourceUrl).then((blob) => {
      if (token !== playRequestId || !audio || audio.ended) { return; }
      if (!audio.paused && audio.currentTime > 0) { return; }
      const objectUrl = URL.createObjectURL(blob);
      if (mountAudioSource(objectUrl, token, objectUrl)) { attemptPlayback(token); }
    }).catch(() => {
      if (token === playRequestId && audio?.paused) { speakFallback(track, token); }
    });
  }

  playerState.trigger = track.trigger || findAudioTrigger(track.key || "");
  if (audio?.getAttribute("src")) { attemptPlayback(token); }
  updatePlayer(true);
  clearPlayingHighlights();
  playerState.trigger = track.trigger || findAudioTrigger(track.key || "");
  playerState.trigger?.classList.add("is-playing");
}

function onAudioEnded() {
  clearPlayingHighlights();
  if (playerState.solo || !playerState.queue.length) {
    if (playerState.solo) {
      playerState.queue = [];
      playerState.index = -1;
    }
    updatePauseButton();
    return;
  }
  if (playerState.index < playerState.queue.length - 1) {
    const next = playerState.index + 1;
    playTrack(playerState.queue[next], playerState.queue, next);
  } else {
    playerState.queue = [];
    playerState.index = -1;
    updatePauseButton();
  }
}

function playAdjacent(direction) {
  if (!playerState.queue.length) { return; }
  const next = (playerState.index + direction + playerState.queue.length) % playerState.queue.length;
  playTrack(playerState.queue[next], playerState.queue, next);
}

function bindAudioEvents() {
  if (!audio) { return; }
  audio.addEventListener("play", () => {
    updatePauseButton();
    clearPlayingHighlights();
    playerState.trigger?.classList.add("is-playing");
  });
  audio.addEventListener("pause", updatePauseButton);
  audio.addEventListener("timeupdate", updateProgressBar);
  audio.addEventListener("ended", onAudioEnded);
  audio.addEventListener("error", () => {
    if (audio.currentSrc && !audioBlobCache.has(playerState.sourceUrl)) { updatePauseButton(); }
  });
}

function initServiceWorker() {
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register("./sw.js", { updateViaCache: "none" }).catch(() => {});
  }
}

function bindEvents() {
  document.addEventListener("click", (event) => {
    const track = event.target.closest("[data-catalog-track]");
    if (track) { catalogTrack = track.dataset.catalogTrack; updateCatalogTrack(); return; }
    const courseCard = event.target.closest("[data-course-id]");
    if (courseCard) {
      openCourse(courseCard.dataset.courseId);
      return;
    }

    const storyStep = event.target.closest("[data-story-step]");
    if (storyStep) {
      changeStory(Number(storyStep.dataset.storyStep));
      return;
    }

    const focusStep = event.target.closest("[data-focus-step]");
    if (focusStep) {
      changeFocus(focusStep.dataset.focusStep, Number(focusStep.dataset.focusDirection));
      return;
    }

    const stepTab = event.target.closest("[data-step-index]");
    if (stepTab) {
      changeStep(Number(stepTab.dataset.stepIndex));
      return;
    }

    const sourceTab = event.target.closest("[data-source-index]");
    if (sourceTab) { sourceIndex = Number(sourceTab.dataset.sourceIndex); sourcePageIndex = 0; renderStep(); return; }
    const sourcePager = event.target.closest("[data-source-direction]");
    if (sourcePager) { changeSourcePage(Number(sourcePager.dataset.sourceDirection)); return; }
    if (event.target.closest("[data-repeat]")) {
      if (audio?.src) { audio.currentTime = 0; audio.play().catch(() => showToast("请点击正文朗读按钮重试")); }
      return;
    }
    const audioTrigger = event.target.closest("[data-audio]");
    if (audioTrigger) {
      const key = audioTrigger.dataset.key || "";
      const playlistName = getPlaylistName(key);
      const queue = getPlaylist(playlistName);
      const index = queue.findIndex((track) => track.key === key);
      playTrack({
        audio: audioTrigger.dataset.audio,
        title: audioTrigger.dataset.title || "重点音频",
        eyebrow: audioTrigger.dataset.eyebrow || "NOW PLAYING",
        key,
        trigger: audioTrigger,
        solo: true
      }, index >= 0 ? queue : null, index >= 0 ? index : null);
      return;
    }

    const quizOption = event.target.closest("[data-quiz-answer]");
    if (quizOption && !quizAnswered) {
      const rounds = getQuizRounds();
      const round = rounds[quizRound % rounds.length];
      quizAnswered = true;
      const correct = quizOption.dataset.quizAnswer === round.answer;
      quizOption.classList.add(correct ? "is-correct" : "is-wrong");
      if (!correct) {
        $$("[data-quiz-answer]", $("#quizOptions")).find((button) => button.dataset.quizAnswer === round.answer)?.classList.add("is-correct");
      }
      $("#quizFeedback").textContent = correct ? "答对啦，耳朵很灵！" : `再听一次，正确答案是 ${round.answer}。`;
      window.setTimeout(() => {
        quizRound = (quizRound + 1) % rounds.length;
        renderQuizRound();
      }, 1500);
      return;
    }

    const viewLink = event.target.closest("[data-view-link]");
    if (viewLink) {
      event.preventDefault();
      showView(viewLink.dataset.viewLink);
      return;
    }
    if (event.target.closest("#headerCatalogButton, #backToCatalog")) {
      event.preventDefault();
      showView("catalog");
      return;
    }
    if (event.target.closest("#stepPrev")) {
      changeStep(stepIndex - 1, true);
      return;
    }
    if (event.target.closest("#stepNext")) {
      if (stepIndex === STEPS.length - 1) { showView("catalog"); return; }
      changeStep(stepIndex + 1, true);
      return;
    }
    if (event.target.closest("#resetProgress")) {
      resetProgress();
      return;
    }
    if (event.target.closest("#playerClose")) {
      playRequestId += 1;
      audio?.pause();
      window.speechSynthesis?.cancel();
      $("#playerBar").classList.remove("is-visible");
      clearPlayingHighlights();
      return;
    }
    if (event.target.closest("#playerPrev")) { playAdjacent(-1); return; }
    if (event.target.closest("#playerNext")) { playAdjacent(1); return; }
    if (event.target.closest("#playerToggle")) {
      if (!audio) { return; }
      if (audio.paused) { audio.play().catch(() => {}); } else { audio.pause(); }
    }
  });

  document.addEventListener("change", (event) => {
    if (event.target.matches("[data-source-page]")) {
      sourcePageIndex = Number(event.target.value); renderStep(); return;
    }
    if (event.target.matches("[data-video-file]")) { selectLocalVideo(event.target.files?.[0]); return; }
    const input = event.target.closest("[data-check]");
    if (!input || !COURSE) { return; }
    const progress = new Set(loadProgress());
    if (input.checked) { progress.add(input.dataset.check); } else { progress.delete(input.dataset.check); }
    saveProgress(Array.from(progress));
    updateProgress();
  });

  document.addEventListener("error", (event) => {
    if (event.target instanceof HTMLImageElement) {
      event.target.hidden = true;
      event.target.closest("figure")?.setAttribute("hidden", "");
      event.target.closest(".story-layout")?.classList.add("no-story-image");
      const media = event.target.closest(".focus-media");
      if (media && !Array.from(media.querySelectorAll("img")).some((img) => !img.hidden)) {
        const card = media.closest(".focus-card"); media.remove(); card?.classList.add("no-image");
      }
    }
  }, true);

  window.addEventListener("scroll", () => {
    $("#siteHeader")?.classList.toggle("is-scrolled", window.scrollY > 8);
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      $("#playerBar")?.classList.remove("is-visible");
      audio?.pause();
      window.speechSynthesis?.cancel();
    }
  });
}

function init() {
  audio = $("#audio");
  renderCatalog();
  STEPS = getCourseSteps(COURSE);
  if (COURSE) {
    renderLesson();
    renderStep();
  }
  showView("catalog");
  bindAudioEvents();
  bindEvents();
  initServiceWorker();
  scheduleAudioPrefetch();
  window.XIAOYUAN_APP_READY = true;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}

function getCourseSteps(course) {
  if (!course) { return []; }
  const dataKeys = { letters: "letters", words: "coreWords", phonics: "phonicsWords", sentences: "storySentences", chants: "chants", story: "story", sources: "sources" };
  const steps = ALL_STEPS.filter((step) => Boolean(course[dataKeys[step.id]]?.length) || (step.id === "sentences" && course.introSentences?.length));
  if (!course.isReading) { return steps; }
  const readingOrder = ["story", "words", "sentences", "sources"];
  return readingOrder.map((id) => steps.find((step) => step.id === id)).filter(Boolean);
}

function stopAllMedia() {
  playRequestId += 1;
  audio?.pause();
  window.speechSynthesis?.cancel();
  $("#courseVideo")?.pause();
  clearPlayingHighlights();
  $("#playerBar")?.classList.remove("is-visible");
}

function speakFallback(track, token) {
  if (token !== playRequestId || !("speechSynthesis" in window)) {
    showToast("朗读未加载，请联网后再试"); return;
  }
  const text = window.XIAOYUAN_AUDIO_TEXT?.[track.audio] || stripHtml(track.title).split(" · ")[0];
  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "en-US"; speech.rate = 0.85;
  const voice = speechSynthesis.getVoices().find((item) => /^en-US/i.test(item.lang)) || speechSynthesis.getVoices().find((item) => /^en/i.test(item.lang));
  if (voice) { speech.voice = voice; }
  speech.onerror = () => { if (token === playRequestId) { showToast("此设备朗读不可用，请联网加载 MP3"); } };
  speech.onend = () => { if (token === playRequestId) { clearPlayingHighlights(); $("#playerBar")?.classList.remove("is-visible"); } };
  $("#playerBar")?.classList.remove("is-visible");
  speechSynthesis.speak(speech);
  showToast("MP3 暂不可用，已改用设备英文朗读");
}

function renderSentenceReadButtons(item) {
  const lines = item.lines || [];
  if (lines.length <= 1) { return ""; }
  return `<div class="sentence-read-list" aria-label="逐句朗读">${lines.map((line, i) => `<div class="sentence-read-item"><p>${escapeHtml(line.text)}</p><small>${escapeHtml(line.cn)}</small><button class="play-button" type="button" data-audio="${escapeHtml(line.audio)}" data-key="single-${storyIndex}-${i}" data-title="${escapeHtml(line.text)}"><span class="play-icon" aria-hidden="true"></span>读这一句</button></div>`).join("")}<p class="audio-origin-note">新增音频为合成英文朗读，并非课程原录音。</p></div>`;
}

function renderSourcesStep() {
  const sources = COURSE.sources || [];
  if (!sources.length) { return emptyMarkup("本课暂未补充原页。"); }
  sourceIndex = Math.max(0, Math.min(sourceIndex, sources.length - 1));
  const source = sources[sourceIndex];
  const pages = source.pages || [];
  sourcePageIndex = Math.max(0, Math.min(sourcePageIndex, pages.length - 1));
  const item = pages[sourcePageIndex];
  return `<div class="source-toolbar"><div class="source-tabs">${sources.map((entry, i) => `<button type="button" data-source-index="${i}" class="${i === sourceIndex ? "is-active" : ""}">${escapeHtml(entry.kind === "story" ? "绘本原页" : "自然拼读课件")}</button>`).join("")}</div><label>跳至原页<select data-source-page aria-label="选择课件原页">${pages.map((entry, i) => `<option value="${i}" ${i === sourcePageIndex ? "selected" : ""}>第 ${entry.page} 页</option>`).join("")}</select></label></div><h3 class="source-title">${escapeHtml(source.title)}</h3><p class="audio-origin-note">原资料共 ${source.totalPages} 页，这里收录 ${pages.length} 个去重学习页。课程宣传、活动通知和无学习内容的休息页不单列练习。原图里的未核实文字不自动送入朗读，避免 OCR 误读。</p><figure class="source-figure">${imageMarkup(item?.image, source.title + " 第 " + item?.page + " 页")}<figcaption>原文件：${escapeHtml(source.fileName)} · 原页 ${item?.page}</figcaption></figure><nav class="focus-pager" aria-label="原页翻页"><button type="button" data-source-direction="-1" ${sourcePageIndex === 0 ? "disabled" : ""}>← 上一页</button><span>${sourcePageIndex + 1} / ${pages.length}</span><button type="button" data-source-direction="1" ${sourcePageIndex === pages.length - 1 ? "disabled" : ""}>下一页 →</button></nav>`;
}

function changeSourcePage(direction) {
  const total = COURSE.sources?.[sourceIndex]?.pages?.length || 0;
  sourcePageIndex = Math.max(0, Math.min(total - 1, sourcePageIndex + direction));
  renderStep();
}

function renderVideoSection(keepOpen = false) {
  const holder = $("#lessonVideoSection");
  if (!holder || !COURSE) { return; }
  const selected = videoSelections.get(COURSE.id);
  const hasVideo = Boolean(selected || COURSE.video?.src);
  holder.innerHTML = `<details class="lesson-video-details" ${keepOpen || hasVideo ? "open" : ""}>
    <summary><span>课程视频</span><small>${hasVideo ? "本设备已选择" : "暂未提供 · 不影响听读"}</small></summary>
    <div class="video-panel"><p>这里是资料整理与合成朗读版，不是官方视频课堂。目前没有课程视频，先用逐句跟读、中文对照和课件原页学习。</p>
    <label class="video-file-button">${hasVideo ? "更换本地视频" : "以后有视频时，从本机选择"}<input type="file" data-video-file accept="video/*,.mp4,.webm,.mov,.m4v"></label>
    ${hasVideo ? `<p class="video-selected">${escapeHtml(selected?.name || "已配置课程视频")}</p><video id="courseVideo" controls playsinline preload="metadata"></video><p id="videoFeedback" class="video-feedback" role="status"></p>` : ""}
    <p class="audio-origin-note">本地选择的文件只在当前标签页使用，不会上传或公开。之后获得可使用的视频，再接入对应课程。</p></div></details>`;
  if (hasVideo) { mountCourseVideo(); }
}

function selectLocalVideo(file) {
  if (!file) { return; }
  if (!file.type.startsWith("video/") && !/\.(mp4|webm|mov|m4v|ogg)$/i.test(file.name)) { showToast("请选择 MP4、WebM 等视频文件"); return; }
  const previous = videoSelections.get(COURSE.id);
  if (previous) { URL.revokeObjectURL(previous.url); }
  videoSelections.set(COURSE.id, { name: file.name, url: URL.createObjectURL(file) });
  renderVideoSection(true);
}

function mountCourseVideo() {
  const video = $("#courseVideo");
  const selected = videoSelections.get(COURSE.id);
  const src = selected?.url || COURSE.video?.src;
  if (!video || !src) { return; }
  video.src = src;
  video.addEventListener("error", () => { $("#videoFeedback").textContent = "此视频无法解码。请尝试 H.264 编码的 MP4，或在系统播放器中打开。"; });
  video.addEventListener("play", () => { audio?.pause(); window.speechSynthesis?.cancel(); });
}


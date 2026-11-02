'use strict';

const COURSE = {
  id: 'lesson-01-adam-and-the-bear',
  lesson: 1,
  title: 'Adam and the Bear',
  subtitle: 'Aa–Dd',
  level: '双新阅读表达 · Level 2',
  letters: [
    {
      letter: 'A', lower: 'a', name: '/eɪ/', sound: '/æ/', word: 'apple', wordCn: '苹果',
      audio: './assets/audio/alphabet/a.mp3', wordAudio: './assets/audio/words/apple.mp3',
      extras: [{ word: 'ax', cn: '斧头', audio: './assets/audio/words/ax.mp3' }, { word: 'Adam', cn: '亚当', audio: './assets/audio/words/adam.mp3' }, { word: 'alligator', cn: '短吻鳄', audio: './assets/audio/words/alligator.mp3' }]
    },
    {
      letter: 'B', lower: 'b', name: '/biː/', sound: '/b/', word: 'bear', wordCn: '熊',
      audio: './assets/audio/alphabet/b.mp3', wordAudio: './assets/audio/words/bear.mp3',
      extras: [{ word: 'bee', cn: '蜜蜂', audio: './assets/audio/words/bee.mp3' }, { word: 'bread', cn: '面包', audio: './assets/audio/words/bread.mp3' }, { word: 'bag', cn: '包', audio: './assets/audio/words/bag.mp3' }]
    },
    {
      letter: 'C', lower: 'c', name: '/siː/', sound: '/k/', word: 'cat', wordCn: '猫',
      audio: './assets/audio/alphabet/c.mp3', wordAudio: './assets/audio/words/cat.mp3',
      extras: [{ word: 'cow', cn: '奶牛', audio: './assets/audio/words/cow.mp3' }, { word: 'car', cn: '汽车', audio: './assets/audio/words/car.mp3' }, { word: 'card', cn: '卡片', audio: './assets/audio/words/card.mp3' }]
    },
    {
      letter: 'D', lower: 'd', name: '/diː/', sound: '/d/', word: 'duck', wordCn: '鸭子',
      audio: './assets/audio/alphabet/d.mp3', wordAudio: './assets/audio/words/duck.mp3',
      extras: [{ word: 'dog', cn: '狗', audio: './assets/audio/words/dog.mp3' }, { word: 'dad', cn: '爸爸', audio: './assets/audio/words/dad.mp3' }, { word: 'desk', cn: '书桌', audio: './assets/audio/words/desk.mp3' }, { word: 'dig', cn: '挖', audio: './assets/audio/words/dig.mp3' }]
    }
  ],
  coreWords: [
    { id: 'cat', en: 'cat', phonetic: '/kæt/', cn: '猫', image: './assets/img/words/cat.jpg', audio: './assets/audio/words/cat.mp3' },
    { id: 'dog', en: 'dog', phonetic: '/dɒɡ/', cn: '狗', image: './assets/img/words/dog.jpg', audio: './assets/audio/words/dog.mp3' },
    { id: 'fish', en: 'fish', phonetic: '/fɪʃ/', cn: '鱼', image: './assets/img/words/fish.jpg', audio: './assets/audio/words/fish.mp3' },
    { id: 'crab', en: 'crab', phonetic: '/kræb/', cn: '螃蟹', image: './assets/img/words/crab.jpg', audio: './assets/audio/words/crab.mp3' },
    { id: 'bat', en: 'bat', phonetic: '/bæt/', cn: '蝙蝠', image: './assets/img/words/bat.jpg', audio: './assets/audio/words/bat.mp3' }
  ],
  phonicsWords: [
    { en: 'apple', phonetic: '/ˈæpəl/', cn: '苹果', audio: './assets/audio/words/apple.mp3' },
    { en: 'bear', phonetic: '/beə(r)/', cn: '熊', audio: './assets/audio/words/bear.mp3' },
    { en: 'duck', phonetic: '/dʌk/', cn: '鸭子', audio: './assets/audio/words/duck.mp3' },
    { en: 'bad', phonetic: '/bæd/', cn: '坏的', audio: './assets/audio/words/bad.mp3' },
    { en: 'cab', phonetic: '/kæb/', cn: '出租车', audio: './assets/audio/words/cab.mp3' },
    { en: 'dab', phonetic: '/dæb/', cn: '轻拍', audio: './assets/audio/words/dab.mp3' },
    { en: 'dad', phonetic: '/dæd/', cn: '爸爸', audio: './assets/audio/words/dad.mp3' },
    { en: 'ax', phonetic: '/æks/', cn: '斧头', audio: './assets/audio/words/ax.mp3' },
    { en: 'bag', phonetic: '/bæɡ/', cn: '包', audio: './assets/audio/words/bag.mp3' },
    { en: 'Adam', phonetic: '/ˈædəm/', cn: '亚当', audio: './assets/audio/words/adam.mp3' }
  ],
  introSentences: [
    { id: 'name', text: 'My name is <u>Adam</u>.', cn: '我的名字是 Adam。', tag: '替换示范', audio: './assets/audio/sentences/my-name-is-adam.mp3' },
    { id: 'from', text: 'I\'m from <u>China</u>.', cn: '我来自中国。', tag: '替换示范', audio: './assets/audio/sentences/i-am-from-china.mp3' },
    { id: 'age', text: 'I\'m <u>seven</u> years old.', cn: '我七岁了。', tag: '替换示范', audio: './assets/audio/sentences/i-am-seven-years-old.mp3' }
  ],
  storySentences: [
    { id: 'hello', text: 'Hello, bear!', cn: '你好，熊！', tag: '互动页 · 打招呼', audio: './assets/audio/sentences/hello-bear.mp3' },
    { id: 'sees', text: 'Adam sees Big Brown Bear.', cn: 'Adam 看见了大棕熊。', tag: '故事原句', audio: './assets/audio/sentences/adam-sees-big-brown-bear.mp3' },
    { id: 'bad', text: 'Bad, bad bear!', cn: '坏熊，坏熊！', tag: '故事原句', audio: './assets/audio/sentences/bad-bad-bear.mp3' },
    { id: 'what', text: 'What will happen?', cn: '接下来会发生什么？', tag: '故事原句', audio: './assets/audio/sentences/what-will-happen.mp3' },
    { id: 'apples', text: 'My bag of apples.', cn: '我的那袋苹果。', tag: '故事原句', audio: './assets/audio/sentences/my-bag-of-apples.mp3' },
    { id: 'see', text: 'See you next time!', cn: '下次见！', tag: '故事原句', audio: './assets/audio/sentences/see-you-next-time.mp3' }
  ],
  chants: [
    { id: 'a', letter: 'A', lines: ['A, A, A, a, a, a.', 'Apple, apple, a, a, a.'], audio: './assets/audio/chants/chant-1.mp3' },
    { id: 'b', letter: 'B', lines: ['B, B, B, b, b, b.', 'Bear, bear, b, b, b.'], audio: './assets/audio/chants/chant-2.mp3' },
    { id: 'c', letter: 'C', lines: ['C, C, C, c, c, c.', 'Cat, cat, c, c, c.'], audio: './assets/audio/chants/chant-3.mp3' },
    { id: 'd', letter: 'D', lines: ['D, D, D, d, d, d.', 'Duck, duck, d, d, d.'], audio: './assets/audio/chants/chant-4.mp3' }
  ],
  story: [
    { image: './assets/img/story/story-01.jpg', caption: '森林里结满红苹果。', original: false, text: 'Look! A forest of apple trees.', cn: '看，一片结着苹果的森林。', hint: '看图提示（非课件原文）：阳光照进树林，兔子先发现了树丛后的动静。', audio: './assets/audio/story/hint-01.mp3' },
    { image: './assets/img/story/story-02.jpg', caption: '树丛后出现了一道影子。', original: false, text: 'A shadow in the bushes!', cn: '树丛里有一道影子！', hint: '看图提示（非课件原文）：兔子和甲虫看向树丛，影子越来越近。', audio: './assets/audio/story/hint-02.mp3' },
    { image: './assets/img/story/story-03.jpg', caption: 'Adam 遇见了大棕熊。', original: false, text: 'Adam and Big Brown Bear meet.', cn: 'Adam 和大棕熊遇见了。', hint: '看图提示（非课件原文）：大熊举起手，Adam 背着苹果袋站在树下。', audio: './assets/audio/story/hint-03.mp3' },
    { image: './assets/img/story/story-04.jpg', caption: 'Adam sees Big Brown Bear.', original: true, text: 'Adam sees Big Brown Bear.', cn: 'Adam 看见了大棕熊。', hint: '故事原句：注意 sees 的发音，句尾 Bear 可以稍微上扬。', audio: './assets/audio/sentences/adam-sees-big-brown-bear.mp3' },
    { image: './assets/img/story/story-05.jpg', caption: 'What will happen?', original: true, text: 'What will happen?', cn: '接下来会发生什么？', hint: '故事原句：看图猜一猜，A、B、C 三种结局哪一个会发生？', audio: './assets/audio/sentences/what-will-happen.mp3' },
    { image: './assets/img/story/story-06.jpg', caption: 'Bad, bad bear!', original: true, text: 'Bad, bad bear!', cn: '坏熊，坏熊！', hint: '故事原句：先听音频，再模仿 Adam 着急又委屈的语气。', audio: './assets/audio/sentences/bad-bad-bear.mp3' },
    { image: './assets/img/story/story-07.jpg', caption: '大熊来到门前。', original: false, text: 'Bear is at the door.', cn: '熊来到了门口。', hint: '看图提示（非课件原文）：桌上有面包和香蕉，观察窗外是谁来了。', audio: './assets/audio/story/hint-07.mp3' },
    { image: './assets/img/story/story-08.jpg', caption: 'My bag of apples.', original: true, text: 'My bag of apples.', cn: '我的那袋苹果。', hint: '故事原句：bag 和 apples 是重点词，注意 apples 的复数音。', audio: './assets/audio/sentences/my-bag-of-apples.mp3' },
    { image: './assets/img/story/story-09.jpg', caption: 'See you next time!', original: true, text: 'See you next time!', cn: '下次见！', hint: '故事原句：故事到这里结束，和森林里的朋友们说再见吧。', audio: './assets/audio/sentences/see-you-next-time.mp3' }
  ],
  checklist: [
    { id: 'letters', text: '认读 Aa–Dd 的字母名与字母音' },
    { id: 'writing', text: '按笔顺描写 Aa–Dd 的大小写' },
    { id: 'words', text: '点读 5 个核心词与 10 个拼读词' },
    { id: 'sentences', text: '跟读本课故事句子' },
    { id: 'chant', text: '跟唱 Aa–Dd 字母歌谣' },
    { id: 'story', text: '看图复述 Adam and the Bear' },
    { id: 'pronunciation', text: '完成个性化纠音练习' },
    { id: 'dubbing', text: '挑战配音小达人' },
    { id: 'explore', text: '完成互动探究任务' }
  ]
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const audioHost = $('#audio');
let audio = audioHost;
let playerState = { queue: [], index: -1, title: '', eyebrow: '', trigger: null, currentKey: '', quiz: false };

// GitHub Pages media range requests can stall on some mobile connections.
// Prefetch these small MP3s as Blobs, then play from memory whenever possible.
const audioBlobCache = new Map();
const audioBlobRequests = new Map();
const AUDIO_PREFETCH_CONCURRENCY = 3;
let audioPrefetchQueue = [];
let audioPrefetchActive = 0;
let playRequestId = 0;
let currentObjectUrl = '';

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

function createPlayIcon() {
  return '<span class="play-icon" aria-hidden="true"></span>';
}

function renderLetters() {
  const grid = $('#alphabetGrid');
  grid.innerHTML = COURSE.letters.map((item, index) => `
    <article class="letter-card">
      <button class="letter-main" type="button" data-audio="${item.audio}" data-title="${item.letter} 的字母名与字母音" data-key="letter-${item.letter}" aria-label="播放字母 ${item.letter} 的示范朗读">
        <div class="letter-head">
          <span class="letter-glyph">${item.letter}<small>${item.lower}</small></span>
          <span class="letter-audio-hint">${createPlayIcon()} 字母音</span>
          <span class="letter-index">0${index + 1} / 04</span>
        </div>
        <div class="letter-sounds"><span class="letter-sound">字母名 <b>${item.name}</b></span><span class="letter-sound">字母音 <b>${item.sound}</b></span></div>
        <div class="letter-example"><div><strong>${item.word}</strong><small>${item.wordCn}<br>例词点读</small></div><span class="letter-play" aria-hidden="true">${createPlayIcon()}</span></div>
      </button>
      <div class="letter-extra">
        <span>教材补充例词</span>
        <p>${item.extras.map((extra, extraIndex) => `${extraIndex ? '<span class="extra-separator" aria-hidden="true">·</span>' : ''}<button class="extra-word" type="button" data-audio="${extra.audio}" data-title="${extra.word} · ${extra.cn}" data-key="phonics-${extra.word.toLowerCase()}" aria-label="播放单词 ${extra.word}"><b>${extra.word}</b> ${extra.cn}</button>`).join('')}</p>
      </div>
    </article>`).join('');
}
function renderCoreWords() {
  const grid = $('#coreWordGrid');
  grid.innerHTML = COURSE.coreWords.map((word) => `
    <button class="core-word-card" type="button" data-audio="${word.audio}" data-title="${word.en} · ${word.cn}" data-key="word-${word.id}" aria-label="播放单词 ${word.en}">
      <img src="${word.image}" width="180" height="180" alt="${word.cn} ${word.en} 的插画" loading="lazy">
      <div class="word-card-copy"><div class="word-card-head"><strong>${word.en}</strong><span aria-hidden="true">${createPlayIcon()}</span></div><p class="phonetic">${word.phonetic}</p><p class="word-cn">${word.cn}</p></div>
    </button>`).join('');
}

function renderPhonics() {
  const grid = $('#phonicsGrid');
  grid.innerHTML = COURSE.phonicsWords.map((word) => `
    <button class="phonic-word" type="button" data-audio="${word.audio}" data-title="${word.en} · ${word.cn}" data-key="phonics-${word.en.toLowerCase()}" aria-label="播放单词 ${word.en}">
      <strong>${word.en.replace(/[aeiou]+/gi, (match) => `<i>${match}</i>`)}</strong><span>${word.phonetic} · ${word.cn}</span><b aria-hidden="true">${createPlayIcon()}</b>
    </button>`).join('');
}

function renderSentences() {
  $('#sentenceIntro').innerHTML = COURSE.introSentences.map((sentence) => `
    <button class="sentence-card" type="button" data-audio="${sentence.audio}" data-title="自我介绍 · ${sentence.text.replace(/<[^>]+>/g, '')}" data-key="sentence-${sentence.id}" aria-label="播放句子 ${sentence.text.replace(/<[^>]+>/g, '')}">
      <span>${sentence.tag}</span><p>${sentence.text}</p><small>${sentence.cn}</small><i class="mini-play" aria-hidden="true">${createPlayIcon()}</i>
    </button>`).join('');
  $('#sentenceStory').innerHTML = COURSE.storySentences.map((sentence) => `
    <button class="story-line" type="button" data-audio="${sentence.audio}" data-title="${sentence.text}" data-key="sentence-${sentence.id}" aria-label="播放句子 ${sentence.text}">
      <p>${sentence.text}</p><span>${sentence.tag} · ${sentence.cn}</span><i class="line-play" aria-hidden="true">${createPlayIcon()}</i>
    </button>`).join('');
}

function renderChants() {
  $('#chantGrid').innerHTML = COURSE.chants.map((chant) => `
    <button class="chant-card" type="button" data-audio="${chant.audio}" data-title="字母歌谣 ${chant.letter}" data-key="chant-${chant.id}" data-letter="${chant.letter}" aria-label="播放字母 ${chant.letter} 的歌谣">
      <div class="chant-head"><span>CHANT ${chant.id.toUpperCase()}</span><div><span class="chant-tag">跟唱</span></div></div>
      <p>${chant.lines[0]}<br><span>${chant.lines[1]}</span></p>
      <span class="chant-action">${createPlayIcon()} 点一下，跟着节奏唱</span>
    </button>`).join('');
}

function renderLessonMap() {
  const items = [
    ['01', 'Aa–Dd', '字母拼读', '字母名 · 字母音 · 书写', '#letters'],
    ['02', 'Words', '森林词汇', '5 个核心词 · 10 个拼读词', '#words'],
    ['03', 'Sentences', '情景句型', '自我介绍 · 故事表达', '#sentences'],
    ['04', 'Chant', '字母歌谣', '节奏跟读 · 四首连播', '#chants'],
    ['05', 'Story', '故事绘本', '9 页看图 · 原句跟读', '#story'],
    ['06', 'Practice', '练习清单', '听音选词 · 学习打卡', '#practice']
  ];
  $('#lessonMap').innerHTML = items.map(([number, en, title, detail, href]) => `
    <a class="map-card" href="${href}" data-number="${number}"><div class="map-top"><span>${en}</span><span class="map-arrow" aria-hidden="true">↗</span></div><div class="map-copy"><h3>${title}</h3><p>${detail}</p></div></a>`).join('');
}

function renderChecklist() {
  const progress = loadProgress();
  $('#checklist').innerHTML = COURSE.checklist.map((item) => `
    <li class="${progress.includes(item.id) ? 'is-done' : ''}"><input id="check-${item.id}" type="checkbox" data-check="${item.id}" ${progress.includes(item.id) ? 'checked' : ''}><label for="check-${item.id}">${item.text}</label></li>`).join('');
}

function loadProgress() {
  try {
    const value = JSON.parse(localStorage.getItem('xiaoyuan-lesson1-progress') || '[]');
    return Array.isArray(value) ? value : [];
  } catch (error) {
    return [];
  }
}

function saveProgress(value) {
  try { localStorage.setItem('xiaoyuan-lesson1-progress', JSON.stringify(value)); } catch (error) {}
}

function updateProgress() {
  const done = loadProgress().filter((id) => COURSE.checklist.some((item) => item.id === id)).length;
  const total = COURSE.checklist.length;
  const percent = Math.round((done / total) * 100);
  $('#progressPercent').textContent = percent;
  $('#progressDone').textContent = done;
  $('#progressTotal').textContent = total;
  $('#progressBar').style.width = percent + '%';
  $('.progress-track').setAttribute('aria-valuenow', percent);
  $$('#checklist li').forEach((item) => {
    const input = $('input', item);
    item.classList.toggle('is-done', input.checked);
  });
}

function resetProgress() {
  saveProgress([]);
  $$('#checklist input').forEach((input) => { input.checked = false; });
  updateProgress();
  toast('学习进度已清空');
}

function renderStory() {
  const dots = $('#storyDots');
  dots.innerHTML = COURSE.story.map((item, index) => `<button type="button" role="tab" aria-label="第 ${index + 1} 页" aria-selected="${index === 0}" data-story-index="${index}"></button>`).join('');
  setStory(0);
}

let storyIndex = 0;

function setStory(index, play = false) {
  storyIndex = (index + COURSE.story.length) % COURSE.story.length;
  const item = COURSE.story[storyIndex];
  const frame = $('.story-frame');
  frame.classList.add('is-switching');
  window.setTimeout(() => {
    $('#storyImage').src = item.image;
    $('#storyImage').alt = item.caption;
    frame.classList.remove('is-switching');
  }, 110);
  $('#storyCaption').innerHTML = `<span>${String(storyIndex + 1).padStart(2, '0')} / ${String(COURSE.story.length).padStart(2, '0')}</span>${escapeHtml(item.caption)}`;
  $('#storyText').textContent = item.text;
  $('#storyTranslation').textContent = item.cn;
  $('#storyHint').textContent = item.hint;
  $('#storyOriginalLabel').textContent = item.original ? '故事原句' : '看图提示 · AI 导读（非课件原文）';
  $('#storyOriginalLabel').classList.toggle('is-hint', !item.original);
  $$('#storyDots button').forEach((dot, dotIndex) => dot.setAttribute('aria-selected', String(dotIndex === storyIndex)));
  if (play) {
    playTrack({ audio: item.audio, title: item.text, eyebrow: `STORY · ${storyIndex + 1} / ${COURSE.story.length}`, key: `story-${storyIndex}`, trigger: $('#storyAudioButton') });
  }
}

function getPlaylist(name) {
  if (name === 'letters') {
    return COURSE.letters.map((item) => ({ audio: item.audio, title: `${item.letter} · 字母名与字母音`, eyebrow: 'LETTERS', key: `letter-${item.letter}`, trigger: $(`[data-key="letter-${item.letter}"]`) }));
  }
  if (name === 'words') {
    return [...COURSE.coreWords.map((item) => ({ audio: item.audio, title: `${item.en} · ${item.cn}`, eyebrow: 'WORDS', key: `word-${item.id}`, trigger: $(`[data-key="word-${item.id}"]`) })),
      ...COURSE.phonicsWords.map((item) => ({ audio: item.audio, title: `${item.en} · ${item.cn}`, eyebrow: 'PHONICS', key: `phonics-${item.en.toLowerCase()}`, trigger: $(`[data-key="phonics-${item.en.toLowerCase()}"]`) }))];
  }
  if (name === 'sentences') {
    return [...COURSE.introSentences.map((item) => ({ audio: item.audio, title: item.text.replace(/<[^>]+>/g, ''), eyebrow: 'SENTENCES', key: `sentence-${item.id}`, trigger: $(`[data-key="sentence-${item.id}"]`) })),
      ...COURSE.storySentences.map((item) => ({ audio: item.audio, title: item.text, eyebrow: 'STORY LINES', key: `sentence-${item.id}`, trigger: $(`[data-key="sentence-${item.id}"]`) }))];
  }
  if (name === 'chants') {
    return COURSE.chants.map((item) => ({ audio: item.audio, title: `字母歌谣 ${item.letter}`, eyebrow: 'CHANT', key: `chant-${item.id}`, trigger: $(`[data-key="chant-${item.id}"]`) }));
  }
  if (name === 'story') {
    return COURSE.story.map((item, index) => ({ audio: item.audio, title: item.text, eyebrow: `${item.original ? 'STORY LINE' : 'STORY HINT'} · ${index + 1} / ${COURSE.story.length}`, key: `story-${index}`, trigger: index === storyIndex ? $('#storyAudioButton') : null }));
  }
  return [];
}

function normalizeAudioUrl(path) {
  return new URL(path, document.baseURI).href;
}

function collectAudioUrls() {
  const paths = $$('[data-audio]').map((element) => element.dataset.audio);
  COURSE.story.forEach((item) => paths.push(item.audio));
  return Array.from(new Set(paths.filter(Boolean).map(normalizeAudioUrl)));
}

function fetchAudioBlob(url) {
  if (audioBlobCache.has(url)) { return Promise.resolve(audioBlobCache.get(url)); }
  if (audioBlobRequests.has(url)) { return audioBlobRequests.get(url); }

  const request = fetch(url, { cache: 'force-cache' }).then((response) => {
    if (!response.ok) { throw new Error('Audio request failed: ' + response.status); }
    return response.blob();
  }).then((blob) => {
    if (!blob.size) { throw new Error('Empty audio file'); }
    audioBlobCache.set(url, blob);
    return blob;
  }).finally(() => {
    audioBlobRequests.delete(url);
  });

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
      window.setTimeout(pumpAudioPrefetch, 90);
    });
  }
}

function queueAudioPrefetch(urls, priority = false) {
  const pending = new Set(audioPrefetchQueue);
  urls.map(normalizeAudioUrl).forEach((url) => {
    if (!audioBlobCache.has(url) && !audioBlobRequests.has(url) && !pending.has(url)) {
      if (priority) { audioPrefetchQueue.unshift(url); } else { audioPrefetchQueue.push(url); }
      pending.add(url);
    }
  });
  pumpAudioPrefetch();
}

function scheduleAudioPrefetch() {
  const urls = collectAudioUrls();
  window.requestIdleCallback
    ? window.requestIdleCallback(() => queueAudioPrefetch(urls), { timeout: 1200 })
    : window.setTimeout(() => queueAudioPrefetch(urls), 350);
}

function disposeAudioSource() {
  if (!audio) { return; }
  audio.pause();
  audio.removeAttribute('src');
  audio.load();
  if (currentObjectUrl) {
    URL.revokeObjectURL(currentObjectUrl);
    currentObjectUrl = '';
  }
}

function mountAudioSource(source, token, objectUrl = '') {
  if (token !== playRequestId) { return null; }
  disposeAudioSource();
  currentObjectUrl = objectUrl;
  audio.src = source;
  audio.load();
  return audio;
}

function attemptPlayback(token) {
  if (token !== playRequestId) { return; }
  const playback = audio.play();
  if (!playback) { return; }
  playback.catch(() => {
    window.setTimeout(() => {
      if (token === playRequestId && audio.paused) {
        toast('音频正在准备，请稍候再点一次播放按钮');
      }
    }, 2600);
  });
}

function bindAudioEvents(element) {
  element.addEventListener('play', () => { updatePauseButton(); if (playerState.trigger) { playerState.trigger.classList.add('is-playing'); } });
  element.addEventListener('pause', updatePauseButton);
  element.addEventListener('timeupdate', updateProgressBar);
  element.addEventListener('ended', onAudioEnded);
  element.addEventListener('error', () => {
    if (element !== audio || !element.currentSrc) { return; }
    if (audioBlobRequests.has(normalizeAudioUrl(element.currentSrc)) || audioBlobCache.has(normalizeAudioUrl(element.currentSrc))) { return; }
    if (playerState.currentKey) { toast('音频暂时没有加载成功，请再点一次'); }
  });
}

function onAudioEnded() {
  clearPlayingHighlights();
  if (playerState.quiz) {
    playerState.queue = [];
    playerState.index = -1;
    updatePauseButton();
    return;
  }
  if (!playerState.queue.length) { updatePauseButton(); return; }
  if (playerState.index < playerState.queue.length - 1) { playTrack(playerState.queue[playerState.index + 1], playerState.queue, playerState.index + 1); }
  else { playerState.queue = []; playerState.index = -1; updatePauseButton(); }
}

function playTrack(track, queue = null, index = null) {
  if (!track) { return; }
  const storyMatch = /^story-(\d+)$/.exec(track.key || '');
  if (storyMatch) {
    const nextStory = Number(storyMatch[1]);
    if (nextStory !== storyIndex) { setStory(nextStory, false); }
  }
  if (queue) { playerState.queue = queue; playerState.index = index == null ? 0 : index; }
  else if (!track.key || !playerState.queue.some((item) => item.key === track.key)) { playerState.queue = [track]; playerState.index = 0; }
  else { playerState.index = playerState.queue.findIndex((item) => item.key === track.key); }
  playerState.title = track.title;
  playerState.eyebrow = track.eyebrow || 'NOW PLAYING';
  playerState.trigger = track.trigger || null;
  playerState.currentKey = track.key || '';
  playerState.quiz = Boolean(track.quiz);
  const token = ++playRequestId;
  const sourceUrl = normalizeAudioUrl(track.audio);
  const cachedBlob = audioBlobCache.get(sourceUrl);

  if (cachedBlob) {
    const nextUrl = URL.createObjectURL(cachedBlob);
    mountAudioSource(nextUrl, token, nextUrl);
  } else {
    mountAudioSource(sourceUrl, token);
    queueAudioPrefetch([sourceUrl], true);
    fetchAudioBlob(sourceUrl).then((blob) => {
      if (token !== playRequestId || audio.ended) { return; }
      // Only replace a fallback that has not actually started. If the direct
      // request is already playing, leave it alone and keep the Blob for later.
      if (!audio.paused && audio.currentTime > 0) { return; }
      const nextUrl = URL.createObjectURL(blob);
      const next = mountAudioSource(nextUrl, token, nextUrl);
      if (next) { attemptPlayback(token); }
    }).catch(() => {
      if (token === playRequestId) { toast('音频暂时没有加载成功，请检查网络后重试'); }
    });
  }
  attemptPlayback(token);
  updatePlayer(true);
  clearPlayingHighlights();
  if (track.trigger) { track.trigger.classList.add('is-playing'); }
  $$('.section-play').forEach((button) => {
    if (button.dataset.playlist === (queue ? getPlaylistName(track.key) : '')) { button.classList.add('is-playing'); }
  });
}

function getPlaylistName(key) {
  if (!key) { return ''; }
  if (key.startsWith('letter-')) { return 'letters'; }
  if (key.startsWith('word-') || key.startsWith('phonics-')) { return 'words'; }
  if (key.startsWith('sentence-')) { return 'sentences'; }
  if (key.startsWith('chant-')) { return 'chants'; }
  if (key.startsWith('story-')) { return 'story'; }
  return '';
}

function clearPlayingHighlights() {
  $$('.is-playing').forEach((item) => item.classList.remove('is-playing'));
  $$('.section-play').forEach((item) => item.classList.remove('is-playing'));
}

function updatePlayer(forceShow = false) {
  const bar = $('#playerBar');
  const title = $('#playerTitle');
  const eyebrow = $('#playerEyebrow');
  if (forceShow || playerState.title) { bar.classList.add('is-visible'); }
  title.textContent = playerState.title || '选择一段内容开始点读';
  eyebrow.textContent = playerState.eyebrow || 'NOW PLAYING';
  updatePauseButton();
  updateProgressBar();
}

function updatePauseButton() {
  const button = $('#playerToggle');
  button.innerHTML = audio.paused ? '<span class="play-icon" aria-hidden="true"></span>' : '<span class="pause-icon" aria-hidden="true"></span>';
  button.setAttribute('aria-label', audio.paused ? '继续播放' : '暂停');
}

function updateProgressBar() {
  const progress = audio.duration && Number.isFinite(audio.duration) ? (audio.currentTime / audio.duration) * 100 : 0;
  $('#playerProgress').style.width = progress + '%';
}

function playAdjacent(direction) {
  if (!playerState.queue.length) { return; }
  const nextIndex = (playerState.index + direction + playerState.queue.length) % playerState.queue.length;
  playTrack(playerState.queue[nextIndex], playerState.queue, nextIndex);
}

function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('is-visible');
  window.clearTimeout(toast.timer);
  toast.timer = window.setTimeout(() => element.classList.remove('is-visible'), 1900);
}

function openMobileMenu(open) {
  const menu = $('#mobileMenu');
  const button = $('.menu-button');
  menu.hidden = !open;
  button.setAttribute('aria-expanded', String(open));
}

function initObservers() {
  const navLinks = $$('.section-nav a');
  const sections = navLinks.map((link) => ($(link.getAttribute('href')))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.toggle('is-active', link.getAttribute('href') === '#' + entry.target.id));
        }
      });
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((section) => observer.observe(section));
  }
  window.addEventListener('scroll', () => $('.site-header').classList.toggle('is-scrolled', window.scrollY > 8), { passive: true });
}

function initQuiz() {
  const rounds = [
    { answer: 'cat', audio: './assets/audio/words/cat.mp3', options: ['cat', 'bat', 'crab'] },
    { answer: 'fish', audio: './assets/audio/words/fish.mp3', options: ['fish', 'dog', 'duck'] },
    { answer: 'bear', audio: './assets/audio/words/bear.mp3', options: ['bear', 'apple', 'bag'] }
  ];
  let round = 0;
  let answered = false;
  const options = $('#quizOptions');
  const feedback = $('#quizFeedback');
  function renderRound() {
    answered = false;
    $('#quizIndex').textContent = round + 1;
    options.innerHTML = rounds[round].options.map((option) => `<button class="quiz-option" type="button" data-answer="${option}">${option}</button>`).join('');
    feedback.textContent = round === 0 ? '准备好了吗？点上方按钮播放。' : '听一听，选出你听到的单词。';
  }
  $('#quizAudio').addEventListener('click', () => {
    playTrack({ audio: rounds[round].audio, title: `听音选词 · 第 ${round + 1} 题`, eyebrow: 'QUICK CHECK', key: `quiz-${round}`, quiz: true });
  });
  options.addEventListener('click', (event) => {
    const button = event.target.closest('[data-answer]');
    if (!button || answered) { return; }
    answered = true;
    const correct = button.dataset.answer === rounds[round].answer;
    button.classList.add(correct ? 'is-correct' : 'is-wrong');
    if (!correct) {
      const answerButton = $(`[data-answer="${rounds[round].answer}"]`, options);
      if (answerButton) { answerButton.classList.add('is-correct'); }
    }
    feedback.textContent = correct ? '答对啦，耳朵很灵！' : `再听一次。正确答案是 ${rounds[round].answer}。`;
    window.setTimeout(() => {
      round = (round + 1) % rounds.length;
      renderRound();
    }, 1700);
  });
  renderRound();
}

function initServiceWorker() {
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.register('./sw.js', { updateViaCache: 'none' }).catch(() => {});
  }
}

function init() {
  renderLessonMap();
  renderLetters();
  renderCoreWords();
  renderPhonics();
  renderSentences();
  renderChants();
  renderStory();
  renderChecklist();
  updateProgress();
  initQuiz();
  initObservers();
  initServiceWorker();
  scheduleAudioPrefetch();

  document.addEventListener('click', (event) => {
    const audioTrigger = event.target.closest('[data-audio]');
    if (audioTrigger) {
      const playlistName = getPlaylistName(audioTrigger.dataset.key || '');
      const wordsPlaylist = playlistName === 'words' ? getPlaylist('words') : null;
      const trackQueue = wordsPlaylist && wordsPlaylist.some((track) => track.key === audioTrigger.dataset.key) ? wordsPlaylist : null;
      const index = trackQueue ? trackQueue.findIndex((track) => track.key === audioTrigger.dataset.key) : -1;
      playTrack({ audio: audioTrigger.dataset.audio, title: audioTrigger.dataset.title, eyebrow: playlistName ? playlistName.toUpperCase() : 'NOW PLAYING', key: audioTrigger.dataset.key, trigger: audioTrigger }, trackQueue && index >= 0 ? trackQueue : null, index >= 0 ? index : null);
      return;
    }
    const playButton = event.target.closest('[data-playlist]');
    if (playButton) {
      const name = playButton.dataset.playlist;
      let queue = getPlaylist(name);
      if (name === 'story') {
        setStory(storyIndex, false);
        queue = getPlaylist('story');
      }
      if (!queue.length) { return; }
      playTrack(queue[0], queue, 0);
    }
  });

  $('#storyAudioButton').addEventListener('click', () => {
    const item = COURSE.story[storyIndex];
    playTrack({ audio: item.audio, title: item.text, eyebrow: `STORY · ${storyIndex + 1} / ${COURSE.story.length}`, key: `story-${storyIndex}`, trigger: $('#storyAudioButton') });
  });
  $('#storyPrev').addEventListener('click', () => setStory(storyIndex - 1, false));
  $('#storyNext').addEventListener('click', () => setStory(storyIndex + 1, false));
  $('#storyDots').addEventListener('click', (event) => {
    const button = event.target.closest('[data-story-index]');
    if (button) { setStory(Number(button.dataset.storyIndex), false); }
  });
  $('#playerToggle').addEventListener('click', () => { if (audio.paused) { audio.play().catch(() => {}); } else { audio.pause(); } });
  $('#playerPrev').addEventListener('click', () => playAdjacent(-1));
  $('#playerNext').addEventListener('click', () => playAdjacent(1));
  $('#playerClose').addEventListener('click', () => { playRequestId += 1; audio.pause(); $('#playerBar').classList.remove('is-visible'); clearPlayingHighlights(); });
  bindAudioEvents(audioHost);
  $('.menu-button').addEventListener('click', () => openMobileMenu($('#mobileMenu').hidden));
  $('#mobileMenu').addEventListener('click', (event) => { if (event.target.closest('a')) { openMobileMenu(false); } });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') { openMobileMenu(false); } });
  $('#checklist').addEventListener('change', (event) => {
    const input = event.target.closest('[data-check]');
    if (!input) { return; }
    const progress = new Set(loadProgress());
    if (input.checked) { progress.add(input.dataset.check); } else { progress.delete(input.dataset.check); }
    saveProgress(Array.from(progress));
    updateProgress();
  });
  $('#resetProgress').addEventListener('click', resetProgress);
  $('#resetProgressBottom').addEventListener('click', resetProgress);
}

document.addEventListener('DOMContentLoaded', init);

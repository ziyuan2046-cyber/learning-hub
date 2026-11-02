'use strict';

// 后续课程直接复制 LESSON_01 的数据结构，替换 id、lesson、标题和内容；
// 将 available 改为 true，即可在课程目录中自动开放。

const LESSON_01 = {
  id: 'lesson-01-adam-and-the-bear',
  lesson: 1,
  title: 'Adam and the Bear',
  titleCn: '亚当和大熊',
  description: '跟着 Adam 走进森林，认读 Aa–Dd，听懂故事，大声读出来。',
  available: true,
  subtitle: 'Aa–Dd',
  level: '双新阅读表达 · Level 2',
  coverImage: './assets/img/hero/course-overview.jpg',
  letters: [
    {
      letter: 'A', lower: 'a', name: '/eɪ/', sound: '/æ/', word: 'apple', wordCn: '苹果',
      audio: './assets/audio/alphabet/a.mp3', wordAudio: './assets/audio/words/apple.mp3',
  guides: [{ image: './assets/img/alphabet/alphabet-writing.jpg', caption: 'Aa–Dd 字母书写总览', alt: 'Aa 到 Dd 字母书写示范' }, { image: './assets/img/alphabet/letter-strokes.jpg', caption: '字母笔顺与占格', alt: 'A 到 D 大小写字母笔顺图' }],
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
    { id: 'a', letter: 'A', lines: ['A, A, A, a, a, a.', 'Apple, apple, a, a, a.'], cn: 'A、A、A，小写 a；苹果，苹果，a 的发音。', audio: './assets/audio/chants/chant-1.mp3' },
    { id: 'b', letter: 'B', lines: ['B, B, B, b, b, b.', 'Bear, bear, b, b, b.'], cn: 'B、B、B，小写 b；熊，熊，b 的发音。', audio: './assets/audio/chants/chant-2.mp3' },
    { id: 'c', letter: 'C', lines: ['C, C, C, c, c, c.', 'Cat, cat, c, c, c.'], cn: 'C、C、C，小写 c；猫，猫，c 的发音。', audio: './assets/audio/chants/chant-3.mp3' },
    { id: 'd', letter: 'D', lines: ['D, D, D, d, d, d.', 'Duck, duck, d, d, d.'], cn: 'D、D、D，小写 d；鸭子，鸭子，d 的发音。', audio: './assets/audio/chants/chant-4.mp3' }
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

window.XIAOYUAN_COURSES = [
  LESSON_01,
  { id: 'lesson-02', lesson: 2, title: 'Lesson 02', titleCn: '课程待补充', available: false },
  { id: 'lesson-03', lesson: 3, title: 'Lesson 03', titleCn: '课程待补充', available: false },
  { id: 'lesson-04', lesson: 4, title: 'Lesson 04', titleCn: '课程待补充', available: false },
  { id: 'lesson-05', lesson: 5, title: 'Lesson 05', titleCn: '课程待补充', available: false },
  { id: 'lesson-06', lesson: 6, title: 'Lesson 06', titleCn: '课程待补充', available: false },
  { id: 'lesson-07', lesson: 7, title: 'Lesson 07', titleCn: '课程待补充', available: false },
  { id: 'lesson-08', lesson: 8, title: 'Lesson 08', titleCn: '课程待补充', available: false },
  { id: 'lesson-09', lesson: 9, title: 'Lesson 09', titleCn: '课程待补充', available: false },
  { id: 'lesson-10', lesson: 10, title: 'Lesson 10', titleCn: '课程待补充', available: false },
  { id: 'lesson-11', lesson: 11, title: 'Lesson 11', titleCn: '课程待补充', available: false },
  { id: 'lesson-12', lesson: 12, title: 'Lesson 12', titleCn: '课程待补充', available: false }
];

"use strict";
// Two learning tracks. Only reading positions 1-7 are confirmed by the supplied screenshot.
window.XIAOYUAN_COURSES = [
  {
    "id": "lesson-01-adam-and-the-bear",
    "lesson": 1,
    "title": "Adam and the Bear",
    "titleCn": "亚当和大熊",
    "available": true,
    "subtitle": "Aa–Dd",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Aa–Dd、本课词句与《亚当和大熊》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-01/p001.webp",
    "bookNumber": 1,
    "letters": [
      {
        "letter": "A",
        "lower": "a",
        "name": "/eɪ/",
        "sound": "/æ/",
        "word": "apple",
        "wordCn": "苹果",
        "audio": "./assets/audio/generated/559aead08264d5795d39.mp3",
        "wordAudio": "./assets/audio/words/apple.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "B",
        "lower": "b",
        "name": "/biː/",
        "sound": "/b/",
        "word": "bear",
        "wordCn": "熊",
        "audio": "./assets/audio/generated/df7e70e5021544f4834b.mp3",
        "wordAudio": "./assets/audio/words/bear.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "C",
        "lower": "c",
        "name": "/siː/",
        "sound": "/k/",
        "word": "cat",
        "wordCn": "猫",
        "audio": "./assets/audio/generated/6b23c0d5f35d1b11f9b6.mp3",
        "wordAudio": "./assets/audio/words/cat.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "D",
        "lower": "d",
        "name": "/diː/",
        "sound": "/d/",
        "word": "duck",
        "wordCn": "鸭子",
        "audio": "./assets/audio/generated/3f39d5c348e5b79d06e8.mp3",
        "wordAudio": "./assets/audio/words/duck.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "cat",
        "en": "cat",
        "phonetic": "/kæt/",
        "cn": "猫",
        "image": "./assets/img/words/cat.jpg",
        "audio": "./assets/audio/words/cat.mp3"
      },
      {
        "id": "dog",
        "en": "dog",
        "phonetic": "/dɒɡ/",
        "cn": "狗",
        "image": "./assets/img/words/dog.jpg",
        "audio": "./assets/audio/words/dog.mp3"
      },
      {
        "id": "fish",
        "en": "fish",
        "phonetic": "/fɪʃ/",
        "cn": "鱼",
        "image": "./assets/img/words/fish.jpg",
        "audio": "./assets/audio/words/fish.mp3"
      },
      {
        "id": "crab",
        "en": "crab",
        "phonetic": "/kræb/",
        "cn": "螃蟹",
        "image": "./assets/img/words/crab.jpg",
        "audio": "./assets/audio/words/crab.mp3"
      },
      {
        "id": "bat",
        "en": "bat",
        "phonetic": "/bæt/",
        "cn": "蝙蝠",
        "image": "./assets/img/words/bat.jpg",
        "audio": "./assets/audio/words/bat.mp3"
      }
    ],
    "phonicsWords": [
      {
        "en": "apple",
        "phonetic": "/ˈæpəl/",
        "cn": "苹果",
        "audio": "./assets/audio/words/apple.mp3"
      },
      {
        "en": "bear",
        "phonetic": "/beə(r)/",
        "cn": "熊",
        "audio": "./assets/audio/words/bear.mp3"
      },
      {
        "en": "duck",
        "phonetic": "/dʌk/",
        "cn": "鸭子",
        "audio": "./assets/audio/words/duck.mp3"
      },
      {
        "en": "bad",
        "phonetic": "/bæd/",
        "cn": "坏的",
        "audio": "./assets/audio/words/bad.mp3"
      },
      {
        "en": "cab",
        "phonetic": "/kæb/",
        "cn": "出租车",
        "audio": "./assets/audio/words/cab.mp3"
      },
      {
        "en": "dab",
        "phonetic": "/dæb/",
        "cn": "轻拍",
        "audio": "./assets/audio/words/dab.mp3"
      },
      {
        "en": "dad",
        "phonetic": "/dæd/",
        "cn": "爸爸",
        "audio": "./assets/audio/words/dad.mp3"
      },
      {
        "en": "ax",
        "phonetic": "/æks/",
        "cn": "斧头",
        "audio": "./assets/audio/words/ax.mp3"
      },
      {
        "en": "bag",
        "phonetic": "/bæɡ/",
        "cn": "包",
        "audio": "./assets/audio/words/bag.mp3"
      },
      {
        "en": "Adam",
        "phonetic": "/ˈædəm/",
        "cn": "亚当",
        "audio": "./assets/audio/words/adam.mp3"
      },
      {
        "id": "brown",
        "en": "brown",
        "cn": "棕色的",
        "audio": "./assets/audio/generated/5eb67f9f8409b9c3f739.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-01/p006.webp"
      },
      {
        "id": "back",
        "en": "back",
        "cn": "回来",
        "audio": "./assets/audio/generated/3c482346f375027677fa.mp3",
        "audioType": "synthesized",
        "sourcePage": 13,
        "image": "./assets/library/story-01/p013.webp"
      },
      {
        "en": "alligator",
        "cn": "短吻鳄",
        "audio": "./assets/audio/words/alligator.mp3"
      },
      {
        "en": "bee",
        "cn": "蜜蜂",
        "audio": "./assets/audio/words/bee.mp3"
      },
      {
        "en": "bread",
        "cn": "面包",
        "audio": "./assets/audio/words/bread.mp3"
      },
      {
        "en": "cow",
        "cn": "奶牛",
        "audio": "./assets/audio/words/cow.mp3"
      },
      {
        "en": "car",
        "cn": "汽车",
        "audio": "./assets/audio/words/car.mp3"
      },
      {
        "en": "card",
        "cn": "卡片",
        "audio": "./assets/audio/words/card.mp3"
      },
      {
        "en": "desk",
        "cn": "书桌",
        "audio": "./assets/audio/words/desk.mp3"
      },
      {
        "en": "dig",
        "cn": "挖",
        "audio": "./assets/audio/words/dig.mp3"
      }
    ],
    "introSentences": [
      {
        "id": "name",
        "text": "My name is <u>Adam</u>.",
        "cn": "我的名字是 Adam。",
        "tag": "替换示范",
        "audio": "./assets/audio/sentences/my-name-is-adam.mp3"
      },
      {
        "id": "from",
        "text": "I'm from <u>China</u>.",
        "cn": "我来自中国。",
        "tag": "替换示范",
        "audio": "./assets/audio/sentences/i-am-from-china.mp3"
      },
      {
        "id": "age",
        "text": "I'm <u>seven</u> years old.",
        "cn": "我七岁了。",
        "tag": "替换示范",
        "audio": "./assets/audio/sentences/i-am-seven-years-old.mp3"
      }
    ],
    "storySentences": [
      {
        "id": "book-1-line-1",
        "text": "Adam is picking apples.",
        "cn": "亚当正在摘苹果。",
        "audio": "./assets/audio/generated/d3c40bd0d96f768a1429.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-1-line-2",
        "text": "Big Brown Bear is picking apples.",
        "cn": "大棕熊正在摘苹果。",
        "audio": "./assets/audio/generated/3342d221879af442f8cb.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-1-line-3",
        "text": "Big Brown Bear sees Adam.",
        "cn": "大棕熊看见了亚当。",
        "audio": "./assets/audio/generated/8799d91b71f2652e84df.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-1-line-4",
        "text": "Adam sees Big Brown Bear.",
        "cn": "亚当看见了大棕熊。",
        "audio": "./assets/audio/sentences/adam-sees-big-brown-bear.mp3",
        "tag": "绘本第 9 页",
        "sourcePage": 9
      },
      {
        "id": "book-1-line-5",
        "text": "Adam runs and runs.",
        "cn": "亚当跑呀跑。",
        "audio": "./assets/audio/generated/83bee6a68630437085ff.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-1-line-6",
        "text": "Ah! A bear!",
        "cn": "啊！一头熊！",
        "audio": "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-1-line-7",
        "text": "Big Brown Bear runs and runs.",
        "cn": "大棕熊跑呀跑。",
        "audio": "./assets/audio/generated/91c2fcf35891ae71eab1.mp3",
        "tag": "绘本第 11 页",
        "sourcePage": 11
      },
      {
        "id": "book-1-line-8",
        "text": "Adam is back home.",
        "cn": "亚当回到家了。",
        "audio": "./assets/audio/generated/fe469f190f7585d25138.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-1-line-9",
        "text": "So is Big Brown Bear!",
        "cn": "大棕熊也来了！",
        "audio": "./assets/audio/generated/b4d31a60ad7863414ab5.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      },
      {
        "id": "book-1-line-10",
        "text": "My bag of apples!",
        "cn": "我的那袋苹果！",
        "audio": "./assets/audio/sentences/my-bag-of-apples.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      },
      {
        "id": "hello",
        "text": "Hello, bear!",
        "cn": "你好，熊！",
        "tag": "互动页 · 打招呼",
        "audio": "./assets/audio/sentences/hello-bear.mp3"
      },
      {
        "id": "bad",
        "text": "Bad, bad bear!",
        "cn": "坏熊，坏熊！",
        "tag": "故事原句",
        "audio": "./assets/audio/sentences/bad-bad-bear.mp3"
      },
      {
        "id": "what",
        "text": "What will happen?",
        "cn": "接下来会发生什么？",
        "tag": "故事原句",
        "audio": "./assets/audio/sentences/what-will-happen.mp3"
      },
      {
        "id": "see",
        "text": "See you next time!",
        "cn": "下次见！",
        "tag": "故事原句",
        "audio": "./assets/audio/sentences/see-you-next-time.mp3"
      }
    ],
    "chants": [
      {
        "id": "a",
        "letter": "A",
        "lines": [
          "A, A, A, a, a, a.",
          "Apple, apple, a, a, a."
        ],
        "cn": "字母 A；例词 apple，意思是“苹果”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/chants/chant-1.mp3",
        "synthesized": true
      },
      {
        "id": "b",
        "letter": "B",
        "lines": [
          "B, B, B, b, b, b.",
          "Bear, bear, b, b, b."
        ],
        "cn": "字母 B；例词 bear，意思是“熊”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/chants/chant-2.mp3",
        "synthesized": true
      },
      {
        "id": "c",
        "letter": "C",
        "lines": [
          "C, C, C, c, c, c.",
          "Cat, cat, c, c, c."
        ],
        "cn": "字母 C；例词 cat，意思是“猫”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/chants/chant-3.mp3",
        "synthesized": true
      },
      {
        "id": "d",
        "letter": "D",
        "lines": [
          "D, D, D, d, d, d.",
          "Duck, duck, d, d, d."
        ],
        "cn": "字母 D；例词 duck，意思是“鸭子”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/chants/chant-4.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Adam is picking apples.",
        "cn": "亚当正在摘苹果。",
        "audio": "./assets/audio/generated/d3c40bd0d96f768a1429.mp3",
        "lines": [
          {
            "text": "Adam is picking apples.",
            "cn": "亚当正在摘苹果。",
            "audio": "./assets/audio/generated/d3c40bd0d96f768a1429.mp3"
          }
        ],
        "image": "./assets/library/story-01/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Big Brown Bear is picking apples.",
        "cn": "大棕熊正在摘苹果。",
        "audio": "./assets/audio/generated/3342d221879af442f8cb.mp3",
        "lines": [
          {
            "text": "Big Brown Bear is picking apples.",
            "cn": "大棕熊正在摘苹果。",
            "audio": "./assets/audio/generated/3342d221879af442f8cb.mp3"
          }
        ],
        "image": "./assets/library/story-01/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Big Brown Bear sees Adam.",
        "cn": "大棕熊看见了亚当。",
        "audio": "./assets/audio/generated/8799d91b71f2652e84df.mp3",
        "lines": [
          {
            "text": "Big Brown Bear sees Adam.",
            "cn": "大棕熊看见了亚当。",
            "audio": "./assets/audio/generated/8799d91b71f2652e84df.mp3"
          }
        ],
        "image": "./assets/library/story-01/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Adam sees Big Brown Bear.",
        "cn": "亚当看见了大棕熊。",
        "audio": "./assets/audio/sentences/adam-sees-big-brown-bear.mp3",
        "lines": [
          {
            "text": "Adam sees Big Brown Bear.",
            "cn": "亚当看见了大棕熊。",
            "audio": "./assets/audio/sentences/adam-sees-big-brown-bear.mp3"
          }
        ],
        "image": "./assets/library/story-01/p009.webp",
        "caption": "绘本原页 9",
        "sourcePage": 9,
        "original": true
      },
      {
        "text": "Adam runs and runs.",
        "cn": "亚当跑呀跑。",
        "audio": "./assets/audio/generated/83bee6a68630437085ff.mp3",
        "lines": [
          {
            "text": "Adam runs and runs.",
            "cn": "亚当跑呀跑。",
            "audio": "./assets/audio/generated/83bee6a68630437085ff.mp3"
          }
        ],
        "image": "./assets/library/story-01/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ah! A bear!",
        "cn": "啊！一头熊！",
        "audio": "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3",
        "lines": [
          {
            "text": "Ah! A bear!",
            "cn": "啊！一头熊！",
            "audio": "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3"
          }
        ],
        "image": "./assets/library/story-01/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Big Brown Bear runs and runs.",
        "cn": "大棕熊跑呀跑。",
        "audio": "./assets/audio/generated/91c2fcf35891ae71eab1.mp3",
        "lines": [
          {
            "text": "Big Brown Bear runs and runs.",
            "cn": "大棕熊跑呀跑。",
            "audio": "./assets/audio/generated/91c2fcf35891ae71eab1.mp3"
          }
        ],
        "image": "./assets/library/story-01/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "Adam is back home.",
        "cn": "亚当回到家了。",
        "audio": "./assets/audio/generated/fe469f190f7585d25138.mp3",
        "lines": [
          {
            "text": "Adam is back home.",
            "cn": "亚当回到家了。",
            "audio": "./assets/audio/generated/fe469f190f7585d25138.mp3"
          }
        ],
        "image": "./assets/library/story-01/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "So is Big Brown Bear!",
        "cn": "大棕熊也来了！",
        "audio": "./assets/audio/generated/b4d31a60ad7863414ab5.mp3",
        "lines": [
          {
            "text": "So is Big Brown Bear!",
            "cn": "大棕熊也来了！",
            "audio": "./assets/audio/generated/b4d31a60ad7863414ab5.mp3"
          }
        ],
        "image": "./assets/library/story-01/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "My bag of apples!",
        "cn": "我的那袋苹果！",
        "audio": "./assets/audio/sentences/my-bag-of-apples.mp3",
        "lines": [
          {
            "text": "My bag of apples!",
            "cn": "我的那袋苹果！",
            "audio": "./assets/audio/sentences/my-bag-of-apples.mp3"
          }
        ],
        "image": "./assets/library/story-01/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 1,
        "fileName": "自然拼读课件\\001.pdf",
        "totalPages": 92,
        "pages": [
          {
            "page": 7,
            "image": "./assets/library/phonics-01/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/phonics-01/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/phonics-01/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/phonics-01/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/phonics-01/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/phonics-01/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-01/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-01/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-01/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-01/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-01/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-01/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-01/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-01/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-01/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-01/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-01/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-01/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-01/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-01/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-01/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-01/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-01/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-01/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-01/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-01/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-01/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-01/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-01/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-01/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-01/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-01/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-01/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-01/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-01/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-01/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-01/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-01/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-01/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-01/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-01/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-01/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-01/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-01/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-01/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-01/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-01/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-01/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-01/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-01/p056.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-01/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-01/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-01/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-01/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-01/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-01/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-01/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-01/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-01/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-01/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-01/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-01/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-01/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-01/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-01/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-01/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-01/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-01/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-01/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-01/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-01/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-01/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-01/p079.webp"
          },
          {
            "page": 80,
            "image": "./assets/library/phonics-01/p080.webp"
          },
          {
            "page": 81,
            "image": "./assets/library/phonics-01/p081.webp"
          },
          {
            "page": 82,
            "image": "./assets/library/phonics-01/p082.webp"
          },
          {
            "page": 83,
            "image": "./assets/library/phonics-01/p083.webp"
          },
          {
            "page": 84,
            "image": "./assets/library/phonics-01/p084.webp"
          }
        ],
        "title": "第 1 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 1,
        "fileName": "绘本\\001.pdf",
        "totalPages": 18,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-01/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-01/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-01/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-01/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-01/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-01/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-01/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-01/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-01/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-01/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-01/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-01/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-01/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-01/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-01/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-01/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-01/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-01/p018.webp"
          }
        ],
        "title": "Adam and the Bear · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Aa–Dd 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-02",
    "lesson": 2,
    "title": "Elephant's Friends",
    "titleCn": "大象的朋友们",
    "available": true,
    "subtitle": "Ee–Hh",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Ee–Hh、本课词句与《大象的朋友们》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-03/p001.webp",
    "bookNumber": 3,
    "letters": [
      {
        "letter": "E",
        "lower": "e",
        "name": "/iː/",
        "sound": "/e/",
        "word": "egg",
        "wordCn": "蛋",
        "audio": "./assets/audio/generated/a9f51566bd6705f7ea6a.mp3",
        "wordAudio": "./assets/audio/generated/34707c3f40dfa20c3902.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "F",
        "lower": "f",
        "name": "/ef/",
        "sound": "/f/",
        "word": "fox",
        "wordCn": "狐狸",
        "audio": "./assets/audio/generated/f67ab10ad4e4c53121b6.mp3",
        "wordAudio": "./assets/audio/generated/776cb326ab0cd5f0a974.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "G",
        "lower": "g",
        "name": "/dʒiː/",
        "sound": "/ɡ/",
        "word": "goat",
        "wordCn": "山羊",
        "audio": "./assets/audio/generated/333e0a1e27815d0ceee5.mp3",
        "wordAudio": "./assets/audio/generated/5480f08f35968440ebe8.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "H",
        "lower": "h",
        "name": "/eɪtʃ/",
        "sound": "/h/",
        "word": "hat",
        "wordCn": "帽子",
        "audio": "./assets/audio/generated/44bd7ae60f478fae1061.mp3",
        "wordAudio": "./assets/audio/generated/18e1dd392168f601d0e5.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "elephant",
        "en": "elephant",
        "cn": "大象",
        "audio": "./assets/audio/generated/cd08c4c4316df20d9c30.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "bird",
        "en": "bird",
        "cn": "鸟",
        "audio": "./assets/audio/generated/7a5179eecc0fe18760ba.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "duck",
        "en": "duck",
        "cn": "鸭子",
        "audio": "./assets/audio/words/duck.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "bed",
        "en": "bed",
        "cn": "床",
        "audio": "./assets/audio/generated/c5052532c2206140dfdc.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "beg",
        "en": "beg",
        "cn": "恳求",
        "audio": "./assets/audio/generated/e80f71a8d731192771d8.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fed",
        "en": "fed",
        "cn": "喂过（feed 的过去式）",
        "audio": "./assets/audio/generated/20e796c128096d229ba8.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "bad",
        "en": "bad",
        "cn": "坏的",
        "audio": "./assets/audio/words/bad.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "cab",
        "en": "cab",
        "cn": "出租车",
        "audio": "./assets/audio/words/cab.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "dab",
        "en": "dab",
        "cn": "轻拍",
        "audio": "./assets/audio/words/dab.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "dad",
        "en": "dad",
        "cn": "爸爸",
        "audio": "./assets/audio/words/dad.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "egg",
        "en": "egg",
        "cn": "蛋",
        "audio": "./assets/audio/generated/34707c3f40dfa20c3902.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-03/p004.webp"
      },
      {
        "id": "fan",
        "en": "fan",
        "cn": "扇风",
        "audio": "./assets/audio/generated/e29a7f31cac05abc97e1.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-03/p007.webp"
      },
      {
        "id": "fox",
        "en": "fox",
        "cn": "狐狸",
        "audio": "./assets/audio/generated/776cb326ab0cd5f0a974.mp3",
        "audioType": "synthesized",
        "sourcePage": 8,
        "image": "./assets/library/story-03/p008.webp"
      },
      {
        "id": "elk",
        "en": "elk",
        "cn": "麋鹿",
        "audio": "./assets/audio/generated/2f60f61a34244180b562.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-03/p011.webp"
      },
      {
        "id": "foot",
        "en": "foot",
        "cn": "脚",
        "audio": "./assets/audio/generated/22e4f6912a6980d6fd59.mp3",
        "audioType": "synthesized",
        "sourcePage": 12,
        "image": "./assets/library/story-03/p012.webp"
      }
    ],
    "introSentences": [
      {
        "id": "expression-1",
        "text": "It's an elephant.",
        "cn": "这是一头大象。",
        "audio": "./assets/audio/generated/deb2968cb22bdd76069d.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-2",
        "text": "It's a bird.",
        "cn": "这是一只鸟。",
        "audio": "./assets/audio/generated/1b0efc81d38594b6e858.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-3",
        "text": "It's a dog.",
        "cn": "这是一只狗。",
        "audio": "./assets/audio/generated/01c8728f571a2523fef5.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-4",
        "text": "It's a duck.",
        "cn": "这是一只鸭子。",
        "audio": "./assets/audio/generated/dee35e3af2252f7db0b8.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-5",
        "text": "It's a cat.",
        "cn": "这是一只猫。",
        "audio": "./assets/audio/generated/64814a3cefde95feb00e.mp3",
        "tag": "课件句型与替换练习"
      }
    ],
    "storySentences": [
      {
        "id": "book-3-line-1",
        "text": "Ella the elephant finds an egg.",
        "cn": "大象艾拉发现了一枚蛋。",
        "audio": "./assets/audio/generated/756e209387035ff82a50.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-3-line-2",
        "text": "\"Is it coming out?\" say the friends.",
        "cn": "朋友们问：它要出来了吗？",
        "audio": "./assets/audio/generated/601d52aa953de7091cff.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-3-line-3",
        "text": "Brrr!",
        "cn": "哆嗦的声音：哔——！",
        "audio": "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-3-line-4",
        "text": "\"I can fan it with my ears,\" says Finn the fox.",
        "cn": "狐狸芬恩说：我可以用耳朵给它扇风。",
        "audio": "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3",
        "tag": "绘本第 6 页",
        "sourcePage": 6
      },
      {
        "id": "book-3-line-5",
        "text": "\"No!\" says Ed the elk.",
        "cn": "麋鹿埃德说：不行！",
        "audio": "./assets/audio/generated/7186578fe1d9e4370df0.mp3",
        "tag": "绘本第 9 页",
        "sourcePage": 9
      },
      {
        "id": "book-3-line-6",
        "text": "\"I can pat it with my foot,\" he says.",
        "cn": "他说：我可以用脚轻拍它。",
        "audio": "./assets/audio/generated/dc0fe3ec31059921b92e.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-3-line-7",
        "text": "\"No!\" says Ella the elephant.",
        "cn": "大象艾拉说：不行！",
        "audio": "./assets/audio/generated/58d20a54efb02fb29f56.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-3-line-8",
        "text": "\"I can sit on it,\" she says.",
        "cn": "她说：我可以坐在它上面。",
        "audio": "./assets/audio/generated/26a157ae4141d9ea4391.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-3-line-9",
        "text": "\"No!\" says the egg.",
        "cn": "蛋说：不行！",
        "audio": "./assets/audio/generated/587165d5115ca5b7d46f.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      }
    ],
    "chants": [
      {
        "id": "e",
        "letter": "E",
        "lines": [
          "E, E, E, e, e, e.",
          "Egg, egg, e, e, e."
        ],
        "cn": "字母 E；例词 egg，意思是“蛋”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/d069d36636d217f91d7e.mp3",
        "synthesized": true
      },
      {
        "id": "f",
        "letter": "F",
        "lines": [
          "F, F, F, f, f, f.",
          "Fox, fox, f, f, f."
        ],
        "cn": "字母 F；例词 fox，意思是“狐狸”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/df788f66f5b206e8ff6c.mp3",
        "synthesized": true
      },
      {
        "id": "g",
        "letter": "G",
        "lines": [
          "G, G, G, g, g, g.",
          "Goat, goat, g, g, g."
        ],
        "cn": "字母 G；例词 goat，意思是“山羊”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/84358da443ac13ce1b85.mp3",
        "synthesized": true
      },
      {
        "id": "h",
        "letter": "H",
        "lines": [
          "H, H, H, h, h, h.",
          "Hat, hat, h, h, h."
        ],
        "cn": "字母 H；例词 hat，意思是“帽子”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/f215f4224569d5a52175.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Ella the elephant finds an egg.",
        "cn": "大象艾拉发现了一枚蛋。",
        "audio": "./assets/audio/generated/756e209387035ff82a50.mp3",
        "lines": [
          {
            "text": "Ella the elephant finds an egg.",
            "cn": "大象艾拉发现了一枚蛋。",
            "audio": "./assets/audio/generated/756e209387035ff82a50.mp3"
          }
        ],
        "image": "./assets/library/story-03/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "\"Is it coming out?\" say the friends.",
        "cn": "朋友们问：它要出来了吗？",
        "audio": "./assets/audio/generated/601d52aa953de7091cff.mp3",
        "lines": [
          {
            "text": "\"Is it coming out?\" say the friends.",
            "cn": "朋友们问：它要出来了吗？",
            "audio": "./assets/audio/generated/601d52aa953de7091cff.mp3"
          }
        ],
        "image": "./assets/library/story-03/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Brrr!",
        "cn": "哆嗦的声音：哔——！",
        "audio": "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3",
        "lines": [
          {
            "text": "Brrr!",
            "cn": "哆嗦的声音：哔——！",
            "audio": "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3"
          }
        ],
        "image": "./assets/library/story-03/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "\"I can fan it with my ears,\" says Finn the fox.",
        "cn": "狐狸芬恩说：我可以用耳朵给它扇风。",
        "audio": "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3",
        "lines": [
          {
            "text": "\"I can fan it with my ears,\" says Finn the fox.",
            "cn": "狐狸芬恩说：我可以用耳朵给它扇风。",
            "audio": "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3"
          }
        ],
        "image": "./assets/library/story-03/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "\"No!\" says Ed the elk.",
        "cn": "麋鹿埃德说：不行！",
        "audio": "./assets/audio/generated/7186578fe1d9e4370df0.mp3",
        "lines": [
          {
            "text": "\"No!\" says Ed the elk.",
            "cn": "麋鹿埃德说：不行！",
            "audio": "./assets/audio/generated/7186578fe1d9e4370df0.mp3"
          }
        ],
        "image": "./assets/library/story-03/p009.webp",
        "caption": "绘本原页 9",
        "sourcePage": 9,
        "original": true
      },
      {
        "text": "\"I can pat it with my foot,\" he says.",
        "cn": "他说：我可以用脚轻拍它。",
        "audio": "./assets/audio/generated/dc0fe3ec31059921b92e.mp3",
        "lines": [
          {
            "text": "\"I can pat it with my foot,\" he says.",
            "cn": "他说：我可以用脚轻拍它。",
            "audio": "./assets/audio/generated/dc0fe3ec31059921b92e.mp3"
          }
        ],
        "image": "./assets/library/story-03/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "\"No!\" says Ella the elephant.",
        "cn": "大象艾拉说：不行！",
        "audio": "./assets/audio/generated/58d20a54efb02fb29f56.mp3",
        "lines": [
          {
            "text": "\"No!\" says Ella the elephant.",
            "cn": "大象艾拉说：不行！",
            "audio": "./assets/audio/generated/58d20a54efb02fb29f56.mp3"
          }
        ],
        "image": "./assets/library/story-03/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "\"I can sit on it,\" she says.",
        "cn": "她说：我可以坐在它上面。",
        "audio": "./assets/audio/generated/26a157ae4141d9ea4391.mp3",
        "lines": [
          {
            "text": "\"I can sit on it,\" she says.",
            "cn": "她说：我可以坐在它上面。",
            "audio": "./assets/audio/generated/26a157ae4141d9ea4391.mp3"
          }
        ],
        "image": "./assets/library/story-03/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "\"No!\" says the egg.",
        "cn": "蛋说：不行！",
        "audio": "./assets/audio/generated/587165d5115ca5b7d46f.mp3",
        "lines": [
          {
            "text": "\"No!\" says the egg.",
            "cn": "蛋说：不行！",
            "audio": "./assets/audio/generated/587165d5115ca5b7d46f.mp3"
          }
        ],
        "image": "./assets/library/story-03/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 2,
        "fileName": "自然拼读课件\\002.pdf",
        "totalPages": 99,
        "pages": [
          {
            "page": 5,
            "image": "./assets/library/phonics-02/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/phonics-02/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/phonics-02/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/phonics-02/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/phonics-02/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/phonics-02/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/phonics-02/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/phonics-02/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-02/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-02/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-02/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-02/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-02/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-02/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-02/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-02/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-02/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-02/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-02/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-02/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-02/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-02/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-02/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-02/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-02/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-02/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-02/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-02/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-02/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-02/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-02/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-02/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-02/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-02/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-02/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-02/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-02/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-02/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-02/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-02/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-02/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-02/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-02/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-02/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-02/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-02/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-02/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-02/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-02/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-02/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-02/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-02/p056.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-02/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-02/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-02/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-02/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-02/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-02/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-02/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-02/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-02/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-02/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-02/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-02/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-02/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-02/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-02/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-02/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-02/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-02/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-02/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-02/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-02/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-02/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-02/p079.webp"
          },
          {
            "page": 80,
            "image": "./assets/library/phonics-02/p080.webp"
          },
          {
            "page": 81,
            "image": "./assets/library/phonics-02/p081.webp"
          },
          {
            "page": 82,
            "image": "./assets/library/phonics-02/p082.webp"
          },
          {
            "page": 83,
            "image": "./assets/library/phonics-02/p083.webp"
          },
          {
            "page": 84,
            "image": "./assets/library/phonics-02/p084.webp"
          },
          {
            "page": 85,
            "image": "./assets/library/phonics-02/p085.webp"
          },
          {
            "page": 86,
            "image": "./assets/library/phonics-02/p086.webp"
          },
          {
            "page": 87,
            "image": "./assets/library/phonics-02/p087.webp"
          }
        ],
        "title": "第 2 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 3,
        "fileName": "绘本\\003.pdf",
        "totalPages": 17,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-03/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-03/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-03/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-03/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-03/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-03/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-03/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-03/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-03/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-03/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-03/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-03/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-03/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-03/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-03/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-03/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-03/p017.webp"
          }
        ],
        "title": "Elephant's Friends · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Ee–Hh 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-03",
    "lesson": 3,
    "title": "Spin, Jenny, Spin!",
    "titleCn": "转起来，珍妮！",
    "available": true,
    "subtitle": "Ii–Kk",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Ii–Kk、本课词句与《转起来，珍妮！》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-06/p001.webp",
    "bookNumber": 6,
    "letters": [
      {
        "letter": "I",
        "lower": "i",
        "name": "/aɪ/",
        "sound": "/ɪ/",
        "word": "in",
        "wordCn": "在里面",
        "audio": "./assets/audio/generated/a83dd0ccbffe39d071cc.mp3",
        "wordAudio": "./assets/audio/generated/582967534d0f909d196b.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "J",
        "lower": "j",
        "name": "/dʒeɪ/",
        "sound": "/dʒ/",
        "word": "juice",
        "wordCn": "果汁",
        "audio": "./assets/audio/generated/6da43b944e494e885e69.mp3",
        "wordAudio": "./assets/audio/generated/a5ad895656074bb12930.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "K",
        "lower": "k",
        "name": "/keɪ/",
        "sound": "/k/",
        "word": "kitten",
        "wordCn": "小猫",
        "audio": "./assets/audio/generated/86be9a55762d316a3026.mp3",
        "wordAudio": "./assets/audio/generated/58972659401cbee9ac0c.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "jump",
        "en": "jump",
        "cn": "跳",
        "audio": "./assets/audio/generated/6bdaf554e42029bd0dbe.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fly",
        "en": "fly",
        "cn": "飞",
        "audio": "./assets/audio/generated/f4debdb7ab7dd958e95c.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "run",
        "en": "run",
        "cn": "跑",
        "audio": "./assets/audio/generated/acba25512100f80b56fc.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "kick",
        "en": "kick",
        "cn": "踢",
        "audio": "./assets/audio/generated/0db10f2c2f332cd27cf1.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "swim",
        "en": "swim",
        "cn": "游泳",
        "audio": "./assets/audio/generated/d493f8869139bac710b9.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "kid",
        "en": "kid",
        "cn": "孩子",
        "audio": "./assets/audio/generated/5c77d7fd8f51ed0c2a91.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "dig",
        "en": "dig",
        "cn": "挖",
        "audio": "./assets/audio/words/dig.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "big",
        "en": "big",
        "cn": "大的",
        "audio": "./assets/audio/generated/2a21fe6d592a19b7de89.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fib",
        "en": "fib",
        "cn": "小谎话",
        "audio": "./assets/audio/generated/97a43d3b29cae29594c8.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "hid",
        "en": "hid",
        "cn": "藏了（hide 的过去式）",
        "audio": "./assets/audio/generated/87102ab9bf41d9bc78cc.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fig",
        "en": "fig",
        "cn": "无花果",
        "audio": "./assets/audio/generated/8c39c63488260c318aea.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "jig",
        "en": "jig",
        "cn": "吉格舞",
        "audio": "./assets/audio/generated/41cb252f877799c7cf8e.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "jenny",
        "en": "Jenny",
        "cn": "珍妮",
        "audio": "./assets/audio/generated/57e4df689a1d76ed4cab.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-06/p003.webp"
      },
      {
        "id": "zip",
        "en": "zip",
        "cn": "快速移动",
        "audio": "./assets/audio/generated/4a70fe9aa6436e02c2de.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-06/p004.webp"
      },
      {
        "id": "spin",
        "en": "spin",
        "cn": "转圈",
        "audio": "./assets/audio/generated/a5a2729ffa0eeacc1532.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-06/p005.webp"
      },
      {
        "id": "jog",
        "en": "jog",
        "cn": "慢跑",
        "audio": "./assets/audio/generated/c30b983b5860e0481288.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-06/p007.webp"
      },
      {
        "id": "slip",
        "en": "slip",
        "cn": "滑倒",
        "audio": "./assets/audio/generated/1c1480e67eee52c17293.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-06/p009.webp"
      },
      {
        "id": "sip",
        "en": "sip",
        "cn": "小口喝",
        "audio": "./assets/audio/generated/6c126e81fa8dc29d6413.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-06/p015.webp"
      },
      {
        "id": "juice",
        "en": "juice",
        "cn": "果汁",
        "audio": "./assets/audio/generated/a5ad895656074bb12930.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-06/p016.webp"
      },
      {
        "id": "sit",
        "en": "sit",
        "cn": "坐",
        "audio": "./assets/audio/generated/584178e5e3517ddcebc6.mp3",
        "audioType": "synthesized",
        "sourcePage": 18,
        "image": "./assets/library/story-06/p018.webp"
      }
    ],
    "introSentences": [
      {
        "id": "expression-1",
        "text": "I can jump.",
        "cn": "我会跳。",
        "audio": "./assets/audio/generated/2907aea4877827afcdce.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-2",
        "text": "I can fly.",
        "cn": "我会飞。",
        "audio": "./assets/audio/generated/0705632a274848fb0358.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-3",
        "text": "I can run.",
        "cn": "我会跑。",
        "audio": "./assets/audio/generated/d650b086f7189a11f9f9.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-4",
        "text": "I can kick.",
        "cn": "我会踢。",
        "audio": "./assets/audio/generated/4ec308de526efd58855f.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-5",
        "text": "I can swim.",
        "cn": "我会游泳。",
        "audio": "./assets/audio/generated/4dfec7b6fe858196c65d.mp3",
        "tag": "课件句型与替换练习"
      }
    ],
    "storySentences": [
      {
        "id": "book-6-line-1",
        "text": "Jenny sees a girl.",
        "cn": "珍妮看见一个女孩。",
        "audio": "./assets/audio/generated/600526d1106ea5f856ba.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-6-line-2",
        "text": "The girl spins.",
        "cn": "女孩在转圈。",
        "audio": "./assets/audio/generated/ba2151278d936d95e58b.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-6-line-3",
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-6-line-4",
        "text": "Jenny jogs up to the ice.",
        "cn": "珍妮小跑到冰面上。",
        "audio": "./assets/audio/generated/0d27dc922df50bd3f85d.mp3",
        "tag": "绘本第 6 页",
        "sourcePage": 6
      },
      {
        "id": "book-6-line-5",
        "text": "Jenny spins.",
        "cn": "珍妮转圈。",
        "audio": "./assets/audio/generated/8f8a838a137838dfdc89.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-6-line-6",
        "text": "She trips.",
        "cn": "她绊了一下。",
        "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-6-line-7",
        "text": "She slips.",
        "cn": "她滑倒了。",
        "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-6-line-8",
        "text": "Jenny sees the girl.",
        "cn": "珍妮看见那个女孩。",
        "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-6-line-9",
        "text": "The girl jumps.",
        "cn": "女孩在跳跃。",
        "audio": "./assets/audio/generated/e4f97f13575114328f77.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-6-line-10",
        "text": "Jenny jumps.",
        "cn": "珍妮跳起来。",
        "audio": "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-6-line-11",
        "text": "She gets off the ice.",
        "cn": "女孩离开了冰面。",
        "audio": "./assets/audio/generated/da94d343d0dfaf966b90.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-6-line-12",
        "text": "The girl sips some juice.",
        "cn": "女孩小口喝了些果汁。",
        "audio": "./assets/audio/generated/a0a62e4ec84202be122d.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-6-line-13",
        "text": "They sit.",
        "cn": "她们坐下来。",
        "audio": "./assets/audio/generated/43dc1f65b704b190b9ec.mp3",
        "tag": "绘本第 17 页",
        "sourcePage": 17
      },
      {
        "id": "book-6-line-14",
        "text": "They sip.",
        "cn": "她们小口喝果汁。",
        "audio": "./assets/audio/generated/343172dc2ef266bdcf5b.mp3",
        "tag": "绘本第 17 页",
        "sourcePage": 17
      }
    ],
    "chants": [
      {
        "id": "i",
        "letter": "I",
        "lines": [
          "I, I, I, i, i, i.",
          "In, in, i, i, i."
        ],
        "cn": "字母 I；例词 in，意思是“在里面”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/2fe1ca549e1a57233ac4.mp3",
        "synthesized": true
      },
      {
        "id": "j",
        "letter": "J",
        "lines": [
          "J, J, J, j, j, j.",
          "Juice, juice, j, j, j."
        ],
        "cn": "字母 J；例词 juice，意思是“果汁”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/e116c7dabe9d99d29c95.mp3",
        "synthesized": true
      },
      {
        "id": "k",
        "letter": "K",
        "lines": [
          "K, K, K, k, k, k.",
          "Kitten, kitten, k, k, k."
        ],
        "cn": "字母 K；例词 kitten，意思是“小猫”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/ae6ee4bec6f846d76779.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Jenny sees a girl.",
        "cn": "珍妮看见一个女孩。",
        "audio": "./assets/audio/generated/600526d1106ea5f856ba.mp3",
        "lines": [
          {
            "text": "Jenny sees a girl.",
            "cn": "珍妮看见一个女孩。",
            "audio": "./assets/audio/generated/600526d1106ea5f856ba.mp3"
          }
        ],
        "image": "./assets/library/story-06/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "The girl spins.",
        "cn": "女孩在转圈。",
        "audio": "./assets/audio/generated/ba2151278d936d95e58b.mp3",
        "lines": [
          {
            "text": "The girl spins.",
            "cn": "女孩在转圈。",
            "audio": "./assets/audio/generated/ba2151278d936d95e58b.mp3"
          }
        ],
        "image": "./assets/library/story-06/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "lines": [
          {
            "text": "I can do that!",
            "cn": "我也能做到！",
            "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3"
          }
        ],
        "image": "./assets/library/story-06/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Jenny jogs up to the ice.",
        "cn": "珍妮小跑到冰面上。",
        "audio": "./assets/audio/generated/0d27dc922df50bd3f85d.mp3",
        "lines": [
          {
            "text": "Jenny jogs up to the ice.",
            "cn": "珍妮小跑到冰面上。",
            "audio": "./assets/audio/generated/0d27dc922df50bd3f85d.mp3"
          }
        ],
        "image": "./assets/library/story-06/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Jenny spins.",
        "cn": "珍妮转圈。",
        "audio": "./assets/audio/generated/8f8a838a137838dfdc89.mp3",
        "lines": [
          {
            "text": "Jenny spins.",
            "cn": "珍妮转圈。",
            "audio": "./assets/audio/generated/8f8a838a137838dfdc89.mp3"
          }
        ],
        "image": "./assets/library/story-06/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "She trips.",
        "cn": "她绊了一下。",
        "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3",
        "lines": [
          {
            "text": "She trips.",
            "cn": "她绊了一下。",
            "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3"
          }
        ],
        "image": "./assets/library/story-06/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "She slips.",
        "cn": "她滑倒了。",
        "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3",
        "lines": [
          {
            "text": "She slips.",
            "cn": "她滑倒了。",
            "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3"
          }
        ],
        "image": "./assets/library/story-06/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Jenny sees the girl.",
        "cn": "珍妮看见那个女孩。",
        "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3",
        "lines": [
          {
            "text": "Jenny sees the girl.",
            "cn": "珍妮看见那个女孩。",
            "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3"
          }
        ],
        "image": "./assets/library/story-06/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "The girl jumps.",
        "cn": "女孩在跳跃。",
        "audio": "./assets/audio/generated/e4f97f13575114328f77.mp3",
        "lines": [
          {
            "text": "The girl jumps.",
            "cn": "女孩在跳跃。",
            "audio": "./assets/audio/generated/e4f97f13575114328f77.mp3"
          }
        ],
        "image": "./assets/library/story-06/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "lines": [
          {
            "text": "I can do that!",
            "cn": "我也能做到！",
            "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3"
          }
        ],
        "image": "./assets/library/story-06/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Jenny jumps.",
        "cn": "珍妮跳起来。",
        "audio": "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3",
        "lines": [
          {
            "text": "Jenny jumps.",
            "cn": "珍妮跳起来。",
            "audio": "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3"
          }
        ],
        "image": "./assets/library/story-06/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "She trips.",
        "cn": "她绊了一下。",
        "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3",
        "lines": [
          {
            "text": "She trips.",
            "cn": "她绊了一下。",
            "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3"
          }
        ],
        "image": "./assets/library/story-06/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "She slips.",
        "cn": "她滑倒了。",
        "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3",
        "lines": [
          {
            "text": "She slips.",
            "cn": "她滑倒了。",
            "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3"
          }
        ],
        "image": "./assets/library/story-06/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Jenny sees the girl.",
        "cn": "珍妮看见那个女孩。",
        "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3",
        "lines": [
          {
            "text": "Jenny sees the girl.",
            "cn": "珍妮看见那个女孩。",
            "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3"
          }
        ],
        "image": "./assets/library/story-06/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "She gets off the ice.",
        "cn": "女孩离开了冰面。",
        "audio": "./assets/audio/generated/da94d343d0dfaf966b90.mp3",
        "lines": [
          {
            "text": "She gets off the ice.",
            "cn": "女孩离开了冰面。",
            "audio": "./assets/audio/generated/da94d343d0dfaf966b90.mp3"
          }
        ],
        "image": "./assets/library/story-06/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "The girl sips some juice.",
        "cn": "女孩小口喝了些果汁。",
        "audio": "./assets/audio/generated/a0a62e4ec84202be122d.mp3",
        "lines": [
          {
            "text": "The girl sips some juice.",
            "cn": "女孩小口喝了些果汁。",
            "audio": "./assets/audio/generated/a0a62e4ec84202be122d.mp3"
          }
        ],
        "image": "./assets/library/story-06/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "lines": [
          {
            "text": "I can do that!",
            "cn": "我也能做到！",
            "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3"
          }
        ],
        "image": "./assets/library/story-06/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "They sit.",
        "cn": "她们坐下来。",
        "audio": "./assets/audio/generated/43dc1f65b704b190b9ec.mp3",
        "lines": [
          {
            "text": "They sit.",
            "cn": "她们坐下来。",
            "audio": "./assets/audio/generated/43dc1f65b704b190b9ec.mp3"
          }
        ],
        "image": "./assets/library/story-06/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "They sip.",
        "cn": "她们小口喝果汁。",
        "audio": "./assets/audio/generated/343172dc2ef266bdcf5b.mp3",
        "lines": [
          {
            "text": "They sip.",
            "cn": "她们小口喝果汁。",
            "audio": "./assets/audio/generated/343172dc2ef266bdcf5b.mp3"
          }
        ],
        "image": "./assets/library/story-06/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 3,
        "fileName": "自然拼读课件\\003.pdf",
        "totalPages": 88,
        "pages": [
          {
            "page": 7,
            "image": "./assets/library/phonics-03/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/phonics-03/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/phonics-03/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/phonics-03/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/phonics-03/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/phonics-03/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-03/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-03/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-03/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-03/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-03/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-03/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-03/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-03/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-03/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-03/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-03/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-03/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-03/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-03/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-03/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-03/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-03/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-03/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-03/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-03/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-03/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-03/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-03/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-03/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-03/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-03/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-03/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-03/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-03/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-03/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-03/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-03/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-03/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-03/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-03/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-03/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-03/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-03/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-03/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-03/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-03/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-03/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-03/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-03/p056.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-03/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-03/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-03/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-03/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-03/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-03/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-03/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-03/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-03/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-03/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-03/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-03/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-03/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-03/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-03/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-03/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-03/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-03/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-03/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-03/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-03/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-03/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-03/p079.webp"
          }
        ],
        "title": "第 3 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 6,
        "fileName": "绘本\\006.pdf",
        "totalPages": 20,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-06/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-06/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-06/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-06/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-06/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-06/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-06/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-06/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-06/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-06/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-06/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-06/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-06/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-06/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-06/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-06/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-06/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-06/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-06/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-06/p020.webp"
          }
        ],
        "title": "Spin, Jenny, Spin! · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Ii–Kk 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-04",
    "lesson": 4,
    "title": "Ned, Mum and Nan",
    "titleCn": "内德、妈妈和奶奶",
    "available": true,
    "subtitle": "Ll–Nn",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Ll–Nn、本课词句与《内德、妈妈和奶奶》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-04/p001.webp",
    "bookNumber": 4,
    "letters": [
      {
        "letter": "L",
        "lower": "l",
        "name": "/el/",
        "sound": "/l/",
        "word": "look",
        "wordCn": "看",
        "audio": "./assets/audio/generated/72dfcfb0c470ac255cde.mp3",
        "wordAudio": "./assets/audio/generated/3c01eba119e00d79c82b.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "M",
        "lower": "m",
        "name": "/em/",
        "sound": "/m/",
        "word": "mum",
        "wordCn": "妈妈",
        "audio": "./assets/audio/generated/08f271887ce94707da82.mp3",
        "wordAudio": "./assets/audio/generated/f2d758f9e379babc91f1.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "N",
        "lower": "n",
        "name": "/en/",
        "sound": "/n/",
        "word": "net",
        "wordCn": "网",
        "audio": "./assets/audio/generated/8ce86a6ae65d3692e730.mp3",
        "wordAudio": "./assets/audio/generated/a08a0fcbdeafd3c1b3a4.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "sing",
        "en": "sing",
        "cn": "唱歌",
        "audio": "./assets/audio/generated/6342d0648a74645722ea.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "dance",
        "en": "dance",
        "cn": "跳舞",
        "audio": "./assets/audio/generated/2c371c2ada73a02e26e1.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "clap",
        "en": "clap",
        "cn": "拍手",
        "audio": "./assets/audio/generated/8cceaf5c89e63591aea2.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "can",
        "en": "can",
        "cn": "能够",
        "audio": "./assets/audio/generated/9f584196e7fe6de85d38.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "nan",
        "en": "nan",
        "cn": "奶奶",
        "audio": "./assets/audio/generated/9b2d5b4678781e53038e.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "leg",
        "en": "leg",
        "cn": "腿",
        "audio": "./assets/audio/generated/c7c8fc91abb8ed76c29a.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "led",
        "en": "led",
        "cn": "带领过（lead 的过去式）",
        "audio": "./assets/audio/generated/021f8ffac9f9a70fd346.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "him",
        "en": "him",
        "cn": "他（宾格）",
        "audio": "./assets/audio/generated/5a7cf4ac138054a82f60.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "mid",
        "en": "mid",
        "cn": "中间的",
        "audio": "./assets/audio/generated/90ac16783fbc54c3689c.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "ned",
        "en": "Ned",
        "cn": "内德",
        "audio": "./assets/audio/generated/7c95b1b284881b54153a.mp3",
        "audioType": "synthesized",
        "sourcePage": 2,
        "image": "./assets/library/story-04/p002.webp"
      },
      {
        "id": "mum",
        "en": "mum",
        "cn": "妈妈",
        "audio": "./assets/audio/generated/f2d758f9e379babc91f1.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-04/p003.webp"
      },
      {
        "id": "nest",
        "en": "nest",
        "cn": "窝",
        "audio": "./assets/audio/generated/75ef2e329bdb50d26a4c.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-04/p007.webp"
      },
      {
        "id": "milk",
        "en": "milk",
        "cn": "牛奶",
        "audio": "./assets/audio/generated/8825e76530f87ff5c737.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-04/p009.webp"
      },
      {
        "id": "man",
        "en": "man",
        "cn": "男人",
        "audio": "./assets/audio/generated/48b676e2b107da679512.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-04/p011.webp"
      },
      {
        "id": "mug",
        "en": "mug",
        "cn": "马克杯",
        "audio": "./assets/audio/generated/a19ee2577879b76a5b98.mp3",
        "audioType": "synthesized",
        "sourcePage": 14,
        "image": "./assets/library/story-04/p014.webp"
      },
      {
        "id": "pan",
        "en": "pan",
        "cn": "平底锅",
        "audio": "./assets/audio/generated/00e37ffae0562ab6818d.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-04/p016.webp"
      },
      {
        "id": "nap",
        "en": "nap",
        "cn": "小睡",
        "audio": "./assets/audio/generated/82ebadafdeec2df737e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 18,
        "image": "./assets/library/story-04/p018.webp"
      }
    ],
    "introSentences": [
      {
        "id": "expression-1",
        "text": "I can sing.",
        "cn": "我会唱歌。",
        "audio": "./assets/audio/generated/dfc70bd3da4186558e20.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-2",
        "text": "I can dance.",
        "cn": "我会跳舞。",
        "audio": "./assets/audio/generated/09f897e16b02da6340d8.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-3",
        "text": "I can clap.",
        "cn": "我会拍手。",
        "audio": "./assets/audio/generated/d5effad93aed12c2ff64.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-4",
        "text": "We can sing.",
        "cn": "我们会唱歌。",
        "audio": "./assets/audio/generated/5bf346562feacd7169d3.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-5",
        "text": "We can dance.",
        "cn": "我们会跳舞。",
        "audio": "./assets/audio/generated/40342fc78425568b5a3d.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-6",
        "text": "We can clap.",
        "cn": "我们会拍手。",
        "audio": "./assets/audio/generated/8e7163e3c975c028267b.mp3",
        "tag": "课件句型与替换练习"
      }
    ],
    "storySentences": [
      {
        "id": "book-4-line-1",
        "text": "Ned is at a farm.",
        "cn": "内德在农场。",
        "audio": "./assets/audio/generated/453389e9e139f0ee99cf.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-4-line-2",
        "text": "He gets eggs from a nest.",
        "cn": "他从鸟窝里拿到鸡蛋。",
        "audio": "./assets/audio/generated/ba5400d404b2e2c1e645.mp3",
        "tag": "绘本第 6 页",
        "sourcePage": 6
      },
      {
        "id": "book-4-line-3",
        "text": "Mum gets milk from a cow.",
        "cn": "妈妈从奶牛那里挤到牛奶。",
        "audio": "./assets/audio/generated/578175e86f89aa607cf2.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-4-line-4",
        "text": "Moo!",
        "cn": "哞！",
        "audio": "./assets/audio/generated/565f923aa7a886d9ff5e.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-4-line-5",
        "text": "Nan gets a bag from the man.",
        "cn": "奶奶从那个人那里拿到一个袋子。",
        "audio": "./assets/audio/generated/8d85f53bdd86a174e510.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-4-line-6",
        "text": "Now Ned is at home.",
        "cn": "现在内德在家了。",
        "audio": "./assets/audio/generated/abca8fd657d215c198b5.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-4-line-7",
        "text": "He gets a mug.",
        "cn": "他拿来一个马克杯。",
        "audio": "./assets/audio/generated/0981f5787545f5ec6e5b.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-4-line-8",
        "text": "Mum gets a pan.",
        "cn": "妈妈拿来一个平底锅。",
        "audio": "./assets/audio/generated/b13281935e20e461d3dc.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      },
      {
        "id": "book-4-line-9",
        "text": "Nan gets pancakes and a nap!",
        "cn": "奶奶吃到薄煎饼，还能打个盹！",
        "audio": "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3",
        "tag": "绘本第 17 页",
        "sourcePage": 17
      },
      {
        "id": "book-4-line-10",
        "text": "Yum!",
        "cn": "真好吃！",
        "audio": "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3",
        "tag": "绘本第 17 页",
        "sourcePage": 17
      }
    ],
    "chants": [
      {
        "id": "l",
        "letter": "L",
        "lines": [
          "L, L, L, l, l, l.",
          "Look, look, l, l, l."
        ],
        "cn": "字母 L；例词 look，意思是“看”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/45e474b9abd15efdb2d8.mp3",
        "synthesized": true
      },
      {
        "id": "m",
        "letter": "M",
        "lines": [
          "M, M, M, m, m, m.",
          "Mum, mum, m, m, m."
        ],
        "cn": "字母 M；例词 mum，意思是“妈妈”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/f7ae94b24b7b1da297a6.mp3",
        "synthesized": true
      },
      {
        "id": "n",
        "letter": "N",
        "lines": [
          "N, N, N, n, n, n.",
          "Net, net, n, n, n."
        ],
        "cn": "字母 N；例词 net，意思是“网”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/2999c33a7dfd8b4f048e.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Ned is at a farm.",
        "cn": "内德在农场。",
        "audio": "./assets/audio/generated/453389e9e139f0ee99cf.mp3",
        "lines": [
          {
            "text": "Ned is at a farm.",
            "cn": "内德在农场。",
            "audio": "./assets/audio/generated/453389e9e139f0ee99cf.mp3"
          }
        ],
        "image": "./assets/library/story-04/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "He gets eggs from a nest.",
        "cn": "他从鸟窝里拿到鸡蛋。",
        "audio": "./assets/audio/generated/ba5400d404b2e2c1e645.mp3",
        "lines": [
          {
            "text": "He gets eggs from a nest.",
            "cn": "他从鸟窝里拿到鸡蛋。",
            "audio": "./assets/audio/generated/ba5400d404b2e2c1e645.mp3"
          }
        ],
        "image": "./assets/library/story-04/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Mum gets milk from a cow.",
        "cn": "妈妈从奶牛那里挤到牛奶。",
        "audio": "./assets/audio/generated/578175e86f89aa607cf2.mp3",
        "lines": [
          {
            "text": "Mum gets milk from a cow.",
            "cn": "妈妈从奶牛那里挤到牛奶。",
            "audio": "./assets/audio/generated/578175e86f89aa607cf2.mp3"
          }
        ],
        "image": "./assets/library/story-04/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Moo!",
        "cn": "哞！",
        "audio": "./assets/audio/generated/565f923aa7a886d9ff5e.mp3",
        "lines": [
          {
            "text": "Moo!",
            "cn": "哞！",
            "audio": "./assets/audio/generated/565f923aa7a886d9ff5e.mp3"
          }
        ],
        "image": "./assets/library/story-04/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Nan gets a bag from the man.",
        "cn": "奶奶从那个人那里拿到一个袋子。",
        "audio": "./assets/audio/generated/8d85f53bdd86a174e510.mp3",
        "lines": [
          {
            "text": "Nan gets a bag from the man.",
            "cn": "奶奶从那个人那里拿到一个袋子。",
            "audio": "./assets/audio/generated/8d85f53bdd86a174e510.mp3"
          }
        ],
        "image": "./assets/library/story-04/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Now Ned is at home.",
        "cn": "现在内德在家了。",
        "audio": "./assets/audio/generated/abca8fd657d215c198b5.mp3",
        "lines": [
          {
            "text": "Now Ned is at home.",
            "cn": "现在内德在家了。",
            "audio": "./assets/audio/generated/abca8fd657d215c198b5.mp3"
          }
        ],
        "image": "./assets/library/story-04/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "He gets a mug.",
        "cn": "他拿来一个马克杯。",
        "audio": "./assets/audio/generated/0981f5787545f5ec6e5b.mp3",
        "lines": [
          {
            "text": "He gets a mug.",
            "cn": "他拿来一个马克杯。",
            "audio": "./assets/audio/generated/0981f5787545f5ec6e5b.mp3"
          }
        ],
        "image": "./assets/library/story-04/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Mum gets a pan.",
        "cn": "妈妈拿来一个平底锅。",
        "audio": "./assets/audio/generated/b13281935e20e461d3dc.mp3",
        "lines": [
          {
            "text": "Mum gets a pan.",
            "cn": "妈妈拿来一个平底锅。",
            "audio": "./assets/audio/generated/b13281935e20e461d3dc.mp3"
          }
        ],
        "image": "./assets/library/story-04/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "Nan gets pancakes and a nap!",
        "cn": "奶奶吃到薄煎饼，还能打个盹！",
        "audio": "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3",
        "lines": [
          {
            "text": "Nan gets pancakes and a nap!",
            "cn": "奶奶吃到薄煎饼，还能打个盹！",
            "audio": "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3"
          }
        ],
        "image": "./assets/library/story-04/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "Yum!",
        "cn": "真好吃！",
        "audio": "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3",
        "lines": [
          {
            "text": "Yum!",
            "cn": "真好吃！",
            "audio": "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3"
          }
        ],
        "image": "./assets/library/story-04/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 4,
        "fileName": "自然拼读课件\\004.pdf",
        "totalPages": 112,
        "pages": [
          {
            "page": 13,
            "image": "./assets/library/phonics-04/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-04/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-04/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-04/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-04/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-04/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-04/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-04/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-04/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-04/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-04/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-04/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-04/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-04/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-04/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-04/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-04/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-04/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-04/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-04/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-04/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-04/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-04/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-04/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-04/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-04/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-04/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-04/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-04/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-04/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-04/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-04/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-04/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-04/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-04/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-04/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-04/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-04/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-04/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-04/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-04/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-04/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-04/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-04/p056.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-04/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-04/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-04/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-04/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-04/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-04/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-04/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-04/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-04/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-04/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-04/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-04/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-04/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-04/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-04/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-04/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-04/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-04/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-04/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-04/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-04/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-04/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-04/p079.webp"
          },
          {
            "page": 80,
            "image": "./assets/library/phonics-04/p080.webp"
          },
          {
            "page": 81,
            "image": "./assets/library/phonics-04/p081.webp"
          },
          {
            "page": 82,
            "image": "./assets/library/phonics-04/p082.webp"
          },
          {
            "page": 83,
            "image": "./assets/library/phonics-04/p083.webp"
          },
          {
            "page": 84,
            "image": "./assets/library/phonics-04/p084.webp"
          },
          {
            "page": 85,
            "image": "./assets/library/phonics-04/p085.webp"
          },
          {
            "page": 86,
            "image": "./assets/library/phonics-04/p086.webp"
          },
          {
            "page": 87,
            "image": "./assets/library/phonics-04/p087.webp"
          },
          {
            "page": 88,
            "image": "./assets/library/phonics-04/p088.webp"
          }
        ],
        "title": "第 4 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 4,
        "fileName": "绘本\\004.pdf",
        "totalPages": 20,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-04/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-04/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-04/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-04/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-04/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-04/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-04/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-04/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-04/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-04/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-04/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-04/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-04/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-04/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-04/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-04/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-04/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-04/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-04/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-04/p020.webp"
          }
        ],
        "title": "Ned, Mum and Nan · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Ll–Nn 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-05",
    "lesson": 5,
    "title": "Ollie and Puppy",
    "titleCn": "奥利和小狗",
    "available": true,
    "subtitle": "Oo–Qq",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Oo–Qq、本课词句与《奥利和小狗》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-05/p001.webp",
    "bookNumber": 5,
    "letters": [
      {
        "letter": "O",
        "lower": "o",
        "name": "/əʊ/",
        "sound": "/ɒ/",
        "word": "orange",
        "wordCn": "橙子",
        "audio": "./assets/audio/generated/c4694f2e93d5c4e7d51f.mp3",
        "wordAudio": "./assets/audio/generated/1b4c9133da73a7113224.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "P",
        "lower": "p",
        "name": "/piː/",
        "sound": "/p/",
        "word": "pig",
        "wordCn": "猪",
        "audio": "./assets/audio/generated/5c62e091b8c0565f1baf.mp3",
        "wordAudio": "./assets/audio/generated/f0b8c9d84dd2b877e0b9.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "Q",
        "lower": "q",
        "name": "/kjuː/",
        "sound": "/kw/",
        "word": "queen",
        "wordCn": "女王",
        "audio": "./assets/audio/generated/4ae81572f06e1b88fd5c.mp3",
        "wordAudio": "./assets/audio/generated/a9c3c1f7674502331a5a.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "dad",
        "en": "dad",
        "cn": "爸爸",
        "audio": "./assets/audio/words/dad.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "mum",
        "en": "mum",
        "cn": "妈妈",
        "audio": "./assets/audio/generated/f2d758f9e379babc91f1.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "sister",
        "en": "sister",
        "cn": "姐妹",
        "audio": "./assets/audio/generated/1980d3927f07fec9c8d7.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "pod",
        "en": "pod",
        "cn": "豆荚",
        "audio": "./assets/audio/generated/425c89ed5bb78a7623fa.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "mop",
        "en": "mop",
        "cn": "拖把",
        "audio": "./assets/audio/generated/40685fd53d8eb3b1e921.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fog",
        "en": "fog",
        "cn": "雾",
        "audio": "./assets/audio/generated/b04216546057e8659fec.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "quid",
        "en": "quid",
        "cn": "一英镑（口语）",
        "audio": "./assets/audio/generated/2cc5249042fb4d72a9f9.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "pig",
        "en": "pig",
        "cn": "猪",
        "audio": "./assets/audio/generated/f0b8c9d84dd2b877e0b9.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "pin",
        "en": "pin",
        "cn": "别针",
        "audio": "./assets/audio/generated/64f46a7526a186d23465.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "ollie",
        "en": "Ollie",
        "cn": "奥利",
        "audio": "./assets/audio/generated/8ae01e3d4d5a82236892.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-05/p003.webp"
      },
      {
        "id": "puppy",
        "en": "puppy",
        "cn": "小狗",
        "audio": "./assets/audio/generated/6588ef4db6a357d6d9ca.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-05/p005.webp"
      },
      {
        "id": "pat",
        "en": "pat",
        "cn": "轻拍",
        "audio": "./assets/audio/generated/68d753f055b1a15b3949.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-05/p006.webp"
      },
      {
        "id": "shop",
        "en": "shop",
        "cn": "商店",
        "audio": "./assets/audio/generated/8d9001d32c6a703d9592.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-05/p007.webp"
      },
      {
        "id": "park",
        "en": "park",
        "cn": "公园",
        "audio": "./assets/audio/generated/4d3971de62245c94cd3d.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-05/p009.webp"
      },
      {
        "id": "penny",
        "en": "Penny",
        "cn": "佩妮",
        "audio": "./assets/audio/generated/529c3146271d02cb3aca.mp3",
        "audioType": "synthesized",
        "sourcePage": 14,
        "image": "./assets/library/story-05/p014.webp"
      },
      {
        "id": "dog",
        "en": "dog",
        "cn": "狗",
        "audio": "./assets/audio/words/dog.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-05/p015.webp"
      }
    ],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-5-line-1",
        "text": "Ollie wants a friend.",
        "cn": "奥利想要一个朋友。",
        "audio": "./assets/audio/generated/6dba34c6b394b15f5c79.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-5-line-2",
        "text": "He finds a puppy.",
        "cn": "他发现了一只小狗。",
        "audio": "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3",
        "tag": "绘本第 4 页",
        "sourcePage": 4
      },
      {
        "id": "book-5-line-3",
        "text": "He pats it.",
        "cn": "他轻轻拍拍它。",
        "audio": "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3",
        "tag": "绘本第 4 页",
        "sourcePage": 4
      },
      {
        "id": "book-5-line-4",
        "text": "Ollie plays in the park.",
        "cn": "奥利在公园里玩。",
        "audio": "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-5-line-5",
        "text": "Puppy plays in the park.",
        "cn": "小狗也在公园里玩。",
        "audio": "./assets/audio/generated/dbbc80741ce62a824040.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-5-line-6",
        "text": "Come on!",
        "cn": "来吧！",
        "audio": "./assets/audio/generated/4907ee25d9f6991a18c2.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-5-line-7",
        "text": "Ollie eats pizza and an orange.",
        "cn": "奥利吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/faea1f30bb88216eca7d.mp3",
        "tag": "绘本第 11 页",
        "sourcePage": 11
      },
      {
        "id": "book-5-line-8",
        "text": "Puppy eats pizza and an orange.",
        "cn": "小狗吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/19476231c33c572ef410.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-5-line-9",
        "text": "Penny finds her puppy.",
        "cn": "佩妮找到了自己的小狗。",
        "audio": "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-5-line-10",
        "text": "She pats it.",
        "cn": "她轻轻拍拍它。",
        "audio": "./assets/audio/generated/d363baf0b9106274ee9f.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-5-line-11",
        "text": "Good dog!",
        "cn": "乖狗狗！",
        "audio": "./assets/audio/generated/f04f90ac55f009bb6325.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-5-line-12",
        "text": "Ollie finds a friend.",
        "cn": "奥利找到了一个朋友。",
        "audio": "./assets/audio/generated/ce477972bab0014bb57e.mp3",
        "tag": "绘本第 16 页",
        "sourcePage": 16
      }
    ],
    "chants": [
      {
        "id": "o",
        "letter": "O",
        "lines": [
          "O, O, O, o, o, o.",
          "Orange, orange, o, o, o."
        ],
        "cn": "字母 O；例词 orange，意思是“橙子”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/13e1ef01cda842b9472c.mp3",
        "synthesized": true
      },
      {
        "id": "p",
        "letter": "P",
        "lines": [
          "P, P, P, p, p, p.",
          "Pig, pig, p, p, p."
        ],
        "cn": "字母 P；例词 pig，意思是“猪”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/efba5f714584ed59ccfc.mp3",
        "synthesized": true
      },
      {
        "id": "q",
        "letter": "Q",
        "lines": [
          "Q, Q, Q, q, q, q.",
          "Queen, queen, q, q, q."
        ],
        "cn": "字母 Q；例词 queen，意思是“女王”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/5c7ac365865271eb7d86.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Ollie wants a friend.",
        "cn": "奥利想要一个朋友。",
        "audio": "./assets/audio/generated/6dba34c6b394b15f5c79.mp3",
        "lines": [
          {
            "text": "Ollie wants a friend.",
            "cn": "奥利想要一个朋友。",
            "audio": "./assets/audio/generated/6dba34c6b394b15f5c79.mp3"
          }
        ],
        "image": "./assets/library/story-05/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "He finds a puppy.",
        "cn": "他发现了一只小狗。",
        "audio": "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3",
        "lines": [
          {
            "text": "He finds a puppy.",
            "cn": "他发现了一只小狗。",
            "audio": "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3"
          }
        ],
        "image": "./assets/library/story-05/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "He pats it.",
        "cn": "他轻轻拍拍它。",
        "audio": "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3",
        "lines": [
          {
            "text": "He pats it.",
            "cn": "他轻轻拍拍它。",
            "audio": "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3"
          }
        ],
        "image": "./assets/library/story-05/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "Ollie plays in the park.",
        "cn": "奥利在公园里玩。",
        "audio": "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3",
        "lines": [
          {
            "text": "Ollie plays in the park.",
            "cn": "奥利在公园里玩。",
            "audio": "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3"
          }
        ],
        "image": "./assets/library/story-05/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Puppy plays in the park.",
        "cn": "小狗也在公园里玩。",
        "audio": "./assets/audio/generated/dbbc80741ce62a824040.mp3",
        "lines": [
          {
            "text": "Puppy plays in the park.",
            "cn": "小狗也在公园里玩。",
            "audio": "./assets/audio/generated/dbbc80741ce62a824040.mp3"
          }
        ],
        "image": "./assets/library/story-05/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Come on!",
        "cn": "来吧！",
        "audio": "./assets/audio/generated/4907ee25d9f6991a18c2.mp3",
        "lines": [
          {
            "text": "Come on!",
            "cn": "来吧！",
            "audio": "./assets/audio/generated/4907ee25d9f6991a18c2.mp3"
          }
        ],
        "image": "./assets/library/story-05/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ollie eats pizza and an orange.",
        "cn": "奥利吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/faea1f30bb88216eca7d.mp3",
        "lines": [
          {
            "text": "Ollie eats pizza and an orange.",
            "cn": "奥利吃比萨和一个橙子。",
            "audio": "./assets/audio/generated/faea1f30bb88216eca7d.mp3"
          }
        ],
        "image": "./assets/library/story-05/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "Puppy eats pizza and an orange.",
        "cn": "小狗吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/19476231c33c572ef410.mp3",
        "lines": [
          {
            "text": "Puppy eats pizza and an orange.",
            "cn": "小狗吃比萨和一个橙子。",
            "audio": "./assets/audio/generated/19476231c33c572ef410.mp3"
          }
        ],
        "image": "./assets/library/story-05/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Penny finds her puppy.",
        "cn": "佩妮找到了自己的小狗。",
        "audio": "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3",
        "lines": [
          {
            "text": "Penny finds her puppy.",
            "cn": "佩妮找到了自己的小狗。",
            "audio": "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3"
          }
        ],
        "image": "./assets/library/story-05/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "She pats it.",
        "cn": "她轻轻拍拍它。",
        "audio": "./assets/audio/generated/d363baf0b9106274ee9f.mp3",
        "lines": [
          {
            "text": "She pats it.",
            "cn": "她轻轻拍拍它。",
            "audio": "./assets/audio/generated/d363baf0b9106274ee9f.mp3"
          }
        ],
        "image": "./assets/library/story-05/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Good dog!",
        "cn": "乖狗狗！",
        "audio": "./assets/audio/generated/f04f90ac55f009bb6325.mp3",
        "lines": [
          {
            "text": "Good dog!",
            "cn": "乖狗狗！",
            "audio": "./assets/audio/generated/f04f90ac55f009bb6325.mp3"
          }
        ],
        "image": "./assets/library/story-05/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Ollie finds a friend.",
        "cn": "奥利找到了一个朋友。",
        "audio": "./assets/audio/generated/ce477972bab0014bb57e.mp3",
        "lines": [
          {
            "text": "Ollie finds a friend.",
            "cn": "奥利找到了一个朋友。",
            "audio": "./assets/audio/generated/ce477972bab0014bb57e.mp3"
          }
        ],
        "image": "./assets/library/story-05/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 5,
        "fileName": "自然拼读课件\\005.pdf",
        "totalPages": 97,
        "pages": [
          {
            "page": 10,
            "image": "./assets/library/phonics-05/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/phonics-05/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/phonics-05/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-05/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-05/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-05/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-05/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-05/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-05/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-05/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-05/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-05/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-05/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-05/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-05/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-05/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-05/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-05/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-05/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-05/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-05/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-05/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-05/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-05/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-05/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-05/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-05/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-05/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-05/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-05/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-05/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-05/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-05/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-05/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-05/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-05/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-05/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-05/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-05/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-05/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-05/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-05/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-05/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-05/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-05/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-05/p055.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-05/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-05/p058.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-05/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-05/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-05/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-05/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-05/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-05/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-05/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-05/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-05/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-05/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-05/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-05/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-05/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-05/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-05/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-05/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-05/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-05/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-05/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-05/p079.webp"
          },
          {
            "page": 80,
            "image": "./assets/library/phonics-05/p080.webp"
          },
          {
            "page": 81,
            "image": "./assets/library/phonics-05/p081.webp"
          },
          {
            "page": 82,
            "image": "./assets/library/phonics-05/p082.webp"
          }
        ],
        "title": "第 5 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 5,
        "fileName": "绘本\\005.pdf",
        "totalPages": 18,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-05/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-05/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-05/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-05/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-05/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-05/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-05/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-05/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-05/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-05/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-05/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-05/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-05/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-05/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-05/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-05/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-05/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-05/p018.webp"
          }
        ],
        "title": "Ollie and Puppy · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Oo–Qq 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-06",
    "lesson": 6,
    "title": "Tess and the Swans",
    "titleCn": "苔丝和天鹅",
    "available": true,
    "subtitle": "Rr–Tt",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Rr–Tt、本课词句与《苔丝和天鹅》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-10/p001.webp",
    "bookNumber": 10,
    "letters": [
      {
        "letter": "R",
        "lower": "r",
        "name": "/ɑːr/",
        "sound": "/r/",
        "word": "rose",
        "wordCn": "玫瑰",
        "audio": "./assets/audio/generated/8c2574892063f995fdf7.mp3",
        "wordAudio": "./assets/audio/generated/618d663af0f1ec88a5a1.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "S",
        "lower": "s",
        "name": "/es/",
        "sound": "/s/",
        "word": "sun",
        "wordCn": "太阳",
        "audio": "./assets/audio/generated/8de0b3c47f112c59745f.mp3",
        "wordAudio": "./assets/audio/generated/27756f050e14a1cb1c1e.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "T",
        "lower": "t",
        "name": "/tiː/",
        "sound": "/t/",
        "word": "tin",
        "wordCn": "罐子",
        "audio": "./assets/audio/generated/e632b7095b0bf32c260f.mp3",
        "wordAudio": "./assets/audio/generated/ab547757da37eb600011.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "grandpa",
        "en": "grandpa",
        "cn": "爷爷；外公",
        "audio": "./assets/audio/generated/1eb4d6a000efefe9aadb.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "grandma",
        "en": "grandma",
        "cn": "奶奶；外婆",
        "audio": "./assets/audio/generated/ba8d3e6a2d8b5ed67ba2.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "rib",
        "en": "rib",
        "cn": "肋骨",
        "audio": "./assets/audio/generated/b39e647572080f09c40b.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "red",
        "en": "red",
        "cn": "红色的",
        "audio": "./assets/audio/generated/b1f51a511f1da0cd348b.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "sad",
        "en": "sad",
        "cn": "难过的",
        "audio": "./assets/audio/generated/45c9a6614fccd4f9592d.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "sob",
        "en": "sob",
        "cn": "啜泣",
        "audio": "./assets/audio/generated/454bedc703c397ac8232.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "top",
        "en": "top",
        "cn": "顶部",
        "audio": "./assets/audio/generated/28720365c5e7476a011e.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "ten",
        "en": "ten",
        "cn": "十",
        "audio": "./assets/audio/generated/e4432baa90819aaef51d.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "rot",
        "en": "rot",
        "cn": "腐烂",
        "audio": "./assets/audio/generated/7ec879c8c860699e2314.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "tess",
        "en": "Tess",
        "cn": "苔丝",
        "audio": "./assets/audio/generated/9aeaed03951337102f5e.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-10/p003.webp"
      },
      {
        "id": "swan",
        "en": "swan",
        "cn": "天鹅",
        "audio": "./assets/audio/generated/6856daebb0115b3b8c74.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-10/p005.webp"
      },
      {
        "id": "sun",
        "en": "sun",
        "cn": "太阳",
        "audio": "./assets/audio/generated/27756f050e14a1cb1c1e.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-10/p006.webp"
      },
      {
        "id": "sit",
        "en": "sit",
        "cn": "坐",
        "audio": "./assets/audio/generated/584178e5e3517ddcebc6.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-10/p007.webp"
      },
      {
        "id": "six",
        "en": "six",
        "cn": "六",
        "audio": "./assets/audio/generated/44778d82365e4af681c4.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-10/p009.webp"
      },
      {
        "id": "tub",
        "en": "tub",
        "cn": "桶",
        "audio": "./assets/audio/generated/14cf0fbca484cf6cae8e.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-10/p011.webp"
      },
      {
        "id": "tent",
        "en": "tent",
        "cn": "帐篷",
        "audio": "./assets/audio/generated/2a9810cb71316c9a03e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 13,
        "image": "./assets/library/story-10/p013.webp"
      },
      {
        "id": "foot",
        "en": "foot",
        "cn": "脚",
        "audio": "./assets/audio/generated/22e4f6912a6980d6fd59.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-10/p015.webp"
      },
      {
        "id": "tin",
        "en": "tin",
        "cn": "罐子",
        "audio": "./assets/audio/generated/ab547757da37eb600011.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-10/p016.webp"
      },
      {
        "id": "tug",
        "en": "tug",
        "cn": "用力拉",
        "audio": "./assets/audio/generated/e6bbc6867045359448c8.mp3",
        "audioType": "synthesized",
        "sourcePage": 18,
        "image": "./assets/library/story-10/p018.webp"
      }
    ],
    "introSentences": [
      {
        "id": "expression-1",
        "text": "He is my grandpa.",
        "cn": "他是我的爷爷。",
        "audio": "./assets/audio/generated/922aa7faafc264124d10.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-2",
        "text": "She is my grandma.",
        "cn": "她是我的奶奶。",
        "audio": "./assets/audio/generated/d621df6778d5be3fa6fc.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-3",
        "text": "He is my dad.",
        "cn": "他是我的爸爸。",
        "audio": "./assets/audio/generated/1262d9f424857dcd4fd2.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-4",
        "text": "She is my mum.",
        "cn": "她是我的妈妈。",
        "audio": "./assets/audio/generated/062d12ff0ff5b941cae2.mp3",
        "tag": "课件句型与替换练习"
      }
    ],
    "storySentences": [
      {
        "id": "book-10-line-1",
        "text": "Tess and Dad live on a boat.",
        "cn": "苔丝和爸爸住在一条船上。",
        "audio": "./assets/audio/generated/ef9f2b215cce72443d1e.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-10-line-2",
        "text": "The sun goes down.",
        "cn": "太阳落山了。",
        "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3",
        "tag": "绘本第 4 页",
        "sourcePage": 4
      },
      {
        "id": "book-10-line-3",
        "text": "Tess sits with Dad.",
        "cn": "苔丝和爸爸坐在一起。",
        "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3",
        "tag": "绘本第 4 页",
        "sourcePage": 4
      },
      {
        "id": "book-10-line-4",
        "text": "Seven swans!",
        "cn": "七只天鹅！",
        "audio": "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3",
        "tag": "绘本第 4 页",
        "sourcePage": 4
      },
      {
        "id": "book-10-line-5",
        "text": "So sweet!",
        "cn": "好可爱！",
        "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3",
        "tag": "绘本第 4 页",
        "sourcePage": 4
      },
      {
        "id": "book-10-line-6",
        "text": "The sun comes up.",
        "cn": "太阳升起来。",
        "audio": "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-10-line-7",
        "text": "It is a new day.",
        "cn": "新的一天到来了。",
        "audio": "./assets/audio/generated/c7a0ed0bd7875836676c.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-10-line-8",
        "text": "Six swans!",
        "cn": "六只天鹅！",
        "audio": "./assets/audio/generated/593760cf64d252c9315c.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-10-line-9",
        "text": "Oh no!",
        "cn": "噢，不！",
        "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-10-line-10",
        "text": "Tess looks for the little swan.",
        "cn": "苔丝寻找那只小天鹅。",
        "audio": "./assets/audio/generated/93afa14e4637ac76009c.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-10-line-11",
        "text": "Is it by the tub?",
        "cn": "它在桶旁边吗？",
        "audio": "./assets/audio/generated/824bbc70913eeb9571cf.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-10-line-12",
        "text": "No.",
        "cn": "不在。",
        "audio": "./assets/audio/generated/38178a20b470cfd18299.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-10-line-13",
        "text": "Dad looks for the little swan.",
        "cn": "爸爸寻找那只小天鹅。",
        "audio": "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-10-line-14",
        "text": "Is it by the tent?",
        "cn": "它在帐篷旁边吗？",
        "audio": "./assets/audio/generated/cdae6f07c983e0d70405.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-10-line-15",
        "text": "Yes!",
        "cn": "是的！",
        "audio": "./assets/audio/generated/8aff5108a050bcfab258.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-10-line-16",
        "text": "Her foot is in a tin.",
        "cn": "它的脚卡在一个罐子里。",
        "audio": "./assets/audio/generated/51773bb932508a6f7610.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-10-line-17",
        "text": "She's stuck!",
        "cn": "它被卡住了！",
        "audio": "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-10-line-18",
        "text": "Dad tugs and tugs.",
        "cn": "爸爸不停地用力拉。",
        "audio": "./assets/audio/generated/33a801ab9f93d7565153.mp3",
        "tag": "绘本第 17 页",
        "sourcePage": 17
      }
    ],
    "chants": [
      {
        "id": "r",
        "letter": "R",
        "lines": [
          "R, R, R, r, r, r.",
          "Rose, rose, r, r, r."
        ],
        "cn": "字母 R；例词 rose，意思是“玫瑰”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/76c43b3dab5d733e9814.mp3",
        "synthesized": true
      },
      {
        "id": "s",
        "letter": "S",
        "lines": [
          "S, S, S, s, s, s.",
          "Sun, sun, s, s, s."
        ],
        "cn": "字母 S；例词 sun，意思是“太阳”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/0b98a95803f343857b66.mp3",
        "synthesized": true
      },
      {
        "id": "t",
        "letter": "T",
        "lines": [
          "T, T, T, t, t, t.",
          "Tin, tin, t, t, t."
        ],
        "cn": "字母 T；例词 tin，意思是“罐子”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/4b8097b82f2af01fcf39.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Tess and Dad live on a boat.",
        "cn": "苔丝和爸爸住在一条船上。",
        "audio": "./assets/audio/generated/ef9f2b215cce72443d1e.mp3",
        "lines": [
          {
            "text": "Tess and Dad live on a boat.",
            "cn": "苔丝和爸爸住在一条船上。",
            "audio": "./assets/audio/generated/ef9f2b215cce72443d1e.mp3"
          }
        ],
        "image": "./assets/library/story-10/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "The sun goes down.",
        "cn": "太阳落山了。",
        "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3",
        "lines": [
          {
            "text": "The sun goes down.",
            "cn": "太阳落山了。",
            "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "Tess sits with Dad.",
        "cn": "苔丝和爸爸坐在一起。",
        "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3",
        "lines": [
          {
            "text": "Tess sits with Dad.",
            "cn": "苔丝和爸爸坐在一起。",
            "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "Seven swans!",
        "cn": "七只天鹅！",
        "audio": "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3",
        "lines": [
          {
            "text": "Seven swans!",
            "cn": "七只天鹅！",
            "audio": "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "So sweet!",
        "cn": "好可爱！",
        "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3",
        "lines": [
          {
            "text": "So sweet!",
            "cn": "好可爱！",
            "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "The sun comes up.",
        "cn": "太阳升起来。",
        "audio": "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3",
        "lines": [
          {
            "text": "The sun comes up.",
            "cn": "太阳升起来。",
            "audio": "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "It is a new day.",
        "cn": "新的一天到来了。",
        "audio": "./assets/audio/generated/c7a0ed0bd7875836676c.mp3",
        "lines": [
          {
            "text": "It is a new day.",
            "cn": "新的一天到来了。",
            "audio": "./assets/audio/generated/c7a0ed0bd7875836676c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Six swans!",
        "cn": "六只天鹅！",
        "audio": "./assets/audio/generated/593760cf64d252c9315c.mp3",
        "lines": [
          {
            "text": "Six swans!",
            "cn": "六只天鹅！",
            "audio": "./assets/audio/generated/593760cf64d252c9315c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Oh no!",
        "cn": "噢，不！",
        "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3",
        "lines": [
          {
            "text": "Oh no!",
            "cn": "噢，不！",
            "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Tess looks for the little swan.",
        "cn": "苔丝寻找那只小天鹅。",
        "audio": "./assets/audio/generated/93afa14e4637ac76009c.mp3",
        "lines": [
          {
            "text": "Tess looks for the little swan.",
            "cn": "苔丝寻找那只小天鹅。",
            "audio": "./assets/audio/generated/93afa14e4637ac76009c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Is it by the tub?",
        "cn": "它在桶旁边吗？",
        "audio": "./assets/audio/generated/824bbc70913eeb9571cf.mp3",
        "lines": [
          {
            "text": "Is it by the tub?",
            "cn": "它在桶旁边吗？",
            "audio": "./assets/audio/generated/824bbc70913eeb9571cf.mp3"
          }
        ],
        "image": "./assets/library/story-10/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "No.",
        "cn": "不在。",
        "audio": "./assets/audio/generated/38178a20b470cfd18299.mp3",
        "lines": [
          {
            "text": "No.",
            "cn": "不在。",
            "audio": "./assets/audio/generated/38178a20b470cfd18299.mp3"
          }
        ],
        "image": "./assets/library/story-10/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Dad looks for the little swan.",
        "cn": "爸爸寻找那只小天鹅。",
        "audio": "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3",
        "lines": [
          {
            "text": "Dad looks for the little swan.",
            "cn": "爸爸寻找那只小天鹅。",
            "audio": "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3"
          }
        ],
        "image": "./assets/library/story-10/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Is it by the tent?",
        "cn": "它在帐篷旁边吗？",
        "audio": "./assets/audio/generated/cdae6f07c983e0d70405.mp3",
        "lines": [
          {
            "text": "Is it by the tent?",
            "cn": "它在帐篷旁边吗？",
            "audio": "./assets/audio/generated/cdae6f07c983e0d70405.mp3"
          }
        ],
        "image": "./assets/library/story-10/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Yes!",
        "cn": "是的！",
        "audio": "./assets/audio/generated/8aff5108a050bcfab258.mp3",
        "lines": [
          {
            "text": "Yes!",
            "cn": "是的！",
            "audio": "./assets/audio/generated/8aff5108a050bcfab258.mp3"
          }
        ],
        "image": "./assets/library/story-10/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Her foot is in a tin.",
        "cn": "它的脚卡在一个罐子里。",
        "audio": "./assets/audio/generated/51773bb932508a6f7610.mp3",
        "lines": [
          {
            "text": "Her foot is in a tin.",
            "cn": "它的脚卡在一个罐子里。",
            "audio": "./assets/audio/generated/51773bb932508a6f7610.mp3"
          }
        ],
        "image": "./assets/library/story-10/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "She's stuck!",
        "cn": "它被卡住了！",
        "audio": "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3",
        "lines": [
          {
            "text": "She's stuck!",
            "cn": "它被卡住了！",
            "audio": "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3"
          }
        ],
        "image": "./assets/library/story-10/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Oh no!",
        "cn": "噢，不！",
        "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3",
        "lines": [
          {
            "text": "Oh no!",
            "cn": "噢，不！",
            "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3"
          }
        ],
        "image": "./assets/library/story-10/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Dad tugs and tugs.",
        "cn": "爸爸不停地用力拉。",
        "audio": "./assets/audio/generated/33a801ab9f93d7565153.mp3",
        "lines": [
          {
            "text": "Dad tugs and tugs.",
            "cn": "爸爸不停地用力拉。",
            "audio": "./assets/audio/generated/33a801ab9f93d7565153.mp3"
          }
        ],
        "image": "./assets/library/story-10/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "The sun goes down.",
        "cn": "太阳落山了。",
        "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3",
        "lines": [
          {
            "text": "The sun goes down.",
            "cn": "太阳落山了。",
            "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      },
      {
        "text": "Tess sits with Dad.",
        "cn": "苔丝和爸爸坐在一起。",
        "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3",
        "lines": [
          {
            "text": "Tess sits with Dad.",
            "cn": "苔丝和爸爸坐在一起。",
            "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      },
      {
        "text": "Seven swans.",
        "cn": "七只天鹅。",
        "audio": "./assets/audio/generated/ee5621532d7278baa0dc.mp3",
        "lines": [
          {
            "text": "Seven swans.",
            "cn": "七只天鹅。",
            "audio": "./assets/audio/generated/ee5621532d7278baa0dc.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      },
      {
        "text": "So sweet!",
        "cn": "好可爱！",
        "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3",
        "lines": [
          {
            "text": "So sweet!",
            "cn": "好可爱！",
            "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 6,
        "fileName": "自然拼读课件\\006.pdf",
        "totalPages": 99,
        "pages": [
          {
            "page": 12,
            "image": "./assets/library/phonics-06/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-06/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-06/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-06/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-06/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-06/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-06/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-06/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-06/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-06/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-06/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-06/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-06/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-06/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-06/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-06/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-06/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-06/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-06/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-06/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-06/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-06/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-06/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-06/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-06/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-06/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-06/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-06/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-06/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-06/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-06/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-06/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-06/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-06/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-06/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-06/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-06/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-06/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-06/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-06/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-06/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-06/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-06/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-06/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-06/p056.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-06/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-06/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-06/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-06/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-06/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-06/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-06/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-06/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-06/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-06/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-06/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-06/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-06/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-06/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-06/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-06/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-06/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-06/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-06/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-06/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-06/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-06/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-06/p079.webp"
          },
          {
            "page": 80,
            "image": "./assets/library/phonics-06/p080.webp"
          },
          {
            "page": 81,
            "image": "./assets/library/phonics-06/p081.webp"
          },
          {
            "page": 82,
            "image": "./assets/library/phonics-06/p082.webp"
          },
          {
            "page": 83,
            "image": "./assets/library/phonics-06/p083.webp"
          },
          {
            "page": 84,
            "image": "./assets/library/phonics-06/p084.webp"
          },
          {
            "page": 85,
            "image": "./assets/library/phonics-06/p085.webp"
          },
          {
            "page": 86,
            "image": "./assets/library/phonics-06/p086.webp"
          },
          {
            "page": 87,
            "image": "./assets/library/phonics-06/p087.webp"
          },
          {
            "page": 88,
            "image": "./assets/library/phonics-06/p088.webp"
          },
          {
            "page": 89,
            "image": "./assets/library/phonics-06/p089.webp"
          },
          {
            "page": 90,
            "image": "./assets/library/phonics-06/p090.webp"
          },
          {
            "page": 91,
            "image": "./assets/library/phonics-06/p091.webp"
          },
          {
            "page": 92,
            "image": "./assets/library/phonics-06/p092.webp"
          },
          {
            "page": 93,
            "image": "./assets/library/phonics-06/p093.webp"
          },
          {
            "page": 94,
            "image": "./assets/library/phonics-06/p094.webp"
          },
          {
            "page": 95,
            "image": "./assets/library/phonics-06/p095.webp"
          }
        ],
        "title": "第 6 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 10,
        "fileName": "绘本\\010.pdf",
        "totalPages": 21,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-10/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-10/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-10/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-10/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-10/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-10/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-10/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-10/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-10/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-10/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-10/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-10/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-10/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-10/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-10/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-10/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-10/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-10/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-10/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-10/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/story-10/p021.webp"
          }
        ],
        "title": "Tess and the Swans · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Rr–Tt 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-07",
    "lesson": 7,
    "title": "Uncle Vic's Wagon",
    "titleCn": "维克叔叔的马车",
    "available": true,
    "subtitle": "Uu–Ww",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Uu–Ww、本课词句与《维克叔叔的马车》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-11/p001.webp",
    "bookNumber": 11,
    "letters": [
      {
        "letter": "U",
        "lower": "u",
        "name": "/juː/",
        "sound": "/ʌ/",
        "word": "uncle",
        "wordCn": "叔叔；舅舅",
        "audio": "./assets/audio/generated/a25513c7e0f6eaa80a33.mp3",
        "wordAudio": "./assets/audio/generated/3107ea0301a27894a212.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "V",
        "lower": "v",
        "name": "/viː/",
        "sound": "/v/",
        "word": "van",
        "wordCn": "厢式货车",
        "audio": "./assets/audio/generated/de5a6f78116eca62d7fc.mp3",
        "wordAudio": "./assets/audio/generated/970b1897af0abab6127d.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "W",
        "lower": "w",
        "name": "/ˈdʌbəljuː/",
        "sound": "/w/",
        "word": "wood",
        "wordCn": "木头；树林",
        "audio": "./assets/audio/generated/fcb5f40df9be6bae66c1.mp3",
        "wordAudio": "./assets/audio/generated/99f7855eb789dfecf9ea.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "bag",
        "en": "bag",
        "cn": "书包",
        "audio": "./assets/audio/words/bag.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "book",
        "en": "book",
        "cn": "书",
        "audio": "./assets/audio/generated/92719fe0cf8cd51592af.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "pen",
        "en": "pen",
        "cn": "钢笔",
        "audio": "./assets/audio/generated/e21a6b0cb193057e06ac.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "ruler",
        "en": "ruler",
        "cn": "尺子",
        "audio": "./assets/audio/generated/5972814068a183e232d6.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "can",
        "en": "can",
        "cn": "能够",
        "audio": "./assets/audio/generated/9f584196e7fe6de85d38.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "van",
        "en": "van",
        "cn": "厢式货车",
        "audio": "./assets/audio/generated/970b1897af0abab6127d.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "but",
        "en": "but",
        "cn": "但是",
        "audio": "./assets/audio/generated/cdc29937887188ad3702.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "win",
        "en": "win",
        "cn": "赢",
        "audio": "./assets/audio/generated/823a3180dad3c9c3c4de.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "wig",
        "en": "wig",
        "cn": "假发",
        "audio": "./assets/audio/generated/2249476332138d1ed3ea.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "cup",
        "en": "cup",
        "cn": "杯子",
        "audio": "./assets/audio/generated/c6171781d65f3ccce113.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "vet",
        "en": "vet",
        "cn": "兽医",
        "audio": "./assets/audio/generated/5f9276129b845b990535.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "sob",
        "en": "sob",
        "cn": "啜泣",
        "audio": "./assets/audio/generated/454bedc703c397ac8232.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "top",
        "en": "top",
        "cn": "顶部",
        "audio": "./assets/audio/generated/28720365c5e7476a011e.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "uncle",
        "en": "uncle",
        "cn": "叔叔",
        "audio": "./assets/audio/generated/3107ea0301a27894a212.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-11/p003.webp"
      },
      {
        "id": "vic",
        "en": "Vic",
        "cn": "维克",
        "audio": "./assets/audio/generated/d8f9af9f384c3cfef147.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-11/p004.webp"
      },
      {
        "id": "wood",
        "en": "wood",
        "cn": "树林",
        "audio": "./assets/audio/generated/99f7855eb789dfecf9ea.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-11/p005.webp"
      },
      {
        "id": "wagon",
        "en": "wagon",
        "cn": "马车",
        "audio": "./assets/audio/generated/baf6a0b70ab07cf16c76.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-11/p007.webp"
      },
      {
        "id": "up",
        "en": "up",
        "cn": "向上",
        "audio": "./assets/audio/generated/75a288c0d6898c5f7b05.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-11/p011.webp"
      },
      {
        "id": "work",
        "en": "work",
        "cn": "工作；修理",
        "audio": "./assets/audio/generated/00e13ed7af55b27622f1.mp3",
        "audioType": "synthesized",
        "sourcePage": 13,
        "image": "./assets/library/story-11/p013.webp"
      }
    ],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-11-line-1",
        "text": "Uncle Vic is in the woods.",
        "cn": "维克叔叔在树林里。",
        "audio": "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-11-line-2",
        "text": "He finds a wagon.",
        "cn": "他发现了一辆马车。",
        "audio": "./assets/audio/generated/da136114a1a4bad9bada.mp3",
        "tag": "绘本第 6 页",
        "sourcePage": 6
      },
      {
        "id": "book-11-line-3",
        "text": "Uncle Vic gets his van.",
        "cn": "维克叔叔开来了他的厢式货车。",
        "audio": "./assets/audio/generated/cbaea186eada815e95b9.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-11-line-4",
        "text": "He puts the wagon in it.",
        "cn": "他把马车放进货车里。",
        "audio": "./assets/audio/generated/04412d8f615d1d0c1509.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-11-line-5",
        "text": "Up in the van!",
        "cn": "搬上货车！",
        "audio": "./assets/audio/generated/a40431bae6a34643662b.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-11-line-6",
        "text": "Uncle Vic works on the wagon.",
        "cn": "维克叔叔在修理马车。",
        "audio": "./assets/audio/generated/3db49ba674190aba1547.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-11-line-7",
        "text": "Come and help.",
        "cn": "过来帮忙。",
        "audio": "./assets/audio/generated/d9e86b183dc04f71b033.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-11-line-8",
        "text": "OK, Uncle.",
        "cn": "好的，叔叔。",
        "audio": "./assets/audio/generated/c930abe0a399d95c8617.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-11-line-9",
        "text": "We put the wheel back on.",
        "cn": "我们把车轮装了回去。",
        "audio": "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-11-line-10",
        "text": "Very good work!",
        "cn": "干得漂亮！",
        "audio": "./assets/audio/generated/9f19b1e1e280546754f2.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-11-line-11",
        "text": "We are in the woods.",
        "cn": "我们在树林里。",
        "audio": "./assets/audio/generated/8c3240c78e0a73d41d93.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      },
      {
        "id": "book-11-line-12",
        "text": "Uncle Vic finds a van!",
        "cn": "维克叔叔又发现了一辆货车！",
        "audio": "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3",
        "tag": "绘本第 16 页",
        "sourcePage": 16
      },
      {
        "id": "book-11-line-13",
        "text": "Uncle!",
        "cn": "叔叔！",
        "audio": "./assets/audio/generated/9203a830fd113b28407f.mp3",
        "tag": "绘本第 16 页",
        "sourcePage": 16
      }
    ],
    "chants": [
      {
        "id": "u",
        "letter": "U",
        "lines": [
          "U, U, U, u, u, u.",
          "Uncle, uncle, u, u, u."
        ],
        "cn": "字母 U；例词 uncle，意思是“叔叔；舅舅”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/83c42601006ae5580fd2.mp3",
        "synthesized": true
      },
      {
        "id": "v",
        "letter": "V",
        "lines": [
          "V, V, V, v, v, v.",
          "Van, van, v, v, v."
        ],
        "cn": "字母 V；例词 van，意思是“厢式货车”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/36c1c00651b78c936b17.mp3",
        "synthesized": true
      },
      {
        "id": "w",
        "letter": "W",
        "lines": [
          "W, W, W, w, w, w.",
          "Wood, wood, w, w, w."
        ],
        "cn": "字母 W；例词 wood，意思是“木头；树林”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/686cf8c3a57e23352ca9.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "Uncle Vic is in the woods.",
        "cn": "维克叔叔在树林里。",
        "audio": "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3",
        "lines": [
          {
            "text": "Uncle Vic is in the woods.",
            "cn": "维克叔叔在树林里。",
            "audio": "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3"
          }
        ],
        "image": "./assets/library/story-11/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "He finds a wagon.",
        "cn": "他发现了一辆马车。",
        "audio": "./assets/audio/generated/da136114a1a4bad9bada.mp3",
        "lines": [
          {
            "text": "He finds a wagon.",
            "cn": "他发现了一辆马车。",
            "audio": "./assets/audio/generated/da136114a1a4bad9bada.mp3"
          }
        ],
        "image": "./assets/library/story-11/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Uncle Vic gets his van.",
        "cn": "维克叔叔开来了他的厢式货车。",
        "audio": "./assets/audio/generated/cbaea186eada815e95b9.mp3",
        "lines": [
          {
            "text": "Uncle Vic gets his van.",
            "cn": "维克叔叔开来了他的厢式货车。",
            "audio": "./assets/audio/generated/cbaea186eada815e95b9.mp3"
          }
        ],
        "image": "./assets/library/story-11/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "He puts the wagon in it.",
        "cn": "他把马车放进货车里。",
        "audio": "./assets/audio/generated/04412d8f615d1d0c1509.mp3",
        "lines": [
          {
            "text": "He puts the wagon in it.",
            "cn": "他把马车放进货车里。",
            "audio": "./assets/audio/generated/04412d8f615d1d0c1509.mp3"
          }
        ],
        "image": "./assets/library/story-11/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Up in the van!",
        "cn": "搬上货车！",
        "audio": "./assets/audio/generated/a40431bae6a34643662b.mp3",
        "lines": [
          {
            "text": "Up in the van!",
            "cn": "搬上货车！",
            "audio": "./assets/audio/generated/a40431bae6a34643662b.mp3"
          }
        ],
        "image": "./assets/library/story-11/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Uncle Vic works on the wagon.",
        "cn": "维克叔叔在修理马车。",
        "audio": "./assets/audio/generated/3db49ba674190aba1547.mp3",
        "lines": [
          {
            "text": "Uncle Vic works on the wagon.",
            "cn": "维克叔叔在修理马车。",
            "audio": "./assets/audio/generated/3db49ba674190aba1547.mp3"
          }
        ],
        "image": "./assets/library/story-11/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Come and help.",
        "cn": "过来帮忙。",
        "audio": "./assets/audio/generated/d9e86b183dc04f71b033.mp3",
        "lines": [
          {
            "text": "Come and help.",
            "cn": "过来帮忙。",
            "audio": "./assets/audio/generated/d9e86b183dc04f71b033.mp3"
          }
        ],
        "image": "./assets/library/story-11/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "OK, Uncle.",
        "cn": "好的，叔叔。",
        "audio": "./assets/audio/generated/c930abe0a399d95c8617.mp3",
        "lines": [
          {
            "text": "OK, Uncle.",
            "cn": "好的，叔叔。",
            "audio": "./assets/audio/generated/c930abe0a399d95c8617.mp3"
          }
        ],
        "image": "./assets/library/story-11/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "We put the wheel back on.",
        "cn": "我们把车轮装了回去。",
        "audio": "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3",
        "lines": [
          {
            "text": "We put the wheel back on.",
            "cn": "我们把车轮装了回去。",
            "audio": "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3"
          }
        ],
        "image": "./assets/library/story-11/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Very good work!",
        "cn": "干得漂亮！",
        "audio": "./assets/audio/generated/9f19b1e1e280546754f2.mp3",
        "lines": [
          {
            "text": "Very good work!",
            "cn": "干得漂亮！",
            "audio": "./assets/audio/generated/9f19b1e1e280546754f2.mp3"
          }
        ],
        "image": "./assets/library/story-11/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "We are in the woods.",
        "cn": "我们在树林里。",
        "audio": "./assets/audio/generated/8c3240c78e0a73d41d93.mp3",
        "lines": [
          {
            "text": "We are in the woods.",
            "cn": "我们在树林里。",
            "audio": "./assets/audio/generated/8c3240c78e0a73d41d93.mp3"
          }
        ],
        "image": "./assets/library/story-11/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "Uncle Vic finds a van!",
        "cn": "维克叔叔又发现了一辆货车！",
        "audio": "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3",
        "lines": [
          {
            "text": "Uncle Vic finds a van!",
            "cn": "维克叔叔又发现了一辆货车！",
            "audio": "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3"
          }
        ],
        "image": "./assets/library/story-11/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      },
      {
        "text": "Uncle!",
        "cn": "叔叔！",
        "audio": "./assets/audio/generated/9203a830fd113b28407f.mp3",
        "lines": [
          {
            "text": "Uncle!",
            "cn": "叔叔！",
            "audio": "./assets/audio/generated/9203a830fd113b28407f.mp3"
          }
        ],
        "image": "./assets/library/story-11/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 7,
        "fileName": "自然拼读课件\\007.pdf",
        "totalPages": 88,
        "pages": [
          {
            "page": 10,
            "image": "./assets/library/phonics-07/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/phonics-07/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/phonics-07/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-07/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-07/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-07/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-07/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-07/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-07/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-07/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-07/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-07/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-07/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-07/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-07/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-07/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-07/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-07/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-07/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-07/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-07/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-07/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-07/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-07/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-07/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-07/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-07/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-07/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-07/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-07/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-07/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-07/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-07/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-07/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-07/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-07/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-07/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-07/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-07/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-07/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-07/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-07/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-07/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-07/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-07/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-07/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-07/p056.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-07/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-07/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-07/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-07/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-07/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-07/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-07/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-07/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-07/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-07/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-07/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-07/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-07/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-07/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-07/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-07/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-07/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-07/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-07/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-07/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-07/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-07/p079.webp"
          }
        ],
        "title": "第 7 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 11,
        "fileName": "绘本\\011.pdf",
        "totalPages": 18,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-11/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-11/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-11/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-11/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-11/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-11/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-11/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-11/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-11/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-11/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-11/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-11/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-11/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-11/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-11/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-11/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-11/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-11/p018.webp"
          }
        ],
        "title": "Uncle Vic's Wagon · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Uu–Ww 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-08",
    "lesson": 8,
    "title": "Ox, Yak and Zebra",
    "titleCn": "公牛、牦牛和斑马",
    "available": true,
    "subtitle": "Xx–Zz",
    "level": "双新阅读表达 · Level 2",
    "description": "字母 Xx–Zz、本课词句与《公牛、牦牛和斑马》逐页阅读。新增声音为合成朗读，不是课程原录音。",
    "coverImage": "./assets/library/story-12/p001.webp",
    "bookNumber": 12,
    "letters": [
      {
        "letter": "X",
        "lower": "x",
        "name": "/eks/",
        "sound": "/ks/",
        "word": "ox",
        "wordCn": "公牛",
        "audio": "./assets/audio/generated/4b68ab3847feda7d6c62.mp3",
        "wordAudio": "./assets/audio/generated/1dd14ffc3c3045741a5e.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "Y",
        "lower": "y",
        "name": "/waɪ/",
        "sound": "/j/",
        "word": "yak",
        "wordCn": "牦牛",
        "audio": "./assets/audio/generated/18f5384d58bcb1bba0bc.mp3",
        "wordAudio": "./assets/audio/generated/e378e72a75855c08d49b.mp3",
        "nameAudioOnly": true
      },
      {
        "letter": "Z",
        "lower": "z",
        "name": "/ziː/",
        "sound": "/z/",
        "word": "zoo",
        "wordCn": "动物园",
        "audio": "./assets/audio/generated/bbeebd879e1dff691854.mp3",
        "wordAudio": "./assets/audio/generated/24fe93c9e17cb80452e5.mp3",
        "nameAudioOnly": true
      }
    ],
    "coreWords": [
      {
        "id": "pencil",
        "en": "pencil",
        "cn": "铅笔",
        "audio": "./assets/audio/generated/13809668fb436386706f.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "pencil-case",
        "en": "pencil case",
        "cn": "文具盒",
        "audio": "./assets/audio/generated/3b74bc54b6c221270c0d.mp3",
        "audioType": "synthesized"
      }
    ],
    "phonicsWords": [
      {
        "id": "box",
        "en": "box",
        "cn": "盒子",
        "audio": "./assets/audio/generated/26f8567f2569182294c3.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fox",
        "en": "fox",
        "cn": "狐狸",
        "audio": "./assets/audio/generated/776cb326ab0cd5f0a974.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "fix",
        "en": "fix",
        "cn": "修理",
        "audio": "./assets/audio/generated/1c6e6c4c02e55178e858.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "yum",
        "en": "yum",
        "cn": "真好吃",
        "audio": "./assets/audio/generated/809c2fb94fff223e9647.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "yes",
        "en": "yes",
        "cn": "是的",
        "audio": "./assets/audio/generated/8a798890fe93817163b1.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "yet",
        "en": "yet",
        "cn": "还；尚未",
        "audio": "./assets/audio/generated/cfd96dd92f7e0025b146.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "yak",
        "en": "yak",
        "cn": "牦牛",
        "audio": "./assets/audio/generated/e378e72a75855c08d49b.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "zip",
        "en": "zip",
        "cn": "拉链",
        "audio": "./assets/audio/generated/4a70fe9aa6436e02c2de.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "zig",
        "en": "zig",
        "cn": "之字形的一转",
        "audio": "./assets/audio/generated/77ebfe9993f116e089f2.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "zog",
        "en": "zog",
        "cn": "拼读练习音节（无常用词义）",
        "audio": "./assets/audio/generated/185dd474b587a95a6b68.mp3",
        "audioType": "synthesized"
      },
      {
        "id": "taxi",
        "en": "taxi",
        "cn": "出租车",
        "audio": "./assets/audio/generated/12796d3d5f4e132385f8.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-12/p004.webp"
      },
      {
        "id": "ox",
        "en": "ox",
        "cn": "公牛",
        "audio": "./assets/audio/generated/1dd14ffc3c3045741a5e.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-12/p006.webp"
      },
      {
        "id": "zoo",
        "en": "zoo",
        "cn": "动物园",
        "audio": "./assets/audio/generated/24fe93c9e17cb80452e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-12/p007.webp"
      },
      {
        "id": "zebra",
        "en": "zebra",
        "cn": "斑马",
        "audio": "./assets/audio/generated/676cb75018edccf10fce.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-12/p011.webp"
      }
    ],
    "introSentences": [
      {
        "id": "expression-1",
        "text": "This is my pencil.",
        "cn": "这是我的铅笔。",
        "audio": "./assets/audio/generated/7e7b7a3474c5c3b19da4.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-2",
        "text": "This is my pencil case.",
        "cn": "这是我的文具盒。",
        "audio": "./assets/audio/generated/192e9d1e64b5d3c8b73c.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-3",
        "text": "This is my book.",
        "cn": "这是我的书。",
        "audio": "./assets/audio/generated/f89ad04ea6795bb35f43.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-4",
        "text": "This is my bag.",
        "cn": "这是我的书包。",
        "audio": "./assets/audio/generated/df63101fed847354bade.mp3",
        "tag": "课件句型与替换练习"
      },
      {
        "id": "expression-5",
        "text": "This is my ruler.",
        "cn": "这是我的尺子。",
        "audio": "./assets/audio/generated/c6cf43f650ed2cbd34aa.mp3",
        "tag": "课件句型与替换练习"
      }
    ],
    "storySentences": [
      {
        "id": "book-12-line-1",
        "text": "This is Fox in his yellow taxi.",
        "cn": "这是坐在黄色出租车里的狐狸。",
        "audio": "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3",
        "tag": "绘本第 2 页",
        "sourcePage": 2
      },
      {
        "id": "book-12-line-2",
        "text": "Ox wants a taxi.",
        "cn": "公牛想坐出租车。",
        "audio": "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-12-line-3",
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-12-line-4",
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-12-line-5",
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "tag": "绘本第 5 页",
        "sourcePage": 5
      },
      {
        "id": "book-12-line-6",
        "text": "Yak wants a taxi.",
        "cn": "牦牛想坐出租车。",
        "audio": "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3",
        "tag": "绘本第 8 页",
        "sourcePage": 8
      },
      {
        "id": "book-12-line-7",
        "text": "Zebra wants a taxi.",
        "cn": "斑马想坐出租车。",
        "audio": "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3",
        "tag": "绘本第 10 页",
        "sourcePage": 10
      },
      {
        "id": "book-12-line-8",
        "text": "Ox, Yak and Zebra want a party.",
        "cn": "公牛、牦牛和斑马想开一个派对。",
        "audio": "./assets/audio/generated/365b19f5f59b8b10df0f.mp3",
        "tag": "绘本第 12 页",
        "sourcePage": 12
      },
      {
        "id": "book-12-line-9",
        "text": "This is the zoo keeper.",
        "cn": "这是动物园管理员。",
        "audio": "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-12-line-10",
        "text": "He wants more animals!",
        "cn": "他想要更多动物！",
        "audio": "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3",
        "tag": "绘本第 13 页",
        "sourcePage": 13
      },
      {
        "id": "book-12-line-11",
        "text": "Ox, Yak and Zebra run and run.",
        "cn": "公牛、牦牛和斑马跑呀跑。",
        "audio": "./assets/audio/generated/d2b4b4146f60dac10b31.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-12-line-12",
        "text": "Oops!",
        "cn": "哎呀！",
        "audio": "./assets/audio/generated/8344947a402c722af9d8.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-12-line-13",
        "text": "Run!",
        "cn": "快跑！",
        "audio": "./assets/audio/generated/cd6317b826072e616fa0.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-12-line-14",
        "text": "To the taxi!",
        "cn": "去出租车那里！",
        "audio": "./assets/audio/generated/fafd59243a2026494340.mp3",
        "tag": "绘本第 14 页",
        "sourcePage": 14
      },
      {
        "id": "book-12-line-15",
        "text": "Ox, Yak and Zebra want a taxi.",
        "cn": "公牛、牦牛和斑马想坐出租车。",
        "audio": "./assets/audio/generated/af7fdd2101121561b1b2.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      },
      {
        "id": "book-12-line-16",
        "text": "No!",
        "cn": "不！",
        "audio": "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3",
        "tag": "绘本第 15 页",
        "sourcePage": 15
      }
    ],
    "chants": [
      {
        "id": "x",
        "letter": "X",
        "lines": [
          "X, X, X, x, x, x.",
          "Ox, ox, x, x, x."
        ],
        "cn": "字母 X；例词 ox，意思是“公牛”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/3b023b09aad1bb4ba8c8.mp3",
        "synthesized": true
      },
      {
        "id": "y",
        "letter": "Y",
        "lines": [
          "Y, Y, Y, y, y, y.",
          "Yak, yak, y, y, y."
        ],
        "cn": "字母 Y；例词 yak，意思是“牦牛”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/bdffca518a42db2493ca.mp3",
        "synthesized": true
      },
      {
        "id": "z",
        "letter": "Z",
        "lines": [
          "Z, Z, Z, z, z, z.",
          "Zoo, zoo, z, z, z."
        ],
        "cn": "字母 Z；例词 zoo，意思是“动物园”。小写字母表示课件中的字母音练习。",
        "audio": "./assets/audio/generated/47317e362ac134612f47.mp3",
        "synthesized": true
      }
    ],
    "story": [
      {
        "text": "This is Fox in his yellow taxi.",
        "cn": "这是坐在黄色出租车里的狐狸。",
        "audio": "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3",
        "lines": [
          {
            "text": "This is Fox in his yellow taxi.",
            "cn": "这是坐在黄色出租车里的狐狸。",
            "audio": "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3"
          }
        ],
        "image": "./assets/library/story-12/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Ox wants a taxi.",
        "cn": "公牛想坐出租车。",
        "audio": "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3",
        "lines": [
          {
            "text": "Ox wants a taxi.",
            "cn": "公牛想坐出租车。",
            "audio": "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "lines": [
          {
            "text": "To the zoo, Fox!",
            "cn": "去动物园，狐狸！",
            "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "lines": [
          {
            "text": "Yes.",
            "cn": "好的。",
            "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "lines": [
          {
            "text": "Get in.",
            "cn": "上车吧。",
            "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Yak wants a taxi.",
        "cn": "牦牛想坐出租车。",
        "audio": "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3",
        "lines": [
          {
            "text": "Yak wants a taxi.",
            "cn": "牦牛想坐出租车。",
            "audio": "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "lines": [
          {
            "text": "To the zoo, Fox!",
            "cn": "去动物园，狐狸！",
            "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "lines": [
          {
            "text": "Yes.",
            "cn": "好的。",
            "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "lines": [
          {
            "text": "Get in.",
            "cn": "上车吧。",
            "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Zebra wants a taxi.",
        "cn": "斑马想坐出租车。",
        "audio": "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3",
        "lines": [
          {
            "text": "Zebra wants a taxi.",
            "cn": "斑马想坐出租车。",
            "audio": "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "lines": [
          {
            "text": "To the zoo, Fox!",
            "cn": "去动物园，狐狸！",
            "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "lines": [
          {
            "text": "Yes.",
            "cn": "好的。",
            "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "lines": [
          {
            "text": "Get in.",
            "cn": "上车吧。",
            "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ox, Yak and Zebra want a party.",
        "cn": "公牛、牦牛和斑马想开一个派对。",
        "audio": "./assets/audio/generated/365b19f5f59b8b10df0f.mp3",
        "lines": [
          {
            "text": "Ox, Yak and Zebra want a party.",
            "cn": "公牛、牦牛和斑马想开一个派对。",
            "audio": "./assets/audio/generated/365b19f5f59b8b10df0f.mp3"
          }
        ],
        "image": "./assets/library/story-12/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "This is the zoo keeper.",
        "cn": "这是动物园管理员。",
        "audio": "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3",
        "lines": [
          {
            "text": "This is the zoo keeper.",
            "cn": "这是动物园管理员。",
            "audio": "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "He wants more animals!",
        "cn": "他想要更多动物！",
        "audio": "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3",
        "lines": [
          {
            "text": "He wants more animals!",
            "cn": "他想要更多动物！",
            "audio": "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3"
          }
        ],
        "image": "./assets/library/story-12/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Ox, Yak and Zebra run and run.",
        "cn": "公牛、牦牛和斑马跑呀跑。",
        "audio": "./assets/audio/generated/d2b4b4146f60dac10b31.mp3",
        "lines": [
          {
            "text": "Ox, Yak and Zebra run and run.",
            "cn": "公牛、牦牛和斑马跑呀跑。",
            "audio": "./assets/audio/generated/d2b4b4146f60dac10b31.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Oops!",
        "cn": "哎呀！",
        "audio": "./assets/audio/generated/8344947a402c722af9d8.mp3",
        "lines": [
          {
            "text": "Oops!",
            "cn": "哎呀！",
            "audio": "./assets/audio/generated/8344947a402c722af9d8.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Run!",
        "cn": "快跑！",
        "audio": "./assets/audio/generated/cd6317b826072e616fa0.mp3",
        "lines": [
          {
            "text": "Run!",
            "cn": "快跑！",
            "audio": "./assets/audio/generated/cd6317b826072e616fa0.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "To the taxi!",
        "cn": "去出租车那里！",
        "audio": "./assets/audio/generated/fafd59243a2026494340.mp3",
        "lines": [
          {
            "text": "To the taxi!",
            "cn": "去出租车那里！",
            "audio": "./assets/audio/generated/fafd59243a2026494340.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Ox, Yak and Zebra want a taxi.",
        "cn": "公牛、牦牛和斑马想坐出租车。",
        "audio": "./assets/audio/generated/af7fdd2101121561b1b2.mp3",
        "lines": [
          {
            "text": "Ox, Yak and Zebra want a taxi.",
            "cn": "公牛、牦牛和斑马想坐出租车。",
            "audio": "./assets/audio/generated/af7fdd2101121561b1b2.mp3"
          }
        ],
        "image": "./assets/library/story-12/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "No!",
        "cn": "不！",
        "audio": "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3",
        "lines": [
          {
            "text": "No!",
            "cn": "不！",
            "audio": "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3"
          }
        ],
        "image": "./assets/library/story-12/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "phonics",
        "number": 8,
        "fileName": "自然拼读课件\\008.pdf",
        "totalPages": 92,
        "pages": [
          {
            "page": 10,
            "image": "./assets/library/phonics-08/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/phonics-08/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/phonics-08/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/phonics-08/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/phonics-08/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/phonics-08/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/phonics-08/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/phonics-08/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/phonics-08/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/phonics-08/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/phonics-08/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/phonics-08/p021.webp"
          },
          {
            "page": 22,
            "image": "./assets/library/phonics-08/p022.webp"
          },
          {
            "page": 23,
            "image": "./assets/library/phonics-08/p023.webp"
          },
          {
            "page": 24,
            "image": "./assets/library/phonics-08/p024.webp"
          },
          {
            "page": 25,
            "image": "./assets/library/phonics-08/p025.webp"
          },
          {
            "page": 26,
            "image": "./assets/library/phonics-08/p026.webp"
          },
          {
            "page": 27,
            "image": "./assets/library/phonics-08/p027.webp"
          },
          {
            "page": 28,
            "image": "./assets/library/phonics-08/p028.webp"
          },
          {
            "page": 29,
            "image": "./assets/library/phonics-08/p029.webp"
          },
          {
            "page": 30,
            "image": "./assets/library/phonics-08/p030.webp"
          },
          {
            "page": 31,
            "image": "./assets/library/phonics-08/p031.webp"
          },
          {
            "page": 32,
            "image": "./assets/library/phonics-08/p032.webp"
          },
          {
            "page": 33,
            "image": "./assets/library/phonics-08/p033.webp"
          },
          {
            "page": 34,
            "image": "./assets/library/phonics-08/p034.webp"
          },
          {
            "page": 35,
            "image": "./assets/library/phonics-08/p035.webp"
          },
          {
            "page": 36,
            "image": "./assets/library/phonics-08/p036.webp"
          },
          {
            "page": 37,
            "image": "./assets/library/phonics-08/p037.webp"
          },
          {
            "page": 38,
            "image": "./assets/library/phonics-08/p038.webp"
          },
          {
            "page": 39,
            "image": "./assets/library/phonics-08/p039.webp"
          },
          {
            "page": 40,
            "image": "./assets/library/phonics-08/p040.webp"
          },
          {
            "page": 41,
            "image": "./assets/library/phonics-08/p041.webp"
          },
          {
            "page": 42,
            "image": "./assets/library/phonics-08/p042.webp"
          },
          {
            "page": 43,
            "image": "./assets/library/phonics-08/p043.webp"
          },
          {
            "page": 44,
            "image": "./assets/library/phonics-08/p044.webp"
          },
          {
            "page": 45,
            "image": "./assets/library/phonics-08/p045.webp"
          },
          {
            "page": 46,
            "image": "./assets/library/phonics-08/p046.webp"
          },
          {
            "page": 47,
            "image": "./assets/library/phonics-08/p047.webp"
          },
          {
            "page": 48,
            "image": "./assets/library/phonics-08/p048.webp"
          },
          {
            "page": 49,
            "image": "./assets/library/phonics-08/p049.webp"
          },
          {
            "page": 50,
            "image": "./assets/library/phonics-08/p050.webp"
          },
          {
            "page": 51,
            "image": "./assets/library/phonics-08/p051.webp"
          },
          {
            "page": 52,
            "image": "./assets/library/phonics-08/p052.webp"
          },
          {
            "page": 53,
            "image": "./assets/library/phonics-08/p053.webp"
          },
          {
            "page": 54,
            "image": "./assets/library/phonics-08/p054.webp"
          },
          {
            "page": 55,
            "image": "./assets/library/phonics-08/p055.webp"
          },
          {
            "page": 56,
            "image": "./assets/library/phonics-08/p056.webp"
          },
          {
            "page": 57,
            "image": "./assets/library/phonics-08/p057.webp"
          },
          {
            "page": 58,
            "image": "./assets/library/phonics-08/p058.webp"
          },
          {
            "page": 59,
            "image": "./assets/library/phonics-08/p059.webp"
          },
          {
            "page": 60,
            "image": "./assets/library/phonics-08/p060.webp"
          },
          {
            "page": 61,
            "image": "./assets/library/phonics-08/p061.webp"
          },
          {
            "page": 62,
            "image": "./assets/library/phonics-08/p062.webp"
          },
          {
            "page": 63,
            "image": "./assets/library/phonics-08/p063.webp"
          },
          {
            "page": 64,
            "image": "./assets/library/phonics-08/p064.webp"
          },
          {
            "page": 65,
            "image": "./assets/library/phonics-08/p065.webp"
          },
          {
            "page": 66,
            "image": "./assets/library/phonics-08/p066.webp"
          },
          {
            "page": 67,
            "image": "./assets/library/phonics-08/p067.webp"
          },
          {
            "page": 68,
            "image": "./assets/library/phonics-08/p068.webp"
          },
          {
            "page": 69,
            "image": "./assets/library/phonics-08/p069.webp"
          },
          {
            "page": 70,
            "image": "./assets/library/phonics-08/p070.webp"
          },
          {
            "page": 71,
            "image": "./assets/library/phonics-08/p071.webp"
          },
          {
            "page": 72,
            "image": "./assets/library/phonics-08/p072.webp"
          },
          {
            "page": 73,
            "image": "./assets/library/phonics-08/p073.webp"
          },
          {
            "page": 74,
            "image": "./assets/library/phonics-08/p074.webp"
          },
          {
            "page": 75,
            "image": "./assets/library/phonics-08/p075.webp"
          },
          {
            "page": 76,
            "image": "./assets/library/phonics-08/p076.webp"
          },
          {
            "page": 77,
            "image": "./assets/library/phonics-08/p077.webp"
          },
          {
            "page": 78,
            "image": "./assets/library/phonics-08/p078.webp"
          },
          {
            "page": 79,
            "image": "./assets/library/phonics-08/p079.webp"
          },
          {
            "page": 80,
            "image": "./assets/library/phonics-08/p080.webp"
          },
          {
            "page": 81,
            "image": "./assets/library/phonics-08/p081.webp"
          },
          {
            "page": 82,
            "image": "./assets/library/phonics-08/p082.webp"
          },
          {
            "page": 83,
            "image": "./assets/library/phonics-08/p083.webp"
          },
          {
            "page": 84,
            "image": "./assets/library/phonics-08/p084.webp"
          },
          {
            "page": 85,
            "image": "./assets/library/phonics-08/p085.webp"
          },
          {
            "page": 86,
            "image": "./assets/library/phonics-08/p086.webp"
          },
          {
            "page": 87,
            "image": "./assets/library/phonics-08/p087.webp"
          },
          {
            "page": 88,
            "image": "./assets/library/phonics-08/p088.webp"
          }
        ],
        "title": "第 8 课 · 自然拼读原页"
      },
      {
        "kind": "story",
        "number": 12,
        "fileName": "绘本\\012.pdf",
        "totalPages": 17,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-12/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-12/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-12/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-12/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-12/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-12/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-12/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-12/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-12/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-12/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-12/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-12/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-12/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-12/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-12/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-12/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-12/p017.webp"
          }
        ],
        "title": "Ox, Yak and Zebra · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "letters",
        "text": "认读 Xx–Zz 的字母名与字母音"
      },
      {
        "id": "words",
        "text": "跟读本课核心词和拼读词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读本课英文和对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本并尝试复述"
      }
    ]
  },
  {
    "id": "lesson-09",
    "lesson": 9,
    "title": "Lesson 09",
    "titleCn": "课程待补充",
    "available": false
  },
  {
    "id": "lesson-10",
    "lesson": 10,
    "title": "Lesson 10",
    "titleCn": "课程待补充",
    "available": false
  },
  {
    "id": "lesson-11",
    "lesson": 11,
    "title": "Lesson 11",
    "titleCn": "课程待补充",
    "available": false
  },
  {
    "id": "lesson-12",
    "lesson": 12,
    "title": "Lesson 12",
    "titleCn": "课程待补充",
    "available": false
  }
];
window.XIAOYUAN_READINGS = [
  {
    "id": "reading-01",
    "lesson": null,
    "bookNumber": 1,
    "readingOrder": 1,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Adam and the Bear",
    "titleCn": "亚当和大熊",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-01/p001.webp",
    "coreWords": [
      {
        "en": "Adam",
        "phonetic": "/ˈædəm/",
        "cn": "亚当",
        "audio": "./assets/audio/words/adam.mp3",
        "image": "./assets/library/story-01/p003.webp",
        "sourcePage": 3
      },
      {
        "en": "apple",
        "phonetic": "/ˈæpəl/",
        "cn": "苹果",
        "audio": "./assets/audio/words/apple.mp3",
        "image": "./assets/library/story-01/p004.webp",
        "sourcePage": 4
      },
      {
        "id": "brown",
        "en": "brown",
        "cn": "棕色的",
        "audio": "./assets/audio/generated/5eb67f9f8409b9c3f739.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-01/p006.webp"
      },
      {
        "en": "bear",
        "phonetic": "/beə(r)/",
        "cn": "熊",
        "audio": "./assets/audio/words/bear.mp3",
        "image": "./assets/library/story-01/p007.webp",
        "sourcePage": 7
      },
      {
        "id": "back",
        "en": "back",
        "cn": "回来",
        "audio": "./assets/audio/generated/3c482346f375027677fa.mp3",
        "audioType": "synthesized",
        "sourcePage": 13,
        "image": "./assets/library/story-01/p013.webp"
      },
      {
        "id": "bag",
        "en": "bag",
        "cn": "书包",
        "audio": "./assets/audio/words/bag.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-01/p016.webp",
        "sourcePage": 16
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-1-line-1",
        "text": "Adam is picking apples.",
        "cn": "亚当正在摘苹果。",
        "audio": "./assets/audio/generated/d3c40bd0d96f768a1429.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-1-line-2",
        "text": "Big Brown Bear is picking apples.",
        "cn": "大棕熊正在摘苹果。",
        "audio": "./assets/audio/generated/3342d221879af442f8cb.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-1-line-3",
        "text": "Big Brown Bear sees Adam.",
        "cn": "大棕熊看见了亚当。",
        "audio": "./assets/audio/generated/8799d91b71f2652e84df.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-1-line-4",
        "text": "Adam sees Big Brown Bear.",
        "cn": "亚当看见了大棕熊。",
        "audio": "./assets/audio/sentences/adam-sees-big-brown-bear.mp3",
        "sourcePage": 9,
        "tag": "绘本原页 9"
      },
      {
        "id": "book-1-line-5",
        "text": "Adam runs and runs.",
        "cn": "亚当跑呀跑。",
        "audio": "./assets/audio/generated/83bee6a68630437085ff.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-1-line-6",
        "text": "Ah! A bear!",
        "cn": "啊！一头熊！",
        "audio": "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-1-line-7",
        "text": "Big Brown Bear runs and runs.",
        "cn": "大棕熊跑呀跑。",
        "audio": "./assets/audio/generated/91c2fcf35891ae71eab1.mp3",
        "sourcePage": 11,
        "tag": "绘本原页 11"
      },
      {
        "id": "book-1-line-8",
        "text": "Adam is back home.",
        "cn": "亚当回到家了。",
        "audio": "./assets/audio/generated/fe469f190f7585d25138.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-1-line-9",
        "text": "So is Big Brown Bear!",
        "cn": "大棕熊也来了！",
        "audio": "./assets/audio/generated/b4d31a60ad7863414ab5.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-1-line-10",
        "text": "My bag of apples!",
        "cn": "我的那袋苹果！",
        "audio": "./assets/audio/sentences/my-bag-of-apples.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      }
    ],
    "story": [
      {
        "text": "Adam is picking apples.",
        "cn": "亚当正在摘苹果。",
        "audio": "./assets/audio/generated/d3c40bd0d96f768a1429.mp3",
        "lines": [
          {
            "text": "Adam is picking apples.",
            "cn": "亚当正在摘苹果。",
            "audio": "./assets/audio/generated/d3c40bd0d96f768a1429.mp3"
          }
        ],
        "image": "./assets/library/story-01/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Big Brown Bear is picking apples.",
        "cn": "大棕熊正在摘苹果。",
        "audio": "./assets/audio/generated/3342d221879af442f8cb.mp3",
        "lines": [
          {
            "text": "Big Brown Bear is picking apples.",
            "cn": "大棕熊正在摘苹果。",
            "audio": "./assets/audio/generated/3342d221879af442f8cb.mp3"
          }
        ],
        "image": "./assets/library/story-01/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Big Brown Bear sees Adam.",
        "cn": "大棕熊看见了亚当。",
        "audio": "./assets/audio/generated/8799d91b71f2652e84df.mp3",
        "lines": [
          {
            "text": "Big Brown Bear sees Adam.",
            "cn": "大棕熊看见了亚当。",
            "audio": "./assets/audio/generated/8799d91b71f2652e84df.mp3"
          }
        ],
        "image": "./assets/library/story-01/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Adam sees Big Brown Bear.",
        "cn": "亚当看见了大棕熊。",
        "audio": "./assets/audio/sentences/adam-sees-big-brown-bear.mp3",
        "lines": [
          {
            "text": "Adam sees Big Brown Bear.",
            "cn": "亚当看见了大棕熊。",
            "audio": "./assets/audio/sentences/adam-sees-big-brown-bear.mp3"
          }
        ],
        "image": "./assets/library/story-01/p009.webp",
        "caption": "绘本原页 9",
        "sourcePage": 9,
        "original": true
      },
      {
        "text": "Adam runs and runs.",
        "cn": "亚当跑呀跑。",
        "audio": "./assets/audio/generated/83bee6a68630437085ff.mp3",
        "lines": [
          {
            "text": "Adam runs and runs.",
            "cn": "亚当跑呀跑。",
            "audio": "./assets/audio/generated/83bee6a68630437085ff.mp3"
          }
        ],
        "image": "./assets/library/story-01/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ah! A bear!",
        "cn": "啊！一头熊！",
        "audio": "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3",
        "lines": [
          {
            "text": "Ah! A bear!",
            "cn": "啊！一头熊！",
            "audio": "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3"
          }
        ],
        "image": "./assets/library/story-01/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Big Brown Bear runs and runs.",
        "cn": "大棕熊跑呀跑。",
        "audio": "./assets/audio/generated/91c2fcf35891ae71eab1.mp3",
        "lines": [
          {
            "text": "Big Brown Bear runs and runs.",
            "cn": "大棕熊跑呀跑。",
            "audio": "./assets/audio/generated/91c2fcf35891ae71eab1.mp3"
          }
        ],
        "image": "./assets/library/story-01/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "Adam is back home.",
        "cn": "亚当回到家了。",
        "audio": "./assets/audio/generated/fe469f190f7585d25138.mp3",
        "lines": [
          {
            "text": "Adam is back home.",
            "cn": "亚当回到家了。",
            "audio": "./assets/audio/generated/fe469f190f7585d25138.mp3"
          }
        ],
        "image": "./assets/library/story-01/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "So is Big Brown Bear!",
        "cn": "大棕熊也来了！",
        "audio": "./assets/audio/generated/b4d31a60ad7863414ab5.mp3",
        "lines": [
          {
            "text": "So is Big Brown Bear!",
            "cn": "大棕熊也来了！",
            "audio": "./assets/audio/generated/b4d31a60ad7863414ab5.mp3"
          }
        ],
        "image": "./assets/library/story-01/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "My bag of apples!",
        "cn": "我的那袋苹果！",
        "audio": "./assets/audio/sentences/my-bag-of-apples.mp3",
        "lines": [
          {
            "text": "My bag of apples!",
            "cn": "我的那袋苹果！",
            "audio": "./assets/audio/sentences/my-bag-of-apples.mp3"
          }
        ],
        "image": "./assets/library/story-01/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 1,
        "fileName": "绘本\\001.pdf",
        "totalPages": 18,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-01/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-01/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-01/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-01/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-01/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-01/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-01/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-01/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-01/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-01/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-01/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-01/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-01/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-01/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-01/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-01/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-01/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-01/p018.webp"
          }
        ],
        "title": "Adam and the Bear · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-02",
    "lesson": null,
    "bookNumber": 2,
    "readingOrder": 2,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Ted's Cat",
    "titleCn": "特德的猫",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-02/p001.webp",
    "coreWords": [
      {
        "id": "ted",
        "en": "Ted",
        "cn": "特德",
        "audio": "./assets/audio/generated/35c67224142f86b3b30c.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-02/p003.webp"
      },
      {
        "id": "cat",
        "en": "cat",
        "cn": "猫",
        "audio": "./assets/audio/words/cat.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-02/p004.webp"
      },
      {
        "id": "dot",
        "en": "Dot",
        "cn": "多特",
        "audio": "./assets/audio/generated/599079bc012661eb0be6.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-02/p005.webp"
      },
      {
        "id": "car",
        "en": "car",
        "cn": "汽车",
        "audio": "./assets/audio/words/car.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-02/p007.webp"
      },
      {
        "id": "mud",
        "en": "mud",
        "cn": "泥",
        "audio": "./assets/audio/generated/af07ff91ab7ce2a7d1f9.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-02/p009.webp"
      },
      {
        "id": "crayon",
        "en": "crayon",
        "cn": "蜡笔",
        "audio": "./assets/audio/generated/d8b1858e24ae617677d5.mp3",
        "audioType": "synthesized",
        "sourcePage": 12,
        "image": "./assets/library/story-02/p012.webp"
      },
      {
        "id": "desk",
        "en": "desk",
        "cn": "书桌",
        "audio": "./assets/audio/words/desk.mp3",
        "audioType": "synthesized",
        "sourcePage": 14,
        "image": "./assets/library/story-02/p014.webp"
      },
      {
        "id": "cut",
        "en": "cut",
        "cn": "剪",
        "audio": "./assets/audio/generated/378bfce5cda2599a6cda.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-02/p016.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-2-line-1",
        "text": "This is Ted's cat, Dot.",
        "cn": "这是特德的猫，多特。",
        "audio": "./assets/audio/generated/b4372fc527a3fbb24934.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-2-line-2",
        "text": "Dot is in the car.",
        "cn": "多特在车里。",
        "audio": "./assets/audio/generated/565cbab3fcf0266e2423.mp3",
        "sourcePage": 6,
        "tag": "绘本原页 6"
      },
      {
        "id": "book-2-line-3",
        "text": "Dot is in the mud.",
        "cn": "多特在泥里。",
        "audio": "./assets/audio/generated/274a6a2ec8bf3cd8d472.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-2-line-4",
        "text": "Where is Dot now?",
        "cn": "多特现在在哪里？",
        "audio": "./assets/audio/generated/4d394534d541a9348ed7.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-2-line-5",
        "text": "Ted gets cards and crayons.",
        "cn": "特德拿来卡纸和彩色蜡笔。",
        "audio": "./assets/audio/generated/123d19eda0e219d31e64.mp3",
        "sourcePage": 11,
        "tag": "绘本原页 11"
      },
      {
        "id": "book-2-line-6",
        "text": "He sits at his desk.",
        "cn": "他坐在自己的书桌前。",
        "audio": "./assets/audio/generated/3666cc0bd5aa9402c775.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-2-line-7",
        "text": "He draws.",
        "cn": "他画画。",
        "audio": "./assets/audio/generated/027d924a079db7243417.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-2-line-8",
        "text": "He colours and cuts.",
        "cn": "他涂色、剪裁。",
        "audio": "./assets/audio/generated/572caf03f0cad635fb7f.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-2-line-9",
        "text": "Dot is home now.",
        "cn": "多特现在回家了。",
        "audio": "./assets/audio/generated/04ca337bf00a06615d5e.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      },
      {
        "id": "book-2-line-10",
        "text": "Clever Ted!",
        "cn": "聪明的特德！",
        "audio": "./assets/audio/generated/3888b65b7278560e66aa.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      }
    ],
    "story": [
      {
        "text": "This is Ted's cat, Dot.",
        "cn": "这是特德的猫，多特。",
        "audio": "./assets/audio/generated/b4372fc527a3fbb24934.mp3",
        "lines": [
          {
            "text": "This is Ted's cat, Dot.",
            "cn": "这是特德的猫，多特。",
            "audio": "./assets/audio/generated/b4372fc527a3fbb24934.mp3"
          }
        ],
        "image": "./assets/library/story-02/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Dot is in the car.",
        "cn": "多特在车里。",
        "audio": "./assets/audio/generated/565cbab3fcf0266e2423.mp3",
        "lines": [
          {
            "text": "Dot is in the car.",
            "cn": "多特在车里。",
            "audio": "./assets/audio/generated/565cbab3fcf0266e2423.mp3"
          }
        ],
        "image": "./assets/library/story-02/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Dot is in the mud.",
        "cn": "多特在泥里。",
        "audio": "./assets/audio/generated/274a6a2ec8bf3cd8d472.mp3",
        "lines": [
          {
            "text": "Dot is in the mud.",
            "cn": "多特在泥里。",
            "audio": "./assets/audio/generated/274a6a2ec8bf3cd8d472.mp3"
          }
        ],
        "image": "./assets/library/story-02/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Where is Dot now?",
        "cn": "多特现在在哪里？",
        "audio": "./assets/audio/generated/4d394534d541a9348ed7.mp3",
        "lines": [
          {
            "text": "Where is Dot now?",
            "cn": "多特现在在哪里？",
            "audio": "./assets/audio/generated/4d394534d541a9348ed7.mp3"
          }
        ],
        "image": "./assets/library/story-02/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ted gets cards and crayons.",
        "cn": "特德拿来卡纸和彩色蜡笔。",
        "audio": "./assets/audio/generated/123d19eda0e219d31e64.mp3",
        "lines": [
          {
            "text": "Ted gets cards and crayons.",
            "cn": "特德拿来卡纸和彩色蜡笔。",
            "audio": "./assets/audio/generated/123d19eda0e219d31e64.mp3"
          }
        ],
        "image": "./assets/library/story-02/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "He sits at his desk.",
        "cn": "他坐在自己的书桌前。",
        "audio": "./assets/audio/generated/3666cc0bd5aa9402c775.mp3",
        "lines": [
          {
            "text": "He sits at his desk.",
            "cn": "他坐在自己的书桌前。",
            "audio": "./assets/audio/generated/3666cc0bd5aa9402c775.mp3"
          }
        ],
        "image": "./assets/library/story-02/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "He draws.",
        "cn": "他画画。",
        "audio": "./assets/audio/generated/027d924a079db7243417.mp3",
        "lines": [
          {
            "text": "He draws.",
            "cn": "他画画。",
            "audio": "./assets/audio/generated/027d924a079db7243417.mp3"
          }
        ],
        "image": "./assets/library/story-02/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "He colours and cuts.",
        "cn": "他涂色、剪裁。",
        "audio": "./assets/audio/generated/572caf03f0cad635fb7f.mp3",
        "lines": [
          {
            "text": "He colours and cuts.",
            "cn": "他涂色、剪裁。",
            "audio": "./assets/audio/generated/572caf03f0cad635fb7f.mp3"
          }
        ],
        "image": "./assets/library/story-02/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "Dot is home now.",
        "cn": "多特现在回家了。",
        "audio": "./assets/audio/generated/04ca337bf00a06615d5e.mp3",
        "lines": [
          {
            "text": "Dot is home now.",
            "cn": "多特现在回家了。",
            "audio": "./assets/audio/generated/04ca337bf00a06615d5e.mp3"
          }
        ],
        "image": "./assets/library/story-02/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "Clever Ted!",
        "cn": "聪明的特德！",
        "audio": "./assets/audio/generated/3888b65b7278560e66aa.mp3",
        "lines": [
          {
            "text": "Clever Ted!",
            "cn": "聪明的特德！",
            "audio": "./assets/audio/generated/3888b65b7278560e66aa.mp3"
          }
        ],
        "image": "./assets/library/story-02/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 2,
        "fileName": "绘本\\002.pdf",
        "totalPages": 19,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-02/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-02/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-02/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-02/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-02/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-02/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-02/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-02/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-02/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-02/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-02/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-02/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-02/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-02/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-02/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-02/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-02/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-02/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-02/p019.webp"
          }
        ],
        "title": "Ted's Cat · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-03",
    "lesson": null,
    "bookNumber": 3,
    "readingOrder": 3,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Elephant's Friends",
    "titleCn": "大象的朋友们",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-03/p001.webp",
    "coreWords": [
      {
        "id": "elephant",
        "en": "elephant",
        "cn": "大象",
        "audio": "./assets/audio/generated/cd08c4c4316df20d9c30.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-03/p003.webp",
        "sourcePage": 3
      },
      {
        "id": "egg",
        "en": "egg",
        "cn": "蛋",
        "audio": "./assets/audio/generated/34707c3f40dfa20c3902.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-03/p004.webp"
      },
      {
        "id": "fan",
        "en": "fan",
        "cn": "扇风",
        "audio": "./assets/audio/generated/e29a7f31cac05abc97e1.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-03/p007.webp"
      },
      {
        "id": "fox",
        "en": "fox",
        "cn": "狐狸",
        "audio": "./assets/audio/generated/776cb326ab0cd5f0a974.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-03/p008.webp",
        "sourcePage": 8
      },
      {
        "id": "elk",
        "en": "elk",
        "cn": "麋鹿",
        "audio": "./assets/audio/generated/2f60f61a34244180b562.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-03/p011.webp"
      },
      {
        "id": "foot",
        "en": "foot",
        "cn": "脚",
        "audio": "./assets/audio/generated/22e4f6912a6980d6fd59.mp3",
        "audioType": "synthesized",
        "sourcePage": 12,
        "image": "./assets/library/story-03/p012.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-3-line-1",
        "text": "Ella the elephant finds an egg.",
        "cn": "大象艾拉发现了一枚蛋。",
        "audio": "./assets/audio/generated/756e209387035ff82a50.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-3-line-2",
        "text": "\"Is it coming out?\" say the friends.",
        "cn": "朋友们问：它要出来了吗？",
        "audio": "./assets/audio/generated/601d52aa953de7091cff.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-3-line-3",
        "text": "Brrr!",
        "cn": "哆嗦的声音：哔——！",
        "audio": "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-3-line-4",
        "text": "\"I can fan it with my ears,\" says Finn the fox.",
        "cn": "狐狸芬恩说：我可以用耳朵给它扇风。",
        "audio": "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3",
        "sourcePage": 6,
        "tag": "绘本原页 6"
      },
      {
        "id": "book-3-line-5",
        "text": "\"No!\" says Ed the elk.",
        "cn": "麋鹿埃德说：不行！",
        "audio": "./assets/audio/generated/7186578fe1d9e4370df0.mp3",
        "sourcePage": 9,
        "tag": "绘本原页 9"
      },
      {
        "id": "book-3-line-6",
        "text": "\"I can pat it with my foot,\" he says.",
        "cn": "他说：我可以用脚轻拍它。",
        "audio": "./assets/audio/generated/dc0fe3ec31059921b92e.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-3-line-7",
        "text": "\"No!\" says Ella the elephant.",
        "cn": "大象艾拉说：不行！",
        "audio": "./assets/audio/generated/58d20a54efb02fb29f56.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-3-line-8",
        "text": "\"I can sit on it,\" she says.",
        "cn": "她说：我可以坐在它上面。",
        "audio": "./assets/audio/generated/26a157ae4141d9ea4391.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-3-line-9",
        "text": "\"No!\" says the egg.",
        "cn": "蛋说：不行！",
        "audio": "./assets/audio/generated/587165d5115ca5b7d46f.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      }
    ],
    "story": [
      {
        "text": "Ella the elephant finds an egg.",
        "cn": "大象艾拉发现了一枚蛋。",
        "audio": "./assets/audio/generated/756e209387035ff82a50.mp3",
        "lines": [
          {
            "text": "Ella the elephant finds an egg.",
            "cn": "大象艾拉发现了一枚蛋。",
            "audio": "./assets/audio/generated/756e209387035ff82a50.mp3"
          }
        ],
        "image": "./assets/library/story-03/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "\"Is it coming out?\" say the friends.",
        "cn": "朋友们问：它要出来了吗？",
        "audio": "./assets/audio/generated/601d52aa953de7091cff.mp3",
        "lines": [
          {
            "text": "\"Is it coming out?\" say the friends.",
            "cn": "朋友们问：它要出来了吗？",
            "audio": "./assets/audio/generated/601d52aa953de7091cff.mp3"
          }
        ],
        "image": "./assets/library/story-03/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Brrr!",
        "cn": "哆嗦的声音：哔——！",
        "audio": "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3",
        "lines": [
          {
            "text": "Brrr!",
            "cn": "哆嗦的声音：哔——！",
            "audio": "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3"
          }
        ],
        "image": "./assets/library/story-03/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "\"I can fan it with my ears,\" says Finn the fox.",
        "cn": "狐狸芬恩说：我可以用耳朵给它扇风。",
        "audio": "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3",
        "lines": [
          {
            "text": "\"I can fan it with my ears,\" says Finn the fox.",
            "cn": "狐狸芬恩说：我可以用耳朵给它扇风。",
            "audio": "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3"
          }
        ],
        "image": "./assets/library/story-03/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "\"No!\" says Ed the elk.",
        "cn": "麋鹿埃德说：不行！",
        "audio": "./assets/audio/generated/7186578fe1d9e4370df0.mp3",
        "lines": [
          {
            "text": "\"No!\" says Ed the elk.",
            "cn": "麋鹿埃德说：不行！",
            "audio": "./assets/audio/generated/7186578fe1d9e4370df0.mp3"
          }
        ],
        "image": "./assets/library/story-03/p009.webp",
        "caption": "绘本原页 9",
        "sourcePage": 9,
        "original": true
      },
      {
        "text": "\"I can pat it with my foot,\" he says.",
        "cn": "他说：我可以用脚轻拍它。",
        "audio": "./assets/audio/generated/dc0fe3ec31059921b92e.mp3",
        "lines": [
          {
            "text": "\"I can pat it with my foot,\" he says.",
            "cn": "他说：我可以用脚轻拍它。",
            "audio": "./assets/audio/generated/dc0fe3ec31059921b92e.mp3"
          }
        ],
        "image": "./assets/library/story-03/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "\"No!\" says Ella the elephant.",
        "cn": "大象艾拉说：不行！",
        "audio": "./assets/audio/generated/58d20a54efb02fb29f56.mp3",
        "lines": [
          {
            "text": "\"No!\" says Ella the elephant.",
            "cn": "大象艾拉说：不行！",
            "audio": "./assets/audio/generated/58d20a54efb02fb29f56.mp3"
          }
        ],
        "image": "./assets/library/story-03/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "\"I can sit on it,\" she says.",
        "cn": "她说：我可以坐在它上面。",
        "audio": "./assets/audio/generated/26a157ae4141d9ea4391.mp3",
        "lines": [
          {
            "text": "\"I can sit on it,\" she says.",
            "cn": "她说：我可以坐在它上面。",
            "audio": "./assets/audio/generated/26a157ae4141d9ea4391.mp3"
          }
        ],
        "image": "./assets/library/story-03/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "\"No!\" says the egg.",
        "cn": "蛋说：不行！",
        "audio": "./assets/audio/generated/587165d5115ca5b7d46f.mp3",
        "lines": [
          {
            "text": "\"No!\" says the egg.",
            "cn": "蛋说：不行！",
            "audio": "./assets/audio/generated/587165d5115ca5b7d46f.mp3"
          }
        ],
        "image": "./assets/library/story-03/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 3,
        "fileName": "绘本\\003.pdf",
        "totalPages": 17,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-03/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-03/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-03/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-03/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-03/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-03/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-03/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-03/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-03/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-03/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-03/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-03/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-03/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-03/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-03/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-03/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-03/p017.webp"
          }
        ],
        "title": "Elephant's Friends · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-08",
    "lesson": null,
    "bookNumber": 8,
    "readingOrder": 4,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Grandpa and Holly",
    "titleCn": "爷爷和霍莉",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-08/p001.webp",
    "coreWords": [
      {
        "id": "holly",
        "en": "Holly",
        "cn": "霍莉",
        "audio": "./assets/audio/generated/fd6045b6fc1949fcc41c.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-08/p003.webp"
      },
      {
        "id": "good",
        "en": "good",
        "cn": "好的",
        "audio": "./assets/audio/generated/770e607624d689265ca6.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-08/p004.webp"
      },
      {
        "id": "dog",
        "en": "dog",
        "cn": "狗",
        "audio": "./assets/audio/words/dog.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-08/p005.webp"
      },
      {
        "id": "help",
        "en": "help",
        "cn": "帮助",
        "audio": "./assets/audio/generated/106a5842fc5fce6f6631.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-08/p006.webp"
      },
      {
        "id": "get",
        "en": "get",
        "cn": "拿到",
        "audio": "./assets/audio/generated/2998b3232d29e8dc5a78.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-08/p009.webp"
      },
      {
        "id": "hay",
        "en": "hay",
        "cn": "干草",
        "audio": "./assets/audio/generated/4e30ea25cda1c18cfc42.mp3",
        "audioType": "synthesized",
        "sourcePage": 10,
        "image": "./assets/library/story-08/p010.webp"
      },
      {
        "id": "hen",
        "en": "hen",
        "cn": "母鸡",
        "audio": "./assets/audio/generated/d44a08de3981889dae0f.mp3",
        "audioType": "synthesized",
        "sourcePage": 12,
        "image": "./assets/library/story-08/p012.webp"
      },
      {
        "id": "goat",
        "en": "goat",
        "cn": "山羊",
        "audio": "./assets/audio/generated/5480f08f35968440ebe8.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-08/p015.webp"
      },
      {
        "id": "hat",
        "en": "hat",
        "cn": "帽子",
        "audio": "./assets/audio/generated/18e1dd392168f601d0e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 17,
        "image": "./assets/library/story-08/p017.webp"
      },
      {
        "id": "girl",
        "en": "girl",
        "cn": "女孩",
        "audio": "./assets/audio/generated/431ba1c6936744f65928.mp3",
        "audioType": "synthesized",
        "sourcePage": 19,
        "image": "./assets/library/story-08/p019.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-8-line-1",
        "text": "Holly is a good dog.",
        "cn": "霍莉是一只好狗。",
        "audio": "./assets/audio/generated/7dfba09e2e57c5a6d60e.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-8-line-2",
        "text": "She helps Grandpa.",
        "cn": "她帮助爷爷。",
        "audio": "./assets/audio/generated/7007bfceec128a1127cd.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-8-line-3",
        "text": "They go to see the horse.",
        "cn": "他们去看马。",
        "audio": "./assets/audio/generated/236ae3ba646c187f6319.mp3",
        "sourcePage": 7,
        "tag": "绘本原页 7"
      },
      {
        "id": "book-8-line-4",
        "text": "Holly gets the hay.",
        "cn": "霍莉拿来干草。",
        "audio": "./assets/audio/generated/300d1938f1b3c5b824ce.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-8-line-5",
        "text": "They go to see the hens.",
        "cn": "他们去看母鸡。",
        "audio": "./assets/audio/generated/de7e675b3c31c00f253d.mp3",
        "sourcePage": 11,
        "tag": "绘本原页 11"
      },
      {
        "id": "book-8-line-6",
        "text": "Holly gets the eggs.",
        "cn": "霍莉拿到鸡蛋。",
        "audio": "./assets/audio/generated/0a0b4d4f7a95473e5783.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-8-line-7",
        "text": "They go to see the goats.",
        "cn": "他们去看山羊。",
        "audio": "./assets/audio/generated/d53755f2cb6bf75aa1dd.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-8-line-8",
        "text": "A goat gets Grandpa's hat.",
        "cn": "一只山羊拿走了爷爷的帽子。",
        "audio": "./assets/audio/generated/a038a69f6c7955da9a89.mp3",
        "sourcePage": 16,
        "tag": "绘本原页 16"
      },
      {
        "id": "book-8-line-9",
        "text": "Hey!",
        "cn": "嘿！",
        "audio": "./assets/audio/generated/b57c370a0fcc704562e1.mp3",
        "sourcePage": 16,
        "tag": "绘本原页 16"
      },
      {
        "id": "book-8-line-10",
        "text": "But Holly gets it back!",
        "cn": "不过霍莉把帽子拿回来了！",
        "audio": "./assets/audio/generated/09705fef7ed0f161658d.mp3",
        "sourcePage": 18,
        "tag": "绘本原页 18"
      },
      {
        "id": "book-8-line-11",
        "text": "Good girl, Holly!",
        "cn": "真棒，霍莉！",
        "audio": "./assets/audio/generated/d49512c497bb06b921be.mp3",
        "sourcePage": 18,
        "tag": "绘本原页 18"
      }
    ],
    "story": [
      {
        "text": "Holly is a good dog.",
        "cn": "霍莉是一只好狗。",
        "audio": "./assets/audio/generated/7dfba09e2e57c5a6d60e.mp3",
        "lines": [
          {
            "text": "Holly is a good dog.",
            "cn": "霍莉是一只好狗。",
            "audio": "./assets/audio/generated/7dfba09e2e57c5a6d60e.mp3"
          }
        ],
        "image": "./assets/library/story-08/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "She helps Grandpa.",
        "cn": "她帮助爷爷。",
        "audio": "./assets/audio/generated/7007bfceec128a1127cd.mp3",
        "lines": [
          {
            "text": "She helps Grandpa.",
            "cn": "她帮助爷爷。",
            "audio": "./assets/audio/generated/7007bfceec128a1127cd.mp3"
          }
        ],
        "image": "./assets/library/story-08/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "They go to see the horse.",
        "cn": "他们去看马。",
        "audio": "./assets/audio/generated/236ae3ba646c187f6319.mp3",
        "lines": [
          {
            "text": "They go to see the horse.",
            "cn": "他们去看马。",
            "audio": "./assets/audio/generated/236ae3ba646c187f6319.mp3"
          }
        ],
        "image": "./assets/library/story-08/p007.webp",
        "caption": "绘本原页 7",
        "sourcePage": 7,
        "original": true
      },
      {
        "text": "Holly gets the hay.",
        "cn": "霍莉拿来干草。",
        "audio": "./assets/audio/generated/300d1938f1b3c5b824ce.mp3",
        "lines": [
          {
            "text": "Holly gets the hay.",
            "cn": "霍莉拿来干草。",
            "audio": "./assets/audio/generated/300d1938f1b3c5b824ce.mp3"
          }
        ],
        "image": "./assets/library/story-08/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "They go to see the hens.",
        "cn": "他们去看母鸡。",
        "audio": "./assets/audio/generated/de7e675b3c31c00f253d.mp3",
        "lines": [
          {
            "text": "They go to see the hens.",
            "cn": "他们去看母鸡。",
            "audio": "./assets/audio/generated/de7e675b3c31c00f253d.mp3"
          }
        ],
        "image": "./assets/library/story-08/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "Holly gets the eggs.",
        "cn": "霍莉拿到鸡蛋。",
        "audio": "./assets/audio/generated/0a0b4d4f7a95473e5783.mp3",
        "lines": [
          {
            "text": "Holly gets the eggs.",
            "cn": "霍莉拿到鸡蛋。",
            "audio": "./assets/audio/generated/0a0b4d4f7a95473e5783.mp3"
          }
        ],
        "image": "./assets/library/story-08/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "They go to see the goats.",
        "cn": "他们去看山羊。",
        "audio": "./assets/audio/generated/d53755f2cb6bf75aa1dd.mp3",
        "lines": [
          {
            "text": "They go to see the goats.",
            "cn": "他们去看山羊。",
            "audio": "./assets/audio/generated/d53755f2cb6bf75aa1dd.mp3"
          }
        ],
        "image": "./assets/library/story-08/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "A goat gets Grandpa's hat.",
        "cn": "一只山羊拿走了爷爷的帽子。",
        "audio": "./assets/audio/generated/a038a69f6c7955da9a89.mp3",
        "lines": [
          {
            "text": "A goat gets Grandpa's hat.",
            "cn": "一只山羊拿走了爷爷的帽子。",
            "audio": "./assets/audio/generated/a038a69f6c7955da9a89.mp3"
          }
        ],
        "image": "./assets/library/story-08/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      },
      {
        "text": "Hey!",
        "cn": "嘿！",
        "audio": "./assets/audio/generated/b57c370a0fcc704562e1.mp3",
        "lines": [
          {
            "text": "Hey!",
            "cn": "嘿！",
            "audio": "./assets/audio/generated/b57c370a0fcc704562e1.mp3"
          }
        ],
        "image": "./assets/library/story-08/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      },
      {
        "text": "But Holly gets it back!",
        "cn": "不过霍莉把帽子拿回来了！",
        "audio": "./assets/audio/generated/09705fef7ed0f161658d.mp3",
        "lines": [
          {
            "text": "But Holly gets it back!",
            "cn": "不过霍莉把帽子拿回来了！",
            "audio": "./assets/audio/generated/09705fef7ed0f161658d.mp3"
          }
        ],
        "image": "./assets/library/story-08/p018.webp",
        "caption": "绘本原页 18",
        "sourcePage": 18,
        "original": true
      },
      {
        "text": "Good girl, Holly!",
        "cn": "真棒，霍莉！",
        "audio": "./assets/audio/generated/d49512c497bb06b921be.mp3",
        "lines": [
          {
            "text": "Good girl, Holly!",
            "cn": "真棒，霍莉！",
            "audio": "./assets/audio/generated/d49512c497bb06b921be.mp3"
          }
        ],
        "image": "./assets/library/story-08/p018.webp",
        "caption": "绘本原页 18",
        "sourcePage": 18,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 8,
        "fileName": "绘本\\008.pdf",
        "totalPages": 21,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-08/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-08/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-08/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-08/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-08/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-08/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-08/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-08/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-08/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-08/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-08/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-08/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-08/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-08/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-08/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-08/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-08/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-08/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-08/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-08/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/story-08/p021.webp"
          }
        ],
        "title": "Grandpa and Holly · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-06",
    "lesson": null,
    "bookNumber": 6,
    "readingOrder": 5,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Spin, Jenny, Spin!",
    "titleCn": "转起来，珍妮！",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-06/p001.webp",
    "coreWords": [
      {
        "id": "jenny",
        "en": "Jenny",
        "cn": "珍妮",
        "audio": "./assets/audio/generated/57e4df689a1d76ed4cab.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-06/p003.webp"
      },
      {
        "id": "zip",
        "en": "zip",
        "cn": "拉链",
        "audio": "./assets/audio/generated/4a70fe9aa6436e02c2de.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-06/p004.webp",
        "sourcePage": 4
      },
      {
        "id": "spin",
        "en": "spin",
        "cn": "转圈",
        "audio": "./assets/audio/generated/a5a2729ffa0eeacc1532.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-06/p005.webp"
      },
      {
        "id": "jog",
        "en": "jog",
        "cn": "慢跑",
        "audio": "./assets/audio/generated/c30b983b5860e0481288.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-06/p007.webp"
      },
      {
        "id": "slip",
        "en": "slip",
        "cn": "滑倒",
        "audio": "./assets/audio/generated/1c1480e67eee52c17293.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-06/p009.webp"
      },
      {
        "id": "jump",
        "en": "jump",
        "cn": "跳",
        "audio": "./assets/audio/generated/6bdaf554e42029bd0dbe.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-06/p011.webp",
        "sourcePage": 11
      },
      {
        "id": "sip",
        "en": "sip",
        "cn": "小口喝",
        "audio": "./assets/audio/generated/6c126e81fa8dc29d6413.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-06/p015.webp"
      },
      {
        "id": "juice",
        "en": "juice",
        "cn": "果汁",
        "audio": "./assets/audio/generated/a5ad895656074bb12930.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-06/p016.webp"
      },
      {
        "id": "sit",
        "en": "sit",
        "cn": "坐",
        "audio": "./assets/audio/generated/584178e5e3517ddcebc6.mp3",
        "audioType": "synthesized",
        "sourcePage": 18,
        "image": "./assets/library/story-06/p018.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-6-line-1",
        "text": "Jenny sees a girl.",
        "cn": "珍妮看见一个女孩。",
        "audio": "./assets/audio/generated/600526d1106ea5f856ba.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-6-line-2",
        "text": "The girl spins.",
        "cn": "女孩在转圈。",
        "audio": "./assets/audio/generated/ba2151278d936d95e58b.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-6-line-3",
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-6-line-4",
        "text": "Jenny jogs up to the ice.",
        "cn": "珍妮小跑到冰面上。",
        "audio": "./assets/audio/generated/0d27dc922df50bd3f85d.mp3",
        "sourcePage": 6,
        "tag": "绘本原页 6"
      },
      {
        "id": "book-6-line-5",
        "text": "Jenny spins.",
        "cn": "珍妮转圈。",
        "audio": "./assets/audio/generated/8f8a838a137838dfdc89.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-6-line-6",
        "text": "She trips.",
        "cn": "她绊了一下。",
        "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-6-line-7",
        "text": "She slips.",
        "cn": "她滑倒了。",
        "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-6-line-8",
        "text": "Jenny sees the girl.",
        "cn": "珍妮看见那个女孩。",
        "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-6-line-9",
        "text": "The girl jumps.",
        "cn": "女孩在跳跃。",
        "audio": "./assets/audio/generated/e4f97f13575114328f77.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-6-line-10",
        "text": "Jenny jumps.",
        "cn": "珍妮跳起来。",
        "audio": "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-6-line-11",
        "text": "She gets off the ice.",
        "cn": "女孩离开了冰面。",
        "audio": "./assets/audio/generated/da94d343d0dfaf966b90.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-6-line-12",
        "text": "The girl sips some juice.",
        "cn": "女孩小口喝了些果汁。",
        "audio": "./assets/audio/generated/a0a62e4ec84202be122d.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-6-line-13",
        "text": "They sit.",
        "cn": "她们坐下来。",
        "audio": "./assets/audio/generated/43dc1f65b704b190b9ec.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      },
      {
        "id": "book-6-line-14",
        "text": "They sip.",
        "cn": "她们小口喝果汁。",
        "audio": "./assets/audio/generated/343172dc2ef266bdcf5b.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      }
    ],
    "story": [
      {
        "text": "Jenny sees a girl.",
        "cn": "珍妮看见一个女孩。",
        "audio": "./assets/audio/generated/600526d1106ea5f856ba.mp3",
        "lines": [
          {
            "text": "Jenny sees a girl.",
            "cn": "珍妮看见一个女孩。",
            "audio": "./assets/audio/generated/600526d1106ea5f856ba.mp3"
          }
        ],
        "image": "./assets/library/story-06/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "The girl spins.",
        "cn": "女孩在转圈。",
        "audio": "./assets/audio/generated/ba2151278d936d95e58b.mp3",
        "lines": [
          {
            "text": "The girl spins.",
            "cn": "女孩在转圈。",
            "audio": "./assets/audio/generated/ba2151278d936d95e58b.mp3"
          }
        ],
        "image": "./assets/library/story-06/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "lines": [
          {
            "text": "I can do that!",
            "cn": "我也能做到！",
            "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3"
          }
        ],
        "image": "./assets/library/story-06/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Jenny jogs up to the ice.",
        "cn": "珍妮小跑到冰面上。",
        "audio": "./assets/audio/generated/0d27dc922df50bd3f85d.mp3",
        "lines": [
          {
            "text": "Jenny jogs up to the ice.",
            "cn": "珍妮小跑到冰面上。",
            "audio": "./assets/audio/generated/0d27dc922df50bd3f85d.mp3"
          }
        ],
        "image": "./assets/library/story-06/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Jenny spins.",
        "cn": "珍妮转圈。",
        "audio": "./assets/audio/generated/8f8a838a137838dfdc89.mp3",
        "lines": [
          {
            "text": "Jenny spins.",
            "cn": "珍妮转圈。",
            "audio": "./assets/audio/generated/8f8a838a137838dfdc89.mp3"
          }
        ],
        "image": "./assets/library/story-06/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "She trips.",
        "cn": "她绊了一下。",
        "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3",
        "lines": [
          {
            "text": "She trips.",
            "cn": "她绊了一下。",
            "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3"
          }
        ],
        "image": "./assets/library/story-06/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "She slips.",
        "cn": "她滑倒了。",
        "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3",
        "lines": [
          {
            "text": "She slips.",
            "cn": "她滑倒了。",
            "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3"
          }
        ],
        "image": "./assets/library/story-06/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Jenny sees the girl.",
        "cn": "珍妮看见那个女孩。",
        "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3",
        "lines": [
          {
            "text": "Jenny sees the girl.",
            "cn": "珍妮看见那个女孩。",
            "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3"
          }
        ],
        "image": "./assets/library/story-06/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "The girl jumps.",
        "cn": "女孩在跳跃。",
        "audio": "./assets/audio/generated/e4f97f13575114328f77.mp3",
        "lines": [
          {
            "text": "The girl jumps.",
            "cn": "女孩在跳跃。",
            "audio": "./assets/audio/generated/e4f97f13575114328f77.mp3"
          }
        ],
        "image": "./assets/library/story-06/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "lines": [
          {
            "text": "I can do that!",
            "cn": "我也能做到！",
            "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3"
          }
        ],
        "image": "./assets/library/story-06/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Jenny jumps.",
        "cn": "珍妮跳起来。",
        "audio": "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3",
        "lines": [
          {
            "text": "Jenny jumps.",
            "cn": "珍妮跳起来。",
            "audio": "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3"
          }
        ],
        "image": "./assets/library/story-06/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "She trips.",
        "cn": "她绊了一下。",
        "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3",
        "lines": [
          {
            "text": "She trips.",
            "cn": "她绊了一下。",
            "audio": "./assets/audio/generated/73d48aa69ad99c013018.mp3"
          }
        ],
        "image": "./assets/library/story-06/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "She slips.",
        "cn": "她滑倒了。",
        "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3",
        "lines": [
          {
            "text": "She slips.",
            "cn": "她滑倒了。",
            "audio": "./assets/audio/generated/0e9a5a660aeb429010fa.mp3"
          }
        ],
        "image": "./assets/library/story-06/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Jenny sees the girl.",
        "cn": "珍妮看见那个女孩。",
        "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3",
        "lines": [
          {
            "text": "Jenny sees the girl.",
            "cn": "珍妮看见那个女孩。",
            "audio": "./assets/audio/generated/a6104584ca183b48884e.mp3"
          }
        ],
        "image": "./assets/library/story-06/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "She gets off the ice.",
        "cn": "女孩离开了冰面。",
        "audio": "./assets/audio/generated/da94d343d0dfaf966b90.mp3",
        "lines": [
          {
            "text": "She gets off the ice.",
            "cn": "女孩离开了冰面。",
            "audio": "./assets/audio/generated/da94d343d0dfaf966b90.mp3"
          }
        ],
        "image": "./assets/library/story-06/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "The girl sips some juice.",
        "cn": "女孩小口喝了些果汁。",
        "audio": "./assets/audio/generated/a0a62e4ec84202be122d.mp3",
        "lines": [
          {
            "text": "The girl sips some juice.",
            "cn": "女孩小口喝了些果汁。",
            "audio": "./assets/audio/generated/a0a62e4ec84202be122d.mp3"
          }
        ],
        "image": "./assets/library/story-06/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "I can do that!",
        "cn": "我也能做到！",
        "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3",
        "lines": [
          {
            "text": "I can do that!",
            "cn": "我也能做到！",
            "audio": "./assets/audio/generated/75bc364d864bd3684bbc.mp3"
          }
        ],
        "image": "./assets/library/story-06/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "They sit.",
        "cn": "她们坐下来。",
        "audio": "./assets/audio/generated/43dc1f65b704b190b9ec.mp3",
        "lines": [
          {
            "text": "They sit.",
            "cn": "她们坐下来。",
            "audio": "./assets/audio/generated/43dc1f65b704b190b9ec.mp3"
          }
        ],
        "image": "./assets/library/story-06/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "They sip.",
        "cn": "她们小口喝果汁。",
        "audio": "./assets/audio/generated/343172dc2ef266bdcf5b.mp3",
        "lines": [
          {
            "text": "They sip.",
            "cn": "她们小口喝果汁。",
            "audio": "./assets/audio/generated/343172dc2ef266bdcf5b.mp3"
          }
        ],
        "image": "./assets/library/story-06/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 6,
        "fileName": "绘本\\006.pdf",
        "totalPages": 20,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-06/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-06/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-06/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-06/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-06/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-06/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-06/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-06/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-06/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-06/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-06/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-06/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-06/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-06/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-06/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-06/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-06/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-06/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-06/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-06/p020.webp"
          }
        ],
        "title": "Spin, Jenny, Spin! · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-07",
    "lesson": null,
    "bookNumber": 7,
    "readingOrder": 6,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Lola and the King",
    "titleCn": "洛拉和国王",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-07/p001.webp",
    "coreWords": [
      {
        "id": "lola",
        "en": "Lola",
        "cn": "洛拉",
        "audio": "./assets/audio/generated/0ffb02665035bfe509b1.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-07/p003.webp"
      },
      {
        "id": "letter",
        "en": "letter",
        "cn": "信",
        "audio": "./assets/audio/generated/f80105efab6d863fd8fc.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-07/p004.webp"
      },
      {
        "id": "king",
        "en": "king",
        "cn": "国王",
        "audio": "./assets/audio/generated/e81dfe69841ad2f7b579.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-07/p005.webp"
      },
      {
        "id": "kim",
        "en": "Kim",
        "cn": "金姆",
        "audio": "./assets/audio/generated/d25949ef9e762fe7cfb9.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-07/p007.webp"
      },
      {
        "id": "kind",
        "en": "kind",
        "cn": "善良的",
        "audio": "./assets/audio/generated/0b27c158feb36ab18a10.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-07/p009.webp"
      },
      {
        "id": "lady",
        "en": "lady",
        "cn": "女士",
        "audio": "./assets/audio/generated/49547872a664dd8e6328.mp3",
        "audioType": "synthesized",
        "sourcePage": 12,
        "image": "./assets/library/story-07/p012.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-7-line-1",
        "text": "Lola sends a letter to the king.",
        "cn": "洛拉给国王寄了一封信。",
        "audio": "./assets/audio/generated/cc633a5d34e24d31043a.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-7-line-2",
        "text": "\"Dear King Kim, I have lost my kitten,\" says Lola.",
        "cn": "洛拉说：亲爱的金姆国王，我的小猫丢了。",
        "audio": "./assets/audio/generated/52982e8832bcc7e15aa6.mp3",
        "sourcePage": 6,
        "tag": "绘本原页 6"
      },
      {
        "id": "book-7-line-3",
        "text": "King Kim is kind.",
        "cn": "金姆国王很善良。",
        "audio": "./assets/audio/generated/42be2f369c195a7d3622.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-7-line-4",
        "text": "He sends his men.",
        "cn": "他派出了手下。",
        "audio": "./assets/audio/generated/96de0f5eee739d58b3dc.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-7-line-5",
        "text": "They look for the kitten.",
        "cn": "他们寻找那只小猫。",
        "audio": "./assets/audio/generated/fcad8aba7c3ddb8945ab.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-7-line-6",
        "text": "King Kim sends his ladies.",
        "cn": "金姆国王派出了宫廷里的女士们。",
        "audio": "./assets/audio/generated/4eff4493c1e88638ca3b.mp3",
        "sourcePage": 11,
        "tag": "绘本原页 11"
      },
      {
        "id": "book-7-line-7",
        "text": "King Kim sends his mice.",
        "cn": "金姆国王派出了他的老鼠们。",
        "audio": "./assets/audio/generated/553b0fa135f806fb7ce7.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-7-line-8",
        "text": "The kitten looks for the mice.",
        "cn": "小猫出来找老鼠了。",
        "audio": "./assets/audio/generated/7ee1293793a56cf79d5a.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-7-line-9",
        "text": "My kitten!",
        "cn": "我的小猫！",
        "audio": "./assets/audio/generated/bfcd0cff33a308ceaab6.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      }
    ],
    "story": [
      {
        "text": "Lola sends a letter to the king.",
        "cn": "洛拉给国王寄了一封信。",
        "audio": "./assets/audio/generated/cc633a5d34e24d31043a.mp3",
        "lines": [
          {
            "text": "Lola sends a letter to the king.",
            "cn": "洛拉给国王寄了一封信。",
            "audio": "./assets/audio/generated/cc633a5d34e24d31043a.mp3"
          }
        ],
        "image": "./assets/library/story-07/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "\"Dear King Kim, I have lost my kitten,\" says Lola.",
        "cn": "洛拉说：亲爱的金姆国王，我的小猫丢了。",
        "audio": "./assets/audio/generated/52982e8832bcc7e15aa6.mp3",
        "lines": [
          {
            "text": "\"Dear King Kim, I have lost my kitten,\" says Lola.",
            "cn": "洛拉说：亲爱的金姆国王，我的小猫丢了。",
            "audio": "./assets/audio/generated/52982e8832bcc7e15aa6.mp3"
          }
        ],
        "image": "./assets/library/story-07/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "King Kim is kind.",
        "cn": "金姆国王很善良。",
        "audio": "./assets/audio/generated/42be2f369c195a7d3622.mp3",
        "lines": [
          {
            "text": "King Kim is kind.",
            "cn": "金姆国王很善良。",
            "audio": "./assets/audio/generated/42be2f369c195a7d3622.mp3"
          }
        ],
        "image": "./assets/library/story-07/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "He sends his men.",
        "cn": "他派出了手下。",
        "audio": "./assets/audio/generated/96de0f5eee739d58b3dc.mp3",
        "lines": [
          {
            "text": "He sends his men.",
            "cn": "他派出了手下。",
            "audio": "./assets/audio/generated/96de0f5eee739d58b3dc.mp3"
          }
        ],
        "image": "./assets/library/story-07/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "They look for the kitten.",
        "cn": "他们寻找那只小猫。",
        "audio": "./assets/audio/generated/fcad8aba7c3ddb8945ab.mp3",
        "lines": [
          {
            "text": "They look for the kitten.",
            "cn": "他们寻找那只小猫。",
            "audio": "./assets/audio/generated/fcad8aba7c3ddb8945ab.mp3"
          }
        ],
        "image": "./assets/library/story-07/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "King Kim sends his ladies.",
        "cn": "金姆国王派出了宫廷里的女士们。",
        "audio": "./assets/audio/generated/4eff4493c1e88638ca3b.mp3",
        "lines": [
          {
            "text": "King Kim sends his ladies.",
            "cn": "金姆国王派出了宫廷里的女士们。",
            "audio": "./assets/audio/generated/4eff4493c1e88638ca3b.mp3"
          }
        ],
        "image": "./assets/library/story-07/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "They look for the kitten.",
        "cn": "她们寻找那只小猫。",
        "audio": "./assets/audio/generated/fcad8aba7c3ddb8945ab.mp3",
        "lines": [
          {
            "text": "They look for the kitten.",
            "cn": "她们寻找那只小猫。",
            "audio": "./assets/audio/generated/fcad8aba7c3ddb8945ab.mp3"
          }
        ],
        "image": "./assets/library/story-07/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "King Kim sends his mice.",
        "cn": "金姆国王派出了他的老鼠们。",
        "audio": "./assets/audio/generated/553b0fa135f806fb7ce7.mp3",
        "lines": [
          {
            "text": "King Kim sends his mice.",
            "cn": "金姆国王派出了他的老鼠们。",
            "audio": "./assets/audio/generated/553b0fa135f806fb7ce7.mp3"
          }
        ],
        "image": "./assets/library/story-07/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "The kitten looks for the mice.",
        "cn": "小猫出来找老鼠了。",
        "audio": "./assets/audio/generated/7ee1293793a56cf79d5a.mp3",
        "lines": [
          {
            "text": "The kitten looks for the mice.",
            "cn": "小猫出来找老鼠了。",
            "audio": "./assets/audio/generated/7ee1293793a56cf79d5a.mp3"
          }
        ],
        "image": "./assets/library/story-07/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "My kitten!",
        "cn": "我的小猫！",
        "audio": "./assets/audio/generated/bfcd0cff33a308ceaab6.mp3",
        "lines": [
          {
            "text": "My kitten!",
            "cn": "我的小猫！",
            "audio": "./assets/audio/generated/bfcd0cff33a308ceaab6.mp3"
          }
        ],
        "image": "./assets/library/story-07/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 7,
        "fileName": "绘本\\007.pdf",
        "totalPages": 17,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-07/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-07/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-07/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-07/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-07/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-07/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-07/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-07/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-07/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-07/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-07/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-07/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-07/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-07/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-07/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-07/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-07/p017.webp"
          }
        ],
        "title": "Lola and the King · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-04",
    "lesson": null,
    "bookNumber": 4,
    "readingOrder": 7,
    "orderConfirmed": true,
    "orderNote": "目录位置依据客户端截图",
    "title": "Ned, Mum and Nan",
    "titleCn": "内德、妈妈和奶奶",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-04/p001.webp",
    "coreWords": [
      {
        "id": "ned",
        "en": "Ned",
        "cn": "内德",
        "audio": "./assets/audio/generated/7c95b1b284881b54153a.mp3",
        "audioType": "synthesized",
        "sourcePage": 2,
        "image": "./assets/library/story-04/p002.webp"
      },
      {
        "id": "mum",
        "en": "mum",
        "cn": "妈妈",
        "audio": "./assets/audio/generated/f2d758f9e379babc91f1.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-04/p003.webp",
        "sourcePage": 3
      },
      {
        "id": "nan",
        "en": "nan",
        "cn": "奶奶",
        "audio": "./assets/audio/generated/9b2d5b4678781e53038e.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-04/p004.webp",
        "sourcePage": 4
      },
      {
        "id": "nest",
        "en": "nest",
        "cn": "窝",
        "audio": "./assets/audio/generated/75ef2e329bdb50d26a4c.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-04/p007.webp"
      },
      {
        "id": "milk",
        "en": "milk",
        "cn": "牛奶",
        "audio": "./assets/audio/generated/8825e76530f87ff5c737.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-04/p009.webp"
      },
      {
        "id": "man",
        "en": "man",
        "cn": "男人",
        "audio": "./assets/audio/generated/48b676e2b107da679512.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-04/p011.webp"
      },
      {
        "id": "mug",
        "en": "mug",
        "cn": "马克杯",
        "audio": "./assets/audio/generated/a19ee2577879b76a5b98.mp3",
        "audioType": "synthesized",
        "sourcePage": 14,
        "image": "./assets/library/story-04/p014.webp"
      },
      {
        "id": "pan",
        "en": "pan",
        "cn": "平底锅",
        "audio": "./assets/audio/generated/00e37ffae0562ab6818d.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-04/p016.webp"
      },
      {
        "id": "nap",
        "en": "nap",
        "cn": "小睡",
        "audio": "./assets/audio/generated/82ebadafdeec2df737e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 18,
        "image": "./assets/library/story-04/p018.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-4-line-1",
        "text": "Ned is at a farm.",
        "cn": "内德在农场。",
        "audio": "./assets/audio/generated/453389e9e139f0ee99cf.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-4-line-2",
        "text": "He gets eggs from a nest.",
        "cn": "他从鸟窝里拿到鸡蛋。",
        "audio": "./assets/audio/generated/ba5400d404b2e2c1e645.mp3",
        "sourcePage": 6,
        "tag": "绘本原页 6"
      },
      {
        "id": "book-4-line-3",
        "text": "Mum gets milk from a cow.",
        "cn": "妈妈从奶牛那里挤到牛奶。",
        "audio": "./assets/audio/generated/578175e86f89aa607cf2.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-4-line-4",
        "text": "Moo!",
        "cn": "哞！",
        "audio": "./assets/audio/generated/565f923aa7a886d9ff5e.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-4-line-5",
        "text": "Nan gets a bag from the man.",
        "cn": "奶奶从那个人那里拿到一个袋子。",
        "audio": "./assets/audio/generated/8d85f53bdd86a174e510.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-4-line-6",
        "text": "Now Ned is at home.",
        "cn": "现在内德在家了。",
        "audio": "./assets/audio/generated/abca8fd657d215c198b5.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-4-line-7",
        "text": "He gets a mug.",
        "cn": "他拿来一个马克杯。",
        "audio": "./assets/audio/generated/0981f5787545f5ec6e5b.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-4-line-8",
        "text": "Mum gets a pan.",
        "cn": "妈妈拿来一个平底锅。",
        "audio": "./assets/audio/generated/b13281935e20e461d3dc.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-4-line-9",
        "text": "Nan gets pancakes and a nap!",
        "cn": "奶奶吃到薄煎饼，还能打个盹！",
        "audio": "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      },
      {
        "id": "book-4-line-10",
        "text": "Yum!",
        "cn": "真好吃！",
        "audio": "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      }
    ],
    "story": [
      {
        "text": "Ned is at a farm.",
        "cn": "内德在农场。",
        "audio": "./assets/audio/generated/453389e9e139f0ee99cf.mp3",
        "lines": [
          {
            "text": "Ned is at a farm.",
            "cn": "内德在农场。",
            "audio": "./assets/audio/generated/453389e9e139f0ee99cf.mp3"
          }
        ],
        "image": "./assets/library/story-04/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "He gets eggs from a nest.",
        "cn": "他从鸟窝里拿到鸡蛋。",
        "audio": "./assets/audio/generated/ba5400d404b2e2c1e645.mp3",
        "lines": [
          {
            "text": "He gets eggs from a nest.",
            "cn": "他从鸟窝里拿到鸡蛋。",
            "audio": "./assets/audio/generated/ba5400d404b2e2c1e645.mp3"
          }
        ],
        "image": "./assets/library/story-04/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Mum gets milk from a cow.",
        "cn": "妈妈从奶牛那里挤到牛奶。",
        "audio": "./assets/audio/generated/578175e86f89aa607cf2.mp3",
        "lines": [
          {
            "text": "Mum gets milk from a cow.",
            "cn": "妈妈从奶牛那里挤到牛奶。",
            "audio": "./assets/audio/generated/578175e86f89aa607cf2.mp3"
          }
        ],
        "image": "./assets/library/story-04/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Moo!",
        "cn": "哞！",
        "audio": "./assets/audio/generated/565f923aa7a886d9ff5e.mp3",
        "lines": [
          {
            "text": "Moo!",
            "cn": "哞！",
            "audio": "./assets/audio/generated/565f923aa7a886d9ff5e.mp3"
          }
        ],
        "image": "./assets/library/story-04/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Nan gets a bag from the man.",
        "cn": "奶奶从那个人那里拿到一个袋子。",
        "audio": "./assets/audio/generated/8d85f53bdd86a174e510.mp3",
        "lines": [
          {
            "text": "Nan gets a bag from the man.",
            "cn": "奶奶从那个人那里拿到一个袋子。",
            "audio": "./assets/audio/generated/8d85f53bdd86a174e510.mp3"
          }
        ],
        "image": "./assets/library/story-04/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Now Ned is at home.",
        "cn": "现在内德在家了。",
        "audio": "./assets/audio/generated/abca8fd657d215c198b5.mp3",
        "lines": [
          {
            "text": "Now Ned is at home.",
            "cn": "现在内德在家了。",
            "audio": "./assets/audio/generated/abca8fd657d215c198b5.mp3"
          }
        ],
        "image": "./assets/library/story-04/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "He gets a mug.",
        "cn": "他拿来一个马克杯。",
        "audio": "./assets/audio/generated/0981f5787545f5ec6e5b.mp3",
        "lines": [
          {
            "text": "He gets a mug.",
            "cn": "他拿来一个马克杯。",
            "audio": "./assets/audio/generated/0981f5787545f5ec6e5b.mp3"
          }
        ],
        "image": "./assets/library/story-04/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Mum gets a pan.",
        "cn": "妈妈拿来一个平底锅。",
        "audio": "./assets/audio/generated/b13281935e20e461d3dc.mp3",
        "lines": [
          {
            "text": "Mum gets a pan.",
            "cn": "妈妈拿来一个平底锅。",
            "audio": "./assets/audio/generated/b13281935e20e461d3dc.mp3"
          }
        ],
        "image": "./assets/library/story-04/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "Nan gets pancakes and a nap!",
        "cn": "奶奶吃到薄煎饼，还能打个盹！",
        "audio": "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3",
        "lines": [
          {
            "text": "Nan gets pancakes and a nap!",
            "cn": "奶奶吃到薄煎饼，还能打个盹！",
            "audio": "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3"
          }
        ],
        "image": "./assets/library/story-04/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "Yum!",
        "cn": "真好吃！",
        "audio": "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3",
        "lines": [
          {
            "text": "Yum!",
            "cn": "真好吃！",
            "audio": "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3"
          }
        ],
        "image": "./assets/library/story-04/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 4,
        "fileName": "绘本\\004.pdf",
        "totalPages": 20,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-04/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-04/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-04/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-04/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-04/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-04/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-04/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-04/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-04/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-04/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-04/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-04/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-04/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-04/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-04/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-04/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-04/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-04/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-04/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-04/p020.webp"
          }
        ],
        "title": "Ned, Mum and Nan · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-05",
    "lesson": null,
    "bookNumber": 5,
    "readingOrder": null,
    "orderConfirmed": false,
    "orderNote": "已有资料，平台课次待核对",
    "title": "Ollie and Puppy",
    "titleCn": "奥利和小狗",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-05/p001.webp",
    "coreWords": [
      {
        "id": "ollie",
        "en": "Ollie",
        "cn": "奥利",
        "audio": "./assets/audio/generated/8ae01e3d4d5a82236892.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-05/p003.webp"
      },
      {
        "id": "puppy",
        "en": "puppy",
        "cn": "小狗",
        "audio": "./assets/audio/generated/6588ef4db6a357d6d9ca.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-05/p005.webp"
      },
      {
        "id": "pat",
        "en": "pat",
        "cn": "轻拍",
        "audio": "./assets/audio/generated/68d753f055b1a15b3949.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-05/p006.webp"
      },
      {
        "id": "shop",
        "en": "shop",
        "cn": "商店",
        "audio": "./assets/audio/generated/8d9001d32c6a703d9592.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-05/p007.webp"
      },
      {
        "id": "park",
        "en": "park",
        "cn": "公园",
        "audio": "./assets/audio/generated/4d3971de62245c94cd3d.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-05/p009.webp"
      },
      {
        "id": "penny",
        "en": "Penny",
        "cn": "佩妮",
        "audio": "./assets/audio/generated/529c3146271d02cb3aca.mp3",
        "audioType": "synthesized",
        "sourcePage": 14,
        "image": "./assets/library/story-05/p014.webp"
      },
      {
        "id": "dog",
        "en": "dog",
        "cn": "狗",
        "audio": "./assets/audio/words/dog.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-05/p015.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-5-line-1",
        "text": "Ollie wants a friend.",
        "cn": "奥利想要一个朋友。",
        "audio": "./assets/audio/generated/6dba34c6b394b15f5c79.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-5-line-2",
        "text": "He finds a puppy.",
        "cn": "他发现了一只小狗。",
        "audio": "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3",
        "sourcePage": 4,
        "tag": "绘本原页 4"
      },
      {
        "id": "book-5-line-3",
        "text": "He pats it.",
        "cn": "他轻轻拍拍它。",
        "audio": "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3",
        "sourcePage": 4,
        "tag": "绘本原页 4"
      },
      {
        "id": "book-5-line-4",
        "text": "Ollie plays in the park.",
        "cn": "奥利在公园里玩。",
        "audio": "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-5-line-5",
        "text": "Puppy plays in the park.",
        "cn": "小狗也在公园里玩。",
        "audio": "./assets/audio/generated/dbbc80741ce62a824040.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-5-line-6",
        "text": "Come on!",
        "cn": "来吧！",
        "audio": "./assets/audio/generated/4907ee25d9f6991a18c2.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-5-line-7",
        "text": "Ollie eats pizza and an orange.",
        "cn": "奥利吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/faea1f30bb88216eca7d.mp3",
        "sourcePage": 11,
        "tag": "绘本原页 11"
      },
      {
        "id": "book-5-line-8",
        "text": "Puppy eats pizza and an orange.",
        "cn": "小狗吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/19476231c33c572ef410.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-5-line-9",
        "text": "Penny finds her puppy.",
        "cn": "佩妮找到了自己的小狗。",
        "audio": "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-5-line-10",
        "text": "She pats it.",
        "cn": "她轻轻拍拍它。",
        "audio": "./assets/audio/generated/d363baf0b9106274ee9f.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-5-line-11",
        "text": "Good dog!",
        "cn": "乖狗狗！",
        "audio": "./assets/audio/generated/f04f90ac55f009bb6325.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-5-line-12",
        "text": "Ollie finds a friend.",
        "cn": "奥利找到了一个朋友。",
        "audio": "./assets/audio/generated/ce477972bab0014bb57e.mp3",
        "sourcePage": 16,
        "tag": "绘本原页 16"
      }
    ],
    "story": [
      {
        "text": "Ollie wants a friend.",
        "cn": "奥利想要一个朋友。",
        "audio": "./assets/audio/generated/6dba34c6b394b15f5c79.mp3",
        "lines": [
          {
            "text": "Ollie wants a friend.",
            "cn": "奥利想要一个朋友。",
            "audio": "./assets/audio/generated/6dba34c6b394b15f5c79.mp3"
          }
        ],
        "image": "./assets/library/story-05/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "He finds a puppy.",
        "cn": "他发现了一只小狗。",
        "audio": "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3",
        "lines": [
          {
            "text": "He finds a puppy.",
            "cn": "他发现了一只小狗。",
            "audio": "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3"
          }
        ],
        "image": "./assets/library/story-05/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "He pats it.",
        "cn": "他轻轻拍拍它。",
        "audio": "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3",
        "lines": [
          {
            "text": "He pats it.",
            "cn": "他轻轻拍拍它。",
            "audio": "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3"
          }
        ],
        "image": "./assets/library/story-05/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "Ollie plays in the park.",
        "cn": "奥利在公园里玩。",
        "audio": "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3",
        "lines": [
          {
            "text": "Ollie plays in the park.",
            "cn": "奥利在公园里玩。",
            "audio": "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3"
          }
        ],
        "image": "./assets/library/story-05/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Puppy plays in the park.",
        "cn": "小狗也在公园里玩。",
        "audio": "./assets/audio/generated/dbbc80741ce62a824040.mp3",
        "lines": [
          {
            "text": "Puppy plays in the park.",
            "cn": "小狗也在公园里玩。",
            "audio": "./assets/audio/generated/dbbc80741ce62a824040.mp3"
          }
        ],
        "image": "./assets/library/story-05/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Come on!",
        "cn": "来吧！",
        "audio": "./assets/audio/generated/4907ee25d9f6991a18c2.mp3",
        "lines": [
          {
            "text": "Come on!",
            "cn": "来吧！",
            "audio": "./assets/audio/generated/4907ee25d9f6991a18c2.mp3"
          }
        ],
        "image": "./assets/library/story-05/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ollie eats pizza and an orange.",
        "cn": "奥利吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/faea1f30bb88216eca7d.mp3",
        "lines": [
          {
            "text": "Ollie eats pizza and an orange.",
            "cn": "奥利吃比萨和一个橙子。",
            "audio": "./assets/audio/generated/faea1f30bb88216eca7d.mp3"
          }
        ],
        "image": "./assets/library/story-05/p011.webp",
        "caption": "绘本原页 11",
        "sourcePage": 11,
        "original": true
      },
      {
        "text": "Puppy eats pizza and an orange.",
        "cn": "小狗吃比萨和一个橙子。",
        "audio": "./assets/audio/generated/19476231c33c572ef410.mp3",
        "lines": [
          {
            "text": "Puppy eats pizza and an orange.",
            "cn": "小狗吃比萨和一个橙子。",
            "audio": "./assets/audio/generated/19476231c33c572ef410.mp3"
          }
        ],
        "image": "./assets/library/story-05/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Penny finds her puppy.",
        "cn": "佩妮找到了自己的小狗。",
        "audio": "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3",
        "lines": [
          {
            "text": "Penny finds her puppy.",
            "cn": "佩妮找到了自己的小狗。",
            "audio": "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3"
          }
        ],
        "image": "./assets/library/story-05/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "She pats it.",
        "cn": "她轻轻拍拍它。",
        "audio": "./assets/audio/generated/d363baf0b9106274ee9f.mp3",
        "lines": [
          {
            "text": "She pats it.",
            "cn": "她轻轻拍拍它。",
            "audio": "./assets/audio/generated/d363baf0b9106274ee9f.mp3"
          }
        ],
        "image": "./assets/library/story-05/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Good dog!",
        "cn": "乖狗狗！",
        "audio": "./assets/audio/generated/f04f90ac55f009bb6325.mp3",
        "lines": [
          {
            "text": "Good dog!",
            "cn": "乖狗狗！",
            "audio": "./assets/audio/generated/f04f90ac55f009bb6325.mp3"
          }
        ],
        "image": "./assets/library/story-05/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Ollie finds a friend.",
        "cn": "奥利找到了一个朋友。",
        "audio": "./assets/audio/generated/ce477972bab0014bb57e.mp3",
        "lines": [
          {
            "text": "Ollie finds a friend.",
            "cn": "奥利找到了一个朋友。",
            "audio": "./assets/audio/generated/ce477972bab0014bb57e.mp3"
          }
        ],
        "image": "./assets/library/story-05/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 5,
        "fileName": "绘本\\005.pdf",
        "totalPages": 18,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-05/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-05/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-05/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-05/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-05/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-05/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-05/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-05/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-05/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-05/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-05/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-05/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-05/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-05/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-05/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-05/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-05/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-05/p018.webp"
          }
        ],
        "title": "Ollie and Puppy · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-09",
    "lesson": null,
    "bookNumber": 9,
    "readingOrder": null,
    "orderConfirmed": false,
    "orderNote": "已有资料，平台课次待核对",
    "title": "Roses for the Queen",
    "titleCn": "送给女王的玫瑰",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-09/p001.webp",
    "coreWords": [
      {
        "id": "quiet",
        "en": "quiet",
        "cn": "安静的",
        "audio": "./assets/audio/generated/008f0747f4e27c8462ba.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-09/p004.webp"
      },
      {
        "id": "queen",
        "en": "queen",
        "cn": "女王",
        "audio": "./assets/audio/generated/a9c3c1f7674502331a5a.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-09/p006.webp"
      },
      {
        "id": "rest",
        "en": "rest",
        "cn": "休息",
        "audio": "./assets/audio/generated/2e09d5210db8417757b0.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-09/p007.webp"
      },
      {
        "id": "quilt",
        "en": "quilt",
        "cn": "被子",
        "audio": "./assets/audio/generated/b8b2eacffb5d4d4065e7.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-09/p009.webp"
      },
      {
        "id": "rose",
        "en": "rose",
        "cn": "玫瑰",
        "audio": "./assets/audio/generated/618d663af0f1ec88a5a1.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-09/p011.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-9-line-1",
        "text": "This is the royal castle.",
        "cn": "这是皇家城堡。",
        "audio": "./assets/audio/generated/936e62942fda42b2f84b.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-9-line-2",
        "text": "It is very quiet.",
        "cn": "城堡里非常安静。",
        "audio": "./assets/audio/generated/303c15dc6cb0452f01e9.mp3",
        "sourcePage": 3,
        "tag": "绘本原页 3"
      },
      {
        "id": "book-9-line-3",
        "text": "Ssh! Be quiet!",
        "cn": "嘘！安静点！",
        "audio": "./assets/audio/generated/b401a56f3251feaf3ae1.mp3",
        "sourcePage": 3,
        "tag": "绘本原页 3"
      },
      {
        "id": "book-9-line-4",
        "text": "The queen is resting.",
        "cn": "女王正在休息。",
        "audio": "./assets/audio/generated/05e5db73fa4f7a79af0e.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-9-line-5",
        "text": "The maid brings a quilt.",
        "cn": "女仆拿来一床被子。",
        "audio": "./assets/audio/generated/ad36a0d1417254fa38e1.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-9-line-6",
        "text": "The king brings red roses.",
        "cn": "国王带来红玫瑰。",
        "audio": "./assets/audio/generated/f28b60f1bef138eb0c33.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-9-line-7",
        "text": "The doctor brings his bag.",
        "cn": "医生带来他的包。",
        "audio": "./assets/audio/generated/724416ec9e8c7b2ba56b.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-9-line-8",
        "text": "It is not quiet now!",
        "cn": "现在城堡里不安静了！",
        "audio": "./assets/audio/generated/0fd0670aa156de47e271.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-9-line-9",
        "text": "Whizz!",
        "cn": "嗖！",
        "audio": "./assets/audio/generated/ab973c4fc49205187036.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-9-line-10",
        "text": "Clank!",
        "cn": "铿锵！",
        "audio": "./assets/audio/generated/94a43b1e8a57a4e94d70.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-9-line-11",
        "text": "Woo! Woo!",
        "cn": "哇！哇！",
        "audio": "./assets/audio/generated/df26fb7e862f45317e0e.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-9-line-12",
        "text": "It is a boy!",
        "cn": "是个男孩！",
        "audio": "./assets/audio/generated/802727f7ff9306de1e0f.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      }
    ],
    "story": [
      {
        "text": "This is the royal castle.",
        "cn": "这是皇家城堡。",
        "audio": "./assets/audio/generated/936e62942fda42b2f84b.mp3",
        "lines": [
          {
            "text": "This is the royal castle.",
            "cn": "这是皇家城堡。",
            "audio": "./assets/audio/generated/936e62942fda42b2f84b.mp3"
          }
        ],
        "image": "./assets/library/story-09/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "It is very quiet.",
        "cn": "城堡里非常安静。",
        "audio": "./assets/audio/generated/303c15dc6cb0452f01e9.mp3",
        "lines": [
          {
            "text": "It is very quiet.",
            "cn": "城堡里非常安静。",
            "audio": "./assets/audio/generated/303c15dc6cb0452f01e9.mp3"
          }
        ],
        "image": "./assets/library/story-09/p003.webp",
        "caption": "绘本原页 3",
        "sourcePage": 3,
        "original": true
      },
      {
        "text": "Ssh! Be quiet!",
        "cn": "嘘！安静点！",
        "audio": "./assets/audio/generated/b401a56f3251feaf3ae1.mp3",
        "lines": [
          {
            "text": "Ssh! Be quiet!",
            "cn": "嘘！安静点！",
            "audio": "./assets/audio/generated/b401a56f3251feaf3ae1.mp3"
          }
        ],
        "image": "./assets/library/story-09/p003.webp",
        "caption": "绘本原页 3",
        "sourcePage": 3,
        "original": true
      },
      {
        "text": "The queen is resting.",
        "cn": "女王正在休息。",
        "audio": "./assets/audio/generated/05e5db73fa4f7a79af0e.mp3",
        "lines": [
          {
            "text": "The queen is resting.",
            "cn": "女王正在休息。",
            "audio": "./assets/audio/generated/05e5db73fa4f7a79af0e.mp3"
          }
        ],
        "image": "./assets/library/story-09/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "The maid brings a quilt.",
        "cn": "女仆拿来一床被子。",
        "audio": "./assets/audio/generated/ad36a0d1417254fa38e1.mp3",
        "lines": [
          {
            "text": "The maid brings a quilt.",
            "cn": "女仆拿来一床被子。",
            "audio": "./assets/audio/generated/ad36a0d1417254fa38e1.mp3"
          }
        ],
        "image": "./assets/library/story-09/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "The king brings red roses.",
        "cn": "国王带来红玫瑰。",
        "audio": "./assets/audio/generated/f28b60f1bef138eb0c33.mp3",
        "lines": [
          {
            "text": "The king brings red roses.",
            "cn": "国王带来红玫瑰。",
            "audio": "./assets/audio/generated/f28b60f1bef138eb0c33.mp3"
          }
        ],
        "image": "./assets/library/story-09/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "The doctor brings his bag.",
        "cn": "医生带来他的包。",
        "audio": "./assets/audio/generated/724416ec9e8c7b2ba56b.mp3",
        "lines": [
          {
            "text": "The doctor brings his bag.",
            "cn": "医生带来他的包。",
            "audio": "./assets/audio/generated/724416ec9e8c7b2ba56b.mp3"
          }
        ],
        "image": "./assets/library/story-09/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "This is the royal castle.",
        "cn": "这是皇家城堡。",
        "audio": "./assets/audio/generated/936e62942fda42b2f84b.mp3",
        "lines": [
          {
            "text": "This is the royal castle.",
            "cn": "这是皇家城堡。",
            "audio": "./assets/audio/generated/936e62942fda42b2f84b.mp3"
          }
        ],
        "image": "./assets/library/story-09/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "It is not quiet now!",
        "cn": "现在城堡里不安静了！",
        "audio": "./assets/audio/generated/0fd0670aa156de47e271.mp3",
        "lines": [
          {
            "text": "It is not quiet now!",
            "cn": "现在城堡里不安静了！",
            "audio": "./assets/audio/generated/0fd0670aa156de47e271.mp3"
          }
        ],
        "image": "./assets/library/story-09/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Whizz!",
        "cn": "嗖！",
        "audio": "./assets/audio/generated/ab973c4fc49205187036.mp3",
        "lines": [
          {
            "text": "Whizz!",
            "cn": "嗖！",
            "audio": "./assets/audio/generated/ab973c4fc49205187036.mp3"
          }
        ],
        "image": "./assets/library/story-09/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Clank!",
        "cn": "铿锵！",
        "audio": "./assets/audio/generated/94a43b1e8a57a4e94d70.mp3",
        "lines": [
          {
            "text": "Clank!",
            "cn": "铿锵！",
            "audio": "./assets/audio/generated/94a43b1e8a57a4e94d70.mp3"
          }
        ],
        "image": "./assets/library/story-09/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Woo! Woo!",
        "cn": "哇！哇！",
        "audio": "./assets/audio/generated/df26fb7e862f45317e0e.mp3",
        "lines": [
          {
            "text": "Woo! Woo!",
            "cn": "哇！哇！",
            "audio": "./assets/audio/generated/df26fb7e862f45317e0e.mp3"
          }
        ],
        "image": "./assets/library/story-09/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "It is a boy!",
        "cn": "是个男孩！",
        "audio": "./assets/audio/generated/802727f7ff9306de1e0f.mp3",
        "lines": [
          {
            "text": "It is a boy!",
            "cn": "是个男孩！",
            "audio": "./assets/audio/generated/802727f7ff9306de1e0f.mp3"
          }
        ],
        "image": "./assets/library/story-09/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 9,
        "fileName": "绘本\\009.pdf",
        "totalPages": 16,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-09/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-09/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-09/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-09/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-09/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-09/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-09/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-09/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-09/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-09/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-09/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-09/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-09/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-09/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-09/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-09/p016.webp"
          }
        ],
        "title": "Roses for the Queen · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-10",
    "lesson": null,
    "bookNumber": 10,
    "readingOrder": null,
    "orderConfirmed": false,
    "orderNote": "已有资料，平台课次待核对",
    "title": "Tess and the Swans",
    "titleCn": "苔丝和天鹅",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-10/p001.webp",
    "coreWords": [
      {
        "id": "tess",
        "en": "Tess",
        "cn": "苔丝",
        "audio": "./assets/audio/generated/9aeaed03951337102f5e.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-10/p003.webp"
      },
      {
        "id": "swan",
        "en": "swan",
        "cn": "天鹅",
        "audio": "./assets/audio/generated/6856daebb0115b3b8c74.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-10/p005.webp"
      },
      {
        "id": "sun",
        "en": "sun",
        "cn": "太阳",
        "audio": "./assets/audio/generated/27756f050e14a1cb1c1e.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-10/p006.webp"
      },
      {
        "id": "sit",
        "en": "sit",
        "cn": "坐",
        "audio": "./assets/audio/generated/584178e5e3517ddcebc6.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-10/p007.webp"
      },
      {
        "id": "six",
        "en": "six",
        "cn": "六",
        "audio": "./assets/audio/generated/44778d82365e4af681c4.mp3",
        "audioType": "synthesized",
        "sourcePage": 9,
        "image": "./assets/library/story-10/p009.webp"
      },
      {
        "id": "tub",
        "en": "tub",
        "cn": "桶",
        "audio": "./assets/audio/generated/14cf0fbca484cf6cae8e.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-10/p011.webp"
      },
      {
        "id": "tent",
        "en": "tent",
        "cn": "帐篷",
        "audio": "./assets/audio/generated/2a9810cb71316c9a03e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 13,
        "image": "./assets/library/story-10/p013.webp"
      },
      {
        "id": "foot",
        "en": "foot",
        "cn": "脚",
        "audio": "./assets/audio/generated/22e4f6912a6980d6fd59.mp3",
        "audioType": "synthesized",
        "sourcePage": 15,
        "image": "./assets/library/story-10/p015.webp"
      },
      {
        "id": "tin",
        "en": "tin",
        "cn": "罐子",
        "audio": "./assets/audio/generated/ab547757da37eb600011.mp3",
        "audioType": "synthesized",
        "sourcePage": 16,
        "image": "./assets/library/story-10/p016.webp"
      },
      {
        "id": "tug",
        "en": "tug",
        "cn": "用力拉",
        "audio": "./assets/audio/generated/e6bbc6867045359448c8.mp3",
        "audioType": "synthesized",
        "sourcePage": 18,
        "image": "./assets/library/story-10/p018.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-10-line-1",
        "text": "Tess and Dad live on a boat.",
        "cn": "苔丝和爸爸住在一条船上。",
        "audio": "./assets/audio/generated/ef9f2b215cce72443d1e.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-10-line-2",
        "text": "The sun goes down.",
        "cn": "太阳落山了。",
        "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3",
        "sourcePage": 4,
        "tag": "绘本原页 4"
      },
      {
        "id": "book-10-line-3",
        "text": "Tess sits with Dad.",
        "cn": "苔丝和爸爸坐在一起。",
        "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3",
        "sourcePage": 4,
        "tag": "绘本原页 4"
      },
      {
        "id": "book-10-line-4",
        "text": "Seven swans!",
        "cn": "七只天鹅！",
        "audio": "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3",
        "sourcePage": 4,
        "tag": "绘本原页 4"
      },
      {
        "id": "book-10-line-5",
        "text": "So sweet!",
        "cn": "好可爱！",
        "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3",
        "sourcePage": 4,
        "tag": "绘本原页 4"
      },
      {
        "id": "book-10-line-6",
        "text": "The sun comes up.",
        "cn": "太阳升起来。",
        "audio": "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-10-line-7",
        "text": "It is a new day.",
        "cn": "新的一天到来了。",
        "audio": "./assets/audio/generated/c7a0ed0bd7875836676c.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-10-line-8",
        "text": "Six swans!",
        "cn": "六只天鹅！",
        "audio": "./assets/audio/generated/593760cf64d252c9315c.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-10-line-9",
        "text": "Oh no!",
        "cn": "噢，不！",
        "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-10-line-10",
        "text": "Tess looks for the little swan.",
        "cn": "苔丝寻找那只小天鹅。",
        "audio": "./assets/audio/generated/93afa14e4637ac76009c.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-10-line-11",
        "text": "Is it by the tub?",
        "cn": "它在桶旁边吗？",
        "audio": "./assets/audio/generated/824bbc70913eeb9571cf.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-10-line-12",
        "text": "No.",
        "cn": "不在。",
        "audio": "./assets/audio/generated/38178a20b470cfd18299.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-10-line-13",
        "text": "Dad looks for the little swan.",
        "cn": "爸爸寻找那只小天鹅。",
        "audio": "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-10-line-14",
        "text": "Is it by the tent?",
        "cn": "它在帐篷旁边吗？",
        "audio": "./assets/audio/generated/cdae6f07c983e0d70405.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-10-line-15",
        "text": "Yes!",
        "cn": "是的！",
        "audio": "./assets/audio/generated/8aff5108a050bcfab258.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-10-line-16",
        "text": "Her foot is in a tin.",
        "cn": "它的脚卡在一个罐子里。",
        "audio": "./assets/audio/generated/51773bb932508a6f7610.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-10-line-17",
        "text": "She's stuck!",
        "cn": "它被卡住了！",
        "audio": "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-10-line-18",
        "text": "Dad tugs and tugs.",
        "cn": "爸爸不停地用力拉。",
        "audio": "./assets/audio/generated/33a801ab9f93d7565153.mp3",
        "sourcePage": 17,
        "tag": "绘本原页 17"
      }
    ],
    "story": [
      {
        "text": "Tess and Dad live on a boat.",
        "cn": "苔丝和爸爸住在一条船上。",
        "audio": "./assets/audio/generated/ef9f2b215cce72443d1e.mp3",
        "lines": [
          {
            "text": "Tess and Dad live on a boat.",
            "cn": "苔丝和爸爸住在一条船上。",
            "audio": "./assets/audio/generated/ef9f2b215cce72443d1e.mp3"
          }
        ],
        "image": "./assets/library/story-10/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "The sun goes down.",
        "cn": "太阳落山了。",
        "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3",
        "lines": [
          {
            "text": "The sun goes down.",
            "cn": "太阳落山了。",
            "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "Tess sits with Dad.",
        "cn": "苔丝和爸爸坐在一起。",
        "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3",
        "lines": [
          {
            "text": "Tess sits with Dad.",
            "cn": "苔丝和爸爸坐在一起。",
            "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "Seven swans!",
        "cn": "七只天鹅！",
        "audio": "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3",
        "lines": [
          {
            "text": "Seven swans!",
            "cn": "七只天鹅！",
            "audio": "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "So sweet!",
        "cn": "好可爱！",
        "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3",
        "lines": [
          {
            "text": "So sweet!",
            "cn": "好可爱！",
            "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3"
          }
        ],
        "image": "./assets/library/story-10/p004.webp",
        "caption": "绘本原页 4",
        "sourcePage": 4,
        "original": true
      },
      {
        "text": "The sun comes up.",
        "cn": "太阳升起来。",
        "audio": "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3",
        "lines": [
          {
            "text": "The sun comes up.",
            "cn": "太阳升起来。",
            "audio": "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "It is a new day.",
        "cn": "新的一天到来了。",
        "audio": "./assets/audio/generated/c7a0ed0bd7875836676c.mp3",
        "lines": [
          {
            "text": "It is a new day.",
            "cn": "新的一天到来了。",
            "audio": "./assets/audio/generated/c7a0ed0bd7875836676c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Six swans!",
        "cn": "六只天鹅！",
        "audio": "./assets/audio/generated/593760cf64d252c9315c.mp3",
        "lines": [
          {
            "text": "Six swans!",
            "cn": "六只天鹅！",
            "audio": "./assets/audio/generated/593760cf64d252c9315c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Oh no!",
        "cn": "噢，不！",
        "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3",
        "lines": [
          {
            "text": "Oh no!",
            "cn": "噢，不！",
            "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3"
          }
        ],
        "image": "./assets/library/story-10/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Tess looks for the little swan.",
        "cn": "苔丝寻找那只小天鹅。",
        "audio": "./assets/audio/generated/93afa14e4637ac76009c.mp3",
        "lines": [
          {
            "text": "Tess looks for the little swan.",
            "cn": "苔丝寻找那只小天鹅。",
            "audio": "./assets/audio/generated/93afa14e4637ac76009c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Is it by the tub?",
        "cn": "它在桶旁边吗？",
        "audio": "./assets/audio/generated/824bbc70913eeb9571cf.mp3",
        "lines": [
          {
            "text": "Is it by the tub?",
            "cn": "它在桶旁边吗？",
            "audio": "./assets/audio/generated/824bbc70913eeb9571cf.mp3"
          }
        ],
        "image": "./assets/library/story-10/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "No.",
        "cn": "不在。",
        "audio": "./assets/audio/generated/38178a20b470cfd18299.mp3",
        "lines": [
          {
            "text": "No.",
            "cn": "不在。",
            "audio": "./assets/audio/generated/38178a20b470cfd18299.mp3"
          }
        ],
        "image": "./assets/library/story-10/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Dad looks for the little swan.",
        "cn": "爸爸寻找那只小天鹅。",
        "audio": "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3",
        "lines": [
          {
            "text": "Dad looks for the little swan.",
            "cn": "爸爸寻找那只小天鹅。",
            "audio": "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3"
          }
        ],
        "image": "./assets/library/story-10/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Is it by the tent?",
        "cn": "它在帐篷旁边吗？",
        "audio": "./assets/audio/generated/cdae6f07c983e0d70405.mp3",
        "lines": [
          {
            "text": "Is it by the tent?",
            "cn": "它在帐篷旁边吗？",
            "audio": "./assets/audio/generated/cdae6f07c983e0d70405.mp3"
          }
        ],
        "image": "./assets/library/story-10/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Yes!",
        "cn": "是的！",
        "audio": "./assets/audio/generated/8aff5108a050bcfab258.mp3",
        "lines": [
          {
            "text": "Yes!",
            "cn": "是的！",
            "audio": "./assets/audio/generated/8aff5108a050bcfab258.mp3"
          }
        ],
        "image": "./assets/library/story-10/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Her foot is in a tin.",
        "cn": "它的脚卡在一个罐子里。",
        "audio": "./assets/audio/generated/51773bb932508a6f7610.mp3",
        "lines": [
          {
            "text": "Her foot is in a tin.",
            "cn": "它的脚卡在一个罐子里。",
            "audio": "./assets/audio/generated/51773bb932508a6f7610.mp3"
          }
        ],
        "image": "./assets/library/story-10/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "She's stuck!",
        "cn": "它被卡住了！",
        "audio": "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3",
        "lines": [
          {
            "text": "She's stuck!",
            "cn": "它被卡住了！",
            "audio": "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3"
          }
        ],
        "image": "./assets/library/story-10/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Oh no!",
        "cn": "噢，不！",
        "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3",
        "lines": [
          {
            "text": "Oh no!",
            "cn": "噢，不！",
            "audio": "./assets/audio/generated/241a3380b7970c555c98.mp3"
          }
        ],
        "image": "./assets/library/story-10/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Dad tugs and tugs.",
        "cn": "爸爸不停地用力拉。",
        "audio": "./assets/audio/generated/33a801ab9f93d7565153.mp3",
        "lines": [
          {
            "text": "Dad tugs and tugs.",
            "cn": "爸爸不停地用力拉。",
            "audio": "./assets/audio/generated/33a801ab9f93d7565153.mp3"
          }
        ],
        "image": "./assets/library/story-10/p017.webp",
        "caption": "绘本原页 17",
        "sourcePage": 17,
        "original": true
      },
      {
        "text": "The sun goes down.",
        "cn": "太阳落山了。",
        "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3",
        "lines": [
          {
            "text": "The sun goes down.",
            "cn": "太阳落山了。",
            "audio": "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      },
      {
        "text": "Tess sits with Dad.",
        "cn": "苔丝和爸爸坐在一起。",
        "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3",
        "lines": [
          {
            "text": "Tess sits with Dad.",
            "cn": "苔丝和爸爸坐在一起。",
            "audio": "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      },
      {
        "text": "Seven swans.",
        "cn": "七只天鹅。",
        "audio": "./assets/audio/generated/ee5621532d7278baa0dc.mp3",
        "lines": [
          {
            "text": "Seven swans.",
            "cn": "七只天鹅。",
            "audio": "./assets/audio/generated/ee5621532d7278baa0dc.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      },
      {
        "text": "So sweet!",
        "cn": "好可爱！",
        "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3",
        "lines": [
          {
            "text": "So sweet!",
            "cn": "好可爱！",
            "audio": "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3"
          }
        ],
        "image": "./assets/library/story-10/p019.webp",
        "caption": "绘本原页 19",
        "sourcePage": 19,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 10,
        "fileName": "绘本\\010.pdf",
        "totalPages": 21,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-10/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-10/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-10/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-10/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-10/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-10/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-10/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-10/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-10/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-10/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-10/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-10/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-10/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-10/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-10/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-10/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-10/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-10/p018.webp"
          },
          {
            "page": 19,
            "image": "./assets/library/story-10/p019.webp"
          },
          {
            "page": 20,
            "image": "./assets/library/story-10/p020.webp"
          },
          {
            "page": 21,
            "image": "./assets/library/story-10/p021.webp"
          }
        ],
        "title": "Tess and the Swans · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-11",
    "lesson": null,
    "bookNumber": 11,
    "readingOrder": null,
    "orderConfirmed": false,
    "orderNote": "已有资料，平台课次待核对",
    "title": "Uncle Vic's Wagon",
    "titleCn": "维克叔叔的马车",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-11/p001.webp",
    "coreWords": [
      {
        "id": "uncle",
        "en": "uncle",
        "cn": "叔叔",
        "audio": "./assets/audio/generated/3107ea0301a27894a212.mp3",
        "audioType": "synthesized",
        "sourcePage": 3,
        "image": "./assets/library/story-11/p003.webp"
      },
      {
        "id": "vic",
        "en": "Vic",
        "cn": "维克",
        "audio": "./assets/audio/generated/d8f9af9f384c3cfef147.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-11/p004.webp"
      },
      {
        "id": "wood",
        "en": "wood",
        "cn": "树林",
        "audio": "./assets/audio/generated/99f7855eb789dfecf9ea.mp3",
        "audioType": "synthesized",
        "sourcePage": 5,
        "image": "./assets/library/story-11/p005.webp"
      },
      {
        "id": "wagon",
        "en": "wagon",
        "cn": "马车",
        "audio": "./assets/audio/generated/baf6a0b70ab07cf16c76.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-11/p007.webp"
      },
      {
        "id": "van",
        "en": "van",
        "cn": "厢式货车",
        "audio": "./assets/audio/generated/970b1897af0abab6127d.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-11/p009.webp",
        "sourcePage": 9
      },
      {
        "id": "up",
        "en": "up",
        "cn": "向上",
        "audio": "./assets/audio/generated/75a288c0d6898c5f7b05.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-11/p011.webp"
      },
      {
        "id": "work",
        "en": "work",
        "cn": "工作；修理",
        "audio": "./assets/audio/generated/00e13ed7af55b27622f1.mp3",
        "audioType": "synthesized",
        "sourcePage": 13,
        "image": "./assets/library/story-11/p013.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-11-line-1",
        "text": "Uncle Vic is in the woods.",
        "cn": "维克叔叔在树林里。",
        "audio": "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-11-line-2",
        "text": "He finds a wagon.",
        "cn": "他发现了一辆马车。",
        "audio": "./assets/audio/generated/da136114a1a4bad9bada.mp3",
        "sourcePage": 6,
        "tag": "绘本原页 6"
      },
      {
        "id": "book-11-line-3",
        "text": "Uncle Vic gets his van.",
        "cn": "维克叔叔开来了他的厢式货车。",
        "audio": "./assets/audio/generated/cbaea186eada815e95b9.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-11-line-4",
        "text": "He puts the wagon in it.",
        "cn": "他把马车放进货车里。",
        "audio": "./assets/audio/generated/04412d8f615d1d0c1509.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-11-line-5",
        "text": "Up in the van!",
        "cn": "搬上货车！",
        "audio": "./assets/audio/generated/a40431bae6a34643662b.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-11-line-6",
        "text": "Uncle Vic works on the wagon.",
        "cn": "维克叔叔在修理马车。",
        "audio": "./assets/audio/generated/3db49ba674190aba1547.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-11-line-7",
        "text": "Come and help.",
        "cn": "过来帮忙。",
        "audio": "./assets/audio/generated/d9e86b183dc04f71b033.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-11-line-8",
        "text": "OK, Uncle.",
        "cn": "好的，叔叔。",
        "audio": "./assets/audio/generated/c930abe0a399d95c8617.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-11-line-9",
        "text": "We put the wheel back on.",
        "cn": "我们把车轮装了回去。",
        "audio": "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-11-line-10",
        "text": "Very good work!",
        "cn": "干得漂亮！",
        "audio": "./assets/audio/generated/9f19b1e1e280546754f2.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-11-line-11",
        "text": "We are in the woods.",
        "cn": "我们在树林里。",
        "audio": "./assets/audio/generated/8c3240c78e0a73d41d93.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-11-line-12",
        "text": "Uncle Vic finds a van!",
        "cn": "维克叔叔又发现了一辆货车！",
        "audio": "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3",
        "sourcePage": 16,
        "tag": "绘本原页 16"
      },
      {
        "id": "book-11-line-13",
        "text": "Uncle!",
        "cn": "叔叔！",
        "audio": "./assets/audio/generated/9203a830fd113b28407f.mp3",
        "sourcePage": 16,
        "tag": "绘本原页 16"
      }
    ],
    "story": [
      {
        "text": "Uncle Vic is in the woods.",
        "cn": "维克叔叔在树林里。",
        "audio": "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3",
        "lines": [
          {
            "text": "Uncle Vic is in the woods.",
            "cn": "维克叔叔在树林里。",
            "audio": "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3"
          }
        ],
        "image": "./assets/library/story-11/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "He finds a wagon.",
        "cn": "他发现了一辆马车。",
        "audio": "./assets/audio/generated/da136114a1a4bad9bada.mp3",
        "lines": [
          {
            "text": "He finds a wagon.",
            "cn": "他发现了一辆马车。",
            "audio": "./assets/audio/generated/da136114a1a4bad9bada.mp3"
          }
        ],
        "image": "./assets/library/story-11/p006.webp",
        "caption": "绘本原页 6",
        "sourcePage": 6,
        "original": true
      },
      {
        "text": "Uncle Vic gets his van.",
        "cn": "维克叔叔开来了他的厢式货车。",
        "audio": "./assets/audio/generated/cbaea186eada815e95b9.mp3",
        "lines": [
          {
            "text": "Uncle Vic gets his van.",
            "cn": "维克叔叔开来了他的厢式货车。",
            "audio": "./assets/audio/generated/cbaea186eada815e95b9.mp3"
          }
        ],
        "image": "./assets/library/story-11/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "He puts the wagon in it.",
        "cn": "他把马车放进货车里。",
        "audio": "./assets/audio/generated/04412d8f615d1d0c1509.mp3",
        "lines": [
          {
            "text": "He puts the wagon in it.",
            "cn": "他把马车放进货车里。",
            "audio": "./assets/audio/generated/04412d8f615d1d0c1509.mp3"
          }
        ],
        "image": "./assets/library/story-11/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Up in the van!",
        "cn": "搬上货车！",
        "audio": "./assets/audio/generated/a40431bae6a34643662b.mp3",
        "lines": [
          {
            "text": "Up in the van!",
            "cn": "搬上货车！",
            "audio": "./assets/audio/generated/a40431bae6a34643662b.mp3"
          }
        ],
        "image": "./assets/library/story-11/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Uncle Vic works on the wagon.",
        "cn": "维克叔叔在修理马车。",
        "audio": "./assets/audio/generated/3db49ba674190aba1547.mp3",
        "lines": [
          {
            "text": "Uncle Vic works on the wagon.",
            "cn": "维克叔叔在修理马车。",
            "audio": "./assets/audio/generated/3db49ba674190aba1547.mp3"
          }
        ],
        "image": "./assets/library/story-11/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "Come and help.",
        "cn": "过来帮忙。",
        "audio": "./assets/audio/generated/d9e86b183dc04f71b033.mp3",
        "lines": [
          {
            "text": "Come and help.",
            "cn": "过来帮忙。",
            "audio": "./assets/audio/generated/d9e86b183dc04f71b033.mp3"
          }
        ],
        "image": "./assets/library/story-11/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "OK, Uncle.",
        "cn": "好的，叔叔。",
        "audio": "./assets/audio/generated/c930abe0a399d95c8617.mp3",
        "lines": [
          {
            "text": "OK, Uncle.",
            "cn": "好的，叔叔。",
            "audio": "./assets/audio/generated/c930abe0a399d95c8617.mp3"
          }
        ],
        "image": "./assets/library/story-11/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "We put the wheel back on.",
        "cn": "我们把车轮装了回去。",
        "audio": "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3",
        "lines": [
          {
            "text": "We put the wheel back on.",
            "cn": "我们把车轮装了回去。",
            "audio": "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3"
          }
        ],
        "image": "./assets/library/story-11/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Very good work!",
        "cn": "干得漂亮！",
        "audio": "./assets/audio/generated/9f19b1e1e280546754f2.mp3",
        "lines": [
          {
            "text": "Very good work!",
            "cn": "干得漂亮！",
            "audio": "./assets/audio/generated/9f19b1e1e280546754f2.mp3"
          }
        ],
        "image": "./assets/library/story-11/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "We are in the woods.",
        "cn": "我们在树林里。",
        "audio": "./assets/audio/generated/8c3240c78e0a73d41d93.mp3",
        "lines": [
          {
            "text": "We are in the woods.",
            "cn": "我们在树林里。",
            "audio": "./assets/audio/generated/8c3240c78e0a73d41d93.mp3"
          }
        ],
        "image": "./assets/library/story-11/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "Uncle Vic finds a van!",
        "cn": "维克叔叔又发现了一辆货车！",
        "audio": "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3",
        "lines": [
          {
            "text": "Uncle Vic finds a van!",
            "cn": "维克叔叔又发现了一辆货车！",
            "audio": "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3"
          }
        ],
        "image": "./assets/library/story-11/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      },
      {
        "text": "Uncle!",
        "cn": "叔叔！",
        "audio": "./assets/audio/generated/9203a830fd113b28407f.mp3",
        "lines": [
          {
            "text": "Uncle!",
            "cn": "叔叔！",
            "audio": "./assets/audio/generated/9203a830fd113b28407f.mp3"
          }
        ],
        "image": "./assets/library/story-11/p016.webp",
        "caption": "绘本原页 16",
        "sourcePage": 16,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 11,
        "fileName": "绘本\\011.pdf",
        "totalPages": 18,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-11/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-11/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-11/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-11/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-11/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-11/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-11/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-11/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-11/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-11/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-11/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-11/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-11/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-11/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-11/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-11/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-11/p017.webp"
          },
          {
            "page": 18,
            "image": "./assets/library/story-11/p018.webp"
          }
        ],
        "title": "Uncle Vic's Wagon · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  },
  {
    "id": "reading-12",
    "lesson": null,
    "bookNumber": 12,
    "readingOrder": null,
    "orderConfirmed": false,
    "orderNote": "已有资料，平台课次待核对",
    "title": "Ox, Yak and Zebra",
    "titleCn": "公牛、牦牛和斑马",
    "available": true,
    "isReading": true,
    "subtitle": "自拼绘本精读",
    "level": "绘本精读 · 自主跟读版",
    "description": "按原绘本逐句听读，查看大字英文和中文翻译。未接入官方视频，合成朗读并非教师授课。",
    "coverImage": "./assets/library/story-12/p001.webp",
    "coreWords": [
      {
        "id": "fox",
        "en": "fox",
        "cn": "狐狸",
        "audio": "./assets/audio/generated/776cb326ab0cd5f0a974.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-12/p003.webp",
        "sourcePage": 3
      },
      {
        "id": "taxi",
        "en": "taxi",
        "cn": "出租车",
        "audio": "./assets/audio/generated/12796d3d5f4e132385f8.mp3",
        "audioType": "synthesized",
        "sourcePage": 4,
        "image": "./assets/library/story-12/p004.webp"
      },
      {
        "id": "ox",
        "en": "ox",
        "cn": "公牛",
        "audio": "./assets/audio/generated/1dd14ffc3c3045741a5e.mp3",
        "audioType": "synthesized",
        "sourcePage": 6,
        "image": "./assets/library/story-12/p006.webp"
      },
      {
        "id": "zoo",
        "en": "zoo",
        "cn": "动物园",
        "audio": "./assets/audio/generated/24fe93c9e17cb80452e5.mp3",
        "audioType": "synthesized",
        "sourcePage": 7,
        "image": "./assets/library/story-12/p007.webp"
      },
      {
        "id": "yak",
        "en": "yak",
        "cn": "牦牛",
        "audio": "./assets/audio/generated/e378e72a75855c08d49b.mp3",
        "audioType": "synthesized",
        "image": "./assets/library/story-12/p009.webp",
        "sourcePage": 9
      },
      {
        "id": "zebra",
        "en": "zebra",
        "cn": "斑马",
        "audio": "./assets/audio/generated/676cb75018edccf10fce.mp3",
        "audioType": "synthesized",
        "sourcePage": 11,
        "image": "./assets/library/story-12/p011.webp"
      }
    ],
    "phonicsWords": [],
    "letters": [],
    "chants": [],
    "introSentences": [],
    "storySentences": [
      {
        "id": "book-12-line-1",
        "text": "This is Fox in his yellow taxi.",
        "cn": "这是坐在黄色出租车里的狐狸。",
        "audio": "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3",
        "sourcePage": 2,
        "tag": "绘本原页 2"
      },
      {
        "id": "book-12-line-2",
        "text": "Ox wants a taxi.",
        "cn": "公牛想坐出租车。",
        "audio": "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-12-line-3",
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-12-line-4",
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-12-line-5",
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "sourcePage": 5,
        "tag": "绘本原页 5"
      },
      {
        "id": "book-12-line-6",
        "text": "Yak wants a taxi.",
        "cn": "牦牛想坐出租车。",
        "audio": "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3",
        "sourcePage": 8,
        "tag": "绘本原页 8"
      },
      {
        "id": "book-12-line-7",
        "text": "Zebra wants a taxi.",
        "cn": "斑马想坐出租车。",
        "audio": "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3",
        "sourcePage": 10,
        "tag": "绘本原页 10"
      },
      {
        "id": "book-12-line-8",
        "text": "Ox, Yak and Zebra want a party.",
        "cn": "公牛、牦牛和斑马想开一个派对。",
        "audio": "./assets/audio/generated/365b19f5f59b8b10df0f.mp3",
        "sourcePage": 12,
        "tag": "绘本原页 12"
      },
      {
        "id": "book-12-line-9",
        "text": "This is the zoo keeper.",
        "cn": "这是动物园管理员。",
        "audio": "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-12-line-10",
        "text": "He wants more animals!",
        "cn": "他想要更多动物！",
        "audio": "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3",
        "sourcePage": 13,
        "tag": "绘本原页 13"
      },
      {
        "id": "book-12-line-11",
        "text": "Ox, Yak and Zebra run and run.",
        "cn": "公牛、牦牛和斑马跑呀跑。",
        "audio": "./assets/audio/generated/d2b4b4146f60dac10b31.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-12-line-12",
        "text": "Oops!",
        "cn": "哎呀！",
        "audio": "./assets/audio/generated/8344947a402c722af9d8.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-12-line-13",
        "text": "Run!",
        "cn": "快跑！",
        "audio": "./assets/audio/generated/cd6317b826072e616fa0.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-12-line-14",
        "text": "To the taxi!",
        "cn": "去出租车那里！",
        "audio": "./assets/audio/generated/fafd59243a2026494340.mp3",
        "sourcePage": 14,
        "tag": "绘本原页 14"
      },
      {
        "id": "book-12-line-15",
        "text": "Ox, Yak and Zebra want a taxi.",
        "cn": "公牛、牦牛和斑马想坐出租车。",
        "audio": "./assets/audio/generated/af7fdd2101121561b1b2.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      },
      {
        "id": "book-12-line-16",
        "text": "No!",
        "cn": "不！",
        "audio": "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3",
        "sourcePage": 15,
        "tag": "绘本原页 15"
      }
    ],
    "story": [
      {
        "text": "This is Fox in his yellow taxi.",
        "cn": "这是坐在黄色出租车里的狐狸。",
        "audio": "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3",
        "lines": [
          {
            "text": "This is Fox in his yellow taxi.",
            "cn": "这是坐在黄色出租车里的狐狸。",
            "audio": "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3"
          }
        ],
        "image": "./assets/library/story-12/p002.webp",
        "caption": "绘本原页 2",
        "sourcePage": 2,
        "original": true
      },
      {
        "text": "Ox wants a taxi.",
        "cn": "公牛想坐出租车。",
        "audio": "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3",
        "lines": [
          {
            "text": "Ox wants a taxi.",
            "cn": "公牛想坐出租车。",
            "audio": "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "lines": [
          {
            "text": "To the zoo, Fox!",
            "cn": "去动物园，狐狸！",
            "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "lines": [
          {
            "text": "Yes.",
            "cn": "好的。",
            "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "lines": [
          {
            "text": "Get in.",
            "cn": "上车吧。",
            "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3"
          }
        ],
        "image": "./assets/library/story-12/p005.webp",
        "caption": "绘本原页 5",
        "sourcePage": 5,
        "original": true
      },
      {
        "text": "Yak wants a taxi.",
        "cn": "牦牛想坐出租车。",
        "audio": "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3",
        "lines": [
          {
            "text": "Yak wants a taxi.",
            "cn": "牦牛想坐出租车。",
            "audio": "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "lines": [
          {
            "text": "To the zoo, Fox!",
            "cn": "去动物园，狐狸！",
            "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "lines": [
          {
            "text": "Yes.",
            "cn": "好的。",
            "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "lines": [
          {
            "text": "Get in.",
            "cn": "上车吧。",
            "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3"
          }
        ],
        "image": "./assets/library/story-12/p008.webp",
        "caption": "绘本原页 8",
        "sourcePage": 8,
        "original": true
      },
      {
        "text": "Zebra wants a taxi.",
        "cn": "斑马想坐出租车。",
        "audio": "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3",
        "lines": [
          {
            "text": "Zebra wants a taxi.",
            "cn": "斑马想坐出租车。",
            "audio": "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "To the zoo, Fox!",
        "cn": "去动物园，狐狸！",
        "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3",
        "lines": [
          {
            "text": "To the zoo, Fox!",
            "cn": "去动物园，狐狸！",
            "audio": "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Yes.",
        "cn": "好的。",
        "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3",
        "lines": [
          {
            "text": "Yes.",
            "cn": "好的。",
            "audio": "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Get in.",
        "cn": "上车吧。",
        "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3",
        "lines": [
          {
            "text": "Get in.",
            "cn": "上车吧。",
            "audio": "./assets/audio/generated/e9937f2edcfe2c360093.mp3"
          }
        ],
        "image": "./assets/library/story-12/p010.webp",
        "caption": "绘本原页 10",
        "sourcePage": 10,
        "original": true
      },
      {
        "text": "Ox, Yak and Zebra want a party.",
        "cn": "公牛、牦牛和斑马想开一个派对。",
        "audio": "./assets/audio/generated/365b19f5f59b8b10df0f.mp3",
        "lines": [
          {
            "text": "Ox, Yak and Zebra want a party.",
            "cn": "公牛、牦牛和斑马想开一个派对。",
            "audio": "./assets/audio/generated/365b19f5f59b8b10df0f.mp3"
          }
        ],
        "image": "./assets/library/story-12/p012.webp",
        "caption": "绘本原页 12",
        "sourcePage": 12,
        "original": true
      },
      {
        "text": "This is the zoo keeper.",
        "cn": "这是动物园管理员。",
        "audio": "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3",
        "lines": [
          {
            "text": "This is the zoo keeper.",
            "cn": "这是动物园管理员。",
            "audio": "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3"
          }
        ],
        "image": "./assets/library/story-12/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "He wants more animals!",
        "cn": "他想要更多动物！",
        "audio": "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3",
        "lines": [
          {
            "text": "He wants more animals!",
            "cn": "他想要更多动物！",
            "audio": "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3"
          }
        ],
        "image": "./assets/library/story-12/p013.webp",
        "caption": "绘本原页 13",
        "sourcePage": 13,
        "original": true
      },
      {
        "text": "Ox, Yak and Zebra run and run.",
        "cn": "公牛、牦牛和斑马跑呀跑。",
        "audio": "./assets/audio/generated/d2b4b4146f60dac10b31.mp3",
        "lines": [
          {
            "text": "Ox, Yak and Zebra run and run.",
            "cn": "公牛、牦牛和斑马跑呀跑。",
            "audio": "./assets/audio/generated/d2b4b4146f60dac10b31.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Oops!",
        "cn": "哎呀！",
        "audio": "./assets/audio/generated/8344947a402c722af9d8.mp3",
        "lines": [
          {
            "text": "Oops!",
            "cn": "哎呀！",
            "audio": "./assets/audio/generated/8344947a402c722af9d8.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Run!",
        "cn": "快跑！",
        "audio": "./assets/audio/generated/cd6317b826072e616fa0.mp3",
        "lines": [
          {
            "text": "Run!",
            "cn": "快跑！",
            "audio": "./assets/audio/generated/cd6317b826072e616fa0.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "To the taxi!",
        "cn": "去出租车那里！",
        "audio": "./assets/audio/generated/fafd59243a2026494340.mp3",
        "lines": [
          {
            "text": "To the taxi!",
            "cn": "去出租车那里！",
            "audio": "./assets/audio/generated/fafd59243a2026494340.mp3"
          }
        ],
        "image": "./assets/library/story-12/p014.webp",
        "caption": "绘本原页 14",
        "sourcePage": 14,
        "original": true
      },
      {
        "text": "Ox, Yak and Zebra want a taxi.",
        "cn": "公牛、牦牛和斑马想坐出租车。",
        "audio": "./assets/audio/generated/af7fdd2101121561b1b2.mp3",
        "lines": [
          {
            "text": "Ox, Yak and Zebra want a taxi.",
            "cn": "公牛、牦牛和斑马想坐出租车。",
            "audio": "./assets/audio/generated/af7fdd2101121561b1b2.mp3"
          }
        ],
        "image": "./assets/library/story-12/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      },
      {
        "text": "No!",
        "cn": "不！",
        "audio": "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3",
        "lines": [
          {
            "text": "No!",
            "cn": "不！",
            "audio": "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3"
          }
        ],
        "image": "./assets/library/story-12/p015.webp",
        "caption": "绘本原页 15",
        "sourcePage": 15,
        "original": true
      }
    ],
    "sources": [
      {
        "kind": "story",
        "number": 12,
        "fileName": "绘本\\012.pdf",
        "totalPages": 17,
        "pages": [
          {
            "page": 1,
            "image": "./assets/library/story-12/p001.webp"
          },
          {
            "page": 2,
            "image": "./assets/library/story-12/p002.webp"
          },
          {
            "page": 3,
            "image": "./assets/library/story-12/p003.webp"
          },
          {
            "page": 4,
            "image": "./assets/library/story-12/p004.webp"
          },
          {
            "page": 5,
            "image": "./assets/library/story-12/p005.webp"
          },
          {
            "page": 6,
            "image": "./assets/library/story-12/p006.webp"
          },
          {
            "page": 7,
            "image": "./assets/library/story-12/p007.webp"
          },
          {
            "page": 8,
            "image": "./assets/library/story-12/p008.webp"
          },
          {
            "page": 9,
            "image": "./assets/library/story-12/p009.webp"
          },
          {
            "page": 10,
            "image": "./assets/library/story-12/p010.webp"
          },
          {
            "page": 11,
            "image": "./assets/library/story-12/p011.webp"
          },
          {
            "page": 12,
            "image": "./assets/library/story-12/p012.webp"
          },
          {
            "page": 13,
            "image": "./assets/library/story-12/p013.webp"
          },
          {
            "page": 14,
            "image": "./assets/library/story-12/p014.webp"
          },
          {
            "page": 15,
            "image": "./assets/library/story-12/p015.webp"
          },
          {
            "page": 16,
            "image": "./assets/library/story-12/p016.webp"
          },
          {
            "page": 17,
            "image": "./assets/library/story-12/p017.webp"
          }
        ],
        "title": "Ox, Yak and Zebra · 绘本原页"
      }
    ],
    "video": null,
    "checklist": [
      {
        "id": "words",
        "text": "跟读绘本关键词"
      },
      {
        "id": "sentences",
        "text": "逐句跟读并对照中文"
      },
      {
        "id": "story",
        "text": "读完绘本，尝试复述"
      }
    ]
  }
];
window.XIAOYUAN_AUDIO_TEXT = {
  "./assets/audio/generated/5eb67f9f8409b9c3f739.mp3": "brown",
  "./assets/audio/generated/3c482346f375027677fa.mp3": "back",
  "./assets/audio/generated/d3c40bd0d96f768a1429.mp3": "Adam is picking apples.",
  "./assets/audio/generated/3342d221879af442f8cb.mp3": "Big Brown Bear is picking apples.",
  "./assets/audio/generated/8799d91b71f2652e84df.mp3": "Big Brown Bear sees Adam.",
  "./assets/audio/generated/83bee6a68630437085ff.mp3": "Adam runs and runs.",
  "./assets/audio/generated/3a0aafc2481b3f3bacfc.mp3": "Ah! A bear!",
  "./assets/audio/generated/5ad8ae69c91f1d1cc883.mp3": "Adam runs and runs. Ah! A bear!",
  "./assets/audio/generated/91c2fcf35891ae71eab1.mp3": "Big Brown Bear runs and runs.",
  "./assets/audio/generated/fe469f190f7585d25138.mp3": "Adam is back home.",
  "./assets/audio/generated/b4d31a60ad7863414ab5.mp3": "So is Big Brown Bear!",
  "./assets/audio/generated/a3db31929b44719b9daf.mp3": "So is Big Brown Bear! My bag of apples!",
  "./assets/audio/generated/35c67224142f86b3b30c.mp3": "Ted",
  "./assets/audio/generated/599079bc012661eb0be6.mp3": "Dot",
  "./assets/audio/generated/af07ff91ab7ce2a7d1f9.mp3": "mud",
  "./assets/audio/generated/d8b1858e24ae617677d5.mp3": "crayon",
  "./assets/audio/generated/378bfce5cda2599a6cda.mp3": "cut",
  "./assets/audio/generated/b4372fc527a3fbb24934.mp3": "This is Ted's cat, Dot.",
  "./assets/audio/generated/565cbab3fcf0266e2423.mp3": "Dot is in the car.",
  "./assets/audio/generated/274a6a2ec8bf3cd8d472.mp3": "Dot is in the mud.",
  "./assets/audio/generated/4d394534d541a9348ed7.mp3": "Where is Dot now?",
  "./assets/audio/generated/123d19eda0e219d31e64.mp3": "Ted gets cards and crayons.",
  "./assets/audio/generated/3666cc0bd5aa9402c775.mp3": "He sits at his desk.",
  "./assets/audio/generated/027d924a079db7243417.mp3": "He draws.",
  "./assets/audio/generated/572caf03f0cad635fb7f.mp3": "He colours and cuts.",
  "./assets/audio/generated/dabfbdd3c85ed443387c.mp3": "He draws. He colours and cuts.",
  "./assets/audio/generated/04ca337bf00a06615d5e.mp3": "Dot is home now.",
  "./assets/audio/generated/3888b65b7278560e66aa.mp3": "Clever Ted!",
  "./assets/audio/generated/9d02da7a1fb26eb17c3d.mp3": "Dot is home now. Clever Ted!",
  "./assets/audio/generated/cd08c4c4316df20d9c30.mp3": "elephant",
  "./assets/audio/generated/34707c3f40dfa20c3902.mp3": "egg",
  "./assets/audio/generated/e29a7f31cac05abc97e1.mp3": "fan",
  "./assets/audio/generated/776cb326ab0cd5f0a974.mp3": "fox",
  "./assets/audio/generated/2f60f61a34244180b562.mp3": "elk",
  "./assets/audio/generated/22e4f6912a6980d6fd59.mp3": "foot",
  "./assets/audio/generated/756e209387035ff82a50.mp3": "Ella the elephant finds an egg.",
  "./assets/audio/generated/601d52aa953de7091cff.mp3": "\"Is it coming out?\" say the friends.",
  "./assets/audio/generated/cccf820066ccdc2a8711.mp3": "Brrrr!",
  "./assets/audio/generated/67f7bc3981d2cb7d93f7.mp3": "\"Is it coming out?\" say the friends. Brrrr!",
  "./assets/audio/generated/3e92bdfe3a00f8ae6b3f.mp3": "\"I can fan it with my ears,\" says Finn the fox.",
  "./assets/audio/generated/7186578fe1d9e4370df0.mp3": "\"No!\" says Ed the elk.",
  "./assets/audio/generated/dc0fe3ec31059921b92e.mp3": "\"I can pat it with my foot,\" he says.",
  "./assets/audio/generated/58d20a54efb02fb29f56.mp3": "\"No!\" says Ella the elephant.",
  "./assets/audio/generated/26a157ae4141d9ea4391.mp3": "\"I can sit on it,\" she says.",
  "./assets/audio/generated/587165d5115ca5b7d46f.mp3": "\"No!\" says the egg.",
  "./assets/audio/generated/7c95b1b284881b54153a.mp3": "Ned",
  "./assets/audio/generated/f2d758f9e379babc91f1.mp3": "mum",
  "./assets/audio/generated/9b2d5b4678781e53038e.mp3": "nan",
  "./assets/audio/generated/75ef2e329bdb50d26a4c.mp3": "nest",
  "./assets/audio/generated/8825e76530f87ff5c737.mp3": "milk",
  "./assets/audio/generated/48b676e2b107da679512.mp3": "man",
  "./assets/audio/generated/a19ee2577879b76a5b98.mp3": "mug",
  "./assets/audio/generated/00e37ffae0562ab6818d.mp3": "pan",
  "./assets/audio/generated/82ebadafdeec2df737e5.mp3": "nap",
  "./assets/audio/generated/453389e9e139f0ee99cf.mp3": "Ned is at a farm.",
  "./assets/audio/generated/ba5400d404b2e2c1e645.mp3": "He gets eggs from a nest.",
  "./assets/audio/generated/578175e86f89aa607cf2.mp3": "Mum gets milk from a cow.",
  "./assets/audio/generated/565f923aa7a886d9ff5e.mp3": "Moo!",
  "./assets/audio/generated/338345535a58a71d5d51.mp3": "Mum gets milk from a cow. Moo!",
  "./assets/audio/generated/8d85f53bdd86a174e510.mp3": "Nan gets a bag from the man.",
  "./assets/audio/generated/abca8fd657d215c198b5.mp3": "Now Ned is at home.",
  "./assets/audio/generated/0981f5787545f5ec6e5b.mp3": "He gets a mug.",
  "./assets/audio/generated/b13281935e20e461d3dc.mp3": "Mum gets a pan.",
  "./assets/audio/generated/9d6fc6ad73bf20028fb0.mp3": "Nan gets pancakes and a nap!",
  "./assets/audio/generated/b753825e9d9ca0bb0c0f.mp3": "Yum!",
  "./assets/audio/generated/1ff97a8c383f9c5ec349.mp3": "Nan gets pancakes and a nap! Yum!",
  "./assets/audio/generated/8ae01e3d4d5a82236892.mp3": "Ollie",
  "./assets/audio/generated/6588ef4db6a357d6d9ca.mp3": "puppy",
  "./assets/audio/generated/68d753f055b1a15b3949.mp3": "pat",
  "./assets/audio/generated/8d9001d32c6a703d9592.mp3": "shop",
  "./assets/audio/generated/4d3971de62245c94cd3d.mp3": "park",
  "./assets/audio/generated/529c3146271d02cb3aca.mp3": "Penny",
  "./assets/audio/generated/6dba34c6b394b15f5c79.mp3": "Ollie wants a friend.",
  "./assets/audio/generated/3d9e2200b5d0045dd1ef.mp3": "He finds a puppy.",
  "./assets/audio/generated/8ff2ee58dc4b5501fe7f.mp3": "He pats it.",
  "./assets/audio/generated/036ea22093f262e1b078.mp3": "He finds a puppy. He pats it.",
  "./assets/audio/generated/cfe02bcd6ccf47df416e.mp3": "Ollie plays in the park.",
  "./assets/audio/generated/dbbc80741ce62a824040.mp3": "Puppy plays in the park.",
  "./assets/audio/generated/4907ee25d9f6991a18c2.mp3": "Come on!",
  "./assets/audio/generated/71e199e2f833aeb3b951.mp3": "Puppy plays in the park. Come on!",
  "./assets/audio/generated/faea1f30bb88216eca7d.mp3": "Ollie eats pizza and an orange.",
  "./assets/audio/generated/19476231c33c572ef410.mp3": "Puppy eats pizza and an orange.",
  "./assets/audio/generated/72b2d10d165e3c70a2f3.mp3": "Penny finds her puppy.",
  "./assets/audio/generated/d363baf0b9106274ee9f.mp3": "She pats it.",
  "./assets/audio/generated/f04f90ac55f009bb6325.mp3": "Good dog!",
  "./assets/audio/generated/e0781297ab7827575e8c.mp3": "Penny finds her puppy. She pats it. Good dog!",
  "./assets/audio/generated/ce477972bab0014bb57e.mp3": "Ollie finds a friend.",
  "./assets/audio/generated/57e4df689a1d76ed4cab.mp3": "Jenny",
  "./assets/audio/generated/4a70fe9aa6436e02c2de.mp3": "zip",
  "./assets/audio/generated/a5a2729ffa0eeacc1532.mp3": "spin",
  "./assets/audio/generated/c30b983b5860e0481288.mp3": "jog",
  "./assets/audio/generated/1c1480e67eee52c17293.mp3": "slip",
  "./assets/audio/generated/6bdaf554e42029bd0dbe.mp3": "jump",
  "./assets/audio/generated/6c126e81fa8dc29d6413.mp3": "sip",
  "./assets/audio/generated/a5ad895656074bb12930.mp3": "juice",
  "./assets/audio/generated/584178e5e3517ddcebc6.mp3": "sit",
  "./assets/audio/generated/600526d1106ea5f856ba.mp3": "Jenny sees a girl.",
  "./assets/audio/generated/ba2151278d936d95e58b.mp3": "The girl spins.",
  "./assets/audio/generated/75bc364d864bd3684bbc.mp3": "I can do that!",
  "./assets/audio/generated/acfb0e120cdc8e7856c7.mp3": "Jenny sees a girl. The girl spins. I can do that!",
  "./assets/audio/generated/0d27dc922df50bd3f85d.mp3": "Jenny jogs up to the ice.",
  "./assets/audio/generated/8f8a838a137838dfdc89.mp3": "Jenny spins.",
  "./assets/audio/generated/73d48aa69ad99c013018.mp3": "She trips.",
  "./assets/audio/generated/0e9a5a660aeb429010fa.mp3": "She slips.",
  "./assets/audio/generated/f1afc600342a93173a55.mp3": "Jenny spins. She trips. She slips.",
  "./assets/audio/generated/a6104584ca183b48884e.mp3": "Jenny sees the girl.",
  "./assets/audio/generated/e4f97f13575114328f77.mp3": "The girl jumps.",
  "./assets/audio/generated/77e9eb6ee2377de52316.mp3": "Jenny sees the girl. The girl jumps. I can do that!",
  "./assets/audio/generated/e4b92a2c9380e29e6e7c.mp3": "Jenny jumps.",
  "./assets/audio/generated/2dab989eda10fad83a10.mp3": "Jenny jumps. She trips. She slips.",
  "./assets/audio/generated/da94d343d0dfaf966b90.mp3": "She gets off the ice.",
  "./assets/audio/generated/eefb765deda8e1d1c61c.mp3": "Jenny sees the girl. She gets off the ice.",
  "./assets/audio/generated/a0a62e4ec84202be122d.mp3": "The girl sips some juice.",
  "./assets/audio/generated/7d8a96f4fe50dcaabd0d.mp3": "The girl sips some juice. I can do that!",
  "./assets/audio/generated/43dc1f65b704b190b9ec.mp3": "They sit.",
  "./assets/audio/generated/343172dc2ef266bdcf5b.mp3": "They sip.",
  "./assets/audio/generated/28891acf8b6f1f0560d4.mp3": "They sit. They sip.",
  "./assets/audio/generated/0ffb02665035bfe509b1.mp3": "Lola",
  "./assets/audio/generated/f80105efab6d863fd8fc.mp3": "letter",
  "./assets/audio/generated/e81dfe69841ad2f7b579.mp3": "king",
  "./assets/audio/generated/d25949ef9e762fe7cfb9.mp3": "Kim",
  "./assets/audio/generated/0b27c158feb36ab18a10.mp3": "kind",
  "./assets/audio/generated/49547872a664dd8e6328.mp3": "lady",
  "./assets/audio/generated/cc633a5d34e24d31043a.mp3": "Lola sends a letter to the king.",
  "./assets/audio/generated/52982e8832bcc7e15aa6.mp3": "\"Dear King Kim, I have lost my kitten,\" says Lola.",
  "./assets/audio/generated/42be2f369c195a7d3622.mp3": "King Kim is kind.",
  "./assets/audio/generated/96de0f5eee739d58b3dc.mp3": "He sends his men.",
  "./assets/audio/generated/81d49980c66534d85690.mp3": "King Kim is kind. He sends his men.",
  "./assets/audio/generated/fcad8aba7c3ddb8945ab.mp3": "They look for the kitten.",
  "./assets/audio/generated/4eff4493c1e88638ca3b.mp3": "King Kim sends his ladies.",
  "./assets/audio/generated/553b0fa135f806fb7ce7.mp3": "King Kim sends his mice.",
  "./assets/audio/generated/7ee1293793a56cf79d5a.mp3": "The kitten looks for the mice.",
  "./assets/audio/generated/bfcd0cff33a308ceaab6.mp3": "My kitten!",
  "./assets/audio/generated/4f6d10fcc0d5df8f8c9d.mp3": "The kitten looks for the mice. My kitten!",
  "./assets/audio/generated/fd6045b6fc1949fcc41c.mp3": "Holly",
  "./assets/audio/generated/770e607624d689265ca6.mp3": "good",
  "./assets/audio/generated/106a5842fc5fce6f6631.mp3": "help",
  "./assets/audio/generated/2998b3232d29e8dc5a78.mp3": "get",
  "./assets/audio/generated/4e30ea25cda1c18cfc42.mp3": "hay",
  "./assets/audio/generated/d44a08de3981889dae0f.mp3": "hen",
  "./assets/audio/generated/5480f08f35968440ebe8.mp3": "goat",
  "./assets/audio/generated/18e1dd392168f601d0e5.mp3": "hat",
  "./assets/audio/generated/431ba1c6936744f65928.mp3": "girl",
  "./assets/audio/generated/7dfba09e2e57c5a6d60e.mp3": "Holly is a good dog.",
  "./assets/audio/generated/7007bfceec128a1127cd.mp3": "She helps Grandpa.",
  "./assets/audio/generated/56f9e35aaeb6e9ffa403.mp3": "Holly is a good dog. She helps Grandpa.",
  "./assets/audio/generated/236ae3ba646c187f6319.mp3": "They go to see the horse.",
  "./assets/audio/generated/300d1938f1b3c5b824ce.mp3": "Holly gets the hay.",
  "./assets/audio/generated/de7e675b3c31c00f253d.mp3": "They go to see the hens.",
  "./assets/audio/generated/0a0b4d4f7a95473e5783.mp3": "Holly gets the eggs.",
  "./assets/audio/generated/d53755f2cb6bf75aa1dd.mp3": "They go to see the goats.",
  "./assets/audio/generated/a038a69f6c7955da9a89.mp3": "A goat gets Grandpa's hat.",
  "./assets/audio/generated/b57c370a0fcc704562e1.mp3": "Hey!",
  "./assets/audio/generated/eda181bab51441bf0024.mp3": "A goat gets Grandpa's hat. Hey!",
  "./assets/audio/generated/09705fef7ed0f161658d.mp3": "But Holly gets it back!",
  "./assets/audio/generated/d49512c497bb06b921be.mp3": "Good girl, Holly!",
  "./assets/audio/generated/afc364577f3398740f4a.mp3": "But Holly gets it back! Good girl, Holly!",
  "./assets/audio/generated/008f0747f4e27c8462ba.mp3": "quiet",
  "./assets/audio/generated/a9c3c1f7674502331a5a.mp3": "queen",
  "./assets/audio/generated/2e09d5210db8417757b0.mp3": "rest",
  "./assets/audio/generated/b8b2eacffb5d4d4065e7.mp3": "quilt",
  "./assets/audio/generated/618d663af0f1ec88a5a1.mp3": "rose",
  "./assets/audio/generated/936e62942fda42b2f84b.mp3": "This is the royal castle.",
  "./assets/audio/generated/303c15dc6cb0452f01e9.mp3": "It is very quiet.",
  "./assets/audio/generated/b401a56f3251feaf3ae1.mp3": "Ssh! Be quiet!",
  "./assets/audio/generated/6bd7c7dc73434599ded1.mp3": "It is very quiet. Ssh! Be quiet!",
  "./assets/audio/generated/05e5db73fa4f7a79af0e.mp3": "The queen is resting.",
  "./assets/audio/generated/ad36a0d1417254fa38e1.mp3": "The maid brings a quilt.",
  "./assets/audio/generated/f28b60f1bef138eb0c33.mp3": "The king brings red roses.",
  "./assets/audio/generated/724416ec9e8c7b2ba56b.mp3": "The doctor brings his bag.",
  "./assets/audio/generated/0fd0670aa156de47e271.mp3": "It is not quiet now!",
  "./assets/audio/generated/ab973c4fc49205187036.mp3": "Whizz!",
  "./assets/audio/generated/94a43b1e8a57a4e94d70.mp3": "Clank!",
  "./assets/audio/generated/df26fb7e862f45317e0e.mp3": "Woo! Woo!",
  "./assets/audio/generated/802727f7ff9306de1e0f.mp3": "It is a boy!",
  "./assets/audio/generated/1cfaff5db4026a322449.mp3": "It is not quiet now! Whizz! Clank! Woo! Woo! It is a boy!",
  "./assets/audio/generated/9aeaed03951337102f5e.mp3": "Tess",
  "./assets/audio/generated/6856daebb0115b3b8c74.mp3": "swan",
  "./assets/audio/generated/27756f050e14a1cb1c1e.mp3": "sun",
  "./assets/audio/generated/44778d82365e4af681c4.mp3": "six",
  "./assets/audio/generated/14cf0fbca484cf6cae8e.mp3": "tub",
  "./assets/audio/generated/2a9810cb71316c9a03e5.mp3": "tent",
  "./assets/audio/generated/ab547757da37eb600011.mp3": "tin",
  "./assets/audio/generated/e6bbc6867045359448c8.mp3": "tug",
  "./assets/audio/generated/ef9f2b215cce72443d1e.mp3": "Tess and Dad live on a boat.",
  "./assets/audio/generated/2bb24a6ac8f8f1c34d0d.mp3": "The sun goes down.",
  "./assets/audio/generated/9bfc5eaa48d1de3ce29c.mp3": "Tess sits with Dad.",
  "./assets/audio/generated/c6414e1f2f1c3c8b063c.mp3": "Seven swans!",
  "./assets/audio/generated/9dfcf2321ab1c447dca1.mp3": "So sweet!",
  "./assets/audio/generated/551fb67177de7c95555a.mp3": "The sun goes down. Tess sits with Dad. Seven swans! So sweet!",
  "./assets/audio/generated/f2e2ad3507b6ab522aba.mp3": "The sun comes up.",
  "./assets/audio/generated/c7a0ed0bd7875836676c.mp3": "It is a new day.",
  "./assets/audio/generated/593760cf64d252c9315c.mp3": "Six swans!",
  "./assets/audio/generated/241a3380b7970c555c98.mp3": "Oh no!",
  "./assets/audio/generated/b5647aeadbc0ccd8e994.mp3": "The sun comes up. It is a new day. Six swans! Oh no!",
  "./assets/audio/generated/93afa14e4637ac76009c.mp3": "Tess looks for the little swan.",
  "./assets/audio/generated/824bbc70913eeb9571cf.mp3": "Is it by the tub?",
  "./assets/audio/generated/38178a20b470cfd18299.mp3": "No.",
  "./assets/audio/generated/6dffd7318de1605fa565.mp3": "Tess looks for the little swan. Is it by the tub? No.",
  "./assets/audio/generated/9ee1e1d2a3add4a697d8.mp3": "Dad looks for the little swan.",
  "./assets/audio/generated/cdae6f07c983e0d70405.mp3": "Is it by the tent?",
  "./assets/audio/generated/8aff5108a050bcfab258.mp3": "Yes!",
  "./assets/audio/generated/d53b7be1cba58af70471.mp3": "Dad looks for the little swan. Is it by the tent? Yes!",
  "./assets/audio/generated/51773bb932508a6f7610.mp3": "Her foot is in a tin.",
  "./assets/audio/generated/2c6c5f9f81cff45bd669.mp3": "She's stuck!",
  "./assets/audio/generated/2c0dad33ff2582a2d661.mp3": "Her foot is in a tin. She's stuck! Oh no!",
  "./assets/audio/generated/33a801ab9f93d7565153.mp3": "Dad tugs and tugs.",
  "./assets/audio/generated/ee5621532d7278baa0dc.mp3": "Seven swans.",
  "./assets/audio/generated/9ddb68da5b1c733ed2dc.mp3": "The sun goes down. Tess sits with Dad. Seven swans. So sweet!",
  "./assets/audio/generated/3107ea0301a27894a212.mp3": "uncle",
  "./assets/audio/generated/d8f9af9f384c3cfef147.mp3": "Vic",
  "./assets/audio/generated/99f7855eb789dfecf9ea.mp3": "wood",
  "./assets/audio/generated/baf6a0b70ab07cf16c76.mp3": "wagon",
  "./assets/audio/generated/970b1897af0abab6127d.mp3": "van",
  "./assets/audio/generated/75a288c0d6898c5f7b05.mp3": "up",
  "./assets/audio/generated/00e13ed7af55b27622f1.mp3": "work",
  "./assets/audio/generated/6f464fd9a404ebbcc6b2.mp3": "Uncle Vic is in the woods.",
  "./assets/audio/generated/da136114a1a4bad9bada.mp3": "He finds a wagon.",
  "./assets/audio/generated/cbaea186eada815e95b9.mp3": "Uncle Vic gets his van.",
  "./assets/audio/generated/04412d8f615d1d0c1509.mp3": "He puts the wagon in it.",
  "./assets/audio/generated/a40431bae6a34643662b.mp3": "Up in the van!",
  "./assets/audio/generated/8849b9036183892d3acc.mp3": "He puts the wagon in it. Up in the van!",
  "./assets/audio/generated/3db49ba674190aba1547.mp3": "Uncle Vic works on the wagon.",
  "./assets/audio/generated/d9e86b183dc04f71b033.mp3": "Come and help.",
  "./assets/audio/generated/c930abe0a399d95c8617.mp3": "OK, Uncle.",
  "./assets/audio/generated/c478589a213e3874e620.mp3": "Uncle Vic works on the wagon. Come and help. OK, Uncle.",
  "./assets/audio/generated/7dcdfc9b624a1f9c203b.mp3": "We put the wheel back on.",
  "./assets/audio/generated/9f19b1e1e280546754f2.mp3": "Very good work!",
  "./assets/audio/generated/0e896d787ea16b3c360b.mp3": "We put the wheel back on. Very good work!",
  "./assets/audio/generated/8c3240c78e0a73d41d93.mp3": "We are in the woods.",
  "./assets/audio/generated/d5d9c6d0c6dce6af9100.mp3": "Uncle Vic finds a van!",
  "./assets/audio/generated/9203a830fd113b28407f.mp3": "Uncle!",
  "./assets/audio/generated/969ce326065ef6969f44.mp3": "Uncle Vic finds a van! Uncle!",
  "./assets/audio/generated/12796d3d5f4e132385f8.mp3": "taxi",
  "./assets/audio/generated/1dd14ffc3c3045741a5e.mp3": "ox",
  "./assets/audio/generated/24fe93c9e17cb80452e5.mp3": "zoo",
  "./assets/audio/generated/e378e72a75855c08d49b.mp3": "yak",
  "./assets/audio/generated/676cb75018edccf10fce.mp3": "zebra",
  "./assets/audio/generated/ef74fffd2c8cfce8611d.mp3": "This is Fox in his yellow taxi.",
  "./assets/audio/generated/1e4ef74c4f53a520ecaa.mp3": "Ox wants a taxi.",
  "./assets/audio/generated/7eb62d1c27125b09cb7b.mp3": "To the zoo, Fox!",
  "./assets/audio/generated/5f9a2b795615ba6a3d54.mp3": "Yes.",
  "./assets/audio/generated/e9937f2edcfe2c360093.mp3": "Get in.",
  "./assets/audio/generated/11a5850fcd16e1fbdb55.mp3": "Ox wants a taxi. To the zoo, Fox! Yes. Get in.",
  "./assets/audio/generated/46f70b9b2f5b21ee0128.mp3": "Yak wants a taxi.",
  "./assets/audio/generated/163edfc6abab5a46650e.mp3": "Yak wants a taxi. To the zoo, Fox! Yes. Get in.",
  "./assets/audio/generated/9b1b81b39e0927ef46e4.mp3": "Zebra wants a taxi.",
  "./assets/audio/generated/17107a856a44e07a59f9.mp3": "Zebra wants a taxi. To the zoo, Fox! Yes. Get in.",
  "./assets/audio/generated/365b19f5f59b8b10df0f.mp3": "Ox, Yak and Zebra want a party.",
  "./assets/audio/generated/ceac6d6ee5ddf4b7cd8b.mp3": "This is the zoo keeper.",
  "./assets/audio/generated/a9ee0db0cb7fd17276b8.mp3": "He wants more animals!",
  "./assets/audio/generated/a261dc06b92f66b98078.mp3": "This is the zoo keeper. He wants more animals!",
  "./assets/audio/generated/d2b4b4146f60dac10b31.mp3": "Ox, Yak and Zebra run and run.",
  "./assets/audio/generated/8344947a402c722af9d8.mp3": "Oops!",
  "./assets/audio/generated/cd6317b826072e616fa0.mp3": "Run!",
  "./assets/audio/generated/fafd59243a2026494340.mp3": "To the taxi!",
  "./assets/audio/generated/fdc18eca7d2bf30e79ad.mp3": "Ox, Yak and Zebra run and run. Oops! Run! To the taxi!",
  "./assets/audio/generated/af7fdd2101121561b1b2.mp3": "Ox, Yak and Zebra want a taxi.",
  "./assets/audio/generated/4dcb71f5bfeb57f690a9.mp3": "No!",
  "./assets/audio/generated/93a5b44f2a1f159898c4.mp3": "Ox, Yak and Zebra want a taxi. No!",
  "./assets/audio/generated/7a5179eecc0fe18760ba.mp3": "bird",
  "./assets/audio/generated/c5052532c2206140dfdc.mp3": "bed",
  "./assets/audio/generated/e80f71a8d731192771d8.mp3": "beg",
  "./assets/audio/generated/20e796c128096d229ba8.mp3": "fed",
  "./assets/audio/generated/a9f51566bd6705f7ea6a.mp3": "E",
  "./assets/audio/generated/d069d36636d217f91d7e.mp3": "E. egg. egg.",
  "./assets/audio/generated/f67ab10ad4e4c53121b6.mp3": "F",
  "./assets/audio/generated/df788f66f5b206e8ff6c.mp3": "F. fox. fox.",
  "./assets/audio/generated/333e0a1e27815d0ceee5.mp3": "G",
  "./assets/audio/generated/84358da443ac13ce1b85.mp3": "G. goat. goat.",
  "./assets/audio/generated/44bd7ae60f478fae1061.mp3": "H",
  "./assets/audio/generated/f215f4224569d5a52175.mp3": "H. hat. hat.",
  "./assets/audio/generated/deb2968cb22bdd76069d.mp3": "It's an elephant.",
  "./assets/audio/generated/1b0efc81d38594b6e858.mp3": "It's a bird.",
  "./assets/audio/generated/01c8728f571a2523fef5.mp3": "It's a dog.",
  "./assets/audio/generated/dee35e3af2252f7db0b8.mp3": "It's a duck.",
  "./assets/audio/generated/64814a3cefde95feb00e.mp3": "It's a cat.",
  "./assets/audio/generated/f4debdb7ab7dd958e95c.mp3": "fly",
  "./assets/audio/generated/acba25512100f80b56fc.mp3": "run",
  "./assets/audio/generated/0db10f2c2f332cd27cf1.mp3": "kick",
  "./assets/audio/generated/d493f8869139bac710b9.mp3": "swim",
  "./assets/audio/generated/5c77d7fd8f51ed0c2a91.mp3": "kid",
  "./assets/audio/generated/2a21fe6d592a19b7de89.mp3": "big",
  "./assets/audio/generated/97a43d3b29cae29594c8.mp3": "fib",
  "./assets/audio/generated/87102ab9bf41d9bc78cc.mp3": "hid",
  "./assets/audio/generated/8c39c63488260c318aea.mp3": "fig",
  "./assets/audio/generated/41cb252f877799c7cf8e.mp3": "jig",
  "./assets/audio/generated/a83dd0ccbffe39d071cc.mp3": "I",
  "./assets/audio/generated/582967534d0f909d196b.mp3": "in",
  "./assets/audio/generated/2fe1ca549e1a57233ac4.mp3": "I. in. in.",
  "./assets/audio/generated/6da43b944e494e885e69.mp3": "J",
  "./assets/audio/generated/e116c7dabe9d99d29c95.mp3": "J. juice. juice.",
  "./assets/audio/generated/86be9a55762d316a3026.mp3": "K",
  "./assets/audio/generated/58972659401cbee9ac0c.mp3": "kitten",
  "./assets/audio/generated/ae6ee4bec6f846d76779.mp3": "K. kitten. kitten.",
  "./assets/audio/generated/2907aea4877827afcdce.mp3": "I can jump.",
  "./assets/audio/generated/0705632a274848fb0358.mp3": "I can fly.",
  "./assets/audio/generated/d650b086f7189a11f9f9.mp3": "I can run.",
  "./assets/audio/generated/4ec308de526efd58855f.mp3": "I can kick.",
  "./assets/audio/generated/4dfec7b6fe858196c65d.mp3": "I can swim.",
  "./assets/audio/generated/6342d0648a74645722ea.mp3": "sing",
  "./assets/audio/generated/2c371c2ada73a02e26e1.mp3": "dance",
  "./assets/audio/generated/8cceaf5c89e63591aea2.mp3": "clap",
  "./assets/audio/generated/9f584196e7fe6de85d38.mp3": "can",
  "./assets/audio/generated/c7c8fc91abb8ed76c29a.mp3": "leg",
  "./assets/audio/generated/021f8ffac9f9a70fd346.mp3": "led",
  "./assets/audio/generated/5a7cf4ac138054a82f60.mp3": "him",
  "./assets/audio/generated/90ac16783fbc54c3689c.mp3": "mid",
  "./assets/audio/generated/72dfcfb0c470ac255cde.mp3": "L",
  "./assets/audio/generated/3c01eba119e00d79c82b.mp3": "look",
  "./assets/audio/generated/45e474b9abd15efdb2d8.mp3": "L. look. look.",
  "./assets/audio/generated/08f271887ce94707da82.mp3": "M",
  "./assets/audio/generated/f7ae94b24b7b1da297a6.mp3": "M. mum. mum.",
  "./assets/audio/generated/8ce86a6ae65d3692e730.mp3": "N",
  "./assets/audio/generated/a08a0fcbdeafd3c1b3a4.mp3": "net",
  "./assets/audio/generated/2999c33a7dfd8b4f048e.mp3": "N. net. net.",
  "./assets/audio/generated/dfc70bd3da4186558e20.mp3": "I can sing.",
  "./assets/audio/generated/09f897e16b02da6340d8.mp3": "I can dance.",
  "./assets/audio/generated/d5effad93aed12c2ff64.mp3": "I can clap.",
  "./assets/audio/generated/5bf346562feacd7169d3.mp3": "We can sing.",
  "./assets/audio/generated/40342fc78425568b5a3d.mp3": "We can dance.",
  "./assets/audio/generated/8e7163e3c975c028267b.mp3": "We can clap.",
  "./assets/audio/generated/1980d3927f07fec9c8d7.mp3": "sister",
  "./assets/audio/generated/425c89ed5bb78a7623fa.mp3": "pod",
  "./assets/audio/generated/40685fd53d8eb3b1e921.mp3": "mop",
  "./assets/audio/generated/b04216546057e8659fec.mp3": "fog",
  "./assets/audio/generated/2cc5249042fb4d72a9f9.mp3": "quid",
  "./assets/audio/generated/f0b8c9d84dd2b877e0b9.mp3": "pig",
  "./assets/audio/generated/64f46a7526a186d23465.mp3": "pin",
  "./assets/audio/generated/c4694f2e93d5c4e7d51f.mp3": "O",
  "./assets/audio/generated/1b4c9133da73a7113224.mp3": "orange",
  "./assets/audio/generated/13e1ef01cda842b9472c.mp3": "O. orange. orange.",
  "./assets/audio/generated/5c62e091b8c0565f1baf.mp3": "P",
  "./assets/audio/generated/efba5f714584ed59ccfc.mp3": "P. pig. pig.",
  "./assets/audio/generated/4ae81572f06e1b88fd5c.mp3": "Q",
  "./assets/audio/generated/5c7ac365865271eb7d86.mp3": "Q. queen. queen.",
  "./assets/audio/generated/1eb4d6a000efefe9aadb.mp3": "grandpa",
  "./assets/audio/generated/ba8d3e6a2d8b5ed67ba2.mp3": "grandma",
  "./assets/audio/generated/b39e647572080f09c40b.mp3": "rib",
  "./assets/audio/generated/b1f51a511f1da0cd348b.mp3": "red",
  "./assets/audio/generated/45c9a6614fccd4f9592d.mp3": "sad",
  "./assets/audio/generated/454bedc703c397ac8232.mp3": "sob",
  "./assets/audio/generated/28720365c5e7476a011e.mp3": "top",
  "./assets/audio/generated/e4432baa90819aaef51d.mp3": "ten",
  "./assets/audio/generated/7ec879c8c860699e2314.mp3": "rot",
  "./assets/audio/generated/8c2574892063f995fdf7.mp3": "R",
  "./assets/audio/generated/76c43b3dab5d733e9814.mp3": "R. rose. rose.",
  "./assets/audio/generated/8de0b3c47f112c59745f.mp3": "S",
  "./assets/audio/generated/0b98a95803f343857b66.mp3": "S. sun. sun.",
  "./assets/audio/generated/e632b7095b0bf32c260f.mp3": "T",
  "./assets/audio/generated/4b8097b82f2af01fcf39.mp3": "T. tin. tin.",
  "./assets/audio/generated/922aa7faafc264124d10.mp3": "He is my grandpa.",
  "./assets/audio/generated/d621df6778d5be3fa6fc.mp3": "She is my grandma.",
  "./assets/audio/generated/1262d9f424857dcd4fd2.mp3": "He is my dad.",
  "./assets/audio/generated/062d12ff0ff5b941cae2.mp3": "She is my mum.",
  "./assets/audio/generated/92719fe0cf8cd51592af.mp3": "book",
  "./assets/audio/generated/e21a6b0cb193057e06ac.mp3": "pen",
  "./assets/audio/generated/5972814068a183e232d6.mp3": "ruler",
  "./assets/audio/generated/cdc29937887188ad3702.mp3": "but",
  "./assets/audio/generated/823a3180dad3c9c3c4de.mp3": "win",
  "./assets/audio/generated/2249476332138d1ed3ea.mp3": "wig",
  "./assets/audio/generated/c6171781d65f3ccce113.mp3": "cup",
  "./assets/audio/generated/5f9276129b845b990535.mp3": "vet",
  "./assets/audio/generated/a25513c7e0f6eaa80a33.mp3": "U",
  "./assets/audio/generated/83c42601006ae5580fd2.mp3": "U. uncle. uncle.",
  "./assets/audio/generated/de5a6f78116eca62d7fc.mp3": "V",
  "./assets/audio/generated/36c1c00651b78c936b17.mp3": "V. van. van.",
  "./assets/audio/generated/fcb5f40df9be6bae66c1.mp3": "W",
  "./assets/audio/generated/686cf8c3a57e23352ca9.mp3": "W. wood. wood.",
  "./assets/audio/generated/13809668fb436386706f.mp3": "pencil",
  "./assets/audio/generated/3b74bc54b6c221270c0d.mp3": "pencil case",
  "./assets/audio/generated/26f8567f2569182294c3.mp3": "box",
  "./assets/audio/generated/1c6e6c4c02e55178e858.mp3": "fix",
  "./assets/audio/generated/809c2fb94fff223e9647.mp3": "yum",
  "./assets/audio/generated/8a798890fe93817163b1.mp3": "yes",
  "./assets/audio/generated/cfd96dd92f7e0025b146.mp3": "yet",
  "./assets/audio/generated/77ebfe9993f116e089f2.mp3": "zig",
  "./assets/audio/generated/185dd474b587a95a6b68.mp3": "zog",
  "./assets/audio/generated/4b68ab3847feda7d6c62.mp3": "X",
  "./assets/audio/generated/3b023b09aad1bb4ba8c8.mp3": "X. ox. ox.",
  "./assets/audio/generated/18f5384d58bcb1bba0bc.mp3": "Y",
  "./assets/audio/generated/bdffca518a42db2493ca.mp3": "Y. yak. yak.",
  "./assets/audio/generated/bbeebd879e1dff691854.mp3": "Z",
  "./assets/audio/generated/47317e362ac134612f47.mp3": "Z. zoo. zoo.",
  "./assets/audio/generated/7e7b7a3474c5c3b19da4.mp3": "This is my pencil.",
  "./assets/audio/generated/192e9d1e64b5d3c8b73c.mp3": "This is my pencil case.",
  "./assets/audio/generated/f89ad04ea6795bb35f43.mp3": "This is my book.",
  "./assets/audio/generated/df63101fed847354bade.mp3": "This is my bag.",
  "./assets/audio/generated/c6cf43f650ed2cbd34aa.mp3": "This is my ruler.",
  "./assets/audio/generated/559aead08264d5795d39.mp3": "A",
  "./assets/audio/generated/df7e70e5021544f4834b.mp3": "B",
  "./assets/audio/generated/6b23c0d5f35d1b11f9b6.mp3": "C",
  "./assets/audio/generated/3f39d5c348e5b79d06e8.mp3": "D",
  "./assets/audio/generated/f27a8e6a5354633ba5cd.mp3": "Brrr!"
};

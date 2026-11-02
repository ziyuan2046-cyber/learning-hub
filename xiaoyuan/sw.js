const CACHE_NAME = 'xiaoyuan-lesson-01-v3';
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/img/icon-192.png",
  "./assets/img/icon-512.png",
  "./assets/img/apple-touch-icon.png",
  "./assets/img/hero/course-overview.jpg",
  "./assets/img/alphabet/letter-strokes.jpg",
  "./assets/img/alphabet/alphabet-writing.jpg",
  "./assets/img/words/lesson-summary.jpg",
  "./assets/img/words/phonics-panel.jpg",
  "./assets/img/words/vocabulary-panel.jpg",
  "./assets/img/words/checklist.jpg",
  "./assets/img/words/vocabulary-placeholder.jpg",
  "./assets/img/words/cat.jpg",
  "./assets/img/words/dog.jpg",
  "./assets/img/words/fish.jpg",
  "./assets/img/words/crab.jpg",
  "./assets/img/words/bat.jpg",
  "./assets/img/story/story-01.jpg",
  "./assets/img/story/story-02.jpg",
  "./assets/img/story/story-03.jpg",
  "./assets/img/story/story-04.jpg",
  "./assets/img/story/story-05.jpg",
  "./assets/img/story/story-06.jpg",
  "./assets/img/story/story-07.jpg",
  "./assets/img/story/story-08.jpg",
  "./assets/img/story/story-09.jpg",
  "./assets/audio/alphabet/a.mp3",
  "./assets/audio/words/apple.mp3",
  "./assets/audio/words/ax.mp3",
  "./assets/audio/words/alligator.mp3",
  "./assets/audio/alphabet/b.mp3",
  "./assets/audio/words/bear.mp3",
  "./assets/audio/words/bee.mp3",
  "./assets/audio/words/bread.mp3",
  "./assets/audio/words/bag.mp3",
  "./assets/audio/alphabet/c.mp3",
  "./assets/audio/words/cat.mp3",
  "./assets/audio/words/cow.mp3",
  "./assets/audio/words/car.mp3",
  "./assets/audio/words/card.mp3",
  "./assets/audio/alphabet/d.mp3",
  "./assets/audio/words/duck.mp3",
  "./assets/audio/words/dog.mp3",
  "./assets/audio/words/dad.mp3",
  "./assets/audio/words/desk.mp3",
  "./assets/audio/words/dig.mp3",
  "./assets/audio/words/fish.mp3",
  "./assets/audio/words/crab.mp3",
  "./assets/audio/words/bat.mp3",
  "./assets/audio/words/bad.mp3",
  "./assets/audio/words/cab.mp3",
  "./assets/audio/words/dab.mp3",
  "./assets/audio/words/adam.mp3",
  "./assets/audio/sentences/my-name-is-adam.mp3",
  "./assets/audio/sentences/i-am-from-china.mp3",
  "./assets/audio/sentences/i-am-seven-years-old.mp3",
  "./assets/audio/sentences/hello-bear.mp3",
  "./assets/audio/sentences/adam-sees-big-brown-bear.mp3",
  "./assets/audio/sentences/bad-bad-bear.mp3",
  "./assets/audio/sentences/what-will-happen.mp3",
  "./assets/audio/sentences/my-bag-of-apples.mp3",
  "./assets/audio/sentences/see-you-next-time.mp3",
  "./assets/audio/chants/chant-1.mp3",
  "./assets/audio/chants/chant-2.mp3",
  "./assets/audio/chants/chant-3.mp3",
  "./assets/audio/chants/chant-4.mp3",
  "./assets/audio/story/hint-01.mp3",
  "./assets/audio/story/hint-02.mp3",
  "./assets/audio/story/hint-03.mp3",
  "./assets/audio/story/hint-07.mp3",
  "./assets/audio/story/01-forest.mp3",
  "./assets/audio/story/02-meet.mp3",
  "./assets/audio/story/03-apple.mp3",
  "./assets/audio/story/04-share.mp3",
  "./assets/audio/story/05-friends.mp3",
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') { return; }
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) { return; }
  event.respondWith(caches.match(event.request).then((cached) => {
    if (cached) { return cached; }
    return fetch(event.request).then((response) => {
      if (!response.ok) { return response; }
      const copy = response.clone();
      caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      return response;
    }).catch(() => {
      if (event.request.mode === 'navigate') { return caches.match('./index.html'); }
      return Response.error();
    });
  }));
});

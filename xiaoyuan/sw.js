const CACHE_NAME = 'xiaoyuan-lesson-01-v5';
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/img/icon-192.png",
  "./assets/img/icon-512.png",
  "./assets/img/apple-touch-icon.png",
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

  // Keep audio outside the service worker so the browser can issue its own
  // Range request immediately instead of competing with precache downloads.
  if (event.request.destination === 'audio' || /\.(?:mp3|m4a|aac|ogg|wav)$/i.test(requestUrl.pathname)) {
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).then((response) => {
      if (response.ok) { caches.open(CACHE_NAME).then((cache) => cache.put('./index.html', response.clone())); }
      return response;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => {
    if (cached) { return cached; }
    return fetch(event.request).then((response) => {
      if (response.status === 200) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => Response.error());
  }));
});

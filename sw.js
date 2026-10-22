'use strict';
var CACHE = 'learning-hub-shell-v4';
var SHELL = ['./','./index.html','./styles.css?v=20261022e','./app.js?v=20261022e','./manifest.webmanifest','./assets/icons/favicon.svg'];
self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (cache) { return cache.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener('activate', function (event) {
  event.waitUntil(caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) { return key !== CACHE; }).map(function (key) { return caches.delete(key); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (event) {
  var request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) { return; }
  var path = new URL(request.url).pathname;
  if (/\/(chinese|english)\//.test(path)) { return; }
  event.respondWith(fetch(request).then(function (response) {
    if (response && response.status === 200) {
      var copy = response.clone();
      caches.open(CACHE).then(function (cache) { cache.put(request, copy); });
    }
    return response;
  }).catch(function () { return caches.match(request).then(function (cached) { return cached || caches.match('./index.html'); }); }));
});
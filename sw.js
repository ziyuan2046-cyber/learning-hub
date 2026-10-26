'use strict';
var CACHE='learning-hub-tech-v2';
var SHELL=['./','./index.html','./manifest.webmanifest'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(SHELL)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){
  var req=e.request;if(req.method!=='GET'||new URL(req.url).origin!==location.origin)return;
  var path=new URL(req.url).pathname;
  if(path==='/'||path.endsWith('/index.html')||path.endsWith('/manifest.webmanifest')){
    e.respondWith(fetch(req).then(function(r){if(r&&r.ok){var copy=r.clone();caches.open(CACHE).then(function(c){c.put(req,copy)})}return r}).catch(function(){return caches.match(req)}));return
  }
  e.respondWith(caches.match(req).then(function(hit){return hit||fetch(req)}));
});

const CACHE_NAME = "kmhss-lib-v20.6";
const urlsToCache = ["./index2.html","./manifest.json","./left.jpg","./right.jpg","./main.jpg"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(urlsToCache)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

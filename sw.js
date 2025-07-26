const cacheName = 'crizix-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.webp',
  '/A67FB92B-8D4C-4652-855D-C3AAA8A6F3B7.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

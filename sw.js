const CACHE_NAME = 'ghostmikz-v1';
const ASSETS = [
  './',
  './index.html',
  './assets/bg-terminal.jpg',
  './assets/favicon.png'
];

// Cache assets on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Serve from cache first, then network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
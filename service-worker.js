self.addEventListener('install', (event) => {
    self.skipWaiting(); // Принудительно активировать новый воркер
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});

// A simple service worker to allow installation
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Pull assets from the web normally
  event.respondWith(fetch(event.request));
});

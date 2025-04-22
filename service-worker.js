self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("qr-pwa").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "service-worker.js",
        "https://unpkg.com/html5-qrcode@2.3.7/html5-qrcode.min.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
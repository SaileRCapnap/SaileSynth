const CACHE_NAME = "mech-synth-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/main.js",
  "/style.css",
  "/manifest.webmanifest",
  "/favicon/favicon.ico",
  // Add other assets here (audio engine, icons, etc)
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => {
      return resp || fetch(event.request);
    })
  );
});
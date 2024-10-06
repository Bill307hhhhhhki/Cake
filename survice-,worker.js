const CACHE_NAME = "cake-game-cache";
const assets = [
  "/",
  "/index.html",
  "/styles.css",
  "/game.js",
  "/images/cake.png" // Add all necessary assets here
];

// Install event
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});

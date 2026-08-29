const CACHE_NAME = "soundboard-v1";

const FILES_TO_CACHE = [
"./",
"./index.html",
"./style.css",
"./script.js",
"./manifest.json",
"./hallo.mp3",
"./nee.mp3",
"./icon-192.png",
"./icon-512.png"
];

self.addEventListener("install", event => {
event.waitUntil(
caches.open(CACHE_NAME).then(cache => {
return cache.addAll(FILES_TO_CACHE);
})
);
});

self.addEventListener("fetch", event => {
event.respondWith(
caches.match(event.request).then(response => {
return response || fetch(event.request);
})
);
});

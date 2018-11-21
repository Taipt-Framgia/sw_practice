'use strict';

self.addEventListener('install', function(e) {
  console.log('installing');
  // e.waitUntil(
  //   caches.open('my-first-cache')
  //     .then(function(cache) {
  //       return cache.addAll(['/']);
  //     })
  // );
});
self.addEventListener('fetch', function(e) {
  // e.respondWith(
  //   caches.match(e.request)
  //     .then(function(res) {
  //       if (res) {
  //         return res;
  //       }

  //       return fetch(e.request);
  //     })
  // );
});
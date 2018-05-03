var cacheName = 'coderdojo-kisarazu-caches';
var filesToCache = [
	'/index.html',
	'/sw.js',
	'/css/master.css',
	'/css/highlight.css',
	'/css/kube.css',
	'/css/custom.css',
	'/css/font.css',
	'/css/kube.min.css',
	'/css/kube.demo.css',
	'/css/kube.legenda.css',
	'/font/Lato-BoldItalic.woff',
	'/font/Lato-Italic.woff',
	'/font/Lato-Black.woff',
	'/font/Lato-Bold.woff',
	'/font/Lato-Regular.woff',
	'/font/Lato-Semibold.woff',
	'/js/custom.js',
	'/js/google.js',
	'/js/jquery-2.1.4.min.js',
	'/js/kube.js',
	'/js/kube.min.js',
	'/js/tocbot.min.js',
	'/img/dojo/address.png',
	'/img/dojo/cdk.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

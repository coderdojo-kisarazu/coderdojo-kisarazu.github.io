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

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches
			.open(cacheName)
			.then(function(cache) {
				return cache.addAll(filesToCache);
			})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches
			.match(event.request)
			.then(function(response) {
				return response ? response : fetch(event.request);
			})
	);
});

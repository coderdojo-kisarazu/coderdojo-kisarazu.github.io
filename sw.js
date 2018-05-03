var cacheName = 'coderdojo-kisarazu-caches';
var filesToCache = [
	'/index.html'
	'/sw.js',
	'/categories/index.xml',
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
	'/js/tocbot.min.js',
	'/js/google.js',
	'/js/kube.js',
	'/js/custom.js',
	'/js/kube.legenda.js',
	'/js/master.js',
	'/js/kube.min.js',
	'/js/jquery-2.1.4.min.js',
	'/img/dojo/address.png',
	'/img/dojo/cdk.png',
	'/img/icon-minimalism.png',
	'/img/common/logx2.png',
	'/img/common/logo.png',
	'/img/common/icon-twitter.png',
	'/img/icon-typo.png',
	'/img/kube/icon-minimalism.png',
	'/img/kube/icon-baseline.png',
	'/img/kube/icon-typo.png',
	'/img/kube/typography/01.png',
	'/img/kube/typography/02.png',
	'/img/kube/brand.png'
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

let filesToCache = [
    // 'src/.',
    'dist/app/bundle.js',
    'dist/app/bundle.css',
    // 'src/images/*',
    // 'src/index.html'
];

let staticCacheName = 'assets-cache-1';

// Caching static assets during install event of service worker
self.addEventListener('install', (event) => {
    console.log('Service Worker Installing')
    event.waitUntil(
        caches.open(staticCacheName).then((cache) => {
            return cache.addAll(filesToCache);
        },(error)=>{
            console.log(error);
        })
    );
});

// Cache then Network strategy for fetching assets
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
// Activate the service worker

self.addEventListener('activate', function(event) {
    console.log('Activating new service worker...');

    var cacheWhitelist = [staticCacheName];
  
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
        return Promise.all(
          cacheNames.map(function(cacheName) {
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
    );
  });




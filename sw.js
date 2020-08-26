const VERSION = 'v2';

self.addEventListener('install', event => event.waitUntill(installServiceWorker));


async function installServiceWorker() {
    console.log("Service Worker installation started");
    const cache = await caches.open(getCacheName());
    return cache.addAll([
        '/',
        'index.html',
        'about.html',
        'index.html',
        'pastrides.html',
        'resources.html',
        'team.html',
        'blog.html',
        'css/bootstrap.css',
        'css/fontawesome-all.css',
        'css/magnific-popup.css',
        'css/styles.css',
        'css/swiper.css',
        'js/bgswitch.js',
        'js/bootstrap.min.js',
        'js/jquery.easing.min.js',
        'js/scripts.js',
        'js/swiper.min.js',
        'js/validator.min.js',
        'js/popper.min.js',
        'js/morphext.min.js',
        'js/jquery.min.js',
        'js/jquery/easing.min.js',
        'images/bg/2-1.jpg',
        'images/bg/prasher3.jpg',
        'images/bg/8-1.jpg',
        'images/bg/5-1.jpg',
        'images/bg/prashar.jpg',
        'images/bg/mtb4.jpg'
    ]);
}



self.addEventListener('activate', () => activateSW());

async function activateSW() {

    log('Service Worker activated');

    const cacheKeys = await caches.keys();

    cacheKeys.forEach(cacheKey => {
        if (cacheKey !== getCacheName() ) {
            caches.delete(cacheKey);
        }
    });
}

self.addEventListener('fetch', event => event.respondWith(cacheThenNetwork(event)));

async function cacheThenNetwork(event) {

    const cache = await caches.open(getCacheName());

    const cachedResponse = await cache.match(event.request);

    if (cachedResponse) {
        log('Serving From Cache: ' + event.request.url);
        return cachedResponse;
    }

    const networkResponse = await fetch(event.request);

    log('Calling network: ' + event.request.url);

    return networkResponse;
}

function getCacheName() {
    return "app-cache-" + VERSION;
}


function log(message, ...data) {
    if (data.length > 0) {
        console.log(VERSION, message, data);
    }
    else {
        console.log(VERSION, message);
    }
}
console.log("foo");




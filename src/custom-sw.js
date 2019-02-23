// See https://developers.google.com/web/tools/workbox/guides/configure-workbox
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
self.addEventListener("activate", event =>
  event.waitUntil(self.clients.claim())
);

// self.addEventListener("fetch", event => {
//   console.log("Fetching..");
//   const req = event.request;
//   event.respondWith(cacheFirst(req));
// });

// async function cacheFirst(req) {
//   const cachedResponse = await caches.match(req);
//   return cachedResponse || fetch(req);
// }

// We need this in Webpack plugin (refer to swSrc option): https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#full_injectmanifest_config
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// app-shell
workbox.routing.registerRoute("/", workbox.strategies.networkFirst());
workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  workbox.strategies.networkFirst()
);
workbox.routing.registerRoute(
  "https://damp-everglades-11634.herokuapp.com",
  workbox.strategies.networkFirst()
);

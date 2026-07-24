const CACHE_VERSION = "3cad34a0cf9fc0df38d355bedc679437cb7b6901";
const CACHE_PREFIX = "beandex-pwa-";
const CACHE_NAME = `${CACHE_PREFIX}${CACHE_VERSION}`;
const APP_SCOPE = self.registration.scope;

const scopedUrl = (path) => new URL(path, APP_SCOPE).toString();
const CORE_ASSETS = [
  scopedUrl("./"),
  scopedUrl("./offline.html"),
  scopedUrl("./manifest.webmanifest"),
  scopedUrl("./apple-touch-icon.png"),
  scopedUrl("./icon-512.png"),
];

async function cacheIfValid(cache, request, response) {
  if (response?.ok) await cache.put(request, response.clone());
  return response;
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.allSettled(
        CORE_ASSETS.map(async (url) => {
          const response = await fetch(url, { cache: "reload" });
          await cacheIfValid(cache, url, response);
        })
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

async function networkFirst(request) {
  const cache = await caches.open(CACHE_NAME);
  try {
    const response = await fetch(request);
    if (!response.ok) throw new Error(`Navigation failed with ${response.status}`);
    return await cacheIfValid(cache, request, response);
  } catch {
    return (
      (await cache.match(request)) ||
      (await cache.match(scopedUrl("./"))) ||
      (await cache.match(scopedUrl("./offline.html"))) ||
      new Response("Offline", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } })
    );
  }
}

async function staleWhileRevalidate(request, event) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  const update = fetch(request)
    .then((response) => cacheIfValid(cache, request, response))
    .catch(() => null);

  if (cached) {
    event.waitUntil(update);
    return cached;
  }

  return (await update) || new Response(null, { status: 504 });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
    return;
  }

  event.respondWith(staleWhileRevalidate(request, event));
});

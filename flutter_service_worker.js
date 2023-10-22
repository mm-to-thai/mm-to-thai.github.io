'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "d8008e2eddb5f6e687c8fa99335a883b",
"index.html": "bfdca4b78eaab74ca693128b5c999df9",
"/": "bfdca4b78eaab74ca693128b5c999df9",
"main.dart.js": "233571ceab5d246a16433fee5d4acfe5",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "7b2a59fe6220b5cb16364b94aee9c18f",
"icons/Icon-192.png": "7a8644ad95180be7bd409dbeb19dd395",
"icons/Icon-maskable-192.png": "7a8644ad95180be7bd409dbeb19dd395",
"icons/Icon-maskable-512.png": "8ea478689208c38411a623ae4c3af8da",
"icons/Icon-512.png": "8ea478689208c38411a623ae4c3af8da",
"manifest.json": "063938ca79a876cad8fa466245b3c54c",
".git/config": "426adf3c5d10894823df05afb80ba35b",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/6f/03025ddcc6557d9f6e0ee62afba615f89bf9ee": "be3ee820dfbc6c22078c8a484a03532e",
".git/objects/04/f2d1fb568f75ef3f90f665bcf7932f5c28712b": "4bf1209d8afcda8516e89135e7958727",
".git/objects/6a/8e4eeddc9915e0d8ef6e83d6bde0340a61d886": "2a0901a4747c5b5d6607a0116b44b94c",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/0e/808c7e955cb80663eccc1255cd3327de5e8d37": "68321c7229a00efe1978c91f6418a40e",
".git/objects/5a/842517f5e4b4dd640ae9291692324133411c13": "03a80388eccb176891f276152476b33f",
".git/objects/5f/ef4491c7f60e2f5dfb8c91e89082989bb8b46e": "67d80b247fbda3d87365103a192381ec",
".git/objects/02/7a4e103a1045353d9df5f55aac8ce6c4bb921b": "d21cf4b1a71fa04bc245a346e5f6ec22",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/b3/3aeb53ff3875410daf5ac4b79c52e1809e833f": "83108065da5097c5930d06185a7fde52",
".git/objects/da/6f21107e59a7f9ea482f21f85704847c5b12e0": "32f66596ea2c5d41b97af4a7c27ea064",
".git/objects/a2/485fc3b9ebb5d20417bd55d76bded88744c8b2": "35abf641d302c47bb4d5d0a01797c258",
".git/objects/d1/25d9fdb11f6a948d4b9fd13b241c95e993f9fd": "94a075e75f28f2bd1c33d5d40d5ea7b0",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/45/c9cdbd8556cb69ba5c0507c580170c0222d29b": "8aa7133c063c61b9ed134fa094d1234e",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/671267fe2da1f92a45f951431267d20e59f3a1": "619aa9b5f3773dae6e10614184f4886e",
".git/objects/4d/39ddb8301ed3c7e00aba836c5529fcad4f6bba": "5b34be4d641d0b06c83592a7a25ff885",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/86/2ed14cbb0963748469f6750acbb790156c22b2": "d798cc92eb7b02037fe969bf907fb6b0",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/9f/84bc1fd40c41b9da57ffc1a35ecba0e3cdeced": "dee9313b26ac072b37ab653772a1d710",
".git/objects/6b/9f459ca9b707902c4e41b04f0949983f5e15e4": "2528a79e5a1bd809a3d021ace167f36a",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/09/5e13bb66b2333ff86f23d54b83a1723b9f2c95": "e24622041634e85039f1d93474aab285",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/54/4c82a94f8bc3b6f82a01db4a6e361d7d6e6a00": "e93a262ef7d85f49db24694b9d205a78",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/b0/b8262cda4603c4d44b4e681d8d31d42655b856": "eec535bdf010260e4f72a97b7a806dc0",
".git/objects/a1/4ace1c227287412441ed93cbcb25df551101c1": "c4a5bcdec13a372cc07d8ecc6e610530",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/e8/d0c5d23d8f8d2e7863084684950f3bea97f7b9": "4412b9bdd802250f07fb3d508dc5413a",
".git/objects/e7/df4f44889826b9135f345d380dacdbff953081": "27e7e0ce0aec9cff89954d93c480abf6",
".git/objects/e0/f97c961c68ef447abf5b2e0babce9d876759a6": "44262ad360d0069acaa686f43ad0a252",
".git/objects/46/0f87cb421cb629920508637bdd92636243c8a0": "3f9e3c3232e0bab2973aecad1cf8ab48",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/2c/eee4b962c09141b9d5b5b2699cd64ee1566e05": "a2458b72691752d1446adf21a7ed17f8",
".git/objects/2d/0c84b468dcd273afb0899bf941aa1874714cc2": "a11a53df7c625e598563fa445d4bee00",
".git/objects/2d/2d3fbdf7defdbe01e133ce47abdb22466e4049": "2f6b6df530a16171ee232712eb1b0220",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/70/30437c884674177fed0f2c58977a169584e15b": "862c55224702ca269e3bd149f4ef1dfe",
".git/objects/84/67b2a021ec3e445e436a9714d252a8d4cfd50a": "f73f8927b12801ccbce3ad4261b40272",
".git/objects/4f/e57c10a6d266d83c880d6fb0e93cd9661fa0b5": "42f3a9fa9277445b91d71d992eb0bea1",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/1c/aff4f043e1a6f5735d85fb4e25e21c66248eca": "b42b17d9921661404ef6bcb3a4d575f7",
".git/objects/40/c924966da0f36617af8dddc297c75a19cdc86f": "aa83648adf0fbd2f76bd4d6e22a6a9cb",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "392cc5414133b1d129b1898e961cacfc",
".git/logs/refs/heads/main": "392cc5414133b1d129b1898e961cacfc",
".git/logs/refs/remotes/origin/main": "00891a0c19b0e4adebcbd5fd879d23ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "c0bac807208e44a4893658700c956564",
".git/refs/remotes/origin/main": "c0bac807208e44a4893658700c956564",
".git/index": "4f39a1798b85c8822228296a1d5a57fe",
".git/COMMIT_EDITMSG": "18999c1488c779c8b99eca9184d7739d",
"assets/AssetManifest.json": "fb8bebb85ac98a5d9b7df8d50de5b6d4",
"assets/NOTICES": "4a09c4d30ec00577c7b6db9497d5b50d",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/flutterfire_ui/assets/countries.json": "8c937aac9f3b69162be779fbcd6199d2",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/learning.png": "9b3bfd50886c57f9633724f5b5072348",
"assets/assets/learning_1.png": "02d1a0faf644c73f12e9015388cc4357",
"assets/assets/logo.png": "9354b86f6d151ca13ddf2ecca5640fcf",
"assets/assets/icons/volume.png": "22394c44fb1a8456adff1557a0900d3c",
"assets/assets/icons/banner.png": "8bf79145065d3b7de0562f7416ec08cd",
"assets/assets/icons/power.png": "d072caba1b2de9bc40ea29752cb6ac0a",
"assets/assets/icons/overview.png": "b9bd827e848c39004c498ec7319a999a",
"assets/assets/icons/content.png": "d38736616a4b5dab4bc92862f4d6db83",
"assets/assets/icons/lesson.png": "ef159cfe4967f0f3d7e8e493cb0ca7f4",
"assets/assets/icons/teamwork.png": "4f8b3fa55eae8143944319b11d0a1726",
"assets/assets/icons/level.png": "beb7c01833d827dc46c25a09f3acced3",
"assets/assets/icons/quiz.png": "f4648c9e1c4cc9c596820006654cee9a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

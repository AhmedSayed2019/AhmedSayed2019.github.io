'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ecb7880fc7bf3059b4d81903ac228f01",
"assets/assets/fonts/CupertinoIcons.ttf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/fonts/Inter-Black.ttf": "980c7e8757e741bb49c7c96513924c61",
"assets/assets/fonts/Inter-Bold.ttf": "275bfea5dc74c33f51916fee80feae67",
"assets/assets/fonts/Inter-ExtraBold.ttf": "c9709fb8e32755490795ce5bd226c3a0",
"assets/assets/fonts/Inter-ExtraLight.ttf": "0f3ac0692901f70f1ac32cf079355051",
"assets/assets/fonts/Inter-Light.ttf": "d55f45d07cfe01e8797bd1566561f718",
"assets/assets/fonts/Inter-Medium.ttf": "ed533866b5c83114c7dddbcbc2288b19",
"assets/assets/fonts/Inter-Regular.ttf": "079af0e2936ccb99b391ddc0bbb73dcb",
"assets/assets/fonts/Inter-SemiBold.ttf": "07a48beb92b401297a76ff9f6aedd0ed",
"assets/assets/fonts/Inter-Thin.ttf": "2dce622147cace7b467d9929b7708430",
"assets/assets/fonts/MaterialIcons-Regular.otf": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/assets/icons/twitter.svg": "3e25ad9135318357a6603c2c1f005206",
"assets/assets/icons/whatsapp.svg": "bc5b9497357a531b2c6d832481ba3d1b",
"assets/assets/images/apple_store.png": "7532c8c2e441eb4c3749e09c694c946d",
"assets/assets/images/automobile_1.png": "1f7b1b7a8d26639330f79f24fdd53a8a",
"assets/assets/images/automobile_2.png": "474840aa3a78b3ad22a26851f11b5fd3",
"assets/assets/images/automobile_3.png": "6c06835ef0e03cd75160790e39126a3c",
"assets/assets/images/background.jpg": "e65769737dbc831a32b1302dab7c09c2",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/bg_2.png": "1e9755828b264608b7f30627dde2aeea",
"assets/assets/images/google_play.png": "8412cc2c8fb288c9c3cb9063e2e2aa11",
"assets/assets/images/header.jpg": "0a1f32e3e65905a16471c056da18bc14",
"assets/assets/images/header2.jpg": "3caf65581ce4ec5cb26b64cb6788870b",
"assets/assets/images/header3.jpg": "e9d9d692fd84b870d969214a6928e2ed",
"assets/assets/images/header4.jpg": "003f6f5c5edfb1d04ac2cfa7ca775683",
"assets/assets/images/huawei_store.png": "db2473da777b6e2ad3c1019e9288aae1",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/internal_server_error.json": "034fef7bdbde50ce78e168dbdafc09e4",
"assets/assets/images/logos/adhmn_logo.png": "2ee10bc1745478880f52adbdd3cf6ae5",
"assets/assets/images/logos/adhmn_provider_logo.png": "19b9466f6287a4d17fa9a8d9264ac191",
"assets/assets/images/logos/alftoon_logo.png": "2ef892806e95355a9a7b5a33ef199e99",
"assets/assets/images/logos/alpha_to_omega_logo.png": "13f7563e5b6f6a7c2a9a08496eeeed19",
"assets/assets/images/logos/ashraf_logo.jpg": "516ba80a720e49d55ac3f1594c806b27",
"assets/assets/images/logos/innvii_logo.png": "4dd9ad0e4ed01d6c2e8947ffb31ad165",
"assets/assets/images/logos/linked_hr_logo.png": "4e6a6dc57fa781a56ecff9cbf813d477",
"assets/assets/images/logos/lync_logo.png": "b2ca8ba06232e83b7d2f5b01f49ebee9",
"assets/assets/images/logos/number_one_logo.png": "21517af048b4b817db1f4596f3f045a8",
"assets/assets/images/logos/occasion_busniss_logo.png": "9aa5cdaa36803abbcd0fcbc53ddcfe46",
"assets/assets/images/logos/occasion_logo.png": "994283629ab48cad6e58c8bdde50bb51",
"assets/assets/images/logos/part_logo.png": "6351f4982b21b8989c0717ab25d8bc6e",
"assets/assets/images/logos/rasid_logo.png": "eed56e8f12c4e775e1768cedc36b5142",
"assets/assets/images/logos/sera_logo.png": "319c2516a69d5fcb8439a32acfb5c810",
"assets/assets/images/logos/solo_q_logo.png": "f688a23b2e55c600e2be0597979ce6da",
"assets/assets/images/logos/transit_logo.png": "30bfb88dbf0f1e38391d61e332519ba9",
"assets/assets/images/logos/u_deal_logo.png": "06913718b150e33f92b2d3ea88fff9ed",
"assets/assets/images/logos/vodooo_logo.png": "064572b81bd55a3692a3df271b76bc62",
"assets/assets/images/logos/vooo_delivery.png": "b865f5266638a550c0d7ceb30be87744",
"assets/assets/images/logos/vooo_shop.png": "294ad74240dc3173ed70090c470e7fb7",
"assets/assets/images/main_background.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/images/my_image.jpg": "9653f1e37b03aba63970b31d818665b4",
"assets/assets/images/no_connection.json": "8dee74ca393d8022750cddabd4bc846e",
"assets/assets/images/projects/adhmn_provider.png": "1f904f59534b3c632001b950918bc38f",
"assets/assets/images/projects/adhmn_user.png": "122793f6acb535ce32990ecf79ae18e0",
"assets/assets/images/projects/alftoon.png": "af3e0f809a652cedf0b030f81a0636b0",
"assets/assets/images/projects/alpha_to_omega.png": "e24060bc4225f6145c6397da4c4e2a1a",
"assets/assets/images/projects/ashraf.png": "4e50887452c3d068d6deb8bd1f8f19ef",
"assets/assets/images/projects/innvii.png": "32489b669e8cf465d5965612fda825e0",
"assets/assets/images/projects/linked_hr.png": "d591488008dba5d07b64b27a542b771a",
"assets/assets/images/projects/lynk.png": "ffcd6a1e62d38a87eb7029450a7e6966",
"assets/assets/images/projects/number_one.png": "7bb0ae94546d134807b48ff49f16d933",
"assets/assets/images/projects/occasion.png": "fd70e42de9754b86162db553b9169db7",
"assets/assets/images/projects/occasion_busniss.png": "ff15f1a724b9f202a5e5c8fcbf5f188b",
"assets/assets/images/projects/part.png": "e1a35fadee08ef274ae204e958b54008",
"assets/assets/images/projects/rasid.png": "dd411cb73e5347026ae6cc7858a36b36",
"assets/assets/images/projects/sera.png": "d740f9af66b0952f1ac2e999077c2388",
"assets/assets/images/projects/solo_q.png": "581a61c4e06e38a36494ce10f919ba19",
"assets/assets/images/projects/transit.png": "26bf04e542ef536874b116237368cc12",
"assets/assets/images/projects/u_deal.png": "8ee4f3417c96a60720c0576ae13381e8",
"assets/assets/images/projects/vooo_delivery.png": "8d45f4e2826b87487a2941ea982a260e",
"assets/assets/images/projects/vooo_shop.png": "9ef37fc6bc10786d60a59354bc16e5f6",
"assets/assets/images/server_error.json": "5a924663a580f49bf53e00a659de0c1a",
"assets/assets/images/web.png": "b1c88cb3ec1062eacbb4500e9cf94d78",
"assets/assets/translation/ar.json": "7ffe5554159337b6cb2829c17dc8c8bb",
"assets/assets/translation/en.json": "e56192ceea30fbc3c9232a67a436be15",
"assets/FontManifest.json": "8d7e1d135a804466ab7d8c6d31b77b91",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "255ed8fc9504fda6176597db0a44e3ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"assets/shaders/ink_sparkle.frag": "c1f670c66398c8090252bf7309338cfd",
"favicon.jpg": "9653f1e37b03aba63970b31d818665b4",
"icons/Icon-192.png": "9653f1e37b03aba63970b31d818665b4",
"icons/Icon-512.png": "9653f1e37b03aba63970b31d818665b4",
"icons/Icon-maskable-192.png": "9653f1e37b03aba63970b31d818665b4",
"icons/Icon-maskable-512.png": "9653f1e37b03aba63970b31d818665b4",
"index.html": "8f86871fa58791099e820c816d6715b3",
"/": "8f86871fa58791099e820c816d6715b3",
"main.dart.js": "2541701150bfc62d44e3642ca6dc77b1",
"manifest.json": "30a6ea85f38555c77870a57aeabe8211",
"version.json": "62097d8f2a6b9a6750ac6ea6c7a34430"
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

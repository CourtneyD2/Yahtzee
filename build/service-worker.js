"use strict";var precacheConfig=[["/Yahtzee/index.html","69375ed24ac5562c4eeb464c950182ed"],["/Yahtzee/static/css/main.4d7358c7.css","c390c9a0e00e2fe20940e972f911b333"],["/Yahtzee/static/js/main.e60561ac.js","05163418c1e9c0c813d9ccec841fe536"],["/Yahtzee/static/media/fa-brands-400.2f122423.svg","2f12242375edd68e9013ecfb59c672e9"],["/Yahtzee/static/media/fa-brands-400.8300bd7f.ttf","8300bd7f30e0a313c1d772b49d96cb8e"],["/Yahtzee/static/media/fa-brands-400.ad527cc5.woff","ad527cc5ec23d6da66e8a1d6772ea6d3"],["/Yahtzee/static/media/fa-brands-400.e2ca6541.eot","e2ca6541bff3a3e9f4799ee327b28c58"],["/Yahtzee/static/media/fa-brands-400.f075c50f.woff2","f075c50f89795e4cdb4d45b51f1a6800"],["/Yahtzee/static/media/fa-regular-400.3602b7e8.svg","3602b7e8b2cb1462b0bef9738757ef8a"],["/Yahtzee/static/media/fa-regular-400.3c6879c4.woff","3c6879c4f342203d099bdd66dce6d396"],["/Yahtzee/static/media/fa-regular-400.49f00693.ttf","49f00693b0e5d45097832ef5ea1bc541"],["/Yahtzee/static/media/fa-regular-400.4a74738e.woff2","4a74738e7728e93c4394b8604081da62"],["/Yahtzee/static/media/fa-regular-400.b01516c1.eot","b01516c1808be557667befec76cd6318"],["/Yahtzee/static/media/fa-solid-900.205f07b3.ttf","205f07b3883c484f27f40d21a92950d4"],["/Yahtzee/static/media/fa-solid-900.4451e1d8.woff","4451e1d86df7491dd874f2c41eee1053"],["/Yahtzee/static/media/fa-solid-900.664de393.svg","664de3932dd6291b4b8a8c0ddbcb4c61"],["/Yahtzee/static/media/fa-solid-900.8ac31674.eot","8ac3167427b1d5d2967646bd8f7a0587"],["/Yahtzee/static/media/fa-solid-900.8e1ed89b.woff2","8e1ed89b6ccb8ce41faf5cb672677105"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/Yahtzee/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});
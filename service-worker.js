"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["404.html","0800801d883112625b38a3b075862c12"],["dist/app/bundle.css","e1efda62b814834b7af0bcdab4ddbe2c"],["dist/app/bundle.js","c5ddcf4a0be3272228ac3eab3f09c780"],["index.html","ab91cf09bd747c6d63f8860b6013c552"],["src/images/MAQlogo.png","fa5393de9b7915122d73938d48d81dd9"],["src/images/MAQlogo_old.png","ffbddf8c8d65a35f0fb66d25d47a963a"],["src/images/blog.png","264900e672ae60659f89c3f86ebf1234"],["src/images/casestudy/emotion-body-1.png","250f5055cb860d30ed9ba8d1f3bc263d"],["src/images/casestudy/emotion-body-2.png","01c380d49914eb04fea53d9744eaf005"],["src/images/casestudy/emotion-body-3.png","27af2be76574328da876c743b5dcfd15"],["src/images/casestudy/home.png","865da34c11d0c17aa479077d54701ca0"],["src/images/code.svg","7162858ad7153a686769b356d9147087"],["src/images/contact.png","daee782d49110bb17151f57bc36f7377"],["src/images/content_synthesis.png","5ce788cdc5805503bbb358cb670ecbd1"],["src/images/cortana-microsoft.svg","b2fe2ce6fe39fce61192fe8062c1304f"],["src/images/home.png","d7bc6c66eccac30e2bff205e46f0d7c9"],["src/images/home_old-.png","865da34c11d0c17aa479077d54701ca0"],["src/images/microsoft-azure.svg","0f94c25a6940fdbb6b9a582a5e97598b"],["src/images/overview.png","4216a1cff7fcf0f6de05b6e6425b5a2d"],["src/images/risk_monitoring.png","d683e16c4e76a1209a7da7419e9abee7"],["src/images/robot.svg","750ea305ba12aae8e8f96e30b7357cc5"],["src/images/virtual_agents.png","072269cb8c0d0bc28271fd3facc02a64"]],cacheName="sw-precache-v3-cache-1-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),o]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,r),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var i="function"==typeof require&&require;if(!s&&i)return i(c,!0);if(a)return a(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var a="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var c,s=e("./options"),i=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then(function(a){return"GET"===e.method&&n.test(a.status)&&o(t).then(function(n){n.put(e,a).then(function(){var o=t.cache||s.cache;(o.maxEntries||o.maxAgeSeconds)&&o.name&&function(e,t,n){var o=function(e,t,n){var o=e.url,a=n.maxAgeSeconds,c=n.maxEntries,s=n.name,u=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+a),i.getDb(s).then(function(e){return i.setTimestampForUrl(e,o,u)}).then(function(e){return i.expireEntries(e,c,a,u)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}.bind(null,e,t,n);c=c?c.then(o):o()}(e,n,o)})}),a.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||a(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,a="store",c="url",s="timestamp",i={};t.exports={getDb:function(e){return e in i||(i[e]=function(e){return new Promise(function(t,n){var i=indexedDB.open(r+e,o);i.onupgradeneeded=function(){i.result.createObjectStore(a,{keyPath:c}).createIndex(s,s,{unique:!1})},i.onsuccess=function(){t(i.result)},i.onerror=function(){n(i.error)}})}(e)),i[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var c=e.transaction(a,"readwrite");c.objectStore(a).put({url:t,timestamp:n}),c.oncomplete=function(){r(e)},c.onabort=function(){o(c.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,u=[],f=e.transaction(a,"readwrite"),h=f.objectStore(a);h.index(s).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[s]){var r=t.value[c];u.push(r),h.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(a,"readwrite"),u=i.objectStore(a),f=u.index(s),h=f.count();f.count().onsuccess=function(){var e=h.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var a=r.value[c];o.push(a),u.delete(a),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),a=e("./router"),c=e("./options");t.exports={fetchListener:function(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=c.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,c.cache.name))},installListener:function(e){var t=c.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(c.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),a=function(e,t,n,a){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=a,this.handler=n};a.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=a},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),a=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},c=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){c.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),c.prototype.add=function(e,t,n,a){a=a||{};var c;t instanceof RegExp?c=RegExp:(c=a.origin||self.location.origin,c=c instanceof RegExp?c.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(c)),e=e.toLowerCase();var s=new r(e,t,n,a);this.routes.has(c)||this.routes.set(c,new Map);var i=this.routes.get(c);i.has(e)||i.set(e,new Map);var u=i.get(e),f=s.regexp||s.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,s)},c.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,a(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},c.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],c=o&&o.get(e.toLowerCase());if(c){var s=a(c,n);if(s.length>0)return s[0].makeHandler(n)}}return null},c.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new c},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var a=n.cache||r.cache,c=Date.now();return o.isResponseFresh(t,a.maxAgeSeconds,c)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,a))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(a,c){var s=!1,i=[],u=function(e){i.push(e.toString()),s?c(new Error('Both cache and network failed: "'+i.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?a(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var a=(n=n||{}).successResponses||r.successResponses,c=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var s,i,u=[];if(c){var f=new Promise(function(a){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now(),s=t.maxAgeSeconds;o.isResponseFresh(e,s,c)&&a(e)})},1e3*c)});u.push(f)}var h=o.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),a.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),i=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(i)return i;throw r})});return u.push(h),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),a=e("./helpers"),c=e("./strategies"),s=e("./listeners");a.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:a.cache,uncache:a.uncache,precache:a.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,a=0,c="",i=t&&t.delimiter||"/";null!=(n=l.exec(e));){var u=n[0],f=n[1],h=n.index;if(c+=e.slice(a,h),a=h+u.length,f)c+=f[1];else{var p=e[a],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],b=n[7];c&&(r.push(c),c="");var x=null!=d&&null!=p&&p!==d,y="+"===w||"*"===w,E="?"===w||"*"===w,R=n[2]||i,C=g||v;r.push({name:m||o++,prefix:d||"",delimiter:R,optional:E,repeat:y,partial:x,asterisk:!!b,pattern:C?function(e){return e.replace(/([=!:$\/()])/g,"\\$1")}(C):b?".*":"[^"+s(R)+"]+?"})}}return a<e.length&&(c+=e.substr(a)),c&&r.push(c),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var c="",s=n||{},i=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var h,l=s[f.name];if(null==l){if(f.optional){f.partial&&(c+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(p(l)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(h=i(l[d]),!t[u].test(h))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(h)+"`");c+=(0===d?f.prefix:f.delimiter)+h}}else{if(h=f.asterisk?a(l):i(l),!t[u].test(h))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+h+'"');c+=f.prefix+h}}else c+=f}return c}}function s(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function i(e,t){return e.keys=t,e}function u(e){return e.sensitive?"":"i"}function f(e,t,n){p(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,a="",c=0;c<e.length;c++){var f=e[c];if("string"==typeof f)a+=s(f);else{var h=s(f.prefix),l="(?:"+f.pattern+")";t.push(f),f.repeat&&(l+="(?:"+h+l+")*"),a+=l=f.optional?f.partial?h+"("+l+")?":"(?:"+h+"("+l+"))?":h+"("+l+")"}}var d=s(n.delimiter||"/"),m=a.slice(-d.length)===d;return r||(a=(m?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=o?"$":r&&m?"":"(?="+d+"|$)",i(new RegExp("^"+a,u(n)),t)}function h(e,t,n){return p(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return i(e,t)}(e,t):p(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return i(new RegExp("(?:"+r.join("|")+")",u(n)),t)}(e,t,n):function(e,t,n){return f(r(e,n),t,n)}(e,t,n)}var p=e("isarray");t.exports=h,t.exports.parse=r,t.exports.compile=function(e,t){return c(r(e,t))},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=f;var l=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/maxcdn\.bootstrapcdn\.com\//,toolbox.cacheFirst,{});
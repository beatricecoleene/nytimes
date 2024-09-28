// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6TMmV":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "f74d213a071a9b39";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"1B6YD":[function(require,module,exports) {
var _mainCss = require("./main.css");
var _mqCss = require("./mq.css");
var _popularJs = require("./popular.js");
var _nytJs = require("./nyt_.js");
var _homepageJs = require("./homepage.js");
var _scienceJs = require("./science.js");
(async ()=>{
    await (0, _popularJs.getpopular)();
    await (0, _nytJs.getTopNews)();
    await (0, _homepageJs.gethp)();
    await (0, _scienceJs.getScience)();
})();

},{"./main.css":"8ZoFH","./mq.css":"hcf5H","./popular.js":"k55YC","./nyt_.js":"lb0bv","./homepage.js":"6PSAT","./science.js":"bxAKw"}],"8ZoFH":[function() {},{}],"hcf5H":[function() {},{}],"k55YC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getpopular", ()=>getpopular);
const API_URL = "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=K5zsJoRkJJVRrQFqJTEJu5fKWovOs4zY";
const hpcont = document.getElementById("content_hp");
const sc_cont = document.getElementById("contentsc");
const getpopular = async ()=>{
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("error!", e);
        return [];
    }
};
const update_maincont = (data)=>{
    (data.results || []).forEach((news)=>{
        const hp_content = document.createElement("div");
        hp_content.setAttribute("class", "hp_cont");
        hp_content.innerHTML = `  <a href='${news?.url}'><p id= "sectionsub" style= "text-transform: capitalize; color:#131959">${news?.section}: ${news?.subsection}</p>
            <h3>${news?.title}</h3></a>`;
        hp_content.addEventListener("click", ()=>{
            window.location.href = news?.url;
        });
        hpcont.appendChild(hp_content);
    // hpcont.appendChild(sc_cont);
    });
};
const update_sciencecont = (data)=>{
    (data.results || []).forEach((news)=>{
        const sc_content = document.createElement("div");
        sc_content.setAttribute("class", "sc_cont");
        sc_content.innerHTML = `
            <a href='${news?.url}'>
                <p id="sectionsub" style="text-transform: capitalize; color:#131959">
                    ${news?.section}: ${news?.subsection}
                </p>
                <h3>${news?.title}</h3>
            </a>
        `;
        sc_content.addEventListener("click", ()=>{
            window.location.href = news?.url;
        });
        sc_cont.appendChild(sc_content); // Append to the science content section
    });
};
(async ()=>{
    const data = await getpopular();
    console.log(data);
    update_maincont(data);
    update_sciencecont(data);
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lb0bv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTopNews", ()=>getTopNews);
const API_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=K5zsJoRkJJVRrQFqJTEJu5fKWovOs4zY";
const TopNews = document.getElementById("caption_");
const getpic = document.getElementById("pic");
const rn = document.getElementById("recent_news");
const rn1 = document.getElementById("news_1");
const rn2 = document.getElementById("news_2");
const getTopNews = async ()=>{
    try {
        const info = await fetch(API_URL);
        const data = await info.json();
        return data;
    } catch (e) {
        alert("error!", e);
        return [];
    }
};
const updateContainer = (data)=>{
    TopNews.innerHTML = " ";
    getpic.innerHTML = "";
    // (data.results || []).forEach((news)=> 
    const firstNews = data.results?.[0];
    const secondNews = data.results?.[1];
    const thirdNews = data.results?.[2];
    if (firstNews) {
        const newsContainer = document.createElement("div");
        newsContainer.setAttribute("class", "article");
        const imageUrl = firstNews.multimedia[0].url;
        const imageurl2 = secondNews.multimedia[1].url;
        const imageurl3 = thirdNews.multimedia[1].url;
        getpic.innerHTML = `<h2>${firstNews.title}</h2><p>${firstNews.byline}</p>`;
        rn.style.backgroundImage = `url("${imageUrl}") `;
        rn1.innerHTML = `<h3><img src="${imageurl2}" alt="news1"/><br>${secondNews.title}</h3>`;
        rn2.innerHTML = `<h4><img src="${imageurl3}" alt="news1"/><br>${thirdNews.title}</h4>`;
        TopNews.appendChild(newsContainer);
        const titleElement = newsContainer.querySelector("h2");
        titleElement.style.color = "white";
    } else TopNews.innerHTML = "<p>No recent news</p>";
};
(async ()=>{
    const data = await getTopNews();
    updateContainer(data);
})();
function showHomepage() {
    document.getElementById("hp").style.display = "grid";
    document.getElementById("recent_").style.display = "none";
}
function showRecent() {
    document.getElementById("hp").style.display = "none";
    document.getElementById("recent_").style.display = "grid";
}
document.getElementById("homepage").addEventListener("click", (e)=>{
    e.preventDefault();
    showHomepage();
});
document.getElementById("recent_n").addEventListener("click", (e)=>{
    e.preventDefault();
    showRecent();
});
document.getElementById("homepage_h").addEventListener("click", (e)=>{
    e.preventDefault();
    showHomepage();
});
document.getElementById("recent_h").addEventListener("click", (e)=>{
    e.preventDefault();
    showRecent();
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6PSAT":[function(require,module,exports) {
// TODO: enable this and remove line 5
// const API_URL =
// 'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key={token}';
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gethp", ()=>gethp);
const API_URL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=K5zsJoRkJJVRrQFqJTEJu5fKWovOs4zY";
const HomePage = document.getElementById("homepage_div");
const DivHp = document.getElementById("divhp");
const gethp = async ()=>{
    try {
        const res = await fetch(API_URL);
        const data = await res.json();
        return data;
    } catch (e) {
        alert("error!", e);
        return [];
    }
};
const updateHomepage = (data)=>{
    // hp_sub.innerHTML=``;
    (data.results || []).forEach((news, index)=>{
        const imageUrl = news?.multimedia[1].url;
        const newcont = document.createElement("div");
        newcont.setAttribute("class", "hp_div");
        newcont.innerHTML = `
            <h1 id= "sectionsub" style= "text-transform: capitalize;">${news?.section}: ${news?.subsection}</h1>
            <h3>${news?.title}</h3>
            <p id="by">${news?.byline}</p>
            <img src="${imageUrl}" alt="news_img" />
           
            <p style="color: black;">${news?.abstract}</p>
          
            `;
        HomePage.appendChild(newcont);
        const targetDiv = index < 11 ? HomePage : DivHp;
        targetDiv.appendChild(newcont);
        const titlehp = newcont.querySelector("h3");
        titlehp.style.fontFamily = '"Archivo Black", sans-serif';
        titlehp.style.color = "#0d1b31";
        const php = newcont.querySelector("p");
        php.style.fontFamily = '"Cambria", serif';
        php.style.color = "black";
        php.style.fontWeight = "500";
        php.style.fontSize = "1.4rem";
    });
};
(async ()=>{
    const data = await gethp();
    console.log(data);
    updateHomepage(data);
})(); // const update_maincont =(data) =>{
 //     (data.results || []).reverse().forEach((news)=>{
 //         const hp_content= document.createElement('div');
 //         hp_content.setAttribute('class', 'hp_cont');
 //         hp_content.innerHTML=`  <p id= "sectionsub" style= "text-transform: capitalize; color:#131959">${news?.section}: ${news?.subsection}</p>
 //             <h3>${news?.title}</h3>`;
 //         hpcont.appendChild(hp_content);
 //     }
 //     )
 // };
 // (async () =>{
 //     const data = await gethp();
 //     console.log(data);
 //     update_maincont(data);
 // })();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bxAKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getScience", ()=>getScience);
const API_URL = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=K5zsJoRkJJVRrQFqJTEJu5fKWovOs4zY";
const S_title = document.getElementById("sttl");
const S_Pic = document.getElementById("pic-s");
const Left = document.getElementById("left");
const Right = document.getElementById("right");
const S_others = document.getElementById("sothers");
const Button_S = document.getElementById("bttn_sc");
const H_title = document.getElementById("httl");
const H_Pic = document.getElementById("pic-h");
const H_Left = document.getElementById("hleft");
const H_Right = document.getElementById("hright");
const H_others = document.getElementById("h_others");
const Button_H = document.getElementById("bttn_h");
const G_title = document.getElementById("gwttl");
const G_Pic = document.getElementById("pic-gw");
const G_Left = document.getElementById("gwleft");
const G_Right = document.getElementById("gwright");
const G_others = document.getElementById("gwothers");
const Button_G = document.getElementById("bttn_gw");
let currentIndex = 0;
let scienceNews = [];
let healthindex = 0;
let healthNews = [];
let gwindex = 0;
let gwNews = [];
const getScience = async ()=>{
    try {
        const info = await fetch(API_URL);
        const data = await info.json();
        return data;
    } catch (e) {
        alert("error!", e);
        return [];
    }
};
const updateScience = (data)=>{
    scienceNews = data.results.filter((news)=>news?.section === "science");
    healthNews = data.results.filter((news)=>news?.section === "health");
    gwNews = data.results.filter((news)=>news?.section === "climate");
    if (scienceNews.length > 0) displayNews(scienceNews[currentIndex]);
    if (healthNews.length > 0) displayHealth(healthNews[healthindex]);
    if (gwNews.length > 0) displayGW(gwNews[gwindex]);
    else alert("No Science News");
// if (Array.isArray(data.results)){
//     data.results.forEach((news)=>{
//         const ImageUrl= news?.multimedia[0].url;
//         if(news?.section ==="science"){
//             S_title.innerHTML= news?.section;
//             S_Pic.style.backgroundImage= `url("${ImageUrl}")`;
//             S_Pic.style.backgroundSize= 'cover';
//             S_Pic.style.backgroundPosition= 'center';
//             S_Pic.style.backgroundRepeat='no-repeat';
//             S_Pic.innerHTML = `<h3>${news?.title || 'No Title'}</h3>`;
};
const displayNews = (news)=>{
    const ImageUrl = news?.multimedia[0].url;
    S_title.innerHTML = news?.section;
    S_Pic.style.backgroundImage = `url("${ImageUrl}")`;
    S_Pic.style.backgroundSize = "cover";
    S_Pic.style.backgroundPosition = "center";
    S_Pic.style.backgroundRepeat = "no-repeat";
    S_Pic.innerHTML = `
    <h3>${news?.title || "No Title"}</h3>
    <p>${news?.byline}</p>
    <p>${news?.abstract}</p>
    `;
    Button_S.addEventListener("click", ()=>{
        window.location.href = news?.url;
    });
};
const displayHealth = (news)=>{
    const ImageUrl = news?.multimedia[0].url;
    H_title.innerHTML = news?.section;
    H_Pic.style.backgroundImage = `url("${ImageUrl}")`;
    H_Pic.style.backgroundSize = "cover";
    H_Pic.style.backgroundPosition = "center";
    H_Pic.style.backgroundRepeat = "no-repeat";
    H_Pic.innerHTML = `
    <h3>${news?.title || "No Title"}</h3>
    <p>${news?.byline}</p>
    <p>${news?.abstract}</p>
    `;
    Button_H.addEventListener("click", ()=>{
        window.location.href = news?.url;
    });
};
const displayGW = (news)=>{
    const ImageUrl = news?.multimedia[0].url;
    G_title.innerHTML = news?.section;
    G_Pic.style.backgroundImage = `url("${ImageUrl}")`;
    G_Pic.style.backgroundSize = "cover";
    G_Pic.style.backgroundPosition = "center";
    G_Pic.style.backgroundRepeat = "no-repeat";
    G_Pic.innerHTML = `
    <h3>${news?.title || "No Title"}</h3>
    <p>${news?.byline}</p>
    <p>${news?.abstract}</p>
    `;
    Button_G.addEventListener("click", ()=>{
        window.location.href = news?.url;
    });
};
Right.addEventListener("click", ()=>{
    if (scienceNews.length > 0) {
        currentIndex = (currentIndex + 1) % scienceNews.length;
        displayNews(scienceNews[currentIndex]);
    }
});
Left.addEventListener("click", ()=>{
    if (scienceNews.length > 0) {
        currentIndex = (currentIndex - 1 + scienceNews.length) % scienceNews.length; // Loop to the last news if at the beginning
        displayNews(scienceNews[currentIndex]);
    }
});
H_Right.addEventListener("click", ()=>{
    if (healthNews.length > 0) {
        healthindex = (healthindex + 1) % healthNews.length;
        displayHealth(healthNews[healthindex]);
    }
});
H_Left.addEventListener("click", ()=>{
    if (healthNews.length > 0) {
        healthindex = (healthindex - 1 + healthNews.length) % healthNews.length; // Loop to the last news if at the beginning
        displayHealth(healthNews[healthindex]);
    }
});
G_Right.addEventListener("click", ()=>{
    if (gwNews.length > 0) {
        gwindex = (gwindex + 1) % gwNews.length;
        displayGW(gwNews[gwindex]);
    }
});
G_Left.addEventListener("click", ()=>{
    if (gwNews.length > 0) {
        gwindex = (gwindex - 1 + gwNews.length) % gwNews.length; // Loop to the last news if at the beginning
        displayGW(gwNews[gwindex]);
    }
});
(async ()=>{
    const data = await getScience();
    console.log(data);
    updateScience(data);
})();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6TMmV","1B6YD"], "1B6YD", "parcelRequireb78e")

//# sourceMappingURL=main.071a9b39.js.map

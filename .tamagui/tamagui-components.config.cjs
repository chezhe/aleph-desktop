var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to4, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to4, key) && key !== except)
        __defProp(to4, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to4;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/aria-hidden/dist/es5/index.js
var require_es5 = __commonJS({
  "node_modules/aria-hidden/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;
    var getDefaultParent = /* @__PURE__ */ __name(function(originalTarget) {
      if (typeof document === "undefined") {
        return null;
      }
      var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
      return sampleTarget.ownerDocument.body;
    }, "getDefaultParent");
    var counterMap = /* @__PURE__ */ new WeakMap();
    var uncontrolledNodes = /* @__PURE__ */ new WeakMap();
    var markerMap = {};
    var lockCount = 0;
    var unwrapHost = /* @__PURE__ */ __name(function(node) {
      return node && (node.host || unwrapHost(node.parentNode));
    }, "unwrapHost");
    var correctTargets = /* @__PURE__ */ __name(function(parent, targets) {
      return targets.map(function(target) {
        if (parent.contains(target)) {
          return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
          return correctedTarget;
        }
        console.error("aria-hidden", target, "in not contained inside", parent, ". Doing nothing");
        return null;
      }).filter(function(x17) {
        return Boolean(x17);
      });
    }, "correctTargets");
    var applyAttributeToOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName, controlAttribute) {
      var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      if (!markerMap[markerName]) {
        markerMap[markerName] = /* @__PURE__ */ new WeakMap();
      }
      var markerCounter = markerMap[markerName];
      var hiddenNodes = [];
      var elementsToKeep = /* @__PURE__ */ new Set();
      var elementsToStop = new Set(targets);
      var keep = /* @__PURE__ */ __name(function(el) {
        if (!el || elementsToKeep.has(el)) {
          return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
      }, "keep");
      targets.forEach(keep);
      var deep = /* @__PURE__ */ __name(function(parent) {
        if (!parent || elementsToStop.has(parent)) {
          return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
          if (elementsToKeep.has(node)) {
            deep(node);
          } else {
            var attr = node.getAttribute(controlAttribute);
            var alreadyHidden = attr !== null && attr !== "false";
            var counterValue = (counterMap.get(node) || 0) + 1;
            var markerValue = (markerCounter.get(node) || 0) + 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            hiddenNodes.push(node);
            if (counterValue === 1 && alreadyHidden) {
              uncontrolledNodes.set(node, true);
            }
            if (markerValue === 1) {
              node.setAttribute(markerName, "true");
            }
            if (!alreadyHidden) {
              node.setAttribute(controlAttribute, "true");
            }
          }
        });
      }, "deep");
      deep(parentNode);
      elementsToKeep.clear();
      lockCount++;
      return function() {
        hiddenNodes.forEach(function(node) {
          var counterValue = counterMap.get(node) - 1;
          var markerValue = markerCounter.get(node) - 1;
          counterMap.set(node, counterValue);
          markerCounter.set(node, markerValue);
          if (!counterValue) {
            if (!uncontrolledNodes.has(node)) {
              node.removeAttribute(controlAttribute);
            }
            uncontrolledNodes.delete(node);
          }
          if (!markerValue) {
            node.removeAttribute(markerName);
          }
        });
        lockCount--;
        if (!lockCount) {
          counterMap = /* @__PURE__ */ new WeakMap();
          counterMap = /* @__PURE__ */ new WeakMap();
          uncontrolledNodes = /* @__PURE__ */ new WeakMap();
          markerMap = {};
        }
      };
    }, "applyAttributeToOthers");
    var hideOthers3 = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-aria-hidden";
      }
      var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll("[aria-live]")));
      return applyAttributeToOthers(targets, activeParentNode, markerName, "aria-hidden");
    }, "hideOthers");
    exports.hideOthers = hideOthers3;
    var inertOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-inert-ed";
      }
      var activeParentNode = parentNode || getDefaultParent(originalTarget);
      if (!activeParentNode) {
        return function() {
          return null;
        };
      }
      return applyAttributeToOthers(originalTarget, activeParentNode, markerName, "inert");
    }, "inertOthers");
    exports.inertOthers = inertOthers;
    var supportsInert = /* @__PURE__ */ __name(function() {
      return typeof HTMLElement !== "undefined" && HTMLElement.prototype.hasOwnProperty("inert");
    }, "supportsInert");
    exports.supportsInert = supportsInert;
    var suppressOthers = /* @__PURE__ */ __name(function(originalTarget, parentNode, markerName) {
      if (markerName === void 0) {
        markerName = "data-suppressed";
      }
      return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);
    }, "suppressOthers");
    exports.suppressOthers = suppressOthers;
  }
});

// node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js
var require_AriaHidden = __commonJS({
  "node_modules/@tamagui/aria-hidden/dist/cjs/AriaHidden.js"(exports, module2) {
    "use strict";
    var t28 = Object.defineProperty;
    var i23 = Object.getOwnPropertyDescriptor;
    var m22 = Object.getOwnPropertyNames;
    var p23 = Object.prototype.hasOwnProperty;
    var s22 = /* @__PURE__ */ __name((r30, e22) => {
      for (var o20 in e22)
        t28(r30, o20, { get: e22[o20], enumerable: true });
    }, "s");
    var x17 = /* @__PURE__ */ __name((r30, e22, o20, d19) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let h16 of m22(e22))
          !p23.call(r30, h16) && h16 !== o20 && t28(r30, h16, { get: () => e22[h16], enumerable: !(d19 = i23(e22, h16)) || d19.enumerable });
      return r30;
    }, "x");
    var O10 = /* @__PURE__ */ __name((r30) => x17(t28({}, "__esModule", { value: true }), r30), "O");
    var a18 = {};
    s22(a18, { hideOthers: () => f24.hideOthers });
    module2.exports = O10(a18);
    var f24 = require_es5();
  }
});

// node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_AriaHidden(), module2.exports);
  }
});

// node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e22;
    var r30;
    var t28 = (e22 = {}, r30 = require("react"), Object.keys(r30).forEach(function(t29) {
      "default" !== t29 && "__esModule" !== t29 && Object.defineProperty(e22, t29, { enumerable: true, get: function() {
        return r30[t29];
      } });
    }), e22);
    exports.useCallbackRef = function(e23) {
      const r31 = t28.useRef(e23);
      return t28.useEffect(() => {
        r31.current = e23;
      }), t28.useMemo(() => (...e24) => {
        var t29;
        return null === (t29 = r31.current) || void 0 === t29 ? void 0 : t29.call(r31, ...e24);
      }, []);
    };
  }
});

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e22;
    var t28;
    var n19 = require_dist().useCallbackRef;
    var r30 = (e22 = {}, t28 = require("react"), Object.keys(t28).forEach(function(n20) {
      "default" !== n20 && "__esModule" !== n20 && Object.defineProperty(e22, n20, { enumerable: true, get: function() {
        return t28[n20];
      } });
    }), e22);
    exports.useEscapeKeydown = function(e23) {
      const t29 = n19(e23);
      r30.useEffect(() => {
        const e24 = /* @__PURE__ */ __name((e25) => {
          "Escape" === e25.key && t29(e25);
        }, "e");
        return document.addEventListener("keydown", e24), () => document.removeEventListener("keydown", e24);
      }, [t29]);
    };
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var T16 = Object.create;
    var s22 = Object.defineProperty;
    var i23 = Object.getOwnPropertyDescriptor;
    var a18 = Object.getOwnPropertyNames;
    var u15 = Object.getPrototypeOf;
    var r30 = Object.prototype.hasOwnProperty;
    var b16 = /* @__PURE__ */ __name((e22, t28) => {
      for (var o20 in t28)
        s22(e22, o20, { get: t28[o20], enumerable: true });
    }, "b");
    var c26 = /* @__PURE__ */ __name((e22, t28, o20, R17) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let f24 of a18(t28))
          !r30.call(e22, f24) && f24 !== o20 && s22(e22, f24, { get: () => t28[f24], enumerable: !(R17 = i23(t28, f24)) || R17.enumerable });
      return e22;
    }, "c");
    var l21 = /* @__PURE__ */ __name((e22, t28, o20) => (o20 = e22 != null ? T16(u15(e22)) : {}, c26(t28 || !e22 || !e22.__esModule ? s22(o20, "default", { value: e22, enumerable: true }) : o20, e22)), "l");
    var p23 = /* @__PURE__ */ __name((e22) => c26(s22({}, "__esModule", { value: true }), e22), "p");
    var j13 = {};
    b16(j13, { composeRefs: () => n19, useComposedRefs: () => P16 });
    module2.exports = p23(j13);
    var d19 = l21(require("react"));
    function m22(e22, t28) {
      typeof e22 == "function" ? e22(t28) : e22 && (e22.current = t28);
    }
    __name(m22, "m");
    function n19(...e22) {
      return (t28) => e22.forEach((o20) => m22(o20, t28));
    }
    __name(n19, "n");
    function P16(...e22) {
      return d19.useCallback(n19(...e22), e22);
    }
    __name(P16, "P");
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_compose_refs(), module2.exports);
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    "use strict";
    var u15 = Object.defineProperty;
    var r30 = Object.getOwnPropertyDescriptor;
    var i23 = Object.getOwnPropertyNames;
    var a18 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((n19, e22) => {
      for (var s22 in e22)
        u15(n19, s22, { get: e22[s22], enumerable: true });
    }, "p");
    var l21 = /* @__PURE__ */ __name((n19, e22, s22, c26) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let o20 of i23(e22))
          !a18.call(n19, o20) && o20 !== s22 && u15(n19, o20, { get: () => e22[o20], enumerable: !(c26 = r30(e22, o20)) || c26.enumerable });
      return n19;
    }, "l");
    var y14 = /* @__PURE__ */ __name((n19) => l21(u15({}, "__esModule", { value: true }), n19), "y");
    var m22 = {};
    p23(m22, { useGet: () => d19 });
    module2.exports = y14(m22);
    var t28 = require("react");
    var A18 = process.env.TAMAGUI_TARGET === "web";
    var b16 = typeof window < "u";
    var E16 = !A18 || b16 ? t28.useLayoutEffect : t28.useEffect;
    function d19(n19, e22, s22) {
      const c26 = (0, t28.useRef)(e22 ?? n19);
      return E16(() => {
        c26.current = n19;
      }), (0, t28.useCallback)(s22 ? (...o20) => {
        var f24;
        return (f24 = c26.current) == null ? void 0 : f24.apply(null, o20);
      } : () => c26.current, []);
    }
    __name(d19, "d");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var i23 = Object.getOwnPropertyDescriptor;
    var l21 = Object.getOwnPropertyNames;
    var s22 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((n19, e22) => {
      for (var r30 in e22)
        a18(n19, r30, { get: e22[r30], enumerable: true });
    }, "c");
    var y14 = /* @__PURE__ */ __name((n19, e22, r30, o20) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let t28 of l21(e22))
          !s22.call(n19, t28) && t28 !== r30 && a18(n19, t28, { get: () => e22[t28], enumerable: !(o20 = i23(e22, t28)) || o20.enumerable });
      return n19;
    }, "y");
    var d19 = /* @__PURE__ */ __name((n19) => y14(a18({}, "__esModule", { value: true }), n19), "d");
    var h16 = {};
    c26(h16, { useEvent: () => T16 });
    module2.exports = d19(h16);
    var u15 = require_useGet();
    function T16(n19) {
      return (0, u15.useGet)(n19, f24, true);
    }
    __name(T16, "T");
    var f24 = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "f");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((r30, o20, p23, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let m22 of c26(o20))
          !d19.call(r30, m22) && m22 !== p23 && a18(r30, m22, { get: () => o20[m22], enumerable: !(x17 = b16(o20, m22)) || x17.enumerable });
      return r30;
    }, "t");
    var f24 = /* @__PURE__ */ __name((r30, o20, p23) => (t28(r30, o20, "default"), p23 && t28(p23, o20, "default")), "f");
    var g16 = /* @__PURE__ */ __name((r30) => t28(a18({}, "__esModule", { value: true }), r30), "g");
    var e22 = {};
    module2.exports = g16(e22);
    f24(e22, require_useEvent(), module2.exports);
    f24(e22, require_useGet(), module2.exports);
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var w21 = Object.create;
    var m22 = Object.defineProperty;
    var x17 = Object.getOwnPropertyDescriptor;
    var D13 = Object.getOwnPropertyNames;
    var V15 = Object.getPrototypeOf;
    var W14 = Object.prototype.hasOwnProperty;
    var j13 = /* @__PURE__ */ __name((e22, t28) => {
      for (var n19 in t28)
        m22(e22, n19, { get: t28[n19], enumerable: true });
    }, "j");
    var H14 = /* @__PURE__ */ __name((e22, t28, n19, o20) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let r30 of D13(t28))
          !W14.call(e22, r30) && r30 !== n19 && m22(e22, r30, { get: () => t28[r30], enumerable: !(o20 = x17(t28, r30)) || o20.enumerable });
      return e22;
    }, "H");
    var q12 = /* @__PURE__ */ __name((e22, t28, n19) => (n19 = e22 != null ? w21(V15(e22)) : {}, H14(t28 || !e22 || !e22.__esModule ? m22(n19, "default", { value: e22, enumerable: true }) : n19, e22)), "q");
    var z13 = /* @__PURE__ */ __name((e22) => H14(m22({}, "__esModule", { value: true }), e22), "z");
    var $8 = {};
    j13($8, { FocusScope: () => S19 });
    module2.exports = z13($8);
    var O10 = require_cjs2();
    var M16 = require_cjs3();
    var a18 = q12(require("react"));
    var b16 = "focusScope.autoFocusOnMount";
    var y14 = "focusScope.autoFocusOnUnmount";
    var h16 = { bubbles: false, cancelable: true };
    var B10 = "FocusScope";
    var S19 = a18.forwardRef((e22, t28) => {
      const { loop: n19 = false, trapped: o20 = false, onMountAutoFocus: r30, onUnmountAutoFocus: A18, children: g16, forceUnmount: p23, ...U10 } = e22, [u15, R17] = a18.useState(null), E16 = (0, M16.useEvent)(r30), T16 = (0, M16.useEvent)(A18), F16 = a18.useRef(null), K10 = (0, O10.useComposedRefs)(t28, (s22) => R17(s22)), l21 = a18.useRef({ paused: false, pause() {
        this.paused = true;
      }, resume() {
        this.paused = false;
      } }).current;
      a18.useEffect(() => {
        if (!o20)
          return;
        function s22(c26) {
          if (l21.paused || !u15)
            return;
          const f24 = c26.target;
          u15.contains(f24) ? F16.current = f24 : i23(F16.current, { select: true });
        }
        __name(s22, "s");
        function d19(c26) {
          l21.paused || !u15 || u15.contains(c26.relatedTarget) || i23(F16.current, { select: true });
        }
        __name(d19, "d");
        return document.addEventListener("focusin", s22), document.addEventListener("focusout", d19), () => {
          document.removeEventListener("focusin", s22), document.removeEventListener("focusout", d19);
        };
      }, [o20, p23, u15, l21.paused]), a18.useEffect(() => {
        if (!u15 || p23)
          return;
        P16.add(l21);
        const s22 = document.activeElement;
        if (!u15.contains(s22)) {
          const c26 = new CustomEvent(b16, h16);
          u15.addEventListener(b16, E16), u15.dispatchEvent(c26), c26.defaultPrevented || (G15(Z10(N11(u15)), { select: true }), document.activeElement === s22 && i23(u15));
        }
        return () => {
          u15.removeEventListener(b16, E16);
          const c26 = new CustomEvent(y14, h16);
          u15.addEventListener(y14, T16), u15.dispatchEvent(c26), c26.defaultPrevented || i23(s22 ?? document.body, { select: true }), u15.removeEventListener(y14, T16), P16.remove(l21);
        };
      }, [u15, p23, E16, T16, l21]);
      const _13 = a18.useCallback((s22) => {
        if (!(n19 || o20) || l21.paused)
          return;
        const d19 = s22.key === "Tab" && !s22.altKey && !s22.ctrlKey && !s22.metaKey, c26 = document.activeElement;
        if (d19 && c26) {
          const f24 = s22.currentTarget, [v14, L14] = J15(f24);
          v14 && L14 ? !s22.shiftKey && c26 === L14 ? (s22.preventDefault(), n19 && i23(v14, { select: true })) : s22.shiftKey && c26 === v14 && (s22.preventDefault(), n19 && i23(L14, { select: true })) : c26 === f24 && s22.preventDefault();
        }
      }, [n19, o20, l21.paused]), k16 = a18.Children.only(g16);
      return a18.cloneElement(k16, { tabIndex: -1, ...U10, ref: K10, onKeyDown: _13 });
    });
    S19.displayName = B10;
    function G15(e22, { select: t28 = false } = {}) {
      const n19 = document.activeElement;
      for (const o20 of e22)
        if (i23(o20, { select: t28 }), document.activeElement !== n19)
          return;
    }
    __name(G15, "G");
    function J15(e22) {
      const t28 = N11(e22), n19 = I10(t28, e22), o20 = I10(t28.reverse(), e22);
      return [n19, o20];
    }
    __name(J15, "J");
    function N11(e22) {
      const t28 = [], n19 = document.createTreeWalker(e22, NodeFilter.SHOW_ELEMENT, { acceptNode: (o20) => {
        const r30 = o20.tagName === "INPUT" && o20.type === "hidden";
        return o20.disabled || o20.hidden || r30 ? NodeFilter.FILTER_SKIP : o20.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      } });
      for (; n19.nextNode(); )
        t28.push(n19.currentNode);
      return t28;
    }
    __name(N11, "N");
    function I10(e22, t28) {
      for (const n19 of e22)
        if (!Q9(n19, { upTo: t28 }))
          return n19;
    }
    __name(I10, "I");
    function Q9(e22, { upTo: t28 }) {
      if (getComputedStyle(e22).visibility === "hidden")
        return true;
      for (; e22; ) {
        if (t28 !== void 0 && e22 === t28)
          return false;
        if (getComputedStyle(e22).display === "none")
          return true;
        e22 = e22.parentElement;
      }
      return false;
    }
    __name(Q9, "Q");
    function X9(e22) {
      return e22 instanceof HTMLInputElement && "select" in e22;
    }
    __name(X9, "X");
    function i23(e22, { select: t28 = false } = {}) {
      if (e22 != null && e22.focus) {
        const n19 = document.activeElement;
        e22.focus({ preventScroll: true }), e22 !== n19 && X9(e22) && t28 && e22.select();
      }
    }
    __name(i23, "i");
    var P16 = Y11();
    function Y11() {
      let e22 = [];
      return { add(t28) {
        const n19 = e22[0];
        t28 !== n19 && (n19 == null || n19.pause()), e22 = C14(e22, t28), e22.unshift(t28);
      }, remove(t28) {
        var n19;
        e22 = C14(e22, t28), (n19 = e22[0]) == null || n19.resume();
      } };
    }
    __name(Y11, "Y");
    function C14(e22, t28) {
      const n19 = [...e22], o20 = n19.indexOf(t28);
      return o20 !== -1 && n19.splice(o20, 1), n19;
    }
    __name(C14, "C");
    function Z10(e22) {
      return e22.filter((t28) => t28.tagName !== "A");
    }
    __name(Z10, "Z");
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_FocusScope(), module2.exports);
  }
});

// node_modules/@tamagui/get-size/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@tamagui/get-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var O10 = Object.getOwnPropertyDescriptor;
    var T16 = Object.getOwnPropertyNames;
    var g16 = Object.prototype.hasOwnProperty;
    var z13 = /* @__PURE__ */ __name((r30, e22) => {
      for (var t28 in e22)
        a18(r30, t28, { get: e22[t28], enumerable: true });
    }, "z");
    var S19 = /* @__PURE__ */ __name((r30, e22, t28, o20) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let n19 of T16(e22))
          !g16.call(r30, n19) && n19 !== t28 && a18(r30, n19, { get: () => e22[n19], enumerable: !(o20 = O10(e22, n19)) || o20.enumerable });
      return r30;
    }, "S");
    var $8 = /* @__PURE__ */ __name((r30) => S19(a18({}, "__esModule", { value: true }), r30), "$");
    var b16 = {};
    z13(b16, { getSize: () => y14, stepTokenUpOrDown: () => d19 });
    module2.exports = $8(b16);
    var s22 = require("@tamagui/core-node");
    var y14 = /* @__PURE__ */ __name((r30, e22 = 0, t28 = [0]) => d19("size", r30, e22, t28), "y");
    var d19 = /* @__PURE__ */ __name((r30, e22 = "$true", t28 = 0, o20 = [0]) => {
      const n19 = (0, s22.getTokens)({ prefixed: true })[r30], c26 = (s22.tokensKeysOrdered.get(n19) || Object.keys(n19)).map((i23) => i23.charAt(0) === "$" ? i23 : `$${i23}`), k16 = o20[0] ?? 0, p23 = o20[1] ?? c26.length - 1, m22 = c26.indexOf(e22);
      e22 === "$true" && (t28 += t28 === 0 ? 0 : t28 > 0 ? 1 : -1);
      const u15 = Math.min(p23, Math.max(k16, m22 + t28)), x17 = c26[u15];
      return n19[x17] || n19.$true;
    }, "d");
  }
});

// node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var d19 = Object.getOwnPropertyDescriptor;
    var s22 = Object.getOwnPropertyNames;
    var p23 = Object.prototype.hasOwnProperty;
    var u15 = /* @__PURE__ */ __name((e22, r30) => {
      for (var i23 in r30)
        a18(e22, i23, { get: r30[i23], enumerable: true });
    }, "u");
    var z13 = /* @__PURE__ */ __name((e22, r30, i23, o20) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let t28 of s22(r30))
          !p23.call(e22, t28) && t28 !== i23 && a18(e22, t28, { get: () => r30[t28], enumerable: !(o20 = d19(r30, t28)) || o20.enumerable });
      return e22;
    }, "z");
    var S19 = /* @__PURE__ */ __name((e22) => z13(a18({}, "__esModule", { value: true }), e22), "S");
    var m22 = {};
    u15(m22, { getButtonSized: () => g16 });
    module2.exports = S19(m22);
    var n19 = require_cjs5();
    var g16 = /* @__PURE__ */ __name((e22, { tokens: r30 }) => {
      if (typeof e22 == "number")
        return { paddingHorizontal: e22 * 0.25, height: e22, borderRadius: e22 * 0.2 };
      const i23 = (0, n19.getSize)(e22, 0), o20 = (0, n19.stepTokenUpOrDown)("space", e22), t28 = r30.radius[e22] ?? r30.radius.$true;
      return { paddingHorizontal: o20, height: i23, borderRadius: t28 };
    }, "g");
  }
});

// node_modules/tslib/tslib.es6.js
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values
});
function __extends(d19, b16) {
  if (typeof b16 !== "function" && b16 !== null)
    throw new TypeError("Class extends value " + String(b16) + " is not a constructor or null");
  extendStatics(d19, b16);
  function __() {
    this.constructor = d19;
  }
  __name(__, "__");
  d19.prototype = b16 === null ? Object.create(b16) : (__.prototype = b16.prototype, new __());
}
function __rest(s22, e22) {
  var t28 = {};
  for (var p23 in s22)
    if (Object.prototype.hasOwnProperty.call(s22, p23) && e22.indexOf(p23) < 0)
      t28[p23] = s22[p23];
  if (s22 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i23 = 0, p23 = Object.getOwnPropertySymbols(s22); i23 < p23.length; i23++) {
      if (e22.indexOf(p23[i23]) < 0 && Object.prototype.propertyIsEnumerable.call(s22, p23[i23]))
        t28[p23[i23]] = s22[p23[i23]];
    }
  return t28;
}
function __decorate(decorators, target, key, desc) {
  var c26 = arguments.length, r30 = c26 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d19;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r30 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i23 = decorators.length - 1; i23 >= 0; i23--)
      if (d19 = decorators[i23])
        r30 = (c26 < 3 ? d19(r30) : c26 > 3 ? d19(target, key, r30) : d19(target, key)) || r30;
  return c26 > 3 && r30 && Object.defineProperty(target, key, r30), r30;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f24) {
    if (f24 !== void 0 && typeof f24 !== "function")
      throw new TypeError("Function expected");
    return f24;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _13, done = false;
  for (var i23 = decorators.length - 1; i23 >= 0; i23--) {
    var context = {};
    for (var p23 in contextIn)
      context[p23] = p23 === "access" ? {} : contextIn[p23];
    for (var p23 in contextIn.access)
      context.access[p23] = contextIn.access[p23];
    context.addInitializer = function(f24) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f24 || null));
    };
    var result = (0, decorators[i23])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0)
        continue;
      if (result === null || typeof result !== "object")
        throw new TypeError("Object expected");
      if (_13 = accept(result.get))
        descriptor.get = _13;
      if (_13 = accept(result.set))
        descriptor.set = _13;
      if (_13 = accept(result.init))
        initializers.push(_13);
    } else if (_13 = accept(result)) {
      if (kind === "field")
        initializers.push(_13);
      else
        descriptor[key] = _13;
    }
  }
  if (target)
    Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i23 = 0; i23 < initializers.length; i23++) {
    value = useValue ? initializers[i23].call(thisArg, value) : initializers[i23].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x17) {
  return typeof x17 === "symbol" ? x17 : "".concat(x17);
}
function __setFunctionName(f24, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f24, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
    return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P16, generator) {
  function adopt(value) {
    return value instanceof P16 ? value : new P16(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P16 || (P16 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e22) {
        reject(e22);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e22) {
        reject(e22);
      }
    }
    __name(rejected, "rejected");
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    __name(step, "step");
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _13 = { label: 0, sent: function() {
    if (t28[0] & 1)
      throw t28[1];
    return t28[1];
  }, trys: [], ops: [] }, f24, y14, t28, g16;
  return g16 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g16[Symbol.iterator] = function() {
    return this;
  }), g16;
  function verb(n19) {
    return function(v14) {
      return step([n19, v14]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f24)
      throw new TypeError("Generator is already executing.");
    while (g16 && (g16 = 0, op[0] && (_13 = 0)), _13)
      try {
        if (f24 = 1, y14 && (t28 = op[0] & 2 ? y14["return"] : op[0] ? y14["throw"] || ((t28 = y14["return"]) && t28.call(y14), 0) : y14.next) && !(t28 = t28.call(y14, op[1])).done)
          return t28;
        if (y14 = 0, t28)
          op = [op[0] & 2, t28.value];
        switch (op[0]) {
          case 0:
          case 1:
            t28 = op;
            break;
          case 4:
            _13.label++;
            return { value: op[1], done: false };
          case 5:
            _13.label++;
            y14 = op[1];
            op = [0];
            continue;
          case 7:
            op = _13.ops.pop();
            _13.trys.pop();
            continue;
          default:
            if (!(t28 = _13.trys, t28 = t28.length > 0 && t28[t28.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _13 = 0;
              continue;
            }
            if (op[0] === 3 && (!t28 || op[1] > t28[0] && op[1] < t28[3])) {
              _13.label = op[1];
              break;
            }
            if (op[0] === 6 && _13.label < t28[1]) {
              _13.label = t28[1];
              t28 = op;
              break;
            }
            if (t28 && _13.label < t28[2]) {
              _13.label = t28[2];
              _13.ops.push(op);
              break;
            }
            if (t28[2])
              _13.ops.pop();
            _13.trys.pop();
            continue;
        }
        op = body.call(thisArg, _13);
      } catch (e22) {
        op = [6, e22];
        y14 = 0;
      } finally {
        f24 = t28 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m22, o20) {
  for (var p23 in m22)
    if (p23 !== "default" && !Object.prototype.hasOwnProperty.call(o20, p23))
      __createBinding(o20, m22, p23);
}
function __values(o20) {
  var s22 = typeof Symbol === "function" && Symbol.iterator, m22 = s22 && o20[s22], i23 = 0;
  if (m22)
    return m22.call(o20);
  if (o20 && typeof o20.length === "number")
    return {
      next: function() {
        if (o20 && i23 >= o20.length)
          o20 = void 0;
        return { value: o20 && o20[i23++], done: !o20 };
      }
    };
  throw new TypeError(s22 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o20, n19) {
  var m22 = typeof Symbol === "function" && o20[Symbol.iterator];
  if (!m22)
    return o20;
  var i23 = m22.call(o20), r30, ar = [], e22;
  try {
    while ((n19 === void 0 || n19-- > 0) && !(r30 = i23.next()).done)
      ar.push(r30.value);
  } catch (error) {
    e22 = { error };
  } finally {
    try {
      if (r30 && !r30.done && (m22 = i23["return"]))
        m22.call(i23);
    } finally {
      if (e22)
        throw e22.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i23 = 0; i23 < arguments.length; i23++)
    ar = ar.concat(__read(arguments[i23]));
  return ar;
}
function __spreadArrays() {
  for (var s22 = 0, i23 = 0, il = arguments.length; i23 < il; i23++)
    s22 += arguments[i23].length;
  for (var r30 = Array(s22), k16 = 0, i23 = 0; i23 < il; i23++)
    for (var a18 = arguments[i23], j13 = 0, jl = a18.length; j13 < jl; j13++, k16++)
      r30[k16] = a18[j13];
  return r30;
}
function __spreadArray(to4, from, pack) {
  if (pack || arguments.length === 2)
    for (var i23 = 0, l21 = from.length, ar; i23 < l21; i23++) {
      if (ar || !(i23 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i23);
        ar[i23] = from[i23];
      }
    }
  return to4.concat(ar || Array.prototype.slice.call(from));
}
function __await(v14) {
  return this instanceof __await ? (this.v = v14, this) : new __await(v14);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g16 = generator.apply(thisArg, _arguments || []), i23, q12 = [];
  return i23 = {}, verb("next"), verb("throw"), verb("return"), i23[Symbol.asyncIterator] = function() {
    return this;
  }, i23;
  function verb(n19) {
    if (g16[n19])
      i23[n19] = function(v14) {
        return new Promise(function(a18, b16) {
          q12.push([n19, v14, a18, b16]) > 1 || resume(n19, v14);
        });
      };
  }
  __name(verb, "verb");
  function resume(n19, v14) {
    try {
      step(g16[n19](v14));
    } catch (e22) {
      settle(q12[0][3], e22);
    }
  }
  __name(resume, "resume");
  function step(r30) {
    r30.value instanceof __await ? Promise.resolve(r30.value.v).then(fulfill, reject) : settle(q12[0][2], r30);
  }
  __name(step, "step");
  function fulfill(value) {
    resume("next", value);
  }
  __name(fulfill, "fulfill");
  function reject(value) {
    resume("throw", value);
  }
  __name(reject, "reject");
  function settle(f24, v14) {
    if (f24(v14), q12.shift(), q12.length)
      resume(q12[0][0], q12[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o20) {
  var i23, p23;
  return i23 = {}, verb("next"), verb("throw", function(e22) {
    throw e22;
  }), verb("return"), i23[Symbol.iterator] = function() {
    return this;
  }, i23;
  function verb(n19, f24) {
    i23[n19] = o20[n19] ? function(v14) {
      return (p23 = !p23) ? { value: __await(o20[n19](v14)), done: false } : f24 ? f24(v14) : v14;
    } : f24;
  }
  __name(verb, "verb");
}
function __asyncValues(o20) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m22 = o20[Symbol.asyncIterator], i23;
  return m22 ? m22.call(o20) : (o20 = typeof __values === "function" ? __values(o20) : o20[Symbol.iterator](), i23 = {}, verb("next"), verb("throw"), verb("return"), i23[Symbol.asyncIterator] = function() {
    return this;
  }, i23);
  function verb(n19) {
    i23[n19] = o20[n19] && function(v14) {
      return new Promise(function(resolve, reject) {
        v14 = o20[n19](v14), settle(resolve, reject, v14.done, v14.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d19, v14) {
    Promise.resolve(v14).then(function(v15) {
      resolve({ value: v15, done: d19 });
    }, reject);
  }
  __name(settle, "settle");
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k16 in mod)
      if (k16 !== "default" && Object.prototype.hasOwnProperty.call(mod, k16))
        __createBinding(result, mod, k16);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f24) {
  if (kind === "a" && !f24)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f24 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f24 : kind === "a" ? f24.call(receiver) : f24 ? f24.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f24) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f24)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f24 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f24.call(receiver, value) : f24 ? f24.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
var extendStatics, __assign, __createBinding, __setModuleDefault;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.js"() {
    extendStatics = /* @__PURE__ */ __name(function(d19, b16) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d20, b17) {
        d20.__proto__ = b17;
      } || function(d20, b17) {
        for (var p23 in b17)
          if (Object.prototype.hasOwnProperty.call(b17, p23))
            d20[p23] = b17[p23];
      };
      return extendStatics(d19, b16);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t28) {
        for (var s22, i23 = 1, n19 = arguments.length; i23 < n19; i23++) {
          s22 = arguments[i23];
          for (var p23 in s22)
            if (Object.prototype.hasOwnProperty.call(s22, p23))
              t28[p23] = s22[p23];
        }
        return t28;
      }, "__assign");
      return __assign.apply(this, arguments);
    }, "__assign");
    __name(__rest, "__rest");
    __name(__decorate, "__decorate");
    __name(__param, "__param");
    __name(__esDecorate, "__esDecorate");
    __name(__runInitializers, "__runInitializers");
    __name(__propKey, "__propKey");
    __name(__setFunctionName, "__setFunctionName");
    __name(__metadata, "__metadata");
    __name(__awaiter, "__awaiter");
    __name(__generator, "__generator");
    __createBinding = Object.create ? function(o20, m22, k16, k22) {
      if (k22 === void 0)
        k22 = k16;
      var desc = Object.getOwnPropertyDescriptor(m22, k16);
      if (!desc || ("get" in desc ? !m22.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m22[k16];
        } };
      }
      Object.defineProperty(o20, k22, desc);
    } : function(o20, m22, k16, k22) {
      if (k22 === void 0)
        k22 = k16;
      o20[k22] = m22[k16];
    };
    __name(__exportStar, "__exportStar");
    __name(__values, "__values");
    __name(__read, "__read");
    __name(__spread, "__spread");
    __name(__spreadArrays, "__spreadArrays");
    __name(__spreadArray, "__spreadArray");
    __name(__await, "__await");
    __name(__asyncGenerator, "__asyncGenerator");
    __name(__asyncDelegator, "__asyncDelegator");
    __name(__asyncValues, "__asyncValues");
    __name(__makeTemplateObject, "__makeTemplateObject");
    __setModuleDefault = Object.create ? function(o20, v14) {
      Object.defineProperty(o20, "default", { enumerable: true, value: v14 });
    } : function(o20, v14) {
      o20["default"] = v14;
    };
    __name(__importStar, "__importStar");
    __name(__importDefault, "__importDefault");
    __name(__classPrivateFieldGet, "__classPrivateFieldGet");
    __name(__classPrivateFieldSet, "__classPrivateFieldSet");
    __name(__classPrivateFieldIn, "__classPrivateFieldIn");
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/constants.js
var require_constants = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
    exports.zeroRightClassName = "right-scroll-bar-position";
    exports.fullWidthClassName = "width-before-scroll-bar";
    exports.noScrollbarsClassName = "with-scroll-bars-hidden";
    exports.removedBarSizeVariable = "--removed-body-scroll-bar-size";
  }
});

// node_modules/use-callback-ref/dist/es5/assignRef.js
var require_assignRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/assignRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.assignRef = void 0;
    function assignRef(ref, value) {
      if (typeof ref === "function") {
        ref(value);
      } else if (ref) {
        ref.current = value;
      }
      return ref;
    }
    __name(assignRef, "assignRef");
    exports.assignRef = assignRef;
  }
});

// node_modules/use-callback-ref/dist/es5/useRef.js
var require_useRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/useRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useCallbackRef = void 0;
    var react_1 = require("react");
    function useCallbackRef(initialValue, callback) {
      var ref = (0, react_1.useState)(function() {
        return {
          // value
          value: initialValue,
          // last callback
          callback,
          // "memoized" public interface
          facade: {
            get current() {
              return ref.value;
            },
            set current(value) {
              var last = ref.value;
              if (last !== value) {
                ref.value = value;
                ref.callback(value, last);
              }
            }
          }
        };
      })[0];
      ref.callback = callback;
      return ref.facade;
    }
    __name(useCallbackRef, "useCallbackRef");
    exports.useCallbackRef = useCallbackRef;
  }
});

// node_modules/use-callback-ref/dist/es5/createRef.js
var require_createRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/createRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createCallbackRef = void 0;
    function createCallbackRef(callback) {
      var current = null;
      return {
        get current() {
          return current;
        },
        set current(value) {
          var last = current;
          if (last !== value) {
            current = value;
            callback(value, last);
          }
        }
      };
    }
    __name(createCallbackRef, "createCallbackRef");
    exports.createCallbackRef = createCallbackRef;
  }
});

// node_modules/use-callback-ref/dist/es5/mergeRef.js
var require_mergeRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/mergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function mergeRefs(refs) {
      return (0, createRef_1.createCallbackRef)(function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(mergeRefs, "mergeRefs");
    exports.mergeRefs = mergeRefs;
  }
});

// node_modules/use-callback-ref/dist/es5/useMergeRef.js
var require_useMergeRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/useMergeRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useMergeRefs = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useMergeRefs(refs, defaultValue) {
      return (0, useRef_1.useCallbackRef)(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
          return (0, assignRef_1.assignRef)(ref, newValue);
        });
      });
    }
    __name(useMergeRefs, "useMergeRefs");
    exports.useMergeRefs = useMergeRefs;
  }
});

// node_modules/use-callback-ref/dist/es5/useTransformRef.js
var require_useTransformRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/useTransformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useTransformRef = void 0;
    var assignRef_1 = require_assignRef();
    var useRef_1 = require_useRef();
    function useTransformRef(ref, transformer) {
      return (0, useRef_1.useCallbackRef)(null, function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(useTransformRef, "useTransformRef");
    exports.useTransformRef = useTransformRef;
  }
});

// node_modules/use-callback-ref/dist/es5/transformRef.js
var require_transformRef = __commonJS({
  "node_modules/use-callback-ref/dist/es5/transformRef.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.transformRef = void 0;
    var assignRef_1 = require_assignRef();
    var createRef_1 = require_createRef();
    function transformRef(ref, transformer) {
      return (0, createRef_1.createCallbackRef)(function(value) {
        return (0, assignRef_1.assignRef)(ref, transformer(value));
      });
    }
    __name(transformRef, "transformRef");
    exports.transformRef = transformRef;
  }
});

// node_modules/use-callback-ref/dist/es5/refToCallback.js
var require_refToCallback = __commonJS({
  "node_modules/use-callback-ref/dist/es5/refToCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = void 0;
    function refToCallback(ref) {
      return function(newValue) {
        if (typeof ref === "function") {
          ref(newValue);
        } else if (ref) {
          ref.current = newValue;
        }
      };
    }
    __name(refToCallback, "refToCallback");
    exports.refToCallback = refToCallback;
    var nullCallback = /* @__PURE__ */ __name(function() {
      return null;
    }, "nullCallback");
    var weakMem = /* @__PURE__ */ new WeakMap();
    var weakMemoize = /* @__PURE__ */ __name(function(ref) {
      var usedRef = ref || nullCallback;
      var storedRef = weakMem.get(usedRef);
      if (storedRef) {
        return storedRef;
      }
      var cb = refToCallback(usedRef);
      weakMem.set(usedRef, cb);
      return cb;
    }, "weakMemoize");
    function useRefToCallback(ref) {
      return weakMemoize(ref);
    }
    __name(useRefToCallback, "useRefToCallback");
    exports.useRefToCallback = useRefToCallback;
  }
});

// node_modules/use-callback-ref/dist/es5/index.js
var require_es52 = __commonJS({
  "node_modules/use-callback-ref/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
    var assignRef_1 = require_assignRef();
    Object.defineProperty(exports, "assignRef", { enumerable: true, get: function() {
      return assignRef_1.assignRef;
    } });
    var useRef_1 = require_useRef();
    Object.defineProperty(exports, "useCallbackRef", { enumerable: true, get: function() {
      return useRef_1.useCallbackRef;
    } });
    var createRef_1 = require_createRef();
    Object.defineProperty(exports, "createCallbackRef", { enumerable: true, get: function() {
      return createRef_1.createCallbackRef;
    } });
    var mergeRef_1 = require_mergeRef();
    Object.defineProperty(exports, "mergeRefs", { enumerable: true, get: function() {
      return mergeRef_1.mergeRefs;
    } });
    var useMergeRef_1 = require_useMergeRef();
    Object.defineProperty(exports, "useMergeRefs", { enumerable: true, get: function() {
      return useMergeRef_1.useMergeRefs;
    } });
    var useTransformRef_1 = require_useTransformRef();
    Object.defineProperty(exports, "useTransformRef", { enumerable: true, get: function() {
      return useTransformRef_1.useTransformRef;
    } });
    var transformRef_1 = require_transformRef();
    Object.defineProperty(exports, "transformRef", { enumerable: true, get: function() {
      return transformRef_1.transformRef;
    } });
    var refToCallback_1 = require_refToCallback();
    Object.defineProperty(exports, "refToCallback", { enumerable: true, get: function() {
      return refToCallback_1.refToCallback;
    } });
    Object.defineProperty(exports, "useRefToCallback", { enumerable: true, get: function() {
      return refToCallback_1.useRefToCallback;
    } });
  }
});

// node_modules/detect-node-es/es5/node.js
var require_node = __commonJS({
  "node_modules/detect-node-es/es5/node.js"(exports, module2) {
    module2.exports.isNode = Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) === "[object process]";
  }
});

// node_modules/use-sidecar/dist/es5/env.js
var require_env = __commonJS({
  "node_modules/use-sidecar/dist/es5/env.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.env = void 0;
    var detect_node_es_1 = require_node();
    exports.env = {
      isNode: detect_node_es_1.isNode,
      forceCache: false
    };
  }
});

// node_modules/use-sidecar/dist/es5/hook.js
var require_hook = __commonJS({
  "node_modules/use-sidecar/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useSidecar = void 0;
    var react_1 = require("react");
    var env_1 = require_env();
    var cache = /* @__PURE__ */ new WeakMap();
    var NO_OPTIONS = {};
    function useSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      if (env_1.env.isNode && !options.ssr) {
        return [null, null];
      }
      return useRealSidecar(importer, effect);
    }
    __name(useSidecar, "useSidecar");
    exports.useSidecar = useSidecar;
    function useRealSidecar(importer, effect) {
      var options = effect && effect.options || NO_OPTIONS;
      var couldUseCache = env_1.env.forceCache || env_1.env.isNode && !!options.ssr || !options.async;
      var _a = (0, react_1.useState)(couldUseCache ? function() {
        return cache.get(importer);
      } : void 0), Car = _a[0], setCar = _a[1];
      var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
      (0, react_1.useEffect)(function() {
        if (!Car) {
          importer().then(function(car) {
            var resolved = effect ? effect.read() : car.default || car;
            if (!resolved) {
              console.error("Sidecar error: with importer", importer);
              var error_1;
              if (effect) {
                console.error("Sidecar error: with medium", effect);
                error_1 = new Error("Sidecar medium was not found");
              } else {
                error_1 = new Error("Sidecar was not found in exports");
              }
              setError(function() {
                return error_1;
              });
              throw error_1;
            }
            cache.set(importer, resolved);
            setCar(function() {
              return resolved;
            });
          }, function(e22) {
            return setError(function() {
              return e22;
            });
          });
        }
      }, []);
      return [Car, error];
    }
    __name(useRealSidecar, "useRealSidecar");
  }
});

// node_modules/use-sidecar/dist/es5/hoc.js
var require_hoc = __commonJS({
  "node_modules/use-sidecar/dist/es5/hoc.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var hook_1 = require_hook();
    function sidecar(importer, errorComponent) {
      var ErrorCase = /* @__PURE__ */ __name(function() {
        return errorComponent;
      }, "ErrorCase");
      return /* @__PURE__ */ __name(function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
          return ErrorCase;
        }
        return Car ? React3.createElement(Car, tslib_1.__assign({}, props)) : null;
      }, "Sidecar");
    }
    __name(sidecar, "sidecar");
    exports.sidecar = sidecar;
  }
});

// node_modules/use-sidecar/dist/es5/config.js
var require_config = __commonJS({
  "node_modules/use-sidecar/dist/es5/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setConfig = exports.config = void 0;
    exports.config = {
      onError: function(e22) {
        return console.error(e22);
      }
    };
    var setConfig = /* @__PURE__ */ __name(function(conf) {
      Object.assign(exports.config, conf);
    }, "setConfig");
    exports.setConfig = setConfig;
  }
});

// node_modules/use-sidecar/dist/es5/medium.js
var require_medium = __commonJS({
  "node_modules/use-sidecar/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSidecarMedium = exports.createMedium = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    function ItoI(a18) {
      return a18;
    }
    __name(ItoI, "ItoI");
    function innerCreateMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      var buffer = [];
      var assigned = false;
      var medium = {
        read: function() {
          if (assigned) {
            throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
          }
          if (buffer.length) {
            return buffer[buffer.length - 1];
          }
          return defaults;
        },
        useMedium: function(data) {
          var item = middleware(data, assigned);
          buffer.push(item);
          return function() {
            buffer = buffer.filter(function(x17) {
              return x17 !== item;
            });
          };
        },
        assignSyncMedium: function(cb) {
          assigned = true;
          while (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
          }
          buffer = {
            push: function(x17) {
              return cb(x17);
            },
            filter: function() {
              return buffer;
            }
          };
        },
        assignMedium: function(cb) {
          assigned = true;
          var pendingQueue = [];
          if (buffer.length) {
            var cbs = buffer;
            buffer = [];
            cbs.forEach(cb);
            pendingQueue = buffer;
          }
          var executeQueue = /* @__PURE__ */ __name(function() {
            var cbs2 = pendingQueue;
            pendingQueue = [];
            cbs2.forEach(cb);
          }, "executeQueue");
          var cycle = /* @__PURE__ */ __name(function() {
            return Promise.resolve().then(executeQueue);
          }, "cycle");
          cycle();
          buffer = {
            push: function(x17) {
              pendingQueue.push(x17);
              cycle();
            },
            filter: function(filter) {
              pendingQueue = pendingQueue.filter(filter);
              return buffer;
            }
          };
        }
      };
      return medium;
    }
    __name(innerCreateMedium, "innerCreateMedium");
    function createMedium(defaults, middleware) {
      if (middleware === void 0) {
        middleware = ItoI;
      }
      return innerCreateMedium(defaults, middleware);
    }
    __name(createMedium, "createMedium");
    exports.createMedium = createMedium;
    function createSidecarMedium(options) {
      if (options === void 0) {
        options = {};
      }
      var medium = innerCreateMedium(null);
      medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
      return medium;
    }
    __name(createSidecarMedium, "createSidecarMedium");
    exports.createSidecarMedium = createSidecarMedium;
  }
});

// node_modules/use-sidecar/dist/es5/renderProp.js
var require_renderProp = __commonJS({
  "node_modules/use-sidecar/dist/es5/renderProp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderCar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var react_1 = require("react");
    function renderCar(WrappedComponent, defaults) {
      function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(/* @__PURE__ */ __name(function SideTarget() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          (0, react_1.useLayoutEffect)(function() {
            stateRef.current(args);
          });
          return null;
        }, "SideTarget"), []);
        return React3.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
      }
      __name(State, "State");
      var Children4 = React3.memo(function(_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function() {
          stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
      }, function() {
        return true;
      });
      return /* @__PURE__ */ __name(function Combiner(props) {
        var defaultState = React3.useRef(defaults(props));
        var ref = React3.useRef(function(state) {
          return defaultState.current = state;
        });
        return React3.createElement(
          React3.Fragment,
          null,
          React3.createElement(State, { stateRef: ref, props }),
          React3.createElement(Children4, { stateRef: ref, defaultState, children: props.children })
        );
      }, "Combiner");
    }
    __name(renderCar, "renderCar");
    exports.renderCar = renderCar;
  }
});

// node_modules/use-sidecar/dist/es5/exports.js
var require_exports = __commonJS({
  "node_modules/use-sidecar/dist/es5/exports.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var SideCar = /* @__PURE__ */ __name(function(_a) {
      var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
      if (!sideCar) {
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
      }
      var Target = sideCar.read();
      if (!Target) {
        throw new Error("Sidecar medium not found");
      }
      return React3.createElement(Target, tslib_1.__assign({}, rest));
    }, "SideCar");
    SideCar.isSideCarExport = true;
    function exportSidecar(medium, exported) {
      medium.useMedium(exported);
      return SideCar;
    }
    __name(exportSidecar, "exportSidecar");
    exports.exportSidecar = exportSidecar;
  }
});

// node_modules/use-sidecar/dist/es5/index.js
var require_es53 = __commonJS({
  "node_modules/use-sidecar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
    var hoc_1 = require_hoc();
    Object.defineProperty(exports, "sidecar", { enumerable: true, get: function() {
      return hoc_1.sidecar;
    } });
    var hook_1 = require_hook();
    Object.defineProperty(exports, "useSidecar", { enumerable: true, get: function() {
      return hook_1.useSidecar;
    } });
    var config_1 = require_config();
    Object.defineProperty(exports, "setConfig", { enumerable: true, get: function() {
      return config_1.setConfig;
    } });
    var medium_1 = require_medium();
    Object.defineProperty(exports, "createMedium", { enumerable: true, get: function() {
      return medium_1.createMedium;
    } });
    Object.defineProperty(exports, "createSidecarMedium", { enumerable: true, get: function() {
      return medium_1.createSidecarMedium;
    } });
    var renderProp_1 = require_renderProp();
    Object.defineProperty(exports, "renderCar", { enumerable: true, get: function() {
      return renderProp_1.renderCar;
    } });
    var exports_1 = require_exports();
    Object.defineProperty(exports, "exportSidecar", { enumerable: true, get: function() {
      return exports_1.exportSidecar;
    } });
  }
});

// node_modules/react-remove-scroll/dist/es5/medium.js
var require_medium2 = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/medium.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.effectCar = void 0;
    var use_sidecar_1 = require_es53();
    exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();
  }
});

// node_modules/react-remove-scroll/dist/es5/UI.js
var require_UI = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/UI.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var constants_1 = require_constants();
    var use_callback_ref_1 = require_es52();
    var medium_1 = require_medium2();
    var nothing = /* @__PURE__ */ __name(function() {
      return;
    }, "nothing");
    var RemoveScroll = React3.forwardRef(function(props, parentRef) {
      var ref = React3.useRef(null);
      var _a = React3.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
      }), callbacks = _a[0], setCallbacks = _a[1];
      var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? "div" : _b, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]);
      var SideCar = sideCar;
      var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
      var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
      return React3.createElement(
        React3.Fragment,
        null,
        enabled && React3.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar, shards, noIsolation, inert, setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref }),
        forwardProps ? React3.cloneElement(React3.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef })) : React3.createElement(Container, tslib_1.__assign({}, containerProps, { className, ref: containerRef }), children)
      );
    });
    exports.RemoveScroll = RemoveScroll;
    RemoveScroll.defaultProps = {
      enabled: true,
      removeScrollBar: true,
      inert: false
    };
    RemoveScroll.classNames = {
      fullWidth: constants_1.fullWidthClassName,
      zeroRight: constants_1.zeroRightClassName
    };
  }
});

// node_modules/get-nonce/dist/es5/index.js
var require_es54 = __commonJS({
  "node_modules/get-nonce/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var currentNonce;
    exports.setNonce = function(nonce) {
      currentNonce = nonce;
    };
    exports.getNonce = function() {
      if (currentNonce) {
        return currentNonce;
      }
      if (typeof __webpack_nonce__ !== "undefined") {
        return __webpack_nonce__;
      }
      return void 0;
    };
  }
});

// node_modules/react-style-singleton/dist/es5/singleton.js
var require_singleton = __commonJS({
  "node_modules/react-style-singleton/dist/es5/singleton.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.stylesheetSingleton = void 0;
    var get_nonce_1 = require_es54();
    function makeStyleTag() {
      if (!document)
        return null;
      var tag = document.createElement("style");
      tag.type = "text/css";
      var nonce = (0, get_nonce_1.getNonce)();
      if (nonce) {
        tag.setAttribute("nonce", nonce);
      }
      return tag;
    }
    __name(makeStyleTag, "makeStyleTag");
    function injectStyles(tag, css) {
      if (tag.styleSheet) {
        tag.styleSheet.cssText = css;
      } else {
        tag.appendChild(document.createTextNode(css));
      }
    }
    __name(injectStyles, "injectStyles");
    function insertStyleTag(tag) {
      var head = document.head || document.getElementsByTagName("head")[0];
      head.appendChild(tag);
    }
    __name(insertStyleTag, "insertStyleTag");
    var stylesheetSingleton = /* @__PURE__ */ __name(function() {
      var counter = 0;
      var stylesheet = null;
      return {
        add: function(style) {
          if (counter == 0) {
            if (stylesheet = makeStyleTag()) {
              injectStyles(stylesheet, style);
              insertStyleTag(stylesheet);
            }
          }
          counter++;
        },
        remove: function() {
          counter--;
          if (!counter && stylesheet) {
            stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
            stylesheet = null;
          }
        }
      };
    }, "stylesheetSingleton");
    exports.stylesheetSingleton = stylesheetSingleton;
  }
});

// node_modules/react-style-singleton/dist/es5/hook.js
var require_hook2 = __commonJS({
  "node_modules/react-style-singleton/dist/es5/hook.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var singleton_1 = require_singleton();
    var styleHookSingleton = /* @__PURE__ */ __name(function() {
      var sheet = (0, singleton_1.stylesheetSingleton)();
      return function(styles, isDynamic) {
        React3.useEffect(function() {
          sheet.add(styles);
          return function() {
            sheet.remove();
          };
        }, [styles && isDynamic]);
      };
    }, "styleHookSingleton");
    exports.styleHookSingleton = styleHookSingleton;
  }
});

// node_modules/react-style-singleton/dist/es5/component.js
var require_component = __commonJS({
  "node_modules/react-style-singleton/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleSingleton = void 0;
    var hook_1 = require_hook2();
    var styleSingleton = /* @__PURE__ */ __name(function() {
      var useStyle = (0, hook_1.styleHookSingleton)();
      var Sheet = /* @__PURE__ */ __name(function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
      }, "Sheet");
      return Sheet;
    }, "styleSingleton");
    exports.styleSingleton = styleSingleton;
  }
});

// node_modules/react-style-singleton/dist/es5/index.js
var require_es55 = __commonJS({
  "node_modules/react-style-singleton/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
    var component_1 = require_component();
    Object.defineProperty(exports, "styleSingleton", { enumerable: true, get: function() {
      return component_1.styleSingleton;
    } });
    var singleton_1 = require_singleton();
    Object.defineProperty(exports, "stylesheetSingleton", { enumerable: true, get: function() {
      return singleton_1.stylesheetSingleton;
    } });
    var hook_1 = require_hook2();
    Object.defineProperty(exports, "styleHookSingleton", { enumerable: true, get: function() {
      return hook_1.styleHookSingleton;
    } });
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/utils.js
var require_utils = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.zeroGap = void 0;
    exports.zeroGap = {
      left: 0,
      top: 0,
      right: 0,
      gap: 0
    };
    var parse = /* @__PURE__ */ __name(function(x17) {
      return parseInt(x17 || "", 10) || 0;
    }, "parse");
    var getOffset = /* @__PURE__ */ __name(function(gapMode) {
      var cs = window.getComputedStyle(document.body);
      var left = cs[gapMode === "padding" ? "paddingLeft" : "marginLeft"];
      var top = cs[gapMode === "padding" ? "paddingTop" : "marginTop"];
      var right = cs[gapMode === "padding" ? "paddingRight" : "marginRight"];
      return [parse(left), parse(top), parse(right)];
    }, "getOffset");
    var getGapWidth = /* @__PURE__ */ __name(function(gapMode) {
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      if (typeof window === "undefined") {
        return exports.zeroGap;
      }
      var offsets = getOffset(gapMode);
      var documentWidth = document.documentElement.clientWidth;
      var windowWidth = window.innerWidth;
      return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
      };
    }, "getGapWidth");
    exports.getGapWidth = getGapWidth;
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/component.js
var require_component2 = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/component.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollBar = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var react_style_singleton_1 = require_es55();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var Style = (0, react_style_singleton_1.styleSingleton)();
    var getStyles = /* @__PURE__ */ __name(function(_a, allowRelative, gapMode, important) {
      var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
      if (gapMode === void 0) {
        gapMode = "margin";
      }
      return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === "margin" && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === "padding" && "padding-right: ".concat(gap, "px ").concat(important, ";")
      ].filter(Boolean).join(""), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
    }, "getStyles");
    var RemoveScrollBar = /* @__PURE__ */ __name(function(props) {
      var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? "margin" : _a;
      var gap = React3.useMemo(function() {
        return (0, utils_1.getGapWidth)(gapMode);
      }, [gapMode]);
      return React3.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? "!important" : "") });
    }, "RemoveScrollBar");
    exports.RemoveScrollBar = RemoveScrollBar;
  }
});

// node_modules/react-remove-scroll-bar/dist/es5/index.js
var require_es56 = __commonJS({
  "node_modules/react-remove-scroll-bar/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
    var component_1 = require_component2();
    Object.defineProperty(exports, "RemoveScrollBar", { enumerable: true, get: function() {
      return component_1.RemoveScrollBar;
    } });
    var constants_1 = require_constants();
    Object.defineProperty(exports, "zeroRightClassName", { enumerable: true, get: function() {
      return constants_1.zeroRightClassName;
    } });
    Object.defineProperty(exports, "fullWidthClassName", { enumerable: true, get: function() {
      return constants_1.fullWidthClassName;
    } });
    Object.defineProperty(exports, "noScrollbarsClassName", { enumerable: true, get: function() {
      return constants_1.noScrollbarsClassName;
    } });
    Object.defineProperty(exports, "removedBarSizeVariable", { enumerable: true, get: function() {
      return constants_1.removedBarSizeVariable;
    } });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "getGapWidth", { enumerable: true, get: function() {
      return utils_1.getGapWidth;
    } });
  }
});

// node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js
var require_aggresiveCapture = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/aggresiveCapture.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.nonPassive = void 0;
    var passiveSupported = false;
    if (typeof window !== "undefined") {
      try {
        options = Object.defineProperty({}, "passive", {
          get: function() {
            passiveSupported = true;
            return true;
          }
        });
        window.addEventListener("test", options, options);
        window.removeEventListener("test", options, options);
      } catch (err) {
        passiveSupported = false;
      }
    }
    var options;
    exports.nonPassive = passiveSupported ? { passive: false } : false;
  }
});

// node_modules/react-remove-scroll/dist/es5/handleScroll.js
var require_handleScroll = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/handleScroll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.handleScroll = exports.locationCouldBeScrolled = void 0;
    var alwaysContainsScroll = /* @__PURE__ */ __name(function(node) {
      return node.tagName === "TEXTAREA";
    }, "alwaysContainsScroll");
    var elementCanBeScrolled = /* @__PURE__ */ __name(function(node, overflow) {
      var styles = window.getComputedStyle(node);
      return (
        // not-not-scrollable
        styles[overflow] !== "hidden" && // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === "visible")
      );
    }, "elementCanBeScrolled");
    var elementCouldBeVScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowY");
    }, "elementCouldBeVScrolled");
    var elementCouldBeHScrolled = /* @__PURE__ */ __name(function(node) {
      return elementCanBeScrolled(node, "overflowX");
    }, "elementCouldBeHScrolled");
    var locationCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      var current = node;
      do {
        if (typeof ShadowRoot !== "undefined" && current instanceof ShadowRoot) {
          current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
          var _a = getScrollVariables(axis, current), s22 = _a[1], d19 = _a[2];
          if (s22 > d19) {
            return true;
          }
        }
        current = current.parentNode;
      } while (current && current !== document.body);
      return false;
    }, "locationCouldBeScrolled");
    exports.locationCouldBeScrolled = locationCouldBeScrolled;
    var getVScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
      return [
        scrollTop,
        scrollHeight,
        clientHeight
      ];
    }, "getVScrollVariables");
    var getHScrollVariables = /* @__PURE__ */ __name(function(_a) {
      var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
      return [
        scrollLeft,
        scrollWidth,
        clientWidth
      ];
    }, "getHScrollVariables");
    var elementCouldBeScrolled = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
    }, "elementCouldBeScrolled");
    var getScrollVariables = /* @__PURE__ */ __name(function(axis, node) {
      return axis === "v" ? getVScrollVariables(node) : getHScrollVariables(node);
    }, "getScrollVariables");
    var getDirectionFactor = /* @__PURE__ */ __name(function(axis, direction) {
      return axis === "h" && direction === "rtl" ? -1 : 1;
    }, "getDirectionFactor");
    var handleScroll = /* @__PURE__ */ __name(function(axis, endTarget, event, sourceDelta, noOverscroll) {
      var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
      var delta = directionFactor * sourceDelta;
      var target = event.target;
      var targetInLock = endTarget.contains(target);
      var shouldCancelScroll = false;
      var isDeltaPositive = delta > 0;
      var availableScroll = 0;
      var availableScrollTop = 0;
      do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
          if (elementCouldBeScrolled(axis, target)) {
            availableScroll += elementScroll;
            availableScrollTop += position;
          }
        }
        target = target.parentNode;
      } while (
        // portaled content
        !targetInLock && target !== document.body || // self content
        targetInLock && (endTarget.contains(target) || endTarget === target)
      );
      if (isDeltaPositive && (noOverscroll && availableScroll === 0 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
      } else if (!isDeltaPositive && (noOverscroll && availableScrollTop === 0 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
      }
      return shouldCancelScroll;
    }, "handleScroll");
    exports.handleScroll = handleScroll;
  }
});

// node_modules/react-remove-scroll/dist/es5/SideEffect.js
var require_SideEffect = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/SideEffect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var react_remove_scroll_bar_1 = require_es56();
    var react_style_singleton_1 = require_es55();
    var aggresiveCapture_1 = require_aggresiveCapture();
    var handleScroll_1 = require_handleScroll();
    var getTouchXY = /* @__PURE__ */ __name(function(event) {
      return "changedTouches" in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
    }, "getTouchXY");
    exports.getTouchXY = getTouchXY;
    var getDeltaXY = /* @__PURE__ */ __name(function(event) {
      return [event.deltaX, event.deltaY];
    }, "getDeltaXY");
    exports.getDeltaXY = getDeltaXY;
    var extractRef = /* @__PURE__ */ __name(function(ref) {
      return ref && "current" in ref ? ref.current : ref;
    }, "extractRef");
    var deltaCompare = /* @__PURE__ */ __name(function(x17, y14) {
      return x17[0] === y14[0] && x17[1] === y14[1];
    }, "deltaCompare");
    var generateStyle = /* @__PURE__ */ __name(function(id) {
      return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
    }, "generateStyle");
    var idCounter = 0;
    var lockStack = [];
    function RemoveScrollSideCar(props) {
      var shouldPreventQueue = React3.useRef([]);
      var touchStartRef = React3.useRef([0, 0]);
      var activeAxis = React3.useRef();
      var id = React3.useState(idCounter++)[0];
      var Style = React3.useState(function() {
        return (0, react_style_singleton_1.styleSingleton)();
      })[0];
      var lastProps = React3.useRef(props);
      React3.useEffect(function() {
        lastProps.current = props;
      }, [props]);
      React3.useEffect(function() {
        if (props.inert) {
          document.body.classList.add("block-interactivity-".concat(id));
          var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
          allow_1.forEach(function(el) {
            return el.classList.add("allow-interactivity-".concat(id));
          });
          return function() {
            document.body.classList.remove("block-interactivity-".concat(id));
            allow_1.forEach(function(el) {
              return el.classList.remove("allow-interactivity-".concat(id));
            });
          };
        }
        return;
      }, [props.inert, props.lockRef.current, props.shards]);
      var shouldCancelEvent = React3.useCallback(function(event, parent) {
        if ("touches" in event && event.touches.length === 2) {
          return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = "deltaX" in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = "deltaY" in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? "h" : "v";
        if ("touches" in event && moveDirection === "h" && target.type === "range") {
          return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
          return true;
        }
        if (canBeScrolledInMainDirection) {
          currentAxis = moveDirection;
        } else {
          currentAxis = moveDirection === "v" ? "h" : "v";
          canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        }
        if (!canBeScrolledInMainDirection) {
          return false;
        }
        if (!activeAxis.current && "changedTouches" in event && (deltaX || deltaY)) {
          activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
          return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === "h" ? deltaX : deltaY, true);
      }, []);
      var shouldPrevent = React3.useCallback(function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
          return;
        }
        var delta = "deltaY" in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e22) {
          return e22.name === event.type && e22.target === event.target && deltaCompare(e22.delta, delta);
        })[0];
        if (sourceEvent && sourceEvent.should) {
          if (event.cancelable) {
            event.preventDefault();
          }
          return;
        }
        if (!sourceEvent) {
          var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
            return node.contains(event.target);
          });
          var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
          if (shouldStop) {
            if (event.cancelable) {
              event.preventDefault();
            }
          }
        }
      }, []);
      var shouldCancel = React3.useCallback(function(name, delta, target, should) {
        var event = { name, delta, target, should };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e22) {
            return e22 !== event;
          });
        }, 1);
      }, []);
      var scrollTouchStart = React3.useCallback(function(event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = void 0;
      }, []);
      var scrollWheel = React3.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      var scrollTouchMove = React3.useCallback(function(event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
      }, []);
      React3.useEffect(function() {
        lockStack.push(Style);
        props.setCallbacks({
          onScrollCapture: scrollWheel,
          onWheelCapture: scrollWheel,
          onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function() {
          lockStack = lockStack.filter(function(inst) {
            return inst !== Style;
          });
          document.removeEventListener("wheel", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchmove", shouldPrevent, aggresiveCapture_1.nonPassive);
          document.removeEventListener("touchstart", scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
      }, []);
      var removeScrollBar = props.removeScrollBar, inert = props.inert;
      return React3.createElement(
        React3.Fragment,
        null,
        inert ? React3.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React3.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: "margin" }) : null
      );
    }
    __name(RemoveScrollSideCar, "RemoveScrollSideCar");
    exports.RemoveScrollSideCar = RemoveScrollSideCar;
  }
});

// node_modules/react-remove-scroll/dist/es5/sidecar.js
var require_sidecar = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/sidecar.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var use_sidecar_1 = require_es53();
    var SideEffect_1 = require_SideEffect();
    var medium_1 = require_medium2();
    exports.default = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);
  }
});

// node_modules/react-remove-scroll/dist/es5/Combination.js
var require_Combination = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/Combination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var React3 = tslib_1.__importStar(require("react"));
    var UI_1 = require_UI();
    var sidecar_1 = tslib_1.__importDefault(require_sidecar());
    var ReactRemoveScroll = React3.forwardRef(function(props, ref) {
      return React3.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref, sideCar: sidecar_1.default }));
    });
    ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
    exports.default = ReactRemoveScroll;
  }
});

// node_modules/react-remove-scroll/dist/es5/index.js
var require_es57 = __commonJS({
  "node_modules/react-remove-scroll/dist/es5/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RemoveScroll = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var Combination_1 = tslib_1.__importDefault(require_Combination());
    exports.RemoveScroll = Combination_1.default;
  }
});

// node_modules/@tamagui/get-font-sized/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var c26 = Object.defineProperty;
    var h16 = Object.getOwnPropertyDescriptor;
    var b16 = Object.getOwnPropertyNames;
    var T16 = Object.prototype.hasOwnProperty;
    var v14 = /* @__PURE__ */ __name((e22, o20) => {
      for (var n19 in o20)
        c26(e22, n19, { get: o20[n19], enumerable: true });
    }, "v");
    var E16 = /* @__PURE__ */ __name((e22, o20, n19, i23) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let t28 of b16(o20))
          !T16.call(e22, t28) && t28 !== n19 && c26(e22, t28, { get: () => o20[t28], enumerable: !(i23 = h16(o20, t28)) || i23.enumerable });
      return e22;
    }, "E");
    var N11 = /* @__PURE__ */ __name((e22) => E16(c26({}, "__esModule", { value: true }), e22), "N");
    var D13 = {};
    v14(D13, { getFontSized: () => V15 });
    module2.exports = N11(D13);
    var r30 = require("@tamagui/core-node");
    var V15 = /* @__PURE__ */ __name((e22 = "$true", { fonts: o20, props: n19 }) => {
      var f24, u15, y14;
      const i23 = (0, r30.getVariableValue)(n19.fontFamily) || "$body", t28 = o20[i23] || o20.$body;
      if (!t28)
        return process.env.NODE_ENV === "development" && console.warn("\u26A0\uFE0F no font found", { family: i23, fontTokens: Object.keys(o20), sizeTokenIn: e22 }), {};
      const g16 = t28.family, s22 = e22 === "$true" ? $8(t28) : e22, z13 = n19.fontSize || t28.size[s22], S19 = n19.lineHeight || t28.lineHeight[s22], d19 = n19.fontWeight || t28.weight[s22], k16 = n19.letterSpacing || t28.letterSpacing[s22], m22 = n19.fontStyle || ((f24 = t28.style) == null ? void 0 : f24[s22]), F16 = n19.textTransform || ((u15 = t28.transform) == null ? void 0 : u15[s22]), a18 = { color: n19.color || ((y14 = t28.color) == null ? void 0 : y14[s22]), fontStyle: m22, textTransform: F16, fontFamily: g16, fontWeight: d19, letterSpacing: k16, fontSize: z13, lineHeight: S19 };
      return process.env.NODE_ENV === "development" && n19.debug && (console.groupCollapsed("  \u{1F539} getFontSized", e22, s22), console.log({ style: a18, props: n19, font: t28 }), console.groupEnd()), a18;
    }, "V");
    var l21 = /* @__PURE__ */ new WeakMap();
    function $8(e22) {
      if (typeof e22 == "object" && l21.has(e22))
        return l21.get(e22);
      const o20 = "$true" in e22.size ? e22.size : (0, r30.getTokens)().size, n19 = o20.$true, i23 = n19 ? Object.keys(o20).find((t28) => t28 !== "$true" && o20[t28].val === n19.val) : null;
      return !n19 || !i23 ? (process.env.NODE_ENV === "development" && console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`), Object.keys(e22.size)[3]) : (l21.set(e22, i23), i23);
    }
    __name($8, "$");
  }
});

// node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var h16 = Object.defineProperty;
    var f24 = Object.getOwnPropertyDescriptor;
    var u15 = Object.getOwnPropertyNames;
    var I10 = Object.prototype.hasOwnProperty;
    var l21 = /* @__PURE__ */ __name((a18, t28) => {
      for (var e22 in t28)
        h16(a18, e22, { get: t28[e22], enumerable: true });
    }, "l");
    var S19 = /* @__PURE__ */ __name((a18, t28, e22, s22) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let o20 of u15(t28))
          !I10.call(a18, o20) && o20 !== e22 && h16(a18, o20, { get: () => t28[o20], enumerable: !(s22 = f24(t28, o20)) || s22.enumerable });
      return a18;
    }, "S");
    var P16 = /* @__PURE__ */ __name((a18) => S19(h16({}, "__esModule", { value: true }), a18), "P");
    var R17 = {};
    l21(R17, { Image: () => p23 });
    module2.exports = P16(R17);
    var y14 = require("react/jsx-runtime");
    var i23 = require("@tamagui/core-node");
    var m22 = require("react");
    var r30 = require("react-native-web-lite");
    (0, i23.setupReactNative)({ Image: r30.Image });
    var g16 = (0, i23.styled)(r30.Image, { name: "Image", position: "relative", source: { uri: "" }, zIndex: 1 });
    var c26 = false;
    var p23 = g16.extractable((0, m22.forwardRef)((a18, t28) => {
      const e22 = (0, i23.useMediaPropsActive)(a18), { src: s22, source: o20, ...n19 } = e22;
      process.env.NODE_ENV === "development" && typeof s22 == "string" && (typeof e22.width == "string" && e22.width[0] !== "$" || typeof e22.height == "string" && e22.height[0] !== "$") && (c26 || (c26 = true, console.warn('React Native expects a numerical width/height. If you want to use a percent you must define the "source" prop with width, height, and uri.')));
      const d19 = typeof s22 == "string" ? { uri: s22, ...i23.isWeb && { width: e22.width, height: e22.height } } : o20 ?? s22;
      return (0, y14.jsx)(g16, { ref: t28, source: d19, ...n19 });
    }));
    p23.getSize = r30.Image.getSize, p23.getSizeWithHeaders = r30.Image.getSizeWithHeaders, p23.prefetch = r30.Image.prefetch, p23.prefetchWithMetadata = r30.Image.prefetchWithMetadata, p23.abortPrefetch = r30.Image.abortPrefetch, p23.queryCache = r30.Image.queryCache;
  }
});

// node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_Image(), module2.exports);
  }
});

// node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    "use strict";
    var u15 = Object.defineProperty;
    var a18 = Object.getOwnPropertyDescriptor;
    var F16 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var k16 = /* @__PURE__ */ __name((n19, e22) => {
      for (var t28 in e22)
        u15(n19, t28, { get: e22[t28], enumerable: true });
    }, "k");
    var T16 = /* @__PURE__ */ __name((n19, e22, t28, f24) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let o20 of F16(e22))
          !S19.call(n19, o20) && o20 !== t28 && u15(n19, o20, { get: () => e22[o20], enumerable: !(f24 = a18(e22, o20)) || f24.enumerable });
      return n19;
    }, "T");
    var b16 = /* @__PURE__ */ __name((n19) => T16(u15({}, "__esModule", { value: true }), n19), "b");
    var x17 = {};
    k16(x17, { getFontSize: () => m22, getFontSizeToken: () => c26, getFontSizeVariable: () => z13 });
    module2.exports = b16(x17);
    var s22 = require("@tamagui/core-node");
    var m22 = /* @__PURE__ */ __name((n19, e22) => {
      const t28 = z13(n19, e22);
      return (0, s22.isVariable)(t28) ? +t28.val : t28 ? +t28 : 16;
    }, "m");
    var z13 = /* @__PURE__ */ __name((n19, e22) => {
      const t28 = c26(n19, e22);
      return t28 ? (0, s22.getConfig)().fontsParsed[(e22 == null ? void 0 : e22.font) || "$body"].size[t28] : n19;
    }, "z");
    var c26 = /* @__PURE__ */ __name((n19, e22) => {
      if (typeof n19 == "number")
        return null;
      const t28 = (e22 == null ? void 0 : e22.relativeSize) || 0, o20 = (0, s22.getConfig)().fontsParsed[(e22 == null ? void 0 : e22.font) || "$body"].size, i23 = n19 || ("$true" in o20 ? "$true" : "$4"), r30 = Object.keys(o20);
      let l21 = r30.indexOf(i23);
      l21 === -1 && i23.endsWith(".5") && (l21 = r30.indexOf(i23.replace(".5", ""))), process.env.NODE_ENV === "development" && l21 === -1 && console.warn("No font size found", i23, e22, "in size tokens", r30);
      const d19 = Math.min(Math.max(0, l21 + t28), r30.length - 1);
      return r30[d19] ?? i23;
    }, "c");
  }
});

// node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_getFontSize(), module2.exports);
  }
});

// node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var u15 = Object.defineProperty;
    var a18 = Object.getOwnPropertyDescriptor;
    var b16 = Object.getOwnPropertyNames;
    var c26 = Object.prototype.hasOwnProperty;
    var h16 = /* @__PURE__ */ __name((m22, n19) => {
      for (var r30 in n19)
        u15(m22, r30, { get: n19[r30], enumerable: true });
    }, "h");
    var i23 = /* @__PURE__ */ __name((m22, n19, r30, t28) => {
      if (n19 && typeof n19 == "object" || typeof n19 == "function")
        for (let e22 of b16(n19))
          !c26.call(m22, e22) && e22 !== r30 && u15(m22, e22, { get: () => n19[e22], enumerable: !(t28 = a18(n19, e22)) || t28.enumerable });
      return m22;
    }, "i");
    var o20 = /* @__PURE__ */ __name((m22) => i23(u15({}, "__esModule", { value: true }), m22), "o");
    var x17 = {};
    h16(x17, { clamp: () => p23 });
    module2.exports = o20(x17);
    function p23(m22, [n19, r30]) {
      return Math.min(r30, Math.max(n19, m22));
    }
    __name(p23, "p");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    "use strict";
    var E16 = Object.defineProperty;
    var u15 = Object.getOwnPropertyDescriptor;
    var a18 = Object.getOwnPropertyNames;
    var l21 = Object.prototype.hasOwnProperty;
    var s22 = /* @__PURE__ */ __name((n19, e22) => {
      for (var t28 in e22)
        E16(n19, t28, { get: e22[t28], enumerable: true });
    }, "s");
    var v14 = /* @__PURE__ */ __name((n19, e22, t28, d19) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let r30 of a18(e22))
          !l21.call(n19, r30) && r30 !== t28 && E16(n19, r30, { get: () => e22[r30], enumerable: !(d19 = u15(e22, r30)) || d19.enumerable });
      return n19;
    }, "v");
    var f24 = /* @__PURE__ */ __name((n19) => v14(E16({}, "__esModule", { value: true }), n19), "f");
    var p23 = {};
    s22(p23, { composeEventHandlers: () => i23 });
    module2.exports = f24(p23);
    function i23(n19, e22, { checkDefaultPrevented: t28 = true } = {}) {
      return !n19 || !e22 ? e22 || n19 : function(r30) {
        if (n19 == null || n19(r30), !r30 || !(t28 && "defaultPrevented" in r30) || "defaultPrevented" in r30 && !r30.defaultPrevented)
          return e22 == null ? void 0 : e22(r30);
      };
    }
    __name(i23, "i");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var x17 = Object.defineProperty;
    var N11 = Object.getOwnPropertyDescriptor;
    var O10 = Object.getOwnPropertyNames;
    var v14 = Object.prototype.hasOwnProperty;
    var I10 = /* @__PURE__ */ __name((s22, n19) => {
      for (var i23 in n19)
        x17(s22, i23, { get: n19[i23], enumerable: true });
    }, "I");
    var K10 = /* @__PURE__ */ __name((s22, n19, i23, t28) => {
      if (n19 && typeof n19 == "object" || typeof n19 == "function")
        for (let r30 of O10(n19))
          !v14.call(s22, r30) && r30 !== i23 && x17(s22, r30, { get: () => n19[r30], enumerable: !(t28 = N11(n19, r30)) || t28.enumerable });
      return s22;
    }, "K");
    var S19 = /* @__PURE__ */ __name((s22) => K10(x17({}, "__esModule", { value: true }), s22), "S");
    var j13 = {};
    I10(j13, { concatClassName: () => _13 });
    module2.exports = S19(j13);
    function _13(s22) {
      const n19 = arguments, i23 = [];
      let t28 = "";
      const r30 = n19.length;
      let l21 = null;
      for (let y14 = r30; y14 >= 0; y14--) {
        const c26 = n19[y14];
        if (!c26)
          continue;
        if (!Array.isArray(c26) && typeof c26 != "string") {
          l21 = l21 || [], l21.push(c26);
          continue;
        }
        const g16 = Array.isArray(c26) ? c26 : c26.split(" "), A18 = g16.length;
        for (let d19 = A18 - 1; d19 >= 0; d19--) {
          const e22 = g16[d19];
          if (!e22 || e22 === " ")
            continue;
          if (e22[0] !== "_") {
            t28 = e22 + " " + t28;
            continue;
          }
          const u15 = e22.indexOf("-");
          if (u15 < 1) {
            t28 = e22 + " " + t28;
            continue;
          }
          const C14 = e22[u15 + 1] === "_", m22 = e22.slice(1, e22.lastIndexOf("-")), a18 = C14 ? e22.slice(u15 + 2, u15 + 7) : null, h16 = a18 ? m22 + a18 : m22;
          if (i23.indexOf(h16) > -1)
            continue;
          i23.push(h16);
          const f24 = m22;
          f24 && l21 && l21.some((o20) => {
            if (a18) {
              const p23 = b16[a18];
              return o20 && o20[p23] && f24 in o20[p23] && o20[p23] !== null;
            }
            return o20 && f24 in o20 && o20[f24] !== null;
          }) || (t28 = e22 + " " + t28);
        }
      }
      return t28;
    }
    __name(_13, "_");
    var b16 = { hover: "hoverStyle", focus: "focusStyle", press: "pressStyle" };
  }
});

// node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    "use strict";
    var u15 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var f24 = Object.getOwnPropertyNames;
    var g16 = Object.prototype.hasOwnProperty;
    var h16 = /* @__PURE__ */ __name((t28, e22) => {
      for (var o20 in e22)
        u15(t28, o20, { get: e22[o20], enumerable: true });
    }, "h");
    var x17 = /* @__PURE__ */ __name((t28, e22, o20, a18) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let r30 of f24(e22))
          !g16.call(t28, r30) && r30 !== o20 && u15(t28, r30, { get: () => e22[r30], enumerable: !(a18 = b16(e22, r30)) || a18.enumerable });
      return t28;
    }, "x");
    var S19 = /* @__PURE__ */ __name((t28) => x17(u15({}, "__esModule", { value: true }), t28), "S");
    var w21 = {};
    h16(w21, { stylePropsAll: () => m22, stylePropsFont: () => l21, stylePropsText: () => p23, stylePropsTextOnly: () => s22, stylePropsTransform: () => d19, stylePropsView: () => i23, validPseudoKeys: () => c26, validStyles: () => y14, validStylesOnBaseProps: () => n19 });
    module2.exports = S19(w21);
    var d19 = Object.freeze({ x: true, y: true, scale: true, perspective: true, scaleX: true, scaleY: true, skewX: true, skewY: true, matrix: true, rotate: true, rotateY: true, rotateX: true, rotateZ: true });
    var n19 = Object.freeze({ placeholderTextColor: true });
    var i23 = Object.freeze({ backfaceVisibility: true, backgroundColor: true, borderBottomColor: true, borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderBottomWidth: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderLeftWidth: true, borderRadius: true, borderRightColor: true, borderRightWidth: true, borderStartColor: true, borderStyle: true, borderTopColor: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true, borderTopWidth: true, borderWidth: true, opacity: true, transform: true, alignContent: true, alignItems: true, alignSelf: true, aspectRatio: true, borderEndWidth: true, borderStartWidth: true, bottom: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, columnGap: true, rowGap: true, height: true, justifyContent: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, start: true, top: true, width: true, zIndex: true, direction: true, shadowColor: true, shadowOffset: true, shadowOpacity: true, shadowRadius: true, ...n19, ...d19, ...process.env.TAMAGUI_TARGET === "web" && { borderBottomStyle: true, borderTopStyle: true, borderLeftStyle: true, borderRightStyle: true, overflowX: true, overflowY: true, userSelect: true, cursor: true, contain: true, pointerEvents: true, boxSizing: true, boxShadow: true, outlineColor: true, outlineStyle: true, outlineOffset: true, outlineWidth: true } });
    var l21 = Object.freeze({ fontFamily: true, fontSize: true, fontStyle: true, fontWeight: true, letterSpacing: true, lineHeight: true, textTransform: true });
    var s22 = Object.freeze({ color: true, ...l21, textAlign: true, textDecorationLine: true, textDecorationStyle: true, textDecorationColor: true, textShadowColor: true, textShadowOffset: true, textShadowRadius: true, ...process.env.TAMAGUI_TARGET === "web" && { whiteSpace: true, wordWrap: true, textOverflow: true, textDecorationDistance: true, userSelect: true, selectable: true, cursor: true, WebkitLineClamp: true, WebkitBoxOrient: true } });
    var p23 = Object.freeze({ ...i23, ...s22 });
    var m22 = p23;
    var c26 = Object.freeze({ enterStyle: true, exitStyle: true, hoverStyle: true, pressStyle: true, focusStyle: true });
    var y14 = Object.freeze({ ...c26, ...i23 });
  }
});

// node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var p23 = Object.defineProperty;
    var l21 = Object.getOwnPropertyDescriptor;
    var o20 = Object.getOwnPropertyNames;
    var y14 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((t28, e22, s22, i23) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let r30 of o20(e22))
          !y14.call(t28, r30) && r30 !== s22 && p23(t28, r30, { get: () => e22[r30], enumerable: !(i23 = l21(e22, r30)) || i23.enumerable });
      return t28;
    }, "c");
    var n19 = /* @__PURE__ */ __name((t28) => c26(p23({}, "__esModule", { value: true }), t28), "n");
    var u15 = {};
    module2.exports = n19(u15);
  }
});

// node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var s22 = Object.defineProperty;
    var f24 = Object.getOwnPropertyDescriptor;
    var u15 = Object.getOwnPropertyNames;
    var C14 = Object.prototype.hasOwnProperty;
    var g16 = /* @__PURE__ */ __name((t28, r30) => {
      for (var n19 in r30)
        s22(t28, n19, { get: r30[n19], enumerable: true });
    }, "g");
    var o20 = /* @__PURE__ */ __name((t28, r30, n19, e22) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let i23 of u15(r30))
          !C14.call(t28, i23) && i23 !== n19 && s22(t28, i23, { get: () => r30[i23], enumerable: !(e22 = f24(r30, i23)) || e22.enumerable });
      return t28;
    }, "o");
    var p23 = /* @__PURE__ */ __name((t28) => o20(s22({}, "__esModule", { value: true }), t28), "p");
    var m22 = {};
    g16(m22, { isValidCSSCharCode: () => h16, simpleHash: () => S19 });
    module2.exports = p23(m22);
    var S19 = /* @__PURE__ */ __name((t28, r30 = 10) => {
      let n19 = 0, e22 = "";
      const i23 = t28.length;
      for (let l21 = 0; l21 < i23; l21++) {
        const a18 = t28.charCodeAt(l21);
        a18 === 46 && (e22 += "d0t"), h16(a18) && i23 <= r30 ? e22 += t28[l21] : (n19 = (n19 << 5) - n19 + a18, n19 &= n19);
      }
      return e22 + (n19 ? new Uint32Array([n19])[0].toString(36) : "");
    }, "S");
    function h16(t28) {
      return t28 >= 65 && t28 <= 90 || t28 >= 97 && t28 <= 122 || t28 === 95 || t28 === 45 || t28 >= 48 && t28 <= 57;
    }
    __name(h16, "h");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, e22, p23, x17) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let m22 of c26(e22))
          !d19.call(f24, m22) && m22 !== p23 && a18(f24, m22, { get: () => e22[m22], enumerable: !(x17 = b16(e22, m22)) || x17.enumerable });
      return f24;
    }, "t");
    var r30 = /* @__PURE__ */ __name((f24, e22, p23) => (t28(f24, e22, "default"), p23 && t28(p23, e22, "default")), "r");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a18({}, "__esModule", { value: true }), f24), "g");
    var o20 = {};
    module2.exports = g16(o20);
    r30(o20, require_clamp(), module2.exports);
    r30(o20, require_composeEventHandlers(), module2.exports);
    r30(o20, require_concatClassName(), module2.exports);
    r30(o20, require_validStyleProps(), module2.exports);
    r30(o20, require_types(), module2.exports);
    r30(o20, require_cjs10(), module2.exports);
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var n19 = Object.defineProperty;
    var a18 = Object.getOwnPropertyDescriptor;
    var s22 = Object.getOwnPropertyNames;
    var v14 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((t28, e22) => {
      for (var p23 in e22)
        n19(t28, p23, { get: e22[p23], enumerable: true });
    }, "c");
    var f24 = /* @__PURE__ */ __name((t28, e22, p23, r30) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let o20 of s22(e22))
          !v14.call(t28, o20) && o20 !== p23 && n19(t28, o20, { get: () => e22[o20], enumerable: !(r30 = a18(e22, o20)) || r30.enumerable });
      return t28;
    }, "f");
    var g16 = /* @__PURE__ */ __name((t28) => f24(n19({}, "__esModule", { value: true }), t28), "g");
    var l21 = {};
    c26(l21, { prevent: () => i23 });
    module2.exports = g16(l21);
    var i23 = /* @__PURE__ */ __name((t28) => [t28.preventDefault(), t28.stopPropagation()], "i");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var p23 = Object.getOwnPropertyDescriptor;
    var r30 = Object.getOwnPropertyNames;
    var k16 = Object.prototype.hasOwnProperty;
    var S19 = /* @__PURE__ */ __name((s22, e22) => {
      for (var t28 in e22)
        a18(s22, t28, { get: e22[t28], enumerable: true });
    }, "S");
    var i23 = /* @__PURE__ */ __name((s22, e22, t28, c26) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let n19 of r30(e22))
          !k16.call(s22, n19) && n19 !== t28 && a18(s22, n19, { get: () => e22[n19], enumerable: !(c26 = p23(e22, n19)) || c26.enumerable });
      return s22;
    }, "i");
    var m22 = /* @__PURE__ */ __name((s22) => i23(a18({}, "__esModule", { value: true }), s22), "m");
    var T16 = {};
    S19(T16, { getSpace: () => u15 });
    module2.exports = m22(T16);
    var o20 = require("@tamagui/core-node");
    var u15 = /* @__PURE__ */ __name((s22, e22 = 0) => {
      const t28 = (0, o20.getTokens)().space, c26 = Object.keys(t28), n19 = c26[Math.max(0, c26.indexOf(String(s22 || "$true")) + e22)];
      return t28[n19] || t28.$true;
    }, "u");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var l21 = Object.defineProperty;
    var i23 = Object.getOwnPropertyDescriptor;
    var p23 = Object.getOwnPropertyNames;
    var s22 = Object.prototype.hasOwnProperty;
    var m22 = /* @__PURE__ */ __name((o20, e22) => {
      for (var t28 in e22)
        l21(o20, t28, { get: e22[t28], enumerable: true });
    }, "m");
    var C14 = /* @__PURE__ */ __name((o20, e22, t28, a18) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let r30 of p23(e22))
          !s22.call(o20, r30) && r30 !== t28 && l21(o20, r30, { get: () => e22[r30], enumerable: !(a18 = i23(e22, r30)) || a18.enumerable });
      return o20;
    }, "C");
    var T16 = /* @__PURE__ */ __name((o20) => C14(l21({}, "__esModule", { value: true }), o20), "T");
    var u15 = {};
    m22(u15, { useCurrentColor: () => b16 });
    module2.exports = T16(u15);
    var n19 = require("@tamagui/core-node");
    var b16 = /* @__PURE__ */ __name((o20) => {
      const e22 = (0, n19.useTheme)();
      return (0, n19.variableToString)(e22[o20] || o20 || e22.color);
    }, "b");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var m22 = Object.defineProperty;
    var i23 = Object.getOwnPropertyDescriptor;
    var l21 = Object.getOwnPropertyNames;
    var s22 = Object.prototype.hasOwnProperty;
    var f24 = /* @__PURE__ */ __name((r30, e22) => {
      for (var o20 in e22)
        m22(r30, o20, { get: e22[o20], enumerable: true });
    }, "f");
    var C14 = /* @__PURE__ */ __name((r30, e22, o20, c26) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let n19 of l21(e22))
          !s22.call(r30, n19) && n19 !== o20 && m22(r30, n19, { get: () => e22[n19], enumerable: !(c26 = i23(e22, n19)) || c26.enumerable });
      return r30;
    }, "C");
    var a18 = /* @__PURE__ */ __name((r30) => C14(m22({}, "__esModule", { value: true }), r30), "a");
    var E16 = {};
    f24(E16, { useGetThemedIcon: () => p23 });
    module2.exports = a18(E16);
    var t28 = require("react");
    var u15 = require_useCurrentColor();
    var p23 = /* @__PURE__ */ __name((r30) => {
      const e22 = (0, u15.useCurrentColor)(r30.color);
      return (o20) => o20 && ((0, t28.isValidElement)(o20) ? (0, t28.cloneElement)(o20, { ...r30, ...o20.props }) : (0, t28.createElement)(o20, r30));
    }, "p");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, e22, p23, x17) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let m22 of c26(e22))
          !d19.call(f24, m22) && m22 !== p23 && a18(f24, m22, { get: () => e22[m22], enumerable: !(x17 = b16(e22, m22)) || x17.enumerable });
      return f24;
    }, "t");
    var r30 = /* @__PURE__ */ __name((f24, e22, p23) => (t28(f24, e22, "default"), p23 && t28(p23, e22, "default")), "r");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a18({}, "__esModule", { value: true }), f24), "g");
    var o20 = {};
    module2.exports = g16(o20);
    r30(o20, require_cjs11(), module2.exports);
    r30(o20, require_prevent(), module2.exports);
    r30(o20, require_getSpace(), module2.exports);
    r30(o20, require_useCurrentColor(), module2.exports);
    r30(o20, require_useGetThemedIcon(), module2.exports);
  }
});

// node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    "use strict";
    var V15 = Object.create;
    var S19 = Object.defineProperty;
    var g16 = Object.getOwnPropertyDescriptor;
    var m22 = Object.getOwnPropertyNames;
    var b16 = Object.getPrototypeOf;
    var h16 = Object.prototype.hasOwnProperty;
    var _13 = /* @__PURE__ */ __name((e22, t28) => {
      for (var n19 in t28)
        S19(e22, n19, { get: t28[n19], enumerable: true });
    }, "_");
    var T16 = /* @__PURE__ */ __name((e22, t28, n19, a18) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let r30 of m22(t28))
          !h16.call(e22, r30) && r30 !== n19 && S19(e22, r30, { get: () => t28[r30], enumerable: !(a18 = g16(t28, r30)) || a18.enumerable });
      return e22;
    }, "T");
    var $8 = /* @__PURE__ */ __name((e22, t28, n19) => (n19 = e22 != null ? V15(b16(e22)) : {}, T16(t28 || !e22 || !e22.__esModule ? S19(n19, "default", { value: e22, enumerable: true }) : n19, e22)), "$");
    var w21 = /* @__PURE__ */ __name((e22) => T16(S19({}, "__esModule", { value: true }), e22), "w");
    var N11 = {};
    _13(N11, { createContext: () => k16, createContextScope: () => R17 });
    module2.exports = w21(N11);
    var P16 = require("react/jsx-runtime");
    var p23 = $8(require("react"));
    function k16(e22, t28) {
      const n19 = p23.createContext(t28);
      function a18(s22) {
        const { children: o20, ...c26 } = s22, u15 = p23.useMemo(() => c26, Object.values(c26));
        return (0, P16.jsx)(n19.Provider, { value: u15, children: o20 });
      }
      __name(a18, "a");
      function r30(s22) {
        const o20 = p23.useContext(n19);
        if (o20)
          return o20;
        if (t28 !== void 0)
          return t28;
        throw new Error(`\`${s22}\` must be used within \`${e22}\``);
      }
      __name(r30, "r");
      return a18.displayName = `${e22}Provider`, [a18, r30];
    }
    __name(k16, "k");
    function R17(e22, t28 = []) {
      let n19 = [];
      function a18(s22, o20) {
        const c26 = p23.createContext(o20), u15 = n19.length;
        n19 = [...n19, o20];
        function d19(l21) {
          const { scope: x17, children: i23, ...C14 } = l21, f24 = (x17 == null ? void 0 : x17[e22][u15]) || c26, y14 = p23.useMemo(() => C14, Object.values(C14));
          return (0, P16.jsx)(f24.Provider, { value: y14, children: i23 });
        }
        __name(d19, "d");
        function v14(l21, x17, i23) {
          const C14 = (x17 == null ? void 0 : x17[e22][u15]) || c26, f24 = p23.useContext(C14);
          if (f24)
            return f24;
          if (o20 !== void 0)
            return o20;
          const y14 = `\`${l21}\` must be used within \`${s22}\``;
          if (i23 != null && i23.fallback)
            return (i23 == null ? void 0 : i23.warn) !== false && console.warn(y14), i23.fallback;
          throw new Error(y14);
        }
        __name(v14, "v");
        return d19.displayName = `${s22}Provider`, [d19, v14];
      }
      __name(a18, "a");
      const r30 = /* @__PURE__ */ __name(() => {
        const s22 = n19.map((o20) => p23.createContext(o20));
        return function(c26) {
          const u15 = (c26 == null ? void 0 : c26[e22]) || s22;
          return p23.useMemo(() => ({ [`__scope${e22}`]: { ...c26, [e22]: u15 } }), [c26, u15]);
        };
      }, "r");
      return r30.scopeName = e22, [a18, M16(r30, ...t28)];
    }
    __name(R17, "R");
    function M16(...e22) {
      const t28 = e22[0];
      if (e22.length === 1)
        return t28;
      const n19 = /* @__PURE__ */ __name(() => {
        const a18 = e22.map((r30) => ({ useScope: r30(), scopeName: r30.scopeName }));
        return function(s22) {
          const o20 = a18.reduce((c26, { useScope: u15, scopeName: d19 }) => {
            const l21 = u15(s22)[`__scope${d19}`];
            return { ...c26, ...l21 };
          }, {});
          return p23.useMemo(() => ({ [`__scope${t28.scopeName}`]: o20 }), [o20]);
        };
      }, "n");
      return n19.scopeName = t28.scopeName, n19;
    }
    __name(M16, "M");
  }
});

// node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_create_context(), module2.exports);
  }
});

// node_modules/@tamagui/stacks/dist/cjs/getElevation.js
var require_getElevation = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/getElevation.js"(exports, module2) {
    "use strict";
    var s22 = Object.defineProperty;
    var l21 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var h16 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((e22, o20) => {
      for (var n19 in o20)
        s22(e22, n19, { get: o20[n19], enumerable: true });
    }, "p");
    var S19 = /* @__PURE__ */ __name((e22, o20, n19, t28) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let a18 of c26(o20))
          !h16.call(e22, a18) && a18 !== n19 && s22(e22, a18, { get: () => o20[a18], enumerable: !(t28 = l21(o20, a18)) || t28.enumerable });
      return e22;
    }, "S");
    var f24 = /* @__PURE__ */ __name((e22) => S19(s22({}, "__esModule", { value: true }), e22), "f");
    var m22 = {};
    p23(m22, { getElevation: () => w21, getSizedElevation: () => d19 });
    module2.exports = f24(m22);
    var r30 = require("@tamagui/core-node");
    var w21 = /* @__PURE__ */ __name((e22, o20) => {
      if (!e22)
        return;
      const { tokens: n19 } = o20, t28 = n19.size[e22], a18 = (0, r30.isVariable)(t28) ? +t28.val : e22;
      return d19(a18, o20);
    }, "w");
    var d19 = /* @__PURE__ */ __name((e22, { theme: o20, tokens: n19 }) => {
      let t28 = 0;
      if (e22 === true) {
        const i23 = (0, r30.getVariableValue)(n19.size.true);
        typeof i23 == "number" ? t28 = i23 : t28 = 10;
      } else
        t28 = +e22;
      process.env.NODE_ENV === "development" && t28 !== null && isNaN(t28) && console.warn("NaN shadow", t28, e22);
      const [a18, u15] = [Math.round(t28 / 4 + 1), Math.round(t28 / 2 + 2)];
      return { shadowColor: o20.shadowColor, shadowRadius: u15, shadowOffset: { height: a18, width: 0 } };
    }, "d");
  }
});

// node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var c26 = Object.defineProperty;
    var S19 = Object.getOwnPropertyDescriptor;
    var k16 = Object.getOwnPropertyNames;
    var m22 = Object.prototype.hasOwnProperty;
    var x17 = /* @__PURE__ */ __name((e22, t28) => {
      for (var a18 in t28)
        c26(e22, a18, { get: t28[a18], enumerable: true });
    }, "x");
    var f24 = /* @__PURE__ */ __name((e22, t28, a18, s22) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let r30 of k16(t28))
          !m22.call(e22, r30) && r30 !== a18 && c26(e22, r30, { get: () => t28[r30], enumerable: !(s22 = S19(t28, r30)) || s22.enumerable });
      return e22;
    }, "f");
    var u15 = /* @__PURE__ */ __name((e22) => f24(c26({}, "__esModule", { value: true }), e22), "u");
    var Y11 = {};
    x17(Y11, { XStack: () => P16, YStack: () => l21, ZStack: () => y14, fullscreenStyle: () => i23 });
    module2.exports = u15(Y11);
    var o20 = require("@tamagui/core-node");
    var n19 = require_getElevation();
    var i23 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
    var p23 = { fullscreen: { true: i23 }, elevation: { "...size": n19.getElevation } };
    var l21 = (0, o20.styled)(o20.Stack, { flexDirection: "column", name: "YStack", variants: p23 });
    var P16 = (0, o20.styled)(o20.Stack, { flexDirection: "row", name: "XStack", variants: p23 });
    var y14 = (0, o20.styled)(l21, { name: "ZStack", position: "relative" }, { neverFlatten: true, isZStack: true });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var d19 = Object.defineProperty;
    var n19 = Object.getOwnPropertyDescriptor;
    var l21 = Object.getOwnPropertyNames;
    var c26 = Object.prototype.hasOwnProperty;
    var b16 = /* @__PURE__ */ __name((o20, r30) => {
      for (var t28 in r30)
        d19(o20, t28, { get: r30[t28], enumerable: true });
    }, "b");
    var i23 = /* @__PURE__ */ __name((o20, r30, t28, e22) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let s22 of l21(r30))
          !c26.call(o20, s22) && s22 !== t28 && d19(o20, s22, { get: () => r30[s22], enumerable: !(e22 = n19(r30, s22)) || e22.enumerable });
      return o20;
    }, "i");
    var a18 = /* @__PURE__ */ __name((o20) => i23(d19({}, "__esModule", { value: true }), o20), "a");
    var k16 = {};
    b16(k16, { bordered: () => h16, circular: () => g16, elevate: () => p23, focusTheme: () => x17, hoverTheme: () => $8, padded: () => C14, pressTheme: () => f24, radiused: () => m22 });
    module2.exports = a18(k16);
    var u15 = require_getElevation();
    var p23 = { true: (o20, r30) => (0, u15.getElevation)(r30.props.size, r30) };
    var h16 = /* @__PURE__ */ __name((o20, { props: r30 }) => ({ borderWidth: typeof o20 == "number" ? o20 : 1, borderColor: "$borderColor", ...r30.hoverTheme && { hoverStyle: { borderColor: "$borderColorHover" } }, ...r30.pressTheme && { pressStyle: { borderColor: "$borderColorPress" } }, ...r30.focusTheme && { focusStyle: { borderColor: "$borderColorFocus" } } }), "h");
    var C14 = { true: (o20, r30) => {
      const { tokens: t28, props: e22 } = r30;
      return { padding: t28.space[e22.size] || t28.space.$true };
    } };
    var m22 = { true: (o20, r30) => {
      const { tokens: t28, props: e22 } = r30;
      return { borderRadius: t28.radius[e22.size] || t28.radius.$true };
    } };
    var g16 = { true: (o20, { props: r30, tokens: t28 }) => {
      const e22 = t28.size[r30.size];
      return { width: e22, height: e22, maxWidth: e22, maxHeight: e22, minWidth: e22, minHeight: e22, borderRadius: 1e5, padding: 0 };
    } };
    var $8 = { true: { hoverStyle: { backgroundColor: "$backgroundHover", borderColor: "$borderColorHover" } }, false: {} };
    var f24 = { true: { cursor: "pointer", pressStyle: { backgroundColor: "$backgroundPress", borderColor: "$borderColorPress" } }, false: {} };
    var x17 = { true: { focusStyle: { backgroundColor: "$backgroundFocus", borderColor: "$borderColorFocus" } }, false: {} };
  }
});

// node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var s22 = Object.defineProperty;
    var i23 = Object.getOwnPropertyDescriptor;
    var p23 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var d19 = /* @__PURE__ */ __name((o20, r30) => {
      for (var a18 in r30)
        s22(o20, a18, { get: r30[a18], enumerable: true });
    }, "d");
    var h16 = /* @__PURE__ */ __name((o20, r30, a18, l21) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let t28 of p23(r30))
          !S19.call(o20, t28) && t28 !== a18 && s22(o20, t28, { get: () => r30[t28], enumerable: !(l21 = i23(r30, t28)) || l21.enumerable });
      return o20;
    }, "h");
    var k16 = /* @__PURE__ */ __name((o20) => h16(s22({}, "__esModule", { value: true }), o20), "k");
    var b16 = {};
    d19(b16, { SizableStack: () => n19 });
    module2.exports = k16(b16);
    var m22 = require("@tamagui/core-node");
    var c26 = require_cjs6();
    var f24 = require_Stacks();
    var e22 = require_variants();
    var n19 = (0, m22.styled)(f24.XStack, { name: "SizableStack", variants: { unstyled: { true: { hoverTheme: false, pressTheme: false, focusTheme: false, elevate: false, bordered: false }, false: { backgroundColor: "$background", flexShrink: 1 } }, hoverTheme: e22.hoverTheme, pressTheme: e22.pressTheme, focusTheme: e22.focusTheme, circular: e22.circular, elevate: e22.elevate, bordered: e22.bordered, size: { "...size": c26.getButtonSized } } });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var l21 = Object.defineProperty;
    var d19 = Object.getOwnPropertyDescriptor;
    var m22 = Object.getOwnPropertyNames;
    var u15 = Object.prototype.hasOwnProperty;
    var b16 = /* @__PURE__ */ __name((o20, r30) => {
      for (var s22 in r30)
        l21(o20, s22, { get: r30[s22], enumerable: true });
    }, "b");
    var h16 = /* @__PURE__ */ __name((o20, r30, s22, n19) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let t28 of m22(r30))
          !u15.call(o20, t28) && t28 !== s22 && l21(o20, t28, { get: () => r30[t28], enumerable: !(n19 = d19(r30, t28)) || n19.enumerable });
      return o20;
    }, "h");
    var k16 = /* @__PURE__ */ __name((o20) => h16(l21({}, "__esModule", { value: true }), o20), "k");
    var i23 = {};
    b16(i23, { ThemeableStack: () => S19 });
    module2.exports = k16(i23);
    var c26 = require("@tamagui/core-node");
    var p23 = require_Stacks();
    var e22 = require_variants();
    var a18 = { backgroundColor: "transparent", borderColor: "transparent", shadowColor: "transparent" };
    var S19 = (0, c26.styled)(p23.YStack, { name: "SizableStack", variants: { backgrounded: { true: { backgroundColor: "$background" } }, radiused: e22.radiused, hoverTheme: e22.hoverTheme, pressTheme: e22.pressTheme, focusTheme: e22.focusTheme, circular: e22.circular, padded: e22.padded, elevate: e22.elevate, bordered: e22.bordered, transparent: { true: { backgroundColor: "transparent" } }, chromeless: { true: a18, all: { ...a18, hoverStyle: a18, pressStyle: a18, focusStyle: a18 } } } });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, r30, p23, x17) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let m22 of c26(r30))
          !d19.call(f24, m22) && m22 !== p23 && a18(f24, m22, { get: () => r30[m22], enumerable: !(x17 = b16(r30, m22)) || x17.enumerable });
      return f24;
    }, "t");
    var e22 = /* @__PURE__ */ __name((f24, r30, p23) => (t28(f24, r30, "default"), p23 && t28(p23, r30, "default")), "e");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a18({}, "__esModule", { value: true }), f24), "g");
    var o20 = {};
    module2.exports = g16(o20);
    e22(o20, require_Stacks(), module2.exports);
    e22(o20, require_SizableStack(), module2.exports);
    e22(o20, require_ThemeableStack(), module2.exports);
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var l21 = Object.defineProperty;
    var m22 = Object.getOwnPropertyDescriptor;
    var R17 = Object.getOwnPropertyNames;
    var g16 = Object.prototype.hasOwnProperty;
    var v14 = /* @__PURE__ */ __name((t28, e22) => {
      for (var s22 in e22)
        l21(t28, s22, { get: e22[s22], enumerable: true });
    }, "v");
    var y14 = /* @__PURE__ */ __name((t28, e22, s22, r30) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let o20 of R17(e22))
          !g16.call(t28, o20) && o20 !== s22 && l21(t28, o20, { get: () => e22[o20], enumerable: !(r30 = m22(e22, o20)) || r30.enumerable });
      return t28;
    }, "y");
    var w21 = /* @__PURE__ */ __name((t28) => y14(l21({}, "__esModule", { value: true }), t28), "w");
    var E16 = {};
    v14(E16, { useControllableState: () => A18 });
    module2.exports = w21(E16);
    var T16 = require_cjs3();
    var n19 = require("react");
    var F16 = /* @__PURE__ */ __name((t28) => t28(), "F");
    function A18({ prop: t28, defaultProp: e22, onChange: s22, strategy: r30 = "prop-wins", preventUpdate: o20, transition: C14 }) {
      const [a18, d19] = (0, n19.useState)(t28 ?? e22), i23 = (0, n19.useRef)(a18), c26 = r30 === "prop-wins" && t28 !== void 0, b16 = c26 ? t28 : a18, f24 = (0, T16.useEvent)(s22 || D13), p23 = C14 ? n19.startTransition : F16;
      (0, n19.useEffect)(() => {
        t28 !== void 0 && (i23.current = t28, p23(() => {
          d19(t28);
        }));
      }, [t28]), (0, n19.useEffect)(() => {
        c26 || a18 !== i23.current && (i23.current = a18, f24(a18));
      }, [f24, a18, c26]);
      const S19 = (0, T16.useEvent)((u15) => {
        if (!o20)
          if (c26) {
            const h16 = typeof u15 == "function" ? u15(i23.current) : u15;
            f24(h16);
          } else
            p23(() => {
              d19(u15);
            });
      });
      return [b16, S19];
    }
    __name(A18, "A");
    var D13 = /* @__PURE__ */ __name(() => {
    }, "D");
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_useControllableState(), module2.exports);
  }
});

// node_modules/performant-array-to-tree/build/arrayToTree.min.js
var require_arrayToTree_min = __commonJS({
  "node_modules/performant-array-to-tree/build/arrayToTree.min.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      return (__assign2 = Object.assign || function(e22) {
        for (var r30, t28 = 1, n19 = arguments.length; t28 < n19; t28++)
          for (var o20 in r30 = arguments[t28])
            Object.prototype.hasOwnProperty.call(r30, o20) && (e22[o20] = r30[o20]);
        return e22;
      }).apply(this, arguments);
    };
    var defaultConfig = (Object.defineProperty(exports, "__esModule", { value: true }), { id: "id", parentId: "parentId", dataField: "data", childrenField: "children", throwIfOrphans: false, rootParentIds: { "": !(exports.countNodes = exports.arrayToTree = void 0) }, nestedIds: true, assign: false });
    function arrayToTree(c26, e22) {
      void 0 === e22 && (e22 = {});
      for (var r30, t28 = __assign2(__assign2({}, defaultConfig), e22), n19 = [], o20 = {}, a18 = t28.throwIfOrphans ? /* @__PURE__ */ new Set() : null, s22 = 0, h16 = c26; s22 < h16.length; s22++) {
        var i23 = h16[s22], d19 = t28.nestedIds ? getNestedProperty(i23, t28.id) : i23[t28.id], l21 = t28.nestedIds ? getNestedProperty(i23, t28.parentId) : i23[t28.parentId];
        if (t28.rootParentIds[d19])
          throw new Error("The item array contains a node whose parentId both exists in another node and is in " + '`rootParentIds` (`itemId`: "'.concat(d19, '", `rootParentIds`: ').concat(Object.keys(t28.rootParentIds).map(function(e23) {
            return '"'.concat(e23, '"');
          }).join(", "), ")."));
        Object.prototype.hasOwnProperty.call(o20, d19) || (o20[d19] = ((r30 = {})[t28.childrenField] = [], r30)), a18 && a18.delete(d19), t28.dataField ? o20[d19][t28.dataField] = i23 : t28.assign ? o20[d19] = Object.assign(i23, ((r30 = {})[t28.childrenField] = o20[d19][t28.childrenField], r30)) : o20[d19] = __assign2(__assign2({}, i23), ((i23 = {})[t28.childrenField] = o20[d19][t28.childrenField], i23));
        i23 = o20[d19];
        null == l21 || t28.rootParentIds[l21] ? n19.push(i23) : (Object.prototype.hasOwnProperty.call(o20, l21) || (o20[l21] = ((d19 = {})[t28.childrenField] = [], d19), a18 && a18.add(l21)), o20[l21][t28.childrenField].push(i23));
      }
      if (null != a18 && a18.size)
        throw new Error("The items array contains orphans that point to the following parentIds: " + "[".concat(Array.from(a18), "]. These parentIds do not exist in the items array. Hint: prevent orphans to result ") + "in an error by passing the following option: { throwIfOrphans: false }");
      if (t28.throwIfOrphans && countNodes(n19, t28.childrenField) < Object.keys(o20).length)
        throw new Error("The items array contains nodes with a circular parent/child relationship.");
      return n19;
    }
    __name(arrayToTree, "arrayToTree");
    function countNodes(e22, t28) {
      return e22.reduce(function(e23, r30) {
        return e23 + 1 + (r30[t28] && countNodes(r30[t28], t28));
      }, 0);
    }
    __name(countNodes, "countNodes");
    function getNestedProperty(e22, r30) {
      return r30.split(".").reduce(function(e23, r31) {
        return e23 && e23[r31];
      }, e22);
    }
    __name(getNestedProperty, "getNestedProperty");
    exports.arrayToTree = arrayToTree, exports.countNodes = countNodes;
  }
});

// node_modules/zustand/esm/vanilla.mjs
var import_meta, createStoreImpl, createStore;
var init_vanilla = __esm({
  "node_modules/zustand/esm/vanilla.mjs"() {
    import_meta = {};
    createStoreImpl = /* @__PURE__ */ __name((createState) => {
      let state;
      const listeners = /* @__PURE__ */ new Set();
      const setState = /* @__PURE__ */ __name((partial, replace) => {
        const nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
          const previousState = state;
          state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
          listeners.forEach((listener) => listener(state, previousState));
        }
      }, "setState");
      const getState = /* @__PURE__ */ __name(() => state, "getState");
      const subscribe = /* @__PURE__ */ __name((listener) => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      }, "subscribe");
      const destroy = /* @__PURE__ */ __name(() => {
        if ((import_meta.env && import_meta.env.MODE) !== "production") {
          console.warn(
            "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
          );
        }
        listeners.clear();
      }, "destroy");
      const api = { setState, getState, subscribe, destroy };
      state = createState(setState, getState, api);
      return api;
    }, "createStoreImpl");
    createStore = /* @__PURE__ */ __name((createState) => createState ? createStoreImpl(createState) : createStoreImpl, "createStore");
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js
var require_use_sync_external_store_shim_production_min = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js"(exports) {
    "use strict";
    var e22 = require("react");
    function h16(a18, b16) {
      return a18 === b16 && (0 !== a18 || 1 / a18 === 1 / b16) || a18 !== a18 && b16 !== b16;
    }
    __name(h16, "h");
    var k16 = "function" === typeof Object.is ? Object.is : h16;
    var l21 = e22.useState;
    var m22 = e22.useEffect;
    var n19 = e22.useLayoutEffect;
    var p23 = e22.useDebugValue;
    function q12(a18, b16) {
      var d19 = b16(), f24 = l21({ inst: { value: d19, getSnapshot: b16 } }), c26 = f24[0].inst, g16 = f24[1];
      n19(function() {
        c26.value = d19;
        c26.getSnapshot = b16;
        r30(c26) && g16({ inst: c26 });
      }, [a18, d19, b16]);
      m22(function() {
        r30(c26) && g16({ inst: c26 });
        return a18(function() {
          r30(c26) && g16({ inst: c26 });
        });
      }, [a18]);
      p23(d19);
      return d19;
    }
    __name(q12, "q");
    function r30(a18) {
      var b16 = a18.getSnapshot;
      a18 = a18.value;
      try {
        var d19 = b16();
        return !k16(a18, d19);
      } catch (f24) {
        return true;
      }
    }
    __name(r30, "r");
    function t28(a18, b16) {
      return b16();
    }
    __name(t28, "t");
    var u15 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t28 : q12;
    exports.useSyncExternalStore = void 0 !== e22.useSyncExternalStore ? e22.useSyncExternalStore : u15;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React3 = require("react");
        var ReactSharedInternals = React3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        __name(error, "error");
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        __name(printWarning, "printWarning");
        function is(x17, y14) {
          return x17 === y14 && (x17 !== 0 || 1 / x17 === 1 / y14) || x17 !== x17 && y14 !== y14;
        }
        __name(is, "is");
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState20 = React3.useState, useEffect20 = React3.useEffect, useLayoutEffect3 = React3.useLayoutEffect, useDebugValue2 = React3.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React3.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState20({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect3(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect20(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = /* @__PURE__ */ __name(function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            }, "handleStoreChange");
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        __name(useSyncExternalStore, "useSyncExternalStore");
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        __name(checkIfSnapshotChanged, "checkIfSnapshotChanged");
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        __name(useSyncExternalStore$1, "useSyncExternalStore$1");
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore;
        var useSyncExternalStore$2 = React3.useSyncExternalStore !== void 0 ? React3.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_use_sync_external_store_shim_production_min();
    } else {
      module2.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js
var require_with_selector_production_min = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js"(exports) {
    "use strict";
    var h16 = require("react");
    var n19 = require_shim();
    function p23(a18, b16) {
      return a18 === b16 && (0 !== a18 || 1 / a18 === 1 / b16) || a18 !== a18 && b16 !== b16;
    }
    __name(p23, "p");
    var q12 = "function" === typeof Object.is ? Object.is : p23;
    var r30 = n19.useSyncExternalStore;
    var t28 = h16.useRef;
    var u15 = h16.useEffect;
    var v14 = h16.useMemo;
    var w21 = h16.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(a18, b16, e22, l21, g16) {
      var c26 = t28(null);
      if (null === c26.current) {
        var f24 = { hasValue: false, value: null };
        c26.current = f24;
      } else
        f24 = c26.current;
      c26 = v14(function() {
        function a19(a20) {
          if (!c27) {
            c27 = true;
            d20 = a20;
            a20 = l21(a20);
            if (void 0 !== g16 && f24.hasValue) {
              var b17 = f24.value;
              if (g16(b17, a20))
                return k16 = b17;
            }
            return k16 = a20;
          }
          b17 = k16;
          if (q12(d20, a20))
            return b17;
          var e23 = l21(a20);
          if (void 0 !== g16 && g16(b17, e23))
            return b17;
          d20 = a20;
          return k16 = e23;
        }
        __name(a19, "a");
        var c27 = false, d20, k16, m22 = void 0 === e22 ? null : e22;
        return [function() {
          return a19(b16());
        }, null === m22 ? void 0 : function() {
          return a19(m22());
        }];
      }, [b16, e22, l21, g16]);
      var d19 = r30(a18, c26[0], c26[1]);
      u15(function() {
        f24.hasValue = true;
        f24.value = d19;
      }, [d19]);
      w21(d19);
      return d19;
    };
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js
var require_with_selector_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js"(exports) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React3 = require("react");
        var shim = require_shim();
        function is(x17, y14) {
          return x17 === y14 && (x17 !== 0 || 1 / x17 === 1 / y14) || x17 !== x17 && y14 !== y14;
        }
        __name(is, "is");
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useSyncExternalStore = shim.useSyncExternalStore;
        var useRef20 = React3.useRef, useEffect20 = React3.useEffect, useMemo9 = React3.useMemo, useDebugValue2 = React3.useDebugValue;
        function useSyncExternalStoreWithSelector2(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
          var instRef = useRef20(null);
          var inst;
          if (instRef.current === null) {
            inst = {
              hasValue: false,
              value: null
            };
            instRef.current = inst;
          } else {
            inst = instRef.current;
          }
          var _useMemo = useMemo9(function() {
            var hasMemo = false;
            var memoizedSnapshot;
            var memoizedSelection;
            var memoizedSelector = /* @__PURE__ */ __name(function(nextSnapshot) {
              if (!hasMemo) {
                hasMemo = true;
                memoizedSnapshot = nextSnapshot;
                var _nextSelection = selector(nextSnapshot);
                if (isEqual !== void 0) {
                  if (inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, _nextSelection)) {
                      memoizedSelection = currentSelection;
                      return currentSelection;
                    }
                  }
                }
                memoizedSelection = _nextSelection;
                return _nextSelection;
              }
              var prevSnapshot = memoizedSnapshot;
              var prevSelection = memoizedSelection;
              if (objectIs(prevSnapshot, nextSnapshot)) {
                return prevSelection;
              }
              var nextSelection = selector(nextSnapshot);
              if (isEqual !== void 0 && isEqual(prevSelection, nextSelection)) {
                return prevSelection;
              }
              memoizedSnapshot = nextSnapshot;
              memoizedSelection = nextSelection;
              return nextSelection;
            }, "memoizedSelector");
            var maybeGetServerSnapshot = getServerSnapshot === void 0 ? null : getServerSnapshot;
            var getSnapshotWithSelector = /* @__PURE__ */ __name(function() {
              return memoizedSelector(getSnapshot());
            }, "getSnapshotWithSelector");
            var getServerSnapshotWithSelector = maybeGetServerSnapshot === null ? void 0 : function() {
              return memoizedSelector(maybeGetServerSnapshot());
            };
            return [getSnapshotWithSelector, getServerSnapshotWithSelector];
          }, [getSnapshot, getServerSnapshot, selector, isEqual]), getSelection = _useMemo[0], getServerSelection = _useMemo[1];
          var value = useSyncExternalStore(subscribe, getSelection, getServerSelection);
          useEffect20(function() {
            inst.hasValue = true;
            inst.value = value;
          }, [value]);
          useDebugValue2(value);
          return value;
        }
        __name(useSyncExternalStoreWithSelector2, "useSyncExternalStoreWithSelector");
        exports.useSyncExternalStoreWithSelector = useSyncExternalStoreWithSelector2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/with-selector.js
var require_with_selector = __commonJS({
  "node_modules/use-sync-external-store/shim/with-selector.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_with_selector_production_min();
    } else {
      module2.exports = require_with_selector_development();
    }
  }
});

// node_modules/zustand/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  create: () => create,
  createStore: () => createStore,
  default: () => react,
  useStore: () => useStore
});
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0, import_react18.useDebugValue)(slice);
  return slice;
}
var import_react18, import_with_selector, useSyncExternalStoreWithSelector, createImpl, create, react;
var init_esm = __esm({
  "node_modules/zustand/esm/index.js"() {
    init_vanilla();
    init_vanilla();
    import_react18 = require("react");
    import_with_selector = __toESM(require_with_selector());
    ({ useSyncExternalStoreWithSelector } = import_with_selector.default);
    __name(useStore, "useStore");
    createImpl = /* @__PURE__ */ __name((createState) => {
      if (process.env.NODE_ENV !== "production" && typeof createState !== "function") {
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      }
      const api = typeof createState === "function" ? createStore(createState) : createState;
      const useBoundStore = /* @__PURE__ */ __name((selector, equalityFn) => useStore(api, selector, equalityFn), "useBoundStore");
      Object.assign(useBoundStore, api);
      return useBoundStore;
    }, "createImpl");
    create = /* @__PURE__ */ __name((createState) => createState ? createImpl(createState) : createImpl, "create");
    react = /* @__PURE__ */ __name((createState) => {
      if (process.env.NODE_ENV !== "production") {
        console.warn(
          "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
        );
      }
      return create(createState);
    }, "react");
  }
});

// node_modules/reforest/dist/index.js
var require_dist3 = __commonJS({
  "node_modules/reforest/dist/index.js"(exports, module2) {
    var __create2 = Object.create;
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __getProtoOf2 = Object.getPrototypeOf;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export2 = /* @__PURE__ */ __name((target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    }, "__export");
    var __copyProps2 = /* @__PURE__ */ __name((to4, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to4, key) && key !== except)
            __defProp2(to4, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to4;
    }, "__copyProps");
    var __toESM2 = /* @__PURE__ */ __name((mod, isNodeMode, target) => (target = mod != null ? __create2(__getProtoOf2(mod)) : {}, __copyProps2(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
      mod
    )), "__toESM");
    var __toCommonJS2 = /* @__PURE__ */ __name((mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod), "__toCommonJS");
    var src_exports = {};
    __export2(src_exports, {
      cleanAndSortTree: () => cleanAndSortTree,
      compareIndexPaths: () => compareIndexPaths,
      flattenChildren: () => flattenChildren,
      mapToChildren: () => mapToChildren,
      parseIndexPath: () => parseIndexPath,
      sortMapByIndexPath: () => sortMapByIndexPath,
      useIndex: () => useIndex,
      useIndexedChildren: () => useIndexedChildren,
      useRovingIndex: () => useRovingIndex,
      useTree: () => useTree,
      useTreeNode: () => useTreeNode,
      useTreeState: () => useTreeState
    });
    module2.exports = __toCommonJS2(src_exports);
    var React3 = __toESM2(require("react"));
    var React4 = __toESM2(require("react"));
    var PrerenderContext = React4.createContext(false);
    PrerenderContext.displayName = "PrerenderContext";
    var MaxIndexContext = React4.createContext([]);
    MaxIndexContext.displayName = "MaxIndexContext";
    var IndexContext = React4.createContext(null);
    IndexContext.displayName = "IndexContext";
    var TreeStateContext = React4.createContext(null);
    TreeStateContext.displayName = "TreeStateContext";
    var React22 = __toESM2(require("react"));
    var import_performant_array_to_tree = require_arrayToTree_min();
    var isServer = typeof window === "undefined";
    var useIsomorphicLayoutEffect = isServer ? React22.useEffect : React22.useLayoutEffect;
    function parseIndexPath(indexPathString) {
      return indexPathString.split(".").map((index3) => parseInt(index3, 10));
    }
    __name(parseIndexPath, "parseIndexPath");
    function compareIndexPaths(a18 = "", b16 = "") {
      var _a, _b;
      let aArray = a18.split(".").map(Number);
      let bArray = b16.split(".").map(Number);
      if (aArray.includes(NaN) || bArray.includes(NaN)) {
        throw new Error("Version contains parts that are not numbers");
      }
      const maxLength = Math.max(a18.length, b16.length);
      for (let index3 = 0; index3 < maxLength; index3++) {
        const difference = ((_a = aArray[index3]) != null ? _a : 0) - ((_b = bArray[index3]) != null ? _b : 0);
        if (difference === 0) {
          continue;
        }
        return difference > 0 ? 1 : -1;
      }
      return 0;
    }
    __name(compareIndexPaths, "compareIndexPaths");
    function cleanAndSortTree(tree) {
      var _a;
      if (((_a = tree.children) == null ? void 0 : _a.length) > 0) {
        tree.children.sort((a18, b16) => compareIndexPaths(a18.indexPathString, b16.indexPathString));
        return {
          ...tree.data,
          children: tree.children.map(cleanAndSortTree)
        };
      }
      return tree.data;
    }
    __name(cleanAndSortTree, "cleanAndSortTree");
    function mapToChildren(dataMap) {
      const parsedValues = Array.from(dataMap.entries()).map(([indexPathString, data]) => {
        const parentIndexPathString = parseIndexPath(indexPathString).slice(0, -1).join(".");
        return {
          data,
          parentId: parentIndexPathString,
          id: indexPathString
        };
      });
      const tree = (0, import_performant_array_to_tree.arrayToTree)(parsedValues, { dataField: null });
      const cleanedTree = cleanAndSortTree({ children: tree });
      return cleanedTree ? cleanedTree.children : [];
    }
    __name(mapToChildren, "mapToChildren");
    function sortMapByIndexPath(treeMap) {
      const sortedEntries = Array.from(treeMap.entries()).sort((a18, b16) => compareIndexPaths(a18[0], b16[0]));
      return new Map(sortedEntries);
    }
    __name(sortMapByIndexPath, "sortMapByIndexPath");
    function flattenChildren(children) {
      const flatChildren = children.flatMap(
        (child) => child.children ? flattenChildren(child.children) : [child]
      );
      return flatChildren;
    }
    __name(flattenChildren, "flattenChildren");
    function useIndex() {
      const maxIndexPath = React3.useContext(MaxIndexContext);
      const indexPathString = React3.useContext(IndexContext);
      return React3.useMemo(() => {
        if (indexPathString === null) {
          return null;
        }
        const indexPath = parseIndexPath(indexPathString);
        const maxIndex = maxIndexPath[maxIndexPath.length - 1];
        const index3 = indexPath[indexPath.length - 1];
        return {
          maxIndex,
          maxIndexPath,
          index: index3,
          indexPath,
          indexPathString,
          isFirst: index3 === 0,
          isLast: index3 === maxIndex,
          isEven: index3 % 2 === 0,
          isOdd: Math.abs(index3 % 2) === 1
        };
      }, [maxIndexPath, indexPathString]);
    }
    __name(useIndex, "useIndex");
    function useIndexedChildren(children) {
      const parentMaxIndexPath = React3.useContext(MaxIndexContext);
      const indexPathString = React3.useContext(IndexContext);
      const childrenCount = React3.Children.count(children);
      const maxIndexPath = React3.useMemo(
        () => parentMaxIndexPath.concat(childrenCount - 1),
        [childrenCount]
      );
      return /* @__PURE__ */ React3.createElement(MaxIndexContext.Provider, { value: maxIndexPath }, React3.Children.map(
        children,
        (child, index3) => React3.isValidElement(child) ? /* @__PURE__ */ React3.createElement(
          IndexContext.Provider,
          {
            key: child.key,
            value: indexPathString ? `${indexPathString}.${index3.toString()}` : index3.toString()
          },
          child
        ) : child
      ));
    }
    __name(useIndexedChildren, "useIndexedChildren");
    var React42 = __toESM2(require("react"));
    function useRovingIndex({
      contain = true,
      defaultIndex = 0,
      maxIndex = Infinity,
      wrap = false
    }) {
      const [activeIndex, setLocalActiveIndex] = React42.useState(defaultIndex);
      const getNextIndex = React42.useCallback(
        (nextIndex) => {
          if (wrap) {
            return (nextIndex % maxIndex + maxIndex) % maxIndex;
          }
          if (contain) {
            return nextIndex > maxIndex ? maxIndex : nextIndex < 0 ? 0 : nextIndex;
          }
          return nextIndex;
        },
        [maxIndex, wrap]
      );
      const moveActiveIndex = React42.useCallback(
        (amountToMove) => {
          setLocalActiveIndex((currentIndex) => getNextIndex(currentIndex + amountToMove));
        },
        [getNextIndex]
      );
      const setActiveIndex = React42.useCallback(
        (nextIndex) => {
          setLocalActiveIndex(getNextIndex(nextIndex));
        },
        [getNextIndex]
      );
      const moveBackward = React42.useCallback(() => moveActiveIndex(-1), [moveActiveIndex]);
      const moveForward = React42.useCallback(() => moveActiveIndex(1), [moveActiveIndex]);
      return {
        activeIndex,
        moveActiveIndex,
        setActiveIndex,
        moveBackward,
        moveForward,
        moveBackwardDisabled: activeIndex <= 0,
        moveForwardDisabled: activeIndex >= maxIndex
      };
    }
    __name(useRovingIndex, "useRovingIndex");
    var React5 = __toESM2(require("react"));
    var import_zustand = (init_esm(), __toCommonJS(esm_exports));
    function useTreeState(selector) {
      const treeStateContext = React5.useContext(TreeStateContext);
      const [treeState] = React5.useState(
        () => treeStateContext || (0, import_zustand.create)((set, get) => ({
          treeMap: /* @__PURE__ */ new Map(),
          prerenderedTreeIds: /* @__PURE__ */ new Map(),
          shouldPrerender: true,
          setTreeData: (id, data) => {
            const { treeMap } = get();
            treeMap.set(id, data);
            set({ treeMap: sortMapByIndexPath(treeMap) });
          },
          deleteTreeData: (id) => {
            const { treeMap } = get();
            treeMap.delete(id);
            set({ treeMap: sortMapByIndexPath(treeMap) });
          }
        }))
      );
      return selector ? treeState(selector) : treeState;
    }
    __name(useTreeState, "useTreeState");
    function PrerenderTree({ children }) {
      const treeState = useTreeState();
      const shouldPrerender = treeState((state) => state.shouldPrerender);
      useIsomorphicLayoutEffect(() => {
        treeState.setState({
          prerenderedTreeIds: /* @__PURE__ */ new Map(),
          shouldPrerender: false
        });
      }, []);
      return shouldPrerender ? /* @__PURE__ */ React5.createElement(PrerenderContext.Provider, { value: true }, children) : null;
    }
    __name(PrerenderTree, "PrerenderTree");
    function useTree(children, treeState) {
      const treeStateContext = React5.useContext(TreeStateContext);
      const treeStateLocal = useTreeState();
      const parsedTreeState = treeStateContext || treeState || treeStateLocal;
      const isPrerender = React5.useContext(PrerenderContext);
      const isRoot = treeStateContext === null;
      const indexedChildren = useIndexedChildren(children);
      const childrenToRender = isRoot ? /* @__PURE__ */ React5.createElement(TreeStateContext.Provider, { value: parsedTreeState }, /* @__PURE__ */ React5.createElement(PrerenderTree, null, indexedChildren), indexedChildren) : indexedChildren;
      return {
        children: childrenToRender,
        useStore: parsedTreeState,
        isPrerender,
        isRoot
      };
    }
    __name(useTree, "useTree");
    function useTreeNode(getData, dependencies = []) {
      const isPrerender = React5.useContext(PrerenderContext);
      const treeStateContext = React5.useContext(TreeStateContext);
      if (treeStateContext === null) {
        throw new Error("useTreeNode must be used in a descendant component of useTree.");
      }
      const { deleteTreeData, prerenderedTreeIds, setTreeData, treeMap } = treeStateContext.getState();
      const { indexPathString } = useIndex();
      const generatedId = React5.useId().slice(1, -1);
      const treeId = prerenderedTreeIds.get(indexPathString) || generatedId;
      const treeData = React5.useMemo(
        () => Object.assign({ treeId }, getData()),
        dependencies.concat(treeId)
      );
      if (isPrerender) {
        treeMap.set(indexPathString, treeData);
        prerenderedTreeIds.set(indexPathString, treeId);
      } else {
        React5.useEffect(() => {
          setTreeData(indexPathString, treeData);
          return () => {
            deleteTreeData(indexPathString);
          };
        }, [indexPathString, treeData]);
      }
      return {
        id: treeId,
        data: treeData,
        indexPathString,
        isPrerender
      };
    }
    __name(useTreeNode, "useTreeNode");
  }
});

// node_modules/@tamagui/group/dist/cjs/Group.js
var require_Group = __commonJS({
  "node_modules/@tamagui/group/dist/cjs/Group.js"(exports, module2) {
    "use strict";
    var J15 = Object.create;
    var c26 = Object.defineProperty;
    var K10 = Object.getOwnPropertyDescriptor;
    var Q9 = Object.getOwnPropertyNames;
    var Z10 = Object.getPrototypeOf;
    var ee11 = Object.prototype.hasOwnProperty;
    var oe9 = /* @__PURE__ */ __name((o20, r30) => {
      for (var e22 in r30)
        c26(o20, e22, { get: r30[e22], enumerable: true });
    }, "oe");
    var C14 = /* @__PURE__ */ __name((o20, r30, e22, t28) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let s22 of Q9(r30))
          !ee11.call(o20, s22) && s22 !== e22 && c26(o20, s22, { get: () => r30[s22], enumerable: !(t28 = K10(r30, s22)) || t28.enumerable });
      return o20;
    }, "C");
    var re5 = /* @__PURE__ */ __name((o20, r30, e22) => (e22 = o20 != null ? J15(Z10(o20)) : {}, C14(r30 || !o20 || !o20.__esModule ? c26(e22, "default", { value: o20, enumerable: true }) : e22, o20)), "re");
    var te9 = /* @__PURE__ */ __name((o20) => C14(c26({}, "__esModule", { value: true }), o20), "te");
    var pe4 = {};
    oe9(pe4, { Group: () => D13, GroupFrame: () => T16, XGroup: () => le5, YGroup: () => de7, useGroupItem: () => _13 });
    module2.exports = te9(pe4);
    var p23 = require("react/jsx-runtime");
    var n19 = require("@tamagui/core-node");
    var w21 = require_cjs13();
    var z13 = require_cjs14();
    var V15 = require_cjs15();
    var a18 = re5(require("react"));
    var U10 = require("react-native-web-lite");
    var m22 = require_dist3();
    var v14 = "Group";
    var [se6, ye5] = (0, w21.createContextScope)(v14);
    var [ne6, ae4] = se6(v14);
    var T16 = (0, n19.styled)(z13.ThemeableStack, { name: "GroupFrame", variants: { unstyled: { false: { size: "$true", y: 0, backgroundColor: "$background" } }, size: (o20, { tokens: r30 }) => ({ borderRadius: r30.radius[o20] ?? o20 ?? r30.radius.$true }) }, defaultVariants: { unstyled: false } });
    function B10(o20) {
      return (0, n19.withStaticProperties)((0, a18.forwardRef)((r30, e22) => {
        const t28 = (0, n19.useMediaPropsActive)(r30), { __scopeGroup: s22, children: l21, space: R17, size: d19 = "$true", spaceDirection: b16, separator: M16, scrollable: me5, axis: k16 = o20 ? "vertical" : "horizontal", orientation: u15 = k16, disabled: G15, disablePassBorderRadius: F16, borderRadius: h16, forceUseItem: A18, ...$8 } = (0, n19.getExpandedShorthands)(t28), L14 = u15 === "vertical", [be4, x17] = (0, V15.useControllableState)({ defaultProp: A18 ? 1 : 0 }), I10 = true, f24 = h16 ?? (d19 ? (0, n19.getVariableValue)((0, n19.getTokens)().radius[d19]) - 1 : void 0), P16 = F16 ?? !(f24 !== void 0);
        I10 || console.log("screw up!");
        const y14 = a18.Children.toArray(l21), O10 = I10 ? l21 : y14.map((i23, g16) => {
          if (!(0, a18.isValidElement)(i23))
            return i23;
          const X9 = i23.props.disabled ?? G15, Y11 = g16 === 0, j13 = g16 === y14.length - 1, S19 = P16 === true ? null : E16({ isFirst: Y11, isLast: j13, radius: f24, vertical: L14, disable: P16 }), q12 = { disabled: X9, ...(0, n19.isTamaguiElement)(i23) ? S19 : { style: S19 } };
          return ce5(i23, q12);
        }), N11 = (0, m22.useIndexedChildren)((0, n19.spacedChildren)({ direction: b16, separator: M16, space: R17, children: O10 })), H14 = a18.default.useCallback(() => x17((i23) => i23 + 1), []), W14 = a18.default.useCallback(() => x17((i23) => i23 - 1), []);
        return (0, p23.jsx)(ne6, { disablePassBorderRadius: P16, vertical: u15 === "vertical", radius: f24, disabled: G15, onItemMount: H14, onItemUnmount: W14, scope: s22, children: (0, p23.jsx)(T16, { ref: e22, size: d19, flexDirection: u15 === "horizontal" ? "row" : "column", borderRadius: h16, ...$8, children: ue3({ ...t28, orientation: u15 }, N11) }) });
      }), { Item: ie5 });
    }
    __name(B10, "B");
    var ie5 = /* @__PURE__ */ __name((o20) => {
      var s22;
      const { __scopeGroup: r30, children: e22 } = o20, t28 = _13({ disabled: (0, a18.isValidElement)(e22) ? e22.props.disabled : void 0 }, r30);
      return (0, a18.isValidElement)(e22) ? (0, n19.isTamaguiElement)(e22) ? a18.default.cloneElement(e22, t28) : a18.default.cloneElement(e22, { style: { ...(s22 = e22.props) == null ? void 0 : s22.style, ...t28 } }) : e22;
    }, "ie");
    var _13 = /* @__PURE__ */ __name((o20, r30) => {
      const e22 = (0, m22.useIndex)(), t28 = ae4("GroupItem", r30);
      if (a18.default.useEffect(() => (t28.onItemMount(), () => {
        t28.onItemUnmount();
      }), []), !e22)
        throw Error("<Group.Item/> should only be used within a <Group/>");
      const s22 = e22.index === 0, l21 = e22.index === e22.maxIndex;
      let d19 = { disabled: o20.disabled ?? t28.disabled };
      if (t28.disablePassBorderRadius !== true) {
        const b16 = E16({ radius: t28.radius, isFirst: s22, isLast: l21, vertical: t28.vertical, disable: t28.disablePassBorderRadius });
        return { ...d19, ...b16 };
      }
      return d19;
    }, "_");
    var D13 = B10(true);
    var de7 = D13;
    var le5 = B10(false);
    var ue3 = /* @__PURE__ */ __name(({ scrollable: o20, orientation: r30, showScrollIndicator: e22 = false }, t28) => o20 ? (0, p23.jsx)(U10.ScrollView, { ...r30 === "vertical" && { showsVerticalScrollIndicator: e22 }, ...r30 === "horizontal" && { horizontal: true, showsHorizontalScrollIndicator: e22 }, children: t28 }) : t28, "ue");
    var E16 = /* @__PURE__ */ __name(({ isFirst: o20, isLast: r30, radius: e22, vertical: t28, disable: s22 }) => ({ borderTopLeftRadius: o20 && s22 !== "top" && s22 !== "start" ? e22 : 0, borderTopRightRadius: s22 !== "top" && s22 !== "end" && (t28 && o20 || !t28 && r30) ? e22 : 0, borderBottomLeftRadius: s22 !== "bottom" && s22 !== "start" && (t28 && r30 || !t28 && o20) ? e22 : 0, borderBottomRightRadius: r30 && s22 !== "bottom" && s22 !== "end" ? e22 : 0 }), "E");
    var ce5 = /* @__PURE__ */ __name((o20, r30) => {
      const e22 = (0, n19.mergeProps)(o20.props, r30, false, (0, n19.getConfig)().shorthands)[0];
      return a18.default.cloneElement({ ...o20, props: null }, e22);
    }, "ce");
  }
});

// node_modules/@tamagui/group/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "node_modules/@tamagui/group/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_Group(), module2.exports);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var r30 = Object.defineProperty;
    var c26 = Object.getOwnPropertyDescriptor;
    var n19 = Object.getOwnPropertyNames;
    var u15 = Object.prototype.hasOwnProperty;
    var a18 = /* @__PURE__ */ __name((o20, s22) => {
      for (var e22 in s22)
        r30(o20, e22, { get: s22[e22], enumerable: true });
    }, "a");
    var b16 = /* @__PURE__ */ __name((o20, s22, e22, i23) => {
      if (s22 && typeof s22 == "object" || typeof s22 == "function")
        for (let t28 of n19(s22))
          !u15.call(o20, t28) && t28 !== e22 && r30(o20, t28, { get: () => s22[t28], enumerable: !(i23 = c26(s22, t28)) || i23.enumerable });
      return o20;
    }, "b");
    var g16 = /* @__PURE__ */ __name((o20) => b16(r30({}, "__esModule", { value: true }), o20), "g");
    var d19 = {};
    a18(d19, { focusFocusable: () => F16, registerFocusable: () => l21, unregisterFocusable: () => p23 });
    module2.exports = g16(d19);
    var l21 = /* @__PURE__ */ __name((o20, s22) => () => {
    }, "l");
    var p23 = /* @__PURE__ */ __name((o20) => {
    }, "p");
    var F16 = /* @__PURE__ */ __name((o20) => {
    }, "F");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var d19 = Object.defineProperty;
    var R17 = Object.getOwnPropertyDescriptor;
    var h16 = Object.getOwnPropertyNames;
    var A18 = Object.prototype.hasOwnProperty;
    var I10 = /* @__PURE__ */ __name((t28, c26) => {
      for (var e22 in c26)
        d19(t28, e22, { get: c26[e22], enumerable: true });
    }, "I");
    var S19 = /* @__PURE__ */ __name((t28, c26, e22, r30) => {
      if (c26 && typeof c26 == "object" || typeof c26 == "function")
        for (let f24 of h16(c26))
          !A18.call(t28, f24) && f24 !== e22 && d19(t28, f24, { get: () => c26[f24], enumerable: !(r30 = R17(c26, f24)) || r30.enumerable });
      return t28;
    }, "S");
    var V15 = /* @__PURE__ */ __name((t28) => S19(d19({}, "__esModule", { value: true }), t28), "V");
    var y14 = {};
    I10(y14, { focusableInputHOC: () => b16 });
    module2.exports = V15(y14);
    var g16 = require("react/jsx-runtime");
    var l21 = require_cjs2();
    var a18 = require("@tamagui/core-node");
    var o20 = require("react");
    var m22 = require_registerFocusable();
    function b16(t28) {
      return t28.extractable((0, o20.forwardRef)((e22, r30) => {
        const f24 = (0, a18.isTamaguiComponent)(t28) && t28.staticConfig.isInput, s22 = (0, o20.useRef)(e22.value || e22.defaultValue || ""), i23 = (0, o20.useRef)(), C14 = (0, o20.useCallback)((n19) => {
          var u15;
          e22.id && n19 && ((u15 = i23.current) == null || u15.call(i23), i23.current = (0, m22.registerFocusable)(e22.id, { focus: n19.focus, ...f24 && { focusAndSelect() {
            n19.focus(), n19.setSelection && typeof s22.current == "string" && n19.setSelection(0, s22.current.length);
          } } }));
        }, [f24, e22.id]), T16 = (0, l21.composeRefs)(r30, C14);
        (0, o20.useEffect)(() => () => {
          var n19;
          (n19 = i23.current) == null || n19.call(i23);
        }, []);
        const v14 = (0, a18.useEvent)((n19) => {
          var u15;
          s22.current = n19, (u15 = e22.onChangeText) == null || u15.call(e22, n19);
        }), x17 = f24 ? { ...e22, onChangeText: v14 } : e22;
        return (0, g16.jsx)(t28, { ref: T16, ...x17 });
      }));
    }
    __name(b16, "b");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var t28 = Object.defineProperty;
    var s22 = Object.getOwnPropertyDescriptor;
    var F16 = Object.getOwnPropertyNames;
    var f24 = Object.prototype.hasOwnProperty;
    var i23 = /* @__PURE__ */ __name((o20, c26, u15, n19) => {
      if (c26 && typeof c26 == "object" || typeof c26 == "function")
        for (let e22 of F16(c26))
          !f24.call(o20, e22) && e22 !== u15 && t28(o20, e22, { get: () => c26[e22], enumerable: !(n19 = s22(c26, e22)) || n19.enumerable });
      return o20;
    }, "i");
    var l21 = /* @__PURE__ */ __name((o20) => i23(t28({}, "__esModule", { value: true }), o20), "l");
    var p23 = {};
    module2.exports = l21(p23);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, r30, p23, x17) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let m22 of c26(r30))
          !d19.call(f24, m22) && m22 !== p23 && a18(f24, m22, { get: () => r30[m22], enumerable: !(x17 = b16(r30, m22)) || x17.enumerable });
      return f24;
    }, "t");
    var e22 = /* @__PURE__ */ __name((f24, r30, p23) => (t28(f24, r30, "default"), p23 && t28(p23, r30, "default")), "e");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a18({}, "__esModule", { value: true }), f24), "g");
    var o20 = {};
    module2.exports = g16(o20);
    e22(o20, require_registerFocusable(), module2.exports);
    e22(o20, require_focusableInputHOC(), module2.exports);
    e22(o20, require_focusable(), module2.exports);
  }
});

// node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var r30 = Object.defineProperty;
    var l21 = Object.getOwnPropertyDescriptor;
    var n19 = Object.getOwnPropertyNames;
    var x17 = Object.prototype.hasOwnProperty;
    var z13 = /* @__PURE__ */ __name((t28, e22) => {
      for (var a18 in e22)
        r30(t28, a18, { get: e22[a18], enumerable: true });
    }, "z");
    var m22 = /* @__PURE__ */ __name((t28, e22, a18, s22) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let o20 of n19(e22))
          !x17.call(t28, o20) && o20 !== a18 && r30(t28, o20, { get: () => e22[o20], enumerable: !(s22 = l21(e22, o20)) || s22.enumerable });
      return t28;
    }, "m");
    var b16 = /* @__PURE__ */ __name((t28) => m22(r30({}, "__esModule", { value: true }), t28), "b");
    var y14 = {};
    z13(y14, { SizableText: () => f24 });
    module2.exports = b16(y14);
    var p23 = require_cjs7();
    var i23 = require("@tamagui/core-node");
    var f24 = (0, i23.styled)(i23.Text, { name: "SizableText", fontFamily: "$body", variants: { size: p23.getFontSized }, defaultVariants: { size: "$true" } });
  }
});

// node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var t28 = Object.defineProperty;
    var g16 = Object.getOwnPropertyDescriptor;
    var l21 = Object.getOwnPropertyNames;
    var m22 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((a18, r30) => {
      for (var e22 in r30)
        t28(a18, e22, { get: r30[e22], enumerable: true });
    }, "c");
    var h16 = /* @__PURE__ */ __name((a18, r30, e22, p23) => {
      if (r30 && typeof r30 == "object" || typeof r30 == "function")
        for (let o20 of l21(r30))
          !m22.call(a18, o20) && o20 !== e22 && t28(a18, o20, { get: () => r30[o20], enumerable: !(p23 = g16(r30, o20)) || p23.enumerable });
      return a18;
    }, "h");
    var i23 = /* @__PURE__ */ __name((a18) => h16(t28({}, "__esModule", { value: true }), a18), "i");
    var u15 = {};
    c26(u15, { Paragraph: () => f24 });
    module2.exports = i23(u15);
    var s22 = require("@tamagui/core-node");
    var P16 = require_SizableText();
    var f24 = (0, s22.styled)(P16.SizableText, { name: "Paragraph", tag: "p", userSelect: "auto", color: "$color", size: "$true" });
  }
});

// node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var i23 = Object.defineProperty;
    var m22 = Object.getOwnPropertyDescriptor;
    var g16 = Object.getOwnPropertyNames;
    var p23 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((a18, e22) => {
      for (var s22 in e22)
        i23(a18, s22, { get: e22[s22], enumerable: true });
    }, "c");
    var h16 = /* @__PURE__ */ __name((a18, e22, s22, r30) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let o20 of g16(e22))
          !p23.call(a18, o20) && o20 !== s22 && i23(a18, o20, { get: () => e22[o20], enumerable: !(r30 = m22(e22, o20)) || r30.enumerable });
      return a18;
    }, "h");
    var $8 = /* @__PURE__ */ __name((a18) => h16(i23({}, "__esModule", { value: true }), a18), "$");
    var b16 = {};
    c26(b16, { H1: () => x17, H2: () => z13, H3: () => d19, H4: () => l21, H5: () => f24, H6: () => y14, Heading: () => n19 });
    module2.exports = $8(b16);
    var t28 = require("@tamagui/core-node");
    var H14 = require_Paragraph();
    var n19 = (0, t28.styled)(H14.Paragraph, { tag: "span", name: "Heading", accessibilityRole: "header", fontFamily: "$heading", size: "$8", margin: 0 });
    var x17 = (0, t28.styled)(n19, { name: "H1", tag: "h1", size: "$10" });
    var z13 = (0, t28.styled)(n19, { name: "H2", tag: "h2", size: "$9" });
    var d19 = (0, t28.styled)(n19, { name: "H3", tag: "h3", size: "$8" });
    var l21 = (0, t28.styled)(n19, { name: "H4", tag: "h4", size: "$7" });
    var f24 = (0, t28.styled)(n19, { name: "H5", tag: "h5", size: "$6" });
    var y14 = (0, t28.styled)(n19, { name: "H6", tag: "h6", size: "$5" });
  }
});

// node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var A18 = Object.create;
    var f24 = Object.defineProperty;
    var W14 = Object.getOwnPropertyDescriptor;
    var b16 = Object.getOwnPropertyNames;
    var w21 = Object.getPrototypeOf;
    var F16 = Object.prototype.hasOwnProperty;
    var I10 = /* @__PURE__ */ __name((t28, e22) => {
      for (var n19 in e22)
        f24(t28, n19, { get: e22[n19], enumerable: true });
    }, "I");
    var T16 = /* @__PURE__ */ __name((t28, e22, n19, s22) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let l21 of b16(e22))
          !F16.call(t28, l21) && l21 !== n19 && f24(t28, l21, { get: () => e22[l21], enumerable: !(s22 = W14(e22, l21)) || s22.enumerable });
      return t28;
    }, "T");
    var N11 = /* @__PURE__ */ __name((t28, e22, n19) => (n19 = t28 != null ? A18(w21(t28)) : {}, T16(e22 || !t28 || !t28.__esModule ? f24(n19, "default", { value: t28, enumerable: true }) : n19, t28)), "N");
    var q12 = /* @__PURE__ */ __name((t28) => T16(f24({}, "__esModule", { value: true }), t28), "q");
    var B10 = {};
    I10(B10, { wrapChildrenInText: () => v14 });
    module2.exports = q12(B10);
    var P16 = require("react/jsx-runtime");
    var C14 = N11(require("react"));
    function v14(t28, e22, n19) {
      const { children: s22, textProps: l21, size: p23, noTextWrap: R17, color: h16, fontFamily: g16, fontSize: y14, fontWeight: S19, letterSpacing: d19, textAlign: x17, fontStyle: m22 } = e22;
      if (R17 || !s22)
        return [s22];
      const k16 = C14.default.Children.toArray(s22), o20 = [];
      let c26 = false;
      const i23 = { ...n19 };
      h16 && (i23.color = h16), g16 && (i23.fontFamily = g16), y14 && (i23.fontSize = y14), S19 && (i23.fontWeight = S19), d19 && (i23.letterSpacing = d19), x17 && (i23.textAlign = x17), p23 && (i23.size = p23), m22 && (i23.fontStyle = m22);
      function u15() {
        if (!c26)
          return;
        const r30 = o20.length - 1, a18 = o20[r30];
        o20[r30] = (0, P16.jsx)(t28, { ...i23, ...l21, children: a18 }, r30);
      }
      __name(u15, "u");
      for (const r30 of k16) {
        const a18 = o20[o20.length - 1], z13 = typeof r30 == "string";
        z13 ? c26 ? a18.push(r30) : o20.push([r30]) : (u15(), o20.push(r30)), c26 = z13;
      }
      return u15(), o20;
    }
    __name(v14, "v");
  }
});

// node_modules/@tamagui/text/dist/cjs/types.js
var require_types2 = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var i23 = Object.defineProperty;
    var a18 = Object.getOwnPropertyDescriptor;
    var p23 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var n19 = /* @__PURE__ */ __name((e22, t28, r30, l21) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let o20 of p23(t28))
          !S19.call(e22, o20) && o20 !== r30 && i23(e22, o20, { get: () => t28[o20], enumerable: !(l21 = a18(t28, o20)) || l21.enumerable });
      return e22;
    }, "n");
    var x17 = /* @__PURE__ */ __name((e22) => n19(i23({}, "__esModule", { value: true }), e22), "x");
    var P16 = {};
    module2.exports = x17(P16);
  }
});

// node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, e22, p23, x17) => {
      if (e22 && typeof e22 == "object" || typeof e22 == "function")
        for (let m22 of c26(e22))
          !d19.call(f24, m22) && m22 !== p23 && a18(f24, m22, { get: () => e22[m22], enumerable: !(x17 = b16(e22, m22)) || x17.enumerable });
      return f24;
    }, "t");
    var r30 = /* @__PURE__ */ __name((f24, e22, p23) => (t28(f24, e22, "default"), p23 && t28(p23, e22, "default")), "r");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a18({}, "__esModule", { value: true }), f24), "g");
    var o20 = {};
    module2.exports = g16(o20);
    r30(o20, require_SizableText(), module2.exports);
    r30(o20, require_Paragraph(), module2.exports);
    r30(o20, require_Headings(), module2.exports);
    r30(o20, require_wrapChildrenInText(), module2.exports);
    r30(o20, require_types2(), module2.exports);
  }
});

// node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    "use strict";
    var x17 = Object.defineProperty;
    var H14 = Object.getOwnPropertyDescriptor;
    var M16 = Object.getOwnPropertyNames;
    var Y11 = Object.prototype.hasOwnProperty;
    var D13 = /* @__PURE__ */ __name((o20, n19) => {
      for (var i23 in n19)
        x17(o20, i23, { get: n19[i23], enumerable: true });
    }, "D");
    var J15 = /* @__PURE__ */ __name((o20, n19, i23, l21) => {
      if (n19 && typeof n19 == "object" || typeof n19 == "function")
        for (let s22 of M16(n19))
          !Y11.call(o20, s22) && s22 !== i23 && x17(o20, s22, { get: () => n19[s22], enumerable: !(l21 = H14(n19, s22)) || l21.enumerable });
      return o20;
    }, "J");
    var O10 = /* @__PURE__ */ __name((o20) => J15(x17({}, "__esModule", { value: true }), o20), "O");
    var q12 = {};
    D13(q12, { ListItem: () => j13, ListItemFrame: () => I10, ListItemSubtitle: () => c26, ListItemText: () => r30, ListItemTitle: () => b16, listItemStaticConfig: () => k16, useListItem: () => $8 });
    module2.exports = O10(q12);
    var t28 = require("react/jsx-runtime");
    var e22 = require("@tamagui/core-node");
    var C14 = require_cjs9();
    var p23 = require_cjs12();
    var m22 = require_cjs14();
    var u15 = require_cjs18();
    var F16 = require("react");
    var L14 = "ListItem";
    var I10 = (0, e22.styled)(m22.ThemeableStack, { name: L14, tag: "li", variants: { unstyled: { false: { size: "$true", alignItems: "center", flexWrap: "nowrap", width: "100%", borderColor: "$borderColor", maxWidth: "100%", overflow: "hidden", flexDirection: "row", backgroundColor: "$backgroundStrong" } }, size: { "...size": (o20, { tokens: n19 }) => ({ minHeight: n19.size[o20], paddingHorizontal: n19.space[o20], paddingVertical: (0, p23.getSpace)(o20, -2) }) }, active: { true: { hoverStyle: { backgroundColor: "$background" } } }, disabled: { true: { opacity: 0.5, pointerEvents: "none" } } }, defaultVariants: { unstyled: false } });
    var r30 = (0, e22.styled)(u15.SizableText, { name: "ListItemText", variants: { unstyled: { false: { color: "$color", userSelect: "none", flexGrow: 1, flexShrink: 1, ellipse: true, cursor: "default" } } }, defaultVariants: { unstyled: false } });
    var c26 = (0, e22.styled)(r30, { name: "ListItemSubtitle", variants: { unstyled: { false: { opacity: 0.6, maxWidth: "100%", size: "$3", color: "$color" } } }, defaultVariants: { unstyled: false } });
    var b16 = (0, e22.styled)(r30, { name: "ListItemTitle" });
    var $8 = /* @__PURE__ */ __name((o20, { Text: n19 = r30, Subtitle: i23 = c26, Title: l21 = b16 } = { Text: r30, Subtitle: c26, Title: b16 }) => {
      const { children: s22, icon: w21, iconAfter: A18, noTextWrap: T16, theme: B10, space: K10, spaceFlex: Q9, scaleIcon: W14 = 1, scaleSpace: v14 = 1, subTitle: a18, color: R17, fontWeight: U10, letterSpacing: Z10, fontSize: _13, fontFamily: V15, textAlign: ee11, textProps: te9, title: d19, ...E16 } = o20, f24 = (0, e22.useMediaPropsActive)(o20), S19 = f24.size || "$true", N11 = `$${+String(S19).replace("$", "") - 1}`, g16 = (0, C14.getFontSize)(S19) * W14, G15 = (0, p23.useGetThemedIcon)({ size: g16, color: R17 }), [y14, h16] = [w21, A18].map(G15), z13 = (0, e22.getVariableValue)((0, e22.getTokens)().space[f24.space] ?? g16) * v14, P16 = (0, u15.wrapChildrenInText)(n19, f24);
      return { props: { fontFamily: V15, ...E16, children: (0, t28.jsxs)(t28.Fragment, { children: [y14 ? (0, t28.jsxs)(t28.Fragment, { children: [y14, (0, t28.jsx)(e22.Spacer, { size: z13 })] }) : null, d19 || a18 ? (0, t28.jsxs)(m22.YStack, { flex: 1, children: [T16 === "all" ? d19 : (0, t28.jsx)(l21, { size: S19, children: d19 }), a18 ? (0, t28.jsx)(t28.Fragment, { children: typeof a18 == "string" && T16 !== "all" ? (0, t28.jsx)(i23, { size: N11, children: a18 }) : a18 }) : null, P16] }) : P16, h16 ? (0, t28.jsxs)(t28.Fragment, { children: [(0, t28.jsx)(e22.Spacer, { size: z13 }), h16] }) : null] }) } };
    }, "$");
    var X9 = (0, F16.forwardRef)((o20, n19) => {
      const { props: i23 } = $8(o20);
      return (0, t28.jsx)(I10, { ref: n19, justifyContent: "space-between", ...i23 });
    });
    var k16 = { inlineProps: /* @__PURE__ */ new Set(["color", "fontWeight", "fontSize", "fontFamily", "letterSpacing", "textAlign"]) };
    var j13 = (0, e22.withStaticProperties)(I10.extractable((0, e22.themeable)(X9, { componentName: L14 }), k16), { Text: r30, Subtitle: c26 });
  }
});

// node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a18 = Object.defineProperty;
    var b16 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d19 = Object.prototype.hasOwnProperty;
    var p23 = /* @__PURE__ */ __name((r30, o20, f24, x17) => {
      if (o20 && typeof o20 == "object" || typeof o20 == "function")
        for (let e22 of c26(o20))
          !d19.call(r30, e22) && e22 !== f24 && a18(r30, e22, { get: () => o20[e22], enumerable: !(x17 = b16(o20, e22)) || x17.enumerable });
      return r30;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r30, o20, f24) => (p23(r30, o20, "default"), f24 && p23(f24, o20, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r30) => p23(a18({}, "__esModule", { value: true }), r30), "g");
    var m22 = {};
    module2.exports = g16(m22);
    t28(m22, require_ListItem(), module2.exports);
  }
});

// node_modules/tabbable/dist/index.js
var require_dist4 = __commonJS({
  "node_modules/tabbable/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var candidateSelectors = ["input:not([inert])", "select:not([inert])", "textarea:not([inert])", "a[href]:not([inert])", "button:not([inert])", "[tabindex]:not(slot):not([inert])", "audio[controls]:not([inert])", "video[controls]:not([inert])", '[contenteditable]:not([contenteditable="false"]):not([inert])', "details>summary:first-of-type:not([inert])", "details:not([inert])"];
    var candidateSelector = /* @__PURE__ */ candidateSelectors.join(",");
    var NoElement = typeof Element === "undefined";
    var matches = NoElement ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var getRootNode = !NoElement && Element.prototype.getRootNode ? function(element) {
      var _element$getRootNode;
      return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
    } : function(element) {
      return element === null || element === void 0 ? void 0 : element.ownerDocument;
    };
    var isInert = /* @__PURE__ */ __name(function isInert2(node, lookUp) {
      var _node$getAttribute;
      if (lookUp === void 0) {
        lookUp = true;
      }
      var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, "inert");
      var inert = inertAtt === "" || inertAtt === "true";
      var result = inert || lookUp && node && isInert2(node.parentNode);
      return result;
    }, "isInert");
    var isContentEditable = /* @__PURE__ */ __name(function isContentEditable2(node) {
      var _node$getAttribute2;
      var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, "contenteditable");
      return attValue === "" || attValue === "true";
    }, "isContentEditable");
    var getCandidates = /* @__PURE__ */ __name(function getCandidates2(el, includeContainer, filter) {
      if (isInert(el)) {
        return [];
      }
      var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
      if (includeContainer && matches.call(el, candidateSelector)) {
        candidates.unshift(el);
      }
      candidates = candidates.filter(filter);
      return candidates;
    }, "getCandidates");
    var getCandidatesIteratively = /* @__PURE__ */ __name(function getCandidatesIteratively2(elements, includeContainer, options) {
      var candidates = [];
      var elementsToCheck = Array.from(elements);
      while (elementsToCheck.length) {
        var element = elementsToCheck.shift();
        if (isInert(element, false)) {
          continue;
        }
        if (element.tagName === "SLOT") {
          var assigned = element.assignedElements();
          var content = assigned.length ? assigned : element.children;
          var nestedCandidates = getCandidatesIteratively2(content, true, options);
          if (options.flatten) {
            candidates.push.apply(candidates, nestedCandidates);
          } else {
            candidates.push({
              scopeParent: element,
              candidates: nestedCandidates
            });
          }
        } else {
          var validCandidate = matches.call(element, candidateSelector);
          if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
            candidates.push(element);
          }
          var shadowRoot = element.shadowRoot || // check for an undisclosed shadow
          typeof options.getShadowRoot === "function" && options.getShadowRoot(element);
          var validShadowRoot = !isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
          if (shadowRoot && validShadowRoot) {
            var _nestedCandidates = getCandidatesIteratively2(shadowRoot === true ? element.children : shadowRoot.children, true, options);
            if (options.flatten) {
              candidates.push.apply(candidates, _nestedCandidates);
            } else {
              candidates.push({
                scopeParent: element,
                candidates: _nestedCandidates
              });
            }
          } else {
            elementsToCheck.unshift.apply(elementsToCheck, element.children);
          }
        }
      }
      return candidates;
    }, "getCandidatesIteratively");
    var getTabindex = /* @__PURE__ */ __name(function getTabindex2(node, isScope) {
      if (node.tabIndex < 0) {
        if ((isScope || /^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && isNaN(parseInt(node.getAttribute("tabindex"), 10))) {
          return 0;
        }
      }
      return node.tabIndex;
    }, "getTabindex");
    var sortOrderedTabbables = /* @__PURE__ */ __name(function sortOrderedTabbables2(a18, b16) {
      return a18.tabIndex === b16.tabIndex ? a18.documentOrder - b16.documentOrder : a18.tabIndex - b16.tabIndex;
    }, "sortOrderedTabbables");
    var isInput = /* @__PURE__ */ __name(function isInput2(node) {
      return node.tagName === "INPUT";
    }, "isInput");
    var isHiddenInput = /* @__PURE__ */ __name(function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    }, "isHiddenInput");
    var isDetailsWithSummary = /* @__PURE__ */ __name(function isDetailsWithSummary2(node) {
      var r30 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r30;
    }, "isDetailsWithSummary");
    var getCheckedRadio = /* @__PURE__ */ __name(function getCheckedRadio2(nodes, form) {
      for (var i23 = 0; i23 < nodes.length; i23++) {
        if (nodes[i23].checked && nodes[i23].form === form) {
          return nodes[i23];
        }
      }
    }, "getCheckedRadio");
    var isTabbableRadio = /* @__PURE__ */ __name(function isTabbableRadio2(node) {
      if (!node.name) {
        return true;
      }
      var radioScope = node.form || getRootNode(node);
      var queryRadios = /* @__PURE__ */ __name(function queryRadios2(name) {
        return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
      }, "queryRadios");
      var radioSet;
      if (typeof window !== "undefined" && typeof window.CSS !== "undefined" && typeof window.CSS.escape === "function") {
        radioSet = queryRadios(window.CSS.escape(node.name));
      } else {
        try {
          radioSet = queryRadios(node.name);
        } catch (err) {
          console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", err.message);
          return false;
        }
      }
      var checked = getCheckedRadio(radioSet, node.form);
      return !checked || checked === node;
    }, "isTabbableRadio");
    var isRadio = /* @__PURE__ */ __name(function isRadio2(node) {
      return isInput(node) && node.type === "radio";
    }, "isRadio");
    var isNonTabbableRadio = /* @__PURE__ */ __name(function isNonTabbableRadio2(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }, "isNonTabbableRadio");
    var isNodeAttached = /* @__PURE__ */ __name(function isNodeAttached2(node) {
      var _nodeRoot;
      var nodeRoot = node && getRootNode(node);
      var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;
      var attached = false;
      if (nodeRoot && nodeRoot !== node) {
        var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
        attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
        while (!attached && nodeRootHost) {
          var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
          nodeRoot = getRootNode(nodeRootHost);
          nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
          attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
        }
      }
      return attached;
    }, "isNodeAttached");
    var isZeroArea = /* @__PURE__ */ __name(function isZeroArea2(node) {
      var _node$getBoundingClie = node.getBoundingClientRect(), width = _node$getBoundingClie.width, height = _node$getBoundingClie.height;
      return width === 0 && height === 0;
    }, "isZeroArea");
    var isHidden = /* @__PURE__ */ __name(function isHidden2(node, _ref) {
      var displayCheck = _ref.displayCheck, getShadowRoot = _ref.getShadowRoot;
      if (getComputedStyle(node).visibility === "hidden") {
        return true;
      }
      var isDirectSummary = matches.call(node, "details>summary:first-of-type");
      var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
      if (matches.call(nodeUnderDetails, "details:not([open]) *")) {
        return true;
      }
      if (!displayCheck || displayCheck === "full" || displayCheck === "legacy-full") {
        if (typeof getShadowRoot === "function") {
          var originalNode = node;
          while (node) {
            var parentElement = node.parentElement;
            var rootNode = getRootNode(node);
            if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true) {
              return isZeroArea(node);
            } else if (node.assignedSlot) {
              node = node.assignedSlot;
            } else if (!parentElement && rootNode !== node.ownerDocument) {
              node = rootNode.host;
            } else {
              node = parentElement;
            }
          }
          node = originalNode;
        }
        if (isNodeAttached(node)) {
          return !node.getClientRects().length;
        }
        if (displayCheck !== "legacy-full") {
          return true;
        }
      } else if (displayCheck === "non-zero-area") {
        return isZeroArea(node);
      }
      return false;
    }, "isHidden");
    var isDisabledFromFieldset = /* @__PURE__ */ __name(function isDisabledFromFieldset2(node) {
      if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
        var parentNode = node.parentElement;
        while (parentNode) {
          if (parentNode.tagName === "FIELDSET" && parentNode.disabled) {
            for (var i23 = 0; i23 < parentNode.children.length; i23++) {
              var child = parentNode.children.item(i23);
              if (child.tagName === "LEGEND") {
                return matches.call(parentNode, "fieldset[disabled] *") ? true : !child.contains(node);
              }
            }
            return true;
          }
          parentNode = parentNode.parentElement;
        }
      }
      return false;
    }, "isDisabledFromFieldset");
    var isNodeMatchingSelectorFocusable = /* @__PURE__ */ __name(function isNodeMatchingSelectorFocusable2(options, node) {
      if (node.disabled || // we must do an inert look up to filter out any elements inside an inert ancestor
      //  because we're limited in the type of selectors we can use in JSDom (see related
      //  note related to `candidateSelectors`)
      isInert(node) || isHiddenInput(node) || isHidden(node, options) || // For a details element with a summary, the summary element gets the focus
      isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorFocusable");
    var isNodeMatchingSelectorTabbable = /* @__PURE__ */ __name(function isNodeMatchingSelectorTabbable2(options, node) {
      if (isNonTabbableRadio(node) || getTabindex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
        return false;
      }
      return true;
    }, "isNodeMatchingSelectorTabbable");
    var isValidShadowRootTabbable = /* @__PURE__ */ __name(function isValidShadowRootTabbable2(shadowHostNode) {
      var tabIndex = parseInt(shadowHostNode.getAttribute("tabindex"), 10);
      if (isNaN(tabIndex) || tabIndex >= 0) {
        return true;
      }
      return false;
    }, "isValidShadowRootTabbable");
    var sortByOrder = /* @__PURE__ */ __name(function sortByOrder2(candidates) {
      var regularTabbables = [];
      var orderedTabbables = [];
      candidates.forEach(function(item, i23) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getTabindex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i23,
            tabIndex: candidateTabindex,
            item,
            isScope,
            content: elements
          });
        }
      });
      return orderedTabbables.sort(sortOrderedTabbables).reduce(function(acc, sortable) {
        sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
        return acc;
      }, []).concat(regularTabbables);
    }, "sortByOrder");
    var tabbable2 = /* @__PURE__ */ __name(function tabbable3(el, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([el], options.includeContainer, {
          filter: isNodeMatchingSelectorTabbable.bind(null, options),
          flatten: false,
          getShadowRoot: options.getShadowRoot,
          shadowRootFilter: isValidShadowRootTabbable
        });
      } else {
        candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
      }
      return sortByOrder(candidates);
    }, "tabbable");
    var focusable = /* @__PURE__ */ __name(function focusable2(el, options) {
      options = options || {};
      var candidates;
      if (options.getShadowRoot) {
        candidates = getCandidatesIteratively([el], options.includeContainer, {
          filter: isNodeMatchingSelectorFocusable.bind(null, options),
          flatten: true,
          getShadowRoot: options.getShadowRoot
        });
      } else {
        candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
      }
      return candidates;
    }, "focusable");
    var isTabbable = /* @__PURE__ */ __name(function isTabbable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, candidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorTabbable(options, node);
    }, "isTabbable");
    var focusableCandidateSelector = /* @__PURE__ */ candidateSelectors.concat("iframe").join(",");
    var isFocusable = /* @__PURE__ */ __name(function isFocusable2(node, options) {
      options = options || {};
      if (!node) {
        throw new Error("No node provided");
      }
      if (matches.call(node, focusableCandidateSelector) === false) {
        return false;
      }
      return isNodeMatchingSelectorFocusable(options, node);
    }, "isFocusable");
    exports.focusable = focusable;
    exports.isFocusable = isFocusable;
    exports.isTabbable = isTabbable;
    exports.tabbable = tabbable2;
  }
});

// node_modules/@radix-ui/react-use-previous/dist/index.js
var require_dist5 = __commonJS({
  "node_modules/@radix-ui/react-use-previous/dist/index.js"(exports) {
    var e22;
    var r30;
    var u15 = (e22 = {}, r30 = require("react"), Object.keys(r30).forEach(function(u16) {
      "default" !== u16 && "__esModule" !== u16 && Object.defineProperty(e22, u16, { enumerable: true, get: function() {
        return r30[u16];
      } });
    }), e22);
    exports.usePrevious = function(e23) {
      const r31 = u15.useRef({ value: e23, previous: e23 });
      return u15.useMemo(() => (r31.current.value !== e23 && (r31.current.previous = r31.current.value, r31.current.value = e23), r31.current.previous), [e23]);
    };
  }
});

// node_modules/tamagui/dist/esm/index.mjs
var esm_exports2 = {};
__export(esm_exports2, {
  ACTIONS: () => y3,
  Adapt: () => b,
  AdaptContents: () => s,
  AdaptParentContext: () => a2,
  AlertDialog: () => j3,
  AlertDialogAction: () => S2,
  AlertDialogCancel: () => O2,
  AlertDialogContent: () => C5,
  AlertDialogDescription: () => _6,
  AlertDialogOverlay: () => y4,
  AlertDialogPortal: () => m7,
  AlertDialogTitle: () => v5,
  AlertDialogTrigger: () => f7,
  Anchor: () => p19,
  AnimatePresence: () => B,
  AnimationDriverProvider: () => import_core49.AnimationDriverProvider,
  Article: () => i22,
  Aside: () => r28,
  Avatar: () => y5,
  AvatarFallback: () => A7,
  AvatarFallbackFrame: () => L4,
  AvatarFrame: () => w5,
  AvatarImage: () => l8,
  BubbleInput: () => R16,
  Button: () => de2,
  ButtonFrame: () => i10,
  ButtonText: () => c10,
  Card: () => w7,
  CardBackground: () => g7,
  CardFooter: () => C6,
  CardFrame: () => n6,
  CardHeader: () => s7,
  Checkbox: () => ie3,
  CheckboxFrame: () => _12,
  Circle: () => c9,
  ControlledSheet: () => Sn,
  Dialog: () => ze,
  DialogClose: () => L3,
  DialogContent: () => W6,
  DialogDescription: () => H7,
  DialogOverlay: () => k6,
  DialogOverlayFrame: () => z4,
  DialogPortal: () => M3,
  DialogPortalFrame: () => We,
  DialogSheetContents: () => qe,
  DialogTitle: () => V4,
  DialogTrigger: () => _5,
  DialogWarningProvider: () => Ze,
  DirectionalYStack: () => P13,
  EnsureFlexed: () => t23,
  Fieldset: () => i21,
  FontLanguage: () => import_core49.FontLanguage,
  Footer: () => l18,
  Form: () => w8,
  FormFrame: () => c12,
  FormProvider: () => f10,
  FormTrigger: () => T8,
  ForwardSelectContext: () => i13,
  Grid: () => d17,
  H1: () => s6,
  H2: () => i8,
  H3: () => r9,
  H4: () => H,
  H5: () => m6,
  H6: () => g5,
  Header: () => a17,
  Heading: () => t9,
  INITIAL_STATE: () => f5,
  Input: () => c24,
  InputFrame: () => n17,
  Label: () => w9,
  LabelFrame: () => L5,
  LinearGradient: () => o19,
  Main: () => c25,
  Nav: () => m20,
  Paragraph: () => p7,
  Popover: () => ie,
  PopoverAnchor: () => M7,
  PopoverArrow: () => L6,
  PopoverClose: () => K5,
  PopoverContent: () => Oo,
  PopoverTrigger: () => z6,
  Popper: () => be,
  PopperAnchor: () => Re2,
  PopperArrow: () => ge2,
  PopperContent: () => Ae3,
  PopperContentFrame: () => X4,
  PopperProvider: () => G7,
  Portal: () => x5,
  PortalHost: () => x6,
  PortalItem: () => B3,
  PortalProvider: () => F3,
  PresenceContext: () => o2,
  Progress: () => x10,
  ProgressFrame: () => N6,
  ProgressIndicator: () => P10,
  ProgressIndicatorFrame: () => E7,
  RadioGroup: () => F12,
  Range: () => xe2,
  ScrollView: () => a7,
  Section: () => n18,
  Select: () => Ue2,
  SelectGroupFrame: () => Be2,
  SelectIcon: () => we,
  SelectItem: () => te3,
  SelectItemTextFrame: () => ke3,
  SelectProvider: () => r14,
  SelectSeparator: () => mt2,
  SelectTrigger: () => J11,
  Separator: () => e10,
  Sheet: () => Mt,
  SheetController: () => Pn,
  SheetFrame: () => It,
  SheetFrameFrame: () => Ne,
  SheetHandle: () => Dt,
  SheetHandleFrame: () => Ve,
  SheetOverlay: () => Tt,
  SheetOverlayFrame: () => ke,
  SizableStack: () => k2,
  SizableText: () => s5,
  Slider: () => J12,
  SliderFrame: () => k13,
  SliderThumb: () => C10,
  SliderThumbFrame: () => we2,
  SliderTrack: () => _9,
  SliderTrackActive: () => A13,
  SliderTrackActiveFrame: () => ze3,
  SliderTrackFrame: () => Te2,
  Spacer: () => import_core49.Spacer,
  Spinner: () => b15,
  Square: () => p9,
  Stack: () => import_core49.Stack,
  Switch: () => me3,
  SwitchFrame: () => H10,
  SwitchThumb: () => I8,
  SwitchThumbFrame: () => R12,
  Tabs: () => oe7,
  TamaguiProvider: () => t22,
  Text: () => import_core49.Text,
  TextAncestorContext: () => import_core49.TextAncestorContext,
  TextArea: () => l20,
  TextAreaFrame: () => s21,
  Theme: () => import_core49.Theme,
  ThemeableStack: () => k3,
  Thumb: () => ye2,
  ToggleGroup: () => h14,
  Tooltip: () => To2,
  TooltipGroup: () => Fo,
  TooltipSimple: () => C13,
  Track: () => ke4,
  Unspaced: () => import_core49.Unspaced,
  VisuallyHidden: () => e16,
  XStack: () => i6,
  YStack: () => c5,
  ZStack: () => l3,
  __PopoverProviderInternal: () => Pe3,
  addTheme: () => import_core49.addTheme,
  buttonStaticConfig: () => X3,
  composeRefs: () => R,
  createAlertDialogScope: () => pe,
  createAvatarScope: () => N4,
  createCheckboxScope: () => ce3,
  createComponent: () => import_core49.createComponent,
  createContext: () => T,
  createContextScope: () => V,
  createDialogScope: () => _e,
  createFont: () => import_core49.createFont,
  createPopoverScope: () => le,
  createPopperScope: () => he2,
  createProgressScope: () => C8,
  createRadioGroupScope: () => oe3,
  createSelectContext: () => c15,
  createSelectScope: () => a11,
  createSheetScope: () => d4,
  createShorthands: () => import_core49.createShorthands,
  createSwitchScope: () => fe3,
  createTamagui: () => f21,
  createTheme: () => import_core49.createTheme,
  createToggleGroupScope: () => Q7,
  createTokens: () => import_core49.createTokens,
  createVariable: () => import_core49.createVariable,
  debounce: () => f18,
  defaultStyles: () => s20,
  fullscreenStyle: () => a5,
  getAnimationDriver: () => import_core49.getAnimationDriver,
  getConfig: () => import_core49.getConfig,
  getMedia: () => import_core49.getMedia,
  getShapeSize: () => h8,
  getState: () => B9,
  getStylesAtomic: () => import_core49.getStylesAtomic,
  getThemes: () => import_core49.getThemes,
  getTokens: () => import_core49.getTokens,
  getVariable: () => import_core49.getVariable,
  getVariableName: () => import_core49.getVariableName,
  getVariableValue: () => import_core49.getVariableValue,
  idFn: () => c,
  insertFont: () => import_core49.insertFont,
  isChrome: () => import_core49.isChrome,
  isClient: () => import_core49.isClient,
  isIndeterminate: () => l16,
  isPresent: () => i3,
  isServer: () => import_core49.isServer,
  isServerSide: () => r21,
  isTamaguiComponent: () => import_core49.isTamaguiComponent,
  isTamaguiElement: () => import_core49.isTamaguiElement,
  isTouchable: () => import_core49.isTouchable,
  isVariable: () => import_core49.isVariable,
  isWeb: () => import_core49.isWeb,
  isWebTouchable: () => import_core49.isWebTouchable,
  matchMedia: () => import_core49.matchMedia,
  mediaObjectToString: () => import_core49.mediaObjectToString,
  mediaQueryConfig: () => import_core49.mediaQueryConfig,
  mediaState: () => import_core49.mediaState,
  spacedChildren: () => import_core49.spacedChildren,
  styled: () => import_core49.styled,
  themeable: () => import_core49.themeable,
  updateTheme: () => import_core49.updateTheme,
  useAdaptParent: () => W,
  useButton: () => j4,
  useComposedRefs: () => c3,
  useControllableState: () => A4,
  useDebounce: () => y12,
  useDebounceValue: () => A17,
  useDidFinishSSR: () => import_core49.useDidFinishSSR,
  useEvent: () => import_core49.useEvent,
  useFloatingContext: () => F10,
  useForceUpdate: () => d16,
  useFormContext: () => b8,
  useGet: () => import_core49.useGet,
  useIsPresent: () => x2,
  useIsTouchDevice: () => import_core49.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core49.useIsomorphicLayoutEffect,
  useLabelContext: () => U5,
  useMedia: () => import_core49.useMedia,
  usePopoverScope: () => g10,
  usePopperContext: () => E5,
  usePortal: () => h2,
  usePresence: () => p,
  useSafeRef: () => import_core49.useSafeRef,
  useSelectContext: () => d10,
  useStyle: () => import_core49.useStyle,
  useTheme: () => import_core49.useTheme,
  useThemeName: () => import_core49.useThemeName,
  useWindowDimensions: () => f20,
  variableToString: () => import_core49.variableToString,
  withStaticProperties: () => import_core49.withStaticProperties,
  wrapChildrenInText: () => W5
});
module.exports = __toCommonJS(esm_exports2);

// node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core-node");
var t = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = t, (0, import_core.setupReactNative)({ View: import_react_native.View, Text: import_react_native.Text }), typeof requestAnimationFrame > "u" && (globalThis.requestAnimationFrame = setImmediate);
var n = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (e22) => {
  try {
    n(e22);
  } catch {
  }
};
var c = /* @__PURE__ */ __name(() => {
}, "c");

// node_modules/@tamagui/adapt/dist/esm/Adapt.js
var import_jsx_runtime = require("react/jsx-runtime");
var import_core2 = require("@tamagui/core-node");
var import_react = require("react");
var a2 = (0, import_react.createContext)(null);
var s = /* @__PURE__ */ __name((r30) => {
  const e22 = (0, import_react.useContext)(a2);
  if (!(e22 != null && e22.Contents))
    throw new Error("Adapt not supported by this component");
  return (0, import_react.createElement)(e22.Contents, r30);
}, "s");
s.shouldForwardSpace = true;
var W = /* @__PURE__ */ __name(({ Contents: r30 }) => {
  const [e22, o20] = (0, import_react.useState)(null);
  return { AdaptProvider: (0, import_react.useMemo)(() => {
    const n19 = { Contents: r30, setWhen: o20 };
    function t28(u15) {
      return (0, import_jsx_runtime.jsx)(a2.Provider, { value: n19, children: u15.children });
    }
    __name(t28, "t");
    return t28;
  }, [r30]), when: e22 };
}, "W");
var b = (0, import_core2.withStaticProperties)(function({ platform: e22, when: o20, children: p23 }) {
  const n19 = (0, import_react.useContext)(a2);
  let t28 = !e22;
  return e22 === "touch" && (t28 = import_core2.isTouchable), e22 === "native" && (t28 = !import_core2.isWeb), e22 === "web" && (t28 = import_core2.isWeb), (0, import_core2.useIsomorphicLayoutEffect)(() => {
    t28 && (n19 == null || n19.setWhen(o20 || t28));
  }, [o20, n19, t28]), t28 ? p23 : null;
}, { Contents: s });

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_jsx_runtime13 = require("react/jsx-runtime");

// node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var f = __toESM(require("react"));
function s2(e22, t28) {
  typeof e22 == "function" ? e22(t28) : e22 && (e22.current = t28);
}
__name(s2, "s");
function R(...e22) {
  return (t28) => e22.forEach((o20) => s2(o20, t28));
}
__name(R, "R");
function c3(...e22) {
  return f.useCallback(R(...e22), e22);
}
__name(c3, "c");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_core13 = require("@tamagui/core-node");

// node_modules/@tamagui/create-context/dist/esm/create-context.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var u = __toESM(require("react"));
function T(t28, c26) {
  const o20 = u.createContext(c26);
  function x17(r30) {
    const { children: e22, ...n19 } = r30, s22 = u.useMemo(() => n19, Object.values(n19));
    return (0, import_jsx_runtime2.jsx)(o20.Provider, { value: s22, children: e22 });
  }
  __name(x17, "x");
  function i23(r30) {
    const e22 = u.useContext(o20);
    if (e22)
      return e22;
    if (c26 !== void 0)
      return c26;
    throw new Error(`\`${r30}\` must be used within \`${t28}\``);
  }
  __name(i23, "i");
  return x17.displayName = `${t28}Provider`, [x17, i23];
}
__name(T, "T");
function V(t28, c26 = []) {
  let o20 = [];
  function x17(r30, e22) {
    const n19 = u.createContext(e22), s22 = o20.length;
    o20 = [...o20, e22];
    function d19(l21) {
      const { scope: p23, children: a18, ...C14 } = l21, f24 = (p23 == null ? void 0 : p23[t28][s22]) || n19, y14 = u.useMemo(() => C14, Object.values(C14));
      return (0, import_jsx_runtime2.jsx)(f24.Provider, { value: y14, children: a18 });
    }
    __name(d19, "d");
    function S19(l21, p23, a18) {
      const C14 = (p23 == null ? void 0 : p23[t28][s22]) || n19, f24 = u.useContext(C14);
      if (f24)
        return f24;
      if (e22 !== void 0)
        return e22;
      const y14 = `\`${l21}\` must be used within \`${r30}\``;
      if (a18 != null && a18.fallback)
        return (a18 == null ? void 0 : a18.warn) !== false && console.warn(y14), a18.fallback;
      throw new Error(y14);
    }
    __name(S19, "S");
    return d19.displayName = `${r30}Provider`, [d19, S19];
  }
  __name(x17, "x");
  const i23 = /* @__PURE__ */ __name(() => {
    const r30 = o20.map((e22) => u.createContext(e22));
    return function(n19) {
      const s22 = (n19 == null ? void 0 : n19[t28]) || r30;
      return u.useMemo(() => ({ [`__scope${t28}`]: { ...n19, [t28]: s22 } }), [n19, s22]);
    };
  }, "i");
  return i23.scopeName = t28, [x17, v(i23, ...c26)];
}
__name(V, "V");
function v(...t28) {
  const c26 = t28[0];
  if (t28.length === 1)
    return c26;
  const o20 = /* @__PURE__ */ __name(() => {
    const x17 = t28.map((i23) => ({ useScope: i23(), scopeName: i23.scopeName }));
    return function(r30) {
      const e22 = x17.reduce((n19, { useScope: s22, scopeName: d19 }) => {
        const l21 = s22(r30)[`__scope${d19}`];
        return { ...n19, ...l21 };
      }, {});
      return u.useMemo(() => ({ [`__scope${c26.scopeName}`]: e22 }), [e22]);
    };
  }, "o");
  return o20.scopeName = c26.scopeName, o20;
}
__name(v, "v");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_jsx_runtime12 = require("react/jsx-runtime");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_web = require("@tamagui/core-node");
var import_react6 = __toESM(require("react"));

// node_modules/@tamagui/animate-presence/dist/esm/LayoutGroupContext.js
var import_react2 = require("react");
var r = (0, import_react2.createContext)({});

// node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var import_jsx_runtime3 = require("react/jsx-runtime");

// node_modules/@tamagui/use-presence/dist/esm/PresenceContext.js
var import_react3 = require("react");
var o2 = (0, import_react3.createContext)(null);

// node_modules/@tamagui/use-presence/dist/esm/usePresence.js
var import_react4 = require("react");
function p() {
  const e22 = (0, import_react4.useContext)(o2);
  if (!e22)
    return [true, null, e22];
  const { isPresent: u15, onExitComplete: t28, register: s22 } = e22, r30 = (0, import_react4.useId)() || "";
  return (0, import_react4.useEffect)(() => s22(r30), [r30, s22]), !u15 && t28 ? [false, () => t28 == null ? void 0 : t28(r30), e22] : [true, void 0, e22];
}
__name(p, "p");
function x2() {
  return i3((0, import_react4.useContext)(o2));
}
__name(x2, "x");
function i3(e22) {
  return e22 === null ? true : e22.isPresent;
}
__name(i3, "i");

// node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var t2 = __toESM(require("react"));
var import_react5 = require("react");
var y2 = /* @__PURE__ */ __name(({ children: i23, initial: f24, isPresent: n19, onExitComplete: r30, exitVariant: a18, enterVariant: c26, presenceAffectsLayout: u15 }) => {
  const e22 = t2.useMemo(m2, []), l21 = (0, import_react5.useId)() || "", d19 = t2.useMemo(() => ({ id: l21, initial: f24, isPresent: n19, exitVariant: a18, enterVariant: c26, onExitComplete: (s22) => {
    e22.set(s22, true);
    for (const o20 of e22.values())
      if (!o20)
        return;
    r30 == null || r30();
  }, register: (s22) => (e22.set(s22, false), () => e22.delete(s22)) }), u15 ? void 0 : [n19, a18, c26]);
  return t2.useMemo(() => {
    e22.forEach((s22, o20) => e22.set(o20, false));
  }, [n19]), t2.useEffect(() => {
    !(n19 || e22.size) && (r30 == null || r30());
  }, [n19]), (0, import_jsx_runtime3.jsx)(o2.Provider, { value: d19, children: i23 });
}, "y");
function m2() {
  return /* @__PURE__ */ new Map();
}
__name(m2, "m");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var u2 = /* @__PURE__ */ __name((c26) => c26.key || "", "u");
var K = process.env.NODE_ENV !== "production";
function G(c26, r30) {
  const n19 = K ? /* @__PURE__ */ new Set() : null;
  c26.forEach((a18) => {
    const s22 = u2(a18);
    K && n19 && n19.has(s22) && (console.warn(`Children of AnimatePresence require unique keys. "${s22}" is a duplicate.`), n19.add(s22)), r30.set(s22, a18);
  });
}
__name(G, "G");
function T2(c26) {
  const r30 = [];
  return import_react6.Children.forEach(c26, (n19, a18) => {
    (0, import_react6.isValidElement)(n19) && (n19.key ? r30.push(n19) : (process.env.NODE_ENV === "development" && console.warn("No key given to AnimatePresence child, assigning index as key"), r30.push(import_react6.default.cloneElement(n19, { key: a18 }))));
  }), r30;
}
__name(T2, "T");
var B = /* @__PURE__ */ __name(({ children: c26, enterVariant: r30, exitVariant: n19, initial: a18 = true, onExitComplete: s22, exitBeforeEnter: g16, presenceAffectsLayout: h16 = true }) => {
  let v14 = (0, import_web.useForceUpdate)();
  const A18 = (0, import_web.useDidFinishSSR)(), N11 = (0, import_react6.useContext)(r).forceRender;
  N11 && (v14 = N11);
  const m22 = (0, import_react6.useRef)(false), p23 = T2(c26);
  let t28 = p23;
  const o20 = /* @__PURE__ */ new Set(), l21 = (0, import_react6.useRef)(t28), y14 = (0, import_react6.useRef)(/* @__PURE__ */ new Map()).current, E16 = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => (m22.current = true, () => {
    m22.current = false, E16.current = true, y14.clear(), o20.clear();
  }), []), (0, import_web.useIsomorphicLayoutEffect)(() => {
    E16.current = false, G(p23, y14), l21.current = t28;
  });
  const C14 = process.env.NODE_ENV === "development" ? (0, import_react6.useRef)(false) : null;
  if (E16.current)
    return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: t28.map((e22) => (0, import_jsx_runtime4.jsx)(y2, { isPresent: Boolean(A18 ? true : m22.current), exitVariant: n19, enterVariant: r30, initial: a18 ? void 0 : false, presenceAffectsLayout: h16, children: e22 }, u2(e22))) });
  t28 = [...t28];
  const R17 = l21.current.map(u2), k16 = p23.map(u2), O10 = R17.length;
  for (let e22 = 0; e22 < O10; e22++) {
    const i23 = R17[e22];
    k16.indexOf(i23) === -1 && o20.add(i23);
  }
  return g16 && o20.size && (t28 = []), o20.forEach((e22) => {
    if (k16.indexOf(e22) !== -1)
      return;
    const i23 = y14.get(e22);
    if (!i23)
      return;
    const V15 = R17.indexOf(e22);
    t28.splice(V15, 0, (0, import_jsx_runtime4.jsx)(y2, { isPresent: false, onExitComplete: () => {
      y14.delete(e22), o20.delete(e22);
      const w21 = l21.current.findIndex((D13) => D13.key === e22);
      if (l21.current.splice(w21, 1), !o20.size) {
        if (l21.current = p23, m22.current === false)
          return;
        v14(), s22 == null || s22();
      }
    }, exitVariant: n19, enterVariant: r30, presenceAffectsLayout: h16, children: i23 }, u2(i23)));
  }), t28 = t28.map((e22) => {
    const i23 = e22.key;
    return o20.has(i23) ? e22 : (0, import_jsx_runtime4.jsx)(y2, { isPresent: true, exitVariant: n19, enterVariant: r30, presenceAffectsLayout: h16, children: e22 }, u2(e22));
  }), process.env.NODE_ENV === "development" && g16 && t28.length > 1 && C14 && !C14.current && (C14.current = true, console.log("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This can lead to odd visual behaviour.")), (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: o20.size ? t28 : t28.map((e22) => (0, import_react6.cloneElement)(e22)) });
}, "B");
B.displayName = "AnimatePresence";

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_aria_hidden = __toESM(require_cjs());
var import_core12 = require("@tamagui/core-node");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var import_react_use_escape_keydown = __toESM(require_dist2());
var import_core3 = require("@tamagui/core-node");

// node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react7 = require("react");
var a3 = process.env.TAMAGUI_TARGET === "web";
var p2 = typeof window < "u";
var l2 = !a3 || p2 ? import_react7.useLayoutEffect : import_react7.useEffect;
function A2(n19, o20, s22) {
  const e22 = (0, import_react7.useRef)(o20 ?? n19);
  return l2(() => {
    e22.current = n19;
  }), (0, import_react7.useCallback)(s22 ? (...c26) => {
    var t28;
    return (t28 = e22.current) == null ? void 0 : t28.apply(null, c26);
  } : () => e22.current, []);
}
__name(A2, "A");

// node_modules/@tamagui/use-event/dist/esm/useEvent.js
function a4(n19) {
  return A2(n19, t3, true);
}
__name(a4, "a");
var t3 = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "t");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var s3 = __toESM(require("react"));
var _2 = __toESM(require("react-dom"));
function k(e22, o20) {
  e22 && _2.flushSync(() => e22.dispatchEvent(o20));
}
__name(k, "k");
var z2 = "Dismissable";
var D = "dismissable.update";
var X = "dismissable.pointerDownOutside";
var Y = "dismissable.focusOutside";
var g2;
var w = s3.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var T3 = s3.forwardRef((e22, o20) => {
  const { disableOutsidePointerEvents: t28 = false, forceUnmount: i23, onEscapeKeyDown: r30, onPointerDownOutside: c26, onFocusOutside: l21, onInteractOutside: E16, onDismiss: u15, ...f24 } = e22, a18 = s3.useContext(w), [d19, H14] = s3.useState(null), [, M16] = s3.useState({}), S19 = c3(o20, (n19) => H14(n19)), h16 = Array.from(a18.layers), [W14] = [...a18.layersWithOutsidePointerEventsDisabled].slice(-1), N11 = h16.indexOf(W14), b16 = d19 ? h16.indexOf(d19) : -1, A18 = a18.layersWithOutsidePointerEventsDisabled.size > 0, y14 = b16 >= N11, I10 = G2((n19) => {
    const v14 = n19.target, C14 = [...a18.branches].some((m22) => m22.contains(v14));
    !y14 || C14 || (c26 == null || c26(n19), E16 == null || E16(n19), n19.defaultPrevented || u15 == null || u15());
  }), P16 = J((n19) => {
    const v14 = n19.target;
    [...a18.branches].some((m22) => m22.contains(v14)) || (l21 == null || l21(n19), E16 == null || E16(n19), n19.defaultPrevented || u15 == null || u15());
  });
  return (0, import_react_use_escape_keydown.useEscapeKeydown)((n19) => {
    b16 === a18.layers.size - 1 && (r30 == null || r30(n19), !n19.defaultPrevented && u15 && (n19.preventDefault(), u15()));
  }), s3.useEffect(() => {
    if (d19)
      return t28 && (a18.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), a18.layersWithOutsidePointerEventsDisabled.add(d19)), a18.layers.add(d19), x4(), () => {
        t28 && a18.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = g2);
      };
  }, [d19, t28, a18]), s3.useEffect(() => {
    if (!i23)
      return () => {
        d19 && (a18.layers.delete(d19), a18.layersWithOutsidePointerEventsDisabled.delete(d19), x4());
      };
  }, [d19, a18, i23]), s3.useEffect(() => {
    const n19 = /* @__PURE__ */ __name(() => {
      M16({});
    }, "n");
    return document.addEventListener(D, n19), () => document.removeEventListener(D, n19);
  }, []), (0, import_jsx_runtime5.jsx)("div", { ...f24, ref: S19, style: { display: "contents", pointerEvents: A18 ? y14 ? "auto" : "none" : void 0, ...e22.style }, onFocusCapture: (0, import_core3.composeEventHandlers)(e22.onFocusCapture, P16.onFocusCapture), onBlurCapture: (0, import_core3.composeEventHandlers)(e22.onBlurCapture, P16.onBlurCapture), onPointerDownCapture: (0, import_core3.composeEventHandlers)(e22.onPointerDownCapture, I10.onPointerDownCapture) });
});
T3.displayName = z2;
var q = "DismissableBranch";
var R2 = s3.forwardRef((e22, o20) => {
  const t28 = s3.useContext(w), i23 = s3.useRef(null), r30 = c3(o20, i23);
  return s3.useEffect(() => {
    const c26 = i23.current;
    if (c26)
      return t28.branches.add(c26), () => {
        t28.branches.delete(c26);
      };
  }, [t28.branches]), (0, import_jsx_runtime5.jsx)("div", { style: { display: "contents" }, ...e22, ref: r30 });
});
R2.displayName = q;
function G2(e22) {
  const o20 = a4(e22), t28 = s3.useRef(false), i23 = s3.useRef(() => {
  });
  return s3.useEffect(() => {
    const r30 = /* @__PURE__ */ __name((l21) => {
      if (l21.target && !t28.current) {
        let f24 = /* @__PURE__ */ __name(function() {
          B2(X, o20, u15, { discrete: true });
        }, "f");
        var E16 = f24;
        const u15 = { originalEvent: l21 };
        l21.pointerType === "touch" ? (document.removeEventListener("click", i23.current), i23.current = f24, document.addEventListener("click", i23.current, { once: true })) : f24();
      }
      t28.current = false;
    }, "r"), c26 = setTimeout(() => {
      document.addEventListener("pointerdown", r30);
    }, 0);
    return () => {
      window.clearTimeout(c26), document.removeEventListener("pointerdown", r30), document.removeEventListener("click", i23.current);
    };
  }, [o20]), { onPointerDownCapture: () => t28.current = true };
}
__name(G2, "G");
function J(e22) {
  const o20 = a4(e22), t28 = s3.useRef(false);
  return s3.useEffect(() => {
    const i23 = /* @__PURE__ */ __name((r30) => {
      r30.target && !t28.current && B2(Y, o20, { originalEvent: r30 }, { discrete: false });
    }, "i");
    return document.addEventListener("focusin", i23), () => document.removeEventListener("focusin", i23);
  }, [o20]), { onFocusCapture: () => t28.current = true, onBlurCapture: () => t28.current = false };
}
__name(J, "J");
function x4() {
  const e22 = new CustomEvent(D);
  document.dispatchEvent(e22);
}
__name(x4, "x");
function B2(e22, o20, t28, { discrete: i23 }) {
  const r30 = t28.originalEvent.target, c26 = new CustomEvent(e22, { bubbles: false, cancelable: true, detail: t28 });
  o20 && r30.addEventListener(e22, o20, { once: true }), i23 ? k(r30, c26) : r30.dispatchEvent(c26);
}
__name(B2, "B");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_focus_scope = __toESM(require_cjs4());

// node_modules/@tamagui/portal/dist/esm/Portal.js
var import_jsx_runtime6 = require("react/jsx-runtime");

// node_modules/@tamagui/polyfill-dev/index.js
if (typeof globalThis["__DEV__"] === "undefined") {
  globalThis["__DEV__"] = process.env.NODE_ENV === "development";
}

// node_modules/@tamagui/portal/dist/esm/Portal.js
var import_core8 = require("@tamagui/core-node");

// node_modules/@tamagui/stacks/dist/esm/Stacks.js
var import_core5 = require("@tamagui/core-node");

// node_modules/@tamagui/stacks/dist/esm/getElevation.js
var import_core4 = require("@tamagui/core-node");
var w2 = /* @__PURE__ */ __name((o20, t28) => {
  if (!o20)
    return;
  const { tokens: a18 } = t28, e22 = a18.size[o20], n19 = (0, import_core4.isVariable)(e22) ? +e22.val : o20;
  return u4(n19, t28);
}, "w");
var u4 = /* @__PURE__ */ __name((o20, { theme: t28, tokens: a18 }) => {
  let e22 = 0;
  if (o20 === true) {
    const r30 = (0, import_core4.getVariableValue)(a18.size.true);
    typeof r30 == "number" ? e22 = r30 : e22 = 10;
  } else
    e22 = +o20;
  process.env.NODE_ENV === "development" && e22 !== null && isNaN(e22) && console.warn("NaN shadow", e22, o20);
  const [n19, s22] = [Math.round(e22 / 4 + 1), Math.round(e22 / 2 + 2)];
  return { shadowColor: t28.shadowColor, shadowRadius: s22, shadowOffset: { height: n19, width: 0 } };
}, "u");

// node_modules/@tamagui/stacks/dist/esm/Stacks.js
var a5 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
var o3 = { fullscreen: { true: a5 }, elevation: { "...size": w2 } };
var c5 = (0, import_core5.styled)(import_core5.Stack, { flexDirection: "column", name: "YStack", variants: o3 });
var i6 = (0, import_core5.styled)(import_core5.Stack, { flexDirection: "row", name: "XStack", variants: o3 });
var l3 = (0, import_core5.styled)(c5, { name: "ZStack", position: "relative" }, { neverFlatten: true, isZStack: true });

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core6 = require("@tamagui/core-node");
var import_get_button_sized = __toESM(require_cjs6());

// node_modules/@tamagui/stacks/dist/esm/variants.js
var u5 = { true: (t28, r30) => w2(r30.props.size, r30) };
var n3 = /* @__PURE__ */ __name((t28, { props: r30 }) => ({ borderWidth: typeof t28 == "number" ? t28 : 1, borderColor: "$borderColor", ...r30.hoverTheme && { hoverStyle: { borderColor: "$borderColorHover" } }, ...r30.pressTheme && { pressStyle: { borderColor: "$borderColorPress" } }, ...r30.focusTheme && { focusStyle: { borderColor: "$borderColorFocus" } } }), "n");
var l4 = { true: (t28, r30) => {
  const { tokens: e22, props: o20 } = r30;
  return { padding: e22.space[o20.size] || e22.space.$true };
} };
var c6 = { true: (t28, r30) => {
  const { tokens: e22, props: o20 } = r30;
  return { borderRadius: e22.radius[o20.size] || e22.radius.$true };
} };
var b3 = { true: (t28, { props: r30, tokens: e22 }) => {
  const o20 = e22.size[r30.size];
  return { width: o20, height: o20, maxWidth: o20, maxHeight: o20, minWidth: o20, minHeight: o20, borderRadius: 1e5, padding: 0 };
} };
var i7 = { true: { hoverStyle: { backgroundColor: "$backgroundHover", borderColor: "$borderColorHover" } }, false: {} };
var a6 = { true: { cursor: "pointer", pressStyle: { backgroundColor: "$backgroundPress", borderColor: "$borderColorPress" } }, false: {} };
var p4 = { true: { focusStyle: { backgroundColor: "$backgroundFocus", borderColor: "$borderColorFocus" } }, false: {} };

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var k2 = (0, import_core6.styled)(i6, { name: "SizableStack", variants: { unstyled: { true: { hoverTheme: false, pressTheme: false, focusTheme: false, elevate: false, bordered: false }, false: { backgroundColor: "$background", flexShrink: 1 } }, hoverTheme: i7, pressTheme: a6, focusTheme: p4, circular: b3, elevate: u5, bordered: n3, size: { "...size": import_get_button_sized.getButtonSized } } });

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core7 = require("@tamagui/core-node");
var e4 = { backgroundColor: "transparent", borderColor: "transparent", shadowColor: "transparent" };
var k3 = (0, import_core7.styled)(c5, { name: "SizableStack", variants: { backgrounded: { true: { backgroundColor: "$background" } }, radiused: c6, hoverTheme: i7, pressTheme: a6, focusTheme: p4, circular: b3, padded: l4, elevate: u5, bordered: n3, transparent: { true: { backgroundColor: "transparent" } }, chromeless: { true: e4, all: { ...e4, hoverStyle: e4, pressStyle: e4, focusStyle: e4 } } } });

// node_modules/@tamagui/portal/dist/esm/Portal.js
var l5 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var x5 = /* @__PURE__ */ __name(({ host: o20 = ((n19) => (n19 = globalThis.document) == null ? void 0 : n19.body)(), ...r30 }) => {
  const s22 = (0, import_jsx_runtime6.jsx)(c5, { contain: "strict", fullscreen: true, position: import_core8.isWeb ? "fixed" : "absolute", maxWidth: import_core8.isWeb ? "100vw" : "100%", maxHeight: import_core8.isWeb ? "100vh" : "100%", pointerEvents: "none", ...r30 }), [e22, i23] = l5.useState(null);
  return (0, import_core8.useIsomorphicLayoutEffect)(() => {
    i23(o20);
  }, [o20]), e22 ? (0, import_react_dom.createPortal)(s22, e22) : null;
}, "x");

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_core9 = require("@tamagui/core-node");
var import_react8 = __toESM(require("react"));
var y3 = ((r30) => (r30[r30.REGISTER_HOST = 0] = "REGISTER_HOST", r30[r30.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", r30[r30.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", r30[r30.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", r30))(y3 || {});
var f5 = {};
var E = /* @__PURE__ */ __name((e22, t28) => (t28 in e22 || (e22[t28] = []), e22), "E");
var L2 = /* @__PURE__ */ __name((e22, t28) => (delete e22[t28], e22), "L");
var M2 = /* @__PURE__ */ __name((e22, t28, o20, n19) => {
  t28 in e22 || (e22 = E(e22, t28));
  const r30 = e22[t28].findIndex((s22) => s22.name === o20);
  return r30 !== -1 ? e22[t28][r30].node = n19 : e22[t28].push({ name: o20, node: n19 }), e22;
}, "M");
var G3 = /* @__PURE__ */ __name((e22, t28, o20) => {
  if (!(t28 in e22))
    return console.log(`Failed to remove portal '${o20}', '${t28}' was not registered!`), e22;
  const n19 = e22[t28].findIndex((r30) => r30.name === o20);
  return n19 !== -1 && e22[t28].splice(n19, 1), e22;
}, "G");
var b4 = /* @__PURE__ */ __name((e22, t28) => {
  const { type: o20 } = t28;
  switch (o20) {
    case 0:
      return E({ ...e22 }, t28.hostName);
    case 1:
      return L2({ ...e22 }, t28.hostName);
    case 2:
      return M2({ ...e22 }, t28.hostName, t28.portalName, t28.node);
    case 3:
      return G3({ ...e22 }, t28.hostName, t28.portalName);
    default:
      return e22;
  }
}, "b");
var v2 = (0, import_react8.createContext)(null);
var O = (0, import_react8.createContext)(null);
var V2 = /* @__PURE__ */ __name((e22) => {
  const t28 = (0, import_react8.useContext)(v2);
  if (t28 === null)
    throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
  return t28[e22] || [];
}, "V");
var h2 = /* @__PURE__ */ __name((e22 = "root") => {
  const t28 = (0, import_react8.useContext)(O);
  if (t28 === null)
    throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
  const o20 = (0, import_react8.useCallback)(() => {
    t28({ type: 0, hostName: e22 });
  }, []), n19 = (0, import_react8.useCallback)(() => {
    t28({ type: 1, hostName: e22 });
  }, []), r30 = (0, import_react8.useCallback)((a18, i23) => {
    t28({ type: 2, hostName: e22, portalName: a18, node: i23 });
  }, []), s22 = (0, import_react8.useCallback)((a18) => {
    t28({ type: 3, hostName: e22, portalName: a18 });
  }, []);
  return { registerHost: o20, deregisterHost: n19, addPortal: r30, updatePortal: r30, removePortal: s22 };
}, "h");
var k4 = /* @__PURE__ */ __name(({ rootHostName: e22 = "root", shouldAddRootHost: t28 = true, children: o20 }) => {
  const [n19, r30] = (0, import_react8.useReducer)(b4, f5), s22 = (0, import_react8.useMemo)(() => (i23) => {
    (0, import_react8.startTransition)(() => {
      r30(i23);
    });
  }, [r30]);
  return (0, import_jsx_runtime7.jsx)(O.Provider, { value: s22, children: (0, import_jsx_runtime7.jsxs)(v2.Provider, { value: n19, children: [o20, t28 && (0, import_jsx_runtime7.jsx)(x6, { name: e22 })] }) });
}, "k");
var F3 = (0, import_react8.memo)(k4);
F3.displayName = "PortalProvider";
var $ = /* @__PURE__ */ __name((e22) => (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: e22 }), "$");
var q2 = /* @__PURE__ */ __name((e22) => {
  const { name: t28, forwardProps: o20, render: n19 = $ } = e22, r30 = !(0, import_core9.useDidFinishSSR)(), s22 = V2(t28), { registerHost: a18, deregisterHost: i23 } = h2(e22.name);
  return (0, import_react8.useEffect)(() => {
    if (!r30)
      return a18(), () => {
        i23();
      };
  }, [r30]), n19(o20 ? s22.map((l21) => {
    let c26 = l21.node;
    return o20 ? import_react8.default.Children.map(c26, (d19) => import_react8.default.isValidElement(d19) ? import_react8.default.cloneElement(d19, { key: d19.key, ...o20 }) : d19) : c26;
  }) : s22.map((l21) => l21.node));
}, "q");
var x6 = (0, import_react8.memo)(q2);
x6.displayName = "PortalHost";
var z3 = /* @__PURE__ */ __name((e22) => {
  const { name: t28, hostName: o20, handleOnMount: n19, handleOnUnmount: r30, handleOnUpdate: s22, children: a18 } = e22, { addPortal: i23, removePortal: l21 } = h2(o20), c26 = (0, import_react8.useId)(), d19 = t28 || c26, H14 = (0, import_core9.useEvent)(() => {
    n19 ? n19(() => i23(d19, a18)) : i23(d19, a18);
  }), N11 = (0, import_core9.useEvent)(() => {
    r30 ? r30(() => l21(d19)) : l21(d19);
  }), S19 = (0, import_core9.useEvent)(() => {
    s22 ? s22(() => i23(d19, a18)) : i23(d19, a18);
  });
  return (0, import_core9.useIsomorphicLayoutEffect)(() => (H14(), () => {
    N11();
  }), []), (0, import_react8.useEffect)(() => {
    S19();
  }, [a18]), null;
}, "z");
var B3 = (0, import_react8.memo)(z3);
B3.displayName = "Portal";

// node_modules/@tamagui/remove-scroll/dist/esm/RemoveScroll.js
var import_jsx_runtime8 = require("react/jsx-runtime");
var import_react_remove_scroll = __toESM(require_es57());
var r5 = /* @__PURE__ */ __name((o20) => o20.children ? (0, import_jsx_runtime8.jsx)(import_react_remove_scroll.RemoveScroll, { ...o20 }) : null, "r");
r5.classNames = import_react_remove_scroll.RemoveScroll.classNames;

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_core11 = require("@tamagui/core-node");

// node_modules/@tamagui/use-constant/dist/esm/index.mjs
var import_react9 = require("react");
function o4(t28) {
  if (typeof document > "u")
    return (0, import_react9.useMemo)(() => t28(), []);
  const e22 = (0, import_react9.useRef)();
  return e22.current || (e22.current = { v: t28() }), e22.current.v;
}
__name(o4, "o");

// node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react10 = require("react");
var g4 = /* @__PURE__ */ __name((t28) => t28(), "g");
function A4({ prop: t28, defaultProp: f24, onChange: l21, strategy: T16 = "prop-wins", preventUpdate: d19, transition: p23 }) {
  const [e22, r30] = (0, import_react10.useState)(t28 ?? f24), n19 = (0, import_react10.useRef)(e22), o20 = T16 === "prop-wins" && t28 !== void 0, C14 = o20 ? t28 : e22, a18 = a4(l21 || v3), i23 = p23 ? import_react10.startTransition : g4;
  (0, import_react10.useEffect)(() => {
    t28 !== void 0 && (n19.current = t28, i23(() => {
      r30(t28);
    }));
  }, [t28]), (0, import_react10.useEffect)(() => {
    o20 || e22 !== n19.current && (n19.current = e22, a18(e22));
  }, [a18, e22, o20]);
  const b16 = a4((s22) => {
    if (!d19)
      if (o20) {
        const S19 = typeof s22 == "function" ? s22(n19.current) : s22;
        a18(S19);
      } else
        i23(() => {
          r30(s22);
        });
  });
  return [C14, b16];
}
__name(A4, "A");
var v3 = /* @__PURE__ */ __name(() => {
}, "v");

// node_modules/@tamagui/use-keyboard-visible/dist/esm/useKeyboardVisible.js
var import_react11 = require("react");
var import_react_native2 = require("react-native-web-lite");
var n4 = /* @__PURE__ */ __name(() => {
  const [o20, e22] = (0, import_react11.useState)(false);
  return (0, import_react11.useEffect)(() => {
    const i23 = import_react_native2.Keyboard.addListener("keyboardDidShow", () => {
      e22(true);
    }), d19 = import_react_native2.Keyboard.addListener("keyboardDidHide", () => {
      e22(false);
    });
    return () => {
      d19.remove(), i23.remove();
    };
  }, []), o20;
}, "n");

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_react13 = __toESM(require("react"));
var import_react_native4 = require("react-native-web-lite");

// node_modules/@tamagui/sheet/dist/esm/constants.js
var e6 = "Sheet";
var o5 = "SheetHandle";

// node_modules/@tamagui/sheet/dist/esm/SheetContext.js
var [o6, d4] = V(e6);
var [h4, P5] = o6(e6, {});

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_core10 = require("@tamagui/core-node");

// node_modules/@tamagui/scroll-view/dist/esm/ScrollView.js
var import_web2 = require("@tamagui/core-node");
var import_react_native3 = require("react-native-web-lite");
(0, import_web2.setupReactNative)({ ScrollView: import_react_native3.ScrollView });
var a7 = (0, import_web2.styled)(import_react_native3.ScrollView, { name: "ScrollView", scrollEnabled: true, variants: { fullscreen: { true: a5 } } }, { isReactNative: true });

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_react12 = require("react");
var D3 = "SheetScrollView";
var W3 = (0, import_react12.forwardRef)(({ __scopeSheet: c26, children: s22, ...i23 }, g16) => {
  const { scrollBridge: r30, position: d19, snapPoints: u15, frameSize: S19, open: p23 } = P5(D3, c26), f24 = (0, import_react12.useRef)(null), m22 = u15[d19] ?? 0, [n19, y14] = (0, import_react12.useState)(0), l21 = 100 - m22;
  p23 && l21 !== n19 && y14(l21);
  const e22 = (0, import_react12.useRef)({ lastPageY: 0, dragAt: 0, dys: [], isScrolling: false, isDragging: false }), Y11 = /* @__PURE__ */ __name(() => {
    if (!e22.current.isDragging)
      return;
    e22.current.isDragging = false, r30.scrollStartY = -1, e22.current.isScrolling = false;
    let o20 = 0;
    if (e22.current.dys.length) {
      const t28 = e22.current.dys.slice(-10);
      o20 = (t28.length ? t28.reduce((h16, w21) => h16 + w21, 0) : 0) / t28.length * 0.04;
    }
    e22.current.dys = [], r30.release({ dragAt: e22.current.dragAt, vy: o20 });
  }, "Y");
  return (0, import_jsx_runtime9.jsxs)(a7, { ref: (0, import_core10.composeRefs)(f24, g16), flex: 1, scrollEventThrottle: 8, onScroll: (o20) => {
    const { y: t28 } = o20.nativeEvent.contentOffset;
    r30.y = t28, t28 > 0 && (r30.scrollStartY = -1);
  }, onStartShouldSetResponder: () => (r30.scrollStartY = -1, e22.current.isDragging = true, true), onMoveShouldSetResponder: () => false, onResponderRelease: Y11, className: "_ovs-contain", ...i23, children: [(0, import_react12.useMemo)(() => s22, [s22]), (0, import_jsx_runtime9.jsx)(import_core10.Stack, { height: n19 / 100 * S19, width: 0 })] });
});

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var Ve = (0, import_core11.styled)(i6, { name: o5, height: 10, borderRadius: 100, backgroundColor: "$background", zIndex: 10, marginHorizontal: "35%", marginBottom: "$2", opacity: 0.5, hoverStyle: { opacity: 0.7 }, variants: { open: { true: { pointerEvents: "auto" }, false: { opacity: 0, pointerEvents: "none" } } } });
var Dt = Ve.extractable(({ __scopeSheet: n19, ...o20 }) => {
  const t28 = P5(o5, n19);
  return (0, import_jsx_runtime10.jsx)(Ve, { onPress: () => {
    const i23 = t28.snapPoints.length + (t28.dismissOnSnapToBottom ? -1 : 0), s22 = (t28.position + 1) % i23;
    t28.setPosition(s22);
  }, open: t28.open, ...o20 });
});
var Oe = "SheetOverlay";
var ke = (0, import_core11.styled)(k3, { name: Oe, fullscreen: true, backgrounded: true, opacity: 0.5, zIndex: 0, variants: { closed: { true: { opacity: 0, pointerEvents: "none" }, false: { pointerEvents: "auto" } } } });
var Tt = ke.extractable(({ __scopeSheet: n19, ...o20 }) => {
  const t28 = P5(Oe, n19);
  return (0, import_jsx_runtime10.jsx)(ke, { closed: !t28.open || t28.hidden, ...o20, onPress: (0, import_core11.mergeEvent)(o20.onPress, t28.dismissOnOverlayPress ? () => {
    t28.setOpen(false);
  } : void 0) });
});
var N = import_core11.isClient ? document.createElement("style") : null;
N && document.head.appendChild(N);
var Ne = (0, import_core11.styled)(c5, { name: e6, flex: 1, backgroundColor: "$background", borderTopLeftRadius: "$true", borderTopRightRadius: "$true", width: "100%", maxHeight: "100%", overflow: "hidden", pointerEvents: "auto" });
var It = Ne.extractable((0, import_react13.forwardRef)(({ __scopeSheet: n19, ...o20 }, t28) => {
  const i23 = P5(e6, n19), s22 = c3(t28, i23.contentRef);
  return (0, import_jsx_runtime10.jsx)(Ne, { ref: s22, ...o20 });
}));
var Y2 = 1e4;
var Ht = { Handle: Dt, Frame: It, Overlay: Tt, ScrollView: W3 };
var Ae = (0, import_react13.createContext)({ zIndex: 40 });
var De = /* @__PURE__ */ __name(() => {
  const n19 = (0, import_react13.useContext)(He), o20 = n19 == null ? void 0 : n19.hidden, t28 = o20 && (n19 == null ? void 0 : n19.open);
  return { controller: n19, isHidden: o20, isShowingNonSheet: t28 };
}, "De");
var Mt = (0, import_core11.withStaticProperties)((0, import_react13.forwardRef)(function(o20, t28) {
  const i23 = (0, import_core11.useDidFinishSSR)(), { isShowingNonSheet: s22 } = De();
  return s22 || !i23 ? null : (0, import_jsx_runtime10.jsx)(Ft, { ref: t28, ...o20 });
}), Ht);
var Ft = (0, import_core11.themeable)((0, import_react13.forwardRef)(function(o20, t28) {
  const i23 = (0, import_react13.useContext)(Ae), { isHidden: s22, controller: l21 } = De(), { __scopeSheet: B10, snapPoints: A18 = [80], open: Fe3, defaultOpen: Yt, children: _e3, position: Ye3, onPositionChange: Be4, onOpenChange: L14, defaultPosition: Le4, dismissOnOverlayPress: ze5 = true, animationConfig: Ge3, dismissOnSnapToBottom: b16 = false, forceRemoveScrollEnabled: $e3 = null, disableDrag: Ke3, modal: D13 = false, zIndex: T16 = i23.zIndex + 1, moveOnKeyboardChange: Xe2 = false, portalProps: Ue4 } = o20;
  process.env.NODE_ENV === "development" && A18.some((e22) => e22 < 0 || e22 > 100) && console.warn("\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame");
  const ne6 = (0, import_react13.useRef)(null), We3 = c3(t28, ne6), y14 = (0, import_core11.useAnimationDriver)();
  if (!y14)
    throw new Error("Must set animations in tamagui.config.ts");
  const oe9 = Ke3 ?? (l21 == null ? void 0 : l21.disableDrag), Ze3 = n4(), qe3 = (0, import_core11.useThemeName)(), re5 = import_react13.default.useRef(null), u15 = o4(() => ({ enabled: false, y: 0, paneY: 0, paneMinY: 0, scrollStartY: -1, drag: () => {
  }, release: () => {
  }, scrollLock: false })), Je3 = /* @__PURE__ */ __name((e22) => {
    var r30;
    (r30 = l21 == null ? void 0 : l21.onOpenChange) == null || r30.call(l21, e22), L14 == null || L14(e22);
  }, "Je"), [a18, z13] = A4({ prop: (l21 == null ? void 0 : l21.open) ?? Fe3, defaultProp: true, onChange: Je3, strategy: "most-recent-wins", transition: true }), [d19, Qe2] = (0, import_react13.useState)(0), g16 = (0, import_react13.useMemo)(() => b16 ? [...A18, 0] : A18, [JSON.stringify(A18), b16]), [je3, G15] = A4({ prop: Ye3, defaultProp: Le4 || (a18 ? 0 : -1), onChange: Be4, strategy: "most-recent-wins", transition: true }), C14 = a18 === false ? -1 : je3;
  a18 && b16 && C14 === g16.length - 1 && G15(0);
  const x17 = (0, import_react13.useCallback)((e22) => {
    b16 && e22 === g16.length - 1 ? z13(false) : G15(e22);
  }, [b16, g16.length, G15, z13]), { useAnimatedNumber: et, useAnimatedNumberReaction: tt, useAnimatedNumberStyle: nt } = y14, c26 = et(Y2), v14 = (0, import_react13.useRef)(0);
  tt({ value: c26, hostRef: ne6 }, (e22) => {
    y14.isReactNative && (v14.current = e22, u15.paneY = e22);
  });
  function se6() {
    c26.stop(), u15.onFinishAnimate && (u15.onFinishAnimate(), u15.onFinishAnimate = void 0);
  }
  __name(se6, "se");
  const ae4 = a18 && C14 < 0;
  (0, import_react13.useEffect)(() => {
    ae4 && x17(0);
  }, [x17, ae4]);
  const R17 = (0, import_react13.useMemo)(() => g16.map((e22) => _t(e22, d19)), [d19, g16]), [ie5, le5] = (0, import_react13.useState)(a18 ? 1 : 0);
  a18 && ie5 === 0 && le5(1), (0, import_react13.useEffect)(() => {
    if (!a18) {
      const e22 = setTimeout(() => {
        le5(0);
      }, 400);
      return () => {
        clearTimeout(e22);
      };
    }
  }, [a18]);
  const I10 = (0, import_core11.useEvent)((e22) => {
    const r30 = c26.getValue();
    if (s22 && a18 || !r30 || d19 === 0)
      return;
    const f24 = s22 || e22 === -1 ? d19 === 0 ? Y2 : d19 : R17[e22];
    if (v14.current === f24)
      return;
    if (se6(), s22) {
      c26.setValue(f24, { type: "timing", duration: 0 }), v14.current = f24;
      return;
    }
    const w21 = v14.current === Y2;
    c26.setValue(f24, { ...Ge3, type: "spring", overshootClamping: w21 });
  });
  (0, import_core11.useIsomorphicLayoutEffect)(() => {
    I10(C14);
  }, [s22, d19, C14, I10]);
  const [$8, ot] = (0, import_react13.useState)(false), ce5 = !import_core11.isWeb && D13 && $8, H14 = (0, import_react13.useContext)(Te), rt = (0, import_react13.useCallback)((e22) => {
    ot(e22);
  }, []), K10 = (0, import_react13.useMemo)(() => {
    if (oe9 || !d19 || $8)
      return;
    const e22 = R17[0];
    u15.paneMinY = e22;
    let r30 = v14.current;
    function p23(S19) {
      N && (S19 ? N.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }" : N.innerText = "");
    }
    __name(p23, "p");
    const f24 = /* @__PURE__ */ __name(({ vy: S19, dragAt: m22 }) => {
      X9 = false, he5 = false, p23(false);
      const P16 = m22 + r30 + d19 * S19 * 0.2;
      let O10 = 0, Se4 = 1 / 0;
      for (let M16 = 0; M16 < R17.length; M16++) {
        const U10 = R17[M16], Pe8 = P16 > U10 ? P16 - U10 : U10 - P16;
        Pe8 < Se4 && (Se4 = Pe8, O10 = M16);
      }
      x17(O10), I10(O10);
    }, "f"), w21 = /* @__PURE__ */ __name((S19, m22) => {
      f24({ vy: m22.vy, dragAt: m22.dy });
    }, "w");
    let he5 = false;
    const dt = /* @__PURE__ */ __name((S19, { dy: m22 }) => {
      const V15 = u15.y !== 0, P16 = m22 < 0, O10 = u15.paneY - 5 <= u15.paneMinY;
      return V15 ? (he5 = true, false) : O10 && !V15 && P16 ? false : Math.abs(m22) > 5;
    }, "dt"), fe5 = /* @__PURE__ */ __name(() => {
      p23(true), se6(), r30 = v14.current;
    }, "fe");
    let X9 = false;
    return u15.drag = (S19) => {
      X9 || (X9 = true, fe5());
      const m22 = S19 + r30;
      c26.setValue(Ie(m22, e22), { type: "direct" });
    }, u15.release = f24, import_react_native4.PanResponder.create({ onMoveShouldSetPanResponder: dt, onPanResponderGrant: fe5, onPanResponderMove: (S19, { dy: m22 }) => {
      const V15 = m22 + r30, P16 = Ie(V15, e22);
      c26.setValue(P16, { type: "direct" });
    }, onPanResponderEnd: w21, onPanResponderTerminate: w21, onPanResponderRelease: w21 });
  }, [oe9, $8, I10, d19, R17, x17]);
  let ue3 = null, de7 = null, pe4 = null;
  import_react13.default.Children.forEach(_e3, (e22) => {
    var r30, p23;
    if ((0, import_react13.isValidElement)(e22))
      switch ((p23 = (r30 = e22.type) == null ? void 0 : r30.staticConfig) == null ? void 0 : p23.componentName) {
        case "SheetHandle":
          ue3 = e22;
          break;
        case "Sheet":
          pe4 = e22;
          break;
        case "SheetOverlay":
          de7 = e22;
          break;
        default:
          console.warn("Warning: passed invalid child to Sheet", e22);
      }
  });
  const st = nt(c26, (e22) => ({ transform: [{ translateY: d19 === 0 ? Y2 : e22 }] })), E16 = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
    if (import_core11.isWeb || !Xe2)
      return;
    const e22 = import_react_native4.Keyboard.addListener("keyboardDidShow", (p23) => {
      E16.current === null && (E16.current = c26.getValue(), c26.setValue(Math.max(c26.getValue() - p23.endCoordinates.height, 0)));
    }), r30 = import_react_native4.Keyboard.addListener("keyboardDidHide", () => {
      E16.current !== null && (c26.setValue(E16.current), E16.current = null);
    });
    return () => {
      r30.remove(), e22.remove();
    };
  }, []);
  const at = y14.NumberView ?? y14.View;
  (0, import_core11.useIsomorphicLayoutEffect)(() => {
    if (H14 && a18)
      return H14(true), () => {
        H14(false);
      };
  }, [H14, a18]);
  const it = (0, import_react13.useMemo)(() => ({ zIndex: T16 }), [T16]), lt = (0, import_react13.useCallback)((e22) => {
    var p23;
    let r30 = (p23 = e22.nativeEvent) == null ? void 0 : p23.layout.height;
    import_core11.isWeb && import_core11.isTouchable && !a18 && (r30 += 100), r30 && Qe2(() => r30);
  }, [Ze3]), ct = $e3 ?? (a18 && D13), me5 = (0, import_jsx_runtime10.jsx)(Ae.Provider, { value: it, children: (0, import_jsx_runtime10.jsxs)(h4, { modal: D13, contentRef: re5, frameSize: d19, dismissOnOverlayPress: ze5, dismissOnSnapToBottom: b16, open: a18, hidden: !!s22, scope: B10, position: C14, snapPoints: g16, setPosition: x17, setOpen: z13, scrollBridge: u15, children: [ce5 ? null : de7, (0, import_jsx_runtime10.jsxs)(at, { ref: We3, ...K10 == null ? void 0 : K10.panHandlers, onLayout: lt, pointerEvents: a18 && !ce5 ? "auto" : "none", animation: o20.animation, style: [{ position: "absolute", zIndex: T16, width: "100%", height: "100%", opacity: ie5 }, st], children: [ue3, (0, import_jsx_runtime10.jsx)(r5, { forwardProps: true, enabled: ct, allowPinchZoom: true, shards: [re5], removeScrollBar: false, children: pe4 })] })] }) }), ut = (0, import_react13.useContext)(a2);
  if (D13) {
    const e22 = (0, import_jsx_runtime10.jsx)(x5, { zIndex: T16, ...Ue4, children: (0, import_jsx_runtime10.jsx)(import_core11.Theme, { forceClassName: true, name: qe3, children: (0, import_jsx_runtime10.jsx)(a2.Provider, { value: ut, children: me5 }) }) });
    return import_core11.isWeb ? e22 : (0, import_jsx_runtime10.jsx)(Te.Provider, { value: rt, children: e22 });
  }
  return me5;
}), { componentName: "Sheet" });
var Te = (0, import_react13.createContext)(null);
var Sn = Mt;
function _t(n19, o20) {
  if (!o20)
    return 0;
  if (n19 === void 0)
    return console.warn("No snapPoint"), 0;
  const t28 = n19 / 100;
  return Math.round(o20 - t28 * o20);
}
__name(_t, "_t");
function Ie(n19, o20, t28 = 25) {
  if (n19 < o20) {
    const i23 = o20 - n19, s22 = Math.min(t28, i23) / t28, B10 = -(1.1 - Math.pow(0.1, s22)) * t28;
    return o20 + B10;
  }
  return n19;
}
__name(Ie, "Ie");
var He = (0, import_react13.createContext)(null);
var Pn = /* @__PURE__ */ __name(({ children: n19, onOpenChange: o20, ...t28 }) => {
  const i23 = (0, import_core11.useEvent)(o20), s22 = (0, import_react13.useMemo)(() => ({ open: t28.open, hidden: t28.hidden, disableDrag: t28.disableDrag, onOpenChange: i23 }), [i23, t28.open, t28.hidden, t28.disableDrag]);
  return (0, import_jsx_runtime10.jsx)(He.Provider, { value: s22, children: n19 });
}, "Pn");

// node_modules/@tamagui/text/dist/esm/SizableText.js
var import_get_font_sized = __toESM(require_cjs7());
var import_web3 = require("@tamagui/core-node");
var s5 = (0, import_web3.styled)(import_web3.Text, { name: "SizableText", fontFamily: "$body", variants: { size: import_get_font_sized.getFontSized }, defaultVariants: { size: "$true" } });

// node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_web4 = require("@tamagui/core-node");
var p7 = (0, import_web4.styled)(s5, { name: "Paragraph", tag: "p", userSelect: "auto", color: "$color", size: "$true" });

// node_modules/@tamagui/text/dist/esm/Headings.js
var import_web5 = require("@tamagui/core-node");
var t9 = (0, import_web5.styled)(p7, { tag: "span", name: "Heading", accessibilityRole: "header", fontFamily: "$heading", size: "$8", margin: 0 });
var s6 = (0, import_web5.styled)(t9, { name: "H1", tag: "h1", size: "$10" });
var i8 = (0, import_web5.styled)(t9, { name: "H2", tag: "h2", size: "$9" });
var r9 = (0, import_web5.styled)(t9, { name: "H3", tag: "h3", size: "$8" });
var H = (0, import_web5.styled)(t9, { name: "H4", tag: "h4", size: "$7" });
var m6 = (0, import_web5.styled)(t9, { name: "H5", tag: "h5", size: "$6" });
var g5 = (0, import_web5.styled)(t9, { name: "H6", tag: "h6", size: "$5" });

// node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_react14 = __toESM(require("react"));
function W5(d19, x17, m22) {
  const { children: i23, textProps: u15, size: l21, noTextWrap: z13, color: s22, fontFamily: f24, fontSize: c26, fontWeight: a18, letterSpacing: p23, textAlign: h16, fontStyle: g16 } = x17;
  if (z13 || !i23)
    return [i23];
  const T16 = import_react14.default.Children.toArray(i23), e22 = [];
  let o20 = false;
  const t28 = { ...m22 };
  s22 && (t28.color = s22), f24 && (t28.fontFamily = f24), c26 && (t28.fontSize = c26), a18 && (t28.fontWeight = a18), p23 && (t28.letterSpacing = p23), h16 && (t28.textAlign = h16), l21 && (t28.size = l21), g16 && (t28.fontStyle = g16);
  function y14() {
    if (!o20)
      return;
    const n19 = e22.length - 1, r30 = e22[n19];
    e22[n19] = (0, import_jsx_runtime11.jsx)(d19, { ...t28, ...u15, children: r30 }, n19);
  }
  __name(y14, "y");
  for (const n19 of T16) {
    const r30 = e22[e22.length - 1], S19 = typeof n19 == "string";
    S19 ? o20 ? r30.push(n19) : e22.push([n19]) : (y14(), e22.push(n19)), o20 = S19;
  }
  return y14(), e22;
}
__name(W5, "W");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var c8 = __toESM(require("react"));
var Y3 = "Dialog";
var [Z2, _e] = V(Y3);
var [$2, g6] = Z2(Y3);
var w4 = "DialogTrigger";
var Me2 = (0, import_core12.styled)(c5, { name: w4 });
var _5 = c8.forwardRef((e22, o20) => {
  const { __scopeDialog: n19, ...t28 } = e22, r30 = g6(w4, n19), s22 = c3(o20, r30.triggerRef);
  return (0, import_jsx_runtime12.jsx)(Me2, { tag: "button", "aria-haspopup": "dialog", "aria-expanded": r30.open, "aria-controls": r30.contentId, "data-state": G4(r30.open), ...t28, ref: s22, onPress: (0, import_core12.composeEventHandlers)(e22.onPress, r30.onOpenToggle) });
});
_5.displayName = w4;
var R6 = "DialogPortal";
var [ke2, K3] = Z2(R6, { forceMount: void 0 });
var We = (0, import_core12.styled)(c5, { alignItems: "center", justifyContent: "center", fullscreen: true, zIndex: 100, ...import_core12.isWeb && { maxHeight: "100vh", position: "fixed" } });
var j2 = /* @__PURE__ */ __name((e22) => {
  const o20 = (0, import_core12.useThemeName)(), n19 = g6(R6, e22.__scopeDialog);
  return (0, import_jsx_runtime12.jsx)(B3, { hostName: e22.hostName, children: (0, import_jsx_runtime12.jsx)(Ve2, { ...e22, themeName: o20, context: n19 }) });
}, "j");
function Ve2(e22) {
  const { __scopeDialog: o20, children: n19, context: t28, themeName: r30, space: s22, spaceDirection: a18, separator: l21 } = e22;
  let u15 = n19;
  return (s22 || l21) && (u15 = (0, import_core12.spacedChildren)({ children: n19, separator: l21, space: s22, direction: a18 })), (0, import_jsx_runtime12.jsx)($2, { scope: o20, ...t28, children: (0, import_jsx_runtime12.jsx)(import_core12.Theme, { name: r30, children: u15 }) });
}
__name(Ve2, "Ve");
var M3 = /* @__PURE__ */ __name((e22) => {
  const { __scopeDialog: o20, forceMount: n19, children: t28, ...r30 } = e22, s22 = g6(R6, o20), a18 = n19 || s22.open, [l21, u15] = c8.useState(!a18);
  a18 && l21 && u15(false);
  const d19 = (0, import_jsx_runtime12.jsx)(B, { onExitComplete: () => {
    u15(true);
  }, children: a18 ? t28 : null });
  return h6(s22) ? t28 : s22.modal ? l21 ? null : (0, import_jsx_runtime12.jsx)(j2, { __scopeDialog: o20, children: (0, import_jsx_runtime12.jsx)(ke2, { scope: o20, forceMount: n19, children: (0, import_jsx_runtime12.jsx)(We, { pointerEvents: a18 ? "auto" : "none", ...r30, children: d19 }) }) }) : d19;
}, "M");
M3.displayName = R6;
var x7 = "DialogOverlay";
var z4 = (0, import_core12.styled)(ke, { name: x7 });
var k6 = z4.extractable(c8.forwardRef(({ __scopeDialog: e22, ...o20 }, n19) => {
  const t28 = K3(x7, e22), { forceMount: r30 = t28.forceMount, ...s22 } = o20, a18 = g6(x7, e22), l21 = h6(a18);
  return !r30 && (!a18.modal || l21) ? null : (0, import_jsx_runtime12.jsx)(He2, { context: a18, ...s22, ref: n19 });
}));
k6.displayName = x7;
var He2 = c8.forwardRef((e22, o20) => {
  const { context: n19, ...t28 } = e22;
  return (0, import_jsx_runtime12.jsx)(z4, { "data-state": G4(n19.open), pointerEvents: n19.open ? "auto" : "none", ...t28, ref: o20 });
});
var C4 = "DialogContent";
var U3 = (0, import_core12.styled)(k3, { name: C4, tag: "dialog", position: "relative", backgrounded: true, padded: true, radiused: true, elevate: true, variants: { size: { "...size": (e22, o20) => ({}) } }, defaultVariants: { size: "$true" } });
var W6 = U3.extractable(c8.forwardRef(({ __scopeDialog: e22, ...o20 }, n19) => {
  const t28 = K3(C4, e22), { forceMount: r30 = t28.forceMount, ...s22 } = o20, a18 = g6(C4, e22), l21 = a18.modal ? (0, import_jsx_runtime12.jsx)(Le, { context: a18, ...s22, ref: n19 }) : (0, import_jsx_runtime12.jsx)(Ge, { context: a18, ...s22, ref: n19 });
  return import_core12.isWeb ? (0, import_jsx_runtime12.jsx)(r5, { forwardProps: true, enabled: a18.open, allowPinchZoom: a18.allowPinchZoom, shards: [a18.contentRef], removeScrollBar: false, children: (0, import_jsx_runtime12.jsx)("div", { className: "_dsp_contents", children: l21 }) }) : l21;
}));
W6.displayName = C4;
var Le = c8.forwardRef(({ children: e22, context: o20, ...n19 }, t28) => {
  const r30 = c8.useRef(null), s22 = c3(t28, o20.contentRef, r30);
  return import_core12.isWeb && c8.useEffect(() => {
    if (!o20.open)
      return;
    const a18 = r30.current;
    if (a18)
      return (0, import_aria_hidden.hideOthers)(a18);
  }, [o20.open]), (0, import_jsx_runtime12.jsx)(q4, { ...n19, context: o20, ref: s22, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, import_core12.composeEventHandlers)(n19.onCloseAutoFocus, (a18) => {
    var l21;
    a18.preventDefault(), (l21 = o20.triggerRef.current) == null || l21.focus();
  }), onPointerDownOutside: (0, import_core12.composeEventHandlers)(n19.onPointerDownOutside, (a18) => {
    const l21 = a18.detail.originalEvent, u15 = l21.button === 0 && l21.ctrlKey === true;
    (l21.button === 2 || u15) && a18.preventDefault();
  }), onFocusOutside: (0, import_core12.composeEventHandlers)(n19.onFocusOutside, (a18) => a18.preventDefault()), children: e22 });
});
var Ge = c8.forwardRef((e22, o20) => {
  const n19 = c8.useRef(false);
  return (0, import_jsx_runtime12.jsx)(q4, { ...e22, ref: o20, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t28) => {
    var r30, s22;
    (r30 = e22.onCloseAutoFocus) == null || r30.call(e22, t28), t28.defaultPrevented || (n19.current || (s22 = e22.context.triggerRef.current) == null || s22.focus(), t28.preventDefault()), n19.current = false;
  }, onInteractOutside: (t28) => {
    var l21;
    (l21 = e22.onInteractOutside) == null || l21.call(e22, t28), t28.defaultPrevented || (n19.current = true);
    const r30 = t28.target, s22 = e22.context.triggerRef.current;
    if (!(s22 instanceof HTMLElement))
      return;
    s22.contains(r30) && t28.preventDefault();
  } });
});
var q4 = c8.forwardRef((e22, o20) => {
  const { __scopeDialog: n19, trapFocus: t28, onOpenAutoFocus: r30, onCloseAutoFocus: s22, disableOutsidePointerEvents: a18, onEscapeKeyDown: l21, onPointerDownOutside: u15, onFocusOutside: d19, onInteractOutside: S19, context: p23, ...y14 } = e22, T16 = c8.useRef(null), E16 = c3(o20, T16), O10 = h6(p23), v14 = (0, import_jsx_runtime12.jsx)(U3, { id: p23.contentId, "aria-describedby": p23.descriptionId, "aria-labelledby": p23.titleId, "data-state": G4(p23.open), ...y14 });
  return O10 ? (0, import_jsx_runtime12.jsx)(j2, { hostName: oe(p23), children: y14.children }) : import_core12.isWeb ? (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [(0, import_jsx_runtime12.jsx)(import_focus_scope.FocusScope, { loop: true, trapped: t28, onMountAutoFocus: r30, forceUnmount: !p23.open, onUnmountAutoFocus: s22, children: (0, import_jsx_runtime12.jsx)(T3, { disableOutsidePointerEvents: p23.open && a18, forceUnmount: !p23.open, onEscapeKeyDown: l21, onPointerDownOutside: u15, onFocusOutside: d19, onInteractOutside: S19, ref: E16, onDismiss: () => p23.onOpenChange(false), children: v14 }) }), process.env.NODE_ENV === "development" && (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [(0, import_jsx_runtime12.jsx)($e, { titleId: p23.titleId }), (0, import_jsx_runtime12.jsx)(je, { contentRef: T16, descriptionId: p23.descriptionId })] })] }) : v14;
});
var I3 = "DialogTitle";
var Be = (0, import_core12.styled)(i8, { name: I3 });
var V4 = c8.forwardRef((e22, o20) => {
  const { __scopeDialog: n19, ...t28 } = e22, r30 = g6(I3, n19);
  return (0, import_jsx_runtime12.jsx)(Be, { id: r30.titleId, ...t28, ref: o20 });
});
V4.displayName = I3;
var Ye = (0, import_core12.styled)(p7, { name: "DialogDescription" });
var J4 = "DialogDescription";
var H7 = c8.forwardRef((e22, o20) => {
  const { __scopeDialog: n19, ...t28 } = e22, r30 = g6(J4, n19);
  return (0, import_jsx_runtime12.jsx)(Ye, { id: r30.descriptionId, ...t28, ref: o20 });
});
H7.displayName = J4;
var Q2 = "DialogClose";
var L3 = c8.forwardRef((e22, o20) => {
  const { __scopeDialog: n19, displayWhenAdapted: t28, ...r30 } = e22, s22 = g6(Q2, n19, { warn: false, fallback: {} });
  return h6(s22) && !t28 ? null : (0, import_jsx_runtime12.jsx)(c5, { tag: "button", accessibilityLabel: "Dialog Close", ...r30, ref: o20, onPress: (0, import_core12.composeEventHandlers)(e22.onPress, () => s22.onOpenChange(false)) });
});
L3.displayName = Q2;
function G4(e22) {
  return e22 ? "open" : "closed";
}
__name(G4, "G");
var X2 = "DialogTitleWarning";
var [Ze, ee2] = T(X2, { contentName: C4, titleName: I3, docsSlug: "dialog" });
var $e = /* @__PURE__ */ __name(({ titleId: e22 }) => {
  if (process.env.NODE_ENV === "development") {
    const o20 = ee2(X2), n19 = `\`${o20.contentName}\` requires a \`${o20.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o20.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o20.docsSlug}`;
    c8.useEffect(() => {
      import_core12.isWeb && e22 && (document.getElementById(e22) || console.warn(n19));
    }, [n19, e22]);
  }
  return null;
}, "$e");
var Ke = "DialogDescriptionWarning";
var je = /* @__PURE__ */ __name(({ contentRef: e22, descriptionId: o20 }) => {
  if (process.env.NODE_ENV === "development") {
    const t28 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ee2(Ke).contentName}}.`;
    c8.useEffect(() => {
      if (!import_core12.isWeb)
        return;
      const r30 = e22.current;
      if (!(r30 instanceof HTMLElement))
        return;
      const s22 = r30.getAttribute("aria-describedby");
      o20 && s22 && (document.getElementById(o20) || console.warn(t28));
    }, [t28, e22, o20]);
  }
  return null;
}, "je");
var ze = (0, import_core12.withStaticProperties)(c8.forwardRef(function(o20, n19) {
  const { __scopeDialog: t28, children: r30, open: s22, defaultOpen: a18 = false, onOpenChange: l21, modal: u15 = true, allowPinchZoom: d19 = false } = o20, S19 = (0, import_core12.useId)(), p23 = (0, import_core12.useId)(), y14 = (0, import_core12.useId)(), T16 = (0, import_core12.useId)(), E16 = t28 ? Object.keys(t28)[0] : S19, O10 = oe({ scopeKey: E16, contentId: p23 }), v14 = c8.useRef(null), ae4 = c8.useRef(null), [se6, m22] = A4({ prop: s22, defaultProp: a18, onChange: l21 }), ie5 = c8.useCallback(() => {
    m22((b16) => !b16);
  }, [m22]), le5 = { scope: t28, scopeKey: E16, triggerRef: v14, contentRef: ae4, contentId: p23, titleId: y14, descriptionId: T16, open: se6, onOpenChange: m22, onOpenToggle: ie5, modal: u15, allowPinchZoom: d19 }, { when: ce5, AdaptProvider: pe4 } = W({ Contents: c8.useCallback((b16) => (0, import_jsx_runtime12.jsx)(x6, { forwardProps: b16, name: O10 }), [O10]) });
  return c8.useImperativeHandle(n19, () => ({ open: m22 }), [m22]), (0, import_jsx_runtime12.jsx)(pe4, { children: (0, import_jsx_runtime12.jsx)($2, { ...le5, sheetBreakpoint: ce5, children: (0, import_jsx_runtime12.jsx)(Je, { onOpenChange: m22, __scopeDialog: t28, children: r30 }) }) });
}), { Trigger: _5, Portal: M3, Overlay: k6, Content: W6, Title: V4, Description: H7, Close: L3, Sheet: Sn, Adapt: b });
var Ue = "DialogSheetContents";
var qe = /* @__PURE__ */ __name(({ name: e22, ...o20 }) => (0, import_jsx_runtime12.jsx)(x6, { forwardProps: o20, name: e22 }), "qe");
qe.displayName = Ue;
var oe = /* @__PURE__ */ __name(({ scopeKey: e22, contentId: o20 }) => `${e22 || o20}SheetContents`, "oe");
var Je = /* @__PURE__ */ __name((e22) => {
  const o20 = g6("DialogSheetController", e22.__scopeDialog), n19 = h6(o20), t28 = te(o20), r30 = (0, import_core12.useGet)(n19);
  return (0, import_jsx_runtime12.jsx)(Pn, { onOpenChange: (s22) => {
    r30() && e22.onOpenChange(s22);
  }, open: o20.open, hidden: t28 === false, children: e22.children });
}, "Je");
var te = /* @__PURE__ */ __name((e22) => {
  const o20 = (0, import_core12.useMedia)();
  return e22.sheetBreakpoint ? e22.sheetBreakpoint === true ? true : o20[e22.sheetBreakpoint] : false;
}, "te");
var h6 = /* @__PURE__ */ __name((e22) => {
  const o20 = te(e22);
  return e22.open === false ? false : o20;
}, "h");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var a9 = __toESM(require("react"));
var import_react_native5 = require("react-native-web-lite");
var G5 = "AlertDialog";
var [ce, pe] = V(G5, [_e]);
var p8 = _e();
var $3 = "AlertDialogTrigger";
var ge = (0, import_core13.styled)(c5, { name: "DialogTrigger" });
var f7 = a9.forwardRef((o20, t28) => {
  if (o20.__native) {
    const { __native: D13, onPress: i23, __onPress: u15, ...g16 } = o20;
    return (0, import_jsx_runtime13.jsx)(ge, { ...g16, onPress: (0, import_core13.composeEventHandlers)(i23, u15) });
  }
  const { __scopeAlertDialog: e22, ...r30 } = o20, l21 = p8(e22);
  return (0, import_jsx_runtime13.jsx)(_5, { ...l21, ...r30, ref: t28 });
});
f7.displayName = $3;
var De3 = "AlertDialogPortal";
var m7 = /* @__PURE__ */ __name((o20) => {
  const { __scopeAlertDialog: t28, ...e22 } = o20, r30 = p8(t28);
  return (0, import_jsx_runtime13.jsx)(M3, { ...r30, ...e22 });
}, "m");
m7.displayName = De3;
var Y4 = "AlertDialogOverlay";
var ue = (0, import_core13.styled)(z4, { name: Y4 });
var y4 = ue.extractable(a9.forwardRef((o20, t28) => {
  const { __scopeAlertDialog: e22, ...r30 } = o20, l21 = p8(e22);
  return (0, import_jsx_runtime13.jsx)(k6, { ...l21, ...r30, ref: t28 });
}));
y4.displayName = Y4;
var A6 = "AlertDialogContent";
var [Ae2, de] = ce(A6);
var C5 = a9.forwardRef((o20, t28) => {
  const { __scopeAlertDialog: e22, children: r30, ...l21 } = o20, D13 = p8(e22), i23 = a9.useRef(null), u15 = c3(t28, i23), g16 = a9.useRef(null);
  return (0, import_jsx_runtime13.jsx)(Ze, { contentName: A6, titleName: T6, docsSlug: "alert-dialog", children: (0, import_jsx_runtime13.jsx)(Ae2, { scope: e22, cancelRef: g16, children: (0, import_jsx_runtime13.jsxs)(W6, { role: "alertdialog", ...D13, ...l21, ref: u15, onOpenAutoFocus: (0, import_core13.composeEventHandlers)(l21.onOpenAutoFocus, (s22) => {
    var d19;
    s22.preventDefault(), import_core13.isWeb && ((d19 = g16.current) == null || d19.focus({ preventScroll: true }));
  }), onPointerDownOutside: (s22) => s22.preventDefault(), onInteractOutside: (s22) => s22.preventDefault(), children: [(0, import_jsx_runtime13.jsx)(import_core13.Slottable, { children: r30 }), process.env.NODE_ENV === "development" && (0, import_jsx_runtime13.jsx)(Pe2, { contentRef: i23 })] }) }) });
});
C5.displayName = A6;
var T6 = "AlertDialogTitle";
var v5 = a9.forwardRef((o20, t28) => {
  const { __scopeAlertDialog: e22, ...r30 } = o20, l21 = p8(e22);
  return (0, import_jsx_runtime13.jsx)(V4, { ...l21, ...r30, ref: t28 });
});
v5.displayName = T6;
var E2 = "AlertDialogDescription";
var _6 = a9.forwardRef((o20, t28) => {
  const { __scopeAlertDialog: e22, ...r30 } = o20, l21 = p8(e22);
  return (0, import_jsx_runtime13.jsx)(H7, { ...l21, ...r30, ref: t28 });
});
_6.displayName = E2;
var R7 = "AlertDialogAction";
var S2 = a9.forwardRef((o20, t28) => {
  const { __scopeAlertDialog: e22, ...r30 } = o20, l21 = p8(e22);
  return (0, import_jsx_runtime13.jsx)(L3, { ...l21, ...r30, ref: t28 });
});
S2.displayName = R7;
var N3 = "AlertDialogCancel";
var O2 = a9.forwardRef((o20, t28) => {
  const { __scopeAlertDialog: e22, ...r30 } = o20, { cancelRef: l21 } = de(N3, e22), D13 = p8(e22), i23 = c3(t28, l21);
  return (0, import_jsx_runtime13.jsx)(L3, { ...D13, ...r30, ref: i23 });
});
O2.displayName = N3;
var Pe2 = /* @__PURE__ */ __name(({ contentRef: o20 }) => (process.env.NODE_ENV === "development" && a9.useEffect(() => {
  var e22;
  if (!import_core13.isWeb)
    return;
  document.getElementById((e22 = o20.current) == null ? void 0 : e22.getAttribute("aria-describedby")) || console.warn(`\`${A6}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${A6}\` by passing a \`${E2}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${A6}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
}, [o20]), null), "Pe");
var fe2 = /* @__PURE__ */ __name((o20) => {
  const { __scopeAlertDialog: t28, native: e22, ...r30 } = o20, l21 = p8(t28);
  if (process.env.TAMAGUI_TARGET === "native") {
    const [D13, i23] = A4({ prop: o20.open, defaultProp: o20.defaultOpen || false, onChange: o20.onOpenChange, transition: true });
    let u15 = null, g16 = "", s22 = "";
    const d19 = [];
    if (b6(a9.Children.toArray(o20.children), (c26) => {
      if (!a9.isValidElement(c26))
        return false;
      const x17 = (0, import_core13.isTamaguiElement)(c26) ? c26.type.staticConfig.componentName : c26.type.displayName;
      switch (x17) {
        case $3:
          return u15 = a9.cloneElement(c26, { __native: true }), false;
        case T6:
          return g16 = h7(c26), false;
        case E2:
          return s22 = h7(c26), false;
        case R7:
        case N3: {
          const k16 = x17 === R7 ? "default" : "cancel", q12 = h7(c26), B10 = /* @__PURE__ */ __name(() => {
            var w21;
            const P16 = c26.props;
            (w21 = P16 == null ? void 0 : P16.onPress) == null || w21.call(P16, { native: true }), i23(false);
          }, "B");
          return d19.push({ style: k16, text: q12, onPress: B10 }), false;
        }
        default:
          return true;
      }
    }), (0, import_core13.useIsomorphicLayoutEffect)(() => {
      !D13 || !e22 || (g16 || s22) && import_react_native5.Alert.alert(g16, s22, d19);
    }, [e22, D13]), e22)
      return a9.cloneElement(u15, { __onPress: () => {
        i23(true);
      } });
  }
  return (0, import_jsx_runtime13.jsx)(ze, { ...l21, ...r30, modal: true });
}, "fe");
function b6(o20, t28) {
  for (const e22 of o20)
    a9.isValidElement(e22) && t28(e22) && e22.props.children && b6(a9.Children.toArray(e22.props.children), t28);
}
__name(b6, "b");
function h7(o20) {
  let t28 = "";
  return b6(a9.Children.toArray(o20), (e22) => typeof e22.props.children == "string" ? (t28 = e22.props.children, false) : true), t28;
}
__name(h7, "h");
var j3 = (0, import_core13.withStaticProperties)(fe2, { Trigger: f7, Portal: m7, Overlay: y4, Content: C5, Action: S2, Cancel: O2, Title: v5, Description: _6 });
j3.displayName = G5;

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_jsx_runtime14 = require("react/jsx-runtime");
var import_core14 = require("@tamagui/core-node");
var import_image = __toESM(require_cjs8());

// node_modules/@tamagui/shapes/dist/esm/Square.js
var import_web6 = require("@tamagui/core-node");

// node_modules/@tamagui/shapes/dist/esm/getShapeSize.js
var h8 = /* @__PURE__ */ __name((t28, { tokens: r30 }) => {
  const i23 = r30.size[t28] ?? t28, a18 = r30.size[t28] ?? t28;
  return { width: i23, height: a18, minWidth: i23, maxWidth: i23, maxHeight: a18, minHeight: a18 };
}, "h");

// node_modules/@tamagui/shapes/dist/esm/Square.js
var p9 = (0, import_web6.styled)(k3, { name: "Square", alignItems: "center", justifyContent: "center", variants: { circular: { true: { borderRadius: 1e5 } }, size: { "...size": h8 } } });

// node_modules/@tamagui/shapes/dist/esm/Circle.js
var import_web7 = require("@tamagui/core-node");
var c9 = (0, import_web7.styled)(p9, { name: "Circle", circular: true });

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var t10 = __toESM(require("react"));
var m8 = "Avatar";
var [_7, N4] = V(m8);
var [T7, P9] = _7(m8);
var I4 = "AvatarImage";
var l8 = t10.forwardRef((e22, r30) => {
  var v14;
  const { __scopeAvatar: s22, src: a18, onLoadingStatusChange: n19 = /* @__PURE__ */ __name(() => {
  }, "n"), ...i23 } = e22, o20 = P9(I4, s22), [c26, p23] = t10.useState("idle"), b16 = (0, import_core14.getVariantExtras)(e22), g16 = (0, import_core14.getVariableValue)((v14 = h8(o20.size, b16)) == null ? void 0 : v14.width);
  return t10.useEffect(() => {
    p23("idle");
  }, [JSON.stringify(a18)]), t10.useEffect(() => {
    n19(c26), o20.onImageLoadingStatusChange(c26);
  }, [c26]), (0, import_jsx_runtime14.jsx)(c5, { fullscreen: true, zIndex: 1, children: (0, import_jsx_runtime14.jsx)(import_image.Image, { fullscreen: true, ...typeof g16 == "number" && !isNaN(g16) && { width: g16, height: g16 }, ...i23, ref: r30, src: a18, onError: () => {
    p23("error");
  }, onLoad: () => {
    p23("loaded");
  } }) });
});
l8.displayName = I4;
var u9 = "AvatarFallback";
var L4 = (0, import_core14.styled)(c5, { name: u9, position: "absolute", fullscreen: true, zIndex: 0 });
var A7 = L4.extractable(t10.forwardRef((e22, r30) => {
  const { __scopeAvatar: s22, delayMs: a18, ...n19 } = e22, i23 = P9(u9, s22), [o20, c26] = t10.useState(a18 === void 0);
  return t10.useEffect(() => {
    if (a18 !== void 0) {
      const p23 = setTimeout(() => c26(true), a18);
      return () => clearTimeout(p23);
    }
  }, [a18]), o20 && i23.imageLoadingStatus !== "loaded" ? (0, import_jsx_runtime14.jsx)(L4, { ...n19, ref: r30 }) : null;
}));
A7.displayName = u9;
var w5 = (0, import_core14.styled)(p9, { name: m8, position: "relative", overflow: "hidden" });
var y5 = (0, import_core14.withStaticProperties)(t10.forwardRef((e22, r30) => {
  const { __scopeAvatar: s22, size: a18 = "$true", ...n19 } = e22, [i23, o20] = t10.useState("idle");
  return (0, import_jsx_runtime14.jsx)(T7, { size: a18, scope: s22, imageLoadingStatus: i23, onImageLoadingStatusChange: o20, children: (0, import_jsx_runtime14.jsx)(w5, { size: a18, ...n19, ref: r30 }) });
}), { Image: l8, Fallback: A7 });
y5.displayName = m8;

// node_modules/@tamagui/button/dist/esm/Button.js
var import_jsx_runtime15 = require("react/jsx-runtime");
var import_font_size = __toESM(require_cjs9());
var import_get_button_sized2 = __toESM(require_cjs6());
var import_helpers_tamagui = __toESM(require_cjs12());
var import_web8 = require("@tamagui/core-node");
var import_react15 = require("react");
var J6 = "Button";
var i10 = (0, import_web8.styled)(k3, { name: J6, tag: "button", justifyContent: "center", alignItems: "center", flexWrap: "nowrap", flexDirection: "row", cursor: "pointer", variants: { defaultStyle: { true: { focusable: true, hoverTheme: true, pressTheme: true, backgrounded: true, borderWidth: 1, borderColor: "transparent", pressStyle: { borderColor: "transparent" }, hoverStyle: { borderColor: "transparent" }, focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": import_get_button_sized2.getButtonSized }, active: { true: { hoverStyle: { backgroundColor: "$background" } } }, disabled: { true: { pointerEvents: "none" } } }, defaultVariants: { size: "$true" } });
var c10 = (0, import_web8.styled)(s5, { name: "ButtonText", userSelect: "none", cursor: "pointer", flexGrow: 0, flexShrink: 1, ellipse: true, variants: { defaultStyle: { true: { color: "$color" } } } });
var O3 = (0, import_react15.forwardRef)(function(o20, l21) {
  const { props: { unstyled: n19, ...r30 } } = j4(o20);
  return (0, import_jsx_runtime15.jsx)(i10, { defaultStyle: !n19, ...r30, ref: l21 });
});
var X3 = { inlineProps: /* @__PURE__ */ new Set(["color", "fontWeight", "fontSize", "fontFamily", "fontStyle", "letterSpacing", "textAlign", "unstyled"]) };
var de2 = i10.extractable((0, import_web8.themeable)(O3, i10.staticConfig), X3);
function j4(t28, { Text: o20 = c10 } = { Text: c10 }) {
  const { children: l21, icon: n19, iconAfter: r30, noTextWrap: q12, theme: H14, space: K10, spaceFlex: x17, scaleIcon: y14 = 1, scaleSpace: h16 = 0.66, separator: g16, color: C14, fontWeight: L14, letterSpacing: Q9, fontSize: U10, fontFamily: Y11, fontStyle: Z10, textAlign: _13, textProps: ee11, ...P16 } = t28, a18 = import_web8.isRSC ? false : (0, import_react15.useContext)(import_web8.ButtonNestingContext), e22 = (0, import_web8.useMediaPropsActive)(t28), s22 = e22.size || "$true", u15 = (typeof s22 == "number" ? s22 * 0.5 : (0, import_font_size.getFontSize)(s22)) * y14, T16 = (0, import_helpers_tamagui.useGetThemedIcon)({ size: u15, color: C14 }), [B10, z13] = [n19, r30].map(T16), p23 = e22.space ?? (0, import_web8.getVariableValue)(u15) * h16, v14 = W5(o20, e22, o20 === c10 ? { defaultStyle: !t28.unstyled } : void 0), m22 = (0, import_web8.spacedChildren)({ space: p23, spaceFlex: x17, separator: g16, direction: e22.flexDirection === "column" || e22.flexDirection === "column-reverse" ? "vertical" : "horizontal", children: [B10, ...v14, z13] }), F16 = a18 ? "span" : t28.accessibilityRole === "link" ? "a" : void 0, I10 = { ...e22.disabled && { focusable: void 0, focusStyle: { borderColor: "$background" } }, tag: F16, ...P16, children: import_web8.isRSC ? m22 : (0, import_jsx_runtime15.jsx)(import_web8.ButtonNestingContext.Provider, { value: true, children: m22 }) };
  return { spaceSize: p23, isNested: a18, props: I10 };
}
__name(j4, "j");

// node_modules/@tamagui/card/dist/esm/Card.js
var import_jsx_runtime16 = require("react/jsx-runtime");
var import_web9 = require("@tamagui/core-node");
var import_react16 = __toESM(require("react"));
var n6 = (0, import_web9.styled)(k3, { name: "Card", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", position: "relative", overflow: "hidden" } }, size: { "...size": (e22, { tokens: r30 }) => ({ borderRadius: r30.radius[e22] ?? e22 }) } }, defaultVariants: { unstyled: false } });
var s7 = (0, import_web9.styled)(k3, { name: "CardHeader", variants: { unstyled: { false: { zIndex: 10, backgroundColor: "transparent", marginBottom: "auto" } }, size: { "...size": (e22, { tokens: r30 }) => ({ padding: r30.space[e22] ?? e22 }) } } });
var C6 = (0, import_web9.styled)(s7, { name: "CardFooter", variants: { unstyled: { false: { zIndex: 5, flexDirection: "row", marginTop: "auto", marginBottom: 0 } } }, defaultVariants: { unstyled: false } });
var g7 = (0, import_web9.styled)(k3, { name: "CardBackground", variants: { unstyled: { false: { zIndex: 0, fullscreen: true, overflow: "hidden", pointerEvents: "none", padding: 0 } } }, defaultVariants: { unstyled: false } });
var w7 = (0, import_web9.withStaticProperties)(n6.extractable((0, import_react16.forwardRef)(({ size: e22, __scopeCard: r30, children: d19, ...p23 }, i23) => (0, import_jsx_runtime16.jsx)(n6, { ref: i23, ...p23, children: import_react16.default.Children.map(d19, (a18) => (0, import_web9.isTamaguiElement)(a18) && !a18.props.size ? (0, import_react16.cloneElement)(a18, { size: e22 }) : a18) }))), { Header: s7, Footer: C6, Background: g7 });

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs9(), 1), module.exports);

// node_modules/@tamagui/form/dist/esm/Form.js
var import_jsx_runtime17 = require("react/jsx-runtime");
var import_core15 = require("@tamagui/core-node");
var import_react17 = require("react");
var n7 = "Form";
var c12 = (0, import_core15.styled)(import_core15.Stack, { name: n7, tag: "form" });
var [S5] = V(n7);
var [f10, b8] = S5(n7);
var i11 = "FormTrigger";
var F7 = (0, import_core15.styled)(import_core15.Stack, { name: i11 });
var T8 = F7.extractable((0, import_react17.forwardRef)((o20, r30) => {
  const { __scopeForm: e22, children: s22, ...t28 } = o20, P16 = b8(i11, e22);
  return (0, import_jsx_runtime17.jsx)(F7, { tag: "button", ...t28, children: t28.asChild ? (0, import_react17.cloneElement)(s22, { disabled: t28.disabled }) : s22, ref: r30, onPress: (0, import_core15.composeEventHandlers)(o20.onPress, P16.onSubmit) });
}));
function y7({ onSubmit: o20, ...r30 }) {
  return (0, import_jsx_runtime17.jsx)(f10, { scope: r30.__scopeForm, onSubmit: o20, children: (0, import_jsx_runtime17.jsx)(c12, { ...r30, onSubmit: (e22) => e22.preventDefault() }) });
}
__name(y7, "y");
var w8 = (0, import_core15.withStaticProperties)(c12.extractable(y7), { Trigger: T8 });

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs16(), 1), module.exports);
__reExport(esm_exports2, __toESM(require_cjs12(), 1), module.exports);
__reExport(esm_exports2, __toESM(require_cjs8(), 1), module.exports);

// node_modules/@tamagui/label/dist/esm/Label.js
var import_jsx_runtime18 = require("react/jsx-runtime");
var import_focusable = __toESM(require_cjs17());
var import_get_button_sized3 = __toESM(require_cjs6());
var import_get_font_sized2 = __toESM(require_cjs7());
var import_web10 = require("@tamagui/core-node");
var s8 = __toESM(require("react"));
var m11 = "Label";
var [T9, k9] = T(m11, { id: void 0, controlRef: { current: null } });
var L5 = (0, import_web10.styled)(s5, { name: "Label", tag: "label", variants: { unstyled: { false: { size: "$true", color: "$color", backgroundColor: "transparent", display: "flex", alignItems: "center", userSelect: "none", cursor: "default", pressStyle: { color: "$colorPress" } } }, size: { "...size": (e22, r30) => {
  const o20 = (0, import_get_button_sized3.getButtonSized)(e22, r30);
  return { ...(0, import_get_font_sized2.getFontSized)(e22, r30), height: o20.height, lineHeight: o20.height };
} } }, defaultVariants: { unstyled: false } });
var y8 = s8.forwardRef((e22, r30) => {
  const { htmlFor: o20, id: R17, ...h16 } = e22, l21 = s8.useRef(null), f24 = s8.useRef(null), C14 = c3(r30, f24), P16 = (0, import_web10.useId)(), n19 = R17 ?? P16;
  return import_web10.isWeb && s8.useEffect(() => {
    if (o20) {
      const t28 = document.getElementById(o20);
      if (f24.current && t28) {
        const i23 = /* @__PURE__ */ __name(() => t28.getAttribute("aria-labelledby"), "i"), c26 = [n19, i23()].filter(Boolean).join(" ");
        return t28.setAttribute("aria-labelledby", c26), l21.current = t28, () => {
          var b16;
          if (!n19)
            return;
          const u15 = (b16 = i23()) == null ? void 0 : b16.replace(n19, "");
          u15 === "" ? t28.removeAttribute("aria-labelledby") : u15 && t28.setAttribute("aria-labelledby", u15);
        };
      }
    }
  }, [n19, o20]), (0, import_jsx_runtime18.jsx)(T9, { id: n19, controlRef: l21, children: (0, import_jsx_runtime18.jsx)(L5, { role: "heading", id: n19, htmlFor: o20, ...h16, ref: C14, onMouseDown: (t28) => {
    var a18;
    (a18 = e22.onMouseDown) == null || a18.call(e22, t28), !t28.defaultPrevented && t28.detail > 1 && t28.preventDefault();
  }, onPress: (t28) => {
    var a18;
    if ((a18 = e22.onPress) == null || a18.call(e22, t28), import_web10.isWeb) {
      if (o20 || !l21.current || t28.defaultPrevented)
        return;
      const i23 = l21.current.contains(t28.target), c26 = t28.isTrusted === true;
      !i23 && c26 && (l21.current.click(), l21.current.focus());
    } else
      e22.htmlFor && (0, import_focusable.focusFocusable)(e22.htmlFor);
  } }) });
});
y8.displayName = m11;
var w9 = L5.extractable((0, import_web10.themeable)(y8), { neverFlatten: true });
var U5 = /* @__PURE__ */ __name((e22) => {
  const r30 = k9("LabelConsumer"), { controlRef: o20 } = r30;
  return s8.useEffect(() => {
    e22 && (o20.current = e22);
  }, [e22, o20]), r30.id;
}, "U");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs19(), 1), module.exports);

// node_modules/@tamagui/popover/dist/esm/Popover.js
var import_jsx_runtime20 = require("react/jsx-runtime");
var import_aria_hidden3 = __toESM(require_cjs());
var import_core19 = require("@tamagui/core-node");

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function getAlignment(placement) {
  return placement.split("-")[1];
}
__name(getAlignment, "getAlignment");
function getLengthFromAxis(axis) {
  return axis === "y" ? "height" : "width";
}
__name(getLengthFromAxis, "getLengthFromAxis");
function getSide(placement) {
  return placement.split("-")[0];
}
__name(getSide, "getSide");
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].includes(getSide(placement)) ? "x" : "y";
}
__name(getMainAxisFromPlacement, "getMainAxisFromPlacement");
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  const commonAlign = reference[length] / 2 - floating[length] / 2;
  const side = getSide(placement);
  const isVertical = mainAxis === "x";
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
__name(computeCoordsFromPlacement, "computeCoordsFromPlacement");
var computePosition = /* @__PURE__ */ __name(async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(floating));
  let rects = await platform2.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x17,
    y: y14
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i23 = 0; i23 < validMiddleware.length; i23++) {
    const {
      name,
      fn
    } = validMiddleware[i23];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x17,
      y: y14,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platform2,
      elements: {
        reference,
        floating
      }
    });
    x17 = nextX != null ? nextX : x17;
    y14 = nextY != null ? nextY : y14;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform2.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x17,
          y: y14
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i23 = -1;
      continue;
    }
  }
  return {
    x: x17,
    y: y14,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
}, "computePosition");
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
__name(expandPaddingObject, "expandPaddingObject");
function getSideObjectFromPadding(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
__name(getSideObjectFromPadding, "getSideObjectFromPadding");
function rectToClientRect(rect) {
  return {
    ...rect,
    top: rect.y,
    left: rect.x,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  };
}
__name(rectToClientRect, "rectToClientRect");
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x: x17,
    y: y14,
    platform: platform2,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = options;
  const paddingObject = getSideObjectFromPadding(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform2.getClippingRect({
    element: ((_await$platform$isEle = await (platform2.isElement == null ? void 0 : platform2.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform2.getDocumentElement == null ? void 0 : platform2.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    ...rects.floating,
    x: x17,
    y: y14
  } : rects.reference;
  const offsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(elements.floating));
  const offsetScale = await (platform2.isElement == null ? void 0 : platform2.isElement(offsetParent)) ? await (platform2.getScale == null ? void 0 : platform2.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform2.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform2.convertOffsetParentRelativeRectToViewportRelativeRect({
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
__name(detectOverflow, "detectOverflow");
var min = Math.min;
var max = Math.max;
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
__name(within, "within");
var arrow = /* @__PURE__ */ __name((options) => ({
  name: "arrow",
  options,
  async fn(state) {
    const {
      element,
      padding = 0
    } = options || {};
    const {
      x: x17,
      y: y14,
      placement,
      rects,
      platform: platform2,
      elements
    } = state;
    if (element == null) {
      return {};
    }
    const paddingObject = getSideObjectFromPadding(padding);
    const coords = {
      x: x17,
      y: y14
    };
    const axis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(axis);
    const arrowDimensions = await platform2.getDimensions(element);
    const isYAxis = axis === "y";
    const minProp = isYAxis ? "top" : "left";
    const maxProp = isYAxis ? "bottom" : "right";
    const clientProp = isYAxis ? "clientHeight" : "clientWidth";
    const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
    const startDiff = coords[axis] - rects.reference[axis];
    const arrowOffsetParent = await (platform2.getOffsetParent == null ? void 0 : platform2.getOffsetParent(element));
    let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
    if (!clientSize || !await (platform2.isElement == null ? void 0 : platform2.isElement(arrowOffsetParent))) {
      clientSize = elements.floating[clientProp] || rects.floating[length];
    }
    const centerToReference = endDiff / 2 - startDiff / 2;
    const min3 = paddingObject[minProp];
    const max3 = clientSize - arrowDimensions[length] - paddingObject[maxProp];
    const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
    const offset2 = within(min3, center, max3);
    const shouldAddOffset = getAlignment(placement) != null && center != offset2 && rects.reference[length] / 2 - (center < min3 ? paddingObject[minProp] : paddingObject[maxProp]) - arrowDimensions[length] / 2 < 0;
    const alignmentOffset = shouldAddOffset ? center < min3 ? min3 - center : max3 - center : 0;
    return {
      [axis]: coords[axis] - alignmentOffset,
      data: {
        [axis]: offset2,
        centerOffset: center - offset2
      }
    };
  }
}), "arrow");
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
}
__name(getOppositePlacement, "getOppositePlacement");
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const mainAxis = getMainAxisFromPlacement(placement);
  const length = getLengthFromAxis(mainAxis);
  let mainAlignmentSide = mainAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return {
    main: mainAlignmentSide,
    cross: getOppositePlacement(mainAlignmentSide)
  };
}
__name(getAlignmentSides, "getAlignmentSides");
var oppositeAlignmentMap = {
  start: "end",
  end: "start"
};
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
}
__name(getOppositeAlignmentPlacement, "getOppositeAlignmentPlacement");
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
__name(getExpandedPlacements, "getExpandedPlacements");
function getSideList(side, isStart, rtl) {
  const lr = ["left", "right"];
  const rl = ["right", "left"];
  const tb = ["top", "bottom"];
  const bt2 = ["bottom", "top"];
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rl : lr;
      return isStart ? lr : rl;
    case "left":
    case "right":
      return isStart ? tb : bt2;
    default:
      return [];
  }
}
__name(getSideList, "getSideList");
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
__name(getOppositeAxisPlacements, "getOppositeAxisPlacements");
var flip = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform: platform2,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = options;
      const side = getSide(placement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== "none") {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const {
          main,
          cross
        } = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[main], overflow[cross]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          return {
            data: {
              index: nextIndex,
              overflows: overflowsData
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d19) => d19.overflows[0] <= 0).sort((a18, b16) => a18.overflows[1] - b16.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d19) => [d19.placement, d19.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a18, b16) => a18[1] - b16[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
}, "flip");
async function convertValueToCoords(state, value) {
  const {
    placement,
    platform: platform2,
    elements
  } = state;
  const rtl = await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getMainAxisFromPlacement(placement) === "x";
  const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = typeof value === "function" ? value(state) : value;
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...rawValue
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
__name(convertValueToCoords, "convertValueToCoords");
var offset = /* @__PURE__ */ __name(function(value) {
  if (value === void 0) {
    value = 0;
  }
  return {
    name: "offset",
    options: value,
    async fn(state) {
      const {
        x: x17,
        y: y14
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x17 + diffCoords.x,
        y: y14 + diffCoords.y,
        data: diffCoords
      };
    }
  };
}, "offset");
function getCrossAxis(axis) {
  return axis === "x" ? "y" : "x";
}
__name(getCrossAxis, "getCrossAxis");
var shift = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x17,
        y: y14,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x18,
              y: y15
            } = _ref;
            return {
              x: x18,
              y: y15
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x: x17,
        y: y14
      };
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const mainAxis = getMainAxisFromPlacement(getSide(placement));
      const crossAxis = getCrossAxis(mainAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min3 = mainAxisCoord + overflow[minSide];
        const max3 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = within(min3, mainAxisCoord, max3);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min3 = crossAxisCoord + overflow[minSide];
        const max3 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = within(min3, crossAxisCoord, max3);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x17,
          y: limitedCoords.y - y14
        }
      };
    }
  };
}, "shift");
var size = /* @__PURE__ */ __name(function(options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      const {
        placement,
        rects,
        platform: platform2,
        elements
      } = state;
      const {
        apply = /* @__PURE__ */ __name(() => {
        }, "apply"),
        ...detectOverflowOptions
      } = options;
      const overflow = await detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const axis = getMainAxisFromPlacement(placement);
      const isXAxis = axis === "x";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform2.isRTL == null ? void 0 : platform2.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const overflowAvailableHeight = height - overflow[heightSide];
      const overflowAvailableWidth = width - overflow[widthSide];
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if (isXAxis) {
        const maximumClippingWidth = width - overflow.left - overflow.right;
        availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
      } else {
        const maximumClippingHeight = height - overflow.top - overflow.bottom;
        availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isXAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform2.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
}, "size");

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getWindow(node) {
  var _node$ownerDocument;
  return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
__name(getWindow, "getWindow");
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
__name(getComputedStyle$1, "getComputedStyle$1");
function isNode(value) {
  return value instanceof getWindow(value).Node;
}
__name(isNode, "isNode");
function getNodeName(node) {
  return isNode(node) ? (node.nodeName || "").toLowerCase() : "";
}
__name(getNodeName, "getNodeName");
var uaString;
function getUAString() {
  if (uaString) {
    return uaString;
  }
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    uaString = uaData.brands.map((item) => item.brand + "/" + item.version).join(" ");
    return uaString;
  }
  return navigator.userAgent;
}
__name(getUAString, "getUAString");
function isHTMLElement(value) {
  return value instanceof getWindow(value).HTMLElement;
}
__name(isHTMLElement, "isHTMLElement");
function isElement(value) {
  return value instanceof getWindow(value).Element;
}
__name(isElement, "isElement");
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot, "isShadowRoot");
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !["inline", "contents"].includes(display);
}
__name(isOverflowElement, "isOverflowElement");
function isTableElement(element) {
  return ["table", "td", "th"].includes(getNodeName(element));
}
__name(isTableElement, "isTableElement");
function isContainingBlock(element) {
  const isFirefox = /firefox/i.test(getUAString());
  const css = getComputedStyle$1(element);
  const backdropFilter = css.backdropFilter || css.WebkitBackdropFilter;
  return css.transform !== "none" || css.perspective !== "none" || (backdropFilter ? backdropFilter !== "none" : false) || isFirefox && css.willChange === "filter" || isFirefox && (css.filter ? css.filter !== "none" : false) || ["transform", "perspective"].some((value) => css.willChange.includes(value)) || ["paint", "layout", "strict", "content"].some((value) => {
    const contain = css.contain;
    return contain != null ? contain.includes(value) : false;
  });
}
__name(isContainingBlock, "isContainingBlock");
function isClientRectVisualViewportBased() {
  return /^((?!chrome|android).)*safari/i.test(getUAString());
}
__name(isClientRectVisualViewportBased, "isClientRectVisualViewportBased");
function isLastTraversableNode(node) {
  return ["html", "body", "#document"].includes(getNodeName(node));
}
__name(isLastTraversableNode, "isLastTraversableNode");
var min2 = Math.min;
var max2 = Math.max;
var round = Math.round;
function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  let width = parseFloat(css.width);
  let height = parseFloat(css.height);
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    fallback: shouldFallback
  };
}
__name(getCssDimensions, "getCssDimensions");
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
__name(unwrapElement, "unwrapElement");
var FALLBACK_SCALE = {
  x: 1,
  y: 1
};
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return FALLBACK_SCALE;
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    fallback
  } = getCssDimensions(domElement);
  let x17 = (fallback ? round(rect.width) : rect.width) / width;
  let y14 = (fallback ? round(rect.height) : rect.height) / height;
  if (!x17 || !Number.isFinite(x17)) {
    x17 = 1;
  }
  if (!y14 || !Number.isFinite(y14)) {
    y14 = 1;
  }
  return {
    x: x17,
    y: y14
  };
}
__name(getScale, "getScale");
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  var _win$visualViewport, _win$visualViewport2;
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = FALLBACK_SCALE;
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const win = domElement ? getWindow(domElement) : window;
  const addVisualOffsets = isClientRectVisualViewportBased() && isFixedStrategy;
  let x17 = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y14 = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win2 = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentIFrame = win2.frameElement;
    while (currentIFrame && offsetParent && offsetWin !== win2) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle(currentIFrame);
      iframeRect.x += (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      iframeRect.y += (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x17 *= iframeScale.x;
      y14 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x17 += iframeRect.x;
      y14 += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x17,
    y: y14
  });
}
__name(getBoundingClientRect, "getBoundingClientRect");
function getDocumentElement(node) {
  return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
}
__name(getDocumentElement, "getDocumentElement");
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.pageXOffset,
    scrollTop: element.pageYOffset
  };
}
__name(getNodeScroll, "getNodeScroll");
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  if (offsetParent === documentElement) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = {
    x: 1,
    y: 1
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
  };
}
__name(convertOffsetParentRelativeRectToViewportRelativeRect, "convertOffsetParentRelativeRectToViewportRelativeRect");
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
}
__name(getWindowScrollBarX, "getWindowScrollBarX");
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max2(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max2(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x17 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y14 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x17 += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x17,
    y: y14
  };
}
__name(getDocumentRect, "getDocumentRect");
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = (
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node)
  );
  return isShadowRoot(result) ? result.host : result;
}
__name(getParentNode, "getParentNode");
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return parentNode.ownerDocument.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
__name(getNearestOverflowAncestor, "getNearestOverflowAncestor");
function getOverflowAncestors(node, list) {
  var _node$ownerDocument;
  if (list === void 0) {
    list = [];
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
}
__name(getOverflowAncestors, "getOverflowAncestors");
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x17 = 0;
  let y14 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x17 = visualViewport.offsetLeft;
      y14 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x17,
    y: y14
  };
}
__name(getViewportRect, "getViewportRect");
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : {
    x: 1,
    y: 1
  };
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x17 = left * scale.x;
  const y14 = top * scale.y;
  return {
    width,
    height,
    x: x17,
    y: y14
  };
}
__name(getInnerBoundingClientRect, "getInnerBoundingClientRect");
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const mutableRect = {
      ...clippingAncestor
    };
    if (isClientRectVisualViewportBased()) {
      var _win$visualViewport, _win$visualViewport2;
      const win = getWindow(element);
      mutableRect.x -= ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0;
      mutableRect.y -= ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0;
    }
    rect = mutableRect;
  }
  return rectToClientRect(rect);
}
__name(getClientRectFromClippingAncestor, "getClientRectFromClippingAncestor");
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const containingBlock = isContainingBlock(currentNode);
    if (computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !containingBlock && !currentContainingBlockComputedStyle : !containingBlock && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && ["absolute", "fixed"].includes(currentContainingBlockComputedStyle.position);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
__name(getClippingElementAncestors, "getClippingElementAncestors");
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max2(rect.top, accRect.top);
    accRect.right = min2(rect.right, accRect.right);
    accRect.bottom = min2(rect.bottom, accRect.bottom);
    accRect.left = max2(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}
__name(getClippingRect, "getClippingRect");
function getDimensions(element) {
  return getCssDimensions(element);
}
__name(getDimensions, "getDimensions");
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  return element.offsetParent;
}
__name(getTrueOffsetParent, "getTrueOffsetParent");
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = getParentNode(currentNode);
    }
  }
  return null;
}
__name(getContainingBlock, "getContainingBlock");
function getOffsetParent(element, polyfill) {
  const window2 = getWindow(element);
  if (!isHTMLElement(element)) {
    return window2;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static" && !isContainingBlock(offsetParent))) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
__name(getOffsetParent, "getOffsetParent");
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const rect = getBoundingClientRect(element, true, strategy === "fixed", offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== "fixed") {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent, true);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
__name(getRectRelativeToOffsetParent, "getRectRelativeToOffsetParent");
var platform = {
  getClippingRect,
  convertOffsetParentRelativeRectToViewportRelativeRect,
  isElement,
  getDimensions,
  getOffsetParent,
  getDocumentElement,
  getScale,
  async getElementRects(_ref) {
    let {
      reference,
      floating,
      strategy
    } = _ref;
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    return {
      reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
      floating: {
        x: 0,
        y: 0,
        ...await getDimensionsFn(floating)
      }
    };
  },
  getClientRects: (element) => Array.from(element.getClientRects()),
  isRTL: (element) => getComputedStyle$1(element).direction === "rtl"
};
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll: _ancestorScroll = true,
    ancestorResize = true,
    elementResize = true,
    animationFrame = false
  } = options;
  const ancestorScroll = _ancestorScroll && !animationFrame;
  const ancestors = ancestorScroll || ancestorResize ? [...isElement(reference) ? getOverflowAncestors(reference) : reference.contextElement ? getOverflowAncestors(reference.contextElement) : [], ...getOverflowAncestors(floating)] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  let observer = null;
  if (elementResize) {
    observer = new ResizeObserver(() => {
      update();
    });
    isElement(reference) && !animationFrame && observer.observe(reference);
    if (!isElement(reference) && reference.contextElement && !animationFrame) {
      observer.observe(reference.contextElement);
    }
    observer.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  __name(frameLoop, "frameLoop");
  update();
  return () => {
    var _observer;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    (_observer = observer) == null ? void 0 : _observer.disconnect();
    observer = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
__name(autoUpdate, "autoUpdate");
var computePosition2 = /* @__PURE__ */ __name((reference, floating, options) => {
  const cache = /* @__PURE__ */ new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
}, "computePosition");

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js
var React = __toESM(require("react"));
var import_react19 = require("react");
var ReactDOM = __toESM(require("react-dom"));
var arrow2 = /* @__PURE__ */ __name((options) => {
  const {
    element,
    padding
  } = options;
  function isRef(value) {
    return Object.prototype.hasOwnProperty.call(value, "current");
  }
  __name(isRef, "isRef");
  return {
    name: "arrow",
    options,
    fn(args) {
      if (isRef(element)) {
        if (element.current != null) {
          return arrow({
            element: element.current,
            padding
          }).fn(args);
        }
        return {};
      } else if (element) {
        return arrow({
          element,
          padding
        }).fn(args);
      }
      return {};
    }
  };
}, "arrow");
var index = typeof document !== "undefined" ? import_react19.useLayoutEffect : import_react19.useEffect;
function deepEqual(a18, b16) {
  if (a18 === b16) {
    return true;
  }
  if (typeof a18 !== typeof b16) {
    return false;
  }
  if (typeof a18 === "function" && a18.toString() === b16.toString()) {
    return true;
  }
  let length, i23, keys;
  if (a18 && b16 && typeof a18 == "object") {
    if (Array.isArray(a18)) {
      length = a18.length;
      if (length != b16.length)
        return false;
      for (i23 = length; i23-- !== 0; ) {
        if (!deepEqual(a18[i23], b16[i23])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a18);
    length = keys.length;
    if (length !== Object.keys(b16).length) {
      return false;
    }
    for (i23 = length; i23-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b16, keys[i23])) {
        return false;
      }
    }
    for (i23 = length; i23-- !== 0; ) {
      const key = keys[i23];
      if (key === "_owner" && a18.$$typeof) {
        continue;
      }
      if (!deepEqual(a18[key], b16[key])) {
        return false;
      }
    }
    return true;
  }
  return a18 !== a18 && b16 !== b16;
}
__name(deepEqual, "deepEqual");
function useLatestRef(value) {
  const ref = React.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef, "useLatestRef");
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: null,
    y: null,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const [reference, _setReference] = React.useState(null);
  const [floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback((node) => {
    if (referenceRef.current !== node) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback((node) => {
    if (floatingRef.current !== node) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: true
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (reference && floating) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(reference, floating, update);
      } else {
        update();
      }
    }
  }, [reference, floating, update, whileElementsMountedRef]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference,
    floating
  }), [reference, floating]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    reference: setReference,
    floating: setFloating
  }), [data, update, refs, elements, setReference, setFloating]);
}
__name(useFloating, "useFloating");

// node_modules/@tamagui/floating/dist/esm/useFloating.js
var import_react20 = require("react");
var s9 = (0, import_react20.createContext)(null);
var i12 = /* @__PURE__ */ __name((t28) => {
  var e22;
  return (e22 = (0, import_react20.useContext)(s9) || useFloating) == null ? void 0 : e22(t28);
}, "i");

// node_modules/@tamagui/popover/dist/esm/Popover.js
var import_focus_scope2 = __toESM(require_cjs4());

// node_modules/@tamagui/popper/dist/esm/Popper.js
var import_jsx_runtime19 = require("react/jsx-runtime");
var import_core18 = require("@tamagui/core-node");
var import_get_size = __toESM(require_cjs5());
var s10 = __toESM(require("react"));
var import_react_native6 = require("react-native-web-lite");
var V7 = "Popper";
var [j5, q5] = V(V7);
var he2 = q5;
var [G7, E5] = j5(V7);
function be(f24) {
  const { __scopePopper: a18, children: d19, size: P16, strategy: u15 = "absolute", placement: l21 = "bottom", stayInFrame: e22, allowFlip: i23 } = f24, [o20, m22] = s10.useState(false);
  (0, import_core18.useIsomorphicLayoutEffect)(() => {
    m22(true);
  }, []);
  const c26 = s10.useRef(), [r30, y14] = s10.useState(null), [w21, b16] = s10.useState(0), S19 = s10.useRef(), t28 = i12({ strategy: u15, placement: l21, sameScrollView: false, middleware: [e22 ? shift(typeof e22 == "boolean" ? {} : e22) : null, i23 ? flip(typeof i23 == "boolean" ? {} : i23) : null, r30 ? arrow2({ element: r30 }) : null, w21 ? offset(w21) : null].filter(Boolean) }), { refs: p23, middlewareData: A18 } = t28, x17 = c3(S19, y14);
  if ((0, import_core18.useIsomorphicLayoutEffect)(() => {
    t28.reference(c26.current);
  }, [c26]), import_core18.isWeb)
    s10.useEffect(() => {
      if (p23.reference.current && p23.floating.current)
        return autoUpdate(p23.reference.current, p23.floating.current, t28.update);
    }, [t28.update, p23.floating, p23.reference]);
  else {
    const g16 = (0, import_react_native6.useWindowDimensions)(), [z13, n19] = s10.useState(false);
    s10.useEffect(() => {
      const _13 = import_react_native6.Keyboard.addListener("keyboardDidShow", () => {
        n19(true);
      }), M16 = import_react_native6.Keyboard.addListener("keyboardDidHide", () => {
        n19(false);
      });
      return () => {
        _13.remove(), M16.remove();
      };
    }, []), (0, import_core18.useIsomorphicLayoutEffect)(() => {
      t28.update();
    }, [g16, z13]);
  }
  return (0, import_jsx_runtime19.jsx)(G7, { scope: a18, anchorRef: c26, size: P16, arrowRef: x17, arrowStyle: A18.arrow, onArrowSize: b16, isMounted: o20, ...t28, children: d19 });
}
__name(be, "be");
var J7 = "PopperAnchor";
var Re2 = c5.extractable(s10.forwardRef(function(a18, d19) {
  const { __scopePopper: P16, virtualRef: u15, ...l21 } = a18, { anchorRef: e22, getReferenceProps: i23 } = E5(J7, P16), o20 = s10.useRef(null), m22 = c3(d19, o20, e22);
  if (u15)
    return null;
  const c26 = { ref: m22, ...l21 };
  return (0, import_jsx_runtime19.jsx)(c5, { ...i23 ? i23(c26) : c26 });
}));
var Q3 = "PopperContent";
var X4 = (0, import_core18.styled)(k3, { name: "PopperContent", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", alignItems: "center", radiused: true } }, size: { "...size": (f24, { tokens: a18 }) => ({ padding: a18.space[f24], borderRadius: a18.radius[f24] }) } }, defaultVariants: { unstyled: false } });
var Ae3 = s10.forwardRef(function(a18, d19) {
  const { __scopePopper: P16, ...u15 } = a18, { strategy: l21, placement: e22, floating: i23, x: o20, y: m22, getFloatingProps: c26, size: r30, isMounted: y14 } = E5(Q3, P16), w21 = c3(i23, d19), b16 = s10.useMemo(() => (0, import_jsx_runtime19.jsx)(X4, { "data-placement": e22, "data-strategy": l21, size: u15.size || r30, ...u15 }, "popper-content-frame"), [e22, l21, a18]);
  if (!y14)
    return null;
  const S19 = { ref: w21, x: o20 || 0, y: m22 || 0, position: l21 };
  return (0, import_jsx_runtime19.jsx)(c5, { animateOnly: ["transform"], ...c26 ? c26(S19) : S19, children: b16 });
});
var Z3 = "PopperArrow";
var F9 = (0, import_core18.styled)(c5, { name: "PopperArrow", variants: { unstyled: { false: { borderColor: "$borderColor", backgroundColor: "$background", position: "relative" } } }, defaultVariants: { unstyled: false } });
var ee3 = (0, import_core18.styled)(c5, { name: "PopperArrowOuter", variants: { unstyled: { false: { position: "absolute", zIndex: -1, pointerEvents: "none", overflow: "hidden", alignItems: "center", justifyContent: "center" } } }, defaultVariants: { unstyled: false } });
var oe2 = { top: "bottom", right: "left", bottom: "top", left: "right" };
var ge2 = F9.extractable(s10.forwardRef(function(a18, d19) {
  var g16, z13;
  const { __scopePopper: P16, offset: u15, size: l21, borderWidth: e22 = 0, ...i23 } = a18, o20 = E5(Z3, P16), m22 = l21 ?? o20.size, r30 = +(0, import_core18.getVariableValue)((0, import_get_size.stepTokenUpOrDown)("space", m22, -2, [2])), { placement: y14 } = o20, w21 = c3(o20.arrowRef, d19), b16 = ((g16 = o20.arrowStyle) == null ? void 0 : g16.x) || 0, S19 = ((z13 = o20.arrowStyle) == null ? void 0 : z13.y) || 0, t28 = y14 ? y14.split("-")[0] : "top", p23 = { x: b16, y: S19, width: r30, height: r30 }, A18 = {}, x17 = t28 === "bottom" || t28 === "top";
  if (t28) {
    p23[x17 ? "width" : "height"] = r30 * 2;
    const n19 = oe2[t28];
    n19 && (p23[n19] = -r30, A18[n19] = r30 / 2), (n19 === "top" || n19 === "bottom") && (p23.left = 0), (n19 === "left" || n19 === "right") && (p23.top = 0);
  }
  return (0, import_core18.useIsomorphicLayoutEffect)(() => {
    var n19;
    (n19 = o20.onArrowSize) == null || n19.call(o20, r30);
  }, [r30, o20.onArrowSize]), (0, import_jsx_runtime19.jsx)(ee3, { ref: w21, ...p23, children: (0, import_jsx_runtime19.jsx)(F9, { width: r30, height: r30, ...i23, ...A18, rotate: "45deg", ...t28 === "bottom" && { borderBottomWidth: e22, borderRightWidth: e22 }, ...t28 === "top" && { borderTopWidth: e22, borderLeftWidth: e22 }, ...t28 === "right" && { borderTopWidth: e22, borderRightWidth: e22 }, ...t28 === "left" && { borderBottomWidth: e22, borderLeftWidth: e22 } }) });
}));

// node_modules/@tamagui/popover/dist/esm/Popover.js
var s11 = __toESM(require("react"));
var import_react_native7 = require("react-native-web-lite");

// node_modules/@floating-ui/react/dist/floating-ui.react.esm.js
var React2 = __toESM(require("react"));
var import_react21 = require("react");
var import_aria_hidden2 = __toESM(require_es5());
var import_tabbable = __toESM(require_dist4());
var import_react_dom2 = require("react-dom");
var index2 = typeof document !== "undefined" ? import_react21.useLayoutEffect : import_react21.useEffect;
var serverHandoffComplete = false;
var count = 0;
var genId = /* @__PURE__ */ __name(() => "floating-ui-" + count++, "genId");
function useFloatingId() {
  const [id, setId] = React2.useState(() => serverHandoffComplete ? genId() : void 0);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React2.useEffect(() => {
    if (!serverHandoffComplete) {
      serverHandoffComplete = true;
    }
  }, []);
  return id;
}
__name(useFloatingId, "useFloatingId");
var useReactId = React2[/* @__PURE__ */ "useId".toString()];
var useId = useReactId || useFloatingId;
function createPubSub() {
  const map = /* @__PURE__ */ new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null ? void 0 : _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      map.set(event, (map.get(event) || []).filter((l21) => l21 !== listener));
    }
  };
}
__name(createPubSub, "createPubSub");
var FloatingNodeContext = /* @__PURE__ */ React2.createContext(null);
var FloatingTreeContext = /* @__PURE__ */ React2.createContext(null);
var useFloatingParentNodeId = /* @__PURE__ */ __name(() => {
  var _React$useContext;
  return ((_React$useContext = React2.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
}, "useFloatingParentNodeId");
var useFloatingTree = /* @__PURE__ */ __name(() => React2.useContext(FloatingTreeContext), "useFloatingTree");
function getDocument(node) {
  return (node == null ? void 0 : node.ownerDocument) || document;
}
__name(getDocument, "getDocument");
function getPlatform() {
  const uaData = navigator.userAgentData;
  if (uaData != null && uaData.platform) {
    return uaData.platform;
  }
  return navigator.platform;
}
__name(getPlatform, "getPlatform");
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
__name(getUserAgent, "getUserAgent");
function getWindow2(value) {
  return getDocument(value).defaultView || window;
}
__name(getWindow2, "getWindow");
function isElement2(value) {
  return value ? value instanceof getWindow2(value).Element : false;
}
__name(isElement2, "isElement");
function isHTMLElement2(value) {
  return value ? value instanceof getWindow2(value).HTMLElement : false;
}
__name(isHTMLElement2, "isHTMLElement");
function isShadowRoot2(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  const OwnElement = getWindow2(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
__name(isShadowRoot2, "isShadowRoot");
function isVirtualClick(event) {
  if (event.mozInputSource === 0 && event.isTrusted) {
    return true;
  }
  const androidRe = /Android/i;
  if ((androidRe.test(getPlatform()) || androidRe.test(getUserAgent())) && event.pointerType) {
    return event.type === "click" && event.buttons === 1;
  }
  return event.detail === 0 && !event.pointerType;
}
__name(isVirtualClick, "isVirtualClick");
function isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType !== "mouse" || // iOS VoiceOver returns 0.333• for width/height.
  event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0;
}
__name(isVirtualPointerEvent, "isVirtualPointerEvent");
function isSafari() {
  return /apple/i.test(navigator.vendor);
}
__name(isSafari, "isSafari");
function isMac() {
  return getPlatform().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints;
}
__name(isMac, "isMac");
function isMouseLikePointerType(pointerType, strict) {
  const values = ["mouse", "pen"];
  if (!strict) {
    values.push("", void 0);
  }
  return values.includes(pointerType);
}
__name(isMouseLikePointerType, "isMouseLikePointerType");
function useLatestRef2(value) {
  const ref = (0, import_react21.useRef)(value);
  index2(() => {
    ref.current = value;
  });
  return ref;
}
__name(useLatestRef2, "useLatestRef");
var safePolygonIdentifier = "data-floating-ui-safe-polygon";
function getDelay(value, prop, pointerType) {
  if (pointerType && !isMouseLikePointerType(pointerType)) {
    return 0;
  }
  if (typeof value === "number") {
    return value;
  }
  return value == null ? void 0 : value[prop];
}
__name(getDelay, "getDelay");
var useHover = /* @__PURE__ */ __name(function(context, _temp) {
  let {
    enabled = true,
    delay = 0,
    handleClose = null,
    mouseOnly = false,
    restMs = 0,
    move = true
  } = _temp === void 0 ? {} : _temp;
  const {
    open,
    onOpenChange,
    dataRef,
    events,
    elements: {
      domReference,
      floating
    },
    refs
  } = context;
  const tree = useFloatingTree();
  const parentId = useFloatingParentNodeId();
  const handleCloseRef = useLatestRef2(handleClose);
  const delayRef = useLatestRef2(delay);
  const pointerTypeRef = React2.useRef();
  const timeoutRef = React2.useRef();
  const handlerRef = React2.useRef();
  const restTimeoutRef = React2.useRef();
  const blockMouseMoveRef = React2.useRef(true);
  const performedPointerEventsMutationRef = React2.useRef(false);
  const unbindMouseMoveRef = React2.useRef(() => {
  });
  const isHoverOpen = React2.useCallback(() => {
    var _dataRef$current$open;
    const type = (_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type;
    return (type == null ? void 0 : type.includes("mouse")) && type !== "mousedown";
  }, [dataRef]);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss() {
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      blockMouseMoveRef.current = true;
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [enabled, events]);
  React2.useEffect(() => {
    if (!enabled || !handleCloseRef.current || !open) {
      return;
    }
    function onLeave() {
      if (isHoverOpen()) {
        onOpenChange(false);
      }
    }
    __name(onLeave, "onLeave");
    const html = getDocument(floating).documentElement;
    html.addEventListener("mouseleave", onLeave);
    return () => {
      html.removeEventListener("mouseleave", onLeave);
    };
  }, [floating, open, onOpenChange, enabled, handleCloseRef, dataRef, isHoverOpen]);
  const closeWithDelay = React2.useCallback(function(runElseBranch) {
    if (runElseBranch === void 0) {
      runElseBranch = true;
    }
    const closeDelay = getDelay(delayRef.current, "close", pointerTypeRef.current);
    if (closeDelay && !handlerRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => onOpenChange(false), closeDelay);
    } else if (runElseBranch) {
      clearTimeout(timeoutRef.current);
      onOpenChange(false);
    }
  }, [delayRef, onOpenChange]);
  const cleanupMouseMoveHandler = React2.useCallback(() => {
    unbindMouseMoveRef.current();
    handlerRef.current = void 0;
  }, []);
  const clearPointerEvents = React2.useCallback(() => {
    if (performedPointerEventsMutationRef.current) {
      const body = getDocument(refs.floating.current).body;
      body.style.pointerEvents = "";
      body.removeAttribute(safePolygonIdentifier);
      performedPointerEventsMutationRef.current = false;
    }
  }, [refs]);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function isClickLikeOpenEvent() {
      return dataRef.current.openEvent ? ["click", "mousedown"].includes(dataRef.current.openEvent.type) : false;
    }
    __name(isClickLikeOpenEvent, "isClickLikeOpenEvent");
    function onMouseEnter(event) {
      clearTimeout(timeoutRef.current);
      blockMouseMoveRef.current = false;
      if (mouseOnly && !isMouseLikePointerType(pointerTypeRef.current) || restMs > 0 && getDelay(delayRef.current, "open") === 0) {
        return;
      }
      dataRef.current.openEvent = event;
      const openDelay = getDelay(delayRef.current, "open", pointerTypeRef.current);
      if (openDelay) {
        timeoutRef.current = setTimeout(() => {
          onOpenChange(true);
        }, openDelay);
      } else {
        onOpenChange(true);
      }
    }
    __name(onMouseEnter, "onMouseEnter");
    function onMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      unbindMouseMoveRef.current();
      const doc = getDocument(floating);
      clearTimeout(restTimeoutRef.current);
      if (handleCloseRef.current) {
        if (!open) {
          clearTimeout(timeoutRef.current);
        }
        handlerRef.current = handleCloseRef.current({
          ...context,
          tree,
          x: event.clientX,
          y: event.clientY,
          onClose() {
            clearPointerEvents();
            cleanupMouseMoveHandler();
            closeWithDelay();
          }
        });
        const handler = handlerRef.current;
        doc.addEventListener("mousemove", handler);
        unbindMouseMoveRef.current = () => {
          doc.removeEventListener("mousemove", handler);
        };
        return;
      }
      closeWithDelay();
    }
    __name(onMouseLeave, "onMouseLeave");
    function onScrollMouseLeave(event) {
      if (isClickLikeOpenEvent()) {
        return;
      }
      handleCloseRef.current == null ? void 0 : handleCloseRef.current({
        ...context,
        tree,
        x: event.clientX,
        y: event.clientY,
        onClose() {
          clearPointerEvents();
          cleanupMouseMoveHandler();
          closeWithDelay();
        }
      })(event);
    }
    __name(onScrollMouseLeave, "onScrollMouseLeave");
    if (isElement2(domReference)) {
      const ref = domReference;
      open && ref.addEventListener("mouseleave", onScrollMouseLeave);
      floating == null ? void 0 : floating.addEventListener("mouseleave", onScrollMouseLeave);
      move && ref.addEventListener("mousemove", onMouseEnter, {
        once: true
      });
      ref.addEventListener("mouseenter", onMouseEnter);
      ref.addEventListener("mouseleave", onMouseLeave);
      return () => {
        open && ref.removeEventListener("mouseleave", onScrollMouseLeave);
        floating == null ? void 0 : floating.removeEventListener("mouseleave", onScrollMouseLeave);
        move && ref.removeEventListener("mousemove", onMouseEnter);
        ref.removeEventListener("mouseenter", onMouseEnter);
        ref.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, [domReference, floating, enabled, context, mouseOnly, restMs, move, closeWithDelay, cleanupMouseMoveHandler, clearPointerEvents, onOpenChange, open, tree, delayRef, handleCloseRef, dataRef]);
  index2(() => {
    var _handleCloseRef$curre;
    if (!enabled) {
      return;
    }
    if (open && (_handleCloseRef$curre = handleCloseRef.current) != null && _handleCloseRef$curre.__options.blockPointerEvents && isHoverOpen()) {
      const body = getDocument(floating).body;
      body.setAttribute(safePolygonIdentifier, "");
      body.style.pointerEvents = "none";
      performedPointerEventsMutationRef.current = true;
      if (isElement2(domReference) && floating) {
        var _tree$nodesRef$curren, _tree$nodesRef$curren2;
        const ref = domReference;
        const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
        if (parentFloating) {
          parentFloating.style.pointerEvents = "";
        }
        ref.style.pointerEvents = "auto";
        floating.style.pointerEvents = "auto";
        return () => {
          ref.style.pointerEvents = "";
          floating.style.pointerEvents = "";
        };
      }
    }
  }, [enabled, open, parentId, floating, domReference, tree, handleCloseRef, dataRef, isHoverOpen]);
  index2(() => {
    if (!open) {
      pointerTypeRef.current = void 0;
      cleanupMouseMoveHandler();
      clearPointerEvents();
    }
  }, [open, cleanupMouseMoveHandler, clearPointerEvents]);
  React2.useEffect(() => {
    return () => {
      cleanupMouseMoveHandler();
      clearTimeout(timeoutRef.current);
      clearTimeout(restTimeoutRef.current);
      clearPointerEvents();
    };
  }, [enabled, cleanupMouseMoveHandler, clearPointerEvents]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function setPointerRef(event) {
      pointerTypeRef.current = event.pointerType;
    }
    __name(setPointerRef, "setPointerRef");
    return {
      reference: {
        onPointerDown: setPointerRef,
        onPointerEnter: setPointerRef,
        onMouseMove() {
          if (open || restMs === 0) {
            return;
          }
          clearTimeout(restTimeoutRef.current);
          restTimeoutRef.current = setTimeout(() => {
            if (!blockMouseMoveRef.current) {
              onOpenChange(true);
            }
          }, restMs);
        }
      },
      floating: {
        onMouseEnter() {
          clearTimeout(timeoutRef.current);
        },
        onMouseLeave() {
          events.emit("dismiss", {
            type: "mouseLeave",
            data: {
              returnFocus: false
            }
          });
          closeWithDelay(false);
        }
      }
    };
  }, [events, enabled, restMs, open, onOpenChange, closeWithDelay]);
}, "useHover");
var FloatingDelayGroupContext = /* @__PURE__ */ React2.createContext({
  delay: 0,
  initialDelay: 0,
  timeoutMs: 0,
  currentId: null,
  setCurrentId: () => {
  },
  setState: () => {
  },
  isInstantPhase: false
});
var useDelayGroupContext = /* @__PURE__ */ __name(() => React2.useContext(FloatingDelayGroupContext), "useDelayGroupContext");
var FloatingDelayGroup = /* @__PURE__ */ __name((_ref) => {
  let {
    children,
    delay,
    timeoutMs = 0
  } = _ref;
  const [state, setState] = React2.useReducer((prev, next) => ({
    ...prev,
    ...next
  }), {
    delay,
    timeoutMs,
    initialDelay: delay,
    currentId: null,
    isInstantPhase: false
  });
  const initialCurrentIdRef = React2.useRef(null);
  const setCurrentId = React2.useCallback((currentId) => {
    setState({
      currentId
    });
  }, []);
  index2(() => {
    if (state.currentId) {
      if (initialCurrentIdRef.current === null) {
        initialCurrentIdRef.current = state.currentId;
      } else {
        setState({
          isInstantPhase: true
        });
      }
    } else {
      setState({
        isInstantPhase: false
      });
      initialCurrentIdRef.current = null;
    }
  }, [state.currentId]);
  return /* @__PURE__ */ React2.createElement(FloatingDelayGroupContext.Provider, {
    value: React2.useMemo(() => ({
      ...state,
      setState,
      setCurrentId
    }), [state, setState, setCurrentId])
  }, children);
}, "FloatingDelayGroup");
var useDelayGroup = /* @__PURE__ */ __name((_ref2, _ref3) => {
  let {
    open,
    onOpenChange
  } = _ref2;
  let {
    id
  } = _ref3;
  const {
    currentId,
    setCurrentId,
    initialDelay,
    setState,
    timeoutMs
  } = useDelayGroupContext();
  React2.useEffect(() => {
    if (currentId) {
      setState({
        delay: {
          open: 1,
          close: getDelay(initialDelay, "close")
        }
      });
      if (currentId !== id) {
        onOpenChange(false);
      }
    }
  }, [id, onOpenChange, setState, currentId, initialDelay]);
  React2.useEffect(() => {
    function unset() {
      onOpenChange(false);
      setState({
        delay: initialDelay,
        currentId: null
      });
    }
    __name(unset, "unset");
    if (!open && currentId === id) {
      if (timeoutMs) {
        const timeout = window.setTimeout(unset, timeoutMs);
        return () => {
          clearTimeout(timeout);
        };
      } else {
        unset();
      }
    }
  }, [open, setState, currentId, id, onOpenChange, initialDelay, timeoutMs]);
  React2.useEffect(() => {
    if (open) {
      setCurrentId(id);
    }
  }, [open, setCurrentId, id]);
}, "useDelayGroup");
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i23 = 1; i23 < arguments.length; i23++) {
      var source = arguments[i23];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
__name(_extends, "_extends");
function activeElement$1(doc) {
  let activeElement2 = doc.activeElement;
  while (((_activeElement = activeElement2) == null ? void 0 : (_activeElement$shadow = _activeElement.shadowRoot) == null ? void 0 : _activeElement$shadow.activeElement) != null) {
    var _activeElement, _activeElement$shadow;
    activeElement2 = activeElement2.shadowRoot.activeElement;
  }
  return activeElement2;
}
__name(activeElement$1, "activeElement$1");
function contains(parent, child) {
  if (!parent || !child) {
    return false;
  }
  const rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot2(rootNode)) {
    let next = child;
    do {
      if (next && parent === next) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
__name(contains, "contains");
var rafId = 0;
function enqueueFocus(el, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    preventScroll = false,
    cancelPrevious = true,
    sync = false
  } = options;
  cancelPrevious && cancelAnimationFrame(rafId);
  const exec = /* @__PURE__ */ __name(() => el == null ? void 0 : el.focus({
    preventScroll
  }), "exec");
  if (sync) {
    exec();
  } else {
    rafId = requestAnimationFrame(exec);
  }
}
__name(enqueueFocus, "enqueueFocus");
function getAncestors(nodes, id) {
  var _nodes$find;
  let allAncestors = [];
  let currentParentId = (_nodes$find = nodes.find((node) => node.id === id)) == null ? void 0 : _nodes$find.parentId;
  while (currentParentId) {
    const currentNode = nodes.find((node) => node.id === currentParentId);
    currentParentId = currentNode == null ? void 0 : currentNode.parentId;
    if (currentNode) {
      allAncestors = allAncestors.concat(currentNode);
    }
  }
  return allAncestors;
}
__name(getAncestors, "getAncestors");
function getChildren(nodes, id) {
  let allChildren = nodes.filter((node) => {
    var _node$context;
    return node.parentId === id && ((_node$context = node.context) == null ? void 0 : _node$context.open);
  }) || [];
  let currentChildren = allChildren;
  while (currentChildren.length) {
    currentChildren = nodes.filter((node) => {
      var _currentChildren;
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n19) => {
        var _node$context2;
        return node.parentId === n19.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
      });
    }) || [];
    allChildren = allChildren.concat(currentChildren);
  }
  return allChildren;
}
__name(getChildren, "getChildren");
function getTarget(event) {
  if ("composedPath" in event) {
    return event.composedPath()[0];
  }
  return event.target;
}
__name(getTarget, "getTarget");
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
function isTypeableElement(element) {
  return isHTMLElement2(element) && element.matches(TYPEABLE_SELECTOR);
}
__name(isTypeableElement, "isTypeableElement");
function stopEvent(event) {
  event.preventDefault();
  event.stopPropagation();
}
__name(stopEvent, "stopEvent");
var getTabbableOptions = /* @__PURE__ */ __name(() => ({
  getShadowRoot: true,
  displayCheck: (
    // JSDOM does not support the `tabbable` library. To solve this we can
    // check if `ResizeObserver` is a real function (not polyfilled), which
    // determines if the current environment is JSDOM-like.
    typeof ResizeObserver === "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  )
}), "getTabbableOptions");
function getTabbableIn(container, direction) {
  const allTabbable = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  if (direction === "prev") {
    allTabbable.reverse();
  }
  const activeIndex = allTabbable.indexOf(activeElement$1(getDocument(container)));
  const nextTabbableElements = allTabbable.slice(activeIndex + 1);
  return nextTabbableElements[0];
}
__name(getTabbableIn, "getTabbableIn");
function getNextTabbable() {
  return getTabbableIn(document.body, "next");
}
__name(getNextTabbable, "getNextTabbable");
function getPreviousTabbable() {
  return getTabbableIn(document.body, "prev");
}
__name(getPreviousTabbable, "getPreviousTabbable");
function isOutsideEvent(event, container) {
  const containerElement = container || event.currentTarget;
  const relatedTarget = event.relatedTarget;
  return !relatedTarget || !contains(containerElement, relatedTarget);
}
__name(isOutsideEvent, "isOutsideEvent");
function disableFocusInside(container) {
  const tabbableElements = (0, import_tabbable.tabbable)(container, getTabbableOptions());
  tabbableElements.forEach((element) => {
    element.dataset.tabindex = element.getAttribute("tabindex") || "";
    element.setAttribute("tabindex", "-1");
  });
}
__name(disableFocusInside, "disableFocusInside");
function enableFocusInside(container) {
  const elements = container.querySelectorAll("[data-tabindex]");
  elements.forEach((element) => {
    const tabindex = element.dataset.tabindex;
    delete element.dataset.tabindex;
    if (tabindex) {
      element.setAttribute("tabindex", tabindex);
    } else {
      element.removeAttribute("tabindex");
    }
  });
}
__name(enableFocusInside, "enableFocusInside");
var useInsertionEffect = React2[/* @__PURE__ */ "useInsertionEffect".toString()];
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEvent2(callback) {
  const ref = React2.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React2.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}
__name(useEvent2, "useEvent");
var HIDDEN_STYLES = {
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  margin: "-1px",
  overflow: "hidden",
  padding: 0,
  position: "fixed",
  whiteSpace: "nowrap",
  width: "1px",
  top: 0,
  left: 0
};
var activeElement;
var timeoutId;
function setActiveElementOnTab(event) {
  if (event.key === "Tab") {
    activeElement = event.target;
    clearTimeout(timeoutId);
  }
}
__name(setActiveElementOnTab, "setActiveElementOnTab");
function isTabFocus(event) {
  const result = activeElement === event.relatedTarget;
  activeElement = event.relatedTarget;
  clearTimeout(timeoutId);
  return result;
}
__name(isTabFocus, "isTabFocus");
var FocusGuard = /* @__PURE__ */ React2.forwardRef(/* @__PURE__ */ __name(function FocusGuard2(props, ref) {
  const onFocus = useEvent2(props.onFocus);
  const [role, setRole] = React2.useState();
  index2(() => {
    if (isSafari()) {
      setRole("button");
    }
    document.addEventListener("keydown", setActiveElementOnTab);
    return () => {
      document.removeEventListener("keydown", setActiveElementOnTab);
    };
  }, []);
  return /* @__PURE__ */ React2.createElement("span", _extends({}, props, {
    ref,
    tabIndex: 0,
    role,
    "aria-hidden": role ? void 0 : true,
    "data-floating-ui-focus-guard": "",
    style: HIDDEN_STYLES,
    onFocus: (event) => {
      if (isSafari() && isMac() && !isTabFocus(event)) {
        event.persist();
        timeoutId = window.setTimeout(() => {
          onFocus(event);
        }, 50);
      } else {
        onFocus(event);
      }
    }
  }));
}, "FocusGuard"));
var PortalContext = /* @__PURE__ */ React2.createContext(null);
var useFloatingPortalNode = /* @__PURE__ */ __name(function(_temp) {
  let {
    id,
    enabled = true
  } = _temp === void 0 ? {} : _temp;
  const [portalEl, setPortalEl] = React2.useState(null);
  const uniqueId = useId();
  const portalContext = usePortalContext();
  index2(() => {
    if (!enabled) {
      return;
    }
    const rootNode = id ? document.getElementById(id) : null;
    if (rootNode) {
      rootNode.setAttribute("data-floating-ui-portal", "");
      setPortalEl(rootNode);
    } else {
      const newPortalEl = document.createElement("div");
      if (id !== "") {
        newPortalEl.id = id || uniqueId;
      }
      newPortalEl.setAttribute("data-floating-ui-portal", "");
      setPortalEl(newPortalEl);
      const container = (portalContext == null ? void 0 : portalContext.portalNode) || document.body;
      container.appendChild(newPortalEl);
      return () => {
        container.removeChild(newPortalEl);
      };
    }
  }, [id, portalContext, uniqueId, enabled]);
  return portalEl;
}, "useFloatingPortalNode");
var FloatingPortal = /* @__PURE__ */ __name((_ref) => {
  let {
    children,
    id,
    root = null,
    preserveTabOrder = true
  } = _ref;
  const portalNode = useFloatingPortalNode({
    id,
    enabled: !root
  });
  const [focusManagerState, setFocusManagerState] = React2.useState(null);
  const beforeOutsideRef = React2.useRef(null);
  const afterOutsideRef = React2.useRef(null);
  const beforeInsideRef = React2.useRef(null);
  const afterInsideRef = React2.useRef(null);
  const shouldRenderGuards = (
    // The FocusManager and therefore floating element are currently open/
    // rendered.
    !!focusManagerState && // Guards are only for non-modal focus management.
    !focusManagerState.modal && !!(root || portalNode) && preserveTabOrder
  );
  React2.useEffect(() => {
    if (!portalNode || !preserveTabOrder || focusManagerState != null && focusManagerState.modal) {
      return;
    }
    function onFocus(event) {
      if (portalNode && isOutsideEvent(event)) {
        const focusing = event.type === "focusin";
        const manageFocus = focusing ? enableFocusInside : disableFocusInside;
        manageFocus(portalNode);
      }
    }
    __name(onFocus, "onFocus");
    portalNode.addEventListener("focusin", onFocus, true);
    portalNode.addEventListener("focusout", onFocus, true);
    return () => {
      portalNode.removeEventListener("focusin", onFocus, true);
      portalNode.removeEventListener("focusout", onFocus, true);
    };
  }, [portalNode, preserveTabOrder, focusManagerState == null ? void 0 : focusManagerState.modal]);
  return /* @__PURE__ */ React2.createElement(PortalContext.Provider, {
    value: React2.useMemo(() => ({
      preserveTabOrder,
      beforeOutsideRef,
      afterOutsideRef,
      beforeInsideRef,
      afterInsideRef,
      portalNode,
      setFocusManagerState
    }), [preserveTabOrder, portalNode])
  }, shouldRenderGuards && portalNode && /* @__PURE__ */ React2.createElement(FocusGuard, {
    "data-type": "outside",
    ref: beforeOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _beforeInsideRef$curr;
        (_beforeInsideRef$curr = beforeInsideRef.current) == null ? void 0 : _beforeInsideRef$curr.focus();
      } else {
        const prevTabbable = getPreviousTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        prevTabbable == null ? void 0 : prevTabbable.focus();
      }
    }
  }), shouldRenderGuards && portalNode && /* @__PURE__ */ React2.createElement("span", {
    "aria-owns": portalNode.id,
    style: HIDDEN_STYLES
  }), root ? /* @__PURE__ */ (0, import_react_dom2.createPortal)(children, root) : portalNode ? /* @__PURE__ */ (0, import_react_dom2.createPortal)(children, portalNode) : null, shouldRenderGuards && portalNode && /* @__PURE__ */ React2.createElement(FocusGuard, {
    "data-type": "outside",
    ref: afterOutsideRef,
    onFocus: (event) => {
      if (isOutsideEvent(event, portalNode)) {
        var _afterInsideRef$curre;
        (_afterInsideRef$curre = afterInsideRef.current) == null ? void 0 : _afterInsideRef$curre.focus();
      } else {
        const nextTabbable = getNextTabbable() || (focusManagerState == null ? void 0 : focusManagerState.refs.domReference.current);
        nextTabbable == null ? void 0 : nextTabbable.focus();
        (focusManagerState == null ? void 0 : focusManagerState.closeOnFocusOut) && (focusManagerState == null ? void 0 : focusManagerState.onOpenChange(false));
      }
    }
  }));
}, "FloatingPortal");
var usePortalContext = /* @__PURE__ */ __name(() => React2.useContext(PortalContext), "usePortalContext");
var VisuallyHiddenDismiss = /* @__PURE__ */ React2.forwardRef(/* @__PURE__ */ __name(function VisuallyHiddenDismiss2(props, ref) {
  return /* @__PURE__ */ React2.createElement("button", _extends({}, props, {
    type: "button",
    ref,
    tabIndex: -1,
    style: HIDDEN_STYLES
  }));
}, "VisuallyHiddenDismiss"));
function FloatingFocusManager(_ref) {
  let {
    context,
    children,
    order = ["content"],
    guards = true,
    initialFocus = 0,
    returnFocus = true,
    modal = true,
    visuallyHiddenDismiss = false,
    closeOnFocusOut = true
  } = _ref;
  const {
    refs,
    nodeId,
    onOpenChange,
    events,
    dataRef,
    elements: {
      domReference,
      floating
    }
  } = context;
  const orderRef = useLatestRef2(order);
  const tree = useFloatingTree();
  const portalContext = usePortalContext();
  const [tabbableContentLength, setTabbableContentLength] = React2.useState(null);
  const ignoreInitialFocus = typeof initialFocus === "number" && initialFocus < 0;
  const startDismissButtonRef = React2.useRef(null);
  const endDismissButtonRef = React2.useRef(null);
  const preventReturnFocusRef = React2.useRef(false);
  const previouslyFocusedElementRef = React2.useRef(null);
  const isPointerDownRef = React2.useRef(false);
  const isInsidePortal = portalContext != null;
  const isTypeableCombobox = domReference && domReference.getAttribute("role") === "combobox" && isTypeableElement(domReference);
  const getTabbableContent = React2.useCallback(function(container) {
    if (container === void 0) {
      container = floating;
    }
    return container ? (0, import_tabbable.tabbable)(container, getTabbableOptions()) : [];
  }, [floating]);
  const getTabbableElements = React2.useCallback((container) => {
    const content = getTabbableContent(container);
    return orderRef.current.map((type) => {
      if (domReference && type === "reference") {
        return domReference;
      }
      if (floating && type === "floating") {
        return floating;
      }
      return content;
    }).filter(Boolean).flat();
  }, [domReference, floating, orderRef, getTabbableContent]);
  React2.useEffect(() => {
    if (!modal) {
      return;
    }
    function onKeyDown(event) {
      if (event.key === "Tab") {
        if (getTabbableContent().length === 0 && !isTypeableCombobox) {
          stopEvent(event);
        }
        const els = getTabbableElements();
        const target = getTarget(event);
        if (orderRef.current[0] === "reference" && target === domReference) {
          stopEvent(event);
          if (event.shiftKey) {
            enqueueFocus(els[els.length - 1]);
          } else {
            enqueueFocus(els[1]);
          }
        }
        if (orderRef.current[1] === "floating" && target === floating && event.shiftKey) {
          stopEvent(event);
          enqueueFocus(els[0]);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    const doc = getDocument(floating);
    doc.addEventListener("keydown", onKeyDown);
    return () => {
      doc.removeEventListener("keydown", onKeyDown);
    };
  }, [domReference, floating, modal, orderRef, refs, isTypeableCombobox, getTabbableContent, getTabbableElements]);
  React2.useEffect(() => {
    if (!closeOnFocusOut) {
      return;
    }
    function handlePointerDown() {
      isPointerDownRef.current = true;
      setTimeout(() => {
        isPointerDownRef.current = false;
      });
    }
    __name(handlePointerDown, "handlePointerDown");
    function handleFocusOutside(event) {
      const relatedTarget = event.relatedTarget;
      const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext == null ? void 0 : portalContext.portalNode, relatedTarget) || relatedTarget != null && relatedTarget.hasAttribute("data-floating-ui-focus-guard") || tree && (getChildren(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context, _node$context2;
        return contains((_node$context = node.context) == null ? void 0 : _node$context.elements.floating, relatedTarget) || contains((_node$context2 = node.context) == null ? void 0 : _node$context2.elements.domReference, relatedTarget);
      }) || getAncestors(tree.nodesRef.current, nodeId).find((node) => {
        var _node$context3, _node$context4;
        return ((_node$context3 = node.context) == null ? void 0 : _node$context3.elements.floating) === relatedTarget || ((_node$context4 = node.context) == null ? void 0 : _node$context4.elements.domReference) === relatedTarget;
      })));
      if (relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && // Fix React 18 Strict Mode returnFocus due to double rendering.
      relatedTarget !== previouslyFocusedElementRef.current) {
        preventReturnFocusRef.current = true;
        setTimeout(() => onOpenChange(false));
      }
    }
    __name(handleFocusOutside, "handleFocusOutside");
    if (floating && isHTMLElement2(domReference)) {
      domReference.addEventListener("focusout", handleFocusOutside);
      domReference.addEventListener("pointerdown", handlePointerDown);
      !modal && floating.addEventListener("focusout", handleFocusOutside);
      return () => {
        domReference.removeEventListener("focusout", handleFocusOutside);
        domReference.removeEventListener("pointerdown", handlePointerDown);
        !modal && floating.removeEventListener("focusout", handleFocusOutside);
      };
    }
  }, [domReference, floating, modal, nodeId, tree, portalContext, onOpenChange, closeOnFocusOut]);
  React2.useEffect(() => {
    var _portalContext$portal;
    const portalNodes = Array.from((portalContext == null ? void 0 : (_portalContext$portal = portalContext.portalNode) == null ? void 0 : _portalContext$portal.querySelectorAll("[data-floating-ui-portal]")) || []);
    function getDismissButtons() {
      return [startDismissButtonRef.current, endDismissButtonRef.current].filter(Boolean);
    }
    __name(getDismissButtons, "getDismissButtons");
    if (floating && modal) {
      const insideNodes = [floating, ...portalNodes, ...getDismissButtons()];
      const cleanup = (0, import_aria_hidden2.hideOthers)(orderRef.current.includes("reference") || isTypeableCombobox ? insideNodes.concat(domReference || []) : insideNodes);
      return () => {
        cleanup();
      };
    }
  }, [domReference, floating, modal, orderRef, portalContext, isTypeableCombobox]);
  React2.useEffect(() => {
    if (modal && !guards && floating) {
      const tabIndexValues = [];
      const options = getTabbableOptions();
      const allTabbable = (0, import_tabbable.tabbable)(getDocument(floating).body, options);
      const floatingTabbable = getTabbableElements();
      const elements = allTabbable.filter((el) => !floatingTabbable.includes(el));
      elements.forEach((el, i23) => {
        tabIndexValues[i23] = el.getAttribute("tabindex");
        el.setAttribute("tabindex", "-1");
      });
      return () => {
        elements.forEach((el, i23) => {
          const value = tabIndexValues[i23];
          if (value == null) {
            el.removeAttribute("tabindex");
          } else {
            el.setAttribute("tabindex", value);
          }
        });
      };
    }
  }, [floating, modal, guards, getTabbableElements]);
  index2(() => {
    if (!floating)
      return;
    const doc = getDocument(floating);
    let returnFocusValue = returnFocus;
    let preventReturnFocusScroll = false;
    const previouslyFocusedElement = activeElement$1(doc);
    const contextData = dataRef.current;
    previouslyFocusedElementRef.current = previouslyFocusedElement;
    const focusableElements = getTabbableElements(floating);
    const elToFocus = (typeof initialFocus === "number" ? focusableElements[initialFocus] : initialFocus.current) || floating;
    !ignoreInitialFocus && enqueueFocus(elToFocus, {
      preventScroll: elToFocus === floating
    });
    function onDismiss(payload) {
      if (payload.type === "escapeKey" && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (["referencePress", "escapeKey"].includes(payload.type)) {
        return;
      }
      const returnFocus2 = payload.data.returnFocus;
      if (typeof returnFocus2 === "object") {
        returnFocusValue = true;
        preventReturnFocusScroll = returnFocus2.preventScroll;
      } else {
        returnFocusValue = returnFocus2;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
      if (contains(floating, activeElement$1(doc)) && refs.domReference.current) {
        previouslyFocusedElementRef.current = refs.domReference.current;
      }
      if (returnFocusValue && isHTMLElement2(previouslyFocusedElementRef.current) && !preventReturnFocusRef.current) {
        if (!refs.domReference.current || isPointerDownRef.current) {
          enqueueFocus(previouslyFocusedElementRef.current, {
            // When dismissing nested floating elements, by the time the rAF has
            // executed, the menus will all have been unmounted. When they try
            // to get focused, the calls get ignored — leaving the root
            // reference focused as desired.
            cancelPrevious: false,
            preventScroll: preventReturnFocusScroll
          });
        } else {
          var _previouslyFocusedEle;
          contextData.__syncReturnFocus = true;
          (_previouslyFocusedEle = previouslyFocusedElementRef.current) == null ? void 0 : _previouslyFocusedEle.focus({
            preventScroll: preventReturnFocusScroll
          });
          setTimeout(() => {
            delete contextData.__syncReturnFocus;
          });
        }
      }
    };
  }, [floating, getTabbableElements, initialFocus, returnFocus, dataRef, refs, events, ignoreInitialFocus]);
  index2(() => {
    if (!portalContext)
      return;
    portalContext.setFocusManagerState({
      ...context,
      modal,
      closeOnFocusOut
      // Not concerned about the <RT> generic type.
    });
    return () => {
      portalContext.setFocusManagerState(null);
    };
  }, [portalContext, modal, closeOnFocusOut, context]);
  index2(() => {
    if (ignoreInitialFocus || !floating)
      return;
    function setState() {
      setTabbableContentLength(getTabbableContent().length);
    }
    __name(setState, "setState");
    setState();
    if (typeof MutationObserver === "function") {
      const observer = new MutationObserver(setState);
      observer.observe(floating, {
        childList: true,
        subtree: true
      });
      return () => {
        observer.disconnect();
      };
    }
  }, [floating, getTabbableContent, ignoreInitialFocus, refs]);
  const shouldRenderGuards = guards && (isInsidePortal || modal) && !isTypeableCombobox;
  function renderDismissButton(location) {
    return visuallyHiddenDismiss && modal ? /* @__PURE__ */ React2.createElement(VisuallyHiddenDismiss, {
      ref: location === "start" ? startDismissButtonRef : endDismissButtonRef,
      onClick: () => onOpenChange(false)
    }, typeof visuallyHiddenDismiss === "string" ? visuallyHiddenDismiss : "Dismiss") : null;
  }
  __name(renderDismissButton, "renderDismissButton");
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, shouldRenderGuards && /* @__PURE__ */ React2.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.beforeInsideRef,
    onFocus: (event) => {
      if (modal) {
        const els = getTabbableElements();
        enqueueFocus(order[0] === "reference" ? els[0] : els[els.length - 1]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = false;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const nextTabbable = getNextTabbable() || domReference;
          nextTabbable == null ? void 0 : nextTabbable.focus();
        } else {
          var _portalContext$before;
          (_portalContext$before = portalContext.beforeOutsideRef.current) == null ? void 0 : _portalContext$before.focus();
        }
      }
    }
  }), isTypeableCombobox ? null : renderDismissButton("start"), /* @__PURE__ */ React2.cloneElement(children, tabbableContentLength === 0 || order.includes("floating") ? {
    tabIndex: 0
  } : {}), renderDismissButton("end"), shouldRenderGuards && /* @__PURE__ */ React2.createElement(FocusGuard, {
    "data-type": "inside",
    ref: portalContext == null ? void 0 : portalContext.afterInsideRef,
    onFocus: (event) => {
      if (modal) {
        enqueueFocus(getTabbableElements()[0]);
      } else if (portalContext != null && portalContext.preserveTabOrder && portalContext.portalNode) {
        preventReturnFocusRef.current = true;
        if (isOutsideEvent(event, portalContext.portalNode)) {
          const prevTabbable = getPreviousTabbable() || domReference;
          prevTabbable == null ? void 0 : prevTabbable.focus();
        } else {
          var _portalContext$afterO;
          (_portalContext$afterO = portalContext.afterOutsideRef.current) == null ? void 0 : _portalContext$afterO.focus();
        }
      }
    }
  }));
}
__name(FloatingFocusManager, "FloatingFocusManager");
var identifier = "data-floating-ui-scroll-lock";
var FloatingOverlay = /* @__PURE__ */ React2.forwardRef(/* @__PURE__ */ __name(function FloatingOverlay2(_ref, ref) {
  let {
    lockScroll = false,
    ...rest
  } = _ref;
  index2(() => {
    var _window$visualViewpor, _window$visualViewpor2;
    if (!lockScroll) {
      return;
    }
    const alreadyLocked = document.body.hasAttribute(identifier);
    if (alreadyLocked) {
      return;
    }
    document.body.setAttribute(identifier, "");
    const scrollbarX = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft;
    const paddingProp = scrollbarX ? "paddingLeft" : "paddingRight";
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    if (!/iP(hone|ad|od)|iOS/.test(getPlatform())) {
      Object.assign(document.body.style, {
        overflow: "hidden",
        [paddingProp]: scrollbarWidth + "px"
      });
      return () => {
        document.body.removeAttribute(identifier);
        Object.assign(document.body.style, {
          overflow: "",
          [paddingProp]: ""
        });
      };
    }
    const offsetLeft = ((_window$visualViewpor = window.visualViewport) == null ? void 0 : _window$visualViewpor.offsetLeft) || 0;
    const offsetTop = ((_window$visualViewpor2 = window.visualViewport) == null ? void 0 : _window$visualViewpor2.offsetTop) || 0;
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    Object.assign(document.body.style, {
      position: "fixed",
      overflow: "hidden",
      top: -(scrollY - Math.floor(offsetTop)) + "px",
      left: -(scrollX - Math.floor(offsetLeft)) + "px",
      right: "0",
      [paddingProp]: scrollbarWidth + "px"
    });
    return () => {
      Object.assign(document.body.style, {
        position: "",
        overflow: "",
        top: "",
        left: "",
        right: "",
        [paddingProp]: ""
      });
      document.body.removeAttribute(identifier);
      window.scrollTo(scrollX, scrollY);
    };
  }, [lockScroll]);
  return /* @__PURE__ */ React2.createElement("div", _extends({
    ref
  }, rest, {
    style: {
      position: "fixed",
      overflow: "auto",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...rest.style
    }
  }));
}, "FloatingOverlay"));
function isButtonTarget(event) {
  return isHTMLElement2(event.target) && event.target.tagName === "BUTTON";
}
__name(isButtonTarget, "isButtonTarget");
function isSpaceIgnored(element) {
  return isTypeableElement(element);
}
__name(isSpaceIgnored, "isSpaceIgnored");
var useClick = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    elements: {
      domReference
    }
  } = _ref;
  let {
    enabled = true,
    event: eventOption = "click",
    toggle = true,
    ignoreMouse = false,
    keyboardHandlers = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React2.useRef();
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(event) {
          pointerTypeRef.current = event.pointerType;
        },
        onMouseDown(event) {
          if (event.button !== 0) {
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (eventOption === "click") {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "mousedown" : true)) {
              onOpenChange(false);
            }
          } else {
            event.preventDefault();
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onClick(event) {
          if (dataRef.current.__syncReturnFocus) {
            return;
          }
          if (eventOption === "mousedown" && pointerTypeRef.current) {
            pointerTypeRef.current = void 0;
            return;
          }
          if (isMouseLikePointerType(pointerTypeRef.current, true) && ignoreMouse) {
            return;
          }
          if (open) {
            if (toggle && (dataRef.current.openEvent ? dataRef.current.openEvent.type === "click" : true)) {
              onOpenChange(false);
            }
          } else {
            onOpenChange(true);
          }
          dataRef.current.openEvent = event.nativeEvent;
        },
        onKeyDown(event) {
          pointerTypeRef.current = void 0;
          if (!keyboardHandlers) {
            return;
          }
          if (isButtonTarget(event)) {
            return;
          }
          if (event.key === " " && !isSpaceIgnored(domReference)) {
            event.preventDefault();
          }
          if (event.key === "Enter") {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        },
        onKeyUp(event) {
          if (!keyboardHandlers) {
            return;
          }
          if (isButtonTarget(event) || isSpaceIgnored(domReference)) {
            return;
          }
          if (event.key === " ") {
            if (open) {
              if (toggle) {
                onOpenChange(false);
              }
            } else {
              onOpenChange(true);
            }
          }
        }
      }
    };
  }, [enabled, dataRef, eventOption, ignoreMouse, keyboardHandlers, domReference, toggle, open, onOpenChange]);
}, "useClick");
function isEventTargetWithin(event, node) {
  if (node == null) {
    return false;
  }
  if ("composedPath" in event) {
    return event.composedPath().includes(node);
  }
  const e22 = event;
  return e22.target != null && node.contains(e22.target);
}
__name(isEventTargetWithin, "isEventTargetWithin");
var bubbleHandlerKeys = {
  pointerdown: "onPointerDown",
  mousedown: "onMouseDown",
  click: "onClick"
};
var captureHandlerKeys = {
  pointerdown: "onPointerDownCapture",
  mousedown: "onMouseDownCapture",
  click: "onClickCapture"
};
var normalizeBubblesProp = /* @__PURE__ */ __name(function(bubbles) {
  var _bubbles$escapeKey, _bubbles$outsidePress;
  if (bubbles === void 0) {
    bubbles = true;
  }
  return {
    escapeKeyBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$escapeKey = bubbles.escapeKey) != null ? _bubbles$escapeKey : true,
    outsidePressBubbles: typeof bubbles === "boolean" ? bubbles : (_bubbles$outsidePress = bubbles.outsidePress) != null ? _bubbles$outsidePress : true
  };
}, "normalizeBubblesProp");
var useDismiss = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    events,
    nodeId,
    elements: {
      reference,
      domReference,
      floating
    },
    dataRef
  } = _ref;
  let {
    enabled = true,
    escapeKey = true,
    outsidePress: unstable_outsidePress = true,
    outsidePressEvent = "pointerdown",
    referencePress = false,
    referencePressEvent = "pointerdown",
    ancestorScroll = false,
    bubbles = true
  } = _temp === void 0 ? {} : _temp;
  const tree = useFloatingTree();
  const nested = useFloatingParentNodeId() != null;
  const outsidePressFn = useEvent2(typeof unstable_outsidePress === "function" ? unstable_outsidePress : () => false);
  const outsidePress = typeof unstable_outsidePress === "function" ? outsidePressFn : unstable_outsidePress;
  const insideReactTreeRef = React2.useRef(false);
  const {
    escapeKeyBubbles,
    outsidePressBubbles
  } = normalizeBubblesProp(bubbles);
  React2.useEffect(() => {
    if (!open || !enabled) {
      return;
    }
    dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
    dataRef.current.__outsidePressBubbles = outsidePressBubbles;
    function onKeyDown(event) {
      if (event.key === "Escape") {
        const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
        if (children.length > 0) {
          let shouldDismiss = true;
          children.forEach((child) => {
            var _child$context;
            if ((_child$context = child.context) != null && _child$context.open && !child.context.dataRef.current.__escapeKeyBubbles) {
              shouldDismiss = false;
              return;
            }
          });
          if (!shouldDismiss) {
            return;
          }
        }
        events.emit("dismiss", {
          type: "escapeKey",
          data: {
            returnFocus: {
              preventScroll: false
            }
          }
        });
        onOpenChange(false);
      }
    }
    __name(onKeyDown, "onKeyDown");
    function onOutsidePress(event) {
      const insideReactTree = insideReactTreeRef.current;
      insideReactTreeRef.current = false;
      if (insideReactTree) {
        return;
      }
      if (typeof outsidePress === "function" && !outsidePress(event)) {
        return;
      }
      const target = getTarget(event);
      if (isHTMLElement2(target) && floating) {
        const win = floating.ownerDocument.defaultView || window;
        const canScrollX = target.scrollWidth > target.clientWidth;
        const canScrollY = target.scrollHeight > target.clientHeight;
        let xCond = canScrollY && event.offsetX > target.clientWidth;
        if (canScrollY) {
          const isRTL = win.getComputedStyle(target).direction === "rtl";
          if (isRTL) {
            xCond = event.offsetX <= target.offsetWidth - target.clientWidth;
          }
        }
        if (xCond || canScrollX && event.offsetY > target.clientHeight) {
          return;
        }
      }
      const targetIsInsideChildren = tree && getChildren(tree.nodesRef.current, nodeId).some((node) => {
        var _node$context;
        return isEventTargetWithin(event, (_node$context = node.context) == null ? void 0 : _node$context.elements.floating);
      });
      if (isEventTargetWithin(event, floating) || isEventTargetWithin(event, domReference) || targetIsInsideChildren) {
        return;
      }
      const children = tree ? getChildren(tree.nodesRef.current, nodeId) : [];
      if (children.length > 0) {
        let shouldDismiss = true;
        children.forEach((child) => {
          var _child$context2;
          if ((_child$context2 = child.context) != null && _child$context2.open && !child.context.dataRef.current.__outsidePressBubbles) {
            shouldDismiss = false;
            return;
          }
        });
        if (!shouldDismiss) {
          return;
        }
      }
      events.emit("dismiss", {
        type: "outsidePress",
        data: {
          returnFocus: nested ? {
            preventScroll: true
          } : isVirtualClick(event) || isVirtualPointerEvent(event)
        }
      });
      onOpenChange(false);
    }
    __name(onOutsidePress, "onOutsidePress");
    function onScroll() {
      onOpenChange(false);
    }
    __name(onScroll, "onScroll");
    const doc = getDocument(floating);
    escapeKey && doc.addEventListener("keydown", onKeyDown);
    outsidePress && doc.addEventListener(outsidePressEvent, onOutsidePress);
    let ancestors = [];
    if (ancestorScroll) {
      if (isElement2(domReference)) {
        ancestors = getOverflowAncestors(domReference);
      }
      if (isElement2(floating)) {
        ancestors = ancestors.concat(getOverflowAncestors(floating));
      }
      if (!isElement2(reference) && reference && reference.contextElement) {
        ancestors = ancestors.concat(getOverflowAncestors(reference.contextElement));
      }
    }
    ancestors = ancestors.filter((ancestor) => {
      var _doc$defaultView;
      return ancestor !== ((_doc$defaultView = doc.defaultView) == null ? void 0 : _doc$defaultView.visualViewport);
    });
    ancestors.forEach((ancestor) => {
      ancestor.addEventListener("scroll", onScroll, {
        passive: true
      });
    });
    return () => {
      escapeKey && doc.removeEventListener("keydown", onKeyDown);
      outsidePress && doc.removeEventListener(outsidePressEvent, onOutsidePress);
      ancestors.forEach((ancestor) => {
        ancestor.removeEventListener("scroll", onScroll);
      });
    };
  }, [dataRef, floating, domReference, reference, escapeKey, outsidePress, outsidePressEvent, events, tree, nodeId, open, onOpenChange, ancestorScroll, enabled, escapeKeyBubbles, outsidePressBubbles, nested]);
  React2.useEffect(() => {
    insideReactTreeRef.current = false;
  }, [outsidePress, outsidePressEvent]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        [bubbleHandlerKeys[referencePressEvent]]: () => {
          if (referencePress) {
            events.emit("dismiss", {
              type: "referencePress",
              data: {
                returnFocus: false
              }
            });
            onOpenChange(false);
          }
        }
      },
      floating: {
        [captureHandlerKeys[outsidePressEvent]]: () => {
          insideReactTreeRef.current = true;
        }
      }
    };
  }, [enabled, events, referencePress, outsidePressEvent, referencePressEvent, onOpenChange]);
}, "useDismiss");
var useFocus = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open,
    onOpenChange,
    dataRef,
    events,
    refs,
    elements: {
      floating,
      domReference
    }
  } = _ref;
  let {
    enabled = true,
    keyboardOnly = true
  } = _temp === void 0 ? {} : _temp;
  const pointerTypeRef = React2.useRef("");
  const blockFocusRef = React2.useRef(false);
  const timeoutRef = React2.useRef();
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    const doc = getDocument(floating);
    const win = doc.defaultView || window;
    function onBlur() {
      if (!open && isHTMLElement2(domReference) && domReference === activeElement$1(getDocument(domReference))) {
        blockFocusRef.current = true;
      }
    }
    __name(onBlur, "onBlur");
    win.addEventListener("blur", onBlur);
    return () => {
      win.removeEventListener("blur", onBlur);
    };
  }, [floating, domReference, open, enabled]);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onDismiss(payload) {
      if (payload.type === "referencePress" || payload.type === "escapeKey") {
        blockFocusRef.current = true;
      }
    }
    __name(onDismiss, "onDismiss");
    events.on("dismiss", onDismiss);
    return () => {
      events.off("dismiss", onDismiss);
    };
  }, [events, enabled]);
  React2.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      reference: {
        onPointerDown(_ref2) {
          let {
            pointerType
          } = _ref2;
          pointerTypeRef.current = pointerType;
          blockFocusRef.current = !!(pointerType && keyboardOnly);
        },
        onMouseLeave() {
          blockFocusRef.current = false;
        },
        onFocus(event) {
          var _dataRef$current$open;
          if (blockFocusRef.current) {
            return;
          }
          if (event.type === "focus" && ((_dataRef$current$open = dataRef.current.openEvent) == null ? void 0 : _dataRef$current$open.type) === "mousedown" && dataRef.current.openEvent && isEventTargetWithin(dataRef.current.openEvent, domReference)) {
            return;
          }
          dataRef.current.openEvent = event.nativeEvent;
          onOpenChange(true);
        },
        onBlur(event) {
          blockFocusRef.current = false;
          const relatedTarget = event.relatedTarget;
          const movedToFocusGuard = isElement2(relatedTarget) && relatedTarget.hasAttribute("data-floating-ui-focus-guard") && relatedTarget.getAttribute("data-type") === "outside";
          timeoutRef.current = setTimeout(() => {
            if (contains(refs.floating.current, relatedTarget) || contains(domReference, relatedTarget) || movedToFocusGuard) {
              return;
            }
            onOpenChange(false);
          });
        }
      }
    };
  }, [enabled, keyboardOnly, domReference, refs, dataRef, onOpenChange]);
}, "useFocus");
var isPreventScrollSupported = false;
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
function isDifferentRow(index3, cols, prevRow) {
  return Math.floor(index3 / cols) !== prevRow;
}
__name(isDifferentRow, "isDifferentRow");
function isIndexOutOfBounds(listRef, index3) {
  return index3 < 0 || index3 >= listRef.current.length;
}
__name(isIndexOutOfBounds, "isIndexOutOfBounds");
function findNonDisabledIndex(listRef, _temp) {
  let {
    startingIndex = -1,
    decrement = false,
    disabledIndices,
    amount = 1
  } = _temp === void 0 ? {} : _temp;
  const list = listRef.current;
  let index3 = startingIndex;
  do {
    var _list$index, _list$index2;
    index3 = index3 + (decrement ? -amount : amount);
  } while (index3 >= 0 && index3 <= list.length - 1 && (disabledIndices ? disabledIndices.includes(index3) : list[index3] == null || ((_list$index = list[index3]) == null ? void 0 : _list$index.hasAttribute("disabled")) || ((_list$index2 = list[index3]) == null ? void 0 : _list$index2.getAttribute("aria-disabled")) === "true"));
  return index3;
}
__name(findNonDisabledIndex, "findNonDisabledIndex");
function doSwitch(orientation, vertical, horizontal) {
  switch (orientation) {
    case "vertical":
      return vertical;
    case "horizontal":
      return horizontal;
    default:
      return vertical || horizontal;
  }
}
__name(doSwitch, "doSwitch");
function isMainOrientationKey(key, orientation) {
  const vertical = key === ARROW_UP || key === ARROW_DOWN;
  const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isMainOrientationKey, "isMainOrientationKey");
function isMainOrientationToEndKey(key, orientation, rtl) {
  const vertical = key === ARROW_DOWN;
  const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  return doSwitch(orientation, vertical, horizontal) || key === "Enter" || key == " " || key === "";
}
__name(isMainOrientationToEndKey, "isMainOrientationToEndKey");
function isCrossOrientationOpenKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
  const horizontal = key === ARROW_DOWN;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isCrossOrientationOpenKey, "isCrossOrientationOpenKey");
function isCrossOrientationCloseKey(key, orientation, rtl) {
  const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
  const horizontal = key === ARROW_UP;
  return doSwitch(orientation, vertical, horizontal);
}
__name(isCrossOrientationCloseKey, "isCrossOrientationCloseKey");
function getMinIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    disabledIndices
  });
}
__name(getMinIndex, "getMinIndex");
function getMaxIndex(listRef, disabledIndices) {
  return findNonDisabledIndex(listRef, {
    decrement: true,
    startingIndex: listRef.current.length,
    disabledIndices
  });
}
__name(getMaxIndex, "getMaxIndex");
var useListNavigation = /* @__PURE__ */ __name(function(_ref, _temp2) {
  let {
    open,
    onOpenChange,
    refs,
    elements: {
      domReference
    }
  } = _ref;
  let {
    listRef,
    activeIndex,
    onNavigate: unstable_onNavigate = /* @__PURE__ */ __name(() => {
    }, "unstable_onNavigate"),
    enabled = true,
    selectedIndex = null,
    allowEscape = false,
    loop = false,
    nested = false,
    rtl = false,
    virtual = false,
    focusItemOnOpen = "auto",
    focusItemOnHover = true,
    openOnArrowKeyDown = true,
    disabledIndices = void 0,
    orientation = "vertical",
    cols = 1,
    scrollItemIntoView = true
  } = _temp2 === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null,
    onNavigate: () => {
    }
  } : _temp2;
  if (process.env.NODE_ENV !== "production") {
    if (allowEscape) {
      if (!loop) {
        console.warn(["Floating UI: `useListNavigation` looping must be enabled to allow", "escaping."].join(" "));
      }
      if (!virtual) {
        console.warn(["Floating UI: `useListNavigation` must be virtual to allow", "escaping."].join(" "));
      }
    }
    if (orientation === "vertical" && cols > 1) {
      console.warn(["Floating UI: In grid list navigation mode (`cols` > 1), the", '`orientation` should be either "horizontal" or "both".'].join(" "));
    }
  }
  const parentId = useFloatingParentNodeId();
  const tree = useFloatingTree();
  const onNavigate = useEvent2(unstable_onNavigate);
  const focusItemOnOpenRef = React2.useRef(focusItemOnOpen);
  const indexRef = React2.useRef(selectedIndex != null ? selectedIndex : -1);
  const keyRef = React2.useRef(null);
  const isPointerModalityRef = React2.useRef(true);
  const previousOnNavigateRef = React2.useRef(onNavigate);
  const previousOpenRef = React2.useRef(open);
  const forceSyncFocus = React2.useRef(false);
  const forceScrollIntoViewRef = React2.useRef(false);
  const disabledIndicesRef = useLatestRef2(disabledIndices);
  const latestOpenRef = useLatestRef2(open);
  const scrollItemIntoViewRef = useLatestRef2(scrollItemIntoView);
  const [activeId, setActiveId] = React2.useState();
  const focusItem = React2.useCallback(function(listRef2, indexRef2, forceScrollIntoView) {
    if (forceScrollIntoView === void 0) {
      forceScrollIntoView = false;
    }
    const item2 = listRef2.current[indexRef2.current];
    if (virtual) {
      setActiveId(item2 == null ? void 0 : item2.id);
    } else {
      enqueueFocus(item2, {
        preventScroll: true,
        // Mac Safari does not move the virtual cursor unless the focus call
        // is sync. However, for the very first focus call, we need to wait
        // for the position to be ready in order to prevent unwanted
        // scrolling. This means the virtual cursor will not move to the first
        // item when first opening the floating element, but will on
        // subsequent calls. `preventScroll` is supported in modern Safari,
        // so we can use that instead.
        // iOS Safari must be async or the first item will not be focused.
        sync: isMac() && isSafari() ? isPreventScrollSupported || forceSyncFocus.current : false
      });
    }
    requestAnimationFrame(() => {
      const scrollIntoViewOptions = scrollItemIntoViewRef.current;
      const shouldScrollIntoView = scrollIntoViewOptions && item2 && (forceScrollIntoView || !isPointerModalityRef.current);
      if (shouldScrollIntoView) {
        item2.scrollIntoView == null ? void 0 : item2.scrollIntoView(typeof scrollIntoViewOptions === "boolean" ? {
          block: "nearest",
          inline: "nearest"
        } : scrollIntoViewOptions);
      }
    });
  }, [virtual, scrollItemIntoViewRef]);
  index2(() => {
    document.createElement("div").focus({
      get preventScroll() {
        isPreventScrollSupported = true;
        return false;
      }
    });
  }, []);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open) {
      if (focusItemOnOpenRef.current && selectedIndex != null) {
        forceScrollIntoViewRef.current = true;
        onNavigate(selectedIndex);
      }
    } else if (previousOpenRef.current) {
      indexRef.current = -1;
      previousOnNavigateRef.current(null);
    }
  }, [enabled, open, selectedIndex, onNavigate]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (open) {
      if (activeIndex == null) {
        forceSyncFocus.current = false;
        if (selectedIndex != null) {
          return;
        }
        if (previousOpenRef.current) {
          indexRef.current = -1;
          focusItem(listRef, indexRef);
        }
        if (!previousOpenRef.current && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
          indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinIndex(listRef, disabledIndicesRef.current) : getMaxIndex(listRef, disabledIndicesRef.current);
          onNavigate(indexRef.current);
        }
      } else if (!isIndexOutOfBounds(listRef, activeIndex)) {
        indexRef.current = activeIndex;
        focusItem(listRef, indexRef, forceScrollIntoViewRef.current);
        forceScrollIntoViewRef.current = false;
      }
    }
  }, [enabled, open, activeIndex, selectedIndex, nested, listRef, orientation, rtl, onNavigate, focusItem, disabledIndicesRef]);
  index2(() => {
    if (!enabled) {
      return;
    }
    if (previousOpenRef.current && !open) {
      var _tree$nodesRef$curren, _tree$nodesRef$curren2;
      const parentFloating = tree == null ? void 0 : (_tree$nodesRef$curren = tree.nodesRef.current.find((node) => node.id === parentId)) == null ? void 0 : (_tree$nodesRef$curren2 = _tree$nodesRef$curren.context) == null ? void 0 : _tree$nodesRef$curren2.elements.floating;
      if (parentFloating && !contains(parentFloating, activeElement$1(getDocument(parentFloating)))) {
        parentFloating.focus({
          preventScroll: true
        });
      }
    }
  }, [enabled, open, tree, parentId]);
  index2(() => {
    keyRef.current = null;
    previousOnNavigateRef.current = onNavigate;
    previousOpenRef.current = open;
  });
  const hasActiveIndex = activeIndex != null;
  const item = React2.useMemo(() => {
    function syncCurrentTarget(currentTarget) {
      if (!open)
        return;
      const index3 = listRef.current.indexOf(currentTarget);
      if (index3 !== -1) {
        onNavigate(index3);
      }
    }
    __name(syncCurrentTarget, "syncCurrentTarget");
    const props = {
      onFocus(_ref2) {
        let {
          currentTarget
        } = _ref2;
        syncCurrentTarget(currentTarget);
      },
      onClick: (_ref3) => {
        let {
          currentTarget
        } = _ref3;
        return currentTarget.focus({
          preventScroll: true
        });
      },
      // Safari
      ...focusItemOnHover && {
        onMouseMove(_ref4) {
          let {
            currentTarget
          } = _ref4;
          syncCurrentTarget(currentTarget);
        },
        onPointerLeave() {
          if (!isPointerModalityRef.current) {
            return;
          }
          indexRef.current = -1;
          focusItem(listRef, indexRef);
          (0, import_react_dom2.flushSync)(() => onNavigate(null));
          if (!virtual) {
            var _refs$floating$curren;
            (_refs$floating$curren = refs.floating.current) == null ? void 0 : _refs$floating$curren.focus({
              preventScroll: true
            });
          }
        }
      }
    };
    return props;
  }, [open, refs, focusItem, focusItemOnHover, listRef, onNavigate, virtual]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    const disabledIndices2 = disabledIndicesRef.current;
    function onKeyDown(event) {
      isPointerModalityRef.current = false;
      forceSyncFocus.current = true;
      if (!latestOpenRef.current && event.currentTarget === refs.floating.current) {
        return;
      }
      if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl)) {
        stopEvent(event);
        onOpenChange(false);
        if (isHTMLElement2(domReference)) {
          domReference.focus();
        }
        return;
      }
      const currentIndex = indexRef.current;
      const minIndex = getMinIndex(listRef, disabledIndices2);
      const maxIndex = getMaxIndex(listRef, disabledIndices2);
      if (event.key === "Home") {
        indexRef.current = minIndex;
        onNavigate(indexRef.current);
      }
      if (event.key === "End") {
        indexRef.current = maxIndex;
        onNavigate(indexRef.current);
      }
      if (cols > 1) {
        const prevIndex = indexRef.current;
        if (event.key === ARROW_UP) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = maxIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              decrement: true,
              disabledIndices: disabledIndices2
            });
            if (loop && (prevIndex - cols < minIndex || indexRef.current < 0)) {
              const col = prevIndex % cols;
              const maxCol = maxIndex % cols;
              const offset2 = maxIndex - (maxCol - col);
              if (maxCol === col) {
                indexRef.current = maxIndex;
              } else {
                indexRef.current = maxCol > col ? offset2 : offset2 - cols;
              }
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (event.key === ARROW_DOWN) {
          stopEvent(event);
          if (prevIndex === -1) {
            indexRef.current = minIndex;
          } else {
            indexRef.current = findNonDisabledIndex(listRef, {
              startingIndex: prevIndex,
              amount: cols,
              disabledIndices: disabledIndices2
            });
            if (loop && prevIndex + cols > maxIndex) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex % cols - cols,
                amount: cols,
                disabledIndices: disabledIndices2
              });
            }
          }
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            indexRef.current = prevIndex;
          }
          onNavigate(indexRef.current);
        }
        if (orientation === "both") {
          const prevRow = Math.floor(prevIndex / cols);
          if (event.key === ARROW_RIGHT) {
            stopEvent(event);
            if (prevIndex % cols !== cols - 1) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex - prevIndex % cols - 1,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          if (event.key === ARROW_LEFT) {
            stopEvent(event);
            if (prevIndex % cols !== 0) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex,
                disabledIndices: disabledIndices2,
                decrement: true
              });
              if (loop && isDifferentRow(indexRef.current, cols, prevRow)) {
                indexRef.current = findNonDisabledIndex(listRef, {
                  startingIndex: prevIndex + (cols - prevIndex % cols),
                  decrement: true,
                  disabledIndices: disabledIndices2
                });
              }
            } else if (loop) {
              indexRef.current = findNonDisabledIndex(listRef, {
                startingIndex: prevIndex + (cols - prevIndex % cols),
                decrement: true,
                disabledIndices: disabledIndices2
              });
            }
            if (isDifferentRow(indexRef.current, cols, prevRow)) {
              indexRef.current = prevIndex;
            }
          }
          const lastRow = Math.floor(maxIndex / cols) === prevRow;
          if (isIndexOutOfBounds(listRef, indexRef.current)) {
            if (loop && lastRow) {
              indexRef.current = event.key === ARROW_LEFT ? maxIndex : findNonDisabledIndex(listRef, {
                startingIndex: prevIndex - prevIndex % cols - 1,
                disabledIndices: disabledIndices2
              });
            } else {
              indexRef.current = prevIndex;
            }
          }
          onNavigate(indexRef.current);
          return;
        }
      }
      if (isMainOrientationKey(event.key, orientation)) {
        stopEvent(event);
        if (open && !virtual && activeElement$1(event.currentTarget.ownerDocument) === event.currentTarget) {
          indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
          onNavigate(indexRef.current);
          return;
        }
        if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
          if (loop) {
            indexRef.current = currentIndex >= maxIndex ? allowEscape && currentIndex !== listRef.current.length ? -1 : minIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.min(maxIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              disabledIndices: disabledIndices2
            }));
          }
        } else {
          if (loop) {
            indexRef.current = currentIndex <= minIndex ? allowEscape && currentIndex !== -1 ? listRef.current.length : maxIndex : findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            });
          } else {
            indexRef.current = Math.max(minIndex, findNonDisabledIndex(listRef, {
              startingIndex: currentIndex,
              decrement: true,
              disabledIndices: disabledIndices2
            }));
          }
        }
        if (isIndexOutOfBounds(listRef, indexRef.current)) {
          onNavigate(null);
        } else {
          onNavigate(indexRef.current);
        }
      }
    }
    __name(onKeyDown, "onKeyDown");
    function checkVirtualMouse(event) {
      if (focusItemOnOpen === "auto" && isVirtualClick(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    __name(checkVirtualMouse, "checkVirtualMouse");
    function checkVirtualPointer(event) {
      focusItemOnOpenRef.current = focusItemOnOpen;
      if (focusItemOnOpen === "auto" && isVirtualPointerEvent(event.nativeEvent)) {
        focusItemOnOpenRef.current = true;
      }
    }
    __name(checkVirtualPointer, "checkVirtualPointer");
    const ariaActiveDescendantProp = virtual && open && hasActiveIndex && {
      "aria-activedescendant": activeId
    };
    return {
      reference: {
        ...ariaActiveDescendantProp,
        onKeyDown(event) {
          isPointerModalityRef.current = false;
          const isArrowKey = event.key.indexOf("Arrow") === 0;
          if (virtual && open) {
            return onKeyDown(event);
          }
          if (!open && !openOnArrowKeyDown && isArrowKey) {
            return;
          }
          const isNavigationKey = isArrowKey || event.key === "Enter" || event.key === " " || event.key === "";
          if (isNavigationKey) {
            keyRef.current = event.key;
          }
          if (nested) {
            if (isCrossOrientationOpenKey(event.key, orientation, rtl)) {
              stopEvent(event);
              if (open) {
                indexRef.current = getMinIndex(listRef, disabledIndices2);
                onNavigate(indexRef.current);
              } else {
                onOpenChange(true);
              }
            }
            return;
          }
          if (isMainOrientationKey(event.key, orientation)) {
            if (selectedIndex != null) {
              indexRef.current = selectedIndex;
            }
            stopEvent(event);
            if (!open && openOnArrowKeyDown) {
              onOpenChange(true);
            } else {
              onKeyDown(event);
            }
            if (open) {
              onNavigate(indexRef.current);
            }
          }
        },
        onFocus() {
          if (open) {
            onNavigate(null);
          }
        },
        onPointerDown: checkVirtualPointer,
        onMouseDown: checkVirtualMouse,
        onClick: checkVirtualMouse
      },
      floating: {
        "aria-orientation": orientation === "both" ? void 0 : orientation,
        ...ariaActiveDescendantProp,
        onKeyDown,
        onPointerMove() {
          isPointerModalityRef.current = true;
        }
      },
      item
    };
  }, [domReference, refs, activeId, disabledIndicesRef, latestOpenRef, listRef, enabled, orientation, rtl, virtual, open, hasActiveIndex, nested, selectedIndex, openOnArrowKeyDown, allowEscape, cols, loop, focusItemOnOpen, onNavigate, onOpenChange, item]);
}, "useListNavigation");
var useRole = /* @__PURE__ */ __name(function(_ref, _temp) {
  let {
    open
  } = _ref;
  let {
    enabled = true,
    role = "dialog"
  } = _temp === void 0 ? {} : _temp;
  const rootId = useId();
  const referenceId = useId();
  return React2.useMemo(() => {
    const floatingProps = {
      id: rootId,
      role
    };
    if (!enabled) {
      return {};
    }
    if (role === "tooltip") {
      return {
        reference: {
          "aria-describedby": open ? rootId : void 0
        },
        floating: floatingProps
      };
    }
    return {
      reference: {
        "aria-expanded": open ? "true" : "false",
        "aria-haspopup": role === "alertdialog" ? "dialog" : role,
        "aria-controls": open ? rootId : void 0,
        ...role === "listbox" && {
          role: "combobox"
        },
        ...role === "menu" && {
          id: referenceId
        }
      },
      floating: {
        ...floatingProps,
        ...role === "menu" && {
          "aria-labelledby": referenceId
        }
      }
    };
  }, [enabled, role, open, rootId, referenceId]);
}, "useRole");
var useTypeahead = /* @__PURE__ */ __name(function(_ref, _temp) {
  var _ref2;
  let {
    open,
    dataRef,
    refs
  } = _ref;
  let {
    listRef,
    activeIndex,
    onMatch: unstable_onMatch = /* @__PURE__ */ __name(() => {
    }, "unstable_onMatch"),
    enabled = true,
    findMatch = null,
    resetMs = 1e3,
    ignoreKeys = [],
    selectedIndex = null
  } = _temp === void 0 ? {
    listRef: {
      current: []
    },
    activeIndex: null
  } : _temp;
  const timeoutIdRef = React2.useRef();
  const stringRef = React2.useRef("");
  const prevIndexRef = React2.useRef((_ref2 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref2 : -1);
  const matchIndexRef = React2.useRef(null);
  const onMatch = useEvent2(unstable_onMatch);
  const findMatchRef = useLatestRef2(findMatch);
  const ignoreKeysRef = useLatestRef2(ignoreKeys);
  index2(() => {
    if (open) {
      clearTimeout(timeoutIdRef.current);
      matchIndexRef.current = null;
      stringRef.current = "";
    }
  }, [open]);
  index2(() => {
    if (open && stringRef.current === "") {
      var _ref3;
      prevIndexRef.current = (_ref3 = selectedIndex != null ? selectedIndex : activeIndex) != null ? _ref3 : -1;
    }
  }, [open, selectedIndex, activeIndex]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    function onKeyDown(event) {
      var _refs$floating$curren;
      const target = getTarget(event.nativeEvent);
      if (isElement2(target) && (activeElement$1(getDocument(target)) !== event.currentTarget ? (_refs$floating$curren = refs.floating.current) != null && _refs$floating$curren.contains(target) ? target.closest('[role="dialog"],[role="menu"],[role="listbox"],[role="tree"],[role="grid"]') !== event.currentTarget : false : !event.currentTarget.contains(target))) {
        return;
      }
      if (stringRef.current.length > 0 && stringRef.current[0] !== " ") {
        dataRef.current.typing = true;
        if (event.key === " ") {
          stopEvent(event);
        }
      }
      const listContent = listRef.current;
      if (listContent == null || ignoreKeysRef.current.includes(event.key) || // Character key.
      event.key.length !== 1 || // Modifier key.
      event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      const allowRapidSuccessionOfFirstLetter = listContent.every((text) => {
        var _text$, _text$2;
        return text ? ((_text$ = text[0]) == null ? void 0 : _text$.toLocaleLowerCase()) !== ((_text$2 = text[1]) == null ? void 0 : _text$2.toLocaleLowerCase()) : true;
      });
      if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
      }
      stringRef.current += event.key;
      clearTimeout(timeoutIdRef.current);
      timeoutIdRef.current = setTimeout(() => {
        stringRef.current = "";
        prevIndexRef.current = matchIndexRef.current;
        dataRef.current.typing = false;
      }, resetMs);
      const prevIndex = prevIndexRef.current;
      const orderedList = [...listContent.slice((prevIndex || 0) + 1), ...listContent.slice(0, (prevIndex || 0) + 1)];
      const str = findMatchRef.current ? findMatchRef.current(orderedList, stringRef.current) : orderedList.find((text) => (text == null ? void 0 : text.toLocaleLowerCase().indexOf(stringRef.current.toLocaleLowerCase())) === 0);
      const index3 = str ? listContent.indexOf(str) : -1;
      if (index3 !== -1) {
        onMatch(index3);
        matchIndexRef.current = index3;
      }
    }
    __name(onKeyDown, "onKeyDown");
    return {
      reference: {
        onKeyDown
      },
      floating: {
        onKeyDown
      }
    };
  }, [enabled, dataRef, listRef, resetMs, ignoreKeysRef, findMatchRef, onMatch, refs]);
}, "useTypeahead");
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
__name(getArgsWithCustomFloatingHeight, "getArgsWithCustomFloatingHeight");
var inner = /* @__PURE__ */ __name((props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = props;
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    if (process.env.NODE_ENV !== "production") {
      if (!state.placement.startsWith("bottom")) {
        console.warn(['Floating UI: `placement` side must be "bottom" when using the', "`inner` middleware."].join(" "));
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset(-item.offsetTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const el = (scrollRef == null ? void 0 : scrollRef.current) || floating;
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, el.scrollHeight), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = Math.max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const maxHeight = Math.max(0, el.scrollHeight - diffY - Math.max(0, overflow.bottom));
    el.style.maxHeight = maxHeight + "px";
    el.scrollTop = diffY;
    if (onFallbackChange) {
      if (el.offsetHeight < item.offsetHeight * Math.min(minItemsVisible, listRef.current.length - 1) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold) {
        (0, import_react_dom2.flushSync)(() => onFallbackChange(true));
      } else {
        (0, import_react_dom2.flushSync)(() => onFallbackChange(false));
      }
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, el.offsetHeight), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
}), "inner");
var useInnerOffset = /* @__PURE__ */ __name((_ref, _ref2) => {
  let {
    open,
    elements
  } = _ref;
  let {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = _ref2;
  const onChange = useEvent2(unstable_onChange);
  const controlledScrollingRef = React2.useRef(false);
  const prevScrollTopRef = React2.useRef(null);
  const initialOverflowRef = React2.useRef(null);
  React2.useEffect(() => {
    if (!enabled) {
      return;
    }
    function onWheel(e22) {
      if (e22.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e22.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e22.preventDefault();
        (0, import_react_dom2.flushSync)(() => {
          onChange((d19) => d19 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    __name(onWheel, "onWheel");
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  return React2.useMemo(() => {
    if (!enabled) {
      return {};
    }
    return {
      floating: {
        onKeyDown() {
          controlledScrollingRef.current = true;
        },
        onWheel() {
          controlledScrollingRef.current = false;
        },
        onPointerMove() {
          controlledScrollingRef.current = false;
        },
        onScroll() {
          const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
          if (!overflowRef.current || !el || !controlledScrollingRef.current) {
            return;
          }
          if (prevScrollTopRef.current !== null) {
            const scrollDiff = el.scrollTop - prevScrollTopRef.current;
            if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
              (0, import_react_dom2.flushSync)(() => onChange((d19) => d19 + scrollDiff));
            }
          }
          requestAnimationFrame(() => {
            prevScrollTopRef.current = el.scrollTop;
          });
        }
      }
    };
  }, [enabled, overflowRef, elements.floating, scrollRef, onChange]);
}, "useInnerOffset");
function useFloating2(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    open = false,
    onOpenChange: unstable_onOpenChange,
    nodeId
  } = options;
  const position = useFloating(options);
  const tree = useFloatingTree();
  const domReferenceRef = React2.useRef(null);
  const dataRef = React2.useRef({});
  const events = React2.useState(() => createPubSub())[0];
  const [domReference, setDomReference] = React2.useState(null);
  const setPositionReference = React2.useCallback((node) => {
    const positionReference = isElement2(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    position.refs.setReference(positionReference);
  }, [position.refs]);
  const setReference = React2.useCallback((node) => {
    if (isElement2(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement2(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement2(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React2.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React2.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const onOpenChange = useEvent2(unstable_onOpenChange);
  const context = React2.useMemo(() => ({
    ...position,
    refs,
    elements,
    dataRef,
    nodeId,
    events,
    open,
    onOpenChange
  }), [position, nodeId, events, open, onOpenChange, refs, elements]);
  index2(() => {
    const node = tree == null ? void 0 : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React2.useMemo(() => ({
    ...position,
    context,
    refs,
    reference: setReference,
    positionReference: setPositionReference
  }), [position, refs, context, setReference, setPositionReference]);
}
__name(useFloating2, "useFloating");
function mergeProps(userProps, propsList, elementKey) {
  const map = /* @__PURE__ */ new Map();
  return {
    ...elementKey === "floating" && {
      tabIndex: -1
    },
    ...userProps,
    ...propsList.map((value) => value ? value[elementKey] : null).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null ? void 0 : _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.forEach((fn) => fn(...args));
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
__name(mergeProps, "mergeProps");
var useInteractions = /* @__PURE__ */ __name(function(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const deps = propsList;
  const getReferenceProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "reference"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getFloatingProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "floating"),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps
  );
  const getItemProps = React2.useCallback(
    (userProps) => mergeProps(userProps, propsList, "item"),
    // Granularly check for `item` changes, because the `getItemProps` getter
    // should be as referentially stable as possible since it may be passed as
    // a prop to many components. All `item` key values must therefore be
    // memoized.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    propsList.map((key) => key == null ? void 0 : key.item)
  );
  return React2.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}, "useInteractions");

// node_modules/@tamagui/popover/dist/esm/useFloatingContext.js
var import_react23 = require("react");
var F10 = /* @__PURE__ */ __name(({ open: t28, setOpen: e22, breakpointActive: n19 }) => (0, import_react23.useCallback)((s22) => {
  const o20 = useFloating2({ ...s22, open: t28, onOpenChange: e22 }), { getReferenceProps: a18, getFloatingProps: r30 } = useInteractions([useRole(o20.context, { role: "dialog" }), useDismiss(o20.context, { enabled: !n19 })]);
  return { ...o20, getReferenceProps: a18, getFloatingProps: r30 };
}, [t28, e22, n19]), "F");

// node_modules/@tamagui/popover/dist/esm/Popover.js
var N5 = "Popover";
var [Ro, xo] = V(N5, [he2]);
var g10 = he2();
var le = xo;
var [E6, f11] = Ro(N5);
var Pe3 = E6;
var V8 = "PopoverAnchor";
var M7 = s11.forwardRef((o20, e22) => {
  const { __scopePopover: t28, ...p23 } = o20, n19 = f11(V8, t28), c26 = g10(t28), { onCustomAnchorAdd: u15, onCustomAnchorRemove: i23 } = n19;
  return s11.useEffect(() => (u15(), () => i23()), [u15, i23]), (0, import_jsx_runtime20.jsx)(Re2, { ...c26, ...p23, ref: e22 });
});
M7.displayName = V8;
var D6 = "PopoverTrigger";
var z6 = s11.forwardRef((o20, e22) => {
  const { __scopePopover: t28, ...p23 } = o20, n19 = f11(D6, t28), c26 = g10(t28), u15 = c3(e22, n19.triggerRef), i23 = (0, import_jsx_runtime20.jsx)(c5, { "aria-haspopup": "dialog", "aria-expanded": n19.open, "data-state": W9(n19.open), ...p23, ref: u15, onPress: (0, import_core19.composeEventHandlers)(o20.onPress, n19.onOpenToggle) });
  return n19.hasCustomAnchor ? i23 : (0, import_jsx_runtime20.jsx)(Re2, { asChild: true, ...c26, children: i23 });
});
z6.displayName = D6;
var R9 = "PopoverContent";
var Oo = X4.extractable(s11.forwardRef(function(e22, t28) {
  const { allowPinchZoom: p23, trapFocus: n19, disableRemoveScroll: c26 = true, zIndex: u15, ...i23 } = e22, d19 = f11(R9, e22.__scopePopover), C14 = s11.useRef(null), A18 = c3(t28, C14), v14 = s11.useRef(false);
  return s11.useEffect(() => {
    if (!d19.open)
      return;
    const a18 = C14.current;
    if (a18)
      return (0, import_aria_hidden3.hideOthers)(a18);
  }, [d19.open]), (0, import_jsx_runtime20.jsx)(Eo, { zIndex: u15, children: (0, import_jsx_runtime20.jsx)(bo, { ...i23, disableRemoveScroll: c26, ref: A18, trapFocus: n19 ?? d19.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, import_core19.composeEventHandlers)(e22.onCloseAutoFocus, (a18) => {
    var P16;
    a18.preventDefault(), v14.current || (P16 = d19.triggerRef.current) == null || P16.focus();
  }), onPointerDownOutside: (0, import_core19.composeEventHandlers)(e22.onPointerDownOutside, (a18) => {
    const P16 = a18.detail.originalEvent, h16 = P16.button === 0 && P16.ctrlKey === true, l21 = P16.button === 2 || h16;
    v14.current = l21;
  }, { checkDefaultPrevented: false }), onFocusOutside: (0, import_core19.composeEventHandlers)(e22.onFocusOutside, (a18) => a18.preventDefault(), { checkDefaultPrevented: false }) }) });
}));
function Eo(o20) {
  const e22 = (0, import_core19.useThemeName)(), t28 = f11(R9, o20.__scopePopover);
  let p23 = o20.children;
  if (import_react_native7.Platform.OS === "android") {
    const c26 = E5(R9, t28.popperScope);
    p23 = (0, import_jsx_runtime20.jsx)(G7, { ...c26, scope: t28.popperScope, children: (0, import_jsx_runtime20.jsx)(E6, { scope: o20.__scopePopover, ...t28, children: o20.children }) });
  }
  const n19 = o20.zIndex ?? 1e3;
  return (0, import_jsx_runtime20.jsx)(x5, { zIndex: n19, children: (0, import_jsx_runtime20.jsxs)(import_core19.Theme, { forceClassName: true, name: e22, children: [!!t28.open && !t28.breakpointActive && (0, import_jsx_runtime20.jsx)(c5, { fullscreen: true, onPress: (0, import_core19.composeEventHandlers)(o20.onPress, t28.onOpenToggle) }), (0, import_jsx_runtime20.jsx)(import_core19.Stack, { zIndex: n19 + 1, children: p23 })] }) });
}
__name(Eo, "Eo");
var bo = s11.forwardRef((o20, e22) => {
  const { __scopePopover: t28, trapFocus: p23, onOpenAutoFocus: n19, onCloseAutoFocus: c26, disableOutsidePointerEvents: u15, onEscapeKeyDown: i23, onPointerDownOutside: d19, onFocusOutside: C14, onInteractOutside: A18, children: v14, disableRemoveScroll: a18, ...P16 } = o20, h16 = g10(t28), l21 = f11(R9, h16.__scopePopover);
  if (l21.breakpointActive) {
    const y14 = s11.Children.toArray(v14).map((m22) => s11.isValidElement(m22) && m22.type === B5 ? m22.props.children : m22);
    return (0, import_jsx_runtime20.jsx)(B3, { hostName: `${l21.scopeKey}PopoverContents`, children: y14 });
  }
  return (0, import_jsx_runtime20.jsx)(B, { children: !!l21.open && (0, import_jsx_runtime20.jsx)(Ae3, { "data-state": W9(l21.open), id: l21.contentId, pointerEvents: "auto", ref: e22, ...h16, ...P16, children: (0, import_jsx_runtime20.jsx)(r5, { enabled: a18 ? false : l21.open, allowPinchZoom: true, removeScrollBar: false, style: { display: "contents" }, children: p23 === false ? v14 : (0, import_jsx_runtime20.jsx)(import_focus_scope2.FocusScope, { loop: true, trapped: p23 ?? l21.open, onMountAutoFocus: n19, onUnmountAutoFocus: c26, children: import_core19.isWeb ? (0, import_jsx_runtime20.jsx)("div", { style: { display: "contents" }, children: v14 }) : v14 }) }) }, l21.contentId) });
});
var H9 = "PopoverClose";
var K5 = s11.forwardRef((o20, e22) => {
  const { __scopePopover: t28, ...p23 } = o20, n19 = f11(H9, t28);
  return (0, import_jsx_runtime20.jsx)(c5, { ...p23, ref: e22, onPress: (0, import_core19.composeEventHandlers)(o20.onPress, () => n19.onOpenChange(false)) });
});
K5.displayName = H9;
var _o = "PopoverArrow";
var L6 = s11.forwardRef((o20, e22) => {
  const { __scopePopover: t28, ...p23 } = o20, n19 = g10(t28);
  return (0, import_jsx_runtime20.jsx)(ge2, { ...n19, ...p23, ref: e22 });
});
L6.displayName = _o;
var B5 = s11.forwardRef((o20, e22) => (0, import_jsx_runtime20.jsx)(import_react_native7.ScrollView, { ref: e22, ...o20 }));
var ie = (0, import_core19.withStaticProperties)(function(e22) {
  const { __scopePopover: t28, children: p23, open: n19, defaultOpen: c26, onOpenChange: u15, ...i23 } = e22, d19 = (0, import_core19.useId)(), C14 = t28 ? Object.keys(t28)[0] : d19, { when: A18, AdaptProvider: v14 } = W({ Contents: s11.useCallback(() => (0, import_jsx_runtime20.jsx)(x6, { name: `${C14}PopoverContents` }), []) }), a18 = A18, P16 = g10(t28), h16 = s11.useRef(null), [l21, y14] = s11.useState(false), [m22, w21] = A4({ prop: n19, defaultProp: c26 || false, onChange: u15, transition: true }), x17 = Y5(a18), Z10 = F10({ open: m22, setOpen: w21, breakpointActive: x17 }), G15 = { scope: t28, scopeKey: C14, popperScope: P16.__scopePopper, sheetBreakpoint: a18, contentId: (0, import_core19.useId)(), triggerRef: h16, open: m22, breakpointActive: x17, onOpenChange: w21, onOpenToggle: (0, import_core19.useEvent)(() => {
    m22 && x17 || w21(!m22);
  }), hasCustomAnchor: l21, onCustomAnchorAdd: s11.useCallback(() => y14(true), []), onCustomAnchorRemove: s11.useCallback(() => y14(false), []) }, b16 = (0, import_jsx_runtime20.jsx)(be, { ...P16, stayInFrame: true, ...i23, children: (0, import_jsx_runtime20.jsx)(E6, { ...G15, children: (0, import_jsx_runtime20.jsx)(To, { onOpenChange: w21, __scopePopover: t28, children: p23 }) }) });
  return (0, import_jsx_runtime20.jsx)(v14, { children: import_core19.isWeb ? (0, import_jsx_runtime20.jsx)(s9.Provider, { value: Z10, children: b16 }) : b16 });
}, { Anchor: M7, Arrow: L6, Trigger: z6, Content: Oo, Close: K5, Adapt: b, ScrollView: B5, Sheet: Sn });
function W9(o20) {
  return o20 ? "open" : "closed";
}
__name(W9, "W");
var To = /* @__PURE__ */ __name((o20) => {
  const e22 = f11("PopoverSheetController", o20.__scopePopover), t28 = Io(e22), p23 = e22.breakpointActive, n19 = (0, import_core19.useGet)(t28);
  return (0, import_jsx_runtime20.jsx)(Pn, { onOpenChange: (c26) => {
    n19() && o20.onOpenChange(c26);
  }, open: e22.open, hidden: p23 === false, children: o20.children });
}, "To");
var Y5 = /* @__PURE__ */ __name((o20) => {
  const e22 = (0, import_core19.useMedia)();
  return typeof o20 == "boolean" || !o20 ? !!o20 : e22[o20];
}, "Y");
var Io = /* @__PURE__ */ __name((o20) => {
  const e22 = Y5(o20.sheetBreakpoint);
  return o20.open === false ? false : e22;
}, "Io");

// node_modules/@tamagui/progress/dist/esm/Progress.js
var import_jsx_runtime21 = require("react/jsx-runtime");
var import_core20 = require("@tamagui/core-node");
var import_get_size2 = __toESM(require_cjs5());
var c13 = __toESM(require("react"));
var l10 = "Progress";
var [z7, C8] = V(l10);
var [k10, A10] = z7(l10);
var g11 = "ProgressIndicator";
var E7 = (0, import_core20.styled)(k3, { name: g11, height: "100%", width: "100%", backgrounded: true });
var P10 = E7.extractable(c13.forwardRef((e22, r30) => {
  const { __scopeProgress: a18, ...o20 } = e22, t28 = A10(g11, a18), i23 = t28.max - (t28.value ?? 0), p23 = -t28.width * (i23 / 100);
  return (0, import_jsx_runtime21.jsx)(E7, { "data-state": I6(t28.value, t28.max), "data-value": t28.value ?? void 0, "data-max": t28.max, x: p23, width: t28.width, ...o20, ref: r30 });
}));
P10.displayName = g11;
function D7(e22, r30) {
  return `${Math.round(e22 / r30 * 100)}%`;
}
__name(D7, "D");
function I6(e22, r30) {
  return e22 == null ? "indeterminate" : e22 === r30 ? "complete" : "loading";
}
__name(I6, "I");
function m12(e22) {
  return typeof e22 == "number";
}
__name(m12, "m");
function f12(e22) {
  return m12(e22) && !isNaN(e22) && e22 > 0;
}
__name(f12, "f");
function V9(e22, r30) {
  return m12(e22) && !isNaN(e22) && e22 <= r30 && e22 >= 0;
}
__name(V9, "V");
function F11(e22, r30) {
  return `Invalid prop \`max\` of value \`${e22}\` supplied to \`${r30}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d9}\`.`;
}
__name(F11, "F");
function G8(e22, r30) {
  return `Invalid prop \`value\` of value \`${e22}\` supplied to \`${r30}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d9} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name(G8, "G");
var d9 = 100;
var N6 = (0, import_core20.styled)(k3, { name: l10, borderRadius: 1e5, overflow: "hidden", backgrounded: true, variants: { size: { "...size": (e22) => {
  const r30 = Math.round((0, import_core20.getVariableValue)((0, import_get_size2.getSize)(e22)) * 0.25);
  return { height: r30, minWidth: (0, import_core20.getVariableValue)(r30) * 20, width: "100%" };
} } } });
var x10 = (0, import_core20.withStaticProperties)(N6.extractable(c13.forwardRef((e22, r30) => {
  const { __scopeProgress: a18, value: o20, max: t28, getValueLabel: i23 = D7, size: p23 = "$true", ...u15 } = e22, s22 = f12(t28) ? t28 : d9, n19 = V9(o20, s22) ? o20 : null, _13 = m12(n19) ? i23(n19, s22) : void 0, [T16, L14] = c13.useState(0);
  return (0, import_jsx_runtime21.jsx)(k10, { scope: a18, value: n19, max: s22, width: T16, children: (0, import_jsx_runtime21.jsx)(N6, { size: p23, "aria-valuemax": s22, "aria-valuemin": 0, "aria-valuenow": m12(n19) ? n19 : void 0, "aria-valuetext": _13, role: "progressbar", "data-state": I6(n19, s22), "data-value": n19 ?? void 0, "data-max": s22, ...u15, onLayout: (b16) => {
    var h16;
    L14(b16.nativeEvent.layout.width), (h16 = u15.onLayout) == null || h16.call(u15, b16);
  }, ref: r30 }) });
})), { Indicator: P10 });
x10.displayName = l10, x10.propTypes = { max(e22, r30, a18) {
  const o20 = e22[r30], t28 = String(o20);
  return o20 && !f12(o20) ? new Error(F11(t28, a18)) : null;
}, value(e22, r30, a18) {
  const o20 = e22[r30], t28 = String(o20), i23 = f12(e22.max) ? e22.max : d9;
  return o20 != null && !V9(o20, i23) ? new Error(G8(t28, a18)) : null;
} };

// node_modules/@tamagui/radio-group/dist/esm/RadioGroup.js
var import_jsx_runtime22 = require("react/jsx-runtime");
var import_react_use_previous = __toESM(require_dist5());
var import_core21 = require("@tamagui/core-node");
var import_focusable2 = __toESM(require_cjs17());
var import_get_size3 = __toESM(require_cjs5());
var n9 = __toESM(require("react"));
var G9 = "RadioGroup";
var ee4 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var [M9, oe3] = V(G9);
var [te2, re2] = M9(G9);
var _8 = /* @__PURE__ */ __name((e22) => e22 ? "checked" : "unchecked", "_");
var w10 = "RadioGroupIndicator";
var L7 = (0, import_core21.styled)(k3, { name: w10, variants: { unstyled: { false: { w: "40%", h: "40%", br: 1e3, backgroundColor: "$color", pressTheme: true, pressStyle: { backgroundColor: "$colorTransparent" } } } }, defaultVariants: { unstyled: false } });
var x11 = L7.extractable(n9.forwardRef((e22, o20) => {
  const { __scopeRadioGroupItem: r30, forceMount: a18, disabled: l21, ...u15 } = e22, { checked: i23 } = ne2(w10, r30);
  return a18 || i23 ? (0, import_jsx_runtime22.jsx)(L7, { theme: "active", "data-state": _8(i23), "data-disabled": l21 ? "" : void 0, ...u15, ref: o20 }) : null;
}));
x11.displayName = w10;
var D8 = "RadioGroupItem";
var [ae, ne2] = M9(G9);
var A11 = (0, import_core21.styled)(k3, { name: D8, tag: "button", variants: { unstyled: { false: { size: "$true", borderRadius: 1e3, backgroundColor: "$background", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "$borderColor", padding: 0, hoverStyle: { borderColor: "$borderColorHover", background: "$backgroundHover" }, focusStyle: { borderColor: "$borderColorHover", background: "$backgroundHover" }, pressStyle: { borderColor: "$borderColorFocus", background: "$backgroundFocus" } } }, size: { "...size": (e22, { props: o20 }) => {
  const r30 = Math.floor((0, import_core21.getVariableValue)((0, import_get_size3.getSize)(e22)) * (o20.scaleSize ?? 0.5));
  return { width: r30, height: r30 };
} } }, defaultVariants: { unstyled: false } });
var ie2 = A11.extractable(n9.forwardRef((e22, o20) => {
  const { __scopeRadioGroup: r30, value: a18, labelledBy: l21, disabled: u15, ...i23 } = e22, { value: m22, disabled: b16, required: s22, onChange: d19, name: v14, native: f24, accentColor: R17 } = re2(D8, r30), [p23, O10] = n9.useState(null), I10 = n9.useRef(false), S19 = n9.useRef(null), $8 = (0, import_core21.useComposedRefs)(o20, (t28) => O10(t28), S19), h16 = n9.useRef(false), T16 = import_core21.isWeb ? p23 ? Boolean(p23.closest("form")) : true : false, y14 = m22 === a18, q12 = U5(p23), z13 = l21 || q12;
  n9.useEffect(() => {
    if (import_core21.isWeb) {
      const t28 = /* @__PURE__ */ __name((K10) => {
        ee4.includes(K10.key) && (h16.current = true);
      }, "t"), H14 = /* @__PURE__ */ __name(() => h16.current = false, "H");
      return document.addEventListener("keydown", t28), document.addEventListener("keyup", H14), () => {
        document.removeEventListener("keydown", t28), document.removeEventListener("keyup", H14);
      };
    }
  }, []), process.env.TAMAGUI_TARGET === "native" && n9.useEffect(() => {
    if (e22.id)
      return (0, import_focusable2.registerFocusable)(e22.id, { focusAndSelect: () => {
        d19 == null || d19(a18);
      }, focus: () => {
      } });
  }, [e22.id, a18]);
  const g16 = b16 || u15;
  return (0, import_jsx_runtime22.jsx)(ae, { checked: y14, scope: r30, children: import_core21.isWeb && f24 ? (0, import_jsx_runtime22.jsx)(V10, { control: p23, bubbles: !I10.current, name: v14, value: a18, checked: y14, required: s22, disabled: g16, id: e22.id, accentColor: R17 }) : (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [(0, import_jsx_runtime22.jsx)(A11, { "data-state": _8(y14), "data-disabled": g16 ? "" : void 0, role: "radio", "aria-labelledby": z13, "aria-checked": y14, "aria-required": s22, disabled: g16, ref: $8, ...import_core21.isWeb && { type: "button", value: a18 }, ...i23, onPress: (0, import_core21.composeEventHandlers)(e22.onPress, (t28) => {
    y14 || d19 == null || d19(a18), T16 && (I10.current = t28.isPropagationStopped(), I10.current || t28.stopPropagation());
  }), ...import_core21.isWeb && { onKeyDown: (0, import_core21.composeEventHandlers)(e22.onKeyDown, (t28) => {
    t28.key === "Enter" && t28.preventDefault();
  }), onFocus: (0, import_core21.composeEventHandlers)(i23.onFocus, () => {
    var t28;
    h16.current && ((t28 = S19.current) == null || t28.click());
  }) } }), T16 && (0, import_jsx_runtime22.jsx)(V10, { isHidden: true, control: p23, bubbles: !I10.current, name: v14, value: a18, checked: y14, required: s22, disabled: g16 })] }) });
}));
var V10 = /* @__PURE__ */ __name((e22) => {
  const { checked: o20, bubbles: r30 = true, control: a18, isHidden: l21, accentColor: u15, ...i23 } = e22, m22 = n9.useRef(null), b16 = (0, import_react_use_previous.usePrevious)(o20);
  return n9.useEffect(() => {
    const s22 = m22.current, d19 = window.HTMLInputElement.prototype, f24 = Object.getOwnPropertyDescriptor(d19, "checked").set;
    if (b16 !== o20 && f24) {
      const R17 = new Event("click", { bubbles: r30 });
      f24.call(s22, o20), s22.dispatchEvent(R17);
    }
  }, [b16, o20, r30]), (0, import_jsx_runtime22.jsx)("input", { type: "radio", defaultChecked: o20, ...i23, tabIndex: -1, ref: m22, "aria-hidden": l21, style: { ...l21 ? { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } : { appearance: "auto", accentColor: u15 }, ...e22.style } });
}, "V");
var B6 = (0, import_core21.styled)(k3, { name: G9, variants: { orientation: { horizontal: { flexDirection: "row", spaceDirection: "horizontal" }, vertical: { flexDirection: "column", spaceDirection: "vertical" } } } });
var F12 = (0, import_core21.withStaticProperties)(B6.extractable(n9.forwardRef((e22, o20) => {
  const { __scopeRadioGroup: r30, value: a18, defaultValue: l21, onValueChange: u15, disabled: i23 = false, required: m22 = false, name: b16, orientation: s22, native: d19, accentColor: v14, ...f24 } = e22, [R17, p23] = A4({ prop: a18, defaultProp: l21, onChange: u15 });
  return (0, import_jsx_runtime22.jsx)(te2, { scope: r30, value: R17, required: m22, onChange: p23, disabled: i23, name: b16, native: d19, accentColor: v14, children: (0, import_jsx_runtime22.jsx)(B6, { "aria-valuetext": R17, role: "radiogroup", "aria-orientation": s22, ref: o20, orientation: s22, "data-disabled": i23 ? "" : void 0, ...f24 }) });
})), { Indicator: x11, Item: ie2 });
F12.displayName = G9;

// node_modules/@tamagui/select/dist/esm/Select.js
var import_jsx_runtime28 = require("react/jsx-runtime");
var import_core29 = require("@tamagui/core-node");
var import_list_item = __toESM(require_cjs19());

// node_modules/@tamagui/separator/dist/esm/Separator.js
var import_core22 = require("@tamagui/core-node");
var e10 = (0, import_core22.styled)(import_core22.Stack, { name: "Separator", borderColor: "$borderColor", flexShrink: 0, borderWidth: 0, flex: 1, height: 0, maxHeight: 0, borderBottomWidth: 1, y: -0.5, variants: { vertical: { true: { y: 0, x: -0.5, height: import_core22.isWeb ? "initial" : "auto", maxHeight: import_core22.isWeb ? "initial" : "auto", width: 0, maxWidth: 0, borderBottomWidth: 0, borderRightWidth: 1 } } } });

// node_modules/@tamagui/select/dist/esm/Select.js
var c16 = __toESM(require("react"));

// node_modules/@tamagui/select/dist/esm/constants.js
var t13 = "Select";
var o10 = 8;
var L8 = 8;
var O5 = "SelectViewport";

// node_modules/@tamagui/select/dist/esm/context.js
var import_jsx_runtime23 = require("react/jsx-runtime");
var [c15, a11] = V(t13);
var [r14, d10] = c15(t13);
var i13 = /* @__PURE__ */ __name((e22) => (0, import_jsx_runtime23.jsx)(r14, { isInSheet: true, scope: e22.__scopeSelect, ...e22.context, children: e22.children }), "i");

// node_modules/@tamagui/select/dist/esm/SelectContent.js
var import_jsx_runtime24 = require("react/jsx-runtime");
var import_core24 = require("@tamagui/core-node");
var import_focus_scope3 = __toESM(require_cjs4());

// node_modules/@tamagui/select/dist/esm/useSelectBreakpointActive.js
var import_core23 = require("@tamagui/core-node");
var o11 = /* @__PURE__ */ __name((e22) => {
  const t28 = (0, import_core23.useMedia)();
  return e22 ? e22 === true ? true : e22 ? t28[e22] : false : false;
}, "o");
var a12 = /* @__PURE__ */ __name((e22) => {
  const t28 = o11(e22.sheetBreakpoint);
  return e22.open === false ? false : t28;
}, "a");

// node_modules/@tamagui/select/dist/esm/SelectContent.js
var P12 = "SelectContent";
var E9 = /* @__PURE__ */ __name(({ children: s22, __scopeSelect: n19, zIndex: r30 = 1e3, ...c26 }) => {
  const e22 = d10(P12, n19), l21 = (0, import_core24.useThemeName)(), m22 = a12(e22), t28 = (0, import_jsx_runtime24.jsx)(import_core24.Theme, { forceClassName: true, name: l21, children: s22 }), p23 = (0, import_core24.useIsTouchDevice)();
  return m22 ? e22.open ? (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: t28 }) : null : (0, import_jsx_runtime24.jsx)(FloatingPortal, { children: e22.open ? (0, import_jsx_runtime24.jsx)(FloatingOverlay, { style: { zIndex: r30 }, lockScroll: !p23, children: (0, import_jsx_runtime24.jsx)(import_focus_scope3.FocusScope, { loop: true, trapped: true, ...c26, children: (0, import_jsx_runtime24.jsx)(T3, { children: t28 }) }) }) : (0, import_jsx_runtime24.jsx)("div", { style: { display: "none" }, children: t28 }) });
}, "E");

// node_modules/@tamagui/select/dist/esm/SelectImpl.js
var import_jsx_runtime25 = require("react/jsx-runtime");
var import_core25 = require("@tamagui/core-node");
var t14 = __toESM(require("react"));
var import_react_dom5 = require("react-dom");
var Pe4 = /* @__PURE__ */ __name((z13) => {
  const { __scopeSelect: T16, children: K10, open: n19 = false, selectedIndexRef: he5, listContentRef: b16 } = z13, A18 = d10("SelectSheetImpl", T16), { setActiveIndex: m22, setOpen: u15, setSelectedIndex: j13, selectedIndex: c26, activeIndex: i23, forceUpdate: xe4 } = A18, [E16, p23] = t14.useState(0), M16 = (0, import_core25.useIsTouchDevice)(), a18 = t14.useRef([]), D13 = t14.useRef(null), P16 = t14.useRef(null), C14 = t14.useRef(null), w21 = t14.useRef(false), L14 = t14.useRef(true), v14 = t14.useRef(), g16 = t14.useRef({ isMouseOutside: false }), [I10, f24] = t14.useState(false), [l21, h16] = t14.useState(false), [B10, x17] = t14.useState(0), [G15, J15] = t14.useState(false), k16 = t14.useRef({});
  t14.useEffect(() => {
    const e22 = requestAnimationFrame(() => {
      n19 || (p23(0), h16(false), m22(null), f24(false));
    });
    return () => {
      cancelAnimationFrame(e22);
    };
  }, [n19, m22]), import_core25.isWeb && import_core25.isClient && t14.useEffect(() => {
    if (!n19)
      return;
    const e22 = /* @__PURE__ */ __name((o20) => {
      g16.current.isMouseOutside && u15(false);
    }, "e");
    return document.addEventListener("mouseup", e22), () => {
      document.removeEventListener("mouseup", e22);
    };
  }, [n19]);
  const H14 = size({ apply({ availableHeight: e22, rects: { reference: { width: o20 } } }) {
    k16.current = { width: o20, maxHeight: e22 };
  }, padding: o10 }), { x: F16, y: N11, reference: Q9, floating: U10, strategy: X9, context: s22, refs: r30 } = useFloating2({ open: n19, onOpenChange: u15, whileElementsMounted: autoUpdate, placement: "bottom-start", middleware: l21 ? [offset(5), M16 ? shift({ crossAxis: true, padding: o10 }) : flip({ padding: o10 }), H14] : [inner({ listRef: a18, overflowRef: D13, index: c26, offset: B10, onFallbackChange: h16, padding: 10, minItemsVisible: M16 ? 10 : 4, referenceOverflowThreshold: 20 }), H14] }), R17 = r30.floating, Y11 = n19 && E16 > L8, Z10 = n19 && R17.current && E16 < R17.current.scrollHeight - R17.current.clientHeight - L8, S19 = useInteractions([useClick(s22, { event: "mousedown" }), useDismiss(s22, { outsidePress: true }), useRole(s22, { role: "listbox" }), useInnerOffset(s22, { enabled: !l21, onChange: x17, overflowRef: D13 }), useListNavigation(s22, { listRef: a18, activeIndex: i23, selectedIndex: c26, onNavigate: m22 }), useTypeahead(s22, { listRef: b16, onMatch: n19 ? m22 : j13, selectedIndex: c26, activeIndex: i23 })]), $8 = t14.useMemo(() => ({ ...S19, getReferenceProps() {
    return S19.getReferenceProps({ ref: Q9, className: "SelectTrigger", onKeyDown(e22) {
      (e22.key === "Enter" || e22.key === " " && !s22.dataRef.current.typing) && (e22.preventDefault(), u15(true));
    } });
  }, getFloatingProps(e22) {
    return S19.getFloatingProps({ ref: U10, className: "Select", ...e22, style: { position: X9, top: N11 ?? "", left: F16 ?? "", outline: 0, scrollbarWidth: "none", ...k16.current, ...e22 == null ? void 0 : e22.style }, onPointerEnter() {
      f24(false), g16.current.isMouseOutside = false;
    }, onPointerLeave() {
      g16.current.isMouseOutside = true;
    }, onPointerMove() {
      g16.current.isMouseOutside = false, f24(false);
    }, onKeyDown() {
      f24(true);
    }, onContextMenu(o20) {
      o20.preventDefault();
    }, onScroll(o20) {
      (0, import_react_dom5.flushSync)(() => p23(o20.currentTarget.scrollTop));
    } });
  } }), [U10, N11, F16, S19]);
  return (0, import_core25.useIsomorphicLayoutEffect)(() => {
    if (n19)
      return v14.current = setTimeout(() => {
        w21.current = true;
      }, 300), () => {
        clearTimeout(v14.current);
      };
    w21.current = false, L14.current = true, x17(0), h16(false), J15(false);
  }, [n19]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    function e22(o20) {
      var W14, _13, V15;
      const y14 = o20.target;
      (W14 = r30.floating.current) != null && W14.contains(y14) || (_13 = P16.current) != null && _13.contains(y14) || (V15 = C14.current) != null && V15.contains(y14) || (u15(false), f24(false));
    }
    __name(e22, "e");
    if (n19)
      return document.addEventListener("pointerdown", e22), () => {
        document.removeEventListener("pointerdown", e22);
      };
  }, [n19, r30, u15]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    var e22, o20;
    n19 && I10 && i23 != null && ((e22 = a18.current[i23]) == null || e22.scrollIntoView({ block: "nearest" })), p23(((o20 = r30.floating.current) == null ? void 0 : o20.scrollTop) ?? 0);
  }, [n19, r30, I10, i23]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    var e22;
    n19 && l21 && c26 != null && ((e22 = a18.current[c26]) == null || e22.scrollIntoView({ block: "nearest" }));
  }, [n19, l21, c26]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    r30.floating.current && l21 && (r30.floating.current.style.maxHeight = "");
  }, [r30, l21]), (0, import_jsx_runtime25.jsx)(r14, { scope: T16, ...A18, setScrollTop: p23, setInnerOffset: x17, floatingRef: R17, setValueAtIndex: (e22, o20) => {
    b16.current[e22] = o20;
  }, fallback: l21, interactions: $8, floatingContext: s22, activeIndex: i23, canScrollDown: !!Z10, canScrollUp: !!Y11, controlledScrolling: I10, dataRef: s22.dataRef, listRef: a18, blockSelection: G15, allowMouseUpRef: L14, upArrowRef: P16, downArrowRef: C14, selectTimeoutRef: v14, allowSelectRef: w21, children: K10 });
}, "Pe");
var Ce2 = typeof navigator < "u" && navigator.userAgent || "";

// node_modules/@tamagui/select/dist/esm/SelectScrollButton.js
var import_jsx_runtime26 = require("react/jsx-runtime");
var import_core26 = require("@tamagui/core-node");
var n11 = __toESM(require("react"));
var import_react_dom6 = require("react-dom");
var w11 = "SelectScrollUpButton";
var G10 = n11.forwardRef((c26, s22) => (0, import_jsx_runtime26.jsx)(E10, { componentName: w11, ...c26, dir: "up", ref: s22 }));
G10.displayName = w11;
var h10 = "SelectScrollDownButton";
var J10 = n11.forwardRef((c26, s22) => (0, import_jsx_runtime26.jsx)(E10, { componentName: h10, ...c26, dir: "down", ref: s22 }));
J10.displayName = h10;
var E10 = n11.memo(n11.forwardRef((c26, s22) => {
  var g16;
  const { __scopeSelect: N11, dir: i23, componentName: u15, ...R17 } = c26, { floatingRef: o20, forceUpdate: K10, open: f24, fallback: x17, setScrollTop: I10, setInnerOffset: y14, ...A18 } = d10(u15, N11), [e22, F16] = n11.useState(null), S19 = n11.useRef("idle"), d19 = A18[i23 === "down" ? "canScrollDown" : "canScrollUp"], l21 = n11.useRef(), { x: U10, y: _13, reference: L14, floating: D13, strategy: M16, update: O10, refs: m22 } = useFloating2({ open: f24 && d19, strategy: "fixed", placement: i23 === "up" ? "top" : "bottom", middleware: [offset(({ rects: t28 }) => -t28.floating.height)], whileElementsMounted: (...t28) => autoUpdate(...t28, { animationFrame: true }) }), H14 = c3(s22, D13);
  if (o20 && (f24 ? e22 !== o20.current && (F16(o20.current), L14(o20.current), requestAnimationFrame(O10)) : cancelAnimationFrame(l21.current)), (0, import_core26.useIsomorphicLayoutEffect)(() => () => {
    cancelAnimationFrame(l21.current);
  }, []), !(d19 && o20))
    return null;
  const b16 = /* @__PURE__ */ __name((t28) => {
    console.log("on scroll?"), x17 ? m22.floating.current && (m22.floating.current.scrollTop -= t28, (0, import_react_dom6.flushSync)(() => {
      var r30;
      return I10(((r30 = m22.floating.current) == null ? void 0 : r30.scrollTop) ?? 0);
    })) : (0, import_react_dom6.flushSync)(() => y14((r30) => r30 - t28));
  }, "b");
  return (0, import_jsx_runtime26.jsx)(c5, { ref: H14, componentName: u15, "aria-hidden": true, ...R17, zIndex: 1e3, position: M16, left: U10 || 0, top: _13 || 0, width: `calc(${(((g16 = o20 == null ? void 0 : o20.current) == null ? void 0 : g16.offsetWidth) ?? 0) - 2}px)`, onPointerEnter: () => {
    S19.current = "active";
    let t28 = Date.now();
    function r30() {
      if (e22) {
        const B10 = Date.now(), v14 = B10 - t28;
        t28 = B10;
        const a18 = v14 / 2, P16 = i23 === "up" ? e22.scrollTop : e22.scrollHeight - e22.clientHeight - e22.scrollTop, C14 = i23 === "up" ? e22.scrollTop - a18 > 0 : e22.scrollTop + a18 < e22.scrollHeight - e22.clientHeight;
        b16(i23 === "up" ? Math.min(a18, P16) : Math.max(-a18, -P16)), C14 && (l21.current = requestAnimationFrame(r30));
      }
    }
    __name(r30, "r");
    cancelAnimationFrame(l21.current), l21.current = requestAnimationFrame(r30);
  }, onPointerLeave: () => {
    S19.current = "idle", cancelAnimationFrame(l21.current);
  } });
}));

// node_modules/@tamagui/select/dist/esm/SelectViewport.js
var import_jsx_runtime27 = require("react/jsx-runtime");
var import_core27 = require("@tamagui/core-node");
var import_core28 = require("@tamagui/core-node");
var g12 = __toESM(require("react"));
var V12 = (0, import_core28.styled)(k3, { name: O5, backgroundColor: "$background", elevate: true, bordered: true, userSelect: "none", outlineWidth: 0, variants: { size: { "...size": (o20, { tokens: r30 }) => ({ borderRadius: r30.radius[o20] ?? o20 }) } }, defaultVariants: { size: "$2" } });
var v8 = g12.forwardRef((o20, r30) => {
  const { __scopeSelect: s22, children: i23, disableScroll: l21, ...a18 } = o20, e22 = d10(O5, s22);
  if (o11(e22.sheetBreakpoint) || !import_core27.isWeb)
    return (0, import_jsx_runtime27.jsx)(B3, { hostName: `${e22.scopeKey}SheetContents`, children: (0, import_jsx_runtime27.jsx)(i13, { context: e22, children: i23 }) });
  if (!e22.floatingContext)
    return null;
  if (!e22.open)
    return i23;
  const { style: { scrollbarWidth: C14, listStyleType: _13, overflow: c26, ...p23 }, ...m22 } = e22.interactions.getFloatingProps();
  return (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [!l21 && (0, import_jsx_runtime27.jsx)("style", { dangerouslySetInnerHTML: { __html: y10 } }), (0, import_jsx_runtime27.jsx)(FloatingFocusManager, { context: e22.floatingContext, children: (0, import_jsx_runtime27.jsx)(V12, { size: e22.size, role: "presentation", ...a18, ref: r30, ...m22, ...p23, overflow: l21 ? void 0 : c26 ?? "scroll", children: i23 }) })] });
});
v8.displayName = O5;
var y10 = `
.is_SelectViewport {
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}

.is_SelectViewport::-webkit-scrollbar{
  display:none
}
`;

// node_modules/@tamagui/select/dist/esm/Select.js
var k12 = "SelectTrigger";
var J11 = c16.forwardRef((t28, r30) => {
  const { __scopeSelect: l21, disabled: o20 = false, "aria-labelledby": e22, ...a18 } = t28, n19 = d10(k12, l21), p23 = e22;
  return (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { componentName: k12, backgrounded: true, radiused: true, hoverTheme: true, pressTheme: true, focusTheme: true, focusable: true, borderWidth: 1, size: n19.size, "aria-expanded": n19.open, "aria-autocomplete": "none", "aria-labelledby": p23, dir: n19.dir, disabled: o20, "data-disabled": o20 ? "" : void 0, ...a18, ref: r30, ...process.env.TAMAGUI_TARGET === "web" && n19.interactions ? n19.interactions.getReferenceProps() : { onPress() {
    n19.setOpen(!n19.open);
  } } });
});
J11.displayName = k12;
var M10 = "SelectValue";
var Q5 = (0, import_core29.styled)(p7, { name: M10, userSelect: "none" });
var Z4 = Q5.extractable(c16.forwardRef(({ __scopeSelect: t28, children: r30, placeholder: l21 }, o20) => {
  const e22 = d10(M10, t28), { onValueNodeHasChildrenChange: a18 } = e22, n19 = c3(o20, e22.onValueNodeChange), p23 = r30 ?? e22.selectedItem, i23 = !!p23, d19 = e22.value == null || e22.value === "" ? l21 ?? p23 : p23;
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    a18(i23);
  }, [a18, i23]), (0, import_jsx_runtime28.jsx)(Q5, { size: e22.size, ref: n19, pointerEvents: "none", children: d19 });
}));
Z4.displayName = M10;
var we = (0, import_core29.styled)(i6, { name: "SelectIcon", "aria-hidden": true, children: (0, import_jsx_runtime28.jsx)(p7, { children: "\u25BC" }) });
var E11 = "SelectItem";
var [Le2, ee5] = c15(E11);
var te3 = c16.forwardRef((t28, r30) => {
  const { __scopeSelect: l21, value: o20, disabled: e22 = false, textValue: a18, index: n19, ...p23 } = t28, i23 = d10(E11, l21), u15 = i23.value === o20, d19 = (0, import_core29.useId)(), { selectedIndex: _13, setSelectedIndex: f24, listRef: T16, open: O10, setOpen: x17, onChange: B10, setActiveIndex: F16, allowMouseUpRef: v14, allowSelectRef: S19, setValueAtIndex: R17, selectTimeoutRef: g16, dataRef: I10 } = i23, y14 = c3(r30, (m22) => {
    import_core29.isWeb && m22 instanceof HTMLElement && T16 && (T16.current[n19] = m22);
  });
  c16.useEffect(() => {
    R17(n19, o20);
  }, [n19, R17, o20]);
  function C14() {
    f24(n19), B10(o20), x17(false);
  }
  __name(C14, "C");
  const N11 = i23.interactions ? i23.interactions.getItemProps({ onTouchStart() {
    S19.current = true, v14.current = false;
  }, onKeyDown(m22) {
    m22.key === "Enter" || m22.key === " " && !(I10 != null && I10.current.typing) ? (m22.preventDefault(), C14()) : S19.current = true;
  }, onClick() {
    S19.current && (f24(n19), x17(false));
  }, onMouseUp() {
    v14.current && (S19.current && C14(), clearTimeout(g16.current), g16.current = setTimeout(() => {
      S19.current = true;
    }));
  } }) : { onPress: C14 };
  return (0, import_jsx_runtime28.jsx)(Le2, { scope: l21, value: o20, textId: d19 || "", isSelected: u15, children: (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { tag: "div", backgrounded: true, pressTheme: true, hoverTheme: true, cursor: "default", outlineWidth: 0, componentName: E11, ref: y14, "aria-labelledby": d19, "aria-selected": u15, "data-state": u15 ? "active" : "inactive", "aria-disabled": e22 || void 0, "data-disabled": e22 ? "" : void 0, tabIndex: e22 ? void 0 : -1, size: i23.size, focusStyle: { backgroundColor: "$backgroundHover" }, ...p23, ...N11 }) });
});
te3.displayName = E11;
var b9 = "SelectItemText";
var ke3 = (0, import_core29.styled)(s5, { name: b9, userSelect: "none" });
var oe4 = c16.forwardRef((t28, r30) => {
  const { __scopeSelect: l21, className: o20, ...e22 } = t28, a18 = d10(b9, l21), n19 = ee5(b9, l21), p23 = c16.useRef(null), i23 = c3(r30, p23), u15 = Boolean(n19.isSelected && a18.valueNode), d19 = c16.useMemo(() => (0, import_jsx_runtime28.jsx)(ke3, { className: o20, size: a18.size, id: n19.textId, ...e22, ref: i23 }), [t28, a18.size, o20, n19.textId]);
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    u15 && a18.setSelectedItem(d19);
  }, [u15, d19]), (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: d19 });
});
oe4.displayName = b9;
var re3 = "SelectItemIndicator";
var Me3 = (0, import_core29.styled)(i6, { name: b9 });
var ne3 = c16.forwardRef((t28, r30) => {
  const { __scopeSelect: l21, ...o20 } = t28;
  return ee5(re3, l21).isSelected ? (0, import_jsx_runtime28.jsx)(Me3, { "aria-hidden": true, ...o20, ref: r30 }) : null;
});
ne3.displayName = re3;
var z8 = "SelectGroup";
var [ze2, Oe3] = c15(z8);
var Be2 = (0, import_core29.styled)(c5, { name: z8, width: "100%" });
var le2 = c16.forwardRef((t28, r30) => {
  const { __scopeSelect: l21, ...o20 } = t28, e22 = (0, import_core29.useId)();
  return (0, import_jsx_runtime28.jsx)(ze2, { scope: l21, id: e22 || "", children: (0, import_jsx_runtime28.jsx)(Be2, { role: "group", "aria-labelledby": e22, ...o20, ref: r30 }) });
});
le2.displayName = z8;
var V13 = "SelectLabel";
var ce2 = c16.forwardRef((t28, r30) => {
  const { __scopeSelect: l21, ...o20 } = t28, e22 = d10(V13, l21), a18 = Oe3(V13, l21);
  return (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { tag: "div", componentName: V13, fontWeight: "800", id: a18.id, size: e22.size, ...o20, ref: r30 });
});
ce2.displayName = V13;
var mt2 = (0, import_core29.styled)(e10, { name: "SelectSeparator" });
var Fe = /* @__PURE__ */ __name((t28) => {
  const r30 = d10("SelectSheetController", t28.__scopeSelect), l21 = a12(r30), o20 = o11(r30.sheetBreakpoint), e22 = (0, import_core29.useGet)(l21);
  return (0, import_jsx_runtime28.jsx)(Pn, { onOpenChange: (a18) => {
    e22() && t28.onOpenChange(a18);
  }, open: r30.open, hidden: o20 === false, children: t28.children });
}, "Fe");
var He3 = /* @__PURE__ */ __name((t28) => (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: t28.children }), "He");
var Ue2 = (0, import_core29.withStaticProperties)((t28) => {
  const { __scopeSelect: r30, children: l21, open: o20, defaultOpen: e22, onOpenChange: a18, value: n19, defaultValue: p23, onValueChange: i23, size: u15 = "$true", dir: d19 } = t28, _13 = (0, import_core29.useId)(), f24 = r30 ? Object.keys(r30)[0] ?? _13 : _13, { when: T16, AdaptProvider: O10 } = W({ Contents: c16.useCallback(() => (0, import_jsx_runtime28.jsx)(x6, { name: `${f24}SheetContents` }), [f24]) }), x17 = T16, F16 = o11(x17) || !import_core29.isWeb ? He3 : Pe4, v14 = c16.useReducer(() => ({}), {})[1], [S19, R17] = c16.useState(null), [g16, I10] = A4({ prop: o20, defaultProp: e22 || false, onChange: a18 }), [y14, C14] = A4({ prop: n19, defaultProp: p23 || "", onChange: i23, transition: true }), [N11, m22] = c16.useState(0), H14 = c16.useRef(null), U10 = c16.useRef(null), D13 = c16.useRef([]), [W14, ae4] = c16.useState(0), [ie5, pe4] = c16.useState(null), [de7, ue3] = c16.useState(false);
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    H14.current = W14, U10.current = N11;
  }), (0, import_jsx_runtime28.jsx)(O10, { children: (0, import_jsx_runtime28.jsx)(r14, { dir: d19, blockSelection: false, size: u15, fallback: false, selectedItem: S19, setSelectedItem: R17, forceUpdate: v14, valueNode: ie5, onValueNodeChange: pe4, onValueNodeHasChildrenChange: ue3, valueNodeHasChildren: de7, scopeKey: f24, sheetBreakpoint: x17, scope: r30, setValueAtIndex: (me5, Se4) => {
    D13.current[me5] = Se4;
  }, activeIndex: N11, onChange: C14, selectedIndex: W14, setActiveIndex: m22, setOpen: I10, setSelectedIndex: ae4, value: y14, open: g16, children: (0, import_jsx_runtime28.jsx)(Fe, { onOpenChange: I10, __scopeSelect: r30, children: (0, import_jsx_runtime28.jsx)(F16, { activeIndexRef: U10, listContentRef: D13, selectedIndexRef: H14, ...t28, open: g16, value: y14, children: l21 }) }) }) });
}, { Adapt: b, Content: E9, Group: le2, Icon: we, Item: te3, ItemIndicator: ne3, ItemText: oe4, Label: ce2, ScrollDownButton: J10, ScrollUpButton: G10, Trigger: J11, Value: Z4, Viewport: v8, Sheet: Sn });
Ue2.displayName = t13;

// node_modules/@tamagui/slider/dist/esm/Slider.js
var import_jsx_runtime31 = require("react/jsx-runtime");
var import_core31 = require("@tamagui/core-node");
var import_get_size5 = __toESM(require_cjs5());

// node_modules/@tamagui/helpers/dist/esm/clamp.js
function e11(n19, [m22, r30]) {
  return Math.min(r30, Math.max(m22, n19));
}
__name(e11, "e");

// node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.js
function E12(n19, r30, { checkDefaultPrevented: t28 = true } = {}) {
  return !n19 || !r30 ? r30 || n19 : function(e22) {
    if (n19 == null || n19(e22), !e22 || !(t28 && "defaultPrevented" in e22) || "defaultPrevented" in e22 && !e22.defaultPrevented)
      return r30 == null ? void 0 : r30(e22);
  };
}
__name(E12, "E");

// node_modules/@tamagui/helpers/dist/esm/validStyleProps.js
var t16 = Object.freeze({ x: true, y: true, scale: true, perspective: true, scaleX: true, scaleY: true, skewX: true, skewY: true, matrix: true, rotate: true, rotateY: true, rotateX: true, rotateZ: true });
var r16 = Object.freeze({ placeholderTextColor: true });
var e12 = Object.freeze({ backfaceVisibility: true, backgroundColor: true, borderBottomColor: true, borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderBottomWidth: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderLeftWidth: true, borderRadius: true, borderRightColor: true, borderRightWidth: true, borderStartColor: true, borderStyle: true, borderTopColor: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true, borderTopWidth: true, borderWidth: true, opacity: true, transform: true, alignContent: true, alignItems: true, alignSelf: true, aspectRatio: true, borderEndWidth: true, borderStartWidth: true, bottom: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, columnGap: true, rowGap: true, height: true, justifyContent: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, start: true, top: true, width: true, zIndex: true, direction: true, shadowColor: true, shadowOffset: true, shadowOpacity: true, shadowRadius: true, ...r16, ...t16, ...process.env.TAMAGUI_TARGET === "web" && { borderBottomStyle: true, borderTopStyle: true, borderLeftStyle: true, borderRightStyle: true, overflowX: true, overflowY: true, userSelect: true, cursor: true, contain: true, pointerEvents: true, boxSizing: true, boxShadow: true, outlineColor: true, outlineStyle: true, outlineOffset: true, outlineWidth: true } });
var o13 = Object.freeze({ fontFamily: true, fontSize: true, fontStyle: true, fontWeight: true, letterSpacing: true, lineHeight: true, textTransform: true });
var u14 = Object.freeze({ color: true, ...o13, textAlign: true, textDecorationLine: true, textDecorationStyle: true, textDecorationColor: true, textShadowColor: true, textShadowOffset: true, textShadowRadius: true, ...process.env.TAMAGUI_TARGET === "web" && { whiteSpace: true, wordWrap: true, textOverflow: true, textDecorationDistance: true, userSelect: true, selectable: true, cursor: true, WebkitLineClamp: true, WebkitBoxOrient: true } });
var i14 = Object.freeze({ ...e12, ...u14 });
var a13 = Object.freeze({ enterStyle: true, exitStyle: true, hoverStyle: true, pressStyle: true, focusStyle: true });
var n12 = Object.freeze({ ...a13, ...e12 });

// node_modules/@tamagui/use-direction/dist/esm/useDirection.js
var import_jsx_runtime29 = require("react/jsx-runtime");
var t17 = __toESM(require("react"));
var i15 = t17.createContext(void 0);
function d12(e22) {
  const r30 = t17.useContext(i15);
  return e22 || r30 || "ltr";
}
__name(d12, "d");

// node_modules/@tamagui/slider/dist/esm/Slider.js
var d13 = __toESM(require("react"));

// node_modules/@tamagui/slider/dist/esm/constants.js
var e13 = "Slider";
var [r17, p12] = V(e13);
var [S11, l11] = r17(e13);
var [w13, g13] = r17(e13, { startEdge: "left", endEdge: "right", sizeProp: "width", size: 0, direction: 1 });
var a14 = ["PageUp", "PageDown"];
var x13 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var A12 = { ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"], rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"] };

// node_modules/@tamagui/slider/dist/esm/helpers.js
function m13(e22 = [], n19, r30) {
  const t28 = [...e22];
  return t28[r30] = n19, t28.sort((u15, o20) => u15 - o20);
}
__name(m13, "m");
function a15(e22, n19, r30) {
  return 100 / (r30 - n19) * (e22 - n19);
}
__name(a15, "a");
function b10(e22, n19) {
  return n19 > 2 ? `Value ${e22 + 1} of ${n19}` : n19 === 2 ? ["Minimum", "Maximum"][e22] : void 0;
}
__name(b10, "b");
function f15(e22, n19) {
  if (e22.length === 1)
    return 0;
  const r30 = e22.map((u15) => Math.abs(u15 - n19)), t28 = Math.min(...r30);
  return r30.indexOf(t28);
}
__name(f15, "f");
function i16(e22, n19, r30) {
  const t28 = e22 / 2, o20 = c18([0, 50], [0, t28]);
  return (t28 - o20(n19) * r30) * r30;
}
__name(i16, "i");
function s13(e22) {
  return e22.slice(0, -1).map((n19, r30) => e22[r30 + 1] - n19);
}
__name(s13, "s");
function l12(e22, n19) {
  if (n19 > 0) {
    const r30 = s13(e22);
    return Math.min(...r30) >= n19;
  }
  return true;
}
__name(l12, "l");
function c18(e22, n19) {
  return (r30) => {
    if (e22[0] === e22[1] || n19[0] === n19[1])
      return n19[0];
    const t28 = (n19[1] - n19[0]) / (e22[1] - e22[0]);
    return n19[0] + t28 * (r30 - e22[0]);
  };
}
__name(c18, "c");
function x14(e22) {
  return (String(e22).split(".")[1] || "").length;
}
__name(x14, "x");
function p13(e22, n19) {
  const r30 = Math.pow(10, n19);
  return Math.round(e22 * r30) / r30;
}
__name(p13, "p");

// node_modules/@tamagui/slider/dist/esm/SliderImpl.js
var import_jsx_runtime30 = require("react/jsx-runtime");
var import_core30 = require("@tamagui/core-node");
var import_get_size4 = __toESM(require_cjs5());
var w14 = __toESM(require("react"));
var P13 = (0, import_core30.styled)(c5, { variants: { orientation: { horizontal: {}, vertical: {} } } });
var k13 = (0, import_core30.styled)(P13, { position: "relative", variants: { size: (o20, n19) => {
  const i23 = n19.props.orientation, t28 = Math.round((0, import_core30.getVariableValue)((0, import_get_size4.getSize)(o20)) / 6);
  return i23 === "horizontal" ? { height: t28, borderRadius: t28, justifyContent: "center" } : { width: t28, borderRadius: t28, alignItems: "center" };
} } });
var v9 = w14.forwardRef((o20, n19) => {
  const { __scopeSlider: i23, onSlideStart: t28, onSlideMove: S19, onSlideEnd: u15, onHomeKeyDown: c26, onEndKeyDown: m22, onStepKeyDown: f24, ...a18 } = o20, d19 = l11(e13, i23);
  return (0, import_jsx_runtime30.jsx)(k13, { size: "$4", ...a18, "data-orientation": a18.orientation, ref: n19, ...import_core30.isWeb && { onKeyDown: (e22) => {
    e22.key === "Home" ? (c26(e22), e22.preventDefault()) : e22.key === "End" ? (m22(e22), e22.preventDefault()) : a14.concat(x13).includes(e22.key) && (f24(e22), e22.preventDefault());
  } }, onMoveShouldSetResponderCapture: () => true, onScrollShouldSetResponder: () => true, onScrollShouldSetResponderCapture: () => true, onMoveShouldSetResponder: () => true, onStartShouldSetResponder: () => true, onResponderTerminationRequest: () => false, onResponderGrant: (0, import_core30.composeEventHandlers)(o20.onResponderGrant, (e22) => {
    const r30 = e22.target, R17 = d19.thumbs.has(r30);
    import_core30.isWeb && r30 instanceof HTMLElement && d19.thumbs.has(r30) && r30.focus(), t28(e22, R17 ? "thumb" : "track");
  }), onResponderMove: (0, import_core30.composeEventHandlers)(o20.onResponderMove, (e22) => {
    e22.stopPropagation(), S19(e22);
  }), onResponderRelease: (0, import_core30.composeEventHandlers)(o20.onResponderRelease, (e22) => {
    u15(e22);
  }) });
});

// node_modules/@tamagui/slider/dist/esm/Slider.js
var Pe6 = d13.forwardRef((r30, c26) => {
  const { min: S19, max: i23, dir: t28, onSlideStart: a18, onSlideMove: e22, onStepKeyDown: n19, ...p23 } = r30, P16 = d12(t28), h16 = P16 === "ltr", b16 = d13.useRef(null), [s22, l21] = d13.useState(() => ({ size: 0, offset: 0 }));
  function v14(o20) {
    const m22 = [0, s22.size];
    return c18(m22, h16 ? [S19, i23] : [i23, S19])(o20);
  }
  __name(v14, "v");
  return (0, import_jsx_runtime31.jsx)(w13, { scope: r30.__scopeSlider, startEdge: h16 ? "left" : "right", endEdge: h16 ? "right" : "left", direction: h16 ? 1 : -1, sizeProp: "width", size: s22.size, children: (0, import_jsx_runtime31.jsx)(v9, { ref: R(c26, b16), dir: P16, ...p23, orientation: "horizontal", onLayout: () => {
    var o20;
    (o20 = b16.current) == null || o20.measure((m22, f24, T16, w21, K10, L14) => {
      l21({ size: T16, offset: K10 });
    });
  }, onSlideStart: (o20, m22) => {
    const f24 = v14(o20.nativeEvent.locationX);
    f24 && (a18 == null || a18(f24, m22));
  }, onSlideMove: (o20) => {
    const m22 = v14(o20.nativeEvent.pageX - s22.offset);
    m22 && (e22 == null || e22(m22));
  }, onSlideEnd: () => {
  }, onStepKeyDown: (o20) => {
    const m22 = A12[P16].includes(o20.key);
    n19 == null || n19({ event: o20, direction: m22 ? -1 : 1 });
  } }) });
});
var ge4 = d13.forwardRef((r30, c26) => {
  const { min: S19, max: i23, onSlideStart: t28, onSlideMove: a18, onStepKeyDown: e22, ...n19 } = r30, [p23, P16] = d13.useState(() => ({ size: 0, offset: 0 })), h16 = d13.useRef(null);
  function b16(s22) {
    const l21 = [0, p23.size];
    return c18(l21, [i23, S19])(s22);
  }
  __name(b16, "b");
  return (0, import_jsx_runtime31.jsx)(w13, { scope: r30.__scopeSlider, startEdge: "bottom", endEdge: "top", sizeProp: "height", size: p23.size, direction: 1, children: (0, import_jsx_runtime31.jsx)(v9, { ref: R(c26, h16), ...n19, orientation: "vertical", onLayout: ({ nativeEvent: { layout: s22 } }) => {
    var l21;
    (l21 = h16.current) == null || l21.measure((v14, o20, m22, f24, T16, w21) => {
      P16({ size: f24, offset: w21 });
    });
  }, onSlideStart: (s22, l21) => {
    const v14 = b16(s22.nativeEvent.locationY);
    v14 && (t28 == null || t28(v14, l21));
  }, onSlideMove: (s22) => {
    const l21 = b16(s22.nativeEvent.pageY - p23.offset);
    l21 && (a18 == null || a18(l21));
  }, onSlideEnd: () => {
  }, onStepKeyDown: (s22) => {
    const l21 = A12.ltr.includes(s22.key);
    e22 == null || e22({ event: s22, direction: l21 ? -1 : 1 });
  } }) });
});
var j8 = "SliderTrack";
var Te2 = (0, import_core31.styled)(k13, { name: "SliderTrack", height: "100%", width: "100%", backgroundColor: "$background", position: "relative", borderRadius: 1e5, overflow: "hidden" });
var _9 = d13.forwardRef((r30, c26) => {
  const { __scopeSlider: S19, ...i23 } = r30, t28 = l11(j8, S19);
  return (0, import_jsx_runtime31.jsx)(Te2, { "data-disabled": t28.disabled ? "" : void 0, "data-orientation": t28.orientation, orientation: t28.orientation, size: t28.size, ...i23, ref: c26 });
});
_9.displayName = j8;
var O6 = "SliderTrackActive";
var ze3 = (0, import_core31.styled)(k13, { name: "SliderTrackActive", backgroundColor: "$background", position: "absolute" });
var A13 = d13.forwardRef((r30, c26) => {
  const { __scopeSlider: S19, ...i23 } = r30, t28 = l11(O6, S19), a18 = g13(O6, S19), e22 = d13.useRef(null), n19 = c3(c26, e22), p23 = t28.values.length, P16 = t28.values.map((s22) => a15(s22, t28.min, t28.max)), h16 = p23 > 1 ? Math.min(...P16) : 0, b16 = 100 - Math.max(...P16);
  return (0, import_jsx_runtime31.jsx)(ze3, { orientation: t28.orientation, "data-orientation": t28.orientation, "data-disabled": t28.disabled ? "" : void 0, size: t28.size, ...i23, ref: n19, [a18.startEdge]: `${h16}%`, [a18.endEdge]: `${b16}%`, ...a18.sizeProp === "width" ? { height: "100%" } : { left: 0, right: 0 } });
});
A13.displayName = O6;
var D9 = "SliderThumb";
var q7 = /* @__PURE__ */ __name((r30) => {
  const c26 = typeof r30 == "number" ? r30 : (0, import_get_size5.getSize)(r30, -1);
  return { width: c26, height: c26, minWidth: c26, minHeight: c26 };
}, "q");
var we2 = (0, import_core31.styled)(k3, { name: "SliderThumb", position: "absolute", bordered: 2, borderWidth: 2, backgrounded: true, pressTheme: import_core31.isWeb, focusTheme: import_core31.isWeb, hoverTheme: import_core31.isWeb, variants: { size: { "...size": q7 } } });
var C10 = d13.forwardRef((r30, c26) => {
  const { __scopeSlider: S19, index: i23, size: t28, ...a18 } = r30, e22 = l11(D9, S19), n19 = g13(D9, S19), [p23, P16] = d13.useState(null), h16 = c3(c26, (T16) => P16(T16)), b16 = e22.values[i23], s22 = b16 === void 0 ? 0 : a15(b16, e22.min, e22.max), l21 = b10(i23, e22.values.length), v14 = t28 ?? e22.size ?? "$true", [o20, m22] = d13.useState(() => (0, import_core31.getVariableValue)(q7(v14).width)), f24 = o20 ? i16(o20, s22, n19.direction) : 0;
  return d13.useEffect(() => {
    if (p23)
      return e22.thumbs.add(p23), () => {
        e22.thumbs.delete(p23);
      };
  }, [p23, e22.thumbs]), (0, import_jsx_runtime31.jsx)(we2, { ref: h16, role: "slider", "aria-label": r30["aria-label"] || l21, "aria-valuemin": e22.min, "aria-valuenow": b16, "aria-valuemax": e22.max, "aria-orientation": e22.orientation, "data-orientation": e22.orientation, "data-disabled": e22.disabled ? "" : void 0, tabIndex: e22.disabled ? void 0 : 0, animateOnly: ["transform", "left", "right", "top", "bottom"], ...a18, ...e22.orientation === "horizontal" ? { x: f24 - o20 / 2, y: -o20 / 2, top: "50%", ...o20 === 0 && { top: "auto", bottom: "auto" } } : { x: -o20 / 2, y: o20 / 2, left: "50%", ...o20 === 0 && { left: "auto", right: "auto" } }, [n19.startEdge]: `${s22}%`, size: v14, onLayout: (T16) => {
    m22(T16.nativeEvent.layout[n19.sizeProp]);
  }, onFocus: E12(r30.onFocus, () => {
    e22.valueIndexToChangeRef.current = i23;
  }) });
});
C10.displayName = D9;
var J12 = (0, import_core31.withStaticProperties)(d13.forwardRef((r30, c26) => {
  const { name: S19, min: i23 = 0, max: t28 = 100, step: a18 = 1, orientation: e22 = "horizontal", disabled: n19 = false, minStepsBetweenThumbs: p23 = 0, defaultValue: P16 = [i23], value: h16, onValueChange: b16 = /* @__PURE__ */ __name(() => {
  }, "b"), size: s22, ...l21 } = r30, v14 = d13.useRef(null), o20 = c3(v14, c26), m22 = d13.useRef(/* @__PURE__ */ new Set()), f24 = d13.useRef(0), T16 = e22 === "horizontal", [w21 = [], K10] = A4({ prop: h16, defaultProp: P16, transition: true, onChange: (u15) => {
    var g16;
    import_core31.isWeb && ((g16 = [...m22.current][f24.current]) == null || g16.focus()), b16(u15);
  } });
  import_core31.isWeb && d13.useEffect(() => {
    const u15 = v14.current;
    if (!u15)
      return;
    const g16 = /* @__PURE__ */ __name((k16) => {
      k16.preventDefault();
    }, "g");
    return u15.addEventListener("touchstart", g16), () => {
      u15.removeEventListener("touchstart", g16);
    };
  }, []);
  function L14(u15) {
    E16(u15, f24.current);
  }
  __name(L14, "L");
  function E16(u15, g16) {
    const k16 = x14(a18), N11 = p13(Math.round((u15 - i23) / a18) * a18 + i23, k16), V15 = e11(N11, [i23, t28]);
    K10((x17 = []) => {
      const y14 = m13(x17, V15, g16);
      return l12(y14, p23 * a18) ? (f24.current = y14.indexOf(V15), String(y14) === String(x17) ? x17 : y14) : x17;
    });
  }
  __name(E16, "E");
  const Q9 = T16 ? Pe6 : ge4;
  return (0, import_jsx_runtime31.jsx)(S11, { scope: r30.__scopeSlider, disabled: n19, min: i23, max: t28, valueIndexToChangeRef: f24, thumbs: m22.current, values: w21, orientation: e22, size: s22, children: (0, import_jsx_runtime31.jsx)(Q9, { "aria-disabled": n19, "data-disabled": n19 ? "" : void 0, ...l21, ref: o20, min: i23, max: t28, onSlideStart: n19 ? void 0 : (u15, g16) => {
    if (g16 !== "thumb") {
      const k16 = f15(w21, u15);
      E16(u15, k16);
    }
  }, onSlideMove: n19 ? void 0 : L14, onHomeKeyDown: () => !n19 && E16(i23, 0), onEndKeyDown: () => !n19 && E16(t28, w21.length - 1), onStepKeyDown: ({ event: u15, direction: g16 }) => {
    if (!n19) {
      const V15 = a14.includes(u15.key) || u15.shiftKey && x13.includes(u15.key) ? 10 : 1, x17 = f24.current, y14 = w21[x17], Z10 = a18 * V15 * g16;
      E16(y14 + Z10, x17);
    }
  } }) });
}), { Track: _9, TrackActive: A13, Thumb: C10 });
J12.displayName = e13;
var ke4 = _9;
var xe2 = A13;
var ye2 = C10;

// node_modules/@tamagui/switch/dist/esm/Switch.js
var import_jsx_runtime32 = require("react/jsx-runtime");
var import_react_use_previous2 = __toESM(require_dist5());
var import_core32 = require("@tamagui/core-node");
var import_focusable3 = __toESM(require_cjs17());
var import_get_size6 = __toESM(require_cjs5());
var i17 = __toESM(require("react"));
var g14 = "Switch";
var S12 = /* @__PURE__ */ __name((e22) => Math.round((0, import_core32.getVariableValue)((0, import_get_size6.getSize)(e22)) * 0.65), "S");
var v10 = /* @__PURE__ */ __name((e22) => S12(e22) * 2, "v");
var B7 = V(g14);
var [K7] = B7;
var fe3 = B7[1];
var [Q6, Y6] = K7(g14);
var E14 = "SwitchThumb";
var R12 = (0, import_core32.styled)(k3, { name: "SwitchThumb", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", borderRadius: 1e3 } }, size: { "...size": (e22) => {
  const o20 = S12(e22);
  return { height: o20, width: o20 };
} } }, defaultVariants: { unstyled: false } });
var I8 = R12.extractable(i17.forwardRef((e22, o20) => {
  const { __scopeSwitch: t28, size: a18, ...u15 } = e22, { size: l21, disabled: d19, checked: s22, unstyled: n19 } = Y6(E14, t28), r30 = a18 ?? l21;
  return (0, import_jsx_runtime32.jsx)(R12, { unstyled: n19, size: r30, theme: s22 ? "active" : null, "data-state": M11(s22), "data-disabled": d19 ? "" : void 0, ...u15, x: s22 ? (0, import_core32.getVariableValue)(v10(r30)) - (0, import_core32.getVariableValue)(S12(r30)) : 0, ref: o20 });
}));
I8.displayName = E14;
var H10 = (0, import_core32.styled)(i6, { name: g14, tag: "button", variants: { unstyled: { false: { size: "$true", borderRadius: 1e3, borderWidth: 2, borderColor: "transparent", backgroundColor: "$background", focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": (e22) => {
  const o20 = S12(e22) + 4, t28 = v10(e22) + 4;
  return { height: o20, minHeight: o20, width: t28 };
} } }, defaultVariants: { unstyled: false } });
var me3 = (0, import_core32.withStaticProperties)(H10.extractable(i17.forwardRef((e22, o20) => {
  const { __scopeSwitch: t28, labeledBy: a18, name: u15, checked: l21, defaultChecked: d19, required: s22, disabled: n19, value: r30 = "on", onCheckedChange: p23, size: b16 = "$true", unstyled: C14 = false, ...F16 } = e22, [f24, L14] = i17.useState(null), V15 = c3(o20, (c26) => L14(c26)), _13 = U5(f24), $8 = a18 || _13, k16 = i17.useRef(false), z13 = import_core32.isWeb ? f24 ? Boolean(f24.closest("form")) : true : false, [h16 = false, P16] = A4({ prop: l21, defaultProp: d19 || false, onChange: p23, transition: true });
  return import_core32.isWeb || i17.useEffect(() => {
    if (e22.id)
      return (0, import_focusable3.registerFocusable)(e22.id, { focus: () => {
        P16((c26) => !c26);
      } });
  }, [e22.id, P16]), (0, import_jsx_runtime32.jsxs)(Q6, { scope: t28, checked: h16, disabled: n19, size: b16, unstyled: C14, children: [(0, import_jsx_runtime32.jsx)(H10, { unstyled: C14, size: b16, role: "switch", "aria-checked": h16, "aria-labelledby": $8, "aria-required": s22, "data-state": M11(h16), "data-disabled": n19 ? "" : void 0, disabled: n19, theme: h16 ? "active" : null, themeShallow: true, tabIndex: n19 ? void 0 : 0, value: r30, ...F16, ref: V15, onPress: (c26) => {
    var T16;
    (T16 = e22.onPress) == null || T16.call(e22, c26), P16((W14) => !W14), import_core32.isWeb && z13 && (k16.current = c26.isPropagationStopped(), k16.current || c26.stopPropagation());
  } }), import_core32.isWeb && z13 && (0, import_jsx_runtime32.jsx)(Z5, { control: f24, bubbles: !k16.current, name: u15, value: r30, checked: h16, required: s22, disabled: n19, style: { transform: "translateX(-100%)" } })] });
})), { Thumb: I8 });
var Z5 = /* @__PURE__ */ __name((e22) => {
  const { control: o20, checked: t28, bubbles: a18 = true, ...u15 } = e22, l21 = i17.useRef(null), d19 = (0, import_react_use_previous2.usePrevious)(t28);
  return i17.useEffect(() => {
    const s22 = l21.current, n19 = window.HTMLInputElement.prototype, p23 = Object.getOwnPropertyDescriptor(n19, "checked").set;
    if (d19 !== t28 && p23) {
      const b16 = new Event("click", { bubbles: a18 });
      p23.call(s22, t28), s22.dispatchEvent(b16);
    }
  }, [d19, t28, a18]), (0, import_jsx_runtime32.jsx)("input", { type: "checkbox", "aria-hidden": true, defaultChecked: t28, ...u15, tabIndex: -1, ref: l21, style: { ...e22.style, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
}, "Z");
function M11(e22) {
  return e22 ? "checked" : "unchecked";
}
__name(M11, "M");

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_jsx_runtime36 = require("react/jsx-runtime");
var import_focusable4 = __toESM(require_cjs17());
var import_font_size2 = __toESM(require_cjs9());
var import_get_size7 = __toESM(require_cjs5());
var import_group = __toESM(require_cjs16());
var import_helpers_tamagui2 = __toESM(require_cjs12());

// node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_jsx_runtime34 = require("react/jsx-runtime");

// node_modules/@tamagui/collection/dist/esm/Collection.js
var import_jsx_runtime33 = require("react/jsx-runtime");
var import_core33 = require("@tamagui/core-node");
var import_react28 = __toESM(require("react"));
function v11(s22) {
  const a18 = s22 + "CollectionProvider", [y14, x17] = V(a18), [P16, m22] = y14(a18, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), f24 = /* @__PURE__ */ __name((n19) => {
    const { scope: e22, children: r30 } = n19, t28 = import_react28.default.useRef(null), o20 = import_react28.default.useRef(/* @__PURE__ */ new Map()).current;
    return (0, import_jsx_runtime33.jsx)(P16, { scope: e22, itemMap: o20, collectionRef: t28, children: r30 });
  }, "f");
  f24.displayName = a18;
  const u15 = s22 + "CollectionSlot", C14 = import_react28.default.forwardRef((n19, e22) => {
    const { scope: r30, children: t28 } = n19, o20 = m22(u15, r30), l21 = c3(e22, o20.collectionRef);
    return (0, import_jsx_runtime33.jsx)(import_core33.Slot, { ref: l21, children: t28 });
  });
  C14.displayName = u15;
  const d19 = s22 + "CollectionItemSlot", R17 = "data-collection-item", I10 = import_react28.default.forwardRef((n19, e22) => {
    const { scope: r30, children: t28, ...o20 } = n19, l21 = import_react28.default.useRef(null), E16 = c3(e22, l21), i23 = m22(d19, r30);
    return import_react28.default.useEffect(() => (i23.itemMap.set(l21, { ref: l21, ...o20 }), () => void i23.itemMap.delete(l21))), (0, import_jsx_runtime33.jsx)(import_core33.Slot, { [R17]: "", ref: E16, children: t28 });
  });
  I10.displayName = d19;
  function T16(n19) {
    const e22 = m22(s22 + "CollectionConsumer", n19);
    return import_react28.default.useCallback(() => {
      if (!import_core33.isWeb)
        return [];
      const t28 = e22.collectionRef.current;
      if (!t28)
        return [];
      const o20 = Array.from(t28.querySelectorAll(`[${R17}]`));
      return Array.from(e22.itemMap.values()).sort((i23, N11) => o20.indexOf(i23.ref.current) - o20.indexOf(N11.ref.current));
    }, [e22.collectionRef, e22.itemMap]);
  }
  __name(T16, "T");
  return [{ Provider: f24, Slot: C14, ItemSlot: I10 }, T16, x17];
}
__name(v11, "v");

// node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_core34 = require("@tamagui/core-node");
var import_core35 = require("@tamagui/core-node");
var r18 = __toESM(require("react"));
var G12 = "rovingFocusGroup.onEntryFocus";
var Z6 = { bubbles: false, cancelable: true };
var $5 = r18.forwardRef((o20, e22) => {
  const { __scopeRovingFocusGroup: s22, orientation: t28, loop: F16 = false, dir: b16, currentTabStopId: S19, defaultCurrentTabStopId: P16, onCurrentTabStopIdChange: m22, onEntryFocus: i23, ...E16 } = o20, v14 = r18.useRef(null), g16 = c3(e22, v14), I10 = d12(b16), [c26 = null, p23] = A4({ prop: S19, defaultProp: P16 ?? null, onChange: m22 }), [C14, u15] = r18.useState(false), a18 = (0, import_core34.useEvent)(i23), N11 = h13(s22), T16 = r18.useRef(false), [L14, D13] = r18.useState(0);
  return r18.useEffect(() => {
    const n19 = v14.current;
    if (n19)
      return n19.addEventListener(G12, a18), () => n19.removeEventListener(G12, a18);
  }, [a18]), (0, import_jsx_runtime34.jsx)(no, { scope: s22, orientation: t28, dir: I10, loop: F16, currentTabStopId: c26, onItemFocus: r18.useCallback((n19) => p23(n19), [p23]), onItemShiftTab: r18.useCallback(() => u15(true), []), onFocusableItemAdd: r18.useCallback(() => D13((n19) => n19 + 1), []), onFocusableItemRemove: r18.useCallback(() => D13((n19) => n19 - 1), []), children: (0, import_jsx_runtime34.jsx)(import_core34.Stack, { tabIndex: C14 || L14 === 0 ? -1 : 0, "data-orientation": t28, ...E16, ref: g16, style: [{ outline: "none" }, o20.style], onMouseDown: (0, import_core34.composeEventHandlers)(o20.onMouseDown, () => {
    T16.current = true;
  }), onFocus: (0, import_core34.composeEventHandlers)(o20.onFocus, (n19) => {
    const U10 = !T16.current;
    if (n19.target === n19.currentTarget && U10 && !C14) {
      const A18 = new CustomEvent(G12, Z6);
      if (n19.currentTarget.dispatchEvent(A18), !A18.defaultPrevented) {
        const y14 = N11().filter((l21) => l21.focusable), K10 = y14.find((l21) => l21.active), B10 = y14.find((l21) => l21.id === c26), H14 = [K10, B10, ...y14].filter(Boolean).map((l21) => l21.ref.current);
        M12(H14);
      }
    }
    T16.current = false;
  }), onBlur: (0, import_core34.composeEventHandlers)(o20.onBlur, () => u15(false)) }) });
});
var x16 = "RovingFocusGroupItem";
var O8 = r18.forwardRef((o20, e22) => {
  const { __scopeRovingFocusGroup: s22, focusable: t28 = true, active: F16 = false, tabStopId: b16, ...S19 } = o20, P16 = (0, import_core35.useId)(), m22 = b16 || P16, i23 = ro2(x16, s22), E16 = i23.currentTabStopId === m22, v14 = h13(s22), { onFocusableItemAdd: g16, onFocusableItemRemove: I10 } = i23;
  return r18.useEffect(() => {
    if (t28)
      return g16(), () => I10();
  }, [t28, g16, I10]), (0, import_jsx_runtime34.jsx)(w16.ItemSlot, { scope: s22, id: m22, focusable: t28, active: F16, children: (0, import_jsx_runtime34.jsx)(import_core34.Stack, { tabIndex: E16 ? 0 : -1, "data-orientation": i23.orientation, ...S19, ref: e22, onMouseDown: (0, import_core34.composeEventHandlers)(o20.onMouseDown, (c26) => {
    t28 ? i23.onItemFocus(m22) : c26.preventDefault();
  }), onFocus: (0, import_core34.composeEventHandlers)(o20.onFocus, () => i23.onItemFocus(m22)), ...import_core34.isWeb && { onKeyDown: (0, import_core34.composeEventHandlers)(o20.onKeyDown, (c26) => {
    if (c26.key === "Tab" && c26.shiftKey) {
      i23.onItemShiftTab();
      return;
    }
    if (c26.target !== c26.currentTarget)
      return;
    const p23 = io(c26, i23.orientation, i23.dir);
    if (p23 !== void 0) {
      c26.preventDefault();
      let u15 = v14().filter((a18) => a18.focusable).map((a18) => a18.ref.current);
      if (p23 === "last")
        u15.reverse();
      else if (p23 === "prev" || p23 === "next") {
        p23 === "prev" && u15.reverse();
        const a18 = u15.indexOf(c26.currentTarget);
        u15 = i23.loop ? uo(u15, a18 + 1) : u15.slice(a18 + 1);
      }
      setTimeout(() => M12(u15));
    }
  }) } }) });
});
O8.displayName = x16;
var R13 = "RovingFocusGroup";
var [w16, h13, oo2] = v11(R13);
var [eo2, to2] = V(R13, [oo2]);
var [no, ro2] = eo2(R13);
var k14 = (0, import_core34.withStaticProperties)(r18.forwardRef((o20, e22) => (0, import_jsx_runtime34.jsx)(w16.Provider, { scope: o20.__scopeRovingFocusGroup, children: (0, import_jsx_runtime34.jsx)(w16.Slot, { scope: o20.__scopeRovingFocusGroup, children: (0, import_jsx_runtime34.jsx)($5, { ...o20, ref: e22 }) }) })), { Item: O8 });
k14.displayName = R13;
var so2 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function co(o20, e22) {
  return e22 !== "rtl" ? o20 : o20 === "ArrowLeft" ? "ArrowRight" : o20 === "ArrowRight" ? "ArrowLeft" : o20;
}
__name(co, "co");
function io(o20, e22, s22) {
  const t28 = co(o20.key, s22);
  if (!(e22 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(t28)) && !(e22 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(t28)))
    return so2[t28];
}
__name(io, "io");
function M12(o20) {
  const e22 = document.activeElement;
  for (const s22 of o20)
    if (s22 === e22 || (s22.focus(), document.activeElement !== e22))
      return;
}
__name(M12, "M");
function uo(o20, e22) {
  return o20.map((s22, t28) => o20[(e22 + t28) % o20.length]);
}
__name(uo, "uo");

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_web12 = require("@tamagui/core-node");
var import_react29 = __toESM(require("react"));

// node_modules/@tamagui/toggle-group/dist/esm/Toggle.js
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_web11 = require("@tamagui/core-node");
var P14 = __toESM(require("react"));
var s15 = "Toggle";
var r19 = (0, import_web11.styled)(k3, { name: s15, tag: "button", variants: { unstyled: { false: { pressTheme: true, backgroundColor: "$background", alignItems: "center", justifyContent: "center", display: "flex", borderColor: "$borderColor", borderWidth: "1px", margin: "-1px", hoverStyle: { backgroundColor: "$backgroundHover" }, pressStyle: { backgroundColor: "$backgroundPress" }, focusStyle: { borderColor: "$borderColorPress", backgroundColor: "$backgroundPress" } } }, active: { true: { zIndex: 1, hoverStyle: { backgroundColor: "$background" }, focusStyle: { borderColor: "$borderColorPress", backgroundColor: "$backgroundPress" } } }, orientation: { horizontal: { flexDirection: "row", spaceDirection: "horizontal" }, vertical: { flexDirection: "column", spaceDirection: "vertical" } } }, defaultVariants: { unstyled: false } });
var t18 = r19.extractable(P14.forwardRef((e22, a18) => {
  const { pressed: l21, defaultPressed: d19 = false, onPressedChange: i23, ...g16 } = e22, [o20 = false, c26] = A4({ prop: l21, onChange: i23, defaultProp: d19 });
  return (0, import_jsx_runtime35.jsx)(import_web11.Theme, { forceClassName: true, name: o20 ? "active" : null, children: (0, import_jsx_runtime35.jsx)(r19, { active: e22.unstyled ? void 0 : o20, "aria-pressed": o20, "data-state": o20 ? "on" : "off", "data-disabled": e22.disabled ? "" : void 0, ...g16, ref: a18, onPress: (0, import_web11.composeEventHandlers)(e22.onPress ?? void 0, (y14) => {
    e22.disabled || c26(!o20);
  }) }) });
}));
t18.displayName = s15;

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var m16 = "ToggleGroup";
var [S14, Q7] = V(m16, [to2]);
var G13 = "ToggleGroupItem";
var [ve2, X6] = V(G13);
var [Y8, ye3] = S14(m16);
var be2 = X6();
var R14 = r19.extractable(import_react29.default.forwardRef((e22, p23) => {
  const n19 = w17(G13, e22.__scopeToggleGroup), t28 = te5(G13, e22.__scopeToggleGroup), r30 = e22.__scopeToggleGroup, u15 = D11(e22.__scopeToggleGroup), i23 = n19.value.includes(e22.value), o20 = t28.disabled || e22.disabled || false, g16 = import_react29.default.useRef(null), T16 = (0, import_group.useGroupItem)({ disabled: o20 }), a18 = e22.size ?? t28.size, c26 = { width: void 0, height: void 0, padding: (0, import_web12.getVariableValue)(a18) * 0.6 };
  e22.orientation === "horizontal" ? c26.height = (0, import_web12.getVariableValue)(a18) * 2.4 : c26.width = (0, import_web12.getVariableValue)(a18) * 2.4;
  const d19 = (typeof a18 == "number" ? a18 * 0.7 : (0, import_font_size2.getFontSize)(a18)) * 1.2, P16 = (0, import_web12.useTheme)(), f24 = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: d19, color: P16.color }), y14 = import_react29.default.Children.toArray(e22.children).map((b16) => e22.disablePassStyles || !import_react29.default.isValidElement(b16) ? b16 : f24(b16)), x17 = { ...e22, pressed: i23, disabled: o20, ...c26, children: y14 };
  return (0, import_jsx_runtime36.jsx)(Y8, { scope: r30, children: t28.rovingFocus ? (0, import_jsx_runtime36.jsx)(k14.Item, { asChild: true, ...u15, focusable: !o20, active: i23, children: (0, import_jsx_runtime36.jsx)(r19, { asChild: true, focusable: !o20, disabled: o20, ref: g16, ...T16, children: (0, import_jsx_runtime36.jsx)(M13, { ...x17, ref: p23 }) }) }) : (0, import_jsx_runtime36.jsx)(r19, { asChild: true, focusable: !o20, disabled: o20, ref: g16, children: (0, import_jsx_runtime36.jsx)(M13, { ...x17, ref: p23 }) }) });
}));
R14.displayName = G13;
var M13 = r19.extractable(import_react29.default.forwardRef((e22, p23) => {
  const { __scopeToggleGroup: n19, value: t28, ...r30 } = e22, u15 = w17(G13, n19), i23 = { "aria-pressed": void 0 }, o20 = u15.type === "single" ? i23 : void 0;
  return (0, import_jsx_runtime36.jsx)(t18, { ...o20, ...r30, ref: p23, onPressedChange: (g16) => {
    g16 ? u15.onItemActivate(t28) : u15.onItemDeactivate(t28);
  } });
}));
var D11 = to2();
var h14 = (0, import_web12.withStaticProperties)(import_react29.default.forwardRef((e22, p23) => {
  const { type: n19, ...t28 } = e22;
  if (import_web12.isWeb || import_react29.default.useEffect(() => {
    if (e22.id)
      return (0, import_focusable4.registerFocusable)(e22.id, { focus: () => {
      } });
  }, [e22.id]), n19 === "single")
    return (0, import_jsx_runtime36.jsx)(Z7, { ...t28, ref: p23 });
  if (n19 === "multiple")
    return (0, import_jsx_runtime36.jsx)(ee8, { ...t28, ref: p23 });
  throw new Error(`Missing prop \`type\` expected on \`${m16}\``);
}), { Item: R14 });
h14.displayName = m16;
var [k15, w17] = S14(m16);
var Z7 = import_react29.default.forwardRef((e22, p23) => {
  const { value: n19, defaultValue: t28, onValueChange: r30 = /* @__PURE__ */ __name(() => {
  }, "r"), disableDeactivation: u15 = false, ...i23 } = e22, [o20, g16] = A4({ prop: n19, defaultProp: t28, onChange: r30 });
  return (0, import_jsx_runtime36.jsx)(k15, { scope: e22.__scopeToggleGroup, type: "single", value: o20 ? [o20] : [], defaultValue: o20, onItemActivate: g16, onItemDeactivate: import_react29.default.useCallback(() => u15 ? null : g16(""), [g16, u15]), children: (0, import_jsx_runtime36.jsx)(A15, { ...i23, ref: p23 }) });
});
var ee8 = import_react29.default.forwardRef((e22, p23) => {
  const { value: n19, defaultValue: t28, onValueChange: r30 = /* @__PURE__ */ __name(() => {
  }, "r"), ...u15 } = e22, [i23 = [], o20] = A4({ prop: n19, defaultProp: t28, onChange: r30 }), g16 = import_react29.default.useCallback((a18) => o20((c26 = []) => [...c26, a18]), [o20]), T16 = import_react29.default.useCallback((a18) => o20((c26 = []) => c26.filter((d19) => d19 !== a18)), [o20]);
  return (0, import_jsx_runtime36.jsx)(k15, { scope: e22.__scopeToggleGroup, type: "multiple", value: i23, defaultValue: i23, onItemActivate: g16, onItemDeactivate: T16, children: (0, import_jsx_runtime36.jsx)(A15, { ...u15, ref: p23 }) });
});
h14.displayName = m16;
var [oe6, te5] = S14(m16);
var C11 = (0, import_web12.styled)(import_group.Group, { name: m16, variants: { unstyled: { false: { backgroundColor: "$background" } }, orientation: { vertical: { flexDirection: "column", spaceDirection: "vertical" }, horizontal: { flexDirection: "row", spaceDirection: "horizontal" } } }, defaultVariants: { unstyled: false } });
var A15 = C11.extractable(import_react29.default.forwardRef((e22, p23) => {
  const { __scopeToggleGroup: n19, disabled: t28 = false, orientation: r30 = "horizontal", dir: u15, rovingFocus: i23 = true, loop: o20 = true, unstyled: g16 = false, size: T16 = "$true", sizeAdjust: a18 = 0, ...c26 } = e22, d19 = D11(n19), P16 = d12(u15), f24 = { role: "togglegroup", dir: P16, ...c26 }, E16 = (0, import_web12.getVariableValue)((0, import_get_size7.stepTokenUpOrDown)("size", e22.size, a18)), y14 = Math.round(E16 * 0.45);
  return (0, import_jsx_runtime36.jsx)(oe6, { scope: n19, rovingFocus: i23, disabled: t28, size: y14, children: i23 ? (0, import_jsx_runtime36.jsx)(k14, { asChild: true, ...d19, orientation: r30, dir: P16, loop: o20, children: (0, import_jsx_runtime36.jsx)(C11, { "aria-orientation": r30, orientation: r30, axis: r30, ref: p23, "data-disabled": t28 ? "" : void 0, unstyled: g16, ...f24 }) }) : (0, import_jsx_runtime36.jsx)(C11, { "aria-orientation": r30, ref: p23, orientation: r30, "data-disabled": t28 ? "" : void 0, unstyled: g16, ...f24 }) });
}));

// node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_jsx_runtime37 = require("react/jsx-runtime");
var import_get_button_sized4 = __toESM(require_cjs6());
var import_group2 = __toESM(require_cjs16());
var import_web13 = require("@tamagui/core-node");
var p16 = __toESM(require("react"));
var L11 = "TabsList";
var _11 = (0, import_web13.styled)(import_group2.Group, { name: L11, focusable: true });
var z12 = _11.extractable(p16.forwardRef((o20, u15) => {
  const { __scopeTabs: g16, loop: r30 = true, children: n19, ...e22 } = o20, c26 = M14(L11, g16), t28 = $7(g16);
  return (0, import_jsx_runtime37.jsx)(k14, { asChild: true, orientation: c26.orientation, dir: c26.dir, loop: r30, ...t28, children: (0, import_jsx_runtime37.jsx)(_11, { role: "tablist", "aria-orientation": c26.orientation, ref: u15, axis: c26.orientation, ...e22, children: n19 }) });
}));
z12.displayName = L11;
var R15 = "TabsTrigger";
var H12 = (0, import_web13.styled)(k3, { name: R15, justifyContent: "center", alignItems: "center", flexWrap: "nowrap", flexDirection: "row", cursor: "pointer", focusable: true, variants: { size: { "...size": import_get_button_sized4.getButtonSized }, disabled: { true: { pointerEvents: "none" } }, unstyled: { false: { backgroundColor: "$background", pressStyle: { backgroundColor: "$backgroundPress" }, hoverStyle: { backgroundColor: "$backgroundHover" }, focusStyle: { backgroundColor: "$backgroundFocus" } } } }, defaultVariants: { unstyled: false } });
var E15 = H12.extractable(p16.forwardRef((o20, u15) => {
  const { __scopeTabs: g16, value: r30, disabled: n19 = false, onInteraction: e22, ...c26 } = o20, t28 = M14(R15, g16), d19 = $7(g16), f24 = V14(t28.baseId, r30), v14 = B8(t28.baseId, r30), a18 = r30 === t28.value, [l21, P16] = p16.useState(null), i23 = p16.useRef(null), y14 = (0, import_group2.useGroupItem)({ disabled: n19 });
  return p16.useEffect(() => (t28.registerTrigger(), () => t28.unregisterTrigger()), []), p16.useEffect(() => {
    if (!i23.current || !import_web13.isWeb)
      return;
    function s22() {
      i23.current && P16({ width: i23.current.offsetWidth, height: i23.current.offsetHeight, x: i23.current.offsetLeft, y: i23.current.offsetTop });
    }
    __name(s22, "s");
    s22();
    const T16 = new ResizeObserver(s22);
    return T16.observe(i23.current), () => {
      i23.current && T16.unobserve(i23.current);
    };
  }, [t28.triggersCount]), p16.useEffect(() => {
    a18 && l21 && (e22 == null || e22("select", l21));
  }, [a18, r30, l21]), (0, import_jsx_runtime37.jsx)(import_web13.Theme, { forceClassName: true, name: a18 ? "active" : null, children: (0, import_jsx_runtime37.jsx)(k14.Item, { asChild: true, ...d19, focusable: !n19, active: a18, children: (0, import_jsx_runtime37.jsx)(H12, { onLayout: (s22) => {
    import_web13.isWeb || P16(s22.nativeEvent.layout);
  }, onHoverIn: (0, import_web13.composeEventHandlers)(o20.onHoverIn, () => {
    l21 && (e22 == null || e22("hover", l21));
  }), onHoverOut: (0, import_web13.composeEventHandlers)(o20.onHoverOut, () => {
    e22 == null || e22("hover", null);
  }), role: "tab", "aria-selected": a18, "aria-controls": v14, "data-state": a18 ? "active" : "inactive", "data-disabled": n19 ? "" : void 0, disabled: n19, id: f24, size: t28.size, ...c26, ref: (0, import_web13.composeRefs)(u15, i23), onPress: (0, import_web13.composeEventHandlers)(o20.onPress ?? void 0, (s22) => {
    const T16 = !import_web13.isWeb || s22.button === 0 && s22.ctrlKey === false;
    !n19 && !a18 && T16 ? t28.onChange(r30) : s22.preventDefault();
  }), ...import_web13.isWeb && { type: "button", onKeyDown: (0, import_web13.composeEventHandlers)(o20.onKeyDown, (s22) => {
    [" ", "Enter"].includes(s22.key) && (t28.onChange(r30), s22.preventDefault());
  }), onFocus: (0, import_web13.composeEventHandlers)(o20.onFocus, (s22) => {
    l21 && (e22 == null || e22("focus", l21));
    const T16 = t28.activationMode !== "manual";
    !a18 && !n19 && T16 && t28.onChange(r30);
  }), onBlur: (0, import_web13.composeEventHandlers)(o20.onFocus, () => {
    e22 == null || e22("focus", null);
  }) }, ...y14 }) }) });
}));
E15.displayName = R15;
var G14 = "TabsContent";
var N10 = (0, import_web13.styled)(k3, { name: G14 });
var D12 = N10.extractable(p16.forwardRef((o20, u15) => {
  const { __scopeTabs: g16, value: r30, forceMount: n19, children: e22, ...c26 } = o20, t28 = M14(G14, g16), d19 = r30 === t28.value, f24 = n19 || d19, v14 = V14(t28.baseId, r30), a18 = B8(t28.baseId, r30);
  return f24 ? (0, import_jsx_runtime37.jsx)(N10, { "data-state": d19 ? "active" : "inactive", "data-orientation": t28.orientation, role: "tabpanel", "aria-labelledby": v14, hidden: !f24, id: a18, tabIndex: 0, ...c26, ref: u15, children: e22 }, r30) : null;
}));
D12.displayName = G14;
var S15 = "Tabs";
var [ee9, de4] = V(S15, [to2]);
var $7 = to2();
var [te6, M14] = ee9(S15);
var A16 = (0, import_web13.styled)(k2, { name: S15 });
var oe7 = (0, import_web13.withStaticProperties)(A16.extractable(p16.forwardRef((o20, u15) => {
  const { __scopeTabs: g16, value: r30, onValueChange: n19, defaultValue: e22, orientation: c26 = "horizontal", dir: t28, activationMode: d19 = "automatic", size: f24 = "$true", ...v14 } = o20, a18 = d12(t28), [l21, P16] = A4({ prop: r30, onChange: n19, defaultProp: e22 ?? "" }), [i23, y14] = p16.useState(0), s22 = (0, import_web13.useEvent)(() => y14((h16) => h16 + 1)), T16 = (0, import_web13.useEvent)(() => y14((h16) => h16 - 1));
  return (0, import_jsx_runtime37.jsx)(te6, { scope: g16, baseId: (0, import_web13.useId)(), value: l21, onChange: P16, orientation: c26, dir: a18, activationMode: d19, size: f24, registerTrigger: s22, triggersCount: i23, unregisterTrigger: T16, children: (0, import_jsx_runtime37.jsx)(A16, { direction: a18, "data-orientation": c26, ...v14, ref: u15 }) });
})), { List: z12, Trigger: E15, Tab: E15, Content: D12 });
oe7.displayName = S15;
function V14(o20, u15) {
  return `${o20}-trigger-${u15}`;
}
__name(V14, "V");
function B8(o20, u15) {
  return `${o20}-content-${u15}`;
}
__name(B8, "B");

// node_modules/@tamagui/tooltip/dist/esm/Tooltip.js
var import_jsx_runtime38 = require("react/jsx-runtime");
var import_core36 = require("@tamagui/core-node");
var import_get_size8 = __toESM(require_cjs5());
var e14 = __toESM(require("react"));
var to3 = X4.extractable(e14.forwardRef(({ __scopePopover: t28, ...o20 }, d19) => {
  const a18 = g10(t28), c26 = E5("PopperContent", a18.__scopePopper), r30 = o20.size || c26.size || (0, import_get_size8.stepTokenUpOrDown)("size", "$true", -2);
  return (0, import_jsx_runtime38.jsx)(Oo, { componentName: "Tooltip", disableRemoveScroll: true, trapFocus: false, padding: r30, pointerEvents: "none", ref: d19, ...o20 });
}));
var ro3 = e14.forwardRef((t28, o20) => (0, import_jsx_runtime38.jsx)(L6, { componentName: "Tooltip", ref: o20, ...t28 }));
var Fo = /* @__PURE__ */ __name(({ children: t28, delay: o20 }) => (0, import_jsx_runtime38.jsx)(FloatingDelayGroup, { delay: e14.useMemo(() => o20, [JSON.stringify(o20)]), children: t28 }), "Fo");
var no2 = e14.forwardRef(function(o20, d19) {
  const { __scopePopover: a18, children: c26, delay: r30, restMs: C14 = typeof r30 > "u" ? 500 : typeof r30 == "number" ? r30 : 0, onOpenChange: l21, focus: h16, ...b16 } = o20, m22 = g10(a18), F16 = e14.useRef(null), [T16, P16] = e14.useState(false), { delay: A18, setCurrentId: S19 } = useDelayGroupContext(), f24 = r30 ?? A18, [i23, g16] = e14.useState(false), u15 = o20.groupId, R17 = (0, import_core36.useEvent)((s22) => {
    g16(s22), s22 && S19(u15), l21 == null || l21(s22);
  }), x17 = /* @__PURE__ */ __name((s22) => {
    const n19 = useFloating2({ ...s22, open: i23, onOpenChange: R17 }), { getReferenceProps: z13, getFloatingProps: D13 } = useInteractions([useHover(n19.context, { delay: f24, restMs: C14 }), useFocus(n19.context, h16), useRole(n19.context, { role: "tooltip" }), useDismiss(n19.context), useDelayGroup(n19.context, { id: u15 })]);
    return { ...n19, getReferenceProps: z13, getFloatingProps: D13 };
  }, "x"), w21 = e14.useCallback(x17, [u15, f24, i23]), O10 = e14.useCallback(() => P16(true), []), _13 = e14.useCallback(() => P16(false), []), k16 = (0, import_core36.useId)(), I10 = `$${(0, import_get_size8.stepTokenUpOrDown)("size", "$true", -2).key}`;
  return (0, import_jsx_runtime38.jsx)(s9.Provider, { value: w21, children: (0, import_jsx_runtime38.jsx)(be, { size: I10, ...m22, ...b16, children: (0, import_jsx_runtime38.jsx)(Pe3, { scope: a18, popperScope: m22.__scopePopper, contentId: k16, triggerRef: F16, sheetBreakpoint: false, scopeKey: "", open: i23, onOpenChange: g16, onOpenToggle: po, hasCustomAnchor: T16, onCustomAnchorAdd: O10, onCustomAnchorRemove: _13, children: c26 }) }) });
});
var To2 = (0, import_core36.withStaticProperties)(no2, { Anchor: M7, Arrow: ro3, Content: to3, Trigger: z6 });
var po = /* @__PURE__ */ __name(() => {
}, "po");

// node_modules/@tamagui/tooltip/dist/esm/TooltipSimple.js
var import_jsx_runtime39 = require("react/jsx-runtime");
var C13 = /* @__PURE__ */ __name(({ label: i23, children: l21, contentProps: a18, ...c26 }) => {
  let e22;
  try {
    e22 = useDelayGroupContext();
  } catch {
  }
  const p23 = (0, import_jsx_runtime39.jsxs)(To2, { ...c26, children: [(0, import_jsx_runtime39.jsx)(To2.Trigger, { asChild: true, children: l21 }), (0, import_jsx_runtime39.jsxs)(To2.Content, { zIndex: 1e6, enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 }, exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 }, x: 0, scale: 1, y: 0, elevation: "$1", opacity: 1, animation: ["quick", { opacity: { overshootClamping: true } }], ...a18, children: [(0, import_jsx_runtime39.jsx)(To2.Arrow, {}), (0, import_jsx_runtime39.jsx)(p7, { size: "$2", lineHeight: "$0", children: i23 })] })] });
  return e22 ? p23 : (0, import_jsx_runtime39.jsx)(Fo, { delay: T14, children: p23 });
}, "C");
var T14 = { open: 3e3, close: 100 };

// node_modules/@tamagui/use-debounce/dist/esm/index.mjs
var import_react32 = require("react");
function f18(n19, c26, o20) {
  let t28, e22 = false;
  function u15() {
    e22 = false;
    const r30 = this, s22 = arguments;
    o20 && !t28 && n19.apply(r30, s22), clearTimeout(t28), t28 = setTimeout(function() {
      t28 = null, o20 || e22 || n19.apply(r30, s22), e22 = false;
    }, c26);
  }
  __name(u15, "u");
  return u15.cancel = () => {
    e22 = true;
  }, u15;
}
__name(f18, "f");
var b13 = { leading: false };
function y12(n19, c26, o20 = b13, t28 = []) {
  const e22 = (0, import_react32.useRef)(null);
  return (0, import_react32.useEffect)(() => () => {
    var u15;
    (u15 = e22.current) == null || u15.cancel();
  }, []), (0, import_react32.useMemo)(() => (e22.current = f18(n19, c26, o20.leading), e22.current), [o20.leading, ...t28]);
}
__name(y12, "y");
function A17(n19, c26 = 0) {
  const [o20, t28] = (0, import_react32.useState)(n19);
  return (0, import_react32.useEffect)(() => {
    const e22 = setTimeout(() => {
      t28((u15) => u15 === n19 ? u15 : n19);
    }, c26);
    return () => {
      clearTimeout(e22);
    };
  }, [n19]), o20;
}
__name(A17, "A");

// node_modules/@tamagui/use-force-update/dist/esm/index.mjs
var import_react33 = require("react");
var r21 = process.env.TAMAGUI_TARGET === "web" && typeof window > "u";
var n14 = /* @__PURE__ */ __name(() => {
}, "n");
function d16() {
  return r21 ? n14 : (0, import_react33.useReducer)((e22) => e22 + 1, 0)[1];
}
__name(d16, "d");

// node_modules/@tamagui/constants/dist/esm/index.mjs
var import_react34 = require("react");
var e15 = process.env.TAMAGUI_TARGET === "web";
var o15 = typeof window < "u";
var i19 = e15 && !o15;
var t20 = e15 && o15;
var r22 = process.env.ENABLE_RSC;
var c20 = /* @__PURE__ */ __name(() => {
}, "c");
var p18 = r22 ? c20 : i19 ? import_react34.useEffect : import_react34.useLayoutEffect;
var f19 = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var T15 = t20 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
process.env.NODE_ENV === "development" && (process.env.TAMAGUI_TARGET ? t20 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1" && console.warn('Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this') : console.warn('Must set TAMAGUI_TARGET to "web" or "native"'));

// node_modules/@tamagui/use-window-dimensions/dist/esm/index.mjs
var import_react35 = require("react");
var import_react_native8 = require("react-native-web-lite");
var r23 = { fontScale: 1, height: 800, width: 600, scale: 1 };
function f20() {
  const e22 = (0, import_react_native8.useWindowDimensions)();
  if (process.env.TAMAGUI_TARGET != "web")
    return e22;
  const [t28, i23] = (0, import_react35.useState)(r23);
  return p18(() => {
    i23(e22);
  }, [e22.height, e22.width, e22.fontScale, e22.scale]), t28;
}
__name(f20, "f");

// node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.js
var import_web14 = require("@tamagui/core-node");
var e16 = (0, import_web14.styled)(import_web14.Stack, { position: "absolute", width: 1, height: 1, margin: -1, zIndex: -1e4, overflow: "hidden", opacity: 1e-8, pointerEvents: "none", variants: { preserveDimensions: { true: { position: "relative", width: "auto", height: "auto" } }, visible: { true: { position: "relative", width: "auto", height: "auto", margin: 0, zIndex: 1, overflow: "visible", opacity: 1, pointerEvents: "auto" } } } });
e16.isVisuallyHidden = true;

// node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var import_jsx_runtime40 = require("react/jsx-runtime");
var import_react_use_previous3 = __toESM(require_dist5());
var import_core37 = require("@tamagui/core-node");
var import_focusable5 = __toESM(require_cjs17());
var import_font_size3 = __toESM(require_cjs9());
var import_get_size9 = __toESM(require_cjs5());
var import_helpers_tamagui3 = __toESM(require_cjs12());
var c21 = __toESM(require("react"));
function l16(e22) {
  return e22 === "indeterminate";
}
__name(l16, "l");
function B9(e22) {
  return l16(e22) ? "indeterminate" : e22 ? "checked" : "unchecked";
}
__name(B9, "B");
var R16 = /* @__PURE__ */ __name((e22) => {
  const { checked: o20, bubbles: s22 = true, control: f24, isHidden: a18, ...m22 } = e22, u15 = c21.useRef(null), t28 = (0, import_react_use_previous3.usePrevious)(o20);
  return c21.useEffect(() => {
    const i23 = u15.current, b16 = window.HTMLInputElement.prototype, r30 = Object.getOwnPropertyDescriptor(b16, "checked").set;
    if (t28 !== o20 && r30) {
      const d19 = new Event("click", { bubbles: s22 });
      i23.indeterminate = l16(o20), r30.call(i23, l16(o20) ? false : o20), i23.dispatchEvent(d19);
    }
  }, [t28, o20, s22]), (0, import_jsx_runtime40.jsx)("input", { type: "checkbox", defaultChecked: l16(o20) ? false : o20, ...m22, tabIndex: -1, ref: u15, "aria-hidden": a18, style: { ...a18 ? { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } : { appearance: "auto", accentColor: "var(--color6)" }, ...e22.style } });
}, "R");
var v13 = "CheckboxIndicator";
var w19 = (0, import_core37.styled)(k3, { name: v13 });
var L13 = w19.extractable(c21.forwardRef((e22, o20) => {
  const { __scopeCheckbox: s22, children: f24, forceMount: a18, disablePassStyles: m22, ...u15 } = e22, t28 = ae2(v13, s22), i23 = (typeof t28.size == "number" ? t28.size * 0.65 : (0, import_font_size3.getFontSize)(t28.size)) * t28.scaleIcon, b16 = (0, import_core37.useTheme)(), x17 = (0, import_helpers_tamagui3.useGetThemedIcon)({ size: i23, color: b16.color }), d19 = c21.Children.toArray(f24).map((k16) => m22 || !c21.isValidElement(k16) ? k16 : x17(k16));
  return a18 || l16(t28.state) || t28.state === true ? (0, import_jsx_runtime40.jsx)(w19, { "data-state": B9(t28.state), "data-disabled": t28.disabled ? "" : void 0, pointerEvents: "none", ...u15, ref: o20, children: d19 }) : null;
}));
L13.displayName = v13;
var S16 = "Checkbox";
var _12 = (0, import_core37.styled)(k3, { name: S16, tag: "button", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", alignItems: "center", justifyContent: "center", pressTheme: true, focusable: true, borderWidth: 1, borderColor: "$borderColor", hoverStyle: { borderColor: "$borderColorHover" }, focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": (e22, { tokens: o20 }) => ({ borderRadius: (0, import_core37.getVariableValue)((0, import_get_size9.getSize)(e22)) / 8 }) } }, defaultVariants: { unstyled: false } });
var [ne4, ce3] = V(S16);
var [se4, ae2] = ne4(S16);
var ie3 = (0, import_core37.withStaticProperties)(_12.extractable(c21.forwardRef((e22, o20) => {
  const { __scopeCheckbox: s22, labelledBy: f24, name: a18, checked: m22, defaultChecked: u15, required: t28, scaleIcon: i23 = 1, scaleSize: b16 = 0.45, sizeAdjust: x17 = 0, disabled: r30, value: d19 = "on", onCheckedChange: k16, native: D13, ...O10 } = e22, [C14, G15] = c21.useState(null), V15 = (0, import_core37.useComposedRefs)(o20, (n19) => G15(n19)), P16 = c21.useRef(false), q12 = (0, import_core37.useMediaPropsActive)(e22), T16 = import_core37.isWeb ? C14 ? Boolean(C14.closest("form")) : true : false, [p23 = false, I10] = A4({ prop: m22, defaultProp: u15, onChange: k16 }), z13 = (0, import_core37.getVariableValue)((0, import_get_size9.stepTokenUpOrDown)("size", q12.size, x17)), g16 = b16 ? Math.round(z13 * b16) : z13, N11 = U5(C14), $8 = f24 || N11;
  return process.env.TAMAGUI_TARGET === "native" && c21.useEffect(() => {
    if (e22.id)
      return (0, import_focusable5.registerFocusable)(e22.id, { focusAndSelect: () => {
        I10((n19) => !n19);
      }, focus: () => {
      } });
  }, [e22.id, I10]), (0, import_jsx_runtime40.jsx)(se4, { scope: s22, state: p23, disabled: r30, size: g16, scaleIcon: i23, children: import_core37.isWeb && D13 ? (0, import_jsx_runtime40.jsx)(R16, { control: C14, bubbles: !P16.current, name: a18, value: d19, checked: p23, required: t28, disabled: r30, id: e22.id }) : (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(_12, { width: g16, height: g16, tag: "button", role: "checkbox", "aria-labelledby": $8, "aria-checked": l16(p23) ? "mixed" : p23, "aria-required": t28, "data-state": B9(p23), "data-disabled": r30 ? "" : void 0, disabled: r30, ...O10, ref: V15, ...import_core37.isWeb && { type: "button", value: d19, onKeyDown: (0, import_core37.composeEventHandlers)(e22.onKeyDown, (n19) => {
    n19.key === "Enter" && n19.preventDefault();
  }) }, onPress: (0, import_core37.composeEventHandlers)(e22.onPress, (n19) => {
    I10((E16) => l16(E16) ? true : !E16), T16 && (P16.current = n19.isPropagationStopped(), P16.current || n19.stopPropagation());
  }) }), import_core37.isWeb && T16 ? (0, import_jsx_runtime40.jsx)(R16, { isHidden: true, control: C14, bubbles: !P16.current, name: a18, value: d19, checked: p23, required: t28, disabled: r30 }) : null] }) });
})), { Indicator: L13 });
ie3.displayName = S16;

// node_modules/tamagui/dist/esm/createTamagui.js
var import_core38 = require("@tamagui/core-node");
var f21 = process.env.NODE_ENV !== "development" ? import_core38.createTamagui : (i23) => {
  const a18 = ["$true"], c26 = /* @__PURE__ */ __name((e22, s22) => e22.every((o20) => typeof s22[o20] < "u"), "c"), t28 = (0, import_core38.createTamagui)(i23);
  for (const e22 of ["size", "space"]) {
    const s22 = t28.tokensParsed[e22];
    if (!s22)
      throw new Error(`Expected tokens for "${e22}" in ${Object.keys(t28.tokensParsed).join(", ")}`);
    if (!c26(a18, s22))
      throw new Error(`
createTamagui() missing expected tokens.${e22}:

Received: ${Object.keys(s22).join(", ")}

Expected: ${a18.join(", ")}

Tamagui expects a "true" key that is the same value as your default size. This is so 
it can size things up or down from the defaults without assuming which keys you use.

Please define a "true" or "$true" key on your size and space tokens like so (example):

size: {
  sm: 2,
  md: 10,
  true: 10, // this means "md" is your default size
  lg: 20,
}

`);
  }
  const n19 = Object.keys(t28.tokensParsed.size);
  for (const e22 of ["radius", "zIndex"]) {
    const s22 = t28.tokensParsed[e22], o20 = Object.keys(s22);
    if (!o20.some((u15) => n19.includes(u15)))
      throw new Error(`
createTamagui() invalid tokens.${e22}:

Received: ${o20.join(", ")}

Expected a subset of: ${n19.join(", ")}

`);
  }
  return t28;
};

// node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_jsx_runtime41 = require("react/jsx-runtime");
var import_core39 = require("@tamagui/core-node");
var t22 = import_core39.isRSC ? import_core39.TamaguiProvider : ({ children: i23, ...a18 }) => (0, import_jsx_runtime41.jsx)(import_core39.TamaguiProvider, { ...a18, children: (0, import_jsx_runtime41.jsx)(F3, { shouldAddRootHost: true, children: i23 }) });

// node_modules/tamagui/dist/esm/views/Anchor.js
var import_jsx_runtime42 = require("react/jsx-runtime");
var import_core40 = require("@tamagui/core-node");
var import_react36 = require("react");
var import_react_native9 = require("react-native-web-lite");
var o17 = (0, import_core40.styled)(s5, { name: "Anchor", tag: "a", accessibilityRole: "link" });
var p19 = o17.extractable((0, import_react36.forwardRef)(({ href: t28, target: r30, ...e22 }, i23) => (0, import_jsx_runtime42.jsx)(o17, { ...e22, ...import_core40.isWeb ? { href: t28, target: r30 } : { onPress: (a18) => {
  var n19;
  (n19 = e22.onPress) == null || n19.call(e22, a18), t28 !== void 0 && import_react_native9.Linking.openURL(t28);
} }, ref: i23 })));

// node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core41 = require("@tamagui/core-node");
var t23 = (0, import_core41.styled)(import_core41.Text, { opacity: 0, lineHeight: 0, height: 0, display: "flex", fontSize: 200, children: "wwwwwwwwwwwwwwwwwww", hoverStyle: { backgroundColor: "red" }, pointerEvents: "none" });
t23.isVisuallyHidden = true;

// node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core42 = require("@tamagui/core-node");
var i21 = (0, import_core42.styled)(c5, { name: "Fieldset", tag: "fieldset", variants: { horizontal: { true: { flexDirection: "row", alignItems: "center" } } } });

// node_modules/tamagui/dist/esm/views/Grid.js
var import_jsx_runtime43 = require("react/jsx-runtime");
var import_core43 = require("@tamagui/core-node");
var import_react37 = __toESM(require("react"));
function d17({ children: e22, columns: u15, itemMinWidth: n19 = 200, gap: r30 }) {
  if (import_core43.isWeb)
    return (0, import_jsx_runtime43.jsx)("div", { style: { gap: r30, display: "grid", justifyContent: "stretch", gridTemplateColumns: `repeat( auto-fit, minmax(${n19}px, 1fr) )` }, children: e22 });
  const m22 = import_react37.default.Children.toArray(e22);
  return (0, import_jsx_runtime43.jsx)(i6, { alignItems: "center", justifyContent: "center", flexWrap: "wrap", children: m22.map((i23, a18) => i23 ? (0, import_jsx_runtime43.jsx)(i6, { flex: 1, minWidth: n19, marginRight: r30, marginBottom: r30, children: i23 }, a18) : null) });
}
__name(d17, "d");

// node_modules/tamagui/dist/esm/views/Input.js
var import_core45 = require("@tamagui/core-node");
var import_focusable6 = __toESM(require_cjs17());
var import_react_native10 = require("react-native-web-lite");

// node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core44 = require("@tamagui/core-node");
var import_get_button_sized5 = __toESM(require_cjs6());
var import_get_font_sized3 = __toESM(require_cjs7());
var import_get_size10 = __toESM(require_cjs5());
var b14 = /* @__PURE__ */ __name((t28 = "$true", n19) => {
  if (n19.props.multiline || n19.props.numberOfLines > 1)
    return m19(t28, n19);
  const i23 = (0, import_get_button_sized5.getButtonSized)(t28, n19), o20 = (0, import_get_size10.stepTokenUpOrDown)("space", t28, -1, [2]), e22 = (0, import_get_font_sized3.getFontSized)(t28, n19);
  return !import_core44.isWeb && e22 && delete e22.lineHeight, { ...e22, ...i23, paddingHorizontal: o20 };
}, "b");
var m19 = /* @__PURE__ */ __name((t28 = "$true", n19) => {
  const { props: i23 } = n19, o20 = (0, import_get_button_sized5.getButtonSized)(t28, n19), e22 = (0, import_get_font_sized3.getFontSized)(t28, n19), s22 = i23.numberOfLines ? (i23.numberOfLines || 1) * (0, import_core44.getVariableValue)(e22.lineHeight) : "auto", u15 = (0, import_get_size10.stepTokenUpOrDown)("space", t28, -2, [2]), a18 = (0, import_get_size10.stepTokenUpOrDown)("space", t28, -1, [2]);
  return { ...o20, ...e22, paddingVertical: u15, paddingHorizontal: a18, height: s22 };
}, "m");

// node_modules/tamagui/dist/esm/views/Input.js
(0, import_core45.setupReactNative)({ TextInput: import_react_native10.TextInput });
var s20 = { size: "$true", fontFamily: "$body", borderWidth: 1, outlineWidth: 0, color: "$color", focusable: true, borderColor: "$borderColor", backgroundColor: "$background", placeholderTextColor: "$placeholderColor", minWidth: 0, hoverStyle: { borderColor: "$borderColorHover" }, focusStyle: { outlineColor: "$borderColorFocus", outlineWidth: 2, outlineStyle: "solid", borderColor: "$borderColorFocus" } };
var n17 = (0, import_core45.styled)(import_react_native10.TextInput, { name: "Input", variants: { unstyled: { false: s20 }, size: { "...size": b14 } }, defaultVariants: { unstyled: false } }, { isInput: true });
var c24 = (0, import_focusable6.focusableInputHOC)(n17);

// node_modules/tamagui/dist/esm/views/Layouts.js
var import_core46 = require("@tamagui/core-node");
var n18 = (0, import_core46.styled)(import_core46.Stack, { name: "Section", tag: "section", flexDirection: "column", accessibilityRole: "summary" });
var i22 = (0, import_core46.styled)(import_core46.Stack, { name: "Article", tag: "article", flexDirection: "column" });
var c25 = (0, import_core46.styled)(import_core46.Stack, { name: "Main", tag: "main", flexDirection: "column" });
var a17 = (0, import_core46.styled)(import_core46.Stack, { name: "Header", tag: "header", accessibilityRole: "header", flexDirection: "column" });
var r28 = (0, import_core46.styled)(import_core46.Stack, { name: "Aside", tag: "aside", flexDirection: "column" });
var l18 = (0, import_core46.styled)(import_core46.Stack, { name: "Footer", tag: "footer", flexDirection: "column" });
var m20 = (0, import_core46.styled)(import_core46.Stack, { name: "Nav", tag: "nav", flexDirection: "column" });

// node_modules/tamagui/dist/esm/views/Spinner.js
var import_jsx_runtime44 = require("react/jsx-runtime");
var import_core47 = require("@tamagui/core-node");
var f23 = __toESM(require("react"));
var import_react_native11 = require("react-native-web-lite");
var b15 = c5.extractable((0, import_core47.themeable)(f23.forwardRef((t28, n19) => {
  const { size: a18, color: i23, ...s22 } = t28, c26 = (0, import_core47.useTheme)();
  let e22 = i23;
  return e22 && e22[0] === "$" && (e22 = (0, import_core47.variableToString)(c26[e22])), (0, import_jsx_runtime44.jsx)(c5, { ref: n19, ...s22, children: (0, import_jsx_runtime44.jsx)(import_react_native11.ActivityIndicator, { size: a18, color: e22 }) });
}), { componentName: "Spinner" }));

// node_modules/tamagui/dist/esm/views/TextArea.js
var import_core48 = require("@tamagui/core-node");
var import_focusable7 = __toESM(require_cjs17());
var s21 = (0, import_core48.styled)(n17, { name: "TextArea", multiline: true, variants: { unstyled: { false: { ...s20, height: "auto", numberOfLines: 4 } }, size: { "...size": m19 } }, defaultVariants: { unstyled: false } });
var l20 = (0, import_focusable7.focusableInputHOC)(s21);

// node_modules/tamagui/dist/esm/index.mjs
var import_core49 = require("@tamagui/core-node");
function o19(e22) {
  return process.env.NODE_ENV === "development" && console.warn("LinearGradient has been moved to tamagui/linear-gradient as of 1.1"), null;
}
__name(o19, "o");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ACTIONS,
  Adapt,
  AdaptContents,
  AdaptParentContext,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  Anchor,
  AnimatePresence,
  AnimationDriverProvider,
  Article,
  Aside,
  Avatar,
  AvatarFallback,
  AvatarFallbackFrame,
  AvatarFrame,
  AvatarImage,
  BubbleInput,
  Button,
  ButtonFrame,
  ButtonText,
  Card,
  CardBackground,
  CardFooter,
  CardFrame,
  CardHeader,
  Checkbox,
  CheckboxFrame,
  Circle,
  ControlledSheet,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogOverlayFrame,
  DialogPortal,
  DialogPortalFrame,
  DialogSheetContents,
  DialogTitle,
  DialogTrigger,
  DialogWarningProvider,
  DirectionalYStack,
  EnsureFlexed,
  Fieldset,
  FontLanguage,
  Footer,
  Form,
  FormFrame,
  FormProvider,
  FormTrigger,
  ForwardSelectContext,
  Grid,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Header,
  Heading,
  INITIAL_STATE,
  Input,
  InputFrame,
  Label,
  LabelFrame,
  LinearGradient,
  Main,
  Nav,
  Paragraph,
  Popover,
  PopoverAnchor,
  PopoverArrow,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Popper,
  PopperAnchor,
  PopperArrow,
  PopperContent,
  PopperContentFrame,
  PopperProvider,
  Portal,
  PortalHost,
  PortalItem,
  PortalProvider,
  PresenceContext,
  Progress,
  ProgressFrame,
  ProgressIndicator,
  ProgressIndicatorFrame,
  RadioGroup,
  Range,
  ScrollView,
  Section,
  Select,
  SelectGroupFrame,
  SelectIcon,
  SelectItem,
  SelectItemTextFrame,
  SelectProvider,
  SelectSeparator,
  SelectTrigger,
  Separator,
  Sheet,
  SheetController,
  SheetFrame,
  SheetFrameFrame,
  SheetHandle,
  SheetHandleFrame,
  SheetOverlay,
  SheetOverlayFrame,
  SizableStack,
  SizableText,
  Slider,
  SliderFrame,
  SliderThumb,
  SliderThumbFrame,
  SliderTrack,
  SliderTrackActive,
  SliderTrackActiveFrame,
  SliderTrackFrame,
  Spacer,
  Spinner,
  Square,
  Stack,
  Switch,
  SwitchFrame,
  SwitchThumb,
  SwitchThumbFrame,
  Tabs,
  TamaguiProvider,
  Text,
  TextAncestorContext,
  TextArea,
  TextAreaFrame,
  Theme,
  ThemeableStack,
  Thumb,
  ToggleGroup,
  Tooltip,
  TooltipGroup,
  TooltipSimple,
  Track,
  Unspaced,
  VisuallyHidden,
  XStack,
  YStack,
  ZStack,
  __PopoverProviderInternal,
  addTheme,
  buttonStaticConfig,
  composeRefs,
  createAlertDialogScope,
  createAvatarScope,
  createCheckboxScope,
  createComponent,
  createContext,
  createContextScope,
  createDialogScope,
  createFont,
  createPopoverScope,
  createPopperScope,
  createProgressScope,
  createRadioGroupScope,
  createSelectContext,
  createSelectScope,
  createSheetScope,
  createShorthands,
  createSwitchScope,
  createTamagui,
  createTheme,
  createToggleGroupScope,
  createTokens,
  createVariable,
  debounce,
  defaultStyles,
  fullscreenStyle,
  getAnimationDriver,
  getConfig,
  getMedia,
  getShapeSize,
  getState,
  getStylesAtomic,
  getThemes,
  getTokens,
  getVariable,
  getVariableName,
  getVariableValue,
  idFn,
  insertFont,
  isChrome,
  isClient,
  isIndeterminate,
  isPresent,
  isServer,
  isServerSide,
  isTamaguiComponent,
  isTamaguiElement,
  isTouchable,
  isVariable,
  isWeb,
  isWebTouchable,
  matchMedia,
  mediaObjectToString,
  mediaQueryConfig,
  mediaState,
  spacedChildren,
  styled,
  themeable,
  updateTheme,
  useAdaptParent,
  useButton,
  useComposedRefs,
  useControllableState,
  useDebounce,
  useDebounceValue,
  useDidFinishSSR,
  useEvent,
  useFloatingContext,
  useForceUpdate,
  useFormContext,
  useGet,
  useIsPresent,
  useIsTouchDevice,
  useIsomorphicLayoutEffect,
  useLabelContext,
  useMedia,
  usePopoverScope,
  usePopperContext,
  usePortal,
  usePresence,
  useSafeRef,
  useSelectContext,
  useStyle,
  useTheme,
  useThemeName,
  useWindowDimensions,
  variableToString,
  withStaticProperties,
  wrapChildrenInText
});
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.production.min.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js:
  (**
   * @license React
   * use-sync-external-store-shim/with-selector.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

tabbable/dist/index.js:
  (*!
  * tabbable 6.1.1
  * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
  *)
*/

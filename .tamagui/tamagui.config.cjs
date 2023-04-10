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
      }).filter(function(x19) {
        return Boolean(x19);
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
    var i24 = Object.getOwnPropertyDescriptor;
    var m24 = Object.getOwnPropertyNames;
    var p26 = Object.prototype.hasOwnProperty;
    var s23 = /* @__PURE__ */ __name((r32, e27) => {
      for (var o23 in e27)
        t28(r32, o23, { get: e27[o23], enumerable: true });
    }, "s");
    var x19 = /* @__PURE__ */ __name((r32, e27, o23, d20) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let h17 of m24(e27))
          !p26.call(r32, h17) && h17 !== o23 && t28(r32, h17, { get: () => e27[h17], enumerable: !(d20 = i24(e27, h17)) || d20.enumerable });
      return r32;
    }, "x");
    var O12 = /* @__PURE__ */ __name((r32) => x19(t28({}, "__esModule", { value: true }), r32), "O");
    var a19 = {};
    s23(a19, { hideOthers: () => f24.hideOthers });
    module2.exports = O12(a19);
    var f24 = require_es5();
  }
});

// node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_AriaHidden(), module2.exports);
  }
});

// node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e27;
    var r32;
    var t28 = (e27 = {}, r32 = require("react"), Object.keys(r32).forEach(function(t29) {
      "default" !== t29 && "__esModule" !== t29 && Object.defineProperty(e27, t29, { enumerable: true, get: function() {
        return r32[t29];
      } });
    }), e27);
    exports.useCallbackRef = function(e28) {
      const r33 = t28.useRef(e28);
      return t28.useEffect(() => {
        r33.current = e28;
      }), t28.useMemo(() => (...e29) => {
        var t29;
        return null === (t29 = r33.current) || void 0 === t29 ? void 0 : t29.call(r33, ...e29);
      }, []);
    };
  }
});

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e27;
    var t28;
    var n22 = require_dist().useCallbackRef;
    var r32 = (e27 = {}, t28 = require("react"), Object.keys(t28).forEach(function(n23) {
      "default" !== n23 && "__esModule" !== n23 && Object.defineProperty(e27, n23, { enumerable: true, get: function() {
        return t28[n23];
      } });
    }), e27);
    exports.useEscapeKeydown = function(e28) {
      const t29 = n22(e28);
      r32.useEffect(() => {
        const e29 = /* @__PURE__ */ __name((e30) => {
          "Escape" === e30.key && t29(e30);
        }, "e");
        return document.addEventListener("keydown", e29), () => document.removeEventListener("keydown", e29);
      }, [t29]);
    };
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var T16 = Object.create;
    var s23 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var a19 = Object.getOwnPropertyNames;
    var u16 = Object.getPrototypeOf;
    var r32 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((e27, t28) => {
      for (var o23 in t28)
        s23(e27, o23, { get: t28[o23], enumerable: true });
    }, "b");
    var c26 = /* @__PURE__ */ __name((e27, t28, o23, R17) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let f24 of a19(t28))
          !r32.call(e27, f24) && f24 !== o23 && s23(e27, f24, { get: () => t28[f24], enumerable: !(R17 = i24(t28, f24)) || R17.enumerable });
      return e27;
    }, "c");
    var l27 = /* @__PURE__ */ __name((e27, t28, o23) => (o23 = e27 != null ? T16(u16(e27)) : {}, c26(t28 || !e27 || !e27.__esModule ? s23(o23, "default", { value: e27, enumerable: true }) : o23, e27)), "l");
    var p26 = /* @__PURE__ */ __name((e27) => c26(s23({}, "__esModule", { value: true }), e27), "p");
    var j15 = {};
    b17(j15, { composeRefs: () => n22, useComposedRefs: () => P17 });
    module2.exports = p26(j15);
    var d20 = l27(require("react"));
    function m24(e27, t28) {
      typeof e27 == "function" ? e27(t28) : e27 && (e27.current = t28);
    }
    __name(m24, "m");
    function n22(...e27) {
      return (t28) => e27.forEach((o23) => m24(o23, t28));
    }
    __name(n22, "n");
    function P17(...e27) {
      return d20.useCallback(n22(...e27), e27);
    }
    __name(P17, "P");
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_compose_refs(), module2.exports);
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useGet.js
var require_useGet = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useGet.js"(exports, module2) {
    "use strict";
    var u16 = Object.defineProperty;
    var r32 = Object.getOwnPropertyDescriptor;
    var i24 = Object.getOwnPropertyNames;
    var a19 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((n22, e27) => {
      for (var s23 in e27)
        u16(n22, s23, { get: e27[s23], enumerable: true });
    }, "p");
    var l27 = /* @__PURE__ */ __name((n22, e27, s23, c26) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let o23 of i24(e27))
          !a19.call(n22, o23) && o23 !== s23 && u16(n22, o23, { get: () => e27[o23], enumerable: !(c26 = r32(e27, o23)) || c26.enumerable });
      return n22;
    }, "l");
    var y15 = /* @__PURE__ */ __name((n22) => l27(u16({}, "__esModule", { value: true }), n22), "y");
    var m24 = {};
    p26(m24, { useGet: () => d20 });
    module2.exports = y15(m24);
    var t28 = require("react");
    var A20 = process.env.TAMAGUI_TARGET === "web";
    var b17 = typeof window < "u";
    var E18 = !A20 || b17 ? t28.useLayoutEffect : t28.useEffect;
    function d20(n22, e27, s23) {
      const c26 = (0, t28.useRef)(e27 ?? n22);
      return E18(() => {
        c26.current = n22;
      }), (0, t28.useCallback)(s23 ? (...o23) => {
        var f24;
        return (f24 = c26.current) == null ? void 0 : f24.apply(null, o23);
      } : () => c26.current, []);
    }
    __name(d20, "d");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var s23 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((n22, e27) => {
      for (var r32 in e27)
        a19(n22, r32, { get: e27[r32], enumerable: true });
    }, "c");
    var y15 = /* @__PURE__ */ __name((n22, e27, r32, o23) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let t28 of l27(e27))
          !s23.call(n22, t28) && t28 !== r32 && a19(n22, t28, { get: () => e27[t28], enumerable: !(o23 = i24(e27, t28)) || o23.enumerable });
      return n22;
    }, "y");
    var d20 = /* @__PURE__ */ __name((n22) => y15(a19({}, "__esModule", { value: true }), n22), "d");
    var h17 = {};
    c26(h17, { useEvent: () => T16 });
    module2.exports = d20(h17);
    var u16 = require_useGet();
    function T16(n22) {
      return (0, u16.useGet)(n22, f24, true);
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
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((r32, o23, p26, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let m24 of c26(o23))
          !d20.call(r32, m24) && m24 !== p26 && a19(r32, m24, { get: () => o23[m24], enumerable: !(x19 = b17(o23, m24)) || x19.enumerable });
      return r32;
    }, "t");
    var f24 = /* @__PURE__ */ __name((r32, o23, p26) => (t28(r32, o23, "default"), p26 && t28(p26, o23, "default")), "f");
    var g16 = /* @__PURE__ */ __name((r32) => t28(a19({}, "__esModule", { value: true }), r32), "g");
    var e27 = {};
    module2.exports = g16(e27);
    f24(e27, require_useEvent(), module2.exports);
    f24(e27, require_useGet(), module2.exports);
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var w23 = Object.create;
    var m24 = Object.defineProperty;
    var x19 = Object.getOwnPropertyDescriptor;
    var D14 = Object.getOwnPropertyNames;
    var V15 = Object.getPrototypeOf;
    var W14 = Object.prototype.hasOwnProperty;
    var j15 = /* @__PURE__ */ __name((e27, t28) => {
      for (var n22 in t28)
        m24(e27, n22, { get: t28[n22], enumerable: true });
    }, "j");
    var H14 = /* @__PURE__ */ __name((e27, t28, n22, o23) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let r32 of D14(t28))
          !W14.call(e27, r32) && r32 !== n22 && m24(e27, r32, { get: () => t28[r32], enumerable: !(o23 = x19(t28, r32)) || o23.enumerable });
      return e27;
    }, "H");
    var q13 = /* @__PURE__ */ __name((e27, t28, n22) => (n22 = e27 != null ? w23(V15(e27)) : {}, H14(t28 || !e27 || !e27.__esModule ? m24(n22, "default", { value: e27, enumerable: true }) : n22, e27)), "q");
    var z14 = /* @__PURE__ */ __name((e27) => H14(m24({}, "__esModule", { value: true }), e27), "z");
    var $8 = {};
    j15($8, { FocusScope: () => S19 });
    module2.exports = z14($8);
    var O12 = require_cjs2();
    var M17 = require_cjs3();
    var a19 = q13(require("react"));
    var b17 = "focusScope.autoFocusOnMount";
    var y15 = "focusScope.autoFocusOnUnmount";
    var h17 = { bubbles: false, cancelable: true };
    var B12 = "FocusScope";
    var S19 = a19.forwardRef((e27, t28) => {
      const { loop: n22 = false, trapped: o23 = false, onMountAutoFocus: r32, onUnmountAutoFocus: A20, children: g16, forceUnmount: p26, ...U10 } = e27, [u16, R17] = a19.useState(null), E18 = (0, M17.useEvent)(r32), T16 = (0, M17.useEvent)(A20), F16 = a19.useRef(null), K11 = (0, O12.useComposedRefs)(t28, (s23) => R17(s23)), l27 = a19.useRef({ paused: false, pause() {
        this.paused = true;
      }, resume() {
        this.paused = false;
      } }).current;
      a19.useEffect(() => {
        if (!o23)
          return;
        function s23(c26) {
          if (l27.paused || !u16)
            return;
          const f24 = c26.target;
          u16.contains(f24) ? F16.current = f24 : i24(F16.current, { select: true });
        }
        __name(s23, "s");
        function d20(c26) {
          l27.paused || !u16 || u16.contains(c26.relatedTarget) || i24(F16.current, { select: true });
        }
        __name(d20, "d");
        return document.addEventListener("focusin", s23), document.addEventListener("focusout", d20), () => {
          document.removeEventListener("focusin", s23), document.removeEventListener("focusout", d20);
        };
      }, [o23, p26, u16, l27.paused]), a19.useEffect(() => {
        if (!u16 || p26)
          return;
        P17.add(l27);
        const s23 = document.activeElement;
        if (!u16.contains(s23)) {
          const c26 = new CustomEvent(b17, h17);
          u16.addEventListener(b17, E18), u16.dispatchEvent(c26), c26.defaultPrevented || (G16(Z10(N12(u16)), { select: true }), document.activeElement === s23 && i24(u16));
        }
        return () => {
          u16.removeEventListener(b17, E18);
          const c26 = new CustomEvent(y15, h17);
          u16.addEventListener(y15, T16), u16.dispatchEvent(c26), c26.defaultPrevented || i24(s23 ?? document.body, { select: true }), u16.removeEventListener(y15, T16), P17.remove(l27);
        };
      }, [u16, p26, E18, T16, l27]);
      const _13 = a19.useCallback((s23) => {
        if (!(n22 || o23) || l27.paused)
          return;
        const d20 = s23.key === "Tab" && !s23.altKey && !s23.ctrlKey && !s23.metaKey, c26 = document.activeElement;
        if (d20 && c26) {
          const f24 = s23.currentTarget, [v14, L15] = J16(f24);
          v14 && L15 ? !s23.shiftKey && c26 === L15 ? (s23.preventDefault(), n22 && i24(v14, { select: true })) : s23.shiftKey && c26 === v14 && (s23.preventDefault(), n22 && i24(L15, { select: true })) : c26 === f24 && s23.preventDefault();
        }
      }, [n22, o23, l27.paused]), k17 = a19.Children.only(g16);
      return a19.cloneElement(k17, { tabIndex: -1, ...U10, ref: K11, onKeyDown: _13 });
    });
    S19.displayName = B12;
    function G16(e27, { select: t28 = false } = {}) {
      const n22 = document.activeElement;
      for (const o23 of e27)
        if (i24(o23, { select: t28 }), document.activeElement !== n22)
          return;
    }
    __name(G16, "G");
    function J16(e27) {
      const t28 = N12(e27), n22 = I12(t28, e27), o23 = I12(t28.reverse(), e27);
      return [n22, o23];
    }
    __name(J16, "J");
    function N12(e27) {
      const t28 = [], n22 = document.createTreeWalker(e27, NodeFilter.SHOW_ELEMENT, { acceptNode: (o23) => {
        const r32 = o23.tagName === "INPUT" && o23.type === "hidden";
        return o23.disabled || o23.hidden || r32 ? NodeFilter.FILTER_SKIP : o23.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      } });
      for (; n22.nextNode(); )
        t28.push(n22.currentNode);
      return t28;
    }
    __name(N12, "N");
    function I12(e27, t28) {
      for (const n22 of e27)
        if (!Q10(n22, { upTo: t28 }))
          return n22;
    }
    __name(I12, "I");
    function Q10(e27, { upTo: t28 }) {
      if (getComputedStyle(e27).visibility === "hidden")
        return true;
      for (; e27; ) {
        if (t28 !== void 0 && e27 === t28)
          return false;
        if (getComputedStyle(e27).display === "none")
          return true;
        e27 = e27.parentElement;
      }
      return false;
    }
    __name(Q10, "Q");
    function X9(e27) {
      return e27 instanceof HTMLInputElement && "select" in e27;
    }
    __name(X9, "X");
    function i24(e27, { select: t28 = false } = {}) {
      if (e27 != null && e27.focus) {
        const n22 = document.activeElement;
        e27.focus({ preventScroll: true }), e27 !== n22 && X9(e27) && t28 && e27.select();
      }
    }
    __name(i24, "i");
    var P17 = Y11();
    function Y11() {
      let e27 = [];
      return { add(t28) {
        const n22 = e27[0];
        t28 !== n22 && (n22 == null || n22.pause()), e27 = C16(e27, t28), e27.unshift(t28);
      }, remove(t28) {
        var n22;
        e27 = C16(e27, t28), (n22 = e27[0]) == null || n22.resume();
      } };
    }
    __name(Y11, "Y");
    function C16(e27, t28) {
      const n22 = [...e27], o23 = n22.indexOf(t28);
      return o23 !== -1 && n22.splice(o23, 1), n22;
    }
    __name(C16, "C");
    function Z10(e27) {
      return e27.filter((t28) => t28.tagName !== "A");
    }
    __name(Z10, "Z");
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_FocusScope(), module2.exports);
  }
});

// node_modules/@tamagui/get-size/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@tamagui/get-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var O12 = Object.getOwnPropertyDescriptor;
    var T16 = Object.getOwnPropertyNames;
    var g16 = Object.prototype.hasOwnProperty;
    var z14 = /* @__PURE__ */ __name((r32, e27) => {
      for (var t28 in e27)
        a19(r32, t28, { get: e27[t28], enumerable: true });
    }, "z");
    var S19 = /* @__PURE__ */ __name((r32, e27, t28, o23) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let n22 of T16(e27))
          !g16.call(r32, n22) && n22 !== t28 && a19(r32, n22, { get: () => e27[n22], enumerable: !(o23 = O12(e27, n22)) || o23.enumerable });
      return r32;
    }, "S");
    var $8 = /* @__PURE__ */ __name((r32) => S19(a19({}, "__esModule", { value: true }), r32), "$");
    var b17 = {};
    z14(b17, { getSize: () => y15, stepTokenUpOrDown: () => d20 });
    module2.exports = $8(b17);
    var s23 = require("@tamagui/core-node");
    var y15 = /* @__PURE__ */ __name((r32, e27 = 0, t28 = [0]) => d20("size", r32, e27, t28), "y");
    var d20 = /* @__PURE__ */ __name((r32, e27 = "$true", t28 = 0, o23 = [0]) => {
      const n22 = (0, s23.getTokens)({ prefixed: true })[r32], c26 = (s23.tokensKeysOrdered.get(n22) || Object.keys(n22)).map((i24) => i24.charAt(0) === "$" ? i24 : `$${i24}`), k17 = o23[0] ?? 0, p26 = o23[1] ?? c26.length - 1, m24 = c26.indexOf(e27);
      e27 === "$true" && (t28 += t28 === 0 ? 0 : t28 > 0 ? 1 : -1);
      const u16 = Math.min(p26, Math.max(k17, m24 + t28)), x19 = c26[u16];
      return n22[x19] || n22.$true;
    }, "d");
  }
});

// node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var d20 = Object.getOwnPropertyDescriptor;
    var s23 = Object.getOwnPropertyNames;
    var p26 = Object.prototype.hasOwnProperty;
    var u16 = /* @__PURE__ */ __name((e27, r32) => {
      for (var i24 in r32)
        a19(e27, i24, { get: r32[i24], enumerable: true });
    }, "u");
    var z14 = /* @__PURE__ */ __name((e27, r32, i24, o23) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let t28 of s23(r32))
          !p26.call(e27, t28) && t28 !== i24 && a19(e27, t28, { get: () => r32[t28], enumerable: !(o23 = d20(r32, t28)) || o23.enumerable });
      return e27;
    }, "z");
    var S19 = /* @__PURE__ */ __name((e27) => z14(a19({}, "__esModule", { value: true }), e27), "S");
    var m24 = {};
    u16(m24, { getButtonSized: () => g16 });
    module2.exports = S19(m24);
    var n22 = require_cjs5();
    var g16 = /* @__PURE__ */ __name((e27, { tokens: r32 }) => {
      if (typeof e27 == "number")
        return { paddingHorizontal: e27 * 0.25, height: e27, borderRadius: e27 * 0.2 };
      const i24 = (0, n22.getSize)(e27, 0), o23 = (0, n22.stepTokenUpOrDown)("space", e27), t28 = r32.radius[e27] ?? r32.radius.$true;
      return { paddingHorizontal: o23, height: i24, borderRadius: t28 };
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
function __extends(d20, b17) {
  if (typeof b17 !== "function" && b17 !== null)
    throw new TypeError("Class extends value " + String(b17) + " is not a constructor or null");
  extendStatics(d20, b17);
  function __() {
    this.constructor = d20;
  }
  __name(__, "__");
  d20.prototype = b17 === null ? Object.create(b17) : (__.prototype = b17.prototype, new __());
}
function __rest(s23, e27) {
  var t28 = {};
  for (var p26 in s23)
    if (Object.prototype.hasOwnProperty.call(s23, p26) && e27.indexOf(p26) < 0)
      t28[p26] = s23[p26];
  if (s23 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i24 = 0, p26 = Object.getOwnPropertySymbols(s23); i24 < p26.length; i24++) {
      if (e27.indexOf(p26[i24]) < 0 && Object.prototype.propertyIsEnumerable.call(s23, p26[i24]))
        t28[p26[i24]] = s23[p26[i24]];
    }
  return t28;
}
function __decorate(decorators, target, key, desc) {
  var c26 = arguments.length, r32 = c26 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d20;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r32 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i24 = decorators.length - 1; i24 >= 0; i24--)
      if (d20 = decorators[i24])
        r32 = (c26 < 3 ? d20(r32) : c26 > 3 ? d20(target, key, r32) : d20(target, key)) || r32;
  return c26 > 3 && r32 && Object.defineProperty(target, key, r32), r32;
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
  for (var i24 = decorators.length - 1; i24 >= 0; i24--) {
    var context = {};
    for (var p26 in contextIn)
      context[p26] = p26 === "access" ? {} : contextIn[p26];
    for (var p26 in contextIn.access)
      context.access[p26] = contextIn.access[p26];
    context.addInitializer = function(f24) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f24 || null));
    };
    var result = (0, decorators[i24])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
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
  for (var i24 = 0; i24 < initializers.length; i24++) {
    value = useValue ? initializers[i24].call(thisArg, value) : initializers[i24].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x19) {
  return typeof x19 === "symbol" ? x19 : "".concat(x19);
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
function __awaiter(thisArg, _arguments, P17, generator) {
  function adopt(value) {
    return value instanceof P17 ? value : new P17(function(resolve) {
      resolve(value);
    });
  }
  __name(adopt, "adopt");
  return new (P17 || (P17 = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e27) {
        reject(e27);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e27) {
        reject(e27);
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
  }, trys: [], ops: [] }, f24, y15, t28, g16;
  return g16 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g16[Symbol.iterator] = function() {
    return this;
  }), g16;
  function verb(n22) {
    return function(v14) {
      return step([n22, v14]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f24)
      throw new TypeError("Generator is already executing.");
    while (g16 && (g16 = 0, op[0] && (_13 = 0)), _13)
      try {
        if (f24 = 1, y15 && (t28 = op[0] & 2 ? y15["return"] : op[0] ? y15["throw"] || ((t28 = y15["return"]) && t28.call(y15), 0) : y15.next) && !(t28 = t28.call(y15, op[1])).done)
          return t28;
        if (y15 = 0, t28)
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
            y15 = op[1];
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
      } catch (e27) {
        op = [6, e27];
        y15 = 0;
      } finally {
        f24 = t28 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m24, o23) {
  for (var p26 in m24)
    if (p26 !== "default" && !Object.prototype.hasOwnProperty.call(o23, p26))
      __createBinding(o23, m24, p26);
}
function __values(o23) {
  var s23 = typeof Symbol === "function" && Symbol.iterator, m24 = s23 && o23[s23], i24 = 0;
  if (m24)
    return m24.call(o23);
  if (o23 && typeof o23.length === "number")
    return {
      next: function() {
        if (o23 && i24 >= o23.length)
          o23 = void 0;
        return { value: o23 && o23[i24++], done: !o23 };
      }
    };
  throw new TypeError(s23 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o23, n22) {
  var m24 = typeof Symbol === "function" && o23[Symbol.iterator];
  if (!m24)
    return o23;
  var i24 = m24.call(o23), r32, ar = [], e27;
  try {
    while ((n22 === void 0 || n22-- > 0) && !(r32 = i24.next()).done)
      ar.push(r32.value);
  } catch (error) {
    e27 = { error };
  } finally {
    try {
      if (r32 && !r32.done && (m24 = i24["return"]))
        m24.call(i24);
    } finally {
      if (e27)
        throw e27.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i24 = 0; i24 < arguments.length; i24++)
    ar = ar.concat(__read(arguments[i24]));
  return ar;
}
function __spreadArrays() {
  for (var s23 = 0, i24 = 0, il = arguments.length; i24 < il; i24++)
    s23 += arguments[i24].length;
  for (var r32 = Array(s23), k17 = 0, i24 = 0; i24 < il; i24++)
    for (var a19 = arguments[i24], j15 = 0, jl = a19.length; j15 < jl; j15++, k17++)
      r32[k17] = a19[j15];
  return r32;
}
function __spreadArray(to4, from, pack) {
  if (pack || arguments.length === 2)
    for (var i24 = 0, l27 = from.length, ar; i24 < l27; i24++) {
      if (ar || !(i24 in from)) {
        if (!ar)
          ar = Array.prototype.slice.call(from, 0, i24);
        ar[i24] = from[i24];
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
  var g16 = generator.apply(thisArg, _arguments || []), i24, q13 = [];
  return i24 = {}, verb("next"), verb("throw"), verb("return"), i24[Symbol.asyncIterator] = function() {
    return this;
  }, i24;
  function verb(n22) {
    if (g16[n22])
      i24[n22] = function(v14) {
        return new Promise(function(a19, b17) {
          q13.push([n22, v14, a19, b17]) > 1 || resume(n22, v14);
        });
      };
  }
  __name(verb, "verb");
  function resume(n22, v14) {
    try {
      step(g16[n22](v14));
    } catch (e27) {
      settle(q13[0][3], e27);
    }
  }
  __name(resume, "resume");
  function step(r32) {
    r32.value instanceof __await ? Promise.resolve(r32.value.v).then(fulfill, reject) : settle(q13[0][2], r32);
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
    if (f24(v14), q13.shift(), q13.length)
      resume(q13[0][0], q13[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o23) {
  var i24, p26;
  return i24 = {}, verb("next"), verb("throw", function(e27) {
    throw e27;
  }), verb("return"), i24[Symbol.iterator] = function() {
    return this;
  }, i24;
  function verb(n22, f24) {
    i24[n22] = o23[n22] ? function(v14) {
      return (p26 = !p26) ? { value: __await(o23[n22](v14)), done: false } : f24 ? f24(v14) : v14;
    } : f24;
  }
  __name(verb, "verb");
}
function __asyncValues(o23) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m24 = o23[Symbol.asyncIterator], i24;
  return m24 ? m24.call(o23) : (o23 = typeof __values === "function" ? __values(o23) : o23[Symbol.iterator](), i24 = {}, verb("next"), verb("throw"), verb("return"), i24[Symbol.asyncIterator] = function() {
    return this;
  }, i24);
  function verb(n22) {
    i24[n22] = o23[n22] && function(v14) {
      return new Promise(function(resolve, reject) {
        v14 = o23[n22](v14), settle(resolve, reject, v14.done, v14.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d20, v14) {
    Promise.resolve(v14).then(function(v15) {
      resolve({ value: v15, done: d20 });
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
    for (var k17 in mod)
      if (k17 !== "default" && Object.prototype.hasOwnProperty.call(mod, k17))
        __createBinding(result, mod, k17);
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
    extendStatics = /* @__PURE__ */ __name(function(d20, b17) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d21, b18) {
        d21.__proto__ = b18;
      } || function(d21, b18) {
        for (var p26 in b18)
          if (Object.prototype.hasOwnProperty.call(b18, p26))
            d21[p26] = b18[p26];
      };
      return extendStatics(d20, b17);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t28) {
        for (var s23, i24 = 1, n22 = arguments.length; i24 < n22; i24++) {
          s23 = arguments[i24];
          for (var p26 in s23)
            if (Object.prototype.hasOwnProperty.call(s23, p26))
              t28[p26] = s23[p26];
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
    __createBinding = Object.create ? function(o23, m24, k17, k22) {
      if (k22 === void 0)
        k22 = k17;
      var desc = Object.getOwnPropertyDescriptor(m24, k17);
      if (!desc || ("get" in desc ? !m24.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m24[k17];
        } };
      }
      Object.defineProperty(o23, k22, desc);
    } : function(o23, m24, k17, k22) {
      if (k22 === void 0)
        k22 = k17;
      o23[k22] = m24[k17];
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
    __setModuleDefault = Object.create ? function(o23, v14) {
      Object.defineProperty(o23, "default", { enumerable: true, value: v14 });
    } : function(o23, v14) {
      o23["default"] = v14;
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
          }, function(e27) {
            return setError(function() {
              return e27;
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
      onError: function(e27) {
        return console.error(e27);
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
    function ItoI(a19) {
      return a19;
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
            buffer = buffer.filter(function(x19) {
              return x19 !== item;
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
            push: function(x19) {
              return cb(x19);
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
            push: function(x19) {
              pendingQueue.push(x19);
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
    var parse = /* @__PURE__ */ __name(function(x19) {
      return parseInt(x19 || "", 10) || 0;
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
          var _a = getScrollVariables(axis, current), s23 = _a[1], d20 = _a[2];
          if (s23 > d20) {
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
    var deltaCompare = /* @__PURE__ */ __name(function(x19, y15) {
      return x19[0] === y15[0] && x19[1] === y15[1];
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
        var sourceEvent = shouldPreventQueue.current.filter(function(e27) {
          return e27.name === event.type && e27.target === event.target && deltaCompare(e27.delta, delta);
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
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e27) {
            return e27 !== event;
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
    var h17 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var T16 = Object.prototype.hasOwnProperty;
    var v14 = /* @__PURE__ */ __name((e27, o23) => {
      for (var n22 in o23)
        c26(e27, n22, { get: o23[n22], enumerable: true });
    }, "v");
    var E18 = /* @__PURE__ */ __name((e27, o23, n22, i24) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let t28 of b17(o23))
          !T16.call(e27, t28) && t28 !== n22 && c26(e27, t28, { get: () => o23[t28], enumerable: !(i24 = h17(o23, t28)) || i24.enumerable });
      return e27;
    }, "E");
    var N12 = /* @__PURE__ */ __name((e27) => E18(c26({}, "__esModule", { value: true }), e27), "N");
    var D14 = {};
    v14(D14, { getFontSized: () => V15 });
    module2.exports = N12(D14);
    var r32 = require("@tamagui/core-node");
    var V15 = /* @__PURE__ */ __name((e27 = "$true", { fonts: o23, props: n22 }) => {
      var f24, u16, y15;
      const i24 = (0, r32.getVariableValue)(n22.fontFamily) || "$body", t28 = o23[i24] || o23.$body;
      if (!t28)
        return process.env.NODE_ENV === "development" && console.warn("\u26A0\uFE0F no font found", { family: i24, fontTokens: Object.keys(o23), sizeTokenIn: e27 }), {};
      const g16 = t28.family, s23 = e27 === "$true" ? $8(t28) : e27, z14 = n22.fontSize || t28.size[s23], S19 = n22.lineHeight || t28.lineHeight[s23], d20 = n22.fontWeight || t28.weight[s23], k17 = n22.letterSpacing || t28.letterSpacing[s23], m24 = n22.fontStyle || ((f24 = t28.style) == null ? void 0 : f24[s23]), F16 = n22.textTransform || ((u16 = t28.transform) == null ? void 0 : u16[s23]), a19 = { color: n22.color || ((y15 = t28.color) == null ? void 0 : y15[s23]), fontStyle: m24, textTransform: F16, fontFamily: g16, fontWeight: d20, letterSpacing: k17, fontSize: z14, lineHeight: S19 };
      return process.env.NODE_ENV === "development" && n22.debug && (console.groupCollapsed("  \u{1F539} getFontSized", e27, s23), console.log({ style: a19, props: n22, font: t28 }), console.groupEnd()), a19;
    }, "V");
    var l27 = /* @__PURE__ */ new WeakMap();
    function $8(e27) {
      if (typeof e27 == "object" && l27.has(e27))
        return l27.get(e27);
      const o23 = "$true" in e27.size ? e27.size : (0, r32.getTokens)().size, n22 = o23.$true, i24 = n22 ? Object.keys(o23).find((t28) => t28 !== "$true" && o23[t28].val === n22.val) : null;
      return !n22 || !i24 ? (process.env.NODE_ENV === "development" && console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`), Object.keys(e27.size)[3]) : (l27.set(e27, i24), i24);
    }
    __name($8, "$");
  }
});

// node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var h17 = Object.defineProperty;
    var f24 = Object.getOwnPropertyDescriptor;
    var u16 = Object.getOwnPropertyNames;
    var I12 = Object.prototype.hasOwnProperty;
    var l27 = /* @__PURE__ */ __name((a19, t28) => {
      for (var e27 in t28)
        h17(a19, e27, { get: t28[e27], enumerable: true });
    }, "l");
    var S19 = /* @__PURE__ */ __name((a19, t28, e27, s23) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let o23 of u16(t28))
          !I12.call(a19, o23) && o23 !== e27 && h17(a19, o23, { get: () => t28[o23], enumerable: !(s23 = f24(t28, o23)) || s23.enumerable });
      return a19;
    }, "S");
    var P17 = /* @__PURE__ */ __name((a19) => S19(h17({}, "__esModule", { value: true }), a19), "P");
    var R17 = {};
    l27(R17, { Image: () => p26 });
    module2.exports = P17(R17);
    var y15 = require("react/jsx-runtime");
    var i24 = require("@tamagui/core-node");
    var m24 = require("react");
    var r32 = require("react-native-web-lite");
    (0, i24.setupReactNative)({ Image: r32.Image });
    var g16 = (0, i24.styled)(r32.Image, { name: "Image", position: "relative", source: { uri: "" }, zIndex: 1 });
    var c26 = false;
    var p26 = g16.extractable((0, m24.forwardRef)((a19, t28) => {
      const e27 = (0, i24.useMediaPropsActive)(a19), { src: s23, source: o23, ...n22 } = e27;
      process.env.NODE_ENV === "development" && typeof s23 == "string" && (typeof e27.width == "string" && e27.width[0] !== "$" || typeof e27.height == "string" && e27.height[0] !== "$") && (c26 || (c26 = true, console.warn('React Native expects a numerical width/height. If you want to use a percent you must define the "source" prop with width, height, and uri.')));
      const d20 = typeof s23 == "string" ? { uri: s23, ...i24.isWeb && { width: e27.width, height: e27.height } } : o23 ?? s23;
      return (0, y15.jsx)(g16, { ref: t28, source: d20, ...n22 });
    }));
    p26.getSize = r32.Image.getSize, p26.getSizeWithHeaders = r32.Image.getSizeWithHeaders, p26.prefetch = r32.Image.prefetch, p26.prefetchWithMetadata = r32.Image.prefetchWithMetadata, p26.abortPrefetch = r32.Image.abortPrefetch, p26.queryCache = r32.Image.queryCache;
  }
});

// node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_Image(), module2.exports);
  }
});

// node_modules/@tamagui/font-size/dist/cjs/getFontSize.js
var require_getFontSize = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/getFontSize.js"(exports, module2) {
    "use strict";
    var u16 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var F16 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var k17 = /* @__PURE__ */ __name((n22, e27) => {
      for (var t28 in e27)
        u16(n22, t28, { get: e27[t28], enumerable: true });
    }, "k");
    var T16 = /* @__PURE__ */ __name((n22, e27, t28, f24) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let o23 of F16(e27))
          !S19.call(n22, o23) && o23 !== t28 && u16(n22, o23, { get: () => e27[o23], enumerable: !(f24 = a19(e27, o23)) || f24.enumerable });
      return n22;
    }, "T");
    var b17 = /* @__PURE__ */ __name((n22) => T16(u16({}, "__esModule", { value: true }), n22), "b");
    var x19 = {};
    k17(x19, { getFontSize: () => m24, getFontSizeToken: () => c26, getFontSizeVariable: () => z14 });
    module2.exports = b17(x19);
    var s23 = require("@tamagui/core-node");
    var m24 = /* @__PURE__ */ __name((n22, e27) => {
      const t28 = z14(n22, e27);
      return (0, s23.isVariable)(t28) ? +t28.val : t28 ? +t28 : 16;
    }, "m");
    var z14 = /* @__PURE__ */ __name((n22, e27) => {
      const t28 = c26(n22, e27);
      return t28 ? (0, s23.getConfig)().fontsParsed[(e27 == null ? void 0 : e27.font) || "$body"].size[t28] : n22;
    }, "z");
    var c26 = /* @__PURE__ */ __name((n22, e27) => {
      if (typeof n22 == "number")
        return null;
      const t28 = (e27 == null ? void 0 : e27.relativeSize) || 0, o23 = (0, s23.getConfig)().fontsParsed[(e27 == null ? void 0 : e27.font) || "$body"].size, i24 = n22 || ("$true" in o23 ? "$true" : "$4"), r32 = Object.keys(o23);
      let l27 = r32.indexOf(i24);
      l27 === -1 && i24.endsWith(".5") && (l27 = r32.indexOf(i24.replace(".5", ""))), process.env.NODE_ENV === "development" && l27 === -1 && console.warn("No font size found", i24, e27, "in size tokens", r32);
      const d20 = Math.min(Math.max(0, l27 + t28), r32.length - 1);
      return r32[d20] ?? i24;
    }, "c");
  }
});

// node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_getFontSize(), module2.exports);
  }
});

// node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var u16 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var c26 = Object.prototype.hasOwnProperty;
    var h17 = /* @__PURE__ */ __name((m24, n22) => {
      for (var r32 in n22)
        u16(m24, r32, { get: n22[r32], enumerable: true });
    }, "h");
    var i24 = /* @__PURE__ */ __name((m24, n22, r32, t28) => {
      if (n22 && typeof n22 == "object" || typeof n22 == "function")
        for (let e27 of b17(n22))
          !c26.call(m24, e27) && e27 !== r32 && u16(m24, e27, { get: () => n22[e27], enumerable: !(t28 = a19(n22, e27)) || t28.enumerable });
      return m24;
    }, "i");
    var o23 = /* @__PURE__ */ __name((m24) => i24(u16({}, "__esModule", { value: true }), m24), "o");
    var x19 = {};
    h17(x19, { clamp: () => p26 });
    module2.exports = o23(x19);
    function p26(m24, [n22, r32]) {
      return Math.min(r32, Math.max(n22, m24));
    }
    __name(p26, "p");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js
var require_composeEventHandlers = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/composeEventHandlers.js"(exports, module2) {
    "use strict";
    var E18 = Object.defineProperty;
    var u16 = Object.getOwnPropertyDescriptor;
    var a19 = Object.getOwnPropertyNames;
    var l27 = Object.prototype.hasOwnProperty;
    var s23 = /* @__PURE__ */ __name((n22, e27) => {
      for (var t28 in e27)
        E18(n22, t28, { get: e27[t28], enumerable: true });
    }, "s");
    var v14 = /* @__PURE__ */ __name((n22, e27, t28, d20) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let r32 of a19(e27))
          !l27.call(n22, r32) && r32 !== t28 && E18(n22, r32, { get: () => e27[r32], enumerable: !(d20 = u16(e27, r32)) || d20.enumerable });
      return n22;
    }, "v");
    var f24 = /* @__PURE__ */ __name((n22) => v14(E18({}, "__esModule", { value: true }), n22), "f");
    var p26 = {};
    s23(p26, { composeEventHandlers: () => i24 });
    module2.exports = f24(p26);
    function i24(n22, e27, { checkDefaultPrevented: t28 = true } = {}) {
      return !n22 || !e27 ? e27 || n22 : function(r32) {
        if (n22 == null || n22(r32), !r32 || !(t28 && "defaultPrevented" in r32) || "defaultPrevented" in r32 && !r32.defaultPrevented)
          return e27 == null ? void 0 : e27(r32);
      };
    }
    __name(i24, "i");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var x19 = Object.defineProperty;
    var N12 = Object.getOwnPropertyDescriptor;
    var O12 = Object.getOwnPropertyNames;
    var v14 = Object.prototype.hasOwnProperty;
    var I12 = /* @__PURE__ */ __name((s23, n22) => {
      for (var i24 in n22)
        x19(s23, i24, { get: n22[i24], enumerable: true });
    }, "I");
    var K11 = /* @__PURE__ */ __name((s23, n22, i24, t28) => {
      if (n22 && typeof n22 == "object" || typeof n22 == "function")
        for (let r32 of O12(n22))
          !v14.call(s23, r32) && r32 !== i24 && x19(s23, r32, { get: () => n22[r32], enumerable: !(t28 = N12(n22, r32)) || t28.enumerable });
      return s23;
    }, "K");
    var S19 = /* @__PURE__ */ __name((s23) => K11(x19({}, "__esModule", { value: true }), s23), "S");
    var j15 = {};
    I12(j15, { concatClassName: () => _13 });
    module2.exports = S19(j15);
    function _13(s23) {
      const n22 = arguments, i24 = [];
      let t28 = "";
      const r32 = n22.length;
      let l27 = null;
      for (let y15 = r32; y15 >= 0; y15--) {
        const c26 = n22[y15];
        if (!c26)
          continue;
        if (!Array.isArray(c26) && typeof c26 != "string") {
          l27 = l27 || [], l27.push(c26);
          continue;
        }
        const g16 = Array.isArray(c26) ? c26 : c26.split(" "), A20 = g16.length;
        for (let d20 = A20 - 1; d20 >= 0; d20--) {
          const e27 = g16[d20];
          if (!e27 || e27 === " ")
            continue;
          if (e27[0] !== "_") {
            t28 = e27 + " " + t28;
            continue;
          }
          const u16 = e27.indexOf("-");
          if (u16 < 1) {
            t28 = e27 + " " + t28;
            continue;
          }
          const C16 = e27[u16 + 1] === "_", m24 = e27.slice(1, e27.lastIndexOf("-")), a19 = C16 ? e27.slice(u16 + 2, u16 + 7) : null, h17 = a19 ? m24 + a19 : m24;
          if (i24.indexOf(h17) > -1)
            continue;
          i24.push(h17);
          const f24 = m24;
          f24 && l27 && l27.some((o23) => {
            if (a19) {
              const p26 = b17[a19];
              return o23 && o23[p26] && f24 in o23[p26] && o23[p26] !== null;
            }
            return o23 && f24 in o23 && o23[f24] !== null;
          }) || (t28 = e27 + " " + t28);
        }
      }
      return t28;
    }
    __name(_13, "_");
    var b17 = { hover: "hoverStyle", focus: "focusStyle", press: "pressStyle" };
  }
});

// node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js
var require_validStyleProps = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/validStyleProps.js"(exports, module2) {
    "use strict";
    var u16 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var f24 = Object.getOwnPropertyNames;
    var g16 = Object.prototype.hasOwnProperty;
    var h17 = /* @__PURE__ */ __name((t28, e27) => {
      for (var o23 in e27)
        u16(t28, o23, { get: e27[o23], enumerable: true });
    }, "h");
    var x19 = /* @__PURE__ */ __name((t28, e27, o23, a19) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let r32 of f24(e27))
          !g16.call(t28, r32) && r32 !== o23 && u16(t28, r32, { get: () => e27[r32], enumerable: !(a19 = b17(e27, r32)) || a19.enumerable });
      return t28;
    }, "x");
    var S19 = /* @__PURE__ */ __name((t28) => x19(u16({}, "__esModule", { value: true }), t28), "S");
    var w23 = {};
    h17(w23, { stylePropsAll: () => m24, stylePropsFont: () => l27, stylePropsText: () => p26, stylePropsTextOnly: () => s23, stylePropsTransform: () => d20, stylePropsView: () => i24, validPseudoKeys: () => c26, validStyles: () => y15, validStylesOnBaseProps: () => n22 });
    module2.exports = S19(w23);
    var d20 = Object.freeze({ x: true, y: true, scale: true, perspective: true, scaleX: true, scaleY: true, skewX: true, skewY: true, matrix: true, rotate: true, rotateY: true, rotateX: true, rotateZ: true });
    var n22 = Object.freeze({ placeholderTextColor: true });
    var i24 = Object.freeze({ backfaceVisibility: true, backgroundColor: true, borderBottomColor: true, borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderBottomWidth: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderLeftWidth: true, borderRadius: true, borderRightColor: true, borderRightWidth: true, borderStartColor: true, borderStyle: true, borderTopColor: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true, borderTopWidth: true, borderWidth: true, opacity: true, transform: true, alignContent: true, alignItems: true, alignSelf: true, aspectRatio: true, borderEndWidth: true, borderStartWidth: true, bottom: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, columnGap: true, rowGap: true, height: true, justifyContent: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, start: true, top: true, width: true, zIndex: true, direction: true, shadowColor: true, shadowOffset: true, shadowOpacity: true, shadowRadius: true, ...n22, ...d20, ...process.env.TAMAGUI_TARGET === "web" && { borderBottomStyle: true, borderTopStyle: true, borderLeftStyle: true, borderRightStyle: true, overflowX: true, overflowY: true, userSelect: true, cursor: true, contain: true, pointerEvents: true, boxSizing: true, boxShadow: true, outlineColor: true, outlineStyle: true, outlineOffset: true, outlineWidth: true } });
    var l27 = Object.freeze({ fontFamily: true, fontSize: true, fontStyle: true, fontWeight: true, letterSpacing: true, lineHeight: true, textTransform: true });
    var s23 = Object.freeze({ color: true, ...l27, textAlign: true, textDecorationLine: true, textDecorationStyle: true, textDecorationColor: true, textShadowColor: true, textShadowOffset: true, textShadowRadius: true, ...process.env.TAMAGUI_TARGET === "web" && { whiteSpace: true, wordWrap: true, textOverflow: true, textDecorationDistance: true, userSelect: true, selectable: true, cursor: true, WebkitLineClamp: true, WebkitBoxOrient: true } });
    var p26 = Object.freeze({ ...i24, ...s23 });
    var m24 = p26;
    var c26 = Object.freeze({ enterStyle: true, exitStyle: true, hoverStyle: true, pressStyle: true, focusStyle: true });
    var y15 = Object.freeze({ ...c26, ...i24 });
  }
});

// node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var p26 = Object.defineProperty;
    var l27 = Object.getOwnPropertyDescriptor;
    var o23 = Object.getOwnPropertyNames;
    var y15 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((t28, e27, s23, i24) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let r32 of o23(e27))
          !y15.call(t28, r32) && r32 !== s23 && p26(t28, r32, { get: () => e27[r32], enumerable: !(i24 = l27(e27, r32)) || i24.enumerable });
      return t28;
    }, "c");
    var n22 = /* @__PURE__ */ __name((t28) => c26(p26({}, "__esModule", { value: true }), t28), "n");
    var u16 = {};
    module2.exports = n22(u16);
  }
});

// node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var s23 = Object.defineProperty;
    var f24 = Object.getOwnPropertyDescriptor;
    var u16 = Object.getOwnPropertyNames;
    var C16 = Object.prototype.hasOwnProperty;
    var g16 = /* @__PURE__ */ __name((t28, r32) => {
      for (var n22 in r32)
        s23(t28, n22, { get: r32[n22], enumerable: true });
    }, "g");
    var o23 = /* @__PURE__ */ __name((t28, r32, n22, e27) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let i24 of u16(r32))
          !C16.call(t28, i24) && i24 !== n22 && s23(t28, i24, { get: () => r32[i24], enumerable: !(e27 = f24(r32, i24)) || e27.enumerable });
      return t28;
    }, "o");
    var p26 = /* @__PURE__ */ __name((t28) => o23(s23({}, "__esModule", { value: true }), t28), "p");
    var m24 = {};
    g16(m24, { isValidCSSCharCode: () => h17, simpleHash: () => S19 });
    module2.exports = p26(m24);
    var S19 = /* @__PURE__ */ __name((t28, r32 = 10) => {
      let n22 = 0, e27 = "";
      const i24 = t28.length;
      for (let l27 = 0; l27 < i24; l27++) {
        const a19 = t28.charCodeAt(l27);
        a19 === 46 && (e27 += "d0t"), h17(a19) && i24 <= r32 ? e27 += t28[l27] : (n22 = (n22 << 5) - n22 + a19, n22 &= n22);
      }
      return e27 + (n22 ? new Uint32Array([n22])[0].toString(36) : "");
    }, "S");
    function h17(t28) {
      return t28 >= 65 && t28 <= 90 || t28 >= 97 && t28 <= 122 || t28 === 95 || t28 === 45 || t28 >= 48 && t28 <= 57;
    }
    __name(h17, "h");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, e27, p26, x19) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let m24 of c26(e27))
          !d20.call(f24, m24) && m24 !== p26 && a19(f24, m24, { get: () => e27[m24], enumerable: !(x19 = b17(e27, m24)) || x19.enumerable });
      return f24;
    }, "t");
    var r32 = /* @__PURE__ */ __name((f24, e27, p26) => (t28(f24, e27, "default"), p26 && t28(p26, e27, "default")), "r");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a19({}, "__esModule", { value: true }), f24), "g");
    var o23 = {};
    module2.exports = g16(o23);
    r32(o23, require_clamp(), module2.exports);
    r32(o23, require_composeEventHandlers(), module2.exports);
    r32(o23, require_concatClassName(), module2.exports);
    r32(o23, require_validStyleProps(), module2.exports);
    r32(o23, require_types(), module2.exports);
    r32(o23, require_cjs10(), module2.exports);
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var n22 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var s23 = Object.getOwnPropertyNames;
    var v14 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((t28, e27) => {
      for (var p26 in e27)
        n22(t28, p26, { get: e27[p26], enumerable: true });
    }, "c");
    var f24 = /* @__PURE__ */ __name((t28, e27, p26, r32) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let o23 of s23(e27))
          !v14.call(t28, o23) && o23 !== p26 && n22(t28, o23, { get: () => e27[o23], enumerable: !(r32 = a19(e27, o23)) || r32.enumerable });
      return t28;
    }, "f");
    var g16 = /* @__PURE__ */ __name((t28) => f24(n22({}, "__esModule", { value: true }), t28), "g");
    var l27 = {};
    c26(l27, { prevent: () => i24 });
    module2.exports = g16(l27);
    var i24 = /* @__PURE__ */ __name((t28) => [t28.preventDefault(), t28.stopPropagation()], "i");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var p26 = Object.getOwnPropertyDescriptor;
    var r32 = Object.getOwnPropertyNames;
    var k17 = Object.prototype.hasOwnProperty;
    var S19 = /* @__PURE__ */ __name((s23, e27) => {
      for (var t28 in e27)
        a19(s23, t28, { get: e27[t28], enumerable: true });
    }, "S");
    var i24 = /* @__PURE__ */ __name((s23, e27, t28, c26) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let n22 of r32(e27))
          !k17.call(s23, n22) && n22 !== t28 && a19(s23, n22, { get: () => e27[n22], enumerable: !(c26 = p26(e27, n22)) || c26.enumerable });
      return s23;
    }, "i");
    var m24 = /* @__PURE__ */ __name((s23) => i24(a19({}, "__esModule", { value: true }), s23), "m");
    var T16 = {};
    S19(T16, { getSpace: () => u16 });
    module2.exports = m24(T16);
    var o23 = require("@tamagui/core-node");
    var u16 = /* @__PURE__ */ __name((s23, e27 = 0) => {
      const t28 = (0, o23.getTokens)().space, c26 = Object.keys(t28), n22 = c26[Math.max(0, c26.indexOf(String(s23 || "$true")) + e27)];
      return t28[n22] || t28.$true;
    }, "u");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var l27 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var p26 = Object.getOwnPropertyNames;
    var s23 = Object.prototype.hasOwnProperty;
    var m24 = /* @__PURE__ */ __name((o23, e27) => {
      for (var t28 in e27)
        l27(o23, t28, { get: e27[t28], enumerable: true });
    }, "m");
    var C16 = /* @__PURE__ */ __name((o23, e27, t28, a19) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let r32 of p26(e27))
          !s23.call(o23, r32) && r32 !== t28 && l27(o23, r32, { get: () => e27[r32], enumerable: !(a19 = i24(e27, r32)) || a19.enumerable });
      return o23;
    }, "C");
    var T16 = /* @__PURE__ */ __name((o23) => C16(l27({}, "__esModule", { value: true }), o23), "T");
    var u16 = {};
    m24(u16, { useCurrentColor: () => b17 });
    module2.exports = T16(u16);
    var n22 = require("@tamagui/core-node");
    var b17 = /* @__PURE__ */ __name((o23) => {
      const e27 = (0, n22.useTheme)();
      return (0, n22.variableToString)(e27[o23] || o23 || e27.color);
    }, "b");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var m24 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var s23 = Object.prototype.hasOwnProperty;
    var f24 = /* @__PURE__ */ __name((r32, e27) => {
      for (var o23 in e27)
        m24(r32, o23, { get: e27[o23], enumerable: true });
    }, "f");
    var C16 = /* @__PURE__ */ __name((r32, e27, o23, c26) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let n22 of l27(e27))
          !s23.call(r32, n22) && n22 !== o23 && m24(r32, n22, { get: () => e27[n22], enumerable: !(c26 = i24(e27, n22)) || c26.enumerable });
      return r32;
    }, "C");
    var a19 = /* @__PURE__ */ __name((r32) => C16(m24({}, "__esModule", { value: true }), r32), "a");
    var E18 = {};
    f24(E18, { useGetThemedIcon: () => p26 });
    module2.exports = a19(E18);
    var t28 = require("react");
    var u16 = require_useCurrentColor();
    var p26 = /* @__PURE__ */ __name((r32) => {
      const e27 = (0, u16.useCurrentColor)(r32.color);
      return (o23) => o23 && ((0, t28.isValidElement)(o23) ? (0, t28.cloneElement)(o23, { ...r32, ...o23.props }) : (0, t28.createElement)(o23, r32));
    }, "p");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs12 = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, e27, p26, x19) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let m24 of c26(e27))
          !d20.call(f24, m24) && m24 !== p26 && a19(f24, m24, { get: () => e27[m24], enumerable: !(x19 = b17(e27, m24)) || x19.enumerable });
      return f24;
    }, "t");
    var r32 = /* @__PURE__ */ __name((f24, e27, p26) => (t28(f24, e27, "default"), p26 && t28(p26, e27, "default")), "r");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a19({}, "__esModule", { value: true }), f24), "g");
    var o23 = {};
    module2.exports = g16(o23);
    r32(o23, require_cjs11(), module2.exports);
    r32(o23, require_prevent(), module2.exports);
    r32(o23, require_getSpace(), module2.exports);
    r32(o23, require_useCurrentColor(), module2.exports);
    r32(o23, require_useGetThemedIcon(), module2.exports);
  }
});

// node_modules/@tamagui/create-context/dist/cjs/create-context.js
var require_create_context = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/create-context.js"(exports, module2) {
    "use strict";
    var V15 = Object.create;
    var S19 = Object.defineProperty;
    var g16 = Object.getOwnPropertyDescriptor;
    var m24 = Object.getOwnPropertyNames;
    var b17 = Object.getPrototypeOf;
    var h17 = Object.prototype.hasOwnProperty;
    var _13 = /* @__PURE__ */ __name((e27, t28) => {
      for (var n22 in t28)
        S19(e27, n22, { get: t28[n22], enumerable: true });
    }, "_");
    var T16 = /* @__PURE__ */ __name((e27, t28, n22, a19) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let r32 of m24(t28))
          !h17.call(e27, r32) && r32 !== n22 && S19(e27, r32, { get: () => t28[r32], enumerable: !(a19 = g16(t28, r32)) || a19.enumerable });
      return e27;
    }, "T");
    var $8 = /* @__PURE__ */ __name((e27, t28, n22) => (n22 = e27 != null ? V15(b17(e27)) : {}, T16(t28 || !e27 || !e27.__esModule ? S19(n22, "default", { value: e27, enumerable: true }) : n22, e27)), "$");
    var w23 = /* @__PURE__ */ __name((e27) => T16(S19({}, "__esModule", { value: true }), e27), "w");
    var N12 = {};
    _13(N12, { createContext: () => k17, createContextScope: () => R17 });
    module2.exports = w23(N12);
    var P17 = require("react/jsx-runtime");
    var p26 = $8(require("react"));
    function k17(e27, t28) {
      const n22 = p26.createContext(t28);
      function a19(s23) {
        const { children: o23, ...c26 } = s23, u16 = p26.useMemo(() => c26, Object.values(c26));
        return (0, P17.jsx)(n22.Provider, { value: u16, children: o23 });
      }
      __name(a19, "a");
      function r32(s23) {
        const o23 = p26.useContext(n22);
        if (o23)
          return o23;
        if (t28 !== void 0)
          return t28;
        throw new Error(`\`${s23}\` must be used within \`${e27}\``);
      }
      __name(r32, "r");
      return a19.displayName = `${e27}Provider`, [a19, r32];
    }
    __name(k17, "k");
    function R17(e27, t28 = []) {
      let n22 = [];
      function a19(s23, o23) {
        const c26 = p26.createContext(o23), u16 = n22.length;
        n22 = [...n22, o23];
        function d20(l27) {
          const { scope: x19, children: i24, ...C16 } = l27, f24 = (x19 == null ? void 0 : x19[e27][u16]) || c26, y15 = p26.useMemo(() => C16, Object.values(C16));
          return (0, P17.jsx)(f24.Provider, { value: y15, children: i24 });
        }
        __name(d20, "d");
        function v14(l27, x19, i24) {
          const C16 = (x19 == null ? void 0 : x19[e27][u16]) || c26, f24 = p26.useContext(C16);
          if (f24)
            return f24;
          if (o23 !== void 0)
            return o23;
          const y15 = `\`${l27}\` must be used within \`${s23}\``;
          if (i24 != null && i24.fallback)
            return (i24 == null ? void 0 : i24.warn) !== false && console.warn(y15), i24.fallback;
          throw new Error(y15);
        }
        __name(v14, "v");
        return d20.displayName = `${s23}Provider`, [d20, v14];
      }
      __name(a19, "a");
      const r32 = /* @__PURE__ */ __name(() => {
        const s23 = n22.map((o23) => p26.createContext(o23));
        return function(c26) {
          const u16 = (c26 == null ? void 0 : c26[e27]) || s23;
          return p26.useMemo(() => ({ [`__scope${e27}`]: { ...c26, [e27]: u16 } }), [c26, u16]);
        };
      }, "r");
      return r32.scopeName = e27, [a19, M17(r32, ...t28)];
    }
    __name(R17, "R");
    function M17(...e27) {
      const t28 = e27[0];
      if (e27.length === 1)
        return t28;
      const n22 = /* @__PURE__ */ __name(() => {
        const a19 = e27.map((r32) => ({ useScope: r32(), scopeName: r32.scopeName }));
        return function(s23) {
          const o23 = a19.reduce((c26, { useScope: u16, scopeName: d20 }) => {
            const l27 = u16(s23)[`__scope${d20}`];
            return { ...c26, ...l27 };
          }, {});
          return p26.useMemo(() => ({ [`__scope${t28.scopeName}`]: o23 }), [o23]);
        };
      }, "n");
      return n22.scopeName = t28.scopeName, n22;
    }
    __name(M17, "M");
  }
});

// node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_create_context(), module2.exports);
  }
});

// node_modules/@tamagui/stacks/dist/cjs/getElevation.js
var require_getElevation = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/getElevation.js"(exports, module2) {
    "use strict";
    var s23 = Object.defineProperty;
    var l27 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var h17 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((e27, o23) => {
      for (var n22 in o23)
        s23(e27, n22, { get: o23[n22], enumerable: true });
    }, "p");
    var S19 = /* @__PURE__ */ __name((e27, o23, n22, t28) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let a19 of c26(o23))
          !h17.call(e27, a19) && a19 !== n22 && s23(e27, a19, { get: () => o23[a19], enumerable: !(t28 = l27(o23, a19)) || t28.enumerable });
      return e27;
    }, "S");
    var f24 = /* @__PURE__ */ __name((e27) => S19(s23({}, "__esModule", { value: true }), e27), "f");
    var m24 = {};
    p26(m24, { getElevation: () => w23, getSizedElevation: () => d20 });
    module2.exports = f24(m24);
    var r32 = require("@tamagui/core-node");
    var w23 = /* @__PURE__ */ __name((e27, o23) => {
      if (!e27)
        return;
      const { tokens: n22 } = o23, t28 = n22.size[e27], a19 = (0, r32.isVariable)(t28) ? +t28.val : e27;
      return d20(a19, o23);
    }, "w");
    var d20 = /* @__PURE__ */ __name((e27, { theme: o23, tokens: n22 }) => {
      let t28 = 0;
      if (e27 === true) {
        const i24 = (0, r32.getVariableValue)(n22.size.true);
        typeof i24 == "number" ? t28 = i24 : t28 = 10;
      } else
        t28 = +e27;
      process.env.NODE_ENV === "development" && t28 !== null && isNaN(t28) && console.warn("NaN shadow", t28, e27);
      const [a19, u16] = [Math.round(t28 / 4 + 1), Math.round(t28 / 2 + 2)];
      return { shadowColor: o23.shadowColor, shadowRadius: u16, shadowOffset: { height: a19, width: 0 } };
    }, "d");
  }
});

// node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var c26 = Object.defineProperty;
    var S19 = Object.getOwnPropertyDescriptor;
    var k17 = Object.getOwnPropertyNames;
    var m24 = Object.prototype.hasOwnProperty;
    var x19 = /* @__PURE__ */ __name((e27, t28) => {
      for (var a19 in t28)
        c26(e27, a19, { get: t28[a19], enumerable: true });
    }, "x");
    var f24 = /* @__PURE__ */ __name((e27, t28, a19, s23) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let r32 of k17(t28))
          !m24.call(e27, r32) && r32 !== a19 && c26(e27, r32, { get: () => t28[r32], enumerable: !(s23 = S19(t28, r32)) || s23.enumerable });
      return e27;
    }, "f");
    var u16 = /* @__PURE__ */ __name((e27) => f24(c26({}, "__esModule", { value: true }), e27), "u");
    var Y11 = {};
    x19(Y11, { XStack: () => P17, YStack: () => l27, ZStack: () => y15, fullscreenStyle: () => i24 });
    module2.exports = u16(Y11);
    var o23 = require("@tamagui/core-node");
    var n22 = require_getElevation();
    var i24 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
    var p26 = { fullscreen: { true: i24 }, elevation: { "...size": n22.getElevation } };
    var l27 = (0, o23.styled)(o23.Stack, { flexDirection: "column", name: "YStack", variants: p26 });
    var P17 = (0, o23.styled)(o23.Stack, { flexDirection: "row", name: "XStack", variants: p26 });
    var y15 = (0, o23.styled)(l27, { name: "ZStack", position: "relative" }, { neverFlatten: true, isZStack: true });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var d20 = Object.defineProperty;
    var n22 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var c26 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((o23, r32) => {
      for (var t28 in r32)
        d20(o23, t28, { get: r32[t28], enumerable: true });
    }, "b");
    var i24 = /* @__PURE__ */ __name((o23, r32, t28, e27) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let s23 of l27(r32))
          !c26.call(o23, s23) && s23 !== t28 && d20(o23, s23, { get: () => r32[s23], enumerable: !(e27 = n22(r32, s23)) || e27.enumerable });
      return o23;
    }, "i");
    var a19 = /* @__PURE__ */ __name((o23) => i24(d20({}, "__esModule", { value: true }), o23), "a");
    var k17 = {};
    b17(k17, { bordered: () => h17, circular: () => g16, elevate: () => p26, focusTheme: () => x19, hoverTheme: () => $8, padded: () => C16, pressTheme: () => f24, radiused: () => m24 });
    module2.exports = a19(k17);
    var u16 = require_getElevation();
    var p26 = { true: (o23, r32) => (0, u16.getElevation)(r32.props.size, r32) };
    var h17 = /* @__PURE__ */ __name((o23, { props: r32 }) => ({ borderWidth: typeof o23 == "number" ? o23 : 1, borderColor: "$borderColor", ...r32.hoverTheme && { hoverStyle: { borderColor: "$borderColorHover" } }, ...r32.pressTheme && { pressStyle: { borderColor: "$borderColorPress" } }, ...r32.focusTheme && { focusStyle: { borderColor: "$borderColorFocus" } } }), "h");
    var C16 = { true: (o23, r32) => {
      const { tokens: t28, props: e27 } = r32;
      return { padding: t28.space[e27.size] || t28.space.$true };
    } };
    var m24 = { true: (o23, r32) => {
      const { tokens: t28, props: e27 } = r32;
      return { borderRadius: t28.radius[e27.size] || t28.radius.$true };
    } };
    var g16 = { true: (o23, { props: r32, tokens: t28 }) => {
      const e27 = t28.size[r32.size];
      return { width: e27, height: e27, maxWidth: e27, maxHeight: e27, minWidth: e27, minHeight: e27, borderRadius: 1e5, padding: 0 };
    } };
    var $8 = { true: { hoverStyle: { backgroundColor: "$backgroundHover", borderColor: "$borderColorHover" } }, false: {} };
    var f24 = { true: { cursor: "pointer", pressStyle: { backgroundColor: "$backgroundPress", borderColor: "$borderColorPress" } }, false: {} };
    var x19 = { true: { focusStyle: { backgroundColor: "$backgroundFocus", borderColor: "$borderColorFocus" } }, false: {} };
  }
});

// node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var s23 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var p26 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var d20 = /* @__PURE__ */ __name((o23, r32) => {
      for (var a19 in r32)
        s23(o23, a19, { get: r32[a19], enumerable: true });
    }, "d");
    var h17 = /* @__PURE__ */ __name((o23, r32, a19, l27) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let t28 of p26(r32))
          !S19.call(o23, t28) && t28 !== a19 && s23(o23, t28, { get: () => r32[t28], enumerable: !(l27 = i24(r32, t28)) || l27.enumerable });
      return o23;
    }, "h");
    var k17 = /* @__PURE__ */ __name((o23) => h17(s23({}, "__esModule", { value: true }), o23), "k");
    var b17 = {};
    d20(b17, { SizableStack: () => n22 });
    module2.exports = k17(b17);
    var m24 = require("@tamagui/core-node");
    var c26 = require_cjs6();
    var f24 = require_Stacks();
    var e27 = require_variants();
    var n22 = (0, m24.styled)(f24.XStack, { name: "SizableStack", variants: { unstyled: { true: { hoverTheme: false, pressTheme: false, focusTheme: false, elevate: false, bordered: false }, false: { backgroundColor: "$background", flexShrink: 1 } }, hoverTheme: e27.hoverTheme, pressTheme: e27.pressTheme, focusTheme: e27.focusTheme, circular: e27.circular, elevate: e27.elevate, bordered: e27.bordered, size: { "...size": c26.getButtonSized } } });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var l27 = Object.defineProperty;
    var d20 = Object.getOwnPropertyDescriptor;
    var m24 = Object.getOwnPropertyNames;
    var u16 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((o23, r32) => {
      for (var s23 in r32)
        l27(o23, s23, { get: r32[s23], enumerable: true });
    }, "b");
    var h17 = /* @__PURE__ */ __name((o23, r32, s23, n22) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let t28 of m24(r32))
          !u16.call(o23, t28) && t28 !== s23 && l27(o23, t28, { get: () => r32[t28], enumerable: !(n22 = d20(r32, t28)) || n22.enumerable });
      return o23;
    }, "h");
    var k17 = /* @__PURE__ */ __name((o23) => h17(l27({}, "__esModule", { value: true }), o23), "k");
    var i24 = {};
    b17(i24, { ThemeableStack: () => S19 });
    module2.exports = k17(i24);
    var c26 = require("@tamagui/core-node");
    var p26 = require_Stacks();
    var e27 = require_variants();
    var a19 = { backgroundColor: "transparent", borderColor: "transparent", shadowColor: "transparent" };
    var S19 = (0, c26.styled)(p26.YStack, { name: "SizableStack", variants: { backgrounded: { true: { backgroundColor: "$background" } }, radiused: e27.radiused, hoverTheme: e27.hoverTheme, pressTheme: e27.pressTheme, focusTheme: e27.focusTheme, circular: e27.circular, padded: e27.padded, elevate: e27.elevate, bordered: e27.bordered, transparent: { true: { backgroundColor: "transparent" } }, chromeless: { true: a19, all: { ...a19, hoverStyle: a19, pressStyle: a19, focusStyle: a19 } } } });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, r32, p26, x19) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let m24 of c26(r32))
          !d20.call(f24, m24) && m24 !== p26 && a19(f24, m24, { get: () => r32[m24], enumerable: !(x19 = b17(r32, m24)) || x19.enumerable });
      return f24;
    }, "t");
    var e27 = /* @__PURE__ */ __name((f24, r32, p26) => (t28(f24, r32, "default"), p26 && t28(p26, r32, "default")), "e");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a19({}, "__esModule", { value: true }), f24), "g");
    var o23 = {};
    module2.exports = g16(o23);
    e27(o23, require_Stacks(), module2.exports);
    e27(o23, require_SizableStack(), module2.exports);
    e27(o23, require_ThemeableStack(), module2.exports);
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var l27 = Object.defineProperty;
    var m24 = Object.getOwnPropertyDescriptor;
    var R17 = Object.getOwnPropertyNames;
    var g16 = Object.prototype.hasOwnProperty;
    var v14 = /* @__PURE__ */ __name((t28, e27) => {
      for (var s23 in e27)
        l27(t28, s23, { get: e27[s23], enumerable: true });
    }, "v");
    var y15 = /* @__PURE__ */ __name((t28, e27, s23, r32) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let o23 of R17(e27))
          !g16.call(t28, o23) && o23 !== s23 && l27(t28, o23, { get: () => e27[o23], enumerable: !(r32 = m24(e27, o23)) || r32.enumerable });
      return t28;
    }, "y");
    var w23 = /* @__PURE__ */ __name((t28) => y15(l27({}, "__esModule", { value: true }), t28), "w");
    var E18 = {};
    v14(E18, { useControllableState: () => A20 });
    module2.exports = w23(E18);
    var T16 = require_cjs3();
    var n22 = require("react");
    var F16 = /* @__PURE__ */ __name((t28) => t28(), "F");
    function A20({ prop: t28, defaultProp: e27, onChange: s23, strategy: r32 = "prop-wins", preventUpdate: o23, transition: C16 }) {
      const [a19, d20] = (0, n22.useState)(t28 ?? e27), i24 = (0, n22.useRef)(a19), c26 = r32 === "prop-wins" && t28 !== void 0, b17 = c26 ? t28 : a19, f24 = (0, T16.useEvent)(s23 || D14), p26 = C16 ? n22.startTransition : F16;
      (0, n22.useEffect)(() => {
        t28 !== void 0 && (i24.current = t28, p26(() => {
          d20(t28);
        }));
      }, [t28]), (0, n22.useEffect)(() => {
        c26 || a19 !== i24.current && (i24.current = a19, f24(a19));
      }, [f24, a19, c26]);
      const S19 = (0, T16.useEvent)((u16) => {
        if (!o23)
          if (c26) {
            const h17 = typeof u16 == "function" ? u16(i24.current) : u16;
            f24(h17);
          } else
            p26(() => {
              d20(u16);
            });
      });
      return [b17, S19];
    }
    __name(A20, "A");
    var D14 = /* @__PURE__ */ __name(() => {
    }, "D");
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_useControllableState(), module2.exports);
  }
});

// node_modules/performant-array-to-tree/build/arrayToTree.min.js
var require_arrayToTree_min = __commonJS({
  "node_modules/performant-array-to-tree/build/arrayToTree.min.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      return (__assign2 = Object.assign || function(e27) {
        for (var r32, t28 = 1, n22 = arguments.length; t28 < n22; t28++)
          for (var o23 in r32 = arguments[t28])
            Object.prototype.hasOwnProperty.call(r32, o23) && (e27[o23] = r32[o23]);
        return e27;
      }).apply(this, arguments);
    };
    var defaultConfig = (Object.defineProperty(exports, "__esModule", { value: true }), { id: "id", parentId: "parentId", dataField: "data", childrenField: "children", throwIfOrphans: false, rootParentIds: { "": !(exports.countNodes = exports.arrayToTree = void 0) }, nestedIds: true, assign: false });
    function arrayToTree(c26, e27) {
      void 0 === e27 && (e27 = {});
      for (var r32, t28 = __assign2(__assign2({}, defaultConfig), e27), n22 = [], o23 = {}, a19 = t28.throwIfOrphans ? /* @__PURE__ */ new Set() : null, s23 = 0, h17 = c26; s23 < h17.length; s23++) {
        var i24 = h17[s23], d20 = t28.nestedIds ? getNestedProperty(i24, t28.id) : i24[t28.id], l27 = t28.nestedIds ? getNestedProperty(i24, t28.parentId) : i24[t28.parentId];
        if (t28.rootParentIds[d20])
          throw new Error("The item array contains a node whose parentId both exists in another node and is in " + '`rootParentIds` (`itemId`: "'.concat(d20, '", `rootParentIds`: ').concat(Object.keys(t28.rootParentIds).map(function(e28) {
            return '"'.concat(e28, '"');
          }).join(", "), ")."));
        Object.prototype.hasOwnProperty.call(o23, d20) || (o23[d20] = ((r32 = {})[t28.childrenField] = [], r32)), a19 && a19.delete(d20), t28.dataField ? o23[d20][t28.dataField] = i24 : t28.assign ? o23[d20] = Object.assign(i24, ((r32 = {})[t28.childrenField] = o23[d20][t28.childrenField], r32)) : o23[d20] = __assign2(__assign2({}, i24), ((i24 = {})[t28.childrenField] = o23[d20][t28.childrenField], i24));
        i24 = o23[d20];
        null == l27 || t28.rootParentIds[l27] ? n22.push(i24) : (Object.prototype.hasOwnProperty.call(o23, l27) || (o23[l27] = ((d20 = {})[t28.childrenField] = [], d20), a19 && a19.add(l27)), o23[l27][t28.childrenField].push(i24));
      }
      if (null != a19 && a19.size)
        throw new Error("The items array contains orphans that point to the following parentIds: " + "[".concat(Array.from(a19), "]. These parentIds do not exist in the items array. Hint: prevent orphans to result ") + "in an error by passing the following option: { throwIfOrphans: false }");
      if (t28.throwIfOrphans && countNodes(n22, t28.childrenField) < Object.keys(o23).length)
        throw new Error("The items array contains nodes with a circular parent/child relationship.");
      return n22;
    }
    __name(arrayToTree, "arrayToTree");
    function countNodes(e27, t28) {
      return e27.reduce(function(e28, r32) {
        return e28 + 1 + (r32[t28] && countNodes(r32[t28], t28));
      }, 0);
    }
    __name(countNodes, "countNodes");
    function getNestedProperty(e27, r32) {
      return r32.split(".").reduce(function(e28, r33) {
        return e28 && e28[r33];
      }, e27);
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
    var e27 = require("react");
    function h17(a19, b17) {
      return a19 === b17 && (0 !== a19 || 1 / a19 === 1 / b17) || a19 !== a19 && b17 !== b17;
    }
    __name(h17, "h");
    var k17 = "function" === typeof Object.is ? Object.is : h17;
    var l27 = e27.useState;
    var m24 = e27.useEffect;
    var n22 = e27.useLayoutEffect;
    var p26 = e27.useDebugValue;
    function q13(a19, b17) {
      var d20 = b17(), f24 = l27({ inst: { value: d20, getSnapshot: b17 } }), c26 = f24[0].inst, g16 = f24[1];
      n22(function() {
        c26.value = d20;
        c26.getSnapshot = b17;
        r32(c26) && g16({ inst: c26 });
      }, [a19, d20, b17]);
      m24(function() {
        r32(c26) && g16({ inst: c26 });
        return a19(function() {
          r32(c26) && g16({ inst: c26 });
        });
      }, [a19]);
      p26(d20);
      return d20;
    }
    __name(q13, "q");
    function r32(a19) {
      var b17 = a19.getSnapshot;
      a19 = a19.value;
      try {
        var d20 = b17();
        return !k17(a19, d20);
      } catch (f24) {
        return true;
      }
    }
    __name(r32, "r");
    function t28(a19, b17) {
      return b17();
    }
    __name(t28, "t");
    var u16 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t28 : q13;
    exports.useSyncExternalStore = void 0 !== e27.useSyncExternalStore ? e27.useSyncExternalStore : u16;
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
        function is(x19, y15) {
          return x19 === y15 && (x19 !== 0 || 1 / x19 === 1 / y15) || x19 !== x19 && y15 !== y15;
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
    var h17 = require("react");
    var n22 = require_shim();
    function p26(a19, b17) {
      return a19 === b17 && (0 !== a19 || 1 / a19 === 1 / b17) || a19 !== a19 && b17 !== b17;
    }
    __name(p26, "p");
    var q13 = "function" === typeof Object.is ? Object.is : p26;
    var r32 = n22.useSyncExternalStore;
    var t28 = h17.useRef;
    var u16 = h17.useEffect;
    var v14 = h17.useMemo;
    var w23 = h17.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(a19, b17, e27, l27, g16) {
      var c26 = t28(null);
      if (null === c26.current) {
        var f24 = { hasValue: false, value: null };
        c26.current = f24;
      } else
        f24 = c26.current;
      c26 = v14(function() {
        function a20(a21) {
          if (!c27) {
            c27 = true;
            d21 = a21;
            a21 = l27(a21);
            if (void 0 !== g16 && f24.hasValue) {
              var b18 = f24.value;
              if (g16(b18, a21))
                return k17 = b18;
            }
            return k17 = a21;
          }
          b18 = k17;
          if (q13(d21, a21))
            return b18;
          var e28 = l27(a21);
          if (void 0 !== g16 && g16(b18, e28))
            return b18;
          d21 = a21;
          return k17 = e28;
        }
        __name(a20, "a");
        var c27 = false, d21, k17, m24 = void 0 === e27 ? null : e27;
        return [function() {
          return a20(b17());
        }, null === m24 ? void 0 : function() {
          return a20(m24());
        }];
      }, [b17, e27, l27, g16]);
      var d20 = r32(a19, c26[0], c26[1]);
      u16(function() {
        f24.hasValue = true;
        f24.value = d20;
      }, [d20]);
      w23(d20);
      return d20;
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
        function is(x19, y15) {
          return x19 === y15 && (x19 !== 0 || 1 / x19 === 1 / y15) || x19 !== x19 && y15 !== y15;
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
    function compareIndexPaths(a19 = "", b17 = "") {
      var _a, _b;
      let aArray = a19.split(".").map(Number);
      let bArray = b17.split(".").map(Number);
      if (aArray.includes(NaN) || bArray.includes(NaN)) {
        throw new Error("Version contains parts that are not numbers");
      }
      const maxLength = Math.max(a19.length, b17.length);
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
        tree.children.sort((a19, b17) => compareIndexPaths(a19.indexPathString, b17.indexPathString));
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
      const sortedEntries = Array.from(treeMap.entries()).sort((a19, b17) => compareIndexPaths(a19[0], b17[0]));
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
    var J16 = Object.create;
    var c26 = Object.defineProperty;
    var K11 = Object.getOwnPropertyDescriptor;
    var Q10 = Object.getOwnPropertyNames;
    var Z10 = Object.getPrototypeOf;
    var ee11 = Object.prototype.hasOwnProperty;
    var oe9 = /* @__PURE__ */ __name((o23, r32) => {
      for (var e27 in r32)
        c26(o23, e27, { get: r32[e27], enumerable: true });
    }, "oe");
    var C16 = /* @__PURE__ */ __name((o23, r32, e27, t28) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let s23 of Q10(r32))
          !ee11.call(o23, s23) && s23 !== e27 && c26(o23, s23, { get: () => r32[s23], enumerable: !(t28 = K11(r32, s23)) || t28.enumerable });
      return o23;
    }, "C");
    var re5 = /* @__PURE__ */ __name((o23, r32, e27) => (e27 = o23 != null ? J16(Z10(o23)) : {}, C16(r32 || !o23 || !o23.__esModule ? c26(e27, "default", { value: o23, enumerable: true }) : e27, o23)), "re");
    var te9 = /* @__PURE__ */ __name((o23) => C16(c26({}, "__esModule", { value: true }), o23), "te");
    var pe4 = {};
    oe9(pe4, { Group: () => D14, GroupFrame: () => T16, XGroup: () => le5, YGroup: () => de7, useGroupItem: () => _13 });
    module2.exports = te9(pe4);
    var p26 = require("react/jsx-runtime");
    var n22 = require("@tamagui/core-node");
    var w23 = require_cjs13();
    var z14 = require_cjs14();
    var V15 = require_cjs15();
    var a19 = re5(require("react"));
    var U10 = require("react-native-web-lite");
    var m24 = require_dist3();
    var v14 = "Group";
    var [se6, ye5] = (0, w23.createContextScope)(v14);
    var [ne6, ae4] = se6(v14);
    var T16 = (0, n22.styled)(z14.ThemeableStack, { name: "GroupFrame", variants: { unstyled: { false: { size: "$true", y: 0, backgroundColor: "$background" } }, size: (o23, { tokens: r32 }) => ({ borderRadius: r32.radius[o23] ?? o23 ?? r32.radius.$true }) }, defaultVariants: { unstyled: false } });
    function B12(o23) {
      return (0, n22.withStaticProperties)((0, a19.forwardRef)((r32, e27) => {
        const t28 = (0, n22.useMediaPropsActive)(r32), { __scopeGroup: s23, children: l27, space: R17, size: d20 = "$true", spaceDirection: b17, separator: M17, scrollable: me5, axis: k17 = o23 ? "vertical" : "horizontal", orientation: u16 = k17, disabled: G16, disablePassBorderRadius: F16, borderRadius: h17, forceUseItem: A20, ...$8 } = (0, n22.getExpandedShorthands)(t28), L15 = u16 === "vertical", [be4, x19] = (0, V15.useControllableState)({ defaultProp: A20 ? 1 : 0 }), I12 = true, f24 = h17 ?? (d20 ? (0, n22.getVariableValue)((0, n22.getTokens)().radius[d20]) - 1 : void 0), P17 = F16 ?? !(f24 !== void 0);
        I12 || console.log("screw up!");
        const y15 = a19.Children.toArray(l27), O12 = I12 ? l27 : y15.map((i24, g16) => {
          if (!(0, a19.isValidElement)(i24))
            return i24;
          const X9 = i24.props.disabled ?? G16, Y11 = g16 === 0, j15 = g16 === y15.length - 1, S19 = P17 === true ? null : E18({ isFirst: Y11, isLast: j15, radius: f24, vertical: L15, disable: P17 }), q13 = { disabled: X9, ...(0, n22.isTamaguiElement)(i24) ? S19 : { style: S19 } };
          return ce5(i24, q13);
        }), N12 = (0, m24.useIndexedChildren)((0, n22.spacedChildren)({ direction: b17, separator: M17, space: R17, children: O12 })), H14 = a19.default.useCallback(() => x19((i24) => i24 + 1), []), W14 = a19.default.useCallback(() => x19((i24) => i24 - 1), []);
        return (0, p26.jsx)(ne6, { disablePassBorderRadius: P17, vertical: u16 === "vertical", radius: f24, disabled: G16, onItemMount: H14, onItemUnmount: W14, scope: s23, children: (0, p26.jsx)(T16, { ref: e27, size: d20, flexDirection: u16 === "horizontal" ? "row" : "column", borderRadius: h17, ...$8, children: ue3({ ...t28, orientation: u16 }, N12) }) });
      }), { Item: ie5 });
    }
    __name(B12, "B");
    var ie5 = /* @__PURE__ */ __name((o23) => {
      var s23;
      const { __scopeGroup: r32, children: e27 } = o23, t28 = _13({ disabled: (0, a19.isValidElement)(e27) ? e27.props.disabled : void 0 }, r32);
      return (0, a19.isValidElement)(e27) ? (0, n22.isTamaguiElement)(e27) ? a19.default.cloneElement(e27, t28) : a19.default.cloneElement(e27, { style: { ...(s23 = e27.props) == null ? void 0 : s23.style, ...t28 } }) : e27;
    }, "ie");
    var _13 = /* @__PURE__ */ __name((o23, r32) => {
      const e27 = (0, m24.useIndex)(), t28 = ae4("GroupItem", r32);
      if (a19.default.useEffect(() => (t28.onItemMount(), () => {
        t28.onItemUnmount();
      }), []), !e27)
        throw Error("<Group.Item/> should only be used within a <Group/>");
      const s23 = e27.index === 0, l27 = e27.index === e27.maxIndex;
      let d20 = { disabled: o23.disabled ?? t28.disabled };
      if (t28.disablePassBorderRadius !== true) {
        const b17 = E18({ radius: t28.radius, isFirst: s23, isLast: l27, vertical: t28.vertical, disable: t28.disablePassBorderRadius });
        return { ...d20, ...b17 };
      }
      return d20;
    }, "_");
    var D14 = B12(true);
    var de7 = D14;
    var le5 = B12(false);
    var ue3 = /* @__PURE__ */ __name(({ scrollable: o23, orientation: r32, showScrollIndicator: e27 = false }, t28) => o23 ? (0, p26.jsx)(U10.ScrollView, { ...r32 === "vertical" && { showsVerticalScrollIndicator: e27 }, ...r32 === "horizontal" && { horizontal: true, showsHorizontalScrollIndicator: e27 }, children: t28 }) : t28, "ue");
    var E18 = /* @__PURE__ */ __name(({ isFirst: o23, isLast: r32, radius: e27, vertical: t28, disable: s23 }) => ({ borderTopLeftRadius: o23 && s23 !== "top" && s23 !== "start" ? e27 : 0, borderTopRightRadius: s23 !== "top" && s23 !== "end" && (t28 && o23 || !t28 && r32) ? e27 : 0, borderBottomLeftRadius: s23 !== "bottom" && s23 !== "start" && (t28 && r32 || !t28 && o23) ? e27 : 0, borderBottomRightRadius: r32 && s23 !== "bottom" && s23 !== "end" ? e27 : 0 }), "E");
    var ce5 = /* @__PURE__ */ __name((o23, r32) => {
      const e27 = (0, n22.mergeProps)(o23.props, r32, false, (0, n22.getConfig)().shorthands)[0];
      return a19.default.cloneElement({ ...o23, props: null }, e27);
    }, "ce");
  }
});

// node_modules/@tamagui/group/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "node_modules/@tamagui/group/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_Group(), module2.exports);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var r32 = Object.defineProperty;
    var c26 = Object.getOwnPropertyDescriptor;
    var n22 = Object.getOwnPropertyNames;
    var u16 = Object.prototype.hasOwnProperty;
    var a19 = /* @__PURE__ */ __name((o23, s23) => {
      for (var e27 in s23)
        r32(o23, e27, { get: s23[e27], enumerable: true });
    }, "a");
    var b17 = /* @__PURE__ */ __name((o23, s23, e27, i24) => {
      if (s23 && typeof s23 == "object" || typeof s23 == "function")
        for (let t28 of n22(s23))
          !u16.call(o23, t28) && t28 !== e27 && r32(o23, t28, { get: () => s23[t28], enumerable: !(i24 = c26(s23, t28)) || i24.enumerable });
      return o23;
    }, "b");
    var g16 = /* @__PURE__ */ __name((o23) => b17(r32({}, "__esModule", { value: true }), o23), "g");
    var d20 = {};
    a19(d20, { focusFocusable: () => F16, registerFocusable: () => l27, unregisterFocusable: () => p26 });
    module2.exports = g16(d20);
    var l27 = /* @__PURE__ */ __name((o23, s23) => () => {
    }, "l");
    var p26 = /* @__PURE__ */ __name((o23) => {
    }, "p");
    var F16 = /* @__PURE__ */ __name((o23) => {
    }, "F");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var d20 = Object.defineProperty;
    var R17 = Object.getOwnPropertyDescriptor;
    var h17 = Object.getOwnPropertyNames;
    var A20 = Object.prototype.hasOwnProperty;
    var I12 = /* @__PURE__ */ __name((t28, c26) => {
      for (var e27 in c26)
        d20(t28, e27, { get: c26[e27], enumerable: true });
    }, "I");
    var S19 = /* @__PURE__ */ __name((t28, c26, e27, r32) => {
      if (c26 && typeof c26 == "object" || typeof c26 == "function")
        for (let f24 of h17(c26))
          !A20.call(t28, f24) && f24 !== e27 && d20(t28, f24, { get: () => c26[f24], enumerable: !(r32 = R17(c26, f24)) || r32.enumerable });
      return t28;
    }, "S");
    var V15 = /* @__PURE__ */ __name((t28) => S19(d20({}, "__esModule", { value: true }), t28), "V");
    var y15 = {};
    I12(y15, { focusableInputHOC: () => b17 });
    module2.exports = V15(y15);
    var g16 = require("react/jsx-runtime");
    var l27 = require_cjs2();
    var a19 = require("@tamagui/core-node");
    var o23 = require("react");
    var m24 = require_registerFocusable();
    function b17(t28) {
      return t28.extractable((0, o23.forwardRef)((e27, r32) => {
        const f24 = (0, a19.isTamaguiComponent)(t28) && t28.staticConfig.isInput, s23 = (0, o23.useRef)(e27.value || e27.defaultValue || ""), i24 = (0, o23.useRef)(), C16 = (0, o23.useCallback)((n22) => {
          var u16;
          e27.id && n22 && ((u16 = i24.current) == null || u16.call(i24), i24.current = (0, m24.registerFocusable)(e27.id, { focus: n22.focus, ...f24 && { focusAndSelect() {
            n22.focus(), n22.setSelection && typeof s23.current == "string" && n22.setSelection(0, s23.current.length);
          } } }));
        }, [f24, e27.id]), T16 = (0, l27.composeRefs)(r32, C16);
        (0, o23.useEffect)(() => () => {
          var n22;
          (n22 = i24.current) == null || n22.call(i24);
        }, []);
        const v14 = (0, a19.useEvent)((n22) => {
          var u16;
          s23.current = n22, (u16 = e27.onChangeText) == null || u16.call(e27, n22);
        }), x19 = f24 ? { ...e27, onChangeText: v14 } : e27;
        return (0, g16.jsx)(t28, { ref: T16, ...x19 });
      }));
    }
    __name(b17, "b");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var t28 = Object.defineProperty;
    var s23 = Object.getOwnPropertyDescriptor;
    var F16 = Object.getOwnPropertyNames;
    var f24 = Object.prototype.hasOwnProperty;
    var i24 = /* @__PURE__ */ __name((o23, c26, u16, n22) => {
      if (c26 && typeof c26 == "object" || typeof c26 == "function")
        for (let e27 of F16(c26))
          !f24.call(o23, e27) && e27 !== u16 && t28(o23, e27, { get: () => c26[e27], enumerable: !(n22 = s23(c26, e27)) || n22.enumerable });
      return o23;
    }, "i");
    var l27 = /* @__PURE__ */ __name((o23) => i24(t28({}, "__esModule", { value: true }), o23), "l");
    var p26 = {};
    module2.exports = l27(p26);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, r32, p26, x19) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let m24 of c26(r32))
          !d20.call(f24, m24) && m24 !== p26 && a19(f24, m24, { get: () => r32[m24], enumerable: !(x19 = b17(r32, m24)) || x19.enumerable });
      return f24;
    }, "t");
    var e27 = /* @__PURE__ */ __name((f24, r32, p26) => (t28(f24, r32, "default"), p26 && t28(p26, r32, "default")), "e");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a19({}, "__esModule", { value: true }), f24), "g");
    var o23 = {};
    module2.exports = g16(o23);
    e27(o23, require_registerFocusable(), module2.exports);
    e27(o23, require_focusableInputHOC(), module2.exports);
    e27(o23, require_focusable(), module2.exports);
  }
});

// node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var r32 = Object.defineProperty;
    var l27 = Object.getOwnPropertyDescriptor;
    var n22 = Object.getOwnPropertyNames;
    var x19 = Object.prototype.hasOwnProperty;
    var z14 = /* @__PURE__ */ __name((t28, e27) => {
      for (var a19 in e27)
        r32(t28, a19, { get: e27[a19], enumerable: true });
    }, "z");
    var m24 = /* @__PURE__ */ __name((t28, e27, a19, s23) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let o23 of n22(e27))
          !x19.call(t28, o23) && o23 !== a19 && r32(t28, o23, { get: () => e27[o23], enumerable: !(s23 = l27(e27, o23)) || s23.enumerable });
      return t28;
    }, "m");
    var b17 = /* @__PURE__ */ __name((t28) => m24(r32({}, "__esModule", { value: true }), t28), "b");
    var y15 = {};
    z14(y15, { SizableText: () => f24 });
    module2.exports = b17(y15);
    var p26 = require_cjs7();
    var i24 = require("@tamagui/core-node");
    var f24 = (0, i24.styled)(i24.Text, { name: "SizableText", fontFamily: "$body", variants: { size: p26.getFontSized }, defaultVariants: { size: "$true" } });
  }
});

// node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var t28 = Object.defineProperty;
    var g16 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var m24 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((a19, r32) => {
      for (var e27 in r32)
        t28(a19, e27, { get: r32[e27], enumerable: true });
    }, "c");
    var h17 = /* @__PURE__ */ __name((a19, r32, e27, p26) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let o23 of l27(r32))
          !m24.call(a19, o23) && o23 !== e27 && t28(a19, o23, { get: () => r32[o23], enumerable: !(p26 = g16(r32, o23)) || p26.enumerable });
      return a19;
    }, "h");
    var i24 = /* @__PURE__ */ __name((a19) => h17(t28({}, "__esModule", { value: true }), a19), "i");
    var u16 = {};
    c26(u16, { Paragraph: () => f24 });
    module2.exports = i24(u16);
    var s23 = require("@tamagui/core-node");
    var P17 = require_SizableText();
    var f24 = (0, s23.styled)(P17.SizableText, { name: "Paragraph", tag: "p", userSelect: "auto", color: "$color", size: "$true" });
  }
});

// node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var i24 = Object.defineProperty;
    var m24 = Object.getOwnPropertyDescriptor;
    var g16 = Object.getOwnPropertyNames;
    var p26 = Object.prototype.hasOwnProperty;
    var c26 = /* @__PURE__ */ __name((a19, e27) => {
      for (var s23 in e27)
        i24(a19, s23, { get: e27[s23], enumerable: true });
    }, "c");
    var h17 = /* @__PURE__ */ __name((a19, e27, s23, r32) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let o23 of g16(e27))
          !p26.call(a19, o23) && o23 !== s23 && i24(a19, o23, { get: () => e27[o23], enumerable: !(r32 = m24(e27, o23)) || r32.enumerable });
      return a19;
    }, "h");
    var $8 = /* @__PURE__ */ __name((a19) => h17(i24({}, "__esModule", { value: true }), a19), "$");
    var b17 = {};
    c26(b17, { H1: () => x19, H2: () => z14, H3: () => d20, H4: () => l27, H5: () => f24, H6: () => y15, Heading: () => n22 });
    module2.exports = $8(b17);
    var t28 = require("@tamagui/core-node");
    var H14 = require_Paragraph();
    var n22 = (0, t28.styled)(H14.Paragraph, { tag: "span", name: "Heading", accessibilityRole: "header", fontFamily: "$heading", size: "$8", margin: 0 });
    var x19 = (0, t28.styled)(n22, { name: "H1", tag: "h1", size: "$10" });
    var z14 = (0, t28.styled)(n22, { name: "H2", tag: "h2", size: "$9" });
    var d20 = (0, t28.styled)(n22, { name: "H3", tag: "h3", size: "$8" });
    var l27 = (0, t28.styled)(n22, { name: "H4", tag: "h4", size: "$7" });
    var f24 = (0, t28.styled)(n22, { name: "H5", tag: "h5", size: "$6" });
    var y15 = (0, t28.styled)(n22, { name: "H6", tag: "h6", size: "$5" });
  }
});

// node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var A20 = Object.create;
    var f24 = Object.defineProperty;
    var W14 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var w23 = Object.getPrototypeOf;
    var F16 = Object.prototype.hasOwnProperty;
    var I12 = /* @__PURE__ */ __name((t28, e27) => {
      for (var n22 in e27)
        f24(t28, n22, { get: e27[n22], enumerable: true });
    }, "I");
    var T16 = /* @__PURE__ */ __name((t28, e27, n22, s23) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let l27 of b17(e27))
          !F16.call(t28, l27) && l27 !== n22 && f24(t28, l27, { get: () => e27[l27], enumerable: !(s23 = W14(e27, l27)) || s23.enumerable });
      return t28;
    }, "T");
    var N12 = /* @__PURE__ */ __name((t28, e27, n22) => (n22 = t28 != null ? A20(w23(t28)) : {}, T16(e27 || !t28 || !t28.__esModule ? f24(n22, "default", { value: t28, enumerable: true }) : n22, t28)), "N");
    var q13 = /* @__PURE__ */ __name((t28) => T16(f24({}, "__esModule", { value: true }), t28), "q");
    var B12 = {};
    I12(B12, { wrapChildrenInText: () => v14 });
    module2.exports = q13(B12);
    var P17 = require("react/jsx-runtime");
    var C16 = N12(require("react"));
    function v14(t28, e27, n22) {
      const { children: s23, textProps: l27, size: p26, noTextWrap: R17, color: h17, fontFamily: g16, fontSize: y15, fontWeight: S19, letterSpacing: d20, textAlign: x19, fontStyle: m24 } = e27;
      if (R17 || !s23)
        return [s23];
      const k17 = C16.default.Children.toArray(s23), o23 = [];
      let c26 = false;
      const i24 = { ...n22 };
      h17 && (i24.color = h17), g16 && (i24.fontFamily = g16), y15 && (i24.fontSize = y15), S19 && (i24.fontWeight = S19), d20 && (i24.letterSpacing = d20), x19 && (i24.textAlign = x19), p26 && (i24.size = p26), m24 && (i24.fontStyle = m24);
      function u16() {
        if (!c26)
          return;
        const r32 = o23.length - 1, a19 = o23[r32];
        o23[r32] = (0, P17.jsx)(t28, { ...i24, ...l27, children: a19 }, r32);
      }
      __name(u16, "u");
      for (const r32 of k17) {
        const a19 = o23[o23.length - 1], z14 = typeof r32 == "string";
        z14 ? c26 ? a19.push(r32) : o23.push([r32]) : (u16(), o23.push(r32)), c26 = z14;
      }
      return u16(), o23;
    }
    __name(v14, "v");
  }
});

// node_modules/@tamagui/text/dist/cjs/types.js
var require_types2 = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var i24 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var p26 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var n22 = /* @__PURE__ */ __name((e27, t28, r32, l27) => {
      if (t28 && typeof t28 == "object" || typeof t28 == "function")
        for (let o23 of p26(t28))
          !S19.call(e27, o23) && o23 !== r32 && i24(e27, o23, { get: () => t28[o23], enumerable: !(l27 = a19(t28, o23)) || l27.enumerable });
      return e27;
    }, "n");
    var x19 = /* @__PURE__ */ __name((e27) => n22(i24({}, "__esModule", { value: true }), e27), "x");
    var P17 = {};
    module2.exports = x19(P17);
  }
});

// node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var t28 = /* @__PURE__ */ __name((f24, e27, p26, x19) => {
      if (e27 && typeof e27 == "object" || typeof e27 == "function")
        for (let m24 of c26(e27))
          !d20.call(f24, m24) && m24 !== p26 && a19(f24, m24, { get: () => e27[m24], enumerable: !(x19 = b17(e27, m24)) || x19.enumerable });
      return f24;
    }, "t");
    var r32 = /* @__PURE__ */ __name((f24, e27, p26) => (t28(f24, e27, "default"), p26 && t28(p26, e27, "default")), "r");
    var g16 = /* @__PURE__ */ __name((f24) => t28(a19({}, "__esModule", { value: true }), f24), "g");
    var o23 = {};
    module2.exports = g16(o23);
    r32(o23, require_SizableText(), module2.exports);
    r32(o23, require_Paragraph(), module2.exports);
    r32(o23, require_Headings(), module2.exports);
    r32(o23, require_wrapChildrenInText(), module2.exports);
    r32(o23, require_types2(), module2.exports);
  }
});

// node_modules/@tamagui/list-item/dist/cjs/ListItem.js
var require_ListItem = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/ListItem.js"(exports, module2) {
    "use strict";
    var x19 = Object.defineProperty;
    var H14 = Object.getOwnPropertyDescriptor;
    var M17 = Object.getOwnPropertyNames;
    var Y11 = Object.prototype.hasOwnProperty;
    var D14 = /* @__PURE__ */ __name((o23, n22) => {
      for (var i24 in n22)
        x19(o23, i24, { get: n22[i24], enumerable: true });
    }, "D");
    var J16 = /* @__PURE__ */ __name((o23, n22, i24, l27) => {
      if (n22 && typeof n22 == "object" || typeof n22 == "function")
        for (let s23 of M17(n22))
          !Y11.call(o23, s23) && s23 !== i24 && x19(o23, s23, { get: () => n22[s23], enumerable: !(l27 = H14(n22, s23)) || l27.enumerable });
      return o23;
    }, "J");
    var O12 = /* @__PURE__ */ __name((o23) => J16(x19({}, "__esModule", { value: true }), o23), "O");
    var q13 = {};
    D14(q13, { ListItem: () => j15, ListItemFrame: () => I12, ListItemSubtitle: () => c26, ListItemText: () => r32, ListItemTitle: () => b17, listItemStaticConfig: () => k17, useListItem: () => $8 });
    module2.exports = O12(q13);
    var t28 = require("react/jsx-runtime");
    var e27 = require("@tamagui/core-node");
    var C16 = require_cjs9();
    var p26 = require_cjs12();
    var m24 = require_cjs14();
    var u16 = require_cjs18();
    var F16 = require("react");
    var L15 = "ListItem";
    var I12 = (0, e27.styled)(m24.ThemeableStack, { name: L15, tag: "li", variants: { unstyled: { false: { size: "$true", alignItems: "center", flexWrap: "nowrap", width: "100%", borderColor: "$borderColor", maxWidth: "100%", overflow: "hidden", flexDirection: "row", backgroundColor: "$backgroundStrong" } }, size: { "...size": (o23, { tokens: n22 }) => ({ minHeight: n22.size[o23], paddingHorizontal: n22.space[o23], paddingVertical: (0, p26.getSpace)(o23, -2) }) }, active: { true: { hoverStyle: { backgroundColor: "$background" } } }, disabled: { true: { opacity: 0.5, pointerEvents: "none" } } }, defaultVariants: { unstyled: false } });
    var r32 = (0, e27.styled)(u16.SizableText, { name: "ListItemText", variants: { unstyled: { false: { color: "$color", userSelect: "none", flexGrow: 1, flexShrink: 1, ellipse: true, cursor: "default" } } }, defaultVariants: { unstyled: false } });
    var c26 = (0, e27.styled)(r32, { name: "ListItemSubtitle", variants: { unstyled: { false: { opacity: 0.6, maxWidth: "100%", size: "$3", color: "$color" } } }, defaultVariants: { unstyled: false } });
    var b17 = (0, e27.styled)(r32, { name: "ListItemTitle" });
    var $8 = /* @__PURE__ */ __name((o23, { Text: n22 = r32, Subtitle: i24 = c26, Title: l27 = b17 } = { Text: r32, Subtitle: c26, Title: b17 }) => {
      const { children: s23, icon: w23, iconAfter: A20, noTextWrap: T16, theme: B12, space: K11, spaceFlex: Q10, scaleIcon: W14 = 1, scaleSpace: v14 = 1, subTitle: a19, color: R17, fontWeight: U10, letterSpacing: Z10, fontSize: _13, fontFamily: V15, textAlign: ee11, textProps: te9, title: d20, ...E18 } = o23, f24 = (0, e27.useMediaPropsActive)(o23), S19 = f24.size || "$true", N12 = `$${+String(S19).replace("$", "") - 1}`, g16 = (0, C16.getFontSize)(S19) * W14, G16 = (0, p26.useGetThemedIcon)({ size: g16, color: R17 }), [y15, h17] = [w23, A20].map(G16), z14 = (0, e27.getVariableValue)((0, e27.getTokens)().space[f24.space] ?? g16) * v14, P17 = (0, u16.wrapChildrenInText)(n22, f24);
      return { props: { fontFamily: V15, ...E18, children: (0, t28.jsxs)(t28.Fragment, { children: [y15 ? (0, t28.jsxs)(t28.Fragment, { children: [y15, (0, t28.jsx)(e27.Spacer, { size: z14 })] }) : null, d20 || a19 ? (0, t28.jsxs)(m24.YStack, { flex: 1, children: [T16 === "all" ? d20 : (0, t28.jsx)(l27, { size: S19, children: d20 }), a19 ? (0, t28.jsx)(t28.Fragment, { children: typeof a19 == "string" && T16 !== "all" ? (0, t28.jsx)(i24, { size: N12, children: a19 }) : a19 }) : null, P17] }) : P17, h17 ? (0, t28.jsxs)(t28.Fragment, { children: [(0, t28.jsx)(e27.Spacer, { size: z14 }), h17] }) : null] }) } };
    }, "$");
    var X9 = (0, F16.forwardRef)((o23, n22) => {
      const { props: i24 } = $8(o23);
      return (0, t28.jsx)(I12, { ref: n22, justifyContent: "space-between", ...i24 });
    });
    var k17 = { inlineProps: /* @__PURE__ */ new Set(["color", "fontWeight", "fontSize", "fontFamily", "letterSpacing", "textAlign"]) };
    var j15 = (0, e27.withStaticProperties)(I12.extractable((0, e27.themeable)(X9, { componentName: L15 }), k17), { Text: r32, Subtitle: c26 });
  }
});

// node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c26 = Object.getOwnPropertyNames;
    var d20 = Object.prototype.hasOwnProperty;
    var p26 = /* @__PURE__ */ __name((r32, o23, f24, x19) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e27 of c26(o23))
          !d20.call(r32, e27) && e27 !== f24 && a19(r32, e27, { get: () => o23[e27], enumerable: !(x19 = b17(o23, e27)) || x19.enumerable });
      return r32;
    }, "p");
    var t28 = /* @__PURE__ */ __name((r32, o23, f24) => (p26(r32, o23, "default"), f24 && p26(f24, o23, "default")), "t");
    var g16 = /* @__PURE__ */ __name((r32) => p26(a19({}, "__esModule", { value: true }), r32), "g");
    var m24 = {};
    module2.exports = g16(m24);
    t28(m24, require_ListItem(), module2.exports);
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
    var sortOrderedTabbables = /* @__PURE__ */ __name(function sortOrderedTabbables2(a19, b17) {
      return a19.tabIndex === b17.tabIndex ? a19.documentOrder - b17.documentOrder : a19.tabIndex - b17.tabIndex;
    }, "sortOrderedTabbables");
    var isInput = /* @__PURE__ */ __name(function isInput2(node) {
      return node.tagName === "INPUT";
    }, "isInput");
    var isHiddenInput = /* @__PURE__ */ __name(function isHiddenInput2(node) {
      return isInput(node) && node.type === "hidden";
    }, "isHiddenInput");
    var isDetailsWithSummary = /* @__PURE__ */ __name(function isDetailsWithSummary2(node) {
      var r32 = node.tagName === "DETAILS" && Array.prototype.slice.apply(node.children).some(function(child) {
        return child.tagName === "SUMMARY";
      });
      return r32;
    }, "isDetailsWithSummary");
    var getCheckedRadio = /* @__PURE__ */ __name(function getCheckedRadio2(nodes, form) {
      for (var i24 = 0; i24 < nodes.length; i24++) {
        if (nodes[i24].checked && nodes[i24].form === form) {
          return nodes[i24];
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
            for (var i24 = 0; i24 < parentNode.children.length; i24++) {
              var child = parentNode.children.item(i24);
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
      candidates.forEach(function(item, i24) {
        var isScope = !!item.scopeParent;
        var element = isScope ? item.scopeParent : item;
        var candidateTabindex = getTabindex(element, isScope);
        var elements = isScope ? sortByOrder2(item.candidates) : element;
        if (candidateTabindex === 0) {
          isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
        } else {
          orderedTabbables.push({
            documentOrder: i24,
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
    var e27;
    var r32;
    var u16 = (e27 = {}, r32 = require("react"), Object.keys(r32).forEach(function(u17) {
      "default" !== u17 && "__esModule" !== u17 && Object.defineProperty(e27, u17, { enumerable: true, get: function() {
        return r32[u17];
      } });
    }), e27);
    exports.usePrevious = function(e28) {
      const r33 = u16.useRef({ value: e28, previous: e28 });
      return u16.useMemo(() => (r33.current.value !== e28 && (r33.current.previous = r33.current.value, r33.current.value = e28), r33.current.previous), [e28]);
    };
  }
});

// src/tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);

// node_modules/@tamagui/shorthands/dist/esm/index.mjs
var o = { ussel: "userSelect", cur: "cursor", pe: "pointerEvents", col: "color", ff: "fontFamily", fos: "fontSize", fost: "fontStyle", fow: "fontWeight", ls: "letterSpacing", lh: "lineHeight", ta: "textAlign", tt: "textTransform", ww: "wordWrap", ac: "alignContent", ai: "alignItems", als: "alignSelf", b: "bottom", bc: "backgroundColor", bg: "backgroundColor", bbc: "borderBottomColor", bblr: "borderBottomLeftRadius", bbrr: "borderBottomRightRadius", bbw: "borderBottomWidth", blc: "borderLeftColor", blw: "borderLeftWidth", boc: "borderColor", br: "borderRadius", bs: "borderStyle", brw: "borderRightWidth", brc: "borderRightColor", btc: "borderTopColor", btlr: "borderTopLeftRadius", btrr: "borderTopRightRadius", btw: "borderTopWidth", bw: "borderWidth", dsp: "display", f: "flex", fb: "flexBasis", fd: "flexDirection", fg: "flexGrow", fs: "flexShrink", fw: "flexWrap", h: "height", jc: "justifyContent", l: "left", m: "margin", mah: "maxHeight", maw: "maxWidth", mb: "marginBottom", mih: "minHeight", miw: "minWidth", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mx: "marginHorizontal", my: "marginVertical", o: "opacity", ov: "overflow", p: "padding", pb: "paddingBottom", pl: "paddingLeft", pos: "position", pr: "paddingRight", pt: "paddingTop", px: "paddingHorizontal", py: "paddingVertical", r: "right", shac: "shadowColor", shar: "shadowRadius", shof: "shadowOffset", shop: "shadowOpacity", t: "top", w: "width", zi: "zIndex" };
o.bls = "borderLeftStyle", o.brs = "borderRightStyle", o.bts = "borderTopStyle", o.bbs = "borderBottomStyle", o.bxs = "boxSizing", o.bxsh = "boxShadow", o.ox = "overflowX", o.oy = "overflowY";

// node_modules/@tamagui/create-theme/dist/esm/index.js
var k = /* @__PURE__ */ new WeakMap();
function d(s23, e27, r32) {
  const t28 = { ...Object.fromEntries(Object.entries(e27).map(([n22, a19]) => [n22, w(s23, a19)])), ...r32 == null ? void 0 : r32.nonInheritedValues };
  return k.set(t28, { palette: s23, definition: e27, cache: /* @__PURE__ */ new Map() }), t28;
}
__name(d, "d");
var w = /* @__PURE__ */ __name((s23, e27) => {
  if (typeof e27 == "string")
    return e27;
  const r32 = s23.length - 1, n22 = (e27 === 0 ? !x(e27) : e27 >= 0) ? e27 : r32 + e27, a19 = Math.min(Math.max(0, n22), r32);
  return s23[a19];
}, "w");
function E(s23, e27) {
  const r32 = { ...s23 };
  for (const t28 in s23) {
    const n22 = e27(t28, s23[t28]);
    for (const a19 in n22)
      r32[`${t28}_${a19}`] = n22[a19];
  }
  return r32;
}
__name(E, "E");
var u = /* @__PURE__ */ __name(({ inverse: s23 } = {}) => (e27, { skip: r32, max: t28, palette: n22, min: a19 = 0, strength: o23 = 1 }) => {
  const i24 = Object.entries(e27), m24 = t28 ?? (n22 ? Object.values(n22).length - 1 : 1 / 0), y15 = {};
  for (const [f24, c26] of i24) {
    if (typeof c26 == "string" || r32 && f24 in r32)
      continue;
    const p26 = c26 === 0 ? !x(c26) : c26 >= 0, T16 = p26 ? 1 : -1, M17 = s23 ? -1 : 1, g16 = c26 + o23 * T16 * M17, b17 = p26 ? Math.max(a19, Math.min(m24, g16)) : Math.min(-a19, Math.max(-m24, g16));
    y15[f24] = b17;
  }
  return y15;
}, "u");
var C = /* @__PURE__ */ __name(() => u(), "C");
var P = /* @__PURE__ */ __name(() => u({ inverse: true }), "P");
function x(s23) {
  return 1 / s23 === -1 / 0;
}
__name(x, "x");
var l = /* @__PURE__ */ new WeakMap();
function h(s23, e27, r32 = {}) {
  const t28 = k.get(s23);
  if (!t28)
    throw new Error(process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2");
  const n22 = l.get(e27) ?? `${Math.random()}`;
  l.set(e27, n22);
  const a19 = `${n22}${JSON.stringify(r32)}`;
  if (t28.cache.has(a19))
    return t28.cache.get(a19);
  const o23 = e27(t28.definition, { palette: t28.palette, ...r32 }), i24 = d(t28.palette, o23);
  return t28.cache.set(a19, i24), i24;
}
__name(h, "h");
if (process.env.NODE_ENV === "development") {
  const s23 = ["0", "1", "2", "3", "-3", "-2", "-1", "-0"], e27 = { bg: 1, fg: -1 }, r32 = P(), t28 = C(), n22 = d(s23, e27);
  if (n22.bg !== "1" || n22.fg !== "-1")
    throw "\u274C";
  const a19 = h(n22, r32);
  if (a19.bg !== "0" || a19.fg !== "-0")
    throw "\u274C";
  const o23 = h(n22, t28);
  if (o23.bg !== "2" || o23.fg !== "-2")
    throw "\u274C";
  const i24 = h(n22, t28, { strength: 2 });
  if (i24.bg !== "3" || i24.fg !== "-3")
    throw "\u274C";
}

// node_modules/@tamagui/colors/dist/esm/dark/blue.js
var l2 = { blue1: "hsl(212, 35.0%, 9.2%)", blue2: "hsl(216, 50.0%, 11.8%)", blue3: "hsl(214, 59.4%, 15.3%)", blue4: "hsl(214, 65.8%, 17.9%)", blue5: "hsl(213, 71.2%, 20.2%)", blue6: "hsl(212, 77.4%, 23.1%)", blue7: "hsl(211, 85.1%, 27.4%)", blue8: "hsl(211, 89.7%, 34.1%)", blue9: "hsl(206, 100%, 50.0%)", blue10: "hsl(209, 100%, 60.6%)", blue11: "hsl(210, 100%, 66.1%)", blue12: "hsl(206, 98.0%, 95.8%)" };

// node_modules/@tamagui/colors/dist/esm/dark/gray.js
var r = { gray1: "hsl(0, 0%, 8.5%)", gray2: "hsl(0, 0%, 11.0%)", gray3: "hsl(0, 0%, 13.6%)", gray4: "hsl(0, 0%, 15.8%)", gray5: "hsl(0, 0%, 17.9%)", gray6: "hsl(0, 0%, 20.5%)", gray7: "hsl(0, 0%, 24.3%)", gray8: "hsl(0, 0%, 31.2%)", gray9: "hsl(0, 0%, 43.9%)", gray10: "hsl(0, 0%, 49.4%)", gray11: "hsl(0, 0%, 62.8%)", gray12: "hsl(0, 0%, 93.0%)" };

// node_modules/@tamagui/colors/dist/esm/dark/green.js
var e = { green1: "hsl(146, 30.0%, 7.4%)", green2: "hsl(155, 44.2%, 8.4%)", green3: "hsl(155, 46.7%, 10.9%)", green4: "hsl(154, 48.4%, 12.9%)", green5: "hsl(154, 49.7%, 14.9%)", green6: "hsl(154, 50.9%, 17.6%)", green7: "hsl(153, 51.8%, 21.8%)", green8: "hsl(151, 51.7%, 28.4%)", green9: "hsl(151, 55.0%, 41.5%)", green10: "hsl(151, 49.3%, 46.5%)", green11: "hsl(151, 50.0%, 53.2%)", green12: "hsl(137, 72.0%, 94.0%)" };

// node_modules/@tamagui/colors/dist/esm/dark/orange.js
var o2 = { orange1: "hsl(30, 70.0%, 7.2%)", orange2: "hsl(28, 100%, 8.4%)", orange3: "hsl(26, 91.1%, 11.6%)", orange4: "hsl(25, 88.3%, 14.1%)", orange5: "hsl(24, 87.6%, 16.6%)", orange6: "hsl(24, 88.6%, 19.8%)", orange7: "hsl(24, 92.4%, 24.0%)", orange8: "hsl(25, 100%, 29.0%)", orange9: "hsl(24, 94.0%, 50.0%)", orange10: "hsl(24, 100%, 58.5%)", orange11: "hsl(24, 100%, 62.2%)", orange12: "hsl(24, 97.0%, 93.2%)" };

// node_modules/@tamagui/colors/dist/esm/dark/pink.js
var n = { pink1: "hsl(318, 25.0%, 9.6%)", pink2: "hsl(319, 32.2%, 11.6%)", pink3: "hsl(319, 41.0%, 16.0%)", pink4: "hsl(320, 45.4%, 18.7%)", pink5: "hsl(320, 49.0%, 21.1%)", pink6: "hsl(321, 53.6%, 24.4%)", pink7: "hsl(321, 61.1%, 29.7%)", pink8: "hsl(322, 74.9%, 37.5%)", pink9: "hsl(322, 65.0%, 54.5%)", pink10: "hsl(323, 72.8%, 59.2%)", pink11: "hsl(325, 90.0%, 66.4%)", pink12: "hsl(322, 90.0%, 95.8%)" };

// node_modules/@tamagui/colors/dist/esm/dark/purple.js
var p = { purple1: "hsl(284, 20.0%, 9.6%)", purple2: "hsl(283, 30.0%, 11.8%)", purple3: "hsl(281, 37.5%, 16.5%)", purple4: "hsl(280, 41.2%, 20.0%)", purple5: "hsl(279, 43.8%, 23.3%)", purple6: "hsl(277, 46.4%, 27.5%)", purple7: "hsl(275, 49.3%, 34.6%)", purple8: "hsl(272, 52.1%, 45.9%)", purple9: "hsl(272, 51.0%, 54.0%)", purple10: "hsl(273, 57.3%, 59.1%)", purple11: "hsl(275, 80.0%, 71.0%)", purple12: "hsl(279, 75.0%, 95.7%)" };

// node_modules/@tamagui/colors/dist/esm/dark/red.js
var e2 = { red1: "hsl(353, 23.0%, 9.8%)", red2: "hsl(357, 34.4%, 12.0%)", red3: "hsl(356, 43.4%, 16.4%)", red4: "hsl(356, 47.6%, 19.2%)", red5: "hsl(356, 51.1%, 21.9%)", red6: "hsl(356, 55.2%, 25.9%)", red7: "hsl(357, 60.2%, 31.8%)", red8: "hsl(358, 65.0%, 40.4%)", red9: "hsl(358, 75.0%, 59.0%)", red10: "hsl(358, 85.3%, 64.0%)", red11: "hsl(358, 100%, 69.5%)", red12: "hsl(351, 89.0%, 96.0%)" };

// node_modules/@tamagui/colors/dist/esm/dark/yellow.js
var l3 = { yellow1: "hsl(45, 100%, 5.5%)", yellow2: "hsl(46, 100%, 6.7%)", yellow3: "hsl(45, 100%, 8.7%)", yellow4: "hsl(45, 100%, 10.4%)", yellow5: "hsl(47, 100%, 12.1%)", yellow6: "hsl(49, 100%, 14.3%)", yellow7: "hsl(49, 90.3%, 18.4%)", yellow8: "hsl(50, 100%, 22.0%)", yellow9: "hsl(53, 92.0%, 50.0%)", yellow10: "hsl(54, 100%, 68.0%)", yellow11: "hsl(48, 100%, 47.0%)", yellow12: "hsl(53, 100%, 91.0%)" };

// node_modules/@tamagui/colors/dist/esm/light/blue.js
var l4 = { blue1: "hsl(206, 100%, 99.2%)", blue2: "hsl(210, 100%, 98.0%)", blue3: "hsl(209, 100%, 96.5%)", blue4: "hsl(210, 98.8%, 94.0%)", blue5: "hsl(209, 95.0%, 90.1%)", blue6: "hsl(209, 81.2%, 84.5%)", blue7: "hsl(208, 77.5%, 76.9%)", blue8: "hsl(206, 81.9%, 65.3%)", blue9: "hsl(206, 100%, 50.0%)", blue10: "hsl(208, 100%, 47.3%)", blue11: "hsl(211, 100%, 43.2%)", blue12: "hsl(211, 100%, 15.0%)" };

// node_modules/@tamagui/colors/dist/esm/light/gray.js
var r2 = { gray1: "hsl(0, 0%, 99.0%)", gray2: "hsl(0, 0%, 97.3%)", gray3: "hsl(0, 0%, 95.1%)", gray4: "hsl(0, 0%, 93.0%)", gray5: "hsl(0, 0%, 90.9%)", gray6: "hsl(0, 0%, 88.7%)", gray7: "hsl(0, 0%, 85.8%)", gray8: "hsl(0, 0%, 78.0%)", gray9: "hsl(0, 0%, 56.1%)", gray10: "hsl(0, 0%, 52.3%)", gray11: "hsl(0, 0%, 43.5%)", gray12: "hsl(0, 0%, 9.0%)" };

// node_modules/@tamagui/colors/dist/esm/light/green.js
var e3 = { green1: "hsl(136, 50.0%, 98.9%)", green2: "hsl(138, 62.5%, 96.9%)", green3: "hsl(139, 55.2%, 94.5%)", green4: "hsl(140, 48.7%, 91.0%)", green5: "hsl(141, 43.7%, 86.0%)", green6: "hsl(143, 40.3%, 79.0%)", green7: "hsl(146, 38.5%, 69.0%)", green8: "hsl(151, 40.2%, 54.1%)", green9: "hsl(151, 55.0%, 41.5%)", green10: "hsl(152, 57.5%, 37.6%)", green11: "hsl(153, 67.0%, 28.5%)", green12: "hsl(155, 40.0%, 14.0%)" };

// node_modules/@tamagui/colors/dist/esm/light/orange.js
var o3 = { orange1: "hsl(24, 70.0%, 99.0%)", orange2: "hsl(24, 83.3%, 97.6%)", orange3: "hsl(24, 100%, 95.3%)", orange4: "hsl(25, 100%, 92.2%)", orange5: "hsl(25, 100%, 88.2%)", orange6: "hsl(25, 100%, 82.8%)", orange7: "hsl(24, 100%, 75.3%)", orange8: "hsl(24, 94.5%, 64.3%)", orange9: "hsl(24, 94.0%, 50.0%)", orange10: "hsl(24, 100%, 46.5%)", orange11: "hsl(24, 100%, 37.0%)", orange12: "hsl(15, 60.0%, 17.0%)" };

// node_modules/@tamagui/colors/dist/esm/light/pink.js
var n2 = { pink1: "hsl(322, 100%, 99.4%)", pink2: "hsl(323, 100%, 98.4%)", pink3: "hsl(323, 86.3%, 96.5%)", pink4: "hsl(323, 78.7%, 94.2%)", pink5: "hsl(323, 72.2%, 91.1%)", pink6: "hsl(323, 66.3%, 86.6%)", pink7: "hsl(323, 62.0%, 80.1%)", pink8: "hsl(323, 60.3%, 72.4%)", pink9: "hsl(322, 65.0%, 54.5%)", pink10: "hsl(322, 63.9%, 50.7%)", pink11: "hsl(322, 75.0%, 46.0%)", pink12: "hsl(320, 70.0%, 13.5%)" };

// node_modules/@tamagui/colors/dist/esm/light/purple.js
var p2 = { purple1: "hsl(280, 65.0%, 99.4%)", purple2: "hsl(276, 100%, 99.0%)", purple3: "hsl(276, 83.1%, 97.0%)", purple4: "hsl(275, 76.4%, 94.7%)", purple5: "hsl(275, 70.8%, 91.8%)", purple6: "hsl(274, 65.4%, 87.8%)", purple7: "hsl(273, 61.0%, 81.7%)", purple8: "hsl(272, 60.0%, 73.5%)", purple9: "hsl(272, 51.0%, 54.0%)", purple10: "hsl(272, 46.8%, 50.3%)", purple11: "hsl(272, 50.0%, 45.8%)", purple12: "hsl(272, 66.0%, 16.0%)" };

// node_modules/@tamagui/colors/dist/esm/light/red.js
var e4 = { red1: "hsl(359, 100%, 99.4%)", red2: "hsl(359, 100%, 98.6%)", red3: "hsl(360, 100%, 96.8%)", red4: "hsl(360, 97.9%, 94.8%)", red5: "hsl(360, 90.2%, 91.9%)", red6: "hsl(360, 81.7%, 87.8%)", red7: "hsl(359, 74.2%, 81.7%)", red8: "hsl(359, 69.5%, 74.3%)", red9: "hsl(358, 75.0%, 59.0%)", red10: "hsl(358, 69.4%, 55.2%)", red11: "hsl(358, 65.0%, 48.7%)", red12: "hsl(354, 50.0%, 14.6%)" };

// node_modules/@tamagui/colors/dist/esm/light/yellow.js
var l5 = { yellow1: "hsl(60, 54.0%, 98.5%)", yellow2: "hsl(52, 100%, 95.5%)", yellow3: "hsl(55, 100%, 90.9%)", yellow4: "hsl(54, 100%, 86.6%)", yellow5: "hsl(52, 97.9%, 82.0%)", yellow6: "hsl(50, 89.4%, 76.1%)", yellow7: "hsl(47, 80.4%, 68.0%)", yellow8: "hsl(48, 100%, 46.1%)", yellow9: "hsl(53, 92.0%, 50.0%)", yellow10: "hsl(50, 100%, 48.5%)", yellow11: "hsl(42, 100%, 29.0%)", yellow12: "hsl(40, 55.0%, 13.5%)" };

// node_modules/@tamagui/themes/dist/esm/tokens.js
var import_web = require("@tamagui/core-node");
var n3 = { $0: 0, "$0.25": 2, "$0.5": 4, "$0.75": 8, $1: 20, "$1.5": 24, $2: 28, "$2.5": 32, $3: 36, "$3.5": 40, $4: 44, $true: 44, "$4.5": 48, $5: 52, $6: 64, $7: 74, $8: 84, $9: 94, $10: 104, $11: 124, $12: 144, $13: 164, $14: 184, $15: 204, $16: 224, $17: 224, $18: 244, $19: 264, $20: 284 };
var i = Object.entries(n3).map(([r32, t28]) => [r32, D(t28)]);
function D(r32) {
  return r32 === 0 ? 0 : r32 === 2 ? 0.5 : r32 === 4 ? 1 : r32 === 8 ? 1.5 : r32 <= 16 ? Math.round(r32 * 0.333) : Math.floor(r32 * 0.7 - 12);
}
__name(D, "D");
var j = i.slice(1).map(([r32, t28]) => [`-${r32.slice(1)}`, -t28]);
var w2 = { ...Object.fromEntries(i), ...Object.fromEntries(j) };
var O = { 0: 0, 1: 100, 2: 200, 3: 300, 4: 400, 5: 500 };
var e5 = { light: { blue: l4, gray: r2, green: e3, orange: o3, pink: n2, purple: p2, red: e4, yellow: l5 }, dark: { blue: l2, gray: r, green: e, orange: o2, pink: n, purple: p, red: e2, yellow: l3 } };
var A = { ...e5.dark.blue, ...e5.dark.gray, ...e5.dark.green, ...e5.dark.orange, ...e5.dark.pink, ...e5.dark.purple, ...e5.dark.red, ...e5.dark.yellow };
var E2 = { ...e5.light.blue, ...e5.light.gray, ...e5.light.green, ...e5.light.orange, ...e5.light.pink, ...e5.light.purple, ...e5.light.red, ...e5.light.yellow };
var I = { ...s(E2, "Light"), ...s(A, "Dark") };
function s(r32, t28) {
  return Object.fromEntries(Object.entries(r32).map(([o23, a19]) => [`${o23}${t28}`, a19]));
}
__name(s, "s");
var B = { 0: 0, 1: 3, 2: 5, 3: 7, 4: 9, true: 9, 5: 10, 6: 16, 7: 19, 8: 22, 9: 26, 10: 34, 11: 42, 12: 50 };
var C2 = (0, import_web.createTokens)({ color: I, radius: B, zIndex: O, space: w2, size: n3 });

// node_modules/@tamagui/themes/dist/esm/themes.js
var y = "rgba(255,255,255,0)";
var O2 = "rgba(10,10,10,0)";
var b = { dark: [O2, "#050505", "#151515", "#191919", "#232323", "#282828", "#323232", "#424242", "#494949", "#545454", "#626262", "#a5a5a5", "#fff", y], light: [y, "#fff", "#f9f9f9", "hsl(0, 0%, 97.3%)", "hsl(0, 0%, 95.1%)", "hsl(0, 0%, 94.0%)", "hsl(0, 0%, 92.0%)", "hsl(0, 0%, 89.5%)", "hsl(0, 0%, 81.0%)", "hsl(0, 0%, 56.1%)", "hsl(0, 0%, 50.3%)", "hsl(0, 0%, 42.5%)", "hsl(0, 0%, 9.0%)", O2] };
var q = { color1: 1, color2: 2, color3: 3, color4: 4, color5: 5, color6: 6, color7: 7, color8: 8, color9: 9, color10: 10, color11: 11, color12: 12 };
var A2 = { shadowColor: 1, shadowColorHover: 1, shadowColorPress: 2, shadowColorFocus: 2 };
var M = { ...q, ...A2 };
var x2 = { ...M, background: 2, backgroundHover: 3, backgroundPress: 1, backgroundFocus: 2, backgroundStrong: 1, backgroundTransparent: 0, color: -1, colorHover: -2, colorPress: -1, colorFocus: -2, colorTransparent: -0, borderColor: 4, borderColorHover: 5, borderColorPress: 3, borderColorFocus: 4, placeholderColor: -4 };
var I2 = "rgba(0,0,0,0.02)";
var j2 = "rgba(0,0,0,0.066)";
var B2 = "rgba(0,0,0,0.2)";
var N = "rgba(0,0,0,0.3)";
var z = { shadowColor: j2, shadowColorHover: j2, shadowColorPress: I2, shadowColorFocus: I2 };
var G = { shadowColor: N, shadowColorHover: N, shadowColorPress: B2, shadowColorFocus: B2 };
var m2 = { ...x2, borderColor: 6, borderColorHover: 7, borderColorFocus: 5, borderColorPress: 6, ...z };
var p3 = { ...x2, ...G };
var J = d(b.light, m2);
var K = d(b.dark, p3);
var L = { light: J, dark: K };
var l6 = { weaker: C(), stronger: P() };
var a = { skip: M, max: b.light.length - 2, min: 1 };
var Q = E(L, (T16, C16) => {
  const i24 = T16 === "light", w23 = i24 ? "dark" : "light", S19 = L[w23], v14 = /* @__PURE__ */ __name((r32, e27 = 0) => r32.replace("%)", `%, ${e27})`).replace("hsl(", "hsla("), "v"), [f24, V15] = [e5[T16], e5[w23]].map((r32) => Object.fromEntries(Object.keys(r32).map((e27) => {
    const o23 = Object.values(r32[e27]), [s23, n22] = [o23.slice(0, 6), o23.slice(o23.length - 5)], c26 = [v14(o23[0]), ...s23, ...n22, C16.color, v14(o23[o23.length - 1])], d20 = d(c26, i24 ? { ...m2, borderColor: 4, borderColorHover: 5, borderColorFocus: 4, borderColorPress: 4 } : p3);
    return [e27, d20];
  }))), D14 = E(f24, (r32, e27) => {
    const o23 = V15[r32];
    return { ...P17(e27, o23), ...g16(e27, o23) };
  }), E18 = h(f24.blue, l6.weaker, { ...a, strength: 4 });
  return { ...{ ...P17(C16, S19, E18), ...g16(C16, S19) }, ...D14 };
  function P17(r32, e27, o23) {
    const s23 = { ...a, skip: A2 }, n22 = h(r32, l6.weaker, s23), c26 = h(n22, l6.weaker, s23), d20 = o23 ?? h(r32, l6.weaker, { ...a, strength: 4 });
    return E({ alt1: n22, alt2: c26, active: d20 }, (k17, F16) => g16(F16, F16 === e27 ? r32 : e27));
  }
  __name(P17, "P");
  function g16(r32, e27) {
    const o23 = h(r32, l6.weaker, a), s23 = h(o23, l6.weaker, a), n22 = h(r32, l6.stronger, a), c26 = h(e27, l6.weaker, a), d20 = h(c26, l6.weaker, a), k17 = i24 ? { ...n22, borderColor: o23.borderColor, borderColorHover: o23.borderColorHover, borderColorPress: o23.borderColorPress, borderColorFocus: o23.borderColorFocus } : { ...r32, borderColor: o23.borderColor, borderColorHover: o23.borderColorHover, borderColorPress: o23.borderColorPress, borderColorFocus: o23.borderColorFocus };
    return { Card: o23, Button: s23, Checkbox: s23, DrawerFrame: o23, SliderTrack: n22, SliderTrackActive: s23, SliderThumb: c26, Progress: o23, ProgressIndicator: e27, Switch: s23, SwitchThumb: d20, TooltipArrow: o23, TooltipContent: s23, Input: k17, TextArea: k17, Tooltip: c26 };
  }
  __name(g16, "g");
});
var oo = { ...Q, light: d(b.light, m2, { nonInheritedValues: E2 }), dark: d(b.dark, p3, { nonInheritedValues: A }) };

// node_modules/tamagui/dist/esm/index.mjs
var esm_exports2 = {};
__export(esm_exports2, {
  ACTIONS: () => y4,
  Adapt: () => b2,
  AdaptContents: () => s2,
  AdaptParentContext: () => a3,
  AlertDialog: () => j5,
  AlertDialogAction: () => S2,
  AlertDialogCancel: () => O4,
  AlertDialogContent: () => C7,
  AlertDialogDescription: () => _6,
  AlertDialogOverlay: () => y5,
  AlertDialogPortal: () => m9,
  AlertDialogTitle: () => v5,
  AlertDialogTrigger: () => f7,
  Anchor: () => p22,
  AnimatePresence: () => B3,
  AnimationDriverProvider: () => import_core49.AnimationDriverProvider,
  Article: () => i23,
  Aside: () => r30,
  Avatar: () => y6,
  AvatarFallback: () => A9,
  AvatarFallbackFrame: () => L5,
  AvatarFrame: () => w7,
  AvatarImage: () => l14,
  BubbleInput: () => R16,
  Button: () => de2,
  ButtonFrame: () => i11,
  ButtonText: () => c10,
  Card: () => w9,
  CardBackground: () => g7,
  CardFooter: () => C8,
  CardFrame: () => n9,
  CardHeader: () => s8,
  Checkbox: () => ie3,
  CheckboxFrame: () => _12,
  Circle: () => c9,
  ControlledSheet: () => Sn,
  Dialog: () => ze,
  DialogClose: () => L4,
  DialogContent: () => W6,
  DialogDescription: () => H7,
  DialogOverlay: () => k7,
  DialogOverlayFrame: () => z5,
  DialogPortal: () => M4,
  DialogPortalFrame: () => We,
  DialogSheetContents: () => qe,
  DialogTitle: () => V4,
  DialogTrigger: () => _5,
  DialogWarningProvider: () => Ze,
  DirectionalYStack: () => P14,
  EnsureFlexed: () => t23,
  Fieldset: () => i22,
  FontLanguage: () => import_core49.FontLanguage,
  Footer: () => l24,
  Form: () => w10,
  FormFrame: () => c12,
  FormProvider: () => f10,
  FormTrigger: () => T8,
  ForwardSelectContext: () => i14,
  Grid: () => d18,
  H1: () => s7,
  H2: () => i9,
  H3: () => r11,
  H4: () => H,
  H5: () => m8,
  H6: () => g5,
  Header: () => a18,
  Heading: () => t9,
  INITIAL_STATE: () => f5,
  Input: () => c24,
  InputFrame: () => n20,
  Label: () => w11,
  LabelFrame: () => L6,
  LinearGradient: () => o22,
  Main: () => c25,
  Nav: () => m22,
  Paragraph: () => p10,
  Popover: () => ie,
  PopoverAnchor: () => M8,
  PopoverArrow: () => L7,
  PopoverClose: () => K6,
  PopoverContent: () => Oo,
  PopoverTrigger: () => z7,
  Popper: () => be,
  PopperAnchor: () => Re2,
  PopperArrow: () => ge2,
  PopperContent: () => Ae3,
  PopperContentFrame: () => X4,
  PopperProvider: () => G8,
  Portal: () => x7,
  PortalHost: () => x8,
  PortalItem: () => B5,
  PortalProvider: () => F3,
  PresenceContext: () => o5,
  Progress: () => x12,
  ProgressFrame: () => N7,
  ProgressIndicator: () => P11,
  ProgressIndicatorFrame: () => E9,
  RadioGroup: () => F12,
  Range: () => xe2,
  ScrollView: () => a8,
  Section: () => n21,
  Select: () => Ue2,
  SelectGroupFrame: () => Be2,
  SelectIcon: () => we,
  SelectItem: () => te3,
  SelectItemTextFrame: () => ke3,
  SelectProvider: () => r16,
  SelectSeparator: () => mt2,
  SelectTrigger: () => J12,
  Separator: () => e15,
  Sheet: () => Mt,
  SheetController: () => Pn,
  SheetFrame: () => It,
  SheetFrameFrame: () => Ne,
  SheetHandle: () => Dt,
  SheetHandleFrame: () => Ve,
  SheetOverlay: () => Tt,
  SheetOverlayFrame: () => ke,
  SizableStack: () => k3,
  SizableText: () => s6,
  Slider: () => J13,
  SliderFrame: () => k14,
  SliderThumb: () => C12,
  SliderThumbFrame: () => we2,
  SliderTrack: () => _9,
  SliderTrackActive: () => A15,
  SliderTrackActiveFrame: () => ze3,
  SliderTrackFrame: () => Te2,
  Spacer: () => import_core49.Spacer,
  Spinner: () => b16,
  Square: () => p12,
  Stack: () => import_core49.Stack,
  Switch: () => me3,
  SwitchFrame: () => H10,
  SwitchThumb: () => I10,
  SwitchThumbFrame: () => R12,
  Tabs: () => oe7,
  TamaguiProvider: () => t22,
  Text: () => import_core49.Text,
  TextAncestorContext: () => import_core49.TextAncestorContext,
  TextArea: () => l26,
  TextAreaFrame: () => s22,
  Theme: () => import_core49.Theme,
  ThemeableStack: () => k4,
  Thumb: () => ye2,
  ToggleGroup: () => h15,
  Tooltip: () => To2,
  TooltipGroup: () => Fo,
  TooltipSimple: () => C15,
  Track: () => ke4,
  Unspaced: () => import_core49.Unspaced,
  VisuallyHidden: () => e21,
  XStack: () => i7,
  YStack: () => c5,
  ZStack: () => l9,
  __PopoverProviderInternal: () => Pe3,
  addTheme: () => import_core49.addTheme,
  buttonStaticConfig: () => X3,
  composeRefs: () => R,
  createAlertDialogScope: () => pe,
  createAvatarScope: () => N5,
  createCheckboxScope: () => ce3,
  createComponent: () => import_core49.createComponent,
  createContext: () => T,
  createContextScope: () => V,
  createDialogScope: () => _e,
  createFont: () => import_core49.createFont,
  createPopoverScope: () => le,
  createPopperScope: () => he2,
  createProgressScope: () => C10,
  createRadioGroupScope: () => oe3,
  createSelectContext: () => c15,
  createSelectScope: () => a12,
  createSheetScope: () => d5,
  createShorthands: () => import_core49.createShorthands,
  createSwitchScope: () => fe3,
  createTamagui: () => f21,
  createTheme: () => import_core49.createTheme,
  createToggleGroupScope: () => Q8,
  createTokens: () => import_core49.createTokens,
  createVariable: () => import_core49.createVariable,
  debounce: () => f18,
  defaultStyles: () => s21,
  fullscreenStyle: () => a6,
  getAnimationDriver: () => import_core49.getAnimationDriver,
  getConfig: () => import_core49.getConfig,
  getMedia: () => import_core49.getMedia,
  getShapeSize: () => h9,
  getState: () => B11,
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
  isIndeterminate: () => l22,
  isPresent: () => i4,
  isServer: () => import_core49.isServer,
  isServerSide: () => r23,
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
  useButton: () => j6,
  useComposedRefs: () => c3,
  useControllableState: () => A6,
  useDebounce: () => y13,
  useDebounceValue: () => A19,
  useDidFinishSSR: () => import_core49.useDidFinishSSR,
  useEvent: () => import_core49.useEvent,
  useFloatingContext: () => F10,
  useForceUpdate: () => d17,
  useFormContext: () => b9,
  useGet: () => import_core49.useGet,
  useIsPresent: () => x4,
  useIsTouchDevice: () => import_core49.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core49.useIsomorphicLayoutEffect,
  useLabelContext: () => U5,
  useMedia: () => import_core49.useMedia,
  usePopoverScope: () => g10,
  usePopperContext: () => E7,
  usePortal: () => h3,
  usePresence: () => p4,
  useSafeRef: () => import_core49.useSafeRef,
  useSelectContext: () => d11,
  useStyle: () => import_core49.useStyle,
  useTheme: () => import_core49.useTheme,
  useThemeName: () => import_core49.useThemeName,
  useWindowDimensions: () => f20,
  variableToString: () => import_core49.variableToString,
  withStaticProperties: () => import_core49.withStaticProperties,
  wrapChildrenInText: () => W5
});

// node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core-node");
var t = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = t, (0, import_core.setupReactNative)({ View: import_react_native.View, Text: import_react_native.Text }), typeof requestAnimationFrame > "u" && (globalThis.requestAnimationFrame = setImmediate);
var n4 = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (e27) => {
  try {
    n4(e27);
  } catch {
  }
};
var c = /* @__PURE__ */ __name(() => {
}, "c");

// node_modules/@tamagui/adapt/dist/esm/Adapt.js
var import_jsx_runtime = require("react/jsx-runtime");
var import_core2 = require("@tamagui/core-node");
var import_react = require("react");
var a3 = (0, import_react.createContext)(null);
var s2 = /* @__PURE__ */ __name((r32) => {
  const e27 = (0, import_react.useContext)(a3);
  if (!(e27 != null && e27.Contents))
    throw new Error("Adapt not supported by this component");
  return (0, import_react.createElement)(e27.Contents, r32);
}, "s");
s2.shouldForwardSpace = true;
var W = /* @__PURE__ */ __name(({ Contents: r32 }) => {
  const [e27, o23] = (0, import_react.useState)(null);
  return { AdaptProvider: (0, import_react.useMemo)(() => {
    const n22 = { Contents: r32, setWhen: o23 };
    function t28(u16) {
      return (0, import_jsx_runtime.jsx)(a3.Provider, { value: n22, children: u16.children });
    }
    __name(t28, "t");
    return t28;
  }, [r32]), when: e27 };
}, "W");
var b2 = (0, import_core2.withStaticProperties)(function({ platform: e27, when: o23, children: p26 }) {
  const n22 = (0, import_react.useContext)(a3);
  let t28 = !e27;
  return e27 === "touch" && (t28 = import_core2.isTouchable), e27 === "native" && (t28 = !import_core2.isWeb), e27 === "web" && (t28 = import_core2.isWeb), (0, import_core2.useIsomorphicLayoutEffect)(() => {
    t28 && (n22 == null || n22.setWhen(o23 || t28));
  }, [o23, n22, t28]), t28 ? p26 : null;
}, { Contents: s2 });

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_jsx_runtime13 = require("react/jsx-runtime");

// node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var f = __toESM(require("react"));
function s3(e27, t28) {
  typeof e27 == "function" ? e27(t28) : e27 && (e27.current = t28);
}
__name(s3, "s");
function R(...e27) {
  return (t28) => e27.forEach((o23) => s3(o23, t28));
}
__name(R, "R");
function c3(...e27) {
  return f.useCallback(R(...e27), e27);
}
__name(c3, "c");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_core13 = require("@tamagui/core-node");

// node_modules/@tamagui/create-context/dist/esm/create-context.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var u2 = __toESM(require("react"));
function T(t28, c26) {
  const o23 = u2.createContext(c26);
  function x19(r32) {
    const { children: e27, ...n22 } = r32, s23 = u2.useMemo(() => n22, Object.values(n22));
    return (0, import_jsx_runtime2.jsx)(o23.Provider, { value: s23, children: e27 });
  }
  __name(x19, "x");
  function i24(r32) {
    const e27 = u2.useContext(o23);
    if (e27)
      return e27;
    if (c26 !== void 0)
      return c26;
    throw new Error(`\`${r32}\` must be used within \`${t28}\``);
  }
  __name(i24, "i");
  return x19.displayName = `${t28}Provider`, [x19, i24];
}
__name(T, "T");
function V(t28, c26 = []) {
  let o23 = [];
  function x19(r32, e27) {
    const n22 = u2.createContext(e27), s23 = o23.length;
    o23 = [...o23, e27];
    function d20(l27) {
      const { scope: p26, children: a19, ...C16 } = l27, f24 = (p26 == null ? void 0 : p26[t28][s23]) || n22, y15 = u2.useMemo(() => C16, Object.values(C16));
      return (0, import_jsx_runtime2.jsx)(f24.Provider, { value: y15, children: a19 });
    }
    __name(d20, "d");
    function S19(l27, p26, a19) {
      const C16 = (p26 == null ? void 0 : p26[t28][s23]) || n22, f24 = u2.useContext(C16);
      if (f24)
        return f24;
      if (e27 !== void 0)
        return e27;
      const y15 = `\`${l27}\` must be used within \`${r32}\``;
      if (a19 != null && a19.fallback)
        return (a19 == null ? void 0 : a19.warn) !== false && console.warn(y15), a19.fallback;
      throw new Error(y15);
    }
    __name(S19, "S");
    return d20.displayName = `${r32}Provider`, [d20, S19];
  }
  __name(x19, "x");
  const i24 = /* @__PURE__ */ __name(() => {
    const r32 = o23.map((e27) => u2.createContext(e27));
    return function(n22) {
      const s23 = (n22 == null ? void 0 : n22[t28]) || r32;
      return u2.useMemo(() => ({ [`__scope${t28}`]: { ...n22, [t28]: s23 } }), [n22, s23]);
    };
  }, "i");
  return i24.scopeName = t28, [x19, v(i24, ...c26)];
}
__name(V, "V");
function v(...t28) {
  const c26 = t28[0];
  if (t28.length === 1)
    return c26;
  const o23 = /* @__PURE__ */ __name(() => {
    const x19 = t28.map((i24) => ({ useScope: i24(), scopeName: i24.scopeName }));
    return function(r32) {
      const e27 = x19.reduce((n22, { useScope: s23, scopeName: d20 }) => {
        const l27 = s23(r32)[`__scope${d20}`];
        return { ...n22, ...l27 };
      }, {});
      return u2.useMemo(() => ({ [`__scope${c26.scopeName}`]: e27 }), [e27]);
    };
  }, "o");
  return o23.scopeName = c26.scopeName, o23;
}
__name(v, "v");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_jsx_runtime12 = require("react/jsx-runtime");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_web2 = require("@tamagui/core-node");
var import_react6 = __toESM(require("react"));

// node_modules/@tamagui/animate-presence/dist/esm/LayoutGroupContext.js
var import_react2 = require("react");
var r3 = (0, import_react2.createContext)({});

// node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var import_jsx_runtime3 = require("react/jsx-runtime");

// node_modules/@tamagui/use-presence/dist/esm/PresenceContext.js
var import_react3 = require("react");
var o5 = (0, import_react3.createContext)(null);

// node_modules/@tamagui/use-presence/dist/esm/usePresence.js
var import_react4 = require("react");
function p4() {
  const e27 = (0, import_react4.useContext)(o5);
  if (!e27)
    return [true, null, e27];
  const { isPresent: u16, onExitComplete: t28, register: s23 } = e27, r32 = (0, import_react4.useId)() || "";
  return (0, import_react4.useEffect)(() => s23(r32), [r32, s23]), !u16 && t28 ? [false, () => t28 == null ? void 0 : t28(r32), e27] : [true, void 0, e27];
}
__name(p4, "p");
function x4() {
  return i4((0, import_react4.useContext)(o5));
}
__name(x4, "x");
function i4(e27) {
  return e27 === null ? true : e27.isPresent;
}
__name(i4, "i");

// node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var t2 = __toESM(require("react"));
var import_react5 = require("react");
var y3 = /* @__PURE__ */ __name(({ children: i24, initial: f24, isPresent: n22, onExitComplete: r32, exitVariant: a19, enterVariant: c26, presenceAffectsLayout: u16 }) => {
  const e27 = t2.useMemo(m4, []), l27 = (0, import_react5.useId)() || "", d20 = t2.useMemo(() => ({ id: l27, initial: f24, isPresent: n22, exitVariant: a19, enterVariant: c26, onExitComplete: (s23) => {
    e27.set(s23, true);
    for (const o23 of e27.values())
      if (!o23)
        return;
    r32 == null || r32();
  }, register: (s23) => (e27.set(s23, false), () => e27.delete(s23)) }), u16 ? void 0 : [n22, a19, c26]);
  return t2.useMemo(() => {
    e27.forEach((s23, o23) => e27.set(o23, false));
  }, [n22]), t2.useEffect(() => {
    !(n22 || e27.size) && (r32 == null || r32());
  }, [n22]), (0, import_jsx_runtime3.jsx)(o5.Provider, { value: d20, children: i24 });
}, "y");
function m4() {
  return /* @__PURE__ */ new Map();
}
__name(m4, "m");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var u3 = /* @__PURE__ */ __name((c26) => c26.key || "", "u");
var K2 = process.env.NODE_ENV !== "production";
function G2(c26, r32) {
  const n22 = K2 ? /* @__PURE__ */ new Set() : null;
  c26.forEach((a19) => {
    const s23 = u3(a19);
    K2 && n22 && n22.has(s23) && (console.warn(`Children of AnimatePresence require unique keys. "${s23}" is a duplicate.`), n22.add(s23)), r32.set(s23, a19);
  });
}
__name(G2, "G");
function T2(c26) {
  const r32 = [];
  return import_react6.Children.forEach(c26, (n22, a19) => {
    (0, import_react6.isValidElement)(n22) && (n22.key ? r32.push(n22) : (process.env.NODE_ENV === "development" && console.warn("No key given to AnimatePresence child, assigning index as key"), r32.push(import_react6.default.cloneElement(n22, { key: a19 }))));
  }), r32;
}
__name(T2, "T");
var B3 = /* @__PURE__ */ __name(({ children: c26, enterVariant: r32, exitVariant: n22, initial: a19 = true, onExitComplete: s23, exitBeforeEnter: g16, presenceAffectsLayout: h17 = true }) => {
  let v14 = (0, import_web2.useForceUpdate)();
  const A20 = (0, import_web2.useDidFinishSSR)(), N12 = (0, import_react6.useContext)(r3).forceRender;
  N12 && (v14 = N12);
  const m24 = (0, import_react6.useRef)(false), p26 = T2(c26);
  let t28 = p26;
  const o23 = /* @__PURE__ */ new Set(), l27 = (0, import_react6.useRef)(t28), y15 = (0, import_react6.useRef)(/* @__PURE__ */ new Map()).current, E18 = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => (m24.current = true, () => {
    m24.current = false, E18.current = true, y15.clear(), o23.clear();
  }), []), (0, import_web2.useIsomorphicLayoutEffect)(() => {
    E18.current = false, G2(p26, y15), l27.current = t28;
  });
  const C16 = process.env.NODE_ENV === "development" ? (0, import_react6.useRef)(false) : null;
  if (E18.current)
    return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: t28.map((e27) => (0, import_jsx_runtime4.jsx)(y3, { isPresent: Boolean(A20 ? true : m24.current), exitVariant: n22, enterVariant: r32, initial: a19 ? void 0 : false, presenceAffectsLayout: h17, children: e27 }, u3(e27))) });
  t28 = [...t28];
  const R17 = l27.current.map(u3), k17 = p26.map(u3), O12 = R17.length;
  for (let e27 = 0; e27 < O12; e27++) {
    const i24 = R17[e27];
    k17.indexOf(i24) === -1 && o23.add(i24);
  }
  return g16 && o23.size && (t28 = []), o23.forEach((e27) => {
    if (k17.indexOf(e27) !== -1)
      return;
    const i24 = y15.get(e27);
    if (!i24)
      return;
    const V15 = R17.indexOf(e27);
    t28.splice(V15, 0, (0, import_jsx_runtime4.jsx)(y3, { isPresent: false, onExitComplete: () => {
      y15.delete(e27), o23.delete(e27);
      const w23 = l27.current.findIndex((D14) => D14.key === e27);
      if (l27.current.splice(w23, 1), !o23.size) {
        if (l27.current = p26, m24.current === false)
          return;
        v14(), s23 == null || s23();
      }
    }, exitVariant: n22, enterVariant: r32, presenceAffectsLayout: h17, children: i24 }, u3(i24)));
  }), t28 = t28.map((e27) => {
    const i24 = e27.key;
    return o23.has(i24) ? e27 : (0, import_jsx_runtime4.jsx)(y3, { isPresent: true, exitVariant: n22, enterVariant: r32, presenceAffectsLayout: h17, children: e27 }, u3(e27));
  }), process.env.NODE_ENV === "development" && g16 && t28.length > 1 && C16 && !C16.current && (C16.current = true, console.log("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This can lead to odd visual behaviour.")), (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: o23.size ? t28 : t28.map((e27) => (0, import_react6.cloneElement)(e27)) });
}, "B");
B3.displayName = "AnimatePresence";

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_aria_hidden = __toESM(require_cjs());
var import_core12 = require("@tamagui/core-node");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var import_react_use_escape_keydown = __toESM(require_dist2());
var import_core3 = require("@tamagui/core-node");

// node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react7 = require("react");
var a4 = process.env.TAMAGUI_TARGET === "web";
var p5 = typeof window < "u";
var l8 = !a4 || p5 ? import_react7.useLayoutEffect : import_react7.useEffect;
function A4(n22, o23, s23) {
  const e27 = (0, import_react7.useRef)(o23 ?? n22);
  return l8(() => {
    e27.current = n22;
  }), (0, import_react7.useCallback)(s23 ? (...c26) => {
    var t28;
    return (t28 = e27.current) == null ? void 0 : t28.apply(null, c26);
  } : () => e27.current, []);
}
__name(A4, "A");

// node_modules/@tamagui/use-event/dist/esm/useEvent.js
function a5(n22) {
  return A4(n22, t3, true);
}
__name(a5, "a");
var t3 = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "t");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var s4 = __toESM(require("react"));
var _2 = __toESM(require("react-dom"));
function k2(e27, o23) {
  e27 && _2.flushSync(() => e27.dispatchEvent(o23));
}
__name(k2, "k");
var z3 = "Dismissable";
var D2 = "dismissable.update";
var X = "dismissable.pointerDownOutside";
var Y = "dismissable.focusOutside";
var g2;
var w3 = s4.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var T3 = s4.forwardRef((e27, o23) => {
  const { disableOutsidePointerEvents: t28 = false, forceUnmount: i24, onEscapeKeyDown: r32, onPointerDownOutside: c26, onFocusOutside: l27, onInteractOutside: E18, onDismiss: u16, ...f24 } = e27, a19 = s4.useContext(w3), [d20, H14] = s4.useState(null), [, M17] = s4.useState({}), S19 = c3(o23, (n22) => H14(n22)), h17 = Array.from(a19.layers), [W14] = [...a19.layersWithOutsidePointerEventsDisabled].slice(-1), N12 = h17.indexOf(W14), b17 = d20 ? h17.indexOf(d20) : -1, A20 = a19.layersWithOutsidePointerEventsDisabled.size > 0, y15 = b17 >= N12, I12 = G3((n22) => {
    const v14 = n22.target, C16 = [...a19.branches].some((m24) => m24.contains(v14));
    !y15 || C16 || (c26 == null || c26(n22), E18 == null || E18(n22), n22.defaultPrevented || u16 == null || u16());
  }), P17 = J2((n22) => {
    const v14 = n22.target;
    [...a19.branches].some((m24) => m24.contains(v14)) || (l27 == null || l27(n22), E18 == null || E18(n22), n22.defaultPrevented || u16 == null || u16());
  });
  return (0, import_react_use_escape_keydown.useEscapeKeydown)((n22) => {
    b17 === a19.layers.size - 1 && (r32 == null || r32(n22), !n22.defaultPrevented && u16 && (n22.preventDefault(), u16()));
  }), s4.useEffect(() => {
    if (d20)
      return t28 && (a19.layersWithOutsidePointerEventsDisabled.size === 0 && (g2 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), a19.layersWithOutsidePointerEventsDisabled.add(d20)), a19.layers.add(d20), x6(), () => {
        t28 && a19.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = g2);
      };
  }, [d20, t28, a19]), s4.useEffect(() => {
    if (!i24)
      return () => {
        d20 && (a19.layers.delete(d20), a19.layersWithOutsidePointerEventsDisabled.delete(d20), x6());
      };
  }, [d20, a19, i24]), s4.useEffect(() => {
    const n22 = /* @__PURE__ */ __name(() => {
      M17({});
    }, "n");
    return document.addEventListener(D2, n22), () => document.removeEventListener(D2, n22);
  }, []), (0, import_jsx_runtime5.jsx)("div", { ...f24, ref: S19, style: { display: "contents", pointerEvents: A20 ? y15 ? "auto" : "none" : void 0, ...e27.style }, onFocusCapture: (0, import_core3.composeEventHandlers)(e27.onFocusCapture, P17.onFocusCapture), onBlurCapture: (0, import_core3.composeEventHandlers)(e27.onBlurCapture, P17.onBlurCapture), onPointerDownCapture: (0, import_core3.composeEventHandlers)(e27.onPointerDownCapture, I12.onPointerDownCapture) });
});
T3.displayName = z3;
var q2 = "DismissableBranch";
var R2 = s4.forwardRef((e27, o23) => {
  const t28 = s4.useContext(w3), i24 = s4.useRef(null), r32 = c3(o23, i24);
  return s4.useEffect(() => {
    const c26 = i24.current;
    if (c26)
      return t28.branches.add(c26), () => {
        t28.branches.delete(c26);
      };
  }, [t28.branches]), (0, import_jsx_runtime5.jsx)("div", { style: { display: "contents" }, ...e27, ref: r32 });
});
R2.displayName = q2;
function G3(e27) {
  const o23 = a5(e27), t28 = s4.useRef(false), i24 = s4.useRef(() => {
  });
  return s4.useEffect(() => {
    const r32 = /* @__PURE__ */ __name((l27) => {
      if (l27.target && !t28.current) {
        let f24 = /* @__PURE__ */ __name(function() {
          B4(X, o23, u16, { discrete: true });
        }, "f");
        var E18 = f24;
        const u16 = { originalEvent: l27 };
        l27.pointerType === "touch" ? (document.removeEventListener("click", i24.current), i24.current = f24, document.addEventListener("click", i24.current, { once: true })) : f24();
      }
      t28.current = false;
    }, "r"), c26 = setTimeout(() => {
      document.addEventListener("pointerdown", r32);
    }, 0);
    return () => {
      window.clearTimeout(c26), document.removeEventListener("pointerdown", r32), document.removeEventListener("click", i24.current);
    };
  }, [o23]), { onPointerDownCapture: () => t28.current = true };
}
__name(G3, "G");
function J2(e27) {
  const o23 = a5(e27), t28 = s4.useRef(false);
  return s4.useEffect(() => {
    const i24 = /* @__PURE__ */ __name((r32) => {
      r32.target && !t28.current && B4(Y, o23, { originalEvent: r32 }, { discrete: false });
    }, "i");
    return document.addEventListener("focusin", i24), () => document.removeEventListener("focusin", i24);
  }, [o23]), { onFocusCapture: () => t28.current = true, onBlurCapture: () => t28.current = false };
}
__name(J2, "J");
function x6() {
  const e27 = new CustomEvent(D2);
  document.dispatchEvent(e27);
}
__name(x6, "x");
function B4(e27, o23, t28, { discrete: i24 }) {
  const r32 = t28.originalEvent.target, c26 = new CustomEvent(e27, { bubbles: false, cancelable: true, detail: t28 });
  o23 && r32.addEventListener(e27, o23, { once: true }), i24 ? k2(r32, c26) : r32.dispatchEvent(c26);
}
__name(B4, "B");

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
var w4 = /* @__PURE__ */ __name((o23, t28) => {
  if (!o23)
    return;
  const { tokens: a19 } = t28, e27 = a19.size[o23], n22 = (0, import_core4.isVariable)(e27) ? +e27.val : o23;
  return u5(n22, t28);
}, "w");
var u5 = /* @__PURE__ */ __name((o23, { theme: t28, tokens: a19 }) => {
  let e27 = 0;
  if (o23 === true) {
    const r32 = (0, import_core4.getVariableValue)(a19.size.true);
    typeof r32 == "number" ? e27 = r32 : e27 = 10;
  } else
    e27 = +o23;
  process.env.NODE_ENV === "development" && e27 !== null && isNaN(e27) && console.warn("NaN shadow", e27, o23);
  const [n22, s23] = [Math.round(e27 / 4 + 1), Math.round(e27 / 2 + 2)];
  return { shadowColor: t28.shadowColor, shadowRadius: s23, shadowOffset: { height: n22, width: 0 } };
}, "u");

// node_modules/@tamagui/stacks/dist/esm/Stacks.js
var a6 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
var o6 = { fullscreen: { true: a6 }, elevation: { "...size": w4 } };
var c5 = (0, import_core5.styled)(import_core5.Stack, { flexDirection: "column", name: "YStack", variants: o6 });
var i7 = (0, import_core5.styled)(import_core5.Stack, { flexDirection: "row", name: "XStack", variants: o6 });
var l9 = (0, import_core5.styled)(c5, { name: "ZStack", position: "relative" }, { neverFlatten: true, isZStack: true });

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core6 = require("@tamagui/core-node");
var import_get_button_sized = __toESM(require_cjs6());

// node_modules/@tamagui/stacks/dist/esm/variants.js
var u6 = { true: (t28, r32) => w4(r32.props.size, r32) };
var n6 = /* @__PURE__ */ __name((t28, { props: r32 }) => ({ borderWidth: typeof t28 == "number" ? t28 : 1, borderColor: "$borderColor", ...r32.hoverTheme && { hoverStyle: { borderColor: "$borderColorHover" } }, ...r32.pressTheme && { pressStyle: { borderColor: "$borderColorPress" } }, ...r32.focusTheme && { focusStyle: { borderColor: "$borderColorFocus" } } }), "n");
var l10 = { true: (t28, r32) => {
  const { tokens: e27, props: o23 } = r32;
  return { padding: e27.space[o23.size] || e27.space.$true };
} };
var c6 = { true: (t28, r32) => {
  const { tokens: e27, props: o23 } = r32;
  return { borderRadius: e27.radius[o23.size] || e27.radius.$true };
} };
var b4 = { true: (t28, { props: r32, tokens: e27 }) => {
  const o23 = e27.size[r32.size];
  return { width: o23, height: o23, maxWidth: o23, maxHeight: o23, minWidth: o23, minHeight: o23, borderRadius: 1e5, padding: 0 };
} };
var i8 = { true: { hoverStyle: { backgroundColor: "$backgroundHover", borderColor: "$borderColorHover" } }, false: {} };
var a7 = { true: { cursor: "pointer", pressStyle: { backgroundColor: "$backgroundPress", borderColor: "$borderColorPress" } }, false: {} };
var p7 = { true: { focusStyle: { backgroundColor: "$backgroundFocus", borderColor: "$borderColorFocus" } }, false: {} };

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var k3 = (0, import_core6.styled)(i7, { name: "SizableStack", variants: { unstyled: { true: { hoverTheme: false, pressTheme: false, focusTheme: false, elevate: false, bordered: false }, false: { backgroundColor: "$background", flexShrink: 1 } }, hoverTheme: i8, pressTheme: a7, focusTheme: p7, circular: b4, elevate: u6, bordered: n6, size: { "...size": import_get_button_sized.getButtonSized } } });

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core7 = require("@tamagui/core-node");
var e9 = { backgroundColor: "transparent", borderColor: "transparent", shadowColor: "transparent" };
var k4 = (0, import_core7.styled)(c5, { name: "SizableStack", variants: { backgrounded: { true: { backgroundColor: "$background" } }, radiused: c6, hoverTheme: i8, pressTheme: a7, focusTheme: p7, circular: b4, padded: l10, elevate: u6, bordered: n6, transparent: { true: { backgroundColor: "transparent" } }, chromeless: { true: e9, all: { ...e9, hoverStyle: e9, pressStyle: e9, focusStyle: e9 } } } });

// node_modules/@tamagui/portal/dist/esm/Portal.js
var l11 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var x7 = /* @__PURE__ */ __name(({ host: o23 = ((n22) => (n22 = globalThis.document) == null ? void 0 : n22.body)(), ...r32 }) => {
  const s23 = (0, import_jsx_runtime6.jsx)(c5, { contain: "strict", fullscreen: true, position: import_core8.isWeb ? "fixed" : "absolute", maxWidth: import_core8.isWeb ? "100vw" : "100%", maxHeight: import_core8.isWeb ? "100vh" : "100%", pointerEvents: "none", ...r32 }), [e27, i24] = l11.useState(null);
  return (0, import_core8.useIsomorphicLayoutEffect)(() => {
    i24(o23);
  }, [o23]), e27 ? (0, import_react_dom.createPortal)(s23, e27) : null;
}, "x");

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_core9 = require("@tamagui/core-node");
var import_react8 = __toESM(require("react"));
var y4 = ((r32) => (r32[r32.REGISTER_HOST = 0] = "REGISTER_HOST", r32[r32.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", r32[r32.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", r32[r32.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", r32))(y4 || {});
var f5 = {};
var E3 = /* @__PURE__ */ __name((e27, t28) => (t28 in e27 || (e27[t28] = []), e27), "E");
var L3 = /* @__PURE__ */ __name((e27, t28) => (delete e27[t28], e27), "L");
var M3 = /* @__PURE__ */ __name((e27, t28, o23, n22) => {
  t28 in e27 || (e27 = E3(e27, t28));
  const r32 = e27[t28].findIndex((s23) => s23.name === o23);
  return r32 !== -1 ? e27[t28][r32].node = n22 : e27[t28].push({ name: o23, node: n22 }), e27;
}, "M");
var G4 = /* @__PURE__ */ __name((e27, t28, o23) => {
  if (!(t28 in e27))
    return console.log(`Failed to remove portal '${o23}', '${t28}' was not registered!`), e27;
  const n22 = e27[t28].findIndex((r32) => r32.name === o23);
  return n22 !== -1 && e27[t28].splice(n22, 1), e27;
}, "G");
var b5 = /* @__PURE__ */ __name((e27, t28) => {
  const { type: o23 } = t28;
  switch (o23) {
    case 0:
      return E3({ ...e27 }, t28.hostName);
    case 1:
      return L3({ ...e27 }, t28.hostName);
    case 2:
      return M3({ ...e27 }, t28.hostName, t28.portalName, t28.node);
    case 3:
      return G4({ ...e27 }, t28.hostName, t28.portalName);
    default:
      return e27;
  }
}, "b");
var v2 = (0, import_react8.createContext)(null);
var O3 = (0, import_react8.createContext)(null);
var V2 = /* @__PURE__ */ __name((e27) => {
  const t28 = (0, import_react8.useContext)(v2);
  if (t28 === null)
    throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
  return t28[e27] || [];
}, "V");
var h3 = /* @__PURE__ */ __name((e27 = "root") => {
  const t28 = (0, import_react8.useContext)(O3);
  if (t28 === null)
    throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
  const o23 = (0, import_react8.useCallback)(() => {
    t28({ type: 0, hostName: e27 });
  }, []), n22 = (0, import_react8.useCallback)(() => {
    t28({ type: 1, hostName: e27 });
  }, []), r32 = (0, import_react8.useCallback)((a19, i24) => {
    t28({ type: 2, hostName: e27, portalName: a19, node: i24 });
  }, []), s23 = (0, import_react8.useCallback)((a19) => {
    t28({ type: 3, hostName: e27, portalName: a19 });
  }, []);
  return { registerHost: o23, deregisterHost: n22, addPortal: r32, updatePortal: r32, removePortal: s23 };
}, "h");
var k5 = /* @__PURE__ */ __name(({ rootHostName: e27 = "root", shouldAddRootHost: t28 = true, children: o23 }) => {
  const [n22, r32] = (0, import_react8.useReducer)(b5, f5), s23 = (0, import_react8.useMemo)(() => (i24) => {
    (0, import_react8.startTransition)(() => {
      r32(i24);
    });
  }, [r32]);
  return (0, import_jsx_runtime7.jsx)(O3.Provider, { value: s23, children: (0, import_jsx_runtime7.jsxs)(v2.Provider, { value: n22, children: [o23, t28 && (0, import_jsx_runtime7.jsx)(x8, { name: e27 })] }) });
}, "k");
var F3 = (0, import_react8.memo)(k5);
F3.displayName = "PortalProvider";
var $ = /* @__PURE__ */ __name((e27) => (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: e27 }), "$");
var q3 = /* @__PURE__ */ __name((e27) => {
  const { name: t28, forwardProps: o23, render: n22 = $ } = e27, r32 = !(0, import_core9.useDidFinishSSR)(), s23 = V2(t28), { registerHost: a19, deregisterHost: i24 } = h3(e27.name);
  return (0, import_react8.useEffect)(() => {
    if (!r32)
      return a19(), () => {
        i24();
      };
  }, [r32]), n22(o23 ? s23.map((l27) => {
    let c26 = l27.node;
    return o23 ? import_react8.default.Children.map(c26, (d20) => import_react8.default.isValidElement(d20) ? import_react8.default.cloneElement(d20, { key: d20.key, ...o23 }) : d20) : c26;
  }) : s23.map((l27) => l27.node));
}, "q");
var x8 = (0, import_react8.memo)(q3);
x8.displayName = "PortalHost";
var z4 = /* @__PURE__ */ __name((e27) => {
  const { name: t28, hostName: o23, handleOnMount: n22, handleOnUnmount: r32, handleOnUpdate: s23, children: a19 } = e27, { addPortal: i24, removePortal: l27 } = h3(o23), c26 = (0, import_react8.useId)(), d20 = t28 || c26, H14 = (0, import_core9.useEvent)(() => {
    n22 ? n22(() => i24(d20, a19)) : i24(d20, a19);
  }), N12 = (0, import_core9.useEvent)(() => {
    r32 ? r32(() => l27(d20)) : l27(d20);
  }), S19 = (0, import_core9.useEvent)(() => {
    s23 ? s23(() => i24(d20, a19)) : i24(d20, a19);
  });
  return (0, import_core9.useIsomorphicLayoutEffect)(() => (H14(), () => {
    N12();
  }), []), (0, import_react8.useEffect)(() => {
    S19();
  }, [a19]), null;
}, "z");
var B5 = (0, import_react8.memo)(z4);
B5.displayName = "Portal";

// node_modules/@tamagui/remove-scroll/dist/esm/RemoveScroll.js
var import_jsx_runtime8 = require("react/jsx-runtime");
var import_react_remove_scroll = __toESM(require_es57());
var r7 = /* @__PURE__ */ __name((o23) => o23.children ? (0, import_jsx_runtime8.jsx)(import_react_remove_scroll.RemoveScroll, { ...o23 }) : null, "r");
r7.classNames = import_react_remove_scroll.RemoveScroll.classNames;

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_jsx_runtime10 = require("react/jsx-runtime");
var import_core11 = require("@tamagui/core-node");

// node_modules/@tamagui/use-constant/dist/esm/index.mjs
var import_react9 = require("react");
function o7(t28) {
  if (typeof document > "u")
    return (0, import_react9.useMemo)(() => t28(), []);
  const e27 = (0, import_react9.useRef)();
  return e27.current || (e27.current = { v: t28() }), e27.current.v;
}
__name(o7, "o");

// node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react10 = require("react");
var g4 = /* @__PURE__ */ __name((t28) => t28(), "g");
function A6({ prop: t28, defaultProp: f24, onChange: l27, strategy: T16 = "prop-wins", preventUpdate: d20, transition: p26 }) {
  const [e27, r32] = (0, import_react10.useState)(t28 ?? f24), n22 = (0, import_react10.useRef)(e27), o23 = T16 === "prop-wins" && t28 !== void 0, C16 = o23 ? t28 : e27, a19 = a5(l27 || v3), i24 = p26 ? import_react10.startTransition : g4;
  (0, import_react10.useEffect)(() => {
    t28 !== void 0 && (n22.current = t28, i24(() => {
      r32(t28);
    }));
  }, [t28]), (0, import_react10.useEffect)(() => {
    o23 || e27 !== n22.current && (n22.current = e27, a19(e27));
  }, [a19, e27, o23]);
  const b17 = a5((s23) => {
    if (!d20)
      if (o23) {
        const S19 = typeof s23 == "function" ? s23(n22.current) : s23;
        a19(S19);
      } else
        i24(() => {
          r32(s23);
        });
  });
  return [C16, b17];
}
__name(A6, "A");
var v3 = /* @__PURE__ */ __name(() => {
}, "v");

// node_modules/@tamagui/use-keyboard-visible/dist/esm/useKeyboardVisible.js
var import_react11 = require("react");
var import_react_native2 = require("react-native-web-lite");
var n7 = /* @__PURE__ */ __name(() => {
  const [o23, e27] = (0, import_react11.useState)(false);
  return (0, import_react11.useEffect)(() => {
    const i24 = import_react_native2.Keyboard.addListener("keyboardDidShow", () => {
      e27(true);
    }), d20 = import_react_native2.Keyboard.addListener("keyboardDidHide", () => {
      e27(false);
    });
    return () => {
      d20.remove(), i24.remove();
    };
  }, []), o23;
}, "n");

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_react13 = __toESM(require("react"));
var import_react_native4 = require("react-native-web-lite");

// node_modules/@tamagui/sheet/dist/esm/constants.js
var e11 = "Sheet";
var o8 = "SheetHandle";

// node_modules/@tamagui/sheet/dist/esm/SheetContext.js
var [o9, d5] = V(e11);
var [h5, P6] = o9(e11, {});

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_core10 = require("@tamagui/core-node");

// node_modules/@tamagui/scroll-view/dist/esm/ScrollView.js
var import_web3 = require("@tamagui/core-node");
var import_react_native3 = require("react-native-web-lite");
(0, import_web3.setupReactNative)({ ScrollView: import_react_native3.ScrollView });
var a8 = (0, import_web3.styled)(import_react_native3.ScrollView, { name: "ScrollView", scrollEnabled: true, variants: { fullscreen: { true: a6 } } }, { isReactNative: true });

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_react12 = require("react");
var D4 = "SheetScrollView";
var W3 = (0, import_react12.forwardRef)(({ __scopeSheet: c26, children: s23, ...i24 }, g16) => {
  const { scrollBridge: r32, position: d20, snapPoints: u16, frameSize: S19, open: p26 } = P6(D4, c26), f24 = (0, import_react12.useRef)(null), m24 = u16[d20] ?? 0, [n22, y15] = (0, import_react12.useState)(0), l27 = 100 - m24;
  p26 && l27 !== n22 && y15(l27);
  const e27 = (0, import_react12.useRef)({ lastPageY: 0, dragAt: 0, dys: [], isScrolling: false, isDragging: false }), Y11 = /* @__PURE__ */ __name(() => {
    if (!e27.current.isDragging)
      return;
    e27.current.isDragging = false, r32.scrollStartY = -1, e27.current.isScrolling = false;
    let o23 = 0;
    if (e27.current.dys.length) {
      const t28 = e27.current.dys.slice(-10);
      o23 = (t28.length ? t28.reduce((h17, w23) => h17 + w23, 0) : 0) / t28.length * 0.04;
    }
    e27.current.dys = [], r32.release({ dragAt: e27.current.dragAt, vy: o23 });
  }, "Y");
  return (0, import_jsx_runtime9.jsxs)(a8, { ref: (0, import_core10.composeRefs)(f24, g16), flex: 1, scrollEventThrottle: 8, onScroll: (o23) => {
    const { y: t28 } = o23.nativeEvent.contentOffset;
    r32.y = t28, t28 > 0 && (r32.scrollStartY = -1);
  }, onStartShouldSetResponder: () => (r32.scrollStartY = -1, e27.current.isDragging = true, true), onMoveShouldSetResponder: () => false, onResponderRelease: Y11, className: "_ovs-contain", ...i24, children: [(0, import_react12.useMemo)(() => s23, [s23]), (0, import_jsx_runtime9.jsx)(import_core10.Stack, { height: n22 / 100 * S19, width: 0 })] });
});

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var Ve = (0, import_core11.styled)(i7, { name: o8, height: 10, borderRadius: 100, backgroundColor: "$background", zIndex: 10, marginHorizontal: "35%", marginBottom: "$2", opacity: 0.5, hoverStyle: { opacity: 0.7 }, variants: { open: { true: { pointerEvents: "auto" }, false: { opacity: 0, pointerEvents: "none" } } } });
var Dt = Ve.extractable(({ __scopeSheet: n22, ...o23 }) => {
  const t28 = P6(o8, n22);
  return (0, import_jsx_runtime10.jsx)(Ve, { onPress: () => {
    const i24 = t28.snapPoints.length + (t28.dismissOnSnapToBottom ? -1 : 0), s23 = (t28.position + 1) % i24;
    t28.setPosition(s23);
  }, open: t28.open, ...o23 });
});
var Oe = "SheetOverlay";
var ke = (0, import_core11.styled)(k4, { name: Oe, fullscreen: true, backgrounded: true, opacity: 0.5, zIndex: 0, variants: { closed: { true: { opacity: 0, pointerEvents: "none" }, false: { pointerEvents: "auto" } } } });
var Tt = ke.extractable(({ __scopeSheet: n22, ...o23 }) => {
  const t28 = P6(Oe, n22);
  return (0, import_jsx_runtime10.jsx)(ke, { closed: !t28.open || t28.hidden, ...o23, onPress: (0, import_core11.mergeEvent)(o23.onPress, t28.dismissOnOverlayPress ? () => {
    t28.setOpen(false);
  } : void 0) });
});
var N2 = import_core11.isClient ? document.createElement("style") : null;
N2 && document.head.appendChild(N2);
var Ne = (0, import_core11.styled)(c5, { name: e11, flex: 1, backgroundColor: "$background", borderTopLeftRadius: "$true", borderTopRightRadius: "$true", width: "100%", maxHeight: "100%", overflow: "hidden", pointerEvents: "auto" });
var It = Ne.extractable((0, import_react13.forwardRef)(({ __scopeSheet: n22, ...o23 }, t28) => {
  const i24 = P6(e11, n22), s23 = c3(t28, i24.contentRef);
  return (0, import_jsx_runtime10.jsx)(Ne, { ref: s23, ...o23 });
}));
var Y2 = 1e4;
var Ht = { Handle: Dt, Frame: It, Overlay: Tt, ScrollView: W3 };
var Ae = (0, import_react13.createContext)({ zIndex: 40 });
var De = /* @__PURE__ */ __name(() => {
  const n22 = (0, import_react13.useContext)(He), o23 = n22 == null ? void 0 : n22.hidden, t28 = o23 && (n22 == null ? void 0 : n22.open);
  return { controller: n22, isHidden: o23, isShowingNonSheet: t28 };
}, "De");
var Mt = (0, import_core11.withStaticProperties)((0, import_react13.forwardRef)(function(o23, t28) {
  const i24 = (0, import_core11.useDidFinishSSR)(), { isShowingNonSheet: s23 } = De();
  return s23 || !i24 ? null : (0, import_jsx_runtime10.jsx)(Ft, { ref: t28, ...o23 });
}), Ht);
var Ft = (0, import_core11.themeable)((0, import_react13.forwardRef)(function(o23, t28) {
  const i24 = (0, import_react13.useContext)(Ae), { isHidden: s23, controller: l27 } = De(), { __scopeSheet: B12, snapPoints: A20 = [80], open: Fe3, defaultOpen: Yt, children: _e3, position: Ye3, onPositionChange: Be4, onOpenChange: L15, defaultPosition: Le4, dismissOnOverlayPress: ze5 = true, animationConfig: Ge3, dismissOnSnapToBottom: b17 = false, forceRemoveScrollEnabled: $e3 = null, disableDrag: Ke3, modal: D14 = false, zIndex: T16 = i24.zIndex + 1, moveOnKeyboardChange: Xe2 = false, portalProps: Ue4 } = o23;
  process.env.NODE_ENV === "development" && A20.some((e27) => e27 < 0 || e27 > 100) && console.warn("\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame");
  const ne6 = (0, import_react13.useRef)(null), We3 = c3(t28, ne6), y15 = (0, import_core11.useAnimationDriver)();
  if (!y15)
    throw new Error("Must set animations in tamagui.config.ts");
  const oe9 = Ke3 ?? (l27 == null ? void 0 : l27.disableDrag), Ze3 = n7(), qe3 = (0, import_core11.useThemeName)(), re5 = import_react13.default.useRef(null), u16 = o7(() => ({ enabled: false, y: 0, paneY: 0, paneMinY: 0, scrollStartY: -1, drag: () => {
  }, release: () => {
  }, scrollLock: false })), Je3 = /* @__PURE__ */ __name((e27) => {
    var r32;
    (r32 = l27 == null ? void 0 : l27.onOpenChange) == null || r32.call(l27, e27), L15 == null || L15(e27);
  }, "Je"), [a19, z14] = A6({ prop: (l27 == null ? void 0 : l27.open) ?? Fe3, defaultProp: true, onChange: Je3, strategy: "most-recent-wins", transition: true }), [d20, Qe2] = (0, import_react13.useState)(0), g16 = (0, import_react13.useMemo)(() => b17 ? [...A20, 0] : A20, [JSON.stringify(A20), b17]), [je3, G16] = A6({ prop: Ye3, defaultProp: Le4 || (a19 ? 0 : -1), onChange: Be4, strategy: "most-recent-wins", transition: true }), C16 = a19 === false ? -1 : je3;
  a19 && b17 && C16 === g16.length - 1 && G16(0);
  const x19 = (0, import_react13.useCallback)((e27) => {
    b17 && e27 === g16.length - 1 ? z14(false) : G16(e27);
  }, [b17, g16.length, G16, z14]), { useAnimatedNumber: et, useAnimatedNumberReaction: tt, useAnimatedNumberStyle: nt } = y15, c26 = et(Y2), v14 = (0, import_react13.useRef)(0);
  tt({ value: c26, hostRef: ne6 }, (e27) => {
    y15.isReactNative && (v14.current = e27, u16.paneY = e27);
  });
  function se6() {
    c26.stop(), u16.onFinishAnimate && (u16.onFinishAnimate(), u16.onFinishAnimate = void 0);
  }
  __name(se6, "se");
  const ae4 = a19 && C16 < 0;
  (0, import_react13.useEffect)(() => {
    ae4 && x19(0);
  }, [x19, ae4]);
  const R17 = (0, import_react13.useMemo)(() => g16.map((e27) => _t(e27, d20)), [d20, g16]), [ie5, le5] = (0, import_react13.useState)(a19 ? 1 : 0);
  a19 && ie5 === 0 && le5(1), (0, import_react13.useEffect)(() => {
    if (!a19) {
      const e27 = setTimeout(() => {
        le5(0);
      }, 400);
      return () => {
        clearTimeout(e27);
      };
    }
  }, [a19]);
  const I12 = (0, import_core11.useEvent)((e27) => {
    const r32 = c26.getValue();
    if (s23 && a19 || !r32 || d20 === 0)
      return;
    const f24 = s23 || e27 === -1 ? d20 === 0 ? Y2 : d20 : R17[e27];
    if (v14.current === f24)
      return;
    if (se6(), s23) {
      c26.setValue(f24, { type: "timing", duration: 0 }), v14.current = f24;
      return;
    }
    const w23 = v14.current === Y2;
    c26.setValue(f24, { ...Ge3, type: "spring", overshootClamping: w23 });
  });
  (0, import_core11.useIsomorphicLayoutEffect)(() => {
    I12(C16);
  }, [s23, d20, C16, I12]);
  const [$8, ot] = (0, import_react13.useState)(false), ce5 = !import_core11.isWeb && D14 && $8, H14 = (0, import_react13.useContext)(Te), rt = (0, import_react13.useCallback)((e27) => {
    ot(e27);
  }, []), K11 = (0, import_react13.useMemo)(() => {
    if (oe9 || !d20 || $8)
      return;
    const e27 = R17[0];
    u16.paneMinY = e27;
    let r32 = v14.current;
    function p26(S19) {
      N2 && (S19 ? N2.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }" : N2.innerText = "");
    }
    __name(p26, "p");
    const f24 = /* @__PURE__ */ __name(({ vy: S19, dragAt: m24 }) => {
      X9 = false, he5 = false, p26(false);
      const P17 = m24 + r32 + d20 * S19 * 0.2;
      let O12 = 0, Se4 = 1 / 0;
      for (let M17 = 0; M17 < R17.length; M17++) {
        const U10 = R17[M17], Pe8 = P17 > U10 ? P17 - U10 : U10 - P17;
        Pe8 < Se4 && (Se4 = Pe8, O12 = M17);
      }
      x19(O12), I12(O12);
    }, "f"), w23 = /* @__PURE__ */ __name((S19, m24) => {
      f24({ vy: m24.vy, dragAt: m24.dy });
    }, "w");
    let he5 = false;
    const dt = /* @__PURE__ */ __name((S19, { dy: m24 }) => {
      const V15 = u16.y !== 0, P17 = m24 < 0, O12 = u16.paneY - 5 <= u16.paneMinY;
      return V15 ? (he5 = true, false) : O12 && !V15 && P17 ? false : Math.abs(m24) > 5;
    }, "dt"), fe5 = /* @__PURE__ */ __name(() => {
      p26(true), se6(), r32 = v14.current;
    }, "fe");
    let X9 = false;
    return u16.drag = (S19) => {
      X9 || (X9 = true, fe5());
      const m24 = S19 + r32;
      c26.setValue(Ie(m24, e27), { type: "direct" });
    }, u16.release = f24, import_react_native4.PanResponder.create({ onMoveShouldSetPanResponder: dt, onPanResponderGrant: fe5, onPanResponderMove: (S19, { dy: m24 }) => {
      const V15 = m24 + r32, P17 = Ie(V15, e27);
      c26.setValue(P17, { type: "direct" });
    }, onPanResponderEnd: w23, onPanResponderTerminate: w23, onPanResponderRelease: w23 });
  }, [oe9, $8, I12, d20, R17, x19]);
  let ue3 = null, de7 = null, pe4 = null;
  import_react13.default.Children.forEach(_e3, (e27) => {
    var r32, p26;
    if ((0, import_react13.isValidElement)(e27))
      switch ((p26 = (r32 = e27.type) == null ? void 0 : r32.staticConfig) == null ? void 0 : p26.componentName) {
        case "SheetHandle":
          ue3 = e27;
          break;
        case "Sheet":
          pe4 = e27;
          break;
        case "SheetOverlay":
          de7 = e27;
          break;
        default:
          console.warn("Warning: passed invalid child to Sheet", e27);
      }
  });
  const st = nt(c26, (e27) => ({ transform: [{ translateY: d20 === 0 ? Y2 : e27 }] })), E18 = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
    if (import_core11.isWeb || !Xe2)
      return;
    const e27 = import_react_native4.Keyboard.addListener("keyboardDidShow", (p26) => {
      E18.current === null && (E18.current = c26.getValue(), c26.setValue(Math.max(c26.getValue() - p26.endCoordinates.height, 0)));
    }), r32 = import_react_native4.Keyboard.addListener("keyboardDidHide", () => {
      E18.current !== null && (c26.setValue(E18.current), E18.current = null);
    });
    return () => {
      r32.remove(), e27.remove();
    };
  }, []);
  const at = y15.NumberView ?? y15.View;
  (0, import_core11.useIsomorphicLayoutEffect)(() => {
    if (H14 && a19)
      return H14(true), () => {
        H14(false);
      };
  }, [H14, a19]);
  const it = (0, import_react13.useMemo)(() => ({ zIndex: T16 }), [T16]), lt = (0, import_react13.useCallback)((e27) => {
    var p26;
    let r32 = (p26 = e27.nativeEvent) == null ? void 0 : p26.layout.height;
    import_core11.isWeb && import_core11.isTouchable && !a19 && (r32 += 100), r32 && Qe2(() => r32);
  }, [Ze3]), ct = $e3 ?? (a19 && D14), me5 = (0, import_jsx_runtime10.jsx)(Ae.Provider, { value: it, children: (0, import_jsx_runtime10.jsxs)(h5, { modal: D14, contentRef: re5, frameSize: d20, dismissOnOverlayPress: ze5, dismissOnSnapToBottom: b17, open: a19, hidden: !!s23, scope: B12, position: C16, snapPoints: g16, setPosition: x19, setOpen: z14, scrollBridge: u16, children: [ce5 ? null : de7, (0, import_jsx_runtime10.jsxs)(at, { ref: We3, ...K11 == null ? void 0 : K11.panHandlers, onLayout: lt, pointerEvents: a19 && !ce5 ? "auto" : "none", animation: o23.animation, style: [{ position: "absolute", zIndex: T16, width: "100%", height: "100%", opacity: ie5 }, st], children: [ue3, (0, import_jsx_runtime10.jsx)(r7, { forwardProps: true, enabled: ct, allowPinchZoom: true, shards: [re5], removeScrollBar: false, children: pe4 })] })] }) }), ut = (0, import_react13.useContext)(a3);
  if (D14) {
    const e27 = (0, import_jsx_runtime10.jsx)(x7, { zIndex: T16, ...Ue4, children: (0, import_jsx_runtime10.jsx)(import_core11.Theme, { forceClassName: true, name: qe3, children: (0, import_jsx_runtime10.jsx)(a3.Provider, { value: ut, children: me5 }) }) });
    return import_core11.isWeb ? e27 : (0, import_jsx_runtime10.jsx)(Te.Provider, { value: rt, children: e27 });
  }
  return me5;
}), { componentName: "Sheet" });
var Te = (0, import_react13.createContext)(null);
var Sn = Mt;
function _t(n22, o23) {
  if (!o23)
    return 0;
  if (n22 === void 0)
    return console.warn("No snapPoint"), 0;
  const t28 = n22 / 100;
  return Math.round(o23 - t28 * o23);
}
__name(_t, "_t");
function Ie(n22, o23, t28 = 25) {
  if (n22 < o23) {
    const i24 = o23 - n22, s23 = Math.min(t28, i24) / t28, B12 = -(1.1 - Math.pow(0.1, s23)) * t28;
    return o23 + B12;
  }
  return n22;
}
__name(Ie, "Ie");
var He = (0, import_react13.createContext)(null);
var Pn = /* @__PURE__ */ __name(({ children: n22, onOpenChange: o23, ...t28 }) => {
  const i24 = (0, import_core11.useEvent)(o23), s23 = (0, import_react13.useMemo)(() => ({ open: t28.open, hidden: t28.hidden, disableDrag: t28.disableDrag, onOpenChange: i24 }), [i24, t28.open, t28.hidden, t28.disableDrag]);
  return (0, import_jsx_runtime10.jsx)(He.Provider, { value: s23, children: n22 });
}, "Pn");

// node_modules/@tamagui/text/dist/esm/SizableText.js
var import_get_font_sized = __toESM(require_cjs7());
var import_web4 = require("@tamagui/core-node");
var s6 = (0, import_web4.styled)(import_web4.Text, { name: "SizableText", fontFamily: "$body", variants: { size: import_get_font_sized.getFontSized }, defaultVariants: { size: "$true" } });

// node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_web5 = require("@tamagui/core-node");
var p10 = (0, import_web5.styled)(s6, { name: "Paragraph", tag: "p", userSelect: "auto", color: "$color", size: "$true" });

// node_modules/@tamagui/text/dist/esm/Headings.js
var import_web6 = require("@tamagui/core-node");
var t9 = (0, import_web6.styled)(p10, { tag: "span", name: "Heading", accessibilityRole: "header", fontFamily: "$heading", size: "$8", margin: 0 });
var s7 = (0, import_web6.styled)(t9, { name: "H1", tag: "h1", size: "$10" });
var i9 = (0, import_web6.styled)(t9, { name: "H2", tag: "h2", size: "$9" });
var r11 = (0, import_web6.styled)(t9, { name: "H3", tag: "h3", size: "$8" });
var H = (0, import_web6.styled)(t9, { name: "H4", tag: "h4", size: "$7" });
var m8 = (0, import_web6.styled)(t9, { name: "H5", tag: "h5", size: "$6" });
var g5 = (0, import_web6.styled)(t9, { name: "H6", tag: "h6", size: "$5" });

// node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_react14 = __toESM(require("react"));
function W5(d20, x19, m24) {
  const { children: i24, textProps: u16, size: l27, noTextWrap: z14, color: s23, fontFamily: f24, fontSize: c26, fontWeight: a19, letterSpacing: p26, textAlign: h17, fontStyle: g16 } = x19;
  if (z14 || !i24)
    return [i24];
  const T16 = import_react14.default.Children.toArray(i24), e27 = [];
  let o23 = false;
  const t28 = { ...m24 };
  s23 && (t28.color = s23), f24 && (t28.fontFamily = f24), c26 && (t28.fontSize = c26), a19 && (t28.fontWeight = a19), p26 && (t28.letterSpacing = p26), h17 && (t28.textAlign = h17), l27 && (t28.size = l27), g16 && (t28.fontStyle = g16);
  function y15() {
    if (!o23)
      return;
    const n22 = e27.length - 1, r32 = e27[n22];
    e27[n22] = (0, import_jsx_runtime11.jsx)(d20, { ...t28, ...u16, children: r32 }, n22);
  }
  __name(y15, "y");
  for (const n22 of T16) {
    const r32 = e27[e27.length - 1], S19 = typeof n22 == "string";
    S19 ? o23 ? r32.push(n22) : e27.push([n22]) : (y15(), e27.push(n22)), o23 = S19;
  }
  return y15(), e27;
}
__name(W5, "W");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var c8 = __toESM(require("react"));
var Y3 = "Dialog";
var [Z2, _e] = V(Y3);
var [$2, g6] = Z2(Y3);
var w6 = "DialogTrigger";
var Me2 = (0, import_core12.styled)(c5, { name: w6 });
var _5 = c8.forwardRef((e27, o23) => {
  const { __scopeDialog: n22, ...t28 } = e27, r32 = g6(w6, n22), s23 = c3(o23, r32.triggerRef);
  return (0, import_jsx_runtime12.jsx)(Me2, { tag: "button", "aria-haspopup": "dialog", "aria-expanded": r32.open, "aria-controls": r32.contentId, "data-state": G5(r32.open), ...t28, ref: s23, onPress: (0, import_core12.composeEventHandlers)(e27.onPress, r32.onOpenToggle) });
});
_5.displayName = w6;
var R6 = "DialogPortal";
var [ke2, K4] = Z2(R6, { forceMount: void 0 });
var We = (0, import_core12.styled)(c5, { alignItems: "center", justifyContent: "center", fullscreen: true, zIndex: 100, ...import_core12.isWeb && { maxHeight: "100vh", position: "fixed" } });
var j4 = /* @__PURE__ */ __name((e27) => {
  const o23 = (0, import_core12.useThemeName)(), n22 = g6(R6, e27.__scopeDialog);
  return (0, import_jsx_runtime12.jsx)(B5, { hostName: e27.hostName, children: (0, import_jsx_runtime12.jsx)(Ve2, { ...e27, themeName: o23, context: n22 }) });
}, "j");
function Ve2(e27) {
  const { __scopeDialog: o23, children: n22, context: t28, themeName: r32, space: s23, spaceDirection: a19, separator: l27 } = e27;
  let u16 = n22;
  return (s23 || l27) && (u16 = (0, import_core12.spacedChildren)({ children: n22, separator: l27, space: s23, direction: a19 })), (0, import_jsx_runtime12.jsx)($2, { scope: o23, ...t28, children: (0, import_jsx_runtime12.jsx)(import_core12.Theme, { name: r32, children: u16 }) });
}
__name(Ve2, "Ve");
var M4 = /* @__PURE__ */ __name((e27) => {
  const { __scopeDialog: o23, forceMount: n22, children: t28, ...r32 } = e27, s23 = g6(R6, o23), a19 = n22 || s23.open, [l27, u16] = c8.useState(!a19);
  a19 && l27 && u16(false);
  const d20 = (0, import_jsx_runtime12.jsx)(B3, { onExitComplete: () => {
    u16(true);
  }, children: a19 ? t28 : null });
  return h7(s23) ? t28 : s23.modal ? l27 ? null : (0, import_jsx_runtime12.jsx)(j4, { __scopeDialog: o23, children: (0, import_jsx_runtime12.jsx)(ke2, { scope: o23, forceMount: n22, children: (0, import_jsx_runtime12.jsx)(We, { pointerEvents: a19 ? "auto" : "none", ...r32, children: d20 }) }) }) : d20;
}, "M");
M4.displayName = R6;
var x9 = "DialogOverlay";
var z5 = (0, import_core12.styled)(ke, { name: x9 });
var k7 = z5.extractable(c8.forwardRef(({ __scopeDialog: e27, ...o23 }, n22) => {
  const t28 = K4(x9, e27), { forceMount: r32 = t28.forceMount, ...s23 } = o23, a19 = g6(x9, e27), l27 = h7(a19);
  return !r32 && (!a19.modal || l27) ? null : (0, import_jsx_runtime12.jsx)(He2, { context: a19, ...s23, ref: n22 });
}));
k7.displayName = x9;
var He2 = c8.forwardRef((e27, o23) => {
  const { context: n22, ...t28 } = e27;
  return (0, import_jsx_runtime12.jsx)(z5, { "data-state": G5(n22.open), pointerEvents: n22.open ? "auto" : "none", ...t28, ref: o23 });
});
var C6 = "DialogContent";
var U3 = (0, import_core12.styled)(k4, { name: C6, tag: "dialog", position: "relative", backgrounded: true, padded: true, radiused: true, elevate: true, variants: { size: { "...size": (e27, o23) => ({}) } }, defaultVariants: { size: "$true" } });
var W6 = U3.extractable(c8.forwardRef(({ __scopeDialog: e27, ...o23 }, n22) => {
  const t28 = K4(C6, e27), { forceMount: r32 = t28.forceMount, ...s23 } = o23, a19 = g6(C6, e27), l27 = a19.modal ? (0, import_jsx_runtime12.jsx)(Le, { context: a19, ...s23, ref: n22 }) : (0, import_jsx_runtime12.jsx)(Ge, { context: a19, ...s23, ref: n22 });
  return import_core12.isWeb ? (0, import_jsx_runtime12.jsx)(r7, { forwardProps: true, enabled: a19.open, allowPinchZoom: a19.allowPinchZoom, shards: [a19.contentRef], removeScrollBar: false, children: (0, import_jsx_runtime12.jsx)("div", { className: "_dsp_contents", children: l27 }) }) : l27;
}));
W6.displayName = C6;
var Le = c8.forwardRef(({ children: e27, context: o23, ...n22 }, t28) => {
  const r32 = c8.useRef(null), s23 = c3(t28, o23.contentRef, r32);
  return import_core12.isWeb && c8.useEffect(() => {
    if (!o23.open)
      return;
    const a19 = r32.current;
    if (a19)
      return (0, import_aria_hidden.hideOthers)(a19);
  }, [o23.open]), (0, import_jsx_runtime12.jsx)(q5, { ...n22, context: o23, ref: s23, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, import_core12.composeEventHandlers)(n22.onCloseAutoFocus, (a19) => {
    var l27;
    a19.preventDefault(), (l27 = o23.triggerRef.current) == null || l27.focus();
  }), onPointerDownOutside: (0, import_core12.composeEventHandlers)(n22.onPointerDownOutside, (a19) => {
    const l27 = a19.detail.originalEvent, u16 = l27.button === 0 && l27.ctrlKey === true;
    (l27.button === 2 || u16) && a19.preventDefault();
  }), onFocusOutside: (0, import_core12.composeEventHandlers)(n22.onFocusOutside, (a19) => a19.preventDefault()), children: e27 });
});
var Ge = c8.forwardRef((e27, o23) => {
  const n22 = c8.useRef(false);
  return (0, import_jsx_runtime12.jsx)(q5, { ...e27, ref: o23, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t28) => {
    var r32, s23;
    (r32 = e27.onCloseAutoFocus) == null || r32.call(e27, t28), t28.defaultPrevented || (n22.current || (s23 = e27.context.triggerRef.current) == null || s23.focus(), t28.preventDefault()), n22.current = false;
  }, onInteractOutside: (t28) => {
    var l27;
    (l27 = e27.onInteractOutside) == null || l27.call(e27, t28), t28.defaultPrevented || (n22.current = true);
    const r32 = t28.target, s23 = e27.context.triggerRef.current;
    if (!(s23 instanceof HTMLElement))
      return;
    s23.contains(r32) && t28.preventDefault();
  } });
});
var q5 = c8.forwardRef((e27, o23) => {
  const { __scopeDialog: n22, trapFocus: t28, onOpenAutoFocus: r32, onCloseAutoFocus: s23, disableOutsidePointerEvents: a19, onEscapeKeyDown: l27, onPointerDownOutside: u16, onFocusOutside: d20, onInteractOutside: S19, context: p26, ...y15 } = e27, T16 = c8.useRef(null), E18 = c3(o23, T16), O12 = h7(p26), v14 = (0, import_jsx_runtime12.jsx)(U3, { id: p26.contentId, "aria-describedby": p26.descriptionId, "aria-labelledby": p26.titleId, "data-state": G5(p26.open), ...y15 });
  return O12 ? (0, import_jsx_runtime12.jsx)(j4, { hostName: oe(p26), children: y15.children }) : import_core12.isWeb ? (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [(0, import_jsx_runtime12.jsx)(import_focus_scope.FocusScope, { loop: true, trapped: t28, onMountAutoFocus: r32, forceUnmount: !p26.open, onUnmountAutoFocus: s23, children: (0, import_jsx_runtime12.jsx)(T3, { disableOutsidePointerEvents: p26.open && a19, forceUnmount: !p26.open, onEscapeKeyDown: l27, onPointerDownOutside: u16, onFocusOutside: d20, onInteractOutside: S19, ref: E18, onDismiss: () => p26.onOpenChange(false), children: v14 }) }), process.env.NODE_ENV === "development" && (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [(0, import_jsx_runtime12.jsx)($e, { titleId: p26.titleId }), (0, import_jsx_runtime12.jsx)(je, { contentRef: T16, descriptionId: p26.descriptionId })] })] }) : v14;
});
var I5 = "DialogTitle";
var Be = (0, import_core12.styled)(i9, { name: I5 });
var V4 = c8.forwardRef((e27, o23) => {
  const { __scopeDialog: n22, ...t28 } = e27, r32 = g6(I5, n22);
  return (0, import_jsx_runtime12.jsx)(Be, { id: r32.titleId, ...t28, ref: o23 });
});
V4.displayName = I5;
var Ye = (0, import_core12.styled)(p10, { name: "DialogDescription" });
var J5 = "DialogDescription";
var H7 = c8.forwardRef((e27, o23) => {
  const { __scopeDialog: n22, ...t28 } = e27, r32 = g6(J5, n22);
  return (0, import_jsx_runtime12.jsx)(Ye, { id: r32.descriptionId, ...t28, ref: o23 });
});
H7.displayName = J5;
var Q3 = "DialogClose";
var L4 = c8.forwardRef((e27, o23) => {
  const { __scopeDialog: n22, displayWhenAdapted: t28, ...r32 } = e27, s23 = g6(Q3, n22, { warn: false, fallback: {} });
  return h7(s23) && !t28 ? null : (0, import_jsx_runtime12.jsx)(c5, { tag: "button", accessibilityLabel: "Dialog Close", ...r32, ref: o23, onPress: (0, import_core12.composeEventHandlers)(e27.onPress, () => s23.onOpenChange(false)) });
});
L4.displayName = Q3;
function G5(e27) {
  return e27 ? "open" : "closed";
}
__name(G5, "G");
var X2 = "DialogTitleWarning";
var [Ze, ee2] = T(X2, { contentName: C6, titleName: I5, docsSlug: "dialog" });
var $e = /* @__PURE__ */ __name(({ titleId: e27 }) => {
  if (process.env.NODE_ENV === "development") {
    const o23 = ee2(X2), n22 = `\`${o23.contentName}\` requires a \`${o23.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o23.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o23.docsSlug}`;
    c8.useEffect(() => {
      import_core12.isWeb && e27 && (document.getElementById(e27) || console.warn(n22));
    }, [n22, e27]);
  }
  return null;
}, "$e");
var Ke = "DialogDescriptionWarning";
var je = /* @__PURE__ */ __name(({ contentRef: e27, descriptionId: o23 }) => {
  if (process.env.NODE_ENV === "development") {
    const t28 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ee2(Ke).contentName}}.`;
    c8.useEffect(() => {
      if (!import_core12.isWeb)
        return;
      const r32 = e27.current;
      if (!(r32 instanceof HTMLElement))
        return;
      const s23 = r32.getAttribute("aria-describedby");
      o23 && s23 && (document.getElementById(o23) || console.warn(t28));
    }, [t28, e27, o23]);
  }
  return null;
}, "je");
var ze = (0, import_core12.withStaticProperties)(c8.forwardRef(function(o23, n22) {
  const { __scopeDialog: t28, children: r32, open: s23, defaultOpen: a19 = false, onOpenChange: l27, modal: u16 = true, allowPinchZoom: d20 = false } = o23, S19 = (0, import_core12.useId)(), p26 = (0, import_core12.useId)(), y15 = (0, import_core12.useId)(), T16 = (0, import_core12.useId)(), E18 = t28 ? Object.keys(t28)[0] : S19, O12 = oe({ scopeKey: E18, contentId: p26 }), v14 = c8.useRef(null), ae4 = c8.useRef(null), [se6, m24] = A6({ prop: s23, defaultProp: a19, onChange: l27 }), ie5 = c8.useCallback(() => {
    m24((b17) => !b17);
  }, [m24]), le5 = { scope: t28, scopeKey: E18, triggerRef: v14, contentRef: ae4, contentId: p26, titleId: y15, descriptionId: T16, open: se6, onOpenChange: m24, onOpenToggle: ie5, modal: u16, allowPinchZoom: d20 }, { when: ce5, AdaptProvider: pe4 } = W({ Contents: c8.useCallback((b17) => (0, import_jsx_runtime12.jsx)(x8, { forwardProps: b17, name: O12 }), [O12]) });
  return c8.useImperativeHandle(n22, () => ({ open: m24 }), [m24]), (0, import_jsx_runtime12.jsx)(pe4, { children: (0, import_jsx_runtime12.jsx)($2, { ...le5, sheetBreakpoint: ce5, children: (0, import_jsx_runtime12.jsx)(Je, { onOpenChange: m24, __scopeDialog: t28, children: r32 }) }) });
}), { Trigger: _5, Portal: M4, Overlay: k7, Content: W6, Title: V4, Description: H7, Close: L4, Sheet: Sn, Adapt: b2 });
var Ue = "DialogSheetContents";
var qe = /* @__PURE__ */ __name(({ name: e27, ...o23 }) => (0, import_jsx_runtime12.jsx)(x8, { forwardProps: o23, name: e27 }), "qe");
qe.displayName = Ue;
var oe = /* @__PURE__ */ __name(({ scopeKey: e27, contentId: o23 }) => `${e27 || o23}SheetContents`, "oe");
var Je = /* @__PURE__ */ __name((e27) => {
  const o23 = g6("DialogSheetController", e27.__scopeDialog), n22 = h7(o23), t28 = te(o23), r32 = (0, import_core12.useGet)(n22);
  return (0, import_jsx_runtime12.jsx)(Pn, { onOpenChange: (s23) => {
    r32() && e27.onOpenChange(s23);
  }, open: o23.open, hidden: t28 === false, children: e27.children });
}, "Je");
var te = /* @__PURE__ */ __name((e27) => {
  const o23 = (0, import_core12.useMedia)();
  return e27.sheetBreakpoint ? e27.sheetBreakpoint === true ? true : o23[e27.sheetBreakpoint] : false;
}, "te");
var h7 = /* @__PURE__ */ __name((e27) => {
  const o23 = te(e27);
  return e27.open === false ? false : o23;
}, "h");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var a10 = __toESM(require("react"));
var import_react_native5 = require("react-native-web-lite");
var G6 = "AlertDialog";
var [ce, pe] = V(G6, [_e]);
var p11 = _e();
var $3 = "AlertDialogTrigger";
var ge = (0, import_core13.styled)(c5, { name: "DialogTrigger" });
var f7 = a10.forwardRef((o23, t28) => {
  if (o23.__native) {
    const { __native: D14, onPress: i24, __onPress: u16, ...g16 } = o23;
    return (0, import_jsx_runtime13.jsx)(ge, { ...g16, onPress: (0, import_core13.composeEventHandlers)(i24, u16) });
  }
  const { __scopeAlertDialog: e27, ...r32 } = o23, l27 = p11(e27);
  return (0, import_jsx_runtime13.jsx)(_5, { ...l27, ...r32, ref: t28 });
});
f7.displayName = $3;
var De3 = "AlertDialogPortal";
var m9 = /* @__PURE__ */ __name((o23) => {
  const { __scopeAlertDialog: t28, ...e27 } = o23, r32 = p11(t28);
  return (0, import_jsx_runtime13.jsx)(M4, { ...r32, ...e27 });
}, "m");
m9.displayName = De3;
var Y4 = "AlertDialogOverlay";
var ue = (0, import_core13.styled)(z5, { name: Y4 });
var y5 = ue.extractable(a10.forwardRef((o23, t28) => {
  const { __scopeAlertDialog: e27, ...r32 } = o23, l27 = p11(e27);
  return (0, import_jsx_runtime13.jsx)(k7, { ...l27, ...r32, ref: t28 });
}));
y5.displayName = Y4;
var A8 = "AlertDialogContent";
var [Ae2, de] = ce(A8);
var C7 = a10.forwardRef((o23, t28) => {
  const { __scopeAlertDialog: e27, children: r32, ...l27 } = o23, D14 = p11(e27), i24 = a10.useRef(null), u16 = c3(t28, i24), g16 = a10.useRef(null);
  return (0, import_jsx_runtime13.jsx)(Ze, { contentName: A8, titleName: T6, docsSlug: "alert-dialog", children: (0, import_jsx_runtime13.jsx)(Ae2, { scope: e27, cancelRef: g16, children: (0, import_jsx_runtime13.jsxs)(W6, { role: "alertdialog", ...D14, ...l27, ref: u16, onOpenAutoFocus: (0, import_core13.composeEventHandlers)(l27.onOpenAutoFocus, (s23) => {
    var d20;
    s23.preventDefault(), import_core13.isWeb && ((d20 = g16.current) == null || d20.focus({ preventScroll: true }));
  }), onPointerDownOutside: (s23) => s23.preventDefault(), onInteractOutside: (s23) => s23.preventDefault(), children: [(0, import_jsx_runtime13.jsx)(import_core13.Slottable, { children: r32 }), process.env.NODE_ENV === "development" && (0, import_jsx_runtime13.jsx)(Pe2, { contentRef: i24 })] }) }) });
});
C7.displayName = A8;
var T6 = "AlertDialogTitle";
var v5 = a10.forwardRef((o23, t28) => {
  const { __scopeAlertDialog: e27, ...r32 } = o23, l27 = p11(e27);
  return (0, import_jsx_runtime13.jsx)(V4, { ...l27, ...r32, ref: t28 });
});
v5.displayName = T6;
var E4 = "AlertDialogDescription";
var _6 = a10.forwardRef((o23, t28) => {
  const { __scopeAlertDialog: e27, ...r32 } = o23, l27 = p11(e27);
  return (0, import_jsx_runtime13.jsx)(H7, { ...l27, ...r32, ref: t28 });
});
_6.displayName = E4;
var R7 = "AlertDialogAction";
var S2 = a10.forwardRef((o23, t28) => {
  const { __scopeAlertDialog: e27, ...r32 } = o23, l27 = p11(e27);
  return (0, import_jsx_runtime13.jsx)(L4, { ...l27, ...r32, ref: t28 });
});
S2.displayName = R7;
var N4 = "AlertDialogCancel";
var O4 = a10.forwardRef((o23, t28) => {
  const { __scopeAlertDialog: e27, ...r32 } = o23, { cancelRef: l27 } = de(N4, e27), D14 = p11(e27), i24 = c3(t28, l27);
  return (0, import_jsx_runtime13.jsx)(L4, { ...D14, ...r32, ref: i24 });
});
O4.displayName = N4;
var Pe2 = /* @__PURE__ */ __name(({ contentRef: o23 }) => (process.env.NODE_ENV === "development" && a10.useEffect(() => {
  var e27;
  if (!import_core13.isWeb)
    return;
  document.getElementById((e27 = o23.current) == null ? void 0 : e27.getAttribute("aria-describedby")) || console.warn(`\`${A8}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${A8}\` by passing a \`${E4}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${A8}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
}, [o23]), null), "Pe");
var fe2 = /* @__PURE__ */ __name((o23) => {
  const { __scopeAlertDialog: t28, native: e27, ...r32 } = o23, l27 = p11(t28);
  if (process.env.TAMAGUI_TARGET === "native") {
    const [D14, i24] = A6({ prop: o23.open, defaultProp: o23.defaultOpen || false, onChange: o23.onOpenChange, transition: true });
    let u16 = null, g16 = "", s23 = "";
    const d20 = [];
    if (b7(a10.Children.toArray(o23.children), (c26) => {
      if (!a10.isValidElement(c26))
        return false;
      const x19 = (0, import_core13.isTamaguiElement)(c26) ? c26.type.staticConfig.componentName : c26.type.displayName;
      switch (x19) {
        case $3:
          return u16 = a10.cloneElement(c26, { __native: true }), false;
        case T6:
          return g16 = h8(c26), false;
        case E4:
          return s23 = h8(c26), false;
        case R7:
        case N4: {
          const k17 = x19 === R7 ? "default" : "cancel", q13 = h8(c26), B12 = /* @__PURE__ */ __name(() => {
            var w23;
            const P17 = c26.props;
            (w23 = P17 == null ? void 0 : P17.onPress) == null || w23.call(P17, { native: true }), i24(false);
          }, "B");
          return d20.push({ style: k17, text: q13, onPress: B12 }), false;
        }
        default:
          return true;
      }
    }), (0, import_core13.useIsomorphicLayoutEffect)(() => {
      !D14 || !e27 || (g16 || s23) && import_react_native5.Alert.alert(g16, s23, d20);
    }, [e27, D14]), e27)
      return a10.cloneElement(u16, { __onPress: () => {
        i24(true);
      } });
  }
  return (0, import_jsx_runtime13.jsx)(ze, { ...l27, ...r32, modal: true });
}, "fe");
function b7(o23, t28) {
  for (const e27 of o23)
    a10.isValidElement(e27) && t28(e27) && e27.props.children && b7(a10.Children.toArray(e27.props.children), t28);
}
__name(b7, "b");
function h8(o23) {
  let t28 = "";
  return b7(a10.Children.toArray(o23), (e27) => typeof e27.props.children == "string" ? (t28 = e27.props.children, false) : true), t28;
}
__name(h8, "h");
var j5 = (0, import_core13.withStaticProperties)(fe2, { Trigger: f7, Portal: m9, Overlay: y5, Content: C7, Action: S2, Cancel: O4, Title: v5, Description: _6 });
j5.displayName = G6;

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_jsx_runtime14 = require("react/jsx-runtime");
var import_core14 = require("@tamagui/core-node");
var import_image = __toESM(require_cjs8());

// node_modules/@tamagui/shapes/dist/esm/Square.js
var import_web7 = require("@tamagui/core-node");

// node_modules/@tamagui/shapes/dist/esm/getShapeSize.js
var h9 = /* @__PURE__ */ __name((t28, { tokens: r32 }) => {
  const i24 = r32.size[t28] ?? t28, a19 = r32.size[t28] ?? t28;
  return { width: i24, height: a19, minWidth: i24, maxWidth: i24, maxHeight: a19, minHeight: a19 };
}, "h");

// node_modules/@tamagui/shapes/dist/esm/Square.js
var p12 = (0, import_web7.styled)(k4, { name: "Square", alignItems: "center", justifyContent: "center", variants: { circular: { true: { borderRadius: 1e5 } }, size: { "...size": h9 } } });

// node_modules/@tamagui/shapes/dist/esm/Circle.js
var import_web8 = require("@tamagui/core-node");
var c9 = (0, import_web8.styled)(p12, { name: "Circle", circular: true });

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var t10 = __toESM(require("react"));
var m10 = "Avatar";
var [_7, N5] = V(m10);
var [T7, P10] = _7(m10);
var I6 = "AvatarImage";
var l14 = t10.forwardRef((e27, r32) => {
  var v14;
  const { __scopeAvatar: s23, src: a19, onLoadingStatusChange: n22 = /* @__PURE__ */ __name(() => {
  }, "n"), ...i24 } = e27, o23 = P10(I6, s23), [c26, p26] = t10.useState("idle"), b17 = (0, import_core14.getVariantExtras)(e27), g16 = (0, import_core14.getVariableValue)((v14 = h9(o23.size, b17)) == null ? void 0 : v14.width);
  return t10.useEffect(() => {
    p26("idle");
  }, [JSON.stringify(a19)]), t10.useEffect(() => {
    n22(c26), o23.onImageLoadingStatusChange(c26);
  }, [c26]), (0, import_jsx_runtime14.jsx)(c5, { fullscreen: true, zIndex: 1, children: (0, import_jsx_runtime14.jsx)(import_image.Image, { fullscreen: true, ...typeof g16 == "number" && !isNaN(g16) && { width: g16, height: g16 }, ...i24, ref: r32, src: a19, onError: () => {
    p26("error");
  }, onLoad: () => {
    p26("loaded");
  } }) });
});
l14.displayName = I6;
var u10 = "AvatarFallback";
var L5 = (0, import_core14.styled)(c5, { name: u10, position: "absolute", fullscreen: true, zIndex: 0 });
var A9 = L5.extractable(t10.forwardRef((e27, r32) => {
  const { __scopeAvatar: s23, delayMs: a19, ...n22 } = e27, i24 = P10(u10, s23), [o23, c26] = t10.useState(a19 === void 0);
  return t10.useEffect(() => {
    if (a19 !== void 0) {
      const p26 = setTimeout(() => c26(true), a19);
      return () => clearTimeout(p26);
    }
  }, [a19]), o23 && i24.imageLoadingStatus !== "loaded" ? (0, import_jsx_runtime14.jsx)(L5, { ...n22, ref: r32 }) : null;
}));
A9.displayName = u10;
var w7 = (0, import_core14.styled)(p12, { name: m10, position: "relative", overflow: "hidden" });
var y6 = (0, import_core14.withStaticProperties)(t10.forwardRef((e27, r32) => {
  const { __scopeAvatar: s23, size: a19 = "$true", ...n22 } = e27, [i24, o23] = t10.useState("idle");
  return (0, import_jsx_runtime14.jsx)(T7, { size: a19, scope: s23, imageLoadingStatus: i24, onImageLoadingStatusChange: o23, children: (0, import_jsx_runtime14.jsx)(w7, { size: a19, ...n22, ref: r32 }) });
}), { Image: l14, Fallback: A9 });
y6.displayName = m10;

// node_modules/@tamagui/button/dist/esm/Button.js
var import_jsx_runtime15 = require("react/jsx-runtime");
var import_font_size = __toESM(require_cjs9());
var import_get_button_sized2 = __toESM(require_cjs6());
var import_helpers_tamagui = __toESM(require_cjs12());
var import_web9 = require("@tamagui/core-node");
var import_react15 = require("react");
var J7 = "Button";
var i11 = (0, import_web9.styled)(k4, { name: J7, tag: "button", justifyContent: "center", alignItems: "center", flexWrap: "nowrap", flexDirection: "row", cursor: "pointer", variants: { defaultStyle: { true: { focusable: true, hoverTheme: true, pressTheme: true, backgrounded: true, borderWidth: 1, borderColor: "transparent", pressStyle: { borderColor: "transparent" }, hoverStyle: { borderColor: "transparent" }, focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": import_get_button_sized2.getButtonSized }, active: { true: { hoverStyle: { backgroundColor: "$background" } } }, disabled: { true: { pointerEvents: "none" } } }, defaultVariants: { size: "$true" } });
var c10 = (0, import_web9.styled)(s6, { name: "ButtonText", userSelect: "none", cursor: "pointer", flexGrow: 0, flexShrink: 1, ellipse: true, variants: { defaultStyle: { true: { color: "$color" } } } });
var O5 = (0, import_react15.forwardRef)(function(o23, l27) {
  const { props: { unstyled: n22, ...r32 } } = j6(o23);
  return (0, import_jsx_runtime15.jsx)(i11, { defaultStyle: !n22, ...r32, ref: l27 });
});
var X3 = { inlineProps: /* @__PURE__ */ new Set(["color", "fontWeight", "fontSize", "fontFamily", "fontStyle", "letterSpacing", "textAlign", "unstyled"]) };
var de2 = i11.extractable((0, import_web9.themeable)(O5, i11.staticConfig), X3);
function j6(t28, { Text: o23 = c10 } = { Text: c10 }) {
  const { children: l27, icon: n22, iconAfter: r32, noTextWrap: q13, theme: H14, space: K11, spaceFlex: x19, scaleIcon: y15 = 1, scaleSpace: h17 = 0.66, separator: g16, color: C16, fontWeight: L15, letterSpacing: Q10, fontSize: U10, fontFamily: Y11, fontStyle: Z10, textAlign: _13, textProps: ee11, ...P17 } = t28, a19 = import_web9.isRSC ? false : (0, import_react15.useContext)(import_web9.ButtonNestingContext), e27 = (0, import_web9.useMediaPropsActive)(t28), s23 = e27.size || "$true", u16 = (typeof s23 == "number" ? s23 * 0.5 : (0, import_font_size.getFontSize)(s23)) * y15, T16 = (0, import_helpers_tamagui.useGetThemedIcon)({ size: u16, color: C16 }), [B12, z14] = [n22, r32].map(T16), p26 = e27.space ?? (0, import_web9.getVariableValue)(u16) * h17, v14 = W5(o23, e27, o23 === c10 ? { defaultStyle: !t28.unstyled } : void 0), m24 = (0, import_web9.spacedChildren)({ space: p26, spaceFlex: x19, separator: g16, direction: e27.flexDirection === "column" || e27.flexDirection === "column-reverse" ? "vertical" : "horizontal", children: [B12, ...v14, z14] }), F16 = a19 ? "span" : t28.accessibilityRole === "link" ? "a" : void 0, I12 = { ...e27.disabled && { focusable: void 0, focusStyle: { borderColor: "$background" } }, tag: F16, ...P17, children: import_web9.isRSC ? m24 : (0, import_jsx_runtime15.jsx)(import_web9.ButtonNestingContext.Provider, { value: true, children: m24 }) };
  return { spaceSize: p26, isNested: a19, props: I12 };
}
__name(j6, "j");

// node_modules/@tamagui/card/dist/esm/Card.js
var import_jsx_runtime16 = require("react/jsx-runtime");
var import_web10 = require("@tamagui/core-node");
var import_react16 = __toESM(require("react"));
var n9 = (0, import_web10.styled)(k4, { name: "Card", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", position: "relative", overflow: "hidden" } }, size: { "...size": (e27, { tokens: r32 }) => ({ borderRadius: r32.radius[e27] ?? e27 }) } }, defaultVariants: { unstyled: false } });
var s8 = (0, import_web10.styled)(k4, { name: "CardHeader", variants: { unstyled: { false: { zIndex: 10, backgroundColor: "transparent", marginBottom: "auto" } }, size: { "...size": (e27, { tokens: r32 }) => ({ padding: r32.space[e27] ?? e27 }) } } });
var C8 = (0, import_web10.styled)(s8, { name: "CardFooter", variants: { unstyled: { false: { zIndex: 5, flexDirection: "row", marginTop: "auto", marginBottom: 0 } } }, defaultVariants: { unstyled: false } });
var g7 = (0, import_web10.styled)(k4, { name: "CardBackground", variants: { unstyled: { false: { zIndex: 0, fullscreen: true, overflow: "hidden", pointerEvents: "none", padding: 0 } } }, defaultVariants: { unstyled: false } });
var w9 = (0, import_web10.withStaticProperties)(n9.extractable((0, import_react16.forwardRef)(({ size: e27, __scopeCard: r32, children: d20, ...p26 }, i24) => (0, import_jsx_runtime16.jsx)(n9, { ref: i24, ...p26, children: import_react16.default.Children.map(d20, (a19) => (0, import_web10.isTamaguiElement)(a19) && !a19.props.size ? (0, import_react16.cloneElement)(a19, { size: e27 }) : a19) }))), { Header: s8, Footer: C8, Background: g7 });

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs9(), 1));

// node_modules/@tamagui/form/dist/esm/Form.js
var import_jsx_runtime17 = require("react/jsx-runtime");
var import_core15 = require("@tamagui/core-node");
var import_react17 = require("react");
var n10 = "Form";
var c12 = (0, import_core15.styled)(import_core15.Stack, { name: n10, tag: "form" });
var [S5] = V(n10);
var [f10, b9] = S5(n10);
var i12 = "FormTrigger";
var F7 = (0, import_core15.styled)(import_core15.Stack, { name: i12 });
var T8 = F7.extractable((0, import_react17.forwardRef)((o23, r32) => {
  const { __scopeForm: e27, children: s23, ...t28 } = o23, P17 = b9(i12, e27);
  return (0, import_jsx_runtime17.jsx)(F7, { tag: "button", ...t28, children: t28.asChild ? (0, import_react17.cloneElement)(s23, { disabled: t28.disabled }) : s23, ref: r32, onPress: (0, import_core15.composeEventHandlers)(o23.onPress, P17.onSubmit) });
}));
function y8({ onSubmit: o23, ...r32 }) {
  return (0, import_jsx_runtime17.jsx)(f10, { scope: r32.__scopeForm, onSubmit: o23, children: (0, import_jsx_runtime17.jsx)(c12, { ...r32, onSubmit: (e27) => e27.preventDefault() }) });
}
__name(y8, "y");
var w10 = (0, import_core15.withStaticProperties)(c12.extractable(y8), { Trigger: T8 });

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs16(), 1));
__reExport(esm_exports2, __toESM(require_cjs12(), 1));
__reExport(esm_exports2, __toESM(require_cjs8(), 1));

// node_modules/@tamagui/label/dist/esm/Label.js
var import_jsx_runtime18 = require("react/jsx-runtime");
var import_focusable = __toESM(require_cjs17());
var import_get_button_sized3 = __toESM(require_cjs6());
var import_get_font_sized2 = __toESM(require_cjs7());
var import_web11 = require("@tamagui/core-node");
var s9 = __toESM(require("react"));
var m13 = "Label";
var [T9, k10] = T(m13, { id: void 0, controlRef: { current: null } });
var L6 = (0, import_web11.styled)(s6, { name: "Label", tag: "label", variants: { unstyled: { false: { size: "$true", color: "$color", backgroundColor: "transparent", display: "flex", alignItems: "center", userSelect: "none", cursor: "default", pressStyle: { color: "$colorPress" } } }, size: { "...size": (e27, r32) => {
  const o23 = (0, import_get_button_sized3.getButtonSized)(e27, r32);
  return { ...(0, import_get_font_sized2.getFontSized)(e27, r32), height: o23.height, lineHeight: o23.height };
} } }, defaultVariants: { unstyled: false } });
var y9 = s9.forwardRef((e27, r32) => {
  const { htmlFor: o23, id: R17, ...h17 } = e27, l27 = s9.useRef(null), f24 = s9.useRef(null), C16 = c3(r32, f24), P17 = (0, import_web11.useId)(), n22 = R17 ?? P17;
  return import_web11.isWeb && s9.useEffect(() => {
    if (o23) {
      const t28 = document.getElementById(o23);
      if (f24.current && t28) {
        const i24 = /* @__PURE__ */ __name(() => t28.getAttribute("aria-labelledby"), "i"), c26 = [n22, i24()].filter(Boolean).join(" ");
        return t28.setAttribute("aria-labelledby", c26), l27.current = t28, () => {
          var b17;
          if (!n22)
            return;
          const u16 = (b17 = i24()) == null ? void 0 : b17.replace(n22, "");
          u16 === "" ? t28.removeAttribute("aria-labelledby") : u16 && t28.setAttribute("aria-labelledby", u16);
        };
      }
    }
  }, [n22, o23]), (0, import_jsx_runtime18.jsx)(T9, { id: n22, controlRef: l27, children: (0, import_jsx_runtime18.jsx)(L6, { role: "heading", id: n22, htmlFor: o23, ...h17, ref: C16, onMouseDown: (t28) => {
    var a19;
    (a19 = e27.onMouseDown) == null || a19.call(e27, t28), !t28.defaultPrevented && t28.detail > 1 && t28.preventDefault();
  }, onPress: (t28) => {
    var a19;
    if ((a19 = e27.onPress) == null || a19.call(e27, t28), import_web11.isWeb) {
      if (o23 || !l27.current || t28.defaultPrevented)
        return;
      const i24 = l27.current.contains(t28.target), c26 = t28.isTrusted === true;
      !i24 && c26 && (l27.current.click(), l27.current.focus());
    } else
      e27.htmlFor && (0, import_focusable.focusFocusable)(e27.htmlFor);
  } }) });
});
y9.displayName = m13;
var w11 = L6.extractable((0, import_web11.themeable)(y9), { neverFlatten: true });
var U5 = /* @__PURE__ */ __name((e27) => {
  const r32 = k10("LabelConsumer"), { controlRef: o23 } = r32;
  return s9.useEffect(() => {
    e27 && (o23.current = e27);
  }, [e27, o23]), r32.id;
}, "U");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs19(), 1));

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
    x: x19,
    y: y15
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i24 = 0; i24 < validMiddleware.length; i24++) {
    const {
      name,
      fn
    } = validMiddleware[i24];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x19,
      y: y15,
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
    x19 = nextX != null ? nextX : x19;
    y15 = nextY != null ? nextY : y15;
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
          x: x19,
          y: y15
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i24 = -1;
      continue;
    }
  }
  return {
    x: x19,
    y: y15,
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
    x: x19,
    y: y15,
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
    x: x19,
    y: y15
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
      x: x19,
      y: y15,
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
      x: x19,
      y: y15
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
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d20) => d20.overflows[0] <= 0).sort((a19, b17) => a19.overflows[1] - b17.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d20) => [d20.placement, d20.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a19, b17) => a19[1] - b17[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
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
        x: x19,
        y: y15
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x19 + diffCoords.x,
        y: y15 + diffCoords.y,
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
        x: x19,
        y: y15,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x20,
              y: y16
            } = _ref;
            return {
              x: x20,
              y: y16
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x: x19,
        y: y15
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
          x: limitedCoords.x - x19,
          y: limitedCoords.y - y15
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
  let x19 = (fallback ? round(rect.width) : rect.width) / width;
  let y15 = (fallback ? round(rect.height) : rect.height) / height;
  if (!x19 || !Number.isFinite(x19)) {
    x19 = 1;
  }
  if (!y15 || !Number.isFinite(y15)) {
    y15 = 1;
  }
  return {
    x: x19,
    y: y15
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
  let x19 = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
  let y15 = (clientRect.top + (addVisualOffsets ? ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0 : 0)) / scale.y;
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
      x19 *= iframeScale.x;
      y15 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x19 += iframeRect.x;
      y15 += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x19,
    y: y15
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
  let x19 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y15 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x19 += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x19,
    y: y15
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
  let x19 = 0;
  let y15 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x19 = visualViewport.offsetLeft;
      y15 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x19,
    y: y15
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
  const x19 = left * scale.x;
  const y15 = top * scale.y;
  return {
    width,
    height,
    x: x19,
    y: y15
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
function deepEqual(a19, b17) {
  if (a19 === b17) {
    return true;
  }
  if (typeof a19 !== typeof b17) {
    return false;
  }
  if (typeof a19 === "function" && a19.toString() === b17.toString()) {
    return true;
  }
  let length, i24, keys;
  if (a19 && b17 && typeof a19 == "object") {
    if (Array.isArray(a19)) {
      length = a19.length;
      if (length != b17.length)
        return false;
      for (i24 = length; i24-- !== 0; ) {
        if (!deepEqual(a19[i24], b17[i24])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a19);
    length = keys.length;
    if (length !== Object.keys(b17).length) {
      return false;
    }
    for (i24 = length; i24-- !== 0; ) {
      if (!Object.prototype.hasOwnProperty.call(b17, keys[i24])) {
        return false;
      }
    }
    for (i24 = length; i24-- !== 0; ) {
      const key = keys[i24];
      if (key === "_owner" && a19.$$typeof) {
        continue;
      }
      if (!deepEqual(a19[key], b17[key])) {
        return false;
      }
    }
    return true;
  }
  return a19 !== a19 && b17 !== b17;
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
var s10 = (0, import_react20.createContext)(null);
var i13 = /* @__PURE__ */ __name((t28) => {
  var e27;
  return (e27 = (0, import_react20.useContext)(s10) || useFloating) == null ? void 0 : e27(t28);
}, "i");

// node_modules/@tamagui/popover/dist/esm/Popover.js
var import_focus_scope2 = __toESM(require_cjs4());

// node_modules/@tamagui/popper/dist/esm/Popper.js
var import_jsx_runtime19 = require("react/jsx-runtime");
var import_core18 = require("@tamagui/core-node");
var import_get_size = __toESM(require_cjs5());
var s11 = __toESM(require("react"));
var import_react_native6 = require("react-native-web-lite");
var V7 = "Popper";
var [j7, q6] = V(V7);
var he2 = q6;
var [G8, E7] = j7(V7);
function be(f24) {
  const { __scopePopper: a19, children: d20, size: P17, strategy: u16 = "absolute", placement: l27 = "bottom", stayInFrame: e27, allowFlip: i24 } = f24, [o23, m24] = s11.useState(false);
  (0, import_core18.useIsomorphicLayoutEffect)(() => {
    m24(true);
  }, []);
  const c26 = s11.useRef(), [r32, y15] = s11.useState(null), [w23, b17] = s11.useState(0), S19 = s11.useRef(), t28 = i13({ strategy: u16, placement: l27, sameScrollView: false, middleware: [e27 ? shift(typeof e27 == "boolean" ? {} : e27) : null, i24 ? flip(typeof i24 == "boolean" ? {} : i24) : null, r32 ? arrow2({ element: r32 }) : null, w23 ? offset(w23) : null].filter(Boolean) }), { refs: p26, middlewareData: A20 } = t28, x19 = c3(S19, y15);
  if ((0, import_core18.useIsomorphicLayoutEffect)(() => {
    t28.reference(c26.current);
  }, [c26]), import_core18.isWeb)
    s11.useEffect(() => {
      if (p26.reference.current && p26.floating.current)
        return autoUpdate(p26.reference.current, p26.floating.current, t28.update);
    }, [t28.update, p26.floating, p26.reference]);
  else {
    const g16 = (0, import_react_native6.useWindowDimensions)(), [z14, n22] = s11.useState(false);
    s11.useEffect(() => {
      const _13 = import_react_native6.Keyboard.addListener("keyboardDidShow", () => {
        n22(true);
      }), M17 = import_react_native6.Keyboard.addListener("keyboardDidHide", () => {
        n22(false);
      });
      return () => {
        _13.remove(), M17.remove();
      };
    }, []), (0, import_core18.useIsomorphicLayoutEffect)(() => {
      t28.update();
    }, [g16, z14]);
  }
  return (0, import_jsx_runtime19.jsx)(G8, { scope: a19, anchorRef: c26, size: P17, arrowRef: x19, arrowStyle: A20.arrow, onArrowSize: b17, isMounted: o23, ...t28, children: d20 });
}
__name(be, "be");
var J8 = "PopperAnchor";
var Re2 = c5.extractable(s11.forwardRef(function(a19, d20) {
  const { __scopePopper: P17, virtualRef: u16, ...l27 } = a19, { anchorRef: e27, getReferenceProps: i24 } = E7(J8, P17), o23 = s11.useRef(null), m24 = c3(d20, o23, e27);
  if (u16)
    return null;
  const c26 = { ref: m24, ...l27 };
  return (0, import_jsx_runtime19.jsx)(c5, { ...i24 ? i24(c26) : c26 });
}));
var Q4 = "PopperContent";
var X4 = (0, import_core18.styled)(k4, { name: "PopperContent", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", alignItems: "center", radiused: true } }, size: { "...size": (f24, { tokens: a19 }) => ({ padding: a19.space[f24], borderRadius: a19.radius[f24] }) } }, defaultVariants: { unstyled: false } });
var Ae3 = s11.forwardRef(function(a19, d20) {
  const { __scopePopper: P17, ...u16 } = a19, { strategy: l27, placement: e27, floating: i24, x: o23, y: m24, getFloatingProps: c26, size: r32, isMounted: y15 } = E7(Q4, P17), w23 = c3(i24, d20), b17 = s11.useMemo(() => (0, import_jsx_runtime19.jsx)(X4, { "data-placement": e27, "data-strategy": l27, size: u16.size || r32, ...u16 }, "popper-content-frame"), [e27, l27, a19]);
  if (!y15)
    return null;
  const S19 = { ref: w23, x: o23 || 0, y: m24 || 0, position: l27 };
  return (0, import_jsx_runtime19.jsx)(c5, { animateOnly: ["transform"], ...c26 ? c26(S19) : S19, children: b17 });
});
var Z3 = "PopperArrow";
var F9 = (0, import_core18.styled)(c5, { name: "PopperArrow", variants: { unstyled: { false: { borderColor: "$borderColor", backgroundColor: "$background", position: "relative" } } }, defaultVariants: { unstyled: false } });
var ee3 = (0, import_core18.styled)(c5, { name: "PopperArrowOuter", variants: { unstyled: { false: { position: "absolute", zIndex: -1, pointerEvents: "none", overflow: "hidden", alignItems: "center", justifyContent: "center" } } }, defaultVariants: { unstyled: false } });
var oe2 = { top: "bottom", right: "left", bottom: "top", left: "right" };
var ge2 = F9.extractable(s11.forwardRef(function(a19, d20) {
  var g16, z14;
  const { __scopePopper: P17, offset: u16, size: l27, borderWidth: e27 = 0, ...i24 } = a19, o23 = E7(Z3, P17), m24 = l27 ?? o23.size, r32 = +(0, import_core18.getVariableValue)((0, import_get_size.stepTokenUpOrDown)("space", m24, -2, [2])), { placement: y15 } = o23, w23 = c3(o23.arrowRef, d20), b17 = ((g16 = o23.arrowStyle) == null ? void 0 : g16.x) || 0, S19 = ((z14 = o23.arrowStyle) == null ? void 0 : z14.y) || 0, t28 = y15 ? y15.split("-")[0] : "top", p26 = { x: b17, y: S19, width: r32, height: r32 }, A20 = {}, x19 = t28 === "bottom" || t28 === "top";
  if (t28) {
    p26[x19 ? "width" : "height"] = r32 * 2;
    const n22 = oe2[t28];
    n22 && (p26[n22] = -r32, A20[n22] = r32 / 2), (n22 === "top" || n22 === "bottom") && (p26.left = 0), (n22 === "left" || n22 === "right") && (p26.top = 0);
  }
  return (0, import_core18.useIsomorphicLayoutEffect)(() => {
    var n22;
    (n22 = o23.onArrowSize) == null || n22.call(o23, r32);
  }, [r32, o23.onArrowSize]), (0, import_jsx_runtime19.jsx)(ee3, { ref: w23, ...p26, children: (0, import_jsx_runtime19.jsx)(F9, { width: r32, height: r32, ...i24, ...A20, rotate: "45deg", ...t28 === "bottom" && { borderBottomWidth: e27, borderRightWidth: e27 }, ...t28 === "top" && { borderTopWidth: e27, borderLeftWidth: e27 }, ...t28 === "right" && { borderTopWidth: e27, borderRightWidth: e27 }, ...t28 === "left" && { borderBottomWidth: e27, borderLeftWidth: e27 } }) });
}));

// node_modules/@tamagui/popover/dist/esm/Popover.js
var s12 = __toESM(require("react"));
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
      map.set(event, (map.get(event) || []).filter((l27) => l27 !== listener));
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
    for (var i24 = 1; i24 < arguments.length; i24++) {
      var source = arguments[i24];
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
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n22) => {
        var _node$context2;
        return node.parentId === n22.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
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
      elements.forEach((el, i24) => {
        tabIndexValues[i24] = el.getAttribute("tabindex");
        el.setAttribute("tabindex", "-1");
      });
      return () => {
        elements.forEach((el, i24) => {
          const value = tabIndexValues[i24];
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
  const e27 = event;
  return e27.target != null && node.contains(e27.target);
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
    function onWheel(e27) {
      if (e27.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e27.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e27.preventDefault();
        (0, import_react_dom2.flushSync)(() => {
          onChange((d20) => d20 + Math[method](dY, remainingScroll * sign));
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
              (0, import_react_dom2.flushSync)(() => onChange((d20) => d20 + scrollDiff));
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
var F10 = /* @__PURE__ */ __name(({ open: t28, setOpen: e27, breakpointActive: n22 }) => (0, import_react23.useCallback)((s23) => {
  const o23 = useFloating2({ ...s23, open: t28, onOpenChange: e27 }), { getReferenceProps: a19, getFloatingProps: r32 } = useInteractions([useRole(o23.context, { role: "dialog" }), useDismiss(o23.context, { enabled: !n22 })]);
  return { ...o23, getReferenceProps: a19, getFloatingProps: r32 };
}, [t28, e27, n22]), "F");

// node_modules/@tamagui/popover/dist/esm/Popover.js
var N6 = "Popover";
var [Ro, xo] = V(N6, [he2]);
var g10 = he2();
var le = xo;
var [E8, f11] = Ro(N6);
var Pe3 = E8;
var V8 = "PopoverAnchor";
var M8 = s12.forwardRef((o23, e27) => {
  const { __scopePopover: t28, ...p26 } = o23, n22 = f11(V8, t28), c26 = g10(t28), { onCustomAnchorAdd: u16, onCustomAnchorRemove: i24 } = n22;
  return s12.useEffect(() => (u16(), () => i24()), [u16, i24]), (0, import_jsx_runtime20.jsx)(Re2, { ...c26, ...p26, ref: e27 });
});
M8.displayName = V8;
var D7 = "PopoverTrigger";
var z7 = s12.forwardRef((o23, e27) => {
  const { __scopePopover: t28, ...p26 } = o23, n22 = f11(D7, t28), c26 = g10(t28), u16 = c3(e27, n22.triggerRef), i24 = (0, import_jsx_runtime20.jsx)(c5, { "aria-haspopup": "dialog", "aria-expanded": n22.open, "data-state": W9(n22.open), ...p26, ref: u16, onPress: (0, import_core19.composeEventHandlers)(o23.onPress, n22.onOpenToggle) });
  return n22.hasCustomAnchor ? i24 : (0, import_jsx_runtime20.jsx)(Re2, { asChild: true, ...c26, children: i24 });
});
z7.displayName = D7;
var R9 = "PopoverContent";
var Oo = X4.extractable(s12.forwardRef(function(e27, t28) {
  const { allowPinchZoom: p26, trapFocus: n22, disableRemoveScroll: c26 = true, zIndex: u16, ...i24 } = e27, d20 = f11(R9, e27.__scopePopover), C16 = s12.useRef(null), A20 = c3(t28, C16), v14 = s12.useRef(false);
  return s12.useEffect(() => {
    if (!d20.open)
      return;
    const a19 = C16.current;
    if (a19)
      return (0, import_aria_hidden3.hideOthers)(a19);
  }, [d20.open]), (0, import_jsx_runtime20.jsx)(Eo, { zIndex: u16, children: (0, import_jsx_runtime20.jsx)(bo, { ...i24, disableRemoveScroll: c26, ref: A20, trapFocus: n22 ?? d20.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, import_core19.composeEventHandlers)(e27.onCloseAutoFocus, (a19) => {
    var P17;
    a19.preventDefault(), v14.current || (P17 = d20.triggerRef.current) == null || P17.focus();
  }), onPointerDownOutside: (0, import_core19.composeEventHandlers)(e27.onPointerDownOutside, (a19) => {
    const P17 = a19.detail.originalEvent, h17 = P17.button === 0 && P17.ctrlKey === true, l27 = P17.button === 2 || h17;
    v14.current = l27;
  }, { checkDefaultPrevented: false }), onFocusOutside: (0, import_core19.composeEventHandlers)(e27.onFocusOutside, (a19) => a19.preventDefault(), { checkDefaultPrevented: false }) }) });
}));
function Eo(o23) {
  const e27 = (0, import_core19.useThemeName)(), t28 = f11(R9, o23.__scopePopover);
  let p26 = o23.children;
  if (import_react_native7.Platform.OS === "android") {
    const c26 = E7(R9, t28.popperScope);
    p26 = (0, import_jsx_runtime20.jsx)(G8, { ...c26, scope: t28.popperScope, children: (0, import_jsx_runtime20.jsx)(E8, { scope: o23.__scopePopover, ...t28, children: o23.children }) });
  }
  const n22 = o23.zIndex ?? 1e3;
  return (0, import_jsx_runtime20.jsx)(x7, { zIndex: n22, children: (0, import_jsx_runtime20.jsxs)(import_core19.Theme, { forceClassName: true, name: e27, children: [!!t28.open && !t28.breakpointActive && (0, import_jsx_runtime20.jsx)(c5, { fullscreen: true, onPress: (0, import_core19.composeEventHandlers)(o23.onPress, t28.onOpenToggle) }), (0, import_jsx_runtime20.jsx)(import_core19.Stack, { zIndex: n22 + 1, children: p26 })] }) });
}
__name(Eo, "Eo");
var bo = s12.forwardRef((o23, e27) => {
  const { __scopePopover: t28, trapFocus: p26, onOpenAutoFocus: n22, onCloseAutoFocus: c26, disableOutsidePointerEvents: u16, onEscapeKeyDown: i24, onPointerDownOutside: d20, onFocusOutside: C16, onInteractOutside: A20, children: v14, disableRemoveScroll: a19, ...P17 } = o23, h17 = g10(t28), l27 = f11(R9, h17.__scopePopover);
  if (l27.breakpointActive) {
    const y15 = s12.Children.toArray(v14).map((m24) => s12.isValidElement(m24) && m24.type === B7 ? m24.props.children : m24);
    return (0, import_jsx_runtime20.jsx)(B5, { hostName: `${l27.scopeKey}PopoverContents`, children: y15 });
  }
  return (0, import_jsx_runtime20.jsx)(B3, { children: !!l27.open && (0, import_jsx_runtime20.jsx)(Ae3, { "data-state": W9(l27.open), id: l27.contentId, pointerEvents: "auto", ref: e27, ...h17, ...P17, children: (0, import_jsx_runtime20.jsx)(r7, { enabled: a19 ? false : l27.open, allowPinchZoom: true, removeScrollBar: false, style: { display: "contents" }, children: p26 === false ? v14 : (0, import_jsx_runtime20.jsx)(import_focus_scope2.FocusScope, { loop: true, trapped: p26 ?? l27.open, onMountAutoFocus: n22, onUnmountAutoFocus: c26, children: import_core19.isWeb ? (0, import_jsx_runtime20.jsx)("div", { style: { display: "contents" }, children: v14 }) : v14 }) }) }, l27.contentId) });
});
var H9 = "PopoverClose";
var K6 = s12.forwardRef((o23, e27) => {
  const { __scopePopover: t28, ...p26 } = o23, n22 = f11(H9, t28);
  return (0, import_jsx_runtime20.jsx)(c5, { ...p26, ref: e27, onPress: (0, import_core19.composeEventHandlers)(o23.onPress, () => n22.onOpenChange(false)) });
});
K6.displayName = H9;
var _o = "PopoverArrow";
var L7 = s12.forwardRef((o23, e27) => {
  const { __scopePopover: t28, ...p26 } = o23, n22 = g10(t28);
  return (0, import_jsx_runtime20.jsx)(ge2, { ...n22, ...p26, ref: e27 });
});
L7.displayName = _o;
var B7 = s12.forwardRef((o23, e27) => (0, import_jsx_runtime20.jsx)(import_react_native7.ScrollView, { ref: e27, ...o23 }));
var ie = (0, import_core19.withStaticProperties)(function(e27) {
  const { __scopePopover: t28, children: p26, open: n22, defaultOpen: c26, onOpenChange: u16, ...i24 } = e27, d20 = (0, import_core19.useId)(), C16 = t28 ? Object.keys(t28)[0] : d20, { when: A20, AdaptProvider: v14 } = W({ Contents: s12.useCallback(() => (0, import_jsx_runtime20.jsx)(x8, { name: `${C16}PopoverContents` }), []) }), a19 = A20, P17 = g10(t28), h17 = s12.useRef(null), [l27, y15] = s12.useState(false), [m24, w23] = A6({ prop: n22, defaultProp: c26 || false, onChange: u16, transition: true }), x19 = Y5(a19), Z10 = F10({ open: m24, setOpen: w23, breakpointActive: x19 }), G16 = { scope: t28, scopeKey: C16, popperScope: P17.__scopePopper, sheetBreakpoint: a19, contentId: (0, import_core19.useId)(), triggerRef: h17, open: m24, breakpointActive: x19, onOpenChange: w23, onOpenToggle: (0, import_core19.useEvent)(() => {
    m24 && x19 || w23(!m24);
  }), hasCustomAnchor: l27, onCustomAnchorAdd: s12.useCallback(() => y15(true), []), onCustomAnchorRemove: s12.useCallback(() => y15(false), []) }, b17 = (0, import_jsx_runtime20.jsx)(be, { ...P17, stayInFrame: true, ...i24, children: (0, import_jsx_runtime20.jsx)(E8, { ...G16, children: (0, import_jsx_runtime20.jsx)(To, { onOpenChange: w23, __scopePopover: t28, children: p26 }) }) });
  return (0, import_jsx_runtime20.jsx)(v14, { children: import_core19.isWeb ? (0, import_jsx_runtime20.jsx)(s10.Provider, { value: Z10, children: b17 }) : b17 });
}, { Anchor: M8, Arrow: L7, Trigger: z7, Content: Oo, Close: K6, Adapt: b2, ScrollView: B7, Sheet: Sn });
function W9(o23) {
  return o23 ? "open" : "closed";
}
__name(W9, "W");
var To = /* @__PURE__ */ __name((o23) => {
  const e27 = f11("PopoverSheetController", o23.__scopePopover), t28 = Io(e27), p26 = e27.breakpointActive, n22 = (0, import_core19.useGet)(t28);
  return (0, import_jsx_runtime20.jsx)(Pn, { onOpenChange: (c26) => {
    n22() && o23.onOpenChange(c26);
  }, open: e27.open, hidden: p26 === false, children: o23.children });
}, "To");
var Y5 = /* @__PURE__ */ __name((o23) => {
  const e27 = (0, import_core19.useMedia)();
  return typeof o23 == "boolean" || !o23 ? !!o23 : e27[o23];
}, "Y");
var Io = /* @__PURE__ */ __name((o23) => {
  const e27 = Y5(o23.sheetBreakpoint);
  return o23.open === false ? false : e27;
}, "Io");

// node_modules/@tamagui/progress/dist/esm/Progress.js
var import_jsx_runtime21 = require("react/jsx-runtime");
var import_core20 = require("@tamagui/core-node");
var import_get_size2 = __toESM(require_cjs5());
var c13 = __toESM(require("react"));
var l16 = "Progress";
var [z8, C10] = V(l16);
var [k11, A12] = z8(l16);
var g11 = "ProgressIndicator";
var E9 = (0, import_core20.styled)(k4, { name: g11, height: "100%", width: "100%", backgrounded: true });
var P11 = E9.extractable(c13.forwardRef((e27, r32) => {
  const { __scopeProgress: a19, ...o23 } = e27, t28 = A12(g11, a19), i24 = t28.max - (t28.value ?? 0), p26 = -t28.width * (i24 / 100);
  return (0, import_jsx_runtime21.jsx)(E9, { "data-state": I8(t28.value, t28.max), "data-value": t28.value ?? void 0, "data-max": t28.max, x: p26, width: t28.width, ...o23, ref: r32 });
}));
P11.displayName = g11;
function D8(e27, r32) {
  return `${Math.round(e27 / r32 * 100)}%`;
}
__name(D8, "D");
function I8(e27, r32) {
  return e27 == null ? "indeterminate" : e27 === r32 ? "complete" : "loading";
}
__name(I8, "I");
function m14(e27) {
  return typeof e27 == "number";
}
__name(m14, "m");
function f12(e27) {
  return m14(e27) && !isNaN(e27) && e27 > 0;
}
__name(f12, "f");
function V9(e27, r32) {
  return m14(e27) && !isNaN(e27) && e27 <= r32 && e27 >= 0;
}
__name(V9, "V");
function F11(e27, r32) {
  return `Invalid prop \`max\` of value \`${e27}\` supplied to \`${r32}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d10}\`.`;
}
__name(F11, "F");
function G9(e27, r32) {
  return `Invalid prop \`value\` of value \`${e27}\` supplied to \`${r32}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d10} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name(G9, "G");
var d10 = 100;
var N7 = (0, import_core20.styled)(k4, { name: l16, borderRadius: 1e5, overflow: "hidden", backgrounded: true, variants: { size: { "...size": (e27) => {
  const r32 = Math.round((0, import_core20.getVariableValue)((0, import_get_size2.getSize)(e27)) * 0.25);
  return { height: r32, minWidth: (0, import_core20.getVariableValue)(r32) * 20, width: "100%" };
} } } });
var x12 = (0, import_core20.withStaticProperties)(N7.extractable(c13.forwardRef((e27, r32) => {
  const { __scopeProgress: a19, value: o23, max: t28, getValueLabel: i24 = D8, size: p26 = "$true", ...u16 } = e27, s23 = f12(t28) ? t28 : d10, n22 = V9(o23, s23) ? o23 : null, _13 = m14(n22) ? i24(n22, s23) : void 0, [T16, L15] = c13.useState(0);
  return (0, import_jsx_runtime21.jsx)(k11, { scope: a19, value: n22, max: s23, width: T16, children: (0, import_jsx_runtime21.jsx)(N7, { size: p26, "aria-valuemax": s23, "aria-valuemin": 0, "aria-valuenow": m14(n22) ? n22 : void 0, "aria-valuetext": _13, role: "progressbar", "data-state": I8(n22, s23), "data-value": n22 ?? void 0, "data-max": s23, ...u16, onLayout: (b17) => {
    var h17;
    L15(b17.nativeEvent.layout.width), (h17 = u16.onLayout) == null || h17.call(u16, b17);
  }, ref: r32 }) });
})), { Indicator: P11 });
x12.displayName = l16, x12.propTypes = { max(e27, r32, a19) {
  const o23 = e27[r32], t28 = String(o23);
  return o23 && !f12(o23) ? new Error(F11(t28, a19)) : null;
}, value(e27, r32, a19) {
  const o23 = e27[r32], t28 = String(o23), i24 = f12(e27.max) ? e27.max : d10;
  return o23 != null && !V9(o23, i24) ? new Error(G9(t28, a19)) : null;
} };

// node_modules/@tamagui/radio-group/dist/esm/RadioGroup.js
var import_jsx_runtime22 = require("react/jsx-runtime");
var import_react_use_previous = __toESM(require_dist5());
var import_core21 = require("@tamagui/core-node");
var import_focusable2 = __toESM(require_cjs17());
var import_get_size3 = __toESM(require_cjs5());
var n12 = __toESM(require("react"));
var G10 = "RadioGroup";
var ee4 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var [M10, oe3] = V(G10);
var [te2, re2] = M10(G10);
var _8 = /* @__PURE__ */ __name((e27) => e27 ? "checked" : "unchecked", "_");
var w12 = "RadioGroupIndicator";
var L8 = (0, import_core21.styled)(k4, { name: w12, variants: { unstyled: { false: { w: "40%", h: "40%", br: 1e3, backgroundColor: "$color", pressTheme: true, pressStyle: { backgroundColor: "$colorTransparent" } } } }, defaultVariants: { unstyled: false } });
var x13 = L8.extractable(n12.forwardRef((e27, o23) => {
  const { __scopeRadioGroupItem: r32, forceMount: a19, disabled: l27, ...u16 } = e27, { checked: i24 } = ne2(w12, r32);
  return a19 || i24 ? (0, import_jsx_runtime22.jsx)(L8, { theme: "active", "data-state": _8(i24), "data-disabled": l27 ? "" : void 0, ...u16, ref: o23 }) : null;
}));
x13.displayName = w12;
var D9 = "RadioGroupItem";
var [ae, ne2] = M10(G10);
var A13 = (0, import_core21.styled)(k4, { name: D9, tag: "button", variants: { unstyled: { false: { size: "$true", borderRadius: 1e3, backgroundColor: "$background", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "$borderColor", padding: 0, hoverStyle: { borderColor: "$borderColorHover", background: "$backgroundHover" }, focusStyle: { borderColor: "$borderColorHover", background: "$backgroundHover" }, pressStyle: { borderColor: "$borderColorFocus", background: "$backgroundFocus" } } }, size: { "...size": (e27, { props: o23 }) => {
  const r32 = Math.floor((0, import_core21.getVariableValue)((0, import_get_size3.getSize)(e27)) * (o23.scaleSize ?? 0.5));
  return { width: r32, height: r32 };
} } }, defaultVariants: { unstyled: false } });
var ie2 = A13.extractable(n12.forwardRef((e27, o23) => {
  const { __scopeRadioGroup: r32, value: a19, labelledBy: l27, disabled: u16, ...i24 } = e27, { value: m24, disabled: b17, required: s23, onChange: d20, name: v14, native: f24, accentColor: R17 } = re2(D9, r32), [p26, O12] = n12.useState(null), I12 = n12.useRef(false), S19 = n12.useRef(null), $8 = (0, import_core21.useComposedRefs)(o23, (t28) => O12(t28), S19), h17 = n12.useRef(false), T16 = import_core21.isWeb ? p26 ? Boolean(p26.closest("form")) : true : false, y15 = m24 === a19, q13 = U5(p26), z14 = l27 || q13;
  n12.useEffect(() => {
    if (import_core21.isWeb) {
      const t28 = /* @__PURE__ */ __name((K11) => {
        ee4.includes(K11.key) && (h17.current = true);
      }, "t"), H14 = /* @__PURE__ */ __name(() => h17.current = false, "H");
      return document.addEventListener("keydown", t28), document.addEventListener("keyup", H14), () => {
        document.removeEventListener("keydown", t28), document.removeEventListener("keyup", H14);
      };
    }
  }, []), process.env.TAMAGUI_TARGET === "native" && n12.useEffect(() => {
    if (e27.id)
      return (0, import_focusable2.registerFocusable)(e27.id, { focusAndSelect: () => {
        d20 == null || d20(a19);
      }, focus: () => {
      } });
  }, [e27.id, a19]);
  const g16 = b17 || u16;
  return (0, import_jsx_runtime22.jsx)(ae, { checked: y15, scope: r32, children: import_core21.isWeb && f24 ? (0, import_jsx_runtime22.jsx)(V10, { control: p26, bubbles: !I12.current, name: v14, value: a19, checked: y15, required: s23, disabled: g16, id: e27.id, accentColor: R17 }) : (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [(0, import_jsx_runtime22.jsx)(A13, { "data-state": _8(y15), "data-disabled": g16 ? "" : void 0, role: "radio", "aria-labelledby": z14, "aria-checked": y15, "aria-required": s23, disabled: g16, ref: $8, ...import_core21.isWeb && { type: "button", value: a19 }, ...i24, onPress: (0, import_core21.composeEventHandlers)(e27.onPress, (t28) => {
    y15 || d20 == null || d20(a19), T16 && (I12.current = t28.isPropagationStopped(), I12.current || t28.stopPropagation());
  }), ...import_core21.isWeb && { onKeyDown: (0, import_core21.composeEventHandlers)(e27.onKeyDown, (t28) => {
    t28.key === "Enter" && t28.preventDefault();
  }), onFocus: (0, import_core21.composeEventHandlers)(i24.onFocus, () => {
    var t28;
    h17.current && ((t28 = S19.current) == null || t28.click());
  }) } }), T16 && (0, import_jsx_runtime22.jsx)(V10, { isHidden: true, control: p26, bubbles: !I12.current, name: v14, value: a19, checked: y15, required: s23, disabled: g16 })] }) });
}));
var V10 = /* @__PURE__ */ __name((e27) => {
  const { checked: o23, bubbles: r32 = true, control: a19, isHidden: l27, accentColor: u16, ...i24 } = e27, m24 = n12.useRef(null), b17 = (0, import_react_use_previous.usePrevious)(o23);
  return n12.useEffect(() => {
    const s23 = m24.current, d20 = window.HTMLInputElement.prototype, f24 = Object.getOwnPropertyDescriptor(d20, "checked").set;
    if (b17 !== o23 && f24) {
      const R17 = new Event("click", { bubbles: r32 });
      f24.call(s23, o23), s23.dispatchEvent(R17);
    }
  }, [b17, o23, r32]), (0, import_jsx_runtime22.jsx)("input", { type: "radio", defaultChecked: o23, ...i24, tabIndex: -1, ref: m24, "aria-hidden": l27, style: { ...l27 ? { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } : { appearance: "auto", accentColor: u16 }, ...e27.style } });
}, "V");
var B8 = (0, import_core21.styled)(k4, { name: G10, variants: { orientation: { horizontal: { flexDirection: "row", spaceDirection: "horizontal" }, vertical: { flexDirection: "column", spaceDirection: "vertical" } } } });
var F12 = (0, import_core21.withStaticProperties)(B8.extractable(n12.forwardRef((e27, o23) => {
  const { __scopeRadioGroup: r32, value: a19, defaultValue: l27, onValueChange: u16, disabled: i24 = false, required: m24 = false, name: b17, orientation: s23, native: d20, accentColor: v14, ...f24 } = e27, [R17, p26] = A6({ prop: a19, defaultProp: l27, onChange: u16 });
  return (0, import_jsx_runtime22.jsx)(te2, { scope: r32, value: R17, required: m24, onChange: p26, disabled: i24, name: b17, native: d20, accentColor: v14, children: (0, import_jsx_runtime22.jsx)(B8, { "aria-valuetext": R17, role: "radiogroup", "aria-orientation": s23, ref: o23, orientation: s23, "data-disabled": i24 ? "" : void 0, ...f24 }) });
})), { Indicator: x13, Item: ie2 });
F12.displayName = G10;

// node_modules/@tamagui/select/dist/esm/Select.js
var import_jsx_runtime28 = require("react/jsx-runtime");
var import_core29 = require("@tamagui/core-node");
var import_list_item = __toESM(require_cjs19());

// node_modules/@tamagui/separator/dist/esm/Separator.js
var import_core22 = require("@tamagui/core-node");
var e15 = (0, import_core22.styled)(import_core22.Stack, { name: "Separator", borderColor: "$borderColor", flexShrink: 0, borderWidth: 0, flex: 1, height: 0, maxHeight: 0, borderBottomWidth: 1, y: -0.5, variants: { vertical: { true: { y: 0, x: -0.5, height: import_core22.isWeb ? "initial" : "auto", maxHeight: import_core22.isWeb ? "initial" : "auto", width: 0, maxWidth: 0, borderBottomWidth: 0, borderRightWidth: 1 } } } });

// node_modules/@tamagui/select/dist/esm/Select.js
var c16 = __toESM(require("react"));

// node_modules/@tamagui/select/dist/esm/constants.js
var t13 = "Select";
var o13 = 8;
var L9 = 8;
var O7 = "SelectViewport";

// node_modules/@tamagui/select/dist/esm/context.js
var import_jsx_runtime23 = require("react/jsx-runtime");
var [c15, a12] = V(t13);
var [r16, d11] = c15(t13);
var i14 = /* @__PURE__ */ __name((e27) => (0, import_jsx_runtime23.jsx)(r16, { isInSheet: true, scope: e27.__scopeSelect, ...e27.context, children: e27.children }), "i");

// node_modules/@tamagui/select/dist/esm/SelectContent.js
var import_jsx_runtime24 = require("react/jsx-runtime");
var import_core24 = require("@tamagui/core-node");
var import_focus_scope3 = __toESM(require_cjs4());

// node_modules/@tamagui/select/dist/esm/useSelectBreakpointActive.js
var import_core23 = require("@tamagui/core-node");
var o14 = /* @__PURE__ */ __name((e27) => {
  const t28 = (0, import_core23.useMedia)();
  return e27 ? e27 === true ? true : e27 ? t28[e27] : false : false;
}, "o");
var a13 = /* @__PURE__ */ __name((e27) => {
  const t28 = o14(e27.sheetBreakpoint);
  return e27.open === false ? false : t28;
}, "a");

// node_modules/@tamagui/select/dist/esm/SelectContent.js
var P13 = "SelectContent";
var E11 = /* @__PURE__ */ __name(({ children: s23, __scopeSelect: n22, zIndex: r32 = 1e3, ...c26 }) => {
  const e27 = d11(P13, n22), l27 = (0, import_core24.useThemeName)(), m24 = a13(e27), t28 = (0, import_jsx_runtime24.jsx)(import_core24.Theme, { forceClassName: true, name: l27, children: s23 }), p26 = (0, import_core24.useIsTouchDevice)();
  return m24 ? e27.open ? (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: t28 }) : null : (0, import_jsx_runtime24.jsx)(FloatingPortal, { children: e27.open ? (0, import_jsx_runtime24.jsx)(FloatingOverlay, { style: { zIndex: r32 }, lockScroll: !p26, children: (0, import_jsx_runtime24.jsx)(import_focus_scope3.FocusScope, { loop: true, trapped: true, ...c26, children: (0, import_jsx_runtime24.jsx)(T3, { children: t28 }) }) }) : (0, import_jsx_runtime24.jsx)("div", { style: { display: "none" }, children: t28 }) });
}, "E");

// node_modules/@tamagui/select/dist/esm/SelectImpl.js
var import_jsx_runtime25 = require("react/jsx-runtime");
var import_core25 = require("@tamagui/core-node");
var t14 = __toESM(require("react"));
var import_react_dom5 = require("react-dom");
var Pe4 = /* @__PURE__ */ __name((z14) => {
  const { __scopeSelect: T16, children: K11, open: n22 = false, selectedIndexRef: he5, listContentRef: b17 } = z14, A20 = d11("SelectSheetImpl", T16), { setActiveIndex: m24, setOpen: u16, setSelectedIndex: j15, selectedIndex: c26, activeIndex: i24, forceUpdate: xe4 } = A20, [E18, p26] = t14.useState(0), M17 = (0, import_core25.useIsTouchDevice)(), a19 = t14.useRef([]), D14 = t14.useRef(null), P17 = t14.useRef(null), C16 = t14.useRef(null), w23 = t14.useRef(false), L15 = t14.useRef(true), v14 = t14.useRef(), g16 = t14.useRef({ isMouseOutside: false }), [I12, f24] = t14.useState(false), [l27, h17] = t14.useState(false), [B12, x19] = t14.useState(0), [G16, J16] = t14.useState(false), k17 = t14.useRef({});
  t14.useEffect(() => {
    const e27 = requestAnimationFrame(() => {
      n22 || (p26(0), h17(false), m24(null), f24(false));
    });
    return () => {
      cancelAnimationFrame(e27);
    };
  }, [n22, m24]), import_core25.isWeb && import_core25.isClient && t14.useEffect(() => {
    if (!n22)
      return;
    const e27 = /* @__PURE__ */ __name((o23) => {
      g16.current.isMouseOutside && u16(false);
    }, "e");
    return document.addEventListener("mouseup", e27), () => {
      document.removeEventListener("mouseup", e27);
    };
  }, [n22]);
  const H14 = size({ apply({ availableHeight: e27, rects: { reference: { width: o23 } } }) {
    k17.current = { width: o23, maxHeight: e27 };
  }, padding: o13 }), { x: F16, y: N12, reference: Q10, floating: U10, strategy: X9, context: s23, refs: r32 } = useFloating2({ open: n22, onOpenChange: u16, whileElementsMounted: autoUpdate, placement: "bottom-start", middleware: l27 ? [offset(5), M17 ? shift({ crossAxis: true, padding: o13 }) : flip({ padding: o13 }), H14] : [inner({ listRef: a19, overflowRef: D14, index: c26, offset: B12, onFallbackChange: h17, padding: 10, minItemsVisible: M17 ? 10 : 4, referenceOverflowThreshold: 20 }), H14] }), R17 = r32.floating, Y11 = n22 && E18 > L9, Z10 = n22 && R17.current && E18 < R17.current.scrollHeight - R17.current.clientHeight - L9, S19 = useInteractions([useClick(s23, { event: "mousedown" }), useDismiss(s23, { outsidePress: true }), useRole(s23, { role: "listbox" }), useInnerOffset(s23, { enabled: !l27, onChange: x19, overflowRef: D14 }), useListNavigation(s23, { listRef: a19, activeIndex: i24, selectedIndex: c26, onNavigate: m24 }), useTypeahead(s23, { listRef: b17, onMatch: n22 ? m24 : j15, selectedIndex: c26, activeIndex: i24 })]), $8 = t14.useMemo(() => ({ ...S19, getReferenceProps() {
    return S19.getReferenceProps({ ref: Q10, className: "SelectTrigger", onKeyDown(e27) {
      (e27.key === "Enter" || e27.key === " " && !s23.dataRef.current.typing) && (e27.preventDefault(), u16(true));
    } });
  }, getFloatingProps(e27) {
    return S19.getFloatingProps({ ref: U10, className: "Select", ...e27, style: { position: X9, top: N12 ?? "", left: F16 ?? "", outline: 0, scrollbarWidth: "none", ...k17.current, ...e27 == null ? void 0 : e27.style }, onPointerEnter() {
      f24(false), g16.current.isMouseOutside = false;
    }, onPointerLeave() {
      g16.current.isMouseOutside = true;
    }, onPointerMove() {
      g16.current.isMouseOutside = false, f24(false);
    }, onKeyDown() {
      f24(true);
    }, onContextMenu(o23) {
      o23.preventDefault();
    }, onScroll(o23) {
      (0, import_react_dom5.flushSync)(() => p26(o23.currentTarget.scrollTop));
    } });
  } }), [U10, N12, F16, S19]);
  return (0, import_core25.useIsomorphicLayoutEffect)(() => {
    if (n22)
      return v14.current = setTimeout(() => {
        w23.current = true;
      }, 300), () => {
        clearTimeout(v14.current);
      };
    w23.current = false, L15.current = true, x19(0), h17(false), J16(false);
  }, [n22]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    function e27(o23) {
      var W14, _13, V15;
      const y15 = o23.target;
      (W14 = r32.floating.current) != null && W14.contains(y15) || (_13 = P17.current) != null && _13.contains(y15) || (V15 = C16.current) != null && V15.contains(y15) || (u16(false), f24(false));
    }
    __name(e27, "e");
    if (n22)
      return document.addEventListener("pointerdown", e27), () => {
        document.removeEventListener("pointerdown", e27);
      };
  }, [n22, r32, u16]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    var e27, o23;
    n22 && I12 && i24 != null && ((e27 = a19.current[i24]) == null || e27.scrollIntoView({ block: "nearest" })), p26(((o23 = r32.floating.current) == null ? void 0 : o23.scrollTop) ?? 0);
  }, [n22, r32, I12, i24]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    var e27;
    n22 && l27 && c26 != null && ((e27 = a19.current[c26]) == null || e27.scrollIntoView({ block: "nearest" }));
  }, [n22, l27, c26]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    r32.floating.current && l27 && (r32.floating.current.style.maxHeight = "");
  }, [r32, l27]), (0, import_jsx_runtime25.jsx)(r16, { scope: T16, ...A20, setScrollTop: p26, setInnerOffset: x19, floatingRef: R17, setValueAtIndex: (e27, o23) => {
    b17.current[e27] = o23;
  }, fallback: l27, interactions: $8, floatingContext: s23, activeIndex: i24, canScrollDown: !!Z10, canScrollUp: !!Y11, controlledScrolling: I12, dataRef: s23.dataRef, listRef: a19, blockSelection: G16, allowMouseUpRef: L15, upArrowRef: P17, downArrowRef: C16, selectTimeoutRef: v14, allowSelectRef: w23, children: K11 });
}, "Pe");
var Ce2 = typeof navigator < "u" && navigator.userAgent || "";

// node_modules/@tamagui/select/dist/esm/SelectScrollButton.js
var import_jsx_runtime26 = require("react/jsx-runtime");
var import_core26 = require("@tamagui/core-node");
var n14 = __toESM(require("react"));
var import_react_dom6 = require("react-dom");
var w13 = "SelectScrollUpButton";
var G11 = n14.forwardRef((c26, s23) => (0, import_jsx_runtime26.jsx)(E12, { componentName: w13, ...c26, dir: "up", ref: s23 }));
G11.displayName = w13;
var h11 = "SelectScrollDownButton";
var J11 = n14.forwardRef((c26, s23) => (0, import_jsx_runtime26.jsx)(E12, { componentName: h11, ...c26, dir: "down", ref: s23 }));
J11.displayName = h11;
var E12 = n14.memo(n14.forwardRef((c26, s23) => {
  var g16;
  const { __scopeSelect: N12, dir: i24, componentName: u16, ...R17 } = c26, { floatingRef: o23, forceUpdate: K11, open: f24, fallback: x19, setScrollTop: I12, setInnerOffset: y15, ...A20 } = d11(u16, N12), [e27, F16] = n14.useState(null), S19 = n14.useRef("idle"), d20 = A20[i24 === "down" ? "canScrollDown" : "canScrollUp"], l27 = n14.useRef(), { x: U10, y: _13, reference: L15, floating: D14, strategy: M17, update: O12, refs: m24 } = useFloating2({ open: f24 && d20, strategy: "fixed", placement: i24 === "up" ? "top" : "bottom", middleware: [offset(({ rects: t28 }) => -t28.floating.height)], whileElementsMounted: (...t28) => autoUpdate(...t28, { animationFrame: true }) }), H14 = c3(s23, D14);
  if (o23 && (f24 ? e27 !== o23.current && (F16(o23.current), L15(o23.current), requestAnimationFrame(O12)) : cancelAnimationFrame(l27.current)), (0, import_core26.useIsomorphicLayoutEffect)(() => () => {
    cancelAnimationFrame(l27.current);
  }, []), !(d20 && o23))
    return null;
  const b17 = /* @__PURE__ */ __name((t28) => {
    console.log("on scroll?"), x19 ? m24.floating.current && (m24.floating.current.scrollTop -= t28, (0, import_react_dom6.flushSync)(() => {
      var r32;
      return I12(((r32 = m24.floating.current) == null ? void 0 : r32.scrollTop) ?? 0);
    })) : (0, import_react_dom6.flushSync)(() => y15((r32) => r32 - t28));
  }, "b");
  return (0, import_jsx_runtime26.jsx)(c5, { ref: H14, componentName: u16, "aria-hidden": true, ...R17, zIndex: 1e3, position: M17, left: U10 || 0, top: _13 || 0, width: `calc(${(((g16 = o23 == null ? void 0 : o23.current) == null ? void 0 : g16.offsetWidth) ?? 0) - 2}px)`, onPointerEnter: () => {
    S19.current = "active";
    let t28 = Date.now();
    function r32() {
      if (e27) {
        const B12 = Date.now(), v14 = B12 - t28;
        t28 = B12;
        const a19 = v14 / 2, P17 = i24 === "up" ? e27.scrollTop : e27.scrollHeight - e27.clientHeight - e27.scrollTop, C16 = i24 === "up" ? e27.scrollTop - a19 > 0 : e27.scrollTop + a19 < e27.scrollHeight - e27.clientHeight;
        b17(i24 === "up" ? Math.min(a19, P17) : Math.max(-a19, -P17)), C16 && (l27.current = requestAnimationFrame(r32));
      }
    }
    __name(r32, "r");
    cancelAnimationFrame(l27.current), l27.current = requestAnimationFrame(r32);
  }, onPointerLeave: () => {
    S19.current = "idle", cancelAnimationFrame(l27.current);
  } });
}));

// node_modules/@tamagui/select/dist/esm/SelectViewport.js
var import_jsx_runtime27 = require("react/jsx-runtime");
var import_core27 = require("@tamagui/core-node");
var import_core28 = require("@tamagui/core-node");
var g12 = __toESM(require("react"));
var V12 = (0, import_core28.styled)(k4, { name: O7, backgroundColor: "$background", elevate: true, bordered: true, userSelect: "none", outlineWidth: 0, variants: { size: { "...size": (o23, { tokens: r32 }) => ({ borderRadius: r32.radius[o23] ?? o23 }) } }, defaultVariants: { size: "$2" } });
var v8 = g12.forwardRef((o23, r32) => {
  const { __scopeSelect: s23, children: i24, disableScroll: l27, ...a19 } = o23, e27 = d11(O7, s23);
  if (o14(e27.sheetBreakpoint) || !import_core27.isWeb)
    return (0, import_jsx_runtime27.jsx)(B5, { hostName: `${e27.scopeKey}SheetContents`, children: (0, import_jsx_runtime27.jsx)(i14, { context: e27, children: i24 }) });
  if (!e27.floatingContext)
    return null;
  if (!e27.open)
    return i24;
  const { style: { scrollbarWidth: C16, listStyleType: _13, overflow: c26, ...p26 }, ...m24 } = e27.interactions.getFloatingProps();
  return (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [!l27 && (0, import_jsx_runtime27.jsx)("style", { dangerouslySetInnerHTML: { __html: y11 } }), (0, import_jsx_runtime27.jsx)(FloatingFocusManager, { context: e27.floatingContext, children: (0, import_jsx_runtime27.jsx)(V12, { size: e27.size, role: "presentation", ...a19, ref: r32, ...m24, ...p26, overflow: l27 ? void 0 : c26 ?? "scroll", children: i24 }) })] });
});
v8.displayName = O7;
var y11 = `
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
var k13 = "SelectTrigger";
var J12 = c16.forwardRef((t28, r32) => {
  const { __scopeSelect: l27, disabled: o23 = false, "aria-labelledby": e27, ...a19 } = t28, n22 = d11(k13, l27), p26 = e27;
  return (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { componentName: k13, backgrounded: true, radiused: true, hoverTheme: true, pressTheme: true, focusTheme: true, focusable: true, borderWidth: 1, size: n22.size, "aria-expanded": n22.open, "aria-autocomplete": "none", "aria-labelledby": p26, dir: n22.dir, disabled: o23, "data-disabled": o23 ? "" : void 0, ...a19, ref: r32, ...process.env.TAMAGUI_TARGET === "web" && n22.interactions ? n22.interactions.getReferenceProps() : { onPress() {
    n22.setOpen(!n22.open);
  } } });
});
J12.displayName = k13;
var M11 = "SelectValue";
var Q6 = (0, import_core29.styled)(p10, { name: M11, userSelect: "none" });
var Z4 = Q6.extractable(c16.forwardRef(({ __scopeSelect: t28, children: r32, placeholder: l27 }, o23) => {
  const e27 = d11(M11, t28), { onValueNodeHasChildrenChange: a19 } = e27, n22 = c3(o23, e27.onValueNodeChange), p26 = r32 ?? e27.selectedItem, i24 = !!p26, d20 = e27.value == null || e27.value === "" ? l27 ?? p26 : p26;
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    a19(i24);
  }, [a19, i24]), (0, import_jsx_runtime28.jsx)(Q6, { size: e27.size, ref: n22, pointerEvents: "none", children: d20 });
}));
Z4.displayName = M11;
var we = (0, import_core29.styled)(i7, { name: "SelectIcon", "aria-hidden": true, children: (0, import_jsx_runtime28.jsx)(p10, { children: "\u25BC" }) });
var E13 = "SelectItem";
var [Le2, ee5] = c15(E13);
var te3 = c16.forwardRef((t28, r32) => {
  const { __scopeSelect: l27, value: o23, disabled: e27 = false, textValue: a19, index: n22, ...p26 } = t28, i24 = d11(E13, l27), u16 = i24.value === o23, d20 = (0, import_core29.useId)(), { selectedIndex: _13, setSelectedIndex: f24, listRef: T16, open: O12, setOpen: x19, onChange: B12, setActiveIndex: F16, allowMouseUpRef: v14, allowSelectRef: S19, setValueAtIndex: R17, selectTimeoutRef: g16, dataRef: I12 } = i24, y15 = c3(r32, (m24) => {
    import_core29.isWeb && m24 instanceof HTMLElement && T16 && (T16.current[n22] = m24);
  });
  c16.useEffect(() => {
    R17(n22, o23);
  }, [n22, R17, o23]);
  function C16() {
    f24(n22), B12(o23), x19(false);
  }
  __name(C16, "C");
  const N12 = i24.interactions ? i24.interactions.getItemProps({ onTouchStart() {
    S19.current = true, v14.current = false;
  }, onKeyDown(m24) {
    m24.key === "Enter" || m24.key === " " && !(I12 != null && I12.current.typing) ? (m24.preventDefault(), C16()) : S19.current = true;
  }, onClick() {
    S19.current && (f24(n22), x19(false));
  }, onMouseUp() {
    v14.current && (S19.current && C16(), clearTimeout(g16.current), g16.current = setTimeout(() => {
      S19.current = true;
    }));
  } }) : { onPress: C16 };
  return (0, import_jsx_runtime28.jsx)(Le2, { scope: l27, value: o23, textId: d20 || "", isSelected: u16, children: (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { tag: "div", backgrounded: true, pressTheme: true, hoverTheme: true, cursor: "default", outlineWidth: 0, componentName: E13, ref: y15, "aria-labelledby": d20, "aria-selected": u16, "data-state": u16 ? "active" : "inactive", "aria-disabled": e27 || void 0, "data-disabled": e27 ? "" : void 0, tabIndex: e27 ? void 0 : -1, size: i24.size, focusStyle: { backgroundColor: "$backgroundHover" }, ...p26, ...N12 }) });
});
te3.displayName = E13;
var b10 = "SelectItemText";
var ke3 = (0, import_core29.styled)(s6, { name: b10, userSelect: "none" });
var oe4 = c16.forwardRef((t28, r32) => {
  const { __scopeSelect: l27, className: o23, ...e27 } = t28, a19 = d11(b10, l27), n22 = ee5(b10, l27), p26 = c16.useRef(null), i24 = c3(r32, p26), u16 = Boolean(n22.isSelected && a19.valueNode), d20 = c16.useMemo(() => (0, import_jsx_runtime28.jsx)(ke3, { className: o23, size: a19.size, id: n22.textId, ...e27, ref: i24 }), [t28, a19.size, o23, n22.textId]);
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    u16 && a19.setSelectedItem(d20);
  }, [u16, d20]), (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: d20 });
});
oe4.displayName = b10;
var re3 = "SelectItemIndicator";
var Me3 = (0, import_core29.styled)(i7, { name: b10 });
var ne3 = c16.forwardRef((t28, r32) => {
  const { __scopeSelect: l27, ...o23 } = t28;
  return ee5(re3, l27).isSelected ? (0, import_jsx_runtime28.jsx)(Me3, { "aria-hidden": true, ...o23, ref: r32 }) : null;
});
ne3.displayName = re3;
var z9 = "SelectGroup";
var [ze2, Oe3] = c15(z9);
var Be2 = (0, import_core29.styled)(c5, { name: z9, width: "100%" });
var le2 = c16.forwardRef((t28, r32) => {
  const { __scopeSelect: l27, ...o23 } = t28, e27 = (0, import_core29.useId)();
  return (0, import_jsx_runtime28.jsx)(ze2, { scope: l27, id: e27 || "", children: (0, import_jsx_runtime28.jsx)(Be2, { role: "group", "aria-labelledby": e27, ...o23, ref: r32 }) });
});
le2.displayName = z9;
var V13 = "SelectLabel";
var ce2 = c16.forwardRef((t28, r32) => {
  const { __scopeSelect: l27, ...o23 } = t28, e27 = d11(V13, l27), a19 = Oe3(V13, l27);
  return (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { tag: "div", componentName: V13, fontWeight: "800", id: a19.id, size: e27.size, ...o23, ref: r32 });
});
ce2.displayName = V13;
var mt2 = (0, import_core29.styled)(e15, { name: "SelectSeparator" });
var Fe = /* @__PURE__ */ __name((t28) => {
  const r32 = d11("SelectSheetController", t28.__scopeSelect), l27 = a13(r32), o23 = o14(r32.sheetBreakpoint), e27 = (0, import_core29.useGet)(l27);
  return (0, import_jsx_runtime28.jsx)(Pn, { onOpenChange: (a19) => {
    e27() && t28.onOpenChange(a19);
  }, open: r32.open, hidden: o23 === false, children: t28.children });
}, "Fe");
var He3 = /* @__PURE__ */ __name((t28) => (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: t28.children }), "He");
var Ue2 = (0, import_core29.withStaticProperties)((t28) => {
  const { __scopeSelect: r32, children: l27, open: o23, defaultOpen: e27, onOpenChange: a19, value: n22, defaultValue: p26, onValueChange: i24, size: u16 = "$true", dir: d20 } = t28, _13 = (0, import_core29.useId)(), f24 = r32 ? Object.keys(r32)[0] ?? _13 : _13, { when: T16, AdaptProvider: O12 } = W({ Contents: c16.useCallback(() => (0, import_jsx_runtime28.jsx)(x8, { name: `${f24}SheetContents` }), [f24]) }), x19 = T16, F16 = o14(x19) || !import_core29.isWeb ? He3 : Pe4, v14 = c16.useReducer(() => ({}), {})[1], [S19, R17] = c16.useState(null), [g16, I12] = A6({ prop: o23, defaultProp: e27 || false, onChange: a19 }), [y15, C16] = A6({ prop: n22, defaultProp: p26 || "", onChange: i24, transition: true }), [N12, m24] = c16.useState(0), H14 = c16.useRef(null), U10 = c16.useRef(null), D14 = c16.useRef([]), [W14, ae4] = c16.useState(0), [ie5, pe4] = c16.useState(null), [de7, ue3] = c16.useState(false);
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    H14.current = W14, U10.current = N12;
  }), (0, import_jsx_runtime28.jsx)(O12, { children: (0, import_jsx_runtime28.jsx)(r16, { dir: d20, blockSelection: false, size: u16, fallback: false, selectedItem: S19, setSelectedItem: R17, forceUpdate: v14, valueNode: ie5, onValueNodeChange: pe4, onValueNodeHasChildrenChange: ue3, valueNodeHasChildren: de7, scopeKey: f24, sheetBreakpoint: x19, scope: r32, setValueAtIndex: (me5, Se4) => {
    D14.current[me5] = Se4;
  }, activeIndex: N12, onChange: C16, selectedIndex: W14, setActiveIndex: m24, setOpen: I12, setSelectedIndex: ae4, value: y15, open: g16, children: (0, import_jsx_runtime28.jsx)(Fe, { onOpenChange: I12, __scopeSelect: r32, children: (0, import_jsx_runtime28.jsx)(F16, { activeIndexRef: U10, listContentRef: D14, selectedIndexRef: H14, ...t28, open: g16, value: y15, children: l27 }) }) }) });
}, { Adapt: b2, Content: E11, Group: le2, Icon: we, Item: te3, ItemIndicator: ne3, ItemText: oe4, Label: ce2, ScrollDownButton: J11, ScrollUpButton: G11, Trigger: J12, Value: Z4, Viewport: v8, Sheet: Sn });
Ue2.displayName = t13;

// node_modules/@tamagui/slider/dist/esm/Slider.js
var import_jsx_runtime31 = require("react/jsx-runtime");
var import_core31 = require("@tamagui/core-node");
var import_get_size5 = __toESM(require_cjs5());

// node_modules/@tamagui/helpers/dist/esm/clamp.js
function e16(n22, [m24, r32]) {
  return Math.min(r32, Math.max(m24, n22));
}
__name(e16, "e");

// node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.js
function E14(n22, r32, { checkDefaultPrevented: t28 = true } = {}) {
  return !n22 || !r32 ? r32 || n22 : function(e27) {
    if (n22 == null || n22(e27), !e27 || !(t28 && "defaultPrevented" in e27) || "defaultPrevented" in e27 && !e27.defaultPrevented)
      return r32 == null ? void 0 : r32(e27);
  };
}
__name(E14, "E");

// node_modules/@tamagui/helpers/dist/esm/validStyleProps.js
var t16 = Object.freeze({ x: true, y: true, scale: true, perspective: true, scaleX: true, scaleY: true, skewX: true, skewY: true, matrix: true, rotate: true, rotateY: true, rotateX: true, rotateZ: true });
var r18 = Object.freeze({ placeholderTextColor: true });
var e17 = Object.freeze({ backfaceVisibility: true, backgroundColor: true, borderBottomColor: true, borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderBottomWidth: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderLeftWidth: true, borderRadius: true, borderRightColor: true, borderRightWidth: true, borderStartColor: true, borderStyle: true, borderTopColor: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true, borderTopWidth: true, borderWidth: true, opacity: true, transform: true, alignContent: true, alignItems: true, alignSelf: true, aspectRatio: true, borderEndWidth: true, borderStartWidth: true, bottom: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, columnGap: true, rowGap: true, height: true, justifyContent: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, start: true, top: true, width: true, zIndex: true, direction: true, shadowColor: true, shadowOffset: true, shadowOpacity: true, shadowRadius: true, ...r18, ...t16, ...process.env.TAMAGUI_TARGET === "web" && { borderBottomStyle: true, borderTopStyle: true, borderLeftStyle: true, borderRightStyle: true, overflowX: true, overflowY: true, userSelect: true, cursor: true, contain: true, pointerEvents: true, boxSizing: true, boxShadow: true, outlineColor: true, outlineStyle: true, outlineOffset: true, outlineWidth: true } });
var o16 = Object.freeze({ fontFamily: true, fontSize: true, fontStyle: true, fontWeight: true, letterSpacing: true, lineHeight: true, textTransform: true });
var u15 = Object.freeze({ color: true, ...o16, textAlign: true, textDecorationLine: true, textDecorationStyle: true, textDecorationColor: true, textShadowColor: true, textShadowOffset: true, textShadowRadius: true, ...process.env.TAMAGUI_TARGET === "web" && { whiteSpace: true, wordWrap: true, textOverflow: true, textDecorationDistance: true, userSelect: true, selectable: true, cursor: true, WebkitLineClamp: true, WebkitBoxOrient: true } });
var i15 = Object.freeze({ ...e17, ...u15 });
var a14 = Object.freeze({ enterStyle: true, exitStyle: true, hoverStyle: true, pressStyle: true, focusStyle: true });
var n15 = Object.freeze({ ...a14, ...e17 });

// node_modules/@tamagui/use-direction/dist/esm/useDirection.js
var import_jsx_runtime29 = require("react/jsx-runtime");
var t17 = __toESM(require("react"));
var i16 = t17.createContext(void 0);
function d13(e27) {
  const r32 = t17.useContext(i16);
  return e27 || r32 || "ltr";
}
__name(d13, "d");

// node_modules/@tamagui/slider/dist/esm/Slider.js
var d14 = __toESM(require("react"));

// node_modules/@tamagui/slider/dist/esm/constants.js
var e18 = "Slider";
var [r19, p15] = V(e18);
var [S11, l17] = r19(e18);
var [w15, g13] = r19(e18, { startEdge: "left", endEdge: "right", sizeProp: "width", size: 0, direction: 1 });
var a15 = ["PageUp", "PageDown"];
var x15 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var A14 = { ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"], rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"] };

// node_modules/@tamagui/slider/dist/esm/helpers.js
function m15(e27 = [], n22, r32) {
  const t28 = [...e27];
  return t28[r32] = n22, t28.sort((u16, o23) => u16 - o23);
}
__name(m15, "m");
function a16(e27, n22, r32) {
  return 100 / (r32 - n22) * (e27 - n22);
}
__name(a16, "a");
function b11(e27, n22) {
  return n22 > 2 ? `Value ${e27 + 1} of ${n22}` : n22 === 2 ? ["Minimum", "Maximum"][e27] : void 0;
}
__name(b11, "b");
function f15(e27, n22) {
  if (e27.length === 1)
    return 0;
  const r32 = e27.map((u16) => Math.abs(u16 - n22)), t28 = Math.min(...r32);
  return r32.indexOf(t28);
}
__name(f15, "f");
function i17(e27, n22, r32) {
  const t28 = e27 / 2, o23 = c18([0, 50], [0, t28]);
  return (t28 - o23(n22) * r32) * r32;
}
__name(i17, "i");
function s14(e27) {
  return e27.slice(0, -1).map((n22, r32) => e27[r32 + 1] - n22);
}
__name(s14, "s");
function l18(e27, n22) {
  if (n22 > 0) {
    const r32 = s14(e27);
    return Math.min(...r32) >= n22;
  }
  return true;
}
__name(l18, "l");
function c18(e27, n22) {
  return (r32) => {
    if (e27[0] === e27[1] || n22[0] === n22[1])
      return n22[0];
    const t28 = (n22[1] - n22[0]) / (e27[1] - e27[0]);
    return n22[0] + t28 * (r32 - e27[0]);
  };
}
__name(c18, "c");
function x16(e27) {
  return (String(e27).split(".")[1] || "").length;
}
__name(x16, "x");
function p16(e27, n22) {
  const r32 = Math.pow(10, n22);
  return Math.round(e27 * r32) / r32;
}
__name(p16, "p");

// node_modules/@tamagui/slider/dist/esm/SliderImpl.js
var import_jsx_runtime30 = require("react/jsx-runtime");
var import_core30 = require("@tamagui/core-node");
var import_get_size4 = __toESM(require_cjs5());
var w16 = __toESM(require("react"));
var P14 = (0, import_core30.styled)(c5, { variants: { orientation: { horizontal: {}, vertical: {} } } });
var k14 = (0, import_core30.styled)(P14, { position: "relative", variants: { size: (o23, n22) => {
  const i24 = n22.props.orientation, t28 = Math.round((0, import_core30.getVariableValue)((0, import_get_size4.getSize)(o23)) / 6);
  return i24 === "horizontal" ? { height: t28, borderRadius: t28, justifyContent: "center" } : { width: t28, borderRadius: t28, alignItems: "center" };
} } });
var v9 = w16.forwardRef((o23, n22) => {
  const { __scopeSlider: i24, onSlideStart: t28, onSlideMove: S19, onSlideEnd: u16, onHomeKeyDown: c26, onEndKeyDown: m24, onStepKeyDown: f24, ...a19 } = o23, d20 = l17(e18, i24);
  return (0, import_jsx_runtime30.jsx)(k14, { size: "$4", ...a19, "data-orientation": a19.orientation, ref: n22, ...import_core30.isWeb && { onKeyDown: (e27) => {
    e27.key === "Home" ? (c26(e27), e27.preventDefault()) : e27.key === "End" ? (m24(e27), e27.preventDefault()) : a15.concat(x15).includes(e27.key) && (f24(e27), e27.preventDefault());
  } }, onMoveShouldSetResponderCapture: () => true, onScrollShouldSetResponder: () => true, onScrollShouldSetResponderCapture: () => true, onMoveShouldSetResponder: () => true, onStartShouldSetResponder: () => true, onResponderTerminationRequest: () => false, onResponderGrant: (0, import_core30.composeEventHandlers)(o23.onResponderGrant, (e27) => {
    const r32 = e27.target, R17 = d20.thumbs.has(r32);
    import_core30.isWeb && r32 instanceof HTMLElement && d20.thumbs.has(r32) && r32.focus(), t28(e27, R17 ? "thumb" : "track");
  }), onResponderMove: (0, import_core30.composeEventHandlers)(o23.onResponderMove, (e27) => {
    e27.stopPropagation(), S19(e27);
  }), onResponderRelease: (0, import_core30.composeEventHandlers)(o23.onResponderRelease, (e27) => {
    u16(e27);
  }) });
});

// node_modules/@tamagui/slider/dist/esm/Slider.js
var Pe6 = d14.forwardRef((r32, c26) => {
  const { min: S19, max: i24, dir: t28, onSlideStart: a19, onSlideMove: e27, onStepKeyDown: n22, ...p26 } = r32, P17 = d13(t28), h17 = P17 === "ltr", b17 = d14.useRef(null), [s23, l27] = d14.useState(() => ({ size: 0, offset: 0 }));
  function v14(o23) {
    const m24 = [0, s23.size];
    return c18(m24, h17 ? [S19, i24] : [i24, S19])(o23);
  }
  __name(v14, "v");
  return (0, import_jsx_runtime31.jsx)(w15, { scope: r32.__scopeSlider, startEdge: h17 ? "left" : "right", endEdge: h17 ? "right" : "left", direction: h17 ? 1 : -1, sizeProp: "width", size: s23.size, children: (0, import_jsx_runtime31.jsx)(v9, { ref: R(c26, b17), dir: P17, ...p26, orientation: "horizontal", onLayout: () => {
    var o23;
    (o23 = b17.current) == null || o23.measure((m24, f24, T16, w23, K11, L15) => {
      l27({ size: T16, offset: K11 });
    });
  }, onSlideStart: (o23, m24) => {
    const f24 = v14(o23.nativeEvent.locationX);
    f24 && (a19 == null || a19(f24, m24));
  }, onSlideMove: (o23) => {
    const m24 = v14(o23.nativeEvent.pageX - s23.offset);
    m24 && (e27 == null || e27(m24));
  }, onSlideEnd: () => {
  }, onStepKeyDown: (o23) => {
    const m24 = A14[P17].includes(o23.key);
    n22 == null || n22({ event: o23, direction: m24 ? -1 : 1 });
  } }) });
});
var ge4 = d14.forwardRef((r32, c26) => {
  const { min: S19, max: i24, onSlideStart: t28, onSlideMove: a19, onStepKeyDown: e27, ...n22 } = r32, [p26, P17] = d14.useState(() => ({ size: 0, offset: 0 })), h17 = d14.useRef(null);
  function b17(s23) {
    const l27 = [0, p26.size];
    return c18(l27, [i24, S19])(s23);
  }
  __name(b17, "b");
  return (0, import_jsx_runtime31.jsx)(w15, { scope: r32.__scopeSlider, startEdge: "bottom", endEdge: "top", sizeProp: "height", size: p26.size, direction: 1, children: (0, import_jsx_runtime31.jsx)(v9, { ref: R(c26, h17), ...n22, orientation: "vertical", onLayout: ({ nativeEvent: { layout: s23 } }) => {
    var l27;
    (l27 = h17.current) == null || l27.measure((v14, o23, m24, f24, T16, w23) => {
      P17({ size: f24, offset: w23 });
    });
  }, onSlideStart: (s23, l27) => {
    const v14 = b17(s23.nativeEvent.locationY);
    v14 && (t28 == null || t28(v14, l27));
  }, onSlideMove: (s23) => {
    const l27 = b17(s23.nativeEvent.pageY - p26.offset);
    l27 && (a19 == null || a19(l27));
  }, onSlideEnd: () => {
  }, onStepKeyDown: (s23) => {
    const l27 = A14.ltr.includes(s23.key);
    e27 == null || e27({ event: s23, direction: l27 ? -1 : 1 });
  } }) });
});
var j10 = "SliderTrack";
var Te2 = (0, import_core31.styled)(k14, { name: "SliderTrack", height: "100%", width: "100%", backgroundColor: "$background", position: "relative", borderRadius: 1e5, overflow: "hidden" });
var _9 = d14.forwardRef((r32, c26) => {
  const { __scopeSlider: S19, ...i24 } = r32, t28 = l17(j10, S19);
  return (0, import_jsx_runtime31.jsx)(Te2, { "data-disabled": t28.disabled ? "" : void 0, "data-orientation": t28.orientation, orientation: t28.orientation, size: t28.size, ...i24, ref: c26 });
});
_9.displayName = j10;
var O8 = "SliderTrackActive";
var ze3 = (0, import_core31.styled)(k14, { name: "SliderTrackActive", backgroundColor: "$background", position: "absolute" });
var A15 = d14.forwardRef((r32, c26) => {
  const { __scopeSlider: S19, ...i24 } = r32, t28 = l17(O8, S19), a19 = g13(O8, S19), e27 = d14.useRef(null), n22 = c3(c26, e27), p26 = t28.values.length, P17 = t28.values.map((s23) => a16(s23, t28.min, t28.max)), h17 = p26 > 1 ? Math.min(...P17) : 0, b17 = 100 - Math.max(...P17);
  return (0, import_jsx_runtime31.jsx)(ze3, { orientation: t28.orientation, "data-orientation": t28.orientation, "data-disabled": t28.disabled ? "" : void 0, size: t28.size, ...i24, ref: n22, [a19.startEdge]: `${h17}%`, [a19.endEdge]: `${b17}%`, ...a19.sizeProp === "width" ? { height: "100%" } : { left: 0, right: 0 } });
});
A15.displayName = O8;
var D10 = "SliderThumb";
var q8 = /* @__PURE__ */ __name((r32) => {
  const c26 = typeof r32 == "number" ? r32 : (0, import_get_size5.getSize)(r32, -1);
  return { width: c26, height: c26, minWidth: c26, minHeight: c26 };
}, "q");
var we2 = (0, import_core31.styled)(k4, { name: "SliderThumb", position: "absolute", bordered: 2, borderWidth: 2, backgrounded: true, pressTheme: import_core31.isWeb, focusTheme: import_core31.isWeb, hoverTheme: import_core31.isWeb, variants: { size: { "...size": q8 } } });
var C12 = d14.forwardRef((r32, c26) => {
  const { __scopeSlider: S19, index: i24, size: t28, ...a19 } = r32, e27 = l17(D10, S19), n22 = g13(D10, S19), [p26, P17] = d14.useState(null), h17 = c3(c26, (T16) => P17(T16)), b17 = e27.values[i24], s23 = b17 === void 0 ? 0 : a16(b17, e27.min, e27.max), l27 = b11(i24, e27.values.length), v14 = t28 ?? e27.size ?? "$true", [o23, m24] = d14.useState(() => (0, import_core31.getVariableValue)(q8(v14).width)), f24 = o23 ? i17(o23, s23, n22.direction) : 0;
  return d14.useEffect(() => {
    if (p26)
      return e27.thumbs.add(p26), () => {
        e27.thumbs.delete(p26);
      };
  }, [p26, e27.thumbs]), (0, import_jsx_runtime31.jsx)(we2, { ref: h17, role: "slider", "aria-label": r32["aria-label"] || l27, "aria-valuemin": e27.min, "aria-valuenow": b17, "aria-valuemax": e27.max, "aria-orientation": e27.orientation, "data-orientation": e27.orientation, "data-disabled": e27.disabled ? "" : void 0, tabIndex: e27.disabled ? void 0 : 0, animateOnly: ["transform", "left", "right", "top", "bottom"], ...a19, ...e27.orientation === "horizontal" ? { x: f24 - o23 / 2, y: -o23 / 2, top: "50%", ...o23 === 0 && { top: "auto", bottom: "auto" } } : { x: -o23 / 2, y: o23 / 2, left: "50%", ...o23 === 0 && { left: "auto", right: "auto" } }, [n22.startEdge]: `${s23}%`, size: v14, onLayout: (T16) => {
    m24(T16.nativeEvent.layout[n22.sizeProp]);
  }, onFocus: E14(r32.onFocus, () => {
    e27.valueIndexToChangeRef.current = i24;
  }) });
});
C12.displayName = D10;
var J13 = (0, import_core31.withStaticProperties)(d14.forwardRef((r32, c26) => {
  const { name: S19, min: i24 = 0, max: t28 = 100, step: a19 = 1, orientation: e27 = "horizontal", disabled: n22 = false, minStepsBetweenThumbs: p26 = 0, defaultValue: P17 = [i24], value: h17, onValueChange: b17 = /* @__PURE__ */ __name(() => {
  }, "b"), size: s23, ...l27 } = r32, v14 = d14.useRef(null), o23 = c3(v14, c26), m24 = d14.useRef(/* @__PURE__ */ new Set()), f24 = d14.useRef(0), T16 = e27 === "horizontal", [w23 = [], K11] = A6({ prop: h17, defaultProp: P17, transition: true, onChange: (u16) => {
    var g16;
    import_core31.isWeb && ((g16 = [...m24.current][f24.current]) == null || g16.focus()), b17(u16);
  } });
  import_core31.isWeb && d14.useEffect(() => {
    const u16 = v14.current;
    if (!u16)
      return;
    const g16 = /* @__PURE__ */ __name((k17) => {
      k17.preventDefault();
    }, "g");
    return u16.addEventListener("touchstart", g16), () => {
      u16.removeEventListener("touchstart", g16);
    };
  }, []);
  function L15(u16) {
    E18(u16, f24.current);
  }
  __name(L15, "L");
  function E18(u16, g16) {
    const k17 = x16(a19), N12 = p16(Math.round((u16 - i24) / a19) * a19 + i24, k17), V15 = e16(N12, [i24, t28]);
    K11((x19 = []) => {
      const y15 = m15(x19, V15, g16);
      return l18(y15, p26 * a19) ? (f24.current = y15.indexOf(V15), String(y15) === String(x19) ? x19 : y15) : x19;
    });
  }
  __name(E18, "E");
  const Q10 = T16 ? Pe6 : ge4;
  return (0, import_jsx_runtime31.jsx)(S11, { scope: r32.__scopeSlider, disabled: n22, min: i24, max: t28, valueIndexToChangeRef: f24, thumbs: m24.current, values: w23, orientation: e27, size: s23, children: (0, import_jsx_runtime31.jsx)(Q10, { "aria-disabled": n22, "data-disabled": n22 ? "" : void 0, ...l27, ref: o23, min: i24, max: t28, onSlideStart: n22 ? void 0 : (u16, g16) => {
    if (g16 !== "thumb") {
      const k17 = f15(w23, u16);
      E18(u16, k17);
    }
  }, onSlideMove: n22 ? void 0 : L15, onHomeKeyDown: () => !n22 && E18(i24, 0), onEndKeyDown: () => !n22 && E18(t28, w23.length - 1), onStepKeyDown: ({ event: u16, direction: g16 }) => {
    if (!n22) {
      const V15 = a15.includes(u16.key) || u16.shiftKey && x15.includes(u16.key) ? 10 : 1, x19 = f24.current, y15 = w23[x19], Z10 = a19 * V15 * g16;
      E18(y15 + Z10, x19);
    }
  } }) });
}), { Track: _9, TrackActive: A15, Thumb: C12 });
J13.displayName = e18;
var ke4 = _9;
var xe2 = A15;
var ye2 = C12;

// node_modules/@tamagui/switch/dist/esm/Switch.js
var import_jsx_runtime32 = require("react/jsx-runtime");
var import_react_use_previous2 = __toESM(require_dist5());
var import_core32 = require("@tamagui/core-node");
var import_focusable3 = __toESM(require_cjs17());
var import_get_size6 = __toESM(require_cjs5());
var i18 = __toESM(require("react"));
var g14 = "Switch";
var S12 = /* @__PURE__ */ __name((e27) => Math.round((0, import_core32.getVariableValue)((0, import_get_size6.getSize)(e27)) * 0.65), "S");
var v10 = /* @__PURE__ */ __name((e27) => S12(e27) * 2, "v");
var B9 = V(g14);
var [K8] = B9;
var fe3 = B9[1];
var [Q7, Y6] = K8(g14);
var E16 = "SwitchThumb";
var R12 = (0, import_core32.styled)(k4, { name: "SwitchThumb", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", borderRadius: 1e3 } }, size: { "...size": (e27) => {
  const o23 = S12(e27);
  return { height: o23, width: o23 };
} } }, defaultVariants: { unstyled: false } });
var I10 = R12.extractable(i18.forwardRef((e27, o23) => {
  const { __scopeSwitch: t28, size: a19, ...u16 } = e27, { size: l27, disabled: d20, checked: s23, unstyled: n22 } = Y6(E16, t28), r32 = a19 ?? l27;
  return (0, import_jsx_runtime32.jsx)(R12, { unstyled: n22, size: r32, theme: s23 ? "active" : null, "data-state": M12(s23), "data-disabled": d20 ? "" : void 0, ...u16, x: s23 ? (0, import_core32.getVariableValue)(v10(r32)) - (0, import_core32.getVariableValue)(S12(r32)) : 0, ref: o23 });
}));
I10.displayName = E16;
var H10 = (0, import_core32.styled)(i7, { name: g14, tag: "button", variants: { unstyled: { false: { size: "$true", borderRadius: 1e3, borderWidth: 2, borderColor: "transparent", backgroundColor: "$background", focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": (e27) => {
  const o23 = S12(e27) + 4, t28 = v10(e27) + 4;
  return { height: o23, minHeight: o23, width: t28 };
} } }, defaultVariants: { unstyled: false } });
var me3 = (0, import_core32.withStaticProperties)(H10.extractable(i18.forwardRef((e27, o23) => {
  const { __scopeSwitch: t28, labeledBy: a19, name: u16, checked: l27, defaultChecked: d20, required: s23, disabled: n22, value: r32 = "on", onCheckedChange: p26, size: b17 = "$true", unstyled: C16 = false, ...F16 } = e27, [f24, L15] = i18.useState(null), V15 = c3(o23, (c26) => L15(c26)), _13 = U5(f24), $8 = a19 || _13, k17 = i18.useRef(false), z14 = import_core32.isWeb ? f24 ? Boolean(f24.closest("form")) : true : false, [h17 = false, P17] = A6({ prop: l27, defaultProp: d20 || false, onChange: p26, transition: true });
  return import_core32.isWeb || i18.useEffect(() => {
    if (e27.id)
      return (0, import_focusable3.registerFocusable)(e27.id, { focus: () => {
        P17((c26) => !c26);
      } });
  }, [e27.id, P17]), (0, import_jsx_runtime32.jsxs)(Q7, { scope: t28, checked: h17, disabled: n22, size: b17, unstyled: C16, children: [(0, import_jsx_runtime32.jsx)(H10, { unstyled: C16, size: b17, role: "switch", "aria-checked": h17, "aria-labelledby": $8, "aria-required": s23, "data-state": M12(h17), "data-disabled": n22 ? "" : void 0, disabled: n22, theme: h17 ? "active" : null, themeShallow: true, tabIndex: n22 ? void 0 : 0, value: r32, ...F16, ref: V15, onPress: (c26) => {
    var T16;
    (T16 = e27.onPress) == null || T16.call(e27, c26), P17((W14) => !W14), import_core32.isWeb && z14 && (k17.current = c26.isPropagationStopped(), k17.current || c26.stopPropagation());
  } }), import_core32.isWeb && z14 && (0, import_jsx_runtime32.jsx)(Z5, { control: f24, bubbles: !k17.current, name: u16, value: r32, checked: h17, required: s23, disabled: n22, style: { transform: "translateX(-100%)" } })] });
})), { Thumb: I10 });
var Z5 = /* @__PURE__ */ __name((e27) => {
  const { control: o23, checked: t28, bubbles: a19 = true, ...u16 } = e27, l27 = i18.useRef(null), d20 = (0, import_react_use_previous2.usePrevious)(t28);
  return i18.useEffect(() => {
    const s23 = l27.current, n22 = window.HTMLInputElement.prototype, p26 = Object.getOwnPropertyDescriptor(n22, "checked").set;
    if (d20 !== t28 && p26) {
      const b17 = new Event("click", { bubbles: a19 });
      p26.call(s23, t28), s23.dispatchEvent(b17);
    }
  }, [d20, t28, a19]), (0, import_jsx_runtime32.jsx)("input", { type: "checkbox", "aria-hidden": true, defaultChecked: t28, ...u16, tabIndex: -1, ref: l27, style: { ...e27.style, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
}, "Z");
function M12(e27) {
  return e27 ? "checked" : "unchecked";
}
__name(M12, "M");

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
function v11(s23) {
  const a19 = s23 + "CollectionProvider", [y15, x19] = V(a19), [P17, m24] = y15(a19, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), f24 = /* @__PURE__ */ __name((n22) => {
    const { scope: e27, children: r32 } = n22, t28 = import_react28.default.useRef(null), o23 = import_react28.default.useRef(/* @__PURE__ */ new Map()).current;
    return (0, import_jsx_runtime33.jsx)(P17, { scope: e27, itemMap: o23, collectionRef: t28, children: r32 });
  }, "f");
  f24.displayName = a19;
  const u16 = s23 + "CollectionSlot", C16 = import_react28.default.forwardRef((n22, e27) => {
    const { scope: r32, children: t28 } = n22, o23 = m24(u16, r32), l27 = c3(e27, o23.collectionRef);
    return (0, import_jsx_runtime33.jsx)(import_core33.Slot, { ref: l27, children: t28 });
  });
  C16.displayName = u16;
  const d20 = s23 + "CollectionItemSlot", R17 = "data-collection-item", I12 = import_react28.default.forwardRef((n22, e27) => {
    const { scope: r32, children: t28, ...o23 } = n22, l27 = import_react28.default.useRef(null), E18 = c3(e27, l27), i24 = m24(d20, r32);
    return import_react28.default.useEffect(() => (i24.itemMap.set(l27, { ref: l27, ...o23 }), () => void i24.itemMap.delete(l27))), (0, import_jsx_runtime33.jsx)(import_core33.Slot, { [R17]: "", ref: E18, children: t28 });
  });
  I12.displayName = d20;
  function T16(n22) {
    const e27 = m24(s23 + "CollectionConsumer", n22);
    return import_react28.default.useCallback(() => {
      if (!import_core33.isWeb)
        return [];
      const t28 = e27.collectionRef.current;
      if (!t28)
        return [];
      const o23 = Array.from(t28.querySelectorAll(`[${R17}]`));
      return Array.from(e27.itemMap.values()).sort((i24, N12) => o23.indexOf(i24.ref.current) - o23.indexOf(N12.ref.current));
    }, [e27.collectionRef, e27.itemMap]);
  }
  __name(T16, "T");
  return [{ Provider: f24, Slot: C16, ItemSlot: I12 }, T16, x19];
}
__name(v11, "v");

// node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_core34 = require("@tamagui/core-node");
var import_core35 = require("@tamagui/core-node");
var r20 = __toESM(require("react"));
var G13 = "rovingFocusGroup.onEntryFocus";
var Z6 = { bubbles: false, cancelable: true };
var $5 = r20.forwardRef((o23, e27) => {
  const { __scopeRovingFocusGroup: s23, orientation: t28, loop: F16 = false, dir: b17, currentTabStopId: S19, defaultCurrentTabStopId: P17, onCurrentTabStopIdChange: m24, onEntryFocus: i24, ...E18 } = o23, v14 = r20.useRef(null), g16 = c3(e27, v14), I12 = d13(b17), [c26 = null, p26] = A6({ prop: S19, defaultProp: P17 ?? null, onChange: m24 }), [C16, u16] = r20.useState(false), a19 = (0, import_core34.useEvent)(i24), N12 = h14(s23), T16 = r20.useRef(false), [L15, D14] = r20.useState(0);
  return r20.useEffect(() => {
    const n22 = v14.current;
    if (n22)
      return n22.addEventListener(G13, a19), () => n22.removeEventListener(G13, a19);
  }, [a19]), (0, import_jsx_runtime34.jsx)(no, { scope: s23, orientation: t28, dir: I12, loop: F16, currentTabStopId: c26, onItemFocus: r20.useCallback((n22) => p26(n22), [p26]), onItemShiftTab: r20.useCallback(() => u16(true), []), onFocusableItemAdd: r20.useCallback(() => D14((n22) => n22 + 1), []), onFocusableItemRemove: r20.useCallback(() => D14((n22) => n22 - 1), []), children: (0, import_jsx_runtime34.jsx)(import_core34.Stack, { tabIndex: C16 || L15 === 0 ? -1 : 0, "data-orientation": t28, ...E18, ref: g16, style: [{ outline: "none" }, o23.style], onMouseDown: (0, import_core34.composeEventHandlers)(o23.onMouseDown, () => {
    T16.current = true;
  }), onFocus: (0, import_core34.composeEventHandlers)(o23.onFocus, (n22) => {
    const U10 = !T16.current;
    if (n22.target === n22.currentTarget && U10 && !C16) {
      const A20 = new CustomEvent(G13, Z6);
      if (n22.currentTarget.dispatchEvent(A20), !A20.defaultPrevented) {
        const y15 = N12().filter((l27) => l27.focusable), K11 = y15.find((l27) => l27.active), B12 = y15.find((l27) => l27.id === c26), H14 = [K11, B12, ...y15].filter(Boolean).map((l27) => l27.ref.current);
        M13(H14);
      }
    }
    T16.current = false;
  }), onBlur: (0, import_core34.composeEventHandlers)(o23.onBlur, () => u16(false)) }) });
});
var x18 = "RovingFocusGroupItem";
var O10 = r20.forwardRef((o23, e27) => {
  const { __scopeRovingFocusGroup: s23, focusable: t28 = true, active: F16 = false, tabStopId: b17, ...S19 } = o23, P17 = (0, import_core35.useId)(), m24 = b17 || P17, i24 = ro2(x18, s23), E18 = i24.currentTabStopId === m24, v14 = h14(s23), { onFocusableItemAdd: g16, onFocusableItemRemove: I12 } = i24;
  return r20.useEffect(() => {
    if (t28)
      return g16(), () => I12();
  }, [t28, g16, I12]), (0, import_jsx_runtime34.jsx)(w18.ItemSlot, { scope: s23, id: m24, focusable: t28, active: F16, children: (0, import_jsx_runtime34.jsx)(import_core34.Stack, { tabIndex: E18 ? 0 : -1, "data-orientation": i24.orientation, ...S19, ref: e27, onMouseDown: (0, import_core34.composeEventHandlers)(o23.onMouseDown, (c26) => {
    t28 ? i24.onItemFocus(m24) : c26.preventDefault();
  }), onFocus: (0, import_core34.composeEventHandlers)(o23.onFocus, () => i24.onItemFocus(m24)), ...import_core34.isWeb && { onKeyDown: (0, import_core34.composeEventHandlers)(o23.onKeyDown, (c26) => {
    if (c26.key === "Tab" && c26.shiftKey) {
      i24.onItemShiftTab();
      return;
    }
    if (c26.target !== c26.currentTarget)
      return;
    const p26 = io(c26, i24.orientation, i24.dir);
    if (p26 !== void 0) {
      c26.preventDefault();
      let u16 = v14().filter((a19) => a19.focusable).map((a19) => a19.ref.current);
      if (p26 === "last")
        u16.reverse();
      else if (p26 === "prev" || p26 === "next") {
        p26 === "prev" && u16.reverse();
        const a19 = u16.indexOf(c26.currentTarget);
        u16 = i24.loop ? uo(u16, a19 + 1) : u16.slice(a19 + 1);
      }
      setTimeout(() => M13(u16));
    }
  }) } }) });
});
O10.displayName = x18;
var R13 = "RovingFocusGroup";
var [w18, h14, oo3] = v11(R13);
var [eo2, to2] = V(R13, [oo3]);
var [no, ro2] = eo2(R13);
var k15 = (0, import_core34.withStaticProperties)(r20.forwardRef((o23, e27) => (0, import_jsx_runtime34.jsx)(w18.Provider, { scope: o23.__scopeRovingFocusGroup, children: (0, import_jsx_runtime34.jsx)(w18.Slot, { scope: o23.__scopeRovingFocusGroup, children: (0, import_jsx_runtime34.jsx)($5, { ...o23, ref: e27 }) }) })), { Item: O10 });
k15.displayName = R13;
var so2 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function co(o23, e27) {
  return e27 !== "rtl" ? o23 : o23 === "ArrowLeft" ? "ArrowRight" : o23 === "ArrowRight" ? "ArrowLeft" : o23;
}
__name(co, "co");
function io(o23, e27, s23) {
  const t28 = co(o23.key, s23);
  if (!(e27 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(t28)) && !(e27 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(t28)))
    return so2[t28];
}
__name(io, "io");
function M13(o23) {
  const e27 = document.activeElement;
  for (const s23 of o23)
    if (s23 === e27 || (s23.focus(), document.activeElement !== e27))
      return;
}
__name(M13, "M");
function uo(o23, e27) {
  return o23.map((s23, t28) => o23[(e27 + t28) % o23.length]);
}
__name(uo, "uo");

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_web13 = require("@tamagui/core-node");
var import_react29 = __toESM(require("react"));

// node_modules/@tamagui/toggle-group/dist/esm/Toggle.js
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_web12 = require("@tamagui/core-node");
var P15 = __toESM(require("react"));
var s16 = "Toggle";
var r21 = (0, import_web12.styled)(k4, { name: s16, tag: "button", variants: { unstyled: { false: { pressTheme: true, backgroundColor: "$background", alignItems: "center", justifyContent: "center", display: "flex", borderColor: "$borderColor", borderWidth: "1px", margin: "-1px", hoverStyle: { backgroundColor: "$backgroundHover" }, pressStyle: { backgroundColor: "$backgroundPress" }, focusStyle: { borderColor: "$borderColorPress", backgroundColor: "$backgroundPress" } } }, active: { true: { zIndex: 1, hoverStyle: { backgroundColor: "$background" }, focusStyle: { borderColor: "$borderColorPress", backgroundColor: "$backgroundPress" } } }, orientation: { horizontal: { flexDirection: "row", spaceDirection: "horizontal" }, vertical: { flexDirection: "column", spaceDirection: "vertical" } } }, defaultVariants: { unstyled: false } });
var t18 = r21.extractable(P15.forwardRef((e27, a19) => {
  const { pressed: l27, defaultPressed: d20 = false, onPressedChange: i24, ...g16 } = e27, [o23 = false, c26] = A6({ prop: l27, onChange: i24, defaultProp: d20 });
  return (0, import_jsx_runtime35.jsx)(import_web12.Theme, { forceClassName: true, name: o23 ? "active" : null, children: (0, import_jsx_runtime35.jsx)(r21, { active: e27.unstyled ? void 0 : o23, "aria-pressed": o23, "data-state": o23 ? "on" : "off", "data-disabled": e27.disabled ? "" : void 0, ...g16, ref: a19, onPress: (0, import_web12.composeEventHandlers)(e27.onPress ?? void 0, (y15) => {
    e27.disabled || c26(!o23);
  }) }) });
}));
t18.displayName = s16;

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var m18 = "ToggleGroup";
var [S14, Q8] = V(m18, [to2]);
var G14 = "ToggleGroupItem";
var [ve2, X6] = V(G14);
var [Y8, ye3] = S14(m18);
var be2 = X6();
var R14 = r21.extractable(import_react29.default.forwardRef((e27, p26) => {
  const n22 = w19(G14, e27.__scopeToggleGroup), t28 = te5(G14, e27.__scopeToggleGroup), r32 = e27.__scopeToggleGroup, u16 = D12(e27.__scopeToggleGroup), i24 = n22.value.includes(e27.value), o23 = t28.disabled || e27.disabled || false, g16 = import_react29.default.useRef(null), T16 = (0, import_group.useGroupItem)({ disabled: o23 }), a19 = e27.size ?? t28.size, c26 = { width: void 0, height: void 0, padding: (0, import_web13.getVariableValue)(a19) * 0.6 };
  e27.orientation === "horizontal" ? c26.height = (0, import_web13.getVariableValue)(a19) * 2.4 : c26.width = (0, import_web13.getVariableValue)(a19) * 2.4;
  const d20 = (typeof a19 == "number" ? a19 * 0.7 : (0, import_font_size2.getFontSize)(a19)) * 1.2, P17 = (0, import_web13.useTheme)(), f24 = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: d20, color: P17.color }), y15 = import_react29.default.Children.toArray(e27.children).map((b17) => e27.disablePassStyles || !import_react29.default.isValidElement(b17) ? b17 : f24(b17)), x19 = { ...e27, pressed: i24, disabled: o23, ...c26, children: y15 };
  return (0, import_jsx_runtime36.jsx)(Y8, { scope: r32, children: t28.rovingFocus ? (0, import_jsx_runtime36.jsx)(k15.Item, { asChild: true, ...u16, focusable: !o23, active: i24, children: (0, import_jsx_runtime36.jsx)(r21, { asChild: true, focusable: !o23, disabled: o23, ref: g16, ...T16, children: (0, import_jsx_runtime36.jsx)(M14, { ...x19, ref: p26 }) }) }) : (0, import_jsx_runtime36.jsx)(r21, { asChild: true, focusable: !o23, disabled: o23, ref: g16, children: (0, import_jsx_runtime36.jsx)(M14, { ...x19, ref: p26 }) }) });
}));
R14.displayName = G14;
var M14 = r21.extractable(import_react29.default.forwardRef((e27, p26) => {
  const { __scopeToggleGroup: n22, value: t28, ...r32 } = e27, u16 = w19(G14, n22), i24 = { "aria-pressed": void 0 }, o23 = u16.type === "single" ? i24 : void 0;
  return (0, import_jsx_runtime36.jsx)(t18, { ...o23, ...r32, ref: p26, onPressedChange: (g16) => {
    g16 ? u16.onItemActivate(t28) : u16.onItemDeactivate(t28);
  } });
}));
var D12 = to2();
var h15 = (0, import_web13.withStaticProperties)(import_react29.default.forwardRef((e27, p26) => {
  const { type: n22, ...t28 } = e27;
  if (import_web13.isWeb || import_react29.default.useEffect(() => {
    if (e27.id)
      return (0, import_focusable4.registerFocusable)(e27.id, { focus: () => {
      } });
  }, [e27.id]), n22 === "single")
    return (0, import_jsx_runtime36.jsx)(Z7, { ...t28, ref: p26 });
  if (n22 === "multiple")
    return (0, import_jsx_runtime36.jsx)(ee8, { ...t28, ref: p26 });
  throw new Error(`Missing prop \`type\` expected on \`${m18}\``);
}), { Item: R14 });
h15.displayName = m18;
var [k16, w19] = S14(m18);
var Z7 = import_react29.default.forwardRef((e27, p26) => {
  const { value: n22, defaultValue: t28, onValueChange: r32 = /* @__PURE__ */ __name(() => {
  }, "r"), disableDeactivation: u16 = false, ...i24 } = e27, [o23, g16] = A6({ prop: n22, defaultProp: t28, onChange: r32 });
  return (0, import_jsx_runtime36.jsx)(k16, { scope: e27.__scopeToggleGroup, type: "single", value: o23 ? [o23] : [], defaultValue: o23, onItemActivate: g16, onItemDeactivate: import_react29.default.useCallback(() => u16 ? null : g16(""), [g16, u16]), children: (0, import_jsx_runtime36.jsx)(A17, { ...i24, ref: p26 }) });
});
var ee8 = import_react29.default.forwardRef((e27, p26) => {
  const { value: n22, defaultValue: t28, onValueChange: r32 = /* @__PURE__ */ __name(() => {
  }, "r"), ...u16 } = e27, [i24 = [], o23] = A6({ prop: n22, defaultProp: t28, onChange: r32 }), g16 = import_react29.default.useCallback((a19) => o23((c26 = []) => [...c26, a19]), [o23]), T16 = import_react29.default.useCallback((a19) => o23((c26 = []) => c26.filter((d20) => d20 !== a19)), [o23]);
  return (0, import_jsx_runtime36.jsx)(k16, { scope: e27.__scopeToggleGroup, type: "multiple", value: i24, defaultValue: i24, onItemActivate: g16, onItemDeactivate: T16, children: (0, import_jsx_runtime36.jsx)(A17, { ...u16, ref: p26 }) });
});
h15.displayName = m18;
var [oe6, te5] = S14(m18);
var C13 = (0, import_web13.styled)(import_group.Group, { name: m18, variants: { unstyled: { false: { backgroundColor: "$background" } }, orientation: { vertical: { flexDirection: "column", spaceDirection: "vertical" }, horizontal: { flexDirection: "row", spaceDirection: "horizontal" } } }, defaultVariants: { unstyled: false } });
var A17 = C13.extractable(import_react29.default.forwardRef((e27, p26) => {
  const { __scopeToggleGroup: n22, disabled: t28 = false, orientation: r32 = "horizontal", dir: u16, rovingFocus: i24 = true, loop: o23 = true, unstyled: g16 = false, size: T16 = "$true", sizeAdjust: a19 = 0, ...c26 } = e27, d20 = D12(n22), P17 = d13(u16), f24 = { role: "togglegroup", dir: P17, ...c26 }, E18 = (0, import_web13.getVariableValue)((0, import_get_size7.stepTokenUpOrDown)("size", e27.size, a19)), y15 = Math.round(E18 * 0.45);
  return (0, import_jsx_runtime36.jsx)(oe6, { scope: n22, rovingFocus: i24, disabled: t28, size: y15, children: i24 ? (0, import_jsx_runtime36.jsx)(k15, { asChild: true, ...d20, orientation: r32, dir: P17, loop: o23, children: (0, import_jsx_runtime36.jsx)(C13, { "aria-orientation": r32, orientation: r32, axis: r32, ref: p26, "data-disabled": t28 ? "" : void 0, unstyled: g16, ...f24 }) }) : (0, import_jsx_runtime36.jsx)(C13, { "aria-orientation": r32, ref: p26, orientation: r32, "data-disabled": t28 ? "" : void 0, unstyled: g16, ...f24 }) });
}));

// node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_jsx_runtime37 = require("react/jsx-runtime");
var import_get_button_sized4 = __toESM(require_cjs6());
var import_group2 = __toESM(require_cjs16());
var import_web14 = require("@tamagui/core-node");
var p19 = __toESM(require("react"));
var L12 = "TabsList";
var _11 = (0, import_web14.styled)(import_group2.Group, { name: L12, focusable: true });
var z13 = _11.extractable(p19.forwardRef((o23, u16) => {
  const { __scopeTabs: g16, loop: r32 = true, children: n22, ...e27 } = o23, c26 = M15(L12, g16), t28 = $7(g16);
  return (0, import_jsx_runtime37.jsx)(k15, { asChild: true, orientation: c26.orientation, dir: c26.dir, loop: r32, ...t28, children: (0, import_jsx_runtime37.jsx)(_11, { role: "tablist", "aria-orientation": c26.orientation, ref: u16, axis: c26.orientation, ...e27, children: n22 }) });
}));
z13.displayName = L12;
var R15 = "TabsTrigger";
var H12 = (0, import_web14.styled)(k4, { name: R15, justifyContent: "center", alignItems: "center", flexWrap: "nowrap", flexDirection: "row", cursor: "pointer", focusable: true, variants: { size: { "...size": import_get_button_sized4.getButtonSized }, disabled: { true: { pointerEvents: "none" } }, unstyled: { false: { backgroundColor: "$background", pressStyle: { backgroundColor: "$backgroundPress" }, hoverStyle: { backgroundColor: "$backgroundHover" }, focusStyle: { backgroundColor: "$backgroundFocus" } } } }, defaultVariants: { unstyled: false } });
var E17 = H12.extractable(p19.forwardRef((o23, u16) => {
  const { __scopeTabs: g16, value: r32, disabled: n22 = false, onInteraction: e27, ...c26 } = o23, t28 = M15(R15, g16), d20 = $7(g16), f24 = V14(t28.baseId, r32), v14 = B10(t28.baseId, r32), a19 = r32 === t28.value, [l27, P17] = p19.useState(null), i24 = p19.useRef(null), y15 = (0, import_group2.useGroupItem)({ disabled: n22 });
  return p19.useEffect(() => (t28.registerTrigger(), () => t28.unregisterTrigger()), []), p19.useEffect(() => {
    if (!i24.current || !import_web14.isWeb)
      return;
    function s23() {
      i24.current && P17({ width: i24.current.offsetWidth, height: i24.current.offsetHeight, x: i24.current.offsetLeft, y: i24.current.offsetTop });
    }
    __name(s23, "s");
    s23();
    const T16 = new ResizeObserver(s23);
    return T16.observe(i24.current), () => {
      i24.current && T16.unobserve(i24.current);
    };
  }, [t28.triggersCount]), p19.useEffect(() => {
    a19 && l27 && (e27 == null || e27("select", l27));
  }, [a19, r32, l27]), (0, import_jsx_runtime37.jsx)(import_web14.Theme, { forceClassName: true, name: a19 ? "active" : null, children: (0, import_jsx_runtime37.jsx)(k15.Item, { asChild: true, ...d20, focusable: !n22, active: a19, children: (0, import_jsx_runtime37.jsx)(H12, { onLayout: (s23) => {
    import_web14.isWeb || P17(s23.nativeEvent.layout);
  }, onHoverIn: (0, import_web14.composeEventHandlers)(o23.onHoverIn, () => {
    l27 && (e27 == null || e27("hover", l27));
  }), onHoverOut: (0, import_web14.composeEventHandlers)(o23.onHoverOut, () => {
    e27 == null || e27("hover", null);
  }), role: "tab", "aria-selected": a19, "aria-controls": v14, "data-state": a19 ? "active" : "inactive", "data-disabled": n22 ? "" : void 0, disabled: n22, id: f24, size: t28.size, ...c26, ref: (0, import_web14.composeRefs)(u16, i24), onPress: (0, import_web14.composeEventHandlers)(o23.onPress ?? void 0, (s23) => {
    const T16 = !import_web14.isWeb || s23.button === 0 && s23.ctrlKey === false;
    !n22 && !a19 && T16 ? t28.onChange(r32) : s23.preventDefault();
  }), ...import_web14.isWeb && { type: "button", onKeyDown: (0, import_web14.composeEventHandlers)(o23.onKeyDown, (s23) => {
    [" ", "Enter"].includes(s23.key) && (t28.onChange(r32), s23.preventDefault());
  }), onFocus: (0, import_web14.composeEventHandlers)(o23.onFocus, (s23) => {
    l27 && (e27 == null || e27("focus", l27));
    const T16 = t28.activationMode !== "manual";
    !a19 && !n22 && T16 && t28.onChange(r32);
  }), onBlur: (0, import_web14.composeEventHandlers)(o23.onFocus, () => {
    e27 == null || e27("focus", null);
  }) }, ...y15 }) }) });
}));
E17.displayName = R15;
var G15 = "TabsContent";
var N11 = (0, import_web14.styled)(k4, { name: G15 });
var D13 = N11.extractable(p19.forwardRef((o23, u16) => {
  const { __scopeTabs: g16, value: r32, forceMount: n22, children: e27, ...c26 } = o23, t28 = M15(G15, g16), d20 = r32 === t28.value, f24 = n22 || d20, v14 = V14(t28.baseId, r32), a19 = B10(t28.baseId, r32);
  return f24 ? (0, import_jsx_runtime37.jsx)(N11, { "data-state": d20 ? "active" : "inactive", "data-orientation": t28.orientation, role: "tabpanel", "aria-labelledby": v14, hidden: !f24, id: a19, tabIndex: 0, ...c26, ref: u16, children: e27 }, r32) : null;
}));
D13.displayName = G15;
var S15 = "Tabs";
var [ee9, de4] = V(S15, [to2]);
var $7 = to2();
var [te6, M15] = ee9(S15);
var A18 = (0, import_web14.styled)(k3, { name: S15 });
var oe7 = (0, import_web14.withStaticProperties)(A18.extractable(p19.forwardRef((o23, u16) => {
  const { __scopeTabs: g16, value: r32, onValueChange: n22, defaultValue: e27, orientation: c26 = "horizontal", dir: t28, activationMode: d20 = "automatic", size: f24 = "$true", ...v14 } = o23, a19 = d13(t28), [l27, P17] = A6({ prop: r32, onChange: n22, defaultProp: e27 ?? "" }), [i24, y15] = p19.useState(0), s23 = (0, import_web14.useEvent)(() => y15((h17) => h17 + 1)), T16 = (0, import_web14.useEvent)(() => y15((h17) => h17 - 1));
  return (0, import_jsx_runtime37.jsx)(te6, { scope: g16, baseId: (0, import_web14.useId)(), value: l27, onChange: P17, orientation: c26, dir: a19, activationMode: d20, size: f24, registerTrigger: s23, triggersCount: i24, unregisterTrigger: T16, children: (0, import_jsx_runtime37.jsx)(A18, { direction: a19, "data-orientation": c26, ...v14, ref: u16 }) });
})), { List: z13, Trigger: E17, Tab: E17, Content: D13 });
oe7.displayName = S15;
function V14(o23, u16) {
  return `${o23}-trigger-${u16}`;
}
__name(V14, "V");
function B10(o23, u16) {
  return `${o23}-content-${u16}`;
}
__name(B10, "B");

// node_modules/@tamagui/tooltip/dist/esm/Tooltip.js
var import_jsx_runtime38 = require("react/jsx-runtime");
var import_core36 = require("@tamagui/core-node");
var import_get_size8 = __toESM(require_cjs5());
var e19 = __toESM(require("react"));
var to3 = X4.extractable(e19.forwardRef(({ __scopePopover: t28, ...o23 }, d20) => {
  const a19 = g10(t28), c26 = E7("PopperContent", a19.__scopePopper), r32 = o23.size || c26.size || (0, import_get_size8.stepTokenUpOrDown)("size", "$true", -2);
  return (0, import_jsx_runtime38.jsx)(Oo, { componentName: "Tooltip", disableRemoveScroll: true, trapFocus: false, padding: r32, pointerEvents: "none", ref: d20, ...o23 });
}));
var ro3 = e19.forwardRef((t28, o23) => (0, import_jsx_runtime38.jsx)(L7, { componentName: "Tooltip", ref: o23, ...t28 }));
var Fo = /* @__PURE__ */ __name(({ children: t28, delay: o23 }) => (0, import_jsx_runtime38.jsx)(FloatingDelayGroup, { delay: e19.useMemo(() => o23, [JSON.stringify(o23)]), children: t28 }), "Fo");
var no2 = e19.forwardRef(function(o23, d20) {
  const { __scopePopover: a19, children: c26, delay: r32, restMs: C16 = typeof r32 > "u" ? 500 : typeof r32 == "number" ? r32 : 0, onOpenChange: l27, focus: h17, ...b17 } = o23, m24 = g10(a19), F16 = e19.useRef(null), [T16, P17] = e19.useState(false), { delay: A20, setCurrentId: S19 } = useDelayGroupContext(), f24 = r32 ?? A20, [i24, g16] = e19.useState(false), u16 = o23.groupId, R17 = (0, import_core36.useEvent)((s23) => {
    g16(s23), s23 && S19(u16), l27 == null || l27(s23);
  }), x19 = /* @__PURE__ */ __name((s23) => {
    const n22 = useFloating2({ ...s23, open: i24, onOpenChange: R17 }), { getReferenceProps: z14, getFloatingProps: D14 } = useInteractions([useHover(n22.context, { delay: f24, restMs: C16 }), useFocus(n22.context, h17), useRole(n22.context, { role: "tooltip" }), useDismiss(n22.context), useDelayGroup(n22.context, { id: u16 })]);
    return { ...n22, getReferenceProps: z14, getFloatingProps: D14 };
  }, "x"), w23 = e19.useCallback(x19, [u16, f24, i24]), O12 = e19.useCallback(() => P17(true), []), _13 = e19.useCallback(() => P17(false), []), k17 = (0, import_core36.useId)(), I12 = `$${(0, import_get_size8.stepTokenUpOrDown)("size", "$true", -2).key}`;
  return (0, import_jsx_runtime38.jsx)(s10.Provider, { value: w23, children: (0, import_jsx_runtime38.jsx)(be, { size: I12, ...m24, ...b17, children: (0, import_jsx_runtime38.jsx)(Pe3, { scope: a19, popperScope: m24.__scopePopper, contentId: k17, triggerRef: F16, sheetBreakpoint: false, scopeKey: "", open: i24, onOpenChange: g16, onOpenToggle: po, hasCustomAnchor: T16, onCustomAnchorAdd: O12, onCustomAnchorRemove: _13, children: c26 }) }) });
});
var To2 = (0, import_core36.withStaticProperties)(no2, { Anchor: M8, Arrow: ro3, Content: to3, Trigger: z7 });
var po = /* @__PURE__ */ __name(() => {
}, "po");

// node_modules/@tamagui/tooltip/dist/esm/TooltipSimple.js
var import_jsx_runtime39 = require("react/jsx-runtime");
var C15 = /* @__PURE__ */ __name(({ label: i24, children: l27, contentProps: a19, ...c26 }) => {
  let e27;
  try {
    e27 = useDelayGroupContext();
  } catch {
  }
  const p26 = (0, import_jsx_runtime39.jsxs)(To2, { ...c26, children: [(0, import_jsx_runtime39.jsx)(To2.Trigger, { asChild: true, children: l27 }), (0, import_jsx_runtime39.jsxs)(To2.Content, { zIndex: 1e6, enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 }, exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 }, x: 0, scale: 1, y: 0, elevation: "$1", opacity: 1, animation: ["quick", { opacity: { overshootClamping: true } }], ...a19, children: [(0, import_jsx_runtime39.jsx)(To2.Arrow, {}), (0, import_jsx_runtime39.jsx)(p10, { size: "$2", lineHeight: "$0", children: i24 })] })] });
  return e27 ? p26 : (0, import_jsx_runtime39.jsx)(Fo, { delay: T14, children: p26 });
}, "C");
var T14 = { open: 3e3, close: 100 };

// node_modules/@tamagui/use-debounce/dist/esm/index.mjs
var import_react32 = require("react");
function f18(n22, c26, o23) {
  let t28, e27 = false;
  function u16() {
    e27 = false;
    const r32 = this, s23 = arguments;
    o23 && !t28 && n22.apply(r32, s23), clearTimeout(t28), t28 = setTimeout(function() {
      t28 = null, o23 || e27 || n22.apply(r32, s23), e27 = false;
    }, c26);
  }
  __name(u16, "u");
  return u16.cancel = () => {
    e27 = true;
  }, u16;
}
__name(f18, "f");
var b14 = { leading: false };
function y13(n22, c26, o23 = b14, t28 = []) {
  const e27 = (0, import_react32.useRef)(null);
  return (0, import_react32.useEffect)(() => () => {
    var u16;
    (u16 = e27.current) == null || u16.cancel();
  }, []), (0, import_react32.useMemo)(() => (e27.current = f18(n22, c26, o23.leading), e27.current), [o23.leading, ...t28]);
}
__name(y13, "y");
function A19(n22, c26 = 0) {
  const [o23, t28] = (0, import_react32.useState)(n22);
  return (0, import_react32.useEffect)(() => {
    const e27 = setTimeout(() => {
      t28((u16) => u16 === n22 ? u16 : n22);
    }, c26);
    return () => {
      clearTimeout(e27);
    };
  }, [n22]), o23;
}
__name(A19, "A");

// node_modules/@tamagui/use-force-update/dist/esm/index.mjs
var import_react33 = require("react");
var r23 = process.env.TAMAGUI_TARGET === "web" && typeof window > "u";
var n17 = /* @__PURE__ */ __name(() => {
}, "n");
function d17() {
  return r23 ? n17 : (0, import_react33.useReducer)((e27) => e27 + 1, 0)[1];
}
__name(d17, "d");

// node_modules/@tamagui/constants/dist/esm/index.mjs
var import_react34 = require("react");
var e20 = process.env.TAMAGUI_TARGET === "web";
var o18 = typeof window < "u";
var i20 = e20 && !o18;
var t20 = e20 && o18;
var r24 = process.env.ENABLE_RSC;
var c20 = /* @__PURE__ */ __name(() => {
}, "c");
var p21 = r24 ? c20 : i20 ? import_react34.useEffect : import_react34.useLayoutEffect;
var f19 = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var T15 = t20 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
process.env.NODE_ENV === "development" && (process.env.TAMAGUI_TARGET ? t20 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1" && console.warn('Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this') : console.warn('Must set TAMAGUI_TARGET to "web" or "native"'));

// node_modules/@tamagui/use-window-dimensions/dist/esm/index.mjs
var import_react35 = require("react");
var import_react_native8 = require("react-native-web-lite");
var r25 = { fontScale: 1, height: 800, width: 600, scale: 1 };
function f20() {
  const e27 = (0, import_react_native8.useWindowDimensions)();
  if (process.env.TAMAGUI_TARGET != "web")
    return e27;
  const [t28, i24] = (0, import_react35.useState)(r25);
  return p21(() => {
    i24(e27);
  }, [e27.height, e27.width, e27.fontScale, e27.scale]), t28;
}
__name(f20, "f");

// node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.js
var import_web15 = require("@tamagui/core-node");
var e21 = (0, import_web15.styled)(import_web15.Stack, { position: "absolute", width: 1, height: 1, margin: -1, zIndex: -1e4, overflow: "hidden", opacity: 1e-8, pointerEvents: "none", variants: { preserveDimensions: { true: { position: "relative", width: "auto", height: "auto" } }, visible: { true: { position: "relative", width: "auto", height: "auto", margin: 0, zIndex: 1, overflow: "visible", opacity: 1, pointerEvents: "auto" } } } });
e21.isVisuallyHidden = true;

// node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var import_jsx_runtime40 = require("react/jsx-runtime");
var import_react_use_previous3 = __toESM(require_dist5());
var import_core37 = require("@tamagui/core-node");
var import_focusable5 = __toESM(require_cjs17());
var import_font_size3 = __toESM(require_cjs9());
var import_get_size9 = __toESM(require_cjs5());
var import_helpers_tamagui3 = __toESM(require_cjs12());
var c21 = __toESM(require("react"));
function l22(e27) {
  return e27 === "indeterminate";
}
__name(l22, "l");
function B11(e27) {
  return l22(e27) ? "indeterminate" : e27 ? "checked" : "unchecked";
}
__name(B11, "B");
var R16 = /* @__PURE__ */ __name((e27) => {
  const { checked: o23, bubbles: s23 = true, control: f24, isHidden: a19, ...m24 } = e27, u16 = c21.useRef(null), t28 = (0, import_react_use_previous3.usePrevious)(o23);
  return c21.useEffect(() => {
    const i24 = u16.current, b17 = window.HTMLInputElement.prototype, r32 = Object.getOwnPropertyDescriptor(b17, "checked").set;
    if (t28 !== o23 && r32) {
      const d20 = new Event("click", { bubbles: s23 });
      i24.indeterminate = l22(o23), r32.call(i24, l22(o23) ? false : o23), i24.dispatchEvent(d20);
    }
  }, [t28, o23, s23]), (0, import_jsx_runtime40.jsx)("input", { type: "checkbox", defaultChecked: l22(o23) ? false : o23, ...m24, tabIndex: -1, ref: u16, "aria-hidden": a19, style: { ...a19 ? { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } : { appearance: "auto", accentColor: "var(--color6)" }, ...e27.style } });
}, "R");
var v13 = "CheckboxIndicator";
var w21 = (0, import_core37.styled)(k4, { name: v13 });
var L14 = w21.extractable(c21.forwardRef((e27, o23) => {
  const { __scopeCheckbox: s23, children: f24, forceMount: a19, disablePassStyles: m24, ...u16 } = e27, t28 = ae2(v13, s23), i24 = (typeof t28.size == "number" ? t28.size * 0.65 : (0, import_font_size3.getFontSize)(t28.size)) * t28.scaleIcon, b17 = (0, import_core37.useTheme)(), x19 = (0, import_helpers_tamagui3.useGetThemedIcon)({ size: i24, color: b17.color }), d20 = c21.Children.toArray(f24).map((k17) => m24 || !c21.isValidElement(k17) ? k17 : x19(k17));
  return a19 || l22(t28.state) || t28.state === true ? (0, import_jsx_runtime40.jsx)(w21, { "data-state": B11(t28.state), "data-disabled": t28.disabled ? "" : void 0, pointerEvents: "none", ...u16, ref: o23, children: d20 }) : null;
}));
L14.displayName = v13;
var S16 = "Checkbox";
var _12 = (0, import_core37.styled)(k4, { name: S16, tag: "button", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", alignItems: "center", justifyContent: "center", pressTheme: true, focusable: true, borderWidth: 1, borderColor: "$borderColor", hoverStyle: { borderColor: "$borderColorHover" }, focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": (e27, { tokens: o23 }) => ({ borderRadius: (0, import_core37.getVariableValue)((0, import_get_size9.getSize)(e27)) / 8 }) } }, defaultVariants: { unstyled: false } });
var [ne4, ce3] = V(S16);
var [se4, ae2] = ne4(S16);
var ie3 = (0, import_core37.withStaticProperties)(_12.extractable(c21.forwardRef((e27, o23) => {
  const { __scopeCheckbox: s23, labelledBy: f24, name: a19, checked: m24, defaultChecked: u16, required: t28, scaleIcon: i24 = 1, scaleSize: b17 = 0.45, sizeAdjust: x19 = 0, disabled: r32, value: d20 = "on", onCheckedChange: k17, native: D14, ...O12 } = e27, [C16, G16] = c21.useState(null), V15 = (0, import_core37.useComposedRefs)(o23, (n22) => G16(n22)), P17 = c21.useRef(false), q13 = (0, import_core37.useMediaPropsActive)(e27), T16 = import_core37.isWeb ? C16 ? Boolean(C16.closest("form")) : true : false, [p26 = false, I12] = A6({ prop: m24, defaultProp: u16, onChange: k17 }), z14 = (0, import_core37.getVariableValue)((0, import_get_size9.stepTokenUpOrDown)("size", q13.size, x19)), g16 = b17 ? Math.round(z14 * b17) : z14, N12 = U5(C16), $8 = f24 || N12;
  return process.env.TAMAGUI_TARGET === "native" && c21.useEffect(() => {
    if (e27.id)
      return (0, import_focusable5.registerFocusable)(e27.id, { focusAndSelect: () => {
        I12((n22) => !n22);
      }, focus: () => {
      } });
  }, [e27.id, I12]), (0, import_jsx_runtime40.jsx)(se4, { scope: s23, state: p26, disabled: r32, size: g16, scaleIcon: i24, children: import_core37.isWeb && D14 ? (0, import_jsx_runtime40.jsx)(R16, { control: C16, bubbles: !P17.current, name: a19, value: d20, checked: p26, required: t28, disabled: r32, id: e27.id }) : (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(_12, { width: g16, height: g16, tag: "button", role: "checkbox", "aria-labelledby": $8, "aria-checked": l22(p26) ? "mixed" : p26, "aria-required": t28, "data-state": B11(p26), "data-disabled": r32 ? "" : void 0, disabled: r32, ...O12, ref: V15, ...import_core37.isWeb && { type: "button", value: d20, onKeyDown: (0, import_core37.composeEventHandlers)(e27.onKeyDown, (n22) => {
    n22.key === "Enter" && n22.preventDefault();
  }) }, onPress: (0, import_core37.composeEventHandlers)(e27.onPress, (n22) => {
    I12((E18) => l22(E18) ? true : !E18), T16 && (P17.current = n22.isPropagationStopped(), P17.current || n22.stopPropagation());
  }) }), import_core37.isWeb && T16 ? (0, import_jsx_runtime40.jsx)(R16, { isHidden: true, control: C16, bubbles: !P17.current, name: a19, value: d20, checked: p26, required: t28, disabled: r32 }) : null] }) });
})), { Indicator: L14 });
ie3.displayName = S16;

// node_modules/tamagui/dist/esm/createTamagui.js
var import_core38 = require("@tamagui/core-node");
var f21 = process.env.NODE_ENV !== "development" ? import_core38.createTamagui : (i24) => {
  const a19 = ["$true"], c26 = /* @__PURE__ */ __name((e27, s23) => e27.every((o23) => typeof s23[o23] < "u"), "c"), t28 = (0, import_core38.createTamagui)(i24);
  for (const e27 of ["size", "space"]) {
    const s23 = t28.tokensParsed[e27];
    if (!s23)
      throw new Error(`Expected tokens for "${e27}" in ${Object.keys(t28.tokensParsed).join(", ")}`);
    if (!c26(a19, s23))
      throw new Error(`
createTamagui() missing expected tokens.${e27}:

Received: ${Object.keys(s23).join(", ")}

Expected: ${a19.join(", ")}

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
  const n22 = Object.keys(t28.tokensParsed.size);
  for (const e27 of ["radius", "zIndex"]) {
    const s23 = t28.tokensParsed[e27], o23 = Object.keys(s23);
    if (!o23.some((u16) => n22.includes(u16)))
      throw new Error(`
createTamagui() invalid tokens.${e27}:

Received: ${o23.join(", ")}

Expected a subset of: ${n22.join(", ")}

`);
  }
  return t28;
};

// node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_jsx_runtime41 = require("react/jsx-runtime");
var import_core39 = require("@tamagui/core-node");
var t22 = import_core39.isRSC ? import_core39.TamaguiProvider : ({ children: i24, ...a19 }) => (0, import_jsx_runtime41.jsx)(import_core39.TamaguiProvider, { ...a19, children: (0, import_jsx_runtime41.jsx)(F3, { shouldAddRootHost: true, children: i24 }) });

// node_modules/tamagui/dist/esm/views/Anchor.js
var import_jsx_runtime42 = require("react/jsx-runtime");
var import_core40 = require("@tamagui/core-node");
var import_react36 = require("react");
var import_react_native9 = require("react-native-web-lite");
var o20 = (0, import_core40.styled)(s6, { name: "Anchor", tag: "a", accessibilityRole: "link" });
var p22 = o20.extractable((0, import_react36.forwardRef)(({ href: t28, target: r32, ...e27 }, i24) => (0, import_jsx_runtime42.jsx)(o20, { ...e27, ...import_core40.isWeb ? { href: t28, target: r32 } : { onPress: (a19) => {
  var n22;
  (n22 = e27.onPress) == null || n22.call(e27, a19), t28 !== void 0 && import_react_native9.Linking.openURL(t28);
} }, ref: i24 })));

// node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core41 = require("@tamagui/core-node");
var t23 = (0, import_core41.styled)(import_core41.Text, { opacity: 0, lineHeight: 0, height: 0, display: "flex", fontSize: 200, children: "wwwwwwwwwwwwwwwwwww", hoverStyle: { backgroundColor: "red" }, pointerEvents: "none" });
t23.isVisuallyHidden = true;

// node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core42 = require("@tamagui/core-node");
var i22 = (0, import_core42.styled)(c5, { name: "Fieldset", tag: "fieldset", variants: { horizontal: { true: { flexDirection: "row", alignItems: "center" } } } });

// node_modules/tamagui/dist/esm/views/Grid.js
var import_jsx_runtime43 = require("react/jsx-runtime");
var import_core43 = require("@tamagui/core-node");
var import_react37 = __toESM(require("react"));
function d18({ children: e27, columns: u16, itemMinWidth: n22 = 200, gap: r32 }) {
  if (import_core43.isWeb)
    return (0, import_jsx_runtime43.jsx)("div", { style: { gap: r32, display: "grid", justifyContent: "stretch", gridTemplateColumns: `repeat( auto-fit, minmax(${n22}px, 1fr) )` }, children: e27 });
  const m24 = import_react37.default.Children.toArray(e27);
  return (0, import_jsx_runtime43.jsx)(i7, { alignItems: "center", justifyContent: "center", flexWrap: "wrap", children: m24.map((i24, a19) => i24 ? (0, import_jsx_runtime43.jsx)(i7, { flex: 1, minWidth: n22, marginRight: r32, marginBottom: r32, children: i24 }, a19) : null) });
}
__name(d18, "d");

// node_modules/tamagui/dist/esm/views/Input.js
var import_core45 = require("@tamagui/core-node");
var import_focusable6 = __toESM(require_cjs17());
var import_react_native10 = require("react-native-web-lite");

// node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core44 = require("@tamagui/core-node");
var import_get_button_sized5 = __toESM(require_cjs6());
var import_get_font_sized3 = __toESM(require_cjs7());
var import_get_size10 = __toESM(require_cjs5());
var b15 = /* @__PURE__ */ __name((t28 = "$true", n22) => {
  if (n22.props.multiline || n22.props.numberOfLines > 1)
    return m21(t28, n22);
  const i24 = (0, import_get_button_sized5.getButtonSized)(t28, n22), o23 = (0, import_get_size10.stepTokenUpOrDown)("space", t28, -1, [2]), e27 = (0, import_get_font_sized3.getFontSized)(t28, n22);
  return !import_core44.isWeb && e27 && delete e27.lineHeight, { ...e27, ...i24, paddingHorizontal: o23 };
}, "b");
var m21 = /* @__PURE__ */ __name((t28 = "$true", n22) => {
  const { props: i24 } = n22, o23 = (0, import_get_button_sized5.getButtonSized)(t28, n22), e27 = (0, import_get_font_sized3.getFontSized)(t28, n22), s23 = i24.numberOfLines ? (i24.numberOfLines || 1) * (0, import_core44.getVariableValue)(e27.lineHeight) : "auto", u16 = (0, import_get_size10.stepTokenUpOrDown)("space", t28, -2, [2]), a19 = (0, import_get_size10.stepTokenUpOrDown)("space", t28, -1, [2]);
  return { ...o23, ...e27, paddingVertical: u16, paddingHorizontal: a19, height: s23 };
}, "m");

// node_modules/tamagui/dist/esm/views/Input.js
(0, import_core45.setupReactNative)({ TextInput: import_react_native10.TextInput });
var s21 = { size: "$true", fontFamily: "$body", borderWidth: 1, outlineWidth: 0, color: "$color", focusable: true, borderColor: "$borderColor", backgroundColor: "$background", placeholderTextColor: "$placeholderColor", minWidth: 0, hoverStyle: { borderColor: "$borderColorHover" }, focusStyle: { outlineColor: "$borderColorFocus", outlineWidth: 2, outlineStyle: "solid", borderColor: "$borderColorFocus" } };
var n20 = (0, import_core45.styled)(import_react_native10.TextInput, { name: "Input", variants: { unstyled: { false: s21 }, size: { "...size": b15 } }, defaultVariants: { unstyled: false } }, { isInput: true });
var c24 = (0, import_focusable6.focusableInputHOC)(n20);

// node_modules/tamagui/dist/esm/views/Layouts.js
var import_core46 = require("@tamagui/core-node");
var n21 = (0, import_core46.styled)(import_core46.Stack, { name: "Section", tag: "section", flexDirection: "column", accessibilityRole: "summary" });
var i23 = (0, import_core46.styled)(import_core46.Stack, { name: "Article", tag: "article", flexDirection: "column" });
var c25 = (0, import_core46.styled)(import_core46.Stack, { name: "Main", tag: "main", flexDirection: "column" });
var a18 = (0, import_core46.styled)(import_core46.Stack, { name: "Header", tag: "header", accessibilityRole: "header", flexDirection: "column" });
var r30 = (0, import_core46.styled)(import_core46.Stack, { name: "Aside", tag: "aside", flexDirection: "column" });
var l24 = (0, import_core46.styled)(import_core46.Stack, { name: "Footer", tag: "footer", flexDirection: "column" });
var m22 = (0, import_core46.styled)(import_core46.Stack, { name: "Nav", tag: "nav", flexDirection: "column" });

// node_modules/tamagui/dist/esm/views/Spinner.js
var import_jsx_runtime44 = require("react/jsx-runtime");
var import_core47 = require("@tamagui/core-node");
var f23 = __toESM(require("react"));
var import_react_native11 = require("react-native-web-lite");
var b16 = c5.extractable((0, import_core47.themeable)(f23.forwardRef((t28, n22) => {
  const { size: a19, color: i24, ...s23 } = t28, c26 = (0, import_core47.useTheme)();
  let e27 = i24;
  return e27 && e27[0] === "$" && (e27 = (0, import_core47.variableToString)(c26[e27])), (0, import_jsx_runtime44.jsx)(c5, { ref: n22, ...s23, children: (0, import_jsx_runtime44.jsx)(import_react_native11.ActivityIndicator, { size: a19, color: e27 }) });
}), { componentName: "Spinner" }));

// node_modules/tamagui/dist/esm/views/TextArea.js
var import_core48 = require("@tamagui/core-node");
var import_focusable7 = __toESM(require_cjs17());
var s22 = (0, import_core48.styled)(n20, { name: "TextArea", multiline: true, variants: { unstyled: { false: { ...s21, height: "auto", numberOfLines: 4 } }, size: { "...size": m21 } }, defaultVariants: { unstyled: false } });
var l26 = (0, import_focusable7.focusableInputHOC)(s22);

// node_modules/tamagui/dist/esm/index.mjs
var import_core49 = require("@tamagui/core-node");
function o22(e27) {
  return process.env.NODE_ENV === "development" && console.warn("LinearGradient has been moved to tamagui/linear-gradient as of 1.1"), null;
}
__name(o22, "o");

// src/tamagui.config.ts
var tamagui_config_default = f21({
  themes: oo,
  tokens: C2,
  shorthands: o,
  fonts: {
    body: (0, import_core49.createFont)({
      family: "Arial",
      size: {
        4: 14
      },
      lineHeight: {
        4: 16
      },
      weight: {
        4: "300",
        6: "700"
      },
      letterSpacing: {
        4: -0.25
      }
    })
  }
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

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

// node_modules/@tamagui/font-inter/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@tamagui/font-inter/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var o23 = Object.defineProperty;
    var c28 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var l27 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((t30, e29) => {
      for (var r32 in e29)
        o23(t30, r32, { get: e29[r32], enumerable: true });
    }, "b");
    var f25 = /* @__PURE__ */ __name((t30, e29, r32, i24) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let n23 of m25(e29))
          !l27.call(t30, n23) && n23 !== r32 && o23(t30, n23, { get: () => e29[n23], enumerable: !(i24 = c28(e29, n23)) || i24.enumerable });
      return t30;
    }, "f");
    var u16 = /* @__PURE__ */ __name((t30) => f25(o23({}, "__esModule", { value: true }), t30), "u");
    var p27 = {};
    b17(p27, { createInterFont: () => y15 });
    module2.exports = u16(p27);
    var s25 = require("@tamagui/core-node");
    var y15 = /* @__PURE__ */ __name((t30 = {}, { sizeLineHeight: e29 = /* @__PURE__ */ __name((i24) => i24 + 10, "e"), sizeSize: r32 = /* @__PURE__ */ __name((i24) => i24 * 1, "r") } = {}) => {
      const i24 = Object.fromEntries(Object.entries({ ...z14, ...t30.size }).map(([n23, a19]) => [n23, r32(+a19)]));
      return (0, s25.createFont)({ family: s25.isWeb ? 'Inter, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' : "Inter", lineHeight: Object.fromEntries(Object.entries(i24).map(([n23, a19]) => [n23, e29((0, s25.getVariableValue)(a19))])), weight: { 4: "300" }, letterSpacing: { 4: 0 }, ...t30, size: i24 });
    }, "y");
    var z14 = { 1: 11, 2: 12, 3: 13, 4: 14, true: 14, 5: 16, 6: 18, 7: 20, 8: 23, 9: 30, 10: 46, 11: 55, 12: 62, 13: 72, 14: 92, 15: 114, 16: 134 };
  }
});

// node_modules/@tamagui/font-silkscreen/dist/cjs/index.js
var require_cjs2 = __commonJS({
  "node_modules/@tamagui/font-silkscreen/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var s25 = Object.defineProperty;
    var c28 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var p27 = Object.prototype.hasOwnProperty;
    var f25 = /* @__PURE__ */ __name((t30, e29) => {
      for (var n23 in e29)
        s25(t30, n23, { get: e29[n23], enumerable: true });
    }, "f");
    var m25 = /* @__PURE__ */ __name((t30, e29, n23, r32) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of l27(e29))
          !p27.call(t30, o23) && o23 !== n23 && s25(t30, o23, { get: () => e29[o23], enumerable: !(r32 = c28(e29, o23)) || r32.enumerable });
      return t30;
    }, "m");
    var y15 = /* @__PURE__ */ __name((t30) => m25(s25({}, "__esModule", { value: true }), t30), "y");
    var b17 = {};
    f25(b17, { createSilkscreenFont: () => F16 });
    module2.exports = y15(b17);
    var i24 = require("@tamagui/core-node");
    var F16 = /* @__PURE__ */ __name((t30 = {}) => (0, i24.createFont)({ family: i24.isWeb ? "Silkscreen, Fira Code, Monaco, Consolas, Ubuntu Mono, monospace" : "Silkscreen", size: a19, lineHeight: Object.fromEntries(Object.entries(a19).map(([e29, n23]) => [e29, n23 * 1.2 + 6])), weight: { 4: "300" }, letterSpacing: { 4: 1, 5: 3, 6: 3, 9: -2, 10: -3, 12: -4 }, ...t30 }), "F");
    var a19 = { 1: 11, 2: 12, 3: 13, 4: 14, 5: 15, 6: 16, 7: 18, 8: 21, 9: 28, 10: 42, 11: 52, 12: 62, 13: 72, 14: 92, 15: 114, 16: 124 };
  }
});

// node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js
var require_polyfill = __commonJS({
  "node_modules/@tamagui/animations-react-native/dist/cjs/polyfill.js"() {
    "use strict";
    typeof requestAnimationFrame > "u" && (globalThis.requestAnimationFrame = setImmediate);
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js
var require_PresenceContext = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/PresenceContext.js"(exports, module2) {
    "use strict";
    var n23 = Object.defineProperty;
    var c28 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var x20 = Object.prototype.hasOwnProperty;
    var P17 = /* @__PURE__ */ __name((t30, e29) => {
      for (var r32 in e29)
        n23(t30, r32, { get: e29[r32], enumerable: true });
    }, "P");
    var l27 = /* @__PURE__ */ __name((t30, e29, r32, p27) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of m25(e29))
          !x20.call(t30, o23) && o23 !== r32 && n23(t30, o23, { get: () => e29[o23], enumerable: !(p27 = c28(e29, o23)) || p27.enumerable });
      return t30;
    }, "l");
    var C16 = /* @__PURE__ */ __name((t30) => l27(n23({}, "__esModule", { value: true }), t30), "C");
    var i24 = {};
    P17(i24, { PresenceContext: () => a19 });
    module2.exports = C16(i24);
    var s25 = require("react");
    var a19 = (0, s25.createContext)(null);
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/usePresence.js
var require_usePresence = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/usePresence.js"(exports, module2) {
    "use strict";
    var u16 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var P17 = Object.getOwnPropertyNames;
    var l27 = Object.prototype.hasOwnProperty;
    var m25 = /* @__PURE__ */ __name((e29, t30) => {
      for (var r32 in t30)
        u16(e29, r32, { get: t30[r32], enumerable: true });
    }, "m");
    var p27 = /* @__PURE__ */ __name((e29, t30, r32, o23) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let s25 of P17(t30))
          !l27.call(e29, s25) && s25 !== r32 && u16(e29, s25, { get: () => t30[s25], enumerable: !(o23 = i24(t30, s25)) || o23.enumerable });
      return e29;
    }, "p");
    var x20 = /* @__PURE__ */ __name((e29) => p27(u16({}, "__esModule", { value: true }), e29), "x");
    var R17 = {};
    m25(R17, { isPresent: () => f25, useIsPresent: () => d21, usePresence: () => a19 });
    module2.exports = x20(R17);
    var n23 = require("react");
    var c28 = require_PresenceContext();
    function a19() {
      const e29 = (0, n23.useContext)(c28.PresenceContext);
      if (!e29)
        return [true, null, e29];
      const { isPresent: t30, onExitComplete: r32, register: o23 } = e29, s25 = (0, n23.useId)() || "";
      return (0, n23.useEffect)(() => o23(s25), [s25, o23]), !t30 && r32 ? [false, () => r32 == null ? void 0 : r32(s25), e29] : [true, void 0, e29];
    }
    __name(a19, "a");
    function d21() {
      return f25((0, n23.useContext)(c28.PresenceContext));
    }
    __name(d21, "d");
    function f25(e29) {
      return e29 === null ? true : e29.isPresent;
    }
    __name(f25, "f");
  }
});

// node_modules/@tamagui/use-presence/dist/cjs/index.js
var require_cjs3 = __commonJS({
  "node_modules/@tamagui/use-presence/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((r32, o23, p27, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let m25 of c28(o23))
          !d21.call(r32, m25) && m25 !== p27 && a19(r32, m25, { get: () => o23[m25], enumerable: !(x20 = b17(o23, m25)) || x20.enumerable });
      return r32;
    }, "t");
    var f25 = /* @__PURE__ */ __name((r32, o23, p27) => (t30(r32, o23, "default"), p27 && t30(p27, o23, "default")), "f");
    var g17 = /* @__PURE__ */ __name((r32) => t30(a19({}, "__esModule", { value: true }), r32), "g");
    var e29 = {};
    module2.exports = g17(e29);
    f25(e29, require_PresenceContext(), module2.exports);
    f25(e29, require_usePresence(), module2.exports);
  }
});

// node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js
var require_createAnimations = __commonJS({
  "node_modules/@tamagui/animations-react-native/dist/cjs/createAnimations.js"(exports, module2) {
    "use strict";
    var E18 = Object.defineProperty;
    var M17 = Object.getOwnPropertyDescriptor;
    var W14 = Object.getOwnPropertyNames;
    var X9 = Object.prototype.hasOwnProperty;
    var Y11 = /* @__PURE__ */ __name((n23, e29) => {
      for (var t30 in e29)
        E18(n23, t30, { get: e29[t30], enumerable: true });
    }, "Y");
    var q13 = /* @__PURE__ */ __name((n23, e29, t30, r32) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let i24 of W14(e29))
          !X9.call(n23, i24) && i24 !== t30 && E18(n23, i24, { get: () => e29[i24], enumerable: !(r32 = M17(e29, i24)) || r32.enumerable });
      return n23;
    }, "q");
    var F16 = /* @__PURE__ */ __name((n23) => q13(E18({}, "__esModule", { value: true }), n23), "F");
    var ee11 = {};
    Y11(ee11, { AnimatedText: () => P17, AnimatedView: () => O12, createAnimations: () => B12, useAnimatedNumber: () => I12, useAnimatedNumberReaction: () => U10, useAnimatedNumberStyle: () => K11 });
    module2.exports = F16(ee11);
    var j15 = require_cjs3();
    var c28 = require("@tamagui/core-node");
    var x20 = require("react");
    var p27 = require("react-native-web-lite");
    var z14 = { transform: true, opacity: true };
    var O12 = p27.Animated.View;
    var P17 = p27.Animated.Text;
    function I12(n23) {
      const e29 = (0, c28.useSafeRef)(null);
      return e29.current || (e29.current = { composite: null, val: new p27.Animated.Value(n23), strategy: { type: "spring" } }), { getInstance() {
        return e29.current.val;
      }, getValue() {
        return e29.current.val._value;
      }, stop() {
        var t30;
        (t30 = e29.current.composite) == null || t30.stop(), e29.current.composite = null;
      }, setValue(t30, { type: r32, ...i24 } = { type: "spring" }) {
        var y15, d21;
        const a19 = e29.current.val;
        if (r32 === "direct")
          a19.setValue(t30);
        else if (r32 === "spring") {
          (y15 = e29.current.composite) == null || y15.stop();
          const m25 = p27.Animated.spring(a19, { ...i24, toValue: t30, useNativeDriver: !c28.isWeb });
          m25.start(), e29.current.composite = m25;
        } else {
          (d21 = e29.current.composite) == null || d21.stop();
          const m25 = p27.Animated.timing(a19, { ...i24, toValue: t30, useNativeDriver: !c28.isWeb });
          m25.start(), e29.current.composite = m25;
        }
      } };
    }
    __name(I12, "I");
    function U10({ value: n23 }, e29) {
      const t30 = (0, c28.useEvent)((r32) => {
        e29(r32.value);
      });
      (0, x20.useEffect)(() => {
        const r32 = n23.getInstance().addListener(t30);
        return () => {
          n23.getInstance().removeListener(r32);
        };
      }, [n23, t30]);
    }
    __name(U10, "U");
    function K11(n23, e29) {
      return e29(n23.getInstance());
    }
    __name(K11, "K");
    function B12(n23) {
      return O12.displayName = "AnimatedView", P17.displayName = "AnimatedText", { isReactNative: true, animations: n23, View: O12, Text: P17, useAnimatedNumber: I12, useAnimatedNumberReaction: U10, useAnimatedNumberStyle: K11, usePresence: j15.usePresence, useAnimations: ({ props: e29, onDidAnimate: t30, style: r32, state: i24, presence: a19 }) => {
        const y15 = (a19 == null ? void 0 : a19[0]) === false, d21 = a19 == null ? void 0 : a19[1], m25 = r32, s25 = (0, c28.useSafeRef)({}), b17 = (0, c28.useSafeRef)([]), N12 = (0, c28.useSafeRef)(/* @__PURE__ */ new WeakMap()), T16 = [JSON.stringify(m25), JSON.stringify(i24), y15, !!t30], C16 = (0, x20.useMemo)(() => {
          var k17;
          const V15 = [], S19 = [], $8 = {};
          for (const o23 in m25) {
            const u16 = m25[o23];
            if (!z14[o23]) {
              $8[o23] = u16;
              continue;
            }
            if (o23 !== "transform") {
              s25.current[o23] = R17(o23, s25.current[o23], u16);
              continue;
            }
            if (u16)
              for (const [g17, l27] of u16.entries()) {
                if (!l27)
                  continue;
                const A20 = Object.keys(l27)[0], f25 = (k17 = b17.current[g17]) == null ? void 0 : k17[A20];
                b17.current[g17] = { [A20]: R17(A20, f25, l27[A20]) }, b17.current = [...b17.current];
              }
          }
          const L15 = { ...Object.fromEntries(Object.entries(s25.current).map(([o23, u16]) => {
            var g17;
            return [o23, ((g17 = N12.current.get(u16)) == null ? void 0 : g17.interopolation) || u16];
          })), transform: b17.current.map((o23) => {
            var l27;
            const u16 = Object.keys(o23)[0], g17 = ((l27 = N12.current.get(o23[u16])) == null ? void 0 : l27.interopolation) || o23[u16];
            return { [u16]: g17 };
          }) };
          return { runners: V15, completions: S19, style: [$8, L15] };
          function R17(o23, u16, g17) {
            const [l27, A20] = Z10(g17), f25 = u16 || new p27.Animated.Value(l27);
            let w23;
            if (A20) {
              const v14 = N12.current.get(f25);
              w23 = G16((v14 == null ? void 0 : v14.current) ?? f25._value, l27, A20), N12.current.set(f25, { interopolation: f25.interpolate(w23), current: l27 });
            }
            if (f25) {
              const v14 = H14(o23, n23, e29.animation);
              let _13;
              const D14 = new Promise((h18) => {
                _13 = h18;
              });
              S19.push(D14), V15.push(() => {
                f25.stopAnimation();
                function h18() {
                  return p27.Animated[v14.type || "spring"](f25, { toValue: l27, useNativeDriver: !c28.isWeb, ...v14 });
                }
                __name(h18, "h");
                (v14.delay ? p27.Animated.sequence([p27.Animated.delay(v14.delay), h18()]) : h18()).start(({ finished: J16 }) => {
                  J16 && _13();
                });
              });
            }
            return process.env.NODE_ENV === "development" && e29.debug && console.log(" \u{1F4A0} animate", o23, `from ${f25._value} to`, g17, `(${l27})`, "type", A20, "interpolate", w23), f25;
          }
          __name(R17, "R");
        }, T16);
        return (0, c28.useIsomorphicLayoutEffect)(() => {
          C16.runners.forEach((S19) => S19());
          let V15 = false;
          return Promise.all(C16.completions).then(() => {
            V15 || (t30 == null || t30(), y15 && (d21 == null || d21()));
          }), () => {
            V15 = true;
          };
        }, T16), process.env.NODE_ENV === "development" && e29.debug === "verbose" && console.log("Returning animated", C16), C16;
      } };
    }
    __name(B12, "B");
    function G16(n23, e29, t30 = "deg") {
      e29 === n23 && (n23 = e29 - 1e-9);
      const r32 = [n23, e29], i24 = [`${n23}${t30}`, `${e29}${t30}`];
      return e29 < n23 && (r32.reverse(), i24.reverse()), { inputRange: r32, outputRange: i24 };
    }
    __name(G16, "G");
    function H14(n23, e29, t30) {
      var d21, m25;
      if (typeof t30 == "string")
        return e29[t30];
      let r32 = "", i24;
      const a19 = Q10[n23];
      if (Array.isArray(t30)) {
        r32 = t30[0];
        const s25 = ((d21 = t30[1]) == null ? void 0 : d21[n23]) ?? ((m25 = t30[1]) == null ? void 0 : m25[a19]);
        s25 && (typeof s25 == "string" ? r32 = s25 : (r32 = s25.type || r32, i24 = s25));
      } else {
        const s25 = (t30 == null ? void 0 : t30[n23]) ?? (t30 == null ? void 0 : t30[a19]);
        r32 = s25 == null ? void 0 : s25.type, i24 = s25;
      }
      const y15 = e29[r32];
      if (!y15)
        throw new Error(`No animation of type "${r32}" for key "${n23}"`);
      return { ...y15, ...i24 };
    }
    __name(H14, "H");
    var Q10 = { x: "translateX", y: "translateY", translateX: "x", translateY: "y" };
    function Z10(n23) {
      if (typeof n23 != "string")
        return [n23];
      const [e29, t30, r32] = n23.match(/([-0-9]+)(deg|%|px)/) ?? [];
      return [+t30, r32];
    }
    __name(Z10, "Z");
  }
});

// node_modules/@tamagui/animations-react-native/dist/cjs/index.js
var require_cjs4 = __commonJS({
  "node_modules/@tamagui/animations-react-native/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var x20 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var c28 = Object.prototype.hasOwnProperty;
    var e29 = /* @__PURE__ */ __name((r32, o23, p27, i24) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let m25 of b17(o23))
          !c28.call(r32, m25) && m25 !== p27 && x20(r32, m25, { get: () => o23[m25], enumerable: !(i24 = a19(o23, m25)) || i24.enumerable });
      return r32;
    }, "e");
    var f25 = /* @__PURE__ */ __name((r32, o23, p27) => (e29(r32, o23, "default"), p27 && e29(p27, o23, "default")), "f");
    var d21 = /* @__PURE__ */ __name((r32) => e29(x20({}, "__esModule", { value: true }), r32), "d");
    var t30 = {};
    module2.exports = d21(t30);
    var h18 = require_polyfill();
    f25(t30, require_createAnimations(), module2.exports);
  }
});

// node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js
var require_matchMedia = __commonJS({
  "node_modules/@tamagui/react-native-media-driver/dist/cjs/matchMedia.js"(exports, module2) {
    "use strict";
    var M17 = Object.defineProperty;
    var h18 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var o23 = Object.prototype.hasOwnProperty;
    var d21 = /* @__PURE__ */ __name((t30, a19) => {
      for (var i24 in a19)
        M17(t30, i24, { get: a19[i24], enumerable: true });
    }, "d");
    var p27 = /* @__PURE__ */ __name((t30, a19, i24, c28) => {
      if (a19 && typeof a19 == "object" || typeof a19 == "function")
        for (let e29 of m25(a19))
          !o23.call(t30, e29) && e29 !== i24 && M17(t30, e29, { get: () => a19[e29], enumerable: !(c28 = h18(a19, e29)) || c28.enumerable });
      return t30;
    }, "p");
    var r32 = /* @__PURE__ */ __name((t30) => p27(M17({}, "__esModule", { value: true }), t30), "r");
    var g17 = {};
    d21(g17, { matchMedia: () => b17 });
    module2.exports = r32(g17);
    var b17 = globalThis.matchMedia;
  }
});

// node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js
var require_createMedia = __commonJS({
  "node_modules/@tamagui/react-native-media-driver/dist/cjs/createMedia.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var M17 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var n23 = Object.prototype.hasOwnProperty;
    var u16 = /* @__PURE__ */ __name((e29, t30) => {
      for (var i24 in t30)
        a19(e29, i24, { get: t30[i24], enumerable: true });
    }, "u");
    var p27 = /* @__PURE__ */ __name((e29, t30, i24, c28) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let r32 of m25(t30))
          !n23.call(e29, r32) && r32 !== i24 && a19(e29, r32, { get: () => t30[r32], enumerable: !(c28 = M17(t30, r32)) || c28.enumerable });
      return e29;
    }, "p");
    var f25 = /* @__PURE__ */ __name((e29) => p27(a19({}, "__esModule", { value: true }), e29), "f");
    var y15 = {};
    u16(y15, { createMedia: () => s25 });
    module2.exports = f25(y15);
    var d21 = require("@tamagui/core-node");
    var o23 = require_matchMedia();
    function s25(e29) {
      return (0, d21.setupMatchMedia)(o23.matchMedia), e29;
    }
    __name(s25, "s");
  }
});

// node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js
var require_cjs5 = __commonJS({
  "node_modules/@tamagui/react-native-media-driver/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((r32, o23, p27, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let m25 of c28(o23))
          !d21.call(r32, m25) && m25 !== p27 && a19(r32, m25, { get: () => o23[m25], enumerable: !(x20 = b17(o23, m25)) || x20.enumerable });
      return r32;
    }, "t");
    var f25 = /* @__PURE__ */ __name((r32, o23, p27) => (t30(r32, o23, "default"), p27 && t30(p27, o23, "default")), "f");
    var g17 = /* @__PURE__ */ __name((r32) => t30(a19({}, "__esModule", { value: true }), r32), "g");
    var e29 = {};
    module2.exports = g17(e29);
    f25(e29, require_createMedia(), module2.exports);
    f25(e29, require_matchMedia(), module2.exports);
  }
});

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
      }).filter(function(x20) {
        return Boolean(x20);
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
    var t30 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var p27 = Object.prototype.hasOwnProperty;
    var s25 = /* @__PURE__ */ __name((r32, e29) => {
      for (var o23 in e29)
        t30(r32, o23, { get: e29[o23], enumerable: true });
    }, "s");
    var x20 = /* @__PURE__ */ __name((r32, e29, o23, d21) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let h18 of m25(e29))
          !p27.call(r32, h18) && h18 !== o23 && t30(r32, h18, { get: () => e29[h18], enumerable: !(d21 = i24(e29, h18)) || d21.enumerable });
      return r32;
    }, "x");
    var O12 = /* @__PURE__ */ __name((r32) => x20(t30({}, "__esModule", { value: true }), r32), "O");
    var a19 = {};
    s25(a19, { hideOthers: () => f25.hideOthers });
    module2.exports = O12(a19);
    var f25 = require_es5();
  }
});

// node_modules/@tamagui/aria-hidden/dist/cjs/index.js
var require_cjs6 = __commonJS({
  "node_modules/@tamagui/aria-hidden/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_AriaHidden(), module2.exports);
  }
});

// node_modules/@radix-ui/react-use-callback-ref/dist/index.js
var require_dist = __commonJS({
  "node_modules/@radix-ui/react-use-callback-ref/dist/index.js"(exports) {
    var e29;
    var r32;
    var t30 = (e29 = {}, r32 = require("react"), Object.keys(r32).forEach(function(t31) {
      "default" !== t31 && "__esModule" !== t31 && Object.defineProperty(e29, t31, { enumerable: true, get: function() {
        return r32[t31];
      } });
    }), e29);
    exports.useCallbackRef = function(e30) {
      const r33 = t30.useRef(e30);
      return t30.useEffect(() => {
        r33.current = e30;
      }), t30.useMemo(() => (...e31) => {
        var t31;
        return null === (t31 = r33.current) || void 0 === t31 ? void 0 : t31.call(r33, ...e31);
      }, []);
    };
  }
});

// node_modules/@radix-ui/react-use-escape-keydown/dist/index.js
var require_dist2 = __commonJS({
  "node_modules/@radix-ui/react-use-escape-keydown/dist/index.js"(exports) {
    var e29;
    var t30;
    var n23 = require_dist().useCallbackRef;
    var r32 = (e29 = {}, t30 = require("react"), Object.keys(t30).forEach(function(n24) {
      "default" !== n24 && "__esModule" !== n24 && Object.defineProperty(e29, n24, { enumerable: true, get: function() {
        return t30[n24];
      } });
    }), e29);
    exports.useEscapeKeydown = function(e30) {
      const t31 = n23(e30);
      r32.useEffect(() => {
        const e31 = /* @__PURE__ */ __name((e32) => {
          "Escape" === e32.key && t31(e32);
        }, "e");
        return document.addEventListener("keydown", e31), () => document.removeEventListener("keydown", e31);
      }, [t31]);
    };
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js
var require_compose_refs = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/compose-refs.js"(exports, module2) {
    "use strict";
    var T16 = Object.create;
    var s25 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var a19 = Object.getOwnPropertyNames;
    var u16 = Object.getPrototypeOf;
    var r32 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((e29, t30) => {
      for (var o23 in t30)
        s25(e29, o23, { get: t30[o23], enumerable: true });
    }, "b");
    var c28 = /* @__PURE__ */ __name((e29, t30, o23, R17) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let f25 of a19(t30))
          !r32.call(e29, f25) && f25 !== o23 && s25(e29, f25, { get: () => t30[f25], enumerable: !(R17 = i24(t30, f25)) || R17.enumerable });
      return e29;
    }, "c");
    var l27 = /* @__PURE__ */ __name((e29, t30, o23) => (o23 = e29 != null ? T16(u16(e29)) : {}, c28(t30 || !e29 || !e29.__esModule ? s25(o23, "default", { value: e29, enumerable: true }) : o23, e29)), "l");
    var p27 = /* @__PURE__ */ __name((e29) => c28(s25({}, "__esModule", { value: true }), e29), "p");
    var j15 = {};
    b17(j15, { composeRefs: () => n23, useComposedRefs: () => P17 });
    module2.exports = p27(j15);
    var d21 = l27(require("react"));
    function m25(e29, t30) {
      typeof e29 == "function" ? e29(t30) : e29 && (e29.current = t30);
    }
    __name(m25, "m");
    function n23(...e29) {
      return (t30) => e29.forEach((o23) => m25(o23, t30));
    }
    __name(n23, "n");
    function P17(...e29) {
      return d21.useCallback(n23(...e29), e29);
    }
    __name(P17, "P");
  }
});

// node_modules/@tamagui/compose-refs/dist/cjs/index.js
var require_cjs7 = __commonJS({
  "node_modules/@tamagui/compose-refs/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_compose_refs(), module2.exports);
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
    var p27 = /* @__PURE__ */ __name((n23, e29) => {
      for (var s25 in e29)
        u16(n23, s25, { get: e29[s25], enumerable: true });
    }, "p");
    var l27 = /* @__PURE__ */ __name((n23, e29, s25, c28) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of i24(e29))
          !a19.call(n23, o23) && o23 !== s25 && u16(n23, o23, { get: () => e29[o23], enumerable: !(c28 = r32(e29, o23)) || c28.enumerable });
      return n23;
    }, "l");
    var y15 = /* @__PURE__ */ __name((n23) => l27(u16({}, "__esModule", { value: true }), n23), "y");
    var m25 = {};
    p27(m25, { useGet: () => d21 });
    module2.exports = y15(m25);
    var t30 = require("react");
    var A20 = process.env.TAMAGUI_TARGET === "web";
    var b17 = typeof window < "u";
    var E18 = !A20 || b17 ? t30.useLayoutEffect : t30.useEffect;
    function d21(n23, e29, s25) {
      const c28 = (0, t30.useRef)(e29 ?? n23);
      return E18(() => {
        c28.current = n23;
      }), (0, t30.useCallback)(s25 ? (...o23) => {
        var f25;
        return (f25 = c28.current) == null ? void 0 : f25.apply(null, o23);
      } : () => c28.current, []);
    }
    __name(d21, "d");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/useEvent.js
var require_useEvent = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/useEvent.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var s25 = Object.prototype.hasOwnProperty;
    var c28 = /* @__PURE__ */ __name((n23, e29) => {
      for (var r32 in e29)
        a19(n23, r32, { get: e29[r32], enumerable: true });
    }, "c");
    var y15 = /* @__PURE__ */ __name((n23, e29, r32, o23) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let t30 of l27(e29))
          !s25.call(n23, t30) && t30 !== r32 && a19(n23, t30, { get: () => e29[t30], enumerable: !(o23 = i24(e29, t30)) || o23.enumerable });
      return n23;
    }, "y");
    var d21 = /* @__PURE__ */ __name((n23) => y15(a19({}, "__esModule", { value: true }), n23), "d");
    var h18 = {};
    c28(h18, { useEvent: () => T16 });
    module2.exports = d21(h18);
    var u16 = require_useGet();
    function T16(n23) {
      return (0, u16.useGet)(n23, f25, true);
    }
    __name(T16, "T");
    var f25 = /* @__PURE__ */ __name(() => {
      throw new Error("Cannot call an event handler while rendering.");
    }, "f");
  }
});

// node_modules/@tamagui/use-event/dist/cjs/index.js
var require_cjs8 = __commonJS({
  "node_modules/@tamagui/use-event/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((r32, o23, p27, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let m25 of c28(o23))
          !d21.call(r32, m25) && m25 !== p27 && a19(r32, m25, { get: () => o23[m25], enumerable: !(x20 = b17(o23, m25)) || x20.enumerable });
      return r32;
    }, "t");
    var f25 = /* @__PURE__ */ __name((r32, o23, p27) => (t30(r32, o23, "default"), p27 && t30(p27, o23, "default")), "f");
    var g17 = /* @__PURE__ */ __name((r32) => t30(a19({}, "__esModule", { value: true }), r32), "g");
    var e29 = {};
    module2.exports = g17(e29);
    f25(e29, require_useEvent(), module2.exports);
    f25(e29, require_useGet(), module2.exports);
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js
var require_FocusScope = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/FocusScope.js"(exports, module2) {
    "use strict";
    var w23 = Object.create;
    var m25 = Object.defineProperty;
    var x20 = Object.getOwnPropertyDescriptor;
    var D14 = Object.getOwnPropertyNames;
    var V15 = Object.getPrototypeOf;
    var W14 = Object.prototype.hasOwnProperty;
    var j15 = /* @__PURE__ */ __name((e29, t30) => {
      for (var n23 in t30)
        m25(e29, n23, { get: t30[n23], enumerable: true });
    }, "j");
    var H14 = /* @__PURE__ */ __name((e29, t30, n23, o23) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let r32 of D14(t30))
          !W14.call(e29, r32) && r32 !== n23 && m25(e29, r32, { get: () => t30[r32], enumerable: !(o23 = x20(t30, r32)) || o23.enumerable });
      return e29;
    }, "H");
    var q13 = /* @__PURE__ */ __name((e29, t30, n23) => (n23 = e29 != null ? w23(V15(e29)) : {}, H14(t30 || !e29 || !e29.__esModule ? m25(n23, "default", { value: e29, enumerable: true }) : n23, e29)), "q");
    var z14 = /* @__PURE__ */ __name((e29) => H14(m25({}, "__esModule", { value: true }), e29), "z");
    var $8 = {};
    j15($8, { FocusScope: () => S19 });
    module2.exports = z14($8);
    var O12 = require_cjs7();
    var M17 = require_cjs8();
    var a19 = q13(require("react"));
    var b17 = "focusScope.autoFocusOnMount";
    var y15 = "focusScope.autoFocusOnUnmount";
    var h18 = { bubbles: false, cancelable: true };
    var B12 = "FocusScope";
    var S19 = a19.forwardRef((e29, t30) => {
      const { loop: n23 = false, trapped: o23 = false, onMountAutoFocus: r32, onUnmountAutoFocus: A20, children: g17, forceUnmount: p27, ...U10 } = e29, [u16, R17] = a19.useState(null), E18 = (0, M17.useEvent)(r32), T16 = (0, M17.useEvent)(A20), F16 = a19.useRef(null), K11 = (0, O12.useComposedRefs)(t30, (s25) => R17(s25)), l27 = a19.useRef({ paused: false, pause() {
        this.paused = true;
      }, resume() {
        this.paused = false;
      } }).current;
      a19.useEffect(() => {
        if (!o23)
          return;
        function s25(c28) {
          if (l27.paused || !u16)
            return;
          const f25 = c28.target;
          u16.contains(f25) ? F16.current = f25 : i24(F16.current, { select: true });
        }
        __name(s25, "s");
        function d21(c28) {
          l27.paused || !u16 || u16.contains(c28.relatedTarget) || i24(F16.current, { select: true });
        }
        __name(d21, "d");
        return document.addEventListener("focusin", s25), document.addEventListener("focusout", d21), () => {
          document.removeEventListener("focusin", s25), document.removeEventListener("focusout", d21);
        };
      }, [o23, p27, u16, l27.paused]), a19.useEffect(() => {
        if (!u16 || p27)
          return;
        P17.add(l27);
        const s25 = document.activeElement;
        if (!u16.contains(s25)) {
          const c28 = new CustomEvent(b17, h18);
          u16.addEventListener(b17, E18), u16.dispatchEvent(c28), c28.defaultPrevented || (G16(Z10(N12(u16)), { select: true }), document.activeElement === s25 && i24(u16));
        }
        return () => {
          u16.removeEventListener(b17, E18);
          const c28 = new CustomEvent(y15, h18);
          u16.addEventListener(y15, T16), u16.dispatchEvent(c28), c28.defaultPrevented || i24(s25 ?? document.body, { select: true }), u16.removeEventListener(y15, T16), P17.remove(l27);
        };
      }, [u16, p27, E18, T16, l27]);
      const _13 = a19.useCallback((s25) => {
        if (!(n23 || o23) || l27.paused)
          return;
        const d21 = s25.key === "Tab" && !s25.altKey && !s25.ctrlKey && !s25.metaKey, c28 = document.activeElement;
        if (d21 && c28) {
          const f25 = s25.currentTarget, [v14, L15] = J16(f25);
          v14 && L15 ? !s25.shiftKey && c28 === L15 ? (s25.preventDefault(), n23 && i24(v14, { select: true })) : s25.shiftKey && c28 === v14 && (s25.preventDefault(), n23 && i24(L15, { select: true })) : c28 === f25 && s25.preventDefault();
        }
      }, [n23, o23, l27.paused]), k17 = a19.Children.only(g17);
      return a19.cloneElement(k17, { tabIndex: -1, ...U10, ref: K11, onKeyDown: _13 });
    });
    S19.displayName = B12;
    function G16(e29, { select: t30 = false } = {}) {
      const n23 = document.activeElement;
      for (const o23 of e29)
        if (i24(o23, { select: t30 }), document.activeElement !== n23)
          return;
    }
    __name(G16, "G");
    function J16(e29) {
      const t30 = N12(e29), n23 = I12(t30, e29), o23 = I12(t30.reverse(), e29);
      return [n23, o23];
    }
    __name(J16, "J");
    function N12(e29) {
      const t30 = [], n23 = document.createTreeWalker(e29, NodeFilter.SHOW_ELEMENT, { acceptNode: (o23) => {
        const r32 = o23.tagName === "INPUT" && o23.type === "hidden";
        return o23.disabled || o23.hidden || r32 ? NodeFilter.FILTER_SKIP : o23.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      } });
      for (; n23.nextNode(); )
        t30.push(n23.currentNode);
      return t30;
    }
    __name(N12, "N");
    function I12(e29, t30) {
      for (const n23 of e29)
        if (!Q10(n23, { upTo: t30 }))
          return n23;
    }
    __name(I12, "I");
    function Q10(e29, { upTo: t30 }) {
      if (getComputedStyle(e29).visibility === "hidden")
        return true;
      for (; e29; ) {
        if (t30 !== void 0 && e29 === t30)
          return false;
        if (getComputedStyle(e29).display === "none")
          return true;
        e29 = e29.parentElement;
      }
      return false;
    }
    __name(Q10, "Q");
    function X9(e29) {
      return e29 instanceof HTMLInputElement && "select" in e29;
    }
    __name(X9, "X");
    function i24(e29, { select: t30 = false } = {}) {
      if (e29 != null && e29.focus) {
        const n23 = document.activeElement;
        e29.focus({ preventScroll: true }), e29 !== n23 && X9(e29) && t30 && e29.select();
      }
    }
    __name(i24, "i");
    var P17 = Y11();
    function Y11() {
      let e29 = [];
      return { add(t30) {
        const n23 = e29[0];
        t30 !== n23 && (n23 == null || n23.pause()), e29 = C16(e29, t30), e29.unshift(t30);
      }, remove(t30) {
        var n23;
        e29 = C16(e29, t30), (n23 = e29[0]) == null || n23.resume();
      } };
    }
    __name(Y11, "Y");
    function C16(e29, t30) {
      const n23 = [...e29], o23 = n23.indexOf(t30);
      return o23 !== -1 && n23.splice(o23, 1), n23;
    }
    __name(C16, "C");
    function Z10(e29) {
      return e29.filter((t30) => t30.tagName !== "A");
    }
    __name(Z10, "Z");
  }
});

// node_modules/@tamagui/focus-scope/dist/cjs/index.js
var require_cjs9 = __commonJS({
  "node_modules/@tamagui/focus-scope/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_FocusScope(), module2.exports);
  }
});

// node_modules/@tamagui/get-size/dist/cjs/index.js
var require_cjs10 = __commonJS({
  "node_modules/@tamagui/get-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var O12 = Object.getOwnPropertyDescriptor;
    var T16 = Object.getOwnPropertyNames;
    var g17 = Object.prototype.hasOwnProperty;
    var z14 = /* @__PURE__ */ __name((r32, e29) => {
      for (var t30 in e29)
        a19(r32, t30, { get: e29[t30], enumerable: true });
    }, "z");
    var S19 = /* @__PURE__ */ __name((r32, e29, t30, o23) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let n23 of T16(e29))
          !g17.call(r32, n23) && n23 !== t30 && a19(r32, n23, { get: () => e29[n23], enumerable: !(o23 = O12(e29, n23)) || o23.enumerable });
      return r32;
    }, "S");
    var $8 = /* @__PURE__ */ __name((r32) => S19(a19({}, "__esModule", { value: true }), r32), "$");
    var b17 = {};
    z14(b17, { getSize: () => y15, stepTokenUpOrDown: () => d21 });
    module2.exports = $8(b17);
    var s25 = require("@tamagui/core-node");
    var y15 = /* @__PURE__ */ __name((r32, e29 = 0, t30 = [0]) => d21("size", r32, e29, t30), "y");
    var d21 = /* @__PURE__ */ __name((r32, e29 = "$true", t30 = 0, o23 = [0]) => {
      const n23 = (0, s25.getTokens)({ prefixed: true })[r32], c28 = (s25.tokensKeysOrdered.get(n23) || Object.keys(n23)).map((i24) => i24.charAt(0) === "$" ? i24 : `$${i24}`), k17 = o23[0] ?? 0, p27 = o23[1] ?? c28.length - 1, m25 = c28.indexOf(e29);
      e29 === "$true" && (t30 += t30 === 0 ? 0 : t30 > 0 ? 1 : -1);
      const u16 = Math.min(p27, Math.max(k17, m25 + t30)), x20 = c28[u16];
      return n23[x20] || n23.$true;
    }, "d");
  }
});

// node_modules/@tamagui/get-button-sized/dist/cjs/index.js
var require_cjs11 = __commonJS({
  "node_modules/@tamagui/get-button-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var d21 = Object.getOwnPropertyDescriptor;
    var s25 = Object.getOwnPropertyNames;
    var p27 = Object.prototype.hasOwnProperty;
    var u16 = /* @__PURE__ */ __name((e29, r32) => {
      for (var i24 in r32)
        a19(e29, i24, { get: r32[i24], enumerable: true });
    }, "u");
    var z14 = /* @__PURE__ */ __name((e29, r32, i24, o23) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let t30 of s25(r32))
          !p27.call(e29, t30) && t30 !== i24 && a19(e29, t30, { get: () => r32[t30], enumerable: !(o23 = d21(r32, t30)) || o23.enumerable });
      return e29;
    }, "z");
    var S19 = /* @__PURE__ */ __name((e29) => z14(a19({}, "__esModule", { value: true }), e29), "S");
    var m25 = {};
    u16(m25, { getButtonSized: () => g17 });
    module2.exports = S19(m25);
    var n23 = require_cjs10();
    var g17 = /* @__PURE__ */ __name((e29, { tokens: r32 }) => {
      if (typeof e29 == "number")
        return { paddingHorizontal: e29 * 0.25, height: e29, borderRadius: e29 * 0.2 };
      const i24 = (0, n23.getSize)(e29, 0), o23 = (0, n23.stepTokenUpOrDown)("space", e29), t30 = r32.radius[e29] ?? r32.radius.$true;
      return { paddingHorizontal: o23, height: i24, borderRadius: t30 };
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
function __extends(d21, b17) {
  if (typeof b17 !== "function" && b17 !== null)
    throw new TypeError("Class extends value " + String(b17) + " is not a constructor or null");
  extendStatics(d21, b17);
  function __() {
    this.constructor = d21;
  }
  __name(__, "__");
  d21.prototype = b17 === null ? Object.create(b17) : (__.prototype = b17.prototype, new __());
}
function __rest(s25, e29) {
  var t30 = {};
  for (var p27 in s25)
    if (Object.prototype.hasOwnProperty.call(s25, p27) && e29.indexOf(p27) < 0)
      t30[p27] = s25[p27];
  if (s25 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i24 = 0, p27 = Object.getOwnPropertySymbols(s25); i24 < p27.length; i24++) {
      if (e29.indexOf(p27[i24]) < 0 && Object.prototype.propertyIsEnumerable.call(s25, p27[i24]))
        t30[p27[i24]] = s25[p27[i24]];
    }
  return t30;
}
function __decorate(decorators, target, key, desc) {
  var c28 = arguments.length, r32 = c28 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d21;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r32 = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i24 = decorators.length - 1; i24 >= 0; i24--)
      if (d21 = decorators[i24])
        r32 = (c28 < 3 ? d21(r32) : c28 > 3 ? d21(target, key, r32) : d21(target, key)) || r32;
  return c28 > 3 && r32 && Object.defineProperty(target, key, r32), r32;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f25) {
    if (f25 !== void 0 && typeof f25 !== "function")
      throw new TypeError("Function expected");
    return f25;
  }
  __name(accept, "accept");
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _13, done = false;
  for (var i24 = decorators.length - 1; i24 >= 0; i24--) {
    var context = {};
    for (var p27 in contextIn)
      context[p27] = p27 === "access" ? {} : contextIn[p27];
    for (var p27 in contextIn.access)
      context.access[p27] = contextIn.access[p27];
    context.addInitializer = function(f25) {
      if (done)
        throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f25 || null));
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
function __propKey(x20) {
  return typeof x20 === "symbol" ? x20 : "".concat(x20);
}
function __setFunctionName(f25, name, prefix) {
  if (typeof name === "symbol")
    name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f25, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
      } catch (e29) {
        reject(e29);
      }
    }
    __name(fulfilled, "fulfilled");
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e29) {
        reject(e29);
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
    if (t30[0] & 1)
      throw t30[1];
    return t30[1];
  }, trys: [], ops: [] }, f25, y15, t30, g17;
  return g17 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g17[Symbol.iterator] = function() {
    return this;
  }), g17;
  function verb(n23) {
    return function(v14) {
      return step([n23, v14]);
    };
  }
  __name(verb, "verb");
  function step(op) {
    if (f25)
      throw new TypeError("Generator is already executing.");
    while (g17 && (g17 = 0, op[0] && (_13 = 0)), _13)
      try {
        if (f25 = 1, y15 && (t30 = op[0] & 2 ? y15["return"] : op[0] ? y15["throw"] || ((t30 = y15["return"]) && t30.call(y15), 0) : y15.next) && !(t30 = t30.call(y15, op[1])).done)
          return t30;
        if (y15 = 0, t30)
          op = [op[0] & 2, t30.value];
        switch (op[0]) {
          case 0:
          case 1:
            t30 = op;
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
            if (!(t30 = _13.trys, t30 = t30.length > 0 && t30[t30.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _13 = 0;
              continue;
            }
            if (op[0] === 3 && (!t30 || op[1] > t30[0] && op[1] < t30[3])) {
              _13.label = op[1];
              break;
            }
            if (op[0] === 6 && _13.label < t30[1]) {
              _13.label = t30[1];
              t30 = op;
              break;
            }
            if (t30 && _13.label < t30[2]) {
              _13.label = t30[2];
              _13.ops.push(op);
              break;
            }
            if (t30[2])
              _13.ops.pop();
            _13.trys.pop();
            continue;
        }
        op = body.call(thisArg, _13);
      } catch (e29) {
        op = [6, e29];
        y15 = 0;
      } finally {
        f25 = t30 = 0;
      }
    if (op[0] & 5)
      throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
  __name(step, "step");
}
function __exportStar(m25, o23) {
  for (var p27 in m25)
    if (p27 !== "default" && !Object.prototype.hasOwnProperty.call(o23, p27))
      __createBinding(o23, m25, p27);
}
function __values(o23) {
  var s25 = typeof Symbol === "function" && Symbol.iterator, m25 = s25 && o23[s25], i24 = 0;
  if (m25)
    return m25.call(o23);
  if (o23 && typeof o23.length === "number")
    return {
      next: function() {
        if (o23 && i24 >= o23.length)
          o23 = void 0;
        return { value: o23 && o23[i24++], done: !o23 };
      }
    };
  throw new TypeError(s25 ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o23, n23) {
  var m25 = typeof Symbol === "function" && o23[Symbol.iterator];
  if (!m25)
    return o23;
  var i24 = m25.call(o23), r32, ar = [], e29;
  try {
    while ((n23 === void 0 || n23-- > 0) && !(r32 = i24.next()).done)
      ar.push(r32.value);
  } catch (error) {
    e29 = { error };
  } finally {
    try {
      if (r32 && !r32.done && (m25 = i24["return"]))
        m25.call(i24);
    } finally {
      if (e29)
        throw e29.error;
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
  for (var s25 = 0, i24 = 0, il = arguments.length; i24 < il; i24++)
    s25 += arguments[i24].length;
  for (var r32 = Array(s25), k17 = 0, i24 = 0; i24 < il; i24++)
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
  var g17 = generator.apply(thisArg, _arguments || []), i24, q13 = [];
  return i24 = {}, verb("next"), verb("throw"), verb("return"), i24[Symbol.asyncIterator] = function() {
    return this;
  }, i24;
  function verb(n23) {
    if (g17[n23])
      i24[n23] = function(v14) {
        return new Promise(function(a19, b17) {
          q13.push([n23, v14, a19, b17]) > 1 || resume(n23, v14);
        });
      };
  }
  __name(verb, "verb");
  function resume(n23, v14) {
    try {
      step(g17[n23](v14));
    } catch (e29) {
      settle(q13[0][3], e29);
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
  function settle(f25, v14) {
    if (f25(v14), q13.shift(), q13.length)
      resume(q13[0][0], q13[0][1]);
  }
  __name(settle, "settle");
}
function __asyncDelegator(o23) {
  var i24, p27;
  return i24 = {}, verb("next"), verb("throw", function(e29) {
    throw e29;
  }), verb("return"), i24[Symbol.iterator] = function() {
    return this;
  }, i24;
  function verb(n23, f25) {
    i24[n23] = o23[n23] ? function(v14) {
      return (p27 = !p27) ? { value: __await(o23[n23](v14)), done: false } : f25 ? f25(v14) : v14;
    } : f25;
  }
  __name(verb, "verb");
}
function __asyncValues(o23) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m25 = o23[Symbol.asyncIterator], i24;
  return m25 ? m25.call(o23) : (o23 = typeof __values === "function" ? __values(o23) : o23[Symbol.iterator](), i24 = {}, verb("next"), verb("throw"), verb("return"), i24[Symbol.asyncIterator] = function() {
    return this;
  }, i24);
  function verb(n23) {
    i24[n23] = o23[n23] && function(v14) {
      return new Promise(function(resolve, reject) {
        v14 = o23[n23](v14), settle(resolve, reject, v14.done, v14.value);
      });
    };
  }
  __name(verb, "verb");
  function settle(resolve, reject, d21, v14) {
    Promise.resolve(v14).then(function(v15) {
      resolve({ value: v15, done: d21 });
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
function __classPrivateFieldGet(receiver, state, kind, f25) {
  if (kind === "a" && !f25)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f25 : !state.has(receiver))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f25 : kind === "a" ? f25.call(receiver) : f25 ? f25.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f25) {
  if (kind === "m")
    throw new TypeError("Private method is not writable");
  if (kind === "a" && !f25)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f25 : !state.has(receiver))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f25.call(receiver, value) : f25 ? f25.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
var extendStatics, __assign, __createBinding, __setModuleDefault;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.js"() {
    extendStatics = /* @__PURE__ */ __name(function(d21, b17) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d22, b18) {
        d22.__proto__ = b18;
      } || function(d22, b18) {
        for (var p27 in b18)
          if (Object.prototype.hasOwnProperty.call(b18, p27))
            d22[p27] = b18[p27];
      };
      return extendStatics(d21, b17);
    }, "extendStatics");
    __name(__extends, "__extends");
    __assign = /* @__PURE__ */ __name(function() {
      __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t30) {
        for (var s25, i24 = 1, n23 = arguments.length; i24 < n23; i24++) {
          s25 = arguments[i24];
          for (var p27 in s25)
            if (Object.prototype.hasOwnProperty.call(s25, p27))
              t30[p27] = s25[p27];
        }
        return t30;
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
    __createBinding = Object.create ? function(o23, m25, k17, k22) {
      if (k22 === void 0)
        k22 = k17;
      var desc = Object.getOwnPropertyDescriptor(m25, k17);
      if (!desc || ("get" in desc ? !m25.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m25[k17];
        } };
      }
      Object.defineProperty(o23, k22, desc);
    } : function(o23, m25, k17, k22) {
      if (k22 === void 0)
        k22 = k17;
      o23[k22] = m25[k17];
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
          }, function(e29) {
            return setError(function() {
              return e29;
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
      onError: function(e29) {
        return console.error(e29);
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
            buffer = buffer.filter(function(x20) {
              return x20 !== item;
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
            push: function(x20) {
              return cb(x20);
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
            push: function(x20) {
              pendingQueue.push(x20);
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
    var parse = /* @__PURE__ */ __name(function(x20) {
      return parseInt(x20 || "", 10) || 0;
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
          var _a = getScrollVariables(axis, current), s25 = _a[1], d21 = _a[2];
          if (s25 > d21) {
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
    var deltaCompare = /* @__PURE__ */ __name(function(x20, y15) {
      return x20[0] === y15[0] && x20[1] === y15[1];
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
        var sourceEvent = shouldPreventQueue.current.filter(function(e29) {
          return e29.name === event.type && e29.target === event.target && deltaCompare(e29.delta, delta);
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
          shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e29) {
            return e29 !== event;
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
var require_cjs12 = __commonJS({
  "node_modules/@tamagui/get-font-sized/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var c28 = Object.defineProperty;
    var h18 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var T16 = Object.prototype.hasOwnProperty;
    var v14 = /* @__PURE__ */ __name((e29, o23) => {
      for (var n23 in o23)
        c28(e29, n23, { get: o23[n23], enumerable: true });
    }, "v");
    var E18 = /* @__PURE__ */ __name((e29, o23, n23, i24) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let t30 of b17(o23))
          !T16.call(e29, t30) && t30 !== n23 && c28(e29, t30, { get: () => o23[t30], enumerable: !(i24 = h18(o23, t30)) || i24.enumerable });
      return e29;
    }, "E");
    var N12 = /* @__PURE__ */ __name((e29) => E18(c28({}, "__esModule", { value: true }), e29), "N");
    var D14 = {};
    v14(D14, { getFontSized: () => V15 });
    module2.exports = N12(D14);
    var r32 = require("@tamagui/core-node");
    var V15 = /* @__PURE__ */ __name((e29 = "$true", { fonts: o23, props: n23 }) => {
      var f25, u16, y15;
      const i24 = (0, r32.getVariableValue)(n23.fontFamily) || "$body", t30 = o23[i24] || o23.$body;
      if (!t30)
        return process.env.NODE_ENV === "development" && console.warn("\u26A0\uFE0F no font found", { family: i24, fontTokens: Object.keys(o23), sizeTokenIn: e29 }), {};
      const g17 = t30.family, s25 = e29 === "$true" ? $8(t30) : e29, z14 = n23.fontSize || t30.size[s25], S19 = n23.lineHeight || t30.lineHeight[s25], d21 = n23.fontWeight || t30.weight[s25], k17 = n23.letterSpacing || t30.letterSpacing[s25], m25 = n23.fontStyle || ((f25 = t30.style) == null ? void 0 : f25[s25]), F16 = n23.textTransform || ((u16 = t30.transform) == null ? void 0 : u16[s25]), a19 = { color: n23.color || ((y15 = t30.color) == null ? void 0 : y15[s25]), fontStyle: m25, textTransform: F16, fontFamily: g17, fontWeight: d21, letterSpacing: k17, fontSize: z14, lineHeight: S19 };
      return process.env.NODE_ENV === "development" && n23.debug && (console.groupCollapsed("  \u{1F539} getFontSized", e29, s25), console.log({ style: a19, props: n23, font: t30 }), console.groupEnd()), a19;
    }, "V");
    var l27 = /* @__PURE__ */ new WeakMap();
    function $8(e29) {
      if (typeof e29 == "object" && l27.has(e29))
        return l27.get(e29);
      const o23 = "$true" in e29.size ? e29.size : (0, r32.getTokens)().size, n23 = o23.$true, i24 = n23 ? Object.keys(o23).find((t30) => t30 !== "$true" && o23[t30].val === n23.val) : null;
      return !n23 || !i24 ? (process.env.NODE_ENV === "development" && console.warn(`No default size is set in your tokens for the "true" key, fonts will be inconsistent.

      Fix this by having consistent tokens across fonts and sizes and setting a true key for your size tokens, or
      set true keys for all your font tokens: "size", "lineHeight", "fontStyle", etc.`), Object.keys(e29.size)[3]) : (l27.set(e29, i24), i24);
    }
    __name($8, "$");
  }
});

// node_modules/@tamagui/image/dist/cjs/Image.js
var require_Image = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/Image.js"(exports, module2) {
    "use strict";
    var h18 = Object.defineProperty;
    var f25 = Object.getOwnPropertyDescriptor;
    var u16 = Object.getOwnPropertyNames;
    var I12 = Object.prototype.hasOwnProperty;
    var l27 = /* @__PURE__ */ __name((a19, t30) => {
      for (var e29 in t30)
        h18(a19, e29, { get: t30[e29], enumerable: true });
    }, "l");
    var S19 = /* @__PURE__ */ __name((a19, t30, e29, s25) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let o23 of u16(t30))
          !I12.call(a19, o23) && o23 !== e29 && h18(a19, o23, { get: () => t30[o23], enumerable: !(s25 = f25(t30, o23)) || s25.enumerable });
      return a19;
    }, "S");
    var P17 = /* @__PURE__ */ __name((a19) => S19(h18({}, "__esModule", { value: true }), a19), "P");
    var R17 = {};
    l27(R17, { Image: () => p27 });
    module2.exports = P17(R17);
    var y15 = require("react/jsx-runtime");
    var i24 = require("@tamagui/core-node");
    var m25 = require("react");
    var r32 = require("react-native-web-lite");
    (0, i24.setupReactNative)({ Image: r32.Image });
    var g17 = (0, i24.styled)(r32.Image, { name: "Image", position: "relative", source: { uri: "" }, zIndex: 1 });
    var c28 = false;
    var p27 = g17.extractable((0, m25.forwardRef)((a19, t30) => {
      const e29 = (0, i24.useMediaPropsActive)(a19), { src: s25, source: o23, ...n23 } = e29;
      process.env.NODE_ENV === "development" && typeof s25 == "string" && (typeof e29.width == "string" && e29.width[0] !== "$" || typeof e29.height == "string" && e29.height[0] !== "$") && (c28 || (c28 = true, console.warn('React Native expects a numerical width/height. If you want to use a percent you must define the "source" prop with width, height, and uri.')));
      const d21 = typeof s25 == "string" ? { uri: s25, ...i24.isWeb && { width: e29.width, height: e29.height } } : o23 ?? s25;
      return (0, y15.jsx)(g17, { ref: t30, source: d21, ...n23 });
    }));
    p27.getSize = r32.Image.getSize, p27.getSizeWithHeaders = r32.Image.getSizeWithHeaders, p27.prefetch = r32.Image.prefetch, p27.prefetchWithMetadata = r32.Image.prefetchWithMetadata, p27.abortPrefetch = r32.Image.abortPrefetch, p27.queryCache = r32.Image.queryCache;
  }
});

// node_modules/@tamagui/image/dist/cjs/index.js
var require_cjs13 = __commonJS({
  "node_modules/@tamagui/image/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_Image(), module2.exports);
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
    var k17 = /* @__PURE__ */ __name((n23, e29) => {
      for (var t30 in e29)
        u16(n23, t30, { get: e29[t30], enumerable: true });
    }, "k");
    var T16 = /* @__PURE__ */ __name((n23, e29, t30, f25) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of F16(e29))
          !S19.call(n23, o23) && o23 !== t30 && u16(n23, o23, { get: () => e29[o23], enumerable: !(f25 = a19(e29, o23)) || f25.enumerable });
      return n23;
    }, "T");
    var b17 = /* @__PURE__ */ __name((n23) => T16(u16({}, "__esModule", { value: true }), n23), "b");
    var x20 = {};
    k17(x20, { getFontSize: () => m25, getFontSizeToken: () => c28, getFontSizeVariable: () => z14 });
    module2.exports = b17(x20);
    var s25 = require("@tamagui/core-node");
    var m25 = /* @__PURE__ */ __name((n23, e29) => {
      const t30 = z14(n23, e29);
      return (0, s25.isVariable)(t30) ? +t30.val : t30 ? +t30 : 16;
    }, "m");
    var z14 = /* @__PURE__ */ __name((n23, e29) => {
      const t30 = c28(n23, e29);
      return t30 ? (0, s25.getConfig)().fontsParsed[(e29 == null ? void 0 : e29.font) || "$body"].size[t30] : n23;
    }, "z");
    var c28 = /* @__PURE__ */ __name((n23, e29) => {
      if (typeof n23 == "number")
        return null;
      const t30 = (e29 == null ? void 0 : e29.relativeSize) || 0, o23 = (0, s25.getConfig)().fontsParsed[(e29 == null ? void 0 : e29.font) || "$body"].size, i24 = n23 || ("$true" in o23 ? "$true" : "$4"), r32 = Object.keys(o23);
      let l27 = r32.indexOf(i24);
      l27 === -1 && i24.endsWith(".5") && (l27 = r32.indexOf(i24.replace(".5", ""))), process.env.NODE_ENV === "development" && l27 === -1 && console.warn("No font size found", i24, e29, "in size tokens", r32);
      const d21 = Math.min(Math.max(0, l27 + t30), r32.length - 1);
      return r32[d21] ?? i24;
    }, "c");
  }
});

// node_modules/@tamagui/font-size/dist/cjs/index.js
var require_cjs14 = __commonJS({
  "node_modules/@tamagui/font-size/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_getFontSize(), module2.exports);
  }
});

// node_modules/@tamagui/helpers/dist/cjs/clamp.js
var require_clamp = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/clamp.js"(exports, module2) {
    "use strict";
    var u16 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var c28 = Object.prototype.hasOwnProperty;
    var h18 = /* @__PURE__ */ __name((m25, n23) => {
      for (var r32 in n23)
        u16(m25, r32, { get: n23[r32], enumerable: true });
    }, "h");
    var i24 = /* @__PURE__ */ __name((m25, n23, r32, t30) => {
      if (n23 && typeof n23 == "object" || typeof n23 == "function")
        for (let e29 of b17(n23))
          !c28.call(m25, e29) && e29 !== r32 && u16(m25, e29, { get: () => n23[e29], enumerable: !(t30 = a19(n23, e29)) || t30.enumerable });
      return m25;
    }, "i");
    var o23 = /* @__PURE__ */ __name((m25) => i24(u16({}, "__esModule", { value: true }), m25), "o");
    var x20 = {};
    h18(x20, { clamp: () => p27 });
    module2.exports = o23(x20);
    function p27(m25, [n23, r32]) {
      return Math.min(r32, Math.max(n23, m25));
    }
    __name(p27, "p");
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
    var s25 = /* @__PURE__ */ __name((n23, e29) => {
      for (var t30 in e29)
        E18(n23, t30, { get: e29[t30], enumerable: true });
    }, "s");
    var v14 = /* @__PURE__ */ __name((n23, e29, t30, d21) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let r32 of a19(e29))
          !l27.call(n23, r32) && r32 !== t30 && E18(n23, r32, { get: () => e29[r32], enumerable: !(d21 = u16(e29, r32)) || d21.enumerable });
      return n23;
    }, "v");
    var f25 = /* @__PURE__ */ __name((n23) => v14(E18({}, "__esModule", { value: true }), n23), "f");
    var p27 = {};
    s25(p27, { composeEventHandlers: () => i24 });
    module2.exports = f25(p27);
    function i24(n23, e29, { checkDefaultPrevented: t30 = true } = {}) {
      return !n23 || !e29 ? e29 || n23 : function(r32) {
        if (n23 == null || n23(r32), !r32 || !(t30 && "defaultPrevented" in r32) || "defaultPrevented" in r32 && !r32.defaultPrevented)
          return e29 == null ? void 0 : e29(r32);
      };
    }
    __name(i24, "i");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/concatClassName.js
var require_concatClassName = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/concatClassName.js"(exports, module2) {
    "use strict";
    var x20 = Object.defineProperty;
    var N12 = Object.getOwnPropertyDescriptor;
    var O12 = Object.getOwnPropertyNames;
    var v14 = Object.prototype.hasOwnProperty;
    var I12 = /* @__PURE__ */ __name((s25, n23) => {
      for (var i24 in n23)
        x20(s25, i24, { get: n23[i24], enumerable: true });
    }, "I");
    var K11 = /* @__PURE__ */ __name((s25, n23, i24, t30) => {
      if (n23 && typeof n23 == "object" || typeof n23 == "function")
        for (let r32 of O12(n23))
          !v14.call(s25, r32) && r32 !== i24 && x20(s25, r32, { get: () => n23[r32], enumerable: !(t30 = N12(n23, r32)) || t30.enumerable });
      return s25;
    }, "K");
    var S19 = /* @__PURE__ */ __name((s25) => K11(x20({}, "__esModule", { value: true }), s25), "S");
    var j15 = {};
    I12(j15, { concatClassName: () => _13 });
    module2.exports = S19(j15);
    function _13(s25) {
      const n23 = arguments, i24 = [];
      let t30 = "";
      const r32 = n23.length;
      let l27 = null;
      for (let y15 = r32; y15 >= 0; y15--) {
        const c28 = n23[y15];
        if (!c28)
          continue;
        if (!Array.isArray(c28) && typeof c28 != "string") {
          l27 = l27 || [], l27.push(c28);
          continue;
        }
        const g17 = Array.isArray(c28) ? c28 : c28.split(" "), A20 = g17.length;
        for (let d21 = A20 - 1; d21 >= 0; d21--) {
          const e29 = g17[d21];
          if (!e29 || e29 === " ")
            continue;
          if (e29[0] !== "_") {
            t30 = e29 + " " + t30;
            continue;
          }
          const u16 = e29.indexOf("-");
          if (u16 < 1) {
            t30 = e29 + " " + t30;
            continue;
          }
          const C16 = e29[u16 + 1] === "_", m25 = e29.slice(1, e29.lastIndexOf("-")), a19 = C16 ? e29.slice(u16 + 2, u16 + 7) : null, h18 = a19 ? m25 + a19 : m25;
          if (i24.indexOf(h18) > -1)
            continue;
          i24.push(h18);
          const f25 = m25;
          f25 && l27 && l27.some((o23) => {
            if (a19) {
              const p27 = b17[a19];
              return o23 && o23[p27] && f25 in o23[p27] && o23[p27] !== null;
            }
            return o23 && f25 in o23 && o23[f25] !== null;
          }) || (t30 = e29 + " " + t30);
        }
      }
      return t30;
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
    var f25 = Object.getOwnPropertyNames;
    var g17 = Object.prototype.hasOwnProperty;
    var h18 = /* @__PURE__ */ __name((t30, e29) => {
      for (var o23 in e29)
        u16(t30, o23, { get: e29[o23], enumerable: true });
    }, "h");
    var x20 = /* @__PURE__ */ __name((t30, e29, o23, a19) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let r32 of f25(e29))
          !g17.call(t30, r32) && r32 !== o23 && u16(t30, r32, { get: () => e29[r32], enumerable: !(a19 = b17(e29, r32)) || a19.enumerable });
      return t30;
    }, "x");
    var S19 = /* @__PURE__ */ __name((t30) => x20(u16({}, "__esModule", { value: true }), t30), "S");
    var w23 = {};
    h18(w23, { stylePropsAll: () => m25, stylePropsFont: () => l27, stylePropsText: () => p27, stylePropsTextOnly: () => s25, stylePropsTransform: () => d21, stylePropsView: () => i24, validPseudoKeys: () => c28, validStyles: () => y15, validStylesOnBaseProps: () => n23 });
    module2.exports = S19(w23);
    var d21 = Object.freeze({ x: true, y: true, scale: true, perspective: true, scaleX: true, scaleY: true, skewX: true, skewY: true, matrix: true, rotate: true, rotateY: true, rotateX: true, rotateZ: true });
    var n23 = Object.freeze({ placeholderTextColor: true });
    var i24 = Object.freeze({ backfaceVisibility: true, backgroundColor: true, borderBottomColor: true, borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderBottomWidth: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderLeftWidth: true, borderRadius: true, borderRightColor: true, borderRightWidth: true, borderStartColor: true, borderStyle: true, borderTopColor: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true, borderTopWidth: true, borderWidth: true, opacity: true, transform: true, alignContent: true, alignItems: true, alignSelf: true, aspectRatio: true, borderEndWidth: true, borderStartWidth: true, bottom: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, columnGap: true, rowGap: true, height: true, justifyContent: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, start: true, top: true, width: true, zIndex: true, direction: true, shadowColor: true, shadowOffset: true, shadowOpacity: true, shadowRadius: true, ...n23, ...d21, ...process.env.TAMAGUI_TARGET === "web" && { borderBottomStyle: true, borderTopStyle: true, borderLeftStyle: true, borderRightStyle: true, overflowX: true, overflowY: true, userSelect: true, cursor: true, contain: true, pointerEvents: true, boxSizing: true, boxShadow: true, outlineColor: true, outlineStyle: true, outlineOffset: true, outlineWidth: true } });
    var l27 = Object.freeze({ fontFamily: true, fontSize: true, fontStyle: true, fontWeight: true, letterSpacing: true, lineHeight: true, textTransform: true });
    var s25 = Object.freeze({ color: true, ...l27, textAlign: true, textDecorationLine: true, textDecorationStyle: true, textDecorationColor: true, textShadowColor: true, textShadowOffset: true, textShadowRadius: true, ...process.env.TAMAGUI_TARGET === "web" && { whiteSpace: true, wordWrap: true, textOverflow: true, textDecorationDistance: true, userSelect: true, selectable: true, cursor: true, WebkitLineClamp: true, WebkitBoxOrient: true } });
    var p27 = Object.freeze({ ...i24, ...s25 });
    var m25 = p27;
    var c28 = Object.freeze({ enterStyle: true, exitStyle: true, hoverStyle: true, pressStyle: true, focusStyle: true });
    var y15 = Object.freeze({ ...c28, ...i24 });
  }
});

// node_modules/@tamagui/helpers/dist/cjs/types.js
var require_types = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/types.js"(exports, module2) {
    "use strict";
    var p27 = Object.defineProperty;
    var l27 = Object.getOwnPropertyDescriptor;
    var o23 = Object.getOwnPropertyNames;
    var y15 = Object.prototype.hasOwnProperty;
    var c28 = /* @__PURE__ */ __name((t30, e29, s25, i24) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let r32 of o23(e29))
          !y15.call(t30, r32) && r32 !== s25 && p27(t30, r32, { get: () => e29[r32], enumerable: !(i24 = l27(e29, r32)) || i24.enumerable });
      return t30;
    }, "c");
    var n23 = /* @__PURE__ */ __name((t30) => c28(p27({}, "__esModule", { value: true }), t30), "n");
    var u16 = {};
    module2.exports = n23(u16);
  }
});

// node_modules/@tamagui/simple-hash/dist/cjs/index.js
var require_cjs15 = __commonJS({
  "node_modules/@tamagui/simple-hash/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var s25 = Object.defineProperty;
    var f25 = Object.getOwnPropertyDescriptor;
    var u16 = Object.getOwnPropertyNames;
    var C16 = Object.prototype.hasOwnProperty;
    var g17 = /* @__PURE__ */ __name((t30, r32) => {
      for (var n23 in r32)
        s25(t30, n23, { get: r32[n23], enumerable: true });
    }, "g");
    var o23 = /* @__PURE__ */ __name((t30, r32, n23, e29) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let i24 of u16(r32))
          !C16.call(t30, i24) && i24 !== n23 && s25(t30, i24, { get: () => r32[i24], enumerable: !(e29 = f25(r32, i24)) || e29.enumerable });
      return t30;
    }, "o");
    var p27 = /* @__PURE__ */ __name((t30) => o23(s25({}, "__esModule", { value: true }), t30), "p");
    var m25 = {};
    g17(m25, { isValidCSSCharCode: () => h18, simpleHash: () => S19 });
    module2.exports = p27(m25);
    var S19 = /* @__PURE__ */ __name((t30, r32 = 10) => {
      let n23 = 0, e29 = "";
      const i24 = t30.length;
      for (let l27 = 0; l27 < i24; l27++) {
        const a19 = t30.charCodeAt(l27);
        a19 === 46 && (e29 += "d0t"), h18(a19) && i24 <= r32 ? e29 += t30[l27] : (n23 = (n23 << 5) - n23 + a19, n23 &= n23);
      }
      return e29 + (n23 ? new Uint32Array([n23])[0].toString(36) : "");
    }, "S");
    function h18(t30) {
      return t30 >= 65 && t30 <= 90 || t30 >= 97 && t30 <= 122 || t30 === 95 || t30 === 45 || t30 >= 48 && t30 <= 57;
    }
    __name(h18, "h");
  }
});

// node_modules/@tamagui/helpers/dist/cjs/index.js
var require_cjs16 = __commonJS({
  "node_modules/@tamagui/helpers/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((f25, e29, p27, x20) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let m25 of c28(e29))
          !d21.call(f25, m25) && m25 !== p27 && a19(f25, m25, { get: () => e29[m25], enumerable: !(x20 = b17(e29, m25)) || x20.enumerable });
      return f25;
    }, "t");
    var r32 = /* @__PURE__ */ __name((f25, e29, p27) => (t30(f25, e29, "default"), p27 && t30(p27, e29, "default")), "r");
    var g17 = /* @__PURE__ */ __name((f25) => t30(a19({}, "__esModule", { value: true }), f25), "g");
    var o23 = {};
    module2.exports = g17(o23);
    r32(o23, require_clamp(), module2.exports);
    r32(o23, require_composeEventHandlers(), module2.exports);
    r32(o23, require_concatClassName(), module2.exports);
    r32(o23, require_validStyleProps(), module2.exports);
    r32(o23, require_types(), module2.exports);
    r32(o23, require_cjs15(), module2.exports);
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js
var require_prevent = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/prevent.js"(exports, module2) {
    "use strict";
    var n23 = Object.defineProperty;
    var a19 = Object.getOwnPropertyDescriptor;
    var s25 = Object.getOwnPropertyNames;
    var v14 = Object.prototype.hasOwnProperty;
    var c28 = /* @__PURE__ */ __name((t30, e29) => {
      for (var p27 in e29)
        n23(t30, p27, { get: e29[p27], enumerable: true });
    }, "c");
    var f25 = /* @__PURE__ */ __name((t30, e29, p27, r32) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of s25(e29))
          !v14.call(t30, o23) && o23 !== p27 && n23(t30, o23, { get: () => e29[o23], enumerable: !(r32 = a19(e29, o23)) || r32.enumerable });
      return t30;
    }, "f");
    var g17 = /* @__PURE__ */ __name((t30) => f25(n23({}, "__esModule", { value: true }), t30), "g");
    var l27 = {};
    c28(l27, { prevent: () => i24 });
    module2.exports = g17(l27);
    var i24 = /* @__PURE__ */ __name((t30) => [t30.preventDefault(), t30.stopPropagation()], "i");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js
var require_getSpace = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/getSpace.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var p27 = Object.getOwnPropertyDescriptor;
    var r32 = Object.getOwnPropertyNames;
    var k17 = Object.prototype.hasOwnProperty;
    var S19 = /* @__PURE__ */ __name((s25, e29) => {
      for (var t30 in e29)
        a19(s25, t30, { get: e29[t30], enumerable: true });
    }, "S");
    var i24 = /* @__PURE__ */ __name((s25, e29, t30, c28) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let n23 of r32(e29))
          !k17.call(s25, n23) && n23 !== t30 && a19(s25, n23, { get: () => e29[n23], enumerable: !(c28 = p27(e29, n23)) || c28.enumerable });
      return s25;
    }, "i");
    var m25 = /* @__PURE__ */ __name((s25) => i24(a19({}, "__esModule", { value: true }), s25), "m");
    var T16 = {};
    S19(T16, { getSpace: () => u16 });
    module2.exports = m25(T16);
    var o23 = require("@tamagui/core-node");
    var u16 = /* @__PURE__ */ __name((s25, e29 = 0) => {
      const t30 = (0, o23.getTokens)().space, c28 = Object.keys(t30), n23 = c28[Math.max(0, c28.indexOf(String(s25 || "$true")) + e29)];
      return t30[n23] || t30.$true;
    }, "u");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js
var require_useCurrentColor = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useCurrentColor.js"(exports, module2) {
    "use strict";
    var l27 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var p27 = Object.getOwnPropertyNames;
    var s25 = Object.prototype.hasOwnProperty;
    var m25 = /* @__PURE__ */ __name((o23, e29) => {
      for (var t30 in e29)
        l27(o23, t30, { get: e29[t30], enumerable: true });
    }, "m");
    var C16 = /* @__PURE__ */ __name((o23, e29, t30, a19) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let r32 of p27(e29))
          !s25.call(o23, r32) && r32 !== t30 && l27(o23, r32, { get: () => e29[r32], enumerable: !(a19 = i24(e29, r32)) || a19.enumerable });
      return o23;
    }, "C");
    var T16 = /* @__PURE__ */ __name((o23) => C16(l27({}, "__esModule", { value: true }), o23), "T");
    var u16 = {};
    m25(u16, { useCurrentColor: () => b17 });
    module2.exports = T16(u16);
    var n23 = require("@tamagui/core-node");
    var b17 = /* @__PURE__ */ __name((o23) => {
      const e29 = (0, n23.useTheme)();
      return (0, n23.variableToString)(e29[o23] || o23 || e29.color);
    }, "b");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js
var require_useGetThemedIcon = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/useGetThemedIcon.js"(exports, module2) {
    "use strict";
    var m25 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var s25 = Object.prototype.hasOwnProperty;
    var f25 = /* @__PURE__ */ __name((r32, e29) => {
      for (var o23 in e29)
        m25(r32, o23, { get: e29[o23], enumerable: true });
    }, "f");
    var C16 = /* @__PURE__ */ __name((r32, e29, o23, c28) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let n23 of l27(e29))
          !s25.call(r32, n23) && n23 !== o23 && m25(r32, n23, { get: () => e29[n23], enumerable: !(c28 = i24(e29, n23)) || c28.enumerable });
      return r32;
    }, "C");
    var a19 = /* @__PURE__ */ __name((r32) => C16(m25({}, "__esModule", { value: true }), r32), "a");
    var E18 = {};
    f25(E18, { useGetThemedIcon: () => p27 });
    module2.exports = a19(E18);
    var t30 = require("react");
    var u16 = require_useCurrentColor();
    var p27 = /* @__PURE__ */ __name((r32) => {
      const e29 = (0, u16.useCurrentColor)(r32.color);
      return (o23) => o23 && ((0, t30.isValidElement)(o23) ? (0, t30.cloneElement)(o23, { ...r32, ...o23.props }) : (0, t30.createElement)(o23, r32));
    }, "p");
  }
});

// node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js
var require_cjs17 = __commonJS({
  "node_modules/@tamagui/helpers-tamagui/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((f25, e29, p27, x20) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let m25 of c28(e29))
          !d21.call(f25, m25) && m25 !== p27 && a19(f25, m25, { get: () => e29[m25], enumerable: !(x20 = b17(e29, m25)) || x20.enumerable });
      return f25;
    }, "t");
    var r32 = /* @__PURE__ */ __name((f25, e29, p27) => (t30(f25, e29, "default"), p27 && t30(p27, e29, "default")), "r");
    var g17 = /* @__PURE__ */ __name((f25) => t30(a19({}, "__esModule", { value: true }), f25), "g");
    var o23 = {};
    module2.exports = g17(o23);
    r32(o23, require_cjs16(), module2.exports);
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
    var g17 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var b17 = Object.getPrototypeOf;
    var h18 = Object.prototype.hasOwnProperty;
    var _13 = /* @__PURE__ */ __name((e29, t30) => {
      for (var n23 in t30)
        S19(e29, n23, { get: t30[n23], enumerable: true });
    }, "_");
    var T16 = /* @__PURE__ */ __name((e29, t30, n23, a19) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let r32 of m25(t30))
          !h18.call(e29, r32) && r32 !== n23 && S19(e29, r32, { get: () => t30[r32], enumerable: !(a19 = g17(t30, r32)) || a19.enumerable });
      return e29;
    }, "T");
    var $8 = /* @__PURE__ */ __name((e29, t30, n23) => (n23 = e29 != null ? V15(b17(e29)) : {}, T16(t30 || !e29 || !e29.__esModule ? S19(n23, "default", { value: e29, enumerable: true }) : n23, e29)), "$");
    var w23 = /* @__PURE__ */ __name((e29) => T16(S19({}, "__esModule", { value: true }), e29), "w");
    var N12 = {};
    _13(N12, { createContext: () => k17, createContextScope: () => R17 });
    module2.exports = w23(N12);
    var P17 = require("react/jsx-runtime");
    var p27 = $8(require("react"));
    function k17(e29, t30) {
      const n23 = p27.createContext(t30);
      function a19(s25) {
        const { children: o23, ...c28 } = s25, u16 = p27.useMemo(() => c28, Object.values(c28));
        return (0, P17.jsx)(n23.Provider, { value: u16, children: o23 });
      }
      __name(a19, "a");
      function r32(s25) {
        const o23 = p27.useContext(n23);
        if (o23)
          return o23;
        if (t30 !== void 0)
          return t30;
        throw new Error(`\`${s25}\` must be used within \`${e29}\``);
      }
      __name(r32, "r");
      return a19.displayName = `${e29}Provider`, [a19, r32];
    }
    __name(k17, "k");
    function R17(e29, t30 = []) {
      let n23 = [];
      function a19(s25, o23) {
        const c28 = p27.createContext(o23), u16 = n23.length;
        n23 = [...n23, o23];
        function d21(l27) {
          const { scope: x20, children: i24, ...C16 } = l27, f25 = (x20 == null ? void 0 : x20[e29][u16]) || c28, y15 = p27.useMemo(() => C16, Object.values(C16));
          return (0, P17.jsx)(f25.Provider, { value: y15, children: i24 });
        }
        __name(d21, "d");
        function v14(l27, x20, i24) {
          const C16 = (x20 == null ? void 0 : x20[e29][u16]) || c28, f25 = p27.useContext(C16);
          if (f25)
            return f25;
          if (o23 !== void 0)
            return o23;
          const y15 = `\`${l27}\` must be used within \`${s25}\``;
          if (i24 != null && i24.fallback)
            return (i24 == null ? void 0 : i24.warn) !== false && console.warn(y15), i24.fallback;
          throw new Error(y15);
        }
        __name(v14, "v");
        return d21.displayName = `${s25}Provider`, [d21, v14];
      }
      __name(a19, "a");
      const r32 = /* @__PURE__ */ __name(() => {
        const s25 = n23.map((o23) => p27.createContext(o23));
        return function(c28) {
          const u16 = (c28 == null ? void 0 : c28[e29]) || s25;
          return p27.useMemo(() => ({ [`__scope${e29}`]: { ...c28, [e29]: u16 } }), [c28, u16]);
        };
      }, "r");
      return r32.scopeName = e29, [a19, M17(r32, ...t30)];
    }
    __name(R17, "R");
    function M17(...e29) {
      const t30 = e29[0];
      if (e29.length === 1)
        return t30;
      const n23 = /* @__PURE__ */ __name(() => {
        const a19 = e29.map((r32) => ({ useScope: r32(), scopeName: r32.scopeName }));
        return function(s25) {
          const o23 = a19.reduce((c28, { useScope: u16, scopeName: d21 }) => {
            const l27 = u16(s25)[`__scope${d21}`];
            return { ...c28, ...l27 };
          }, {});
          return p27.useMemo(() => ({ [`__scope${t30.scopeName}`]: o23 }), [o23]);
        };
      }, "n");
      return n23.scopeName = t30.scopeName, n23;
    }
    __name(M17, "M");
  }
});

// node_modules/@tamagui/create-context/dist/cjs/index.js
var require_cjs18 = __commonJS({
  "node_modules/@tamagui/create-context/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_create_context(), module2.exports);
  }
});

// node_modules/@tamagui/stacks/dist/cjs/getElevation.js
var require_getElevation = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/getElevation.js"(exports, module2) {
    "use strict";
    var s25 = Object.defineProperty;
    var l27 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var h18 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((e29, o23) => {
      for (var n23 in o23)
        s25(e29, n23, { get: o23[n23], enumerable: true });
    }, "p");
    var S19 = /* @__PURE__ */ __name((e29, o23, n23, t30) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let a19 of c28(o23))
          !h18.call(e29, a19) && a19 !== n23 && s25(e29, a19, { get: () => o23[a19], enumerable: !(t30 = l27(o23, a19)) || t30.enumerable });
      return e29;
    }, "S");
    var f25 = /* @__PURE__ */ __name((e29) => S19(s25({}, "__esModule", { value: true }), e29), "f");
    var m25 = {};
    p27(m25, { getElevation: () => w23, getSizedElevation: () => d21 });
    module2.exports = f25(m25);
    var r32 = require("@tamagui/core-node");
    var w23 = /* @__PURE__ */ __name((e29, o23) => {
      if (!e29)
        return;
      const { tokens: n23 } = o23, t30 = n23.size[e29], a19 = (0, r32.isVariable)(t30) ? +t30.val : e29;
      return d21(a19, o23);
    }, "w");
    var d21 = /* @__PURE__ */ __name((e29, { theme: o23, tokens: n23 }) => {
      let t30 = 0;
      if (e29 === true) {
        const i24 = (0, r32.getVariableValue)(n23.size.true);
        typeof i24 == "number" ? t30 = i24 : t30 = 10;
      } else
        t30 = +e29;
      process.env.NODE_ENV === "development" && t30 !== null && isNaN(t30) && console.warn("NaN shadow", t30, e29);
      const [a19, u16] = [Math.round(t30 / 4 + 1), Math.round(t30 / 2 + 2)];
      return { shadowColor: o23.shadowColor, shadowRadius: u16, shadowOffset: { height: a19, width: 0 } };
    }, "d");
  }
});

// node_modules/@tamagui/stacks/dist/cjs/Stacks.js
var require_Stacks = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/Stacks.js"(exports, module2) {
    "use strict";
    var c28 = Object.defineProperty;
    var S19 = Object.getOwnPropertyDescriptor;
    var k17 = Object.getOwnPropertyNames;
    var m25 = Object.prototype.hasOwnProperty;
    var x20 = /* @__PURE__ */ __name((e29, t30) => {
      for (var a19 in t30)
        c28(e29, a19, { get: t30[a19], enumerable: true });
    }, "x");
    var f25 = /* @__PURE__ */ __name((e29, t30, a19, s25) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let r32 of k17(t30))
          !m25.call(e29, r32) && r32 !== a19 && c28(e29, r32, { get: () => t30[r32], enumerable: !(s25 = S19(t30, r32)) || s25.enumerable });
      return e29;
    }, "f");
    var u16 = /* @__PURE__ */ __name((e29) => f25(c28({}, "__esModule", { value: true }), e29), "u");
    var Y11 = {};
    x20(Y11, { XStack: () => P17, YStack: () => l27, ZStack: () => y15, fullscreenStyle: () => i24 });
    module2.exports = u16(Y11);
    var o23 = require("@tamagui/core-node");
    var n23 = require_getElevation();
    var i24 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
    var p27 = { fullscreen: { true: i24 }, elevation: { "...size": n23.getElevation } };
    var l27 = (0, o23.styled)(o23.Stack, { flexDirection: "column", name: "YStack", variants: p27 });
    var P17 = (0, o23.styled)(o23.Stack, { flexDirection: "row", name: "XStack", variants: p27 });
    var y15 = (0, o23.styled)(l27, { name: "ZStack", position: "relative" }, { neverFlatten: true, isZStack: true });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/variants.js
var require_variants = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/variants.js"(exports, module2) {
    "use strict";
    var d21 = Object.defineProperty;
    var n23 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var c28 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((o23, r32) => {
      for (var t30 in r32)
        d21(o23, t30, { get: r32[t30], enumerable: true });
    }, "b");
    var i24 = /* @__PURE__ */ __name((o23, r32, t30, e29) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let s25 of l27(r32))
          !c28.call(o23, s25) && s25 !== t30 && d21(o23, s25, { get: () => r32[s25], enumerable: !(e29 = n23(r32, s25)) || e29.enumerable });
      return o23;
    }, "i");
    var a19 = /* @__PURE__ */ __name((o23) => i24(d21({}, "__esModule", { value: true }), o23), "a");
    var k17 = {};
    b17(k17, { bordered: () => h18, circular: () => g17, elevate: () => p27, focusTheme: () => x20, hoverTheme: () => $8, padded: () => C16, pressTheme: () => f25, radiused: () => m25 });
    module2.exports = a19(k17);
    var u16 = require_getElevation();
    var p27 = { true: (o23, r32) => (0, u16.getElevation)(r32.props.size, r32) };
    var h18 = /* @__PURE__ */ __name((o23, { props: r32 }) => ({ borderWidth: typeof o23 == "number" ? o23 : 1, borderColor: "$borderColor", ...r32.hoverTheme && { hoverStyle: { borderColor: "$borderColorHover" } }, ...r32.pressTheme && { pressStyle: { borderColor: "$borderColorPress" } }, ...r32.focusTheme && { focusStyle: { borderColor: "$borderColorFocus" } } }), "h");
    var C16 = { true: (o23, r32) => {
      const { tokens: t30, props: e29 } = r32;
      return { padding: t30.space[e29.size] || t30.space.$true };
    } };
    var m25 = { true: (o23, r32) => {
      const { tokens: t30, props: e29 } = r32;
      return { borderRadius: t30.radius[e29.size] || t30.radius.$true };
    } };
    var g17 = { true: (o23, { props: r32, tokens: t30 }) => {
      const e29 = t30.size[r32.size];
      return { width: e29, height: e29, maxWidth: e29, maxHeight: e29, minWidth: e29, minHeight: e29, borderRadius: 1e5, padding: 0 };
    } };
    var $8 = { true: { hoverStyle: { backgroundColor: "$backgroundHover", borderColor: "$borderColorHover" } }, false: {} };
    var f25 = { true: { cursor: "pointer", pressStyle: { backgroundColor: "$backgroundPress", borderColor: "$borderColorPress" } }, false: {} };
    var x20 = { true: { focusStyle: { backgroundColor: "$backgroundFocus", borderColor: "$borderColorFocus" } }, false: {} };
  }
});

// node_modules/@tamagui/stacks/dist/cjs/SizableStack.js
var require_SizableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/SizableStack.js"(exports, module2) {
    "use strict";
    var s25 = Object.defineProperty;
    var i24 = Object.getOwnPropertyDescriptor;
    var p27 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var d21 = /* @__PURE__ */ __name((o23, r32) => {
      for (var a19 in r32)
        s25(o23, a19, { get: r32[a19], enumerable: true });
    }, "d");
    var h18 = /* @__PURE__ */ __name((o23, r32, a19, l27) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let t30 of p27(r32))
          !S19.call(o23, t30) && t30 !== a19 && s25(o23, t30, { get: () => r32[t30], enumerable: !(l27 = i24(r32, t30)) || l27.enumerable });
      return o23;
    }, "h");
    var k17 = /* @__PURE__ */ __name((o23) => h18(s25({}, "__esModule", { value: true }), o23), "k");
    var b17 = {};
    d21(b17, { SizableStack: () => n23 });
    module2.exports = k17(b17);
    var m25 = require("@tamagui/core-node");
    var c28 = require_cjs11();
    var f25 = require_Stacks();
    var e29 = require_variants();
    var n23 = (0, m25.styled)(f25.XStack, { name: "SizableStack", variants: { unstyled: { true: { hoverTheme: false, pressTheme: false, focusTheme: false, elevate: false, bordered: false }, false: { backgroundColor: "$background", flexShrink: 1 } }, hoverTheme: e29.hoverTheme, pressTheme: e29.pressTheme, focusTheme: e29.focusTheme, circular: e29.circular, elevate: e29.elevate, bordered: e29.bordered, size: { "...size": c28.getButtonSized } } });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js
var require_ThemeableStack = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/ThemeableStack.js"(exports, module2) {
    "use strict";
    var l27 = Object.defineProperty;
    var d21 = Object.getOwnPropertyDescriptor;
    var m25 = Object.getOwnPropertyNames;
    var u16 = Object.prototype.hasOwnProperty;
    var b17 = /* @__PURE__ */ __name((o23, r32) => {
      for (var s25 in r32)
        l27(o23, s25, { get: r32[s25], enumerable: true });
    }, "b");
    var h18 = /* @__PURE__ */ __name((o23, r32, s25, n23) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let t30 of m25(r32))
          !u16.call(o23, t30) && t30 !== s25 && l27(o23, t30, { get: () => r32[t30], enumerable: !(n23 = d21(r32, t30)) || n23.enumerable });
      return o23;
    }, "h");
    var k17 = /* @__PURE__ */ __name((o23) => h18(l27({}, "__esModule", { value: true }), o23), "k");
    var i24 = {};
    b17(i24, { ThemeableStack: () => S19 });
    module2.exports = k17(i24);
    var c28 = require("@tamagui/core-node");
    var p27 = require_Stacks();
    var e29 = require_variants();
    var a19 = { backgroundColor: "transparent", borderColor: "transparent", shadowColor: "transparent" };
    var S19 = (0, c28.styled)(p27.YStack, { name: "SizableStack", variants: { backgrounded: { true: { backgroundColor: "$background" } }, radiused: e29.radiused, hoverTheme: e29.hoverTheme, pressTheme: e29.pressTheme, focusTheme: e29.focusTheme, circular: e29.circular, padded: e29.padded, elevate: e29.elevate, bordered: e29.bordered, transparent: { true: { backgroundColor: "transparent" } }, chromeless: { true: a19, all: { ...a19, hoverStyle: a19, pressStyle: a19, focusStyle: a19 } } } });
  }
});

// node_modules/@tamagui/stacks/dist/cjs/index.js
var require_cjs19 = __commonJS({
  "node_modules/@tamagui/stacks/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((f25, r32, p27, x20) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let m25 of c28(r32))
          !d21.call(f25, m25) && m25 !== p27 && a19(f25, m25, { get: () => r32[m25], enumerable: !(x20 = b17(r32, m25)) || x20.enumerable });
      return f25;
    }, "t");
    var e29 = /* @__PURE__ */ __name((f25, r32, p27) => (t30(f25, r32, "default"), p27 && t30(p27, r32, "default")), "e");
    var g17 = /* @__PURE__ */ __name((f25) => t30(a19({}, "__esModule", { value: true }), f25), "g");
    var o23 = {};
    module2.exports = g17(o23);
    e29(o23, require_Stacks(), module2.exports);
    e29(o23, require_SizableStack(), module2.exports);
    e29(o23, require_ThemeableStack(), module2.exports);
  }
});

// node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js
var require_useControllableState = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/useControllableState.js"(exports, module2) {
    "use strict";
    var l27 = Object.defineProperty;
    var m25 = Object.getOwnPropertyDescriptor;
    var R17 = Object.getOwnPropertyNames;
    var g17 = Object.prototype.hasOwnProperty;
    var v14 = /* @__PURE__ */ __name((t30, e29) => {
      for (var s25 in e29)
        l27(t30, s25, { get: e29[s25], enumerable: true });
    }, "v");
    var y15 = /* @__PURE__ */ __name((t30, e29, s25, r32) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of R17(e29))
          !g17.call(t30, o23) && o23 !== s25 && l27(t30, o23, { get: () => e29[o23], enumerable: !(r32 = m25(e29, o23)) || r32.enumerable });
      return t30;
    }, "y");
    var w23 = /* @__PURE__ */ __name((t30) => y15(l27({}, "__esModule", { value: true }), t30), "w");
    var E18 = {};
    v14(E18, { useControllableState: () => A20 });
    module2.exports = w23(E18);
    var T16 = require_cjs8();
    var n23 = require("react");
    var F16 = /* @__PURE__ */ __name((t30) => t30(), "F");
    function A20({ prop: t30, defaultProp: e29, onChange: s25, strategy: r32 = "prop-wins", preventUpdate: o23, transition: C16 }) {
      const [a19, d21] = (0, n23.useState)(t30 ?? e29), i24 = (0, n23.useRef)(a19), c28 = r32 === "prop-wins" && t30 !== void 0, b17 = c28 ? t30 : a19, f25 = (0, T16.useEvent)(s25 || D14), p27 = C16 ? n23.startTransition : F16;
      (0, n23.useEffect)(() => {
        t30 !== void 0 && (i24.current = t30, p27(() => {
          d21(t30);
        }));
      }, [t30]), (0, n23.useEffect)(() => {
        c28 || a19 !== i24.current && (i24.current = a19, f25(a19));
      }, [f25, a19, c28]);
      const S19 = (0, T16.useEvent)((u16) => {
        if (!o23)
          if (c28) {
            const h18 = typeof u16 == "function" ? u16(i24.current) : u16;
            f25(h18);
          } else
            p27(() => {
              d21(u16);
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
var require_cjs20 = __commonJS({
  "node_modules/@tamagui/use-controllable-state/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_useControllableState(), module2.exports);
  }
});

// node_modules/performant-array-to-tree/build/arrayToTree.min.js
var require_arrayToTree_min = __commonJS({
  "node_modules/performant-array-to-tree/build/arrayToTree.min.js"(exports) {
    "use strict";
    var __assign2 = exports && exports.__assign || function() {
      return (__assign2 = Object.assign || function(e29) {
        for (var r32, t30 = 1, n23 = arguments.length; t30 < n23; t30++)
          for (var o23 in r32 = arguments[t30])
            Object.prototype.hasOwnProperty.call(r32, o23) && (e29[o23] = r32[o23]);
        return e29;
      }).apply(this, arguments);
    };
    var defaultConfig = (Object.defineProperty(exports, "__esModule", { value: true }), { id: "id", parentId: "parentId", dataField: "data", childrenField: "children", throwIfOrphans: false, rootParentIds: { "": !(exports.countNodes = exports.arrayToTree = void 0) }, nestedIds: true, assign: false });
    function arrayToTree(c28, e29) {
      void 0 === e29 && (e29 = {});
      for (var r32, t30 = __assign2(__assign2({}, defaultConfig), e29), n23 = [], o23 = {}, a19 = t30.throwIfOrphans ? /* @__PURE__ */ new Set() : null, s25 = 0, h18 = c28; s25 < h18.length; s25++) {
        var i24 = h18[s25], d21 = t30.nestedIds ? getNestedProperty(i24, t30.id) : i24[t30.id], l27 = t30.nestedIds ? getNestedProperty(i24, t30.parentId) : i24[t30.parentId];
        if (t30.rootParentIds[d21])
          throw new Error("The item array contains a node whose parentId both exists in another node and is in " + '`rootParentIds` (`itemId`: "'.concat(d21, '", `rootParentIds`: ').concat(Object.keys(t30.rootParentIds).map(function(e30) {
            return '"'.concat(e30, '"');
          }).join(", "), ")."));
        Object.prototype.hasOwnProperty.call(o23, d21) || (o23[d21] = ((r32 = {})[t30.childrenField] = [], r32)), a19 && a19.delete(d21), t30.dataField ? o23[d21][t30.dataField] = i24 : t30.assign ? o23[d21] = Object.assign(i24, ((r32 = {})[t30.childrenField] = o23[d21][t30.childrenField], r32)) : o23[d21] = __assign2(__assign2({}, i24), ((i24 = {})[t30.childrenField] = o23[d21][t30.childrenField], i24));
        i24 = o23[d21];
        null == l27 || t30.rootParentIds[l27] ? n23.push(i24) : (Object.prototype.hasOwnProperty.call(o23, l27) || (o23[l27] = ((d21 = {})[t30.childrenField] = [], d21), a19 && a19.add(l27)), o23[l27][t30.childrenField].push(i24));
      }
      if (null != a19 && a19.size)
        throw new Error("The items array contains orphans that point to the following parentIds: " + "[".concat(Array.from(a19), "]. These parentIds do not exist in the items array. Hint: prevent orphans to result ") + "in an error by passing the following option: { throwIfOrphans: false }");
      if (t30.throwIfOrphans && countNodes(n23, t30.childrenField) < Object.keys(o23).length)
        throw new Error("The items array contains nodes with a circular parent/child relationship.");
      return n23;
    }
    __name(arrayToTree, "arrayToTree");
    function countNodes(e29, t30) {
      return e29.reduce(function(e30, r32) {
        return e30 + 1 + (r32[t30] && countNodes(r32[t30], t30));
      }, 0);
    }
    __name(countNodes, "countNodes");
    function getNestedProperty(e29, r32) {
      return r32.split(".").reduce(function(e30, r33) {
        return e30 && e30[r33];
      }, e29);
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
    var e29 = require("react");
    function h18(a19, b17) {
      return a19 === b17 && (0 !== a19 || 1 / a19 === 1 / b17) || a19 !== a19 && b17 !== b17;
    }
    __name(h18, "h");
    var k17 = "function" === typeof Object.is ? Object.is : h18;
    var l27 = e29.useState;
    var m25 = e29.useEffect;
    var n23 = e29.useLayoutEffect;
    var p27 = e29.useDebugValue;
    function q13(a19, b17) {
      var d21 = b17(), f25 = l27({ inst: { value: d21, getSnapshot: b17 } }), c28 = f25[0].inst, g17 = f25[1];
      n23(function() {
        c28.value = d21;
        c28.getSnapshot = b17;
        r32(c28) && g17({ inst: c28 });
      }, [a19, d21, b17]);
      m25(function() {
        r32(c28) && g17({ inst: c28 });
        return a19(function() {
          r32(c28) && g17({ inst: c28 });
        });
      }, [a19]);
      p27(d21);
      return d21;
    }
    __name(q13, "q");
    function r32(a19) {
      var b17 = a19.getSnapshot;
      a19 = a19.value;
      try {
        var d21 = b17();
        return !k17(a19, d21);
      } catch (f25) {
        return true;
      }
    }
    __name(r32, "r");
    function t30(a19, b17) {
      return b17();
    }
    __name(t30, "t");
    var u16 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t30 : q13;
    exports.useSyncExternalStore = void 0 !== e29.useSyncExternalStore ? e29.useSyncExternalStore : u16;
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
        function is(x20, y15) {
          return x20 === y15 && (x20 !== 0 || 1 / x20 === 1 / y15) || x20 !== x20 && y15 !== y15;
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
    var h18 = require("react");
    var n23 = require_shim();
    function p27(a19, b17) {
      return a19 === b17 && (0 !== a19 || 1 / a19 === 1 / b17) || a19 !== a19 && b17 !== b17;
    }
    __name(p27, "p");
    var q13 = "function" === typeof Object.is ? Object.is : p27;
    var r32 = n23.useSyncExternalStore;
    var t30 = h18.useRef;
    var u16 = h18.useEffect;
    var v14 = h18.useMemo;
    var w23 = h18.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(a19, b17, e29, l27, g17) {
      var c28 = t30(null);
      if (null === c28.current) {
        var f25 = { hasValue: false, value: null };
        c28.current = f25;
      } else
        f25 = c28.current;
      c28 = v14(function() {
        function a20(a21) {
          if (!c29) {
            c29 = true;
            d22 = a21;
            a21 = l27(a21);
            if (void 0 !== g17 && f25.hasValue) {
              var b18 = f25.value;
              if (g17(b18, a21))
                return k17 = b18;
            }
            return k17 = a21;
          }
          b18 = k17;
          if (q13(d22, a21))
            return b18;
          var e30 = l27(a21);
          if (void 0 !== g17 && g17(b18, e30))
            return b18;
          d22 = a21;
          return k17 = e30;
        }
        __name(a20, "a");
        var c29 = false, d22, k17, m25 = void 0 === e29 ? null : e29;
        return [function() {
          return a20(b17());
        }, null === m25 ? void 0 : function() {
          return a20(m25());
        }];
      }, [b17, e29, l27, g17]);
      var d21 = r32(a19, c28[0], c28[1]);
      u16(function() {
        f25.hasValue = true;
        f25.value = d21;
      }, [d21]);
      w23(d21);
      return d21;
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
        function is(x20, y15) {
          return x20 === y15 && (x20 !== 0 || 1 / x20 === 1 / y15) || x20 !== x20 && y15 !== y15;
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
    var c28 = Object.defineProperty;
    var K11 = Object.getOwnPropertyDescriptor;
    var Q10 = Object.getOwnPropertyNames;
    var Z10 = Object.getPrototypeOf;
    var ee11 = Object.prototype.hasOwnProperty;
    var oe9 = /* @__PURE__ */ __name((o23, r32) => {
      for (var e29 in r32)
        c28(o23, e29, { get: r32[e29], enumerable: true });
    }, "oe");
    var C16 = /* @__PURE__ */ __name((o23, r32, e29, t30) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let s25 of Q10(r32))
          !ee11.call(o23, s25) && s25 !== e29 && c28(o23, s25, { get: () => r32[s25], enumerable: !(t30 = K11(r32, s25)) || t30.enumerable });
      return o23;
    }, "C");
    var re5 = /* @__PURE__ */ __name((o23, r32, e29) => (e29 = o23 != null ? J16(Z10(o23)) : {}, C16(r32 || !o23 || !o23.__esModule ? c28(e29, "default", { value: o23, enumerable: true }) : e29, o23)), "re");
    var te9 = /* @__PURE__ */ __name((o23) => C16(c28({}, "__esModule", { value: true }), o23), "te");
    var pe4 = {};
    oe9(pe4, { Group: () => D14, GroupFrame: () => T16, XGroup: () => le5, YGroup: () => de7, useGroupItem: () => _13 });
    module2.exports = te9(pe4);
    var p27 = require("react/jsx-runtime");
    var n23 = require("@tamagui/core-node");
    var w23 = require_cjs18();
    var z14 = require_cjs19();
    var V15 = require_cjs20();
    var a19 = re5(require("react"));
    var U10 = require("react-native-web-lite");
    var m25 = require_dist3();
    var v14 = "Group";
    var [se6, ye5] = (0, w23.createContextScope)(v14);
    var [ne6, ae4] = se6(v14);
    var T16 = (0, n23.styled)(z14.ThemeableStack, { name: "GroupFrame", variants: { unstyled: { false: { size: "$true", y: 0, backgroundColor: "$background" } }, size: (o23, { tokens: r32 }) => ({ borderRadius: r32.radius[o23] ?? o23 ?? r32.radius.$true }) }, defaultVariants: { unstyled: false } });
    function B12(o23) {
      return (0, n23.withStaticProperties)((0, a19.forwardRef)((r32, e29) => {
        const t30 = (0, n23.useMediaPropsActive)(r32), { __scopeGroup: s25, children: l27, space: R17, size: d21 = "$true", spaceDirection: b17, separator: M17, scrollable: me5, axis: k17 = o23 ? "vertical" : "horizontal", orientation: u16 = k17, disabled: G16, disablePassBorderRadius: F16, borderRadius: h18, forceUseItem: A20, ...$8 } = (0, n23.getExpandedShorthands)(t30), L15 = u16 === "vertical", [be4, x20] = (0, V15.useControllableState)({ defaultProp: A20 ? 1 : 0 }), I12 = true, f25 = h18 ?? (d21 ? (0, n23.getVariableValue)((0, n23.getTokens)().radius[d21]) - 1 : void 0), P17 = F16 ?? !(f25 !== void 0);
        I12 || console.log("screw up!");
        const y15 = a19.Children.toArray(l27), O12 = I12 ? l27 : y15.map((i24, g17) => {
          if (!(0, a19.isValidElement)(i24))
            return i24;
          const X9 = i24.props.disabled ?? G16, Y11 = g17 === 0, j15 = g17 === y15.length - 1, S19 = P17 === true ? null : E18({ isFirst: Y11, isLast: j15, radius: f25, vertical: L15, disable: P17 }), q13 = { disabled: X9, ...(0, n23.isTamaguiElement)(i24) ? S19 : { style: S19 } };
          return ce5(i24, q13);
        }), N12 = (0, m25.useIndexedChildren)((0, n23.spacedChildren)({ direction: b17, separator: M17, space: R17, children: O12 })), H14 = a19.default.useCallback(() => x20((i24) => i24 + 1), []), W14 = a19.default.useCallback(() => x20((i24) => i24 - 1), []);
        return (0, p27.jsx)(ne6, { disablePassBorderRadius: P17, vertical: u16 === "vertical", radius: f25, disabled: G16, onItemMount: H14, onItemUnmount: W14, scope: s25, children: (0, p27.jsx)(T16, { ref: e29, size: d21, flexDirection: u16 === "horizontal" ? "row" : "column", borderRadius: h18, ...$8, children: ue3({ ...t30, orientation: u16 }, N12) }) });
      }), { Item: ie5 });
    }
    __name(B12, "B");
    var ie5 = /* @__PURE__ */ __name((o23) => {
      var s25;
      const { __scopeGroup: r32, children: e29 } = o23, t30 = _13({ disabled: (0, a19.isValidElement)(e29) ? e29.props.disabled : void 0 }, r32);
      return (0, a19.isValidElement)(e29) ? (0, n23.isTamaguiElement)(e29) ? a19.default.cloneElement(e29, t30) : a19.default.cloneElement(e29, { style: { ...(s25 = e29.props) == null ? void 0 : s25.style, ...t30 } }) : e29;
    }, "ie");
    var _13 = /* @__PURE__ */ __name((o23, r32) => {
      const e29 = (0, m25.useIndex)(), t30 = ae4("GroupItem", r32);
      if (a19.default.useEffect(() => (t30.onItemMount(), () => {
        t30.onItemUnmount();
      }), []), !e29)
        throw Error("<Group.Item/> should only be used within a <Group/>");
      const s25 = e29.index === 0, l27 = e29.index === e29.maxIndex;
      let d21 = { disabled: o23.disabled ?? t30.disabled };
      if (t30.disablePassBorderRadius !== true) {
        const b17 = E18({ radius: t30.radius, isFirst: s25, isLast: l27, vertical: t30.vertical, disable: t30.disablePassBorderRadius });
        return { ...d21, ...b17 };
      }
      return d21;
    }, "_");
    var D14 = B12(true);
    var de7 = D14;
    var le5 = B12(false);
    var ue3 = /* @__PURE__ */ __name(({ scrollable: o23, orientation: r32, showScrollIndicator: e29 = false }, t30) => o23 ? (0, p27.jsx)(U10.ScrollView, { ...r32 === "vertical" && { showsVerticalScrollIndicator: e29 }, ...r32 === "horizontal" && { horizontal: true, showsHorizontalScrollIndicator: e29 }, children: t30 }) : t30, "ue");
    var E18 = /* @__PURE__ */ __name(({ isFirst: o23, isLast: r32, radius: e29, vertical: t30, disable: s25 }) => ({ borderTopLeftRadius: o23 && s25 !== "top" && s25 !== "start" ? e29 : 0, borderTopRightRadius: s25 !== "top" && s25 !== "end" && (t30 && o23 || !t30 && r32) ? e29 : 0, borderBottomLeftRadius: s25 !== "bottom" && s25 !== "start" && (t30 && r32 || !t30 && o23) ? e29 : 0, borderBottomRightRadius: r32 && s25 !== "bottom" && s25 !== "end" ? e29 : 0 }), "E");
    var ce5 = /* @__PURE__ */ __name((o23, r32) => {
      const e29 = (0, n23.mergeProps)(o23.props, r32, false, (0, n23.getConfig)().shorthands)[0];
      return a19.default.cloneElement({ ...o23, props: null }, e29);
    }, "ce");
  }
});

// node_modules/@tamagui/group/dist/cjs/index.js
var require_cjs21 = __commonJS({
  "node_modules/@tamagui/group/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_Group(), module2.exports);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js
var require_registerFocusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/registerFocusable.js"(exports, module2) {
    "use strict";
    var r32 = Object.defineProperty;
    var c28 = Object.getOwnPropertyDescriptor;
    var n23 = Object.getOwnPropertyNames;
    var u16 = Object.prototype.hasOwnProperty;
    var a19 = /* @__PURE__ */ __name((o23, s25) => {
      for (var e29 in s25)
        r32(o23, e29, { get: s25[e29], enumerable: true });
    }, "a");
    var b17 = /* @__PURE__ */ __name((o23, s25, e29, i24) => {
      if (s25 && typeof s25 == "object" || typeof s25 == "function")
        for (let t30 of n23(s25))
          !u16.call(o23, t30) && t30 !== e29 && r32(o23, t30, { get: () => s25[t30], enumerable: !(i24 = c28(s25, t30)) || i24.enumerable });
      return o23;
    }, "b");
    var g17 = /* @__PURE__ */ __name((o23) => b17(r32({}, "__esModule", { value: true }), o23), "g");
    var d21 = {};
    a19(d21, { focusFocusable: () => F16, registerFocusable: () => l27, unregisterFocusable: () => p27 });
    module2.exports = g17(d21);
    var l27 = /* @__PURE__ */ __name((o23, s25) => () => {
    }, "l");
    var p27 = /* @__PURE__ */ __name((o23) => {
    }, "p");
    var F16 = /* @__PURE__ */ __name((o23) => {
    }, "F");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js
var require_focusableInputHOC = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusableInputHOC.js"(exports, module2) {
    "use strict";
    var d21 = Object.defineProperty;
    var R17 = Object.getOwnPropertyDescriptor;
    var h18 = Object.getOwnPropertyNames;
    var A20 = Object.prototype.hasOwnProperty;
    var I12 = /* @__PURE__ */ __name((t30, c28) => {
      for (var e29 in c28)
        d21(t30, e29, { get: c28[e29], enumerable: true });
    }, "I");
    var S19 = /* @__PURE__ */ __name((t30, c28, e29, r32) => {
      if (c28 && typeof c28 == "object" || typeof c28 == "function")
        for (let f25 of h18(c28))
          !A20.call(t30, f25) && f25 !== e29 && d21(t30, f25, { get: () => c28[f25], enumerable: !(r32 = R17(c28, f25)) || r32.enumerable });
      return t30;
    }, "S");
    var V15 = /* @__PURE__ */ __name((t30) => S19(d21({}, "__esModule", { value: true }), t30), "V");
    var y15 = {};
    I12(y15, { focusableInputHOC: () => b17 });
    module2.exports = V15(y15);
    var g17 = require("react/jsx-runtime");
    var l27 = require_cjs7();
    var a19 = require("@tamagui/core-node");
    var o23 = require("react");
    var m25 = require_registerFocusable();
    function b17(t30) {
      return t30.extractable((0, o23.forwardRef)((e29, r32) => {
        const f25 = (0, a19.isTamaguiComponent)(t30) && t30.staticConfig.isInput, s25 = (0, o23.useRef)(e29.value || e29.defaultValue || ""), i24 = (0, o23.useRef)(), C16 = (0, o23.useCallback)((n23) => {
          var u16;
          e29.id && n23 && ((u16 = i24.current) == null || u16.call(i24), i24.current = (0, m25.registerFocusable)(e29.id, { focus: n23.focus, ...f25 && { focusAndSelect() {
            n23.focus(), n23.setSelection && typeof s25.current == "string" && n23.setSelection(0, s25.current.length);
          } } }));
        }, [f25, e29.id]), T16 = (0, l27.composeRefs)(r32, C16);
        (0, o23.useEffect)(() => () => {
          var n23;
          (n23 = i24.current) == null || n23.call(i24);
        }, []);
        const v14 = (0, a19.useEvent)((n23) => {
          var u16;
          s25.current = n23, (u16 = e29.onChangeText) == null || u16.call(e29, n23);
        }), x20 = f25 ? { ...e29, onChangeText: v14 } : e29;
        return (0, g17.jsx)(t30, { ref: T16, ...x20 });
      }));
    }
    __name(b17, "b");
  }
});

// node_modules/@tamagui/focusable/dist/cjs/focusable.js
var require_focusable = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/focusable.js"(exports, module2) {
    "use strict";
    var t30 = Object.defineProperty;
    var s25 = Object.getOwnPropertyDescriptor;
    var F16 = Object.getOwnPropertyNames;
    var f25 = Object.prototype.hasOwnProperty;
    var i24 = /* @__PURE__ */ __name((o23, c28, u16, n23) => {
      if (c28 && typeof c28 == "object" || typeof c28 == "function")
        for (let e29 of F16(c28))
          !f25.call(o23, e29) && e29 !== u16 && t30(o23, e29, { get: () => c28[e29], enumerable: !(n23 = s25(c28, e29)) || n23.enumerable });
      return o23;
    }, "i");
    var l27 = /* @__PURE__ */ __name((o23) => i24(t30({}, "__esModule", { value: true }), o23), "l");
    var p27 = {};
    module2.exports = l27(p27);
  }
});

// node_modules/@tamagui/focusable/dist/cjs/index.js
var require_cjs22 = __commonJS({
  "node_modules/@tamagui/focusable/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((f25, r32, p27, x20) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let m25 of c28(r32))
          !d21.call(f25, m25) && m25 !== p27 && a19(f25, m25, { get: () => r32[m25], enumerable: !(x20 = b17(r32, m25)) || x20.enumerable });
      return f25;
    }, "t");
    var e29 = /* @__PURE__ */ __name((f25, r32, p27) => (t30(f25, r32, "default"), p27 && t30(p27, r32, "default")), "e");
    var g17 = /* @__PURE__ */ __name((f25) => t30(a19({}, "__esModule", { value: true }), f25), "g");
    var o23 = {};
    module2.exports = g17(o23);
    e29(o23, require_registerFocusable(), module2.exports);
    e29(o23, require_focusableInputHOC(), module2.exports);
    e29(o23, require_focusable(), module2.exports);
  }
});

// node_modules/@tamagui/text/dist/cjs/SizableText.js
var require_SizableText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/SizableText.js"(exports, module2) {
    "use strict";
    var r32 = Object.defineProperty;
    var l27 = Object.getOwnPropertyDescriptor;
    var n23 = Object.getOwnPropertyNames;
    var x20 = Object.prototype.hasOwnProperty;
    var z14 = /* @__PURE__ */ __name((t30, e29) => {
      for (var a19 in e29)
        r32(t30, a19, { get: e29[a19], enumerable: true });
    }, "z");
    var m25 = /* @__PURE__ */ __name((t30, e29, a19, s25) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of n23(e29))
          !x20.call(t30, o23) && o23 !== a19 && r32(t30, o23, { get: () => e29[o23], enumerable: !(s25 = l27(e29, o23)) || s25.enumerable });
      return t30;
    }, "m");
    var b17 = /* @__PURE__ */ __name((t30) => m25(r32({}, "__esModule", { value: true }), t30), "b");
    var y15 = {};
    z14(y15, { SizableText: () => f25 });
    module2.exports = b17(y15);
    var p27 = require_cjs12();
    var i24 = require("@tamagui/core-node");
    var f25 = (0, i24.styled)(i24.Text, { name: "SizableText", fontFamily: "$body", variants: { size: p27.getFontSized }, defaultVariants: { size: "$true" } });
  }
});

// node_modules/@tamagui/text/dist/cjs/Paragraph.js
var require_Paragraph = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Paragraph.js"(exports, module2) {
    "use strict";
    var t30 = Object.defineProperty;
    var g17 = Object.getOwnPropertyDescriptor;
    var l27 = Object.getOwnPropertyNames;
    var m25 = Object.prototype.hasOwnProperty;
    var c28 = /* @__PURE__ */ __name((a19, r32) => {
      for (var e29 in r32)
        t30(a19, e29, { get: r32[e29], enumerable: true });
    }, "c");
    var h18 = /* @__PURE__ */ __name((a19, r32, e29, p27) => {
      if (r32 && typeof r32 == "object" || typeof r32 == "function")
        for (let o23 of l27(r32))
          !m25.call(a19, o23) && o23 !== e29 && t30(a19, o23, { get: () => r32[o23], enumerable: !(p27 = g17(r32, o23)) || p27.enumerable });
      return a19;
    }, "h");
    var i24 = /* @__PURE__ */ __name((a19) => h18(t30({}, "__esModule", { value: true }), a19), "i");
    var u16 = {};
    c28(u16, { Paragraph: () => f25 });
    module2.exports = i24(u16);
    var s25 = require("@tamagui/core-node");
    var P17 = require_SizableText();
    var f25 = (0, s25.styled)(P17.SizableText, { name: "Paragraph", tag: "p", userSelect: "auto", color: "$color", size: "$true" });
  }
});

// node_modules/@tamagui/text/dist/cjs/Headings.js
var require_Headings = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/Headings.js"(exports, module2) {
    "use strict";
    var i24 = Object.defineProperty;
    var m25 = Object.getOwnPropertyDescriptor;
    var g17 = Object.getOwnPropertyNames;
    var p27 = Object.prototype.hasOwnProperty;
    var c28 = /* @__PURE__ */ __name((a19, e29) => {
      for (var s25 in e29)
        i24(a19, s25, { get: e29[s25], enumerable: true });
    }, "c");
    var h18 = /* @__PURE__ */ __name((a19, e29, s25, r32) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let o23 of g17(e29))
          !p27.call(a19, o23) && o23 !== s25 && i24(a19, o23, { get: () => e29[o23], enumerable: !(r32 = m25(e29, o23)) || r32.enumerable });
      return a19;
    }, "h");
    var $8 = /* @__PURE__ */ __name((a19) => h18(i24({}, "__esModule", { value: true }), a19), "$");
    var b17 = {};
    c28(b17, { H1: () => x20, H2: () => z14, H3: () => d21, H4: () => l27, H5: () => f25, H6: () => y15, Heading: () => n23 });
    module2.exports = $8(b17);
    var t30 = require("@tamagui/core-node");
    var H14 = require_Paragraph();
    var n23 = (0, t30.styled)(H14.Paragraph, { tag: "span", name: "Heading", accessibilityRole: "header", fontFamily: "$heading", size: "$8", margin: 0 });
    var x20 = (0, t30.styled)(n23, { name: "H1", tag: "h1", size: "$10" });
    var z14 = (0, t30.styled)(n23, { name: "H2", tag: "h2", size: "$9" });
    var d21 = (0, t30.styled)(n23, { name: "H3", tag: "h3", size: "$8" });
    var l27 = (0, t30.styled)(n23, { name: "H4", tag: "h4", size: "$7" });
    var f25 = (0, t30.styled)(n23, { name: "H5", tag: "h5", size: "$6" });
    var y15 = (0, t30.styled)(n23, { name: "H6", tag: "h6", size: "$5" });
  }
});

// node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js
var require_wrapChildrenInText = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/wrapChildrenInText.js"(exports, module2) {
    "use strict";
    var A20 = Object.create;
    var f25 = Object.defineProperty;
    var W14 = Object.getOwnPropertyDescriptor;
    var b17 = Object.getOwnPropertyNames;
    var w23 = Object.getPrototypeOf;
    var F16 = Object.prototype.hasOwnProperty;
    var I12 = /* @__PURE__ */ __name((t30, e29) => {
      for (var n23 in e29)
        f25(t30, n23, { get: e29[n23], enumerable: true });
    }, "I");
    var T16 = /* @__PURE__ */ __name((t30, e29, n23, s25) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let l27 of b17(e29))
          !F16.call(t30, l27) && l27 !== n23 && f25(t30, l27, { get: () => e29[l27], enumerable: !(s25 = W14(e29, l27)) || s25.enumerable });
      return t30;
    }, "T");
    var N12 = /* @__PURE__ */ __name((t30, e29, n23) => (n23 = t30 != null ? A20(w23(t30)) : {}, T16(e29 || !t30 || !t30.__esModule ? f25(n23, "default", { value: t30, enumerable: true }) : n23, t30)), "N");
    var q13 = /* @__PURE__ */ __name((t30) => T16(f25({}, "__esModule", { value: true }), t30), "q");
    var B12 = {};
    I12(B12, { wrapChildrenInText: () => v14 });
    module2.exports = q13(B12);
    var P17 = require("react/jsx-runtime");
    var C16 = N12(require("react"));
    function v14(t30, e29, n23) {
      const { children: s25, textProps: l27, size: p27, noTextWrap: R17, color: h18, fontFamily: g17, fontSize: y15, fontWeight: S19, letterSpacing: d21, textAlign: x20, fontStyle: m25 } = e29;
      if (R17 || !s25)
        return [s25];
      const k17 = C16.default.Children.toArray(s25), o23 = [];
      let c28 = false;
      const i24 = { ...n23 };
      h18 && (i24.color = h18), g17 && (i24.fontFamily = g17), y15 && (i24.fontSize = y15), S19 && (i24.fontWeight = S19), d21 && (i24.letterSpacing = d21), x20 && (i24.textAlign = x20), p27 && (i24.size = p27), m25 && (i24.fontStyle = m25);
      function u16() {
        if (!c28)
          return;
        const r32 = o23.length - 1, a19 = o23[r32];
        o23[r32] = (0, P17.jsx)(t30, { ...i24, ...l27, children: a19 }, r32);
      }
      __name(u16, "u");
      for (const r32 of k17) {
        const a19 = o23[o23.length - 1], z14 = typeof r32 == "string";
        z14 ? c28 ? a19.push(r32) : o23.push([r32]) : (u16(), o23.push(r32)), c28 = z14;
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
    var p27 = Object.getOwnPropertyNames;
    var S19 = Object.prototype.hasOwnProperty;
    var n23 = /* @__PURE__ */ __name((e29, t30, r32, l27) => {
      if (t30 && typeof t30 == "object" || typeof t30 == "function")
        for (let o23 of p27(t30))
          !S19.call(e29, o23) && o23 !== r32 && i24(e29, o23, { get: () => t30[o23], enumerable: !(l27 = a19(t30, o23)) || l27.enumerable });
      return e29;
    }, "n");
    var x20 = /* @__PURE__ */ __name((e29) => n23(i24({}, "__esModule", { value: true }), e29), "x");
    var P17 = {};
    module2.exports = x20(P17);
  }
});

// node_modules/@tamagui/text/dist/cjs/index.js
var require_cjs23 = __commonJS({
  "node_modules/@tamagui/text/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var t30 = /* @__PURE__ */ __name((f25, e29, p27, x20) => {
      if (e29 && typeof e29 == "object" || typeof e29 == "function")
        for (let m25 of c28(e29))
          !d21.call(f25, m25) && m25 !== p27 && a19(f25, m25, { get: () => e29[m25], enumerable: !(x20 = b17(e29, m25)) || x20.enumerable });
      return f25;
    }, "t");
    var r32 = /* @__PURE__ */ __name((f25, e29, p27) => (t30(f25, e29, "default"), p27 && t30(p27, e29, "default")), "r");
    var g17 = /* @__PURE__ */ __name((f25) => t30(a19({}, "__esModule", { value: true }), f25), "g");
    var o23 = {};
    module2.exports = g17(o23);
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
    var x20 = Object.defineProperty;
    var H14 = Object.getOwnPropertyDescriptor;
    var M17 = Object.getOwnPropertyNames;
    var Y11 = Object.prototype.hasOwnProperty;
    var D14 = /* @__PURE__ */ __name((o23, n23) => {
      for (var i24 in n23)
        x20(o23, i24, { get: n23[i24], enumerable: true });
    }, "D");
    var J16 = /* @__PURE__ */ __name((o23, n23, i24, l27) => {
      if (n23 && typeof n23 == "object" || typeof n23 == "function")
        for (let s25 of M17(n23))
          !Y11.call(o23, s25) && s25 !== i24 && x20(o23, s25, { get: () => n23[s25], enumerable: !(l27 = H14(n23, s25)) || l27.enumerable });
      return o23;
    }, "J");
    var O12 = /* @__PURE__ */ __name((o23) => J16(x20({}, "__esModule", { value: true }), o23), "O");
    var q13 = {};
    D14(q13, { ListItem: () => j15, ListItemFrame: () => I12, ListItemSubtitle: () => c28, ListItemText: () => r32, ListItemTitle: () => b17, listItemStaticConfig: () => k17, useListItem: () => $8 });
    module2.exports = O12(q13);
    var t30 = require("react/jsx-runtime");
    var e29 = require("@tamagui/core-node");
    var C16 = require_cjs14();
    var p27 = require_cjs17();
    var m25 = require_cjs19();
    var u16 = require_cjs23();
    var F16 = require("react");
    var L15 = "ListItem";
    var I12 = (0, e29.styled)(m25.ThemeableStack, { name: L15, tag: "li", variants: { unstyled: { false: { size: "$true", alignItems: "center", flexWrap: "nowrap", width: "100%", borderColor: "$borderColor", maxWidth: "100%", overflow: "hidden", flexDirection: "row", backgroundColor: "$backgroundStrong" } }, size: { "...size": (o23, { tokens: n23 }) => ({ minHeight: n23.size[o23], paddingHorizontal: n23.space[o23], paddingVertical: (0, p27.getSpace)(o23, -2) }) }, active: { true: { hoverStyle: { backgroundColor: "$background" } } }, disabled: { true: { opacity: 0.5, pointerEvents: "none" } } }, defaultVariants: { unstyled: false } });
    var r32 = (0, e29.styled)(u16.SizableText, { name: "ListItemText", variants: { unstyled: { false: { color: "$color", userSelect: "none", flexGrow: 1, flexShrink: 1, ellipse: true, cursor: "default" } } }, defaultVariants: { unstyled: false } });
    var c28 = (0, e29.styled)(r32, { name: "ListItemSubtitle", variants: { unstyled: { false: { opacity: 0.6, maxWidth: "100%", size: "$3", color: "$color" } } }, defaultVariants: { unstyled: false } });
    var b17 = (0, e29.styled)(r32, { name: "ListItemTitle" });
    var $8 = /* @__PURE__ */ __name((o23, { Text: n23 = r32, Subtitle: i24 = c28, Title: l27 = b17 } = { Text: r32, Subtitle: c28, Title: b17 }) => {
      const { children: s25, icon: w23, iconAfter: A20, noTextWrap: T16, theme: B12, space: K11, spaceFlex: Q10, scaleIcon: W14 = 1, scaleSpace: v14 = 1, subTitle: a19, color: R17, fontWeight: U10, letterSpacing: Z10, fontSize: _13, fontFamily: V15, textAlign: ee11, textProps: te9, title: d21, ...E18 } = o23, f25 = (0, e29.useMediaPropsActive)(o23), S19 = f25.size || "$true", N12 = `$${+String(S19).replace("$", "") - 1}`, g17 = (0, C16.getFontSize)(S19) * W14, G16 = (0, p27.useGetThemedIcon)({ size: g17, color: R17 }), [y15, h18] = [w23, A20].map(G16), z14 = (0, e29.getVariableValue)((0, e29.getTokens)().space[f25.space] ?? g17) * v14, P17 = (0, u16.wrapChildrenInText)(n23, f25);
      return { props: { fontFamily: V15, ...E18, children: (0, t30.jsxs)(t30.Fragment, { children: [y15 ? (0, t30.jsxs)(t30.Fragment, { children: [y15, (0, t30.jsx)(e29.Spacer, { size: z14 })] }) : null, d21 || a19 ? (0, t30.jsxs)(m25.YStack, { flex: 1, children: [T16 === "all" ? d21 : (0, t30.jsx)(l27, { size: S19, children: d21 }), a19 ? (0, t30.jsx)(t30.Fragment, { children: typeof a19 == "string" && T16 !== "all" ? (0, t30.jsx)(i24, { size: N12, children: a19 }) : a19 }) : null, P17] }) : P17, h18 ? (0, t30.jsxs)(t30.Fragment, { children: [(0, t30.jsx)(e29.Spacer, { size: z14 }), h18] }) : null] }) } };
    }, "$");
    var X9 = (0, F16.forwardRef)((o23, n23) => {
      const { props: i24 } = $8(o23);
      return (0, t30.jsx)(I12, { ref: n23, justifyContent: "space-between", ...i24 });
    });
    var k17 = { inlineProps: /* @__PURE__ */ new Set(["color", "fontWeight", "fontSize", "fontFamily", "letterSpacing", "textAlign"]) };
    var j15 = (0, e29.withStaticProperties)(I12.extractable((0, e29.themeable)(X9, { componentName: L15 }), k17), { Text: r32, Subtitle: c28 });
  }
});

// node_modules/@tamagui/list-item/dist/cjs/index.js
var require_cjs24 = __commonJS({
  "node_modules/@tamagui/list-item/dist/cjs/index.js"(exports, module2) {
    "use strict";
    var a19 = Object.defineProperty;
    var b17 = Object.getOwnPropertyDescriptor;
    var c28 = Object.getOwnPropertyNames;
    var d21 = Object.prototype.hasOwnProperty;
    var p27 = /* @__PURE__ */ __name((r32, o23, f25, x20) => {
      if (o23 && typeof o23 == "object" || typeof o23 == "function")
        for (let e29 of c28(o23))
          !d21.call(r32, e29) && e29 !== f25 && a19(r32, e29, { get: () => o23[e29], enumerable: !(x20 = b17(o23, e29)) || x20.enumerable });
      return r32;
    }, "p");
    var t30 = /* @__PURE__ */ __name((r32, o23, f25) => (p27(r32, o23, "default"), f25 && p27(f25, o23, "default")), "t");
    var g17 = /* @__PURE__ */ __name((r32) => p27(a19({}, "__esModule", { value: true }), r32), "g");
    var m25 = {};
    module2.exports = g17(m25);
    t30(m25, require_ListItem(), module2.exports);
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
    var e29;
    var r32;
    var u16 = (e29 = {}, r32 = require("react"), Object.keys(r32).forEach(function(u17) {
      "default" !== u17 && "__esModule" !== u17 && Object.defineProperty(e29, u17, { enumerable: true, get: function() {
        return r32[u17];
      } });
    }), e29);
    exports.usePrevious = function(e30) {
      const r33 = u16.useRef({ value: e30, previous: e30 });
      return u16.useMemo(() => (r33.current.value !== e30 && (r33.current.previous = r33.current.value, r33.current.value = e30), r33.current.previous), [e30]);
    };
  }
});

// tamagui.config.ts
var tamagui_config_exports = {};
__export(tamagui_config_exports, {
  default: () => tamagui_config_default
});
module.exports = __toCommonJS(tamagui_config_exports);

// node_modules/@tamagui/config/dist/esm/tamagui.config.js
var import_font_inter = __toESM(require_cjs());
var import_font_silkscreen = __toESM(require_cjs2());

// node_modules/@tamagui/shorthands/dist/esm/index.mjs
var o = { ussel: "userSelect", cur: "cursor", pe: "pointerEvents", col: "color", ff: "fontFamily", fos: "fontSize", fost: "fontStyle", fow: "fontWeight", ls: "letterSpacing", lh: "lineHeight", ta: "textAlign", tt: "textTransform", ww: "wordWrap", ac: "alignContent", ai: "alignItems", als: "alignSelf", b: "bottom", bc: "backgroundColor", bg: "backgroundColor", bbc: "borderBottomColor", bblr: "borderBottomLeftRadius", bbrr: "borderBottomRightRadius", bbw: "borderBottomWidth", blc: "borderLeftColor", blw: "borderLeftWidth", boc: "borderColor", br: "borderRadius", bs: "borderStyle", brw: "borderRightWidth", brc: "borderRightColor", btc: "borderTopColor", btlr: "borderTopLeftRadius", btrr: "borderTopRightRadius", btw: "borderTopWidth", bw: "borderWidth", dsp: "display", f: "flex", fb: "flexBasis", fd: "flexDirection", fg: "flexGrow", fs: "flexShrink", fw: "flexWrap", h: "height", jc: "justifyContent", l: "left", m: "margin", mah: "maxHeight", maw: "maxWidth", mb: "marginBottom", mih: "minHeight", miw: "minWidth", ml: "marginLeft", mr: "marginRight", mt: "marginTop", mx: "marginHorizontal", my: "marginVertical", o: "opacity", ov: "overflow", p: "padding", pb: "paddingBottom", pl: "paddingLeft", pos: "position", pr: "paddingRight", pt: "paddingTop", px: "paddingHorizontal", py: "paddingVertical", r: "right", shac: "shadowColor", shar: "shadowRadius", shof: "shadowOffset", shop: "shadowOpacity", t: "top", w: "width", zi: "zIndex" };
o.bls = "borderLeftStyle", o.brs = "borderRightStyle", o.bts = "borderTopStyle", o.bbs = "borderBottomStyle", o.bxs = "boxSizing", o.bxsh = "boxShadow", o.ox = "overflowX", o.oy = "overflowY";

// node_modules/@tamagui/create-theme/dist/esm/index.js
var k = /* @__PURE__ */ new WeakMap();
function d(s25, e29, r32) {
  const t30 = { ...Object.fromEntries(Object.entries(e29).map(([n23, a19]) => [n23, w(s25, a19)])), ...r32 == null ? void 0 : r32.nonInheritedValues };
  return k.set(t30, { palette: s25, definition: e29, cache: /* @__PURE__ */ new Map() }), t30;
}
__name(d, "d");
var w = /* @__PURE__ */ __name((s25, e29) => {
  if (typeof e29 == "string")
    return e29;
  const r32 = s25.length - 1, n23 = (e29 === 0 ? !x(e29) : e29 >= 0) ? e29 : r32 + e29, a19 = Math.min(Math.max(0, n23), r32);
  return s25[a19];
}, "w");
function E(s25, e29) {
  const r32 = { ...s25 };
  for (const t30 in s25) {
    const n23 = e29(t30, s25[t30]);
    for (const a19 in n23)
      r32[`${t30}_${a19}`] = n23[a19];
  }
  return r32;
}
__name(E, "E");
var u = /* @__PURE__ */ __name(({ inverse: s25 } = {}) => (e29, { skip: r32, max: t30, palette: n23, min: a19 = 0, strength: o23 = 1 }) => {
  const i24 = Object.entries(e29), m25 = t30 ?? (n23 ? Object.values(n23).length - 1 : 1 / 0), y15 = {};
  for (const [f25, c28] of i24) {
    if (typeof c28 == "string" || r32 && f25 in r32)
      continue;
    const p27 = c28 === 0 ? !x(c28) : c28 >= 0, T16 = p27 ? 1 : -1, M17 = s25 ? -1 : 1, g17 = c28 + o23 * T16 * M17, b17 = p27 ? Math.max(a19, Math.min(m25, g17)) : Math.min(-a19, Math.max(-m25, g17));
    y15[f25] = b17;
  }
  return y15;
}, "u");
var C = /* @__PURE__ */ __name(() => u(), "C");
var P = /* @__PURE__ */ __name(() => u({ inverse: true }), "P");
function x(s25) {
  return 1 / s25 === -1 / 0;
}
__name(x, "x");
var l = /* @__PURE__ */ new WeakMap();
function h(s25, e29, r32 = {}) {
  const t30 = k.get(s25);
  if (!t30)
    throw new Error(process.env.NODE_ENV !== "production" ? "No info found for theme, you must pass the theme created by createThemeFromPalette directly to extendTheme" : "\u274C Err2");
  const n23 = l.get(e29) ?? `${Math.random()}`;
  l.set(e29, n23);
  const a19 = `${n23}${JSON.stringify(r32)}`;
  if (t30.cache.has(a19))
    return t30.cache.get(a19);
  const o23 = e29(t30.definition, { palette: t30.palette, ...r32 }), i24 = d(t30.palette, o23);
  return t30.cache.set(a19, i24), i24;
}
__name(h, "h");
if (process.env.NODE_ENV === "development") {
  const s25 = ["0", "1", "2", "3", "-3", "-2", "-1", "-0"], e29 = { bg: 1, fg: -1 }, r32 = P(), t30 = C(), n23 = d(s25, e29);
  if (n23.bg !== "1" || n23.fg !== "-1")
    throw "\u274C";
  const a19 = h(n23, r32);
  if (a19.bg !== "0" || a19.fg !== "-0")
    throw "\u274C";
  const o23 = h(n23, t30);
  if (o23.bg !== "2" || o23.fg !== "-2")
    throw "\u274C";
  const i24 = h(n23, t30, { strength: 2 });
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
var i = Object.entries(n3).map(([r32, t30]) => [r32, D(t30)]);
function D(r32) {
  return r32 === 0 ? 0 : r32 === 2 ? 0.5 : r32 === 4 ? 1 : r32 === 8 ? 1.5 : r32 <= 16 ? Math.round(r32 * 0.333) : Math.floor(r32 * 0.7 - 12);
}
__name(D, "D");
var j = i.slice(1).map(([r32, t30]) => [`-${r32.slice(1)}`, -t30]);
var w2 = { ...Object.fromEntries(i), ...Object.fromEntries(j) };
var O = { 0: 0, 1: 100, 2: 200, 3: 300, 4: 400, 5: 500 };
var e5 = { light: { blue: l4, gray: r2, green: e3, orange: o3, pink: n2, purple: p2, red: e4, yellow: l5 }, dark: { blue: l2, gray: r, green: e, orange: o2, pink: n, purple: p, red: e2, yellow: l3 } };
var A = { ...e5.dark.blue, ...e5.dark.gray, ...e5.dark.green, ...e5.dark.orange, ...e5.dark.pink, ...e5.dark.purple, ...e5.dark.red, ...e5.dark.yellow };
var E2 = { ...e5.light.blue, ...e5.light.gray, ...e5.light.green, ...e5.light.orange, ...e5.light.pink, ...e5.light.purple, ...e5.light.red, ...e5.light.yellow };
var I = { ...s(E2, "Light"), ...s(A, "Dark") };
function s(r32, t30) {
  return Object.fromEntries(Object.entries(r32).map(([o23, a19]) => [`${o23}${t30}`, a19]));
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
  const i24 = T16 === "light", w23 = i24 ? "dark" : "light", S19 = L[w23], v14 = /* @__PURE__ */ __name((r32, e29 = 0) => r32.replace("%)", `%, ${e29})`).replace("hsl(", "hsla("), "v"), [f25, V15] = [e5[T16], e5[w23]].map((r32) => Object.fromEntries(Object.keys(r32).map((e29) => {
    const o23 = Object.values(r32[e29]), [s25, n23] = [o23.slice(0, 6), o23.slice(o23.length - 5)], c28 = [v14(o23[0]), ...s25, ...n23, C16.color, v14(o23[o23.length - 1])], d21 = d(c28, i24 ? { ...m2, borderColor: 4, borderColorHover: 5, borderColorFocus: 4, borderColorPress: 4 } : p3);
    return [e29, d21];
  }))), D14 = E(f25, (r32, e29) => {
    const o23 = V15[r32];
    return { ...P17(e29, o23), ...g17(e29, o23) };
  }), E18 = h(f25.blue, l6.weaker, { ...a, strength: 4 });
  return { ...{ ...P17(C16, S19, E18), ...g17(C16, S19) }, ...D14 };
  function P17(r32, e29, o23) {
    const s25 = { ...a, skip: A2 }, n23 = h(r32, l6.weaker, s25), c28 = h(n23, l6.weaker, s25), d21 = o23 ?? h(r32, l6.weaker, { ...a, strength: 4 });
    return E({ alt1: n23, alt2: c28, active: d21 }, (k17, F16) => g17(F16, F16 === e29 ? r32 : e29));
  }
  __name(P17, "P");
  function g17(r32, e29) {
    const o23 = h(r32, l6.weaker, a), s25 = h(o23, l6.weaker, a), n23 = h(r32, l6.stronger, a), c28 = h(e29, l6.weaker, a), d21 = h(c28, l6.weaker, a), k17 = i24 ? { ...n23, borderColor: o23.borderColor, borderColorHover: o23.borderColorHover, borderColorPress: o23.borderColorPress, borderColorFocus: o23.borderColorFocus } : { ...r32, borderColor: o23.borderColor, borderColorHover: o23.borderColorHover, borderColorPress: o23.borderColorPress, borderColorFocus: o23.borderColorFocus };
    return { Card: o23, Button: s25, Checkbox: s25, DrawerFrame: o23, SliderTrack: n23, SliderTrackActive: s25, SliderThumb: c28, Progress: o23, ProgressIndicator: e29, Switch: s25, SwitchThumb: d21, TooltipArrow: o23, TooltipContent: s25, Input: k17, TextArea: k17, Tooltip: c28 };
  }
  __name(g17, "g");
});
var oo = { ...Q, light: d(b.light, m2, { nonInheritedValues: E2 }), dark: d(b.dark, p3, { nonInheritedValues: A }) };

// node_modules/@tamagui/config/dist/esm/animations.js
var import_animations_react_native = __toESM(require_cjs4());
var n4 = (0, import_animations_react_native.createAnimations)({ "100ms": { type: "timing", duration: 100 }, bouncy: { damping: 9, mass: 0.9, stiffness: 150 }, lazy: { damping: 18, stiffness: 50 }, slow: { damping: 15, stiffness: 40 }, quick: { damping: 20, mass: 1.2, stiffness: 250 }, tooltip: { damping: 10, mass: 0.9, stiffness: 100 } });

// node_modules/@tamagui/config/dist/esm/createGenericFont.js
var import_web2 = require("@tamagui/core-node");
var c = { 1: 10, 2: 11, 3: 12, 4: 14, 5: 15, 6: 16, 7: 20, 8: 22, 9: 30, 10: 42, 11: 52, 12: 62, 13: 72, 14: 92, 15: 114, 16: 124 };
function m3(n23, t30 = {}, { sizeLineHeight: i24 = /* @__PURE__ */ __name((e29) => e29 * 1.35, "i") } = {}) {
  const e29 = t30.size || c;
  return (0, import_web2.createFont)({ family: n23, size: e29, lineHeight: Object.fromEntries(Object.entries(e29).map(([r32, o23]) => [r32, i24(+o23)])), weight: { 0: "300" }, letterSpacing: { 4: 0 }, ...t30 });
}
__name(m3, "m");

// node_modules/@tamagui/config/dist/esm/media.js
var import_react_native_media_driver = __toESM(require_cjs5());
var e6 = (0, import_react_native_media_driver.createMedia)({ xl: { maxWidth: 1650 }, lg: { maxWidth: 1280 }, md: { maxWidth: 1020 }, sm: { maxWidth: 800 }, xs: { maxWidth: 660 }, xxs: { maxWidth: 390 }, gtXs: { minWidth: 660 + 1 }, gtSm: { minWidth: 800 + 1 }, gtMd: { minWidth: 1020 + 1 }, gtLg: { minWidth: 1280 + 1 }, gtXl: { minWidth: 1650 + 1 } });
var x3 = { xl: true, lg: true, md: true, sm: true, xs: true, xxs: false };

// node_modules/@tamagui/config/dist/esm/tamagui.config.js
var c2 = process.env.TAMAGUI_TARGET === "native" ? "Inter" : '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
var p4 = (0, import_font_silkscreen.createSilkscreenFont)();
var d2 = (0, import_font_inter.createInterFont)({ size: { 5: 13, 6: 15, 9: 32, 10: 44 }, transform: { 6: "uppercase", 7: "none" }, weight: { 6: "400", 7: "700" }, color: { 6: "$colorFocus", 7: "$color" }, letterSpacing: { 5: 2, 6: 1, 7: 0, 8: 0, 9: -1, 10: -1.5, 12: -2, 14: -3, 15: -4 }, face: { 700: { normal: "InterBold" }, 800: { normal: "InterBold" }, 900: { normal: "InterBold" } } }, { sizeLineHeight: (o23) => Math.round(o23 * 1.1 + (o23 < 30 ? 10 : 5)) });
var f = (0, import_font_inter.createInterFont)({ family: c2, weight: { 1: "500", 7: "600" } }, { sizeSize: (o23) => Math.round(o23), sizeLineHeight: (o23) => Math.round(o23 * 1.1 + (o23 >= 12 ? 8 : 4)) });
var h2 = m3('"ui-monospace", "SFMono-Regular", "SF Mono", Menlo, Consolas, "Liberation Mono", monospace', { weight: { 1: "500" }, size: { 1: 11, 2: 12, 3: 13, 4: 14, 5: 16, 6: 18, 7: 20, 8: 22, 9: 30, 10: 42, 11: 52, 12: 62, 13: 72, 14: 92, 15: 114, 16: 124 } }, { sizeLineHeight: (o23) => o23 * 1.5 });
var g = { shouldAddPrefersColorThemes: true, themeClassNameOnRoot: true, animations: n4, themes: oo, media: e6, shorthands: o, tokens: C2, fonts: { heading: d2, body: f, mono: h2, silkscreen: p4 } };
g.mediaQueryDefaultActive = x3;

// node_modules/tamagui/dist/esm/index.mjs
var esm_exports2 = {};
__export(esm_exports2, {
  ACTIONS: () => y4,
  Adapt: () => b2,
  AdaptContents: () => s4,
  AdaptParentContext: () => a3,
  AlertDialog: () => j5,
  AlertDialogAction: () => S2,
  AlertDialogCancel: () => O4,
  AlertDialogContent: () => C7,
  AlertDialogDescription: () => _6,
  AlertDialogOverlay: () => y5,
  AlertDialogPortal: () => m10,
  AlertDialogTitle: () => v5,
  AlertDialogTrigger: () => f8,
  Anchor: () => p23,
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
  ButtonText: () => c12,
  Card: () => w9,
  CardBackground: () => g8,
  CardFooter: () => C8,
  CardFrame: () => n10,
  CardHeader: () => s10,
  Checkbox: () => ie3,
  CheckboxFrame: () => _12,
  Circle: () => c11,
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
  EnsureFlexed: () => t25,
  Fieldset: () => i22,
  FontLanguage: () => import_core49.FontLanguage,
  Footer: () => l24,
  Form: () => w10,
  FormFrame: () => c14,
  FormProvider: () => f11,
  FormTrigger: () => T8,
  ForwardSelectContext: () => i14,
  Grid: () => d19,
  H1: () => s9,
  H2: () => i9,
  H3: () => r11,
  H4: () => H,
  H5: () => m9,
  H6: () => g6,
  Header: () => a18,
  Heading: () => t11,
  INITIAL_STATE: () => f6,
  Input: () => c26,
  InputFrame: () => n21,
  Label: () => w11,
  LabelFrame: () => L6,
  LinearGradient: () => o22,
  Main: () => c27,
  Nav: () => m23,
  Paragraph: () => p11,
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
  Portal: () => x8,
  PortalHost: () => x9,
  PortalItem: () => B5,
  PortalProvider: () => F3,
  PresenceContext: () => o5,
  Progress: () => x13,
  ProgressFrame: () => N7,
  ProgressIndicator: () => P11,
  ProgressIndicatorFrame: () => E9,
  RadioGroup: () => F12,
  Range: () => xe2,
  ScrollView: () => a8,
  Section: () => n22,
  Select: () => Ue2,
  SelectGroupFrame: () => Be2,
  SelectIcon: () => we,
  SelectItem: () => te3,
  SelectItemTextFrame: () => ke3,
  SelectProvider: () => r16,
  SelectSeparator: () => mt2,
  SelectTrigger: () => J12,
  Separator: () => e17,
  Sheet: () => Mt,
  SheetController: () => Pn,
  SheetFrame: () => It,
  SheetFrameFrame: () => Ne,
  SheetHandle: () => Dt,
  SheetHandleFrame: () => Ve,
  SheetOverlay: () => Tt,
  SheetOverlayFrame: () => ke,
  SizableStack: () => k3,
  SizableText: () => s8,
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
  Square: () => p13,
  Stack: () => import_core49.Stack,
  Switch: () => me3,
  SwitchFrame: () => H10,
  SwitchThumb: () => I10,
  SwitchThumbFrame: () => R12,
  Tabs: () => oe7,
  TamaguiProvider: () => t24,
  Text: () => import_core49.Text,
  TextAncestorContext: () => import_core49.TextAncestorContext,
  TextArea: () => l26,
  TextAreaFrame: () => s24,
  Theme: () => import_core49.Theme,
  ThemeableStack: () => k4,
  Thumb: () => ye2,
  ToggleGroup: () => h16,
  Tooltip: () => To2,
  TooltipGroup: () => Fo,
  TooltipSimple: () => C15,
  Track: () => ke4,
  Unspaced: () => import_core49.Unspaced,
  VisuallyHidden: () => e23,
  XStack: () => i7,
  YStack: () => c7,
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
  createSelectContext: () => c17,
  createSelectScope: () => a12,
  createSheetScope: () => d6,
  createShorthands: () => import_core49.createShorthands,
  createSwitchScope: () => fe3,
  createTamagui: () => f22,
  createTheme: () => import_core49.createTheme,
  createToggleGroupScope: () => Q8,
  createTokens: () => import_core49.createTokens,
  createVariable: () => import_core49.createVariable,
  debounce: () => f19,
  defaultStyles: () => s23,
  fullscreenStyle: () => a6,
  getAnimationDriver: () => import_core49.getAnimationDriver,
  getConfig: () => import_core49.getConfig,
  getMedia: () => import_core49.getMedia,
  getShapeSize: () => h10,
  getState: () => B11,
  getStylesAtomic: () => import_core49.getStylesAtomic,
  getThemes: () => import_core49.getThemes,
  getTokens: () => import_core49.getTokens,
  getVariable: () => import_core49.getVariable,
  getVariableName: () => import_core49.getVariableName,
  getVariableValue: () => import_core49.getVariableValue,
  idFn: () => c3,
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
  useComposedRefs: () => c5,
  useControllableState: () => A6,
  useDebounce: () => y13,
  useDebounceValue: () => A19,
  useDidFinishSSR: () => import_core49.useDidFinishSSR,
  useEvent: () => import_core49.useEvent,
  useFloatingContext: () => F10,
  useForceUpdate: () => d18,
  useFormContext: () => b9,
  useGet: () => import_core49.useGet,
  useIsPresent: () => x5,
  useIsTouchDevice: () => import_core49.useIsTouchDevice,
  useIsomorphicLayoutEffect: () => import_core49.useIsomorphicLayoutEffect,
  useLabelContext: () => U5,
  useMedia: () => import_core49.useMedia,
  usePopoverScope: () => g11,
  usePopperContext: () => E7,
  usePortal: () => h4,
  usePresence: () => p5,
  useSafeRef: () => import_core49.useSafeRef,
  useSelectContext: () => d12,
  useStyle: () => import_core49.useStyle,
  useTheme: () => import_core49.useTheme,
  useThemeName: () => import_core49.useThemeName,
  useWindowDimensions: () => f21,
  variableToString: () => import_core49.variableToString,
  withStaticProperties: () => import_core49.withStaticProperties,
  wrapChildrenInText: () => W5
});

// node_modules/tamagui/dist/esm/setup.js
var import_core = require("@tamagui/core-node");
var t3 = __toESM(require("react"));
var import_react_native = require("react-native-web-lite");
globalThis.React = t3, (0, import_core.setupReactNative)({ View: import_react_native.View, Text: import_react_native.Text }), typeof requestAnimationFrame > "u" && (globalThis.requestAnimationFrame = setImmediate);
var n5 = globalThis.cancelAnimationFrame;
global.cancelAnimationFrame = (e29) => {
  try {
    n5(e29);
  } catch {
  }
};
var c3 = /* @__PURE__ */ __name(() => {
}, "c");

// node_modules/@tamagui/adapt/dist/esm/Adapt.js
var import_jsx_runtime = require("react/jsx-runtime");
var import_core2 = require("@tamagui/core-node");
var import_react = require("react");
var a3 = (0, import_react.createContext)(null);
var s4 = /* @__PURE__ */ __name((r32) => {
  const e29 = (0, import_react.useContext)(a3);
  if (!(e29 != null && e29.Contents))
    throw new Error("Adapt not supported by this component");
  return (0, import_react.createElement)(e29.Contents, r32);
}, "s");
s4.shouldForwardSpace = true;
var W = /* @__PURE__ */ __name(({ Contents: r32 }) => {
  const [e29, o23] = (0, import_react.useState)(null);
  return { AdaptProvider: (0, import_react.useMemo)(() => {
    const n23 = { Contents: r32, setWhen: o23 };
    function t30(u16) {
      return (0, import_jsx_runtime.jsx)(a3.Provider, { value: n23, children: u16.children });
    }
    __name(t30, "t");
    return t30;
  }, [r32]), when: e29 };
}, "W");
var b2 = (0, import_core2.withStaticProperties)(function({ platform: e29, when: o23, children: p27 }) {
  const n23 = (0, import_react.useContext)(a3);
  let t30 = !e29;
  return e29 === "touch" && (t30 = import_core2.isTouchable), e29 === "native" && (t30 = !import_core2.isWeb), e29 === "web" && (t30 = import_core2.isWeb), (0, import_core2.useIsomorphicLayoutEffect)(() => {
    t30 && (n23 == null || n23.setWhen(o23 || t30));
  }, [o23, n23, t30]), t30 ? p27 : null;
}, { Contents: s4 });

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_jsx_runtime13 = require("react/jsx-runtime");

// node_modules/@tamagui/compose-refs/dist/esm/compose-refs.js
var f2 = __toESM(require("react"));
function s5(e29, t30) {
  typeof e29 == "function" ? e29(t30) : e29 && (e29.current = t30);
}
__name(s5, "s");
function R(...e29) {
  return (t30) => e29.forEach((o23) => s5(o23, t30));
}
__name(R, "R");
function c5(...e29) {
  return f2.useCallback(R(...e29), e29);
}
__name(c5, "c");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var import_core13 = require("@tamagui/core-node");

// node_modules/@tamagui/create-context/dist/esm/create-context.js
var import_jsx_runtime2 = require("react/jsx-runtime");
var u2 = __toESM(require("react"));
function T(t30, c28) {
  const o23 = u2.createContext(c28);
  function x20(r32) {
    const { children: e29, ...n23 } = r32, s25 = u2.useMemo(() => n23, Object.values(n23));
    return (0, import_jsx_runtime2.jsx)(o23.Provider, { value: s25, children: e29 });
  }
  __name(x20, "x");
  function i24(r32) {
    const e29 = u2.useContext(o23);
    if (e29)
      return e29;
    if (c28 !== void 0)
      return c28;
    throw new Error(`\`${r32}\` must be used within \`${t30}\``);
  }
  __name(i24, "i");
  return x20.displayName = `${t30}Provider`, [x20, i24];
}
__name(T, "T");
function V(t30, c28 = []) {
  let o23 = [];
  function x20(r32, e29) {
    const n23 = u2.createContext(e29), s25 = o23.length;
    o23 = [...o23, e29];
    function d21(l27) {
      const { scope: p27, children: a19, ...C16 } = l27, f25 = (p27 == null ? void 0 : p27[t30][s25]) || n23, y15 = u2.useMemo(() => C16, Object.values(C16));
      return (0, import_jsx_runtime2.jsx)(f25.Provider, { value: y15, children: a19 });
    }
    __name(d21, "d");
    function S19(l27, p27, a19) {
      const C16 = (p27 == null ? void 0 : p27[t30][s25]) || n23, f25 = u2.useContext(C16);
      if (f25)
        return f25;
      if (e29 !== void 0)
        return e29;
      const y15 = `\`${l27}\` must be used within \`${r32}\``;
      if (a19 != null && a19.fallback)
        return (a19 == null ? void 0 : a19.warn) !== false && console.warn(y15), a19.fallback;
      throw new Error(y15);
    }
    __name(S19, "S");
    return d21.displayName = `${r32}Provider`, [d21, S19];
  }
  __name(x20, "x");
  const i24 = /* @__PURE__ */ __name(() => {
    const r32 = o23.map((e29) => u2.createContext(e29));
    return function(n23) {
      const s25 = (n23 == null ? void 0 : n23[t30]) || r32;
      return u2.useMemo(() => ({ [`__scope${t30}`]: { ...n23, [t30]: s25 } }), [n23, s25]);
    };
  }, "i");
  return i24.scopeName = t30, [x20, v(i24, ...c28)];
}
__name(V, "V");
function v(...t30) {
  const c28 = t30[0];
  if (t30.length === 1)
    return c28;
  const o23 = /* @__PURE__ */ __name(() => {
    const x20 = t30.map((i24) => ({ useScope: i24(), scopeName: i24.scopeName }));
    return function(r32) {
      const e29 = x20.reduce((n23, { useScope: s25, scopeName: d21 }) => {
        const l27 = s25(r32)[`__scope${d21}`];
        return { ...n23, ...l27 };
      }, {});
      return u2.useMemo(() => ({ [`__scope${c28.scopeName}`]: e29 }), [e29]);
    };
  }, "o");
  return o23.scopeName = c28.scopeName, o23;
}
__name(v, "v");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_jsx_runtime12 = require("react/jsx-runtime");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var import_jsx_runtime4 = require("react/jsx-runtime");
var import_web3 = require("@tamagui/core-node");
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
function p5() {
  const e29 = (0, import_react4.useContext)(o5);
  if (!e29)
    return [true, null, e29];
  const { isPresent: u16, onExitComplete: t30, register: s25 } = e29, r32 = (0, import_react4.useId)() || "";
  return (0, import_react4.useEffect)(() => s25(r32), [r32, s25]), !u16 && t30 ? [false, () => t30 == null ? void 0 : t30(r32), e29] : [true, void 0, e29];
}
__name(p5, "p");
function x5() {
  return i4((0, import_react4.useContext)(o5));
}
__name(x5, "x");
function i4(e29) {
  return e29 === null ? true : e29.isPresent;
}
__name(i4, "i");

// node_modules/@tamagui/animate-presence/dist/esm/PresenceChild.js
var t4 = __toESM(require("react"));
var import_react5 = require("react");
var y3 = /* @__PURE__ */ __name(({ children: i24, initial: f25, isPresent: n23, onExitComplete: r32, exitVariant: a19, enterVariant: c28, presenceAffectsLayout: u16 }) => {
  const e29 = t4.useMemo(m5, []), l27 = (0, import_react5.useId)() || "", d21 = t4.useMemo(() => ({ id: l27, initial: f25, isPresent: n23, exitVariant: a19, enterVariant: c28, onExitComplete: (s25) => {
    e29.set(s25, true);
    for (const o23 of e29.values())
      if (!o23)
        return;
    r32 == null || r32();
  }, register: (s25) => (e29.set(s25, false), () => e29.delete(s25)) }), u16 ? void 0 : [n23, a19, c28]);
  return t4.useMemo(() => {
    e29.forEach((s25, o23) => e29.set(o23, false));
  }, [n23]), t4.useEffect(() => {
    !(n23 || e29.size) && (r32 == null || r32());
  }, [n23]), (0, import_jsx_runtime3.jsx)(o5.Provider, { value: d21, children: i24 });
}, "y");
function m5() {
  return /* @__PURE__ */ new Map();
}
__name(m5, "m");

// node_modules/@tamagui/animate-presence/dist/esm/AnimatePresence.js
var u3 = /* @__PURE__ */ __name((c28) => c28.key || "", "u");
var K2 = process.env.NODE_ENV !== "production";
function G2(c28, r32) {
  const n23 = K2 ? /* @__PURE__ */ new Set() : null;
  c28.forEach((a19) => {
    const s25 = u3(a19);
    K2 && n23 && n23.has(s25) && (console.warn(`Children of AnimatePresence require unique keys. "${s25}" is a duplicate.`), n23.add(s25)), r32.set(s25, a19);
  });
}
__name(G2, "G");
function T2(c28) {
  const r32 = [];
  return import_react6.Children.forEach(c28, (n23, a19) => {
    (0, import_react6.isValidElement)(n23) && (n23.key ? r32.push(n23) : (process.env.NODE_ENV === "development" && console.warn("No key given to AnimatePresence child, assigning index as key"), r32.push(import_react6.default.cloneElement(n23, { key: a19 }))));
  }), r32;
}
__name(T2, "T");
var B3 = /* @__PURE__ */ __name(({ children: c28, enterVariant: r32, exitVariant: n23, initial: a19 = true, onExitComplete: s25, exitBeforeEnter: g17, presenceAffectsLayout: h18 = true }) => {
  let v14 = (0, import_web3.useForceUpdate)();
  const A20 = (0, import_web3.useDidFinishSSR)(), N12 = (0, import_react6.useContext)(r3).forceRender;
  N12 && (v14 = N12);
  const m25 = (0, import_react6.useRef)(false), p27 = T2(c28);
  let t30 = p27;
  const o23 = /* @__PURE__ */ new Set(), l27 = (0, import_react6.useRef)(t30), y15 = (0, import_react6.useRef)(/* @__PURE__ */ new Map()).current, E18 = (0, import_react6.useRef)(true);
  (0, import_react6.useEffect)(() => (m25.current = true, () => {
    m25.current = false, E18.current = true, y15.clear(), o23.clear();
  }), []), (0, import_web3.useIsomorphicLayoutEffect)(() => {
    E18.current = false, G2(p27, y15), l27.current = t30;
  });
  const C16 = process.env.NODE_ENV === "development" ? (0, import_react6.useRef)(false) : null;
  if (E18.current)
    return (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: t30.map((e29) => (0, import_jsx_runtime4.jsx)(y3, { isPresent: Boolean(A20 ? true : m25.current), exitVariant: n23, enterVariant: r32, initial: a19 ? void 0 : false, presenceAffectsLayout: h18, children: e29 }, u3(e29))) });
  t30 = [...t30];
  const R17 = l27.current.map(u3), k17 = p27.map(u3), O12 = R17.length;
  for (let e29 = 0; e29 < O12; e29++) {
    const i24 = R17[e29];
    k17.indexOf(i24) === -1 && o23.add(i24);
  }
  return g17 && o23.size && (t30 = []), o23.forEach((e29) => {
    if (k17.indexOf(e29) !== -1)
      return;
    const i24 = y15.get(e29);
    if (!i24)
      return;
    const V15 = R17.indexOf(e29);
    t30.splice(V15, 0, (0, import_jsx_runtime4.jsx)(y3, { isPresent: false, onExitComplete: () => {
      y15.delete(e29), o23.delete(e29);
      const w23 = l27.current.findIndex((D14) => D14.key === e29);
      if (l27.current.splice(w23, 1), !o23.size) {
        if (l27.current = p27, m25.current === false)
          return;
        v14(), s25 == null || s25();
      }
    }, exitVariant: n23, enterVariant: r32, presenceAffectsLayout: h18, children: i24 }, u3(i24)));
  }), t30 = t30.map((e29) => {
    const i24 = e29.key;
    return o23.has(i24) ? e29 : (0, import_jsx_runtime4.jsx)(y3, { isPresent: true, exitVariant: n23, enterVariant: r32, presenceAffectsLayout: h18, children: e29 }, u3(e29));
  }), process.env.NODE_ENV === "development" && g17 && t30.length > 1 && C16 && !C16.current && (C16.current = true, console.log("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This can lead to odd visual behaviour.")), (0, import_jsx_runtime4.jsx)(import_jsx_runtime4.Fragment, { children: o23.size ? t30 : t30.map((e29) => (0, import_react6.cloneElement)(e29)) });
}, "B");
B3.displayName = "AnimatePresence";

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_aria_hidden = __toESM(require_cjs6());
var import_core12 = require("@tamagui/core-node");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var import_jsx_runtime5 = require("react/jsx-runtime");
var import_react_use_escape_keydown = __toESM(require_dist2());
var import_core3 = require("@tamagui/core-node");

// node_modules/@tamagui/use-event/dist/esm/useGet.js
var import_react7 = require("react");
var a4 = process.env.TAMAGUI_TARGET === "web";
var p6 = typeof window < "u";
var l8 = !a4 || p6 ? import_react7.useLayoutEffect : import_react7.useEffect;
function A4(n23, o23, s25) {
  const e29 = (0, import_react7.useRef)(o23 ?? n23);
  return l8(() => {
    e29.current = n23;
  }), (0, import_react7.useCallback)(s25 ? (...c28) => {
    var t30;
    return (t30 = e29.current) == null ? void 0 : t30.apply(null, c28);
  } : () => e29.current, []);
}
__name(A4, "A");

// node_modules/@tamagui/use-event/dist/esm/useEvent.js
function a5(n23) {
  return A4(n23, t5, true);
}
__name(a5, "a");
var t5 = /* @__PURE__ */ __name(() => {
  throw new Error("Cannot call an event handler while rendering.");
}, "t");

// node_modules/@tamagui/dismissable/dist/esm/Dismissable.js
var s6 = __toESM(require("react"));
var _2 = __toESM(require("react-dom"));
function k2(e29, o23) {
  e29 && _2.flushSync(() => e29.dispatchEvent(o23));
}
__name(k2, "k");
var z3 = "Dismissable";
var D2 = "dismissable.update";
var X = "dismissable.pointerDownOutside";
var Y = "dismissable.focusOutside";
var g3;
var w3 = s6.createContext({ layers: /* @__PURE__ */ new Set(), layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(), branches: /* @__PURE__ */ new Set() });
var T3 = s6.forwardRef((e29, o23) => {
  const { disableOutsidePointerEvents: t30 = false, forceUnmount: i24, onEscapeKeyDown: r32, onPointerDownOutside: c28, onFocusOutside: l27, onInteractOutside: E18, onDismiss: u16, ...f25 } = e29, a19 = s6.useContext(w3), [d21, H14] = s6.useState(null), [, M17] = s6.useState({}), S19 = c5(o23, (n23) => H14(n23)), h18 = Array.from(a19.layers), [W14] = [...a19.layersWithOutsidePointerEventsDisabled].slice(-1), N12 = h18.indexOf(W14), b17 = d21 ? h18.indexOf(d21) : -1, A20 = a19.layersWithOutsidePointerEventsDisabled.size > 0, y15 = b17 >= N12, I12 = G3((n23) => {
    const v14 = n23.target, C16 = [...a19.branches].some((m25) => m25.contains(v14));
    !y15 || C16 || (c28 == null || c28(n23), E18 == null || E18(n23), n23.defaultPrevented || u16 == null || u16());
  }), P17 = J2((n23) => {
    const v14 = n23.target;
    [...a19.branches].some((m25) => m25.contains(v14)) || (l27 == null || l27(n23), E18 == null || E18(n23), n23.defaultPrevented || u16 == null || u16());
  });
  return (0, import_react_use_escape_keydown.useEscapeKeydown)((n23) => {
    b17 === a19.layers.size - 1 && (r32 == null || r32(n23), !n23.defaultPrevented && u16 && (n23.preventDefault(), u16()));
  }), s6.useEffect(() => {
    if (d21)
      return t30 && (a19.layersWithOutsidePointerEventsDisabled.size === 0 && (g3 = document.body.style.pointerEvents, document.body.style.pointerEvents = "none"), a19.layersWithOutsidePointerEventsDisabled.add(d21)), a19.layers.add(d21), x7(), () => {
        t30 && a19.layersWithOutsidePointerEventsDisabled.size === 1 && (document.body.style.pointerEvents = g3);
      };
  }, [d21, t30, a19]), s6.useEffect(() => {
    if (!i24)
      return () => {
        d21 && (a19.layers.delete(d21), a19.layersWithOutsidePointerEventsDisabled.delete(d21), x7());
      };
  }, [d21, a19, i24]), s6.useEffect(() => {
    const n23 = /* @__PURE__ */ __name(() => {
      M17({});
    }, "n");
    return document.addEventListener(D2, n23), () => document.removeEventListener(D2, n23);
  }, []), (0, import_jsx_runtime5.jsx)("div", { ...f25, ref: S19, style: { display: "contents", pointerEvents: A20 ? y15 ? "auto" : "none" : void 0, ...e29.style }, onFocusCapture: (0, import_core3.composeEventHandlers)(e29.onFocusCapture, P17.onFocusCapture), onBlurCapture: (0, import_core3.composeEventHandlers)(e29.onBlurCapture, P17.onBlurCapture), onPointerDownCapture: (0, import_core3.composeEventHandlers)(e29.onPointerDownCapture, I12.onPointerDownCapture) });
});
T3.displayName = z3;
var q2 = "DismissableBranch";
var R2 = s6.forwardRef((e29, o23) => {
  const t30 = s6.useContext(w3), i24 = s6.useRef(null), r32 = c5(o23, i24);
  return s6.useEffect(() => {
    const c28 = i24.current;
    if (c28)
      return t30.branches.add(c28), () => {
        t30.branches.delete(c28);
      };
  }, [t30.branches]), (0, import_jsx_runtime5.jsx)("div", { style: { display: "contents" }, ...e29, ref: r32 });
});
R2.displayName = q2;
function G3(e29) {
  const o23 = a5(e29), t30 = s6.useRef(false), i24 = s6.useRef(() => {
  });
  return s6.useEffect(() => {
    const r32 = /* @__PURE__ */ __name((l27) => {
      if (l27.target && !t30.current) {
        let f25 = /* @__PURE__ */ __name(function() {
          B4(X, o23, u16, { discrete: true });
        }, "f");
        var E18 = f25;
        const u16 = { originalEvent: l27 };
        l27.pointerType === "touch" ? (document.removeEventListener("click", i24.current), i24.current = f25, document.addEventListener("click", i24.current, { once: true })) : f25();
      }
      t30.current = false;
    }, "r"), c28 = setTimeout(() => {
      document.addEventListener("pointerdown", r32);
    }, 0);
    return () => {
      window.clearTimeout(c28), document.removeEventListener("pointerdown", r32), document.removeEventListener("click", i24.current);
    };
  }, [o23]), { onPointerDownCapture: () => t30.current = true };
}
__name(G3, "G");
function J2(e29) {
  const o23 = a5(e29), t30 = s6.useRef(false);
  return s6.useEffect(() => {
    const i24 = /* @__PURE__ */ __name((r32) => {
      r32.target && !t30.current && B4(Y, o23, { originalEvent: r32 }, { discrete: false });
    }, "i");
    return document.addEventListener("focusin", i24), () => document.removeEventListener("focusin", i24);
  }, [o23]), { onFocusCapture: () => t30.current = true, onBlurCapture: () => t30.current = false };
}
__name(J2, "J");
function x7() {
  const e29 = new CustomEvent(D2);
  document.dispatchEvent(e29);
}
__name(x7, "x");
function B4(e29, o23, t30, { discrete: i24 }) {
  const r32 = t30.originalEvent.target, c28 = new CustomEvent(e29, { bubbles: false, cancelable: true, detail: t30 });
  o23 && r32.addEventListener(e29, o23, { once: true }), i24 ? k2(r32, c28) : r32.dispatchEvent(c28);
}
__name(B4, "B");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var import_focus_scope = __toESM(require_cjs9());

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
var w4 = /* @__PURE__ */ __name((o23, t30) => {
  if (!o23)
    return;
  const { tokens: a19 } = t30, e29 = a19.size[o23], n23 = (0, import_core4.isVariable)(e29) ? +e29.val : o23;
  return u5(n23, t30);
}, "w");
var u5 = /* @__PURE__ */ __name((o23, { theme: t30, tokens: a19 }) => {
  let e29 = 0;
  if (o23 === true) {
    const r32 = (0, import_core4.getVariableValue)(a19.size.true);
    typeof r32 == "number" ? e29 = r32 : e29 = 10;
  } else
    e29 = +o23;
  process.env.NODE_ENV === "development" && e29 !== null && isNaN(e29) && console.warn("NaN shadow", e29, o23);
  const [n23, s25] = [Math.round(e29 / 4 + 1), Math.round(e29 / 2 + 2)];
  return { shadowColor: t30.shadowColor, shadowRadius: s25, shadowOffset: { height: n23, width: 0 } };
}, "u");

// node_modules/@tamagui/stacks/dist/esm/Stacks.js
var a6 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
var o6 = { fullscreen: { true: a6 }, elevation: { "...size": w4 } };
var c7 = (0, import_core5.styled)(import_core5.Stack, { flexDirection: "column", name: "YStack", variants: o6 });
var i7 = (0, import_core5.styled)(import_core5.Stack, { flexDirection: "row", name: "XStack", variants: o6 });
var l9 = (0, import_core5.styled)(c7, { name: "ZStack", position: "relative" }, { neverFlatten: true, isZStack: true });

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var import_core6 = require("@tamagui/core-node");
var import_get_button_sized = __toESM(require_cjs11());

// node_modules/@tamagui/stacks/dist/esm/variants.js
var u6 = { true: (t30, r32) => w4(r32.props.size, r32) };
var n7 = /* @__PURE__ */ __name((t30, { props: r32 }) => ({ borderWidth: typeof t30 == "number" ? t30 : 1, borderColor: "$borderColor", ...r32.hoverTheme && { hoverStyle: { borderColor: "$borderColorHover" } }, ...r32.pressTheme && { pressStyle: { borderColor: "$borderColorPress" } }, ...r32.focusTheme && { focusStyle: { borderColor: "$borderColorFocus" } } }), "n");
var l10 = { true: (t30, r32) => {
  const { tokens: e29, props: o23 } = r32;
  return { padding: e29.space[o23.size] || e29.space.$true };
} };
var c8 = { true: (t30, r32) => {
  const { tokens: e29, props: o23 } = r32;
  return { borderRadius: e29.radius[o23.size] || e29.radius.$true };
} };
var b4 = { true: (t30, { props: r32, tokens: e29 }) => {
  const o23 = e29.size[r32.size];
  return { width: o23, height: o23, maxWidth: o23, maxHeight: o23, minWidth: o23, minHeight: o23, borderRadius: 1e5, padding: 0 };
} };
var i8 = { true: { hoverStyle: { backgroundColor: "$backgroundHover", borderColor: "$borderColorHover" } }, false: {} };
var a7 = { true: { cursor: "pointer", pressStyle: { backgroundColor: "$backgroundPress", borderColor: "$borderColorPress" } }, false: {} };
var p8 = { true: { focusStyle: { backgroundColor: "$backgroundFocus", borderColor: "$borderColorFocus" } }, false: {} };

// node_modules/@tamagui/stacks/dist/esm/SizableStack.js
var k3 = (0, import_core6.styled)(i7, { name: "SizableStack", variants: { unstyled: { true: { hoverTheme: false, pressTheme: false, focusTheme: false, elevate: false, bordered: false }, false: { backgroundColor: "$background", flexShrink: 1 } }, hoverTheme: i8, pressTheme: a7, focusTheme: p8, circular: b4, elevate: u6, bordered: n7, size: { "...size": import_get_button_sized.getButtonSized } } });

// node_modules/@tamagui/stacks/dist/esm/ThemeableStack.js
var import_core7 = require("@tamagui/core-node");
var e11 = { backgroundColor: "transparent", borderColor: "transparent", shadowColor: "transparent" };
var k4 = (0, import_core7.styled)(c7, { name: "SizableStack", variants: { backgrounded: { true: { backgroundColor: "$background" } }, radiused: c8, hoverTheme: i8, pressTheme: a7, focusTheme: p8, circular: b4, padded: l10, elevate: u6, bordered: n7, transparent: { true: { backgroundColor: "transparent" } }, chromeless: { true: e11, all: { ...e11, hoverStyle: e11, pressStyle: e11, focusStyle: e11 } } } });

// node_modules/@tamagui/portal/dist/esm/Portal.js
var l11 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var x8 = /* @__PURE__ */ __name(({ host: o23 = ((n23) => (n23 = globalThis.document) == null ? void 0 : n23.body)(), ...r32 }) => {
  const s25 = (0, import_jsx_runtime6.jsx)(c7, { contain: "strict", fullscreen: true, position: import_core8.isWeb ? "fixed" : "absolute", maxWidth: import_core8.isWeb ? "100vw" : "100%", maxHeight: import_core8.isWeb ? "100vh" : "100%", pointerEvents: "none", ...r32 }), [e29, i24] = l11.useState(null);
  return (0, import_core8.useIsomorphicLayoutEffect)(() => {
    i24(o23);
  }, [o23]), e29 ? (0, import_react_dom.createPortal)(s25, e29) : null;
}, "x");

// node_modules/@tamagui/portal/dist/esm/GorhomPortal.js
var import_jsx_runtime7 = require("react/jsx-runtime");
var import_core9 = require("@tamagui/core-node");
var import_react8 = __toESM(require("react"));
var y4 = ((r32) => (r32[r32.REGISTER_HOST = 0] = "REGISTER_HOST", r32[r32.DEREGISTER_HOST = 1] = "DEREGISTER_HOST", r32[r32.ADD_UPDATE_PORTAL = 2] = "ADD_UPDATE_PORTAL", r32[r32.REMOVE_PORTAL = 3] = "REMOVE_PORTAL", r32))(y4 || {});
var f6 = {};
var E3 = /* @__PURE__ */ __name((e29, t30) => (t30 in e29 || (e29[t30] = []), e29), "E");
var L3 = /* @__PURE__ */ __name((e29, t30) => (delete e29[t30], e29), "L");
var M3 = /* @__PURE__ */ __name((e29, t30, o23, n23) => {
  t30 in e29 || (e29 = E3(e29, t30));
  const r32 = e29[t30].findIndex((s25) => s25.name === o23);
  return r32 !== -1 ? e29[t30][r32].node = n23 : e29[t30].push({ name: o23, node: n23 }), e29;
}, "M");
var G4 = /* @__PURE__ */ __name((e29, t30, o23) => {
  if (!(t30 in e29))
    return console.log(`Failed to remove portal '${o23}', '${t30}' was not registered!`), e29;
  const n23 = e29[t30].findIndex((r32) => r32.name === o23);
  return n23 !== -1 && e29[t30].splice(n23, 1), e29;
}, "G");
var b5 = /* @__PURE__ */ __name((e29, t30) => {
  const { type: o23 } = t30;
  switch (o23) {
    case 0:
      return E3({ ...e29 }, t30.hostName);
    case 1:
      return L3({ ...e29 }, t30.hostName);
    case 2:
      return M3({ ...e29 }, t30.hostName, t30.portalName, t30.node);
    case 3:
      return G4({ ...e29 }, t30.hostName, t30.portalName);
    default:
      return e29;
  }
}, "b");
var v2 = (0, import_react8.createContext)(null);
var O3 = (0, import_react8.createContext)(null);
var V2 = /* @__PURE__ */ __name((e29) => {
  const t30 = (0, import_react8.useContext)(v2);
  if (t30 === null)
    throw new Error("'PortalStateContext' cannot be null, please add 'PortalProvider' to the root component.");
  return t30[e29] || [];
}, "V");
var h4 = /* @__PURE__ */ __name((e29 = "root") => {
  const t30 = (0, import_react8.useContext)(O3);
  if (t30 === null)
    throw new Error("'PortalDispatchContext' cannot be null, please add 'PortalProvider' to the root component.");
  const o23 = (0, import_react8.useCallback)(() => {
    t30({ type: 0, hostName: e29 });
  }, []), n23 = (0, import_react8.useCallback)(() => {
    t30({ type: 1, hostName: e29 });
  }, []), r32 = (0, import_react8.useCallback)((a19, i24) => {
    t30({ type: 2, hostName: e29, portalName: a19, node: i24 });
  }, []), s25 = (0, import_react8.useCallback)((a19) => {
    t30({ type: 3, hostName: e29, portalName: a19 });
  }, []);
  return { registerHost: o23, deregisterHost: n23, addPortal: r32, updatePortal: r32, removePortal: s25 };
}, "h");
var k5 = /* @__PURE__ */ __name(({ rootHostName: e29 = "root", shouldAddRootHost: t30 = true, children: o23 }) => {
  const [n23, r32] = (0, import_react8.useReducer)(b5, f6), s25 = (0, import_react8.useMemo)(() => (i24) => {
    (0, import_react8.startTransition)(() => {
      r32(i24);
    });
  }, [r32]);
  return (0, import_jsx_runtime7.jsx)(O3.Provider, { value: s25, children: (0, import_jsx_runtime7.jsxs)(v2.Provider, { value: n23, children: [o23, t30 && (0, import_jsx_runtime7.jsx)(x9, { name: e29 })] }) });
}, "k");
var F3 = (0, import_react8.memo)(k5);
F3.displayName = "PortalProvider";
var $ = /* @__PURE__ */ __name((e29) => (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: e29 }), "$");
var q3 = /* @__PURE__ */ __name((e29) => {
  const { name: t30, forwardProps: o23, render: n23 = $ } = e29, r32 = !(0, import_core9.useDidFinishSSR)(), s25 = V2(t30), { registerHost: a19, deregisterHost: i24 } = h4(e29.name);
  return (0, import_react8.useEffect)(() => {
    if (!r32)
      return a19(), () => {
        i24();
      };
  }, [r32]), n23(o23 ? s25.map((l27) => {
    let c28 = l27.node;
    return o23 ? import_react8.default.Children.map(c28, (d21) => import_react8.default.isValidElement(d21) ? import_react8.default.cloneElement(d21, { key: d21.key, ...o23 }) : d21) : c28;
  }) : s25.map((l27) => l27.node));
}, "q");
var x9 = (0, import_react8.memo)(q3);
x9.displayName = "PortalHost";
var z4 = /* @__PURE__ */ __name((e29) => {
  const { name: t30, hostName: o23, handleOnMount: n23, handleOnUnmount: r32, handleOnUpdate: s25, children: a19 } = e29, { addPortal: i24, removePortal: l27 } = h4(o23), c28 = (0, import_react8.useId)(), d21 = t30 || c28, H14 = (0, import_core9.useEvent)(() => {
    n23 ? n23(() => i24(d21, a19)) : i24(d21, a19);
  }), N12 = (0, import_core9.useEvent)(() => {
    r32 ? r32(() => l27(d21)) : l27(d21);
  }), S19 = (0, import_core9.useEvent)(() => {
    s25 ? s25(() => i24(d21, a19)) : i24(d21, a19);
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
function o7(t30) {
  if (typeof document > "u")
    return (0, import_react9.useMemo)(() => t30(), []);
  const e29 = (0, import_react9.useRef)();
  return e29.current || (e29.current = { v: t30() }), e29.current.v;
}
__name(o7, "o");

// node_modules/@tamagui/use-controllable-state/dist/esm/useControllableState.js
var import_react10 = require("react");
var g5 = /* @__PURE__ */ __name((t30) => t30(), "g");
function A6({ prop: t30, defaultProp: f25, onChange: l27, strategy: T16 = "prop-wins", preventUpdate: d21, transition: p27 }) {
  const [e29, r32] = (0, import_react10.useState)(t30 ?? f25), n23 = (0, import_react10.useRef)(e29), o23 = T16 === "prop-wins" && t30 !== void 0, C16 = o23 ? t30 : e29, a19 = a5(l27 || v3), i24 = p27 ? import_react10.startTransition : g5;
  (0, import_react10.useEffect)(() => {
    t30 !== void 0 && (n23.current = t30, i24(() => {
      r32(t30);
    }));
  }, [t30]), (0, import_react10.useEffect)(() => {
    o23 || e29 !== n23.current && (n23.current = e29, a19(e29));
  }, [a19, e29, o23]);
  const b17 = a5((s25) => {
    if (!d21)
      if (o23) {
        const S19 = typeof s25 == "function" ? s25(n23.current) : s25;
        a19(S19);
      } else
        i24(() => {
          r32(s25);
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
var n8 = /* @__PURE__ */ __name(() => {
  const [o23, e29] = (0, import_react11.useState)(false);
  return (0, import_react11.useEffect)(() => {
    const i24 = import_react_native2.Keyboard.addListener("keyboardDidShow", () => {
      e29(true);
    }), d21 = import_react_native2.Keyboard.addListener("keyboardDidHide", () => {
      e29(false);
    });
    return () => {
      d21.remove(), i24.remove();
    };
  }, []), o23;
}, "n");

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var import_react13 = __toESM(require("react"));
var import_react_native4 = require("react-native-web-lite");

// node_modules/@tamagui/sheet/dist/esm/constants.js
var e13 = "Sheet";
var o8 = "SheetHandle";

// node_modules/@tamagui/sheet/dist/esm/SheetContext.js
var [o9, d6] = V(e13);
var [h6, P6] = o9(e13, {});

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_jsx_runtime9 = require("react/jsx-runtime");
var import_core10 = require("@tamagui/core-node");

// node_modules/@tamagui/scroll-view/dist/esm/ScrollView.js
var import_web4 = require("@tamagui/core-node");
var import_react_native3 = require("react-native-web-lite");
(0, import_web4.setupReactNative)({ ScrollView: import_react_native3.ScrollView });
var a8 = (0, import_web4.styled)(import_react_native3.ScrollView, { name: "ScrollView", scrollEnabled: true, variants: { fullscreen: { true: a6 } } }, { isReactNative: true });

// node_modules/@tamagui/sheet/dist/esm/SheetScrollView.js
var import_react12 = require("react");
var D4 = "SheetScrollView";
var W3 = (0, import_react12.forwardRef)(({ __scopeSheet: c28, children: s25, ...i24 }, g17) => {
  const { scrollBridge: r32, position: d21, snapPoints: u16, frameSize: S19, open: p27 } = P6(D4, c28), f25 = (0, import_react12.useRef)(null), m25 = u16[d21] ?? 0, [n23, y15] = (0, import_react12.useState)(0), l27 = 100 - m25;
  p27 && l27 !== n23 && y15(l27);
  const e29 = (0, import_react12.useRef)({ lastPageY: 0, dragAt: 0, dys: [], isScrolling: false, isDragging: false }), Y11 = /* @__PURE__ */ __name(() => {
    if (!e29.current.isDragging)
      return;
    e29.current.isDragging = false, r32.scrollStartY = -1, e29.current.isScrolling = false;
    let o23 = 0;
    if (e29.current.dys.length) {
      const t30 = e29.current.dys.slice(-10);
      o23 = (t30.length ? t30.reduce((h18, w23) => h18 + w23, 0) : 0) / t30.length * 0.04;
    }
    e29.current.dys = [], r32.release({ dragAt: e29.current.dragAt, vy: o23 });
  }, "Y");
  return (0, import_jsx_runtime9.jsxs)(a8, { ref: (0, import_core10.composeRefs)(f25, g17), flex: 1, scrollEventThrottle: 8, onScroll: (o23) => {
    const { y: t30 } = o23.nativeEvent.contentOffset;
    r32.y = t30, t30 > 0 && (r32.scrollStartY = -1);
  }, onStartShouldSetResponder: () => (r32.scrollStartY = -1, e29.current.isDragging = true, true), onMoveShouldSetResponder: () => false, onResponderRelease: Y11, className: "_ovs-contain", ...i24, children: [(0, import_react12.useMemo)(() => s25, [s25]), (0, import_jsx_runtime9.jsx)(import_core10.Stack, { height: n23 / 100 * S19, width: 0 })] });
});

// node_modules/@tamagui/sheet/dist/esm/Sheet.js
var Ve = (0, import_core11.styled)(i7, { name: o8, height: 10, borderRadius: 100, backgroundColor: "$background", zIndex: 10, marginHorizontal: "35%", marginBottom: "$2", opacity: 0.5, hoverStyle: { opacity: 0.7 }, variants: { open: { true: { pointerEvents: "auto" }, false: { opacity: 0, pointerEvents: "none" } } } });
var Dt = Ve.extractable(({ __scopeSheet: n23, ...o23 }) => {
  const t30 = P6(o8, n23);
  return (0, import_jsx_runtime10.jsx)(Ve, { onPress: () => {
    const i24 = t30.snapPoints.length + (t30.dismissOnSnapToBottom ? -1 : 0), s25 = (t30.position + 1) % i24;
    t30.setPosition(s25);
  }, open: t30.open, ...o23 });
});
var Oe = "SheetOverlay";
var ke = (0, import_core11.styled)(k4, { name: Oe, fullscreen: true, backgrounded: true, opacity: 0.5, zIndex: 0, variants: { closed: { true: { opacity: 0, pointerEvents: "none" }, false: { pointerEvents: "auto" } } } });
var Tt = ke.extractable(({ __scopeSheet: n23, ...o23 }) => {
  const t30 = P6(Oe, n23);
  return (0, import_jsx_runtime10.jsx)(ke, { closed: !t30.open || t30.hidden, ...o23, onPress: (0, import_core11.mergeEvent)(o23.onPress, t30.dismissOnOverlayPress ? () => {
    t30.setOpen(false);
  } : void 0) });
});
var N2 = import_core11.isClient ? document.createElement("style") : null;
N2 && document.head.appendChild(N2);
var Ne = (0, import_core11.styled)(c7, { name: e13, flex: 1, backgroundColor: "$background", borderTopLeftRadius: "$true", borderTopRightRadius: "$true", width: "100%", maxHeight: "100%", overflow: "hidden", pointerEvents: "auto" });
var It = Ne.extractable((0, import_react13.forwardRef)(({ __scopeSheet: n23, ...o23 }, t30) => {
  const i24 = P6(e13, n23), s25 = c5(t30, i24.contentRef);
  return (0, import_jsx_runtime10.jsx)(Ne, { ref: s25, ...o23 });
}));
var Y2 = 1e4;
var Ht = { Handle: Dt, Frame: It, Overlay: Tt, ScrollView: W3 };
var Ae = (0, import_react13.createContext)({ zIndex: 40 });
var De = /* @__PURE__ */ __name(() => {
  const n23 = (0, import_react13.useContext)(He), o23 = n23 == null ? void 0 : n23.hidden, t30 = o23 && (n23 == null ? void 0 : n23.open);
  return { controller: n23, isHidden: o23, isShowingNonSheet: t30 };
}, "De");
var Mt = (0, import_core11.withStaticProperties)((0, import_react13.forwardRef)(function(o23, t30) {
  const i24 = (0, import_core11.useDidFinishSSR)(), { isShowingNonSheet: s25 } = De();
  return s25 || !i24 ? null : (0, import_jsx_runtime10.jsx)(Ft, { ref: t30, ...o23 });
}), Ht);
var Ft = (0, import_core11.themeable)((0, import_react13.forwardRef)(function(o23, t30) {
  const i24 = (0, import_react13.useContext)(Ae), { isHidden: s25, controller: l27 } = De(), { __scopeSheet: B12, snapPoints: A20 = [80], open: Fe3, defaultOpen: Yt, children: _e3, position: Ye3, onPositionChange: Be4, onOpenChange: L15, defaultPosition: Le4, dismissOnOverlayPress: ze5 = true, animationConfig: Ge3, dismissOnSnapToBottom: b17 = false, forceRemoveScrollEnabled: $e3 = null, disableDrag: Ke3, modal: D14 = false, zIndex: T16 = i24.zIndex + 1, moveOnKeyboardChange: Xe2 = false, portalProps: Ue4 } = o23;
  process.env.NODE_ENV === "development" && A20.some((e29) => e29 < 0 || e29 > 100) && console.warn("\u26A0\uFE0F Invalid snapPoint given, snapPoints must be between 0 and 100, equal to percent height of frame");
  const ne6 = (0, import_react13.useRef)(null), We3 = c5(t30, ne6), y15 = (0, import_core11.useAnimationDriver)();
  if (!y15)
    throw new Error("Must set animations in tamagui.config.ts");
  const oe9 = Ke3 ?? (l27 == null ? void 0 : l27.disableDrag), Ze3 = n8(), qe3 = (0, import_core11.useThemeName)(), re5 = import_react13.default.useRef(null), u16 = o7(() => ({ enabled: false, y: 0, paneY: 0, paneMinY: 0, scrollStartY: -1, drag: () => {
  }, release: () => {
  }, scrollLock: false })), Je3 = /* @__PURE__ */ __name((e29) => {
    var r32;
    (r32 = l27 == null ? void 0 : l27.onOpenChange) == null || r32.call(l27, e29), L15 == null || L15(e29);
  }, "Je"), [a19, z14] = A6({ prop: (l27 == null ? void 0 : l27.open) ?? Fe3, defaultProp: true, onChange: Je3, strategy: "most-recent-wins", transition: true }), [d21, Qe2] = (0, import_react13.useState)(0), g17 = (0, import_react13.useMemo)(() => b17 ? [...A20, 0] : A20, [JSON.stringify(A20), b17]), [je3, G16] = A6({ prop: Ye3, defaultProp: Le4 || (a19 ? 0 : -1), onChange: Be4, strategy: "most-recent-wins", transition: true }), C16 = a19 === false ? -1 : je3;
  a19 && b17 && C16 === g17.length - 1 && G16(0);
  const x20 = (0, import_react13.useCallback)((e29) => {
    b17 && e29 === g17.length - 1 ? z14(false) : G16(e29);
  }, [b17, g17.length, G16, z14]), { useAnimatedNumber: et, useAnimatedNumberReaction: tt, useAnimatedNumberStyle: nt } = y15, c28 = et(Y2), v14 = (0, import_react13.useRef)(0);
  tt({ value: c28, hostRef: ne6 }, (e29) => {
    y15.isReactNative && (v14.current = e29, u16.paneY = e29);
  });
  function se6() {
    c28.stop(), u16.onFinishAnimate && (u16.onFinishAnimate(), u16.onFinishAnimate = void 0);
  }
  __name(se6, "se");
  const ae4 = a19 && C16 < 0;
  (0, import_react13.useEffect)(() => {
    ae4 && x20(0);
  }, [x20, ae4]);
  const R17 = (0, import_react13.useMemo)(() => g17.map((e29) => _t(e29, d21)), [d21, g17]), [ie5, le5] = (0, import_react13.useState)(a19 ? 1 : 0);
  a19 && ie5 === 0 && le5(1), (0, import_react13.useEffect)(() => {
    if (!a19) {
      const e29 = setTimeout(() => {
        le5(0);
      }, 400);
      return () => {
        clearTimeout(e29);
      };
    }
  }, [a19]);
  const I12 = (0, import_core11.useEvent)((e29) => {
    const r32 = c28.getValue();
    if (s25 && a19 || !r32 || d21 === 0)
      return;
    const f25 = s25 || e29 === -1 ? d21 === 0 ? Y2 : d21 : R17[e29];
    if (v14.current === f25)
      return;
    if (se6(), s25) {
      c28.setValue(f25, { type: "timing", duration: 0 }), v14.current = f25;
      return;
    }
    const w23 = v14.current === Y2;
    c28.setValue(f25, { ...Ge3, type: "spring", overshootClamping: w23 });
  });
  (0, import_core11.useIsomorphicLayoutEffect)(() => {
    I12(C16);
  }, [s25, d21, C16, I12]);
  const [$8, ot] = (0, import_react13.useState)(false), ce5 = !import_core11.isWeb && D14 && $8, H14 = (0, import_react13.useContext)(Te), rt = (0, import_react13.useCallback)((e29) => {
    ot(e29);
  }, []), K11 = (0, import_react13.useMemo)(() => {
    if (oe9 || !d21 || $8)
      return;
    const e29 = R17[0];
    u16.paneMinY = e29;
    let r32 = v14.current;
    function p27(S19) {
      N2 && (S19 ? N2.innerText = ":root * { user-select: none !important; -webkit-user-select: none !important; }" : N2.innerText = "");
    }
    __name(p27, "p");
    const f25 = /* @__PURE__ */ __name(({ vy: S19, dragAt: m25 }) => {
      X9 = false, he5 = false, p27(false);
      const P17 = m25 + r32 + d21 * S19 * 0.2;
      let O12 = 0, Se4 = 1 / 0;
      for (let M17 = 0; M17 < R17.length; M17++) {
        const U10 = R17[M17], Pe8 = P17 > U10 ? P17 - U10 : U10 - P17;
        Pe8 < Se4 && (Se4 = Pe8, O12 = M17);
      }
      x20(O12), I12(O12);
    }, "f"), w23 = /* @__PURE__ */ __name((S19, m25) => {
      f25({ vy: m25.vy, dragAt: m25.dy });
    }, "w");
    let he5 = false;
    const dt = /* @__PURE__ */ __name((S19, { dy: m25 }) => {
      const V15 = u16.y !== 0, P17 = m25 < 0, O12 = u16.paneY - 5 <= u16.paneMinY;
      return V15 ? (he5 = true, false) : O12 && !V15 && P17 ? false : Math.abs(m25) > 5;
    }, "dt"), fe5 = /* @__PURE__ */ __name(() => {
      p27(true), se6(), r32 = v14.current;
    }, "fe");
    let X9 = false;
    return u16.drag = (S19) => {
      X9 || (X9 = true, fe5());
      const m25 = S19 + r32;
      c28.setValue(Ie(m25, e29), { type: "direct" });
    }, u16.release = f25, import_react_native4.PanResponder.create({ onMoveShouldSetPanResponder: dt, onPanResponderGrant: fe5, onPanResponderMove: (S19, { dy: m25 }) => {
      const V15 = m25 + r32, P17 = Ie(V15, e29);
      c28.setValue(P17, { type: "direct" });
    }, onPanResponderEnd: w23, onPanResponderTerminate: w23, onPanResponderRelease: w23 });
  }, [oe9, $8, I12, d21, R17, x20]);
  let ue3 = null, de7 = null, pe4 = null;
  import_react13.default.Children.forEach(_e3, (e29) => {
    var r32, p27;
    if ((0, import_react13.isValidElement)(e29))
      switch ((p27 = (r32 = e29.type) == null ? void 0 : r32.staticConfig) == null ? void 0 : p27.componentName) {
        case "SheetHandle":
          ue3 = e29;
          break;
        case "Sheet":
          pe4 = e29;
          break;
        case "SheetOverlay":
          de7 = e29;
          break;
        default:
          console.warn("Warning: passed invalid child to Sheet", e29);
      }
  });
  const st = nt(c28, (e29) => ({ transform: [{ translateY: d21 === 0 ? Y2 : e29 }] })), E18 = (0, import_react13.useRef)(null);
  (0, import_react13.useEffect)(() => {
    if (import_core11.isWeb || !Xe2)
      return;
    const e29 = import_react_native4.Keyboard.addListener("keyboardDidShow", (p27) => {
      E18.current === null && (E18.current = c28.getValue(), c28.setValue(Math.max(c28.getValue() - p27.endCoordinates.height, 0)));
    }), r32 = import_react_native4.Keyboard.addListener("keyboardDidHide", () => {
      E18.current !== null && (c28.setValue(E18.current), E18.current = null);
    });
    return () => {
      r32.remove(), e29.remove();
    };
  }, []);
  const at = y15.NumberView ?? y15.View;
  (0, import_core11.useIsomorphicLayoutEffect)(() => {
    if (H14 && a19)
      return H14(true), () => {
        H14(false);
      };
  }, [H14, a19]);
  const it = (0, import_react13.useMemo)(() => ({ zIndex: T16 }), [T16]), lt = (0, import_react13.useCallback)((e29) => {
    var p27;
    let r32 = (p27 = e29.nativeEvent) == null ? void 0 : p27.layout.height;
    import_core11.isWeb && import_core11.isTouchable && !a19 && (r32 += 100), r32 && Qe2(() => r32);
  }, [Ze3]), ct = $e3 ?? (a19 && D14), me5 = (0, import_jsx_runtime10.jsx)(Ae.Provider, { value: it, children: (0, import_jsx_runtime10.jsxs)(h6, { modal: D14, contentRef: re5, frameSize: d21, dismissOnOverlayPress: ze5, dismissOnSnapToBottom: b17, open: a19, hidden: !!s25, scope: B12, position: C16, snapPoints: g17, setPosition: x20, setOpen: z14, scrollBridge: u16, children: [ce5 ? null : de7, (0, import_jsx_runtime10.jsxs)(at, { ref: We3, ...K11 == null ? void 0 : K11.panHandlers, onLayout: lt, pointerEvents: a19 && !ce5 ? "auto" : "none", animation: o23.animation, style: [{ position: "absolute", zIndex: T16, width: "100%", height: "100%", opacity: ie5 }, st], children: [ue3, (0, import_jsx_runtime10.jsx)(r7, { forwardProps: true, enabled: ct, allowPinchZoom: true, shards: [re5], removeScrollBar: false, children: pe4 })] })] }) }), ut = (0, import_react13.useContext)(a3);
  if (D14) {
    const e29 = (0, import_jsx_runtime10.jsx)(x8, { zIndex: T16, ...Ue4, children: (0, import_jsx_runtime10.jsx)(import_core11.Theme, { forceClassName: true, name: qe3, children: (0, import_jsx_runtime10.jsx)(a3.Provider, { value: ut, children: me5 }) }) });
    return import_core11.isWeb ? e29 : (0, import_jsx_runtime10.jsx)(Te.Provider, { value: rt, children: e29 });
  }
  return me5;
}), { componentName: "Sheet" });
var Te = (0, import_react13.createContext)(null);
var Sn = Mt;
function _t(n23, o23) {
  if (!o23)
    return 0;
  if (n23 === void 0)
    return console.warn("No snapPoint"), 0;
  const t30 = n23 / 100;
  return Math.round(o23 - t30 * o23);
}
__name(_t, "_t");
function Ie(n23, o23, t30 = 25) {
  if (n23 < o23) {
    const i24 = o23 - n23, s25 = Math.min(t30, i24) / t30, B12 = -(1.1 - Math.pow(0.1, s25)) * t30;
    return o23 + B12;
  }
  return n23;
}
__name(Ie, "Ie");
var He = (0, import_react13.createContext)(null);
var Pn = /* @__PURE__ */ __name(({ children: n23, onOpenChange: o23, ...t30 }) => {
  const i24 = (0, import_core11.useEvent)(o23), s25 = (0, import_react13.useMemo)(() => ({ open: t30.open, hidden: t30.hidden, disableDrag: t30.disableDrag, onOpenChange: i24 }), [i24, t30.open, t30.hidden, t30.disableDrag]);
  return (0, import_jsx_runtime10.jsx)(He.Provider, { value: s25, children: n23 });
}, "Pn");

// node_modules/@tamagui/text/dist/esm/SizableText.js
var import_get_font_sized = __toESM(require_cjs12());
var import_web5 = require("@tamagui/core-node");
var s8 = (0, import_web5.styled)(import_web5.Text, { name: "SizableText", fontFamily: "$body", variants: { size: import_get_font_sized.getFontSized }, defaultVariants: { size: "$true" } });

// node_modules/@tamagui/text/dist/esm/Paragraph.js
var import_web6 = require("@tamagui/core-node");
var p11 = (0, import_web6.styled)(s8, { name: "Paragraph", tag: "p", userSelect: "auto", color: "$color", size: "$true" });

// node_modules/@tamagui/text/dist/esm/Headings.js
var import_web7 = require("@tamagui/core-node");
var t11 = (0, import_web7.styled)(p11, { tag: "span", name: "Heading", accessibilityRole: "header", fontFamily: "$heading", size: "$8", margin: 0 });
var s9 = (0, import_web7.styled)(t11, { name: "H1", tag: "h1", size: "$10" });
var i9 = (0, import_web7.styled)(t11, { name: "H2", tag: "h2", size: "$9" });
var r11 = (0, import_web7.styled)(t11, { name: "H3", tag: "h3", size: "$8" });
var H = (0, import_web7.styled)(t11, { name: "H4", tag: "h4", size: "$7" });
var m9 = (0, import_web7.styled)(t11, { name: "H5", tag: "h5", size: "$6" });
var g6 = (0, import_web7.styled)(t11, { name: "H6", tag: "h6", size: "$5" });

// node_modules/@tamagui/text/dist/esm/wrapChildrenInText.js
var import_jsx_runtime11 = require("react/jsx-runtime");
var import_react14 = __toESM(require("react"));
function W5(d21, x20, m25) {
  const { children: i24, textProps: u16, size: l27, noTextWrap: z14, color: s25, fontFamily: f25, fontSize: c28, fontWeight: a19, letterSpacing: p27, textAlign: h18, fontStyle: g17 } = x20;
  if (z14 || !i24)
    return [i24];
  const T16 = import_react14.default.Children.toArray(i24), e29 = [];
  let o23 = false;
  const t30 = { ...m25 };
  s25 && (t30.color = s25), f25 && (t30.fontFamily = f25), c28 && (t30.fontSize = c28), a19 && (t30.fontWeight = a19), p27 && (t30.letterSpacing = p27), h18 && (t30.textAlign = h18), l27 && (t30.size = l27), g17 && (t30.fontStyle = g17);
  function y15() {
    if (!o23)
      return;
    const n23 = e29.length - 1, r32 = e29[n23];
    e29[n23] = (0, import_jsx_runtime11.jsx)(d21, { ...t30, ...u16, children: r32 }, n23);
  }
  __name(y15, "y");
  for (const n23 of T16) {
    const r32 = e29[e29.length - 1], S19 = typeof n23 == "string";
    S19 ? o23 ? r32.push(n23) : e29.push([n23]) : (y15(), e29.push(n23)), o23 = S19;
  }
  return y15(), e29;
}
__name(W5, "W");

// node_modules/@tamagui/dialog/dist/esm/Dialog.js
var c10 = __toESM(require("react"));
var Y3 = "Dialog";
var [Z2, _e] = V(Y3);
var [$2, g7] = Z2(Y3);
var w6 = "DialogTrigger";
var Me2 = (0, import_core12.styled)(c7, { name: w6 });
var _5 = c10.forwardRef((e29, o23) => {
  const { __scopeDialog: n23, ...t30 } = e29, r32 = g7(w6, n23), s25 = c5(o23, r32.triggerRef);
  return (0, import_jsx_runtime12.jsx)(Me2, { tag: "button", "aria-haspopup": "dialog", "aria-expanded": r32.open, "aria-controls": r32.contentId, "data-state": G5(r32.open), ...t30, ref: s25, onPress: (0, import_core12.composeEventHandlers)(e29.onPress, r32.onOpenToggle) });
});
_5.displayName = w6;
var R6 = "DialogPortal";
var [ke2, K4] = Z2(R6, { forceMount: void 0 });
var We = (0, import_core12.styled)(c7, { alignItems: "center", justifyContent: "center", fullscreen: true, zIndex: 100, ...import_core12.isWeb && { maxHeight: "100vh", position: "fixed" } });
var j4 = /* @__PURE__ */ __name((e29) => {
  const o23 = (0, import_core12.useThemeName)(), n23 = g7(R6, e29.__scopeDialog);
  return (0, import_jsx_runtime12.jsx)(B5, { hostName: e29.hostName, children: (0, import_jsx_runtime12.jsx)(Ve2, { ...e29, themeName: o23, context: n23 }) });
}, "j");
function Ve2(e29) {
  const { __scopeDialog: o23, children: n23, context: t30, themeName: r32, space: s25, spaceDirection: a19, separator: l27 } = e29;
  let u16 = n23;
  return (s25 || l27) && (u16 = (0, import_core12.spacedChildren)({ children: n23, separator: l27, space: s25, direction: a19 })), (0, import_jsx_runtime12.jsx)($2, { scope: o23, ...t30, children: (0, import_jsx_runtime12.jsx)(import_core12.Theme, { name: r32, children: u16 }) });
}
__name(Ve2, "Ve");
var M4 = /* @__PURE__ */ __name((e29) => {
  const { __scopeDialog: o23, forceMount: n23, children: t30, ...r32 } = e29, s25 = g7(R6, o23), a19 = n23 || s25.open, [l27, u16] = c10.useState(!a19);
  a19 && l27 && u16(false);
  const d21 = (0, import_jsx_runtime12.jsx)(B3, { onExitComplete: () => {
    u16(true);
  }, children: a19 ? t30 : null });
  return h8(s25) ? t30 : s25.modal ? l27 ? null : (0, import_jsx_runtime12.jsx)(j4, { __scopeDialog: o23, children: (0, import_jsx_runtime12.jsx)(ke2, { scope: o23, forceMount: n23, children: (0, import_jsx_runtime12.jsx)(We, { pointerEvents: a19 ? "auto" : "none", ...r32, children: d21 }) }) }) : d21;
}, "M");
M4.displayName = R6;
var x10 = "DialogOverlay";
var z5 = (0, import_core12.styled)(ke, { name: x10 });
var k7 = z5.extractable(c10.forwardRef(({ __scopeDialog: e29, ...o23 }, n23) => {
  const t30 = K4(x10, e29), { forceMount: r32 = t30.forceMount, ...s25 } = o23, a19 = g7(x10, e29), l27 = h8(a19);
  return !r32 && (!a19.modal || l27) ? null : (0, import_jsx_runtime12.jsx)(He2, { context: a19, ...s25, ref: n23 });
}));
k7.displayName = x10;
var He2 = c10.forwardRef((e29, o23) => {
  const { context: n23, ...t30 } = e29;
  return (0, import_jsx_runtime12.jsx)(z5, { "data-state": G5(n23.open), pointerEvents: n23.open ? "auto" : "none", ...t30, ref: o23 });
});
var C6 = "DialogContent";
var U3 = (0, import_core12.styled)(k4, { name: C6, tag: "dialog", position: "relative", backgrounded: true, padded: true, radiused: true, elevate: true, variants: { size: { "...size": (e29, o23) => ({}) } }, defaultVariants: { size: "$true" } });
var W6 = U3.extractable(c10.forwardRef(({ __scopeDialog: e29, ...o23 }, n23) => {
  const t30 = K4(C6, e29), { forceMount: r32 = t30.forceMount, ...s25 } = o23, a19 = g7(C6, e29), l27 = a19.modal ? (0, import_jsx_runtime12.jsx)(Le, { context: a19, ...s25, ref: n23 }) : (0, import_jsx_runtime12.jsx)(Ge, { context: a19, ...s25, ref: n23 });
  return import_core12.isWeb ? (0, import_jsx_runtime12.jsx)(r7, { forwardProps: true, enabled: a19.open, allowPinchZoom: a19.allowPinchZoom, shards: [a19.contentRef], removeScrollBar: false, children: (0, import_jsx_runtime12.jsx)("div", { className: "_dsp_contents", children: l27 }) }) : l27;
}));
W6.displayName = C6;
var Le = c10.forwardRef(({ children: e29, context: o23, ...n23 }, t30) => {
  const r32 = c10.useRef(null), s25 = c5(t30, o23.contentRef, r32);
  return import_core12.isWeb && c10.useEffect(() => {
    if (!o23.open)
      return;
    const a19 = r32.current;
    if (a19)
      return (0, import_aria_hidden.hideOthers)(a19);
  }, [o23.open]), (0, import_jsx_runtime12.jsx)(q5, { ...n23, context: o23, ref: s25, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, import_core12.composeEventHandlers)(n23.onCloseAutoFocus, (a19) => {
    var l27;
    a19.preventDefault(), (l27 = o23.triggerRef.current) == null || l27.focus();
  }), onPointerDownOutside: (0, import_core12.composeEventHandlers)(n23.onPointerDownOutside, (a19) => {
    const l27 = a19.detail.originalEvent, u16 = l27.button === 0 && l27.ctrlKey === true;
    (l27.button === 2 || u16) && a19.preventDefault();
  }), onFocusOutside: (0, import_core12.composeEventHandlers)(n23.onFocusOutside, (a19) => a19.preventDefault()), children: e29 });
});
var Ge = c10.forwardRef((e29, o23) => {
  const n23 = c10.useRef(false);
  return (0, import_jsx_runtime12.jsx)(q5, { ...e29, ref: o23, trapFocus: false, disableOutsidePointerEvents: false, onCloseAutoFocus: (t30) => {
    var r32, s25;
    (r32 = e29.onCloseAutoFocus) == null || r32.call(e29, t30), t30.defaultPrevented || (n23.current || (s25 = e29.context.triggerRef.current) == null || s25.focus(), t30.preventDefault()), n23.current = false;
  }, onInteractOutside: (t30) => {
    var l27;
    (l27 = e29.onInteractOutside) == null || l27.call(e29, t30), t30.defaultPrevented || (n23.current = true);
    const r32 = t30.target, s25 = e29.context.triggerRef.current;
    if (!(s25 instanceof HTMLElement))
      return;
    s25.contains(r32) && t30.preventDefault();
  } });
});
var q5 = c10.forwardRef((e29, o23) => {
  const { __scopeDialog: n23, trapFocus: t30, onOpenAutoFocus: r32, onCloseAutoFocus: s25, disableOutsidePointerEvents: a19, onEscapeKeyDown: l27, onPointerDownOutside: u16, onFocusOutside: d21, onInteractOutside: S19, context: p27, ...y15 } = e29, T16 = c10.useRef(null), E18 = c5(o23, T16), O12 = h8(p27), v14 = (0, import_jsx_runtime12.jsx)(U3, { id: p27.contentId, "aria-describedby": p27.descriptionId, "aria-labelledby": p27.titleId, "data-state": G5(p27.open), ...y15 });
  return O12 ? (0, import_jsx_runtime12.jsx)(j4, { hostName: oe(p27), children: y15.children }) : import_core12.isWeb ? (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [(0, import_jsx_runtime12.jsx)(import_focus_scope.FocusScope, { loop: true, trapped: t30, onMountAutoFocus: r32, forceUnmount: !p27.open, onUnmountAutoFocus: s25, children: (0, import_jsx_runtime12.jsx)(T3, { disableOutsidePointerEvents: p27.open && a19, forceUnmount: !p27.open, onEscapeKeyDown: l27, onPointerDownOutside: u16, onFocusOutside: d21, onInteractOutside: S19, ref: E18, onDismiss: () => p27.onOpenChange(false), children: v14 }) }), process.env.NODE_ENV === "development" && (0, import_jsx_runtime12.jsxs)(import_jsx_runtime12.Fragment, { children: [(0, import_jsx_runtime12.jsx)($e, { titleId: p27.titleId }), (0, import_jsx_runtime12.jsx)(je, { contentRef: T16, descriptionId: p27.descriptionId })] })] }) : v14;
});
var I5 = "DialogTitle";
var Be = (0, import_core12.styled)(i9, { name: I5 });
var V4 = c10.forwardRef((e29, o23) => {
  const { __scopeDialog: n23, ...t30 } = e29, r32 = g7(I5, n23);
  return (0, import_jsx_runtime12.jsx)(Be, { id: r32.titleId, ...t30, ref: o23 });
});
V4.displayName = I5;
var Ye = (0, import_core12.styled)(p11, { name: "DialogDescription" });
var J5 = "DialogDescription";
var H7 = c10.forwardRef((e29, o23) => {
  const { __scopeDialog: n23, ...t30 } = e29, r32 = g7(J5, n23);
  return (0, import_jsx_runtime12.jsx)(Ye, { id: r32.descriptionId, ...t30, ref: o23 });
});
H7.displayName = J5;
var Q3 = "DialogClose";
var L4 = c10.forwardRef((e29, o23) => {
  const { __scopeDialog: n23, displayWhenAdapted: t30, ...r32 } = e29, s25 = g7(Q3, n23, { warn: false, fallback: {} });
  return h8(s25) && !t30 ? null : (0, import_jsx_runtime12.jsx)(c7, { tag: "button", accessibilityLabel: "Dialog Close", ...r32, ref: o23, onPress: (0, import_core12.composeEventHandlers)(e29.onPress, () => s25.onOpenChange(false)) });
});
L4.displayName = Q3;
function G5(e29) {
  return e29 ? "open" : "closed";
}
__name(G5, "G");
var X2 = "DialogTitleWarning";
var [Ze, ee2] = T(X2, { contentName: C6, titleName: I5, docsSlug: "dialog" });
var $e = /* @__PURE__ */ __name(({ titleId: e29 }) => {
  if (process.env.NODE_ENV === "development") {
    const o23 = ee2(X2), n23 = `\`${o23.contentName}\` requires a \`${o23.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${o23.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${o23.docsSlug}`;
    c10.useEffect(() => {
      import_core12.isWeb && e29 && (document.getElementById(e29) || console.warn(n23));
    }, [n23, e29]);
  }
  return null;
}, "$e");
var Ke = "DialogDescriptionWarning";
var je = /* @__PURE__ */ __name(({ contentRef: e29, descriptionId: o23 }) => {
  if (process.env.NODE_ENV === "development") {
    const t30 = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${ee2(Ke).contentName}}.`;
    c10.useEffect(() => {
      if (!import_core12.isWeb)
        return;
      const r32 = e29.current;
      if (!(r32 instanceof HTMLElement))
        return;
      const s25 = r32.getAttribute("aria-describedby");
      o23 && s25 && (document.getElementById(o23) || console.warn(t30));
    }, [t30, e29, o23]);
  }
  return null;
}, "je");
var ze = (0, import_core12.withStaticProperties)(c10.forwardRef(function(o23, n23) {
  const { __scopeDialog: t30, children: r32, open: s25, defaultOpen: a19 = false, onOpenChange: l27, modal: u16 = true, allowPinchZoom: d21 = false } = o23, S19 = (0, import_core12.useId)(), p27 = (0, import_core12.useId)(), y15 = (0, import_core12.useId)(), T16 = (0, import_core12.useId)(), E18 = t30 ? Object.keys(t30)[0] : S19, O12 = oe({ scopeKey: E18, contentId: p27 }), v14 = c10.useRef(null), ae4 = c10.useRef(null), [se6, m25] = A6({ prop: s25, defaultProp: a19, onChange: l27 }), ie5 = c10.useCallback(() => {
    m25((b17) => !b17);
  }, [m25]), le5 = { scope: t30, scopeKey: E18, triggerRef: v14, contentRef: ae4, contentId: p27, titleId: y15, descriptionId: T16, open: se6, onOpenChange: m25, onOpenToggle: ie5, modal: u16, allowPinchZoom: d21 }, { when: ce5, AdaptProvider: pe4 } = W({ Contents: c10.useCallback((b17) => (0, import_jsx_runtime12.jsx)(x9, { forwardProps: b17, name: O12 }), [O12]) });
  return c10.useImperativeHandle(n23, () => ({ open: m25 }), [m25]), (0, import_jsx_runtime12.jsx)(pe4, { children: (0, import_jsx_runtime12.jsx)($2, { ...le5, sheetBreakpoint: ce5, children: (0, import_jsx_runtime12.jsx)(Je, { onOpenChange: m25, __scopeDialog: t30, children: r32 }) }) });
}), { Trigger: _5, Portal: M4, Overlay: k7, Content: W6, Title: V4, Description: H7, Close: L4, Sheet: Sn, Adapt: b2 });
var Ue = "DialogSheetContents";
var qe = /* @__PURE__ */ __name(({ name: e29, ...o23 }) => (0, import_jsx_runtime12.jsx)(x9, { forwardProps: o23, name: e29 }), "qe");
qe.displayName = Ue;
var oe = /* @__PURE__ */ __name(({ scopeKey: e29, contentId: o23 }) => `${e29 || o23}SheetContents`, "oe");
var Je = /* @__PURE__ */ __name((e29) => {
  const o23 = g7("DialogSheetController", e29.__scopeDialog), n23 = h8(o23), t30 = te(o23), r32 = (0, import_core12.useGet)(n23);
  return (0, import_jsx_runtime12.jsx)(Pn, { onOpenChange: (s25) => {
    r32() && e29.onOpenChange(s25);
  }, open: o23.open, hidden: t30 === false, children: e29.children });
}, "Je");
var te = /* @__PURE__ */ __name((e29) => {
  const o23 = (0, import_core12.useMedia)();
  return e29.sheetBreakpoint ? e29.sheetBreakpoint === true ? true : o23[e29.sheetBreakpoint] : false;
}, "te");
var h8 = /* @__PURE__ */ __name((e29) => {
  const o23 = te(e29);
  return e29.open === false ? false : o23;
}, "h");

// node_modules/@tamagui/alert-dialog/dist/esm/AlertDialog.js
var a10 = __toESM(require("react"));
var import_react_native5 = require("react-native-web-lite");
var G6 = "AlertDialog";
var [ce, pe] = V(G6, [_e]);
var p12 = _e();
var $3 = "AlertDialogTrigger";
var ge = (0, import_core13.styled)(c7, { name: "DialogTrigger" });
var f8 = a10.forwardRef((o23, t30) => {
  if (o23.__native) {
    const { __native: D14, onPress: i24, __onPress: u16, ...g17 } = o23;
    return (0, import_jsx_runtime13.jsx)(ge, { ...g17, onPress: (0, import_core13.composeEventHandlers)(i24, u16) });
  }
  const { __scopeAlertDialog: e29, ...r32 } = o23, l27 = p12(e29);
  return (0, import_jsx_runtime13.jsx)(_5, { ...l27, ...r32, ref: t30 });
});
f8.displayName = $3;
var De3 = "AlertDialogPortal";
var m10 = /* @__PURE__ */ __name((o23) => {
  const { __scopeAlertDialog: t30, ...e29 } = o23, r32 = p12(t30);
  return (0, import_jsx_runtime13.jsx)(M4, { ...r32, ...e29 });
}, "m");
m10.displayName = De3;
var Y4 = "AlertDialogOverlay";
var ue = (0, import_core13.styled)(z5, { name: Y4 });
var y5 = ue.extractable(a10.forwardRef((o23, t30) => {
  const { __scopeAlertDialog: e29, ...r32 } = o23, l27 = p12(e29);
  return (0, import_jsx_runtime13.jsx)(k7, { ...l27, ...r32, ref: t30 });
}));
y5.displayName = Y4;
var A8 = "AlertDialogContent";
var [Ae2, de] = ce(A8);
var C7 = a10.forwardRef((o23, t30) => {
  const { __scopeAlertDialog: e29, children: r32, ...l27 } = o23, D14 = p12(e29), i24 = a10.useRef(null), u16 = c5(t30, i24), g17 = a10.useRef(null);
  return (0, import_jsx_runtime13.jsx)(Ze, { contentName: A8, titleName: T6, docsSlug: "alert-dialog", children: (0, import_jsx_runtime13.jsx)(Ae2, { scope: e29, cancelRef: g17, children: (0, import_jsx_runtime13.jsxs)(W6, { role: "alertdialog", ...D14, ...l27, ref: u16, onOpenAutoFocus: (0, import_core13.composeEventHandlers)(l27.onOpenAutoFocus, (s25) => {
    var d21;
    s25.preventDefault(), import_core13.isWeb && ((d21 = g17.current) == null || d21.focus({ preventScroll: true }));
  }), onPointerDownOutside: (s25) => s25.preventDefault(), onInteractOutside: (s25) => s25.preventDefault(), children: [(0, import_jsx_runtime13.jsx)(import_core13.Slottable, { children: r32 }), process.env.NODE_ENV === "development" && (0, import_jsx_runtime13.jsx)(Pe2, { contentRef: i24 })] }) }) });
});
C7.displayName = A8;
var T6 = "AlertDialogTitle";
var v5 = a10.forwardRef((o23, t30) => {
  const { __scopeAlertDialog: e29, ...r32 } = o23, l27 = p12(e29);
  return (0, import_jsx_runtime13.jsx)(V4, { ...l27, ...r32, ref: t30 });
});
v5.displayName = T6;
var E4 = "AlertDialogDescription";
var _6 = a10.forwardRef((o23, t30) => {
  const { __scopeAlertDialog: e29, ...r32 } = o23, l27 = p12(e29);
  return (0, import_jsx_runtime13.jsx)(H7, { ...l27, ...r32, ref: t30 });
});
_6.displayName = E4;
var R7 = "AlertDialogAction";
var S2 = a10.forwardRef((o23, t30) => {
  const { __scopeAlertDialog: e29, ...r32 } = o23, l27 = p12(e29);
  return (0, import_jsx_runtime13.jsx)(L4, { ...l27, ...r32, ref: t30 });
});
S2.displayName = R7;
var N4 = "AlertDialogCancel";
var O4 = a10.forwardRef((o23, t30) => {
  const { __scopeAlertDialog: e29, ...r32 } = o23, { cancelRef: l27 } = de(N4, e29), D14 = p12(e29), i24 = c5(t30, l27);
  return (0, import_jsx_runtime13.jsx)(L4, { ...D14, ...r32, ref: i24 });
});
O4.displayName = N4;
var Pe2 = /* @__PURE__ */ __name(({ contentRef: o23 }) => (process.env.NODE_ENV === "development" && a10.useEffect(() => {
  var e29;
  if (!import_core13.isWeb)
    return;
  document.getElementById((e29 = o23.current) == null ? void 0 : e29.getAttribute("aria-describedby")) || console.warn(`\`${A8}\` requires a description for the component to be accessible for screen reader users.
  
        You can add a description to the \`${A8}\` by passing a \`${E4}\` component as a child, which also benefits sighted users by adding visible context to the dialog.
        
        Alternatively, you can use your own component as a description by assigning it an \`id\` and passing the same value to the \`aria-describedby\` prop in \`${A8}\`. If the description is confusing or duplicative for sighted users, you can use the \`@radix-ui/react-visually-hidden\` primitive as a wrapper around your description component.
        
        For more information, see https://tamagui.dev/docs/components/alert-dialog`);
}, [o23]), null), "Pe");
var fe2 = /* @__PURE__ */ __name((o23) => {
  const { __scopeAlertDialog: t30, native: e29, ...r32 } = o23, l27 = p12(t30);
  if (process.env.TAMAGUI_TARGET === "native") {
    const [D14, i24] = A6({ prop: o23.open, defaultProp: o23.defaultOpen || false, onChange: o23.onOpenChange, transition: true });
    let u16 = null, g17 = "", s25 = "";
    const d21 = [];
    if (b7(a10.Children.toArray(o23.children), (c28) => {
      if (!a10.isValidElement(c28))
        return false;
      const x20 = (0, import_core13.isTamaguiElement)(c28) ? c28.type.staticConfig.componentName : c28.type.displayName;
      switch (x20) {
        case $3:
          return u16 = a10.cloneElement(c28, { __native: true }), false;
        case T6:
          return g17 = h9(c28), false;
        case E4:
          return s25 = h9(c28), false;
        case R7:
        case N4: {
          const k17 = x20 === R7 ? "default" : "cancel", q13 = h9(c28), B12 = /* @__PURE__ */ __name(() => {
            var w23;
            const P17 = c28.props;
            (w23 = P17 == null ? void 0 : P17.onPress) == null || w23.call(P17, { native: true }), i24(false);
          }, "B");
          return d21.push({ style: k17, text: q13, onPress: B12 }), false;
        }
        default:
          return true;
      }
    }), (0, import_core13.useIsomorphicLayoutEffect)(() => {
      !D14 || !e29 || (g17 || s25) && import_react_native5.Alert.alert(g17, s25, d21);
    }, [e29, D14]), e29)
      return a10.cloneElement(u16, { __onPress: () => {
        i24(true);
      } });
  }
  return (0, import_jsx_runtime13.jsx)(ze, { ...l27, ...r32, modal: true });
}, "fe");
function b7(o23, t30) {
  for (const e29 of o23)
    a10.isValidElement(e29) && t30(e29) && e29.props.children && b7(a10.Children.toArray(e29.props.children), t30);
}
__name(b7, "b");
function h9(o23) {
  let t30 = "";
  return b7(a10.Children.toArray(o23), (e29) => typeof e29.props.children == "string" ? (t30 = e29.props.children, false) : true), t30;
}
__name(h9, "h");
var j5 = (0, import_core13.withStaticProperties)(fe2, { Trigger: f8, Portal: m10, Overlay: y5, Content: C7, Action: S2, Cancel: O4, Title: v5, Description: _6 });
j5.displayName = G6;

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var import_jsx_runtime14 = require("react/jsx-runtime");
var import_core14 = require("@tamagui/core-node");
var import_image = __toESM(require_cjs13());

// node_modules/@tamagui/shapes/dist/esm/Square.js
var import_web8 = require("@tamagui/core-node");

// node_modules/@tamagui/shapes/dist/esm/getShapeSize.js
var h10 = /* @__PURE__ */ __name((t30, { tokens: r32 }) => {
  const i24 = r32.size[t30] ?? t30, a19 = r32.size[t30] ?? t30;
  return { width: i24, height: a19, minWidth: i24, maxWidth: i24, maxHeight: a19, minHeight: a19 };
}, "h");

// node_modules/@tamagui/shapes/dist/esm/Square.js
var p13 = (0, import_web8.styled)(k4, { name: "Square", alignItems: "center", justifyContent: "center", variants: { circular: { true: { borderRadius: 1e5 } }, size: { "...size": h10 } } });

// node_modules/@tamagui/shapes/dist/esm/Circle.js
var import_web9 = require("@tamagui/core-node");
var c11 = (0, import_web9.styled)(p13, { name: "Circle", circular: true });

// node_modules/@tamagui/avatar/dist/esm/Avatar.js
var t12 = __toESM(require("react"));
var m11 = "Avatar";
var [_7, N5] = V(m11);
var [T7, P10] = _7(m11);
var I6 = "AvatarImage";
var l14 = t12.forwardRef((e29, r32) => {
  var v14;
  const { __scopeAvatar: s25, src: a19, onLoadingStatusChange: n23 = /* @__PURE__ */ __name(() => {
  }, "n"), ...i24 } = e29, o23 = P10(I6, s25), [c28, p27] = t12.useState("idle"), b17 = (0, import_core14.getVariantExtras)(e29), g17 = (0, import_core14.getVariableValue)((v14 = h10(o23.size, b17)) == null ? void 0 : v14.width);
  return t12.useEffect(() => {
    p27("idle");
  }, [JSON.stringify(a19)]), t12.useEffect(() => {
    n23(c28), o23.onImageLoadingStatusChange(c28);
  }, [c28]), (0, import_jsx_runtime14.jsx)(c7, { fullscreen: true, zIndex: 1, children: (0, import_jsx_runtime14.jsx)(import_image.Image, { fullscreen: true, ...typeof g17 == "number" && !isNaN(g17) && { width: g17, height: g17 }, ...i24, ref: r32, src: a19, onError: () => {
    p27("error");
  }, onLoad: () => {
    p27("loaded");
  } }) });
});
l14.displayName = I6;
var u10 = "AvatarFallback";
var L5 = (0, import_core14.styled)(c7, { name: u10, position: "absolute", fullscreen: true, zIndex: 0 });
var A9 = L5.extractable(t12.forwardRef((e29, r32) => {
  const { __scopeAvatar: s25, delayMs: a19, ...n23 } = e29, i24 = P10(u10, s25), [o23, c28] = t12.useState(a19 === void 0);
  return t12.useEffect(() => {
    if (a19 !== void 0) {
      const p27 = setTimeout(() => c28(true), a19);
      return () => clearTimeout(p27);
    }
  }, [a19]), o23 && i24.imageLoadingStatus !== "loaded" ? (0, import_jsx_runtime14.jsx)(L5, { ...n23, ref: r32 }) : null;
}));
A9.displayName = u10;
var w7 = (0, import_core14.styled)(p13, { name: m11, position: "relative", overflow: "hidden" });
var y6 = (0, import_core14.withStaticProperties)(t12.forwardRef((e29, r32) => {
  const { __scopeAvatar: s25, size: a19 = "$true", ...n23 } = e29, [i24, o23] = t12.useState("idle");
  return (0, import_jsx_runtime14.jsx)(T7, { size: a19, scope: s25, imageLoadingStatus: i24, onImageLoadingStatusChange: o23, children: (0, import_jsx_runtime14.jsx)(w7, { size: a19, ...n23, ref: r32 }) });
}), { Image: l14, Fallback: A9 });
y6.displayName = m11;

// node_modules/@tamagui/button/dist/esm/Button.js
var import_jsx_runtime15 = require("react/jsx-runtime");
var import_font_size = __toESM(require_cjs14());
var import_get_button_sized2 = __toESM(require_cjs11());
var import_helpers_tamagui = __toESM(require_cjs17());
var import_web10 = require("@tamagui/core-node");
var import_react15 = require("react");
var J7 = "Button";
var i11 = (0, import_web10.styled)(k4, { name: J7, tag: "button", justifyContent: "center", alignItems: "center", flexWrap: "nowrap", flexDirection: "row", cursor: "pointer", variants: { defaultStyle: { true: { focusable: true, hoverTheme: true, pressTheme: true, backgrounded: true, borderWidth: 1, borderColor: "transparent", pressStyle: { borderColor: "transparent" }, hoverStyle: { borderColor: "transparent" }, focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": import_get_button_sized2.getButtonSized }, active: { true: { hoverStyle: { backgroundColor: "$background" } } }, disabled: { true: { pointerEvents: "none" } } }, defaultVariants: { size: "$true" } });
var c12 = (0, import_web10.styled)(s8, { name: "ButtonText", userSelect: "none", cursor: "pointer", flexGrow: 0, flexShrink: 1, ellipse: true, variants: { defaultStyle: { true: { color: "$color" } } } });
var O5 = (0, import_react15.forwardRef)(function(o23, l27) {
  const { props: { unstyled: n23, ...r32 } } = j6(o23);
  return (0, import_jsx_runtime15.jsx)(i11, { defaultStyle: !n23, ...r32, ref: l27 });
});
var X3 = { inlineProps: /* @__PURE__ */ new Set(["color", "fontWeight", "fontSize", "fontFamily", "fontStyle", "letterSpacing", "textAlign", "unstyled"]) };
var de2 = i11.extractable((0, import_web10.themeable)(O5, i11.staticConfig), X3);
function j6(t30, { Text: o23 = c12 } = { Text: c12 }) {
  const { children: l27, icon: n23, iconAfter: r32, noTextWrap: q13, theme: H14, space: K11, spaceFlex: x20, scaleIcon: y15 = 1, scaleSpace: h18 = 0.66, separator: g17, color: C16, fontWeight: L15, letterSpacing: Q10, fontSize: U10, fontFamily: Y11, fontStyle: Z10, textAlign: _13, textProps: ee11, ...P17 } = t30, a19 = import_web10.isRSC ? false : (0, import_react15.useContext)(import_web10.ButtonNestingContext), e29 = (0, import_web10.useMediaPropsActive)(t30), s25 = e29.size || "$true", u16 = (typeof s25 == "number" ? s25 * 0.5 : (0, import_font_size.getFontSize)(s25)) * y15, T16 = (0, import_helpers_tamagui.useGetThemedIcon)({ size: u16, color: C16 }), [B12, z14] = [n23, r32].map(T16), p27 = e29.space ?? (0, import_web10.getVariableValue)(u16) * h18, v14 = W5(o23, e29, o23 === c12 ? { defaultStyle: !t30.unstyled } : void 0), m25 = (0, import_web10.spacedChildren)({ space: p27, spaceFlex: x20, separator: g17, direction: e29.flexDirection === "column" || e29.flexDirection === "column-reverse" ? "vertical" : "horizontal", children: [B12, ...v14, z14] }), F16 = a19 ? "span" : t30.accessibilityRole === "link" ? "a" : void 0, I12 = { ...e29.disabled && { focusable: void 0, focusStyle: { borderColor: "$background" } }, tag: F16, ...P17, children: import_web10.isRSC ? m25 : (0, import_jsx_runtime15.jsx)(import_web10.ButtonNestingContext.Provider, { value: true, children: m25 }) };
  return { spaceSize: p27, isNested: a19, props: I12 };
}
__name(j6, "j");

// node_modules/@tamagui/card/dist/esm/Card.js
var import_jsx_runtime16 = require("react/jsx-runtime");
var import_web11 = require("@tamagui/core-node");
var import_react16 = __toESM(require("react"));
var n10 = (0, import_web11.styled)(k4, { name: "Card", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", position: "relative", overflow: "hidden" } }, size: { "...size": (e29, { tokens: r32 }) => ({ borderRadius: r32.radius[e29] ?? e29 }) } }, defaultVariants: { unstyled: false } });
var s10 = (0, import_web11.styled)(k4, { name: "CardHeader", variants: { unstyled: { false: { zIndex: 10, backgroundColor: "transparent", marginBottom: "auto" } }, size: { "...size": (e29, { tokens: r32 }) => ({ padding: r32.space[e29] ?? e29 }) } } });
var C8 = (0, import_web11.styled)(s10, { name: "CardFooter", variants: { unstyled: { false: { zIndex: 5, flexDirection: "row", marginTop: "auto", marginBottom: 0 } } }, defaultVariants: { unstyled: false } });
var g8 = (0, import_web11.styled)(k4, { name: "CardBackground", variants: { unstyled: { false: { zIndex: 0, fullscreen: true, overflow: "hidden", pointerEvents: "none", padding: 0 } } }, defaultVariants: { unstyled: false } });
var w9 = (0, import_web11.withStaticProperties)(n10.extractable((0, import_react16.forwardRef)(({ size: e29, __scopeCard: r32, children: d21, ...p27 }, i24) => (0, import_jsx_runtime16.jsx)(n10, { ref: i24, ...p27, children: import_react16.default.Children.map(d21, (a19) => (0, import_web11.isTamaguiElement)(a19) && !a19.props.size ? (0, import_react16.cloneElement)(a19, { size: e29 }) : a19) }))), { Header: s10, Footer: C8, Background: g8 });

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs14(), 1));

// node_modules/@tamagui/form/dist/esm/Form.js
var import_jsx_runtime17 = require("react/jsx-runtime");
var import_core15 = require("@tamagui/core-node");
var import_react17 = require("react");
var n11 = "Form";
var c14 = (0, import_core15.styled)(import_core15.Stack, { name: n11, tag: "form" });
var [S5] = V(n11);
var [f11, b9] = S5(n11);
var i12 = "FormTrigger";
var F7 = (0, import_core15.styled)(import_core15.Stack, { name: i12 });
var T8 = F7.extractable((0, import_react17.forwardRef)((o23, r32) => {
  const { __scopeForm: e29, children: s25, ...t30 } = o23, P17 = b9(i12, e29);
  return (0, import_jsx_runtime17.jsx)(F7, { tag: "button", ...t30, children: t30.asChild ? (0, import_react17.cloneElement)(s25, { disabled: t30.disabled }) : s25, ref: r32, onPress: (0, import_core15.composeEventHandlers)(o23.onPress, P17.onSubmit) });
}));
function y8({ onSubmit: o23, ...r32 }) {
  return (0, import_jsx_runtime17.jsx)(f11, { scope: r32.__scopeForm, onSubmit: o23, children: (0, import_jsx_runtime17.jsx)(c14, { ...r32, onSubmit: (e29) => e29.preventDefault() }) });
}
__name(y8, "y");
var w10 = (0, import_core15.withStaticProperties)(c14.extractable(y8), { Trigger: T8 });

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs21(), 1));
__reExport(esm_exports2, __toESM(require_cjs17(), 1));
__reExport(esm_exports2, __toESM(require_cjs13(), 1));

// node_modules/@tamagui/label/dist/esm/Label.js
var import_jsx_runtime18 = require("react/jsx-runtime");
var import_focusable = __toESM(require_cjs22());
var import_get_button_sized3 = __toESM(require_cjs11());
var import_get_font_sized2 = __toESM(require_cjs12());
var import_web12 = require("@tamagui/core-node");
var s11 = __toESM(require("react"));
var m14 = "Label";
var [T9, k10] = T(m14, { id: void 0, controlRef: { current: null } });
var L6 = (0, import_web12.styled)(s8, { name: "Label", tag: "label", variants: { unstyled: { false: { size: "$true", color: "$color", backgroundColor: "transparent", display: "flex", alignItems: "center", userSelect: "none", cursor: "default", pressStyle: { color: "$colorPress" } } }, size: { "...size": (e29, r32) => {
  const o23 = (0, import_get_button_sized3.getButtonSized)(e29, r32);
  return { ...(0, import_get_font_sized2.getFontSized)(e29, r32), height: o23.height, lineHeight: o23.height };
} } }, defaultVariants: { unstyled: false } });
var y9 = s11.forwardRef((e29, r32) => {
  const { htmlFor: o23, id: R17, ...h18 } = e29, l27 = s11.useRef(null), f25 = s11.useRef(null), C16 = c5(r32, f25), P17 = (0, import_web12.useId)(), n23 = R17 ?? P17;
  return import_web12.isWeb && s11.useEffect(() => {
    if (o23) {
      const t30 = document.getElementById(o23);
      if (f25.current && t30) {
        const i24 = /* @__PURE__ */ __name(() => t30.getAttribute("aria-labelledby"), "i"), c28 = [n23, i24()].filter(Boolean).join(" ");
        return t30.setAttribute("aria-labelledby", c28), l27.current = t30, () => {
          var b17;
          if (!n23)
            return;
          const u16 = (b17 = i24()) == null ? void 0 : b17.replace(n23, "");
          u16 === "" ? t30.removeAttribute("aria-labelledby") : u16 && t30.setAttribute("aria-labelledby", u16);
        };
      }
    }
  }, [n23, o23]), (0, import_jsx_runtime18.jsx)(T9, { id: n23, controlRef: l27, children: (0, import_jsx_runtime18.jsx)(L6, { role: "heading", id: n23, htmlFor: o23, ...h18, ref: C16, onMouseDown: (t30) => {
    var a19;
    (a19 = e29.onMouseDown) == null || a19.call(e29, t30), !t30.defaultPrevented && t30.detail > 1 && t30.preventDefault();
  }, onPress: (t30) => {
    var a19;
    if ((a19 = e29.onPress) == null || a19.call(e29, t30), import_web12.isWeb) {
      if (o23 || !l27.current || t30.defaultPrevented)
        return;
      const i24 = l27.current.contains(t30.target), c28 = t30.isTrusted === true;
      !i24 && c28 && (l27.current.click(), l27.current.focus());
    } else
      e29.htmlFor && (0, import_focusable.focusFocusable)(e29.htmlFor);
  } }) });
});
y9.displayName = m14;
var w11 = L6.extractable((0, import_web12.themeable)(y9), { neverFlatten: true });
var U5 = /* @__PURE__ */ __name((e29) => {
  const r32 = k10("LabelConsumer"), { controlRef: o23 } = r32;
  return s11.useEffect(() => {
    e29 && (o23.current = e29);
  }, [e29, o23]), r32.id;
}, "U");

// node_modules/tamagui/dist/esm/index.mjs
__reExport(esm_exports2, __toESM(require_cjs24(), 1));

// node_modules/@tamagui/popover/dist/esm/Popover.js
var import_jsx_runtime20 = require("react/jsx-runtime");
var import_aria_hidden3 = __toESM(require_cjs6());
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
    x: x20,
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
      x: x20,
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
    x20 = nextX != null ? nextX : x20;
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
          x: x20,
          y: y15
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i24 = -1;
      continue;
    }
  }
  return {
    x: x20,
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
    x: x20,
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
    x: x20,
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
      x: x20,
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
      x: x20,
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
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d21) => d21.overflows[0] <= 0).sort((a19, b17) => a19.overflows[1] - b17.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$map$so;
              const placement2 = (_overflowsData$map$so = overflowsData.map((d21) => [d21.placement, d21.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a19, b17) => a19[1] - b17[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
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
        x: x20,
        y: y15
      } = state;
      const diffCoords = await convertValueToCoords(state, value);
      return {
        x: x20 + diffCoords.x,
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
        x: x20,
        y: y15,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x21,
              y: y16
            } = _ref;
            return {
              x: x21,
              y: y16
            };
          }
        },
        ...detectOverflowOptions
      } = options;
      const coords = {
        x: x20,
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
          x: limitedCoords.x - x20,
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
  let x20 = (fallback ? round(rect.width) : rect.width) / width;
  let y15 = (fallback ? round(rect.height) : rect.height) / height;
  if (!x20 || !Number.isFinite(x20)) {
    x20 = 1;
  }
  if (!y15 || !Number.isFinite(y15)) {
    y15 = 1;
  }
  return {
    x: x20,
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
  let x20 = (clientRect.left + (addVisualOffsets ? ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0 : 0)) / scale.x;
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
      x20 *= iframeScale.x;
      y15 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x20 += iframeRect.x;
      y15 += iframeRect.y;
      currentIFrame = getWindow(currentIFrame).frameElement;
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x20,
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
  let x20 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y15 = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === "rtl") {
    x20 += max2(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x20,
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
  let x20 = 0;
  let y15 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isClientRectVisualViewportBased();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x20 = visualViewport.offsetLeft;
      y15 = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x20,
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
  const x20 = left * scale.x;
  const y15 = top * scale.y;
  return {
    width,
    height,
    x: x20,
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
var s12 = (0, import_react20.createContext)(null);
var i13 = /* @__PURE__ */ __name((t30) => {
  var e29;
  return (e29 = (0, import_react20.useContext)(s12) || useFloating) == null ? void 0 : e29(t30);
}, "i");

// node_modules/@tamagui/popover/dist/esm/Popover.js
var import_focus_scope2 = __toESM(require_cjs9());

// node_modules/@tamagui/popper/dist/esm/Popper.js
var import_jsx_runtime19 = require("react/jsx-runtime");
var import_core18 = require("@tamagui/core-node");
var import_get_size = __toESM(require_cjs10());
var s13 = __toESM(require("react"));
var import_react_native6 = require("react-native-web-lite");
var V7 = "Popper";
var [j7, q6] = V(V7);
var he2 = q6;
var [G8, E7] = j7(V7);
function be(f25) {
  const { __scopePopper: a19, children: d21, size: P17, strategy: u16 = "absolute", placement: l27 = "bottom", stayInFrame: e29, allowFlip: i24 } = f25, [o23, m25] = s13.useState(false);
  (0, import_core18.useIsomorphicLayoutEffect)(() => {
    m25(true);
  }, []);
  const c28 = s13.useRef(), [r32, y15] = s13.useState(null), [w23, b17] = s13.useState(0), S19 = s13.useRef(), t30 = i13({ strategy: u16, placement: l27, sameScrollView: false, middleware: [e29 ? shift(typeof e29 == "boolean" ? {} : e29) : null, i24 ? flip(typeof i24 == "boolean" ? {} : i24) : null, r32 ? arrow2({ element: r32 }) : null, w23 ? offset(w23) : null].filter(Boolean) }), { refs: p27, middlewareData: A20 } = t30, x20 = c5(S19, y15);
  if ((0, import_core18.useIsomorphicLayoutEffect)(() => {
    t30.reference(c28.current);
  }, [c28]), import_core18.isWeb)
    s13.useEffect(() => {
      if (p27.reference.current && p27.floating.current)
        return autoUpdate(p27.reference.current, p27.floating.current, t30.update);
    }, [t30.update, p27.floating, p27.reference]);
  else {
    const g17 = (0, import_react_native6.useWindowDimensions)(), [z14, n23] = s13.useState(false);
    s13.useEffect(() => {
      const _13 = import_react_native6.Keyboard.addListener("keyboardDidShow", () => {
        n23(true);
      }), M17 = import_react_native6.Keyboard.addListener("keyboardDidHide", () => {
        n23(false);
      });
      return () => {
        _13.remove(), M17.remove();
      };
    }, []), (0, import_core18.useIsomorphicLayoutEffect)(() => {
      t30.update();
    }, [g17, z14]);
  }
  return (0, import_jsx_runtime19.jsx)(G8, { scope: a19, anchorRef: c28, size: P17, arrowRef: x20, arrowStyle: A20.arrow, onArrowSize: b17, isMounted: o23, ...t30, children: d21 });
}
__name(be, "be");
var J8 = "PopperAnchor";
var Re2 = c7.extractable(s13.forwardRef(function(a19, d21) {
  const { __scopePopper: P17, virtualRef: u16, ...l27 } = a19, { anchorRef: e29, getReferenceProps: i24 } = E7(J8, P17), o23 = s13.useRef(null), m25 = c5(d21, o23, e29);
  if (u16)
    return null;
  const c28 = { ref: m25, ...l27 };
  return (0, import_jsx_runtime19.jsx)(c7, { ...i24 ? i24(c28) : c28 });
}));
var Q4 = "PopperContent";
var X4 = (0, import_core18.styled)(k4, { name: "PopperContent", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", alignItems: "center", radiused: true } }, size: { "...size": (f25, { tokens: a19 }) => ({ padding: a19.space[f25], borderRadius: a19.radius[f25] }) } }, defaultVariants: { unstyled: false } });
var Ae3 = s13.forwardRef(function(a19, d21) {
  const { __scopePopper: P17, ...u16 } = a19, { strategy: l27, placement: e29, floating: i24, x: o23, y: m25, getFloatingProps: c28, size: r32, isMounted: y15 } = E7(Q4, P17), w23 = c5(i24, d21), b17 = s13.useMemo(() => (0, import_jsx_runtime19.jsx)(X4, { "data-placement": e29, "data-strategy": l27, size: u16.size || r32, ...u16 }, "popper-content-frame"), [e29, l27, a19]);
  if (!y15)
    return null;
  const S19 = { ref: w23, x: o23 || 0, y: m25 || 0, position: l27 };
  return (0, import_jsx_runtime19.jsx)(c7, { animateOnly: ["transform"], ...c28 ? c28(S19) : S19, children: b17 });
});
var Z3 = "PopperArrow";
var F9 = (0, import_core18.styled)(c7, { name: "PopperArrow", variants: { unstyled: { false: { borderColor: "$borderColor", backgroundColor: "$background", position: "relative" } } }, defaultVariants: { unstyled: false } });
var ee3 = (0, import_core18.styled)(c7, { name: "PopperArrowOuter", variants: { unstyled: { false: { position: "absolute", zIndex: -1, pointerEvents: "none", overflow: "hidden", alignItems: "center", justifyContent: "center" } } }, defaultVariants: { unstyled: false } });
var oe2 = { top: "bottom", right: "left", bottom: "top", left: "right" };
var ge2 = F9.extractable(s13.forwardRef(function(a19, d21) {
  var g17, z14;
  const { __scopePopper: P17, offset: u16, size: l27, borderWidth: e29 = 0, ...i24 } = a19, o23 = E7(Z3, P17), m25 = l27 ?? o23.size, r32 = +(0, import_core18.getVariableValue)((0, import_get_size.stepTokenUpOrDown)("space", m25, -2, [2])), { placement: y15 } = o23, w23 = c5(o23.arrowRef, d21), b17 = ((g17 = o23.arrowStyle) == null ? void 0 : g17.x) || 0, S19 = ((z14 = o23.arrowStyle) == null ? void 0 : z14.y) || 0, t30 = y15 ? y15.split("-")[0] : "top", p27 = { x: b17, y: S19, width: r32, height: r32 }, A20 = {}, x20 = t30 === "bottom" || t30 === "top";
  if (t30) {
    p27[x20 ? "width" : "height"] = r32 * 2;
    const n23 = oe2[t30];
    n23 && (p27[n23] = -r32, A20[n23] = r32 / 2), (n23 === "top" || n23 === "bottom") && (p27.left = 0), (n23 === "left" || n23 === "right") && (p27.top = 0);
  }
  return (0, import_core18.useIsomorphicLayoutEffect)(() => {
    var n23;
    (n23 = o23.onArrowSize) == null || n23.call(o23, r32);
  }, [r32, o23.onArrowSize]), (0, import_jsx_runtime19.jsx)(ee3, { ref: w23, ...p27, children: (0, import_jsx_runtime19.jsx)(F9, { width: r32, height: r32, ...i24, ...A20, rotate: "45deg", ...t30 === "bottom" && { borderBottomWidth: e29, borderRightWidth: e29 }, ...t30 === "top" && { borderTopWidth: e29, borderLeftWidth: e29 }, ...t30 === "right" && { borderTopWidth: e29, borderRightWidth: e29 }, ...t30 === "left" && { borderBottomWidth: e29, borderLeftWidth: e29 } }) });
}));

// node_modules/@tamagui/popover/dist/esm/Popover.js
var s14 = __toESM(require("react"));
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
      return (_currentChildren = currentChildren) == null ? void 0 : _currentChildren.some((n23) => {
        var _node$context2;
        return node.parentId === n23.id && ((_node$context2 = node.context) == null ? void 0 : _node$context2.open);
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
  const e29 = event;
  return e29.target != null && node.contains(e29.target);
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
    function onWheel(e29) {
      if (e29.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e29.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e29.preventDefault();
        (0, import_react_dom2.flushSync)(() => {
          onChange((d21) => d21 + Math[method](dY, remainingScroll * sign));
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
              (0, import_react_dom2.flushSync)(() => onChange((d21) => d21 + scrollDiff));
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
var F10 = /* @__PURE__ */ __name(({ open: t30, setOpen: e29, breakpointActive: n23 }) => (0, import_react23.useCallback)((s25) => {
  const o23 = useFloating2({ ...s25, open: t30, onOpenChange: e29 }), { getReferenceProps: a19, getFloatingProps: r32 } = useInteractions([useRole(o23.context, { role: "dialog" }), useDismiss(o23.context, { enabled: !n23 })]);
  return { ...o23, getReferenceProps: a19, getFloatingProps: r32 };
}, [t30, e29, n23]), "F");

// node_modules/@tamagui/popover/dist/esm/Popover.js
var N6 = "Popover";
var [Ro, xo] = V(N6, [he2]);
var g11 = he2();
var le = xo;
var [E8, f12] = Ro(N6);
var Pe3 = E8;
var V8 = "PopoverAnchor";
var M8 = s14.forwardRef((o23, e29) => {
  const { __scopePopover: t30, ...p27 } = o23, n23 = f12(V8, t30), c28 = g11(t30), { onCustomAnchorAdd: u16, onCustomAnchorRemove: i24 } = n23;
  return s14.useEffect(() => (u16(), () => i24()), [u16, i24]), (0, import_jsx_runtime20.jsx)(Re2, { ...c28, ...p27, ref: e29 });
});
M8.displayName = V8;
var D7 = "PopoverTrigger";
var z7 = s14.forwardRef((o23, e29) => {
  const { __scopePopover: t30, ...p27 } = o23, n23 = f12(D7, t30), c28 = g11(t30), u16 = c5(e29, n23.triggerRef), i24 = (0, import_jsx_runtime20.jsx)(c7, { "aria-haspopup": "dialog", "aria-expanded": n23.open, "data-state": W9(n23.open), ...p27, ref: u16, onPress: (0, import_core19.composeEventHandlers)(o23.onPress, n23.onOpenToggle) });
  return n23.hasCustomAnchor ? i24 : (0, import_jsx_runtime20.jsx)(Re2, { asChild: true, ...c28, children: i24 });
});
z7.displayName = D7;
var R9 = "PopoverContent";
var Oo = X4.extractable(s14.forwardRef(function(e29, t30) {
  const { allowPinchZoom: p27, trapFocus: n23, disableRemoveScroll: c28 = true, zIndex: u16, ...i24 } = e29, d21 = f12(R9, e29.__scopePopover), C16 = s14.useRef(null), A20 = c5(t30, C16), v14 = s14.useRef(false);
  return s14.useEffect(() => {
    if (!d21.open)
      return;
    const a19 = C16.current;
    if (a19)
      return (0, import_aria_hidden3.hideOthers)(a19);
  }, [d21.open]), (0, import_jsx_runtime20.jsx)(Eo, { zIndex: u16, children: (0, import_jsx_runtime20.jsx)(bo, { ...i24, disableRemoveScroll: c28, ref: A20, trapFocus: n23 ?? d21.open, disableOutsidePointerEvents: true, onCloseAutoFocus: (0, import_core19.composeEventHandlers)(e29.onCloseAutoFocus, (a19) => {
    var P17;
    a19.preventDefault(), v14.current || (P17 = d21.triggerRef.current) == null || P17.focus();
  }), onPointerDownOutside: (0, import_core19.composeEventHandlers)(e29.onPointerDownOutside, (a19) => {
    const P17 = a19.detail.originalEvent, h18 = P17.button === 0 && P17.ctrlKey === true, l27 = P17.button === 2 || h18;
    v14.current = l27;
  }, { checkDefaultPrevented: false }), onFocusOutside: (0, import_core19.composeEventHandlers)(e29.onFocusOutside, (a19) => a19.preventDefault(), { checkDefaultPrevented: false }) }) });
}));
function Eo(o23) {
  const e29 = (0, import_core19.useThemeName)(), t30 = f12(R9, o23.__scopePopover);
  let p27 = o23.children;
  if (import_react_native7.Platform.OS === "android") {
    const c28 = E7(R9, t30.popperScope);
    p27 = (0, import_jsx_runtime20.jsx)(G8, { ...c28, scope: t30.popperScope, children: (0, import_jsx_runtime20.jsx)(E8, { scope: o23.__scopePopover, ...t30, children: o23.children }) });
  }
  const n23 = o23.zIndex ?? 1e3;
  return (0, import_jsx_runtime20.jsx)(x8, { zIndex: n23, children: (0, import_jsx_runtime20.jsxs)(import_core19.Theme, { forceClassName: true, name: e29, children: [!!t30.open && !t30.breakpointActive && (0, import_jsx_runtime20.jsx)(c7, { fullscreen: true, onPress: (0, import_core19.composeEventHandlers)(o23.onPress, t30.onOpenToggle) }), (0, import_jsx_runtime20.jsx)(import_core19.Stack, { zIndex: n23 + 1, children: p27 })] }) });
}
__name(Eo, "Eo");
var bo = s14.forwardRef((o23, e29) => {
  const { __scopePopover: t30, trapFocus: p27, onOpenAutoFocus: n23, onCloseAutoFocus: c28, disableOutsidePointerEvents: u16, onEscapeKeyDown: i24, onPointerDownOutside: d21, onFocusOutside: C16, onInteractOutside: A20, children: v14, disableRemoveScroll: a19, ...P17 } = o23, h18 = g11(t30), l27 = f12(R9, h18.__scopePopover);
  if (l27.breakpointActive) {
    const y15 = s14.Children.toArray(v14).map((m25) => s14.isValidElement(m25) && m25.type === B7 ? m25.props.children : m25);
    return (0, import_jsx_runtime20.jsx)(B5, { hostName: `${l27.scopeKey}PopoverContents`, children: y15 });
  }
  return (0, import_jsx_runtime20.jsx)(B3, { children: !!l27.open && (0, import_jsx_runtime20.jsx)(Ae3, { "data-state": W9(l27.open), id: l27.contentId, pointerEvents: "auto", ref: e29, ...h18, ...P17, children: (0, import_jsx_runtime20.jsx)(r7, { enabled: a19 ? false : l27.open, allowPinchZoom: true, removeScrollBar: false, style: { display: "contents" }, children: p27 === false ? v14 : (0, import_jsx_runtime20.jsx)(import_focus_scope2.FocusScope, { loop: true, trapped: p27 ?? l27.open, onMountAutoFocus: n23, onUnmountAutoFocus: c28, children: import_core19.isWeb ? (0, import_jsx_runtime20.jsx)("div", { style: { display: "contents" }, children: v14 }) : v14 }) }) }, l27.contentId) });
});
var H9 = "PopoverClose";
var K6 = s14.forwardRef((o23, e29) => {
  const { __scopePopover: t30, ...p27 } = o23, n23 = f12(H9, t30);
  return (0, import_jsx_runtime20.jsx)(c7, { ...p27, ref: e29, onPress: (0, import_core19.composeEventHandlers)(o23.onPress, () => n23.onOpenChange(false)) });
});
K6.displayName = H9;
var _o = "PopoverArrow";
var L7 = s14.forwardRef((o23, e29) => {
  const { __scopePopover: t30, ...p27 } = o23, n23 = g11(t30);
  return (0, import_jsx_runtime20.jsx)(ge2, { ...n23, ...p27, ref: e29 });
});
L7.displayName = _o;
var B7 = s14.forwardRef((o23, e29) => (0, import_jsx_runtime20.jsx)(import_react_native7.ScrollView, { ref: e29, ...o23 }));
var ie = (0, import_core19.withStaticProperties)(function(e29) {
  const { __scopePopover: t30, children: p27, open: n23, defaultOpen: c28, onOpenChange: u16, ...i24 } = e29, d21 = (0, import_core19.useId)(), C16 = t30 ? Object.keys(t30)[0] : d21, { when: A20, AdaptProvider: v14 } = W({ Contents: s14.useCallback(() => (0, import_jsx_runtime20.jsx)(x9, { name: `${C16}PopoverContents` }), []) }), a19 = A20, P17 = g11(t30), h18 = s14.useRef(null), [l27, y15] = s14.useState(false), [m25, w23] = A6({ prop: n23, defaultProp: c28 || false, onChange: u16, transition: true }), x20 = Y5(a19), Z10 = F10({ open: m25, setOpen: w23, breakpointActive: x20 }), G16 = { scope: t30, scopeKey: C16, popperScope: P17.__scopePopper, sheetBreakpoint: a19, contentId: (0, import_core19.useId)(), triggerRef: h18, open: m25, breakpointActive: x20, onOpenChange: w23, onOpenToggle: (0, import_core19.useEvent)(() => {
    m25 && x20 || w23(!m25);
  }), hasCustomAnchor: l27, onCustomAnchorAdd: s14.useCallback(() => y15(true), []), onCustomAnchorRemove: s14.useCallback(() => y15(false), []) }, b17 = (0, import_jsx_runtime20.jsx)(be, { ...P17, stayInFrame: true, ...i24, children: (0, import_jsx_runtime20.jsx)(E8, { ...G16, children: (0, import_jsx_runtime20.jsx)(To, { onOpenChange: w23, __scopePopover: t30, children: p27 }) }) });
  return (0, import_jsx_runtime20.jsx)(v14, { children: import_core19.isWeb ? (0, import_jsx_runtime20.jsx)(s12.Provider, { value: Z10, children: b17 }) : b17 });
}, { Anchor: M8, Arrow: L7, Trigger: z7, Content: Oo, Close: K6, Adapt: b2, ScrollView: B7, Sheet: Sn });
function W9(o23) {
  return o23 ? "open" : "closed";
}
__name(W9, "W");
var To = /* @__PURE__ */ __name((o23) => {
  const e29 = f12("PopoverSheetController", o23.__scopePopover), t30 = Io(e29), p27 = e29.breakpointActive, n23 = (0, import_core19.useGet)(t30);
  return (0, import_jsx_runtime20.jsx)(Pn, { onOpenChange: (c28) => {
    n23() && o23.onOpenChange(c28);
  }, open: e29.open, hidden: p27 === false, children: o23.children });
}, "To");
var Y5 = /* @__PURE__ */ __name((o23) => {
  const e29 = (0, import_core19.useMedia)();
  return typeof o23 == "boolean" || !o23 ? !!o23 : e29[o23];
}, "Y");
var Io = /* @__PURE__ */ __name((o23) => {
  const e29 = Y5(o23.sheetBreakpoint);
  return o23.open === false ? false : e29;
}, "Io");

// node_modules/@tamagui/progress/dist/esm/Progress.js
var import_jsx_runtime21 = require("react/jsx-runtime");
var import_core20 = require("@tamagui/core-node");
var import_get_size2 = __toESM(require_cjs10());
var c15 = __toESM(require("react"));
var l16 = "Progress";
var [z8, C10] = V(l16);
var [k11, A12] = z8(l16);
var g12 = "ProgressIndicator";
var E9 = (0, import_core20.styled)(k4, { name: g12, height: "100%", width: "100%", backgrounded: true });
var P11 = E9.extractable(c15.forwardRef((e29, r32) => {
  const { __scopeProgress: a19, ...o23 } = e29, t30 = A12(g12, a19), i24 = t30.max - (t30.value ?? 0), p27 = -t30.width * (i24 / 100);
  return (0, import_jsx_runtime21.jsx)(E9, { "data-state": I8(t30.value, t30.max), "data-value": t30.value ?? void 0, "data-max": t30.max, x: p27, width: t30.width, ...o23, ref: r32 });
}));
P11.displayName = g12;
function D8(e29, r32) {
  return `${Math.round(e29 / r32 * 100)}%`;
}
__name(D8, "D");
function I8(e29, r32) {
  return e29 == null ? "indeterminate" : e29 === r32 ? "complete" : "loading";
}
__name(I8, "I");
function m15(e29) {
  return typeof e29 == "number";
}
__name(m15, "m");
function f13(e29) {
  return m15(e29) && !isNaN(e29) && e29 > 0;
}
__name(f13, "f");
function V9(e29, r32) {
  return m15(e29) && !isNaN(e29) && e29 <= r32 && e29 >= 0;
}
__name(V9, "V");
function F11(e29, r32) {
  return `Invalid prop \`max\` of value \`${e29}\` supplied to \`${r32}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${d11}\`.`;
}
__name(F11, "F");
function G9(e29, r32) {
  return `Invalid prop \`value\` of value \`${e29}\` supplied to \`${r32}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${d11} if no \`max\` prop is set)
  - \`null\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
__name(G9, "G");
var d11 = 100;
var N7 = (0, import_core20.styled)(k4, { name: l16, borderRadius: 1e5, overflow: "hidden", backgrounded: true, variants: { size: { "...size": (e29) => {
  const r32 = Math.round((0, import_core20.getVariableValue)((0, import_get_size2.getSize)(e29)) * 0.25);
  return { height: r32, minWidth: (0, import_core20.getVariableValue)(r32) * 20, width: "100%" };
} } } });
var x13 = (0, import_core20.withStaticProperties)(N7.extractable(c15.forwardRef((e29, r32) => {
  const { __scopeProgress: a19, value: o23, max: t30, getValueLabel: i24 = D8, size: p27 = "$true", ...u16 } = e29, s25 = f13(t30) ? t30 : d11, n23 = V9(o23, s25) ? o23 : null, _13 = m15(n23) ? i24(n23, s25) : void 0, [T16, L15] = c15.useState(0);
  return (0, import_jsx_runtime21.jsx)(k11, { scope: a19, value: n23, max: s25, width: T16, children: (0, import_jsx_runtime21.jsx)(N7, { size: p27, "aria-valuemax": s25, "aria-valuemin": 0, "aria-valuenow": m15(n23) ? n23 : void 0, "aria-valuetext": _13, role: "progressbar", "data-state": I8(n23, s25), "data-value": n23 ?? void 0, "data-max": s25, ...u16, onLayout: (b17) => {
    var h18;
    L15(b17.nativeEvent.layout.width), (h18 = u16.onLayout) == null || h18.call(u16, b17);
  }, ref: r32 }) });
})), { Indicator: P11 });
x13.displayName = l16, x13.propTypes = { max(e29, r32, a19) {
  const o23 = e29[r32], t30 = String(o23);
  return o23 && !f13(o23) ? new Error(F11(t30, a19)) : null;
}, value(e29, r32, a19) {
  const o23 = e29[r32], t30 = String(o23), i24 = f13(e29.max) ? e29.max : d11;
  return o23 != null && !V9(o23, i24) ? new Error(G9(t30, a19)) : null;
} };

// node_modules/@tamagui/radio-group/dist/esm/RadioGroup.js
var import_jsx_runtime22 = require("react/jsx-runtime");
var import_react_use_previous = __toESM(require_dist5());
var import_core21 = require("@tamagui/core-node");
var import_focusable2 = __toESM(require_cjs22());
var import_get_size3 = __toESM(require_cjs10());
var n13 = __toESM(require("react"));
var G10 = "RadioGroup";
var ee4 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var [M10, oe3] = V(G10);
var [te2, re2] = M10(G10);
var _8 = /* @__PURE__ */ __name((e29) => e29 ? "checked" : "unchecked", "_");
var w12 = "RadioGroupIndicator";
var L8 = (0, import_core21.styled)(k4, { name: w12, variants: { unstyled: { false: { w: "40%", h: "40%", br: 1e3, backgroundColor: "$color", pressTheme: true, pressStyle: { backgroundColor: "$colorTransparent" } } } }, defaultVariants: { unstyled: false } });
var x14 = L8.extractable(n13.forwardRef((e29, o23) => {
  const { __scopeRadioGroupItem: r32, forceMount: a19, disabled: l27, ...u16 } = e29, { checked: i24 } = ne2(w12, r32);
  return a19 || i24 ? (0, import_jsx_runtime22.jsx)(L8, { theme: "active", "data-state": _8(i24), "data-disabled": l27 ? "" : void 0, ...u16, ref: o23 }) : null;
}));
x14.displayName = w12;
var D9 = "RadioGroupItem";
var [ae, ne2] = M10(G10);
var A13 = (0, import_core21.styled)(k4, { name: D9, tag: "button", variants: { unstyled: { false: { size: "$true", borderRadius: 1e3, backgroundColor: "$background", alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: "$borderColor", padding: 0, hoverStyle: { borderColor: "$borderColorHover", background: "$backgroundHover" }, focusStyle: { borderColor: "$borderColorHover", background: "$backgroundHover" }, pressStyle: { borderColor: "$borderColorFocus", background: "$backgroundFocus" } } }, size: { "...size": (e29, { props: o23 }) => {
  const r32 = Math.floor((0, import_core21.getVariableValue)((0, import_get_size3.getSize)(e29)) * (o23.scaleSize ?? 0.5));
  return { width: r32, height: r32 };
} } }, defaultVariants: { unstyled: false } });
var ie2 = A13.extractable(n13.forwardRef((e29, o23) => {
  const { __scopeRadioGroup: r32, value: a19, labelledBy: l27, disabled: u16, ...i24 } = e29, { value: m25, disabled: b17, required: s25, onChange: d21, name: v14, native: f25, accentColor: R17 } = re2(D9, r32), [p27, O12] = n13.useState(null), I12 = n13.useRef(false), S19 = n13.useRef(null), $8 = (0, import_core21.useComposedRefs)(o23, (t30) => O12(t30), S19), h18 = n13.useRef(false), T16 = import_core21.isWeb ? p27 ? Boolean(p27.closest("form")) : true : false, y15 = m25 === a19, q13 = U5(p27), z14 = l27 || q13;
  n13.useEffect(() => {
    if (import_core21.isWeb) {
      const t30 = /* @__PURE__ */ __name((K11) => {
        ee4.includes(K11.key) && (h18.current = true);
      }, "t"), H14 = /* @__PURE__ */ __name(() => h18.current = false, "H");
      return document.addEventListener("keydown", t30), document.addEventListener("keyup", H14), () => {
        document.removeEventListener("keydown", t30), document.removeEventListener("keyup", H14);
      };
    }
  }, []), process.env.TAMAGUI_TARGET === "native" && n13.useEffect(() => {
    if (e29.id)
      return (0, import_focusable2.registerFocusable)(e29.id, { focusAndSelect: () => {
        d21 == null || d21(a19);
      }, focus: () => {
      } });
  }, [e29.id, a19]);
  const g17 = b17 || u16;
  return (0, import_jsx_runtime22.jsx)(ae, { checked: y15, scope: r32, children: import_core21.isWeb && f25 ? (0, import_jsx_runtime22.jsx)(V10, { control: p27, bubbles: !I12.current, name: v14, value: a19, checked: y15, required: s25, disabled: g17, id: e29.id, accentColor: R17 }) : (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [(0, import_jsx_runtime22.jsx)(A13, { "data-state": _8(y15), "data-disabled": g17 ? "" : void 0, role: "radio", "aria-labelledby": z14, "aria-checked": y15, "aria-required": s25, disabled: g17, ref: $8, ...import_core21.isWeb && { type: "button", value: a19 }, ...i24, onPress: (0, import_core21.composeEventHandlers)(e29.onPress, (t30) => {
    y15 || d21 == null || d21(a19), T16 && (I12.current = t30.isPropagationStopped(), I12.current || t30.stopPropagation());
  }), ...import_core21.isWeb && { onKeyDown: (0, import_core21.composeEventHandlers)(e29.onKeyDown, (t30) => {
    t30.key === "Enter" && t30.preventDefault();
  }), onFocus: (0, import_core21.composeEventHandlers)(i24.onFocus, () => {
    var t30;
    h18.current && ((t30 = S19.current) == null || t30.click());
  }) } }), T16 && (0, import_jsx_runtime22.jsx)(V10, { isHidden: true, control: p27, bubbles: !I12.current, name: v14, value: a19, checked: y15, required: s25, disabled: g17 })] }) });
}));
var V10 = /* @__PURE__ */ __name((e29) => {
  const { checked: o23, bubbles: r32 = true, control: a19, isHidden: l27, accentColor: u16, ...i24 } = e29, m25 = n13.useRef(null), b17 = (0, import_react_use_previous.usePrevious)(o23);
  return n13.useEffect(() => {
    const s25 = m25.current, d21 = window.HTMLInputElement.prototype, f25 = Object.getOwnPropertyDescriptor(d21, "checked").set;
    if (b17 !== o23 && f25) {
      const R17 = new Event("click", { bubbles: r32 });
      f25.call(s25, o23), s25.dispatchEvent(R17);
    }
  }, [b17, o23, r32]), (0, import_jsx_runtime22.jsx)("input", { type: "radio", defaultChecked: o23, ...i24, tabIndex: -1, ref: m25, "aria-hidden": l27, style: { ...l27 ? { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } : { appearance: "auto", accentColor: u16 }, ...e29.style } });
}, "V");
var B8 = (0, import_core21.styled)(k4, { name: G10, variants: { orientation: { horizontal: { flexDirection: "row", spaceDirection: "horizontal" }, vertical: { flexDirection: "column", spaceDirection: "vertical" } } } });
var F12 = (0, import_core21.withStaticProperties)(B8.extractable(n13.forwardRef((e29, o23) => {
  const { __scopeRadioGroup: r32, value: a19, defaultValue: l27, onValueChange: u16, disabled: i24 = false, required: m25 = false, name: b17, orientation: s25, native: d21, accentColor: v14, ...f25 } = e29, [R17, p27] = A6({ prop: a19, defaultProp: l27, onChange: u16 });
  return (0, import_jsx_runtime22.jsx)(te2, { scope: r32, value: R17, required: m25, onChange: p27, disabled: i24, name: b17, native: d21, accentColor: v14, children: (0, import_jsx_runtime22.jsx)(B8, { "aria-valuetext": R17, role: "radiogroup", "aria-orientation": s25, ref: o23, orientation: s25, "data-disabled": i24 ? "" : void 0, ...f25 }) });
})), { Indicator: x14, Item: ie2 });
F12.displayName = G10;

// node_modules/@tamagui/select/dist/esm/Select.js
var import_jsx_runtime28 = require("react/jsx-runtime");
var import_core29 = require("@tamagui/core-node");
var import_list_item = __toESM(require_cjs24());

// node_modules/@tamagui/separator/dist/esm/Separator.js
var import_core22 = require("@tamagui/core-node");
var e17 = (0, import_core22.styled)(import_core22.Stack, { name: "Separator", borderColor: "$borderColor", flexShrink: 0, borderWidth: 0, flex: 1, height: 0, maxHeight: 0, borderBottomWidth: 1, y: -0.5, variants: { vertical: { true: { y: 0, x: -0.5, height: import_core22.isWeb ? "initial" : "auto", maxHeight: import_core22.isWeb ? "initial" : "auto", width: 0, maxWidth: 0, borderBottomWidth: 0, borderRightWidth: 1 } } } });

// node_modules/@tamagui/select/dist/esm/Select.js
var c18 = __toESM(require("react"));

// node_modules/@tamagui/select/dist/esm/constants.js
var t15 = "Select";
var o13 = 8;
var L9 = 8;
var O7 = "SelectViewport";

// node_modules/@tamagui/select/dist/esm/context.js
var import_jsx_runtime23 = require("react/jsx-runtime");
var [c17, a12] = V(t15);
var [r16, d12] = c17(t15);
var i14 = /* @__PURE__ */ __name((e29) => (0, import_jsx_runtime23.jsx)(r16, { isInSheet: true, scope: e29.__scopeSelect, ...e29.context, children: e29.children }), "i");

// node_modules/@tamagui/select/dist/esm/SelectContent.js
var import_jsx_runtime24 = require("react/jsx-runtime");
var import_core24 = require("@tamagui/core-node");
var import_focus_scope3 = __toESM(require_cjs9());

// node_modules/@tamagui/select/dist/esm/useSelectBreakpointActive.js
var import_core23 = require("@tamagui/core-node");
var o14 = /* @__PURE__ */ __name((e29) => {
  const t30 = (0, import_core23.useMedia)();
  return e29 ? e29 === true ? true : e29 ? t30[e29] : false : false;
}, "o");
var a13 = /* @__PURE__ */ __name((e29) => {
  const t30 = o14(e29.sheetBreakpoint);
  return e29.open === false ? false : t30;
}, "a");

// node_modules/@tamagui/select/dist/esm/SelectContent.js
var P13 = "SelectContent";
var E11 = /* @__PURE__ */ __name(({ children: s25, __scopeSelect: n23, zIndex: r32 = 1e3, ...c28 }) => {
  const e29 = d12(P13, n23), l27 = (0, import_core24.useThemeName)(), m25 = a13(e29), t30 = (0, import_jsx_runtime24.jsx)(import_core24.Theme, { forceClassName: true, name: l27, children: s25 }), p27 = (0, import_core24.useIsTouchDevice)();
  return m25 ? e29.open ? (0, import_jsx_runtime24.jsx)(import_jsx_runtime24.Fragment, { children: t30 }) : null : (0, import_jsx_runtime24.jsx)(FloatingPortal, { children: e29.open ? (0, import_jsx_runtime24.jsx)(FloatingOverlay, { style: { zIndex: r32 }, lockScroll: !p27, children: (0, import_jsx_runtime24.jsx)(import_focus_scope3.FocusScope, { loop: true, trapped: true, ...c28, children: (0, import_jsx_runtime24.jsx)(T3, { children: t30 }) }) }) : (0, import_jsx_runtime24.jsx)("div", { style: { display: "none" }, children: t30 }) });
}, "E");

// node_modules/@tamagui/select/dist/esm/SelectImpl.js
var import_jsx_runtime25 = require("react/jsx-runtime");
var import_core25 = require("@tamagui/core-node");
var t16 = __toESM(require("react"));
var import_react_dom5 = require("react-dom");
var Pe4 = /* @__PURE__ */ __name((z14) => {
  const { __scopeSelect: T16, children: K11, open: n23 = false, selectedIndexRef: he5, listContentRef: b17 } = z14, A20 = d12("SelectSheetImpl", T16), { setActiveIndex: m25, setOpen: u16, setSelectedIndex: j15, selectedIndex: c28, activeIndex: i24, forceUpdate: xe4 } = A20, [E18, p27] = t16.useState(0), M17 = (0, import_core25.useIsTouchDevice)(), a19 = t16.useRef([]), D14 = t16.useRef(null), P17 = t16.useRef(null), C16 = t16.useRef(null), w23 = t16.useRef(false), L15 = t16.useRef(true), v14 = t16.useRef(), g17 = t16.useRef({ isMouseOutside: false }), [I12, f25] = t16.useState(false), [l27, h18] = t16.useState(false), [B12, x20] = t16.useState(0), [G16, J16] = t16.useState(false), k17 = t16.useRef({});
  t16.useEffect(() => {
    const e29 = requestAnimationFrame(() => {
      n23 || (p27(0), h18(false), m25(null), f25(false));
    });
    return () => {
      cancelAnimationFrame(e29);
    };
  }, [n23, m25]), import_core25.isWeb && import_core25.isClient && t16.useEffect(() => {
    if (!n23)
      return;
    const e29 = /* @__PURE__ */ __name((o23) => {
      g17.current.isMouseOutside && u16(false);
    }, "e");
    return document.addEventListener("mouseup", e29), () => {
      document.removeEventListener("mouseup", e29);
    };
  }, [n23]);
  const H14 = size({ apply({ availableHeight: e29, rects: { reference: { width: o23 } } }) {
    k17.current = { width: o23, maxHeight: e29 };
  }, padding: o13 }), { x: F16, y: N12, reference: Q10, floating: U10, strategy: X9, context: s25, refs: r32 } = useFloating2({ open: n23, onOpenChange: u16, whileElementsMounted: autoUpdate, placement: "bottom-start", middleware: l27 ? [offset(5), M17 ? shift({ crossAxis: true, padding: o13 }) : flip({ padding: o13 }), H14] : [inner({ listRef: a19, overflowRef: D14, index: c28, offset: B12, onFallbackChange: h18, padding: 10, minItemsVisible: M17 ? 10 : 4, referenceOverflowThreshold: 20 }), H14] }), R17 = r32.floating, Y11 = n23 && E18 > L9, Z10 = n23 && R17.current && E18 < R17.current.scrollHeight - R17.current.clientHeight - L9, S19 = useInteractions([useClick(s25, { event: "mousedown" }), useDismiss(s25, { outsidePress: true }), useRole(s25, { role: "listbox" }), useInnerOffset(s25, { enabled: !l27, onChange: x20, overflowRef: D14 }), useListNavigation(s25, { listRef: a19, activeIndex: i24, selectedIndex: c28, onNavigate: m25 }), useTypeahead(s25, { listRef: b17, onMatch: n23 ? m25 : j15, selectedIndex: c28, activeIndex: i24 })]), $8 = t16.useMemo(() => ({ ...S19, getReferenceProps() {
    return S19.getReferenceProps({ ref: Q10, className: "SelectTrigger", onKeyDown(e29) {
      (e29.key === "Enter" || e29.key === " " && !s25.dataRef.current.typing) && (e29.preventDefault(), u16(true));
    } });
  }, getFloatingProps(e29) {
    return S19.getFloatingProps({ ref: U10, className: "Select", ...e29, style: { position: X9, top: N12 ?? "", left: F16 ?? "", outline: 0, scrollbarWidth: "none", ...k17.current, ...e29 == null ? void 0 : e29.style }, onPointerEnter() {
      f25(false), g17.current.isMouseOutside = false;
    }, onPointerLeave() {
      g17.current.isMouseOutside = true;
    }, onPointerMove() {
      g17.current.isMouseOutside = false, f25(false);
    }, onKeyDown() {
      f25(true);
    }, onContextMenu(o23) {
      o23.preventDefault();
    }, onScroll(o23) {
      (0, import_react_dom5.flushSync)(() => p27(o23.currentTarget.scrollTop));
    } });
  } }), [U10, N12, F16, S19]);
  return (0, import_core25.useIsomorphicLayoutEffect)(() => {
    if (n23)
      return v14.current = setTimeout(() => {
        w23.current = true;
      }, 300), () => {
        clearTimeout(v14.current);
      };
    w23.current = false, L15.current = true, x20(0), h18(false), J16(false);
  }, [n23]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    function e29(o23) {
      var W14, _13, V15;
      const y15 = o23.target;
      (W14 = r32.floating.current) != null && W14.contains(y15) || (_13 = P17.current) != null && _13.contains(y15) || (V15 = C16.current) != null && V15.contains(y15) || (u16(false), f25(false));
    }
    __name(e29, "e");
    if (n23)
      return document.addEventListener("pointerdown", e29), () => {
        document.removeEventListener("pointerdown", e29);
      };
  }, [n23, r32, u16]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    var e29, o23;
    n23 && I12 && i24 != null && ((e29 = a19.current[i24]) == null || e29.scrollIntoView({ block: "nearest" })), p27(((o23 = r32.floating.current) == null ? void 0 : o23.scrollTop) ?? 0);
  }, [n23, r32, I12, i24]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    var e29;
    n23 && l27 && c28 != null && ((e29 = a19.current[c28]) == null || e29.scrollIntoView({ block: "nearest" }));
  }, [n23, l27, c28]), (0, import_core25.useIsomorphicLayoutEffect)(() => {
    r32.floating.current && l27 && (r32.floating.current.style.maxHeight = "");
  }, [r32, l27]), (0, import_jsx_runtime25.jsx)(r16, { scope: T16, ...A20, setScrollTop: p27, setInnerOffset: x20, floatingRef: R17, setValueAtIndex: (e29, o23) => {
    b17.current[e29] = o23;
  }, fallback: l27, interactions: $8, floatingContext: s25, activeIndex: i24, canScrollDown: !!Z10, canScrollUp: !!Y11, controlledScrolling: I12, dataRef: s25.dataRef, listRef: a19, blockSelection: G16, allowMouseUpRef: L15, upArrowRef: P17, downArrowRef: C16, selectTimeoutRef: v14, allowSelectRef: w23, children: K11 });
}, "Pe");
var Ce2 = typeof navigator < "u" && navigator.userAgent || "";

// node_modules/@tamagui/select/dist/esm/SelectScrollButton.js
var import_jsx_runtime26 = require("react/jsx-runtime");
var import_core26 = require("@tamagui/core-node");
var n15 = __toESM(require("react"));
var import_react_dom6 = require("react-dom");
var w13 = "SelectScrollUpButton";
var G11 = n15.forwardRef((c28, s25) => (0, import_jsx_runtime26.jsx)(E12, { componentName: w13, ...c28, dir: "up", ref: s25 }));
G11.displayName = w13;
var h12 = "SelectScrollDownButton";
var J11 = n15.forwardRef((c28, s25) => (0, import_jsx_runtime26.jsx)(E12, { componentName: h12, ...c28, dir: "down", ref: s25 }));
J11.displayName = h12;
var E12 = n15.memo(n15.forwardRef((c28, s25) => {
  var g17;
  const { __scopeSelect: N12, dir: i24, componentName: u16, ...R17 } = c28, { floatingRef: o23, forceUpdate: K11, open: f25, fallback: x20, setScrollTop: I12, setInnerOffset: y15, ...A20 } = d12(u16, N12), [e29, F16] = n15.useState(null), S19 = n15.useRef("idle"), d21 = A20[i24 === "down" ? "canScrollDown" : "canScrollUp"], l27 = n15.useRef(), { x: U10, y: _13, reference: L15, floating: D14, strategy: M17, update: O12, refs: m25 } = useFloating2({ open: f25 && d21, strategy: "fixed", placement: i24 === "up" ? "top" : "bottom", middleware: [offset(({ rects: t30 }) => -t30.floating.height)], whileElementsMounted: (...t30) => autoUpdate(...t30, { animationFrame: true }) }), H14 = c5(s25, D14);
  if (o23 && (f25 ? e29 !== o23.current && (F16(o23.current), L15(o23.current), requestAnimationFrame(O12)) : cancelAnimationFrame(l27.current)), (0, import_core26.useIsomorphicLayoutEffect)(() => () => {
    cancelAnimationFrame(l27.current);
  }, []), !(d21 && o23))
    return null;
  const b17 = /* @__PURE__ */ __name((t30) => {
    console.log("on scroll?"), x20 ? m25.floating.current && (m25.floating.current.scrollTop -= t30, (0, import_react_dom6.flushSync)(() => {
      var r32;
      return I12(((r32 = m25.floating.current) == null ? void 0 : r32.scrollTop) ?? 0);
    })) : (0, import_react_dom6.flushSync)(() => y15((r32) => r32 - t30));
  }, "b");
  return (0, import_jsx_runtime26.jsx)(c7, { ref: H14, componentName: u16, "aria-hidden": true, ...R17, zIndex: 1e3, position: M17, left: U10 || 0, top: _13 || 0, width: `calc(${(((g17 = o23 == null ? void 0 : o23.current) == null ? void 0 : g17.offsetWidth) ?? 0) - 2}px)`, onPointerEnter: () => {
    S19.current = "active";
    let t30 = Date.now();
    function r32() {
      if (e29) {
        const B12 = Date.now(), v14 = B12 - t30;
        t30 = B12;
        const a19 = v14 / 2, P17 = i24 === "up" ? e29.scrollTop : e29.scrollHeight - e29.clientHeight - e29.scrollTop, C16 = i24 === "up" ? e29.scrollTop - a19 > 0 : e29.scrollTop + a19 < e29.scrollHeight - e29.clientHeight;
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
var g13 = __toESM(require("react"));
var V12 = (0, import_core28.styled)(k4, { name: O7, backgroundColor: "$background", elevate: true, bordered: true, userSelect: "none", outlineWidth: 0, variants: { size: { "...size": (o23, { tokens: r32 }) => ({ borderRadius: r32.radius[o23] ?? o23 }) } }, defaultVariants: { size: "$2" } });
var v8 = g13.forwardRef((o23, r32) => {
  const { __scopeSelect: s25, children: i24, disableScroll: l27, ...a19 } = o23, e29 = d12(O7, s25);
  if (o14(e29.sheetBreakpoint) || !import_core27.isWeb)
    return (0, import_jsx_runtime27.jsx)(B5, { hostName: `${e29.scopeKey}SheetContents`, children: (0, import_jsx_runtime27.jsx)(i14, { context: e29, children: i24 }) });
  if (!e29.floatingContext)
    return null;
  if (!e29.open)
    return i24;
  const { style: { scrollbarWidth: C16, listStyleType: _13, overflow: c28, ...p27 }, ...m25 } = e29.interactions.getFloatingProps();
  return (0, import_jsx_runtime27.jsxs)(import_jsx_runtime27.Fragment, { children: [!l27 && (0, import_jsx_runtime27.jsx)("style", { dangerouslySetInnerHTML: { __html: y11 } }), (0, import_jsx_runtime27.jsx)(FloatingFocusManager, { context: e29.floatingContext, children: (0, import_jsx_runtime27.jsx)(V12, { size: e29.size, role: "presentation", ...a19, ref: r32, ...m25, ...p27, overflow: l27 ? void 0 : c28 ?? "scroll", children: i24 }) })] });
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
var J12 = c18.forwardRef((t30, r32) => {
  const { __scopeSelect: l27, disabled: o23 = false, "aria-labelledby": e29, ...a19 } = t30, n23 = d12(k13, l27), p27 = e29;
  return (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { componentName: k13, backgrounded: true, radiused: true, hoverTheme: true, pressTheme: true, focusTheme: true, focusable: true, borderWidth: 1, size: n23.size, "aria-expanded": n23.open, "aria-autocomplete": "none", "aria-labelledby": p27, dir: n23.dir, disabled: o23, "data-disabled": o23 ? "" : void 0, ...a19, ref: r32, ...process.env.TAMAGUI_TARGET === "web" && n23.interactions ? n23.interactions.getReferenceProps() : { onPress() {
    n23.setOpen(!n23.open);
  } } });
});
J12.displayName = k13;
var M11 = "SelectValue";
var Q6 = (0, import_core29.styled)(p11, { name: M11, userSelect: "none" });
var Z4 = Q6.extractable(c18.forwardRef(({ __scopeSelect: t30, children: r32, placeholder: l27 }, o23) => {
  const e29 = d12(M11, t30), { onValueNodeHasChildrenChange: a19 } = e29, n23 = c5(o23, e29.onValueNodeChange), p27 = r32 ?? e29.selectedItem, i24 = !!p27, d21 = e29.value == null || e29.value === "" ? l27 ?? p27 : p27;
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    a19(i24);
  }, [a19, i24]), (0, import_jsx_runtime28.jsx)(Q6, { size: e29.size, ref: n23, pointerEvents: "none", children: d21 });
}));
Z4.displayName = M11;
var we = (0, import_core29.styled)(i7, { name: "SelectIcon", "aria-hidden": true, children: (0, import_jsx_runtime28.jsx)(p11, { children: "\u25BC" }) });
var E13 = "SelectItem";
var [Le2, ee5] = c17(E13);
var te3 = c18.forwardRef((t30, r32) => {
  const { __scopeSelect: l27, value: o23, disabled: e29 = false, textValue: a19, index: n23, ...p27 } = t30, i24 = d12(E13, l27), u16 = i24.value === o23, d21 = (0, import_core29.useId)(), { selectedIndex: _13, setSelectedIndex: f25, listRef: T16, open: O12, setOpen: x20, onChange: B12, setActiveIndex: F16, allowMouseUpRef: v14, allowSelectRef: S19, setValueAtIndex: R17, selectTimeoutRef: g17, dataRef: I12 } = i24, y15 = c5(r32, (m25) => {
    import_core29.isWeb && m25 instanceof HTMLElement && T16 && (T16.current[n23] = m25);
  });
  c18.useEffect(() => {
    R17(n23, o23);
  }, [n23, R17, o23]);
  function C16() {
    f25(n23), B12(o23), x20(false);
  }
  __name(C16, "C");
  const N12 = i24.interactions ? i24.interactions.getItemProps({ onTouchStart() {
    S19.current = true, v14.current = false;
  }, onKeyDown(m25) {
    m25.key === "Enter" || m25.key === " " && !(I12 != null && I12.current.typing) ? (m25.preventDefault(), C16()) : S19.current = true;
  }, onClick() {
    S19.current && (f25(n23), x20(false));
  }, onMouseUp() {
    v14.current && (S19.current && C16(), clearTimeout(g17.current), g17.current = setTimeout(() => {
      S19.current = true;
    }));
  } }) : { onPress: C16 };
  return (0, import_jsx_runtime28.jsx)(Le2, { scope: l27, value: o23, textId: d21 || "", isSelected: u16, children: (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { tag: "div", backgrounded: true, pressTheme: true, hoverTheme: true, cursor: "default", outlineWidth: 0, componentName: E13, ref: y15, "aria-labelledby": d21, "aria-selected": u16, "data-state": u16 ? "active" : "inactive", "aria-disabled": e29 || void 0, "data-disabled": e29 ? "" : void 0, tabIndex: e29 ? void 0 : -1, size: i24.size, focusStyle: { backgroundColor: "$backgroundHover" }, ...p27, ...N12 }) });
});
te3.displayName = E13;
var b10 = "SelectItemText";
var ke3 = (0, import_core29.styled)(s8, { name: b10, userSelect: "none" });
var oe4 = c18.forwardRef((t30, r32) => {
  const { __scopeSelect: l27, className: o23, ...e29 } = t30, a19 = d12(b10, l27), n23 = ee5(b10, l27), p27 = c18.useRef(null), i24 = c5(r32, p27), u16 = Boolean(n23.isSelected && a19.valueNode), d21 = c18.useMemo(() => (0, import_jsx_runtime28.jsx)(ke3, { className: o23, size: a19.size, id: n23.textId, ...e29, ref: i24 }), [t30, a19.size, o23, n23.textId]);
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    u16 && a19.setSelectedItem(d21);
  }, [u16, d21]), (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: d21 });
});
oe4.displayName = b10;
var re3 = "SelectItemIndicator";
var Me3 = (0, import_core29.styled)(i7, { name: b10 });
var ne3 = c18.forwardRef((t30, r32) => {
  const { __scopeSelect: l27, ...o23 } = t30;
  return ee5(re3, l27).isSelected ? (0, import_jsx_runtime28.jsx)(Me3, { "aria-hidden": true, ...o23, ref: r32 }) : null;
});
ne3.displayName = re3;
var z9 = "SelectGroup";
var [ze2, Oe3] = c17(z9);
var Be2 = (0, import_core29.styled)(c7, { name: z9, width: "100%" });
var le2 = c18.forwardRef((t30, r32) => {
  const { __scopeSelect: l27, ...o23 } = t30, e29 = (0, import_core29.useId)();
  return (0, import_jsx_runtime28.jsx)(ze2, { scope: l27, id: e29 || "", children: (0, import_jsx_runtime28.jsx)(Be2, { role: "group", "aria-labelledby": e29, ...o23, ref: r32 }) });
});
le2.displayName = z9;
var V13 = "SelectLabel";
var ce2 = c18.forwardRef((t30, r32) => {
  const { __scopeSelect: l27, ...o23 } = t30, e29 = d12(V13, l27), a19 = Oe3(V13, l27);
  return (0, import_jsx_runtime28.jsx)(import_list_item.ListItem, { tag: "div", componentName: V13, fontWeight: "800", id: a19.id, size: e29.size, ...o23, ref: r32 });
});
ce2.displayName = V13;
var mt2 = (0, import_core29.styled)(e17, { name: "SelectSeparator" });
var Fe = /* @__PURE__ */ __name((t30) => {
  const r32 = d12("SelectSheetController", t30.__scopeSelect), l27 = a13(r32), o23 = o14(r32.sheetBreakpoint), e29 = (0, import_core29.useGet)(l27);
  return (0, import_jsx_runtime28.jsx)(Pn, { onOpenChange: (a19) => {
    e29() && t30.onOpenChange(a19);
  }, open: r32.open, hidden: o23 === false, children: t30.children });
}, "Fe");
var He3 = /* @__PURE__ */ __name((t30) => (0, import_jsx_runtime28.jsx)(import_jsx_runtime28.Fragment, { children: t30.children }), "He");
var Ue2 = (0, import_core29.withStaticProperties)((t30) => {
  const { __scopeSelect: r32, children: l27, open: o23, defaultOpen: e29, onOpenChange: a19, value: n23, defaultValue: p27, onValueChange: i24, size: u16 = "$true", dir: d21 } = t30, _13 = (0, import_core29.useId)(), f25 = r32 ? Object.keys(r32)[0] ?? _13 : _13, { when: T16, AdaptProvider: O12 } = W({ Contents: c18.useCallback(() => (0, import_jsx_runtime28.jsx)(x9, { name: `${f25}SheetContents` }), [f25]) }), x20 = T16, F16 = o14(x20) || !import_core29.isWeb ? He3 : Pe4, v14 = c18.useReducer(() => ({}), {})[1], [S19, R17] = c18.useState(null), [g17, I12] = A6({ prop: o23, defaultProp: e29 || false, onChange: a19 }), [y15, C16] = A6({ prop: n23, defaultProp: p27 || "", onChange: i24, transition: true }), [N12, m25] = c18.useState(0), H14 = c18.useRef(null), U10 = c18.useRef(null), D14 = c18.useRef([]), [W14, ae4] = c18.useState(0), [ie5, pe4] = c18.useState(null), [de7, ue3] = c18.useState(false);
  return (0, import_core29.useIsomorphicLayoutEffect)(() => {
    H14.current = W14, U10.current = N12;
  }), (0, import_jsx_runtime28.jsx)(O12, { children: (0, import_jsx_runtime28.jsx)(r16, { dir: d21, blockSelection: false, size: u16, fallback: false, selectedItem: S19, setSelectedItem: R17, forceUpdate: v14, valueNode: ie5, onValueNodeChange: pe4, onValueNodeHasChildrenChange: ue3, valueNodeHasChildren: de7, scopeKey: f25, sheetBreakpoint: x20, scope: r32, setValueAtIndex: (me5, Se4) => {
    D14.current[me5] = Se4;
  }, activeIndex: N12, onChange: C16, selectedIndex: W14, setActiveIndex: m25, setOpen: I12, setSelectedIndex: ae4, value: y15, open: g17, children: (0, import_jsx_runtime28.jsx)(Fe, { onOpenChange: I12, __scopeSelect: r32, children: (0, import_jsx_runtime28.jsx)(F16, { activeIndexRef: U10, listContentRef: D14, selectedIndexRef: H14, ...t30, open: g17, value: y15, children: l27 }) }) }) });
}, { Adapt: b2, Content: E11, Group: le2, Icon: we, Item: te3, ItemIndicator: ne3, ItemText: oe4, Label: ce2, ScrollDownButton: J11, ScrollUpButton: G11, Trigger: J12, Value: Z4, Viewport: v8, Sheet: Sn });
Ue2.displayName = t15;

// node_modules/@tamagui/slider/dist/esm/Slider.js
var import_jsx_runtime31 = require("react/jsx-runtime");
var import_core31 = require("@tamagui/core-node");
var import_get_size5 = __toESM(require_cjs10());

// node_modules/@tamagui/helpers/dist/esm/clamp.js
function e18(n23, [m25, r32]) {
  return Math.min(r32, Math.max(m25, n23));
}
__name(e18, "e");

// node_modules/@tamagui/helpers/dist/esm/composeEventHandlers.js
function E14(n23, r32, { checkDefaultPrevented: t30 = true } = {}) {
  return !n23 || !r32 ? r32 || n23 : function(e29) {
    if (n23 == null || n23(e29), !e29 || !(t30 && "defaultPrevented" in e29) || "defaultPrevented" in e29 && !e29.defaultPrevented)
      return r32 == null ? void 0 : r32(e29);
  };
}
__name(E14, "E");

// node_modules/@tamagui/helpers/dist/esm/validStyleProps.js
var t18 = Object.freeze({ x: true, y: true, scale: true, perspective: true, scaleX: true, scaleY: true, skewX: true, skewY: true, matrix: true, rotate: true, rotateY: true, rotateX: true, rotateZ: true });
var r18 = Object.freeze({ placeholderTextColor: true });
var e19 = Object.freeze({ backfaceVisibility: true, backgroundColor: true, borderBottomColor: true, borderBottomEndRadius: true, borderBottomLeftRadius: true, borderBottomRightRadius: true, borderBottomStartRadius: true, borderBottomWidth: true, borderColor: true, borderEndColor: true, borderLeftColor: true, borderLeftWidth: true, borderRadius: true, borderRightColor: true, borderRightWidth: true, borderStartColor: true, borderStyle: true, borderTopColor: true, borderTopEndRadius: true, borderTopLeftRadius: true, borderTopRightRadius: true, borderTopStartRadius: true, borderTopWidth: true, borderWidth: true, opacity: true, transform: true, alignContent: true, alignItems: true, alignSelf: true, aspectRatio: true, borderEndWidth: true, borderStartWidth: true, bottom: true, display: true, end: true, flex: true, flexBasis: true, flexDirection: true, flexGrow: true, flexShrink: true, flexWrap: true, gap: true, columnGap: true, rowGap: true, height: true, justifyContent: true, left: true, margin: true, marginBottom: true, marginEnd: true, marginHorizontal: true, marginLeft: true, marginRight: true, marginStart: true, marginTop: true, marginVertical: true, maxHeight: true, maxWidth: true, minHeight: true, minWidth: true, overflow: true, padding: true, paddingBottom: true, paddingEnd: true, paddingHorizontal: true, paddingLeft: true, paddingRight: true, paddingStart: true, paddingTop: true, paddingVertical: true, position: true, right: true, start: true, top: true, width: true, zIndex: true, direction: true, shadowColor: true, shadowOffset: true, shadowOpacity: true, shadowRadius: true, ...r18, ...t18, ...process.env.TAMAGUI_TARGET === "web" && { borderBottomStyle: true, borderTopStyle: true, borderLeftStyle: true, borderRightStyle: true, overflowX: true, overflowY: true, userSelect: true, cursor: true, contain: true, pointerEvents: true, boxSizing: true, boxShadow: true, outlineColor: true, outlineStyle: true, outlineOffset: true, outlineWidth: true } });
var o16 = Object.freeze({ fontFamily: true, fontSize: true, fontStyle: true, fontWeight: true, letterSpacing: true, lineHeight: true, textTransform: true });
var u15 = Object.freeze({ color: true, ...o16, textAlign: true, textDecorationLine: true, textDecorationStyle: true, textDecorationColor: true, textShadowColor: true, textShadowOffset: true, textShadowRadius: true, ...process.env.TAMAGUI_TARGET === "web" && { whiteSpace: true, wordWrap: true, textOverflow: true, textDecorationDistance: true, userSelect: true, selectable: true, cursor: true, WebkitLineClamp: true, WebkitBoxOrient: true } });
var i15 = Object.freeze({ ...e19, ...u15 });
var a14 = Object.freeze({ enterStyle: true, exitStyle: true, hoverStyle: true, pressStyle: true, focusStyle: true });
var n16 = Object.freeze({ ...a14, ...e19 });

// node_modules/@tamagui/use-direction/dist/esm/useDirection.js
var import_jsx_runtime29 = require("react/jsx-runtime");
var t19 = __toESM(require("react"));
var i16 = t19.createContext(void 0);
function d14(e29) {
  const r32 = t19.useContext(i16);
  return e29 || r32 || "ltr";
}
__name(d14, "d");

// node_modules/@tamagui/slider/dist/esm/Slider.js
var d15 = __toESM(require("react"));

// node_modules/@tamagui/slider/dist/esm/constants.js
var e20 = "Slider";
var [r19, p16] = V(e20);
var [S11, l17] = r19(e20);
var [w15, g14] = r19(e20, { startEdge: "left", endEdge: "right", sizeProp: "width", size: 0, direction: 1 });
var a15 = ["PageUp", "PageDown"];
var x16 = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
var A14 = { ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"], rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"] };

// node_modules/@tamagui/slider/dist/esm/helpers.js
function m16(e29 = [], n23, r32) {
  const t30 = [...e29];
  return t30[r32] = n23, t30.sort((u16, o23) => u16 - o23);
}
__name(m16, "m");
function a16(e29, n23, r32) {
  return 100 / (r32 - n23) * (e29 - n23);
}
__name(a16, "a");
function b11(e29, n23) {
  return n23 > 2 ? `Value ${e29 + 1} of ${n23}` : n23 === 2 ? ["Minimum", "Maximum"][e29] : void 0;
}
__name(b11, "b");
function f16(e29, n23) {
  if (e29.length === 1)
    return 0;
  const r32 = e29.map((u16) => Math.abs(u16 - n23)), t30 = Math.min(...r32);
  return r32.indexOf(t30);
}
__name(f16, "f");
function i17(e29, n23, r32) {
  const t30 = e29 / 2, o23 = c20([0, 50], [0, t30]);
  return (t30 - o23(n23) * r32) * r32;
}
__name(i17, "i");
function s16(e29) {
  return e29.slice(0, -1).map((n23, r32) => e29[r32 + 1] - n23);
}
__name(s16, "s");
function l18(e29, n23) {
  if (n23 > 0) {
    const r32 = s16(e29);
    return Math.min(...r32) >= n23;
  }
  return true;
}
__name(l18, "l");
function c20(e29, n23) {
  return (r32) => {
    if (e29[0] === e29[1] || n23[0] === n23[1])
      return n23[0];
    const t30 = (n23[1] - n23[0]) / (e29[1] - e29[0]);
    return n23[0] + t30 * (r32 - e29[0]);
  };
}
__name(c20, "c");
function x17(e29) {
  return (String(e29).split(".")[1] || "").length;
}
__name(x17, "x");
function p17(e29, n23) {
  const r32 = Math.pow(10, n23);
  return Math.round(e29 * r32) / r32;
}
__name(p17, "p");

// node_modules/@tamagui/slider/dist/esm/SliderImpl.js
var import_jsx_runtime30 = require("react/jsx-runtime");
var import_core30 = require("@tamagui/core-node");
var import_get_size4 = __toESM(require_cjs10());
var w16 = __toESM(require("react"));
var P14 = (0, import_core30.styled)(c7, { variants: { orientation: { horizontal: {}, vertical: {} } } });
var k14 = (0, import_core30.styled)(P14, { position: "relative", variants: { size: (o23, n23) => {
  const i24 = n23.props.orientation, t30 = Math.round((0, import_core30.getVariableValue)((0, import_get_size4.getSize)(o23)) / 6);
  return i24 === "horizontal" ? { height: t30, borderRadius: t30, justifyContent: "center" } : { width: t30, borderRadius: t30, alignItems: "center" };
} } });
var v9 = w16.forwardRef((o23, n23) => {
  const { __scopeSlider: i24, onSlideStart: t30, onSlideMove: S19, onSlideEnd: u16, onHomeKeyDown: c28, onEndKeyDown: m25, onStepKeyDown: f25, ...a19 } = o23, d21 = l17(e20, i24);
  return (0, import_jsx_runtime30.jsx)(k14, { size: "$4", ...a19, "data-orientation": a19.orientation, ref: n23, ...import_core30.isWeb && { onKeyDown: (e29) => {
    e29.key === "Home" ? (c28(e29), e29.preventDefault()) : e29.key === "End" ? (m25(e29), e29.preventDefault()) : a15.concat(x16).includes(e29.key) && (f25(e29), e29.preventDefault());
  } }, onMoveShouldSetResponderCapture: () => true, onScrollShouldSetResponder: () => true, onScrollShouldSetResponderCapture: () => true, onMoveShouldSetResponder: () => true, onStartShouldSetResponder: () => true, onResponderTerminationRequest: () => false, onResponderGrant: (0, import_core30.composeEventHandlers)(o23.onResponderGrant, (e29) => {
    const r32 = e29.target, R17 = d21.thumbs.has(r32);
    import_core30.isWeb && r32 instanceof HTMLElement && d21.thumbs.has(r32) && r32.focus(), t30(e29, R17 ? "thumb" : "track");
  }), onResponderMove: (0, import_core30.composeEventHandlers)(o23.onResponderMove, (e29) => {
    e29.stopPropagation(), S19(e29);
  }), onResponderRelease: (0, import_core30.composeEventHandlers)(o23.onResponderRelease, (e29) => {
    u16(e29);
  }) });
});

// node_modules/@tamagui/slider/dist/esm/Slider.js
var Pe6 = d15.forwardRef((r32, c28) => {
  const { min: S19, max: i24, dir: t30, onSlideStart: a19, onSlideMove: e29, onStepKeyDown: n23, ...p27 } = r32, P17 = d14(t30), h18 = P17 === "ltr", b17 = d15.useRef(null), [s25, l27] = d15.useState(() => ({ size: 0, offset: 0 }));
  function v14(o23) {
    const m25 = [0, s25.size];
    return c20(m25, h18 ? [S19, i24] : [i24, S19])(o23);
  }
  __name(v14, "v");
  return (0, import_jsx_runtime31.jsx)(w15, { scope: r32.__scopeSlider, startEdge: h18 ? "left" : "right", endEdge: h18 ? "right" : "left", direction: h18 ? 1 : -1, sizeProp: "width", size: s25.size, children: (0, import_jsx_runtime31.jsx)(v9, { ref: R(c28, b17), dir: P17, ...p27, orientation: "horizontal", onLayout: () => {
    var o23;
    (o23 = b17.current) == null || o23.measure((m25, f25, T16, w23, K11, L15) => {
      l27({ size: T16, offset: K11 });
    });
  }, onSlideStart: (o23, m25) => {
    const f25 = v14(o23.nativeEvent.locationX);
    f25 && (a19 == null || a19(f25, m25));
  }, onSlideMove: (o23) => {
    const m25 = v14(o23.nativeEvent.pageX - s25.offset);
    m25 && (e29 == null || e29(m25));
  }, onSlideEnd: () => {
  }, onStepKeyDown: (o23) => {
    const m25 = A14[P17].includes(o23.key);
    n23 == null || n23({ event: o23, direction: m25 ? -1 : 1 });
  } }) });
});
var ge4 = d15.forwardRef((r32, c28) => {
  const { min: S19, max: i24, onSlideStart: t30, onSlideMove: a19, onStepKeyDown: e29, ...n23 } = r32, [p27, P17] = d15.useState(() => ({ size: 0, offset: 0 })), h18 = d15.useRef(null);
  function b17(s25) {
    const l27 = [0, p27.size];
    return c20(l27, [i24, S19])(s25);
  }
  __name(b17, "b");
  return (0, import_jsx_runtime31.jsx)(w15, { scope: r32.__scopeSlider, startEdge: "bottom", endEdge: "top", sizeProp: "height", size: p27.size, direction: 1, children: (0, import_jsx_runtime31.jsx)(v9, { ref: R(c28, h18), ...n23, orientation: "vertical", onLayout: ({ nativeEvent: { layout: s25 } }) => {
    var l27;
    (l27 = h18.current) == null || l27.measure((v14, o23, m25, f25, T16, w23) => {
      P17({ size: f25, offset: w23 });
    });
  }, onSlideStart: (s25, l27) => {
    const v14 = b17(s25.nativeEvent.locationY);
    v14 && (t30 == null || t30(v14, l27));
  }, onSlideMove: (s25) => {
    const l27 = b17(s25.nativeEvent.pageY - p27.offset);
    l27 && (a19 == null || a19(l27));
  }, onSlideEnd: () => {
  }, onStepKeyDown: (s25) => {
    const l27 = A14.ltr.includes(s25.key);
    e29 == null || e29({ event: s25, direction: l27 ? -1 : 1 });
  } }) });
});
var j10 = "SliderTrack";
var Te2 = (0, import_core31.styled)(k14, { name: "SliderTrack", height: "100%", width: "100%", backgroundColor: "$background", position: "relative", borderRadius: 1e5, overflow: "hidden" });
var _9 = d15.forwardRef((r32, c28) => {
  const { __scopeSlider: S19, ...i24 } = r32, t30 = l17(j10, S19);
  return (0, import_jsx_runtime31.jsx)(Te2, { "data-disabled": t30.disabled ? "" : void 0, "data-orientation": t30.orientation, orientation: t30.orientation, size: t30.size, ...i24, ref: c28 });
});
_9.displayName = j10;
var O8 = "SliderTrackActive";
var ze3 = (0, import_core31.styled)(k14, { name: "SliderTrackActive", backgroundColor: "$background", position: "absolute" });
var A15 = d15.forwardRef((r32, c28) => {
  const { __scopeSlider: S19, ...i24 } = r32, t30 = l17(O8, S19), a19 = g14(O8, S19), e29 = d15.useRef(null), n23 = c5(c28, e29), p27 = t30.values.length, P17 = t30.values.map((s25) => a16(s25, t30.min, t30.max)), h18 = p27 > 1 ? Math.min(...P17) : 0, b17 = 100 - Math.max(...P17);
  return (0, import_jsx_runtime31.jsx)(ze3, { orientation: t30.orientation, "data-orientation": t30.orientation, "data-disabled": t30.disabled ? "" : void 0, size: t30.size, ...i24, ref: n23, [a19.startEdge]: `${h18}%`, [a19.endEdge]: `${b17}%`, ...a19.sizeProp === "width" ? { height: "100%" } : { left: 0, right: 0 } });
});
A15.displayName = O8;
var D10 = "SliderThumb";
var q8 = /* @__PURE__ */ __name((r32) => {
  const c28 = typeof r32 == "number" ? r32 : (0, import_get_size5.getSize)(r32, -1);
  return { width: c28, height: c28, minWidth: c28, minHeight: c28 };
}, "q");
var we2 = (0, import_core31.styled)(k4, { name: "SliderThumb", position: "absolute", bordered: 2, borderWidth: 2, backgrounded: true, pressTheme: import_core31.isWeb, focusTheme: import_core31.isWeb, hoverTheme: import_core31.isWeb, variants: { size: { "...size": q8 } } });
var C12 = d15.forwardRef((r32, c28) => {
  const { __scopeSlider: S19, index: i24, size: t30, ...a19 } = r32, e29 = l17(D10, S19), n23 = g14(D10, S19), [p27, P17] = d15.useState(null), h18 = c5(c28, (T16) => P17(T16)), b17 = e29.values[i24], s25 = b17 === void 0 ? 0 : a16(b17, e29.min, e29.max), l27 = b11(i24, e29.values.length), v14 = t30 ?? e29.size ?? "$true", [o23, m25] = d15.useState(() => (0, import_core31.getVariableValue)(q8(v14).width)), f25 = o23 ? i17(o23, s25, n23.direction) : 0;
  return d15.useEffect(() => {
    if (p27)
      return e29.thumbs.add(p27), () => {
        e29.thumbs.delete(p27);
      };
  }, [p27, e29.thumbs]), (0, import_jsx_runtime31.jsx)(we2, { ref: h18, role: "slider", "aria-label": r32["aria-label"] || l27, "aria-valuemin": e29.min, "aria-valuenow": b17, "aria-valuemax": e29.max, "aria-orientation": e29.orientation, "data-orientation": e29.orientation, "data-disabled": e29.disabled ? "" : void 0, tabIndex: e29.disabled ? void 0 : 0, animateOnly: ["transform", "left", "right", "top", "bottom"], ...a19, ...e29.orientation === "horizontal" ? { x: f25 - o23 / 2, y: -o23 / 2, top: "50%", ...o23 === 0 && { top: "auto", bottom: "auto" } } : { x: -o23 / 2, y: o23 / 2, left: "50%", ...o23 === 0 && { left: "auto", right: "auto" } }, [n23.startEdge]: `${s25}%`, size: v14, onLayout: (T16) => {
    m25(T16.nativeEvent.layout[n23.sizeProp]);
  }, onFocus: E14(r32.onFocus, () => {
    e29.valueIndexToChangeRef.current = i24;
  }) });
});
C12.displayName = D10;
var J13 = (0, import_core31.withStaticProperties)(d15.forwardRef((r32, c28) => {
  const { name: S19, min: i24 = 0, max: t30 = 100, step: a19 = 1, orientation: e29 = "horizontal", disabled: n23 = false, minStepsBetweenThumbs: p27 = 0, defaultValue: P17 = [i24], value: h18, onValueChange: b17 = /* @__PURE__ */ __name(() => {
  }, "b"), size: s25, ...l27 } = r32, v14 = d15.useRef(null), o23 = c5(v14, c28), m25 = d15.useRef(/* @__PURE__ */ new Set()), f25 = d15.useRef(0), T16 = e29 === "horizontal", [w23 = [], K11] = A6({ prop: h18, defaultProp: P17, transition: true, onChange: (u16) => {
    var g17;
    import_core31.isWeb && ((g17 = [...m25.current][f25.current]) == null || g17.focus()), b17(u16);
  } });
  import_core31.isWeb && d15.useEffect(() => {
    const u16 = v14.current;
    if (!u16)
      return;
    const g17 = /* @__PURE__ */ __name((k17) => {
      k17.preventDefault();
    }, "g");
    return u16.addEventListener("touchstart", g17), () => {
      u16.removeEventListener("touchstart", g17);
    };
  }, []);
  function L15(u16) {
    E18(u16, f25.current);
  }
  __name(L15, "L");
  function E18(u16, g17) {
    const k17 = x17(a19), N12 = p17(Math.round((u16 - i24) / a19) * a19 + i24, k17), V15 = e18(N12, [i24, t30]);
    K11((x20 = []) => {
      const y15 = m16(x20, V15, g17);
      return l18(y15, p27 * a19) ? (f25.current = y15.indexOf(V15), String(y15) === String(x20) ? x20 : y15) : x20;
    });
  }
  __name(E18, "E");
  const Q10 = T16 ? Pe6 : ge4;
  return (0, import_jsx_runtime31.jsx)(S11, { scope: r32.__scopeSlider, disabled: n23, min: i24, max: t30, valueIndexToChangeRef: f25, thumbs: m25.current, values: w23, orientation: e29, size: s25, children: (0, import_jsx_runtime31.jsx)(Q10, { "aria-disabled": n23, "data-disabled": n23 ? "" : void 0, ...l27, ref: o23, min: i24, max: t30, onSlideStart: n23 ? void 0 : (u16, g17) => {
    if (g17 !== "thumb") {
      const k17 = f16(w23, u16);
      E18(u16, k17);
    }
  }, onSlideMove: n23 ? void 0 : L15, onHomeKeyDown: () => !n23 && E18(i24, 0), onEndKeyDown: () => !n23 && E18(t30, w23.length - 1), onStepKeyDown: ({ event: u16, direction: g17 }) => {
    if (!n23) {
      const V15 = a15.includes(u16.key) || u16.shiftKey && x16.includes(u16.key) ? 10 : 1, x20 = f25.current, y15 = w23[x20], Z10 = a19 * V15 * g17;
      E18(y15 + Z10, x20);
    }
  } }) });
}), { Track: _9, TrackActive: A15, Thumb: C12 });
J13.displayName = e20;
var ke4 = _9;
var xe2 = A15;
var ye2 = C12;

// node_modules/@tamagui/switch/dist/esm/Switch.js
var import_jsx_runtime32 = require("react/jsx-runtime");
var import_react_use_previous2 = __toESM(require_dist5());
var import_core32 = require("@tamagui/core-node");
var import_focusable3 = __toESM(require_cjs22());
var import_get_size6 = __toESM(require_cjs10());
var i18 = __toESM(require("react"));
var g15 = "Switch";
var S12 = /* @__PURE__ */ __name((e29) => Math.round((0, import_core32.getVariableValue)((0, import_get_size6.getSize)(e29)) * 0.65), "S");
var v10 = /* @__PURE__ */ __name((e29) => S12(e29) * 2, "v");
var B9 = V(g15);
var [K8] = B9;
var fe3 = B9[1];
var [Q7, Y6] = K8(g15);
var E16 = "SwitchThumb";
var R12 = (0, import_core32.styled)(k4, { name: "SwitchThumb", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", borderRadius: 1e3 } }, size: { "...size": (e29) => {
  const o23 = S12(e29);
  return { height: o23, width: o23 };
} } }, defaultVariants: { unstyled: false } });
var I10 = R12.extractable(i18.forwardRef((e29, o23) => {
  const { __scopeSwitch: t30, size: a19, ...u16 } = e29, { size: l27, disabled: d21, checked: s25, unstyled: n23 } = Y6(E16, t30), r32 = a19 ?? l27;
  return (0, import_jsx_runtime32.jsx)(R12, { unstyled: n23, size: r32, theme: s25 ? "active" : null, "data-state": M12(s25), "data-disabled": d21 ? "" : void 0, ...u16, x: s25 ? (0, import_core32.getVariableValue)(v10(r32)) - (0, import_core32.getVariableValue)(S12(r32)) : 0, ref: o23 });
}));
I10.displayName = E16;
var H10 = (0, import_core32.styled)(i7, { name: g15, tag: "button", variants: { unstyled: { false: { size: "$true", borderRadius: 1e3, borderWidth: 2, borderColor: "transparent", backgroundColor: "$background", focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": (e29) => {
  const o23 = S12(e29) + 4, t30 = v10(e29) + 4;
  return { height: o23, minHeight: o23, width: t30 };
} } }, defaultVariants: { unstyled: false } });
var me3 = (0, import_core32.withStaticProperties)(H10.extractable(i18.forwardRef((e29, o23) => {
  const { __scopeSwitch: t30, labeledBy: a19, name: u16, checked: l27, defaultChecked: d21, required: s25, disabled: n23, value: r32 = "on", onCheckedChange: p27, size: b17 = "$true", unstyled: C16 = false, ...F16 } = e29, [f25, L15] = i18.useState(null), V15 = c5(o23, (c28) => L15(c28)), _13 = U5(f25), $8 = a19 || _13, k17 = i18.useRef(false), z14 = import_core32.isWeb ? f25 ? Boolean(f25.closest("form")) : true : false, [h18 = false, P17] = A6({ prop: l27, defaultProp: d21 || false, onChange: p27, transition: true });
  return import_core32.isWeb || i18.useEffect(() => {
    if (e29.id)
      return (0, import_focusable3.registerFocusable)(e29.id, { focus: () => {
        P17((c28) => !c28);
      } });
  }, [e29.id, P17]), (0, import_jsx_runtime32.jsxs)(Q7, { scope: t30, checked: h18, disabled: n23, size: b17, unstyled: C16, children: [(0, import_jsx_runtime32.jsx)(H10, { unstyled: C16, size: b17, role: "switch", "aria-checked": h18, "aria-labelledby": $8, "aria-required": s25, "data-state": M12(h18), "data-disabled": n23 ? "" : void 0, disabled: n23, theme: h18 ? "active" : null, themeShallow: true, tabIndex: n23 ? void 0 : 0, value: r32, ...F16, ref: V15, onPress: (c28) => {
    var T16;
    (T16 = e29.onPress) == null || T16.call(e29, c28), P17((W14) => !W14), import_core32.isWeb && z14 && (k17.current = c28.isPropagationStopped(), k17.current || c28.stopPropagation());
  } }), import_core32.isWeb && z14 && (0, import_jsx_runtime32.jsx)(Z5, { control: f25, bubbles: !k17.current, name: u16, value: r32, checked: h18, required: s25, disabled: n23, style: { transform: "translateX(-100%)" } })] });
})), { Thumb: I10 });
var Z5 = /* @__PURE__ */ __name((e29) => {
  const { control: o23, checked: t30, bubbles: a19 = true, ...u16 } = e29, l27 = i18.useRef(null), d21 = (0, import_react_use_previous2.usePrevious)(t30);
  return i18.useEffect(() => {
    const s25 = l27.current, n23 = window.HTMLInputElement.prototype, p27 = Object.getOwnPropertyDescriptor(n23, "checked").set;
    if (d21 !== t30 && p27) {
      const b17 = new Event("click", { bubbles: a19 });
      p27.call(s25, t30), s25.dispatchEvent(b17);
    }
  }, [d21, t30, a19]), (0, import_jsx_runtime32.jsx)("input", { type: "checkbox", "aria-hidden": true, defaultChecked: t30, ...u16, tabIndex: -1, ref: l27, style: { ...e29.style, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } });
}, "Z");
function M12(e29) {
  return e29 ? "checked" : "unchecked";
}
__name(M12, "M");

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_jsx_runtime36 = require("react/jsx-runtime");
var import_focusable4 = __toESM(require_cjs22());
var import_font_size2 = __toESM(require_cjs14());
var import_get_size7 = __toESM(require_cjs10());
var import_group = __toESM(require_cjs21());
var import_helpers_tamagui2 = __toESM(require_cjs17());

// node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_jsx_runtime34 = require("react/jsx-runtime");

// node_modules/@tamagui/collection/dist/esm/Collection.js
var import_jsx_runtime33 = require("react/jsx-runtime");
var import_core33 = require("@tamagui/core-node");
var import_react28 = __toESM(require("react"));
function v11(s25) {
  const a19 = s25 + "CollectionProvider", [y15, x20] = V(a19), [P17, m25] = y15(a19, { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }), f25 = /* @__PURE__ */ __name((n23) => {
    const { scope: e29, children: r32 } = n23, t30 = import_react28.default.useRef(null), o23 = import_react28.default.useRef(/* @__PURE__ */ new Map()).current;
    return (0, import_jsx_runtime33.jsx)(P17, { scope: e29, itemMap: o23, collectionRef: t30, children: r32 });
  }, "f");
  f25.displayName = a19;
  const u16 = s25 + "CollectionSlot", C16 = import_react28.default.forwardRef((n23, e29) => {
    const { scope: r32, children: t30 } = n23, o23 = m25(u16, r32), l27 = c5(e29, o23.collectionRef);
    return (0, import_jsx_runtime33.jsx)(import_core33.Slot, { ref: l27, children: t30 });
  });
  C16.displayName = u16;
  const d21 = s25 + "CollectionItemSlot", R17 = "data-collection-item", I12 = import_react28.default.forwardRef((n23, e29) => {
    const { scope: r32, children: t30, ...o23 } = n23, l27 = import_react28.default.useRef(null), E18 = c5(e29, l27), i24 = m25(d21, r32);
    return import_react28.default.useEffect(() => (i24.itemMap.set(l27, { ref: l27, ...o23 }), () => void i24.itemMap.delete(l27))), (0, import_jsx_runtime33.jsx)(import_core33.Slot, { [R17]: "", ref: E18, children: t30 });
  });
  I12.displayName = d21;
  function T16(n23) {
    const e29 = m25(s25 + "CollectionConsumer", n23);
    return import_react28.default.useCallback(() => {
      if (!import_core33.isWeb)
        return [];
      const t30 = e29.collectionRef.current;
      if (!t30)
        return [];
      const o23 = Array.from(t30.querySelectorAll(`[${R17}]`));
      return Array.from(e29.itemMap.values()).sort((i24, N12) => o23.indexOf(i24.ref.current) - o23.indexOf(N12.ref.current));
    }, [e29.collectionRef, e29.itemMap]);
  }
  __name(T16, "T");
  return [{ Provider: f25, Slot: C16, ItemSlot: I12 }, T16, x20];
}
__name(v11, "v");

// node_modules/@tamagui/roving-focus/dist/esm/RovingFocusGroup.js
var import_core34 = require("@tamagui/core-node");
var import_core35 = require("@tamagui/core-node");
var r20 = __toESM(require("react"));
var G13 = "rovingFocusGroup.onEntryFocus";
var Z6 = { bubbles: false, cancelable: true };
var $5 = r20.forwardRef((o23, e29) => {
  const { __scopeRovingFocusGroup: s25, orientation: t30, loop: F16 = false, dir: b17, currentTabStopId: S19, defaultCurrentTabStopId: P17, onCurrentTabStopIdChange: m25, onEntryFocus: i24, ...E18 } = o23, v14 = r20.useRef(null), g17 = c5(e29, v14), I12 = d14(b17), [c28 = null, p27] = A6({ prop: S19, defaultProp: P17 ?? null, onChange: m25 }), [C16, u16] = r20.useState(false), a19 = (0, import_core34.useEvent)(i24), N12 = h15(s25), T16 = r20.useRef(false), [L15, D14] = r20.useState(0);
  return r20.useEffect(() => {
    const n23 = v14.current;
    if (n23)
      return n23.addEventListener(G13, a19), () => n23.removeEventListener(G13, a19);
  }, [a19]), (0, import_jsx_runtime34.jsx)(no, { scope: s25, orientation: t30, dir: I12, loop: F16, currentTabStopId: c28, onItemFocus: r20.useCallback((n23) => p27(n23), [p27]), onItemShiftTab: r20.useCallback(() => u16(true), []), onFocusableItemAdd: r20.useCallback(() => D14((n23) => n23 + 1), []), onFocusableItemRemove: r20.useCallback(() => D14((n23) => n23 - 1), []), children: (0, import_jsx_runtime34.jsx)(import_core34.Stack, { tabIndex: C16 || L15 === 0 ? -1 : 0, "data-orientation": t30, ...E18, ref: g17, style: [{ outline: "none" }, o23.style], onMouseDown: (0, import_core34.composeEventHandlers)(o23.onMouseDown, () => {
    T16.current = true;
  }), onFocus: (0, import_core34.composeEventHandlers)(o23.onFocus, (n23) => {
    const U10 = !T16.current;
    if (n23.target === n23.currentTarget && U10 && !C16) {
      const A20 = new CustomEvent(G13, Z6);
      if (n23.currentTarget.dispatchEvent(A20), !A20.defaultPrevented) {
        const y15 = N12().filter((l27) => l27.focusable), K11 = y15.find((l27) => l27.active), B12 = y15.find((l27) => l27.id === c28), H14 = [K11, B12, ...y15].filter(Boolean).map((l27) => l27.ref.current);
        M13(H14);
      }
    }
    T16.current = false;
  }), onBlur: (0, import_core34.composeEventHandlers)(o23.onBlur, () => u16(false)) }) });
});
var x19 = "RovingFocusGroupItem";
var O10 = r20.forwardRef((o23, e29) => {
  const { __scopeRovingFocusGroup: s25, focusable: t30 = true, active: F16 = false, tabStopId: b17, ...S19 } = o23, P17 = (0, import_core35.useId)(), m25 = b17 || P17, i24 = ro2(x19, s25), E18 = i24.currentTabStopId === m25, v14 = h15(s25), { onFocusableItemAdd: g17, onFocusableItemRemove: I12 } = i24;
  return r20.useEffect(() => {
    if (t30)
      return g17(), () => I12();
  }, [t30, g17, I12]), (0, import_jsx_runtime34.jsx)(w18.ItemSlot, { scope: s25, id: m25, focusable: t30, active: F16, children: (0, import_jsx_runtime34.jsx)(import_core34.Stack, { tabIndex: E18 ? 0 : -1, "data-orientation": i24.orientation, ...S19, ref: e29, onMouseDown: (0, import_core34.composeEventHandlers)(o23.onMouseDown, (c28) => {
    t30 ? i24.onItemFocus(m25) : c28.preventDefault();
  }), onFocus: (0, import_core34.composeEventHandlers)(o23.onFocus, () => i24.onItemFocus(m25)), ...import_core34.isWeb && { onKeyDown: (0, import_core34.composeEventHandlers)(o23.onKeyDown, (c28) => {
    if (c28.key === "Tab" && c28.shiftKey) {
      i24.onItemShiftTab();
      return;
    }
    if (c28.target !== c28.currentTarget)
      return;
    const p27 = io(c28, i24.orientation, i24.dir);
    if (p27 !== void 0) {
      c28.preventDefault();
      let u16 = v14().filter((a19) => a19.focusable).map((a19) => a19.ref.current);
      if (p27 === "last")
        u16.reverse();
      else if (p27 === "prev" || p27 === "next") {
        p27 === "prev" && u16.reverse();
        const a19 = u16.indexOf(c28.currentTarget);
        u16 = i24.loop ? uo(u16, a19 + 1) : u16.slice(a19 + 1);
      }
      setTimeout(() => M13(u16));
    }
  }) } }) });
});
O10.displayName = x19;
var R13 = "RovingFocusGroup";
var [w18, h15, oo3] = v11(R13);
var [eo2, to2] = V(R13, [oo3]);
var [no, ro2] = eo2(R13);
var k15 = (0, import_core34.withStaticProperties)(r20.forwardRef((o23, e29) => (0, import_jsx_runtime34.jsx)(w18.Provider, { scope: o23.__scopeRovingFocusGroup, children: (0, import_jsx_runtime34.jsx)(w18.Slot, { scope: o23.__scopeRovingFocusGroup, children: (0, import_jsx_runtime34.jsx)($5, { ...o23, ref: e29 }) }) })), { Item: O10 });
k15.displayName = R13;
var so2 = { ArrowLeft: "prev", ArrowUp: "prev", ArrowRight: "next", ArrowDown: "next", PageUp: "first", Home: "first", PageDown: "last", End: "last" };
function co(o23, e29) {
  return e29 !== "rtl" ? o23 : o23 === "ArrowLeft" ? "ArrowRight" : o23 === "ArrowRight" ? "ArrowLeft" : o23;
}
__name(co, "co");
function io(o23, e29, s25) {
  const t30 = co(o23.key, s25);
  if (!(e29 === "vertical" && ["ArrowLeft", "ArrowRight"].includes(t30)) && !(e29 === "horizontal" && ["ArrowUp", "ArrowDown"].includes(t30)))
    return so2[t30];
}
__name(io, "io");
function M13(o23) {
  const e29 = document.activeElement;
  for (const s25 of o23)
    if (s25 === e29 || (s25.focus(), document.activeElement !== e29))
      return;
}
__name(M13, "M");
function uo(o23, e29) {
  return o23.map((s25, t30) => o23[(e29 + t30) % o23.length]);
}
__name(uo, "uo");

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var import_web14 = require("@tamagui/core-node");
var import_react29 = __toESM(require("react"));

// node_modules/@tamagui/toggle-group/dist/esm/Toggle.js
var import_jsx_runtime35 = require("react/jsx-runtime");
var import_web13 = require("@tamagui/core-node");
var P15 = __toESM(require("react"));
var s18 = "Toggle";
var r21 = (0, import_web13.styled)(k4, { name: s18, tag: "button", variants: { unstyled: { false: { pressTheme: true, backgroundColor: "$background", alignItems: "center", justifyContent: "center", display: "flex", borderColor: "$borderColor", borderWidth: "1px", margin: "-1px", hoverStyle: { backgroundColor: "$backgroundHover" }, pressStyle: { backgroundColor: "$backgroundPress" }, focusStyle: { borderColor: "$borderColorPress", backgroundColor: "$backgroundPress" } } }, active: { true: { zIndex: 1, hoverStyle: { backgroundColor: "$background" }, focusStyle: { borderColor: "$borderColorPress", backgroundColor: "$backgroundPress" } } }, orientation: { horizontal: { flexDirection: "row", spaceDirection: "horizontal" }, vertical: { flexDirection: "column", spaceDirection: "vertical" } } }, defaultVariants: { unstyled: false } });
var t20 = r21.extractable(P15.forwardRef((e29, a19) => {
  const { pressed: l27, defaultPressed: d21 = false, onPressedChange: i24, ...g17 } = e29, [o23 = false, c28] = A6({ prop: l27, onChange: i24, defaultProp: d21 });
  return (0, import_jsx_runtime35.jsx)(import_web13.Theme, { forceClassName: true, name: o23 ? "active" : null, children: (0, import_jsx_runtime35.jsx)(r21, { active: e29.unstyled ? void 0 : o23, "aria-pressed": o23, "data-state": o23 ? "on" : "off", "data-disabled": e29.disabled ? "" : void 0, ...g17, ref: a19, onPress: (0, import_web13.composeEventHandlers)(e29.onPress ?? void 0, (y15) => {
    e29.disabled || c28(!o23);
  }) }) });
}));
t20.displayName = s18;

// node_modules/@tamagui/toggle-group/dist/esm/ToggleGroup.js
var m19 = "ToggleGroup";
var [S14, Q8] = V(m19, [to2]);
var G14 = "ToggleGroupItem";
var [ve2, X6] = V(G14);
var [Y8, ye3] = S14(m19);
var be2 = X6();
var R14 = r21.extractable(import_react29.default.forwardRef((e29, p27) => {
  const n23 = w19(G14, e29.__scopeToggleGroup), t30 = te5(G14, e29.__scopeToggleGroup), r32 = e29.__scopeToggleGroup, u16 = D12(e29.__scopeToggleGroup), i24 = n23.value.includes(e29.value), o23 = t30.disabled || e29.disabled || false, g17 = import_react29.default.useRef(null), T16 = (0, import_group.useGroupItem)({ disabled: o23 }), a19 = e29.size ?? t30.size, c28 = { width: void 0, height: void 0, padding: (0, import_web14.getVariableValue)(a19) * 0.6 };
  e29.orientation === "horizontal" ? c28.height = (0, import_web14.getVariableValue)(a19) * 2.4 : c28.width = (0, import_web14.getVariableValue)(a19) * 2.4;
  const d21 = (typeof a19 == "number" ? a19 * 0.7 : (0, import_font_size2.getFontSize)(a19)) * 1.2, P17 = (0, import_web14.useTheme)(), f25 = (0, import_helpers_tamagui2.useGetThemedIcon)({ size: d21, color: P17.color }), y15 = import_react29.default.Children.toArray(e29.children).map((b17) => e29.disablePassStyles || !import_react29.default.isValidElement(b17) ? b17 : f25(b17)), x20 = { ...e29, pressed: i24, disabled: o23, ...c28, children: y15 };
  return (0, import_jsx_runtime36.jsx)(Y8, { scope: r32, children: t30.rovingFocus ? (0, import_jsx_runtime36.jsx)(k15.Item, { asChild: true, ...u16, focusable: !o23, active: i24, children: (0, import_jsx_runtime36.jsx)(r21, { asChild: true, focusable: !o23, disabled: o23, ref: g17, ...T16, children: (0, import_jsx_runtime36.jsx)(M14, { ...x20, ref: p27 }) }) }) : (0, import_jsx_runtime36.jsx)(r21, { asChild: true, focusable: !o23, disabled: o23, ref: g17, children: (0, import_jsx_runtime36.jsx)(M14, { ...x20, ref: p27 }) }) });
}));
R14.displayName = G14;
var M14 = r21.extractable(import_react29.default.forwardRef((e29, p27) => {
  const { __scopeToggleGroup: n23, value: t30, ...r32 } = e29, u16 = w19(G14, n23), i24 = { "aria-pressed": void 0 }, o23 = u16.type === "single" ? i24 : void 0;
  return (0, import_jsx_runtime36.jsx)(t20, { ...o23, ...r32, ref: p27, onPressedChange: (g17) => {
    g17 ? u16.onItemActivate(t30) : u16.onItemDeactivate(t30);
  } });
}));
var D12 = to2();
var h16 = (0, import_web14.withStaticProperties)(import_react29.default.forwardRef((e29, p27) => {
  const { type: n23, ...t30 } = e29;
  if (import_web14.isWeb || import_react29.default.useEffect(() => {
    if (e29.id)
      return (0, import_focusable4.registerFocusable)(e29.id, { focus: () => {
      } });
  }, [e29.id]), n23 === "single")
    return (0, import_jsx_runtime36.jsx)(Z7, { ...t30, ref: p27 });
  if (n23 === "multiple")
    return (0, import_jsx_runtime36.jsx)(ee8, { ...t30, ref: p27 });
  throw new Error(`Missing prop \`type\` expected on \`${m19}\``);
}), { Item: R14 });
h16.displayName = m19;
var [k16, w19] = S14(m19);
var Z7 = import_react29.default.forwardRef((e29, p27) => {
  const { value: n23, defaultValue: t30, onValueChange: r32 = /* @__PURE__ */ __name(() => {
  }, "r"), disableDeactivation: u16 = false, ...i24 } = e29, [o23, g17] = A6({ prop: n23, defaultProp: t30, onChange: r32 });
  return (0, import_jsx_runtime36.jsx)(k16, { scope: e29.__scopeToggleGroup, type: "single", value: o23 ? [o23] : [], defaultValue: o23, onItemActivate: g17, onItemDeactivate: import_react29.default.useCallback(() => u16 ? null : g17(""), [g17, u16]), children: (0, import_jsx_runtime36.jsx)(A17, { ...i24, ref: p27 }) });
});
var ee8 = import_react29.default.forwardRef((e29, p27) => {
  const { value: n23, defaultValue: t30, onValueChange: r32 = /* @__PURE__ */ __name(() => {
  }, "r"), ...u16 } = e29, [i24 = [], o23] = A6({ prop: n23, defaultProp: t30, onChange: r32 }), g17 = import_react29.default.useCallback((a19) => o23((c28 = []) => [...c28, a19]), [o23]), T16 = import_react29.default.useCallback((a19) => o23((c28 = []) => c28.filter((d21) => d21 !== a19)), [o23]);
  return (0, import_jsx_runtime36.jsx)(k16, { scope: e29.__scopeToggleGroup, type: "multiple", value: i24, defaultValue: i24, onItemActivate: g17, onItemDeactivate: T16, children: (0, import_jsx_runtime36.jsx)(A17, { ...u16, ref: p27 }) });
});
h16.displayName = m19;
var [oe6, te5] = S14(m19);
var C13 = (0, import_web14.styled)(import_group.Group, { name: m19, variants: { unstyled: { false: { backgroundColor: "$background" } }, orientation: { vertical: { flexDirection: "column", spaceDirection: "vertical" }, horizontal: { flexDirection: "row", spaceDirection: "horizontal" } } }, defaultVariants: { unstyled: false } });
var A17 = C13.extractable(import_react29.default.forwardRef((e29, p27) => {
  const { __scopeToggleGroup: n23, disabled: t30 = false, orientation: r32 = "horizontal", dir: u16, rovingFocus: i24 = true, loop: o23 = true, unstyled: g17 = false, size: T16 = "$true", sizeAdjust: a19 = 0, ...c28 } = e29, d21 = D12(n23), P17 = d14(u16), f25 = { role: "togglegroup", dir: P17, ...c28 }, E18 = (0, import_web14.getVariableValue)((0, import_get_size7.stepTokenUpOrDown)("size", e29.size, a19)), y15 = Math.round(E18 * 0.45);
  return (0, import_jsx_runtime36.jsx)(oe6, { scope: n23, rovingFocus: i24, disabled: t30, size: y15, children: i24 ? (0, import_jsx_runtime36.jsx)(k15, { asChild: true, ...d21, orientation: r32, dir: P17, loop: o23, children: (0, import_jsx_runtime36.jsx)(C13, { "aria-orientation": r32, orientation: r32, axis: r32, ref: p27, "data-disabled": t30 ? "" : void 0, unstyled: g17, ...f25 }) }) : (0, import_jsx_runtime36.jsx)(C13, { "aria-orientation": r32, ref: p27, orientation: r32, "data-disabled": t30 ? "" : void 0, unstyled: g17, ...f25 }) });
}));

// node_modules/@tamagui/tabs/dist/esm/Tabs.js
var import_jsx_runtime37 = require("react/jsx-runtime");
var import_get_button_sized4 = __toESM(require_cjs11());
var import_group2 = __toESM(require_cjs21());
var import_web15 = require("@tamagui/core-node");
var p20 = __toESM(require("react"));
var L12 = "TabsList";
var _11 = (0, import_web15.styled)(import_group2.Group, { name: L12, focusable: true });
var z13 = _11.extractable(p20.forwardRef((o23, u16) => {
  const { __scopeTabs: g17, loop: r32 = true, children: n23, ...e29 } = o23, c28 = M15(L12, g17), t30 = $7(g17);
  return (0, import_jsx_runtime37.jsx)(k15, { asChild: true, orientation: c28.orientation, dir: c28.dir, loop: r32, ...t30, children: (0, import_jsx_runtime37.jsx)(_11, { role: "tablist", "aria-orientation": c28.orientation, ref: u16, axis: c28.orientation, ...e29, children: n23 }) });
}));
z13.displayName = L12;
var R15 = "TabsTrigger";
var H12 = (0, import_web15.styled)(k4, { name: R15, justifyContent: "center", alignItems: "center", flexWrap: "nowrap", flexDirection: "row", cursor: "pointer", focusable: true, variants: { size: { "...size": import_get_button_sized4.getButtonSized }, disabled: { true: { pointerEvents: "none" } }, unstyled: { false: { backgroundColor: "$background", pressStyle: { backgroundColor: "$backgroundPress" }, hoverStyle: { backgroundColor: "$backgroundHover" }, focusStyle: { backgroundColor: "$backgroundFocus" } } } }, defaultVariants: { unstyled: false } });
var E17 = H12.extractable(p20.forwardRef((o23, u16) => {
  const { __scopeTabs: g17, value: r32, disabled: n23 = false, onInteraction: e29, ...c28 } = o23, t30 = M15(R15, g17), d21 = $7(g17), f25 = V14(t30.baseId, r32), v14 = B10(t30.baseId, r32), a19 = r32 === t30.value, [l27, P17] = p20.useState(null), i24 = p20.useRef(null), y15 = (0, import_group2.useGroupItem)({ disabled: n23 });
  return p20.useEffect(() => (t30.registerTrigger(), () => t30.unregisterTrigger()), []), p20.useEffect(() => {
    if (!i24.current || !import_web15.isWeb)
      return;
    function s25() {
      i24.current && P17({ width: i24.current.offsetWidth, height: i24.current.offsetHeight, x: i24.current.offsetLeft, y: i24.current.offsetTop });
    }
    __name(s25, "s");
    s25();
    const T16 = new ResizeObserver(s25);
    return T16.observe(i24.current), () => {
      i24.current && T16.unobserve(i24.current);
    };
  }, [t30.triggersCount]), p20.useEffect(() => {
    a19 && l27 && (e29 == null || e29("select", l27));
  }, [a19, r32, l27]), (0, import_jsx_runtime37.jsx)(import_web15.Theme, { forceClassName: true, name: a19 ? "active" : null, children: (0, import_jsx_runtime37.jsx)(k15.Item, { asChild: true, ...d21, focusable: !n23, active: a19, children: (0, import_jsx_runtime37.jsx)(H12, { onLayout: (s25) => {
    import_web15.isWeb || P17(s25.nativeEvent.layout);
  }, onHoverIn: (0, import_web15.composeEventHandlers)(o23.onHoverIn, () => {
    l27 && (e29 == null || e29("hover", l27));
  }), onHoverOut: (0, import_web15.composeEventHandlers)(o23.onHoverOut, () => {
    e29 == null || e29("hover", null);
  }), role: "tab", "aria-selected": a19, "aria-controls": v14, "data-state": a19 ? "active" : "inactive", "data-disabled": n23 ? "" : void 0, disabled: n23, id: f25, size: t30.size, ...c28, ref: (0, import_web15.composeRefs)(u16, i24), onPress: (0, import_web15.composeEventHandlers)(o23.onPress ?? void 0, (s25) => {
    const T16 = !import_web15.isWeb || s25.button === 0 && s25.ctrlKey === false;
    !n23 && !a19 && T16 ? t30.onChange(r32) : s25.preventDefault();
  }), ...import_web15.isWeb && { type: "button", onKeyDown: (0, import_web15.composeEventHandlers)(o23.onKeyDown, (s25) => {
    [" ", "Enter"].includes(s25.key) && (t30.onChange(r32), s25.preventDefault());
  }), onFocus: (0, import_web15.composeEventHandlers)(o23.onFocus, (s25) => {
    l27 && (e29 == null || e29("focus", l27));
    const T16 = t30.activationMode !== "manual";
    !a19 && !n23 && T16 && t30.onChange(r32);
  }), onBlur: (0, import_web15.composeEventHandlers)(o23.onFocus, () => {
    e29 == null || e29("focus", null);
  }) }, ...y15 }) }) });
}));
E17.displayName = R15;
var G15 = "TabsContent";
var N11 = (0, import_web15.styled)(k4, { name: G15 });
var D13 = N11.extractable(p20.forwardRef((o23, u16) => {
  const { __scopeTabs: g17, value: r32, forceMount: n23, children: e29, ...c28 } = o23, t30 = M15(G15, g17), d21 = r32 === t30.value, f25 = n23 || d21, v14 = V14(t30.baseId, r32), a19 = B10(t30.baseId, r32);
  return f25 ? (0, import_jsx_runtime37.jsx)(N11, { "data-state": d21 ? "active" : "inactive", "data-orientation": t30.orientation, role: "tabpanel", "aria-labelledby": v14, hidden: !f25, id: a19, tabIndex: 0, ...c28, ref: u16, children: e29 }, r32) : null;
}));
D13.displayName = G15;
var S15 = "Tabs";
var [ee9, de4] = V(S15, [to2]);
var $7 = to2();
var [te6, M15] = ee9(S15);
var A18 = (0, import_web15.styled)(k3, { name: S15 });
var oe7 = (0, import_web15.withStaticProperties)(A18.extractable(p20.forwardRef((o23, u16) => {
  const { __scopeTabs: g17, value: r32, onValueChange: n23, defaultValue: e29, orientation: c28 = "horizontal", dir: t30, activationMode: d21 = "automatic", size: f25 = "$true", ...v14 } = o23, a19 = d14(t30), [l27, P17] = A6({ prop: r32, onChange: n23, defaultProp: e29 ?? "" }), [i24, y15] = p20.useState(0), s25 = (0, import_web15.useEvent)(() => y15((h18) => h18 + 1)), T16 = (0, import_web15.useEvent)(() => y15((h18) => h18 - 1));
  return (0, import_jsx_runtime37.jsx)(te6, { scope: g17, baseId: (0, import_web15.useId)(), value: l27, onChange: P17, orientation: c28, dir: a19, activationMode: d21, size: f25, registerTrigger: s25, triggersCount: i24, unregisterTrigger: T16, children: (0, import_jsx_runtime37.jsx)(A18, { direction: a19, "data-orientation": c28, ...v14, ref: u16 }) });
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
var import_get_size8 = __toESM(require_cjs10());
var e21 = __toESM(require("react"));
var to3 = X4.extractable(e21.forwardRef(({ __scopePopover: t30, ...o23 }, d21) => {
  const a19 = g11(t30), c28 = E7("PopperContent", a19.__scopePopper), r32 = o23.size || c28.size || (0, import_get_size8.stepTokenUpOrDown)("size", "$true", -2);
  return (0, import_jsx_runtime38.jsx)(Oo, { componentName: "Tooltip", disableRemoveScroll: true, trapFocus: false, padding: r32, pointerEvents: "none", ref: d21, ...o23 });
}));
var ro3 = e21.forwardRef((t30, o23) => (0, import_jsx_runtime38.jsx)(L7, { componentName: "Tooltip", ref: o23, ...t30 }));
var Fo = /* @__PURE__ */ __name(({ children: t30, delay: o23 }) => (0, import_jsx_runtime38.jsx)(FloatingDelayGroup, { delay: e21.useMemo(() => o23, [JSON.stringify(o23)]), children: t30 }), "Fo");
var no2 = e21.forwardRef(function(o23, d21) {
  const { __scopePopover: a19, children: c28, delay: r32, restMs: C16 = typeof r32 > "u" ? 500 : typeof r32 == "number" ? r32 : 0, onOpenChange: l27, focus: h18, ...b17 } = o23, m25 = g11(a19), F16 = e21.useRef(null), [T16, P17] = e21.useState(false), { delay: A20, setCurrentId: S19 } = useDelayGroupContext(), f25 = r32 ?? A20, [i24, g17] = e21.useState(false), u16 = o23.groupId, R17 = (0, import_core36.useEvent)((s25) => {
    g17(s25), s25 && S19(u16), l27 == null || l27(s25);
  }), x20 = /* @__PURE__ */ __name((s25) => {
    const n23 = useFloating2({ ...s25, open: i24, onOpenChange: R17 }), { getReferenceProps: z14, getFloatingProps: D14 } = useInteractions([useHover(n23.context, { delay: f25, restMs: C16 }), useFocus(n23.context, h18), useRole(n23.context, { role: "tooltip" }), useDismiss(n23.context), useDelayGroup(n23.context, { id: u16 })]);
    return { ...n23, getReferenceProps: z14, getFloatingProps: D14 };
  }, "x"), w23 = e21.useCallback(x20, [u16, f25, i24]), O12 = e21.useCallback(() => P17(true), []), _13 = e21.useCallback(() => P17(false), []), k17 = (0, import_core36.useId)(), I12 = `$${(0, import_get_size8.stepTokenUpOrDown)("size", "$true", -2).key}`;
  return (0, import_jsx_runtime38.jsx)(s12.Provider, { value: w23, children: (0, import_jsx_runtime38.jsx)(be, { size: I12, ...m25, ...b17, children: (0, import_jsx_runtime38.jsx)(Pe3, { scope: a19, popperScope: m25.__scopePopper, contentId: k17, triggerRef: F16, sheetBreakpoint: false, scopeKey: "", open: i24, onOpenChange: g17, onOpenToggle: po, hasCustomAnchor: T16, onCustomAnchorAdd: O12, onCustomAnchorRemove: _13, children: c28 }) }) });
});
var To2 = (0, import_core36.withStaticProperties)(no2, { Anchor: M8, Arrow: ro3, Content: to3, Trigger: z7 });
var po = /* @__PURE__ */ __name(() => {
}, "po");

// node_modules/@tamagui/tooltip/dist/esm/TooltipSimple.js
var import_jsx_runtime39 = require("react/jsx-runtime");
var C15 = /* @__PURE__ */ __name(({ label: i24, children: l27, contentProps: a19, ...c28 }) => {
  let e29;
  try {
    e29 = useDelayGroupContext();
  } catch {
  }
  const p27 = (0, import_jsx_runtime39.jsxs)(To2, { ...c28, children: [(0, import_jsx_runtime39.jsx)(To2.Trigger, { asChild: true, children: l27 }), (0, import_jsx_runtime39.jsxs)(To2.Content, { zIndex: 1e6, enterStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 }, exitStyle: { x: 0, y: -8, opacity: 0, scale: 0.93 }, x: 0, scale: 1, y: 0, elevation: "$1", opacity: 1, animation: ["quick", { opacity: { overshootClamping: true } }], ...a19, children: [(0, import_jsx_runtime39.jsx)(To2.Arrow, {}), (0, import_jsx_runtime39.jsx)(p11, { size: "$2", lineHeight: "$0", children: i24 })] })] });
  return e29 ? p27 : (0, import_jsx_runtime39.jsx)(Fo, { delay: T14, children: p27 });
}, "C");
var T14 = { open: 3e3, close: 100 };

// node_modules/@tamagui/use-debounce/dist/esm/index.mjs
var import_react32 = require("react");
function f19(n23, c28, o23) {
  let t30, e29 = false;
  function u16() {
    e29 = false;
    const r32 = this, s25 = arguments;
    o23 && !t30 && n23.apply(r32, s25), clearTimeout(t30), t30 = setTimeout(function() {
      t30 = null, o23 || e29 || n23.apply(r32, s25), e29 = false;
    }, c28);
  }
  __name(u16, "u");
  return u16.cancel = () => {
    e29 = true;
  }, u16;
}
__name(f19, "f");
var b14 = { leading: false };
function y13(n23, c28, o23 = b14, t30 = []) {
  const e29 = (0, import_react32.useRef)(null);
  return (0, import_react32.useEffect)(() => () => {
    var u16;
    (u16 = e29.current) == null || u16.cancel();
  }, []), (0, import_react32.useMemo)(() => (e29.current = f19(n23, c28, o23.leading), e29.current), [o23.leading, ...t30]);
}
__name(y13, "y");
function A19(n23, c28 = 0) {
  const [o23, t30] = (0, import_react32.useState)(n23);
  return (0, import_react32.useEffect)(() => {
    const e29 = setTimeout(() => {
      t30((u16) => u16 === n23 ? u16 : n23);
    }, c28);
    return () => {
      clearTimeout(e29);
    };
  }, [n23]), o23;
}
__name(A19, "A");

// node_modules/@tamagui/use-force-update/dist/esm/index.mjs
var import_react33 = require("react");
var r23 = process.env.TAMAGUI_TARGET === "web" && typeof window > "u";
var n18 = /* @__PURE__ */ __name(() => {
}, "n");
function d18() {
  return r23 ? n18 : (0, import_react33.useReducer)((e29) => e29 + 1, 0)[1];
}
__name(d18, "d");

// node_modules/@tamagui/constants/dist/esm/index.mjs
var import_react34 = require("react");
var e22 = process.env.TAMAGUI_TARGET === "web";
var o18 = typeof window < "u";
var i20 = e22 && !o18;
var t22 = e22 && o18;
var r24 = process.env.ENABLE_RSC;
var c22 = /* @__PURE__ */ __name(() => {
}, "c");
var p22 = r24 ? c22 : i20 ? import_react34.useEffect : import_react34.useLayoutEffect;
var f20 = typeof navigator < "u" && /Chrome/.test(navigator.userAgent || "");
var T15 = t22 && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
process.env.NODE_ENV === "development" && (process.env.TAMAGUI_TARGET ? t22 && process.env.TAMAGUI_TARGET !== "web" && process.env.TAMAGUI_IGNORE_TARGET !== "1" && console.warn('Must set TAMAGUI_TARGET to "web" for web apps - if you have window defined outside of the browser, set TAMAGUI_IGNORE_TARGET=1 to hide this') : console.warn('Must set TAMAGUI_TARGET to "web" or "native"'));

// node_modules/@tamagui/use-window-dimensions/dist/esm/index.mjs
var import_react35 = require("react");
var import_react_native8 = require("react-native-web-lite");
var r25 = { fontScale: 1, height: 800, width: 600, scale: 1 };
function f21() {
  const e29 = (0, import_react_native8.useWindowDimensions)();
  if (process.env.TAMAGUI_TARGET != "web")
    return e29;
  const [t30, i24] = (0, import_react35.useState)(r25);
  return p22(() => {
    i24(e29);
  }, [e29.height, e29.width, e29.fontScale, e29.scale]), t30;
}
__name(f21, "f");

// node_modules/@tamagui/visually-hidden/dist/esm/VisuallyHidden.js
var import_web16 = require("@tamagui/core-node");
var e23 = (0, import_web16.styled)(import_web16.Stack, { position: "absolute", width: 1, height: 1, margin: -1, zIndex: -1e4, overflow: "hidden", opacity: 1e-8, pointerEvents: "none", variants: { preserveDimensions: { true: { position: "relative", width: "auto", height: "auto" } }, visible: { true: { position: "relative", width: "auto", height: "auto", margin: 0, zIndex: 1, overflow: "visible", opacity: 1, pointerEvents: "auto" } } } });
e23.isVisuallyHidden = true;

// node_modules/@tamagui/checkbox/dist/esm/Checkbox.js
var import_jsx_runtime40 = require("react/jsx-runtime");
var import_react_use_previous3 = __toESM(require_dist5());
var import_core37 = require("@tamagui/core-node");
var import_focusable5 = __toESM(require_cjs22());
var import_font_size3 = __toESM(require_cjs14());
var import_get_size9 = __toESM(require_cjs10());
var import_helpers_tamagui3 = __toESM(require_cjs17());
var c23 = __toESM(require("react"));
function l22(e29) {
  return e29 === "indeterminate";
}
__name(l22, "l");
function B11(e29) {
  return l22(e29) ? "indeterminate" : e29 ? "checked" : "unchecked";
}
__name(B11, "B");
var R16 = /* @__PURE__ */ __name((e29) => {
  const { checked: o23, bubbles: s25 = true, control: f25, isHidden: a19, ...m25 } = e29, u16 = c23.useRef(null), t30 = (0, import_react_use_previous3.usePrevious)(o23);
  return c23.useEffect(() => {
    const i24 = u16.current, b17 = window.HTMLInputElement.prototype, r32 = Object.getOwnPropertyDescriptor(b17, "checked").set;
    if (t30 !== o23 && r32) {
      const d21 = new Event("click", { bubbles: s25 });
      i24.indeterminate = l22(o23), r32.call(i24, l22(o23) ? false : o23), i24.dispatchEvent(d21);
    }
  }, [t30, o23, s25]), (0, import_jsx_runtime40.jsx)("input", { type: "checkbox", defaultChecked: l22(o23) ? false : o23, ...m25, tabIndex: -1, ref: u16, "aria-hidden": a19, style: { ...a19 ? { position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } : { appearance: "auto", accentColor: "var(--color6)" }, ...e29.style } });
}, "R");
var v13 = "CheckboxIndicator";
var w21 = (0, import_core37.styled)(k4, { name: v13 });
var L14 = w21.extractable(c23.forwardRef((e29, o23) => {
  const { __scopeCheckbox: s25, children: f25, forceMount: a19, disablePassStyles: m25, ...u16 } = e29, t30 = ae2(v13, s25), i24 = (typeof t30.size == "number" ? t30.size * 0.65 : (0, import_font_size3.getFontSize)(t30.size)) * t30.scaleIcon, b17 = (0, import_core37.useTheme)(), x20 = (0, import_helpers_tamagui3.useGetThemedIcon)({ size: i24, color: b17.color }), d21 = c23.Children.toArray(f25).map((k17) => m25 || !c23.isValidElement(k17) ? k17 : x20(k17));
  return a19 || l22(t30.state) || t30.state === true ? (0, import_jsx_runtime40.jsx)(w21, { "data-state": B11(t30.state), "data-disabled": t30.disabled ? "" : void 0, pointerEvents: "none", ...u16, ref: o23, children: d21 }) : null;
}));
L14.displayName = v13;
var S16 = "Checkbox";
var _12 = (0, import_core37.styled)(k4, { name: S16, tag: "button", variants: { unstyled: { false: { size: "$true", backgroundColor: "$background", alignItems: "center", justifyContent: "center", pressTheme: true, focusable: true, borderWidth: 1, borderColor: "$borderColor", hoverStyle: { borderColor: "$borderColorHover" }, focusStyle: { borderColor: "$borderColorFocus" } } }, size: { "...size": (e29, { tokens: o23 }) => ({ borderRadius: (0, import_core37.getVariableValue)((0, import_get_size9.getSize)(e29)) / 8 }) } }, defaultVariants: { unstyled: false } });
var [ne4, ce3] = V(S16);
var [se4, ae2] = ne4(S16);
var ie3 = (0, import_core37.withStaticProperties)(_12.extractable(c23.forwardRef((e29, o23) => {
  const { __scopeCheckbox: s25, labelledBy: f25, name: a19, checked: m25, defaultChecked: u16, required: t30, scaleIcon: i24 = 1, scaleSize: b17 = 0.45, sizeAdjust: x20 = 0, disabled: r32, value: d21 = "on", onCheckedChange: k17, native: D14, ...O12 } = e29, [C16, G16] = c23.useState(null), V15 = (0, import_core37.useComposedRefs)(o23, (n23) => G16(n23)), P17 = c23.useRef(false), q13 = (0, import_core37.useMediaPropsActive)(e29), T16 = import_core37.isWeb ? C16 ? Boolean(C16.closest("form")) : true : false, [p27 = false, I12] = A6({ prop: m25, defaultProp: u16, onChange: k17 }), z14 = (0, import_core37.getVariableValue)((0, import_get_size9.stepTokenUpOrDown)("size", q13.size, x20)), g17 = b17 ? Math.round(z14 * b17) : z14, N12 = U5(C16), $8 = f25 || N12;
  return process.env.TAMAGUI_TARGET === "native" && c23.useEffect(() => {
    if (e29.id)
      return (0, import_focusable5.registerFocusable)(e29.id, { focusAndSelect: () => {
        I12((n23) => !n23);
      }, focus: () => {
      } });
  }, [e29.id, I12]), (0, import_jsx_runtime40.jsx)(se4, { scope: s25, state: p27, disabled: r32, size: g17, scaleIcon: i24, children: import_core37.isWeb && D14 ? (0, import_jsx_runtime40.jsx)(R16, { control: C16, bubbles: !P17.current, name: a19, value: d21, checked: p27, required: t30, disabled: r32, id: e29.id }) : (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [(0, import_jsx_runtime40.jsx)(_12, { width: g17, height: g17, tag: "button", role: "checkbox", "aria-labelledby": $8, "aria-checked": l22(p27) ? "mixed" : p27, "aria-required": t30, "data-state": B11(p27), "data-disabled": r32 ? "" : void 0, disabled: r32, ...O12, ref: V15, ...import_core37.isWeb && { type: "button", value: d21, onKeyDown: (0, import_core37.composeEventHandlers)(e29.onKeyDown, (n23) => {
    n23.key === "Enter" && n23.preventDefault();
  }) }, onPress: (0, import_core37.composeEventHandlers)(e29.onPress, (n23) => {
    I12((E18) => l22(E18) ? true : !E18), T16 && (P17.current = n23.isPropagationStopped(), P17.current || n23.stopPropagation());
  }) }), import_core37.isWeb && T16 ? (0, import_jsx_runtime40.jsx)(R16, { isHidden: true, control: C16, bubbles: !P17.current, name: a19, value: d21, checked: p27, required: t30, disabled: r32 }) : null] }) });
})), { Indicator: L14 });
ie3.displayName = S16;

// node_modules/tamagui/dist/esm/createTamagui.js
var import_core38 = require("@tamagui/core-node");
var f22 = process.env.NODE_ENV !== "development" ? import_core38.createTamagui : (i24) => {
  const a19 = ["$true"], c28 = /* @__PURE__ */ __name((e29, s25) => e29.every((o23) => typeof s25[o23] < "u"), "c"), t30 = (0, import_core38.createTamagui)(i24);
  for (const e29 of ["size", "space"]) {
    const s25 = t30.tokensParsed[e29];
    if (!s25)
      throw new Error(`Expected tokens for "${e29}" in ${Object.keys(t30.tokensParsed).join(", ")}`);
    if (!c28(a19, s25))
      throw new Error(`
createTamagui() missing expected tokens.${e29}:

Received: ${Object.keys(s25).join(", ")}

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
  const n23 = Object.keys(t30.tokensParsed.size);
  for (const e29 of ["radius", "zIndex"]) {
    const s25 = t30.tokensParsed[e29], o23 = Object.keys(s25);
    if (!o23.some((u16) => n23.includes(u16)))
      throw new Error(`
createTamagui() invalid tokens.${e29}:

Received: ${o23.join(", ")}

Expected a subset of: ${n23.join(", ")}

`);
  }
  return t30;
};

// node_modules/tamagui/dist/esm/views/TamaguiProvider.js
var import_jsx_runtime41 = require("react/jsx-runtime");
var import_core39 = require("@tamagui/core-node");
var t24 = import_core39.isRSC ? import_core39.TamaguiProvider : ({ children: i24, ...a19 }) => (0, import_jsx_runtime41.jsx)(import_core39.TamaguiProvider, { ...a19, children: (0, import_jsx_runtime41.jsx)(F3, { shouldAddRootHost: true, children: i24 }) });

// node_modules/tamagui/dist/esm/views/Anchor.js
var import_jsx_runtime42 = require("react/jsx-runtime");
var import_core40 = require("@tamagui/core-node");
var import_react36 = require("react");
var import_react_native9 = require("react-native-web-lite");
var o20 = (0, import_core40.styled)(s8, { name: "Anchor", tag: "a", accessibilityRole: "link" });
var p23 = o20.extractable((0, import_react36.forwardRef)(({ href: t30, target: r32, ...e29 }, i24) => (0, import_jsx_runtime42.jsx)(o20, { ...e29, ...import_core40.isWeb ? { href: t30, target: r32 } : { onPress: (a19) => {
  var n23;
  (n23 = e29.onPress) == null || n23.call(e29, a19), t30 !== void 0 && import_react_native9.Linking.openURL(t30);
} }, ref: i24 })));

// node_modules/tamagui/dist/esm/views/EnsureFlexed.js
var import_core41 = require("@tamagui/core-node");
var t25 = (0, import_core41.styled)(import_core41.Text, { opacity: 0, lineHeight: 0, height: 0, display: "flex", fontSize: 200, children: "wwwwwwwwwwwwwwwwwww", hoverStyle: { backgroundColor: "red" }, pointerEvents: "none" });
t25.isVisuallyHidden = true;

// node_modules/tamagui/dist/esm/views/Fieldset.js
var import_core42 = require("@tamagui/core-node");
var i22 = (0, import_core42.styled)(c7, { name: "Fieldset", tag: "fieldset", variants: { horizontal: { true: { flexDirection: "row", alignItems: "center" } } } });

// node_modules/tamagui/dist/esm/views/Grid.js
var import_jsx_runtime43 = require("react/jsx-runtime");
var import_core43 = require("@tamagui/core-node");
var import_react37 = __toESM(require("react"));
function d19({ children: e29, columns: u16, itemMinWidth: n23 = 200, gap: r32 }) {
  if (import_core43.isWeb)
    return (0, import_jsx_runtime43.jsx)("div", { style: { gap: r32, display: "grid", justifyContent: "stretch", gridTemplateColumns: `repeat( auto-fit, minmax(${n23}px, 1fr) )` }, children: e29 });
  const m25 = import_react37.default.Children.toArray(e29);
  return (0, import_jsx_runtime43.jsx)(i7, { alignItems: "center", justifyContent: "center", flexWrap: "wrap", children: m25.map((i24, a19) => i24 ? (0, import_jsx_runtime43.jsx)(i7, { flex: 1, minWidth: n23, marginRight: r32, marginBottom: r32, children: i24 }, a19) : null) });
}
__name(d19, "d");

// node_modules/tamagui/dist/esm/views/Input.js
var import_core45 = require("@tamagui/core-node");
var import_focusable6 = __toESM(require_cjs22());
var import_react_native10 = require("react-native-web-lite");

// node_modules/tamagui/dist/esm/helpers/inputHelpers.js
var import_core44 = require("@tamagui/core-node");
var import_get_button_sized5 = __toESM(require_cjs11());
var import_get_font_sized3 = __toESM(require_cjs12());
var import_get_size10 = __toESM(require_cjs10());
var b15 = /* @__PURE__ */ __name((t30 = "$true", n23) => {
  if (n23.props.multiline || n23.props.numberOfLines > 1)
    return m22(t30, n23);
  const i24 = (0, import_get_button_sized5.getButtonSized)(t30, n23), o23 = (0, import_get_size10.stepTokenUpOrDown)("space", t30, -1, [2]), e29 = (0, import_get_font_sized3.getFontSized)(t30, n23);
  return !import_core44.isWeb && e29 && delete e29.lineHeight, { ...e29, ...i24, paddingHorizontal: o23 };
}, "b");
var m22 = /* @__PURE__ */ __name((t30 = "$true", n23) => {
  const { props: i24 } = n23, o23 = (0, import_get_button_sized5.getButtonSized)(t30, n23), e29 = (0, import_get_font_sized3.getFontSized)(t30, n23), s25 = i24.numberOfLines ? (i24.numberOfLines || 1) * (0, import_core44.getVariableValue)(e29.lineHeight) : "auto", u16 = (0, import_get_size10.stepTokenUpOrDown)("space", t30, -2, [2]), a19 = (0, import_get_size10.stepTokenUpOrDown)("space", t30, -1, [2]);
  return { ...o23, ...e29, paddingVertical: u16, paddingHorizontal: a19, height: s25 };
}, "m");

// node_modules/tamagui/dist/esm/views/Input.js
(0, import_core45.setupReactNative)({ TextInput: import_react_native10.TextInput });
var s23 = { size: "$true", fontFamily: "$body", borderWidth: 1, outlineWidth: 0, color: "$color", focusable: true, borderColor: "$borderColor", backgroundColor: "$background", placeholderTextColor: "$placeholderColor", minWidth: 0, hoverStyle: { borderColor: "$borderColorHover" }, focusStyle: { outlineColor: "$borderColorFocus", outlineWidth: 2, outlineStyle: "solid", borderColor: "$borderColorFocus" } };
var n21 = (0, import_core45.styled)(import_react_native10.TextInput, { name: "Input", variants: { unstyled: { false: s23 }, size: { "...size": b15 } }, defaultVariants: { unstyled: false } }, { isInput: true });
var c26 = (0, import_focusable6.focusableInputHOC)(n21);

// node_modules/tamagui/dist/esm/views/Layouts.js
var import_core46 = require("@tamagui/core-node");
var n22 = (0, import_core46.styled)(import_core46.Stack, { name: "Section", tag: "section", flexDirection: "column", accessibilityRole: "summary" });
var i23 = (0, import_core46.styled)(import_core46.Stack, { name: "Article", tag: "article", flexDirection: "column" });
var c27 = (0, import_core46.styled)(import_core46.Stack, { name: "Main", tag: "main", flexDirection: "column" });
var a18 = (0, import_core46.styled)(import_core46.Stack, { name: "Header", tag: "header", accessibilityRole: "header", flexDirection: "column" });
var r30 = (0, import_core46.styled)(import_core46.Stack, { name: "Aside", tag: "aside", flexDirection: "column" });
var l24 = (0, import_core46.styled)(import_core46.Stack, { name: "Footer", tag: "footer", flexDirection: "column" });
var m23 = (0, import_core46.styled)(import_core46.Stack, { name: "Nav", tag: "nav", flexDirection: "column" });

// node_modules/tamagui/dist/esm/views/Spinner.js
var import_jsx_runtime44 = require("react/jsx-runtime");
var import_core47 = require("@tamagui/core-node");
var f24 = __toESM(require("react"));
var import_react_native11 = require("react-native-web-lite");
var b16 = c7.extractable((0, import_core47.themeable)(f24.forwardRef((t30, n23) => {
  const { size: a19, color: i24, ...s25 } = t30, c28 = (0, import_core47.useTheme)();
  let e29 = i24;
  return e29 && e29[0] === "$" && (e29 = (0, import_core47.variableToString)(c28[e29])), (0, import_jsx_runtime44.jsx)(c7, { ref: n23, ...s25, children: (0, import_jsx_runtime44.jsx)(import_react_native11.ActivityIndicator, { size: a19, color: e29 }) });
}), { componentName: "Spinner" }));

// node_modules/tamagui/dist/esm/views/TextArea.js
var import_core48 = require("@tamagui/core-node");
var import_focusable7 = __toESM(require_cjs22());
var s24 = (0, import_core48.styled)(n21, { name: "TextArea", multiline: true, variants: { unstyled: { false: { ...s23, height: "auto", numberOfLines: 4 } }, size: { "...size": m22 } }, defaultVariants: { unstyled: false } });
var l26 = (0, import_focusable7.focusableInputHOC)(s24);

// node_modules/tamagui/dist/esm/index.mjs
var import_core49 = require("@tamagui/core-node");
function o22(e29) {
  return process.env.NODE_ENV === "development" && console.warn("LinearGradient has been moved to tamagui/linear-gradient as of 1.1"), null;
}
__name(o22, "o");

// tamagui.config.ts
Object.assign(g.media, {
  tiny: { maxWidth: 500 },
  gtTiny: { minWidth: 500 + 1 },
  small: { maxWidth: 620 },
  gtSmall: { minWidth: 620 + 1 },
  medium: { maxWidth: 780 },
  gtMedium: { minWidth: 780 + 1 },
  large: { maxWidth: 900 },
  gtLarge: { minWidth: 900 + 1 }
});
var tamaConf = f22(g);
var tamagui_config_default = tamaConf;
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

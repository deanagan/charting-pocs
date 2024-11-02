var ld = Object.create;
var Gr = Object.defineProperty;
var ud = Object.getOwnPropertyDescriptor;
var cd = Object.getOwnPropertyNames;
var pd = Object.getPrototypeOf, dd = Object.prototype.hasOwnProperty;
var a = (e, t) => Gr(e, "name", { value: t, configurable: !0 }), oo = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
"u" ? new Proxy(e, {
  get: (t, o) => (typeof require < "u" ? require : t)[o]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
var xe = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var fd = (e, t, o, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of cd(t))
      !dd.call(e, n) && n !== o && Gr(e, n, { get: () => t[n], enumerable: !(i = ud(t, n)) || i.enumerable });
  return e;
};
var Fe = (e, t, o) => (o = e != null ? ld(pd(e)) : {}, fd(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  t || !e || !e.__esModule ? Gr(o, "default", { value: e, enumerable: !0 }) : o,
  e
));

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
var ws = xe((Gv, Ss) => {
  "use strict";
  var hd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  Ss.exports = hd;
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var Ts = xe((Yv, Es) => {
  "use strict";
  var gd = ws();
  function Cs() {
  }
  a(Cs, "emptyFunction");
  function _s() {
  }
  a(_s, "emptyFunctionWithReset");
  _s.resetWarningCache = Cs;
  Es.exports = function() {
    function e(i, n, r, l, u, c) {
      if (c !== gd) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. \
Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    a(e, "shim"), e.isRequired = e;
    function t() {
      return e;
    }
    a(t, "getShim");
    var o = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
      checkPropTypes: _s,
      resetWarningCache: Cs
    };
    return o.PropTypes = o, o;
  };
});

// ../node_modules/prop-types/index.js
var Zr = xe((Jv, ks) => {
  ks.exports = Ts()();
  var Xv, Zv;
});

// ../node_modules/react-fast-compare/index.js
var Ps = xe((ex, Os) => {
  var yd = typeof Element < "u", bd = typeof Map == "function", vd = typeof Set == "function", xd = typeof ArrayBuffer == "function" && !!ArrayBuffer.
  isView;
  function Ao(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return !1;
      var o, i, n;
      if (Array.isArray(e)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (!Ao(e[i], t[i])) return !1;
        return !0;
      }
      var r;
      if (bd && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!Ao(i.value[1], t.get(i.value[0]))) return !1;
        return !0;
      }
      if (vd && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        return !0;
      }
      if (xd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (e[i] !== t[i]) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() ===
      t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() ===
      t.toString();
      if (n = Object.keys(e), o = n.length, o !== Object.keys(t).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
      if (yd && e instanceof Element) return !1;
      for (i = o; i-- !== 0; )
        if (!((n[i] === "_owner" || n[i] === "__v" || n[i] === "__o") && e.$$typeof) && !Ao(e[n[i]], t[n[i]]))
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
  a(Ao, "equal");
  Os.exports = /* @__PURE__ */ a(function(t, o) {
    try {
      return Ao(t, o);
    } catch (i) {
      if ((i.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw i;
    }
  }, "isEqual");
});

// ../node_modules/invariant/browser.js
var Ds = xe((ox, As) => {
  "use strict";
  var Id = /* @__PURE__ */ a(function(e, t, o, i, n, r, l, u) {
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
        var p = [o, i, n, r, l, u], d = 0;
        c = new Error(
          t.replace(/%s/g, function() {
            return p[d++];
          })
        ), c.name = "Invariant Violation";
      }
      throw c.framesToPop = 1, c;
    }
  }, "invariant");
  As.exports = Id;
});

// ../node_modules/shallowequal/index.js
var Ls = xe((nx, Ms) => {
  Ms.exports = /* @__PURE__ */ a(function(t, o, i, n) {
    var r = i ? i.call(n, t, o) : void 0;
    if (r !== void 0)
      return !!r;
    if (t === o)
      return !0;
    if (typeof t != "object" || !t || typeof o != "object" || !o)
      return !1;
    var l = Object.keys(t), u = Object.keys(o);
    if (l.length !== u.length)
      return !1;
    for (var c = Object.prototype.hasOwnProperty.bind(o), p = 0; p < l.length; p++) {
      var d = l[p];
      if (!c(d))
        return !1;
      var b = t[d], f = o[d];
      if (r = i ? i.call(n, b, f, d) : void 0, r === !1 || r === void 0 && b !== f)
        return !1;
    }
    return !0;
  }, "shallowEqual");
});

// ../node_modules/memoizerific/memoizerific.js
var or = xe((Ja, wn) => {
  (function(e) {
    if (typeof Ja == "object" && typeof wn < "u")
      wn.exports = e();
    else if (typeof define == "function" && define.amd)
      define([], e);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e();
    }
  })(function() {
    var e, t, o;
    return (/* @__PURE__ */ a(function i(n, r, l) {
      function u(d, b) {
        if (!r[d]) {
          if (!n[d]) {
            var f = typeof oo == "function" && oo;
            if (!b && f) return f(d, !0);
            if (c) return c(d, !0);
            var y = new Error("Cannot find module '" + d + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var m = r[d] = { exports: {} };
          n[d][0].call(m.exports, function(g) {
            var S = n[d][1][g];
            return u(S || g);
          }, m, m.exports, i, n, r, l);
        }
        return r[d].exports;
      }
      a(u, "s");
      for (var c = typeof oo == "function" && oo, p = 0; p < l.length; p++) u(l[p]);
      return u;
    }, "e"))({ 1: [function(i, n, r) {
      n.exports = function(l) {
        if (typeof Map != "function" || l) {
          var u = i("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
    }, { "./similar": 2 }], 2: [function(i, n, r) {
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(l, "Similar"), l.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(u, c) {
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (p = this.indexOf(u), p >= 0 ? (this.lastItem =
        this.list[p], this.list[p].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
      }, l.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? !0 : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, l.prototype.forEach = function(u, c) {
        var p;
        for (p = 0; p < this.size; p++)
          u.call(c || this, this.list[p].val, this.list[p].key, this);
      }, l.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, l.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
      }, n.exports = l;
    }, {}], 3: [function(i, n, r) {
      var l = i("map-or-similar");
      n.exports = function(d) {
        var b = new l(!1), f = [];
        return function(y) {
          var m = /* @__PURE__ */ a(function() {
            var g = b, S, _, h = arguments.length - 1, v = Array(h + 1), x = !0, w;
            if ((m.numArgs || m.numArgs === 0) && m.numArgs !== h + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (w = 0; w < h; w++) {
              if (v[w] = {
                cacheItem: g,
                arg: arguments[w]
              }, g.has(arguments[w])) {
                g = g.get(arguments[w]);
                continue;
              }
              x = !1, S = new l(!1), g.set(arguments[w], S), g = S;
            }
            return x && (g.has(arguments[h]) ? _ = g.get(arguments[h]) : x = !1), x || (_ = y.apply(null, arguments), g.set(arguments[h], _)),
            d > 0 && (v[h] = {
              cacheItem: g,
              arg: arguments[h]
            }, x ? u(f, v) : f.push(v), f.length > d && c(f.shift())), m.wasMemoized = x, m.numArgs = h + 1, _;
          }, "memoizerific");
          return m.limit = d, m.wasMemoized = !1, m.cache = b, m.lru = f, m;
        };
      };
      function u(d, b) {
        var f = d.length, y = b.length, m, g, S;
        for (g = 0; g < f; g++) {
          for (m = !0, S = 0; S < y; S++)
            if (!p(d[g][S].arg, b[S].arg)) {
              m = !1;
              break;
            }
          if (m)
            break;
        }
        d.push(d.splice(g, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(d) {
        var b = d.length, f = d[b - 1], y, m;
        for (f.cacheItem.delete(f.arg), m = b - 2; m >= 0 && (f = d[m], y = f.cacheItem.get(f.arg), !y || !y.size); m--)
          f.cacheItem.delete(f.arg);
      }
      a(c, "removeCachedResult");
      function p(d, b) {
        return d === b || d !== d && b !== b;
      }
      a(p, "isEqual");
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/picoquery/lib/string-util.js
var kn = xe((Tn) => {
  "use strict";
  Object.defineProperty(Tn, "__esModule", { value: !0 });
  Tn.encodeString = Hf;
  var Je = Array.from({ length: 256 }, (e, t) => "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()), Bf = new Int8Array([
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
  function Hf(e) {
    let t = e.length;
    if (t === 0)
      return "";
    let o = "", i = 0, n = 0;
    e: for (; n < t; n++) {
      let r = e.charCodeAt(n);
      for (; r < 128; ) {
        if (Bf[r] !== 1 && (i < n && (o += e.slice(i, n)), i = n + 1, o += Je[r]), ++n === t)
          break e;
        r = e.charCodeAt(n);
      }
      if (i < n && (o += e.slice(i, n)), r < 2048) {
        i = n + 1, o += Je[192 | r >> 6] + Je[128 | r & 63];
        continue;
      }
      if (r < 55296 || r >= 57344) {
        i = n + 1, o += Je[224 | r >> 12] + Je[128 | r >> 6 & 63] + Je[128 | r & 63];
        continue;
      }
      if (++n, n >= t)
        throw new Error("URI malformed");
      let l = e.charCodeAt(n) & 1023;
      i = n + 1, r = 65536 + ((r & 1023) << 10 | l), o += Je[240 | r >> 18] + Je[128 | r >> 12 & 63] + Je[128 | r >> 6 & 63] + Je[128 | r & 63];
    }
    return i === 0 ? e : i < t ? o + e.slice(i) : o;
  }
  a(Hf, "encodeString");
});

// ../node_modules/picoquery/lib/shared.js
var rr = xe((et) => {
  "use strict";
  Object.defineProperty(et, "__esModule", { value: !0 });
  et.defaultOptions = et.defaultShouldSerializeObject = et.defaultValueSerializer = void 0;
  var On = kn(), zf = /* @__PURE__ */ a((e) => {
    switch (typeof e) {
      case "string":
        return (0, On.encodeString)(e);
      case "bigint":
      case "boolean":
        return "" + e;
      case "number":
        if (Number.isFinite(e))
          return e < 1e21 ? "" + e : (0, On.encodeString)("" + e);
        break;
    }
    return e instanceof Date ? (0, On.encodeString)(e.toISOString()) : "";
  }, "defaultValueSerializer");
  et.defaultValueSerializer = zf;
  var Rf = /* @__PURE__ */ a((e) => e instanceof Date, "defaultShouldSerializeObject");
  et.defaultShouldSerializeObject = Rf;
  var rl = /* @__PURE__ */ a((e) => e, "identityFunc");
  et.defaultOptions = {
    nesting: !0,
    nestingSyntax: "dot",
    arrayRepeat: !1,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
    valueDeserializer: rl,
    valueSerializer: et.defaultValueSerializer,
    keyDeserializer: rl,
    shouldSerializeObject: et.defaultShouldSerializeObject
  };
});

// ../node_modules/picoquery/lib/object-util.js
var Pn = xe((nr) => {
  "use strict";
  Object.defineProperty(nr, "__esModule", { value: !0 });
  nr.getDeepObject = Vf;
  nr.stringifyObject = nl;
  var Ct = rr(), jf = kn();
  function Wf(e) {
    return e === "__proto__" || e === "constructor" || e === "prototype";
  }
  a(Wf, "isPrototypeKey");
  function Vf(e, t, o, i, n) {
    if (Wf(t))
      return e;
    let r = e[t];
    return typeof r == "object" && r !== null ? r : !i && (n || typeof o == "number" || typeof o == "string" && o * 0 === 0 && o.indexOf(".") ===
    -1) ? e[t] = [] : e[t] = {};
  }
  a(Vf, "getDeepObject");
  var Kf = 20, $f = "[]", Uf = "[", qf = "]", Gf = ".";
  function nl(e, t, o = 0, i, n) {
    let { nestingSyntax: r = Ct.defaultOptions.nestingSyntax, arrayRepeat: l = Ct.defaultOptions.arrayRepeat, arrayRepeatSyntax: u = Ct.defaultOptions.
    arrayRepeatSyntax, nesting: c = Ct.defaultOptions.nesting, delimiter: p = Ct.defaultOptions.delimiter, valueSerializer: d = Ct.defaultOptions.
    valueSerializer, shouldSerializeObject: b = Ct.defaultOptions.shouldSerializeObject } = t, f = typeof p == "number" ? String.fromCharCode(
    p) : p, y = n === !0 && l, m = r === "dot" || r === "js" && !n;
    if (o > Kf)
      return "";
    let g = "", S = !0, _ = !1;
    for (let h in e) {
      let v = e[h], x;
      i ? (x = i, y ? u === "bracket" && (x += $f) : m ? (x += Gf, x += h) : (x += Uf, x += h, x += qf)) : x = h, S || (g += f), typeof v ==
      "object" && v !== null && !b(v) ? (_ = v.pop !== void 0, (c || l && _) && (g += nl(v, t, o + 1, x, _))) : (g += (0, jf.encodeString)(x),
      g += "=", g += d(v, h)), S && (S = !1);
    }
    return g;
  }
  a(nl, "stringifyObject");
});

// ../node_modules/fast-decode-uri-component/index.js
var ll = xe((UE, al) => {
  "use strict";
  var il = 12, Yf = 0, An = [
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function Qf(e) {
    var t = e.indexOf("%");
    if (t === -1) return e;
    for (var o = e.length, i = "", n = 0, r = 0, l = t, u = il; t > -1 && t < o; ) {
      var c = sl(e[t + 1], 4), p = sl(e[t + 2], 0), d = c | p, b = An[d];
      if (u = An[256 + u + b], r = r << 6 | d & An[364 + b], u === il)
        i += e.slice(n, l), i += r <= 65535 ? String.fromCharCode(r) : String.fromCharCode(
          55232 + (r >> 10),
          56320 + (r & 1023)
        ), r = 0, n = t + 3, t = l = e.indexOf("%", n);
      else {
        if (u === Yf)
          return null;
        if (t += 3, t < o && e.charCodeAt(t) === 37) continue;
        return null;
      }
    }
    return i + e.slice(n);
  }
  a(Qf, "decodeURIComponent");
  var Xf = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function sl(e, t) {
    var o = Xf[e];
    return o === void 0 ? 255 : o << t;
  }
  a(sl, "hexCodeToInt");
  al.exports = Qf;
});

// ../node_modules/picoquery/lib/parse.js
var dl = xe((lt) => {
  "use strict";
  var Zf = lt && lt.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(lt, "__esModule", { value: !0 });
  lt.numberValueDeserializer = lt.numberKeyDeserializer = void 0;
  lt.parse = tm;
  var ir = Pn(), _t = rr(), ul = Zf(ll()), Jf = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberKeyDeserializer");
  lt.numberKeyDeserializer = Jf;
  var em = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberValueDeserializer");
  lt.numberValueDeserializer = em;
  var cl = /\+/g, pl = /* @__PURE__ */ a(function() {
  }, "Empty");
  pl.prototype = /* @__PURE__ */ Object.create(null);
  function sr(e, t, o, i, n) {
    let r = e.substring(t, o);
    return i && (r = r.replace(cl, " ")), n && (r = (0, ul.default)(r) || r), r;
  }
  a(sr, "computeKeySlice");
  function tm(e, t) {
    let { valueDeserializer: o = _t.defaultOptions.valueDeserializer, keyDeserializer: i = _t.defaultOptions.keyDeserializer, arrayRepeatSyntax: n = _t.
    defaultOptions.arrayRepeatSyntax, nesting: r = _t.defaultOptions.nesting, arrayRepeat: l = _t.defaultOptions.arrayRepeat, nestingSyntax: u = _t.
    defaultOptions.nestingSyntax, delimiter: c = _t.defaultOptions.delimiter } = t ?? {}, p = typeof c == "string" ? c.charCodeAt(0) : c, d = u ===
    "js", b = new pl();
    if (typeof e != "string")
      return b;
    let f = e.length, y = "", m = -1, g = -1, S = -1, _ = b, h, v = "", x = "", w = !1, T = !1, O = !1, k = !1, C = !1, E = !1, P = !1, D = 0,
    M = -1, N = -1, U = -1;
    for (let j = 0; j < f + 1; j++) {
      if (D = j !== f ? e.charCodeAt(j) : p, D === p) {
        if (P = g > m, P || (g = j), S !== g - 1 && (x = sr(e, S + 1, M > -1 ? M : g, O, w), v = i(x), h !== void 0 && (_ = (0, ir.getDeepObject)(
        _, h, v, d && C, d && E))), P || v !== "") {
          P && (y = e.slice(g + 1, j), k && (y = y.replace(cl, " ")), T && (y = (0, ul.default)(y) || y));
          let G = o(y, v);
          if (l) {
            let H = _[v];
            H === void 0 ? M > -1 ? _[v] = [G] : _[v] = G : H.pop ? H.push(G) : _[v] = [H, G];
          } else
            _[v] = G;
        }
        y = "", m = j, g = j, w = !1, T = !1, O = !1, k = !1, C = !1, E = !1, M = -1, S = j, _ = b, h = void 0, v = "";
      } else D === 93 ? (l && n === "bracket" && U === 91 && (M = N), r && (u === "index" || d) && g <= m && (S !== N && (x = sr(e, S + 1, j,
      O, w), v = i(x), h !== void 0 && (_ = (0, ir.getDeepObject)(_, h, v, void 0, d)), h = v, O = !1, w = !1), S = j, E = !0, C = !1)) : D ===
      46 ? r && (u === "dot" || d) && g <= m && (S !== N && (x = sr(e, S + 1, j, O, w), v = i(x), h !== void 0 && (_ = (0, ir.getDeepObject)(
      _, h, v, d)), h = v, O = !1, w = !1), C = !0, E = !1, S = j) : D === 91 ? r && (u === "index" || d) && g <= m && (S !== N && (x = sr(e,
      S + 1, j, O, w), v = i(x), d && h !== void 0 && (_ = (0, ir.getDeepObject)(_, h, v, d)), h = v, O = !1, w = !1, C = !1, E = !0), S = j) :
      D === 61 ? g <= m ? g = j : T = !0 : D === 43 ? g > m ? k = !0 : O = !0 : D === 37 && (g > m ? T = !0 : w = !0);
      N = j, U = D;
    }
    return b;
  }
  a(tm, "parse");
});

// ../node_modules/picoquery/lib/stringify.js
var fl = xe((Dn) => {
  "use strict";
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  Dn.stringify = rm;
  var om = Pn();
  function rm(e, t) {
    if (e === null || typeof e != "object")
      return "";
    let o = t ?? {};
    return (0, om.stringifyObject)(e, o);
  }
  a(rm, "stringify");
});

// ../node_modules/picoquery/lib/main.js
var ml = xe((Ye) => {
  "use strict";
  var nm = Ye && Ye.__createBinding || (Object.create ? function(e, t, o, i) {
    i === void 0 && (i = o);
    var n = Object.getOwnPropertyDescriptor(t, o);
    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return t[o];
    }, "get") }), Object.defineProperty(e, i, n);
  } : function(e, t, o, i) {
    i === void 0 && (i = o), e[i] = t[o];
  }), im = Ye && Ye.__exportStar || function(e, t) {
    for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && nm(t, e, o);
  };
  Object.defineProperty(Ye, "__esModule", { value: !0 });
  Ye.stringify = Ye.parse = void 0;
  var sm = dl();
  Object.defineProperty(Ye, "parse", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return sm.parse;
  }, "get") });
  var am = fl();
  Object.defineProperty(Ye, "stringify", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return am.stringify;
  }, "get") });
  im(rr(), Ye);
});

// ../node_modules/toggle-selection/index.js
var xl = xe((gT, vl) => {
  vl.exports = function() {
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, o = [], i = 0; i < e.rangeCount; i++)
      o.push(e.getRangeAt(i));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(n) {
        e.addRange(n);
      }), t && t.focus();
    };
  };
});

// ../node_modules/copy-to-clipboard/index.js
var wl = xe((yT, Sl) => {
  "use strict";
  var fm = xl(), Il = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, mm = "Copy to clipboard: #{key}, Enter";
  function hm(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  a(hm, "format");
  function gm(e, t) {
    var o, i, n, r, l, u, c = !1;
    t || (t = {}), o = t.debug || !1;
    try {
      n = fm(), r = document.createRange(), l = document.getSelection(), u = document.createElement("span"), u.textContent = e, u.ariaHidden =
      "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "p\
re", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener(
      "copy", function(d) {
        if (d.stopPropagation(), t.format)
          if (d.preventDefault(), typeof d.clipboardData > "u") {
            o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var b = Il[t.format] || Il.default;
            window.clipboardData.setData(b, e);
          } else
            d.clipboardData.clearData(), d.clipboardData.setData(t.format, e);
        t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData));
      }), document.body.appendChild(u), r.selectNodeContents(u), l.addRange(r);
      var p = document.execCommand("copy");
      if (!p)
        throw new Error("copy command was unsuccessful");
      c = !0;
    } catch (d) {
      o && console.error("unable to copy using execCommand: ", d), o && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
      } catch (b) {
        o && console.error("unable to copy using clipboardData: ", b), o && console.error("falling back to prompt"), i = hm("message" in t ?
        t.message : mm), window.prompt(i, e);
      }
    } finally {
      l && (typeof l.removeRange == "function" ? l.removeRange(r) : l.removeAllRanges()), u && document.body.removeChild(u), n();
    }
    return c;
  }
  a(gm, "copy");
  Sl.exports = gm;
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var Ic = xe((ce) => {
  "use strict";
  var Kn = Symbol.for("react.element"), $n = Symbol.for("react.portal"), vr = Symbol.for("react.fragment"), xr = Symbol.for("react.strict_mo\
de"), Ir = Symbol.for("react.profiler"), Sr = Symbol.for("react.provider"), wr = Symbol.for("react.context"), ag = Symbol.for("react.server_\
context"), Cr = Symbol.for("react.forward_ref"), _r = Symbol.for("react.suspense"), Er = Symbol.for("react.suspense_list"), Tr = Symbol.for(
  "react.memo"), kr = Symbol.for("react.lazy"), lg = Symbol.for("react.offscreen"), xc;
  xc = Symbol.for("react.module.reference");
  function Ve(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Kn:
          switch (e = e.type, e) {
            case vr:
            case Ir:
            case xr:
            case _r:
            case Er:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case ag:
                case wr:
                case Cr:
                case kr:
                case Tr:
                case Sr:
                  return e;
                default:
                  return t;
              }
          }
        case $n:
          return t;
      }
    }
  }
  a(Ve, "v");
  ce.ContextConsumer = wr;
  ce.ContextProvider = Sr;
  ce.Element = Kn;
  ce.ForwardRef = Cr;
  ce.Fragment = vr;
  ce.Lazy = kr;
  ce.Memo = Tr;
  ce.Portal = $n;
  ce.Profiler = Ir;
  ce.StrictMode = xr;
  ce.Suspense = _r;
  ce.SuspenseList = Er;
  ce.isAsyncMode = function() {
    return !1;
  };
  ce.isConcurrentMode = function() {
    return !1;
  };
  ce.isContextConsumer = function(e) {
    return Ve(e) === wr;
  };
  ce.isContextProvider = function(e) {
    return Ve(e) === Sr;
  };
  ce.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Kn;
  };
  ce.isForwardRef = function(e) {
    return Ve(e) === Cr;
  };
  ce.isFragment = function(e) {
    return Ve(e) === vr;
  };
  ce.isLazy = function(e) {
    return Ve(e) === kr;
  };
  ce.isMemo = function(e) {
    return Ve(e) === Tr;
  };
  ce.isPortal = function(e) {
    return Ve(e) === $n;
  };
  ce.isProfiler = function(e) {
    return Ve(e) === Ir;
  };
  ce.isStrictMode = function(e) {
    return Ve(e) === xr;
  };
  ce.isSuspense = function(e) {
    return Ve(e) === _r;
  };
  ce.isSuspenseList = function(e) {
    return Ve(e) === Er;
  };
  ce.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === vr || e === Ir || e === xr || e === _r || e === Er || e === lg || typeof e ==
    "object" && e !== null && (e.$$typeof === kr || e.$$typeof === Tr || e.$$typeof === Sr || e.$$typeof === wr || e.$$typeof === Cr || e.$$typeof ===
    xc || e.getModuleId !== void 0);
  };
  ce.typeOf = Ve;
});

// ../node_modules/downshift/node_modules/react-is/index.js
var wc = xe((HD, Sc) => {
  "use strict";
  Sc.exports = Ic();
});

// ../node_modules/fuse.js/dist/fuse.js
var Ap = xe((So, Fi) => {
  (function(e, t) {
    typeof So == "object" && typeof Fi == "object" ? Fi.exports = t() : typeof define == "function" && define.amd ? define("Fuse", [], t) : typeof So ==
    "object" ? So.Fuse = t() : e.Fuse = t();
  })(So, function() {
    return function(e) {
      var t = {};
      function o(i) {
        if (t[i]) return t[i].exports;
        var n = t[i] = { i, l: !1, exports: {} };
        return e[i].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
      }
      return a(o, "r"), o.m = e, o.c = t, o.d = function(i, n, r) {
        o.o(i, n) || Object.defineProperty(i, n, { enumerable: !0, get: r });
      }, o.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(
        i, "__esModule", { value: !0 });
      }, o.t = function(i, n) {
        if (1 & n && (i = o(i)), 8 & n || 4 & n && typeof i == "object" && i && i.__esModule) return i;
        var r = /* @__PURE__ */ Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: i }), 2 & n && typeof i != "string") for (var l in i) o.d(r,
        l, (function(u) {
          return i[u];
        }).bind(null, l));
        return r;
      }, o.n = function(i) {
        var n = i && i.__esModule ? function() {
          return i.default;
        } : function() {
          return i;
        };
        return o.d(n, "a", n), n;
      }, o.o = function(i, n) {
        return Object.prototype.hasOwnProperty.call(i, n);
      }, o.p = "", o(o.s = 0);
    }([function(e, t, o) {
      function i(d) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(b) {
          return typeof b;
        } : function(b) {
          return b && typeof Symbol == "function" && b.constructor === Symbol && b !== Symbol.prototype ? "symbol" : typeof b;
        })(d);
      }
      a(i, "n");
      function n(d, b) {
        for (var f = 0; f < b.length; f++) {
          var y = b[f];
          y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(d, y.key, y);
        }
      }
      a(n, "o");
      var r = o(1), l = o(7), u = l.get, c = (l.deepValue, l.isArray), p = function() {
        function d(m, g) {
          var S = g.location, _ = S === void 0 ? 0 : S, h = g.distance, v = h === void 0 ? 100 : h, x = g.threshold, w = x === void 0 ? 0.6 :
          x, T = g.maxPatternLength, O = T === void 0 ? 32 : T, k = g.caseSensitive, C = k !== void 0 && k, E = g.tokenSeparator, P = E === void 0 ?
          / +/g : E, D = g.findAllMatches, M = D !== void 0 && D, N = g.minMatchCharLength, U = N === void 0 ? 1 : N, j = g.id, G = j === void 0 ?
          null : j, H = g.keys, W = H === void 0 ? [] : H, z = g.shouldSort, te = z === void 0 || z, F = g.getFn, B = F === void 0 ? u : F, L = g.
          sortFn, R = L === void 0 ? function(de, ve) {
            return de.score - ve.score;
          } : L, Z = g.tokenize, re = Z !== void 0 && Z, ee = g.matchAllTokens, pe = ee !== void 0 && ee, ie = g.includeMatches, ue = ie !==
          void 0 && ie, le = g.includeScore, be = le !== void 0 && le, me = g.verbose, Te = me !== void 0 && me;
          (function(de, ve) {
            if (!(de instanceof ve)) throw new TypeError("Cannot call a class as a function");
          })(this, d), this.options = { location: _, distance: v, threshold: w, maxPatternLength: O, isCaseSensitive: C, tokenSeparator: P, findAllMatches: M,
          minMatchCharLength: U, id: G, keys: W, includeMatches: ue, includeScore: be, shouldSort: te, getFn: B, sortFn: R, verbose: Te, tokenize: re,
          matchAllTokens: pe }, this.setCollection(m), this._processKeys(W);
        }
        a(d, "e");
        var b, f, y;
        return b = d, (f = [{ key: "setCollection", value: /* @__PURE__ */ a(function(m) {
          return this.list = m, m;
        }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ a(function(m) {
          if (this._keyWeights = {}, this._keyNames = [], m.length && typeof m[0] == "string") for (var g = 0, S = m.length; g < S; g += 1) {
            var _ = m[g];
            this._keyWeights[_] = 1, this._keyNames.push(_);
          }
          else {
            for (var h = null, v = null, x = 0, w = 0, T = m.length; w < T; w += 1) {
              var O = m[w];
              if (!O.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
              var k = O.name;
              if (this._keyNames.push(k), !O.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
              var C = O.weight;
              if (C < 0 || C > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
              v = v == null ? C : Math.max(v, C), h = h == null ? C : Math.min(h, C), this._keyWeights[k] = C, x += C;
            }
            if (x > 1) throw new Error("Total of weights cannot exceed 1");
          }
        }, "value") }, { key: "search", value: /* @__PURE__ */ a(function(m) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { limit: !1 };
          this._log(`---------
Search pattern: "`.concat(m, '"'));
          var S = this._prepareSearchers(m), _ = S.tokenSearchers, h = S.fullSearcher, v = this._search(_, h);
          return this._computeScore(v), this.options.shouldSort && this._sort(v), g.limit && typeof g.limit == "number" && (v = v.slice(0, g.
          limit)), this._format(v);
        }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ a(function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", g = [];
          if (this.options.tokenize) for (var S = m.split(this.options.tokenSeparator), _ = 0, h = S.length; _ < h; _ += 1) g.push(new r(S[_],
          this.options));
          return { tokenSearchers: g, fullSearcher: new r(m, this.options) };
        }, "value") }, { key: "_search", value: /* @__PURE__ */ a(function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], g = arguments.length > 1 ? arguments[1] : void 0, S = this.
          list, _ = {}, h = [];
          if (typeof S[0] == "string") {
            for (var v = 0, x = S.length; v < x; v += 1) this._analyze({ key: "", value: S[v], record: v, index: v }, { resultMap: _, results: h,
            tokenSearchers: m, fullSearcher: g });
            return h;
          }
          for (var w = 0, T = S.length; w < T; w += 1) for (var O = S[w], k = 0, C = this._keyNames.length; k < C; k += 1) {
            var E = this._keyNames[k];
            this._analyze({ key: E, value: this.options.getFn(O, E), record: O, index: w }, { resultMap: _, results: h, tokenSearchers: m, fullSearcher: g });
          }
          return h;
        }, "value") }, { key: "_analyze", value: /* @__PURE__ */ a(function(m, g) {
          var S = this, _ = m.key, h = m.arrayIndex, v = h === void 0 ? -1 : h, x = m.value, w = m.record, T = m.index, O = g.tokenSearchers,
          k = O === void 0 ? [] : O, C = g.fullSearcher, E = g.resultMap, P = E === void 0 ? {} : E, D = g.results, M = D === void 0 ? [] : D;
          (/* @__PURE__ */ a(function N(U, j, G, H) {
            if (j != null) {
              if (typeof j == "string") {
                var W = !1, z = -1, te = 0;
                S._log(`
Key: `.concat(_ === "" ? "--" : _));
                var F = C.search(j);
                if (S._log('Full text: "'.concat(j, '", score: ').concat(F.score)), S.options.tokenize) {
                  for (var B = j.split(S.options.tokenSeparator), L = B.length, R = [], Z = 0, re = k.length; Z < re; Z += 1) {
                    var ee = k[Z];
                    S._log(`
Pattern: "`.concat(ee.pattern, '"'));
                    for (var pe = !1, ie = 0; ie < L; ie += 1) {
                      var ue = B[ie], le = ee.search(ue), be = {};
                      le.isMatch ? (be[ue] = le.score, W = !0, pe = !0, R.push(le.score)) : (be[ue] = 1, S.options.matchAllTokens || R.push(
                      1)), S._log('Token: "'.concat(ue, '", score: ').concat(be[ue]));
                    }
                    pe && (te += 1);
                  }
                  z = R[0];
                  for (var me = R.length, Te = 1; Te < me; Te += 1) z += R[Te];
                  z /= me, S._log("Token score average:", z);
                }
                var de = F.score;
                z > -1 && (de = (de + z) / 2), S._log("Score average:", de);
                var ve = !S.options.tokenize || !S.options.matchAllTokens || te >= k.length;
                if (S._log(`
Check Matches: `.concat(ve)), (W || F.isMatch) && ve) {
                  var we = { key: _, arrayIndex: U, value: j, score: de };
                  S.options.includeMatches && (we.matchedIndices = F.matchedIndices);
                  var De = P[H];
                  De ? De.output.push(we) : (P[H] = { item: G, output: [we] }, M.push(P[H]));
                }
              } else if (c(j)) for (var Ze = 0, Oe = j.length; Ze < Oe; Ze += 1) N(Ze, j[Ze], G, H);
            }
          }, "e"))(v, x, w, T);
        }, "value") }, { key: "_computeScore", value: /* @__PURE__ */ a(function(m) {
          this._log(`

Computing score:
`);
          for (var g = this._keyWeights, S = !!Object.keys(g).length, _ = 0, h = m.length; _ < h; _ += 1) {
            for (var v = m[_], x = v.output, w = x.length, T = 1, O = 0; O < w; O += 1) {
              var k = x[O], C = k.key, E = S ? g[C] : 1, P = k.score === 0 && g && g[C] > 0 ? Number.EPSILON : k.score;
              T *= Math.pow(P, E);
            }
            v.score = T, this._log(v);
          }
        }, "value") }, { key: "_sort", value: /* @__PURE__ */ a(function(m) {
          this._log(`

Sorting....`), m.sort(this.options.sortFn);
        }, "value") }, { key: "_format", value: /* @__PURE__ */ a(function(m) {
          var g = [];
          if (this.options.verbose) {
            var S = [];
            this._log(`

Output:

`, JSON.stringify(m, function(k, C) {
              if (i(C) === "object" && C !== null) {
                if (S.indexOf(C) !== -1) return;
                S.push(C);
              }
              return C;
            }, 2)), S = null;
          }
          var _ = [];
          this.options.includeMatches && _.push(function(k, C) {
            var E = k.output;
            C.matches = [];
            for (var P = 0, D = E.length; P < D; P += 1) {
              var M = E[P];
              if (M.matchedIndices.length !== 0) {
                var N = { indices: M.matchedIndices, value: M.value };
                M.key && (N.key = M.key), M.hasOwnProperty("arrayIndex") && M.arrayIndex > -1 && (N.arrayIndex = M.arrayIndex), C.matches.push(
                N);
              }
            }
          }), this.options.includeScore && _.push(function(k, C) {
            C.score = k.score;
          });
          for (var h = 0, v = m.length; h < v; h += 1) {
            var x = m[h];
            if (this.options.id && (x.item = this.options.getFn(x.item, this.options.id)[0]), _.length) {
              for (var w = { item: x.item }, T = 0, O = _.length; T < O; T += 1) _[T](x, w);
              g.push(w);
            } else g.push(x.item);
          }
          return g;
        }, "value") }, { key: "_log", value: /* @__PURE__ */ a(function() {
          var m;
          this.options.verbose && (m = console).log.apply(m, arguments);
        }, "value") }]) && n(b.prototype, f), y && n(b, y), d;
      }();
      e.exports = p;
    }, function(e, t, o) {
      function i(c, p) {
        for (var d = 0; d < p.length; d++) {
          var b = p[d];
          b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(c, b.key, b);
        }
      }
      a(i, "n");
      var n = o(2), r = o(3), l = o(6), u = function() {
        function c(f, y) {
          var m = y.location, g = m === void 0 ? 0 : m, S = y.distance, _ = S === void 0 ? 100 : S, h = y.threshold, v = h === void 0 ? 0.6 :
          h, x = y.maxPatternLength, w = x === void 0 ? 32 : x, T = y.isCaseSensitive, O = T !== void 0 && T, k = y.tokenSeparator, C = k ===
          void 0 ? / +/g : k, E = y.findAllMatches, P = E !== void 0 && E, D = y.minMatchCharLength, M = D === void 0 ? 1 : D, N = y.includeMatches,
          U = N !== void 0 && N;
          (function(j, G) {
            if (!(j instanceof G)) throw new TypeError("Cannot call a class as a function");
          })(this, c), this.options = { location: g, distance: _, threshold: v, maxPatternLength: w, isCaseSensitive: O, tokenSeparator: C, findAllMatches: P,
          includeMatches: U, minMatchCharLength: M }, this.pattern = O ? f : f.toLowerCase(), this.pattern.length <= w && (this.patternAlphabet =
          l(this.pattern));
        }
        a(c, "e");
        var p, d, b;
        return p = c, (d = [{ key: "search", value: /* @__PURE__ */ a(function(f) {
          var y = this.options, m = y.isCaseSensitive, g = y.includeMatches;
          if (m || (f = f.toLowerCase()), this.pattern === f) {
            var S = { isMatch: !0, score: 0 };
            return g && (S.matchedIndices = [[0, f.length - 1]]), S;
          }
          var _ = this.options, h = _.maxPatternLength, v = _.tokenSeparator;
          if (this.pattern.length > h) return n(f, this.pattern, v);
          var x = this.options, w = x.location, T = x.distance, O = x.threshold, k = x.findAllMatches, C = x.minMatchCharLength;
          return r(f, this.pattern, this.patternAlphabet, { location: w, distance: T, threshold: O, findAllMatches: k, minMatchCharLength: C,
          includeMatches: g });
        }, "value") }]) && i(p.prototype, d), b && i(p, b), c;
      }();
      e.exports = u;
    }, function(e, t) {
      var o = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
      e.exports = function(i, n) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g, l = new RegExp(n.replace(o, "\\$&").replace(r, "|")),
        u = i.match(l), c = !!u, p = [];
        if (c) for (var d = 0, b = u.length; d < b; d += 1) {
          var f = u[d];
          p.push([i.indexOf(f), f.length - 1]);
        }
        return { score: c ? 0.5 : 1, isMatch: c, matchedIndices: p };
      };
    }, function(e, t, o) {
      var i = o(4), n = o(5);
      e.exports = function(r, l, u, c) {
        for (var p = c.location, d = p === void 0 ? 0 : p, b = c.distance, f = b === void 0 ? 100 : b, y = c.threshold, m = y === void 0 ? 0.6 :
        y, g = c.findAllMatches, S = g !== void 0 && g, _ = c.minMatchCharLength, h = _ === void 0 ? 1 : _, v = c.includeMatches, x = v !== void 0 &&
        v, w = d, T = r.length, O = m, k = r.indexOf(l, w), C = l.length, E = [], P = 0; P < T; P += 1) E[P] = 0;
        if (k !== -1) {
          var D = i(l, { errors: 0, currentLocation: k, expectedLocation: w, distance: f });
          if (O = Math.min(D, O), (k = r.lastIndexOf(l, w + C)) !== -1) {
            var M = i(l, { errors: 0, currentLocation: k, expectedLocation: w, distance: f });
            O = Math.min(M, O);
          }
        }
        k = -1;
        for (var N = [], U = 1, j = C + T, G = 1 << (C <= 31 ? C - 1 : 30), H = 0; H < C; H += 1) {
          for (var W = 0, z = j; W < z; )
            i(l, { errors: H, currentLocation: w + z, expectedLocation: w, distance: f }) <= O ? W = z : j = z, z = Math.floor((j - W) / 2 +
            W);
          j = z;
          var te = Math.max(1, w - z + 1), F = S ? T : Math.min(w + z, T) + C, B = Array(F + 2);
          B[F + 1] = (1 << H) - 1;
          for (var L = F; L >= te; L -= 1) {
            var R = L - 1, Z = u[r.charAt(R)];
            if (Z && (E[R] = 1), B[L] = (B[L + 1] << 1 | 1) & Z, H !== 0 && (B[L] |= (N[L + 1] | N[L]) << 1 | 1 | N[L + 1]), B[L] & G && (U =
            i(l, { errors: H, currentLocation: R, expectedLocation: w, distance: f })) <= O) {
              if (O = U, (k = R) <= w) break;
              te = Math.max(1, 2 * w - k);
            }
          }
          if (i(l, { errors: H + 1, currentLocation: w, expectedLocation: w, distance: f }) > O) break;
          N = B;
        }
        var re = { isMatch: k >= 0, score: U === 0 ? 1e-3 : U };
        return x && (re.matchedIndices = n(E, h)), re;
      };
    }, function(e, t) {
      e.exports = function(o, i) {
        var n = i.errors, r = n === void 0 ? 0 : n, l = i.currentLocation, u = l === void 0 ? 0 : l, c = i.expectedLocation, p = c === void 0 ?
        0 : c, d = i.distance, b = d === void 0 ? 100 : d, f = r / o.length, y = Math.abs(p - u);
        return b ? f + y / b : y ? 1 : f;
      };
    }, function(e, t) {
      e.exports = function() {
        for (var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 && arguments[1] !== void 0 ?
        arguments[1] : 1, n = [], r = -1, l = -1, u = 0, c = o.length; u < c; u += 1) {
          var p = o[u];
          p && r === -1 ? r = u : p || r === -1 || ((l = u - 1) - r + 1 >= i && n.push([r, l]), r = -1);
        }
        return o[u - 1] && u - r >= i && n.push([r, u - 1]), n;
      };
    }, function(e, t) {
      e.exports = function(o) {
        for (var i = {}, n = o.length, r = 0; r < n; r += 1) i[o.charAt(r)] = 0;
        for (var l = 0; l < n; l += 1) i[o.charAt(l)] |= 1 << n - l - 1;
        return i;
      };
    }, function(e, t) {
      var o = /* @__PURE__ */ a(function(l) {
        return Array.isArray ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
      }, "r"), i = /* @__PURE__ */ a(function(l) {
        return l == null ? "" : function(u) {
          if (typeof u == "string") return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }(l);
      }, "n"), n = /* @__PURE__ */ a(function(l) {
        return typeof l == "string";
      }, "o"), r = /* @__PURE__ */ a(function(l) {
        return typeof l == "number";
      }, "i");
      e.exports = { get: /* @__PURE__ */ a(function(l, u) {
        var c = [];
        return (/* @__PURE__ */ a(function p(d, b) {
          if (b) {
            var f = b.indexOf("."), y = b, m = null;
            f !== -1 && (y = b.slice(0, f), m = b.slice(f + 1));
            var g = d[y];
            if (g != null) if (m || !n(g) && !r(g)) if (o(g)) for (var S = 0, _ = g.length; S < _; S += 1) p(g[S], m);
            else m && p(g, m);
            else c.push(i(g));
          } else c.push(d);
        }, "e"))(l, u), c;
      }, "get"), isArray: o, isString: n, isNum: r, toString: i };
    }]);
  });
});

// ../node_modules/store2/dist/store2.js
var Rp = xe((Kr, $r) => {
  (function(e, t) {
    var o = {
      version: "2.14.2",
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
      inherit: /* @__PURE__ */ a(function(n, r) {
        for (var l in n)
          r.hasOwnProperty(l) || Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(n, l));
        return r;
      }, "inherit"),
      stringify: /* @__PURE__ */ a(function(n, r) {
        return n === void 0 || typeof n == "function" ? n + "" : JSON.stringify(n, r || o.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ a(function(n, r) {
        try {
          return JSON.parse(n, r || o.revive);
        } catch {
          return n;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ a(function(n, r) {
        o.storeAPI[n] = r;
        for (var l in o.apis)
          o.apis[l][n] = r;
      }, "fn"),
      get: /* @__PURE__ */ a(function(n, r) {
        return n.getItem(r);
      }, "get"),
      set: /* @__PURE__ */ a(function(n, r, l) {
        n.setItem(r, l);
      }, "set"),
      remove: /* @__PURE__ */ a(function(n, r) {
        n.removeItem(r);
      }, "remove"),
      key: /* @__PURE__ */ a(function(n, r) {
        return n.key(r);
      }, "key"),
      length: /* @__PURE__ */ a(function(n) {
        return n.length;
      }, "length"),
      clear: /* @__PURE__ */ a(function(n) {
        n.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ a(function(n, r, l) {
        var u = o.inherit(o.storeAPI, function(p, d, b) {
          return arguments.length === 0 ? u.getAll() : typeof d == "function" ? u.transact(p, d, b) : d !== void 0 ? u.set(p, d, b) : typeof p ==
          "string" || typeof p == "number" ? u.get(p) : typeof p == "function" ? u.each(p) : p ? u.setAll(p, d) : u.clear();
        });
        u._id = n;
        try {
          var c = "__store2_test";
          r.setItem(c, "ok"), u._area = r, r.removeItem(c);
        } catch {
          u._area = o.storage("fake");
        }
        return u._ns = l || "", o.areas[n] || (o.areas[n] = u._area), o.apis[u._ns + u._id] || (o.apis[u._ns + u._id] = u), u;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ a(function(n, r) {
          var l = this[n];
          return (!l || !l.area) && (l = o.Store(n, r, this._ns), this[n] || (this[n] = l)), l;
        }, "area"),
        namespace: /* @__PURE__ */ a(function(n, r, l) {
          if (l = l || this._delim || o.nsdelim, !n)
            return this._ns ? this._ns.substring(0, this._ns.length - l.length) : "";
          var u = n, c = this[u];
          if ((!c || !c.namespace) && (c = o.Store(this._id, this._area, this._ns + u + l), c._delim = l, this[u] || (this[u] = c), !r))
            for (var p in o.areas)
              c.area(p, o.areas[p]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ a(function(n) {
          return n ? (this._real = this._area, this._area = o.storage("fake")) : n === !1 && (this._area = this._real || this._area), this._area.
          name === "fake";
        }, "isFake"),
        toString: /* @__PURE__ */ a(function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        }, "toString"),
        // storage functions
        has: /* @__PURE__ */ a(function(n) {
          return this._area.has ? this._area.has(this._in(n)) : this._in(n) in this._area;
        }, "has"),
        size: /* @__PURE__ */ a(function() {
          return this.keys().length;
        }, "size"),
        each: /* @__PURE__ */ a(function(n, r) {
          for (var l = 0, u = o.length(this._area); l < u; l++) {
            var c = this._out(o.key(this._area, l));
            if (c !== void 0 && n.call(this, c, this.get(c), r) === !1)
              break;
            u > o.length(this._area) && (u--, l--);
          }
          return r || this;
        }, "each"),
        keys: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u.push(r);
          }, n || []);
        }, "keys"),
        get: /* @__PURE__ */ a(function(n, r) {
          var l = o.get(this._area, this._in(n)), u;
          return typeof r == "function" && (u = r, r = null), l !== null ? o.parse(l, u) : r ?? l;
        }, "get"),
        getAll: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u[r] = l;
          }, n || {});
        }, "getAll"),
        transact: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n, l), c = r(u);
          return this.set(n, c === void 0 ? u : c), this;
        }, "transact"),
        set: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n), c;
          return u != null && l === !1 ? r : (typeof l == "function" && (c = l, l = void 0), o.set(this._area, this._in(n), o.stringify(r, c),
          l) || u);
        }, "set"),
        setAll: /* @__PURE__ */ a(function(n, r) {
          var l, u;
          for (var c in n)
            u = n[c], this.set(c, u, r) !== u && (l = !0);
          return l;
        }, "setAll"),
        add: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n);
          if (u instanceof Array)
            r = u.concat(r);
          else if (u !== null) {
            var c = typeof u;
            if (c === typeof r && c === "object") {
              for (var p in r)
                u[p] = r[p];
              r = u;
            } else
              r = u + r;
          }
          return o.set(this._area, this._in(n), o.stringify(r, l)), r;
        }, "add"),
        remove: /* @__PURE__ */ a(function(n, r) {
          var l = this.get(n, r);
          return o.remove(this._area, this._in(n)), l;
        }, "remove"),
        clear: /* @__PURE__ */ a(function() {
          return this._ns ? this.each(function(n) {
            o.remove(this._area, this._in(n));
          }, 1) : o.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ a(function() {
          var n = this._area;
          for (var r in o.areas)
            o.areas.hasOwnProperty(r) && (this._area = o.areas[r], this.clear());
          return this._area = n, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ a(function(n) {
          return typeof n != "string" && (n = o.stringify(n)), this._ns ? this._ns + n : n;
        }, "_in"),
        _out: /* @__PURE__ */ a(function(n) {
          return this._ns ? n && n.indexOf(this._ns) === 0 ? n.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            n
          );
        }, "_out")
      },
      // end _.storeAPI
      storage: /* @__PURE__ */ a(function(n) {
        return o.inherit(o.storageAPI, { items: {}, name: n });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ a(function(n) {
          return this.items.hasOwnProperty(n);
        }, "has"),
        key: /* @__PURE__ */ a(function(n) {
          var r = 0;
          for (var l in this.items)
            if (this.has(l) && n === r++)
              return l;
        }, "key"),
        setItem: /* @__PURE__ */ a(function(n, r) {
          this.has(n) || this.length++, this.items[n] = r;
        }, "setItem"),
        removeItem: /* @__PURE__ */ a(function(n) {
          this.has(n) && (delete this.items[n], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ a(function(n) {
          return this.has(n) ? this.items[n] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ a(function() {
          for (var n in this.items)
            this.removeItem(n);
        }, "clear")
      }
      // end _.storageAPI
    }, i = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      o.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    i.local = i, i._ = o, i.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), i.area("page", o.storage("page")), typeof t == "function" && t.amd !== void 0 ? t("store2", [], function() {
      return i;
    }) : typeof $r < "u" && $r.exports ? $r.exports = i : (e.store && (o.conflict = e.store), e.store = i);
  })(Kr, Kr && Kr.define);
});

// global-externals:@storybook/core/channels
var Db = __STORYBOOK_CHANNELS__, { Channel: Mb, PostMessageTransport: Lb, WebsocketTransport: Nb, createBrowserChannel: Yi } = __STORYBOOK_CHANNELS__;

// ../node_modules/@storybook/global/dist/index.mjs
var ne = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// global-externals:@storybook/core/core-events
var Hb = __STORYBOOK_CORE_EVENTS__, { ARGTYPES_INFO_REQUEST: Qi, ARGTYPES_INFO_RESPONSE: Xi, CHANNEL_CREATED: Zi, CHANNEL_WS_DISCONNECT: zb,
CONFIG_ERROR: Rb, CREATE_NEW_STORYFILE_REQUEST: Ji, CREATE_NEW_STORYFILE_RESPONSE: es, CURRENT_STORY_WAS_SET: jb, DOCS_PREPARED: Wb, DOCS_RENDERED: Vb,
FILE_COMPONENT_SEARCH_REQUEST: ts, FILE_COMPONENT_SEARCH_RESPONSE: _o, FORCE_REMOUNT: Yr, FORCE_RE_RENDER: Kb, GLOBALS_UPDATED: $b, NAVIGATE_URL: Ub,
PLAY_FUNCTION_THREW_EXCEPTION: qb, PRELOAD_ENTRIES: bt, PREVIEW_BUILDER_PROGRESS: os, PREVIEW_KEYDOWN: Gb, REGISTER_SUBSCRIPTION: Yb, REQUEST_WHATS_NEW_DATA: Qb,
RESET_STORY_ARGS: Xb, RESULT_WHATS_NEW_DATA: Zb, SAVE_STORY_REQUEST: rs, SAVE_STORY_RESPONSE: ns, SELECT_STORY: Jb, SET_CONFIG: e0, SET_CURRENT_STORY: is,
SET_FILTER: t0, SET_GLOBALS: o0, SET_INDEX: r0, SET_STORIES: n0, SET_WHATS_NEW_CACHE: i0, SHARED_STATE_CHANGED: s0, SHARED_STATE_SET: a0, STORIES_COLLAPSE_ALL: ro,
STORIES_EXPAND_ALL: Qr, STORY_ARGS_UPDATED: l0, STORY_CHANGED: u0, STORY_ERRORED: c0, STORY_INDEX_INVALIDATED: p0, STORY_MISSING: d0, STORY_PREPARED: f0,
STORY_RENDERED: m0, STORY_RENDER_PHASE_CHANGED: h0, STORY_SPECIFIED: g0, STORY_THREW_EXCEPTION: y0, STORY_UNCHANGED: b0, TELEMETRY_ERROR: v0,
TOGGLE_WHATS_NEW_NOTIFICATIONS: x0, UNHANDLED_ERRORS_WHILE_PLAYING: I0, UPDATE_GLOBALS: S0, UPDATE_QUERY_PARAMS: w0, UPDATE_STORY_ARGS: C0 } = __STORYBOOK_CORE_EVENTS__;

// global-externals:@storybook/core/manager-api
var E0 = __STORYBOOK_API__, { ActiveTabs: T0, Consumer: fe, ManagerContext: k0, Provider: ss, RequestResponseError: O0, addons: Ue, combineParameters: P0,
controlOrMetaKey: A0, controlOrMetaSymbol: D0, eventMatchesShortcut: M0, eventToShortcut: as, experimental_requestResponse: Eo, isMacLike: L0,
isShortcutTaken: N0, keyToSymbol: F0, merge: To, mockChannel: B0, optionOrAltSymbol: H0, shortcutMatchesShortcut: ls, shortcutToHumanString: qe,
types: ge, useAddonState: z0, useArgTypes: R0, useArgs: j0, useChannel: W0, useGlobalTypes: V0, useGlobals: K0, useParameter: $0, useSharedState: U0,
useStoryPrepared: q0, useStorybookApi: se, useStorybookState: ze } = __STORYBOOK_API__;

// global-externals:react
var s = __REACT__, { Children: Y0, Component: Le, Fragment: Ce, Profiler: Q0, PureComponent: X0, StrictMode: Z0, Suspense: J0, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ev,
cloneElement: us, createContext: Bt, createElement: tv, createFactory: ov, createRef: rv, forwardRef: cs, isValidElement: nv, lazy: iv, memo: no,
startTransition: sv, unstable_act: av, useCallback: A, useContext: ko, useDebugValue: lv, useDeferredValue: ps, useEffect: V, useId: uv, useImperativeHandle: cv,
useInsertionEffect: pv, useLayoutEffect: Ht, useMemo: K, useReducer: zt, useRef: Q, useState: X, useSyncExternalStore: dv, useTransition: ds,
version: fv } = __REACT__;

// global-externals:react-dom/client
var mv = __REACT_DOM_CLIENT__, { createRoot: fs, hydrateRoot: hv } = __REACT_DOM_CLIENT__;

// global-externals:@storybook/core/router
var yv = __STORYBOOK_ROUTER__, { BaseLocationProvider: bv, DEEPLY_EQUAL: vv, Link: Oo, Location: Po, LocationProvider: ms, Match: hs, Route: io,
buildArgsParam: xv, deepDiff: Iv, getMatch: Sv, parsePath: wv, queryFromLocation: Cv, stringifyQuery: _v, useNavigate: gs } = __STORYBOOK_ROUTER__;

// global-externals:@storybook/core/theming
var Tv = __STORYBOOK_THEMING__, { CacheProvider: kv, ClassNames: Ov, Global: Rt, ThemeProvider: Xr, background: Pv, color: Av, convert: Dv, create: Mv,
createCache: Lv, createGlobal: ys, createReset: Nv, css: bs, darken: Fv, ensure: vs, ignoreSsrWarning: Bv, isPropValid: Hv, jsx: zv, keyframes: so,
lighten: Rv, styled: I, themes: jv, typography: Wv, useTheme: _e, withTheme: xs } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/manager-errors
var Kv = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__, { Category: $v, ProviderDoesNotExtendBaseProviderError: Is, UncaughtManagerError: Uv } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// ../node_modules/react-helmet-async/lib/index.module.js
var oe = Fe(Zr()), js = Fe(Ps()), rn = Fe(Ds()), Ws = Fe(Ls());
function ye() {
  return ye = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, ye.apply(this, arguments);
}
a(ye, "a");
function ln(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, nn(e, t);
}
a(ln, "s");
function nn(e, t) {
  return nn = Object.setPrototypeOf || function(o, i) {
    return o.__proto__ = i, o;
  }, nn(e, t);
}
a(nn, "c");
function Ns(e, t) {
  if (e == null) return {};
  var o, i, n = {}, r = Object.keys(e);
  for (i = 0; i < r.length; i++) t.indexOf(o = r[i]) >= 0 || (n[o] = e[o]);
  return n;
}
a(Ns, "u");
var Y = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "\
style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, Sd = { rel: ["amphtml", "canonical", "alternate"] }, wd = { type: ["applicatio\
n/ld+json"] }, Cd = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "\
og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
Fs = Object.keys(Y).map(function(e) {
  return Y[e];
}), Lo = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "\
http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, _d = Object.keys(Lo).reduce(function(e, t) {
  return e[Lo[t]] = t, e;
}, {}), Wt = /* @__PURE__ */ a(function(e, t) {
  for (var o = e.length - 1; o >= 0; o -= 1) {
    var i = e[o];
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  }
  return null;
}, "T"), Ed = /* @__PURE__ */ a(function(e) {
  var t = Wt(e, Y.TITLE), o = Wt(e, "titleTemplate");
  if (Array.isArray(t) && (t = t.join("")), o && t) return o.replace(/%s/g, function() {
    return t;
  });
  var i = Wt(e, "defaultTitle");
  return t || i || void 0;
}, "g"), Td = /* @__PURE__ */ a(function(e) {
  return Wt(e, "onChangeClientState") || function() {
  };
}, "b"), Jr = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[e] !== void 0;
  }).map(function(o) {
    return o[e];
  }).reduce(function(o, i) {
    return ye({}, o, i);
  }, {});
}, "v"), kd = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[Y.BASE] !== void 0;
  }).map(function(o) {
    return o[Y.BASE];
  }).reverse().reduce(function(o, i) {
    if (!o.length) for (var n = Object.keys(i), r = 0; r < n.length; r += 1) {
      var l = n[r].toLowerCase();
      if (e.indexOf(l) !== -1 && i[l]) return o.concat(i);
    }
    return o;
  }, []);
}, "A"), ao = /* @__PURE__ */ a(function(e, t, o) {
  var i = {};
  return o.filter(function(n) {
    return !!Array.isArray(n[e]) || (n[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' shou\
ld be of type "Array". Instead found type "' + typeof n[e] + '"'), !1);
  }).map(function(n) {
    return n[e];
  }).reverse().reduce(function(n, r) {
    var l = {};
    r.filter(function(b) {
      for (var f, y = Object.keys(b), m = 0; m < y.length; m += 1) {
        var g = y[m], S = g.toLowerCase();
        t.indexOf(S) === -1 || f === "rel" && b[f].toLowerCase() === "canonical" || S === "rel" && b[S].toLowerCase() === "stylesheet" || (f =
        S), t.indexOf(g) === -1 || g !== "innerHTML" && g !== "cssText" && g !== "itemprop" || (f = g);
      }
      if (!f || !b[f]) return !1;
      var _ = b[f].toLowerCase();
      return i[f] || (i[f] = {}), l[f] || (l[f] = {}), !i[f][_] && (l[f][_] = !0, !0);
    }).reverse().forEach(function(b) {
      return n.push(b);
    });
    for (var u = Object.keys(l), c = 0; c < u.length; c += 1) {
      var p = u[c], d = ye({}, i[p], l[p]);
      i[p] = d;
    }
    return n;
  }, []).reverse();
}, "C"), Od = /* @__PURE__ */ a(function(e, t) {
  if (Array.isArray(e) && e.length) {
    for (var o = 0; o < e.length; o += 1) if (e[o][t]) return !0;
  }
  return !1;
}, "O"), Vs = /* @__PURE__ */ a(function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, "S"), en = /* @__PURE__ */ a(function(e, t) {
  return Array.isArray(e) ? e.reduce(function(o, i) {
    return function(n, r) {
      for (var l = Object.keys(n), u = 0; u < l.length; u += 1) if (r[l[u]] && r[l[u]].includes(n[l[u]])) return !0;
      return !1;
    }(i, t) ? o.priority.push(i) : o.default.push(i), o;
  }, { priority: [], default: [] }) : { default: e };
}, "E"), Bs = /* @__PURE__ */ a(function(e, t) {
  var o;
  return ye({}, e, ((o = {})[t] = void 0, o));
}, "I"), Pd = [Y.NOSCRIPT, Y.SCRIPT, Y.STYLE], tn = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
  /"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w"), Hs = /* @__PURE__ */ a(function(e) {
  return Object.keys(e).reduce(function(t, o) {
    var i = e[o] !== void 0 ? o + '="' + e[o] + '"' : "" + o;
    return t ? t + " " + i : i;
  }, "");
}, "x"), zs = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = {}), Object.keys(e).reduce(function(o, i) {
    return o[Lo[i] || i] = e[i], o;
  }, t);
}, "L"), Mo = /* @__PURE__ */ a(function(e, t) {
  return t.map(function(o, i) {
    var n, r = ((n = { key: i })["data-rh"] = !0, n);
    return Object.keys(o).forEach(function(l) {
      var u = Lo[l] || l;
      u === "innerHTML" || u === "cssText" ? r.dangerouslySetInnerHTML = { __html: o.innerHTML || o.cssText } : r[u] = o[l];
    }), s.createElement(e, r);
  });
}, "j"), Re = /* @__PURE__ */ a(function(e, t, o) {
  switch (e) {
    case Y.TITLE:
      return { toComponent: /* @__PURE__ */ a(function() {
        return n = t.titleAttributes, (r = { key: i = t.title })["data-rh"] = !0, l = zs(n, r), [s.createElement(Y.TITLE, l, i)];
        var i, n, r, l;
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r, l) {
          var u = Hs(r), c = Vs(n);
          return u ? "<" + i + ' data-rh="true" ' + u + ">" + tn(c, l) + "</" + i + ">" : "<" + i + ' data-rh="true">' + tn(c, l) + "</" + i +
          ">";
        }(e, t.title, t.titleAttributes, o);
      }, "toString") };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: /* @__PURE__ */ a(function() {
        return zs(t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Hs(t);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ a(function() {
        return Mo(e, t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r) {
          return n.reduce(function(l, u) {
            var c = Object.keys(u).filter(function(b) {
              return !(b === "innerHTML" || b === "cssText");
            }).reduce(function(b, f) {
              var y = u[f] === void 0 ? f : f + '="' + tn(u[f], r) + '"';
              return b ? b + " " + y : y;
            }, ""), p = u.innerHTML || u.cssText || "", d = Pd.indexOf(i) === -1;
            return l + "<" + i + ' data-rh="true" ' + c + (d ? "/>" : ">" + p + "</" + i + ">");
          }, "");
        }(e, t, o);
      }, "toString") };
  }
}, "M"), sn = /* @__PURE__ */ a(function(e) {
  var t = e.baseTag, o = e.bodyAttributes, i = e.encode, n = e.htmlAttributes, r = e.noscriptTags, l = e.styleTags, u = e.title, c = u === void 0 ?
  "" : u, p = e.titleAttributes, d = e.linkTags, b = e.metaTags, f = e.scriptTags, y = { toComponent: /* @__PURE__ */ a(function() {
  }, "toComponent"), toString: /* @__PURE__ */ a(function() {
    return "";
  }, "toString") };
  if (e.prioritizeSeoTags) {
    var m = function(g) {
      var S = g.linkTags, _ = g.scriptTags, h = g.encode, v = en(g.metaTags, Cd), x = en(S, Sd), w = en(_, wd);
      return { priorityMethods: { toComponent: /* @__PURE__ */ a(function() {
        return [].concat(Mo(Y.META, v.priority), Mo(Y.LINK, x.priority), Mo(Y.SCRIPT, w.priority));
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Re(Y.META, v.priority, h) + " " + Re(Y.LINK, x.priority, h) + " " + Re(Y.SCRIPT, w.priority, h);
      }, "toString") }, metaTags: v.default, linkTags: x.default, scriptTags: w.default };
    }(e);
    y = m.priorityMethods, d = m.linkTags, b = m.metaTags, f = m.scriptTags;
  }
  return { priority: y, base: Re(Y.BASE, t, i), bodyAttributes: Re("bodyAttributes", o, i), htmlAttributes: Re("htmlAttributes", n, i), link: Re(
  Y.LINK, d, i), meta: Re(Y.META, b, i), noscript: Re(Y.NOSCRIPT, r, i), script: Re(Y.SCRIPT, f, i), style: Re(Y.STYLE, l, i), title: Re(Y.TITLE,
  { title: c, titleAttributes: p }, i) };
}, "k"), Do = [], an = /* @__PURE__ */ a(function(e, t) {
  var o = this;
  t === void 0 && (t = typeof document < "u"), this.instances = [], this.value = { setHelmet: /* @__PURE__ */ a(function(i) {
    o.context.helmet = i;
  }, "setHelmet"), helmetInstances: { get: /* @__PURE__ */ a(function() {
    return o.canUseDOM ? Do : o.instances;
  }, "get"), add: /* @__PURE__ */ a(function(i) {
    (o.canUseDOM ? Do : o.instances).push(i);
  }, "add"), remove: /* @__PURE__ */ a(function(i) {
    var n = (o.canUseDOM ? Do : o.instances).indexOf(i);
    (o.canUseDOM ? Do : o.instances).splice(n, 1);
  }, "remove") } }, this.context = e, this.canUseDOM = t, t || (e.helmet = sn({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0,
  htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N"), Ks = s.createContext({}), Ad = oe.default.shape({ setHelmet: oe.default.func, helmetInstances: oe.default.shape({ get: oe.default.func,
add: oe.default.func, remove: oe.default.func }) }), Dd = typeof document < "u", pt = /* @__PURE__ */ function(e) {
  function t(o) {
    var i;
    return (i = e.call(this, o) || this).helmetData = new an(i.props.context, t.canUseDOM), i;
  }
  return a(t, "r"), ln(t, e), t.prototype.render = function() {
    return s.createElement(Ks.Provider, { value: this.helmetData.value }, this.props.children);
  }, t;
}(Le);
pt.canUseDOM = Dd, pt.propTypes = { context: oe.default.shape({ helmet: oe.default.shape() }), children: oe.default.node.isRequired }, pt.defaultProps =
{ context: {} }, pt.displayName = "HelmetProvider";
var jt = /* @__PURE__ */ a(function(e, t) {
  var o, i = document.head || document.querySelector(Y.HEAD), n = i.querySelectorAll(e + "[data-rh]"), r = [].slice.call(n), l = [];
  return t && t.length && t.forEach(function(u) {
    var c = document.createElement(e);
    for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && (p === "innerHTML" ? c.innerHTML = u.innerHTML : p === "cssText" ? c.styleSheet ?
    c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText)) : c.setAttribute(p, u[p] === void 0 ? "" : u[p]));
    c.setAttribute("data-rh", "true"), r.some(function(d, b) {
      return o = b, c.isEqualNode(d);
    }) ? r.splice(o, 1) : l.push(c);
  }), r.forEach(function(u) {
    return u.parentNode.removeChild(u);
  }), l.forEach(function(u) {
    return i.appendChild(u);
  }), { oldTags: r, newTags: l };
}, "Y"), on = /* @__PURE__ */ a(function(e, t) {
  var o = document.getElementsByTagName(e)[0];
  if (o) {
    for (var i = o.getAttribute("data-rh"), n = i ? i.split(",") : [], r = [].concat(n), l = Object.keys(t), u = 0; u < l.length; u += 1) {
      var c = l[u], p = t[c] || "";
      o.getAttribute(c) !== p && o.setAttribute(c, p), n.indexOf(c) === -1 && n.push(c);
      var d = r.indexOf(c);
      d !== -1 && r.splice(d, 1);
    }
    for (var b = r.length - 1; b >= 0; b -= 1) o.removeAttribute(r[b]);
    n.length === r.length ? o.removeAttribute("data-rh") : o.getAttribute("data-rh") !== l.join(",") && o.setAttribute("data-rh", l.join(","));
  }
}, "B"), Rs = /* @__PURE__ */ a(function(e, t) {
  var o = e.baseTag, i = e.htmlAttributes, n = e.linkTags, r = e.metaTags, l = e.noscriptTags, u = e.onChangeClientState, c = e.scriptTags, p = e.
  styleTags, d = e.title, b = e.titleAttributes;
  on(Y.BODY, e.bodyAttributes), on(Y.HTML, i), function(g, S) {
    g !== void 0 && document.title !== g && (document.title = Vs(g)), on(Y.TITLE, S);
  }(d, b);
  var f = { baseTag: jt(Y.BASE, o), linkTags: jt(Y.LINK, n), metaTags: jt(Y.META, r), noscriptTags: jt(Y.NOSCRIPT, l), scriptTags: jt(Y.SCRIPT,
  c), styleTags: jt(Y.STYLE, p) }, y = {}, m = {};
  Object.keys(f).forEach(function(g) {
    var S = f[g], _ = S.newTags, h = S.oldTags;
    _.length && (y[g] = _), h.length && (m[g] = f[g].oldTags);
  }), t && t(), u(e, y, m);
}, "K"), lo = null, No = /* @__PURE__ */ function(e) {
  function t() {
    for (var i, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
    return (i = e.call.apply(e, [this].concat(r)) || this).rendered = !1, i;
  }
  a(t, "e"), ln(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Ws.default)(i, this.props);
  }, o.componentDidUpdate = function() {
    this.emitChange();
  }, o.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, o.emitChange = function() {
    var i, n, r = this.props.context, l = r.setHelmet, u = null, c = (i = r.helmetInstances.get().map(function(p) {
      var d = ye({}, p.props);
      return delete d.context, d;
    }), { baseTag: kd(["href"], i), bodyAttributes: Jr("bodyAttributes", i), defer: Wt(i, "defer"), encode: Wt(i, "encodeSpecialCharacters"),
    htmlAttributes: Jr("htmlAttributes", i), linkTags: ao(Y.LINK, ["rel", "href"], i), metaTags: ao(Y.META, ["name", "charset", "http-equiv",
    "property", "itemprop"], i), noscriptTags: ao(Y.NOSCRIPT, ["innerHTML"], i), onChangeClientState: Td(i), scriptTags: ao(Y.SCRIPT, ["src",
    "innerHTML"], i), styleTags: ao(Y.STYLE, ["cssText"], i), title: Ed(i), titleAttributes: Jr("titleAttributes", i), prioritizeSeoTags: Od(
    i, "prioritizeSeoTags") });
    pt.canUseDOM ? (n = c, lo && cancelAnimationFrame(lo), n.defer ? lo = requestAnimationFrame(function() {
      Rs(n, function() {
        lo = null;
      });
    }) : (Rs(n), lo = null)) : sn && (u = sn(c)), l(u);
  }, o.init = function() {
    this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange());
  }, o.render = function() {
    return this.init(), null;
  }, t;
}(Le);
No.propTypes = { context: Ad.isRequired }, No.displayName = "HelmetDispatcher";
var Md = ["children"], Ld = ["children"], uo = /* @__PURE__ */ function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  a(t, "r"), ln(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, js.default)(Bs(this.props, "helmetData"), Bs(i, "helmetData"));
  }, o.mapNestedChildrenToProps = function(i, n) {
    if (!n) return null;
    switch (i.type) {
      case Y.SCRIPT:
      case Y.NOSCRIPT:
        return { innerHTML: n };
      case Y.STYLE:
        return { cssText: n };
      default:
        throw new Error("<" + i.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o.flattenArrayTypeChildren = function(i) {
    var n, r = i.child, l = i.arrayTypeChildren;
    return ye({}, l, ((n = {})[r.type] = [].concat(l[r.type] || [], [ye({}, i.newChildProps, this.mapNestedChildrenToProps(r, i.nestedChildren))]),
    n));
  }, o.mapObjectTypeChildren = function(i) {
    var n, r, l = i.child, u = i.newProps, c = i.newChildProps, p = i.nestedChildren;
    switch (l.type) {
      case Y.TITLE:
        return ye({}, u, ((n = {})[l.type] = p, n.titleAttributes = ye({}, c), n));
      case Y.BODY:
        return ye({}, u, { bodyAttributes: ye({}, c) });
      case Y.HTML:
        return ye({}, u, { htmlAttributes: ye({}, c) });
      default:
        return ye({}, u, ((r = {})[l.type] = ye({}, c), r));
    }
  }, o.mapArrayTypeChildrenToProps = function(i, n) {
    var r = ye({}, n);
    return Object.keys(i).forEach(function(l) {
      var u;
      r = ye({}, r, ((u = {})[l] = i[l], u));
    }), r;
  }, o.warnOnInvalidChildren = function(i, n) {
    return (0, rn.default)(Fs.some(function(r) {
      return i.type === r;
    }), typeof i.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to o\
ur API for more information." : "Only elements types " + Fs.join(", ") + " are allowed. Helmet does not support rendering <" + i.type + "> e\
lements. Refer to our API for more information."), (0, rn.default)(!n || typeof n == "string" || Array.isArray(n) && !n.some(function(r) {
      return typeof r != "string";
    }), "Helmet expects a string as a child of <" + i.type + ">. Did you forget to wrap your children in braces? ( <" + i.type + ">{``}</" +
    i.type + "> ) Refer to our API for more information."), !0;
  }, o.mapChildrenToProps = function(i, n) {
    var r = this, l = {};
    return s.Children.forEach(i, function(u) {
      if (u && u.props) {
        var c = u.props, p = c.children, d = Ns(c, Md), b = Object.keys(d).reduce(function(y, m) {
          return y[_d[m] || m] = d[m], y;
        }, {}), f = u.type;
        switch (typeof f == "symbol" ? f = f.toString() : r.warnOnInvalidChildren(u, p), f) {
          case Y.FRAGMENT:
            n = r.mapChildrenToProps(p, n);
            break;
          case Y.LINK:
          case Y.META:
          case Y.NOSCRIPT:
          case Y.SCRIPT:
          case Y.STYLE:
            l = r.flattenArrayTypeChildren({ child: u, arrayTypeChildren: l, newChildProps: b, nestedChildren: p });
            break;
          default:
            n = r.mapObjectTypeChildren({ child: u, newProps: n, newChildProps: b, nestedChildren: p });
        }
      }
    }), this.mapArrayTypeChildrenToProps(l, n);
  }, o.render = function() {
    var i = this.props, n = i.children, r = Ns(i, Ld), l = ye({}, r), u = r.helmetData;
    return n && (l = this.mapChildrenToProps(n, l)), !u || u instanceof an || (u = new an(u.context, u.instances)), u ? /* @__PURE__ */ s.createElement(
    No, ye({}, l, { context: u.value, helmetData: void 0 })) : /* @__PURE__ */ s.createElement(Ks.Consumer, null, function(c) {
      return s.createElement(No, ye({}, l, { context: c }));
    });
  }, t;
}(Le);
uo.propTypes = { base: oe.default.object, bodyAttributes: oe.default.object, children: oe.default.oneOfType([oe.default.arrayOf(oe.default.node),
oe.default.node]), defaultTitle: oe.default.string, defer: oe.default.bool, encodeSpecialCharacters: oe.default.bool, htmlAttributes: oe.default.
object, link: oe.default.arrayOf(oe.default.object), meta: oe.default.arrayOf(oe.default.object), noscript: oe.default.arrayOf(oe.default.object),
onChangeClientState: oe.default.func, script: oe.default.arrayOf(oe.default.object), style: oe.default.arrayOf(oe.default.object), title: oe.default.
string, titleAttributes: oe.default.object, titleTemplate: oe.default.string, prioritizeSeoTags: oe.default.bool, helmetData: oe.default.object },
uo.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }, uo.displayName = "Helmet";

// src/manager/constants.ts
var rt = "@media (min-width: 600px)";

// global-externals:@storybook/core/components
var cx = __STORYBOOK_COMPONENTS__, { A: px, ActionBar: dx, AddonPanel: fx, Badge: Vt, Bar: mx, Blockquote: hx, Button: Ie, ClipboardCode: gx,
Code: yx, DL: bx, Div: vx, DocumentWrapper: xx, EmptyTabContent: $s, ErrorFormatter: Us, FlexBar: Ix, Form: Fo, H1: Sx, H2: wx, H3: Cx, H4: _x,
H5: Ex, H6: Tx, HR: kx, IconButton: J, IconButtonSkeleton: Ox, Icons: qs, Img: Px, LI: Ax, Link: Pe, ListItem: Dx, Loader: Bo, Modal: vt, OL: Mx,
P: Lx, Placeholder: Nx, Pre: Fx, ResetWrapper: Bx, ScrollArea: Ho, Separator: Kt, Spaced: nt, Span: Hx, StorybookIcon: zx, StorybookLogo: zo,
Symbols: Rx, SyntaxHighlighter: jx, TT: Wx, TabBar: Ro, TabButton: jo, TabWrapper: Vx, Table: Kx, Tabs: Gs, TabsState: $x, TooltipLinkList: it,
TooltipMessage: Ux, TooltipNote: Wo, UL: qx, WithTooltip: Ae, WithTooltipPure: Gx, Zoom: Ys, codeCommon: Yx, components: Qx, createCopyToClipboardFunction: Xx,
getStoryHref: $t, icons: Zx, interleaveSeparators: Jx, nameSpaceClassNames: eI, resetComponents: tI, withReset: oI } = __STORYBOOK_COMPONENTS__;

// global-externals:@storybook/icons
var nI = __STORYBOOK_ICONS__, { AccessibilityAltIcon: iI, AccessibilityIcon: sI, AddIcon: aI, AdminIcon: lI, AlertAltIcon: uI, AlertIcon: Vo,
AlignLeftIcon: cI, AlignRightIcon: pI, AppleIcon: dI, ArrowBottomLeftIcon: fI, ArrowBottomRightIcon: mI, ArrowDownIcon: hI, ArrowLeftIcon: Qs,
ArrowRightIcon: gI, ArrowSolidDownIcon: yI, ArrowSolidLeftIcon: bI, ArrowSolidRightIcon: vI, ArrowSolidUpIcon: xI, ArrowTopLeftIcon: II, ArrowTopRightIcon: SI,
ArrowUpIcon: wI, AzureDevOpsIcon: CI, BackIcon: _I, BasketIcon: EI, BatchAcceptIcon: TI, BatchDenyIcon: kI, BeakerIcon: OI, BellIcon: PI, BitbucketIcon: AI,
BoldIcon: DI, BookIcon: MI, BookmarkHollowIcon: LI, BookmarkIcon: NI, BottomBarIcon: Ko, BottomBarToggleIcon: Xs, BoxIcon: FI, BranchIcon: BI,
BrowserIcon: HI, ButtonIcon: zI, CPUIcon: RI, CalendarIcon: jI, CameraIcon: WI, CategoryIcon: VI, CertificateIcon: KI, ChangedIcon: $I, ChatIcon: UI,
CheckIcon: je, ChevronDownIcon: Ut, ChevronLeftIcon: qI, ChevronRightIcon: Zs, ChevronSmallDownIcon: GI, ChevronSmallLeftIcon: YI, ChevronSmallRightIcon: QI,
ChevronSmallUpIcon: XI, ChevronUpIcon: ZI, ChromaticIcon: JI, ChromeIcon: eS, CircleHollowIcon: tS, CircleIcon: Js, ClearIcon: oS, CloseAltIcon: $o,
CloseIcon: Ge, CloudHollowIcon: rS, CloudIcon: nS, CogIcon: un, CollapseIcon: ea, CommandIcon: iS, CommentAddIcon: sS, CommentIcon: aS, CommentsIcon: lS,
CommitIcon: uS, CompassIcon: cS, ComponentDrivenIcon: pS, ComponentIcon: cn, ContrastIcon: dS, ControlsIcon: fS, CopyIcon: mS, CreditIcon: hS,
CrossIcon: gS, DashboardIcon: yS, DatabaseIcon: bS, DeleteIcon: vS, DiamondIcon: xS, DirectionIcon: IS, DiscordIcon: SS, DocChartIcon: wS, DocListIcon: CS,
DocumentIcon: qt, DownloadIcon: _S, DragIcon: ES, EditIcon: TS, EllipsisIcon: kS, EmailIcon: OS, ExpandAltIcon: ta, ExpandIcon: oa, EyeCloseIcon: ra,
EyeIcon: na, FaceHappyIcon: PS, FaceNeutralIcon: AS, FaceSadIcon: DS, FacebookIcon: MS, FailedIcon: LS, FastForwardIcon: NS, FigmaIcon: FS, FilterIcon: ia,
FlagIcon: BS, FolderIcon: HS, FormIcon: zS, GDriveIcon: RS, GithubIcon: Uo, GitlabIcon: jS, GlobeIcon: pn, GoogleIcon: WS, GraphBarIcon: VS,
GraphLineIcon: KS, GraphqlIcon: $S, GridAltIcon: US, GridIcon: qS, GrowIcon: GS, HeartHollowIcon: YS, HeartIcon: sa, HomeIcon: QS, HourglassIcon: XS,
InfoIcon: aa, ItalicIcon: ZS, JumpToIcon: JS, KeyIcon: ew, LightningIcon: la, LightningOffIcon: tw, LinkBrokenIcon: ow, LinkIcon: ua, LinkedinIcon: rw,
LinuxIcon: nw, ListOrderedIcon: iw, ListUnorderedIcon: sw, LocationIcon: aw, LockIcon: qo, MarkdownIcon: lw, MarkupIcon: ca, MediumIcon: uw,
MemoryIcon: cw, MenuIcon: Go, MergeIcon: pw, MirrorIcon: dw, MobileIcon: fw, MoonIcon: mw, NutIcon: hw, OutboxIcon: gw, OutlineIcon: yw, PaintBrushIcon: bw,
PaperClipIcon: vw, ParagraphIcon: xw, PassedIcon: Iw, PhoneIcon: Sw, PhotoDragIcon: ww, PhotoIcon: Cw, PinAltIcon: _w, PinIcon: Ew, PlayBackIcon: Tw,
PlayIcon: kw, PlayNextIcon: Ow, PlusIcon: pa, PointerDefaultIcon: Pw, PointerHandIcon: Aw, PowerIcon: Dw, PrintIcon: Mw, ProceedIcon: Lw, ProfileIcon: Nw,
PullRequestIcon: Fw, QuestionIcon: Bw, RSSIcon: Hw, RedirectIcon: zw, ReduxIcon: Rw, RefreshIcon: jw, ReplyIcon: Ww, RepoIcon: Vw, RequestChangeIcon: Kw,
RewindIcon: $w, RulerIcon: Uw, SearchIcon: Yo, ShareAltIcon: st, ShareIcon: qw, ShieldIcon: Gw, SideBySideIcon: Yw, SidebarAltIcon: Qo, SidebarAltToggleIcon: Qw,
SidebarIcon: Xw, SidebarToggleIcon: Zw, SpeakerIcon: Jw, StackedIcon: e1, StarHollowIcon: t1, StarIcon: o1, StatusFailIcon: dn, StatusPassIcon: da,
StatusWarnIcon: fn, StickerIcon: r1, StopAltIcon: n1, StopIcon: i1, StorybookIcon: fa, StructureIcon: s1, SubtractIcon: a1, SunIcon: l1, SupportIcon: u1,
SwitchAltIcon: c1, SyncIcon: dt, TabletIcon: p1, ThumbsUpIcon: d1, TimeIcon: ma, TimerIcon: f1, TransferIcon: m1, TrashIcon: ha, TwitterIcon: h1,
TypeIcon: g1, UbuntuIcon: y1, UndoIcon: b1, UnfoldIcon: v1, UnlockIcon: x1, UnpinIcon: I1, UploadIcon: S1, UserAddIcon: w1, UserAltIcon: C1,
UserIcon: _1, UsersIcon: E1, VSCodeIcon: T1, VerifiedIcon: k1, VideoIcon: O1, WandIcon: ga, WatchIcon: P1, WindowsIcon: A1, WrenchIcon: D1, XIcon: M1,
YoutubeIcon: L1, ZoomIcon: ya, ZoomOutIcon: ba, ZoomResetIcon: va, iconList: N1 } = __STORYBOOK_ICONS__;

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function $() {
  return $ = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, $.apply(null, arguments);
}
a($, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function xa(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(xa, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function ft(e, t) {
  return ft = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, ft(e, t);
}
a(ft, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Gt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ft(e, t);
}
a(Gt, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function Xo(e) {
  return Xo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Xo(e);
}
a(Xo, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function Ia(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
a(Ia, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function mn() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (mn = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(mn, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function Sa(e, t, o) {
  if (mn()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, t);
  var n = new (e.bind.apply(e, i))();
  return o && ft(n, o.prototype), n;
}
a(Sa, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function Zo(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Zo = /* @__PURE__ */ a(function(i) {
    if (i === null || !Ia(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(i)) return t.get(i);
      t.set(i, n);
    }
    function n() {
      return Sa(i, arguments, Xo(this).constructor);
    }
    return a(n, "Wrapper"), n.prototype = Object.create(i.prototype, {
      constructor: {
        value: n,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), ft(n, i);
  }, "_wrapNativeSuper"), Zo(e);
}
a(Zo, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var Qt = /* @__PURE__ */ function(e) {
  Gt(t, e);
  function t(o) {
    var i;
    if (1)
      i = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o +
      " for more information.") || this;
    else
      for (var n, r, l; l < n; l++)
        ;
    return xa(i);
  }
  return a(t, "PolishedError"), t;
}(/* @__PURE__ */ Zo(Error));
function hn(e) {
  return Math.round(e * 255);
}
a(hn, "colorToInt");
function Nd(e, t, o) {
  return hn(e) + "," + hn(t) + "," + hn(o);
}
a(Nd, "convertToInt");
function wa(e, t, o, i) {
  if (i === void 0 && (i = Nd), t === 0)
    return i(o, o, o);
  var n = (e % 360 + 360) % 360 / 60, r = (1 - Math.abs(2 * o - 1)) * t, l = r * (1 - Math.abs(n % 2 - 1)), u = 0, c = 0, p = 0;
  n >= 0 && n < 1 ? (u = r, c = l) : n >= 1 && n < 2 ? (u = l, c = r) : n >= 2 && n < 3 ? (c = r, p = l) : n >= 3 && n < 4 ? (c = l, p = r) :
  n >= 4 && n < 5 ? (u = l, p = r) : n >= 5 && n < 6 && (u = r, p = l);
  var d = o - r / 2, b = u + d, f = c + d, y = p + d;
  return i(b, f, y);
}
a(wa, "hslToRgb");
var Ca = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
function Fd(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Ca[t] ? "#" + Ca[t] : e;
}
a(Fd, "nameToHex");
var Bd = /^#[a-fA-F0-9]{6}$/, Hd = /^#[a-fA-F0-9]{8}$/, zd = /^#[a-fA-F0-9]{3}$/, Rd = /^#[a-fA-F0-9]{4}$/, gn = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
jd = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Wd = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
Vd = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Ta(e) {
  if (typeof e != "string")
    throw new Qt(3);
  var t = Fd(e);
  if (t.match(Bd))
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
  if (t.match(Hd)) {
    var o = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: o
    };
  }
  if (t.match(zd))
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
  if (t.match(Rd)) {
    var i = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: i
    };
  }
  var n = gn.exec(t);
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
      blue: parseInt("" + n[3], 10)
    };
  var r = jd.exec(t.substring(0, 50));
  if (r)
    return {
      red: parseInt("" + r[1], 10),
      green: parseInt("" + r[2], 10),
      blue: parseInt("" + r[3], 10),
      alpha: parseFloat("" + r[4]) > 1 ? parseFloat("" + r[4]) / 100 : parseFloat("" + r[4])
    };
  var l = Wd.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, p = parseInt("" + l[3], 10) / 100, d = "rgb(" + wa(u, c, p) + ")", b = gn.
    exec(d);
    if (!b)
      throw new Qt(4, t, d);
    return {
      red: parseInt("" + b[1], 10),
      green: parseInt("" + b[2], 10),
      blue: parseInt("" + b[3], 10)
    };
  }
  var f = Vd.exec(t.substring(0, 50));
  if (f) {
    var y = parseInt("" + f[1], 10), m = parseInt("" + f[2], 10) / 100, g = parseInt("" + f[3], 10) / 100, S = "rgb(" + wa(y, m, g) + ")", _ = gn.
    exec(S);
    if (!_)
      throw new Qt(4, t, S);
    return {
      red: parseInt("" + _[1], 10),
      green: parseInt("" + _[2], 10),
      blue: parseInt("" + _[3], 10),
      alpha: parseFloat("" + f[4]) > 1 ? parseFloat("" + f[4]) / 100 : parseFloat("" + f[4])
    };
  }
  throw new Qt(5);
}
a(Ta, "parseToRgb");
var Kd = /* @__PURE__ */ a(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue"), _a = Kd;
function Yt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a(Yt, "numberToHex");
function Ea(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return _a("#" + Yt(e) + Yt(t) + Yt(o));
  if (typeof e == "object" && t === void 0 && o === void 0)
    return _a("#" + Yt(e.red) + Yt(e.green) + Yt(e.blue));
  throw new Qt(6);
}
a(Ea, "rgb");
function yn(e, t, o, i) {
  if (typeof e == "string" && typeof t == "number") {
    var n = Ta(e);
    return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
      return i >= 1 ? Ea(e, t, o) : "rgba(" + e + "," + t + "," + o + "," + i + ")";
    if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
      return e.alpha >= 1 ? Ea(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Qt(7);
}
a(yn, "rgba");
function ka(e, t, o) {
  return /* @__PURE__ */ a(function() {
    var n = o.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : ka(e, t, n);
  }, "fn");
}
a(ka, "curried");
function $d(e) {
  return ka(e, e.length, []);
}
a($d, "curry");
function Ud(e, t, o) {
  return Math.max(e, Math.min(t, o));
}
a(Ud, "guard");
function qd(e, t) {
  if (t === "transparent") return t;
  var o = Ta(t), i = typeof o.alpha == "number" ? o.alpha : 1, n = $({}, o, {
    alpha: Ud(0, 1, +(i * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return yn(n);
}
a(qd, "transparentize");
var Gd = /* @__PURE__ */ $d(qd), he = Gd;

// src/manager/components/notifications/NotificationItem.tsx
var Yd = so({
  "0%": {
    opacity: 0,
    transform: "translateY(30px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
}), Qd = so({
  "0%": {
    width: "0%"
  },
  "100%": {
    width: "100%"
  }
}), Oa = I.div(
  ({ theme: e }) => ({
    position: "relative",
    display: "flex",
    padding: 15,
    width: 280,
    borderRadius: 4,
    alignItems: "center",
    animation: `${Yd} 500ms`,
    background: e.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
    boxShadow: "0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)",
    color: e.color.inverseText,
    textDecoration: "none",
    overflow: "hidden"
  }),
  ({ duration: e, theme: t }) => e && {
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      background: t.color.secondary,
      animation: `${Qd} ${e}ms linear forwards reverse`
    }
  }
), Pa = I(Oa)({
  cursor: "pointer",
  border: "none",
  outline: "none",
  textAlign: "left",
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0\
.1)"
  }
}), Xd = Pa.withComponent("div"), Zd = Pa.withComponent(Oo), Jd = I.div(() => ({
  display: "flex",
  marginRight: 10,
  alignItems: "center",
  svg: {
    width: 16,
    height: 16
  }
})), ef = I.div(({ theme: e }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: e.base === "dark" ? e.color.mediumdark : e.color.mediumlight
})), tf = I.div(({ theme: e, hasIcon: t }) => ({
  height: "100%",
  width: t ? 205 : 230,
  alignItems: "center",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: e.typography.size.s1,
  lineHeight: "16px",
  fontWeight: e.typography.weight.bold
})), of = I.div(({ theme: e }) => ({
  color: he(0.25, e.color.inverseText),
  fontSize: e.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2
})), bn = /* @__PURE__ */ a(({
  icon: e,
  content: { headline: t, subHeadline: o }
}) => {
  let i = _e(), n = i.base === "dark" ? i.color.mediumdark : i.color.mediumlight;
  return /* @__PURE__ */ s.createElement(s.Fragment, null, !e || /* @__PURE__ */ s.createElement(Jd, null, s.isValidElement(e) ? e : typeof e ==
  "object" && "name" in e && /* @__PURE__ */ s.createElement(qs, { icon: e.name, color: e.color || n })), /* @__PURE__ */ s.createElement(ef,
  null, /* @__PURE__ */ s.createElement(tf, { title: t, hasIcon: !!e }, t), o && /* @__PURE__ */ s.createElement(of, null, o)));
}, "ItemContent"), rf = I(J)(({ theme: e }) => ({
  alignSelf: "center",
  marginTop: 0,
  color: e.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
})), vn = /* @__PURE__ */ a(({ onDismiss: e }) => /* @__PURE__ */ s.createElement(
  rf,
  {
    title: "Dismiss notification",
    onClick: (t) => {
      t.preventDefault(), t.stopPropagation(), e();
    }
  },
  /* @__PURE__ */ s.createElement($o, { size: 12 })
), "DismissNotificationItem"), CC = I.div({
  height: 48
}), nf = /* @__PURE__ */ a(({
  notification: { content: e, duration: t, link: o, onClear: i, onClick: n, id: r, icon: l },
  onDismissNotification: u
}) => {
  let c = A(() => {
    u(r), i && i({ dismissed: !1, timeout: !0 });
  }, [u, i]), p = Q(null);
  V(() => {
    if (t)
      return p.current = setTimeout(c, t), () => clearTimeout(p.current);
  }, [t, c]);
  let d = A(() => {
    clearTimeout(p.current), u(r), i && i({ dismissed: !0, timeout: !1 });
  }, [u, i]);
  return o ? /* @__PURE__ */ s.createElement(Zd, { to: o, duration: t }, /* @__PURE__ */ s.createElement(bn, { icon: l, content: e }), /* @__PURE__ */ s.
  createElement(vn, { onDismiss: d })) : n ? /* @__PURE__ */ s.createElement(Xd, { duration: t, onClick: () => n({ onDismiss: d }) }, /* @__PURE__ */ s.
  createElement(bn, { icon: l, content: e }), /* @__PURE__ */ s.createElement(vn, { onDismiss: d })) : /* @__PURE__ */ s.createElement(Oa, {
  duration: t }, /* @__PURE__ */ s.createElement(bn, { icon: l, content: e }), /* @__PURE__ */ s.createElement(vn, { onDismiss: d }));
}, "NotificationItem"), Aa = nf;

// src/manager/components/notifications/NotificationList.tsx
var Da = /* @__PURE__ */ a(({
  notifications: e,
  clearNotification: t
}) => /* @__PURE__ */ s.createElement(sf, null, e && e.map((o) => /* @__PURE__ */ s.createElement(
  Aa,
  {
    key: o.id,
    onDismissNotification: (i) => t(i),
    notification: o
  }
))), "NotificationList"), sf = I.div({
  zIndex: 200,
  position: "fixed",
  left: 20,
  bottom: 60,
  [rt]: {
    bottom: 20
  },
  "> * + *": {
    marginTop: 10
  },
  "&:empty": {
    display: "none"
  }
});

// src/manager/container/Notifications.tsx
var af = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  notifications: e.notifications,
  clearNotification: t.clearNotification
}), "mapper"), Ma = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(fe, { filter: af }, (t) => /* @__PURE__ */ s.createElement(Da, {
...e, ...t })), "Notifications");

// src/manager/components/hooks/useMedia.tsx
function La(e) {
  let t = /* @__PURE__ */ a((r) => typeof window < "u" ? window.matchMedia(r).matches : !1, "getMatches"), [o, i] = X(t(e));
  function n() {
    i(t(e));
  }
  return a(n, "handleChange"), V(() => {
    let r = window.matchMedia(e);
    return n(), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, [e]), o;
}
a(La, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var Na = Bt({
  isMobileMenuOpen: !1,
  setMobileMenuOpen: /* @__PURE__ */ a(() => {
  }, "setMobileMenuOpen"),
  isMobileAboutOpen: !1,
  setMobileAboutOpen: /* @__PURE__ */ a(() => {
  }, "setMobileAboutOpen"),
  isMobilePanelOpen: !1,
  setMobilePanelOpen: /* @__PURE__ */ a(() => {
  }, "setMobilePanelOpen"),
  isDesktop: !1,
  isMobile: !1
}), Fa = /* @__PURE__ */ a(({ children: e }) => {
  let [t, o] = X(!1), [i, n] = X(!1), [r, l] = X(!1), u = La(`(min-width: ${600}px)`), c = !u, p = K(
    () => ({
      isMobileMenuOpen: t,
      setMobileMenuOpen: o,
      isMobileAboutOpen: i,
      setMobileAboutOpen: n,
      isMobilePanelOpen: r,
      setMobilePanelOpen: l,
      isDesktop: u,
      isMobile: c
    }),
    [
      t,
      o,
      i,
      n,
      r,
      l,
      u,
      c
    ]
  );
  return /* @__PURE__ */ s.createElement(Na.Provider, { value: p }, e);
}, "LayoutProvider"), Se = /* @__PURE__ */ a(() => ko(Na), "useLayout");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var lf = I.div(({ theme: e }) => ({
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "42vh",
  zIndex: 11,
  overflow: "hidden"
})), Ba = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(lf, null, e), "MobileAddonsDrawer");

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function Ee(e, t) {
  if (e == null) return {};
  var o = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
    if (t.indexOf(i) >= 0) continue;
    o[i] = e[i];
  }
  return o;
}
a(Ee, "_objectWithoutPropertiesLoose");

// global-externals:react-dom
var co = __REACT_DOM__, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ZC, createPortal: JC, createRoot: e_, findDOMNode: t_, flushSync: po,
hydrate: o_, hydrateRoot: r_, render: n_, unmountComponentAtNode: i_, unstable_batchedUpdates: s_, unstable_renderSubtreeIntoContainer: a_, version: l_ } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var xn = {
  disabled: !1
};

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
var In = s.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var Ha = /* @__PURE__ */ a(function(t) {
  return t.scrollTop;
}, "forceReflow");

// ../node_modules/react-transition-group/esm/Transition.js
var fo = "unmounted", xt = "exited", It = "entering", Zt = "entered", Sn = "exiting", at = /* @__PURE__ */ function(e) {
  Gt(t, e);
  function t(i, n) {
    var r;
    r = e.call(this, i, n) || this;
    var l = n, u = l && !l.isMounting ? i.enter : i.appear, c;
    return r.appearStatus = null, i.in ? u ? (c = xt, r.appearStatus = It) : c = Zt : i.unmountOnExit || i.mountOnEnter ? c = fo : c = xt, r.
    state = {
      status: c
    }, r.nextCallback = null, r;
  }
  a(t, "Transition"), t.getDerivedStateFromProps = /* @__PURE__ */ a(function(n, r) {
    var l = n.in;
    return l && r.status === fo ? {
      status: xt
    } : null;
  }, "getDerivedStateFromProps");
  var o = t.prototype;
  return o.componentDidMount = /* @__PURE__ */ a(function() {
    this.updateStatus(!0, this.appearStatus);
  }, "componentDidMount"), o.componentDidUpdate = /* @__PURE__ */ a(function(n) {
    var r = null;
    if (n !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== It && l !== Zt && (r = It) : (l === It || l === Zt) && (r = Sn);
    }
    this.updateStatus(!1, r);
  }, "componentDidUpdate"), o.componentWillUnmount = /* @__PURE__ */ a(function() {
    this.cancelNextCallback();
  }, "componentWillUnmount"), o.getTimeouts = /* @__PURE__ */ a(function() {
    var n = this.props.timeout, r, l, u;
    return r = l = u = n, n != null && typeof n != "number" && (r = n.exit, l = n.enter, u = n.appear !== void 0 ? n.appear : l), {
      exit: r,
      enter: l,
      appear: u
    };
  }, "getTimeouts"), o.updateStatus = /* @__PURE__ */ a(function(n, r) {
    if (n === void 0 && (n = !1), r !== null)
      if (this.cancelNextCallback(), r === It) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : co.findDOMNode(this);
          l && Ha(l);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === xt && this.setState({
      status: fo
    });
  }, "updateStatus"), o.performEnter = /* @__PURE__ */ a(function(n) {
    var r = this, l = this.props.enter, u = this.context ? this.context.isMounting : n, c = this.props.nodeRef ? [u] : [co.findDOMNode(this),
    u], p = c[0], d = c[1], b = this.getTimeouts(), f = u ? b.appear : b.enter;
    if (!n && !l || xn.disabled) {
      this.safeSetState({
        status: Zt
      }, function() {
        r.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, d), this.safeSetState({
      status: It
    }, function() {
      r.props.onEntering(p, d), r.onTransitionEnd(f, function() {
        r.safeSetState({
          status: Zt
        }, function() {
          r.props.onEntered(p, d);
        });
      });
    });
  }, "performEnter"), o.performExit = /* @__PURE__ */ a(function() {
    var n = this, r = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : co.findDOMNode(this);
    if (!r || xn.disabled) {
      this.safeSetState({
        status: xt
      }, function() {
        n.props.onExited(u);
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
      status: Sn
    }, function() {
      n.props.onExiting(u), n.onTransitionEnd(l.exit, function() {
        n.safeSetState({
          status: xt
        }, function() {
          n.props.onExited(u);
        });
      });
    });
  }, "performExit"), o.cancelNextCallback = /* @__PURE__ */ a(function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, "cancelNextCallback"), o.safeSetState = /* @__PURE__ */ a(function(n, r) {
    r = this.setNextCallback(r), this.setState(n, r);
  }, "safeSetState"), o.setNextCallback = /* @__PURE__ */ a(function(n) {
    var r = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, r.nextCallback = null, n(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, "setNextCallback"), o.onTransitionEnd = /* @__PURE__ */ a(function(n, r) {
    this.setNextCallback(r);
    var l = this.props.nodeRef ? this.props.nodeRef.current : co.findDOMNode(this), u = n == null && !this.props.addEndListener;
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], p = c[0], d = c[1];
      this.props.addEndListener(p, d);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, "onTransitionEnd"), o.render = /* @__PURE__ */ a(function() {
    var n = this.state.status;
    if (n === fo)
      return null;
    var r = this.props, l = r.children, u = r.in, c = r.mountOnEnter, p = r.unmountOnExit, d = r.appear, b = r.enter, f = r.exit, y = r.timeout,
    m = r.addEndListener, g = r.onEnter, S = r.onEntering, _ = r.onEntered, h = r.onExit, v = r.onExiting, x = r.onExited, w = r.nodeRef, T = Ee(
    r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "\
onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ s.createElement(In.Provider, {
        value: null
      }, typeof l == "function" ? l(n, T) : s.cloneElement(s.Children.only(l), T))
    );
  }, "render"), t;
}(s.Component);
at.contextType = In;
at.propTypes = {};
function Xt() {
}
a(Xt, "noop");
at.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Xt,
  onEntering: Xt,
  onEntered: Xt,
  onExit: Xt,
  onExiting: Xt,
  onExited: Xt
};
at.UNMOUNTED = fo;
at.EXITED = xt;
at.ENTERING = It;
at.ENTERED = Zt;
at.EXITING = Sn;
var St = at;

// src/manager/components/upgrade/UpgradeBlock.tsx
var Jo = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => {
  let t = se(), [o, i] = X("npm");
  return /* @__PURE__ */ s.createElement(uf, null, /* @__PURE__ */ s.createElement("strong", null, "You are on Storybook ", t.getCurrentVersion().
  version), /* @__PURE__ */ s.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ s.
  createElement(cf, null, /* @__PURE__ */ s.createElement(za, { active: o === "npm", onClick: () => i("npm") }, "npm"), /* @__PURE__ */ s.createElement(
  za, { active: o === "pnpm", onClick: () => i("pnpm") }, "pnpm")), /* @__PURE__ */ s.createElement(pf, null, o === "npm" ? "npx storybook@l\
atest upgrade" : "pnpm dlx storybook@latest upgrade"), e && // eslint-disable-next-line jsx-a11y/anchor-is-valid
  /* @__PURE__ */ s.createElement(Pe, { onClick: e }, "See what's new in Storybook"));
}, "UpgradeBlock"), uf = I.div(({ theme: e }) => ({
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: e.appBorderColor,
  fontSize: e.typography.size.s2,
  width: "100%",
  [rt]: {
    maxWidth: 400
  }
})), cf = I.div({
  display: "flex",
  gap: 2
}), pf = I.pre(({ theme: e }) => ({
  background: e.base === "light" ? "rgba(0, 0, 0, 0.05)" : e.appBorderColor,
  fontSize: e.typography.size.s2 - 1,
  margin: "4px 0 16px"
})), za = I.button(({ theme: e, active: t }) => ({
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: e.color.defaultText,
  fontSize: e.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: t ? e.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/manager/components/mobile/about/MobileAbout.tsx
var Wa = /* @__PURE__ */ a(() => {
  let { isMobileAboutOpen: e, setMobileAboutOpen: t } = Se(), o = Q(null);
  return /* @__PURE__ */ s.createElement(
    St,
    {
      nodeRef: o,
      in: e,
      timeout: 300,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (i) => /* @__PURE__ */ s.createElement(df, { ref: o, state: i, transitionDuration: 300 }, /* @__PURE__ */ s.createElement(hf, { onClick: () => t(
    !1), title: "Close about section" }, /* @__PURE__ */ s.createElement(Qs, null), "Back"), /* @__PURE__ */ s.createElement(ff, null, /* @__PURE__ */ s.
    createElement(Ra, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ s.createElement(ja, null, /* @__PURE__ */ s.
    createElement(Uo, null), /* @__PURE__ */ s.createElement("span", null, "Github")), /* @__PURE__ */ s.createElement(st, { width: 12 })), /* @__PURE__ */ s.
    createElement(
      Ra,
      {
        href: "https://storybook.js.org/docs/react/get-started/install/",
        target: "_blank"
      },
      /* @__PURE__ */ s.createElement(ja, null, /* @__PURE__ */ s.createElement(fa, null), /* @__PURE__ */ s.createElement("span", null, "Do\
cumentation")),
      /* @__PURE__ */ s.createElement(st, { width: 12 })
    )), /* @__PURE__ */ s.createElement(Jo, null), /* @__PURE__ */ s.createElement(mf, null, "Open source software maintained by", " ", /* @__PURE__ */ s.
    createElement(Pe, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ s.createElement(
    Pe, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout"), df = I.div(
  ({ theme: e, state: t, transitionDuration: o }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${o}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: e.color.defaultText,
    background: e.background.content,
    opacity: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
), ff = I.div({
  marginTop: 20,
  marginBottom: 20
}), Ra = I.a(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: e.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${e.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
})), ja = I.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s2 - 1,
  height: 40,
  gap: 5
})), mf = I.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2 - 1,
  marginTop: 30
})), hf = I.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: e.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
var Va = /* @__PURE__ */ a(({ children: e }) => {
  let t = Q(null), o = Q(null), i = Q(null), { isMobileMenuOpen: n, setMobileMenuOpen: r, isMobileAboutOpen: l, setMobileAboutOpen: u } = Se();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    St,
    {
      nodeRef: t,
      in: n,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0,
      onExited: () => u(!1)
    },
    (c) => /* @__PURE__ */ s.createElement(gf, { ref: t, state: c }, /* @__PURE__ */ s.createElement(
      St,
      {
        nodeRef: o,
        in: !l,
        timeout: 300
      },
      (p) => /* @__PURE__ */ s.createElement(yf, { ref: o, state: p }, e)
    ), /* @__PURE__ */ s.createElement(Wa, null))
  ), /* @__PURE__ */ s.createElement(
    St,
    {
      nodeRef: i,
      in: n,
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (c) => /* @__PURE__ */ s.createElement(
      bf,
      {
        ref: i,
        state: c,
        onClick: () => r(!1),
        "aria-label": "Close navigation menu"
      }
    )
  ));
}, "MobileMenuDrawer"), gf = I.div(({ theme: e, state: t }) => ({
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "80%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  transform: `${t === "entering" || t === "entered" ? "translateY(0)" : t === "exiting" || t === "exited" ? "translateY(100%)" : "translateY\
(0)"}`
})), yf = I.div(({ theme: e, state: t }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${t === "entered" || t === "entering" ? 1 : t === "exiting" || t === "exited" ? 0 : 1}`,
  transform: `${(() => {
    switch (t) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
})), bf = I.div(({ state: e }) => ({
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${300}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (e) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/manager/components/mobile/navigation/MobileNavigation.tsx
var vf = /* @__PURE__ */ a(() => {
  let { index: e } = ze(), t = se(), o = t.getCurrentStoryData();
  if (!o)
    return "";
  let i = o.renderLabel?.(o, t) || o.name, n = e[o.id];
  for (; "parent" in n && n.parent && e[n.parent] && i.length < 24; )
    n = e[n.parent], i = `${n.renderLabel?.(n, t) || n.name}/${i}`;
  return i;
}, "useFullStoryName"), Ka = /* @__PURE__ */ a(({ menu: e, panel: t, showPanel: o }) => {
  let { isMobileMenuOpen: i, isMobilePanelOpen: n, setMobileMenuOpen: r, setMobilePanelOpen: l } = Se(), u = vf();
  return /* @__PURE__ */ s.createElement(xf, null, /* @__PURE__ */ s.createElement(Va, null, e), n ? /* @__PURE__ */ s.createElement(Ba, null,
  t) : /* @__PURE__ */ s.createElement(If, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(Sf, { onClick: () => r(!i), title: "Open\
 navigation menu" }, /* @__PURE__ */ s.createElement(Go, null), /* @__PURE__ */ s.createElement(wf, null, u)), o && /* @__PURE__ */ s.createElement(
  J, { onClick: () => l(!0), title: "Open addon panel" }, /* @__PURE__ */ s.createElement(Xs, null))));
}, "MobileNavigation"), xf = I.div(({ theme: e }) => ({
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  background: e.barBg,
  borderTop: `1px solid ${e.appBorderColor}`
})), If = I.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  padding: "0 6px"
}), Sf = I.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: e.barTextColor,
  fontSize: `${e.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: e.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  }
})), wf = I.p({
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/manager/components/layout/useDragging.ts
var $a = 30, er = 240, tr = 270, Ua = 0.9;
function qa(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
a(qa, "clamp");
function Ga(e, t, o) {
  return t + (o - t) * e;
}
a(Ga, "interpolate");
function Ya({
  setState: e,
  isPanelShown: t,
  isDesktop: o
}) {
  let i = Q(null), n = Q(null);
  return V(() => {
    let r = i.current, l = n.current, u = document.querySelector("#storybook-preview-wrapper"), c = null, p = /* @__PURE__ */ a((f) => {
      f.preventDefault(), e((y) => ({
        ...y,
        isDragging: !0
      })), f.currentTarget === r ? c = r : f.currentTarget === l && (c = l), window.addEventListener("mousemove", b), window.addEventListener(
      "mouseup", d), u && (u.style.pointerEvents = "none");
    }, "onDragStart"), d = /* @__PURE__ */ a((f) => {
      e((y) => c === l && y.navSize < er && y.navSize > 0 ? {
        ...y,
        isDragging: !1,
        navSize: er
      } : c === r && y.panelPosition === "right" && y.rightPanelWidth < tr && y.rightPanelWidth > 0 ? {
        ...y,
        isDragging: !1,
        rightPanelWidth: tr
      } : {
        ...y,
        isDragging: !1
      }), window.removeEventListener("mousemove", b), window.removeEventListener("mouseup", d), u?.removeAttribute("style"), c = null;
    }, "onDragEnd"), b = /* @__PURE__ */ a((f) => {
      if (f.buttons === 0) {
        d(f);
        return;
      }
      e((y) => {
        if (c === l) {
          let m = f.clientX;
          return m === y.navSize ? y : m <= $a ? {
            ...y,
            navSize: 0
          } : m <= er ? {
            ...y,
            navSize: Ga(Ua, m, er)
          } : {
            ...y,
            // @ts-expect-error (non strict)
            navSize: qa(m, 0, f.view.innerWidth)
          };
        }
        if (c === r) {
          let m = y.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", g = y.panelPosition === "bottom" ? (
            // @ts-expect-error (non strict)
            f.view.innerHeight - f.clientY
          ) : (
            // @ts-expect-error (non strict)
            f.view.innerWidth - f.clientX
          );
          if (g === y[m])
            return y;
          if (g <= $a)
            return {
              ...y,
              [m]: 0
            };
          if (y.panelPosition === "right" && g <= tr)
            return {
              ...y,
              [m]: Ga(
                Ua,
                g,
                tr
              )
            };
          let S = (
            // @ts-expect-error (non strict)
            y.panelPosition === "bottom" ? f.view.innerHeight : f.view.innerWidth
          );
          return {
            ...y,
            [m]: qa(g, 0, S)
          };
        }
        return y;
      });
    }, "onDrag");
    return r?.addEventListener("mousedown", p), l?.addEventListener("mousedown", p), () => {
      r?.removeEventListener("mousedown", p), l?.removeEventListener("mousedown", p), u?.removeAttribute("style");
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    t,
    o,
    e
  ]), { panelResizerRef: i, sidebarResizerRef: n };
}
a(Ya, "useDragging");

// src/manager/components/layout/Layout.tsx
var Cf = 100, Qa = /* @__PURE__ */ a((e, t) => e.navSize === t.navSize && e.bottomPanelHeight === t.bottomPanelHeight && e.rightPanelWidth ===
t.rightPanelWidth && e.panelPosition === t.panelPosition, "layoutStateIsEqual"), _f = /* @__PURE__ */ a(({
  managerLayoutState: e,
  setManagerLayoutState: t,
  isDesktop: o,
  hasTab: i
}) => {
  let n = s.useRef(e), [r, l] = X({
    ...e,
    isDragging: !1
  });
  V(() => {
    r.isDragging || // don't interrupt user's drag
    Qa(e, n.current) || (n.current = e, l((m) => ({ ...m, ...e })));
  }, [r.isDragging, e, l]), Ht(() => {
    if (r.isDragging || // wait with syncing managerLayoutState until user is done dragging
    Qa(e, r))
      return;
    let m = {
      navSize: r.navSize,
      bottomPanelHeight: r.bottomPanelHeight,
      rightPanelWidth: r.rightPanelWidth
    };
    n.current = {
      ...n.current,
      ...m
    }, t(m);
  }, [r, t]);
  let u = e.viewMode !== "story" && e.viewMode !== "docs", c = e.viewMode === "story" && !i, { panelResizerRef: p, sidebarResizerRef: d } = Ya(
  {
    setState: l,
    isPanelShown: c,
    isDesktop: o
  }), { navSize: b, rightPanelWidth: f, bottomPanelHeight: y } = r.isDragging ? r : e;
  return {
    navSize: b,
    rightPanelWidth: f,
    bottomPanelHeight: y,
    panelPosition: e.panelPosition,
    panelResizerRef: p,
    sidebarResizerRef: d,
    showPages: u,
    showPanel: c,
    isDragging: r.isDragging
  };
}, "useLayoutSyncingState"), Za = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, hasTab: o, ...i }) => {
  let { isDesktop: n, isMobile: r } = Se(), {
    navSize: l,
    rightPanelWidth: u,
    bottomPanelHeight: c,
    panelPosition: p,
    panelResizerRef: d,
    sidebarResizerRef: b,
    showPages: f,
    showPanel: y,
    isDragging: m
  } = _f({ managerLayoutState: e, setManagerLayoutState: t, isDesktop: n, hasTab: o });
  return /* @__PURE__ */ s.createElement(
    Ef,
    {
      navSize: l,
      rightPanelWidth: u,
      bottomPanelHeight: c,
      panelPosition: e.panelPosition,
      isDragging: m,
      viewMode: e.viewMode,
      showPanel: y
    },
    /* @__PURE__ */ s.createElement(Ma, null),
    f && /* @__PURE__ */ s.createElement(Of, null, i.slotPages),
    /* @__PURE__ */ s.createElement(hs, { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 }, ({ match: g }) => /* @__PURE__ */ s.createElement(
    kf, { shown: !!g }, i.slotMain)),
    n && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Tf, null, /* @__PURE__ */ s.createElement(Xa, { ref: b }),
    i.slotSidebar), y && /* @__PURE__ */ s.createElement(Pf, { position: p }, /* @__PURE__ */ s.createElement(
      Xa,
      {
        orientation: p === "bottom" ? "horizontal" : "vertical",
        position: p === "bottom" ? "left" : "right",
        ref: d
      }
    ), i.slotPanel)),
    r && /* @__PURE__ */ s.createElement(Ka, { menu: i.slotSidebar, panel: i.slotPanel, showPanel: y })
  );
}, "Layout"), Ef = I.div(
  ({ navSize: e, rightPanelWidth: t, bottomPanelHeight: o, viewMode: i, panelPosition: n, showPanel: r }) => ({
    width: "100%",
    height: ["100vh", "100dvh"],
    // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [rt]: {
      display: "grid",
      gap: 0,
      gridTemplateColumns: `minmax(0, ${e}px) minmax(${Cf}px, 1fr) minmax(0, ${t}px)`,
      gridTemplateRows: `1fr minmax(0, ${o}px)`,
      gridTemplateAreas: i === "docs" || !r ? `"sidebar content content"
                  "sidebar content content"` : n === "right" ? `"sidebar content panel"
                  "sidebar content panel"` : `"sidebar content content"
                "sidebar panel   panel"`
    }
  })
), Tf = I.div(({ theme: e }) => ({
  backgroundColor: e.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${e.color.border}`
})), kf = I.div(({ theme: e, shown: t }) => ({
  flex: 1,
  position: "relative",
  backgroundColor: e.background.content,
  display: t ? "grid" : "none",
  // This is needed to make the content container fill the available space
  overflow: "auto",
  [rt]: {
    flex: "auto",
    gridArea: "content"
  }
})), Of = I.div(({ theme: e }) => ({
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: e.background.content,
  zIndex: 1
})), Pf = I.div(
  ({ theme: e, position: t }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: e.background.content,
    borderTop: t === "bottom" ? `1px solid ${e.color.border}` : void 0,
    borderLeft: t === "right" ? `1px solid ${e.color.border}` : void 0
  })
), Xa = I.div(
  ({ theme: e }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: e.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation: e = "vertical", position: t = "left" }) => e === "vertical" ? {
    width: t === "left" ? 10 : 13,
    height: "100%",
    top: 0,
    right: t === "left" ? "-7px" : void 0,
    left: t === "right" ? "-7px" : void 0,
    "&:after": {
      width: 1,
      height: "100%",
      marginLeft: t === "left" ? 3 : 6
    },
    "&:hover": {
      cursor: "col-resize"
    }
  } : {
    width: "100%",
    height: "13px",
    top: "-7px",
    left: 0,
    "&:after": {
      width: "100%",
      height: 1,
      marginTop: 6
    },
    "&:hover": {
      cursor: "row-resize"
    }
  }
);

// global-externals:@storybook/core/types
var bE = __STORYBOOK_TYPES__, { Addon_TypesEnum: ke } = __STORYBOOK_TYPES__;

// src/manager/container/Panel.tsx
var el = Fe(or(), 1);

// src/manager/components/panel/Panel.tsx
var En = class En extends Le {
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  componentDidCatch(t, o) {
    this.setState({ hasError: !0 }), console.error(t, o);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    let { hasError: t } = this.state, { children: o } = this.props;
    return t ? /* @__PURE__ */ s.createElement("h1", null, "Something went wrong.") : o;
  }
};
a(En, "SafeTab");
var Cn = En, _n = s.memo(
  ({
    panels: e,
    shortcuts: t,
    actions: o,
    selectedPanel: i = null,
    panelPosition: n = "right",
    absolute: r = !0
  }) => {
    let { isDesktop: l, setMobilePanelOpen: u } = Se();
    return /* @__PURE__ */ s.createElement(
      Gs,
      {
        absolute: r,
        ...i ? { selected: i } : {},
        menuName: "Addons",
        actions: o,
        showToolsWhenEmpty: !0,
        emptyState: /* @__PURE__ */ s.createElement(
          $s,
          {
            title: "Storybook add-ons",
            description: /* @__PURE__ */ s.createElement(s.Fragment, null, "Integrate your tools with Storybook to connect workflows and unl\
ock advanced features."),
            footer: /* @__PURE__ */ s.createElement(Pe, { href: "https://storybook.js.org/integrations", target: "_blank", withArrow: !0 }, /* @__PURE__ */ s.
            createElement(qt, null), " Explore integrations catalog")
          }
        ),
        tools: /* @__PURE__ */ s.createElement(Af, null, l ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          J,
          {
            key: "position",
            onClick: o.togglePosition,
            title: `Change addon orientation [${qe(
              t.panelPosition
            )}]`
          },
          n === "bottom" ? /* @__PURE__ */ s.createElement(Qo, null) : /* @__PURE__ */ s.createElement(Ko, null)
        ), /* @__PURE__ */ s.createElement(
          J,
          {
            key: "visibility",
            onClick: o.toggleVisibility,
            title: `Hide addons [${qe(t.togglePanel)}]`
          },
          /* @__PURE__ */ s.createElement(Ge, null)
        )) : /* @__PURE__ */ s.createElement(J, { onClick: () => u(!1), title: "Close addon panel" }, /* @__PURE__ */ s.createElement(Ge, null))),
        id: "storybook-panel-root"
      },
      Object.entries(e).map(([c, p]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ s.createElement(Cn, { key: c, id: c, title: typeof p.title == "function" ? /* @__PURE__ */ s.createElement(p.title, null) :
        p.title }, p.render)
      ))
    );
  }
);
_n.displayName = "AddonPanel";
var Af = I.div({
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/manager/container/Panel.tsx
var Df = (0, el.default)(1)((e) => ({
  onSelect: /* @__PURE__ */ a((t) => e.setSelectedPanel(t), "onSelect"),
  toggleVisibility: /* @__PURE__ */ a(() => e.togglePanel(), "toggleVisibility"),
  togglePosition: /* @__PURE__ */ a(() => e.togglePanelPosition(), "togglePosition")
})), Mf = /* @__PURE__ */ a((e) => {
  let t = e.getElements(ke.PANEL), o = e.getCurrentStoryData();
  if (!t || !o || o.type !== "story")
    return t;
  let { parameters: i } = o, n = {};
  return Object.entries(t).forEach(([r, l]) => {
    let { paramKey: u } = l;
    u && i && i[u] && i[u].disable || (n[r] = l);
  }), n;
}, "getPanels"), Lf = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  panels: Mf(t),
  selectedPanel: t.getSelectedPanel(),
  panelPosition: e.layout.panelPosition,
  actions: Df(t),
  shortcuts: t.getShortcutKeys()
}), "mapper"), Nf = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(fe, { filter: Lf }, (t) => /* @__PURE__ */ s.createElement(_n, {
...e, ...t })), "Panel"), tl = Nf;

// src/manager/container/Preview.tsx
var ho = Fe(or(), 1);

// src/manager/components/preview/Iframe.tsx
var Ff = I.iframe(({ theme: e }) => ({
  backgroundColor: e.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: "auto",
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
function ol(e) {
  let { active: t, id: o, title: i, src: n, allowFullScreen: r, scale: l, ...u } = e, c = s.useRef(null);
  return /* @__PURE__ */ s.createElement(Ys.IFrame, { scale: l, active: t, iFrameRef: c }, /* @__PURE__ */ s.createElement(
    Ff,
    {
      "data-is-storybook": t ? "true" : "false",
      onLoad: (p) => p.currentTarget.setAttribute("data-is-loaded", "true"),
      id: o,
      title: i,
      src: n,
      allow: "clipboard-write;",
      allowFullScreen: r,
      ref: c,
      ...u
    }
  ));
}
a(ol, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var hl = Fe(ml(), 1);
var gl = /* @__PURE__ */ a((e) => {
  let t = (0, hl.stringify)(e);
  return t === "" ? "" : `&${t}`;
}, "stringifyQueryParams");

// src/manager/components/preview/FramesRenderer.tsx
var lm = /* @__PURE__ */ a((e, t) => e && t[e] ? `storybook-ref-${e}` : "storybook-preview-iframe", "getActive"), um = I(Ie)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: e.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
})), cm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isFullscreen: e.getIsFullscreen(),
  isNavShown: e.getIsNavShown(),
  selectedStoryId: t.storyId
}), "whenSidebarIsVisible"), pm = {
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
}, yl = /* @__PURE__ */ a(({
  refs: e,
  scale: t,
  viewMode: o = "story",
  refId: i,
  queryParams: n = {},
  baseUrl: r,
  storyId: l = "*"
}) => {
  let u = e[i]?.version, c = gl({
    ...n,
    ...u && { version: u }
  }), p = lm(i, e), { current: d } = Q({}), b = Object.values(e).filter((f) => f.type === "auto-inject" || f.id === i, {});
  return d["storybook-preview-iframe"] || (d["storybook-preview-iframe"] = $t(r, l, {
    ...n,
    ...u && { version: u },
    viewMode: o
  })), b.forEach((f) => {
    let y = `storybook-ref-${f.id}`, m = d[y]?.split("/iframe.html")[0];
    if (!m || f.url !== m) {
      let g = `${f.url}/iframe.html?id=${l}&viewMode=${o}&refId=${f.id}${c}`;
      d[y] = g;
    }
  }), /* @__PURE__ */ s.createElement(Ce, null, /* @__PURE__ */ s.createElement(Rt, { styles: pm }), /* @__PURE__ */ s.createElement(fe, { filter: cm },
  ({ isFullscreen: f, isNavShown: y, selectedStoryId: m }) => f || !y || !m ? null : /* @__PURE__ */ s.createElement(um, { asChild: !0 }, /* @__PURE__ */ s.
  createElement("a", { href: `#${m}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"))), Object.entries(d).map(([f, y]) => /* @__PURE__ */ s.
  createElement(Ce, { key: f }, /* @__PURE__ */ s.createElement(
    ol,
    {
      active: f === p,
      key: f,
      id: f,
      title: f,
      src: y,
      allowFullScreen: !0,
      scale: t
    }
  ))));
}, "FramesRenderer");

// src/manager/components/preview/tools/addons.tsx
var dm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsPanelShown(),
  singleStory: t.singleStory,
  panelPosition: t.layout.panelPosition,
  toggle: /* @__PURE__ */ a(() => e.togglePanel(), "toggle")
}), "menuMapper"), bl = {
  title: "addons",
  id: "addons",
  type: ge.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fe, { filter: dm }, ({ isVisible: e, toggle: t, singleStory: o, panelPosition: i }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(J, { "aria-label": "Show addons", key: "addons", onClick: t,
  title: "Show addons" }, i === "bottom" ? /* @__PURE__ */ s.createElement(Ko, null) : /* @__PURE__ */ s.createElement(Qo, null)))), "render")
};

// src/manager/components/preview/tools/copy.tsx
var Cl = Fe(wl(), 1);
var { PREVIEW_URL: ym, document: bm } = ne, vm = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, { location: n } = bm, r = i[o], l = `${n.origin}${n.pathname}`;
  return l.endsWith("/") || (l += "/"), {
    refId: o,
    baseUrl: r ? `${r.url}/iframe.html` : ym || `${l}iframe.html`,
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "copyMapper"), _l = {
  title: "copy",
  id: "copy",
  type: ge.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fe, { filter: vm }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(
    J,
    {
      key: "copy",
      onClick: () => (0, Cl.default)($t(e, t, o)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ s.createElement(ua, null)
  ) : null), "render")
};

// src/manager/components/preview/tools/eject.tsx
var { PREVIEW_URL: xm } = ne, Im = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, n = i[o];
  return {
    refId: o,
    baseUrl: n ? `${n.url}/iframe.html` : xm || "iframe.html",
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "ejectMapper"), El = {
  title: "eject",
  id: "eject",
  type: ge.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fe, { filter: Im }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(J, { key: "opener", asChild: !0 }, /* @__PURE__ */ s.createElement(
    "a",
    {
      href: $t(e, t, o),
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Open canvas in new tab"
    },
    /* @__PURE__ */ s.createElement(st, null)
  )) : null), "render")
};

// src/manager/components/preview/tools/remount.tsx
var Sm = I(J)(({ theme: e, animating: t, disabled: o }) => ({
  opacity: o ? 0.5 : 1,
  svg: {
    animation: t ? `${e.animation.rotate360} 1000ms ease-out` : void 0
  }
})), wm = /* @__PURE__ */ a(({ api: e, state: t }) => {
  let { storyId: o } = t;
  return {
    storyId: o,
    remount: /* @__PURE__ */ a(() => e.emit(Yr, { storyId: t.storyId }), "remount"),
    api: e
  };
}, "menuMapper"), Tl = {
  title: "remount",
  id: "remount",
  type: ge.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fe, { filter: wm }, ({ remount: e, storyId: t, api: o }) => {
    let [i, n] = X(!1), r = /* @__PURE__ */ a(() => {
      t && e();
    }, "remountComponent");
    return o.on(Yr, () => {
      n(!0);
    }), /* @__PURE__ */ s.createElement(
      Sm,
      {
        key: "remount",
        title: "Remount component",
        onClick: r,
        onAnimationEnd: () => n(!1),
        animating: i,
        disabled: !t
      },
      /* @__PURE__ */ s.createElement(dt, null)
    );
  }), "render")
};

// src/manager/components/preview/tools/zoom.tsx
var mo = 1, kl = Bt({ value: mo, set: /* @__PURE__ */ a((e) => {
}, "set") }), Ln = class Ln extends Le {
  constructor() {
    super(...arguments);
    this.state = {
      value: mo
    };
    this.set = /* @__PURE__ */ a((o) => this.setState({ value: o }), "set");
  }
  render() {
    let { children: o, shouldScale: i } = this.props, { set: n } = this, { value: r } = this.state;
    return /* @__PURE__ */ s.createElement(kl.Provider, { value: { value: i ? r : mo, set: n } }, o);
  }
};
a(Ln, "ZoomProvider");
var ar = Ln, { Consumer: Mn } = kl, Cm = no(/* @__PURE__ */ a(function({ zoomIn: t, zoomOut: o, reset: i }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(J, { key: "zoomin", onClick: t, title: "Zoom in" },
  /* @__PURE__ */ s.createElement(ya, null)), /* @__PURE__ */ s.createElement(J, { key: "zoomout", onClick: o, title: "Zoom out" }, /* @__PURE__ */ s.
  createElement(ba, null)), /* @__PURE__ */ s.createElement(J, { key: "zoomreset", onClick: i, title: "Reset zoom" }, /* @__PURE__ */ s.createElement(
  va, null)));
}, "Zoom"));
var _m = no(/* @__PURE__ */ a(function({
  set: t,
  value: o
}) {
  let i = A(
    (l) => {
      l.preventDefault(), t(0.8 * o);
    },
    [t, o]
  ), n = A(
    (l) => {
      l.preventDefault(), t(1.25 * o);
    },
    [t, o]
  ), r = A(
    (l) => {
      l.preventDefault(), t(mo);
    },
    [t, mo]
  );
  return /* @__PURE__ */ s.createElement(Cm, { key: "zoom", zoomIn: i, zoomOut: n, reset: r });
}, "ZoomWrapper"));
function Em() {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Mn, null, ({ set: e, value: t }) => /* @__PURE__ */ s.
  createElement(_m, { set: e, value: t })), /* @__PURE__ */ s.createElement(Kt, null));
}
a(Em, "ZoomToolRenderer");
var Ol = {
  title: "zoom",
  id: "zoom",
  type: ge.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: Em
};

// src/manager/components/preview/Toolbar.tsx
var Tm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  toggle: e.toggleFullscreen,
  isFullscreen: e.getIsFullscreen(),
  shortcut: qe(e.getShortcutKeys().fullScreen),
  hasPanel: Object.keys(e.getElements(ke.PANEL)).length > 0,
  singleStory: t.singleStory
}), "fullScreenMapper"), Al = {
  title: "fullscreen",
  id: "fullscreen",
  type: ge.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a((e) => ["story", "docs"].includes(e.viewMode), "match"),
  render: /* @__PURE__ */ a(() => {
    let { isMobile: e } = Se();
    return e ? null : /* @__PURE__ */ s.createElement(fe, { filter: Tm }, ({ toggle: t, isFullscreen: o, shortcut: i, hasPanel: n, singleStory: r }) => (!r ||
    r && n) && /* @__PURE__ */ s.createElement(
      J,
      {
        key: "full",
        onClick: t,
        title: `${o ? "Exit full screen" : "Go full screen"} [${i}]`,
        "aria-label": o ? "Exit full screen" : "Go full screen"
      },
      o ? /* @__PURE__ */ s.createElement(Ge, null) : /* @__PURE__ */ s.createElement(oa, null)
    ));
  }, "render")
};
var Dl = s.memo(/* @__PURE__ */ a(function({
  isShown: t,
  tools: o,
  toolsExtra: i,
  tabs: n,
  tabId: r,
  api: l
}) {
  return n || o || i ? /* @__PURE__ */ s.createElement(Om, { className: "sb-bar", key: "toolbar", shown: t, "data-test-id": "sb-preview-tool\
bar" }, /* @__PURE__ */ s.createElement(Pm, null, /* @__PURE__ */ s.createElement(Ml, null, n.length > 1 ? /* @__PURE__ */ s.createElement(Ce,
  null, /* @__PURE__ */ s.createElement(Ro, { key: "tabs" }, n.map((u, c) => /* @__PURE__ */ s.createElement(
    jo,
    {
      disabled: u.disabled,
      active: u.id === r || u.id === "canvas" && !r,
      onClick: () => {
        l.applyQueryParams({ tab: u.id === "canvas" ? void 0 : u.id });
      },
      key: u.id || `tab-${c}`
    },
    u.title
  ))), /* @__PURE__ */ s.createElement(Kt, null)) : null, /* @__PURE__ */ s.createElement(Pl, { key: "left", list: o })), /* @__PURE__ */ s.
  createElement(Am, null, /* @__PURE__ */ s.createElement(Pl, { key: "right", list: i })))) : null;
}, "ToolbarComp")), Pl = s.memo(/* @__PURE__ */ a(function({ list: t }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, t.filter(Boolean).map(({ render: o, id: i, ...n }, r) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ s.createElement(o, { key: i || n.key || `f-${r}` })
  )));
}, "Tools"));
function km(e, t) {
  let o = t?.type === "story" && t?.prepared ? t?.parameters : {}, i = "toolbar" in o ? o.toolbar : void 0, { toolbar: n } = Ue.getConfig(),
  r = To(
    n || {},
    i || {}
  );
  return r ? !!r[e?.id]?.hidden : !1;
}
a(km, "toolbarItemHasBeenExcluded");
function Nn(e, t, o, i, n, r) {
  let l = /* @__PURE__ */ a((u) => u && (!u.match || u.match({
    storyId: t?.id,
    refId: t?.refId,
    viewMode: o,
    location: i,
    path: n,
    tabId: r
  })) && !km(u, t), "filter");
  return e.filter(l);
}
a(Nn, "filterToolsSide");
var Om = I.div(({ theme: e, shown: t }) => ({
  position: "relative",
  color: e.barTextColor,
  width: "100%",
  height: 40,
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: t ? 0 : -40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  zIndex: 4
})), Pm = I.div({
  position: "absolute",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
}), Ml = I.div({
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
}), Am = I(Ml)({
  marginLeft: 30
});

// src/manager/components/preview/utils/components.ts
var Ll = I.main({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
}), Nl = I.div({
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
}), Fl = I.div(
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  ({ show: e }) => ({ display: e ? "grid" : "none" })
), nk = I(Oo)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
}), ik = I.span({
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
}), lr = I.div(({ theme: e }) => ({
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
})), Bl = I.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: e.background.preview,
  zIndex: 1
}));

// src/manager/components/preview/Wrappers.tsx
var Hl = /* @__PURE__ */ a(({
  wrappers: e,
  id: t,
  storyId: o,
  children: i
}) => /* @__PURE__ */ s.createElement(Ce, null, e.reduceRight(
  (n, r, l) => /* @__PURE__ */ s.createElement(r.render, { index: l, children: n, id: t, storyId: o }),
  i
)), "ApplyWrappers"), zl = [
  {
    id: "iframe-wrapper",
    type: ke.PREVIEW,
    render: /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(lr, { id: "storybook-preview-wrapper" }, e.children), "render")
  }
];

// src/manager/components/preview/Preview.tsx
var Mm = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  storyId: e.storyId,
  refId: e.refId,
  viewMode: e.viewMode,
  customCanvas: t.renderPreview,
  queryParams: e.customQueryParams,
  getElements: t.getElements,
  entry: t.getData(e.storyId, e.refId),
  previewInitialized: e.previewInitialized,
  refs: e.refs
}), "canvasMapper"), Rl = /* @__PURE__ */ a(() => ({
  id: "canvas",
  type: ge.TAB,
  title: "Canvas",
  route: /* @__PURE__ */ a(({ storyId: e, refId: t }) => t ? `/story/${t}_${e}` : `/story/${e}`, "route"),
  match: /* @__PURE__ */ a(({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)), "match"),
  render: /* @__PURE__ */ a(() => null, "render")
}), "createCanvasTab"), jl = s.memo(/* @__PURE__ */ a(function(t) {
  let {
    api: o,
    id: i,
    options: n,
    viewMode: r,
    storyId: l,
    entry: u = void 0,
    description: c,
    baseUrl: p,
    withLoader: d = !0,
    tools: b,
    toolsExtra: f,
    tabs: y,
    wrappers: m,
    tabId: g
  } = t, S = y.find((x) => x.id === g)?.render, _ = r === "story", { showToolbar: h } = n, v = Q(l);
  return V(() => {
    if (u && r) {
      if (l === v.current)
        return;
      if (v.current = l, r.match(/docs|story/)) {
        let { refId: x, id: w } = u;
        o.emit(is, {
          storyId: w,
          viewMode: r,
          options: { target: x }
        });
      }
    }
  }, [u, r, l, o]), /* @__PURE__ */ s.createElement(Ce, null, i === "main" && /* @__PURE__ */ s.createElement(uo, { key: "description" }, /* @__PURE__ */ s.
  createElement("title", null, c)), /* @__PURE__ */ s.createElement(ar, { shouldScale: _ }, /* @__PURE__ */ s.createElement(Ll, null, /* @__PURE__ */ s.
  createElement(
    Dl,
    {
      key: "tools",
      isShown: h,
      tabId: g,
      tabs: y,
      tools: b,
      toolsExtra: f,
      api: o
    }
  ), /* @__PURE__ */ s.createElement(Nl, { key: "frame" }, S && /* @__PURE__ */ s.createElement(lr, null, S({ active: !0 })), /* @__PURE__ */ s.
  createElement(Fl, { show: !g }, /* @__PURE__ */ s.createElement(Lm, { withLoader: d, baseUrl: p, wrappers: m }))))));
}, "Preview"));
var Lm = /* @__PURE__ */ a(({ baseUrl: e, withLoader: t, wrappers: o }) => /* @__PURE__ */ s.createElement(fe, { filter: Mm }, ({
  entry: i,
  refs: n,
  customCanvas: r,
  storyId: l,
  refId: u,
  viewMode: c,
  queryParams: p,
  previewInitialized: d
}) => {
  let b = "canvas", [f, y] = X(void 0);
  V(() => {
    if (ne.CONFIG_TYPE === "DEVELOPMENT")
      try {
        Ue.getChannel().on(os, (v) => {
          y(v);
        });
      } catch {
      }
  }, []);
  let m = !!n[u] && !n[u].previewInitialized, g = !(f?.value === 1 || f === void 0), S = !u && (!d || g), _ = i && m || S;
  return /* @__PURE__ */ s.createElement(Mn, null, ({ value: h }) => /* @__PURE__ */ s.createElement(s.Fragment, null, t && _ && /* @__PURE__ */ s.
  createElement(Bl, null, /* @__PURE__ */ s.createElement(Bo, { id: "preview-loader", role: "progressbar", progress: f })), /* @__PURE__ */ s.
  createElement(Hl, { id: b, storyId: l, viewMode: c, wrappers: o }, r ? r(l, c, b, e, h, p) : /* @__PURE__ */ s.createElement(
    yl,
    {
      baseUrl: e,
      refs: n,
      scale: h,
      entry: i,
      viewMode: c,
      refId: u,
      queryParams: p,
      storyId: l
    }
  ))));
}), "Canvas");
function Wl(e, t) {
  let { previewTabs: o } = Ue.getConfig(), i = t ? t.previewTabs : void 0;
  if (o || i) {
    let n = To(o || {}, i || {}), r = Object.keys(n).map((l, u) => ({
      index: u,
      ...typeof n[l] == "string" ? { title: n[l] } : n[l],
      id: l
    }));
    return e.filter((l) => {
      let u = r.find((c) => c.id === l.id);
      return u === void 0 || u.id === "canvas" || !u.hidden;
    }).map((l, u) => ({ ...l, index: u })).sort((l, u) => {
      let c = r.find((f) => f.id === l.id), p = c ? c.index : r.length + l.index, d = r.find((f) => f.id === u.id), b = d ? d.index : r.length +
      u.index;
      return p - b;
    }).map((l) => {
      let u = r.find((c) => c.id === l.id);
      return u ? {
        ...l,
        title: u.title || l.title,
        disabled: u.disabled,
        hidden: u.hidden
      } : l;
    });
  }
  return e;
}
a(Wl, "filterTabs");

// src/manager/components/preview/tools/menu.tsx
var Nm = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsNavShown(),
  singleStory: t.singleStory,
  toggle: /* @__PURE__ */ a(() => e.toggleNav(), "toggle")
}), "menuMapper"), Vl = {
  title: "menu",
  id: "menu",
  type: ge.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a(({ viewMode: e }) => ["story", "docs"].includes(e), "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fe, { filter: Nm }, ({ isVisible: e, toggle: t, singleStory: o }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(J, { "aria-label": "Show sidebar", key: "menu", onClick: t,
  title: "Show sidebar" }, /* @__PURE__ */ s.createElement(Go, null)), /* @__PURE__ */ s.createElement(Kt, null))), "render")
};

// src/manager/container/Preview.tsx
var Fm = [Rl()], Bm = [Vl, Tl, Ol], Hm = [bl, Al, El, _l], zm = [], Rm = (0, ho.default)(1)(
  (e, t, o, i) => i ? Wl([...Fm, ...Object.values(t)], o) : zm
), jm = (0, ho.default)(1)(
  (e, t, o) => Nn([...Bm, ...Object.values(t)], ...o)
), Wm = (0, ho.default)(1)(
  (e, t, o) => Nn([...Hm, ...Object.values(t)], ...o)
), Vm = (0, ho.default)(1)((e, t) => [
  ...zl,
  ...Object.values(t)
]), { PREVIEW_URL: Km } = ne, $m = /* @__PURE__ */ a((e) => e.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace"), Um = /* @__PURE__ */ a(
(e) => {
  if (e?.type === "story" || e?.type === "docs") {
    let { title: t, name: o } = e;
    return t && o ? $m(`${t} - ${o} \u22C5 Storybook`) : "Storybook";
  }
  return e?.name ? `${e.name} \u22C5 Storybook` : "Storybook";
}, "getDescription"), qm = /* @__PURE__ */ a(({
  api: e,
  state: t
  // @ts-expect-error (non strict)
}) => {
  let { layout: o, location: i, customQueryParams: n, storyId: r, refs: l, viewMode: u, path: c, refId: p } = t, d = e.getData(r, p), b = Object.
  values(e.getElements(ke.TAB)), f = Object.values(e.getElements(ke.PREVIEW)), y = Object.values(e.getElements(ke.TOOL)), m = Object.values(
  e.getElements(ke.TOOLEXTRA)), g = e.getQueryParam("tab"), S = jm(y.length, e.getElements(ke.TOOL), [
    d,
    u,
    i,
    c,
    // @ts-expect-error (non strict)
    g
  ]), _ = Wm(
    m.length,
    e.getElements(ke.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [d, u, i, c, g]
  );
  return {
    api: e,
    entry: d,
    options: o,
    description: Um(d),
    viewMode: u,
    refs: l,
    storyId: r,
    baseUrl: Km || "iframe.html",
    queryParams: n,
    tools: S,
    toolsExtra: _,
    tabs: Rm(
      b.length,
      e.getElements(ke.TAB),
      d ? d.parameters : void 0,
      o.showTabs
    ),
    wrappers: Vm(
      f.length,
      e.getElements(ke.PREVIEW)
    ),
    tabId: g
  };
}, "mapper"), Gm = s.memo(/* @__PURE__ */ a(function(t) {
  return /* @__PURE__ */ s.createElement(fe, { filter: qm }, (o) => /* @__PURE__ */ s.createElement(jl, { ...t, ...o }));
}, "PreviewConnected")), Kl = Gm;

// src/manager/hooks/useDebounce.ts
function $l(e, t) {
  let [o, i] = X(e);
  return V(() => {
    let n = setTimeout(() => {
      i(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), o;
}
a($l, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function Ul() {
  let [e, t] = s.useState({
    width: null,
    height: null
  }), o = s.useRef(null);
  return [s.useCallback((n) => {
    if (o.current && (o.current.disconnect(), o.current = null), n?.nodeType === Node.ELEMENT_NODE) {
      let r = new ResizeObserver(([l]) => {
        if (l && l.borderBoxSize) {
          let { inlineSize: u, blockSize: c } = l.borderBoxSize[0];
          t({ width: u, height: c });
        }
      });
      r.observe(n), o.current = r;
    }
  }, []), e];
}
a(Ul, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function Et(e, t, o) {
  let i = o.initialDeps ?? [], n;
  return () => {
    var r, l, u, c;
    let p;
    o.key && ((r = o.debug) != null && r.call(o)) && (p = Date.now());
    let d = e();
    if (!(d.length !== i.length || d.some((y, m) => i[m] !== y)))
      return n;
    i = d;
    let f;
    if (o.key && ((l = o.debug) != null && l.call(o)) && (f = Date.now()), n = t(...d), o.key && ((u = o.debug) != null && u.call(o))) {
      let y = Math.round((Date.now() - p) * 100) / 100, m = Math.round((Date.now() - f) * 100) / 100, g = m / 16, S = /* @__PURE__ */ a((_, h) => {
        for (_ = String(_); _.length < h; )
          _ = " " + _;
        return _;
      }, "pad");
      console.info(
        `%c\u23F1 ${S(m, 5)} /${S(y, 5)} ms`,
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
          Math.min(120 - 120 * g, 120)
        )}deg 100% 31%);`,
        o?.key
      );
    }
    return (c = o?.onChange) == null || c.call(o, n), n;
  };
}
a(Et, "memo");
function ur(e, t) {
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
a(ur, "notUndefined");
var ql = /* @__PURE__ */ a((e, t) => Math.abs(e - t) < 1, "approxEqual");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var Ym = /* @__PURE__ */ a((e) => e, "defaultKeyExtractor"), Qm = /* @__PURE__ */ a((e) => {
  let t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), i = [];
  for (let n = t; n <= o; n++)
    i.push(n);
  return i;
}, "defaultRangeExtractor"), Gl = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a((r) => {
    let { width: l, height: u } = r;
    t({ width: Math.round(l), height: Math.round(u) });
  }, "handler");
  if (i(o.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  let n = new ResizeObserver((r) => {
    let l = r[0];
    if (l?.borderBoxSize) {
      let u = l.borderBoxSize[0];
      if (u) {
        i({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    i(o.getBoundingClientRect());
  });
  return n.observe(o, { box: "border-box" }), () => {
    n.unobserve(o);
  };
}, "observeElementRect");
var Yl = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a(() => {
    t(o[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
  }, "handler");
  return i(), o.addEventListener("scroll", i, {
    passive: !0
  }), () => {
    o.removeEventListener("scroll", i);
  };
}, "observeElementOffset");
var Xm = /* @__PURE__ */ a((e, t, o) => {
  if (t?.borderBoxSize) {
    let i = t.borderBoxSize[0];
    if (i)
      return Math.round(
        i[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[o.options.horizontal ? "width" : "height"]
  );
}, "measureElement");
var Ql = /* @__PURE__ */ a((e, {
  adjustments: t = 0,
  behavior: o
}, i) => {
  var n, r;
  let l = e + t;
  (r = (n = i.scrollElement) == null ? void 0 : n.scrollTo) == null || r.call(n, {
    [i.options.horizontal ? "left" : "top"]: l,
    behavior: o
  });
}, "elementScroll"), Fn = class Fn {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null,
    this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection =
    null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let o = null, i = /* @__PURE__ */ a(() => o || (typeof ResizeObserver < "u" ? o = new ResizeObserver((n) => {
        n.forEach((r) => {
          this._measureElement(r.target, r);
        });
      }) : null), "get");
      return {
        disconnect: /* @__PURE__ */ a(() => {
          var n;
          return (n = i()) == null ? void 0 : n.disconnect();
        }, "disconnect"),
        observe: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.observe(n, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.unobserve(n);
        }, "unobserve")
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([i, n]) => {
        typeof n > "u" && delete o[i];
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
        getItemKey: Ym,
        rangeExtractor: Qm,
        onChange: /* @__PURE__ */ a(() => {
        }, "onChange"),
        measureElement: Xm,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...o
      };
    }, this.notify = (o) => {
      var i, n;
      (n = (i = this.options).onChange) == null || n.call(i, this, o);
    }, this.maybeNotify = Et(
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (o) => {
        this.notify(o);
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug"),
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((o) => o()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      let o = this.options.getScrollElement();
      this.scrollElement !== o && (this.cleanup(), this.scrollElement = o, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (i) => {
          this.scrollRect = i, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (i) => {
          this.scrollAdjustments = 0, this.scrollOffset !== i && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId),
          this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < i ? "forward" : "backward", this.
          scrollOffset = i, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = Et(
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
        this.options.getItemKey
      ],
      (o, i, n, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: i,
        scrollMargin: n,
        getItemKey: r
      }),
      {
        key: !1
      }
    ), this.getFurthestMeasurement = (o, i) => {
      let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let l = i - 1; l >= 0; l--) {
        let u = o[l];
        if (n.has(u.lane))
          continue;
        let c = r.get(
          u.lane
        );
        if (c == null || u.end > c.end ? r.set(u.lane, u) : u.end < c.end && n.set(u.lane, !0), n.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((l, u) => l.end === u.end ? l.index - u.index : l.end - u.end)[0] :
      void 0;
    }, this.getMeasurements = Et(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: i, scrollMargin: n, getItemKey: r }, l) => {
        let u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        let c = this.measurementsCache.slice(0, u);
        for (let p = u; p < o; p++) {
          let d = r(p), b = this.options.lanes === 1 ? c[p - 1] : this.getFurthestMeasurement(c, p), f = b ? b.end + this.options.gap : i + n,
          y = l.get(d), m = typeof y == "number" ? y : this.options.estimateSize(p), g = f + m, S = b ? b.lane : p % this.options.lanes;
          c[p] = {
            index: p,
            start: f,
            size: m,
            end: g,
            key: d,
            lane: S
          };
        }
        return this.measurementsCache = c, c;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.calculateRange = Et(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (o, i, n) => this.range = o.length > 0 && i > 0 ? Zm({
        measurements: o,
        outerSize: i,
        scrollOffset: n
      }) : null,
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getIndexes = Et(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (o, i, n, r) => i === null ? [] : o({
        ...i,
        overscan: n,
        count: r
      }),
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.indexFromElement = (o) => {
      let i = this.options.indexAttribute, n = o.getAttribute(i);
      return n ? parseInt(n, 10) : (console.warn(
        `Missing attribute name '${i}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (o, i) => {
      let n = this.measurementsCache[this.indexFromElement(o)];
      if (!n || !o.isConnected) {
        this.measureElementCache.forEach((u, c) => {
          u === o && (this.observer.unobserve(o), this.measureElementCache.delete(c));
        });
        return;
      }
      let r = this.measureElementCache.get(n.key);
      r !== o && (r && this.observer.unobserve(r), this.observer.observe(o), this.measureElementCache.set(n.key, o));
      let l = this.options.measureElement(o, i, this);
      this.resizeItem(n, l);
    }, this.resizeItem = (o, i) => {
      let n = this.itemSizeCache.get(o.key) ?? o.size, r = i - n;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, r, this) :
      o.start < this.scrollOffset + this.scrollAdjustments) && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, i)), this.notify(!1));
    }, this.measureElement = (o) => {
      o && this._measureElement(o, void 0);
    }, this.getVirtualItems = Et(
      () => [this.getIndexes(), this.getMeasurements()],
      (o, i) => {
        let n = [];
        for (let r = 0, l = o.length; r < l; r++) {
          let u = o[r], c = i[u];
          n.push(c);
        }
        return n;
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getVirtualItemForOffset = (o) => {
      let i = this.getMeasurements();
      return ur(
        i[Xl(
          0,
          i.length - 1,
          (n) => ur(i[n]).start,
          o
        )]
      );
    }, this.getOffsetForAlignment = (o, i) => {
      let n = this.getSize();
      i === "auto" && (o <= this.scrollOffset ? i = "start" : o >= this.scrollOffset + n ? i = "end" : i = "start"), i === "start" ? o = o :
      i === "end" ? o = o - n : i === "center" && (o = o - n / 2);
      let r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.
      document.documentElement[r] : this.scrollElement[r] : 0) - this.getSize();
      return Math.max(Math.min(u, o), 0);
    }, this.getOffsetForIndex = (o, i = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      let n = ur(this.getMeasurements()[o]);
      if (i === "auto")
        if (n.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          i = "end";
        else if (n.start <= this.scrollOffset + this.options.scrollPaddingStart)
          i = "start";
        else
          return [this.scrollOffset, i];
      let r = i === "end" ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(r, i), i];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (o, { align: i = "start", behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(o, i), {
        adjustments: void 0,
        behavior: n
      });
    }, this.scrollToIndex = (o, { align: i = "auto", behavior: n } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1)), this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      let [r, l] = this.getOffsetForIndex(o, i);
      this._scrollToOffset(r, { adjustments: void 0, behavior: n }), n !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId =
      setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(o)
        )) {
          let [c] = this.getOffsetForIndex(o, l);
          ql(c, this.scrollOffset) || this.scrollToIndex(o, { align: l, behavior: n });
        } else
          this.scrollToIndex(o, { align: l, behavior: n });
      }));
    }, this.scrollBy = (o, { behavior: i } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.scrollOffset + o, {
        adjustments: void 0,
        behavior: i
      });
    }, this.getTotalSize = () => {
      var o;
      let i = this.getMeasurements(), n;
      return i.length === 0 ? n = this.options.paddingStart : n = this.options.lanes === 1 ? ((o = i[i.length - 1]) == null ? void 0 : o.end) ??
      0 : Math.max(
        ...i.slice(-this.options.lanes).map((r) => r.end)
      ), n - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (o, {
      adjustments: i,
      behavior: n
    }) => {
      this.options.scrollToFn(o, { behavior: n, adjustments: i }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ?
    this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.
    forEach((o) => {
      this.itemSizeCache.set(o.key, o.size);
    }), this.maybeNotify();
  }
};
a(Fn, "Virtualizer");
var cr = Fn, Xl = /* @__PURE__ */ a((e, t, o, i) => {
  for (; e <= t; ) {
    let n = (e + t) / 2 | 0, r = o(n);
    if (r < i)
      e = n + 1;
    else if (r > i)
      t = n - 1;
    else
      return n;
  }
  return e > 0 ? e - 1 : 0;
}, "findNearestBinarySearch");
function Zm({
  measurements: e,
  outerSize: t,
  scrollOffset: o
}) {
  let i = e.length - 1, r = Xl(0, i, /* @__PURE__ */ a((u) => e[u].start, "getOffset"), o), l = r;
  for (; l < i && e[l].end < o + t; )
    l++;
  return { startIndex: r, endIndex: l };
}
a(Zm, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var Jm = typeof document < "u" ? Ht : V;
function eh(e) {
  let t = zt(() => ({}), {})[1], o = {
    ...e,
    onChange: /* @__PURE__ */ a((n, r) => {
      var l;
      r ? po(t) : t(), (l = e.onChange) == null || l.call(e, n, r);
    }, "onChange")
  }, [i] = X(
    () => new cr(o)
  );
  return i.setOptions(o), V(() => i._didMount(), []), Jm(() => i._willUpdate()), i;
}
a(eh, "useVirtualizerBase");
function Zl(e) {
  return eh({
    observeElementRect: Gl,
    observeElementOffset: Yl,
    scrollToFn: Ql,
    ...e
  });
}
a(Zl, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var Jl = /* @__PURE__ */ a(({
  parentRef: e,
  rowVirtualizer: t,
  selectedItem: o
}) => {
  V(() => {
    let i = /* @__PURE__ */ a((n) => {
      if (!e.current)
        return;
      let r = t.options.count, l = document.activeElement, u = parseInt(l.getAttribute("data-index") || "-1", 10), c = l.tagName === "INPUT",
      p = /* @__PURE__ */ a(() => document.querySelector('[data-index="0"]'), "getFirstElement"), d = /* @__PURE__ */ a(() => document.querySelector(
      `[data-index="${r - 1}"]`), "getLastElement");
      if (n.code === "ArrowDown" && l) {
        if (n.stopPropagation(), c) {
          p()?.focus();
          return;
        }
        if (u === r - 1) {
          po(() => {
            t.scrollToIndex(0, { align: "start" });
          }), setTimeout(() => {
            p()?.focus();
          }, 100);
          return;
        }
        if (o === u) {
          document.querySelector(
            `[data-index-position="${o}_first"]`
          )?.focus();
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("last")) {
          document.querySelector(
            `[data-index="${o + 1}"]`
          )?.focus();
          return;
        }
        l.nextElementSibling?.focus();
      }
      if (n.code === "ArrowUp" && l) {
        if (c) {
          po(() => {
            t.scrollToIndex(r - 1, { align: "start" });
          }), setTimeout(() => {
            d()?.focus();
          }, 100);
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("first")) {
          document.querySelector(
            `[data-index="${o}"]`
          )?.focus();
          return;
        }
        l.previousElementSibling?.focus();
      }
    }, "handleArrowKeys");
    return document.addEventListener("keydown", i, { capture: !0 }), () => {
      document.removeEventListener("keydown", i, { capture: !0 });
    };
  }, [t, o, e]);
}, "useArrowKeyNavigation");

// src/manager/components/sidebar/FileList.tsx
var eu = I("div")(({ theme: e }) => ({
  marginTop: "-16px",
  // after element which fades out the list
  "&::after": {
    content: '""',
    position: "fixed",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80px",
    background: `linear-gradient(${yn(e.barBg, 0)} 10%, ${e.barBg} 80%)`
  }
})), pr = I("div")(({ theme: e }) => ({
  height: "280px",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  position: "relative",
  "::-webkit-scrollbar": {
    display: "none"
  }
})), tu = I("li")(({ theme: e }) => ({
  ":focus-visible": {
    outline: "none",
    ".file-list-item": {
      borderRadius: "4px",
      background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
      "> svg": {
        display: "flex"
      }
    }
  }
})), dr = I("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
})), ou = I.div(({ theme: e, selected: t, disabled: o, error: i }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "4px",
  ...t && {
    borderRadius: "4px",
    background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  ...o && {
    cursor: "not-allowed",
    div: {
      color: `${e.color.mediumdark} !important`
    }
  },
  ...i && {
    background: e.base === "light" ? "#00000011" : "#00000033"
  },
  "&:hover": {
    background: i ? "#00000022" : e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  }
})), ru = I("ul")({
  margin: 0,
  padding: "0 0 0 0",
  width: "100%",
  position: "relative"
}), nu = I("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "calc(100% - 50px)"
}), iu = I("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.color.secondary
})), su = I("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.base === "dark" ? e.color.lighter : e.color.darkest,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), au = I("div")(({ theme: e }) => ({
  color: e.color.mediumdark,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
})), lu = I("ul")(({ theme: e }) => ({
  margin: 0,
  padding: 0
})), uu = I("li")(({ theme: e, error: t }) => ({
  padding: "8px 16px 8px 16px",
  marginLeft: "30px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "4px",
  ":focus-visible": {
    outline: "none"
  },
  ...t && {
    background: "#F9ECEC",
    color: e.color.negativeText
  },
  "&:hover,:focus-visible": {
    background: t ? "#F9ECEC" : e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  "> div > svg": {
    color: t ? e.color.negativeText : e.color.secondary
  }
})), cu = I("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "calc(100% - 20px)"
})), pu = I("span")(({ theme: e }) => ({
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "calc(100% - 160px)",
  display: "inline-block"
})), du = I("span")(({ theme: e }) => ({
  display: "inline-block",
  padding: `1px ${e.appBorderRadius}px`,
  borderRadius: "2px",
  fontSize: "10px",
  color: e.base === "dark" ? e.color.lightest : "#727272",
  backgroundColor: e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5"
})), fu = I("div")(({ theme: e }) => ({
  textAlign: "center",
  maxWidth: "334px",
  margin: "16px auto 50px auto",
  fontSize: "14px",
  color: e.base === "dark" ? e.color.lightest : "#000"
})), mu = I("p")(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.defaultText : e.color.mediumdark
}));

// src/manager/components/sidebar/FileSearchListSkeleton.tsx
var th = I("div")(({ theme: e }) => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px"
})), oh = I("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderRadius: "3px"
}), rh = I.div(({ theme: e }) => ({
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginTop: "1px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`
})), hu = I.div(({ theme: e }) => ({
  height: "16px",
  borderRadius: "3px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  width: "100%",
  maxWidth: "100%",
  "+ div": {
    marginTop: "6px"
  }
})), gu = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(pr, null, [1, 2, 3].map((e) => /* @__PURE__ */ s.createElement(dr, { key: e },
/* @__PURE__ */ s.createElement(th, null, /* @__PURE__ */ s.createElement(rh, null), /* @__PURE__ */ s.createElement(oh, null, /* @__PURE__ */ s.
createElement(hu, { style: { width: "90px" } }), /* @__PURE__ */ s.createElement(hu, { style: { width: "300px" } })))))), "FileSearchListLoa\
dingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var yu = I(Zs)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), nh = I(Ut)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), bu = no(/* @__PURE__ */ a(function({
  isLoading: t,
  searchResults: o,
  onNewStory: i,
  errorItemId: n
}) {
  let [r, l] = X(null), u = s.useRef(), c = K(() => [...o ?? []].sort((m, g) => {
    let S = m.exportedComponents === null || m.exportedComponents?.length === 0, _ = m.storyFileExists, h = g.exportedComponents === null ||
    g.exportedComponents?.length === 0, v = g.storyFileExists;
    return _ && !v ? -1 : v && !_ || S && !h ? 1 : !S && h ? -1 : 0;
  }), [o]), p = o?.length || 0, d = Zl({
    count: p,
    // @ts-expect-error (non strict)
    getScrollElement: /* @__PURE__ */ a(() => u.current, "getScrollElement"),
    paddingStart: 16,
    paddingEnd: 40,
    estimateSize: /* @__PURE__ */ a(() => 54, "estimateSize"),
    overscan: 2
  });
  Jl({ rowVirtualizer: d, parentRef: u, selectedItem: r });
  let b = A(
    ({ virtualItem: m, searchResult: g, itemId: S }) => {
      g?.exportedComponents?.length > 1 ? l((_) => _ === m.index ? null : m.index) : g?.exportedComponents?.length === 1 && i({
        componentExportName: g.exportedComponents[0].name,
        componentFilePath: g.filepath,
        componentIsDefaultExport: g.exportedComponents[0].default,
        selectedItemId: S,
        componentExportCount: 1
      });
    },
    [i]
  ), f = A(
    ({ searchResult: m, component: g, id: S }) => {
      i({
        componentExportName: g.name,
        componentFilePath: m.filepath,
        componentIsDefaultExport: g.default,
        selectedItemId: S,
        // @ts-expect-error (non strict)
        componentExportCount: m.exportedComponents.length
      });
    },
    [i]
  ), y = A(
    ({ virtualItem: m, selected: g, searchResult: S }) => {
      let _ = n === S.filepath, h = g === m.index;
      return /* @__PURE__ */ s.createElement(
        dr,
        {
          "aria-expanded": h,
          "aria-controls": `file-list-export-${m.index}`,
          id: `file-list-item-wrapper-${m.index}`
        },
        /* @__PURE__ */ s.createElement(
          ou,
          {
            className: "file-list-item",
            selected: h,
            error: _,
            disabled: S.exportedComponents === null || S.exportedComponents?.length === 0
          },
          /* @__PURE__ */ s.createElement(iu, { error: _ }, /* @__PURE__ */ s.createElement(cn, null)),
          /* @__PURE__ */ s.createElement(nu, null, /* @__PURE__ */ s.createElement(su, { error: _ }, S.filepath.split("/").at(-1)), /* @__PURE__ */ s.
          createElement(au, null, S.filepath)),
          h ? /* @__PURE__ */ s.createElement(nh, null) : /* @__PURE__ */ s.createElement(yu, null)
        ),
        S?.exportedComponents?.length > 1 && h && /* @__PURE__ */ s.createElement(
          lu,
          {
            role: "region",
            id: `file-list-export-${m.index}`,
            "aria-labelledby": `file-list-item-wrapper-${m.index}`,
            onClick: (v) => {
              v.stopPropagation();
            },
            onKeyUp: (v) => {
              v.key === "Enter" && v.stopPropagation();
            }
          },
          S.exportedComponents?.map((v, x) => {
            let w = n === `${S.filepath}_${x}`, T = x === 0 ? "first" : (
              // @ts-expect-error (non strict)
              x === S.exportedComponents.length - 1 ? "last" : "middle"
            );
            return /* @__PURE__ */ s.createElement(
              uu,
              {
                tabIndex: 0,
                "data-index-position": `${m.index}_${T}`,
                key: v.name,
                error: w,
                onClick: () => {
                  f({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${x}`
                  });
                },
                onKeyUp: (O) => {
                  O.key === "Enter" && f({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${x}`
                  });
                }
              },
              /* @__PURE__ */ s.createElement(cu, null, /* @__PURE__ */ s.createElement(cn, null), v.default ? /* @__PURE__ */ s.createElement(
              s.Fragment, null, /* @__PURE__ */ s.createElement(pu, null, S.filepath.split("/").at(-1)?.split(".")?.at(0)), /* @__PURE__ */ s.
              createElement(du, null, "Default export")) : v.name),
              /* @__PURE__ */ s.createElement(yu, null)
            );
          })
        )
      );
    },
    [f, n]
  );
  return t && (o === null || o?.length === 0) ? /* @__PURE__ */ s.createElement(gu, null) : o?.length === 0 ? /* @__PURE__ */ s.createElement(
  fu, null, /* @__PURE__ */ s.createElement("p", null, "We could not find any file with that name"), /* @__PURE__ */ s.createElement(mu, null,
  "You may want to try using different keywords, check for typos, and adjust your filters")) : c?.length > 0 ? /* @__PURE__ */ s.createElement(
  eu, null, /* @__PURE__ */ s.createElement(pr, { ref: u }, /* @__PURE__ */ s.createElement(
    ru,
    {
      style: {
        height: `${d.getTotalSize()}px`
      }
    },
    d.getVirtualItems().map((m) => {
      let g = c[m.index], S = g.exportedComponents === null || g.exportedComponents?.length === 0, _ = {};
      return /* @__PURE__ */ s.createElement(
        tu,
        {
          key: m.key,
          "data-index": m.index,
          ref: d.measureElement,
          onClick: () => {
            b({
              virtualItem: m,
              itemId: g.filepath,
              searchResult: g
            });
          },
          onKeyUp: (h) => {
            h.key === "Enter" && b({
              virtualItem: m,
              itemId: g.filepath,
              searchResult: g
            });
          },
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${m.start}px)`
          },
          tabIndex: 0
        },
        S ? /* @__PURE__ */ s.createElement(
          Ae,
          {
            ..._,
            style: { width: "100%" },
            hasChrome: !1,
            closeOnOutsideClick: !0,
            tooltip: /* @__PURE__ */ s.createElement(
              Wo,
              {
                note: S ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
              }
            )
          },
          /* @__PURE__ */ s.createElement(
            y,
            {
              searchResult: g,
              selected: r,
              virtualItem: m
            }
          )
        ) : /* @__PURE__ */ s.createElement(
          y,
          {
            ..._,
            key: m.index,
            searchResult: g,
            selected: r,
            virtualItem: m
          }
        )
      );
    })
  ))) : null;
}, "FileSearchList"));

// src/manager/components/sidebar/FileSearchModal.tsx
var ih = 418, sh = I(vt)(() => ({
  boxShadow: "none",
  background: "transparent"
})), ah = I.div(({ theme: e, height: t }) => ({
  backgroundColor: e.background.bar,
  borderRadius: 6,
  boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px",
  padding: "16px",
  transition: "height 0.3s",
  height: t ? `${t + 32}px` : "auto",
  overflow: "hidden"
})), lh = I(vt.Content)(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.lighter : e.color.mediumdark
})), uh = I(Fo.Input)(({ theme: e }) => ({
  paddingLeft: 40,
  paddingRight: 28,
  fontSize: 14,
  height: 40,
  ...e.base === "light" && {
    color: e.color.darkest
  },
  "::placeholder": {
    color: e.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${e.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), ch = I.div({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
}), ph = I.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  left: 16,
  zIndex: 1,
  pointerEvents: "none",
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%"
})), dh = I.div(({ theme: e }) => ({
  position: "absolute",
  top: 0,
  right: 16,
  zIndex: 1,
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  animation: "spin 1s linear infinite"
})), fh = I(vt.Error)({
  position: "absolute",
  padding: "8px 40px 8px 16px",
  bottom: 0,
  maxHeight: "initial",
  width: "100%",
  div: {
    wordBreak: "break-word"
  },
  "> div": {
    padding: 0
  }
}), mh = I($o)({
  position: "absolute",
  top: 4,
  right: -24,
  cursor: "pointer"
}), vu = /* @__PURE__ */ a(({
  open: e,
  onOpenChange: t,
  fileSearchQuery: o,
  setFileSearchQuery: i,
  isLoading: n,
  error: r,
  searchResults: l,
  onCreateNewStory: u,
  setError: c,
  container: p
}) => {
  let [d, b] = Ul(), [f, y] = X(b.height), [, m] = ds(), [g, S] = X(o);
  return V(() => {
    f < b.height && y(b.height);
  }, [b.height, f]), /* @__PURE__ */ s.createElement(
    sh,
    {
      height: ih,
      width: 440,
      open: e,
      onOpenChange: t,
      onEscapeKeyDown: () => {
        t(!1);
      },
      onInteractOutside: () => {
        t(!1);
      },
      container: p
    },
    /* @__PURE__ */ s.createElement(ah, { height: o === "" ? b.height : f }, /* @__PURE__ */ s.createElement(lh, { ref: d }, /* @__PURE__ */ s.
    createElement(vt.Header, null, /* @__PURE__ */ s.createElement(vt.Title, null, "Add a new story"), /* @__PURE__ */ s.createElement(vt.Description,
    null, "We will create a new story for your component")), /* @__PURE__ */ s.createElement(ch, null, /* @__PURE__ */ s.createElement(ph, null,
    /* @__PURE__ */ s.createElement(Yo, null)), /* @__PURE__ */ s.createElement(
      uh,
      {
        placeholder: "./components/**/*.tsx",
        type: "search",
        required: !0,
        autoFocus: !0,
        value: g,
        onChange: (_) => {
          let h = _.target.value;
          S(h), m(() => {
            i(h);
          });
        }
      }
    ), n && /* @__PURE__ */ s.createElement(dh, null, /* @__PURE__ */ s.createElement(dt, null))), /* @__PURE__ */ s.createElement(
      bu,
      {
        errorItemId: r?.selectedItemId,
        isLoading: n,
        searchResults: l,
        onNewStory: u
      }
    ))),
    r && o !== "" && /* @__PURE__ */ s.createElement(fh, null, /* @__PURE__ */ s.createElement("div", null, r.error), /* @__PURE__ */ s.createElement(
      mh,
      {
        onClick: () => {
          c(null);
        }
      }
    ))
  );
}, "FileSearchModal");

// src/manager/components/sidebar/FileSearchModal.utils.tsx
function xu(e) {
  return Object.keys(e).reduce(
    (o, i) => {
      let n = e[i];
      if (typeof n.control == "object" && "type" in n.control)
        switch (n.control.type) {
          case "object":
            o[i] = {};
            break;
          case "inline-radio":
          case "radio":
          case "inline-check":
          case "check":
          case "select":
          case "multi-select":
            o[i] = n.control.options?.[0];
            break;
          case "color":
            o[i] = "#000000";
            break;
          default:
            break;
        }
      return fr(n.type, o, i), o;
    },
    {}
  );
}
a(xu, "extractSeededRequiredArgs");
function fr(e, t, o) {
  if (!(typeof e == "string" || !e.required))
    switch (e.name) {
      case "boolean":
        t[o] = !0;
        break;
      case "number":
        t[o] = 0;
        break;
      case "string":
        t[o] = o;
        break;
      case "array":
        t[o] = [];
        break;
      case "object":
        t[o] = {}, Object.entries(e.value ?? {}).forEach(([i, n]) => {
          fr(n, t[o], i);
        });
        break;
      case "function":
        t[o] = () => {
        };
        break;
      case "intersection":
        e.value?.every((i) => i.name === "object") && (t[o] = {}, e.value?.forEach((i) => {
          i.name === "object" && Object.entries(i.value ?? {}).forEach(([n, r]) => {
            fr(r, t[o], n);
          });
        }));
        break;
      case "union":
        e.value?.[0] !== void 0 && fr(e.value[0], t, o);
        break;
      case "enum":
        e.value?.[0] !== void 0 && (t[o] = e.value?.[0]);
        break;
      case "other":
        typeof e.value == "string" && e.value === "tuple" && (t[o] = []);
        break;
      default:
        break;
    }
}
a(fr, "setArgType");
async function mr(e, t, o = 1) {
  if (o > 10)
    throw new Error("We could not select the new story. Please try again.");
  try {
    await e(t);
  } catch {
    return await new Promise((n) => setTimeout(n, 500)), mr(e, t, o + 1);
  }
}
a(mr, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var hh = /* @__PURE__ */ a((e) => JSON.stringify(e, (t, o) => typeof o == "function" ? "__sb_empty_function_arg__" : o), "stringifyArgs"), Iu = /* @__PURE__ */ a(
({ open: e, onOpenChange: t }) => {
  let [o, i] = X(!1), [n, r] = X(""), l = $l(n, 600), u = ps(l), c = Q(null), [p, d] = X(
    null
  ), b = se(), [f, y] = X(null), m = A(
    (h) => {
      b.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${h} was created`
        },
        duration: 8e3,
        icon: /* @__PURE__ */ s.createElement(je, null)
      }), t(!1);
    },
    [b, t]
  ), g = A(() => {
    b.addNotification({
      id: "create-new-story-file-error",
      content: {
        headline: "Story already exists",
        subHeadline: "Successfully navigated to existing story"
      },
      duration: 8e3,
      icon: /* @__PURE__ */ s.createElement(je, null)
    }), t(!1);
  }, [b, t]), S = A(() => {
    i(!0);
    let h = Ue.getChannel(), v = /* @__PURE__ */ a((x) => {
      x.id === u && (x.success ? y(x.payload.files) : d({ error: x.error }), h.off(_o, v), i(!1), c.current = null);
    }, "set");
    return h.on(_o, v), u !== "" && c.current !== u ? (c.current = u, h.emit(ts, {
      id: u,
      payload: {}
    })) : (y(null), i(!1)), () => {
      h.off(_o, v);
    };
  }, [u]), _ = A(
    async ({
      componentExportName: h,
      componentFilePath: v,
      componentIsDefaultExport: x,
      componentExportCount: w,
      selectedItemId: T
    }) => {
      try {
        let O = Ue.getChannel(), k = await Eo(O, Ji, es, {
          componentExportName: h,
          componentFilePath: v,
          componentIsDefaultExport: x,
          componentExportCount: w
        });
        d(null);
        let C = k.storyId;
        await mr(b.selectStory, C);
        try {
          let P = (await Eo(O, Qi, Xi, {
            storyId: C
          })).argTypes, D = xu(P);
          await Eo(
            O,
            rs,
            ns,
            {
              args: hh(D),
              importPath: k.storyFilePath,
              csfId: C
            }
          );
        } catch {
        }
        m(h), S();
      } catch (O) {
        switch (O?.payload?.type) {
          case "STORY_FILE_EXISTS":
            let k = O;
            await mr(b.selectStory, k.payload.kind), g();
            break;
          default:
            d({ selectedItemId: T, error: O?.message });
            break;
        }
      }
    },
    [b?.selectStory, m, S, g]
  );
  return V(() => {
    d(null);
  }, [u]), V(() => S(), [S]), /* @__PURE__ */ s.createElement(
    vu,
    {
      error: p,
      fileSearchQuery: n,
      fileSearchQueryDeferred: u,
      onCreateNewStory: _,
      isLoading: o,
      onOpenChange: t,
      open: e,
      searchResults: f,
      setError: d,
      setFileSearchQuery: r
    }
  );
}, "CreateNewStoryFileModal");

// src/manager/components/sidebar/HighlightStyles.tsx
var Su = /* @__PURE__ */ a(({ refId: e, itemId: t }) => /* @__PURE__ */ s.createElement(
  Rt,
  {
    styles: ({ color: o }) => {
      let i = he(0.85, o.secondary);
      return {
        [`[data-ref-id="${e}"][data-item-id="${t}"]:not([data-selected="true"])`]: {
          '&[data-nodetype="component"], &[data-nodetype="group"]': {
            background: i,
            "&:hover, &:focus": { background: i }
          },
          '&[data-nodetype="story"], &[data-nodetype="document"]': {
            color: o.defaultText,
            background: i,
            "&:hover, &:focus": { background: i }
          }
        }
      };
    }
  }
), "HighlightStyles");

// src/manager/utils/tree.ts
var Jt = Fe(or(), 1);
var { document: _u, window: gh } = ne, hr = /* @__PURE__ */ a((e, t) => !t || t === ot ? e : `${t}_${e}`, "createId"), Eu = /* @__PURE__ */ a(
(e, t) => `${_u.location.pathname}?path=/${e.type}/${hr(e.id, t)}`, "getLink");
var wu = (0, Jt.default)(1e3)((e, t) => t[e]), yh = (0, Jt.default)(1e3)((e, t) => {
  let o = wu(e, t);
  return o && o.type !== "root" ? wu(o.parent, t) : void 0;
}), Tu = (0, Jt.default)(1e3)((e, t) => {
  let o = yh(e, t);
  return o ? [o, ...Tu(o.id, t)] : [];
}), go = (0, Jt.default)(1e3)(
  (e, t) => Tu(t, e).map((o) => o.id)
), tt = (0, Jt.default)(1e3)((e, t, o) => {
  let i = e[t];
  return (i.type === "story" || i.type === "docs" ? [] : i.children).reduce((r, l) => {
    let u = e[l];
    return !u || o && (u.type === "story" || u.type === "docs") || r.push(l, ...tt(e, l, o)), r;
  }, []);
});
function ku(e, t) {
  let o = e.type !== "root" && e.parent ? t.index[e.parent] : null;
  return o ? [...ku(o, t), o.name] : t.id === ot ? [] : [t.title || t.id];
}
a(ku, "getPath");
var Bn = /* @__PURE__ */ a((e, t) => ({ ...e, refId: t.id, path: ku(e, t) }), "searchItem");
function Ou(e, t, o) {
  let i = t + o % e.length;
  return i < 0 && (i = e.length + i), i >= e.length && (i -= e.length), i;
}
a(Ou, "cycle");
var Tt = /* @__PURE__ */ a((e, t = !1) => {
  if (!e)
    return;
  let { top: o, bottom: i } = e.getBoundingClientRect();
  o >= 0 && i <= (gh.innerHeight || _u.documentElement.clientHeight) || e.scrollIntoView({ block: t ? "center" : "nearest" });
}, "scrollIntoView"), Pu = /* @__PURE__ */ a((e, t, o, i) => {
  switch (!0) {
    case t:
      return "auth";
    case o:
      return "error";
    case e:
      return "loading";
    case i:
      return "empty";
    default:
      return "ready";
  }
}, "getStateType"), kt = /* @__PURE__ */ a((e, t) => !e || !t ? !1 : e === t ? !0 : kt(e.parentElement || void 0, t), "isAncestor"), Cu = /* @__PURE__ */ a(
(e) => e.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName"), Au = /* @__PURE__ */ a((e, t) => Cu(e) === Cu(t), "isStoryHoistable");

// global-externals:@storybook/core/client-logger
var iP = __STORYBOOK_CLIENT_LOGGER__, { deprecate: sP, logger: Du, once: aP, pretty: lP } = __STORYBOOK_CLIENT_LOGGER__;

// src/manager/components/sidebar/Loader.tsx
var Mu = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3], bh = I.div(
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth: e = 0 }) => ({
    marginLeft: e * 15,
    maxWidth: 85 - e * 5
  }),
  ({ theme: e }) => e.animation.inlineGlow,
  ({ theme: e }) => ({
    background: e.appBorderColor
  })
), yo = I.div({
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
}), Lu = /* @__PURE__ */ a(({ size: e }) => {
  let t = Math.ceil(e / Mu.length), o = Array.from(Array(t)).fill(Mu).flat().slice(0, e);
  return /* @__PURE__ */ s.createElement(Ce, null, o.map((i, n) => /* @__PURE__ */ s.createElement(bh, { depth: i, key: n })));
}, "Loader");

// src/manager/components/sidebar/RefBlocks.tsx
var { window: Nu } = ne, vh = I.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0
})), Hn = I.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: e.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
})), xh = I.pre(
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme: e }) => ({
    color: e.color.dark
  })
), Fu = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let [o, i] = X(!1), n = A(() => {
    Nu.document.location.reload();
  }, []), r = A((l) => {
    l.preventDefault();
    let u = Nu.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), c = setInterval(() => {
      u ? u.closed && (clearInterval(c), i(!0)) : (Du.error("unable to access loginUrl window"), clearInterval(c));
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(yo, null, /* @__PURE__ */ s.createElement(nt, null, o ? /* @__PURE__ */ s.createElement(Ce, null, /* @__PURE__ */ s.
  createElement(Hn, null, "Authentication on ", /* @__PURE__ */ s.createElement("strong", null, e), " concluded. Refresh the page to fetch t\
his Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ie, { small: !0, gray: !0, onClick: n }, /* @__PURE__ */ s.
  createElement(dt, null), "Refresh now"))) : /* @__PURE__ */ s.createElement(Ce, null, /* @__PURE__ */ s.createElement(Hn, null, "Sign in t\
o browse this Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ie, { small: !0, gray: !0, onClick: r },
  /* @__PURE__ */ s.createElement(qo, null), "Sign in")))));
}, "AuthBlock"), Bu = /* @__PURE__ */ a(({ error: e }) => /* @__PURE__ */ s.createElement(yo, null, /* @__PURE__ */ s.createElement(nt, null,
/* @__PURE__ */ s.createElement(vh, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ s.createElement("br", null),
/* @__PURE__ */ s.createElement(
  Ae,
  {
    tooltip: /* @__PURE__ */ s.createElement(xh, null, /* @__PURE__ */ s.createElement(Us, { error: e }))
  },
  /* @__PURE__ */ s.createElement(Pe, { isButton: !0 }, "View error ", /* @__PURE__ */ s.createElement(Ut, null))
), " ", /* @__PURE__ */ s.createElement(Pe, { withArrow: !0, href: "https://storybook.js.org/docs", cancel: !1, target: "_blank" }, "View do\
cs")))), "ErrorBlock"), Ih = I(nt)({
  display: "flex"
}), Sh = I(nt)({
  flex: 1
}), Hu = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(yo, null, /* @__PURE__ */ s.createElement(Ih, { col: 1 }, /* @__PURE__ */ s.
createElement(Sh, null, /* @__PURE__ */ s.createElement(Hn, null, e ? /* @__PURE__ */ s.createElement(s.Fragment, null, "Oh no! Your Storybo\
ok is empty. Possible reasons why:", /* @__PURE__ */ s.createElement("ul", null, /* @__PURE__ */ s.createElement("li", null, "The glob speci\
fied in ", /* @__PURE__ */ s.createElement("code", null, "main.js"), " isn't correct."), /* @__PURE__ */ s.createElement("li", null, "No sto\
ries are defined in your story files."), /* @__PURE__ */ s.createElement("li", null, "You're using filter-functions, and all stories are fil\
tered away.")), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null, "This composed storybook is empty, maybe you're using filter-functi\
ons, and all stories are filtered away."))))), "EmptyBlock"), zu = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(yo, null,
/* @__PURE__ */ s.createElement(Lu, { size: e ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: wh, window: Ch } = ne, _h = I.aside(({ theme: e }) => ({
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: e.layoutMargin
  }
})), Eh = I.button(({ theme: e }) => ({
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
  color: e.base === "light" ? he(0.3, e.color.defaultText) : he(0.6, e.color.defaultText),
  "&:hover": {
    color: e.barSelectedColor
  },
  "&:focus": {
    color: e.barSelectedColor,
    borderColor: e.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
})), Ot = I.span(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Pt = I.a(({ theme: e }) => ({
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: e.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${e.appBorderColor}`
  },
  "&:hover": {
    background: e.background.hoverable,
    color: e.color.darker
  },
  "&:link": {
    color: e.color.darker
  },
  "&:active": {
    color: e.color.darker
  },
  "&:focus": {
    color: e.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
})), Th = I.div({
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
}), kh = I.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s1,
  fontWeight: e.typography.weight.regular,
  color: e.base === "light" ? he(0.3, e.color.defaultText) : he(0.6, e.color.defaultText),
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
})), Oh = /* @__PURE__ */ a(({ url: e, versions: t }) => {
  let o = K(() => {
    let i = Object.entries(t).find(([n, r]) => r === e);
    return i && i[0] ? i[0] : "current";
  }, [e, t]);
  return /* @__PURE__ */ s.createElement(kh, null, /* @__PURE__ */ s.createElement("span", null, o), /* @__PURE__ */ s.createElement(Ut, null));
}, "CurrentVersion"), Ru = s.memo(
  cs(
    ({ state: e, ...t }, o) => {
      let i = se(), n = K(() => Object.values(t.index || {}), [t.index]), r = K(
        () => n.filter((u) => u.type === "component").length,
        [n]
      ), l = K(
        () => n.filter((u) => u.type === "docs" || u.type === "story").length,
        [n]
      );
      return /* @__PURE__ */ s.createElement(_h, { ref: o }, /* @__PURE__ */ s.createElement(
        Ae,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: /* @__PURE__ */ s.createElement(Th, null, /* @__PURE__ */ s.createElement(nt, { row: 0 }, e === "loading" && /* @__PURE__ */ s.
          createElement(Nh, { url: t.url }), (e === "error" || e === "empty") && /* @__PURE__ */ s.createElement(Lh, { url: t.url }), e === "\
ready" && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ph, { url: t.url, componentCount: r, leafCount: l }),
          t.sourceUrl && /* @__PURE__ */ s.createElement(Ah, { url: t.sourceUrl })), e === "auth" && /* @__PURE__ */ s.createElement(Dh, { ...t }),
          t.type === "auto-inject" && e !== "error" && /* @__PURE__ */ s.createElement(Fh, null), e !== "loading" && /* @__PURE__ */ s.createElement(
          Mh, null)))
        },
        /* @__PURE__ */ s.createElement(Eh, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ s.createElement(
        pn, null))
      ), t.versions && Object.keys(t.versions).length ? /* @__PURE__ */ s.createElement(
        Ae,
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: (u) => /* @__PURE__ */ s.createElement(
            it,
            {
              links: Object.entries(t.versions).map(([c, p]) => ({
                icon: p === t.url ? /* @__PURE__ */ s.createElement(je, null) : void 0,
                id: c,
                title: c,
                href: p,
                onClick: /* @__PURE__ */ a((d, b) => {
                  d.preventDefault(), i.changeRefVersion(t.id, b.href), u.onHide();
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ s.createElement(Oh, { url: t.url, versions: t.versions })
      ) : null);
    }
  )
), Ph = /* @__PURE__ */ a(({ url: e, componentCount: t, leafCount: o }) => {
  let i = _e();
  return /* @__PURE__ */ s.createElement(Pt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(pn,
  { color: i.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "View external Story\
book"), /* @__PURE__ */ s.createElement("div", null, "Explore ", t, " components and ", o, " stories in a new browser tab.")));
}, "ReadyMessage"), Ah = /* @__PURE__ */ a(({ url: e }) => {
  let t = _e();
  return /* @__PURE__ */ s.createElement(Pt, { href: e, target: "_blank" }, /* @__PURE__ */ s.createElement(ca, { color: t.color.secondary }),
  /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "View source code")));
}, "SourceCodeMessage"), Dh = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let o = _e(), i = A((n) => {
    n.preventDefault();
    let r = Ch.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), l = setInterval(() => {
      r ? r.closed && (clearInterval(l), wh.location.reload()) : clearInterval(l);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Pt, { onClick: i }, /* @__PURE__ */ s.createElement(qo, { color: o.color.gold }), /* @__PURE__ */ s.
  createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "Log in required"), /* @__PURE__ */ s.createElement("div", null, "You\
 need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage"), Mh = /* @__PURE__ */ a(() => {
  let e = _e();
  return /* @__PURE__ */ s.createElement(
    Pt,
    {
      href: "https://storybook.js.org/docs/react/sharing/storybook-composition",
      target: "_blank"
    },
    /* @__PURE__ */ s.createElement(qt, { color: e.color.green }),
    /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "Read Composition docs"), /* @__PURE__ */ s.createElement(
    "div", null, "Learn how to combine multiple Storybooks into one."))
  );
}, "ReadDocsMessage"), Lh = /* @__PURE__ */ a(({ url: e }) => {
  let t = _e();
  return /* @__PURE__ */ s.createElement(Pt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(Vo,
  { color: t.color.negative }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "Something went wrong"),
  /* @__PURE__ */ s.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage"), Nh = /* @__PURE__ */ a(({ url: e }) => {
  let t = _e();
  return /* @__PURE__ */ s.createElement(Pt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(ma,
  { color: t.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "Please wait"), /* @__PURE__ */ s.
  createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage"), Fh = /* @__PURE__ */ a(() => {
  let e = _e();
  return /* @__PURE__ */ s.createElement(
    Pt,
    {
      href: "https://storybook.js.org/docs/react/sharing/storybook-composition#improve-your-storybook-composition",
      target: "_blank"
    },
    /* @__PURE__ */ s.createElement(la, { color: e.color.gold }),
    /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Ot, null, "Reduce lag"), /* @__PURE__ */ s.createElement("d\
iv", null, "Learn how to speed up Composition performance."))
  );
}, "PerformanceDegradedMessage");

// src/manager/components/sidebar/IconSymbols.tsx
var Bh = I.svg`
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
`, ju = "icon--group", Wu = "icon--component", Vu = "icon--document", Ku = "icon--story", $u = "icon--success", Uu = "icon--error", qu = "ic\
on--warning", Gu = "icon--dot", Yu = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Bh, { "data-chromatic": "ignore" }, /* @__PURE__ */ s.
createElement("symbol", { id: ju }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v\
-8.5a.5.5 0 00-.5-.5H7z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Wu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0\
 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Vu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 \
1h-5a.5.5 0 01-.5-.5z",
    fill: "currentColor"
  }
), /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0\
 00.5.5h2V13H2V1z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Ku }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.\
5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: $u }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Uu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: qu }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.4\
97.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
    fill: "currentColor"
  }
)), /* @__PURE__ */ s.createElement("symbol", { id: Gu }, /* @__PURE__ */ s.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "curre\
ntColor" }))), "IconSymbols"), Me = /* @__PURE__ */ a(({ type: e }) => e === "group" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${ju}` }) : e === "component" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Wu}` }) : e === "document" ? /* @__PURE__ */ s.createElement(
"use", { xlinkHref: `#${Vu}` }) : e === "story" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Ku}` }) : e === "success" ? /* @__PURE__ */ s.
createElement("use", { xlinkHref: `#${$u}` }) : e === "error" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Uu}` }) : e === "war\
ning" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${qu}` }) : e === "dot" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${Gu}` }) : null, "UseSymbol");

// src/manager/utils/status.tsx
var Hh = I(Js)({
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
}), zh = I(Hh)(({ theme: { animation: e, color: t, base: o } }) => ({
  // specificity hack
  animation: `${e.glow} 1.5s ease-in-out infinite`,
  color: o === "light" ? t.mediumdark : t.darker
})), Rh = ["unknown", "pending", "success", "warn", "error"], bo = {
  unknown: [null, null],
  pending: [/* @__PURE__ */ s.createElement(zh, { key: "icon" }), "currentColor"],
  success: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Me, { type: "success" })),
    "currentColor"
  ],
  warn: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Me, { type: "warning" })),
    "#A15C20"
  ],
  error: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Me, { type: "error" })),
    "brown"
  ]
}, vo = /* @__PURE__ */ a((e) => Rh.reduce(
  (t, o) => e.includes(o) ? o : t,
  "unknown"
), "getHighestStatus");
function gr(e, t) {
  return Object.values(e).reduce((o, i) => {
    if (i.type === "group" || i.type === "component") {
      let n = tt(e, i.id, !1).map((l) => e[l]).filter((l) => l.type === "story"), r = vo(
        // @ts-expect-error (non strict)
        n.flatMap((l) => Object.values(t?.[l.id] || {})).map((l) => l.status)
      );
      r && (o[i.id] = r);
    }
    return o;
  }, {});
}
a(gr, "getGroupStatus");

// src/manager/components/sidebar/StatusButton.tsx
var Qu = /* @__PURE__ */ a(({ theme: e, status: t }) => {
  let o = e.base === "light" ? he(0.3, e.color.defaultText) : he(0.6, e.color.defaultText);
  return {
    color: {
      pending: o,
      success: e.color.positive,
      error: e.color.negative,
      warn: e.color.warning,
      unknown: o
    }[t]
  };
}, "withStatusColor"), Xu = I.div(Qu, {
  margin: 3
}), zn = I(J)(
  Qu,
  ({ theme: e, height: t, width: o }) => ({
    transition: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: o || 28,
    height: t || 28,
    "&:hover": {
      color: e.color.secondary
    },
    "&:focus": {
      color: e.color.secondary,
      borderColor: e.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    }
  }),
  ({ theme: e, selectedItem: t }) => t && {
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${e.color.secondary}`,
      background: "rgba(255, 255, 255, 0.2)"
    }
  }
);

// src/manager/components/sidebar/StatusContext.tsx
var Rn = Bt({}), Zu = /* @__PURE__ */ a((e) => {
  let { data: t, status: o, groupStatus: i } = ko(Rn), n = {
    counts: { pending: 0, success: 0, error: 0, warn: 0, unknown: 0 },
    statuses: { pending: {}, success: {}, error: {}, warn: {}, unknown: {} }
  };
  if (t && o && i && ["pending", "warn", "error"].includes(i[e.id]))
    for (let r of tt(t, e.id, !1))
      for (let l of Object.values(o[r] || {}))
        n.counts[l.status]++, n.statuses[l.status][r] = n.statuses[l.status][r] || [], n.statuses[l.status][r].push(l);
  return n;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var jh = I.div(({ theme: e, isExpanded: t }) => ({
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: he(0.4, e.textMutedColor),
  transform: t ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
})), At = /* @__PURE__ */ a(({ isExpanded: e }) => /* @__PURE__ */ s.createElement(jh, { isExpanded: e }, /* @__PURE__ */ s.createElement("s\
vg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fill: "#73828C",
    fillRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
    clipRule: "evenodd"
  }
))), "CollapseIcon");

// src/manager/components/sidebar/TreeNode.tsx
var mt = I.svg(
  ({ theme: e, type: t }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: t === "group" ? e.base === "dark" ? e.color.primary : e.color.ultraviolet : t === "component" ? e.color.secondary : t === "docume\
nt" ? e.base === "dark" ? e.color.gold : "#ff8300" : t === "story" ? e.color.seafoam : "currentColor"
  })
), Ju = I.button(({ theme: e, depth: t = 0, isExpandable: o = !1 }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  paddingLeft: `${(o ? 8 : 22) + t * 18}px`,
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 5,
  paddingBottom: 4
})), ec = I.a(({ theme: e, depth: t = 0 }) => ({
  width: "100%",
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  gap: 6,
  flex: 1,
  alignItems: "start",
  paddingLeft: `${22 + t * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  fontSize: `${e.typography.size.s2}px`,
  textDecoration: "none",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
})), tc = I.div(({ theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor
})), yr = I.div({
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
}), oc = s.memo(/* @__PURE__ */ a(function({
  children: t,
  isExpanded: o = !1,
  isExpandable: i = !1,
  ...n
}) {
  return /* @__PURE__ */ s.createElement(Ju, { isExpandable: i, tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(yr, null, i && /* @__PURE__ */ s.
  createElement(At, { isExpanded: o }), /* @__PURE__ */ s.createElement(mt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
  /* @__PURE__ */ s.createElement(Me, { type: "group" }))), t);
}, "GroupNode")), rc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, isExpanded: i, isExpandable: n, isSelected: r, ...l }) {
    return /* @__PURE__ */ s.createElement(Ju, { isExpandable: n, tabIndex: -1, ...l }, /* @__PURE__ */ s.createElement(yr, null, n && /* @__PURE__ */ s.
    createElement(At, { isExpanded: i }), /* @__PURE__ */ s.createElement(mt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "comp\
onent" }, /* @__PURE__ */ s.createElement(Me, { type: "component" }))), o);
  }, "ComponentNode")
), nc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, docsMode: i, ...n }) {
    return /* @__PURE__ */ s.createElement(ec, { tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(yr, null, /* @__PURE__ */ s.createElement(
    mt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ s.createElement(Me, { type: "document" }))), o);
  }, "DocumentNode")
), ic = s.memo(/* @__PURE__ */ a(function({
  theme: t,
  children: o,
  ...i
}) {
  return /* @__PURE__ */ s.createElement(ec, { tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(yr, null, /* @__PURE__ */ s.createElement(
  mt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ s.createElement(Me, { type: "story" }))), o);
}, "StoryNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function br(e, t, { signal: o, edges: i } = {}) {
  let n, r = null, l = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), c = /* @__PURE__ */ a(() => {
    r !== null && (e.apply(n, r), n = void 0, r = null);
  }, "invoke"), p = /* @__PURE__ */ a(() => {
    u && c(), y();
  }, "onTimerEnd"), d = null, b = /* @__PURE__ */ a(() => {
    d != null && clearTimeout(d), d = setTimeout(() => {
      d = null, p();
    }, t);
  }, "schedule"), f = /* @__PURE__ */ a(() => {
    d !== null && (clearTimeout(d), d = null);
  }, "cancelTimer"), y = /* @__PURE__ */ a(() => {
    f(), n = void 0, r = null;
  }, "cancel"), m = /* @__PURE__ */ a(() => {
    f(), c();
  }, "flush"), g = /* @__PURE__ */ a(function(...S) {
    if (o?.aborted)
      return;
    n = this, r = S;
    let _ = d == null;
    b(), l && _ && c();
  }, "debounced");
  return g.schedule = b, g.cancel = y, g.flush = m, o?.addEventListener("abort", y, { once: !0 }), g;
}
a(br, "debounce");

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function jn(e, t, { signal: o, edges: i = ["leading", "trailing"] } = {}) {
  let n = null, r = br(e, t, { signal: o, edges: i }), l = /* @__PURE__ */ a(function(...u) {
    n == null ? n = Date.now() : Date.now() - n >= t && (r.cancel(), r(...u)), r(...u);
  }, "throttled");
  return l.cancel = r.cancel, l.flush = r.flush, l;
}
a(jn, "throttle");

// src/manager/keybinding.ts
var Wh = {
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
}, Vh = { alt: !1, ctrl: !1, meta: !1, shift: !1 }, ht = /* @__PURE__ */ a((e, t) => {
  let { alt: o, ctrl: i, meta: n, shift: r } = e === !1 ? Vh : e;
  return !(typeof o == "boolean" && o !== t.altKey || typeof i == "boolean" && i !== t.ctrlKey || typeof n == "boolean" && n !== t.metaKey ||
  typeof r == "boolean" && r !== t.shiftKey);
}, "matchesModifiers"), We = /* @__PURE__ */ a((e, t) => t.code ? t.code === e : t.key === Wh[e], "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: Wn } = ne, Kh = /* @__PURE__ */ a(({
  refId: e,
  data: t,
  initialExpanded: o,
  highlightedRef: i,
  rootIds: n
}) => {
  let r = i.current?.refId === e ? go(t, i.current?.itemId) : [];
  return [...n, ...r].reduce(
    // @ts-expect-error (non strict)
    (l, u) => Object.assign(l, { [u]: u in o ? o[u] : !0 }),
    {}
  );
}, "initializeExpanded"), $h = /* @__PURE__ */ a(() => {
}, "noop"), sc = /* @__PURE__ */ a(({
  containerRef: e,
  isBrowsing: t,
  refId: o,
  data: i,
  initialExpanded: n,
  rootIds: r,
  highlightedRef: l,
  setHighlightedItemId: u,
  selectedStoryId: c,
  onSelectStoryId: p
}) => {
  let d = se(), [b, f] = zt(
    (h, { ids: v, value: x }) => v.reduce((w, T) => Object.assign(w, { [T]: x }), { ...h }),
    // @ts-expect-error (non strict)
    { refId: o, data: i, highlightedRef: l, rootIds: r, initialExpanded: n },
    Kh
  ), y = A(
    (h) => e.current?.querySelector(`[data-item-id="${h}"]`),
    [e]
  ), m = A(
    (h) => {
      u(h.getAttribute("data-item-id")), Tt(h);
    },
    [u]
  ), g = A(
    ({ ids: h, value: v }) => {
      if (f({ ids: h, value: v }), h.length === 1) {
        let x = e.current?.querySelector(
          `[data-item-id="${h[0]}"][data-ref-id="${o}"]`
        );
        x && m(x);
      }
    },
    [e, m, o]
  );
  V(() => {
    f({ ids: go(i, c), value: !0 });
  }, [i, c]);
  let S = A(() => {
    let h = Object.keys(i).filter((v) => !r.includes(v));
    f({ ids: h, value: !1 });
  }, [i, r]), _ = A(() => {
    f({ ids: Object.keys(i), value: !0 });
  }, [i]);
  return V(() => d ? (d.on(ro, S), d.on(Qr, _), () => {
    d.off(ro, S), d.off(Qr, _);
  }) : $h, [d, S, _]), V(() => {
    let h = Wn.getElementById("storybook-explorer-menu"), v = jn((x) => {
      let w = l.current?.refId === o && l.current?.itemId;
      if (!t || !e.current || !w || x.repeat || !ht(!1, x))
        return;
      let T = We("Enter", x), O = We("Space", x), k = We("ArrowLeft", x), C = We("ArrowRight", x);
      if (!(T || O || k || C))
        return;
      let E = y(w);
      if (!E || E.getAttribute("data-ref-id") !== o)
        return;
      let P = x.target;
      if (!kt(h, P) && !kt(P, h))
        return;
      if (P.hasAttribute("data-action")) {
        if (T || O)
          return;
        P.blur();
      }
      let D = E.getAttribute("data-nodetype");
      (T || O) && ["component", "story", "document"].includes(D) && p(w);
      let M = E.getAttribute("aria-expanded");
      if (k) {
        if (M === "true") {
          f({ ids: [w], value: !1 });
          return;
        }
        let N = E.getAttribute("data-parent-id"), U = N && y(N);
        if (U && U.getAttribute("data-highlightable") === "true") {
          m(U);
          return;
        }
        f({ ids: tt(i, w, !0), value: !1 });
        return;
      }
      C && (M === "false" ? g({ ids: [w], value: !0 }) : M === "true" && g({ ids: tt(i, w, !0), value: !0 }));
    }, 60);
    return Wn.addEventListener("keydown", v), () => Wn.removeEventListener("keydown", v);
  }, [
    e,
    t,
    o,
    i,
    l,
    u,
    p
  ]), [b, g];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var Uh = I.div((e) => ({
  marginTop: e.hasOrphans ? 20 : 0,
  marginBottom: 20
})), qh = I.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: he(0.93, e.color.secondary)
  }
})), ac = I.div(({ theme: e }) => ({
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  color: e.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  "&:hover, &:focus": {
    background: he(0.93, e.color.secondary),
    outline: "none"
  },
  '&[data-selected="true"]': {
    color: e.color.lightest,
    background: e.color.secondary,
    fontWeight: e.typography.weight.bold,
    "&&:hover, &&:focus": {
      background: e.color.secondary
    },
    svg: { color: e.color.lightest }
  },
  a: { color: "currentColor" }
})), Gh = I(Ie)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: e.color.secondary,
      width: "auto"
    }
  }
})), lc = s.memo(/* @__PURE__ */ a(function({
  item: t,
  status: o,
  groupStatus: i,
  refId: n,
  docsMode: r,
  isOrphan: l,
  isDisplayed: u,
  isSelected: c,
  isFullyExpanded: p,
  setFullyExpanded: d,
  isExpanded: b,
  setExpanded: f,
  onSelectStoryId: y,
  api: m
}) {
  let { isDesktop: g, isMobile: S, setMobileMenuOpen: _ } = Se(), h = _e(), { counts: v, statuses: x } = Zu(t);
  if (!u)
    return null;
  let w = hr(t.id, n);
  if (t.type === "story" || t.type === "docs") {
    let T = t.type === "docs" ? nc : ic, O = vo(Object.values(o || {}).map((P) => P.status)), [k, C] = bo[O], E = ["success", "error", "warn",
    "pending", "unknown"];
    return /* @__PURE__ */ s.createElement(
      ac,
      {
        key: w,
        className: "sidebar-item",
        "data-selected": c,
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "docs" ? "document" : "story",
        "data-highlightable": u
      },
      /* @__PURE__ */ s.createElement(
        T,
        {
          style: c ? {} : { color: C },
          href: Eu(t, n),
          id: w,
          depth: l ? t.depth : t.depth - 1,
          onClick: (P) => {
            P.preventDefault(), y(t.id), S && _(!1);
          },
          ...t.type === "docs" && { docsMode: r }
        },
        t.renderLabel?.(t, m) || t.name
      ),
      c && /* @__PURE__ */ s.createElement(Gh, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "#storybook-preview-wrapper" },
      "Skip to canvas")),
      k ? /* @__PURE__ */ s.createElement(
        Ae,
        {
          closeOnOutsideClick: !0,
          onClick: (P) => P.stopPropagation(),
          placement: "bottom",
          tooltip: () => /* @__PURE__ */ s.createElement(
            it,
            {
              links: Object.entries(o || {}).sort(
                (P, D) => E.indexOf(P[1].status) - E.indexOf(D[1].status)
              ).map(([P, D]) => ({
                id: P,
                title: D.title,
                description: D.description,
                icon: {
                  success: /* @__PURE__ */ s.createElement(da, { color: h.color.positive }),
                  error: /* @__PURE__ */ s.createElement(dn, { color: h.color.negative }),
                  warn: /* @__PURE__ */ s.createElement(fn, { color: h.color.warning }),
                  pending: /* @__PURE__ */ s.createElement(dt, { size: 12, color: h.color.defaultText }),
                  unknown: null
                }[D.status],
                onClick: /* @__PURE__ */ a(() => {
                  y(t.id), D.onClick?.();
                }, "onClick")
              }))
            }
          )
        },
        /* @__PURE__ */ s.createElement(zn, { type: "button", status: O, selectedItem: c }, k)
      ) : null
    );
  }
  if (t.type === "root")
    return /* @__PURE__ */ s.createElement(
      tc,
      {
        key: w,
        id: w,
        className: "sidebar-subheading",
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-nodetype": "root"
      },
      /* @__PURE__ */ s.createElement(
        qh,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (T) => {
            T.preventDefault(), f({ ids: [t.id], value: !b });
          },
          "aria-expanded": b
        },
        /* @__PURE__ */ s.createElement(At, { isExpanded: b }),
        t.renderLabel?.(t, m) || t.name
      ),
      b && /* @__PURE__ */ s.createElement(
        J,
        {
          className: "sidebar-subheading-action",
          "aria-label": p ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": p,
          onClick: (T) => {
            T.preventDefault(), d();
          }
        },
        p ? /* @__PURE__ */ s.createElement(ea, null) : /* @__PURE__ */ s.createElement(ta, null)
      )
    );
  if (t.type === "component" || t.type === "group") {
    let T = i?.[t.id], O = T ? bo[T][1] : null, k = t.type === "component" ? rc : oc, C = /* @__PURE__ */ a((E) => {
      let P = [];
      return v.error && P.push({
        id: "errors",
        icon: /* @__PURE__ */ s.createElement(dn, { color: h.color.negative }),
        title: `${v.error} ${v.error === 1 ? "story" : "stories"} with errors`,
        onClick: /* @__PURE__ */ a(() => {
          let [D, [M]] = Object.entries(x.error)[0];
          y(D), M.onClick?.(), E();
        }, "onClick")
      }), v.warn && P.push({
        id: "warnings",
        icon: /* @__PURE__ */ s.createElement(fn, { color: h.color.gold }),
        title: `${v.warn} ${v.warn === 1 ? "story" : "stories"} with warnings`,
        onClick: /* @__PURE__ */ a(() => {
          let [D, [M]] = Object.entries(x.warn)[0];
          y(D), M.onClick?.(), E();
        }, "onClick")
      }), P;
    }, "createLinks");
    return /* @__PURE__ */ s.createElement(
      ac,
      {
        key: w,
        className: "sidebar-item",
        "data-ref-id": n,
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "component" ? "component" : "group",
        "data-highlightable": u
      },
      /* @__PURE__ */ s.createElement(
        k,
        {
          id: w,
          style: O ? { color: O } : {},
          "aria-controls": t.children && t.children[0],
          "aria-expanded": b,
          depth: l ? t.depth : t.depth - 1,
          isComponent: t.type === "component",
          isExpandable: t.children && t.children.length > 0,
          isExpanded: b,
          onClick: (E) => {
            E.preventDefault(), f({ ids: [t.id], value: !b }), t.type === "component" && !b && g && y(t.id);
          },
          onMouseEnter: () => {
            t.type === "component" && m.emit(bt, {
              ids: [t.children[0]],
              options: { target: n }
            });
          }
        },
        t.renderLabel?.(t, m) || t.name
      ),
      ["error", "warn"].includes(T) && /* @__PURE__ */ s.createElement(
        Ae,
        {
          closeOnOutsideClick: !0,
          onClick: (E) => E.stopPropagation(),
          placement: "bottom",
          tooltip: ({ onHide: E }) => /* @__PURE__ */ s.createElement(it, { links: C(E) })
        },
        /* @__PURE__ */ s.createElement(zn, { type: "button", status: T }, /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0\
 0 6 6", width: "6", height: "6", type: "dot" }, /* @__PURE__ */ s.createElement(Me, { type: "dot" })))
      )
    );
  }
  return null;
}, "Node")), Yh = s.memo(/* @__PURE__ */ a(function({
  setExpanded: t,
  isFullyExpanded: o,
  expandableDescendants: i,
  ...n
}) {
  let r = A(
    () => t({ ids: i, value: !o }),
    [t, o, i]
  );
  return /* @__PURE__ */ s.createElement(
    lc,
    {
      ...n,
      setExpanded: t,
      isFullyExpanded: o,
      setFullyExpanded: r
    }
  );
}, "Root")), uc = s.memo(/* @__PURE__ */ a(function({
  isBrowsing: t,
  isMain: o,
  refId: i,
  data: n,
  status: r,
  docsMode: l,
  highlightedRef: u,
  setHighlightedItemId: c,
  selectedStoryId: p,
  onSelectStoryId: d
}) {
  let b = Q(null), f = se(), [y, m, g] = K(
    () => Object.keys(n).reduce(
      (C, E) => {
        let P = n[E];
        return P.type === "root" ? C[0].push(E) : P.parent || C[1].push(E), P.type === "root" && P.startCollapsed && (C[2][E] = !1), C;
      },
      [[], [], {}]
    ),
    [n]
  ), { expandableDescendants: S } = K(() => [...m, ...y].reduce(
    (C, E) => (C.expandableDescendants[E] = tt(n, E, !1).filter(
      (P) => !["story", "docs"].includes(n[P].type)
    ), C),
    { orphansFirst: [], expandableDescendants: {} }
  ), [n, y, m]), _ = K(() => Object.keys(n).filter((C) => {
    let E = n[C];
    if (E.type !== "component")
      return !1;
    let { children: P = [], name: D } = E;
    if (P.length !== 1)
      return !1;
    let M = n[P[0]];
    return M.type === "docs" ? !0 : M.type === "story" ? Au(M.name, D) : !1;
  }), [n]), h = K(
    () => Object.keys(n).filter((C) => !_.includes(C)),
    [_]
  ), v = K(() => _.reduce(
    (C, E) => {
      let { children: P, parent: D, name: M } = n[E], [N] = P;
      if (D) {
        let U = [...n[D].children];
        U[U.indexOf(E)] = N, C[D] = { ...n[D], children: U };
      }
      return C[N] = {
        ...n[N],
        name: M,
        parent: D,
        depth: n[N].depth - 1
      }, C;
    },
    { ...n }
  ), [n]), x = K(() => h.reduce(
    (C, E) => Object.assign(C, { [E]: go(v, E) }),
    {}
  ), [h, v]), [w, T] = sc({
    // @ts-expect-error (non strict)
    containerRef: b,
    isBrowsing: t,
    refId: i,
    data: v,
    initialExpanded: g,
    rootIds: y,
    highlightedRef: u,
    setHighlightedItemId: c,
    selectedStoryId: p,
    onSelectStoryId: d
  }), O = K(() => gr(v, r), [v, r]), k = K(() => h.map((C) => {
    let E = v[C], P = hr(C, i);
    if (E.type === "root") {
      let M = S[E.id], N = M.every((U) => w[U]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ s.createElement(
          Yh,
          {
            key: P,
            item: E,
            refId: i,
            isOrphan: !1,
            isDisplayed: !0,
            isSelected: p === C,
            isExpanded: !!w[C],
            setExpanded: T,
            isFullyExpanded: N,
            expandableDescendants: M,
            onSelectStoryId: d
          }
        )
      );
    }
    let D = !E.parent || x[C].every((M) => w[M]);
    return /* @__PURE__ */ s.createElement(
      lc,
      {
        api: f,
        key: P,
        item: E,
        status: r?.[C],
        groupStatus: O,
        refId: i,
        docsMode: l,
        isOrphan: m.some((M) => C === M || C.startsWith(`${M}-`)),
        isDisplayed: D,
        isSelected: p === C,
        isExpanded: !!w[C],
        setExpanded: T,
        onSelectStoryId: d
      }
    );
  }), [
    x,
    f,
    v,
    h,
    l,
    S,
    w,
    O,
    d,
    m,
    i,
    p,
    T,
    r
  ]);
  return /* @__PURE__ */ s.createElement(Rn.Provider, { value: { data: n, status: r, groupStatus: O } }, /* @__PURE__ */ s.createElement(Uh,
  { ref: b, hasOrphans: o && m.length > 0 }, /* @__PURE__ */ s.createElement(Yu, null), k));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var Qh = I.div(({ isMain: e }) => ({
  position: "relative",
  marginTop: e ? void 0 : 0
})), Xh = I.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${e.appBorderColor}`,
  color: e.base === "light" ? e.color.defaultText : he(0.2, e.color.defaultText)
})), Zh = I.div({
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
}), Jh = I.button(({ theme: e }) => ({
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  "&:focus": {
    borderColor: e.color.secondary,
    "span:first-of-type": {
      borderLeftColor: e.color.secondary
    }
  }
})), cc = s.memo(
  /* @__PURE__ */ a(function(t) {
    let { docsOptions: o } = ze(), i = se(), {
      index: n,
      id: r,
      title: l = r,
      isLoading: u,
      isBrowsing: c,
      selectedStoryId: p,
      highlightedRef: d,
      setHighlighted: b,
      loginUrl: f,
      type: y,
      expanded: m = !0,
      indexError: g,
      previewInitialized: S
    } = t, _ = K(() => n ? Object.keys(n).length : 0, [n]), h = Q(null), v = r === ot, w = u || (y === "auto-inject" && !S || y === "server-\
checked") || y === "unknown", C = Pu(w, !!f && _ === 0, !!g, !w && _ === 0), [E, P] = X(m);
    V(() => {
      n && p && n[p] && P(!0);
    }, [P, n, p]);
    let D = A(() => P((U) => !U), [P]), M = A(
      (U) => b({ itemId: U, refId: r }),
      [b]
    ), N = A(
      // @ts-expect-error (non strict)
      (U) => i && i.selectStory(U, void 0, { ref: !v && r }),
      [i, v, r]
    );
    return /* @__PURE__ */ s.createElement(s.Fragment, null, v || /* @__PURE__ */ s.createElement(
      Xh,
      {
        "aria-label": `${E ? "Hide" : "Show"} ${l} stories`,
        "aria-expanded": E
      },
      /* @__PURE__ */ s.createElement(Jh, { "data-action": "collapse-ref", onClick: D }, /* @__PURE__ */ s.createElement(At, { isExpanded: E }),
      /* @__PURE__ */ s.createElement(Zh, { title: l }, l)),
      /* @__PURE__ */ s.createElement(Ru, { ...t, state: C, ref: h })
    ), E && /* @__PURE__ */ s.createElement(Qh, { "data-title": l, isMain: v }, C === "auth" && /* @__PURE__ */ s.createElement(Fu, { id: r,
    loginUrl: f }), C === "error" && /* @__PURE__ */ s.createElement(Bu, { error: g }), C === "loading" && /* @__PURE__ */ s.createElement(zu,
    { isMain: v }), C === "empty" && /* @__PURE__ */ s.createElement(Hu, { isMain: v }), C === "ready" && /* @__PURE__ */ s.createElement(
      uc,
      {
        status: t.status,
        isBrowsing: c,
        isMain: v,
        refId: r,
        data: n,
        docsMode: o.docsMode,
        selectedStoryId: p,
        onSelectStoryId: N,
        highlightedRef: d,
        setHighlightedItemId: M
      }
    )));
  }, "Ref")
);

// src/manager/components/sidebar/useHighlighted.ts
var { document: Vn, window: pc } = ne, dc = /* @__PURE__ */ a((e) => e ? { itemId: e.storyId, refId: e.refId } : null, "fromSelection"), fc = /* @__PURE__ */ a(
({
  containerRef: e,
  isLoading: t,
  isBrowsing: o,
  dataset: i,
  selected: n
}) => {
  let r = dc(n), l = Q(r), [u, c] = X(r), p = se(), d = A(
    (f) => {
      l.current = f, c(f);
    },
    [l]
  ), b = A(
    (f, y = !1) => {
      let m = f.getAttribute("data-item-id"), g = f.getAttribute("data-ref-id");
      !m || !g || (d({ itemId: m, refId: g }), Tt(f, y));
    },
    [d]
  );
  return V(() => {
    let f = dc(n);
    if (d(f), f) {
      let { itemId: y, refId: m } = f;
      setTimeout(() => {
        Tt(
          // @ts-expect-error (non strict)
          e.current?.querySelector(`[data-item-id="${y}"][data-ref-id="${m}"]`),
          !0
          // make sure it's clearly visible by centering it
        );
      }, 0);
    }
  }, [i, l, e, n]), V(() => {
    let f = Vn.getElementById("storybook-explorer-menu"), y, m = /* @__PURE__ */ a((g) => {
      if (t || !o || !e.current || !ht(!1, g))
        return;
      let S = We("ArrowUp", g), _ = We("ArrowDown", g);
      if (!(S || _))
        return;
      let h = pc.requestAnimationFrame(() => {
        pc.cancelAnimationFrame(y), y = h;
        let v = g.target;
        if (!kt(f, v) && !kt(v, f))
          return;
        v.hasAttribute("data-action") && v.blur();
        let x = Array.from(
          e.current.querySelectorAll("[data-highlightable=true]")
        ), w = x.findIndex(
          (k) => k.getAttribute("data-item-id") === l.current?.itemId && k.getAttribute("data-ref-id") === l.current?.refId
        ), T = Ou(x, w, S ? -1 : 1), O = S ? T === x.length - 1 : T === 0;
        if (b(x[T], O), x[T].getAttribute("data-nodetype") === "component") {
          let { itemId: k, refId: C } = l.current, E = p.resolveStory(k, C === "storybook_internal" ? void 0 : C);
          E.type === "component" && p.emit(bt, {
            // @ts-expect-error (non strict)
            ids: [E.children[0]],
            options: { target: C }
          });
        }
      });
    }, "navigateTree");
    return Vn.addEventListener("keydown", m), () => Vn.removeEventListener("keydown", m);
  }, [t, o, l, b]), [u, d, l];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var mc = s.memo(/* @__PURE__ */ a(function({
  isLoading: t,
  isBrowsing: o,
  dataset: i,
  selected: n
}) {
  let r = Q(null), [l, u, c] = fc({
    // @ts-expect-error (non strict)
    containerRef: r,
    isLoading: t,
    isBrowsing: o,
    dataset: i,
    selected: n
  });
  return /* @__PURE__ */ s.createElement(
    "div",
    {
      ref: r,
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": l?.refId,
      "data-highlighted-item-id": l?.itemId
    },
    l && /* @__PURE__ */ s.createElement(Su, { ...l }),
    i.entries.map(([p, d]) => /* @__PURE__ */ s.createElement(
      cc,
      {
        ...d,
        key: p,
        isLoading: t,
        isBrowsing: o,
        selectedStoryId: n?.refId === d.id ? n.storyId : null,
        highlightedRef: c,
        setHighlighted: u
      }
    ))
  );
}, "Explorer"));

// src/manager/components/sidebar/Brand.tsx
var eg = I(zo)(({ theme: e }) => ({
  width: "auto",
  height: "22px !important",
  display: "block",
  color: e.base === "light" ? e.color.defaultText : e.color.lightest
})), tg = I.img({
  display: "block",
  maxWidth: "150px !important",
  maxHeight: "100px"
}), hc = I.a(({ theme: e }) => ({
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: e.color.secondary
  }
})), gc = xs(({ theme: e }) => {
  let { title: t = "Storybook", url: o = "./", image: i, target: n } = e.brand, r = n || (o === "./" ? "" : "_blank");
  if (i === null)
    return t === null ? null : o ? /* @__PURE__ */ s.createElement(hc, { href: o, target: r, dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ s.
    createElement("div", { dangerouslySetInnerHTML: { __html: t } });
  let l = i ? /* @__PURE__ */ s.createElement(tg, { src: i, alt: t }) : /* @__PURE__ */ s.createElement(eg, { alt: t });
  return o ? /* @__PURE__ */ s.createElement(hc, { title: t, href: o, target: r }, l) : /* @__PURE__ */ s.createElement("div", null, l);
});

// src/manager/components/sidebar/Menu.tsx
var yc = I(J)(({ highlighted: e, theme: t }) => ({
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
  ...e && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: t.background.app,
      border: `1px solid ${t.background.app}`,
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:after": {
      background: t.color.positive,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
      boxShadow: `0 0 0 2px ${he(0.88, t.color.secondary)}`
    }
  }
})), og = I.div({
  display: "flex",
  gap: 4
}), rg = /* @__PURE__ */ a(({ menu: e, onHide: t }) => {
  let o = K(() => e.map(({ onClick: i, ...n }) => ({
    ...n,
    onClick: /* @__PURE__ */ a((r, l) => {
      i && i(r, l), t();
    }, "onClick")
  })), [e, t]);
  return /* @__PURE__ */ s.createElement(it, { links: o });
}, "SidebarMenuList"), bc = /* @__PURE__ */ a(({ menu: e, isHighlighted: t, onClick: o }) => {
  let [i, n] = X(!1), { isMobile: r, setMobileMenuOpen: l } = Se();
  return r ? /* @__PURE__ */ s.createElement(og, null, /* @__PURE__ */ s.createElement(
    yc,
    {
      title: "About Storybook",
      "aria-label": "About Storybook",
      highlighted: t,
      active: !1,
      onClick: o
    },
    /* @__PURE__ */ s.createElement(un, null)
  ), /* @__PURE__ */ s.createElement(
    J,
    {
      title: "Close menu",
      "aria-label": "Close menu",
      onClick: () => l(!1)
    },
    /* @__PURE__ */ s.createElement(Ge, null)
  )) : /* @__PURE__ */ s.createElement(
    Ae,
    {
      placement: "top",
      closeOnOutsideClick: !0,
      tooltip: ({ onHide: u }) => /* @__PURE__ */ s.createElement(rg, { onHide: u, menu: e }),
      onVisibleChange: n
    },
    /* @__PURE__ */ s.createElement(
      yc,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: t,
        active: i
      },
      /* @__PURE__ */ s.createElement(un, null)
    )
  );
}, "SidebarMenu");

// src/manager/components/sidebar/Heading.tsx
var ng = I.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
})), ig = I.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
}), sg = I(Ie)(({ theme: e }) => ({
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: e.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
})), vc = /* @__PURE__ */ a(({
  menuHighlighted: e = !1,
  menu: t,
  skipLinkHref: o,
  extra: i,
  isLoading: n,
  onMenuClick: r,
  ...l
}) => /* @__PURE__ */ s.createElement(ig, { ...l }, o && /* @__PURE__ */ s.createElement(sg, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: o, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ s.createElement(ng, null, /* @__PURE__ */ s.createElement(gc, null)), n ?
null : i.map(({ id: u, render: c }) => /* @__PURE__ */ s.createElement(c, { key: u })), /* @__PURE__ */ s.createElement(bc, { menu: t, isHighlighted: e,
onClick: r })), "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var q = Fe(Zr());
var cg = Fe(wc());

// ../node_modules/compute-scroll-into-view/dist/index.js
var Cc = /* @__PURE__ */ a((e) => typeof e == "object" && e != null && e.nodeType === 1, "t"), _c = /* @__PURE__ */ a((e, t) => (!t || e !==
"hidden") && e !== "visible" && e !== "clip", "e"), Un = /* @__PURE__ */ a((e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let o = getComputedStyle(e, null);
    return _c(o.overflowY, t) || _c(o.overflowX, t) || ((i) => {
      let n = ((r) => {
        if (!r.ownerDocument || !r.ownerDocument.defaultView) return null;
        try {
          return r.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(i);
      return !!n && (n.clientHeight < i.scrollHeight || n.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, "n"), Or = /* @__PURE__ */ a((e, t, o, i, n, r, l, u) => r < e && l > t || r > e && l < t ? 0 : r <= e && u <= o || l >= t && u >= o ? r -
e - i : l > t && u < o || r < e && u > o ? l - t + n : 0, "o"), ug = /* @__PURE__ */ a((e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, "l"), Ec = /* @__PURE__ */ a((e, t) => {
  var o, i, n, r;
  if (typeof document > "u") return [];
  let { scrollMode: l, block: u, inline: c, boundary: p, skipOverflowHiddenElements: d } = t, b = typeof p == "function" ? p : (j) => j !== p;
  if (!Cc(e)) throw new TypeError("Invalid target");
  let f = document.scrollingElement || document.documentElement, y = [], m = e;
  for (; Cc(m) && b(m); ) {
    if (m = ug(m), m === f) {
      y.push(m);
      break;
    }
    m != null && m === document.body && Un(m) && !Un(document.documentElement) || m != null && Un(m, d) && y.push(m);
  }
  let g = (i = (o = window.visualViewport) == null ? void 0 : o.width) != null ? i : innerWidth, S = (r = (n = window.visualViewport) == null ?
  void 0 : n.height) != null ? r : innerHeight, { scrollX: _, scrollY: h } = window, { height: v, width: x, top: w, right: T, bottom: O, left: k } = e.
  getBoundingClientRect(), { top: C, right: E, bottom: P, left: D } = ((j) => {
    let G = window.getComputedStyle(j);
    return { top: parseFloat(G.scrollMarginTop) || 0, right: parseFloat(G.scrollMarginRight) || 0, bottom: parseFloat(G.scrollMarginBottom) ||
    0, left: parseFloat(G.scrollMarginLeft) || 0 };
  })(e), M = u === "start" || u === "nearest" ? w - C : u === "end" ? O + P : w + v / 2 - C + P, N = c === "center" ? k + x / 2 - D + E : c ===
  "end" ? T + E : k - D, U = [];
  for (let j = 0; j < y.length; j++) {
    let G = y[j], { height: H, width: W, top: z, right: te, bottom: F, left: B } = G.getBoundingClientRect();
    if (l === "if-needed" && w >= 0 && k >= 0 && O <= S && T <= g && w >= z && O <= F && k >= B && T <= te) return U;
    let L = getComputedStyle(G), R = parseInt(L.borderLeftWidth, 10), Z = parseInt(L.borderTopWidth, 10), re = parseInt(L.borderRightWidth, 10),
    ee = parseInt(L.borderBottomWidth, 10), pe = 0, ie = 0, ue = "offsetWidth" in G ? G.offsetWidth - G.clientWidth - R - re : 0, le = "offs\
etHeight" in G ? G.offsetHeight - G.clientHeight - Z - ee : 0, be = "offsetWidth" in G ? G.offsetWidth === 0 ? 0 : W / G.offsetWidth : 0, me = "\
offsetHeight" in G ? G.offsetHeight === 0 ? 0 : H / G.offsetHeight : 0;
    if (f === G) pe = u === "start" ? M : u === "end" ? M - S : u === "nearest" ? Or(h, h + S, S, Z, ee, h + M, h + M + v, v) : M - S / 2, ie =
    c === "start" ? N : c === "center" ? N - g / 2 : c === "end" ? N - g : Or(_, _ + g, g, R, re, _ + N, _ + N + x, x), pe = Math.max(0, pe +
    h), ie = Math.max(0, ie + _);
    else {
      pe = u === "start" ? M - z - Z : u === "end" ? M - F + ee + le : u === "nearest" ? Or(z, F, H, Z, ee + le, M, M + v, v) : M - (z + H /
      2) + le / 2, ie = c === "start" ? N - B - R : c === "center" ? N - (B + W / 2) + ue / 2 : c === "end" ? N - te + re + ue : Or(B, te, W,
      R, re + ue, N, N + x, x);
      let { scrollLeft: Te, scrollTop: de } = G;
      pe = me === 0 ? 0 : Math.max(0, Math.min(de + pe / me, G.scrollHeight - H / me + le)), ie = be === 0 ? 0 : Math.max(0, Math.min(Te + ie /
      be, G.scrollWidth - W / be + ue)), M += de - pe, N += Te - ie;
    }
    U.push({ el: G, top: pe, left: ie });
  }
  return U;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var Dt = /* @__PURE__ */ a(function() {
  return Dt = Object.assign || /* @__PURE__ */ a(function(t) {
    for (var o, i = 1, n = arguments.length; i < n; i++) {
      o = arguments[i];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
    }
    return t;
  }, "__assign"), Dt.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var pg = 0;
function Tc(e) {
  return typeof e == "function" ? e : Ne;
}
a(Tc, "cbToCb");
function Ne() {
}
a(Ne, "noop");
function Lc(e, t) {
  if (e) {
    var o = Ec(e, {
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    o.forEach(function(i) {
      var n = i.el, r = i.top, l = i.left;
      n.scrollTop = r, n.scrollLeft = l;
    });
  }
}
a(Lc, "scrollIntoView");
function kc(e, t, o) {
  var i = e === t || t instanceof o.Node && e.contains && e.contains(t);
  return i;
}
a(kc, "isOrContainsNode");
function jr(e, t) {
  var o;
  function i() {
    o && clearTimeout(o);
  }
  a(i, "cancel");
  function n() {
    for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++)
      l[u] = arguments[u];
    i(), o = setTimeout(function() {
      o = null, e.apply(void 0, l);
    }, t);
  }
  return a(n, "wrapper"), n.cancel = i, n;
}
a(jr, "debounce");
function ae() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [i].concat(r)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
    });
  };
}
a(ae, "callAllEventHandlers");
function Qe() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    t.forEach(function(n) {
      typeof n == "function" ? n(i) : n && (n.current = i);
    });
  };
}
a(Qe, "handleRefs");
function Nc() {
  return String(pg++);
}
a(Nc, "generateId");
function dg(e) {
  var t = e.isOpen, o = e.resultCount, i = e.previousResultCount;
  return t ? o ? o !== i ? o + " result" + (o === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter ke\
y to select." : "" : "No results are available." : "";
}
a(dg, "getA11yStatusMessage");
function Oc(e, t) {
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
a(Oc, "unwrapArray");
function fg(e) {
  return typeof e.type == "string";
}
a(fg, "isDOMElement");
function mg(e) {
  return e.props;
}
a(mg, "getElementProps");
var hg = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function Pr(e) {
  e === void 0 && (e = {});
  var t = {};
  return hg.forEach(function(o) {
    e.hasOwnProperty(o) && (t[o] = e[o]);
  }), t;
}
a(Pr, "pickState");
function Io(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(o, i) {
    return o[i] = Nr(t, i) ? t[i] : e[i], o;
  }, {});
}
a(Io, "getState");
function Nr(e, t) {
  return e[t] !== void 0;
}
a(Nr, "isControlledProp");
function eo(e) {
  var t = e.key, o = e.keyCode;
  return o >= 37 && o <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
a(eo, "normalizeArrowKey");
function Xe(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (r === 0)
    return -1;
  var l = r - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = n ? l : 0 : u > l && (u = n ? 0 : l);
  var c = gt(u, t < 0, o, i, n);
  return c === -1 ? e >= r ? -1 : e : c;
}
a(Xe, "getHighlightedIndex");
function gt(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!i(o[l], l))
        return l;
  } else
    for (var u = e; u < r; u++)
      if (!i(o[u], u))
        return u;
  return n ? gt(t ? r - 1 : 0, t, o, i) : -1;
}
a(gt, "getNonDisabledIndex");
function Fr(e, t, o, i) {
  return i === void 0 && (i = !0), o && t.some(function(n) {
    return n && (kc(n, e, o) || i && kc(n, o.document.activeElement, o));
  });
}
a(Fr, "targetWithinDownshift");
var gg = jr(function(e) {
  Fc(e).textContent = "";
}, 500);
function Fc(e) {
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("ar\
ia-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
a(Fc, "getStatusDiv");
function Bc(e, t) {
  if (!(!e || !t)) {
    var o = Fc(t);
    o.textContent = e, gg(t);
  }
}
a(Bc, "setStatus");
function yg(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
a(yg, "cleanupStatusDiv");
var Hc = 0, zc = 1, Rc = 2, Ar = 3, Dr = 4, jc = 5, Wc = 6, Vc = 7, Kc = 8, $c = 9, Uc = 10, qc = 11, Gc = 12, Yc = 13, Qc = 14, Xc = 15, Zc = 16,
bg = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown: Hc,
  mouseUp: zc,
  itemMouseEnter: Rc,
  keyDownArrowUp: Ar,
  keyDownArrowDown: Dr,
  keyDownEscape: jc,
  keyDownEnter: Wc,
  keyDownHome: Vc,
  keyDownEnd: Kc,
  clickItem: $c,
  blurInput: Uc,
  changeInput: qc,
  keyDownSpaceButton: Gc,
  clickButton: Yc,
  blurButton: Qc,
  controlledPropUpdatedSelectedItem: Xc,
  touchEnd: Zc
}), vg = ["refKey", "ref"], xg = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], Ig = ["onKeyDown", "onBlur", "onChange", "onInput",
"onChangeText"], Sg = ["refKey", "ref"], wg = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], Cg = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function o(n) {
      var r;
      r = t.call(this, n) || this, r.id = r.props.id || "downshift-" + Nc(), r.menuId = r.props.menuId || r.id + "-menu", r.labelId = r.props.
      labelId || r.id + "-label", r.inputId = r.props.inputId || r.id + "-input", r.getItemId = r.props.getItemId || function(h) {
        return r.id + "-item-" + h;
      }, r.items = [], r.itemCount = null, r.previousResultCount = 0, r.timeoutIds = [], r.internalSetTimeout = function(h, v) {
        var x = setTimeout(function() {
          r.timeoutIds = r.timeoutIds.filter(function(w) {
            return w !== x;
          }), h();
        }, v);
        r.timeoutIds.push(x);
      }, r.setItemCount = function(h) {
        r.itemCount = h;
      }, r.unsetItemCount = function() {
        r.itemCount = null;
      }, r.isItemDisabled = function(h, v) {
        var x = r.getItemNodeFromIndex(v);
        return x && x.hasAttribute("disabled");
      }, r.setHighlightedIndex = function(h, v) {
        h === void 0 && (h = r.props.defaultHighlightedIndex), v === void 0 && (v = {}), v = Pr(v), r.internalSetState($({
          highlightedIndex: h
        }, v));
      }, r.clearSelection = function(h) {
        r.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: r.props.defaultHighlightedIndex,
          isOpen: r.props.defaultIsOpen
        }, h);
      }, r.selectItem = function(h, v, x) {
        v = Pr(v), r.internalSetState($({
          isOpen: r.props.defaultIsOpen,
          highlightedIndex: r.props.defaultHighlightedIndex,
          selectedItem: h,
          inputValue: r.props.itemToString(h)
        }, v), x);
      }, r.selectItemAtIndex = function(h, v, x) {
        var w = r.items[h];
        w != null && r.selectItem(w, v, x);
      }, r.selectHighlightedItem = function(h, v) {
        return r.selectItemAtIndex(r.getState().highlightedIndex, h, v);
      }, r.internalSetState = function(h, v) {
        var x, w, T = {}, O = typeof h == "function";
        return !O && h.hasOwnProperty("inputValue") && r.props.onInputValueChange(h.inputValue, $({}, r.getStateAndHelpers(), h)), r.setState(
        function(k) {
          var C;
          k = r.getState(k);
          var E = O ? h(k) : h;
          E = r.props.stateReducer(k, E), x = E.hasOwnProperty("selectedItem");
          var P = {};
          return x && E.selectedItem !== k.selectedItem && (w = E.selectedItem), (C = E).type || (C.type = Hc), Object.keys(E).forEach(function(D) {
            k[D] !== E[D] && (T[D] = E[D]), D !== "type" && (E[D], Nr(r.props, D) || (P[D] = E[D]));
          }), O && E.hasOwnProperty("inputValue") && r.props.onInputValueChange(E.inputValue, $({}, r.getStateAndHelpers(), E)), P;
        }, function() {
          Tc(v)();
          var k = Object.keys(T).length > 1;
          k && r.props.onStateChange(T, r.getStateAndHelpers()), x && r.props.onSelect(h.selectedItem, r.getStateAndHelpers()), w !== void 0 &&
          r.props.onChange(w, r.getStateAndHelpers()), r.props.onUserAction(T, r.getStateAndHelpers());
        });
      }, r.rootRef = function(h) {
        return r._rootNode = h;
      }, r.getRootProps = function(h, v) {
        var x, w = h === void 0 ? {} : h, T = w.refKey, O = T === void 0 ? "ref" : T, k = w.ref, C = Ee(w, vg), E = v === void 0 ? {} : v, P = E.
        suppressRefError, D = P === void 0 ? !1 : P;
        r.getRootProps.called = !0, r.getRootProps.refKey = O, r.getRootProps.suppressRefError = D;
        var M = r.getState(), N = M.isOpen;
        return $((x = {}, x[O] = Qe(k, r.rootRef), x.role = "combobox", x["aria-expanded"] = N, x["aria-haspopup"] = "listbox", x["aria-owns"] =
        N ? r.menuId : void 0, x["aria-labelledby"] = r.labelId, x), C);
      }, r.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ a(function(v) {
          var x = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(w, {
              type: Dr
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Dr
            }, function() {
              var T = x.getItemCount();
              if (T > 0) {
                var O = x.getState(), k = O.highlightedIndex, C = Xe(k, 1, {
                  length: T
                }, x.isItemDisabled, !0);
                x.setHighlightedIndex(C, {
                  type: Dr
                });
              }
            });
        }, "ArrowDown"),
        ArrowUp: /* @__PURE__ */ a(function(v) {
          var x = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(w, {
              type: Ar
            });
          } else
            this.internalSetState({
              isOpen: !0,
              type: Ar
            }, function() {
              var T = x.getItemCount();
              if (T > 0) {
                var O = x.getState(), k = O.highlightedIndex, C = Xe(k, -1, {
                  length: T
                }, x.isItemDisabled, !0);
                x.setHighlightedIndex(C, {
                  type: Ar
                });
              }
            });
        }, "ArrowUp"),
        Enter: /* @__PURE__ */ a(function(v) {
          if (v.which !== 229) {
            var x = this.getState(), w = x.isOpen, T = x.highlightedIndex;
            if (w && T != null) {
              v.preventDefault();
              var O = this.items[T], k = this.getItemNodeFromIndex(T);
              if (O == null || k && k.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Wc
              });
            }
          }
        }, "Enter"),
        Escape: /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.reset($({
            type: jc
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }, "Escape")
      }, r.buttonKeyDownHandlers = $({}, r.keyDownHandlers, {
        " ": /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.toggleMenu({
            type: Gc
          });
        }, "_")
      }), r.inputKeyDownHandlers = $({}, r.keyDownHandlers, {
        Home: /* @__PURE__ */ a(function(v) {
          var x = this.getState(), w = x.isOpen;
          if (w) {
            v.preventDefault();
            var T = this.getItemCount();
            if (!(T <= 0 || !w)) {
              var O = gt(0, !1, {
                length: T
              }, this.isItemDisabled);
              this.setHighlightedIndex(O, {
                type: Vc
              });
            }
          }
        }, "Home"),
        End: /* @__PURE__ */ a(function(v) {
          var x = this.getState(), w = x.isOpen;
          if (w) {
            v.preventDefault();
            var T = this.getItemCount();
            if (!(T <= 0 || !w)) {
              var O = gt(T - 1, !0, {
                length: T
              }, this.isItemDisabled);
              this.setHighlightedIndex(O, {
                type: Kc
              });
            }
          }
        }, "End")
      }), r.getToggleButtonProps = function(h) {
        var v = h === void 0 ? {} : h, x = v.onClick;
        v.onPress;
        var w = v.onKeyDown, T = v.onKeyUp, O = v.onBlur, k = Ee(v, xg), C = r.getState(), E = C.isOpen, P = {
          onClick: ae(x, r.buttonHandleClick),
          onKeyDown: ae(w, r.buttonHandleKeyDown),
          onKeyUp: ae(T, r.buttonHandleKeyUp),
          onBlur: ae(O, r.buttonHandleBlur)
        }, D = k.disabled ? {} : P;
        return $({
          type: "button",
          role: "button",
          "aria-label": E ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, D, k);
      }, r.buttonHandleKeyUp = function(h) {
        h.preventDefault();
      }, r.buttonHandleKeyDown = function(h) {
        var v = eo(h);
        r.buttonKeyDownHandlers[v] && r.buttonKeyDownHandlers[v].call(r, h);
      }, r.buttonHandleClick = function(h) {
        if (h.preventDefault(), r.props.environment) {
          var v = r.props.environment.document, x = v.body, w = v.activeElement;
          x && x === w && h.target.focus();
        }
        r.internalSetTimeout(function() {
          return r.toggleMenu({
            type: Yc
          });
        });
      }, r.buttonHandleBlur = function(h) {
        var v = h.target;
        r.internalSetTimeout(function() {
          if (!(r.isMouseDown || !r.props.environment)) {
            var x = r.props.environment.document.activeElement;
            (x == null || x.id !== r.inputId) && x !== v && r.reset({
              type: Qc
            });
          }
        });
      }, r.getLabelProps = function(h) {
        return $({
          htmlFor: r.inputId,
          id: r.labelId
        }, h);
      }, r.getInputProps = function(h) {
        var v = h === void 0 ? {} : h, x = v.onKeyDown, w = v.onBlur, T = v.onChange, O = v.onInput;
        v.onChangeText;
        var k = Ee(v, Ig), C, E = {};
        C = "onChange";
        var P = r.getState(), D = P.inputValue, M = P.isOpen, N = P.highlightedIndex;
        if (!k.disabled) {
          var U;
          E = (U = {}, U[C] = ae(T, O, r.inputHandleChange), U.onKeyDown = ae(x, r.inputHandleKeyDown), U.onBlur = ae(w, r.inputHandleBlur),
          U);
        }
        return $({
          "aria-autocomplete": "list",
          "aria-activedescendant": M && typeof N == "number" && N >= 0 ? r.getItemId(N) : void 0,
          "aria-controls": M ? r.menuId : void 0,
          "aria-labelledby": k && k["aria-label"] ? void 0 : r.labelId,
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: D,
          id: r.inputId
        }, E, k);
      }, r.inputHandleKeyDown = function(h) {
        var v = eo(h);
        v && r.inputKeyDownHandlers[v] && r.inputKeyDownHandlers[v].call(r, h);
      }, r.inputHandleChange = function(h) {
        r.internalSetState({
          type: qc,
          isOpen: !0,
          inputValue: h.target.value,
          highlightedIndex: r.props.defaultHighlightedIndex
        });
      }, r.inputHandleBlur = function() {
        r.internalSetTimeout(function() {
          var h;
          if (!(r.isMouseDown || !r.props.environment)) {
            var v = r.props.environment.document.activeElement, x = (v == null || (h = v.dataset) == null ? void 0 : h.toggle) && r._rootNode &&
            r._rootNode.contains(v);
            x || r.reset({
              type: Uc
            });
          }
        });
      }, r.menuRef = function(h) {
        r._menuNode = h;
      }, r.getMenuProps = function(h, v) {
        var x, w = h === void 0 ? {} : h, T = w.refKey, O = T === void 0 ? "ref" : T, k = w.ref, C = Ee(w, Sg), E = v === void 0 ? {} : v, P = E.
        suppressRefError, D = P === void 0 ? !1 : P;
        return r.getMenuProps.called = !0, r.getMenuProps.refKey = O, r.getMenuProps.suppressRefError = D, $((x = {}, x[O] = Qe(k, r.menuRef),
        x.role = "listbox", x["aria-labelledby"] = C && C["aria-label"] ? void 0 : r.labelId, x.id = r.menuId, x), C);
      }, r.getItemProps = function(h) {
        var v, x = h === void 0 ? {} : h, w = x.onMouseMove, T = x.onMouseDown, O = x.onClick;
        x.onPress;
        var k = x.index, C = x.item, E = C === void 0 ? (
          /* istanbul ignore next */
          void 0
        ) : C, P = Ee(x, wg);
        k === void 0 ? (r.items.push(E), k = r.items.indexOf(E)) : r.items[k] = E;
        var D = "onClick", M = O, N = (v = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: ae(w, function() {
            k !== r.getState().highlightedIndex && (r.setHighlightedIndex(k, {
              type: Rc
            }), r.avoidScrolling = !0, r.internalSetTimeout(function() {
              return r.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: ae(T, function(j) {
            j.preventDefault();
          })
        }, v[D] = ae(M, function() {
          r.selectItemAtIndex(k, {
            type: $c
          });
        }), v), U = P.disabled ? {
          onMouseDown: N.onMouseDown
        } : N;
        return $({
          id: r.getItemId(k),
          role: "option",
          "aria-selected": r.getState().highlightedIndex === k
        }, U, P);
      }, r.clearItems = function() {
        r.items = [];
      }, r.reset = function(h, v) {
        h === void 0 && (h = {}), h = Pr(h), r.internalSetState(function(x) {
          var w = x.selectedItem;
          return $({
            isOpen: r.props.defaultIsOpen,
            highlightedIndex: r.props.defaultHighlightedIndex,
            inputValue: r.props.itemToString(w)
          }, h);
        }, v);
      }, r.toggleMenu = function(h, v) {
        h === void 0 && (h = {}), h = Pr(h), r.internalSetState(function(x) {
          var w = x.isOpen;
          return $({
            isOpen: !w
          }, w && {
            highlightedIndex: r.props.defaultHighlightedIndex
          }, h);
        }, function() {
          var x = r.getState(), w = x.isOpen, T = x.highlightedIndex;
          w && r.getItemCount() > 0 && typeof T == "number" && r.setHighlightedIndex(T, h), Tc(v)();
        });
      }, r.openMenu = function(h) {
        r.internalSetState({
          isOpen: !0
        }, h);
      }, r.closeMenu = function(h) {
        r.internalSetState({
          isOpen: !1
        }, h);
      }, r.updateStatus = jr(function() {
        var h;
        if ((h = r.props) != null && (h = h.environment) != null && h.document) {
          var v = r.getState(), x = r.items[v.highlightedIndex], w = r.getItemCount(), T = r.props.getA11yStatusMessage($({
            itemToString: r.props.itemToString,
            previousResultCount: r.previousResultCount,
            resultCount: w,
            highlightedItem: x
          }, v));
          r.previousResultCount = w, Bc(T, r.props.environment.document);
        }
      }, 200);
      var l = r.props, u = l.defaultHighlightedIndex, c = l.initialHighlightedIndex, p = c === void 0 ? u : c, d = l.defaultIsOpen, b = l.initialIsOpen,
      f = b === void 0 ? d : b, y = l.initialInputValue, m = y === void 0 ? "" : y, g = l.initialSelectedItem, S = g === void 0 ? null : g, _ = r.
      getState({
        highlightedIndex: p,
        isOpen: f,
        inputValue: m,
        selectedItem: S
      });
      return _.selectedItem != null && r.props.initialInputValue === void 0 && (_.inputValue = r.props.itemToString(_.selectedItem)), r.state =
      _, r;
    }
    a(o, "Downshift"), Gt(o, t);
    var i = o.prototype;
    return i.internalClearTimeouts = /* @__PURE__ */ a(function() {
      this.timeoutIds.forEach(function(r) {
        clearTimeout(r);
      }), this.timeoutIds = [];
    }, "internalClearTimeouts"), i.getState = /* @__PURE__ */ a(function(r) {
      return r === void 0 && (r = this.state), Io(r, this.props);
    }, "getState$1"), i.getItemCount = /* @__PURE__ */ a(function() {
      var r = this.items.length;
      return this.itemCount != null ? r = this.itemCount : this.props.itemCount !== void 0 && (r = this.props.itemCount), r;
    }, "getItemCount"), i.getItemNodeFromIndex = /* @__PURE__ */ a(function(r) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(r)) : null;
    }, "getItemNodeFromIndex"), i.scrollHighlightedItemIntoView = /* @__PURE__ */ a(function() {
      {
        var r = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(r, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView"), i.moveHighlightedIndex = /* @__PURE__ */ a(function(r, l) {
      var u = this.getItemCount(), c = this.getState(), p = c.highlightedIndex;
      if (u > 0) {
        var d = Xe(p, r, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(d, l);
      }
    }, "moveHighlightedIndex"), i.getStateAndHelpers = /* @__PURE__ */ a(function() {
      var r = this.getState(), l = r.highlightedIndex, u = r.inputValue, c = r.selectedItem, p = r.isOpen, d = this.props.itemToString, b = this.
      id, f = this.getRootProps, y = this.getToggleButtonProps, m = this.getLabelProps, g = this.getMenuProps, S = this.getInputProps, _ = this.
      getItemProps, h = this.openMenu, v = this.closeMenu, x = this.toggleMenu, w = this.selectItem, T = this.selectItemAtIndex, O = this.selectHighlightedItem,
      k = this.setHighlightedIndex, C = this.clearSelection, E = this.clearItems, P = this.reset, D = this.setItemCount, M = this.unsetItemCount,
      N = this.internalSetState;
      return {
        // prop getters
        getRootProps: f,
        getToggleButtonProps: y,
        getLabelProps: m,
        getMenuProps: g,
        getInputProps: S,
        getItemProps: _,
        // actions
        reset: P,
        openMenu: h,
        closeMenu: v,
        toggleMenu: x,
        selectItem: w,
        selectItemAtIndex: T,
        selectHighlightedItem: O,
        setHighlightedIndex: k,
        clearSelection: C,
        clearItems: E,
        setItemCount: D,
        unsetItemCount: M,
        setState: N,
        // props
        itemToString: d,
        // derived
        id: b,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: p,
        selectedItem: c
      };
    }, "getStateAndHelpers"), i.componentDidMount = /* @__PURE__ */ a(function() {
      var r = this;
      if (!this.props.environment)
        this.cleanup = function() {
          r.internalClearTimeouts();
        };
      else {
        var l = /* @__PURE__ */ a(function() {
          r.isMouseDown = !0;
        }, "onMouseDown"), u = /* @__PURE__ */ a(function(y) {
          r.isMouseDown = !1;
          var m = Fr(y.target, [r._rootNode, r._menuNode], r.props.environment);
          !m && r.getState().isOpen && r.reset({
            type: zc
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onMouseUp"), c = /* @__PURE__ */ a(function() {
          r.isTouchMove = !1;
        }, "onTouchStart"), p = /* @__PURE__ */ a(function() {
          r.isTouchMove = !0;
        }, "onTouchMove"), d = /* @__PURE__ */ a(function(y) {
          var m = Fr(y.target, [r._rootNode, r._menuNode], r.props.environment, !1);
          !r.isTouchMove && !m && r.getState().isOpen && r.reset({
            type: Zc
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onTouchEnd"), b = this.props.environment;
        b.addEventListener("mousedown", l), b.addEventListener("mouseup", u), b.addEventListener("touchstart", c), b.addEventListener("touch\
move", p), b.addEventListener("touchend", d), this.cleanup = function() {
          r.internalClearTimeouts(), r.updateStatus.cancel(), b.removeEventListener("mousedown", l), b.removeEventListener("mouseup", u), b.
          removeEventListener("touchstart", c), b.removeEventListener("touchmove", p), b.removeEventListener("touchend", d);
        };
      }
    }, "componentDidMount"), i.shouldScroll = /* @__PURE__ */ a(function(r, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, c = u.highlightedIndex, p = l.highlightedIndex === void 0 ?
      r : l, d = p.highlightedIndex, b = c && this.getState().isOpen && !r.isOpen, f = c !== d;
      return b || f;
    }, "shouldScroll"), i.componentDidUpdate = /* @__PURE__ */ a(function(r, l) {
      Nr(this.props, "selectedItem") && this.props.selectedItemChanged(r.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: Xc,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, r) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, "componentDidUpdate"), i.componentWillUnmount = /* @__PURE__ */ a(function() {
      this.cleanup();
    }, "componentWillUnmount"), i.render = /* @__PURE__ */ a(function() {
      var r = Oc(this.props.children, Ne);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.
      getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1,
      this.getInputProps.called = !1;
      var l = Oc(r(this.getStateAndHelpers()));
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return l;
      if (fg(l))
        return /* @__PURE__ */ us(l, this.getRootProps(mg(l)));
    }, "render"), o;
  }(Le);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: dg,
    itemToString: /* @__PURE__ */ a(function(o) {
      return o == null ? "" : String(o);
    }, "itemToString"),
    onStateChange: Ne,
    onInputValueChange: Ne,
    onUserAction: Ne,
    onChange: Ne,
    onSelect: Ne,
    onOuterClick: Ne,
    selectedItemChanged: /* @__PURE__ */ a(function(o, i) {
      return o !== i;
    }, "selectedItemChanged"),
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: /* @__PURE__ */ a(function(o, i) {
      return i;
    }, "stateReducer"),
    suppressRefError: !1,
    scrollIntoView: Lc
  }, e.stateChangeTypes = bg, e;
}(), Nt = Cg;
var Jc = {
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
function _g(e, t, o) {
  var i = e.props, n = e.type, r = {};
  Object.keys(t).forEach(function(l) {
    Eg(l, e, t, o), o[l] !== t[l] && (r[l] = o[l]);
  }), i.onStateChange && Object.keys(r).length && i.onStateChange($({
    type: n
  }, r));
}
a(_g, "callOnChangeProps");
function Eg(e, t, o, i) {
  var n = t.props, r = t.type, l = "on" + Yn(e) + "Change";
  n[l] && i[e] !== void 0 && i[e] !== o[e] && n[l]($({
    type: r
  }, i));
}
a(Eg, "invokeOnChangeHandler");
function Tg(e, t) {
  return t.changes;
}
a(Tg, "stateReducer");
var Pc = jr(function(e, t) {
  Bc(e, t);
}, 200), kg = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Ht : V, ep = "useId" in s ?
/* @__PURE__ */ a(function(t) {
  var o = t.id, i = t.labelId, n = t.menuId, r = t.getItemId, l = t.toggleButtonId, u = t.inputId, c = "downshift-" + s.useId();
  o || (o = c);
  var p = Q({
    labelId: i || o + "-label",
    menuId: n || o + "-menu",
    getItemId: r || function(d) {
      return o + "-item-" + d;
    },
    toggleButtonId: l || o + "-toggle-button",
    inputId: u || o + "-input"
  });
  return p.current;
}, "useElementIds") : /* @__PURE__ */ a(function(t) {
  var o = t.id, i = o === void 0 ? "downshift-" + Nc() : o, n = t.labelId, r = t.menuId, l = t.getItemId, u = t.toggleButtonId, c = t.inputId,
  p = Q({
    labelId: n || i + "-label",
    menuId: r || i + "-menu",
    getItemId: l || function(d) {
      return i + "-item-" + d;
    },
    toggleButtonId: u || i + "-toggle-button",
    inputId: c || i + "-input"
  });
  return p.current;
}, "useElementIds");
function Gn(e, t, o, i) {
  var n, r;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = o[t], r = t;
  } else
    r = t === void 0 ? o.indexOf(e) : t, n = e;
  return [n, r];
}
a(Gn, "getItemAndIndex");
function Og(e) {
  return /^\S{1}$/.test(e);
}
a(Og, "isAcceptedCharacterKey");
function Yn(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
a(Yn, "capitalizeString");
function Wr(e) {
  var t = Q(e);
  return t.current = e, t;
}
a(Wr, "useLatestRef");
function tp(e, t, o, i) {
  var n = Q(), r = Q(), l = A(function(y, m) {
    r.current = m, y = Io(y, m.props);
    var g = e(y, m), S = m.props.stateReducer(y, $({}, m, {
      changes: g
    }));
    return S;
  }, [e]), u = zt(l, t, o), c = u[0], p = u[1], d = Wr(t), b = A(function(y) {
    return p($({
      props: d.current
    }, y));
  }, [d]), f = r.current;
  return V(function() {
    var y = Io(n.current, f?.props), m = f && n.current && !i(y, c);
    m && _g(f, y, c), n.current = c;
  }, [c, f, i]), [c, b];
}
a(tp, "useEnhancedReducer");
function op(e, t, o, i) {
  var n = tp(e, t, o, i), r = n[0], l = n[1];
  return [Io(r, t), l];
}
a(op, "useControlledReducer$1");
var xo = {
  itemToString: /* @__PURE__ */ a(function(t) {
    return t ? String(t) : "";
  }, "itemToString"),
  itemToKey: /* @__PURE__ */ a(function(t) {
    return t;
  }, "itemToKey"),
  stateReducer: Tg,
  scrollIntoView: Lc,
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
function Be(e, t, o) {
  o === void 0 && (o = Jc);
  var i = e["default" + Yn(t)];
  return i !== void 0 ? i : o[t];
}
a(Be, "getDefaultValue$1");
function Mt(e, t, o) {
  o === void 0 && (o = Jc);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + Yn(t)];
  return n !== void 0 ? n : Be(e, t, o);
}
a(Mt, "getInitialValue$1");
function rp(e) {
  var t = Mt(e, "selectedItem"), o = Mt(e, "isOpen"), i = Mt(e, "highlightedIndex"), n = Mt(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && o ? e.items.findIndex(function(r) {
      return e.itemToKey(r) === e.itemToKey(t);
    }) : i,
    isOpen: o,
    selectedItem: t,
    inputValue: n
  };
}
a(rp, "getInitialState$2");
function Lt(e, t, o) {
  var i = e.items, n = e.initialHighlightedIndex, r = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, c = t.selectedItem, p = t.
  highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && p === n && !l(i[n]) ? n : r !== void 0 && !l(i[r]) ? r : c ? i.findIndex(function(d) {
    return u(c) === u(d);
  }) : o < 0 && !l(i[i.length - 1]) ? i.length - 1 : o > 0 && !l(i[0]) ? 0 : -1;
}
a(Lt, "getHighlightedIndexOnOpen");
function np(e, t, o) {
  var i = Q({
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
  return V(function() {
    if (!e)
      return Ne;
    var n = t.map(function(d) {
      return d.current;
    });
    function r() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    a(r, "onMouseDown");
    function l(d) {
      i.current.isMouseDown = !1, Fr(d.target, n, e) || o();
    }
    a(l, "onMouseUp");
    function u() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    a(u, "onTouchStart");
    function c() {
      i.current.isTouchMove = !0;
    }
    a(c, "onTouchMove");
    function p(d) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !Fr(d.target, n, e, !1) && o();
    }
    return a(p, "onTouchEnd"), e.addEventListener("mousedown", r), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.
    addEventListener("touchmove", c), e.addEventListener("touchend", p), /* @__PURE__ */ a(function() {
      e.removeEventListener("mousedown", r), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener(
      "touchmove", c), e.removeEventListener("touchend", p);
    }, "cleanup");
  }, [e, o]), i.current;
}
a(np, "useMouseAndTouchTracker");
var Qn = /* @__PURE__ */ a(function() {
  return Ne;
}, "useGetterPropsCalledChecker");
function Xn(e, t, o, i) {
  i === void 0 && (i = {});
  var n = i.document, r = Vr();
  V(function() {
    if (!(!e || r || !n)) {
      var l = e(t);
      Pc(l, n);
    }
  }, o), V(function() {
    return function() {
      Pc.cancel(), yg(n);
    };
  }, [n]);
}
a(Xn, "useA11yMessageStatus");
function ip(e) {
  var t = e.highlightedIndex, o = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, r = e.menuElement, l = e.scrollIntoView, u = Q(!0);
  return kg(function() {
    t < 0 || !o || !Object.keys(i.current).length || (u.current === !1 ? u.current = !0 : l(n(t), r));
  }, [t]), u;
}
a(ip, "useScrollIntoView");
var Zn = Ne;
function Br(e, t, o) {
  var i;
  o === void 0 && (o = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return $({
    isOpen: !1,
    highlightedIndex: -1
  }, n && $({
    selectedItem: e.items[t],
    isOpen: Be(e, "isOpen"),
    highlightedIndex: Be(e, "highlightedIndex")
  }, o && {
    inputValue: e.itemToString(e.items[t])
  }));
}
a(Br, "getChangesOnSelection");
function sp(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
a(sp, "isDropdownsStateEqual");
function Vr() {
  var e = s.useRef(!0);
  return s.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
a(Vr, "useIsInitialMount");
var Mr = {
  environment: q.default.shape({
    addEventListener: q.default.func.isRequired,
    removeEventListener: q.default.func.isRequired,
    document: q.default.shape({
      createElement: q.default.func.isRequired,
      getElementById: q.default.func.isRequired,
      activeElement: q.default.any.isRequired,
      body: q.default.any.isRequired
    }).isRequired,
    Node: q.default.func.isRequired
  }),
  itemToString: q.default.func,
  itemToKey: q.default.func,
  stateReducer: q.default.func
}, ap = $({}, Mr, {
  getA11yStatusMessage: q.default.func,
  highlightedIndex: q.default.number,
  defaultHighlightedIndex: q.default.number,
  initialHighlightedIndex: q.default.number,
  isOpen: q.default.bool,
  defaultIsOpen: q.default.bool,
  initialIsOpen: q.default.bool,
  selectedItem: q.default.any,
  initialSelectedItem: q.default.any,
  defaultSelectedItem: q.default.any,
  id: q.default.string,
  labelId: q.default.string,
  menuId: q.default.string,
  getItemId: q.default.func,
  toggleButtonId: q.default.string,
  onSelectedItemChange: q.default.func,
  onHighlightedIndexChange: q.default.func,
  onStateChange: q.default.func,
  onIsOpenChange: q.default.func,
  scrollIntoView: q.default.func
});
function lp(e, t, o) {
  var i = t.type, n = t.props, r;
  switch (i) {
    case o.ItemMouseMove:
      r = {
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case o.MenuMouseLeave:
      r = {
        highlightedIndex: -1
      };
      break;
    case o.ToggleButtonClick:
    case o.FunctionToggleMenu:
      r = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Lt(n, e, 0)
      };
      break;
    case o.FunctionOpenMenu:
      r = {
        isOpen: !0,
        highlightedIndex: Lt(n, e, 0)
      };
      break;
    case o.FunctionCloseMenu:
      r = {
        isOpen: !1
      };
      break;
    case o.FunctionSetHighlightedIndex:
      r = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case o.FunctionSetInputValue:
      r = {
        inputValue: t.inputValue
      };
      break;
    case o.FunctionReset:
      r = {
        highlightedIndex: Be(n, "highlightedIndex"),
        isOpen: Be(n, "isOpen"),
        selectedItem: Be(n, "selectedItem"),
        inputValue: Be(n, "inputValue")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return $({}, e, r);
}
a(lp, "downshiftCommonReducer");
function Pg(e) {
  for (var t = e.keysSoFar, o = e.highlightedIndex, i = e.items, n = e.itemToString, r = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < i.
  length; u++) {
    var c = (u + o + (t.length < 2 ? 1 : 0)) % i.length, p = i[c];
    if (p !== void 0 && n(p).toLowerCase().startsWith(l) && !r(p, c))
      return c;
  }
  return o;
}
a(Pg, "getItemIndexByCharacterKey");
var YD = Dt(Dt({}, ap), { items: q.default.array.isRequired, isItemDisabled: q.default.func }), Ag = Dt(Dt({}, xo), { isItemDisabled: /* @__PURE__ */ a(
function() {
  return !1;
}, "isItemDisabled") }), Dg = Ne, Lr = 0, Jn = 1, ei = 2, Hr = 3, ti = 4, oi = 5, ri = 6, ni = 7, ii = 8, si = 9, ai = 10, zr = 11, up = 12,
cp = 13, li = 14, pp = 15, dp = 16, fp = 17, mp = 18, ui = 19, qn = 20, hp = 21, gp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Lr,
  ToggleButtonKeyDownArrowDown: Jn,
  ToggleButtonKeyDownArrowUp: ei,
  ToggleButtonKeyDownCharacter: Hr,
  ToggleButtonKeyDownEscape: ti,
  ToggleButtonKeyDownHome: oi,
  ToggleButtonKeyDownEnd: ri,
  ToggleButtonKeyDownEnter: ni,
  ToggleButtonKeyDownSpaceButton: ii,
  ToggleButtonKeyDownPageUp: si,
  ToggleButtonKeyDownPageDown: ai,
  ToggleButtonBlur: zr,
  MenuMouseLeave: up,
  ItemMouseMove: cp,
  ItemClick: li,
  FunctionToggleMenu: pp,
  FunctionOpenMenu: dp,
  FunctionCloseMenu: fp,
  FunctionSetHighlightedIndex: mp,
  FunctionSelectItem: ui,
  FunctionSetInputValue: qn,
  FunctionReset: hp
});
function Mg(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case li:
      l = {
        isOpen: Be(n, "isOpen"),
        highlightedIndex: Be(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case Hr:
      {
        var u = t.key, c = "" + e.inputValue + u, p = !e.isOpen && e.selectedItem ? n.items.findIndex(function(y) {
          return n.itemToKey(y) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, d = Pg({
          keysSoFar: c,
          highlightedIndex: p,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        l = {
          inputValue: c,
          highlightedIndex: d,
          isOpen: !0
        };
      }
      break;
    case Jn:
      {
        var b = e.isOpen ? Xe(e.highlightedIndex, 1, n.items, n.isItemDisabled) : r && e.selectedItem == null ? -1 : Lt(n, e, 1);
        l = {
          highlightedIndex: b,
          isOpen: !0
        };
      }
      break;
    case ei:
      if (e.isOpen && r)
        l = Br(n, e.highlightedIndex, !1);
      else {
        var f = e.isOpen ? Xe(e.highlightedIndex, -1, n.items, n.isItemDisabled) : Lt(n, e, -1);
        l = {
          highlightedIndex: f,
          isOpen: !0
        };
      }
      break;
    // only triggered when menu is open.
    case ni:
    case ii:
      l = Br(n, e.highlightedIndex, !1);
      break;
    case oi:
      l = {
        highlightedIndex: gt(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case ri:
      l = {
        highlightedIndex: gt(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case si:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case ai:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case ti:
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
    case zr:
      l = $({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case ui:
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
      return lp(e, t, gp);
  }
  return $({}, e, l);
}
a(Mg, "downshiftSelectReducer");
var Lg = ["onClick"], Ng = ["onMouseLeave", "refKey", "ref"], Fg = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Bg = ["it\
em", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
yp.stateChangeTypes = gp;
function yp(e) {
  e === void 0 && (e = {}), Dg(e, yp);
  var t = $({}, Ag, e), o = t.scrollIntoView, i = t.environment, n = t.getA11yStatusMessage, r = op(Mg, t, rp, sp), l = r[0], u = r[1], c = l.
  isOpen, p = l.highlightedIndex, d = l.selectedItem, b = l.inputValue, f = Q(null), y = Q(null), m = Q({}), g = Q(null), S = ep(t), _ = Wr(
  {
    state: l,
    props: t
  }), h = A(function(H) {
    return m.current[S.getItemId(H)];
  }, [S]);
  Xn(n, l, [c, p, d, b], i);
  var v = ip({
    menuElement: y.current,
    highlightedIndex: p,
    isOpen: c,
    itemRefs: m,
    scrollIntoView: o,
    getItemNodeFromIndex: h
  });
  V(function() {
    return g.current = jr(function(H) {
      H({
        type: qn,
        inputValue: ""
      });
    }, 500), function() {
      g.current.cancel();
    };
  }, []), V(function() {
    b && g.current(u);
  }, [u, b]), Zn({
    props: t,
    state: l
  }), V(function() {
    var H = Mt(t, "isOpen");
    H && f.current && f.current.focus();
  }, []);
  var x = np(i, [f, y], A(/* @__PURE__ */ a(function() {
    _.current.state.isOpen && u({
      type: zr
    });
  }, "handleBlur"), [u, _])), w = Qn("getMenuProps", "getToggleButtonProps");
  V(function() {
    c || (m.current = {});
  }, [c]);
  var T = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(W) {
        W.preventDefault(), u({
          type: Jn,
          altKey: W.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(W) {
        W.preventDefault(), u({
          type: ei,
          altKey: W.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(W) {
        W.preventDefault(), u({
          type: oi
        });
      }, "Home"),
      End: /* @__PURE__ */ a(function(W) {
        W.preventDefault(), u({
          type: ri
        });
      }, "End"),
      Escape: /* @__PURE__ */ a(function() {
        _.current.state.isOpen && u({
          type: ti
        });
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(W) {
        W.preventDefault(), u({
          type: _.current.state.isOpen ? ni : Lr
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(W) {
        _.current.state.isOpen && (W.preventDefault(), u({
          type: si
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(W) {
        _.current.state.isOpen && (W.preventDefault(), u({
          type: ai
        }));
      }, "PageDown"),
      " ": /* @__PURE__ */ a(function(W) {
        W.preventDefault();
        var z = _.current.state;
        if (!z.isOpen) {
          u({
            type: Lr
          });
          return;
        }
        z.inputValue ? u({
          type: Hr,
          key: " "
        }) : u({
          type: ii
        });
      }, "_")
    };
  }, [u, _]), O = A(function() {
    u({
      type: pp
    });
  }, [u]), k = A(function() {
    u({
      type: fp
    });
  }, [u]), C = A(function() {
    u({
      type: dp
    });
  }, [u]), E = A(function(H) {
    u({
      type: mp,
      highlightedIndex: H
    });
  }, [u]), P = A(function(H) {
    u({
      type: ui,
      selectedItem: H
    });
  }, [u]), D = A(function() {
    u({
      type: hp
    });
  }, [u]), M = A(function(H) {
    u({
      type: qn,
      inputValue: H
    });
  }, [u]), N = A(function(H) {
    var W = H === void 0 ? {} : H, z = W.onClick, te = Ee(W, Lg), F = /* @__PURE__ */ a(function() {
      var L;
      (L = f.current) == null || L.focus();
    }, "labelHandleClick");
    return $({
      id: S.labelId,
      htmlFor: S.toggleButtonId,
      onClick: ae(z, F)
    }, te);
  }, [S]), U = A(function(H, W) {
    var z, te = H === void 0 ? {} : H, F = te.onMouseLeave, B = te.refKey, L = B === void 0 ? "ref" : B, R = te.ref, Z = Ee(te, Ng), re = W ===
    void 0 ? {} : W, ee = re.suppressRefError, pe = ee === void 0 ? !1 : ee, ie = /* @__PURE__ */ a(function() {
      u({
        type: up
      });
    }, "menuHandleMouseLeave");
    return w("getMenuProps", pe, L, y), $((z = {}, z[L] = Qe(R, function(ue) {
      y.current = ue;
    }), z.id = S.menuId, z.role = "listbox", z["aria-labelledby"] = Z && Z["aria-label"] ? void 0 : "" + S.labelId, z.onMouseLeave = ae(F, ie),
    z), Z);
  }, [u, w, S]), j = A(function(H, W) {
    var z, te = H === void 0 ? {} : H, F = te.onBlur, B = te.onClick;
    te.onPress;
    var L = te.onKeyDown, R = te.refKey, Z = R === void 0 ? "ref" : R, re = te.ref, ee = Ee(te, Fg), pe = W === void 0 ? {} : W, ie = pe.suppressRefError,
    ue = ie === void 0 ? !1 : ie, le = _.current.state, be = /* @__PURE__ */ a(function() {
      u({
        type: Lr
      });
    }, "toggleButtonHandleClick"), me = /* @__PURE__ */ a(function() {
      le.isOpen && !x.isMouseDown && u({
        type: zr
      });
    }, "toggleButtonHandleBlur"), Te = /* @__PURE__ */ a(function(we) {
      var De = eo(we);
      De && T[De] ? T[De](we) : Og(De) && u({
        type: Hr,
        key: De
      });
    }, "toggleButtonHandleKeyDown"), de = $((z = {}, z[Z] = Qe(re, function(ve) {
      f.current = ve;
    }), z["aria-activedescendant"] = le.isOpen && le.highlightedIndex > -1 ? S.getItemId(le.highlightedIndex) : "", z["aria-controls"] = S.menuId,
    z["aria-expanded"] = _.current.state.isOpen, z["aria-haspopup"] = "listbox", z["aria-labelledby"] = ee && ee["aria-label"] ? void 0 : "" +
    S.labelId, z.id = S.toggleButtonId, z.role = "combobox", z.tabIndex = 0, z.onBlur = ae(F, me), z), ee);
    return ee.disabled || (de.onClick = ae(B, be), de.onKeyDown = ae(L, Te)), w("getToggleButtonProps", ue, Z, f), de;
  }, [u, S, _, x, w, T]), G = A(function(H) {
    var W, z = H === void 0 ? {} : H, te = z.item, F = z.index, B = z.onMouseMove, L = z.onClick, R = z.onMouseDown;
    z.onPress;
    var Z = z.refKey, re = Z === void 0 ? "ref" : Z, ee = z.disabled, pe = z.ref, ie = Ee(z, Bg);
    ee !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useSelect.');
    var ue = _.current, le = ue.state, be = ue.props, me = Gn(te, F, be.items, "Pass either item or index to getItemProps!"), Te = me[0], de = me[1],
    ve = be.isItemDisabled(Te, de), we = /* @__PURE__ */ a(function() {
      x.isTouchEnd || de === le.highlightedIndex || (v.current = !1, u({
        type: cp,
        index: de,
        disabled: ve
      }));
    }, "itemHandleMouseMove"), De = /* @__PURE__ */ a(function() {
      u({
        type: li,
        index: de
      });
    }, "itemHandleClick"), Ze = /* @__PURE__ */ a(function(to) {
      return to.preventDefault();
    }, "itemHandleMouseDown"), Oe = $((W = {}, W[re] = Qe(pe, function(Ke) {
      Ke && (m.current[S.getItemId(de)] = Ke);
    }), W["aria-disabled"] = ve, W["aria-selected"] = "" + (Te === le.selectedItem), W.id = S.getItemId(de), W.role = "option", W), ie);
    return ve || (Oe.onClick = ae(L, De)), Oe.onMouseMove = ae(B, we), Oe.onMouseDown = ae(R, Ze), Oe;
  }, [_, S, x, v, u]);
  return {
    // prop getters.
    getToggleButtonProps: j,
    getLabelProps: N,
    getMenuProps: U,
    getItemProps: G,
    // actions.
    toggleMenu: O,
    openMenu: C,
    closeMenu: k,
    setHighlightedIndex: E,
    selectItem: P,
    reset: D,
    setInputValue: M,
    // state.
    highlightedIndex: p,
    isOpen: c,
    selectedItem: d,
    inputValue: b
  };
}
a(yp, "useSelect");
var ci = 0, pi = 1, di = 2, fi = 3, mi = 4, hi = 5, gi = 6, yi = 7, bi = 8, Rr = 9, vi = 10, bp = 11, vp = 12, xi = 13, xp = 14, Ip = 15, Sp = 16,
wp = 17, Cp = 18, Ii = 19, _p = 20, Ep = 21, Si = 22, Tp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: ci,
  InputKeyDownArrowUp: pi,
  InputKeyDownEscape: di,
  InputKeyDownHome: fi,
  InputKeyDownEnd: mi,
  InputKeyDownPageUp: hi,
  InputKeyDownPageDown: gi,
  InputKeyDownEnter: yi,
  InputChange: bi,
  InputBlur: Rr,
  InputClick: vi,
  MenuMouseLeave: bp,
  ItemMouseMove: vp,
  ItemClick: xi,
  ToggleButtonClick: xp,
  FunctionToggleMenu: Ip,
  FunctionOpenMenu: Sp,
  FunctionCloseMenu: wp,
  FunctionSetHighlightedIndex: Cp,
  FunctionSelectItem: Ii,
  FunctionSetInputValue: _p,
  FunctionReset: Ep,
  ControlledPropUpdatedSelectedItem: Si
});
function Hg(e) {
  var t = rp(e), o = t.selectedItem, i = t.inputValue;
  return i === "" && o && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(
  o)), $({}, t, {
    inputValue: i
  });
}
a(Hg, "getInitialState$1");
var QD = $({}, ap, {
  items: q.default.array.isRequired,
  isItemDisabled: q.default.func,
  inputValue: q.default.string,
  defaultInputValue: q.default.string,
  initialInputValue: q.default.string,
  inputId: q.default.string,
  onInputValueChange: q.default.func
});
function zg(e, t, o, i) {
  var n = Q(), r = tp(e, t, o, i), l = r[0], u = r[1], c = Vr();
  return V(function() {
    if (Nr(t, "selectedItem")) {
      if (!c) {
        var p = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current);
        p && u({
          type: Si,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = l.selectedItem === n.current ? t.selectedItem : l.selectedItem;
    }
  }, [l.selectedItem, t.selectedItem]), [Io(l, t), u];
}
a(zg, "useControlledReducer");
var Rg = Ne, jg = $({}, xo, {
  isItemDisabled: /* @__PURE__ */ a(function() {
    return !1;
  }, "isItemDisabled")
});
function Wg(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case xi:
      l = {
        isOpen: Be(n, "isOpen"),
        highlightedIndex: Be(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case ci:
      e.isOpen ? l = {
        highlightedIndex: Xe(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: r && e.selectedItem == null ? -1 : Lt(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case pi:
      e.isOpen ? r ? l = Br(n, e.highlightedIndex) : l = {
        highlightedIndex: Xe(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: Lt(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case yi:
      l = Br(n, e.highlightedIndex);
      break;
    case di:
      l = $({
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
    case hi:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case gi:
      l = {
        highlightedIndex: Xe(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case fi:
      l = {
        highlightedIndex: gt(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case mi:
      l = {
        highlightedIndex: gt(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Rr:
      l = $({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case bi:
      l = {
        isOpen: !0,
        highlightedIndex: Be(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case vi:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Lt(n, e, 0)
      };
      break;
    case Ii:
      l = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case Si:
      l = {
        inputValue: t.inputValue
      };
      break;
    default:
      return lp(e, t, Tp);
  }
  return $({}, e, l);
}
a(Wg, "downshiftUseComboboxReducer");
var Vg = ["onMouseLeave", "refKey", "ref"], Kg = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "dis\
abled"], $g = ["onClick", "onPress", "refKey", "ref"], Ug = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKe\
y", "ref"];
kp.stateChangeTypes = Tp;
function kp(e) {
  e === void 0 && (e = {}), Rg(e, kp);
  var t = $({}, jg, e), o = t.items, i = t.scrollIntoView, n = t.environment, r = t.getA11yStatusMessage, l = zg(Wg, t, Hg, sp), u = l[0], c = l[1],
  p = u.isOpen, d = u.highlightedIndex, b = u.selectedItem, f = u.inputValue, y = Q(null), m = Q({}), g = Q(null), S = Q(null), _ = Vr(), h = ep(
  t), v = Q(), x = Wr({
    state: u,
    props: t
  }), w = A(function(F) {
    return m.current[h.getItemId(F)];
  }, [h]);
  Xn(r, u, [p, d, b, f], n);
  var T = ip({
    menuElement: y.current,
    highlightedIndex: d,
    isOpen: p,
    itemRefs: m,
    scrollIntoView: i,
    getItemNodeFromIndex: w
  });
  Zn({
    props: t,
    state: u
  }), V(function() {
    var F = Mt(t, "isOpen");
    F && g.current && g.current.focus();
  }, []), V(function() {
    _ || (v.current = o.length);
  });
  var O = np(n, [S, y, g], A(/* @__PURE__ */ a(function() {
    x.current.state.isOpen && c({
      type: Rr,
      selectItem: !1
    });
  }, "handleBlur"), [c, x])), k = Qn("getInputProps", "getMenuProps");
  V(function() {
    p || (m.current = {});
  }, [p]), V(function() {
    var F;
    !p || !(n != null && n.document) || !(g != null && (F = g.current) != null && F.focus) || n.document.activeElement !== g.current && g.current.
    focus();
  }, [p, n]);
  var C = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: ci,
          altKey: B.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: pi,
          altKey: B.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(B) {
        x.current.state.isOpen && (B.preventDefault(), c({
          type: fi
        }));
      }, "Home"),
      End: /* @__PURE__ */ a(function(B) {
        x.current.state.isOpen && (B.preventDefault(), c({
          type: mi
        }));
      }, "End"),
      Escape: /* @__PURE__ */ a(function(B) {
        var L = x.current.state;
        (L.isOpen || L.inputValue || L.selectedItem || L.highlightedIndex > -1) && (B.preventDefault(), c({
          type: di
        }));
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(B) {
        var L = x.current.state;
        !L.isOpen || B.which === 229 || (B.preventDefault(), c({
          type: yi
        }));
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(B) {
        x.current.state.isOpen && (B.preventDefault(), c({
          type: hi
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(B) {
        x.current.state.isOpen && (B.preventDefault(), c({
          type: gi
        }));
      }, "PageDown")
    };
  }, [c, x]), E = A(function(F) {
    return $({
      id: h.labelId,
      htmlFor: h.inputId
    }, F);
  }, [h]), P = A(function(F, B) {
    var L, R = F === void 0 ? {} : F, Z = R.onMouseLeave, re = R.refKey, ee = re === void 0 ? "ref" : re, pe = R.ref, ie = Ee(R, Vg), ue = B ===
    void 0 ? {} : B, le = ue.suppressRefError, be = le === void 0 ? !1 : le;
    return k("getMenuProps", be, ee, y), $((L = {}, L[ee] = Qe(pe, function(me) {
      y.current = me;
    }), L.id = h.menuId, L.role = "listbox", L["aria-labelledby"] = ie && ie["aria-label"] ? void 0 : "" + h.labelId, L.onMouseLeave = ae(Z,
    function() {
      c({
        type: bp
      });
    }), L), ie);
  }, [c, k, h]), D = A(function(F) {
    var B, L, R = F === void 0 ? {} : F, Z = R.item, re = R.index, ee = R.refKey, pe = ee === void 0 ? "ref" : ee, ie = R.ref, ue = R.onMouseMove,
    le = R.onMouseDown, be = R.onClick;
    R.onPress;
    var me = R.disabled, Te = Ee(R, Kg);
    me !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useCombobox.');
    var de = x.current, ve = de.props, we = de.state, De = Gn(Z, re, ve.items, "Pass either item or index to getItemProps!"), Ze = De[0], Oe = De[1],
    Ke = ve.isItemDisabled(Ze, Oe), to = "onClick", Co = be, ut = /* @__PURE__ */ a(function() {
      O.isTouchEnd || Oe === we.highlightedIndex || (T.current = !1, c({
        type: vp,
        index: Oe,
        disabled: Ke
      }));
    }, "itemHandleMouseMove"), yt = /* @__PURE__ */ a(function() {
      c({
        type: xi,
        index: Oe
      });
    }, "itemHandleClick"), ct = /* @__PURE__ */ a(function(ad) {
      return ad.preventDefault();
    }, "itemHandleMouseDown");
    return $((B = {}, B[pe] = Qe(ie, function($e) {
      $e && (m.current[h.getItemId(Oe)] = $e);
    }), B["aria-disabled"] = Ke, B["aria-selected"] = "" + (Oe === we.highlightedIndex), B.id = h.getItemId(Oe), B.role = "option", B), !Ke &&
    (L = {}, L[to] = ae(Co, yt), L), {
      onMouseMove: ae(ue, ut),
      onMouseDown: ae(le, ct)
    }, Te);
  }, [c, h, x, O, T]), M = A(function(F) {
    var B, L = F === void 0 ? {} : F, R = L.onClick;
    L.onPress;
    var Z = L.refKey, re = Z === void 0 ? "ref" : Z, ee = L.ref, pe = Ee(L, $g), ie = x.current.state, ue = /* @__PURE__ */ a(function() {
      c({
        type: xp
      });
    }, "toggleButtonHandleClick");
    return $((B = {}, B[re] = Qe(ee, function(le) {
      S.current = le;
    }), B["aria-controls"] = h.menuId, B["aria-expanded"] = ie.isOpen, B.id = h.toggleButtonId, B.tabIndex = -1, B), !pe.disabled && $({}, {
      onClick: ae(R, ue)
    }), pe);
  }, [c, x, h]), N = A(function(F, B) {
    var L, R = F === void 0 ? {} : F, Z = R.onKeyDown, re = R.onChange, ee = R.onInput, pe = R.onBlur;
    R.onChangeText;
    var ie = R.onClick, ue = R.refKey, le = ue === void 0 ? "ref" : ue, be = R.ref, me = Ee(R, Ug), Te = B === void 0 ? {} : B, de = Te.suppressRefError,
    ve = de === void 0 ? !1 : de;
    k("getInputProps", ve, le, g);
    var we = x.current.state, De = /* @__PURE__ */ a(function(ct) {
      var $e = eo(ct);
      $e && C[$e] && C[$e](ct);
    }, "inputHandleKeyDown"), Ze = /* @__PURE__ */ a(function(ct) {
      c({
        type: bi,
        inputValue: ct.target.value
      });
    }, "inputHandleChange"), Oe = /* @__PURE__ */ a(function(ct) {
      if (n != null && n.document && we.isOpen && !O.isMouseDown) {
        var $e = ct.relatedTarget === null && n.document.activeElement !== n.document.body;
        c({
          type: Rr,
          selectItem: !$e
        });
      }
    }, "inputHandleBlur"), Ke = /* @__PURE__ */ a(function() {
      c({
        type: vi
      });
    }, "inputHandleClick"), to = "onChange", Co = {};
    if (!me.disabled) {
      var ut;
      Co = (ut = {}, ut[to] = ae(re, ee, Ze), ut.onKeyDown = ae(Z, De), ut.onBlur = ae(pe, Oe), ut.onClick = ae(ie, Ke), ut);
    }
    return $((L = {}, L[le] = Qe(be, function(yt) {
      g.current = yt;
    }), L["aria-activedescendant"] = we.isOpen && we.highlightedIndex > -1 ? h.getItemId(we.highlightedIndex) : "", L["aria-autocomplete"] =
    "list", L["aria-controls"] = h.menuId, L["aria-expanded"] = we.isOpen, L["aria-labelledby"] = me && me["aria-label"] ? void 0 : h.labelId,
    L.autoComplete = "off", L.id = h.inputId, L.role = "combobox", L.value = we.inputValue, L), Co, me);
  }, [c, h, n, C, x, O, k]), U = A(function() {
    c({
      type: Ip
    });
  }, [c]), j = A(function() {
    c({
      type: wp
    });
  }, [c]), G = A(function() {
    c({
      type: Sp
    });
  }, [c]), H = A(function(F) {
    c({
      type: Cp,
      highlightedIndex: F
    });
  }, [c]), W = A(function(F) {
    c({
      type: Ii,
      selectedItem: F
    });
  }, [c]), z = A(function(F) {
    c({
      type: _p,
      inputValue: F
    });
  }, [c]), te = A(function() {
    c({
      type: Ep
    });
  }, [c]);
  return {
    // prop getters.
    getItemProps: D,
    getLabelProps: E,
    getMenuProps: P,
    getInputProps: N,
    getToggleButtonProps: M,
    // actions.
    toggleMenu: U,
    openMenu: G,
    closeMenu: j,
    setHighlightedIndex: H,
    setInputValue: z,
    selectItem: W,
    reset: te,
    // state.
    highlightedIndex: d,
    isOpen: p,
    selectedItem: b,
    inputValue: f
  };
}
a(kp, "useCombobox");
var Op = {
  activeIndex: -1,
  selectedItems: []
};
function Ac(e, t) {
  return Mt(e, t, Op);
}
a(Ac, "getInitialValue");
function Dc(e, t) {
  return Be(e, t, Op);
}
a(Dc, "getDefaultValue");
function qg(e) {
  var t = Ac(e, "activeIndex"), o = Ac(e, "selectedItems");
  return {
    activeIndex: t,
    selectedItems: o
  };
}
a(qg, "getInitialState");
function Mc(e) {
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
a(Mc, "isKeyDownOperationPermitted");
function Gg(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
a(Gg, "isStateEqual");
var XD = {
  stateReducer: Mr.stateReducer,
  itemToKey: Mr.itemToKey,
  environment: Mr.environment,
  selectedItems: q.default.array,
  initialSelectedItems: q.default.array,
  defaultSelectedItems: q.default.array,
  getA11yStatusMessage: q.default.func,
  activeIndex: q.default.number,
  initialActiveIndex: q.default.number,
  defaultActiveIndex: q.default.number,
  onActiveIndexChange: q.default.func,
  onSelectedItemsChange: q.default.func,
  keyNavigationNext: q.default.string,
  keyNavigationPrevious: q.default.string
}, Yg = {
  itemToKey: xo.itemToKey,
  stateReducer: xo.stateReducer,
  environment: xo.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, Qg = Ne, wi = 0, Ci = 1, _i = 2, Ei = 3, Ti = 4, ki = 5, Oi = 6, Pi = 7, Ai = 8, Di = 9, Mi = 10, Li = 11, Ni = 12, Xg = /* @__PURE__ */ Object.
freeze({
  __proto__: null,
  SelectedItemClick: wi,
  SelectedItemKeyDownDelete: Ci,
  SelectedItemKeyDownBackspace: _i,
  SelectedItemKeyDownNavigationNext: Ei,
  SelectedItemKeyDownNavigationPrevious: Ti,
  DropdownKeyDownNavigationPrevious: ki,
  DropdownKeyDownBackspace: Oi,
  DropdownClick: Pi,
  FunctionAddSelectedItem: Ai,
  FunctionRemoveSelectedItem: Di,
  FunctionSetSelectedItems: Mi,
  FunctionSetActiveIndex: Li,
  FunctionReset: Ni
});
function Zg(e, t) {
  var o = t.type, i = t.index, n = t.props, r = t.selectedItem, l = e.activeIndex, u = e.selectedItems, c;
  switch (o) {
    case wi:
      c = {
        activeIndex: i
      };
      break;
    case Ti:
      c = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
    case Ei:
      c = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
    case _i:
    case Ci: {
      if (l < 0)
        break;
      var p = l;
      u.length === 1 ? p = -1 : l === u.length - 1 && (p = u.length - 2), c = $({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: p
      });
      break;
    }
    case ki:
      c = {
        activeIndex: u.length - 1
      };
      break;
    case Oi:
      c = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
    case Ai:
      c = {
        selectedItems: [].concat(u, [r])
      };
      break;
    case Pi:
      c = {
        activeIndex: -1
      };
      break;
    case Di: {
      var d = l, b = u.findIndex(function(m) {
        return n.itemToKey(m) === n.itemToKey(r);
      });
      if (b < 0)
        break;
      u.length === 1 ? d = -1 : b === u.length - 1 && (d = u.length - 2), c = {
        selectedItems: [].concat(u.slice(0, b), u.slice(b + 1)),
        activeIndex: d
      };
      break;
    }
    case Mi: {
      var f = t.selectedItems;
      c = {
        selectedItems: f
      };
      break;
    }
    case Li: {
      var y = t.activeIndex;
      c = {
        activeIndex: y
      };
      break;
    }
    case Ni:
      c = {
        activeIndex: Dc(n, "activeIndex"),
        selectedItems: Dc(n, "selectedItems")
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
  return $({}, e, c);
}
a(Zg, "downshiftMultipleSelectionReducer");
var Jg = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], ey = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyActio\
n"];
Pp.stateChangeTypes = Xg;
function Pp(e) {
  e === void 0 && (e = {}), Qg(e, Pp);
  var t = $({}, Yg, e), o = t.getA11yStatusMessage, i = t.environment, n = t.keyNavigationNext, r = t.keyNavigationPrevious, l = op(Zg, t, qg,
  Gg), u = l[0], c = l[1], p = u.activeIndex, d = u.selectedItems, b = Vr(), f = Q(null), y = Q();
  y.current = [];
  var m = Wr({
    state: u,
    props: t
  });
  Xn(o, u, [p, d], i), V(function() {
    b || (p === -1 && f.current ? f.current.focus() : y.current[p] && y.current[p].focus());
  }, [p]), Zn({
    props: t,
    state: u
  });
  var g = Qn("getDropdownProps"), S = K(function() {
    var C;
    return C = {}, C[r] = function() {
      c({
        type: Ti
      });
    }, C[n] = function() {
      c({
        type: Ei
      });
    }, C.Delete = /* @__PURE__ */ a(function() {
      c({
        type: Ci
      });
    }, "Delete"), C.Backspace = /* @__PURE__ */ a(function() {
      c({
        type: _i
      });
    }, "Backspace"), C;
  }, [c, n, r]), _ = K(function() {
    var C;
    return C = {}, C[r] = function(E) {
      Mc(E) && c({
        type: ki
      });
    }, C.Backspace = /* @__PURE__ */ a(function(P) {
      Mc(P) && c({
        type: Oi
      });
    }, "Backspace"), C;
  }, [c, r]), h = A(function(C) {
    var E, P = C === void 0 ? {} : C, D = P.refKey, M = D === void 0 ? "ref" : D, N = P.ref, U = P.onClick, j = P.onKeyDown, G = P.selectedItem,
    H = P.index, W = Ee(P, Jg), z = m.current.state, te = Gn(G, H, z.selectedItems, "Pass either item or index to getSelectedItemProps!"), F = te[1],
    B = F > -1 && F === z.activeIndex, L = /* @__PURE__ */ a(function() {
      c({
        type: wi,
        index: F
      });
    }, "selectedItemHandleClick"), R = /* @__PURE__ */ a(function(re) {
      var ee = eo(re);
      ee && S[ee] && S[ee](re);
    }, "selectedItemHandleKeyDown");
    return $((E = {}, E[M] = Qe(N, function(Z) {
      Z && y.current.push(Z);
    }), E.tabIndex = B ? 0 : -1, E.onClick = ae(U, L), E.onKeyDown = ae(j, R), E), W);
  }, [c, m, S]), v = A(function(C, E) {
    var P, D = C === void 0 ? {} : C, M = D.refKey, N = M === void 0 ? "ref" : M, U = D.ref, j = D.onKeyDown, G = D.onClick, H = D.preventKeyAction,
    W = H === void 0 ? !1 : H, z = Ee(D, ey), te = E === void 0 ? {} : E, F = te.suppressRefError, B = F === void 0 ? !1 : F;
    g("getDropdownProps", B, N, f);
    var L = /* @__PURE__ */ a(function(re) {
      var ee = eo(re);
      ee && _[ee] && _[ee](re);
    }, "dropdownHandleKeyDown"), R = /* @__PURE__ */ a(function() {
      c({
        type: Pi
      });
    }, "dropdownHandleClick");
    return $((P = {}, P[N] = Qe(U, function(Z) {
      Z && (f.current = Z);
    }), P), !W && {
      onKeyDown: ae(j, L),
      onClick: ae(G, R)
    }, z);
  }, [c, _, g]), x = A(function(C) {
    c({
      type: Ai,
      selectedItem: C
    });
  }, [c]), w = A(function(C) {
    c({
      type: Di,
      selectedItem: C
    });
  }, [c]), T = A(function(C) {
    c({
      type: Mi,
      selectedItems: C
    });
  }, [c]), O = A(function(C) {
    c({
      type: Li,
      activeIndex: C
    });
  }, [c]), k = A(function() {
    c({
      type: Ni
    });
  }, [c]);
  return {
    getSelectedItemProps: h,
    getDropdownProps: v,
    addSelectedItem: x,
    removeSelectedItem: w,
    setSelectedItems: T,
    setActiveIndex: O,
    reset: k,
    selectedItems: d,
    activeIndex: p
  };
}
a(Pp, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var Dp = Fe(Ap(), 1);

// src/manager/components/sidebar/types.ts
function wo(e) {
  return !!(e && e.showAll);
}
a(wo, "isExpandType");
function Bi(e) {
  return !!(e && e.item);
}
a(Bi, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: ty } = ne, Hi = 50, oy = {
  shouldSort: !0,
  tokenize: !0,
  findAllMatches: !0,
  includeScore: !0,
  includeMatches: !0,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
}, ry = I.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
}), ny = I.label({
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
}), iy = I.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 2,
  flexGrow: 1,
  height: 32,
  width: "100%",
  boxShadow: `${e.button.border} 0 0 0 1px inset`,
  borderRadius: e.appBorderRadius + 2,
  "&:has(input:focus), &:has(input:active)": {
    boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
    background: e.background.app
  }
})), sy = I.div(({ theme: e, onClick: t }) => ({
  cursor: t ? "pointer" : "default",
  flex: "0 0 28px",
  height: "100%",
  pointerEvents: t ? "auto" : "none",
  color: e.textMutedColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
})), ay = I.input(({ theme: e }) => ({
  appearance: "none",
  height: 28,
  width: "100%",
  padding: 0,
  border: 0,
  background: "transparent",
  fontSize: `${e.typography.size.s1 + 1}px`,
  fontFamily: "inherit",
  transition: "all 150ms",
  color: e.color.defaultText,
  outline: 0,
  "&::placeholder": {
    color: e.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
})), ly = I.code(({ theme: e }) => ({
  margin: 5,
  marginTop: 6,
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4,
  flexShrink: 0
})), uy = I.span({
  fontSize: "14px"
}), cy = I.div({
  display: "flex",
  alignItems: "center",
  gap: 2
}), py = I.div({ outline: 0 }), Mp = s.memo(/* @__PURE__ */ a(function({
  children: t,
  dataset: o,
  enableShortcuts: i = !0,
  getLastViewed: n,
  initialQuery: r = "",
  searchBarContent: l,
  searchFieldContent: u
}) {
  let c = se(), p = Q(null), [d, b] = X("Find components"), [f, y] = X(!1), m = c ? qe(c.getShortcutKeys().search) : "/", g = A(() => {
    let w = o.entries.reduce((T, [O, { index: k, status: C }]) => {
      let E = gr(k || {}, C);
      return k && T.push(
        ...Object.values(k).map((P) => {
          let D = C && C[P.id] ? vo(Object.values(C[P.id] || {}).map((M) => M.status)) : null;
          return {
            ...Bn(P, o.hash[O]),
            status: D || E[P.id] || null
          };
        })
      ), T;
    }, []);
    return new Dp.default(w, oy);
  }, [o]), S = A(
    (w) => {
      let T = g();
      if (!w)
        return [];
      let O = [], k = /* @__PURE__ */ new Set(), C = T.search(w).filter(({ item: E }) => !(E.type === "component" || E.type === "docs" || E.
      type === "story") || // @ts-expect-error (non strict)
      k.has(E.parent) ? !1 : (k.add(E.id), !0));
      return C.length && (O = C.slice(0, f ? 1e3 : Hi), C.length > Hi && !f && O.push({
        showAll: /* @__PURE__ */ a(() => y(!0), "showAll"),
        totalCount: C.length,
        moreCount: C.length - Hi
      })), O;
    },
    [f, g]
  ), _ = A(
    (w) => {
      if (Bi(w)) {
        let { id: T, refId: O } = w.item;
        c?.selectStory(T, void 0, { ref: O !== ot && O }), p.current.blur(), y(!1);
        return;
      }
      wo(w) && w.showAll();
    },
    [c]
  ), h = A((w, T) => {
    y(!1);
  }, []), v = A(
    (w, T) => {
      switch (T.type) {
        case Nt.stateChangeTypes.blurInput:
          return {
            ...T,
            // Prevent clearing the input on blur
            inputValue: w.inputValue,
            // Return to the tree view after selecting an item
            isOpen: w.inputValue && !w.selectedItem
          };
        case Nt.stateChangeTypes.mouseUp:
          return w;
        case Nt.stateChangeTypes.keyDownEscape:
          return w.inputValue ? { ...T, inputValue: "", isOpen: !0, selectedItem: null } : { ...T, isOpen: !1, selectedItem: null };
        case Nt.stateChangeTypes.clickItem:
        case Nt.stateChangeTypes.keyDownEnter:
          return Bi(T.selectedItem) ? { ...T, inputValue: w.inputValue } : wo(T.selectedItem) ? w : T;
        default:
          return T;
      }
    },
    []
  ), { isMobile: x } = Se();
  return (
    // @ts-expect-error (non strict)
    /* @__PURE__ */ s.createElement(
      Nt,
      {
        initialInputValue: r,
        stateReducer: v,
        itemToString: (w) => w?.item?.name || "",
        scrollIntoView: (w) => Tt(w),
        onSelect: _,
        onInputValueChange: h
      },
      ({
        isOpen: w,
        openMenu: T,
        closeMenu: O,
        inputValue: k,
        clearSelection: C,
        getInputProps: E,
        getItemProps: P,
        getLabelProps: D,
        getMenuProps: M,
        getRootProps: N,
        highlightedIndex: U
      }) => {
        let j = k ? k.trim() : "", G = j ? S(j) : [], H = !j && n();
        H && H.length && (G = H.reduce((F, { storyId: B, refId: L }) => {
          let R = o.hash[L];
          if (R && R.index && R.index[B]) {
            let Z = R.index[B], re = Z.type === "story" ? R.index[Z.parent] : Z;
            F.some((ee) => ee.item.refId === L && ee.item.id === re.id) || F.push({ item: Bn(re, o.hash[L]), matches: [], score: 0 });
          }
          return F;
        }, []));
        let W = "storybook-explorer-searchfield", z = E({
          id: W,
          ref: p,
          required: !0,
          type: "search",
          placeholder: d,
          onFocus: /* @__PURE__ */ a(() => {
            T(), b("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ a(() => b("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ a((F) => {
            F.key === "Escape" && k.length === 0 && p.current.blur();
          }, "onKeyDown")
        }), te = D({
          htmlFor: W
        });
        return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ny, { ...te }, "Search for components"), /* @__PURE__ */ s.
        createElement(ry, null, /* @__PURE__ */ s.createElement(
          iy,
          {
            ...N({ refKey: "" }, { suppressRefError: !0 }),
            className: "search-field"
          },
          /* @__PURE__ */ s.createElement(sy, null, /* @__PURE__ */ s.createElement(Yo, null)),
          /* @__PURE__ */ s.createElement(ay, { ...z }),
          !x && i && !w && /* @__PURE__ */ s.createElement(ly, null, m === "\u2318 K" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.
          createElement(uy, null, "\u2318"), "K") : m),
          /* @__PURE__ */ s.createElement(cy, null, w && /* @__PURE__ */ s.createElement(J, { onClick: () => C() }, /* @__PURE__ */ s.createElement(
          Ge, null)), u)
        ), l), /* @__PURE__ */ s.createElement(py, { tabIndex: 0, id: "storybook-explorer-menu" }, t({
          query: j,
          results: G,
          isBrowsing: !w && ty.activeElement !== p.current,
          closeMenu: O,
          getMenuProps: M,
          getItemProps: P,
          highlightedIndex: U
        })));
      }
    )
  );
}, "Search"));

// src/manager/components/sidebar/SearchResults.tsx
var { document: Lp } = ne, dy = I.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
}), fy = I.li(({ theme: e, isHighlighted: t }) => ({
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "left",
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: t ? e.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
    background: he(0.93, e.color.secondary),
    outline: "none"
  }
})), my = I.div({
  marginTop: 2
}), hy = I.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), gy = I.div(({ theme: e }) => ({
  marginTop: 20,
  textAlign: "center",
  fontSize: `${e.typography.size.s2}px`,
  lineHeight: "18px",
  color: e.color.defaultText,
  small: {
    color: e.barTextColor,
    fontSize: `${e.typography.size.s1}px`
  }
})), yy = I.mark(({ theme: e }) => ({
  background: "transparent",
  color: e.color.secondary
})), by = I.div({
  marginTop: 8
}), vy = I.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
})), Np = s.memo(/* @__PURE__ */ a(function({
  children: t,
  match: o
}) {
  if (!o)
    return t;
  let { value: i, indices: n } = o, { nodes: r } = n.reduce(
    ({ cursor: l, nodes: u }, [c, p], d, { length: b }) => (u.push(/* @__PURE__ */ s.createElement("span", { key: `${d}-1` }, i.slice(l, c))),
    u.push(/* @__PURE__ */ s.createElement(yy, { key: `${d}-2` }, i.slice(c, p + 1))), d === b - 1 && u.push(/* @__PURE__ */ s.createElement(
    "span", { key: `${d}-3` }, i.slice(p + 1))), { cursor: p + 1, nodes: u }),
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ s.createElement("span", null, r);
}, "Highlight")), xy = I.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
})), Iy = I.div(({ theme: e }) => ({
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  fontSize: `${e.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
})), Sy = s.memo(/* @__PURE__ */ a(function({ item: t, matches: o, onClick: i, ...n }) {
  let r = A(
    (d) => {
      d.preventDefault(), i?.(d);
    },
    [i]
  ), l = se();
  V(() => {
    l && n.isHighlighted && t.type === "component" && l.emit(bt, { ids: [t.children[0]] }, { options: { target: t.refId } });
  }, [n.isHighlighted, t]);
  let u = o.find((d) => d.key === "name"), c = o.filter((d) => d.key === "path"), [p] = t.status ? bo[t.status] : [];
  return /* @__PURE__ */ s.createElement(fy, { ...n, onClick: r }, /* @__PURE__ */ s.createElement(my, null, t.type === "component" && /* @__PURE__ */ s.
  createElement(mt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ s.createElement(Me, { type: "com\
ponent" })), t.type === "story" && /* @__PURE__ */ s.createElement(mt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ s.
  createElement(Me, { type: "story" })), !(t.type === "component" || t.type === "story") && /* @__PURE__ */ s.createElement(mt, { viewBox: "\
0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ s.createElement(Me, { type: "document" }))), /* @__PURE__ */ s.createElement(
  hy, { className: "search-result-item--label" }, /* @__PURE__ */ s.createElement(xy, null, /* @__PURE__ */ s.createElement(Np, { match: u },
  t.name)), /* @__PURE__ */ s.createElement(Iy, null, t.path.map((d, b) => /* @__PURE__ */ s.createElement("span", { key: b }, /* @__PURE__ */ s.
  createElement(Np, { match: c.find((f) => f.arrayIndex === b) }, d))))), t.status ? /* @__PURE__ */ s.createElement(Xu, { status: t.status },
  p) : null);
}, "Result")), Fp = s.memo(/* @__PURE__ */ a(function({
  query: t,
  results: o,
  closeMenu: i,
  getMenuProps: n,
  getItemProps: r,
  highlightedIndex: l,
  isLoading: u = !1,
  enableShortcuts: c = !0,
  clearLastViewed: p
}) {
  let d = se();
  V(() => {
    let y = /* @__PURE__ */ a((m) => {
      if (!(!c || u || m.repeat) && ht(!1, m) && We("Escape", m)) {
        if (m.target?.id === "storybook-explorer-searchfield")
          return;
        m.preventDefault(), i();
      }
    }, "handleEscape");
    return Lp.addEventListener("keydown", y), () => Lp.removeEventListener("keydown", y);
  }, [i, c, u]);
  let b = A((y) => {
    if (!d)
      return;
    let m = y.currentTarget, g = m.getAttribute("data-id"), S = m.getAttribute("data-refid"), _ = d.resolveStory(g, S === "storybook_interna\
l" ? void 0 : S);
    _?.type === "component" && d.emit(bt, {
      // @ts-expect-error (TODO)
      ids: [_.isLeaf ? _.id : _.children[0]],
      options: { target: S }
    });
  }, []), f = /* @__PURE__ */ a(() => {
    p(), i();
  }, "handleClearLastViewed");
  return /* @__PURE__ */ s.createElement(dy, { ...n() }, o.length > 0 && !t && /* @__PURE__ */ s.createElement(vy, { className: "search-resu\
lt-recentlyOpened" }, "Recently opened", /* @__PURE__ */ s.createElement(
    J,
    {
      className: "search-result-recentlyOpened-clear",
      onClick: f
    },
    /* @__PURE__ */ s.createElement(ha, null)
  )), o.length === 0 && t && /* @__PURE__ */ s.createElement("li", null, /* @__PURE__ */ s.createElement(gy, null, /* @__PURE__ */ s.createElement(
  "strong", null, "No components found"), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("small", null, "Find \
components by name or path."))), o.map((y, m) => {
    if (wo(y))
      return /* @__PURE__ */ s.createElement(by, { key: "search-result-expand" }, /* @__PURE__ */ s.createElement(
        Ie,
        {
          ...y,
          ...r({ key: m, index: m, item: y }),
          size: "small"
        },
        "Show ",
        y.moreCount,
        " more results"
      ));
    let { item: g } = y, S = `${g.refId}::${g.id}`;
    return /* @__PURE__ */ s.createElement(
      Sy,
      {
        key: g.id,
        ...y,
        ...r({ key: S, index: m, item: y }),
        isHighlighted: l === m,
        "data-id": y.item.id,
        "data-refid": y.item.refId,
        onMouseOver: b,
        className: "search-result-item"
      }
    );
  }));
}, "SearchResults"));

// src/manager/components/sidebar/FilterToggle.tsx
var wy = I(Vt)(({ theme: e }) => ({
  padding: "4px 8px",
  fontSize: e.typography.size.s1
})), Cy = I(J)(
  ({ theme: e }) => ({
    fontSize: e.typography.size.s2,
    "&:hover [data-badge][data-status=warning], [data-badge=true][data-status=warning]": {
      background: "#E3F3FF",
      borderColor: "rgba(2, 113, 182, 0.1)",
      color: "#0271B6"
    },
    "&:hover [data-badge][data-status=critical], [data-badge=true][data-status=critical]": {
      background: e.background.negative,
      boxShadow: "inset 0 0 0 1px rgba(182, 2, 2, 0.1)",
      color: e.color.negativeText
    }
  }),
  ({ active: e, theme: t }) => !e && bs({
    "&:hover": {
      color: t.base === "light" ? t.color.defaultText : t.color.light
    }
  })
), _y = I.span(({ theme: e }) => ({
  color: e.base === "light" ? e.color.defaultText : e.color.light
})), zi = /* @__PURE__ */ a(({
  active: e,
  count: t,
  label: o,
  status: i,
  ...n
}) => /* @__PURE__ */ s.createElement(Cy, { active: e, ...n }, /* @__PURE__ */ s.createElement(wy, { status: i, "data-badge": e, "data-statu\
s": i }, t), /* @__PURE__ */ s.createElement(_y, null, `${o}${t === 1 ? "" : "s"}`)), "FilterToggle");

// src/manager/components/sidebar/SidebarBottom.tsx
var Ey = /* @__PURE__ */ a(() => !0, "filterNone"), Ty = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status ===
"warn"), "filterWarn"), ky = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status === "error"), "filterError"), Oy = /* @__PURE__ */ a(
({ status: e = {} }) => Object.values(e).some((t) => t?.status === "warn" || t?.status === "error"), "filterBoth"), Py = /* @__PURE__ */ a((e = !1, t = !1) => e &&
t ? Oy : e ? Ty : t ? ky : Ey, "getFilter"), Ay = I.div({
  display: "flex",
  gap: 5
}), Dy = /* @__PURE__ */ a(({ api: e, status: t = {} }) => {
  let [o, i] = s.useState(!1), [n, r] = s.useState(!1), l = Object.values(t).filter(
    (f) => Object.values(f).some((y) => y?.status === "warn")
  ), u = Object.values(t).filter(
    (f) => Object.values(f).some((y) => y?.status === "error")
  ), c = l.length > 0, p = u.length > 0, d = A(() => i((f) => !f), []), b = A(() => r((f) => !f), []);
  return V(() => {
    let f = Py(c && o, p && n);
    e.experimental_setFilter("sidebar-bottom-filter", f);
  }, [e, c, p, o, n]), !c && !p ? null : /* @__PURE__ */ s.createElement(Ay, { id: "sidebar-bottom-wrapper" }, p && /* @__PURE__ */ s.createElement(
    zi,
    {
      id: "errors-found-filter",
      active: n,
      count: u.length,
      label: "Error",
      status: "critical",
      onClick: b
    }
  ), c && /* @__PURE__ */ s.createElement(
    zi,
    {
      id: "warnings-found-filter",
      active: o,
      count: l.length,
      label: "Warning",
      status: "warning",
      onClick: d
    }
  ));
}, "SidebarBottomBase"), Bp = /* @__PURE__ */ a(() => {
  let e = se(), { status: t } = ze();
  return /* @__PURE__ */ s.createElement(Dy, { api: e, status: t });
}, "SidebarBottom");

// src/manager/components/sidebar/TagsFilterPanel.tsx
var My = /* @__PURE__ */ new Set(["play-fn"]), Ly = I.div({
  minWidth: 180,
  maxWidth: 220
}), Hp = /* @__PURE__ */ a(({
  api: e,
  allTags: t,
  selectedTags: o,
  toggleTag: i,
  isDevelopment: n
}) => {
  let r = _e(), l = t.filter((p) => !My.has(p)), u = e.getDocsUrl({ subpath: "writing-stories/tags#filtering-by-custom-tags" }), c = t.map((p) => {
    let d = o.includes(p), b = `tag-${p}`;
    return {
      id: b,
      title: p,
      right: /* @__PURE__ */ s.createElement("input", { type: "checkbox", id: b, name: b, value: p, checked: d }),
      onClick: /* @__PURE__ */ a(() => i(p), "onClick")
    };
  });
  return t.length === 0 && c.push({
    id: "no-tags",
    title: "There are no tags. Use tags to organize and filter your Storybook.",
    isIndented: !1
  }), l.length === 0 && n && c.push({
    id: "tags-docs",
    title: "Learn how to add tags",
    icon: /* @__PURE__ */ s.createElement(st, null),
    href: u,
    style: {
      borderTop: `4px solid ${r.appBorderColor}`
    }
  }), /* @__PURE__ */ s.createElement(Ly, null, /* @__PURE__ */ s.createElement(it, { links: c }));
}, "TagsFilterPanel");

// src/manager/components/sidebar/TagsFilter.tsx
var Ny = "tags-filter", Fy = /* @__PURE__ */ new Set([
  "dev",
  "docs-only",
  "test-only",
  "autodocs",
  "test",
  "attached-mdx",
  "unattached-mdx"
]), By = I.div({
  position: "relative"
}), Hy = I(Vt)(({ theme: e }) => ({
  position: "absolute",
  top: 7,
  right: 7,
  transform: "translate(50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 3,
  height: 6,
  minWidth: 6,
  lineHeight: "px",
  boxShadow: `${e.barSelectedColor} 0 0 0 1px inset`,
  fontSize: e.typography.size.s1 - 1,
  background: e.color.secondary,
  color: e.color.lightest
})), zp = /* @__PURE__ */ a(({
  api: e,
  indexJson: t,
  initialSelectedTags: o = [],
  isDevelopment: i
}) => {
  let [n, r] = X(o), [l, u] = X(!1), c = n.length > 0;
  V(() => {
    e.experimental_setFilter(Ny, (f) => n.length === 0 ? !0 : n.some((y) => f.tags?.includes(y)));
  }, [e, n]);
  let p = Object.values(t.entries).reduce((f, y) => (y.tags?.forEach((m) => {
    Fy.has(m) || f.add(m);
  }), f), /* @__PURE__ */ new Set()), d = A(
    (f) => {
      n.includes(f) ? r(n.filter((y) => y !== f)) : r([...n, f]);
    },
    [n, r]
  ), b = A(
    (f) => {
      f.preventDefault(), u(!l);
    },
    [l, u]
  );
  return p.size === 0 && !i ? null : /* @__PURE__ */ s.createElement(
    Ae,
    {
      placement: "bottom",
      trigger: "click",
      onVisibleChange: u,
      tooltip: () => /* @__PURE__ */ s.createElement(
        Hp,
        {
          api: e,
          allTags: Array.from(p).toSorted(),
          selectedTags: n,
          toggleTag: d,
          isDevelopment: i
        }
      ),
      closeOnOutsideClick: !0
    },
    /* @__PURE__ */ s.createElement(By, null, /* @__PURE__ */ s.createElement(J, { key: "tags", title: "Tag filters", active: c, onClick: b },
    /* @__PURE__ */ s.createElement(ia, null)), n.length > 0 && /* @__PURE__ */ s.createElement(Hy, null))
  );
}, "TagsFilter");

// ../node_modules/es-toolkit/dist/compat/function/debounce.mjs
function Ri(e, t = 0, o = {}) {
  typeof o != "object" && (o = {});
  let { signal: i, leading: n = !1, trailing: r = !0, maxWait: l } = o, u = Array(2);
  n && (u[0] = "leading"), r && (u[1] = "trailing");
  let c, p = null, d = br(function(...y) {
    c = e.apply(this, y), p = null;
  }, t, { signal: i, edges: u }), b = /* @__PURE__ */ a(function(...y) {
    if (l != null) {
      if (p === null)
        p = Date.now();
      else if (Date.now() - p >= l)
        return c = e.apply(this, y), p = Date.now(), d.cancel(), d.schedule(), c;
    }
    return d.apply(this, y), c;
  }, "debounced"), f = /* @__PURE__ */ a(() => (d.flush(), c), "flush");
  return b.cancel = d.cancel, b.flush = f, b;
}
a(Ri, "debounce");

// src/manager/components/sidebar/useLastViewed.ts
var Ur = Fe(Rp(), 1);
var jp = Ri((e) => Ur.default.set("lastViewedStoryIds", e), 1e3), Wp = /* @__PURE__ */ a((e) => {
  let t = K(() => {
    let n = Ur.default.get("lastViewedStoryIds");
    return !n || !Array.isArray(n) ? [] : n.some((r) => typeof r == "object" && r.storyId && r.refId) ? n : [];
  }, [Ur.default]), o = Q(t), i = A(
    (n) => {
      let r = o.current, l = r.findIndex(
        ({ storyId: u, refId: c }) => u === n.storyId && c === n.refId
      );
      l !== 0 && (l === -1 ? o.current = [n, ...r] : o.current = [n, ...r.slice(0, l), ...r.slice(l + 1)], jp(o.current));
    },
    [o]
  );
  return V(() => {
    e && i(e);
  }, [e]), {
    getLastViewed: A(() => o.current, [o]),
    clearLastViewed: A(() => {
      o.current = o.current.slice(0, 1), jp(o.current);
    }, [o])
  };
}, "useLastViewed");

// src/manager/components/sidebar/Sidebar.tsx
var ot = "storybook_internal", zy = I.nav(({ theme: e }) => ({
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: e.background.content,
  [rt]: {
    background: e.background.app
  }
})), Ry = I(nt)({
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
}), jy = I.div(({ theme: e }) => ({
  borderTop: `1px solid ${e.appBorderColor}`,
  padding: e.layoutMargin / 2,
  display: "flex",
  flexWrap: "wrap",
  gap: e.layoutMargin / 2,
  backgroundColor: e.barBg,
  "&:empty": {
    display: "none"
  }
})), Wy = I(Wo)({
  margin: 0
}), Vy = I(J)(({ theme: e }) => ({
  color: e.color.mediumdark,
  width: 32,
  height: 32,
  borderRadius: e.appBorderRadius + 2
})), Ky = s.memo(/* @__PURE__ */ a(function({
  children: t,
  condition: o
}) {
  let [i, n] = s.Children.toArray(t);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { style: { display: o ? "block" : "none" } },
  i), /* @__PURE__ */ s.createElement("div", { style: { display: o ? "none" : "block" } }, n));
}, "Swap")), $y = /* @__PURE__ */ a((e, t, o, i, n) => {
  let r = K(
    () => ({
      [ot]: {
        index: e,
        indexError: t,
        previewInitialized: o,
        status: i,
        title: null,
        id: ot,
        url: "iframe.html"
      },
      ...n
    }),
    [n, e, t, o, i]
  );
  return K(() => ({ hash: r, entries: Object.entries(r) }), [r]);
}, "useCombination"), Vp = ne.CONFIG_TYPE === "DEVELOPMENT", Uy = ne.STORYBOOK_RENDERER === "react", Kp = s.memo(/* @__PURE__ */ a(function({
  // @ts-expect-error (non strict)
  storyId: t = null,
  refId: o = ot,
  index: i,
  indexJson: n,
  indexError: r,
  status: l,
  previewInitialized: u,
  menu: c,
  extra: p,
  menuHighlighted: d = !1,
  enableShortcuts: b = !0,
  refs: f = {},
  onMenuClick: y,
  showCreateStoryButton: m = Vp && Uy
}) {
  let [g, S] = X(!1), _ = K(() => t && { storyId: t, refId: o }, [t, o]), h = $y(i, r, u, l, f), v = !i && !r, x = Wp(_), w = se();
  return /* @__PURE__ */ s.createElement(zy, { className: "container sidebar-container" }, /* @__PURE__ */ s.createElement(Ho, { vertical: !0,
  offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ s.createElement(Ry, { row: 1.6 }, /* @__PURE__ */ s.createElement(
    vc,
    {
      className: "sidebar-header",
      menuHighlighted: d,
      menu: c,
      extra: p,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading: v,
      onMenuClick: y
    }
  ), /* @__PURE__ */ s.createElement(
    Mp,
    {
      dataset: h,
      enableShortcuts: b,
      searchBarContent: m && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
        Ae,
        {
          trigger: "hover",
          hasChrome: !1,
          tooltip: /* @__PURE__ */ s.createElement(Wy, { note: "Create a new story" })
        },
        /* @__PURE__ */ s.createElement(
          Vy,
          {
            onClick: () => {
              S(!0);
            },
            variant: "outline"
          },
          /* @__PURE__ */ s.createElement(pa, null)
        )
      ), /* @__PURE__ */ s.createElement(
        Iu,
        {
          open: g,
          onOpenChange: S
        }
      )),
      searchFieldContent: n && /* @__PURE__ */ s.createElement(zp, { api: w, indexJson: n, isDevelopment: Vp }),
      ...x
    },
    ({
      query: T,
      results: O,
      isBrowsing: k,
      closeMenu: C,
      getMenuProps: E,
      getItemProps: P,
      highlightedIndex: D
    }) => /* @__PURE__ */ s.createElement(Ky, { condition: k }, /* @__PURE__ */ s.createElement(
      mc,
      {
        dataset: h,
        selected: _,
        isLoading: v,
        isBrowsing: k
      }
    ), /* @__PURE__ */ s.createElement(
      Fp,
      {
        query: T,
        results: O,
        closeMenu: C,
        getMenuProps: E,
        getItemProps: P,
        highlightedIndex: D,
        enableShortcuts: b,
        isLoading: v,
        clearLastViewed: x.clearLastViewed
      }
    ))
  ))), v ? null : /* @__PURE__ */ s.createElement(jy, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(Bp, null)));
}, "Sidebar"));

// src/manager/container/Menu.tsx
var qy = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, Gy = I.span(({ theme: e }) => ({
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: e.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
})), Yy = I.code(
  ({ theme: e }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`
), He = /* @__PURE__ */ a(({ keys: e }) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Gy, null, e.map(
(t, o) => /* @__PURE__ */ s.createElement(Yy, { key: t }, qe([t]))))), "Shortcut"), $p = /* @__PURE__ */ a((e, t, o, i, n, r, l) => {
  let u = _e(), c = t.getShortcutKeys(), p = K(
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("about"), "onClick"),
      icon: /* @__PURE__ */ s.createElement(aa, null)
    }),
    [t]
  ), d = K(() => ({
    id: "documentation",
    title: "Documentation",
    href: t.getDocsUrl({ versioned: !0, renderer: !0 }),
    icon: /* @__PURE__ */ s.createElement(st, null)
  }), [t]), b = e.whatsNewData?.status === "SUCCESS" && !e.disableWhatsNewNotifications, f = t.isWhatsNewUnread(), y = K(
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("whats-new"), "onClick"),
      right: b && f && /* @__PURE__ */ s.createElement(Vt, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ s.createElement(ga, null)
    }),
    [t, b, f]
  ), m = K(
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("shortcuts"), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.shortcutsPage }) : null,
      style: {
        borderBottom: `4px solid ${u.appBorderColor}`
      }
    }),
    [t, l, c.shortcutsPage, u.appBorderColor]
  ), g = K(
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: /* @__PURE__ */ a(() => t.toggleNav(), "onClick"),
      active: r,
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.toggleNav }) : null,
      icon: r ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, c, r]
  ), S = K(
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: /* @__PURE__ */ a(() => t.toggleToolbar(), "onClick"),
      active: o,
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.toolbar }) : null,
      icon: o ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, c, o]
  ), _ = K(
    () => ({
      id: "A",
      title: "Show addons",
      onClick: /* @__PURE__ */ a(() => t.togglePanel(), "onClick"),
      active: n,
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.togglePanel }) : null,
      icon: n ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, c, n]
  ), h = K(
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: /* @__PURE__ */ a(() => t.togglePanelPosition(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.panelPosition }) : null
    }),
    [t, l, c]
  ), v = K(
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: /* @__PURE__ */ a(() => t.toggleFullscreen(), "onClick"),
      active: i,
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.fullScreen }) : null,
      icon: i ? /* @__PURE__ */ s.createElement(je, null) : null
    }),
    [t, l, c, i]
  ), x = K(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ a(() => t.focusOnUIElement(qy.storySearchField), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.search }) : null
    }),
    [t, l, c]
  ), w = K(
    () => ({
      id: "up",
      title: "Previous component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.prevComponent }) : null
    }),
    [t, l, c]
  ), T = K(
    () => ({
      id: "down",
      title: "Next component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.nextComponent }) : null
    }),
    [t, l, c]
  ), O = K(
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(-1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.prevStory }) : null
    }),
    [t, l, c]
  ), k = K(
    () => ({
      id: "next",
      title: "Next story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(1), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.nextStory }) : null
    }),
    [t, l, c]
  ), C = K(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ a(() => t.emit(ro), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: c.collapseAll }) : null
    }),
    [t, l, c]
  ), E = A(() => {
    let P = t.getAddonsShortcuts(), D = c;
    return Object.entries(P).filter(([M, { showInMenu: N }]) => N).map(([M, { label: N, action: U }]) => ({
      id: M,
      title: N,
      onClick: /* @__PURE__ */ a(() => U(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(He, { keys: D[M] }) : null
    }));
  }, [t, l, c]);
  return K(
    () => [
      p,
      ...e.whatsNewData?.status === "SUCCESS" ? [y] : [],
      d,
      m,
      g,
      S,
      _,
      h,
      v,
      x,
      w,
      T,
      O,
      k,
      C,
      ...E()
    ],
    [
      p,
      e,
      y,
      d,
      m,
      g,
      S,
      _,
      h,
      v,
      x,
      w,
      T,
      O,
      k,
      C,
      E
    ]
  );
}, "useMenu");

// src/manager/container/Sidebar.tsx
var Qy = s.memo(/* @__PURE__ */ a(function({ onMenuClick: t }) {
  return /* @__PURE__ */ s.createElement(fe, { filter: /* @__PURE__ */ a(({ state: i, api: n }) => {
    let {
      ui: { name: r, url: l, enableShortcuts: u },
      viewMode: c,
      storyId: p,
      refId: d,
      layout: { showToolbar: b },
      // FIXME: This is the actual `index.json` index where the `index` below
      // is actually the stories hash. We should fix this up and make it consistent.
      // eslint-disable-next-line @typescript-eslint/naming-convention
      internal_index: f,
      index: y,
      status: m,
      indexError: g,
      previewInitialized: S,
      refs: _
    } = i, h = $p(
      i,
      n,
      b,
      n.getIsFullscreen(),
      n.getIsPanelShown(),
      n.getIsNavShown(),
      u
    ), v = i.whatsNewData?.status === "SUCCESS" && !i.disableWhatsNewNotifications, x = n.getElements(ke.experimental_SIDEBAR_TOP), w = K(() => Object.
    values(x), [Object.keys(x).join("")]);
    return {
      title: r,
      url: l,
      indexJson: f,
      index: y,
      indexError: g,
      status: m,
      previewInitialized: S,
      refs: _,
      storyId: p,
      refId: d,
      viewMode: c,
      menu: h,
      menuHighlighted: v && n.isWhatsNewUnread(),
      enableShortcuts: u,
      extra: w
    };
  }, "mapper") }, (i) => /* @__PURE__ */ s.createElement(Kp, { ...i, onMenuClick: t }));
}, "Sideber")), Up = Qy;

// src/manager/App.tsx
var qp = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, pages: o, hasTab: i }) => {
  let { setMobileAboutOpen: n } = Se();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Rt, { styles: ys }), /* @__PURE__ */ s.createElement(
    Za,
    {
      hasTab: i,
      managerLayoutState: e,
      setManagerLayoutState: t,
      slotMain: /* @__PURE__ */ s.createElement(Kl, { id: "main", withLoader: !0 }),
      slotSidebar: /* @__PURE__ */ s.createElement(Up, { onMenuClick: () => n((r) => !r) }),
      slotPanel: /* @__PURE__ */ s.createElement(tl, null),
      slotPages: o.map(({ id: r, render: l }) => /* @__PURE__ */ s.createElement(l, { key: r }))
    }
  ));
}, "App");

// src/manager/provider.ts
var ji = class ji {
  getElements(t) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(t) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    return console.error("Provider.getConfig() is not implemented!"), {};
  }
};
a(ji, "Provider");
var Ft = ji;

// src/manager/settings/About.tsx
var Xy = I.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
}), Zy = I.header({
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
}), Jy = I.div(({ theme: e }) => ({
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: e.base === "light" ? e.color.dark : e.color.lightest,
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2
})), eb = I.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
}), Gp = I(Pe)(({ theme: e }) => ({
  "&&": {
    fontWeight: e.typography.weight.bold,
    color: e.base === "light" ? e.color.dark : e.color.light
  },
  "&:hover": {
    color: e.base === "light" ? e.color.darkest : e.color.lightest
  }
})), Yp = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => /* @__PURE__ */ s.createElement(Xy, null, /* @__PURE__ */ s.createElement(Zy, null,
/* @__PURE__ */ s.createElement(zo, { alt: "Storybook" })), /* @__PURE__ */ s.createElement(Jo, { onNavigateToWhatsNew: e }), /* @__PURE__ */ s.
createElement(Jy, null, /* @__PURE__ */ s.createElement(eb, null, /* @__PURE__ */ s.createElement(Ie, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ s.createElement(Uo, null), "GitHub")), /* @__PURE__ */ s.createElement(
Ie, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ s.createElement(qt, { style: {
display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ s.createElement("div", null, "Open source software maintained by",
" ", /* @__PURE__ */ s.createElement(Gp, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ s.createElement(
Gp, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))), "AboutScreen");

// src/manager/settings/AboutPage.tsx
var Vi = class Vi extends Le {
  componentDidMount() {
    let { api: t, notificationId: o } = this.props;
    t.clearNotification(o);
  }
  render() {
    let { children: t } = this.props;
    return t;
  }
};
a(Vi, "NotificationClearer");
var Wi = Vi, Qp = /* @__PURE__ */ a(() => {
  let e = se(), t = ze(), o = A(() => {
    e.changeSettingsTab("whats-new");
  }, [e]);
  return /* @__PURE__ */ s.createElement(Wi, { api: e, notificationId: "update" }, /* @__PURE__ */ s.createElement(
    Yp,
    {
      onNavigateToWhatsNew: t.whatsNewData?.status === "SUCCESS" ? o : void 0
    }
  ));
}, "AboutPage");

// src/manager/settings/SettingsFooter.tsx
var tb = I.div(({ theme: e }) => ({
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${e.appBorderColor}`,
  fontWeight: e.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
})), ob = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(tb, { ...e }, /* @__PURE__ */ s.createElement(Pe, { secondary: !0, href: "\
https://storybook.js.org", cancel: !1, target: "_blank" }, "Docs"), /* @__PURE__ */ s.createElement(Pe, { secondary: !0, href: "https://gith\
ub.com/storybookjs/storybook", cancel: !1, target: "_blank" }, "GitHub"), /* @__PURE__ */ s.createElement(
  Pe,
  {
    secondary: !0,
    href: "https://storybook.js.org/community#support",
    cancel: !1,
    target: "_blank"
  },
  "Support"
)), "SettingsFooter"), Xp = ob;

// src/manager/settings/shortcuts.tsx
var rb = I.header(({ theme: e }) => ({
  marginBottom: 20,
  fontSize: e.typography.size.m3,
  fontWeight: e.typography.weight.bold,
  alignItems: "center",
  display: "flex"
})), Zp = I.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), nb = I.div({
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
}), ib = I.div(({ theme: e }) => ({
  padding: "6px 0",
  borderTop: `1px solid ${e.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
})), sb = I.div({
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
}), ab = I.div({
  alignSelf: "center"
}), lb = I(Fo.Input)(
  ({ valid: e, theme: t }) => e === "error" ? {
    animation: `${t.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
), ub = so`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`, cb = I(je)(
  ({ valid: e, theme: t }) => e === "valid" ? {
    color: t.color.positive,
    animation: `${ub} 2s ease forwards`
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
), pb = I.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  padding: "3rem 20px",
  maxWidth: 600,
  margin: "0 auto"
})), db = {
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component"
}, fb = ["escape"];
function Ki(e) {
  return Object.entries(e).reduce(
    // @ts-expect-error (non strict)
    (t, [o, i]) => fb.includes(o) ? t : { ...t, [o]: { shortcut: i, error: !1 } },
    {}
  );
}
a(Ki, "toShortcutState");
var $i = class $i extends Le {
  constructor(o) {
    super(o);
    this.onKeyDown = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      if (o.key === "Backspace")
        return this.restoreDefault();
      let r = as(o);
      if (!r)
        return !1;
      let l = !!Object.entries(n).find(
        ([u, { shortcut: c }]) => u !== i && c && ls(r, c)
      );
      return this.setState({
        shortcutKeys: { ...n, [i]: { shortcut: r, error: l } }
      });
    }, "onKeyDown");
    this.onFocus = /* @__PURE__ */ a((o) => () => {
      let { shortcutKeys: i } = this.state;
      this.setState({
        activeFeature: o,
        shortcutKeys: {
          ...i,
          [o]: { shortcut: null, error: !1 }
        }
      });
    }, "onFocus");
    this.onBlur = /* @__PURE__ */ a(async () => {
      let { shortcutKeys: o, activeFeature: i } = this.state;
      if (o[i]) {
        let { shortcut: n, error: r } = o[i];
        return !n || r ? this.restoreDefault() : this.saveShortcut();
      }
      return !1;
    }, "onBlur");
    this.saveShortcut = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { setShortcut: n } = this.props;
      await n(o, i[o].shortcut), this.setState({ successField: o });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ a(async () => {
      let { restoreAllDefaultShortcuts: o } = this.props, i = await o();
      return this.setState({ shortcutKeys: Ki(i) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { restoreDefaultShortcut: n } = this.props, r = await n(o);
      return this.setState({
        shortcutKeys: {
          ...i,
          ...Ki({ [o]: r })
        }
      });
    }, "restoreDefault");
    this.displaySuccessMessage = /* @__PURE__ */ a((o) => {
      let { successField: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !1 ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !0 ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ a(() => {
      let { shortcutKeys: o, addonsShortcutLabels: i } = this.state;
      return Object.entries(o).map(([r, { shortcut: l }]) => /* @__PURE__ */ s.createElement(ib, { key: r }, /* @__PURE__ */ s.createElement(
      ab, null, db[r] || i[r]), /* @__PURE__ */ s.createElement(
        lb,
        {
          spellCheck: "false",
          valid: this.displayError(r),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(r),
          onKeyDown: this.onKeyDown,
          value: l ? qe(l) : "",
          placeholder: "Type keys",
          readOnly: !0
        }
      ), /* @__PURE__ */ s.createElement(cb, { valid: this.displaySuccessMessage(r) })));
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(sb, null, /* @__PURE__ */ s.createElement(nb, null, /* @__PURE__ */ s.
    createElement(Zp, null, "Commands"), /* @__PURE__ */ s.createElement(Zp, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
    this.state = {
      // @ts-expect-error (non strict)
      activeFeature: void 0,
      // @ts-expect-error (non strict)
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      // @ts-expect-error (non strict)
      shortcutKeys: Ki(o.shortcutKeys),
      addonsShortcutLabels: o.addonsShortcutLabels
    };
  }
  render() {
    let o = this.renderKeyForm();
    return /* @__PURE__ */ s.createElement(pb, null, /* @__PURE__ */ s.createElement(rb, null, "Keyboard shortcuts"), o, /* @__PURE__ */ s.createElement(
      Ie,
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
    ), /* @__PURE__ */ s.createElement(Xp, null));
  }
};
a($i, "ShortcutsScreen");
var qr = $i;

// src/manager/settings/ShortcutsPage.tsx
var Jp = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(fe, null, ({
  api: {
    getShortcutKeys: e,
    getAddonsShortcutLabels: t,
    setShortcut: o,
    restoreDefaultShortcut: i,
    restoreAllDefaultShortcuts: n
  }
}) => /* @__PURE__ */ s.createElement(
  qr,
  {
    shortcutKeys: e(),
    addonsShortcutLabels: t(),
    setShortcut: o,
    restoreDefaultShortcut: i,
    restoreAllDefaultShortcuts: n
  }
)), "ShortcutsPage");

// src/manager/settings/whats_new.tsx
var ed = I.div({
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
}), mb = I.div({
  position: "relative",
  height: "32px"
}), td = I.div(({ theme: e }) => ({
  paddingTop: "12px",
  color: e.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${e.typography.size.s1}px`,
  lineHeight: "16px"
})), hb = I.div(({ theme: e }) => ({
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: e.background.bar,
  fontSize: "13px",
  borderTop: "1px solid",
  borderColor: e.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
})), gb = /* @__PURE__ */ a(({
  isNotificationsEnabled: e,
  onToggleNotifications: t,
  onCopyLink: o
}) => {
  let i = _e(), [n, r] = X("Copy Link"), l = /* @__PURE__ */ a(() => {
    o(), r("Copied!"), setTimeout(() => r("Copy Link"), 4e3);
  }, "copyLink");
  return /* @__PURE__ */ s.createElement(hb, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
  /* @__PURE__ */ s.createElement(sa, { color: i.color.mediumdark }), /* @__PURE__ */ s.createElement("div", null, "Share this with your tea\
m."), /* @__PURE__ */ s.createElement(Ie, { onClick: l, size: "small", variant: "ghost" }, n)), e ? /* @__PURE__ */ s.createElement(Ie, { size: "\
small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(ra, null), "Hide notifications") : /* @__PURE__ */ s.createElement(Ie,
  { size: "small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(na, null), "Show notifications"));
}, "WhatsNewFooter"), yb = I.iframe(
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded: e }) => ({ visibility: e ? "visible" : "hidden" })
), bb = I((e) => /* @__PURE__ */ s.createElement(Vo, { ...e }))(({ theme: e }) => ({
  color: e.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
})), vb = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(ed, null, /* @__PURE__ */ s.createElement(mb, null, /* @__PURE__ */ s.createElement(
Bo, null)), /* @__PURE__ */ s.createElement(td, null, "Loading...")), "WhatsNewLoader"), xb = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(
ed, null, /* @__PURE__ */ s.createElement(bb, null), /* @__PURE__ */ s.createElement(td, null, "The page couldn't be loaded. Check your inte\
rnet connection and try again.")), "MaxWaitTimeMessaging"), Ib = /* @__PURE__ */ a(({
  didHitMaxWaitTime: e,
  isLoaded: t,
  onLoad: o,
  url: i,
  onCopyLink: n,
  onToggleNotifications: r,
  isNotificationsEnabled: l
}) => /* @__PURE__ */ s.createElement(Ce, null, !t && !e && /* @__PURE__ */ s.createElement(vb, null), e ? /* @__PURE__ */ s.createElement(xb,
null) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(yb, { isLoaded: t, onLoad: o, src: i, title: "What\
's new?" }), /* @__PURE__ */ s.createElement(
  gb,
  {
    isNotificationsEnabled: l,
    onToggleNotifications: r,
    onCopyLink: n
  }
))), "PureWhatsNewScreen"), Sb = 1e4, od = /* @__PURE__ */ a(() => {
  let e = se(), t = ze(), { whatsNewData: o } = t, [i, n] = X(!1), [r, l] = X(!1);
  if (V(() => {
    let c = setTimeout(() => !i && l(!0), Sb);
    return () => clearTimeout(c);
  }, [i]), o?.status !== "SUCCESS")
    return null;
  let u = !o.disableWhatsNewNotifications;
  return /* @__PURE__ */ s.createElement(
    Ib,
    {
      didHitMaxWaitTime: r,
      isLoaded: i,
      onLoad: () => {
        e.whatsNewHasBeenRead(), n(!0);
      },
      url: o.url,
      isNotificationsEnabled: u,
      onCopyLink: () => {
        navigator.clipboard?.writeText(o.blogUrl ?? o.url);
      },
      onToggleNotifications: () => {
        u ? ne.confirm("All update notifications will no longer be shown. Are you sure?") && e.toggleWhatsNewNotifications() : e.toggleWhatsNewNotifications();
      }
    }
  );
}, "WhatsNewScreen");

// src/manager/settings/whats_new_page.tsx
var rd = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(od, null), "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: nd } = ne, wb = I.div(({ theme: e }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  paddingRight: 8
})), Ui = s.memo(/* @__PURE__ */ a(function({
  changeTab: t,
  id: o,
  title: i
}) {
  return /* @__PURE__ */ s.createElement(Po, null, ({ path: n }) => {
    let r = n.includes(`settings/${o}`);
    return /* @__PURE__ */ s.createElement(
      jo,
      {
        id: `tabbutton-${o}`,
        className: ["tabbutton"].concat(r ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active: r,
        onClick: () => t(o),
        role: "tab"
      },
      i
    );
  });
}, "TabBarButton")), Cb = I(Ho)(({ theme: e }) => ({
  background: e.background.content
})), _b = /* @__PURE__ */ a(({ changeTab: e, onClose: t, enableShortcuts: o = !0, enableWhatsNew: i }) => (s.useEffect(() => {
  let n = /* @__PURE__ */ a((r) => {
    !o || r.repeat || ht(!1, r) && We("Escape", r) && (r.preventDefault(), t());
  }, "handleEscape");
  return nd.addEventListener("keydown", n), () => nd.removeEventListener("keydown", n);
}, [o, t]), /* @__PURE__ */ s.createElement(Ce, null, /* @__PURE__ */ s.createElement(wb, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(
Ro, { role: "tablist" }, /* @__PURE__ */ s.createElement(Ui, { id: "about", title: "About", changeTab: e }), i && /* @__PURE__ */ s.createElement(
Ui, { id: "whats-new", title: "What's new?", changeTab: e }), /* @__PURE__ */ s.createElement(Ui, { id: "shortcuts", title: "Keyboard shortc\
uts", changeTab: e })), /* @__PURE__ */ s.createElement(
  J,
  {
    onClick: (n) => (n.preventDefault(), t()),
    title: "Close settings page"
  },
  /* @__PURE__ */ s.createElement(Ge, null)
)), /* @__PURE__ */ s.createElement(Cb, { vertical: !0, horizontal: !1 }, /* @__PURE__ */ s.createElement(io, { path: "about" }, /* @__PURE__ */ s.
createElement(Qp, { key: "about" })), /* @__PURE__ */ s.createElement(io, { path: "whats-new" }, /* @__PURE__ */ s.createElement(rd, { key: "\
whats-new" })), /* @__PURE__ */ s.createElement(io, { path: "shortcuts" }, /* @__PURE__ */ s.createElement(Jp, { key: "shortcuts" }))))), "P\
ages"), Eb = /* @__PURE__ */ a(() => {
  let e = se(), t = ze(), o = /* @__PURE__ */ a((i) => e.changeSettingsTab(i), "changeTab");
  return /* @__PURE__ */ s.createElement(
    _b,
    {
      enableWhatsNew: t.whatsNewData?.status === "SUCCESS",
      enableShortcuts: t.ui.enableShortcuts,
      changeTab: o,
      onClose: e.closeSettings
    }
  );
}, "SettingsPages"), id = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: ge.experimental_PAGE,
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(io, { path: "/settings/", startsWith: !0 }, /* @__PURE__ */ s.createElement(
  Eb, null)), "render")
};

// src/manager/index.tsx
Xr.displayName = "ThemeProvider";
pt.displayName = "HelmetProvider";
var Tb = /* @__PURE__ */ a(({ provider: e }) => /* @__PURE__ */ s.createElement(pt, { key: "helmet.Provider" }, /* @__PURE__ */ s.createElement(
ms, { key: "location.provider" }, /* @__PURE__ */ s.createElement(kb, { provider: e }))), "Root"), kb = /* @__PURE__ */ a(({ provider: e }) => {
  let t = gs();
  return /* @__PURE__ */ s.createElement(Po, { key: "location.consumer" }, (o) => /* @__PURE__ */ s.createElement(
    ss,
    {
      key: "manager",
      provider: e,
      ...o,
      navigate: t,
      docsOptions: ne?.DOCS_OPTIONS || {}
    },
    (i) => {
      let { state: n, api: r } = i, l = A(
        (c) => {
          r.setSizes(c);
        },
        [r]
      ), u = K(
        () => [id, ...Object.values(r.getElements(ge.experimental_PAGE))],
        [Object.keys(r.getElements(ge.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ s.createElement(Xr, { key: "theme.provider", theme: vs(n.theme) }, /* @__PURE__ */ s.createElement(Fa, null, /* @__PURE__ */ s.
      createElement(
        qp,
        {
          key: "app",
          pages: u,
          managerLayoutState: {
            ...n.layout,
            viewMode: n.viewMode
          },
          hasTab: !!r.getQueryParam("tab"),
          setManagerLayoutState: l
        }
      )));
    }
  ));
}, "Main");
function sd(e, t) {
  if (!(t instanceof Ft))
    throw new Is();
  fs(e).render(/* @__PURE__ */ s.createElement(Tb, { key: "root", provider: t }));
}
a(sd, "renderStorybookUI");

// src/manager/runtime.ts
var Gi = class Gi extends Ft {
  constructor() {
    super();
    let t = Yi({ page: "manager" });
    Ue.setChannel(t), t.emit(Zi), this.addons = Ue, this.channel = t, ne.__STORYBOOK_ADDONS_CHANNEL__ = t;
  }
  getElements(t) {
    return this.addons.getElements(t);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(t) {
    this.addons.loadAddons(t);
  }
};
a(Gi, "ReactProvider");
var qi = Gi, { document: Ob } = ne, Pb = Ob.getElementById("root");
setTimeout(() => {
  sd(Pb, new qi());
}, 0);

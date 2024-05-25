import X, { useRef as pe, useState as rr, useEffect as ke, useMemo as yr, useLayoutEffect as br } from "react";
var me = { exports: {} }, de = {};
var Ge;
function Er() {
  if (Ge)
    return de;
  Ge = 1;
  var r = X, a = Symbol.for("react.element"), o = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(O, b, I) {
    var x, E = {}, m = null, V = null;
    I !== void 0 && (m = "" + I), b.key !== void 0 && (m = "" + b.key), b.ref !== void 0 && (V = b.ref);
    for (x in b)
      u.call(b, x) && !_.hasOwnProperty(x) && (E[x] = b[x]);
    if (O && O.defaultProps)
      for (x in b = O.defaultProps, b)
        E[x] === void 0 && (E[x] = b[x]);
    return { $$typeof: a, type: O, key: m, ref: V, props: E, _owner: f.current };
  }
  return de.Fragment = o, de.jsx = g, de.jsxs = g, de;
}
var ge = {};
var He;
function Rr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var r = X, a = Symbol.for("react.element"), o = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), O = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), S = Symbol.iterator, B = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = S && e[S] || e[B];
      return typeof t == "function" ? t : null;
    }
    var h = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
          n[s - 1] = arguments[s];
        W("error", e, n);
      }
    }
    function W(e, t, n) {
      {
        var s = h.ReactDebugCurrentFrame, p = s.getStackAddendum();
        p !== "" && (t += "%s", n = n.concat([p]));
        var C = n.map(function(d) {
          return String(d);
        });
        C.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var oe = !1, ue = !1, he = !1, ye = !1, j = !1, J;
    J = Symbol.for("react.module.reference");
    function Se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === _ || j || e === f || e === I || e === x || ye || e === V || oe || ue || he || typeof e == "object" && e !== null && (e.$$typeof === m || e.$$typeof === E || e.$$typeof === g || e.$$typeof === O || e.$$typeof === b || e.$$typeof === J || e.getModuleId !== void 0));
    }
    function Z(e, t, n) {
      var s = e.displayName;
      if (s)
        return s;
      var p = t.displayName || t.name || "";
      return p !== "" ? n + "(" + p + ")" : n;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function M(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case o:
          return "Portal";
        case _:
          return "Profiler";
        case f:
          return "StrictMode";
        case I:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case O:
            var t = e;
            return fe(t) + ".Consumer";
          case g:
            var n = e;
            return fe(n._context) + ".Provider";
          case b:
            return Z(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : M(e.type) || "Memo";
          case m: {
            var p = e, C = p._payload, d = p._init;
            try {
              return M(d(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, G = 0, K, U, be, Q, Y, z, ee;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Te() {
      {
        if (G === 0) {
          K = console.log, U = console.info, be = console.warn, Q = console.error, Y = console.group, z = console.groupCollapsed, ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        G++;
      }
    }
    function we() {
      {
        if (G--, G === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, e, {
              value: K
            }),
            info: $({}, e, {
              value: U
            }),
            warn: $({}, e, {
              value: be
            }),
            error: $({}, e, {
              value: Q
            }),
            group: $({}, e, {
              value: Y
            }),
            groupCollapsed: $({}, e, {
              value: z
            }),
            groupEnd: $({}, e, {
              value: ee
            })
          });
        }
        G < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = h.ReactCurrentDispatcher, se;
    function re(e, t, n) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (p) {
            var s = p.stack.trim().match(/\n( *(at )?)/);
            se = s && s[1] || "";
          }
        return `
` + se + e;
      }
    }
    var ce = !1, te;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Oe();
    }
    function Re(e, t) {
      if (!e || ce)
        return "";
      {
        var n = te.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      ce = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = le.current, le.current = null, Te();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (q) {
              s = q;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (q) {
              s = q;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            s = q;
          }
          e();
        }
      } catch (q) {
        if (q && s && typeof q.stack == "string") {
          for (var v = q.stack.split(`
`), D = s.stack.split(`
`), P = v.length - 1, A = D.length - 1; P >= 1 && A >= 0 && v[P] !== D[A]; )
            A--;
          for (; P >= 1 && A >= 0; P--, A--)
            if (v[P] !== D[A]) {
              if (P !== 1 || A !== 1)
                do
                  if (P--, A--, A < 0 || v[P] !== D[A]) {
                    var L = `
` + v[P].replace(" at new ", " at ");
                    return e.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", e.displayName)), typeof e == "function" && te.set(e, L), L;
                  }
                while (P >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        ce = !1, le.current = C, we(), Error.prepareStackTrace = p;
      }
      var ae = e ? e.displayName || e.name : "", Je = ae ? re(ae) : "";
      return typeof e == "function" && te.set(e, Je), Je;
    }
    function _e(e, t, n) {
      return Re(e, !1);
    }
    function xe(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function i(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Re(e, xe(e));
      if (typeof e == "string")
        return re(e);
      switch (e) {
        case I:
          return re("Suspense");
        case x:
          return re("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return _e(e.render);
          case E:
            return i(e.type, t, n);
          case m: {
            var s = e, p = s._payload, C = s._init;
            try {
              return i(C(p), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var l = Object.prototype.hasOwnProperty, c = {}, w = h.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var t = e._owner, n = i(e.type, e._source, t ? t.type : null);
        w.setExtraStackFrame(n);
      } else
        w.setExtraStackFrame(null);
    }
    function y(e, t, n, s, p) {
      {
        var C = Function.call.bind(l);
        for (var d in e)
          if (C(e, d)) {
            var v = void 0;
            try {
              if (typeof e[d] != "function") {
                var D = Error((s || "React class") + ": " + n + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw D.name = "Invariant Violation", D;
              }
              v = e[d](t, d, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (P) {
              v = P;
            }
            v && !(v instanceof Error) && (k(p), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, d, typeof v), k(null)), v instanceof Error && !(v.message in c) && (c[v.message] = !0, k(p), T("Failed %s type: %s", n, v.message), k(null));
          }
      }
    }
    var R = Array.isArray;
    function F(e) {
      return R(e);
    }
    function H(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function je(e) {
      try {
        return Me(e), !1;
      } catch {
        return !0;
      }
    }
    function Me(e) {
      return "" + e;
    }
    function Le(e) {
      if (je(e))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", H(e)), Me(e);
    }
    var ve = h.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Be, We, Pe;
    Pe = {};
    function nr(e) {
      if (l.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (l.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, t) {
      if (typeof e.ref == "string" && ve.current && t && ve.current.stateNode !== t) {
        var n = M(ve.current.type);
        Pe[n] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(ve.current.type), e.ref), Pe[n] = !0);
      }
    }
    function or(e, t) {
      {
        var n = function() {
          Be || (Be = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function ur(e, t) {
      {
        var n = function() {
          We || (We = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var fr = function(e, t, n, s, p, C, d) {
      var v = {
        $$typeof: a,
        type: e,
        key: t,
        ref: n,
        props: d,
        _owner: C
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function lr(e, t, n, s, p) {
      {
        var C, d = {}, v = null, D = null;
        n !== void 0 && (Le(n), v = "" + n), ar(t) && (Le(t.key), v = "" + t.key), nr(t) && (D = t.ref, ir(t, p));
        for (C in t)
          l.call(t, C) && !tr.hasOwnProperty(C) && (d[C] = t[C]);
        if (e && e.defaultProps) {
          var P = e.defaultProps;
          for (C in P)
            d[C] === void 0 && (d[C] = P[C]);
        }
        if (v || D) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && or(d, A), D && ur(d, A);
        }
        return fr(e, v, D, p, s, ve.current, d);
      }
    }
    var Ae = h.ReactCurrentOwner, Ye = h.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var t = e._owner, n = i(e.type, e._source, t ? t.type : null);
        Ye.setExtraStackFrame(n);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Ve(e) {
      return typeof e == "object" && e !== null && e.$$typeof === a;
    }
    function $e() {
      {
        if (Ae.current) {
          var e = M(Ae.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function sr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function cr(e) {
      {
        var t = $e();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function qe(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = cr(t);
        if (Ue[n])
          return;
        Ue[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Ae.current && (s = " It was passed a child from " + M(e._owner.type) + "."), ne(e), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), ne(null);
      }
    }
    function Ke(e, t) {
      {
        if (typeof e != "object")
          return;
        if (F(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Ve(s) && qe(s, t);
          }
        else if (Ve(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = N(e);
          if (typeof p == "function" && p !== e.entries)
            for (var C = p.call(e), d; !(d = C.next()).done; )
              Ve(d.value) && qe(d.value, t);
        }
      }
    }
    function vr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === b || t.$$typeof === E))
          n = t.propTypes;
        else
          return;
        if (n) {
          var s = M(t);
          y(n, e.props, "prop", s, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var p = M(t);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function dr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var s = t[n];
          if (s !== "children" && s !== "key") {
            ne(e), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), T("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function ze(e, t, n, s, p, C) {
      {
        var d = Se(e);
        if (!d) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var D = sr(p);
          D ? v += D : v += $e();
          var P;
          e === null ? P = "null" : F(e) ? P = "array" : e !== void 0 && e.$$typeof === a ? (P = "<" + (M(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : P = typeof e, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", P, v);
        }
        var A = lr(e, t, n, p, C);
        if (A == null)
          return A;
        if (d) {
          var L = t.children;
          if (L !== void 0)
            if (s)
              if (F(L)) {
                for (var ae = 0; ae < L.length; ae++)
                  Ke(L[ae], e);
                Object.freeze && Object.freeze(L);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(L, e);
        }
        return e === u ? dr(A) : vr(A), A;
      }
    }
    function gr(e, t, n) {
      return ze(e, t, n, !0);
    }
    function mr(e, t, n) {
      return ze(e, t, n, !1);
    }
    var pr = mr, hr = gr;
    ge.Fragment = u, ge.jsx = pr, ge.jsxs = hr;
  }()), ge;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Er() : r.exports = Rr();
})(me);
function _r(r, a) {
  var o = {};
  for (var u in r)
    Object.prototype.hasOwnProperty.call(r, u) && a.indexOf(u) < 0 && (o[u] = r[u]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, u = Object.getOwnPropertySymbols(r); f < u.length; f++)
      a.indexOf(u[f]) < 0 && Object.prototype.propertyIsEnumerable.call(r, u[f]) && (o[u[f]] = r[u[f]]);
  return o;
}
var Ce;
(function(r) {
  r.event = "event", r.props = "prop";
})(Ce || (Ce = {}));
function ie() {
}
function Cr(r) {
  var a, o = void 0;
  return function() {
    for (var u = [], f = arguments.length; f--; )
      u[f] = arguments[f];
    return a && u.length === a.length && u.every(function(_, g) {
      return _ === a[g];
    }) || (a = u, o = r.apply(void 0, u)), o;
  };
}
function De(r) {
  return !!(r || "").match(/\d/);
}
function Ne(r) {
  return r == null;
}
function Sr(r) {
  return typeof r == "number" && isNaN(r);
}
function Tr(r) {
  return Ne(r) || Sr(r) || typeof r == "number" && !isFinite(r);
}
function wr(r) {
  var a = pe(r);
  a.current = r;
  var o = pe(function() {
    for (var u = [], f = arguments.length; f--; )
      u[f] = arguments[f];
    return a.current.apply(a, u);
  });
  return o.current;
}
function Xe(r, a) {
  return Array(a + 1).join(r);
}
function Or(r) {
  var a = r + "", o = a[0] === "-" ? "-" : "";
  o && (a = a.substring(1));
  var u = a.split(/[eE]/g), f = u[0], _ = u[1];
  if (_ = Number(_), !_)
    return o + f;
  f = f.replace(".", "");
  var g = 1 + _, O = f.length;
  return g < 0 ? f = "0." + Xe("0", Math.abs(g)) + f : g >= O ? f = f + Xe("0", g - O) : f = (f.substring(0, g) || "0") + "." + f.substring(g), o + f;
}
function Ze(r, a) {
  if (r.value = r.value, r !== null) {
    if (r.createTextRange) {
      var o = r.createTextRange();
      return o.move("character", a), o.select(), !0;
    }
    return r.selectionStart || r.selectionStart === 0 ? (r.focus(), r.setSelectionRange(a, a), !0) : (r.focus(), !1);
  }
}
var xr = Cr(function(r, a) {
  for (var o = 0, u = 0, f = r.length, _ = a.length; r[o] === a[o] && o < f; )
    o++;
  for (; r[f - 1 - u] === a[_ - 1 - u] && _ - u > o && f - u > o; )
    u++;
  return {
    from: { start: o, end: f - u },
    to: { start: o, end: _ - u }
  };
});
function jr(r, a, o) {
  return Math.min(Math.max(r, a), o);
}
function Fe(r) {
  return Math.max(r.selectionStart, r.selectionEnd);
}
function Pr() {
  return typeof navigator < "u" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform));
}
function Ar(r) {
  var a = r.currentValue, o = r.formattedValue, u = r.currentValueIndex, f = r.formattedValueIndex;
  return a[u] === o[f];
}
function Ir(r, a, o, u, f, _, g) {
  g === void 0 && (g = Ar);
  var O = f.findIndex(function(oe) {
    return oe;
  }), b = r.slice(0, O);
  !a && !o.startsWith(b) && (a = b, o = b + o, u = u + b.length);
  for (var I = o.length, x = r.length, E = {}, m = new Array(I), V = 0; V < I; V++) {
    m[V] = -1;
    for (var S = 0, B = x; S < B; S++) {
      var N = g({
        currentValue: o,
        lastValue: a,
        formattedValue: r,
        currentValueIndex: V,
        formattedValueIndex: S
      });
      if (N && E[S] !== !0) {
        m[V] = S, E[S] = !0;
        break;
      }
    }
  }
  for (var h = u; h < I && (m[h] === -1 || !_(o[h])); )
    h++;
  var T = h === I || m[h] === -1 ? x : m[h];
  for (h = u - 1; h > 0 && m[h] === -1; )
    h--;
  var W = h === -1 || m[h] === -1 ? 0 : m[h] + 1;
  return W > T ? T : u - W < T - u ? W : T;
}
function Qe(r, a, o, u) {
  var f = r.length;
  if (a = jr(a, 0, f), u === "left") {
    for (; a >= 0 && !o[a]; )
      a--;
    a === -1 && (a = o.indexOf(!0));
  } else {
    for (; a <= f && !o[a]; )
      a++;
    a > f && (a = o.lastIndexOf(!0));
  }
  return a === -1 && (a = f), a;
}
function Vr(r) {
  for (var a = Array.from({ length: r.length + 1 }).map(function() {
    return !0;
  }), o = 0, u = a.length; o < u; o++)
    a[o] = Boolean(De(r[o]) || De(r[o - 1]));
  return a;
}
function kr(r, a, o, u, f, _) {
  _ === void 0 && (_ = ie);
  var g = wr(function(S, B) {
    var N, h;
    return Tr(S) ? (h = "", N = "") : typeof S == "number" || B ? (h = typeof S == "number" ? Or(S) : S, N = u(h)) : (h = f(S, void 0), N = u(h)), { formattedValue: N, numAsString: h };
  }), O = rr(function() {
    return g(Ne(r) ? a : r, o);
  }), b = O[0], I = O[1], x = function(S, B) {
    S.formattedValue !== b.formattedValue && I({
      formattedValue: S.formattedValue,
      numAsString: S.value
    }), _(S, B);
  }, E = r, m = o;
  Ne(r) && (E = b.numAsString, m = !0);
  var V = g(E, m);
  return yr(function() {
    I(V);
  }, [V.formattedValue]), [b, x];
}
function Fr(r) {
  return r.replace(/[^0-9]/g, "");
}
function Dr(r) {
  return r;
}
function Nr(r) {
  var a = r.type;
  a === void 0 && (a = "text");
  var o = r.displayType;
  o === void 0 && (o = "input");
  var u = r.customInput, f = r.renderText, _ = r.getInputRef, g = r.format;
  g === void 0 && (g = Dr);
  var O = r.removeFormatting;
  O === void 0 && (O = Fr);
  var b = r.defaultValue, I = r.valueIsNumericString, x = r.onValueChange, E = r.isAllowed, m = r.onChange;
  m === void 0 && (m = ie);
  var V = r.onKeyDown;
  V === void 0 && (V = ie);
  var S = r.onMouseUp;
  S === void 0 && (S = ie);
  var B = r.onFocus;
  B === void 0 && (B = ie);
  var N = r.onBlur;
  N === void 0 && (N = ie);
  var h = r.value, T = r.getCaretBoundary;
  T === void 0 && (T = Vr);
  var W = r.isValidInputCharacter;
  W === void 0 && (W = De);
  var oe = r.isCharacterSame, ue = _r(r, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]), he = kr(h, b, Boolean(I), g, O, x), ye = he[0], j = ye.formattedValue, J = ye.numAsString, Se = he[1], Z = pe({ formattedValue: j, numAsString: J }), fe = function(i, l) {
    Z.current = { formattedValue: i.formattedValue, numAsString: i.value }, Se(i, l);
  }, M = rr(!1), $ = M[0], G = M[1], K = pe(null), U = pe({
    setCaretTimeout: null,
    focusTimeout: null
  });
  ke(function() {
    return G(!0), function() {
      clearTimeout(U.current.setCaretTimeout), clearTimeout(U.current.focusTimeout);
    };
  }, []);
  var be = g, Q = function(i, l) {
    var c = parseFloat(l);
    return {
      formattedValue: i,
      value: l,
      floatValue: isNaN(c) ? void 0 : c
    };
  }, Y = function(i, l, c) {
    i.selectionStart === 0 && i.selectionEnd === i.value.length || (Ze(i, l), U.current.setCaretTimeout = setTimeout(function() {
      i.value === c && i.selectionStart !== l && Ze(i, l);
    }, 0));
  }, z = function(i, l, c) {
    return Qe(i, l, T(i), c);
  }, ee = function(i, l, c) {
    var w = T(l), k = Ir(l, j, i, c, w, W, oe);
    return k = Qe(l, k, w), k;
  }, Ee = function(i) {
    var l = i.formattedValue;
    l === void 0 && (l = "");
    var c = i.input, w = i.source, k = i.event, y = i.numAsString, R;
    if (c) {
      var F = i.inputValue || c.value, H = Fe(c);
      c.value = l, R = ee(F, l, H), R !== void 0 && Y(c, R, l);
    }
    l !== j && fe(Q(l, y), { event: k, source: w });
  };
  ke(function() {
    var i = Z.current, l = i.formattedValue, c = i.numAsString;
    j !== l && (j !== J || l !== c) && fe(Q(j, J), {
      event: void 0,
      source: Ce.props
    });
  }, [j, J]);
  var Te = K.current ? Fe(K.current) : void 0, we = typeof window < "u" ? br : ke;
  we(function() {
    var i = K.current;
    if (j !== Z.current.formattedValue && i) {
      var l = ee(Z.current.formattedValue, j, Te);
      i.value = j, Y(i, l, j);
    }
  }, [j]);
  var le = function(i, l, c) {
    var w = xr(j, i), k = Object.assign(Object.assign({}, w), { lastValue: j }), y = O(i, k), R = be(y);
    if (y = O(R, void 0), E && !E(Q(R, y))) {
      var F = l.target, H = Fe(F), je = ee(i, j, H);
      return F.value = j, Y(F, je, j), !1;
    }
    return Ee({
      formattedValue: R,
      numAsString: y,
      inputValue: i,
      event: l,
      source: c,
      input: l.target
    }), !0;
  }, se = function(i) {
    var l = i.target, c = l.value, w = le(c, i, Ce.event);
    w && m(i);
  }, re = function(i) {
    var l = i.target, c = i.key, w = l.selectionStart, k = l.selectionEnd, y = l.value;
    y === void 0 && (y = "");
    var R;
    if (c === "ArrowLeft" || c === "Backspace" ? R = Math.max(w - 1, 0) : c === "ArrowRight" ? R = Math.min(w + 1, y.length) : c === "Delete" && (R = w), R === void 0 || w !== k) {
      V(i);
      return;
    }
    var F = R;
    if (c === "ArrowLeft" || c === "ArrowRight") {
      var H = c === "ArrowLeft" ? "left" : "right";
      F = z(y, R, H), F !== R && i.preventDefault();
    } else
      c === "Delete" && !W(y[R]) ? F = z(y, R, "right") : c === "Backspace" && !W(y[R]) && (F = z(y, R, "left"));
    F !== R && Y(l, F, y), i.isUnitTestRun && Y(l, F, y), V(i);
  }, ce = function(i) {
    var l = i.target, c = function() {
      var w = l.selectionStart, k = l.selectionEnd, y = l.value;
      if (y === void 0 && (y = ""), w === k) {
        var R = z(y, w);
        R !== w && Y(l, R, y);
      }
    };
    c(), requestAnimationFrame(function() {
      c();
    }), S(i);
  }, te = function(i) {
    i.persist && i.persist();
    var l = i.target, c = i.currentTarget;
    K.current = l, U.current.focusTimeout = setTimeout(function() {
      var w = l.selectionStart, k = l.selectionEnd, y = l.value;
      y === void 0 && (y = "");
      var R = z(y, w);
      R !== w && !(w === 0 && k === y.length) && Y(l, R, y), B(Object.assign(Object.assign({}, i), { currentTarget: c }));
    }, 0);
  }, Oe = function(i) {
    K.current = null, clearTimeout(U.current.focusTimeout), clearTimeout(U.current.setCaretTimeout), N(i);
  }, Re = $ && Pr() ? "numeric" : void 0, _e = Object.assign({ inputMode: Re }, ue, {
    type: a,
    value: j,
    onChange: se,
    onKeyDown: re,
    onMouseUp: ce,
    onFocus: te,
    onBlur: Oe
  });
  if (o === "text")
    return f ? X.createElement(X.Fragment, null, f(j, ue) || null) : X.createElement("span", Object.assign({}, ue, { ref: _ }), j);
  if (u) {
    var xe = u;
    return X.createElement(xe, Object.assign({}, _e, { ref: _ }));
  }
  return X.createElement("input", Object.assign({}, _e, { ref: _ }));
}
const er = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function Lr({
  value: r,
  onChange: a,
  placeholder: o = "",
  className: u,
  prefix: f = "",
  styles: _,
  postfix: g = ""
}) {
  const O = (E) => {
    let m = E.replace(/,/g, "");
    return m = m.replace(/\B(?=(\d{3})+(?!\d))/g, ","), m;
  }, b = (E) => (E = E.replace(f, "").replace(g, ""), E.replace(
    new RegExp(er.join("|"), "g"),
    (m) => er.indexOf(m).toString()
  )), I = () => !1, x = (E) => {
    const { value: m } = E.target;
    a && a({
      ...E,
      target: {
        ...E.target,
        value: b(
          m.replace(g, "").replace(f, "")
        )
      }
    });
  };
  return /* @__PURE__ */ me.exports.jsxs(
    "div",
    {
      style: {
        position: "relative",
        display: "inline-block",
        width: "100%",
        background: "transparent",
        ..._
      },
      className: "input-container",
      children: [
        f && /* @__PURE__ */ me.exports.jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: "50%",
              right: "1",
              marginRight: "1.5%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              backgroundColor: "transparent"
            },
            children: f
          }
        ),
        /* @__PURE__ */ me.exports.jsx(
          Nr,
          {
            format: O,
            removeFormatting: b,
            isCharacterSame: I,
            value: r,
            onChange: x,
            placeholder: o,
            type: "tel",
            className: u,
            style: {
              width: "100%",
              boxSizing: "border-box",
              direction: "rtl",
              border: "1px solid gray",
              borderRadius: "5px",
              paddingRight: f.length !== 0 ? f.length * 8 : 5,
              paddingLeft: g.length !== 0 ? g.length * 8 : 5
            }
          }
        ),
        g && /* @__PURE__ */ me.exports.jsx(
          "span",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "0",
              marginLeft: "1%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              backgroundColor: "transparent"
            },
            className: "postfix",
            children: g
          }
        )
      ]
    }
  );
}
export {
  Lr as PersianNumericFormat
};
//# sourceMappingURL=index.es.js.map

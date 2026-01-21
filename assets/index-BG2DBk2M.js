let Tm;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const b of document.querySelectorAll('link[rel="modulepreload"]')) f(b);
    new MutationObserver((b) => {
      for (const S of b) if (S.type === "childList") for (const p of S.addedNodes) p.tagName === "LINK" && p.rel === "modulepreload" && f(p);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(b) {
      const S = {};
      return b.integrity && (S.integrity = b.integrity), b.referrerPolicy && (S.referrerPolicy = b.referrerPolicy), b.crossOrigin === "use-credentials" ? S.credentials = "include" : b.crossOrigin === "anonymous" ? S.credentials = "omit" : S.credentials = "same-origin", S;
    }
    function f(b) {
      if (b.ep) return;
      b.ep = true;
      const S = d(b);
      fetch(b.href, S);
    }
  })();
  Tm = function(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  };
  var Es = {
    exports: {}
  }, Yn = {};
  var Wd;
  function dy() {
    if (Wd) return Yn;
    Wd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(f, b, S) {
      var p = null;
      if (S !== void 0 && (p = "" + S), b.key !== void 0 && (p = "" + b.key), "key" in b) {
        S = {};
        for (var h in b) h !== "key" && (S[h] = b[h]);
      } else S = b;
      return b = S.ref, {
        $$typeof: s,
        type: f,
        key: p,
        ref: b !== void 0 ? b : null,
        props: S
      };
    }
    return Yn.Fragment = r, Yn.jsx = d, Yn.jsxs = d, Yn;
  }
  var Id;
  function my() {
    return Id || (Id = 1, Es.exports = dy()), Es.exports;
  }
  var c = my(), ws = {
    exports: {}
  }, W = {};
  var Pd;
  function hy() {
    if (Pd) return W;
    Pd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), h = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), L = Symbol.iterator;
    function P(y) {
      return y === null || typeof y != "object" ? null : (y = L && y[L] || y["@@iterator"], typeof y == "function" ? y : null);
    }
    var ge = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, be = Object.assign, J = {};
    function Z(y, T, R) {
      this.props = y, this.context = T, this.refs = J, this.updater = R || ge;
    }
    Z.prototype.isReactComponent = {}, Z.prototype.setState = function(y, T) {
      if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, T, "setState");
    }, Z.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    function $() {
    }
    $.prototype = Z.prototype;
    function G(y, T, R) {
      this.props = y, this.context = T, this.refs = J, this.updater = R || ge;
    }
    var fe = G.prototype = new $();
    fe.constructor = G, be(fe, Z.prototype), fe.isPureReactComponent = true;
    var Ke = Array.isArray;
    function De() {
    }
    var I = {
      H: null,
      A: null,
      T: null,
      S: null
    }, qe = Object.prototype.hasOwnProperty;
    function Je(y, T, R) {
      var q = R.ref;
      return {
        $$typeof: s,
        type: y,
        key: T,
        ref: q !== void 0 ? q : null,
        props: R
      };
    }
    function V(y, T) {
      return Je(y.type, T, y.props);
    }
    function le(y) {
      return typeof y == "object" && y !== null && y.$$typeof === s;
    }
    function ve(y) {
      var T = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + y.replace(/[=:]/g, function(R) {
        return T[R];
      });
    }
    var nt = /\/+/g;
    function ut(y, T) {
      return typeof y == "object" && y !== null && y.key != null ? ve("" + y.key) : T.toString(36);
    }
    function $e(y) {
      switch (y.status) {
        case "fulfilled":
          return y.value;
        case "rejected":
          throw y.reason;
        default:
          switch (typeof y.status == "string" ? y.then(De, De) : (y.status = "pending", y.then(function(T) {
            y.status === "pending" && (y.status = "fulfilled", y.value = T);
          }, function(T) {
            y.status === "pending" && (y.status = "rejected", y.reason = T);
          })), y.status) {
            case "fulfilled":
              return y.value;
            case "rejected":
              throw y.reason;
          }
      }
      throw y;
    }
    function O(y, T, R, q, F) {
      var ae = typeof y;
      (ae === "undefined" || ae === "boolean") && (y = null);
      var oe = false;
      if (y === null) oe = true;
      else switch (ae) {
        case "bigint":
        case "string":
        case "number":
          oe = true;
          break;
        case "object":
          switch (y.$$typeof) {
            case s:
            case r:
              oe = true;
              break;
            case E:
              return oe = y._init, O(oe(y._payload), T, R, q, F);
          }
      }
      if (oe) return F = F(y), oe = q === "" ? "." + ut(y, 0) : q, Ke(F) ? (R = "", oe != null && (R = oe.replace(nt, "$&/") + "/"), O(F, T, R, "", function(Rl) {
        return Rl;
      })) : F != null && (le(F) && (F = V(F, R + (F.key == null || y && y.key === F.key ? "" : ("" + F.key).replace(nt, "$&/") + "/") + oe)), T.push(F)), 1;
      oe = 0;
      var Te = q === "" ? "." : q + ":";
      if (Ke(y)) for (var we = 0; we < y.length; we++) q = y[we], ae = Te + ut(q, we), oe += O(q, T, R, ae, F);
      else if (we = P(y), typeof we == "function") for (y = we.call(y), we = 0; !(q = y.next()).done; ) q = q.value, ae = Te + ut(q, we++), oe += O(q, T, R, ae, F);
      else if (ae === "object") {
        if (typeof y.then == "function") return O($e(y), T, R, q, F);
        throw T = String(y), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
      }
      return oe;
    }
    function B(y, T, R) {
      if (y == null) return y;
      var q = [], F = 0;
      return O(y, q, "", "", function(ae) {
        return T.call(R, ae, F++);
      }), q;
    }
    function K(y) {
      if (y._status === -1) {
        var T = y._result;
        T = T(), T.then(function(R) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = R);
        }, function(R) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = R);
        }), y._status === -1 && (y._status = 0, y._result = T);
      }
      if (y._status === 1) return y._result.default;
      throw y._result;
    }
    var pe = typeof reportError == "function" ? reportError : function(y) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var T = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
          error: y
        });
        if (!window.dispatchEvent(T)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", y);
        return;
      }
      console.error(y);
    }, H = {
      map: B,
      forEach: function(y, T, R) {
        B(y, function() {
          T.apply(this, arguments);
        }, R);
      },
      count: function(y) {
        var T = 0;
        return B(y, function() {
          T++;
        }), T;
      },
      toArray: function(y) {
        return B(y, function(T) {
          return T;
        }) || [];
      },
      only: function(y) {
        if (!le(y)) throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
    };
    return W.Activity = C, W.Children = H, W.Component = Z, W.Fragment = d, W.Profiler = b, W.PureComponent = G, W.StrictMode = f, W.Suspense = _, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(y) {
        return I.H.useMemoCache(y);
      }
    }, W.cache = function(y) {
      return function() {
        return y.apply(null, arguments);
      };
    }, W.cacheSignal = function() {
      return null;
    }, W.cloneElement = function(y, T, R) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var q = be({}, y.props), F = y.key;
      if (T != null) for (ae in T.key !== void 0 && (F = "" + T.key), T) !qe.call(T, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && T.ref === void 0 || (q[ae] = T[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) q.children = R;
      else if (1 < ae) {
        for (var oe = Array(ae), Te = 0; Te < ae; Te++) oe[Te] = arguments[Te + 2];
        q.children = oe;
      }
      return Je(y.type, F, q);
    }, W.createContext = function(y) {
      return y = {
        $$typeof: p,
        _currentValue: y,
        _currentValue2: y,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, y.Provider = y, y.Consumer = {
        $$typeof: S,
        _context: y
      }, y;
    }, W.createElement = function(y, T, R) {
      var q, F = {}, ae = null;
      if (T != null) for (q in T.key !== void 0 && (ae = "" + T.key), T) qe.call(T, q) && q !== "key" && q !== "__self" && q !== "__source" && (F[q] = T[q]);
      var oe = arguments.length - 2;
      if (oe === 1) F.children = R;
      else if (1 < oe) {
        for (var Te = Array(oe), we = 0; we < oe; we++) Te[we] = arguments[we + 2];
        F.children = Te;
      }
      if (y && y.defaultProps) for (q in oe = y.defaultProps, oe) F[q] === void 0 && (F[q] = oe[q]);
      return Je(y, ae, F);
    }, W.createRef = function() {
      return {
        current: null
      };
    }, W.forwardRef = function(y) {
      return {
        $$typeof: h,
        render: y
      };
    }, W.isValidElement = le, W.lazy = function(y) {
      return {
        $$typeof: E,
        _payload: {
          _status: -1,
          _result: y
        },
        _init: K
      };
    }, W.memo = function(y, T) {
      return {
        $$typeof: v,
        type: y,
        compare: T === void 0 ? null : T
      };
    }, W.startTransition = function(y) {
      var T = I.T, R = {};
      I.T = R;
      try {
        var q = y(), F = I.S;
        F !== null && F(R, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(De, pe);
      } catch (ae) {
        pe(ae);
      } finally {
        T !== null && R.types !== null && (T.types = R.types), I.T = T;
      }
    }, W.unstable_useCacheRefresh = function() {
      return I.H.useCacheRefresh();
    }, W.use = function(y) {
      return I.H.use(y);
    }, W.useActionState = function(y, T, R) {
      return I.H.useActionState(y, T, R);
    }, W.useCallback = function(y, T) {
      return I.H.useCallback(y, T);
    }, W.useContext = function(y) {
      return I.H.useContext(y);
    }, W.useDebugValue = function() {
    }, W.useDeferredValue = function(y, T) {
      return I.H.useDeferredValue(y, T);
    }, W.useEffect = function(y, T) {
      return I.H.useEffect(y, T);
    }, W.useEffectEvent = function(y) {
      return I.H.useEffectEvent(y);
    }, W.useId = function() {
      return I.H.useId();
    }, W.useImperativeHandle = function(y, T, R) {
      return I.H.useImperativeHandle(y, T, R);
    }, W.useInsertionEffect = function(y, T) {
      return I.H.useInsertionEffect(y, T);
    }, W.useLayoutEffect = function(y, T) {
      return I.H.useLayoutEffect(y, T);
    }, W.useMemo = function(y, T) {
      return I.H.useMemo(y, T);
    }, W.useOptimistic = function(y, T) {
      return I.H.useOptimistic(y, T);
    }, W.useReducer = function(y, T, R) {
      return I.H.useReducer(y, T, R);
    }, W.useRef = function(y) {
      return I.H.useRef(y);
    }, W.useState = function(y) {
      return I.H.useState(y);
    }, W.useSyncExternalStore = function(y, T, R) {
      return I.H.useSyncExternalStore(y, T, R);
    }, W.useTransition = function() {
      return I.H.useTransition();
    }, W.version = "19.2.3", W;
  }
  var em;
  function Zs() {
    return em || (em = 1, ws.exports = hy()), ws.exports;
  }
  var re = Zs();
  const yy = Tm(re);
  var Ms = {
    exports: {}
  }, Ln = {}, Os = {
    exports: {}
  }, Us = {};
  var tm;
  function gy() {
    return tm || (tm = 1, (function(s) {
      function r(O, B) {
        var K = O.length;
        O.push(B);
        e: for (; 0 < K; ) {
          var pe = K - 1 >>> 1, H = O[pe];
          if (0 < b(H, B)) O[pe] = B, O[K] = H, K = pe;
          else break e;
        }
      }
      function d(O) {
        return O.length === 0 ? null : O[0];
      }
      function f(O) {
        if (O.length === 0) return null;
        var B = O[0], K = O.pop();
        if (K !== B) {
          O[0] = K;
          e: for (var pe = 0, H = O.length, y = H >>> 1; pe < y; ) {
            var T = 2 * (pe + 1) - 1, R = O[T], q = T + 1, F = O[q];
            if (0 > b(R, K)) q < H && 0 > b(F, R) ? (O[pe] = F, O[q] = K, pe = q) : (O[pe] = R, O[T] = K, pe = T);
            else if (q < H && 0 > b(F, K)) O[pe] = F, O[q] = K, pe = q;
            else break e;
          }
        }
        return B;
      }
      function b(O, B) {
        var K = O.sortIndex - B.sortIndex;
        return K !== 0 ? K : O.id - B.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var S = performance;
        s.unstable_now = function() {
          return S.now();
        };
      } else {
        var p = Date, h = p.now();
        s.unstable_now = function() {
          return p.now() - h;
        };
      }
      var _ = [], v = [], E = 1, C = null, L = 3, P = false, ge = false, be = false, J = false, Z = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
      function fe(O) {
        for (var B = d(v); B !== null; ) {
          if (B.callback === null) f(v);
          else if (B.startTime <= O) f(v), B.sortIndex = B.expirationTime, r(_, B);
          else break;
          B = d(v);
        }
      }
      function Ke(O) {
        if (be = false, fe(O), !ge) if (d(_) !== null) ge = true, De || (De = true, ve());
        else {
          var B = d(v);
          B !== null && $e(Ke, B.startTime - O);
        }
      }
      var De = false, I = -1, qe = 5, Je = -1;
      function V() {
        return J ? true : !(s.unstable_now() - Je < qe);
      }
      function le() {
        if (J = false, De) {
          var O = s.unstable_now();
          Je = O;
          var B = true;
          try {
            e: {
              ge = false, be && (be = false, $(I), I = -1), P = true;
              var K = L;
              try {
                t: {
                  for (fe(O), C = d(_); C !== null && !(C.expirationTime > O && V()); ) {
                    var pe = C.callback;
                    if (typeof pe == "function") {
                      C.callback = null, L = C.priorityLevel;
                      var H = pe(C.expirationTime <= O);
                      if (O = s.unstable_now(), typeof H == "function") {
                        C.callback = H, fe(O), B = true;
                        break t;
                      }
                      C === d(_) && f(_), fe(O);
                    } else f(_);
                    C = d(_);
                  }
                  if (C !== null) B = true;
                  else {
                    var y = d(v);
                    y !== null && $e(Ke, y.startTime - O), B = false;
                  }
                }
                break e;
              } finally {
                C = null, L = K, P = false;
              }
              B = void 0;
            }
          } finally {
            B ? ve() : De = false;
          }
        }
      }
      var ve;
      if (typeof G == "function") ve = function() {
        G(le);
      };
      else if (typeof MessageChannel < "u") {
        var nt = new MessageChannel(), ut = nt.port2;
        nt.port1.onmessage = le, ve = function() {
          ut.postMessage(null);
        };
      } else ve = function() {
        Z(le, 0);
      };
      function $e(O, B) {
        I = Z(function() {
          O(s.unstable_now());
        }, B);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, s.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qe = 0 < O ? Math.floor(1e3 / O) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return L;
      }, s.unstable_next = function(O) {
        switch (L) {
          case 1:
          case 2:
          case 3:
            var B = 3;
            break;
          default:
            B = L;
        }
        var K = L;
        L = B;
        try {
          return O();
        } finally {
          L = K;
        }
      }, s.unstable_requestPaint = function() {
        J = true;
      }, s.unstable_runWithPriority = function(O, B) {
        switch (O) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            O = 3;
        }
        var K = L;
        L = O;
        try {
          return B();
        } finally {
          L = K;
        }
      }, s.unstable_scheduleCallback = function(O, B, K) {
        var pe = s.unstable_now();
        switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? pe + K : pe) : K = pe, O) {
          case 1:
            var H = -1;
            break;
          case 2:
            H = 250;
            break;
          case 5:
            H = 1073741823;
            break;
          case 4:
            H = 1e4;
            break;
          default:
            H = 5e3;
        }
        return H = K + H, O = {
          id: E++,
          callback: B,
          priorityLevel: O,
          startTime: K,
          expirationTime: H,
          sortIndex: -1
        }, K > pe ? (O.sortIndex = K, r(v, O), d(_) === null && O === d(v) && (be ? ($(I), I = -1) : be = true, $e(Ke, K - pe))) : (O.sortIndex = H, r(_, O), ge || P || (ge = true, De || (De = true, ve()))), O;
      }, s.unstable_shouldYield = V, s.unstable_wrapCallback = function(O) {
        var B = L;
        return function() {
          var K = L;
          L = B;
          try {
            return O.apply(this, arguments);
          } finally {
            L = K;
          }
        };
      };
    })(Us)), Us;
  }
  var lm;
  function by() {
    return lm || (lm = 1, Os.exports = gy()), Os.exports;
  }
  var Ds = {
    exports: {}
  }, lt = {};
  var am;
  function py() {
    if (am) return lt;
    am = 1;
    var s = Zs();
    function r(_) {
      var v = "https://react.dev/errors/" + _;
      if (1 < arguments.length) {
        v += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var E = 2; E < arguments.length; E++) v += "&args[]=" + encodeURIComponent(arguments[E]);
      }
      return "Minified React error #" + _ + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d() {
    }
    var f = {
      d: {
        f: d,
        r: function() {
          throw Error(r(522));
        },
        D: d,
        C: d,
        L: d,
        m: d,
        X: d,
        S: d,
        M: d
      },
      p: 0,
      findDOMNode: null
    }, b = /* @__PURE__ */ Symbol.for("react.portal");
    function S(_, v, E) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: b,
        key: C == null ? null : "" + C,
        children: _,
        containerInfo: v,
        implementation: E
      };
    }
    var p = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(_, v) {
      if (_ === "font") return "";
      if (typeof v == "string") return v === "use-credentials" ? v : "";
    }
    return lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, lt.createPortal = function(_, v) {
      var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
      return S(_, v, null, E);
    }, lt.flushSync = function(_) {
      var v = p.T, E = f.p;
      try {
        if (p.T = null, f.p = 2, _) return _();
      } finally {
        p.T = v, f.p = E, f.d.f();
      }
    }, lt.preconnect = function(_, v) {
      typeof _ == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(_, v));
    }, lt.prefetchDNS = function(_) {
      typeof _ == "string" && f.d.D(_);
    }, lt.preinit = function(_, v) {
      if (typeof _ == "string" && v && typeof v.as == "string") {
        var E = v.as, C = h(E, v.crossOrigin), L = typeof v.integrity == "string" ? v.integrity : void 0, P = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        E === "style" ? f.d.S(_, typeof v.precedence == "string" ? v.precedence : void 0, {
          crossOrigin: C,
          integrity: L,
          fetchPriority: P
        }) : E === "script" && f.d.X(_, {
          crossOrigin: C,
          integrity: L,
          fetchPriority: P,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0
        });
      }
    }, lt.preinitModule = function(_, v) {
      if (typeof _ == "string") if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var E = h(v.as, v.crossOrigin);
          f.d.M(_, {
            crossOrigin: E,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(_);
    }, lt.preload = function(_, v) {
      if (typeof _ == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
        var E = v.as, C = h(E, v.crossOrigin);
        f.d.L(_, E, {
          crossOrigin: C,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          type: typeof v.type == "string" ? v.type : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
          referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
          imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
          imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
          media: typeof v.media == "string" ? v.media : void 0
        });
      }
    }, lt.preloadModule = function(_, v) {
      if (typeof _ == "string") if (v) {
        var E = h(v.as, v.crossOrigin);
        f.d.m(_, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: E,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(_);
    }, lt.requestFormReset = function(_) {
      f.d.r(_);
    }, lt.unstable_batchedUpdates = function(_, v) {
      return _(v);
    }, lt.useFormState = function(_, v, E) {
      return p.H.useFormState(_, v, E);
    }, lt.useFormStatus = function() {
      return p.H.useHostTransitionStatus();
    }, lt.version = "19.2.3", lt;
  }
  var nm;
  function _y() {
    if (nm) return Ds.exports;
    nm = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (r) {
        console.error(r);
      }
    }
    return s(), Ds.exports = py(), Ds.exports;
  }
  var um;
  function vy() {
    if (um) return Ln;
    um = 1;
    var s = by(), r = Zs(), d = _y();
    function f(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) t += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function b(e) {
      return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
    }
    function S(e) {
      var t = e, l = e;
      if (e.alternate) for (; t.return; ) t = t.return;
      else {
        e = t;
        do
          t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
        while (e);
      }
      return t.tag === 3 ? l : null;
    }
    function p(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function h(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function _(e) {
      if (S(e) !== e) throw Error(f(188));
    }
    function v(e) {
      var t = e.alternate;
      if (!t) {
        if (t = S(e), t === null) throw Error(f(188));
        return t !== e ? null : e;
      }
      for (var l = e, a = t; ; ) {
        var n = l.return;
        if (n === null) break;
        var u = n.alternate;
        if (u === null) {
          if (a = n.return, a !== null) {
            l = a;
            continue;
          }
          break;
        }
        if (n.child === u.child) {
          for (u = n.child; u; ) {
            if (u === l) return _(n), e;
            if (u === a) return _(n), t;
            u = u.sibling;
          }
          throw Error(f(188));
        }
        if (l.return !== a.return) l = n, a = u;
        else {
          for (var i = false, o = n.child; o; ) {
            if (o === l) {
              i = true, l = n, a = u;
              break;
            }
            if (o === a) {
              i = true, a = n, l = u;
              break;
            }
            o = o.sibling;
          }
          if (!i) {
            for (o = u.child; o; ) {
              if (o === l) {
                i = true, l = u, a = n;
                break;
              }
              if (o === a) {
                i = true, a = u, l = n;
                break;
              }
              o = o.sibling;
            }
            if (!i) throw Error(f(189));
          }
        }
        if (l.alternate !== a) throw Error(f(190));
      }
      if (l.tag !== 3) throw Error(f(188));
      return l.stateNode.current === l ? e : t;
    }
    function E(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = E(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var C = Object.assign, L = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.transitional.element"), ge = /* @__PURE__ */ Symbol.for("react.portal"), be = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), fe = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ke = /* @__PURE__ */ Symbol.for("react.suspense"), De = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), qe = /* @__PURE__ */ Symbol.for("react.lazy"), Je = /* @__PURE__ */ Symbol.for("react.activity"), V = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), le = Symbol.iterator;
    function ve(e) {
      return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var nt = /* @__PURE__ */ Symbol.for("react.client.reference");
    function ut(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === nt ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case be:
          return "Fragment";
        case Z:
          return "Profiler";
        case J:
          return "StrictMode";
        case Ke:
          return "Suspense";
        case De:
          return "SuspenseList";
        case Je:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case ge:
          return "Portal";
        case G:
          return e.displayName || "Context";
        case $:
          return (e._context.displayName || "Context") + ".Consumer";
        case fe:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case I:
          return t = e.displayName || null, t !== null ? t : ut(e.type) || "Memo";
        case qe:
          t = e._payload, e = e._init;
          try {
            return ut(e(t));
          } catch {
          }
      }
      return null;
    }
    var $e = Array.isArray, O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, pe = [], H = -1;
    function y(e) {
      return {
        current: e
      };
    }
    function T(e) {
      0 > H || (e.current = pe[H], pe[H] = null, H--);
    }
    function R(e, t) {
      H++, pe[H] = e.current, e.current = t;
    }
    var q = y(null), F = y(null), ae = y(null), oe = y(null);
    function Te(e, t) {
      switch (R(ae, t), R(F, e), R(q, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? vd(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI) t = vd(t), e = xd(t, e);
          else switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
      }
      T(q), R(q, e);
    }
    function we() {
      T(q), T(F), T(ae);
    }
    function Rl(e) {
      e.memoizedState !== null && R(oe, e);
      var t = q.current, l = xd(t, e.type);
      t !== l && (R(F, e), R(q, l));
    }
    function aa(e) {
      F.current === e && (T(q), T(F)), oe.current === e && (T(oe), Rn._currentValue = K);
    }
    var tt, Bt;
    function Hl(e) {
      if (tt === void 0) try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        tt = t && t[1] || "", Bt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + tt + e + Bt;
    }
    var oi = false;
    function di(e, t) {
      if (!e || oi) return "";
      oi = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var D = function() {
                  throw Error();
                };
                if (Object.defineProperty(D.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(D, []);
                  } catch (z) {
                    var A = z;
                  }
                  Reflect.construct(e, [], D);
                } else {
                  try {
                    D.call();
                  } catch (z) {
                    A = z;
                  }
                  e.call(D.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  A = z;
                }
                (D = e()) && typeof D.catch == "function" && D.catch(function() {
                });
              }
            } catch (z) {
              if (z && A && typeof z.stack == "string") return [
                z.stack,
                A.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var n = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
        n && n.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var u = a.DetermineComponentFrameRoot(), i = u[0], o = u[1];
        if (i && o) {
          var m = i.split(`
`), j = o.split(`
`);
          for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < j.length && !j[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === m.length || n === j.length) for (a = m.length - 1, n = j.length - 1; 1 <= a && 0 <= n && m[a] !== j[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (m[a] !== j[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || m[a] !== j[n]) {
                var w = `
` + m[a].replace(" at new ", " at ");
                return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), w;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        oi = false, Error.prepareStackTrace = l;
      }
      return (l = e ? e.displayName || e.name : "") ? Hl(l) : "";
    }
    function Qm(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return Hl(e.type);
        case 16:
          return Hl("Lazy");
        case 13:
          return e.child !== t && t !== null ? Hl("Suspense Fallback") : Hl("Suspense");
        case 19:
          return Hl("SuspenseList");
        case 0:
        case 15:
          return di(e.type, false);
        case 11:
          return di(e.type.render, false);
        case 1:
          return di(e.type, true);
        case 31:
          return Hl("Activity");
        default:
          return "";
      }
    }
    function $s(e) {
      try {
        var t = "", l = null;
        do
          t += Qm(e, l), l = e, e = e.return;
        while (e);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var mi = Object.prototype.hasOwnProperty, hi = s.unstable_scheduleCallback, yi = s.unstable_cancelCallback, Zm = s.unstable_shouldYield, Vm = s.unstable_requestPaint, ht = s.unstable_now, km = s.unstable_getCurrentPriorityLevel, Fs = s.unstable_ImmediatePriority, Ws = s.unstable_UserBlockingPriority, Vn = s.unstable_NormalPriority, Km = s.unstable_LowPriority, Is = s.unstable_IdlePriority, Jm = s.log, $m = s.unstable_setDisableYieldValue, ka = null, yt = null;
    function fl(e) {
      if (typeof Jm == "function" && $m(e), yt && typeof yt.setStrictMode == "function") try {
        yt.setStrictMode(ka, e);
      } catch {
      }
    }
    var gt = Math.clz32 ? Math.clz32 : Im, Fm = Math.log, Wm = Math.LN2;
    function Im(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (Fm(e) / Wm | 0) | 0;
    }
    var kn = 256, Kn = 262144, Jn = 4194304;
    function Bl(e) {
      var t = e & 42;
      if (t !== 0) return t;
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return e & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return e & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return e;
      }
    }
    function $n(e, t, l) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = e.suspendedLanes, i = e.pingedLanes;
      e = e.warmLanes;
      var o = a & 134217727;
      return o !== 0 ? (a = o & ~u, a !== 0 ? n = Bl(a) : (i &= o, i !== 0 ? n = Bl(i) : l || (l = o & ~e, l !== 0 && (n = Bl(l))))) : (o = a & ~u, o !== 0 ? n = Bl(o) : i !== 0 ? n = Bl(i) : l || (l = a & ~e, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
    }
    function Ka(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Pm(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function Ps() {
      var e = Jn;
      return Jn <<= 1, (Jn & 62914560) === 0 && (Jn = 4194304), e;
    }
    function gi(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function Ja(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function eh(e, t, l, a, n, u) {
      var i = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var o = e.entanglements, m = e.expirationTimes, j = e.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var w = 31 - gt(l), D = 1 << w;
        o[w] = 0, m[w] = -1;
        var A = j[w];
        if (A !== null) for (j[w] = null, w = 0; w < A.length; w++) {
          var z = A[w];
          z !== null && (z.lane &= -536870913);
        }
        l &= ~D;
      }
      a !== 0 && er(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
    }
    function er(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - gt(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
    }
    function tr(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var a = 31 - gt(l), n = 1 << a;
        n & t | e[a] & t && (e[a] |= t), l &= ~n;
      }
    }
    function lr(e, t) {
      var l = t & -t;
      return l = (l & 42) !== 0 ? 1 : bi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
    }
    function bi(e) {
      switch (e) {
        case 2:
          e = 1;
          break;
        case 8:
          e = 4;
          break;
        case 32:
          e = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          e = 128;
          break;
        case 268435456:
          e = 134217728;
          break;
        default:
          e = 0;
      }
      return e;
    }
    function pi(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function ar() {
      var e = B.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Zd(e.type));
    }
    function nr(e, t) {
      var l = B.p;
      try {
        return B.p = e, t();
      } finally {
        B.p = l;
      }
    }
    var ol = Math.random().toString(36).slice(2), Fe = "__reactFiber$" + ol, it = "__reactProps$" + ol, na = "__reactContainer$" + ol, _i = "__reactEvents$" + ol, th = "__reactListeners$" + ol, lh = "__reactHandles$" + ol, ur = "__reactResources$" + ol, $a = "__reactMarker$" + ol;
    function vi(e) {
      delete e[Fe], delete e[it], delete e[_i], delete e[th], delete e[lh];
    }
    function ua(e) {
      var t = e[Fe];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[na] || l[Fe]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = Ed(e); e !== null; ) {
            if (l = e[Fe]) return l;
            e = Ed(e);
          }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function ia(e) {
      if (e = e[Fe] || e[na]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function Fa(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(f(33));
    }
    function ca(e) {
      var t = e[ur];
      return t || (t = e[ur] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Ve(e) {
      e[$a] = true;
    }
    var ir = /* @__PURE__ */ new Set(), cr = {};
    function ql(e, t) {
      sa(e, t), sa(e + "Capture", t);
    }
    function sa(e, t) {
      for (cr[e] = t, e = 0; e < t.length; e++) ir.add(t[e]);
    }
    var ah = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), sr = {}, rr = {};
    function nh(e) {
      return mi.call(rr, e) ? true : mi.call(sr, e) ? false : ah.test(e) ? rr[e] = true : (sr[e] = true, false);
    }
    function Fn(e, t, l) {
      if (nh(t)) if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
    }
    function Wn(e, t, l) {
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(t);
            return;
        }
        e.setAttribute(t, "" + l);
      }
    }
    function kt(e, t, l, a) {
      if (a === null) e.removeAttribute(l);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            e.removeAttribute(l);
            return;
        }
        e.setAttributeNS(t, l, "" + a);
      }
    }
    function Tt(e) {
      switch (typeof e) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function fr(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function uh(e, t, l) {
      var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n = a.get, u = a.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return n.call(this);
          },
          set: function(i) {
            l = "" + i, u.call(this, i);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(i) {
            l = "" + i;
          },
          stopTracking: function() {
            e._valueTracker = null, delete e[t];
          }
        };
      }
    }
    function xi(e) {
      if (!e._valueTracker) {
        var t = fr(e) ? "checked" : "value";
        e._valueTracker = uh(e, t, "" + e[t]);
      }
    }
    function or(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var l = t.getValue(), a = "";
      return e && (a = fr(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), true) : false;
    }
    function In(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var ih = /[\n"\\]/g;
    function Et(e) {
      return e.replace(ih, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Si(e, t, l, a, n, u, i, o) {
      e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Tt(t)) : e.value !== "" + Tt(t) && (e.value = "" + Tt(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? Ni(e, i, Tt(t)) : l != null ? Ni(e, i, Tt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + Tt(o) : e.removeAttribute("name");
    }
    function dr(e, t, l, a, n, u, i, o) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || t != null)) {
          xi(e);
          return;
        }
        l = l != null ? "" + Tt(l) : "", t = t != null ? "" + Tt(t) : l, o || t === e.value || (e.value = t), e.defaultValue = t;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = o ? e.checked : !!a, e.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), xi(e);
    }
    function Ni(e, t, l) {
      t === "number" && In(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function ra(e, t, l, a) {
      if (e = e.options, t) {
        t = {};
        for (var n = 0; n < l.length; n++) t["$" + l[n]] = true;
        for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = true);
      } else {
        for (l = "" + Tt(l), t = null, n = 0; n < e.length; n++) {
          if (e[n].value === l) {
            e[n].selected = true, a && (e[n].defaultSelected = true);
            return;
          }
          t !== null || e[n].disabled || (t = e[n]);
        }
        t !== null && (t.selected = true);
      }
    }
    function mr(e, t, l) {
      if (t != null && (t = "" + Tt(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + Tt(l) : "";
    }
    function hr(e, t, l, a) {
      if (t == null) {
        if (a != null) {
          if (l != null) throw Error(f(92));
          if ($e(a)) {
            if (1 < a.length) throw Error(f(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), t = l;
      }
      l = Tt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), xi(e);
    }
    function fa(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var ch = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function yr(e, t, l) {
      var a = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || ch.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function gr(e, t, l) {
      if (t != null && typeof t != "object") throw Error(f(62));
      if (e = e.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
        for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && yr(e, n, a);
      } else for (var u in t) t.hasOwnProperty(u) && yr(e, u, t[u]);
    }
    function ji(e) {
      if (e.indexOf("-") === -1) return false;
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var sh = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), rh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Pn(e) {
      return rh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Kt() {
    }
    var Ai = null;
    function zi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var oa = null, da = null;
    function br(e) {
      var t = ia(e);
      if (t && (e = t.stateNode)) {
        var l = e[it] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Si(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Et("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                var a = l[t];
                if (a !== e && a.form === e.form) {
                  var n = a[it] || null;
                  if (!n) throw Error(f(90));
                  Si(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && or(a);
            }
            break e;
          case "textarea":
            mr(e, l.value, l.defaultValue);
            break e;
          case "select":
            t = l.value, t != null && ra(e, !!l.multiple, t, false);
        }
      }
    }
    var Ti = false;
    function pr(e, t, l) {
      if (Ti) return e(t, l);
      Ti = true;
      try {
        var a = e(t);
        return a;
      } finally {
        if (Ti = false, (oa !== null || da !== null) && (Lu(), oa && (t = oa, e = da, da = oa = null, br(t), e))) for (t = 0; t < e.length; t++) br(e[t]);
      }
    }
    function Wa(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var a = l[it] || null;
      if (a === null) return null;
      l = a[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
          break e;
        default:
          e = false;
      }
      if (e) return null;
      if (l && typeof l != "function") throw Error(f(231, t, typeof l));
      return l;
    }
    var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ei = false;
    if (Jt) try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", {
        get: function() {
          Ei = true;
        }
      }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      Ei = false;
    }
    var dl = null, wi = null, eu = null;
    function _r() {
      if (eu) return eu;
      var e, t = wi, l = t.length, a, n = "value" in dl ? dl.value : dl.textContent, u = n.length;
      for (e = 0; e < l && t[e] === n[e]; e++) ;
      var i = l - e;
      for (a = 1; a <= i && t[l - a] === n[u - a]; a++) ;
      return eu = n.slice(e, 1 < a ? 1 - a : void 0);
    }
    function tu(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function lu() {
      return true;
    }
    function vr() {
      return false;
    }
    function ct(e) {
      function t(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var o in e) e.hasOwnProperty(o) && (l = e[o], this[o] = l ? l(u) : u[o]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? lu : vr, this.isPropagationStopped = vr, this;
      }
      return C(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = lu);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = lu);
        },
        persist: function() {
        },
        isPersistent: lu
      }), t;
    }
    var Yl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, au = ct(Yl), Pa = C({}, Yl, {
      view: 0,
      detail: 0
    }), fh = ct(Pa), Mi, Oi, en, nu = C({}, Pa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Di,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== en && (en && e.type === "mousemove" ? (Mi = e.screenX - en.screenX, Oi = e.screenY - en.screenY) : Oi = Mi = 0, en = e), Mi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Oi;
      }
    }), xr = ct(nu), oh = C({}, nu, {
      dataTransfer: 0
    }), dh = ct(oh), mh = C({}, Pa, {
      relatedTarget: 0
    }), Ui = ct(mh), hh = C({}, Yl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), yh = ct(hh), gh = C({}, Yl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), bh = ct(gh), ph = C({}, Yl, {
      data: 0
    }), Sr = ct(ph), _h = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, vh = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, xh = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Sh(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = xh[e]) ? !!t[e] : false;
    }
    function Di() {
      return Sh;
    }
    var Nh = C({}, Pa, {
      key: function(e) {
        if (e.key) {
          var t = _h[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = tu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vh[e.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Di,
      charCode: function(e) {
        return e.type === "keypress" ? tu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? tu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), jh = ct(Nh), Ah = C({}, nu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Nr = ct(Ah), zh = C({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Di
    }), Th = ct(zh), Eh = C({}, Yl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), wh = ct(Eh), Mh = C({}, nu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Oh = ct(Mh), Uh = C({}, Yl, {
      newState: 0,
      oldState: 0
    }), Dh = ct(Uh), Ch = [
      9,
      13,
      27,
      32
    ], Ci = Jt && "CompositionEvent" in window, tn = null;
    Jt && "documentMode" in document && (tn = document.documentMode);
    var Rh = Jt && "TextEvent" in window && !tn, jr = Jt && (!Ci || tn && 8 < tn && 11 >= tn), Ar = " ", zr = false;
    function Tr(e, t) {
      switch (e) {
        case "keyup":
          return Ch.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function Er(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var ma = false;
    function Hh(e, t) {
      switch (e) {
        case "compositionend":
          return Er(t);
        case "keypress":
          return t.which !== 32 ? null : (zr = true, Ar);
        case "textInput":
          return e = t.data, e === Ar && zr ? null : e;
        default:
          return null;
      }
    }
    function Bh(e, t) {
      if (ma) return e === "compositionend" || !Ci && Tr(e, t) ? (e = _r(), eu = wi = dl = null, ma = false, e) : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return jr && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var qh = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function wr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!qh[e.type] : t === "textarea";
    }
    function Mr(e, t, l, a) {
      oa ? da ? da.push(a) : da = [
        a
      ] : oa = a, t = Ku(t, "onChange"), 0 < t.length && (l = new au("onChange", "change", null, l, a), e.push({
        event: l,
        listeners: t
      }));
    }
    var ln = null, an = null;
    function Yh(e) {
      hd(e, 0);
    }
    function uu(e) {
      var t = Fa(e);
      if (or(t)) return e;
    }
    function Or(e, t) {
      if (e === "change") return t;
    }
    var Ur = false;
    if (Jt) {
      var Ri;
      if (Jt) {
        var Hi = "oninput" in document;
        if (!Hi) {
          var Dr = document.createElement("div");
          Dr.setAttribute("oninput", "return;"), Hi = typeof Dr.oninput == "function";
        }
        Ri = Hi;
      } else Ri = false;
      Ur = Ri && (!document.documentMode || 9 < document.documentMode);
    }
    function Cr() {
      ln && (ln.detachEvent("onpropertychange", Rr), an = ln = null);
    }
    function Rr(e) {
      if (e.propertyName === "value" && uu(an)) {
        var t = [];
        Mr(t, an, e, zi(e)), pr(Yh, t);
      }
    }
    function Lh(e, t, l) {
      e === "focusin" ? (Cr(), ln = t, an = l, ln.attachEvent("onpropertychange", Rr)) : e === "focusout" && Cr();
    }
    function Gh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return uu(an);
    }
    function Xh(e, t) {
      if (e === "click") return uu(t);
    }
    function Qh(e, t) {
      if (e === "input" || e === "change") return uu(t);
    }
    function Zh(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var bt = typeof Object.is == "function" ? Object.is : Zh;
    function nn(e, t) {
      if (bt(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var l = Object.keys(e), a = Object.keys(t);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!mi.call(t, n) || !bt(e[n], t[n])) return false;
      }
      return true;
    }
    function Hr(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Br(e, t) {
      var l = Hr(e);
      e = 0;
      for (var a; l; ) {
        if (l.nodeType === 3) {
          if (a = e + l.textContent.length, e <= t && a >= t) return {
            node: l,
            offset: t - e
          };
          e = a;
        }
        e: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break e;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = Hr(l);
      }
    }
    function qr(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? qr(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Yr(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = In(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) e = t.contentWindow;
        else break;
        t = In(e.document);
      }
      return t;
    }
    function Bi(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var Vh = Jt && "documentMode" in document && 11 >= document.documentMode, ha = null, qi = null, un = null, Yi = false;
    function Lr(e, t, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Yi || ha == null || ha !== In(a) || (a = ha, "selectionStart" in a && Bi(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), un && nn(un, a) || (un = a, a = Ku(qi, "onSelect"), 0 < a.length && (t = new au("onSelect", "select", null, t, l), e.push({
        event: t,
        listeners: a
      }), t.target = ha)));
    }
    function Ll(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var ya = {
      animationend: Ll("Animation", "AnimationEnd"),
      animationiteration: Ll("Animation", "AnimationIteration"),
      animationstart: Ll("Animation", "AnimationStart"),
      transitionrun: Ll("Transition", "TransitionRun"),
      transitionstart: Ll("Transition", "TransitionStart"),
      transitioncancel: Ll("Transition", "TransitionCancel"),
      transitionend: Ll("Transition", "TransitionEnd")
    }, Li = {}, Gr = {};
    Jt && (Gr = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
    function Gl(e) {
      if (Li[e]) return Li[e];
      if (!ya[e]) return e;
      var t = ya[e], l;
      for (l in t) if (t.hasOwnProperty(l) && l in Gr) return Li[e] = t[l];
      return e;
    }
    var Xr = Gl("animationend"), Qr = Gl("animationiteration"), Zr = Gl("animationstart"), kh = Gl("transitionrun"), Kh = Gl("transitionstart"), Jh = Gl("transitioncancel"), Vr = Gl("transitionend"), kr = /* @__PURE__ */ new Map(), Gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Gi.push("scrollEnd");
    function qt(e, t) {
      kr.set(e, t), ql(t, [
        e
      ]);
    }
    var iu = typeof reportError == "function" ? reportError : function(e) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
          error: e
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", e);
        return;
      }
      console.error(e);
    }, wt = [], ga = 0, Xi = 0;
    function cu() {
      for (var e = ga, t = Xi = ga = 0; t < e; ) {
        var l = wt[t];
        wt[t++] = null;
        var a = wt[t];
        wt[t++] = null;
        var n = wt[t];
        wt[t++] = null;
        var u = wt[t];
        if (wt[t++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Kr(l, n, u);
      }
    }
    function su(e, t, l, a) {
      wt[ga++] = e, wt[ga++] = t, wt[ga++] = l, wt[ga++] = a, Xi |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Qi(e, t, l, a) {
      return su(e, t, l, a), ru(e);
    }
    function Xl(e, t) {
      return su(e, null, null, t), ru(e);
    }
    function Kr(e, t, l) {
      e.lanes |= l;
      var a = e.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = e.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = true)), e = u, u = u.return;
      return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - gt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [
        t
      ] : a.push(t), t.lane = l | 536870912), u) : null;
    }
    function ru(e) {
      if (50 < En) throw En = 0, Ic = null, Error(f(185));
      for (var t = e.return; t !== null; ) e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var ba = {};
    function $h(e, t, l, a) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function pt(e, t, l, a) {
      return new $h(e, t, l, a);
    }
    function Zi(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function $t(e, t) {
      var l = e.alternate;
      return l === null ? (l = pt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
    }
    function Jr(e, t) {
      e.flags &= 65011714;
      var l = e.alternate;
      return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), e;
    }
    function fu(e, t, l, a, n, u) {
      var i = 0;
      if (a = e, typeof e == "function") Zi(e) && (i = 1);
      else if (typeof e == "string") i = ey(e, l, q.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case Je:
          return e = pt(31, l, t, n), e.elementType = Je, e.lanes = u, e;
        case be:
          return Ql(l.children, n, u, t);
        case J:
          i = 8, n |= 24;
          break;
        case Z:
          return e = pt(12, l, t, n | 2), e.elementType = Z, e.lanes = u, e;
        case Ke:
          return e = pt(13, l, t, n), e.elementType = Ke, e.lanes = u, e;
        case De:
          return e = pt(19, l, t, n), e.elementType = De, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case G:
              i = 10;
              break e;
            case $:
              i = 9;
              break e;
            case fe:
              i = 11;
              break e;
            case I:
              i = 14;
              break e;
            case qe:
              i = 16, a = null;
              break e;
          }
          i = 29, l = Error(f(130, e === null ? "null" : typeof e, "")), a = null;
      }
      return t = pt(i, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
    }
    function Ql(e, t, l, a) {
      return e = pt(7, e, a, t), e.lanes = l, e;
    }
    function Vi(e, t, l) {
      return e = pt(6, e, null, t), e.lanes = l, e;
    }
    function $r(e) {
      var t = pt(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function ki(e, t, l) {
      return t = pt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    var Fr = /* @__PURE__ */ new WeakMap();
    function Mt(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = Fr.get(e);
        return l !== void 0 ? l : (t = {
          value: e,
          source: t,
          stack: $s(t)
        }, Fr.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: $s(t)
      };
    }
    var pa = [], _a = 0, ou = null, cn = 0, Ot = [], Ut = 0, ml = null, Gt = 1, Xt = "";
    function Ft(e, t) {
      pa[_a++] = cn, pa[_a++] = ou, ou = e, cn = t;
    }
    function Wr(e, t, l) {
      Ot[Ut++] = Gt, Ot[Ut++] = Xt, Ot[Ut++] = ml, ml = e;
      var a = Gt;
      e = Xt;
      var n = 32 - gt(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - gt(t) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Gt = 1 << 32 - gt(t) + n | l << n | a, Xt = u + e;
      } else Gt = 1 << u | l << n | a, Xt = e;
    }
    function Ki(e) {
      e.return !== null && (Ft(e, 1), Wr(e, 1, 0));
    }
    function Ji(e) {
      for (; e === ou; ) ou = pa[--_a], pa[_a] = null, cn = pa[--_a], pa[_a] = null;
      for (; e === ml; ) ml = Ot[--Ut], Ot[Ut] = null, Xt = Ot[--Ut], Ot[Ut] = null, Gt = Ot[--Ut], Ot[Ut] = null;
    }
    function Ir(e, t) {
      Ot[Ut++] = Gt, Ot[Ut++] = Xt, Ot[Ut++] = ml, Gt = t.id, Xt = t.overflow, ml = e;
    }
    var We = null, Me = null, se = false, hl = null, Dt = false, $i = Error(f(519));
    function yl(e) {
      var t = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw sn(Mt(t, e)), $i;
    }
    function Pr(e) {
      var t = e.stateNode, l = e.type, a = e.memoizedProps;
      switch (t[Fe] = e, t[it] = a, l) {
        case "dialog":
          ue("cancel", t), ue("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ue("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < Mn.length; l++) ue(Mn[l], t);
          break;
        case "source":
          ue("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ue("error", t), ue("load", t);
          break;
        case "details":
          ue("toggle", t);
          break;
        case "input":
          ue("invalid", t), dr(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          ue("invalid", t);
          break;
        case "textarea":
          ue("invalid", t), hr(t, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === true || pd(t.textContent, l) ? (a.popover != null && (ue("beforetoggle", t), ue("toggle", t)), a.onScroll != null && ue("scroll", t), a.onScrollEnd != null && ue("scrollend", t), a.onClick != null && (t.onclick = Kt), t = true) : t = false, t || yl(e, true);
    }
    function ef(e) {
      for (We = e.return; We; ) switch (We.tag) {
        case 5:
        case 31:
        case 13:
          Dt = false;
          return;
        case 27:
        case 3:
          Dt = true;
          return;
        default:
          We = We.return;
      }
    }
    function va(e) {
      if (e !== We) return false;
      if (!se) return ef(e), se = true, false;
      var t = e.tag, l;
      if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || ms(e.type, e.memoizedProps)), l = !l), l && Me && yl(e), ef(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
        Me = Td(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
        Me = Td(e);
      } else t === 27 ? (t = Me, wl(e.type) ? (e = ps, ps = null, Me = e) : Me = t) : Me = We ? Rt(e.stateNode.nextSibling) : null;
      return true;
    }
    function Zl() {
      Me = We = null, se = false;
    }
    function Fi() {
      var e = hl;
      return e !== null && (ot === null ? ot = e : ot.push.apply(ot, e), hl = null), e;
    }
    function sn(e) {
      hl === null ? hl = [
        e
      ] : hl.push(e);
    }
    var Wi = y(null), Vl = null, Wt = null;
    function gl(e, t, l) {
      R(Wi, t._currentValue), t._currentValue = l;
    }
    function It(e) {
      e._currentValue = Wi.current, T(Wi);
    }
    function Ii(e, t, l) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
        e = e.return;
      }
    }
    function Pi(e, t, l, a) {
      var n = e.child;
      for (n !== null && (n.return = e); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var i = n.child;
          u = u.firstContext;
          e: for (; u !== null; ) {
            var o = u;
            u = n;
            for (var m = 0; m < t.length; m++) if (o.context === t[m]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Ii(u.return, l, e), a || (i = null);
              break e;
            }
            u = o.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(f(341));
          i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Ii(i, l, e), i = null;
        } else i = n.child;
        if (i !== null) i.return = n;
        else for (i = n; i !== null; ) {
          if (i === e) {
            i = null;
            break;
          }
          if (n = i.sibling, n !== null) {
            n.return = i.return, i = n;
            break;
          }
          i = i.return;
        }
        n = i;
      }
    }
    function xa(e, t, l, a) {
      e = null;
      for (var n = t, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(f(387));
          if (i = i.memoizedProps, i !== null) {
            var o = n.type;
            bt(n.pendingProps.value, i.value) || (e !== null ? e.push(o) : e = [
              o
            ]);
          }
        } else if (n === oe.current) {
          if (i = n.alternate, i === null) throw Error(f(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Rn) : e = [
            Rn
          ]);
        }
        n = n.return;
      }
      e !== null && Pi(t, e, l, a), t.flags |= 262144;
    }
    function du(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!bt(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function kl(e) {
      Vl = e, Wt = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ie(e) {
      return tf(Vl, e);
    }
    function mu(e, t) {
      return Vl === null && kl(e), tf(e, t);
    }
    function tf(e, t) {
      var l = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, Wt === null) {
        if (e === null) throw Error(f(308));
        Wt = t, e.dependencies = {
          lanes: 0,
          firstContext: t
        }, e.flags |= 524288;
      } else Wt = Wt.next = t;
      return l;
    }
    var Fh = typeof AbortController < "u" ? AbortController : function() {
      var e = [], t = this.signal = {
        aborted: false,
        addEventListener: function(l, a) {
          e.push(a);
        }
      };
      this.abort = function() {
        t.aborted = true, e.forEach(function(l) {
          return l();
        });
      };
    }, Wh = s.unstable_scheduleCallback, Ih = s.unstable_NormalPriority, Ye = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function ec() {
      return {
        controller: new Fh(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function rn(e) {
      e.refCount--, e.refCount === 0 && Wh(Ih, function() {
        e.controller.abort();
      });
    }
    var fn = null, tc = 0, Sa = 0, Na = null;
    function Ph(e, t) {
      if (fn === null) {
        var l = fn = [];
        tc = 0, Sa = ns(), Na = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return tc++, t.then(lf, lf), t;
    }
    function lf() {
      if (--tc === 0 && fn !== null) {
        Na !== null && (Na.status = "fulfilled");
        var e = fn;
        fn = null, Sa = 0, Na = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function e0(e, t) {
      var l = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          l.push(n);
        }
      };
      return e.then(function() {
        a.status = "fulfilled", a.value = t;
        for (var n = 0; n < l.length; n++) (0, l[n])(t);
      }, function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
      }), a;
    }
    var af = O.S;
    O.S = function(e, t) {
      Xo = ht(), typeof t == "object" && t !== null && typeof t.then == "function" && Ph(e, t), af !== null && af(e, t);
    };
    var Kl = y(null);
    function lc() {
      var e = Kl.current;
      return e !== null ? e : Ee.pooledCache;
    }
    function hu(e, t) {
      t === null ? R(Kl, Kl.current) : R(Kl, t.pool);
    }
    function nf() {
      var e = lc();
      return e === null ? null : {
        parent: Ye._currentValue,
        pool: e
      };
    }
    var ja = Error(f(460)), ac = Error(f(474)), yu = Error(f(542)), gu = {
      then: function() {
      }
    };
    function uf(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function cf(e, t, l) {
      switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Kt, Kt), t = l), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, rf(e), e;
        default:
          if (typeof t.status == "string") t.then(Kt, Kt);
          else {
            if (e = Ee, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
            e = t, e.status = "pending", e.then(function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "fulfilled", n.value = a;
              }
            }, function(a) {
              if (t.status === "pending") {
                var n = t;
                n.status = "rejected", n.reason = a;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw e = t.reason, rf(e), e;
          }
          throw $l = t, ja;
      }
    }
    function Jl(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? ($l = l, ja) : l;
      }
    }
    var $l = null;
    function sf() {
      if ($l === null) throw Error(f(459));
      var e = $l;
      return $l = null, e;
    }
    function rf(e) {
      if (e === ja || e === yu) throw Error(f(483));
    }
    var Aa = null, on = 0;
    function bu(e) {
      var t = on;
      return on += 1, Aa === null && (Aa = []), cf(Aa, e, t);
    }
    function dn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function pu(e, t) {
      throw t.$$typeof === L ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function ff(e) {
      function t(x, g) {
        if (e) {
          var N = x.deletions;
          N === null ? (x.deletions = [
            g
          ], x.flags |= 16) : N.push(g);
        }
      }
      function l(x, g) {
        if (!e) return null;
        for (; g !== null; ) t(x, g), g = g.sibling;
        return null;
      }
      function a(x) {
        for (var g = /* @__PURE__ */ new Map(); x !== null; ) x.key !== null ? g.set(x.key, x) : g.set(x.index, x), x = x.sibling;
        return g;
      }
      function n(x, g) {
        return x = $t(x, g), x.index = 0, x.sibling = null, x;
      }
      function u(x, g, N) {
        return x.index = N, e ? (N = x.alternate, N !== null ? (N = N.index, N < g ? (x.flags |= 67108866, g) : N) : (x.flags |= 67108866, g)) : (x.flags |= 1048576, g);
      }
      function i(x) {
        return e && x.alternate === null && (x.flags |= 67108866), x;
      }
      function o(x, g, N, U) {
        return g === null || g.tag !== 6 ? (g = Vi(N, x.mode, U), g.return = x, g) : (g = n(g, N), g.return = x, g);
      }
      function m(x, g, N, U) {
        var Q = N.type;
        return Q === be ? w(x, g, N.props.children, U, N.key) : g !== null && (g.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === qe && Jl(Q) === g.type) ? (g = n(g, N.props), dn(g, N), g.return = x, g) : (g = fu(N.type, N.key, N.props, null, x.mode, U), dn(g, N), g.return = x, g);
      }
      function j(x, g, N, U) {
        return g === null || g.tag !== 4 || g.stateNode.containerInfo !== N.containerInfo || g.stateNode.implementation !== N.implementation ? (g = ki(N, x.mode, U), g.return = x, g) : (g = n(g, N.children || []), g.return = x, g);
      }
      function w(x, g, N, U, Q) {
        return g === null || g.tag !== 7 ? (g = Ql(N, x.mode, U, Q), g.return = x, g) : (g = n(g, N), g.return = x, g);
      }
      function D(x, g, N) {
        if (typeof g == "string" && g !== "" || typeof g == "number" || typeof g == "bigint") return g = Vi("" + g, x.mode, N), g.return = x, g;
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case P:
              return N = fu(g.type, g.key, g.props, null, x.mode, N), dn(N, g), N.return = x, N;
            case ge:
              return g = ki(g, x.mode, N), g.return = x, g;
            case qe:
              return g = Jl(g), D(x, g, N);
          }
          if ($e(g) || ve(g)) return g = Ql(g, x.mode, N, null), g.return = x, g;
          if (typeof g.then == "function") return D(x, bu(g), N);
          if (g.$$typeof === G) return D(x, mu(x, g), N);
          pu(x, g);
        }
        return null;
      }
      function A(x, g, N, U) {
        var Q = g !== null ? g.key : null;
        if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return Q !== null ? null : o(x, g, "" + N, U);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case P:
              return N.key === Q ? m(x, g, N, U) : null;
            case ge:
              return N.key === Q ? j(x, g, N, U) : null;
            case qe:
              return N = Jl(N), A(x, g, N, U);
          }
          if ($e(N) || ve(N)) return Q !== null ? null : w(x, g, N, U, null);
          if (typeof N.then == "function") return A(x, g, bu(N), U);
          if (N.$$typeof === G) return A(x, g, mu(x, N), U);
          pu(x, N);
        }
        return null;
      }
      function z(x, g, N, U, Q) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return x = x.get(N) || null, o(g, x, "" + U, Q);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case P:
              return x = x.get(U.key === null ? N : U.key) || null, m(g, x, U, Q);
            case ge:
              return x = x.get(U.key === null ? N : U.key) || null, j(g, x, U, Q);
            case qe:
              return U = Jl(U), z(x, g, N, U, Q);
          }
          if ($e(U) || ve(U)) return x = x.get(N) || null, w(g, x, U, Q, null);
          if (typeof U.then == "function") return z(x, g, N, bu(U), Q);
          if (U.$$typeof === G) return z(x, g, N, mu(g, U), Q);
          pu(g, U);
        }
        return null;
      }
      function Y(x, g, N, U) {
        for (var Q = null, me = null, X = g, te = g = 0, ce = null; X !== null && te < N.length; te++) {
          X.index > te ? (ce = X, X = null) : ce = X.sibling;
          var he = A(x, X, N[te], U);
          if (he === null) {
            X === null && (X = ce);
            break;
          }
          e && X && he.alternate === null && t(x, X), g = u(he, g, te), me === null ? Q = he : me.sibling = he, me = he, X = ce;
        }
        if (te === N.length) return l(x, X), se && Ft(x, te), Q;
        if (X === null) {
          for (; te < N.length; te++) X = D(x, N[te], U), X !== null && (g = u(X, g, te), me === null ? Q = X : me.sibling = X, me = X);
          return se && Ft(x, te), Q;
        }
        for (X = a(X); te < N.length; te++) ce = z(X, x, te, N[te], U), ce !== null && (e && ce.alternate !== null && X.delete(ce.key === null ? te : ce.key), g = u(ce, g, te), me === null ? Q = ce : me.sibling = ce, me = ce);
        return e && X.forEach(function(Cl) {
          return t(x, Cl);
        }), se && Ft(x, te), Q;
      }
      function k(x, g, N, U) {
        if (N == null) throw Error(f(151));
        for (var Q = null, me = null, X = g, te = g = 0, ce = null, he = N.next(); X !== null && !he.done; te++, he = N.next()) {
          X.index > te ? (ce = X, X = null) : ce = X.sibling;
          var Cl = A(x, X, he.value, U);
          if (Cl === null) {
            X === null && (X = ce);
            break;
          }
          e && X && Cl.alternate === null && t(x, X), g = u(Cl, g, te), me === null ? Q = Cl : me.sibling = Cl, me = Cl, X = ce;
        }
        if (he.done) return l(x, X), se && Ft(x, te), Q;
        if (X === null) {
          for (; !he.done; te++, he = N.next()) he = D(x, he.value, U), he !== null && (g = u(he, g, te), me === null ? Q = he : me.sibling = he, me = he);
          return se && Ft(x, te), Q;
        }
        for (X = a(X); !he.done; te++, he = N.next()) he = z(X, x, te, he.value, U), he !== null && (e && he.alternate !== null && X.delete(he.key === null ? te : he.key), g = u(he, g, te), me === null ? Q = he : me.sibling = he, me = he);
        return e && X.forEach(function(oy) {
          return t(x, oy);
        }), se && Ft(x, te), Q;
      }
      function ze(x, g, N, U) {
        if (typeof N == "object" && N !== null && N.type === be && N.key === null && (N = N.props.children), typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case P:
              e: {
                for (var Q = N.key; g !== null; ) {
                  if (g.key === Q) {
                    if (Q = N.type, Q === be) {
                      if (g.tag === 7) {
                        l(x, g.sibling), U = n(g, N.props.children), U.return = x, x = U;
                        break e;
                      }
                    } else if (g.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === qe && Jl(Q) === g.type) {
                      l(x, g.sibling), U = n(g, N.props), dn(U, N), U.return = x, x = U;
                      break e;
                    }
                    l(x, g);
                    break;
                  } else t(x, g);
                  g = g.sibling;
                }
                N.type === be ? (U = Ql(N.props.children, x.mode, U, N.key), U.return = x, x = U) : (U = fu(N.type, N.key, N.props, null, x.mode, U), dn(U, N), U.return = x, x = U);
              }
              return i(x);
            case ge:
              e: {
                for (Q = N.key; g !== null; ) {
                  if (g.key === Q) if (g.tag === 4 && g.stateNode.containerInfo === N.containerInfo && g.stateNode.implementation === N.implementation) {
                    l(x, g.sibling), U = n(g, N.children || []), U.return = x, x = U;
                    break e;
                  } else {
                    l(x, g);
                    break;
                  }
                  else t(x, g);
                  g = g.sibling;
                }
                U = ki(N, x.mode, U), U.return = x, x = U;
              }
              return i(x);
            case qe:
              return N = Jl(N), ze(x, g, N, U);
          }
          if ($e(N)) return Y(x, g, N, U);
          if (ve(N)) {
            if (Q = ve(N), typeof Q != "function") throw Error(f(150));
            return N = Q.call(N), k(x, g, N, U);
          }
          if (typeof N.then == "function") return ze(x, g, bu(N), U);
          if (N.$$typeof === G) return ze(x, g, mu(x, N), U);
          pu(x, N);
        }
        return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, g !== null && g.tag === 6 ? (l(x, g.sibling), U = n(g, N), U.return = x, x = U) : (l(x, g), U = Vi(N, x.mode, U), U.return = x, x = U), i(x)) : l(x, g);
      }
      return function(x, g, N, U) {
        try {
          on = 0;
          var Q = ze(x, g, N, U);
          return Aa = null, Q;
        } catch (X) {
          if (X === ja || X === yu) throw X;
          var me = pt(29, X, null, x.mode);
          return me.lanes = U, me.return = x, me;
        }
      };
    }
    var Fl = ff(true), of = ff(false), bl = false;
    function nc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function uc(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function pl(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function _l(e, t, l) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (ye & 2) !== 0) {
        var n = a.pending;
        return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ru(e), Kr(e, null, l), t;
      }
      return su(e, a, t, l), ru(e);
    }
    function mn(e, t, l) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, l |= a, t.lanes = l, tr(e, l);
      }
    }
    function ic(e, t) {
      var l = e.updateQueue, a = e.alternate;
      if (a !== null && (a = a.updateQueue, l === a)) {
        var n = null, u = null;
        if (l = l.firstBaseUpdate, l !== null) {
          do {
            var i = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            u === null ? n = u = i : u = u.next = i, l = l.next;
          } while (l !== null);
          u === null ? n = u = t : u = u.next = t;
        } else n = u = t;
        l = {
          baseState: a.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: u,
          shared: a.shared,
          callbacks: a.callbacks
        }, e.updateQueue = l;
        return;
      }
      e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
    }
    var cc = false;
    function hn() {
      if (cc) {
        var e = Na;
        if (e !== null) throw e;
      }
    }
    function yn(e, t, l, a) {
      cc = false;
      var n = e.updateQueue;
      bl = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, o = n.shared.pending;
      if (o !== null) {
        n.shared.pending = null;
        var m = o, j = m.next;
        m.next = null, i === null ? u = j : i.next = j, i = m;
        var w = e.alternate;
        w !== null && (w = w.updateQueue, o = w.lastBaseUpdate, o !== i && (o === null ? w.firstBaseUpdate = j : o.next = j, w.lastBaseUpdate = m));
      }
      if (u !== null) {
        var D = n.baseState;
        i = 0, w = j = m = null, o = u;
        do {
          var A = o.lane & -536870913, z = A !== o.lane;
          if (z ? (ie & A) === A : (a & A) === A) {
            A !== 0 && A === Sa && (cc = true), w !== null && (w = w.next = {
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            });
            e: {
              var Y = e, k = o;
              A = t;
              var ze = l;
              switch (k.tag) {
                case 1:
                  if (Y = k.payload, typeof Y == "function") {
                    D = Y.call(ze, D, A);
                    break e;
                  }
                  D = Y;
                  break e;
                case 3:
                  Y.flags = Y.flags & -65537 | 128;
                case 0:
                  if (Y = k.payload, A = typeof Y == "function" ? Y.call(ze, D, A) : Y, A == null) break e;
                  D = C({}, D, A);
                  break e;
                case 2:
                  bl = true;
              }
            }
            A = o.callback, A !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [
              A
            ] : z.push(A));
          } else z = {
            lane: A,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, w === null ? (j = w = z, m = D) : w = w.next = z, i |= A;
          if (o = o.next, o === null) {
            if (o = n.shared.pending, o === null) break;
            z = o, o = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
          }
        } while (true);
        w === null && (m = D), n.baseState = m, n.firstBaseUpdate = j, n.lastBaseUpdate = w, u === null && (n.shared.lanes = 0), jl |= i, e.lanes = i, e.memoizedState = D;
      }
    }
    function df(e, t) {
      if (typeof e != "function") throw Error(f(191, e));
      e.call(t);
    }
    function mf(e, t) {
      var l = e.callbacks;
      if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) df(l[e], t);
    }
    var za = y(null), _u = y(0);
    function hf(e, t) {
      e = cl, R(_u, e), R(za, t), cl = e | t.baseLanes;
    }
    function sc() {
      R(_u, cl), R(za, za.current);
    }
    function rc() {
      cl = _u.current, T(za), T(_u);
    }
    var _t = y(null), Ct = null;
    function vl(e) {
      var t = e.alternate;
      R(He, He.current & 1), R(_t, e), Ct === null && (t === null || za.current !== null || t.memoizedState !== null) && (Ct = e);
    }
    function fc(e) {
      R(He, He.current), R(_t, e), Ct === null && (Ct = e);
    }
    function yf(e) {
      e.tag === 22 ? (R(He, He.current), R(_t, e), Ct === null && (Ct = e)) : xl();
    }
    function xl() {
      R(He, He.current), R(_t, _t.current);
    }
    function vt(e) {
      T(_t), Ct === e && (Ct = null), T(He);
    }
    var He = y(0);
    function vu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || gs(l) || bs(l))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Pt = 0, ee = null, je = null, Le = null, xu = false, Ta = false, Wl = false, Su = 0, gn = 0, Ea = null, t0 = 0;
    function Ce() {
      throw Error(f(321));
    }
    function oc(e, t) {
      if (t === null) return false;
      for (var l = 0; l < t.length && l < e.length; l++) if (!bt(e[l], t[l])) return false;
      return true;
    }
    function dc(e, t, l, a, n, u) {
      return Pt = u, ee = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? If : Tc, Wl = false, u = l(a, n), Wl = false, Ta && (u = bf(t, l, a, n)), gf(e), u;
    }
    function gf(e) {
      O.H = _n;
      var t = je !== null && je.next !== null;
      if (Pt = 0, Le = je = ee = null, xu = false, gn = 0, Ea = null, t) throw Error(f(300));
      e === null || Ge || (e = e.dependencies, e !== null && du(e) && (Ge = true));
    }
    function bf(e, t, l, a) {
      ee = e;
      var n = 0;
      do {
        if (Ta && (Ea = null), gn = 0, Ta = false, 25 <= n) throw Error(f(301));
        if (n += 1, Le = je = null, e.updateQueue != null) {
          var u = e.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        O.H = Pf, u = t(l, a);
      } while (Ta);
      return u;
    }
    function l0() {
      var e = O.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? bn(t) : t, e = e.useState()[0], (je !== null ? je.memoizedState : null) !== e && (ee.flags |= 1024), t;
    }
    function mc() {
      var e = Su !== 0;
      return Su = 0, e;
    }
    function hc(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function yc(e) {
      if (xu) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        xu = false;
      }
      Pt = 0, Le = je = ee = null, Ta = false, gn = Su = 0, Ea = null;
    }
    function at() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Le === null ? ee.memoizedState = Le = e : Le = Le.next = e, Le;
    }
    function Be() {
      if (je === null) {
        var e = ee.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = je.next;
      var t = Le === null ? ee.memoizedState : Le.next;
      if (t !== null) Le = t, je = e;
      else {
        if (e === null) throw ee.alternate === null ? Error(f(467)) : Error(f(310));
        je = e, e = {
          memoizedState: je.memoizedState,
          baseState: je.baseState,
          baseQueue: je.baseQueue,
          queue: je.queue,
          next: null
        }, Le === null ? ee.memoizedState = Le = e : Le = Le.next = e;
      }
      return Le;
    }
    function Nu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function bn(e) {
      var t = gn;
      return gn += 1, Ea === null && (Ea = []), e = cf(Ea, e, t), t = ee, (Le === null ? t.memoizedState : Le.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? If : Tc), e;
    }
    function ju(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return bn(e);
        if (e.$$typeof === G) return Ie(e);
      }
      throw Error(f(438, String(e)));
    }
    function gc(e) {
      var t = null, l = ee.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var a = ee.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
          data: a.data.map(function(n) {
            return n.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), l === null && (l = Nu(), ee.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = V;
      return t.index++, l;
    }
    function el(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Au(e) {
      var t = Be();
      return bc(t, je, e);
    }
    function bc(e, t, l) {
      var a = e.queue;
      if (a === null) throw Error(f(311));
      a.lastRenderedReducer = l;
      var n = e.baseQueue, u = a.pending;
      if (u !== null) {
        if (n !== null) {
          var i = n.next;
          n.next = u.next, u.next = i;
        }
        t.baseQueue = n = u, a.pending = null;
      }
      if (u = e.baseState, n === null) e.memoizedState = u;
      else {
        t = n.next;
        var o = i = null, m = null, j = t, w = false;
        do {
          var D = j.lane & -536870913;
          if (D !== j.lane ? (ie & D) === D : (Pt & D) === D) {
            var A = j.revertLane;
            if (A === 0) m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), D === Sa && (w = true);
            else if ((Pt & A) === A) {
              j = j.next, A === Sa && (w = true);
              continue;
            } else D = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, m === null ? (o = m = D, i = u) : m = m.next = D, ee.lanes |= A, jl |= A;
            D = j.action, Wl && l(u, D), u = j.hasEagerState ? j.eagerState : l(u, D);
          } else A = {
            lane: D,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, m === null ? (o = m = A, i = u) : m = m.next = A, ee.lanes |= D, jl |= D;
          j = j.next;
        } while (j !== null && j !== t);
        if (m === null ? i = u : m.next = o, !bt(u, e.memoizedState) && (Ge = true, w && (l = Na, l !== null))) throw l;
        e.memoizedState = u, e.baseState = i, e.baseQueue = m, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        e.memoizedState,
        a.dispatch
      ];
    }
    function pc(e) {
      var t = Be(), l = t.queue;
      if (l === null) throw Error(f(311));
      l.lastRenderedReducer = e;
      var a = l.dispatch, n = l.pending, u = t.memoizedState;
      if (n !== null) {
        l.pending = null;
        var i = n = n.next;
        do
          u = e(u, i.action), i = i.next;
        while (i !== n);
        bt(u, t.memoizedState) || (Ge = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function pf(e, t, l) {
      var a = ee, n = Be(), u = se;
      if (u) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else l = t();
      var i = !bt((je || n).memoizedState, l);
      if (i && (n.memoizedState = l, Ge = true), n = n.queue, xc(xf.bind(null, a, n, e), [
        e
      ]), n.getSnapshot !== t || i || Le !== null && Le.memoizedState.tag & 1) {
        if (a.flags |= 2048, wa(9, {
          destroy: void 0
        }, vf.bind(null, a, n, l, t), null), Ee === null) throw Error(f(349));
        u || (Pt & 127) !== 0 || _f(a, t, l);
      }
      return l;
    }
    function _f(e, t, l) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: l
      }, t = ee.updateQueue, t === null ? (t = Nu(), ee.updateQueue = t, t.stores = [
        e
      ]) : (l = t.stores, l === null ? t.stores = [
        e
      ] : l.push(e));
    }
    function vf(e, t, l, a) {
      t.value = l, t.getSnapshot = a, Sf(t) && Nf(e);
    }
    function xf(e, t, l) {
      return l(function() {
        Sf(t) && Nf(e);
      });
    }
    function Sf(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !bt(e, l);
      } catch {
        return true;
      }
    }
    function Nf(e) {
      var t = Xl(e, 2);
      t !== null && dt(t, e, 2);
    }
    function _c(e) {
      var t = at();
      if (typeof e == "function") {
        var l = e;
        if (e = l(), Wl) {
          fl(true);
          try {
            l();
          } finally {
            fl(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: e
      }, t;
    }
    function jf(e, t, l, a) {
      return e.baseState = l, bc(e, je, typeof a == "function" ? a : el);
    }
    function a0(e, t, l, a, n) {
      if (Eu(e)) throw Error(f(485));
      if (e = t.action, e !== null) {
        var u = {
          payload: n,
          action: e,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(i) {
            u.listeners.push(i);
          }
        };
        O.T !== null ? l(true) : u.isTransition = false, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Af(t, u)) : (u.next = l.next, t.pending = l.next = u);
      }
    }
    function Af(e, t) {
      var l = t.action, a = t.payload, n = e.state;
      if (t.isTransition) {
        var u = O.T, i = {};
        O.T = i;
        try {
          var o = l(n, a), m = O.S;
          m !== null && m(i, o), zf(e, t, o);
        } catch (j) {
          vc(e, t, j);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), O.T = u;
        }
      } else try {
        u = l(n, a), zf(e, t, u);
      } catch (j) {
        vc(e, t, j);
      }
    }
    function zf(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        Tf(e, t, a);
      }, function(a) {
        return vc(e, t, a);
      }) : Tf(e, t, l);
    }
    function Tf(e, t, l) {
      t.status = "fulfilled", t.value = l, Ef(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Af(e, l)));
    }
    function vc(e, t, l) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = l, Ef(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function Ef(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function wf(e, t) {
      return t;
    }
    function Mf(e, t) {
      if (se) {
        var l = Ee.formState;
        if (l !== null) {
          e: {
            var a = ee;
            if (se) {
              if (Me) {
                t: {
                  for (var n = Me, u = Dt; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break t;
                    }
                    if (n = Rt(n.nextSibling), n === null) {
                      n = null;
                      break t;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  Me = Rt(n.nextSibling), a = n.data === "F!";
                  break e;
                }
              }
              yl(a);
            }
            a = false;
          }
          a && (t = l[0]);
        }
      }
      return l = at(), l.memoizedState = l.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: wf,
        lastRenderedState: t
      }, l.queue = a, l = $f.bind(null, ee, a), a.dispatch = l, a = _c(false), u = zc.bind(null, ee, false, a.queue), a = at(), n = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, a.queue = n, l = a0.bind(null, ee, n, u, l), n.dispatch = l, a.memoizedState = e, [
        t,
        l,
        false
      ];
    }
    function Of(e) {
      var t = Be();
      return Uf(t, je, e);
    }
    function Uf(e, t, l) {
      if (t = bc(e, t, wf)[0], e = Au(el)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = bn(t);
      } catch (i) {
        throw i === ja ? yu : i;
      }
      else a = t;
      t = Be();
      var n = t.queue, u = n.dispatch;
      return l !== t.memoizedState && (ee.flags |= 2048, wa(9, {
        destroy: void 0
      }, n0.bind(null, n, l), null)), [
        a,
        u,
        e
      ];
    }
    function n0(e, t) {
      e.action = t;
    }
    function Df(e) {
      var t = Be(), l = je;
      if (l !== null) return Uf(t, l, e);
      Be(), t = t.memoizedState, l = Be();
      var a = l.queue.dispatch;
      return l.memoizedState = e, [
        t,
        a,
        false
      ];
    }
    function wa(e, t, l, a) {
      return e = {
        tag: e,
        create: l,
        deps: a,
        inst: t,
        next: null
      }, t = ee.updateQueue, t === null && (t = Nu(), ee.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
    }
    function Cf() {
      return Be().memoizedState;
    }
    function zu(e, t, l, a) {
      var n = at();
      ee.flags |= e, n.memoizedState = wa(1 | t, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function Tu(e, t, l, a) {
      var n = Be();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      je !== null && a !== null && oc(a, je.memoizedState.deps) ? n.memoizedState = wa(t, u, l, a) : (ee.flags |= e, n.memoizedState = wa(1 | t, u, l, a));
    }
    function Rf(e, t) {
      zu(8390656, 8, e, t);
    }
    function xc(e, t) {
      Tu(2048, 8, e, t);
    }
    function u0(e) {
      ee.flags |= 4;
      var t = ee.updateQueue;
      if (t === null) t = Nu(), ee.updateQueue = t, t.events = [
        e
      ];
      else {
        var l = t.events;
        l === null ? t.events = [
          e
        ] : l.push(e);
      }
    }
    function Hf(e) {
      var t = Be().memoizedState;
      return u0({
        ref: t,
        nextImpl: e
      }), function() {
        if ((ye & 2) !== 0) throw Error(f(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Bf(e, t) {
      return Tu(4, 2, e, t);
    }
    function qf(e, t) {
      return Tu(4, 4, e, t);
    }
    function Yf(e, t) {
      if (typeof t == "function") {
        e = e();
        var l = t(e);
        return function() {
          typeof l == "function" ? l() : t(null);
        };
      }
      if (t != null) return e = e(), t.current = e, function() {
        t.current = null;
      };
    }
    function Lf(e, t, l) {
      l = l != null ? l.concat([
        e
      ]) : null, Tu(4, 4, Yf.bind(null, t, e), l);
    }
    function Sc() {
    }
    function Gf(e, t) {
      var l = Be();
      t = t === void 0 ? null : t;
      var a = l.memoizedState;
      return t !== null && oc(t, a[1]) ? a[0] : (l.memoizedState = [
        e,
        t
      ], e);
    }
    function Xf(e, t) {
      var l = Be();
      t = t === void 0 ? null : t;
      var a = l.memoizedState;
      if (t !== null && oc(t, a[1])) return a[0];
      if (a = e(), Wl) {
        fl(true);
        try {
          e();
        } finally {
          fl(false);
        }
      }
      return l.memoizedState = [
        a,
        t
      ], a;
    }
    function Nc(e, t, l) {
      return l === void 0 || (Pt & 1073741824) !== 0 && (ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Zo(), ee.lanes |= e, jl |= e, l);
    }
    function Qf(e, t, l, a) {
      return bt(l, t) ? l : za.current !== null ? (e = Nc(e, l, a), bt(e, t) || (Ge = true), e) : (Pt & 42) === 0 || (Pt & 1073741824) !== 0 && (ie & 261930) === 0 ? (Ge = true, e.memoizedState = l) : (e = Zo(), ee.lanes |= e, jl |= e, t);
    }
    function Zf(e, t, l, a, n) {
      var u = B.p;
      B.p = u !== 0 && 8 > u ? u : 8;
      var i = O.T, o = {};
      O.T = o, zc(e, false, t, l);
      try {
        var m = n(), j = O.S;
        if (j !== null && j(o, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var w = e0(m, a);
          pn(e, t, w, Nt(e));
        } else pn(e, t, a, Nt(e));
      } catch (D) {
        pn(e, t, {
          then: function() {
          },
          status: "rejected",
          reason: D
        }, Nt());
      } finally {
        B.p = u, i !== null && o.types !== null && (i.types = o.types), O.T = i;
      }
    }
    function i0() {
    }
    function jc(e, t, l, a) {
      if (e.tag !== 5) throw Error(f(476));
      var n = Vf(e).queue;
      Zf(e, n, t, K, l === null ? i0 : function() {
        return kf(e), l(a);
      });
    }
    function Vf(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: K,
        baseState: K,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: el,
          lastRenderedState: K
        },
        next: null
      };
      var l = {};
      return t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: el,
          lastRenderedState: l
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function kf(e) {
      var t = Vf(e);
      t.next === null && (t = e.alternate.memoizedState), pn(e, t.next.queue, {}, Nt());
    }
    function Ac() {
      return Ie(Rn);
    }
    function Kf() {
      return Be().memoizedState;
    }
    function Jf() {
      return Be().memoizedState;
    }
    function c0(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = Nt();
            e = pl(l);
            var a = _l(t, e, l);
            a !== null && (dt(a, t, l), mn(a, t, l)), t = {
              cache: ec()
            }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function s0(e, t, l) {
      var a = Nt();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Eu(e) ? Ff(t, l) : (l = Qi(e, t, l, a), l !== null && (dt(l, e, a), Wf(l, t, a)));
    }
    function $f(e, t, l) {
      var a = Nt();
      pn(e, t, l, a);
    }
    function pn(e, t, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Eu(e)) Ff(t, n);
      else {
        var u = e.alternate;
        if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
          var i = t.lastRenderedState, o = u(i, l);
          if (n.hasEagerState = true, n.eagerState = o, bt(o, i)) return su(e, t, n, 0), Ee === null && cu(), false;
        } catch {
        }
        if (l = Qi(e, t, n, a), l !== null) return dt(l, e, a), Wf(l, t, a), true;
      }
      return false;
    }
    function zc(e, t, l, a) {
      if (a = {
        lane: 2,
        revertLane: ns(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Eu(e)) {
        if (t) throw Error(f(479));
      } else t = Qi(e, l, a, 2), t !== null && dt(t, e, 2);
    }
    function Eu(e) {
      var t = e.alternate;
      return e === ee || t !== null && t === ee;
    }
    function Ff(e, t) {
      Ta = xu = true;
      var l = e.pending;
      l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function Wf(e, t, l) {
      if ((l & 4194048) !== 0) {
        var a = t.lanes;
        a &= e.pendingLanes, l |= a, t.lanes = l, tr(e, l);
      }
    }
    var _n = {
      readContext: Ie,
      use: ju,
      useCallback: Ce,
      useContext: Ce,
      useEffect: Ce,
      useImperativeHandle: Ce,
      useLayoutEffect: Ce,
      useInsertionEffect: Ce,
      useMemo: Ce,
      useReducer: Ce,
      useRef: Ce,
      useState: Ce,
      useDebugValue: Ce,
      useDeferredValue: Ce,
      useTransition: Ce,
      useSyncExternalStore: Ce,
      useId: Ce,
      useHostTransitionStatus: Ce,
      useFormState: Ce,
      useActionState: Ce,
      useOptimistic: Ce,
      useMemoCache: Ce,
      useCacheRefresh: Ce
    };
    _n.useEffectEvent = Ce;
    var If = {
      readContext: Ie,
      use: ju,
      useCallback: function(e, t) {
        return at().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: Ie,
      useEffect: Rf,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([
          e
        ]) : null, zu(4194308, 4, Yf.bind(null, t, e), l);
      },
      useLayoutEffect: function(e, t) {
        return zu(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        zu(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var l = at();
        t = t === void 0 ? null : t;
        var a = e();
        if (Wl) {
          fl(true);
          try {
            e();
          } finally {
            fl(false);
          }
        }
        return l.memoizedState = [
          a,
          t
        ], a;
      },
      useReducer: function(e, t, l) {
        var a = at();
        if (l !== void 0) {
          var n = l(t);
          if (Wl) {
            fl(true);
            try {
              l(t);
            } finally {
              fl(false);
            }
          }
        } else n = t;
        return a.memoizedState = a.baseState = n, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, a.queue = e, e = e.dispatch = s0.bind(null, ee, e), [
          a.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = at();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: function(e) {
        e = _c(e);
        var t = e.queue, l = $f.bind(null, ee, t);
        return t.dispatch = l, [
          e.memoizedState,
          l
        ];
      },
      useDebugValue: Sc,
      useDeferredValue: function(e, t) {
        var l = at();
        return Nc(l, e, t);
      },
      useTransition: function() {
        var e = _c(false);
        return e = Zf.bind(null, ee, e.queue, true, false), at().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, t, l) {
        var a = ee, n = at();
        if (se) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (l = t(), Ee === null) throw Error(f(349));
          (ie & 127) !== 0 || _f(a, t, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: t
        };
        return n.queue = u, Rf(xf.bind(null, a, u, e), [
          e
        ]), a.flags |= 2048, wa(9, {
          destroy: void 0
        }, vf.bind(null, a, u, l, t), null), l;
      },
      useId: function() {
        var e = at(), t = Ee.identifierPrefix;
        if (se) {
          var l = Xt, a = Gt;
          l = (a & ~(1 << 32 - gt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Su++, 0 < l && (t += "H" + l.toString(32)), t += "_";
        } else l = t0++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t;
      },
      useHostTransitionStatus: Ac,
      useFormState: Mf,
      useActionState: Mf,
      useOptimistic: function(e) {
        var t = at();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = zc.bind(null, ee, true, l), l.dispatch = t, [
          e,
          t
        ];
      },
      useMemoCache: gc,
      useCacheRefresh: function() {
        return at().memoizedState = c0.bind(null, ee);
      },
      useEffectEvent: function(e) {
        var t = at(), l = {
          impl: e
        };
        return t.memoizedState = l, function() {
          if ((ye & 2) !== 0) throw Error(f(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, Tc = {
      readContext: Ie,
      use: ju,
      useCallback: Gf,
      useContext: Ie,
      useEffect: xc,
      useImperativeHandle: Lf,
      useInsertionEffect: Bf,
      useLayoutEffect: qf,
      useMemo: Xf,
      useReducer: Au,
      useRef: Cf,
      useState: function() {
        return Au(el);
      },
      useDebugValue: Sc,
      useDeferredValue: function(e, t) {
        var l = Be();
        return Qf(l, je.memoizedState, e, t);
      },
      useTransition: function() {
        var e = Au(el)[0], t = Be().memoizedState;
        return [
          typeof e == "boolean" ? e : bn(e),
          t
        ];
      },
      useSyncExternalStore: pf,
      useId: Kf,
      useHostTransitionStatus: Ac,
      useFormState: Of,
      useActionState: Of,
      useOptimistic: function(e, t) {
        var l = Be();
        return jf(l, je, e, t);
      },
      useMemoCache: gc,
      useCacheRefresh: Jf
    };
    Tc.useEffectEvent = Hf;
    var Pf = {
      readContext: Ie,
      use: ju,
      useCallback: Gf,
      useContext: Ie,
      useEffect: xc,
      useImperativeHandle: Lf,
      useInsertionEffect: Bf,
      useLayoutEffect: qf,
      useMemo: Xf,
      useReducer: pc,
      useRef: Cf,
      useState: function() {
        return pc(el);
      },
      useDebugValue: Sc,
      useDeferredValue: function(e, t) {
        var l = Be();
        return je === null ? Nc(l, e, t) : Qf(l, je.memoizedState, e, t);
      },
      useTransition: function() {
        var e = pc(el)[0], t = Be().memoizedState;
        return [
          typeof e == "boolean" ? e : bn(e),
          t
        ];
      },
      useSyncExternalStore: pf,
      useId: Kf,
      useHostTransitionStatus: Ac,
      useFormState: Df,
      useActionState: Df,
      useOptimistic: function(e, t) {
        var l = Be();
        return je !== null ? jf(l, je, e, t) : (l.baseState = e, [
          e,
          l.queue.dispatch
        ]);
      },
      useMemoCache: gc,
      useCacheRefresh: Jf
    };
    Pf.useEffectEvent = Hf;
    function Ec(e, t, l, a) {
      t = e.memoizedState, l = l(a, t), l = l == null ? t : C({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var wc = {
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var a = Nt(), n = pl(a);
        n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (dt(t, e, a), mn(t, e, a));
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var a = Nt(), n = pl(a);
        n.tag = 1, n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (dt(t, e, a), mn(t, e, a));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = Nt(), a = pl(l);
        a.tag = 2, t != null && (a.callback = t), t = _l(e, a, l), t !== null && (dt(t, e, l), mn(t, e, l));
      }
    };
    function eo(e, t, l, a, n, u, i) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !nn(l, a) || !nn(n, u) : true;
    }
    function to(e, t, l, a) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && wc.enqueueReplaceState(t, t.state, null);
    }
    function Il(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var a in t) a !== "ref" && (l[a] = t[a]);
      }
      if (e = e.defaultProps) {
        l === t && (l = C({}, l));
        for (var n in e) l[n] === void 0 && (l[n] = e[n]);
      }
      return l;
    }
    function lo(e) {
      iu(e);
    }
    function ao(e) {
      console.error(e);
    }
    function no(e) {
      iu(e);
    }
    function wu(e, t) {
      try {
        var l = e.onUncaughtError;
        l(t.value, {
          componentStack: t.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function uo(e, t, l) {
      try {
        var a = e.onCaughtError;
        a(l.value, {
          componentStack: l.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Mc(e, t, l) {
      return l = pl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        wu(e, t);
      }, l;
    }
    function io(e) {
      return e = pl(e), e.tag = 3, e;
    }
    function co(e, t, l, a) {
      var n = l.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        e.payload = function() {
          return n(u);
        }, e.callback = function() {
          uo(t, l, a);
        };
      }
      var i = l.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
        uo(t, l, a), typeof n != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([
          this
        ]) : Al.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : ""
        });
      });
    }
    function r0(e, t, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = l.alternate, t !== null && xa(t, l, n, true), l = _t.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Ct === null ? Gu() : l.alternate === null && Re === 0 && (Re = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === gu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : t.add(a), ts(e, a, n)), false;
            case 22:
              return l.flags |= 65536, a === gu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), ts(e, a, n)), false;
          }
          throw Error(f(435, l.tag));
        }
        return ts(e, a, n), Gu(), false;
      }
      if (se) return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== $i && (e = Error(f(422), {
        cause: a
      }), sn(Mt(e, l)))) : (a !== $i && (t = Error(f(423), {
        cause: a
      }), sn(Mt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Mt(a, l), n = Mc(e.stateNode, a, n), ic(e, n), Re !== 4 && (Re = 2)), false;
      var u = Error(f(520), {
        cause: a
      });
      if (u = Mt(u, l), Tn === null ? Tn = [
        u
      ] : Tn.push(u), Re !== 4 && (Re = 2), t === null) return true;
      a = Mt(a, l), l = t;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Mc(l.stateNode, a, e), ic(l, e), false;
          case 1:
            if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Al === null || !Al.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = io(n), co(n, e, l, a), ic(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Oc = Error(f(461)), Ge = false;
    function Pe(e, t, l, a) {
      t.child = e === null ? of(t, null, l, a) : Fl(t, e.child, l, a);
    }
    function so(e, t, l, a, n) {
      l = l.render;
      var u = t.ref;
      if ("ref" in a) {
        var i = {};
        for (var o in a) o !== "ref" && (i[o] = a[o]);
      } else i = a;
      return kl(t), a = dc(e, t, l, i, u, n), o = mc(), e !== null && !Ge ? (hc(e, t, n), tl(e, t, n)) : (se && o && Ki(t), t.flags |= 1, Pe(e, t, a, n), t.child);
    }
    function ro(e, t, l, a, n) {
      if (e === null) {
        var u = l.type;
        return typeof u == "function" && !Zi(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, fo(e, t, u, a, n)) : (e = fu(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (u = e.child, !Yc(e, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : nn, l(i, a) && e.ref === t.ref) return tl(e, t, n);
      }
      return t.flags |= 1, e = $t(u, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function fo(e, t, l, a, n) {
      if (e !== null) {
        var u = e.memoizedProps;
        if (nn(u, a) && e.ref === t.ref) if (Ge = false, t.pendingProps = a = u, Yc(e, n)) (e.flags & 131072) !== 0 && (Ge = true);
        else return t.lanes = e.lanes, tl(e, t, n);
      }
      return Uc(e, t, l, a, n);
    }
    function oo(e, t, l, a) {
      var n = a.children, u = e !== null ? e.memoizedState : null;
      if (e === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | l : l, e !== null) {
            for (a = t.child = e.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
            a = n & ~u;
          } else a = 0, t.child = null;
          return mo(e, t, u, l, a);
        }
        if ((l & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && hu(t, u !== null ? u.cachePool : null), u !== null ? hf(t, u) : sc(), yf(t);
        else return a = t.lanes = 536870912, mo(e, t, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (hu(t, u.cachePool), hf(t, u), xl(), t.memoizedState = null) : (e !== null && hu(t, null), sc(), xl());
      return Pe(e, t, n, l), t.child;
    }
    function vn(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function mo(e, t, l, a, n) {
      var u = lc();
      return u = u === null ? null : {
        parent: Ye._currentValue,
        pool: u
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, e !== null && hu(t, null), sc(), yf(t), e !== null && xa(e, t, a, true), t.childLanes = n, null;
    }
    function Mu(e, t) {
      return t = Uu({
        mode: t.mode,
        children: t.children
      }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function ho(e, t, l) {
      return Fl(t, e.child, null, l), e = Mu(t, t.pendingProps), e.flags |= 2, vt(t), t.memoizedState = null, e;
    }
    function f0(e, t, l) {
      var a = t.pendingProps, n = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (se) {
          if (a.mode === "hidden") return e = Mu(t, a), t.lanes = 536870912, vn(null, e);
          if (fc(t), (e = Me) ? (e = zd(e, Dt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ml !== null ? {
              id: Gt,
              overflow: Xt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = $r(e), l.return = t, t.child = l, We = t, Me = null)) : e = null, e === null) throw yl(t);
          return t.lanes = 536870912, null;
        }
        return Mu(t, a);
      }
      var u = e.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (fc(t), n) if (t.flags & 256) t.flags &= -257, t = ho(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
        else if (Ge || xa(e, t, l, false), n = (l & e.childLanes) !== 0, Ge || n) {
          if (a = Ee, a !== null && (i = lr(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Xl(e, i), dt(a, e, i), Oc;
          Gu(), t = ho(e, t, l);
        } else e = u.treeContext, Me = Rt(i.nextSibling), We = t, se = true, hl = null, Dt = false, e !== null && Ir(t, e), t = Mu(t, a), t.flags |= 4096;
        return t;
      }
      return e = $t(e.child, {
        mode: a.mode,
        children: a.children
      }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Ou(e, t) {
      var l = t.ref;
      if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(f(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
      }
    }
    function Uc(e, t, l, a, n) {
      return kl(t), l = dc(e, t, l, a, void 0, n), a = mc(), e !== null && !Ge ? (hc(e, t, n), tl(e, t, n)) : (se && a && Ki(t), t.flags |= 1, Pe(e, t, l, n), t.child);
    }
    function yo(e, t, l, a, n, u) {
      return kl(t), t.updateQueue = null, l = bf(t, a, l, n), gf(e), a = mc(), e !== null && !Ge ? (hc(e, t, u), tl(e, t, u)) : (se && a && Ki(t), t.flags |= 1, Pe(e, t, l, u), t.child);
    }
    function go(e, t, l, a, n) {
      if (kl(t), t.stateNode === null) {
        var u = ba, i = l.contextType;
        typeof i == "object" && i !== null && (u = Ie(i)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, nc(t), i = l.contextType, u.context = typeof i == "object" && i !== null ? Ie(i) : ba, u.state = t.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Ec(t, l, i, a), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && wc.enqueueReplaceState(u, u.state, null), yn(t, a, u, n), hn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (e === null) {
        u = t.stateNode;
        var o = t.memoizedProps, m = Il(l, o);
        u.props = m;
        var j = u.context, w = l.contextType;
        i = ba, typeof w == "object" && w !== null && (i = Ie(w));
        var D = l.getDerivedStateFromProps;
        w = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, w || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || j !== i) && to(t, u, a, i), bl = false;
        var A = t.memoizedState;
        u.state = A, yn(t, a, u, n), hn(), j = t.memoizedState, o || A !== j || bl ? (typeof D == "function" && (Ec(t, l, D, a), j = t.memoizedState), (m = bl || eo(t, l, m, a, A, j, i)) ? (w || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = j), u.props = a, u.state = j, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        u = t.stateNode, uc(e, t), i = t.memoizedProps, w = Il(l, i), u.props = w, D = t.pendingProps, A = u.context, j = l.contextType, m = ba, typeof j == "object" && j !== null && (m = Ie(j)), o = l.getDerivedStateFromProps, (j = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== D || A !== m) && to(t, u, a, m), bl = false, A = t.memoizedState, u.state = A, yn(t, a, u, n), hn();
        var z = t.memoizedState;
        i !== D || A !== z || bl || e !== null && e.dependencies !== null && du(e.dependencies) ? (typeof o == "function" && (Ec(t, l, o, a), z = t.memoizedState), (w = bl || eo(t, l, w, a, A, z, m) || e !== null && e.dependencies !== null && du(e.dependencies)) ? (j || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, m)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = m, a = w) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), a = false);
      }
      return u = a, Ou(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Fl(t, e.child, null, n), t.child = Fl(t, null, l, n)) : Pe(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = tl(e, t, n), e;
    }
    function bo(e, t, l, a) {
      return Zl(), t.flags |= 256, Pe(e, t, l, a), t.child;
    }
    var Dc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Cc(e) {
      return {
        baseLanes: e,
        cachePool: nf()
      };
    }
    function Rc(e, t, l) {
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= St), e;
    }
    function po(e, t, l) {
      var a = t.pendingProps, n = false, u = (t.flags & 128) !== 0, i;
      if ((i = u) || (i = e !== null && e.memoizedState === null ? false : (He.current & 2) !== 0), i && (n = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (se) {
          if (n ? vl(t) : xl(), (e = Me) ? (e = zd(e, Dt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ml !== null ? {
              id: Gt,
              overflow: Xt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = $r(e), l.return = t, t.child = l, We = t, Me = null)) : e = null, e === null) throw yl(t);
          return bs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var o = a.children;
        return a = a.fallback, n ? (xl(), n = t.mode, o = Uu({
          mode: "hidden",
          children: o
        }, n), a = Ql(a, n, l, null), o.return = t, a.return = t, o.sibling = a, t.child = o, a = t.child, a.memoizedState = Cc(l), a.childLanes = Rc(e, i, l), t.memoizedState = Dc, vn(null, a)) : (vl(t), Hc(t, o));
      }
      var m = e.memoizedState;
      if (m !== null && (o = m.dehydrated, o !== null)) {
        if (u) t.flags & 256 ? (vl(t), t.flags &= -257, t = Bc(e, t, l)) : t.memoizedState !== null ? (xl(), t.child = e.child, t.flags |= 128, t = null) : (xl(), o = a.fallback, n = t.mode, a = Uu({
          mode: "visible",
          children: a.children
        }, n), o = Ql(o, n, l, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, Fl(t, e.child, null, l), a = t.child, a.memoizedState = Cc(l), a.childLanes = Rc(e, i, l), t.memoizedState = Dc, t = vn(null, a));
        else if (vl(t), bs(o)) {
          if (i = o.nextSibling && o.nextSibling.dataset, i) var j = i.dgst;
          i = j, a = Error(f(419)), a.stack = "", a.digest = i, sn({
            value: a,
            source: null,
            stack: null
          }), t = Bc(e, t, l);
        } else if (Ge || xa(e, t, l, false), i = (l & e.childLanes) !== 0, Ge || i) {
          if (i = Ee, i !== null && (a = lr(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Xl(e, a), dt(i, e, a), Oc;
          gs(o) || Gu(), t = Bc(e, t, l);
        } else gs(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, Me = Rt(o.nextSibling), We = t, se = true, hl = null, Dt = false, e !== null && Ir(t, e), t = Hc(t, a.children), t.flags |= 4096);
        return t;
      }
      return n ? (xl(), o = a.fallback, n = t.mode, m = e.child, j = m.sibling, a = $t(m, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = m.subtreeFlags & 65011712, j !== null ? o = $t(j, o) : (o = Ql(o, n, l, null), o.flags |= 2), o.return = t, a.return = t, a.sibling = o, t.child = a, vn(null, a), a = t.child, o = e.child.memoizedState, o === null ? o = Cc(l) : (n = o.cachePool, n !== null ? (m = Ye._currentValue, n = n.parent !== m ? {
        parent: m,
        pool: m
      } : n) : n = nf(), o = {
        baseLanes: o.baseLanes | l,
        cachePool: n
      }), a.memoizedState = o, a.childLanes = Rc(e, i, l), t.memoizedState = Dc, vn(e.child, a)) : (vl(t), l = e.child, e = l.sibling, l = $t(l, {
        mode: "visible",
        children: a.children
      }), l.return = t, l.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [
        e
      ], t.flags |= 16) : i.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function Hc(e, t) {
      return t = Uu({
        mode: "visible",
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function Uu(e, t) {
      return e = pt(22, e, null, t), e.lanes = 0, e;
    }
    function Bc(e, t, l) {
      return Fl(t, e.child, null, l), e = Hc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function _o(e, t, l) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), Ii(e.return, t, l);
    }
    function qc(e, t, l, a, n, u) {
      var i = e.memoizedState;
      i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u
      } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
    }
    function vo(e, t, l) {
      var a = t.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = He.current, o = (i & 2) !== 0;
      if (o ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, R(He, i), Pe(e, t, a, l), a = se ? cn : 0, !o && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && _o(e, l, t);
        else if (e.tag === 19) _o(e, l, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      switch (n) {
        case "forwards":
          for (l = t.child, n = null; l !== null; ) e = l.alternate, e !== null && vu(e) === null && (n = l), l = l.sibling;
          l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), qc(t, false, n, l, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, n = t.child, t.child = null; n !== null; ) {
            if (e = n.alternate, e !== null && vu(e) === null) {
              t.child = n;
              break;
            }
            e = n.sibling, n.sibling = l, l = n, n = e;
          }
          qc(t, true, l, null, u, a);
          break;
        case "together":
          qc(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function tl(e, t, l) {
      if (e !== null && (t.dependencies = e.dependencies), jl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
        if (xa(e, t, l, false), (l & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error(f(153));
      if (t.child !== null) {
        for (e = t.child, l = $t(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = $t(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function Yc(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && du(e)));
    }
    function o0(e, t, l) {
      switch (t.tag) {
        case 3:
          Te(t, t.stateNode.containerInfo), gl(t, Ye, e.memoizedState.cache), Zl();
          break;
        case 27:
        case 5:
          Rl(t);
          break;
        case 4:
          Te(t, t.stateNode.containerInfo);
          break;
        case 10:
          gl(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, fc(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (vl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? po(e, t, l) : (vl(t), e = tl(e, t, l), e !== null ? e.sibling : null);
          vl(t);
          break;
        case 19:
          var n = (e.flags & 128) !== 0;
          if (a = (l & t.childLanes) !== 0, a || (xa(e, t, l, false), a = (l & t.childLanes) !== 0), n) {
            if (a) return vo(e, t, l);
            t.flags |= 128;
          }
          if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(He, He.current), a) break;
          return null;
        case 22:
          return t.lanes = 0, oo(e, t, l, t.pendingProps);
        case 24:
          gl(t, Ye, e.memoizedState.cache);
      }
      return tl(e, t, l);
    }
    function xo(e, t, l) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps) Ge = true;
      else {
        if (!Yc(e, l) && (t.flags & 128) === 0) return Ge = false, o0(e, t, l);
        Ge = (e.flags & 131072) !== 0;
      }
      else Ge = false, se && (t.flags & 1048576) !== 0 && Wr(t, cn, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var a = t.pendingProps;
            if (e = Jl(t.elementType), t.type = e, typeof e == "function") Zi(e) ? (a = Il(e, a), t.tag = 1, t = go(null, t, e, a, l)) : (t.tag = 0, t = Uc(null, t, e, a, l));
            else {
              if (e != null) {
                var n = e.$$typeof;
                if (n === fe) {
                  t.tag = 11, t = so(null, t, e, a, l);
                  break e;
                } else if (n === I) {
                  t.tag = 14, t = ro(null, t, e, a, l);
                  break e;
                }
              }
              throw t = ut(e) || e, Error(f(306, t, ""));
            }
          }
          return t;
        case 0:
          return Uc(e, t, t.type, t.pendingProps, l);
        case 1:
          return a = t.type, n = Il(a, t.pendingProps), go(e, t, a, n, l);
        case 3:
          e: {
            if (Te(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
            a = t.pendingProps;
            var u = t.memoizedState;
            n = u.element, uc(e, t), yn(t, a, null, l);
            var i = t.memoizedState;
            if (a = i.cache, gl(t, Ye, a), a !== u.cache && Pi(t, [
              Ye
            ], l, true), hn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = bo(e, t, a, l);
              break e;
            } else if (a !== n) {
              n = Mt(Error(f(424)), t), sn(n), t = bo(e, t, a, l);
              break e;
            } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Me = Rt(e.firstChild), We = t, se = true, hl = null, Dt = true, l = of(t, null, a, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Zl(), a === n) {
                t = tl(e, t, l);
                break e;
              }
              Pe(e, t, a, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return Ou(e, t), e === null ? (l = Ud(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : se || (l = t.type, e = t.pendingProps, a = Ju(ae.current).createElement(l), a[Fe] = t, a[it] = e, et(a, l, e), Ve(a), t.stateNode = a) : t.memoizedState = Ud(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return Rl(t), e === null && se && (a = t.stateNode = wd(t.type, t.pendingProps, ae.current), We = t, Dt = true, n = Me, wl(t.type) ? (ps = n, Me = Rt(a.firstChild)) : Me = n), Pe(e, t, t.pendingProps.children, l), Ou(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && se && ((n = a = Me) && (a = G0(a, t.type, t.pendingProps, Dt), a !== null ? (t.stateNode = a, We = t, Me = Rt(a.firstChild), Dt = false, n = true) : n = false), n || yl(t)), Rl(t), n = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = u.children, ms(n, u) ? a = null : i !== null && ms(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = dc(e, t, l0, null, null, l), Rn._currentValue = n), Ou(e, t), Pe(e, t, a, l), t.child;
        case 6:
          return e === null && se && ((e = l = Me) && (l = X0(l, t.pendingProps, Dt), l !== null ? (t.stateNode = l, We = t, Me = null, e = true) : e = false), e || yl(t)), null;
        case 13:
          return po(e, t, l);
        case 4:
          return Te(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Fl(t, null, a, l) : Pe(e, t, a, l), t.child;
        case 11:
          return so(e, t, t.type, t.pendingProps, l);
        case 7:
          return Pe(e, t, t.pendingProps, l), t.child;
        case 8:
          return Pe(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return Pe(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return a = t.pendingProps, gl(t, t.type, a.value), Pe(e, t, a.children, l), t.child;
        case 9:
          return n = t.type._context, a = t.pendingProps.children, kl(t), n = Ie(n), a = a(n), t.flags |= 1, Pe(e, t, a, l), t.child;
        case 14:
          return ro(e, t, t.type, t.pendingProps, l);
        case 15:
          return fo(e, t, t.type, t.pendingProps, l);
        case 19:
          return vo(e, t, l);
        case 31:
          return f0(e, t, l);
        case 22:
          return oo(e, t, l, t.pendingProps);
        case 24:
          return kl(t), a = Ie(Ye), e === null ? (n = lc(), n === null && (n = Ee, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = {
            parent: a,
            cache: n
          }, nc(t), gl(t, Ye, n)) : ((e.lanes & l) !== 0 && (uc(e, t), yn(t, null, null, l), hn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), gl(t, Ye, a)) : (a = u.cache, gl(t, Ye, a), a !== n.cache && Pi(t, [
            Ye
          ], l, true))), Pe(e, t, t.pendingProps.children, l), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(f(156, t.tag));
    }
    function ll(e) {
      e.flags |= 4;
    }
    function Lc(e, t, l, a, n) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
        else if (Jo()) e.flags |= 8192;
        else throw $l = gu, ac;
      } else e.flags &= -16777217;
    }
    function So(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !Bd(t)) if (Jo()) e.flags |= 8192;
      else throw $l = gu, ac;
    }
    function Du(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ps() : 536870912, e.lanes |= t, Da |= t);
    }
    function xn(e, t) {
      if (!se) switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; ) t.alternate !== null && (l = t), t = t.sibling;
          l === null ? e.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
      }
    }
    function Oe(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
      if (t) for (var n = e.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
      else for (n = e.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
      return e.subtreeFlags |= a, e.childLanes = l, t;
    }
    function d0(e, t, l) {
      var a = t.pendingProps;
      switch (Ji(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Oe(t), null;
        case 1:
          return Oe(t), null;
        case 3:
          return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), It(Ye), we(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (va(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fi())), Oe(t), null;
        case 26:
          var n = t.type, u = t.memoizedState;
          return e === null ? (ll(t), u !== null ? (Oe(t), So(t, u)) : (Oe(t), Lc(t, n, null, a, l))) : u ? u !== e.memoizedState ? (ll(t), Oe(t), So(t, u)) : (Oe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && ll(t), Oe(t), Lc(t, n, e, a, l)), null;
        case 27:
          if (aa(t), l = ae.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && ll(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(f(166));
              return Oe(t), null;
            }
            e = q.current, va(t) ? Pr(t) : (e = wd(n, a, l), t.stateNode = e, ll(t));
          }
          return Oe(t), null;
        case 5:
          if (aa(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && ll(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(f(166));
              return Oe(t), null;
            }
            if (u = q.current, va(t)) Pr(t);
            else {
              var i = Ju(ae.current);
              switch (u) {
                case 1:
                  u = i.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case 2:
                  u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                  break;
                default:
                  switch (n) {
                    case "svg":
                      u = i.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case "math":
                      u = i.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                      break;
                    case "script":
                      u = i.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                      break;
                    case "select":
                      u = typeof a.is == "string" ? i.createElement("select", {
                        is: a.is
                      }) : i.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                      break;
                    default:
                      u = typeof a.is == "string" ? i.createElement(n, {
                        is: a.is
                      }) : i.createElement(n);
                  }
              }
              u[Fe] = t, u[it] = a;
              e: for (i = t.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  i.child.return = i, i = i.child;
                  continue;
                }
                if (i === t) break e;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === t) break e;
                  i = i.return;
                }
                i.sibling.return = i.return, i = i.sibling;
              }
              t.stateNode = u;
              e: switch (et(u, n, a), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break e;
                case "img":
                  a = true;
                  break e;
                default:
                  a = false;
              }
              a && ll(t);
            }
          }
          return Oe(t), Lc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== a && ll(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
            if (e = ae.current, va(t)) {
              if (e = t.stateNode, l = t.memoizedProps, a = null, n = We, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              e[Fe] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === true || pd(e.nodeValue, l)), e || yl(t, true);
            } else e = Ju(e).createTextNode(a), e[Fe] = t, t.stateNode = e;
          }
          return Oe(t), null;
        case 31:
          if (l = t.memoizedState, e === null || e.memoizedState !== null) {
            if (a = va(t), l !== null) {
              if (e === null) {
                if (!a) throw Error(f(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
                e[Fe] = t;
              } else Zl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Oe(t), e = false;
            } else l = Fi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
            if (!e) return t.flags & 256 ? (vt(t), t) : (vt(t), null);
            if ((t.flags & 128) !== 0) throw Error(f(558));
          }
          return Oe(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (n = va(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!n) throw Error(f(318));
                if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
                n[Fe] = t;
              } else Zl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Oe(t), n = false;
            } else n = Fi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = true;
            if (!n) return t.flags & 256 ? (vt(t), t) : (vt(t), null);
          }
          return vt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Du(t, t.updateQueue), Oe(t), null);
        case 4:
          return we(), e === null && ss(t.stateNode.containerInfo), Oe(t), null;
        case 10:
          return It(t.type), Oe(t), null;
        case 19:
          if (T(He), a = t.memoizedState, a === null) return Oe(t), null;
          if (n = (t.flags & 128) !== 0, u = a.rendering, u === null) if (n) xn(a, false);
          else {
            if (Re !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (u = vu(e), u !== null) {
                for (t.flags |= 128, xn(a, false), e = u.updateQueue, t.updateQueue = e, Du(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) Jr(l, e), l = l.sibling;
                return R(He, He.current & 1 | 2), se && Ft(t, a.treeForkCount), t.child;
              }
              e = e.sibling;
            }
            a.tail !== null && ht() > qu && (t.flags |= 128, n = true, xn(a, false), t.lanes = 4194304);
          }
          else {
            if (!n) if (e = vu(u), e !== null) {
              if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, Du(t, e), xn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !se) return Oe(t), null;
            } else 2 * ht() - a.renderingStartTime > qu && l !== 536870912 && (t.flags |= 128, n = true, xn(a, false), t.lanes = 4194304);
            a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = ht(), e.sibling = null, l = He.current, R(He, n ? l & 1 | 2 : l & 1), se && Ft(t, a.treeForkCount), e) : (Oe(t), null);
        case 22:
        case 23:
          return vt(t), rc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Oe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Oe(t), l = t.updateQueue, l !== null && Du(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && T(Kl), null;
        case 24:
          return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), It(Ye), Oe(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(f(156, t.tag));
    }
    function m0(e, t) {
      switch (Ji(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return It(Ye), we(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return aa(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (vt(t), t.alternate === null) throw Error(f(340));
            Zl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (vt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(f(340));
            Zl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return T(He), null;
        case 4:
          return we(), null;
        case 10:
          return It(t.type), null;
        case 22:
        case 23:
          return vt(t), rc(), e !== null && T(Kl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return It(Ye), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function No(e, t) {
      switch (Ji(t), t.tag) {
        case 3:
          It(Ye), we();
          break;
        case 26:
        case 27:
        case 5:
          aa(t);
          break;
        case 4:
          we();
          break;
        case 31:
          t.memoizedState !== null && vt(t);
          break;
        case 13:
          vt(t);
          break;
        case 19:
          T(He);
          break;
        case 10:
          It(t.type);
          break;
        case 22:
        case 23:
          vt(t), rc(), e !== null && T(Kl);
          break;
        case 24:
          It(Ye);
      }
    }
    function Sn(e, t) {
      try {
        var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
        if (a !== null) {
          var n = a.next;
          l = n;
          do {
            if ((l.tag & e) === e) {
              a = void 0;
              var u = l.create, i = l.inst;
              a = u(), i.destroy = a;
            }
            l = l.next;
          } while (l !== n);
        }
      } catch (o) {
        Se(t, t.return, o);
      }
    }
    function Sl(e, t, l) {
      try {
        var a = t.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & e) === e) {
              var i = a.inst, o = i.destroy;
              if (o !== void 0) {
                i.destroy = void 0, n = t;
                var m = l, j = o;
                try {
                  j();
                } catch (w) {
                  Se(n, m, w);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (w) {
        Se(t, t.return, w);
      }
    }
    function jo(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        try {
          mf(t, l);
        } catch (a) {
          Se(e, e.return, a);
        }
      }
    }
    function Ao(e, t, l) {
      l.props = Il(e.type, e.memoizedProps), l.state = e.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        Se(e, t, a);
      }
    }
    function Nn(e, t) {
      try {
        var l = e.ref;
        if (l !== null) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              var a = e.stateNode;
              break;
            case 30:
              a = e.stateNode;
              break;
            default:
              a = e.stateNode;
          }
          typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
        }
      } catch (n) {
        Se(e, t, n);
      }
    }
    function Qt(e, t) {
      var l = e.ref, a = e.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        Se(e, t, n);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        Se(e, t, n);
      }
      else l.current = null;
    }
    function zo(e) {
      var t = e.type, l = e.memoizedProps, a = e.stateNode;
      try {
        e: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && a.focus();
            break e;
          case "img":
            l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
        }
      } catch (n) {
        Se(e, e.return, n);
      }
    }
    function Gc(e, t, l) {
      try {
        var a = e.stateNode;
        R0(a, e.type, l, t), a[it] = t;
      } catch (n) {
        Se(e, e.return, n);
      }
    }
    function To(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && wl(e.type) || e.tag === 4;
    }
    function Xc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || To(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && wl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, l) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Kt));
      else if (a !== 4 && (a === 27 && wl(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (Qc(e, t, l), e = e.sibling; e !== null; ) Qc(e, t, l), e = e.sibling;
    }
    function Cu(e, t, l) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (a !== 4 && (a === 27 && wl(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (Cu(e, t, l), e = e.sibling; e !== null; ) Cu(e, t, l), e = e.sibling;
    }
    function Eo(e) {
      var t = e.stateNode, l = e.memoizedProps;
      try {
        for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
        et(t, a, l), t[Fe] = e, t[it] = l;
      } catch (u) {
        Se(e, e.return, u);
      }
    }
    var al = false, Xe = false, Zc = false, wo = typeof WeakSet == "function" ? WeakSet : Set, ke = null;
    function h0(e, t) {
      if (e = e.containerInfo, os = ti, e = Yr(e), Bi(e)) {
        if ("selectionStart" in e) var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
        else e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break e;
            }
            var i = 0, o = -1, m = -1, j = 0, w = 0, D = e, A = null;
            t: for (; ; ) {
              for (var z; D !== l || n !== 0 && D.nodeType !== 3 || (o = i + n), D !== u || a !== 0 && D.nodeType !== 3 || (m = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (z = D.firstChild) !== null; ) A = D, D = z;
              for (; ; ) {
                if (D === e) break t;
                if (A === l && ++j === n && (o = i), A === u && ++w === a && (m = i), (z = D.nextSibling) !== null) break;
                D = A, A = D.parentNode;
              }
              D = z;
            }
            l = o === -1 || m === -1 ? null : {
              start: o,
              end: m
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (ds = {
        focusedElem: e,
        selectionRange: l
      }, ti = false, ke = t; ke !== null; ) if (t = ke, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, ke = e;
      else for (; ke !== null; ) {
        switch (t = ke, u = t.alternate, e = t.flags, t.tag) {
          case 0:
            if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for (l = 0; l < e.length; l++) n = e[l], n.ref.impl = n.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((e & 1024) !== 0 && u !== null) {
              e = void 0, l = t, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
              try {
                var Y = Il(l.type, n);
                e = a.getSnapshotBeforeUpdate(Y, u), a.__reactInternalSnapshotBeforeUpdate = e;
              } catch (k) {
                Se(l, l.return, k);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) ys(e);
              else if (l === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ys(e);
                  break;
                default:
                  e.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((e & 1024) !== 0) throw Error(f(163));
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, ke = e;
          break;
        }
        ke = t.return;
      }
    }
    function Mo(e, t, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ul(e, l), a & 4 && Sn(5, l);
          break;
        case 1:
          if (ul(e, l), a & 4) if (e = l.stateNode, t === null) try {
            e.componentDidMount();
          } catch (i) {
            Se(l, l.return, i);
          }
          else {
            var n = Il(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              Se(l, l.return, i);
            }
          }
          a & 64 && jo(l), a & 512 && Nn(l, l.return);
          break;
        case 3:
          if (ul(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
            if (t = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
            try {
              mf(e, t);
            } catch (i) {
              Se(l, l.return, i);
            }
          }
          break;
        case 27:
          t === null && a & 4 && Eo(l);
        case 26:
        case 5:
          ul(e, l), t === null && a & 4 && zo(l), a & 512 && Nn(l, l.return);
          break;
        case 12:
          ul(e, l);
          break;
        case 31:
          ul(e, l), a & 4 && Do(e, l);
          break;
        case 13:
          ul(e, l), a & 4 && Co(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = N0.bind(null, l), Q0(e, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || al, !a) {
            t = t !== null && t.memoizedState !== null || Xe, n = al;
            var u = Xe;
            al = a, (Xe = t) && !u ? il(e, l, (l.subtreeFlags & 8772) !== 0) : ul(e, l), al = n, Xe = u;
          }
          break;
        case 30:
          break;
        default:
          ul(e, l);
      }
    }
    function Oo(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, Oo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && vi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Ue = null, st = false;
    function nl(e, t, l) {
      for (l = l.child; l !== null; ) Uo(e, t, l), l = l.sibling;
    }
    function Uo(e, t, l) {
      if (yt && typeof yt.onCommitFiberUnmount == "function") try {
        yt.onCommitFiberUnmount(ka, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Xe || Qt(l, t), nl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Xe || Qt(l, t);
          var a = Ue, n = st;
          wl(l.type) && (Ue = l.stateNode, st = false), nl(e, t, l), Un(l.stateNode), Ue = a, st = n;
          break;
        case 5:
          Xe || Qt(l, t);
        case 6:
          if (a = Ue, n = st, Ue = null, nl(e, t, l), Ue = a, st = n, Ue !== null) if (st) try {
            (Ue.nodeType === 9 ? Ue.body : Ue.nodeName === "HTML" ? Ue.ownerDocument.body : Ue).removeChild(l.stateNode);
          } catch (u) {
            Se(l, t, u);
          }
          else try {
            Ue.removeChild(l.stateNode);
          } catch (u) {
            Se(l, t, u);
          }
          break;
        case 18:
          Ue !== null && (st ? (e = Ue, jd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ga(e)) : jd(Ue, l.stateNode));
          break;
        case 4:
          a = Ue, n = st, Ue = l.stateNode.containerInfo, st = true, nl(e, t, l), Ue = a, st = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(2, l, t), Xe || Sl(4, l, t), nl(e, t, l);
          break;
        case 1:
          Xe || (Qt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ao(l, t, a)), nl(e, t, l);
          break;
        case 21:
          nl(e, t, l);
          break;
        case 22:
          Xe = (a = Xe) || l.memoizedState !== null, nl(e, t, l), Xe = a;
          break;
        default:
          nl(e, t, l);
      }
    }
    function Do(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          Ga(e);
        } catch (l) {
          Se(t, t.return, l);
        }
      }
    }
    function Co(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        Ga(e);
      } catch (l) {
        Se(t, t.return, l);
      }
    }
    function y0(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new wo()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new wo()), t;
        default:
          throw Error(f(435, e.tag));
      }
    }
    function Ru(e, t) {
      var l = y0(e);
      t.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = j0.bind(null, e, a);
          a.then(n, n);
        }
      });
    }
    function rt(e, t) {
      var l = t.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, i = t, o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (wl(o.type)) {
                Ue = o.stateNode, st = false;
                break e;
              }
              break;
            case 5:
              Ue = o.stateNode, st = false;
              break e;
            case 3:
            case 4:
              Ue = o.stateNode.containerInfo, st = true;
              break e;
          }
          o = o.return;
        }
        if (Ue === null) throw Error(f(160));
        Uo(u, i, n), Ue = null, st = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Ro(t, e), t = t.sibling;
    }
    var Yt = null;
    function Ro(e, t) {
      var l = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          rt(t, e), ft(e), a & 4 && (Sl(3, e, e.return), Sn(3, e), Sl(5, e, e.return));
          break;
        case 1:
          rt(t, e), ft(e), a & 512 && (Xe || l === null || Qt(l, l.return)), a & 64 && al && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Yt;
          if (rt(t, e), ft(e), a & 512 && (Xe || l === null || Qt(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = e.memoizedState, l === null) if (a === null) if (e.stateNode === null) {
              e: {
                a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                t: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[$a] || u[Fe] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), et(u, a, l), u[Fe] = e, Ve(u), a = u;
                    break e;
                  case "link":
                    var i = Rd("link", "href", n).get(a + (l.href || ""));
                    if (i) {
                      for (var o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(o, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), et(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Rd("meta", "content", n).get(a + (l.content || ""))) {
                      for (o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(o, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), et(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(f(468, a));
                }
                u[Fe] = e, Ve(u), a = u;
              }
              e.stateNode = a;
            } else Hd(n, e.type, e.stateNode);
            else e.stateNode = Cd(n, a, e.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Hd(n, e.type, e.stateNode) : Cd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Gc(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          rt(t, e), ft(e), a & 512 && (Xe || l === null || Qt(l, l.return)), l !== null && a & 4 && Gc(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (rt(t, e), ft(e), a & 512 && (Xe || l === null || Qt(l, l.return)), e.flags & 32) {
            n = e.stateNode;
            try {
              fa(n, "");
            } catch (Y) {
              Se(e, e.return, Y);
            }
          }
          a & 4 && e.stateNode != null && (n = e.memoizedProps, Gc(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Zc = true);
          break;
        case 6:
          if (rt(t, e), ft(e), a & 4) {
            if (e.stateNode === null) throw Error(f(162));
            a = e.memoizedProps, l = e.stateNode;
            try {
              l.nodeValue = a;
            } catch (Y) {
              Se(e, e.return, Y);
            }
          }
          break;
        case 3:
          if (Wu = null, n = Yt, Yt = $u(t.containerInfo), rt(t, e), Yt = n, ft(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Ga(t.containerInfo);
          } catch (Y) {
            Se(e, e.return, Y);
          }
          Zc && (Zc = false, Ho(e));
          break;
        case 4:
          a = Yt, Yt = $u(e.stateNode.containerInfo), rt(t, e), ft(e), Yt = a;
          break;
        case 12:
          rt(t, e), ft(e);
          break;
        case 31:
          rt(t, e), ft(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
          break;
        case 13:
          rt(t, e), ft(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Bu = ht()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
          break;
        case 22:
          n = e.memoizedState !== null;
          var m = l !== null && l.memoizedState !== null, j = al, w = Xe;
          if (al = j || n, Xe = w || m, rt(t, e), Xe = w, al = j, ft(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || m || al || Xe || Pl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (u = m.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    o = m.stateNode;
                    var D = m.memoizedProps.style, A = D != null && D.hasOwnProperty("display") ? D.display : null;
                    o.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (Y) {
                  Se(m, m.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (Y) {
                  Se(m, m.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                m = t;
                try {
                  var z = m.stateNode;
                  n ? Ad(z, true) : Ad(m.stateNode, false);
                } catch (Y) {
                  Se(m, m.return, Y);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), t = t.return;
            }
            l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
          }
          a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Ru(e, l))));
          break;
        case 19:
          rt(t, e), ft(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          rt(t, e), ft(e);
      }
    }
    function ft(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, a = e.return; a !== null; ) {
            if (To(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(f(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Xc(e);
              Cu(e, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (fa(i, ""), l.flags &= -33);
              var o = Xc(e);
              Cu(e, o, i);
              break;
            case 3:
            case 4:
              var m = l.stateNode.containerInfo, j = Xc(e);
              Qc(e, j, m);
              break;
            default:
              throw Error(f(161));
          }
        } catch (w) {
          Se(e, e.return, w);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Ho(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var t = e;
        Ho(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
    }
    function ul(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Mo(e, t.alternate, t), t = t.sibling;
    }
    function Pl(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Sl(4, t, t.return), Pl(t);
            break;
          case 1:
            Qt(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && Ao(t, t.return, l), Pl(t);
            break;
          case 27:
            Un(t.stateNode);
          case 26:
          case 5:
            Qt(t, t.return), Pl(t);
            break;
          case 22:
            t.memoizedState === null && Pl(t);
            break;
          case 30:
            Pl(t);
            break;
          default:
            Pl(t);
        }
        e = e.sibling;
      }
    }
    function il(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate, n = e, u = t, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            il(n, u, l), Sn(4, u);
            break;
          case 1:
            if (il(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (j) {
              Se(a, a.return, j);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var o = a.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) df(m[n], o);
              } catch (j) {
                Se(a, a.return, j);
              }
            }
            l && i & 64 && jo(u), Nn(u, u.return);
            break;
          case 27:
            Eo(u);
          case 26:
          case 5:
            il(n, u, l), l && a === null && i & 4 && zo(u), Nn(u, u.return);
            break;
          case 12:
            il(n, u, l);
            break;
          case 31:
            il(n, u, l), l && i & 4 && Do(n, u);
            break;
          case 13:
            il(n, u, l), l && i & 4 && Co(n, u);
            break;
          case 22:
            u.memoizedState === null && il(n, u, l), Nn(u, u.return);
            break;
          case 30:
            break;
          default:
            il(n, u, l);
        }
        t = t.sibling;
      }
    }
    function Vc(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && rn(l));
    }
    function kc(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && rn(e));
    }
    function Lt(e, t, l, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Bo(e, t, l, a), t = t.sibling;
    }
    function Bo(e, t, l, a) {
      var n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Lt(e, t, l, a), n & 2048 && Sn(9, t);
          break;
        case 1:
          Lt(e, t, l, a);
          break;
        case 3:
          Lt(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && rn(e)));
          break;
        case 12:
          if (n & 2048) {
            Lt(e, t, l, a), e = t.stateNode;
            try {
              var u = t.memoizedProps, i = u.id, o = u.onPostCommit;
              typeof o == "function" && o(i, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (m) {
              Se(t, t.return, m);
            }
          } else Lt(e, t, l, a);
          break;
        case 31:
          Lt(e, t, l, a);
          break;
        case 13:
          Lt(e, t, l, a);
          break;
        case 23:
          break;
        case 22:
          u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Lt(e, t, l, a) : jn(e, t) : u._visibility & 2 ? Lt(e, t, l, a) : (u._visibility |= 2, Ma(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Vc(i, t);
          break;
        case 24:
          Lt(e, t, l, a), n & 2048 && kc(t.alternate, t);
          break;
        default:
          Lt(e, t, l, a);
      }
    }
    function Ma(e, t, l, a, n) {
      for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var u = e, i = t, o = l, m = a, j = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ma(u, i, o, m, n), Sn(8, i);
            break;
          case 23:
            break;
          case 22:
            var w = i.stateNode;
            i.memoizedState !== null ? w._visibility & 2 ? Ma(u, i, o, m, n) : jn(u, i) : (w._visibility |= 2, Ma(u, i, o, m, n)), n && j & 2048 && Vc(i.alternate, i);
            break;
          case 24:
            Ma(u, i, o, m, n), n && j & 2048 && kc(i.alternate, i);
            break;
          default:
            Ma(u, i, o, m, n);
        }
        t = t.sibling;
      }
    }
    function jn(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            jn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          case 24:
            jn(l, a), n & 2048 && kc(a.alternate, a);
            break;
          default:
            jn(l, a);
        }
        t = t.sibling;
      }
    }
    var An = 8192;
    function Oa(e, t, l) {
      if (e.subtreeFlags & An) for (e = e.child; e !== null; ) qo(e, t, l), e = e.sibling;
    }
    function qo(e, t, l) {
      switch (e.tag) {
        case 26:
          Oa(e, t, l), e.flags & An && e.memoizedState !== null && ty(l, Yt, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Oa(e, t, l);
          break;
        case 3:
        case 4:
          var a = Yt;
          Yt = $u(e.stateNode.containerInfo), Oa(e, t, l), Yt = a;
          break;
        case 22:
          e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, Oa(e, t, l), An = a) : Oa(e, t, l));
          break;
        default:
          Oa(e, t, l);
      }
    }
    function Yo(e) {
      var t = e.alternate;
      if (t !== null && (e = t.child, e !== null)) {
        t.child = null;
        do
          t = e.sibling, e.sibling = null, e = t;
        while (e !== null);
      }
    }
    function zn(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ke = a, Go(a, e);
        }
        Yo(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Lo(e), e = e.sibling;
    }
    function Lo(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          zn(e), e.flags & 2048 && Sl(9, e, e.return);
          break;
        case 3:
          zn(e);
          break;
        case 12:
          zn(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Hu(e)) : zn(e);
          break;
        default:
          zn(e);
      }
    }
    function Hu(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var a = t[l];
          ke = a, Go(a, e);
        }
        Yo(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, t, t.return), Hu(t);
            break;
          case 22:
            l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Hu(t));
            break;
          default:
            Hu(t);
        }
        e = e.sibling;
      }
    }
    function Go(e, t) {
      for (; ke !== null; ) {
        var l = ke;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, l, t);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            rn(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, ke = a;
        else e: for (l = e; ke !== null; ) {
          a = ke;
          var n = a.sibling, u = a.return;
          if (Oo(a), a === l) {
            ke = null;
            break e;
          }
          if (n !== null) {
            n.return = u, ke = n;
            break e;
          }
          ke = u;
        }
      }
    }
    var g0 = {
      getCacheForType: function(e) {
        var t = Ie(Ye), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      },
      cacheSignal: function() {
        return Ie(Ye).controller.signal;
      }
    }, b0 = typeof WeakMap == "function" ? WeakMap : Map, ye = 0, Ee = null, ne = null, ie = 0, xe = 0, xt = null, Nl = false, Ua = false, Kc = false, cl = 0, Re = 0, jl = 0, ea = 0, Jc = 0, St = 0, Da = 0, Tn = null, ot = null, $c = false, Bu = 0, Xo = 0, qu = 1 / 0, Yu = null, Al = null, Qe = 0, zl = null, Ca = null, sl = 0, Fc = 0, Wc = null, Qo = null, En = 0, Ic = null;
    function Nt() {
      return (ye & 2) !== 0 && ie !== 0 ? ie & -ie : O.T !== null ? ns() : ar();
    }
    function Zo() {
      if (St === 0) if ((ie & 536870912) === 0 || se) {
        var e = Kn;
        Kn <<= 1, (Kn & 3932160) === 0 && (Kn = 262144), St = e;
      } else St = 536870912;
      return e = _t.current, e !== null && (e.flags |= 32), St;
    }
    function dt(e, t, l) {
      (e === Ee && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Ra(e, 0), Tl(e, ie, St, false)), Ja(e, l), ((ye & 2) === 0 || e !== Ee) && (e === Ee && ((ye & 2) === 0 && (ea |= l), Re === 4 && Tl(e, ie, St, false)), Zt(e));
    }
    function Vo(e, t, l) {
      if ((ye & 6) !== 0) throw Error(f(327));
      var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ka(e, t), n = a ? v0(e, t) : es(e, t, true), u = a;
      do {
        if (n === 0) {
          Ua && !a && Tl(e, t, 0, false);
          break;
        } else {
          if (l = e.current.alternate, u && !p0(l)) {
            n = es(e, t, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = t, e.errorRecoveryDisabledLanes & u) var i = 0;
            else i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              t = i;
              e: {
                var o = e;
                n = Tn;
                var m = o.current.memoizedState.isDehydrated;
                if (m && (Ra(o, i).flags |= 256), i = es(o, i, false), i !== 2) {
                  if (Kc && !m) {
                    o.errorRecoveryDisabledLanes |= u, ea |= u, n = 4;
                    break e;
                  }
                  u = ot, ot = n, u !== null && (ot === null ? ot = u : ot.push.apply(ot, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ra(e, 0), Tl(e, t, 0, true);
            break;
          }
          e: {
            switch (a = e, u = n, u) {
              case 0:
              case 1:
                throw Error(f(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Tl(a, t, St, !Nl);
                break e;
              case 2:
                ot = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(f(329));
            }
            if ((t & 62914560) === t && (n = Bu + 300 - ht(), 10 < n)) {
              if (Tl(a, t, St, !Nl), $n(a, 0, true) !== 0) break e;
              sl = t, a.timeoutHandle = Sd(ko.bind(null, a, l, ot, Yu, $c, t, St, ea, Da, Nl, u, "Throttled", -0, 0), n);
              break e;
            }
            ko(a, l, ot, Yu, $c, t, St, ea, Da, Nl, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Zt(e);
    }
    function ko(e, t, l, a, n, u, i, o, m, j, w, D, A, z) {
      if (e.timeoutHandle = -1, D = t.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
        D = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Kt
        }, qo(t, u, D);
        var Y = (u & 62914560) === u ? Bu - ht() : (u & 4194048) === u ? Xo - ht() : 0;
        if (Y = ly(D, Y), Y !== null) {
          sl = u, e.cancelPendingCommit = Y(ed.bind(null, e, t, u, l, a, n, i, o, m, w, D, null, A, z)), Tl(e, u, i, !j);
          return;
        }
      }
      ed(e, t, u, l, a, n, i, o, m);
    }
    function p0(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!bt(u(), n)) return false;
          } catch {
            return false;
          }
        }
        if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
        else {
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function Tl(e, t, l, a) {
      t &= ~Jc, t &= ~ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var n = t; 0 < n; ) {
        var u = 31 - gt(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      l !== 0 && er(e, l, t);
    }
    function Lu() {
      return (ye & 6) === 0 ? (wn(0), false) : true;
    }
    function Pc() {
      if (ne !== null) {
        if (xe === 0) var e = ne.return;
        else e = ne, Wt = Vl = null, yc(e), Aa = null, on = 0, e = ne;
        for (; e !== null; ) No(e.alternate, e), e = e.return;
        ne = null;
      }
    }
    function Ra(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && (e.timeoutHandle = -1, q0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), sl = 0, Pc(), Ee = e, ne = l = $t(e.current, null), ie = t, xe = 0, xt = null, Nl = false, Ua = Ka(e, t), Kc = false, Da = St = Jc = ea = jl = Re = 0, ot = Tn = null, $c = false, (t & 8) !== 0 && (t |= t & 32);
      var a = e.entangledLanes;
      if (a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - gt(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
      return cl = t, cu(), l;
    }
    function Ko(e, t) {
      ee = null, O.H = _n, t === ja || t === yu ? (t = sf(), xe = 3) : t === ac ? (t = sf(), xe = 4) : xe = t === Oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, xt = t, ne === null && (Re = 1, wu(e, Mt(t, e.current)));
    }
    function Jo() {
      var e = _t.current;
      return e === null ? true : (ie & 4194048) === ie ? Ct === null : (ie & 62914560) === ie || (ie & 536870912) !== 0 ? e === Ct : false;
    }
    function $o() {
      var e = O.H;
      return O.H = _n, e === null ? _n : e;
    }
    function Fo() {
      var e = O.A;
      return O.A = g0, e;
    }
    function Gu() {
      Re = 4, Nl || (ie & 4194048) !== ie && _t.current !== null || (Ua = true), (jl & 134217727) === 0 && (ea & 134217727) === 0 || Ee === null || Tl(Ee, ie, St, false);
    }
    function es(e, t, l) {
      var a = ye;
      ye |= 2;
      var n = $o(), u = Fo();
      (Ee !== e || ie !== t) && (Yu = null, Ra(e, t)), t = false;
      var i = Re;
      e: do
        try {
          if (xe !== 0 && ne !== null) {
            var o = ne, m = xt;
            switch (xe) {
              case 8:
                Pc(), i = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                _t.current === null && (t = true);
                var j = xe;
                if (xe = 0, xt = null, Ha(e, o, m, j), l && Ua) {
                  i = 0;
                  break e;
                }
                break;
              default:
                j = xe, xe = 0, xt = null, Ha(e, o, m, j);
            }
          }
          _0(), i = Re;
          break;
        } catch (w) {
          Ko(e, w);
        }
      while (true);
      return t && e.shellSuspendCounter++, Wt = Vl = null, ye = a, O.H = n, O.A = u, ne === null && (Ee = null, ie = 0, cu()), i;
    }
    function _0() {
      for (; ne !== null; ) Wo(ne);
    }
    function v0(e, t) {
      var l = ye;
      ye |= 2;
      var a = $o(), n = Fo();
      Ee !== e || ie !== t ? (Yu = null, qu = ht() + 500, Ra(e, t)) : Ua = Ka(e, t);
      e: do
        try {
          if (xe !== 0 && ne !== null) {
            t = ne;
            var u = xt;
            t: switch (xe) {
              case 1:
                xe = 0, xt = null, Ha(e, t, u, 1);
                break;
              case 2:
              case 9:
                if (uf(u)) {
                  xe = 0, xt = null, Io(t);
                  break;
                }
                t = function() {
                  xe !== 2 && xe !== 9 || Ee !== e || (xe = 7), Zt(e);
                }, u.then(t, t);
                break e;
              case 3:
                xe = 7;
                break e;
              case 4:
                xe = 5;
                break e;
              case 7:
                uf(u) ? (xe = 0, xt = null, Io(t)) : (xe = 0, xt = null, Ha(e, t, u, 7));
                break;
              case 5:
                var i = null;
                switch (ne.tag) {
                  case 26:
                    i = ne.memoizedState;
                  case 5:
                  case 27:
                    var o = ne;
                    if (i ? Bd(i) : o.stateNode.complete) {
                      xe = 0, xt = null;
                      var m = o.sibling;
                      if (m !== null) ne = m;
                      else {
                        var j = o.return;
                        j !== null ? (ne = j, Xu(j)) : ne = null;
                      }
                      break t;
                    }
                }
                xe = 0, xt = null, Ha(e, t, u, 5);
                break;
              case 6:
                xe = 0, xt = null, Ha(e, t, u, 6);
                break;
              case 8:
                Pc(), Re = 6;
                break e;
              default:
                throw Error(f(462));
            }
          }
          x0();
          break;
        } catch (w) {
          Ko(e, w);
        }
      while (true);
      return Wt = Vl = null, O.H = a, O.A = n, ye = l, ne !== null ? 0 : (Ee = null, ie = 0, cu(), Re);
    }
    function x0() {
      for (; ne !== null && !Zm(); ) Wo(ne);
    }
    function Wo(e) {
      var t = xo(e.alternate, e, cl);
      e.memoizedProps = e.pendingProps, t === null ? Xu(e) : ne = t;
    }
    function Io(e) {
      var t = e, l = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = yo(l, t, t.pendingProps, t.type, void 0, ie);
          break;
        case 11:
          t = yo(l, t, t.pendingProps, t.type.render, t.ref, ie);
          break;
        case 5:
          yc(t);
        default:
          No(l, t), t = ne = Jr(t, cl), t = xo(l, t, cl);
      }
      e.memoizedProps = e.pendingProps, t === null ? Xu(e) : ne = t;
    }
    function Ha(e, t, l, a) {
      Wt = Vl = null, yc(t), Aa = null, on = 0;
      var n = t.return;
      try {
        if (r0(e, n, t, l, ie)) {
          Re = 1, wu(e, Mt(l, e.current)), ne = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw ne = n, u;
        Re = 1, wu(e, Mt(l, e.current)), ne = null;
        return;
      }
      t.flags & 32768 ? (se || a === 1 ? e = true : Ua || (ie & 536870912) !== 0 ? e = false : (Nl = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _t.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Po(t, e)) : Xu(t);
    }
    function Xu(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Po(t, Nl);
          return;
        }
        e = t.return;
        var l = d0(t.alternate, t, cl);
        if (l !== null) {
          ne = l;
          return;
        }
        if (t = t.sibling, t !== null) {
          ne = t;
          return;
        }
        ne = t = e;
      } while (t !== null);
      Re === 0 && (Re = 5);
    }
    function Po(e, t) {
      do {
        var l = m0(e.alternate, e);
        if (l !== null) {
          l.flags &= 32767, ne = l;
          return;
        }
        if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
          ne = e;
          return;
        }
        ne = e = l;
      } while (e !== null);
      Re = 6, ne = null;
    }
    function ed(e, t, l, a, n, u, i, o, m) {
      e.cancelPendingCommit = null;
      do
        Qu();
      while (Qe !== 0);
      if ((ye & 6) !== 0) throw Error(f(327));
      if (t !== null) {
        if (t === e.current) throw Error(f(177));
        if (u = t.lanes | t.childLanes, u |= Xi, eh(e, l, u, i, o, m), e === Ee && (ne = Ee = null, ie = 0), Ca = t, zl = e, sl = l, Fc = u, Wc = n, Qo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, A0(Vn, function() {
          return ud(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = O.T, O.T = null, n = B.p, B.p = 2, i = ye, ye |= 4;
          try {
            h0(e, t, l);
          } finally {
            ye = i, B.p = n, O.T = a;
          }
        }
        Qe = 1, td(), ld(), ad();
      }
    }
    function td() {
      if (Qe === 1) {
        Qe = 0;
        var e = zl, t = Ca, l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          l = O.T, O.T = null;
          var a = B.p;
          B.p = 2;
          var n = ye;
          ye |= 4;
          try {
            Ro(t, e);
            var u = ds, i = Yr(e.containerInfo), o = u.focusedElem, m = u.selectionRange;
            if (i !== o && o && o.ownerDocument && qr(o.ownerDocument.documentElement, o)) {
              if (m !== null && Bi(o)) {
                var j = m.start, w = m.end;
                if (w === void 0 && (w = j), "selectionStart" in o) o.selectionStart = j, o.selectionEnd = Math.min(w, o.value.length);
                else {
                  var D = o.ownerDocument || document, A = D && D.defaultView || window;
                  if (A.getSelection) {
                    var z = A.getSelection(), Y = o.textContent.length, k = Math.min(m.start, Y), ze = m.end === void 0 ? k : Math.min(m.end, Y);
                    !z.extend && k > ze && (i = ze, ze = k, k = i);
                    var x = Br(o, k), g = Br(o, ze);
                    if (x && g && (z.rangeCount !== 1 || z.anchorNode !== x.node || z.anchorOffset !== x.offset || z.focusNode !== g.node || z.focusOffset !== g.offset)) {
                      var N = D.createRange();
                      N.setStart(x.node, x.offset), z.removeAllRanges(), k > ze ? (z.addRange(N), z.extend(g.node, g.offset)) : (N.setEnd(g.node, g.offset), z.addRange(N));
                    }
                  }
                }
              }
              for (D = [], z = o; z = z.parentNode; ) z.nodeType === 1 && D.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
              for (typeof o.focus == "function" && o.focus(), o = 0; o < D.length; o++) {
                var U = D[o];
                U.element.scrollLeft = U.left, U.element.scrollTop = U.top;
              }
            }
            ti = !!os, ds = os = null;
          } finally {
            ye = n, B.p = a, O.T = l;
          }
        }
        e.current = t, Qe = 2;
      }
    }
    function ld() {
      if (Qe === 2) {
        Qe = 0;
        var e = zl, t = Ca, l = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || l) {
          l = O.T, O.T = null;
          var a = B.p;
          B.p = 2;
          var n = ye;
          ye |= 4;
          try {
            Mo(e, t.alternate, t);
          } finally {
            ye = n, B.p = a, O.T = l;
          }
        }
        Qe = 3;
      }
    }
    function ad() {
      if (Qe === 4 || Qe === 3) {
        Qe = 0, Vm();
        var e = zl, t = Ca, l = sl, a = Qo;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Qe = 5 : (Qe = 0, Ca = zl = null, nd(e, e.pendingLanes));
        var n = e.pendingLanes;
        if (n === 0 && (Al = null), pi(l), t = t.stateNode, yt && typeof yt.onCommitFiberRoot == "function") try {
          yt.onCommitFiberRoot(ka, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          t = O.T, n = B.p, B.p = 2, O.T = null;
          try {
            for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
              var o = a[i];
              u(o.value, {
                componentStack: o.stack
              });
            }
          } finally {
            O.T = t, B.p = n;
          }
        }
        (sl & 3) !== 0 && Qu(), Zt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Ic ? En++ : (En = 0, Ic = e) : En = 0, wn(0);
      }
    }
    function nd(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, rn(t)));
    }
    function Qu() {
      return td(), ld(), ad(), ud();
    }
    function ud() {
      if (Qe !== 5) return false;
      var e = zl, t = Fc;
      Fc = 0;
      var l = pi(sl), a = O.T, n = B.p;
      try {
        B.p = 32 > l ? 32 : l, O.T = null, l = Wc, Wc = null;
        var u = zl, i = sl;
        if (Qe = 0, Ca = zl = null, sl = 0, (ye & 6) !== 0) throw Error(f(331));
        var o = ye;
        if (ye |= 4, Lo(u.current), Bo(u, u.current, i, l), ye = o, wn(0, false), yt && typeof yt.onPostCommitFiberRoot == "function") try {
          yt.onPostCommitFiberRoot(ka, u);
        } catch {
        }
        return true;
      } finally {
        B.p = n, O.T = a, nd(e, t);
      }
    }
    function id(e, t, l) {
      t = Mt(l, t), t = Mc(e.stateNode, t, 2), e = _l(e, t, 2), e !== null && (Ja(e, 2), Zt(e));
    }
    function Se(e, t, l) {
      if (e.tag === 3) id(e, e, l);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          id(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Al === null || !Al.has(a))) {
            e = Mt(l, e), l = io(2), a = _l(t, l, 2), a !== null && (co(l, a, t, e), Ja(a, 2), Zt(a));
            break;
          }
        }
        t = t.return;
      }
    }
    function ts(e, t, l) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new b0();
        var n = /* @__PURE__ */ new Set();
        a.set(t, n);
      } else n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
      n.has(l) || (Kc = true, n.add(l), e = S0.bind(null, e, t, l), t.then(e, e));
    }
    function S0(e, t, l) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Ee === e && (ie & l) === l && (Re === 4 || Re === 3 && (ie & 62914560) === ie && 300 > ht() - Bu ? (ye & 2) === 0 && Ra(e, 0) : Jc |= l, Da === ie && (Da = 0)), Zt(e);
    }
    function cd(e, t) {
      t === 0 && (t = Ps()), e = Xl(e, t), e !== null && (Ja(e, t), Zt(e));
    }
    function N0(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), cd(e, l);
    }
    function j0(e, t) {
      var l = 0;
      switch (e.tag) {
        case 31:
        case 13:
          var a = e.stateNode, n = e.memoizedState;
          n !== null && (l = n.retryLane);
          break;
        case 19:
          a = e.stateNode;
          break;
        case 22:
          a = e.stateNode._retryCache;
          break;
        default:
          throw Error(f(314));
      }
      a !== null && a.delete(t), cd(e, l);
    }
    function A0(e, t) {
      return hi(e, t);
    }
    var Zu = null, Ba = null, ls = false, Vu = false, as = false, El = 0;
    function Zt(e) {
      e !== Ba && e.next === null && (Ba === null ? Zu = Ba = e : Ba = Ba.next = e), Vu = true, ls || (ls = true, T0());
    }
    function wn(e, t) {
      if (!as && Vu) {
        as = true;
        do
          for (var l = false, a = Zu; a !== null; ) {
            if (e !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, o = a.pingedLanes;
                u = (1 << 31 - gt(42 | e) + 1) - 1, u &= n & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, od(a, u));
            } else u = ie, u = $n(a, a === Ee ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ka(a, u) || (l = true, od(a, u));
            a = a.next;
          }
        while (l);
        as = false;
      }
    }
    function z0() {
      sd();
    }
    function sd() {
      Vu = ls = false;
      var e = 0;
      El !== 0 && B0() && (e = El);
      for (var t = ht(), l = null, a = Zu; a !== null; ) {
        var n = a.next, u = rd(a, t);
        u === 0 ? (a.next = null, l === null ? Zu = n : l.next = n, n === null && (Ba = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Vu = true)), a = n;
      }
      Qe !== 0 && Qe !== 5 || wn(e), El !== 0 && (El = 0);
    }
    function rd(e, t) {
      for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - gt(u), o = 1 << i, m = n[i];
        m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = Pm(o, t)) : m <= t && (e.expiredLanes |= o), u &= ~o;
      }
      if (t = Ee, l = ie, l = $n(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && yi(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((l & 3) === 0 || Ka(e, l)) {
        if (t = l & -l, t === e.callbackPriority) return t;
        switch (a !== null && yi(a), pi(l)) {
          case 2:
          case 8:
            l = Ws;
            break;
          case 32:
            l = Vn;
            break;
          case 268435456:
            l = Is;
            break;
          default:
            l = Vn;
        }
        return a = fd.bind(null, e), l = hi(l, a), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return a !== null && a !== null && yi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function fd(e, t) {
      if (Qe !== 0 && Qe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var l = e.callbackNode;
      if (Qu() && e.callbackNode !== l) return null;
      var a = ie;
      return a = $n(e, e === Ee ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Vo(e, a, t), rd(e, ht()), e.callbackNode != null && e.callbackNode === l ? fd.bind(null, e) : null);
    }
    function od(e, t) {
      if (Qu()) return null;
      Vo(e, t, true);
    }
    function T0() {
      Y0(function() {
        (ye & 6) !== 0 ? hi(Fs, z0) : sd();
      });
    }
    function ns() {
      if (El === 0) {
        var e = Sa;
        e === 0 && (e = kn, kn <<= 1, (kn & 261888) === 0 && (kn = 256)), El = e;
      }
      return El;
    }
    function dd(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pn("" + e);
    }
    function md(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function E0(e, t, l, a, n) {
      if (t === "submit" && l && l.stateNode === n) {
        var u = dd((n[it] || null).action), i = a.submitter;
        i && (t = (t = i[it] || null) ? dd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
        var o = new au("action", "action", null, a, n);
        e.push({
          event: o,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (El !== 0) {
                    var m = i ? md(n, i) : new FormData(n);
                    jc(l, {
                      pending: true,
                      data: m,
                      method: n.method,
                      action: u
                    }, null, m);
                  }
                } else typeof u == "function" && (o.preventDefault(), m = i ? md(n, i) : new FormData(n), jc(l, {
                  pending: true,
                  data: m,
                  method: n.method,
                  action: u
                }, u, m));
              },
              currentTarget: n
            }
          ]
        });
      }
    }
    for (var us = 0; us < Gi.length; us++) {
      var is = Gi[us], w0 = is.toLowerCase(), M0 = is[0].toUpperCase() + is.slice(1);
      qt(w0, "on" + M0);
    }
    qt(Xr, "onAnimationEnd"), qt(Qr, "onAnimationIteration"), qt(Zr, "onAnimationStart"), qt("dblclick", "onDoubleClick"), qt("focusin", "onFocus"), qt("focusout", "onBlur"), qt(kh, "onTransitionRun"), qt(Kh, "onTransitionStart"), qt(Jh, "onTransitionCancel"), qt(Vr, "onTransitionEnd"), sa("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), sa("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), sa("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), sa("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), ql("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ql("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ql("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), ql("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ql("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ql("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), O0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));
    function hd(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var a = e[l], n = a.event;
        a = a.listeners;
        e: {
          var u = void 0;
          if (t) for (var i = a.length - 1; 0 <= i; i--) {
            var o = a[i], m = o.instance, j = o.currentTarget;
            if (o = o.listener, m !== u && n.isPropagationStopped()) break e;
            u = o, n.currentTarget = j;
            try {
              u(n);
            } catch (w) {
              iu(w);
            }
            n.currentTarget = null, u = m;
          }
          else for (i = 0; i < a.length; i++) {
            if (o = a[i], m = o.instance, j = o.currentTarget, o = o.listener, m !== u && n.isPropagationStopped()) break e;
            u = o, n.currentTarget = j;
            try {
              u(n);
            } catch (w) {
              iu(w);
            }
            n.currentTarget = null, u = m;
          }
        }
      }
    }
    function ue(e, t) {
      var l = t[_i];
      l === void 0 && (l = t[_i] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      l.has(a) || (yd(t, e, 2, false), l.add(a));
    }
    function cs(e, t, l) {
      var a = 0;
      t && (a |= 4), yd(l, e, a, t);
    }
    var ku = "_reactListening" + Math.random().toString(36).slice(2);
    function ss(e) {
      if (!e[ku]) {
        e[ku] = true, ir.forEach(function(l) {
          l !== "selectionchange" && (O0.has(l) || cs(l, false, e), cs(l, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[ku] || (t[ku] = true, cs("selectionchange", false, t));
      }
    }
    function yd(e, t, l, a) {
      switch (Zd(t)) {
        case 2:
          var n = uy;
          break;
        case 8:
          n = iy;
          break;
        default:
          n = Ns;
      }
      l = n.bind(null, t, l, e), n = void 0, !Ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), a ? n !== void 0 ? e.addEventListener(t, l, {
        capture: true,
        passive: n
      }) : e.addEventListener(t, l, true) : n !== void 0 ? e.addEventListener(t, l, {
        passive: n
      }) : e.addEventListener(t, l, false);
    }
    function rs(e, t, l, a, n) {
      var u = a;
      if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (i === 4) for (i = a.return; i !== null; ) {
            var m = i.tag;
            if ((m === 3 || m === 4) && i.stateNode.containerInfo === n) return;
            i = i.return;
          }
          for (; o !== null; ) {
            if (i = ua(o), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
      pr(function() {
        var j = u, w = zi(l), D = [];
        e: {
          var A = kr.get(e);
          if (A !== void 0) {
            var z = au, Y = e;
            switch (e) {
              case "keypress":
                if (tu(l) === 0) break e;
              case "keydown":
              case "keyup":
                z = jh;
                break;
              case "focusin":
                Y = "focus", z = Ui;
                break;
              case "focusout":
                Y = "blur", z = Ui;
                break;
              case "beforeblur":
              case "afterblur":
                z = Ui;
                break;
              case "click":
                if (l.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                z = xr;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = dh;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = Th;
                break;
              case Xr:
              case Qr:
              case Zr:
                z = yh;
                break;
              case Vr:
                z = wh;
                break;
              case "scroll":
              case "scrollend":
                z = fh;
                break;
              case "wheel":
                z = Oh;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = bh;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = Nr;
                break;
              case "toggle":
              case "beforetoggle":
                z = Dh;
            }
            var k = (t & 4) !== 0, ze = !k && (e === "scroll" || e === "scrollend"), x = k ? A !== null ? A + "Capture" : null : A;
            k = [];
            for (var g = j, N; g !== null; ) {
              var U = g;
              if (N = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || N === null || x === null || (U = Wa(g, x), U != null && k.push(On(g, U, N))), ze) break;
              g = g.return;
            }
            0 < k.length && (A = new z(A, Y, null, l, w), D.push({
              event: A,
              listeners: k
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (A = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", A && l !== Ai && (Y = l.relatedTarget || l.fromElement) && (ua(Y) || Y[na])) break e;
            if ((z || A) && (A = w.window === w ? w : (A = w.ownerDocument) ? A.defaultView || A.parentWindow : window, z ? (Y = l.relatedTarget || l.toElement, z = j, Y = Y ? ua(Y) : null, Y !== null && (ze = S(Y), k = Y.tag, Y !== ze || k !== 5 && k !== 27 && k !== 6) && (Y = null)) : (z = null, Y = j), z !== Y)) {
              if (k = xr, U = "onMouseLeave", x = "onMouseEnter", g = "mouse", (e === "pointerout" || e === "pointerover") && (k = Nr, U = "onPointerLeave", x = "onPointerEnter", g = "pointer"), ze = z == null ? A : Fa(z), N = Y == null ? A : Fa(Y), A = new k(U, g + "leave", z, l, w), A.target = ze, A.relatedTarget = N, U = null, ua(w) === j && (k = new k(x, g + "enter", Y, l, w), k.target = N, k.relatedTarget = ze, U = k), ze = U, z && Y) t: {
                for (k = U0, x = z, g = Y, N = 0, U = x; U; U = k(U)) N++;
                U = 0;
                for (var Q = g; Q; Q = k(Q)) U++;
                for (; 0 < N - U; ) x = k(x), N--;
                for (; 0 < U - N; ) g = k(g), U--;
                for (; N--; ) {
                  if (x === g || g !== null && x === g.alternate) {
                    k = x;
                    break t;
                  }
                  x = k(x), g = k(g);
                }
                k = null;
              }
              else k = null;
              z !== null && gd(D, A, z, k, false), Y !== null && ze !== null && gd(D, ze, Y, k, true);
            }
          }
          e: {
            if (A = j ? Fa(j) : window, z = A.nodeName && A.nodeName.toLowerCase(), z === "select" || z === "input" && A.type === "file") var me = Or;
            else if (wr(A)) if (Ur) me = Qh;
            else {
              me = Gh;
              var X = Lh;
            }
            else z = A.nodeName, !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? j && ji(j.elementType) && (me = Or) : me = Xh;
            if (me && (me = me(e, j))) {
              Mr(D, me, l, w);
              break e;
            }
            X && X(e, A, j), e === "focusout" && j && A.type === "number" && j.memoizedProps.value != null && Ni(A, "number", A.value);
          }
          switch (X = j ? Fa(j) : window, e) {
            case "focusin":
              (wr(X) || X.contentEditable === "true") && (ha = X, qi = j, un = null);
              break;
            case "focusout":
              un = qi = ha = null;
              break;
            case "mousedown":
              Yi = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Yi = false, Lr(D, l, w);
              break;
            case "selectionchange":
              if (Vh) break;
            case "keydown":
            case "keyup":
              Lr(D, l, w);
          }
          var te;
          if (Ci) e: {
            switch (e) {
              case "compositionstart":
                var ce = "onCompositionStart";
                break e;
              case "compositionend":
                ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ce = "onCompositionUpdate";
                break e;
            }
            ce = void 0;
          }
          else ma ? Tr(e, l) && (ce = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ce = "onCompositionStart");
          ce && (jr && l.locale !== "ko" && (ma || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && ma && (te = _r()) : (dl = w, wi = "value" in dl ? dl.value : dl.textContent, ma = true)), X = Ku(j, ce), 0 < X.length && (ce = new Sr(ce, e, null, l, w), D.push({
            event: ce,
            listeners: X
          }), te ? ce.data = te : (te = Er(l), te !== null && (ce.data = te)))), (te = Rh ? Hh(e, l) : Bh(e, l)) && (ce = Ku(j, "onBeforeInput"), 0 < ce.length && (X = new Sr("onBeforeInput", "beforeinput", null, l, w), D.push({
            event: X,
            listeners: ce
          }), X.data = te)), E0(D, e, j, l, w);
        }
        hd(D, t);
      });
    }
    function On(e, t, l) {
      return {
        instance: e,
        listener: t,
        currentTarget: l
      };
    }
    function Ku(e, t) {
      for (var l = t + "Capture", a = []; e !== null; ) {
        var n = e, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Wa(e, l), n != null && a.unshift(On(e, n, u)), n = Wa(e, t), n != null && a.push(On(e, n, u))), e.tag === 3) return a;
        e = e.return;
      }
      return [];
    }
    function U0(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function gd(e, t, l, a, n) {
      for (var u = t._reactName, i = []; l !== null && l !== a; ) {
        var o = l, m = o.alternate, j = o.stateNode;
        if (o = o.tag, m !== null && m === a) break;
        o !== 5 && o !== 26 && o !== 27 || j === null || (m = j, n ? (j = Wa(l, u), j != null && i.unshift(On(l, j, m))) : n || (j = Wa(l, u), j != null && i.push(On(l, j, m)))), l = l.return;
      }
      i.length !== 0 && e.push({
        event: t,
        listeners: i
      });
    }
    var D0 = /\r\n?/g, C0 = /\u0000|\uFFFD/g;
    function bd(e) {
      return (typeof e == "string" ? e : "" + e).replace(D0, `
`).replace(C0, "");
    }
    function pd(e, t) {
      return t = bd(t), bd(e) === t;
    }
    function Ae(e, t, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? t === "body" || t === "textarea" && a === "" || fa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && fa(e, "" + a);
          break;
        case "className":
          Wn(e, "class", a);
          break;
        case "tabIndex":
          Wn(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Wn(e, l, a);
          break;
        case "style":
          gr(e, a, u);
          break;
        case "data":
          if (t !== "object") {
            Wn(e, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (t !== "a" || l !== "href")) {
            e.removeAttribute(l);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(l);
            break;
          }
          a = Pn("" + a), e.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (t !== "input" && Ae(e, t, "name", n.name, n, null), Ae(e, t, "formEncType", n.formEncType, n, null), Ae(e, t, "formMethod", n.formMethod, n, null), Ae(e, t, "formTarget", n.formTarget, n, null)) : (Ae(e, t, "encType", n.encType, n, null), Ae(e, t, "method", n.method, n, null), Ae(e, t, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(l);
            break;
          }
          a = Pn("" + a), e.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (e.onclick = Kt);
          break;
        case "onScroll":
          a != null && ue("scroll", e);
          break;
        case "onScrollEnd":
          a != null && ue("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(f(60));
              e.innerHTML = l;
            }
          }
          break;
        case "multiple":
          e.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          e.muted = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
            e.removeAttribute("xlink:href");
            break;
          }
          l = Pn("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
          break;
        case "capture":
        case "download":
          a === true ? e.setAttribute(l, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
          break;
        case "popover":
          ue("beforetoggle", e), ue("toggle", e), Fn(e, "popover", a);
          break;
        case "xlinkActuate":
          kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          kt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          kt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          kt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          kt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Fn(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = sh.get(l) || l, Fn(e, l, a));
      }
    }
    function fs(e, t, l, a, n, u) {
      switch (l) {
        case "style":
          gr(e, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(f(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(f(60));
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof a == "string" ? fa(e, a) : (typeof a == "number" || typeof a == "bigint") && fa(e, "" + a);
          break;
        case "onScroll":
          a != null && ue("scroll", e);
          break;
        case "onScrollEnd":
          a != null && ue("scrollend", e);
          break;
        case "onClick":
          a != null && (e.onclick = Kt);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!cr.hasOwnProperty(l)) e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[it] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === true ? e.setAttribute(l, "") : Fn(e, l, a);
          }
      }
    }
    function et(e, t, l) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          ue("error", e), ue("load", e);
          var a = false, n = false, u;
          for (u in l) if (l.hasOwnProperty(u)) {
            var i = l[u];
            if (i != null) switch (u) {
              case "src":
                a = true;
                break;
              case "srcSet":
                n = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(f(137, t));
              default:
                Ae(e, t, u, i, l, null);
            }
          }
          n && Ae(e, t, "srcSet", l.srcSet, l, null), a && Ae(e, t, "src", l.src, l, null);
          return;
        case "input":
          ue("invalid", e);
          var o = u = i = n = null, m = null, j = null;
          for (a in l) if (l.hasOwnProperty(a)) {
            var w = l[a];
            if (w != null) switch (a) {
              case "name":
                n = w;
                break;
              case "type":
                i = w;
                break;
              case "checked":
                m = w;
                break;
              case "defaultChecked":
                j = w;
                break;
              case "value":
                u = w;
                break;
              case "defaultValue":
                o = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(f(137, t));
                break;
              default:
                Ae(e, t, a, w, l, null);
            }
          }
          dr(e, u, o, m, j, i, n, false);
          return;
        case "select":
          ue("invalid", e), a = i = u = null;
          for (n in l) if (l.hasOwnProperty(n) && (o = l[n], o != null)) switch (n) {
            case "value":
              u = o;
              break;
            case "defaultValue":
              i = o;
              break;
            case "multiple":
              a = o;
            default:
              Ae(e, t, n, o, l, null);
          }
          t = u, l = i, e.multiple = !!a, t != null ? ra(e, !!a, t, false) : l != null && ra(e, !!a, l, true);
          return;
        case "textarea":
          ue("invalid", e), u = n = a = null;
          for (i in l) if (l.hasOwnProperty(i) && (o = l[i], o != null)) switch (i) {
            case "value":
              a = o;
              break;
            case "defaultValue":
              n = o;
              break;
            case "children":
              u = o;
              break;
            case "dangerouslySetInnerHTML":
              if (o != null) throw Error(f(91));
              break;
            default:
              Ae(e, t, i, o, l, null);
          }
          hr(e, a, n, u);
          return;
        case "option":
          for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ae(e, t, m, a, l, null));
          return;
        case "dialog":
          ue("beforetoggle", e), ue("toggle", e), ue("cancel", e), ue("close", e);
          break;
        case "iframe":
        case "object":
          ue("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Mn.length; a++) ue(Mn[a], e);
          break;
        case "image":
          ue("error", e), ue("load", e);
          break;
        case "details":
          ue("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ue("error", e), ue("load", e);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (j in l) if (l.hasOwnProperty(j) && (a = l[j], a != null)) switch (j) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(137, t));
            default:
              Ae(e, t, j, a, l, null);
          }
          return;
        default:
          if (ji(t)) {
            for (w in l) l.hasOwnProperty(w) && (a = l[w], a !== void 0 && fs(e, t, w, a, l, void 0));
            return;
          }
      }
      for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && Ae(e, t, o, a, l, null));
    }
    function R0(e, t, l, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var n = null, u = null, i = null, o = null, m = null, j = null, w = null;
          for (z in l) {
            var D = l[z];
            if (l.hasOwnProperty(z) && D != null) switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = D;
              default:
                a.hasOwnProperty(z) || Ae(e, t, z, null, a, D);
            }
          }
          for (var A in a) {
            var z = a[A];
            if (D = l[A], a.hasOwnProperty(A) && (z != null || D != null)) switch (A) {
              case "type":
                u = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                j = z;
                break;
              case "defaultChecked":
                w = z;
                break;
              case "value":
                i = z;
                break;
              case "defaultValue":
                o = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(f(137, t));
                break;
              default:
                z !== D && Ae(e, t, A, z, a, D);
            }
          }
          Si(e, i, o, m, j, w, u, n);
          return;
        case "select":
          z = i = o = A = null;
          for (u in l) if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
            case "value":
              break;
            case "multiple":
              z = m;
            default:
              a.hasOwnProperty(u) || Ae(e, t, u, null, a, m);
          }
          for (n in a) if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null)) switch (n) {
            case "value":
              A = u;
              break;
            case "defaultValue":
              o = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== m && Ae(e, t, n, u, a, m);
          }
          t = o, l = i, a = z, A != null ? ra(e, !!l, A, false) : !!a != !!l && (t != null ? ra(e, !!l, t, true) : ra(e, !!l, l ? [] : "", false));
          return;
        case "textarea":
          z = A = null;
          for (o in l) if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)) switch (o) {
            case "value":
              break;
            case "children":
              break;
            default:
              Ae(e, t, o, null, a, n);
          }
          for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              A = n;
              break;
            case "defaultValue":
              z = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(f(91));
              break;
            default:
              n !== u && Ae(e, t, i, n, a, u);
          }
          mr(e, A, z);
          return;
        case "option":
          for (var Y in l) A = l[Y], l.hasOwnProperty(Y) && A != null && !a.hasOwnProperty(Y) && (Y === "selected" ? e.selected = false : Ae(e, t, Y, null, a, A));
          for (m in a) A = a[m], z = l[m], a.hasOwnProperty(m) && A !== z && (A != null || z != null) && (m === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Ae(e, t, m, A, a, z));
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var k in l) A = l[k], l.hasOwnProperty(k) && A != null && !a.hasOwnProperty(k) && Ae(e, t, k, null, a, A);
          for (j in a) if (A = a[j], z = l[j], a.hasOwnProperty(j) && A !== z && (A != null || z != null)) switch (j) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(f(137, t));
              break;
            default:
              Ae(e, t, j, A, a, z);
          }
          return;
        default:
          if (ji(t)) {
            for (var ze in l) A = l[ze], l.hasOwnProperty(ze) && A !== void 0 && !a.hasOwnProperty(ze) && fs(e, t, ze, void 0, a, A);
            for (w in a) A = a[w], z = l[w], !a.hasOwnProperty(w) || A === z || A === void 0 && z === void 0 || fs(e, t, w, A, a, z);
            return;
          }
      }
      for (var x in l) A = l[x], l.hasOwnProperty(x) && A != null && !a.hasOwnProperty(x) && Ae(e, t, x, null, a, A);
      for (D in a) A = a[D], z = l[D], !a.hasOwnProperty(D) || A === z || A == null && z == null || Ae(e, t, D, A, a, z);
    }
    function _d(e) {
      switch (e) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function H0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, o = n.duration;
          if (u && o && _d(i)) {
            for (i = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
              var m = l[a], j = m.startTime;
              if (j > o) break;
              var w = m.transferSize, D = m.initiatorType;
              w && _d(D) && (m = m.responseEnd, i += w * (m < o ? 1 : (o - j) / (m - j)));
            }
            if (--a, t += 8 * (u + i) / (n.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var os = null, ds = null;
    function Ju(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function vd(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function xd(e, t) {
      if (e === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return e === 1 && t === "foreignObject" ? 0 : e;
    }
    function ms(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var hs = null;
    function B0() {
      var e = window.event;
      return e && e.type === "popstate" ? e === hs ? false : (hs = e, true) : (hs = null, false);
    }
    var Sd = typeof setTimeout == "function" ? setTimeout : void 0, q0 = typeof clearTimeout == "function" ? clearTimeout : void 0, Nd = typeof Promise == "function" ? Promise : void 0, Y0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nd < "u" ? function(e) {
      return Nd.resolve(null).then(e).catch(L0);
    } : Sd;
    function L0(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function wl(e) {
      return e === "head";
    }
    function jd(e, t) {
      var l = t, a = 0;
      do {
        var n = l.nextSibling;
        if (e.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Ga(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") Un(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Un(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, o = u.nodeName;
            u[$a] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && Un(e.ownerDocument.body);
        l = n;
      } while (l);
      Ga(t);
    }
    function Ad(e, t) {
      var l = e;
      e = 0;
      do {
        var a = l.nextSibling;
        if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
          if (e === 0) break;
          e--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
        l = a;
      } while (l);
    }
    function ys(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (t = t.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            ys(l), vi(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        e.removeChild(l);
      }
    }
    function G0(e, t, l, a) {
      for (; e.nodeType === 1; ) {
        var n = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (a) {
          if (!e[$a]) switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence")) break;
              if (u !== n.rel || e.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || e.getAttribute("title") !== (n.title == null ? null : n.title)) break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (n.src == null ? null : n.src) || e.getAttribute("type") !== (n.type == null ? null : n.type) || e.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
              return e;
            default:
              return e;
          }
        } else if (t === "input" && e.type === "hidden") {
          var u = n.name == null ? null : "" + n.name;
          if (n.type === "hidden" && e.getAttribute("name") === u) return e;
        } else return e;
        if (e = Rt(e.nextSibling), e === null) break;
      }
      return null;
    }
    function X0(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Rt(e.nextSibling), e === null)) return null;
      return e;
    }
    function zd(e, t) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Rt(e.nextSibling), e === null)) return null;
      return e;
    }
    function gs(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function bs(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function Q0(e, t) {
      var l = e.ownerDocument;
      if (e.data === "$~") e._reactRetry = t;
      else if (e.data !== "$?" || l.readyState !== "loading") t();
      else {
        var a = function() {
          t(), l.removeEventListener("DOMContentLoaded", a);
        };
        l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
      }
    }
    function Rt(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return e;
    }
    var ps = null;
    function Td(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "/$" || l === "/&") {
            if (t === 0) return Rt(e.nextSibling);
            t--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Ed(e) {
      e = e.previousSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (t === 0) return e;
            t--;
          } else l !== "/$" && l !== "/&" || t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    function wd(e, t, l) {
      switch (t = Ju(l), e) {
        case "html":
          if (e = t.documentElement, !e) throw Error(f(452));
          return e;
        case "head":
          if (e = t.head, !e) throw Error(f(453));
          return e;
        case "body":
          if (e = t.body, !e) throw Error(f(454));
          return e;
        default:
          throw Error(f(451));
      }
    }
    function Un(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      vi(e);
    }
    var Ht = /* @__PURE__ */ new Map(), Md = /* @__PURE__ */ new Set();
    function $u(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var rl = B.d;
    B.d = {
      f: Z0,
      r: V0,
      D: k0,
      C: K0,
      L: J0,
      m: $0,
      X: W0,
      S: F0,
      M: I0
    };
    function Z0() {
      var e = rl.f(), t = Lu();
      return e || t;
    }
    function V0(e) {
      var t = ia(e);
      t !== null && t.tag === 5 && t.type === "form" ? kf(t) : rl.r(e);
    }
    var qa = typeof document > "u" ? null : document;
    function Od(e, t, l) {
      var a = qa;
      if (a && typeof t == "string" && t) {
        var n = Et(t);
        n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Md.has(n) || (Md.add(n), e = {
          rel: e,
          crossOrigin: l,
          href: t
        }, a.querySelector(n) === null && (t = a.createElement("link"), et(t, "link", e), Ve(t), a.head.appendChild(t)));
      }
    }
    function k0(e) {
      rl.D(e), Od("dns-prefetch", e, null);
    }
    function K0(e, t) {
      rl.C(e, t), Od("preconnect", e, t);
    }
    function J0(e, t, l) {
      rl.L(e, t, l);
      var a = qa;
      if (a && e && t) {
        var n = 'link[rel="preload"][as="' + Et(t) + '"]';
        t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Et(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Et(l.imageSizes) + '"]')) : n += '[href="' + Et(e) + '"]';
        var u = n;
        switch (t) {
          case "style":
            u = Ya(e);
            break;
          case "script":
            u = La(e);
        }
        Ht.has(u) || (e = C({
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        }, l), Ht.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Dn(u)) || t === "script" && a.querySelector(Cn(u)) || (t = a.createElement("link"), et(t, "link", e), Ve(t), a.head.appendChild(t)));
      }
    }
    function $0(e, t) {
      rl.m(e, t);
      var l = qa;
      if (l && e) {
        var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Et(a) + '"][href="' + Et(e) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = La(e);
        }
        if (!Ht.has(u) && (e = C({
          rel: "modulepreload",
          href: e
        }, t), Ht.set(u, e), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Cn(u))) return;
          }
          a = l.createElement("link"), et(a, "link", e), Ve(a), l.head.appendChild(a);
        }
      }
    }
    function F0(e, t, l) {
      rl.S(e, t, l);
      var a = qa;
      if (a && e) {
        var n = ca(a).hoistableStyles, u = Ya(e);
        t = t || "default";
        var i = n.get(u);
        if (!i) {
          var o = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(Dn(u))) o.loading = 5;
          else {
            e = C({
              rel: "stylesheet",
              href: e,
              "data-precedence": t
            }, l), (l = Ht.get(u)) && _s(e, l);
            var m = i = a.createElement("link");
            Ve(m), et(m, "link", e), m._p = new Promise(function(j, w) {
              m.onload = j, m.onerror = w;
            }), m.addEventListener("load", function() {
              o.loading |= 1;
            }), m.addEventListener("error", function() {
              o.loading |= 2;
            }), o.loading |= 4, Fu(i, t, a);
          }
          i = {
            type: "stylesheet",
            instance: i,
            count: 1,
            state: o
          }, n.set(u, i);
        }
      }
    }
    function W0(e, t) {
      rl.X(e, t);
      var l = qa;
      if (l && e) {
        var a = ca(l).hoistableScripts, n = La(e), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (e = C({
          src: e,
          async: true
        }, t), (t = Ht.get(n)) && vs(e, t), u = l.createElement("script"), Ve(u), et(u, "link", e), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function I0(e, t) {
      rl.M(e, t);
      var l = qa;
      if (l && e) {
        var a = ca(l).hoistableScripts, n = La(e), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (e = C({
          src: e,
          async: true,
          type: "module"
        }, t), (t = Ht.get(n)) && vs(e, t), u = l.createElement("script"), Ve(u), et(u, "link", e), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Ud(e, t, l, a) {
      var n = (n = ae.current) ? $u(n) : null;
      if (!n) throw Error(f(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Ya(l.href), l = ca(n).hoistableStyles, a = l.get(t), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            e = Ya(l.href);
            var u = ca(n).hoistableStyles, i = u.get(e);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(e, i), (u = n.querySelector(Dn(e))) && !u._p && (i.instance = u, i.state.loading = 5), Ht.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ht.set(e, l), u || P0(n, e, l, i.state))), t && a === null) throw Error(f(528, ""));
            return i;
          }
          if (t && a !== null) throw Error(f(529, ""));
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = La(l), l = ca(n).hoistableScripts, a = l.get(t), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(t, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(f(444, e));
      }
    }
    function Ya(e) {
      return 'href="' + Et(e) + '"';
    }
    function Dn(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Dd(e) {
      return C({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function P0(e, t, l, a) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), et(t, "link", l), Ve(t), e.head.appendChild(t));
    }
    function La(e) {
      return '[src="' + Et(e) + '"]';
    }
    function Cn(e) {
      return "script[async]" + e;
    }
    function Cd(e, t, l) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Et(l.href) + '"]');
          if (a) return t.instance = a, Ve(a), a;
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement("style"), Ve(a), et(a, "style", n), Fu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = Ya(l.href);
          var u = e.querySelector(Dn(n));
          if (u) return t.state.loading |= 4, t.instance = u, Ve(u), u;
          a = Dd(l), (n = Ht.get(n)) && _s(a, n), u = (e.ownerDocument || e).createElement("link"), Ve(u);
          var i = u;
          return i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), et(u, "link", a), t.state.loading |= 4, Fu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = La(l.src), (n = e.querySelector(Cn(u))) ? (t.instance = n, Ve(n), n) : (a = l, (n = Ht.get(u)) && (a = C({}, l), vs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ve(n), et(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Fu(a, l.precedence, e));
      return t.instance;
    }
    function Fu(e, t, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var o = a[i];
        if (o.dataset.precedence === t) u = o;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function _s(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function vs(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var Wu = null;
    function Rd(e, t, l) {
      if (Wu === null) {
        var a = /* @__PURE__ */ new Map(), n = Wu = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = Wu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(e)) return a;
      for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[$a] || u[Fe] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = u.getAttribute(t) || "";
          i = e + i;
          var o = a.get(i);
          o ? o.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function Hd(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function ey(e, t, l) {
      if (l === 1 || t.itemProp != null) return false;
      switch (e) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : true;
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function Bd(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function ty(e, t, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = Ya(a.href), u = t.querySelector(Dn(n));
          if (u) {
            t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Iu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ve(u);
            return;
          }
          u = t.ownerDocument || t, a = Dd(a), (n = Ht.get(n)) && _s(a, n), u = u.createElement("link"), Ve(u);
          var i = u;
          i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), et(u, "link", a), l.instance = u;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Iu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
      }
    }
    var xs = 0;
    function ly(e, t) {
      return e.stylesheets && e.count === 0 && ei(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (e.stylesheets && ei(e, e.stylesheets), e.unsuspend) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, 6e4 + t);
        0 < e.imgBytes && xs === 0 && (xs = 62500 * H0());
        var n = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && ei(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, (e.imgBytes > xs ? 50 : 800) + t);
        return e.unsuspend = l, function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function Iu() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ei(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var Pu = null;
    function ei(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Pu = /* @__PURE__ */ new Map(), t.forEach(ay, e), Pu = null, Iu.call(e));
    }
    function ay(e, t) {
      if (!(t.state.loading & 4)) {
        var l = Pu.get(e);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), Pu.set(e, l);
          for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
          }
          a && l.set(null, a);
        }
        n = t.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Iu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
      }
    }
    var Rn = {
      $$typeof: G,
      Provider: null,
      Consumer: null,
      _currentValue: K,
      _currentValue2: K,
      _threadCount: 0
    };
    function ny(e, t, l, a, n, u, i, o, m) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gi(0), this.hiddenUpdates = gi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function qd(e, t, l, a, n, u, i, o, m, j, w, D) {
      return e = new ny(e, t, l, i, m, j, w, D, o), t = 1, u === true && (t |= 24), u = pt(3, null, null, t), e.current = u, u.stateNode = e, t = ec(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: t
      }, nc(u), e;
    }
    function Yd(e) {
      return e ? (e = ba, e) : ba;
    }
    function Ld(e, t, l, a, n, u) {
      n = Yd(n), a.context === null ? a.context = n : a.pendingContext = n, a = pl(t), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = _l(e, a, t), l !== null && (dt(l, e, t), mn(l, e, t));
    }
    function Gd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function Ss(e, t) {
      Gd(e, t), (e = e.alternate) && Gd(e, t);
    }
    function Xd(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Xl(e, 67108864);
        t !== null && dt(t, e, 67108864), Ss(e, 67108864);
      }
    }
    function Qd(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Nt();
        t = bi(t);
        var l = Xl(e, t);
        l !== null && dt(l, e, t), Ss(e, t);
      }
    }
    var ti = true;
    function uy(e, t, l, a) {
      var n = O.T;
      O.T = null;
      var u = B.p;
      try {
        B.p = 2, Ns(e, t, l, a);
      } finally {
        B.p = u, O.T = n;
      }
    }
    function iy(e, t, l, a) {
      var n = O.T;
      O.T = null;
      var u = B.p;
      try {
        B.p = 8, Ns(e, t, l, a);
      } finally {
        B.p = u, O.T = n;
      }
    }
    function Ns(e, t, l, a) {
      if (ti) {
        var n = js(a);
        if (n === null) rs(e, t, a, li, l), Vd(e, a);
        else if (sy(n, e, t, l, a)) a.stopPropagation();
        else if (Vd(e, a), t & 4 && -1 < cy.indexOf(e)) {
          for (; n !== null; ) {
            var u = ia(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Bl(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - gt(i);
                      o.entanglements[1] |= m, i &= ~m;
                    }
                    Zt(u), (ye & 6) === 0 && (qu = ht() + 500, wn(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Xl(u, 2), o !== null && dt(o, u, 2), Lu(), Ss(u, 2);
            }
            if (u = js(a), u === null && rs(e, t, a, li, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else rs(e, t, a, null, l);
      }
    }
    function js(e) {
      return e = zi(e), As(e);
    }
    var li = null;
    function As(e) {
      if (li = null, e = ua(e), e !== null) {
        var t = S(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = p(t), e !== null) return e;
            e = null;
          } else if (l === 31) {
            if (e = h(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return li = e, null;
    }
    function Zd(e) {
      switch (e) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (km()) {
            case Fs:
              return 2;
            case Ws:
              return 8;
            case Vn:
            case Km:
              return 32;
            case Is:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var zs = false, Ml = null, Ol = null, Ul = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Dl = [], cy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Vd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Ml = null;
          break;
        case "dragenter":
        case "dragleave":
          Ol = null;
          break;
        case "mouseover":
        case "mouseout":
          Ul = null;
          break;
        case "pointerover":
        case "pointerout":
          Hn.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Bn.delete(t.pointerId);
      }
    }
    function qn(e, t, l, a, n, u) {
      return e === null || e.nativeEvent !== u ? (e = {
        blockedOn: t,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, t !== null && (t = ia(t), t !== null && Xd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
    }
    function sy(e, t, l, a, n) {
      switch (t) {
        case "focusin":
          return Ml = qn(Ml, e, t, l, a, n), true;
        case "dragenter":
          return Ol = qn(Ol, e, t, l, a, n), true;
        case "mouseover":
          return Ul = qn(Ul, e, t, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Hn.set(u, qn(Hn.get(u) || null, e, t, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Bn.set(u, qn(Bn.get(u) || null, e, t, l, a, n)), true;
      }
      return false;
    }
    function kd(e) {
      var t = ua(e.target);
      if (t !== null) {
        var l = S(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = p(l), t !== null) {
              e.blockedOn = t, nr(e.priority, function() {
                Qd(l);
              });
              return;
            }
          } else if (t === 31) {
            if (t = h(l), t !== null) {
              e.blockedOn = t, nr(e.priority, function() {
                Qd(l);
              });
              return;
            }
          } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function ai(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = js(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var a = new l.constructor(l.type, l);
          Ai = a, l.target.dispatchEvent(a), Ai = null;
        } else return t = ia(l), t !== null && Xd(t), e.blockedOn = l, false;
        t.shift();
      }
      return true;
    }
    function Kd(e, t, l) {
      ai(e) && l.delete(t);
    }
    function ry() {
      zs = false, Ml !== null && ai(Ml) && (Ml = null), Ol !== null && ai(Ol) && (Ol = null), Ul !== null && ai(Ul) && (Ul = null), Hn.forEach(Kd), Bn.forEach(Kd);
    }
    function ni(e, t) {
      e.blockedOn === t && (e.blockedOn = null, zs || (zs = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, ry)));
    }
    var ui = null;
    function Jd(e) {
      ui !== e && (ui = e, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
        ui === e && (ui = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (As(a || l) === null) continue;
            break;
          }
          var u = ia(l);
          u !== null && (e.splice(t, 3), t -= 3, jc(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Ga(e) {
      function t(m) {
        return ni(m, e);
      }
      Ml !== null && ni(Ml, e), Ol !== null && ni(Ol, e), Ul !== null && ni(Ul, e), Hn.forEach(t), Bn.forEach(t);
      for (var l = 0; l < Dl.length; l++) {
        var a = Dl[l];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < Dl.length && (l = Dl[0], l.blockedOn === null); ) kd(l), l.blockedOn === null && Dl.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[it] || null;
        if (typeof u == "function") i || Jd(l);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[it] || null) o = i.formAction;
            else if (As(n) !== null) continue;
          } else o = i.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Jd(l);
        }
      }
    }
    function $d() {
      function e(u) {
        u.canIntercept && u.info === "react-transition" && u.intercept({
          handler: function() {
            return new Promise(function(i) {
              return n = i;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        n !== null && (n(), n = null), a || setTimeout(l, 20);
      }
      function l() {
        if (!a && !navigation.transition) {
          var u = navigation.currentEntry;
          u && u.url != null && navigation.navigate(u.url, {
            state: u.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var a = false, n = null;
        return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
          a = true, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), n !== null && (n(), n = null);
        };
      }
    }
    function Ts(e) {
      this._internalRoot = e;
    }
    ii.prototype.render = Ts.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current, a = Nt();
      Ld(l, a, e, t, null, null);
    }, ii.prototype.unmount = Ts.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Ld(e.current, 2, null, e, null, null), Lu(), t[na] = null;
      }
    };
    function ii(e) {
      this._internalRoot = e;
    }
    ii.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = ar();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var l = 0; l < Dl.length && t !== 0 && t < Dl[l].priority; l++) ;
        Dl.splice(l, 0, e), l === 0 && kd(e);
      }
    };
    var Fd = r.version;
    if (Fd !== "19.2.3") throw Error(f(527, Fd, "19.2.3"));
    B.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
      return e = v(t), e = e !== null ? E(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var fy = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: O,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ci.isDisabled && ci.supportsFiber) try {
        ka = ci.inject(fy), yt = ci;
      } catch {
      }
    }
    return Ln.createRoot = function(e, t) {
      if (!b(e)) throw Error(f(299));
      var l = false, a = "", n = lo, u = ao, i = no;
      return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = qd(e, 1, false, null, null, l, a, null, n, u, i, $d), e[na] = t.current, ss(e), new Ts(t);
    }, Ln.hydrateRoot = function(e, t, l) {
      if (!b(e)) throw Error(f(299));
      var a = false, n = "", u = lo, i = ao, o = no, m = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = qd(e, 1, true, t, l ?? null, a, n, m, u, i, o, $d), t.context = Yd(null), l = t.current, a = Nt(), a = bi(a), n = pl(a), n.callback = null, _l(l, n, a), l = a, t.current.lanes = l, Ja(t, l), Zt(t), e[na] = t.current, ss(e), new ii(t);
    }, Ln.version = "19.2.3", Ln;
  }
  var im;
  function xy() {
    if (im) return Ms.exports;
    im = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (r) {
        console.error(r);
      }
    }
    return s(), Ms.exports = vy(), Ms.exports;
  }
  var Sy = xy();
  const Ny = Tm(Sy), jy = "modulepreload", Ay = function(s, r) {
    return new URL(s, r).href;
  }, cm = {}, Cs = function(r, d, f) {
    let b = Promise.resolve();
    if (d && d.length > 0) {
      let v = function(E) {
        return Promise.all(E.map((C) => Promise.resolve(C).then((L) => ({
          status: "fulfilled",
          value: L
        }), (L) => ({
          status: "rejected",
          reason: L
        }))));
      };
      const p = document.getElementsByTagName("link"), h = document.querySelector("meta[property=csp-nonce]"), _ = (h == null ? void 0 : h.nonce) || (h == null ? void 0 : h.getAttribute("nonce"));
      b = v(d.map((E) => {
        if (E = Ay(E, f), E in cm) return;
        cm[E] = true;
        const C = E.endsWith(".css"), L = C ? '[rel="stylesheet"]' : "";
        if (f) for (let ge = p.length - 1; ge >= 0; ge--) {
          const be = p[ge];
          if (be.href === E && (!C || be.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${E}"]${L}`)) return;
        const P = document.createElement("link");
        if (P.rel = C ? "stylesheet" : jy, C || (P.as = "script"), P.crossOrigin = "", P.href = E, _ && P.setAttribute("nonce", _), document.head.appendChild(P), C) return new Promise((ge, be) => {
          P.addEventListener("load", ge), P.addEventListener("error", () => be(new Error(`Unable to preload CSS for ${E}`)));
        });
      }));
    }
    function S(p) {
      const h = new Event("vite:preloadError", {
        cancelable: true
      });
      if (h.payload = p, window.dispatchEvent(h), !h.defaultPrevented) throw p;
    }
    return b.then((p) => {
      for (const h of p || []) h.status === "rejected" && S(h.reason);
      return r().catch(S);
    });
  };
  const zy = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ty = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, d, f) => f ? f.toUpperCase() : d.toLowerCase()), sm = (s) => {
    const r = Ty(s);
    return r.charAt(0).toUpperCase() + r.slice(1);
  }, Em = (...s) => s.filter((r, d, f) => !!r && r.trim() !== "" && f.indexOf(r) === d).join(" ").trim(), Ey = (s) => {
    for (const r in s) if (r.startsWith("aria-") || r === "role" || r === "title") return true;
  };
  var wy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  };
  const My = re.forwardRef(({ color: s = "currentColor", size: r = 24, strokeWidth: d = 2, absoluteStrokeWidth: f, className: b = "", children: S, iconNode: p, ...h }, _) => re.createElement("svg", {
    ref: _,
    ...wy,
    width: r,
    height: r,
    stroke: s,
    strokeWidth: f ? Number(d) * 24 / Number(r) : d,
    className: Em("lucide", b),
    ...!S && !Ey(h) && {
      "aria-hidden": "true"
    },
    ...h
  }, [
    ...p.map(([v, E]) => re.createElement(v, E)),
    ...Array.isArray(S) ? S : [
      S
    ]
  ]));
  const _e = (s, r) => {
    const d = re.forwardRef(({ className: f, ...b }, S) => re.createElement(My, {
      ref: S,
      iconNode: r,
      className: Em(`lucide-${zy(sm(s))}`, `lucide-${s}`, f),
      ...b
    }));
    return d.displayName = sm(s), d;
  };
  const Oy = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], rm = _e("activity", Oy);
  const Uy = [
    [
      "path",
      {
        d: "M12 7v14",
        key: "1akyts"
      }
    ],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y"
      }
    ]
  ], Dy = _e("book-open", Uy);
  const Cy = [
    [
      "path",
      {
        d: "M10 12h4",
        key: "a56b0p"
      }
    ],
    [
      "path",
      {
        d: "M10 8h4",
        key: "1sr2af"
      }
    ],
    [
      "path",
      {
        d: "M14 21v-3a2 2 0 0 0-4 0v3",
        key: "1rgiei"
      }
    ],
    [
      "path",
      {
        d: "M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",
        key: "secmi2"
      }
    ],
    [
      "path",
      {
        d: "M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",
        key: "16ra0t"
      }
    ]
  ], Ry = _e("building-2", Cy);
  const Hy = [
    [
      "path",
      {
        d: "M12 20v-9",
        key: "1qisl0"
      }
    ],
    [
      "path",
      {
        d: "M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z",
        key: "uouzyp"
      }
    ],
    [
      "path",
      {
        d: "M14.12 3.88 16 2",
        key: "qol33r"
      }
    ],
    [
      "path",
      {
        d: "M21 21a4 4 0 0 0-3.81-4",
        key: "1b0z45"
      }
    ],
    [
      "path",
      {
        d: "M21 5a4 4 0 0 1-3.55 3.97",
        key: "5cxbf6"
      }
    ],
    [
      "path",
      {
        d: "M22 13h-4",
        key: "1jl80f"
      }
    ],
    [
      "path",
      {
        d: "M3 21a4 4 0 0 1 3.81-4",
        key: "1fjd4g"
      }
    ],
    [
      "path",
      {
        d: "M3 5a4 4 0 0 0 3.55 3.97",
        key: "1d7oge"
      }
    ],
    [
      "path",
      {
        d: "M6 13H2",
        key: "82j7cp"
      }
    ],
    [
      "path",
      {
        d: "m8 2 1.88 1.88",
        key: "fmnt4t"
      }
    ],
    [
      "path",
      {
        d: "M9 7.13V6a3 3 0 1 1 6 0v1.13",
        key: "1vgav8"
      }
    ]
  ], By = _e("bug", Hy);
  const qy = [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
      }
    ]
  ], Yy = _e("chevron-down", qy);
  const Ly = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ], Gy = _e("chevron-right", Ly);
  const Xy = [
    [
      "path",
      {
        d: "M12 6v6l4 2",
        key: "mmk7yg"
      }
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ]
  ], Vs = _e("clock", Xy);
  const Qy = [
    [
      "path",
      {
        d: "M12 15V3",
        key: "m9g1x1"
      }
    ],
    [
      "path",
      {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
      }
    ],
    [
      "path",
      {
        d: "m7 10 5 5 5-5",
        key: "brsn70"
      }
    ]
  ], Zy = _e("download", Qy);
  const Vy = [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    [
      "path",
      {
        d: "M14 2v5a1 1 0 0 0 1 1h5",
        key: "wfsgrz"
      }
    ],
    [
      "path",
      {
        d: "M10 9H8",
        key: "b1mrlr"
      }
    ],
    [
      "path",
      {
        d: "M16 13H8",
        key: "t4e002"
      }
    ],
    [
      "path",
      {
        d: "M16 17H8",
        key: "z1uh3a"
      }
    ]
  ], Gs = _e("file-text", Vy);
  const ky = [
    [
      "path",
      {
        d: "m11.9 12.1 4.514-4.514",
        key: "109xqo"
      }
    ],
    [
      "path",
      {
        d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z",
        key: "txyc8t"
      }
    ],
    [
      "path",
      {
        d: "m6 16 2 2",
        key: "16qmzd"
      }
    ],
    [
      "path",
      {
        d: "M8.23 9.85A3 3 0 0 1 11 8a5 5 0 0 1 5 5 3 3 0 0 1-1.85 2.77l-.92.38A2 2 0 0 0 12 18a4 4 0 0 1-4 4 6 6 0 0 1-6-6 4 4 0 0 1 4-4 2 2 0 0 0 1.85-1.23z",
        key: "1de1vg"
      }
    ]
  ], Rs = _e("guitar", ky);
  const Ky = [
    [
      "line",
      {
        x1: "4",
        x2: "20",
        y1: "9",
        y2: "9",
        key: "4lhtct"
      }
    ],
    [
      "line",
      {
        x1: "4",
        x2: "20",
        y1: "15",
        y2: "15",
        key: "vyu0kd"
      }
    ],
    [
      "line",
      {
        x1: "10",
        x2: "8",
        y1: "3",
        y2: "21",
        key: "1ggp8o"
      }
    ],
    [
      "line",
      {
        x1: "16",
        x2: "14",
        y1: "3",
        y2: "21",
        key: "weycgp"
      }
    ]
  ], wm = _e("hash", Ky);
  const Jy = [
    [
      "rect",
      {
        width: "18",
        height: "18",
        x: "3",
        y: "3",
        rx: "2",
        ry: "2",
        key: "1m3agn"
      }
    ],
    [
      "circle",
      {
        cx: "9",
        cy: "9",
        r: "2",
        key: "af1f0g"
      }
    ],
    [
      "path",
      {
        d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",
        key: "1xmnt7"
      }
    ]
  ], $y = _e("image", Jy);
  const Fy = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }
    ],
    [
      "path",
      {
        d: "M12 16v-4",
        key: "1dtifu"
      }
    ],
    [
      "path",
      {
        d: "M12 8h.01",
        key: "e9boi3"
      }
    ]
  ], Wy = _e("info", Fy);
  const Iy = [
    [
      "path",
      {
        d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
        key: "1s6t7t"
      }
    ],
    [
      "circle",
      {
        cx: "16.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "w0ekpg"
      }
    ]
  ], fm = _e("key-round", Iy);
  const Py = [
    [
      "path",
      {
        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
        key: "1cjeqo"
      }
    ],
    [
      "path",
      {
        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
        key: "19qd67"
      }
    ]
  ], eg = _e("link", Py);
  const tg = [
    [
      "path",
      {
        d: "m16 17 5-5-5-5",
        key: "1bji2h"
      }
    ],
    [
      "path",
      {
        d: "M21 12H9",
        key: "dn1m92"
      }
    ],
    [
      "path",
      {
        d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
        key: "1uf3rs"
      }
    ]
  ], Hs = _e("log-out", tg);
  const lg = [
    [
      "path",
      {
        d: "M12 19v3",
        key: "npa21l"
      }
    ],
    [
      "path",
      {
        d: "M19 10v2a7 7 0 0 1-14 0v-2",
        key: "1vc78b"
      }
    ],
    [
      "rect",
      {
        x: "9",
        y: "2",
        width: "6",
        height: "13",
        rx: "3",
        key: "s6n7sd"
      }
    ]
  ], Bs = _e("mic", lg);
  const ag = [
    [
      "rect",
      {
        width: "20",
        height: "14",
        x: "2",
        y: "3",
        rx: "2",
        key: "48i651"
      }
    ],
    [
      "line",
      {
        x1: "8",
        x2: "16",
        y1: "21",
        y2: "21",
        key: "1svkeh"
      }
    ],
    [
      "line",
      {
        x1: "12",
        x2: "12",
        y1: "17",
        y2: "21",
        key: "vw1qmm"
      }
    ]
  ], ng = _e("monitor", ag);
  const ug = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], ig = _e("moon", ug);
  const cg = [
    [
      "circle",
      {
        cx: "12",
        cy: "18",
        r: "4",
        key: "m3r9ws"
      }
    ],
    [
      "path",
      {
        d: "M16 18V2",
        key: "40x2m5"
      }
    ]
  ], sg = _e("music-3", cg);
  const rg = [
    [
      "path",
      {
        d: "M9 18V5l12-2v13",
        key: "1jmyc2"
      }
    ],
    [
      "circle",
      {
        cx: "6",
        cy: "18",
        r: "3",
        key: "fqmcym"
      }
    ],
    [
      "circle",
      {
        cx: "18",
        cy: "16",
        r: "3",
        key: "1hluhg"
      }
    ]
  ], Za = _e("music", rg);
  const fg = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], og = _e("play", fg);
  const dg = [
    [
      "path",
      {
        d: "M5 12h14",
        key: "1ays0h"
      }
    ],
    [
      "path",
      {
        d: "M12 5v14",
        key: "s699le"
      }
    ]
  ], zt = _e("plus", dg);
  const mg = [
    [
      "path",
      {
        d: "M21 9a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 15 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2z",
        key: "1dfntj"
      }
    ],
    [
      "path",
      {
        d: "M15 3v5a1 1 0 0 0 1 1h5",
        key: "6s6qgf"
      }
    ]
  ], hg = _e("sticky-note", mg);
  const yg = [
    [
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "4",
        key: "4exip2"
      }
    ],
    [
      "path",
      {
        d: "M12 2v2",
        key: "tus03m"
      }
    ],
    [
      "path",
      {
        d: "M12 20v2",
        key: "1lh1kg"
      }
    ],
    [
      "path",
      {
        d: "m4.93 4.93 1.41 1.41",
        key: "149t6j"
      }
    ],
    [
      "path",
      {
        d: "m17.66 17.66 1.41 1.41",
        key: "ptbguv"
      }
    ],
    [
      "path",
      {
        d: "M2 12h2",
        key: "1t8f8n"
      }
    ],
    [
      "path",
      {
        d: "M20 12h2",
        key: "1q8mjw"
      }
    ],
    [
      "path",
      {
        d: "m6.34 17.66-1.41 1.41",
        key: "1m8zz5"
      }
    ],
    [
      "path",
      {
        d: "m19.07 4.93-1.41 1.41",
        key: "1shlcs"
      }
    ]
  ], gg = _e("sun", yg);
  const bg = [
    [
      "path",
      {
        d: "M10 11v6",
        key: "nco0om"
      }
    ],
    [
      "path",
      {
        d: "M14 11v6",
        key: "outv1u"
      }
    ],
    [
      "path",
      {
        d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",
        key: "miytrc"
      }
    ],
    [
      "path",
      {
        d: "M3 6h18",
        key: "d0wm0j"
      }
    ],
    [
      "path",
      {
        d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",
        key: "e791ji"
      }
    ]
  ], mt = _e("trash-2", bg);
  const pg = [
    [
      "path",
      {
        d: "M16 7h6v6",
        key: "box55l"
      }
    ],
    [
      "path",
      {
        d: "m22 7-8.5 8.5-5-5L2 17",
        key: "1t1m79"
      }
    ]
  ], om = _e("trending-up", pg);
  const _g = [
    [
      "path",
      {
        d: "M12 3v12",
        key: "1x0j5s"
      }
    ],
    [
      "path",
      {
        d: "m17 8-5-5-5 5",
        key: "7q97r8"
      }
    ],
    [
      "path",
      {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
      }
    ]
  ], Mm = _e("upload", _g);
  const vg = [
    [
      "path",
      {
        d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
        key: "975kel"
      }
    ],
    [
      "circle",
      {
        cx: "12",
        cy: "7",
        r: "4",
        key: "17ys0d"
      }
    ]
  ], xg = _e("user", vg);
  const Sg = [
    [
      "path",
      {
        d: "M18 21a8 8 0 0 0-16 0",
        key: "3ypg7q"
      }
    ],
    [
      "circle",
      {
        cx: "10",
        cy: "8",
        r: "5",
        key: "o932ke"
      }
    ],
    [
      "path",
      {
        d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",
        key: "10s06x"
      }
    ]
  ], Ng = _e("users-round", Sg);
  function jg({ file: s, onFileUpload: r, isParsingMetadata: d = false, metadataSummary: f }) {
    const b = (S) => {
      var _a;
      r(((_a = S.target.files) == null ? void 0 : _a[0]) || null);
    };
    return c.jsxs("div", {
      className: "space-y-3",
      children: [
        c.jsx("label", {
          className: "micro-label",
          children: "Upload flo\u2122 File"
        }),
        c.jsxs("label", {
          className: "group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/10",
          "aria-busy": d,
          children: [
            c.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                c.jsx("div", {
                  className: "rounded-full bg-primary/15 p-2 text-primary",
                  children: c.jsx(Gs, {
                    className: "h-4 w-4 icon-accent"
                  })
                }),
                c.jsxs("div", {
                  children: [
                    c.jsx("p", {
                      className: "font-semibold",
                      children: "Drop or browse your .flo file"
                    }),
                    c.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "All metadata editing happens locally."
                    })
                  ]
                })
              ]
            }),
            c.jsx("span", {
              className: "btn",
              "data-variant": "solid",
              "data-tone": "primary",
              "data-size": "xs",
              children: "Browse"
            }),
            c.jsx("input", {
              type: "file",
              accept: ".flo",
              onChange: b,
              className: "sr-only"
            })
          ]
        }),
        s && c.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            c.jsx(Gs, {
              className: "h-4 w-4 icon-accent"
            }),
            c.jsxs("div", {
              className: "flex flex-col",
              children: [
                c.jsx("span", {
                  className: "font-medium",
                  children: s.name
                }),
                c.jsxs("span", {
                  className: "text-xs text-muted-foreground",
                  children: [
                    "Ready to tag \xB7 ",
                    (s.size / (1024 * 1024)).toFixed(2),
                    " MB"
                  ]
                })
              ]
            })
          ]
        }),
        s && c.jsx("div", {
          className: "text-xs text-muted-foreground",
          children: d ? c.jsxs("span", {
            className: "flex items-center gap-2 text-primary",
            children: [
              c.jsx("span", {
                className: "h-1.5 w-1.5 animate-ping rounded-full bg-primary",
                "aria-hidden": "true"
              }),
              "Reading embedded tags..."
            ]
          }) : f ? c.jsx("span", {
            className: "text-foreground/70",
            children: f
          }) : null
        })
      ]
    });
  }
  function Ag({ musicianCredits: s = [], onMusicianCreditsChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          instrument: "",
          name: ""
        }
      ]);
    }, f = (S, p, h) => {
      const _ = [
        ...s
      ];
      _[S] = {
        ..._[S],
        [p]: h
      }, r(_);
    }, b = (S) => {
      r(s.filter((p, h) => h !== S));
    };
    return c.jsxs("div", {
      className: "space-y-3 mt-6",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2",
                  children: "Other Musician Credits"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-0.5",
                  children: "Credit instruments and performers"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Musician"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-2",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-4",
            children: [
              c.jsx(sg, {
                className: "h-8 w-8 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No musician credits added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Musician" to start'
              })
            ]
          }) : s.map((S, p) => c.jsxs("div", {
            className: "flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3",
            children: [
              c.jsx("input", {
                type: "text",
                value: S.instrument,
                onChange: (h) => f(p, "instrument", h.target.value),
                placeholder: "Instrument",
                className: "w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "text",
                value: S.name,
                onChange: (h) => f(p, "name", h.target.value),
                placeholder: "Performer Name",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 128
              }),
              c.jsx("button", {
                onClick: () => b(p),
                type: "button",
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                children: c.jsx(mt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, p))
        })
      ]
    });
  }
  const dm = [
    {
      key: "title",
      label: "Title",
      placeholder: "Song title"
    },
    {
      key: "subtitle",
      label: "Subtitle",
      placeholder: "Remastered, feat. guest, etc."
    },
    {
      key: "artist",
      label: "Artist",
      placeholder: "Primary artist"
    },
    {
      key: "album",
      label: "Album",
      placeholder: "Album name"
    },
    {
      key: "set_subtitle",
      label: "Set Subtitle",
      placeholder: "Deluxe Edition, Disc 2..."
    },
    {
      key: "album_artist",
      label: "Album Artist",
      placeholder: "Various Artists"
    },
    {
      key: "genre",
      label: "Genre",
      placeholder: "Electronic"
    },
    {
      key: "year",
      label: "Year",
      placeholder: "2025",
      type: "number"
    }
  ], mm = [
    {
      key: "original_release_time",
      label: "Original Release Date",
      placeholder: "YYYY-MM-DD"
    },
    {
      key: "track_number",
      label: "Track Number",
      placeholder: "04",
      type: "number"
    },
    {
      key: "track_total",
      label: "Total Tracks",
      placeholder: "12",
      type: "number"
    },
    {
      key: "disc_number",
      label: "Disc Number",
      placeholder: "1",
      type: "number"
    },
    {
      key: "disc_total",
      label: "Total Discs",
      placeholder: "2",
      type: "number"
    },
    {
      key: "bpm",
      label: "BPM",
      placeholder: "118",
      type: "number"
    },
    {
      key: "key",
      label: "Key",
      placeholder: "A Minor"
    },
    {
      key: "isrc",
      label: "ISRC",
      placeholder: "US-ABC-24-00001"
    }
  ], hm = [
    {
      key: "composer",
      label: "Composer",
      placeholder: "Composer name"
    },
    {
      key: "lyricist",
      label: "Lyricist",
      placeholder: "Lyric writer"
    },
    {
      key: "publisher",
      label: "Publisher",
      placeholder: "Label / Publisher"
    },
    {
      key: "remixer",
      label: "Remixer",
      placeholder: "If this is a remix"
    },
    {
      key: "copyright",
      label: "Copyright",
      placeholder: "\u2117 & \xA9 info"
    },
    {
      key: "produced_notice",
      label: "Produced Notice",
      placeholder: "\u2117 2025 Label Inc."
    },
    {
      key: "mood",
      label: "Mood",
      placeholder: "Euphoric night drive"
    }
  ], ym = [
    {
      key: "url_commercial",
      label: "Commercial URL",
      placeholder: "https://example.com/buy",
      colSpan: "full"
    },
    {
      key: "url_copyright",
      label: "Copyright URL",
      placeholder: "https://example.com/copyright",
      colSpan: "full"
    },
    {
      key: "url_artist",
      label: "Artist URL",
      placeholder: "https://artist.com",
      colSpan: "full"
    },
    {
      key: "url_publisher",
      label: "Publisher URL",
      placeholder: "https://publisher.com",
      colSpan: "full"
    }
  ];
  function zg({ metadata: s, onMetadataChange: r }) {
    var _a, _b2;
    const d = Object.values(s).filter((S) => typeof S == "string" && S.trim().length > 0).length, f = dm.length + mm.length + hm.length + ym.length + 1, b = ({ key: S, label: p, placeholder: h, type: _, colSpan: v }) => {
      const E = s[S], C = typeof E == "string" || typeof E == "number" ? E : "";
      return c.jsxs("div", {
        className: `space-y-2 ${v === "full" ? "md:col-span-2" : ""}`,
        children: [
          c.jsx("label", {
            htmlFor: S,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: p
          }),
          c.jsx("input", {
            id: S,
            value: C,
            onChange: (L) => r(S, _ === "number" ? parseInt(L.target.value) || void 0 : L.target.value),
            placeholder: h,
            type: _ ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, S);
    };
    return c.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Metadata"
                }),
                c.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Basic Tags"
                })
              ]
            }),
            c.jsxs("div", {
              className: "text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80",
              children: [
                d,
                " / ",
                f,
                " fields filled"
              ]
            })
          ]
        }),
        c.jsxs("div", {
          className: "space-y-8",
          children: [
            c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Essentials"
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: dm.map(b)
                })
              ]
            }),
            c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Release Details"
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: mm.map(b)
                })
              ]
            }),
            c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Credits & Codes"
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: hm.map(b)
                })
              ]
            }),
            c.jsx(Ag, {
              musicianCredits: (s.musician_credits ?? []).map(([S, p]) => ({
                instrument: S,
                name: p
              })),
              onMusicianCreditsChange: (S) => r("musician_credits", S.map(({ instrument: p, name: h }) => [
                p,
                h
              ]))
            }),
            c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Links"
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: ym.map(b)
                })
              ]
            })
          ]
        }),
        c.jsxs("div", {
          className: "mt-8 space-y-2",
          children: [
            c.jsx("label", {
              htmlFor: "comment",
              className: "text-sm font-semibold tracking-wide text-foreground/80",
              children: "Comments"
            }),
            c.jsx("textarea", {
              id: "comment",
              rows: 4,
              value: ((_b2 = (_a = s.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b2.text) || "",
              onChange: (S) => r("comments", [
                {
                  text: S.target.value
                }
              ]),
              placeholder: "Liner notes, sample credits, or short story behind the track...",
              className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        })
      ]
    });
  }
  const gm = [
    {
      value: "cover_front",
      label: "Front Cover"
    },
    {
      value: "cover_back",
      label: "Back Cover"
    },
    {
      value: "leaflet_page",
      label: "Leaflet Page"
    },
    {
      value: "media",
      label: "Media (Label/CD)"
    },
    {
      value: "lead_artist",
      label: "Lead Artist"
    },
    {
      value: "artist",
      label: "Artist"
    },
    {
      value: "conductor",
      label: "Conductor"
    },
    {
      value: "band",
      label: "Band"
    },
    {
      value: "composer",
      label: "Composer"
    },
    {
      value: "lyricist",
      label: "Lyricist"
    },
    {
      value: "recording_location",
      label: "Recording Location"
    },
    {
      value: "during_recording",
      label: "During Recording"
    },
    {
      value: "during_performance",
      label: "During Performance"
    },
    {
      value: "video_screen_capture",
      label: "Video Screen Capture"
    },
    {
      value: "bright_coloured_fish",
      label: "Bright Coloured Fish \u{1F41F}"
    },
    {
      value: "illustration",
      label: "Illustration"
    },
    {
      value: "band_logo",
      label: "Band Logo"
    },
    {
      value: "publisher_logo",
      label: "Publisher Logo"
    },
    {
      value: "file_icon",
      label: "File Icon (32x32 PNG)"
    },
    {
      value: "other_file_icon",
      label: "Other File Icon"
    },
    {
      value: "other",
      label: "Other"
    }
  ], Tg = [
    {
      value: "standard",
      label: "Standard"
    },
    {
      value: "explicit",
      label: "Explicit"
    },
    {
      value: "clean",
      label: "Clean"
    },
    {
      value: "remix",
      label: "Remix"
    },
    {
      value: "deluxe",
      label: "Deluxe"
    },
    {
      value: "limited",
      label: "Limited"
    },
    {
      value: "vinyl",
      label: "Vinyl"
    },
    {
      value: "cassette",
      label: "Cassette"
    },
    {
      value: "digital",
      label: "Digital"
    }
  ];
  function Eg({ pictures: s = [], onPicturesChange: r, coverVariants: d = [], onCoverVariantsChange: f, animatedCover: b, onAnimatedCoverChange: S }) {
    const p = async (J, Z) => {
      var _a, _b2;
      const $ = (_a = J.target.files) == null ? void 0 : _a[0];
      if ($) {
        if (!$.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if ($.size > 10485760) {
          alert("Image size must be less than 10MB");
          return;
        }
        const G = await $.arrayBuffer(), fe = new Uint8Array(G), Ke = {
          mime_type: $.type,
          picture_type: Z,
          description: `${(_b2 = gm.find((I) => I.value === Z)) == null ? void 0 : _b2.label} Art`,
          data: fe
        }, De = s.filter((I) => I.picture_type !== Z);
        De.push(Ke), r(De);
      }
    }, h = (J) => {
      r(s.filter((Z) => Z.picture_type !== J));
    }, _ = () => {
      f([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, v = async (J, Z) => {
      var _a;
      const $ = (_a = Z.target.files) == null ? void 0 : _a[0];
      if ($) {
        if (!$.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const G = await $.arrayBuffer(), fe = [
          ...d
        ];
        fe[J].data = new Uint8Array(G), fe[J].mime_type = $.type, f(fe);
      }
    }, E = (J, Z, $) => {
      const G = [
        ...d
      ];
      G[J] = {
        ...G[J],
        [Z]: $
      }, f(G);
    }, C = (J) => {
      f(d.filter((Z, $) => $ !== J));
    }, L = async (J) => {
      var _a;
      const Z = (_a = J.target.files) == null ? void 0 : _a[0];
      if (Z) {
        if (!Z.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const $ = await Z.arrayBuffer(), G = new Uint8Array($), fe = {
          mime_type: Z.type,
          data: G,
          duration_ms: 3e3,
          loop_count: 0
        };
        S(fe);
      }
    }, P = (J, Z) => {
      b && S({
        ...b,
        [J]: Z
      });
    }, ge = () => {
      S(void 0);
    }, be = (J, Z) => URL.createObjectURL(new Blob([
      J
    ], {
      type: Z
    }));
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4",
          children: [
            c.jsx("p", {
              className: "micro-label",
              children: "Artwork"
            }),
            c.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Album Art & Covers"
            }),
            c.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Manage covers, variants, and animated art"
            })
          ]
        }),
        c.jsxs("div", {
          className: "space-y-8",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Standard Covers"
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: gm.map(({ value: J, label: Z }) => {
                    const $ = s.find((G) => G.picture_type === J);
                    return c.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: $ ? c.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          c.jsx("img", {
                            src: be($.data, $.mime_type),
                            alt: Z,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          c.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-sm font-medium",
                                children: Z
                              }),
                              c.jsx("button", {
                                onClick: () => h(J),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: c.jsx(mt, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : c.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          c.jsx(zt, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          c.jsx("span", {
                            className: "text-xs font-medium",
                            children: Z
                          }),
                          c.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (G) => p(G, J),
                            className: "hidden"
                          })
                        ]
                      })
                    }, J);
                  })
                })
              ]
            }),
            c.jsxs("div", {
              children: [
                c.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    c.jsx("h3", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Cover Variants"
                    }),
                    c.jsxs("button", {
                      onClick: _,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        c.jsx(zt, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Variant"
                      ]
                    })
                  ]
                }),
                c.jsx("div", {
                  className: "space-y-3",
                  children: d.length === 0 ? c.jsxs("div", {
                    className: "text-center text-muted-foreground py-4",
                    children: [
                      c.jsx($y, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      c.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : d.map((J, Z) => c.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          c.jsx("select", {
                            value: J.variant_type,
                            onChange: ($) => E(Z, "variant_type", $.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: Tg.map(({ value: $, label: G }) => c.jsx("option", {
                              value: $,
                              children: G
                            }, $))
                          }),
                          c.jsx("input", {
                            value: J.description || "",
                            onChange: ($) => E(Z, "description", $.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          c.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              c.jsx(Mm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              c.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: ($) => v(Z, $),
                                className: "hidden"
                              })
                            ]
                          }),
                          c.jsx("button", {
                            onClick: () => C(Z),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: c.jsx(mt, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      J.data.length > 0 && c.jsx("img", {
                        src: be(J.data, J.mime_type),
                        alt: J.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, Z))
                })
              ]
            }),
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Animated Cover"
                }),
                b ? c.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    c.jsx("img", {
                      src: be(b.data, b.mime_type),
                      alt: "Animated Cover",
                      className: "w-32 h-32 object-cover rounded-lg border"
                    }),
                    c.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        c.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            c.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Duration (ms)"
                            }),
                            c.jsx("input", {
                              type: "number",
                              value: b.duration_ms || 0,
                              onChange: (J) => P("duration_ms", parseInt(J.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        }),
                        c.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            c.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Loop Count"
                            }),
                            c.jsx("input", {
                              type: "number",
                              value: b.loop_count || 0,
                              onChange: (J) => P("loop_count", parseInt(J.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    c.jsxs("button", {
                      onClick: ge,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        c.jsx(mt, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : c.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    c.jsx(og, {
                      className: "h-8 w-8 icon-accent"
                    }),
                    c.jsxs("div", {
                      children: [
                        c.jsx("p", {
                          className: "font-semibold",
                          children: "Upload Animated Cover"
                        }),
                        c.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "WebP or GIF for animation"
                        })
                      ]
                    }),
                    c.jsx("input", {
                      type: "file",
                      accept: "image/webp,image/gif",
                      onChange: L,
                      className: "hidden"
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function wg() {
    return {
      parseLRCFormat: (r) => {
        const d = r.split(`
`), f = [];
        return d.forEach((b) => {
          const S = b.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (S) {
            const p = parseInt(S[1]), h = parseInt(S[2]), _ = parseInt(S[3]), v = p * 60 * 1e3 + h * 1e3 + _ * 10, E = S[4].trim();
            f.push([
              E,
              v
            ]);
          }
        }), f.sort((b, S) => b[1] - S[1]), f;
      }
    };
  }
  const bm = {
    language: "eng",
    content_type: "lyrics",
    description: "",
    lines: []
  };
  function Mg({ syncedLyrics: s = [], onSyncedLyricsChange: r, unsyncedLyrics: d = [], onUnsyncedLyricsChange: f }) {
    var _a, _b2;
    const [b, S] = re.useState(0), [p, h] = re.useState(""), [_, v] = re.useState(false), E = re.useRef(null), { parseLRCFormat: C } = wg(), L = s[b] || bm, P = d[b] ?? "", ge = () => {
      const V = [
        ...s,
        {
          ...bm
        }
      ];
      r(V), f([
        ...d,
        ""
      ]), S(V.length - 1), h("");
    }, be = (V) => {
      if (s.length < 2) return;
      const le = s.filter((ut, $e) => $e !== V), ve = d.filter((ut, $e) => $e !== V), nt = V > 0 ? V - 1 : 0;
      r(le), f(ve), S(nt), h("");
    }, J = (V) => {
      S(V), h("");
    }, Z = (V, le) => {
      const ve = [
        ...s
      ];
      ve[b] = {
        ...ve[b],
        [V]: le
      }, r(ve);
    }, $ = (V) => {
      const le = [
        ...d
      ];
      le[b] = V, f(le);
    }, G = () => {
      const V = [
        ...s
      ];
      V[b].lines.push({
        text: "",
        timestamp_ms: 0
      }), r(V);
    }, fe = (V, le, ve) => {
      const nt = [
        ...s
      ];
      nt[b].lines[V] = {
        text: le,
        timestamp_ms: ve
      }, r(nt);
    }, Ke = (V) => {
      const le = [
        ...s
      ];
      le[b].lines.splice(V, 1), r(le);
    }, De = () => {
      const V = C(p);
      V.length && (Z("lines", V.map(([le, ve]) => ({
        text: le,
        timestamp_ms: ve
      }))), v(false), h(""));
    }, I = async (V) => {
      var _a2;
      const le = (_a2 = V.target.files) == null ? void 0 : _a2[0];
      if (!le) return;
      const ve = await le.text();
      h(ve), v(true), V.target.value = "";
    }, qe = (L.lines || []).map((V) => V.text).join(`
`), Je = () => c.jsxs("div", {
      className: "flex flex-wrap gap-2 mb-3",
      children: [
        s.map((V, le) => c.jsxs("button", {
          type: "button",
          onClick: () => J(le),
          className: `btn px-3 py-1 text-xs ${b === le ? "bg-primary/20 border-primary" : "bg-background border-input/50"} border rounded-full`,
          "data-variant": b === le ? "solid" : "soft",
          children: [
            V.language || "eng",
            " / ",
            V.content_type || "lyrics",
            s.length > 1 && c.jsx("span", {
              className: "ml-1 text-danger cursor-pointer",
              title: "Delete group",
              onClick: (ve) => {
                ve.stopPropagation(), be(le);
              },
              children: c.jsx(mt, {
                className: "inline h-3 w-3"
              })
            })
          ]
        }, le)),
        c.jsxs("button", {
          type: "button",
          className: "btn",
          "data-variant": "soft",
          "data-tone": "primary",
          "data-size": "xs",
          onClick: ge,
          children: [
            c.jsx(zt, {
              className: "h-4 w-4 icon-accent"
            }),
            " Add group"
          ]
        })
      ]
    });
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4",
          children: [
            c.jsxs("div", {
              className: "flex items-center justify-between gap-2 mb-1",
              children: [
                c.jsxs("div", {
                  children: [
                    c.jsx("p", {
                      className: "micro-label",
                      children: "Lyrics"
                    }),
                    c.jsx("h2", {
                      className: "text-xl font-semibold",
                      children: "Lyrics & Sync"
                    })
                  ]
                }),
                c.jsxs("span", {
                  className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
                  children: [
                    ((_a = L.lines) == null ? void 0 : _a.length) || 0,
                    " entries"
                  ]
                })
              ]
            }),
            Je()
          ]
        }),
        c.jsxs("div", {
          className: "space-y-4",
          children: [
            c.jsxs("div", {
              className: "flex gap-2 mb-2",
              children: [
                c.jsx("input", {
                  ref: E,
                  type: "file",
                  accept: ".lrc,text/plain",
                  style: {
                    display: "none"
                  },
                  onChange: I
                }),
                c.jsxs("button", {
                  type: "button",
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "primary",
                  "data-size": "sm",
                  onClick: () => {
                    var _a2;
                    return (_a2 = E.current) == null ? void 0 : _a2.click();
                  },
                  children: [
                    c.jsx(Gs, {
                      className: "h-4 w-4 icon-accent"
                    }),
                    "Upload LRC file"
                  ]
                }),
                c.jsxs("button", {
                  type: "button",
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "primary",
                  "data-size": "sm",
                  onClick: () => v((V) => !V),
                  children: [
                    c.jsx(Mm, {
                      className: "h-4 w-4 icon-accent"
                    }),
                    "Paste LRC text"
                  ]
                })
              ]
            }),
            _ && c.jsxs("div", {
              className: "space-y-2 mb-2",
              children: [
                c.jsx("label", {
                  className: "block text-sm font-semibold text-foreground/80 mb-1",
                  children: "Paste or edit LRC content:"
                }),
                c.jsx("textarea", {
                  value: p,
                  onChange: (V) => h(V.target.value),
                  rows: 4,
                  placeholder: "[00:01.40]First line\\n[00:08.50]Next line",
                  className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono"
                }),
                c.jsx("button", {
                  type: "button",
                  className: "btn",
                  "data-variant": "solid",
                  "data-tone": "primary",
                  "data-size": "sm",
                  onClick: De,
                  disabled: !p.trim(),
                  children: "Convert & Import to current group"
                })
              ]
            }),
            c.jsxs("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-2",
              children: [
                c.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    c.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Language"
                    }),
                    c.jsx("input", {
                      value: L.language || "",
                      onChange: (V) => Z("language", V.target.value),
                      placeholder: "eng",
                      maxLength: 3,
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest"
                    })
                  ]
                }),
                c.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    c.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Content Type"
                    }),
                    c.jsxs("select", {
                      value: L.content_type || "lyrics",
                      onChange: (V) => Z("content_type", V.target.value),
                      className: "w-full border border-input/80 bg-background/50 rounded-md px-3 py-2 text-sm",
                      children: [
                        c.jsx("option", {
                          value: "lyrics",
                          children: "Lyrics"
                        }),
                        c.jsx("option", {
                          value: "other",
                          children: "Other"
                        }),
                        c.jsx("option", {
                          value: "text_transcription",
                          children: "Text transcription"
                        }),
                        c.jsx("option", {
                          value: "part_name",
                          children: "Part name"
                        }),
                        c.jsx("option", {
                          value: "events",
                          children: "Events"
                        }),
                        c.jsx("option", {
                          value: "chord",
                          children: "Chord"
                        }),
                        c.jsx("option", {
                          value: "trivia",
                          children: "Trivia"
                        }),
                        c.jsx("option", {
                          value: "webpage_url",
                          children: "Webpage URL"
                        }),
                        c.jsx("option", {
                          value: "image_url",
                          children: "Image URL"
                        })
                      ]
                    })
                  ]
                }),
                c.jsxs("div", {
                  className: "space-y-2 md:col-span-2",
                  children: [
                    c.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        c.jsx("label", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Unsynced Lyrics"
                        }),
                        c.jsx("span", {
                          className: "text-xs text-muted-foreground text-right",
                          children: "Leave blank to auto-fill from the synced lines above."
                        })
                      ]
                    }),
                    c.jsx("textarea", {
                      value: P || qe,
                      onChange: (V) => $(V.target.value),
                      rows: 4,
                      placeholder: "Paste the full lyric sheet if you don\u2019t need timestamps.",
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono"
                    })
                  ]
                })
              ]
            }),
            c.jsxs("div", {
              className: "space-y-3",
              children: [
                c.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    c.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Timeline Entries"
                    }),
                    c.jsxs("button", {
                      onClick: G,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      type: "button",
                      children: [
                        c.jsx(zt, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                c.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b2 = L.lines) == null ? void 0 : _b2.map((V, le) => c.jsx(Og, {
                    index: le,
                    text: V.text,
                    timestamp: V.timestamp_ms,
                    onUpdate: fe,
                    onDelete: Ke
                  }, le))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Og({ index: s, text: r, timestamp: d, onUpdate: f, onDelete: b }) {
    return c.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        c.jsx("input", {
          value: r,
          onChange: (S) => f(s, S.target.value, d),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm"
        }),
        c.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            c.jsx(Vs, {
              className: "h-4 w-4 icon-accent"
            }),
            c.jsx("input", {
              type: "number",
              value: d,
              onChange: (S) => f(s, r, parseInt(S.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm"
            })
          ]
        }),
        c.jsx("button", {
          onClick: () => b(s),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          type: "button",
          children: c.jsx(mt, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  const pm = [
    {
      value: "intro",
      label: "Intro",
      icon: Za
    },
    {
      value: "verse",
      label: "Verse",
      icon: Dy
    },
    {
      value: "pre_chorus",
      label: "Pre-Chorus",
      icon: Bs
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: Bs
    },
    {
      value: "post_chorus",
      label: "Post-Chorus",
      icon: Bs
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: Ry
    },
    {
      value: "breakdown",
      label: "Breakdown",
      icon: Rs
    },
    {
      value: "drop",
      label: "Drop",
      icon: Hs
    },
    {
      value: "buildup",
      label: "Buildup",
      icon: Hs
    },
    {
      value: "solo",
      label: "Solo",
      icon: Rs
    },
    {
      value: "instrumental",
      label: "Instrumental",
      icon: Rs
    },
    {
      value: "outro",
      label: "Outro",
      icon: Hs
    },
    {
      value: "silence",
      label: "Silence",
      icon: Vs
    },
    {
      value: "other",
      label: "Other",
      icon: Za
    }
  ];
  function Ug({ sectionMarkers: s = [], onSectionMarkersChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, f = (p, h, _) => {
      const v = [
        ...s
      ];
      v[p] = {
        ...v[p],
        [h]: _
      }, r(v);
    }, b = (p) => {
      r(s.filter((h, _) => _ !== p));
    }, S = (p) => {
      const h = Math.floor(p / 1e3), _ = Math.floor(h / 60), v = h % 60, E = Math.floor(p % 1e3 / 10);
      return `${_}:${v.toString().padStart(2, "0")}.${E.toString().padStart(2, "0")}`;
    };
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Timing"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Section Markers"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Mark song sections for better playback"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Marker"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(Za, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No section markers added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Marker" to start'
              })
            ]
          }) : s.map((p, h) => {
            var _a;
            const v = ((_a = pm.find((E) => E.value === p.section_type)) == null ? void 0 : _a.icon) || Za;
            return c.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                c.jsx(v, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                c.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    c.jsx(Vs, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: p.timestamp_ms,
                      onChange: (E) => f(h, "timestamp_ms", Math.max(0, parseInt(E.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    c.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        S(p.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                c.jsx("select", {
                  value: p.section_type,
                  onChange: (E) => f(h, "section_type", E.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: pm.map(({ value: E, label: C }) => c.jsx("option", {
                    value: E,
                    children: C
                  }, E))
                }),
                c.jsx("input", {
                  value: p.label || "",
                  onChange: (E) => f(h, "label", E.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                c.jsx("button", {
                  onClick: () => b(h),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: c.jsx(mt, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, h);
          })
        })
      ]
    });
  }
  function Dg({ bpmMap: s = [], onBpmMapChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, f = (h, _, v) => {
      const E = [
        ...s
      ];
      E[h] = {
        ...E[h],
        [_]: v
      }, r(E);
    }, b = (h) => {
      r(s.filter((_, v) => v !== h));
    }, S = (h) => {
      const _ = Math.floor(h / 1e3), v = Math.floor(_ / 60), E = _ % 60;
      return `${v}:${E.toString().padStart(2, "0")}`;
    }, p = [
      ...s
    ].sort((h, _) => h.timestamp_ms - _.timestamp_ms);
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "BPM Map"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track tempo changes over time"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: p.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(om, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No BPM changes added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : c.jsxs(c.Fragment, {
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  c.jsx(rm, {
                    className: "h-4 w-4"
                  }),
                  c.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      p.map((h, _) => `${S(h.timestamp_ms)} \u2192 ${h.bpm} BPM${_ < p.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              p.map((h, _) => c.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      c.jsx(rm, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: h.timestamp_ms,
                        onChange: (v) => f(_, "timestamp_ms", Math.max(0, parseInt(v.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          S(h.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c.jsx(om, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: h.bpm,
                        onChange: (v) => f(_, "bpm", Math.max(1, parseFloat(v.target.value) || 120)),
                        placeholder: "BPM",
                        step: "0.1",
                        className: "w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "BPM"
                      })
                    ]
                  }),
                  c.jsx("button", {
                    onClick: () => b(_),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: c.jsx(mt, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, _))
            ]
          })
        })
      ]
    });
  }
  function Cg({ keyChanges: s = [], onKeyChangesChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: 0,
          key: ""
        }
      ]);
    }, f = (h, _, v) => {
      const E = [
        ...s
      ];
      E[h] = {
        ...E[h],
        [_]: v
      }, r(E);
    }, b = (h) => {
      r(s.filter((_, v) => v !== h));
    }, S = (h) => {
      const _ = Math.floor(h / 1e3), v = Math.floor(_ / 60), E = _ % 60;
      return `${v}:${E.toString().padStart(2, "0")}`;
    }, p = [
      ...s
    ].sort((h, _) => h.timestamp_ms - _.timestamp_ms);
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Key Changes"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track musical key changes over time (e.g. C, F#m, D\u266D)"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: p.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(fm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No key changes added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : c.jsxs(c.Fragment, {
            children: [
              c.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  c.jsx(wm, {
                    className: "h-4 w-4"
                  }),
                  c.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      p.map((h, _) => `${S(h.timestamp_ms)} \u2192 ${h.key || "?"}${_ < p.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              p.map((h, _) => c.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      c.jsx(fm, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: h.timestamp_ms,
                        onChange: (v) => f(_, "timestamp_ms", Math.max(0, parseInt(v.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          S(h.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  c.jsx("div", {
                    className: "flex items-center gap-2",
                    children: c.jsx("input", {
                      type: "text",
                      value: h.key,
                      onChange: (v) => f(_, "key", v.target.value),
                      placeholder: "Key (e.g. C#m)",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    })
                  }),
                  c.jsx("button", {
                    onClick: () => b(_),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    type: "button",
                    children: c.jsx(mt, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, _))
            ]
          })
        })
      ]
    });
  }
  function Rg({ popularimeter: s, onChange: r }) {
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4",
          children: [
            c.jsx("p", {
              className: "micro-label",
              children: "Stats"
            }),
            c.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Popularity & Usage"
            }),
            c.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Track ratings and play count (for history or sync)"
            })
          ]
        }),
        c.jsxs("div", {
          className: "flex flex-col gap-4 sm:flex-row sm:items-end",
          children: [
            c.jsxs("div", {
              className: "flex flex-col gap-2 flex-1",
              children: [
                c.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "User Email"
                }),
                c.jsx("input", {
                  type: "email",
                  className: "w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50",
                  value: s.email || "",
                  onChange: (d) => r("email", d.target.value),
                  placeholder: "user@email.com",
                  autoComplete: "email"
                })
              ]
            }),
            c.jsxs("div", {
              className: "flex flex-col gap-2 w-1/3 min-w-[120px]",
              children: [
                c.jsxs("label", {
                  className: "text-xs font-medium text-muted-foreground flex justify-between",
                  children: [
                    "Rating",
                    " ",
                    c.jsxs("span", {
                      className: "text-[0.85em] text-muted-foreground",
                      children: [
                        s.rating ?? 0,
                        " / 255"
                      ]
                    })
                  ]
                }),
                c.jsx("input", {
                  type: "range",
                  min: 0,
                  max: 255,
                  step: 1,
                  className: "w-full",
                  value: s.rating ?? 0,
                  onChange: (d) => r("rating", Number(d.target.value))
                })
              ]
            }),
            c.jsxs("div", {
              className: "flex flex-col gap-2 w-1/4 min-w-[80px]",
              children: [
                c.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "Play Count"
                }),
                c.jsx("input", {
                  type: "number",
                  min: 0,
                  className: "w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50",
                  value: s.play_count ?? 0,
                  onChange: (d) => r("play_count", Math.max(0, Number(d.target.value))),
                  placeholder: "0"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Hg({ userText: s = [], onUserTextChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          description: "",
          value: ""
        }
      ]);
    }, f = (S, p, h) => {
      const _ = [
        ...s
      ];
      _[S] = {
        ..._[S],
        [p]: h
      }, r(_);
    }, b = (S) => {
      r(s.filter((p, h) => h !== S));
    };
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Advanced"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Custom Metadata"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Store custom key/value info for your own app or player"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Pair"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(wm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No custom data added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Pair" to start'
              })
            ]
          }) : s.map((S, p) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "text",
                value: S.description,
                onChange: (h) => f(p, "description", h.target.value),
                placeholder: "Label",
                className: "w-36 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "text",
                value: S.value,
                onChange: (h) => f(p, "value", h.target.value),
                placeholder: "Value",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 255
              }),
              c.jsx("button", {
                onClick: () => b(p),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(mt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, p))
        })
      ]
    });
  }
  function Bg({ creatorNotes: s = [], onCreatorNotesChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: void 0,
          text: ""
        }
      ]);
    }, f = (p, h, _) => {
      const v = [
        ...s
      ];
      v[p] = {
        ...v[p],
        [h]: _
      }, r(v);
    }, b = (p) => {
      r(s.filter((h, _) => _ !== p));
    }, S = (p) => {
      if (p == null) return "\u2013";
      const h = Math.floor(p / 1e3), _ = Math.floor(h / 60), v = h % 60;
      return `${_}:${v.toString().padStart(2, "0")}`;
    };
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Notes"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Creator Notes"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Personal/team notes with optional timestamps (ms)"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Note"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(hg, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No notes yet"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Note" to start'
              })
            ]
          }) : s.map((p, h) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "number",
                value: p.timestamp_ms ?? "",
                onChange: (_) => f(h, "timestamp_ms", _.target.value === "" ? void 0 : Math.max(0, parseInt(_.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              c.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  S(p.timestamp_ms),
                  ")"
                ]
              }),
              c.jsx("textarea", {
                value: p.text,
                onChange: (_) => f(h, "text", _.target.value),
                placeholder: "Note text",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50 min-h-8",
                maxLength: 512
              }),
              c.jsx("button", {
                onClick: () => b(h),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(mt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, h))
        })
      ]
    });
  }
  function qg({ collaborationCredits: s = [], onCollaborationCreditsChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          role: "",
          name: "",
          timestamp_ms: void 0
        }
      ]);
    }, f = (p, h, _) => {
      const v = [
        ...s
      ];
      v[p] = {
        ...v[p],
        [h]: _
      }, r(v);
    }, b = (p) => {
      r(s.filter((h, _) => _ !== p));
    }, S = (p) => {
      if (p == null) return "\u2013";
      const h = Math.floor(p / 1e3), _ = Math.floor(h / 60), v = h % 60;
      return `${_}:${v.toString().padStart(2, "0")}`;
    };
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "People"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Collaboration Credits"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Add credits for each contributor and their role. Optionally timestamp their contribution!"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Credit"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(Ng, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No collaboration credits"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Credit" to start'
              })
            ]
          }) : s.map((p, h) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "text",
                value: p.role,
                onChange: (_) => f(h, "role", _.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 40
              }),
              c.jsx("input", {
                type: "text",
                value: p.name,
                onChange: (_) => f(h, "name", _.target.value),
                placeholder: "Name",
                className: "w-48 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "number",
                value: p.timestamp_ms ?? "",
                onChange: (_) => f(h, "timestamp_ms", _.target.value === "" ? void 0 : Math.max(0, parseInt(_.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              c.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  S(p.timestamp_ms),
                  ")"
                ]
              }),
              c.jsx("button", {
                onClick: () => b(h),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(mt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, h))
        })
      ]
    });
  }
  function Yg({ disabled: s, isProcessing: r, fileName: d, onProcess: f }) {
    return c.jsx("section", {
      className: "glass-panel p-6 sm:p-8",
      children: c.jsxs("div", {
        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        children: [
          c.jsxs("div", {
            children: [
              c.jsx("p", {
                className: "micro-label",
                children: "Final step"
              }),
              c.jsx("p", {
                className: "text-base font-semibold",
                children: d ? `Render tags into ${d}` : "Load a flo\u2122 to begin"
              })
            ]
          }),
          c.jsx("button", {
            type: "button",
            onClick: f,
            disabled: s,
            className: "btn",
            "data-variant": "gradient",
            "data-size": "lg",
            children: r ? c.jsxs(c.Fragment, {
              children: [
                c.jsx("div", {
                  className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                }),
                "Processing"
              ]
            }) : c.jsxs(c.Fragment, {
              children: [
                c.jsx("span", {
                  className: "icon-chip",
                  children: c.jsx(Zy, {
                    className: "h-4 w-4 icon-accent"
                  })
                }),
                "Process & Download"
              ]
            })
          })
        ]
      })
    });
  }
  function _m({ type: s, message: r }) {
    const d = s === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return c.jsx("div", {
      className: `${d} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: r
    });
  }
  const Om = "floeditor-theme", si = () => typeof window < "u" && typeof document < "u", Lg = () => {
    if (!si()) return "auto";
    const s = window.localStorage.getItem(Om);
    return s === "light" || s === "dark" || s === "auto" ? s : "auto";
  };
  function Gg() {
    const [s, r] = re.useState(Lg), [d, f] = re.useState("light");
    return re.useEffect(() => {
      if (!si()) return;
      const p = window.matchMedia("(prefers-color-scheme: dark)"), h = () => f(p.matches ? "dark" : "light");
      return h(), p.addEventListener("change", h), () => {
        p.removeEventListener("change", h);
      };
    }, []), re.useEffect(() => {
      if (!si()) return;
      const p = document.documentElement;
      (s === "auto" ? d : s) === "dark" ? (p.classList.add("dark"), p.style.colorScheme = "dark") : (p.classList.remove("dark"), p.style.colorScheme = "light");
    }, [
      s,
      d
    ]), {
      theme: s,
      resolvedTheme: s === "auto" ? d : s,
      setTheme: (p) => {
        r(p), si() && window.localStorage.setItem(Om, p);
      }
    };
  }
  const vm = [
    {
      value: "auto",
      label: "Auto",
      icon: ng
    },
    {
      value: "light",
      label: "Light",
      icon: gg
    },
    {
      value: "dark",
      label: "Dark",
      icon: ig
    }
  ];
  function Xg() {
    var _a;
    const { theme: s, setTheme: r } = Gg(), d = ((_a = vm.find((f) => f.value === s)) == null ? void 0 : _a.label) ?? "Auto";
    return c.jsxs("div", {
      className: "w-full rounded-2xl border border-primary/20 bg-background/80 p-3 shadow-sm shadow-primary/10 backdrop-blur-md",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-primary/80",
          children: [
            c.jsx("span", {
              children: "Theme"
            }),
            c.jsx("span", {
              className: "font-semibold tracking-tight text-foreground/70",
              children: d
            })
          ]
        }),
        c.jsx("div", {
          className: "mt-2 grid grid-cols-3 gap-2",
          children: vm.map(({ value: f, label: b, icon: S }) => {
            const p = s === f;
            return c.jsxs("button", {
              type: "button",
              onClick: () => r(f),
              "aria-pressed": p,
              "aria-label": `Switch theme to ${b}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": p,
              children: [
                c.jsx(S, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                c.jsx("span", {
                  children: b
                })
              ]
            }, f);
          })
        })
      ]
    });
  }
  let M;
  function Qg(s) {
    const r = M.__externref_table_alloc();
    return M.__wbindgen_externrefs.set(r, s), r;
  }
  function Xs(s) {
    const r = typeof s;
    if (r == "number" || r == "boolean" || s == null) return `${s}`;
    if (r == "string") return `"${s}"`;
    if (r == "symbol") {
      const b = s.description;
      return b == null ? "Symbol" : `Symbol(${b})`;
    }
    if (r == "function") {
      const b = s.name;
      return typeof b == "string" && b.length > 0 ? `Function(${b})` : "Function";
    }
    if (Array.isArray(s)) {
      const b = s.length;
      let S = "[";
      b > 0 && (S += Xs(s[0]));
      for (let p = 1; p < b; p++) S += ", " + Xs(s[p]);
      return S += "]", S;
    }
    const d = /\[object ([^\]]+)\]/.exec(toString.call(s));
    let f;
    if (d && d.length > 1) f = d[1];
    else return toString.call(s);
    if (f == "Object") try {
      return "Object(" + JSON.stringify(s) + ")";
    } catch {
      return "Object";
    }
    return s instanceof Error ? `${s.name}: ${s.message}
${s.stack}` : f;
  }
  function ks(s, r) {
    return s = s >>> 0, Um().subarray(s / 4, s / 4 + r);
  }
  function At(s, r) {
    return s = s >>> 0, Qa().subarray(s / 1, s / 1 + r);
  }
  let ta = null;
  function Vt() {
    return (ta === null || ta.buffer.detached === true || ta.buffer.detached === void 0 && ta.buffer !== M.memory.buffer) && (ta = new DataView(M.memory.buffer)), ta;
  }
  let Xn = null;
  function Um() {
    return (Xn === null || Xn.byteLength === 0) && (Xn = new Float32Array(M.memory.buffer)), Xn;
  }
  function Xa(s, r) {
    return s = s >>> 0, Vg(s, r);
  }
  let Qn = null;
  function Qa() {
    return (Qn === null || Qn.byteLength === 0) && (Qn = new Uint8Array(M.memory.buffer)), Qn;
  }
  function Gn(s, r) {
    try {
      return s.apply(this, r);
    } catch (d) {
      const f = Qg(d);
      M.__wbindgen_exn_store(f);
    }
  }
  function jt(s) {
    return s == null;
  }
  function Ze(s, r) {
    const d = r(s.length * 1, 1) >>> 0;
    return Qa().set(s, d / 1), de = s.length, d;
  }
  function Ks(s, r) {
    const d = r(s.length * 4, 4) >>> 0;
    return Um().set(s, d / 4), de = s.length, d;
  }
  function la(s, r, d) {
    if (d === void 0) {
      const h = Zn.encode(s), _ = r(h.length, 1) >>> 0;
      return Qa().subarray(_, _ + h.length).set(h), de = h.length, _;
    }
    let f = s.length, b = r(f, 1) >>> 0;
    const S = Qa();
    let p = 0;
    for (; p < f; p++) {
      const h = s.charCodeAt(p);
      if (h > 127) break;
      S[b + p] = h;
    }
    if (p !== f) {
      p !== 0 && (s = s.slice(p)), b = d(b, f, f = p + s.length * 3, 1) >>> 0;
      const h = Qa().subarray(b + p, b + f), _ = Zn.encodeInto(s, h);
      p += _.written, b = d(b, f, p, 1) >>> 0;
    }
    return de = p, b;
  }
  function Ne(s) {
    const r = M.__wbindgen_externrefs.get(s);
    return M.__externref_table_dealloc(s), r;
  }
  let ri = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ri.decode();
  const Zg = 2146435072;
  let qs = 0;
  function Vg(s, r) {
    return qs += r, qs >= Zg && (ri = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ri.decode(), qs = r), ri.decode(Qa().subarray(s, s + r));
  }
  const Zn = new TextEncoder();
  "encodeInto" in Zn || (Zn.encodeInto = function(s, r) {
    const d = Zn.encode(s);
    return r.set(d), {
      read: s.length,
      written: d.length
    };
  });
  let de = 0;
  const xm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_audioinfo_free(s >>> 0, 1)), Sm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_wasmstreamingdecoder_free(s >>> 0, 1));
  class Va {
    static __wrap(r) {
      r = r >>> 0;
      const d = Object.create(Va.prototype);
      return d.__wbg_ptr = r, xm.register(d, d.__wbg_ptr, d), d;
    }
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, xm.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      M.__wbg_audioinfo_free(r, 0);
    }
    get sample_rate() {
      return M.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
    }
    set sample_rate(r) {
      M.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, r);
    }
    get channels() {
      return M.__wbg_get_audioinfo_channels(this.__wbg_ptr);
    }
    set channels(r) {
      M.__wbg_set_audioinfo_channels(this.__wbg_ptr, r);
    }
    get bit_depth() {
      return M.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
    }
    set bit_depth(r) {
      M.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, r);
    }
    get total_frames() {
      const r = M.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
      return BigInt.asUintN(64, r);
    }
    set total_frames(r) {
      M.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, r);
    }
    get duration_secs() {
      return M.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
    }
    set duration_secs(r) {
      M.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, r);
    }
    get file_size() {
      return M.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
    }
    set file_size(r) {
      M.__wbg_set_audioinfo_file_size(this.__wbg_ptr, r);
    }
    get compression_ratio() {
      return M.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
    }
    set compression_ratio(r) {
      M.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, r);
    }
    get crc_valid() {
      return M.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
    }
    set crc_valid(r) {
      M.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, r);
    }
    get is_lossy() {
      return M.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
    }
    set is_lossy(r) {
      M.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, r);
    }
    get lossy_quality() {
      return M.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
    }
    set lossy_quality(r) {
      M.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, r);
    }
    get version() {
      let r, d;
      try {
        const f = M.audioinfo_version(this.__wbg_ptr);
        return r = f[0], d = f[1], Xa(f[0], f[1]);
      } finally {
        M.__wbindgen_free(r, d, 1);
      }
    }
  }
  Symbol.dispose && (Va.prototype[Symbol.dispose] = Va.prototype.free);
  class Qs {
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Sm.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      M.__wbg_wasmstreamingdecoder_free(r, 0);
    }
    next_frame() {
      const r = M.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (r[2]) throw Ne(r[1]);
      return Ne(r[0]);
    }
    is_finished() {
      return M.wasmstreamingdecoder_is_finished(this.__wbg_ptr) !== 0;
    }
    buffered_bytes() {
      return M.wasmstreamingdecoder_buffered_bytes(this.__wbg_ptr) >>> 0;
    }
    available_frames() {
      return M.wasmstreamingdecoder_available_frames(this.__wbg_ptr) >>> 0;
    }
    decode_available() {
      const r = M.wasmstreamingdecoder_decode_available(this.__wbg_ptr);
      if (r[3]) throw Ne(r[2]);
      var d = ks(r[0], r[1]).slice();
      return M.__wbindgen_free(r[0], r[1] * 4, 4), d;
    }
    current_frame_index() {
      return M.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const r = M.wasmstreamingdecoder_new();
      return this.__wbg_ptr = r >>> 0, Sm.register(this, this.__wbg_ptr, this), this;
    }
    feed(r) {
      const d = Ze(r, M.__wbindgen_malloc), f = de, b = M.wasmstreamingdecoder_feed(this.__wbg_ptr, d, f);
      if (b[2]) throw Ne(b[1]);
      return b[0] !== 0;
    }
    reset() {
      M.wasmstreamingdecoder_reset(this.__wbg_ptr);
    }
    state() {
      let r, d;
      try {
        const f = M.wasmstreamingdecoder_state(this.__wbg_ptr);
        return r = f[0], d = f[1], Xa(f[0], f[1]);
      } finally {
        M.__wbindgen_free(r, d, 1);
      }
    }
    get_info() {
      const r = M.wasmstreamingdecoder_get_info(this.__wbg_ptr);
      if (r[2]) throw Ne(r[1]);
      return Ne(r[0]);
    }
    is_ready() {
      return M.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return M.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (Qs.prototype[Symbol.dispose] = Qs.prototype.free);
  function kg(s, r, d) {
    var f = jt(s) ? 0 : la(s, M.__wbindgen_malloc, M.__wbindgen_realloc), b = de, S = jt(r) ? 0 : la(r, M.__wbindgen_malloc, M.__wbindgen_realloc), p = de, h = jt(d) ? 0 : la(d, M.__wbindgen_malloc, M.__wbindgen_realloc), _ = de;
    const v = M.create_metadata(f, b, S, p, h, _);
    if (v[3]) throw Ne(v[2]);
    var E = At(v[0], v[1]).slice();
    return M.__wbindgen_free(v[0], v[1] * 1, 1), E;
  }
  function Dm(s) {
    const r = M.create_metadata_from_object(s);
    if (r[3]) throw Ne(r[2]);
    var d = At(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), d;
  }
  function Kg(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.decode(r, d);
    if (f[3]) throw Ne(f[2]);
    var b = ks(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 4, 4), b;
  }
  function Jg(s, r, d, f, b) {
    const S = Ks(s, M.__wbindgen_malloc), p = de;
    var h = jt(b) ? 0 : Ze(b, M.__wbindgen_malloc), _ = de;
    const v = M.encode(S, p, r, d, f, h, _);
    if (v[3]) throw Ne(v[2]);
    var E = At(v[0], v[1]).slice();
    return M.__wbindgen_free(v[0], v[1] * 1, 1), E;
  }
  function $g(s, r, d, f, b, S) {
    const p = Ks(s, M.__wbindgen_malloc), h = de;
    var _ = jt(S) ? 0 : Ze(S, M.__wbindgen_malloc), v = de;
    const E = M.encode_lossy(p, h, r, d, f, b, _, v);
    if (E[3]) throw Ne(E[2]);
    var C = At(E[0], E[1]).slice();
    return M.__wbindgen_free(E[0], E[1] * 1, 1), C;
  }
  function Fg(s, r, d, f, b, S) {
    const p = Ks(s, M.__wbindgen_malloc), h = de;
    var _ = jt(S) ? 0 : Ze(S, M.__wbindgen_malloc), v = de;
    const E = M.encode_with_bitrate(p, h, r, d, f, b, _, v);
    if (E[3]) throw Ne(E[2]);
    var C = At(E[0], E[1]).slice();
    return M.__wbindgen_free(E[0], E[1] * 1, 1), C;
  }
  function Wg(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.get_cover_art(r, d);
    if (f[2]) throw Ne(f[1]);
    return Ne(f[0]);
  }
  function Js(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.get_metadata(r, d);
    if (f[2]) throw Ne(f[1]);
    return Ne(f[0]);
  }
  function Ig(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.get_metadata_bytes(r, d);
    if (f[3]) throw Ne(f[2]);
    var b = At(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), b;
  }
  function Pg(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.get_section_markers(r, d);
    if (f[2]) throw Ne(f[1]);
    return Ne(f[0]);
  }
  function eb(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.get_synced_lyrics(r, d);
    if (f[2]) throw Ne(f[1]);
    return Ne(f[0]);
  }
  function tb(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.get_waveform_data(r, d);
    if (f[2]) throw Ne(f[1]);
    return Ne(f[0]);
  }
  function lb(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de;
    return M.has_metadata(r, d) !== 0;
  }
  function Cm(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.info(r, d);
    if (f[2]) throw Ne(f[1]);
    return Va.__wrap(f[0]);
  }
  function ab(s, r) {
    const d = Ze(s, M.__wbindgen_malloc), f = de, b = M.set_metadata(d, f, r);
    if (b[3]) throw Ne(b[2]);
    var S = At(b[0], b[1]).slice();
    return M.__wbindgen_free(b[0], b[1] * 1, 1), S;
  }
  function nb(s, r, d) {
    var f = jt(s) ? 0 : Ze(s, M.__wbindgen_malloc), b = de;
    const S = la(r, M.__wbindgen_malloc, M.__wbindgen_realloc), p = de, h = M.set_metadata_field(f, b, S, p, d);
    if (h[3]) throw Ne(h[2]);
    var _ = At(h[0], h[1]).slice();
    return M.__wbindgen_free(h[0], h[1] * 1, 1), _;
  }
  function ub(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.strip_metadata(r, d);
    if (f[3]) throw Ne(f[2]);
    var b = At(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), b;
  }
  function Rm(s, r) {
    const d = Ze(s, M.__wbindgen_malloc), f = de, b = Ze(r, M.__wbindgen_malloc), S = de, p = M.update_metadata(d, f, b, S);
    if (p[3]) throw Ne(p[2]);
    var h = At(p[0], p[1]).slice();
    return M.__wbindgen_free(p[0], p[1] * 1, 1), h;
  }
  function Hm(s) {
    const r = Ze(s, M.__wbindgen_malloc), d = de, f = M.validate(r, d);
    if (f[2]) throw Ne(f[1]);
    return f[0] !== 0;
  }
  function ib() {
    let s, r;
    try {
      const d = M.version();
      return s = d[0], r = d[1], Xa(d[0], d[1]);
    } finally {
      M.__wbindgen_free(s, r, 1);
    }
  }
  const cb = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function sb(s, r) {
    if (typeof Response == "function" && s instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(s, r);
      } catch (f) {
        if (s.ok && cb.has(s.type) && s.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", f);
        else throw f;
      }
      const d = await s.arrayBuffer();
      return await WebAssembly.instantiate(d, r);
    } else {
      const d = await WebAssembly.instantiate(s, r);
      return d instanceof WebAssembly.Instance ? {
        instance: d,
        module: s
      } : d;
    }
  }
  function Bm() {
    const s = {};
    return s.wbg = {}, s.wbg.__wbg_Error_52673b7de5a0ca89 = function(r, d) {
      return Error(Xa(r, d));
    }, s.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(r) {
      return Number(r);
    }, s.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(r, d) {
      const f = String(d), b = la(f, M.__wbindgen_malloc, M.__wbindgen_realloc), S = de;
      Vt().setInt32(r + 4, S, true), Vt().setInt32(r + 0, b, true);
    }, s.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(r, d) {
      const f = d, b = typeof f == "bigint" ? f : void 0;
      Vt().setBigInt64(r + 8, jt(b) ? BigInt(0) : b, true), Vt().setInt32(r + 0, !jt(b), true);
    }, s.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(r) {
      const d = r, f = typeof d == "boolean" ? d : void 0;
      return jt(f) ? 16777215 : f ? 1 : 0;
    }, s.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(r, d) {
      const f = Xs(d), b = la(f, M.__wbindgen_malloc, M.__wbindgen_realloc), S = de;
      Vt().setInt32(r + 4, S, true), Vt().setInt32(r + 0, b, true);
    }, s.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(r, d) {
      return r in d;
    }, s.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(r) {
      return typeof r == "bigint";
    }, s.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(r) {
      return typeof r == "function";
    }, s.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(r) {
      return r === null;
    }, s.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(r) {
      const d = r;
      return typeof d == "object" && d !== null;
    }, s.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(r) {
      return typeof r == "string";
    }, s.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(r) {
      return r === void 0;
    }, s.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(r, d) {
      return r === d;
    }, s.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(r, d) {
      return r == d;
    }, s.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(r, d) {
      const f = d, b = typeof f == "number" ? f : void 0;
      Vt().setFloat64(r + 8, jt(b) ? 0 : b, true), Vt().setInt32(r + 0, !jt(b), true);
    }, s.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(r, d) {
      const f = d, b = typeof f == "string" ? f : void 0;
      var S = jt(b) ? 0 : la(b, M.__wbindgen_malloc, M.__wbindgen_realloc), p = de;
      Vt().setInt32(r + 4, p, true), Vt().setInt32(r + 0, S, true);
    }, s.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(r, d) {
      throw new Error(Xa(r, d));
    }, s.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Gn(function(r, d) {
        return r.call(d);
      }, arguments);
    }, s.wbg.__wbg_done_62ea16af4ce34b24 = function(r) {
      return r.done;
    }, s.wbg.__wbg_entries_83c79938054e065f = function(r) {
      return Object.entries(r);
    }, s.wbg.__wbg_from_29a8414a7a7cd19d = function(r) {
      return Array.from(r);
    }, s.wbg.__wbg_get_6b7bd52aca3f9671 = function(r, d) {
      return r[d >>> 0];
    }, s.wbg.__wbg_get_af9dab7e9603ea93 = function() {
      return Gn(function(r, d) {
        return Reflect.get(r, d);
      }, arguments);
    }, s.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(r, d) {
      return r[d];
    }, s.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(r) {
      let d;
      try {
        d = r instanceof ArrayBuffer;
      } catch {
        d = false;
      }
      return d;
    }, s.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(r) {
      let d;
      try {
        d = r instanceof Uint8Array;
      } catch {
        d = false;
      }
      return d;
    }, s.wbg.__wbg_isArray_51fd9e6422c0a395 = function(r) {
      return Array.isArray(r);
    }, s.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(r) {
      return Number.isSafeInteger(r);
    }, s.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
      return Symbol.iterator;
    }, s.wbg.__wbg_length_22ac23eaec9d8053 = function(r) {
      return r.length;
    }, s.wbg.__wbg_length_86ce4877baf913bb = function(r) {
      return r.length;
    }, s.wbg.__wbg_length_d45040a40c570362 = function(r) {
      return r.length;
    }, s.wbg.__wbg_new_1ba21ce319a06297 = function() {
      return new Object();
    }, s.wbg.__wbg_new_25f239778d6112b9 = function() {
      return new Array();
    }, s.wbg.__wbg_new_6421f6084cc5bc5a = function(r) {
      return new Uint8Array(r);
    }, s.wbg.__wbg_new_b546ae120718850e = function() {
      return /* @__PURE__ */ new Map();
    }, s.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(r, d) {
      return new Uint8Array(At(r, d));
    }, s.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(r) {
      return new Float32Array(r >>> 0);
    }, s.wbg.__wbg_next_138a17bbf04e926c = function(r) {
      return r.next;
    }, s.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Gn(function(r) {
        return r.next();
      }, arguments);
    }, s.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(r, d, f) {
      Uint8Array.prototype.set.call(At(r, d), f);
    }, s.wbg.__wbg_set_3f1d0b984ed272ed = function(r, d, f) {
      r[d] = f;
    }, s.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Gn(function(r, d, f) {
        return Reflect.set(r, d, f);
      }, arguments);
    }, s.wbg.__wbg_set_7df433eea03a5c14 = function(r, d, f) {
      r[d >>> 0] = f;
    }, s.wbg.__wbg_set_cb0e657d1901c8d8 = function(r, d, f) {
      r.set(ks(d, f));
    }, s.wbg.__wbg_set_efaaf145b9377369 = function(r, d, f) {
      return r.set(d, f);
    }, s.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Gn(function(r) {
        return JSON.stringify(r);
      }, arguments);
    }, s.wbg.__wbg_value_57b7b035e117f7ee = function(r) {
      return r.value;
    }, s.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(r, d) {
      return Xa(r, d);
    }, s.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(r) {
      return BigInt.asUintN(64, r);
    }, s.wbg.__wbindgen_cast_cb9088102bce6b30 = function(r, d) {
      return At(r, d);
    }, s.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(r) {
      return r;
    }, s.wbg.__wbindgen_init_externref_table = function() {
      const r = M.__wbindgen_externrefs, d = r.grow(4);
      r.set(0, void 0), r.set(d + 0, void 0), r.set(d + 1, null), r.set(d + 2, true), r.set(d + 3, false);
    }, s;
  }
  function qm(s, r) {
    return M = s.exports, fi.__wbindgen_wasm_module = r, ta = null, Xn = null, Qn = null, M.__wbindgen_start(), M;
  }
  function rb(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module: s } = s : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const r = Bm();
    s instanceof WebAssembly.Module || (s = new WebAssembly.Module(s));
    const d = new WebAssembly.Instance(s, r);
    return qm(d, s);
  }
  async function fi(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module_or_path: s } = s : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof s > "u" && (s = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const r = Bm();
    (typeof s == "string" || typeof Request == "function" && s instanceof Request || typeof URL == "function" && s instanceof URL) && (s = fetch(s));
    const { instance: d, module: f } = await sb(await s, r);
    return qm(d, f);
  }
  const Nm = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Va,
    WasmStreamingDecoder: Qs,
    create_metadata: kg,
    create_metadata_from_object: Dm,
    decode: Kg,
    default: fi,
    encode: Jg,
    encode_lossy: $g,
    encode_with_bitrate: Fg,
    get_cover_art: Wg,
    get_metadata: Js,
    get_metadata_bytes: Ig,
    get_section_markers: Pg,
    get_synced_lyrics: eb,
    get_waveform_data: tb,
    has_metadata: lb,
    info: Cm,
    initSync: rb,
    set_metadata: ab,
    set_metadata_field: nb,
    strip_metadata: ub,
    update_metadata: Rm,
    validate: Hm,
    version: ib
  }, Symbol.toStringTag, {
    value: "Module"
  })), fb = {
    title: "",
    artist: "",
    album: "",
    album_artist: "",
    year: void 0,
    genre: "",
    track_number: void 0,
    track_total: void 0,
    disc_number: void 0,
    disc_total: void 0,
    composer: "",
    lyricist: "",
    publisher: "",
    copyright: "",
    bpm: void 0,
    key: "",
    mood: "",
    isrc: "",
    encoded_by: "",
    involved_people: [],
    musician_credits: [],
    comments: [],
    lyrics: [],
    synced_lyrics: [],
    pictures: [],
    user_text: [],
    user_urls: [],
    bpm_map: [],
    key_changes: [],
    loudness_profile: [],
    section_markers: [],
    creator_notes: [],
    collaboration_credits: [],
    remix_chain: [],
    cover_variants: [],
    custom: {}
  };
  function ob() {
    const [s, r] = re.useState(false), [d, f] = re.useState(false);
    return re.useEffect(() => {
      (async () => {
        try {
          await fi(), f(true);
        } catch (E) {
          console.error("Failed to initialize flo\u2122 WASM:", E);
        }
      })();
    }, []), {
      isProcessing: s,
      isInitialized: d,
      loadMetadata: async (v) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const E = await v.arrayBuffer(), C = new Uint8Array(E);
          return Js(C);
        } catch (E) {
          return console.error("Failed to load flo\u2122 metadata:", E), null;
        }
      },
      updateMetadata: async (v, E) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        r(true);
        try {
          const C = Dm(E), L = Rm(v, C);
          return r(false), L;
        } catch (C) {
          return console.error("Failed to update flo\u2122 metadata:", C), r(false), null;
        }
      },
      downloadFile: (v, E) => {
        const C = new Blob([
          v
        ], {
          type: "application/octet-stream"
        }), L = URL.createObjectURL(C), P = document.createElement("a");
        P.href = L, P.download = E, P.click(), URL.revokeObjectURL(L);
      },
      validateFile: (v) => d ? Hm(v) : false,
      resetMetadata: () => ({
        ...fb
      })
    };
  }
  function db() {
    const [s, r] = re.useState(false);
    return {
      isLoading: s,
      loadFloFile: async (f) => {
        r(true);
        try {
          if (!f.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await fi();
          const b = await f.arrayBuffer(), S = new Uint8Array(b), p = Js(S), h = Cm(S), _ = h ? {
            sample_rate: h.sample_rate,
            channels: h.channels,
            bit_depth: h.bit_depth,
            total_frames: Number(h.total_frames),
            duration_secs: h.duration_secs,
            file_size: h.file_size,
            compression_ratio: h.compression_ratio,
            crc_valid: h.crc_valid,
            is_lossy: h.is_lossy,
            lossy_quality: h.lossy_quality,
            version: h.version
          } : null;
          return {
            metadata: p,
            audioInfo: _,
            error: null
          };
        } catch (b) {
          return console.error("Failed to load flo\u2122 file:", b), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${b instanceof Error ? b.message : "Unknown error"}`
          };
        } finally {
          r(false);
        }
      }
    };
  }
  const Ys = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, jm = {
    title: "",
    artist: "",
    album: "",
    album_artist: "",
    year: void 0,
    genre: "",
    track_number: void 0,
    track_total: void 0,
    disc_number: void 0,
    disc_total: void 0,
    composer: "",
    lyricist: "",
    publisher: "",
    copyright: "",
    bpm: void 0,
    key: "",
    mood: "",
    isrc: "",
    encoded_by: "",
    involved_people: [],
    musician_credits: [],
    comments: [],
    lyrics: [],
    synced_lyrics: [],
    pictures: [],
    user_text: [],
    user_urls: [],
    bpm_map: [],
    key_changes: [],
    loudness_profile: [],
    section_markers: [],
    creator_notes: [],
    collaboration_credits: [],
    remix_chain: [],
    cover_variants: [],
    custom: {}
  };
  function Am(s, r, d, f = 50) {
    const b = Math.floor(r / f), S = Math.floor(s.length / (b * d)), p = [];
    for (let h = 0; h < S; h++) for (let _ = 0; _ < d; _++) {
      let v = 0;
      for (let E = 0; E < b; E++) {
        const C = h * b * d + E * d + _;
        C < s.length && (v = Math.max(v, Math.abs(s[C])));
      }
      p.push(v);
    }
    return {
      peaks_per_second: f,
      channels: d,
      peaks: p
    };
  }
  function mb({ waveform: s, onRegenerate: r }) {
    return c.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        c.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Audio"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Audio Waveform"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Pre-generated visualization data for use by music players and other tools"
                })
              ]
            }),
            r && c.jsx("button", {
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              onClick: r,
              type: "button",
              children: "Regenerate"
            })
          ]
        }),
        c.jsx("div", {
          children: s && s.peaks && s.peaks.length > 0 ? c.jsx(hb, {
            waveform: s
          }) : c.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              c.jsx(Za, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        c.jsx(yb, {
          waveform: s
        })
      ]
    });
  }
  function hb({ waveform: s, width: r = 600, height: d = 80 }) {
    const { peaks: f, channels: b } = s, S = Math.floor(f.length / b);
    function p(_) {
      return Array.from({
        length: S
      }, (v, E) => {
        const C = Math.floor(E / (S - 1) * (r - 2)) + 1, L = Math.floor((1 - (f[E * b + _] || 0)) * (d - 10)) + 5;
        return `${C},${L}`;
      }).join(" ");
    }
    function h() {
      const _ = Array.from({
        length: S
      }, (E, C) => {
        const L = Math.floor(C / (S - 1) * (r - 2)) + 1, P = f[C * b] || 0, ge = Math.floor((1 - P) * (d / 2 - 4)) + d / 2;
        return `${L},${ge}`;
      }), v = Array.from({
        length: S
      }, (E, C) => {
        const L = S - 1 - C, P = Math.floor(L / (S - 1) * (r - 2)) + 1, ge = f[L * b] || 0, be = Math.floor((1 + ge) * (d / 2 - 4)) + 4;
        return `${P},${be}`;
      });
      return [
        ..._,
        ...v,
        _[0]
      ].join(" ");
    }
    return c.jsx("div", {
      style: {
        width: r,
        maxWidth: "100%"
      },
      className: "overflow-x-auto",
      children: c.jsxs("svg", {
        className: "block rounded border bg-background shadow",
        width: r,
        height: d,
        viewBox: `0 0 ${r} ${d}`,
        "aria-label": "Waveform",
        role: "img",
        children: [
          b === 1 && c.jsx("polygon", {
            points: h(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          c.jsx("polyline", {
            points: p(0),
            stroke: "#db2777",
            strokeWidth: b > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          b > 1 && c.jsx("polyline", {
            points: p(1),
            stroke: "#3b82f6",
            strokeWidth: "1.5",
            fill: "none"
          }),
          c.jsx("defs", {
            children: c.jsxs("linearGradient", {
              id: "wf-gradient",
              x1: "0",
              x2: "0",
              y1: "0",
              y2: "1",
              children: [
                c.jsx("stop", {
                  offset: "0%",
                  stopColor: "#db2777",
                  stopOpacity: "0.75"
                }),
                c.jsx("stop", {
                  offset: "100%",
                  stopColor: "#8b5cf6",
                  stopOpacity: "0.25"
                })
              ]
            })
          })
        ]
      })
    });
  }
  function yb({ waveform: s }) {
    return s ? c.jsxs("div", {
      className: "mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground",
      children: [
        c.jsxs("span", {
          children: [
            c.jsx("strong", {
              children: "Channels:"
            }),
            " ",
            s.channels === 2 ? "Stereo" : "Mono"
          ]
        }),
        c.jsxs("span", {
          children: [
            c.jsx("strong", {
              children: "Peaks/sec:"
            }),
            " ",
            s.peaks_per_second
          ]
        }),
        c.jsxs("span", {
          children: [
            c.jsx("strong", {
              children: "Total Points:"
            }),
            " ",
            s.peaks.length
          ]
        })
      ]
    }) : null;
  }
  function gb({ userUrls: s = [], onUserUrlsChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          description: "",
          url: ""
        }
      ]);
    }, f = (S, p, h) => {
      const _ = [
        ...s
      ];
      _[S] = {
        ..._[S],
        [p]: h
      }, r(_);
    }, b = (S) => {
      r(s.filter((p, h) => h !== S));
    };
    return c.jsxs("div", {
      className: "space-y-3",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2",
                  children: "User URLs"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-0.5",
                  children: "Store custom URLs with descriptions (advanced use)"
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add URL"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-2",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-4",
            children: [
              c.jsx(eg, {
                className: "h-8 w-8 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No custom URLs added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add URL" to start'
              })
            ]
          }) : s.map((S, p) => c.jsxs("div", {
            className: "flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3",
            children: [
              c.jsx("input", {
                type: "text",
                value: S.description,
                onChange: (h) => f(p, "description", h.target.value),
                placeholder: "Label / Description",
                className: "w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 100
              }),
              c.jsx("input", {
                type: "url",
                value: S.url,
                onChange: (h) => f(p, "url", h.target.value),
                placeholder: "https://example.com",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 512
              }),
              c.jsx("button", {
                onClick: () => b(p),
                type: "button",
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                children: c.jsx(mt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, p))
        })
      ]
    });
  }
  function bb({ involvedPeople: s = [], onInvolvedPeopleChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          role: "",
          name: ""
        }
      ]);
    }, f = (S, p, h) => {
      const _ = [
        ...s
      ];
      _[S] = {
        ..._[S],
        [p]: h
      }, r(_);
    }, b = (S) => {
      r(s.filter((p, h) => h !== S));
    };
    return c.jsxs("div", {
      className: "space-y-3 mt-8",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2",
                  children: "Additional Credits"
                }),
                c.jsx("p", {
                  className: "text-xs text-muted-foreground mt-0.5",
                  children: "Credit any other contributors: engineers, producers, artwork, etc."
                })
              ]
            }),
            c.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                c.jsx(zt, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Person"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-2",
          children: s.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-4",
            children: [
              c.jsx(xg, {
                className: "h-8 w-8 mx-auto mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No additional credits added"
              }),
              c.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Person" to start'
              })
            ]
          }) : s.map((S, p) => c.jsxs("div", {
            className: "flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3",
            children: [
              c.jsx("input", {
                type: "text",
                value: S.role,
                onChange: (h) => f(p, "role", h.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "text",
                value: S.name,
                onChange: (h) => f(p, "name", h.target.value),
                placeholder: "Name",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 128
              }),
              c.jsx("button", {
                onClick: () => b(p),
                type: "button",
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                children: c.jsx(mt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, p))
        })
      ]
    });
  }
  const Ym = [
    {
      key: "content_group",
      label: "Content Group",
      placeholder: "e.g. Movement 1"
    },
    {
      key: "original_album",
      label: "Original Album",
      placeholder: "e.g. Greatest Hits 1979"
    },
    {
      key: "original_artist",
      label: "Original Artist",
      placeholder: "If this is a cover/remix"
    },
    {
      key: "original_lyricist",
      label: "Original Lyricist",
      placeholder: "Lyricist for a cover"
    }
  ], Lm = [
    {
      key: "album_sort",
      label: "Album Sort",
      placeholder: "Night at Opera, A"
    },
    {
      key: "artist_sort",
      label: "Artist Sort",
      placeholder: "Queen, The"
    },
    {
      key: "title_sort",
      label: "Title Sort",
      placeholder: "Bohemian Rhapsody"
    },
    {
      key: "file_owner",
      label: "File Owner",
      placeholder: "Copyright owner/label"
    }
  ], Gm = [
    {
      key: "url_audio_file",
      label: "Audio File URL",
      placeholder: "Direct track URL",
      colSpan: "full"
    },
    {
      key: "url_audio_source",
      label: "Audio Source URL",
      placeholder: "Original source URL",
      colSpan: "full"
    },
    {
      key: "url_radio_station",
      label: "Radio Station URL",
      placeholder: "Radio stream/source",
      colSpan: "full"
    },
    {
      key: "url_payment",
      label: "Payment/Tip URL",
      placeholder: "Buy link / tip jar",
      colSpan: "full"
    }
  ], Xm = [
    {
      key: "playlist_delay",
      label: "Playlist Delay (ms)",
      type: "number",
      placeholder: "Delay before playback"
    },
    {
      key: "recording_time",
      label: "Recording Time",
      placeholder: "YYYY-MM-DD or ISO date"
    },
    {
      key: "release_time",
      label: "Release Time",
      placeholder: "YYYY-MM-DD or ISO date"
    },
    {
      key: "radio_station",
      label: "Radio Station",
      placeholder: "e.g. NPR One"
    },
    {
      key: "radio_station_owner",
      label: "Radio Station Owner",
      placeholder: "Owner of station"
    }
  ], pb = [
    {
      name: "Structure",
      fields: Ym
    },
    {
      name: "Sorting & Ownership",
      fields: Lm
    },
    {
      name: "Links",
      fields: Gm
    },
    {
      name: "Timing & Broadcast",
      fields: Xm
    }
  ], zm = [
    ...Ym,
    ...Lm,
    ...Gm,
    ...Xm
  ];
  function _b({ metadata: s, onMetadataChange: r }) {
    const [d, f] = re.useState(false), b = zm.filter(({ key: h }) => {
      const _ = s[h];
      return typeof _ == "string" && _.trim().length > 0 || typeof _ == "number" && !isNaN(_);
    }).length, S = zm.length, p = ({ key: h, label: _, placeholder: v, type: E, colSpan: C }) => {
      const L = s[h];
      return L != null && typeof L != "string" && typeof L != "number" ? null : c.jsxs("div", {
        className: `space-y-2 ${C === "full" ? "md:col-span-2" : ""}`,
        children: [
          c.jsx("label", {
            htmlFor: h,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: _
          }),
          c.jsx("input", {
            id: h,
            value: L ?? "",
            onChange: (P) => r(h, E === "number" ? P.target.value === "" ? void 0 : parseInt(P.target.value) || 0 : P.target.value),
            type: E ?? "text",
            placeholder: v,
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, h);
    };
    return c.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            c.jsxs("div", {
              children: [
                c.jsx("p", {
                  className: "micro-label",
                  children: "Advanced"
                }),
                c.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Advanced Tags"
                })
              ]
            }),
            c.jsxs("div", {
              className: "text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80",
              children: [
                b,
                " / ",
                S,
                " fields filled"
              ]
            })
          ]
        }),
        c.jsx("button", {
          type: "button",
          className: "flex items-center w-full gap-2 text-lg font-semibold mb-4 select-none",
          onClick: () => f((h) => !h),
          "aria-expanded": d,
          children: c.jsx("span", {
            className: "ml-auto",
            children: d ? c.jsx(Yy, {
              className: "h-5 w-5"
            }) : c.jsx(Gy, {
              className: "h-5 w-5"
            })
          })
        }),
        d && c.jsxs("div", {
          className: "space-y-8",
          children: [
            pb.map(({ name: h, fields: _ }) => c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: h
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: _.map(p)
                })
              ]
            }, h)),
            c.jsx(gb, {
              userUrls: s.user_urls ?? [],
              onUserUrlsChange: (h) => r("user_urls", h)
            }),
            c.jsx(bb, {
              involvedPeople: (s.involved_people ?? []).map(([h, _]) => ({
                role: h,
                name: _
              })),
              onInvolvedPeopleChange: (h) => r("involved_people", h.map(({ role: _, name: v }) => [
                _,
                v
              ]))
            }),
            c.jsx("span", {
              children: c.jsx("hr", {})
            }),
            c.jsx("p", {
              className: "text-xs text-muted-foreground mt-4",
              children: "These fields are optional and rarely used; fill in only if needed for advanced use cases, library sorting, or publishing metadata."
            })
          ]
        })
      ]
    });
  }
  const Ls = [
    {
      key: "original_filename",
      label: "Original Filename"
    },
    {
      key: "encoder_settings",
      label: "Encoder Settings"
    },
    {
      key: "flo_encoder_version",
      label: "Encoder Version"
    },
    {
      key: "encoding_time",
      label: "Encoding Time"
    },
    {
      key: "source_format",
      label: "Source Format"
    },
    {
      key: "tagging_time",
      label: "Last Tag Edit"
    },
    {
      key: "encoded_by",
      label: "Encoded By"
    }
  ];
  function vb(s) {
    return typeof s == "string" && s.trim().length > 0 || typeof s == "number" ? s : c.jsx("span", {
      className: "text-muted-foreground",
      children: "\u2013"
    });
  }
  function xb({ metadata: s }) {
    const r = Ls.length, d = Ls.filter(({ key: f }) => {
      const b = s[f];
      return typeof b == "string" && b.trim().length > 0 || typeof b == "number" && b !== void 0 && b !== null;
    }).length;
    return c.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        c.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            c.jsxs("div", {
              children: [
                c.jsxs("p", {
                  className: "micro-label flex items-center gap-1",
                  children: [
                    c.jsx(Wy, {
                      className: "h-3.5 w-3.5 icon-accent -ml-0.5"
                    }),
                    "Technical"
                  ]
                }),
                c.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "File & Encoding Info"
                })
              ]
            }),
            c.jsxs("div", {
              className: "text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80",
              children: [
                d,
                " / ",
                r,
                " fields filled"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Ls.map(({ key: f, label: b }) => c.jsxs("div", {
            className: "space-y-1",
            children: [
              c.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: b
              }),
              c.jsx("div", {
                className: "font-mono text-sm bg-primary/5 rounded px-2 py-1 border",
                children: vb(s[f])
              })
            ]
          }, f))
        })
      ]
    });
  }
  function Sb() {
    var _a, _b2, _c;
    const [s, r] = re.useState(null), [, d] = re.useState(""), [f, b] = re.useState(false), [S, p] = re.useState(null), [h, _] = re.useState(null), [v, E] = re.useState(""), [C, L] = re.useState(null), { isProcessing: P, updateMetadata: ge, downloadFile: be, resetMetadata: J } = ob(), [Z, $] = re.useState(null), [G, fe] = re.useState(() => ({
      ...jm
    })), [Ke, De] = re.useState(null), [I, qe] = re.useState(() => ({
      ...Ys
    })), Je = re.useRef(""), { isLoading: V, loadFloFile: le } = db();
    re.useEffect(() => {
      typeof window < "u" && f && Cs(() => import("./eruda-DVCApb2V.js").then((H) => H.e), [], import.meta.url).then((H) => {
        H.default.init(), H.default.show();
      });
    }, [
      f
    ]);
    const nt = [
      {
        label: "Tag fields set",
        value: Object.values(G).filter((H) => typeof H == "string" && H.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: I.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: Ke ? "Attached" : "Not added",
        helper: Ke ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ], ut = re.useCallback((H) => `${H.name}:${H.lastModified}:${H.size}`, []), $e = re.useCallback(async () => {
      if (!(!C || !Z)) try {
        const y = await (await Cs(() => Promise.resolve().then(() => Nm), void 0, import.meta.url)).decode(C), T = Am(y, Z.sample_rate, Z.channels);
        fe((R) => ({
          ...R,
          waveform_data: T
        })), _("Waveform re-generated from audio data.");
      } catch {
        p("Could not re-generate waveform.");
      }
    }, [
      C,
      Z
    ]), O = re.useCallback(async (H) => {
      var _a2, _b3, _c2;
      if (!H) {
        Je.current = "", r(null), L(null), fe(J()), De(null), qe({
          ...Ys
        }), d(""), E(""), _(null), p(null), $(null);
        return;
      }
      if (!H.name.toLowerCase().endsWith(".flo")) {
        p("Please upload a valid .flo file"), _(null);
        return;
      }
      const T = ut(H);
      Je.current = T, r(H), p(null), _("File loaded. Reading embedded tags..."), E("Scanning embedded metadata..."), fe(J()), De(null), qe({
        ...Ys
      }), d(""), $(null);
      try {
        const { metadata: R, audioInfo: q, error: F } = await le(H);
        if (Je.current !== T) return;
        if (F) {
          p(F), _(null);
          return;
        }
        const ae = await H.arrayBuffer(), oe = new Uint8Array(ae);
        L(oe), $(q || null);
        let Te = R ? {
          ...R
        } : {
          ...jm
        };
        if ((!Te.waveform_data || !((_a2 = Te.waveform_data.peaks) == null ? void 0 : _a2.length)) && q) try {
          const Bt = await (await Cs(() => Promise.resolve().then(() => Nm), void 0, import.meta.url)).decode(oe);
          Te.waveform_data = Am(Bt, q.sample_rate, q.channels);
        } catch {
        }
        if (fe(Te), Te.pictures) {
          const tt = Te.pictures.find((Bt) => Bt.picture_type === "cover_front");
          if (tt) {
            const Bt = new Blob([
              tt.data
            ], {
              type: tt.mime_type
            });
            De(URL.createObjectURL(Bt));
          }
        }
        if (Te.synced_lyrics && Te.synced_lyrics.length > 0) {
          const tt = Te.synced_lyrics[0];
          qe({
            type: 1,
            timestampFormat: 2,
            language: tt.language || "eng",
            description: tt.description || "Synced Lyrics",
            text: tt.lines.map((Bt) => [
              Bt.text,
              Bt.timestamp_ms
            ])
          });
        }
        const we = Object.values(Te || {}).filter((tt) => typeof tt == "string" && tt.trim().length > 0).length, Rl = ((_c2 = (_b3 = Te == null ? void 0 : Te.synced_lyrics) == null ? void 0 : _b3[0]) == null ? void 0 : _c2.lines.length) ?? 0, aa = we > 0 || !!q || Rl > 0;
        E(we > 0 ? `Imported ${we} embedded tag${we === 1 ? "" : "s"}.` : "No embedded tags found."), _(aa ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (R) {
        if (Je.current !== T) return;
        console.error("Failed to parse metadata", R), E(""), p("Loaded file, but could not read embedded metadata automatically."), _(null), $(null);
      }
    }, [
      le,
      ut,
      J
    ]), B = (H, y) => {
      fe((T) => ({
        ...T,
        [H]: y
      }));
    };
    function K(H, y) {
      fe((T) => {
        var _a2, _b3, _c2;
        return {
          ...T,
          popularimeter: {
            email: H === "email" ? y : ((_a2 = T.popularimeter) == null ? void 0 : _a2.email) ?? "",
            rating: H === "rating" ? y : ((_b3 = T.popularimeter) == null ? void 0 : _b3.rating) ?? 0,
            play_count: H === "play_count" ? y : ((_c2 = T.popularimeter) == null ? void 0 : _c2.play_count) ?? 0
          }
        };
      });
    }
    const pe = async () => {
      var _a2, _b3;
      if (!s || !C) return;
      p(null), _(null);
      const H = await ge(C, G);
      if (H) {
        const y = (_a2 = G.artist) == null ? void 0 : _a2.trim(), T = (_b3 = G.title) == null ? void 0 : _b3.trim();
        let R;
        y && T ? R = `${y} - ${T}.flo` : T ? R = `${T}.flo` : R = s.name.endsWith(".flo") ? s.name : `${s.name.replace(/\.[^/.]+$/, "")}.flo`, be(H, R), _("File processed and downloaded successfully!");
      } else p("Failed to process file");
    };
    return c.jsxs("div", {
      className: "relative min-h-screen overflow-hidden px-4 py-10 sm:px-6",
      children: [
        c.jsx("div", {
          className: "pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        c.jsx("div", {
          className: "pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[140px] opacity-40",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        c.jsxs("main", {
          className: "relative mx-auto flex max-w-5xl flex-col gap-6",
          children: [
            c.jsxs("section", {
              className: "glass-panel p-6 sm:p-8 space-y-6",
              children: [
                c.jsxs("div", {
                  className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                  children: [
                    c.jsx("div", {
                      className: "space-y-4 lg:max-w-2xl",
                      children: c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          c.jsx("div", {
                            className: "rounded-full bg-primary/12 p-3 text-primary shadow-inner shadow-primary/30",
                            children: c.jsx(Za, {
                              className: "h-6 w-6 icon-accent"
                            })
                          }),
                          c.jsxs("div", {
                            children: [
                              c.jsx("h1", {
                                className: "text-3xl font-semibold hero-title",
                                children: c.jsx("span", {
                                  className: "gradient-text inline-block",
                                  children: "floEditor"
                                })
                              }),
                              c.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Tag flo\u2122 files, embed art, and sync lyrics without leaving your browser."
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    c.jsxs("div", {
                      className: "flex w-full flex-col gap-4 lg:max-w-xs",
                      children: [
                        c.jsxs("div", {
                          className: "rounded-2xl border border-primary/25 bg-primary/5 p-4 text-right shadow-inner shadow-primary/10",
                          children: [
                            c.jsx("p", {
                              className: "micro-label justify-end text-primary/80",
                              children: "Current file"
                            }),
                            c.jsx("p", {
                              className: `text-2xl font-semibold ${s ? "text-primary" : "text-muted-foreground"}`,
                              children: s ? s.name : "No file loaded"
                            }),
                            c.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: s ? "Ready for metadata tweaks." : "Load a flo\u2122 to unlock controls."
                            })
                          ]
                        }),
                        c.jsxs("div", {
                          className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1",
                          children: [
                            c.jsx(Xg, {}),
                            c.jsxs("button", {
                              onClick: () => b(!f),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                c.jsx(By, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                f ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                S && c.jsx(_m, {
                  type: "error",
                  message: S
                }),
                h && c.jsx(_m, {
                  type: "success",
                  message: h
                }),
                c.jsx(jg, {
                  file: s,
                  onFileUpload: O,
                  isParsingMetadata: V,
                  metadataSummary: v
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: nt.map(({ label: H, value: y, helper: T }) => c.jsxs("div", {
                    className: "relative overflow-hidden rounded-xl border px-4 py-3 text-sm text-white shadow-lg shadow-primary/30",
                    style: {
                      backgroundImage: "var(--stat-card-gradient, var(--themegradient-active))",
                      borderColor: "var(--stat-card-border, transparent)"
                    },
                    children: [
                      c.jsx("div", {
                        className: "pointer-events-none absolute inset-0 bg-black/10"
                      }),
                      c.jsxs("div", {
                        className: "relative space-y-1",
                        children: [
                          c.jsx("p", {
                            className: "text-xs font-semibold uppercase tracking-wide text-white/80",
                            children: H
                          }),
                          c.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: y
                          }),
                          c.jsx("p", {
                            className: "text-xs text-white/80",
                            children: T
                          })
                        ]
                      })
                    ]
                  }, H))
                })
              ]
            }),
            c.jsx(xb, {
              metadata: G
            }),
            c.jsx(mb, {
              waveform: G.waveform_data,
              onRegenerate: C && Z ? $e : void 0
            }),
            c.jsx(zg, {
              metadata: G,
              onMetadataChange: B
            }),
            c.jsx(_b, {
              metadata: G,
              onMetadataChange: B
            }),
            c.jsx(Rg, {
              popularimeter: {
                email: ((_a = G.popularimeter) == null ? void 0 : _a.email) ?? "",
                rating: ((_b2 = G.popularimeter) == null ? void 0 : _b2.rating) ?? 0,
                play_count: ((_c = G.popularimeter) == null ? void 0 : _c.play_count) ?? 0
              },
              onChange: K
            }),
            c.jsx(Eg, {
              pictures: G.pictures,
              onPicturesChange: (H) => fe({
                ...G,
                pictures: H
              }),
              coverVariants: G.cover_variants,
              onCoverVariantsChange: (H) => fe({
                ...G,
                cover_variants: H
              }),
              animatedCover: G.animated_cover,
              onAnimatedCoverChange: (H) => fe({
                ...G,
                animated_cover: H
              })
            }),
            c.jsx(Mg, {
              syncedLyrics: G.synced_lyrics,
              onSyncedLyricsChange: (H) => B("synced_lyrics", H),
              unsyncedLyrics: Array.isArray(G.lyrics) ? G.lyrics.map((H) => H.text) : [],
              onUnsyncedLyricsChange: (H) => B("lyrics", H.map((y) => ({
                text: y
              })))
            }),
            c.jsx(Ug, {
              sectionMarkers: G.section_markers,
              onSectionMarkersChange: (H) => fe({
                ...G,
                section_markers: H
              })
            }),
            c.jsx(Dg, {
              bpmMap: G.bpm_map,
              onBpmMapChange: (H) => fe({
                ...G,
                bpm_map: H
              })
            }),
            c.jsx(Cg, {
              keyChanges: G.key_changes,
              onKeyChangesChange: (H) => B("key_changes", H)
            }),
            c.jsx(Bg, {
              creatorNotes: G.creator_notes ?? [],
              onCreatorNotesChange: (H) => B("creator_notes", H)
            }),
            c.jsx(qg, {
              collaborationCredits: G.collaboration_credits ?? [],
              onCollaborationCreditsChange: (H) => B("collaboration_credits", H)
            }),
            c.jsx(Hg, {
              userText: G.user_text ?? [],
              onUserTextChange: (H) => B("user_text", H)
            }),
            c.jsx(Yg, {
              disabled: !s || P,
              isProcessing: P,
              fileName: s == null ? void 0 : s.name,
              onProcess: pe
            })
          ]
        })
      ]
    });
  }
  Ny.createRoot(document.getElementById("root")).render(c.jsx(yy.StrictMode, {
    children: c.jsx(Sb, {})
  }));
})();
export {
  __tla,
  Tm as g
};

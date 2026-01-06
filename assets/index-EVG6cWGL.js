let rm;
let __tla = (async () => {
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const p of document.querySelectorAll('link[rel="modulepreload"]')) r(p);
    new MutationObserver((p) => {
      for (const j of p) if (j.type === "childList") for (const M of j.addedNodes) M.tagName === "LINK" && M.rel === "modulepreload" && r(M);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function m(p) {
      const j = {};
      return p.integrity && (j.integrity = p.integrity), p.referrerPolicy && (j.referrerPolicy = p.referrerPolicy), p.crossOrigin === "use-credentials" ? j.credentials = "include" : p.crossOrigin === "anonymous" ? j.credentials = "omit" : j.credentials = "same-origin", j;
    }
    function r(p) {
      if (p.ep) return;
      p.ep = true;
      const j = m(p);
      fetch(p.href, j);
    }
  })();
  rm = function(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
  };
  var Tf = {
    exports: {}
  }, Mn = {};
  var Ld;
  function Yy() {
    if (Ld) return Mn;
    Ld = 1;
    var f = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
    function m(r, p, j) {
      var M = null;
      if (j !== void 0 && (M = "" + j), p.key !== void 0 && (M = "" + p.key), "key" in p) {
        j = {};
        for (var O in p) O !== "key" && (j[O] = p[O]);
      } else j = p;
      return p = j.ref, {
        $$typeof: f,
        type: r,
        key: M,
        ref: p !== void 0 ? p : null,
        props: j
      };
    }
    return Mn.Fragment = s, Mn.jsx = m, Mn.jsxs = m, Mn;
  }
  var Gd;
  function Ly() {
    return Gd || (Gd = 1, Tf.exports = Yy()), Tf.exports;
  }
  var o = Ly(), jf = {
    exports: {}
  }, k = {};
  var Xd;
  function Gy() {
    if (Xd) return k;
    Xd = 1;
    var f = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), j = Symbol.for("react.consumer"), M = Symbol.for("react.context"), O = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), S = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), D = Symbol.for("react.activity"), L = Symbol.iterator;
    function ct(y) {
      return y === null || typeof y != "object" ? null : (y = L && y[L] || y["@@iterator"], typeof y == "function" ? y : null);
    }
    var yt = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, ft = Object.assign, K = {};
    function Q(y, E, R) {
      this.props = y, this.context = E, this.refs = K, this.updater = R || yt;
    }
    Q.prototype.isReactComponent = {}, Q.prototype.setState = function(y, E) {
      if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, E, "setState");
    }, Q.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    function P() {
    }
    P.prototype = Q.prototype;
    function tt(y, E, R) {
      this.props = y, this.context = E, this.refs = K, this.updater = R || yt;
    }
    var Et = tt.prototype = new P();
    Et.constructor = tt, ft(Et, Q.prototype), Et.isPureReactComponent = true;
    var Wt = Array.isArray;
    function Rt() {
    }
    var F = {
      H: null,
      A: null,
      T: null,
      S: null
    }, Kt = Object.prototype.hasOwnProperty;
    function he(y, E, R) {
      var B = R.ref;
      return {
        $$typeof: f,
        type: y,
        key: E,
        ref: B !== void 0 ? B : null,
        props: R
      };
    }
    function Be(y, E) {
      return he(y.type, E, y.props);
    }
    function kt(y) {
      return typeof y == "object" && y !== null && y.$$typeof === f;
    }
    function Yt(y) {
      var E = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + y.replace(/[=:]/g, function(R) {
        return E[R];
      });
    }
    var qe = /\/+/g;
    function Te(y, E) {
      return typeof y == "object" && y !== null && y.key != null ? Yt("" + y.key) : E.toString(36);
    }
    function ne(y) {
      switch (y.status) {
        case "fulfilled":
          return y.value;
        case "rejected":
          throw y.reason;
        default:
          switch (typeof y.status == "string" ? y.then(Rt, Rt) : (y.status = "pending", y.then(function(E) {
            y.status === "pending" && (y.status = "fulfilled", y.value = E);
          }, function(E) {
            y.status === "pending" && (y.status = "rejected", y.reason = E);
          })), y.status) {
            case "fulfilled":
              return y.value;
            case "rejected":
              throw y.reason;
          }
      }
      throw y;
    }
    function z(y, E, R, B, J) {
      var W = typeof y;
      (W === "undefined" || W === "boolean") && (y = null);
      var st = false;
      if (y === null) st = true;
      else switch (W) {
        case "bigint":
        case "string":
        case "number":
          st = true;
          break;
        case "object":
          switch (y.$$typeof) {
            case f:
            case s:
              st = true;
              break;
            case w:
              return st = y._init, z(st(y._payload), E, R, B, J);
          }
      }
      if (st) return J = J(y), st = B === "" ? "." + Te(y, 0) : B, Wt(J) ? (R = "", st != null && (R = st.replace(qe, "$&/") + "/"), z(J, E, R, "", function(ge) {
        return ge;
      })) : J != null && (kt(J) && (J = Be(J, R + (J.key == null || y && y.key === J.key ? "" : ("" + J.key).replace(qe, "$&/") + "/") + st)), E.push(J)), 1;
      st = 0;
      var Lt = B === "" ? "." : B + ":";
      if (Wt(y)) for (var rt = 0; rt < y.length; rt++) B = y[rt], W = Lt + Te(B, rt), st += z(B, E, R, W, J);
      else if (rt = ct(y), typeof rt == "function") for (y = rt.call(y), rt = 0; !(B = y.next()).done; ) B = B.value, W = Lt + Te(B, rt++), st += z(B, E, R, W, J);
      else if (W === "object") {
        if (typeof y.then == "function") return z(ne(y), E, R, B, J);
        throw E = String(y), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
      }
      return st;
    }
    function C(y, E, R) {
      if (y == null) return y;
      var B = [], J = 0;
      return z(y, B, "", "", function(W) {
        return E.call(R, W, J++);
      }), B;
    }
    function V(y) {
      if (y._status === -1) {
        var E = y._result;
        E = E(), E.then(function(R) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = R);
        }, function(R) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = R);
        }), y._status === -1 && (y._status = 0, y._result = E);
      }
      if (y._status === 1) return y._result.default;
      throw y._result;
    }
    var H = typeof reportError == "function" ? reportError : function(y) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var E = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
          error: y
        });
        if (!window.dispatchEvent(E)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", y);
        return;
      }
      console.error(y);
    }, et = {
      map: C,
      forEach: function(y, E, R) {
        C(y, function() {
          E.apply(this, arguments);
        }, R);
      },
      count: function(y) {
        var E = 0;
        return C(y, function() {
          E++;
        }), E;
      },
      toArray: function(y) {
        return C(y, function(E) {
          return E;
        }) || [];
      },
      only: function(y) {
        if (!kt(y)) throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
    };
    return k.Activity = D, k.Children = et, k.Component = Q, k.Fragment = m, k.Profiler = p, k.PureComponent = tt, k.StrictMode = r, k.Suspense = U, k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, k.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(y) {
        return F.H.useMemoCache(y);
      }
    }, k.cache = function(y) {
      return function() {
        return y.apply(null, arguments);
      };
    }, k.cacheSignal = function() {
      return null;
    }, k.cloneElement = function(y, E, R) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var B = ft({}, y.props), J = y.key;
      if (E != null) for (W in E.key !== void 0 && (J = "" + E.key), E) !Kt.call(E, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && E.ref === void 0 || (B[W] = E[W]);
      var W = arguments.length - 2;
      if (W === 1) B.children = R;
      else if (1 < W) {
        for (var st = Array(W), Lt = 0; Lt < W; Lt++) st[Lt] = arguments[Lt + 2];
        B.children = st;
      }
      return he(y.type, J, B);
    }, k.createContext = function(y) {
      return y = {
        $$typeof: M,
        _currentValue: y,
        _currentValue2: y,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, y.Provider = y, y.Consumer = {
        $$typeof: j,
        _context: y
      }, y;
    }, k.createElement = function(y, E, R) {
      var B, J = {}, W = null;
      if (E != null) for (B in E.key !== void 0 && (W = "" + E.key), E) Kt.call(E, B) && B !== "key" && B !== "__self" && B !== "__source" && (J[B] = E[B]);
      var st = arguments.length - 2;
      if (st === 1) J.children = R;
      else if (1 < st) {
        for (var Lt = Array(st), rt = 0; rt < st; rt++) Lt[rt] = arguments[rt + 2];
        J.children = Lt;
      }
      if (y && y.defaultProps) for (B in st = y.defaultProps, st) J[B] === void 0 && (J[B] = st[B]);
      return he(y, W, J);
    }, k.createRef = function() {
      return {
        current: null
      };
    }, k.forwardRef = function(y) {
      return {
        $$typeof: O,
        render: y
      };
    }, k.isValidElement = kt, k.lazy = function(y) {
      return {
        $$typeof: w,
        _payload: {
          _status: -1,
          _result: y
        },
        _init: V
      };
    }, k.memo = function(y, E) {
      return {
        $$typeof: S,
        type: y,
        compare: E === void 0 ? null : E
      };
    }, k.startTransition = function(y) {
      var E = F.T, R = {};
      F.T = R;
      try {
        var B = y(), J = F.S;
        J !== null && J(R, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(Rt, H);
      } catch (W) {
        H(W);
      } finally {
        E !== null && R.types !== null && (E.types = R.types), F.T = E;
      }
    }, k.unstable_useCacheRefresh = function() {
      return F.H.useCacheRefresh();
    }, k.use = function(y) {
      return F.H.use(y);
    }, k.useActionState = function(y, E, R) {
      return F.H.useActionState(y, E, R);
    }, k.useCallback = function(y, E) {
      return F.H.useCallback(y, E);
    }, k.useContext = function(y) {
      return F.H.useContext(y);
    }, k.useDebugValue = function() {
    }, k.useDeferredValue = function(y, E) {
      return F.H.useDeferredValue(y, E);
    }, k.useEffect = function(y, E) {
      return F.H.useEffect(y, E);
    }, k.useEffectEvent = function(y) {
      return F.H.useEffectEvent(y);
    }, k.useId = function() {
      return F.H.useId();
    }, k.useImperativeHandle = function(y, E, R) {
      return F.H.useImperativeHandle(y, E, R);
    }, k.useInsertionEffect = function(y, E) {
      return F.H.useInsertionEffect(y, E);
    }, k.useLayoutEffect = function(y, E) {
      return F.H.useLayoutEffect(y, E);
    }, k.useMemo = function(y, E) {
      return F.H.useMemo(y, E);
    }, k.useOptimistic = function(y, E) {
      return F.H.useOptimistic(y, E);
    }, k.useReducer = function(y, E, R) {
      return F.H.useReducer(y, E, R);
    }, k.useRef = function(y) {
      return F.H.useRef(y);
    }, k.useState = function(y) {
      return F.H.useState(y);
    }, k.useSyncExternalStore = function(y, E, R) {
      return F.H.useSyncExternalStore(y, E, R);
    }, k.useTransition = function() {
      return F.H.useTransition();
    }, k.version = "19.2.1", k;
  }
  var Qd;
  function Hf() {
    return Qd || (Qd = 1, jf.exports = Gy()), jf.exports;
  }
  var pt = Hf();
  const Xy = rm(pt);
  var Mf = {
    exports: {}
  }, On = {}, Of = {
    exports: {}
  }, Uf = {};
  var Zd;
  function Qy() {
    return Zd || (Zd = 1, (function(f) {
      function s(z, C) {
        var V = z.length;
        z.push(C);
        t: for (; 0 < V; ) {
          var H = V - 1 >>> 1, et = z[H];
          if (0 < p(et, C)) z[H] = C, z[V] = et, V = H;
          else break t;
        }
      }
      function m(z) {
        return z.length === 0 ? null : z[0];
      }
      function r(z) {
        if (z.length === 0) return null;
        var C = z[0], V = z.pop();
        if (V !== C) {
          z[0] = V;
          t: for (var H = 0, et = z.length, y = et >>> 1; H < y; ) {
            var E = 2 * (H + 1) - 1, R = z[E], B = E + 1, J = z[B];
            if (0 > p(R, V)) B < et && 0 > p(J, R) ? (z[H] = J, z[B] = V, H = B) : (z[H] = R, z[E] = V, H = E);
            else if (B < et && 0 > p(J, V)) z[H] = J, z[B] = V, H = B;
            else break t;
          }
        }
        return C;
      }
      function p(z, C) {
        var V = z.sortIndex - C.sortIndex;
        return V !== 0 ? V : z.id - C.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var j = performance;
        f.unstable_now = function() {
          return j.now();
        };
      } else {
        var M = Date, O = M.now();
        f.unstable_now = function() {
          return M.now() - O;
        };
      }
      var U = [], S = [], w = 1, D = null, L = 3, ct = false, yt = false, ft = false, K = false, Q = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, tt = typeof setImmediate < "u" ? setImmediate : null;
      function Et(z) {
        for (var C = m(S); C !== null; ) {
          if (C.callback === null) r(S);
          else if (C.startTime <= z) r(S), C.sortIndex = C.expirationTime, s(U, C);
          else break;
          C = m(S);
        }
      }
      function Wt(z) {
        if (ft = false, Et(z), !yt) if (m(U) !== null) yt = true, Rt || (Rt = true, Yt());
        else {
          var C = m(S);
          C !== null && ne(Wt, C.startTime - z);
        }
      }
      var Rt = false, F = -1, Kt = 5, he = -1;
      function Be() {
        return K ? true : !(f.unstable_now() - he < Kt);
      }
      function kt() {
        if (K = false, Rt) {
          var z = f.unstable_now();
          he = z;
          var C = true;
          try {
            t: {
              yt = false, ft && (ft = false, P(F), F = -1), ct = true;
              var V = L;
              try {
                e: {
                  for (Et(z), D = m(U); D !== null && !(D.expirationTime > z && Be()); ) {
                    var H = D.callback;
                    if (typeof H == "function") {
                      D.callback = null, L = D.priorityLevel;
                      var et = H(D.expirationTime <= z);
                      if (z = f.unstable_now(), typeof et == "function") {
                        D.callback = et, Et(z), C = true;
                        break e;
                      }
                      D === m(U) && r(U), Et(z);
                    } else r(U);
                    D = m(U);
                  }
                  if (D !== null) C = true;
                  else {
                    var y = m(S);
                    y !== null && ne(Wt, y.startTime - z), C = false;
                  }
                }
                break t;
              } finally {
                D = null, L = V, ct = false;
              }
              C = void 0;
            }
          } finally {
            C ? Yt() : Rt = false;
          }
        }
      }
      var Yt;
      if (typeof tt == "function") Yt = function() {
        tt(kt);
      };
      else if (typeof MessageChannel < "u") {
        var qe = new MessageChannel(), Te = qe.port2;
        qe.port1.onmessage = kt, Yt = function() {
          Te.postMessage(null);
        };
      } else Yt = function() {
        Q(kt, 0);
      };
      function ne(z, C) {
        F = Q(function() {
          z(f.unstable_now());
        }, C);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(z) {
        z.callback = null;
      }, f.unstable_forceFrameRate = function(z) {
        0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Kt = 0 < z ? Math.floor(1e3 / z) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return L;
      }, f.unstable_next = function(z) {
        switch (L) {
          case 1:
          case 2:
          case 3:
            var C = 3;
            break;
          default:
            C = L;
        }
        var V = L;
        L = C;
        try {
          return z();
        } finally {
          L = V;
        }
      }, f.unstable_requestPaint = function() {
        K = true;
      }, f.unstable_runWithPriority = function(z, C) {
        switch (z) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            z = 3;
        }
        var V = L;
        L = z;
        try {
          return C();
        } finally {
          L = V;
        }
      }, f.unstable_scheduleCallback = function(z, C, V) {
        var H = f.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? H + V : H) : V = H, z) {
          case 1:
            var et = -1;
            break;
          case 2:
            et = 250;
            break;
          case 5:
            et = 1073741823;
            break;
          case 4:
            et = 1e4;
            break;
          default:
            et = 5e3;
        }
        return et = V + et, z = {
          id: w++,
          callback: C,
          priorityLevel: z,
          startTime: V,
          expirationTime: et,
          sortIndex: -1
        }, V > H ? (z.sortIndex = V, s(S, z), m(U) === null && z === m(S) && (ft ? (P(F), F = -1) : ft = true, ne(Wt, V - H))) : (z.sortIndex = et, s(U, z), yt || ct || (yt = true, Rt || (Rt = true, Yt()))), z;
      }, f.unstable_shouldYield = Be, f.unstable_wrapCallback = function(z) {
        var C = L;
        return function() {
          var V = L;
          L = C;
          try {
            return z.apply(this, arguments);
          } finally {
            L = V;
          }
        };
      };
    })(Uf)), Uf;
  }
  var Vd;
  function Zy() {
    return Vd || (Vd = 1, Of.exports = Qy()), Of.exports;
  }
  var Df = {
    exports: {}
  }, Jt = {};
  var Kd;
  function Vy() {
    if (Kd) return Jt;
    Kd = 1;
    var f = Hf();
    function s(U) {
      var S = "https://react.dev/errors/" + U;
      if (1 < arguments.length) {
        S += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var w = 2; w < arguments.length; w++) S += "&args[]=" + encodeURIComponent(arguments[w]);
      }
      return "Minified React error #" + U + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function m() {
    }
    var r = {
      d: {
        f: m,
        r: function() {
          throw Error(s(522));
        },
        D: m,
        C: m,
        L: m,
        m,
        X: m,
        S: m,
        M: m
      },
      p: 0,
      findDOMNode: null
    }, p = Symbol.for("react.portal");
    function j(U, S, w) {
      var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: p,
        key: D == null ? null : "" + D,
        children: U,
        containerInfo: S,
        implementation: w
      };
    }
    var M = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function O(U, S) {
      if (U === "font") return "";
      if (typeof S == "string") return S === "use-credentials" ? S : "";
    }
    return Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Jt.createPortal = function(U, S) {
      var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11) throw Error(s(299));
      return j(U, S, null, w);
    }, Jt.flushSync = function(U) {
      var S = M.T, w = r.p;
      try {
        if (M.T = null, r.p = 2, U) return U();
      } finally {
        M.T = S, r.p = w, r.d.f();
      }
    }, Jt.preconnect = function(U, S) {
      typeof U == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, r.d.C(U, S));
    }, Jt.prefetchDNS = function(U) {
      typeof U == "string" && r.d.D(U);
    }, Jt.preinit = function(U, S) {
      if (typeof U == "string" && S && typeof S.as == "string") {
        var w = S.as, D = O(w, S.crossOrigin), L = typeof S.integrity == "string" ? S.integrity : void 0, ct = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
        w === "style" ? r.d.S(U, typeof S.precedence == "string" ? S.precedence : void 0, {
          crossOrigin: D,
          integrity: L,
          fetchPriority: ct
        }) : w === "script" && r.d.X(U, {
          crossOrigin: D,
          integrity: L,
          fetchPriority: ct,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0
        });
      }
    }, Jt.preinitModule = function(U, S) {
      if (typeof U == "string") if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var w = O(S.as, S.crossOrigin);
          r.d.M(U, {
            crossOrigin: w,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0
          });
        }
      } else S == null && r.d.M(U);
    }, Jt.preload = function(U, S) {
      if (typeof U == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
        var w = S.as, D = O(w, S.crossOrigin);
        r.d.L(U, w, {
          crossOrigin: D,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          type: typeof S.type == "string" ? S.type : void 0,
          fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
          referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
          imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
          imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
          media: typeof S.media == "string" ? S.media : void 0
        });
      }
    }, Jt.preloadModule = function(U, S) {
      if (typeof U == "string") if (S) {
        var w = O(S.as, S.crossOrigin);
        r.d.m(U, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: w,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0
        });
      } else r.d.m(U);
    }, Jt.requestFormReset = function(U) {
      r.d.r(U);
    }, Jt.unstable_batchedUpdates = function(U, S) {
      return U(S);
    }, Jt.useFormState = function(U, S, w) {
      return M.H.useFormState(U, S, w);
    }, Jt.useFormStatus = function() {
      return M.H.useHostTransitionStatus();
    }, Jt.version = "19.2.1", Jt;
  }
  var Jd;
  function Ky() {
    if (Jd) return Df.exports;
    Jd = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
    }
    return f(), Df.exports = Vy(), Df.exports;
  }
  var kd;
  function Jy() {
    if (kd) return On;
    kd = 1;
    var f = Zy(), s = Hf(), m = Ky();
    function r(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function p(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function j(t) {
      var e = t, l = t;
      if (t.alternate) for (; e.return; ) e = e.return;
      else {
        t = e;
        do
          e = t, (e.flags & 4098) !== 0 && (l = e.return), t = e.return;
        while (t);
      }
      return e.tag === 3 ? l : null;
    }
    function M(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function O(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function U(t) {
      if (j(t) !== t) throw Error(r(188));
    }
    function S(t) {
      var e = t.alternate;
      if (!e) {
        if (e = j(t), e === null) throw Error(r(188));
        return e !== t ? null : t;
      }
      for (var l = t, a = e; ; ) {
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
            if (u === l) return U(n), t;
            if (u === a) return U(n), e;
            u = u.sibling;
          }
          throw Error(r(188));
        }
        if (l.return !== a.return) l = n, a = u;
        else {
          for (var i = false, c = n.child; c; ) {
            if (c === l) {
              i = true, l = n, a = u;
              break;
            }
            if (c === a) {
              i = true, a = n, l = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) {
            for (c = u.child; c; ) {
              if (c === l) {
                i = true, l = u, a = n;
                break;
              }
              if (c === a) {
                i = true, a = u, l = n;
                break;
              }
              c = c.sibling;
            }
            if (!i) throw Error(r(189));
          }
        }
        if (l.alternate !== a) throw Error(r(190));
      }
      if (l.tag !== 3) throw Error(r(188));
      return l.stateNode.current === l ? t : e;
    }
    function w(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = w(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var D = Object.assign, L = Symbol.for("react.element"), ct = Symbol.for("react.transitional.element"), yt = Symbol.for("react.portal"), ft = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), P = Symbol.for("react.consumer"), tt = Symbol.for("react.context"), Et = Symbol.for("react.forward_ref"), Wt = Symbol.for("react.suspense"), Rt = Symbol.for("react.suspense_list"), F = Symbol.for("react.memo"), Kt = Symbol.for("react.lazy"), he = Symbol.for("react.activity"), Be = Symbol.for("react.memo_cache_sentinel"), kt = Symbol.iterator;
    function Yt(t) {
      return t === null || typeof t != "object" ? null : (t = kt && t[kt] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var qe = Symbol.for("react.client.reference");
    function Te(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === qe ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case ft:
          return "Fragment";
        case Q:
          return "Profiler";
        case K:
          return "StrictMode";
        case Wt:
          return "Suspense";
        case Rt:
          return "SuspenseList";
        case he:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case yt:
          return "Portal";
        case tt:
          return t.displayName || "Context";
        case P:
          return (t._context.displayName || "Context") + ".Consumer";
        case Et:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case F:
          return e = t.displayName || null, e !== null ? e : Te(t.type) || "Memo";
        case Kt:
          e = t._payload, t = t._init;
          try {
            return Te(t(e));
          } catch {
          }
      }
      return null;
    }
    var ne = Array.isArray, z = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, C = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, H = [], et = -1;
    function y(t) {
      return {
        current: t
      };
    }
    function E(t) {
      0 > et || (t.current = H[et], H[et] = null, et--);
    }
    function R(t, e) {
      et++, H[et] = t.current, t.current = e;
    }
    var B = y(null), J = y(null), W = y(null), st = y(null);
    function Lt(t, e) {
      switch (R(W, e), R(J, t), R(B, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? sd(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = sd(e), t = rd(e, t);
          else switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
      }
      E(B), R(B, t);
    }
    function rt() {
      E(B), E(J), E(W);
    }
    function ge(t) {
      t.memoizedState !== null && R(st, t);
      var e = B.current, l = rd(e, t.type);
      e !== l && (R(J, t), R(B, l));
    }
    function Yn(t) {
      J.current === t && (E(B), E(J)), st.current === t && (E(st), En._currentValue = V);
    }
    var fi, qf;
    function jl(t) {
      if (fi === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        fi = e && e[1] || "", qf = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + fi + t + qf;
    }
    var si = false;
    function ri(t, e) {
      if (!t || si) return "";
      si = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var T = function() {
                  throw Error();
                };
                if (Object.defineProperty(T.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(T, []);
                  } catch (x) {
                    var _ = x;
                  }
                  Reflect.construct(t, [], T);
                } else {
                  try {
                    T.call();
                  } catch (x) {
                    _ = x;
                  }
                  t.call(T.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  _ = x;
                }
                (T = t()) && typeof T.catch == "function" && T.catch(function() {
                });
              }
            } catch (x) {
              if (x && _ && typeof x.stack == "string") return [
                x.stack,
                _.stack
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
        var u = a.DetermineComponentFrameRoot(), i = u[0], c = u[1];
        if (i && c) {
          var d = i.split(`
`), v = c.split(`
`);
          for (n = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < v.length && !v[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === d.length || n === v.length) for (a = d.length - 1, n = v.length - 1; 1 <= a && 0 <= n && d[a] !== v[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (d[a] !== v[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || d[a] !== v[n]) {
                var A = `
` + d[a].replace(" at new ", " at ");
                return t.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", t.displayName)), A;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        si = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? jl(l) : "";
    }
    function gm(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return jl(t.type);
        case 16:
          return jl("Lazy");
        case 13:
          return t.child !== e && e !== null ? jl("Suspense Fallback") : jl("Suspense");
        case 19:
          return jl("SuspenseList");
        case 0:
        case 15:
          return ri(t.type, false);
        case 11:
          return ri(t.type.render, false);
        case 1:
          return ri(t.type, true);
        case 31:
          return jl("Activity");
        default:
          return "";
      }
    }
    function Yf(t) {
      try {
        var e = "", l = null;
        do
          e += gm(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var oi = Object.prototype.hasOwnProperty, di = f.unstable_scheduleCallback, mi = f.unstable_cancelCallback, bm = f.unstable_shouldYield, vm = f.unstable_requestPaint, ue = f.unstable_now, _m = f.unstable_getCurrentPriorityLevel, Lf = f.unstable_ImmediatePriority, Gf = f.unstable_UserBlockingPriority, Ln = f.unstable_NormalPriority, pm = f.unstable_LowPriority, Xf = f.unstable_IdlePriority, Sm = f.log, xm = f.unstable_setDisableYieldValue, Ha = null, ie = null;
    function al(t) {
      if (typeof Sm == "function" && xm(t), ie && typeof ie.setStrictMode == "function") try {
        ie.setStrictMode(Ha, t);
      } catch {
      }
    }
    var ce = Math.clz32 ? Math.clz32 : Em, Am = Math.log, zm = Math.LN2;
    function Em(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Am(t) / zm | 0) | 0;
    }
    var Gn = 256, Xn = 262144, Qn = 4194304;
    function Ml(t) {
      var e = t & 42;
      if (e !== 0) return e;
      switch (t & -t) {
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
          return t & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return t & 62914560;
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
          return t;
      }
    }
    function Zn(t, e, l) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
      t = t.warmLanes;
      var c = a & 134217727;
      return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ml(a) : (i &= c, i !== 0 ? n = Ml(i) : l || (l = c & ~t, l !== 0 && (n = Ml(l))))) : (c = a & ~u, c !== 0 ? n = Ml(c) : i !== 0 ? n = Ml(i) : l || (l = a & ~t, l !== 0 && (n = Ml(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
    }
    function Ba(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Nm(t, e) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return e + 250;
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
          return e + 5e3;
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
    function Qf() {
      var t = Qn;
      return Qn <<= 1, (Qn & 62914560) === 0 && (Qn = 4194304), t;
    }
    function yi(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function qa(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Tm(t, e, l, a, n, u) {
      var i = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var c = t.entanglements, d = t.expirationTimes, v = t.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var A = 31 - ce(l), T = 1 << A;
        c[A] = 0, d[A] = -1;
        var _ = v[A];
        if (_ !== null) for (v[A] = null, A = 0; A < _.length; A++) {
          var x = _[A];
          x !== null && (x.lane &= -536870913);
        }
        l &= ~T;
      }
      a !== 0 && Zf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
    }
    function Zf(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - ce(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
    }
    function Vf(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var a = 31 - ce(l), n = 1 << a;
        n & e | t[a] & e && (t[a] |= e), l &= ~n;
      }
    }
    function Kf(t, e) {
      var l = e & -e;
      return l = (l & 42) !== 0 ? 1 : hi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
    }
    function hi(t) {
      switch (t) {
        case 2:
          t = 1;
          break;
        case 8:
          t = 4;
          break;
        case 32:
          t = 16;
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
          t = 128;
          break;
        case 268435456:
          t = 134217728;
          break;
        default:
          t = 0;
      }
      return t;
    }
    function gi(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Jf() {
      var t = C.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : wd(t.type));
    }
    function kf(t, e) {
      var l = C.p;
      try {
        return C.p = t, e();
      } finally {
        C.p = l;
      }
    }
    var nl = Math.random().toString(36).slice(2), Gt = "__reactFiber$" + nl, $t = "__reactProps$" + nl, kl = "__reactContainer$" + nl, bi = "__reactEvents$" + nl, jm = "__reactListeners$" + nl, Mm = "__reactHandles$" + nl, Ff = "__reactResources$" + nl, Ya = "__reactMarker$" + nl;
    function vi(t) {
      delete t[Gt], delete t[$t], delete t[bi], delete t[jm], delete t[Mm];
    }
    function Fl(t) {
      var e = t[Gt];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[kl] || l[Gt]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = bd(t); t !== null; ) {
            if (l = t[Gt]) return l;
            t = bd(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function Wl(t) {
      if (t = t[Gt] || t[kl]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function La(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(r(33));
    }
    function $l(t) {
      var e = t[Ff];
      return e || (e = t[Ff] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function Bt(t) {
      t[Ya] = true;
    }
    var Wf = /* @__PURE__ */ new Set(), $f = {};
    function Ol(t, e) {
      Il(t, e), Il(t + "Capture", e);
    }
    function Il(t, e) {
      for ($f[t] = e, t = 0; t < e.length; t++) Wf.add(e[t]);
    }
    var Om = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), If = {}, Pf = {};
    function Um(t) {
      return oi.call(Pf, t) ? true : oi.call(If, t) ? false : Om.test(t) ? Pf[t] = true : (If[t] = true, false);
    }
    function Vn(t, e, l) {
      if (Um(e)) if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + l);
      }
    }
    function Kn(t, e, l) {
      if (l === null) t.removeAttribute(e);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttribute(e, "" + l);
      }
    }
    function Ye(t, e, l, a) {
      if (a === null) t.removeAttribute(l);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(l);
            return;
        }
        t.setAttributeNS(e, l, "" + a);
      }
    }
    function be(t) {
      switch (typeof t) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return t;
        case "object":
          return t;
        default:
          return "";
      }
    }
    function ts(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Dm(t, e, l) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
      if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n = a.get, u = a.set;
        return Object.defineProperty(t, e, {
          configurable: true,
          get: function() {
            return n.call(this);
          },
          set: function(i) {
            l = "" + i, u.call(this, i);
          }
        }), Object.defineProperty(t, e, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(i) {
            l = "" + i;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[e];
          }
        };
      }
    }
    function _i(t) {
      if (!t._valueTracker) {
        var e = ts(t) ? "checked" : "value";
        t._valueTracker = Dm(t, e, "" + t[e]);
      }
    }
    function es(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), a = "";
      return t && (a = ts(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
    }
    function Jn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var wm = /[\n"\\]/g;
    function ve(t) {
      return t.replace(wm, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function pi(t, e, l, a, n, u, i, c) {
      t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + be(e)) : t.value !== "" + be(e) && (t.value = "" + be(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Si(t, i, be(e)) : l != null ? Si(t, i, be(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + be(c) : t.removeAttribute("name");
    }
    function ls(t, e, l, a, n, u, i, c) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          _i(t);
          return;
        }
        l = l != null ? "" + be(l) : "", e = e != null ? "" + be(e) : l, c || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), _i(t);
    }
    function Si(t, e, l) {
      e === "number" && Jn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function Pl(t, e, l, a) {
      if (t = t.options, e) {
        e = {};
        for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
        for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
      } else {
        for (l = "" + be(l), e = null, n = 0; n < t.length; n++) {
          if (t[n].value === l) {
            t[n].selected = true, a && (t[n].defaultSelected = true);
            return;
          }
          e !== null || t[n].disabled || (e = t[n]);
        }
        e !== null && (e.selected = true);
      }
    }
    function as(t, e, l) {
      if (e != null && (e = "" + be(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + be(l) : "";
    }
    function ns(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(r(92));
          if (ne(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = be(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), _i(t);
    }
    function ta(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Cm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function us(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Cm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function is(t, e, l) {
      if (e != null && typeof e != "object") throw Error(r(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && us(t, n, a);
      } else for (var u in e) e.hasOwnProperty(u) && us(t, u, e[u]);
    }
    function xi(t) {
      if (t.indexOf("-") === -1) return false;
      switch (t) {
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
    var Rm = /* @__PURE__ */ new Map([
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
    ]), Hm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function kn(t) {
      return Hm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Le() {
    }
    var Ai = null;
    function zi(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var ea = null, la = null;
    function cs(t) {
      var e = Wl(t);
      if (e && (t = e.stateNode)) {
        var l = t[$t] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (pi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + ve("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var n = a[$t] || null;
                  if (!n) throw Error(r(90));
                  pi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && es(a);
            }
            break t;
          case "textarea":
            as(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && Pl(t, !!l.multiple, e, false);
        }
      }
    }
    var Ei = false;
    function fs(t, e, l) {
      if (Ei) return t(e, l);
      Ei = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (Ei = false, (ea !== null || la !== null) && (Ru(), ea && (e = ea, t = la, la = ea = null, cs(e), t))) for (e = 0; e < t.length; e++) cs(t[e]);
      }
    }
    function Ga(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var a = l[$t] || null;
      if (a === null) return null;
      l = a[e];
      t: switch (e) {
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
          (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
          break t;
        default:
          t = false;
      }
      if (t) return null;
      if (l && typeof l != "function") throw Error(r(231, e, typeof l));
      return l;
    }
    var Ge = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ni = false;
    if (Ge) try {
      var Xa = {};
      Object.defineProperty(Xa, "passive", {
        get: function() {
          Ni = true;
        }
      }), window.addEventListener("test", Xa, Xa), window.removeEventListener("test", Xa, Xa);
    } catch {
      Ni = false;
    }
    var ul = null, Ti = null, Fn = null;
    function ss() {
      if (Fn) return Fn;
      var t, e = Ti, l = e.length, a, n = "value" in ul ? ul.value : ul.textContent, u = n.length;
      for (t = 0; t < l && e[t] === n[t]; t++) ;
      var i = l - t;
      for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
      return Fn = n.slice(t, 1 < a ? 1 - a : void 0);
    }
    function Wn(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function $n() {
      return true;
    }
    function rs() {
      return false;
    }
    function It(t) {
      function e(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var c in t) t.hasOwnProperty(c) && (l = t[c], this[c] = l ? l(u) : u[c]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? $n : rs, this.isPropagationStopped = rs, this;
      }
      return D(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = $n);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = $n);
        },
        persist: function() {
        },
        isPersistent: $n
      }), e;
    }
    var Ul = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, In = It(Ul), Qa = D({}, Ul, {
      view: 0,
      detail: 0
    }), Bm = It(Qa), ji, Mi, Za, Pn = D({}, Qa, {
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
      getModifierState: Ui,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Za && (Za && t.type === "mousemove" ? (ji = t.screenX - Za.screenX, Mi = t.screenY - Za.screenY) : Mi = ji = 0, Za = t), ji);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Mi;
      }
    }), os = It(Pn), qm = D({}, Pn, {
      dataTransfer: 0
    }), Ym = It(qm), Lm = D({}, Qa, {
      relatedTarget: 0
    }), Oi = It(Lm), Gm = D({}, Ul, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Xm = It(Gm), Qm = D({}, Ul, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), Zm = It(Qm), Vm = D({}, Ul, {
      data: 0
    }), ds = It(Vm), Km = {
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
    }, Jm = {
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
    }, km = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Fm(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = km[t]) ? !!e[t] : false;
    }
    function Ui() {
      return Fm;
    }
    var Wm = D({}, Qa, {
      key: function(t) {
        if (t.key) {
          var e = Km[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = Wn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? Jm[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ui,
      charCode: function(t) {
        return t.type === "keypress" ? Wn(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Wn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), $m = It(Wm), Im = D({}, Pn, {
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
    }), ms = It(Im), Pm = D({}, Qa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ui
    }), t0 = It(Pm), e0 = D({}, Ul, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), l0 = It(e0), a0 = D({}, Pn, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), n0 = It(a0), u0 = D({}, Ul, {
      newState: 0,
      oldState: 0
    }), i0 = It(u0), c0 = [
      9,
      13,
      27,
      32
    ], Di = Ge && "CompositionEvent" in window, Va = null;
    Ge && "documentMode" in document && (Va = document.documentMode);
    var f0 = Ge && "TextEvent" in window && !Va, ys = Ge && (!Di || Va && 8 < Va && 11 >= Va), hs = " ", gs = false;
    function bs(t, e) {
      switch (t) {
        case "keyup":
          return c0.indexOf(e.keyCode) !== -1;
        case "keydown":
          return e.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function vs(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var aa = false;
    function s0(t, e) {
      switch (t) {
        case "compositionend":
          return vs(e);
        case "keypress":
          return e.which !== 32 ? null : (gs = true, hs);
        case "textInput":
          return t = e.data, t === hs && gs ? null : t;
        default:
          return null;
      }
    }
    function r0(t, e) {
      if (aa) return t === "compositionend" || !Di && bs(t, e) ? (t = ss(), Fn = Ti = ul = null, aa = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
            if (e.char && 1 < e.char.length) return e.char;
            if (e.which) return String.fromCharCode(e.which);
          }
          return null;
        case "compositionend":
          return ys && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var o0 = {
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
    function _s(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!o0[t.type] : e === "textarea";
    }
    function ps(t, e, l, a) {
      ea ? la ? la.push(a) : la = [
        a
      ] : ea = a, e = Xu(e, "onChange"), 0 < e.length && (l = new In("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var Ka = null, Ja = null;
    function d0(t) {
      ad(t, 0);
    }
    function tu(t) {
      var e = La(t);
      if (es(e)) return t;
    }
    function Ss(t, e) {
      if (t === "change") return e;
    }
    var xs = false;
    if (Ge) {
      var wi;
      if (Ge) {
        var Ci = "oninput" in document;
        if (!Ci) {
          var As = document.createElement("div");
          As.setAttribute("oninput", "return;"), Ci = typeof As.oninput == "function";
        }
        wi = Ci;
      } else wi = false;
      xs = wi && (!document.documentMode || 9 < document.documentMode);
    }
    function zs() {
      Ka && (Ka.detachEvent("onpropertychange", Es), Ja = Ka = null);
    }
    function Es(t) {
      if (t.propertyName === "value" && tu(Ja)) {
        var e = [];
        ps(e, Ja, t, zi(t)), fs(d0, e);
      }
    }
    function m0(t, e, l) {
      t === "focusin" ? (zs(), Ka = e, Ja = l, Ka.attachEvent("onpropertychange", Es)) : t === "focusout" && zs();
    }
    function y0(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return tu(Ja);
    }
    function h0(t, e) {
      if (t === "click") return tu(e);
    }
    function g0(t, e) {
      if (t === "input" || t === "change") return tu(e);
    }
    function b0(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var fe = typeof Object.is == "function" ? Object.is : b0;
    function ka(t, e) {
      if (fe(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), a = Object.keys(e);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!oi.call(e, n) || !fe(t[n], e[n])) return false;
      }
      return true;
    }
    function Ns(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Ts(t, e) {
      var l = Ns(t);
      t = 0;
      for (var a; l; ) {
        if (l.nodeType === 3) {
          if (a = t + l.textContent.length, t <= e && a >= e) return {
            node: l,
            offset: e - t
          };
          t = a;
        }
        t: {
          for (; l; ) {
            if (l.nextSibling) {
              l = l.nextSibling;
              break t;
            }
            l = l.parentNode;
          }
          l = void 0;
        }
        l = Ns(l);
      }
    }
    function js(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? js(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Ms(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Jn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = Jn(t.document);
      }
      return e;
    }
    function Ri(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var v0 = Ge && "documentMode" in document && 11 >= document.documentMode, na = null, Hi = null, Fa = null, Bi = false;
    function Os(t, e, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Bi || na == null || na !== Jn(a) || (a = na, "selectionStart" in a && Ri(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Fa && ka(Fa, a) || (Fa = a, a = Xu(Hi, "onSelect"), 0 < a.length && (e = new In("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: a
      }), e.target = na)));
    }
    function Dl(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var ua = {
      animationend: Dl("Animation", "AnimationEnd"),
      animationiteration: Dl("Animation", "AnimationIteration"),
      animationstart: Dl("Animation", "AnimationStart"),
      transitionrun: Dl("Transition", "TransitionRun"),
      transitionstart: Dl("Transition", "TransitionStart"),
      transitioncancel: Dl("Transition", "TransitionCancel"),
      transitionend: Dl("Transition", "TransitionEnd")
    }, qi = {}, Us = {};
    Ge && (Us = document.createElement("div").style, "AnimationEvent" in window || (delete ua.animationend.animation, delete ua.animationiteration.animation, delete ua.animationstart.animation), "TransitionEvent" in window || delete ua.transitionend.transition);
    function wl(t) {
      if (qi[t]) return qi[t];
      if (!ua[t]) return t;
      var e = ua[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in Us) return qi[t] = e[l];
      return t;
    }
    var Ds = wl("animationend"), ws = wl("animationiteration"), Cs = wl("animationstart"), _0 = wl("transitionrun"), p0 = wl("transitionstart"), S0 = wl("transitioncancel"), Rs = wl("transitionend"), Hs = /* @__PURE__ */ new Map(), Yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Yi.push("scrollEnd");
    function je(t, e) {
      Hs.set(t, e), Ol(e, [
        t
      ]);
    }
    var eu = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var e = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(e)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, _e = [], ia = 0, Li = 0;
    function lu() {
      for (var t = ia, e = Li = ia = 0; e < t; ) {
        var l = _e[e];
        _e[e++] = null;
        var a = _e[e];
        _e[e++] = null;
        var n = _e[e];
        _e[e++] = null;
        var u = _e[e];
        if (_e[e++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Bs(l, n, u);
      }
    }
    function au(t, e, l, a) {
      _e[ia++] = t, _e[ia++] = e, _e[ia++] = l, _e[ia++] = a, Li |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Gi(t, e, l, a) {
      return au(t, e, l, a), nu(t);
    }
    function Cl(t, e) {
      return au(t, null, null, e), nu(t);
    }
    function Bs(t, e, l) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ce(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
        e
      ] : a.push(e), e.lane = l | 536870912), u) : null;
    }
    function nu(t) {
      if (50 < vn) throw vn = 0, Wc = null, Error(r(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var ca = {};
    function x0(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function se(t, e, l, a) {
      return new x0(t, e, l, a);
    }
    function Xi(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Xe(t, e) {
      var l = t.alternate;
      return l === null ? (l = se(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function qs(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function uu(t, e, l, a, n, u) {
      var i = 0;
      if (a = t, typeof t == "function") Xi(t) && (i = 1);
      else if (typeof t == "string") i = Ty(t, l, B.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case he:
          return t = se(31, l, e, n), t.elementType = he, t.lanes = u, t;
        case ft:
          return Rl(l.children, n, u, e);
        case K:
          i = 8, n |= 24;
          break;
        case Q:
          return t = se(12, l, e, n | 2), t.elementType = Q, t.lanes = u, t;
        case Wt:
          return t = se(13, l, e, n), t.elementType = Wt, t.lanes = u, t;
        case Rt:
          return t = se(19, l, e, n), t.elementType = Rt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case tt:
              i = 10;
              break t;
            case P:
              i = 9;
              break t;
            case Et:
              i = 11;
              break t;
            case F:
              i = 14;
              break t;
            case Kt:
              i = 16, a = null;
              break t;
          }
          i = 29, l = Error(r(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = se(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function Rl(t, e, l, a) {
      return t = se(7, t, a, e), t.lanes = l, t;
    }
    function Qi(t, e, l) {
      return t = se(6, t, null, e), t.lanes = l, t;
    }
    function Ys(t) {
      var e = se(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function Zi(t, e, l) {
      return e = se(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var Ls = /* @__PURE__ */ new WeakMap();
    function pe(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = Ls.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: Yf(e)
        }, Ls.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Yf(e)
      };
    }
    var fa = [], sa = 0, iu = null, Wa = 0, Se = [], xe = 0, il = null, De = 1, we = "";
    function Qe(t, e) {
      fa[sa++] = Wa, fa[sa++] = iu, iu = t, Wa = e;
    }
    function Gs(t, e, l) {
      Se[xe++] = De, Se[xe++] = we, Se[xe++] = il, il = t;
      var a = De;
      t = we;
      var n = 32 - ce(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - ce(e) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, De = 1 << 32 - ce(e) + n | l << n | a, we = u + t;
      } else De = 1 << u | l << n | a, we = t;
    }
    function Vi(t) {
      t.return !== null && (Qe(t, 1), Gs(t, 1, 0));
    }
    function Ki(t) {
      for (; t === iu; ) iu = fa[--sa], fa[sa] = null, Wa = fa[--sa], fa[sa] = null;
      for (; t === il; ) il = Se[--xe], Se[xe] = null, we = Se[--xe], Se[xe] = null, De = Se[--xe], Se[xe] = null;
    }
    function Xs(t, e) {
      Se[xe++] = De, Se[xe++] = we, Se[xe++] = il, De = e.id, we = e.overflow, il = t;
    }
    var Xt = null, xt = null, it = false, cl = null, Ae = false, Ji = Error(r(519));
    function fl(t) {
      var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw $a(pe(e, t)), Ji;
    }
    function Qs(t) {
      var e = t.stateNode, l = t.type, a = t.memoizedProps;
      switch (e[Gt] = t, e[$t] = a, l) {
        case "dialog":
          at("cancel", e), at("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          at("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < pn.length; l++) at(pn[l], e);
          break;
        case "source":
          at("error", e);
          break;
        case "img":
        case "image":
        case "link":
          at("error", e), at("load", e);
          break;
        case "details":
          at("toggle", e);
          break;
        case "input":
          at("invalid", e), ls(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          at("invalid", e);
          break;
        case "textarea":
          at("invalid", e), ns(e, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || cd(e.textContent, l) ? (a.popover != null && (at("beforetoggle", e), at("toggle", e)), a.onScroll != null && at("scroll", e), a.onScrollEnd != null && at("scrollend", e), a.onClick != null && (e.onclick = Le), e = true) : e = false, e || fl(t, true);
    }
    function Zs(t) {
      for (Xt = t.return; Xt; ) switch (Xt.tag) {
        case 5:
        case 31:
        case 13:
          Ae = false;
          return;
        case 27:
        case 3:
          Ae = true;
          return;
        default:
          Xt = Xt.return;
      }
    }
    function ra(t) {
      if (t !== Xt) return false;
      if (!it) return Zs(t), it = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || df(t.type, t.memoizedProps)), l = !l), l && xt && fl(t), Zs(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        xt = gd(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        xt = gd(t);
      } else e === 27 ? (e = xt, xl(t.type) ? (t = bf, bf = null, xt = t) : xt = e) : xt = Xt ? Ee(t.stateNode.nextSibling) : null;
      return true;
    }
    function Hl() {
      xt = Xt = null, it = false;
    }
    function ki() {
      var t = cl;
      return t !== null && (le === null ? le = t : le.push.apply(le, t), cl = null), t;
    }
    function $a(t) {
      cl === null ? cl = [
        t
      ] : cl.push(t);
    }
    var Fi = y(null), Bl = null, Ze = null;
    function sl(t, e, l) {
      R(Fi, e._currentValue), e._currentValue = l;
    }
    function Ve(t) {
      t._currentValue = Fi.current, E(Fi);
    }
    function Wi(t, e, l) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
        t = t.return;
      }
    }
    function $i(t, e, l, a) {
      var n = t.child;
      for (n !== null && (n.return = t); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var i = n.child;
          u = u.firstContext;
          t: for (; u !== null; ) {
            var c = u;
            u = n;
            for (var d = 0; d < e.length; d++) if (c.context === e[d]) {
              u.lanes |= l, c = u.alternate, c !== null && (c.lanes |= l), Wi(u.return, l, t), a || (i = null);
              break t;
            }
            u = c.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(r(341));
          i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Wi(i, l, t), i = null;
        } else i = n.child;
        if (i !== null) i.return = n;
        else for (i = n; i !== null; ) {
          if (i === t) {
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
    function oa(t, e, l, a) {
      t = null;
      for (var n = e, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(r(387));
          if (i = i.memoizedProps, i !== null) {
            var c = n.type;
            fe(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [
              c
            ]);
          }
        } else if (n === st.current) {
          if (i = n.alternate, i === null) throw Error(r(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(En) : t = [
            En
          ]);
        }
        n = n.return;
      }
      t !== null && $i(e, t, l, a), e.flags |= 262144;
    }
    function cu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!fe(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function ql(t) {
      Bl = t, Ze = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Qt(t) {
      return Vs(Bl, t);
    }
    function fu(t, e) {
      return Bl === null && ql(t), Vs(t, e);
    }
    function Vs(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, Ze === null) {
        if (t === null) throw Error(r(308));
        Ze = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else Ze = Ze.next = e;
      return l;
    }
    var A0 = typeof AbortController < "u" ? AbortController : function() {
      var t = [], e = this.signal = {
        aborted: false,
        addEventListener: function(l, a) {
          t.push(a);
        }
      };
      this.abort = function() {
        e.aborted = true, t.forEach(function(l) {
          return l();
        });
      };
    }, z0 = f.unstable_scheduleCallback, E0 = f.unstable_NormalPriority, Ot = {
      $$typeof: tt,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Ii() {
      return {
        controller: new A0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Ia(t) {
      t.refCount--, t.refCount === 0 && z0(E0, function() {
        t.controller.abort();
      });
    }
    var Pa = null, Pi = 0, da = 0, ma = null;
    function N0(t, e) {
      if (Pa === null) {
        var l = Pa = [];
        Pi = 0, da = lf(), ma = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return Pi++, e.then(Ks, Ks), e;
    }
    function Ks() {
      if (--Pi === 0 && Pa !== null) {
        ma !== null && (ma.status = "fulfilled");
        var t = Pa;
        Pa = null, da = 0, ma = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function T0(t, e) {
      var l = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          l.push(n);
        }
      };
      return t.then(function() {
        a.status = "fulfilled", a.value = e;
        for (var n = 0; n < l.length; n++) (0, l[n])(e);
      }, function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++) (0, l[n])(void 0);
      }), a;
    }
    var Js = z.S;
    z.S = function(t, e) {
      Uo = ue(), typeof e == "object" && e !== null && typeof e.then == "function" && N0(t, e), Js !== null && Js(t, e);
    };
    var Yl = y(null);
    function tc() {
      var t = Yl.current;
      return t !== null ? t : St.pooledCache;
    }
    function su(t, e) {
      e === null ? R(Yl, Yl.current) : R(Yl, e.pool);
    }
    function ks() {
      var t = tc();
      return t === null ? null : {
        parent: Ot._currentValue,
        pool: t
      };
    }
    var ya = Error(r(460)), ec = Error(r(474)), ru = Error(r(542)), ou = {
      then: function() {
      }
    };
    function Fs(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Ws(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Le, Le), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, Is(t), t;
        default:
          if (typeof e.status == "string") e.then(Le, Le);
          else {
            if (t = St, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
            t = e, t.status = "pending", t.then(function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "fulfilled", n.value = a;
              }
            }, function(a) {
              if (e.status === "pending") {
                var n = e;
                n.status = "rejected", n.reason = a;
              }
            });
          }
          switch (e.status) {
            case "fulfilled":
              return e.value;
            case "rejected":
              throw t = e.reason, Is(t), t;
          }
          throw Gl = e, ya;
      }
    }
    function Ll(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Gl = l, ya) : l;
      }
    }
    var Gl = null;
    function $s() {
      if (Gl === null) throw Error(r(459));
      var t = Gl;
      return Gl = null, t;
    }
    function Is(t) {
      if (t === ya || t === ru) throw Error(r(483));
    }
    var ha = null, tn = 0;
    function du(t) {
      var e = tn;
      return tn += 1, ha === null && (ha = []), Ws(ha, t, e);
    }
    function en(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function mu(t, e) {
      throw e.$$typeof === L ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function Ps(t) {
      function e(g, h) {
        if (t) {
          var b = g.deletions;
          b === null ? (g.deletions = [
            h
          ], g.flags |= 16) : b.push(h);
        }
      }
      function l(g, h) {
        if (!t) return null;
        for (; h !== null; ) e(g, h), h = h.sibling;
        return null;
      }
      function a(g) {
        for (var h = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? h.set(g.key, g) : h.set(g.index, g), g = g.sibling;
        return h;
      }
      function n(g, h) {
        return g = Xe(g, h), g.index = 0, g.sibling = null, g;
      }
      function u(g, h, b) {
        return g.index = b, t ? (b = g.alternate, b !== null ? (b = b.index, b < h ? (g.flags |= 67108866, h) : b) : (g.flags |= 67108866, h)) : (g.flags |= 1048576, h);
      }
      function i(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function c(g, h, b, N) {
        return h === null || h.tag !== 6 ? (h = Qi(b, g.mode, N), h.return = g, h) : (h = n(h, b), h.return = g, h);
      }
      function d(g, h, b, N) {
        var X = b.type;
        return X === ft ? A(g, h, b.props.children, N, b.key) : h !== null && (h.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Kt && Ll(X) === h.type) ? (h = n(h, b.props), en(h, b), h.return = g, h) : (h = uu(b.type, b.key, b.props, null, g.mode, N), en(h, b), h.return = g, h);
      }
      function v(g, h, b, N) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== b.containerInfo || h.stateNode.implementation !== b.implementation ? (h = Zi(b, g.mode, N), h.return = g, h) : (h = n(h, b.children || []), h.return = g, h);
      }
      function A(g, h, b, N, X) {
        return h === null || h.tag !== 7 ? (h = Rl(b, g.mode, N, X), h.return = g, h) : (h = n(h, b), h.return = g, h);
      }
      function T(g, h, b) {
        if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = Qi("" + h, g.mode, b), h.return = g, h;
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case ct:
              return b = uu(h.type, h.key, h.props, null, g.mode, b), en(b, h), b.return = g, b;
            case yt:
              return h = Zi(h, g.mode, b), h.return = g, h;
            case Kt:
              return h = Ll(h), T(g, h, b);
          }
          if (ne(h) || Yt(h)) return h = Rl(h, g.mode, b, null), h.return = g, h;
          if (typeof h.then == "function") return T(g, du(h), b);
          if (h.$$typeof === tt) return T(g, fu(g, h), b);
          mu(g, h);
        }
        return null;
      }
      function _(g, h, b, N) {
        var X = h !== null ? h.key : null;
        if (typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint") return X !== null ? null : c(g, h, "" + b, N);
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ct:
              return b.key === X ? d(g, h, b, N) : null;
            case yt:
              return b.key === X ? v(g, h, b, N) : null;
            case Kt:
              return b = Ll(b), _(g, h, b, N);
          }
          if (ne(b) || Yt(b)) return X !== null ? null : A(g, h, b, N, null);
          if (typeof b.then == "function") return _(g, h, du(b), N);
          if (b.$$typeof === tt) return _(g, h, fu(g, b), N);
          mu(g, b);
        }
        return null;
      }
      function x(g, h, b, N, X) {
        if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint") return g = g.get(b) || null, c(h, g, "" + N, X);
        if (typeof N == "object" && N !== null) {
          switch (N.$$typeof) {
            case ct:
              return g = g.get(N.key === null ? b : N.key) || null, d(h, g, N, X);
            case yt:
              return g = g.get(N.key === null ? b : N.key) || null, v(h, g, N, X);
            case Kt:
              return N = Ll(N), x(g, h, b, N, X);
          }
          if (ne(N) || Yt(N)) return g = g.get(b) || null, A(h, g, N, X, null);
          if (typeof N.then == "function") return x(g, h, b, du(N), X);
          if (N.$$typeof === tt) return x(g, h, b, fu(h, N), X);
          mu(h, N);
        }
        return null;
      }
      function q(g, h, b, N) {
        for (var X = null, ot = null, Y = h, I = h = 0, ut = null; Y !== null && I < b.length; I++) {
          Y.index > I ? (ut = Y, Y = null) : ut = Y.sibling;
          var dt = _(g, Y, b[I], N);
          if (dt === null) {
            Y === null && (Y = ut);
            break;
          }
          t && Y && dt.alternate === null && e(g, Y), h = u(dt, h, I), ot === null ? X = dt : ot.sibling = dt, ot = dt, Y = ut;
        }
        if (I === b.length) return l(g, Y), it && Qe(g, I), X;
        if (Y === null) {
          for (; I < b.length; I++) Y = T(g, b[I], N), Y !== null && (h = u(Y, h, I), ot === null ? X = Y : ot.sibling = Y, ot = Y);
          return it && Qe(g, I), X;
        }
        for (Y = a(Y); I < b.length; I++) ut = x(Y, g, I, b[I], N), ut !== null && (t && ut.alternate !== null && Y.delete(ut.key === null ? I : ut.key), h = u(ut, h, I), ot === null ? X = ut : ot.sibling = ut, ot = ut);
        return t && Y.forEach(function(Tl) {
          return e(g, Tl);
        }), it && Qe(g, I), X;
      }
      function Z(g, h, b, N) {
        if (b == null) throw Error(r(151));
        for (var X = null, ot = null, Y = h, I = h = 0, ut = null, dt = b.next(); Y !== null && !dt.done; I++, dt = b.next()) {
          Y.index > I ? (ut = Y, Y = null) : ut = Y.sibling;
          var Tl = _(g, Y, dt.value, N);
          if (Tl === null) {
            Y === null && (Y = ut);
            break;
          }
          t && Y && Tl.alternate === null && e(g, Y), h = u(Tl, h, I), ot === null ? X = Tl : ot.sibling = Tl, ot = Tl, Y = ut;
        }
        if (dt.done) return l(g, Y), it && Qe(g, I), X;
        if (Y === null) {
          for (; !dt.done; I++, dt = b.next()) dt = T(g, dt.value, N), dt !== null && (h = u(dt, h, I), ot === null ? X = dt : ot.sibling = dt, ot = dt);
          return it && Qe(g, I), X;
        }
        for (Y = a(Y); !dt.done; I++, dt = b.next()) dt = x(Y, g, I, dt.value, N), dt !== null && (t && dt.alternate !== null && Y.delete(dt.key === null ? I : dt.key), h = u(dt, h, I), ot === null ? X = dt : ot.sibling = dt, ot = dt);
        return t && Y.forEach(function(qy) {
          return e(g, qy);
        }), it && Qe(g, I), X;
      }
      function _t(g, h, b, N) {
        if (typeof b == "object" && b !== null && b.type === ft && b.key === null && (b = b.props.children), typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case ct:
              t: {
                for (var X = b.key; h !== null; ) {
                  if (h.key === X) {
                    if (X = b.type, X === ft) {
                      if (h.tag === 7) {
                        l(g, h.sibling), N = n(h, b.props.children), N.return = g, g = N;
                        break t;
                      }
                    } else if (h.elementType === X || typeof X == "object" && X !== null && X.$$typeof === Kt && Ll(X) === h.type) {
                      l(g, h.sibling), N = n(h, b.props), en(N, b), N.return = g, g = N;
                      break t;
                    }
                    l(g, h);
                    break;
                  } else e(g, h);
                  h = h.sibling;
                }
                b.type === ft ? (N = Rl(b.props.children, g.mode, N, b.key), N.return = g, g = N) : (N = uu(b.type, b.key, b.props, null, g.mode, N), en(N, b), N.return = g, g = N);
              }
              return i(g);
            case yt:
              t: {
                for (X = b.key; h !== null; ) {
                  if (h.key === X) if (h.tag === 4 && h.stateNode.containerInfo === b.containerInfo && h.stateNode.implementation === b.implementation) {
                    l(g, h.sibling), N = n(h, b.children || []), N.return = g, g = N;
                    break t;
                  } else {
                    l(g, h);
                    break;
                  }
                  else e(g, h);
                  h = h.sibling;
                }
                N = Zi(b, g.mode, N), N.return = g, g = N;
              }
              return i(g);
            case Kt:
              return b = Ll(b), _t(g, h, b, N);
          }
          if (ne(b)) return q(g, h, b, N);
          if (Yt(b)) {
            if (X = Yt(b), typeof X != "function") throw Error(r(150));
            return b = X.call(b), Z(g, h, b, N);
          }
          if (typeof b.then == "function") return _t(g, h, du(b), N);
          if (b.$$typeof === tt) return _t(g, h, fu(g, b), N);
          mu(g, b);
        }
        return typeof b == "string" && b !== "" || typeof b == "number" || typeof b == "bigint" ? (b = "" + b, h !== null && h.tag === 6 ? (l(g, h.sibling), N = n(h, b), N.return = g, g = N) : (l(g, h), N = Qi(b, g.mode, N), N.return = g, g = N), i(g)) : l(g, h);
      }
      return function(g, h, b, N) {
        try {
          tn = 0;
          var X = _t(g, h, b, N);
          return ha = null, X;
        } catch (Y) {
          if (Y === ya || Y === ru) throw Y;
          var ot = se(29, Y, null, g.mode);
          return ot.lanes = N, ot.return = g, ot;
        } finally {
        }
      };
    }
    var Xl = Ps(true), tr = Ps(false), rl = false;
    function lc(t) {
      t.updateQueue = {
        baseState: t.memoizedState,
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
    function ac(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function ol(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function dl(t, e, l) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (mt & 2) !== 0) {
        var n = a.pending;
        return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = nu(t), Bs(t, null, l), e;
      }
      return au(t, a, e, l), nu(t);
    }
    function ln(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Vf(t, l);
      }
    }
    function nc(t, e) {
      var l = t.updateQueue, a = t.alternate;
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
          u === null ? n = u = e : u = u.next = e;
        } else n = u = e;
        l = {
          baseState: a.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: u,
          shared: a.shared,
          callbacks: a.callbacks
        }, t.updateQueue = l;
        return;
      }
      t = l.lastBaseUpdate, t === null ? l.firstBaseUpdate = e : t.next = e, l.lastBaseUpdate = e;
    }
    var uc = false;
    function an() {
      if (uc) {
        var t = ma;
        if (t !== null) throw t;
      }
    }
    function nn(t, e, l, a) {
      uc = false;
      var n = t.updateQueue;
      rl = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
      if (c !== null) {
        n.shared.pending = null;
        var d = c, v = d.next;
        d.next = null, i === null ? u = v : i.next = v, i = d;
        var A = t.alternate;
        A !== null && (A = A.updateQueue, c = A.lastBaseUpdate, c !== i && (c === null ? A.firstBaseUpdate = v : c.next = v, A.lastBaseUpdate = d));
      }
      if (u !== null) {
        var T = n.baseState;
        i = 0, A = v = d = null, c = u;
        do {
          var _ = c.lane & -536870913, x = _ !== c.lane;
          if (x ? (nt & _) === _ : (a & _) === _) {
            _ !== 0 && _ === da && (uc = true), A !== null && (A = A.next = {
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: null,
              next: null
            });
            t: {
              var q = t, Z = c;
              _ = e;
              var _t = l;
              switch (Z.tag) {
                case 1:
                  if (q = Z.payload, typeof q == "function") {
                    T = q.call(_t, T, _);
                    break t;
                  }
                  T = q;
                  break t;
                case 3:
                  q.flags = q.flags & -65537 | 128;
                case 0:
                  if (q = Z.payload, _ = typeof q == "function" ? q.call(_t, T, _) : q, _ == null) break t;
                  T = D({}, T, _);
                  break t;
                case 2:
                  rl = true;
              }
            }
            _ = c.callback, _ !== null && (t.flags |= 64, x && (t.flags |= 8192), x = n.callbacks, x === null ? n.callbacks = [
              _
            ] : x.push(_));
          } else x = {
            lane: _,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, A === null ? (v = A = x, d = T) : A = A.next = x, i |= _;
          if (c = c.next, c === null) {
            if (c = n.shared.pending, c === null) break;
            x = c, c = x.next, x.next = null, n.lastBaseUpdate = x, n.shared.pending = null;
          }
        } while (true);
        A === null && (d = T), n.baseState = d, n.firstBaseUpdate = v, n.lastBaseUpdate = A, u === null && (n.shared.lanes = 0), bl |= i, t.lanes = i, t.memoizedState = T;
      }
    }
    function er(t, e) {
      if (typeof t != "function") throw Error(r(191, t));
      t.call(e);
    }
    function lr(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) er(l[t], e);
    }
    var ga = y(null), yu = y(0);
    function ar(t, e) {
      t = tl, R(yu, t), R(ga, e), tl = t | e.baseLanes;
    }
    function ic() {
      R(yu, tl), R(ga, ga.current);
    }
    function cc() {
      tl = yu.current, E(ga), E(yu);
    }
    var re = y(null), ze = null;
    function ml(t) {
      var e = t.alternate;
      R(jt, jt.current & 1), R(re, t), ze === null && (e === null || ga.current !== null || e.memoizedState !== null) && (ze = t);
    }
    function fc(t) {
      R(jt, jt.current), R(re, t), ze === null && (ze = t);
    }
    function nr(t) {
      t.tag === 22 ? (R(jt, jt.current), R(re, t), ze === null && (ze = t)) : yl();
    }
    function yl() {
      R(jt, jt.current), R(re, re.current);
    }
    function oe(t) {
      E(re), ze === t && (ze = null), E(jt);
    }
    var jt = y(0);
    function hu(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || hf(l) || gf(l))) return e;
        } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) {
          if ((e.flags & 128) !== 0) return e;
        } else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return null;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      return null;
    }
    var Ke = 0, $ = null, bt = null, Ut = null, gu = false, ba = false, Ql = false, bu = 0, un = 0, va = null, j0 = 0;
    function Nt() {
      throw Error(r(321));
    }
    function sc(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!fe(t[l], e[l])) return false;
      return true;
    }
    function rc(t, e, l, a, n, u) {
      return Ke = u, $ = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, z.H = t === null || t.memoizedState === null ? Gr : Ec, Ql = false, u = l(a, n), Ql = false, ba && (u = ir(e, l, a, n)), ur(t), u;
    }
    function ur(t) {
      z.H = sn;
      var e = bt !== null && bt.next !== null;
      if (Ke = 0, Ut = bt = $ = null, gu = false, un = 0, va = null, e) throw Error(r(300));
      t === null || Dt || (t = t.dependencies, t !== null && cu(t) && (Dt = true));
    }
    function ir(t, e, l, a) {
      $ = t;
      var n = 0;
      do {
        if (ba && (va = null), un = 0, ba = false, 25 <= n) throw Error(r(301));
        if (n += 1, Ut = bt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        z.H = Xr, u = e(l, a);
      } while (ba);
      return u;
    }
    function M0() {
      var t = z.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? cn(e) : e, t = t.useState()[0], (bt !== null ? bt.memoizedState : null) !== t && ($.flags |= 1024), e;
    }
    function oc() {
      var t = bu !== 0;
      return bu = 0, t;
    }
    function dc(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function mc(t) {
      if (gu) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        gu = false;
      }
      Ke = 0, Ut = bt = $ = null, ba = false, un = bu = 0, va = null;
    }
    function Ft() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ut === null ? $.memoizedState = Ut = t : Ut = Ut.next = t, Ut;
    }
    function Mt() {
      if (bt === null) {
        var t = $.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = bt.next;
      var e = Ut === null ? $.memoizedState : Ut.next;
      if (e !== null) Ut = e, bt = t;
      else {
        if (t === null) throw $.alternate === null ? Error(r(467)) : Error(r(310));
        bt = t, t = {
          memoizedState: bt.memoizedState,
          baseState: bt.baseState,
          baseQueue: bt.baseQueue,
          queue: bt.queue,
          next: null
        }, Ut === null ? $.memoizedState = Ut = t : Ut = Ut.next = t;
      }
      return Ut;
    }
    function vu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function cn(t) {
      var e = un;
      return un += 1, va === null && (va = []), t = Ws(va, t, e), e = $, (Ut === null ? e.memoizedState : Ut.next) === null && (e = e.alternate, z.H = e === null || e.memoizedState === null ? Gr : Ec), t;
    }
    function _u(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return cn(t);
        if (t.$$typeof === tt) return Qt(t);
      }
      throw Error(r(438, String(t)));
    }
    function yc(t) {
      var e = null, l = $.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var a = $.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
          data: a.data.map(function(n) {
            return n.slice();
          }),
          index: 0
        })));
      }
      if (e == null && (e = {
        data: [],
        index: 0
      }), l === null && (l = vu(), $.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Be;
      return e.index++, l;
    }
    function Je(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function pu(t) {
      var e = Mt();
      return hc(e, bt, t);
    }
    function hc(t, e, l) {
      var a = t.queue;
      if (a === null) throw Error(r(311));
      a.lastRenderedReducer = l;
      var n = t.baseQueue, u = a.pending;
      if (u !== null) {
        if (n !== null) {
          var i = n.next;
          n.next = u.next, u.next = i;
        }
        e.baseQueue = n = u, a.pending = null;
      }
      if (u = t.baseState, n === null) t.memoizedState = u;
      else {
        e = n.next;
        var c = i = null, d = null, v = e, A = false;
        do {
          var T = v.lane & -536870913;
          if (T !== v.lane ? (nt & T) === T : (Ke & T) === T) {
            var _ = v.revertLane;
            if (_ === 0) d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), T === da && (A = true);
            else if ((Ke & _) === _) {
              v = v.next, _ === da && (A = true);
              continue;
            } else T = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, d === null ? (c = d = T, i = u) : d = d.next = T, $.lanes |= _, bl |= _;
            T = v.action, Ql && l(u, T), u = v.hasEagerState ? v.eagerState : l(u, T);
          } else _ = {
            lane: T,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, d === null ? (c = d = _, i = u) : d = d.next = _, $.lanes |= T, bl |= T;
          v = v.next;
        } while (v !== null && v !== e);
        if (d === null ? i = u : d.next = c, !fe(u, t.memoizedState) && (Dt = true, A && (l = ma, l !== null))) throw l;
        t.memoizedState = u, t.baseState = i, t.baseQueue = d, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function gc(t) {
      var e = Mt(), l = e.queue;
      if (l === null) throw Error(r(311));
      l.lastRenderedReducer = t;
      var a = l.dispatch, n = l.pending, u = e.memoizedState;
      if (n !== null) {
        l.pending = null;
        var i = n = n.next;
        do
          u = t(u, i.action), i = i.next;
        while (i !== n);
        fe(u, e.memoizedState) || (Dt = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function cr(t, e, l) {
      var a = $, n = Mt(), u = it;
      if (u) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else l = e();
      var i = !fe((bt || n).memoizedState, l);
      if (i && (n.memoizedState = l, Dt = true), n = n.queue, _c(rr.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== e || i || Ut !== null && Ut.memoizedState.tag & 1) {
        if (a.flags |= 2048, _a(9, {
          destroy: void 0
        }, sr.bind(null, a, n, l, e), null), St === null) throw Error(r(349));
        u || (Ke & 127) !== 0 || fr(a, e, l);
      }
      return l;
    }
    function fr(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = $.updateQueue, e === null ? (e = vu(), $.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function sr(t, e, l, a) {
      e.value = l, e.getSnapshot = a, or(e) && dr(t);
    }
    function rr(t, e, l) {
      return l(function() {
        or(e) && dr(t);
      });
    }
    function or(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !fe(t, l);
      } catch {
        return true;
      }
    }
    function dr(t) {
      var e = Cl(t, 2);
      e !== null && ae(e, t, 2);
    }
    function bc(t) {
      var e = Ft();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), Ql) {
          al(true);
          try {
            l();
          } finally {
            al(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Je,
        lastRenderedState: t
      }, e;
    }
    function mr(t, e, l, a) {
      return t.baseState = l, hc(t, bt, typeof a == "function" ? a : Je);
    }
    function O0(t, e, l, a, n) {
      if (Au(t)) throw Error(r(485));
      if (t = e.action, t !== null) {
        var u = {
          payload: n,
          action: t,
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
        z.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, yr(e, u)) : (u.next = l.next, e.pending = l.next = u);
      }
    }
    function yr(t, e) {
      var l = e.action, a = e.payload, n = t.state;
      if (e.isTransition) {
        var u = z.T, i = {};
        z.T = i;
        try {
          var c = l(n, a), d = z.S;
          d !== null && d(i, c), hr(t, e, c);
        } catch (v) {
          vc(t, e, v);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), z.T = u;
        }
      } else try {
        u = l(n, a), hr(t, e, u);
      } catch (v) {
        vc(t, e, v);
      }
    }
    function hr(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        gr(t, e, a);
      }, function(a) {
        return vc(t, e, a);
      }) : gr(t, e, l);
    }
    function gr(t, e, l) {
      e.status = "fulfilled", e.value = l, br(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, yr(t, l)));
    }
    function vc(t, e, l) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = l, br(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function br(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function vr(t, e) {
      return e;
    }
    function _r(t, e) {
      if (it) {
        var l = St.formState;
        if (l !== null) {
          t: {
            var a = $;
            if (it) {
              if (xt) {
                e: {
                  for (var n = xt, u = Ae; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break e;
                    }
                    if (n = Ee(n.nextSibling), n === null) {
                      n = null;
                      break e;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  xt = Ee(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              fl(a);
            }
            a = false;
          }
          a && (e = l[0]);
        }
      }
      return l = Ft(), l.memoizedState = l.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vr,
        lastRenderedState: e
      }, l.queue = a, l = qr.bind(null, $, a), a.dispatch = l, a = bc(false), u = zc.bind(null, $, false, a.queue), a = Ft(), n = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = n, l = O0.bind(null, $, n, u, l), n.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function pr(t) {
      var e = Mt();
      return Sr(e, bt, t);
    }
    function Sr(t, e, l) {
      if (e = hc(t, e, vr)[0], t = pu(Je)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = cn(e);
      } catch (i) {
        throw i === ya ? ru : i;
      }
      else a = e;
      e = Mt();
      var n = e.queue, u = n.dispatch;
      return l !== e.memoizedState && ($.flags |= 2048, _a(9, {
        destroy: void 0
      }, U0.bind(null, n, l), null)), [
        a,
        u,
        t
      ];
    }
    function U0(t, e) {
      t.action = e;
    }
    function xr(t) {
      var e = Mt(), l = bt;
      if (l !== null) return Sr(e, l, t);
      Mt(), e = e.memoizedState, l = Mt();
      var a = l.queue.dispatch;
      return l.memoizedState = t, [
        e,
        a,
        false
      ];
    }
    function _a(t, e, l, a) {
      return t = {
        tag: t,
        create: l,
        deps: a,
        inst: e,
        next: null
      }, e = $.updateQueue, e === null && (e = vu(), $.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function Ar() {
      return Mt().memoizedState;
    }
    function Su(t, e, l, a) {
      var n = Ft();
      $.flags |= t, n.memoizedState = _a(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function xu(t, e, l, a) {
      var n = Mt();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      bt !== null && a !== null && sc(a, bt.memoizedState.deps) ? n.memoizedState = _a(e, u, l, a) : ($.flags |= t, n.memoizedState = _a(1 | e, u, l, a));
    }
    function zr(t, e) {
      Su(8390656, 8, t, e);
    }
    function _c(t, e) {
      xu(2048, 8, t, e);
    }
    function D0(t) {
      $.flags |= 4;
      var e = $.updateQueue;
      if (e === null) e = vu(), $.updateQueue = e, e.events = [
        t
      ];
      else {
        var l = e.events;
        l === null ? e.events = [
          t
        ] : l.push(t);
      }
    }
    function Er(t) {
      var e = Mt().memoizedState;
      return D0({
        ref: e,
        nextImpl: t
      }), function() {
        if ((mt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function Nr(t, e) {
      return xu(4, 2, t, e);
    }
    function Tr(t, e) {
      return xu(4, 4, t, e);
    }
    function jr(t, e) {
      if (typeof e == "function") {
        t = t();
        var l = e(t);
        return function() {
          typeof l == "function" ? l() : e(null);
        };
      }
      if (e != null) return t = t(), e.current = t, function() {
        e.current = null;
      };
    }
    function Mr(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, xu(4, 4, jr.bind(null, e, t), l);
    }
    function pc() {
    }
    function Or(t, e) {
      var l = Mt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      return e !== null && sc(e, a[1]) ? a[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function Ur(t, e) {
      var l = Mt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      if (e !== null && sc(e, a[1])) return a[0];
      if (a = t(), Ql) {
        al(true);
        try {
          t();
        } finally {
          al(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    }
    function Sc(t, e, l) {
      return l === void 0 || (Ke & 1073741824) !== 0 && (nt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = wo(), $.lanes |= t, bl |= t, l);
    }
    function Dr(t, e, l, a) {
      return fe(l, e) ? l : ga.current !== null ? (t = Sc(t, l, a), fe(t, e) || (Dt = true), t) : (Ke & 42) === 0 || (Ke & 1073741824) !== 0 && (nt & 261930) === 0 ? (Dt = true, t.memoizedState = l) : (t = wo(), $.lanes |= t, bl |= t, e);
    }
    function wr(t, e, l, a, n) {
      var u = C.p;
      C.p = u !== 0 && 8 > u ? u : 8;
      var i = z.T, c = {};
      z.T = c, zc(t, false, e, l);
      try {
        var d = n(), v = z.S;
        if (v !== null && v(c, d), d !== null && typeof d == "object" && typeof d.then == "function") {
          var A = T0(d, a);
          fn(t, e, A, ye(t));
        } else fn(t, e, a, ye(t));
      } catch (T) {
        fn(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: T
        }, ye());
      } finally {
        C.p = u, i !== null && c.types !== null && (i.types = c.types), z.T = i;
      }
    }
    function w0() {
    }
    function xc(t, e, l, a) {
      if (t.tag !== 5) throw Error(r(476));
      var n = Cr(t).queue;
      wr(t, n, e, V, l === null ? w0 : function() {
        return Rr(t), l(a);
      });
    }
    function Cr(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: V,
        baseState: V,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Je,
          lastRenderedState: V
        },
        next: null
      };
      var l = {};
      return e.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Je,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Rr(t) {
      var e = Cr(t);
      e.next === null && (e = t.alternate.memoizedState), fn(t, e.next.queue, {}, ye());
    }
    function Ac() {
      return Qt(En);
    }
    function Hr() {
      return Mt().memoizedState;
    }
    function Br() {
      return Mt().memoizedState;
    }
    function C0(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = ye();
            t = ol(l);
            var a = dl(e, t, l);
            a !== null && (ae(a, e, l), ln(a, e, l)), e = {
              cache: Ii()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function R0(t, e, l) {
      var a = ye();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Au(t) ? Yr(e, l) : (l = Gi(t, e, l, a), l !== null && (ae(l, t, a), Lr(l, e, a)));
    }
    function qr(t, e, l) {
      var a = ye();
      fn(t, e, l, a);
    }
    function fn(t, e, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Au(t)) Yr(e, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
          var i = e.lastRenderedState, c = u(i, l);
          if (n.hasEagerState = true, n.eagerState = c, fe(c, i)) return au(t, e, n, 0), St === null && lu(), false;
        } catch {
        } finally {
        }
        if (l = Gi(t, e, n, a), l !== null) return ae(l, t, a), Lr(l, e, a), true;
      }
      return false;
    }
    function zc(t, e, l, a) {
      if (a = {
        lane: 2,
        revertLane: lf(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Au(t)) {
        if (e) throw Error(r(479));
      } else e = Gi(t, l, a, 2), e !== null && ae(e, t, 2);
    }
    function Au(t) {
      var e = t.alternate;
      return t === $ || e !== null && e === $;
    }
    function Yr(t, e) {
      ba = gu = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function Lr(t, e, l) {
      if ((l & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Vf(t, l);
      }
    }
    var sn = {
      readContext: Qt,
      use: _u,
      useCallback: Nt,
      useContext: Nt,
      useEffect: Nt,
      useImperativeHandle: Nt,
      useLayoutEffect: Nt,
      useInsertionEffect: Nt,
      useMemo: Nt,
      useReducer: Nt,
      useRef: Nt,
      useState: Nt,
      useDebugValue: Nt,
      useDeferredValue: Nt,
      useTransition: Nt,
      useSyncExternalStore: Nt,
      useId: Nt,
      useHostTransitionStatus: Nt,
      useFormState: Nt,
      useActionState: Nt,
      useOptimistic: Nt,
      useMemoCache: Nt,
      useCacheRefresh: Nt
    };
    sn.useEffectEvent = Nt;
    var Gr = {
      readContext: Qt,
      use: _u,
      useCallback: function(t, e) {
        return Ft().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: Qt,
      useEffect: zr,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([
          t
        ]) : null, Su(4194308, 4, jr.bind(null, e, t), l);
      },
      useLayoutEffect: function(t, e) {
        return Su(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        Su(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var l = Ft();
        e = e === void 0 ? null : e;
        var a = t();
        if (Ql) {
          al(true);
          try {
            t();
          } finally {
            al(false);
          }
        }
        return l.memoizedState = [
          a,
          e
        ], a;
      },
      useReducer: function(t, e, l) {
        var a = Ft();
        if (l !== void 0) {
          var n = l(e);
          if (Ql) {
            al(true);
            try {
              l(e);
            } finally {
              al(false);
            }
          }
        } else n = e;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = R0.bind(null, $, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = Ft();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = bc(t);
        var e = t.queue, l = qr.bind(null, $, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: pc,
      useDeferredValue: function(t, e) {
        var l = Ft();
        return Sc(l, t, e);
      },
      useTransition: function() {
        var t = bc(false);
        return t = wr.bind(null, $, t.queue, true, false), Ft().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var a = $, n = Ft();
        if (it) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (l = e(), St === null) throw Error(r(349));
          (nt & 127) !== 0 || fr(a, e, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, zr(rr.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, _a(9, {
          destroy: void 0
        }, sr.bind(null, a, u, l, e), null), l;
      },
      useId: function() {
        var t = Ft(), e = St.identifierPrefix;
        if (it) {
          var l = we, a = De;
          l = (a & ~(1 << 32 - ce(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = bu++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = j0++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: Ac,
      useFormState: _r,
      useActionState: _r,
      useOptimistic: function(t) {
        var e = Ft();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = zc.bind(null, $, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: yc,
      useCacheRefresh: function() {
        return Ft().memoizedState = C0.bind(null, $);
      },
      useEffectEvent: function(t) {
        var e = Ft(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((mt & 2) !== 0) throw Error(r(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, Ec = {
      readContext: Qt,
      use: _u,
      useCallback: Or,
      useContext: Qt,
      useEffect: _c,
      useImperativeHandle: Mr,
      useInsertionEffect: Nr,
      useLayoutEffect: Tr,
      useMemo: Ur,
      useReducer: pu,
      useRef: Ar,
      useState: function() {
        return pu(Je);
      },
      useDebugValue: pc,
      useDeferredValue: function(t, e) {
        var l = Mt();
        return Dr(l, bt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = pu(Je)[0], e = Mt().memoizedState;
        return [
          typeof t == "boolean" ? t : cn(t),
          e
        ];
      },
      useSyncExternalStore: cr,
      useId: Hr,
      useHostTransitionStatus: Ac,
      useFormState: pr,
      useActionState: pr,
      useOptimistic: function(t, e) {
        var l = Mt();
        return mr(l, bt, t, e);
      },
      useMemoCache: yc,
      useCacheRefresh: Br
    };
    Ec.useEffectEvent = Er;
    var Xr = {
      readContext: Qt,
      use: _u,
      useCallback: Or,
      useContext: Qt,
      useEffect: _c,
      useImperativeHandle: Mr,
      useInsertionEffect: Nr,
      useLayoutEffect: Tr,
      useMemo: Ur,
      useReducer: gc,
      useRef: Ar,
      useState: function() {
        return gc(Je);
      },
      useDebugValue: pc,
      useDeferredValue: function(t, e) {
        var l = Mt();
        return bt === null ? Sc(l, t, e) : Dr(l, bt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = gc(Je)[0], e = Mt().memoizedState;
        return [
          typeof t == "boolean" ? t : cn(t),
          e
        ];
      },
      useSyncExternalStore: cr,
      useId: Hr,
      useHostTransitionStatus: Ac,
      useFormState: xr,
      useActionState: xr,
      useOptimistic: function(t, e) {
        var l = Mt();
        return bt !== null ? mr(l, bt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: yc,
      useCacheRefresh: Br
    };
    Xr.useEffectEvent = Er;
    function Nc(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : D({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var Tc = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = ye(), n = ol(a);
        n.payload = e, l != null && (n.callback = l), e = dl(t, n, a), e !== null && (ae(e, t, a), ln(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = ye(), n = ol(a);
        n.tag = 1, n.payload = e, l != null && (n.callback = l), e = dl(t, n, a), e !== null && (ae(e, t, a), ln(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = ye(), a = ol(l);
        a.tag = 2, e != null && (a.callback = e), e = dl(t, a, l), e !== null && (ae(e, t, l), ln(e, t, l));
      }
    };
    function Qr(t, e, l, a, n, u, i) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !ka(l, a) || !ka(n, u) : true;
    }
    function Zr(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && Tc.enqueueReplaceState(e, e.state, null);
    }
    function Zl(t, e) {
      var l = e;
      if ("ref" in e) {
        l = {};
        for (var a in e) a !== "ref" && (l[a] = e[a]);
      }
      if (t = t.defaultProps) {
        l === e && (l = D({}, l));
        for (var n in t) l[n] === void 0 && (l[n] = t[n]);
      }
      return l;
    }
    function Vr(t) {
      eu(t);
    }
    function Kr(t) {
      console.error(t);
    }
    function Jr(t) {
      eu(t);
    }
    function zu(t, e) {
      try {
        var l = t.onUncaughtError;
        l(e.value, {
          componentStack: e.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function kr(t, e, l) {
      try {
        var a = t.onCaughtError;
        a(l.value, {
          componentStack: l.stack,
          errorBoundary: e.tag === 1 ? e.stateNode : null
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function jc(t, e, l) {
      return l = ol(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        zu(t, e);
      }, l;
    }
    function Fr(t) {
      return t = ol(t), t.tag = 3, t;
    }
    function Wr(t, e, l, a) {
      var n = l.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        t.payload = function() {
          return n(u);
        }, t.callback = function() {
          kr(e, l, a);
        };
      }
      var i = l.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        kr(e, l, a), typeof n != "function" && (vl === null ? vl = /* @__PURE__ */ new Set([
          this
        ]) : vl.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : ""
        });
      });
    }
    function H0(t, e, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && oa(e, l, n, true), l = re.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return ze === null ? Hu() : l.alternate === null && Tt === 0 && (Tt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === ou ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), Pc(t, a, n)), false;
            case 22:
              return l.flags |= 65536, a === ou ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), Pc(t, a, n)), false;
          }
          throw Error(r(435, l.tag));
        }
        return Pc(t, a, n), Hu(), false;
      }
      if (it) return e = re.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Ji && (t = Error(r(422), {
        cause: a
      }), $a(pe(t, l)))) : (a !== Ji && (e = Error(r(423), {
        cause: a
      }), $a(pe(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = pe(a, l), n = jc(t.stateNode, a, n), nc(t, n), Tt !== 4 && (Tt = 2)), false;
      var u = Error(r(520), {
        cause: a
      });
      if (u = pe(u, l), bn === null ? bn = [
        u
      ] : bn.push(u), Tt !== 4 && (Tt = 2), e === null) return true;
      a = pe(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = n & -n, l.lanes |= t, t = jc(l.stateNode, a, t), nc(l, t), false;
          case 1:
            if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (vl === null || !vl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = Fr(n), Wr(n, t, l, a), nc(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Mc = Error(r(461)), Dt = false;
    function Zt(t, e, l, a) {
      e.child = t === null ? tr(e, null, l, a) : Xl(e, t.child, l, a);
    }
    function $r(t, e, l, a, n) {
      l = l.render;
      var u = e.ref;
      if ("ref" in a) {
        var i = {};
        for (var c in a) c !== "ref" && (i[c] = a[c]);
      } else i = a;
      return ql(e), a = rc(t, e, l, i, u, n), c = oc(), t !== null && !Dt ? (dc(t, e, n), ke(t, e, n)) : (it && c && Vi(e), e.flags |= 1, Zt(t, e, a, n), e.child);
    }
    function Ir(t, e, l, a, n) {
      if (t === null) {
        var u = l.type;
        return typeof u == "function" && !Xi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, Pr(t, e, u, a, n)) : (t = uu(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !Bc(t, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : ka, l(i, a) && t.ref === e.ref) return ke(t, e, n);
      }
      return e.flags |= 1, t = Xe(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function Pr(t, e, l, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (ka(u, a) && t.ref === e.ref) if (Dt = false, e.pendingProps = a = u, Bc(t, n)) (t.flags & 131072) !== 0 && (Dt = true);
        else return e.lanes = t.lanes, ke(t, e, n);
      }
      return Oc(t, e, l, a, n);
    }
    function to(t, e, l, a) {
      var n = a.children, u = t !== null ? t.memoizedState : null;
      if (t === null && e.stateNode === null && (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((e.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | l : l, t !== null) {
            for (a = e.child = t.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
            a = n & ~u;
          } else a = 0, e.child = null;
          return eo(t, e, u, l, a);
        }
        if ((l & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && su(e, u !== null ? u.cachePool : null), u !== null ? ar(e, u) : ic(), nr(e);
        else return a = e.lanes = 536870912, eo(t, e, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (su(e, u.cachePool), ar(e, u), yl(), e.memoizedState = null) : (t !== null && su(e, null), ic(), yl());
      return Zt(t, e, n, l), e.child;
    }
    function rn(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function eo(t, e, l, a, n) {
      var u = tc();
      return u = u === null ? null : {
        parent: Ot._currentValue,
        pool: u
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, t !== null && su(e, null), ic(), nr(e), t !== null && oa(t, e, a, true), e.childLanes = n, null;
    }
    function Eu(t, e) {
      return e = Tu({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function lo(t, e, l) {
      return Xl(e, t.child, null, l), t = Eu(e, e.pendingProps), t.flags |= 2, oe(e), e.memoizedState = null, t;
    }
    function B0(t, e, l) {
      var a = e.pendingProps, n = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (it) {
          if (a.mode === "hidden") return t = Eu(e, a), e.lanes = 536870912, rn(null, t);
          if (fc(e), (t = xt) ? (t = hd(t, Ae), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: il !== null ? {
              id: De,
              overflow: we
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Ys(t), l.return = e, e.child = l, Xt = e, xt = null)) : t = null, t === null) throw fl(e);
          return e.lanes = 536870912, null;
        }
        return Eu(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (fc(e), n) if (e.flags & 256) e.flags &= -257, e = lo(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
        else if (Dt || oa(t, e, l, false), n = (l & t.childLanes) !== 0, Dt || n) {
          if (a = St, a !== null && (i = Kf(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Cl(t, i), ae(a, t, i), Mc;
          Hu(), e = lo(t, e, l);
        } else t = u.treeContext, xt = Ee(i.nextSibling), Xt = e, it = true, cl = null, Ae = false, t !== null && Xs(e, t), e = Eu(e, a), e.flags |= 4096;
        return e;
      }
      return t = Xe(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Nu(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(r(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Oc(t, e, l, a, n) {
      return ql(e), l = rc(t, e, l, a, void 0, n), a = oc(), t !== null && !Dt ? (dc(t, e, n), ke(t, e, n)) : (it && a && Vi(e), e.flags |= 1, Zt(t, e, l, n), e.child);
    }
    function ao(t, e, l, a, n, u) {
      return ql(e), e.updateQueue = null, l = ir(e, a, l, n), ur(t), a = oc(), t !== null && !Dt ? (dc(t, e, u), ke(t, e, u)) : (it && a && Vi(e), e.flags |= 1, Zt(t, e, l, u), e.child);
    }
    function no(t, e, l, a, n) {
      if (ql(e), e.stateNode === null) {
        var u = ca, i = l.contextType;
        typeof i == "object" && i !== null && (u = Qt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Tc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, lc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Qt(i) : ca, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Nc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Tc.enqueueReplaceState(u, u.state, null), nn(e, a, u, n), an(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var c = e.memoizedProps, d = Zl(l, c);
        u.props = d;
        var v = u.context, A = l.contextType;
        i = ca, typeof A == "object" && A !== null && (i = Qt(A));
        var T = l.getDerivedStateFromProps;
        A = typeof T == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = e.pendingProps !== c, A || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || v !== i) && Zr(e, u, a, i), rl = false;
        var _ = e.memoizedState;
        u.state = _, nn(e, a, u, n), an(), v = e.memoizedState, c || _ !== v || rl ? (typeof T == "function" && (Nc(e, l, T, a), v = e.memoizedState), (d = rl || Qr(e, l, d, a, _, v, i)) ? (A || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = v), u.props = a, u.state = v, u.context = i, a = d) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, ac(t, e), i = e.memoizedProps, A = Zl(l, i), u.props = A, T = e.pendingProps, _ = u.context, v = l.contextType, d = ca, typeof v == "object" && v !== null && (d = Qt(v)), c = l.getDerivedStateFromProps, (v = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== T || _ !== d) && Zr(e, u, a, d), rl = false, _ = e.memoizedState, u.state = _, nn(e, a, u, n), an();
        var x = e.memoizedState;
        i !== T || _ !== x || rl || t !== null && t.dependencies !== null && cu(t.dependencies) ? (typeof c == "function" && (Nc(e, l, c, a), x = e.memoizedState), (A = rl || Qr(e, l, A, a, _, x, d) || t !== null && t.dependencies !== null && cu(t.dependencies)) ? (v || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, x, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, x, d)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = x), u.props = a, u.state = x, u.context = d, a = A) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Nu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Xl(e, t.child, null, n), e.child = Xl(e, null, l, n)) : Zt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = ke(t, e, n), t;
    }
    function uo(t, e, l, a) {
      return Hl(), e.flags |= 256, Zt(t, e, l, a), e.child;
    }
    var Uc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Dc(t) {
      return {
        baseLanes: t,
        cachePool: ks()
      };
    }
    function wc(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= me), t;
    }
    function io(t, e, l) {
      var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
      if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (jt.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (it) {
          if (n ? ml(e) : yl(), (t = xt) ? (t = hd(t, Ae), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: il !== null ? {
              id: De,
              overflow: we
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Ys(t), l.return = e, e.child = l, Xt = e, xt = null)) : t = null, t === null) throw fl(e);
          return gf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var c = a.children;
        return a = a.fallback, n ? (yl(), n = e.mode, c = Tu({
          mode: "hidden",
          children: c
        }, n), a = Rl(a, n, l, null), c.return = e, a.return = e, c.sibling = a, e.child = c, a = e.child, a.memoizedState = Dc(l), a.childLanes = wc(t, i, l), e.memoizedState = Uc, rn(null, a)) : (ml(e), Cc(e, c));
      }
      var d = t.memoizedState;
      if (d !== null && (c = d.dehydrated, c !== null)) {
        if (u) e.flags & 256 ? (ml(e), e.flags &= -257, e = Rc(t, e, l)) : e.memoizedState !== null ? (yl(), e.child = t.child, e.flags |= 128, e = null) : (yl(), c = a.fallback, n = e.mode, a = Tu({
          mode: "visible",
          children: a.children
        }, n), c = Rl(c, n, l, null), c.flags |= 2, a.return = e, c.return = e, a.sibling = c, e.child = a, Xl(e, t.child, null, l), a = e.child, a.memoizedState = Dc(l), a.childLanes = wc(t, i, l), e.memoizedState = Uc, e = rn(null, a));
        else if (ml(e), gf(c)) {
          if (i = c.nextSibling && c.nextSibling.dataset, i) var v = i.dgst;
          i = v, a = Error(r(419)), a.stack = "", a.digest = i, $a({
            value: a,
            source: null,
            stack: null
          }), e = Rc(t, e, l);
        } else if (Dt || oa(t, e, l, false), i = (l & t.childLanes) !== 0, Dt || i) {
          if (i = St, i !== null && (a = Kf(i, l), a !== 0 && a !== d.retryLane)) throw d.retryLane = a, Cl(t, a), ae(i, t, a), Mc;
          hf(c) || Hu(), e = Rc(t, e, l);
        } else hf(c) ? (e.flags |= 192, e.child = t.child, e = null) : (t = d.treeContext, xt = Ee(c.nextSibling), Xt = e, it = true, cl = null, Ae = false, t !== null && Xs(e, t), e = Cc(e, a.children), e.flags |= 4096);
        return e;
      }
      return n ? (yl(), c = a.fallback, n = e.mode, d = t.child, v = d.sibling, a = Xe(d, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = d.subtreeFlags & 65011712, v !== null ? c = Xe(v, c) : (c = Rl(c, n, l, null), c.flags |= 2), c.return = e, a.return = e, a.sibling = c, e.child = a, rn(null, a), a = e.child, c = t.child.memoizedState, c === null ? c = Dc(l) : (n = c.cachePool, n !== null ? (d = Ot._currentValue, n = n.parent !== d ? {
        parent: d,
        pool: d
      } : n) : n = ks(), c = {
        baseLanes: c.baseLanes | l,
        cachePool: n
      }), a.memoizedState = c, a.childLanes = wc(t, i, l), e.memoizedState = Uc, rn(t.child, a)) : (ml(e), l = t.child, t = l.sibling, l = Xe(l, {
        mode: "visible",
        children: a.children
      }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
        t
      ], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function Cc(t, e) {
      return e = Tu({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function Tu(t, e) {
      return t = se(22, t, null, e), t.lanes = 0, t;
    }
    function Rc(t, e, l) {
      return Xl(e, t.child, null, l), t = Cc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function co(t, e, l) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), Wi(t.return, e, l);
    }
    function Hc(t, e, l, a, n, u) {
      var i = t.memoizedState;
      i === null ? t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u
      } : (i.isBackwards = e, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = l, i.tailMode = n, i.treeForkCount = u);
    }
    function fo(t, e, l) {
      var a = e.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = jt.current, c = (i & 2) !== 0;
      if (c ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, R(jt, i), Zt(t, e, a, l), a = it ? Wa : 0, !c && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && co(t, l, e);
        else if (t.tag === 19) co(t, l, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (n) {
        case "forwards":
          for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && hu(t) === null && (n = l), l = l.sibling;
          l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Hc(e, false, n, l, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, n = e.child, e.child = null; n !== null; ) {
            if (t = n.alternate, t !== null && hu(t) === null) {
              e.child = n;
              break;
            }
            t = n.sibling, n.sibling = l, l = n, n = t;
          }
          Hc(e, true, l, null, u, a);
          break;
        case "together":
          Hc(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function ke(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), bl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (oa(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(r(153));
      if (e.child !== null) {
        for (t = e.child, l = Xe(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = Xe(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function Bc(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && cu(t)));
    }
    function q0(t, e, l) {
      switch (e.tag) {
        case 3:
          Lt(e, e.stateNode.containerInfo), sl(e, Ot, t.memoizedState.cache), Hl();
          break;
        case 27:
        case 5:
          ge(e);
          break;
        case 4:
          Lt(e, e.stateNode.containerInfo);
          break;
        case 10:
          sl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, fc(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (ml(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? io(t, e, l) : (ml(e), t = ke(t, e, l), t !== null ? t.sibling : null);
          ml(e);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (oa(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
            if (a) return fo(t, e, l);
            e.flags |= 128;
          }
          if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(jt, jt.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, to(t, e, l, e.pendingProps);
        case 24:
          sl(e, Ot, t.memoizedState.cache);
      }
      return ke(t, e, l);
    }
    function so(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Dt = true;
      else {
        if (!Bc(t, l) && (e.flags & 128) === 0) return Dt = false, q0(t, e, l);
        Dt = (t.flags & 131072) !== 0;
      }
      else Dt = false, it && (e.flags & 1048576) !== 0 && Gs(e, Wa, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = Ll(e.elementType), e.type = t, typeof t == "function") Xi(t) ? (a = Zl(t, a), e.tag = 1, e = no(null, e, t, a, l)) : (e.tag = 0, e = Oc(null, e, t, a, l));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === Et) {
                  e.tag = 11, e = $r(null, e, t, a, l);
                  break t;
                } else if (n === F) {
                  e.tag = 14, e = Ir(null, e, t, a, l);
                  break t;
                }
              }
              throw e = Te(t) || t, Error(r(306, e, ""));
            }
          }
          return e;
        case 0:
          return Oc(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, n = Zl(a, e.pendingProps), no(t, e, a, n, l);
        case 3:
          t: {
            if (Lt(e, e.stateNode.containerInfo), t === null) throw Error(r(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            n = u.element, ac(t, e), nn(e, a, null, l);
            var i = e.memoizedState;
            if (a = i.cache, sl(e, Ot, a), a !== u.cache && $i(e, [
              Ot
            ], l, true), an(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = uo(t, e, a, l);
              break t;
            } else if (a !== n) {
              n = pe(Error(r(424)), e), $a(n), e = uo(t, e, a, l);
              break t;
            } else {
              switch (t = e.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (xt = Ee(t.firstChild), Xt = e, it = true, cl = null, Ae = true, l = tr(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            }
            else {
              if (Hl(), a === n) {
                e = ke(t, e, l);
                break t;
              }
              Zt(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Nu(t, e), t === null ? (l = Sd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : it || (l = e.type, t = e.pendingProps, a = Qu(W.current).createElement(l), a[Gt] = e, a[$t] = t, Vt(a, l, t), Bt(a), e.stateNode = a) : e.memoizedState = Sd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return ge(e), t === null && it && (a = e.stateNode = vd(e.type, e.pendingProps, W.current), Xt = e, Ae = true, n = xt, xl(e.type) ? (bf = n, xt = Ee(a.firstChild)) : xt = n), Zt(t, e, e.pendingProps.children, l), Nu(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && it && ((n = a = xt) && (a = yy(a, e.type, e.pendingProps, Ae), a !== null ? (e.stateNode = a, Xt = e, xt = Ee(a.firstChild), Ae = false, n = true) : n = false), n || fl(e)), ge(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, df(n, u) ? a = null : i !== null && df(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = rc(t, e, M0, null, null, l), En._currentValue = n), Nu(t, e), Zt(t, e, a, l), e.child;
        case 6:
          return t === null && it && ((t = l = xt) && (l = hy(l, e.pendingProps, Ae), l !== null ? (e.stateNode = l, Xt = e, xt = null, t = true) : t = false), t || fl(e)), null;
        case 13:
          return io(t, e, l);
        case 4:
          return Lt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Xl(e, null, a, l) : Zt(t, e, a, l), e.child;
        case 11:
          return $r(t, e, e.type, e.pendingProps, l);
        case 7:
          return Zt(t, e, e.pendingProps, l), e.child;
        case 8:
          return Zt(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return Zt(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, sl(e, e.type, a.value), Zt(t, e, a.children, l), e.child;
        case 9:
          return n = e.type._context, a = e.pendingProps.children, ql(e), n = Qt(n), a = a(n), e.flags |= 1, Zt(t, e, a, l), e.child;
        case 14:
          return Ir(t, e, e.type, e.pendingProps, l);
        case 15:
          return Pr(t, e, e.type, e.pendingProps, l);
        case 19:
          return fo(t, e, l);
        case 31:
          return B0(t, e, l);
        case 22:
          return to(t, e, l, e.pendingProps);
        case 24:
          return ql(e), a = Qt(Ot), t === null ? (n = tc(), n === null && (n = St, u = Ii(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
            parent: a,
            cache: n
          }, lc(e), sl(e, Ot, n)) : ((t.lanes & l) !== 0 && (ac(t, e), nn(e, null, null, l), an()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), sl(e, Ot, a)) : (a = u.cache, sl(e, Ot, a), a !== n.cache && $i(e, [
            Ot
          ], l, true))), Zt(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(r(156, e.tag));
    }
    function Fe(t) {
      t.flags |= 4;
    }
    function qc(t, e, l, a, n) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (Bo()) t.flags |= 8192;
        else throw Gl = ou, ec;
      } else t.flags &= -16777217;
    }
    function ro(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Nd(e)) if (Bo()) t.flags |= 8192;
      else throw Gl = ou, ec;
    }
    function ju(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Qf() : 536870912, t.lanes |= e, Aa |= e);
    }
    function on(t, e) {
      if (!it) switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), e = e.sibling;
          l === null ? t.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = t.tail;
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), l = l.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function At(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
      if (e) for (var n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
      else for (n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
      return t.subtreeFlags |= a, t.childLanes = l, e;
    }
    function Y0(t, e, l) {
      var a = e.pendingProps;
      switch (Ki(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return At(e), null;
        case 1:
          return At(e), null;
        case 3:
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ve(Ot), rt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (ra(e) ? Fe(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ki())), At(e), null;
        case 26:
          var n = e.type, u = e.memoizedState;
          return t === null ? (Fe(e), u !== null ? (At(e), ro(e, u)) : (At(e), qc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (Fe(e), At(e), ro(e, u)) : (At(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Fe(e), At(e), qc(e, n, t, a, l)), null;
        case 27:
          if (Yn(e), l = W.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Fe(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return At(e), null;
            }
            t = B.current, ra(e) ? Qs(e) : (t = vd(n, a, l), e.stateNode = t, Fe(e));
          }
          return At(e), null;
        case 5:
          if (Yn(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && Fe(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return At(e), null;
            }
            if (u = B.current, ra(e)) Qs(e);
            else {
              var i = Qu(W.current);
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
              u[Gt] = e, u[$t] = a;
              t: for (i = e.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  i.child.return = i, i = i.child;
                  continue;
                }
                if (i === e) break t;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === e) break t;
                  i = i.return;
                }
                i.sibling.return = i.return, i = i.sibling;
              }
              e.stateNode = u;
              t: switch (Vt(u, n, a), n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a = !!a.autoFocus;
                  break t;
                case "img":
                  a = true;
                  break t;
                default:
                  a = false;
              }
              a && Fe(e);
            }
          }
          return At(e), qc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && Fe(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
            if (t = W.current, ra(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, n = Xt, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[Gt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || cd(t.nodeValue, l)), t || fl(e, true);
            } else t = Qu(t).createTextNode(a), t[Gt] = e, e.stateNode = t;
          }
          return At(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = ra(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(r(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                t[Gt] = e;
              } else Hl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              At(e), t = false;
            } else l = ki(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (oe(e), e) : (oe(e), null);
            if ((e.flags & 128) !== 0) throw Error(r(558));
          }
          return At(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = ra(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(r(318));
                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
                n[Gt] = e;
              } else Hl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              At(e), n = false;
            } else n = ki(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return e.flags & 256 ? (oe(e), e) : (oe(e), null);
          }
          return oe(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), ju(e, e.updateQueue), At(e), null);
        case 4:
          return rt(), t === null && cf(e.stateNode.containerInfo), At(e), null;
        case 10:
          return Ve(e.type), At(e), null;
        case 19:
          if (E(jt), a = e.memoizedState, a === null) return At(e), null;
          if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) on(a, false);
          else {
            if (Tt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (u = hu(t), u !== null) {
                for (e.flags |= 128, on(a, false), t = u.updateQueue, e.updateQueue = t, ju(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) qs(l, t), l = l.sibling;
                return R(jt, jt.current & 1 | 2), it && Qe(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && ue() > wu && (e.flags |= 128, n = true, on(a, false), e.lanes = 4194304);
          }
          else {
            if (!n) if (t = hu(u), t !== null) {
              if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, ju(e, t), on(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !it) return At(e), null;
            } else 2 * ue() - a.renderingStartTime > wu && l !== 536870912 && (e.flags |= 128, n = true, on(a, false), e.lanes = 4194304);
            a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ue(), t.sibling = null, l = jt.current, R(jt, n ? l & 1 | 2 : l & 1), it && Qe(e, a.treeForkCount), t) : (At(e), null);
        case 22:
        case 23:
          return oe(e), cc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (At(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : At(e), l = e.updateQueue, l !== null && ju(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && E(Yl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ve(Ot), At(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, e.tag));
    }
    function L0(t, e) {
      switch (Ki(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return Ve(Ot), rt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return Yn(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (oe(e), e.alternate === null) throw Error(r(340));
            Hl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (oe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(r(340));
            Hl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return E(jt), null;
        case 4:
          return rt(), null;
        case 10:
          return Ve(e.type), null;
        case 22:
        case 23:
          return oe(e), cc(), t !== null && E(Yl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return Ve(Ot), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function oo(t, e) {
      switch (Ki(e), e.tag) {
        case 3:
          Ve(Ot), rt();
          break;
        case 26:
        case 27:
        case 5:
          Yn(e);
          break;
        case 4:
          rt();
          break;
        case 31:
          e.memoizedState !== null && oe(e);
          break;
        case 13:
          oe(e);
          break;
        case 19:
          E(jt);
          break;
        case 10:
          Ve(e.type);
          break;
        case 22:
        case 23:
          oe(e), cc(), t !== null && E(Yl);
          break;
        case 24:
          Ve(Ot);
      }
    }
    function dn(t, e) {
      try {
        var l = e.updateQueue, a = l !== null ? l.lastEffect : null;
        if (a !== null) {
          var n = a.next;
          l = n;
          do {
            if ((l.tag & t) === t) {
              a = void 0;
              var u = l.create, i = l.inst;
              a = u(), i.destroy = a;
            }
            l = l.next;
          } while (l !== n);
        }
      } catch (c) {
        gt(e, e.return, c);
      }
    }
    function hl(t, e, l) {
      try {
        var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var i = a.inst, c = i.destroy;
              if (c !== void 0) {
                i.destroy = void 0, n = e;
                var d = l, v = c;
                try {
                  v();
                } catch (A) {
                  gt(n, d, A);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (A) {
        gt(e, e.return, A);
      }
    }
    function mo(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          lr(e, l);
        } catch (a) {
          gt(t, t.return, a);
        }
      }
    }
    function yo(t, e, l) {
      l.props = Zl(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        gt(t, e, a);
      }
    }
    function mn(t, e) {
      try {
        var l = t.ref;
        if (l !== null) {
          switch (t.tag) {
            case 26:
            case 27:
            case 5:
              var a = t.stateNode;
              break;
            case 30:
              a = t.stateNode;
              break;
            default:
              a = t.stateNode;
          }
          typeof l == "function" ? t.refCleanup = l(a) : l.current = a;
        }
      } catch (n) {
        gt(t, e, n);
      }
    }
    function Ce(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        gt(t, e, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        gt(t, e, n);
      }
      else l.current = null;
    }
    function ho(t) {
      var e = t.type, l = t.memoizedProps, a = t.stateNode;
      try {
        t: switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            l.autoFocus && a.focus();
            break t;
          case "img":
            l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
        }
      } catch (n) {
        gt(t, t.return, n);
      }
    }
    function Yc(t, e, l) {
      try {
        var a = t.stateNode;
        fy(a, t.type, l, e), a[$t] = e;
      } catch (n) {
        gt(t, t.return, n);
      }
    }
    function go(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && xl(t.type) || t.tag === 4;
    }
    function Lc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || go(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && xl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Gc(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Le));
      else if (a !== 4 && (a === 27 && xl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (Gc(t, e, l), t = t.sibling; t !== null; ) Gc(t, e, l), t = t.sibling;
    }
    function Mu(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && xl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Mu(t, e, l), t = t.sibling; t !== null; ) Mu(t, e, l), t = t.sibling;
    }
    function bo(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
        Vt(e, a, l), e[Gt] = t, e[$t] = l;
      } catch (u) {
        gt(t, t.return, u);
      }
    }
    var We = false, wt = false, Xc = false, vo = typeof WeakSet == "function" ? WeakSet : Set, qt = null;
    function G0(t, e) {
      if (t = t.containerInfo, rf = Wu, t = Ms(t), Ri(t)) {
        if ("selectionStart" in t) var l = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          l = (l = t.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, u.nodeType;
            } catch {
              l = null;
              break t;
            }
            var i = 0, c = -1, d = -1, v = 0, A = 0, T = t, _ = null;
            e: for (; ; ) {
              for (var x; T !== l || n !== 0 && T.nodeType !== 3 || (c = i + n), T !== u || a !== 0 && T.nodeType !== 3 || (d = i + a), T.nodeType === 3 && (i += T.nodeValue.length), (x = T.firstChild) !== null; ) _ = T, T = x;
              for (; ; ) {
                if (T === t) break e;
                if (_ === l && ++v === n && (c = i), _ === u && ++A === a && (d = i), (x = T.nextSibling) !== null) break;
                T = _, _ = T.parentNode;
              }
              T = x;
            }
            l = c === -1 || d === -1 ? null : {
              start: c,
              end: d
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (of = {
        focusedElem: t,
        selectionRange: l
      }, Wu = false, qt = e; qt !== null; ) if (e = qt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, qt = t;
      else for (; qt !== null; ) {
        switch (e = qt, u = e.alternate, t = e.flags, e.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (l = 0; l < t.length; l++) n = t[l], n.ref.impl = n.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && u !== null) {
              t = void 0, l = e, n = u.memoizedProps, u = u.memoizedState, a = l.stateNode;
              try {
                var q = Zl(l.type, n);
                t = a.getSnapshotBeforeUpdate(q, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (Z) {
                gt(l, l.return, Z);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) yf(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  yf(t);
                  break;
                default:
                  t.textContent = "";
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
            if ((t & 1024) !== 0) throw Error(r(163));
        }
        if (t = e.sibling, t !== null) {
          t.return = e.return, qt = t;
          break;
        }
        qt = e.return;
      }
    }
    function _o(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ie(t, l), a & 4 && dn(5, l);
          break;
        case 1:
          if (Ie(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (i) {
            gt(l, l.return, i);
          }
          else {
            var n = Zl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              gt(l, l.return, i);
            }
          }
          a & 64 && mo(l), a & 512 && mn(l, l.return);
          break;
        case 3:
          if (Ie(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
            if (e = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
            try {
              lr(t, e);
            } catch (i) {
              gt(l, l.return, i);
            }
          }
          break;
        case 27:
          e === null && a & 4 && bo(l);
        case 26:
        case 5:
          Ie(t, l), e === null && a & 4 && ho(l), a & 512 && mn(l, l.return);
          break;
        case 12:
          Ie(t, l);
          break;
        case 31:
          Ie(t, l), a & 4 && xo(t, l);
          break;
        case 13:
          Ie(t, l), a & 4 && Ao(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = W0.bind(null, l), gy(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || We, !a) {
            e = e !== null && e.memoizedState !== null || wt, n = We;
            var u = wt;
            We = a, (wt = e) && !u ? Pe(t, l, (l.subtreeFlags & 8772) !== 0) : Ie(t, l), We = n, wt = u;
          }
          break;
        case 30:
          break;
        default:
          Ie(t, l);
      }
    }
    function po(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, po(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && vi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var zt = null, Pt = false;
    function $e(t, e, l) {
      for (l = l.child; l !== null; ) So(t, e, l), l = l.sibling;
    }
    function So(t, e, l) {
      if (ie && typeof ie.onCommitFiberUnmount == "function") try {
        ie.onCommitFiberUnmount(Ha, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          wt || Ce(l, e), $e(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          wt || Ce(l, e);
          var a = zt, n = Pt;
          xl(l.type) && (zt = l.stateNode, Pt = false), $e(t, e, l), xn(l.stateNode), zt = a, Pt = n;
          break;
        case 5:
          wt || Ce(l, e);
        case 6:
          if (a = zt, n = Pt, zt = null, $e(t, e, l), zt = a, Pt = n, zt !== null) if (Pt) try {
            (zt.nodeType === 9 ? zt.body : zt.nodeName === "HTML" ? zt.ownerDocument.body : zt).removeChild(l.stateNode);
          } catch (u) {
            gt(l, e, u);
          }
          else try {
            zt.removeChild(l.stateNode);
          } catch (u) {
            gt(l, e, u);
          }
          break;
        case 18:
          zt !== null && (Pt ? (t = zt, md(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Ua(t)) : md(zt, l.stateNode));
          break;
        case 4:
          a = zt, n = Pt, zt = l.stateNode.containerInfo, Pt = true, $e(t, e, l), zt = a, Pt = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          hl(2, l, e), wt || hl(4, l, e), $e(t, e, l);
          break;
        case 1:
          wt || (Ce(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && yo(l, e, a)), $e(t, e, l);
          break;
        case 21:
          $e(t, e, l);
          break;
        case 22:
          wt = (a = wt) || l.memoizedState !== null, $e(t, e, l), wt = a;
          break;
        default:
          $e(t, e, l);
      }
    }
    function xo(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Ua(t);
        } catch (l) {
          gt(e, e.return, l);
        }
      }
    }
    function Ao(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Ua(t);
      } catch (l) {
        gt(e, e.return, l);
      }
    }
    function X0(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new vo()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new vo()), e;
        default:
          throw Error(r(435, t.tag));
      }
    }
    function Ou(t, e) {
      var l = X0(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = $0.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function te(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (xl(c.type)) {
                zt = c.stateNode, Pt = false;
                break t;
              }
              break;
            case 5:
              zt = c.stateNode, Pt = false;
              break t;
            case 3:
            case 4:
              zt = c.stateNode.containerInfo, Pt = true;
              break t;
          }
          c = c.return;
        }
        if (zt === null) throw Error(r(160));
        So(u, i, n), zt = null, Pt = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) zo(e, t), e = e.sibling;
    }
    var Me = null;
    function zo(t, e) {
      var l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          te(e, t), ee(t), a & 4 && (hl(3, t, t.return), dn(3, t), hl(5, t, t.return));
          break;
        case 1:
          te(e, t), ee(t), a & 512 && (wt || l === null || Ce(l, l.return)), a & 64 && We && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Me;
          if (te(e, t), ee(t), a & 512 && (wt || l === null || Ce(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                e: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Ya] || u[Gt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Vt(u, a, l), u[Gt] = t, Bt(u), a = u;
                    break t;
                  case "link":
                    var i = zd("link", "href", n).get(a + (l.href || ""));
                    if (i) {
                      for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(c, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), Vt(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = zd("meta", "content", n).get(a + (l.content || ""))) {
                      for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(c, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), Vt(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                u[Gt] = t, Bt(u), a = u;
              }
              t.stateNode = a;
            } else Ed(n, t.type, t.stateNode);
            else t.stateNode = Ad(n, a, t.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Ed(n, t.type, t.stateNode) : Ad(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Yc(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          te(e, t), ee(t), a & 512 && (wt || l === null || Ce(l, l.return)), l !== null && a & 4 && Yc(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (te(e, t), ee(t), a & 512 && (wt || l === null || Ce(l, l.return)), t.flags & 32) {
            n = t.stateNode;
            try {
              ta(n, "");
            } catch (q) {
              gt(t, t.return, q);
            }
          }
          a & 4 && t.stateNode != null && (n = t.memoizedProps, Yc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Xc = true);
          break;
        case 6:
          if (te(e, t), ee(t), a & 4) {
            if (t.stateNode === null) throw Error(r(162));
            a = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = a;
            } catch (q) {
              gt(t, t.return, q);
            }
          }
          break;
        case 3:
          if (Ku = null, n = Me, Me = Zu(e.containerInfo), te(e, t), Me = n, ee(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Ua(e.containerInfo);
          } catch (q) {
            gt(t, t.return, q);
          }
          Xc && (Xc = false, Eo(t));
          break;
        case 4:
          a = Me, Me = Zu(t.stateNode.containerInfo), te(e, t), ee(t), Me = a;
          break;
        case 12:
          te(e, t), ee(t);
          break;
        case 31:
          te(e, t), ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ou(t, a)));
          break;
        case 13:
          te(e, t), ee(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Du = ue()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ou(t, a)));
          break;
        case 22:
          n = t.memoizedState !== null;
          var d = l !== null && l.memoizedState !== null, v = We, A = wt;
          if (We = v || n, wt = A || d, te(e, t), wt = A, We = v, ee(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || d || We || wt || Vl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                d = l = e;
                try {
                  if (u = d.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = d.stateNode;
                    var T = d.memoizedProps.style, _ = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (q) {
                  gt(d, d.return, q);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                d = e;
                try {
                  d.stateNode.nodeValue = n ? "" : d.memoizedProps;
                } catch (q) {
                  gt(d, d.return, q);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                d = e;
                try {
                  var x = d.stateNode;
                  n ? yd(x, true) : yd(d.stateNode, false);
                } catch (q) {
                  gt(d, d.return, q);
                }
              }
            } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t;
              l === e && (l = null), e = e.return;
            }
            l === e && (l = null), e.sibling.return = e.return, e = e.sibling;
          }
          a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Ou(t, l))));
          break;
        case 19:
          te(e, t), ee(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ou(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          te(e, t), ee(t);
      }
    }
    function ee(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, a = t.return; a !== null; ) {
            if (go(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(r(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Lc(t);
              Mu(t, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (ta(i, ""), l.flags &= -33);
              var c = Lc(t);
              Mu(t, c, i);
              break;
            case 3:
            case 4:
              var d = l.stateNode.containerInfo, v = Lc(t);
              Gc(t, v, d);
              break;
            default:
              throw Error(r(161));
          }
        } catch (A) {
          gt(t, t.return, A);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Eo(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        Eo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function Ie(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) _o(t, e.alternate, e), e = e.sibling;
    }
    function Vl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            hl(4, e, e.return), Vl(e);
            break;
          case 1:
            Ce(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && yo(e, e.return, l), Vl(e);
            break;
          case 27:
            xn(e.stateNode);
          case 26:
          case 5:
            Ce(e, e.return), Vl(e);
            break;
          case 22:
            e.memoizedState === null && Vl(e);
            break;
          case 30:
            Vl(e);
            break;
          default:
            Vl(e);
        }
        t = t.sibling;
      }
    }
    function Pe(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, n = t, u = e, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            Pe(n, u, l), dn(4, u);
            break;
          case 1:
            if (Pe(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (v) {
              gt(a, a.return, v);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var c = a.stateNode;
              try {
                var d = n.shared.hiddenCallbacks;
                if (d !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++) er(d[n], c);
              } catch (v) {
                gt(a, a.return, v);
              }
            }
            l && i & 64 && mo(u), mn(u, u.return);
            break;
          case 27:
            bo(u);
          case 26:
          case 5:
            Pe(n, u, l), l && a === null && i & 4 && ho(u), mn(u, u.return);
            break;
          case 12:
            Pe(n, u, l);
            break;
          case 31:
            Pe(n, u, l), l && i & 4 && xo(n, u);
            break;
          case 13:
            Pe(n, u, l), l && i & 4 && Ao(n, u);
            break;
          case 22:
            u.memoizedState === null && Pe(n, u, l), mn(u, u.return);
            break;
          case 30:
            break;
          default:
            Pe(n, u, l);
        }
        e = e.sibling;
      }
    }
    function Qc(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && Ia(l));
    }
    function Zc(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ia(t));
    }
    function Oe(t, e, l, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) No(t, e, l, a), e = e.sibling;
    }
    function No(t, e, l, a) {
      var n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Oe(t, e, l, a), n & 2048 && dn(9, e);
          break;
        case 1:
          Oe(t, e, l, a);
          break;
        case 3:
          Oe(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ia(t)));
          break;
        case 12:
          if (n & 2048) {
            Oe(t, e, l, a), t = e.stateNode;
            try {
              var u = e.memoizedProps, i = u.id, c = u.onPostCommit;
              typeof c == "function" && c(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (d) {
              gt(e, e.return, d);
            }
          } else Oe(t, e, l, a);
          break;
        case 31:
          Oe(t, e, l, a);
          break;
        case 13:
          Oe(t, e, l, a);
          break;
        case 23:
          break;
        case 22:
          u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Oe(t, e, l, a) : yn(t, e) : u._visibility & 2 ? Oe(t, e, l, a) : (u._visibility |= 2, pa(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Qc(i, e);
          break;
        case 24:
          Oe(t, e, l, a), n & 2048 && Zc(e.alternate, e);
          break;
        default:
          Oe(t, e, l, a);
      }
    }
    function pa(t, e, l, a, n) {
      for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, i = e, c = l, d = a, v = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            pa(u, i, c, d, n), dn(8, i);
            break;
          case 23:
            break;
          case 22:
            var A = i.stateNode;
            i.memoizedState !== null ? A._visibility & 2 ? pa(u, i, c, d, n) : yn(u, i) : (A._visibility |= 2, pa(u, i, c, d, n)), n && v & 2048 && Qc(i.alternate, i);
            break;
          case 24:
            pa(u, i, c, d, n), n && v & 2048 && Zc(i.alternate, i);
            break;
          default:
            pa(u, i, c, d, n);
        }
        e = e.sibling;
      }
    }
    function yn(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            yn(l, a), n & 2048 && Qc(a.alternate, a);
            break;
          case 24:
            yn(l, a), n & 2048 && Zc(a.alternate, a);
            break;
          default:
            yn(l, a);
        }
        e = e.sibling;
      }
    }
    var hn = 8192;
    function Sa(t, e, l) {
      if (t.subtreeFlags & hn) for (t = t.child; t !== null; ) To(t, e, l), t = t.sibling;
    }
    function To(t, e, l) {
      switch (t.tag) {
        case 26:
          Sa(t, e, l), t.flags & hn && t.memoizedState !== null && jy(l, Me, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Sa(t, e, l);
          break;
        case 3:
        case 4:
          var a = Me;
          Me = Zu(t.stateNode.containerInfo), Sa(t, e, l), Me = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = hn, hn = 16777216, Sa(t, e, l), hn = a) : Sa(t, e, l));
          break;
        default:
          Sa(t, e, l);
      }
    }
    function jo(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function gn(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          qt = a, Oo(a, t);
        }
        jo(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Mo(t), t = t.sibling;
    }
    function Mo(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          gn(t), t.flags & 2048 && hl(9, t, t.return);
          break;
        case 3:
          gn(t);
          break;
        case 12:
          gn(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Uu(t)) : gn(t);
          break;
        default:
          gn(t);
      }
    }
    function Uu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          qt = a, Oo(a, t);
        }
        jo(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            hl(8, e, e.return), Uu(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Uu(e));
            break;
          default:
            Uu(e);
        }
        t = t.sibling;
      }
    }
    function Oo(t, e) {
      for (; qt !== null; ) {
        var l = qt;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            hl(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            Ia(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, qt = a;
        else t: for (l = t; qt !== null; ) {
          a = qt;
          var n = a.sibling, u = a.return;
          if (po(a), a === l) {
            qt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, qt = n;
            break t;
          }
          qt = u;
        }
      }
    }
    var Q0 = {
      getCacheForType: function(t) {
        var e = Qt(Ot), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return Qt(Ot).controller.signal;
      }
    }, Z0 = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, St = null, lt = null, nt = 0, ht = 0, de = null, gl = false, xa = false, Vc = false, tl = 0, Tt = 0, bl = 0, Kl = 0, Kc = 0, me = 0, Aa = 0, bn = null, le = null, Jc = false, Du = 0, Uo = 0, wu = 1 / 0, Cu = null, vl = null, Ht = 0, _l = null, za = null, el = 0, kc = 0, Fc = null, Do = null, vn = 0, Wc = null;
    function ye() {
      return (mt & 2) !== 0 && nt !== 0 ? nt & -nt : z.T !== null ? lf() : Jf();
    }
    function wo() {
      if (me === 0) if ((nt & 536870912) === 0 || it) {
        var t = Xn;
        Xn <<= 1, (Xn & 3932160) === 0 && (Xn = 262144), me = t;
      } else me = 536870912;
      return t = re.current, t !== null && (t.flags |= 32), me;
    }
    function ae(t, e, l) {
      (t === St && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) && (Ea(t, 0), pl(t, nt, me, false)), qa(t, l), ((mt & 2) === 0 || t !== St) && (t === St && ((mt & 2) === 0 && (Kl |= l), Tt === 4 && pl(t, nt, me, false)), Re(t));
    }
    function Co(t, e, l) {
      if ((mt & 6) !== 0) throw Error(r(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ba(t, e), n = a ? J0(t, e) : Ic(t, e, true), u = a;
      do {
        if (n === 0) {
          xa && !a && pl(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, u && !V0(l)) {
            n = Ic(t, e, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
            else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              e = i;
              t: {
                var c = t;
                n = bn;
                var d = c.current.memoizedState.isDehydrated;
                if (d && (Ea(c, i).flags |= 256), i = Ic(c, i, false), i !== 2) {
                  if (Vc && !d) {
                    c.errorRecoveryDisabledLanes |= u, Kl |= u, n = 4;
                    break t;
                  }
                  u = le, le = n, u !== null && (le === null ? le = u : le.push.apply(le, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ea(t, 0), pl(t, e, 0, true);
            break;
          }
          t: {
            switch (a = t, u = n, u) {
              case 0:
              case 1:
                throw Error(r(345));
              case 4:
                if ((e & 4194048) !== e) break;
              case 6:
                pl(a, e, me, !gl);
                break t;
              case 2:
                le = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((e & 62914560) === e && (n = Du + 300 - ue(), 10 < n)) {
              if (pl(a, e, me, !gl), Zn(a, 0, true) !== 0) break t;
              el = e, a.timeoutHandle = od(Ro.bind(null, a, l, le, Cu, Jc, e, me, Kl, Aa, gl, u, "Throttled", -0, 0), n);
              break t;
            }
            Ro(a, l, le, Cu, Jc, e, me, Kl, Aa, gl, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Re(t);
    }
    function Ro(t, e, l, a, n, u, i, c, d, v, A, T, _, x) {
      if (t.timeoutHandle = -1, T = e.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
        T = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Le
        }, To(e, u, T);
        var q = (u & 62914560) === u ? Du - ue() : (u & 4194048) === u ? Uo - ue() : 0;
        if (q = My(T, q), q !== null) {
          el = u, t.cancelPendingCommit = q(Qo.bind(null, t, e, u, l, a, n, i, c, d, A, T, null, _, x)), pl(t, u, i, !v);
          return;
        }
      }
      Qo(t, e, u, l, a, n, i, c, d);
    }
    function V0(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!fe(u(), n)) return false;
          } catch {
            return false;
          }
        }
        if (l = e.child, e.subtreeFlags & 16384 && l !== null) l.return = e, e = l;
        else {
          if (e === t) break;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) return true;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      }
      return true;
    }
    function pl(t, e, l, a) {
      e &= ~Kc, e &= ~Kl, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var n = e; 0 < n; ) {
        var u = 31 - ce(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      l !== 0 && Zf(t, l, e);
    }
    function Ru() {
      return (mt & 6) === 0 ? (_n(0), false) : true;
    }
    function $c() {
      if (lt !== null) {
        if (ht === 0) var t = lt.return;
        else t = lt, Ze = Bl = null, mc(t), ha = null, tn = 0, t = lt;
        for (; t !== null; ) oo(t.alternate, t), t = t.return;
        lt = null;
      }
    }
    function Ea(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, oy(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), el = 0, $c(), St = t, lt = l = Xe(t.current, null), nt = e, ht = 0, de = null, gl = false, xa = Ba(t, e), Vc = false, Aa = me = Kc = Kl = bl = Tt = 0, le = bn = null, Jc = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ce(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
      return tl = e, lu(), l;
    }
    function Ho(t, e) {
      $ = null, z.H = sn, e === ya || e === ru ? (e = $s(), ht = 3) : e === ec ? (e = $s(), ht = 4) : ht = e === Mc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, de = e, lt === null && (Tt = 1, zu(t, pe(e, t.current)));
    }
    function Bo() {
      var t = re.current;
      return t === null ? true : (nt & 4194048) === nt ? ze === null : (nt & 62914560) === nt || (nt & 536870912) !== 0 ? t === ze : false;
    }
    function qo() {
      var t = z.H;
      return z.H = sn, t === null ? sn : t;
    }
    function Yo() {
      var t = z.A;
      return z.A = Q0, t;
    }
    function Hu() {
      Tt = 4, gl || (nt & 4194048) !== nt && re.current !== null || (xa = true), (bl & 134217727) === 0 && (Kl & 134217727) === 0 || St === null || pl(St, nt, me, false);
    }
    function Ic(t, e, l) {
      var a = mt;
      mt |= 2;
      var n = qo(), u = Yo();
      (St !== t || nt !== e) && (Cu = null, Ea(t, e)), e = false;
      var i = Tt;
      t: do
        try {
          if (ht !== 0 && lt !== null) {
            var c = lt, d = de;
            switch (ht) {
              case 8:
                $c(), i = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                re.current === null && (e = true);
                var v = ht;
                if (ht = 0, de = null, Na(t, c, d, v), l && xa) {
                  i = 0;
                  break t;
                }
                break;
              default:
                v = ht, ht = 0, de = null, Na(t, c, d, v);
            }
          }
          K0(), i = Tt;
          break;
        } catch (A) {
          Ho(t, A);
        }
      while (true);
      return e && t.shellSuspendCounter++, Ze = Bl = null, mt = a, z.H = n, z.A = u, lt === null && (St = null, nt = 0, lu()), i;
    }
    function K0() {
      for (; lt !== null; ) Lo(lt);
    }
    function J0(t, e) {
      var l = mt;
      mt |= 2;
      var a = qo(), n = Yo();
      St !== t || nt !== e ? (Cu = null, wu = ue() + 500, Ea(t, e)) : xa = Ba(t, e);
      t: do
        try {
          if (ht !== 0 && lt !== null) {
            e = lt;
            var u = de;
            e: switch (ht) {
              case 1:
                ht = 0, de = null, Na(t, e, u, 1);
                break;
              case 2:
              case 9:
                if (Fs(u)) {
                  ht = 0, de = null, Go(e);
                  break;
                }
                e = function() {
                  ht !== 2 && ht !== 9 || St !== t || (ht = 7), Re(t);
                }, u.then(e, e);
                break t;
              case 3:
                ht = 7;
                break t;
              case 4:
                ht = 5;
                break t;
              case 7:
                Fs(u) ? (ht = 0, de = null, Go(e)) : (ht = 0, de = null, Na(t, e, u, 7));
                break;
              case 5:
                var i = null;
                switch (lt.tag) {
                  case 26:
                    i = lt.memoizedState;
                  case 5:
                  case 27:
                    var c = lt;
                    if (i ? Nd(i) : c.stateNode.complete) {
                      ht = 0, de = null;
                      var d = c.sibling;
                      if (d !== null) lt = d;
                      else {
                        var v = c.return;
                        v !== null ? (lt = v, Bu(v)) : lt = null;
                      }
                      break e;
                    }
                }
                ht = 0, de = null, Na(t, e, u, 5);
                break;
              case 6:
                ht = 0, de = null, Na(t, e, u, 6);
                break;
              case 8:
                $c(), Tt = 6;
                break t;
              default:
                throw Error(r(462));
            }
          }
          k0();
          break;
        } catch (A) {
          Ho(t, A);
        }
      while (true);
      return Ze = Bl = null, z.H = a, z.A = n, mt = l, lt !== null ? 0 : (St = null, nt = 0, lu(), Tt);
    }
    function k0() {
      for (; lt !== null && !bm(); ) Lo(lt);
    }
    function Lo(t) {
      var e = so(t.alternate, t, tl);
      t.memoizedProps = t.pendingProps, e === null ? Bu(t) : lt = e;
    }
    function Go(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = ao(l, e, e.pendingProps, e.type, void 0, nt);
          break;
        case 11:
          e = ao(l, e, e.pendingProps, e.type.render, e.ref, nt);
          break;
        case 5:
          mc(e);
        default:
          oo(l, e), e = lt = qs(e, tl), e = so(l, e, tl);
      }
      t.memoizedProps = t.pendingProps, e === null ? Bu(t) : lt = e;
    }
    function Na(t, e, l, a) {
      Ze = Bl = null, mc(e), ha = null, tn = 0;
      var n = e.return;
      try {
        if (H0(t, n, e, l, nt)) {
          Tt = 1, zu(t, pe(l, t.current)), lt = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw lt = n, u;
        Tt = 1, zu(t, pe(l, t.current)), lt = null;
        return;
      }
      e.flags & 32768 ? (it || a === 1 ? t = true : xa || (nt & 536870912) !== 0 ? t = false : (gl = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = re.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Xo(e, t)) : Bu(e);
    }
    function Bu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Xo(e, gl);
          return;
        }
        t = e.return;
        var l = Y0(e.alternate, e, tl);
        if (l !== null) {
          lt = l;
          return;
        }
        if (e = e.sibling, e !== null) {
          lt = e;
          return;
        }
        lt = e = t;
      } while (e !== null);
      Tt === 0 && (Tt = 5);
    }
    function Xo(t, e) {
      do {
        var l = L0(t.alternate, t);
        if (l !== null) {
          l.flags &= 32767, lt = l;
          return;
        }
        if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
          lt = t;
          return;
        }
        lt = t = l;
      } while (t !== null);
      Tt = 6, lt = null;
    }
    function Qo(t, e, l, a, n, u, i, c, d) {
      t.cancelPendingCommit = null;
      do
        qu();
      while (Ht !== 0);
      if ((mt & 6) !== 0) throw Error(r(327));
      if (e !== null) {
        if (e === t.current) throw Error(r(177));
        if (u = e.lanes | e.childLanes, u |= Li, Tm(t, l, u, i, c, d), t === St && (lt = St = null, nt = 0), za = e, _l = t, el = l, kc = u, Fc = n, Do = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, I0(Ln, function() {
          return ko(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = z.T, z.T = null, n = C.p, C.p = 2, i = mt, mt |= 4;
          try {
            G0(t, e, l);
          } finally {
            mt = i, C.p = n, z.T = a;
          }
        }
        Ht = 1, Zo(), Vo(), Ko();
      }
    }
    function Zo() {
      if (Ht === 1) {
        Ht = 0;
        var t = _l, e = za, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = z.T, z.T = null;
          var a = C.p;
          C.p = 2;
          var n = mt;
          mt |= 4;
          try {
            zo(e, t);
            var u = of, i = Ms(t.containerInfo), c = u.focusedElem, d = u.selectionRange;
            if (i !== c && c && c.ownerDocument && js(c.ownerDocument.documentElement, c)) {
              if (d !== null && Ri(c)) {
                var v = d.start, A = d.end;
                if (A === void 0 && (A = v), "selectionStart" in c) c.selectionStart = v, c.selectionEnd = Math.min(A, c.value.length);
                else {
                  var T = c.ownerDocument || document, _ = T && T.defaultView || window;
                  if (_.getSelection) {
                    var x = _.getSelection(), q = c.textContent.length, Z = Math.min(d.start, q), _t = d.end === void 0 ? Z : Math.min(d.end, q);
                    !x.extend && Z > _t && (i = _t, _t = Z, Z = i);
                    var g = Ts(c, Z), h = Ts(c, _t);
                    if (g && h && (x.rangeCount !== 1 || x.anchorNode !== g.node || x.anchorOffset !== g.offset || x.focusNode !== h.node || x.focusOffset !== h.offset)) {
                      var b = T.createRange();
                      b.setStart(g.node, g.offset), x.removeAllRanges(), Z > _t ? (x.addRange(b), x.extend(h.node, h.offset)) : (b.setEnd(h.node, h.offset), x.addRange(b));
                    }
                  }
                }
              }
              for (T = [], x = c; x = x.parentNode; ) x.nodeType === 1 && T.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
              for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
                var N = T[c];
                N.element.scrollLeft = N.left, N.element.scrollTop = N.top;
              }
            }
            Wu = !!rf, of = rf = null;
          } finally {
            mt = n, C.p = a, z.T = l;
          }
        }
        t.current = e, Ht = 2;
      }
    }
    function Vo() {
      if (Ht === 2) {
        Ht = 0;
        var t = _l, e = za, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = z.T, z.T = null;
          var a = C.p;
          C.p = 2;
          var n = mt;
          mt |= 4;
          try {
            _o(t, e.alternate, e);
          } finally {
            mt = n, C.p = a, z.T = l;
          }
        }
        Ht = 3;
      }
    }
    function Ko() {
      if (Ht === 4 || Ht === 3) {
        Ht = 0, vm();
        var t = _l, e = za, l = el, a = Do;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Ht = 5 : (Ht = 0, za = _l = null, Jo(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (vl = null), gi(l), e = e.stateNode, ie && typeof ie.onCommitFiberRoot == "function") try {
          ie.onCommitFiberRoot(Ha, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = z.T, n = C.p, C.p = 2, z.T = null;
          try {
            for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
              var c = a[i];
              u(c.value, {
                componentStack: c.stack
              });
            }
          } finally {
            z.T = e, C.p = n;
          }
        }
        (el & 3) !== 0 && qu(), Re(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Wc ? vn++ : (vn = 0, Wc = t) : vn = 0, _n(0);
      }
    }
    function Jo(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ia(e)));
    }
    function qu() {
      return Zo(), Vo(), Ko(), ko();
    }
    function ko() {
      if (Ht !== 5) return false;
      var t = _l, e = kc;
      kc = 0;
      var l = gi(el), a = z.T, n = C.p;
      try {
        C.p = 32 > l ? 32 : l, z.T = null, l = Fc, Fc = null;
        var u = _l, i = el;
        if (Ht = 0, za = _l = null, el = 0, (mt & 6) !== 0) throw Error(r(331));
        var c = mt;
        if (mt |= 4, Mo(u.current), No(u, u.current, i, l), mt = c, _n(0, false), ie && typeof ie.onPostCommitFiberRoot == "function") try {
          ie.onPostCommitFiberRoot(Ha, u);
        } catch {
        }
        return true;
      } finally {
        C.p = n, z.T = a, Jo(t, e);
      }
    }
    function Fo(t, e, l) {
      e = pe(l, e), e = jc(t.stateNode, e, 2), t = dl(t, e, 2), t !== null && (qa(t, 2), Re(t));
    }
    function gt(t, e, l) {
      if (t.tag === 3) Fo(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          Fo(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (vl === null || !vl.has(a))) {
            t = pe(l, t), l = Fr(2), a = dl(e, l, 2), a !== null && (Wr(l, a, e, t), qa(a, 2), Re(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function Pc(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new Z0();
        var n = /* @__PURE__ */ new Set();
        a.set(e, n);
      } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
      n.has(l) || (Vc = true, n.add(l), t = F0.bind(null, t, e, l), e.then(t, t));
    }
    function F0(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, St === t && (nt & l) === l && (Tt === 4 || Tt === 3 && (nt & 62914560) === nt && 300 > ue() - Du ? (mt & 2) === 0 && Ea(t, 0) : Kc |= l, Aa === nt && (Aa = 0)), Re(t);
    }
    function Wo(t, e) {
      e === 0 && (e = Qf()), t = Cl(t, e), t !== null && (qa(t, e), Re(t));
    }
    function W0(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), Wo(t, l);
    }
    function $0(t, e) {
      var l = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, n = t.memoizedState;
          n !== null && (l = n.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(r(314));
      }
      a !== null && a.delete(e), Wo(t, l);
    }
    function I0(t, e) {
      return di(t, e);
    }
    var Yu = null, Ta = null, tf = false, Lu = false, ef = false, Sl = 0;
    function Re(t) {
      t !== Ta && t.next === null && (Ta === null ? Yu = Ta = t : Ta = Ta.next = t), Lu = true, tf || (tf = true, ty());
    }
    function _n(t, e) {
      if (!ef && Lu) {
        ef = true;
        do
          for (var l = false, a = Yu; a !== null; ) {
            if (t !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, c = a.pingedLanes;
                u = (1 << 31 - ce(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, td(a, u));
            } else u = nt, u = Zn(a, a === St ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ba(a, u) || (l = true, td(a, u));
            a = a.next;
          }
        while (l);
        ef = false;
      }
    }
    function P0() {
      $o();
    }
    function $o() {
      Lu = tf = false;
      var t = 0;
      Sl !== 0 && ry() && (t = Sl);
      for (var e = ue(), l = null, a = Yu; a !== null; ) {
        var n = a.next, u = Io(a, e);
        u === 0 ? (a.next = null, l === null ? Yu = n : l.next = n, n === null && (Ta = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Lu = true)), a = n;
      }
      Ht !== 0 && Ht !== 5 || _n(t), Sl !== 0 && (Sl = 0);
    }
    function Io(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - ce(u), c = 1 << i, d = n[i];
        d === -1 ? ((c & l) === 0 || (c & a) !== 0) && (n[i] = Nm(c, e)) : d <= e && (t.expiredLanes |= c), u &= ~c;
      }
      if (e = St, l = nt, l = Zn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (ht === 2 || ht === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && mi(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || Ba(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (a !== null && mi(a), gi(l)) {
          case 2:
          case 8:
            l = Gf;
            break;
          case 32:
            l = Ln;
            break;
          case 268435456:
            l = Xf;
            break;
          default:
            l = Ln;
        }
        return a = Po.bind(null, t), l = di(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && mi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Po(t, e) {
      if (Ht !== 0 && Ht !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (qu() && t.callbackNode !== l) return null;
      var a = nt;
      return a = Zn(t, t === St ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Co(t, a, e), Io(t, ue()), t.callbackNode != null && t.callbackNode === l ? Po.bind(null, t) : null);
    }
    function td(t, e) {
      if (qu()) return null;
      Co(t, e, true);
    }
    function ty() {
      dy(function() {
        (mt & 6) !== 0 ? di(Lf, P0) : $o();
      });
    }
    function lf() {
      if (Sl === 0) {
        var t = da;
        t === 0 && (t = Gn, Gn <<= 1, (Gn & 261888) === 0 && (Gn = 256)), Sl = t;
      }
      return Sl;
    }
    function ed(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : kn("" + t);
    }
    function ld(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function ey(t, e, l, a, n) {
      if (e === "submit" && l && l.stateNode === n) {
        var u = ed((n[$t] || null).action), i = a.submitter;
        i && (e = (e = i[$t] || null) ? ed(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
        var c = new In("action", "action", null, a, n);
        t.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (Sl !== 0) {
                    var d = i ? ld(n, i) : new FormData(n);
                    xc(l, {
                      pending: true,
                      data: d,
                      method: n.method,
                      action: u
                    }, null, d);
                  }
                } else typeof u == "function" && (c.preventDefault(), d = i ? ld(n, i) : new FormData(n), xc(l, {
                  pending: true,
                  data: d,
                  method: n.method,
                  action: u
                }, u, d));
              },
              currentTarget: n
            }
          ]
        });
      }
    }
    for (var af = 0; af < Yi.length; af++) {
      var nf = Yi[af], ly = nf.toLowerCase(), ay = nf[0].toUpperCase() + nf.slice(1);
      je(ly, "on" + ay);
    }
    je(Ds, "onAnimationEnd"), je(ws, "onAnimationIteration"), je(Cs, "onAnimationStart"), je("dblclick", "onDoubleClick"), je("focusin", "onFocus"), je("focusout", "onBlur"), je(_0, "onTransitionRun"), je(p0, "onTransitionStart"), je(S0, "onTransitionCancel"), je(Rs, "onTransitionEnd"), Il("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), Il("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), Il("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), Il("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Ol("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ol("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ol("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ol("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ol("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ol("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), ny = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(pn));
    function ad(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var a = t[l], n = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (e) for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], d = c.instance, v = c.currentTarget;
            if (c = c.listener, d !== u && n.isPropagationStopped()) break t;
            u = c, n.currentTarget = v;
            try {
              u(n);
            } catch (A) {
              eu(A);
            }
            n.currentTarget = null, u = d;
          }
          else for (i = 0; i < a.length; i++) {
            if (c = a[i], d = c.instance, v = c.currentTarget, c = c.listener, d !== u && n.isPropagationStopped()) break t;
            u = c, n.currentTarget = v;
            try {
              u(n);
            } catch (A) {
              eu(A);
            }
            n.currentTarget = null, u = d;
          }
        }
      }
    }
    function at(t, e) {
      var l = e[bi];
      l === void 0 && (l = e[bi] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      l.has(a) || (nd(e, t, 2, false), l.add(a));
    }
    function uf(t, e, l) {
      var a = 0;
      e && (a |= 4), nd(l, t, a, e);
    }
    var Gu = "_reactListening" + Math.random().toString(36).slice(2);
    function cf(t) {
      if (!t[Gu]) {
        t[Gu] = true, Wf.forEach(function(l) {
          l !== "selectionchange" && (ny.has(l) || uf(l, false, t), uf(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Gu] || (e[Gu] = true, uf("selectionchange", false, e));
      }
    }
    function nd(t, e, l, a) {
      switch (wd(e)) {
        case 2:
          var n = Dy;
          break;
        case 8:
          n = wy;
          break;
        default:
          n = xf;
      }
      l = n.bind(null, e, l, t), n = void 0, !Ni || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: n
      }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
        passive: n
      }) : t.addEventListener(e, l, false);
    }
    function ff(t, e, l, a, n) {
      var u = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var c = a.stateNode.containerInfo;
          if (c === n) break;
          if (i === 4) for (i = a.return; i !== null; ) {
            var d = i.tag;
            if ((d === 3 || d === 4) && i.stateNode.containerInfo === n) return;
            i = i.return;
          }
          for (; c !== null; ) {
            if (i = Fl(c), i === null) return;
            if (d = i.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
      fs(function() {
        var v = u, A = zi(l), T = [];
        t: {
          var _ = Hs.get(t);
          if (_ !== void 0) {
            var x = In, q = t;
            switch (t) {
              case "keypress":
                if (Wn(l) === 0) break t;
              case "keydown":
              case "keyup":
                x = $m;
                break;
              case "focusin":
                q = "focus", x = Oi;
                break;
              case "focusout":
                q = "blur", x = Oi;
                break;
              case "beforeblur":
              case "afterblur":
                x = Oi;
                break;
              case "click":
                if (l.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                x = os;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                x = Ym;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                x = t0;
                break;
              case Ds:
              case ws:
              case Cs:
                x = Xm;
                break;
              case Rs:
                x = l0;
                break;
              case "scroll":
              case "scrollend":
                x = Bm;
                break;
              case "wheel":
                x = n0;
                break;
              case "copy":
              case "cut":
              case "paste":
                x = Zm;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                x = ms;
                break;
              case "toggle":
              case "beforetoggle":
                x = i0;
            }
            var Z = (e & 4) !== 0, _t = !Z && (t === "scroll" || t === "scrollend"), g = Z ? _ !== null ? _ + "Capture" : null : _;
            Z = [];
            for (var h = v, b; h !== null; ) {
              var N = h;
              if (b = N.stateNode, N = N.tag, N !== 5 && N !== 26 && N !== 27 || b === null || g === null || (N = Ga(h, g), N != null && Z.push(Sn(h, N, b))), _t) break;
              h = h.return;
            }
            0 < Z.length && (_ = new x(_, q, null, l, A), T.push({
              event: _,
              listeners: Z
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (_ = t === "mouseover" || t === "pointerover", x = t === "mouseout" || t === "pointerout", _ && l !== Ai && (q = l.relatedTarget || l.fromElement) && (Fl(q) || q[kl])) break t;
            if ((x || _) && (_ = A.window === A ? A : (_ = A.ownerDocument) ? _.defaultView || _.parentWindow : window, x ? (q = l.relatedTarget || l.toElement, x = v, q = q ? Fl(q) : null, q !== null && (_t = j(q), Z = q.tag, q !== _t || Z !== 5 && Z !== 27 && Z !== 6) && (q = null)) : (x = null, q = v), x !== q)) {
              if (Z = os, N = "onMouseLeave", g = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (Z = ms, N = "onPointerLeave", g = "onPointerEnter", h = "pointer"), _t = x == null ? _ : La(x), b = q == null ? _ : La(q), _ = new Z(N, h + "leave", x, l, A), _.target = _t, _.relatedTarget = b, N = null, Fl(A) === v && (Z = new Z(g, h + "enter", q, l, A), Z.target = b, Z.relatedTarget = _t, N = Z), _t = N, x && q) e: {
                for (Z = uy, g = x, h = q, b = 0, N = g; N; N = Z(N)) b++;
                N = 0;
                for (var X = h; X; X = Z(X)) N++;
                for (; 0 < b - N; ) g = Z(g), b--;
                for (; 0 < N - b; ) h = Z(h), N--;
                for (; b--; ) {
                  if (g === h || h !== null && g === h.alternate) {
                    Z = g;
                    break e;
                  }
                  g = Z(g), h = Z(h);
                }
                Z = null;
              }
              else Z = null;
              x !== null && ud(T, _, x, Z, false), q !== null && _t !== null && ud(T, _t, q, Z, true);
            }
          }
          t: {
            if (_ = v ? La(v) : window, x = _.nodeName && _.nodeName.toLowerCase(), x === "select" || x === "input" && _.type === "file") var ot = Ss;
            else if (_s(_)) if (xs) ot = g0;
            else {
              ot = y0;
              var Y = m0;
            }
            else x = _.nodeName, !x || x.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? v && xi(v.elementType) && (ot = Ss) : ot = h0;
            if (ot && (ot = ot(t, v))) {
              ps(T, ot, l, A);
              break t;
            }
            Y && Y(t, _, v), t === "focusout" && v && _.type === "number" && v.memoizedProps.value != null && Si(_, "number", _.value);
          }
          switch (Y = v ? La(v) : window, t) {
            case "focusin":
              (_s(Y) || Y.contentEditable === "true") && (na = Y, Hi = v, Fa = null);
              break;
            case "focusout":
              Fa = Hi = na = null;
              break;
            case "mousedown":
              Bi = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Bi = false, Os(T, l, A);
              break;
            case "selectionchange":
              if (v0) break;
            case "keydown":
            case "keyup":
              Os(T, l, A);
          }
          var I;
          if (Di) t: {
            switch (t) {
              case "compositionstart":
                var ut = "onCompositionStart";
                break t;
              case "compositionend":
                ut = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ut = "onCompositionUpdate";
                break t;
            }
            ut = void 0;
          }
          else aa ? bs(t, l) && (ut = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ut = "onCompositionStart");
          ut && (ys && l.locale !== "ko" && (aa || ut !== "onCompositionStart" ? ut === "onCompositionEnd" && aa && (I = ss()) : (ul = A, Ti = "value" in ul ? ul.value : ul.textContent, aa = true)), Y = Xu(v, ut), 0 < Y.length && (ut = new ds(ut, t, null, l, A), T.push({
            event: ut,
            listeners: Y
          }), I ? ut.data = I : (I = vs(l), I !== null && (ut.data = I)))), (I = f0 ? s0(t, l) : r0(t, l)) && (ut = Xu(v, "onBeforeInput"), 0 < ut.length && (Y = new ds("onBeforeInput", "beforeinput", null, l, A), T.push({
            event: Y,
            listeners: ut
          }), Y.data = I)), ey(T, t, v, l, A);
        }
        ad(T, e);
      });
    }
    function Sn(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function Xu(t, e) {
      for (var l = e + "Capture", a = []; t !== null; ) {
        var n = t, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Ga(t, l), n != null && a.unshift(Sn(t, n, u)), n = Ga(t, e), n != null && a.push(Sn(t, n, u))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function uy(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function ud(t, e, l, a, n) {
      for (var u = e._reactName, i = []; l !== null && l !== a; ) {
        var c = l, d = c.alternate, v = c.stateNode;
        if (c = c.tag, d !== null && d === a) break;
        c !== 5 && c !== 26 && c !== 27 || v === null || (d = v, n ? (v = Ga(l, u), v != null && i.unshift(Sn(l, v, d))) : n || (v = Ga(l, u), v != null && i.push(Sn(l, v, d)))), l = l.return;
      }
      i.length !== 0 && t.push({
        event: e,
        listeners: i
      });
    }
    var iy = /\r\n?/g, cy = /\u0000|\uFFFD/g;
    function id(t) {
      return (typeof t == "string" ? t : "" + t).replace(iy, `
`).replace(cy, "");
    }
    function cd(t, e) {
      return e = id(e), id(t) === e;
    }
    function vt(t, e, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ta(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ta(t, "" + a);
          break;
        case "className":
          Kn(t, "class", a);
          break;
        case "tabIndex":
          Kn(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Kn(t, l, a);
          break;
        case "style":
          is(t, a, u);
          break;
        case "data":
          if (e !== "object") {
            Kn(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (e !== "a" || l !== "href")) {
            t.removeAttribute(l);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = kn("" + a), t.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (e !== "input" && vt(t, e, "name", n.name, n, null), vt(t, e, "formEncType", n.formEncType, n, null), vt(t, e, "formMethod", n.formMethod, n, null), vt(t, e, "formTarget", n.formTarget, n, null)) : (vt(t, e, "encType", n.encType, n, null), vt(t, e, "method", n.method, n, null), vt(t, e, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = kn("" + a), t.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (t.onclick = Le);
          break;
        case "onScroll":
          a != null && at("scroll", t);
          break;
        case "onScrollEnd":
          a != null && at("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(r(60));
              t.innerHTML = l;
            }
          }
          break;
        case "multiple":
          t.multiple = a && typeof a != "function" && typeof a != "symbol";
          break;
        case "muted":
          t.muted = a && typeof a != "function" && typeof a != "symbol";
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
            t.removeAttribute("xlink:href");
            break;
          }
          l = kn("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "" + a) : t.removeAttribute(l);
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
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, "") : t.removeAttribute(l);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(l, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(l, a) : t.removeAttribute(l);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a);
          break;
        case "popover":
          at("beforetoggle", t), at("toggle", t), Vn(t, "popover", a);
          break;
        case "xlinkActuate":
          Ye(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Ye(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Ye(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Ye(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Ye(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Ye(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Ye(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Vn(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Rm.get(l) || l, Vn(t, l, a));
      }
    }
    function sf(t, e, l, a, n, u) {
      switch (l) {
        case "style":
          is(t, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(r(60));
              t.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ta(t, a) : (typeof a == "number" || typeof a == "bigint") && ta(t, "" + a);
          break;
        case "onScroll":
          a != null && at("scroll", t);
          break;
        case "onScrollEnd":
          a != null && at("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Le);
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
          if (!$f.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[$t] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : Vn(t, l, a);
          }
      }
    }
    function Vt(t, e, l) {
      switch (e) {
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
          at("error", t), at("load", t);
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
                throw Error(r(137, e));
              default:
                vt(t, e, u, i, l, null);
            }
          }
          n && vt(t, e, "srcSet", l.srcSet, l, null), a && vt(t, e, "src", l.src, l, null);
          return;
        case "input":
          at("invalid", t);
          var c = u = i = n = null, d = null, v = null;
          for (a in l) if (l.hasOwnProperty(a)) {
            var A = l[a];
            if (A != null) switch (a) {
              case "name":
                n = A;
                break;
              case "type":
                i = A;
                break;
              case "checked":
                d = A;
                break;
              case "defaultChecked":
                v = A;
                break;
              case "value":
                u = A;
                break;
              case "defaultValue":
                c = A;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null) throw Error(r(137, e));
                break;
              default:
                vt(t, e, a, A, l, null);
            }
          }
          ls(t, u, c, d, v, i, n, false);
          return;
        case "select":
          at("invalid", t), a = i = u = null;
          for (n in l) if (l.hasOwnProperty(n) && (c = l[n], c != null)) switch (n) {
            case "value":
              u = c;
              break;
            case "defaultValue":
              i = c;
              break;
            case "multiple":
              a = c;
            default:
              vt(t, e, n, c, l, null);
          }
          e = u, l = i, t.multiple = !!a, e != null ? Pl(t, !!a, e, false) : l != null && Pl(t, !!a, l, true);
          return;
        case "textarea":
          at("invalid", t), u = n = a = null;
          for (i in l) if (l.hasOwnProperty(i) && (c = l[i], c != null)) switch (i) {
            case "value":
              a = c;
              break;
            case "defaultValue":
              n = c;
              break;
            case "children":
              u = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(r(91));
              break;
            default:
              vt(t, e, i, c, l, null);
          }
          ns(t, a, n, u);
          return;
        case "option":
          for (d in l) if (l.hasOwnProperty(d) && (a = l[d], a != null)) switch (d) {
            case "selected":
              t.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              vt(t, e, d, a, l, null);
          }
          return;
        case "dialog":
          at("beforetoggle", t), at("toggle", t), at("cancel", t), at("close", t);
          break;
        case "iframe":
        case "object":
          at("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < pn.length; a++) at(pn[a], t);
          break;
        case "image":
          at("error", t), at("load", t);
          break;
        case "details":
          at("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          at("error", t), at("load", t);
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
          for (v in l) if (l.hasOwnProperty(v) && (a = l[v], a != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, e));
            default:
              vt(t, e, v, a, l, null);
          }
          return;
        default:
          if (xi(e)) {
            for (A in l) l.hasOwnProperty(A) && (a = l[A], a !== void 0 && sf(t, e, A, a, l, void 0));
            return;
          }
      }
      for (c in l) l.hasOwnProperty(c) && (a = l[c], a != null && vt(t, e, c, a, l, null));
    }
    function fy(t, e, l, a) {
      switch (e) {
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
          var n = null, u = null, i = null, c = null, d = null, v = null, A = null;
          for (x in l) {
            var T = l[x];
            if (l.hasOwnProperty(x) && T != null) switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = T;
              default:
                a.hasOwnProperty(x) || vt(t, e, x, null, a, T);
            }
          }
          for (var _ in a) {
            var x = a[_];
            if (T = l[_], a.hasOwnProperty(_) && (x != null || T != null)) switch (_) {
              case "type":
                u = x;
                break;
              case "name":
                n = x;
                break;
              case "checked":
                v = x;
                break;
              case "defaultChecked":
                A = x;
                break;
              case "value":
                i = x;
                break;
              case "defaultValue":
                c = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null) throw Error(r(137, e));
                break;
              default:
                x !== T && vt(t, e, _, x, a, T);
            }
          }
          pi(t, i, c, d, v, A, u, n);
          return;
        case "select":
          x = i = c = _ = null;
          for (u in l) if (d = l[u], l.hasOwnProperty(u) && d != null) switch (u) {
            case "value":
              break;
            case "multiple":
              x = d;
            default:
              a.hasOwnProperty(u) || vt(t, e, u, null, a, d);
          }
          for (n in a) if (u = a[n], d = l[n], a.hasOwnProperty(n) && (u != null || d != null)) switch (n) {
            case "value":
              _ = u;
              break;
            case "defaultValue":
              c = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== d && vt(t, e, n, u, a, d);
          }
          e = c, l = i, a = x, _ != null ? Pl(t, !!l, _, false) : !!a != !!l && (e != null ? Pl(t, !!l, e, true) : Pl(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          x = _ = null;
          for (c in l) if (n = l[c], l.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              vt(t, e, c, null, a, n);
          }
          for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              _ = n;
              break;
            case "defaultValue":
              x = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(r(91));
              break;
            default:
              n !== u && vt(t, e, i, n, a, u);
          }
          as(t, _, x);
          return;
        case "option":
          for (var q in l) if (_ = l[q], l.hasOwnProperty(q) && _ != null && !a.hasOwnProperty(q)) switch (q) {
            case "selected":
              t.selected = false;
              break;
            default:
              vt(t, e, q, null, a, _);
          }
          for (d in a) if (_ = a[d], x = l[d], a.hasOwnProperty(d) && _ !== x && (_ != null || x != null)) switch (d) {
            case "selected":
              t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
              break;
            default:
              vt(t, e, d, _, a, x);
          }
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
          for (var Z in l) _ = l[Z], l.hasOwnProperty(Z) && _ != null && !a.hasOwnProperty(Z) && vt(t, e, Z, null, a, _);
          for (v in a) if (_ = a[v], x = l[v], a.hasOwnProperty(v) && _ !== x && (_ != null || x != null)) switch (v) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (_ != null) throw Error(r(137, e));
              break;
            default:
              vt(t, e, v, _, a, x);
          }
          return;
        default:
          if (xi(e)) {
            for (var _t in l) _ = l[_t], l.hasOwnProperty(_t) && _ !== void 0 && !a.hasOwnProperty(_t) && sf(t, e, _t, void 0, a, _);
            for (A in a) _ = a[A], x = l[A], !a.hasOwnProperty(A) || _ === x || _ === void 0 && x === void 0 || sf(t, e, A, _, a, x);
            return;
          }
      }
      for (var g in l) _ = l[g], l.hasOwnProperty(g) && _ != null && !a.hasOwnProperty(g) && vt(t, e, g, null, a, _);
      for (T in a) _ = a[T], x = l[T], !a.hasOwnProperty(T) || _ === x || _ == null && x == null || vt(t, e, T, _, a, x);
    }
    function fd(t) {
      switch (t) {
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
    function sy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
          if (u && c && fd(i)) {
            for (i = 0, c = n.responseEnd, a += 1; a < l.length; a++) {
              var d = l[a], v = d.startTime;
              if (v > c) break;
              var A = d.transferSize, T = d.initiatorType;
              A && fd(T) && (d = d.responseEnd, i += A * (d < c ? 1 : (c - v) / (d - v)));
            }
            if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var rf = null, of = null;
    function Qu(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function sd(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function rd(t, e) {
      if (t === 0) switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function df(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var mf = null;
    function ry() {
      var t = window.event;
      return t && t.type === "popstate" ? t === mf ? false : (mf = t, true) : (mf = null, false);
    }
    var od = typeof setTimeout == "function" ? setTimeout : void 0, oy = typeof clearTimeout == "function" ? clearTimeout : void 0, dd = typeof Promise == "function" ? Promise : void 0, dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof dd < "u" ? function(t) {
      return dd.resolve(null).then(t).catch(my);
    } : od;
    function my(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function xl(t) {
      return t === "head";
    }
    function md(t, e) {
      var l = e, a = 0;
      do {
        var n = l.nextSibling;
        if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ua(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") xn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, xn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Ya] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && xn(t.ownerDocument.body);
        l = n;
      } while (l);
      Ua(e);
    }
    function yd(t, e) {
      var l = t;
      t = 0;
      do {
        var a = l.nextSibling;
        if (l.nodeType === 1 ? e ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (e ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
          if (t === 0) break;
          t--;
        } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || t++;
        l = a;
      } while (l);
    }
    function yf(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            yf(l), vi(l);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (l.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(l);
      }
    }
    function yy(t, e, l, a) {
      for (; t.nodeType === 1; ) {
        var n = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ya]) switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence")) break;
              if (u !== n.rel || t.getAttribute("href") !== (n.href == null || n.href === "" ? null : n.href) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin) || t.getAttribute("title") !== (n.title == null ? null : n.title)) break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (n.src == null ? null : n.src) || t.getAttribute("type") !== (n.type == null ? null : n.type) || t.getAttribute("crossorigin") !== (n.crossOrigin == null ? null : n.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break;
              return t;
            default:
              return t;
          }
        } else if (e === "input" && t.type === "hidden") {
          var u = n.name == null ? null : "" + n.name;
          if (n.type === "hidden" && t.getAttribute("name") === u) return t;
        } else return t;
        if (t = Ee(t.nextSibling), t === null) break;
      }
      return null;
    }
    function hy(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ee(t.nextSibling), t === null)) return null;
      return t;
    }
    function hd(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ee(t.nextSibling), t === null)) return null;
      return t;
    }
    function hf(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function gf(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function gy(t, e) {
      var l = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = e;
      else if (t.data !== "$?" || l.readyState !== "loading") e();
      else {
        var a = function() {
          e(), l.removeEventListener("DOMContentLoaded", a);
        };
        l.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function Ee(t) {
      for (; t != null; t = t.nextSibling) {
        var e = t.nodeType;
        if (e === 1 || e === 3) break;
        if (e === 8) {
          if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break;
          if (e === "/$" || e === "/&") return null;
        }
      }
      return t;
    }
    var bf = null;
    function gd(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return Ee(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function bd(t) {
      t = t.previousSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
            if (e === 0) return t;
            e--;
          } else l !== "/$" && l !== "/&" || e++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function vd(t, e, l) {
      switch (e = Qu(l), t) {
        case "html":
          if (t = e.documentElement, !t) throw Error(r(452));
          return t;
        case "head":
          if (t = e.head, !t) throw Error(r(453));
          return t;
        case "body":
          if (t = e.body, !t) throw Error(r(454));
          return t;
        default:
          throw Error(r(451));
      }
    }
    function xn(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      vi(t);
    }
    var Ne = /* @__PURE__ */ new Map(), _d = /* @__PURE__ */ new Set();
    function Zu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var ll = C.d;
    C.d = {
      f: by,
      r: vy,
      D: _y,
      C: py,
      L: Sy,
      m: xy,
      X: zy,
      S: Ay,
      M: Ey
    };
    function by() {
      var t = ll.f(), e = Ru();
      return t || e;
    }
    function vy(t) {
      var e = Wl(t);
      e !== null && e.tag === 5 && e.type === "form" ? Rr(e) : ll.r(t);
    }
    var ja = typeof document > "u" ? null : document;
    function pd(t, e, l) {
      var a = ja;
      if (a && typeof e == "string" && e) {
        var n = ve(e);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), _d.has(n) || (_d.add(n), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(n) === null && (e = a.createElement("link"), Vt(e, "link", t), Bt(e), a.head.appendChild(e)));
      }
    }
    function _y(t) {
      ll.D(t), pd("dns-prefetch", t, null);
    }
    function py(t, e) {
      ll.C(t, e), pd("preconnect", t, e);
    }
    function Sy(t, e, l) {
      ll.L(t, e, l);
      var a = ja;
      if (a && t && e) {
        var n = 'link[rel="preload"][as="' + ve(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ve(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ve(l.imageSizes) + '"]')) : n += '[href="' + ve(t) + '"]';
        var u = n;
        switch (e) {
          case "style":
            u = Ma(t);
            break;
          case "script":
            u = Oa(t);
        }
        Ne.has(u) || (t = D({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), Ne.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(An(u)) || e === "script" && a.querySelector(zn(u)) || (e = a.createElement("link"), Vt(e, "link", t), Bt(e), a.head.appendChild(e)));
      }
    }
    function xy(t, e) {
      ll.m(t, e);
      var l = ja;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ve(a) + '"][href="' + ve(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Oa(t);
        }
        if (!Ne.has(u) && (t = D({
          rel: "modulepreload",
          href: t
        }, e), Ne.set(u, t), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(zn(u))) return;
          }
          a = l.createElement("link"), Vt(a, "link", t), Bt(a), l.head.appendChild(a);
        }
      }
    }
    function Ay(t, e, l) {
      ll.S(t, e, l);
      var a = ja;
      if (a && t) {
        var n = $l(a).hoistableStyles, u = Ma(t);
        e = e || "default";
        var i = n.get(u);
        if (!i) {
          var c = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(An(u))) c.loading = 5;
          else {
            t = D({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = Ne.get(u)) && vf(t, l);
            var d = i = a.createElement("link");
            Bt(d), Vt(d, "link", t), d._p = new Promise(function(v, A) {
              d.onload = v, d.onerror = A;
            }), d.addEventListener("load", function() {
              c.loading |= 1;
            }), d.addEventListener("error", function() {
              c.loading |= 2;
            }), c.loading |= 4, Vu(i, e, a);
          }
          i = {
            type: "stylesheet",
            instance: i,
            count: 1,
            state: c
          }, n.set(u, i);
        }
      }
    }
    function zy(t, e) {
      ll.X(t, e);
      var l = ja;
      if (l && t) {
        var a = $l(l).hoistableScripts, n = Oa(t), u = a.get(n);
        u || (u = l.querySelector(zn(n)), u || (t = D({
          src: t,
          async: true
        }, e), (e = Ne.get(n)) && _f(t, e), u = l.createElement("script"), Bt(u), Vt(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Ey(t, e) {
      ll.M(t, e);
      var l = ja;
      if (l && t) {
        var a = $l(l).hoistableScripts, n = Oa(t), u = a.get(n);
        u || (u = l.querySelector(zn(n)), u || (t = D({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Ne.get(n)) && _f(t, e), u = l.createElement("script"), Bt(u), Vt(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Sd(t, e, l, a) {
      var n = (n = W.current) ? Zu(n) : null;
      if (!n) throw Error(r(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ma(l.href), l = $l(n).hoistableStyles, a = l.get(e), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
            t = Ma(l.href);
            var u = $l(n).hoistableStyles, i = u.get(t);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, i), (u = n.querySelector(An(t))) && !u._p && (i.instance = u, i.state.loading = 5), Ne.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ne.set(t, l), u || Ny(n, t, l, i.state))), e && a === null) throw Error(r(528, ""));
            return i;
          }
          if (e && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Oa(l), l = $l(n).hoistableScripts, a = l.get(e), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, l.set(e, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(r(444, t));
      }
    }
    function Ma(t) {
      return 'href="' + ve(t) + '"';
    }
    function An(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function xd(t) {
      return D({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Ny(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), Vt(e, "link", l), Bt(e), t.head.appendChild(e));
    }
    function Oa(t) {
      return '[src="' + ve(t) + '"]';
    }
    function zn(t) {
      return "script[async]" + t;
    }
    function Ad(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ve(l.href) + '"]');
          if (a) return e.instance = a, Bt(a), a;
          var n = D({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Bt(a), Vt(a, "style", n), Vu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ma(l.href);
          var u = t.querySelector(An(n));
          if (u) return e.state.loading |= 4, e.instance = u, Bt(u), u;
          a = xd(l), (n = Ne.get(n)) && vf(a, n), u = (t.ownerDocument || t).createElement("link"), Bt(u);
          var i = u;
          return i._p = new Promise(function(c, d) {
            i.onload = c, i.onerror = d;
          }), Vt(u, "link", a), e.state.loading |= 4, Vu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Oa(l.src), (n = t.querySelector(zn(u))) ? (e.instance = n, Bt(n), n) : (a = l, (n = Ne.get(u)) && (a = D({}, l), _f(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Bt(n), Vt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Vu(a, l.precedence, t));
      return e.instance;
    }
    function Vu(t, e, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var c = a[i];
        if (c.dataset.precedence === e) u = c;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function vf(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function _f(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Ku = null;
    function zd(t, e, l) {
      if (Ku === null) {
        var a = /* @__PURE__ */ new Map(), n = Ku = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = Ku, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(t)) return a;
      for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[Ya] || u[Gt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = u.getAttribute(e) || "";
          i = t + i;
          var c = a.get(i);
          c ? c.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function Ed(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function Ty(t, e, l) {
      if (l === 1 || e.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break;
          return true;
        case "link":
          if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break;
          switch (e.rel) {
            case "stylesheet":
              return t = e.disabled, typeof e.precedence == "string" && t == null;
            default:
              return true;
          }
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function Nd(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function jy(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = Ma(a.href), u = e.querySelector(An(n));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Ju.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Bt(u);
            return;
          }
          u = e.ownerDocument || e, a = xd(a), (n = Ne.get(n)) && vf(a, n), u = u.createElement("link"), Bt(u);
          var i = u;
          i._p = new Promise(function(c, d) {
            i.onload = c, i.onerror = d;
          }), Vt(u, "link", a), l.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Ju.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var pf = 0;
    function My(t, e) {
      return t.stylesheets && t.count === 0 && Fu(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && Fu(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && pf === 0 && (pf = 62500 * sy());
        var n = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && Fu(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > pf ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function Ju() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Fu(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var ku = null;
    function Fu(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, ku = /* @__PURE__ */ new Map(), e.forEach(Oy, t), ku = null, Ju.call(t));
    }
    function Oy(t, e) {
      if (!(e.state.loading & 4)) {
        var l = ku.get(t);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), ku.set(t, l);
          for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
          }
          a && l.set(null, a);
        }
        n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Ju.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
      }
    }
    var En = {
      $$typeof: tt,
      Provider: null,
      Consumer: null,
      _currentValue: V,
      _currentValue2: V,
      _threadCount: 0
    };
    function Uy(t, e, l, a, n, u, i, c, d) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Td(t, e, l, a, n, u, i, c, d, v, A, T) {
      return t = new Uy(t, e, l, i, d, v, A, T, c), e = 1, u === true && (e |= 24), u = se(3, null, null, e), t.current = u, u.stateNode = t, e = Ii(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, lc(u), t;
    }
    function jd(t) {
      return t ? (t = ca, t) : ca;
    }
    function Md(t, e, l, a, n, u) {
      n = jd(n), a.context === null ? a.context = n : a.pendingContext = n, a = ol(e), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = dl(t, a, e), l !== null && (ae(l, t, e), ln(l, t, e));
    }
    function Od(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function Sf(t, e) {
      Od(t, e), (t = t.alternate) && Od(t, e);
    }
    function Ud(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Cl(t, 67108864);
        e !== null && ae(e, t, 67108864), Sf(t, 67108864);
      }
    }
    function Dd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ye();
        e = hi(e);
        var l = Cl(t, e);
        l !== null && ae(l, t, e), Sf(t, e);
      }
    }
    var Wu = true;
    function Dy(t, e, l, a) {
      var n = z.T;
      z.T = null;
      var u = C.p;
      try {
        C.p = 2, xf(t, e, l, a);
      } finally {
        C.p = u, z.T = n;
      }
    }
    function wy(t, e, l, a) {
      var n = z.T;
      z.T = null;
      var u = C.p;
      try {
        C.p = 8, xf(t, e, l, a);
      } finally {
        C.p = u, z.T = n;
      }
    }
    function xf(t, e, l, a) {
      if (Wu) {
        var n = Af(a);
        if (n === null) ff(t, e, a, $u, l), Cd(t, a);
        else if (Ry(n, t, e, l, a)) a.stopPropagation();
        else if (Cd(t, a), e & 4 && -1 < Cy.indexOf(t)) {
          for (; n !== null; ) {
            var u = Wl(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ml(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var d = 1 << 31 - ce(i);
                      c.entanglements[1] |= d, i &= ~d;
                    }
                    Re(u), (mt & 6) === 0 && (wu = ue() + 500, _n(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Cl(u, 2), c !== null && ae(c, u, 2), Ru(), Sf(u, 2);
            }
            if (u = Af(a), u === null && ff(t, e, a, $u, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else ff(t, e, a, null, l);
      }
    }
    function Af(t) {
      return t = zi(t), zf(t);
    }
    var $u = null;
    function zf(t) {
      if ($u = null, t = Fl(t), t !== null) {
        var e = j(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = M(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = O(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return $u = t, null;
    }
    function wd(t) {
      switch (t) {
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
          switch (_m()) {
            case Lf:
              return 2;
            case Gf:
              return 8;
            case Ln:
            case pm:
              return 32;
            case Xf:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Ef = false, Al = null, zl = null, El = null, Nn = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Nl = [], Cy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Cd(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          Al = null;
          break;
        case "dragenter":
        case "dragleave":
          zl = null;
          break;
        case "mouseover":
        case "mouseout":
          El = null;
          break;
        case "pointerover":
        case "pointerout":
          Nn.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Tn.delete(e.pointerId);
      }
    }
    function jn(t, e, l, a, n, u) {
      return t === null || t.nativeEvent !== u ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, e !== null && (e = Wl(e), e !== null && Ud(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
    }
    function Ry(t, e, l, a, n) {
      switch (e) {
        case "focusin":
          return Al = jn(Al, t, e, l, a, n), true;
        case "dragenter":
          return zl = jn(zl, t, e, l, a, n), true;
        case "mouseover":
          return El = jn(El, t, e, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Nn.set(u, jn(Nn.get(u) || null, t, e, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Tn.set(u, jn(Tn.get(u) || null, t, e, l, a, n)), true;
      }
      return false;
    }
    function Rd(t) {
      var e = Fl(t.target);
      if (e !== null) {
        var l = j(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = M(l), e !== null) {
              t.blockedOn = e, kf(t.priority, function() {
                Dd(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = O(l), e !== null) {
              t.blockedOn = e, kf(t.priority, function() {
                Dd(l);
              });
              return;
            }
          } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function Iu(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = Af(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          Ai = a, l.target.dispatchEvent(a), Ai = null;
        } else return e = Wl(l), e !== null && Ud(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function Hd(t, e, l) {
      Iu(t) && l.delete(e);
    }
    function Hy() {
      Ef = false, Al !== null && Iu(Al) && (Al = null), zl !== null && Iu(zl) && (zl = null), El !== null && Iu(El) && (El = null), Nn.forEach(Hd), Tn.forEach(Hd);
    }
    function Pu(t, e) {
      t.blockedOn === e && (t.blockedOn = null, Ef || (Ef = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, Hy)));
    }
    var ti = null;
    function Bd(t) {
      ti !== t && (ti = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        ti === t && (ti = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (zf(a || l) === null) continue;
            break;
          }
          var u = Wl(l);
          u !== null && (t.splice(e, 3), e -= 3, xc(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Ua(t) {
      function e(d) {
        return Pu(d, t);
      }
      Al !== null && Pu(Al, t), zl !== null && Pu(zl, t), El !== null && Pu(El, t), Nn.forEach(e), Tn.forEach(e);
      for (var l = 0; l < Nl.length; l++) {
        var a = Nl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Nl.length && (l = Nl[0], l.blockedOn === null); ) Rd(l), l.blockedOn === null && Nl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[$t] || null;
        if (typeof u == "function") i || Bd(l);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[$t] || null) c = i.formAction;
            else if (zf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? l[a + 1] = c : (l.splice(a, 3), a -= 3), Bd(l);
        }
      }
    }
    function qd() {
      function t(u) {
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
      function e() {
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
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(l, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), n !== null && (n(), n = null);
        };
      }
    }
    function Nf(t) {
      this._internalRoot = t;
    }
    ei.prototype.render = Nf.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current, a = ye();
      Md(l, a, t, e, null, null);
    }, ei.prototype.unmount = Nf.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Md(t.current, 2, null, t, null, null), Ru(), e[kl] = null;
      }
    };
    function ei(t) {
      this._internalRoot = t;
    }
    ei.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Jf();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < Nl.length && e !== 0 && e < Nl[l].priority; l++) ;
        Nl.splice(l, 0, t), l === 0 && Rd(t);
      }
    };
    var Yd = s.version;
    if (Yd !== "19.2.1") throw Error(r(527, Yd, "19.2.1"));
    C.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
      return t = S(e), t = t !== null ? w(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var By = {
      bundleType: 0,
      version: "19.2.1",
      rendererPackageName: "react-dom",
      currentDispatcherRef: z,
      reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!li.isDisabled && li.supportsFiber) try {
        Ha = li.inject(By), ie = li;
      } catch {
      }
    }
    return On.createRoot = function(t, e) {
      if (!p(t)) throw Error(r(299));
      var l = false, a = "", n = Vr, u = Kr, i = Jr;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Td(t, 1, false, null, null, l, a, null, n, u, i, qd), t[kl] = e.current, cf(t), new Nf(e);
    }, On.hydrateRoot = function(t, e, l) {
      if (!p(t)) throw Error(r(299));
      var a = false, n = "", u = Vr, i = Kr, c = Jr, d = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (c = l.onRecoverableError), l.formState !== void 0 && (d = l.formState)), e = Td(t, 1, true, e, l ?? null, a, n, d, u, i, c, qd), e.context = jd(null), l = e.current, a = ye(), a = hi(a), n = ol(a), n.callback = null, dl(l, n, a), l = a, e.current.lanes = l, qa(e, l), Re(e), t[kl] = e.current, cf(t), new ei(e);
    }, On.version = "19.2.1", On;
  }
  var Fd;
  function ky() {
    if (Fd) return Mf.exports;
    Fd = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
    }
    return f(), Mf.exports = Jy(), Mf.exports;
  }
  var Fy = ky();
  const Wy = rm(Fy), $y = "modulepreload", Iy = function(f, s) {
    return new URL(f, s).href;
  }, Wd = {}, Py = function(s, m, r) {
    let p = Promise.resolve();
    if (m && m.length > 0) {
      let S = function(w) {
        return Promise.all(w.map((D) => Promise.resolve(D).then((L) => ({
          status: "fulfilled",
          value: L
        }), (L) => ({
          status: "rejected",
          reason: L
        }))));
      };
      const M = document.getElementsByTagName("link"), O = document.querySelector("meta[property=csp-nonce]"), U = (O == null ? void 0 : O.nonce) || (O == null ? void 0 : O.getAttribute("nonce"));
      p = S(m.map((w) => {
        if (w = Iy(w, r), w in Wd) return;
        Wd[w] = true;
        const D = w.endsWith(".css"), L = D ? '[rel="stylesheet"]' : "";
        if (r) for (let yt = M.length - 1; yt >= 0; yt--) {
          const ft = M[yt];
          if (ft.href === w && (!D || ft.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${w}"]${L}`)) return;
        const ct = document.createElement("link");
        if (ct.rel = D ? "stylesheet" : $y, D || (ct.as = "script"), ct.crossOrigin = "", ct.href = w, U && ct.setAttribute("nonce", U), document.head.appendChild(ct), D) return new Promise((yt, ft) => {
          ct.addEventListener("load", yt), ct.addEventListener("error", () => ft(new Error(`Unable to preload CSS for ${w}`)));
        });
      }));
    }
    function j(M) {
      const O = new Event("vite:preloadError", {
        cancelable: true
      });
      if (O.payload = M, window.dispatchEvent(O), !O.defaultPrevented) throw M;
    }
    return p.then((M) => {
      for (const O of M || []) O.status === "rejected" && j(O.reason);
      return s().catch(j);
    });
  };
  const th = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), eh = (f) => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, m, r) => r ? r.toUpperCase() : m.toLowerCase()), $d = (f) => {
    const s = eh(f);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }, om = (...f) => f.filter((s, m, r) => !!s && s.trim() !== "" && r.indexOf(s) === m).join(" ").trim(), lh = (f) => {
    for (const s in f) if (s.startsWith("aria-") || s === "role" || s === "title") return true;
  };
  var ah = {
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
  const nh = pt.forwardRef(({ color: f = "currentColor", size: s = 24, strokeWidth: m = 2, absoluteStrokeWidth: r, className: p = "", children: j, iconNode: M, ...O }, U) => pt.createElement("svg", {
    ref: U,
    ...ah,
    width: s,
    height: s,
    stroke: f,
    strokeWidth: r ? Number(m) * 24 / Number(s) : m,
    className: om("lucide", p),
    ...!j && !lh(O) && {
      "aria-hidden": "true"
    },
    ...O
  }, [
    ...M.map(([S, w]) => pt.createElement(S, w)),
    ...Array.isArray(j) ? j : [
      j
    ]
  ]));
  const Ct = (f, s) => {
    const m = pt.forwardRef(({ className: r, ...p }, j) => pt.createElement(nh, {
      ref: j,
      iconNode: s,
      className: om(`lucide-${th($d(f))}`, `lucide-${f}`, r),
      ...p
    }));
    return m.displayName = $d(f), m;
  };
  const uh = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], Id = Ct("activity", uh);
  const ih = [
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
  ], ch = Ct("book-open", ih);
  const fh = [
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
  ], sh = Ct("building-2", fh);
  const rh = [
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
  ], oh = Ct("bug", rh);
  const dh = [
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
  ], dm = Ct("clock", dh);
  const mh = [
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
  ], yh = Ct("download", mh);
  const hh = [
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
  ], Pd = Ct("file-text", hh);
  const gh = [
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
  ], bh = Ct("guitar", gh);
  const vh = [
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
  ], _h = Ct("image", vh);
  const ph = [
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
  ], Sh = Ct("log-out", ph);
  const xh = [
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
  ], Ah = Ct("mic", xh);
  const zh = [
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
  ], Eh = Ct("monitor", zh);
  const Nh = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], Th = Ct("moon", Nh);
  const jh = [
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
  ], ci = Ct("music", jh);
  const Mh = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], Oh = Ct("play", Mh);
  const Uh = [
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
  ], Hn = Ct("plus", Uh);
  const Dh = [
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
  ], wh = Ct("sun", Dh);
  const Ch = [
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
  ], wa = Ct("trash-2", Ch);
  const Rh = [
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
  ], tm = Ct("trending-up", Rh);
  const Hh = [
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
  ], mm = Ct("upload", Hh);
  function Bh({ file: f, onFileUpload: s, isParsingMetadata: m = false, metadataSummary: r }) {
    const p = (j) => {
      var _a;
      s(((_a = j.target.files) == null ? void 0 : _a[0]) || null);
    };
    return o.jsxs("div", {
      className: "space-y-3",
      children: [
        o.jsx("label", {
          className: "micro-label",
          children: "Upload flo\u2122 File"
        }),
        o.jsxs("label", {
          className: "group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/10",
          "aria-busy": m,
          children: [
            o.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                o.jsx("div", {
                  className: "rounded-full bg-primary/15 p-2 text-primary",
                  children: o.jsx(Pd, {
                    className: "h-4 w-4 icon-accent"
                  })
                }),
                o.jsxs("div", {
                  children: [
                    o.jsx("p", {
                      className: "font-semibold",
                      children: "Drop or browse your .flo file"
                    }),
                    o.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "All metadata editing happens locally."
                    })
                  ]
                })
              ]
            }),
            o.jsx("span", {
              className: "btn",
              "data-variant": "solid",
              "data-tone": "primary",
              "data-size": "xs",
              children: "Browse"
            }),
            o.jsx("input", {
              type: "file",
              accept: ".flo",
              onChange: p,
              className: "sr-only"
            })
          ]
        }),
        f && o.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            o.jsx(Pd, {
              className: "h-4 w-4 icon-accent"
            }),
            o.jsxs("div", {
              className: "flex flex-col",
              children: [
                o.jsx("span", {
                  className: "font-medium",
                  children: f.name
                }),
                o.jsxs("span", {
                  className: "text-xs text-muted-foreground",
                  children: [
                    "Ready to tag \xB7 ",
                    (f.size / (1024 * 1024)).toFixed(2),
                    " MB"
                  ]
                })
              ]
            })
          ]
        }),
        f && o.jsx("div", {
          className: "text-xs text-muted-foreground",
          children: m ? o.jsxs("span", {
            className: "flex items-center gap-2 text-primary",
            children: [
              o.jsx("span", {
                className: "h-1.5 w-1.5 animate-ping rounded-full bg-primary",
                "aria-hidden": "true"
              }),
              "Reading embedded tags..."
            ]
          }) : r ? o.jsx("span", {
            className: "text-foreground/70",
            children: r
          }) : null
        })
      ]
    });
  }
  const em = [
    {
      key: "title",
      label: "Title",
      placeholder: "Song title"
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
  ], lm = [
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
      placeholder: "US-ABC-24-00001",
      colSpan: "full"
    }
  ], am = [
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
      key: "copyright",
      label: "Copyright",
      placeholder: "\u2117 & \xA9 info"
    },
    {
      key: "mood",
      label: "Mood",
      placeholder: "Euphoric night drive"
    },
    {
      key: "encoded_by",
      label: "Encoded By",
      placeholder: "FloEditor"
    }
  ], nm = [
    {
      key: "url_commercial",
      label: "Commercial URL",
      placeholder: "https://example.com/buy",
      colSpan: "full"
    }
  ];
  function qh({ metadata: f, onMetadataChange: s }) {
    var _a, _b;
    const m = Object.values(f).filter((j) => typeof j == "string" && j.trim().length > 0).length, r = em.length + lm.length + am.length + nm.length + 1, p = ({ key: j, label: M, placeholder: O, type: U, colSpan: S }) => {
      const w = f[j], D = typeof w == "string" || typeof w == "number" ? w : "";
      return o.jsxs("div", {
        className: `space-y-2 ${S === "full" ? "md:col-span-2" : ""}`,
        children: [
          o.jsx("label", {
            htmlFor: j,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: M
          }),
          o.jsx("input", {
            id: j,
            value: D,
            onChange: (L) => s(j, U === "number" ? parseInt(L.target.value) || void 0 : L.target.value),
            placeholder: O,
            type: U ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, j);
    };
    return o.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        o.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("p", {
                  className: "micro-label",
                  children: "Metadata"
                }),
                o.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Flo\u2122 Tag Editor"
                })
              ]
            }),
            o.jsxs("div", {
              className: "text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80",
              children: [
                m,
                " / ",
                r,
                " fields filled"
              ]
            })
          ]
        }),
        o.jsxs("div", {
          className: "space-y-8",
          children: [
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Essentials"
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: em.map(p)
                })
              ]
            }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Release Details"
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: lm.map(p)
                })
              ]
            }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Credits & Codes"
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: am.map(p)
                })
              ]
            }),
            o.jsxs("div", {
              className: "space-y-4",
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Links"
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: nm.map(p)
                })
              ]
            })
          ]
        }),
        o.jsxs("div", {
          className: "mt-8 space-y-2",
          children: [
            o.jsx("label", {
              htmlFor: "comment",
              className: "text-sm font-semibold tracking-wide text-foreground/80",
              children: "Comments"
            }),
            o.jsx("textarea", {
              id: "comment",
              rows: 4,
              value: ((_b = (_a = f.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onChange: (j) => s("comments", [
                {
                  text: j.target.value
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
  const um = [
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
      label: "Leaflet"
    },
    {
      value: "media",
      label: "Media"
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
      value: "band_logo",
      label: "Band Logo"
    },
    {
      value: "publisher_logo",
      label: "Publisher Logo"
    }
  ], Yh = [
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
  function Lh({ pictures: f = [], onPicturesChange: s, coverVariants: m = [], onCoverVariantsChange: r, animatedCover: p, onAnimatedCoverChange: j }) {
    const M = async (K, Q) => {
      var _a, _b;
      const P = (_a = K.target.files) == null ? void 0 : _a[0];
      if (P) {
        if (!P.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if (P.size > 10485760) {
          alert("Image size must be less than 10MB");
          return;
        }
        const tt = await P.arrayBuffer(), Et = new Uint8Array(tt), Wt = {
          mime_type: P.type,
          picture_type: Q,
          description: `${(_b = um.find((F) => F.value === Q)) == null ? void 0 : _b.label} Art`,
          data: Et
        }, Rt = f.filter((F) => F.picture_type !== Q);
        Rt.push(Wt), s(Rt);
      }
    }, O = (K) => {
      s(f.filter((Q) => Q.picture_type !== K));
    }, U = () => {
      r([
        ...m,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, S = async (K, Q) => {
      var _a;
      const P = (_a = Q.target.files) == null ? void 0 : _a[0];
      if (P) {
        if (!P.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const tt = await P.arrayBuffer(), Et = [
          ...m
        ];
        Et[K].data = new Uint8Array(tt), Et[K].mime_type = P.type, r(Et);
      }
    }, w = (K, Q, P) => {
      const tt = [
        ...m
      ];
      tt[K] = {
        ...tt[K],
        [Q]: P
      }, r(tt);
    }, D = (K) => {
      r(m.filter((Q, P) => P !== K));
    }, L = async (K) => {
      var _a;
      const Q = (_a = K.target.files) == null ? void 0 : _a[0];
      if (Q) {
        if (!Q.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const P = await Q.arrayBuffer(), tt = new Uint8Array(P), Et = {
          mime_type: Q.type,
          data: tt,
          duration_ms: 3e3,
          loop_count: 0
        };
        j(Et);
      }
    }, ct = (K, Q) => {
      p && j({
        ...p,
        [K]: Q
      });
    }, yt = () => {
      j(void 0);
    }, ft = (K, Q) => URL.createObjectURL(new Blob([
      K
    ], {
      type: Q
    }));
    return o.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        o.jsxs("div", {
          className: "mb-4",
          children: [
            o.jsx("p", {
              className: "micro-label",
              children: "Artwork"
            }),
            o.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Album Art & Covers"
            }),
            o.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Manage covers, variants, and animated art"
            })
          ]
        }),
        o.jsxs("div", {
          className: "space-y-8",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Standard Covers"
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: um.map(({ value: K, label: Q }) => {
                    const P = f.find((tt) => tt.picture_type === K);
                    return o.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: P ? o.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          o.jsx("img", {
                            src: ft(P.data, P.mime_type),
                            alt: Q,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          o.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              o.jsx("span", {
                                className: "text-sm font-medium",
                                children: Q
                              }),
                              o.jsx("button", {
                                onClick: () => O(K),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: o.jsx(wa, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : o.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          o.jsx(Hn, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          o.jsx("span", {
                            className: "text-xs font-medium",
                            children: Q
                          }),
                          o.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (tt) => M(tt, K),
                            className: "hidden"
                          })
                        ]
                      })
                    }, K);
                  })
                })
              ]
            }),
            o.jsxs("div", {
              children: [
                o.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    o.jsx("h3", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Cover Variants"
                    }),
                    o.jsxs("button", {
                      onClick: U,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Hn, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Variant"
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "space-y-3",
                  children: m.length === 0 ? o.jsxs("div", {
                    className: "text-center text-muted-foreground py-4",
                    children: [
                      o.jsx(_h, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      o.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : m.map((K, Q) => o.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("select", {
                            value: K.variant_type,
                            onChange: (P) => w(Q, "variant_type", P.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: Yh.map(({ value: P, label: tt }) => o.jsx("option", {
                              value: P,
                              children: tt
                            }, P))
                          }),
                          o.jsx("input", {
                            value: K.description || "",
                            onChange: (P) => w(Q, "description", P.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          o.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              o.jsx(mm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              o.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (P) => S(Q, P),
                                className: "hidden"
                              })
                            ]
                          }),
                          o.jsx("button", {
                            onClick: () => D(Q),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: o.jsx(wa, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      K.data.length > 0 && o.jsx("img", {
                        src: ft(K.data, K.mime_type),
                        alt: K.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, Q))
                })
              ]
            }),
            o.jsxs("div", {
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Animated Cover"
                }),
                p ? o.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    o.jsx("img", {
                      src: ft(p.data, p.mime_type),
                      alt: "Animated Cover",
                      className: "w-32 h-32 object-cover rounded-lg border"
                    }),
                    o.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        o.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            o.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Duration (ms)"
                            }),
                            o.jsx("input", {
                              type: "number",
                              value: p.duration_ms || 0,
                              onChange: (K) => ct("duration_ms", parseInt(K.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        }),
                        o.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            o.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Loop Count"
                            }),
                            o.jsx("input", {
                              type: "number",
                              value: p.loop_count || 0,
                              onChange: (K) => ct("loop_count", parseInt(K.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    o.jsxs("button", {
                      onClick: yt,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        o.jsx(wa, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : o.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    o.jsx(Oh, {
                      className: "h-8 w-8 icon-accent"
                    }),
                    o.jsxs("div", {
                      children: [
                        o.jsx("p", {
                          className: "font-semibold",
                          children: "Upload Animated Cover"
                        }),
                        o.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "WebP or GIF for animation"
                        })
                      ]
                    }),
                    o.jsx("input", {
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
  const ai = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, Gh = {
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
  function Xh({ syncedLyrics: f = [], onSyncedLyricsChange: s, lrcText: m, onLrcTextChange: r, onImport: p, unsyncedLyrics: j, onUnsyncedLyricsChange: M }) {
    var _a, _b;
    const O = f.length > 0 ? f[0] : {
      ...ai,
      lines: []
    }, U = () => {
      const D = [
        ...f
      ];
      D.length === 0 ? D.push({
        content_type: "lyrics",
        lines: [
          {
            text: "",
            timestamp_ms: 0
          }
        ]
      }) : D[0].lines.push({
        text: "",
        timestamp_ms: 0
      }), s(D);
    }, S = (D, L, ct) => {
      const yt = [
        ...f
      ];
      yt.length > 0 && (yt[0].lines[D] = {
        text: L,
        timestamp_ms: ct
      }, s(yt));
    }, w = (D) => {
      const L = [
        ...f
      ];
      L.length > 0 && (L[0].lines.splice(D, 1), s(L));
    };
    return o.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        o.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("p", {
                  className: "micro-label",
                  children: "Lyrics"
                }),
                o.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Lyrics & Sync"
                })
              ]
            }),
            o.jsxs("span", {
              className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
              children: [
                ((_a = O.lines) == null ? void 0 : _a.length) || 0,
                " entries"
              ]
            })
          ]
        }),
        o.jsxs("div", {
          className: "space-y-4",
          children: [
            o.jsxs("div", {
              className: "space-y-2",
              children: [
                o.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-2",
                  children: [
                    o.jsxs("div", {
                      children: [
                        o.jsx("p", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Import from LRC"
                        }),
                        o.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Paste a timestamped block and drop it straight into SYLT."
                        })
                      ]
                    }),
                    o.jsxs("button", {
                      onClick: p,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(mm, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Import"
                      ]
                    })
                  ]
                }),
                o.jsx("textarea", {
                  value: m,
                  onChange: (D) => r(D.target.value),
                  rows: 4,
                  placeholder: "[00:01.40]First line\\n[00:08.50]Next line",
                  className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                })
              ]
            }),
            o.jsxs("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-2",
              children: [
                o.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    o.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Language"
                    }),
                    o.jsx("input", {
                      value: O.language || "",
                      onChange: (D) => {
                        const L = [
                          ...f
                        ];
                        L.length > 0 && (L[0].language = D.target.value, s(L));
                      },
                      placeholder: "eng",
                      maxLength: 3,
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    })
                  ]
                }),
                o.jsxs("div", {
                  className: "space-y-2 md:col-span-2",
                  children: [
                    o.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        o.jsx("label", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Unsynced Lyrics"
                        }),
                        o.jsx("span", {
                          className: "text-xs text-muted-foreground text-right",
                          children: "Leave blank to auto-fill from the synced lines above."
                        })
                      ]
                    }),
                    o.jsx("textarea", {
                      value: j,
                      onChange: (D) => M(D.target.value),
                      rows: 4,
                      placeholder: "Paste the full lyric sheet if you don\u2019t need timestamps.",
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    })
                  ]
                })
              ]
            }),
            o.jsxs("div", {
              className: "space-y-3",
              children: [
                o.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    o.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Timeline Entries"
                    }),
                    o.jsxs("button", {
                      onClick: U,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Hn, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = O.lines) == null ? void 0 : _b.map((D, L) => o.jsx(Qh, {
                    index: L,
                    text: D.text,
                    timestamp: D.timestamp_ms,
                    onUpdate: S,
                    onDelete: w
                  }, L))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Qh({ index: f, text: s, timestamp: m, onUpdate: r, onDelete: p }) {
    return o.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        o.jsx("input", {
          value: s,
          onChange: (j) => r(f, j.target.value, m),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        }),
        o.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            o.jsx(dm, {
              className: "h-4 w-4 icon-accent"
            }),
            o.jsx("input", {
              type: "number",
              value: m,
              onChange: (j) => r(f, s, parseInt(j.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        }),
        o.jsx("button", {
          onClick: () => p(f),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          children: o.jsx(wa, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  const im = [
    {
      value: "intro",
      label: "Intro",
      icon: ci
    },
    {
      value: "verse",
      label: "Verse",
      icon: ch
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: Ah
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: sh
    },
    {
      value: "solo",
      label: "Solo",
      icon: bh
    },
    {
      value: "outro",
      label: "Outro",
      icon: Sh
    }
  ];
  function Zh({ sectionMarkers: f = [], onSectionMarkersChange: s }) {
    const m = () => {
      s([
        ...f,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, r = (M, O, U) => {
      const S = [
        ...f
      ];
      S[M] = {
        ...S[M],
        [O]: U
      }, s(S);
    }, p = (M) => {
      s(f.filter((O, U) => U !== M));
    }, j = (M) => {
      const O = Math.floor(M / 1e3), U = Math.floor(O / 60), S = O % 60, w = Math.floor(M % 1e3 / 10);
      return `${U}:${S.toString().padStart(2, "0")}.${w.toString().padStart(2, "0")}`;
    };
    return o.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        o.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("p", {
                  className: "micro-label",
                  children: "Timing"
                }),
                o.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Section Markers"
                }),
                o.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Mark song sections for better playback"
                })
              ]
            }),
            o.jsxs("button", {
              onClick: m,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                o.jsx(Hn, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Marker"
              ]
            })
          ]
        }),
        o.jsx("div", {
          className: "space-y-3",
          children: f.length === 0 ? o.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              o.jsx(ci, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              o.jsx("p", {
                className: "text-sm",
                children: "No section markers added"
              }),
              o.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Marker" to start'
              })
            ]
          }) : f.map((M, O) => {
            var _a;
            const S = ((_a = im.find((w) => w.value === M.section_type)) == null ? void 0 : _a.icon) || ci;
            return o.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                o.jsx(S, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                o.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    o.jsx(dm, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    o.jsx("input", {
                      type: "number",
                      value: M.timestamp_ms,
                      onChange: (w) => r(O, "timestamp_ms", Math.max(0, parseInt(w.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    o.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        j(M.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                o.jsx("select", {
                  value: M.section_type,
                  onChange: (w) => r(O, "section_type", w.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: im.map(({ value: w, label: D }) => o.jsx("option", {
                    value: w,
                    children: D
                  }, w))
                }),
                o.jsx("input", {
                  value: M.label || "",
                  onChange: (w) => r(O, "label", w.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                o.jsx("button", {
                  onClick: () => p(O),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: o.jsx(wa, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, O);
          })
        })
      ]
    });
  }
  function Vh({ bpmMap: f = [], onBpmMapChange: s }) {
    const m = () => {
      s([
        ...f,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, r = (O, U, S) => {
      const w = [
        ...f
      ];
      w[O] = {
        ...w[O],
        [U]: S
      }, s(w);
    }, p = (O) => {
      s(f.filter((U, S) => S !== O));
    }, j = (O) => {
      const U = Math.floor(O / 1e3), S = Math.floor(U / 60), w = U % 60;
      return `${S}:${w.toString().padStart(2, "0")}`;
    }, M = [
      ...f
    ].sort((O, U) => O.timestamp_ms - U.timestamp_ms);
    return o.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        o.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            o.jsxs("div", {
              children: [
                o.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                o.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "BPM Map"
                }),
                o.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track tempo changes over time"
                })
              ]
            }),
            o.jsxs("button", {
              onClick: m,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                o.jsx(Hn, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        o.jsx("div", {
          className: "space-y-3",
          children: M.length === 0 ? o.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              o.jsx(tm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              o.jsx("p", {
                className: "text-sm",
                children: "No BPM changes added"
              }),
              o.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : o.jsxs(o.Fragment, {
            children: [
              o.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  o.jsx(Id, {
                    className: "h-4 w-4"
                  }),
                  o.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      M.map((O, U) => `${j(O.timestamp_ms)} \u2192 ${O.bpm} BPM${U < M.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              M.map((O, U) => o.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      o.jsx(Id, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      o.jsx("input", {
                        type: "number",
                        value: O.timestamp_ms,
                        onChange: (S) => r(U, "timestamp_ms", Math.max(0, parseInt(S.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      o.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          j(O.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      o.jsx(tm, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      o.jsx("input", {
                        type: "number",
                        value: O.bpm,
                        onChange: (S) => r(U, "bpm", Math.max(1, parseFloat(S.target.value) || 120)),
                        placeholder: "BPM",
                        step: "0.1",
                        className: "w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      o.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "BPM"
                      })
                    ]
                  }),
                  o.jsx("button", {
                    onClick: () => p(U),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: o.jsx(wa, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, U))
            ]
          })
        })
      ]
    });
  }
  function Kh({ disabled: f, isProcessing: s, fileName: m, onProcess: r }) {
    return o.jsx("section", {
      className: "glass-panel p-6 sm:p-8",
      children: o.jsxs("div", {
        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        children: [
          o.jsxs("div", {
            children: [
              o.jsx("p", {
                className: "micro-label",
                children: "Final step"
              }),
              o.jsx("p", {
                className: "text-base font-semibold",
                children: m ? `Render tags into ${m}` : "Load a flo\u2122 to begin"
              })
            ]
          }),
          o.jsx("button", {
            type: "button",
            onClick: r,
            disabled: f,
            className: "btn",
            "data-variant": "gradient",
            "data-size": "lg",
            children: s ? o.jsxs(o.Fragment, {
              children: [
                o.jsx("div", {
                  className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                }),
                "Processing"
              ]
            }) : o.jsxs(o.Fragment, {
              children: [
                o.jsx("span", {
                  className: "icon-chip",
                  children: o.jsx(yh, {
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
  function cm({ type: f, message: s }) {
    const m = f === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return o.jsx("div", {
      className: `${m} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: s
    });
  }
  const ym = "floeditor-theme", ni = () => typeof window < "u" && typeof document < "u", Jh = () => {
    if (!ni()) return "auto";
    const f = window.localStorage.getItem(ym);
    return f === "light" || f === "dark" || f === "auto" ? f : "auto";
  };
  function kh() {
    const [f, s] = pt.useState(Jh), [m, r] = pt.useState("light");
    return pt.useEffect(() => {
      if (!ni()) return;
      const M = window.matchMedia("(prefers-color-scheme: dark)"), O = () => r(M.matches ? "dark" : "light");
      return O(), M.addEventListener("change", O), () => {
        M.removeEventListener("change", O);
      };
    }, []), pt.useEffect(() => {
      if (!ni()) return;
      const M = document.documentElement;
      (f === "auto" ? m : f) === "dark" ? (M.classList.add("dark"), M.style.colorScheme = "dark") : (M.classList.remove("dark"), M.style.colorScheme = "light");
    }, [
      f,
      m
    ]), {
      theme: f,
      resolvedTheme: f === "auto" ? m : f,
      setTheme: (M) => {
        s(M), ni() && window.localStorage.setItem(ym, M);
      }
    };
  }
  const fm = [
    {
      value: "auto",
      label: "Auto",
      icon: Eh
    },
    {
      value: "light",
      label: "Light",
      icon: wh
    },
    {
      value: "dark",
      label: "Dark",
      icon: Th
    }
  ];
  function Fh() {
    var _a;
    const { theme: f, setTheme: s } = kh(), m = ((_a = fm.find((r) => r.value === f)) == null ? void 0 : _a.label) ?? "Auto";
    return o.jsxs("div", {
      className: "w-full rounded-2xl border border-primary/20 bg-background/80 p-3 shadow-sm shadow-primary/10 backdrop-blur-md",
      children: [
        o.jsxs("div", {
          className: "flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-primary/80",
          children: [
            o.jsx("span", {
              children: "Theme"
            }),
            o.jsx("span", {
              className: "font-semibold tracking-tight text-foreground/70",
              children: m
            })
          ]
        }),
        o.jsx("div", {
          className: "mt-2 grid grid-cols-3 gap-2",
          children: fm.map(({ value: r, label: p, icon: j }) => {
            const M = f === r;
            return o.jsxs("button", {
              type: "button",
              onClick: () => s(r),
              "aria-pressed": M,
              "aria-label": `Switch theme to ${p}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": M,
              children: [
                o.jsx(j, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                o.jsx("span", {
                  children: p
                })
              ]
            }, r);
          })
        })
      ]
    });
  }
  let G;
  function Wh(f) {
    const s = G.__externref_table_alloc();
    return G.__wbindgen_externrefs.set(s, f), s;
  }
  function Rf(f) {
    const s = typeof f;
    if (s == "number" || s == "boolean" || f == null) return `${f}`;
    if (s == "string") return `"${f}"`;
    if (s == "symbol") {
      const p = f.description;
      return p == null ? "Symbol" : `Symbol(${p})`;
    }
    if (s == "function") {
      const p = f.name;
      return typeof p == "string" && p.length > 0 ? `Function(${p})` : "Function";
    }
    if (Array.isArray(f)) {
      const p = f.length;
      let j = "[";
      p > 0 && (j += Rf(f[0]));
      for (let M = 1; M < p; M++) j += ", " + Rf(f[M]);
      return j += "]", j;
    }
    const m = /\[object ([^\]]+)\]/.exec(toString.call(f));
    let r;
    if (m && m.length > 1) r = m[1];
    else return toString.call(f);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(f) + ")";
    } catch {
      return "Object";
    }
    return f instanceof Error ? `${f.name}: ${f.message}
${f.stack}` : r;
  }
  function $h(f, s) {
    return f = f >>> 0, Ih().subarray(f / 4, f / 4 + s);
  }
  function Cn(f, s) {
    return f = f >>> 0, Ca().subarray(f / 1, f / 1 + s);
  }
  let Jl = null;
  function He() {
    return (Jl === null || Jl.buffer.detached === true || Jl.buffer.detached === void 0 && Jl.buffer !== G.memory.buffer) && (Jl = new DataView(G.memory.buffer)), Jl;
  }
  let Dn = null;
  function Ih() {
    return (Dn === null || Dn.byteLength === 0) && (Dn = new Float32Array(G.memory.buffer)), Dn;
  }
  function ui(f, s) {
    return f = f >>> 0, tg(f, s);
  }
  let wn = null;
  function Ca() {
    return (wn === null || wn.byteLength === 0) && (wn = new Uint8Array(G.memory.buffer)), wn;
  }
  function Un(f, s) {
    try {
      return f.apply(this, s);
    } catch (m) {
      const r = Wh(m);
      G.__wbindgen_exn_store(r);
    }
  }
  function Da(f) {
    return f == null;
  }
  function Bn(f, s) {
    const m = s(f.length * 1, 1) >>> 0;
    return Ca().set(f, m / 1), Ue = f.length, m;
  }
  function wf(f, s, m) {
    if (m === void 0) {
      const O = Rn.encode(f), U = s(O.length, 1) >>> 0;
      return Ca().subarray(U, U + O.length).set(O), Ue = O.length, U;
    }
    let r = f.length, p = s(r, 1) >>> 0;
    const j = Ca();
    let M = 0;
    for (; M < r; M++) {
      const O = f.charCodeAt(M);
      if (O > 127) break;
      j[p + M] = O;
    }
    if (M !== r) {
      M !== 0 && (f = f.slice(M)), p = m(p, r, r = M + f.length * 3, 1) >>> 0;
      const O = Ca().subarray(p + M, p + r), U = Rn.encodeInto(f, O);
      M += U.written, p = m(p, r, M, 1) >>> 0;
    }
    return Ue = M, p;
  }
  function Ra(f) {
    const s = G.__wbindgen_externrefs.get(f);
    return G.__externref_table_dealloc(f), s;
  }
  let ii = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ii.decode();
  const Ph = 2146435072;
  let Cf = 0;
  function tg(f, s) {
    return Cf += s, Cf >= Ph && (ii = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ii.decode(), Cf = s), ii.decode(Ca().subarray(f, f + s));
  }
  const Rn = new TextEncoder();
  "encodeInto" in Rn || (Rn.encodeInto = function(f, s) {
    const m = Rn.encode(f);
    return s.set(m), {
      read: f.length,
      written: m.length
    };
  });
  let Ue = 0;
  const sm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((f) => G.__wbg_audioinfo_free(f >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((f) => G.__wbg_wasmstreamingdecoder_free(f >>> 0, 1));
  class qn {
    static __wrap(s) {
      s = s >>> 0;
      const m = Object.create(qn.prototype);
      return m.__wbg_ptr = s, sm.register(m, m.__wbg_ptr, m), m;
    }
    __destroy_into_raw() {
      const s = this.__wbg_ptr;
      return this.__wbg_ptr = 0, sm.unregister(this), s;
    }
    free() {
      const s = this.__destroy_into_raw();
      G.__wbg_audioinfo_free(s, 0);
    }
    get sample_rate() {
      return G.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
    }
    set sample_rate(s) {
      G.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, s);
    }
    get channels() {
      return G.__wbg_get_audioinfo_channels(this.__wbg_ptr);
    }
    set channels(s) {
      G.__wbg_set_audioinfo_channels(this.__wbg_ptr, s);
    }
    get bit_depth() {
      return G.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
    }
    set bit_depth(s) {
      G.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, s);
    }
    get total_frames() {
      const s = G.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
      return BigInt.asUintN(64, s);
    }
    set total_frames(s) {
      G.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, s);
    }
    get duration_secs() {
      return G.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
    }
    set duration_secs(s) {
      G.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, s);
    }
    get file_size() {
      return G.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
    }
    set file_size(s) {
      G.__wbg_set_audioinfo_file_size(this.__wbg_ptr, s);
    }
    get compression_ratio() {
      return G.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
    }
    set compression_ratio(s) {
      G.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, s);
    }
    get crc_valid() {
      return G.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
    }
    set crc_valid(s) {
      G.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, s);
    }
    get is_lossy() {
      return G.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
    }
    set is_lossy(s) {
      G.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, s);
    }
    get lossy_quality() {
      return G.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
    }
    set lossy_quality(s) {
      G.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, s);
    }
    get version() {
      let s, m;
      try {
        const r = G.audioinfo_version(this.__wbg_ptr);
        return s = r[0], m = r[1], ui(r[0], r[1]);
      } finally {
        G.__wbindgen_free(s, m, 1);
      }
    }
  }
  Symbol.dispose && (qn.prototype[Symbol.dispose] = qn.prototype.free);
  function eg(f) {
    const s = G.create_metadata_from_object(f);
    if (s[3]) throw Ra(s[2]);
    var m = Cn(s[0], s[1]).slice();
    return G.__wbindgen_free(s[0], s[1] * 1, 1), m;
  }
  function hm(f) {
    const s = Bn(f, G.__wbindgen_malloc), m = Ue, r = G.get_metadata(s, m);
    if (r[2]) throw Ra(r[1]);
    return Ra(r[0]);
  }
  function lg(f) {
    const s = Bn(f, G.__wbindgen_malloc), m = Ue, r = G.info(s, m);
    if (r[2]) throw Ra(r[1]);
    return qn.__wrap(r[0]);
  }
  function ag(f, s) {
    const m = Bn(f, G.__wbindgen_malloc), r = Ue, p = Bn(s, G.__wbindgen_malloc), j = Ue, M = G.update_metadata(m, r, p, j);
    if (M[3]) throw Ra(M[2]);
    var O = Cn(M[0], M[1]).slice();
    return G.__wbindgen_free(M[0], M[1] * 1, 1), O;
  }
  function ng(f) {
    const s = Bn(f, G.__wbindgen_malloc), m = Ue, r = G.validate(s, m);
    if (r[2]) throw Ra(r[1]);
    return r[0] !== 0;
  }
  const ug = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function ig(f, s) {
    if (typeof Response == "function" && f instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(f, s);
      } catch (r) {
        if (f.ok && ug.has(f.type) && f.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const m = await f.arrayBuffer();
      return await WebAssembly.instantiate(m, s);
    } else {
      const m = await WebAssembly.instantiate(f, s);
      return m instanceof WebAssembly.Instance ? {
        instance: m,
        module: f
      } : m;
    }
  }
  function cg() {
    const f = {};
    return f.wbg = {}, f.wbg.__wbg_Error_52673b7de5a0ca89 = function(s, m) {
      return Error(ui(s, m));
    }, f.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(s) {
      return Number(s);
    }, f.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(s, m) {
      const r = String(m), p = wf(r, G.__wbindgen_malloc, G.__wbindgen_realloc), j = Ue;
      He().setInt32(s + 4, j, true), He().setInt32(s + 0, p, true);
    }, f.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(s, m) {
      const r = m, p = typeof r == "bigint" ? r : void 0;
      He().setBigInt64(s + 8, Da(p) ? BigInt(0) : p, true), He().setInt32(s + 0, !Da(p), true);
    }, f.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(s) {
      const m = s, r = typeof m == "boolean" ? m : void 0;
      return Da(r) ? 16777215 : r ? 1 : 0;
    }, f.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(s, m) {
      const r = Rf(m), p = wf(r, G.__wbindgen_malloc, G.__wbindgen_realloc), j = Ue;
      He().setInt32(s + 4, j, true), He().setInt32(s + 0, p, true);
    }, f.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(s, m) {
      return s in m;
    }, f.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(s) {
      return typeof s == "bigint";
    }, f.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(s) {
      return typeof s == "function";
    }, f.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(s) {
      return s === null;
    }, f.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(s) {
      const m = s;
      return typeof m == "object" && m !== null;
    }, f.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(s) {
      return typeof s == "string";
    }, f.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(s) {
      return s === void 0;
    }, f.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(s, m) {
      return s === m;
    }, f.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(s, m) {
      return s == m;
    }, f.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(s, m) {
      const r = m, p = typeof r == "number" ? r : void 0;
      He().setFloat64(s + 8, Da(p) ? 0 : p, true), He().setInt32(s + 0, !Da(p), true);
    }, f.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(s, m) {
      const r = m, p = typeof r == "string" ? r : void 0;
      var j = Da(p) ? 0 : wf(p, G.__wbindgen_malloc, G.__wbindgen_realloc), M = Ue;
      He().setInt32(s + 4, M, true), He().setInt32(s + 0, j, true);
    }, f.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(s, m) {
      throw new Error(ui(s, m));
    }, f.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Un(function(s, m) {
        return s.call(m);
      }, arguments);
    }, f.wbg.__wbg_done_62ea16af4ce34b24 = function(s) {
      return s.done;
    }, f.wbg.__wbg_entries_83c79938054e065f = function(s) {
      return Object.entries(s);
    }, f.wbg.__wbg_from_29a8414a7a7cd19d = function(s) {
      return Array.from(s);
    }, f.wbg.__wbg_get_6b7bd52aca3f9671 = function(s, m) {
      return s[m >>> 0];
    }, f.wbg.__wbg_get_af9dab7e9603ea93 = function() {
      return Un(function(s, m) {
        return Reflect.get(s, m);
      }, arguments);
    }, f.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(s, m) {
      return s[m];
    }, f.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(s) {
      let m;
      try {
        m = s instanceof ArrayBuffer;
      } catch {
        m = false;
      }
      return m;
    }, f.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(s) {
      let m;
      try {
        m = s instanceof Uint8Array;
      } catch {
        m = false;
      }
      return m;
    }, f.wbg.__wbg_isArray_51fd9e6422c0a395 = function(s) {
      return Array.isArray(s);
    }, f.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(s) {
      return Number.isSafeInteger(s);
    }, f.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
      return Symbol.iterator;
    }, f.wbg.__wbg_length_22ac23eaec9d8053 = function(s) {
      return s.length;
    }, f.wbg.__wbg_length_86ce4877baf913bb = function(s) {
      return s.length;
    }, f.wbg.__wbg_length_d45040a40c570362 = function(s) {
      return s.length;
    }, f.wbg.__wbg_new_1ba21ce319a06297 = function() {
      return new Object();
    }, f.wbg.__wbg_new_25f239778d6112b9 = function() {
      return new Array();
    }, f.wbg.__wbg_new_6421f6084cc5bc5a = function(s) {
      return new Uint8Array(s);
    }, f.wbg.__wbg_new_b546ae120718850e = function() {
      return /* @__PURE__ */ new Map();
    }, f.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(s, m) {
      return new Uint8Array(Cn(s, m));
    }, f.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(s) {
      return new Float32Array(s >>> 0);
    }, f.wbg.__wbg_next_138a17bbf04e926c = function(s) {
      return s.next;
    }, f.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Un(function(s) {
        return s.next();
      }, arguments);
    }, f.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(s, m, r) {
      Uint8Array.prototype.set.call(Cn(s, m), r);
    }, f.wbg.__wbg_set_3f1d0b984ed272ed = function(s, m, r) {
      s[m] = r;
    }, f.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Un(function(s, m, r) {
        return Reflect.set(s, m, r);
      }, arguments);
    }, f.wbg.__wbg_set_7df433eea03a5c14 = function(s, m, r) {
      s[m >>> 0] = r;
    }, f.wbg.__wbg_set_cb0e657d1901c8d8 = function(s, m, r) {
      s.set($h(m, r));
    }, f.wbg.__wbg_set_efaaf145b9377369 = function(s, m, r) {
      return s.set(m, r);
    }, f.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Un(function(s) {
        return JSON.stringify(s);
      }, arguments);
    }, f.wbg.__wbg_value_57b7b035e117f7ee = function(s) {
      return s.value;
    }, f.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(s, m) {
      return ui(s, m);
    }, f.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(s) {
      return BigInt.asUintN(64, s);
    }, f.wbg.__wbindgen_cast_cb9088102bce6b30 = function(s, m) {
      return Cn(s, m);
    }, f.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(s) {
      return s;
    }, f.wbg.__wbindgen_init_externref_table = function() {
      const s = G.__wbindgen_externrefs, m = s.grow(4);
      s.set(0, void 0), s.set(m + 0, void 0), s.set(m + 1, null), s.set(m + 2, true), s.set(m + 3, false);
    }, f;
  }
  function fg(f, s) {
    return G = f.exports, Bf.__wbindgen_wasm_module = s, Jl = null, Dn = null, wn = null, G.__wbindgen_start(), G;
  }
  async function Bf(f) {
    if (G !== void 0) return G;
    typeof f < "u" && (Object.getPrototypeOf(f) === Object.prototype ? { module_or_path: f } = f : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof f > "u" && (f = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const s = cg();
    (typeof f == "string" || typeof Request == "function" && f instanceof Request || typeof URL == "function" && f instanceof URL) && (f = fetch(f));
    const { instance: m, module: r } = await ig(await f, s);
    return fg(m, r);
  }
  const sg = {
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
  function rg() {
    const [f, s] = pt.useState(false), [m, r] = pt.useState(false);
    return pt.useEffect(() => {
      (async () => {
        try {
          await Bf(), r(true);
        } catch (w) {
          console.error("Failed to initialize flo\u2122 WASM:", w);
        }
      })();
    }, []), {
      isProcessing: f,
      isInitialized: m,
      loadMetadata: async (S) => {
        if (!m) throw new Error("flo\u2122 WASM not initialized");
        try {
          const w = await S.arrayBuffer(), D = new Uint8Array(w);
          return hm(D);
        } catch (w) {
          return console.error("Failed to load flo\u2122 metadata:", w), null;
        }
      },
      updateMetadata: async (S, w) => {
        if (!m) throw new Error("flo\u2122 WASM not initialized");
        s(true);
        try {
          const D = eg(w), L = ag(S, D);
          return s(false), L;
        } catch (D) {
          return console.error("Failed to update flo\u2122 metadata:", D), s(false), null;
        }
      },
      downloadFile: (S, w) => {
        const D = new Blob([
          S
        ], {
          type: "application/octet-stream"
        }), L = URL.createObjectURL(D), ct = document.createElement("a");
        ct.href = L, ct.download = w, ct.click(), URL.revokeObjectURL(L);
      },
      validateFile: (S) => m ? ng(S) : false,
      resetMetadata: () => ({
        ...sg
      })
    };
  }
  function og() {
    const [f, s] = pt.useState(false);
    return {
      isLoading: f,
      loadFloFile: async (r) => {
        s(true);
        try {
          if (!r.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await Bf();
          const p = await r.arrayBuffer(), j = new Uint8Array(p), M = hm(j), O = lg(j), U = O ? {
            sample_rate: O.sample_rate,
            channels: O.channels,
            bit_depth: O.bit_depth,
            total_frames: Number(O.total_frames),
            duration_secs: O.duration_secs,
            file_size: O.file_size,
            compression_ratio: O.compression_ratio,
            crc_valid: O.crc_valid,
            is_lossy: O.is_lossy,
            lossy_quality: O.lossy_quality,
            version: O.version
          } : null;
          return {
            metadata: M,
            audioInfo: U,
            error: null
          };
        } catch (p) {
          return console.error("Failed to load flo\u2122 file:", p), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${p instanceof Error ? p.message : "Unknown error"}`
          };
        } finally {
          s(false);
        }
      }
    };
  }
  function dg() {
    return {
      parseLRCFormat: (s) => {
        const m = s.split(`
`), r = [];
        return m.forEach((p) => {
          const j = p.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (j) {
            const M = parseInt(j[1]), O = parseInt(j[2]), U = parseInt(j[3]), S = M * 60 * 1e3 + O * 1e3 + U * 10, w = j[4].trim();
            r.push([
              w,
              S
            ]);
          }
        }), r.sort((p, j) => p[1] - j[1]), r;
      }
    };
  }
  function mg() {
    var _a, _b;
    const [f, s] = pt.useState(null), [m, r] = pt.useState(null), [p, j] = pt.useState(() => ({
      ...Gh
    })), [M, O] = pt.useState(null), [U, S] = pt.useState(() => ({
      ...ai
    })), [w, D] = pt.useState(""), [L, ct] = pt.useState(false), [yt, ft] = pt.useState(null), [K, Q] = pt.useState(null), [P, tt] = pt.useState(""), { isProcessing: Et, updateMetadata: Wt, downloadFile: Rt, resetMetadata: F } = rg(), { parseLRCFormat: Kt } = dg(), { isLoading: he, loadFloFile: Be } = og(), kt = pt.useRef(""), Yt = pt.useCallback((H) => `${H.name}:${H.lastModified}:${H.size}`, []);
    pt.useEffect(() => {
      typeof window < "u" && L && Py(() => import("./eruda-BjTJyEwy.js").then((H) => H.e), [], import.meta.url).then((H) => {
        H.default.init(), H.default.show();
      });
    }, [
      L
    ]);
    const qe = pt.useCallback(async (H) => {
      var _a2, _b2;
      if (!H) {
        kt.current = "", s(null), r(null), j(F()), O(null), S({
          ...ai
        }), D(""), tt(""), Q(null), ft(null);
        return;
      }
      if (!H.name.toLowerCase().endsWith(".flo")) {
        ft("Please upload a valid .flo file"), Q(null);
        return;
      }
      const y = Yt(H);
      kt.current = y, s(H), ft(null), Q("File loaded. Reading embedded tags..."), tt("Scanning embedded metadata..."), j(F()), O(null), S({
        ...ai
      }), D("");
      try {
        const { metadata: E, audioInfo: R, error: B } = await Be(H);
        if (kt.current !== y) return;
        if (B) {
          ft(B), Q(null);
          return;
        }
        const J = await H.arrayBuffer();
        if (r(new Uint8Array(J)), E) {
          if (j({
            ...E
          }), E.pictures) {
            const rt = E.pictures.find((ge) => ge.picture_type === "cover_front");
            if (rt) {
              const ge = new Blob([
                rt.data
              ], {
                type: rt.mime_type
              });
              O(URL.createObjectURL(ge));
            }
          }
          if (E.synced_lyrics && E.synced_lyrics.length > 0) {
            const rt = E.synced_lyrics[0];
            S({
              type: 1,
              timestampFormat: 2,
              language: rt.language || "eng",
              description: rt.description || "Synced Lyrics",
              text: rt.lines.map((ge) => [
                ge.text,
                ge.timestamp_ms
              ])
            });
          }
        }
        const W = Object.values(E || {}).filter((rt) => typeof rt == "string" && rt.trim().length > 0).length, st = ((_b2 = (_a2 = E == null ? void 0 : E.synced_lyrics) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.lines.length) ?? 0, Lt = W > 0 || !!R || st > 0;
        tt(W > 0 ? `Imported ${W} embedded tag${W === 1 ? "" : "s"}.` : "No embedded tags found."), Q(Lt ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (E) {
        if (kt.current !== y) return;
        console.error("Failed to parse metadata", E), tt(""), ft("Loaded file, but could not read embedded metadata automatically."), Q(null);
      }
    }, [
      Be,
      Yt,
      F
    ]), Te = (H, et) => {
      j((y) => ({
        ...y,
        [H]: et
      }));
    }, ne = () => {
      if (w.trim()) {
        const H = Kt(w);
        if (S((et) => ({
          ...et,
          text: H
        })), !p.lyrics || p.lyrics.length === 0) {
          const et = H.map(([y]) => y == null ? void 0 : y.trim()).filter(Boolean).join(`
`);
          et && j((y) => ({
            ...y,
            lyrics: [
              {
                text: et
              }
            ]
          }));
        }
        D(""), Q("LRC format lyrics imported successfully!");
      }
    }, z = async () => {
      if (!f || !m) return;
      ft(null), Q(null);
      const H = await Wt(m, p);
      H ? (Rt(H, `${p.title || f.name.replace(".flo", "")}_tagged.flo`), Q("File processed and downloaded successfully!")) : ft("Failed to process file");
    }, V = [
      {
        label: "Tag fields set",
        value: Object.values(p).filter((H) => typeof H == "string" && H.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: U.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: M ? "Attached" : "Not added",
        helper: M ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ];
    return o.jsxs("div", {
      className: "relative min-h-screen overflow-hidden px-4 py-10 sm:px-6",
      children: [
        o.jsx("div", {
          className: "pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        o.jsx("div", {
          className: "pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[140px] opacity-40",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        o.jsxs("main", {
          className: "relative mx-auto flex max-w-5xl flex-col gap-6",
          children: [
            o.jsxs("section", {
              className: "glass-panel p-6 sm:p-8 space-y-6",
              children: [
                o.jsxs("div", {
                  className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                  children: [
                    o.jsx("div", {
                      className: "space-y-4 lg:max-w-2xl",
                      children: o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("div", {
                            className: "rounded-full bg-primary/12 p-3 text-primary shadow-inner shadow-primary/30",
                            children: o.jsx(ci, {
                              className: "h-6 w-6 icon-accent"
                            })
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h1", {
                                className: "text-3xl font-semibold hero-title",
                                children: o.jsx("span", {
                                  className: "gradient-text inline-block",
                                  children: "FloEditor"
                                })
                              }),
                              o.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Tag flo\u2122 files, embed art, and sync lyrics without leaving your browser."
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    o.jsxs("div", {
                      className: "flex w-full flex-col gap-4 lg:max-w-xs",
                      children: [
                        o.jsxs("div", {
                          className: "rounded-2xl border border-primary/25 bg-primary/5 p-4 text-right shadow-inner shadow-primary/10",
                          children: [
                            o.jsx("p", {
                              className: "micro-label justify-end text-primary/80",
                              children: "Current file"
                            }),
                            o.jsx("p", {
                              className: `text-2xl font-semibold ${f ? "text-primary" : "text-muted-foreground"}`,
                              children: f ? f.name : "No file loaded"
                            }),
                            o.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: f ? "Ready for metadata tweaks." : "Load a flo\u2122 to unlock controls."
                            })
                          ]
                        }),
                        o.jsxs("div", {
                          className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1",
                          children: [
                            o.jsx(Fh, {}),
                            o.jsxs("button", {
                              onClick: () => ct(!L),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                o.jsx(oh, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                L ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                yt && o.jsx(cm, {
                  type: "error",
                  message: yt
                }),
                K && o.jsx(cm, {
                  type: "success",
                  message: K
                }),
                o.jsx(Bh, {
                  file: f,
                  onFileUpload: qe,
                  isParsingMetadata: he,
                  metadataSummary: P
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: V.map(({ label: H, value: et, helper: y }) => o.jsxs("div", {
                    className: "relative overflow-hidden rounded-xl border px-4 py-3 text-sm text-white shadow-lg shadow-primary/30",
                    style: {
                      backgroundImage: "var(--stat-card-gradient, var(--themegradient-active))",
                      borderColor: "var(--stat-card-border, transparent)"
                    },
                    children: [
                      o.jsx("div", {
                        className: "pointer-events-none absolute inset-0 bg-black/10"
                      }),
                      o.jsxs("div", {
                        className: "relative space-y-1",
                        children: [
                          o.jsx("p", {
                            className: "text-xs font-semibold uppercase tracking-wide text-white/80",
                            children: H
                          }),
                          o.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: et
                          }),
                          o.jsx("p", {
                            className: "text-xs text-white/80",
                            children: y
                          })
                        ]
                      })
                    ]
                  }, H))
                })
              ]
            }),
            o.jsx(qh, {
              metadata: p,
              onMetadataChange: Te
            }),
            o.jsx(Lh, {
              pictures: p.pictures,
              onPicturesChange: (H) => j({
                ...p,
                pictures: H
              }),
              coverVariants: p.cover_variants,
              onCoverVariantsChange: (H) => j({
                ...p,
                cover_variants: H
              }),
              animatedCover: p.animated_cover,
              onAnimatedCoverChange: (H) => j({
                ...p,
                animated_cover: H
              })
            }),
            o.jsx(Xh, {
              syncedLyrics: p.synced_lyrics,
              onSyncedLyricsChange: (H) => j({
                ...p,
                synced_lyrics: H
              }),
              lrcText: w,
              onLrcTextChange: D,
              onImport: ne,
              unsyncedLyrics: ((_b = (_a = p.lyrics) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onUnsyncedLyricsChange: (H) => j({
                ...p,
                lyrics: H ? [
                  {
                    text: H
                  }
                ] : []
              })
            }),
            o.jsx(Zh, {
              sectionMarkers: p.section_markers,
              onSectionMarkersChange: (H) => j({
                ...p,
                section_markers: H
              })
            }),
            o.jsx(Vh, {
              bpmMap: p.bpm_map,
              onBpmMapChange: (H) => j({
                ...p,
                bpm_map: H
              })
            }),
            o.jsx(Kh, {
              disabled: !f || Et,
              isProcessing: Et,
              fileName: f == null ? void 0 : f.name,
              onProcess: z
            })
          ]
        })
      ]
    });
  }
  Wy.createRoot(document.getElementById("root")).render(o.jsx(Xy.StrictMode, {
    children: o.jsx(mg, {})
  }));
})();
export {
  __tla,
  rm as g
};

let tm;
let __tla = (async () => {
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const A of document.querySelectorAll('link[rel="modulepreload"]')) o(A);
    new MutationObserver((A) => {
      for (const N of A) if (N.type === "childList") for (const j of N.addedNodes) j.tagName === "LINK" && j.rel === "modulepreload" && o(j);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function m(A) {
      const N = {};
      return A.integrity && (N.integrity = A.integrity), A.referrerPolicy && (N.referrerPolicy = A.referrerPolicy), A.crossOrigin === "use-credentials" ? N.credentials = "include" : A.crossOrigin === "anonymous" ? N.credentials = "omit" : N.credentials = "same-origin", N;
    }
    function o(A) {
      if (A.ep) return;
      A.ep = true;
      const N = m(A);
      fetch(A.href, N);
    }
  })();
  tm = function(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
  };
  var Ef = {
    exports: {}
  }, jn = {};
  var Bd;
  function j0() {
    if (Bd) return jn;
    Bd = 1;
    var f = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
    function m(o, A, N) {
      var j = null;
      if (N !== void 0 && (j = "" + N), A.key !== void 0 && (j = "" + A.key), "key" in A) {
        N = {};
        for (var C in A) C !== "key" && (N[C] = A[C]);
      } else N = A;
      return A = N.ref, {
        $$typeof: f,
        type: o,
        key: j,
        ref: A !== void 0 ? A : null,
        props: N
      };
    }
    return jn.Fragment = s, jn.jsx = m, jn.jsxs = m, jn;
  }
  var qd;
  function U0() {
    return qd || (qd = 1, Ef.exports = j0()), Ef.exports;
  }
  var g = U0(), Af = {
    exports: {}
  }, V = {};
  var Yd;
  function D0() {
    if (Yd) return V;
    Yd = 1;
    var f = Symbol.for("react.transitional.element"), s = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), N = Symbol.for("react.consumer"), j = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), z = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), U = Symbol.for("react.activity"), X = Symbol.iterator;
    function lt(r) {
      return r === null || typeof r != "object" ? null : (r = X && r[X] || r["@@iterator"], typeof r == "function" ? r : null);
    }
    var gt = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, it = Object.assign, kt = {};
    function pt(r, S, O) {
      this.props = r, this.context = S, this.refs = kt, this.updater = O || gt;
    }
    pt.prototype.isReactComponent = {}, pt.prototype.setState = function(r, S) {
      if (typeof r != "object" && typeof r != "function" && r != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, r, S, "setState");
    }, pt.prototype.forceUpdate = function(r) {
      this.updater.enqueueForceUpdate(this, r, "forceUpdate");
    };
    function Ul() {
    }
    Ul.prototype = pt.prototype;
    function At(r, S, O) {
      this.props = r, this.context = S, this.refs = kt, this.updater = O || gt;
    }
    var Vt = At.prototype = new Ul();
    Vt.constructor = At, it(Vt, pt.prototype), Vt.isPureReactComponent = true;
    var ml = Array.isArray;
    function Lt() {
    }
    var W = {
      H: null,
      A: null,
      T: null,
      S: null
    }, Xt = Object.prototype.hasOwnProperty;
    function yl(r, S, O) {
      var D = O.ref;
      return {
        $$typeof: f,
        type: r,
        key: S,
        ref: D !== void 0 ? D : null,
        props: O
      };
    }
    function ql(r, S) {
      return yl(r.type, S, r.props);
    }
    function Kt(r) {
      return typeof r == "object" && r !== null && r.$$typeof === f;
    }
    function Ct(r) {
      var S = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + r.replace(/[=:]/g, function(O) {
        return S[O];
      });
    }
    var Yl = /\/+/g;
    function hl(r, S) {
      return typeof r == "object" && r !== null && r.key != null ? Ct("" + r.key) : S.toString(36);
    }
    function el(r) {
      switch (r.status) {
        case "fulfilled":
          return r.value;
        case "rejected":
          throw r.reason;
        default:
          switch (typeof r.status == "string" ? r.then(Lt, Lt) : (r.status = "pending", r.then(function(S) {
            r.status === "pending" && (r.status = "fulfilled", r.value = S);
          }, function(S) {
            r.status === "pending" && (r.status = "rejected", r.reason = S);
          })), r.status) {
            case "fulfilled":
              return r.value;
            case "rejected":
              throw r.reason;
          }
      }
      throw r;
    }
    function x(r, S, O, D, Z) {
      var k = typeof r;
      (k === "undefined" || k === "boolean") && (r = null);
      var et = false;
      if (r === null) et = true;
      else switch (k) {
        case "bigint":
        case "string":
        case "number":
          et = true;
          break;
        case "object":
          switch (r.$$typeof) {
            case f:
            case s:
              et = true;
              break;
            case H:
              return et = r._init, x(et(r._payload), S, O, D, Z);
          }
      }
      if (et) return Z = Z(r), et = D === "" ? "." + hl(r, 0) : D, ml(Z) ? (O = "", et != null && (O = et.replace(Yl, "$&/") + "/"), x(Z, S, O, "", function(Oe) {
        return Oe;
      })) : Z != null && (Kt(Z) && (Z = ql(Z, O + (Z.key == null || r && r.key === Z.key ? "" : ("" + Z.key).replace(Yl, "$&/") + "/") + et)), S.push(Z)), 1;
      et = 0;
      var Mt = D === "" ? "." : D + ":";
      if (ml(r)) for (var St = 0; St < r.length; St++) D = r[St], k = Mt + hl(D, St), et += x(D, S, O, k, Z);
      else if (St = lt(r), typeof St == "function") for (r = St.call(r), St = 0; !(D = r.next()).done; ) D = D.value, k = Mt + hl(D, St++), et += x(D, S, O, k, Z);
      else if (k === "object") {
        if (typeof r.then == "function") return x(el(r), S, O, D, Z);
        throw S = String(r), Error("Objects are not valid as a React child (found: " + (S === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : S) + "). If you meant to render a collection of children, use an array instead.");
      }
      return et;
    }
    function w(r, S, O) {
      if (r == null) return r;
      var D = [], Z = 0;
      return x(r, D, "", "", function(k) {
        return S.call(O, k, Z++);
      }), D;
    }
    function Q(r) {
      if (r._status === -1) {
        var S = r._result;
        S = S(), S.then(function(O) {
          (r._status === 0 || r._status === -1) && (r._status = 1, r._result = O);
        }, function(O) {
          (r._status === 0 || r._status === -1) && (r._status = 2, r._result = O);
        }), r._status === -1 && (r._status = 0, r._result = S);
      }
      if (r._status === 1) return r._result.default;
      throw r._result;
    }
    var ct = typeof reportError == "function" ? reportError : function(r) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var S = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof r == "object" && r !== null && typeof r.message == "string" ? String(r.message) : String(r),
          error: r
        });
        if (!window.dispatchEvent(S)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", r);
        return;
      }
      console.error(r);
    }, ft = {
      map: w,
      forEach: function(r, S, O) {
        w(r, function() {
          S.apply(this, arguments);
        }, O);
      },
      count: function(r) {
        var S = 0;
        return w(r, function() {
          S++;
        }), S;
      },
      toArray: function(r) {
        return w(r, function(S) {
          return S;
        }) || [];
      },
      only: function(r) {
        if (!Kt(r)) throw Error("React.Children.only expected to receive a single React element child.");
        return r;
      }
    };
    return V.Activity = U, V.Children = ft, V.Component = pt, V.Fragment = m, V.Profiler = A, V.PureComponent = At, V.StrictMode = o, V.Suspense = R, V.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = W, V.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(r) {
        return W.H.useMemoCache(r);
      }
    }, V.cache = function(r) {
      return function() {
        return r.apply(null, arguments);
      };
    }, V.cacheSignal = function() {
      return null;
    }, V.cloneElement = function(r, S, O) {
      if (r == null) throw Error("The argument must be a React element, but you passed " + r + ".");
      var D = it({}, r.props), Z = r.key;
      if (S != null) for (k in S.key !== void 0 && (Z = "" + S.key), S) !Xt.call(S, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && S.ref === void 0 || (D[k] = S[k]);
      var k = arguments.length - 2;
      if (k === 1) D.children = O;
      else if (1 < k) {
        for (var et = Array(k), Mt = 0; Mt < k; Mt++) et[Mt] = arguments[Mt + 2];
        D.children = et;
      }
      return yl(r.type, Z, D);
    }, V.createContext = function(r) {
      return r = {
        $$typeof: j,
        _currentValue: r,
        _currentValue2: r,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, r.Provider = r, r.Consumer = {
        $$typeof: N,
        _context: r
      }, r;
    }, V.createElement = function(r, S, O) {
      var D, Z = {}, k = null;
      if (S != null) for (D in S.key !== void 0 && (k = "" + S.key), S) Xt.call(S, D) && D !== "key" && D !== "__self" && D !== "__source" && (Z[D] = S[D]);
      var et = arguments.length - 2;
      if (et === 1) Z.children = O;
      else if (1 < et) {
        for (var Mt = Array(et), St = 0; St < et; St++) Mt[St] = arguments[St + 2];
        Z.children = Mt;
      }
      if (r && r.defaultProps) for (D in et = r.defaultProps, et) Z[D] === void 0 && (Z[D] = et[D]);
      return yl(r, k, Z);
    }, V.createRef = function() {
      return {
        current: null
      };
    }, V.forwardRef = function(r) {
      return {
        $$typeof: C,
        render: r
      };
    }, V.isValidElement = Kt, V.lazy = function(r) {
      return {
        $$typeof: H,
        _payload: {
          _status: -1,
          _result: r
        },
        _init: Q
      };
    }, V.memo = function(r, S) {
      return {
        $$typeof: z,
        type: r,
        compare: S === void 0 ? null : S
      };
    }, V.startTransition = function(r) {
      var S = W.T, O = {};
      W.T = O;
      try {
        var D = r(), Z = W.S;
        Z !== null && Z(O, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Lt, ct);
      } catch (k) {
        ct(k);
      } finally {
        S !== null && O.types !== null && (S.types = O.types), W.T = S;
      }
    }, V.unstable_useCacheRefresh = function() {
      return W.H.useCacheRefresh();
    }, V.use = function(r) {
      return W.H.use(r);
    }, V.useActionState = function(r, S, O) {
      return W.H.useActionState(r, S, O);
    }, V.useCallback = function(r, S) {
      return W.H.useCallback(r, S);
    }, V.useContext = function(r) {
      return W.H.useContext(r);
    }, V.useDebugValue = function() {
    }, V.useDeferredValue = function(r, S) {
      return W.H.useDeferredValue(r, S);
    }, V.useEffect = function(r, S) {
      return W.H.useEffect(r, S);
    }, V.useEffectEvent = function(r) {
      return W.H.useEffectEvent(r);
    }, V.useId = function() {
      return W.H.useId();
    }, V.useImperativeHandle = function(r, S, O) {
      return W.H.useImperativeHandle(r, S, O);
    }, V.useInsertionEffect = function(r, S) {
      return W.H.useInsertionEffect(r, S);
    }, V.useLayoutEffect = function(r, S) {
      return W.H.useLayoutEffect(r, S);
    }, V.useMemo = function(r, S) {
      return W.H.useMemo(r, S);
    }, V.useOptimistic = function(r, S) {
      return W.H.useOptimistic(r, S);
    }, V.useReducer = function(r, S, O) {
      return W.H.useReducer(r, S, O);
    }, V.useRef = function(r) {
      return W.H.useRef(r);
    }, V.useState = function(r) {
      return W.H.useState(r);
    }, V.useSyncExternalStore = function(r, S, O) {
      return W.H.useSyncExternalStore(r, S, O);
    }, V.useTransition = function() {
      return W.H.useTransition();
    }, V.version = "19.2.1", V;
  }
  var Gd;
  function Rf() {
    return Gd || (Gd = 1, Af.exports = D0()), Af.exports;
  }
  var yt = Rf();
  const R0 = tm(yt);
  var xf = {
    exports: {}
  }, Un = {}, Tf = {
    exports: {}
  }, Mf = {};
  var Ld;
  function w0() {
    return Ld || (Ld = 1, (function(f) {
      function s(x, w) {
        var Q = x.length;
        x.push(w);
        t: for (; 0 < Q; ) {
          var ct = Q - 1 >>> 1, ft = x[ct];
          if (0 < A(ft, w)) x[ct] = w, x[Q] = ft, Q = ct;
          else break t;
        }
      }
      function m(x) {
        return x.length === 0 ? null : x[0];
      }
      function o(x) {
        if (x.length === 0) return null;
        var w = x[0], Q = x.pop();
        if (Q !== w) {
          x[0] = Q;
          t: for (var ct = 0, ft = x.length, r = ft >>> 1; ct < r; ) {
            var S = 2 * (ct + 1) - 1, O = x[S], D = S + 1, Z = x[D];
            if (0 > A(O, Q)) D < ft && 0 > A(Z, O) ? (x[ct] = Z, x[D] = Q, ct = D) : (x[ct] = O, x[S] = Q, ct = S);
            else if (D < ft && 0 > A(Z, Q)) x[ct] = Z, x[D] = Q, ct = D;
            else break t;
          }
        }
        return w;
      }
      function A(x, w) {
        var Q = x.sortIndex - w.sortIndex;
        return Q !== 0 ? Q : x.id - w.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var N = performance;
        f.unstable_now = function() {
          return N.now();
        };
      } else {
        var j = Date, C = j.now();
        f.unstable_now = function() {
          return j.now() - C;
        };
      }
      var R = [], z = [], H = 1, U = null, X = 3, lt = false, gt = false, it = false, kt = false, pt = typeof setTimeout == "function" ? setTimeout : null, Ul = typeof clearTimeout == "function" ? clearTimeout : null, At = typeof setImmediate < "u" ? setImmediate : null;
      function Vt(x) {
        for (var w = m(z); w !== null; ) {
          if (w.callback === null) o(z);
          else if (w.startTime <= x) o(z), w.sortIndex = w.expirationTime, s(R, w);
          else break;
          w = m(z);
        }
      }
      function ml(x) {
        if (it = false, Vt(x), !gt) if (m(R) !== null) gt = true, Lt || (Lt = true, Ct());
        else {
          var w = m(z);
          w !== null && el(ml, w.startTime - x);
        }
      }
      var Lt = false, W = -1, Xt = 5, yl = -1;
      function ql() {
        return kt ? true : !(f.unstable_now() - yl < Xt);
      }
      function Kt() {
        if (kt = false, Lt) {
          var x = f.unstable_now();
          yl = x;
          var w = true;
          try {
            t: {
              gt = false, it && (it = false, Ul(W), W = -1), lt = true;
              var Q = X;
              try {
                l: {
                  for (Vt(x), U = m(R); U !== null && !(U.expirationTime > x && ql()); ) {
                    var ct = U.callback;
                    if (typeof ct == "function") {
                      U.callback = null, X = U.priorityLevel;
                      var ft = ct(U.expirationTime <= x);
                      if (x = f.unstable_now(), typeof ft == "function") {
                        U.callback = ft, Vt(x), w = true;
                        break l;
                      }
                      U === m(R) && o(R), Vt(x);
                    } else o(R);
                    U = m(R);
                  }
                  if (U !== null) w = true;
                  else {
                    var r = m(z);
                    r !== null && el(ml, r.startTime - x), w = false;
                  }
                }
                break t;
              } finally {
                U = null, X = Q, lt = false;
              }
              w = void 0;
            }
          } finally {
            w ? Ct() : Lt = false;
          }
        }
      }
      var Ct;
      if (typeof At == "function") Ct = function() {
        At(Kt);
      };
      else if (typeof MessageChannel < "u") {
        var Yl = new MessageChannel(), hl = Yl.port2;
        Yl.port1.onmessage = Kt, Ct = function() {
          hl.postMessage(null);
        };
      } else Ct = function() {
        pt(Kt, 0);
      };
      function el(x, w) {
        W = pt(function() {
          x(f.unstable_now());
        }, w);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(x) {
        x.callback = null;
      }, f.unstable_forceFrameRate = function(x) {
        0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Xt = 0 < x ? Math.floor(1e3 / x) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return X;
      }, f.unstable_next = function(x) {
        switch (X) {
          case 1:
          case 2:
          case 3:
            var w = 3;
            break;
          default:
            w = X;
        }
        var Q = X;
        X = w;
        try {
          return x();
        } finally {
          X = Q;
        }
      }, f.unstable_requestPaint = function() {
        kt = true;
      }, f.unstable_runWithPriority = function(x, w) {
        switch (x) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            x = 3;
        }
        var Q = X;
        X = x;
        try {
          return w();
        } finally {
          X = Q;
        }
      }, f.unstable_scheduleCallback = function(x, w, Q) {
        var ct = f.unstable_now();
        switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? ct + Q : ct) : Q = ct, x) {
          case 1:
            var ft = -1;
            break;
          case 2:
            ft = 250;
            break;
          case 5:
            ft = 1073741823;
            break;
          case 4:
            ft = 1e4;
            break;
          default:
            ft = 5e3;
        }
        return ft = Q + ft, x = {
          id: H++,
          callback: w,
          priorityLevel: x,
          startTime: Q,
          expirationTime: ft,
          sortIndex: -1
        }, Q > ct ? (x.sortIndex = Q, s(z, x), m(R) === null && x === m(z) && (it ? (Ul(W), W = -1) : it = true, el(ml, Q - ct))) : (x.sortIndex = ft, s(R, x), gt || lt || (gt = true, Lt || (Lt = true, Ct()))), x;
      }, f.unstable_shouldYield = ql, f.unstable_wrapCallback = function(x) {
        var w = X;
        return function() {
          var Q = X;
          X = w;
          try {
            return x.apply(this, arguments);
          } finally {
            X = Q;
          }
        };
      };
    })(Mf)), Mf;
  }
  var Xd;
  function C0() {
    return Xd || (Xd = 1, Tf.exports = w0()), Tf.exports;
  }
  var Nf = {
    exports: {}
  }, Zt = {};
  var Qd;
  function H0() {
    if (Qd) return Zt;
    Qd = 1;
    var f = Rf();
    function s(R) {
      var z = "https://react.dev/errors/" + R;
      if (1 < arguments.length) {
        z += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var H = 2; H < arguments.length; H++) z += "&args[]=" + encodeURIComponent(arguments[H]);
      }
      return "Minified React error #" + R + "; visit " + z + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function m() {
    }
    var o = {
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
    }, A = Symbol.for("react.portal");
    function N(R, z, H) {
      var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: A,
        key: U == null ? null : "" + U,
        children: R,
        containerInfo: z,
        implementation: H
      };
    }
    var j = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function C(R, z) {
      if (R === "font") return "";
      if (typeof z == "string") return z === "use-credentials" ? z : "";
    }
    return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Zt.createPortal = function(R, z) {
      var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!z || z.nodeType !== 1 && z.nodeType !== 9 && z.nodeType !== 11) throw Error(s(299));
      return N(R, z, null, H);
    }, Zt.flushSync = function(R) {
      var z = j.T, H = o.p;
      try {
        if (j.T = null, o.p = 2, R) return R();
      } finally {
        j.T = z, o.p = H, o.d.f();
      }
    }, Zt.preconnect = function(R, z) {
      typeof R == "string" && (z ? (z = z.crossOrigin, z = typeof z == "string" ? z === "use-credentials" ? z : "" : void 0) : z = null, o.d.C(R, z));
    }, Zt.prefetchDNS = function(R) {
      typeof R == "string" && o.d.D(R);
    }, Zt.preinit = function(R, z) {
      if (typeof R == "string" && z && typeof z.as == "string") {
        var H = z.as, U = C(H, z.crossOrigin), X = typeof z.integrity == "string" ? z.integrity : void 0, lt = typeof z.fetchPriority == "string" ? z.fetchPriority : void 0;
        H === "style" ? o.d.S(R, typeof z.precedence == "string" ? z.precedence : void 0, {
          crossOrigin: U,
          integrity: X,
          fetchPriority: lt
        }) : H === "script" && o.d.X(R, {
          crossOrigin: U,
          integrity: X,
          fetchPriority: lt,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0
        });
      }
    }, Zt.preinitModule = function(R, z) {
      if (typeof R == "string") if (typeof z == "object" && z !== null) {
        if (z.as == null || z.as === "script") {
          var H = C(z.as, z.crossOrigin);
          o.d.M(R, {
            crossOrigin: H,
            integrity: typeof z.integrity == "string" ? z.integrity : void 0,
            nonce: typeof z.nonce == "string" ? z.nonce : void 0
          });
        }
      } else z == null && o.d.M(R);
    }, Zt.preload = function(R, z) {
      if (typeof R == "string" && typeof z == "object" && z !== null && typeof z.as == "string") {
        var H = z.as, U = C(H, z.crossOrigin);
        o.d.L(R, H, {
          crossOrigin: U,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0,
          nonce: typeof z.nonce == "string" ? z.nonce : void 0,
          type: typeof z.type == "string" ? z.type : void 0,
          fetchPriority: typeof z.fetchPriority == "string" ? z.fetchPriority : void 0,
          referrerPolicy: typeof z.referrerPolicy == "string" ? z.referrerPolicy : void 0,
          imageSrcSet: typeof z.imageSrcSet == "string" ? z.imageSrcSet : void 0,
          imageSizes: typeof z.imageSizes == "string" ? z.imageSizes : void 0,
          media: typeof z.media == "string" ? z.media : void 0
        });
      }
    }, Zt.preloadModule = function(R, z) {
      if (typeof R == "string") if (z) {
        var H = C(z.as, z.crossOrigin);
        o.d.m(R, {
          as: typeof z.as == "string" && z.as !== "script" ? z.as : void 0,
          crossOrigin: H,
          integrity: typeof z.integrity == "string" ? z.integrity : void 0
        });
      } else o.d.m(R);
    }, Zt.requestFormReset = function(R) {
      o.d.r(R);
    }, Zt.unstable_batchedUpdates = function(R, z) {
      return R(z);
    }, Zt.useFormState = function(R, z, H) {
      return j.H.useFormState(R, z, H);
    }, Zt.useFormStatus = function() {
      return j.H.useHostTransitionStatus();
    }, Zt.version = "19.2.1", Zt;
  }
  var Zd;
  function B0() {
    if (Zd) return Nf.exports;
    Zd = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
    }
    return f(), Nf.exports = H0(), Nf.exports;
  }
  var Vd;
  function q0() {
    if (Vd) return Un;
    Vd = 1;
    var f = C0(), s = Rf(), m = B0();
    function o(t) {
      var l = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        l += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var e = 2; e < arguments.length; e++) l += "&args[]=" + encodeURIComponent(arguments[e]);
      }
      return "Minified React error #" + t + "; visit " + l + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function A(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function N(t) {
      var l = t, e = t;
      if (t.alternate) for (; l.return; ) l = l.return;
      else {
        t = l;
        do
          l = t, (l.flags & 4098) !== 0 && (e = l.return), t = l.return;
        while (t);
      }
      return l.tag === 3 ? e : null;
    }
    function j(t) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
      }
      return null;
    }
    function C(t) {
      if (t.tag === 31) {
        var l = t.memoizedState;
        if (l === null && (t = t.alternate, t !== null && (l = t.memoizedState)), l !== null) return l.dehydrated;
      }
      return null;
    }
    function R(t) {
      if (N(t) !== t) throw Error(o(188));
    }
    function z(t) {
      var l = t.alternate;
      if (!l) {
        if (l = N(t), l === null) throw Error(o(188));
        return l !== t ? null : t;
      }
      for (var e = t, a = l; ; ) {
        var n = e.return;
        if (n === null) break;
        var u = n.alternate;
        if (u === null) {
          if (a = n.return, a !== null) {
            e = a;
            continue;
          }
          break;
        }
        if (n.child === u.child) {
          for (u = n.child; u; ) {
            if (u === e) return R(n), t;
            if (u === a) return R(n), l;
            u = u.sibling;
          }
          throw Error(o(188));
        }
        if (e.return !== a.return) e = n, a = u;
        else {
          for (var i = false, c = n.child; c; ) {
            if (c === e) {
              i = true, e = n, a = u;
              break;
            }
            if (c === a) {
              i = true, a = n, e = u;
              break;
            }
            c = c.sibling;
          }
          if (!i) {
            for (c = u.child; c; ) {
              if (c === e) {
                i = true, e = u, a = n;
                break;
              }
              if (c === a) {
                i = true, a = u, e = n;
                break;
              }
              c = c.sibling;
            }
            if (!i) throw Error(o(189));
          }
        }
        if (e.alternate !== a) throw Error(o(190));
      }
      if (e.tag !== 3) throw Error(o(188));
      return e.stateNode.current === e ? t : l;
    }
    function H(t) {
      var l = t.tag;
      if (l === 5 || l === 26 || l === 27 || l === 6) return t;
      for (t = t.child; t !== null; ) {
        if (l = H(t), l !== null) return l;
        t = t.sibling;
      }
      return null;
    }
    var U = Object.assign, X = Symbol.for("react.element"), lt = Symbol.for("react.transitional.element"), gt = Symbol.for("react.portal"), it = Symbol.for("react.fragment"), kt = Symbol.for("react.strict_mode"), pt = Symbol.for("react.profiler"), Ul = Symbol.for("react.consumer"), At = Symbol.for("react.context"), Vt = Symbol.for("react.forward_ref"), ml = Symbol.for("react.suspense"), Lt = Symbol.for("react.suspense_list"), W = Symbol.for("react.memo"), Xt = Symbol.for("react.lazy"), yl = Symbol.for("react.activity"), ql = Symbol.for("react.memo_cache_sentinel"), Kt = Symbol.iterator;
    function Ct(t) {
      return t === null || typeof t != "object" ? null : (t = Kt && t[Kt] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var Yl = Symbol.for("react.client.reference");
    function hl(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === Yl ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case it:
          return "Fragment";
        case pt:
          return "Profiler";
        case kt:
          return "StrictMode";
        case ml:
          return "Suspense";
        case Lt:
          return "SuspenseList";
        case yl:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case gt:
          return "Portal";
        case At:
          return t.displayName || "Context";
        case Ul:
          return (t._context.displayName || "Context") + ".Consumer";
        case Vt:
          var l = t.render;
          return t = t.displayName, t || (t = l.displayName || l.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case W:
          return l = t.displayName || null, l !== null ? l : hl(t.type) || "Memo";
        case Xt:
          l = t._payload, t = t._init;
          try {
            return hl(t(l));
          } catch {
          }
      }
      return null;
    }
    var el = Array.isArray, x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, w = m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Q = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, ct = [], ft = -1;
    function r(t) {
      return {
        current: t
      };
    }
    function S(t) {
      0 > ft || (t.current = ct[ft], ct[ft] = null, ft--);
    }
    function O(t, l) {
      ft++, ct[ft] = t.current, t.current = l;
    }
    var D = r(null), Z = r(null), k = r(null), et = r(null);
    function Mt(t, l) {
      switch (O(k, l), O(Z, t), O(D, null), l.nodeType) {
        case 9:
        case 11:
          t = (t = l.documentElement) && (t = t.namespaceURI) ? id(t) : 0;
          break;
        default:
          if (t = l.tagName, l = l.namespaceURI) l = id(l), t = cd(l, t);
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
      S(D), O(D, t);
    }
    function St() {
      S(D), S(Z), S(k);
    }
    function Oe(t) {
      t.memoizedState !== null && O(et, t);
      var l = D.current, e = cd(l, t.type);
      l !== e && (O(Z, t), O(D, e));
    }
    function Qt(t) {
      Z.current === t && (S(D), S(Z)), et.current === t && (S(et), Tn._currentValue = Q);
    }
    var Dl, Cf;
    function je(t) {
      if (Dl === void 0) try {
        throw Error();
      } catch (e) {
        var l = e.stack.trim().match(/\n( *(at )?)/);
        Dl = l && l[1] || "", Cf = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Dl + t + Cf;
    }
    var ui = false;
    function ii(t, l) {
      if (!t || ui) return "";
      ui = true;
      var e = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (l) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (p) {
                    var _ = p;
                  }
                  Reflect.construct(t, [], M);
                } else {
                  try {
                    M.call();
                  } catch (p) {
                    _ = p;
                  }
                  t.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (p) {
                  _ = p;
                }
                (M = t()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (p) {
              if (p && _ && typeof p.stack == "string") return [
                p.stack,
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
`), b = c.split(`
`);
          for (n = a = 0; a < d.length && !d[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < b.length && !b[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === d.length || n === b.length) for (a = d.length - 1, n = b.length - 1; 1 <= a && 0 <= n && d[a] !== b[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (d[a] !== b[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || d[a] !== b[n]) {
                var E = `
` + d[a].replace(" at new ", " at ");
                return t.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", t.displayName)), E;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        ui = false, Error.prepareStackTrace = e;
      }
      return (e = t ? t.displayName || t.name : "") ? je(e) : "";
    }
    function cm(t, l) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return je(t.type);
        case 16:
          return je("Lazy");
        case 13:
          return t.child !== l && l !== null ? je("Suspense Fallback") : je("Suspense");
        case 19:
          return je("SuspenseList");
        case 0:
        case 15:
          return ii(t.type, false);
        case 11:
          return ii(t.type.render, false);
        case 1:
          return ii(t.type, true);
        case 31:
          return je("Activity");
        default:
          return "";
      }
    }
    function Hf(t) {
      try {
        var l = "", e = null;
        do
          l += cm(t, e), e = t, t = t.return;
        while (t);
        return l;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var ci = Object.prototype.hasOwnProperty, fi = f.unstable_scheduleCallback, si = f.unstable_cancelCallback, fm = f.unstable_shouldYield, sm = f.unstable_requestPaint, al = f.unstable_now, om = f.unstable_getCurrentPriorityLevel, Bf = f.unstable_ImmediatePriority, qf = f.unstable_UserBlockingPriority, Yn = f.unstable_NormalPriority, rm = f.unstable_LowPriority, Yf = f.unstable_IdlePriority, dm = f.log, mm = f.unstable_setDisableYieldValue, Ba = null, nl = null;
    function ne(t) {
      if (typeof dm == "function" && mm(t), nl && typeof nl.setStrictMode == "function") try {
        nl.setStrictMode(Ba, t);
      } catch {
      }
    }
    var ul = Math.clz32 ? Math.clz32 : gm, ym = Math.log, hm = Math.LN2;
    function gm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (ym(t) / hm | 0) | 0;
    }
    var Gn = 256, Ln = 262144, Xn = 4194304;
    function Ue(t) {
      var l = t & 42;
      if (l !== 0) return l;
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
    function Qn(t, l, e) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
      t = t.warmLanes;
      var c = a & 134217727;
      return c !== 0 ? (a = c & ~u, a !== 0 ? n = Ue(a) : (i &= c, i !== 0 ? n = Ue(i) : e || (e = c & ~t, e !== 0 && (n = Ue(e))))) : (c = a & ~u, c !== 0 ? n = Ue(c) : i !== 0 ? n = Ue(i) : e || (e = a & ~t, e !== 0 && (n = Ue(e)))), n === 0 ? 0 : l !== 0 && l !== n && (l & u) === 0 && (u = n & -n, e = l & -l, u >= e || u === 32 && (e & 4194048) !== 0) ? l : n;
    }
    function qa(t, l) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & l) === 0;
    }
    function vm(t, l) {
      switch (t) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return l + 250;
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
          return l + 5e3;
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
    function Gf() {
      var t = Xn;
      return Xn <<= 1, (Xn & 62914560) === 0 && (Xn = 4194304), t;
    }
    function oi(t) {
      for (var l = [], e = 0; 31 > e; e++) l.push(t);
      return l;
    }
    function Ya(t, l) {
      t.pendingLanes |= l, l !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function bm(t, l, e, a, n, u) {
      var i = t.pendingLanes;
      t.pendingLanes = e, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= e, t.entangledLanes &= e, t.errorRecoveryDisabledLanes &= e, t.shellSuspendCounter = 0;
      var c = t.entanglements, d = t.expirationTimes, b = t.hiddenUpdates;
      for (e = i & ~e; 0 < e; ) {
        var E = 31 - ul(e), M = 1 << E;
        c[E] = 0, d[E] = -1;
        var _ = b[E];
        if (_ !== null) for (b[E] = null, E = 0; E < _.length; E++) {
          var p = _[E];
          p !== null && (p.lane &= -536870913);
        }
        e &= ~M;
      }
      a !== 0 && Lf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~l));
    }
    function Lf(t, l, e) {
      t.pendingLanes |= l, t.suspendedLanes &= ~l;
      var a = 31 - ul(l);
      t.entangledLanes |= l, t.entanglements[a] = t.entanglements[a] | 1073741824 | e & 261930;
    }
    function Xf(t, l) {
      var e = t.entangledLanes |= l;
      for (t = t.entanglements; e; ) {
        var a = 31 - ul(e), n = 1 << a;
        n & l | t[a] & l && (t[a] |= l), e &= ~n;
      }
    }
    function Qf(t, l) {
      var e = l & -l;
      return e = (e & 42) !== 0 ? 1 : ri(e), (e & (t.suspendedLanes | l)) !== 0 ? 0 : e;
    }
    function ri(t) {
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
    function di(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Zf() {
      var t = w.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : jd(t.type));
    }
    function Vf(t, l) {
      var e = w.p;
      try {
        return w.p = t, l();
      } finally {
        w.p = e;
      }
    }
    var ue = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + ue, Wt = "__reactProps$" + ue, Fe = "__reactContainer$" + ue, mi = "__reactEvents$" + ue, _m = "__reactListeners$" + ue, pm = "__reactHandles$" + ue, Kf = "__reactResources$" + ue, Ga = "__reactMarker$" + ue;
    function yi(t) {
      delete t[Ht], delete t[Wt], delete t[mi], delete t[_m], delete t[pm];
    }
    function $e(t) {
      var l = t[Ht];
      if (l) return l;
      for (var e = t.parentNode; e; ) {
        if (l = e[Fe] || e[Ht]) {
          if (e = l.alternate, l.child !== null || e !== null && e.child !== null) for (t = yd(t); t !== null; ) {
            if (e = t[Ht]) return e;
            t = yd(t);
          }
          return l;
        }
        t = e, e = t.parentNode;
      }
      return null;
    }
    function Ie(t) {
      if (t = t[Ht] || t[Fe]) {
        var l = t.tag;
        if (l === 5 || l === 6 || l === 13 || l === 31 || l === 26 || l === 27 || l === 3) return t;
      }
      return null;
    }
    function La(t) {
      var l = t.tag;
      if (l === 5 || l === 26 || l === 27 || l === 6) return t.stateNode;
      throw Error(o(33));
    }
    function Pe(t) {
      var l = t[Kf];
      return l || (l = t[Kf] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), l;
    }
    function Rt(t) {
      t[Ga] = true;
    }
    var Jf = /* @__PURE__ */ new Set(), kf = {};
    function De(t, l) {
      ta(t, l), ta(t + "Capture", l);
    }
    function ta(t, l) {
      for (kf[t] = l, t = 0; t < l.length; t++) Jf.add(l[t]);
    }
    var Sm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Wf = {}, Ff = {};
    function zm(t) {
      return ci.call(Ff, t) ? true : ci.call(Wf, t) ? false : Sm.test(t) ? Ff[t] = true : (Wf[t] = true, false);
    }
    function Zn(t, l, e) {
      if (zm(l)) if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(l);
            return;
          case "boolean":
            var a = l.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(l);
              return;
            }
        }
        t.setAttribute(l, "" + e);
      }
    }
    function Vn(t, l, e) {
      if (e === null) t.removeAttribute(l);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(l);
            return;
        }
        t.setAttribute(l, "" + e);
      }
    }
    function Gl(t, l, e, a) {
      if (a === null) t.removeAttribute(e);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            t.removeAttribute(e);
            return;
        }
        t.setAttributeNS(l, e, "" + a);
      }
    }
    function gl(t) {
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
    function $f(t) {
      var l = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (l === "checkbox" || l === "radio");
    }
    function Em(t, l, e) {
      var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, l);
      if (!t.hasOwnProperty(l) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n = a.get, u = a.set;
        return Object.defineProperty(t, l, {
          configurable: true,
          get: function() {
            return n.call(this);
          },
          set: function(i) {
            e = "" + i, u.call(this, i);
          }
        }), Object.defineProperty(t, l, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return e;
          },
          setValue: function(i) {
            e = "" + i;
          },
          stopTracking: function() {
            t._valueTracker = null, delete t[l];
          }
        };
      }
    }
    function hi(t) {
      if (!t._valueTracker) {
        var l = $f(t) ? "checked" : "value";
        t._valueTracker = Em(t, l, "" + t[l]);
      }
    }
    function If(t) {
      if (!t) return false;
      var l = t._valueTracker;
      if (!l) return true;
      var e = l.getValue(), a = "";
      return t && (a = $f(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== e ? (l.setValue(t), true) : false;
    }
    function Kn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var Am = /[\n"\\]/g;
    function vl(t) {
      return t.replace(Am, function(l) {
        return "\\" + l.charCodeAt(0).toString(16) + " ";
      });
    }
    function gi(t, l, e, a, n, u, i, c) {
      t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), l != null ? i === "number" ? (l === 0 && t.value === "" || t.value != l) && (t.value = "" + gl(l)) : t.value !== "" + gl(l) && (t.value = "" + gl(l)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), l != null ? vi(t, i, gl(l)) : e != null ? vi(t, i, gl(e)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? t.name = "" + gl(c) : t.removeAttribute("name");
    }
    function Pf(t, l, e, a, n, u, i, c) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), l != null || e != null) {
        if (!(u !== "submit" && u !== "reset" || l != null)) {
          hi(t);
          return;
        }
        e = e != null ? "" + gl(e) : "", l = l != null ? "" + gl(l) : e, c || l === t.value || (t.value = l), t.defaultValue = l;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = c ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), hi(t);
    }
    function vi(t, l, e) {
      l === "number" && Kn(t.ownerDocument) === t || t.defaultValue === "" + e || (t.defaultValue = "" + e);
    }
    function la(t, l, e, a) {
      if (t = t.options, l) {
        l = {};
        for (var n = 0; n < e.length; n++) l["$" + e[n]] = true;
        for (e = 0; e < t.length; e++) n = l.hasOwnProperty("$" + t[e].value), t[e].selected !== n && (t[e].selected = n), n && a && (t[e].defaultSelected = true);
      } else {
        for (e = "" + gl(e), l = null, n = 0; n < t.length; n++) {
          if (t[n].value === e) {
            t[n].selected = true, a && (t[n].defaultSelected = true);
            return;
          }
          l !== null || t[n].disabled || (l = t[n]);
        }
        l !== null && (l.selected = true);
      }
    }
    function ts(t, l, e) {
      if (l != null && (l = "" + gl(l), l !== t.value && (t.value = l), e == null)) {
        t.defaultValue !== l && (t.defaultValue = l);
        return;
      }
      t.defaultValue = e != null ? "" + gl(e) : "";
    }
    function ls(t, l, e, a) {
      if (l == null) {
        if (a != null) {
          if (e != null) throw Error(o(92));
          if (el(a)) {
            if (1 < a.length) throw Error(o(93));
            a = a[0];
          }
          e = a;
        }
        e == null && (e = ""), l = e;
      }
      e = gl(l), t.defaultValue = e, a = t.textContent, a === e && a !== "" && a !== null && (t.value = a), hi(t);
    }
    function ea(t, l) {
      if (l) {
        var e = t.firstChild;
        if (e && e === t.lastChild && e.nodeType === 3) {
          e.nodeValue = l;
          return;
        }
      }
      t.textContent = l;
    }
    var xm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function es(t, l, e) {
      var a = l.indexOf("--") === 0;
      e == null || typeof e == "boolean" || e === "" ? a ? t.setProperty(l, "") : l === "float" ? t.cssFloat = "" : t[l] = "" : a ? t.setProperty(l, e) : typeof e != "number" || e === 0 || xm.has(l) ? l === "float" ? t.cssFloat = e : t[l] = ("" + e).trim() : t[l] = e + "px";
    }
    function as(t, l, e) {
      if (l != null && typeof l != "object") throw Error(o(62));
      if (t = t.style, e != null) {
        for (var a in e) !e.hasOwnProperty(a) || l != null && l.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in l) a = l[n], l.hasOwnProperty(n) && e[n] !== a && es(t, n, a);
      } else for (var u in l) l.hasOwnProperty(u) && es(t, u, l[u]);
    }
    function bi(t) {
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
    var Tm = /* @__PURE__ */ new Map([
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
    ]), Mm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Jn(t) {
      return Mm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Ll() {
    }
    var _i = null;
    function pi(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var aa = null, na = null;
    function ns(t) {
      var l = Ie(t);
      if (l && (t = l.stateNode)) {
        var e = t[Wt] || null;
        t: switch (t = l.stateNode, l.type) {
          case "input":
            if (gi(t, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name), l = e.name, e.type === "radio" && l != null) {
              for (e = t; e.parentNode; ) e = e.parentNode;
              for (e = e.querySelectorAll('input[name="' + vl("" + l) + '"][type="radio"]'), l = 0; l < e.length; l++) {
                var a = e[l];
                if (a !== t && a.form === t.form) {
                  var n = a[Wt] || null;
                  if (!n) throw Error(o(90));
                  gi(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (l = 0; l < e.length; l++) a = e[l], a.form === t.form && If(a);
            }
            break t;
          case "textarea":
            ts(t, e.value, e.defaultValue);
            break t;
          case "select":
            l = e.value, l != null && la(t, !!e.multiple, l, false);
        }
      }
    }
    var Si = false;
    function us(t, l, e) {
      if (Si) return t(l, e);
      Si = true;
      try {
        var a = t(l);
        return a;
      } finally {
        if (Si = false, (aa !== null || na !== null) && (wu(), aa && (l = aa, t = na, na = aa = null, ns(l), t))) for (l = 0; l < t.length; l++) ns(t[l]);
      }
    }
    function Xa(t, l) {
      var e = t.stateNode;
      if (e === null) return null;
      var a = e[Wt] || null;
      if (a === null) return null;
      e = a[l];
      t: switch (l) {
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
      if (e && typeof e != "function") throw Error(o(231, l, typeof e));
      return e;
    }
    var Xl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zi = false;
    if (Xl) try {
      var Qa = {};
      Object.defineProperty(Qa, "passive", {
        get: function() {
          zi = true;
        }
      }), window.addEventListener("test", Qa, Qa), window.removeEventListener("test", Qa, Qa);
    } catch {
      zi = false;
    }
    var ie = null, Ei = null, kn = null;
    function is() {
      if (kn) return kn;
      var t, l = Ei, e = l.length, a, n = "value" in ie ? ie.value : ie.textContent, u = n.length;
      for (t = 0; t < e && l[t] === n[t]; t++) ;
      var i = e - t;
      for (a = 1; a <= i && l[e - a] === n[u - a]; a++) ;
      return kn = n.slice(t, 1 < a ? 1 - a : void 0);
    }
    function Wn(t) {
      var l = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && l === 13 && (t = 13)) : t = l, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function Fn() {
      return true;
    }
    function cs() {
      return false;
    }
    function Ft(t) {
      function l(e, a, n, u, i) {
        this._reactName = e, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var c in t) t.hasOwnProperty(c) && (e = t[c], this[c] = e ? e(u) : u[c]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? Fn : cs, this.isPropagationStopped = cs, this;
      }
      return U(l.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var e = this.nativeEvent;
          e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = false), this.isDefaultPrevented = Fn);
        },
        stopPropagation: function() {
          var e = this.nativeEvent;
          e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = true), this.isPropagationStopped = Fn);
        },
        persist: function() {
        },
        isPersistent: Fn
      }), l;
    }
    var Re = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, $n = Ft(Re), Za = U({}, Re, {
      view: 0,
      detail: 0
    }), Nm = Ft(Za), Ai, xi, Va, In = U({}, Za, {
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
      getModifierState: Mi,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Va && (Va && t.type === "mousemove" ? (Ai = t.screenX - Va.screenX, xi = t.screenY - Va.screenY) : xi = Ai = 0, Va = t), Ai);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : xi;
      }
    }), fs = Ft(In), Om = U({}, In, {
      dataTransfer: 0
    }), jm = Ft(Om), Um = U({}, Za, {
      relatedTarget: 0
    }), Ti = Ft(Um), Dm = U({}, Re, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Rm = Ft(Dm), wm = U({}, Re, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), Cm = Ft(wm), Hm = U({}, Re, {
      data: 0
    }), ss = Ft(Hm), Bm = {
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
    }, qm = {
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
    }, Ym = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Gm(t) {
      var l = this.nativeEvent;
      return l.getModifierState ? l.getModifierState(t) : (t = Ym[t]) ? !!l[t] : false;
    }
    function Mi() {
      return Gm;
    }
    var Lm = U({}, Za, {
      key: function(t) {
        if (t.key) {
          var l = Bm[t.key] || t.key;
          if (l !== "Unidentified") return l;
        }
        return t.type === "keypress" ? (t = Wn(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? qm[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Mi,
      charCode: function(t) {
        return t.type === "keypress" ? Wn(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? Wn(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), Xm = Ft(Lm), Qm = U({}, In, {
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
    }), os = Ft(Qm), Zm = U({}, Za, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Mi
    }), Vm = Ft(Zm), Km = U({}, Re, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Jm = Ft(Km), km = U({}, In, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Wm = Ft(km), Fm = U({}, Re, {
      newState: 0,
      oldState: 0
    }), $m = Ft(Fm), Im = [
      9,
      13,
      27,
      32
    ], Ni = Xl && "CompositionEvent" in window, Ka = null;
    Xl && "documentMode" in document && (Ka = document.documentMode);
    var Pm = Xl && "TextEvent" in window && !Ka, rs = Xl && (!Ni || Ka && 8 < Ka && 11 >= Ka), ds = " ", ms = false;
    function ys(t, l) {
      switch (t) {
        case "keyup":
          return Im.indexOf(l.keyCode) !== -1;
        case "keydown":
          return l.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function hs(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var ua = false;
    function ty(t, l) {
      switch (t) {
        case "compositionend":
          return hs(l);
        case "keypress":
          return l.which !== 32 ? null : (ms = true, ds);
        case "textInput":
          return t = l.data, t === ds && ms ? null : t;
        default:
          return null;
      }
    }
    function ly(t, l) {
      if (ua) return t === "compositionend" || !Ni && ys(t, l) ? (t = is(), kn = Ei = ie = null, ua = false, t) : null;
      switch (t) {
        case "paste":
          return null;
        case "keypress":
          if (!(l.ctrlKey || l.altKey || l.metaKey) || l.ctrlKey && l.altKey) {
            if (l.char && 1 < l.char.length) return l.char;
            if (l.which) return String.fromCharCode(l.which);
          }
          return null;
        case "compositionend":
          return rs && l.locale !== "ko" ? null : l.data;
        default:
          return null;
      }
    }
    var ey = {
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
    function gs(t) {
      var l = t && t.nodeName && t.nodeName.toLowerCase();
      return l === "input" ? !!ey[t.type] : l === "textarea";
    }
    function vs(t, l, e, a) {
      aa ? na ? na.push(a) : na = [
        a
      ] : aa = a, l = Lu(l, "onChange"), 0 < l.length && (e = new $n("onChange", "change", null, e, a), t.push({
        event: e,
        listeners: l
      }));
    }
    var Ja = null, ka = null;
    function ay(t) {
      td(t, 0);
    }
    function Pn(t) {
      var l = La(t);
      if (If(l)) return t;
    }
    function bs(t, l) {
      if (t === "change") return l;
    }
    var _s = false;
    if (Xl) {
      var Oi;
      if (Xl) {
        var ji = "oninput" in document;
        if (!ji) {
          var ps = document.createElement("div");
          ps.setAttribute("oninput", "return;"), ji = typeof ps.oninput == "function";
        }
        Oi = ji;
      } else Oi = false;
      _s = Oi && (!document.documentMode || 9 < document.documentMode);
    }
    function Ss() {
      Ja && (Ja.detachEvent("onpropertychange", zs), ka = Ja = null);
    }
    function zs(t) {
      if (t.propertyName === "value" && Pn(ka)) {
        var l = [];
        vs(l, ka, t, pi(t)), us(ay, l);
      }
    }
    function ny(t, l, e) {
      t === "focusin" ? (Ss(), Ja = l, ka = e, Ja.attachEvent("onpropertychange", zs)) : t === "focusout" && Ss();
    }
    function uy(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return Pn(ka);
    }
    function iy(t, l) {
      if (t === "click") return Pn(l);
    }
    function cy(t, l) {
      if (t === "input" || t === "change") return Pn(l);
    }
    function fy(t, l) {
      return t === l && (t !== 0 || 1 / t === 1 / l) || t !== t && l !== l;
    }
    var il = typeof Object.is == "function" ? Object.is : fy;
    function Wa(t, l) {
      if (il(t, l)) return true;
      if (typeof t != "object" || t === null || typeof l != "object" || l === null) return false;
      var e = Object.keys(t), a = Object.keys(l);
      if (e.length !== a.length) return false;
      for (a = 0; a < e.length; a++) {
        var n = e[a];
        if (!ci.call(l, n) || !il(t[n], l[n])) return false;
      }
      return true;
    }
    function Es(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function As(t, l) {
      var e = Es(t);
      t = 0;
      for (var a; e; ) {
        if (e.nodeType === 3) {
          if (a = t + e.textContent.length, t <= l && a >= l) return {
            node: e,
            offset: l - t
          };
          t = a;
        }
        t: {
          for (; e; ) {
            if (e.nextSibling) {
              e = e.nextSibling;
              break t;
            }
            e = e.parentNode;
          }
          e = void 0;
        }
        e = Es(e);
      }
    }
    function xs(t, l) {
      return t && l ? t === l ? true : t && t.nodeType === 3 ? false : l && l.nodeType === 3 ? xs(t, l.parentNode) : "contains" in t ? t.contains(l) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(l) & 16) : false : false;
    }
    function Ts(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var l = Kn(t.document); l instanceof t.HTMLIFrameElement; ) {
        try {
          var e = typeof l.contentWindow.location.href == "string";
        } catch {
          e = false;
        }
        if (e) t = l.contentWindow;
        else break;
        l = Kn(t.document);
      }
      return l;
    }
    function Ui(t) {
      var l = t && t.nodeName && t.nodeName.toLowerCase();
      return l && (l === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || l === "textarea" || t.contentEditable === "true");
    }
    var sy = Xl && "documentMode" in document && 11 >= document.documentMode, ia = null, Di = null, Fa = null, Ri = false;
    function Ms(t, l, e) {
      var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
      Ri || ia == null || ia !== Kn(a) || (a = ia, "selectionStart" in a && Ui(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), Fa && Wa(Fa, a) || (Fa = a, a = Lu(Di, "onSelect"), 0 < a.length && (l = new $n("onSelect", "select", null, l, e), t.push({
        event: l,
        listeners: a
      }), l.target = ia)));
    }
    function we(t, l) {
      var e = {};
      return e[t.toLowerCase()] = l.toLowerCase(), e["Webkit" + t] = "webkit" + l, e["Moz" + t] = "moz" + l, e;
    }
    var ca = {
      animationend: we("Animation", "AnimationEnd"),
      animationiteration: we("Animation", "AnimationIteration"),
      animationstart: we("Animation", "AnimationStart"),
      transitionrun: we("Transition", "TransitionRun"),
      transitionstart: we("Transition", "TransitionStart"),
      transitioncancel: we("Transition", "TransitionCancel"),
      transitionend: we("Transition", "TransitionEnd")
    }, wi = {}, Ns = {};
    Xl && (Ns = document.createElement("div").style, "AnimationEvent" in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), "TransitionEvent" in window || delete ca.transitionend.transition);
    function Ce(t) {
      if (wi[t]) return wi[t];
      if (!ca[t]) return t;
      var l = ca[t], e;
      for (e in l) if (l.hasOwnProperty(e) && e in Ns) return wi[t] = l[e];
      return t;
    }
    var Os = Ce("animationend"), js = Ce("animationiteration"), Us = Ce("animationstart"), oy = Ce("transitionrun"), ry = Ce("transitionstart"), dy = Ce("transitioncancel"), Ds = Ce("transitionend"), Rs = /* @__PURE__ */ new Map(), Ci = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Ci.push("scrollEnd");
    function Ml(t, l) {
      Rs.set(t, l), De(l, [
        t
      ]);
    }
    var tu = typeof reportError == "function" ? reportError : function(t) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var l = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
          error: t
        });
        if (!window.dispatchEvent(l)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", t);
        return;
      }
      console.error(t);
    }, bl = [], fa = 0, Hi = 0;
    function lu() {
      for (var t = fa, l = Hi = fa = 0; l < t; ) {
        var e = bl[l];
        bl[l++] = null;
        var a = bl[l];
        bl[l++] = null;
        var n = bl[l];
        bl[l++] = null;
        var u = bl[l];
        if (bl[l++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && ws(e, n, u);
      }
    }
    function eu(t, l, e, a) {
      bl[fa++] = t, bl[fa++] = l, bl[fa++] = e, bl[fa++] = a, Hi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Bi(t, l, e, a) {
      return eu(t, l, e, a), au(t);
    }
    function He(t, l) {
      return eu(t, null, null, l), au(t);
    }
    function ws(t, l, e) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e);
      for (var n = false, u = t.return; u !== null; ) u.childLanes |= e, a = u.alternate, a !== null && (a.childLanes |= e), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, n && l !== null && (n = 31 - ul(e), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
        l
      ] : a.push(l), l.lane = e | 536870912), u) : null;
    }
    function au(t) {
      if (50 < _n) throw _n = 0, Kc = null, Error(o(185));
      for (var l = t.return; l !== null; ) t = l, l = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var sa = {};
    function my(t, l, e, a) {
      this.tag = t, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = l, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function cl(t, l, e, a) {
      return new my(t, l, e, a);
    }
    function qi(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function Ql(t, l) {
      var e = t.alternate;
      return e === null ? (e = cl(t.tag, l, t.key, t.mode), e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.alternate = t, t.alternate = e) : (e.pendingProps = l, e.type = t.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = t.flags & 65011712, e.childLanes = t.childLanes, e.lanes = t.lanes, e.child = t.child, e.memoizedProps = t.memoizedProps, e.memoizedState = t.memoizedState, e.updateQueue = t.updateQueue, l = t.dependencies, e.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.refCleanup = t.refCleanup, e;
    }
    function Cs(t, l) {
      t.flags &= 65011714;
      var e = t.alternate;
      return e === null ? (t.childLanes = 0, t.lanes = l, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, t.type = e.type, l = e.dependencies, t.dependencies = l === null ? null : {
        lanes: l.lanes,
        firstContext: l.firstContext
      }), t;
    }
    function nu(t, l, e, a, n, u) {
      var i = 0;
      if (a = t, typeof t == "function") qi(t) && (i = 1);
      else if (typeof t == "string") i = b0(t, e, D.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case yl:
          return t = cl(31, e, l, n), t.elementType = yl, t.lanes = u, t;
        case it:
          return Be(e.children, n, u, l);
        case kt:
          i = 8, n |= 24;
          break;
        case pt:
          return t = cl(12, e, l, n | 2), t.elementType = pt, t.lanes = u, t;
        case ml:
          return t = cl(13, e, l, n), t.elementType = ml, t.lanes = u, t;
        case Lt:
          return t = cl(19, e, l, n), t.elementType = Lt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case At:
              i = 10;
              break t;
            case Ul:
              i = 9;
              break t;
            case Vt:
              i = 11;
              break t;
            case W:
              i = 14;
              break t;
            case Xt:
              i = 16, a = null;
              break t;
          }
          i = 29, e = Error(o(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return l = cl(i, e, l, n), l.elementType = t, l.type = a, l.lanes = u, l;
    }
    function Be(t, l, e, a) {
      return t = cl(7, t, a, l), t.lanes = e, t;
    }
    function Yi(t, l, e) {
      return t = cl(6, t, null, l), t.lanes = e, t;
    }
    function Hs(t) {
      var l = cl(18, null, null, 0);
      return l.stateNode = t, l;
    }
    function Gi(t, l, e) {
      return l = cl(4, t.children !== null ? t.children : [], t.key, l), l.lanes = e, l.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, l;
    }
    var Bs = /* @__PURE__ */ new WeakMap();
    function _l(t, l) {
      if (typeof t == "object" && t !== null) {
        var e = Bs.get(t);
        return e !== void 0 ? e : (l = {
          value: t,
          source: l,
          stack: Hf(l)
        }, Bs.set(t, l), l);
      }
      return {
        value: t,
        source: l,
        stack: Hf(l)
      };
    }
    var oa = [], ra = 0, uu = null, $a = 0, pl = [], Sl = 0, ce = null, Rl = 1, wl = "";
    function Zl(t, l) {
      oa[ra++] = $a, oa[ra++] = uu, uu = t, $a = l;
    }
    function qs(t, l, e) {
      pl[Sl++] = Rl, pl[Sl++] = wl, pl[Sl++] = ce, ce = t;
      var a = Rl;
      t = wl;
      var n = 32 - ul(a) - 1;
      a &= ~(1 << n), e += 1;
      var u = 32 - ul(l) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Rl = 1 << 32 - ul(l) + n | e << n | a, wl = u + t;
      } else Rl = 1 << u | e << n | a, wl = t;
    }
    function Li(t) {
      t.return !== null && (Zl(t, 1), qs(t, 1, 0));
    }
    function Xi(t) {
      for (; t === uu; ) uu = oa[--ra], oa[ra] = null, $a = oa[--ra], oa[ra] = null;
      for (; t === ce; ) ce = pl[--Sl], pl[Sl] = null, wl = pl[--Sl], pl[Sl] = null, Rl = pl[--Sl], pl[Sl] = null;
    }
    function Ys(t, l) {
      pl[Sl++] = Rl, pl[Sl++] = wl, pl[Sl++] = ce, Rl = l.id, wl = l.overflow, ce = t;
    }
    var Bt = null, vt = null, tt = false, fe = null, zl = false, Qi = Error(o(519));
    function se(t) {
      var l = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw Ia(_l(l, t)), Qi;
    }
    function Gs(t) {
      var l = t.stateNode, e = t.type, a = t.memoizedProps;
      switch (l[Ht] = t, l[Wt] = a, e) {
        case "dialog":
          $("cancel", l), $("close", l);
          break;
        case "iframe":
        case "object":
        case "embed":
          $("load", l);
          break;
        case "video":
        case "audio":
          for (e = 0; e < Sn.length; e++) $(Sn[e], l);
          break;
        case "source":
          $("error", l);
          break;
        case "img":
        case "image":
        case "link":
          $("error", l), $("load", l);
          break;
        case "details":
          $("toggle", l);
          break;
        case "input":
          $("invalid", l), Pf(l, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          $("invalid", l);
          break;
        case "textarea":
          $("invalid", l), ls(l, a.value, a.defaultValue, a.children);
      }
      e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || l.textContent === "" + e || a.suppressHydrationWarning === true || nd(l.textContent, e) ? (a.popover != null && ($("beforetoggle", l), $("toggle", l)), a.onScroll != null && $("scroll", l), a.onScrollEnd != null && $("scrollend", l), a.onClick != null && (l.onclick = Ll), l = true) : l = false, l || se(t, true);
    }
    function Ls(t) {
      for (Bt = t.return; Bt; ) switch (Bt.tag) {
        case 5:
        case 31:
        case 13:
          zl = false;
          return;
        case 27:
        case 3:
          zl = true;
          return;
        default:
          Bt = Bt.return;
      }
    }
    function da(t) {
      if (t !== Bt) return false;
      if (!tt) return Ls(t), tt = true, false;
      var l = t.tag, e;
      if ((e = l !== 3 && l !== 27) && ((e = l === 5) && (e = t.type, e = !(e !== "form" && e !== "button") || ff(t.type, t.memoizedProps)), e = !e), e && vt && se(t), Ls(t), l === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        vt = md(t);
      } else if (l === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
        vt = md(t);
      } else l === 27 ? (l = vt, Ee(t.type) ? (t = mf, mf = null, vt = t) : vt = l) : vt = Bt ? Al(t.stateNode.nextSibling) : null;
      return true;
    }
    function qe() {
      vt = Bt = null, tt = false;
    }
    function Zi() {
      var t = fe;
      return t !== null && (tl === null ? tl = t : tl.push.apply(tl, t), fe = null), t;
    }
    function Ia(t) {
      fe === null ? fe = [
        t
      ] : fe.push(t);
    }
    var Vi = r(null), Ye = null, Vl = null;
    function oe(t, l, e) {
      O(Vi, l._currentValue), l._currentValue = e;
    }
    function Kl(t) {
      t._currentValue = Vi.current, S(Vi);
    }
    function Ki(t, l, e) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & l) !== l ? (t.childLanes |= l, a !== null && (a.childLanes |= l)) : a !== null && (a.childLanes & l) !== l && (a.childLanes |= l), t === e) break;
        t = t.return;
      }
    }
    function Ji(t, l, e, a) {
      var n = t.child;
      for (n !== null && (n.return = t); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var i = n.child;
          u = u.firstContext;
          t: for (; u !== null; ) {
            var c = u;
            u = n;
            for (var d = 0; d < l.length; d++) if (c.context === l[d]) {
              u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), Ki(u.return, e, t), a || (i = null);
              break t;
            }
            u = c.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(o(341));
          i.lanes |= e, u = i.alternate, u !== null && (u.lanes |= e), Ki(i, e, t), i = null;
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
    function ma(t, l, e, a) {
      t = null;
      for (var n = l, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(o(387));
          if (i = i.memoizedProps, i !== null) {
            var c = n.type;
            il(n.pendingProps.value, i.value) || (t !== null ? t.push(c) : t = [
              c
            ]);
          }
        } else if (n === et.current) {
          if (i = n.alternate, i === null) throw Error(o(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Tn) : t = [
            Tn
          ]);
        }
        n = n.return;
      }
      t !== null && Ji(l, t, e, a), l.flags |= 262144;
    }
    function iu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!il(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function Ge(t) {
      Ye = t, Vl = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function qt(t) {
      return Xs(Ye, t);
    }
    function cu(t, l) {
      return Ye === null && Ge(t), Xs(t, l);
    }
    function Xs(t, l) {
      var e = l._currentValue;
      if (l = {
        context: l,
        memoizedValue: e,
        next: null
      }, Vl === null) {
        if (t === null) throw Error(o(308));
        Vl = l, t.dependencies = {
          lanes: 0,
          firstContext: l
        }, t.flags |= 524288;
      } else Vl = Vl.next = l;
      return e;
    }
    var yy = typeof AbortController < "u" ? AbortController : function() {
      var t = [], l = this.signal = {
        aborted: false,
        addEventListener: function(e, a) {
          t.push(a);
        }
      };
      this.abort = function() {
        l.aborted = true, t.forEach(function(e) {
          return e();
        });
      };
    }, hy = f.unstable_scheduleCallback, gy = f.unstable_NormalPriority, Nt = {
      $$typeof: At,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function ki() {
      return {
        controller: new yy(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Pa(t) {
      t.refCount--, t.refCount === 0 && hy(gy, function() {
        t.controller.abort();
      });
    }
    var tn = null, Wi = 0, ya = 0, ha = null;
    function vy(t, l) {
      if (tn === null) {
        var e = tn = [];
        Wi = 0, ya = Ic(), ha = {
          status: "pending",
          value: void 0,
          then: function(a) {
            e.push(a);
          }
        };
      }
      return Wi++, l.then(Qs, Qs), l;
    }
    function Qs() {
      if (--Wi === 0 && tn !== null) {
        ha !== null && (ha.status = "fulfilled");
        var t = tn;
        tn = null, ya = 0, ha = null;
        for (var l = 0; l < t.length; l++) (0, t[l])();
      }
    }
    function by(t, l) {
      var e = [], a = {
        status: "pending",
        value: null,
        reason: null,
        then: function(n) {
          e.push(n);
        }
      };
      return t.then(function() {
        a.status = "fulfilled", a.value = l;
        for (var n = 0; n < e.length; n++) (0, e[n])(l);
      }, function(n) {
        for (a.status = "rejected", a.reason = n, n = 0; n < e.length; n++) (0, e[n])(void 0);
      }), a;
    }
    var Zs = x.S;
    x.S = function(t, l) {
      Nr = al(), typeof l == "object" && l !== null && typeof l.then == "function" && vy(t, l), Zs !== null && Zs(t, l);
    };
    var Le = r(null);
    function Fi() {
      var t = Le.current;
      return t !== null ? t : ht.pooledCache;
    }
    function fu(t, l) {
      l === null ? O(Le, Le.current) : O(Le, l.pool);
    }
    function Vs() {
      var t = Fi();
      return t === null ? null : {
        parent: Nt._currentValue,
        pool: t
      };
    }
    var ga = Error(o(460)), $i = Error(o(474)), su = Error(o(542)), ou = {
      then: function() {
      }
    };
    function Ks(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function Js(t, l, e) {
      switch (e = t[e], e === void 0 ? t.push(l) : e !== l && (l.then(Ll, Ll), l = e), l.status) {
        case "fulfilled":
          return l.value;
        case "rejected":
          throw t = l.reason, Ws(t), t;
        default:
          if (typeof l.status == "string") l.then(Ll, Ll);
          else {
            if (t = ht, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482));
            t = l, t.status = "pending", t.then(function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "fulfilled", n.value = a;
              }
            }, function(a) {
              if (l.status === "pending") {
                var n = l;
                n.status = "rejected", n.reason = a;
              }
            });
          }
          switch (l.status) {
            case "fulfilled":
              return l.value;
            case "rejected":
              throw t = l.reason, Ws(t), t;
          }
          throw Qe = l, ga;
      }
    }
    function Xe(t) {
      try {
        var l = t._init;
        return l(t._payload);
      } catch (e) {
        throw e !== null && typeof e == "object" && typeof e.then == "function" ? (Qe = e, ga) : e;
      }
    }
    var Qe = null;
    function ks() {
      if (Qe === null) throw Error(o(459));
      var t = Qe;
      return Qe = null, t;
    }
    function Ws(t) {
      if (t === ga || t === su) throw Error(o(483));
    }
    var va = null, ln = 0;
    function ru(t) {
      var l = ln;
      return ln += 1, va === null && (va = []), Js(va, t, l);
    }
    function en(t, l) {
      l = l.props.ref, t.ref = l !== void 0 ? l : null;
    }
    function du(t, l) {
      throw l.$$typeof === X ? Error(o(525)) : (t = Object.prototype.toString.call(l), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(l).join(", ") + "}" : t)));
    }
    function Fs(t) {
      function l(h, y) {
        if (t) {
          var v = h.deletions;
          v === null ? (h.deletions = [
            y
          ], h.flags |= 16) : v.push(y);
        }
      }
      function e(h, y) {
        if (!t) return null;
        for (; y !== null; ) l(h, y), y = y.sibling;
        return null;
      }
      function a(h) {
        for (var y = /* @__PURE__ */ new Map(); h !== null; ) h.key !== null ? y.set(h.key, h) : y.set(h.index, h), h = h.sibling;
        return y;
      }
      function n(h, y) {
        return h = Ql(h, y), h.index = 0, h.sibling = null, h;
      }
      function u(h, y, v) {
        return h.index = v, t ? (v = h.alternate, v !== null ? (v = v.index, v < y ? (h.flags |= 67108866, y) : v) : (h.flags |= 67108866, y)) : (h.flags |= 1048576, y);
      }
      function i(h) {
        return t && h.alternate === null && (h.flags |= 67108866), h;
      }
      function c(h, y, v, T) {
        return y === null || y.tag !== 6 ? (y = Yi(v, h.mode, T), y.return = h, y) : (y = n(y, v), y.return = h, y);
      }
      function d(h, y, v, T) {
        var G = v.type;
        return G === it ? E(h, y, v.props.children, T, v.key) : y !== null && (y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Xt && Xe(G) === y.type) ? (y = n(y, v.props), en(y, v), y.return = h, y) : (y = nu(v.type, v.key, v.props, null, h.mode, T), en(y, v), y.return = h, y);
      }
      function b(h, y, v, T) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Gi(v, h.mode, T), y.return = h, y) : (y = n(y, v.children || []), y.return = h, y);
      }
      function E(h, y, v, T, G) {
        return y === null || y.tag !== 7 ? (y = Be(v, h.mode, T, G), y.return = h, y) : (y = n(y, v), y.return = h, y);
      }
      function M(h, y, v) {
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Yi("" + y, h.mode, v), y.return = h, y;
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case lt:
              return v = nu(y.type, y.key, y.props, null, h.mode, v), en(v, y), v.return = h, v;
            case gt:
              return y = Gi(y, h.mode, v), y.return = h, y;
            case Xt:
              return y = Xe(y), M(h, y, v);
          }
          if (el(y) || Ct(y)) return y = Be(y, h.mode, v, null), y.return = h, y;
          if (typeof y.then == "function") return M(h, ru(y), v);
          if (y.$$typeof === At) return M(h, cu(h, y), v);
          du(h, y);
        }
        return null;
      }
      function _(h, y, v, T) {
        var G = y !== null ? y.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return G !== null ? null : c(h, y, "" + v, T);
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case lt:
              return v.key === G ? d(h, y, v, T) : null;
            case gt:
              return v.key === G ? b(h, y, v, T) : null;
            case Xt:
              return v = Xe(v), _(h, y, v, T);
          }
          if (el(v) || Ct(v)) return G !== null ? null : E(h, y, v, T, null);
          if (typeof v.then == "function") return _(h, y, ru(v), T);
          if (v.$$typeof === At) return _(h, y, cu(h, v), T);
          du(h, v);
        }
        return null;
      }
      function p(h, y, v, T, G) {
        if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint") return h = h.get(v) || null, c(y, h, "" + T, G);
        if (typeof T == "object" && T !== null) {
          switch (T.$$typeof) {
            case lt:
              return h = h.get(T.key === null ? v : T.key) || null, d(y, h, T, G);
            case gt:
              return h = h.get(T.key === null ? v : T.key) || null, b(y, h, T, G);
            case Xt:
              return T = Xe(T), p(h, y, v, T, G);
          }
          if (el(T) || Ct(T)) return h = h.get(v) || null, E(y, h, T, G, null);
          if (typeof T.then == "function") return p(h, y, v, ru(T), G);
          if (T.$$typeof === At) return p(h, y, v, cu(y, T), G);
          du(y, T);
        }
        return null;
      }
      function B(h, y, v, T) {
        for (var G = null, at = null, q = y, J = y = 0, P = null; q !== null && J < v.length; J++) {
          q.index > J ? (P = q, q = null) : P = q.sibling;
          var nt = _(h, q, v[J], T);
          if (nt === null) {
            q === null && (q = P);
            break;
          }
          t && q && nt.alternate === null && l(h, q), y = u(nt, y, J), at === null ? G = nt : at.sibling = nt, at = nt, q = P;
        }
        if (J === v.length) return e(h, q), tt && Zl(h, J), G;
        if (q === null) {
          for (; J < v.length; J++) q = M(h, v[J], T), q !== null && (y = u(q, y, J), at === null ? G = q : at.sibling = q, at = q);
          return tt && Zl(h, J), G;
        }
        for (q = a(q); J < v.length; J++) P = p(q, h, J, v[J], T), P !== null && (t && P.alternate !== null && q.delete(P.key === null ? J : P.key), y = u(P, y, J), at === null ? G = P : at.sibling = P, at = P);
        return t && q.forEach(function(Ne) {
          return l(h, Ne);
        }), tt && Zl(h, J), G;
      }
      function L(h, y, v, T) {
        if (v == null) throw Error(o(151));
        for (var G = null, at = null, q = y, J = y = 0, P = null, nt = v.next(); q !== null && !nt.done; J++, nt = v.next()) {
          q.index > J ? (P = q, q = null) : P = q.sibling;
          var Ne = _(h, q, nt.value, T);
          if (Ne === null) {
            q === null && (q = P);
            break;
          }
          t && q && Ne.alternate === null && l(h, q), y = u(Ne, y, J), at === null ? G = Ne : at.sibling = Ne, at = Ne, q = P;
        }
        if (nt.done) return e(h, q), tt && Zl(h, J), G;
        if (q === null) {
          for (; !nt.done; J++, nt = v.next()) nt = M(h, nt.value, T), nt !== null && (y = u(nt, y, J), at === null ? G = nt : at.sibling = nt, at = nt);
          return tt && Zl(h, J), G;
        }
        for (q = a(q); !nt.done; J++, nt = v.next()) nt = p(q, h, J, nt.value, T), nt !== null && (t && nt.alternate !== null && q.delete(nt.key === null ? J : nt.key), y = u(nt, y, J), at === null ? G = nt : at.sibling = nt, at = nt);
        return t && q.forEach(function(O0) {
          return l(h, O0);
        }), tt && Zl(h, J), G;
      }
      function mt(h, y, v, T) {
        if (typeof v == "object" && v !== null && v.type === it && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case lt:
              t: {
                for (var G = v.key; y !== null; ) {
                  if (y.key === G) {
                    if (G = v.type, G === it) {
                      if (y.tag === 7) {
                        e(h, y.sibling), T = n(y, v.props.children), T.return = h, h = T;
                        break t;
                      }
                    } else if (y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === Xt && Xe(G) === y.type) {
                      e(h, y.sibling), T = n(y, v.props), en(T, v), T.return = h, h = T;
                      break t;
                    }
                    e(h, y);
                    break;
                  } else l(h, y);
                  y = y.sibling;
                }
                v.type === it ? (T = Be(v.props.children, h.mode, T, v.key), T.return = h, h = T) : (T = nu(v.type, v.key, v.props, null, h.mode, T), en(T, v), T.return = h, h = T);
              }
              return i(h);
            case gt:
              t: {
                for (G = v.key; y !== null; ) {
                  if (y.key === G) if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                    e(h, y.sibling), T = n(y, v.children || []), T.return = h, h = T;
                    break t;
                  } else {
                    e(h, y);
                    break;
                  }
                  else l(h, y);
                  y = y.sibling;
                }
                T = Gi(v, h.mode, T), T.return = h, h = T;
              }
              return i(h);
            case Xt:
              return v = Xe(v), mt(h, y, v, T);
          }
          if (el(v)) return B(h, y, v, T);
          if (Ct(v)) {
            if (G = Ct(v), typeof G != "function") throw Error(o(150));
            return v = G.call(v), L(h, y, v, T);
          }
          if (typeof v.then == "function") return mt(h, y, ru(v), T);
          if (v.$$typeof === At) return mt(h, y, cu(h, v), T);
          du(h, v);
        }
        return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, y !== null && y.tag === 6 ? (e(h, y.sibling), T = n(y, v), T.return = h, h = T) : (e(h, y), T = Yi(v, h.mode, T), T.return = h, h = T), i(h)) : e(h, y);
      }
      return function(h, y, v, T) {
        try {
          ln = 0;
          var G = mt(h, y, v, T);
          return va = null, G;
        } catch (q) {
          if (q === ga || q === su) throw q;
          var at = cl(29, q, null, h.mode);
          return at.lanes = T, at.return = h, at;
        } finally {
        }
      };
    }
    var Ze = Fs(true), $s = Fs(false), re = false;
    function Ii(t) {
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
    function Pi(t, l) {
      t = t.updateQueue, l.updateQueue === t && (l.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function de(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function me(t, l, e) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (ut & 2) !== 0) {
        var n = a.pending;
        return n === null ? l.next = l : (l.next = n.next, n.next = l), a.pending = l, l = au(t), ws(t, null, e), l;
      }
      return eu(t, a, l, e), au(t);
    }
    function an(t, l, e) {
      if (l = l.updateQueue, l !== null && (l = l.shared, (e & 4194048) !== 0)) {
        var a = l.lanes;
        a &= t.pendingLanes, e |= a, l.lanes = e, Xf(t, e);
      }
    }
    function tc(t, l) {
      var e = t.updateQueue, a = t.alternate;
      if (a !== null && (a = a.updateQueue, e === a)) {
        var n = null, u = null;
        if (e = e.firstBaseUpdate, e !== null) {
          do {
            var i = {
              lane: e.lane,
              tag: e.tag,
              payload: e.payload,
              callback: null,
              next: null
            };
            u === null ? n = u = i : u = u.next = i, e = e.next;
          } while (e !== null);
          u === null ? n = u = l : u = u.next = l;
        } else n = u = l;
        e = {
          baseState: a.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: u,
          shared: a.shared,
          callbacks: a.callbacks
        }, t.updateQueue = e;
        return;
      }
      t = e.lastBaseUpdate, t === null ? e.firstBaseUpdate = l : t.next = l, e.lastBaseUpdate = l;
    }
    var lc = false;
    function nn() {
      if (lc) {
        var t = ha;
        if (t !== null) throw t;
      }
    }
    function un(t, l, e, a) {
      lc = false;
      var n = t.updateQueue;
      re = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, c = n.shared.pending;
      if (c !== null) {
        n.shared.pending = null;
        var d = c, b = d.next;
        d.next = null, i === null ? u = b : i.next = b, i = d;
        var E = t.alternate;
        E !== null && (E = E.updateQueue, c = E.lastBaseUpdate, c !== i && (c === null ? E.firstBaseUpdate = b : c.next = b, E.lastBaseUpdate = d));
      }
      if (u !== null) {
        var M = n.baseState;
        i = 0, E = b = d = null, c = u;
        do {
          var _ = c.lane & -536870913, p = _ !== c.lane;
          if (p ? (I & _) === _ : (a & _) === _) {
            _ !== 0 && _ === ya && (lc = true), E !== null && (E = E.next = {
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: null,
              next: null
            });
            t: {
              var B = t, L = c;
              _ = l;
              var mt = e;
              switch (L.tag) {
                case 1:
                  if (B = L.payload, typeof B == "function") {
                    M = B.call(mt, M, _);
                    break t;
                  }
                  M = B;
                  break t;
                case 3:
                  B.flags = B.flags & -65537 | 128;
                case 0:
                  if (B = L.payload, _ = typeof B == "function" ? B.call(mt, M, _) : B, _ == null) break t;
                  M = U({}, M, _);
                  break t;
                case 2:
                  re = true;
              }
            }
            _ = c.callback, _ !== null && (t.flags |= 64, p && (t.flags |= 8192), p = n.callbacks, p === null ? n.callbacks = [
              _
            ] : p.push(_));
          } else p = {
            lane: _,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, E === null ? (b = E = p, d = M) : E = E.next = p, i |= _;
          if (c = c.next, c === null) {
            if (c = n.shared.pending, c === null) break;
            p = c, c = p.next, p.next = null, n.lastBaseUpdate = p, n.shared.pending = null;
          }
        } while (true);
        E === null && (d = M), n.baseState = d, n.firstBaseUpdate = b, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), be |= i, t.lanes = i, t.memoizedState = M;
      }
    }
    function Is(t, l) {
      if (typeof t != "function") throw Error(o(191, t));
      t.call(l);
    }
    function Ps(t, l) {
      var e = t.callbacks;
      if (e !== null) for (t.callbacks = null, t = 0; t < e.length; t++) Is(e[t], l);
    }
    var ba = r(null), mu = r(0);
    function to(t, l) {
      t = le, O(mu, t), O(ba, l), le = t | l.baseLanes;
    }
    function ec() {
      O(mu, le), O(ba, ba.current);
    }
    function ac() {
      le = mu.current, S(ba), S(mu);
    }
    var fl = r(null), El = null;
    function ye(t) {
      var l = t.alternate;
      O(xt, xt.current & 1), O(fl, t), El === null && (l === null || ba.current !== null || l.memoizedState !== null) && (El = t);
    }
    function nc(t) {
      O(xt, xt.current), O(fl, t), El === null && (El = t);
    }
    function lo(t) {
      t.tag === 22 ? (O(xt, xt.current), O(fl, t), El === null && (El = t)) : he();
    }
    function he() {
      O(xt, xt.current), O(fl, fl.current);
    }
    function sl(t) {
      S(fl), El === t && (El = null), S(xt);
    }
    var xt = r(0);
    function yu(t) {
      for (var l = t; l !== null; ) {
        if (l.tag === 13) {
          var e = l.memoizedState;
          if (e !== null && (e = e.dehydrated, e === null || rf(e) || df(e))) return l;
        } else if (l.tag === 19 && (l.memoizedProps.revealOrder === "forwards" || l.memoizedProps.revealOrder === "backwards" || l.memoizedProps.revealOrder === "unstable_legacy-backwards" || l.memoizedProps.revealOrder === "together")) {
          if ((l.flags & 128) !== 0) return l;
        } else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) return null;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      return null;
    }
    var Jl = 0, K = null, rt = null, Ot = null, hu = false, _a = false, Ve = false, gu = 0, cn = 0, pa = null, _y = 0;
    function zt() {
      throw Error(o(321));
    }
    function uc(t, l) {
      if (l === null) return false;
      for (var e = 0; e < l.length && e < t.length; e++) if (!il(t[e], l[e])) return false;
      return true;
    }
    function ic(t, l, e, a, n, u) {
      return Jl = u, K = l, l.memoizedState = null, l.updateQueue = null, l.lanes = 0, x.H = t === null || t.memoizedState === null ? Yo : Sc, Ve = false, u = e(a, n), Ve = false, _a && (u = ao(l, e, a, n)), eo(t), u;
    }
    function eo(t) {
      x.H = on;
      var l = rt !== null && rt.next !== null;
      if (Jl = 0, Ot = rt = K = null, hu = false, cn = 0, pa = null, l) throw Error(o(300));
      t === null || jt || (t = t.dependencies, t !== null && iu(t) && (jt = true));
    }
    function ao(t, l, e, a) {
      K = t;
      var n = 0;
      do {
        if (_a && (pa = null), cn = 0, _a = false, 25 <= n) throw Error(o(301));
        if (n += 1, Ot = rt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        x.H = Go, u = l(e, a);
      } while (_a);
      return u;
    }
    function py() {
      var t = x.H, l = t.useState()[0];
      return l = typeof l.then == "function" ? fn(l) : l, t = t.useState()[0], (rt !== null ? rt.memoizedState : null) !== t && (K.flags |= 1024), l;
    }
    function cc() {
      var t = gu !== 0;
      return gu = 0, t;
    }
    function fc(t, l, e) {
      l.updateQueue = t.updateQueue, l.flags &= -2053, t.lanes &= ~e;
    }
    function sc(t) {
      if (hu) {
        for (t = t.memoizedState; t !== null; ) {
          var l = t.queue;
          l !== null && (l.pending = null), t = t.next;
        }
        hu = false;
      }
      Jl = 0, Ot = rt = K = null, _a = false, cn = gu = 0, pa = null;
    }
    function Jt() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ot === null ? K.memoizedState = Ot = t : Ot = Ot.next = t, Ot;
    }
    function Tt() {
      if (rt === null) {
        var t = K.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = rt.next;
      var l = Ot === null ? K.memoizedState : Ot.next;
      if (l !== null) Ot = l, rt = t;
      else {
        if (t === null) throw K.alternate === null ? Error(o(467)) : Error(o(310));
        rt = t, t = {
          memoizedState: rt.memoizedState,
          baseState: rt.baseState,
          baseQueue: rt.baseQueue,
          queue: rt.queue,
          next: null
        }, Ot === null ? K.memoizedState = Ot = t : Ot = Ot.next = t;
      }
      return Ot;
    }
    function vu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function fn(t) {
      var l = cn;
      return cn += 1, pa === null && (pa = []), t = Js(pa, t, l), l = K, (Ot === null ? l.memoizedState : Ot.next) === null && (l = l.alternate, x.H = l === null || l.memoizedState === null ? Yo : Sc), t;
    }
    function bu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return fn(t);
        if (t.$$typeof === At) return qt(t);
      }
      throw Error(o(438, String(t)));
    }
    function oc(t) {
      var l = null, e = K.updateQueue;
      if (e !== null && (l = e.memoCache), l == null) {
        var a = K.alternate;
        a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (l = {
          data: a.data.map(function(n) {
            return n.slice();
          }),
          index: 0
        })));
      }
      if (l == null && (l = {
        data: [],
        index: 0
      }), e === null && (e = vu(), K.updateQueue = e), e.memoCache = l, e = l.data[l.index], e === void 0) for (e = l.data[l.index] = Array(t), a = 0; a < t; a++) e[a] = ql;
      return l.index++, e;
    }
    function kl(t, l) {
      return typeof l == "function" ? l(t) : l;
    }
    function _u(t) {
      var l = Tt();
      return rc(l, rt, t);
    }
    function rc(t, l, e) {
      var a = t.queue;
      if (a === null) throw Error(o(311));
      a.lastRenderedReducer = e;
      var n = t.baseQueue, u = a.pending;
      if (u !== null) {
        if (n !== null) {
          var i = n.next;
          n.next = u.next, u.next = i;
        }
        l.baseQueue = n = u, a.pending = null;
      }
      if (u = t.baseState, n === null) t.memoizedState = u;
      else {
        l = n.next;
        var c = i = null, d = null, b = l, E = false;
        do {
          var M = b.lane & -536870913;
          if (M !== b.lane ? (I & M) === M : (Jl & M) === M) {
            var _ = b.revertLane;
            if (_ === 0) d !== null && (d = d.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }), M === ya && (E = true);
            else if ((Jl & _) === _) {
              b = b.next, _ === ya && (E = true);
              continue;
            } else M = {
              lane: 0,
              revertLane: b.revertLane,
              gesture: null,
              action: b.action,
              hasEagerState: b.hasEagerState,
              eagerState: b.eagerState,
              next: null
            }, d === null ? (c = d = M, i = u) : d = d.next = M, K.lanes |= _, be |= _;
            M = b.action, Ve && e(u, M), u = b.hasEagerState ? b.eagerState : e(u, M);
          } else _ = {
            lane: M,
            revertLane: b.revertLane,
            gesture: b.gesture,
            action: b.action,
            hasEagerState: b.hasEagerState,
            eagerState: b.eagerState,
            next: null
          }, d === null ? (c = d = _, i = u) : d = d.next = _, K.lanes |= M, be |= M;
          b = b.next;
        } while (b !== null && b !== l);
        if (d === null ? i = u : d.next = c, !il(u, t.memoizedState) && (jt = true, E && (e = ha, e !== null))) throw e;
        t.memoizedState = u, t.baseState = i, t.baseQueue = d, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function dc(t) {
      var l = Tt(), e = l.queue;
      if (e === null) throw Error(o(311));
      e.lastRenderedReducer = t;
      var a = e.dispatch, n = e.pending, u = l.memoizedState;
      if (n !== null) {
        e.pending = null;
        var i = n = n.next;
        do
          u = t(u, i.action), i = i.next;
        while (i !== n);
        il(u, l.memoizedState) || (jt = true), l.memoizedState = u, l.baseQueue === null && (l.baseState = u), e.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function no(t, l, e) {
      var a = K, n = Tt(), u = tt;
      if (u) {
        if (e === void 0) throw Error(o(407));
        e = e();
      } else e = l();
      var i = !il((rt || n).memoizedState, e);
      if (i && (n.memoizedState = e, jt = true), n = n.queue, hc(co.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== l || i || Ot !== null && Ot.memoizedState.tag & 1) {
        if (a.flags |= 2048, Sa(9, {
          destroy: void 0
        }, io.bind(null, a, n, e, l), null), ht === null) throw Error(o(349));
        u || (Jl & 127) !== 0 || uo(a, l, e);
      }
      return e;
    }
    function uo(t, l, e) {
      t.flags |= 16384, t = {
        getSnapshot: l,
        value: e
      }, l = K.updateQueue, l === null ? (l = vu(), K.updateQueue = l, l.stores = [
        t
      ]) : (e = l.stores, e === null ? l.stores = [
        t
      ] : e.push(t));
    }
    function io(t, l, e, a) {
      l.value = e, l.getSnapshot = a, fo(l) && so(t);
    }
    function co(t, l, e) {
      return e(function() {
        fo(l) && so(t);
      });
    }
    function fo(t) {
      var l = t.getSnapshot;
      t = t.value;
      try {
        var e = l();
        return !il(t, e);
      } catch {
        return true;
      }
    }
    function so(t) {
      var l = He(t, 2);
      l !== null && ll(l, t, 2);
    }
    function mc(t) {
      var l = Jt();
      if (typeof t == "function") {
        var e = t;
        if (t = e(), Ve) {
          ne(true);
          try {
            e();
          } finally {
            ne(false);
          }
        }
      }
      return l.memoizedState = l.baseState = t, l.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: kl,
        lastRenderedState: t
      }, l;
    }
    function oo(t, l, e, a) {
      return t.baseState = e, rc(t, rt, typeof a == "function" ? a : kl);
    }
    function Sy(t, l, e, a, n) {
      if (zu(t)) throw Error(o(485));
      if (t = l.action, t !== null) {
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
        x.T !== null ? e(true) : u.isTransition = false, a(u), e = l.pending, e === null ? (u.next = l.pending = u, ro(l, u)) : (u.next = e.next, l.pending = e.next = u);
      }
    }
    function ro(t, l) {
      var e = l.action, a = l.payload, n = t.state;
      if (l.isTransition) {
        var u = x.T, i = {};
        x.T = i;
        try {
          var c = e(n, a), d = x.S;
          d !== null && d(i, c), mo(t, l, c);
        } catch (b) {
          yc(t, l, b);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), x.T = u;
        }
      } else try {
        u = e(n, a), mo(t, l, u);
      } catch (b) {
        yc(t, l, b);
      }
    }
    function mo(t, l, e) {
      e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(function(a) {
        yo(t, l, a);
      }, function(a) {
        return yc(t, l, a);
      }) : yo(t, l, e);
    }
    function yo(t, l, e) {
      l.status = "fulfilled", l.value = e, ho(l), t.state = e, l = t.pending, l !== null && (e = l.next, e === l ? t.pending = null : (e = e.next, l.next = e, ro(t, e)));
    }
    function yc(t, l, e) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          l.status = "rejected", l.reason = e, ho(l), l = l.next;
        while (l !== a);
      }
      t.action = null;
    }
    function ho(t) {
      t = t.listeners;
      for (var l = 0; l < t.length; l++) (0, t[l])();
    }
    function go(t, l) {
      return l;
    }
    function vo(t, l) {
      if (tt) {
        var e = ht.formState;
        if (e !== null) {
          t: {
            var a = K;
            if (tt) {
              if (vt) {
                l: {
                  for (var n = vt, u = zl; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break l;
                    }
                    if (n = Al(n.nextSibling), n === null) {
                      n = null;
                      break l;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  vt = Al(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              se(a);
            }
            a = false;
          }
          a && (l = e[0]);
        }
      }
      return e = Jt(), e.memoizedState = e.baseState = l, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: go,
        lastRenderedState: l
      }, e.queue = a, e = Ho.bind(null, K, a), a.dispatch = e, a = mc(false), u = pc.bind(null, K, false, a.queue), a = Jt(), n = {
        state: l,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = n, e = Sy.bind(null, K, n, u, e), n.dispatch = e, a.memoizedState = t, [
        l,
        e,
        false
      ];
    }
    function bo(t) {
      var l = Tt();
      return _o(l, rt, t);
    }
    function _o(t, l, e) {
      if (l = rc(t, l, go)[0], t = _u(kl)[0], typeof l == "object" && l !== null && typeof l.then == "function") try {
        var a = fn(l);
      } catch (i) {
        throw i === ga ? su : i;
      }
      else a = l;
      l = Tt();
      var n = l.queue, u = n.dispatch;
      return e !== l.memoizedState && (K.flags |= 2048, Sa(9, {
        destroy: void 0
      }, zy.bind(null, n, e), null)), [
        a,
        u,
        t
      ];
    }
    function zy(t, l) {
      t.action = l;
    }
    function po(t) {
      var l = Tt(), e = rt;
      if (e !== null) return _o(l, e, t);
      Tt(), l = l.memoizedState, e = Tt();
      var a = e.queue.dispatch;
      return e.memoizedState = t, [
        l,
        a,
        false
      ];
    }
    function Sa(t, l, e, a) {
      return t = {
        tag: t,
        create: e,
        deps: a,
        inst: l,
        next: null
      }, l = K.updateQueue, l === null && (l = vu(), K.updateQueue = l), e = l.lastEffect, e === null ? l.lastEffect = t.next = t : (a = e.next, e.next = t, t.next = a, l.lastEffect = t), t;
    }
    function So() {
      return Tt().memoizedState;
    }
    function pu(t, l, e, a) {
      var n = Jt();
      K.flags |= t, n.memoizedState = Sa(1 | l, {
        destroy: void 0
      }, e, a === void 0 ? null : a);
    }
    function Su(t, l, e, a) {
      var n = Tt();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      rt !== null && a !== null && uc(a, rt.memoizedState.deps) ? n.memoizedState = Sa(l, u, e, a) : (K.flags |= t, n.memoizedState = Sa(1 | l, u, e, a));
    }
    function zo(t, l) {
      pu(8390656, 8, t, l);
    }
    function hc(t, l) {
      Su(2048, 8, t, l);
    }
    function Ey(t) {
      K.flags |= 4;
      var l = K.updateQueue;
      if (l === null) l = vu(), K.updateQueue = l, l.events = [
        t
      ];
      else {
        var e = l.events;
        e === null ? l.events = [
          t
        ] : e.push(t);
      }
    }
    function Eo(t) {
      var l = Tt().memoizedState;
      return Ey({
        ref: l,
        nextImpl: t
      }), function() {
        if ((ut & 2) !== 0) throw Error(o(440));
        return l.impl.apply(void 0, arguments);
      };
    }
    function Ao(t, l) {
      return Su(4, 2, t, l);
    }
    function xo(t, l) {
      return Su(4, 4, t, l);
    }
    function To(t, l) {
      if (typeof l == "function") {
        t = t();
        var e = l(t);
        return function() {
          typeof e == "function" ? e() : l(null);
        };
      }
      if (l != null) return t = t(), l.current = t, function() {
        l.current = null;
      };
    }
    function Mo(t, l, e) {
      e = e != null ? e.concat([
        t
      ]) : null, Su(4, 4, To.bind(null, l, t), e);
    }
    function gc() {
    }
    function No(t, l) {
      var e = Tt();
      l = l === void 0 ? null : l;
      var a = e.memoizedState;
      return l !== null && uc(l, a[1]) ? a[0] : (e.memoizedState = [
        t,
        l
      ], t);
    }
    function Oo(t, l) {
      var e = Tt();
      l = l === void 0 ? null : l;
      var a = e.memoizedState;
      if (l !== null && uc(l, a[1])) return a[0];
      if (a = t(), Ve) {
        ne(true);
        try {
          t();
        } finally {
          ne(false);
        }
      }
      return e.memoizedState = [
        a,
        l
      ], a;
    }
    function vc(t, l, e) {
      return e === void 0 || (Jl & 1073741824) !== 0 && (I & 261930) === 0 ? t.memoizedState = l : (t.memoizedState = e, t = jr(), K.lanes |= t, be |= t, e);
    }
    function jo(t, l, e, a) {
      return il(e, l) ? e : ba.current !== null ? (t = vc(t, e, a), il(t, l) || (jt = true), t) : (Jl & 42) === 0 || (Jl & 1073741824) !== 0 && (I & 261930) === 0 ? (jt = true, t.memoizedState = e) : (t = jr(), K.lanes |= t, be |= t, l);
    }
    function Uo(t, l, e, a, n) {
      var u = w.p;
      w.p = u !== 0 && 8 > u ? u : 8;
      var i = x.T, c = {};
      x.T = c, pc(t, false, l, e);
      try {
        var d = n(), b = x.S;
        if (b !== null && b(c, d), d !== null && typeof d == "object" && typeof d.then == "function") {
          var E = by(d, a);
          sn(t, l, E, dl(t));
        } else sn(t, l, a, dl(t));
      } catch (M) {
        sn(t, l, {
          then: function() {
          },
          status: "rejected",
          reason: M
        }, dl());
      } finally {
        w.p = u, i !== null && c.types !== null && (i.types = c.types), x.T = i;
      }
    }
    function Ay() {
    }
    function bc(t, l, e, a) {
      if (t.tag !== 5) throw Error(o(476));
      var n = Do(t).queue;
      Uo(t, n, l, Q, e === null ? Ay : function() {
        return Ro(t), e(a);
      });
    }
    function Do(t) {
      var l = t.memoizedState;
      if (l !== null) return l;
      l = {
        memoizedState: Q,
        baseState: Q,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: kl,
          lastRenderedState: Q
        },
        next: null
      };
      var e = {};
      return l.next = {
        memoizedState: e,
        baseState: e,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: kl,
          lastRenderedState: e
        },
        next: null
      }, t.memoizedState = l, t = t.alternate, t !== null && (t.memoizedState = l), l;
    }
    function Ro(t) {
      var l = Do(t);
      l.next === null && (l = t.alternate.memoizedState), sn(t, l.next.queue, {}, dl());
    }
    function _c() {
      return qt(Tn);
    }
    function wo() {
      return Tt().memoizedState;
    }
    function Co() {
      return Tt().memoizedState;
    }
    function xy(t) {
      for (var l = t.return; l !== null; ) {
        switch (l.tag) {
          case 24:
          case 3:
            var e = dl();
            t = de(e);
            var a = me(l, t, e);
            a !== null && (ll(a, l, e), an(a, l, e)), l = {
              cache: ki()
            }, t.payload = l;
            return;
        }
        l = l.return;
      }
    }
    function Ty(t, l, e) {
      var a = dl();
      e = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, zu(t) ? Bo(l, e) : (e = Bi(t, l, e, a), e !== null && (ll(e, t, a), qo(e, l, a)));
    }
    function Ho(t, l, e) {
      var a = dl();
      sn(t, l, e, a);
    }
    function sn(t, l, e, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: e,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (zu(t)) Bo(l, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = l.lastRenderedReducer, u !== null)) try {
          var i = l.lastRenderedState, c = u(i, e);
          if (n.hasEagerState = true, n.eagerState = c, il(c, i)) return eu(t, l, n, 0), ht === null && lu(), false;
        } catch {
        } finally {
        }
        if (e = Bi(t, l, n, a), e !== null) return ll(e, t, a), qo(e, l, a), true;
      }
      return false;
    }
    function pc(t, l, e, a) {
      if (a = {
        lane: 2,
        revertLane: Ic(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, zu(t)) {
        if (l) throw Error(o(479));
      } else l = Bi(t, e, a, 2), l !== null && ll(l, t, 2);
    }
    function zu(t) {
      var l = t.alternate;
      return t === K || l !== null && l === K;
    }
    function Bo(t, l) {
      _a = hu = true;
      var e = t.pending;
      e === null ? l.next = l : (l.next = e.next, e.next = l), t.pending = l;
    }
    function qo(t, l, e) {
      if ((e & 4194048) !== 0) {
        var a = l.lanes;
        a &= t.pendingLanes, e |= a, l.lanes = e, Xf(t, e);
      }
    }
    var on = {
      readContext: qt,
      use: bu,
      useCallback: zt,
      useContext: zt,
      useEffect: zt,
      useImperativeHandle: zt,
      useLayoutEffect: zt,
      useInsertionEffect: zt,
      useMemo: zt,
      useReducer: zt,
      useRef: zt,
      useState: zt,
      useDebugValue: zt,
      useDeferredValue: zt,
      useTransition: zt,
      useSyncExternalStore: zt,
      useId: zt,
      useHostTransitionStatus: zt,
      useFormState: zt,
      useActionState: zt,
      useOptimistic: zt,
      useMemoCache: zt,
      useCacheRefresh: zt
    };
    on.useEffectEvent = zt;
    var Yo = {
      readContext: qt,
      use: bu,
      useCallback: function(t, l) {
        return Jt().memoizedState = [
          t,
          l === void 0 ? null : l
        ], t;
      },
      useContext: qt,
      useEffect: zo,
      useImperativeHandle: function(t, l, e) {
        e = e != null ? e.concat([
          t
        ]) : null, pu(4194308, 4, To.bind(null, l, t), e);
      },
      useLayoutEffect: function(t, l) {
        return pu(4194308, 4, t, l);
      },
      useInsertionEffect: function(t, l) {
        pu(4, 2, t, l);
      },
      useMemo: function(t, l) {
        var e = Jt();
        l = l === void 0 ? null : l;
        var a = t();
        if (Ve) {
          ne(true);
          try {
            t();
          } finally {
            ne(false);
          }
        }
        return e.memoizedState = [
          a,
          l
        ], a;
      },
      useReducer: function(t, l, e) {
        var a = Jt();
        if (e !== void 0) {
          var n = e(l);
          if (Ve) {
            ne(true);
            try {
              e(l);
            } finally {
              ne(false);
            }
          }
        } else n = l;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = Ty.bind(null, K, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var l = Jt();
        return t = {
          current: t
        }, l.memoizedState = t;
      },
      useState: function(t) {
        t = mc(t);
        var l = t.queue, e = Ho.bind(null, K, l);
        return l.dispatch = e, [
          t.memoizedState,
          e
        ];
      },
      useDebugValue: gc,
      useDeferredValue: function(t, l) {
        var e = Jt();
        return vc(e, t, l);
      },
      useTransition: function() {
        var t = mc(false);
        return t = Uo.bind(null, K, t.queue, true, false), Jt().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, l, e) {
        var a = K, n = Jt();
        if (tt) {
          if (e === void 0) throw Error(o(407));
          e = e();
        } else {
          if (e = l(), ht === null) throw Error(o(349));
          (I & 127) !== 0 || uo(a, l, e);
        }
        n.memoizedState = e;
        var u = {
          value: e,
          getSnapshot: l
        };
        return n.queue = u, zo(co.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, Sa(9, {
          destroy: void 0
        }, io.bind(null, a, u, e, l), null), e;
      },
      useId: function() {
        var t = Jt(), l = ht.identifierPrefix;
        if (tt) {
          var e = wl, a = Rl;
          e = (a & ~(1 << 32 - ul(a) - 1)).toString(32) + e, l = "_" + l + "R_" + e, e = gu++, 0 < e && (l += "H" + e.toString(32)), l += "_";
        } else e = _y++, l = "_" + l + "r_" + e.toString(32) + "_";
        return t.memoizedState = l;
      },
      useHostTransitionStatus: _c,
      useFormState: vo,
      useActionState: vo,
      useOptimistic: function(t) {
        var l = Jt();
        l.memoizedState = l.baseState = t;
        var e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return l.queue = e, l = pc.bind(null, K, true, e), e.dispatch = l, [
          t,
          l
        ];
      },
      useMemoCache: oc,
      useCacheRefresh: function() {
        return Jt().memoizedState = xy.bind(null, K);
      },
      useEffectEvent: function(t) {
        var l = Jt(), e = {
          impl: t
        };
        return l.memoizedState = e, function() {
          if ((ut & 2) !== 0) throw Error(o(440));
          return e.impl.apply(void 0, arguments);
        };
      }
    }, Sc = {
      readContext: qt,
      use: bu,
      useCallback: No,
      useContext: qt,
      useEffect: hc,
      useImperativeHandle: Mo,
      useInsertionEffect: Ao,
      useLayoutEffect: xo,
      useMemo: Oo,
      useReducer: _u,
      useRef: So,
      useState: function() {
        return _u(kl);
      },
      useDebugValue: gc,
      useDeferredValue: function(t, l) {
        var e = Tt();
        return jo(e, rt.memoizedState, t, l);
      },
      useTransition: function() {
        var t = _u(kl)[0], l = Tt().memoizedState;
        return [
          typeof t == "boolean" ? t : fn(t),
          l
        ];
      },
      useSyncExternalStore: no,
      useId: wo,
      useHostTransitionStatus: _c,
      useFormState: bo,
      useActionState: bo,
      useOptimistic: function(t, l) {
        var e = Tt();
        return oo(e, rt, t, l);
      },
      useMemoCache: oc,
      useCacheRefresh: Co
    };
    Sc.useEffectEvent = Eo;
    var Go = {
      readContext: qt,
      use: bu,
      useCallback: No,
      useContext: qt,
      useEffect: hc,
      useImperativeHandle: Mo,
      useInsertionEffect: Ao,
      useLayoutEffect: xo,
      useMemo: Oo,
      useReducer: dc,
      useRef: So,
      useState: function() {
        return dc(kl);
      },
      useDebugValue: gc,
      useDeferredValue: function(t, l) {
        var e = Tt();
        return rt === null ? vc(e, t, l) : jo(e, rt.memoizedState, t, l);
      },
      useTransition: function() {
        var t = dc(kl)[0], l = Tt().memoizedState;
        return [
          typeof t == "boolean" ? t : fn(t),
          l
        ];
      },
      useSyncExternalStore: no,
      useId: wo,
      useHostTransitionStatus: _c,
      useFormState: po,
      useActionState: po,
      useOptimistic: function(t, l) {
        var e = Tt();
        return rt !== null ? oo(e, rt, t, l) : (e.baseState = t, [
          t,
          e.queue.dispatch
        ]);
      },
      useMemoCache: oc,
      useCacheRefresh: Co
    };
    Go.useEffectEvent = Eo;
    function zc(t, l, e, a) {
      l = t.memoizedState, e = e(a, l), e = e == null ? l : U({}, l, e), t.memoizedState = e, t.lanes === 0 && (t.updateQueue.baseState = e);
    }
    var Ec = {
      enqueueSetState: function(t, l, e) {
        t = t._reactInternals;
        var a = dl(), n = de(a);
        n.payload = l, e != null && (n.callback = e), l = me(t, n, a), l !== null && (ll(l, t, a), an(l, t, a));
      },
      enqueueReplaceState: function(t, l, e) {
        t = t._reactInternals;
        var a = dl(), n = de(a);
        n.tag = 1, n.payload = l, e != null && (n.callback = e), l = me(t, n, a), l !== null && (ll(l, t, a), an(l, t, a));
      },
      enqueueForceUpdate: function(t, l) {
        t = t._reactInternals;
        var e = dl(), a = de(e);
        a.tag = 2, l != null && (a.callback = l), l = me(t, a, e), l !== null && (ll(l, t, e), an(l, t, e));
      }
    };
    function Lo(t, l, e, a, n, u, i) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : l.prototype && l.prototype.isPureReactComponent ? !Wa(e, a) || !Wa(n, u) : true;
    }
    function Xo(t, l, e, a) {
      t = l.state, typeof l.componentWillReceiveProps == "function" && l.componentWillReceiveProps(e, a), typeof l.UNSAFE_componentWillReceiveProps == "function" && l.UNSAFE_componentWillReceiveProps(e, a), l.state !== t && Ec.enqueueReplaceState(l, l.state, null);
    }
    function Ke(t, l) {
      var e = l;
      if ("ref" in l) {
        e = {};
        for (var a in l) a !== "ref" && (e[a] = l[a]);
      }
      if (t = t.defaultProps) {
        e === l && (e = U({}, e));
        for (var n in t) e[n] === void 0 && (e[n] = t[n]);
      }
      return e;
    }
    function Qo(t) {
      tu(t);
    }
    function Zo(t) {
      console.error(t);
    }
    function Vo(t) {
      tu(t);
    }
    function Eu(t, l) {
      try {
        var e = t.onUncaughtError;
        e(l.value, {
          componentStack: l.stack
        });
      } catch (a) {
        setTimeout(function() {
          throw a;
        });
      }
    }
    function Ko(t, l, e) {
      try {
        var a = t.onCaughtError;
        a(e.value, {
          componentStack: e.stack,
          errorBoundary: l.tag === 1 ? l.stateNode : null
        });
      } catch (n) {
        setTimeout(function() {
          throw n;
        });
      }
    }
    function Ac(t, l, e) {
      return e = de(e), e.tag = 3, e.payload = {
        element: null
      }, e.callback = function() {
        Eu(t, l);
      }, e;
    }
    function Jo(t) {
      return t = de(t), t.tag = 3, t;
    }
    function ko(t, l, e, a) {
      var n = e.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        t.payload = function() {
          return n(u);
        }, t.callback = function() {
          Ko(l, e, a);
        };
      }
      var i = e.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        Ko(l, e, a), typeof n != "function" && (_e === null ? _e = /* @__PURE__ */ new Set([
          this
        ]) : _e.add(this));
        var c = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: c !== null ? c : ""
        });
      });
    }
    function My(t, l, e, a, n) {
      if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (l = e.alternate, l !== null && ma(l, e, n, true), e = fl.current, e !== null) {
          switch (e.tag) {
            case 31:
            case 13:
              return El === null ? Cu() : e.alternate === null && Et === 0 && (Et = 3), e.flags &= -257, e.flags |= 65536, e.lanes = n, a === ou ? e.flags |= 16384 : (l = e.updateQueue, l === null ? e.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a), Wc(t, a, n)), false;
            case 22:
              return e.flags |= 65536, a === ou ? e.flags |= 16384 : (l = e.updateQueue, l === null ? (l = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, e.updateQueue = l) : (e = l.retryQueue, e === null ? l.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a)), Wc(t, a, n)), false;
          }
          throw Error(o(435, e.tag));
        }
        return Wc(t, a, n), Cu(), false;
      }
      if (tt) return l = fl.current, l !== null ? ((l.flags & 65536) === 0 && (l.flags |= 256), l.flags |= 65536, l.lanes = n, a !== Qi && (t = Error(o(422), {
        cause: a
      }), Ia(_l(t, e)))) : (a !== Qi && (l = Error(o(423), {
        cause: a
      }), Ia(_l(l, e))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = _l(a, e), n = Ac(t.stateNode, a, n), tc(t, n), Et !== 4 && (Et = 2)), false;
      var u = Error(o(520), {
        cause: a
      });
      if (u = _l(u, e), bn === null ? bn = [
        u
      ] : bn.push(u), Et !== 4 && (Et = 2), l === null) return true;
      a = _l(a, e), e = l;
      do {
        switch (e.tag) {
          case 3:
            return e.flags |= 65536, t = n & -n, e.lanes |= t, t = Ac(e.stateNode, a, t), tc(e, t), false;
          case 1:
            if (l = e.type, u = e.stateNode, (e.flags & 128) === 0 && (typeof l.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (_e === null || !_e.has(u)))) return e.flags |= 65536, n &= -n, e.lanes |= n, n = Jo(n), ko(n, t, e, a), tc(e, n), false;
        }
        e = e.return;
      } while (e !== null);
      return false;
    }
    var xc = Error(o(461)), jt = false;
    function Yt(t, l, e, a) {
      l.child = t === null ? $s(l, null, e, a) : Ze(l, t.child, e, a);
    }
    function Wo(t, l, e, a, n) {
      e = e.render;
      var u = l.ref;
      if ("ref" in a) {
        var i = {};
        for (var c in a) c !== "ref" && (i[c] = a[c]);
      } else i = a;
      return Ge(l), a = ic(t, l, e, i, u, n), c = cc(), t !== null && !jt ? (fc(t, l, n), Wl(t, l, n)) : (tt && c && Li(l), l.flags |= 1, Yt(t, l, a, n), l.child);
    }
    function Fo(t, l, e, a, n) {
      if (t === null) {
        var u = e.type;
        return typeof u == "function" && !qi(u) && u.defaultProps === void 0 && e.compare === null ? (l.tag = 15, l.type = u, $o(t, l, u, a, n)) : (t = nu(e.type, null, a, l, l.mode, n), t.ref = l.ref, t.return = l, l.child = t);
      }
      if (u = t.child, !Rc(t, n)) {
        var i = u.memoizedProps;
        if (e = e.compare, e = e !== null ? e : Wa, e(i, a) && t.ref === l.ref) return Wl(t, l, n);
      }
      return l.flags |= 1, t = Ql(u, a), t.ref = l.ref, t.return = l, l.child = t;
    }
    function $o(t, l, e, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (Wa(u, a) && t.ref === l.ref) if (jt = false, l.pendingProps = a = u, Rc(t, n)) (t.flags & 131072) !== 0 && (jt = true);
        else return l.lanes = t.lanes, Wl(t, l, n);
      }
      return Tc(t, l, e, a, n);
    }
    function Io(t, l, e, a) {
      var n = a.children, u = t !== null ? t.memoizedState : null;
      if (t === null && l.stateNode === null && (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), a.mode === "hidden") {
        if ((l.flags & 128) !== 0) {
          if (u = u !== null ? u.baseLanes | e : e, t !== null) {
            for (a = l.child = t.child, n = 0; a !== null; ) n = n | a.lanes | a.childLanes, a = a.sibling;
            a = n & ~u;
          } else a = 0, l.child = null;
          return Po(t, l, u, e, a);
        }
        if ((e & 536870912) !== 0) l.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && fu(l, u !== null ? u.cachePool : null), u !== null ? to(l, u) : ec(), lo(l);
        else return a = l.lanes = 536870912, Po(t, l, u !== null ? u.baseLanes | e : e, e, a);
      } else u !== null ? (fu(l, u.cachePool), to(l, u), he(), l.memoizedState = null) : (t !== null && fu(l, null), ec(), he());
      return Yt(t, l, n, e), l.child;
    }
    function rn(t, l) {
      return t !== null && t.tag === 22 || l.stateNode !== null || (l.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), l.sibling;
    }
    function Po(t, l, e, a, n) {
      var u = Fi();
      return u = u === null ? null : {
        parent: Nt._currentValue,
        pool: u
      }, l.memoizedState = {
        baseLanes: e,
        cachePool: u
      }, t !== null && fu(l, null), ec(), lo(l), t !== null && ma(t, l, a, true), l.childLanes = n, null;
    }
    function Au(t, l) {
      return l = Tu({
        mode: l.mode,
        children: l.children
      }, t.mode), l.ref = t.ref, t.child = l, l.return = t, l;
    }
    function tr(t, l, e) {
      return Ze(l, t.child, null, e), t = Au(l, l.pendingProps), t.flags |= 2, sl(l), l.memoizedState = null, t;
    }
    function Ny(t, l, e) {
      var a = l.pendingProps, n = (l.flags & 128) !== 0;
      if (l.flags &= -129, t === null) {
        if (tt) {
          if (a.mode === "hidden") return t = Au(l, a), l.lanes = 536870912, rn(null, t);
          if (nc(l), (t = vt) ? (t = dd(t, zl), t = t !== null && t.data === "&" ? t : null, t !== null && (l.memoizedState = {
            dehydrated: t,
            treeContext: ce !== null ? {
              id: Rl,
              overflow: wl
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Hs(t), e.return = l, l.child = e, Bt = l, vt = null)) : t = null, t === null) throw se(l);
          return l.lanes = 536870912, null;
        }
        return Au(l, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (nc(l), n) if (l.flags & 256) l.flags &= -257, l = tr(t, l, e);
        else if (l.memoizedState !== null) l.child = t.child, l.flags |= 128, l = null;
        else throw Error(o(558));
        else if (jt || ma(t, l, e, false), n = (e & t.childLanes) !== 0, jt || n) {
          if (a = ht, a !== null && (i = Qf(a, e), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, He(t, i), ll(a, t, i), xc;
          Cu(), l = tr(t, l, e);
        } else t = u.treeContext, vt = Al(i.nextSibling), Bt = l, tt = true, fe = null, zl = false, t !== null && Ys(l, t), l = Au(l, a), l.flags |= 4096;
        return l;
      }
      return t = Ql(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = l.ref, l.child = t, t.return = l, t;
    }
    function xu(t, l) {
      var e = l.ref;
      if (e === null) t !== null && t.ref !== null && (l.flags |= 4194816);
      else {
        if (typeof e != "function" && typeof e != "object") throw Error(o(284));
        (t === null || t.ref !== e) && (l.flags |= 4194816);
      }
    }
    function Tc(t, l, e, a, n) {
      return Ge(l), e = ic(t, l, e, a, void 0, n), a = cc(), t !== null && !jt ? (fc(t, l, n), Wl(t, l, n)) : (tt && a && Li(l), l.flags |= 1, Yt(t, l, e, n), l.child);
    }
    function lr(t, l, e, a, n, u) {
      return Ge(l), l.updateQueue = null, e = ao(l, a, e, n), eo(t), a = cc(), t !== null && !jt ? (fc(t, l, u), Wl(t, l, u)) : (tt && a && Li(l), l.flags |= 1, Yt(t, l, e, u), l.child);
    }
    function er(t, l, e, a, n) {
      if (Ge(l), l.stateNode === null) {
        var u = sa, i = e.contextType;
        typeof i == "object" && i !== null && (u = qt(i)), u = new e(a, u), l.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ec, l.stateNode = u, u._reactInternals = l, u = l.stateNode, u.props = a, u.state = l.memoizedState, u.refs = {}, Ii(l), i = e.contextType, u.context = typeof i == "object" && i !== null ? qt(i) : sa, u.state = l.memoizedState, i = e.getDerivedStateFromProps, typeof i == "function" && (zc(l, e, i, a), u.state = l.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && Ec.enqueueReplaceState(u, u.state, null), un(l, a, u, n), nn(), u.state = l.memoizedState), typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = true;
      } else if (t === null) {
        u = l.stateNode;
        var c = l.memoizedProps, d = Ke(e, c);
        u.props = d;
        var b = u.context, E = e.contextType;
        i = sa, typeof E == "object" && E !== null && (i = qt(E));
        var M = e.getDerivedStateFromProps;
        E = typeof M == "function" || typeof u.getSnapshotBeforeUpdate == "function", c = l.pendingProps !== c, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c || b !== i) && Xo(l, u, a, i), re = false;
        var _ = l.memoizedState;
        u.state = _, un(l, a, u, n), nn(), b = l.memoizedState, c || _ !== b || re ? (typeof M == "function" && (zc(l, e, M, a), b = l.memoizedState), (d = re || Lo(l, e, d, a, _, b, i)) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (l.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), l.memoizedProps = a, l.memoizedState = b), u.props = a, u.state = b, u.context = i, a = d) : (typeof u.componentDidMount == "function" && (l.flags |= 4194308), a = false);
      } else {
        u = l.stateNode, Pi(t, l), i = l.memoizedProps, E = Ke(e, i), u.props = E, M = l.pendingProps, _ = u.context, b = e.contextType, d = sa, typeof b == "object" && b !== null && (d = qt(b)), c = e.getDerivedStateFromProps, (b = typeof c == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== M || _ !== d) && Xo(l, u, a, d), re = false, _ = l.memoizedState, u.state = _, un(l, a, u, n), nn();
        var p = l.memoizedState;
        i !== M || _ !== p || re || t !== null && t.dependencies !== null && iu(t.dependencies) ? (typeof c == "function" && (zc(l, e, c, a), p = l.memoizedState), (E = re || Lo(l, e, E, a, _, p, d) || t !== null && t.dependencies !== null && iu(t.dependencies)) ? (b || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, p, d), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, p, d)), typeof u.componentDidUpdate == "function" && (l.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (l.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (l.flags |= 1024), l.memoizedProps = a, l.memoizedState = p), u.props = a, u.state = p, u.context = d, a = E) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (l.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && _ === t.memoizedState || (l.flags |= 1024), a = false);
      }
      return u = a, xu(t, l), a = (l.flags & 128) !== 0, u || a ? (u = l.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : u.render(), l.flags |= 1, t !== null && a ? (l.child = Ze(l, t.child, null, n), l.child = Ze(l, null, e, n)) : Yt(t, l, e, n), l.memoizedState = u.state, t = l.child) : t = Wl(t, l, n), t;
    }
    function ar(t, l, e, a) {
      return qe(), l.flags |= 256, Yt(t, l, e, a), l.child;
    }
    var Mc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Nc(t) {
      return {
        baseLanes: t,
        cachePool: Vs()
      };
    }
    function Oc(t, l, e) {
      return t = t !== null ? t.childLanes & ~e : 0, l && (t |= rl), t;
    }
    function nr(t, l, e) {
      var a = l.pendingProps, n = false, u = (l.flags & 128) !== 0, i;
      if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (xt.current & 2) !== 0), i && (n = true, l.flags &= -129), i = (l.flags & 32) !== 0, l.flags &= -33, t === null) {
        if (tt) {
          if (n ? ye(l) : he(), (t = vt) ? (t = dd(t, zl), t = t !== null && t.data !== "&" ? t : null, t !== null && (l.memoizedState = {
            dehydrated: t,
            treeContext: ce !== null ? {
              id: Rl,
              overflow: wl
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, e = Hs(t), e.return = l, l.child = e, Bt = l, vt = null)) : t = null, t === null) throw se(l);
          return df(t) ? l.lanes = 32 : l.lanes = 536870912, null;
        }
        var c = a.children;
        return a = a.fallback, n ? (he(), n = l.mode, c = Tu({
          mode: "hidden",
          children: c
        }, n), a = Be(a, n, e, null), c.return = l, a.return = l, c.sibling = a, l.child = c, a = l.child, a.memoizedState = Nc(e), a.childLanes = Oc(t, i, e), l.memoizedState = Mc, rn(null, a)) : (ye(l), jc(l, c));
      }
      var d = t.memoizedState;
      if (d !== null && (c = d.dehydrated, c !== null)) {
        if (u) l.flags & 256 ? (ye(l), l.flags &= -257, l = Uc(t, l, e)) : l.memoizedState !== null ? (he(), l.child = t.child, l.flags |= 128, l = null) : (he(), c = a.fallback, n = l.mode, a = Tu({
          mode: "visible",
          children: a.children
        }, n), c = Be(c, n, e, null), c.flags |= 2, a.return = l, c.return = l, a.sibling = c, l.child = a, Ze(l, t.child, null, e), a = l.child, a.memoizedState = Nc(e), a.childLanes = Oc(t, i, e), l.memoizedState = Mc, l = rn(null, a));
        else if (ye(l), df(c)) {
          if (i = c.nextSibling && c.nextSibling.dataset, i) var b = i.dgst;
          i = b, a = Error(o(419)), a.stack = "", a.digest = i, Ia({
            value: a,
            source: null,
            stack: null
          }), l = Uc(t, l, e);
        } else if (jt || ma(t, l, e, false), i = (e & t.childLanes) !== 0, jt || i) {
          if (i = ht, i !== null && (a = Qf(i, e), a !== 0 && a !== d.retryLane)) throw d.retryLane = a, He(t, a), ll(i, t, a), xc;
          rf(c) || Cu(), l = Uc(t, l, e);
        } else rf(c) ? (l.flags |= 192, l.child = t.child, l = null) : (t = d.treeContext, vt = Al(c.nextSibling), Bt = l, tt = true, fe = null, zl = false, t !== null && Ys(l, t), l = jc(l, a.children), l.flags |= 4096);
        return l;
      }
      return n ? (he(), c = a.fallback, n = l.mode, d = t.child, b = d.sibling, a = Ql(d, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = d.subtreeFlags & 65011712, b !== null ? c = Ql(b, c) : (c = Be(c, n, e, null), c.flags |= 2), c.return = l, a.return = l, a.sibling = c, l.child = a, rn(null, a), a = l.child, c = t.child.memoizedState, c === null ? c = Nc(e) : (n = c.cachePool, n !== null ? (d = Nt._currentValue, n = n.parent !== d ? {
        parent: d,
        pool: d
      } : n) : n = Vs(), c = {
        baseLanes: c.baseLanes | e,
        cachePool: n
      }), a.memoizedState = c, a.childLanes = Oc(t, i, e), l.memoizedState = Mc, rn(t.child, a)) : (ye(l), e = t.child, t = e.sibling, e = Ql(e, {
        mode: "visible",
        children: a.children
      }), e.return = l, e.sibling = null, t !== null && (i = l.deletions, i === null ? (l.deletions = [
        t
      ], l.flags |= 16) : i.push(t)), l.child = e, l.memoizedState = null, e);
    }
    function jc(t, l) {
      return l = Tu({
        mode: "visible",
        children: l
      }, t.mode), l.return = t, t.child = l;
    }
    function Tu(t, l) {
      return t = cl(22, t, null, l), t.lanes = 0, t;
    }
    function Uc(t, l, e) {
      return Ze(l, t.child, null, e), t = jc(l, l.pendingProps.children), t.flags |= 2, l.memoizedState = null, t;
    }
    function ur(t, l, e) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l), Ki(t.return, l, e);
    }
    function Dc(t, l, e, a, n, u) {
      var i = t.memoizedState;
      i === null ? t.memoizedState = {
        isBackwards: l,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: e,
        tailMode: n,
        treeForkCount: u
      } : (i.isBackwards = l, i.rendering = null, i.renderingStartTime = 0, i.last = a, i.tail = e, i.tailMode = n, i.treeForkCount = u);
    }
    function ir(t, l, e) {
      var a = l.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = xt.current, c = (i & 2) !== 0;
      if (c ? (i = i & 1 | 2, l.flags |= 128) : i &= 1, O(xt, i), Yt(t, l, a, e), a = tt ? $a : 0, !c && t !== null && (t.flags & 128) !== 0) t: for (t = l.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && ur(t, e, l);
        else if (t.tag === 19) ur(t, e, l);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      switch (n) {
        case "forwards":
          for (e = l.child, n = null; e !== null; ) t = e.alternate, t !== null && yu(t) === null && (n = e), e = e.sibling;
          e = n, e === null ? (n = l.child, l.child = null) : (n = e.sibling, e.sibling = null), Dc(l, false, n, e, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (e = null, n = l.child, l.child = null; n !== null; ) {
            if (t = n.alternate, t !== null && yu(t) === null) {
              l.child = n;
              break;
            }
            t = n.sibling, n.sibling = e, e = n, n = t;
          }
          Dc(l, true, e, null, u, a);
          break;
        case "together":
          Dc(l, false, null, null, void 0, a);
          break;
        default:
          l.memoizedState = null;
      }
      return l.child;
    }
    function Wl(t, l, e) {
      if (t !== null && (l.dependencies = t.dependencies), be |= l.lanes, (e & l.childLanes) === 0) if (t !== null) {
        if (ma(t, l, e, false), (e & l.childLanes) === 0) return null;
      } else return null;
      if (t !== null && l.child !== t.child) throw Error(o(153));
      if (l.child !== null) {
        for (t = l.child, e = Ql(t, t.pendingProps), l.child = e, e.return = l; t.sibling !== null; ) t = t.sibling, e = e.sibling = Ql(t, t.pendingProps), e.return = l;
        e.sibling = null;
      }
      return l.child;
    }
    function Rc(t, l) {
      return (t.lanes & l) !== 0 ? true : (t = t.dependencies, !!(t !== null && iu(t)));
    }
    function Oy(t, l, e) {
      switch (l.tag) {
        case 3:
          Mt(l, l.stateNode.containerInfo), oe(l, Nt, t.memoizedState.cache), qe();
          break;
        case 27:
        case 5:
          Oe(l);
          break;
        case 4:
          Mt(l, l.stateNode.containerInfo);
          break;
        case 10:
          oe(l, l.type, l.memoizedProps.value);
          break;
        case 31:
          if (l.memoizedState !== null) return l.flags |= 128, nc(l), null;
          break;
        case 13:
          var a = l.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (ye(l), l.flags |= 128, null) : (e & l.child.childLanes) !== 0 ? nr(t, l, e) : (ye(l), t = Wl(t, l, e), t !== null ? t.sibling : null);
          ye(l);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (e & l.childLanes) !== 0, a || (ma(t, l, e, false), a = (e & l.childLanes) !== 0), n) {
            if (a) return ir(t, l, e);
            l.flags |= 128;
          }
          if (n = l.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), O(xt, xt.current), a) break;
          return null;
        case 22:
          return l.lanes = 0, Io(t, l, e, l.pendingProps);
        case 24:
          oe(l, Nt, t.memoizedState.cache);
      }
      return Wl(t, l, e);
    }
    function cr(t, l, e) {
      if (t !== null) if (t.memoizedProps !== l.pendingProps) jt = true;
      else {
        if (!Rc(t, e) && (l.flags & 128) === 0) return jt = false, Oy(t, l, e);
        jt = (t.flags & 131072) !== 0;
      }
      else jt = false, tt && (l.flags & 1048576) !== 0 && qs(l, $a, l.index);
      switch (l.lanes = 0, l.tag) {
        case 16:
          t: {
            var a = l.pendingProps;
            if (t = Xe(l.elementType), l.type = t, typeof t == "function") qi(t) ? (a = Ke(t, a), l.tag = 1, l = er(null, l, t, a, e)) : (l.tag = 0, l = Tc(null, l, t, a, e));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === Vt) {
                  l.tag = 11, l = Wo(null, l, t, a, e);
                  break t;
                } else if (n === W) {
                  l.tag = 14, l = Fo(null, l, t, a, e);
                  break t;
                }
              }
              throw l = hl(t) || t, Error(o(306, l, ""));
            }
          }
          return l;
        case 0:
          return Tc(t, l, l.type, l.pendingProps, e);
        case 1:
          return a = l.type, n = Ke(a, l.pendingProps), er(t, l, a, n, e);
        case 3:
          t: {
            if (Mt(l, l.stateNode.containerInfo), t === null) throw Error(o(387));
            a = l.pendingProps;
            var u = l.memoizedState;
            n = u.element, Pi(t, l), un(l, a, null, e);
            var i = l.memoizedState;
            if (a = i.cache, oe(l, Nt, a), a !== u.cache && Ji(l, [
              Nt
            ], e, true), nn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, l.updateQueue.baseState = u, l.memoizedState = u, l.flags & 256) {
              l = ar(t, l, a, e);
              break t;
            } else if (a !== n) {
              n = _l(Error(o(424)), l), Ia(n), l = ar(t, l, a, e);
              break t;
            } else {
              switch (t = l.stateNode.containerInfo, t.nodeType) {
                case 9:
                  t = t.body;
                  break;
                default:
                  t = t.nodeName === "HTML" ? t.ownerDocument.body : t;
              }
              for (vt = Al(t.firstChild), Bt = l, tt = true, fe = null, zl = true, e = $s(l, null, a, e), l.child = e; e; ) e.flags = e.flags & -3 | 4096, e = e.sibling;
            }
            else {
              if (qe(), a === n) {
                l = Wl(t, l, e);
                break t;
              }
              Yt(t, l, a, e);
            }
            l = l.child;
          }
          return l;
        case 26:
          return xu(t, l), t === null ? (e = bd(l.type, null, l.pendingProps, null)) ? l.memoizedState = e : tt || (e = l.type, t = l.pendingProps, a = Xu(k.current).createElement(e), a[Ht] = l, a[Wt] = t, Gt(a, e, t), Rt(a), l.stateNode = a) : l.memoizedState = bd(l.type, t.memoizedProps, l.pendingProps, t.memoizedState), null;
        case 27:
          return Oe(l), t === null && tt && (a = l.stateNode = hd(l.type, l.pendingProps, k.current), Bt = l, zl = true, n = vt, Ee(l.type) ? (mf = n, vt = Al(a.firstChild)) : vt = n), Yt(t, l, l.pendingProps.children, e), xu(t, l), t === null && (l.flags |= 4194304), l.child;
        case 5:
          return t === null && tt && ((n = a = vt) && (a = u0(a, l.type, l.pendingProps, zl), a !== null ? (l.stateNode = a, Bt = l, vt = Al(a.firstChild), zl = false, n = true) : n = false), n || se(l)), Oe(l), n = l.type, u = l.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ff(n, u) ? a = null : i !== null && ff(n, i) && (l.flags |= 32), l.memoizedState !== null && (n = ic(t, l, py, null, null, e), Tn._currentValue = n), xu(t, l), Yt(t, l, a, e), l.child;
        case 6:
          return t === null && tt && ((t = e = vt) && (e = i0(e, l.pendingProps, zl), e !== null ? (l.stateNode = e, Bt = l, vt = null, t = true) : t = false), t || se(l)), null;
        case 13:
          return nr(t, l, e);
        case 4:
          return Mt(l, l.stateNode.containerInfo), a = l.pendingProps, t === null ? l.child = Ze(l, null, a, e) : Yt(t, l, a, e), l.child;
        case 11:
          return Wo(t, l, l.type, l.pendingProps, e);
        case 7:
          return Yt(t, l, l.pendingProps, e), l.child;
        case 8:
          return Yt(t, l, l.pendingProps.children, e), l.child;
        case 12:
          return Yt(t, l, l.pendingProps.children, e), l.child;
        case 10:
          return a = l.pendingProps, oe(l, l.type, a.value), Yt(t, l, a.children, e), l.child;
        case 9:
          return n = l.type._context, a = l.pendingProps.children, Ge(l), n = qt(n), a = a(n), l.flags |= 1, Yt(t, l, a, e), l.child;
        case 14:
          return Fo(t, l, l.type, l.pendingProps, e);
        case 15:
          return $o(t, l, l.type, l.pendingProps, e);
        case 19:
          return ir(t, l, e);
        case 31:
          return Ny(t, l, e);
        case 22:
          return Io(t, l, e, l.pendingProps);
        case 24:
          return Ge(l), a = qt(Nt), t === null ? (n = Fi(), n === null && (n = ht, u = ki(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= e), n = u), l.memoizedState = {
            parent: a,
            cache: n
          }, Ii(l), oe(l, Nt, n)) : ((t.lanes & e) !== 0 && (Pi(t, l), un(l, null, null, e), nn()), n = t.memoizedState, u = l.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, l.memoizedState = n, l.lanes === 0 && (l.memoizedState = l.updateQueue.baseState = n), oe(l, Nt, a)) : (a = u.cache, oe(l, Nt, a), a !== n.cache && Ji(l, [
            Nt
          ], e, true))), Yt(t, l, l.pendingProps.children, e), l.child;
        case 29:
          throw l.pendingProps;
      }
      throw Error(o(156, l.tag));
    }
    function Fl(t) {
      t.flags |= 4;
    }
    function wc(t, l, e, a, n) {
      if ((l = (t.mode & 32) !== 0) && (l = false), l) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (wr()) t.flags |= 8192;
        else throw Qe = ou, $i;
      } else t.flags &= -16777217;
    }
    function fr(t, l) {
      if (l.type !== "stylesheet" || (l.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Ed(l)) if (wr()) t.flags |= 8192;
      else throw Qe = ou, $i;
    }
    function Mu(t, l) {
      l !== null && (t.flags |= 4), t.flags & 16384 && (l = t.tag !== 22 ? Gf() : 536870912, t.lanes |= l, xa |= l);
    }
    function dn(t, l) {
      if (!tt) switch (t.tailMode) {
        case "hidden":
          l = t.tail;
          for (var e = null; l !== null; ) l.alternate !== null && (e = l), l = l.sibling;
          e === null ? t.tail = null : e.sibling = null;
          break;
        case "collapsed":
          e = t.tail;
          for (var a = null; e !== null; ) e.alternate !== null && (a = e), e = e.sibling;
          a === null ? l || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
      }
    }
    function bt(t) {
      var l = t.alternate !== null && t.alternate.child === t.child, e = 0, a = 0;
      if (l) for (var n = t.child; n !== null; ) e |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
      else for (n = t.child; n !== null; ) e |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
      return t.subtreeFlags |= a, t.childLanes = e, l;
    }
    function jy(t, l, e) {
      var a = l.pendingProps;
      switch (Xi(l), l.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return bt(l), null;
        case 1:
          return bt(l), null;
        case 3:
          return e = l.stateNode, a = null, t !== null && (a = t.memoizedState.cache), l.memoizedState.cache !== a && (l.flags |= 2048), Kl(Nt), St(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (t === null || t.child === null) && (da(l) ? Fl(l) : t === null || t.memoizedState.isDehydrated && (l.flags & 256) === 0 || (l.flags |= 1024, Zi())), bt(l), null;
        case 26:
          var n = l.type, u = l.memoizedState;
          return t === null ? (Fl(l), u !== null ? (bt(l), fr(l, u)) : (bt(l), wc(l, n, null, a, e))) : u ? u !== t.memoizedState ? (Fl(l), bt(l), fr(l, u)) : (bt(l), l.flags &= -16777217) : (t = t.memoizedProps, t !== a && Fl(l), bt(l), wc(l, n, t, a, e)), null;
        case 27:
          if (Qt(l), e = k.current, n = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Fl(l);
          else {
            if (!a) {
              if (l.stateNode === null) throw Error(o(166));
              return bt(l), null;
            }
            t = D.current, da(l) ? Gs(l) : (t = hd(n, a, e), l.stateNode = t, Fl(l));
          }
          return bt(l), null;
        case 5:
          if (Qt(l), n = l.type, t !== null && l.stateNode != null) t.memoizedProps !== a && Fl(l);
          else {
            if (!a) {
              if (l.stateNode === null) throw Error(o(166));
              return bt(l), null;
            }
            if (u = D.current, da(l)) Gs(l);
            else {
              var i = Xu(k.current);
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
              u[Ht] = l, u[Wt] = a;
              t: for (i = l.child; i !== null; ) {
                if (i.tag === 5 || i.tag === 6) u.appendChild(i.stateNode);
                else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                  i.child.return = i, i = i.child;
                  continue;
                }
                if (i === l) break t;
                for (; i.sibling === null; ) {
                  if (i.return === null || i.return === l) break t;
                  i = i.return;
                }
                i.sibling.return = i.return, i = i.sibling;
              }
              l.stateNode = u;
              t: switch (Gt(u, n, a), n) {
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
              a && Fl(l);
            }
          }
          return bt(l), wc(l, l.type, t === null ? null : t.memoizedProps, l.pendingProps, e), null;
        case 6:
          if (t && l.stateNode != null) t.memoizedProps !== a && Fl(l);
          else {
            if (typeof a != "string" && l.stateNode === null) throw Error(o(166));
            if (t = k.current, da(l)) {
              if (t = l.stateNode, e = l.memoizedProps, a = null, n = Bt, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[Ht] = l, t = !!(t.nodeValue === e || a !== null && a.suppressHydrationWarning === true || nd(t.nodeValue, e)), t || se(l, true);
            } else t = Xu(t).createTextNode(a), t[Ht] = l, l.stateNode = t;
          }
          return bt(l), null;
        case 31:
          if (e = l.memoizedState, t === null || t.memoizedState !== null) {
            if (a = da(l), e !== null) {
              if (t === null) {
                if (!a) throw Error(o(318));
                if (t = l.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
                t[Ht] = l;
              } else qe(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
              bt(l), t = false;
            } else e = Zi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = e), t = true;
            if (!t) return l.flags & 256 ? (sl(l), l) : (sl(l), null);
            if ((l.flags & 128) !== 0) throw Error(o(558));
          }
          return bt(l), null;
        case 13:
          if (a = l.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = da(l), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(o(318));
                if (n = l.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(o(317));
                n[Ht] = l;
              } else qe(), (l.flags & 128) === 0 && (l.memoizedState = null), l.flags |= 4;
              bt(l), n = false;
            } else n = Zi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return l.flags & 256 ? (sl(l), l) : (sl(l), null);
          }
          return sl(l), (l.flags & 128) !== 0 ? (l.lanes = e, l) : (e = a !== null, t = t !== null && t.memoizedState !== null, e && (a = l.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), e !== t && e && (l.child.flags |= 8192), Mu(l, l.updateQueue), bt(l), null);
        case 4:
          return St(), t === null && ef(l.stateNode.containerInfo), bt(l), null;
        case 10:
          return Kl(l.type), bt(l), null;
        case 19:
          if (S(xt), a = l.memoizedState, a === null) return bt(l), null;
          if (n = (l.flags & 128) !== 0, u = a.rendering, u === null) if (n) dn(a, false);
          else {
            if (Et !== 0 || t !== null && (t.flags & 128) !== 0) for (t = l.child; t !== null; ) {
              if (u = yu(t), u !== null) {
                for (l.flags |= 128, dn(a, false), t = u.updateQueue, l.updateQueue = t, Mu(l, t), l.subtreeFlags = 0, t = e, e = l.child; e !== null; ) Cs(e, t), e = e.sibling;
                return O(xt, xt.current & 1 | 2), tt && Zl(l, a.treeForkCount), l.child;
              }
              t = t.sibling;
            }
            a.tail !== null && al() > Du && (l.flags |= 128, n = true, dn(a, false), l.lanes = 4194304);
          }
          else {
            if (!n) if (t = yu(u), t !== null) {
              if (l.flags |= 128, n = true, t = t.updateQueue, l.updateQueue = t, Mu(l, t), dn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !tt) return bt(l), null;
            } else 2 * al() - a.renderingStartTime > Du && e !== 536870912 && (l.flags |= 128, n = true, dn(a, false), l.lanes = 4194304);
            a.isBackwards ? (u.sibling = l.child, l.child = u) : (t = a.last, t !== null ? t.sibling = u : l.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = al(), t.sibling = null, e = xt.current, O(xt, n ? e & 1 | 2 : e & 1), tt && Zl(l, a.treeForkCount), t) : (bt(l), null);
        case 22:
        case 23:
          return sl(l), ac(), a = l.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (l.flags |= 8192) : a && (l.flags |= 8192), a ? (e & 536870912) !== 0 && (l.flags & 128) === 0 && (bt(l), l.subtreeFlags & 6 && (l.flags |= 8192)) : bt(l), e = l.updateQueue, e !== null && Mu(l, e.retryQueue), e = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), a = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), a !== e && (l.flags |= 2048), t !== null && S(Le), null;
        case 24:
          return e = null, t !== null && (e = t.memoizedState.cache), l.memoizedState.cache !== e && (l.flags |= 2048), Kl(Nt), bt(l), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, l.tag));
    }
    function Uy(t, l) {
      switch (Xi(l), l.tag) {
        case 1:
          return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 3:
          return Kl(Nt), St(), t = l.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (l.flags = t & -65537 | 128, l) : null;
        case 26:
        case 27:
        case 5:
          return Qt(l), null;
        case 31:
          if (l.memoizedState !== null) {
            if (sl(l), l.alternate === null) throw Error(o(340));
            qe();
          }
          return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 13:
          if (sl(l), t = l.memoizedState, t !== null && t.dehydrated !== null) {
            if (l.alternate === null) throw Error(o(340));
            qe();
          }
          return t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 19:
          return S(xt), null;
        case 4:
          return St(), null;
        case 10:
          return Kl(l.type), null;
        case 22:
        case 23:
          return sl(l), ac(), t !== null && S(Le), t = l.flags, t & 65536 ? (l.flags = t & -65537 | 128, l) : null;
        case 24:
          return Kl(Nt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function sr(t, l) {
      switch (Xi(l), l.tag) {
        case 3:
          Kl(Nt), St();
          break;
        case 26:
        case 27:
        case 5:
          Qt(l);
          break;
        case 4:
          St();
          break;
        case 31:
          l.memoizedState !== null && sl(l);
          break;
        case 13:
          sl(l);
          break;
        case 19:
          S(xt);
          break;
        case 10:
          Kl(l.type);
          break;
        case 22:
        case 23:
          sl(l), ac(), t !== null && S(Le);
          break;
        case 24:
          Kl(Nt);
      }
    }
    function mn(t, l) {
      try {
        var e = l.updateQueue, a = e !== null ? e.lastEffect : null;
        if (a !== null) {
          var n = a.next;
          e = n;
          do {
            if ((e.tag & t) === t) {
              a = void 0;
              var u = e.create, i = e.inst;
              a = u(), i.destroy = a;
            }
            e = e.next;
          } while (e !== n);
        }
      } catch (c) {
        ot(l, l.return, c);
      }
    }
    function ge(t, l, e) {
      try {
        var a = l.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var i = a.inst, c = i.destroy;
              if (c !== void 0) {
                i.destroy = void 0, n = l;
                var d = e, b = c;
                try {
                  b();
                } catch (E) {
                  ot(n, d, E);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (E) {
        ot(l, l.return, E);
      }
    }
    function or(t) {
      var l = t.updateQueue;
      if (l !== null) {
        var e = t.stateNode;
        try {
          Ps(l, e);
        } catch (a) {
          ot(t, t.return, a);
        }
      }
    }
    function rr(t, l, e) {
      e.props = Ke(t.type, t.memoizedProps), e.state = t.memoizedState;
      try {
        e.componentWillUnmount();
      } catch (a) {
        ot(t, l, a);
      }
    }
    function yn(t, l) {
      try {
        var e = t.ref;
        if (e !== null) {
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
          typeof e == "function" ? t.refCleanup = e(a) : e.current = a;
        }
      } catch (n) {
        ot(t, l, n);
      }
    }
    function Cl(t, l) {
      var e = t.ref, a = t.refCleanup;
      if (e !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        ot(t, l, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof e == "function") try {
        e(null);
      } catch (n) {
        ot(t, l, n);
      }
      else e.current = null;
    }
    function dr(t) {
      var l = t.type, e = t.memoizedProps, a = t.stateNode;
      try {
        t: switch (l) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            e.autoFocus && a.focus();
            break t;
          case "img":
            e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
        }
      } catch (n) {
        ot(t, t.return, n);
      }
    }
    function Cc(t, l, e) {
      try {
        var a = t.stateNode;
        Py(a, t.type, e, l), a[Wt] = l;
      } catch (n) {
        ot(t, t.return, n);
      }
    }
    function mr(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ee(t.type) || t.tag === 4;
    }
    function Hc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || mr(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Ee(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Bc(t, l, e) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, l ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(t, l) : (l = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.appendChild(t), e = e._reactRootContainer, e != null || l.onclick !== null || (l.onclick = Ll));
      else if (a !== 4 && (a === 27 && Ee(t.type) && (e = t.stateNode, l = null), t = t.child, t !== null)) for (Bc(t, l, e), t = t.sibling; t !== null; ) Bc(t, l, e), t = t.sibling;
    }
    function Nu(t, l, e) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, l ? e.insertBefore(t, l) : e.appendChild(t);
      else if (a !== 4 && (a === 27 && Ee(t.type) && (e = t.stateNode), t = t.child, t !== null)) for (Nu(t, l, e), t = t.sibling; t !== null; ) Nu(t, l, e), t = t.sibling;
    }
    function yr(t) {
      var l = t.stateNode, e = t.memoizedProps;
      try {
        for (var a = t.type, n = l.attributes; n.length; ) l.removeAttributeNode(n[0]);
        Gt(l, a, e), l[Ht] = t, l[Wt] = e;
      } catch (u) {
        ot(t, t.return, u);
      }
    }
    var $l = false, Ut = false, qc = false, hr = typeof WeakSet == "function" ? WeakSet : Set, wt = null;
    function Dy(t, l) {
      if (t = t.containerInfo, uf = Wu, t = Ts(t), Ui(t)) {
        if ("selectionStart" in t) var e = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
        else t: {
          e = (e = t.ownerDocument) && e.defaultView || window;
          var a = e.getSelection && e.getSelection();
          if (a && a.rangeCount !== 0) {
            e = a.anchorNode;
            var n = a.anchorOffset, u = a.focusNode;
            a = a.focusOffset;
            try {
              e.nodeType, u.nodeType;
            } catch {
              e = null;
              break t;
            }
            var i = 0, c = -1, d = -1, b = 0, E = 0, M = t, _ = null;
            l: for (; ; ) {
              for (var p; M !== e || n !== 0 && M.nodeType !== 3 || (c = i + n), M !== u || a !== 0 && M.nodeType !== 3 || (d = i + a), M.nodeType === 3 && (i += M.nodeValue.length), (p = M.firstChild) !== null; ) _ = M, M = p;
              for (; ; ) {
                if (M === t) break l;
                if (_ === e && ++b === n && (c = i), _ === u && ++E === a && (d = i), (p = M.nextSibling) !== null) break;
                M = _, _ = M.parentNode;
              }
              M = p;
            }
            e = c === -1 || d === -1 ? null : {
              start: c,
              end: d
            };
          } else e = null;
        }
        e = e || {
          start: 0,
          end: 0
        };
      } else e = null;
      for (cf = {
        focusedElem: t,
        selectionRange: e
      }, Wu = false, wt = l; wt !== null; ) if (l = wt, t = l.child, (l.subtreeFlags & 1028) !== 0 && t !== null) t.return = l, wt = t;
      else for (; wt !== null; ) {
        switch (l = wt, u = l.alternate, t = l.flags, l.tag) {
          case 0:
            if ((t & 4) !== 0 && (t = l.updateQueue, t = t !== null ? t.events : null, t !== null)) for (e = 0; e < t.length; e++) n = t[e], n.ref.impl = n.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((t & 1024) !== 0 && u !== null) {
              t = void 0, e = l, n = u.memoizedProps, u = u.memoizedState, a = e.stateNode;
              try {
                var B = Ke(e.type, n);
                t = a.getSnapshotBeforeUpdate(B, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (L) {
                ot(e, e.return, L);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = l.stateNode.containerInfo, e = t.nodeType, e === 9) of(t);
              else if (e === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  of(t);
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
            if ((t & 1024) !== 0) throw Error(o(163));
        }
        if (t = l.sibling, t !== null) {
          t.return = l.return, wt = t;
          break;
        }
        wt = l.return;
      }
    }
    function gr(t, l, e) {
      var a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Pl(t, e), a & 4 && mn(5, e);
          break;
        case 1:
          if (Pl(t, e), a & 4) if (t = e.stateNode, l === null) try {
            t.componentDidMount();
          } catch (i) {
            ot(e, e.return, i);
          }
          else {
            var n = Ke(e.type, l.memoizedProps);
            l = l.memoizedState;
            try {
              t.componentDidUpdate(n, l, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ot(e, e.return, i);
            }
          }
          a & 64 && or(e), a & 512 && yn(e, e.return);
          break;
        case 3:
          if (Pl(t, e), a & 64 && (t = e.updateQueue, t !== null)) {
            if (l = null, e.child !== null) switch (e.child.tag) {
              case 27:
              case 5:
                l = e.child.stateNode;
                break;
              case 1:
                l = e.child.stateNode;
            }
            try {
              Ps(t, l);
            } catch (i) {
              ot(e, e.return, i);
            }
          }
          break;
        case 27:
          l === null && a & 4 && yr(e);
        case 26:
        case 5:
          Pl(t, e), l === null && a & 4 && dr(e), a & 512 && yn(e, e.return);
          break;
        case 12:
          Pl(t, e);
          break;
        case 31:
          Pl(t, e), a & 4 && _r(t, e);
          break;
        case 13:
          Pl(t, e), a & 4 && pr(t, e), a & 64 && (t = e.memoizedState, t !== null && (t = t.dehydrated, t !== null && (e = Ly.bind(null, e), c0(t, e))));
          break;
        case 22:
          if (a = e.memoizedState !== null || $l, !a) {
            l = l !== null && l.memoizedState !== null || Ut, n = $l;
            var u = Ut;
            $l = a, (Ut = l) && !u ? te(t, e, (e.subtreeFlags & 8772) !== 0) : Pl(t, e), $l = n, Ut = u;
          }
          break;
        case 30:
          break;
        default:
          Pl(t, e);
      }
    }
    function vr(t) {
      var l = t.alternate;
      l !== null && (t.alternate = null, vr(l)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (l = t.stateNode, l !== null && yi(l)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var _t = null, $t = false;
    function Il(t, l, e) {
      for (e = e.child; e !== null; ) br(t, l, e), e = e.sibling;
    }
    function br(t, l, e) {
      if (nl && typeof nl.onCommitFiberUnmount == "function") try {
        nl.onCommitFiberUnmount(Ba, e);
      } catch {
      }
      switch (e.tag) {
        case 26:
          Ut || Cl(e, l), Il(t, l, e), e.memoizedState ? e.memoizedState.count-- : e.stateNode && (e = e.stateNode, e.parentNode.removeChild(e));
          break;
        case 27:
          Ut || Cl(e, l);
          var a = _t, n = $t;
          Ee(e.type) && (_t = e.stateNode, $t = false), Il(t, l, e), En(e.stateNode), _t = a, $t = n;
          break;
        case 5:
          Ut || Cl(e, l);
        case 6:
          if (a = _t, n = $t, _t = null, Il(t, l, e), _t = a, $t = n, _t !== null) if ($t) try {
            (_t.nodeType === 9 ? _t.body : _t.nodeName === "HTML" ? _t.ownerDocument.body : _t).removeChild(e.stateNode);
          } catch (u) {
            ot(e, l, u);
          }
          else try {
            _t.removeChild(e.stateNode);
          } catch (u) {
            ot(e, l, u);
          }
          break;
        case 18:
          _t !== null && ($t ? (t = _t, od(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, e.stateNode), Ra(t)) : od(_t, e.stateNode));
          break;
        case 4:
          a = _t, n = $t, _t = e.stateNode.containerInfo, $t = true, Il(t, l, e), _t = a, $t = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          ge(2, e, l), Ut || ge(4, e, l), Il(t, l, e);
          break;
        case 1:
          Ut || (Cl(e, l), a = e.stateNode, typeof a.componentWillUnmount == "function" && rr(e, l, a)), Il(t, l, e);
          break;
        case 21:
          Il(t, l, e);
          break;
        case 22:
          Ut = (a = Ut) || e.memoizedState !== null, Il(t, l, e), Ut = a;
          break;
        default:
          Il(t, l, e);
      }
    }
    function _r(t, l) {
      if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Ra(t);
        } catch (e) {
          ot(l, l.return, e);
        }
      }
    }
    function pr(t, l) {
      if (l.memoizedState === null && (t = l.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Ra(t);
      } catch (e) {
        ot(l, l.return, e);
      }
    }
    function Ry(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var l = t.stateNode;
          return l === null && (l = t.stateNode = new hr()), l;
        case 22:
          return t = t.stateNode, l = t._retryCache, l === null && (l = t._retryCache = new hr()), l;
        default:
          throw Error(o(435, t.tag));
      }
    }
    function Ou(t, l) {
      var e = Ry(t);
      l.forEach(function(a) {
        if (!e.has(a)) {
          e.add(a);
          var n = Xy.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function It(t, l) {
      var e = l.deletions;
      if (e !== null) for (var a = 0; a < e.length; a++) {
        var n = e[a], u = t, i = l, c = i;
        t: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Ee(c.type)) {
                _t = c.stateNode, $t = false;
                break t;
              }
              break;
            case 5:
              _t = c.stateNode, $t = false;
              break t;
            case 3:
            case 4:
              _t = c.stateNode.containerInfo, $t = true;
              break t;
          }
          c = c.return;
        }
        if (_t === null) throw Error(o(160));
        br(u, i, n), _t = null, $t = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (l.subtreeFlags & 13886) for (l = l.child; l !== null; ) Sr(l, t), l = l.sibling;
    }
    var Nl = null;
    function Sr(t, l) {
      var e = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          It(l, t), Pt(t), a & 4 && (ge(3, t, t.return), mn(3, t), ge(5, t, t.return));
          break;
        case 1:
          It(l, t), Pt(t), a & 512 && (Ut || e === null || Cl(e, e.return)), a & 64 && $l && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (e = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = e === null ? a : e.concat(a))));
          break;
        case 26:
          var n = Nl;
          if (It(l, t), Pt(t), a & 512 && (Ut || e === null || Cl(e, e.return)), a & 4) {
            var u = e !== null ? e.memoizedState : null;
            if (a = t.memoizedState, e === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, e = t.memoizedProps, n = n.ownerDocument || n;
                l: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Ga] || u[Ht] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Gt(u, a, e), u[Ht] = t, Rt(u), a = u;
                    break t;
                  case "link":
                    var i = Sd("link", "href", n).get(a + (e.href || ""));
                    if (i) {
                      for (var c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && u.getAttribute("rel") === (e.rel == null ? null : e.rel) && u.getAttribute("title") === (e.title == null ? null : e.title) && u.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                        i.splice(c, 1);
                        break l;
                      }
                    }
                    u = n.createElement(a), Gt(u, a, e), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Sd("meta", "content", n).get(a + (e.content || ""))) {
                      for (c = 0; c < i.length; c++) if (u = i[c], u.getAttribute("content") === (e.content == null ? null : "" + e.content) && u.getAttribute("name") === (e.name == null ? null : e.name) && u.getAttribute("property") === (e.property == null ? null : e.property) && u.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && u.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                        i.splice(c, 1);
                        break l;
                      }
                    }
                    u = n.createElement(a), Gt(u, a, e), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(o(468, a));
                }
                u[Ht] = t, Rt(u), a = u;
              }
              t.stateNode = a;
            } else zd(n, t.type, t.stateNode);
            else t.stateNode = pd(n, a, t.memoizedProps);
            else u !== a ? (u === null ? e.stateNode !== null && (e = e.stateNode, e.parentNode.removeChild(e)) : u.count--, a === null ? zd(n, t.type, t.stateNode) : pd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Cc(t, t.memoizedProps, e.memoizedProps);
          }
          break;
        case 27:
          It(l, t), Pt(t), a & 512 && (Ut || e === null || Cl(e, e.return)), e !== null && a & 4 && Cc(t, t.memoizedProps, e.memoizedProps);
          break;
        case 5:
          if (It(l, t), Pt(t), a & 512 && (Ut || e === null || Cl(e, e.return)), t.flags & 32) {
            n = t.stateNode;
            try {
              ea(n, "");
            } catch (B) {
              ot(t, t.return, B);
            }
          }
          a & 4 && t.stateNode != null && (n = t.memoizedProps, Cc(t, n, e !== null ? e.memoizedProps : n)), a & 1024 && (qc = true);
          break;
        case 6:
          if (It(l, t), Pt(t), a & 4) {
            if (t.stateNode === null) throw Error(o(162));
            a = t.memoizedProps, e = t.stateNode;
            try {
              e.nodeValue = a;
            } catch (B) {
              ot(t, t.return, B);
            }
          }
          break;
        case 3:
          if (Vu = null, n = Nl, Nl = Qu(l.containerInfo), It(l, t), Nl = n, Pt(t), a & 4 && e !== null && e.memoizedState.isDehydrated) try {
            Ra(l.containerInfo);
          } catch (B) {
            ot(t, t.return, B);
          }
          qc && (qc = false, zr(t));
          break;
        case 4:
          a = Nl, Nl = Qu(t.stateNode.containerInfo), It(l, t), Pt(t), Nl = a;
          break;
        case 12:
          It(l, t), Pt(t);
          break;
        case 31:
          It(l, t), Pt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ou(t, a)));
          break;
        case 13:
          It(l, t), Pt(t), t.child.flags & 8192 && t.memoizedState !== null != (e !== null && e.memoizedState !== null) && (Uu = al()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ou(t, a)));
          break;
        case 22:
          n = t.memoizedState !== null;
          var d = e !== null && e.memoizedState !== null, b = $l, E = Ut;
          if ($l = b || n, Ut = E || d, It(l, t), Ut = E, $l = b, Pt(t), a & 8192) t: for (l = t.stateNode, l._visibility = n ? l._visibility & -2 : l._visibility | 1, n && (e === null || d || $l || Ut || Je(t)), e = null, l = t; ; ) {
            if (l.tag === 5 || l.tag === 26) {
              if (e === null) {
                d = e = l;
                try {
                  if (u = d.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    c = d.stateNode;
                    var M = d.memoizedProps.style, _ = M != null && M.hasOwnProperty("display") ? M.display : null;
                    c.style.display = _ == null || typeof _ == "boolean" ? "" : ("" + _).trim();
                  }
                } catch (B) {
                  ot(d, d.return, B);
                }
              }
            } else if (l.tag === 6) {
              if (e === null) {
                d = l;
                try {
                  d.stateNode.nodeValue = n ? "" : d.memoizedProps;
                } catch (B) {
                  ot(d, d.return, B);
                }
              }
            } else if (l.tag === 18) {
              if (e === null) {
                d = l;
                try {
                  var p = d.stateNode;
                  n ? rd(p, true) : rd(d.stateNode, false);
                } catch (B) {
                  ot(d, d.return, B);
                }
              }
            } else if ((l.tag !== 22 && l.tag !== 23 || l.memoizedState === null || l === t) && l.child !== null) {
              l.child.return = l, l = l.child;
              continue;
            }
            if (l === t) break t;
            for (; l.sibling === null; ) {
              if (l.return === null || l.return === t) break t;
              e === l && (e = null), l = l.return;
            }
            e === l && (e = null), l.sibling.return = l.return, l = l.sibling;
          }
          a & 4 && (a = t.updateQueue, a !== null && (e = a.retryQueue, e !== null && (a.retryQueue = null, Ou(t, e))));
          break;
        case 19:
          It(l, t), Pt(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ou(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          It(l, t), Pt(t);
      }
    }
    function Pt(t) {
      var l = t.flags;
      if (l & 2) {
        try {
          for (var e, a = t.return; a !== null; ) {
            if (mr(a)) {
              e = a;
              break;
            }
            a = a.return;
          }
          if (e == null) throw Error(o(160));
          switch (e.tag) {
            case 27:
              var n = e.stateNode, u = Hc(t);
              Nu(t, u, n);
              break;
            case 5:
              var i = e.stateNode;
              e.flags & 32 && (ea(i, ""), e.flags &= -33);
              var c = Hc(t);
              Nu(t, c, i);
              break;
            case 3:
            case 4:
              var d = e.stateNode.containerInfo, b = Hc(t);
              Bc(t, b, d);
              break;
            default:
              throw Error(o(161));
          }
        } catch (E) {
          ot(t, t.return, E);
        }
        t.flags &= -3;
      }
      l & 4096 && (t.flags &= -4097);
    }
    function zr(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var l = t;
        zr(l), l.tag === 5 && l.flags & 1024 && l.stateNode.reset(), t = t.sibling;
      }
    }
    function Pl(t, l) {
      if (l.subtreeFlags & 8772) for (l = l.child; l !== null; ) gr(t, l.alternate, l), l = l.sibling;
    }
    function Je(t) {
      for (t = t.child; t !== null; ) {
        var l = t;
        switch (l.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ge(4, l, l.return), Je(l);
            break;
          case 1:
            Cl(l, l.return);
            var e = l.stateNode;
            typeof e.componentWillUnmount == "function" && rr(l, l.return, e), Je(l);
            break;
          case 27:
            En(l.stateNode);
          case 26:
          case 5:
            Cl(l, l.return), Je(l);
            break;
          case 22:
            l.memoizedState === null && Je(l);
            break;
          case 30:
            Je(l);
            break;
          default:
            Je(l);
        }
        t = t.sibling;
      }
    }
    function te(t, l, e) {
      for (e = e && (l.subtreeFlags & 8772) !== 0, l = l.child; l !== null; ) {
        var a = l.alternate, n = t, u = l, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            te(n, u, e), mn(4, u);
            break;
          case 1:
            if (te(n, u, e), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (b) {
              ot(a, a.return, b);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var c = a.stateNode;
              try {
                var d = n.shared.hiddenCallbacks;
                if (d !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < d.length; n++) Is(d[n], c);
              } catch (b) {
                ot(a, a.return, b);
              }
            }
            e && i & 64 && or(u), yn(u, u.return);
            break;
          case 27:
            yr(u);
          case 26:
          case 5:
            te(n, u, e), e && a === null && i & 4 && dr(u), yn(u, u.return);
            break;
          case 12:
            te(n, u, e);
            break;
          case 31:
            te(n, u, e), e && i & 4 && _r(n, u);
            break;
          case 13:
            te(n, u, e), e && i & 4 && pr(n, u);
            break;
          case 22:
            u.memoizedState === null && te(n, u, e), yn(u, u.return);
            break;
          case 30:
            break;
          default:
            te(n, u, e);
        }
        l = l.sibling;
      }
    }
    function Yc(t, l) {
      var e = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), t = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (t = l.memoizedState.cachePool.pool), t !== e && (t != null && t.refCount++, e != null && Pa(e));
    }
    function Gc(t, l) {
      t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Pa(t));
    }
    function Ol(t, l, e, a) {
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) Er(t, l, e, a), l = l.sibling;
    }
    function Er(t, l, e, a) {
      var n = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          Ol(t, l, e, a), n & 2048 && mn(9, l);
          break;
        case 1:
          Ol(t, l, e, a);
          break;
        case 3:
          Ol(t, l, e, a), n & 2048 && (t = null, l.alternate !== null && (t = l.alternate.memoizedState.cache), l = l.memoizedState.cache, l !== t && (l.refCount++, t != null && Pa(t)));
          break;
        case 12:
          if (n & 2048) {
            Ol(t, l, e, a), t = l.stateNode;
            try {
              var u = l.memoizedProps, i = u.id, c = u.onPostCommit;
              typeof c == "function" && c(i, l.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (d) {
              ot(l, l.return, d);
            }
          } else Ol(t, l, e, a);
          break;
        case 31:
          Ol(t, l, e, a);
          break;
        case 13:
          Ol(t, l, e, a);
          break;
        case 23:
          break;
        case 22:
          u = l.stateNode, i = l.alternate, l.memoizedState !== null ? u._visibility & 2 ? Ol(t, l, e, a) : hn(t, l) : u._visibility & 2 ? Ol(t, l, e, a) : (u._visibility |= 2, za(t, l, e, a, (l.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Yc(i, l);
          break;
        case 24:
          Ol(t, l, e, a), n & 2048 && Gc(l.alternate, l);
          break;
        default:
          Ol(t, l, e, a);
      }
    }
    function za(t, l, e, a, n) {
      for (n = n && ((l.subtreeFlags & 10256) !== 0 || false), l = l.child; l !== null; ) {
        var u = t, i = l, c = e, d = a, b = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            za(u, i, c, d, n), mn(8, i);
            break;
          case 23:
            break;
          case 22:
            var E = i.stateNode;
            i.memoizedState !== null ? E._visibility & 2 ? za(u, i, c, d, n) : hn(u, i) : (E._visibility |= 2, za(u, i, c, d, n)), n && b & 2048 && Yc(i.alternate, i);
            break;
          case 24:
            za(u, i, c, d, n), n && b & 2048 && Gc(i.alternate, i);
            break;
          default:
            za(u, i, c, d, n);
        }
        l = l.sibling;
      }
    }
    function hn(t, l) {
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) {
        var e = t, a = l, n = a.flags;
        switch (a.tag) {
          case 22:
            hn(e, a), n & 2048 && Yc(a.alternate, a);
            break;
          case 24:
            hn(e, a), n & 2048 && Gc(a.alternate, a);
            break;
          default:
            hn(e, a);
        }
        l = l.sibling;
      }
    }
    var gn = 8192;
    function Ea(t, l, e) {
      if (t.subtreeFlags & gn) for (t = t.child; t !== null; ) Ar(t, l, e), t = t.sibling;
    }
    function Ar(t, l, e) {
      switch (t.tag) {
        case 26:
          Ea(t, l, e), t.flags & gn && t.memoizedState !== null && _0(e, Nl, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Ea(t, l, e);
          break;
        case 3:
        case 4:
          var a = Nl;
          Nl = Qu(t.stateNode.containerInfo), Ea(t, l, e), Nl = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = gn, gn = 16777216, Ea(t, l, e), gn = a) : Ea(t, l, e));
          break;
        default:
          Ea(t, l, e);
      }
    }
    function xr(t) {
      var l = t.alternate;
      if (l !== null && (t = l.child, t !== null)) {
        l.child = null;
        do
          l = t.sibling, t.sibling = null, t = l;
        while (t !== null);
      }
    }
    function vn(t) {
      var l = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (l !== null) for (var e = 0; e < l.length; e++) {
          var a = l[e];
          wt = a, Mr(a, t);
        }
        xr(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Tr(t), t = t.sibling;
    }
    function Tr(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          vn(t), t.flags & 2048 && ge(9, t, t.return);
          break;
        case 3:
          vn(t);
          break;
        case 12:
          vn(t);
          break;
        case 22:
          var l = t.stateNode;
          t.memoizedState !== null && l._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (l._visibility &= -3, ju(t)) : vn(t);
          break;
        default:
          vn(t);
      }
    }
    function ju(t) {
      var l = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (l !== null) for (var e = 0; e < l.length; e++) {
          var a = l[e];
          wt = a, Mr(a, t);
        }
        xr(t);
      }
      for (t = t.child; t !== null; ) {
        switch (l = t, l.tag) {
          case 0:
          case 11:
          case 15:
            ge(8, l, l.return), ju(l);
            break;
          case 22:
            e = l.stateNode, e._visibility & 2 && (e._visibility &= -3, ju(l));
            break;
          default:
            ju(l);
        }
        t = t.sibling;
      }
    }
    function Mr(t, l) {
      for (; wt !== null; ) {
        var e = wt;
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            ge(8, e, l);
            break;
          case 23:
          case 22:
            if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
              var a = e.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            Pa(e.memoizedState.cache);
        }
        if (a = e.child, a !== null) a.return = e, wt = a;
        else t: for (e = t; wt !== null; ) {
          a = wt;
          var n = a.sibling, u = a.return;
          if (vr(a), a === e) {
            wt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, wt = n;
            break t;
          }
          wt = u;
        }
      }
    }
    var wy = {
      getCacheForType: function(t) {
        var l = qt(Nt), e = l.data.get(t);
        return e === void 0 && (e = t(), l.data.set(t, e)), e;
      },
      cacheSignal: function() {
        return qt(Nt).controller.signal;
      }
    }, Cy = typeof WeakMap == "function" ? WeakMap : Map, ut = 0, ht = null, F = null, I = 0, st = 0, ol = null, ve = false, Aa = false, Lc = false, le = 0, Et = 0, be = 0, ke = 0, Xc = 0, rl = 0, xa = 0, bn = null, tl = null, Qc = false, Uu = 0, Nr = 0, Du = 1 / 0, Ru = null, _e = null, Dt = 0, pe = null, Ta = null, ee = 0, Zc = 0, Vc = null, Or = null, _n = 0, Kc = null;
    function dl() {
      return (ut & 2) !== 0 && I !== 0 ? I & -I : x.T !== null ? Ic() : Zf();
    }
    function jr() {
      if (rl === 0) if ((I & 536870912) === 0 || tt) {
        var t = Ln;
        Ln <<= 1, (Ln & 3932160) === 0 && (Ln = 262144), rl = t;
      } else rl = 536870912;
      return t = fl.current, t !== null && (t.flags |= 32), rl;
    }
    function ll(t, l, e) {
      (t === ht && (st === 2 || st === 9) || t.cancelPendingCommit !== null) && (Ma(t, 0), Se(t, I, rl, false)), Ya(t, e), ((ut & 2) === 0 || t !== ht) && (t === ht && ((ut & 2) === 0 && (ke |= e), Et === 4 && Se(t, I, rl, false)), Hl(t));
    }
    function Ur(t, l, e) {
      if ((ut & 6) !== 0) throw Error(o(327));
      var a = !e && (l & 127) === 0 && (l & t.expiredLanes) === 0 || qa(t, l), n = a ? qy(t, l) : kc(t, l, true), u = a;
      do {
        if (n === 0) {
          Aa && !a && Se(t, l, 0, false);
          break;
        } else {
          if (e = t.current.alternate, u && !Hy(e)) {
            n = kc(t, l, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = l, t.errorRecoveryDisabledLanes & u) var i = 0;
            else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              l = i;
              t: {
                var c = t;
                n = bn;
                var d = c.current.memoizedState.isDehydrated;
                if (d && (Ma(c, i).flags |= 256), i = kc(c, i, false), i !== 2) {
                  if (Lc && !d) {
                    c.errorRecoveryDisabledLanes |= u, ke |= u, n = 4;
                    break t;
                  }
                  u = tl, tl = n, u !== null && (tl === null ? tl = u : tl.push.apply(tl, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ma(t, 0), Se(t, l, 0, true);
            break;
          }
          t: {
            switch (a = t, u = n, u) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((l & 4194048) !== l) break;
              case 6:
                Se(a, l, rl, !ve);
                break t;
              case 2:
                tl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((l & 62914560) === l && (n = Uu + 300 - al(), 10 < n)) {
              if (Se(a, l, rl, !ve), Qn(a, 0, true) !== 0) break t;
              ee = l, a.timeoutHandle = fd(Dr.bind(null, a, e, tl, Ru, Qc, l, rl, ke, xa, ve, u, "Throttled", -0, 0), n);
              break t;
            }
            Dr(a, e, tl, Ru, Qc, l, rl, ke, xa, ve, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Hl(t);
    }
    function Dr(t, l, e, a, n, u, i, c, d, b, E, M, _, p) {
      if (t.timeoutHandle = -1, M = l.subtreeFlags, M & 8192 || (M & 16785408) === 16785408) {
        M = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Ll
        }, Ar(l, u, M);
        var B = (u & 62914560) === u ? Uu - al() : (u & 4194048) === u ? Nr - al() : 0;
        if (B = p0(M, B), B !== null) {
          ee = u, t.cancelPendingCommit = B(Gr.bind(null, t, l, u, e, a, n, i, c, d, E, M, null, _, p)), Se(t, u, i, !b);
          return;
        }
      }
      Gr(t, l, u, e, a, n, i, c, d);
    }
    function Hy(t) {
      for (var l = t; ; ) {
        var e = l.tag;
        if ((e === 0 || e === 11 || e === 15) && l.flags & 16384 && (e = l.updateQueue, e !== null && (e = e.stores, e !== null))) for (var a = 0; a < e.length; a++) {
          var n = e[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!il(u(), n)) return false;
          } catch {
            return false;
          }
        }
        if (e = l.child, l.subtreeFlags & 16384 && e !== null) e.return = l, l = e;
        else {
          if (l === t) break;
          for (; l.sibling === null; ) {
            if (l.return === null || l.return === t) return true;
            l = l.return;
          }
          l.sibling.return = l.return, l = l.sibling;
        }
      }
      return true;
    }
    function Se(t, l, e, a) {
      l &= ~Xc, l &= ~ke, t.suspendedLanes |= l, t.pingedLanes &= ~l, a && (t.warmLanes |= l), a = t.expirationTimes;
      for (var n = l; 0 < n; ) {
        var u = 31 - ul(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      e !== 0 && Lf(t, e, l);
    }
    function wu() {
      return (ut & 6) === 0 ? (pn(0), false) : true;
    }
    function Jc() {
      if (F !== null) {
        if (st === 0) var t = F.return;
        else t = F, Vl = Ye = null, sc(t), va = null, ln = 0, t = F;
        for (; t !== null; ) sr(t.alternate, t), t = t.return;
        F = null;
      }
    }
    function Ma(t, l) {
      var e = t.timeoutHandle;
      e !== -1 && (t.timeoutHandle = -1, e0(e)), e = t.cancelPendingCommit, e !== null && (t.cancelPendingCommit = null, e()), ee = 0, Jc(), ht = t, F = e = Ql(t.current, null), I = l, st = 0, ol = null, ve = false, Aa = qa(t, l), Lc = false, xa = rl = Xc = ke = be = Et = 0, tl = bn = null, Qc = false, (l & 8) !== 0 && (l |= l & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= l; 0 < a; ) {
        var n = 31 - ul(a), u = 1 << n;
        l |= t[n], a &= ~u;
      }
      return le = l, lu(), e;
    }
    function Rr(t, l) {
      K = null, x.H = on, l === ga || l === su ? (l = ks(), st = 3) : l === $i ? (l = ks(), st = 4) : st = l === xc ? 8 : l !== null && typeof l == "object" && typeof l.then == "function" ? 6 : 1, ol = l, F === null && (Et = 1, Eu(t, _l(l, t.current)));
    }
    function wr() {
      var t = fl.current;
      return t === null ? true : (I & 4194048) === I ? El === null : (I & 62914560) === I || (I & 536870912) !== 0 ? t === El : false;
    }
    function Cr() {
      var t = x.H;
      return x.H = on, t === null ? on : t;
    }
    function Hr() {
      var t = x.A;
      return x.A = wy, t;
    }
    function Cu() {
      Et = 4, ve || (I & 4194048) !== I && fl.current !== null || (Aa = true), (be & 134217727) === 0 && (ke & 134217727) === 0 || ht === null || Se(ht, I, rl, false);
    }
    function kc(t, l, e) {
      var a = ut;
      ut |= 2;
      var n = Cr(), u = Hr();
      (ht !== t || I !== l) && (Ru = null, Ma(t, l)), l = false;
      var i = Et;
      t: do
        try {
          if (st !== 0 && F !== null) {
            var c = F, d = ol;
            switch (st) {
              case 8:
                Jc(), i = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                fl.current === null && (l = true);
                var b = st;
                if (st = 0, ol = null, Na(t, c, d, b), e && Aa) {
                  i = 0;
                  break t;
                }
                break;
              default:
                b = st, st = 0, ol = null, Na(t, c, d, b);
            }
          }
          By(), i = Et;
          break;
        } catch (E) {
          Rr(t, E);
        }
      while (true);
      return l && t.shellSuspendCounter++, Vl = Ye = null, ut = a, x.H = n, x.A = u, F === null && (ht = null, I = 0, lu()), i;
    }
    function By() {
      for (; F !== null; ) Br(F);
    }
    function qy(t, l) {
      var e = ut;
      ut |= 2;
      var a = Cr(), n = Hr();
      ht !== t || I !== l ? (Ru = null, Du = al() + 500, Ma(t, l)) : Aa = qa(t, l);
      t: do
        try {
          if (st !== 0 && F !== null) {
            l = F;
            var u = ol;
            l: switch (st) {
              case 1:
                st = 0, ol = null, Na(t, l, u, 1);
                break;
              case 2:
              case 9:
                if (Ks(u)) {
                  st = 0, ol = null, qr(l);
                  break;
                }
                l = function() {
                  st !== 2 && st !== 9 || ht !== t || (st = 7), Hl(t);
                }, u.then(l, l);
                break t;
              case 3:
                st = 7;
                break t;
              case 4:
                st = 5;
                break t;
              case 7:
                Ks(u) ? (st = 0, ol = null, qr(l)) : (st = 0, ol = null, Na(t, l, u, 7));
                break;
              case 5:
                var i = null;
                switch (F.tag) {
                  case 26:
                    i = F.memoizedState;
                  case 5:
                  case 27:
                    var c = F;
                    if (i ? Ed(i) : c.stateNode.complete) {
                      st = 0, ol = null;
                      var d = c.sibling;
                      if (d !== null) F = d;
                      else {
                        var b = c.return;
                        b !== null ? (F = b, Hu(b)) : F = null;
                      }
                      break l;
                    }
                }
                st = 0, ol = null, Na(t, l, u, 5);
                break;
              case 6:
                st = 0, ol = null, Na(t, l, u, 6);
                break;
              case 8:
                Jc(), Et = 6;
                break t;
              default:
                throw Error(o(462));
            }
          }
          Yy();
          break;
        } catch (E) {
          Rr(t, E);
        }
      while (true);
      return Vl = Ye = null, x.H = a, x.A = n, ut = e, F !== null ? 0 : (ht = null, I = 0, lu(), Et);
    }
    function Yy() {
      for (; F !== null && !fm(); ) Br(F);
    }
    function Br(t) {
      var l = cr(t.alternate, t, le);
      t.memoizedProps = t.pendingProps, l === null ? Hu(t) : F = l;
    }
    function qr(t) {
      var l = t, e = l.alternate;
      switch (l.tag) {
        case 15:
        case 0:
          l = lr(e, l, l.pendingProps, l.type, void 0, I);
          break;
        case 11:
          l = lr(e, l, l.pendingProps, l.type.render, l.ref, I);
          break;
        case 5:
          sc(l);
        default:
          sr(e, l), l = F = Cs(l, le), l = cr(e, l, le);
      }
      t.memoizedProps = t.pendingProps, l === null ? Hu(t) : F = l;
    }
    function Na(t, l, e, a) {
      Vl = Ye = null, sc(l), va = null, ln = 0;
      var n = l.return;
      try {
        if (My(t, n, l, e, I)) {
          Et = 1, Eu(t, _l(e, t.current)), F = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw F = n, u;
        Et = 1, Eu(t, _l(e, t.current)), F = null;
        return;
      }
      l.flags & 32768 ? (tt || a === 1 ? t = true : Aa || (I & 536870912) !== 0 ? t = false : (ve = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = fl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Yr(l, t)) : Hu(l);
    }
    function Hu(t) {
      var l = t;
      do {
        if ((l.flags & 32768) !== 0) {
          Yr(l, ve);
          return;
        }
        t = l.return;
        var e = jy(l.alternate, l, le);
        if (e !== null) {
          F = e;
          return;
        }
        if (l = l.sibling, l !== null) {
          F = l;
          return;
        }
        F = l = t;
      } while (l !== null);
      Et === 0 && (Et = 5);
    }
    function Yr(t, l) {
      do {
        var e = Uy(t.alternate, t);
        if (e !== null) {
          e.flags &= 32767, F = e;
          return;
        }
        if (e = t.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !l && (t = t.sibling, t !== null)) {
          F = t;
          return;
        }
        F = t = e;
      } while (t !== null);
      Et = 6, F = null;
    }
    function Gr(t, l, e, a, n, u, i, c, d) {
      t.cancelPendingCommit = null;
      do
        Bu();
      while (Dt !== 0);
      if ((ut & 6) !== 0) throw Error(o(327));
      if (l !== null) {
        if (l === t.current) throw Error(o(177));
        if (u = l.lanes | l.childLanes, u |= Hi, bm(t, e, u, i, c, d), t === ht && (F = ht = null, I = 0), Ta = l, pe = t, ee = e, Zc = u, Vc = n, Or = a, (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Qy(Yn, function() {
          return Vr(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (l.flags & 13878) !== 0, (l.subtreeFlags & 13878) !== 0 || a) {
          a = x.T, x.T = null, n = w.p, w.p = 2, i = ut, ut |= 4;
          try {
            Dy(t, l, e);
          } finally {
            ut = i, w.p = n, x.T = a;
          }
        }
        Dt = 1, Lr(), Xr(), Qr();
      }
    }
    function Lr() {
      if (Dt === 1) {
        Dt = 0;
        var t = pe, l = Ta, e = (l.flags & 13878) !== 0;
        if ((l.subtreeFlags & 13878) !== 0 || e) {
          e = x.T, x.T = null;
          var a = w.p;
          w.p = 2;
          var n = ut;
          ut |= 4;
          try {
            Sr(l, t);
            var u = cf, i = Ts(t.containerInfo), c = u.focusedElem, d = u.selectionRange;
            if (i !== c && c && c.ownerDocument && xs(c.ownerDocument.documentElement, c)) {
              if (d !== null && Ui(c)) {
                var b = d.start, E = d.end;
                if (E === void 0 && (E = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(E, c.value.length);
                else {
                  var M = c.ownerDocument || document, _ = M && M.defaultView || window;
                  if (_.getSelection) {
                    var p = _.getSelection(), B = c.textContent.length, L = Math.min(d.start, B), mt = d.end === void 0 ? L : Math.min(d.end, B);
                    !p.extend && L > mt && (i = mt, mt = L, L = i);
                    var h = As(c, L), y = As(c, mt);
                    if (h && y && (p.rangeCount !== 1 || p.anchorNode !== h.node || p.anchorOffset !== h.offset || p.focusNode !== y.node || p.focusOffset !== y.offset)) {
                      var v = M.createRange();
                      v.setStart(h.node, h.offset), p.removeAllRanges(), L > mt ? (p.addRange(v), p.extend(y.node, y.offset)) : (v.setEnd(y.node, y.offset), p.addRange(v));
                    }
                  }
                }
              }
              for (M = [], p = c; p = p.parentNode; ) p.nodeType === 1 && M.push({
                element: p,
                left: p.scrollLeft,
                top: p.scrollTop
              });
              for (typeof c.focus == "function" && c.focus(), c = 0; c < M.length; c++) {
                var T = M[c];
                T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
              }
            }
            Wu = !!uf, cf = uf = null;
          } finally {
            ut = n, w.p = a, x.T = e;
          }
        }
        t.current = l, Dt = 2;
      }
    }
    function Xr() {
      if (Dt === 2) {
        Dt = 0;
        var t = pe, l = Ta, e = (l.flags & 8772) !== 0;
        if ((l.subtreeFlags & 8772) !== 0 || e) {
          e = x.T, x.T = null;
          var a = w.p;
          w.p = 2;
          var n = ut;
          ut |= 4;
          try {
            gr(t, l.alternate, l);
          } finally {
            ut = n, w.p = a, x.T = e;
          }
        }
        Dt = 3;
      }
    }
    function Qr() {
      if (Dt === 4 || Dt === 3) {
        Dt = 0, sm();
        var t = pe, l = Ta, e = ee, a = Or;
        (l.subtreeFlags & 10256) !== 0 || (l.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, Ta = pe = null, Zr(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (_e = null), di(e), l = l.stateNode, nl && typeof nl.onCommitFiberRoot == "function") try {
          nl.onCommitFiberRoot(Ba, l, void 0, (l.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          l = x.T, n = w.p, w.p = 2, x.T = null;
          try {
            for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
              var c = a[i];
              u(c.value, {
                componentStack: c.stack
              });
            }
          } finally {
            x.T = l, w.p = n;
          }
        }
        (ee & 3) !== 0 && Bu(), Hl(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === Kc ? _n++ : (_n = 0, Kc = t) : _n = 0, pn(0);
      }
    }
    function Zr(t, l) {
      (t.pooledCacheLanes &= l) === 0 && (l = t.pooledCache, l != null && (t.pooledCache = null, Pa(l)));
    }
    function Bu() {
      return Lr(), Xr(), Qr(), Vr();
    }
    function Vr() {
      if (Dt !== 5) return false;
      var t = pe, l = Zc;
      Zc = 0;
      var e = di(ee), a = x.T, n = w.p;
      try {
        w.p = 32 > e ? 32 : e, x.T = null, e = Vc, Vc = null;
        var u = pe, i = ee;
        if (Dt = 0, Ta = pe = null, ee = 0, (ut & 6) !== 0) throw Error(o(331));
        var c = ut;
        if (ut |= 4, Tr(u.current), Er(u, u.current, i, e), ut = c, pn(0, false), nl && typeof nl.onPostCommitFiberRoot == "function") try {
          nl.onPostCommitFiberRoot(Ba, u);
        } catch {
        }
        return true;
      } finally {
        w.p = n, x.T = a, Zr(t, l);
      }
    }
    function Kr(t, l, e) {
      l = _l(e, l), l = Ac(t.stateNode, l, 2), t = me(t, l, 2), t !== null && (Ya(t, 2), Hl(t));
    }
    function ot(t, l, e) {
      if (t.tag === 3) Kr(t, t, e);
      else for (; l !== null; ) {
        if (l.tag === 3) {
          Kr(l, t, e);
          break;
        } else if (l.tag === 1) {
          var a = l.stateNode;
          if (typeof l.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (_e === null || !_e.has(a))) {
            t = _l(e, t), e = Jo(2), a = me(l, e, 2), a !== null && (ko(e, a, l, t), Ya(a, 2), Hl(a));
            break;
          }
        }
        l = l.return;
      }
    }
    function Wc(t, l, e) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new Cy();
        var n = /* @__PURE__ */ new Set();
        a.set(l, n);
      } else n = a.get(l), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(l, n));
      n.has(e) || (Lc = true, n.add(e), t = Gy.bind(null, t, l, e), l.then(t, t));
    }
    function Gy(t, l, e) {
      var a = t.pingCache;
      a !== null && a.delete(l), t.pingedLanes |= t.suspendedLanes & e, t.warmLanes &= ~e, ht === t && (I & e) === e && (Et === 4 || Et === 3 && (I & 62914560) === I && 300 > al() - Uu ? (ut & 2) === 0 && Ma(t, 0) : Xc |= e, xa === I && (xa = 0)), Hl(t);
    }
    function Jr(t, l) {
      l === 0 && (l = Gf()), t = He(t, l), t !== null && (Ya(t, l), Hl(t));
    }
    function Ly(t) {
      var l = t.memoizedState, e = 0;
      l !== null && (e = l.retryLane), Jr(t, e);
    }
    function Xy(t, l) {
      var e = 0;
      switch (t.tag) {
        case 31:
        case 13:
          var a = t.stateNode, n = t.memoizedState;
          n !== null && (e = n.retryLane);
          break;
        case 19:
          a = t.stateNode;
          break;
        case 22:
          a = t.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      a !== null && a.delete(l), Jr(t, e);
    }
    function Qy(t, l) {
      return fi(t, l);
    }
    var qu = null, Oa = null, Fc = false, Yu = false, $c = false, ze = 0;
    function Hl(t) {
      t !== Oa && t.next === null && (Oa === null ? qu = Oa = t : Oa = Oa.next = t), Yu = true, Fc || (Fc = true, Vy());
    }
    function pn(t, l) {
      if (!$c && Yu) {
        $c = true;
        do
          for (var e = false, a = qu; a !== null; ) {
            if (t !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, c = a.pingedLanes;
                u = (1 << 31 - ul(42 | t) + 1) - 1, u &= n & ~(i & ~c), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (e = true, $r(a, u));
            } else u = I, u = Qn(a, a === ht ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || qa(a, u) || (e = true, $r(a, u));
            a = a.next;
          }
        while (e);
        $c = false;
      }
    }
    function Zy() {
      kr();
    }
    function kr() {
      Yu = Fc = false;
      var t = 0;
      ze !== 0 && l0() && (t = ze);
      for (var l = al(), e = null, a = qu; a !== null; ) {
        var n = a.next, u = Wr(a, l);
        u === 0 ? (a.next = null, e === null ? qu = n : e.next = n, n === null && (Oa = e)) : (e = a, (t !== 0 || (u & 3) !== 0) && (Yu = true)), a = n;
      }
      Dt !== 0 && Dt !== 5 || pn(t), ze !== 0 && (ze = 0);
    }
    function Wr(t, l) {
      for (var e = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - ul(u), c = 1 << i, d = n[i];
        d === -1 ? ((c & e) === 0 || (c & a) !== 0) && (n[i] = vm(c, l)) : d <= l && (t.expiredLanes |= c), u &= ~c;
      }
      if (l = ht, e = I, e = Qn(t, t === l ? e : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, e === 0 || t === l && (st === 2 || st === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && si(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((e & 3) === 0 || qa(t, e)) {
        if (l = e & -e, l === t.callbackPriority) return l;
        switch (a !== null && si(a), di(e)) {
          case 2:
          case 8:
            e = qf;
            break;
          case 32:
            e = Yn;
            break;
          case 268435456:
            e = Yf;
            break;
          default:
            e = Yn;
        }
        return a = Fr.bind(null, t), e = fi(e, a), t.callbackPriority = l, t.callbackNode = e, l;
      }
      return a !== null && a !== null && si(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function Fr(t, l) {
      if (Dt !== 0 && Dt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var e = t.callbackNode;
      if (Bu() && t.callbackNode !== e) return null;
      var a = I;
      return a = Qn(t, t === ht ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Ur(t, a, l), Wr(t, al()), t.callbackNode != null && t.callbackNode === e ? Fr.bind(null, t) : null);
    }
    function $r(t, l) {
      if (Bu()) return null;
      Ur(t, l, true);
    }
    function Vy() {
      a0(function() {
        (ut & 6) !== 0 ? fi(Bf, Zy) : kr();
      });
    }
    function Ic() {
      if (ze === 0) {
        var t = ya;
        t === 0 && (t = Gn, Gn <<= 1, (Gn & 261888) === 0 && (Gn = 256)), ze = t;
      }
      return ze;
    }
    function Ir(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Jn("" + t);
    }
    function Pr(t, l) {
      var e = l.ownerDocument.createElement("input");
      return e.name = l.name, e.value = l.value, t.id && e.setAttribute("form", t.id), l.parentNode.insertBefore(e, l), t = new FormData(t), e.parentNode.removeChild(e), t;
    }
    function Ky(t, l, e, a, n) {
      if (l === "submit" && e && e.stateNode === n) {
        var u = Ir((n[Wt] || null).action), i = a.submitter;
        i && (l = (l = i[Wt] || null) ? Ir(l.formAction) : i.getAttribute("formAction"), l !== null && (u = l, i = null));
        var c = new $n("action", "action", null, a, n);
        t.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (ze !== 0) {
                    var d = i ? Pr(n, i) : new FormData(n);
                    bc(e, {
                      pending: true,
                      data: d,
                      method: n.method,
                      action: u
                    }, null, d);
                  }
                } else typeof u == "function" && (c.preventDefault(), d = i ? Pr(n, i) : new FormData(n), bc(e, {
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
    for (var Pc = 0; Pc < Ci.length; Pc++) {
      var tf = Ci[Pc], Jy = tf.toLowerCase(), ky = tf[0].toUpperCase() + tf.slice(1);
      Ml(Jy, "on" + ky);
    }
    Ml(Os, "onAnimationEnd"), Ml(js, "onAnimationIteration"), Ml(Us, "onAnimationStart"), Ml("dblclick", "onDoubleClick"), Ml("focusin", "onFocus"), Ml("focusout", "onBlur"), Ml(oy, "onTransitionRun"), Ml(ry, "onTransitionStart"), Ml(dy, "onTransitionCancel"), Ml(Ds, "onTransitionEnd"), ta("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), ta("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), ta("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), ta("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), De("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), De("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), De("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), De("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), De("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), De("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var Sn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Wy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));
    function td(t, l) {
      l = (l & 4) !== 0;
      for (var e = 0; e < t.length; e++) {
        var a = t[e], n = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (l) for (var i = a.length - 1; 0 <= i; i--) {
            var c = a[i], d = c.instance, b = c.currentTarget;
            if (c = c.listener, d !== u && n.isPropagationStopped()) break t;
            u = c, n.currentTarget = b;
            try {
              u(n);
            } catch (E) {
              tu(E);
            }
            n.currentTarget = null, u = d;
          }
          else for (i = 0; i < a.length; i++) {
            if (c = a[i], d = c.instance, b = c.currentTarget, c = c.listener, d !== u && n.isPropagationStopped()) break t;
            u = c, n.currentTarget = b;
            try {
              u(n);
            } catch (E) {
              tu(E);
            }
            n.currentTarget = null, u = d;
          }
        }
      }
    }
    function $(t, l) {
      var e = l[mi];
      e === void 0 && (e = l[mi] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      e.has(a) || (ld(l, t, 2, false), e.add(a));
    }
    function lf(t, l, e) {
      var a = 0;
      l && (a |= 4), ld(e, t, a, l);
    }
    var Gu = "_reactListening" + Math.random().toString(36).slice(2);
    function ef(t) {
      if (!t[Gu]) {
        t[Gu] = true, Jf.forEach(function(e) {
          e !== "selectionchange" && (Wy.has(e) || lf(e, false, t), lf(e, true, t));
        });
        var l = t.nodeType === 9 ? t : t.ownerDocument;
        l === null || l[Gu] || (l[Gu] = true, lf("selectionchange", false, l));
      }
    }
    function ld(t, l, e, a) {
      switch (jd(l)) {
        case 2:
          var n = E0;
          break;
        case 8:
          n = A0;
          break;
        default:
          n = bf;
      }
      e = n.bind(null, l, e, t), n = void 0, !zi || l !== "touchstart" && l !== "touchmove" && l !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(l, e, {
        capture: true,
        passive: n
      }) : t.addEventListener(l, e, true) : n !== void 0 ? t.addEventListener(l, e, {
        passive: n
      }) : t.addEventListener(l, e, false);
    }
    function af(t, l, e, a, n) {
      var u = a;
      if ((l & 1) === 0 && (l & 2) === 0 && a !== null) t: for (; ; ) {
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
            if (i = $e(c), i === null) return;
            if (d = i.tag, d === 5 || d === 6 || d === 26 || d === 27) {
              a = u = i;
              continue t;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
      us(function() {
        var b = u, E = pi(e), M = [];
        t: {
          var _ = Rs.get(t);
          if (_ !== void 0) {
            var p = $n, B = t;
            switch (t) {
              case "keypress":
                if (Wn(e) === 0) break t;
              case "keydown":
              case "keyup":
                p = Xm;
                break;
              case "focusin":
                B = "focus", p = Ti;
                break;
              case "focusout":
                B = "blur", p = Ti;
                break;
              case "beforeblur":
              case "afterblur":
                p = Ti;
                break;
              case "click":
                if (e.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                p = fs;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                p = jm;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                p = Vm;
                break;
              case Os:
              case js:
              case Us:
                p = Rm;
                break;
              case Ds:
                p = Jm;
                break;
              case "scroll":
              case "scrollend":
                p = Nm;
                break;
              case "wheel":
                p = Wm;
                break;
              case "copy":
              case "cut":
              case "paste":
                p = Cm;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                p = os;
                break;
              case "toggle":
              case "beforetoggle":
                p = $m;
            }
            var L = (l & 4) !== 0, mt = !L && (t === "scroll" || t === "scrollend"), h = L ? _ !== null ? _ + "Capture" : null : _;
            L = [];
            for (var y = b, v; y !== null; ) {
              var T = y;
              if (v = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || v === null || h === null || (T = Xa(y, h), T != null && L.push(zn(y, T, v))), mt) break;
              y = y.return;
            }
            0 < L.length && (_ = new p(_, B, null, e, E), M.push({
              event: _,
              listeners: L
            }));
          }
        }
        if ((l & 7) === 0) {
          t: {
            if (_ = t === "mouseover" || t === "pointerover", p = t === "mouseout" || t === "pointerout", _ && e !== _i && (B = e.relatedTarget || e.fromElement) && ($e(B) || B[Fe])) break t;
            if ((p || _) && (_ = E.window === E ? E : (_ = E.ownerDocument) ? _.defaultView || _.parentWindow : window, p ? (B = e.relatedTarget || e.toElement, p = b, B = B ? $e(B) : null, B !== null && (mt = N(B), L = B.tag, B !== mt || L !== 5 && L !== 27 && L !== 6) && (B = null)) : (p = null, B = b), p !== B)) {
              if (L = fs, T = "onMouseLeave", h = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (L = os, T = "onPointerLeave", h = "onPointerEnter", y = "pointer"), mt = p == null ? _ : La(p), v = B == null ? _ : La(B), _ = new L(T, y + "leave", p, e, E), _.target = mt, _.relatedTarget = v, T = null, $e(E) === b && (L = new L(h, y + "enter", B, e, E), L.target = v, L.relatedTarget = mt, T = L), mt = T, p && B) l: {
                for (L = Fy, h = p, y = B, v = 0, T = h; T; T = L(T)) v++;
                T = 0;
                for (var G = y; G; G = L(G)) T++;
                for (; 0 < v - T; ) h = L(h), v--;
                for (; 0 < T - v; ) y = L(y), T--;
                for (; v--; ) {
                  if (h === y || y !== null && h === y.alternate) {
                    L = h;
                    break l;
                  }
                  h = L(h), y = L(y);
                }
                L = null;
              }
              else L = null;
              p !== null && ed(M, _, p, L, false), B !== null && mt !== null && ed(M, mt, B, L, true);
            }
          }
          t: {
            if (_ = b ? La(b) : window, p = _.nodeName && _.nodeName.toLowerCase(), p === "select" || p === "input" && _.type === "file") var at = bs;
            else if (gs(_)) if (_s) at = cy;
            else {
              at = uy;
              var q = ny;
            }
            else p = _.nodeName, !p || p.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? b && bi(b.elementType) && (at = bs) : at = iy;
            if (at && (at = at(t, b))) {
              vs(M, at, e, E);
              break t;
            }
            q && q(t, _, b), t === "focusout" && b && _.type === "number" && b.memoizedProps.value != null && vi(_, "number", _.value);
          }
          switch (q = b ? La(b) : window, t) {
            case "focusin":
              (gs(q) || q.contentEditable === "true") && (ia = q, Di = b, Fa = null);
              break;
            case "focusout":
              Fa = Di = ia = null;
              break;
            case "mousedown":
              Ri = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Ri = false, Ms(M, e, E);
              break;
            case "selectionchange":
              if (sy) break;
            case "keydown":
            case "keyup":
              Ms(M, e, E);
          }
          var J;
          if (Ni) t: {
            switch (t) {
              case "compositionstart":
                var P = "onCompositionStart";
                break t;
              case "compositionend":
                P = "onCompositionEnd";
                break t;
              case "compositionupdate":
                P = "onCompositionUpdate";
                break t;
            }
            P = void 0;
          }
          else ua ? ys(t, e) && (P = "onCompositionEnd") : t === "keydown" && e.keyCode === 229 && (P = "onCompositionStart");
          P && (rs && e.locale !== "ko" && (ua || P !== "onCompositionStart" ? P === "onCompositionEnd" && ua && (J = is()) : (ie = E, Ei = "value" in ie ? ie.value : ie.textContent, ua = true)), q = Lu(b, P), 0 < q.length && (P = new ss(P, t, null, e, E), M.push({
            event: P,
            listeners: q
          }), J ? P.data = J : (J = hs(e), J !== null && (P.data = J)))), (J = Pm ? ty(t, e) : ly(t, e)) && (P = Lu(b, "onBeforeInput"), 0 < P.length && (q = new ss("onBeforeInput", "beforeinput", null, e, E), M.push({
            event: q,
            listeners: P
          }), q.data = J)), Ky(M, t, b, e, E);
        }
        td(M, l);
      });
    }
    function zn(t, l, e) {
      return {
        instance: t,
        listener: l,
        currentTarget: e
      };
    }
    function Lu(t, l) {
      for (var e = l + "Capture", a = []; t !== null; ) {
        var n = t, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Xa(t, e), n != null && a.unshift(zn(t, n, u)), n = Xa(t, l), n != null && a.push(zn(t, n, u))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function Fy(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function ed(t, l, e, a, n) {
      for (var u = l._reactName, i = []; e !== null && e !== a; ) {
        var c = e, d = c.alternate, b = c.stateNode;
        if (c = c.tag, d !== null && d === a) break;
        c !== 5 && c !== 26 && c !== 27 || b === null || (d = b, n ? (b = Xa(e, u), b != null && i.unshift(zn(e, b, d))) : n || (b = Xa(e, u), b != null && i.push(zn(e, b, d)))), e = e.return;
      }
      i.length !== 0 && t.push({
        event: l,
        listeners: i
      });
    }
    var $y = /\r\n?/g, Iy = /\u0000|\uFFFD/g;
    function ad(t) {
      return (typeof t == "string" ? t : "" + t).replace($y, `
`).replace(Iy, "");
    }
    function nd(t, l) {
      return l = ad(l), ad(t) === l;
    }
    function dt(t, l, e, a, n, u) {
      switch (e) {
        case "children":
          typeof a == "string" ? l === "body" || l === "textarea" && a === "" || ea(t, a) : (typeof a == "number" || typeof a == "bigint") && l !== "body" && ea(t, "" + a);
          break;
        case "className":
          Vn(t, "class", a);
          break;
        case "tabIndex":
          Vn(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Vn(t, e, a);
          break;
        case "style":
          as(t, a, u);
          break;
        case "data":
          if (l !== "object") {
            Vn(t, "data", a);
            break;
          }
        case "src":
        case "href":
          if (a === "" && (l !== "a" || e !== "href")) {
            t.removeAttribute(e);
            break;
          }
          if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(e);
            break;
          }
          a = Jn("" + a), t.setAttribute(e, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(e, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (e === "formAction" ? (l !== "input" && dt(t, l, "name", n.name, n, null), dt(t, l, "formEncType", n.formEncType, n, null), dt(t, l, "formMethod", n.formMethod, n, null), dt(t, l, "formTarget", n.formTarget, n, null)) : (dt(t, l, "encType", n.encType, n, null), dt(t, l, "method", n.method, n, null), dt(t, l, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(e);
            break;
          }
          a = Jn("" + a), t.setAttribute(e, a);
          break;
        case "onClick":
          a != null && (t.onclick = Ll);
          break;
        case "onScroll":
          a != null && $("scroll", t);
          break;
        case "onScrollEnd":
          a != null && $("scrollend", t);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
            if (e = a.__html, e != null) {
              if (n.children != null) throw Error(o(60));
              t.innerHTML = e;
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
          e = Jn("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "" + a) : t.removeAttribute(e);
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
          a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, "") : t.removeAttribute(e);
          break;
        case "capture":
        case "download":
          a === true ? t.setAttribute(e, "") : a !== false && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(e, a) : t.removeAttribute(e);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(e, a) : t.removeAttribute(e);
          break;
        case "rowSpan":
        case "start":
          a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(e) : t.setAttribute(e, a);
          break;
        case "popover":
          $("beforetoggle", t), $("toggle", t), Zn(t, "popover", a);
          break;
        case "xlinkActuate":
          Gl(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Gl(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Gl(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Gl(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Gl(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Gl(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Gl(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Zn(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N") && (e = Tm.get(e) || e, Zn(t, e, a));
      }
    }
    function nf(t, l, e, a, n, u) {
      switch (e) {
        case "style":
          as(t, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(o(61));
            if (e = a.__html, e != null) {
              if (n.children != null) throw Error(o(60));
              t.innerHTML = e;
            }
          }
          break;
        case "children":
          typeof a == "string" ? ea(t, a) : (typeof a == "number" || typeof a == "bigint") && ea(t, "" + a);
          break;
        case "onScroll":
          a != null && $("scroll", t);
          break;
        case "onScrollEnd":
          a != null && $("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Ll);
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
          if (!kf.hasOwnProperty(e)) t: {
            if (e[0] === "o" && e[1] === "n" && (n = e.endsWith("Capture"), l = e.slice(2, n ? e.length - 7 : void 0), u = t[Wt] || null, u = u != null ? u[e] : null, typeof u == "function" && t.removeEventListener(l, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (e in t ? t[e] = null : t.hasAttribute(e) && t.removeAttribute(e)), t.addEventListener(l, a, n);
              break t;
            }
            e in t ? t[e] = a : a === true ? t.setAttribute(e, "") : Zn(t, e, a);
          }
      }
    }
    function Gt(t, l, e) {
      switch (l) {
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
          $("error", t), $("load", t);
          var a = false, n = false, u;
          for (u in e) if (e.hasOwnProperty(u)) {
            var i = e[u];
            if (i != null) switch (u) {
              case "src":
                a = true;
                break;
              case "srcSet":
                n = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, l));
              default:
                dt(t, l, u, i, e, null);
            }
          }
          n && dt(t, l, "srcSet", e.srcSet, e, null), a && dt(t, l, "src", e.src, e, null);
          return;
        case "input":
          $("invalid", t);
          var c = u = i = n = null, d = null, b = null;
          for (a in e) if (e.hasOwnProperty(a)) {
            var E = e[a];
            if (E != null) switch (a) {
              case "name":
                n = E;
                break;
              case "type":
                i = E;
                break;
              case "checked":
                d = E;
                break;
              case "defaultChecked":
                b = E;
                break;
              case "value":
                u = E;
                break;
              case "defaultValue":
                c = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(o(137, l));
                break;
              default:
                dt(t, l, a, E, e, null);
            }
          }
          Pf(t, u, c, d, b, i, n, false);
          return;
        case "select":
          $("invalid", t), a = i = u = null;
          for (n in e) if (e.hasOwnProperty(n) && (c = e[n], c != null)) switch (n) {
            case "value":
              u = c;
              break;
            case "defaultValue":
              i = c;
              break;
            case "multiple":
              a = c;
            default:
              dt(t, l, n, c, e, null);
          }
          l = u, e = i, t.multiple = !!a, l != null ? la(t, !!a, l, false) : e != null && la(t, !!a, e, true);
          return;
        case "textarea":
          $("invalid", t), u = n = a = null;
          for (i in e) if (e.hasOwnProperty(i) && (c = e[i], c != null)) switch (i) {
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
              if (c != null) throw Error(o(91));
              break;
            default:
              dt(t, l, i, c, e, null);
          }
          ls(t, a, n, u);
          return;
        case "option":
          for (d in e) if (e.hasOwnProperty(d) && (a = e[d], a != null)) switch (d) {
            case "selected":
              t.selected = a && typeof a != "function" && typeof a != "symbol";
              break;
            default:
              dt(t, l, d, a, e, null);
          }
          return;
        case "dialog":
          $("beforetoggle", t), $("toggle", t), $("cancel", t), $("close", t);
          break;
        case "iframe":
        case "object":
          $("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < Sn.length; a++) $(Sn[a], t);
          break;
        case "image":
          $("error", t), $("load", t);
          break;
        case "details":
          $("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          $("error", t), $("load", t);
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
          for (b in e) if (e.hasOwnProperty(b) && (a = e[b], a != null)) switch (b) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, l));
            default:
              dt(t, l, b, a, e, null);
          }
          return;
        default:
          if (bi(l)) {
            for (E in e) e.hasOwnProperty(E) && (a = e[E], a !== void 0 && nf(t, l, E, a, e, void 0));
            return;
          }
      }
      for (c in e) e.hasOwnProperty(c) && (a = e[c], a != null && dt(t, l, c, a, e, null));
    }
    function Py(t, l, e, a) {
      switch (l) {
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
          var n = null, u = null, i = null, c = null, d = null, b = null, E = null;
          for (p in e) {
            var M = e[p];
            if (e.hasOwnProperty(p) && M != null) switch (p) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                d = M;
              default:
                a.hasOwnProperty(p) || dt(t, l, p, null, a, M);
            }
          }
          for (var _ in a) {
            var p = a[_];
            if (M = e[_], a.hasOwnProperty(_) && (p != null || M != null)) switch (_) {
              case "type":
                u = p;
                break;
              case "name":
                n = p;
                break;
              case "checked":
                b = p;
                break;
              case "defaultChecked":
                E = p;
                break;
              case "value":
                i = p;
                break;
              case "defaultValue":
                c = p;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(o(137, l));
                break;
              default:
                p !== M && dt(t, l, _, p, a, M);
            }
          }
          gi(t, i, c, d, b, E, u, n);
          return;
        case "select":
          p = i = c = _ = null;
          for (u in e) if (d = e[u], e.hasOwnProperty(u) && d != null) switch (u) {
            case "value":
              break;
            case "multiple":
              p = d;
            default:
              a.hasOwnProperty(u) || dt(t, l, u, null, a, d);
          }
          for (n in a) if (u = a[n], d = e[n], a.hasOwnProperty(n) && (u != null || d != null)) switch (n) {
            case "value":
              _ = u;
              break;
            case "defaultValue":
              c = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== d && dt(t, l, n, u, a, d);
          }
          l = c, e = i, a = p, _ != null ? la(t, !!e, _, false) : !!a != !!e && (l != null ? la(t, !!e, l, true) : la(t, !!e, e ? [] : "", false));
          return;
        case "textarea":
          p = _ = null;
          for (c in e) if (n = e[c], e.hasOwnProperty(c) && n != null && !a.hasOwnProperty(c)) switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              dt(t, l, c, null, a, n);
          }
          for (i in a) if (n = a[i], u = e[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              _ = n;
              break;
            case "defaultValue":
              p = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(o(91));
              break;
            default:
              n !== u && dt(t, l, i, n, a, u);
          }
          ts(t, _, p);
          return;
        case "option":
          for (var B in e) if (_ = e[B], e.hasOwnProperty(B) && _ != null && !a.hasOwnProperty(B)) switch (B) {
            case "selected":
              t.selected = false;
              break;
            default:
              dt(t, l, B, null, a, _);
          }
          for (d in a) if (_ = a[d], p = e[d], a.hasOwnProperty(d) && _ !== p && (_ != null || p != null)) switch (d) {
            case "selected":
              t.selected = _ && typeof _ != "function" && typeof _ != "symbol";
              break;
            default:
              dt(t, l, d, _, a, p);
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
          for (var L in e) _ = e[L], e.hasOwnProperty(L) && _ != null && !a.hasOwnProperty(L) && dt(t, l, L, null, a, _);
          for (b in a) if (_ = a[b], p = e[b], a.hasOwnProperty(b) && _ !== p && (_ != null || p != null)) switch (b) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (_ != null) throw Error(o(137, l));
              break;
            default:
              dt(t, l, b, _, a, p);
          }
          return;
        default:
          if (bi(l)) {
            for (var mt in e) _ = e[mt], e.hasOwnProperty(mt) && _ !== void 0 && !a.hasOwnProperty(mt) && nf(t, l, mt, void 0, a, _);
            for (E in a) _ = a[E], p = e[E], !a.hasOwnProperty(E) || _ === p || _ === void 0 && p === void 0 || nf(t, l, E, _, a, p);
            return;
          }
      }
      for (var h in e) _ = e[h], e.hasOwnProperty(h) && _ != null && !a.hasOwnProperty(h) && dt(t, l, h, null, a, _);
      for (M in a) _ = a[M], p = e[M], !a.hasOwnProperty(M) || _ === p || _ == null && p == null || dt(t, l, M, _, a, p);
    }
    function ud(t) {
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
    function t0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, l = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
          var n = e[a], u = n.transferSize, i = n.initiatorType, c = n.duration;
          if (u && c && ud(i)) {
            for (i = 0, c = n.responseEnd, a += 1; a < e.length; a++) {
              var d = e[a], b = d.startTime;
              if (b > c) break;
              var E = d.transferSize, M = d.initiatorType;
              E && ud(M) && (d = d.responseEnd, i += E * (d < c ? 1 : (c - b) / (d - b)));
            }
            if (--a, l += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return l / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var uf = null, cf = null;
    function Xu(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function id(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function cd(t, l) {
      if (t === 0) switch (l) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return t === 1 && l === "foreignObject" ? 0 : t;
    }
    function ff(t, l) {
      return t === "textarea" || t === "noscript" || typeof l.children == "string" || typeof l.children == "number" || typeof l.children == "bigint" || typeof l.dangerouslySetInnerHTML == "object" && l.dangerouslySetInnerHTML !== null && l.dangerouslySetInnerHTML.__html != null;
    }
    var sf = null;
    function l0() {
      var t = window.event;
      return t && t.type === "popstate" ? t === sf ? false : (sf = t, true) : (sf = null, false);
    }
    var fd = typeof setTimeout == "function" ? setTimeout : void 0, e0 = typeof clearTimeout == "function" ? clearTimeout : void 0, sd = typeof Promise == "function" ? Promise : void 0, a0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof sd < "u" ? function(t) {
      return sd.resolve(null).then(t).catch(n0);
    } : fd;
    function n0(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Ee(t) {
      return t === "head";
    }
    function od(t, l) {
      var e = l, a = 0;
      do {
        var n = e.nextSibling;
        if (t.removeChild(e), n && n.nodeType === 8) if (e = n.data, e === "/$" || e === "/&") {
          if (a === 0) {
            t.removeChild(n), Ra(l);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&") a++;
        else if (e === "html") En(t.ownerDocument.documentElement);
        else if (e === "head") {
          e = t.ownerDocument.head, En(e);
          for (var u = e.firstChild; u; ) {
            var i = u.nextSibling, c = u.nodeName;
            u[Ga] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && u.rel.toLowerCase() === "stylesheet" || e.removeChild(u), u = i;
          }
        } else e === "body" && En(t.ownerDocument.body);
        e = n;
      } while (e);
      Ra(l);
    }
    function rd(t, l) {
      var e = t;
      t = 0;
      do {
        var a = e.nextSibling;
        if (e.nodeType === 1 ? l ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (l ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8) if (e = a.data, e === "/$") {
          if (t === 0) break;
          t--;
        } else e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || t++;
        e = a;
      } while (e);
    }
    function of(t) {
      var l = t.firstChild;
      for (l && l.nodeType === 10 && (l = l.nextSibling); l; ) {
        var e = l;
        switch (l = l.nextSibling, e.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            of(e), yi(e);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (e.rel.toLowerCase() === "stylesheet") continue;
        }
        t.removeChild(e);
      }
    }
    function u0(t, l, e, a) {
      for (; t.nodeType === 1; ) {
        var n = e;
        if (t.nodeName.toLowerCase() !== l.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ga]) switch (l) {
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
        } else if (l === "input" && t.type === "hidden") {
          var u = n.name == null ? null : "" + n.name;
          if (n.type === "hidden" && t.getAttribute("name") === u) return t;
        } else return t;
        if (t = Al(t.nextSibling), t === null) break;
      }
      return null;
    }
    function i0(t, l, e) {
      if (l === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Al(t.nextSibling), t === null)) return null;
      return t;
    }
    function dd(t, l) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Al(t.nextSibling), t === null)) return null;
      return t;
    }
    function rf(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function df(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function c0(t, l) {
      var e = t.ownerDocument;
      if (t.data === "$~") t._reactRetry = l;
      else if (t.data !== "$?" || e.readyState !== "loading") l();
      else {
        var a = function() {
          l(), e.removeEventListener("DOMContentLoaded", a);
        };
        e.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
      }
    }
    function Al(t) {
      for (; t != null; t = t.nextSibling) {
        var l = t.nodeType;
        if (l === 1 || l === 3) break;
        if (l === 8) {
          if (l = t.data, l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&" || l === "F!" || l === "F") break;
          if (l === "/$" || l === "/&") return null;
        }
      }
      return t;
    }
    var mf = null;
    function md(t) {
      t = t.nextSibling;
      for (var l = 0; t; ) {
        if (t.nodeType === 8) {
          var e = t.data;
          if (e === "/$" || e === "/&") {
            if (l === 0) return Al(t.nextSibling);
            l--;
          } else e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || l++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function yd(t) {
      t = t.previousSibling;
      for (var l = 0; t; ) {
        if (t.nodeType === 8) {
          var e = t.data;
          if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
            if (l === 0) return t;
            l--;
          } else e !== "/$" && e !== "/&" || l++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function hd(t, l, e) {
      switch (l = Xu(e), t) {
        case "html":
          if (t = l.documentElement, !t) throw Error(o(452));
          return t;
        case "head":
          if (t = l.head, !t) throw Error(o(453));
          return t;
        case "body":
          if (t = l.body, !t) throw Error(o(454));
          return t;
        default:
          throw Error(o(451));
      }
    }
    function En(t) {
      for (var l = t.attributes; l.length; ) t.removeAttributeNode(l[0]);
      yi(t);
    }
    var xl = /* @__PURE__ */ new Map(), gd = /* @__PURE__ */ new Set();
    function Qu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var ae = w.d;
    w.d = {
      f: f0,
      r: s0,
      D: o0,
      C: r0,
      L: d0,
      m: m0,
      X: h0,
      S: y0,
      M: g0
    };
    function f0() {
      var t = ae.f(), l = wu();
      return t || l;
    }
    function s0(t) {
      var l = Ie(t);
      l !== null && l.tag === 5 && l.type === "form" ? Ro(l) : ae.r(t);
    }
    var ja = typeof document > "u" ? null : document;
    function vd(t, l, e) {
      var a = ja;
      if (a && typeof l == "string" && l) {
        var n = vl(l);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof e == "string" && (n += '[crossorigin="' + e + '"]'), gd.has(n) || (gd.add(n), t = {
          rel: t,
          crossOrigin: e,
          href: l
        }, a.querySelector(n) === null && (l = a.createElement("link"), Gt(l, "link", t), Rt(l), a.head.appendChild(l)));
      }
    }
    function o0(t) {
      ae.D(t), vd("dns-prefetch", t, null);
    }
    function r0(t, l) {
      ae.C(t, l), vd("preconnect", t, l);
    }
    function d0(t, l, e) {
      ae.L(t, l, e);
      var a = ja;
      if (a && t && l) {
        var n = 'link[rel="preload"][as="' + vl(l) + '"]';
        l === "image" && e && e.imageSrcSet ? (n += '[imagesrcset="' + vl(e.imageSrcSet) + '"]', typeof e.imageSizes == "string" && (n += '[imagesizes="' + vl(e.imageSizes) + '"]')) : n += '[href="' + vl(t) + '"]';
        var u = n;
        switch (l) {
          case "style":
            u = Ua(t);
            break;
          case "script":
            u = Da(t);
        }
        xl.has(u) || (t = U({
          rel: "preload",
          href: l === "image" && e && e.imageSrcSet ? void 0 : t,
          as: l
        }, e), xl.set(u, t), a.querySelector(n) !== null || l === "style" && a.querySelector(An(u)) || l === "script" && a.querySelector(xn(u)) || (l = a.createElement("link"), Gt(l, "link", t), Rt(l), a.head.appendChild(l)));
      }
    }
    function m0(t, l) {
      ae.m(t, l);
      var e = ja;
      if (e && t) {
        var a = l && typeof l.as == "string" ? l.as : "script", n = 'link[rel="modulepreload"][as="' + vl(a) + '"][href="' + vl(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Da(t);
        }
        if (!xl.has(u) && (t = U({
          rel: "modulepreload",
          href: t
        }, l), xl.set(u, t), e.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (e.querySelector(xn(u))) return;
          }
          a = e.createElement("link"), Gt(a, "link", t), Rt(a), e.head.appendChild(a);
        }
      }
    }
    function y0(t, l, e) {
      ae.S(t, l, e);
      var a = ja;
      if (a && t) {
        var n = Pe(a).hoistableStyles, u = Ua(t);
        l = l || "default";
        var i = n.get(u);
        if (!i) {
          var c = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(An(u))) c.loading = 5;
          else {
            t = U({
              rel: "stylesheet",
              href: t,
              "data-precedence": l
            }, e), (e = xl.get(u)) && yf(t, e);
            var d = i = a.createElement("link");
            Rt(d), Gt(d, "link", t), d._p = new Promise(function(b, E) {
              d.onload = b, d.onerror = E;
            }), d.addEventListener("load", function() {
              c.loading |= 1;
            }), d.addEventListener("error", function() {
              c.loading |= 2;
            }), c.loading |= 4, Zu(i, l, a);
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
    function h0(t, l) {
      ae.X(t, l);
      var e = ja;
      if (e && t) {
        var a = Pe(e).hoistableScripts, n = Da(t), u = a.get(n);
        u || (u = e.querySelector(xn(n)), u || (t = U({
          src: t,
          async: true
        }, l), (l = xl.get(n)) && hf(t, l), u = e.createElement("script"), Rt(u), Gt(u, "link", t), e.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function g0(t, l) {
      ae.M(t, l);
      var e = ja;
      if (e && t) {
        var a = Pe(e).hoistableScripts, n = Da(t), u = a.get(n);
        u || (u = e.querySelector(xn(n)), u || (t = U({
          src: t,
          async: true,
          type: "module"
        }, l), (l = xl.get(n)) && hf(t, l), u = e.createElement("script"), Rt(u), Gt(u, "link", t), e.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function bd(t, l, e, a) {
      var n = (n = k.current) ? Qu(n) : null;
      if (!n) throw Error(o(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof e.precedence == "string" && typeof e.href == "string" ? (l = Ua(e.href), e = Pe(n).hoistableStyles, a = e.get(l), a || (a = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, e.set(l, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
            t = Ua(e.href);
            var u = Pe(n).hoistableStyles, i = u.get(t);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, i), (u = n.querySelector(An(t))) && !u._p && (i.instance = u, i.state.loading = 5), xl.has(t) || (e = {
              rel: "preload",
              as: "style",
              href: e.href,
              crossOrigin: e.crossOrigin,
              integrity: e.integrity,
              media: e.media,
              hrefLang: e.hrefLang,
              referrerPolicy: e.referrerPolicy
            }, xl.set(t, e), u || v0(n, t, e, i.state))), l && a === null) throw Error(o(528, ""));
            return i;
          }
          if (l && a !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return l = e.async, e = e.src, typeof e == "string" && l && typeof l != "function" && typeof l != "symbol" ? (l = Da(e), e = Pe(n).hoistableScripts, a = e.get(l), a || (a = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, e.set(l, a)), a) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(o(444, t));
      }
    }
    function Ua(t) {
      return 'href="' + vl(t) + '"';
    }
    function An(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function _d(t) {
      return U({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function v0(t, l, e, a) {
      t.querySelector('link[rel="preload"][as="style"][' + l + "]") ? a.loading = 1 : (l = t.createElement("link"), a.preload = l, l.addEventListener("load", function() {
        return a.loading |= 1;
      }), l.addEventListener("error", function() {
        return a.loading |= 2;
      }), Gt(l, "link", e), Rt(l), t.head.appendChild(l));
    }
    function Da(t) {
      return '[src="' + vl(t) + '"]';
    }
    function xn(t) {
      return "script[async]" + t;
    }
    function pd(t, l, e) {
      if (l.count++, l.instance === null) switch (l.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + vl(e.href) + '"]');
          if (a) return l.instance = a, Rt(a), a;
          var n = U({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Rt(a), Gt(a, "style", n), Zu(a, e.precedence, t), l.instance = a;
        case "stylesheet":
          n = Ua(e.href);
          var u = t.querySelector(An(n));
          if (u) return l.state.loading |= 4, l.instance = u, Rt(u), u;
          a = _d(e), (n = xl.get(n)) && yf(a, n), u = (t.ownerDocument || t).createElement("link"), Rt(u);
          var i = u;
          return i._p = new Promise(function(c, d) {
            i.onload = c, i.onerror = d;
          }), Gt(u, "link", a), l.state.loading |= 4, Zu(u, e.precedence, t), l.instance = u;
        case "script":
          return u = Da(e.src), (n = t.querySelector(xn(u))) ? (l.instance = n, Rt(n), n) : (a = e, (n = xl.get(u)) && (a = U({}, e), hf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Rt(n), Gt(n, "link", a), t.head.appendChild(n), l.instance = n);
        case "void":
          return null;
        default:
          throw Error(o(443, l.type));
      }
      else l.type === "stylesheet" && (l.state.loading & 4) === 0 && (a = l.instance, l.state.loading |= 4, Zu(a, e.precedence, t));
      return l.instance;
    }
    function Zu(t, l, e) {
      for (var a = e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var c = a[i];
        if (c.dataset.precedence === l) u = c;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (l = e.nodeType === 9 ? e.head : e, l.insertBefore(t, l.firstChild));
    }
    function yf(t, l) {
      t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.title == null && (t.title = l.title);
    }
    function hf(t, l) {
      t.crossOrigin == null && (t.crossOrigin = l.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = l.referrerPolicy), t.integrity == null && (t.integrity = l.integrity);
    }
    var Vu = null;
    function Sd(t, l, e) {
      if (Vu === null) {
        var a = /* @__PURE__ */ new Map(), n = Vu = /* @__PURE__ */ new Map();
        n.set(e, a);
      } else n = Vu, a = n.get(e), a || (a = /* @__PURE__ */ new Map(), n.set(e, a));
      if (a.has(t)) return a;
      for (a.set(t, null), e = e.getElementsByTagName(t), n = 0; n < e.length; n++) {
        var u = e[n];
        if (!(u[Ga] || u[Ht] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = u.getAttribute(l) || "";
          i = t + i;
          var c = a.get(i);
          c ? c.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function zd(t, l, e) {
      t = t.ownerDocument || t, t.head.insertBefore(e, l === "title" ? t.querySelector("head > title") : null);
    }
    function b0(t, l, e) {
      if (e === 1 || l.itemProp != null) return false;
      switch (t) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof l.precedence != "string" || typeof l.href != "string" || l.href === "") break;
          return true;
        case "link":
          if (typeof l.rel != "string" || typeof l.href != "string" || l.href === "" || l.onLoad || l.onError) break;
          switch (l.rel) {
            case "stylesheet":
              return t = l.disabled, typeof l.precedence == "string" && t == null;
            default:
              return true;
          }
        case "script":
          if (l.async && typeof l.async != "function" && typeof l.async != "symbol" && !l.onLoad && !l.onError && l.src && typeof l.src == "string") return true;
      }
      return false;
    }
    function Ed(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function _0(t, l, e, a) {
      if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (e.state.loading & 4) === 0) {
        if (e.instance === null) {
          var n = Ua(a.href), u = l.querySelector(An(n));
          if (u) {
            l = u._p, l !== null && typeof l == "object" && typeof l.then == "function" && (t.count++, t = Ku.bind(t), l.then(t, t)), e.state.loading |= 4, e.instance = u, Rt(u);
            return;
          }
          u = l.ownerDocument || l, a = _d(a), (n = xl.get(n)) && yf(a, n), u = u.createElement("link"), Rt(u);
          var i = u;
          i._p = new Promise(function(c, d) {
            i.onload = c, i.onerror = d;
          }), Gt(u, "link", a), e.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(e, l), (l = e.state.preload) && (e.state.loading & 3) === 0 && (t.count++, e = Ku.bind(t), l.addEventListener("load", e), l.addEventListener("error", e));
      }
    }
    var gf = 0;
    function p0(t, l) {
      return t.stylesheets && t.count === 0 && ku(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(e) {
        var a = setTimeout(function() {
          if (t.stylesheets && ku(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + l);
        0 < t.imgBytes && gf === 0 && (gf = 62500 * t0());
        var n = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && ku(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > gf ? 50 : 800) + l);
        return t.unsuspend = e, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function Ku() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ku(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var Ju = null;
    function ku(t, l) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Ju = /* @__PURE__ */ new Map(), l.forEach(S0, t), Ju = null, Ku.call(t));
    }
    function S0(t, l) {
      if (!(l.state.loading & 4)) {
        var e = Ju.get(t);
        if (e) var a = e.get(null);
        else {
          e = /* @__PURE__ */ new Map(), Ju.set(t, e);
          for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (e.set(i.dataset.precedence, i), a = i);
          }
          a && e.set(null, a);
        }
        n = l.instance, i = n.getAttribute("data-precedence"), u = e.get(i) || a, u === a && e.set(null, n), e.set(i, n), this.count++, a = Ku.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), l.state.loading |= 4;
      }
    }
    var Tn = {
      $$typeof: At,
      Provider: null,
      Consumer: null,
      _currentValue: Q,
      _currentValue2: Q,
      _threadCount: 0
    };
    function z0(t, l, e, a, n, u, i, c, d) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = oi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = oi(0), this.hiddenUpdates = oi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = d, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Ad(t, l, e, a, n, u, i, c, d, b, E, M) {
      return t = new z0(t, l, e, i, d, b, E, M, c), l = 1, u === true && (l |= 24), u = cl(3, null, null, l), t.current = u, u.stateNode = t, l = ki(), l.refCount++, t.pooledCache = l, l.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: e,
        cache: l
      }, Ii(u), t;
    }
    function xd(t) {
      return t ? (t = sa, t) : sa;
    }
    function Td(t, l, e, a, n, u) {
      n = xd(n), a.context === null ? a.context = n : a.pendingContext = n, a = de(l), a.payload = {
        element: e
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), e = me(t, a, l), e !== null && (ll(e, t, l), an(e, t, l));
    }
    function Md(t, l) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var e = t.retryLane;
        t.retryLane = e !== 0 && e < l ? e : l;
      }
    }
    function vf(t, l) {
      Md(t, l), (t = t.alternate) && Md(t, l);
    }
    function Nd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var l = He(t, 67108864);
        l !== null && ll(l, t, 67108864), vf(t, 67108864);
      }
    }
    function Od(t) {
      if (t.tag === 13 || t.tag === 31) {
        var l = dl();
        l = ri(l);
        var e = He(t, l);
        e !== null && ll(e, t, l), vf(t, l);
      }
    }
    var Wu = true;
    function E0(t, l, e, a) {
      var n = x.T;
      x.T = null;
      var u = w.p;
      try {
        w.p = 2, bf(t, l, e, a);
      } finally {
        w.p = u, x.T = n;
      }
    }
    function A0(t, l, e, a) {
      var n = x.T;
      x.T = null;
      var u = w.p;
      try {
        w.p = 8, bf(t, l, e, a);
      } finally {
        w.p = u, x.T = n;
      }
    }
    function bf(t, l, e, a) {
      if (Wu) {
        var n = _f(a);
        if (n === null) af(t, l, a, Fu, e), Ud(t, a);
        else if (T0(n, t, l, e, a)) a.stopPropagation();
        else if (Ud(t, a), l & 4 && -1 < x0.indexOf(t)) {
          for (; n !== null; ) {
            var u = Ie(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Ue(u.pendingLanes);
                  if (i !== 0) {
                    var c = u;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var d = 1 << 31 - ul(i);
                      c.entanglements[1] |= d, i &= ~d;
                    }
                    Hl(u), (ut & 6) === 0 && (Du = al() + 500, pn(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = He(u, 2), c !== null && ll(c, u, 2), wu(), vf(u, 2);
            }
            if (u = _f(a), u === null && af(t, l, a, Fu, e), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else af(t, l, a, null, e);
      }
    }
    function _f(t) {
      return t = pi(t), pf(t);
    }
    var Fu = null;
    function pf(t) {
      if (Fu = null, t = $e(t), t !== null) {
        var l = N(t);
        if (l === null) t = null;
        else {
          var e = l.tag;
          if (e === 13) {
            if (t = j(l), t !== null) return t;
            t = null;
          } else if (e === 31) {
            if (t = C(l), t !== null) return t;
            t = null;
          } else if (e === 3) {
            if (l.stateNode.current.memoizedState.isDehydrated) return l.tag === 3 ? l.stateNode.containerInfo : null;
            t = null;
          } else l !== t && (t = null);
        }
      }
      return Fu = t, null;
    }
    function jd(t) {
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
          switch (om()) {
            case Bf:
              return 2;
            case qf:
              return 8;
            case Yn:
            case rm:
              return 32;
            case Yf:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Sf = false, Ae = null, xe = null, Te = null, Mn = /* @__PURE__ */ new Map(), Nn = /* @__PURE__ */ new Map(), Me = [], x0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ud(t, l) {
      switch (t) {
        case "focusin":
        case "focusout":
          Ae = null;
          break;
        case "dragenter":
        case "dragleave":
          xe = null;
          break;
        case "mouseover":
        case "mouseout":
          Te = null;
          break;
        case "pointerover":
        case "pointerout":
          Mn.delete(l.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Nn.delete(l.pointerId);
      }
    }
    function On(t, l, e, a, n, u) {
      return t === null || t.nativeEvent !== u ? (t = {
        blockedOn: l,
        domEventName: e,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, l !== null && (l = Ie(l), l !== null && Nd(l)), t) : (t.eventSystemFlags |= a, l = t.targetContainers, n !== null && l.indexOf(n) === -1 && l.push(n), t);
    }
    function T0(t, l, e, a, n) {
      switch (l) {
        case "focusin":
          return Ae = On(Ae, t, l, e, a, n), true;
        case "dragenter":
          return xe = On(xe, t, l, e, a, n), true;
        case "mouseover":
          return Te = On(Te, t, l, e, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Mn.set(u, On(Mn.get(u) || null, t, l, e, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Nn.set(u, On(Nn.get(u) || null, t, l, e, a, n)), true;
      }
      return false;
    }
    function Dd(t) {
      var l = $e(t.target);
      if (l !== null) {
        var e = N(l);
        if (e !== null) {
          if (l = e.tag, l === 13) {
            if (l = j(e), l !== null) {
              t.blockedOn = l, Vf(t.priority, function() {
                Od(e);
              });
              return;
            }
          } else if (l === 31) {
            if (l = C(e), l !== null) {
              t.blockedOn = l, Vf(t.priority, function() {
                Od(e);
              });
              return;
            }
          } else if (l === 3 && e.stateNode.current.memoizedState.isDehydrated) {
            t.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
            return;
          }
        }
      }
      t.blockedOn = null;
    }
    function $u(t) {
      if (t.blockedOn !== null) return false;
      for (var l = t.targetContainers; 0 < l.length; ) {
        var e = _f(t.nativeEvent);
        if (e === null) {
          e = t.nativeEvent;
          var a = new e.constructor(e.type, e);
          _i = a, e.target.dispatchEvent(a), _i = null;
        } else return l = Ie(e), l !== null && Nd(l), t.blockedOn = e, false;
        l.shift();
      }
      return true;
    }
    function Rd(t, l, e) {
      $u(t) && e.delete(l);
    }
    function M0() {
      Sf = false, Ae !== null && $u(Ae) && (Ae = null), xe !== null && $u(xe) && (xe = null), Te !== null && $u(Te) && (Te = null), Mn.forEach(Rd), Nn.forEach(Rd);
    }
    function Iu(t, l) {
      t.blockedOn === l && (t.blockedOn = null, Sf || (Sf = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, M0)));
    }
    var Pu = null;
    function wd(t) {
      Pu !== t && (Pu = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        Pu === t && (Pu = null);
        for (var l = 0; l < t.length; l += 3) {
          var e = t[l], a = t[l + 1], n = t[l + 2];
          if (typeof a != "function") {
            if (pf(a || e) === null) continue;
            break;
          }
          var u = Ie(e);
          u !== null && (t.splice(l, 3), l -= 3, bc(u, {
            pending: true,
            data: n,
            method: e.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Ra(t) {
      function l(d) {
        return Iu(d, t);
      }
      Ae !== null && Iu(Ae, t), xe !== null && Iu(xe, t), Te !== null && Iu(Te, t), Mn.forEach(l), Nn.forEach(l);
      for (var e = 0; e < Me.length; e++) {
        var a = Me[e];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Me.length && (e = Me[0], e.blockedOn === null); ) Dd(e), e.blockedOn === null && Me.shift();
      if (e = (t.ownerDocument || t).$$reactFormReplay, e != null) for (a = 0; a < e.length; a += 3) {
        var n = e[a], u = e[a + 1], i = n[Wt] || null;
        if (typeof u == "function") i || wd(e);
        else if (i) {
          var c = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[Wt] || null) c = i.formAction;
            else if (pf(n) !== null) continue;
          } else c = i.action;
          typeof c == "function" ? e[a + 1] = c : (e.splice(a, 3), a -= 3), wd(e);
        }
      }
    }
    function Cd() {
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
      function l() {
        n !== null && (n(), n = null), a || setTimeout(e, 20);
      }
      function e() {
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
        return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", l), navigation.addEventListener("navigateerror", l), setTimeout(e, 100), function() {
          a = true, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", l), navigation.removeEventListener("navigateerror", l), n !== null && (n(), n = null);
        };
      }
    }
    function zf(t) {
      this._internalRoot = t;
    }
    ti.prototype.render = zf.prototype.render = function(t) {
      var l = this._internalRoot;
      if (l === null) throw Error(o(409));
      var e = l.current, a = dl();
      Td(e, a, t, l, null, null);
    }, ti.prototype.unmount = zf.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var l = t.containerInfo;
        Td(t.current, 2, null, t, null, null), wu(), l[Fe] = null;
      }
    };
    function ti(t) {
      this._internalRoot = t;
    }
    ti.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var l = Zf();
        t = {
          blockedOn: null,
          target: t,
          priority: l
        };
        for (var e = 0; e < Me.length && l !== 0 && l < Me[e].priority; e++) ;
        Me.splice(e, 0, t), e === 0 && Dd(t);
      }
    };
    var Hd = s.version;
    if (Hd !== "19.2.1") throw Error(o(527, Hd, "19.2.1"));
    w.findDOMNode = function(t) {
      var l = t._reactInternals;
      if (l === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
      return t = z(l), t = t !== null ? H(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var N0 = {
      bundleType: 0,
      version: "19.2.1",
      rendererPackageName: "react-dom",
      currentDispatcherRef: x,
      reconcilerVersion: "19.2.1"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var li = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!li.isDisabled && li.supportsFiber) try {
        Ba = li.inject(N0), nl = li;
      } catch {
      }
    }
    return Un.createRoot = function(t, l) {
      if (!A(t)) throw Error(o(299));
      var e = false, a = "", n = Qo, u = Zo, i = Vo;
      return l != null && (l.unstable_strictMode === true && (e = true), l.identifierPrefix !== void 0 && (a = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (u = l.onCaughtError), l.onRecoverableError !== void 0 && (i = l.onRecoverableError)), l = Ad(t, 1, false, null, null, e, a, null, n, u, i, Cd), t[Fe] = l.current, ef(t), new zf(l);
    }, Un.hydrateRoot = function(t, l, e) {
      if (!A(t)) throw Error(o(299));
      var a = false, n = "", u = Qo, i = Zo, c = Vo, d = null;
      return e != null && (e.unstable_strictMode === true && (a = true), e.identifierPrefix !== void 0 && (n = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (i = e.onCaughtError), e.onRecoverableError !== void 0 && (c = e.onRecoverableError), e.formState !== void 0 && (d = e.formState)), l = Ad(t, 1, true, l, e ?? null, a, n, d, u, i, c, Cd), l.context = xd(null), e = l.current, a = dl(), a = ri(a), n = de(a), n.callback = null, me(e, n, a), e = a, l.current.lanes = e, Ya(l, e), Hl(l), t[Fe] = l.current, ef(t), new ti(l);
    }, Un.version = "19.2.1", Un;
  }
  var Kd;
  function Y0() {
    if (Kd) return xf.exports;
    Kd = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (s) {
        console.error(s);
      }
    }
    return f(), xf.exports = q0(), xf.exports;
  }
  var G0 = Y0();
  const L0 = tm(G0), X0 = "modulepreload", Q0 = function(f, s) {
    return new URL(f, s).href;
  }, Jd = {}, Z0 = function(s, m, o) {
    let A = Promise.resolve();
    if (m && m.length > 0) {
      let z = function(H) {
        return Promise.all(H.map((U) => Promise.resolve(U).then((X) => ({
          status: "fulfilled",
          value: X
        }), (X) => ({
          status: "rejected",
          reason: X
        }))));
      };
      const j = document.getElementsByTagName("link"), C = document.querySelector("meta[property=csp-nonce]"), R = (C == null ? void 0 : C.nonce) || (C == null ? void 0 : C.getAttribute("nonce"));
      A = z(m.map((H) => {
        if (H = Q0(H, o), H in Jd) return;
        Jd[H] = true;
        const U = H.endsWith(".css"), X = U ? '[rel="stylesheet"]' : "";
        if (o) for (let gt = j.length - 1; gt >= 0; gt--) {
          const it = j[gt];
          if (it.href === H && (!U || it.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${H}"]${X}`)) return;
        const lt = document.createElement("link");
        if (lt.rel = U ? "stylesheet" : X0, U || (lt.as = "script"), lt.crossOrigin = "", lt.href = H, R && lt.setAttribute("nonce", R), document.head.appendChild(lt), U) return new Promise((gt, it) => {
          lt.addEventListener("load", gt), lt.addEventListener("error", () => it(new Error(`Unable to preload CSS for ${H}`)));
        });
      }));
    }
    function N(j) {
      const C = new Event("vite:preloadError", {
        cancelable: true
      });
      if (C.payload = j, window.dispatchEvent(C), !C.defaultPrevented) throw j;
    }
    return A.then((j) => {
      for (const C of j || []) C.status === "rejected" && N(C.reason);
      return s().catch(N);
    });
  };
  const V0 = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), K0 = (f) => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, m, o) => o ? o.toUpperCase() : m.toLowerCase()), kd = (f) => {
    const s = K0(f);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }, lm = (...f) => f.filter((s, m, o) => !!s && s.trim() !== "" && o.indexOf(s) === m).join(" ").trim(), J0 = (f) => {
    for (const s in f) if (s.startsWith("aria-") || s === "role" || s === "title") return true;
  };
  var k0 = {
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
  const W0 = yt.forwardRef(({ color: f = "currentColor", size: s = 24, strokeWidth: m = 2, absoluteStrokeWidth: o, className: A = "", children: N, iconNode: j, ...C }, R) => yt.createElement("svg", {
    ref: R,
    ...k0,
    width: s,
    height: s,
    stroke: f,
    strokeWidth: o ? Number(m) * 24 / Number(s) : m,
    className: lm("lucide", A),
    ...!N && !J0(C) && {
      "aria-hidden": "true"
    },
    ...C
  }, [
    ...j.map(([z, H]) => yt.createElement(z, H)),
    ...Array.isArray(N) ? N : [
      N
    ]
  ]));
  const Tl = (f, s) => {
    const m = yt.forwardRef(({ className: o, ...A }, N) => yt.createElement(W0, {
      ref: N,
      iconNode: s,
      className: lm(`lucide-${V0(kd(f))}`, `lucide-${f}`, o),
      ...A
    }));
    return m.displayName = kd(f), m;
  };
  const F0 = [
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
  ], $0 = Tl("bug", F0);
  const I0 = [
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
  ], P0 = Tl("clock", I0);
  const th = [
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
  ], lh = Tl("download", th);
  const eh = [
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
  ], Wd = Tl("file-text", eh);
  const ah = [
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
  ], nh = Tl("image", ah);
  const uh = [
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
  ], ih = Tl("monitor", uh);
  const ch = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], fh = Tl("moon", ch);
  const sh = [
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
  ], oh = Tl("music", sh);
  const rh = [
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
  ], dh = Tl("plus", rh);
  const mh = [
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
  ], yh = Tl("sun", mh);
  const hh = [
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
  ], em = Tl("trash-2", hh);
  const gh = [
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
  ], am = Tl("upload", gh);
  function vh({ file: f, onFileUpload: s, isParsingMetadata: m = false, metadataSummary: o }) {
    const A = (N) => {
      var _a;
      s(((_a = N.target.files) == null ? void 0 : _a[0]) || null);
    };
    return g.jsxs("div", {
      className: "space-y-3",
      children: [
        g.jsx("label", {
          className: "micro-label",
          children: "Upload flo\u2122 File"
        }),
        g.jsxs("label", {
          className: "group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/10",
          "aria-busy": m,
          children: [
            g.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                g.jsx("div", {
                  className: "rounded-full bg-primary/15 p-2 text-primary",
                  children: g.jsx(Wd, {
                    className: "h-4 w-4 icon-accent"
                  })
                }),
                g.jsxs("div", {
                  children: [
                    g.jsx("p", {
                      className: "font-semibold",
                      children: "Drop or browse your .flo file"
                    }),
                    g.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "All metadata editing happens locally."
                    })
                  ]
                })
              ]
            }),
            g.jsx("span", {
              className: "btn",
              "data-variant": "solid",
              "data-tone": "primary",
              "data-size": "xs",
              children: "Browse"
            }),
            g.jsx("input", {
              type: "file",
              accept: ".flo",
              onChange: A,
              className: "sr-only"
            })
          ]
        }),
        f && g.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            g.jsx(Wd, {
              className: "h-4 w-4 icon-accent"
            }),
            g.jsxs("div", {
              className: "flex flex-col",
              children: [
                g.jsx("span", {
                  className: "font-medium",
                  children: f.name
                }),
                g.jsxs("span", {
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
        f && g.jsx("div", {
          className: "text-xs text-muted-foreground",
          children: m ? g.jsxs("span", {
            className: "flex items-center gap-2 text-primary",
            children: [
              g.jsx("span", {
                className: "h-1.5 w-1.5 animate-ping rounded-full bg-primary",
                "aria-hidden": "true"
              }),
              "Reading embedded tags..."
            ]
          }) : o ? g.jsx("span", {
            className: "text-foreground/70",
            children: o
          }) : null
        })
      ]
    });
  }
  const Fd = [
    {
      title: "Essentials",
      description: "Core fields most players surface first.",
      fields: [
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
      ]
    },
    {
      title: "Release Details",
      description: "Catalog data that keeps sequenced projects in order.",
      fields: [
        {
          key: "track_number",
          label: "Track Number",
          placeholder: "04"
        },
        {
          key: "track_total",
          label: "Total Tracks",
          placeholder: "12"
        },
        {
          key: "disc_number",
          label: "Disc Number",
          placeholder: "1"
        },
        {
          key: "disc_total",
          label: "Total Discs",
          placeholder: "2"
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
      ]
    },
    {
      title: "Credits & Codes",
      description: "Make sure collaborators and publishers get proper attribution.",
      fields: [
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
      ]
    },
    {
      title: "Links",
      description: "Optional shareable destination for this release.",
      fields: [
        {
          key: "url_commercial",
          label: "Commercial URL",
          placeholder: "https://example.com/buy",
          colSpan: "full"
        }
      ]
    }
  ];
  function bh({ metadata: f, onMetadataChange: s }) {
    var _a, _b;
    const m = Object.entries(f).filter(([, N]) => !!(N && (typeof N != "string" || N.trim()))).length, o = Fd.reduce((N, j) => N + j.fields.length, 0) + 1, A = ({ key: N, label: j, placeholder: C, type: R, colSpan: z }) => {
      const H = f[N], U = typeof H == "string" || typeof H == "number" ? H : "";
      return g.jsxs("div", {
        className: `space-y-2 ${z === "full" ? "md:col-span-2" : ""}`,
        children: [
          g.jsx("label", {
            htmlFor: N,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: j
          }),
          g.jsx("input", {
            id: N,
            value: U,
            onChange: (X) => s(N, R === "number" ? parseInt(X.target.value) || void 0 : X.target.value),
            placeholder: C,
            type: R ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, N);
    };
    return g.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        g.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            g.jsxs("div", {
              children: [
                g.jsx("p", {
                  className: "micro-label",
                  children: "Metadata"
                }),
                g.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Flo\u2122 Tag Editor"
                })
              ]
            }),
            g.jsxs("div", {
              className: "text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80",
              children: [
                m,
                " / ",
                o,
                " fields filled"
              ]
            })
          ]
        }),
        g.jsx("div", {
          className: "space-y-8",
          children: Fd.map((N) => g.jsxs("div", {
            className: "space-y-4",
            children: [
              g.jsxs("div", {
                children: [
                  g.jsx("h3", {
                    className: "text-sm font-semibold tracking-wide text-foreground/70",
                    children: N.title
                  }),
                  g.jsx("p", {
                    className: "text-xs text-muted-foreground mt-1",
                    children: N.description
                  })
                ]
              }),
              g.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                children: N.fields.map(A)
              })
            ]
          }, N.title))
        }),
        g.jsxs("div", {
          className: "mt-8 space-y-2",
          children: [
            g.jsx("label", {
              htmlFor: "comment",
              className: "text-sm font-semibold tracking-wide text-foreground/80",
              children: "Comments"
            }),
            g.jsx("textarea", {
              id: "comment",
              rows: 4,
              value: ((_b = (_a = f.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onChange: (N) => s("comments", [
                {
                  text: N.target.value
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
  function _h({ albumArtUrl: f, onAlbumArtChange: s }) {
    const m = (o) => {
      var _a;
      const A = (_a = o.target.files) == null ? void 0 : _a[0];
      if (A) {
        if (!A.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if (A.size > 10485760) {
          alert("Image size must be less than 10MB");
          return;
        }
        const N = new FileReader();
        N.onload = (j) => {
          var _a2;
          s((_a2 = j.target) == null ? void 0 : _a2.result);
        }, N.readAsDataURL(A);
      }
    };
    return g.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        g.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            g.jsxs("div", {
              children: [
                g.jsx("p", {
                  className: "micro-label",
                  children: "Artwork"
                }),
                g.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Album Art Embed"
                })
              ]
            }),
            g.jsxs("span", {
              className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground text-right",
              children: [
                "PNG \xB7 JPG \xB7 WebP",
                g.jsx("br", {}),
                "<5MB \xB7 animated WebP OK"
              ]
            })
          ]
        }),
        g.jsx("div", {
          className: "space-y-4",
          children: f ? g.jsxs("div", {
            className: "space-y-4",
            children: [
              g.jsx("div", {
                className: "relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 shadow-lg",
                children: g.jsx("img", {
                  src: f,
                  alt: "Album Art",
                  className: "h-full w-full object-cover"
                })
              }),
              g.jsxs("div", {
                className: "flex flex-wrap justify-center gap-3",
                children: [
                  g.jsxs("label", {
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "primary",
                    "data-size": "sm",
                    children: [
                      g.jsx(am, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      "Change Image",
                      g.jsx("input", {
                        type: "file",
                        accept: "image/*",
                        onChange: m,
                        className: "hidden"
                      })
                    ]
                  }),
                  g.jsxs("button", {
                    onClick: () => s(null),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "sm",
                    children: [
                      g.jsx(em, {
                        className: "h-4 w-4"
                      }),
                      "Remove"
                    ]
                  })
                ]
              })
            ]
          }) : g.jsxs("label", {
            className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-10 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
            children: [
              g.jsx(nh, {
                className: "h-10 w-10 icon-accent"
              }),
              g.jsxs("div", {
                children: [
                  g.jsx("p", {
                    className: "font-semibold",
                    children: "Drop album cover"
                  }),
                  g.jsx("p", {
                    className: "text-sm text-muted-foreground",
                    children: "Square works best \xB7 up to 5 MB"
                  })
                ]
              }),
              g.jsx("input", {
                type: "file",
                accept: "image/*",
                onChange: m,
                className: "hidden"
              })
            ]
          })
        })
      ]
    });
  }
  function ph({ syltFrame: f, onTextChange: s, onMetadataChange: m, lrcText: o, onLrcTextChange: A, onImport: N, unsyncedLyrics: j, onUnsyncedLyricsChange: C }) {
    const R = () => {
      s([
        ...f.text,
        [
          "",
          0
        ]
      ]);
    }, z = (U, X, lt) => {
      const gt = f.text.map((it, kt) => kt === U ? [
        X,
        lt
      ] : it);
      s(gt);
    }, H = (U) => {
      s(f.text.filter((X, lt) => lt !== U));
    };
    return g.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        g.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            g.jsxs("div", {
              children: [
                g.jsx("p", {
                  className: "micro-label",
                  children: "Lyrics"
                }),
                g.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Lyrics & Sync"
                })
              ]
            }),
            g.jsxs("span", {
              className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
              children: [
                f.text.length,
                " entries"
              ]
            })
          ]
        }),
        g.jsxs("div", {
          className: "space-y-4",
          children: [
            g.jsxs("div", {
              className: "space-y-2",
              children: [
                g.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-2",
                  children: [
                    g.jsxs("div", {
                      children: [
                        g.jsx("p", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Import from LRC"
                        }),
                        g.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Paste a timestamped block and drop it straight into SYLT."
                        })
                      ]
                    }),
                    g.jsxs("button", {
                      onClick: N,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        g.jsx(am, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Import"
                      ]
                    })
                  ]
                }),
                g.jsx("textarea", {
                  value: o,
                  onChange: (U) => A(U.target.value),
                  rows: 4,
                  placeholder: "[00:01.40]First line\\n[00:08.50]Next line",
                  className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                })
              ]
            }),
            g.jsxs("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-2",
              children: [
                g.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    g.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Language"
                    }),
                    g.jsx("input", {
                      value: f.language,
                      onChange: (U) => m("language", U.target.value),
                      placeholder: "eng",
                      maxLength: 3,
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    })
                  ]
                }),
                g.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    g.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Description"
                    }),
                    g.jsx("input", {
                      value: f.description,
                      onChange: (U) => m("description", U.target.value),
                      placeholder: "Synced Lyrics",
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    })
                  ]
                }),
                g.jsxs("div", {
                  className: "space-y-2 md:col-span-2",
                  children: [
                    g.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        g.jsx("label", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Unsynced Lyrics (USLT)"
                        }),
                        g.jsx("span", {
                          className: "text-xs text-muted-foreground text-right",
                          children: "Leave blank to auto-fill from the synced lines above."
                        })
                      ]
                    }),
                    g.jsx("textarea", {
                      value: j,
                      onChange: (U) => C(U.target.value),
                      rows: 4,
                      placeholder: "Paste the full lyric sheet if you don\u2019t need timestamps.",
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    })
                  ]
                })
              ]
            }),
            g.jsxs("div", {
              className: "space-y-3",
              children: [
                g.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    g.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Timeline Entries"
                    }),
                    g.jsxs("button", {
                      onClick: R,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        g.jsx(dh, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                g.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: f.text.map((U, X) => g.jsx(Sh, {
                    index: X,
                    text: U[0],
                    timestamp: U[1],
                    onUpdate: z,
                    onDelete: H
                  }, X))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Sh({ index: f, text: s, timestamp: m, onUpdate: o, onDelete: A }) {
    return g.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        g.jsx("input", {
          value: s,
          onChange: (N) => o(f, N.target.value, m),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        }),
        g.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            g.jsx(P0, {
              className: "h-4 w-4 icon-accent"
            }),
            g.jsx("input", {
              type: "number",
              value: m,
              onChange: (N) => o(f, s, parseInt(N.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        }),
        g.jsx("button", {
          onClick: () => A(f),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          children: g.jsx(em, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  function zh({ disabled: f, isProcessing: s, fileName: m, onProcess: o }) {
    return g.jsx("section", {
      className: "glass-panel p-6 sm:p-8",
      children: g.jsxs("div", {
        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        children: [
          g.jsxs("div", {
            children: [
              g.jsx("p", {
                className: "micro-label",
                children: "Final step"
              }),
              g.jsx("p", {
                className: "text-base font-semibold",
                children: m ? `Render tags into ${m}` : "Load a flo\u2122 to begin"
              })
            ]
          }),
          g.jsx("button", {
            type: "button",
            onClick: o,
            disabled: f,
            className: "btn",
            "data-variant": "gradient",
            "data-size": "lg",
            children: s ? g.jsxs(g.Fragment, {
              children: [
                g.jsx("div", {
                  className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                }),
                "Processing"
              ]
            }) : g.jsxs(g.Fragment, {
              children: [
                g.jsx("span", {
                  className: "icon-chip",
                  children: g.jsx(lh, {
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
  function $d({ type: f, message: s }) {
    const m = f === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return g.jsx("div", {
      className: `${m} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: s
    });
  }
  const nm = "id3editor-theme", ei = () => typeof window < "u" && typeof document < "u", Eh = () => {
    if (!ei()) return "auto";
    const f = window.localStorage.getItem(nm);
    return f === "light" || f === "dark" || f === "auto" ? f : "auto";
  };
  function Ah() {
    const [f, s] = yt.useState(Eh), [m, o] = yt.useState("light");
    return yt.useEffect(() => {
      if (!ei()) return;
      const j = window.matchMedia("(prefers-color-scheme: dark)"), C = () => o(j.matches ? "dark" : "light");
      return C(), j.addEventListener("change", C), () => {
        j.removeEventListener("change", C);
      };
    }, []), yt.useEffect(() => {
      if (!ei()) return;
      const j = document.documentElement;
      (f === "auto" ? m : f) === "dark" ? (j.classList.add("dark"), j.style.colorScheme = "dark") : (j.classList.remove("dark"), j.style.colorScheme = "light");
    }, [
      f,
      m
    ]), {
      theme: f,
      resolvedTheme: f === "auto" ? m : f,
      setTheme: (j) => {
        s(j), ei() && window.localStorage.setItem(nm, j);
      }
    };
  }
  const Id = [
    {
      value: "auto",
      label: "Auto",
      icon: ih
    },
    {
      value: "light",
      label: "Light",
      icon: yh
    },
    {
      value: "dark",
      label: "Dark",
      icon: fh
    }
  ];
  function xh() {
    var _a;
    const { theme: f, setTheme: s } = Ah(), m = ((_a = Id.find((o) => o.value === f)) == null ? void 0 : _a.label) ?? "Auto";
    return g.jsxs("div", {
      className: "w-full rounded-2xl border border-primary/20 bg-background/80 p-3 shadow-sm shadow-primary/10 backdrop-blur-md",
      children: [
        g.jsxs("div", {
          className: "flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-primary/80",
          children: [
            g.jsx("span", {
              children: "Theme"
            }),
            g.jsx("span", {
              className: "font-semibold tracking-tight text-foreground/70",
              children: m
            })
          ]
        }),
        g.jsx("div", {
          className: "mt-2 grid grid-cols-3 gap-2",
          children: Id.map(({ value: o, label: A, icon: N }) => {
            const j = f === o;
            return g.jsxs("button", {
              type: "button",
              onClick: () => s(o),
              "aria-pressed": j,
              "aria-label": `Switch theme to ${A}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": j,
              children: [
                g.jsx(N, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                g.jsx("span", {
                  children: A
                })
              ]
            }, o);
          })
        })
      ]
    });
  }
  let Y;
  function Th(f) {
    const s = Y.__externref_table_alloc();
    return Y.__wbindgen_externrefs.set(s, f), s;
  }
  function Df(f) {
    const s = typeof f;
    if (s == "number" || s == "boolean" || f == null) return `${f}`;
    if (s == "string") return `"${f}"`;
    if (s == "symbol") {
      const A = f.description;
      return A == null ? "Symbol" : `Symbol(${A})`;
    }
    if (s == "function") {
      const A = f.name;
      return typeof A == "string" && A.length > 0 ? `Function(${A})` : "Function";
    }
    if (Array.isArray(f)) {
      const A = f.length;
      let N = "[";
      A > 0 && (N += Df(f[0]));
      for (let j = 1; j < A; j++) N += ", " + Df(f[j]);
      return N += "]", N;
    }
    const m = /\[object ([^\]]+)\]/.exec(toString.call(f));
    let o;
    if (m && m.length > 1) o = m[1];
    else return toString.call(f);
    if (o == "Object") try {
      return "Object(" + JSON.stringify(f) + ")";
    } catch {
      return "Object";
    }
    return f instanceof Error ? `${f.name}: ${f.message}
${f.stack}` : o;
  }
  function Mh(f, s) {
    return f = f >>> 0, Nh().subarray(f / 4, f / 4 + s);
  }
  function Cn(f, s) {
    return f = f >>> 0, Ca().subarray(f / 1, f / 1 + s);
  }
  let We = null;
  function Bl() {
    return (We === null || We.buffer.detached === true || We.buffer.detached === void 0 && We.buffer !== Y.memory.buffer) && (We = new DataView(Y.memory.buffer)), We;
  }
  let Rn = null;
  function Nh() {
    return (Rn === null || Rn.byteLength === 0) && (Rn = new Float32Array(Y.memory.buffer)), Rn;
  }
  function ai(f, s) {
    return f = f >>> 0, jh(f, s);
  }
  let wn = null;
  function Ca() {
    return (wn === null || wn.byteLength === 0) && (wn = new Uint8Array(Y.memory.buffer)), wn;
  }
  function Dn(f, s) {
    try {
      return f.apply(this, s);
    } catch (m) {
      const o = Th(m);
      Y.__wbindgen_exn_store(o);
    }
  }
  function wa(f) {
    return f == null;
  }
  function Bn(f, s) {
    const m = s(f.length * 1, 1) >>> 0;
    return Ca().set(f, m / 1), jl = f.length, m;
  }
  function Of(f, s, m) {
    if (m === void 0) {
      const C = Hn.encode(f), R = s(C.length, 1) >>> 0;
      return Ca().subarray(R, R + C.length).set(C), jl = C.length, R;
    }
    let o = f.length, A = s(o, 1) >>> 0;
    const N = Ca();
    let j = 0;
    for (; j < o; j++) {
      const C = f.charCodeAt(j);
      if (C > 127) break;
      N[A + j] = C;
    }
    if (j !== o) {
      j !== 0 && (f = f.slice(j)), A = m(A, o, o = j + f.length * 3, 1) >>> 0;
      const C = Ca().subarray(A + j, A + o), R = Hn.encodeInto(f, C);
      j += R.written, A = m(A, o, j, 1) >>> 0;
    }
    return jl = j, A;
  }
  function Ha(f) {
    const s = Y.__wbindgen_externrefs.get(f);
    return Y.__externref_table_dealloc(f), s;
  }
  let ni = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ni.decode();
  const Oh = 2146435072;
  let jf = 0;
  function jh(f, s) {
    return jf += s, jf >= Oh && (ni = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ni.decode(), jf = s), ni.decode(Ca().subarray(f, f + s));
  }
  const Hn = new TextEncoder();
  "encodeInto" in Hn || (Hn.encodeInto = function(f, s) {
    const m = Hn.encode(f);
    return s.set(m), {
      read: f.length,
      written: m.length
    };
  });
  let jl = 0;
  const Pd = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((f) => Y.__wbg_audioinfo_free(f >>> 0, 1));
  typeof FinalizationRegistry > "u" || new FinalizationRegistry((f) => Y.__wbg_wasmstreamingdecoder_free(f >>> 0, 1));
  class qn {
    static __wrap(s) {
      s = s >>> 0;
      const m = Object.create(qn.prototype);
      return m.__wbg_ptr = s, Pd.register(m, m.__wbg_ptr, m), m;
    }
    __destroy_into_raw() {
      const s = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Pd.unregister(this), s;
    }
    free() {
      const s = this.__destroy_into_raw();
      Y.__wbg_audioinfo_free(s, 0);
    }
    get sample_rate() {
      return Y.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
    }
    set sample_rate(s) {
      Y.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, s);
    }
    get channels() {
      return Y.__wbg_get_audioinfo_channels(this.__wbg_ptr);
    }
    set channels(s) {
      Y.__wbg_set_audioinfo_channels(this.__wbg_ptr, s);
    }
    get bit_depth() {
      return Y.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
    }
    set bit_depth(s) {
      Y.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, s);
    }
    get total_frames() {
      const s = Y.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
      return BigInt.asUintN(64, s);
    }
    set total_frames(s) {
      Y.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, s);
    }
    get duration_secs() {
      return Y.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
    }
    set duration_secs(s) {
      Y.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, s);
    }
    get file_size() {
      return Y.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
    }
    set file_size(s) {
      Y.__wbg_set_audioinfo_file_size(this.__wbg_ptr, s);
    }
    get compression_ratio() {
      return Y.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
    }
    set compression_ratio(s) {
      Y.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, s);
    }
    get crc_valid() {
      return Y.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
    }
    set crc_valid(s) {
      Y.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, s);
    }
    get is_lossy() {
      return Y.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
    }
    set is_lossy(s) {
      Y.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, s);
    }
    get lossy_quality() {
      return Y.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
    }
    set lossy_quality(s) {
      Y.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, s);
    }
    get version() {
      let s, m;
      try {
        const o = Y.audioinfo_version(this.__wbg_ptr);
        return s = o[0], m = o[1], ai(o[0], o[1]);
      } finally {
        Y.__wbindgen_free(s, m, 1);
      }
    }
  }
  Symbol.dispose && (qn.prototype[Symbol.dispose] = qn.prototype.free);
  function Uh(f) {
    const s = Y.create_metadata_from_object(f);
    if (s[3]) throw Ha(s[2]);
    var m = Cn(s[0], s[1]).slice();
    return Y.__wbindgen_free(s[0], s[1] * 1, 1), m;
  }
  function um(f) {
    const s = Bn(f, Y.__wbindgen_malloc), m = jl, o = Y.get_metadata(s, m);
    if (o[2]) throw Ha(o[1]);
    return Ha(o[0]);
  }
  function Dh(f) {
    const s = Bn(f, Y.__wbindgen_malloc), m = jl, o = Y.info(s, m);
    if (o[2]) throw Ha(o[1]);
    return qn.__wrap(o[0]);
  }
  function Rh(f, s) {
    const m = Bn(f, Y.__wbindgen_malloc), o = jl, A = Bn(s, Y.__wbindgen_malloc), N = jl, j = Y.update_metadata(m, o, A, N);
    if (j[3]) throw Ha(j[2]);
    var C = Cn(j[0], j[1]).slice();
    return Y.__wbindgen_free(j[0], j[1] * 1, 1), C;
  }
  function wh(f) {
    const s = Bn(f, Y.__wbindgen_malloc), m = jl, o = Y.validate(s, m);
    if (o[2]) throw Ha(o[1]);
    return o[0] !== 0;
  }
  const Ch = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function Hh(f, s) {
    if (typeof Response == "function" && f instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(f, s);
      } catch (o) {
        if (f.ok && Ch.has(f.type) && f.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
        else throw o;
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
  function Bh() {
    const f = {};
    return f.wbg = {}, f.wbg.__wbg_Error_52673b7de5a0ca89 = function(s, m) {
      return Error(ai(s, m));
    }, f.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(s) {
      return Number(s);
    }, f.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(s, m) {
      const o = String(m), A = Of(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), N = jl;
      Bl().setInt32(s + 4, N, true), Bl().setInt32(s + 0, A, true);
    }, f.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(s, m) {
      const o = m, A = typeof o == "bigint" ? o : void 0;
      Bl().setBigInt64(s + 8, wa(A) ? BigInt(0) : A, true), Bl().setInt32(s + 0, !wa(A), true);
    }, f.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(s) {
      const m = s, o = typeof m == "boolean" ? m : void 0;
      return wa(o) ? 16777215 : o ? 1 : 0;
    }, f.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(s, m) {
      const o = Df(m), A = Of(o, Y.__wbindgen_malloc, Y.__wbindgen_realloc), N = jl;
      Bl().setInt32(s + 4, N, true), Bl().setInt32(s + 0, A, true);
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
      const o = m, A = typeof o == "number" ? o : void 0;
      Bl().setFloat64(s + 8, wa(A) ? 0 : A, true), Bl().setInt32(s + 0, !wa(A), true);
    }, f.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(s, m) {
      const o = m, A = typeof o == "string" ? o : void 0;
      var N = wa(A) ? 0 : Of(A, Y.__wbindgen_malloc, Y.__wbindgen_realloc), j = jl;
      Bl().setInt32(s + 4, j, true), Bl().setInt32(s + 0, N, true);
    }, f.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(s, m) {
      throw new Error(ai(s, m));
    }, f.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Dn(function(s, m) {
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
      return Dn(function(s, m) {
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
      return Dn(function(s) {
        return s.next();
      }, arguments);
    }, f.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(s, m, o) {
      Uint8Array.prototype.set.call(Cn(s, m), o);
    }, f.wbg.__wbg_set_3f1d0b984ed272ed = function(s, m, o) {
      s[m] = o;
    }, f.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Dn(function(s, m, o) {
        return Reflect.set(s, m, o);
      }, arguments);
    }, f.wbg.__wbg_set_7df433eea03a5c14 = function(s, m, o) {
      s[m >>> 0] = o;
    }, f.wbg.__wbg_set_cb0e657d1901c8d8 = function(s, m, o) {
      s.set(Mh(m, o));
    }, f.wbg.__wbg_set_efaaf145b9377369 = function(s, m, o) {
      return s.set(m, o);
    }, f.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Dn(function(s) {
        return JSON.stringify(s);
      }, arguments);
    }, f.wbg.__wbg_value_57b7b035e117f7ee = function(s) {
      return s.value;
    }, f.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(s, m) {
      return ai(s, m);
    }, f.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(s) {
      return BigInt.asUintN(64, s);
    }, f.wbg.__wbindgen_cast_cb9088102bce6b30 = function(s, m) {
      return Cn(s, m);
    }, f.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(s) {
      return s;
    }, f.wbg.__wbindgen_init_externref_table = function() {
      const s = Y.__wbindgen_externrefs, m = s.grow(4);
      s.set(0, void 0), s.set(m + 0, void 0), s.set(m + 1, null), s.set(m + 2, true), s.set(m + 3, false);
    }, f;
  }
  function qh(f, s) {
    return Y = f.exports, wf.__wbindgen_wasm_module = s, We = null, Rn = null, wn = null, Y.__wbindgen_start(), Y;
  }
  async function wf(f) {
    if (Y !== void 0) return Y;
    typeof f < "u" && (Object.getPrototypeOf(f) === Object.prototype ? { module_or_path: f } = f : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof f > "u" && (f = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const s = Bh();
    (typeof f == "string" || typeof Request == "function" && f instanceof Request || typeof URL == "function" && f instanceof URL) && (f = fetch(f));
    const { instance: m, module: o } = await Hh(await f, s);
    return qh(m, o);
  }
  const Uf = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, im = {
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
  function Yh() {
    const [f, s] = yt.useState(false), [m, o] = yt.useState(false);
    return yt.useEffect(() => {
      (async () => {
        try {
          await wf(), o(true);
        } catch (H) {
          console.error("Failed to initialize flo\u2122 WASM:", H);
        }
      })();
    }, []), {
      isProcessing: f,
      isInitialized: m,
      loadMetadata: async (z) => {
        if (!m) throw new Error("flo\u2122 WASM not initialized");
        try {
          const H = await z.arrayBuffer(), U = new Uint8Array(H);
          return um(U);
        } catch (H) {
          return console.error("Failed to load flo\u2122 metadata:", H), null;
        }
      },
      updateMetadata: async (z, H) => {
        if (!m) throw new Error("flo\u2122 WASM not initialized");
        s(true);
        try {
          const U = Uh(H), X = Rh(z, U);
          return s(false), X;
        } catch (U) {
          return console.error("Failed to update flo\u2122 metadata:", U), s(false), null;
        }
      },
      downloadFile: (z, H) => {
        const U = new Blob([
          z
        ], {
          type: "application/octet-stream"
        }), X = URL.createObjectURL(U), lt = document.createElement("a");
        lt.href = X, lt.download = H, lt.click(), URL.revokeObjectURL(X);
      },
      validateFile: (z) => m ? wh(z) : false,
      resetMetadata: () => ({
        ...im
      })
    };
  }
  function Gh() {
    const [f, s] = yt.useState(false);
    return {
      isLoading: f,
      loadFloFile: async (o) => {
        s(true);
        try {
          if (!o.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await wf();
          const A = await o.arrayBuffer(), N = new Uint8Array(A), j = um(N), C = Dh(N), R = C ? {
            sample_rate: C.sample_rate,
            channels: C.channels,
            bit_depth: C.bit_depth,
            total_frames: Number(C.total_frames),
            duration_secs: C.duration_secs,
            file_size: C.file_size,
            compression_ratio: C.compression_ratio,
            crc_valid: C.crc_valid,
            is_lossy: C.is_lossy,
            lossy_quality: C.lossy_quality,
            version: C.version
          } : null;
          return {
            metadata: j,
            audioInfo: R,
            error: null
          };
        } catch (A) {
          return console.error("Failed to load flo\u2122 file:", A), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${A instanceof Error ? A.message : "Unknown error"}`
          };
        } finally {
          s(false);
        }
      }
    };
  }
  function Lh() {
    return {
      parseLRCFormat: (s) => {
        const m = s.split(`
`), o = [];
        return m.forEach((A) => {
          const N = A.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (N) {
            const j = parseInt(N[1]), C = parseInt(N[2]), R = parseInt(N[3]), z = j * 60 * 1e3 + C * 1e3 + R * 10, H = N[4].trim();
            o.push([
              H,
              z
            ]);
          }
        }), o.sort((A, N) => A[1] - N[1]), o;
      }
    };
  }
  function Xh() {
    var _a, _b;
    const [f, s] = yt.useState(null), [m, o] = yt.useState(null), [A, N] = yt.useState(() => ({
      ...im
    })), [j, C] = yt.useState(null), [R, z] = yt.useState(() => ({
      ...Uf
    })), [H, U] = yt.useState(""), [X, lt] = yt.useState(false), [gt, it] = yt.useState(null), [kt, pt] = yt.useState(null), [Ul, At] = yt.useState(""), { isProcessing: Vt, updateMetadata: ml, downloadFile: Lt, resetMetadata: W } = Yh(), { parseLRCFormat: Xt } = Lh(), { isLoading: yl, loadFloFile: ql } = Gh(), Kt = yt.useRef(""), Ct = yt.useCallback((r) => `${r.name}:${r.lastModified}:${r.size}`, []);
    yt.useEffect(() => {
      typeof window < "u" && X && Z0(() => import("./eruda-Bq_QoAqs.js").then((r) => r.e), [], import.meta.url).then((r) => {
        r.default.init(), r.default.show();
      });
    }, [
      X
    ]);
    const Yl = yt.useCallback(async (r) => {
      var _a2, _b2;
      if (!r) {
        Kt.current = "", s(null), o(null), N(W()), C(null), z({
          ...Uf
        }), U(""), At(""), pt(null), it(null);
        return;
      }
      if (!r.name.toLowerCase().endsWith(".flo")) {
        it("Please upload a valid .flo file"), pt(null);
        return;
      }
      const O = Ct(r);
      Kt.current = O, s(r), it(null), pt("File loaded. Reading embedded tags..."), At("Scanning embedded metadata..."), N(W()), C(null), z({
        ...Uf
      }), U("");
      try {
        const { metadata: D, audioInfo: Z, error: k } = await ql(r);
        if (Kt.current !== O) return;
        if (k) {
          it(k), pt(null);
          return;
        }
        const et = await r.arrayBuffer();
        if (o(new Uint8Array(et)), D) {
          if (N({
            ...D
          }), D && D.pictures) {
            const Qt = D.pictures.find((Dl) => Dl.picture_type === "cover_front");
            if (Qt) {
              const Dl = new Blob([
                Qt.data
              ], {
                type: Qt.mime_type
              });
              C(URL.createObjectURL(Dl));
            }
          }
          if (D && D.synced_lyrics) {
            const Qt = D.synced_lyrics[0];
            Qt && z({
              type: 1,
              timestampFormat: 2,
              language: Qt.language || "eng",
              description: Qt.description || "Synced Lyrics",
              text: Qt.lines.map((Dl) => [
                Dl.text,
                Dl.timestamp_ms
              ])
            });
          }
        }
        const Mt = Object.values(D || {}).filter((Qt) => typeof Qt == "string" && Qt.trim().length > 0).length, St = ((_b2 = (_a2 = D == null ? void 0 : D.synced_lyrics) == null ? void 0 : _a2[0]) == null ? void 0 : _b2.lines.length) ?? 0, Oe = Mt > 0 || !!Z || St > 0;
        At(Mt > 0 ? `Imported ${Mt} embedded tag${Mt === 1 ? "" : "s"}.` : "No embedded tags found."), pt(Oe ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (D) {
        if (Kt.current !== O) return;
        console.error("Failed to parse metadata", D), At(""), it("Loaded file, but could not read embedded metadata automatically."), pt(null);
      }
    }, [
      ql,
      Ct,
      W
    ]), hl = (r, S) => {
      N((O) => ({
        ...O,
        [r]: S
      }));
    }, el = () => {
      if (H.trim()) {
        const r = Xt(H);
        if (z((S) => ({
          ...S,
          text: r
        })), !A.lyrics || A.lyrics.length === 0) {
          const S = r.map(([O]) => O == null ? void 0 : O.trim()).filter(Boolean).join(`
`);
          S && N((O) => ({
            ...O,
            lyrics: [
              {
                text: S
              }
            ]
          }));
        }
        U(""), pt("LRC format lyrics imported successfully!");
      }
    }, x = async () => {
      if (!f || !m) return;
      it(null), pt(null);
      const r = await ml(m, A);
      r ? (Lt(r, `${A.title || f.name.replace(".flo", "")}_tagged.flo`), pt("File processed and downloaded successfully!")) : it("Failed to process file");
    }, w = (r) => {
      z((O) => ({
        ...O,
        text: r
      }));
      const S = A.synced_lyrics.slice();
      S.length === 0 ? S.push({
        content_type: "lyrics",
        lines: r.map(([O, D]) => ({
          text: O,
          timestamp_ms: D
        }))
      }) : S[0].lines = r.map(([O, D]) => ({
        text: O,
        timestamp_ms: D
      })), N((O) => ({
        ...O,
        synced_lyrics: S
      }));
    }, Q = (r, S) => {
      z((D) => ({
        ...D,
        [r]: S
      }));
      const O = A.synced_lyrics.slice();
      O.length > 0 && (O[0][r] = S, N((D) => ({
        ...D,
        synced_lyrics: O
      })));
    }, ft = [
      {
        label: "Tag fields set",
        value: Object.values(A).filter((r) => typeof r == "string" && r.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: R.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: j ? "Attached" : "Not added",
        helper: j ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ];
    return g.jsxs("div", {
      className: "relative min-h-screen overflow-hidden px-4 py-10 sm:px-6",
      children: [
        g.jsx("div", {
          className: "pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        g.jsx("div", {
          className: "pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[140px] opacity-40",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        g.jsxs("main", {
          className: "relative mx-auto flex max-w-5xl flex-col gap-6",
          children: [
            g.jsxs("section", {
              className: "glass-panel p-6 sm:p-8 space-y-6",
              children: [
                g.jsxs("div", {
                  className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                  children: [
                    g.jsx("div", {
                      className: "space-y-4 lg:max-w-2xl",
                      children: g.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          g.jsx("div", {
                            className: "rounded-full bg-primary/12 p-3 text-primary shadow-inner shadow-primary/30",
                            children: g.jsx(oh, {
                              className: "h-6 w-6 icon-accent"
                            })
                          }),
                          g.jsxs("div", {
                            children: [
                              g.jsx("h1", {
                                className: "text-3xl font-semibold hero-title",
                                children: g.jsx("span", {
                                  className: "gradient-text inline-block",
                                  children: "FloEditor"
                                })
                              }),
                              g.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Tag flo\u2122 files, embed art, and sync lyrics without leaving your browser."
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    g.jsxs("div", {
                      className: "flex w-full flex-col gap-4 lg:max-w-xs",
                      children: [
                        g.jsxs("div", {
                          className: "rounded-2xl border border-primary/25 bg-primary/5 p-4 text-right shadow-inner shadow-primary/10",
                          children: [
                            g.jsx("p", {
                              className: "micro-label justify-end text-primary/80",
                              children: "Current file"
                            }),
                            g.jsx("p", {
                              className: `text-2xl font-semibold ${f ? "text-primary" : "text-muted-foreground"}`,
                              children: f ? f.name : "No file loaded"
                            }),
                            g.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: f ? "Ready for metadata tweaks." : "Load a flo\u2122 to unlock controls."
                            })
                          ]
                        }),
                        g.jsxs("div", {
                          className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1",
                          children: [
                            g.jsx(xh, {}),
                            g.jsxs("button", {
                              onClick: () => lt(!X),
                              type: "button",
                              className: "btn w-full",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                g.jsx($0, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                X ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                gt && g.jsx($d, {
                  type: "error",
                  message: gt
                }),
                kt && g.jsx($d, {
                  type: "success",
                  message: kt
                }),
                g.jsx(vh, {
                  file: f,
                  onFileUpload: Yl,
                  isParsingMetadata: yl,
                  metadataSummary: Ul
                }),
                g.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: ft.map(({ label: r, value: S, helper: O }) => g.jsxs("div", {
                    className: "relative overflow-hidden rounded-xl border px-4 py-3 text-sm text-white shadow-lg shadow-primary/30",
                    style: {
                      backgroundImage: "var(--stat-card-gradient, var(--themegradient-active))",
                      borderColor: "var(--stat-card-border, transparent)"
                    },
                    children: [
                      g.jsx("div", {
                        className: "pointer-events-none absolute inset-0 bg-black/10"
                      }),
                      g.jsxs("div", {
                        className: "relative space-y-1",
                        children: [
                          g.jsx("p", {
                            className: "text-xs font-semibold uppercase tracking-wide text-white/80",
                            children: r
                          }),
                          g.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: S
                          }),
                          g.jsx("p", {
                            className: "text-xs text-white/80",
                            children: O
                          })
                        ]
                      })
                    ]
                  }, r))
                })
              ]
            }),
            g.jsx(bh, {
              metadata: A,
              onMetadataChange: hl
            }),
            g.jsx(_h, {
              albumArtUrl: j,
              onAlbumArtChange: C
            }),
            g.jsx(ph, {
              syltFrame: R,
              onTextChange: w,
              onMetadataChange: Q,
              lrcText: H,
              onLrcTextChange: U,
              onImport: el,
              unsyncedLyrics: ((_b = (_a = A.lyrics) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onUnsyncedLyricsChange: (r) => hl("lyrics", r ? [
                {
                  text: r
                }
              ] : [])
            }),
            g.jsx(zh, {
              disabled: !f || Vt,
              isProcessing: Vt,
              fileName: f == null ? void 0 : f.name,
              onProcess: x
            })
          ]
        })
      ]
    });
  }
  L0.createRoot(document.getElementById("root")).render(g.jsx(R0.StrictMode, {
    children: g.jsx(Xh, {})
  }));
})();
export {
  __tla,
  tm as g
};

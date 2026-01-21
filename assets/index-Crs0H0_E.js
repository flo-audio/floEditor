let Nm;
let __tla = (async () => {
  (function() {
    const f = document.createElement("link").relList;
    if (f && f.supports && f.supports("modulepreload")) return;
    for (const g of document.querySelectorAll('link[rel="modulepreload"]')) r(g);
    new MutationObserver((g) => {
      for (const A of g) if (A.type === "childList") for (const x of A.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && r(x);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(g) {
      const A = {};
      return g.integrity && (A.integrity = g.integrity), g.referrerPolicy && (A.referrerPolicy = g.referrerPolicy), g.crossOrigin === "use-credentials" ? A.credentials = "include" : g.crossOrigin === "anonymous" ? A.credentials = "omit" : A.credentials = "same-origin", A;
    }
    function r(g) {
      if (g.ep) return;
      g.ep = true;
      const A = d(g);
      fetch(g.href, A);
    }
  })();
  Nm = function(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  };
  var Es = {
    exports: {}
  }, qn = {};
  var Kd;
  function fy() {
    if (Kd) return qn;
    Kd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(r, g, A) {
      var x = null;
      if (A !== void 0 && (x = "" + A), g.key !== void 0 && (x = "" + g.key), "key" in g) {
        A = {};
        for (var p in g) p !== "key" && (A[p] = g[p]);
      } else A = g;
      return g = A.ref, {
        $$typeof: s,
        type: r,
        key: x,
        ref: g !== void 0 ? g : null,
        props: A
      };
    }
    return qn.Fragment = f, qn.jsx = d, qn.jsxs = d, qn;
  }
  var Jd;
  function ry() {
    return Jd || (Jd = 1, Es.exports = fy()), Es.exports;
  }
  var c = ry(), ws = {
    exports: {}
  }, F = {};
  var Wd;
  function oy() {
    if (Wd) return F;
    Wd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), g = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), L = Symbol.iterator;
    function P(h) {
      return h === null || typeof h != "object" ? null : (h = L && h[L] || h["@@iterator"], typeof h == "function" ? h : null);
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
    }, bt = Object.assign, J = {};
    function Z(h, T, R) {
      this.props = h, this.context = T, this.refs = J, this.updater = R || gt;
    }
    Z.prototype.isReactComponent = {}, Z.prototype.setState = function(h, T) {
      if (typeof h != "object" && typeof h != "function" && h != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, h, T, "setState");
    }, Z.prototype.forceUpdate = function(h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    };
    function W() {
    }
    W.prototype = Z.prototype;
    function G(h, T, R) {
      this.props = h, this.context = T, this.refs = J, this.updater = R || gt;
    }
    var rt = G.prototype = new W();
    rt.constructor = G, bt(rt, Z.prototype), rt.isPureReactComponent = true;
    var Kt = Array.isArray;
    function Dt() {
    }
    var I = {
      H: null,
      A: null,
      T: null,
      S: null
    }, qt = Object.prototype.hasOwnProperty;
    function Jt(h, T, R) {
      var q = R.ref;
      return {
        $$typeof: s,
        type: h,
        key: T,
        ref: q !== void 0 ? q : null,
        props: R
      };
    }
    function V(h, T) {
      return Jt(h.type, T, h.props);
    }
    function lt(h) {
      return typeof h == "object" && h !== null && h.$$typeof === s;
    }
    function _t(h) {
      var T = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + h.replace(/[=:]/g, function(R) {
        return T[R];
      });
    }
    var ne = /\/+/g;
    function ue(h, T) {
      return typeof h == "object" && h !== null && h.key != null ? _t("" + h.key) : T.toString(36);
    }
    function Wt(h) {
      switch (h.status) {
        case "fulfilled":
          return h.value;
        case "rejected":
          throw h.reason;
        default:
          switch (typeof h.status == "string" ? h.then(Dt, Dt) : (h.status = "pending", h.then(function(T) {
            h.status === "pending" && (h.status = "fulfilled", h.value = T);
          }, function(T) {
            h.status === "pending" && (h.status = "rejected", h.reason = T);
          })), h.status) {
            case "fulfilled":
              return h.value;
            case "rejected":
              throw h.reason;
          }
      }
      throw h;
    }
    function O(h, T, R, q, $) {
      var at = typeof h;
      (at === "undefined" || at === "boolean") && (h = null);
      var ot = false;
      if (h === null) ot = true;
      else switch (at) {
        case "bigint":
        case "string":
        case "number":
          ot = true;
          break;
        case "object":
          switch (h.$$typeof) {
            case s:
            case f:
              ot = true;
              break;
            case E:
              return ot = h._init, O(ot(h._payload), T, R, q, $);
          }
      }
      if (ot) return $ = $(h), ot = q === "" ? "." + ue(h, 0) : q, Kt($) ? (R = "", ot != null && (R = ot.replace(ne, "$&/") + "/"), O($, T, R, "", function(Rl) {
        return Rl;
      })) : $ != null && (lt($) && ($ = V($, R + ($.key == null || h && h.key === $.key ? "" : ("" + $.key).replace(ne, "$&/") + "/") + ot)), T.push($)), 1;
      ot = 0;
      var zt = q === "" ? "." : q + ":";
      if (Kt(h)) for (var wt = 0; wt < h.length; wt++) q = h[wt], at = zt + ue(q, wt), ot += O(q, T, R, at, $);
      else if (wt = P(h), typeof wt == "function") for (h = wt.call(h), wt = 0; !(q = h.next()).done; ) q = q.value, at = zt + ue(q, wt++), ot += O(q, T, R, at, $);
      else if (at === "object") {
        if (typeof h.then == "function") return O(Wt(h), T, R, q, $);
        throw T = String(h), Error("Objects are not valid as a React child (found: " + (T === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : T) + "). If you meant to render a collection of children, use an array instead.");
      }
      return ot;
    }
    function B(h, T, R) {
      if (h == null) return h;
      var q = [], $ = 0;
      return O(h, q, "", "", function(at) {
        return T.call(R, at, $++);
      }), q;
    }
    function K(h) {
      if (h._status === -1) {
        var T = h._result;
        T = T(), T.then(function(R) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = R);
        }, function(R) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = R);
        }), h._status === -1 && (h._status = 0, h._result = T);
      }
      if (h._status === 1) return h._result.default;
      throw h._result;
    }
    var pt = typeof reportError == "function" ? reportError : function(h) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var T = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
          error: h
        });
        if (!window.dispatchEvent(T)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", h);
        return;
      }
      console.error(h);
    }, H = {
      map: B,
      forEach: function(h, T, R) {
        B(h, function() {
          T.apply(this, arguments);
        }, R);
      },
      count: function(h) {
        var T = 0;
        return B(h, function() {
          T++;
        }), T;
      },
      toArray: function(h) {
        return B(h, function(T) {
          return T;
        }) || [];
      },
      only: function(h) {
        if (!lt(h)) throw Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
    };
    return F.Activity = C, F.Children = H, F.Component = Z, F.Fragment = d, F.Profiler = g, F.PureComponent = G, F.StrictMode = r, F.Suspense = _, F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, F.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(h) {
        return I.H.useMemoCache(h);
      }
    }, F.cache = function(h) {
      return function() {
        return h.apply(null, arguments);
      };
    }, F.cacheSignal = function() {
      return null;
    }, F.cloneElement = function(h, T, R) {
      if (h == null) throw Error("The argument must be a React element, but you passed " + h + ".");
      var q = bt({}, h.props), $ = h.key;
      if (T != null) for (at in T.key !== void 0 && ($ = "" + T.key), T) !qt.call(T, at) || at === "key" || at === "__self" || at === "__source" || at === "ref" && T.ref === void 0 || (q[at] = T[at]);
      var at = arguments.length - 2;
      if (at === 1) q.children = R;
      else if (1 < at) {
        for (var ot = Array(at), zt = 0; zt < at; zt++) ot[zt] = arguments[zt + 2];
        q.children = ot;
      }
      return Jt(h.type, $, q);
    }, F.createContext = function(h) {
      return h = {
        $$typeof: x,
        _currentValue: h,
        _currentValue2: h,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, h.Provider = h, h.Consumer = {
        $$typeof: A,
        _context: h
      }, h;
    }, F.createElement = function(h, T, R) {
      var q, $ = {}, at = null;
      if (T != null) for (q in T.key !== void 0 && (at = "" + T.key), T) qt.call(T, q) && q !== "key" && q !== "__self" && q !== "__source" && ($[q] = T[q]);
      var ot = arguments.length - 2;
      if (ot === 1) $.children = R;
      else if (1 < ot) {
        for (var zt = Array(ot), wt = 0; wt < ot; wt++) zt[wt] = arguments[wt + 2];
        $.children = zt;
      }
      if (h && h.defaultProps) for (q in ot = h.defaultProps, ot) $[q] === void 0 && ($[q] = ot[q]);
      return Jt(h, at, $);
    }, F.createRef = function() {
      return {
        current: null
      };
    }, F.forwardRef = function(h) {
      return {
        $$typeof: p,
        render: h
      };
    }, F.isValidElement = lt, F.lazy = function(h) {
      return {
        $$typeof: E,
        _payload: {
          _status: -1,
          _result: h
        },
        _init: K
      };
    }, F.memo = function(h, T) {
      return {
        $$typeof: b,
        type: h,
        compare: T === void 0 ? null : T
      };
    }, F.startTransition = function(h) {
      var T = I.T, R = {};
      I.T = R;
      try {
        var q = h(), $ = I.S;
        $ !== null && $(R, q), typeof q == "object" && q !== null && typeof q.then == "function" && q.then(Dt, pt);
      } catch (at) {
        pt(at);
      } finally {
        T !== null && R.types !== null && (T.types = R.types), I.T = T;
      }
    }, F.unstable_useCacheRefresh = function() {
      return I.H.useCacheRefresh();
    }, F.use = function(h) {
      return I.H.use(h);
    }, F.useActionState = function(h, T, R) {
      return I.H.useActionState(h, T, R);
    }, F.useCallback = function(h, T) {
      return I.H.useCallback(h, T);
    }, F.useContext = function(h) {
      return I.H.useContext(h);
    }, F.useDebugValue = function() {
    }, F.useDeferredValue = function(h, T) {
      return I.H.useDeferredValue(h, T);
    }, F.useEffect = function(h, T) {
      return I.H.useEffect(h, T);
    }, F.useEffectEvent = function(h) {
      return I.H.useEffectEvent(h);
    }, F.useId = function() {
      return I.H.useId();
    }, F.useImperativeHandle = function(h, T, R) {
      return I.H.useImperativeHandle(h, T, R);
    }, F.useInsertionEffect = function(h, T) {
      return I.H.useInsertionEffect(h, T);
    }, F.useLayoutEffect = function(h, T) {
      return I.H.useLayoutEffect(h, T);
    }, F.useMemo = function(h, T) {
      return I.H.useMemo(h, T);
    }, F.useOptimistic = function(h, T) {
      return I.H.useOptimistic(h, T);
    }, F.useReducer = function(h, T, R) {
      return I.H.useReducer(h, T, R);
    }, F.useRef = function(h) {
      return I.H.useRef(h);
    }, F.useState = function(h) {
      return I.H.useState(h);
    }, F.useSyncExternalStore = function(h, T, R) {
      return I.H.useSyncExternalStore(h, T, R);
    }, F.useTransition = function() {
      return I.H.useTransition();
    }, F.version = "19.2.3", F;
  }
  var $d;
  function Gs() {
    return $d || ($d = 1, ws.exports = oy()), ws.exports;
  }
  var ft = Gs();
  const dy = Nm(ft);
  var Ms = {
    exports: {}
  }, Yn = {}, Os = {
    exports: {}
  }, Us = {};
  var Fd;
  function my() {
    return Fd || (Fd = 1, (function(s) {
      function f(O, B) {
        var K = O.length;
        O.push(B);
        t: for (; 0 < K; ) {
          var pt = K - 1 >>> 1, H = O[pt];
          if (0 < g(H, B)) O[pt] = B, O[K] = H, K = pt;
          else break t;
        }
      }
      function d(O) {
        return O.length === 0 ? null : O[0];
      }
      function r(O) {
        if (O.length === 0) return null;
        var B = O[0], K = O.pop();
        if (K !== B) {
          O[0] = K;
          t: for (var pt = 0, H = O.length, h = H >>> 1; pt < h; ) {
            var T = 2 * (pt + 1) - 1, R = O[T], q = T + 1, $ = O[q];
            if (0 > g(R, K)) q < H && 0 > g($, R) ? (O[pt] = $, O[q] = K, pt = q) : (O[pt] = R, O[T] = K, pt = T);
            else if (q < H && 0 > g($, K)) O[pt] = $, O[q] = K, pt = q;
            else break t;
          }
        }
        return B;
      }
      function g(O, B) {
        var K = O.sortIndex - B.sortIndex;
        return K !== 0 ? K : O.id - B.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var A = performance;
        s.unstable_now = function() {
          return A.now();
        };
      } else {
        var x = Date, p = x.now();
        s.unstable_now = function() {
          return x.now() - p;
        };
      }
      var _ = [], b = [], E = 1, C = null, L = 3, P = false, gt = false, bt = false, J = false, Z = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
      function rt(O) {
        for (var B = d(b); B !== null; ) {
          if (B.callback === null) r(b);
          else if (B.startTime <= O) r(b), B.sortIndex = B.expirationTime, f(_, B);
          else break;
          B = d(b);
        }
      }
      function Kt(O) {
        if (bt = false, rt(O), !gt) if (d(_) !== null) gt = true, Dt || (Dt = true, _t());
        else {
          var B = d(b);
          B !== null && Wt(Kt, B.startTime - O);
        }
      }
      var Dt = false, I = -1, qt = 5, Jt = -1;
      function V() {
        return J ? true : !(s.unstable_now() - Jt < qt);
      }
      function lt() {
        if (J = false, Dt) {
          var O = s.unstable_now();
          Jt = O;
          var B = true;
          try {
            t: {
              gt = false, bt && (bt = false, W(I), I = -1), P = true;
              var K = L;
              try {
                e: {
                  for (rt(O), C = d(_); C !== null && !(C.expirationTime > O && V()); ) {
                    var pt = C.callback;
                    if (typeof pt == "function") {
                      C.callback = null, L = C.priorityLevel;
                      var H = pt(C.expirationTime <= O);
                      if (O = s.unstable_now(), typeof H == "function") {
                        C.callback = H, rt(O), B = true;
                        break e;
                      }
                      C === d(_) && r(_), rt(O);
                    } else r(_);
                    C = d(_);
                  }
                  if (C !== null) B = true;
                  else {
                    var h = d(b);
                    h !== null && Wt(Kt, h.startTime - O), B = false;
                  }
                }
                break t;
              } finally {
                C = null, L = K, P = false;
              }
              B = void 0;
            }
          } finally {
            B ? _t() : Dt = false;
          }
        }
      }
      var _t;
      if (typeof G == "function") _t = function() {
        G(lt);
      };
      else if (typeof MessageChannel < "u") {
        var ne = new MessageChannel(), ue = ne.port2;
        ne.port1.onmessage = lt, _t = function() {
          ue.postMessage(null);
        };
      } else _t = function() {
        Z(lt, 0);
      };
      function Wt(O, B) {
        I = Z(function() {
          O(s.unstable_now());
        }, B);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, s.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : qt = 0 < O ? Math.floor(1e3 / O) : 5;
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
        var pt = s.unstable_now();
        switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? pt + K : pt) : K = pt, O) {
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
        }, K > pt ? (O.sortIndex = K, f(b, O), d(_) === null && O === d(b) && (bt ? (W(I), I = -1) : bt = true, Wt(Kt, K - pt))) : (O.sortIndex = H, f(_, O), gt || P || (gt = true, Dt || (Dt = true, _t()))), O;
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
  var Id;
  function hy() {
    return Id || (Id = 1, Os.exports = my()), Os.exports;
  }
  var Ds = {
    exports: {}
  }, le = {};
  var Pd;
  function yy() {
    if (Pd) return le;
    Pd = 1;
    var s = Gs();
    function f(_) {
      var b = "https://react.dev/errors/" + _;
      if (1 < arguments.length) {
        b += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var E = 2; E < arguments.length; E++) b += "&args[]=" + encodeURIComponent(arguments[E]);
      }
      return "Minified React error #" + _ + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d() {
    }
    var r = {
      d: {
        f: d,
        r: function() {
          throw Error(f(522));
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
    }, g = /* @__PURE__ */ Symbol.for("react.portal");
    function A(_, b, E) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: g,
        key: C == null ? null : "" + C,
        children: _,
        containerInfo: b,
        implementation: E
      };
    }
    var x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function p(_, b) {
      if (_ === "font") return "";
      if (typeof b == "string") return b === "use-credentials" ? b : "";
    }
    return le.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, le.createPortal = function(_, b) {
      var E = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11) throw Error(f(299));
      return A(_, b, null, E);
    }, le.flushSync = function(_) {
      var b = x.T, E = r.p;
      try {
        if (x.T = null, r.p = 2, _) return _();
      } finally {
        x.T = b, r.p = E, r.d.f();
      }
    }, le.preconnect = function(_, b) {
      typeof _ == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, r.d.C(_, b));
    }, le.prefetchDNS = function(_) {
      typeof _ == "string" && r.d.D(_);
    }, le.preinit = function(_, b) {
      if (typeof _ == "string" && b && typeof b.as == "string") {
        var E = b.as, C = p(E, b.crossOrigin), L = typeof b.integrity == "string" ? b.integrity : void 0, P = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        E === "style" ? r.d.S(_, typeof b.precedence == "string" ? b.precedence : void 0, {
          crossOrigin: C,
          integrity: L,
          fetchPriority: P
        }) : E === "script" && r.d.X(_, {
          crossOrigin: C,
          integrity: L,
          fetchPriority: P,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0
        });
      }
    }, le.preinitModule = function(_, b) {
      if (typeof _ == "string") if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var E = p(b.as, b.crossOrigin);
          r.d.M(_, {
            crossOrigin: E,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && r.d.M(_);
    }, le.preload = function(_, b) {
      if (typeof _ == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
        var E = b.as, C = p(E, b.crossOrigin);
        r.d.L(_, E, {
          crossOrigin: C,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          type: typeof b.type == "string" ? b.type : void 0,
          fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
          referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
          imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
          imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
          media: typeof b.media == "string" ? b.media : void 0
        });
      }
    }, le.preloadModule = function(_, b) {
      if (typeof _ == "string") if (b) {
        var E = p(b.as, b.crossOrigin);
        r.d.m(_, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: E,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else r.d.m(_);
    }, le.requestFormReset = function(_) {
      r.d.r(_);
    }, le.unstable_batchedUpdates = function(_, b) {
      return _(b);
    }, le.useFormState = function(_, b, E) {
      return x.H.useFormState(_, b, E);
    }, le.useFormStatus = function() {
      return x.H.useHostTransitionStatus();
    }, le.version = "19.2.3", le;
  }
  var tm;
  function gy() {
    if (tm) return Ds.exports;
    tm = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
    }
    return s(), Ds.exports = yy(), Ds.exports;
  }
  var em;
  function by() {
    if (em) return Yn;
    em = 1;
    var s = hy(), f = Gs(), d = gy();
    function r(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function g(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function A(t) {
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
    function x(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function p(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function _(t) {
      if (A(t) !== t) throw Error(r(188));
    }
    function b(t) {
      var e = t.alternate;
      if (!e) {
        if (e = A(t), e === null) throw Error(r(188));
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
            if (u === l) return _(n), t;
            if (u === a) return _(n), e;
            u = u.sibling;
          }
          throw Error(r(188));
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
            if (!i) throw Error(r(189));
          }
        }
        if (l.alternate !== a) throw Error(r(190));
      }
      if (l.tag !== 3) throw Error(r(188));
      return l.stateNode.current === l ? t : e;
    }
    function E(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = E(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var C = Object.assign, L = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.transitional.element"), gt = /* @__PURE__ */ Symbol.for("react.portal"), bt = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), Z = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), rt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Kt = /* @__PURE__ */ Symbol.for("react.suspense"), Dt = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), qt = /* @__PURE__ */ Symbol.for("react.lazy"), Jt = /* @__PURE__ */ Symbol.for("react.activity"), V = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), lt = Symbol.iterator;
    function _t(t) {
      return t === null || typeof t != "object" ? null : (t = lt && t[lt] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var ne = /* @__PURE__ */ Symbol.for("react.client.reference");
    function ue(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === ne ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case bt:
          return "Fragment";
        case Z:
          return "Profiler";
        case J:
          return "StrictMode";
        case Kt:
          return "Suspense";
        case Dt:
          return "SuspenseList";
        case Jt:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case gt:
          return "Portal";
        case G:
          return t.displayName || "Context";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case rt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : ue(t.type) || "Memo";
        case qt:
          e = t._payload, t = t._init;
          try {
            return ue(t(e));
          } catch {
          }
      }
      return null;
    }
    var Wt = Array.isArray, O = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, pt = [], H = -1;
    function h(t) {
      return {
        current: t
      };
    }
    function T(t) {
      0 > H || (t.current = pt[H], pt[H] = null, H--);
    }
    function R(t, e) {
      H++, pt[H] = t.current, t.current = e;
    }
    var q = h(null), $ = h(null), at = h(null), ot = h(null);
    function zt(t, e) {
      switch (R(at, e), R($, t), R(q, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? gd(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = gd(e), t = bd(e, t);
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
      T(q), R(q, t);
    }
    function wt() {
      T(q), T($), T(at);
    }
    function Rl(t) {
      t.memoizedState !== null && R(ot, t);
      var e = q.current, l = bd(e, t.type);
      e !== l && (R($, t), R(q, l));
    }
    function aa(t) {
      $.current === t && (T(q), T($)), ot.current === t && (T(ot), Cn._currentValue = K);
    }
    var ee, Re;
    function Hl(t) {
      if (ee === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ee = e && e[1] || "", Re = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ee + t + Re;
    }
    var oi = false;
    function di(t, e) {
      if (!t || oi) return "";
      oi = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
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
                    var j = z;
                  }
                  Reflect.construct(t, [], D);
                } else {
                  try {
                    D.call();
                  } catch (z) {
                    j = z;
                  }
                  t.call(D.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  j = z;
                }
                (D = t()) && typeof D.catch == "function" && D.catch(function() {
                });
              }
            } catch (z) {
              if (z && j && typeof z.stack == "string") return [
                z.stack,
                j.stack
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
`), N = o.split(`
`);
          for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === m.length || n === N.length) for (a = m.length - 1, n = N.length - 1; 1 <= a && 0 <= n && m[a] !== N[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (m[a] !== N[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || m[a] !== N[n]) {
                var w = `
` + m[a].replace(" at new ", " at ");
                return t.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", t.displayName)), w;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        oi = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? Hl(l) : "";
    }
    function Lm(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Hl(t.type);
        case 16:
          return Hl("Lazy");
        case 13:
          return t.child !== e && e !== null ? Hl("Suspense Fallback") : Hl("Suspense");
        case 19:
          return Hl("SuspenseList");
        case 0:
        case 15:
          return di(t.type, false);
        case 11:
          return di(t.type.render, false);
        case 1:
          return di(t.type, true);
        case 31:
          return Hl("Activity");
        default:
          return "";
      }
    }
    function Vs(t) {
      try {
        var e = "", l = null;
        do
          e += Lm(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var mi = Object.prototype.hasOwnProperty, hi = s.unstable_scheduleCallback, yi = s.unstable_cancelCallback, Gm = s.unstable_shouldYield, Xm = s.unstable_requestPaint, me = s.unstable_now, Qm = s.unstable_getCurrentPriorityLevel, ks = s.unstable_ImmediatePriority, Ks = s.unstable_UserBlockingPriority, Vn = s.unstable_NormalPriority, Zm = s.unstable_LowPriority, Js = s.unstable_IdlePriority, Vm = s.log, km = s.unstable_setDisableYieldValue, Va = null, he = null;
    function rl(t) {
      if (typeof Vm == "function" && km(t), he && typeof he.setStrictMode == "function") try {
        he.setStrictMode(Va, t);
      } catch {
      }
    }
    var ye = Math.clz32 ? Math.clz32 : Wm, Km = Math.log, Jm = Math.LN2;
    function Wm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Km(t) / Jm | 0) | 0;
    }
    var kn = 256, Kn = 262144, Jn = 4194304;
    function Bl(t) {
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
    function Wn(t, e, l) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
      t = t.warmLanes;
      var o = a & 134217727;
      return o !== 0 ? (a = o & ~u, a !== 0 ? n = Bl(a) : (i &= o, i !== 0 ? n = Bl(i) : l || (l = o & ~t, l !== 0 && (n = Bl(l))))) : (o = a & ~u, o !== 0 ? n = Bl(o) : i !== 0 ? n = Bl(i) : l || (l = a & ~t, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
    }
    function ka(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function $m(t, e) {
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
    function Ws() {
      var t = Jn;
      return Jn <<= 1, (Jn & 62914560) === 0 && (Jn = 4194304), t;
    }
    function gi(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function Ka(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Fm(t, e, l, a, n, u) {
      var i = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var o = t.entanglements, m = t.expirationTimes, N = t.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var w = 31 - ye(l), D = 1 << w;
        o[w] = 0, m[w] = -1;
        var j = N[w];
        if (j !== null) for (N[w] = null, w = 0; w < j.length; w++) {
          var z = j[w];
          z !== null && (z.lane &= -536870913);
        }
        l &= ~D;
      }
      a !== 0 && $s(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
    }
    function $s(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - ye(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
    }
    function Fs(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var a = 31 - ye(l), n = 1 << a;
        n & e | t[a] & e && (t[a] |= e), l &= ~n;
      }
    }
    function Is(t, e) {
      var l = e & -e;
      return l = (l & 42) !== 0 ? 1 : bi(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
    }
    function bi(t) {
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
    function pi(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Ps() {
      var t = B.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Ld(t.type));
    }
    function tf(t, e) {
      var l = B.p;
      try {
        return B.p = t, e();
      } finally {
        B.p = l;
      }
    }
    var ol = Math.random().toString(36).slice(2), $t = "__reactFiber$" + ol, ie = "__reactProps$" + ol, na = "__reactContainer$" + ol, _i = "__reactEvents$" + ol, Im = "__reactListeners$" + ol, Pm = "__reactHandles$" + ol, ef = "__reactResources$" + ol, Ja = "__reactMarker$" + ol;
    function vi(t) {
      delete t[$t], delete t[ie], delete t[_i], delete t[Im], delete t[Pm];
    }
    function ua(t) {
      var e = t[$t];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[na] || l[$t]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = jd(t); t !== null; ) {
            if (l = t[$t]) return l;
            t = jd(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function ia(t) {
      if (t = t[$t] || t[na]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function Wa(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(r(33));
    }
    function ca(t) {
      var e = t[ef];
      return e || (e = t[ef] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function Vt(t) {
      t[Ja] = true;
    }
    var lf = /* @__PURE__ */ new Set(), af = {};
    function ql(t, e) {
      sa(t, e), sa(t + "Capture", e);
    }
    function sa(t, e) {
      for (af[t] = e, t = 0; t < e.length; t++) lf.add(e[t]);
    }
    var th = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), nf = {}, uf = {};
    function eh(t) {
      return mi.call(uf, t) ? true : mi.call(nf, t) ? false : th.test(t) ? uf[t] = true : (nf[t] = true, false);
    }
    function $n(t, e, l) {
      if (eh(e)) if (l === null) t.removeAttribute(e);
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
    function Fn(t, e, l) {
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
    function ke(t, e, l, a) {
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
    function Ae(t) {
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
    function cf(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function lh(t, e, l) {
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
    function xi(t) {
      if (!t._valueTracker) {
        var e = cf(t) ? "checked" : "value";
        t._valueTracker = lh(t, e, "" + t[e]);
      }
    }
    function sf(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), a = "";
      return t && (a = cf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
    }
    function In(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var ah = /[\n"\\]/g;
    function ze(t) {
      return t.replace(ah, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Si(t, e, l, a, n, u, i, o) {
      t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ae(e)) : t.value !== "" + Ae(e) && (t.value = "" + Ae(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? Ni(t, i, Ae(e)) : l != null ? Ni(t, i, Ae(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + Ae(o) : t.removeAttribute("name");
    }
    function ff(t, e, l, a, n, u, i, o) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          xi(t);
          return;
        }
        l = l != null ? "" + Ae(l) : "", e = e != null ? "" + Ae(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = o ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), xi(t);
    }
    function Ni(t, e, l) {
      e === "number" && In(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function fa(t, e, l, a) {
      if (t = t.options, e) {
        e = {};
        for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
        for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
      } else {
        for (l = "" + Ae(l), e = null, n = 0; n < t.length; n++) {
          if (t[n].value === l) {
            t[n].selected = true, a && (t[n].defaultSelected = true);
            return;
          }
          e !== null || t[n].disabled || (e = t[n]);
        }
        e !== null && (e.selected = true);
      }
    }
    function rf(t, e, l) {
      if (e != null && (e = "" + Ae(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + Ae(l) : "";
    }
    function of(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(r(92));
          if (Wt(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = Ae(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), xi(t);
    }
    function ra(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var nh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function df(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || nh.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function mf(t, e, l) {
      if (e != null && typeof e != "object") throw Error(r(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && df(t, n, a);
      } else for (var u in e) e.hasOwnProperty(u) && df(t, u, e[u]);
    }
    function ji(t) {
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
    var uh = /* @__PURE__ */ new Map([
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
    ]), ih = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Pn(t) {
      return ih.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Ke() {
    }
    var Ai = null;
    function zi(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var oa = null, da = null;
    function hf(t) {
      var e = ia(t);
      if (e && (t = e.stateNode)) {
        var l = t[ie] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Si(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + ze("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var n = a[ie] || null;
                  if (!n) throw Error(r(90));
                  Si(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && sf(a);
            }
            break t;
          case "textarea":
            rf(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && fa(t, !!l.multiple, e, false);
        }
      }
    }
    var Ti = false;
    function yf(t, e, l) {
      if (Ti) return t(e, l);
      Ti = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (Ti = false, (oa !== null || da !== null) && (Lu(), oa && (e = oa, t = da, da = oa = null, hf(e), t))) for (e = 0; e < t.length; e++) hf(t[e]);
      }
    }
    function $a(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var a = l[ie] || null;
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
    var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ei = false;
    if (Je) try {
      var Fa = {};
      Object.defineProperty(Fa, "passive", {
        get: function() {
          Ei = true;
        }
      }), window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
    } catch {
      Ei = false;
    }
    var dl = null, wi = null, tu = null;
    function gf() {
      if (tu) return tu;
      var t, e = wi, l = e.length, a, n = "value" in dl ? dl.value : dl.textContent, u = n.length;
      for (t = 0; t < l && e[t] === n[t]; t++) ;
      var i = l - t;
      for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
      return tu = n.slice(t, 1 < a ? 1 - a : void 0);
    }
    function eu(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function lu() {
      return true;
    }
    function bf() {
      return false;
    }
    function ce(t) {
      function e(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var o in t) t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? lu : bf, this.isPropagationStopped = bf, this;
      }
      return C(e.prototype, {
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
      }), e;
    }
    var Yl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, au = ce(Yl), Ia = C({}, Yl, {
      view: 0,
      detail: 0
    }), ch = ce(Ia), Mi, Oi, Pa, nu = C({}, Ia, {
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
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Pa && (Pa && t.type === "mousemove" ? (Mi = t.screenX - Pa.screenX, Oi = t.screenY - Pa.screenY) : Oi = Mi = 0, Pa = t), Mi);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Oi;
      }
    }), pf = ce(nu), sh = C({}, nu, {
      dataTransfer: 0
    }), fh = ce(sh), rh = C({}, Ia, {
      relatedTarget: 0
    }), Ui = ce(rh), oh = C({}, Yl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dh = ce(oh), mh = C({}, Yl, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), hh = ce(mh), yh = C({}, Yl, {
      data: 0
    }), _f = ce(yh), gh = {
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
    }, bh = {
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
    }, ph = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _h(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = ph[t]) ? !!e[t] : false;
    }
    function Di() {
      return _h;
    }
    var vh = C({}, Ia, {
      key: function(t) {
        if (t.key) {
          var e = gh[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = eu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? bh[t.keyCode] || "Unidentified" : "";
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
      charCode: function(t) {
        return t.type === "keypress" ? eu(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? eu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), xh = ce(vh), Sh = C({}, nu, {
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
    }), vf = ce(Sh), Nh = C({}, Ia, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Di
    }), jh = ce(Nh), Ah = C({}, Yl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), zh = ce(Ah), Th = C({}, nu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Eh = ce(Th), wh = C({}, Yl, {
      newState: 0,
      oldState: 0
    }), Mh = ce(wh), Oh = [
      9,
      13,
      27,
      32
    ], Ci = Je && "CompositionEvent" in window, tn = null;
    Je && "documentMode" in document && (tn = document.documentMode);
    var Uh = Je && "TextEvent" in window && !tn, xf = Je && (!Ci || tn && 8 < tn && 11 >= tn), Sf = " ", Nf = false;
    function jf(t, e) {
      switch (t) {
        case "keyup":
          return Oh.indexOf(e.keyCode) !== -1;
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
    function Af(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var ma = false;
    function Dh(t, e) {
      switch (t) {
        case "compositionend":
          return Af(e);
        case "keypress":
          return e.which !== 32 ? null : (Nf = true, Sf);
        case "textInput":
          return t = e.data, t === Sf && Nf ? null : t;
        default:
          return null;
      }
    }
    function Ch(t, e) {
      if (ma) return t === "compositionend" || !Ci && jf(t, e) ? (t = gf(), tu = wi = dl = null, ma = false, t) : null;
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
          return xf && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var Rh = {
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
    function zf(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!Rh[t.type] : e === "textarea";
    }
    function Tf(t, e, l, a) {
      oa ? da ? da.push(a) : da = [
        a
      ] : oa = a, e = Ku(e, "onChange"), 0 < e.length && (l = new au("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var en = null, ln = null;
    function Hh(t) {
      rd(t, 0);
    }
    function uu(t) {
      var e = Wa(t);
      if (sf(e)) return t;
    }
    function Ef(t, e) {
      if (t === "change") return e;
    }
    var wf = false;
    if (Je) {
      var Ri;
      if (Je) {
        var Hi = "oninput" in document;
        if (!Hi) {
          var Mf = document.createElement("div");
          Mf.setAttribute("oninput", "return;"), Hi = typeof Mf.oninput == "function";
        }
        Ri = Hi;
      } else Ri = false;
      wf = Ri && (!document.documentMode || 9 < document.documentMode);
    }
    function Of() {
      en && (en.detachEvent("onpropertychange", Uf), ln = en = null);
    }
    function Uf(t) {
      if (t.propertyName === "value" && uu(ln)) {
        var e = [];
        Tf(e, ln, t, zi(t)), yf(Hh, e);
      }
    }
    function Bh(t, e, l) {
      t === "focusin" ? (Of(), en = e, ln = l, en.attachEvent("onpropertychange", Uf)) : t === "focusout" && Of();
    }
    function qh(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return uu(ln);
    }
    function Yh(t, e) {
      if (t === "click") return uu(e);
    }
    function Lh(t, e) {
      if (t === "input" || t === "change") return uu(e);
    }
    function Gh(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var ge = typeof Object.is == "function" ? Object.is : Gh;
    function an(t, e) {
      if (ge(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), a = Object.keys(e);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!mi.call(e, n) || !ge(t[n], e[n])) return false;
      }
      return true;
    }
    function Df(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Cf(t, e) {
      var l = Df(t);
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
        l = Df(l);
      }
    }
    function Rf(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Rf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Hf(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = In(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = In(t.document);
      }
      return e;
    }
    function Bi(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var Xh = Je && "documentMode" in document && 11 >= document.documentMode, ha = null, qi = null, nn = null, Yi = false;
    function Bf(t, e, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Yi || ha == null || ha !== In(a) || (a = ha, "selectionStart" in a && Bi(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), nn && an(nn, a) || (nn = a, a = Ku(qi, "onSelect"), 0 < a.length && (e = new au("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: a
      }), e.target = ha)));
    }
    function Ll(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var ya = {
      animationend: Ll("Animation", "AnimationEnd"),
      animationiteration: Ll("Animation", "AnimationIteration"),
      animationstart: Ll("Animation", "AnimationStart"),
      transitionrun: Ll("Transition", "TransitionRun"),
      transitionstart: Ll("Transition", "TransitionStart"),
      transitioncancel: Ll("Transition", "TransitionCancel"),
      transitionend: Ll("Transition", "TransitionEnd")
    }, Li = {}, qf = {};
    Je && (qf = document.createElement("div").style, "AnimationEvent" in window || (delete ya.animationend.animation, delete ya.animationiteration.animation, delete ya.animationstart.animation), "TransitionEvent" in window || delete ya.transitionend.transition);
    function Gl(t) {
      if (Li[t]) return Li[t];
      if (!ya[t]) return t;
      var e = ya[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in qf) return Li[t] = e[l];
      return t;
    }
    var Yf = Gl("animationend"), Lf = Gl("animationiteration"), Gf = Gl("animationstart"), Qh = Gl("transitionrun"), Zh = Gl("transitionstart"), Vh = Gl("transitioncancel"), Xf = Gl("transitionend"), Qf = /* @__PURE__ */ new Map(), Gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Gi.push("scrollEnd");
    function He(t, e) {
      Qf.set(t, e), ql(e, [
        t
      ]);
    }
    var iu = typeof reportError == "function" ? reportError : function(t) {
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
    }, Te = [], ga = 0, Xi = 0;
    function cu() {
      for (var t = ga, e = Xi = ga = 0; e < t; ) {
        var l = Te[e];
        Te[e++] = null;
        var a = Te[e];
        Te[e++] = null;
        var n = Te[e];
        Te[e++] = null;
        var u = Te[e];
        if (Te[e++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Zf(l, n, u);
      }
    }
    function su(t, e, l, a) {
      Te[ga++] = t, Te[ga++] = e, Te[ga++] = l, Te[ga++] = a, Xi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Qi(t, e, l, a) {
      return su(t, e, l, a), fu(t);
    }
    function Xl(t, e) {
      return su(t, null, null, e), fu(t);
    }
    function Zf(t, e, l) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - ye(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
        e
      ] : a.push(e), e.lane = l | 536870912), u) : null;
    }
    function fu(t) {
      if (50 < Tn) throw Tn = 0, Ic = null, Error(r(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var ba = {};
    function kh(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function be(t, e, l, a) {
      return new kh(t, e, l, a);
    }
    function Zi(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function We(t, e) {
      var l = t.alternate;
      return l === null ? (l = be(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function Vf(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function ru(t, e, l, a, n, u) {
      var i = 0;
      if (a = t, typeof t == "function") Zi(t) && (i = 1);
      else if (typeof t == "string") i = F0(t, l, q.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case Jt:
          return t = be(31, l, e, n), t.elementType = Jt, t.lanes = u, t;
        case bt:
          return Ql(l.children, n, u, e);
        case J:
          i = 8, n |= 24;
          break;
        case Z:
          return t = be(12, l, e, n | 2), t.elementType = Z, t.lanes = u, t;
        case Kt:
          return t = be(13, l, e, n), t.elementType = Kt, t.lanes = u, t;
        case Dt:
          return t = be(19, l, e, n), t.elementType = Dt, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case G:
              i = 10;
              break t;
            case W:
              i = 9;
              break t;
            case rt:
              i = 11;
              break t;
            case I:
              i = 14;
              break t;
            case qt:
              i = 16, a = null;
              break t;
          }
          i = 29, l = Error(r(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = be(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function Ql(t, e, l, a) {
      return t = be(7, t, a, e), t.lanes = l, t;
    }
    function Vi(t, e, l) {
      return t = be(6, t, null, e), t.lanes = l, t;
    }
    function kf(t) {
      var e = be(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function ki(t, e, l) {
      return e = be(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var Kf = /* @__PURE__ */ new WeakMap();
    function Ee(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = Kf.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: Vs(e)
        }, Kf.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Vs(e)
      };
    }
    var pa = [], _a = 0, ou = null, un = 0, we = [], Me = 0, ml = null, Le = 1, Ge = "";
    function $e(t, e) {
      pa[_a++] = un, pa[_a++] = ou, ou = t, un = e;
    }
    function Jf(t, e, l) {
      we[Me++] = Le, we[Me++] = Ge, we[Me++] = ml, ml = t;
      var a = Le;
      t = Ge;
      var n = 32 - ye(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - ye(e) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Le = 1 << 32 - ye(e) + n | l << n | a, Ge = u + t;
      } else Le = 1 << u | l << n | a, Ge = t;
    }
    function Ki(t) {
      t.return !== null && ($e(t, 1), Jf(t, 1, 0));
    }
    function Ji(t) {
      for (; t === ou; ) ou = pa[--_a], pa[_a] = null, un = pa[--_a], pa[_a] = null;
      for (; t === ml; ) ml = we[--Me], we[Me] = null, Ge = we[--Me], we[Me] = null, Le = we[--Me], we[Me] = null;
    }
    function Wf(t, e) {
      we[Me++] = Le, we[Me++] = Ge, we[Me++] = ml, Le = e.id, Ge = e.overflow, ml = t;
    }
    var Ft = null, Mt = null, st = false, hl = null, Oe = false, Wi = Error(r(519));
    function yl(t) {
      var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw cn(Ee(e, t)), Wi;
    }
    function $f(t) {
      var e = t.stateNode, l = t.type, a = t.memoizedProps;
      switch (e[$t] = t, e[ie] = a, l) {
        case "dialog":
          ut("cancel", e), ut("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          ut("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < wn.length; l++) ut(wn[l], e);
          break;
        case "source":
          ut("error", e);
          break;
        case "img":
        case "image":
        case "link":
          ut("error", e), ut("load", e);
          break;
        case "details":
          ut("toggle", e);
          break;
        case "input":
          ut("invalid", e), ff(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          ut("invalid", e);
          break;
        case "textarea":
          ut("invalid", e), of(e, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || hd(e.textContent, l) ? (a.popover != null && (ut("beforetoggle", e), ut("toggle", e)), a.onScroll != null && ut("scroll", e), a.onScrollEnd != null && ut("scrollend", e), a.onClick != null && (e.onclick = Ke), e = true) : e = false, e || yl(t, true);
    }
    function Ff(t) {
      for (Ft = t.return; Ft; ) switch (Ft.tag) {
        case 5:
        case 31:
        case 13:
          Oe = false;
          return;
        case 27:
        case 3:
          Oe = true;
          return;
        default:
          Ft = Ft.return;
      }
    }
    function va(t) {
      if (t !== Ft) return false;
      if (!st) return Ff(t), st = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || ms(t.type, t.memoizedProps)), l = !l), l && Mt && yl(t), Ff(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        Mt = Nd(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        Mt = Nd(t);
      } else e === 27 ? (e = Mt, wl(t.type) ? (t = ps, ps = null, Mt = t) : Mt = e) : Mt = Ft ? De(t.stateNode.nextSibling) : null;
      return true;
    }
    function Zl() {
      Mt = Ft = null, st = false;
    }
    function $i() {
      var t = hl;
      return t !== null && (oe === null ? oe = t : oe.push.apply(oe, t), hl = null), t;
    }
    function cn(t) {
      hl === null ? hl = [
        t
      ] : hl.push(t);
    }
    var Fi = h(null), Vl = null, Fe = null;
    function gl(t, e, l) {
      R(Fi, e._currentValue), e._currentValue = l;
    }
    function Ie(t) {
      t._currentValue = Fi.current, T(Fi);
    }
    function Ii(t, e, l) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
        t = t.return;
      }
    }
    function Pi(t, e, l, a) {
      var n = t.child;
      for (n !== null && (n.return = t); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var i = n.child;
          u = u.firstContext;
          t: for (; u !== null; ) {
            var o = u;
            u = n;
            for (var m = 0; m < e.length; m++) if (o.context === e[m]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Ii(u.return, l, t), a || (i = null);
              break t;
            }
            u = o.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(r(341));
          i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Ii(i, l, t), i = null;
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
    function xa(t, e, l, a) {
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
            var o = n.type;
            ge(n.pendingProps.value, i.value) || (t !== null ? t.push(o) : t = [
              o
            ]);
          }
        } else if (n === ot.current) {
          if (i = n.alternate, i === null) throw Error(r(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Cn) : t = [
            Cn
          ]);
        }
        n = n.return;
      }
      t !== null && Pi(e, t, l, a), e.flags |= 262144;
    }
    function du(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!ge(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function kl(t) {
      Vl = t, Fe = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function It(t) {
      return If(Vl, t);
    }
    function mu(t, e) {
      return Vl === null && kl(t), If(t, e);
    }
    function If(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, Fe === null) {
        if (t === null) throw Error(r(308));
        Fe = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else Fe = Fe.next = e;
      return l;
    }
    var Kh = typeof AbortController < "u" ? AbortController : function() {
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
    }, Jh = s.unstable_scheduleCallback, Wh = s.unstable_NormalPriority, Yt = {
      $$typeof: G,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function tc() {
      return {
        controller: new Kh(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function sn(t) {
      t.refCount--, t.refCount === 0 && Jh(Wh, function() {
        t.controller.abort();
      });
    }
    var fn = null, ec = 0, Sa = 0, Na = null;
    function $h(t, e) {
      if (fn === null) {
        var l = fn = [];
        ec = 0, Sa = ns(), Na = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return ec++, e.then(Pf, Pf), e;
    }
    function Pf() {
      if (--ec === 0 && fn !== null) {
        Na !== null && (Na.status = "fulfilled");
        var t = fn;
        fn = null, Sa = 0, Na = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Fh(t, e) {
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
    var tr = O.S;
    O.S = function(t, e) {
      qo = me(), typeof e == "object" && e !== null && typeof e.then == "function" && $h(t, e), tr !== null && tr(t, e);
    };
    var Kl = h(null);
    function lc() {
      var t = Kl.current;
      return t !== null ? t : Tt.pooledCache;
    }
    function hu(t, e) {
      e === null ? R(Kl, Kl.current) : R(Kl, e.pool);
    }
    function er() {
      var t = lc();
      return t === null ? null : {
        parent: Yt._currentValue,
        pool: t
      };
    }
    var ja = Error(r(460)), ac = Error(r(474)), yu = Error(r(542)), gu = {
      then: function() {
      }
    };
    function lr(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function ar(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ke, Ke), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ur(t), t;
        default:
          if (typeof e.status == "string") e.then(Ke, Ke);
          else {
            if (t = Tt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
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
              throw t = e.reason, ur(t), t;
          }
          throw Wl = e, ja;
      }
    }
    function Jl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Wl = l, ja) : l;
      }
    }
    var Wl = null;
    function nr() {
      if (Wl === null) throw Error(r(459));
      var t = Wl;
      return Wl = null, t;
    }
    function ur(t) {
      if (t === ja || t === yu) throw Error(r(483));
    }
    var Aa = null, rn = 0;
    function bu(t) {
      var e = rn;
      return rn += 1, Aa === null && (Aa = []), ar(Aa, t, e);
    }
    function on(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function pu(t, e) {
      throw e.$$typeof === L ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function ir(t) {
      function e(v, y) {
        if (t) {
          var S = v.deletions;
          S === null ? (v.deletions = [
            y
          ], v.flags |= 16) : S.push(y);
        }
      }
      function l(v, y) {
        if (!t) return null;
        for (; y !== null; ) e(v, y), y = y.sibling;
        return null;
      }
      function a(v) {
        for (var y = /* @__PURE__ */ new Map(); v !== null; ) v.key !== null ? y.set(v.key, v) : y.set(v.index, v), v = v.sibling;
        return y;
      }
      function n(v, y) {
        return v = We(v, y), v.index = 0, v.sibling = null, v;
      }
      function u(v, y, S) {
        return v.index = S, t ? (S = v.alternate, S !== null ? (S = S.index, S < y ? (v.flags |= 67108866, y) : S) : (v.flags |= 67108866, y)) : (v.flags |= 1048576, y);
      }
      function i(v) {
        return t && v.alternate === null && (v.flags |= 67108866), v;
      }
      function o(v, y, S, U) {
        return y === null || y.tag !== 6 ? (y = Vi(S, v.mode, U), y.return = v, y) : (y = n(y, S), y.return = v, y);
      }
      function m(v, y, S, U) {
        var Q = S.type;
        return Q === bt ? w(v, y, S.props.children, U, S.key) : y !== null && (y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === qt && Jl(Q) === y.type) ? (y = n(y, S.props), on(y, S), y.return = v, y) : (y = ru(S.type, S.key, S.props, null, v.mode, U), on(y, S), y.return = v, y);
      }
      function N(v, y, S, U) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== S.containerInfo || y.stateNode.implementation !== S.implementation ? (y = ki(S, v.mode, U), y.return = v, y) : (y = n(y, S.children || []), y.return = v, y);
      }
      function w(v, y, S, U, Q) {
        return y === null || y.tag !== 7 ? (y = Ql(S, v.mode, U, Q), y.return = v, y) : (y = n(y, S), y.return = v, y);
      }
      function D(v, y, S) {
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Vi("" + y, v.mode, S), y.return = v, y;
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case P:
              return S = ru(y.type, y.key, y.props, null, v.mode, S), on(S, y), S.return = v, S;
            case gt:
              return y = ki(y, v.mode, S), y.return = v, y;
            case qt:
              return y = Jl(y), D(v, y, S);
          }
          if (Wt(y) || _t(y)) return y = Ql(y, v.mode, S, null), y.return = v, y;
          if (typeof y.then == "function") return D(v, bu(y), S);
          if (y.$$typeof === G) return D(v, mu(v, y), S);
          pu(v, y);
        }
        return null;
      }
      function j(v, y, S, U) {
        var Q = y !== null ? y.key : null;
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return Q !== null ? null : o(v, y, "" + S, U);
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case P:
              return S.key === Q ? m(v, y, S, U) : null;
            case gt:
              return S.key === Q ? N(v, y, S, U) : null;
            case qt:
              return S = Jl(S), j(v, y, S, U);
          }
          if (Wt(S) || _t(S)) return Q !== null ? null : w(v, y, S, U, null);
          if (typeof S.then == "function") return j(v, y, bu(S), U);
          if (S.$$typeof === G) return j(v, y, mu(v, S), U);
          pu(v, S);
        }
        return null;
      }
      function z(v, y, S, U, Q) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return v = v.get(S) || null, o(y, v, "" + U, Q);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case P:
              return v = v.get(U.key === null ? S : U.key) || null, m(y, v, U, Q);
            case gt:
              return v = v.get(U.key === null ? S : U.key) || null, N(y, v, U, Q);
            case qt:
              return U = Jl(U), z(v, y, S, U, Q);
          }
          if (Wt(U) || _t(U)) return v = v.get(S) || null, w(y, v, U, Q, null);
          if (typeof U.then == "function") return z(v, y, S, bu(U), Q);
          if (U.$$typeof === G) return z(v, y, S, mu(y, U), Q);
          pu(y, U);
        }
        return null;
      }
      function Y(v, y, S, U) {
        for (var Q = null, mt = null, X = y, et = y = 0, ct = null; X !== null && et < S.length; et++) {
          X.index > et ? (ct = X, X = null) : ct = X.sibling;
          var ht = j(v, X, S[et], U);
          if (ht === null) {
            X === null && (X = ct);
            break;
          }
          t && X && ht.alternate === null && e(v, X), y = u(ht, y, et), mt === null ? Q = ht : mt.sibling = ht, mt = ht, X = ct;
        }
        if (et === S.length) return l(v, X), st && $e(v, et), Q;
        if (X === null) {
          for (; et < S.length; et++) X = D(v, S[et], U), X !== null && (y = u(X, y, et), mt === null ? Q = X : mt.sibling = X, mt = X);
          return st && $e(v, et), Q;
        }
        for (X = a(X); et < S.length; et++) ct = z(X, v, et, S[et], U), ct !== null && (t && ct.alternate !== null && X.delete(ct.key === null ? et : ct.key), y = u(ct, y, et), mt === null ? Q = ct : mt.sibling = ct, mt = ct);
        return t && X.forEach(function(Cl) {
          return e(v, Cl);
        }), st && $e(v, et), Q;
      }
      function k(v, y, S, U) {
        if (S == null) throw Error(r(151));
        for (var Q = null, mt = null, X = y, et = y = 0, ct = null, ht = S.next(); X !== null && !ht.done; et++, ht = S.next()) {
          X.index > et ? (ct = X, X = null) : ct = X.sibling;
          var Cl = j(v, X, ht.value, U);
          if (Cl === null) {
            X === null && (X = ct);
            break;
          }
          t && X && Cl.alternate === null && e(v, X), y = u(Cl, y, et), mt === null ? Q = Cl : mt.sibling = Cl, mt = Cl, X = ct;
        }
        if (ht.done) return l(v, X), st && $e(v, et), Q;
        if (X === null) {
          for (; !ht.done; et++, ht = S.next()) ht = D(v, ht.value, U), ht !== null && (y = u(ht, y, et), mt === null ? Q = ht : mt.sibling = ht, mt = ht);
          return st && $e(v, et), Q;
        }
        for (X = a(X); !ht.done; et++, ht = S.next()) ht = z(X, v, et, ht.value, U), ht !== null && (t && ht.alternate !== null && X.delete(ht.key === null ? et : ht.key), y = u(ht, y, et), mt === null ? Q = ht : mt.sibling = ht, mt = ht);
        return t && X.forEach(function(sy) {
          return e(v, sy);
        }), st && $e(v, et), Q;
      }
      function At(v, y, S, U) {
        if (typeof S == "object" && S !== null && S.type === bt && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case P:
              t: {
                for (var Q = S.key; y !== null; ) {
                  if (y.key === Q) {
                    if (Q = S.type, Q === bt) {
                      if (y.tag === 7) {
                        l(v, y.sibling), U = n(y, S.props.children), U.return = v, v = U;
                        break t;
                      }
                    } else if (y.elementType === Q || typeof Q == "object" && Q !== null && Q.$$typeof === qt && Jl(Q) === y.type) {
                      l(v, y.sibling), U = n(y, S.props), on(U, S), U.return = v, v = U;
                      break t;
                    }
                    l(v, y);
                    break;
                  } else e(v, y);
                  y = y.sibling;
                }
                S.type === bt ? (U = Ql(S.props.children, v.mode, U, S.key), U.return = v, v = U) : (U = ru(S.type, S.key, S.props, null, v.mode, U), on(U, S), U.return = v, v = U);
              }
              return i(v);
            case gt:
              t: {
                for (Q = S.key; y !== null; ) {
                  if (y.key === Q) if (y.tag === 4 && y.stateNode.containerInfo === S.containerInfo && y.stateNode.implementation === S.implementation) {
                    l(v, y.sibling), U = n(y, S.children || []), U.return = v, v = U;
                    break t;
                  } else {
                    l(v, y);
                    break;
                  }
                  else e(v, y);
                  y = y.sibling;
                }
                U = ki(S, v.mode, U), U.return = v, v = U;
              }
              return i(v);
            case qt:
              return S = Jl(S), At(v, y, S, U);
          }
          if (Wt(S)) return Y(v, y, S, U);
          if (_t(S)) {
            if (Q = _t(S), typeof Q != "function") throw Error(r(150));
            return S = Q.call(S), k(v, y, S, U);
          }
          if (typeof S.then == "function") return At(v, y, bu(S), U);
          if (S.$$typeof === G) return At(v, y, mu(v, S), U);
          pu(v, S);
        }
        return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, y !== null && y.tag === 6 ? (l(v, y.sibling), U = n(y, S), U.return = v, v = U) : (l(v, y), U = Vi(S, v.mode, U), U.return = v, v = U), i(v)) : l(v, y);
      }
      return function(v, y, S, U) {
        try {
          rn = 0;
          var Q = At(v, y, S, U);
          return Aa = null, Q;
        } catch (X) {
          if (X === ja || X === yu) throw X;
          var mt = be(29, X, null, v.mode);
          return mt.lanes = U, mt.return = v, mt;
        }
      };
    }
    var $l = ir(true), cr = ir(false), bl = false;
    function nc(t) {
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
    function uc(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function pl(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function _l(t, e, l) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (yt & 2) !== 0) {
        var n = a.pending;
        return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = fu(t), Zf(t, null, l), e;
      }
      return su(t, a, e, l), fu(t);
    }
    function dn(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Fs(t, l);
      }
    }
    function ic(t, e) {
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
    var cc = false;
    function mn() {
      if (cc) {
        var t = Na;
        if (t !== null) throw t;
      }
    }
    function hn(t, e, l, a) {
      cc = false;
      var n = t.updateQueue;
      bl = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, o = n.shared.pending;
      if (o !== null) {
        n.shared.pending = null;
        var m = o, N = m.next;
        m.next = null, i === null ? u = N : i.next = N, i = m;
        var w = t.alternate;
        w !== null && (w = w.updateQueue, o = w.lastBaseUpdate, o !== i && (o === null ? w.firstBaseUpdate = N : o.next = N, w.lastBaseUpdate = m));
      }
      if (u !== null) {
        var D = n.baseState;
        i = 0, w = N = m = null, o = u;
        do {
          var j = o.lane & -536870913, z = j !== o.lane;
          if (z ? (it & j) === j : (a & j) === j) {
            j !== 0 && j === Sa && (cc = true), w !== null && (w = w.next = {
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            });
            t: {
              var Y = t, k = o;
              j = e;
              var At = l;
              switch (k.tag) {
                case 1:
                  if (Y = k.payload, typeof Y == "function") {
                    D = Y.call(At, D, j);
                    break t;
                  }
                  D = Y;
                  break t;
                case 3:
                  Y.flags = Y.flags & -65537 | 128;
                case 0:
                  if (Y = k.payload, j = typeof Y == "function" ? Y.call(At, D, j) : Y, j == null) break t;
                  D = C({}, D, j);
                  break t;
                case 2:
                  bl = true;
              }
            }
            j = o.callback, j !== null && (t.flags |= 64, z && (t.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [
              j
            ] : z.push(j));
          } else z = {
            lane: j,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, w === null ? (N = w = z, m = D) : w = w.next = z, i |= j;
          if (o = o.next, o === null) {
            if (o = n.shared.pending, o === null) break;
            z = o, o = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
          }
        } while (true);
        w === null && (m = D), n.baseState = m, n.firstBaseUpdate = N, n.lastBaseUpdate = w, u === null && (n.shared.lanes = 0), jl |= i, t.lanes = i, t.memoizedState = D;
      }
    }
    function sr(t, e) {
      if (typeof t != "function") throw Error(r(191, t));
      t.call(e);
    }
    function fr(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) sr(l[t], e);
    }
    var za = h(null), _u = h(0);
    function rr(t, e) {
      t = cl, R(_u, t), R(za, e), cl = t | e.baseLanes;
    }
    function sc() {
      R(_u, cl), R(za, za.current);
    }
    function fc() {
      cl = _u.current, T(za), T(_u);
    }
    var pe = h(null), Ue = null;
    function vl(t) {
      var e = t.alternate;
      R(Ht, Ht.current & 1), R(pe, t), Ue === null && (e === null || za.current !== null || e.memoizedState !== null) && (Ue = t);
    }
    function rc(t) {
      R(Ht, Ht.current), R(pe, t), Ue === null && (Ue = t);
    }
    function or(t) {
      t.tag === 22 ? (R(Ht, Ht.current), R(pe, t), Ue === null && (Ue = t)) : xl();
    }
    function xl() {
      R(Ht, Ht.current), R(pe, pe.current);
    }
    function _e(t) {
      T(pe), Ue === t && (Ue = null), T(Ht);
    }
    var Ht = h(0);
    function vu(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || gs(l) || bs(l))) return e;
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
    var Pe = 0, tt = null, Nt = null, Lt = null, xu = false, Ta = false, Fl = false, Su = 0, yn = 0, Ea = null, Ih = 0;
    function Ct() {
      throw Error(r(321));
    }
    function oc(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!ge(t[l], e[l])) return false;
      return true;
    }
    function dc(t, e, l, a, n, u) {
      return Pe = u, tt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? Jr : Tc, Fl = false, u = l(a, n), Fl = false, Ta && (u = mr(e, l, a, n)), dr(t), u;
    }
    function dr(t) {
      O.H = pn;
      var e = Nt !== null && Nt.next !== null;
      if (Pe = 0, Lt = Nt = tt = null, xu = false, yn = 0, Ea = null, e) throw Error(r(300));
      t === null || Gt || (t = t.dependencies, t !== null && du(t) && (Gt = true));
    }
    function mr(t, e, l, a) {
      tt = t;
      var n = 0;
      do {
        if (Ta && (Ea = null), yn = 0, Ta = false, 25 <= n) throw Error(r(301));
        if (n += 1, Lt = Nt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        O.H = Wr, u = e(l, a);
      } while (Ta);
      return u;
    }
    function Ph() {
      var t = O.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? gn(e) : e, t = t.useState()[0], (Nt !== null ? Nt.memoizedState : null) !== t && (tt.flags |= 1024), e;
    }
    function mc() {
      var t = Su !== 0;
      return Su = 0, t;
    }
    function hc(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function yc(t) {
      if (xu) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        xu = false;
      }
      Pe = 0, Lt = Nt = tt = null, Ta = false, yn = Su = 0, Ea = null;
    }
    function ae() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Lt === null ? tt.memoizedState = Lt = t : Lt = Lt.next = t, Lt;
    }
    function Bt() {
      if (Nt === null) {
        var t = tt.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = Nt.next;
      var e = Lt === null ? tt.memoizedState : Lt.next;
      if (e !== null) Lt = e, Nt = t;
      else {
        if (t === null) throw tt.alternate === null ? Error(r(467)) : Error(r(310));
        Nt = t, t = {
          memoizedState: Nt.memoizedState,
          baseState: Nt.baseState,
          baseQueue: Nt.baseQueue,
          queue: Nt.queue,
          next: null
        }, Lt === null ? tt.memoizedState = Lt = t : Lt = Lt.next = t;
      }
      return Lt;
    }
    function Nu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function gn(t) {
      var e = yn;
      return yn += 1, Ea === null && (Ea = []), t = ar(Ea, t, e), e = tt, (Lt === null ? e.memoizedState : Lt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? Jr : Tc), t;
    }
    function ju(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return gn(t);
        if (t.$$typeof === G) return It(t);
      }
      throw Error(r(438, String(t)));
    }
    function gc(t) {
      var e = null, l = tt.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var a = tt.alternate;
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
      }), l === null && (l = Nu(), tt.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = V;
      return e.index++, l;
    }
    function tl(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Au(t) {
      var e = Bt();
      return bc(e, Nt, t);
    }
    function bc(t, e, l) {
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
        var o = i = null, m = null, N = e, w = false;
        do {
          var D = N.lane & -536870913;
          if (D !== N.lane ? (it & D) === D : (Pe & D) === D) {
            var j = N.revertLane;
            if (j === 0) m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), D === Sa && (w = true);
            else if ((Pe & j) === j) {
              N = N.next, j === Sa && (w = true);
              continue;
            } else D = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, m === null ? (o = m = D, i = u) : m = m.next = D, tt.lanes |= j, jl |= j;
            D = N.action, Fl && l(u, D), u = N.hasEagerState ? N.eagerState : l(u, D);
          } else j = {
            lane: D,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, m === null ? (o = m = j, i = u) : m = m.next = j, tt.lanes |= D, jl |= D;
          N = N.next;
        } while (N !== null && N !== e);
        if (m === null ? i = u : m.next = o, !ge(u, t.memoizedState) && (Gt = true, w && (l = Na, l !== null))) throw l;
        t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function pc(t) {
      var e = Bt(), l = e.queue;
      if (l === null) throw Error(r(311));
      l.lastRenderedReducer = t;
      var a = l.dispatch, n = l.pending, u = e.memoizedState;
      if (n !== null) {
        l.pending = null;
        var i = n = n.next;
        do
          u = t(u, i.action), i = i.next;
        while (i !== n);
        ge(u, e.memoizedState) || (Gt = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function hr(t, e, l) {
      var a = tt, n = Bt(), u = st;
      if (u) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else l = e();
      var i = !ge((Nt || n).memoizedState, l);
      if (i && (n.memoizedState = l, Gt = true), n = n.queue, xc(br.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== e || i || Lt !== null && Lt.memoizedState.tag & 1) {
        if (a.flags |= 2048, wa(9, {
          destroy: void 0
        }, gr.bind(null, a, n, l, e), null), Tt === null) throw Error(r(349));
        u || (Pe & 127) !== 0 || yr(a, e, l);
      }
      return l;
    }
    function yr(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = tt.updateQueue, e === null ? (e = Nu(), tt.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function gr(t, e, l, a) {
      e.value = l, e.getSnapshot = a, pr(e) && _r(t);
    }
    function br(t, e, l) {
      return l(function() {
        pr(e) && _r(t);
      });
    }
    function pr(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !ge(t, l);
      } catch {
        return true;
      }
    }
    function _r(t) {
      var e = Xl(t, 2);
      e !== null && de(e, t, 2);
    }
    function _c(t) {
      var e = ae();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), Fl) {
          rl(true);
          try {
            l();
          } finally {
            rl(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: t
      }, e;
    }
    function vr(t, e, l, a) {
      return t.baseState = l, bc(t, Nt, typeof a == "function" ? a : tl);
    }
    function t0(t, e, l, a, n) {
      if (Eu(t)) throw Error(r(485));
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
        O.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, xr(e, u)) : (u.next = l.next, e.pending = l.next = u);
      }
    }
    function xr(t, e) {
      var l = e.action, a = e.payload, n = t.state;
      if (e.isTransition) {
        var u = O.T, i = {};
        O.T = i;
        try {
          var o = l(n, a), m = O.S;
          m !== null && m(i, o), Sr(t, e, o);
        } catch (N) {
          vc(t, e, N);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), O.T = u;
        }
      } else try {
        u = l(n, a), Sr(t, e, u);
      } catch (N) {
        vc(t, e, N);
      }
    }
    function Sr(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        Nr(t, e, a);
      }, function(a) {
        return vc(t, e, a);
      }) : Nr(t, e, l);
    }
    function Nr(t, e, l) {
      e.status = "fulfilled", e.value = l, jr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, xr(t, l)));
    }
    function vc(t, e, l) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = l, jr(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function jr(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Ar(t, e) {
      return e;
    }
    function zr(t, e) {
      if (st) {
        var l = Tt.formState;
        if (l !== null) {
          t: {
            var a = tt;
            if (st) {
              if (Mt) {
                e: {
                  for (var n = Mt, u = Oe; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break e;
                    }
                    if (n = De(n.nextSibling), n === null) {
                      n = null;
                      break e;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  Mt = De(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              yl(a);
            }
            a = false;
          }
          a && (e = l[0]);
        }
      }
      return l = ae(), l.memoizedState = l.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e
      }, l.queue = a, l = Vr.bind(null, tt, a), a.dispatch = l, a = _c(false), u = zc.bind(null, tt, false, a.queue), a = ae(), n = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = n, l = t0.bind(null, tt, n, u, l), n.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function Tr(t) {
      var e = Bt();
      return Er(e, Nt, t);
    }
    function Er(t, e, l) {
      if (e = bc(t, e, Ar)[0], t = Au(tl)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = gn(e);
      } catch (i) {
        throw i === ja ? yu : i;
      }
      else a = e;
      e = Bt();
      var n = e.queue, u = n.dispatch;
      return l !== e.memoizedState && (tt.flags |= 2048, wa(9, {
        destroy: void 0
      }, e0.bind(null, n, l), null)), [
        a,
        u,
        t
      ];
    }
    function e0(t, e) {
      t.action = e;
    }
    function wr(t) {
      var e = Bt(), l = Nt;
      if (l !== null) return Er(e, l, t);
      Bt(), e = e.memoizedState, l = Bt();
      var a = l.queue.dispatch;
      return l.memoizedState = t, [
        e,
        a,
        false
      ];
    }
    function wa(t, e, l, a) {
      return t = {
        tag: t,
        create: l,
        deps: a,
        inst: e,
        next: null
      }, e = tt.updateQueue, e === null && (e = Nu(), tt.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function Mr() {
      return Bt().memoizedState;
    }
    function zu(t, e, l, a) {
      var n = ae();
      tt.flags |= t, n.memoizedState = wa(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function Tu(t, e, l, a) {
      var n = Bt();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      Nt !== null && a !== null && oc(a, Nt.memoizedState.deps) ? n.memoizedState = wa(e, u, l, a) : (tt.flags |= t, n.memoizedState = wa(1 | e, u, l, a));
    }
    function Or(t, e) {
      zu(8390656, 8, t, e);
    }
    function xc(t, e) {
      Tu(2048, 8, t, e);
    }
    function l0(t) {
      tt.flags |= 4;
      var e = tt.updateQueue;
      if (e === null) e = Nu(), tt.updateQueue = e, e.events = [
        t
      ];
      else {
        var l = e.events;
        l === null ? e.events = [
          t
        ] : l.push(t);
      }
    }
    function Ur(t) {
      var e = Bt().memoizedState;
      return l0({
        ref: e,
        nextImpl: t
      }), function() {
        if ((yt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function Dr(t, e) {
      return Tu(4, 2, t, e);
    }
    function Cr(t, e) {
      return Tu(4, 4, t, e);
    }
    function Rr(t, e) {
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
    function Hr(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, Tu(4, 4, Rr.bind(null, e, t), l);
    }
    function Sc() {
    }
    function Br(t, e) {
      var l = Bt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      return e !== null && oc(e, a[1]) ? a[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function qr(t, e) {
      var l = Bt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      if (e !== null && oc(e, a[1])) return a[0];
      if (a = t(), Fl) {
        rl(true);
        try {
          t();
        } finally {
          rl(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    }
    function Nc(t, e, l) {
      return l === void 0 || (Pe & 1073741824) !== 0 && (it & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = Lo(), tt.lanes |= t, jl |= t, l);
    }
    function Yr(t, e, l, a) {
      return ge(l, e) ? l : za.current !== null ? (t = Nc(t, l, a), ge(t, e) || (Gt = true), t) : (Pe & 42) === 0 || (Pe & 1073741824) !== 0 && (it & 261930) === 0 ? (Gt = true, t.memoizedState = l) : (t = Lo(), tt.lanes |= t, jl |= t, e);
    }
    function Lr(t, e, l, a, n) {
      var u = B.p;
      B.p = u !== 0 && 8 > u ? u : 8;
      var i = O.T, o = {};
      O.T = o, zc(t, false, e, l);
      try {
        var m = n(), N = O.S;
        if (N !== null && N(o, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var w = Fh(m, a);
          bn(t, e, w, Se(t));
        } else bn(t, e, a, Se(t));
      } catch (D) {
        bn(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: D
        }, Se());
      } finally {
        B.p = u, i !== null && o.types !== null && (i.types = o.types), O.T = i;
      }
    }
    function a0() {
    }
    function jc(t, e, l, a) {
      if (t.tag !== 5) throw Error(r(476));
      var n = Gr(t).queue;
      Lr(t, n, e, K, l === null ? a0 : function() {
        return Xr(t), l(a);
      });
    }
    function Gr(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: K,
        baseState: K,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tl,
          lastRenderedState: K
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
          lastRenderedReducer: tl,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Xr(t) {
      var e = Gr(t);
      e.next === null && (e = t.alternate.memoizedState), bn(t, e.next.queue, {}, Se());
    }
    function Ac() {
      return It(Cn);
    }
    function Qr() {
      return Bt().memoizedState;
    }
    function Zr() {
      return Bt().memoizedState;
    }
    function n0(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = Se();
            t = pl(l);
            var a = _l(e, t, l);
            a !== null && (de(a, e, l), dn(a, e, l)), e = {
              cache: tc()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function u0(t, e, l) {
      var a = Se();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Eu(t) ? kr(e, l) : (l = Qi(t, e, l, a), l !== null && (de(l, t, a), Kr(l, e, a)));
    }
    function Vr(t, e, l) {
      var a = Se();
      bn(t, e, l, a);
    }
    function bn(t, e, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Eu(t)) kr(e, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
          var i = e.lastRenderedState, o = u(i, l);
          if (n.hasEagerState = true, n.eagerState = o, ge(o, i)) return su(t, e, n, 0), Tt === null && cu(), false;
        } catch {
        }
        if (l = Qi(t, e, n, a), l !== null) return de(l, t, a), Kr(l, e, a), true;
      }
      return false;
    }
    function zc(t, e, l, a) {
      if (a = {
        lane: 2,
        revertLane: ns(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Eu(t)) {
        if (e) throw Error(r(479));
      } else e = Qi(t, l, a, 2), e !== null && de(e, t, 2);
    }
    function Eu(t) {
      var e = t.alternate;
      return t === tt || e !== null && e === tt;
    }
    function kr(t, e) {
      Ta = xu = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function Kr(t, e, l) {
      if ((l & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Fs(t, l);
      }
    }
    var pn = {
      readContext: It,
      use: ju,
      useCallback: Ct,
      useContext: Ct,
      useEffect: Ct,
      useImperativeHandle: Ct,
      useLayoutEffect: Ct,
      useInsertionEffect: Ct,
      useMemo: Ct,
      useReducer: Ct,
      useRef: Ct,
      useState: Ct,
      useDebugValue: Ct,
      useDeferredValue: Ct,
      useTransition: Ct,
      useSyncExternalStore: Ct,
      useId: Ct,
      useHostTransitionStatus: Ct,
      useFormState: Ct,
      useActionState: Ct,
      useOptimistic: Ct,
      useMemoCache: Ct,
      useCacheRefresh: Ct
    };
    pn.useEffectEvent = Ct;
    var Jr = {
      readContext: It,
      use: ju,
      useCallback: function(t, e) {
        return ae().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: It,
      useEffect: Or,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([
          t
        ]) : null, zu(4194308, 4, Rr.bind(null, e, t), l);
      },
      useLayoutEffect: function(t, e) {
        return zu(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        zu(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var l = ae();
        e = e === void 0 ? null : e;
        var a = t();
        if (Fl) {
          rl(true);
          try {
            t();
          } finally {
            rl(false);
          }
        }
        return l.memoizedState = [
          a,
          e
        ], a;
      },
      useReducer: function(t, e, l) {
        var a = ae();
        if (l !== void 0) {
          var n = l(e);
          if (Fl) {
            rl(true);
            try {
              l(e);
            } finally {
              rl(false);
            }
          }
        } else n = e;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = u0.bind(null, tt, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = ae();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = _c(t);
        var e = t.queue, l = Vr.bind(null, tt, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: Sc,
      useDeferredValue: function(t, e) {
        var l = ae();
        return Nc(l, t, e);
      },
      useTransition: function() {
        var t = _c(false);
        return t = Lr.bind(null, tt, t.queue, true, false), ae().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var a = tt, n = ae();
        if (st) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (l = e(), Tt === null) throw Error(r(349));
          (it & 127) !== 0 || yr(a, e, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, Or(br.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, wa(9, {
          destroy: void 0
        }, gr.bind(null, a, u, l, e), null), l;
      },
      useId: function() {
        var t = ae(), e = Tt.identifierPrefix;
        if (st) {
          var l = Ge, a = Le;
          l = (a & ~(1 << 32 - ye(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Su++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = Ih++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: Ac,
      useFormState: zr,
      useActionState: zr,
      useOptimistic: function(t) {
        var e = ae();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = zc.bind(null, tt, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: gc,
      useCacheRefresh: function() {
        return ae().memoizedState = n0.bind(null, tt);
      },
      useEffectEvent: function(t) {
        var e = ae(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((yt & 2) !== 0) throw Error(r(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, Tc = {
      readContext: It,
      use: ju,
      useCallback: Br,
      useContext: It,
      useEffect: xc,
      useImperativeHandle: Hr,
      useInsertionEffect: Dr,
      useLayoutEffect: Cr,
      useMemo: qr,
      useReducer: Au,
      useRef: Mr,
      useState: function() {
        return Au(tl);
      },
      useDebugValue: Sc,
      useDeferredValue: function(t, e) {
        var l = Bt();
        return Yr(l, Nt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Au(tl)[0], e = Bt().memoizedState;
        return [
          typeof t == "boolean" ? t : gn(t),
          e
        ];
      },
      useSyncExternalStore: hr,
      useId: Qr,
      useHostTransitionStatus: Ac,
      useFormState: Tr,
      useActionState: Tr,
      useOptimistic: function(t, e) {
        var l = Bt();
        return vr(l, Nt, t, e);
      },
      useMemoCache: gc,
      useCacheRefresh: Zr
    };
    Tc.useEffectEvent = Ur;
    var Wr = {
      readContext: It,
      use: ju,
      useCallback: Br,
      useContext: It,
      useEffect: xc,
      useImperativeHandle: Hr,
      useInsertionEffect: Dr,
      useLayoutEffect: Cr,
      useMemo: qr,
      useReducer: pc,
      useRef: Mr,
      useState: function() {
        return pc(tl);
      },
      useDebugValue: Sc,
      useDeferredValue: function(t, e) {
        var l = Bt();
        return Nt === null ? Nc(l, t, e) : Yr(l, Nt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = pc(tl)[0], e = Bt().memoizedState;
        return [
          typeof t == "boolean" ? t : gn(t),
          e
        ];
      },
      useSyncExternalStore: hr,
      useId: Qr,
      useHostTransitionStatus: Ac,
      useFormState: wr,
      useActionState: wr,
      useOptimistic: function(t, e) {
        var l = Bt();
        return Nt !== null ? vr(l, Nt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: gc,
      useCacheRefresh: Zr
    };
    Wr.useEffectEvent = Ur;
    function Ec(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : C({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var wc = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = Se(), n = pl(a);
        n.payload = e, l != null && (n.callback = l), e = _l(t, n, a), e !== null && (de(e, t, a), dn(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = Se(), n = pl(a);
        n.tag = 1, n.payload = e, l != null && (n.callback = l), e = _l(t, n, a), e !== null && (de(e, t, a), dn(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = Se(), a = pl(l);
        a.tag = 2, e != null && (a.callback = e), e = _l(t, a, l), e !== null && (de(e, t, l), dn(e, t, l));
      }
    };
    function $r(t, e, l, a, n, u, i) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !an(l, a) || !an(n, u) : true;
    }
    function Fr(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && wc.enqueueReplaceState(e, e.state, null);
    }
    function Il(t, e) {
      var l = e;
      if ("ref" in e) {
        l = {};
        for (var a in e) a !== "ref" && (l[a] = e[a]);
      }
      if (t = t.defaultProps) {
        l === e && (l = C({}, l));
        for (var n in t) l[n] === void 0 && (l[n] = t[n]);
      }
      return l;
    }
    function Ir(t) {
      iu(t);
    }
    function Pr(t) {
      console.error(t);
    }
    function to(t) {
      iu(t);
    }
    function wu(t, e) {
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
    function eo(t, e, l) {
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
    function Mc(t, e, l) {
      return l = pl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        wu(t, e);
      }, l;
    }
    function lo(t) {
      return t = pl(t), t.tag = 3, t;
    }
    function ao(t, e, l, a) {
      var n = l.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        t.payload = function() {
          return n(u);
        }, t.callback = function() {
          eo(e, l, a);
        };
      }
      var i = l.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        eo(e, l, a), typeof n != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([
          this
        ]) : Al.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : ""
        });
      });
    }
    function i0(t, e, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && xa(e, l, n, true), l = pe.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Ue === null ? Gu() : l.alternate === null && Rt === 0 && (Rt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === gu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), es(t, a, n)), false;
            case 22:
              return l.flags |= 65536, a === gu ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), es(t, a, n)), false;
          }
          throw Error(r(435, l.tag));
        }
        return es(t, a, n), Gu(), false;
      }
      if (st) return e = pe.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Wi && (t = Error(r(422), {
        cause: a
      }), cn(Ee(t, l)))) : (a !== Wi && (e = Error(r(423), {
        cause: a
      }), cn(Ee(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ee(a, l), n = Mc(t.stateNode, a, n), ic(t, n), Rt !== 4 && (Rt = 2)), false;
      var u = Error(r(520), {
        cause: a
      });
      if (u = Ee(u, l), zn === null ? zn = [
        u
      ] : zn.push(u), Rt !== 4 && (Rt = 2), e === null) return true;
      a = Ee(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Mc(l.stateNode, a, t), ic(l, t), false;
          case 1:
            if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Al === null || !Al.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = lo(n), ao(n, t, l, a), ic(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Oc = Error(r(461)), Gt = false;
    function Pt(t, e, l, a) {
      e.child = t === null ? cr(e, null, l, a) : $l(e, t.child, l, a);
    }
    function no(t, e, l, a, n) {
      l = l.render;
      var u = e.ref;
      if ("ref" in a) {
        var i = {};
        for (var o in a) o !== "ref" && (i[o] = a[o]);
      } else i = a;
      return kl(e), a = dc(t, e, l, i, u, n), o = mc(), t !== null && !Gt ? (hc(t, e, n), el(t, e, n)) : (st && o && Ki(e), e.flags |= 1, Pt(t, e, a, n), e.child);
    }
    function uo(t, e, l, a, n) {
      if (t === null) {
        var u = l.type;
        return typeof u == "function" && !Zi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, io(t, e, u, a, n)) : (t = ru(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !Yc(t, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : an, l(i, a) && t.ref === e.ref) return el(t, e, n);
      }
      return e.flags |= 1, t = We(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function io(t, e, l, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (an(u, a) && t.ref === e.ref) if (Gt = false, e.pendingProps = a = u, Yc(t, n)) (t.flags & 131072) !== 0 && (Gt = true);
        else return e.lanes = t.lanes, el(t, e, n);
      }
      return Uc(t, e, l, a, n);
    }
    function co(t, e, l, a) {
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
          return so(t, e, u, l, a);
        }
        if ((l & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && hu(e, u !== null ? u.cachePool : null), u !== null ? rr(e, u) : sc(), or(e);
        else return a = e.lanes = 536870912, so(t, e, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (hu(e, u.cachePool), rr(e, u), xl(), e.memoizedState = null) : (t !== null && hu(e, null), sc(), xl());
      return Pt(t, e, n, l), e.child;
    }
    function _n(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function so(t, e, l, a, n) {
      var u = lc();
      return u = u === null ? null : {
        parent: Yt._currentValue,
        pool: u
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, t !== null && hu(e, null), sc(), or(e), t !== null && xa(t, e, a, true), e.childLanes = n, null;
    }
    function Mu(t, e) {
      return e = Uu({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function fo(t, e, l) {
      return $l(e, t.child, null, l), t = Mu(e, e.pendingProps), t.flags |= 2, _e(e), e.memoizedState = null, t;
    }
    function c0(t, e, l) {
      var a = e.pendingProps, n = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (st) {
          if (a.mode === "hidden") return t = Mu(e, a), e.lanes = 536870912, _n(null, t);
          if (rc(e), (t = Mt) ? (t = Sd(t, Oe), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: ml !== null ? {
              id: Le,
              overflow: Ge
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = kf(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw yl(e);
          return e.lanes = 536870912, null;
        }
        return Mu(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (rc(e), n) if (e.flags & 256) e.flags &= -257, e = fo(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
        else if (Gt || xa(t, e, l, false), n = (l & t.childLanes) !== 0, Gt || n) {
          if (a = Tt, a !== null && (i = Is(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Xl(t, i), de(a, t, i), Oc;
          Gu(), e = fo(t, e, l);
        } else t = u.treeContext, Mt = De(i.nextSibling), Ft = e, st = true, hl = null, Oe = false, t !== null && Wf(e, t), e = Mu(e, a), e.flags |= 4096;
        return e;
      }
      return t = We(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Ou(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(r(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Uc(t, e, l, a, n) {
      return kl(e), l = dc(t, e, l, a, void 0, n), a = mc(), t !== null && !Gt ? (hc(t, e, n), el(t, e, n)) : (st && a && Ki(e), e.flags |= 1, Pt(t, e, l, n), e.child);
    }
    function ro(t, e, l, a, n, u) {
      return kl(e), e.updateQueue = null, l = mr(e, a, l, n), dr(t), a = mc(), t !== null && !Gt ? (hc(t, e, u), el(t, e, u)) : (st && a && Ki(e), e.flags |= 1, Pt(t, e, l, u), e.child);
    }
    function oo(t, e, l, a, n) {
      if (kl(e), e.stateNode === null) {
        var u = ba, i = l.contextType;
        typeof i == "object" && i !== null && (u = It(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, nc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? It(i) : ba, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Ec(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && wc.enqueueReplaceState(u, u.state, null), hn(e, a, u, n), mn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var o = e.memoizedProps, m = Il(l, o);
        u.props = m;
        var N = u.context, w = l.contextType;
        i = ba, typeof w == "object" && w !== null && (i = It(w));
        var D = l.getDerivedStateFromProps;
        w = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, w || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || N !== i) && Fr(e, u, a, i), bl = false;
        var j = e.memoizedState;
        u.state = j, hn(e, a, u, n), mn(), N = e.memoizedState, o || j !== N || bl ? (typeof D == "function" && (Ec(e, l, D, a), N = e.memoizedState), (m = bl || $r(e, l, m, a, j, N, i)) ? (w || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, uc(t, e), i = e.memoizedProps, w = Il(l, i), u.props = w, D = e.pendingProps, j = u.context, N = l.contextType, m = ba, typeof N == "object" && N !== null && (m = It(N)), o = l.getDerivedStateFromProps, (N = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== D || j !== m) && Fr(e, u, a, m), bl = false, j = e.memoizedState, u.state = j, hn(e, a, u, n), mn();
        var z = e.memoizedState;
        i !== D || j !== z || bl || t !== null && t.dependencies !== null && du(t.dependencies) ? (typeof o == "function" && (Ec(e, l, o, a), z = e.memoizedState), (w = bl || $r(e, l, w, a, j, z, m) || t !== null && t.dependencies !== null && du(t.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, m)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = m, a = w) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Ou(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = $l(e, t.child, null, n), e.child = $l(e, null, l, n)) : Pt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = el(t, e, n), t;
    }
    function mo(t, e, l, a) {
      return Zl(), e.flags |= 256, Pt(t, e, l, a), e.child;
    }
    var Dc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Cc(t) {
      return {
        baseLanes: t,
        cachePool: er()
      };
    }
    function Rc(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= xe), t;
    }
    function ho(t, e, l) {
      var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
      if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (Ht.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (st) {
          if (n ? vl(e) : xl(), (t = Mt) ? (t = Sd(t, Oe), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: ml !== null ? {
              id: Le,
              overflow: Ge
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = kf(t), l.return = e, e.child = l, Ft = e, Mt = null)) : t = null, t === null) throw yl(e);
          return bs(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var o = a.children;
        return a = a.fallback, n ? (xl(), n = e.mode, o = Uu({
          mode: "hidden",
          children: o
        }, n), a = Ql(a, n, l, null), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = Cc(l), a.childLanes = Rc(t, i, l), e.memoizedState = Dc, _n(null, a)) : (vl(e), Hc(e, o));
      }
      var m = t.memoizedState;
      if (m !== null && (o = m.dehydrated, o !== null)) {
        if (u) e.flags & 256 ? (vl(e), e.flags &= -257, e = Bc(t, e, l)) : e.memoizedState !== null ? (xl(), e.child = t.child, e.flags |= 128, e = null) : (xl(), o = a.fallback, n = e.mode, a = Uu({
          mode: "visible",
          children: a.children
        }, n), o = Ql(o, n, l, null), o.flags |= 2, a.return = e, o.return = e, a.sibling = o, e.child = a, $l(e, t.child, null, l), a = e.child, a.memoizedState = Cc(l), a.childLanes = Rc(t, i, l), e.memoizedState = Dc, e = _n(null, a));
        else if (vl(e), bs(o)) {
          if (i = o.nextSibling && o.nextSibling.dataset, i) var N = i.dgst;
          i = N, a = Error(r(419)), a.stack = "", a.digest = i, cn({
            value: a,
            source: null,
            stack: null
          }), e = Bc(t, e, l);
        } else if (Gt || xa(t, e, l, false), i = (l & t.childLanes) !== 0, Gt || i) {
          if (i = Tt, i !== null && (a = Is(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Xl(t, a), de(i, t, a), Oc;
          gs(o) || Gu(), e = Bc(t, e, l);
        } else gs(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, Mt = De(o.nextSibling), Ft = e, st = true, hl = null, Oe = false, t !== null && Wf(e, t), e = Hc(e, a.children), e.flags |= 4096);
        return e;
      }
      return n ? (xl(), o = a.fallback, n = e.mode, m = t.child, N = m.sibling, a = We(m, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = m.subtreeFlags & 65011712, N !== null ? o = We(N, o) : (o = Ql(o, n, l, null), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, _n(null, a), a = e.child, o = t.child.memoizedState, o === null ? o = Cc(l) : (n = o.cachePool, n !== null ? (m = Yt._currentValue, n = n.parent !== m ? {
        parent: m,
        pool: m
      } : n) : n = er(), o = {
        baseLanes: o.baseLanes | l,
        cachePool: n
      }), a.memoizedState = o, a.childLanes = Rc(t, i, l), e.memoizedState = Dc, _n(t.child, a)) : (vl(e), l = t.child, t = l.sibling, l = We(l, {
        mode: "visible",
        children: a.children
      }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
        t
      ], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function Hc(t, e) {
      return e = Uu({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function Uu(t, e) {
      return t = be(22, t, null, e), t.lanes = 0, t;
    }
    function Bc(t, e, l) {
      return $l(e, t.child, null, l), t = Hc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function yo(t, e, l) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), Ii(t.return, e, l);
    }
    function qc(t, e, l, a, n, u) {
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
    function go(t, e, l) {
      var a = e.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = Ht.current, o = (i & 2) !== 0;
      if (o ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, R(Ht, i), Pt(t, e, a, l), a = st ? un : 0, !o && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && yo(t, l, e);
        else if (t.tag === 19) yo(t, l, e);
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
          for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && vu(t) === null && (n = l), l = l.sibling;
          l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), qc(e, false, n, l, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, n = e.child, e.child = null; n !== null; ) {
            if (t = n.alternate, t !== null && vu(t) === null) {
              e.child = n;
              break;
            }
            t = n.sibling, n.sibling = l, l = n, n = t;
          }
          qc(e, true, l, null, u, a);
          break;
        case "together":
          qc(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function el(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), jl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (xa(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(r(153));
      if (e.child !== null) {
        for (t = e.child, l = We(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = We(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function Yc(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && du(t)));
    }
    function s0(t, e, l) {
      switch (e.tag) {
        case 3:
          zt(e, e.stateNode.containerInfo), gl(e, Yt, t.memoizedState.cache), Zl();
          break;
        case 27:
        case 5:
          Rl(e);
          break;
        case 4:
          zt(e, e.stateNode.containerInfo);
          break;
        case 10:
          gl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, rc(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (vl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? ho(t, e, l) : (vl(e), t = el(t, e, l), t !== null ? t.sibling : null);
          vl(e);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (xa(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
            if (a) return go(t, e, l);
            e.flags |= 128;
          }
          if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(Ht, Ht.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, co(t, e, l, e.pendingProps);
        case 24:
          gl(e, Yt, t.memoizedState.cache);
      }
      return el(t, e, l);
    }
    function bo(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Gt = true;
      else {
        if (!Yc(t, l) && (e.flags & 128) === 0) return Gt = false, s0(t, e, l);
        Gt = (t.flags & 131072) !== 0;
      }
      else Gt = false, st && (e.flags & 1048576) !== 0 && Jf(e, un, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = Jl(e.elementType), e.type = t, typeof t == "function") Zi(t) ? (a = Il(t, a), e.tag = 1, e = oo(null, e, t, a, l)) : (e.tag = 0, e = Uc(null, e, t, a, l));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === rt) {
                  e.tag = 11, e = no(null, e, t, a, l);
                  break t;
                } else if (n === I) {
                  e.tag = 14, e = uo(null, e, t, a, l);
                  break t;
                }
              }
              throw e = ue(t) || t, Error(r(306, e, ""));
            }
          }
          return e;
        case 0:
          return Uc(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, n = Il(a, e.pendingProps), oo(t, e, a, n, l);
        case 3:
          t: {
            if (zt(e, e.stateNode.containerInfo), t === null) throw Error(r(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            n = u.element, uc(t, e), hn(e, a, null, l);
            var i = e.memoizedState;
            if (a = i.cache, gl(e, Yt, a), a !== u.cache && Pi(e, [
              Yt
            ], l, true), mn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = mo(t, e, a, l);
              break t;
            } else if (a !== n) {
              n = Ee(Error(r(424)), e), cn(n), e = mo(t, e, a, l);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Mt = De(t.firstChild), Ft = e, st = true, hl = null, Oe = true, l = cr(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Zl(), a === n) {
                e = el(t, e, l);
                break t;
              }
              Pt(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Ou(t, e), t === null ? (l = Ed(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : st || (l = e.type, t = e.pendingProps, a = Ju(at.current).createElement(l), a[$t] = e, a[ie] = t, te(a, l, t), Vt(a), e.stateNode = a) : e.memoizedState = Ed(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return Rl(e), t === null && st && (a = e.stateNode = Ad(e.type, e.pendingProps, at.current), Ft = e, Oe = true, n = Mt, wl(e.type) ? (ps = n, Mt = De(a.firstChild)) : Mt = n), Pt(t, e, e.pendingProps.children, l), Ou(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && st && ((n = a = Mt) && (a = q0(a, e.type, e.pendingProps, Oe), a !== null ? (e.stateNode = a, Ft = e, Mt = De(a.firstChild), Oe = false, n = true) : n = false), n || yl(e)), Rl(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, ms(n, u) ? a = null : i !== null && ms(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = dc(t, e, Ph, null, null, l), Cn._currentValue = n), Ou(t, e), Pt(t, e, a, l), e.child;
        case 6:
          return t === null && st && ((t = l = Mt) && (l = Y0(l, e.pendingProps, Oe), l !== null ? (e.stateNode = l, Ft = e, Mt = null, t = true) : t = false), t || yl(e)), null;
        case 13:
          return ho(t, e, l);
        case 4:
          return zt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = $l(e, null, a, l) : Pt(t, e, a, l), e.child;
        case 11:
          return no(t, e, e.type, e.pendingProps, l);
        case 7:
          return Pt(t, e, e.pendingProps, l), e.child;
        case 8:
          return Pt(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return Pt(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, gl(e, e.type, a.value), Pt(t, e, a.children, l), e.child;
        case 9:
          return n = e.type._context, a = e.pendingProps.children, kl(e), n = It(n), a = a(n), e.flags |= 1, Pt(t, e, a, l), e.child;
        case 14:
          return uo(t, e, e.type, e.pendingProps, l);
        case 15:
          return io(t, e, e.type, e.pendingProps, l);
        case 19:
          return go(t, e, l);
        case 31:
          return c0(t, e, l);
        case 22:
          return co(t, e, l, e.pendingProps);
        case 24:
          return kl(e), a = It(Yt), t === null ? (n = lc(), n === null && (n = Tt, u = tc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
            parent: a,
            cache: n
          }, nc(e), gl(e, Yt, n)) : ((t.lanes & l) !== 0 && (uc(t, e), hn(e, null, null, l), mn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), gl(e, Yt, a)) : (a = u.cache, gl(e, Yt, a), a !== n.cache && Pi(e, [
            Yt
          ], l, true))), Pt(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(r(156, e.tag));
    }
    function ll(t) {
      t.flags |= 4;
    }
    function Lc(t, e, l, a, n) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (Zo()) t.flags |= 8192;
        else throw Wl = gu, ac;
      } else t.flags &= -16777217;
    }
    function po(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Dd(e)) if (Zo()) t.flags |= 8192;
      else throw Wl = gu, ac;
    }
    function Du(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ws() : 536870912, t.lanes |= e, Da |= e);
    }
    function vn(t, e) {
      if (!st) switch (t.tailMode) {
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
    function Ot(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
      if (e) for (var n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
      else for (n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
      return t.subtreeFlags |= a, t.childLanes = l, e;
    }
    function f0(t, e, l) {
      var a = e.pendingProps;
      switch (Ji(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ot(e), null;
        case 1:
          return Ot(e), null;
        case 3:
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ie(Yt), wt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (va(e) ? ll(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, $i())), Ot(e), null;
        case 26:
          var n = e.type, u = e.memoizedState;
          return t === null ? (ll(e), u !== null ? (Ot(e), po(e, u)) : (Ot(e), Lc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (ll(e), Ot(e), po(e, u)) : (Ot(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ll(e), Ot(e), Lc(e, n, t, a, l)), null;
        case 27:
          if (aa(e), l = at.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && ll(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return Ot(e), null;
            }
            t = q.current, va(e) ? $f(e) : (t = Ad(n, a, l), e.stateNode = t, ll(e));
          }
          return Ot(e), null;
        case 5:
          if (aa(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && ll(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return Ot(e), null;
            }
            if (u = q.current, va(e)) $f(e);
            else {
              var i = Ju(at.current);
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
              u[$t] = e, u[ie] = a;
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
              t: switch (te(u, n, a), n) {
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
              a && ll(e);
            }
          }
          return Ot(e), Lc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && ll(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
            if (t = at.current, va(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, n = Ft, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[$t] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || hd(t.nodeValue, l)), t || yl(e, true);
            } else t = Ju(t).createTextNode(a), t[$t] = e, e.stateNode = t;
          }
          return Ot(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = va(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(r(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                t[$t] = e;
              } else Zl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Ot(e), t = false;
            } else l = $i(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
            if ((e.flags & 128) !== 0) throw Error(r(558));
          }
          return Ot(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = va(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(r(318));
                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
                n[$t] = e;
              } else Zl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              Ot(e), n = false;
            } else n = $i(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return e.flags & 256 ? (_e(e), e) : (_e(e), null);
          }
          return _e(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Du(e, e.updateQueue), Ot(e), null);
        case 4:
          return wt(), t === null && ss(e.stateNode.containerInfo), Ot(e), null;
        case 10:
          return Ie(e.type), Ot(e), null;
        case 19:
          if (T(Ht), a = e.memoizedState, a === null) return Ot(e), null;
          if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) vn(a, false);
          else {
            if (Rt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (u = vu(t), u !== null) {
                for (e.flags |= 128, vn(a, false), t = u.updateQueue, e.updateQueue = t, Du(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Vf(l, t), l = l.sibling;
                return R(Ht, Ht.current & 1 | 2), st && $e(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && me() > qu && (e.flags |= 128, n = true, vn(a, false), e.lanes = 4194304);
          }
          else {
            if (!n) if (t = vu(u), t !== null) {
              if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, Du(e, t), vn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !st) return Ot(e), null;
            } else 2 * me() - a.renderingStartTime > qu && l !== 536870912 && (e.flags |= 128, n = true, vn(a, false), e.lanes = 4194304);
            a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = me(), t.sibling = null, l = Ht.current, R(Ht, n ? l & 1 | 2 : l & 1), st && $e(e, a.treeForkCount), t) : (Ot(e), null);
        case 22:
        case 23:
          return _e(e), fc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (Ot(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Ot(e), l = e.updateQueue, l !== null && Du(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && T(Kl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ie(Yt), Ot(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, e.tag));
    }
    function r0(t, e) {
      switch (Ji(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return Ie(Yt), wt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return aa(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (_e(e), e.alternate === null) throw Error(r(340));
            Zl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (_e(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(r(340));
            Zl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return T(Ht), null;
        case 4:
          return wt(), null;
        case 10:
          return Ie(e.type), null;
        case 22:
        case 23:
          return _e(e), fc(), t !== null && T(Kl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return Ie(Yt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _o(t, e) {
      switch (Ji(e), e.tag) {
        case 3:
          Ie(Yt), wt();
          break;
        case 26:
        case 27:
        case 5:
          aa(e);
          break;
        case 4:
          wt();
          break;
        case 31:
          e.memoizedState !== null && _e(e);
          break;
        case 13:
          _e(e);
          break;
        case 19:
          T(Ht);
          break;
        case 10:
          Ie(e.type);
          break;
        case 22:
        case 23:
          _e(e), fc(), t !== null && T(Kl);
          break;
        case 24:
          Ie(Yt);
      }
    }
    function xn(t, e) {
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
      } catch (o) {
        xt(e, e.return, o);
      }
    }
    function Sl(t, e, l) {
      try {
        var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var i = a.inst, o = i.destroy;
              if (o !== void 0) {
                i.destroy = void 0, n = e;
                var m = l, N = o;
                try {
                  N();
                } catch (w) {
                  xt(n, m, w);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (w) {
        xt(e, e.return, w);
      }
    }
    function vo(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          fr(e, l);
        } catch (a) {
          xt(t, t.return, a);
        }
      }
    }
    function xo(t, e, l) {
      l.props = Il(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        xt(t, e, a);
      }
    }
    function Sn(t, e) {
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
        xt(t, e, n);
      }
    }
    function Xe(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        xt(t, e, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        xt(t, e, n);
      }
      else l.current = null;
    }
    function So(t) {
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
        xt(t, t.return, n);
      }
    }
    function Gc(t, e, l) {
      try {
        var a = t.stateNode;
        U0(a, t.type, l, e), a[ie] = e;
      } catch (n) {
        xt(t, t.return, n);
      }
    }
    function No(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && wl(t.type) || t.tag === 4;
    }
    function Xc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || No(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && wl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Qc(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ke));
      else if (a !== 4 && (a === 27 && wl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (Qc(t, e, l), t = t.sibling; t !== null; ) Qc(t, e, l), t = t.sibling;
    }
    function Cu(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && wl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Cu(t, e, l), t = t.sibling; t !== null; ) Cu(t, e, l), t = t.sibling;
    }
    function jo(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
        te(e, a, l), e[$t] = t, e[ie] = l;
      } catch (u) {
        xt(t, t.return, u);
      }
    }
    var al = false, Xt = false, Zc = false, Ao = typeof WeakSet == "function" ? WeakSet : Set, kt = null;
    function o0(t, e) {
      if (t = t.containerInfo, os = ei, t = Hf(t), Bi(t)) {
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
            var i = 0, o = -1, m = -1, N = 0, w = 0, D = t, j = null;
            e: for (; ; ) {
              for (var z; D !== l || n !== 0 && D.nodeType !== 3 || (o = i + n), D !== u || a !== 0 && D.nodeType !== 3 || (m = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (z = D.firstChild) !== null; ) j = D, D = z;
              for (; ; ) {
                if (D === t) break e;
                if (j === l && ++N === n && (o = i), j === u && ++w === a && (m = i), (z = D.nextSibling) !== null) break;
                D = j, j = D.parentNode;
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
        focusedElem: t,
        selectionRange: l
      }, ei = false, kt = e; kt !== null; ) if (e = kt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, kt = t;
      else for (; kt !== null; ) {
        switch (e = kt, u = e.alternate, t = e.flags, e.tag) {
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
                var Y = Il(l.type, n);
                t = a.getSnapshotBeforeUpdate(Y, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (k) {
                xt(l, l.return, k);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) ys(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ys(t);
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
          t.return = e.return, kt = t;
          break;
        }
        kt = e.return;
      }
    }
    function zo(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          ul(t, l), a & 4 && xn(5, l);
          break;
        case 1:
          if (ul(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (i) {
            xt(l, l.return, i);
          }
          else {
            var n = Il(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              xt(l, l.return, i);
            }
          }
          a & 64 && vo(l), a & 512 && Sn(l, l.return);
          break;
        case 3:
          if (ul(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
            if (e = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
            try {
              fr(t, e);
            } catch (i) {
              xt(l, l.return, i);
            }
          }
          break;
        case 27:
          e === null && a & 4 && jo(l);
        case 26:
        case 5:
          ul(t, l), e === null && a & 4 && So(l), a & 512 && Sn(l, l.return);
          break;
        case 12:
          ul(t, l);
          break;
        case 31:
          ul(t, l), a & 4 && wo(t, l);
          break;
        case 13:
          ul(t, l), a & 4 && Mo(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = v0.bind(null, l), L0(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || al, !a) {
            e = e !== null && e.memoizedState !== null || Xt, n = al;
            var u = Xt;
            al = a, (Xt = e) && !u ? il(t, l, (l.subtreeFlags & 8772) !== 0) : ul(t, l), al = n, Xt = u;
          }
          break;
        case 30:
          break;
        default:
          ul(t, l);
      }
    }
    function To(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, To(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && vi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Ut = null, se = false;
    function nl(t, e, l) {
      for (l = l.child; l !== null; ) Eo(t, e, l), l = l.sibling;
    }
    function Eo(t, e, l) {
      if (he && typeof he.onCommitFiberUnmount == "function") try {
        he.onCommitFiberUnmount(Va, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Xt || Xe(l, e), nl(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Xt || Xe(l, e);
          var a = Ut, n = se;
          wl(l.type) && (Ut = l.stateNode, se = false), nl(t, e, l), On(l.stateNode), Ut = a, se = n;
          break;
        case 5:
          Xt || Xe(l, e);
        case 6:
          if (a = Ut, n = se, Ut = null, nl(t, e, l), Ut = a, se = n, Ut !== null) if (se) try {
            (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(l.stateNode);
          } catch (u) {
            xt(l, e, u);
          }
          else try {
            Ut.removeChild(l.stateNode);
          } catch (u) {
            xt(l, e, u);
          }
          break;
        case 18:
          Ut !== null && (se ? (t = Ut, vd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Ga(t)) : vd(Ut, l.stateNode));
          break;
        case 4:
          a = Ut, n = se, Ut = l.stateNode.containerInfo, se = true, nl(t, e, l), Ut = a, se = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(2, l, e), Xt || Sl(4, l, e), nl(t, e, l);
          break;
        case 1:
          Xt || (Xe(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && xo(l, e, a)), nl(t, e, l);
          break;
        case 21:
          nl(t, e, l);
          break;
        case 22:
          Xt = (a = Xt) || l.memoizedState !== null, nl(t, e, l), Xt = a;
          break;
        default:
          nl(t, e, l);
      }
    }
    function wo(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Ga(t);
        } catch (l) {
          xt(e, e.return, l);
        }
      }
    }
    function Mo(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Ga(t);
      } catch (l) {
        xt(e, e.return, l);
      }
    }
    function d0(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new Ao()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ao()), e;
        default:
          throw Error(r(435, t.tag));
      }
    }
    function Ru(t, e) {
      var l = d0(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = x0.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function fe(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, o = i;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (wl(o.type)) {
                Ut = o.stateNode, se = false;
                break t;
              }
              break;
            case 5:
              Ut = o.stateNode, se = false;
              break t;
            case 3:
            case 4:
              Ut = o.stateNode.containerInfo, se = true;
              break t;
          }
          o = o.return;
        }
        if (Ut === null) throw Error(r(160));
        Eo(u, i, n), Ut = null, se = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Oo(e, t), e = e.sibling;
    }
    var Be = null;
    function Oo(t, e) {
      var l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          fe(e, t), re(t), a & 4 && (Sl(3, t, t.return), xn(3, t), Sl(5, t, t.return));
          break;
        case 1:
          fe(e, t), re(t), a & 512 && (Xt || l === null || Xe(l, l.return)), a & 64 && al && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Be;
          if (fe(e, t), re(t), a & 512 && (Xt || l === null || Xe(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                e: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Ja] || u[$t] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), te(u, a, l), u[$t] = t, Vt(u), a = u;
                    break t;
                  case "link":
                    var i = Od("link", "href", n).get(a + (l.href || ""));
                    if (i) {
                      for (var o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(o, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), te(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Od("meta", "content", n).get(a + (l.content || ""))) {
                      for (o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(o, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), te(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                u[$t] = t, Vt(u), a = u;
              }
              t.stateNode = a;
            } else Ud(n, t.type, t.stateNode);
            else t.stateNode = Md(n, a, t.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Ud(n, t.type, t.stateNode) : Md(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Gc(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          fe(e, t), re(t), a & 512 && (Xt || l === null || Xe(l, l.return)), l !== null && a & 4 && Gc(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (fe(e, t), re(t), a & 512 && (Xt || l === null || Xe(l, l.return)), t.flags & 32) {
            n = t.stateNode;
            try {
              ra(n, "");
            } catch (Y) {
              xt(t, t.return, Y);
            }
          }
          a & 4 && t.stateNode != null && (n = t.memoizedProps, Gc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Zc = true);
          break;
        case 6:
          if (fe(e, t), re(t), a & 4) {
            if (t.stateNode === null) throw Error(r(162));
            a = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = a;
            } catch (Y) {
              xt(t, t.return, Y);
            }
          }
          break;
        case 3:
          if (Fu = null, n = Be, Be = Wu(e.containerInfo), fe(e, t), Be = n, re(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Ga(e.containerInfo);
          } catch (Y) {
            xt(t, t.return, Y);
          }
          Zc && (Zc = false, Uo(t));
          break;
        case 4:
          a = Be, Be = Wu(t.stateNode.containerInfo), fe(e, t), re(t), Be = a;
          break;
        case 12:
          fe(e, t), re(t);
          break;
        case 31:
          fe(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ru(t, a)));
          break;
        case 13:
          fe(e, t), re(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Bu = me()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ru(t, a)));
          break;
        case 22:
          n = t.memoizedState !== null;
          var m = l !== null && l.memoizedState !== null, N = al, w = Xt;
          if (al = N || n, Xt = w || m, fe(e, t), Xt = w, al = N, re(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || al || Xt || Pl(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    o = m.stateNode;
                    var D = m.memoizedProps.style, j = D != null && D.hasOwnProperty("display") ? D.display : null;
                    o.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (Y) {
                  xt(m, m.return, Y);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (Y) {
                  xt(m, m.return, Y);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var z = m.stateNode;
                  n ? xd(z, true) : xd(m.stateNode, false);
                } catch (Y) {
                  xt(m, m.return, Y);
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
          a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Ru(t, l))));
          break;
        case 19:
          fe(e, t), re(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Ru(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          fe(e, t), re(t);
      }
    }
    function re(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, a = t.return; a !== null; ) {
            if (No(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(r(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Xc(t);
              Cu(t, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (ra(i, ""), l.flags &= -33);
              var o = Xc(t);
              Cu(t, o, i);
              break;
            case 3:
            case 4:
              var m = l.stateNode.containerInfo, N = Xc(t);
              Qc(t, N, m);
              break;
            default:
              throw Error(r(161));
          }
        } catch (w) {
          xt(t, t.return, w);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function Uo(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        Uo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function ul(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) zo(t, e.alternate, e), e = e.sibling;
    }
    function Pl(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            Sl(4, e, e.return), Pl(e);
            break;
          case 1:
            Xe(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && xo(e, e.return, l), Pl(e);
            break;
          case 27:
            On(e.stateNode);
          case 26:
          case 5:
            Xe(e, e.return), Pl(e);
            break;
          case 22:
            e.memoizedState === null && Pl(e);
            break;
          case 30:
            Pl(e);
            break;
          default:
            Pl(e);
        }
        t = t.sibling;
      }
    }
    function il(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, n = t, u = e, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            il(n, u, l), xn(4, u);
            break;
          case 1:
            if (il(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (N) {
              xt(a, a.return, N);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var o = a.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) sr(m[n], o);
              } catch (N) {
                xt(a, a.return, N);
              }
            }
            l && i & 64 && vo(u), Sn(u, u.return);
            break;
          case 27:
            jo(u);
          case 26:
          case 5:
            il(n, u, l), l && a === null && i & 4 && So(u), Sn(u, u.return);
            break;
          case 12:
            il(n, u, l);
            break;
          case 31:
            il(n, u, l), l && i & 4 && wo(n, u);
            break;
          case 13:
            il(n, u, l), l && i & 4 && Mo(n, u);
            break;
          case 22:
            u.memoizedState === null && il(n, u, l), Sn(u, u.return);
            break;
          case 30:
            break;
          default:
            il(n, u, l);
        }
        e = e.sibling;
      }
    }
    function Vc(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && sn(l));
    }
    function kc(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && sn(t));
    }
    function qe(t, e, l, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Do(t, e, l, a), e = e.sibling;
    }
    function Do(t, e, l, a) {
      var n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          qe(t, e, l, a), n & 2048 && xn(9, e);
          break;
        case 1:
          qe(t, e, l, a);
          break;
        case 3:
          qe(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && sn(t)));
          break;
        case 12:
          if (n & 2048) {
            qe(t, e, l, a), t = e.stateNode;
            try {
              var u = e.memoizedProps, i = u.id, o = u.onPostCommit;
              typeof o == "function" && o(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (m) {
              xt(e, e.return, m);
            }
          } else qe(t, e, l, a);
          break;
        case 31:
          qe(t, e, l, a);
          break;
        case 13:
          qe(t, e, l, a);
          break;
        case 23:
          break;
        case 22:
          u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? qe(t, e, l, a) : Nn(t, e) : u._visibility & 2 ? qe(t, e, l, a) : (u._visibility |= 2, Ma(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Vc(i, e);
          break;
        case 24:
          qe(t, e, l, a), n & 2048 && kc(e.alternate, e);
          break;
        default:
          qe(t, e, l, a);
      }
    }
    function Ma(t, e, l, a, n) {
      for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, i = e, o = l, m = a, N = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ma(u, i, o, m, n), xn(8, i);
            break;
          case 23:
            break;
          case 22:
            var w = i.stateNode;
            i.memoizedState !== null ? w._visibility & 2 ? Ma(u, i, o, m, n) : Nn(u, i) : (w._visibility |= 2, Ma(u, i, o, m, n)), n && N & 2048 && Vc(i.alternate, i);
            break;
          case 24:
            Ma(u, i, o, m, n), n && N & 2048 && kc(i.alternate, i);
            break;
          default:
            Ma(u, i, o, m, n);
        }
        e = e.sibling;
      }
    }
    function Nn(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            Nn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          case 24:
            Nn(l, a), n & 2048 && kc(a.alternate, a);
            break;
          default:
            Nn(l, a);
        }
        e = e.sibling;
      }
    }
    var jn = 8192;
    function Oa(t, e, l) {
      if (t.subtreeFlags & jn) for (t = t.child; t !== null; ) Co(t, e, l), t = t.sibling;
    }
    function Co(t, e, l) {
      switch (t.tag) {
        case 26:
          Oa(t, e, l), t.flags & jn && t.memoizedState !== null && I0(l, Be, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Oa(t, e, l);
          break;
        case 3:
        case 4:
          var a = Be;
          Be = Wu(t.stateNode.containerInfo), Oa(t, e, l), Be = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = jn, jn = 16777216, Oa(t, e, l), jn = a) : Oa(t, e, l));
          break;
        default:
          Oa(t, e, l);
      }
    }
    function Ro(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function An(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          kt = a, Bo(a, t);
        }
        Ro(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Ho(t), t = t.sibling;
    }
    function Ho(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          An(t), t.flags & 2048 && Sl(9, t, t.return);
          break;
        case 3:
          An(t);
          break;
        case 12:
          An(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Hu(t)) : An(t);
          break;
        default:
          An(t);
      }
    }
    function Hu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          kt = a, Bo(a, t);
        }
        Ro(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, e, e.return), Hu(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Hu(e));
            break;
          default:
            Hu(e);
        }
        t = t.sibling;
      }
    }
    function Bo(t, e) {
      for (; kt !== null; ) {
        var l = kt;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            Sl(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            sn(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, kt = a;
        else t: for (l = t; kt !== null; ) {
          a = kt;
          var n = a.sibling, u = a.return;
          if (To(a), a === l) {
            kt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, kt = n;
            break t;
          }
          kt = u;
        }
      }
    }
    var m0 = {
      getCacheForType: function(t) {
        var e = It(Yt), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return It(Yt).controller.signal;
      }
    }, h0 = typeof WeakMap == "function" ? WeakMap : Map, yt = 0, Tt = null, nt = null, it = 0, vt = 0, ve = null, Nl = false, Ua = false, Kc = false, cl = 0, Rt = 0, jl = 0, ta = 0, Jc = 0, xe = 0, Da = 0, zn = null, oe = null, Wc = false, Bu = 0, qo = 0, qu = 1 / 0, Yu = null, Al = null, Qt = 0, zl = null, Ca = null, sl = 0, $c = 0, Fc = null, Yo = null, Tn = 0, Ic = null;
    function Se() {
      return (yt & 2) !== 0 && it !== 0 ? it & -it : O.T !== null ? ns() : Ps();
    }
    function Lo() {
      if (xe === 0) if ((it & 536870912) === 0 || st) {
        var t = Kn;
        Kn <<= 1, (Kn & 3932160) === 0 && (Kn = 262144), xe = t;
      } else xe = 536870912;
      return t = pe.current, t !== null && (t.flags |= 32), xe;
    }
    function de(t, e, l) {
      (t === Tt && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null) && (Ra(t, 0), Tl(t, it, xe, false)), Ka(t, l), ((yt & 2) === 0 || t !== Tt) && (t === Tt && ((yt & 2) === 0 && (ta |= l), Rt === 4 && Tl(t, it, xe, false)), Qe(t));
    }
    function Go(t, e, l) {
      if ((yt & 6) !== 0) throw Error(r(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || ka(t, e), n = a ? b0(t, e) : ts(t, e, true), u = a;
      do {
        if (n === 0) {
          Ua && !a && Tl(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, u && !y0(l)) {
            n = ts(t, e, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
            else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              e = i;
              t: {
                var o = t;
                n = zn;
                var m = o.current.memoizedState.isDehydrated;
                if (m && (Ra(o, i).flags |= 256), i = ts(o, i, false), i !== 2) {
                  if (Kc && !m) {
                    o.errorRecoveryDisabledLanes |= u, ta |= u, n = 4;
                    break t;
                  }
                  u = oe, oe = n, u !== null && (oe === null ? oe = u : oe.push.apply(oe, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ra(t, 0), Tl(t, e, 0, true);
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
                Tl(a, e, xe, !Nl);
                break t;
              case 2:
                oe = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((e & 62914560) === e && (n = Bu + 300 - me(), 10 < n)) {
              if (Tl(a, e, xe, !Nl), Wn(a, 0, true) !== 0) break t;
              sl = e, a.timeoutHandle = pd(Xo.bind(null, a, l, oe, Yu, Wc, e, xe, ta, Da, Nl, u, "Throttled", -0, 0), n);
              break t;
            }
            Xo(a, l, oe, Yu, Wc, e, xe, ta, Da, Nl, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Qe(t);
    }
    function Xo(t, e, l, a, n, u, i, o, m, N, w, D, j, z) {
      if (t.timeoutHandle = -1, D = e.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
        D = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Ke
        }, Co(e, u, D);
        var Y = (u & 62914560) === u ? Bu - me() : (u & 4194048) === u ? qo - me() : 0;
        if (Y = P0(D, Y), Y !== null) {
          sl = u, t.cancelPendingCommit = Y($o.bind(null, t, e, u, l, a, n, i, o, m, w, D, null, j, z)), Tl(t, u, i, !N);
          return;
        }
      }
      $o(t, e, u, l, a, n, i, o, m);
    }
    function y0(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!ge(u(), n)) return false;
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
    function Tl(t, e, l, a) {
      e &= ~Jc, e &= ~ta, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var n = e; 0 < n; ) {
        var u = 31 - ye(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      l !== 0 && $s(t, l, e);
    }
    function Lu() {
      return (yt & 6) === 0 ? (En(0), false) : true;
    }
    function Pc() {
      if (nt !== null) {
        if (vt === 0) var t = nt.return;
        else t = nt, Fe = Vl = null, yc(t), Aa = null, rn = 0, t = nt;
        for (; t !== null; ) _o(t.alternate, t), t = t.return;
        nt = null;
      }
    }
    function Ra(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, R0(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), sl = 0, Pc(), Tt = t, nt = l = We(t.current, null), it = e, vt = 0, ve = null, Nl = false, Ua = ka(t, e), Kc = false, Da = xe = Jc = ta = jl = Rt = 0, oe = zn = null, Wc = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - ye(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
      return cl = e, cu(), l;
    }
    function Qo(t, e) {
      tt = null, O.H = pn, e === ja || e === yu ? (e = nr(), vt = 3) : e === ac ? (e = nr(), vt = 4) : vt = e === Oc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, ve = e, nt === null && (Rt = 1, wu(t, Ee(e, t.current)));
    }
    function Zo() {
      var t = pe.current;
      return t === null ? true : (it & 4194048) === it ? Ue === null : (it & 62914560) === it || (it & 536870912) !== 0 ? t === Ue : false;
    }
    function Vo() {
      var t = O.H;
      return O.H = pn, t === null ? pn : t;
    }
    function ko() {
      var t = O.A;
      return O.A = m0, t;
    }
    function Gu() {
      Rt = 4, Nl || (it & 4194048) !== it && pe.current !== null || (Ua = true), (jl & 134217727) === 0 && (ta & 134217727) === 0 || Tt === null || Tl(Tt, it, xe, false);
    }
    function ts(t, e, l) {
      var a = yt;
      yt |= 2;
      var n = Vo(), u = ko();
      (Tt !== t || it !== e) && (Yu = null, Ra(t, e)), e = false;
      var i = Rt;
      t: do
        try {
          if (vt !== 0 && nt !== null) {
            var o = nt, m = ve;
            switch (vt) {
              case 8:
                Pc(), i = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                pe.current === null && (e = true);
                var N = vt;
                if (vt = 0, ve = null, Ha(t, o, m, N), l && Ua) {
                  i = 0;
                  break t;
                }
                break;
              default:
                N = vt, vt = 0, ve = null, Ha(t, o, m, N);
            }
          }
          g0(), i = Rt;
          break;
        } catch (w) {
          Qo(t, w);
        }
      while (true);
      return e && t.shellSuspendCounter++, Fe = Vl = null, yt = a, O.H = n, O.A = u, nt === null && (Tt = null, it = 0, cu()), i;
    }
    function g0() {
      for (; nt !== null; ) Ko(nt);
    }
    function b0(t, e) {
      var l = yt;
      yt |= 2;
      var a = Vo(), n = ko();
      Tt !== t || it !== e ? (Yu = null, qu = me() + 500, Ra(t, e)) : Ua = ka(t, e);
      t: do
        try {
          if (vt !== 0 && nt !== null) {
            e = nt;
            var u = ve;
            e: switch (vt) {
              case 1:
                vt = 0, ve = null, Ha(t, e, u, 1);
                break;
              case 2:
              case 9:
                if (lr(u)) {
                  vt = 0, ve = null, Jo(e);
                  break;
                }
                e = function() {
                  vt !== 2 && vt !== 9 || Tt !== t || (vt = 7), Qe(t);
                }, u.then(e, e);
                break t;
              case 3:
                vt = 7;
                break t;
              case 4:
                vt = 5;
                break t;
              case 7:
                lr(u) ? (vt = 0, ve = null, Jo(e)) : (vt = 0, ve = null, Ha(t, e, u, 7));
                break;
              case 5:
                var i = null;
                switch (nt.tag) {
                  case 26:
                    i = nt.memoizedState;
                  case 5:
                  case 27:
                    var o = nt;
                    if (i ? Dd(i) : o.stateNode.complete) {
                      vt = 0, ve = null;
                      var m = o.sibling;
                      if (m !== null) nt = m;
                      else {
                        var N = o.return;
                        N !== null ? (nt = N, Xu(N)) : nt = null;
                      }
                      break e;
                    }
                }
                vt = 0, ve = null, Ha(t, e, u, 5);
                break;
              case 6:
                vt = 0, ve = null, Ha(t, e, u, 6);
                break;
              case 8:
                Pc(), Rt = 6;
                break t;
              default:
                throw Error(r(462));
            }
          }
          p0();
          break;
        } catch (w) {
          Qo(t, w);
        }
      while (true);
      return Fe = Vl = null, O.H = a, O.A = n, yt = l, nt !== null ? 0 : (Tt = null, it = 0, cu(), Rt);
    }
    function p0() {
      for (; nt !== null && !Gm(); ) Ko(nt);
    }
    function Ko(t) {
      var e = bo(t.alternate, t, cl);
      t.memoizedProps = t.pendingProps, e === null ? Xu(t) : nt = e;
    }
    function Jo(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = ro(l, e, e.pendingProps, e.type, void 0, it);
          break;
        case 11:
          e = ro(l, e, e.pendingProps, e.type.render, e.ref, it);
          break;
        case 5:
          yc(e);
        default:
          _o(l, e), e = nt = Vf(e, cl), e = bo(l, e, cl);
      }
      t.memoizedProps = t.pendingProps, e === null ? Xu(t) : nt = e;
    }
    function Ha(t, e, l, a) {
      Fe = Vl = null, yc(e), Aa = null, rn = 0;
      var n = e.return;
      try {
        if (i0(t, n, e, l, it)) {
          Rt = 1, wu(t, Ee(l, t.current)), nt = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw nt = n, u;
        Rt = 1, wu(t, Ee(l, t.current)), nt = null;
        return;
      }
      e.flags & 32768 ? (st || a === 1 ? t = true : Ua || (it & 536870912) !== 0 ? t = false : (Nl = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = pe.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Wo(e, t)) : Xu(e);
    }
    function Xu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Wo(e, Nl);
          return;
        }
        t = e.return;
        var l = f0(e.alternate, e, cl);
        if (l !== null) {
          nt = l;
          return;
        }
        if (e = e.sibling, e !== null) {
          nt = e;
          return;
        }
        nt = e = t;
      } while (e !== null);
      Rt === 0 && (Rt = 5);
    }
    function Wo(t, e) {
      do {
        var l = r0(t.alternate, t);
        if (l !== null) {
          l.flags &= 32767, nt = l;
          return;
        }
        if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
          nt = t;
          return;
        }
        nt = t = l;
      } while (t !== null);
      Rt = 6, nt = null;
    }
    function $o(t, e, l, a, n, u, i, o, m) {
      t.cancelPendingCommit = null;
      do
        Qu();
      while (Qt !== 0);
      if ((yt & 6) !== 0) throw Error(r(327));
      if (e !== null) {
        if (e === t.current) throw Error(r(177));
        if (u = e.lanes | e.childLanes, u |= Xi, Fm(t, l, u, i, o, m), t === Tt && (nt = Tt = null, it = 0), Ca = e, zl = t, sl = l, $c = u, Fc = n, Yo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, S0(Vn, function() {
          return ed(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = O.T, O.T = null, n = B.p, B.p = 2, i = yt, yt |= 4;
          try {
            o0(t, e, l);
          } finally {
            yt = i, B.p = n, O.T = a;
          }
        }
        Qt = 1, Fo(), Io(), Po();
      }
    }
    function Fo() {
      if (Qt === 1) {
        Qt = 0;
        var t = zl, e = Ca, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = O.T, O.T = null;
          var a = B.p;
          B.p = 2;
          var n = yt;
          yt |= 4;
          try {
            Oo(e, t);
            var u = ds, i = Hf(t.containerInfo), o = u.focusedElem, m = u.selectionRange;
            if (i !== o && o && o.ownerDocument && Rf(o.ownerDocument.documentElement, o)) {
              if (m !== null && Bi(o)) {
                var N = m.start, w = m.end;
                if (w === void 0 && (w = N), "selectionStart" in o) o.selectionStart = N, o.selectionEnd = Math.min(w, o.value.length);
                else {
                  var D = o.ownerDocument || document, j = D && D.defaultView || window;
                  if (j.getSelection) {
                    var z = j.getSelection(), Y = o.textContent.length, k = Math.min(m.start, Y), At = m.end === void 0 ? k : Math.min(m.end, Y);
                    !z.extend && k > At && (i = At, At = k, k = i);
                    var v = Cf(o, k), y = Cf(o, At);
                    if (v && y && (z.rangeCount !== 1 || z.anchorNode !== v.node || z.anchorOffset !== v.offset || z.focusNode !== y.node || z.focusOffset !== y.offset)) {
                      var S = D.createRange();
                      S.setStart(v.node, v.offset), z.removeAllRanges(), k > At ? (z.addRange(S), z.extend(y.node, y.offset)) : (S.setEnd(y.node, y.offset), z.addRange(S));
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
            ei = !!os, ds = os = null;
          } finally {
            yt = n, B.p = a, O.T = l;
          }
        }
        t.current = e, Qt = 2;
      }
    }
    function Io() {
      if (Qt === 2) {
        Qt = 0;
        var t = zl, e = Ca, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = O.T, O.T = null;
          var a = B.p;
          B.p = 2;
          var n = yt;
          yt |= 4;
          try {
            zo(t, e.alternate, e);
          } finally {
            yt = n, B.p = a, O.T = l;
          }
        }
        Qt = 3;
      }
    }
    function Po() {
      if (Qt === 4 || Qt === 3) {
        Qt = 0, Xm();
        var t = zl, e = Ca, l = sl, a = Yo;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qt = 5 : (Qt = 0, Ca = zl = null, td(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (Al = null), pi(l), e = e.stateNode, he && typeof he.onCommitFiberRoot == "function") try {
          he.onCommitFiberRoot(Va, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = O.T, n = B.p, B.p = 2, O.T = null;
          try {
            for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
              var o = a[i];
              u(o.value, {
                componentStack: o.stack
              });
            }
          } finally {
            O.T = e, B.p = n;
          }
        }
        (sl & 3) !== 0 && Qu(), Qe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Ic ? Tn++ : (Tn = 0, Ic = t) : Tn = 0, En(0);
      }
    }
    function td(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, sn(e)));
    }
    function Qu() {
      return Fo(), Io(), Po(), ed();
    }
    function ed() {
      if (Qt !== 5) return false;
      var t = zl, e = $c;
      $c = 0;
      var l = pi(sl), a = O.T, n = B.p;
      try {
        B.p = 32 > l ? 32 : l, O.T = null, l = Fc, Fc = null;
        var u = zl, i = sl;
        if (Qt = 0, Ca = zl = null, sl = 0, (yt & 6) !== 0) throw Error(r(331));
        var o = yt;
        if (yt |= 4, Ho(u.current), Do(u, u.current, i, l), yt = o, En(0, false), he && typeof he.onPostCommitFiberRoot == "function") try {
          he.onPostCommitFiberRoot(Va, u);
        } catch {
        }
        return true;
      } finally {
        B.p = n, O.T = a, td(t, e);
      }
    }
    function ld(t, e, l) {
      e = Ee(l, e), e = Mc(t.stateNode, e, 2), t = _l(t, e, 2), t !== null && (Ka(t, 2), Qe(t));
    }
    function xt(t, e, l) {
      if (t.tag === 3) ld(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          ld(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Al === null || !Al.has(a))) {
            t = Ee(l, t), l = lo(2), a = _l(e, l, 2), a !== null && (ao(l, a, e, t), Ka(a, 2), Qe(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function es(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new h0();
        var n = /* @__PURE__ */ new Set();
        a.set(e, n);
      } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
      n.has(l) || (Kc = true, n.add(l), t = _0.bind(null, t, e, l), e.then(t, t));
    }
    function _0(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, Tt === t && (it & l) === l && (Rt === 4 || Rt === 3 && (it & 62914560) === it && 300 > me() - Bu ? (yt & 2) === 0 && Ra(t, 0) : Jc |= l, Da === it && (Da = 0)), Qe(t);
    }
    function ad(t, e) {
      e === 0 && (e = Ws()), t = Xl(t, e), t !== null && (Ka(t, e), Qe(t));
    }
    function v0(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), ad(t, l);
    }
    function x0(t, e) {
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
      a !== null && a.delete(e), ad(t, l);
    }
    function S0(t, e) {
      return hi(t, e);
    }
    var Zu = null, Ba = null, ls = false, Vu = false, as = false, El = 0;
    function Qe(t) {
      t !== Ba && t.next === null && (Ba === null ? Zu = Ba = t : Ba = Ba.next = t), Vu = true, ls || (ls = true, j0());
    }
    function En(t, e) {
      if (!as && Vu) {
        as = true;
        do
          for (var l = false, a = Zu; a !== null; ) {
            if (t !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, o = a.pingedLanes;
                u = (1 << 31 - ye(42 | t) + 1) - 1, u &= n & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, cd(a, u));
            } else u = it, u = Wn(a, a === Tt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || ka(a, u) || (l = true, cd(a, u));
            a = a.next;
          }
        while (l);
        as = false;
      }
    }
    function N0() {
      nd();
    }
    function nd() {
      Vu = ls = false;
      var t = 0;
      El !== 0 && C0() && (t = El);
      for (var e = me(), l = null, a = Zu; a !== null; ) {
        var n = a.next, u = ud(a, e);
        u === 0 ? (a.next = null, l === null ? Zu = n : l.next = n, n === null && (Ba = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Vu = true)), a = n;
      }
      Qt !== 0 && Qt !== 5 || En(t), El !== 0 && (El = 0);
    }
    function ud(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - ye(u), o = 1 << i, m = n[i];
        m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = $m(o, e)) : m <= e && (t.expiredLanes |= o), u &= ~o;
      }
      if (e = Tt, l = it, l = Wn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (vt === 2 || vt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && yi(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || ka(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (a !== null && yi(a), pi(l)) {
          case 2:
          case 8:
            l = Ks;
            break;
          case 32:
            l = Vn;
            break;
          case 268435456:
            l = Js;
            break;
          default:
            l = Vn;
        }
        return a = id.bind(null, t), l = hi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && yi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function id(t, e) {
      if (Qt !== 0 && Qt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (Qu() && t.callbackNode !== l) return null;
      var a = it;
      return a = Wn(t, t === Tt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Go(t, a, e), ud(t, me()), t.callbackNode != null && t.callbackNode === l ? id.bind(null, t) : null);
    }
    function cd(t, e) {
      if (Qu()) return null;
      Go(t, e, true);
    }
    function j0() {
      H0(function() {
        (yt & 6) !== 0 ? hi(ks, N0) : nd();
      });
    }
    function ns() {
      if (El === 0) {
        var t = Sa;
        t === 0 && (t = kn, kn <<= 1, (kn & 261888) === 0 && (kn = 256)), El = t;
      }
      return El;
    }
    function sd(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Pn("" + t);
    }
    function fd(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function A0(t, e, l, a, n) {
      if (e === "submit" && l && l.stateNode === n) {
        var u = sd((n[ie] || null).action), i = a.submitter;
        i && (e = (e = i[ie] || null) ? sd(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
        var o = new au("action", "action", null, a, n);
        t.push({
          event: o,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (El !== 0) {
                    var m = i ? fd(n, i) : new FormData(n);
                    jc(l, {
                      pending: true,
                      data: m,
                      method: n.method,
                      action: u
                    }, null, m);
                  }
                } else typeof u == "function" && (o.preventDefault(), m = i ? fd(n, i) : new FormData(n), jc(l, {
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
      var is = Gi[us], z0 = is.toLowerCase(), T0 = is[0].toUpperCase() + is.slice(1);
      He(z0, "on" + T0);
    }
    He(Yf, "onAnimationEnd"), He(Lf, "onAnimationIteration"), He(Gf, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(Qh, "onTransitionRun"), He(Zh, "onTransitionStart"), He(Vh, "onTransitionCancel"), He(Xf, "onTransitionEnd"), sa("onMouseEnter", [
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
    var wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), E0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));
    function rd(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var a = t[l], n = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (e) for (var i = a.length - 1; 0 <= i; i--) {
            var o = a[i], m = o.instance, N = o.currentTarget;
            if (o = o.listener, m !== u && n.isPropagationStopped()) break t;
            u = o, n.currentTarget = N;
            try {
              u(n);
            } catch (w) {
              iu(w);
            }
            n.currentTarget = null, u = m;
          }
          else for (i = 0; i < a.length; i++) {
            if (o = a[i], m = o.instance, N = o.currentTarget, o = o.listener, m !== u && n.isPropagationStopped()) break t;
            u = o, n.currentTarget = N;
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
    function ut(t, e) {
      var l = e[_i];
      l === void 0 && (l = e[_i] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      l.has(a) || (od(e, t, 2, false), l.add(a));
    }
    function cs(t, e, l) {
      var a = 0;
      e && (a |= 4), od(l, t, a, e);
    }
    var ku = "_reactListening" + Math.random().toString(36).slice(2);
    function ss(t) {
      if (!t[ku]) {
        t[ku] = true, lf.forEach(function(l) {
          l !== "selectionchange" && (E0.has(l) || cs(l, false, t), cs(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ku] || (e[ku] = true, cs("selectionchange", false, e));
      }
    }
    function od(t, e, l, a) {
      switch (Ld(e)) {
        case 2:
          var n = ly;
          break;
        case 8:
          n = ay;
          break;
        default:
          n = Ns;
      }
      l = n.bind(null, e, l, t), n = void 0, !Ei || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: n
      }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
        passive: n
      }) : t.addEventListener(e, l, false);
    }
    function fs(t, e, l, a, n) {
      var u = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
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
              continue t;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
      yf(function() {
        var N = u, w = zi(l), D = [];
        t: {
          var j = Qf.get(t);
          if (j !== void 0) {
            var z = au, Y = t;
            switch (t) {
              case "keypress":
                if (eu(l) === 0) break t;
              case "keydown":
              case "keyup":
                z = xh;
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
                if (l.button === 2) break t;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                z = pf;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = fh;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = jh;
                break;
              case Yf:
              case Lf:
              case Gf:
                z = dh;
                break;
              case Xf:
                z = zh;
                break;
              case "scroll":
              case "scrollend":
                z = ch;
                break;
              case "wheel":
                z = Eh;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = hh;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = vf;
                break;
              case "toggle":
              case "beforetoggle":
                z = Mh;
            }
            var k = (e & 4) !== 0, At = !k && (t === "scroll" || t === "scrollend"), v = k ? j !== null ? j + "Capture" : null : j;
            k = [];
            for (var y = N, S; y !== null; ) {
              var U = y;
              if (S = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || S === null || v === null || (U = $a(y, v), U != null && k.push(Mn(y, U, S))), At) break;
              y = y.return;
            }
            0 < k.length && (j = new z(j, Y, null, l, w), D.push({
              event: j,
              listeners: k
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (j = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", j && l !== Ai && (Y = l.relatedTarget || l.fromElement) && (ua(Y) || Y[na])) break t;
            if ((z || j) && (j = w.window === w ? w : (j = w.ownerDocument) ? j.defaultView || j.parentWindow : window, z ? (Y = l.relatedTarget || l.toElement, z = N, Y = Y ? ua(Y) : null, Y !== null && (At = A(Y), k = Y.tag, Y !== At || k !== 5 && k !== 27 && k !== 6) && (Y = null)) : (z = null, Y = N), z !== Y)) {
              if (k = pf, U = "onMouseLeave", v = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (k = vf, U = "onPointerLeave", v = "onPointerEnter", y = "pointer"), At = z == null ? j : Wa(z), S = Y == null ? j : Wa(Y), j = new k(U, y + "leave", z, l, w), j.target = At, j.relatedTarget = S, U = null, ua(w) === N && (k = new k(v, y + "enter", Y, l, w), k.target = S, k.relatedTarget = At, U = k), At = U, z && Y) e: {
                for (k = w0, v = z, y = Y, S = 0, U = v; U; U = k(U)) S++;
                U = 0;
                for (var Q = y; Q; Q = k(Q)) U++;
                for (; 0 < S - U; ) v = k(v), S--;
                for (; 0 < U - S; ) y = k(y), U--;
                for (; S--; ) {
                  if (v === y || y !== null && v === y.alternate) {
                    k = v;
                    break e;
                  }
                  v = k(v), y = k(y);
                }
                k = null;
              }
              else k = null;
              z !== null && dd(D, j, z, k, false), Y !== null && At !== null && dd(D, At, Y, k, true);
            }
          }
          t: {
            if (j = N ? Wa(N) : window, z = j.nodeName && j.nodeName.toLowerCase(), z === "select" || z === "input" && j.type === "file") var mt = Ef;
            else if (zf(j)) if (wf) mt = Lh;
            else {
              mt = qh;
              var X = Bh;
            }
            else z = j.nodeName, !z || z.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? N && ji(N.elementType) && (mt = Ef) : mt = Yh;
            if (mt && (mt = mt(t, N))) {
              Tf(D, mt, l, w);
              break t;
            }
            X && X(t, j, N), t === "focusout" && N && j.type === "number" && N.memoizedProps.value != null && Ni(j, "number", j.value);
          }
          switch (X = N ? Wa(N) : window, t) {
            case "focusin":
              (zf(X) || X.contentEditable === "true") && (ha = X, qi = N, nn = null);
              break;
            case "focusout":
              nn = qi = ha = null;
              break;
            case "mousedown":
              Yi = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Yi = false, Bf(D, l, w);
              break;
            case "selectionchange":
              if (Xh) break;
            case "keydown":
            case "keyup":
              Bf(D, l, w);
          }
          var et;
          if (Ci) t: {
            switch (t) {
              case "compositionstart":
                var ct = "onCompositionStart";
                break t;
              case "compositionend":
                ct = "onCompositionEnd";
                break t;
              case "compositionupdate":
                ct = "onCompositionUpdate";
                break t;
            }
            ct = void 0;
          }
          else ma ? jf(t, l) && (ct = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (ct = "onCompositionStart");
          ct && (xf && l.locale !== "ko" && (ma || ct !== "onCompositionStart" ? ct === "onCompositionEnd" && ma && (et = gf()) : (dl = w, wi = "value" in dl ? dl.value : dl.textContent, ma = true)), X = Ku(N, ct), 0 < X.length && (ct = new _f(ct, t, null, l, w), D.push({
            event: ct,
            listeners: X
          }), et ? ct.data = et : (et = Af(l), et !== null && (ct.data = et)))), (et = Uh ? Dh(t, l) : Ch(t, l)) && (ct = Ku(N, "onBeforeInput"), 0 < ct.length && (X = new _f("onBeforeInput", "beforeinput", null, l, w), D.push({
            event: X,
            listeners: ct
          }), X.data = et)), A0(D, t, N, l, w);
        }
        rd(D, e);
      });
    }
    function Mn(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function Ku(t, e) {
      for (var l = e + "Capture", a = []; t !== null; ) {
        var n = t, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = $a(t, l), n != null && a.unshift(Mn(t, n, u)), n = $a(t, e), n != null && a.push(Mn(t, n, u))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function w0(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function dd(t, e, l, a, n) {
      for (var u = e._reactName, i = []; l !== null && l !== a; ) {
        var o = l, m = o.alternate, N = o.stateNode;
        if (o = o.tag, m !== null && m === a) break;
        o !== 5 && o !== 26 && o !== 27 || N === null || (m = N, n ? (N = $a(l, u), N != null && i.unshift(Mn(l, N, m))) : n || (N = $a(l, u), N != null && i.push(Mn(l, N, m)))), l = l.return;
      }
      i.length !== 0 && t.push({
        event: e,
        listeners: i
      });
    }
    var M0 = /\r\n?/g, O0 = /\u0000|\uFFFD/g;
    function md(t) {
      return (typeof t == "string" ? t : "" + t).replace(M0, `
`).replace(O0, "");
    }
    function hd(t, e) {
      return e = md(e), md(t) === e;
    }
    function jt(t, e, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ra(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ra(t, "" + a);
          break;
        case "className":
          Fn(t, "class", a);
          break;
        case "tabIndex":
          Fn(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Fn(t, l, a);
          break;
        case "style":
          mf(t, a, u);
          break;
        case "data":
          if (e !== "object") {
            Fn(t, "data", a);
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
          a = Pn("" + a), t.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (e !== "input" && jt(t, e, "name", n.name, n, null), jt(t, e, "formEncType", n.formEncType, n, null), jt(t, e, "formMethod", n.formMethod, n, null), jt(t, e, "formTarget", n.formTarget, n, null)) : (jt(t, e, "encType", n.encType, n, null), jt(t, e, "method", n.method, n, null), jt(t, e, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = Pn("" + a), t.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (t.onclick = Ke);
          break;
        case "onScroll":
          a != null && ut("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ut("scrollend", t);
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
          l = Pn("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
          ut("beforetoggle", t), ut("toggle", t), $n(t, "popover", a);
          break;
        case "xlinkActuate":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          ke(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          ke(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          ke(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          ke(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          $n(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = uh.get(l) || l, $n(t, l, a));
      }
    }
    function rs(t, e, l, a, n, u) {
      switch (l) {
        case "style":
          mf(t, a, u);
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
          typeof a == "string" ? ra(t, a) : (typeof a == "number" || typeof a == "bigint") && ra(t, "" + a);
          break;
        case "onScroll":
          a != null && ut("scroll", t);
          break;
        case "onScrollEnd":
          a != null && ut("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = Ke);
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
          if (!af.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[ie] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : $n(t, l, a);
          }
      }
    }
    function te(t, e, l) {
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
          ut("error", t), ut("load", t);
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
                jt(t, e, u, i, l, null);
            }
          }
          n && jt(t, e, "srcSet", l.srcSet, l, null), a && jt(t, e, "src", l.src, l, null);
          return;
        case "input":
          ut("invalid", t);
          var o = u = i = n = null, m = null, N = null;
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
                N = w;
                break;
              case "value":
                u = w;
                break;
              case "defaultValue":
                o = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(r(137, e));
                break;
              default:
                jt(t, e, a, w, l, null);
            }
          }
          ff(t, u, o, m, N, i, n, false);
          return;
        case "select":
          ut("invalid", t), a = i = u = null;
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
              jt(t, e, n, o, l, null);
          }
          e = u, l = i, t.multiple = !!a, e != null ? fa(t, !!a, e, false) : l != null && fa(t, !!a, l, true);
          return;
        case "textarea":
          ut("invalid", t), u = n = a = null;
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
              if (o != null) throw Error(r(91));
              break;
            default:
              jt(t, e, i, o, l, null);
          }
          of(t, a, n, u);
          return;
        case "option":
          for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : jt(t, e, m, a, l, null));
          return;
        case "dialog":
          ut("beforetoggle", t), ut("toggle", t), ut("cancel", t), ut("close", t);
          break;
        case "iframe":
        case "object":
          ut("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < wn.length; a++) ut(wn[a], t);
          break;
        case "image":
          ut("error", t), ut("load", t);
          break;
        case "details":
          ut("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          ut("error", t), ut("load", t);
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
          for (N in l) if (l.hasOwnProperty(N) && (a = l[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, e));
            default:
              jt(t, e, N, a, l, null);
          }
          return;
        default:
          if (ji(e)) {
            for (w in l) l.hasOwnProperty(w) && (a = l[w], a !== void 0 && rs(t, e, w, a, l, void 0));
            return;
          }
      }
      for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && jt(t, e, o, a, l, null));
    }
    function U0(t, e, l, a) {
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
          var n = null, u = null, i = null, o = null, m = null, N = null, w = null;
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
                a.hasOwnProperty(z) || jt(t, e, z, null, a, D);
            }
          }
          for (var j in a) {
            var z = a[j];
            if (D = l[j], a.hasOwnProperty(j) && (z != null || D != null)) switch (j) {
              case "type":
                u = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                N = z;
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
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== D && jt(t, e, j, z, a, D);
            }
          }
          Si(t, i, o, m, N, w, u, n);
          return;
        case "select":
          z = i = o = j = null;
          for (u in l) if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
            case "value":
              break;
            case "multiple":
              z = m;
            default:
              a.hasOwnProperty(u) || jt(t, e, u, null, a, m);
          }
          for (n in a) if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null)) switch (n) {
            case "value":
              j = u;
              break;
            case "defaultValue":
              o = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== m && jt(t, e, n, u, a, m);
          }
          e = o, l = i, a = z, j != null ? fa(t, !!l, j, false) : !!a != !!l && (e != null ? fa(t, !!l, e, true) : fa(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          z = j = null;
          for (o in l) if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)) switch (o) {
            case "value":
              break;
            case "children":
              break;
            default:
              jt(t, e, o, null, a, n);
          }
          for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              j = n;
              break;
            case "defaultValue":
              z = n;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (n != null) throw Error(r(91));
              break;
            default:
              n !== u && jt(t, e, i, n, a, u);
          }
          rf(t, j, z);
          return;
        case "option":
          for (var Y in l) j = l[Y], l.hasOwnProperty(Y) && j != null && !a.hasOwnProperty(Y) && (Y === "selected" ? t.selected = false : jt(t, e, Y, null, a, j));
          for (m in a) j = a[m], z = l[m], a.hasOwnProperty(m) && j !== z && (j != null || z != null) && (m === "selected" ? t.selected = j && typeof j != "function" && typeof j != "symbol" : jt(t, e, m, j, a, z));
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
          for (var k in l) j = l[k], l.hasOwnProperty(k) && j != null && !a.hasOwnProperty(k) && jt(t, e, k, null, a, j);
          for (N in a) if (j = a[N], z = l[N], a.hasOwnProperty(N) && j !== z && (j != null || z != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (j != null) throw Error(r(137, e));
              break;
            default:
              jt(t, e, N, j, a, z);
          }
          return;
        default:
          if (ji(e)) {
            for (var At in l) j = l[At], l.hasOwnProperty(At) && j !== void 0 && !a.hasOwnProperty(At) && rs(t, e, At, void 0, a, j);
            for (w in a) j = a[w], z = l[w], !a.hasOwnProperty(w) || j === z || j === void 0 && z === void 0 || rs(t, e, w, j, a, z);
            return;
          }
      }
      for (var v in l) j = l[v], l.hasOwnProperty(v) && j != null && !a.hasOwnProperty(v) && jt(t, e, v, null, a, j);
      for (D in a) j = a[D], z = l[D], !a.hasOwnProperty(D) || j === z || j == null && z == null || jt(t, e, D, j, a, z);
    }
    function yd(t) {
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
    function D0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, o = n.duration;
          if (u && o && yd(i)) {
            for (i = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
              var m = l[a], N = m.startTime;
              if (N > o) break;
              var w = m.transferSize, D = m.initiatorType;
              w && yd(D) && (m = m.responseEnd, i += w * (m < o ? 1 : (o - N) / (m - N)));
            }
            if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var os = null, ds = null;
    function Ju(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function gd(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function bd(t, e) {
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
    function ms(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var hs = null;
    function C0() {
      var t = window.event;
      return t && t.type === "popstate" ? t === hs ? false : (hs = t, true) : (hs = null, false);
    }
    var pd = typeof setTimeout == "function" ? setTimeout : void 0, R0 = typeof clearTimeout == "function" ? clearTimeout : void 0, _d = typeof Promise == "function" ? Promise : void 0, H0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof _d < "u" ? function(t) {
      return _d.resolve(null).then(t).catch(B0);
    } : pd;
    function B0(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function wl(t) {
      return t === "head";
    }
    function vd(t, e) {
      var l = e, a = 0;
      do {
        var n = l.nextSibling;
        if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Ga(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") On(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, On(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, o = u.nodeName;
            u[Ja] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && On(t.ownerDocument.body);
        l = n;
      } while (l);
      Ga(e);
    }
    function xd(t, e) {
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
    function ys(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
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
        t.removeChild(l);
      }
    }
    function q0(t, e, l, a) {
      for (; t.nodeType === 1; ) {
        var n = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Ja]) switch (e) {
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
        if (t = De(t.nextSibling), t === null) break;
      }
      return null;
    }
    function Y0(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = De(t.nextSibling), t === null)) return null;
      return t;
    }
    function Sd(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = De(t.nextSibling), t === null)) return null;
      return t;
    }
    function gs(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function bs(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function L0(t, e) {
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
    function De(t) {
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
    var ps = null;
    function Nd(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return De(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function jd(t) {
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
    function Ad(t, e, l) {
      switch (e = Ju(l), t) {
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
    function On(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      vi(t);
    }
    var Ce = /* @__PURE__ */ new Map(), zd = /* @__PURE__ */ new Set();
    function Wu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var fl = B.d;
    B.d = {
      f: G0,
      r: X0,
      D: Q0,
      C: Z0,
      L: V0,
      m: k0,
      X: J0,
      S: K0,
      M: W0
    };
    function G0() {
      var t = fl.f(), e = Lu();
      return t || e;
    }
    function X0(t) {
      var e = ia(t);
      e !== null && e.tag === 5 && e.type === "form" ? Xr(e) : fl.r(t);
    }
    var qa = typeof document > "u" ? null : document;
    function Td(t, e, l) {
      var a = qa;
      if (a && typeof e == "string" && e) {
        var n = ze(e);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), zd.has(n) || (zd.add(n), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(n) === null && (e = a.createElement("link"), te(e, "link", t), Vt(e), a.head.appendChild(e)));
      }
    }
    function Q0(t) {
      fl.D(t), Td("dns-prefetch", t, null);
    }
    function Z0(t, e) {
      fl.C(t, e), Td("preconnect", t, e);
    }
    function V0(t, e, l) {
      fl.L(t, e, l);
      var a = qa;
      if (a && t && e) {
        var n = 'link[rel="preload"][as="' + ze(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + ze(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + ze(l.imageSizes) + '"]')) : n += '[href="' + ze(t) + '"]';
        var u = n;
        switch (e) {
          case "style":
            u = Ya(t);
            break;
          case "script":
            u = La(t);
        }
        Ce.has(u) || (t = C({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), Ce.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Un(u)) || e === "script" && a.querySelector(Dn(u)) || (e = a.createElement("link"), te(e, "link", t), Vt(e), a.head.appendChild(e)));
      }
    }
    function k0(t, e) {
      fl.m(t, e);
      var l = qa;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + ze(a) + '"][href="' + ze(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = La(t);
        }
        if (!Ce.has(u) && (t = C({
          rel: "modulepreload",
          href: t
        }, e), Ce.set(u, t), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Dn(u))) return;
          }
          a = l.createElement("link"), te(a, "link", t), Vt(a), l.head.appendChild(a);
        }
      }
    }
    function K0(t, e, l) {
      fl.S(t, e, l);
      var a = qa;
      if (a && t) {
        var n = ca(a).hoistableStyles, u = Ya(t);
        e = e || "default";
        var i = n.get(u);
        if (!i) {
          var o = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(Un(u))) o.loading = 5;
          else {
            t = C({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = Ce.get(u)) && _s(t, l);
            var m = i = a.createElement("link");
            Vt(m), te(m, "link", t), m._p = new Promise(function(N, w) {
              m.onload = N, m.onerror = w;
            }), m.addEventListener("load", function() {
              o.loading |= 1;
            }), m.addEventListener("error", function() {
              o.loading |= 2;
            }), o.loading |= 4, $u(i, e, a);
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
    function J0(t, e) {
      fl.X(t, e);
      var l = qa;
      if (l && t) {
        var a = ca(l).hoistableScripts, n = La(t), u = a.get(n);
        u || (u = l.querySelector(Dn(n)), u || (t = C({
          src: t,
          async: true
        }, e), (e = Ce.get(n)) && vs(t, e), u = l.createElement("script"), Vt(u), te(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function W0(t, e) {
      fl.M(t, e);
      var l = qa;
      if (l && t) {
        var a = ca(l).hoistableScripts, n = La(t), u = a.get(n);
        u || (u = l.querySelector(Dn(n)), u || (t = C({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Ce.get(n)) && vs(t, e), u = l.createElement("script"), Vt(u), te(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Ed(t, e, l, a) {
      var n = (n = at.current) ? Wu(n) : null;
      if (!n) throw Error(r(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ya(l.href), l = ca(n).hoistableStyles, a = l.get(e), a || (a = {
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
            t = Ya(l.href);
            var u = ca(n).hoistableStyles, i = u.get(t);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, i), (u = n.querySelector(Un(t))) && !u._p && (i.instance = u, i.state.loading = 5), Ce.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ce.set(t, l), u || $0(n, t, l, i.state))), e && a === null) throw Error(r(528, ""));
            return i;
          }
          if (e && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = La(l), l = ca(n).hoistableScripts, a = l.get(e), a || (a = {
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
    function Ya(t) {
      return 'href="' + ze(t) + '"';
    }
    function Un(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function wd(t) {
      return C({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function $0(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), te(e, "link", l), Vt(e), t.head.appendChild(e));
    }
    function La(t) {
      return '[src="' + ze(t) + '"]';
    }
    function Dn(t) {
      return "script[async]" + t;
    }
    function Md(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + ze(l.href) + '"]');
          if (a) return e.instance = a, Vt(a), a;
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Vt(a), te(a, "style", n), $u(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ya(l.href);
          var u = t.querySelector(Un(n));
          if (u) return e.state.loading |= 4, e.instance = u, Vt(u), u;
          a = wd(l), (n = Ce.get(n)) && _s(a, n), u = (t.ownerDocument || t).createElement("link"), Vt(u);
          var i = u;
          return i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), te(u, "link", a), e.state.loading |= 4, $u(u, l.precedence, t), e.instance = u;
        case "script":
          return u = La(l.src), (n = t.querySelector(Dn(u))) ? (e.instance = n, Vt(n), n) : (a = l, (n = Ce.get(u)) && (a = C({}, l), vs(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Vt(n), te(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, $u(a, l.precedence, t));
      return e.instance;
    }
    function $u(t, e, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var o = a[i];
        if (o.dataset.precedence === e) u = o;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function _s(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function vs(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Fu = null;
    function Od(t, e, l) {
      if (Fu === null) {
        var a = /* @__PURE__ */ new Map(), n = Fu = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = Fu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(t)) return a;
      for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[Ja] || u[$t] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = u.getAttribute(e) || "";
          i = t + i;
          var o = a.get(i);
          o ? o.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function Ud(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function F0(t, e, l) {
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
          return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : true;
        case "script":
          if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return true;
      }
      return false;
    }
    function Dd(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function I0(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = Ya(a.href), u = e.querySelector(Un(n));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Iu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Vt(u);
            return;
          }
          u = e.ownerDocument || e, a = wd(a), (n = Ce.get(n)) && _s(a, n), u = u.createElement("link"), Vt(u);
          var i = u;
          i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), te(u, "link", a), l.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Iu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var xs = 0;
    function P0(t, e) {
      return t.stylesheets && t.count === 0 && ti(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && ti(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && xs === 0 && (xs = 62500 * D0());
        var n = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && ti(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > xs ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function Iu() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ti(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var Pu = null;
    function ti(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, Pu = /* @__PURE__ */ new Map(), e.forEach(ty, t), Pu = null, Iu.call(t));
    }
    function ty(t, e) {
      if (!(e.state.loading & 4)) {
        var l = Pu.get(t);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), Pu.set(t, l);
          for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
          }
          a && l.set(null, a);
        }
        n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Iu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
      }
    }
    var Cn = {
      $$typeof: G,
      Provider: null,
      Consumer: null,
      _currentValue: K,
      _currentValue2: K,
      _threadCount: 0
    };
    function ey(t, e, l, a, n, u, i, o, m) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = gi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = gi(0), this.hiddenUpdates = gi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Cd(t, e, l, a, n, u, i, o, m, N, w, D) {
      return t = new ey(t, e, l, i, m, N, w, D, o), e = 1, u === true && (e |= 24), u = be(3, null, null, e), t.current = u, u.stateNode = t, e = tc(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, nc(u), t;
    }
    function Rd(t) {
      return t ? (t = ba, t) : ba;
    }
    function Hd(t, e, l, a, n, u) {
      n = Rd(n), a.context === null ? a.context = n : a.pendingContext = n, a = pl(e), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = _l(t, a, e), l !== null && (de(l, t, e), dn(l, t, e));
    }
    function Bd(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function Ss(t, e) {
      Bd(t, e), (t = t.alternate) && Bd(t, e);
    }
    function qd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Xl(t, 67108864);
        e !== null && de(e, t, 67108864), Ss(t, 67108864);
      }
    }
    function Yd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Se();
        e = bi(e);
        var l = Xl(t, e);
        l !== null && de(l, t, e), Ss(t, e);
      }
    }
    var ei = true;
    function ly(t, e, l, a) {
      var n = O.T;
      O.T = null;
      var u = B.p;
      try {
        B.p = 2, Ns(t, e, l, a);
      } finally {
        B.p = u, O.T = n;
      }
    }
    function ay(t, e, l, a) {
      var n = O.T;
      O.T = null;
      var u = B.p;
      try {
        B.p = 8, Ns(t, e, l, a);
      } finally {
        B.p = u, O.T = n;
      }
    }
    function Ns(t, e, l, a) {
      if (ei) {
        var n = js(a);
        if (n === null) fs(t, e, a, li, l), Gd(t, a);
        else if (uy(n, t, e, l, a)) a.stopPropagation();
        else if (Gd(t, a), e & 4 && -1 < ny.indexOf(t)) {
          for (; n !== null; ) {
            var u = ia(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Bl(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - ye(i);
                      o.entanglements[1] |= m, i &= ~m;
                    }
                    Qe(u), (yt & 6) === 0 && (qu = me() + 500, En(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Xl(u, 2), o !== null && de(o, u, 2), Lu(), Ss(u, 2);
            }
            if (u = js(a), u === null && fs(t, e, a, li, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else fs(t, e, a, null, l);
      }
    }
    function js(t) {
      return t = zi(t), As(t);
    }
    var li = null;
    function As(t) {
      if (li = null, t = ua(t), t !== null) {
        var e = A(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = x(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = p(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return li = t, null;
    }
    function Ld(t) {
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
          switch (Qm()) {
            case ks:
              return 2;
            case Ks:
              return 8;
            case Vn:
            case Zm:
              return 32;
            case Js:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var zs = false, Ml = null, Ol = null, Ul = null, Rn = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Dl = [], ny = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Gd(t, e) {
      switch (t) {
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
          Rn.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Hn.delete(e.pointerId);
      }
    }
    function Bn(t, e, l, a, n, u) {
      return t === null || t.nativeEvent !== u ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, e !== null && (e = ia(e), e !== null && qd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
    }
    function uy(t, e, l, a, n) {
      switch (e) {
        case "focusin":
          return Ml = Bn(Ml, t, e, l, a, n), true;
        case "dragenter":
          return Ol = Bn(Ol, t, e, l, a, n), true;
        case "mouseover":
          return Ul = Bn(Ul, t, e, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Rn.set(u, Bn(Rn.get(u) || null, t, e, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Hn.set(u, Bn(Hn.get(u) || null, t, e, l, a, n)), true;
      }
      return false;
    }
    function Xd(t) {
      var e = ua(t.target);
      if (e !== null) {
        var l = A(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = x(l), e !== null) {
              t.blockedOn = e, tf(t.priority, function() {
                Yd(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = p(l), e !== null) {
              t.blockedOn = e, tf(t.priority, function() {
                Yd(l);
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
    function ai(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = js(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          Ai = a, l.target.dispatchEvent(a), Ai = null;
        } else return e = ia(l), e !== null && qd(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function Qd(t, e, l) {
      ai(t) && l.delete(e);
    }
    function iy() {
      zs = false, Ml !== null && ai(Ml) && (Ml = null), Ol !== null && ai(Ol) && (Ol = null), Ul !== null && ai(Ul) && (Ul = null), Rn.forEach(Qd), Hn.forEach(Qd);
    }
    function ni(t, e) {
      t.blockedOn === e && (t.blockedOn = null, zs || (zs = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, iy)));
    }
    var ui = null;
    function Zd(t) {
      ui !== t && (ui = t, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
        ui === t && (ui = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (As(a || l) === null) continue;
            break;
          }
          var u = ia(l);
          u !== null && (t.splice(e, 3), e -= 3, jc(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Ga(t) {
      function e(m) {
        return ni(m, t);
      }
      Ml !== null && ni(Ml, t), Ol !== null && ni(Ol, t), Ul !== null && ni(Ul, t), Rn.forEach(e), Hn.forEach(e);
      for (var l = 0; l < Dl.length; l++) {
        var a = Dl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Dl.length && (l = Dl[0], l.blockedOn === null); ) Xd(l), l.blockedOn === null && Dl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[ie] || null;
        if (typeof u == "function") i || Zd(l);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[ie] || null) o = i.formAction;
            else if (As(n) !== null) continue;
          } else o = i.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Zd(l);
        }
      }
    }
    function Vd() {
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
    function Ts(t) {
      this._internalRoot = t;
    }
    ii.prototype.render = Ts.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current, a = Se();
      Hd(l, a, t, e, null, null);
    }, ii.prototype.unmount = Ts.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Hd(t.current, 2, null, t, null, null), Lu(), e[na] = null;
      }
    };
    function ii(t) {
      this._internalRoot = t;
    }
    ii.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Ps();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < Dl.length && e !== 0 && e < Dl[l].priority; l++) ;
        Dl.splice(l, 0, t), l === 0 && Xd(t);
      }
    };
    var kd = f.version;
    if (kd !== "19.2.3") throw Error(r(527, kd, "19.2.3"));
    B.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
      return t = b(e), t = t !== null ? E(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var cy = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: O,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ci.isDisabled && ci.supportsFiber) try {
        Va = ci.inject(cy), he = ci;
      } catch {
      }
    }
    return Yn.createRoot = function(t, e) {
      if (!g(t)) throw Error(r(299));
      var l = false, a = "", n = Ir, u = Pr, i = to;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Cd(t, 1, false, null, null, l, a, null, n, u, i, Vd), t[na] = e.current, ss(t), new Ts(e);
    }, Yn.hydrateRoot = function(t, e, l) {
      if (!g(t)) throw Error(r(299));
      var a = false, n = "", u = Ir, i = Pr, o = to, m = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Cd(t, 1, true, e, l ?? null, a, n, m, u, i, o, Vd), e.context = Rd(null), l = e.current, a = Se(), a = bi(a), n = pl(a), n.callback = null, _l(l, n, a), l = a, e.current.lanes = l, Ka(e, l), Qe(e), t[na] = e.current, ss(t), new ii(e);
    }, Yn.version = "19.2.3", Yn;
  }
  var lm;
  function py() {
    if (lm) return Ms.exports;
    lm = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
    }
    return s(), Ms.exports = by(), Ms.exports;
  }
  var _y = py();
  const vy = Nm(_y), xy = "modulepreload", Sy = function(s, f) {
    return new URL(s, f).href;
  }, am = {}, Cs = function(f, d, r) {
    let g = Promise.resolve();
    if (d && d.length > 0) {
      let b = function(E) {
        return Promise.all(E.map((C) => Promise.resolve(C).then((L) => ({
          status: "fulfilled",
          value: L
        }), (L) => ({
          status: "rejected",
          reason: L
        }))));
      };
      const x = document.getElementsByTagName("link"), p = document.querySelector("meta[property=csp-nonce]"), _ = (p == null ? void 0 : p.nonce) || (p == null ? void 0 : p.getAttribute("nonce"));
      g = b(d.map((E) => {
        if (E = Sy(E, r), E in am) return;
        am[E] = true;
        const C = E.endsWith(".css"), L = C ? '[rel="stylesheet"]' : "";
        if (r) for (let gt = x.length - 1; gt >= 0; gt--) {
          const bt = x[gt];
          if (bt.href === E && (!C || bt.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${E}"]${L}`)) return;
        const P = document.createElement("link");
        if (P.rel = C ? "stylesheet" : xy, C || (P.as = "script"), P.crossOrigin = "", P.href = E, _ && P.setAttribute("nonce", _), document.head.appendChild(P), C) return new Promise((gt, bt) => {
          P.addEventListener("load", gt), P.addEventListener("error", () => bt(new Error(`Unable to preload CSS for ${E}`)));
        });
      }));
    }
    function A(x) {
      const p = new Event("vite:preloadError", {
        cancelable: true
      });
      if (p.payload = x, window.dispatchEvent(p), !p.defaultPrevented) throw x;
    }
    return g.then((x) => {
      for (const p of x || []) p.status === "rejected" && A(p.reason);
      return f().catch(A);
    });
  };
  const Ny = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), jy = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (f, d, r) => r ? r.toUpperCase() : d.toLowerCase()), nm = (s) => {
    const f = jy(s);
    return f.charAt(0).toUpperCase() + f.slice(1);
  }, jm = (...s) => s.filter((f, d, r) => !!f && f.trim() !== "" && r.indexOf(f) === d).join(" ").trim(), Ay = (s) => {
    for (const f in s) if (f.startsWith("aria-") || f === "role" || f === "title") return true;
  };
  var zy = {
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
  const Ty = ft.forwardRef(({ color: s = "currentColor", size: f = 24, strokeWidth: d = 2, absoluteStrokeWidth: r, className: g = "", children: A, iconNode: x, ...p }, _) => ft.createElement("svg", {
    ref: _,
    ...zy,
    width: f,
    height: f,
    stroke: s,
    strokeWidth: r ? Number(d) * 24 / Number(f) : d,
    className: jm("lucide", g),
    ...!A && !Ay(p) && {
      "aria-hidden": "true"
    },
    ...p
  }, [
    ...x.map(([b, E]) => ft.createElement(b, E)),
    ...Array.isArray(A) ? A : [
      A
    ]
  ]));
  const Et = (s, f) => {
    const d = ft.forwardRef(({ className: r, ...g }, A) => ft.createElement(Ty, {
      ref: A,
      iconNode: f,
      className: jm(`lucide-${Ny(nm(s))}`, `lucide-${s}`, r),
      ...g
    }));
    return d.displayName = nm(s), d;
  };
  const Ey = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], um = Et("activity", Ey);
  const wy = [
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
  ], My = Et("book-open", wy);
  const Oy = [
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
  ], Uy = Et("building-2", Oy);
  const Dy = [
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
  ], Cy = Et("bug", Dy);
  const Ry = [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
      }
    ]
  ], Hy = Et("chevron-down", Ry);
  const By = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ], qy = Et("chevron-right", By);
  const Yy = [
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
  ], Am = Et("clock", Yy);
  const Ly = [
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
  ], Gy = Et("download", Ly);
  const Xy = [
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
  ], qs = Et("file-text", Xy);
  const Qy = [
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
  ], Zy = Et("guitar", Qy);
  const Vy = [
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
  ], zm = Et("hash", Vy);
  const ky = [
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
  ], Ky = Et("image", ky);
  const Jy = [
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
  ], Wy = Et("info", Jy);
  const $y = [
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
  ], im = Et("key-round", $y);
  const Fy = [
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
  ], Iy = Et("log-out", Fy);
  const Py = [
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
  ], tg = Et("mic", Py);
  const eg = [
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
  ], lg = Et("monitor", eg);
  const ag = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], ng = Et("moon", ag);
  const ug = [
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
  ], Zn = Et("music", ug);
  const ig = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], cg = Et("play", ig);
  const sg = [
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
  ], Ve = Et("plus", sg);
  const fg = [
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
  ], rg = Et("sticky-note", fg);
  const og = [
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
  ], dg = Et("sun", og);
  const mg = [
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
  ], Ye = Et("trash-2", mg);
  const hg = [
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
  ], cm = Et("trending-up", hg);
  const yg = [
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
  ], Tm = Et("upload", yg);
  const gg = [
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
  ], bg = Et("users-round", gg);
  function pg({ file: s, onFileUpload: f, isParsingMetadata: d = false, metadataSummary: r }) {
    const g = (A) => {
      var _a;
      f(((_a = A.target.files) == null ? void 0 : _a[0]) || null);
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
                  children: c.jsx(qs, {
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
              onChange: g,
              className: "sr-only"
            })
          ]
        }),
        s && c.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            c.jsx(qs, {
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
          }) : r ? c.jsx("span", {
            className: "text-foreground/70",
            children: r
          }) : null
        })
      ]
    });
  }
  const sm = [
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
  ], fm = [
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
  ], rm = [
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
  ], om = [
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
  function _g({ metadata: s, onMetadataChange: f }) {
    var _a, _b;
    const d = Object.values(s).filter((A) => typeof A == "string" && A.trim().length > 0).length, r = sm.length + fm.length + rm.length + om.length + 1, g = ({ key: A, label: x, placeholder: p, type: _, colSpan: b }) => {
      const E = s[A], C = typeof E == "string" || typeof E == "number" ? E : "";
      return c.jsxs("div", {
        className: `space-y-2 ${b === "full" ? "md:col-span-2" : ""}`,
        children: [
          c.jsx("label", {
            htmlFor: A,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: x
          }),
          c.jsx("input", {
            id: A,
            value: C,
            onChange: (L) => f(A, _ === "number" ? parseInt(L.target.value) || void 0 : L.target.value),
            placeholder: p,
            type: _ ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, A);
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
                r,
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
                  children: sm.map(g)
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
                  children: fm.map(g)
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
                  children: rm.map(g)
                })
              ]
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
                  children: om.map(g)
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
              value: ((_b = (_a = s.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onChange: (A) => f("comments", [
                {
                  text: A.target.value
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
  const dm = [
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
  ], vg = [
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
  function xg({ pictures: s = [], onPicturesChange: f, coverVariants: d = [], onCoverVariantsChange: r, animatedCover: g, onAnimatedCoverChange: A }) {
    const x = async (J, Z) => {
      var _a, _b;
      const W = (_a = J.target.files) == null ? void 0 : _a[0];
      if (W) {
        if (!W.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if (W.size > 10485760) {
          alert("Image size must be less than 10MB");
          return;
        }
        const G = await W.arrayBuffer(), rt = new Uint8Array(G), Kt = {
          mime_type: W.type,
          picture_type: Z,
          description: `${(_b = dm.find((I) => I.value === Z)) == null ? void 0 : _b.label} Art`,
          data: rt
        }, Dt = s.filter((I) => I.picture_type !== Z);
        Dt.push(Kt), f(Dt);
      }
    }, p = (J) => {
      f(s.filter((Z) => Z.picture_type !== J));
    }, _ = () => {
      r([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, b = async (J, Z) => {
      var _a;
      const W = (_a = Z.target.files) == null ? void 0 : _a[0];
      if (W) {
        if (!W.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const G = await W.arrayBuffer(), rt = [
          ...d
        ];
        rt[J].data = new Uint8Array(G), rt[J].mime_type = W.type, r(rt);
      }
    }, E = (J, Z, W) => {
      const G = [
        ...d
      ];
      G[J] = {
        ...G[J],
        [Z]: W
      }, r(G);
    }, C = (J) => {
      r(d.filter((Z, W) => W !== J));
    }, L = async (J) => {
      var _a;
      const Z = (_a = J.target.files) == null ? void 0 : _a[0];
      if (Z) {
        if (!Z.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const W = await Z.arrayBuffer(), G = new Uint8Array(W), rt = {
          mime_type: Z.type,
          data: G,
          duration_ms: 3e3,
          loop_count: 0
        };
        A(rt);
      }
    }, P = (J, Z) => {
      g && A({
        ...g,
        [J]: Z
      });
    }, gt = () => {
      A(void 0);
    }, bt = (J, Z) => URL.createObjectURL(new Blob([
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
                  children: dm.map(({ value: J, label: Z }) => {
                    const W = s.find((G) => G.picture_type === J);
                    return c.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: W ? c.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          c.jsx("img", {
                            src: bt(W.data, W.mime_type),
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
                                onClick: () => p(J),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: c.jsx(Ye, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : c.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          c.jsx(Ve, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          c.jsx("span", {
                            className: "text-xs font-medium",
                            children: Z
                          }),
                          c.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (G) => x(G, J),
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
                        c.jsx(Ve, {
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
                      c.jsx(Ky, {
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
                            onChange: (W) => E(Z, "variant_type", W.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: vg.map(({ value: W, label: G }) => c.jsx("option", {
                              value: W,
                              children: G
                            }, W))
                          }),
                          c.jsx("input", {
                            value: J.description || "",
                            onChange: (W) => E(Z, "description", W.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          c.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              c.jsx(Tm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              c.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (W) => b(Z, W),
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
                            children: c.jsx(Ye, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      J.data.length > 0 && c.jsx("img", {
                        src: bt(J.data, J.mime_type),
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
                g ? c.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    c.jsx("img", {
                      src: bt(g.data, g.mime_type),
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
                              value: g.duration_ms || 0,
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
                              value: g.loop_count || 0,
                              onChange: (J) => P("loop_count", parseInt(J.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    c.jsxs("button", {
                      onClick: gt,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        c.jsx(Ye, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : c.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    c.jsx(cg, {
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
  function Sg() {
    return {
      parseLRCFormat: (f) => {
        const d = f.split(`
`), r = [];
        return d.forEach((g) => {
          const A = g.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (A) {
            const x = parseInt(A[1]), p = parseInt(A[2]), _ = parseInt(A[3]), b = x * 60 * 1e3 + p * 1e3 + _ * 10, E = A[4].trim();
            r.push([
              E,
              b
            ]);
          }
        }), r.sort((g, A) => g[1] - A[1]), r;
      }
    };
  }
  const mm = {
    language: "eng",
    content_type: "lyrics",
    description: "",
    lines: []
  };
  function Ng({ syncedLyrics: s = [], onSyncedLyricsChange: f, unsyncedLyrics: d = [], onUnsyncedLyricsChange: r }) {
    var _a, _b;
    const [g, A] = ft.useState(0), [x, p] = ft.useState(""), [_, b] = ft.useState(false), E = ft.useRef(null), { parseLRCFormat: C } = Sg(), L = s[g] || mm, P = d[g] ?? "", gt = () => {
      const V = [
        ...s,
        {
          ...mm
        }
      ];
      f(V), r([
        ...d,
        ""
      ]), A(V.length - 1), p("");
    }, bt = (V) => {
      if (s.length < 2) return;
      const lt = s.filter((ue, Wt) => Wt !== V), _t = d.filter((ue, Wt) => Wt !== V), ne = V > 0 ? V - 1 : 0;
      f(lt), r(_t), A(ne), p("");
    }, J = (V) => {
      A(V), p("");
    }, Z = (V, lt) => {
      const _t = [
        ...s
      ];
      _t[g] = {
        ..._t[g],
        [V]: lt
      }, f(_t);
    }, W = (V) => {
      const lt = [
        ...d
      ];
      lt[g] = V, r(lt);
    }, G = () => {
      const V = [
        ...s
      ];
      V[g].lines.push({
        text: "",
        timestamp_ms: 0
      }), f(V);
    }, rt = (V, lt, _t) => {
      const ne = [
        ...s
      ];
      ne[g].lines[V] = {
        text: lt,
        timestamp_ms: _t
      }, f(ne);
    }, Kt = (V) => {
      const lt = [
        ...s
      ];
      lt[g].lines.splice(V, 1), f(lt);
    }, Dt = () => {
      const V = C(x);
      V.length && (Z("lines", V.map(([lt, _t]) => ({
        text: lt,
        timestamp_ms: _t
      }))), b(false), p(""));
    }, I = async (V) => {
      var _a2;
      const lt = (_a2 = V.target.files) == null ? void 0 : _a2[0];
      if (!lt) return;
      const _t = await lt.text();
      p(_t), b(true), V.target.value = "";
    }, qt = (L.lines || []).map((V) => V.text).join(`
`), Jt = () => c.jsxs("div", {
      className: "flex flex-wrap gap-2 mb-3",
      children: [
        s.map((V, lt) => c.jsxs("button", {
          type: "button",
          onClick: () => J(lt),
          className: `btn px-3 py-1 text-xs ${g === lt ? "bg-primary/20 border-primary" : "bg-background border-input/50"} border rounded-full`,
          "data-variant": g === lt ? "solid" : "soft",
          children: [
            V.language || "eng",
            " / ",
            V.content_type || "lyrics",
            s.length > 1 && c.jsx("span", {
              className: "ml-1 text-danger cursor-pointer",
              title: "Delete group",
              onClick: (_t) => {
                _t.stopPropagation(), bt(lt);
              },
              children: c.jsx(Ye, {
                className: "inline h-3 w-3"
              })
            })
          ]
        }, lt)),
        c.jsxs("button", {
          type: "button",
          className: "btn",
          "data-variant": "soft",
          "data-tone": "primary",
          "data-size": "xs",
          onClick: gt,
          children: [
            c.jsx(Ve, {
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
            Jt()
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
                    c.jsx(qs, {
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
                  onClick: () => b((V) => !V),
                  children: [
                    c.jsx(Tm, {
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
                  value: x,
                  onChange: (V) => p(V.target.value),
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
                  onClick: Dt,
                  disabled: !x.trim(),
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
                      value: P || qt,
                      onChange: (V) => W(V.target.value),
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
                        c.jsx(Ve, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                c.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = L.lines) == null ? void 0 : _b.map((V, lt) => c.jsx(jg, {
                    index: lt,
                    text: V.text,
                    timestamp: V.timestamp_ms,
                    onUpdate: rt,
                    onDelete: Kt
                  }, lt))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function jg({ index: s, text: f, timestamp: d, onUpdate: r, onDelete: g }) {
    return c.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        c.jsx("input", {
          value: f,
          onChange: (A) => r(s, A.target.value, d),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm"
        }),
        c.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            c.jsx(Am, {
              className: "h-4 w-4 icon-accent"
            }),
            c.jsx("input", {
              type: "number",
              value: d,
              onChange: (A) => r(s, f, parseInt(A.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm"
            })
          ]
        }),
        c.jsx("button", {
          onClick: () => g(s),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          type: "button",
          children: c.jsx(Ye, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  const hm = [
    {
      value: "intro",
      label: "Intro",
      icon: Zn
    },
    {
      value: "verse",
      label: "Verse",
      icon: My
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: tg
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: Uy
    },
    {
      value: "solo",
      label: "Solo",
      icon: Zy
    },
    {
      value: "outro",
      label: "Outro",
      icon: Iy
    }
  ];
  function Ag({ sectionMarkers: s = [], onSectionMarkersChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, r = (x, p, _) => {
      const b = [
        ...s
      ];
      b[x] = {
        ...b[x],
        [p]: _
      }, f(b);
    }, g = (x) => {
      f(s.filter((p, _) => _ !== x));
    }, A = (x) => {
      const p = Math.floor(x / 1e3), _ = Math.floor(p / 60), b = p % 60, E = Math.floor(x % 1e3 / 10);
      return `${_}:${b.toString().padStart(2, "0")}.${E.toString().padStart(2, "0")}`;
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
                c.jsx(Ve, {
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
              c.jsx(Zn, {
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
          }) : s.map((x, p) => {
            var _a;
            const b = ((_a = hm.find((E) => E.value === x.section_type)) == null ? void 0 : _a.icon) || Zn;
            return c.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                c.jsx(b, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                c.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    c.jsx(Am, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: x.timestamp_ms,
                      onChange: (E) => r(p, "timestamp_ms", Math.max(0, parseInt(E.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    c.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        A(x.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                c.jsx("select", {
                  value: x.section_type,
                  onChange: (E) => r(p, "section_type", E.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: hm.map(({ value: E, label: C }) => c.jsx("option", {
                    value: E,
                    children: C
                  }, E))
                }),
                c.jsx("input", {
                  value: x.label || "",
                  onChange: (E) => r(p, "label", E.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                c.jsx("button", {
                  onClick: () => g(p),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: c.jsx(Ye, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, p);
          })
        })
      ]
    });
  }
  function zg({ bpmMap: s = [], onBpmMapChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, r = (p, _, b) => {
      const E = [
        ...s
      ];
      E[p] = {
        ...E[p],
        [_]: b
      }, f(E);
    }, g = (p) => {
      f(s.filter((_, b) => b !== p));
    }, A = (p) => {
      const _ = Math.floor(p / 1e3), b = Math.floor(_ / 60), E = _ % 60;
      return `${b}:${E.toString().padStart(2, "0")}`;
    }, x = [
      ...s
    ].sort((p, _) => p.timestamp_ms - _.timestamp_ms);
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
                c.jsx(Ve, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: x.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(cm, {
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
                  c.jsx(um, {
                    className: "h-4 w-4"
                  }),
                  c.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      x.map((p, _) => `${A(p.timestamp_ms)} \u2192 ${p.bpm} BPM${_ < x.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              x.map((p, _) => c.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      c.jsx(um, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: p.timestamp_ms,
                        onChange: (b) => r(_, "timestamp_ms", Math.max(0, parseInt(b.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          A(p.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  c.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      c.jsx(cm, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: p.bpm,
                        onChange: (b) => r(_, "bpm", Math.max(1, parseFloat(b.target.value) || 120)),
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
                    onClick: () => g(_),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: c.jsx(Ye, {
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
  function Tg({ keyChanges: s = [], onKeyChangesChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: 0,
          key: ""
        }
      ]);
    }, r = (p, _, b) => {
      const E = [
        ...s
      ];
      E[p] = {
        ...E[p],
        [_]: b
      }, f(E);
    }, g = (p) => {
      f(s.filter((_, b) => b !== p));
    }, A = (p) => {
      const _ = Math.floor(p / 1e3), b = Math.floor(_ / 60), E = _ % 60;
      return `${b}:${E.toString().padStart(2, "0")}`;
    }, x = [
      ...s
    ].sort((p, _) => p.timestamp_ms - _.timestamp_ms);
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
                c.jsx(Ve, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "space-y-3",
          children: x.length === 0 ? c.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              c.jsx(im, {
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
                  c.jsx(zm, {
                    className: "h-4 w-4"
                  }),
                  c.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      x.map((p, _) => `${A(p.timestamp_ms)} \u2192 ${p.key || "?"}${_ < x.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              x.map((p, _) => c.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      c.jsx(im, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: p.timestamp_ms,
                        onChange: (b) => r(_, "timestamp_ms", Math.max(0, parseInt(b.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          A(p.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  c.jsx("div", {
                    className: "flex items-center gap-2",
                    children: c.jsx("input", {
                      type: "text",
                      value: p.key,
                      onChange: (b) => r(_, "key", b.target.value),
                      placeholder: "Key (e.g. C#m)",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    })
                  }),
                  c.jsx("button", {
                    onClick: () => g(_),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    type: "button",
                    children: c.jsx(Ye, {
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
  function Eg({ popularimeter: s, onChange: f }) {
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
                  onChange: (d) => f("email", d.target.value),
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
                  onChange: (d) => f("rating", Number(d.target.value))
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
                  onChange: (d) => f("play_count", Math.max(0, Number(d.target.value))),
                  placeholder: "0"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function wg({ userText: s = [], onUserTextChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          description: "",
          value: ""
        }
      ]);
    }, r = (A, x, p) => {
      const _ = [
        ...s
      ];
      _[A] = {
        ..._[A],
        [x]: p
      }, f(_);
    }, g = (A) => {
      f(s.filter((x, p) => p !== A));
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
                c.jsx(Ve, {
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
              c.jsx(zm, {
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
          }) : s.map((A, x) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "text",
                value: A.description,
                onChange: (p) => r(x, "description", p.target.value),
                placeholder: "Label",
                className: "w-36 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "text",
                value: A.value,
                onChange: (p) => r(x, "value", p.target.value),
                placeholder: "Value",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 255
              }),
              c.jsx("button", {
                onClick: () => g(x),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(Ye, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, x))
        })
      ]
    });
  }
  function Mg({ creatorNotes: s = [], onCreatorNotesChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: void 0,
          text: ""
        }
      ]);
    }, r = (x, p, _) => {
      const b = [
        ...s
      ];
      b[x] = {
        ...b[x],
        [p]: _
      }, f(b);
    }, g = (x) => {
      f(s.filter((p, _) => _ !== x));
    }, A = (x) => {
      if (x == null) return "\u2013";
      const p = Math.floor(x / 1e3), _ = Math.floor(p / 60), b = p % 60;
      return `${_}:${b.toString().padStart(2, "0")}`;
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
                c.jsx(Ve, {
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
              c.jsx(rg, {
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
          }) : s.map((x, p) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "number",
                value: x.timestamp_ms ?? "",
                onChange: (_) => r(p, "timestamp_ms", _.target.value === "" ? void 0 : Math.max(0, parseInt(_.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              c.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  A(x.timestamp_ms),
                  ")"
                ]
              }),
              c.jsx("textarea", {
                value: x.text,
                onChange: (_) => r(p, "text", _.target.value),
                placeholder: "Note text",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50 min-h-8",
                maxLength: 512
              }),
              c.jsx("button", {
                onClick: () => g(p),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(Ye, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, p))
        })
      ]
    });
  }
  function Og({ collaborationCredits: s = [], onCollaborationCreditsChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          role: "",
          name: "",
          timestamp_ms: void 0
        }
      ]);
    }, r = (x, p, _) => {
      const b = [
        ...s
      ];
      b[x] = {
        ...b[x],
        [p]: _
      }, f(b);
    }, g = (x) => {
      f(s.filter((p, _) => _ !== x));
    }, A = (x) => {
      if (x == null) return "\u2013";
      const p = Math.floor(x / 1e3), _ = Math.floor(p / 60), b = p % 60;
      return `${_}:${b.toString().padStart(2, "0")}`;
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
                c.jsx(Ve, {
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
              c.jsx(bg, {
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
          }) : s.map((x, p) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "text",
                value: x.role,
                onChange: (_) => r(p, "role", _.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 40
              }),
              c.jsx("input", {
                type: "text",
                value: x.name,
                onChange: (_) => r(p, "name", _.target.value),
                placeholder: "Name",
                className: "w-48 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "number",
                value: x.timestamp_ms ?? "",
                onChange: (_) => r(p, "timestamp_ms", _.target.value === "" ? void 0 : Math.max(0, parseInt(_.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              c.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  A(x.timestamp_ms),
                  ")"
                ]
              }),
              c.jsx("button", {
                onClick: () => g(p),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(Ye, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, p))
        })
      ]
    });
  }
  function Ug({ disabled: s, isProcessing: f, fileName: d, onProcess: r }) {
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
            onClick: r,
            disabled: s,
            className: "btn",
            "data-variant": "gradient",
            "data-size": "lg",
            children: f ? c.jsxs(c.Fragment, {
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
                  children: c.jsx(Gy, {
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
  function ym({ type: s, message: f }) {
    const d = s === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return c.jsx("div", {
      className: `${d} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: f
    });
  }
  const Em = "floeditor-theme", si = () => typeof window < "u" && typeof document < "u", Dg = () => {
    if (!si()) return "auto";
    const s = window.localStorage.getItem(Em);
    return s === "light" || s === "dark" || s === "auto" ? s : "auto";
  };
  function Cg() {
    const [s, f] = ft.useState(Dg), [d, r] = ft.useState("light");
    return ft.useEffect(() => {
      if (!si()) return;
      const x = window.matchMedia("(prefers-color-scheme: dark)"), p = () => r(x.matches ? "dark" : "light");
      return p(), x.addEventListener("change", p), () => {
        x.removeEventListener("change", p);
      };
    }, []), ft.useEffect(() => {
      if (!si()) return;
      const x = document.documentElement;
      (s === "auto" ? d : s) === "dark" ? (x.classList.add("dark"), x.style.colorScheme = "dark") : (x.classList.remove("dark"), x.style.colorScheme = "light");
    }, [
      s,
      d
    ]), {
      theme: s,
      resolvedTheme: s === "auto" ? d : s,
      setTheme: (x) => {
        f(x), si() && window.localStorage.setItem(Em, x);
      }
    };
  }
  const gm = [
    {
      value: "auto",
      label: "Auto",
      icon: lg
    },
    {
      value: "light",
      label: "Light",
      icon: dg
    },
    {
      value: "dark",
      label: "Dark",
      icon: ng
    }
  ];
  function Rg() {
    var _a;
    const { theme: s, setTheme: f } = Cg(), d = ((_a = gm.find((r) => r.value === s)) == null ? void 0 : _a.label) ?? "Auto";
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
          children: gm.map(({ value: r, label: g, icon: A }) => {
            const x = s === r;
            return c.jsxs("button", {
              type: "button",
              onClick: () => f(r),
              "aria-pressed": x,
              "aria-label": `Switch theme to ${g}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": x,
              children: [
                c.jsx(A, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                c.jsx("span", {
                  children: g
                })
              ]
            }, r);
          })
        })
      ]
    });
  }
  let M;
  function Hg(s) {
    const f = M.__externref_table_alloc();
    return M.__wbindgen_externrefs.set(f, s), f;
  }
  function Ys(s) {
    const f = typeof s;
    if (f == "number" || f == "boolean" || s == null) return `${s}`;
    if (f == "string") return `"${s}"`;
    if (f == "symbol") {
      const g = s.description;
      return g == null ? "Symbol" : `Symbol(${g})`;
    }
    if (f == "function") {
      const g = s.name;
      return typeof g == "string" && g.length > 0 ? `Function(${g})` : "Function";
    }
    if (Array.isArray(s)) {
      const g = s.length;
      let A = "[";
      g > 0 && (A += Ys(s[0]));
      for (let x = 1; x < g; x++) A += ", " + Ys(s[x]);
      return A += "]", A;
    }
    const d = /\[object ([^\]]+)\]/.exec(toString.call(s));
    let r;
    if (d && d.length > 1) r = d[1];
    else return toString.call(s);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(s) + ")";
    } catch {
      return "Object";
    }
    return s instanceof Error ? `${s.name}: ${s.message}
${s.stack}` : r;
  }
  function Xs(s, f) {
    return s = s >>> 0, wm().subarray(s / 4, s / 4 + f);
  }
  function je(s, f) {
    return s = s >>> 0, Qa().subarray(s / 1, s / 1 + f);
  }
  let ea = null;
  function Ze() {
    return (ea === null || ea.buffer.detached === true || ea.buffer.detached === void 0 && ea.buffer !== M.memory.buffer) && (ea = new DataView(M.memory.buffer)), ea;
  }
  let Gn = null;
  function wm() {
    return (Gn === null || Gn.byteLength === 0) && (Gn = new Float32Array(M.memory.buffer)), Gn;
  }
  function Xa(s, f) {
    return s = s >>> 0, qg(s, f);
  }
  let Xn = null;
  function Qa() {
    return (Xn === null || Xn.byteLength === 0) && (Xn = new Uint8Array(M.memory.buffer)), Xn;
  }
  function Ln(s, f) {
    try {
      return s.apply(this, f);
    } catch (d) {
      const r = Hg(d);
      M.__wbindgen_exn_store(r);
    }
  }
  function Ne(s) {
    return s == null;
  }
  function Zt(s, f) {
    const d = f(s.length * 1, 1) >>> 0;
    return Qa().set(s, d / 1), dt = s.length, d;
  }
  function Qs(s, f) {
    const d = f(s.length * 4, 4) >>> 0;
    return wm().set(s, d / 4), dt = s.length, d;
  }
  function la(s, f, d) {
    if (d === void 0) {
      const p = Qn.encode(s), _ = f(p.length, 1) >>> 0;
      return Qa().subarray(_, _ + p.length).set(p), dt = p.length, _;
    }
    let r = s.length, g = f(r, 1) >>> 0;
    const A = Qa();
    let x = 0;
    for (; x < r; x++) {
      const p = s.charCodeAt(x);
      if (p > 127) break;
      A[g + x] = p;
    }
    if (x !== r) {
      x !== 0 && (s = s.slice(x)), g = d(g, r, r = x + s.length * 3, 1) >>> 0;
      const p = Qa().subarray(g + x, g + r), _ = Qn.encodeInto(s, p);
      x += _.written, g = d(g, r, x, 1) >>> 0;
    }
    return dt = x, g;
  }
  function St(s) {
    const f = M.__wbindgen_externrefs.get(s);
    return M.__externref_table_dealloc(s), f;
  }
  let fi = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  fi.decode();
  const Bg = 2146435072;
  let Rs = 0;
  function qg(s, f) {
    return Rs += f, Rs >= Bg && (fi = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), fi.decode(), Rs = f), fi.decode(Qa().subarray(s, s + f));
  }
  const Qn = new TextEncoder();
  "encodeInto" in Qn || (Qn.encodeInto = function(s, f) {
    const d = Qn.encode(s);
    return f.set(d), {
      read: s.length,
      written: d.length
    };
  });
  let dt = 0;
  const bm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_audioinfo_free(s >>> 0, 1)), pm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_wasmstreamingdecoder_free(s >>> 0, 1));
  class Za {
    static __wrap(f) {
      f = f >>> 0;
      const d = Object.create(Za.prototype);
      return d.__wbg_ptr = f, bm.register(d, d.__wbg_ptr, d), d;
    }
    __destroy_into_raw() {
      const f = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bm.unregister(this), f;
    }
    free() {
      const f = this.__destroy_into_raw();
      M.__wbg_audioinfo_free(f, 0);
    }
    get sample_rate() {
      return M.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
    }
    set sample_rate(f) {
      M.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, f);
    }
    get channels() {
      return M.__wbg_get_audioinfo_channels(this.__wbg_ptr);
    }
    set channels(f) {
      M.__wbg_set_audioinfo_channels(this.__wbg_ptr, f);
    }
    get bit_depth() {
      return M.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
    }
    set bit_depth(f) {
      M.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, f);
    }
    get total_frames() {
      const f = M.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
      return BigInt.asUintN(64, f);
    }
    set total_frames(f) {
      M.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, f);
    }
    get duration_secs() {
      return M.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
    }
    set duration_secs(f) {
      M.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, f);
    }
    get file_size() {
      return M.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
    }
    set file_size(f) {
      M.__wbg_set_audioinfo_file_size(this.__wbg_ptr, f);
    }
    get compression_ratio() {
      return M.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
    }
    set compression_ratio(f) {
      M.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, f);
    }
    get crc_valid() {
      return M.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
    }
    set crc_valid(f) {
      M.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, f);
    }
    get is_lossy() {
      return M.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
    }
    set is_lossy(f) {
      M.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, f);
    }
    get lossy_quality() {
      return M.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
    }
    set lossy_quality(f) {
      M.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, f);
    }
    get version() {
      let f, d;
      try {
        const r = M.audioinfo_version(this.__wbg_ptr);
        return f = r[0], d = r[1], Xa(r[0], r[1]);
      } finally {
        M.__wbindgen_free(f, d, 1);
      }
    }
  }
  Symbol.dispose && (Za.prototype[Symbol.dispose] = Za.prototype.free);
  class Ls {
    __destroy_into_raw() {
      const f = this.__wbg_ptr;
      return this.__wbg_ptr = 0, pm.unregister(this), f;
    }
    free() {
      const f = this.__destroy_into_raw();
      M.__wbg_wasmstreamingdecoder_free(f, 0);
    }
    next_frame() {
      const f = M.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (f[2]) throw St(f[1]);
      return St(f[0]);
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
      const f = M.wasmstreamingdecoder_decode_available(this.__wbg_ptr);
      if (f[3]) throw St(f[2]);
      var d = Xs(f[0], f[1]).slice();
      return M.__wbindgen_free(f[0], f[1] * 4, 4), d;
    }
    current_frame_index() {
      return M.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const f = M.wasmstreamingdecoder_new();
      return this.__wbg_ptr = f >>> 0, pm.register(this, this.__wbg_ptr, this), this;
    }
    feed(f) {
      const d = Zt(f, M.__wbindgen_malloc), r = dt, g = M.wasmstreamingdecoder_feed(this.__wbg_ptr, d, r);
      if (g[2]) throw St(g[1]);
      return g[0] !== 0;
    }
    reset() {
      M.wasmstreamingdecoder_reset(this.__wbg_ptr);
    }
    state() {
      let f, d;
      try {
        const r = M.wasmstreamingdecoder_state(this.__wbg_ptr);
        return f = r[0], d = r[1], Xa(r[0], r[1]);
      } finally {
        M.__wbindgen_free(f, d, 1);
      }
    }
    get_info() {
      const f = M.wasmstreamingdecoder_get_info(this.__wbg_ptr);
      if (f[2]) throw St(f[1]);
      return St(f[0]);
    }
    is_ready() {
      return M.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return M.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (Ls.prototype[Symbol.dispose] = Ls.prototype.free);
  function Yg(s, f, d) {
    var r = Ne(s) ? 0 : la(s, M.__wbindgen_malloc, M.__wbindgen_realloc), g = dt, A = Ne(f) ? 0 : la(f, M.__wbindgen_malloc, M.__wbindgen_realloc), x = dt, p = Ne(d) ? 0 : la(d, M.__wbindgen_malloc, M.__wbindgen_realloc), _ = dt;
    const b = M.create_metadata(r, g, A, x, p, _);
    if (b[3]) throw St(b[2]);
    var E = je(b[0], b[1]).slice();
    return M.__wbindgen_free(b[0], b[1] * 1, 1), E;
  }
  function Mm(s) {
    const f = M.create_metadata_from_object(s);
    if (f[3]) throw St(f[2]);
    var d = je(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), d;
  }
  function Lg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.decode(f, d);
    if (r[3]) throw St(r[2]);
    var g = Xs(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 4, 4), g;
  }
  function Gg(s, f, d, r, g) {
    const A = Qs(s, M.__wbindgen_malloc), x = dt;
    var p = Ne(g) ? 0 : Zt(g, M.__wbindgen_malloc), _ = dt;
    const b = M.encode(A, x, f, d, r, p, _);
    if (b[3]) throw St(b[2]);
    var E = je(b[0], b[1]).slice();
    return M.__wbindgen_free(b[0], b[1] * 1, 1), E;
  }
  function Xg(s, f, d, r, g, A) {
    const x = Qs(s, M.__wbindgen_malloc), p = dt;
    var _ = Ne(A) ? 0 : Zt(A, M.__wbindgen_malloc), b = dt;
    const E = M.encode_lossy(x, p, f, d, r, g, _, b);
    if (E[3]) throw St(E[2]);
    var C = je(E[0], E[1]).slice();
    return M.__wbindgen_free(E[0], E[1] * 1, 1), C;
  }
  function Qg(s, f, d, r, g, A) {
    const x = Qs(s, M.__wbindgen_malloc), p = dt;
    var _ = Ne(A) ? 0 : Zt(A, M.__wbindgen_malloc), b = dt;
    const E = M.encode_with_bitrate(x, p, f, d, r, g, _, b);
    if (E[3]) throw St(E[2]);
    var C = je(E[0], E[1]).slice();
    return M.__wbindgen_free(E[0], E[1] * 1, 1), C;
  }
  function Zg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.get_cover_art(f, d);
    if (r[2]) throw St(r[1]);
    return St(r[0]);
  }
  function Zs(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.get_metadata(f, d);
    if (r[2]) throw St(r[1]);
    return St(r[0]);
  }
  function Vg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.get_metadata_bytes(f, d);
    if (r[3]) throw St(r[2]);
    var g = je(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), g;
  }
  function kg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.get_section_markers(f, d);
    if (r[2]) throw St(r[1]);
    return St(r[0]);
  }
  function Kg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.get_synced_lyrics(f, d);
    if (r[2]) throw St(r[1]);
    return St(r[0]);
  }
  function Jg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.get_waveform_data(f, d);
    if (r[2]) throw St(r[1]);
    return St(r[0]);
  }
  function Wg(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt;
    return M.has_metadata(f, d) !== 0;
  }
  function Om(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.info(f, d);
    if (r[2]) throw St(r[1]);
    return Za.__wrap(r[0]);
  }
  function $g(s, f) {
    const d = Zt(s, M.__wbindgen_malloc), r = dt, g = M.set_metadata(d, r, f);
    if (g[3]) throw St(g[2]);
    var A = je(g[0], g[1]).slice();
    return M.__wbindgen_free(g[0], g[1] * 1, 1), A;
  }
  function Fg(s, f, d) {
    var r = Ne(s) ? 0 : Zt(s, M.__wbindgen_malloc), g = dt;
    const A = la(f, M.__wbindgen_malloc, M.__wbindgen_realloc), x = dt, p = M.set_metadata_field(r, g, A, x, d);
    if (p[3]) throw St(p[2]);
    var _ = je(p[0], p[1]).slice();
    return M.__wbindgen_free(p[0], p[1] * 1, 1), _;
  }
  function Ig(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.strip_metadata(f, d);
    if (r[3]) throw St(r[2]);
    var g = je(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), g;
  }
  function Um(s, f) {
    const d = Zt(s, M.__wbindgen_malloc), r = dt, g = Zt(f, M.__wbindgen_malloc), A = dt, x = M.update_metadata(d, r, g, A);
    if (x[3]) throw St(x[2]);
    var p = je(x[0], x[1]).slice();
    return M.__wbindgen_free(x[0], x[1] * 1, 1), p;
  }
  function Dm(s) {
    const f = Zt(s, M.__wbindgen_malloc), d = dt, r = M.validate(f, d);
    if (r[2]) throw St(r[1]);
    return r[0] !== 0;
  }
  function Pg() {
    let s, f;
    try {
      const d = M.version();
      return s = d[0], f = d[1], Xa(d[0], d[1]);
    } finally {
      M.__wbindgen_free(s, f, 1);
    }
  }
  const tb = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function eb(s, f) {
    if (typeof Response == "function" && s instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(s, f);
      } catch (r) {
        if (s.ok && tb.has(s.type) && s.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const d = await s.arrayBuffer();
      return await WebAssembly.instantiate(d, f);
    } else {
      const d = await WebAssembly.instantiate(s, f);
      return d instanceof WebAssembly.Instance ? {
        instance: d,
        module: s
      } : d;
    }
  }
  function Cm() {
    const s = {};
    return s.wbg = {}, s.wbg.__wbg_Error_52673b7de5a0ca89 = function(f, d) {
      return Error(Xa(f, d));
    }, s.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(f) {
      return Number(f);
    }, s.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(f, d) {
      const r = String(d), g = la(r, M.__wbindgen_malloc, M.__wbindgen_realloc), A = dt;
      Ze().setInt32(f + 4, A, true), Ze().setInt32(f + 0, g, true);
    }, s.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(f, d) {
      const r = d, g = typeof r == "bigint" ? r : void 0;
      Ze().setBigInt64(f + 8, Ne(g) ? BigInt(0) : g, true), Ze().setInt32(f + 0, !Ne(g), true);
    }, s.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(f) {
      const d = f, r = typeof d == "boolean" ? d : void 0;
      return Ne(r) ? 16777215 : r ? 1 : 0;
    }, s.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(f, d) {
      const r = Ys(d), g = la(r, M.__wbindgen_malloc, M.__wbindgen_realloc), A = dt;
      Ze().setInt32(f + 4, A, true), Ze().setInt32(f + 0, g, true);
    }, s.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(f, d) {
      return f in d;
    }, s.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(f) {
      return typeof f == "bigint";
    }, s.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(f) {
      return typeof f == "function";
    }, s.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(f) {
      return f === null;
    }, s.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(f) {
      const d = f;
      return typeof d == "object" && d !== null;
    }, s.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(f) {
      return typeof f == "string";
    }, s.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(f) {
      return f === void 0;
    }, s.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(f, d) {
      return f === d;
    }, s.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(f, d) {
      return f == d;
    }, s.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(f, d) {
      const r = d, g = typeof r == "number" ? r : void 0;
      Ze().setFloat64(f + 8, Ne(g) ? 0 : g, true), Ze().setInt32(f + 0, !Ne(g), true);
    }, s.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(f, d) {
      const r = d, g = typeof r == "string" ? r : void 0;
      var A = Ne(g) ? 0 : la(g, M.__wbindgen_malloc, M.__wbindgen_realloc), x = dt;
      Ze().setInt32(f + 4, x, true), Ze().setInt32(f + 0, A, true);
    }, s.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(f, d) {
      throw new Error(Xa(f, d));
    }, s.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Ln(function(f, d) {
        return f.call(d);
      }, arguments);
    }, s.wbg.__wbg_done_62ea16af4ce34b24 = function(f) {
      return f.done;
    }, s.wbg.__wbg_entries_83c79938054e065f = function(f) {
      return Object.entries(f);
    }, s.wbg.__wbg_from_29a8414a7a7cd19d = function(f) {
      return Array.from(f);
    }, s.wbg.__wbg_get_6b7bd52aca3f9671 = function(f, d) {
      return f[d >>> 0];
    }, s.wbg.__wbg_get_af9dab7e9603ea93 = function() {
      return Ln(function(f, d) {
        return Reflect.get(f, d);
      }, arguments);
    }, s.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(f, d) {
      return f[d];
    }, s.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(f) {
      let d;
      try {
        d = f instanceof ArrayBuffer;
      } catch {
        d = false;
      }
      return d;
    }, s.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(f) {
      let d;
      try {
        d = f instanceof Uint8Array;
      } catch {
        d = false;
      }
      return d;
    }, s.wbg.__wbg_isArray_51fd9e6422c0a395 = function(f) {
      return Array.isArray(f);
    }, s.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(f) {
      return Number.isSafeInteger(f);
    }, s.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
      return Symbol.iterator;
    }, s.wbg.__wbg_length_22ac23eaec9d8053 = function(f) {
      return f.length;
    }, s.wbg.__wbg_length_86ce4877baf913bb = function(f) {
      return f.length;
    }, s.wbg.__wbg_length_d45040a40c570362 = function(f) {
      return f.length;
    }, s.wbg.__wbg_new_1ba21ce319a06297 = function() {
      return new Object();
    }, s.wbg.__wbg_new_25f239778d6112b9 = function() {
      return new Array();
    }, s.wbg.__wbg_new_6421f6084cc5bc5a = function(f) {
      return new Uint8Array(f);
    }, s.wbg.__wbg_new_b546ae120718850e = function() {
      return /* @__PURE__ */ new Map();
    }, s.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(f, d) {
      return new Uint8Array(je(f, d));
    }, s.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(f) {
      return new Float32Array(f >>> 0);
    }, s.wbg.__wbg_next_138a17bbf04e926c = function(f) {
      return f.next;
    }, s.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Ln(function(f) {
        return f.next();
      }, arguments);
    }, s.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(f, d, r) {
      Uint8Array.prototype.set.call(je(f, d), r);
    }, s.wbg.__wbg_set_3f1d0b984ed272ed = function(f, d, r) {
      f[d] = r;
    }, s.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Ln(function(f, d, r) {
        return Reflect.set(f, d, r);
      }, arguments);
    }, s.wbg.__wbg_set_7df433eea03a5c14 = function(f, d, r) {
      f[d >>> 0] = r;
    }, s.wbg.__wbg_set_cb0e657d1901c8d8 = function(f, d, r) {
      f.set(Xs(d, r));
    }, s.wbg.__wbg_set_efaaf145b9377369 = function(f, d, r) {
      return f.set(d, r);
    }, s.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Ln(function(f) {
        return JSON.stringify(f);
      }, arguments);
    }, s.wbg.__wbg_value_57b7b035e117f7ee = function(f) {
      return f.value;
    }, s.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(f, d) {
      return Xa(f, d);
    }, s.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(f) {
      return BigInt.asUintN(64, f);
    }, s.wbg.__wbindgen_cast_cb9088102bce6b30 = function(f, d) {
      return je(f, d);
    }, s.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(f) {
      return f;
    }, s.wbg.__wbindgen_init_externref_table = function() {
      const f = M.__wbindgen_externrefs, d = f.grow(4);
      f.set(0, void 0), f.set(d + 0, void 0), f.set(d + 1, null), f.set(d + 2, true), f.set(d + 3, false);
    }, s;
  }
  function Rm(s, f) {
    return M = s.exports, ri.__wbindgen_wasm_module = f, ea = null, Gn = null, Xn = null, M.__wbindgen_start(), M;
  }
  function lb(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module: s } = s : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const f = Cm();
    s instanceof WebAssembly.Module || (s = new WebAssembly.Module(s));
    const d = new WebAssembly.Instance(s, f);
    return Rm(d, s);
  }
  async function ri(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module_or_path: s } = s : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof s > "u" && (s = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const f = Cm();
    (typeof s == "string" || typeof Request == "function" && s instanceof Request || typeof URL == "function" && s instanceof URL) && (s = fetch(s));
    const { instance: d, module: r } = await eb(await s, f);
    return Rm(d, r);
  }
  const _m = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Za,
    WasmStreamingDecoder: Ls,
    create_metadata: Yg,
    create_metadata_from_object: Mm,
    decode: Lg,
    default: ri,
    encode: Gg,
    encode_lossy: Xg,
    encode_with_bitrate: Qg,
    get_cover_art: Zg,
    get_metadata: Zs,
    get_metadata_bytes: Vg,
    get_section_markers: kg,
    get_synced_lyrics: Kg,
    get_waveform_data: Jg,
    has_metadata: Wg,
    info: Om,
    initSync: lb,
    set_metadata: $g,
    set_metadata_field: Fg,
    strip_metadata: Ig,
    update_metadata: Um,
    validate: Dm,
    version: Pg
  }, Symbol.toStringTag, {
    value: "Module"
  })), ab = {
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
  function nb() {
    const [s, f] = ft.useState(false), [d, r] = ft.useState(false);
    return ft.useEffect(() => {
      (async () => {
        try {
          await ri(), r(true);
        } catch (E) {
          console.error("Failed to initialize flo\u2122 WASM:", E);
        }
      })();
    }, []), {
      isProcessing: s,
      isInitialized: d,
      loadMetadata: async (b) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const E = await b.arrayBuffer(), C = new Uint8Array(E);
          return Zs(C);
        } catch (E) {
          return console.error("Failed to load flo\u2122 metadata:", E), null;
        }
      },
      updateMetadata: async (b, E) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        f(true);
        try {
          const C = Mm(E), L = Um(b, C);
          return f(false), L;
        } catch (C) {
          return console.error("Failed to update flo\u2122 metadata:", C), f(false), null;
        }
      },
      downloadFile: (b, E) => {
        const C = new Blob([
          b
        ], {
          type: "application/octet-stream"
        }), L = URL.createObjectURL(C), P = document.createElement("a");
        P.href = L, P.download = E, P.click(), URL.revokeObjectURL(L);
      },
      validateFile: (b) => d ? Dm(b) : false,
      resetMetadata: () => ({
        ...ab
      })
    };
  }
  function ub() {
    const [s, f] = ft.useState(false);
    return {
      isLoading: s,
      loadFloFile: async (r) => {
        f(true);
        try {
          if (!r.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await ri();
          const g = await r.arrayBuffer(), A = new Uint8Array(g), x = Zs(A), p = Om(A), _ = p ? {
            sample_rate: p.sample_rate,
            channels: p.channels,
            bit_depth: p.bit_depth,
            total_frames: Number(p.total_frames),
            duration_secs: p.duration_secs,
            file_size: p.file_size,
            compression_ratio: p.compression_ratio,
            crc_valid: p.crc_valid,
            is_lossy: p.is_lossy,
            lossy_quality: p.lossy_quality,
            version: p.version
          } : null;
          return {
            metadata: x,
            audioInfo: _,
            error: null
          };
        } catch (g) {
          return console.error("Failed to load flo\u2122 file:", g), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${g instanceof Error ? g.message : "Unknown error"}`
          };
        } finally {
          f(false);
        }
      }
    };
  }
  const Hs = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, vm = {
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
  function xm(s, f, d, r = 50) {
    const g = Math.floor(f / r), A = Math.floor(s.length / (g * d)), x = [];
    for (let p = 0; p < A; p++) for (let _ = 0; _ < d; _++) {
      let b = 0;
      for (let E = 0; E < g; E++) {
        const C = p * g * d + E * d + _;
        C < s.length && (b = Math.max(b, Math.abs(s[C])));
      }
      x.push(b);
    }
    return {
      peaks_per_second: r,
      channels: d,
      peaks: x
    };
  }
  function ib({ waveform: s, onRegenerate: f }) {
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
            f && c.jsx("button", {
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              onClick: f,
              type: "button",
              children: "Regenerate"
            })
          ]
        }),
        c.jsx("div", {
          children: s && s.peaks && s.peaks.length > 0 ? c.jsx(cb, {
            waveform: s
          }) : c.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              c.jsx(Zn, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        c.jsx(sb, {
          waveform: s
        })
      ]
    });
  }
  function cb({ waveform: s, width: f = 600, height: d = 80 }) {
    const { peaks: r, channels: g } = s, A = Math.floor(r.length / g);
    function x(_) {
      return Array.from({
        length: A
      }, (b, E) => {
        const C = Math.floor(E / (A - 1) * (f - 2)) + 1, L = Math.floor((1 - (r[E * g + _] || 0)) * (d - 10)) + 5;
        return `${C},${L}`;
      }).join(" ");
    }
    function p() {
      const _ = Array.from({
        length: A
      }, (E, C) => {
        const L = Math.floor(C / (A - 1) * (f - 2)) + 1, P = r[C * g] || 0, gt = Math.floor((1 - P) * (d / 2 - 4)) + d / 2;
        return `${L},${gt}`;
      }), b = Array.from({
        length: A
      }, (E, C) => {
        const L = A - 1 - C, P = Math.floor(L / (A - 1) * (f - 2)) + 1, gt = r[L * g] || 0, bt = Math.floor((1 + gt) * (d / 2 - 4)) + 4;
        return `${P},${bt}`;
      });
      return [
        ..._,
        ...b,
        _[0]
      ].join(" ");
    }
    return c.jsx("div", {
      style: {
        width: f,
        maxWidth: "100%"
      },
      className: "overflow-x-auto",
      children: c.jsxs("svg", {
        className: "block rounded border bg-background shadow",
        width: f,
        height: d,
        viewBox: `0 0 ${f} ${d}`,
        "aria-label": "Waveform",
        role: "img",
        children: [
          g === 1 && c.jsx("polygon", {
            points: p(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          c.jsx("polyline", {
            points: x(0),
            stroke: "#db2777",
            strokeWidth: g > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          g > 1 && c.jsx("polyline", {
            points: x(1),
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
  function sb({ waveform: s }) {
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
  const Hm = [
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
  ], Bm = [
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
  ], qm = [
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
  ], Ym = [
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
  ], fb = [
    {
      name: "Structure",
      fields: Hm
    },
    {
      name: "Sorting & Ownership",
      fields: Bm
    },
    {
      name: "Links",
      fields: qm
    },
    {
      name: "Timing & Broadcast",
      fields: Ym
    }
  ], Sm = [
    ...Hm,
    ...Bm,
    ...qm,
    ...Ym
  ];
  function rb({ metadata: s, onMetadataChange: f }) {
    const [d, r] = ft.useState(false), g = Sm.filter(({ key: p }) => {
      const _ = s[p];
      return typeof _ == "string" && _.trim().length > 0 || typeof _ == "number" && !isNaN(_);
    }).length, A = Sm.length, x = ({ key: p, label: _, placeholder: b, type: E, colSpan: C }) => {
      const L = s[p];
      return L != null && typeof L != "string" && typeof L != "number" ? null : c.jsxs("div", {
        className: `space-y-2 ${C === "full" ? "md:col-span-2" : ""}`,
        children: [
          c.jsx("label", {
            htmlFor: p,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: _
          }),
          c.jsx("input", {
            id: p,
            value: L ?? "",
            onChange: (P) => f(p, E === "number" ? P.target.value === "" ? void 0 : parseInt(P.target.value) || 0 : P.target.value),
            type: E ?? "text",
            placeholder: b,
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, p);
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
                g,
                " / ",
                A,
                " fields filled"
              ]
            })
          ]
        }),
        c.jsx("button", {
          type: "button",
          className: "flex items-center w-full gap-2 text-lg font-semibold mb-4 select-none",
          onClick: () => r((p) => !p),
          "aria-expanded": d,
          children: c.jsx("span", {
            className: "ml-auto",
            children: d ? c.jsx(Hy, {
              className: "h-5 w-5"
            }) : c.jsx(qy, {
              className: "h-5 w-5"
            })
          })
        }),
        d && c.jsxs("div", {
          className: "space-y-8",
          children: [
            fb.map(({ name: p, fields: _ }) => c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: p
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: _.map(x)
                })
              ]
            }, p)),
            c.jsx("p", {
              className: "text-xs text-muted-foreground mt-4",
              children: "These fields are optional and rarely used; fill in only if needed for advanced use cases, library sorting, or publishing metadata."
            })
          ]
        })
      ]
    });
  }
  const Bs = [
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
  function ob(s) {
    return typeof s == "string" && s.trim().length > 0 || typeof s == "number" ? s : c.jsx("span", {
      className: "text-muted-foreground",
      children: "\u2013"
    });
  }
  function db({ metadata: s }) {
    const f = Bs.length, d = Bs.filter(({ key: r }) => {
      const g = s[r];
      return typeof g == "string" && g.trim().length > 0 || typeof g == "number" && g !== void 0 && g !== null;
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
                f,
                " fields filled"
              ]
            })
          ]
        }),
        c.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Bs.map(({ key: r, label: g }) => c.jsxs("div", {
            className: "space-y-1",
            children: [
              c.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: g
              }),
              c.jsx("div", {
                className: "font-mono text-sm bg-primary/5 rounded px-2 py-1 border",
                children: ob(s[r])
              })
            ]
          }, r))
        })
      ]
    });
  }
  function mb() {
    var _a, _b, _c;
    const [s, f] = ft.useState(null), [, d] = ft.useState(""), [r, g] = ft.useState(false), [A, x] = ft.useState(null), [p, _] = ft.useState(null), [b, E] = ft.useState(""), [C, L] = ft.useState(null), { isProcessing: P, updateMetadata: gt, downloadFile: bt, resetMetadata: J } = nb(), [Z, W] = ft.useState(null), [G, rt] = ft.useState(() => ({
      ...vm
    })), [Kt, Dt] = ft.useState(null), [I, qt] = ft.useState(() => ({
      ...Hs
    })), Jt = ft.useRef(""), { isLoading: V, loadFloFile: lt } = ub();
    ft.useEffect(() => {
      typeof window < "u" && r && Cs(() => import("./eruda-CVFtS-6n.js").then((H) => H.e), [], import.meta.url).then((H) => {
        H.default.init(), H.default.show();
      });
    }, [
      r
    ]);
    const ne = [
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
        value: Kt ? "Attached" : "Not added",
        helper: Kt ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ], ue = ft.useCallback((H) => `${H.name}:${H.lastModified}:${H.size}`, []), Wt = ft.useCallback(async () => {
      if (!(!C || !Z)) try {
        const h = await (await Cs(() => Promise.resolve().then(() => _m), void 0, import.meta.url)).decode(C), T = xm(h, Z.sample_rate, Z.channels);
        rt((R) => ({
          ...R,
          waveform_data: T
        })), _("Waveform re-generated from audio data.");
      } catch {
        x("Could not re-generate waveform.");
      }
    }, [
      C,
      Z
    ]), O = ft.useCallback(async (H) => {
      var _a2, _b2, _c2;
      if (!H) {
        Jt.current = "", f(null), L(null), rt(J()), Dt(null), qt({
          ...Hs
        }), d(""), E(""), _(null), x(null), W(null);
        return;
      }
      if (!H.name.toLowerCase().endsWith(".flo")) {
        x("Please upload a valid .flo file"), _(null);
        return;
      }
      const T = ue(H);
      Jt.current = T, f(H), x(null), _("File loaded. Reading embedded tags..."), E("Scanning embedded metadata..."), rt(J()), Dt(null), qt({
        ...Hs
      }), d(""), W(null);
      try {
        const { metadata: R, audioInfo: q, error: $ } = await lt(H);
        if (Jt.current !== T) return;
        if ($) {
          x($), _(null);
          return;
        }
        const at = await H.arrayBuffer(), ot = new Uint8Array(at);
        L(ot), W(q || null);
        let zt = R ? {
          ...R
        } : {
          ...vm
        };
        if ((!zt.waveform_data || !((_a2 = zt.waveform_data.peaks) == null ? void 0 : _a2.length)) && q) try {
          const Re = await (await Cs(() => Promise.resolve().then(() => _m), void 0, import.meta.url)).decode(ot);
          zt.waveform_data = xm(Re, q.sample_rate, q.channels);
        } catch {
        }
        if (rt(zt), zt.pictures) {
          const ee = zt.pictures.find((Re) => Re.picture_type === "cover_front");
          if (ee) {
            const Re = new Blob([
              ee.data
            ], {
              type: ee.mime_type
            });
            Dt(URL.createObjectURL(Re));
          }
        }
        if (zt.synced_lyrics && zt.synced_lyrics.length > 0) {
          const ee = zt.synced_lyrics[0];
          qt({
            type: 1,
            timestampFormat: 2,
            language: ee.language || "eng",
            description: ee.description || "Synced Lyrics",
            text: ee.lines.map((Re) => [
              Re.text,
              Re.timestamp_ms
            ])
          });
        }
        const wt = Object.values(zt || {}).filter((ee) => typeof ee == "string" && ee.trim().length > 0).length, Rl = ((_c2 = (_b2 = zt == null ? void 0 : zt.synced_lyrics) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.lines.length) ?? 0, aa = wt > 0 || !!q || Rl > 0;
        E(wt > 0 ? `Imported ${wt} embedded tag${wt === 1 ? "" : "s"}.` : "No embedded tags found."), _(aa ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (R) {
        if (Jt.current !== T) return;
        console.error("Failed to parse metadata", R), E(""), x("Loaded file, but could not read embedded metadata automatically."), _(null), W(null);
      }
    }, [
      lt,
      ue,
      J
    ]), B = (H, h) => {
      rt((T) => ({
        ...T,
        [H]: h
      }));
    };
    function K(H, h) {
      rt((T) => {
        var _a2, _b2, _c2;
        return {
          ...T,
          popularimeter: {
            email: H === "email" ? h : ((_a2 = T.popularimeter) == null ? void 0 : _a2.email) ?? "",
            rating: H === "rating" ? h : ((_b2 = T.popularimeter) == null ? void 0 : _b2.rating) ?? 0,
            play_count: H === "play_count" ? h : ((_c2 = T.popularimeter) == null ? void 0 : _c2.play_count) ?? 0
          }
        };
      });
    }
    const pt = async () => {
      var _a2, _b2;
      if (!s || !C) return;
      x(null), _(null);
      const H = await gt(C, G);
      if (H) {
        const h = (_a2 = G.artist) == null ? void 0 : _a2.trim(), T = (_b2 = G.title) == null ? void 0 : _b2.trim();
        let R;
        h && T ? R = `${h} - ${T}.flo` : T ? R = `${T}.flo` : R = s.name.endsWith(".flo") ? s.name : `${s.name.replace(/\.[^/.]+$/, "")}.flo`, bt(H, R), _("File processed and downloaded successfully!");
      } else x("Failed to process file");
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
                            children: c.jsx(Zn, {
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
                            c.jsx(Rg, {}),
                            c.jsxs("button", {
                              onClick: () => g(!r),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                c.jsx(Cy, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                r ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                A && c.jsx(ym, {
                  type: "error",
                  message: A
                }),
                p && c.jsx(ym, {
                  type: "success",
                  message: p
                }),
                c.jsx(pg, {
                  file: s,
                  onFileUpload: O,
                  isParsingMetadata: V,
                  metadataSummary: b
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: ne.map(({ label: H, value: h, helper: T }) => c.jsxs("div", {
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
                            children: h
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
            c.jsx(db, {
              metadata: G
            }),
            c.jsx(ib, {
              waveform: G.waveform_data,
              onRegenerate: C && Z ? Wt : void 0
            }),
            c.jsx(_g, {
              metadata: G,
              onMetadataChange: B
            }),
            c.jsx(rb, {
              metadata: G,
              onMetadataChange: B
            }),
            c.jsx(Eg, {
              popularimeter: {
                email: ((_a = G.popularimeter) == null ? void 0 : _a.email) ?? "",
                rating: ((_b = G.popularimeter) == null ? void 0 : _b.rating) ?? 0,
                play_count: ((_c = G.popularimeter) == null ? void 0 : _c.play_count) ?? 0
              },
              onChange: K
            }),
            c.jsx(xg, {
              pictures: G.pictures,
              onPicturesChange: (H) => rt({
                ...G,
                pictures: H
              }),
              coverVariants: G.cover_variants,
              onCoverVariantsChange: (H) => rt({
                ...G,
                cover_variants: H
              }),
              animatedCover: G.animated_cover,
              onAnimatedCoverChange: (H) => rt({
                ...G,
                animated_cover: H
              })
            }),
            c.jsx(Ng, {
              syncedLyrics: G.synced_lyrics,
              onSyncedLyricsChange: (H) => B("synced_lyrics", H),
              unsyncedLyrics: Array.isArray(G.lyrics) ? G.lyrics.map((H) => H.text) : [],
              onUnsyncedLyricsChange: (H) => B("lyrics", H.map((h) => ({
                text: h
              })))
            }),
            c.jsx(Ag, {
              sectionMarkers: G.section_markers,
              onSectionMarkersChange: (H) => rt({
                ...G,
                section_markers: H
              })
            }),
            c.jsx(zg, {
              bpmMap: G.bpm_map,
              onBpmMapChange: (H) => rt({
                ...G,
                bpm_map: H
              })
            }),
            c.jsx(Tg, {
              keyChanges: G.key_changes,
              onKeyChangesChange: (H) => B("key_changes", H)
            }),
            c.jsx(Mg, {
              creatorNotes: G.creator_notes ?? [],
              onCreatorNotesChange: (H) => B("creator_notes", H)
            }),
            c.jsx(Og, {
              collaborationCredits: G.collaboration_credits ?? [],
              onCollaborationCreditsChange: (H) => B("collaboration_credits", H)
            }),
            c.jsx(wg, {
              userText: G.user_text ?? [],
              onUserTextChange: (H) => B("user_text", H)
            }),
            c.jsx(Ug, {
              disabled: !s || P,
              isProcessing: P,
              fileName: s == null ? void 0 : s.name,
              onProcess: pt
            })
          ]
        })
      ]
    });
  }
  vy.createRoot(document.getElementById("root")).render(c.jsx(dy.StrictMode, {
    children: c.jsx(mb, {})
  }));
})();
export {
  __tla,
  Nm as g
};

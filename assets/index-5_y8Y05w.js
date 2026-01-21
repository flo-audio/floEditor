let Em;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const b of document.querySelectorAll('link[rel="modulepreload"]')) f(b);
    new MutationObserver((b) => {
      for (const x of b) if (x.type === "childList") for (const g of x.addedNodes) g.tagName === "LINK" && g.rel === "modulepreload" && f(g);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(b) {
      const x = {};
      return b.integrity && (x.integrity = b.integrity), b.referrerPolicy && (x.referrerPolicy = b.referrerPolicy), b.crossOrigin === "use-credentials" ? x.credentials = "include" : b.crossOrigin === "anonymous" ? x.credentials = "omit" : x.credentials = "same-origin", x;
    }
    function f(b) {
      if (b.ep) return;
      b.ep = true;
      const x = d(b);
      fetch(b.href, x);
    }
  })();
  Em = function(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  };
  var Ts = {
    exports: {}
  }, Ln = {};
  var Wd;
  function yg() {
    if (Wd) return Ln;
    Wd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(f, b, x) {
      var g = null;
      if (x !== void 0 && (g = "" + x), b.key !== void 0 && (g = "" + b.key), "key" in b) {
        x = {};
        for (var m in b) m !== "key" && (x[m] = b[m]);
      } else x = b;
      return b = x.ref, {
        $$typeof: s,
        type: f,
        key: g,
        ref: b !== void 0 ? b : null,
        props: x
      };
    }
    return Ln.Fragment = r, Ln.jsx = d, Ln.jsxs = d, Ln;
  }
  var Id;
  function pg() {
    return Id || (Id = 1, Ts.exports = yg()), Ts.exports;
  }
  var i = pg(), Es = {
    exports: {}
  }, W = {};
  var Pd;
  function bg() {
    if (Pd) return W;
    Pd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), f = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), x = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), _ = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), G = Symbol.iterator;
    function P(y) {
      return y === null || typeof y != "object" ? null : (y = G && y[G] || y["@@iterator"], typeof y == "function" ? y : null);
    }
    var pe = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, _e = Object.assign, Je = {};
    function Me(y, w, H) {
      this.props = y, this.context = w, this.refs = Je, this.updater = H || pe;
    }
    Me.prototype.isReactComponent = {}, Me.prototype.setState = function(y, w) {
      if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, w, "setState");
    }, Me.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    function ke() {
    }
    ke.prototype = Me.prototype;
    function K(y, w, H) {
      this.props = y, this.context = w, this.refs = Je, this.updater = H || pe;
    }
    var ve = K.prototype = new ke();
    ve.constructor = K, _e(ve, Me.prototype), ve.isPureReactComponent = true;
    var $e = Array.isArray;
    function X() {
    }
    var q = {
      H: null,
      A: null,
      T: null,
      S: null
    }, Z = Object.prototype.hasOwnProperty;
    function le(y, w, H) {
      var L = H.ref;
      return {
        $$typeof: s,
        type: y,
        key: w,
        ref: L !== void 0 ? L : null,
        props: H
      };
    }
    function Q(y, w) {
      return le(y.type, w, y.props);
    }
    function ee(y) {
      return typeof y == "object" && y !== null && y.$$typeof === s;
    }
    function ge(y) {
      var w = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + y.replace(/[=:]/g, function(H) {
        return w[H];
      });
    }
    var Ze = /\/+/g;
    function ct(y, w) {
      return typeof y == "object" && y !== null && y.key != null ? ge("" + y.key) : w.toString(36);
    }
    function Fe(y) {
      switch (y.status) {
        case "fulfilled":
          return y.value;
        case "rejected":
          throw y.reason;
        default:
          switch (typeof y.status == "string" ? y.then(X, X) : (y.status = "pending", y.then(function(w) {
            y.status === "pending" && (y.status = "fulfilled", y.value = w);
          }, function(w) {
            y.status === "pending" && (y.status = "rejected", y.reason = w);
          })), y.status) {
            case "fulfilled":
              return y.value;
            case "rejected":
              throw y.reason;
          }
      }
      throw y;
    }
    function O(y, w, H, L, F) {
      var ae = typeof y;
      (ae === "undefined" || ae === "boolean") && (y = null);
      var fe = false;
      if (y === null) fe = true;
      else switch (ae) {
        case "bigint":
        case "string":
        case "number":
          fe = true;
          break;
        case "object":
          switch (y.$$typeof) {
            case s:
            case r:
              fe = true;
              break;
            case T:
              return fe = y._init, O(fe(y._payload), w, H, L, F);
          }
      }
      if (fe) return F = F(y), fe = L === "" ? "." + ct(y, 0) : L, $e(F) ? (H = "", fe != null && (H = fe.replace(Ze, "$&/") + "/"), O(F, w, H, "", function(Rl) {
        return Rl;
      })) : F != null && (ee(F) && (F = Q(F, H + (F.key == null || y && y.key === F.key ? "" : ("" + F.key).replace(Ze, "$&/") + "/") + fe)), w.push(F)), 1;
      fe = 0;
      var we = L === "" ? "." : L + ":";
      if ($e(y)) for (var Ee = 0; Ee < y.length; Ee++) L = y[Ee], ae = we + ct(L, Ee), fe += O(L, w, H, ae, F);
      else if (Ee = P(y), typeof Ee == "function") for (y = Ee.call(y), Ee = 0; !(L = y.next()).done; ) L = L.value, ae = we + ct(L, Ee++), fe += O(L, w, H, ae, F);
      else if (ae === "object") {
        if (typeof y.then == "function") return O(Fe(y), w, H, L, F);
        throw w = String(y), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
      }
      return fe;
    }
    function B(y, w, H) {
      if (y == null) return y;
      var L = [], F = 0;
      return O(y, L, "", "", function(ae) {
        return w.call(H, ae, F++);
      }), L;
    }
    function $(y) {
      if (y._status === -1) {
        var w = y._result;
        w = w(), w.then(function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = H);
        }, function(H) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = H);
        }), y._status === -1 && (y._status = 0, y._result = w);
      }
      if (y._status === 1) return y._result.default;
      throw y._result;
    }
    var be = typeof reportError == "function" ? reportError : function(y) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var w = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
          error: y
        });
        if (!window.dispatchEvent(w)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", y);
        return;
      }
      console.error(y);
    }, R = {
      map: B,
      forEach: function(y, w, H) {
        B(y, function() {
          w.apply(this, arguments);
        }, H);
      },
      count: function(y) {
        var w = 0;
        return B(y, function() {
          w++;
        }), w;
      },
      toArray: function(y) {
        return B(y, function(w) {
          return w;
        }) || [];
      },
      only: function(y) {
        if (!ee(y)) throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
    };
    return W.Activity = C, W.Children = R, W.Component = Me, W.Fragment = d, W.Profiler = b, W.PureComponent = K, W.StrictMode = f, W.Suspense = _, W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = q, W.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(y) {
        return q.H.useMemoCache(y);
      }
    }, W.cache = function(y) {
      return function() {
        return y.apply(null, arguments);
      };
    }, W.cacheSignal = function() {
      return null;
    }, W.cloneElement = function(y, w, H) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var L = _e({}, y.props), F = y.key;
      if (w != null) for (ae in w.key !== void 0 && (F = "" + w.key), w) !Z.call(w, ae) || ae === "key" || ae === "__self" || ae === "__source" || ae === "ref" && w.ref === void 0 || (L[ae] = w[ae]);
      var ae = arguments.length - 2;
      if (ae === 1) L.children = H;
      else if (1 < ae) {
        for (var fe = Array(ae), we = 0; we < ae; we++) fe[we] = arguments[we + 2];
        L.children = fe;
      }
      return le(y.type, F, L);
    }, W.createContext = function(y) {
      return y = {
        $$typeof: g,
        _currentValue: y,
        _currentValue2: y,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, y.Provider = y, y.Consumer = {
        $$typeof: x,
        _context: y
      }, y;
    }, W.createElement = function(y, w, H) {
      var L, F = {}, ae = null;
      if (w != null) for (L in w.key !== void 0 && (ae = "" + w.key), w) Z.call(w, L) && L !== "key" && L !== "__self" && L !== "__source" && (F[L] = w[L]);
      var fe = arguments.length - 2;
      if (fe === 1) F.children = H;
      else if (1 < fe) {
        for (var we = Array(fe), Ee = 0; Ee < fe; Ee++) we[Ee] = arguments[Ee + 2];
        F.children = we;
      }
      if (y && y.defaultProps) for (L in fe = y.defaultProps, fe) F[L] === void 0 && (F[L] = fe[L]);
      return le(y, ae, F);
    }, W.createRef = function() {
      return {
        current: null
      };
    }, W.forwardRef = function(y) {
      return {
        $$typeof: m,
        render: y
      };
    }, W.isValidElement = ee, W.lazy = function(y) {
      return {
        $$typeof: T,
        _payload: {
          _status: -1,
          _result: y
        },
        _init: $
      };
    }, W.memo = function(y, w) {
      return {
        $$typeof: v,
        type: y,
        compare: w === void 0 ? null : w
      };
    }, W.startTransition = function(y) {
      var w = q.T, H = {};
      q.T = H;
      try {
        var L = y(), F = q.S;
        F !== null && F(H, L), typeof L == "object" && L !== null && typeof L.then == "function" && L.then(X, be);
      } catch (ae) {
        be(ae);
      } finally {
        w !== null && H.types !== null && (w.types = H.types), q.T = w;
      }
    }, W.unstable_useCacheRefresh = function() {
      return q.H.useCacheRefresh();
    }, W.use = function(y) {
      return q.H.use(y);
    }, W.useActionState = function(y, w, H) {
      return q.H.useActionState(y, w, H);
    }, W.useCallback = function(y, w) {
      return q.H.useCallback(y, w);
    }, W.useContext = function(y) {
      return q.H.useContext(y);
    }, W.useDebugValue = function() {
    }, W.useDeferredValue = function(y, w) {
      return q.H.useDeferredValue(y, w);
    }, W.useEffect = function(y, w) {
      return q.H.useEffect(y, w);
    }, W.useEffectEvent = function(y) {
      return q.H.useEffectEvent(y);
    }, W.useId = function() {
      return q.H.useId();
    }, W.useImperativeHandle = function(y, w, H) {
      return q.H.useImperativeHandle(y, w, H);
    }, W.useInsertionEffect = function(y, w) {
      return q.H.useInsertionEffect(y, w);
    }, W.useLayoutEffect = function(y, w) {
      return q.H.useLayoutEffect(y, w);
    }, W.useMemo = function(y, w) {
      return q.H.useMemo(y, w);
    }, W.useOptimistic = function(y, w) {
      return q.H.useOptimistic(y, w);
    }, W.useReducer = function(y, w, H) {
      return q.H.useReducer(y, w, H);
    }, W.useRef = function(y) {
      return q.H.useRef(y);
    }, W.useState = function(y) {
      return q.H.useState(y);
    }, W.useSyncExternalStore = function(y, w, H) {
      return q.H.useSyncExternalStore(y, w, H);
    }, W.useTransition = function() {
      return q.H.useTransition();
    }, W.version = "19.2.3", W;
  }
  var em;
  function ks() {
    return em || (em = 1, Es.exports = bg()), Es.exports;
  }
  var se = ks();
  const _g = Em(se);
  var Ms = {
    exports: {}
  }, Yn = {}, Os = {
    exports: {}
  }, Us = {};
  var tm;
  function vg() {
    return tm || (tm = 1, (function(s) {
      function r(O, B) {
        var $ = O.length;
        O.push(B);
        e: for (; 0 < $; ) {
          var be = $ - 1 >>> 1, R = O[be];
          if (0 < b(R, B)) O[be] = B, O[$] = R, $ = be;
          else break e;
        }
      }
      function d(O) {
        return O.length === 0 ? null : O[0];
      }
      function f(O) {
        if (O.length === 0) return null;
        var B = O[0], $ = O.pop();
        if ($ !== B) {
          O[0] = $;
          e: for (var be = 0, R = O.length, y = R >>> 1; be < y; ) {
            var w = 2 * (be + 1) - 1, H = O[w], L = w + 1, F = O[L];
            if (0 > b(H, $)) L < R && 0 > b(F, H) ? (O[be] = F, O[L] = $, be = L) : (O[be] = H, O[w] = $, be = w);
            else if (L < R && 0 > b(F, $)) O[be] = F, O[L] = $, be = L;
            else break e;
          }
        }
        return B;
      }
      function b(O, B) {
        var $ = O.sortIndex - B.sortIndex;
        return $ !== 0 ? $ : O.id - B.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var x = performance;
        s.unstable_now = function() {
          return x.now();
        };
      } else {
        var g = Date, m = g.now();
        s.unstable_now = function() {
          return g.now() - m;
        };
      }
      var _ = [], v = [], T = 1, C = null, G = 3, P = false, pe = false, _e = false, Je = false, Me = typeof setTimeout == "function" ? setTimeout : null, ke = typeof clearTimeout == "function" ? clearTimeout : null, K = typeof setImmediate < "u" ? setImmediate : null;
      function ve(O) {
        for (var B = d(v); B !== null; ) {
          if (B.callback === null) f(v);
          else if (B.startTime <= O) f(v), B.sortIndex = B.expirationTime, r(_, B);
          else break;
          B = d(v);
        }
      }
      function $e(O) {
        if (_e = false, ve(O), !pe) if (d(_) !== null) pe = true, X || (X = true, ge());
        else {
          var B = d(v);
          B !== null && Fe($e, B.startTime - O);
        }
      }
      var X = false, q = -1, Z = 5, le = -1;
      function Q() {
        return Je ? true : !(s.unstable_now() - le < Z);
      }
      function ee() {
        if (Je = false, X) {
          var O = s.unstable_now();
          le = O;
          var B = true;
          try {
            e: {
              pe = false, _e && (_e = false, ke(q), q = -1), P = true;
              var $ = G;
              try {
                t: {
                  for (ve(O), C = d(_); C !== null && !(C.expirationTime > O && Q()); ) {
                    var be = C.callback;
                    if (typeof be == "function") {
                      C.callback = null, G = C.priorityLevel;
                      var R = be(C.expirationTime <= O);
                      if (O = s.unstable_now(), typeof R == "function") {
                        C.callback = R, ve(O), B = true;
                        break t;
                      }
                      C === d(_) && f(_), ve(O);
                    } else f(_);
                    C = d(_);
                  }
                  if (C !== null) B = true;
                  else {
                    var y = d(v);
                    y !== null && Fe($e, y.startTime - O), B = false;
                  }
                }
                break e;
              } finally {
                C = null, G = $, P = false;
              }
              B = void 0;
            }
          } finally {
            B ? ge() : X = false;
          }
        }
      }
      var ge;
      if (typeof K == "function") ge = function() {
        K(ee);
      };
      else if (typeof MessageChannel < "u") {
        var Ze = new MessageChannel(), ct = Ze.port2;
        Ze.port1.onmessage = ee, ge = function() {
          ct.postMessage(null);
        };
      } else ge = function() {
        Me(ee, 0);
      };
      function Fe(O, B) {
        q = Me(function() {
          O(s.unstable_now());
        }, B);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(O) {
        O.callback = null;
      }, s.unstable_forceFrameRate = function(O) {
        0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Z = 0 < O ? Math.floor(1e3 / O) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return G;
      }, s.unstable_next = function(O) {
        switch (G) {
          case 1:
          case 2:
          case 3:
            var B = 3;
            break;
          default:
            B = G;
        }
        var $ = G;
        G = B;
        try {
          return O();
        } finally {
          G = $;
        }
      }, s.unstable_requestPaint = function() {
        Je = true;
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
        var $ = G;
        G = O;
        try {
          return B();
        } finally {
          G = $;
        }
      }, s.unstable_scheduleCallback = function(O, B, $) {
        var be = s.unstable_now();
        switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? be + $ : be) : $ = be, O) {
          case 1:
            var R = -1;
            break;
          case 2:
            R = 250;
            break;
          case 5:
            R = 1073741823;
            break;
          case 4:
            R = 1e4;
            break;
          default:
            R = 5e3;
        }
        return R = $ + R, O = {
          id: T++,
          callback: B,
          priorityLevel: O,
          startTime: $,
          expirationTime: R,
          sortIndex: -1
        }, $ > be ? (O.sortIndex = $, r(v, O), d(_) === null && O === d(v) && (_e ? (ke(q), q = -1) : _e = true, Fe($e, $ - be))) : (O.sortIndex = R, r(_, O), pe || P || (pe = true, X || (X = true, ge()))), O;
      }, s.unstable_shouldYield = Q, s.unstable_wrapCallback = function(O) {
        var B = G;
        return function() {
          var $ = G;
          G = B;
          try {
            return O.apply(this, arguments);
          } finally {
            G = $;
          }
        };
      };
    })(Us)), Us;
  }
  var lm;
  function xg() {
    return lm || (lm = 1, Os.exports = vg()), Os.exports;
  }
  var Ds = {
    exports: {}
  }, nt = {};
  var am;
  function Sg() {
    if (am) return nt;
    am = 1;
    var s = ks();
    function r(_) {
      var v = "https://react.dev/errors/" + _;
      if (1 < arguments.length) {
        v += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var T = 2; T < arguments.length; T++) v += "&args[]=" + encodeURIComponent(arguments[T]);
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
    function x(_, v, T) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: b,
        key: C == null ? null : "" + C,
        children: _,
        containerInfo: v,
        implementation: T
      };
    }
    var g = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function m(_, v) {
      if (_ === "font") return "";
      if (typeof v == "string") return v === "use-credentials" ? v : "";
    }
    return nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = f, nt.createPortal = function(_, v) {
      var T = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11) throw Error(r(299));
      return x(_, v, null, T);
    }, nt.flushSync = function(_) {
      var v = g.T, T = f.p;
      try {
        if (g.T = null, f.p = 2, _) return _();
      } finally {
        g.T = v, f.p = T, f.d.f();
      }
    }, nt.preconnect = function(_, v) {
      typeof _ == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, f.d.C(_, v));
    }, nt.prefetchDNS = function(_) {
      typeof _ == "string" && f.d.D(_);
    }, nt.preinit = function(_, v) {
      if (typeof _ == "string" && v && typeof v.as == "string") {
        var T = v.as, C = m(T, v.crossOrigin), G = typeof v.integrity == "string" ? v.integrity : void 0, P = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
        T === "style" ? f.d.S(_, typeof v.precedence == "string" ? v.precedence : void 0, {
          crossOrigin: C,
          integrity: G,
          fetchPriority: P
        }) : T === "script" && f.d.X(_, {
          crossOrigin: C,
          integrity: G,
          fetchPriority: P,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0
        });
      }
    }, nt.preinitModule = function(_, v) {
      if (typeof _ == "string") if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var T = m(v.as, v.crossOrigin);
          f.d.M(_, {
            crossOrigin: T,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && f.d.M(_);
    }, nt.preload = function(_, v) {
      if (typeof _ == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
        var T = v.as, C = m(T, v.crossOrigin);
        f.d.L(_, T, {
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
    }, nt.preloadModule = function(_, v) {
      if (typeof _ == "string") if (v) {
        var T = m(v.as, v.crossOrigin);
        f.d.m(_, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: T,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else f.d.m(_);
    }, nt.requestFormReset = function(_) {
      f.d.r(_);
    }, nt.unstable_batchedUpdates = function(_, v) {
      return _(v);
    }, nt.useFormState = function(_, v, T) {
      return g.H.useFormState(_, v, T);
    }, nt.useFormStatus = function() {
      return g.H.useHostTransitionStatus();
    }, nt.version = "19.2.3", nt;
  }
  var nm;
  function jg() {
    if (nm) return Ds.exports;
    nm = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (r) {
        console.error(r);
      }
    }
    return s(), Ds.exports = Sg(), Ds.exports;
  }
  var um;
  function Ng() {
    if (um) return Yn;
    um = 1;
    var s = xg(), r = ks(), d = jg();
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
    function x(e) {
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
    function g(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function m(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function _(e) {
      if (x(e) !== e) throw Error(f(188));
    }
    function v(e) {
      var t = e.alternate;
      if (!t) {
        if (t = x(e), t === null) throw Error(f(188));
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
          for (var c = false, o = n.child; o; ) {
            if (o === l) {
              c = true, l = n, a = u;
              break;
            }
            if (o === a) {
              c = true, a = n, l = u;
              break;
            }
            o = o.sibling;
          }
          if (!c) {
            for (o = u.child; o; ) {
              if (o === l) {
                c = true, l = u, a = n;
                break;
              }
              if (o === a) {
                c = true, a = u, l = n;
                break;
              }
              o = o.sibling;
            }
            if (!c) throw Error(f(189));
          }
        }
        if (l.alternate !== a) throw Error(f(190));
      }
      if (l.tag !== 3) throw Error(f(188));
      return l.stateNode.current === l ? e : t;
    }
    function T(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = T(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var C = Object.assign, G = /* @__PURE__ */ Symbol.for("react.element"), P = /* @__PURE__ */ Symbol.for("react.transitional.element"), pe = /* @__PURE__ */ Symbol.for("react.portal"), _e = /* @__PURE__ */ Symbol.for("react.fragment"), Je = /* @__PURE__ */ Symbol.for("react.strict_mode"), Me = /* @__PURE__ */ Symbol.for("react.profiler"), ke = /* @__PURE__ */ Symbol.for("react.consumer"), K = /* @__PURE__ */ Symbol.for("react.context"), ve = /* @__PURE__ */ Symbol.for("react.forward_ref"), $e = /* @__PURE__ */ Symbol.for("react.suspense"), X = /* @__PURE__ */ Symbol.for("react.suspense_list"), q = /* @__PURE__ */ Symbol.for("react.memo"), Z = /* @__PURE__ */ Symbol.for("react.lazy"), le = /* @__PURE__ */ Symbol.for("react.activity"), Q = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), ee = Symbol.iterator;
    function ge(e) {
      return e === null || typeof e != "object" ? null : (e = ee && e[ee] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Ze = /* @__PURE__ */ Symbol.for("react.client.reference");
    function ct(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === Ze ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _e:
          return "Fragment";
        case Me:
          return "Profiler";
        case Je:
          return "StrictMode";
        case $e:
          return "Suspense";
        case X:
          return "SuspenseList";
        case le:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case pe:
          return "Portal";
        case K:
          return e.displayName || "Context";
        case ke:
          return (e._context.displayName || "Context") + ".Consumer";
        case ve:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case q:
          return t = e.displayName || null, t !== null ? t : ct(e.type) || "Memo";
        case Z:
          t = e._payload, e = e._init;
          try {
            return ct(e(t));
          } catch {
          }
      }
      return null;
    }
    var Fe = Array.isArray, O = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, be = [], R = -1;
    function y(e) {
      return {
        current: e
      };
    }
    function w(e) {
      0 > R || (e.current = be[R], be[R] = null, R--);
    }
    function H(e, t) {
      R++, be[R] = e.current, e.current = t;
    }
    var L = y(null), F = y(null), ae = y(null), fe = y(null);
    function we(e, t) {
      switch (H(ae, t), H(F, e), H(L, null), t.nodeType) {
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
      w(L), H(L, e);
    }
    function Ee() {
      w(L), w(F), w(ae);
    }
    function Rl(e) {
      e.memoizedState !== null && H(fe, e);
      var t = L.current, l = xd(t, e.type);
      t !== l && (H(F, e), H(L, l));
    }
    function aa(e) {
      F.current === e && (w(L), w(F)), fe.current === e && (w(fe), Rn._currentValue = $);
    }
    var at, Bt;
    function Hl(e) {
      if (at === void 0) try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        at = t && t[1] || "", Bt = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + at + e + Bt;
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
        var u = a.DetermineComponentFrameRoot(), c = u[0], o = u[1];
        if (c && o) {
          var h = c.split(`
`), N = o.split(`
`);
          for (n = a = 0; a < h.length && !h[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < N.length && !N[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === h.length || n === N.length) for (a = h.length - 1, n = N.length - 1; 1 <= a && 0 <= n && h[a] !== N[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (h[a] !== N[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || h[a] !== N[n]) {
                var E = `
` + h[a].replace(" at new ", " at ");
                return e.displayName && E.includes("<anonymous>") && (E = E.replace("<anonymous>", e.displayName)), E;
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
    function Km(e, t) {
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
          t += Km(e, l), l = e, e = e.return;
        while (e);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var mi = Object.prototype.hasOwnProperty, hi = s.unstable_scheduleCallback, gi = s.unstable_cancelCallback, Jm = s.unstable_shouldYield, $m = s.unstable_requestPaint, gt = s.unstable_now, Fm = s.unstable_getCurrentPriorityLevel, Fs = s.unstable_ImmediatePriority, Ws = s.unstable_UserBlockingPriority, Zn = s.unstable_NormalPriority, Wm = s.unstable_LowPriority, Is = s.unstable_IdlePriority, Im = s.log, Pm = s.unstable_setDisableYieldValue, Va = null, yt = null;
    function fl(e) {
      if (typeof Im == "function" && Pm(e), yt && typeof yt.setStrictMode == "function") try {
        yt.setStrictMode(Va, e);
      } catch {
      }
    }
    var pt = Math.clz32 ? Math.clz32 : lh, eh = Math.log, th = Math.LN2;
    function lh(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (eh(e) / th | 0) | 0;
    }
    var Vn = 256, Kn = 262144, Jn = 4194304;
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
      var n = 0, u = e.suspendedLanes, c = e.pingedLanes;
      e = e.warmLanes;
      var o = a & 134217727;
      return o !== 0 ? (a = o & ~u, a !== 0 ? n = Bl(a) : (c &= o, c !== 0 ? n = Bl(c) : l || (l = o & ~e, l !== 0 && (n = Bl(l))))) : (o = a & ~u, o !== 0 ? n = Bl(o) : c !== 0 ? n = Bl(c) : l || (l = a & ~e, l !== 0 && (n = Bl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
    }
    function Ka(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function ah(e, t) {
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
    function yi(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function Ja(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function nh(e, t, l, a, n, u) {
      var c = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var o = e.entanglements, h = e.expirationTimes, N = e.hiddenUpdates;
      for (l = c & ~l; 0 < l; ) {
        var E = 31 - pt(l), D = 1 << E;
        o[E] = 0, h[E] = -1;
        var A = N[E];
        if (A !== null) for (N[E] = null, E = 0; E < A.length; E++) {
          var z = A[E];
          z !== null && (z.lane &= -536870913);
        }
        l &= ~D;
      }
      a !== 0 && er(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(c & ~t));
    }
    function er(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - pt(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
    }
    function tr(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var a = 31 - pt(l), n = 1 << a;
        n & t | e[a] & t && (e[a] |= t), l &= ~n;
      }
    }
    function lr(e, t) {
      var l = t & -t;
      return l = (l & 42) !== 0 ? 1 : pi(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
    }
    function pi(e) {
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
    function bi(e) {
      return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function ar() {
      var e = B.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : kd(e.type));
    }
    function nr(e, t) {
      var l = B.p;
      try {
        return B.p = e, t();
      } finally {
        B.p = l;
      }
    }
    var ol = Math.random().toString(36).slice(2), We = "__reactFiber$" + ol, st = "__reactProps$" + ol, na = "__reactContainer$" + ol, _i = "__reactEvents$" + ol, uh = "__reactListeners$" + ol, ih = "__reactHandles$" + ol, ur = "__reactResources$" + ol, $a = "__reactMarker$" + ol;
    function vi(e) {
      delete e[We], delete e[st], delete e[_i], delete e[uh], delete e[ih];
    }
    function ua(e) {
      var t = e[We];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[na] || l[We]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = Td(e); e !== null; ) {
            if (l = e[We]) return l;
            e = Td(e);
          }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function ia(e) {
      if (e = e[We] || e[na]) {
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
    var ch = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), sr = {}, rr = {};
    function sh(e) {
      return mi.call(rr, e) ? true : mi.call(sr, e) ? false : ch.test(e) ? rr[e] = true : (sr[e] = true, false);
    }
    function Fn(e, t, l) {
      if (sh(t)) if (l === null) e.removeAttribute(t);
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
    function Vt(e, t, l, a) {
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
    function wt(e) {
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
    function rh(e, t, l) {
      var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
        var n = a.get, u = a.set;
        return Object.defineProperty(e, t, {
          configurable: true,
          get: function() {
            return n.call(this);
          },
          set: function(c) {
            l = "" + c, u.call(this, c);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        }), {
          getValue: function() {
            return l;
          },
          setValue: function(c) {
            l = "" + c;
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
        e._valueTracker = rh(e, t, "" + e[t]);
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
    var fh = /[\n"\\]/g;
    function Tt(e) {
      return e.replace(fh, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Si(e, t, l, a, n, u, c, o) {
      e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + wt(t)) : e.value !== "" + wt(t) && (e.value = "" + wt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? ji(e, c, wt(t)) : l != null ? ji(e, c, wt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + wt(o) : e.removeAttribute("name");
    }
    function dr(e, t, l, a, n, u, c, o) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || t != null)) {
          xi(e);
          return;
        }
        l = l != null ? "" + wt(l) : "", t = t != null ? "" + wt(t) : l, o || t === e.value || (e.value = t), e.defaultValue = t;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = o ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), xi(e);
    }
    function ji(e, t, l) {
      t === "number" && In(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function ra(e, t, l, a) {
      if (e = e.options, t) {
        t = {};
        for (var n = 0; n < l.length; n++) t["$" + l[n]] = true;
        for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = true);
      } else {
        for (l = "" + wt(l), t = null, n = 0; n < e.length; n++) {
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
      if (t != null && (t = "" + wt(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + wt(l) : "";
    }
    function hr(e, t, l, a) {
      if (t == null) {
        if (a != null) {
          if (l != null) throw Error(f(92));
          if (Fe(a)) {
            if (1 < a.length) throw Error(f(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), t = l;
      }
      l = wt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), xi(e);
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
    var oh = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function gr(e, t, l) {
      var a = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || oh.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function yr(e, t, l) {
      if (t != null && typeof t != "object") throw Error(f(62));
      if (e = e.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
        for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && gr(e, n, a);
      } else for (var u in t) t.hasOwnProperty(u) && gr(e, u, t[u]);
    }
    function Ni(e) {
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
    var dh = /* @__PURE__ */ new Map([
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
    ]), mh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Pn(e) {
      return mh.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Kt() {
    }
    var Ai = null;
    function zi(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var oa = null, da = null;
    function pr(e) {
      var t = ia(e);
      if (t && (e = t.stateNode)) {
        var l = e[st] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Si(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Tt("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                var a = l[t];
                if (a !== e && a.form === e.form) {
                  var n = a[st] || null;
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
    var wi = false;
    function br(e, t, l) {
      if (wi) return e(t, l);
      wi = true;
      try {
        var a = e(t);
        return a;
      } finally {
        if (wi = false, (oa !== null || da !== null) && (Yu(), oa && (t = oa, e = da, da = oa = null, pr(t), e))) for (t = 0; t < e.length; t++) pr(e[t]);
      }
    }
    function Wa(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var a = l[st] || null;
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
    var Jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ti = false;
    if (Jt) try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", {
        get: function() {
          Ti = true;
        }
      }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      Ti = false;
    }
    var dl = null, Ei = null, eu = null;
    function _r() {
      if (eu) return eu;
      var e, t = Ei, l = t.length, a, n = "value" in dl ? dl.value : dl.textContent, u = n.length;
      for (e = 0; e < l && t[e] === n[e]; e++) ;
      var c = l - e;
      for (a = 1; a <= c && t[l - a] === n[u - a]; a++) ;
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
    function rt(e) {
      function t(l, a, n, u, c) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = c, this.currentTarget = null;
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
    var Ll = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, au = rt(Ll), Pa = C({}, Ll, {
      view: 0,
      detail: 0
    }), hh = rt(Pa), Mi, Oi, en, nu = C({}, Pa, {
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
    }), xr = rt(nu), gh = C({}, nu, {
      dataTransfer: 0
    }), yh = rt(gh), ph = C({}, Pa, {
      relatedTarget: 0
    }), Ui = rt(ph), bh = C({}, Ll, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _h = rt(bh), vh = C({}, Ll, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), xh = rt(vh), Sh = C({}, Ll, {
      data: 0
    }), Sr = rt(Sh), jh = {
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
    }, Nh = {
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
    }, Ah = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function zh(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = Ah[e]) ? !!t[e] : false;
    }
    function Di() {
      return zh;
    }
    var wh = C({}, Pa, {
      key: function(e) {
        if (e.key) {
          var t = jh[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = tu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nh[e.keyCode] || "Unidentified" : "";
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
    }), Th = rt(wh), Eh = C({}, nu, {
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
    }), jr = rt(Eh), Mh = C({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Di
    }), Oh = rt(Mh), Uh = C({}, Ll, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Dh = rt(Uh), Ch = C({}, nu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Rh = rt(Ch), Hh = C({}, Ll, {
      newState: 0,
      oldState: 0
    }), Bh = rt(Hh), qh = [
      9,
      13,
      27,
      32
    ], Ci = Jt && "CompositionEvent" in window, tn = null;
    Jt && "documentMode" in document && (tn = document.documentMode);
    var Lh = Jt && "TextEvent" in window && !tn, Nr = Jt && (!Ci || tn && 8 < tn && 11 >= tn), Ar = " ", zr = false;
    function wr(e, t) {
      switch (e) {
        case "keyup":
          return qh.indexOf(t.keyCode) !== -1;
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
    function Tr(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var ma = false;
    function Yh(e, t) {
      switch (e) {
        case "compositionend":
          return Tr(t);
        case "keypress":
          return t.which !== 32 ? null : (zr = true, Ar);
        case "textInput":
          return e = t.data, e === Ar && zr ? null : e;
        default:
          return null;
      }
    }
    function Gh(e, t) {
      if (ma) return e === "compositionend" || !Ci && wr(e, t) ? (e = _r(), eu = Ei = dl = null, ma = false, e) : null;
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
          return Nr && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Xh = {
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
    function Er(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Xh[e.type] : t === "textarea";
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
    function Qh(e) {
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
        Mr(t, an, e, zi(e)), br(Qh, t);
      }
    }
    function kh(e, t, l) {
      e === "focusin" ? (Cr(), ln = t, an = l, ln.attachEvent("onpropertychange", Rr)) : e === "focusout" && Cr();
    }
    function Zh(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return uu(an);
    }
    function Vh(e, t) {
      if (e === "click") return uu(t);
    }
    function Kh(e, t) {
      if (e === "input" || e === "change") return uu(t);
    }
    function Jh(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var bt = typeof Object.is == "function" ? Object.is : Jh;
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
    function Lr(e) {
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
    var $h = Jt && "documentMode" in document && 11 >= document.documentMode, ha = null, qi = null, un = null, Li = false;
    function Yr(e, t, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Li || ha == null || ha !== In(a) || (a = ha, "selectionStart" in a && Bi(a) ? a = {
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
    function Yl(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var ga = {
      animationend: Yl("Animation", "AnimationEnd"),
      animationiteration: Yl("Animation", "AnimationIteration"),
      animationstart: Yl("Animation", "AnimationStart"),
      transitionrun: Yl("Transition", "TransitionRun"),
      transitionstart: Yl("Transition", "TransitionStart"),
      transitioncancel: Yl("Transition", "TransitionCancel"),
      transitionend: Yl("Transition", "TransitionEnd")
    }, Yi = {}, Gr = {};
    Jt && (Gr = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
    function Gl(e) {
      if (Yi[e]) return Yi[e];
      if (!ga[e]) return e;
      var t = ga[e], l;
      for (l in t) if (t.hasOwnProperty(l) && l in Gr) return Yi[e] = t[l];
      return e;
    }
    var Xr = Gl("animationend"), Qr = Gl("animationiteration"), kr = Gl("animationstart"), Fh = Gl("transitionrun"), Wh = Gl("transitionstart"), Ih = Gl("transitioncancel"), Zr = Gl("transitionend"), Vr = /* @__PURE__ */ new Map(), Gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Gi.push("scrollEnd");
    function qt(e, t) {
      Vr.set(e, t), ql(t, [
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
    }, Et = [], ya = 0, Xi = 0;
    function cu() {
      for (var e = ya, t = Xi = ya = 0; t < e; ) {
        var l = Et[t];
        Et[t++] = null;
        var a = Et[t];
        Et[t++] = null;
        var n = Et[t];
        Et[t++] = null;
        var u = Et[t];
        if (Et[t++] = null, a !== null && n !== null) {
          var c = a.pending;
          c === null ? n.next = n : (n.next = c.next, c.next = n), a.pending = n;
        }
        u !== 0 && Kr(l, n, u);
      }
    }
    function su(e, t, l, a) {
      Et[ya++] = e, Et[ya++] = t, Et[ya++] = l, Et[ya++] = a, Xi |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
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
      return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - pt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [
        t
      ] : a.push(t), t.lane = l | 536870912), u) : null;
    }
    function ru(e) {
      if (50 < Tn) throw Tn = 0, Ic = null, Error(f(185));
      for (var t = e.return; t !== null; ) e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var pa = {};
    function Ph(e, t, l, a) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function _t(e, t, l, a) {
      return new Ph(e, t, l, a);
    }
    function ki(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function $t(e, t) {
      var l = e.alternate;
      return l === null ? (l = _t(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
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
      var c = 0;
      if (a = e, typeof e == "function") ki(e) && (c = 1);
      else if (typeof e == "string") c = ng(e, l, L.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case le:
          return e = _t(31, l, t, n), e.elementType = le, e.lanes = u, e;
        case _e:
          return Ql(l.children, n, u, t);
        case Je:
          c = 8, n |= 24;
          break;
        case Me:
          return e = _t(12, l, t, n | 2), e.elementType = Me, e.lanes = u, e;
        case $e:
          return e = _t(13, l, t, n), e.elementType = $e, e.lanes = u, e;
        case X:
          return e = _t(19, l, t, n), e.elementType = X, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case K:
              c = 10;
              break e;
            case ke:
              c = 9;
              break e;
            case ve:
              c = 11;
              break e;
            case q:
              c = 14;
              break e;
            case Z:
              c = 16, a = null;
              break e;
          }
          c = 29, l = Error(f(130, e === null ? "null" : typeof e, "")), a = null;
      }
      return t = _t(c, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
    }
    function Ql(e, t, l, a) {
      return e = _t(7, e, a, t), e.lanes = l, e;
    }
    function Zi(e, t, l) {
      return e = _t(6, e, null, t), e.lanes = l, e;
    }
    function $r(e) {
      var t = _t(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function Vi(e, t, l) {
      return t = _t(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
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
    var ba = [], _a = 0, ou = null, cn = 0, Ot = [], Ut = 0, ml = null, Gt = 1, Xt = "";
    function Ft(e, t) {
      ba[_a++] = cn, ba[_a++] = ou, ou = e, cn = t;
    }
    function Wr(e, t, l) {
      Ot[Ut++] = Gt, Ot[Ut++] = Xt, Ot[Ut++] = ml, ml = e;
      var a = Gt;
      e = Xt;
      var n = 32 - pt(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - pt(t) + n;
      if (30 < u) {
        var c = n - n % 5;
        u = (a & (1 << c) - 1).toString(32), a >>= c, n -= c, Gt = 1 << 32 - pt(t) + n | l << n | a, Xt = u + e;
      } else Gt = 1 << u | l << n | a, Xt = e;
    }
    function Ki(e) {
      e.return !== null && (Ft(e, 1), Wr(e, 1, 0));
    }
    function Ji(e) {
      for (; e === ou; ) ou = ba[--_a], ba[_a] = null, cn = ba[--_a], ba[_a] = null;
      for (; e === ml; ) ml = Ot[--Ut], Ot[Ut] = null, Xt = Ot[--Ut], Ot[Ut] = null, Gt = Ot[--Ut], Ot[Ut] = null;
    }
    function Ir(e, t) {
      Ot[Ut++] = Gt, Ot[Ut++] = Xt, Ot[Ut++] = ml, Gt = t.id, Xt = t.overflow, ml = e;
    }
    var Ie = null, Oe = null, re = false, hl = null, Dt = false, $i = Error(f(519));
    function gl(e) {
      var t = Error(f(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw sn(Mt(t, e)), $i;
    }
    function Pr(e) {
      var t = e.stateNode, l = e.type, a = e.memoizedProps;
      switch (t[We] = e, t[st] = a, l) {
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
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === true || bd(t.textContent, l) ? (a.popover != null && (ue("beforetoggle", t), ue("toggle", t)), a.onScroll != null && ue("scroll", t), a.onScrollEnd != null && ue("scrollend", t), a.onClick != null && (t.onclick = Kt), t = true) : t = false, t || gl(e, true);
    }
    function ef(e) {
      for (Ie = e.return; Ie; ) switch (Ie.tag) {
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
          Ie = Ie.return;
      }
    }
    function va(e) {
      if (e !== Ie) return false;
      if (!re) return ef(e), re = true, false;
      var t = e.tag, l;
      if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || ms(e.type, e.memoizedProps)), l = !l), l && Oe && gl(e), ef(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
        Oe = wd(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(317));
        Oe = wd(e);
      } else t === 27 ? (t = Oe, El(e.type) ? (e = bs, bs = null, Oe = e) : Oe = t) : Oe = Ie ? Rt(e.stateNode.nextSibling) : null;
      return true;
    }
    function kl() {
      Oe = Ie = null, re = false;
    }
    function Fi() {
      var e = hl;
      return e !== null && (mt === null ? mt = e : mt.push.apply(mt, e), hl = null), e;
    }
    function sn(e) {
      hl === null ? hl = [
        e
      ] : hl.push(e);
    }
    var Wi = y(null), Zl = null, Wt = null;
    function yl(e, t, l) {
      H(Wi, t._currentValue), t._currentValue = l;
    }
    function It(e) {
      e._currentValue = Wi.current, w(Wi);
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
          var c = n.child;
          u = u.firstContext;
          e: for (; u !== null; ) {
            var o = u;
            u = n;
            for (var h = 0; h < t.length; h++) if (o.context === t[h]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Ii(u.return, l, e), a || (c = null);
              break e;
            }
            u = o.next;
          }
        } else if (n.tag === 18) {
          if (c = n.return, c === null) throw Error(f(341));
          c.lanes |= l, u = c.alternate, u !== null && (u.lanes |= l), Ii(c, l, e), c = null;
        } else c = n.child;
        if (c !== null) c.return = n;
        else for (c = n; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (n = c.sibling, n !== null) {
            n.return = c.return, c = n;
            break;
          }
          c = c.return;
        }
        n = c;
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
          var c = n.alternate;
          if (c === null) throw Error(f(387));
          if (c = c.memoizedProps, c !== null) {
            var o = n.type;
            bt(n.pendingProps.value, c.value) || (e !== null ? e.push(o) : e = [
              o
            ]);
          }
        } else if (n === fe.current) {
          if (c = n.alternate, c === null) throw Error(f(387));
          c.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Rn) : e = [
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
    function Vl(e) {
      Zl = e, Wt = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Pe(e) {
      return tf(Zl, e);
    }
    function mu(e, t) {
      return Zl === null && Vl(e), tf(e, t);
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
    var e0 = typeof AbortController < "u" ? AbortController : function() {
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
    }, t0 = s.unstable_scheduleCallback, l0 = s.unstable_NormalPriority, qe = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function ec() {
      return {
        controller: new e0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function rn(e) {
      e.refCount--, e.refCount === 0 && t0(l0, function() {
        e.controller.abort();
      });
    }
    var fn = null, tc = 0, Sa = 0, ja = null;
    function a0(e, t) {
      if (fn === null) {
        var l = fn = [];
        tc = 0, Sa = ns(), ja = {
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
        ja !== null && (ja.status = "fulfilled");
        var e = fn;
        fn = null, Sa = 0, ja = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function n0(e, t) {
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
      Xo = gt(), typeof t == "object" && t !== null && typeof t.then == "function" && a0(e, t), af !== null && af(e, t);
    };
    var Kl = y(null);
    function lc() {
      var e = Kl.current;
      return e !== null ? e : Te.pooledCache;
    }
    function hu(e, t) {
      t === null ? H(Kl, Kl.current) : H(Kl, t.pool);
    }
    function nf() {
      var e = lc();
      return e === null ? null : {
        parent: qe._currentValue,
        pool: e
      };
    }
    var Na = Error(f(460)), ac = Error(f(474)), gu = Error(f(542)), yu = {
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
            if (e = Te, e !== null && 100 < e.shellSuspendCounter) throw Error(f(482));
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
          throw $l = t, Na;
      }
    }
    function Jl(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? ($l = l, Na) : l;
      }
    }
    var $l = null;
    function sf() {
      if ($l === null) throw Error(f(459));
      var e = $l;
      return $l = null, e;
    }
    function rf(e) {
      if (e === Na || e === gu) throw Error(f(483));
    }
    var Aa = null, on = 0;
    function pu(e) {
      var t = on;
      return on += 1, Aa === null && (Aa = []), cf(Aa, e, t);
    }
    function dn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function bu(e, t) {
      throw t.$$typeof === G ? Error(f(525)) : (e = Object.prototype.toString.call(t), Error(f(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function ff(e) {
      function t(S, p) {
        if (e) {
          var j = S.deletions;
          j === null ? (S.deletions = [
            p
          ], S.flags |= 16) : j.push(p);
        }
      }
      function l(S, p) {
        if (!e) return null;
        for (; p !== null; ) t(S, p), p = p.sibling;
        return null;
      }
      function a(S) {
        for (var p = /* @__PURE__ */ new Map(); S !== null; ) S.key !== null ? p.set(S.key, S) : p.set(S.index, S), S = S.sibling;
        return p;
      }
      function n(S, p) {
        return S = $t(S, p), S.index = 0, S.sibling = null, S;
      }
      function u(S, p, j) {
        return S.index = j, e ? (j = S.alternate, j !== null ? (j = j.index, j < p ? (S.flags |= 67108866, p) : j) : (S.flags |= 67108866, p)) : (S.flags |= 1048576, p);
      }
      function c(S) {
        return e && S.alternate === null && (S.flags |= 67108866), S;
      }
      function o(S, p, j, U) {
        return p === null || p.tag !== 6 ? (p = Zi(j, S.mode, U), p.return = S, p) : (p = n(p, j), p.return = S, p);
      }
      function h(S, p, j, U) {
        var V = j.type;
        return V === _e ? E(S, p, j.props.children, U, j.key) : p !== null && (p.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Z && Jl(V) === p.type) ? (p = n(p, j.props), dn(p, j), p.return = S, p) : (p = fu(j.type, j.key, j.props, null, S.mode, U), dn(p, j), p.return = S, p);
      }
      function N(S, p, j, U) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== j.containerInfo || p.stateNode.implementation !== j.implementation ? (p = Vi(j, S.mode, U), p.return = S, p) : (p = n(p, j.children || []), p.return = S, p);
      }
      function E(S, p, j, U, V) {
        return p === null || p.tag !== 7 ? (p = Ql(j, S.mode, U, V), p.return = S, p) : (p = n(p, j), p.return = S, p);
      }
      function D(S, p, j) {
        if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint") return p = Zi("" + p, S.mode, j), p.return = S, p;
        if (typeof p == "object" && p !== null) {
          switch (p.$$typeof) {
            case P:
              return j = fu(p.type, p.key, p.props, null, S.mode, j), dn(j, p), j.return = S, j;
            case pe:
              return p = Vi(p, S.mode, j), p.return = S, p;
            case Z:
              return p = Jl(p), D(S, p, j);
          }
          if (Fe(p) || ge(p)) return p = Ql(p, S.mode, j, null), p.return = S, p;
          if (typeof p.then == "function") return D(S, pu(p), j);
          if (p.$$typeof === K) return D(S, mu(S, p), j);
          bu(S, p);
        }
        return null;
      }
      function A(S, p, j, U) {
        var V = p !== null ? p.key : null;
        if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return V !== null ? null : o(S, p, "" + j, U);
        if (typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case P:
              return j.key === V ? h(S, p, j, U) : null;
            case pe:
              return j.key === V ? N(S, p, j, U) : null;
            case Z:
              return j = Jl(j), A(S, p, j, U);
          }
          if (Fe(j) || ge(j)) return V !== null ? null : E(S, p, j, U, null);
          if (typeof j.then == "function") return A(S, p, pu(j), U);
          if (j.$$typeof === K) return A(S, p, mu(S, j), U);
          bu(S, j);
        }
        return null;
      }
      function z(S, p, j, U, V) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return S = S.get(j) || null, o(p, S, "" + U, V);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case P:
              return S = S.get(U.key === null ? j : U.key) || null, h(p, S, U, V);
            case pe:
              return S = S.get(U.key === null ? j : U.key) || null, N(p, S, U, V);
            case Z:
              return U = Jl(U), z(S, p, j, U, V);
          }
          if (Fe(U) || ge(U)) return S = S.get(j) || null, E(p, S, U, V, null);
          if (typeof U.then == "function") return z(S, p, j, pu(U), V);
          if (U.$$typeof === K) return z(S, p, j, mu(p, U), V);
          bu(p, U);
        }
        return null;
      }
      function Y(S, p, j, U) {
        for (var V = null, me = null, k = p, te = p = 0, ce = null; k !== null && te < j.length; te++) {
          k.index > te ? (ce = k, k = null) : ce = k.sibling;
          var he = A(S, k, j[te], U);
          if (he === null) {
            k === null && (k = ce);
            break;
          }
          e && k && he.alternate === null && t(S, k), p = u(he, p, te), me === null ? V = he : me.sibling = he, me = he, k = ce;
        }
        if (te === j.length) return l(S, k), re && Ft(S, te), V;
        if (k === null) {
          for (; te < j.length; te++) k = D(S, j[te], U), k !== null && (p = u(k, p, te), me === null ? V = k : me.sibling = k, me = k);
          return re && Ft(S, te), V;
        }
        for (k = a(k); te < j.length; te++) ce = z(k, S, te, j[te], U), ce !== null && (e && ce.alternate !== null && k.delete(ce.key === null ? te : ce.key), p = u(ce, p, te), me === null ? V = ce : me.sibling = ce, me = ce);
        return e && k.forEach(function(Cl) {
          return t(S, Cl);
        }), re && Ft(S, te), V;
      }
      function J(S, p, j, U) {
        if (j == null) throw Error(f(151));
        for (var V = null, me = null, k = p, te = p = 0, ce = null, he = j.next(); k !== null && !he.done; te++, he = j.next()) {
          k.index > te ? (ce = k, k = null) : ce = k.sibling;
          var Cl = A(S, k, he.value, U);
          if (Cl === null) {
            k === null && (k = ce);
            break;
          }
          e && k && Cl.alternate === null && t(S, k), p = u(Cl, p, te), me === null ? V = Cl : me.sibling = Cl, me = Cl, k = ce;
        }
        if (he.done) return l(S, k), re && Ft(S, te), V;
        if (k === null) {
          for (; !he.done; te++, he = j.next()) he = D(S, he.value, U), he !== null && (p = u(he, p, te), me === null ? V = he : me.sibling = he, me = he);
          return re && Ft(S, te), V;
        }
        for (k = a(k); !he.done; te++, he = j.next()) he = z(k, S, te, he.value, U), he !== null && (e && he.alternate !== null && k.delete(he.key === null ? te : he.key), p = u(he, p, te), me === null ? V = he : me.sibling = he, me = he);
        return e && k.forEach(function(gg) {
          return t(S, gg);
        }), re && Ft(S, te), V;
      }
      function ze(S, p, j, U) {
        if (typeof j == "object" && j !== null && j.type === _e && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) {
          switch (j.$$typeof) {
            case P:
              e: {
                for (var V = j.key; p !== null; ) {
                  if (p.key === V) {
                    if (V = j.type, V === _e) {
                      if (p.tag === 7) {
                        l(S, p.sibling), U = n(p, j.props.children), U.return = S, S = U;
                        break e;
                      }
                    } else if (p.elementType === V || typeof V == "object" && V !== null && V.$$typeof === Z && Jl(V) === p.type) {
                      l(S, p.sibling), U = n(p, j.props), dn(U, j), U.return = S, S = U;
                      break e;
                    }
                    l(S, p);
                    break;
                  } else t(S, p);
                  p = p.sibling;
                }
                j.type === _e ? (U = Ql(j.props.children, S.mode, U, j.key), U.return = S, S = U) : (U = fu(j.type, j.key, j.props, null, S.mode, U), dn(U, j), U.return = S, S = U);
              }
              return c(S);
            case pe:
              e: {
                for (V = j.key; p !== null; ) {
                  if (p.key === V) if (p.tag === 4 && p.stateNode.containerInfo === j.containerInfo && p.stateNode.implementation === j.implementation) {
                    l(S, p.sibling), U = n(p, j.children || []), U.return = S, S = U;
                    break e;
                  } else {
                    l(S, p);
                    break;
                  }
                  else t(S, p);
                  p = p.sibling;
                }
                U = Vi(j, S.mode, U), U.return = S, S = U;
              }
              return c(S);
            case Z:
              return j = Jl(j), ze(S, p, j, U);
          }
          if (Fe(j)) return Y(S, p, j, U);
          if (ge(j)) {
            if (V = ge(j), typeof V != "function") throw Error(f(150));
            return j = V.call(j), J(S, p, j, U);
          }
          if (typeof j.then == "function") return ze(S, p, pu(j), U);
          if (j.$$typeof === K) return ze(S, p, mu(S, j), U);
          bu(S, j);
        }
        return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, p !== null && p.tag === 6 ? (l(S, p.sibling), U = n(p, j), U.return = S, S = U) : (l(S, p), U = Zi(j, S.mode, U), U.return = S, S = U), c(S)) : l(S, p);
      }
      return function(S, p, j, U) {
        try {
          on = 0;
          var V = ze(S, p, j, U);
          return Aa = null, V;
        } catch (k) {
          if (k === Na || k === gu) throw k;
          var me = _t(29, k, null, S.mode);
          return me.lanes = U, me.return = S, me;
        }
      };
    }
    var Fl = ff(true), of = ff(false), pl = false;
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
    function bl(e) {
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
            var c = {
              lane: l.lane,
              tag: l.tag,
              payload: l.payload,
              callback: null,
              next: null
            };
            u === null ? n = u = c : u = u.next = c, l = l.next;
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
        var e = ja;
        if (e !== null) throw e;
      }
    }
    function gn(e, t, l, a) {
      cc = false;
      var n = e.updateQueue;
      pl = false;
      var u = n.firstBaseUpdate, c = n.lastBaseUpdate, o = n.shared.pending;
      if (o !== null) {
        n.shared.pending = null;
        var h = o, N = h.next;
        h.next = null, c === null ? u = N : c.next = N, c = h;
        var E = e.alternate;
        E !== null && (E = E.updateQueue, o = E.lastBaseUpdate, o !== c && (o === null ? E.firstBaseUpdate = N : o.next = N, E.lastBaseUpdate = h));
      }
      if (u !== null) {
        var D = n.baseState;
        c = 0, E = N = h = null, o = u;
        do {
          var A = o.lane & -536870913, z = A !== o.lane;
          if (z ? (ie & A) === A : (a & A) === A) {
            A !== 0 && A === Sa && (cc = true), E !== null && (E = E.next = {
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            });
            e: {
              var Y = e, J = o;
              A = t;
              var ze = l;
              switch (J.tag) {
                case 1:
                  if (Y = J.payload, typeof Y == "function") {
                    D = Y.call(ze, D, A);
                    break e;
                  }
                  D = Y;
                  break e;
                case 3:
                  Y.flags = Y.flags & -65537 | 128;
                case 0:
                  if (Y = J.payload, A = typeof Y == "function" ? Y.call(ze, D, A) : Y, A == null) break e;
                  D = C({}, D, A);
                  break e;
                case 2:
                  pl = true;
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
          }, E === null ? (N = E = z, h = D) : E = E.next = z, c |= A;
          if (o = o.next, o === null) {
            if (o = n.shared.pending, o === null) break;
            z = o, o = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
          }
        } while (true);
        E === null && (h = D), n.baseState = h, n.firstBaseUpdate = N, n.lastBaseUpdate = E, u === null && (n.shared.lanes = 0), Nl |= c, e.lanes = c, e.memoizedState = D;
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
      e = cl, H(_u, e), H(za, t), cl = e | t.baseLanes;
    }
    function sc() {
      H(_u, cl), H(za, za.current);
    }
    function rc() {
      cl = _u.current, w(za), w(_u);
    }
    var vt = y(null), Ct = null;
    function vl(e) {
      var t = e.alternate;
      H(He, He.current & 1), H(vt, e), Ct === null && (t === null || za.current !== null || t.memoizedState !== null) && (Ct = e);
    }
    function fc(e) {
      H(He, He.current), H(vt, e), Ct === null && (Ct = e);
    }
    function gf(e) {
      e.tag === 22 ? (H(He, He.current), H(vt, e), Ct === null && (Ct = e)) : xl();
    }
    function xl() {
      H(He, He.current), H(vt, vt.current);
    }
    function xt(e) {
      w(vt), Ct === e && (Ct = null), w(He);
    }
    var He = y(0);
    function vu(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || ys(l) || ps(l))) return t;
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
    var Pt = 0, I = null, Ne = null, Le = null, xu = false, wa = false, Wl = false, Su = 0, yn = 0, Ta = null, u0 = 0;
    function Ce() {
      throw Error(f(321));
    }
    function oc(e, t) {
      if (t === null) return false;
      for (var l = 0; l < t.length && l < e.length; l++) if (!bt(e[l], t[l])) return false;
      return true;
    }
    function dc(e, t, l, a, n, u) {
      return Pt = u, I = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, O.H = e === null || e.memoizedState === null ? If : wc, Wl = false, u = l(a, n), Wl = false, wa && (u = pf(t, l, a, n)), yf(e), u;
    }
    function yf(e) {
      O.H = _n;
      var t = Ne !== null && Ne.next !== null;
      if (Pt = 0, Le = Ne = I = null, xu = false, yn = 0, Ta = null, t) throw Error(f(300));
      e === null || Ye || (e = e.dependencies, e !== null && du(e) && (Ye = true));
    }
    function pf(e, t, l, a) {
      I = e;
      var n = 0;
      do {
        if (wa && (Ta = null), yn = 0, wa = false, 25 <= n) throw Error(f(301));
        if (n += 1, Le = Ne = null, e.updateQueue != null) {
          var u = e.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        O.H = Pf, u = t(l, a);
      } while (wa);
      return u;
    }
    function i0() {
      var e = O.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? pn(t) : t, e = e.useState()[0], (Ne !== null ? Ne.memoizedState : null) !== e && (I.flags |= 1024), t;
    }
    function mc() {
      var e = Su !== 0;
      return Su = 0, e;
    }
    function hc(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function gc(e) {
      if (xu) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        xu = false;
      }
      Pt = 0, Le = Ne = I = null, wa = false, yn = Su = 0, Ta = null;
    }
    function ut() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Le === null ? I.memoizedState = Le = e : Le = Le.next = e, Le;
    }
    function Be() {
      if (Ne === null) {
        var e = I.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = Ne.next;
      var t = Le === null ? I.memoizedState : Le.next;
      if (t !== null) Le = t, Ne = e;
      else {
        if (e === null) throw I.alternate === null ? Error(f(467)) : Error(f(310));
        Ne = e, e = {
          memoizedState: Ne.memoizedState,
          baseState: Ne.baseState,
          baseQueue: Ne.baseQueue,
          queue: Ne.queue,
          next: null
        }, Le === null ? I.memoizedState = Le = e : Le = Le.next = e;
      }
      return Le;
    }
    function ju() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function pn(e) {
      var t = yn;
      return yn += 1, Ta === null && (Ta = []), e = cf(Ta, e, t), t = I, (Le === null ? t.memoizedState : Le.next) === null && (t = t.alternate, O.H = t === null || t.memoizedState === null ? If : wc), e;
    }
    function Nu(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return pn(e);
        if (e.$$typeof === K) return Pe(e);
      }
      throw Error(f(438, String(e)));
    }
    function yc(e) {
      var t = null, l = I.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var a = I.alternate;
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
      }), l === null && (l = ju(), I.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Q;
      return t.index++, l;
    }
    function el(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Au(e) {
      var t = Be();
      return pc(t, Ne, e);
    }
    function pc(e, t, l) {
      var a = e.queue;
      if (a === null) throw Error(f(311));
      a.lastRenderedReducer = l;
      var n = e.baseQueue, u = a.pending;
      if (u !== null) {
        if (n !== null) {
          var c = n.next;
          n.next = u.next, u.next = c;
        }
        t.baseQueue = n = u, a.pending = null;
      }
      if (u = e.baseState, n === null) e.memoizedState = u;
      else {
        t = n.next;
        var o = c = null, h = null, N = t, E = false;
        do {
          var D = N.lane & -536870913;
          if (D !== N.lane ? (ie & D) === D : (Pt & D) === D) {
            var A = N.revertLane;
            if (A === 0) h !== null && (h = h.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), D === Sa && (E = true);
            else if ((Pt & A) === A) {
              N = N.next, A === Sa && (E = true);
              continue;
            } else D = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, h === null ? (o = h = D, c = u) : h = h.next = D, I.lanes |= A, Nl |= A;
            D = N.action, Wl && l(u, D), u = N.hasEagerState ? N.eagerState : l(u, D);
          } else A = {
            lane: D,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, h === null ? (o = h = A, c = u) : h = h.next = A, I.lanes |= D, Nl |= D;
          N = N.next;
        } while (N !== null && N !== t);
        if (h === null ? c = u : h.next = o, !bt(u, e.memoizedState) && (Ye = true, E && (l = ja, l !== null))) throw l;
        e.memoizedState = u, e.baseState = c, e.baseQueue = h, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        e.memoizedState,
        a.dispatch
      ];
    }
    function bc(e) {
      var t = Be(), l = t.queue;
      if (l === null) throw Error(f(311));
      l.lastRenderedReducer = e;
      var a = l.dispatch, n = l.pending, u = t.memoizedState;
      if (n !== null) {
        l.pending = null;
        var c = n = n.next;
        do
          u = e(u, c.action), c = c.next;
        while (c !== n);
        bt(u, t.memoizedState) || (Ye = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function bf(e, t, l) {
      var a = I, n = Be(), u = re;
      if (u) {
        if (l === void 0) throw Error(f(407));
        l = l();
      } else l = t();
      var c = !bt((Ne || n).memoizedState, l);
      if (c && (n.memoizedState = l, Ye = true), n = n.queue, xc(xf.bind(null, a, n, e), [
        e
      ]), n.getSnapshot !== t || c || Le !== null && Le.memoizedState.tag & 1) {
        if (a.flags |= 2048, Ea(9, {
          destroy: void 0
        }, vf.bind(null, a, n, l, t), null), Te === null) throw Error(f(349));
        u || (Pt & 127) !== 0 || _f(a, t, l);
      }
      return l;
    }
    function _f(e, t, l) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: l
      }, t = I.updateQueue, t === null ? (t = ju(), I.updateQueue = t, t.stores = [
        e
      ]) : (l = t.stores, l === null ? t.stores = [
        e
      ] : l.push(e));
    }
    function vf(e, t, l, a) {
      t.value = l, t.getSnapshot = a, Sf(t) && jf(e);
    }
    function xf(e, t, l) {
      return l(function() {
        Sf(t) && jf(e);
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
    function jf(e) {
      var t = Xl(e, 2);
      t !== null && ht(t, e, 2);
    }
    function _c(e) {
      var t = ut();
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
    function Nf(e, t, l, a) {
      return e.baseState = l, pc(e, Ne, typeof a == "function" ? a : el);
    }
    function c0(e, t, l, a, n) {
      if (Tu(e)) throw Error(f(485));
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
          then: function(c) {
            u.listeners.push(c);
          }
        };
        O.T !== null ? l(true) : u.isTransition = false, a(u), l = t.pending, l === null ? (u.next = t.pending = u, Af(t, u)) : (u.next = l.next, t.pending = l.next = u);
      }
    }
    function Af(e, t) {
      var l = t.action, a = t.payload, n = e.state;
      if (t.isTransition) {
        var u = O.T, c = {};
        O.T = c;
        try {
          var o = l(n, a), h = O.S;
          h !== null && h(c, o), zf(e, t, o);
        } catch (N) {
          vc(e, t, N);
        } finally {
          u !== null && c.types !== null && (u.types = c.types), O.T = u;
        }
      } else try {
        u = l(n, a), zf(e, t, u);
      } catch (N) {
        vc(e, t, N);
      }
    }
    function zf(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        wf(e, t, a);
      }, function(a) {
        return vc(e, t, a);
      }) : wf(e, t, l);
    }
    function wf(e, t, l) {
      t.status = "fulfilled", t.value = l, Tf(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Af(e, l)));
    }
    function vc(e, t, l) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = l, Tf(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function Tf(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function Ef(e, t) {
      return t;
    }
    function Mf(e, t) {
      if (re) {
        var l = Te.formState;
        if (l !== null) {
          e: {
            var a = I;
            if (re) {
              if (Oe) {
                t: {
                  for (var n = Oe, u = Dt; n.nodeType !== 8; ) {
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
                  Oe = Rt(n.nextSibling), a = n.data === "F!";
                  break e;
                }
              }
              gl(a);
            }
            a = false;
          }
          a && (t = l[0]);
        }
      }
      return l = ut(), l.memoizedState = l.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ef,
        lastRenderedState: t
      }, l.queue = a, l = $f.bind(null, I, a), a.dispatch = l, a = _c(false), u = zc.bind(null, I, false, a.queue), a = ut(), n = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, a.queue = n, l = c0.bind(null, I, n, u, l), n.dispatch = l, a.memoizedState = e, [
        t,
        l,
        false
      ];
    }
    function Of(e) {
      var t = Be();
      return Uf(t, Ne, e);
    }
    function Uf(e, t, l) {
      if (t = pc(e, t, Ef)[0], e = Au(el)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = pn(t);
      } catch (c) {
        throw c === Na ? gu : c;
      }
      else a = t;
      t = Be();
      var n = t.queue, u = n.dispatch;
      return l !== t.memoizedState && (I.flags |= 2048, Ea(9, {
        destroy: void 0
      }, s0.bind(null, n, l), null)), [
        a,
        u,
        e
      ];
    }
    function s0(e, t) {
      e.action = t;
    }
    function Df(e) {
      var t = Be(), l = Ne;
      if (l !== null) return Uf(t, l, e);
      Be(), t = t.memoizedState, l = Be();
      var a = l.queue.dispatch;
      return l.memoizedState = e, [
        t,
        a,
        false
      ];
    }
    function Ea(e, t, l, a) {
      return e = {
        tag: e,
        create: l,
        deps: a,
        inst: t,
        next: null
      }, t = I.updateQueue, t === null && (t = ju(), I.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
    }
    function Cf() {
      return Be().memoizedState;
    }
    function zu(e, t, l, a) {
      var n = ut();
      I.flags |= e, n.memoizedState = Ea(1 | t, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function wu(e, t, l, a) {
      var n = Be();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      Ne !== null && a !== null && oc(a, Ne.memoizedState.deps) ? n.memoizedState = Ea(t, u, l, a) : (I.flags |= e, n.memoizedState = Ea(1 | t, u, l, a));
    }
    function Rf(e, t) {
      zu(8390656, 8, e, t);
    }
    function xc(e, t) {
      wu(2048, 8, e, t);
    }
    function r0(e) {
      I.flags |= 4;
      var t = I.updateQueue;
      if (t === null) t = ju(), I.updateQueue = t, t.events = [
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
      return r0({
        ref: t,
        nextImpl: e
      }), function() {
        if ((ye & 2) !== 0) throw Error(f(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Bf(e, t) {
      return wu(4, 2, e, t);
    }
    function qf(e, t) {
      return wu(4, 4, e, t);
    }
    function Lf(e, t) {
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
    function Yf(e, t, l) {
      l = l != null ? l.concat([
        e
      ]) : null, wu(4, 4, Lf.bind(null, t, e), l);
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
    function jc(e, t, l) {
      return l === void 0 || (Pt & 1073741824) !== 0 && (ie & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = ko(), I.lanes |= e, Nl |= e, l);
    }
    function Qf(e, t, l, a) {
      return bt(l, t) ? l : za.current !== null ? (e = jc(e, l, a), bt(e, t) || (Ye = true), e) : (Pt & 42) === 0 || (Pt & 1073741824) !== 0 && (ie & 261930) === 0 ? (Ye = true, e.memoizedState = l) : (e = ko(), I.lanes |= e, Nl |= e, t);
    }
    function kf(e, t, l, a, n) {
      var u = B.p;
      B.p = u !== 0 && 8 > u ? u : 8;
      var c = O.T, o = {};
      O.T = o, zc(e, false, t, l);
      try {
        var h = n(), N = O.S;
        if (N !== null && N(o, h), h !== null && typeof h == "object" && typeof h.then == "function") {
          var E = n0(h, a);
          bn(e, t, E, Nt(e));
        } else bn(e, t, a, Nt(e));
      } catch (D) {
        bn(e, t, {
          then: function() {
          },
          status: "rejected",
          reason: D
        }, Nt());
      } finally {
        B.p = u, c !== null && o.types !== null && (c.types = o.types), O.T = c;
      }
    }
    function f0() {
    }
    function Nc(e, t, l, a) {
      if (e.tag !== 5) throw Error(f(476));
      var n = Zf(e).queue;
      kf(e, n, t, $, l === null ? f0 : function() {
        return Vf(e), l(a);
      });
    }
    function Zf(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: $,
        baseState: $,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: el,
          lastRenderedState: $
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
    function Vf(e) {
      var t = Zf(e);
      t.next === null && (t = e.alternate.memoizedState), bn(e, t.next.queue, {}, Nt());
    }
    function Ac() {
      return Pe(Rn);
    }
    function Kf() {
      return Be().memoizedState;
    }
    function Jf() {
      return Be().memoizedState;
    }
    function o0(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = Nt();
            e = bl(l);
            var a = _l(t, e, l);
            a !== null && (ht(a, t, l), mn(a, t, l)), t = {
              cache: ec()
            }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function d0(e, t, l) {
      var a = Nt();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Tu(e) ? Ff(t, l) : (l = Qi(e, t, l, a), l !== null && (ht(l, e, a), Wf(l, t, a)));
    }
    function $f(e, t, l) {
      var a = Nt();
      bn(e, t, l, a);
    }
    function bn(e, t, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Tu(e)) Ff(t, n);
      else {
        var u = e.alternate;
        if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
          var c = t.lastRenderedState, o = u(c, l);
          if (n.hasEagerState = true, n.eagerState = o, bt(o, c)) return su(e, t, n, 0), Te === null && cu(), false;
        } catch {
        }
        if (l = Qi(e, t, n, a), l !== null) return ht(l, e, a), Wf(l, t, a), true;
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
      }, Tu(e)) {
        if (t) throw Error(f(479));
      } else t = Qi(e, l, a, 2), t !== null && ht(t, e, 2);
    }
    function Tu(e) {
      var t = e.alternate;
      return e === I || t !== null && t === I;
    }
    function Ff(e, t) {
      wa = xu = true;
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
      readContext: Pe,
      use: Nu,
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
      readContext: Pe,
      use: Nu,
      useCallback: function(e, t) {
        return ut().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: Pe,
      useEffect: Rf,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([
          e
        ]) : null, zu(4194308, 4, Lf.bind(null, t, e), l);
      },
      useLayoutEffect: function(e, t) {
        return zu(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        zu(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var l = ut();
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
        var a = ut();
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
        }, a.queue = e, e = e.dispatch = d0.bind(null, I, e), [
          a.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = ut();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: function(e) {
        e = _c(e);
        var t = e.queue, l = $f.bind(null, I, t);
        return t.dispatch = l, [
          e.memoizedState,
          l
        ];
      },
      useDebugValue: Sc,
      useDeferredValue: function(e, t) {
        var l = ut();
        return jc(l, e, t);
      },
      useTransition: function() {
        var e = _c(false);
        return e = kf.bind(null, I, e.queue, true, false), ut().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, t, l) {
        var a = I, n = ut();
        if (re) {
          if (l === void 0) throw Error(f(407));
          l = l();
        } else {
          if (l = t(), Te === null) throw Error(f(349));
          (ie & 127) !== 0 || _f(a, t, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: t
        };
        return n.queue = u, Rf(xf.bind(null, a, u, e), [
          e
        ]), a.flags |= 2048, Ea(9, {
          destroy: void 0
        }, vf.bind(null, a, u, l, t), null), l;
      },
      useId: function() {
        var e = ut(), t = Te.identifierPrefix;
        if (re) {
          var l = Xt, a = Gt;
          l = (a & ~(1 << 32 - pt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Su++, 0 < l && (t += "H" + l.toString(32)), t += "_";
        } else l = u0++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t;
      },
      useHostTransitionStatus: Ac,
      useFormState: Mf,
      useActionState: Mf,
      useOptimistic: function(e) {
        var t = ut();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = zc.bind(null, I, true, l), l.dispatch = t, [
          e,
          t
        ];
      },
      useMemoCache: yc,
      useCacheRefresh: function() {
        return ut().memoizedState = o0.bind(null, I);
      },
      useEffectEvent: function(e) {
        var t = ut(), l = {
          impl: e
        };
        return t.memoizedState = l, function() {
          if ((ye & 2) !== 0) throw Error(f(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, wc = {
      readContext: Pe,
      use: Nu,
      useCallback: Gf,
      useContext: Pe,
      useEffect: xc,
      useImperativeHandle: Yf,
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
        return Qf(l, Ne.memoizedState, e, t);
      },
      useTransition: function() {
        var e = Au(el)[0], t = Be().memoizedState;
        return [
          typeof e == "boolean" ? e : pn(e),
          t
        ];
      },
      useSyncExternalStore: bf,
      useId: Kf,
      useHostTransitionStatus: Ac,
      useFormState: Of,
      useActionState: Of,
      useOptimistic: function(e, t) {
        var l = Be();
        return Nf(l, Ne, e, t);
      },
      useMemoCache: yc,
      useCacheRefresh: Jf
    };
    wc.useEffectEvent = Hf;
    var Pf = {
      readContext: Pe,
      use: Nu,
      useCallback: Gf,
      useContext: Pe,
      useEffect: xc,
      useImperativeHandle: Yf,
      useInsertionEffect: Bf,
      useLayoutEffect: qf,
      useMemo: Xf,
      useReducer: bc,
      useRef: Cf,
      useState: function() {
        return bc(el);
      },
      useDebugValue: Sc,
      useDeferredValue: function(e, t) {
        var l = Be();
        return Ne === null ? jc(l, e, t) : Qf(l, Ne.memoizedState, e, t);
      },
      useTransition: function() {
        var e = bc(el)[0], t = Be().memoizedState;
        return [
          typeof e == "boolean" ? e : pn(e),
          t
        ];
      },
      useSyncExternalStore: bf,
      useId: Kf,
      useHostTransitionStatus: Ac,
      useFormState: Df,
      useActionState: Df,
      useOptimistic: function(e, t) {
        var l = Be();
        return Ne !== null ? Nf(l, Ne, e, t) : (l.baseState = e, [
          e,
          l.queue.dispatch
        ]);
      },
      useMemoCache: yc,
      useCacheRefresh: Jf
    };
    Pf.useEffectEvent = Hf;
    function Tc(e, t, l, a) {
      t = e.memoizedState, l = l(a, t), l = l == null ? t : C({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var Ec = {
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var a = Nt(), n = bl(a);
        n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (ht(t, e, a), mn(t, e, a));
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var a = Nt(), n = bl(a);
        n.tag = 1, n.payload = t, l != null && (n.callback = l), t = _l(e, n, a), t !== null && (ht(t, e, a), mn(t, e, a));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = Nt(), a = bl(l);
        a.tag = 2, t != null && (a.callback = t), t = _l(e, a, l), t !== null && (ht(t, e, l), mn(t, e, l));
      }
    };
    function eo(e, t, l, a, n, u, c) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, c) : t.prototype && t.prototype.isPureReactComponent ? !nn(l, a) || !nn(n, u) : true;
    }
    function to(e, t, l, a) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Ec.enqueueReplaceState(t, t.state, null);
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
    function Eu(e, t) {
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
      return l = bl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        Eu(e, t);
      }, l;
    }
    function io(e) {
      return e = bl(e), e.tag = 3, e;
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
      var c = l.stateNode;
      c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
        uo(t, l, a), typeof n != "function" && (Al === null ? Al = /* @__PURE__ */ new Set([
          this
        ]) : Al.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : ""
        });
      });
    }
    function m0(e, t, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = l.alternate, t !== null && xa(t, l, n, true), l = vt.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Ct === null ? Gu() : l.alternate === null && Re === 0 && (Re = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === yu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : t.add(a), ts(e, a, n)), false;
            case 22:
              return l.flags |= 65536, a === yu ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
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
      if (re) return t = vt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== $i && (e = Error(f(422), {
        cause: a
      }), sn(Mt(e, l)))) : (a !== $i && (t = Error(f(423), {
        cause: a
      }), sn(Mt(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Mt(a, l), n = Mc(e.stateNode, a, n), ic(e, n), Re !== 4 && (Re = 2)), false;
      var u = Error(f(520), {
        cause: a
      });
      if (u = Mt(u, l), wn === null ? wn = [
        u
      ] : wn.push(u), Re !== 4 && (Re = 2), t === null) return true;
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
    var Oc = Error(f(461)), Ye = false;
    function et(e, t, l, a) {
      t.child = e === null ? of(t, null, l, a) : Fl(t, e.child, l, a);
    }
    function so(e, t, l, a, n) {
      l = l.render;
      var u = t.ref;
      if ("ref" in a) {
        var c = {};
        for (var o in a) o !== "ref" && (c[o] = a[o]);
      } else c = a;
      return Vl(t), a = dc(e, t, l, c, u, n), o = mc(), e !== null && !Ye ? (hc(e, t, n), tl(e, t, n)) : (re && o && Ki(t), t.flags |= 1, et(e, t, a, n), t.child);
    }
    function ro(e, t, l, a, n) {
      if (e === null) {
        var u = l.type;
        return typeof u == "function" && !ki(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, fo(e, t, u, a, n)) : (e = fu(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (u = e.child, !Lc(e, n)) {
        var c = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : nn, l(c, a) && e.ref === t.ref) return tl(e, t, n);
      }
      return t.flags |= 1, e = $t(u, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function fo(e, t, l, a, n) {
      if (e !== null) {
        var u = e.memoizedProps;
        if (nn(u, a) && e.ref === t.ref) if (Ye = false, t.pendingProps = a = u, Lc(e, n)) (e.flags & 131072) !== 0 && (Ye = true);
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
        }, e !== null && hu(t, u !== null ? u.cachePool : null), u !== null ? hf(t, u) : sc(), gf(t);
        else return a = t.lanes = 536870912, mo(e, t, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (hu(t, u.cachePool), hf(t, u), xl(), t.memoizedState = null) : (e !== null && hu(t, null), sc(), xl());
      return et(e, t, n, l), t.child;
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
        parent: qe._currentValue,
        pool: u
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, e !== null && hu(t, null), sc(), gf(t), e !== null && xa(e, t, a, true), t.childLanes = n, null;
    }
    function Mu(e, t) {
      return t = Uu({
        mode: t.mode,
        children: t.children
      }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function ho(e, t, l) {
      return Fl(t, e.child, null, l), e = Mu(t, t.pendingProps), e.flags |= 2, xt(t), t.memoizedState = null, e;
    }
    function h0(e, t, l) {
      var a = t.pendingProps, n = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (re) {
          if (a.mode === "hidden") return e = Mu(t, a), t.lanes = 536870912, vn(null, e);
          if (fc(t), (e = Oe) ? (e = zd(e, Dt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ml !== null ? {
              id: Gt,
              overflow: Xt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = $r(e), l.return = t, t.child = l, Ie = t, Oe = null)) : e = null, e === null) throw gl(t);
          return t.lanes = 536870912, null;
        }
        return Mu(t, a);
      }
      var u = e.memoizedState;
      if (u !== null) {
        var c = u.dehydrated;
        if (fc(t), n) if (t.flags & 256) t.flags &= -257, t = ho(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
        else throw Error(f(558));
        else if (Ye || xa(e, t, l, false), n = (l & e.childLanes) !== 0, Ye || n) {
          if (a = Te, a !== null && (c = lr(a, l), c !== 0 && c !== u.retryLane)) throw u.retryLane = c, Xl(e, c), ht(a, e, c), Oc;
          Gu(), t = ho(e, t, l);
        } else e = u.treeContext, Oe = Rt(c.nextSibling), Ie = t, re = true, hl = null, Dt = false, e !== null && Ir(t, e), t = Mu(t, a), t.flags |= 4096;
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
      return Vl(t), l = dc(e, t, l, a, void 0, n), a = mc(), e !== null && !Ye ? (hc(e, t, n), tl(e, t, n)) : (re && a && Ki(t), t.flags |= 1, et(e, t, l, n), t.child);
    }
    function go(e, t, l, a, n, u) {
      return Vl(t), t.updateQueue = null, l = pf(t, a, l, n), yf(e), a = mc(), e !== null && !Ye ? (hc(e, t, u), tl(e, t, u)) : (re && a && Ki(t), t.flags |= 1, et(e, t, l, u), t.child);
    }
    function yo(e, t, l, a, n) {
      if (Vl(t), t.stateNode === null) {
        var u = pa, c = l.contextType;
        typeof c == "object" && c !== null && (u = Pe(c)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Ec, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, nc(t), c = l.contextType, u.context = typeof c == "object" && c !== null ? Pe(c) : pa, u.state = t.memoizedState, c = l.getDerivedStateFromProps, typeof c == "function" && (Tc(t, l, c, a), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (c = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), c !== u.state && Ec.enqueueReplaceState(u, u.state, null), gn(t, a, u, n), hn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (e === null) {
        u = t.stateNode;
        var o = t.memoizedProps, h = Il(l, o);
        u.props = h;
        var N = u.context, E = l.contextType;
        c = pa, typeof E == "object" && E !== null && (c = Pe(E));
        var D = l.getDerivedStateFromProps;
        E = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, E || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || N !== c) && to(t, u, a, c), pl = false;
        var A = t.memoizedState;
        u.state = A, gn(t, a, u, n), hn(), N = t.memoizedState, o || A !== N || pl ? (typeof D == "function" && (Tc(t, l, D, a), N = t.memoizedState), (h = pl || eo(t, l, h, a, A, N, c)) ? (E || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), u.props = a, u.state = N, u.context = c, a = h) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        u = t.stateNode, uc(e, t), c = t.memoizedProps, E = Il(l, c), u.props = E, D = t.pendingProps, A = u.context, N = l.contextType, h = pa, typeof N == "object" && N !== null && (h = Pe(N)), o = l.getDerivedStateFromProps, (N = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (c !== D || A !== h) && to(t, u, a, h), pl = false, A = t.memoizedState, u.state = A, gn(t, a, u, n), hn();
        var z = t.memoizedState;
        c !== D || A !== z || pl || e !== null && e.dependencies !== null && du(e.dependencies) ? (typeof o == "function" && (Tc(t, l, o, a), z = t.memoizedState), (E = pl || eo(t, l, E, a, A, z, h) || e !== null && e.dependencies !== null && du(e.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, h), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, h)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = h, a = E) : (typeof u.componentDidUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), a = false);
      }
      return u = a, Ou(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Fl(t, e.child, null, n), t.child = Fl(t, null, l, n)) : et(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = tl(e, t, n), e;
    }
    function po(e, t, l, a) {
      return kl(), t.flags |= 256, et(e, t, l, a), t.child;
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
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= jt), e;
    }
    function bo(e, t, l) {
      var a = t.pendingProps, n = false, u = (t.flags & 128) !== 0, c;
      if ((c = u) || (c = e !== null && e.memoizedState === null ? false : (He.current & 2) !== 0), c && (n = true, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (re) {
          if (n ? vl(t) : xl(), (e = Oe) ? (e = zd(e, Dt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: ml !== null ? {
              id: Gt,
              overflow: Xt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = $r(e), l.return = t, t.child = l, Ie = t, Oe = null)) : e = null, e === null) throw gl(t);
          return ps(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var o = a.children;
        return a = a.fallback, n ? (xl(), n = t.mode, o = Uu({
          mode: "hidden",
          children: o
        }, n), a = Ql(a, n, l, null), o.return = t, a.return = t, o.sibling = a, t.child = o, a = t.child, a.memoizedState = Cc(l), a.childLanes = Rc(e, c, l), t.memoizedState = Dc, vn(null, a)) : (vl(t), Hc(t, o));
      }
      var h = e.memoizedState;
      if (h !== null && (o = h.dehydrated, o !== null)) {
        if (u) t.flags & 256 ? (vl(t), t.flags &= -257, t = Bc(e, t, l)) : t.memoizedState !== null ? (xl(), t.child = e.child, t.flags |= 128, t = null) : (xl(), o = a.fallback, n = t.mode, a = Uu({
          mode: "visible",
          children: a.children
        }, n), o = Ql(o, n, l, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, Fl(t, e.child, null, l), a = t.child, a.memoizedState = Cc(l), a.childLanes = Rc(e, c, l), t.memoizedState = Dc, t = vn(null, a));
        else if (vl(t), ps(o)) {
          if (c = o.nextSibling && o.nextSibling.dataset, c) var N = c.dgst;
          c = N, a = Error(f(419)), a.stack = "", a.digest = c, sn({
            value: a,
            source: null,
            stack: null
          }), t = Bc(e, t, l);
        } else if (Ye || xa(e, t, l, false), c = (l & e.childLanes) !== 0, Ye || c) {
          if (c = Te, c !== null && (a = lr(c, l), a !== 0 && a !== h.retryLane)) throw h.retryLane = a, Xl(e, a), ht(c, e, a), Oc;
          ys(o) || Gu(), t = Bc(e, t, l);
        } else ys(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = h.treeContext, Oe = Rt(o.nextSibling), Ie = t, re = true, hl = null, Dt = false, e !== null && Ir(t, e), t = Hc(t, a.children), t.flags |= 4096);
        return t;
      }
      return n ? (xl(), o = a.fallback, n = t.mode, h = e.child, N = h.sibling, a = $t(h, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = h.subtreeFlags & 65011712, N !== null ? o = $t(N, o) : (o = Ql(o, n, l, null), o.flags |= 2), o.return = t, a.return = t, a.sibling = o, t.child = a, vn(null, a), a = t.child, o = e.child.memoizedState, o === null ? o = Cc(l) : (n = o.cachePool, n !== null ? (h = qe._currentValue, n = n.parent !== h ? {
        parent: h,
        pool: h
      } : n) : n = nf(), o = {
        baseLanes: o.baseLanes | l,
        cachePool: n
      }), a.memoizedState = o, a.childLanes = Rc(e, c, l), t.memoizedState = Dc, vn(e.child, a)) : (vl(t), l = e.child, e = l.sibling, l = $t(l, {
        mode: "visible",
        children: a.children
      }), l.return = t, l.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [
        e
      ], t.flags |= 16) : c.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function Hc(e, t) {
      return t = Uu({
        mode: "visible",
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function Uu(e, t) {
      return e = _t(22, e, null, t), e.lanes = 0, e;
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
      var c = e.memoizedState;
      c === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: a,
        tail: l,
        tailMode: n,
        treeForkCount: u
      } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = l, c.tailMode = n, c.treeForkCount = u);
    }
    function vo(e, t, l) {
      var a = t.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var c = He.current, o = (c & 2) !== 0;
      if (o ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, H(He, c), et(e, t, a, l), a = re ? cn : 0, !o && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
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
      if (e !== null && (t.dependencies = e.dependencies), Nl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
        if (xa(e, t, l, false), (l & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error(f(153));
      if (t.child !== null) {
        for (e = t.child, l = $t(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = $t(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function Lc(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && du(e)));
    }
    function g0(e, t, l) {
      switch (t.tag) {
        case 3:
          we(t, t.stateNode.containerInfo), yl(t, qe, e.memoizedState.cache), kl();
          break;
        case 27:
        case 5:
          Rl(t);
          break;
        case 4:
          we(t, t.stateNode.containerInfo);
          break;
        case 10:
          yl(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, fc(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (vl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? bo(e, t, l) : (vl(t), e = tl(e, t, l), e !== null ? e.sibling : null);
          vl(t);
          break;
        case 19:
          var n = (e.flags & 128) !== 0;
          if (a = (l & t.childLanes) !== 0, a || (xa(e, t, l, false), a = (l & t.childLanes) !== 0), n) {
            if (a) return vo(e, t, l);
            t.flags |= 128;
          }
          if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), H(He, He.current), a) break;
          return null;
        case 22:
          return t.lanes = 0, oo(e, t, l, t.pendingProps);
        case 24:
          yl(t, qe, e.memoizedState.cache);
      }
      return tl(e, t, l);
    }
    function xo(e, t, l) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps) Ye = true;
      else {
        if (!Lc(e, l) && (t.flags & 128) === 0) return Ye = false, g0(e, t, l);
        Ye = (e.flags & 131072) !== 0;
      }
      else Ye = false, re && (t.flags & 1048576) !== 0 && Wr(t, cn, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var a = t.pendingProps;
            if (e = Jl(t.elementType), t.type = e, typeof e == "function") ki(e) ? (a = Il(e, a), t.tag = 1, t = yo(null, t, e, a, l)) : (t.tag = 0, t = Uc(null, t, e, a, l));
            else {
              if (e != null) {
                var n = e.$$typeof;
                if (n === ve) {
                  t.tag = 11, t = so(null, t, e, a, l);
                  break e;
                } else if (n === q) {
                  t.tag = 14, t = ro(null, t, e, a, l);
                  break e;
                }
              }
              throw t = ct(e) || e, Error(f(306, t, ""));
            }
          }
          return t;
        case 0:
          return Uc(e, t, t.type, t.pendingProps, l);
        case 1:
          return a = t.type, n = Il(a, t.pendingProps), yo(e, t, a, n, l);
        case 3:
          e: {
            if (we(t, t.stateNode.containerInfo), e === null) throw Error(f(387));
            a = t.pendingProps;
            var u = t.memoizedState;
            n = u.element, uc(e, t), gn(t, a, null, l);
            var c = t.memoizedState;
            if (a = c.cache, yl(t, qe, a), a !== u.cache && Pi(t, [
              qe
            ], l, true), hn(), a = c.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: c.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = po(e, t, a, l);
              break e;
            } else if (a !== n) {
              n = Mt(Error(f(424)), t), sn(n), t = po(e, t, a, l);
              break e;
            } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Oe = Rt(e.firstChild), Ie = t, re = true, hl = null, Dt = true, l = of(t, null, a, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (kl(), a === n) {
                t = tl(e, t, l);
                break e;
              }
              et(e, t, a, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return Ou(e, t), e === null ? (l = Ud(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : re || (l = t.type, e = t.pendingProps, a = Ju(ae.current).createElement(l), a[We] = t, a[st] = e, tt(a, l, e), Ve(a), t.stateNode = a) : t.memoizedState = Ud(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return Rl(t), e === null && re && (a = t.stateNode = Ed(t.type, t.pendingProps, ae.current), Ie = t, Dt = true, n = Oe, El(t.type) ? (bs = n, Oe = Rt(a.firstChild)) : Oe = n), et(e, t, t.pendingProps.children, l), Ou(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && re && ((n = a = Oe) && (a = Z0(a, t.type, t.pendingProps, Dt), a !== null ? (t.stateNode = a, Ie = t, Oe = Rt(a.firstChild), Dt = false, n = true) : n = false), n || gl(t)), Rl(t), n = t.type, u = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = u.children, ms(n, u) ? a = null : c !== null && ms(n, c) && (t.flags |= 32), t.memoizedState !== null && (n = dc(e, t, i0, null, null, l), Rn._currentValue = n), Ou(e, t), et(e, t, a, l), t.child;
        case 6:
          return e === null && re && ((e = l = Oe) && (l = V0(l, t.pendingProps, Dt), l !== null ? (t.stateNode = l, Ie = t, Oe = null, e = true) : e = false), e || gl(t)), null;
        case 13:
          return bo(e, t, l);
        case 4:
          return we(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Fl(t, null, a, l) : et(e, t, a, l), t.child;
        case 11:
          return so(e, t, t.type, t.pendingProps, l);
        case 7:
          return et(e, t, t.pendingProps, l), t.child;
        case 8:
          return et(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return et(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return a = t.pendingProps, yl(t, t.type, a.value), et(e, t, a.children, l), t.child;
        case 9:
          return n = t.type._context, a = t.pendingProps.children, Vl(t), n = Pe(n), a = a(n), t.flags |= 1, et(e, t, a, l), t.child;
        case 14:
          return ro(e, t, t.type, t.pendingProps, l);
        case 15:
          return fo(e, t, t.type, t.pendingProps, l);
        case 19:
          return vo(e, t, l);
        case 31:
          return h0(e, t, l);
        case 22:
          return oo(e, t, l, t.pendingProps);
        case 24:
          return Vl(t), a = Pe(qe), e === null ? (n = lc(), n === null && (n = Te, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = {
            parent: a,
            cache: n
          }, nc(t), yl(t, qe, n)) : ((e.lanes & l) !== 0 && (uc(e, t), gn(t, null, null, l), hn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), yl(t, qe, a)) : (a = u.cache, yl(t, qe, a), a !== n.cache && Pi(t, [
            qe
          ], l, true))), et(e, t, t.pendingProps.children, l), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(f(156, t.tag));
    }
    function ll(e) {
      e.flags |= 4;
    }
    function Yc(e, t, l, a, n) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
        else if (Jo()) e.flags |= 8192;
        else throw $l = yu, ac;
      } else e.flags &= -16777217;
    }
    function So(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !Bd(t)) if (Jo()) e.flags |= 8192;
      else throw $l = yu, ac;
    }
    function Du(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ps() : 536870912, e.lanes |= t, Da |= t);
    }
    function xn(e, t) {
      if (!re) switch (e.tailMode) {
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
    function Ue(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
      if (t) for (var n = e.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
      else for (n = e.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
      return e.subtreeFlags |= a, e.childLanes = l, t;
    }
    function y0(e, t, l) {
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
          return Ue(t), null;
        case 1:
          return Ue(t), null;
        case 3:
          return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), It(qe), Ee(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (va(t) ? ll(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fi())), Ue(t), null;
        case 26:
          var n = t.type, u = t.memoizedState;
          return e === null ? (ll(t), u !== null ? (Ue(t), So(t, u)) : (Ue(t), Yc(t, n, null, a, l))) : u ? u !== e.memoizedState ? (ll(t), Ue(t), So(t, u)) : (Ue(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && ll(t), Ue(t), Yc(t, n, e, a, l)), null;
        case 27:
          if (aa(t), l = ae.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && ll(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(f(166));
              return Ue(t), null;
            }
            e = L.current, va(t) ? Pr(t) : (e = Ed(n, a, l), t.stateNode = e, ll(t));
          }
          return Ue(t), null;
        case 5:
          if (aa(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && ll(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(f(166));
              return Ue(t), null;
            }
            if (u = L.current, va(t)) Pr(t);
            else {
              var c = Ju(ae.current);
              switch (u) {
                case 1:
                  u = c.createElementNS("http://www.w3.org/2000/svg", n);
                  break;
                case 2:
                  u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                  break;
                default:
                  switch (n) {
                    case "svg":
                      u = c.createElementNS("http://www.w3.org/2000/svg", n);
                      break;
                    case "math":
                      u = c.createElementNS("http://www.w3.org/1998/Math/MathML", n);
                      break;
                    case "script":
                      u = c.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(u.firstChild);
                      break;
                    case "select":
                      u = typeof a.is == "string" ? c.createElement("select", {
                        is: a.is
                      }) : c.createElement("select"), a.multiple ? u.multiple = true : a.size && (u.size = a.size);
                      break;
                    default:
                      u = typeof a.is == "string" ? c.createElement(n, {
                        is: a.is
                      }) : c.createElement(n);
                  }
              }
              u[We] = t, u[st] = a;
              e: for (c = t.child; c !== null; ) {
                if (c.tag === 5 || c.tag === 6) u.appendChild(c.stateNode);
                else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                  c.child.return = c, c = c.child;
                  continue;
                }
                if (c === t) break e;
                for (; c.sibling === null; ) {
                  if (c.return === null || c.return === t) break e;
                  c = c.return;
                }
                c.sibling.return = c.return, c = c.sibling;
              }
              t.stateNode = u;
              e: switch (tt(u, n, a), n) {
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
          return Ue(t), Yc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== a && ll(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(f(166));
            if (e = ae.current, va(t)) {
              if (e = t.stateNode, l = t.memoizedProps, a = null, n = Ie, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              e[We] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === true || bd(e.nodeValue, l)), e || gl(t, true);
            } else e = Ju(e).createTextNode(a), e[We] = t, t.stateNode = e;
          }
          return Ue(t), null;
        case 31:
          if (l = t.memoizedState, e === null || e.memoizedState !== null) {
            if (a = va(t), l !== null) {
              if (e === null) {
                if (!a) throw Error(f(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(f(557));
                e[We] = t;
              } else kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ue(t), e = false;
            } else l = Fi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
            if (!e) return t.flags & 256 ? (xt(t), t) : (xt(t), null);
            if ((t.flags & 128) !== 0) throw Error(f(558));
          }
          return Ue(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (n = va(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!n) throw Error(f(318));
                if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(f(317));
                n[We] = t;
              } else kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ue(t), n = false;
            } else n = Fi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = true;
            if (!n) return t.flags & 256 ? (xt(t), t) : (xt(t), null);
          }
          return xt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Du(t, t.updateQueue), Ue(t), null);
        case 4:
          return Ee(), e === null && ss(t.stateNode.containerInfo), Ue(t), null;
        case 10:
          return It(t.type), Ue(t), null;
        case 19:
          if (w(He), a = t.memoizedState, a === null) return Ue(t), null;
          if (n = (t.flags & 128) !== 0, u = a.rendering, u === null) if (n) xn(a, false);
          else {
            if (Re !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (u = vu(e), u !== null) {
                for (t.flags |= 128, xn(a, false), e = u.updateQueue, t.updateQueue = e, Du(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) Jr(l, e), l = l.sibling;
                return H(He, He.current & 1 | 2), re && Ft(t, a.treeForkCount), t.child;
              }
              e = e.sibling;
            }
            a.tail !== null && gt() > qu && (t.flags |= 128, n = true, xn(a, false), t.lanes = 4194304);
          }
          else {
            if (!n) if (e = vu(u), e !== null) {
              if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, Du(t, e), xn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !re) return Ue(t), null;
            } else 2 * gt() - a.renderingStartTime > qu && l !== 536870912 && (t.flags |= 128, n = true, xn(a, false), t.lanes = 4194304);
            a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = gt(), e.sibling = null, l = He.current, H(He, n ? l & 1 | 2 : l & 1), re && Ft(t, a.treeForkCount), e) : (Ue(t), null);
        case 22:
        case 23:
          return xt(t), rc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), l = t.updateQueue, l !== null && Du(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && w(Kl), null;
        case 24:
          return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), It(qe), Ue(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(f(156, t.tag));
    }
    function p0(e, t) {
      switch (Ji(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return It(qe), Ee(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return aa(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (xt(t), t.alternate === null) throw Error(f(340));
            kl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (xt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(f(340));
            kl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return w(He), null;
        case 4:
          return Ee(), null;
        case 10:
          return It(t.type), null;
        case 22:
        case 23:
          return xt(t), rc(), e !== null && w(Kl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return It(qe), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function jo(e, t) {
      switch (Ji(t), t.tag) {
        case 3:
          It(qe), Ee();
          break;
        case 26:
        case 27:
        case 5:
          aa(t);
          break;
        case 4:
          Ee();
          break;
        case 31:
          t.memoizedState !== null && xt(t);
          break;
        case 13:
          xt(t);
          break;
        case 19:
          w(He);
          break;
        case 10:
          It(t.type);
          break;
        case 22:
        case 23:
          xt(t), rc(), e !== null && w(Kl);
          break;
        case 24:
          It(qe);
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
              var u = l.create, c = l.inst;
              a = u(), c.destroy = a;
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
              var c = a.inst, o = c.destroy;
              if (o !== void 0) {
                c.destroy = void 0, n = t;
                var h = l, N = o;
                try {
                  N();
                } catch (E) {
                  Se(n, h, E);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (E) {
        Se(t, t.return, E);
      }
    }
    function No(e) {
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
    function jn(e, t) {
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
        L0(a, e.type, l, t), a[st] = t;
      } catch (n) {
        Se(e, e.return, n);
      }
    }
    function wo(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && El(e.type) || e.tag === 4;
    }
    function Xc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || wo(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && El(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Qc(e, t, l) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Kt));
      else if (a !== 4 && (a === 27 && El(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (Qc(e, t, l), e = e.sibling; e !== null; ) Qc(e, t, l), e = e.sibling;
    }
    function Cu(e, t, l) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (a !== 4 && (a === 27 && El(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (Cu(e, t, l), e = e.sibling; e !== null; ) Cu(e, t, l), e = e.sibling;
    }
    function To(e) {
      var t = e.stateNode, l = e.memoizedProps;
      try {
        for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
        tt(t, a, l), t[We] = e, t[st] = l;
      } catch (u) {
        Se(e, e.return, u);
      }
    }
    var al = false, Ge = false, kc = false, Eo = typeof WeakSet == "function" ? WeakSet : Set, Ke = null;
    function b0(e, t) {
      if (e = e.containerInfo, os = ti, e = Lr(e), Bi(e)) {
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
            var c = 0, o = -1, h = -1, N = 0, E = 0, D = e, A = null;
            t: for (; ; ) {
              for (var z; D !== l || n !== 0 && D.nodeType !== 3 || (o = c + n), D !== u || a !== 0 && D.nodeType !== 3 || (h = c + a), D.nodeType === 3 && (c += D.nodeValue.length), (z = D.firstChild) !== null; ) A = D, D = z;
              for (; ; ) {
                if (D === e) break t;
                if (A === l && ++N === n && (o = c), A === u && ++E === a && (h = c), (z = D.nextSibling) !== null) break;
                D = A, A = D.parentNode;
              }
              D = z;
            }
            l = o === -1 || h === -1 ? null : {
              start: o,
              end: h
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
      }, ti = false, Ke = t; Ke !== null; ) if (t = Ke, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Ke = e;
      else for (; Ke !== null; ) {
        switch (t = Ke, u = t.alternate, e = t.flags, t.tag) {
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
              } catch (J) {
                Se(l, l.return, J);
              }
            }
            break;
          case 3:
            if ((e & 1024) !== 0) {
              if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) gs(e);
              else if (l === 1) switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  gs(e);
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
          e.return = t.return, Ke = e;
          break;
        }
        Ke = t.return;
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
          } catch (c) {
            Se(l, l.return, c);
          }
          else {
            var n = Il(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              Se(l, l.return, c);
            }
          }
          a & 64 && No(l), a & 512 && jn(l, l.return);
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
            } catch (c) {
              Se(l, l.return, c);
            }
          }
          break;
        case 27:
          t === null && a & 4 && To(l);
        case 26:
        case 5:
          ul(e, l), t === null && a & 4 && zo(l), a & 512 && jn(l, l.return);
          break;
        case 12:
          ul(e, l);
          break;
        case 31:
          ul(e, l), a & 4 && Do(e, l);
          break;
        case 13:
          ul(e, l), a & 4 && Co(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = w0.bind(null, l), K0(e, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || al, !a) {
            t = t !== null && t.memoizedState !== null || Ge, n = al;
            var u = Ge;
            al = a, (Ge = t) && !u ? il(e, l, (l.subtreeFlags & 8772) !== 0) : ul(e, l), al = n, Ge = u;
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
    var De = null, ft = false;
    function nl(e, t, l) {
      for (l = l.child; l !== null; ) Uo(e, t, l), l = l.sibling;
    }
    function Uo(e, t, l) {
      if (yt && typeof yt.onCommitFiberUnmount == "function") try {
        yt.onCommitFiberUnmount(Va, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Ge || Qt(l, t), nl(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Ge || Qt(l, t);
          var a = De, n = ft;
          El(l.type) && (De = l.stateNode, ft = false), nl(e, t, l), Un(l.stateNode), De = a, ft = n;
          break;
        case 5:
          Ge || Qt(l, t);
        case 6:
          if (a = De, n = ft, De = null, nl(e, t, l), De = a, ft = n, De !== null) if (ft) try {
            (De.nodeType === 9 ? De.body : De.nodeName === "HTML" ? De.ownerDocument.body : De).removeChild(l.stateNode);
          } catch (u) {
            Se(l, t, u);
          }
          else try {
            De.removeChild(l.stateNode);
          } catch (u) {
            Se(l, t, u);
          }
          break;
        case 18:
          De !== null && (ft ? (e = De, Nd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Ga(e)) : Nd(De, l.stateNode));
          break;
        case 4:
          a = De, n = ft, De = l.stateNode.containerInfo, ft = true, nl(e, t, l), De = a, ft = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          Sl(2, l, t), Ge || Sl(4, l, t), nl(e, t, l);
          break;
        case 1:
          Ge || (Qt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ao(l, t, a)), nl(e, t, l);
          break;
        case 21:
          nl(e, t, l);
          break;
        case 22:
          Ge = (a = Ge) || l.memoizedState !== null, nl(e, t, l), Ge = a;
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
    function _0(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new Eo()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Eo()), t;
        default:
          throw Error(f(435, e.tag));
      }
    }
    function Ru(e, t) {
      var l = _0(e);
      t.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = T0.bind(null, e, a);
          a.then(n, n);
        }
      });
    }
    function ot(e, t) {
      var l = t.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, c = t, o = c;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (El(o.type)) {
                De = o.stateNode, ft = false;
                break e;
              }
              break;
            case 5:
              De = o.stateNode, ft = false;
              break e;
            case 3:
            case 4:
              De = o.stateNode.containerInfo, ft = true;
              break e;
          }
          o = o.return;
        }
        if (De === null) throw Error(f(160));
        Uo(u, c, n), De = null, ft = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) Ro(t, e), t = t.sibling;
    }
    var Lt = null;
    function Ro(e, t) {
      var l = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ot(t, e), dt(e), a & 4 && (Sl(3, e, e.return), Sn(3, e), Sl(5, e, e.return));
          break;
        case 1:
          ot(t, e), dt(e), a & 512 && (Ge || l === null || Qt(l, l.return)), a & 64 && al && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Lt;
          if (ot(t, e), dt(e), a & 512 && (Ge || l === null || Qt(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = e.memoizedState, l === null) if (a === null) if (e.stateNode === null) {
              e: {
                a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                t: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[$a] || u[We] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), tt(u, a, l), u[We] = e, Ve(u), a = u;
                    break e;
                  case "link":
                    var c = Rd("link", "href", n).get(a + (l.href || ""));
                    if (c) {
                      for (var o = 0; o < c.length; o++) if (u = c[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        c.splice(o, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), tt(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (c = Rd("meta", "content", n).get(a + (l.content || ""))) {
                      for (o = 0; o < c.length; o++) if (u = c[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        c.splice(o, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), tt(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(f(468, a));
                }
                u[We] = e, Ve(u), a = u;
              }
              e.stateNode = a;
            } else Hd(n, e.type, e.stateNode);
            else e.stateNode = Cd(n, a, e.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Hd(n, e.type, e.stateNode) : Cd(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Gc(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          ot(t, e), dt(e), a & 512 && (Ge || l === null || Qt(l, l.return)), l !== null && a & 4 && Gc(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (ot(t, e), dt(e), a & 512 && (Ge || l === null || Qt(l, l.return)), e.flags & 32) {
            n = e.stateNode;
            try {
              fa(n, "");
            } catch (Y) {
              Se(e, e.return, Y);
            }
          }
          a & 4 && e.stateNode != null && (n = e.memoizedProps, Gc(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (kc = true);
          break;
        case 6:
          if (ot(t, e), dt(e), a & 4) {
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
          if (Wu = null, n = Lt, Lt = $u(t.containerInfo), ot(t, e), Lt = n, dt(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Ga(t.containerInfo);
          } catch (Y) {
            Se(e, e.return, Y);
          }
          kc && (kc = false, Ho(e));
          break;
        case 4:
          a = Lt, Lt = $u(e.stateNode.containerInfo), ot(t, e), dt(e), Lt = a;
          break;
        case 12:
          ot(t, e), dt(e);
          break;
        case 31:
          ot(t, e), dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
          break;
        case 13:
          ot(t, e), dt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Bu = gt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
          break;
        case 22:
          n = e.memoizedState !== null;
          var h = l !== null && l.memoizedState !== null, N = al, E = Ge;
          if (al = N || n, Ge = E || h, ot(t, e), Ge = E, al = N, dt(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || h || al || Ge || Pl(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                h = l = t;
                try {
                  if (u = h.stateNode, n) c = u.style, typeof c.setProperty == "function" ? c.setProperty("display", "none", "important") : c.display = "none";
                  else {
                    o = h.stateNode;
                    var D = h.memoizedProps.style, A = D != null && D.hasOwnProperty("display") ? D.display : null;
                    o.style.display = A == null || typeof A == "boolean" ? "" : ("" + A).trim();
                  }
                } catch (Y) {
                  Se(h, h.return, Y);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                h = t;
                try {
                  h.stateNode.nodeValue = n ? "" : h.memoizedProps;
                } catch (Y) {
                  Se(h, h.return, Y);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                h = t;
                try {
                  var z = h.stateNode;
                  n ? Ad(z, true) : Ad(h.stateNode, false);
                } catch (Y) {
                  Se(h, h.return, Y);
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
          ot(t, e), dt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Ru(e, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ot(t, e), dt(e);
      }
    }
    function dt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, a = e.return; a !== null; ) {
            if (wo(a)) {
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
              var c = l.stateNode;
              l.flags & 32 && (fa(c, ""), l.flags &= -33);
              var o = Xc(e);
              Cu(e, o, c);
              break;
            case 3:
            case 4:
              var h = l.stateNode.containerInfo, N = Xc(e);
              Qc(e, N, h);
              break;
            default:
              throw Error(f(161));
          }
        } catch (E) {
          Se(e, e.return, E);
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
        var a = t.alternate, n = e, u = t, c = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            il(n, u, l), Sn(4, u);
            break;
          case 1:
            if (il(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (N) {
              Se(a, a.return, N);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var o = a.stateNode;
              try {
                var h = n.shared.hiddenCallbacks;
                if (h !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < h.length; n++) df(h[n], o);
              } catch (N) {
                Se(a, a.return, N);
              }
            }
            l && c & 64 && No(u), jn(u, u.return);
            break;
          case 27:
            To(u);
          case 26:
          case 5:
            il(n, u, l), l && a === null && c & 4 && zo(u), jn(u, u.return);
            break;
          case 12:
            il(n, u, l);
            break;
          case 31:
            il(n, u, l), l && c & 4 && Do(n, u);
            break;
          case 13:
            il(n, u, l), l && c & 4 && Co(n, u);
            break;
          case 22:
            u.memoizedState === null && il(n, u, l), jn(u, u.return);
            break;
          case 30:
            break;
          default:
            il(n, u, l);
        }
        t = t.sibling;
      }
    }
    function Zc(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && rn(l));
    }
    function Vc(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && rn(e));
    }
    function Yt(e, t, l, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Bo(e, t, l, a), t = t.sibling;
    }
    function Bo(e, t, l, a) {
      var n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Yt(e, t, l, a), n & 2048 && Sn(9, t);
          break;
        case 1:
          Yt(e, t, l, a);
          break;
        case 3:
          Yt(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && rn(e)));
          break;
        case 12:
          if (n & 2048) {
            Yt(e, t, l, a), e = t.stateNode;
            try {
              var u = t.memoizedProps, c = u.id, o = u.onPostCommit;
              typeof o == "function" && o(c, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (h) {
              Se(t, t.return, h);
            }
          } else Yt(e, t, l, a);
          break;
        case 31:
          Yt(e, t, l, a);
          break;
        case 13:
          Yt(e, t, l, a);
          break;
        case 23:
          break;
        case 22:
          u = t.stateNode, c = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Yt(e, t, l, a) : Nn(e, t) : u._visibility & 2 ? Yt(e, t, l, a) : (u._visibility |= 2, Ma(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Zc(c, t);
          break;
        case 24:
          Yt(e, t, l, a), n & 2048 && Vc(t.alternate, t);
          break;
        default:
          Yt(e, t, l, a);
      }
    }
    function Ma(e, t, l, a, n) {
      for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var u = e, c = t, o = l, h = a, N = c.flags;
        switch (c.tag) {
          case 0:
          case 11:
          case 15:
            Ma(u, c, o, h, n), Sn(8, c);
            break;
          case 23:
            break;
          case 22:
            var E = c.stateNode;
            c.memoizedState !== null ? E._visibility & 2 ? Ma(u, c, o, h, n) : Nn(u, c) : (E._visibility |= 2, Ma(u, c, o, h, n)), n && N & 2048 && Zc(c.alternate, c);
            break;
          case 24:
            Ma(u, c, o, h, n), n && N & 2048 && Vc(c.alternate, c);
            break;
          default:
            Ma(u, c, o, h, n);
        }
        t = t.sibling;
      }
    }
    function Nn(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            Nn(l, a), n & 2048 && Zc(a.alternate, a);
            break;
          case 24:
            Nn(l, a), n & 2048 && Vc(a.alternate, a);
            break;
          default:
            Nn(l, a);
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
          Oa(e, t, l), e.flags & An && e.memoizedState !== null && ug(l, Lt, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Oa(e, t, l);
          break;
        case 3:
        case 4:
          var a = Lt;
          Lt = $u(e.stateNode.containerInfo), Oa(e, t, l), Lt = a;
          break;
        case 22:
          e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, Oa(e, t, l), An = a) : Oa(e, t, l));
          break;
        default:
          Oa(e, t, l);
      }
    }
    function Lo(e) {
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
          Ke = a, Go(a, e);
        }
        Lo(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Yo(e), e = e.sibling;
    }
    function Yo(e) {
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
          Ke = a, Go(a, e);
        }
        Lo(e);
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
      for (; Ke !== null; ) {
        var l = Ke;
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
        if (a = l.child, a !== null) a.return = l, Ke = a;
        else e: for (l = e; Ke !== null; ) {
          a = Ke;
          var n = a.sibling, u = a.return;
          if (Oo(a), a === l) {
            Ke = null;
            break e;
          }
          if (n !== null) {
            n.return = u, Ke = n;
            break e;
          }
          Ke = u;
        }
      }
    }
    var v0 = {
      getCacheForType: function(e) {
        var t = Pe(qe), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      },
      cacheSignal: function() {
        return Pe(qe).controller.signal;
      }
    }, x0 = typeof WeakMap == "function" ? WeakMap : Map, ye = 0, Te = null, ne = null, ie = 0, xe = 0, St = null, jl = false, Ua = false, Kc = false, cl = 0, Re = 0, Nl = 0, ea = 0, Jc = 0, jt = 0, Da = 0, wn = null, mt = null, $c = false, Bu = 0, Xo = 0, qu = 1 / 0, Lu = null, Al = null, Xe = 0, zl = null, Ca = null, sl = 0, Fc = 0, Wc = null, Qo = null, Tn = 0, Ic = null;
    function Nt() {
      return (ye & 2) !== 0 && ie !== 0 ? ie & -ie : O.T !== null ? ns() : ar();
    }
    function ko() {
      if (jt === 0) if ((ie & 536870912) === 0 || re) {
        var e = Kn;
        Kn <<= 1, (Kn & 3932160) === 0 && (Kn = 262144), jt = e;
      } else jt = 536870912;
      return e = vt.current, e !== null && (e.flags |= 32), jt;
    }
    function ht(e, t, l) {
      (e === Te && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) && (Ra(e, 0), wl(e, ie, jt, false)), Ja(e, l), ((ye & 2) === 0 || e !== Te) && (e === Te && ((ye & 2) === 0 && (ea |= l), Re === 4 && wl(e, ie, jt, false)), kt(e));
    }
    function Zo(e, t, l) {
      if ((ye & 6) !== 0) throw Error(f(327));
      var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ka(e, t), n = a ? N0(e, t) : es(e, t, true), u = a;
      do {
        if (n === 0) {
          Ua && !a && wl(e, t, 0, false);
          break;
        } else {
          if (l = e.current.alternate, u && !S0(l)) {
            n = es(e, t, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = t, e.errorRecoveryDisabledLanes & u) var c = 0;
            else c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
            if (c !== 0) {
              t = c;
              e: {
                var o = e;
                n = wn;
                var h = o.current.memoizedState.isDehydrated;
                if (h && (Ra(o, c).flags |= 256), c = es(o, c, false), c !== 2) {
                  if (Kc && !h) {
                    o.errorRecoveryDisabledLanes |= u, ea |= u, n = 4;
                    break e;
                  }
                  u = mt, mt = n, u !== null && (mt === null ? mt = u : mt.push.apply(mt, u));
                }
                n = c;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ra(e, 0), wl(e, t, 0, true);
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
                wl(a, t, jt, !jl);
                break e;
              case 2:
                mt = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(f(329));
            }
            if ((t & 62914560) === t && (n = Bu + 300 - gt(), 10 < n)) {
              if (wl(a, t, jt, !jl), $n(a, 0, true) !== 0) break e;
              sl = t, a.timeoutHandle = Sd(Vo.bind(null, a, l, mt, Lu, $c, t, jt, ea, Da, jl, u, "Throttled", -0, 0), n);
              break e;
            }
            Vo(a, l, mt, Lu, $c, t, jt, ea, Da, jl, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      kt(e);
    }
    function Vo(e, t, l, a, n, u, c, o, h, N, E, D, A, z) {
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
        var Y = (u & 62914560) === u ? Bu - gt() : (u & 4194048) === u ? Xo - gt() : 0;
        if (Y = ig(D, Y), Y !== null) {
          sl = u, e.cancelPendingCommit = Y(ed.bind(null, e, t, u, l, a, n, c, o, h, E, D, null, A, z)), wl(e, u, c, !N);
          return;
        }
      }
      ed(e, t, u, l, a, n, c, o, h);
    }
    function S0(e) {
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
    function wl(e, t, l, a) {
      t &= ~Jc, t &= ~ea, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var n = t; 0 < n; ) {
        var u = 31 - pt(n), c = 1 << u;
        a[u] = -1, n &= ~c;
      }
      l !== 0 && er(e, l, t);
    }
    function Yu() {
      return (ye & 6) === 0 ? (En(0), false) : true;
    }
    function Pc() {
      if (ne !== null) {
        if (xe === 0) var e = ne.return;
        else e = ne, Wt = Zl = null, gc(e), Aa = null, on = 0, e = ne;
        for (; e !== null; ) jo(e.alternate, e), e = e.return;
        ne = null;
      }
    }
    function Ra(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && (e.timeoutHandle = -1, X0(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), sl = 0, Pc(), Te = e, ne = l = $t(e.current, null), ie = t, xe = 0, St = null, jl = false, Ua = Ka(e, t), Kc = false, Da = jt = Jc = ea = Nl = Re = 0, mt = wn = null, $c = false, (t & 8) !== 0 && (t |= t & 32);
      var a = e.entangledLanes;
      if (a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - pt(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
      return cl = t, cu(), l;
    }
    function Ko(e, t) {
      I = null, O.H = _n, t === Na || t === gu ? (t = sf(), xe = 3) : t === ac ? (t = sf(), xe = 4) : xe = t === Oc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, St = t, ne === null && (Re = 1, Eu(e, Mt(t, e.current)));
    }
    function Jo() {
      var e = vt.current;
      return e === null ? true : (ie & 4194048) === ie ? Ct === null : (ie & 62914560) === ie || (ie & 536870912) !== 0 ? e === Ct : false;
    }
    function $o() {
      var e = O.H;
      return O.H = _n, e === null ? _n : e;
    }
    function Fo() {
      var e = O.A;
      return O.A = v0, e;
    }
    function Gu() {
      Re = 4, jl || (ie & 4194048) !== ie && vt.current !== null || (Ua = true), (Nl & 134217727) === 0 && (ea & 134217727) === 0 || Te === null || wl(Te, ie, jt, false);
    }
    function es(e, t, l) {
      var a = ye;
      ye |= 2;
      var n = $o(), u = Fo();
      (Te !== e || ie !== t) && (Lu = null, Ra(e, t)), t = false;
      var c = Re;
      e: do
        try {
          if (xe !== 0 && ne !== null) {
            var o = ne, h = St;
            switch (xe) {
              case 8:
                Pc(), c = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                vt.current === null && (t = true);
                var N = xe;
                if (xe = 0, St = null, Ha(e, o, h, N), l && Ua) {
                  c = 0;
                  break e;
                }
                break;
              default:
                N = xe, xe = 0, St = null, Ha(e, o, h, N);
            }
          }
          j0(), c = Re;
          break;
        } catch (E) {
          Ko(e, E);
        }
      while (true);
      return t && e.shellSuspendCounter++, Wt = Zl = null, ye = a, O.H = n, O.A = u, ne === null && (Te = null, ie = 0, cu()), c;
    }
    function j0() {
      for (; ne !== null; ) Wo(ne);
    }
    function N0(e, t) {
      var l = ye;
      ye |= 2;
      var a = $o(), n = Fo();
      Te !== e || ie !== t ? (Lu = null, qu = gt() + 500, Ra(e, t)) : Ua = Ka(e, t);
      e: do
        try {
          if (xe !== 0 && ne !== null) {
            t = ne;
            var u = St;
            t: switch (xe) {
              case 1:
                xe = 0, St = null, Ha(e, t, u, 1);
                break;
              case 2:
              case 9:
                if (uf(u)) {
                  xe = 0, St = null, Io(t);
                  break;
                }
                t = function() {
                  xe !== 2 && xe !== 9 || Te !== e || (xe = 7), kt(e);
                }, u.then(t, t);
                break e;
              case 3:
                xe = 7;
                break e;
              case 4:
                xe = 5;
                break e;
              case 7:
                uf(u) ? (xe = 0, St = null, Io(t)) : (xe = 0, St = null, Ha(e, t, u, 7));
                break;
              case 5:
                var c = null;
                switch (ne.tag) {
                  case 26:
                    c = ne.memoizedState;
                  case 5:
                  case 27:
                    var o = ne;
                    if (c ? Bd(c) : o.stateNode.complete) {
                      xe = 0, St = null;
                      var h = o.sibling;
                      if (h !== null) ne = h;
                      else {
                        var N = o.return;
                        N !== null ? (ne = N, Xu(N)) : ne = null;
                      }
                      break t;
                    }
                }
                xe = 0, St = null, Ha(e, t, u, 5);
                break;
              case 6:
                xe = 0, St = null, Ha(e, t, u, 6);
                break;
              case 8:
                Pc(), Re = 6;
                break e;
              default:
                throw Error(f(462));
            }
          }
          A0();
          break;
        } catch (E) {
          Ko(e, E);
        }
      while (true);
      return Wt = Zl = null, O.H = a, O.A = n, ye = l, ne !== null ? 0 : (Te = null, ie = 0, cu(), Re);
    }
    function A0() {
      for (; ne !== null && !Jm(); ) Wo(ne);
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
          t = go(l, t, t.pendingProps, t.type, void 0, ie);
          break;
        case 11:
          t = go(l, t, t.pendingProps, t.type.render, t.ref, ie);
          break;
        case 5:
          gc(t);
        default:
          jo(l, t), t = ne = Jr(t, cl), t = xo(l, t, cl);
      }
      e.memoizedProps = e.pendingProps, t === null ? Xu(e) : ne = t;
    }
    function Ha(e, t, l, a) {
      Wt = Zl = null, gc(t), Aa = null, on = 0;
      var n = t.return;
      try {
        if (m0(e, n, t, l, ie)) {
          Re = 1, Eu(e, Mt(l, e.current)), ne = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw ne = n, u;
        Re = 1, Eu(e, Mt(l, e.current)), ne = null;
        return;
      }
      t.flags & 32768 ? (re || a === 1 ? e = true : Ua || (ie & 536870912) !== 0 ? e = false : (jl = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = vt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Po(t, e)) : Xu(t);
    }
    function Xu(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Po(t, jl);
          return;
        }
        e = t.return;
        var l = y0(t.alternate, t, cl);
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
        var l = p0(e.alternate, e);
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
    function ed(e, t, l, a, n, u, c, o, h) {
      e.cancelPendingCommit = null;
      do
        Qu();
      while (Xe !== 0);
      if ((ye & 6) !== 0) throw Error(f(327));
      if (t !== null) {
        if (t === e.current) throw Error(f(177));
        if (u = t.lanes | t.childLanes, u |= Xi, nh(e, l, u, c, o, h), e === Te && (ne = Te = null, ie = 0), Ca = t, zl = e, sl = l, Fc = u, Wc = n, Qo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, E0(Zn, function() {
          return ud(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = O.T, O.T = null, n = B.p, B.p = 2, c = ye, ye |= 4;
          try {
            b0(e, t, l);
          } finally {
            ye = c, B.p = n, O.T = a;
          }
        }
        Xe = 1, td(), ld(), ad();
      }
    }
    function td() {
      if (Xe === 1) {
        Xe = 0;
        var e = zl, t = Ca, l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          l = O.T, O.T = null;
          var a = B.p;
          B.p = 2;
          var n = ye;
          ye |= 4;
          try {
            Ro(t, e);
            var u = ds, c = Lr(e.containerInfo), o = u.focusedElem, h = u.selectionRange;
            if (c !== o && o && o.ownerDocument && qr(o.ownerDocument.documentElement, o)) {
              if (h !== null && Bi(o)) {
                var N = h.start, E = h.end;
                if (E === void 0 && (E = N), "selectionStart" in o) o.selectionStart = N, o.selectionEnd = Math.min(E, o.value.length);
                else {
                  var D = o.ownerDocument || document, A = D && D.defaultView || window;
                  if (A.getSelection) {
                    var z = A.getSelection(), Y = o.textContent.length, J = Math.min(h.start, Y), ze = h.end === void 0 ? J : Math.min(h.end, Y);
                    !z.extend && J > ze && (c = ze, ze = J, J = c);
                    var S = Br(o, J), p = Br(o, ze);
                    if (S && p && (z.rangeCount !== 1 || z.anchorNode !== S.node || z.anchorOffset !== S.offset || z.focusNode !== p.node || z.focusOffset !== p.offset)) {
                      var j = D.createRange();
                      j.setStart(S.node, S.offset), z.removeAllRanges(), J > ze ? (z.addRange(j), z.extend(p.node, p.offset)) : (j.setEnd(p.node, p.offset), z.addRange(j));
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
        e.current = t, Xe = 2;
      }
    }
    function ld() {
      if (Xe === 2) {
        Xe = 0;
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
        Xe = 3;
      }
    }
    function ad() {
      if (Xe === 4 || Xe === 3) {
        Xe = 0, $m();
        var e = zl, t = Ca, l = sl, a = Qo;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Xe = 5 : (Xe = 0, Ca = zl = null, nd(e, e.pendingLanes));
        var n = e.pendingLanes;
        if (n === 0 && (Al = null), bi(l), t = t.stateNode, yt && typeof yt.onCommitFiberRoot == "function") try {
          yt.onCommitFiberRoot(Va, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          t = O.T, n = B.p, B.p = 2, O.T = null;
          try {
            for (var u = e.onRecoverableError, c = 0; c < a.length; c++) {
              var o = a[c];
              u(o.value, {
                componentStack: o.stack
              });
            }
          } finally {
            O.T = t, B.p = n;
          }
        }
        (sl & 3) !== 0 && Qu(), kt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Ic ? Tn++ : (Tn = 0, Ic = e) : Tn = 0, En(0);
      }
    }
    function nd(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, rn(t)));
    }
    function Qu() {
      return td(), ld(), ad(), ud();
    }
    function ud() {
      if (Xe !== 5) return false;
      var e = zl, t = Fc;
      Fc = 0;
      var l = bi(sl), a = O.T, n = B.p;
      try {
        B.p = 32 > l ? 32 : l, O.T = null, l = Wc, Wc = null;
        var u = zl, c = sl;
        if (Xe = 0, Ca = zl = null, sl = 0, (ye & 6) !== 0) throw Error(f(331));
        var o = ye;
        if (ye |= 4, Yo(u.current), Bo(u, u.current, c, l), ye = o, En(0, false), yt && typeof yt.onPostCommitFiberRoot == "function") try {
          yt.onPostCommitFiberRoot(Va, u);
        } catch {
        }
        return true;
      } finally {
        B.p = n, O.T = a, nd(e, t);
      }
    }
    function id(e, t, l) {
      t = Mt(l, t), t = Mc(e.stateNode, t, 2), e = _l(e, t, 2), e !== null && (Ja(e, 2), kt(e));
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
            e = Mt(l, e), l = io(2), a = _l(t, l, 2), a !== null && (co(l, a, t, e), Ja(a, 2), kt(a));
            break;
          }
        }
        t = t.return;
      }
    }
    function ts(e, t, l) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new x0();
        var n = /* @__PURE__ */ new Set();
        a.set(t, n);
      } else n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
      n.has(l) || (Kc = true, n.add(l), e = z0.bind(null, e, t, l), t.then(e, e));
    }
    function z0(e, t, l) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Te === e && (ie & l) === l && (Re === 4 || Re === 3 && (ie & 62914560) === ie && 300 > gt() - Bu ? (ye & 2) === 0 && Ra(e, 0) : Jc |= l, Da === ie && (Da = 0)), kt(e);
    }
    function cd(e, t) {
      t === 0 && (t = Ps()), e = Xl(e, t), e !== null && (Ja(e, t), kt(e));
    }
    function w0(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), cd(e, l);
    }
    function T0(e, t) {
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
    function E0(e, t) {
      return hi(e, t);
    }
    var ku = null, Ba = null, ls = false, Zu = false, as = false, Tl = 0;
    function kt(e) {
      e !== Ba && e.next === null && (Ba === null ? ku = Ba = e : Ba = Ba.next = e), Zu = true, ls || (ls = true, O0());
    }
    function En(e, t) {
      if (!as && Zu) {
        as = true;
        do
          for (var l = false, a = ku; a !== null; ) {
            if (e !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var c = a.suspendedLanes, o = a.pingedLanes;
                u = (1 << 31 - pt(42 | e) + 1) - 1, u &= n & ~(c & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, od(a, u));
            } else u = ie, u = $n(a, a === Te ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ka(a, u) || (l = true, od(a, u));
            a = a.next;
          }
        while (l);
        as = false;
      }
    }
    function M0() {
      sd();
    }
    function sd() {
      Zu = ls = false;
      var e = 0;
      Tl !== 0 && G0() && (e = Tl);
      for (var t = gt(), l = null, a = ku; a !== null; ) {
        var n = a.next, u = rd(a, t);
        u === 0 ? (a.next = null, l === null ? ku = n : l.next = n, n === null && (Ba = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Zu = true)), a = n;
      }
      Xe !== 0 && Xe !== 5 || En(e), Tl !== 0 && (Tl = 0);
    }
    function rd(e, t) {
      for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
        var c = 31 - pt(u), o = 1 << c, h = n[c];
        h === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[c] = ah(o, t)) : h <= t && (e.expiredLanes |= o), u &= ~o;
      }
      if (t = Te, l = ie, l = $n(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (xe === 2 || xe === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && gi(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((l & 3) === 0 || Ka(e, l)) {
        if (t = l & -l, t === e.callbackPriority) return t;
        switch (a !== null && gi(a), bi(l)) {
          case 2:
          case 8:
            l = Ws;
            break;
          case 32:
            l = Zn;
            break;
          case 268435456:
            l = Is;
            break;
          default:
            l = Zn;
        }
        return a = fd.bind(null, e), l = hi(l, a), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return a !== null && a !== null && gi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function fd(e, t) {
      if (Xe !== 0 && Xe !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var l = e.callbackNode;
      if (Qu() && e.callbackNode !== l) return null;
      var a = ie;
      return a = $n(e, e === Te ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Zo(e, a, t), rd(e, gt()), e.callbackNode != null && e.callbackNode === l ? fd.bind(null, e) : null);
    }
    function od(e, t) {
      if (Qu()) return null;
      Zo(e, t, true);
    }
    function O0() {
      Q0(function() {
        (ye & 6) !== 0 ? hi(Fs, M0) : sd();
      });
    }
    function ns() {
      if (Tl === 0) {
        var e = Sa;
        e === 0 && (e = Vn, Vn <<= 1, (Vn & 261888) === 0 && (Vn = 256)), Tl = e;
      }
      return Tl;
    }
    function dd(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Pn("" + e);
    }
    function md(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function U0(e, t, l, a, n) {
      if (t === "submit" && l && l.stateNode === n) {
        var u = dd((n[st] || null).action), c = a.submitter;
        c && (t = (t = c[st] || null) ? dd(t.formAction) : c.getAttribute("formAction"), t !== null && (u = t, c = null));
        var o = new au("action", "action", null, a, n);
        e.push({
          event: o,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (Tl !== 0) {
                    var h = c ? md(n, c) : new FormData(n);
                    Nc(l, {
                      pending: true,
                      data: h,
                      method: n.method,
                      action: u
                    }, null, h);
                  }
                } else typeof u == "function" && (o.preventDefault(), h = c ? md(n, c) : new FormData(n), Nc(l, {
                  pending: true,
                  data: h,
                  method: n.method,
                  action: u
                }, u, h));
              },
              currentTarget: n
            }
          ]
        });
      }
    }
    for (var us = 0; us < Gi.length; us++) {
      var is = Gi[us], D0 = is.toLowerCase(), C0 = is[0].toUpperCase() + is.slice(1);
      qt(D0, "on" + C0);
    }
    qt(Xr, "onAnimationEnd"), qt(Qr, "onAnimationIteration"), qt(kr, "onAnimationStart"), qt("dblclick", "onDoubleClick"), qt("focusin", "onFocus"), qt("focusout", "onBlur"), qt(Fh, "onTransitionRun"), qt(Wh, "onTransitionStart"), qt(Ih, "onTransitionCancel"), qt(Zr, "onTransitionEnd"), sa("onMouseEnter", [
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
    var Mn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), R0 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mn));
    function hd(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var a = e[l], n = a.event;
        a = a.listeners;
        e: {
          var u = void 0;
          if (t) for (var c = a.length - 1; 0 <= c; c--) {
            var o = a[c], h = o.instance, N = o.currentTarget;
            if (o = o.listener, h !== u && n.isPropagationStopped()) break e;
            u = o, n.currentTarget = N;
            try {
              u(n);
            } catch (E) {
              iu(E);
            }
            n.currentTarget = null, u = h;
          }
          else for (c = 0; c < a.length; c++) {
            if (o = a[c], h = o.instance, N = o.currentTarget, o = o.listener, h !== u && n.isPropagationStopped()) break e;
            u = o, n.currentTarget = N;
            try {
              u(n);
            } catch (E) {
              iu(E);
            }
            n.currentTarget = null, u = h;
          }
        }
      }
    }
    function ue(e, t) {
      var l = t[_i];
      l === void 0 && (l = t[_i] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      l.has(a) || (gd(t, e, 2, false), l.add(a));
    }
    function cs(e, t, l) {
      var a = 0;
      t && (a |= 4), gd(l, e, a, t);
    }
    var Vu = "_reactListening" + Math.random().toString(36).slice(2);
    function ss(e) {
      if (!e[Vu]) {
        e[Vu] = true, ir.forEach(function(l) {
          l !== "selectionchange" && (R0.has(l) || cs(l, false, e), cs(l, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Vu] || (t[Vu] = true, cs("selectionchange", false, t));
      }
    }
    function gd(e, t, l, a) {
      switch (kd(t)) {
        case 2:
          var n = rg;
          break;
        case 8:
          n = fg;
          break;
        default:
          n = js;
      }
      l = n.bind(null, t, l, e), n = void 0, !Ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), a ? n !== void 0 ? e.addEventListener(t, l, {
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
        var c = a.tag;
        if (c === 3 || c === 4) {
          var o = a.stateNode.containerInfo;
          if (o === n) break;
          if (c === 4) for (c = a.return; c !== null; ) {
            var h = c.tag;
            if ((h === 3 || h === 4) && c.stateNode.containerInfo === n) return;
            c = c.return;
          }
          for (; o !== null; ) {
            if (c = ua(o), c === null) return;
            if (h = c.tag, h === 5 || h === 6 || h === 26 || h === 27) {
              a = u = c;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
      br(function() {
        var N = u, E = zi(l), D = [];
        e: {
          var A = Vr.get(e);
          if (A !== void 0) {
            var z = au, Y = e;
            switch (e) {
              case "keypress":
                if (tu(l) === 0) break e;
              case "keydown":
              case "keyup":
                z = Th;
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
                z = yh;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = Oh;
                break;
              case Xr:
              case Qr:
              case kr:
                z = _h;
                break;
              case Zr:
                z = Dh;
                break;
              case "scroll":
              case "scrollend":
                z = hh;
                break;
              case "wheel":
                z = Rh;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = xh;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = jr;
                break;
              case "toggle":
              case "beforetoggle":
                z = Bh;
            }
            var J = (t & 4) !== 0, ze = !J && (e === "scroll" || e === "scrollend"), S = J ? A !== null ? A + "Capture" : null : A;
            J = [];
            for (var p = N, j; p !== null; ) {
              var U = p;
              if (j = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || j === null || S === null || (U = Wa(p, S), U != null && J.push(On(p, U, j))), ze) break;
              p = p.return;
            }
            0 < J.length && (A = new z(A, Y, null, l, E), D.push({
              event: A,
              listeners: J
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (A = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", A && l !== Ai && (Y = l.relatedTarget || l.fromElement) && (ua(Y) || Y[na])) break e;
            if ((z || A) && (A = E.window === E ? E : (A = E.ownerDocument) ? A.defaultView || A.parentWindow : window, z ? (Y = l.relatedTarget || l.toElement, z = N, Y = Y ? ua(Y) : null, Y !== null && (ze = x(Y), J = Y.tag, Y !== ze || J !== 5 && J !== 27 && J !== 6) && (Y = null)) : (z = null, Y = N), z !== Y)) {
              if (J = xr, U = "onMouseLeave", S = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (J = jr, U = "onPointerLeave", S = "onPointerEnter", p = "pointer"), ze = z == null ? A : Fa(z), j = Y == null ? A : Fa(Y), A = new J(U, p + "leave", z, l, E), A.target = ze, A.relatedTarget = j, U = null, ua(E) === N && (J = new J(S, p + "enter", Y, l, E), J.target = j, J.relatedTarget = ze, U = J), ze = U, z && Y) t: {
                for (J = H0, S = z, p = Y, j = 0, U = S; U; U = J(U)) j++;
                U = 0;
                for (var V = p; V; V = J(V)) U++;
                for (; 0 < j - U; ) S = J(S), j--;
                for (; 0 < U - j; ) p = J(p), U--;
                for (; j--; ) {
                  if (S === p || p !== null && S === p.alternate) {
                    J = S;
                    break t;
                  }
                  S = J(S), p = J(p);
                }
                J = null;
              }
              else J = null;
              z !== null && yd(D, A, z, J, false), Y !== null && ze !== null && yd(D, ze, Y, J, true);
            }
          }
          e: {
            if (A = N ? Fa(N) : window, z = A.nodeName && A.nodeName.toLowerCase(), z === "select" || z === "input" && A.type === "file") var me = Or;
            else if (Er(A)) if (Ur) me = Kh;
            else {
              me = Zh;
              var k = kh;
            }
            else z = A.nodeName, !z || z.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? N && Ni(N.elementType) && (me = Or) : me = Vh;
            if (me && (me = me(e, N))) {
              Mr(D, me, l, E);
              break e;
            }
            k && k(e, A, N), e === "focusout" && N && A.type === "number" && N.memoizedProps.value != null && ji(A, "number", A.value);
          }
          switch (k = N ? Fa(N) : window, e) {
            case "focusin":
              (Er(k) || k.contentEditable === "true") && (ha = k, qi = N, un = null);
              break;
            case "focusout":
              un = qi = ha = null;
              break;
            case "mousedown":
              Li = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Li = false, Yr(D, l, E);
              break;
            case "selectionchange":
              if ($h) break;
            case "keydown":
            case "keyup":
              Yr(D, l, E);
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
          else ma ? wr(e, l) && (ce = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ce = "onCompositionStart");
          ce && (Nr && l.locale !== "ko" && (ma || ce !== "onCompositionStart" ? ce === "onCompositionEnd" && ma && (te = _r()) : (dl = E, Ei = "value" in dl ? dl.value : dl.textContent, ma = true)), k = Ku(N, ce), 0 < k.length && (ce = new Sr(ce, e, null, l, E), D.push({
            event: ce,
            listeners: k
          }), te ? ce.data = te : (te = Tr(l), te !== null && (ce.data = te)))), (te = Lh ? Yh(e, l) : Gh(e, l)) && (ce = Ku(N, "onBeforeInput"), 0 < ce.length && (k = new Sr("onBeforeInput", "beforeinput", null, l, E), D.push({
            event: k,
            listeners: ce
          }), k.data = te)), U0(D, e, N, l, E);
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
    function H0(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function yd(e, t, l, a, n) {
      for (var u = t._reactName, c = []; l !== null && l !== a; ) {
        var o = l, h = o.alternate, N = o.stateNode;
        if (o = o.tag, h !== null && h === a) break;
        o !== 5 && o !== 26 && o !== 27 || N === null || (h = N, n ? (N = Wa(l, u), N != null && c.unshift(On(l, N, h))) : n || (N = Wa(l, u), N != null && c.push(On(l, N, h)))), l = l.return;
      }
      c.length !== 0 && e.push({
        event: t,
        listeners: c
      });
    }
    var B0 = /\r\n?/g, q0 = /\u0000|\uFFFD/g;
    function pd(e) {
      return (typeof e == "string" ? e : "" + e).replace(B0, `
`).replace(q0, "");
    }
    function bd(e, t) {
      return t = pd(t), pd(e) === t;
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
          yr(e, a, u);
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
          Vt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Vt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Vt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Vt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Vt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Vt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Vt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          Fn(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = dh.get(l) || l, Fn(e, l, a));
      }
    }
    function fs(e, t, l, a, n, u) {
      switch (l) {
        case "style":
          yr(e, a, u);
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
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[st] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === true ? e.setAttribute(l, "") : Fn(e, l, a);
          }
      }
    }
    function tt(e, t, l) {
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
            var c = l[u];
            if (c != null) switch (u) {
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
                Ae(e, t, u, c, l, null);
            }
          }
          n && Ae(e, t, "srcSet", l.srcSet, l, null), a && Ae(e, t, "src", l.src, l, null);
          return;
        case "input":
          ue("invalid", e);
          var o = u = c = n = null, h = null, N = null;
          for (a in l) if (l.hasOwnProperty(a)) {
            var E = l[a];
            if (E != null) switch (a) {
              case "name":
                n = E;
                break;
              case "type":
                c = E;
                break;
              case "checked":
                h = E;
                break;
              case "defaultChecked":
                N = E;
                break;
              case "value":
                u = E;
                break;
              case "defaultValue":
                o = E;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (E != null) throw Error(f(137, t));
                break;
              default:
                Ae(e, t, a, E, l, null);
            }
          }
          dr(e, u, o, h, N, c, n, false);
          return;
        case "select":
          ue("invalid", e), a = c = u = null;
          for (n in l) if (l.hasOwnProperty(n) && (o = l[n], o != null)) switch (n) {
            case "value":
              u = o;
              break;
            case "defaultValue":
              c = o;
              break;
            case "multiple":
              a = o;
            default:
              Ae(e, t, n, o, l, null);
          }
          t = u, l = c, e.multiple = !!a, t != null ? ra(e, !!a, t, false) : l != null && ra(e, !!a, l, true);
          return;
        case "textarea":
          ue("invalid", e), u = n = a = null;
          for (c in l) if (l.hasOwnProperty(c) && (o = l[c], o != null)) switch (c) {
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
              Ae(e, t, c, o, l, null);
          }
          hr(e, a, n, u);
          return;
        case "option":
          for (h in l) l.hasOwnProperty(h) && (a = l[h], a != null) && (h === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ae(e, t, h, a, l, null));
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
          for (N in l) if (l.hasOwnProperty(N) && (a = l[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(f(137, t));
            default:
              Ae(e, t, N, a, l, null);
          }
          return;
        default:
          if (Ni(t)) {
            for (E in l) l.hasOwnProperty(E) && (a = l[E], a !== void 0 && fs(e, t, E, a, l, void 0));
            return;
          }
      }
      for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && Ae(e, t, o, a, l, null));
    }
    function L0(e, t, l, a) {
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
          var n = null, u = null, c = null, o = null, h = null, N = null, E = null;
          for (z in l) {
            var D = l[z];
            if (l.hasOwnProperty(z) && D != null) switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                h = D;
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
                N = z;
                break;
              case "defaultChecked":
                E = z;
                break;
              case "value":
                c = z;
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
          Si(e, c, o, h, N, E, u, n);
          return;
        case "select":
          z = c = o = A = null;
          for (u in l) if (h = l[u], l.hasOwnProperty(u) && h != null) switch (u) {
            case "value":
              break;
            case "multiple":
              z = h;
            default:
              a.hasOwnProperty(u) || Ae(e, t, u, null, a, h);
          }
          for (n in a) if (u = a[n], h = l[n], a.hasOwnProperty(n) && (u != null || h != null)) switch (n) {
            case "value":
              A = u;
              break;
            case "defaultValue":
              o = u;
              break;
            case "multiple":
              c = u;
            default:
              u !== h && Ae(e, t, n, u, a, h);
          }
          t = o, l = c, a = z, A != null ? ra(e, !!l, A, false) : !!a != !!l && (t != null ? ra(e, !!l, t, true) : ra(e, !!l, l ? [] : "", false));
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
          for (c in a) if (n = a[c], u = l[c], a.hasOwnProperty(c) && (n != null || u != null)) switch (c) {
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
              n !== u && Ae(e, t, c, n, a, u);
          }
          mr(e, A, z);
          return;
        case "option":
          for (var Y in l) A = l[Y], l.hasOwnProperty(Y) && A != null && !a.hasOwnProperty(Y) && (Y === "selected" ? e.selected = false : Ae(e, t, Y, null, a, A));
          for (h in a) A = a[h], z = l[h], a.hasOwnProperty(h) && A !== z && (A != null || z != null) && (h === "selected" ? e.selected = A && typeof A != "function" && typeof A != "symbol" : Ae(e, t, h, A, a, z));
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
          for (var J in l) A = l[J], l.hasOwnProperty(J) && A != null && !a.hasOwnProperty(J) && Ae(e, t, J, null, a, A);
          for (N in a) if (A = a[N], z = l[N], a.hasOwnProperty(N) && A !== z && (A != null || z != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (A != null) throw Error(f(137, t));
              break;
            default:
              Ae(e, t, N, A, a, z);
          }
          return;
        default:
          if (Ni(t)) {
            for (var ze in l) A = l[ze], l.hasOwnProperty(ze) && A !== void 0 && !a.hasOwnProperty(ze) && fs(e, t, ze, void 0, a, A);
            for (E in a) A = a[E], z = l[E], !a.hasOwnProperty(E) || A === z || A === void 0 && z === void 0 || fs(e, t, E, A, a, z);
            return;
          }
      }
      for (var S in l) A = l[S], l.hasOwnProperty(S) && A != null && !a.hasOwnProperty(S) && Ae(e, t, S, null, a, A);
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
    function Y0() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, c = n.initiatorType, o = n.duration;
          if (u && o && _d(c)) {
            for (c = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
              var h = l[a], N = h.startTime;
              if (N > o) break;
              var E = h.transferSize, D = h.initiatorType;
              E && _d(D) && (h = h.responseEnd, c += E * (h < o ? 1 : (o - N) / (h - N)));
            }
            if (--a, t += 8 * (u + c) / (n.duration / 1e3), e++, 10 < e) break;
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
    function G0() {
      var e = window.event;
      return e && e.type === "popstate" ? e === hs ? false : (hs = e, true) : (hs = null, false);
    }
    var Sd = typeof setTimeout == "function" ? setTimeout : void 0, X0 = typeof clearTimeout == "function" ? clearTimeout : void 0, jd = typeof Promise == "function" ? Promise : void 0, Q0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof jd < "u" ? function(e) {
      return jd.resolve(null).then(e).catch(k0);
    } : Sd;
    function k0(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function El(e) {
      return e === "head";
    }
    function Nd(e, t) {
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
            var c = u.nextSibling, o = u.nodeName;
            u[$a] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = c;
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
    function gs(e) {
      var t = e.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var l = t;
        switch (t = t.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            gs(l), vi(l);
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
    function Z0(e, t, l, a) {
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
    function V0(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Rt(e.nextSibling), e === null)) return null;
      return e;
    }
    function zd(e, t) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Rt(e.nextSibling), e === null)) return null;
      return e;
    }
    function ys(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function ps(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function K0(e, t) {
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
    var bs = null;
    function wd(e) {
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
    function Td(e) {
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
    function Ed(e, t, l) {
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
      f: J0,
      r: $0,
      D: F0,
      C: W0,
      L: I0,
      m: P0,
      X: tg,
      S: eg,
      M: lg
    };
    function J0() {
      var e = rl.f(), t = Yu();
      return e || t;
    }
    function $0(e) {
      var t = ia(e);
      t !== null && t.tag === 5 && t.type === "form" ? Vf(t) : rl.r(e);
    }
    var qa = typeof document > "u" ? null : document;
    function Od(e, t, l) {
      var a = qa;
      if (a && typeof t == "string" && t) {
        var n = Tt(t);
        n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Md.has(n) || (Md.add(n), e = {
          rel: e,
          crossOrigin: l,
          href: t
        }, a.querySelector(n) === null && (t = a.createElement("link"), tt(t, "link", e), Ve(t), a.head.appendChild(t)));
      }
    }
    function F0(e) {
      rl.D(e), Od("dns-prefetch", e, null);
    }
    function W0(e, t) {
      rl.C(e, t), Od("preconnect", e, t);
    }
    function I0(e, t, l) {
      rl.L(e, t, l);
      var a = qa;
      if (a && e && t) {
        var n = 'link[rel="preload"][as="' + Tt(t) + '"]';
        t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Tt(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Tt(l.imageSizes) + '"]')) : n += '[href="' + Tt(e) + '"]';
        var u = n;
        switch (t) {
          case "style":
            u = La(e);
            break;
          case "script":
            u = Ya(e);
        }
        Ht.has(u) || (e = C({
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        }, l), Ht.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Dn(u)) || t === "script" && a.querySelector(Cn(u)) || (t = a.createElement("link"), tt(t, "link", e), Ve(t), a.head.appendChild(t)));
      }
    }
    function P0(e, t) {
      rl.m(e, t);
      var l = qa;
      if (l && e) {
        var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + Tt(a) + '"][href="' + Tt(e) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Ya(e);
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
          a = l.createElement("link"), tt(a, "link", e), Ve(a), l.head.appendChild(a);
        }
      }
    }
    function eg(e, t, l) {
      rl.S(e, t, l);
      var a = qa;
      if (a && e) {
        var n = ca(a).hoistableStyles, u = La(e);
        t = t || "default";
        var c = n.get(u);
        if (!c) {
          var o = {
            loading: 0,
            preload: null
          };
          if (c = a.querySelector(Dn(u))) o.loading = 5;
          else {
            e = C({
              rel: "stylesheet",
              href: e,
              "data-precedence": t
            }, l), (l = Ht.get(u)) && _s(e, l);
            var h = c = a.createElement("link");
            Ve(h), tt(h, "link", e), h._p = new Promise(function(N, E) {
              h.onload = N, h.onerror = E;
            }), h.addEventListener("load", function() {
              o.loading |= 1;
            }), h.addEventListener("error", function() {
              o.loading |= 2;
            }), o.loading |= 4, Fu(c, t, a);
          }
          c = {
            type: "stylesheet",
            instance: c,
            count: 1,
            state: o
          }, n.set(u, c);
        }
      }
    }
    function tg(e, t) {
      rl.X(e, t);
      var l = qa;
      if (l && e) {
        var a = ca(l).hoistableScripts, n = Ya(e), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (e = C({
          src: e,
          async: true
        }, t), (t = Ht.get(n)) && vs(e, t), u = l.createElement("script"), Ve(u), tt(u, "link", e), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function lg(e, t) {
      rl.M(e, t);
      var l = qa;
      if (l && e) {
        var a = ca(l).hoistableScripts, n = Ya(e), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (e = C({
          src: e,
          async: true,
          type: "module"
        }, t), (t = Ht.get(n)) && vs(e, t), u = l.createElement("script"), Ve(u), tt(u, "link", e), l.head.appendChild(u)), u = {
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
          return typeof l.precedence == "string" && typeof l.href == "string" ? (t = La(l.href), l = ca(n).hoistableStyles, a = l.get(t), a || (a = {
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
            e = La(l.href);
            var u = ca(n).hoistableStyles, c = u.get(e);
            if (c || (n = n.ownerDocument || n, c = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(e, c), (u = n.querySelector(Dn(e))) && !u._p && (c.instance = u, c.state.loading = 5), Ht.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ht.set(e, l), u || ag(n, e, l, c.state))), t && a === null) throw Error(f(528, ""));
            return c;
          }
          if (t && a !== null) throw Error(f(529, ""));
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ya(l), l = ca(n).hoistableScripts, a = l.get(t), a || (a = {
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
    function La(e) {
      return 'href="' + Tt(e) + '"';
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
    function ag(e, t, l, a) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), tt(t, "link", l), Ve(t), e.head.appendChild(t));
    }
    function Ya(e) {
      return '[src="' + Tt(e) + '"]';
    }
    function Cn(e) {
      return "script[async]" + e;
    }
    function Cd(e, t, l) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + Tt(l.href) + '"]');
          if (a) return t.instance = a, Ve(a), a;
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement("style"), Ve(a), tt(a, "style", n), Fu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = La(l.href);
          var u = e.querySelector(Dn(n));
          if (u) return t.state.loading |= 4, t.instance = u, Ve(u), u;
          a = Dd(l), (n = Ht.get(n)) && _s(a, n), u = (e.ownerDocument || e).createElement("link"), Ve(u);
          var c = u;
          return c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), tt(u, "link", a), t.state.loading |= 4, Fu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Ya(l.src), (n = e.querySelector(Cn(u))) ? (t.instance = n, Ve(n), n) : (a = l, (n = Ht.get(u)) && (a = C({}, l), vs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Ve(n), tt(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(f(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Fu(a, l.precedence, e));
      return t.instance;
    }
    function Fu(e, t, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, c = 0; c < a.length; c++) {
        var o = a[c];
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
        if (!(u[$a] || u[We] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var c = u.getAttribute(t) || "";
          c = e + c;
          var o = a.get(c);
          o ? o.push(u) : a.set(c, [
            u
          ]);
        }
      }
      return a;
    }
    function Hd(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function ng(e, t, l) {
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
    function ug(e, t, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = La(a.href), u = t.querySelector(Dn(n));
          if (u) {
            t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Iu.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Ve(u);
            return;
          }
          u = t.ownerDocument || t, a = Dd(a), (n = Ht.get(n)) && _s(a, n), u = u.createElement("link"), Ve(u);
          var c = u;
          c._p = new Promise(function(o, h) {
            c.onload = o, c.onerror = h;
          }), tt(u, "link", a), l.instance = u;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = Iu.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
      }
    }
    var xs = 0;
    function ig(e, t) {
      return e.stylesheets && e.count === 0 && ei(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (e.stylesheets && ei(e, e.stylesheets), e.unsuspend) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, 6e4 + t);
        0 < e.imgBytes && xs === 0 && (xs = 62500 * Y0());
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
      e.stylesheets = null, e.unsuspend !== null && (e.count++, Pu = /* @__PURE__ */ new Map(), t.forEach(cg, e), Pu = null, Iu.call(e));
    }
    function cg(e, t) {
      if (!(t.state.loading & 4)) {
        var l = Pu.get(e);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), Pu.set(e, l);
          for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var c = n[u];
            (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (l.set(c.dataset.precedence, c), a = c);
          }
          a && l.set(null, a);
        }
        n = t.instance, c = n.getAttribute("data-precedence"), u = l.get(c) || a, u === a && l.set(null, n), l.set(c, n), this.count++, a = Iu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
      }
    }
    var Rn = {
      $$typeof: K,
      Provider: null,
      Consumer: null,
      _currentValue: $,
      _currentValue2: $,
      _threadCount: 0
    };
    function sg(e, t, l, a, n, u, c, o, h) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yi(0), this.hiddenUpdates = yi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = h, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function qd(e, t, l, a, n, u, c, o, h, N, E, D) {
      return e = new sg(e, t, l, c, h, N, E, D, o), t = 1, u === true && (t |= 24), u = _t(3, null, null, t), e.current = u, u.stateNode = e, t = ec(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: t
      }, nc(u), e;
    }
    function Ld(e) {
      return e ? (e = pa, e) : pa;
    }
    function Yd(e, t, l, a, n, u) {
      n = Ld(n), a.context === null ? a.context = n : a.pendingContext = n, a = bl(t), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = _l(e, a, t), l !== null && (ht(l, e, t), mn(l, e, t));
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
        t !== null && ht(t, e, 67108864), Ss(e, 67108864);
      }
    }
    function Qd(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Nt();
        t = pi(t);
        var l = Xl(e, t);
        l !== null && ht(l, e, t), Ss(e, t);
      }
    }
    var ti = true;
    function rg(e, t, l, a) {
      var n = O.T;
      O.T = null;
      var u = B.p;
      try {
        B.p = 2, js(e, t, l, a);
      } finally {
        B.p = u, O.T = n;
      }
    }
    function fg(e, t, l, a) {
      var n = O.T;
      O.T = null;
      var u = B.p;
      try {
        B.p = 8, js(e, t, l, a);
      } finally {
        B.p = u, O.T = n;
      }
    }
    function js(e, t, l, a) {
      if (ti) {
        var n = Ns(a);
        if (n === null) rs(e, t, a, li, l), Zd(e, a);
        else if (dg(n, e, t, l, a)) a.stopPropagation();
        else if (Zd(e, a), t & 4 && -1 < og.indexOf(e)) {
          for (; n !== null; ) {
            var u = ia(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var c = Bl(u.pendingLanes);
                  if (c !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; c; ) {
                      var h = 1 << 31 - pt(c);
                      o.entanglements[1] |= h, c &= ~h;
                    }
                    kt(u), (ye & 6) === 0 && (qu = gt() + 500, En(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Xl(u, 2), o !== null && ht(o, u, 2), Yu(), Ss(u, 2);
            }
            if (u = Ns(a), u === null && rs(e, t, a, li, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else rs(e, t, a, null, l);
      }
    }
    function Ns(e) {
      return e = zi(e), As(e);
    }
    var li = null;
    function As(e) {
      if (li = null, e = ua(e), e !== null) {
        var t = x(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = g(t), e !== null) return e;
            e = null;
          } else if (l === 31) {
            if (e = m(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return li = e, null;
    }
    function kd(e) {
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
          switch (Fm()) {
            case Fs:
              return 2;
            case Ws:
              return 8;
            case Zn:
            case Wm:
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
    var zs = false, Ml = null, Ol = null, Ul = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Dl = [], og = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Zd(e, t) {
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
    function dg(e, t, l, a, n) {
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
    function Vd(e) {
      var t = ua(e.target);
      if (t !== null) {
        var l = x(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = g(l), t !== null) {
              e.blockedOn = t, nr(e.priority, function() {
                Qd(l);
              });
              return;
            }
          } else if (t === 31) {
            if (t = m(l), t !== null) {
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
        var l = Ns(e.nativeEvent);
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
    function mg() {
      zs = false, Ml !== null && ai(Ml) && (Ml = null), Ol !== null && ai(Ol) && (Ol = null), Ul !== null && ai(Ul) && (Ul = null), Hn.forEach(Kd), Bn.forEach(Kd);
    }
    function ni(e, t) {
      e.blockedOn === t && (e.blockedOn = null, zs || (zs = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, mg)));
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
          u !== null && (e.splice(t, 3), t -= 3, Nc(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Ga(e) {
      function t(h) {
        return ni(h, e);
      }
      Ml !== null && ni(Ml, e), Ol !== null && ni(Ol, e), Ul !== null && ni(Ul, e), Hn.forEach(t), Bn.forEach(t);
      for (var l = 0; l < Dl.length; l++) {
        var a = Dl[l];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < Dl.length && (l = Dl[0], l.blockedOn === null); ) Vd(l), l.blockedOn === null && Dl.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], c = n[st] || null;
        if (typeof u == "function") c || Jd(l);
        else if (c) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, c = u[st] || null) o = c.formAction;
            else if (As(n) !== null) continue;
          } else o = c.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Jd(l);
        }
      }
    }
    function $d() {
      function e(u) {
        u.canIntercept && u.info === "react-transition" && u.intercept({
          handler: function() {
            return new Promise(function(c) {
              return n = c;
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
    function ws(e) {
      this._internalRoot = e;
    }
    ii.prototype.render = ws.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(f(409));
      var l = t.current, a = Nt();
      Yd(l, a, e, t, null, null);
    }, ii.prototype.unmount = ws.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Yd(e.current, 2, null, e, null, null), Yu(), t[na] = null;
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
        Dl.splice(l, 0, e), l === 0 && Vd(e);
      }
    };
    var Fd = r.version;
    if (Fd !== "19.2.3") throw Error(f(527, Fd, "19.2.3"));
    B.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(f(188)) : (e = Object.keys(e).join(","), Error(f(268, e)));
      return e = v(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var hg = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: O,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var ci = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!ci.isDisabled && ci.supportsFiber) try {
        Va = ci.inject(hg), yt = ci;
      } catch {
      }
    }
    return Yn.createRoot = function(e, t) {
      if (!b(e)) throw Error(f(299));
      var l = false, a = "", n = lo, u = ao, c = no;
      return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = qd(e, 1, false, null, null, l, a, null, n, u, c, $d), e[na] = t.current, ss(e), new ws(t);
    }, Yn.hydrateRoot = function(e, t, l) {
      if (!b(e)) throw Error(f(299));
      var a = false, n = "", u = lo, c = ao, o = no, h = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (c = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (h = l.formState)), t = qd(e, 1, true, t, l ?? null, a, n, h, u, c, o, $d), t.context = Ld(null), l = t.current, a = Nt(), a = pi(a), n = bl(a), n.callback = null, _l(l, n, a), l = a, t.current.lanes = l, Ja(t, l), kt(t), e[na] = t.current, ss(e), new ii(t);
    }, Yn.version = "19.2.3", Yn;
  }
  var im;
  function Ag() {
    if (im) return Ms.exports;
    im = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (r) {
        console.error(r);
      }
    }
    return s(), Ms.exports = Ng(), Ms.exports;
  }
  var zg = Ag();
  const wg = Em(zg), Tg = "modulepreload", Eg = function(s, r) {
    return new URL(s, r).href;
  }, cm = {}, Cs = function(r, d, f) {
    let b = Promise.resolve();
    if (d && d.length > 0) {
      let v = function(T) {
        return Promise.all(T.map((C) => Promise.resolve(C).then((G) => ({
          status: "fulfilled",
          value: G
        }), (G) => ({
          status: "rejected",
          reason: G
        }))));
      };
      const g = document.getElementsByTagName("link"), m = document.querySelector("meta[property=csp-nonce]"), _ = (m == null ? void 0 : m.nonce) || (m == null ? void 0 : m.getAttribute("nonce"));
      b = v(d.map((T) => {
        if (T = Eg(T, f), T in cm) return;
        cm[T] = true;
        const C = T.endsWith(".css"), G = C ? '[rel="stylesheet"]' : "";
        if (f) for (let pe = g.length - 1; pe >= 0; pe--) {
          const _e = g[pe];
          if (_e.href === T && (!C || _e.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${T}"]${G}`)) return;
        const P = document.createElement("link");
        if (P.rel = C ? "stylesheet" : Tg, C || (P.as = "script"), P.crossOrigin = "", P.href = T, _ && P.setAttribute("nonce", _), document.head.appendChild(P), C) return new Promise((pe, _e) => {
          P.addEventListener("load", pe), P.addEventListener("error", () => _e(new Error(`Unable to preload CSS for ${T}`)));
        });
      }));
    }
    function x(g) {
      const m = new Event("vite:preloadError", {
        cancelable: true
      });
      if (m.payload = g, window.dispatchEvent(m), !m.defaultPrevented) throw g;
    }
    return b.then((g) => {
      for (const m of g || []) m.status === "rejected" && x(m.reason);
      return r().catch(x);
    });
  };
  const Mg = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Og = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, d, f) => f ? f.toUpperCase() : d.toLowerCase()), sm = (s) => {
    const r = Og(s);
    return r.charAt(0).toUpperCase() + r.slice(1);
  }, Mm = (...s) => s.filter((r, d, f) => !!r && r.trim() !== "" && f.indexOf(r) === d).join(" ").trim(), Ug = (s) => {
    for (const r in s) if (r.startsWith("aria-") || r === "role" || r === "title") return true;
  };
  var Dg = {
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
  const Cg = se.forwardRef(({ color: s = "currentColor", size: r = 24, strokeWidth: d = 2, absoluteStrokeWidth: f, className: b = "", children: x, iconNode: g, ...m }, _) => se.createElement("svg", {
    ref: _,
    ...Dg,
    width: r,
    height: r,
    stroke: s,
    strokeWidth: f ? Number(d) * 24 / Number(r) : d,
    className: Mm("lucide", b),
    ...!x && !Ug(m) && {
      "aria-hidden": "true"
    },
    ...m
  }, [
    ...g.map(([v, T]) => se.createElement(v, T)),
    ...Array.isArray(x) ? x : [
      x
    ]
  ]));
  const de = (s, r) => {
    const d = se.forwardRef(({ className: f, ...b }, x) => se.createElement(Cg, {
      ref: x,
      iconNode: r,
      className: Mm(`lucide-${Mg(sm(s))}`, `lucide-${s}`, f),
      ...b
    }));
    return d.displayName = sm(s), d;
  };
  const Rg = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], rm = de("activity", Rg);
  const Hg = [
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
  ], Bg = de("book-open", Hg);
  const qg = [
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
  ], Lg = de("building-2", qg);
  const Yg = [
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
  ], Gg = de("bug", Yg);
  const Xg = [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
      }
    ]
  ], Om = de("chevron-down", Xg);
  const Qg = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ], Um = de("chevron-right", Qg);
  const kg = [
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
  ], Zs = de("clock", kg);
  const Zg = [
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
  ], Vg = de("download", Zg);
  const Kg = [
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
      "circle",
      {
        cx: "10",
        cy: "12",
        r: "2",
        key: "737tya"
      }
    ],
    [
      "path",
      {
        d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",
        key: "wt3hpn"
      }
    ]
  ], Jg = de("file-image", Kg);
  const $g = [
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
  ], Gs = de("file-text", $g);
  const Fg = [
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
  ], Rs = de("guitar", Fg);
  const Wg = [
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
  ], Dm = de("hash", Wg);
  const Ig = [
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
  ], Pg = de("image", Ig);
  const ey = [
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
  ], ty = de("info", ey);
  const ly = [
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
  ], fm = de("key-round", ly);
  const ay = [
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
  ], ny = de("link", ay);
  const uy = [
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
  ], Hs = de("log-out", uy);
  const iy = [
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
  ], Bs = de("mic", iy);
  const cy = [
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
  ], sy = de("monitor", cy);
  const ry = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], fy = de("moon", ry);
  const oy = [
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
  ], dy = de("music-3", oy);
  const my = [
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
  ], ka = de("music", my);
  const hy = [
    [
      "path",
      {
        d: "M13 21h8",
        key: "1jsn5i"
      }
    ],
    [
      "path",
      {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
      }
    ]
  ], om = de("pen-line", hy);
  const gy = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], yy = de("play", gy);
  const py = [
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
  ], it = de("plus", py);
  const by = [
    [
      "path",
      {
        d: "m18 14 4 4-4 4",
        key: "10pe0f"
      }
    ],
    [
      "path",
      {
        d: "m18 2 4 4-4 4",
        key: "pucp1d"
      }
    ],
    [
      "path",
      {
        d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",
        key: "1ailkh"
      }
    ],
    [
      "path",
      {
        d: "M2 6h1.972a4 4 0 0 1 3.6 2.2",
        key: "km57vx"
      }
    ],
    [
      "path",
      {
        d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",
        key: "os18l9"
      }
    ]
  ], _y = de("shuffle", by);
  const vy = [
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
  ], xy = de("sticky-note", vy);
  const Sy = [
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
  ], jy = de("sun", Sy);
  const Ny = [
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
  ], lt = de("trash-2", Ny);
  const Ay = [
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
  ], dm = de("trending-up", Ay);
  const zy = [
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
  ], Cm = de("upload", zy);
  const wy = [
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
  ], Ty = de("user", wy);
  const Ey = [
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
  ], My = de("users-round", Ey);
  function Oy({ file: s, onFileUpload: r, isParsingMetadata: d = false, metadataSummary: f }) {
    const b = (x) => {
      var _a;
      r(((_a = x.target.files) == null ? void 0 : _a[0]) || null);
    };
    return i.jsxs("div", {
      className: "space-y-3",
      children: [
        i.jsx("label", {
          className: "micro-label",
          children: "Upload flo\u2122 File"
        }),
        i.jsxs("label", {
          className: "group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/10",
          "aria-busy": d,
          children: [
            i.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                i.jsx("div", {
                  className: "rounded-full bg-primary/15 p-2 text-primary",
                  children: i.jsx(Gs, {
                    className: "h-4 w-4 icon-accent"
                  })
                }),
                i.jsxs("div", {
                  children: [
                    i.jsx("p", {
                      className: "font-semibold",
                      children: "Drop or browse your .flo file"
                    }),
                    i.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "All metadata editing happens locally."
                    })
                  ]
                })
              ]
            }),
            i.jsx("span", {
              className: "btn",
              "data-variant": "solid",
              "data-tone": "primary",
              "data-size": "xs",
              children: "Browse"
            }),
            i.jsx("input", {
              type: "file",
              accept: ".flo",
              onChange: b,
              className: "sr-only"
            })
          ]
        }),
        s && i.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            i.jsx(Gs, {
              className: "h-4 w-4 icon-accent"
            }),
            i.jsxs("div", {
              className: "flex flex-col",
              children: [
                i.jsx("span", {
                  className: "font-medium",
                  children: s.name
                }),
                i.jsxs("span", {
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
        s && i.jsx("div", {
          className: "text-xs text-muted-foreground",
          children: d ? i.jsxs("span", {
            className: "flex items-center gap-2 text-primary",
            children: [
              i.jsx("span", {
                className: "h-1.5 w-1.5 animate-ping rounded-full bg-primary",
                "aria-hidden": "true"
              }),
              "Reading embedded tags..."
            ]
          }) : f ? i.jsx("span", {
            className: "text-foreground/70",
            children: f
          }) : null
        })
      ]
    });
  }
  function Uy({ musicianCredits: s = [], onMusicianCreditsChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          instrument: "",
          name: ""
        }
      ]);
    }, f = (x, g, m) => {
      const _ = [
        ...s
      ];
      _[x] = {
        ..._[x],
        [g]: m
      }, r(_);
    }, b = (x) => {
      r(s.filter((g, m) => m !== x));
    };
    return i.jsxs("div", {
      className: "space-y-3 mt-6",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2",
                  children: "Other Musician Credits"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-0.5",
                  children: "Credit instruments and performers"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Musician"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-2",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-4",
            children: [
              i.jsx(dy, {
                className: "h-8 w-8 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No musician credits added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Musician" to start'
              })
            ]
          }) : s.map((x, g) => i.jsxs("div", {
            className: "flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3",
            children: [
              i.jsx("input", {
                type: "text",
                value: x.instrument,
                onChange: (m) => f(g, "instrument", m.target.value),
                placeholder: "Instrument",
                className: "w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              i.jsx("input", {
                type: "text",
                value: x.name,
                onChange: (m) => f(g, "name", m.target.value),
                placeholder: "Performer Name",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 128
              }),
              i.jsx("button", {
                onClick: () => b(g),
                type: "button",
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, g))
        })
      ]
    });
  }
  const mm = [
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
  ], hm = [
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
  ], gm = [
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
  function Dy({ metadata: s, onMetadataChange: r }) {
    var _a, _b;
    const d = Object.values(s).filter((x) => typeof x == "string" && x.trim().length > 0).length, f = mm.length + hm.length + gm.length + ym.length + 1, b = ({ key: x, label: g, placeholder: m, type: _, colSpan: v }) => {
      const T = s[x], C = typeof T == "string" || typeof T == "number" ? T : "";
      return i.jsxs("div", {
        className: `space-y-2 ${v === "full" ? "md:col-span-2" : ""}`,
        children: [
          i.jsx("label", {
            htmlFor: x,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: g
          }),
          i.jsx("input", {
            id: x,
            value: C,
            onChange: (G) => r(x, _ === "number" ? parseInt(G.target.value) || void 0 : G.target.value),
            placeholder: m,
            type: _ ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, x);
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Metadata"
                }),
                i.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Basic Tags"
                })
              ]
            }),
            i.jsxs("div", {
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
        i.jsxs("div", {
          className: "space-y-8",
          children: [
            i.jsxs("div", {
              className: "space-y-4",
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Essentials"
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: mm.map(b)
                })
              ]
            }),
            i.jsxs("div", {
              className: "space-y-4",
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Release Details"
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: hm.map(b)
                })
              ]
            }),
            i.jsxs("div", {
              className: "space-y-4",
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Credits & Codes"
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: gm.map(b)
                })
              ]
            }),
            i.jsx(Uy, {
              musicianCredits: (s.musician_credits ?? []).map(([x, g]) => ({
                instrument: x,
                name: g
              })),
              onMusicianCreditsChange: (x) => r("musician_credits", x.map(({ instrument: g, name: m }) => [
                g,
                m
              ]))
            }),
            i.jsxs("div", {
              className: "space-y-4",
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Links"
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: ym.map(b)
                })
              ]
            })
          ]
        }),
        i.jsxs("div", {
          className: "mt-8 space-y-2",
          children: [
            i.jsx("label", {
              htmlFor: "comment",
              className: "text-sm font-semibold tracking-wide text-foreground/80",
              children: "Comments"
            }),
            i.jsx("textarea", {
              id: "comment",
              rows: 4,
              value: ((_b = (_a = s.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onChange: (x) => r("comments", [
                {
                  text: x.target.value
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
  const pm = [
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
      value: "artist",
      label: "Artist"
    },
    {
      value: "lead_artist",
      label: "Lead Artist"
    },
    {
      value: "band",
      label: "Band"
    },
    {
      value: "conductor",
      label: "Conductor"
    },
    {
      value: "band_logo",
      label: "Band Logo"
    },
    {
      value: "publisher_logo",
      label: "Publisher Logo"
    }
  ], bm = [
    {
      value: "composer",
      label: "Composer"
    },
    {
      value: "lyricist",
      label: "Lyricist"
    },
    {
      value: "video_screen_capture",
      label: "Video Screen Capture"
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
      value: "illustration",
      label: "Illustration"
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
      value: "media",
      label: "Media"
    },
    {
      value: "other",
      label: "Other"
    },
    {
      value: "bright_coloured_fish",
      label: "Bright Coloured Fish \u{1F41F}"
    }
  ], Cy = [
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
  function Ry({ pictures: s = [], onPicturesChange: r, coverVariants: d = [], onCoverVariantsChange: f, animatedCover: b, onAnimatedCoverChange: x, artistSignature: g, onArtistSignatureChange: m }) {
    const [_, v] = se.useState(false), T = (X, q) => URL.createObjectURL(new Blob([
      X
    ], {
      type: q
    })), C = async (X, q) => {
      var _a, _b;
      const Z = (_a = X.target.files) == null ? void 0 : _a[0];
      if (Z) {
        if (!Z.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if (Z.size > 10 * 1024 * 1024) {
          alert("Image size must be less than 10MB");
          return;
        }
        const le = await Z.arrayBuffer(), Q = new Uint8Array(le), ee = {
          mime_type: Z.type,
          picture_type: q,
          description: `${((_b = [
            ...pm,
            ...bm
          ].find((Ze) => Ze.value === q)) == null ? void 0 : _b.label) || "Picture"} Art`,
          data: Q
        }, ge = s.filter((Ze) => Ze.picture_type !== q);
        r([
          ...ge,
          ee
        ]);
      }
    }, G = (X) => {
      r(s.filter((q) => q.picture_type !== X));
    }, P = () => {
      f([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, pe = async (X, q) => {
      var _a;
      const Z = (_a = q.target.files) == null ? void 0 : _a[0];
      if (Z) {
        if (!Z.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const le = await Z.arrayBuffer(), Q = [
          ...d
        ];
        Q[X].data = new Uint8Array(le), Q[X].mime_type = Z.type, f(Q);
      }
    }, _e = (X, q, Z) => {
      const le = [
        ...d
      ];
      le[X] = {
        ...le[X],
        [q]: Z
      }, f(le);
    }, Je = (X) => {
      f(d.filter((q, Z) => Z !== X));
    }, Me = async (X) => {
      var _a;
      const q = (_a = X.target.files) == null ? void 0 : _a[0];
      if (q) {
        if (!q.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const Z = await q.arrayBuffer(), le = new Uint8Array(Z), Q = {
          mime_type: q.type,
          data: le,
          duration_ms: 3e3,
          loop_count: 0
        };
        x(Q);
      }
    }, ke = (X, q) => {
      b && x({
        ...b,
        [X]: q
      });
    }, K = () => {
      x(void 0);
    }, ve = async (X) => {
      var _a;
      const q = (_a = X.target.files) == null ? void 0 : _a[0];
      if (q && q.type.startsWith("image/")) {
        const Z = await q.arrayBuffer(), le = new Uint8Array(Z), Q = {
          mime_type: q.type,
          picture_type: "other",
          description: "Artist Signature",
          data: le
        };
        m && m(Q);
      }
    }, $e = () => m && m(void 0);
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          children: [
            i.jsx("p", {
              className: "micro-label",
              children: "Artwork"
            }),
            i.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Album Art & Covers"
            }),
            i.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Manage covers, variants, and animated art. For rare/advanced art types, see below."
            })
          ]
        }),
        i.jsxs("div", {
          className: "space-y-8",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Standard Covers & Art"
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: pm.map(({ value: X, label: q }) => {
                    const Z = s.find((le) => le.picture_type === X);
                    return i.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: Z ? i.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          i.jsx("img", {
                            src: T(Z.data, Z.mime_type),
                            alt: q,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          i.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              i.jsx("span", {
                                className: "text-sm font-medium",
                                children: q
                              }),
                              i.jsx("button", {
                                onClick: () => G(X),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: i.jsx(lt, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : i.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          i.jsx(it, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          i.jsx("span", {
                            className: "text-xs font-medium",
                            children: q
                          }),
                          i.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (le) => C(le, X),
                            className: "hidden"
                          })
                        ]
                      })
                    }, X);
                  })
                })
              ]
            }),
            i.jsxs("div", {
              children: [
                i.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    i.jsx("h3", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Cover Variants"
                    }),
                    i.jsxs("button", {
                      onClick: P,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        i.jsx(it, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Variant"
                      ]
                    })
                  ]
                }),
                i.jsx("div", {
                  className: "space-y-3",
                  children: d.length === 0 ? i.jsxs("div", {
                    className: "text-center text-muted-foreground py-4",
                    children: [
                      i.jsx(Pg, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      i.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : d.map((X, q) => i.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          i.jsx("select", {
                            value: X.variant_type,
                            onChange: (Z) => _e(q, "variant_type", Z.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: Cy.map(({ value: Z, label: le }) => i.jsx("option", {
                              value: Z,
                              children: le
                            }, Z))
                          }),
                          i.jsx("input", {
                            value: X.description || "",
                            onChange: (Z) => _e(q, "description", Z.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          i.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              i.jsx(Cm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              i.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (Z) => pe(q, Z),
                                className: "hidden"
                              })
                            ]
                          }),
                          i.jsx("button", {
                            onClick: () => Je(q),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: i.jsx(lt, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      X.data.length > 0 && i.jsx("img", {
                        src: T(X.data, X.mime_type),
                        alt: X.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, q))
                })
              ]
            }),
            i.jsxs("div", {
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Animated Cover"
                }),
                b ? i.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    i.jsx("img", {
                      src: T(b.data, b.mime_type),
                      alt: "Animated Cover",
                      className: "w-32 h-32 object-cover rounded-lg border"
                    }),
                    i.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        i.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            i.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Duration (ms)"
                            }),
                            i.jsx("input", {
                              type: "number",
                              value: b.duration_ms || 0,
                              onChange: (X) => ke("duration_ms", parseInt(X.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        }),
                        i.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            i.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Loop Count"
                            }),
                            i.jsx("input", {
                              type: "number",
                              value: b.loop_count || 0,
                              onChange: (X) => ke("loop_count", parseInt(X.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    i.jsxs("button", {
                      onClick: K,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        i.jsx(lt, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : i.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    i.jsx(yy, {
                      className: "h-8 w-8 icon-accent"
                    }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("p", {
                          className: "font-semibold",
                          children: "Upload Animated Cover"
                        }),
                        i.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "WebP or GIF for animation"
                        })
                      ]
                    }),
                    i.jsx("input", {
                      type: "file",
                      accept: "image/webp,image/gif",
                      onChange: Me,
                      className: "hidden"
                    })
                  ]
                })
              ]
            })
          ]
        }),
        i.jsxs("div", {
          className: "mt-10",
          children: [
            i.jsxs("button", {
              type: "button",
              className: "flex items-center w-full gap-2 text-lg font-semibold mb-4 select-none",
              onClick: () => v((X) => !X),
              "aria-expanded": _,
              children: [
                i.jsx("span", {
                  children: "Advanced Artwork"
                }),
                i.jsx("span", {
                  className: "ml-auto",
                  children: _ ? i.jsx(Om, {
                    className: "h-5 w-5"
                  }) : i.jsx(Um, {
                    className: "h-5 w-5"
                  })
                })
              ]
            }),
            _ && i.jsxs("div", {
              className: "space-y-8",
              children: [
                i.jsxs("div", {
                  children: [
                    i.jsxs("h3", {
                      className: "text-xs font-semibold flex items-center gap-2 text-foreground/70 mb-2",
                      children: [
                        i.jsx(om, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Artist Signature"
                      ]
                    }),
                    g ? i.jsxs("div", {
                      className: "flex items-center gap-4 border rounded p-3 bg-primary/10",
                      children: [
                        i.jsx("img", {
                          src: T(g.data, g.mime_type),
                          alt: "Signature",
                          className: "h-16 rounded border"
                        }),
                        i.jsxs("button", {
                          onClick: $e,
                          type: "button",
                          className: "btn",
                          "data-variant": "soft",
                          "data-tone": "danger",
                          "data-size": "sm",
                          children: [
                            i.jsx(lt, {
                              className: "h-4 w-4"
                            }),
                            "Remove"
                          ]
                        })
                      ]
                    }) : i.jsxs("label", {
                      className: "flex flex-col items-center gap-2 p-3 border-2 border-dashed rounded bg-background/70 cursor-pointer",
                      children: [
                        i.jsx(om, {
                          className: "h-7 w-7 icon-accent"
                        }),
                        i.jsx("span", {
                          className: "text-xs",
                          children: "Upload Artist Signature (PNG/JPG)"
                        }),
                        i.jsx("input", {
                          type: "file",
                          accept: "image/png,image/jpeg",
                          onChange: ve,
                          className: "hidden"
                        })
                      ]
                    })
                  ]
                }),
                i.jsxs("div", {
                  children: [
                    i.jsxs("h3", {
                      className: "text-xs font-semibold flex items-center gap-2 text-foreground/70 mb-3",
                      children: [
                        i.jsx(Jg, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Rare or Advanced Image Types"
                      ]
                    }),
                    i.jsx("div", {
                      className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
                      children: bm.map(({ value: X, label: q }) => {
                        const Z = s.find((le) => le.picture_type === X);
                        return i.jsx("div", {
                          className: "relative group rounded-lg border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/5 p-4 shadow-sm",
                          children: Z ? i.jsxs("div", {
                            className: "space-y-2",
                            children: [
                              i.jsx("img", {
                                src: T(Z.data, Z.mime_type),
                                alt: q,
                                className: "w-full h-20 object-contain rounded border"
                              }),
                              i.jsxs("div", {
                                className: "flex justify-between items-center",
                                children: [
                                  i.jsx("span", {
                                    className: "text-xs font-medium",
                                    children: q
                                  }),
                                  i.jsx("button", {
                                    onClick: () => G(X),
                                    className: "btn",
                                    "data-variant": "soft",
                                    "data-tone": "danger",
                                    "data-size": "xs",
                                    children: i.jsx(lt, {
                                      className: "h-4 w-4"
                                    })
                                  })
                                ]
                              })
                            ]
                          }) : i.jsxs("label", {
                            className: "flex flex-col items-center justify-center gap-2 h-20 cursor-pointer hover:bg-primary/10 rounded transition",
                            children: [
                              i.jsx(it, {
                                className: "h-5 w-5 icon-accent"
                              }),
                              i.jsx("span", {
                                className: "text-xs font-medium",
                                children: q
                              }),
                              i.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (le) => C(le, X),
                                className: "hidden"
                              })
                            ]
                          })
                        }, X);
                      })
                    }),
                    i.jsx("span", {
                      children: i.jsx("hr", {})
                    }),
                    i.jsx("div", {
                      className: "text-xs text-muted-foreground mt-2",
                      children: "These images are rarely used\u2014ID3v2 extension types or publisher/artist-specific."
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
  function Hy() {
    return {
      parseLRCFormat: (r) => {
        const d = r.split(`
`), f = [];
        return d.forEach((b) => {
          const x = b.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (x) {
            const g = parseInt(x[1]), m = parseInt(x[2]), _ = parseInt(x[3]), v = g * 60 * 1e3 + m * 1e3 + _ * 10, T = x[4].trim();
            f.push([
              T,
              v
            ]);
          }
        }), f.sort((b, x) => b[1] - x[1]), f;
      }
    };
  }
  const _m = {
    language: "eng",
    content_type: "lyrics",
    description: "",
    lines: []
  };
  function By({ syncedLyrics: s = [], onSyncedLyricsChange: r, unsyncedLyrics: d = [], onUnsyncedLyricsChange: f }) {
    var _a, _b;
    const [b, x] = se.useState(0), [g, m] = se.useState(""), [_, v] = se.useState(false), T = se.useRef(null), { parseLRCFormat: C } = Hy(), G = s[b] || _m, P = d[b] ?? "", pe = () => {
      const Q = [
        ...s,
        {
          ..._m
        }
      ];
      r(Q), f([
        ...d,
        ""
      ]), x(Q.length - 1), m("");
    }, _e = (Q) => {
      if (s.length < 2) return;
      const ee = s.filter((ct, Fe) => Fe !== Q), ge = d.filter((ct, Fe) => Fe !== Q), Ze = Q > 0 ? Q - 1 : 0;
      r(ee), f(ge), x(Ze), m("");
    }, Je = (Q) => {
      x(Q), m("");
    }, Me = (Q, ee) => {
      const ge = [
        ...s
      ];
      ge[b] = {
        ...ge[b],
        [Q]: ee
      }, r(ge);
    }, ke = (Q) => {
      const ee = [
        ...d
      ];
      ee[b] = Q, f(ee);
    }, K = () => {
      const Q = [
        ...s
      ];
      Q[b].lines.push({
        text: "",
        timestamp_ms: 0
      }), r(Q);
    }, ve = (Q, ee, ge) => {
      const Ze = [
        ...s
      ];
      Ze[b].lines[Q] = {
        text: ee,
        timestamp_ms: ge
      }, r(Ze);
    }, $e = (Q) => {
      const ee = [
        ...s
      ];
      ee[b].lines.splice(Q, 1), r(ee);
    }, X = () => {
      const Q = C(g);
      Q.length && (Me("lines", Q.map(([ee, ge]) => ({
        text: ee,
        timestamp_ms: ge
      }))), v(false), m(""));
    }, q = async (Q) => {
      var _a2;
      const ee = (_a2 = Q.target.files) == null ? void 0 : _a2[0];
      if (!ee) return;
      const ge = await ee.text();
      m(ge), v(true), Q.target.value = "";
    }, Z = (G.lines || []).map((Q) => Q.text).join(`
`), le = () => i.jsxs("div", {
      className: "flex flex-wrap gap-2 mb-3",
      children: [
        s.map((Q, ee) => i.jsxs("button", {
          type: "button",
          onClick: () => Je(ee),
          className: `btn px-3 py-1 text-xs ${b === ee ? "bg-primary/20 border-primary" : "bg-background border-input/50"} border rounded-full`,
          "data-variant": b === ee ? "solid" : "soft",
          children: [
            Q.language || "eng",
            " / ",
            Q.content_type || "lyrics",
            s.length > 1 && i.jsx("span", {
              className: "ml-1 text-danger cursor-pointer",
              title: "Delete group",
              onClick: (ge) => {
                ge.stopPropagation(), _e(ee);
              },
              children: i.jsx(lt, {
                className: "inline h-3 w-3"
              })
            })
          ]
        }, ee)),
        i.jsxs("button", {
          type: "button",
          className: "btn",
          "data-variant": "soft",
          "data-tone": "primary",
          "data-size": "xs",
          onClick: pe,
          children: [
            i.jsx(it, {
              className: "h-4 w-4 icon-accent"
            }),
            " Add group"
          ]
        })
      ]
    });
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4",
          children: [
            i.jsxs("div", {
              className: "flex items-center justify-between gap-2 mb-1",
              children: [
                i.jsxs("div", {
                  children: [
                    i.jsx("p", {
                      className: "micro-label",
                      children: "Lyrics"
                    }),
                    i.jsx("h2", {
                      className: "text-xl font-semibold",
                      children: "Lyrics & Sync"
                    })
                  ]
                }),
                i.jsxs("span", {
                  className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
                  children: [
                    ((_a = G.lines) == null ? void 0 : _a.length) || 0,
                    " entries"
                  ]
                })
              ]
            }),
            le()
          ]
        }),
        i.jsxs("div", {
          className: "space-y-4",
          children: [
            i.jsxs("div", {
              className: "flex gap-2 mb-2",
              children: [
                i.jsx("input", {
                  ref: T,
                  type: "file",
                  accept: ".lrc,text/plain",
                  style: {
                    display: "none"
                  },
                  onChange: q
                }),
                i.jsxs("button", {
                  type: "button",
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "primary",
                  "data-size": "sm",
                  onClick: () => {
                    var _a2;
                    return (_a2 = T.current) == null ? void 0 : _a2.click();
                  },
                  children: [
                    i.jsx(Gs, {
                      className: "h-4 w-4 icon-accent"
                    }),
                    "Upload LRC file"
                  ]
                }),
                i.jsxs("button", {
                  type: "button",
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "primary",
                  "data-size": "sm",
                  onClick: () => v((Q) => !Q),
                  children: [
                    i.jsx(Cm, {
                      className: "h-4 w-4 icon-accent"
                    }),
                    "Paste LRC text"
                  ]
                })
              ]
            }),
            _ && i.jsxs("div", {
              className: "space-y-2 mb-2",
              children: [
                i.jsx("label", {
                  className: "block text-sm font-semibold text-foreground/80 mb-1",
                  children: "Paste or edit LRC content:"
                }),
                i.jsx("textarea", {
                  value: g,
                  onChange: (Q) => m(Q.target.value),
                  rows: 4,
                  placeholder: "[00:01.40]First line\\n[00:08.50]Next line",
                  className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono"
                }),
                i.jsx("button", {
                  type: "button",
                  className: "btn",
                  "data-variant": "solid",
                  "data-tone": "primary",
                  "data-size": "sm",
                  onClick: X,
                  disabled: !g.trim(),
                  children: "Convert & Import to current group"
                })
              ]
            }),
            i.jsxs("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-2",
              children: [
                i.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    i.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Language"
                    }),
                    i.jsx("input", {
                      value: G.language || "",
                      onChange: (Q) => Me("language", Q.target.value),
                      placeholder: "eng",
                      maxLength: 3,
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest"
                    })
                  ]
                }),
                i.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    i.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Content Type"
                    }),
                    i.jsxs("select", {
                      value: G.content_type || "lyrics",
                      onChange: (Q) => Me("content_type", Q.target.value),
                      className: "w-full border border-input/80 bg-background/50 rounded-md px-3 py-2 text-sm",
                      children: [
                        i.jsx("option", {
                          value: "lyrics",
                          children: "Lyrics"
                        }),
                        i.jsx("option", {
                          value: "other",
                          children: "Other"
                        }),
                        i.jsx("option", {
                          value: "text_transcription",
                          children: "Text transcription"
                        }),
                        i.jsx("option", {
                          value: "part_name",
                          children: "Part name"
                        }),
                        i.jsx("option", {
                          value: "events",
                          children: "Events"
                        }),
                        i.jsx("option", {
                          value: "chord",
                          children: "Chord"
                        }),
                        i.jsx("option", {
                          value: "trivia",
                          children: "Trivia"
                        }),
                        i.jsx("option", {
                          value: "webpage_url",
                          children: "Webpage URL"
                        }),
                        i.jsx("option", {
                          value: "image_url",
                          children: "Image URL"
                        })
                      ]
                    })
                  ]
                }),
                i.jsxs("div", {
                  className: "space-y-2 md:col-span-2",
                  children: [
                    i.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        i.jsx("label", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Unsynced Lyrics"
                        }),
                        i.jsx("span", {
                          className: "text-xs text-muted-foreground text-right",
                          children: "Leave blank to auto-fill from the synced lines above."
                        })
                      ]
                    }),
                    i.jsx("textarea", {
                      value: P || Z,
                      onChange: (Q) => ke(Q.target.value),
                      rows: 4,
                      placeholder: "Paste the full lyric sheet if you don\u2019t need timestamps.",
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono"
                    })
                  ]
                })
              ]
            }),
            i.jsxs("div", {
              className: "space-y-3",
              children: [
                i.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    i.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Timeline Entries"
                    }),
                    i.jsxs("button", {
                      onClick: K,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      type: "button",
                      children: [
                        i.jsx(it, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                i.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = G.lines) == null ? void 0 : _b.map((Q, ee) => i.jsx(qy, {
                    index: ee,
                    text: Q.text,
                    timestamp: Q.timestamp_ms,
                    onUpdate: ve,
                    onDelete: $e
                  }, ee))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function qy({ index: s, text: r, timestamp: d, onUpdate: f, onDelete: b }) {
    return i.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        i.jsx("input", {
          value: r,
          onChange: (x) => f(s, x.target.value, d),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm"
        }),
        i.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            i.jsx(Zs, {
              className: "h-4 w-4 icon-accent"
            }),
            i.jsx("input", {
              type: "number",
              value: d,
              onChange: (x) => f(s, r, parseInt(x.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm"
            })
          ]
        }),
        i.jsx("button", {
          onClick: () => b(s),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          type: "button",
          children: i.jsx(lt, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  const vm = [
    {
      value: "intro",
      label: "Intro",
      icon: ka
    },
    {
      value: "verse",
      label: "Verse",
      icon: Bg
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
      icon: Lg
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
      icon: Zs
    },
    {
      value: "other",
      label: "Other",
      icon: ka
    }
  ];
  function Ly({ sectionMarkers: s = [], onSectionMarkersChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, f = (g, m, _) => {
      const v = [
        ...s
      ];
      v[g] = {
        ...v[g],
        [m]: _
      }, r(v);
    }, b = (g) => {
      r(s.filter((m, _) => _ !== g));
    }, x = (g) => {
      const m = Math.floor(g / 1e3), _ = Math.floor(m / 60), v = m % 60, T = Math.floor(g % 1e3 / 10);
      return `${_}:${v.toString().padStart(2, "0")}.${T.toString().padStart(2, "0")}`;
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Timing"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Section Markers"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Mark song sections for better playback"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Marker"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(ka, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No section markers added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Marker" to start'
              })
            ]
          }) : s.map((g, m) => {
            var _a;
            const v = ((_a = vm.find((T) => T.value === g.section_type)) == null ? void 0 : _a.icon) || ka;
            return i.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                i.jsx(v, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                i.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    i.jsx(Zs, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    i.jsx("input", {
                      type: "number",
                      value: g.timestamp_ms,
                      onChange: (T) => f(m, "timestamp_ms", Math.max(0, parseInt(T.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    i.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        x(g.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                i.jsx("select", {
                  value: g.section_type,
                  onChange: (T) => f(m, "section_type", T.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: vm.map(({ value: T, label: C }) => i.jsx("option", {
                    value: T,
                    children: C
                  }, T))
                }),
                i.jsx("input", {
                  value: g.label || "",
                  onChange: (T) => f(m, "label", T.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                i.jsx("button", {
                  onClick: () => b(m),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: i.jsx(lt, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, m);
          })
        })
      ]
    });
  }
  function Yy({ bpmMap: s = [], onBpmMapChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, f = (m, _, v) => {
      const T = [
        ...s
      ];
      T[m] = {
        ...T[m],
        [_]: v
      }, r(T);
    }, b = (m) => {
      r(s.filter((_, v) => v !== m));
    }, x = (m) => {
      const _ = Math.floor(m / 1e3), v = Math.floor(_ / 60), T = _ % 60;
      return `${v}:${T.toString().padStart(2, "0")}`;
    }, g = [
      ...s
    ].sort((m, _) => m.timestamp_ms - _.timestamp_ms);
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "BPM Map"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track tempo changes over time"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: g.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(dm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No BPM changes added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : i.jsxs(i.Fragment, {
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  i.jsx(rm, {
                    className: "h-4 w-4"
                  }),
                  i.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      g.map((m, _) => `${x(m.timestamp_ms)} \u2192 ${m.bpm} BPM${_ < g.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              g.map((m, _) => i.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      i.jsx(rm, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      i.jsx("input", {
                        type: "number",
                        value: m.timestamp_ms,
                        onChange: (v) => f(_, "timestamp_ms", Math.max(0, parseInt(v.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      i.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          x(m.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  i.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      i.jsx(dm, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      i.jsx("input", {
                        type: "number",
                        value: m.bpm,
                        onChange: (v) => f(_, "bpm", Math.max(1, parseFloat(v.target.value) || 120)),
                        placeholder: "BPM",
                        step: "0.1",
                        className: "w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      i.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "BPM"
                      })
                    ]
                  }),
                  i.jsx("button", {
                    onClick: () => b(_),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: i.jsx(lt, {
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
  function Gy({ keyChanges: s = [], onKeyChangesChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: 0,
          key: ""
        }
      ]);
    }, f = (m, _, v) => {
      const T = [
        ...s
      ];
      T[m] = {
        ...T[m],
        [_]: v
      }, r(T);
    }, b = (m) => {
      r(s.filter((_, v) => v !== m));
    }, x = (m) => {
      const _ = Math.floor(m / 1e3), v = Math.floor(_ / 60), T = _ % 60;
      return `${v}:${T.toString().padStart(2, "0")}`;
    }, g = [
      ...s
    ].sort((m, _) => m.timestamp_ms - _.timestamp_ms);
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Key Changes"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track musical key changes over time (e.g. C, F#m, D\u266D)"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: g.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(fm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No key changes added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : i.jsxs(i.Fragment, {
            children: [
              i.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  i.jsx(Dm, {
                    className: "h-4 w-4"
                  }),
                  i.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      g.map((m, _) => `${x(m.timestamp_ms)} \u2192 ${m.key || "?"}${_ < g.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              g.map((m, _) => i.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      i.jsx(fm, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      i.jsx("input", {
                        type: "number",
                        value: m.timestamp_ms,
                        onChange: (v) => f(_, "timestamp_ms", Math.max(0, parseInt(v.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      i.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          x(m.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  i.jsx("div", {
                    className: "flex items-center gap-2",
                    children: i.jsx("input", {
                      type: "text",
                      value: m.key,
                      onChange: (v) => f(_, "key", v.target.value),
                      placeholder: "Key (e.g. C#m)",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    })
                  }),
                  i.jsx("button", {
                    onClick: () => b(_),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    type: "button",
                    children: i.jsx(lt, {
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
  function Xy({ popularimeter: s, onChange: r }) {
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4",
          children: [
            i.jsx("p", {
              className: "micro-label",
              children: "Stats"
            }),
            i.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Popularity & Usage"
            }),
            i.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Track ratings and play count (for history or sync)"
            })
          ]
        }),
        i.jsxs("div", {
          className: "flex flex-col gap-4 sm:flex-row sm:items-end",
          children: [
            i.jsxs("div", {
              className: "flex flex-col gap-2 flex-1",
              children: [
                i.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "User Email"
                }),
                i.jsx("input", {
                  type: "email",
                  className: "w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50",
                  value: s.email || "",
                  onChange: (d) => r("email", d.target.value),
                  placeholder: "user@email.com",
                  autoComplete: "email"
                })
              ]
            }),
            i.jsxs("div", {
              className: "flex flex-col gap-2 w-1/3 min-w-[120px]",
              children: [
                i.jsxs("label", {
                  className: "text-xs font-medium text-muted-foreground flex justify-between",
                  children: [
                    "Rating",
                    " ",
                    i.jsxs("span", {
                      className: "text-[0.85em] text-muted-foreground",
                      children: [
                        s.rating ?? 0,
                        " / 255"
                      ]
                    })
                  ]
                }),
                i.jsx("input", {
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
            i.jsxs("div", {
              className: "flex flex-col gap-2 w-1/4 min-w-[80px]",
              children: [
                i.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "Play Count"
                }),
                i.jsx("input", {
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
  function Qy({ userText: s = [], onUserTextChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          description: "",
          value: ""
        }
      ]);
    }, f = (x, g, m) => {
      const _ = [
        ...s
      ];
      _[x] = {
        ..._[x],
        [g]: m
      }, r(_);
    }, b = (x) => {
      r(s.filter((g, m) => m !== x));
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Advanced"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Custom Metadata"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Store custom key/value info for your own app or player"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Pair"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(Dm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No custom data added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Pair" to start'
              })
            ]
          }) : s.map((x, g) => i.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
            children: [
              i.jsx("input", {
                type: "text",
                value: x.description,
                onChange: (m) => f(g, "description", m.target.value),
                placeholder: "Label",
                className: "w-36 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              i.jsx("input", {
                type: "text",
                value: x.value,
                onChange: (m) => f(g, "value", m.target.value),
                placeholder: "Value",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 255
              }),
              i.jsx("button", {
                onClick: () => b(g),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, g))
        })
      ]
    });
  }
  function ky({ creatorNotes: s = [], onCreatorNotesChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          timestamp_ms: void 0,
          text: ""
        }
      ]);
    }, f = (g, m, _) => {
      const v = [
        ...s
      ];
      v[g] = {
        ...v[g],
        [m]: _
      }, r(v);
    }, b = (g) => {
      r(s.filter((m, _) => _ !== g));
    }, x = (g) => {
      if (g == null) return "\u2013";
      const m = Math.floor(g / 1e3), _ = Math.floor(m / 60), v = m % 60;
      return `${_}:${v.toString().padStart(2, "0")}`;
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Notes"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Creator Notes"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Personal/team notes with optional timestamps (ms)"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Note"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(xy, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No notes yet"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Note" to start'
              })
            ]
          }) : s.map((g, m) => i.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              i.jsx("input", {
                type: "number",
                value: g.timestamp_ms ?? "",
                onChange: (_) => f(m, "timestamp_ms", _.target.value === "" ? void 0 : Math.max(0, parseInt(_.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              i.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  x(g.timestamp_ms),
                  ")"
                ]
              }),
              i.jsx("textarea", {
                value: g.text,
                onChange: (_) => f(m, "text", _.target.value),
                placeholder: "Note text",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50 min-h-8",
                maxLength: 512
              }),
              i.jsx("button", {
                onClick: () => b(m),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, m))
        })
      ]
    });
  }
  function Zy({ collaborationCredits: s = [], onCollaborationCreditsChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          role: "",
          name: "",
          timestamp_ms: void 0
        }
      ]);
    }, f = (g, m, _) => {
      const v = [
        ...s
      ];
      v[g] = {
        ...v[g],
        [m]: _
      }, r(v);
    }, b = (g) => {
      r(s.filter((m, _) => _ !== g));
    }, x = (g) => {
      if (g == null) return "\u2013";
      const m = Math.floor(g / 1e3), _ = Math.floor(m / 60), v = m % 60;
      return `${_}:${v.toString().padStart(2, "0")}`;
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "People"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Collaboration Credits"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Add credits for each contributor and their role. Optionally timestamp their contribution!"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Credit"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(My, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No collaboration credits"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Credit" to start'
              })
            ]
          }) : s.map((g, m) => i.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              i.jsx("input", {
                type: "text",
                value: g.role,
                onChange: (_) => f(m, "role", _.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 40
              }),
              i.jsx("input", {
                type: "text",
                value: g.name,
                onChange: (_) => f(m, "name", _.target.value),
                placeholder: "Name",
                className: "w-48 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              i.jsx("input", {
                type: "number",
                value: g.timestamp_ms ?? "",
                onChange: (_) => f(m, "timestamp_ms", _.target.value === "" ? void 0 : Math.max(0, parseInt(_.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              i.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  x(g.timestamp_ms),
                  ")"
                ]
              }),
              i.jsx("button", {
                onClick: () => b(m),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, m))
        })
      ]
    });
  }
  function Vy({ disabled: s, isProcessing: r, fileName: d, onProcess: f }) {
    return i.jsx("section", {
      className: "glass-panel p-6 sm:p-8",
      children: i.jsxs("div", {
        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        children: [
          i.jsxs("div", {
            children: [
              i.jsx("p", {
                className: "micro-label",
                children: "Final step"
              }),
              i.jsx("p", {
                className: "text-base font-semibold",
                children: d ? `Render tags into ${d}` : "Load a flo\u2122 to begin"
              })
            ]
          }),
          i.jsx("button", {
            type: "button",
            onClick: f,
            disabled: s,
            className: "btn",
            "data-variant": "gradient",
            "data-size": "lg",
            children: r ? i.jsxs(i.Fragment, {
              children: [
                i.jsx("div", {
                  className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                }),
                "Processing"
              ]
            }) : i.jsxs(i.Fragment, {
              children: [
                i.jsx("span", {
                  className: "icon-chip",
                  children: i.jsx(Vg, {
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
  function xm({ type: s, message: r }) {
    const d = s === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return i.jsx("div", {
      className: `${d} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: r
    });
  }
  const Rm = "floeditor-theme", si = () => typeof window < "u" && typeof document < "u", Ky = () => {
    if (!si()) return "auto";
    const s = window.localStorage.getItem(Rm);
    return s === "light" || s === "dark" || s === "auto" ? s : "auto";
  };
  function Jy() {
    const [s, r] = se.useState(Ky), [d, f] = se.useState("light");
    return se.useEffect(() => {
      if (!si()) return;
      const g = window.matchMedia("(prefers-color-scheme: dark)"), m = () => f(g.matches ? "dark" : "light");
      return m(), g.addEventListener("change", m), () => {
        g.removeEventListener("change", m);
      };
    }, []), se.useEffect(() => {
      if (!si()) return;
      const g = document.documentElement;
      (s === "auto" ? d : s) === "dark" ? (g.classList.add("dark"), g.style.colorScheme = "dark") : (g.classList.remove("dark"), g.style.colorScheme = "light");
    }, [
      s,
      d
    ]), {
      theme: s,
      resolvedTheme: s === "auto" ? d : s,
      setTheme: (g) => {
        r(g), si() && window.localStorage.setItem(Rm, g);
      }
    };
  }
  const Sm = [
    {
      value: "auto",
      label: "Auto",
      icon: sy
    },
    {
      value: "light",
      label: "Light",
      icon: jy
    },
    {
      value: "dark",
      label: "Dark",
      icon: fy
    }
  ];
  function $y() {
    var _a;
    const { theme: s, setTheme: r } = Jy(), d = ((_a = Sm.find((f) => f.value === s)) == null ? void 0 : _a.label) ?? "Auto";
    return i.jsxs("div", {
      className: "w-full rounded-2xl border border-primary/20 bg-background/80 p-3 shadow-sm shadow-primary/10 backdrop-blur-md",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-primary/80",
          children: [
            i.jsx("span", {
              children: "Theme"
            }),
            i.jsx("span", {
              className: "font-semibold tracking-tight text-foreground/70",
              children: d
            })
          ]
        }),
        i.jsx("div", {
          className: "mt-2 grid grid-cols-3 gap-2",
          children: Sm.map(({ value: f, label: b, icon: x }) => {
            const g = s === f;
            return i.jsxs("button", {
              type: "button",
              onClick: () => r(f),
              "aria-pressed": g,
              "aria-label": `Switch theme to ${b}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": g,
              children: [
                i.jsx(x, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                i.jsx("span", {
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
  function Fy(s) {
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
      let x = "[";
      b > 0 && (x += Xs(s[0]));
      for (let g = 1; g < b; g++) x += ", " + Xs(s[g]);
      return x += "]", x;
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
  function Vs(s, r) {
    return s = s >>> 0, Hm().subarray(s / 4, s / 4 + r);
  }
  function zt(s, r) {
    return s = s >>> 0, Qa().subarray(s / 1, s / 1 + r);
  }
  let ta = null;
  function Zt() {
    return (ta === null || ta.buffer.detached === true || ta.buffer.detached === void 0 && ta.buffer !== M.memory.buffer) && (ta = new DataView(M.memory.buffer)), ta;
  }
  let Xn = null;
  function Hm() {
    return (Xn === null || Xn.byteLength === 0) && (Xn = new Float32Array(M.memory.buffer)), Xn;
  }
  function Xa(s, r) {
    return s = s >>> 0, Iy(s, r);
  }
  let Qn = null;
  function Qa() {
    return (Qn === null || Qn.byteLength === 0) && (Qn = new Uint8Array(M.memory.buffer)), Qn;
  }
  function Gn(s, r) {
    try {
      return s.apply(this, r);
    } catch (d) {
      const f = Fy(d);
      M.__wbindgen_exn_store(f);
    }
  }
  function At(s) {
    return s == null;
  }
  function Qe(s, r) {
    const d = r(s.length * 1, 1) >>> 0;
    return Qa().set(s, d / 1), oe = s.length, d;
  }
  function Ks(s, r) {
    const d = r(s.length * 4, 4) >>> 0;
    return Hm().set(s, d / 4), oe = s.length, d;
  }
  function la(s, r, d) {
    if (d === void 0) {
      const m = kn.encode(s), _ = r(m.length, 1) >>> 0;
      return Qa().subarray(_, _ + m.length).set(m), oe = m.length, _;
    }
    let f = s.length, b = r(f, 1) >>> 0;
    const x = Qa();
    let g = 0;
    for (; g < f; g++) {
      const m = s.charCodeAt(g);
      if (m > 127) break;
      x[b + g] = m;
    }
    if (g !== f) {
      g !== 0 && (s = s.slice(g)), b = d(b, f, f = g + s.length * 3, 1) >>> 0;
      const m = Qa().subarray(b + g, b + f), _ = kn.encodeInto(s, m);
      g += _.written, b = d(b, f, g, 1) >>> 0;
    }
    return oe = g, b;
  }
  function je(s) {
    const r = M.__wbindgen_externrefs.get(s);
    return M.__externref_table_dealloc(s), r;
  }
  let ri = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  ri.decode();
  const Wy = 2146435072;
  let qs = 0;
  function Iy(s, r) {
    return qs += r, qs >= Wy && (ri = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), ri.decode(), qs = r), ri.decode(Qa().subarray(s, s + r));
  }
  const kn = new TextEncoder();
  "encodeInto" in kn || (kn.encodeInto = function(s, r) {
    const d = kn.encode(s);
    return r.set(d), {
      read: s.length,
      written: d.length
    };
  });
  let oe = 0;
  const jm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_audioinfo_free(s >>> 0, 1)), Nm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_wasmstreamingdecoder_free(s >>> 0, 1));
  class Za {
    static __wrap(r) {
      r = r >>> 0;
      const d = Object.create(Za.prototype);
      return d.__wbg_ptr = r, jm.register(d, d.__wbg_ptr, d), d;
    }
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, jm.unregister(this), r;
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
  Symbol.dispose && (Za.prototype[Symbol.dispose] = Za.prototype.free);
  class Qs {
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Nm.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      M.__wbg_wasmstreamingdecoder_free(r, 0);
    }
    next_frame() {
      const r = M.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (r[2]) throw je(r[1]);
      return je(r[0]);
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
      if (r[3]) throw je(r[2]);
      var d = Vs(r[0], r[1]).slice();
      return M.__wbindgen_free(r[0], r[1] * 4, 4), d;
    }
    current_frame_index() {
      return M.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const r = M.wasmstreamingdecoder_new();
      return this.__wbg_ptr = r >>> 0, Nm.register(this, this.__wbg_ptr, this), this;
    }
    feed(r) {
      const d = Qe(r, M.__wbindgen_malloc), f = oe, b = M.wasmstreamingdecoder_feed(this.__wbg_ptr, d, f);
      if (b[2]) throw je(b[1]);
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
      if (r[2]) throw je(r[1]);
      return je(r[0]);
    }
    is_ready() {
      return M.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return M.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (Qs.prototype[Symbol.dispose] = Qs.prototype.free);
  function Py(s, r, d) {
    var f = At(s) ? 0 : la(s, M.__wbindgen_malloc, M.__wbindgen_realloc), b = oe, x = At(r) ? 0 : la(r, M.__wbindgen_malloc, M.__wbindgen_realloc), g = oe, m = At(d) ? 0 : la(d, M.__wbindgen_malloc, M.__wbindgen_realloc), _ = oe;
    const v = M.create_metadata(f, b, x, g, m, _);
    if (v[3]) throw je(v[2]);
    var T = zt(v[0], v[1]).slice();
    return M.__wbindgen_free(v[0], v[1] * 1, 1), T;
  }
  function Bm(s) {
    const r = M.create_metadata_from_object(s);
    if (r[3]) throw je(r[2]);
    var d = zt(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), d;
  }
  function ep(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.decode(r, d);
    if (f[3]) throw je(f[2]);
    var b = Vs(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 4, 4), b;
  }
  function tp(s, r, d, f, b) {
    const x = Ks(s, M.__wbindgen_malloc), g = oe;
    var m = At(b) ? 0 : Qe(b, M.__wbindgen_malloc), _ = oe;
    const v = M.encode(x, g, r, d, f, m, _);
    if (v[3]) throw je(v[2]);
    var T = zt(v[0], v[1]).slice();
    return M.__wbindgen_free(v[0], v[1] * 1, 1), T;
  }
  function lp(s, r, d, f, b, x) {
    const g = Ks(s, M.__wbindgen_malloc), m = oe;
    var _ = At(x) ? 0 : Qe(x, M.__wbindgen_malloc), v = oe;
    const T = M.encode_lossy(g, m, r, d, f, b, _, v);
    if (T[3]) throw je(T[2]);
    var C = zt(T[0], T[1]).slice();
    return M.__wbindgen_free(T[0], T[1] * 1, 1), C;
  }
  function ap(s, r, d, f, b, x) {
    const g = Ks(s, M.__wbindgen_malloc), m = oe;
    var _ = At(x) ? 0 : Qe(x, M.__wbindgen_malloc), v = oe;
    const T = M.encode_with_bitrate(g, m, r, d, f, b, _, v);
    if (T[3]) throw je(T[2]);
    var C = zt(T[0], T[1]).slice();
    return M.__wbindgen_free(T[0], T[1] * 1, 1), C;
  }
  function np(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.get_cover_art(r, d);
    if (f[2]) throw je(f[1]);
    return je(f[0]);
  }
  function Js(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.get_metadata(r, d);
    if (f[2]) throw je(f[1]);
    return je(f[0]);
  }
  function up(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.get_metadata_bytes(r, d);
    if (f[3]) throw je(f[2]);
    var b = zt(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), b;
  }
  function ip(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.get_section_markers(r, d);
    if (f[2]) throw je(f[1]);
    return je(f[0]);
  }
  function cp(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.get_synced_lyrics(r, d);
    if (f[2]) throw je(f[1]);
    return je(f[0]);
  }
  function sp(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.get_waveform_data(r, d);
    if (f[2]) throw je(f[1]);
    return je(f[0]);
  }
  function rp(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe;
    return M.has_metadata(r, d) !== 0;
  }
  function qm(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.info(r, d);
    if (f[2]) throw je(f[1]);
    return Za.__wrap(f[0]);
  }
  function fp(s, r) {
    const d = Qe(s, M.__wbindgen_malloc), f = oe, b = M.set_metadata(d, f, r);
    if (b[3]) throw je(b[2]);
    var x = zt(b[0], b[1]).slice();
    return M.__wbindgen_free(b[0], b[1] * 1, 1), x;
  }
  function op(s, r, d) {
    var f = At(s) ? 0 : Qe(s, M.__wbindgen_malloc), b = oe;
    const x = la(r, M.__wbindgen_malloc, M.__wbindgen_realloc), g = oe, m = M.set_metadata_field(f, b, x, g, d);
    if (m[3]) throw je(m[2]);
    var _ = zt(m[0], m[1]).slice();
    return M.__wbindgen_free(m[0], m[1] * 1, 1), _;
  }
  function dp(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.strip_metadata(r, d);
    if (f[3]) throw je(f[2]);
    var b = zt(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), b;
  }
  function Lm(s, r) {
    const d = Qe(s, M.__wbindgen_malloc), f = oe, b = Qe(r, M.__wbindgen_malloc), x = oe, g = M.update_metadata(d, f, b, x);
    if (g[3]) throw je(g[2]);
    var m = zt(g[0], g[1]).slice();
    return M.__wbindgen_free(g[0], g[1] * 1, 1), m;
  }
  function Ym(s) {
    const r = Qe(s, M.__wbindgen_malloc), d = oe, f = M.validate(r, d);
    if (f[2]) throw je(f[1]);
    return f[0] !== 0;
  }
  function mp() {
    let s, r;
    try {
      const d = M.version();
      return s = d[0], r = d[1], Xa(d[0], d[1]);
    } finally {
      M.__wbindgen_free(s, r, 1);
    }
  }
  const hp = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function gp(s, r) {
    if (typeof Response == "function" && s instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(s, r);
      } catch (f) {
        if (s.ok && hp.has(s.type) && s.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", f);
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
  function Gm() {
    const s = {};
    return s.wbg = {}, s.wbg.__wbg_Error_52673b7de5a0ca89 = function(r, d) {
      return Error(Xa(r, d));
    }, s.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(r) {
      return Number(r);
    }, s.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(r, d) {
      const f = String(d), b = la(f, M.__wbindgen_malloc, M.__wbindgen_realloc), x = oe;
      Zt().setInt32(r + 4, x, true), Zt().setInt32(r + 0, b, true);
    }, s.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(r, d) {
      const f = d, b = typeof f == "bigint" ? f : void 0;
      Zt().setBigInt64(r + 8, At(b) ? BigInt(0) : b, true), Zt().setInt32(r + 0, !At(b), true);
    }, s.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(r) {
      const d = r, f = typeof d == "boolean" ? d : void 0;
      return At(f) ? 16777215 : f ? 1 : 0;
    }, s.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(r, d) {
      const f = Xs(d), b = la(f, M.__wbindgen_malloc, M.__wbindgen_realloc), x = oe;
      Zt().setInt32(r + 4, x, true), Zt().setInt32(r + 0, b, true);
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
      Zt().setFloat64(r + 8, At(b) ? 0 : b, true), Zt().setInt32(r + 0, !At(b), true);
    }, s.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(r, d) {
      const f = d, b = typeof f == "string" ? f : void 0;
      var x = At(b) ? 0 : la(b, M.__wbindgen_malloc, M.__wbindgen_realloc), g = oe;
      Zt().setInt32(r + 4, g, true), Zt().setInt32(r + 0, x, true);
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
      return new Uint8Array(zt(r, d));
    }, s.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(r) {
      return new Float32Array(r >>> 0);
    }, s.wbg.__wbg_next_138a17bbf04e926c = function(r) {
      return r.next;
    }, s.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Gn(function(r) {
        return r.next();
      }, arguments);
    }, s.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(r, d, f) {
      Uint8Array.prototype.set.call(zt(r, d), f);
    }, s.wbg.__wbg_set_3f1d0b984ed272ed = function(r, d, f) {
      r[d] = f;
    }, s.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Gn(function(r, d, f) {
        return Reflect.set(r, d, f);
      }, arguments);
    }, s.wbg.__wbg_set_7df433eea03a5c14 = function(r, d, f) {
      r[d >>> 0] = f;
    }, s.wbg.__wbg_set_cb0e657d1901c8d8 = function(r, d, f) {
      r.set(Vs(d, f));
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
      return zt(r, d);
    }, s.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(r) {
      return r;
    }, s.wbg.__wbindgen_init_externref_table = function() {
      const r = M.__wbindgen_externrefs, d = r.grow(4);
      r.set(0, void 0), r.set(d + 0, void 0), r.set(d + 1, null), r.set(d + 2, true), r.set(d + 3, false);
    }, s;
  }
  function Xm(s, r) {
    return M = s.exports, fi.__wbindgen_wasm_module = r, ta = null, Xn = null, Qn = null, M.__wbindgen_start(), M;
  }
  function yp(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module: s } = s : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const r = Gm();
    s instanceof WebAssembly.Module || (s = new WebAssembly.Module(s));
    const d = new WebAssembly.Instance(s, r);
    return Xm(d, s);
  }
  async function fi(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module_or_path: s } = s : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof s > "u" && (s = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const r = Gm();
    (typeof s == "string" || typeof Request == "function" && s instanceof Request || typeof URL == "function" && s instanceof URL) && (s = fetch(s));
    const { instance: d, module: f } = await gp(await s, r);
    return Xm(d, f);
  }
  const Am = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Za,
    WasmStreamingDecoder: Qs,
    create_metadata: Py,
    create_metadata_from_object: Bm,
    decode: ep,
    default: fi,
    encode: tp,
    encode_lossy: lp,
    encode_with_bitrate: ap,
    get_cover_art: np,
    get_metadata: Js,
    get_metadata_bytes: up,
    get_section_markers: ip,
    get_synced_lyrics: cp,
    get_waveform_data: sp,
    has_metadata: rp,
    info: qm,
    initSync: yp,
    set_metadata: fp,
    set_metadata_field: op,
    strip_metadata: dp,
    update_metadata: Lm,
    validate: Ym,
    version: mp
  }, Symbol.toStringTag, {
    value: "Module"
  })), pp = {
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
  function bp() {
    const [s, r] = se.useState(false), [d, f] = se.useState(false);
    return se.useEffect(() => {
      (async () => {
        try {
          await fi(), f(true);
        } catch (T) {
          console.error("Failed to initialize flo\u2122 WASM:", T);
        }
      })();
    }, []), {
      isProcessing: s,
      isInitialized: d,
      loadMetadata: async (v) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const T = await v.arrayBuffer(), C = new Uint8Array(T);
          return Js(C);
        } catch (T) {
          return console.error("Failed to load flo\u2122 metadata:", T), null;
        }
      },
      updateMetadata: async (v, T) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        r(true);
        try {
          const C = Bm(T), G = Lm(v, C);
          return r(false), G;
        } catch (C) {
          return console.error("Failed to update flo\u2122 metadata:", C), r(false), null;
        }
      },
      downloadFile: (v, T) => {
        const C = new Blob([
          v
        ], {
          type: "application/octet-stream"
        }), G = URL.createObjectURL(C), P = document.createElement("a");
        P.href = G, P.download = T, P.click(), URL.revokeObjectURL(G);
      },
      validateFile: (v) => d ? Ym(v) : false,
      resetMetadata: () => ({
        ...pp
      })
    };
  }
  function _p() {
    const [s, r] = se.useState(false);
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
          const b = await f.arrayBuffer(), x = new Uint8Array(b), g = Js(x), m = qm(x), _ = m ? {
            sample_rate: m.sample_rate,
            channels: m.channels,
            bit_depth: m.bit_depth,
            total_frames: Number(m.total_frames),
            duration_secs: m.duration_secs,
            file_size: m.file_size,
            compression_ratio: m.compression_ratio,
            crc_valid: m.crc_valid,
            is_lossy: m.is_lossy,
            lossy_quality: m.lossy_quality,
            version: m.version
          } : null;
          return {
            metadata: g,
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
  const Ls = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, zm = {
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
  function wm(s, r, d, f = 50) {
    const b = Math.floor(r / f), x = Math.floor(s.length / (b * d)), g = [];
    for (let m = 0; m < x; m++) for (let _ = 0; _ < d; _++) {
      let v = 0;
      for (let T = 0; T < b; T++) {
        const C = m * b * d + T * d + _;
        C < s.length && (v = Math.max(v, Math.abs(s[C])));
      }
      g.push(v);
    }
    return {
      peaks_per_second: f,
      channels: d,
      peaks: g
    };
  }
  function vp({ waveform: s, onRegenerate: r }) {
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Audio"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Audio Waveform"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Pre-generated visualization data for use by music players and other tools"
                })
              ]
            }),
            r && i.jsx("button", {
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
        i.jsx("div", {
          children: s && s.peaks && s.peaks.length > 0 ? i.jsx(xp, {
            waveform: s
          }) : i.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              i.jsx(ka, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        i.jsx(Sp, {
          waveform: s
        })
      ]
    });
  }
  function xp({ waveform: s, width: r = 600, height: d = 80 }) {
    const { peaks: f, channels: b } = s, x = Math.floor(f.length / b);
    function g(_) {
      return Array.from({
        length: x
      }, (v, T) => {
        const C = Math.floor(T / (x - 1) * (r - 2)) + 1, G = Math.floor((1 - (f[T * b + _] || 0)) * (d - 10)) + 5;
        return `${C},${G}`;
      }).join(" ");
    }
    function m() {
      const _ = Array.from({
        length: x
      }, (T, C) => {
        const G = Math.floor(C / (x - 1) * (r - 2)) + 1, P = f[C * b] || 0, pe = Math.floor((1 - P) * (d / 2 - 4)) + d / 2;
        return `${G},${pe}`;
      }), v = Array.from({
        length: x
      }, (T, C) => {
        const G = x - 1 - C, P = Math.floor(G / (x - 1) * (r - 2)) + 1, pe = f[G * b] || 0, _e = Math.floor((1 + pe) * (d / 2 - 4)) + 4;
        return `${P},${_e}`;
      });
      return [
        ..._,
        ...v,
        _[0]
      ].join(" ");
    }
    return i.jsx("div", {
      style: {
        width: r,
        maxWidth: "100%"
      },
      className: "overflow-x-auto",
      children: i.jsxs("svg", {
        className: "block rounded border bg-background shadow",
        width: r,
        height: d,
        viewBox: `0 0 ${r} ${d}`,
        "aria-label": "Waveform",
        role: "img",
        children: [
          b === 1 && i.jsx("polygon", {
            points: m(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          i.jsx("polyline", {
            points: g(0),
            stroke: "#db2777",
            strokeWidth: b > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          b > 1 && i.jsx("polyline", {
            points: g(1),
            stroke: "#3b82f6",
            strokeWidth: "1.5",
            fill: "none"
          }),
          i.jsx("defs", {
            children: i.jsxs("linearGradient", {
              id: "wf-gradient",
              x1: "0",
              x2: "0",
              y1: "0",
              y2: "1",
              children: [
                i.jsx("stop", {
                  offset: "0%",
                  stopColor: "#db2777",
                  stopOpacity: "0.75"
                }),
                i.jsx("stop", {
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
  function Sp({ waveform: s }) {
    return s ? i.jsxs("div", {
      className: "mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground",
      children: [
        i.jsxs("span", {
          children: [
            i.jsx("strong", {
              children: "Channels:"
            }),
            " ",
            s.channels === 2 ? "Stereo" : "Mono"
          ]
        }),
        i.jsxs("span", {
          children: [
            i.jsx("strong", {
              children: "Peaks/sec:"
            }),
            " ",
            s.peaks_per_second
          ]
        }),
        i.jsxs("span", {
          children: [
            i.jsx("strong", {
              children: "Total Points:"
            }),
            " ",
            s.peaks.length
          ]
        })
      ]
    }) : null;
  }
  function jp({ userUrls: s = [], onUserUrlsChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          description: "",
          url: ""
        }
      ]);
    }, f = (x, g, m) => {
      const _ = [
        ...s
      ];
      _[x] = {
        ..._[x],
        [g]: m
      }, r(_);
    }, b = (x) => {
      r(s.filter((g, m) => m !== x));
    };
    return i.jsxs("div", {
      className: "space-y-3",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2",
                  children: "User URLs"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-0.5",
                  children: "Store custom URLs with descriptions (advanced use)"
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add URL"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-2",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-4",
            children: [
              i.jsx(ny, {
                className: "h-8 w-8 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No custom URLs added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add URL" to start'
              })
            ]
          }) : s.map((x, g) => i.jsxs("div", {
            className: "flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3",
            children: [
              i.jsx("input", {
                type: "text",
                value: x.description,
                onChange: (m) => f(g, "description", m.target.value),
                placeholder: "Label / Description",
                className: "w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 100
              }),
              i.jsx("input", {
                type: "url",
                value: x.url,
                onChange: (m) => f(g, "url", m.target.value),
                placeholder: "https://example.com",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 512
              }),
              i.jsx("button", {
                onClick: () => b(g),
                type: "button",
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, g))
        })
      ]
    });
  }
  function Np({ involvedPeople: s = [], onInvolvedPeopleChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          role: "",
          name: ""
        }
      ]);
    }, f = (x, g, m) => {
      const _ = [
        ...s
      ];
      _[x] = {
        ..._[x],
        [g]: m
      }, r(_);
    }, b = (x) => {
      r(s.filter((g, m) => m !== x));
    };
    return i.jsxs("div", {
      className: "space-y-3 mt-8",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between mb-2",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 flex items-center gap-2",
                  children: "Additional Credits"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-0.5",
                  children: "Credit any other contributors: engineers, producers, artwork, etc."
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Person"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-2",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-4",
            children: [
              i.jsx(Ty, {
                className: "h-8 w-8 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No additional credits added"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Person" to start'
              })
            ]
          }) : s.map((x, g) => i.jsxs("div", {
            className: "flex items-center gap-3 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-3",
            children: [
              i.jsx("input", {
                type: "text",
                value: x.role,
                onChange: (m) => f(g, "role", m.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-44 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              i.jsx("input", {
                type: "text",
                value: x.name,
                onChange: (m) => f(g, "name", m.target.value),
                placeholder: "Name",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 128
              }),
              i.jsx("button", {
                onClick: () => b(g),
                type: "button",
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, g))
        })
      ]
    });
  }
  const Qm = [
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
  ], km = [
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
  ], Zm = [
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
  ], Vm = [
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
  ], Ap = [
    {
      name: "Structure",
      fields: Qm
    },
    {
      name: "Sorting & Ownership",
      fields: km
    },
    {
      name: "Links",
      fields: Zm
    },
    {
      name: "Timing & Broadcast",
      fields: Vm
    }
  ], Tm = [
    ...Qm,
    ...km,
    ...Zm,
    ...Vm
  ];
  function zp({ metadata: s, onMetadataChange: r }) {
    const [d, f] = se.useState(false), b = Tm.filter(({ key: m }) => {
      const _ = s[m];
      return typeof _ == "string" && _.trim().length > 0 || typeof _ == "number" && !isNaN(_);
    }).length, x = Tm.length, g = ({ key: m, label: _, placeholder: v, type: T, colSpan: C }) => {
      const G = s[m];
      return G != null && typeof G != "string" && typeof G != "number" ? null : i.jsxs("div", {
        className: `space-y-2 ${C === "full" ? "md:col-span-2" : ""}`,
        children: [
          i.jsx("label", {
            htmlFor: m,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: _
          }),
          i.jsx("input", {
            id: m,
            value: G ?? "",
            onChange: (P) => r(m, T === "number" ? P.target.value === "" ? void 0 : parseInt(P.target.value) || 0 : P.target.value),
            type: T ?? "text",
            placeholder: v,
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, m);
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Advanced"
                }),
                i.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Advanced Tags"
                })
              ]
            }),
            i.jsxs("div", {
              className: "text-sm bg-primary/10 border border-primary/30 rounded-full px-4 py-1 font-medium text-primary-foreground/80",
              children: [
                b,
                " / ",
                x,
                " fields filled"
              ]
            })
          ]
        }),
        i.jsx("button", {
          type: "button",
          className: "flex items-center w-full gap-2 text-lg font-semibold mb-4 select-none",
          onClick: () => f((m) => !m),
          "aria-expanded": d,
          children: i.jsx("span", {
            className: "ml-auto",
            children: d ? i.jsx(Om, {
              className: "h-5 w-5"
            }) : i.jsx(Um, {
              className: "h-5 w-5"
            })
          })
        }),
        d && i.jsxs("div", {
          className: "space-y-8",
          children: [
            Ap.map(({ name: m, fields: _ }) => i.jsxs("div", {
              className: "space-y-4",
              children: [
                i.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: m
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: _.map(g)
                })
              ]
            }, m)),
            i.jsx(jp, {
              userUrls: s.user_urls ?? [],
              onUserUrlsChange: (m) => r("user_urls", m)
            }),
            i.jsx(Np, {
              involvedPeople: (s.involved_people ?? []).map(([m, _]) => ({
                role: m,
                name: _
              })),
              onInvolvedPeopleChange: (m) => r("involved_people", m.map(({ role: _, name: v }) => [
                _,
                v
              ]))
            }),
            i.jsx("span", {
              children: i.jsx("hr", {})
            }),
            i.jsx("p", {
              className: "text-xs text-muted-foreground mt-4",
              children: "These fields are optional and rarely used; fill in only if needed for advanced use cases, library sorting, or publishing metadata."
            })
          ]
        })
      ]
    });
  }
  const Ys = [
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
  function wp(s) {
    return typeof s == "string" && s.trim().length > 0 || typeof s == "number" ? s : i.jsx("span", {
      className: "text-muted-foreground",
      children: "\u2013"
    });
  }
  function Tp({ metadata: s }) {
    const r = Ys.length, d = Ys.filter(({ key: f }) => {
      const b = s[f];
      return typeof b == "string" && b.trim().length > 0 || typeof b == "number" && b !== void 0 && b !== null;
    }).length;
    return i.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            i.jsxs("div", {
              children: [
                i.jsxs("p", {
                  className: "micro-label flex items-center gap-1",
                  children: [
                    i.jsx(ty, {
                      className: "h-3.5 w-3.5 icon-accent -ml-0.5"
                    }),
                    "Technical"
                  ]
                }),
                i.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "File & Encoding Info"
                })
              ]
            }),
            i.jsxs("div", {
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
        i.jsx("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
          children: Ys.map(({ key: f, label: b }) => i.jsxs("div", {
            className: "space-y-1",
            children: [
              i.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: b
              }),
              i.jsx("div", {
                className: "font-mono text-sm bg-primary/5 rounded px-2 py-1 border",
                children: wp(s[f])
              })
            ]
          }, f))
        })
      ]
    });
  }
  function Ep({ remixChain: s = [], onRemixChainChange: r }) {
    const d = () => {
      r([
        ...s,
        {
          title: "",
          artist: "",
          year: void 0,
          isrc: "",
          relationship: ""
        }
      ]);
    }, f = (x, g, m) => {
      const _ = [
        ...s
      ];
      _[x] = {
        ..._[x],
        [g]: m
      }, r(_);
    }, b = (x) => {
      r(s.filter((g, m) => m !== x));
    };
    return i.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        i.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            i.jsxs("div", {
              children: [
                i.jsx("p", {
                  className: "micro-label",
                  children: "Lineage"
                }),
                i.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Remix/Chain History"
                }),
                i.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Credits for source originals, remixes, covers, samples, etc."
                })
              ]
            }),
            i.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                i.jsx(it, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Entry"
              ]
            })
          ]
        }),
        i.jsx("div", {
          className: "space-y-3",
          children: s.length === 0 ? i.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              i.jsx(_y, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              i.jsx("p", {
                className: "text-sm",
                children: "No remix/covers/lineage set yet"
              }),
              i.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Entry" to start'
              })
            ]
          }) : s.map((x, g) => i.jsxs("div", {
            className: "flex flex-col sm:flex-row sm:items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              i.jsx("input", {
                type: "text",
                value: x.title,
                onChange: (m) => f(g, "title", m.target.value),
                placeholder: "Title",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 100
              }),
              i.jsx("input", {
                type: "text",
                value: x.artist,
                onChange: (m) => f(g, "artist", m.target.value),
                placeholder: "Artist",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 80
              }),
              i.jsx("input", {
                type: "number",
                value: x.year ?? "",
                onChange: (m) => f(g, "year", m.target.value === "" ? void 0 : parseInt(m.target.value)),
                placeholder: "Year",
                className: "w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                min: 0
              }),
              i.jsx("input", {
                type: "text",
                value: x.isrc ?? "",
                onChange: (m) => f(g, "isrc", m.target.value),
                placeholder: "ISRC",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 32
              }),
              i.jsx("input", {
                type: "text",
                value: x.relationship,
                onChange: (m) => f(g, "relationship", m.target.value),
                placeholder: "Relationship (remix/sample/cover)",
                className: "w-65 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 32
              }),
              i.jsx("button", {
                onClick: () => b(g),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: i.jsx(lt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, g))
        })
      ]
    });
  }
  function Mp() {
    var _a, _b, _c;
    const [s, r] = se.useState(null), [, d] = se.useState(""), [f, b] = se.useState(false), [x, g] = se.useState(null), [m, _] = se.useState(null), [v, T] = se.useState(""), [C, G] = se.useState(null), { isProcessing: P, updateMetadata: pe, downloadFile: _e, resetMetadata: Je } = bp(), [Me, ke] = se.useState(null), [K, ve] = se.useState(() => ({
      ...zm
    })), [$e, X] = se.useState(null), [q, Z] = se.useState(() => ({
      ...Ls
    })), le = se.useRef(""), { isLoading: Q, loadFloFile: ee } = _p();
    se.useEffect(() => {
      typeof window < "u" && f && Cs(() => import("./eruda-DuoByM6T.js").then((R) => R.e), [], import.meta.url).then((R) => {
        R.default.init(), R.default.show();
      });
    }, [
      f
    ]);
    const Ze = [
      {
        label: "Tag fields set",
        value: Object.values(K).filter((R) => typeof R == "string" && R.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: q.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: $e ? "Attached" : "Not added",
        helper: $e ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ], ct = se.useCallback((R) => `${R.name}:${R.lastModified}:${R.size}`, []), Fe = se.useCallback(async () => {
      if (!(!C || !Me)) try {
        const y = await (await Cs(() => Promise.resolve().then(() => Am), void 0, import.meta.url)).decode(C), w = wm(y, Me.sample_rate, Me.channels);
        ve((H) => ({
          ...H,
          waveform_data: w
        })), _("Waveform re-generated from audio data.");
      } catch {
        g("Could not re-generate waveform.");
      }
    }, [
      C,
      Me
    ]), O = se.useCallback(async (R) => {
      var _a2, _b2, _c2;
      if (!R) {
        le.current = "", r(null), G(null), ve(Je()), X(null), Z({
          ...Ls
        }), d(""), T(""), _(null), g(null), ke(null);
        return;
      }
      if (!R.name.toLowerCase().endsWith(".flo")) {
        g("Please upload a valid .flo file"), _(null);
        return;
      }
      const w = ct(R);
      le.current = w, r(R), g(null), _("File loaded. Reading embedded tags..."), T("Scanning embedded metadata..."), ve(Je()), X(null), Z({
        ...Ls
      }), d(""), ke(null);
      try {
        const { metadata: H, audioInfo: L, error: F } = await ee(R);
        if (le.current !== w) return;
        if (F) {
          g(F), _(null);
          return;
        }
        const ae = await R.arrayBuffer(), fe = new Uint8Array(ae);
        G(fe), ke(L || null);
        let we = H ? {
          ...H
        } : {
          ...zm
        };
        if ((!we.waveform_data || !((_a2 = we.waveform_data.peaks) == null ? void 0 : _a2.length)) && L) try {
          const Bt = await (await Cs(() => Promise.resolve().then(() => Am), void 0, import.meta.url)).decode(fe);
          we.waveform_data = wm(Bt, L.sample_rate, L.channels);
        } catch {
        }
        if (ve(we), we.pictures) {
          const at = we.pictures.find((Bt) => Bt.picture_type === "cover_front");
          if (at) {
            const Bt = new Blob([
              at.data
            ], {
              type: at.mime_type
            });
            X(URL.createObjectURL(Bt));
          }
        }
        if (we.synced_lyrics && we.synced_lyrics.length > 0) {
          const at = we.synced_lyrics[0];
          Z({
            type: 1,
            timestampFormat: 2,
            language: at.language || "eng",
            description: at.description || "Synced Lyrics",
            text: at.lines.map((Bt) => [
              Bt.text,
              Bt.timestamp_ms
            ])
          });
        }
        const Ee = Object.values(we || {}).filter((at) => typeof at == "string" && at.trim().length > 0).length, Rl = ((_c2 = (_b2 = we == null ? void 0 : we.synced_lyrics) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.lines.length) ?? 0, aa = Ee > 0 || !!L || Rl > 0;
        T(Ee > 0 ? `Imported ${Ee} embedded tag${Ee === 1 ? "" : "s"}.` : "No embedded tags found."), _(aa ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (H) {
        if (le.current !== w) return;
        console.error("Failed to parse metadata", H), T(""), g("Loaded file, but could not read embedded metadata automatically."), _(null), ke(null);
      }
    }, [
      ee,
      ct,
      Je
    ]), B = (R, y) => {
      ve((w) => ({
        ...w,
        [R]: y
      }));
    };
    function $(R, y) {
      ve((w) => {
        var _a2, _b2, _c2;
        return {
          ...w,
          popularimeter: {
            email: R === "email" ? y : ((_a2 = w.popularimeter) == null ? void 0 : _a2.email) ?? "",
            rating: R === "rating" ? y : ((_b2 = w.popularimeter) == null ? void 0 : _b2.rating) ?? 0,
            play_count: R === "play_count" ? y : ((_c2 = w.popularimeter) == null ? void 0 : _c2.play_count) ?? 0
          }
        };
      });
    }
    const be = async () => {
      var _a2, _b2;
      if (!s || !C) return;
      g(null), _(null);
      const R = await pe(C, K);
      if (R) {
        const y = (_a2 = K.artist) == null ? void 0 : _a2.trim(), w = (_b2 = K.title) == null ? void 0 : _b2.trim();
        let H;
        y && w ? H = `${y} - ${w}.flo` : w ? H = `${w}.flo` : H = s.name.endsWith(".flo") ? s.name : `${s.name.replace(/\.[^/.]+$/, "")}.flo`, _e(R, H), _("File processed and downloaded successfully!");
      } else g("Failed to process file");
    };
    return i.jsxs("div", {
      className: "relative min-h-screen overflow-hidden px-4 py-10 sm:px-6",
      children: [
        i.jsx("div", {
          className: "pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        i.jsx("div", {
          className: "pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[140px] opacity-40",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        i.jsxs("main", {
          className: "relative mx-auto flex max-w-5xl flex-col gap-6",
          children: [
            i.jsxs("section", {
              className: "glass-panel p-6 sm:p-8 space-y-6",
              children: [
                i.jsxs("div", {
                  className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                  children: [
                    i.jsx("div", {
                      className: "space-y-4 lg:max-w-2xl",
                      children: i.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          i.jsx("div", {
                            className: "rounded-full bg-primary/12 p-3 text-primary shadow-inner shadow-primary/30",
                            children: i.jsx(ka, {
                              className: "h-6 w-6 icon-accent"
                            })
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h1", {
                                className: "text-3xl font-semibold hero-title",
                                children: i.jsx("span", {
                                  className: "gradient-text inline-block",
                                  children: "floEditor"
                                })
                              }),
                              i.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Tag flo\u2122 files, embed art, and sync lyrics without leaving your browser."
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    i.jsxs("div", {
                      className: "flex w-full flex-col gap-4 lg:max-w-xs",
                      children: [
                        i.jsxs("div", {
                          className: "rounded-2xl border border-primary/25 bg-primary/5 p-4 text-right shadow-inner shadow-primary/10",
                          children: [
                            i.jsx("p", {
                              className: "micro-label justify-end text-primary/80",
                              children: "Current file"
                            }),
                            i.jsx("p", {
                              className: `text-2xl font-semibold ${s ? "text-primary" : "text-muted-foreground"}`,
                              children: s ? s.name : "No file loaded"
                            }),
                            i.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: s ? "Ready for metadata tweaks." : "Load a flo\u2122 to unlock controls."
                            })
                          ]
                        }),
                        i.jsxs("div", {
                          className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1",
                          children: [
                            i.jsx($y, {}),
                            i.jsxs("button", {
                              onClick: () => b(!f),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                i.jsx(Gg, {
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
                x && i.jsx(xm, {
                  type: "error",
                  message: x
                }),
                m && i.jsx(xm, {
                  type: "success",
                  message: m
                }),
                i.jsx(Oy, {
                  file: s,
                  onFileUpload: O,
                  isParsingMetadata: Q,
                  metadataSummary: v
                }),
                i.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: Ze.map(({ label: R, value: y, helper: w }) => i.jsxs("div", {
                    className: "relative overflow-hidden rounded-xl border px-4 py-3 text-sm text-white shadow-lg shadow-primary/30",
                    style: {
                      backgroundImage: "var(--stat-card-gradient, var(--themegradient-active))",
                      borderColor: "var(--stat-card-border, transparent)"
                    },
                    children: [
                      i.jsx("div", {
                        className: "pointer-events-none absolute inset-0 bg-black/10"
                      }),
                      i.jsxs("div", {
                        className: "relative space-y-1",
                        children: [
                          i.jsx("p", {
                            className: "text-xs font-semibold uppercase tracking-wide text-white/80",
                            children: R
                          }),
                          i.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: y
                          }),
                          i.jsx("p", {
                            className: "text-xs text-white/80",
                            children: w
                          })
                        ]
                      })
                    ]
                  }, R))
                })
              ]
            }),
            i.jsx(Tp, {
              metadata: K
            }),
            i.jsx(vp, {
              waveform: K.waveform_data,
              onRegenerate: C && Me ? Fe : void 0
            }),
            i.jsx(Dy, {
              metadata: K,
              onMetadataChange: B
            }),
            i.jsx(zp, {
              metadata: K,
              onMetadataChange: B
            }),
            i.jsx(Xy, {
              popularimeter: {
                email: ((_a = K.popularimeter) == null ? void 0 : _a.email) ?? "",
                rating: ((_b = K.popularimeter) == null ? void 0 : _b.rating) ?? 0,
                play_count: ((_c = K.popularimeter) == null ? void 0 : _c.play_count) ?? 0
              },
              onChange: $
            }),
            i.jsx(Ry, {
              pictures: K.pictures,
              onPicturesChange: (R) => ve({
                ...K,
                pictures: R
              }),
              coverVariants: K.cover_variants,
              onCoverVariantsChange: (R) => ve({
                ...K,
                cover_variants: R
              }),
              animatedCover: K.animated_cover,
              onAnimatedCoverChange: (R) => ve({
                ...K,
                animated_cover: R
              }),
              artistSignature: K.artist_signature,
              onArtistSignatureChange: (R) => ve({
                ...K,
                artist_signature: R
              })
            }),
            i.jsx(By, {
              syncedLyrics: K.synced_lyrics,
              onSyncedLyricsChange: (R) => B("synced_lyrics", R),
              unsyncedLyrics: Array.isArray(K.lyrics) ? K.lyrics.map((R) => R.text) : [],
              onUnsyncedLyricsChange: (R) => B("lyrics", R.map((y) => ({
                text: y
              })))
            }),
            i.jsx(Ly, {
              sectionMarkers: K.section_markers,
              onSectionMarkersChange: (R) => ve({
                ...K,
                section_markers: R
              })
            }),
            i.jsx(Yy, {
              bpmMap: K.bpm_map,
              onBpmMapChange: (R) => ve({
                ...K,
                bpm_map: R
              })
            }),
            i.jsx(Gy, {
              keyChanges: K.key_changes,
              onKeyChangesChange: (R) => B("key_changes", R)
            }),
            i.jsx(ky, {
              creatorNotes: K.creator_notes ?? [],
              onCreatorNotesChange: (R) => B("creator_notes", R)
            }),
            i.jsx(Ep, {
              remixChain: K.remix_chain ?? [],
              onRemixChainChange: (R) => B("remix_chain", R)
            }),
            i.jsx(Zy, {
              collaborationCredits: K.collaboration_credits ?? [],
              onCollaborationCreditsChange: (R) => B("collaboration_credits", R)
            }),
            i.jsx(Qy, {
              userText: K.user_text ?? [],
              onUserTextChange: (R) => B("user_text", R)
            }),
            i.jsx(Vy, {
              disabled: !s || P,
              isProcessing: P,
              fileName: s == null ? void 0 : s.name,
              onProcess: be
            })
          ]
        })
      ]
    });
  }
  wg.createRoot(document.getElementById("root")).render(i.jsx(_g.StrictMode, {
    children: i.jsx(Mp, {})
  }));
})();
export {
  __tla,
  Em as g
};

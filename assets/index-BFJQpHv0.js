let vm;
let __tla = (async () => {
  (function() {
    const c = document.createElement("link").relList;
    if (c && c.supports && c.supports("modulepreload")) return;
    for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) r(_);
    new MutationObserver((_) => {
      for (const E of _) if (E.type === "childList") for (const A of E.addedNodes) A.tagName === "LINK" && A.rel === "modulepreload" && r(A);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(_) {
      const E = {};
      return _.integrity && (E.integrity = _.integrity), _.referrerPolicy && (E.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? E.credentials = "include" : _.crossOrigin === "anonymous" ? E.credentials = "omit" : E.credentials = "same-origin", E;
    }
    function r(_) {
      if (_.ep) return;
      _.ep = true;
      const E = d(_);
      fetch(_.href, E);
    }
  })();
  vm = function(f) {
    return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
  };
  var wf = {
    exports: {}
  }, Bn = {};
  var Vd;
  function th() {
    if (Vd) return Bn;
    Vd = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(r, _, E) {
      var A = null;
      if (E !== void 0 && (A = "" + E), _.key !== void 0 && (A = "" + _.key), "key" in _) {
        E = {};
        for (var N in _) N !== "key" && (E[N] = _[N]);
      } else E = _;
      return _ = E.ref, {
        $$typeof: f,
        type: r,
        key: A,
        ref: _ !== void 0 ? _ : null,
        props: E
      };
    }
    return Bn.Fragment = c, Bn.jsx = d, Bn.jsxs = d, Bn;
  }
  var Kd;
  function eh() {
    return Kd || (Kd = 1, wf.exports = th()), wf.exports;
  }
  var o = eh(), Of = {
    exports: {}
  }, J = {};
  var Jd;
  function lh() {
    if (Jd) return J;
    Jd = 1;
    var f = /* @__PURE__ */ Symbol.for("react.transitional.element"), c = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), E = /* @__PURE__ */ Symbol.for("react.consumer"), A = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), w = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), C = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
    function tt(h) {
      return h === null || typeof h != "object" ? null : (h = q && h[q] || h["@@iterator"], typeof h == "function" ? h : null);
    }
    var ut = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, _t = Object.assign, K = {};
    function X(h, p, R) {
      this.props = h, this.context = p, this.refs = K, this.updater = R || ut;
    }
    X.prototype.isReactComponent = {}, X.prototype.setState = function(h, p) {
      if (typeof h != "object" && typeof h != "function" && h != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, h, p, "setState");
    }, X.prototype.forceUpdate = function(h) {
      this.updater.enqueueForceUpdate(this, h, "forceUpdate");
    };
    function $() {
    }
    $.prototype = X.prototype;
    function k(h, p, R) {
      this.props = h, this.context = p, this.refs = K, this.updater = R || ut;
    }
    var Tt = k.prototype = new $();
    Tt.constructor = k, _t(Tt, X.prototype), Tt.isPureReactComponent = true;
    var Qt = Array.isArray;
    function Ut() {
    }
    var I = {
      H: null,
      A: null,
      T: null,
      S: null
    }, It = Object.prototype.hasOwnProperty;
    function ee(h, p, R) {
      var B = R.ref;
      return {
        $$typeof: f,
        type: h,
        key: p,
        ref: B !== void 0 ? B : null,
        props: R
      };
    }
    function sl(h, p) {
      return ee(h.type, p, h.props);
    }
    function xe(h) {
      return typeof h == "object" && h !== null && h.$$typeof === f;
    }
    function Zt(h) {
      var p = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + h.replace(/[=:]/g, function(R) {
        return p[R];
      });
    }
    var Ae = /\/+/g;
    function ze(h, p) {
      return typeof h == "object" && h !== null && h.key != null ? Zt("" + h.key) : p.toString(36);
    }
    function se(h) {
      switch (h.status) {
        case "fulfilled":
          return h.value;
        case "rejected":
          throw h.reason;
        default:
          switch (typeof h.status == "string" ? h.then(Ut, Ut) : (h.status = "pending", h.then(function(p) {
            h.status === "pending" && (h.status = "fulfilled", h.value = p);
          }, function(p) {
            h.status === "pending" && (h.status = "rejected", h.reason = p);
          })), h.status) {
            case "fulfilled":
              return h.value;
            case "rejected":
              throw h.reason;
          }
      }
      throw h;
    }
    function M(h, p, R, B, V) {
      var W = typeof h;
      (W === "undefined" || W === "boolean") && (h = null);
      var ct = false;
      if (h === null) ct = true;
      else switch (W) {
        case "bigint":
        case "string":
        case "number":
          ct = true;
          break;
        case "object":
          switch (h.$$typeof) {
            case f:
            case c:
              ct = true;
              break;
            case D:
              return ct = h._init, M(ct(h._payload), p, R, B, V);
          }
      }
      if (ct) return V = V(h), ct = B === "" ? "." + ze(h, 0) : B, Qt(V) ? (R = "", ct != null && (R = ct.replace(Ae, "$&/") + "/"), M(V, p, R, "", function(Kt) {
        return Kt;
      })) : V != null && (xe(V) && (V = sl(V, R + (V.key == null || h && h.key === V.key ? "" : ("" + V.key).replace(Ae, "$&/") + "/") + ct)), p.push(V)), 1;
      ct = 0;
      var Vt = B === "" ? "." : B + ":";
      if (Qt(h)) for (var Nt = 0; Nt < h.length; Nt++) B = h[Nt], W = Vt + ze(B, Nt), ct += M(B, p, R, W, V);
      else if (Nt = tt(h), typeof Nt == "function") for (h = Nt.call(h), Nt = 0; !(B = h.next()).done; ) B = B.value, W = Vt + ze(B, Nt++), ct += M(B, p, R, W, V);
      else if (W === "object") {
        if (typeof h.then == "function") return M(se(h), p, R, B, V);
        throw p = String(h), Error("Objects are not valid as a React child (found: " + (p === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : p) + "). If you meant to render a collection of children, use an array instead.");
      }
      return ct;
    }
    function H(h, p, R) {
      if (h == null) return h;
      var B = [], V = 0;
      return M(h, B, "", "", function(W) {
        return p.call(R, W, V++);
      }), B;
    }
    function Z(h) {
      if (h._status === -1) {
        var p = h._result;
        p = p(), p.then(function(R) {
          (h._status === 0 || h._status === -1) && (h._status = 1, h._result = R);
        }, function(R) {
          (h._status === 0 || h._status === -1) && (h._status = 2, h._result = R);
        }), h._status === -1 && (h._status = 0, h._result = p);
      }
      if (h._status === 1) return h._result.default;
      throw h._result;
    }
    var dt = typeof reportError == "function" ? reportError : function(h) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var p = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof h == "object" && h !== null && typeof h.message == "string" ? String(h.message) : String(h),
          error: h
        });
        if (!window.dispatchEvent(p)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", h);
        return;
      }
      console.error(h);
    }, bt = {
      map: H,
      forEach: function(h, p, R) {
        H(h, function() {
          p.apply(this, arguments);
        }, R);
      },
      count: function(h) {
        var p = 0;
        return H(h, function() {
          p++;
        }), p;
      },
      toArray: function(h) {
        return H(h, function(p) {
          return p;
        }) || [];
      },
      only: function(h) {
        if (!xe(h)) throw Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
    };
    return J.Activity = C, J.Children = bt, J.Component = X, J.Fragment = d, J.Profiler = _, J.PureComponent = k, J.StrictMode = r, J.Suspense = w, J.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, J.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(h) {
        return I.H.useMemoCache(h);
      }
    }, J.cache = function(h) {
      return function() {
        return h.apply(null, arguments);
      };
    }, J.cacheSignal = function() {
      return null;
    }, J.cloneElement = function(h, p, R) {
      if (h == null) throw Error("The argument must be a React element, but you passed " + h + ".");
      var B = _t({}, h.props), V = h.key;
      if (p != null) for (W in p.key !== void 0 && (V = "" + p.key), p) !It.call(p, W) || W === "key" || W === "__self" || W === "__source" || W === "ref" && p.ref === void 0 || (B[W] = p[W]);
      var W = arguments.length - 2;
      if (W === 1) B.children = R;
      else if (1 < W) {
        for (var ct = Array(W), Vt = 0; Vt < W; Vt++) ct[Vt] = arguments[Vt + 2];
        B.children = ct;
      }
      return ee(h.type, V, B);
    }, J.createContext = function(h) {
      return h = {
        $$typeof: A,
        _currentValue: h,
        _currentValue2: h,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, h.Provider = h, h.Consumer = {
        $$typeof: E,
        _context: h
      }, h;
    }, J.createElement = function(h, p, R) {
      var B, V = {}, W = null;
      if (p != null) for (B in p.key !== void 0 && (W = "" + p.key), p) It.call(p, B) && B !== "key" && B !== "__self" && B !== "__source" && (V[B] = p[B]);
      var ct = arguments.length - 2;
      if (ct === 1) V.children = R;
      else if (1 < ct) {
        for (var Vt = Array(ct), Nt = 0; Nt < ct; Nt++) Vt[Nt] = arguments[Nt + 2];
        V.children = Vt;
      }
      if (h && h.defaultProps) for (B in ct = h.defaultProps, ct) V[B] === void 0 && (V[B] = ct[B]);
      return ee(h, W, V);
    }, J.createRef = function() {
      return {
        current: null
      };
    }, J.forwardRef = function(h) {
      return {
        $$typeof: N,
        render: h
      };
    }, J.isValidElement = xe, J.lazy = function(h) {
      return {
        $$typeof: D,
        _payload: {
          _status: -1,
          _result: h
        },
        _init: Z
      };
    }, J.memo = function(h, p) {
      return {
        $$typeof: b,
        type: h,
        compare: p === void 0 ? null : p
      };
    }, J.startTransition = function(h) {
      var p = I.T, R = {};
      I.T = R;
      try {
        var B = h(), V = I.S;
        V !== null && V(R, B), typeof B == "object" && B !== null && typeof B.then == "function" && B.then(Ut, dt);
      } catch (W) {
        dt(W);
      } finally {
        p !== null && R.types !== null && (p.types = R.types), I.T = p;
      }
    }, J.unstable_useCacheRefresh = function() {
      return I.H.useCacheRefresh();
    }, J.use = function(h) {
      return I.H.use(h);
    }, J.useActionState = function(h, p, R) {
      return I.H.useActionState(h, p, R);
    }, J.useCallback = function(h, p) {
      return I.H.useCallback(h, p);
    }, J.useContext = function(h) {
      return I.H.useContext(h);
    }, J.useDebugValue = function() {
    }, J.useDeferredValue = function(h, p) {
      return I.H.useDeferredValue(h, p);
    }, J.useEffect = function(h, p) {
      return I.H.useEffect(h, p);
    }, J.useEffectEvent = function(h) {
      return I.H.useEffectEvent(h);
    }, J.useId = function() {
      return I.H.useId();
    }, J.useImperativeHandle = function(h, p, R) {
      return I.H.useImperativeHandle(h, p, R);
    }, J.useInsertionEffect = function(h, p) {
      return I.H.useInsertionEffect(h, p);
    }, J.useLayoutEffect = function(h, p) {
      return I.H.useLayoutEffect(h, p);
    }, J.useMemo = function(h, p) {
      return I.H.useMemo(h, p);
    }, J.useOptimistic = function(h, p) {
      return I.H.useOptimistic(h, p);
    }, J.useReducer = function(h, p, R) {
      return I.H.useReducer(h, p, R);
    }, J.useRef = function(h) {
      return I.H.useRef(h);
    }, J.useState = function(h) {
      return I.H.useState(h);
    }, J.useSyncExternalStore = function(h, p, R) {
      return I.H.useSyncExternalStore(h, p, R);
    }, J.useTransition = function() {
      return I.H.useTransition();
    }, J.version = "19.2.3", J;
  }
  var kd;
  function Lf() {
    return kd || (kd = 1, Of.exports = lh()), Of.exports;
  }
  var mt = Lf();
  const ah = vm(mt);
  var Uf = {
    exports: {}
  }, qn = {}, Df = {
    exports: {}
  }, Cf = {};
  var Wd;
  function nh() {
    return Wd || (Wd = 1, (function(f) {
      function c(M, H) {
        var Z = M.length;
        M.push(H);
        t: for (; 0 < Z; ) {
          var dt = Z - 1 >>> 1, bt = M[dt];
          if (0 < _(bt, H)) M[dt] = H, M[Z] = bt, Z = dt;
          else break t;
        }
      }
      function d(M) {
        return M.length === 0 ? null : M[0];
      }
      function r(M) {
        if (M.length === 0) return null;
        var H = M[0], Z = M.pop();
        if (Z !== H) {
          M[0] = Z;
          t: for (var dt = 0, bt = M.length, h = bt >>> 1; dt < h; ) {
            var p = 2 * (dt + 1) - 1, R = M[p], B = p + 1, V = M[B];
            if (0 > _(R, Z)) B < bt && 0 > _(V, R) ? (M[dt] = V, M[B] = Z, dt = B) : (M[dt] = R, M[p] = Z, dt = p);
            else if (B < bt && 0 > _(V, Z)) M[dt] = V, M[B] = Z, dt = B;
            else break t;
          }
        }
        return H;
      }
      function _(M, H) {
        var Z = M.sortIndex - H.sortIndex;
        return Z !== 0 ? Z : M.id - H.id;
      }
      if (f.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var E = performance;
        f.unstable_now = function() {
          return E.now();
        };
      } else {
        var A = Date, N = A.now();
        f.unstable_now = function() {
          return A.now() - N;
        };
      }
      var w = [], b = [], D = 1, C = null, q = 3, tt = false, ut = false, _t = false, K = false, X = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
      function Tt(M) {
        for (var H = d(b); H !== null; ) {
          if (H.callback === null) r(b);
          else if (H.startTime <= M) r(b), H.sortIndex = H.expirationTime, c(w, H);
          else break;
          H = d(b);
        }
      }
      function Qt(M) {
        if (_t = false, Tt(M), !ut) if (d(w) !== null) ut = true, Ut || (Ut = true, Zt());
        else {
          var H = d(b);
          H !== null && se(Qt, H.startTime - M);
        }
      }
      var Ut = false, I = -1, It = 5, ee = -1;
      function sl() {
        return K ? true : !(f.unstable_now() - ee < It);
      }
      function xe() {
        if (K = false, Ut) {
          var M = f.unstable_now();
          ee = M;
          var H = true;
          try {
            t: {
              ut = false, _t && (_t = false, $(I), I = -1), tt = true;
              var Z = q;
              try {
                e: {
                  for (Tt(M), C = d(w); C !== null && !(C.expirationTime > M && sl()); ) {
                    var dt = C.callback;
                    if (typeof dt == "function") {
                      C.callback = null, q = C.priorityLevel;
                      var bt = dt(C.expirationTime <= M);
                      if (M = f.unstable_now(), typeof bt == "function") {
                        C.callback = bt, Tt(M), H = true;
                        break e;
                      }
                      C === d(w) && r(w), Tt(M);
                    } else r(w);
                    C = d(w);
                  }
                  if (C !== null) H = true;
                  else {
                    var h = d(b);
                    h !== null && se(Qt, h.startTime - M), H = false;
                  }
                }
                break t;
              } finally {
                C = null, q = Z, tt = false;
              }
              H = void 0;
            }
          } finally {
            H ? Zt() : Ut = false;
          }
        }
      }
      var Zt;
      if (typeof k == "function") Zt = function() {
        k(xe);
      };
      else if (typeof MessageChannel < "u") {
        var Ae = new MessageChannel(), ze = Ae.port2;
        Ae.port1.onmessage = xe, Zt = function() {
          ze.postMessage(null);
        };
      } else Zt = function() {
        X(xe, 0);
      };
      function se(M, H) {
        I = X(function() {
          M(f.unstable_now());
        }, H);
      }
      f.unstable_IdlePriority = 5, f.unstable_ImmediatePriority = 1, f.unstable_LowPriority = 4, f.unstable_NormalPriority = 3, f.unstable_Profiling = null, f.unstable_UserBlockingPriority = 2, f.unstable_cancelCallback = function(M) {
        M.callback = null;
      }, f.unstable_forceFrameRate = function(M) {
        0 > M || 125 < M ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : It = 0 < M ? Math.floor(1e3 / M) : 5;
      }, f.unstable_getCurrentPriorityLevel = function() {
        return q;
      }, f.unstable_next = function(M) {
        switch (q) {
          case 1:
          case 2:
          case 3:
            var H = 3;
            break;
          default:
            H = q;
        }
        var Z = q;
        q = H;
        try {
          return M();
        } finally {
          q = Z;
        }
      }, f.unstable_requestPaint = function() {
        K = true;
      }, f.unstable_runWithPriority = function(M, H) {
        switch (M) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            M = 3;
        }
        var Z = q;
        q = M;
        try {
          return H();
        } finally {
          q = Z;
        }
      }, f.unstable_scheduleCallback = function(M, H, Z) {
        var dt = f.unstable_now();
        switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? dt + Z : dt) : Z = dt, M) {
          case 1:
            var bt = -1;
            break;
          case 2:
            bt = 250;
            break;
          case 5:
            bt = 1073741823;
            break;
          case 4:
            bt = 1e4;
            break;
          default:
            bt = 5e3;
        }
        return bt = Z + bt, M = {
          id: D++,
          callback: H,
          priorityLevel: M,
          startTime: Z,
          expirationTime: bt,
          sortIndex: -1
        }, Z > dt ? (M.sortIndex = Z, c(b, M), d(w) === null && M === d(b) && (_t ? ($(I), I = -1) : _t = true, se(Qt, Z - dt))) : (M.sortIndex = bt, c(w, M), ut || tt || (ut = true, Ut || (Ut = true, Zt()))), M;
      }, f.unstable_shouldYield = sl, f.unstable_wrapCallback = function(M) {
        var H = q;
        return function() {
          var Z = q;
          q = H;
          try {
            return M.apply(this, arguments);
          } finally {
            q = Z;
          }
        };
      };
    })(Cf)), Cf;
  }
  var Fd;
  function uh() {
    return Fd || (Fd = 1, Df.exports = nh()), Df.exports;
  }
  var Rf = {
    exports: {}
  }, Pt = {};
  var $d;
  function ih() {
    if ($d) return Pt;
    $d = 1;
    var f = Lf();
    function c(w) {
      var b = "https://react.dev/errors/" + w;
      if (1 < arguments.length) {
        b += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var D = 2; D < arguments.length; D++) b += "&args[]=" + encodeURIComponent(arguments[D]);
      }
      return "Minified React error #" + w + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d() {
    }
    var r = {
      d: {
        f: d,
        r: function() {
          throw Error(c(522));
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
    }, _ = /* @__PURE__ */ Symbol.for("react.portal");
    function E(w, b, D) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: _,
        key: C == null ? null : "" + C,
        children: w,
        containerInfo: b,
        implementation: D
      };
    }
    var A = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function N(w, b) {
      if (w === "font") return "";
      if (typeof b == "string") return b === "use-credentials" ? b : "";
    }
    return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Pt.createPortal = function(w, b) {
      var D = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11) throw Error(c(299));
      return E(w, b, null, D);
    }, Pt.flushSync = function(w) {
      var b = A.T, D = r.p;
      try {
        if (A.T = null, r.p = 2, w) return w();
      } finally {
        A.T = b, r.p = D, r.d.f();
      }
    }, Pt.preconnect = function(w, b) {
      typeof w == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, r.d.C(w, b));
    }, Pt.prefetchDNS = function(w) {
      typeof w == "string" && r.d.D(w);
    }, Pt.preinit = function(w, b) {
      if (typeof w == "string" && b && typeof b.as == "string") {
        var D = b.as, C = N(D, b.crossOrigin), q = typeof b.integrity == "string" ? b.integrity : void 0, tt = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
        D === "style" ? r.d.S(w, typeof b.precedence == "string" ? b.precedence : void 0, {
          crossOrigin: C,
          integrity: q,
          fetchPriority: tt
        }) : D === "script" && r.d.X(w, {
          crossOrigin: C,
          integrity: q,
          fetchPriority: tt,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0
        });
      }
    }, Pt.preinitModule = function(w, b) {
      if (typeof w == "string") if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var D = N(b.as, b.crossOrigin);
          r.d.M(w, {
            crossOrigin: D,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0
          });
        }
      } else b == null && r.d.M(w);
    }, Pt.preload = function(w, b) {
      if (typeof w == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
        var D = b.as, C = N(D, b.crossOrigin);
        r.d.L(w, D, {
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
    }, Pt.preloadModule = function(w, b) {
      if (typeof w == "string") if (b) {
        var D = N(b.as, b.crossOrigin);
        r.d.m(w, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: D,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0
        });
      } else r.d.m(w);
    }, Pt.requestFormReset = function(w) {
      r.d.r(w);
    }, Pt.unstable_batchedUpdates = function(w, b) {
      return w(b);
    }, Pt.useFormState = function(w, b, D) {
      return A.H.useFormState(w, b, D);
    }, Pt.useFormStatus = function() {
      return A.H.useHostTransitionStatus();
    }, Pt.version = "19.2.3", Pt;
  }
  var Id;
  function ch() {
    if (Id) return Rf.exports;
    Id = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
    }
    return f(), Rf.exports = ih(), Rf.exports;
  }
  var Pd;
  function fh() {
    if (Pd) return qn;
    Pd = 1;
    var f = uh(), c = Lf(), d = ch();
    function r(t) {
      var e = "https://react.dev/errors/" + t;
      if (1 < arguments.length) {
        e += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var l = 2; l < arguments.length; l++) e += "&args[]=" + encodeURIComponent(arguments[l]);
      }
      return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function _(t) {
      return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
    }
    function E(t) {
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
    function A(t) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function N(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function w(t) {
      if (E(t) !== t) throw Error(r(188));
    }
    function b(t) {
      var e = t.alternate;
      if (!e) {
        if (e = E(t), e === null) throw Error(r(188));
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
            if (u === l) return w(n), t;
            if (u === a) return w(n), e;
            u = u.sibling;
          }
          throw Error(r(188));
        }
        if (l.return !== a.return) l = n, a = u;
        else {
          for (var i = false, s = n.child; s; ) {
            if (s === l) {
              i = true, l = n, a = u;
              break;
            }
            if (s === a) {
              i = true, a = n, l = u;
              break;
            }
            s = s.sibling;
          }
          if (!i) {
            for (s = u.child; s; ) {
              if (s === l) {
                i = true, l = u, a = n;
                break;
              }
              if (s === a) {
                i = true, a = u, l = n;
                break;
              }
              s = s.sibling;
            }
            if (!i) throw Error(r(189));
          }
        }
        if (l.alternate !== a) throw Error(r(190));
      }
      if (l.tag !== 3) throw Error(r(188));
      return l.stateNode.current === l ? t : e;
    }
    function D(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = D(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var C = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), tt = /* @__PURE__ */ Symbol.for("react.transitional.element"), ut = /* @__PURE__ */ Symbol.for("react.portal"), _t = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), X = /* @__PURE__ */ Symbol.for("react.profiler"), $ = /* @__PURE__ */ Symbol.for("react.consumer"), k = /* @__PURE__ */ Symbol.for("react.context"), Tt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Qt = /* @__PURE__ */ Symbol.for("react.suspense"), Ut = /* @__PURE__ */ Symbol.for("react.suspense_list"), I = /* @__PURE__ */ Symbol.for("react.memo"), It = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), sl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), xe = Symbol.iterator;
    function Zt(t) {
      return t === null || typeof t != "object" ? null : (t = xe && t[xe] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var Ae = /* @__PURE__ */ Symbol.for("react.client.reference");
    function ze(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === Ae ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case _t:
          return "Fragment";
        case X:
          return "Profiler";
        case K:
          return "StrictMode";
        case Qt:
          return "Suspense";
        case Ut:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case ut:
          return "Portal";
        case k:
          return t.displayName || "Context";
        case $:
          return (t._context.displayName || "Context") + ".Consumer";
        case Tt:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case I:
          return e = t.displayName || null, e !== null ? e : ze(t.type) || "Memo";
        case It:
          e = t._payload, t = t._init;
          try {
            return ze(t(e));
          } catch {
          }
      }
      return null;
    }
    var se = Array.isArray, M = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, dt = [], bt = -1;
    function h(t) {
      return {
        current: t
      };
    }
    function p(t) {
      0 > bt || (t.current = dt[bt], dt[bt] = null, bt--);
    }
    function R(t, e) {
      bt++, dt[bt] = t.current, t.current = e;
    }
    var B = h(null), V = h(null), W = h(null), ct = h(null);
    function Vt(t, e) {
      switch (R(W, e), R(V, t), R(B, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? yd(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = yd(e), t = hd(e, t);
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
      p(B), R(B, t);
    }
    function Nt() {
      p(B), p(V), p(W);
    }
    function Kt(t) {
      t.memoizedState !== null && R(ct, t);
      var e = B.current, l = hd(e, t.type);
      e !== l && (R(V, t), R(B, l));
    }
    function Ze(t) {
      V.current === t && (p(B), p(V)), ct.current === t && (p(ct), Dn._currentValue = Z);
    }
    var Qa, Vn;
    function Dt(t) {
      if (Qa === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        Qa = e && e[1] || "", Vn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + Qa + t + Vn;
    }
    var Ne = false;
    function mi(t, e) {
      if (!t || Ne) return "";
      Ne = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (e) {
                var U = function() {
                  throw Error();
                };
                if (Object.defineProperty(U.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(U, []);
                  } catch (z) {
                    var x = z;
                  }
                  Reflect.construct(t, [], U);
                } else {
                  try {
                    U.call();
                  } catch (z) {
                    x = z;
                  }
                  t.call(U.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  x = z;
                }
                (U = t()) && typeof U.catch == "function" && U.catch(function() {
                });
              }
            } catch (z) {
              if (z && x && typeof z.stack == "string") return [
                z.stack,
                x.stack
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
        var u = a.DetermineComponentFrameRoot(), i = u[0], s = u[1];
        if (i && s) {
          var m = i.split(`
`), S = s.split(`
`);
          for (n = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); ) a++;
          for (; n < S.length && !S[n].includes("DetermineComponentFrameRoot"); ) n++;
          if (a === m.length || n === S.length) for (a = m.length - 1, n = S.length - 1; 1 <= a && 0 <= n && m[a] !== S[n]; ) n--;
          for (; 1 <= a && 0 <= n; a--, n--) if (m[a] !== S[n]) {
            if (a !== 1 || n !== 1) do
              if (a--, n--, 0 > n || m[a] !== S[n]) {
                var T = `
` + m[a].replace(" at new ", " at ");
                return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        Ne = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? Dt(l) : "";
    }
    function Om(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Dt(t.type);
        case 16:
          return Dt("Lazy");
        case 13:
          return t.child !== e && e !== null ? Dt("Suspense Fallback") : Dt("Suspense");
        case 19:
          return Dt("SuspenseList");
        case 0:
        case 15:
          return mi(t.type, false);
        case 11:
          return mi(t.type.render, false);
        case 1:
          return mi(t.type, true);
        case 31:
          return Dt("Activity");
        default:
          return "";
      }
    }
    function Zf(t) {
      try {
        var e = "", l = null;
        do
          e += Om(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var yi = Object.prototype.hasOwnProperty, hi = f.unstable_scheduleCallback, gi = f.unstable_cancelCallback, Um = f.unstable_shouldYield, Dm = f.unstable_requestPaint, re = f.unstable_now, Cm = f.unstable_getCurrentPriorityLevel, Vf = f.unstable_ImmediatePriority, Kf = f.unstable_UserBlockingPriority, Kn = f.unstable_NormalPriority, Rm = f.unstable_LowPriority, Jf = f.unstable_IdlePriority, Hm = f.log, Bm = f.unstable_setDisableYieldValue, Za = null, oe = null;
    function rl(t) {
      if (typeof Hm == "function" && Bm(t), oe && typeof oe.setStrictMode == "function") try {
        oe.setStrictMode(Za, t);
      } catch {
      }
    }
    var de = Math.clz32 ? Math.clz32 : Lm, qm = Math.log, Ym = Math.LN2;
    function Lm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (qm(t) / Ym | 0) | 0;
    }
    var Jn = 256, kn = 262144, Wn = 4194304;
    function Rl(t) {
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
    function Fn(t, e, l) {
      var a = t.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = t.suspendedLanes, i = t.pingedLanes;
      t = t.warmLanes;
      var s = a & 134217727;
      return s !== 0 ? (a = s & ~u, a !== 0 ? n = Rl(a) : (i &= s, i !== 0 ? n = Rl(i) : l || (l = s & ~t, l !== 0 && (n = Rl(l))))) : (s = a & ~u, s !== 0 ? n = Rl(s) : i !== 0 ? n = Rl(i) : l || (l = a & ~t, l !== 0 && (n = Rl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
    }
    function Va(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Gm(t, e) {
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
    function kf() {
      var t = Wn;
      return Wn <<= 1, (Wn & 62914560) === 0 && (Wn = 4194304), t;
    }
    function _i(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function Ka(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Xm(t, e, l, a, n, u) {
      var i = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var s = t.entanglements, m = t.expirationTimes, S = t.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var T = 31 - de(l), U = 1 << T;
        s[T] = 0, m[T] = -1;
        var x = S[T];
        if (x !== null) for (S[T] = null, T = 0; T < x.length; T++) {
          var z = x[T];
          z !== null && (z.lane &= -536870913);
        }
        l &= ~U;
      }
      a !== 0 && Wf(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
    }
    function Wf(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - de(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
    }
    function Ff(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var a = 31 - de(l), n = 1 << a;
        n & e | t[a] & e && (t[a] |= e), l &= ~n;
      }
    }
    function $f(t, e) {
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
    function vi(t) {
      return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function If() {
      var t = H.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qd(t.type));
    }
    function Pf(t, e) {
      var l = H.p;
      try {
        return H.p = t, e();
      } finally {
        H.p = l;
      }
    }
    var ol = Math.random().toString(36).slice(2), Jt = "__reactFiber$" + ol, le = "__reactProps$" + ol, ea = "__reactContainer$" + ol, pi = "__reactEvents$" + ol, Qm = "__reactListeners$" + ol, Zm = "__reactHandles$" + ol, ts = "__reactResources$" + ol, Ja = "__reactMarker$" + ol;
    function Si(t) {
      delete t[Jt], delete t[le], delete t[pi], delete t[Qm], delete t[Zm];
    }
    function la(t) {
      var e = t[Jt];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[ea] || l[Jt]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = xd(t); t !== null; ) {
            if (l = t[Jt]) return l;
            t = xd(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function aa(t) {
      if (t = t[Jt] || t[ea]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function ka(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(r(33));
    }
    function na(t) {
      var e = t[ts];
      return e || (e = t[ts] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function Gt(t) {
      t[Ja] = true;
    }
    var es = /* @__PURE__ */ new Set(), ls = {};
    function Hl(t, e) {
      ua(t, e), ua(t + "Capture", e);
    }
    function ua(t, e) {
      for (ls[t] = e, t = 0; t < e.length; t++) es.add(e[t]);
    }
    var Vm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), as = {}, ns = {};
    function Km(t) {
      return yi.call(ns, t) ? true : yi.call(as, t) ? false : Vm.test(t) ? ns[t] = true : (as[t] = true, false);
    }
    function $n(t, e, l) {
      if (Km(e)) if (l === null) t.removeAttribute(e);
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
    function In(t, e, l) {
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
    function Ve(t, e, l, a) {
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
    function Ee(t) {
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
    function us(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Jm(t, e, l) {
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
        var e = us(t) ? "checked" : "value";
        t._valueTracker = Jm(t, e, "" + t[e]);
      }
    }
    function is(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), a = "";
      return t && (a = us(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
    }
    function Pn(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var km = /[\n"\\]/g;
    function Te(t) {
      return t.replace(km, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Ai(t, e, l, a, n, u, i, s) {
      t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Ee(e)) : t.value !== "" + Ee(e) && (t.value = "" + Ee(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? zi(t, i, Ee(e)) : l != null ? zi(t, i, Ee(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? t.name = "" + Ee(s) : t.removeAttribute("name");
    }
    function cs(t, e, l, a, n, u, i, s) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          xi(t);
          return;
        }
        l = l != null ? "" + Ee(l) : "", e = e != null ? "" + Ee(e) : l, s || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = s ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), xi(t);
    }
    function zi(t, e, l) {
      e === "number" && Pn(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function ia(t, e, l, a) {
      if (t = t.options, e) {
        e = {};
        for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
        for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
      } else {
        for (l = "" + Ee(l), e = null, n = 0; n < t.length; n++) {
          if (t[n].value === l) {
            t[n].selected = true, a && (t[n].defaultSelected = true);
            return;
          }
          e !== null || t[n].disabled || (e = t[n]);
        }
        e !== null && (e.selected = true);
      }
    }
    function fs(t, e, l) {
      if (e != null && (e = "" + Ee(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + Ee(l) : "";
    }
    function ss(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(r(92));
          if (se(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = Ee(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), xi(t);
    }
    function ca(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Wm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function rs(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Wm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function os(t, e, l) {
      if (e != null && typeof e != "object") throw Error(r(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && rs(t, n, a);
      } else for (var u in e) e.hasOwnProperty(u) && rs(t, u, e[u]);
    }
    function Ni(t) {
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
    var Fm = /* @__PURE__ */ new Map([
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
    ]), $m = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function tu(t) {
      return $m.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function Ke() {
    }
    var Ei = null;
    function Ti(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var fa = null, sa = null;
    function ds(t) {
      var e = aa(t);
      if (e && (t = e.stateNode)) {
        var l = t[le] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Ai(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Te("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var n = a[le] || null;
                  if (!n) throw Error(r(90));
                  Ai(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && is(a);
            }
            break t;
          case "textarea":
            fs(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && ia(t, !!l.multiple, e, false);
        }
      }
    }
    var ji = false;
    function ms(t, e, l) {
      if (ji) return t(e, l);
      ji = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (ji = false, (fa !== null || sa !== null) && (Gu(), fa && (e = fa, t = sa, sa = fa = null, ds(e), t))) for (e = 0; e < t.length; e++) ds(t[e]);
      }
    }
    function Wa(t, e) {
      var l = t.stateNode;
      if (l === null) return null;
      var a = l[le] || null;
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
    var Je = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = false;
    if (Je) try {
      var Fa = {};
      Object.defineProperty(Fa, "passive", {
        get: function() {
          Mi = true;
        }
      }), window.addEventListener("test", Fa, Fa), window.removeEventListener("test", Fa, Fa);
    } catch {
      Mi = false;
    }
    var dl = null, wi = null, eu = null;
    function ys() {
      if (eu) return eu;
      var t, e = wi, l = e.length, a, n = "value" in dl ? dl.value : dl.textContent, u = n.length;
      for (t = 0; t < l && e[t] === n[t]; t++) ;
      var i = l - t;
      for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
      return eu = n.slice(t, 1 < a ? 1 - a : void 0);
    }
    function lu(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function au() {
      return true;
    }
    function hs() {
      return false;
    }
    function ae(t) {
      function e(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var s in t) t.hasOwnProperty(s) && (l = t[s], this[s] = l ? l(u) : u[s]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? au : hs, this.isPropagationStopped = hs, this;
      }
      return C(e.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = au);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = au);
        },
        persist: function() {
        },
        isPersistent: au
      }), e;
    }
    var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, nu = ae(Bl), $a = C({}, Bl, {
      view: 0,
      detail: 0
    }), Im = ae($a), Oi, Ui, Ia, uu = C({}, $a, {
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
      getModifierState: Ci,
      button: 0,
      buttons: 0,
      relatedTarget: function(t) {
        return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
      },
      movementX: function(t) {
        return "movementX" in t ? t.movementX : (t !== Ia && (Ia && t.type === "mousemove" ? (Oi = t.screenX - Ia.screenX, Ui = t.screenY - Ia.screenY) : Ui = Oi = 0, Ia = t), Oi);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Ui;
      }
    }), gs = ae(uu), Pm = C({}, uu, {
      dataTransfer: 0
    }), t0 = ae(Pm), e0 = C({}, $a, {
      relatedTarget: 0
    }), Di = ae(e0), l0 = C({}, Bl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), a0 = ae(l0), n0 = C({}, Bl, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), u0 = ae(n0), i0 = C({}, Bl, {
      data: 0
    }), _s = ae(i0), c0 = {
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
    }, f0 = {
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
    }, s0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function r0(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = s0[t]) ? !!e[t] : false;
    }
    function Ci() {
      return r0;
    }
    var o0 = C({}, $a, {
      key: function(t) {
        if (t.key) {
          var e = c0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = lu(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? f0[t.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ci,
      charCode: function(t) {
        return t.type === "keypress" ? lu(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? lu(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), d0 = ae(o0), m0 = C({}, uu, {
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
    }), bs = ae(m0), y0 = C({}, $a, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci
    }), h0 = ae(y0), g0 = C({}, Bl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), _0 = ae(g0), b0 = C({}, uu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), v0 = ae(b0), p0 = C({}, Bl, {
      newState: 0,
      oldState: 0
    }), S0 = ae(p0), x0 = [
      9,
      13,
      27,
      32
    ], Ri = Je && "CompositionEvent" in window, Pa = null;
    Je && "documentMode" in document && (Pa = document.documentMode);
    var A0 = Je && "TextEvent" in window && !Pa, vs = Je && (!Ri || Pa && 8 < Pa && 11 >= Pa), ps = " ", Ss = false;
    function xs(t, e) {
      switch (t) {
        case "keyup":
          return x0.indexOf(e.keyCode) !== -1;
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
    function As(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var ra = false;
    function z0(t, e) {
      switch (t) {
        case "compositionend":
          return As(e);
        case "keypress":
          return e.which !== 32 ? null : (Ss = true, ps);
        case "textInput":
          return t = e.data, t === ps && Ss ? null : t;
        default:
          return null;
      }
    }
    function N0(t, e) {
      if (ra) return t === "compositionend" || !Ri && xs(t, e) ? (t = ys(), eu = wi = dl = null, ra = false, t) : null;
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
          return vs && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var E0 = {
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
    function zs(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!E0[t.type] : e === "textarea";
    }
    function Ns(t, e, l, a) {
      fa ? sa ? sa.push(a) : sa = [
        a
      ] : fa = a, e = ku(e, "onChange"), 0 < e.length && (l = new nu("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var tn = null, en = null;
    function T0(t) {
      fd(t, 0);
    }
    function iu(t) {
      var e = ka(t);
      if (is(e)) return t;
    }
    function Es(t, e) {
      if (t === "change") return e;
    }
    var Ts = false;
    if (Je) {
      var Hi;
      if (Je) {
        var Bi = "oninput" in document;
        if (!Bi) {
          var js = document.createElement("div");
          js.setAttribute("oninput", "return;"), Bi = typeof js.oninput == "function";
        }
        Hi = Bi;
      } else Hi = false;
      Ts = Hi && (!document.documentMode || 9 < document.documentMode);
    }
    function Ms() {
      tn && (tn.detachEvent("onpropertychange", ws), en = tn = null);
    }
    function ws(t) {
      if (t.propertyName === "value" && iu(en)) {
        var e = [];
        Ns(e, en, t, Ti(t)), ms(T0, e);
      }
    }
    function j0(t, e, l) {
      t === "focusin" ? (Ms(), tn = e, en = l, tn.attachEvent("onpropertychange", ws)) : t === "focusout" && Ms();
    }
    function M0(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return iu(en);
    }
    function w0(t, e) {
      if (t === "click") return iu(e);
    }
    function O0(t, e) {
      if (t === "input" || t === "change") return iu(e);
    }
    function U0(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var me = typeof Object.is == "function" ? Object.is : U0;
    function ln(t, e) {
      if (me(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), a = Object.keys(e);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!yi.call(e, n) || !me(t[n], e[n])) return false;
      }
      return true;
    }
    function Os(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Us(t, e) {
      var l = Os(t);
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
        l = Os(l);
      }
    }
    function Ds(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Ds(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Cs(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = Pn(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = Pn(t.document);
      }
      return e;
    }
    function qi(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var D0 = Je && "documentMode" in document && 11 >= document.documentMode, oa = null, Yi = null, an = null, Li = false;
    function Rs(t, e, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Li || oa == null || oa !== Pn(a) || (a = oa, "selectionStart" in a && qi(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), an && ln(an, a) || (an = a, a = ku(Yi, "onSelect"), 0 < a.length && (e = new nu("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: a
      }), e.target = oa)));
    }
    function ql(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var da = {
      animationend: ql("Animation", "AnimationEnd"),
      animationiteration: ql("Animation", "AnimationIteration"),
      animationstart: ql("Animation", "AnimationStart"),
      transitionrun: ql("Transition", "TransitionRun"),
      transitionstart: ql("Transition", "TransitionStart"),
      transitioncancel: ql("Transition", "TransitionCancel"),
      transitionend: ql("Transition", "TransitionEnd")
    }, Gi = {}, Hs = {};
    Je && (Hs = document.createElement("div").style, "AnimationEvent" in window || (delete da.animationend.animation, delete da.animationiteration.animation, delete da.animationstart.animation), "TransitionEvent" in window || delete da.transitionend.transition);
    function Yl(t) {
      if (Gi[t]) return Gi[t];
      if (!da[t]) return t;
      var e = da[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in Hs) return Gi[t] = e[l];
      return t;
    }
    var Bs = Yl("animationend"), qs = Yl("animationiteration"), Ys = Yl("animationstart"), C0 = Yl("transitionrun"), R0 = Yl("transitionstart"), H0 = Yl("transitioncancel"), Ls = Yl("transitionend"), Gs = /* @__PURE__ */ new Map(), Xi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xi.push("scrollEnd");
    function He(t, e) {
      Gs.set(t, e), Hl(e, [
        t
      ]);
    }
    var cu = typeof reportError == "function" ? reportError : function(t) {
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
    }, je = [], ma = 0, Qi = 0;
    function fu() {
      for (var t = ma, e = Qi = ma = 0; e < t; ) {
        var l = je[e];
        je[e++] = null;
        var a = je[e];
        je[e++] = null;
        var n = je[e];
        je[e++] = null;
        var u = je[e];
        if (je[e++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Xs(l, n, u);
      }
    }
    function su(t, e, l, a) {
      je[ma++] = t, je[ma++] = e, je[ma++] = l, je[ma++] = a, Qi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Zi(t, e, l, a) {
      return su(t, e, l, a), ru(t);
    }
    function Ll(t, e) {
      return su(t, null, null, e), ru(t);
    }
    function Xs(t, e, l) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - de(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
        e
      ] : a.push(e), e.lane = l | 536870912), u) : null;
    }
    function ru(t) {
      if (50 < En) throw En = 0, Pc = null, Error(r(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var ya = {};
    function B0(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ye(t, e, l, a) {
      return new B0(t, e, l, a);
    }
    function Vi(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function ke(t, e) {
      var l = t.alternate;
      return l === null ? (l = ye(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function Qs(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function ou(t, e, l, a, n, u) {
      var i = 0;
      if (a = t, typeof t == "function") Vi(t) && (i = 1);
      else if (typeof t == "string") i = Xy(t, l, B.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case ee:
          return t = ye(31, l, e, n), t.elementType = ee, t.lanes = u, t;
        case _t:
          return Gl(l.children, n, u, e);
        case K:
          i = 8, n |= 24;
          break;
        case X:
          return t = ye(12, l, e, n | 2), t.elementType = X, t.lanes = u, t;
        case Qt:
          return t = ye(13, l, e, n), t.elementType = Qt, t.lanes = u, t;
        case Ut:
          return t = ye(19, l, e, n), t.elementType = Ut, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case k:
              i = 10;
              break t;
            case $:
              i = 9;
              break t;
            case Tt:
              i = 11;
              break t;
            case I:
              i = 14;
              break t;
            case It:
              i = 16, a = null;
              break t;
          }
          i = 29, l = Error(r(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = ye(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function Gl(t, e, l, a) {
      return t = ye(7, t, a, e), t.lanes = l, t;
    }
    function Ki(t, e, l) {
      return t = ye(6, t, null, e), t.lanes = l, t;
    }
    function Zs(t) {
      var e = ye(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function Ji(t, e, l) {
      return e = ye(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var Vs = /* @__PURE__ */ new WeakMap();
    function Me(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = Vs.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: Zf(e)
        }, Vs.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Zf(e)
      };
    }
    var ha = [], ga = 0, du = null, nn = 0, we = [], Oe = 0, ml = null, Ye = 1, Le = "";
    function We(t, e) {
      ha[ga++] = nn, ha[ga++] = du, du = t, nn = e;
    }
    function Ks(t, e, l) {
      we[Oe++] = Ye, we[Oe++] = Le, we[Oe++] = ml, ml = t;
      var a = Ye;
      t = Le;
      var n = 32 - de(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - de(e) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Ye = 1 << 32 - de(e) + n | l << n | a, Le = u + t;
      } else Ye = 1 << u | l << n | a, Le = t;
    }
    function ki(t) {
      t.return !== null && (We(t, 1), Ks(t, 1, 0));
    }
    function Wi(t) {
      for (; t === du; ) du = ha[--ga], ha[ga] = null, nn = ha[--ga], ha[ga] = null;
      for (; t === ml; ) ml = we[--Oe], we[Oe] = null, Le = we[--Oe], we[Oe] = null, Ye = we[--Oe], we[Oe] = null;
    }
    function Js(t, e) {
      we[Oe++] = Ye, we[Oe++] = Le, we[Oe++] = ml, Ye = e.id, Le = e.overflow, ml = t;
    }
    var kt = null, At = null, it = false, yl = null, Ue = false, Fi = Error(r(519));
    function hl(t) {
      var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw un(Me(e, t)), Fi;
    }
    function ks(t) {
      var e = t.stateNode, l = t.type, a = t.memoizedProps;
      switch (e[Jt] = t, e[le] = a, l) {
        case "dialog":
          lt("cancel", e), lt("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          lt("load", e);
          break;
        case "video":
        case "audio":
          for (l = 0; l < jn.length; l++) lt(jn[l], e);
          break;
        case "source":
          lt("error", e);
          break;
        case "img":
        case "image":
        case "link":
          lt("error", e), lt("load", e);
          break;
        case "details":
          lt("toggle", e);
          break;
        case "input":
          lt("invalid", e), cs(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          lt("invalid", e);
          break;
        case "textarea":
          lt("invalid", e), ss(e, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || dd(e.textContent, l) ? (a.popover != null && (lt("beforetoggle", e), lt("toggle", e)), a.onScroll != null && lt("scroll", e), a.onScrollEnd != null && lt("scrollend", e), a.onClick != null && (e.onclick = Ke), e = true) : e = false, e || hl(t, true);
    }
    function Ws(t) {
      for (kt = t.return; kt; ) switch (kt.tag) {
        case 5:
        case 31:
        case 13:
          Ue = false;
          return;
        case 27:
        case 3:
          Ue = true;
          return;
        default:
          kt = kt.return;
      }
    }
    function _a(t) {
      if (t !== kt) return false;
      if (!it) return Ws(t), it = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || hf(t.type, t.memoizedProps)), l = !l), l && At && hl(t), Ws(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        At = Sd(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        At = Sd(t);
      } else e === 27 ? (e = At, Ml(t.type) ? (t = pf, pf = null, At = t) : At = e) : At = kt ? Ce(t.stateNode.nextSibling) : null;
      return true;
    }
    function Xl() {
      At = kt = null, it = false;
    }
    function $i() {
      var t = yl;
      return t !== null && (ce === null ? ce = t : ce.push.apply(ce, t), yl = null), t;
    }
    function un(t) {
      yl === null ? yl = [
        t
      ] : yl.push(t);
    }
    var Ii = h(null), Ql = null, Fe = null;
    function gl(t, e, l) {
      R(Ii, e._currentValue), e._currentValue = l;
    }
    function $e(t) {
      t._currentValue = Ii.current, p(Ii);
    }
    function Pi(t, e, l) {
      for (; t !== null; ) {
        var a = t.alternate;
        if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l) break;
        t = t.return;
      }
    }
    function tc(t, e, l, a) {
      var n = t.child;
      for (n !== null && (n.return = t); n !== null; ) {
        var u = n.dependencies;
        if (u !== null) {
          var i = n.child;
          u = u.firstContext;
          t: for (; u !== null; ) {
            var s = u;
            u = n;
            for (var m = 0; m < e.length; m++) if (s.context === e[m]) {
              u.lanes |= l, s = u.alternate, s !== null && (s.lanes |= l), Pi(u.return, l, t), a || (i = null);
              break t;
            }
            u = s.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(r(341));
          i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Pi(i, l, t), i = null;
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
    function ba(t, e, l, a) {
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
            var s = n.type;
            me(n.pendingProps.value, i.value) || (t !== null ? t.push(s) : t = [
              s
            ]);
          }
        } else if (n === ct.current) {
          if (i = n.alternate, i === null) throw Error(r(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Dn) : t = [
            Dn
          ]);
        }
        n = n.return;
      }
      t !== null && tc(e, t, l, a), e.flags |= 262144;
    }
    function mu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!me(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function Zl(t) {
      Ql = t, Fe = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Wt(t) {
      return Fs(Ql, t);
    }
    function yu(t, e) {
      return Ql === null && Zl(t), Fs(t, e);
    }
    function Fs(t, e) {
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
    var q0 = typeof AbortController < "u" ? AbortController : function() {
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
    }, Y0 = f.unstable_scheduleCallback, L0 = f.unstable_NormalPriority, Ct = {
      $$typeof: k,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function ec() {
      return {
        controller: new q0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function cn(t) {
      t.refCount--, t.refCount === 0 && Y0(L0, function() {
        t.controller.abort();
      });
    }
    var fn = null, lc = 0, va = 0, pa = null;
    function G0(t, e) {
      if (fn === null) {
        var l = fn = [];
        lc = 0, va = uf(), pa = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return lc++, e.then($s, $s), e;
    }
    function $s() {
      if (--lc === 0 && fn !== null) {
        pa !== null && (pa.status = "fulfilled");
        var t = fn;
        fn = null, va = 0, pa = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function X0(t, e) {
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
    var Is = M.S;
    M.S = function(t, e) {
      Ho = re(), typeof e == "object" && e !== null && typeof e.then == "function" && G0(t, e), Is !== null && Is(t, e);
    };
    var Vl = h(null);
    function ac() {
      var t = Vl.current;
      return t !== null ? t : xt.pooledCache;
    }
    function hu(t, e) {
      e === null ? R(Vl, Vl.current) : R(Vl, e.pool);
    }
    function Ps() {
      var t = ac();
      return t === null ? null : {
        parent: Ct._currentValue,
        pool: t
      };
    }
    var Sa = Error(r(460)), nc = Error(r(474)), gu = Error(r(542)), _u = {
      then: function() {
      }
    };
    function tr(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function er(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(Ke, Ke), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ar(t), t;
        default:
          if (typeof e.status == "string") e.then(Ke, Ke);
          else {
            if (t = xt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
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
              throw t = e.reason, ar(t), t;
          }
          throw Jl = e, Sa;
      }
    }
    function Kl(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Jl = l, Sa) : l;
      }
    }
    var Jl = null;
    function lr() {
      if (Jl === null) throw Error(r(459));
      var t = Jl;
      return Jl = null, t;
    }
    function ar(t) {
      if (t === Sa || t === gu) throw Error(r(483));
    }
    var xa = null, sn = 0;
    function bu(t) {
      var e = sn;
      return sn += 1, xa === null && (xa = []), er(xa, t, e);
    }
    function rn(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function vu(t, e) {
      throw e.$$typeof === q ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function nr(t) {
      function e(g, y) {
        if (t) {
          var v = g.deletions;
          v === null ? (g.deletions = [
            y
          ], g.flags |= 16) : v.push(y);
        }
      }
      function l(g, y) {
        if (!t) return null;
        for (; y !== null; ) e(g, y), y = y.sibling;
        return null;
      }
      function a(g) {
        for (var y = /* @__PURE__ */ new Map(); g !== null; ) g.key !== null ? y.set(g.key, g) : y.set(g.index, g), g = g.sibling;
        return y;
      }
      function n(g, y) {
        return g = ke(g, y), g.index = 0, g.sibling = null, g;
      }
      function u(g, y, v) {
        return g.index = v, t ? (v = g.alternate, v !== null ? (v = v.index, v < y ? (g.flags |= 67108866, y) : v) : (g.flags |= 67108866, y)) : (g.flags |= 1048576, y);
      }
      function i(g) {
        return t && g.alternate === null && (g.flags |= 67108866), g;
      }
      function s(g, y, v, O) {
        return y === null || y.tag !== 6 ? (y = Ki(v, g.mode, O), y.return = g, y) : (y = n(y, v), y.return = g, y);
      }
      function m(g, y, v, O) {
        var G = v.type;
        return G === _t ? T(g, y, v.props.children, O, v.key) : y !== null && (y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === It && Kl(G) === y.type) ? (y = n(y, v.props), rn(y, v), y.return = g, y) : (y = ou(v.type, v.key, v.props, null, g.mode, O), rn(y, v), y.return = g, y);
      }
      function S(g, y, v, O) {
        return y === null || y.tag !== 4 || y.stateNode.containerInfo !== v.containerInfo || y.stateNode.implementation !== v.implementation ? (y = Ji(v, g.mode, O), y.return = g, y) : (y = n(y, v.children || []), y.return = g, y);
      }
      function T(g, y, v, O, G) {
        return y === null || y.tag !== 7 ? (y = Gl(v, g.mode, O, G), y.return = g, y) : (y = n(y, v), y.return = g, y);
      }
      function U(g, y, v) {
        if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint") return y = Ki("" + y, g.mode, v), y.return = g, y;
        if (typeof y == "object" && y !== null) {
          switch (y.$$typeof) {
            case tt:
              return v = ou(y.type, y.key, y.props, null, g.mode, v), rn(v, y), v.return = g, v;
            case ut:
              return y = Ji(y, g.mode, v), y.return = g, y;
            case It:
              return y = Kl(y), U(g, y, v);
          }
          if (se(y) || Zt(y)) return y = Gl(y, g.mode, v, null), y.return = g, y;
          if (typeof y.then == "function") return U(g, bu(y), v);
          if (y.$$typeof === k) return U(g, yu(g, y), v);
          vu(g, y);
        }
        return null;
      }
      function x(g, y, v, O) {
        var G = y !== null ? y.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return G !== null ? null : s(g, y, "" + v, O);
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case tt:
              return v.key === G ? m(g, y, v, O) : null;
            case ut:
              return v.key === G ? S(g, y, v, O) : null;
            case It:
              return v = Kl(v), x(g, y, v, O);
          }
          if (se(v) || Zt(v)) return G !== null ? null : T(g, y, v, O, null);
          if (typeof v.then == "function") return x(g, y, bu(v), O);
          if (v.$$typeof === k) return x(g, y, yu(g, v), O);
          vu(g, v);
        }
        return null;
      }
      function z(g, y, v, O, G) {
        if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint") return g = g.get(v) || null, s(y, g, "" + O, G);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case tt:
              return g = g.get(O.key === null ? v : O.key) || null, m(y, g, O, G);
            case ut:
              return g = g.get(O.key === null ? v : O.key) || null, S(y, g, O, G);
            case It:
              return O = Kl(O), z(g, y, v, O, G);
          }
          if (se(O) || Zt(O)) return g = g.get(v) || null, T(y, g, O, G, null);
          if (typeof O.then == "function") return z(g, y, v, bu(O), G);
          if (O.$$typeof === k) return z(g, y, v, yu(y, O), G);
          vu(y, O);
        }
        return null;
      }
      function Y(g, y, v, O) {
        for (var G = null, st = null, L = y, P = y = 0, nt = null; L !== null && P < v.length; P++) {
          L.index > P ? (nt = L, L = null) : nt = L.sibling;
          var rt = x(g, L, v[P], O);
          if (rt === null) {
            L === null && (L = nt);
            break;
          }
          t && L && rt.alternate === null && e(g, L), y = u(rt, y, P), st === null ? G = rt : st.sibling = rt, st = rt, L = nt;
        }
        if (P === v.length) return l(g, L), it && We(g, P), G;
        if (L === null) {
          for (; P < v.length; P++) L = U(g, v[P], O), L !== null && (y = u(L, y, P), st === null ? G = L : st.sibling = L, st = L);
          return it && We(g, P), G;
        }
        for (L = a(L); P < v.length; P++) nt = z(L, g, P, v[P], O), nt !== null && (t && nt.alternate !== null && L.delete(nt.key === null ? P : nt.key), y = u(nt, y, P), st === null ? G = nt : st.sibling = nt, st = nt);
        return t && L.forEach(function(Cl) {
          return e(g, Cl);
        }), it && We(g, P), G;
      }
      function Q(g, y, v, O) {
        if (v == null) throw Error(r(151));
        for (var G = null, st = null, L = y, P = y = 0, nt = null, rt = v.next(); L !== null && !rt.done; P++, rt = v.next()) {
          L.index > P ? (nt = L, L = null) : nt = L.sibling;
          var Cl = x(g, L, rt.value, O);
          if (Cl === null) {
            L === null && (L = nt);
            break;
          }
          t && L && Cl.alternate === null && e(g, L), y = u(Cl, y, P), st === null ? G = Cl : st.sibling = Cl, st = Cl, L = nt;
        }
        if (rt.done) return l(g, L), it && We(g, P), G;
        if (L === null) {
          for (; !rt.done; P++, rt = v.next()) rt = U(g, rt.value, O), rt !== null && (y = u(rt, y, P), st === null ? G = rt : st.sibling = rt, st = rt);
          return it && We(g, P), G;
        }
        for (L = a(L); !rt.done; P++, rt = v.next()) rt = z(L, g, P, rt.value, O), rt !== null && (t && rt.alternate !== null && L.delete(rt.key === null ? P : rt.key), y = u(rt, y, P), st === null ? G = rt : st.sibling = rt, st = rt);
        return t && L.forEach(function(Py) {
          return e(g, Py);
        }), it && We(g, P), G;
      }
      function St(g, y, v, O) {
        if (typeof v == "object" && v !== null && v.type === _t && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case tt:
              t: {
                for (var G = v.key; y !== null; ) {
                  if (y.key === G) {
                    if (G = v.type, G === _t) {
                      if (y.tag === 7) {
                        l(g, y.sibling), O = n(y, v.props.children), O.return = g, g = O;
                        break t;
                      }
                    } else if (y.elementType === G || typeof G == "object" && G !== null && G.$$typeof === It && Kl(G) === y.type) {
                      l(g, y.sibling), O = n(y, v.props), rn(O, v), O.return = g, g = O;
                      break t;
                    }
                    l(g, y);
                    break;
                  } else e(g, y);
                  y = y.sibling;
                }
                v.type === _t ? (O = Gl(v.props.children, g.mode, O, v.key), O.return = g, g = O) : (O = ou(v.type, v.key, v.props, null, g.mode, O), rn(O, v), O.return = g, g = O);
              }
              return i(g);
            case ut:
              t: {
                for (G = v.key; y !== null; ) {
                  if (y.key === G) if (y.tag === 4 && y.stateNode.containerInfo === v.containerInfo && y.stateNode.implementation === v.implementation) {
                    l(g, y.sibling), O = n(y, v.children || []), O.return = g, g = O;
                    break t;
                  } else {
                    l(g, y);
                    break;
                  }
                  else e(g, y);
                  y = y.sibling;
                }
                O = Ji(v, g.mode, O), O.return = g, g = O;
              }
              return i(g);
            case It:
              return v = Kl(v), St(g, y, v, O);
          }
          if (se(v)) return Y(g, y, v, O);
          if (Zt(v)) {
            if (G = Zt(v), typeof G != "function") throw Error(r(150));
            return v = G.call(v), Q(g, y, v, O);
          }
          if (typeof v.then == "function") return St(g, y, bu(v), O);
          if (v.$$typeof === k) return St(g, y, yu(g, v), O);
          vu(g, v);
        }
        return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, y !== null && y.tag === 6 ? (l(g, y.sibling), O = n(y, v), O.return = g, g = O) : (l(g, y), O = Ki(v, g.mode, O), O.return = g, g = O), i(g)) : l(g, y);
      }
      return function(g, y, v, O) {
        try {
          sn = 0;
          var G = St(g, y, v, O);
          return xa = null, G;
        } catch (L) {
          if (L === Sa || L === gu) throw L;
          var st = ye(29, L, null, g.mode);
          return st.lanes = O, st.return = g, st;
        }
      };
    }
    var kl = nr(true), ur = nr(false), _l = false;
    function uc(t) {
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
    function ic(t, e) {
      t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      });
    }
    function bl(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function vl(t, e, l) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (ot & 2) !== 0) {
        var n = a.pending;
        return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = ru(t), Xs(t, null, l), e;
      }
      return su(t, a, e, l), ru(t);
    }
    function on(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Ff(t, l);
      }
    }
    function cc(t, e) {
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
    var fc = false;
    function dn() {
      if (fc) {
        var t = pa;
        if (t !== null) throw t;
      }
    }
    function mn(t, e, l, a) {
      fc = false;
      var n = t.updateQueue;
      _l = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, s = n.shared.pending;
      if (s !== null) {
        n.shared.pending = null;
        var m = s, S = m.next;
        m.next = null, i === null ? u = S : i.next = S, i = m;
        var T = t.alternate;
        T !== null && (T = T.updateQueue, s = T.lastBaseUpdate, s !== i && (s === null ? T.firstBaseUpdate = S : s.next = S, T.lastBaseUpdate = m));
      }
      if (u !== null) {
        var U = n.baseState;
        i = 0, T = S = m = null, s = u;
        do {
          var x = s.lane & -536870913, z = x !== s.lane;
          if (z ? (at & x) === x : (a & x) === x) {
            x !== 0 && x === va && (fc = true), T !== null && (T = T.next = {
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: null,
              next: null
            });
            t: {
              var Y = t, Q = s;
              x = e;
              var St = l;
              switch (Q.tag) {
                case 1:
                  if (Y = Q.payload, typeof Y == "function") {
                    U = Y.call(St, U, x);
                    break t;
                  }
                  U = Y;
                  break t;
                case 3:
                  Y.flags = Y.flags & -65537 | 128;
                case 0:
                  if (Y = Q.payload, x = typeof Y == "function" ? Y.call(St, U, x) : Y, x == null) break t;
                  U = C({}, U, x);
                  break t;
                case 2:
                  _l = true;
              }
            }
            x = s.callback, x !== null && (t.flags |= 64, z && (t.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [
              x
            ] : z.push(x));
          } else z = {
            lane: x,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          }, T === null ? (S = T = z, m = U) : T = T.next = z, i |= x;
          if (s = s.next, s === null) {
            if (s = n.shared.pending, s === null) break;
            z = s, s = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
          }
        } while (true);
        T === null && (m = U), n.baseState = m, n.firstBaseUpdate = S, n.lastBaseUpdate = T, u === null && (n.shared.lanes = 0), zl |= i, t.lanes = i, t.memoizedState = U;
      }
    }
    function ir(t, e) {
      if (typeof t != "function") throw Error(r(191, t));
      t.call(e);
    }
    function cr(t, e) {
      var l = t.callbacks;
      if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) ir(l[t], e);
    }
    var Aa = h(null), pu = h(0);
    function fr(t, e) {
      t = il, R(pu, t), R(Aa, e), il = t | e.baseLanes;
    }
    function sc() {
      R(pu, il), R(Aa, Aa.current);
    }
    function rc() {
      il = pu.current, p(Aa), p(pu);
    }
    var he = h(null), De = null;
    function pl(t) {
      var e = t.alternate;
      R(wt, wt.current & 1), R(he, t), De === null && (e === null || Aa.current !== null || e.memoizedState !== null) && (De = t);
    }
    function oc(t) {
      R(wt, wt.current), R(he, t), De === null && (De = t);
    }
    function sr(t) {
      t.tag === 22 ? (R(wt, wt.current), R(he, t), De === null && (De = t)) : Sl();
    }
    function Sl() {
      R(wt, wt.current), R(he, he.current);
    }
    function ge(t) {
      p(he), De === t && (De = null), p(wt);
    }
    var wt = h(0);
    function Su(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || bf(l) || vf(l))) return e;
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
    var Ie = 0, F = null, vt = null, Rt = null, xu = false, za = false, Wl = false, Au = 0, yn = 0, Na = null, Q0 = 0;
    function jt() {
      throw Error(r(321));
    }
    function dc(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!me(t[l], e[l])) return false;
      return true;
    }
    function mc(t, e, l, a, n, u) {
      return Ie = u, F = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, M.H = t === null || t.memoizedState === null ? Kr : jc, Wl = false, u = l(a, n), Wl = false, za && (u = or(e, l, a, n)), rr(t), u;
    }
    function rr(t) {
      M.H = _n;
      var e = vt !== null && vt.next !== null;
      if (Ie = 0, Rt = vt = F = null, xu = false, yn = 0, Na = null, e) throw Error(r(300));
      t === null || Ht || (t = t.dependencies, t !== null && mu(t) && (Ht = true));
    }
    function or(t, e, l, a) {
      F = t;
      var n = 0;
      do {
        if (za && (Na = null), yn = 0, za = false, 25 <= n) throw Error(r(301));
        if (n += 1, Rt = vt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        M.H = Jr, u = e(l, a);
      } while (za);
      return u;
    }
    function Z0() {
      var t = M.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? hn(e) : e, t = t.useState()[0], (vt !== null ? vt.memoizedState : null) !== t && (F.flags |= 1024), e;
    }
    function yc() {
      var t = Au !== 0;
      return Au = 0, t;
    }
    function hc(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function gc(t) {
      if (xu) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        xu = false;
      }
      Ie = 0, Rt = vt = F = null, za = false, yn = Au = 0, Na = null;
    }
    function te() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Rt === null ? F.memoizedState = Rt = t : Rt = Rt.next = t, Rt;
    }
    function Ot() {
      if (vt === null) {
        var t = F.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = vt.next;
      var e = Rt === null ? F.memoizedState : Rt.next;
      if (e !== null) Rt = e, vt = t;
      else {
        if (t === null) throw F.alternate === null ? Error(r(467)) : Error(r(310));
        vt = t, t = {
          memoizedState: vt.memoizedState,
          baseState: vt.baseState,
          baseQueue: vt.baseQueue,
          queue: vt.queue,
          next: null
        }, Rt === null ? F.memoizedState = Rt = t : Rt = Rt.next = t;
      }
      return Rt;
    }
    function zu() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function hn(t) {
      var e = yn;
      return yn += 1, Na === null && (Na = []), t = er(Na, t, e), e = F, (Rt === null ? e.memoizedState : Rt.next) === null && (e = e.alternate, M.H = e === null || e.memoizedState === null ? Kr : jc), t;
    }
    function Nu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return hn(t);
        if (t.$$typeof === k) return Wt(t);
      }
      throw Error(r(438, String(t)));
    }
    function _c(t) {
      var e = null, l = F.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var a = F.alternate;
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
      }), l === null && (l = zu(), F.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = sl;
      return e.index++, l;
    }
    function Pe(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Eu(t) {
      var e = Ot();
      return bc(e, vt, t);
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
        var s = i = null, m = null, S = e, T = false;
        do {
          var U = S.lane & -536870913;
          if (U !== S.lane ? (at & U) === U : (Ie & U) === U) {
            var x = S.revertLane;
            if (x === 0) m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }), U === va && (T = true);
            else if ((Ie & x) === x) {
              S = S.next, x === va && (T = true);
              continue;
            } else U = {
              lane: 0,
              revertLane: S.revertLane,
              gesture: null,
              action: S.action,
              hasEagerState: S.hasEagerState,
              eagerState: S.eagerState,
              next: null
            }, m === null ? (s = m = U, i = u) : m = m.next = U, F.lanes |= x, zl |= x;
            U = S.action, Wl && l(u, U), u = S.hasEagerState ? S.eagerState : l(u, U);
          } else x = {
            lane: U,
            revertLane: S.revertLane,
            gesture: S.gesture,
            action: S.action,
            hasEagerState: S.hasEagerState,
            eagerState: S.eagerState,
            next: null
          }, m === null ? (s = m = x, i = u) : m = m.next = x, F.lanes |= U, zl |= U;
          S = S.next;
        } while (S !== null && S !== e);
        if (m === null ? i = u : m.next = s, !me(u, t.memoizedState) && (Ht = true, T && (l = pa, l !== null))) throw l;
        t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function vc(t) {
      var e = Ot(), l = e.queue;
      if (l === null) throw Error(r(311));
      l.lastRenderedReducer = t;
      var a = l.dispatch, n = l.pending, u = e.memoizedState;
      if (n !== null) {
        l.pending = null;
        var i = n = n.next;
        do
          u = t(u, i.action), i = i.next;
        while (i !== n);
        me(u, e.memoizedState) || (Ht = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function dr(t, e, l) {
      var a = F, n = Ot(), u = it;
      if (u) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else l = e();
      var i = !me((vt || n).memoizedState, l);
      if (i && (n.memoizedState = l, Ht = true), n = n.queue, xc(hr.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== e || i || Rt !== null && Rt.memoizedState.tag & 1) {
        if (a.flags |= 2048, Ea(9, {
          destroy: void 0
        }, yr.bind(null, a, n, l, e), null), xt === null) throw Error(r(349));
        u || (Ie & 127) !== 0 || mr(a, e, l);
      }
      return l;
    }
    function mr(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = F.updateQueue, e === null ? (e = zu(), F.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function yr(t, e, l, a) {
      e.value = l, e.getSnapshot = a, gr(e) && _r(t);
    }
    function hr(t, e, l) {
      return l(function() {
        gr(e) && _r(t);
      });
    }
    function gr(t) {
      var e = t.getSnapshot;
      t = t.value;
      try {
        var l = e();
        return !me(t, l);
      } catch {
        return true;
      }
    }
    function _r(t) {
      var e = Ll(t, 2);
      e !== null && fe(e, t, 2);
    }
    function pc(t) {
      var e = te();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), Wl) {
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
        lastRenderedReducer: Pe,
        lastRenderedState: t
      }, e;
    }
    function br(t, e, l, a) {
      return t.baseState = l, bc(t, vt, typeof a == "function" ? a : Pe);
    }
    function V0(t, e, l, a, n) {
      if (Mu(t)) throw Error(r(485));
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
        M.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, vr(e, u)) : (u.next = l.next, e.pending = l.next = u);
      }
    }
    function vr(t, e) {
      var l = e.action, a = e.payload, n = t.state;
      if (e.isTransition) {
        var u = M.T, i = {};
        M.T = i;
        try {
          var s = l(n, a), m = M.S;
          m !== null && m(i, s), pr(t, e, s);
        } catch (S) {
          Sc(t, e, S);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), M.T = u;
        }
      } else try {
        u = l(n, a), pr(t, e, u);
      } catch (S) {
        Sc(t, e, S);
      }
    }
    function pr(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        Sr(t, e, a);
      }, function(a) {
        return Sc(t, e, a);
      }) : Sr(t, e, l);
    }
    function Sr(t, e, l) {
      e.status = "fulfilled", e.value = l, xr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, vr(t, l)));
    }
    function Sc(t, e, l) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = l, xr(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function xr(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Ar(t, e) {
      return e;
    }
    function zr(t, e) {
      if (it) {
        var l = xt.formState;
        if (l !== null) {
          t: {
            var a = F;
            if (it) {
              if (At) {
                e: {
                  for (var n = At, u = Ue; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break e;
                    }
                    if (n = Ce(n.nextSibling), n === null) {
                      n = null;
                      break e;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  At = Ce(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              hl(a);
            }
            a = false;
          }
          a && (e = l[0]);
        }
      }
      return l = te(), l.memoizedState = l.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ar,
        lastRenderedState: e
      }, l.queue = a, l = Qr.bind(null, F, a), a.dispatch = l, a = pc(false), u = Tc.bind(null, F, false, a.queue), a = te(), n = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = n, l = V0.bind(null, F, n, u, l), n.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function Nr(t) {
      var e = Ot();
      return Er(e, vt, t);
    }
    function Er(t, e, l) {
      if (e = bc(t, e, Ar)[0], t = Eu(Pe)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = hn(e);
      } catch (i) {
        throw i === Sa ? gu : i;
      }
      else a = e;
      e = Ot();
      var n = e.queue, u = n.dispatch;
      return l !== e.memoizedState && (F.flags |= 2048, Ea(9, {
        destroy: void 0
      }, K0.bind(null, n, l), null)), [
        a,
        u,
        t
      ];
    }
    function K0(t, e) {
      t.action = e;
    }
    function Tr(t) {
      var e = Ot(), l = vt;
      if (l !== null) return Er(e, l, t);
      Ot(), e = e.memoizedState, l = Ot();
      var a = l.queue.dispatch;
      return l.memoizedState = t, [
        e,
        a,
        false
      ];
    }
    function Ea(t, e, l, a) {
      return t = {
        tag: t,
        create: l,
        deps: a,
        inst: e,
        next: null
      }, e = F.updateQueue, e === null && (e = zu(), F.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function jr() {
      return Ot().memoizedState;
    }
    function Tu(t, e, l, a) {
      var n = te();
      F.flags |= t, n.memoizedState = Ea(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function ju(t, e, l, a) {
      var n = Ot();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      vt !== null && a !== null && dc(a, vt.memoizedState.deps) ? n.memoizedState = Ea(e, u, l, a) : (F.flags |= t, n.memoizedState = Ea(1 | e, u, l, a));
    }
    function Mr(t, e) {
      Tu(8390656, 8, t, e);
    }
    function xc(t, e) {
      ju(2048, 8, t, e);
    }
    function J0(t) {
      F.flags |= 4;
      var e = F.updateQueue;
      if (e === null) e = zu(), F.updateQueue = e, e.events = [
        t
      ];
      else {
        var l = e.events;
        l === null ? e.events = [
          t
        ] : l.push(t);
      }
    }
    function wr(t) {
      var e = Ot().memoizedState;
      return J0({
        ref: e,
        nextImpl: t
      }), function() {
        if ((ot & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function Or(t, e) {
      return ju(4, 2, t, e);
    }
    function Ur(t, e) {
      return ju(4, 4, t, e);
    }
    function Dr(t, e) {
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
    function Cr(t, e, l) {
      l = l != null ? l.concat([
        t
      ]) : null, ju(4, 4, Dr.bind(null, e, t), l);
    }
    function Ac() {
    }
    function Rr(t, e) {
      var l = Ot();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      return e !== null && dc(e, a[1]) ? a[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function Hr(t, e) {
      var l = Ot();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      if (e !== null && dc(e, a[1])) return a[0];
      if (a = t(), Wl) {
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
    function zc(t, e, l) {
      return l === void 0 || (Ie & 1073741824) !== 0 && (at & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = qo(), F.lanes |= t, zl |= t, l);
    }
    function Br(t, e, l, a) {
      return me(l, e) ? l : Aa.current !== null ? (t = zc(t, l, a), me(t, e) || (Ht = true), t) : (Ie & 42) === 0 || (Ie & 1073741824) !== 0 && (at & 261930) === 0 ? (Ht = true, t.memoizedState = l) : (t = qo(), F.lanes |= t, zl |= t, e);
    }
    function qr(t, e, l, a, n) {
      var u = H.p;
      H.p = u !== 0 && 8 > u ? u : 8;
      var i = M.T, s = {};
      M.T = s, Tc(t, false, e, l);
      try {
        var m = n(), S = M.S;
        if (S !== null && S(s, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var T = X0(m, a);
          gn(t, e, T, ve(t));
        } else gn(t, e, a, ve(t));
      } catch (U) {
        gn(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: U
        }, ve());
      } finally {
        H.p = u, i !== null && s.types !== null && (i.types = s.types), M.T = i;
      }
    }
    function k0() {
    }
    function Nc(t, e, l, a) {
      if (t.tag !== 5) throw Error(r(476));
      var n = Yr(t).queue;
      qr(t, n, e, Z, l === null ? k0 : function() {
        return Lr(t), l(a);
      });
    }
    function Yr(t) {
      var e = t.memoizedState;
      if (e !== null) return e;
      e = {
        memoizedState: Z,
        baseState: Z,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Pe,
          lastRenderedState: Z
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
          lastRenderedReducer: Pe,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Lr(t) {
      var e = Yr(t);
      e.next === null && (e = t.alternate.memoizedState), gn(t, e.next.queue, {}, ve());
    }
    function Ec() {
      return Wt(Dn);
    }
    function Gr() {
      return Ot().memoizedState;
    }
    function Xr() {
      return Ot().memoizedState;
    }
    function W0(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = ve();
            t = bl(l);
            var a = vl(e, t, l);
            a !== null && (fe(a, e, l), on(a, e, l)), e = {
              cache: ec()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function F0(t, e, l) {
      var a = ve();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Mu(t) ? Zr(e, l) : (l = Zi(t, e, l, a), l !== null && (fe(l, t, a), Vr(l, e, a)));
    }
    function Qr(t, e, l) {
      var a = ve();
      gn(t, e, l, a);
    }
    function gn(t, e, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (Mu(t)) Zr(e, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
          var i = e.lastRenderedState, s = u(i, l);
          if (n.hasEagerState = true, n.eagerState = s, me(s, i)) return su(t, e, n, 0), xt === null && fu(), false;
        } catch {
        }
        if (l = Zi(t, e, n, a), l !== null) return fe(l, t, a), Vr(l, e, a), true;
      }
      return false;
    }
    function Tc(t, e, l, a) {
      if (a = {
        lane: 2,
        revertLane: uf(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, Mu(t)) {
        if (e) throw Error(r(479));
      } else e = Zi(t, l, a, 2), e !== null && fe(e, t, 2);
    }
    function Mu(t) {
      var e = t.alternate;
      return t === F || e !== null && e === F;
    }
    function Zr(t, e) {
      za = xu = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function Vr(t, e, l) {
      if ((l & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Ff(t, l);
      }
    }
    var _n = {
      readContext: Wt,
      use: Nu,
      useCallback: jt,
      useContext: jt,
      useEffect: jt,
      useImperativeHandle: jt,
      useLayoutEffect: jt,
      useInsertionEffect: jt,
      useMemo: jt,
      useReducer: jt,
      useRef: jt,
      useState: jt,
      useDebugValue: jt,
      useDeferredValue: jt,
      useTransition: jt,
      useSyncExternalStore: jt,
      useId: jt,
      useHostTransitionStatus: jt,
      useFormState: jt,
      useActionState: jt,
      useOptimistic: jt,
      useMemoCache: jt,
      useCacheRefresh: jt
    };
    _n.useEffectEvent = jt;
    var Kr = {
      readContext: Wt,
      use: Nu,
      useCallback: function(t, e) {
        return te().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: Wt,
      useEffect: Mr,
      useImperativeHandle: function(t, e, l) {
        l = l != null ? l.concat([
          t
        ]) : null, Tu(4194308, 4, Dr.bind(null, e, t), l);
      },
      useLayoutEffect: function(t, e) {
        return Tu(4194308, 4, t, e);
      },
      useInsertionEffect: function(t, e) {
        Tu(4, 2, t, e);
      },
      useMemo: function(t, e) {
        var l = te();
        e = e === void 0 ? null : e;
        var a = t();
        if (Wl) {
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
        var a = te();
        if (l !== void 0) {
          var n = l(e);
          if (Wl) {
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
        }, a.queue = t, t = t.dispatch = F0.bind(null, F, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = te();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = pc(t);
        var e = t.queue, l = Qr.bind(null, F, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: Ac,
      useDeferredValue: function(t, e) {
        var l = te();
        return zc(l, t, e);
      },
      useTransition: function() {
        var t = pc(false);
        return t = qr.bind(null, F, t.queue, true, false), te().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var a = F, n = te();
        if (it) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (l = e(), xt === null) throw Error(r(349));
          (at & 127) !== 0 || mr(a, e, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, Mr(hr.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, Ea(9, {
          destroy: void 0
        }, yr.bind(null, a, u, l, e), null), l;
      },
      useId: function() {
        var t = te(), e = xt.identifierPrefix;
        if (it) {
          var l = Le, a = Ye;
          l = (a & ~(1 << 32 - de(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = Au++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = Q0++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: Ec,
      useFormState: zr,
      useActionState: zr,
      useOptimistic: function(t) {
        var e = te();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = Tc.bind(null, F, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: _c,
      useCacheRefresh: function() {
        return te().memoizedState = W0.bind(null, F);
      },
      useEffectEvent: function(t) {
        var e = te(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((ot & 2) !== 0) throw Error(r(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, jc = {
      readContext: Wt,
      use: Nu,
      useCallback: Rr,
      useContext: Wt,
      useEffect: xc,
      useImperativeHandle: Cr,
      useInsertionEffect: Or,
      useLayoutEffect: Ur,
      useMemo: Hr,
      useReducer: Eu,
      useRef: jr,
      useState: function() {
        return Eu(Pe);
      },
      useDebugValue: Ac,
      useDeferredValue: function(t, e) {
        var l = Ot();
        return Br(l, vt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Eu(Pe)[0], e = Ot().memoizedState;
        return [
          typeof t == "boolean" ? t : hn(t),
          e
        ];
      },
      useSyncExternalStore: dr,
      useId: Gr,
      useHostTransitionStatus: Ec,
      useFormState: Nr,
      useActionState: Nr,
      useOptimistic: function(t, e) {
        var l = Ot();
        return br(l, vt, t, e);
      },
      useMemoCache: _c,
      useCacheRefresh: Xr
    };
    jc.useEffectEvent = wr;
    var Jr = {
      readContext: Wt,
      use: Nu,
      useCallback: Rr,
      useContext: Wt,
      useEffect: xc,
      useImperativeHandle: Cr,
      useInsertionEffect: Or,
      useLayoutEffect: Ur,
      useMemo: Hr,
      useReducer: vc,
      useRef: jr,
      useState: function() {
        return vc(Pe);
      },
      useDebugValue: Ac,
      useDeferredValue: function(t, e) {
        var l = Ot();
        return vt === null ? zc(l, t, e) : Br(l, vt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = vc(Pe)[0], e = Ot().memoizedState;
        return [
          typeof t == "boolean" ? t : hn(t),
          e
        ];
      },
      useSyncExternalStore: dr,
      useId: Gr,
      useHostTransitionStatus: Ec,
      useFormState: Tr,
      useActionState: Tr,
      useOptimistic: function(t, e) {
        var l = Ot();
        return vt !== null ? br(l, vt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: _c,
      useCacheRefresh: Xr
    };
    Jr.useEffectEvent = wr;
    function Mc(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : C({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var wc = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = ve(), n = bl(a);
        n.payload = e, l != null && (n.callback = l), e = vl(t, n, a), e !== null && (fe(e, t, a), on(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = ve(), n = bl(a);
        n.tag = 1, n.payload = e, l != null && (n.callback = l), e = vl(t, n, a), e !== null && (fe(e, t, a), on(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = ve(), a = bl(l);
        a.tag = 2, e != null && (a.callback = e), e = vl(t, a, l), e !== null && (fe(e, t, l), on(e, t, l));
      }
    };
    function kr(t, e, l, a, n, u, i) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !ln(l, a) || !ln(n, u) : true;
    }
    function Wr(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && wc.enqueueReplaceState(e, e.state, null);
    }
    function Fl(t, e) {
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
    function Fr(t) {
      cu(t);
    }
    function $r(t) {
      console.error(t);
    }
    function Ir(t) {
      cu(t);
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
    function Pr(t, e, l) {
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
    function Oc(t, e, l) {
      return l = bl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        wu(t, e);
      }, l;
    }
    function to(t) {
      return t = bl(t), t.tag = 3, t;
    }
    function eo(t, e, l, a) {
      var n = l.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        t.payload = function() {
          return n(u);
        }, t.callback = function() {
          Pr(e, l, a);
        };
      }
      var i = l.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (t.callback = function() {
        Pr(e, l, a), typeof n != "function" && (Nl === null ? Nl = /* @__PURE__ */ new Set([
          this
        ]) : Nl.add(this));
        var s = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: s !== null ? s : ""
        });
      });
    }
    function $0(t, e, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && ba(e, l, n, true), l = he.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return De === null ? Xu() : l.alternate === null && Mt === 0 && (Mt = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === _u ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), lf(t, a, n)), false;
            case 22:
              return l.flags |= 65536, a === _u ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), lf(t, a, n)), false;
          }
          throw Error(r(435, l.tag));
        }
        return lf(t, a, n), Xu(), false;
      }
      if (it) return e = he.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== Fi && (t = Error(r(422), {
        cause: a
      }), un(Me(t, l)))) : (a !== Fi && (e = Error(r(423), {
        cause: a
      }), un(Me(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Me(a, l), n = Oc(t.stateNode, a, n), cc(t, n), Mt !== 4 && (Mt = 2)), false;
      var u = Error(r(520), {
        cause: a
      });
      if (u = Me(u, l), Nn === null ? Nn = [
        u
      ] : Nn.push(u), Mt !== 4 && (Mt = 2), e === null) return true;
      a = Me(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Oc(l.stateNode, a, t), cc(l, t), false;
          case 1:
            if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Nl === null || !Nl.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = to(n), eo(n, t, l, a), cc(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Uc = Error(r(461)), Ht = false;
    function Ft(t, e, l, a) {
      e.child = t === null ? ur(e, null, l, a) : kl(e, t.child, l, a);
    }
    function lo(t, e, l, a, n) {
      l = l.render;
      var u = e.ref;
      if ("ref" in a) {
        var i = {};
        for (var s in a) s !== "ref" && (i[s] = a[s]);
      } else i = a;
      return Zl(e), a = mc(t, e, l, i, u, n), s = yc(), t !== null && !Ht ? (hc(t, e, n), tl(t, e, n)) : (it && s && ki(e), e.flags |= 1, Ft(t, e, a, n), e.child);
    }
    function ao(t, e, l, a, n) {
      if (t === null) {
        var u = l.type;
        return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, no(t, e, u, a, n)) : (t = ou(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !Lc(t, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : ln, l(i, a) && t.ref === e.ref) return tl(t, e, n);
      }
      return e.flags |= 1, t = ke(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function no(t, e, l, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (ln(u, a) && t.ref === e.ref) if (Ht = false, e.pendingProps = a = u, Lc(t, n)) (t.flags & 131072) !== 0 && (Ht = true);
        else return e.lanes = t.lanes, tl(t, e, n);
      }
      return Dc(t, e, l, a, n);
    }
    function uo(t, e, l, a) {
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
          return io(t, e, u, l, a);
        }
        if ((l & 536870912) !== 0) e.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, t !== null && hu(e, u !== null ? u.cachePool : null), u !== null ? fr(e, u) : sc(), sr(e);
        else return a = e.lanes = 536870912, io(t, e, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (hu(e, u.cachePool), fr(e, u), Sl(), e.memoizedState = null) : (t !== null && hu(e, null), sc(), Sl());
      return Ft(t, e, n, l), e.child;
    }
    function bn(t, e) {
      return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), e.sibling;
    }
    function io(t, e, l, a, n) {
      var u = ac();
      return u = u === null ? null : {
        parent: Ct._currentValue,
        pool: u
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, t !== null && hu(e, null), sc(), sr(e), t !== null && ba(t, e, a, true), e.childLanes = n, null;
    }
    function Ou(t, e) {
      return e = Du({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function co(t, e, l) {
      return kl(e, t.child, null, l), t = Ou(e, e.pendingProps), t.flags |= 2, ge(e), e.memoizedState = null, t;
    }
    function I0(t, e, l) {
      var a = e.pendingProps, n = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (it) {
          if (a.mode === "hidden") return t = Ou(e, a), e.lanes = 536870912, bn(null, t);
          if (oc(e), (t = At) ? (t = pd(t, Ue), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: ml !== null ? {
              id: Ye,
              overflow: Le
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Zs(t), l.return = e, e.child = l, kt = e, At = null)) : t = null, t === null) throw hl(e);
          return e.lanes = 536870912, null;
        }
        return Ou(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (oc(e), n) if (e.flags & 256) e.flags &= -257, e = co(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
        else if (Ht || ba(t, e, l, false), n = (l & t.childLanes) !== 0, Ht || n) {
          if (a = xt, a !== null && (i = $f(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Ll(t, i), fe(a, t, i), Uc;
          Xu(), e = co(t, e, l);
        } else t = u.treeContext, At = Ce(i.nextSibling), kt = e, it = true, yl = null, Ue = false, t !== null && Js(e, t), e = Ou(e, a), e.flags |= 4096;
        return e;
      }
      return t = ke(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Uu(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(r(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Dc(t, e, l, a, n) {
      return Zl(e), l = mc(t, e, l, a, void 0, n), a = yc(), t !== null && !Ht ? (hc(t, e, n), tl(t, e, n)) : (it && a && ki(e), e.flags |= 1, Ft(t, e, l, n), e.child);
    }
    function fo(t, e, l, a, n, u) {
      return Zl(e), e.updateQueue = null, l = or(e, a, l, n), rr(t), a = yc(), t !== null && !Ht ? (hc(t, e, u), tl(t, e, u)) : (it && a && ki(e), e.flags |= 1, Ft(t, e, l, u), e.child);
    }
    function so(t, e, l, a, n) {
      if (Zl(e), e.stateNode === null) {
        var u = ya, i = l.contextType;
        typeof i == "object" && i !== null && (u = Wt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, uc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Wt(i) : ya, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Mc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && wc.enqueueReplaceState(u, u.state, null), mn(e, a, u, n), dn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var s = e.memoizedProps, m = Fl(l, s);
        u.props = m;
        var S = u.context, T = l.contextType;
        i = ya, typeof T == "object" && T !== null && (i = Wt(T));
        var U = l.getDerivedStateFromProps;
        T = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", s = e.pendingProps !== s, T || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s || S !== i) && Wr(e, u, a, i), _l = false;
        var x = e.memoizedState;
        u.state = x, mn(e, a, u, n), dn(), S = e.memoizedState, s || x !== S || _l ? (typeof U == "function" && (Mc(e, l, U, a), S = e.memoizedState), (m = _l || kr(e, l, m, a, x, S, i)) ? (T || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = S), u.props = a, u.state = S, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, ic(t, e), i = e.memoizedProps, T = Fl(l, i), u.props = T, U = e.pendingProps, x = u.context, S = l.contextType, m = ya, typeof S == "object" && S !== null && (m = Wt(S)), s = l.getDerivedStateFromProps, (S = typeof s == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== U || x !== m) && Wr(e, u, a, m), _l = false, x = e.memoizedState, u.state = x, mn(e, a, u, n), dn();
        var z = e.memoizedState;
        i !== U || x !== z || _l || t !== null && t.dependencies !== null && mu(t.dependencies) ? (typeof s == "function" && (Mc(e, l, s, a), z = e.memoizedState), (T = _l || kr(e, l, T, a, x, z, m) || t !== null && t.dependencies !== null && mu(t.dependencies)) ? (S || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, m)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = m, a = T) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && x === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Uu(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = kl(e, t.child, null, n), e.child = kl(e, null, l, n)) : Ft(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = tl(t, e, n), t;
    }
    function ro(t, e, l, a) {
      return Xl(), e.flags |= 256, Ft(t, e, l, a), e.child;
    }
    var Cc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Rc(t) {
      return {
        baseLanes: t,
        cachePool: Ps()
      };
    }
    function Hc(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= be), t;
    }
    function oo(t, e, l) {
      var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
      if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (wt.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (it) {
          if (n ? pl(e) : Sl(), (t = At) ? (t = pd(t, Ue), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: ml !== null ? {
              id: Ye,
              overflow: Le
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Zs(t), l.return = e, e.child = l, kt = e, At = null)) : t = null, t === null) throw hl(e);
          return vf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var s = a.children;
        return a = a.fallback, n ? (Sl(), n = e.mode, s = Du({
          mode: "hidden",
          children: s
        }, n), a = Gl(a, n, l, null), s.return = e, a.return = e, s.sibling = a, e.child = s, a = e.child, a.memoizedState = Rc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Cc, bn(null, a)) : (pl(e), Bc(e, s));
      }
      var m = t.memoizedState;
      if (m !== null && (s = m.dehydrated, s !== null)) {
        if (u) e.flags & 256 ? (pl(e), e.flags &= -257, e = qc(t, e, l)) : e.memoizedState !== null ? (Sl(), e.child = t.child, e.flags |= 128, e = null) : (Sl(), s = a.fallback, n = e.mode, a = Du({
          mode: "visible",
          children: a.children
        }, n), s = Gl(s, n, l, null), s.flags |= 2, a.return = e, s.return = e, a.sibling = s, e.child = a, kl(e, t.child, null, l), a = e.child, a.memoizedState = Rc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Cc, e = bn(null, a));
        else if (pl(e), vf(s)) {
          if (i = s.nextSibling && s.nextSibling.dataset, i) var S = i.dgst;
          i = S, a = Error(r(419)), a.stack = "", a.digest = i, un({
            value: a,
            source: null,
            stack: null
          }), e = qc(t, e, l);
        } else if (Ht || ba(t, e, l, false), i = (l & t.childLanes) !== 0, Ht || i) {
          if (i = xt, i !== null && (a = $f(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Ll(t, a), fe(i, t, a), Uc;
          bf(s) || Xu(), e = qc(t, e, l);
        } else bf(s) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, At = Ce(s.nextSibling), kt = e, it = true, yl = null, Ue = false, t !== null && Js(e, t), e = Bc(e, a.children), e.flags |= 4096);
        return e;
      }
      return n ? (Sl(), s = a.fallback, n = e.mode, m = t.child, S = m.sibling, a = ke(m, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = m.subtreeFlags & 65011712, S !== null ? s = ke(S, s) : (s = Gl(s, n, l, null), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, bn(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = Rc(l) : (n = s.cachePool, n !== null ? (m = Ct._currentValue, n = n.parent !== m ? {
        parent: m,
        pool: m
      } : n) : n = Ps(), s = {
        baseLanes: s.baseLanes | l,
        cachePool: n
      }), a.memoizedState = s, a.childLanes = Hc(t, i, l), e.memoizedState = Cc, bn(t.child, a)) : (pl(e), l = t.child, t = l.sibling, l = ke(l, {
        mode: "visible",
        children: a.children
      }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
        t
      ], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function Bc(t, e) {
      return e = Du({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function Du(t, e) {
      return t = ye(22, t, null, e), t.lanes = 0, t;
    }
    function qc(t, e, l) {
      return kl(e, t.child, null, l), t = Bc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
    }
    function mo(t, e, l) {
      t.lanes |= e;
      var a = t.alternate;
      a !== null && (a.lanes |= e), Pi(t.return, e, l);
    }
    function Yc(t, e, l, a, n, u) {
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
    function yo(t, e, l) {
      var a = e.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = wt.current, s = (i & 2) !== 0;
      if (s ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, R(wt, i), Ft(t, e, a, l), a = it ? nn : 0, !s && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && mo(t, l, e);
        else if (t.tag === 19) mo(t, l, e);
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
          for (l = e.child, n = null; l !== null; ) t = l.alternate, t !== null && Su(t) === null && (n = l), l = l.sibling;
          l = n, l === null ? (n = e.child, e.child = null) : (n = l.sibling, l.sibling = null), Yc(e, false, n, l, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, n = e.child, e.child = null; n !== null; ) {
            if (t = n.alternate, t !== null && Su(t) === null) {
              e.child = n;
              break;
            }
            t = n.sibling, n.sibling = l, l = n, n = t;
          }
          Yc(e, true, l, null, u, a);
          break;
        case "together":
          Yc(e, false, null, null, void 0, a);
          break;
        default:
          e.memoizedState = null;
      }
      return e.child;
    }
    function tl(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), zl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (ba(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(r(153));
      if (e.child !== null) {
        for (t = e.child, l = ke(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = ke(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function Lc(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && mu(t)));
    }
    function P0(t, e, l) {
      switch (e.tag) {
        case 3:
          Vt(e, e.stateNode.containerInfo), gl(e, Ct, t.memoizedState.cache), Xl();
          break;
        case 27:
        case 5:
          Kt(e);
          break;
        case 4:
          Vt(e, e.stateNode.containerInfo);
          break;
        case 10:
          gl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, oc(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (pl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? oo(t, e, l) : (pl(e), t = tl(t, e, l), t !== null ? t.sibling : null);
          pl(e);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (ba(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
            if (a) return yo(t, e, l);
            e.flags |= 128;
          }
          if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), R(wt, wt.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, uo(t, e, l, e.pendingProps);
        case 24:
          gl(e, Ct, t.memoizedState.cache);
      }
      return tl(t, e, l);
    }
    function ho(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Ht = true;
      else {
        if (!Lc(t, l) && (e.flags & 128) === 0) return Ht = false, P0(t, e, l);
        Ht = (t.flags & 131072) !== 0;
      }
      else Ht = false, it && (e.flags & 1048576) !== 0 && Ks(e, nn, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = Kl(e.elementType), e.type = t, typeof t == "function") Vi(t) ? (a = Fl(t, a), e.tag = 1, e = so(null, e, t, a, l)) : (e.tag = 0, e = Dc(null, e, t, a, l));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === Tt) {
                  e.tag = 11, e = lo(null, e, t, a, l);
                  break t;
                } else if (n === I) {
                  e.tag = 14, e = ao(null, e, t, a, l);
                  break t;
                }
              }
              throw e = ze(t) || t, Error(r(306, e, ""));
            }
          }
          return e;
        case 0:
          return Dc(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, n = Fl(a, e.pendingProps), so(t, e, a, n, l);
        case 3:
          t: {
            if (Vt(e, e.stateNode.containerInfo), t === null) throw Error(r(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            n = u.element, ic(t, e), mn(e, a, null, l);
            var i = e.memoizedState;
            if (a = i.cache, gl(e, Ct, a), a !== u.cache && tc(e, [
              Ct
            ], l, true), dn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = ro(t, e, a, l);
              break t;
            } else if (a !== n) {
              n = Me(Error(r(424)), e), un(n), e = ro(t, e, a, l);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, At = Ce(t.firstChild), kt = e, it = true, yl = null, Ue = true, l = ur(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Xl(), a === n) {
                e = tl(t, e, l);
                break t;
              }
              Ft(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Uu(t, e), t === null ? (l = Ed(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : it || (l = e.type, t = e.pendingProps, a = Wu(W.current).createElement(l), a[Jt] = e, a[le] = t, $t(a, l, t), Gt(a), e.stateNode = a) : e.memoizedState = Ed(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return Kt(e), t === null && it && (a = e.stateNode = Ad(e.type, e.pendingProps, W.current), kt = e, Ue = true, n = At, Ml(e.type) ? (pf = n, At = Ce(a.firstChild)) : At = n), Ft(t, e, e.pendingProps.children, l), Uu(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && it && ((n = a = At) && (a = My(a, e.type, e.pendingProps, Ue), a !== null ? (e.stateNode = a, kt = e, At = Ce(a.firstChild), Ue = false, n = true) : n = false), n || hl(e)), Kt(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, hf(n, u) ? a = null : i !== null && hf(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = mc(t, e, Z0, null, null, l), Dn._currentValue = n), Uu(t, e), Ft(t, e, a, l), e.child;
        case 6:
          return t === null && it && ((t = l = At) && (l = wy(l, e.pendingProps, Ue), l !== null ? (e.stateNode = l, kt = e, At = null, t = true) : t = false), t || hl(e)), null;
        case 13:
          return oo(t, e, l);
        case 4:
          return Vt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = kl(e, null, a, l) : Ft(t, e, a, l), e.child;
        case 11:
          return lo(t, e, e.type, e.pendingProps, l);
        case 7:
          return Ft(t, e, e.pendingProps, l), e.child;
        case 8:
          return Ft(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return Ft(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, gl(e, e.type, a.value), Ft(t, e, a.children, l), e.child;
        case 9:
          return n = e.type._context, a = e.pendingProps.children, Zl(e), n = Wt(n), a = a(n), e.flags |= 1, Ft(t, e, a, l), e.child;
        case 14:
          return ao(t, e, e.type, e.pendingProps, l);
        case 15:
          return no(t, e, e.type, e.pendingProps, l);
        case 19:
          return yo(t, e, l);
        case 31:
          return I0(t, e, l);
        case 22:
          return uo(t, e, l, e.pendingProps);
        case 24:
          return Zl(e), a = Wt(Ct), t === null ? (n = ac(), n === null && (n = xt, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
            parent: a,
            cache: n
          }, uc(e), gl(e, Ct, n)) : ((t.lanes & l) !== 0 && (ic(t, e), mn(e, null, null, l), dn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), gl(e, Ct, a)) : (a = u.cache, gl(e, Ct, a), a !== n.cache && tc(e, [
            Ct
          ], l, true))), Ft(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(r(156, e.tag));
    }
    function el(t) {
      t.flags |= 4;
    }
    function Gc(t, e, l, a, n) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (Xo()) t.flags |= 8192;
        else throw Jl = _u, nc;
      } else t.flags &= -16777217;
    }
    function go(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Od(e)) if (Xo()) t.flags |= 8192;
      else throw Jl = _u, nc;
    }
    function Cu(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? kf() : 536870912, t.lanes |= e, wa |= e);
    }
    function vn(t, e) {
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
    function zt(t) {
      var e = t.alternate !== null && t.alternate.child === t.child, l = 0, a = 0;
      if (e) for (var n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = t, n = n.sibling;
      else for (n = t.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = t, n = n.sibling;
      return t.subtreeFlags |= a, t.childLanes = l, e;
    }
    function ty(t, e, l) {
      var a = e.pendingProps;
      switch (Wi(e), e.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return zt(e), null;
        case 1:
          return zt(e), null;
        case 3:
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), $e(Ct), Nt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (_a(e) ? el(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, $i())), zt(e), null;
        case 26:
          var n = e.type, u = e.memoizedState;
          return t === null ? (el(e), u !== null ? (zt(e), go(e, u)) : (zt(e), Gc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (el(e), zt(e), go(e, u)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && el(e), zt(e), Gc(e, n, t, a, l)), null;
        case 27:
          if (Ze(e), l = W.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && el(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return zt(e), null;
            }
            t = B.current, _a(e) ? ks(e) : (t = Ad(n, a, l), e.stateNode = t, el(e));
          }
          return zt(e), null;
        case 5:
          if (Ze(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && el(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return zt(e), null;
            }
            if (u = B.current, _a(e)) ks(e);
            else {
              var i = Wu(W.current);
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
              u[Jt] = e, u[le] = a;
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
              t: switch ($t(u, n, a), n) {
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
              a && el(e);
            }
          }
          return zt(e), Gc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && el(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
            if (t = W.current, _a(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, n = kt, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[Jt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || dd(t.nodeValue, l)), t || hl(e, true);
            } else t = Wu(t).createTextNode(a), t[Jt] = e, e.stateNode = t;
          }
          return zt(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = _a(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(r(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                t[Jt] = e;
              } else Xl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              zt(e), t = false;
            } else l = $i(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (ge(e), e) : (ge(e), null);
            if ((e.flags & 128) !== 0) throw Error(r(558));
          }
          return zt(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = _a(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(r(318));
                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
                n[Jt] = e;
              } else Xl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              zt(e), n = false;
            } else n = $i(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return e.flags & 256 ? (ge(e), e) : (ge(e), null);
          }
          return ge(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Cu(e, e.updateQueue), zt(e), null);
        case 4:
          return Nt(), t === null && rf(e.stateNode.containerInfo), zt(e), null;
        case 10:
          return $e(e.type), zt(e), null;
        case 19:
          if (p(wt), a = e.memoizedState, a === null) return zt(e), null;
          if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) vn(a, false);
          else {
            if (Mt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (u = Su(t), u !== null) {
                for (e.flags |= 128, vn(a, false), t = u.updateQueue, e.updateQueue = t, Cu(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Qs(l, t), l = l.sibling;
                return R(wt, wt.current & 1 | 2), it && We(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && re() > Yu && (e.flags |= 128, n = true, vn(a, false), e.lanes = 4194304);
          }
          else {
            if (!n) if (t = Su(u), t !== null) {
              if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, Cu(e, t), vn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !it) return zt(e), null;
            } else 2 * re() - a.renderingStartTime > Yu && l !== 536870912 && (e.flags |= 128, n = true, vn(a, false), e.lanes = 4194304);
            a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = re(), t.sibling = null, l = wt.current, R(wt, n ? l & 1 | 2 : l & 1), it && We(e, a.treeForkCount), t) : (zt(e), null);
        case 22:
        case 23:
          return ge(e), rc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && Cu(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && p(Vl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), $e(Ct), zt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, e.tag));
    }
    function ey(t, e) {
      switch (Wi(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return $e(Ct), Nt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return Ze(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (ge(e), e.alternate === null) throw Error(r(340));
            Xl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(r(340));
            Xl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return p(wt), null;
        case 4:
          return Nt(), null;
        case 10:
          return $e(e.type), null;
        case 22:
        case 23:
          return ge(e), rc(), t !== null && p(Vl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return $e(Ct), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _o(t, e) {
      switch (Wi(e), e.tag) {
        case 3:
          $e(Ct), Nt();
          break;
        case 26:
        case 27:
        case 5:
          Ze(e);
          break;
        case 4:
          Nt();
          break;
        case 31:
          e.memoizedState !== null && ge(e);
          break;
        case 13:
          ge(e);
          break;
        case 19:
          p(wt);
          break;
        case 10:
          $e(e.type);
          break;
        case 22:
        case 23:
          ge(e), rc(), t !== null && p(Vl);
          break;
        case 24:
          $e(Ct);
      }
    }
    function pn(t, e) {
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
      } catch (s) {
        ht(e, e.return, s);
      }
    }
    function xl(t, e, l) {
      try {
        var a = e.updateQueue, n = a !== null ? a.lastEffect : null;
        if (n !== null) {
          var u = n.next;
          a = u;
          do {
            if ((a.tag & t) === t) {
              var i = a.inst, s = i.destroy;
              if (s !== void 0) {
                i.destroy = void 0, n = e;
                var m = l, S = s;
                try {
                  S();
                } catch (T) {
                  ht(n, m, T);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (T) {
        ht(e, e.return, T);
      }
    }
    function bo(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          cr(e, l);
        } catch (a) {
          ht(t, t.return, a);
        }
      }
    }
    function vo(t, e, l) {
      l.props = Fl(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        ht(t, e, a);
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
        ht(t, e, n);
      }
    }
    function Ge(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        ht(t, e, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        ht(t, e, n);
      }
      else l.current = null;
    }
    function po(t) {
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
        ht(t, t.return, n);
      }
    }
    function Xc(t, e, l) {
      try {
        var a = t.stateNode;
        Ay(a, t.type, l, e), a[le] = e;
      } catch (n) {
        ht(t, t.return, n);
      }
    }
    function So(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ml(t.type) || t.tag === 4;
    }
    function Qc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || So(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Ml(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Zc(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = Ke));
      else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (Zc(t, e, l), t = t.sibling; t !== null; ) Zc(t, e, l), t = t.sibling;
    }
    function Ru(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && Ml(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Ru(t, e, l), t = t.sibling; t !== null; ) Ru(t, e, l), t = t.sibling;
    }
    function xo(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
        $t(e, a, l), e[Jt] = t, e[le] = l;
      } catch (u) {
        ht(t, t.return, u);
      }
    }
    var ll = false, Bt = false, Vc = false, Ao = typeof WeakSet == "function" ? WeakSet : Set, Xt = null;
    function ly(t, e) {
      if (t = t.containerInfo, mf = li, t = Cs(t), qi(t)) {
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
            var i = 0, s = -1, m = -1, S = 0, T = 0, U = t, x = null;
            e: for (; ; ) {
              for (var z; U !== l || n !== 0 && U.nodeType !== 3 || (s = i + n), U !== u || a !== 0 && U.nodeType !== 3 || (m = i + a), U.nodeType === 3 && (i += U.nodeValue.length), (z = U.firstChild) !== null; ) x = U, U = z;
              for (; ; ) {
                if (U === t) break e;
                if (x === l && ++S === n && (s = i), x === u && ++T === a && (m = i), (z = U.nextSibling) !== null) break;
                U = x, x = U.parentNode;
              }
              U = z;
            }
            l = s === -1 || m === -1 ? null : {
              start: s,
              end: m
            };
          } else l = null;
        }
        l = l || {
          start: 0,
          end: 0
        };
      } else l = null;
      for (yf = {
        focusedElem: t,
        selectionRange: l
      }, li = false, Xt = e; Xt !== null; ) if (e = Xt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Xt = t;
      else for (; Xt !== null; ) {
        switch (e = Xt, u = e.alternate, t = e.flags, e.tag) {
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
                var Y = Fl(l.type, n);
                t = a.getSnapshotBeforeUpdate(Y, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (Q) {
                ht(l, l.return, Q);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) _f(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  _f(t);
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
          t.return = e.return, Xt = t;
          break;
        }
        Xt = e.return;
      }
    }
    function zo(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          nl(t, l), a & 4 && pn(5, l);
          break;
        case 1:
          if (nl(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (i) {
            ht(l, l.return, i);
          }
          else {
            var n = Fl(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              ht(l, l.return, i);
            }
          }
          a & 64 && bo(l), a & 512 && Sn(l, l.return);
          break;
        case 3:
          if (nl(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
            if (e = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                e = l.child.stateNode;
                break;
              case 1:
                e = l.child.stateNode;
            }
            try {
              cr(t, e);
            } catch (i) {
              ht(l, l.return, i);
            }
          }
          break;
        case 27:
          e === null && a & 4 && xo(l);
        case 26:
        case 5:
          nl(t, l), e === null && a & 4 && po(l), a & 512 && Sn(l, l.return);
          break;
        case 12:
          nl(t, l);
          break;
        case 31:
          nl(t, l), a & 4 && To(t, l);
          break;
        case 13:
          nl(t, l), a & 4 && jo(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = oy.bind(null, l), Oy(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || ll, !a) {
            e = e !== null && e.memoizedState !== null || Bt, n = ll;
            var u = Bt;
            ll = a, (Bt = e) && !u ? ul(t, l, (l.subtreeFlags & 8772) !== 0) : nl(t, l), ll = n, Bt = u;
          }
          break;
        case 30:
          break;
        default:
          nl(t, l);
      }
    }
    function No(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, No(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Si(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Et = null, ne = false;
    function al(t, e, l) {
      for (l = l.child; l !== null; ) Eo(t, e, l), l = l.sibling;
    }
    function Eo(t, e, l) {
      if (oe && typeof oe.onCommitFiberUnmount == "function") try {
        oe.onCommitFiberUnmount(Za, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          Bt || Ge(l, e), al(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          Bt || Ge(l, e);
          var a = Et, n = ne;
          Ml(l.type) && (Et = l.stateNode, ne = false), al(t, e, l), wn(l.stateNode), Et = a, ne = n;
          break;
        case 5:
          Bt || Ge(l, e);
        case 6:
          if (a = Et, n = ne, Et = null, al(t, e, l), Et = a, ne = n, Et !== null) if (ne) try {
            (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(l.stateNode);
          } catch (u) {
            ht(l, e, u);
          }
          else try {
            Et.removeChild(l.stateNode);
          } catch (u) {
            ht(l, e, u);
          }
          break;
        case 18:
          Et !== null && (ne ? (t = Et, bd(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), qa(t)) : bd(Et, l.stateNode));
          break;
        case 4:
          a = Et, n = ne, Et = l.stateNode.containerInfo, ne = true, al(t, e, l), Et = a, ne = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          xl(2, l, e), Bt || xl(4, l, e), al(t, e, l);
          break;
        case 1:
          Bt || (Ge(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && vo(l, e, a)), al(t, e, l);
          break;
        case 21:
          al(t, e, l);
          break;
        case 22:
          Bt = (a = Bt) || l.memoizedState !== null, al(t, e, l), Bt = a;
          break;
        default:
          al(t, e, l);
      }
    }
    function To(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          qa(t);
        } catch (l) {
          ht(e, e.return, l);
        }
      }
    }
    function jo(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        qa(t);
      } catch (l) {
        ht(e, e.return, l);
      }
    }
    function ay(t) {
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
    function Hu(t, e) {
      var l = ay(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = dy.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function ue(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, s = i;
        t: for (; s !== null; ) {
          switch (s.tag) {
            case 27:
              if (Ml(s.type)) {
                Et = s.stateNode, ne = false;
                break t;
              }
              break;
            case 5:
              Et = s.stateNode, ne = false;
              break t;
            case 3:
            case 4:
              Et = s.stateNode.containerInfo, ne = true;
              break t;
          }
          s = s.return;
        }
        if (Et === null) throw Error(r(160));
        Eo(u, i, n), Et = null, ne = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Mo(e, t), e = e.sibling;
    }
    var Be = null;
    function Mo(t, e) {
      var l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ue(e, t), ie(t), a & 4 && (xl(3, t, t.return), pn(3, t), xl(5, t, t.return));
          break;
        case 1:
          ue(e, t), ie(t), a & 512 && (Bt || l === null || Ge(l, l.return)), a & 64 && ll && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Be;
          if (ue(e, t), ie(t), a & 512 && (Bt || l === null || Ge(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                e: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Ja] || u[Jt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), $t(u, a, l), u[Jt] = t, Gt(u), a = u;
                    break t;
                  case "link":
                    var i = Md("link", "href", n).get(a + (l.href || ""));
                    if (i) {
                      for (var s = 0; s < i.length; s++) if (u = i[s], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(s, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), $t(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Md("meta", "content", n).get(a + (l.content || ""))) {
                      for (s = 0; s < i.length; s++) if (u = i[s], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(s, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), $t(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                u[Jt] = t, Gt(u), a = u;
              }
              t.stateNode = a;
            } else wd(n, t.type, t.stateNode);
            else t.stateNode = jd(n, a, t.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? wd(n, t.type, t.stateNode) : jd(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Xc(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          ue(e, t), ie(t), a & 512 && (Bt || l === null || Ge(l, l.return)), l !== null && a & 4 && Xc(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (ue(e, t), ie(t), a & 512 && (Bt || l === null || Ge(l, l.return)), t.flags & 32) {
            n = t.stateNode;
            try {
              ca(n, "");
            } catch (Y) {
              ht(t, t.return, Y);
            }
          }
          a & 4 && t.stateNode != null && (n = t.memoizedProps, Xc(t, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Vc = true);
          break;
        case 6:
          if (ue(e, t), ie(t), a & 4) {
            if (t.stateNode === null) throw Error(r(162));
            a = t.memoizedProps, l = t.stateNode;
            try {
              l.nodeValue = a;
            } catch (Y) {
              ht(t, t.return, Y);
            }
          }
          break;
        case 3:
          if (Iu = null, n = Be, Be = Fu(e.containerInfo), ue(e, t), Be = n, ie(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            qa(e.containerInfo);
          } catch (Y) {
            ht(t, t.return, Y);
          }
          Vc && (Vc = false, wo(t));
          break;
        case 4:
          a = Be, Be = Fu(t.stateNode.containerInfo), ue(e, t), ie(t), Be = a;
          break;
        case 12:
          ue(e, t), ie(t);
          break;
        case 31:
          ue(e, t), ie(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Hu(t, a)));
          break;
        case 13:
          ue(e, t), ie(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (qu = re()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Hu(t, a)));
          break;
        case 22:
          n = t.memoizedState !== null;
          var m = l !== null && l.memoizedState !== null, S = ll, T = Bt;
          if (ll = S || n, Bt = T || m, ue(e, t), Bt = T, ll = S, ie(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || ll || Bt || $l(t)), l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26) {
              if (l === null) {
                m = l = e;
                try {
                  if (u = m.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    s = m.stateNode;
                    var U = m.memoizedProps.style, x = U != null && U.hasOwnProperty("display") ? U.display : null;
                    s.style.display = x == null || typeof x == "boolean" ? "" : ("" + x).trim();
                  }
                } catch (Y) {
                  ht(m, m.return, Y);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (Y) {
                  ht(m, m.return, Y);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var z = m.stateNode;
                  n ? vd(z, true) : vd(m.stateNode, false);
                } catch (Y) {
                  ht(m, m.return, Y);
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
          a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Hu(t, l))));
          break;
        case 19:
          ue(e, t), ie(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Hu(t, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ue(e, t), ie(t);
      }
    }
    function ie(t) {
      var e = t.flags;
      if (e & 2) {
        try {
          for (var l, a = t.return; a !== null; ) {
            if (So(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(r(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Qc(t);
              Ru(t, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (ca(i, ""), l.flags &= -33);
              var s = Qc(t);
              Ru(t, s, i);
              break;
            case 3:
            case 4:
              var m = l.stateNode.containerInfo, S = Qc(t);
              Zc(t, S, m);
              break;
            default:
              throw Error(r(161));
          }
        } catch (T) {
          ht(t, t.return, T);
        }
        t.flags &= -3;
      }
      e & 4096 && (t.flags &= -4097);
    }
    function wo(t) {
      if (t.subtreeFlags & 1024) for (t = t.child; t !== null; ) {
        var e = t;
        wo(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling;
      }
    }
    function nl(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) zo(t, e.alternate, e), e = e.sibling;
    }
    function $l(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            xl(4, e, e.return), $l(e);
            break;
          case 1:
            Ge(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && vo(e, e.return, l), $l(e);
            break;
          case 27:
            wn(e.stateNode);
          case 26:
          case 5:
            Ge(e, e.return), $l(e);
            break;
          case 22:
            e.memoizedState === null && $l(e);
            break;
          case 30:
            $l(e);
            break;
          default:
            $l(e);
        }
        t = t.sibling;
      }
    }
    function ul(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, n = t, u = e, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            ul(n, u, l), pn(4, u);
            break;
          case 1:
            if (ul(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (S) {
              ht(a, a.return, S);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var s = a.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) ir(m[n], s);
              } catch (S) {
                ht(a, a.return, S);
              }
            }
            l && i & 64 && bo(u), Sn(u, u.return);
            break;
          case 27:
            xo(u);
          case 26:
          case 5:
            ul(n, u, l), l && a === null && i & 4 && po(u), Sn(u, u.return);
            break;
          case 12:
            ul(n, u, l);
            break;
          case 31:
            ul(n, u, l), l && i & 4 && To(n, u);
            break;
          case 13:
            ul(n, u, l), l && i & 4 && jo(n, u);
            break;
          case 22:
            u.memoizedState === null && ul(n, u, l), Sn(u, u.return);
            break;
          case 30:
            break;
          default:
            ul(n, u, l);
        }
        e = e.sibling;
      }
    }
    function Kc(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && cn(l));
    }
    function Jc(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && cn(t));
    }
    function qe(t, e, l, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Oo(t, e, l, a), e = e.sibling;
    }
    function Oo(t, e, l, a) {
      var n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          qe(t, e, l, a), n & 2048 && pn(9, e);
          break;
        case 1:
          qe(t, e, l, a);
          break;
        case 3:
          qe(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && cn(t)));
          break;
        case 12:
          if (n & 2048) {
            qe(t, e, l, a), t = e.stateNode;
            try {
              var u = e.memoizedProps, i = u.id, s = u.onPostCommit;
              typeof s == "function" && s(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (m) {
              ht(e, e.return, m);
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
          u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? qe(t, e, l, a) : xn(t, e) : u._visibility & 2 ? qe(t, e, l, a) : (u._visibility |= 2, Ta(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Kc(i, e);
          break;
        case 24:
          qe(t, e, l, a), n & 2048 && Jc(e.alternate, e);
          break;
        default:
          qe(t, e, l, a);
      }
    }
    function Ta(t, e, l, a, n) {
      for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, i = e, s = l, m = a, S = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Ta(u, i, s, m, n), pn(8, i);
            break;
          case 23:
            break;
          case 22:
            var T = i.stateNode;
            i.memoizedState !== null ? T._visibility & 2 ? Ta(u, i, s, m, n) : xn(u, i) : (T._visibility |= 2, Ta(u, i, s, m, n)), n && S & 2048 && Kc(i.alternate, i);
            break;
          case 24:
            Ta(u, i, s, m, n), n && S & 2048 && Jc(i.alternate, i);
            break;
          default:
            Ta(u, i, s, m, n);
        }
        e = e.sibling;
      }
    }
    function xn(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            xn(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          case 24:
            xn(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            xn(l, a);
        }
        e = e.sibling;
      }
    }
    var An = 8192;
    function ja(t, e, l) {
      if (t.subtreeFlags & An) for (t = t.child; t !== null; ) Uo(t, e, l), t = t.sibling;
    }
    function Uo(t, e, l) {
      switch (t.tag) {
        case 26:
          ja(t, e, l), t.flags & An && t.memoizedState !== null && Qy(l, Be, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          ja(t, e, l);
          break;
        case 3:
        case 4:
          var a = Be;
          Be = Fu(t.stateNode.containerInfo), ja(t, e, l), Be = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, ja(t, e, l), An = a) : ja(t, e, l));
          break;
        default:
          ja(t, e, l);
      }
    }
    function Do(t) {
      var e = t.alternate;
      if (e !== null && (t = e.child, t !== null)) {
        e.child = null;
        do
          e = t.sibling, t.sibling = null, t = e;
        while (t !== null);
      }
    }
    function zn(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Xt = a, Ro(a, t);
        }
        Do(t);
      }
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Co(t), t = t.sibling;
    }
    function Co(t) {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          zn(t), t.flags & 2048 && xl(9, t, t.return);
          break;
        case 3:
          zn(t);
          break;
        case 12:
          zn(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Bu(t)) : zn(t);
          break;
        default:
          zn(t);
      }
    }
    function Bu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Xt = a, Ro(a, t);
        }
        Do(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            xl(8, e, e.return), Bu(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, Bu(e));
            break;
          default:
            Bu(e);
        }
        t = t.sibling;
      }
    }
    function Ro(t, e) {
      for (; Xt !== null; ) {
        var l = Xt;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            xl(8, l, e);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            cn(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, Xt = a;
        else t: for (l = t; Xt !== null; ) {
          a = Xt;
          var n = a.sibling, u = a.return;
          if (No(a), a === l) {
            Xt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Xt = n;
            break t;
          }
          Xt = u;
        }
      }
    }
    var ny = {
      getCacheForType: function(t) {
        var e = Wt(Ct), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return Wt(Ct).controller.signal;
      }
    }, uy = typeof WeakMap == "function" ? WeakMap : Map, ot = 0, xt = null, et = null, at = 0, yt = 0, _e = null, Al = false, Ma = false, kc = false, il = 0, Mt = 0, zl = 0, Il = 0, Wc = 0, be = 0, wa = 0, Nn = null, ce = null, Fc = false, qu = 0, Ho = 0, Yu = 1 / 0, Lu = null, Nl = null, Yt = 0, El = null, Oa = null, cl = 0, $c = 0, Ic = null, Bo = null, En = 0, Pc = null;
    function ve() {
      return (ot & 2) !== 0 && at !== 0 ? at & -at : M.T !== null ? uf() : If();
    }
    function qo() {
      if (be === 0) if ((at & 536870912) === 0 || it) {
        var t = kn;
        kn <<= 1, (kn & 3932160) === 0 && (kn = 262144), be = t;
      } else be = 536870912;
      return t = he.current, t !== null && (t.flags |= 32), be;
    }
    function fe(t, e, l) {
      (t === xt && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) && (Ua(t, 0), Tl(t, at, be, false)), Ka(t, l), ((ot & 2) === 0 || t !== xt) && (t === xt && ((ot & 2) === 0 && (Il |= l), Mt === 4 && Tl(t, at, be, false)), Xe(t));
    }
    function Yo(t, e, l) {
      if ((ot & 6) !== 0) throw Error(r(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Va(t, e), n = a ? fy(t, e) : ef(t, e, true), u = a;
      do {
        if (n === 0) {
          Ma && !a && Tl(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, u && !iy(l)) {
            n = ef(t, e, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
            else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              e = i;
              t: {
                var s = t;
                n = Nn;
                var m = s.current.memoizedState.isDehydrated;
                if (m && (Ua(s, i).flags |= 256), i = ef(s, i, false), i !== 2) {
                  if (kc && !m) {
                    s.errorRecoveryDisabledLanes |= u, Il |= u, n = 4;
                    break t;
                  }
                  u = ce, ce = n, u !== null && (ce === null ? ce = u : ce.push.apply(ce, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ua(t, 0), Tl(t, e, 0, true);
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
                Tl(a, e, be, !Al);
                break t;
              case 2:
                ce = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((e & 62914560) === e && (n = qu + 300 - re(), 10 < n)) {
              if (Tl(a, e, be, !Al), Fn(a, 0, true) !== 0) break t;
              cl = e, a.timeoutHandle = gd(Lo.bind(null, a, l, ce, Lu, Fc, e, be, Il, wa, Al, u, "Throttled", -0, 0), n);
              break t;
            }
            Lo(a, l, ce, Lu, Fc, e, be, Il, wa, Al, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Xe(t);
    }
    function Lo(t, e, l, a, n, u, i, s, m, S, T, U, x, z) {
      if (t.timeoutHandle = -1, U = e.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
        U = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Ke
        }, Uo(e, u, U);
        var Y = (u & 62914560) === u ? qu - re() : (u & 4194048) === u ? Ho - re() : 0;
        if (Y = Zy(U, Y), Y !== null) {
          cl = u, t.cancelPendingCommit = Y(ko.bind(null, t, e, u, l, a, n, i, s, m, T, U, null, x, z)), Tl(t, u, i, !S);
          return;
        }
      }
      ko(t, e, u, l, a, n, i, s, m);
    }
    function iy(t) {
      for (var e = t; ; ) {
        var l = e.tag;
        if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && (l = e.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!me(u(), n)) return false;
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
      e &= ~Wc, e &= ~Il, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var n = e; 0 < n; ) {
        var u = 31 - de(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      l !== 0 && Wf(t, l, e);
    }
    function Gu() {
      return (ot & 6) === 0 ? (Tn(0), false) : true;
    }
    function tf() {
      if (et !== null) {
        if (yt === 0) var t = et.return;
        else t = et, Fe = Ql = null, gc(t), xa = null, sn = 0, t = et;
        for (; t !== null; ) _o(t.alternate, t), t = t.return;
        et = null;
      }
    }
    function Ua(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, Ey(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), cl = 0, tf(), xt = t, et = l = ke(t.current, null), at = e, yt = 0, _e = null, Al = false, Ma = Va(t, e), kc = false, wa = be = Wc = Il = zl = Mt = 0, ce = Nn = null, Fc = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - de(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
      return il = e, fu(), l;
    }
    function Go(t, e) {
      F = null, M.H = _n, e === Sa || e === gu ? (e = lr(), yt = 3) : e === nc ? (e = lr(), yt = 4) : yt = e === Uc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, _e = e, et === null && (Mt = 1, wu(t, Me(e, t.current)));
    }
    function Xo() {
      var t = he.current;
      return t === null ? true : (at & 4194048) === at ? De === null : (at & 62914560) === at || (at & 536870912) !== 0 ? t === De : false;
    }
    function Qo() {
      var t = M.H;
      return M.H = _n, t === null ? _n : t;
    }
    function Zo() {
      var t = M.A;
      return M.A = ny, t;
    }
    function Xu() {
      Mt = 4, Al || (at & 4194048) !== at && he.current !== null || (Ma = true), (zl & 134217727) === 0 && (Il & 134217727) === 0 || xt === null || Tl(xt, at, be, false);
    }
    function ef(t, e, l) {
      var a = ot;
      ot |= 2;
      var n = Qo(), u = Zo();
      (xt !== t || at !== e) && (Lu = null, Ua(t, e)), e = false;
      var i = Mt;
      t: do
        try {
          if (yt !== 0 && et !== null) {
            var s = et, m = _e;
            switch (yt) {
              case 8:
                tf(), i = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                he.current === null && (e = true);
                var S = yt;
                if (yt = 0, _e = null, Da(t, s, m, S), l && Ma) {
                  i = 0;
                  break t;
                }
                break;
              default:
                S = yt, yt = 0, _e = null, Da(t, s, m, S);
            }
          }
          cy(), i = Mt;
          break;
        } catch (T) {
          Go(t, T);
        }
      while (true);
      return e && t.shellSuspendCounter++, Fe = Ql = null, ot = a, M.H = n, M.A = u, et === null && (xt = null, at = 0, fu()), i;
    }
    function cy() {
      for (; et !== null; ) Vo(et);
    }
    function fy(t, e) {
      var l = ot;
      ot |= 2;
      var a = Qo(), n = Zo();
      xt !== t || at !== e ? (Lu = null, Yu = re() + 500, Ua(t, e)) : Ma = Va(t, e);
      t: do
        try {
          if (yt !== 0 && et !== null) {
            e = et;
            var u = _e;
            e: switch (yt) {
              case 1:
                yt = 0, _e = null, Da(t, e, u, 1);
                break;
              case 2:
              case 9:
                if (tr(u)) {
                  yt = 0, _e = null, Ko(e);
                  break;
                }
                e = function() {
                  yt !== 2 && yt !== 9 || xt !== t || (yt = 7), Xe(t);
                }, u.then(e, e);
                break t;
              case 3:
                yt = 7;
                break t;
              case 4:
                yt = 5;
                break t;
              case 7:
                tr(u) ? (yt = 0, _e = null, Ko(e)) : (yt = 0, _e = null, Da(t, e, u, 7));
                break;
              case 5:
                var i = null;
                switch (et.tag) {
                  case 26:
                    i = et.memoizedState;
                  case 5:
                  case 27:
                    var s = et;
                    if (i ? Od(i) : s.stateNode.complete) {
                      yt = 0, _e = null;
                      var m = s.sibling;
                      if (m !== null) et = m;
                      else {
                        var S = s.return;
                        S !== null ? (et = S, Qu(S)) : et = null;
                      }
                      break e;
                    }
                }
                yt = 0, _e = null, Da(t, e, u, 5);
                break;
              case 6:
                yt = 0, _e = null, Da(t, e, u, 6);
                break;
              case 8:
                tf(), Mt = 6;
                break t;
              default:
                throw Error(r(462));
            }
          }
          sy();
          break;
        } catch (T) {
          Go(t, T);
        }
      while (true);
      return Fe = Ql = null, M.H = a, M.A = n, ot = l, et !== null ? 0 : (xt = null, at = 0, fu(), Mt);
    }
    function sy() {
      for (; et !== null && !Um(); ) Vo(et);
    }
    function Vo(t) {
      var e = ho(t.alternate, t, il);
      t.memoizedProps = t.pendingProps, e === null ? Qu(t) : et = e;
    }
    function Ko(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = fo(l, e, e.pendingProps, e.type, void 0, at);
          break;
        case 11:
          e = fo(l, e, e.pendingProps, e.type.render, e.ref, at);
          break;
        case 5:
          gc(e);
        default:
          _o(l, e), e = et = Qs(e, il), e = ho(l, e, il);
      }
      t.memoizedProps = t.pendingProps, e === null ? Qu(t) : et = e;
    }
    function Da(t, e, l, a) {
      Fe = Ql = null, gc(e), xa = null, sn = 0;
      var n = e.return;
      try {
        if ($0(t, n, e, l, at)) {
          Mt = 1, wu(t, Me(l, t.current)), et = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw et = n, u;
        Mt = 1, wu(t, Me(l, t.current)), et = null;
        return;
      }
      e.flags & 32768 ? (it || a === 1 ? t = true : Ma || (at & 536870912) !== 0 ? t = false : (Al = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = he.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Jo(e, t)) : Qu(e);
    }
    function Qu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Jo(e, Al);
          return;
        }
        t = e.return;
        var l = ty(e.alternate, e, il);
        if (l !== null) {
          et = l;
          return;
        }
        if (e = e.sibling, e !== null) {
          et = e;
          return;
        }
        et = e = t;
      } while (e !== null);
      Mt === 0 && (Mt = 5);
    }
    function Jo(t, e) {
      do {
        var l = ey(t.alternate, t);
        if (l !== null) {
          l.flags &= 32767, et = l;
          return;
        }
        if (l = t.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !e && (t = t.sibling, t !== null)) {
          et = t;
          return;
        }
        et = t = l;
      } while (t !== null);
      Mt = 6, et = null;
    }
    function ko(t, e, l, a, n, u, i, s, m) {
      t.cancelPendingCommit = null;
      do
        Zu();
      while (Yt !== 0);
      if ((ot & 6) !== 0) throw Error(r(327));
      if (e !== null) {
        if (e === t.current) throw Error(r(177));
        if (u = e.lanes | e.childLanes, u |= Qi, Xm(t, l, u, i, s, m), t === xt && (et = xt = null, at = 0), Oa = e, El = t, cl = l, $c = u, Ic = n, Bo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, my(Kn, function() {
          return Po(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = M.T, M.T = null, n = H.p, H.p = 2, i = ot, ot |= 4;
          try {
            ly(t, e, l);
          } finally {
            ot = i, H.p = n, M.T = a;
          }
        }
        Yt = 1, Wo(), Fo(), $o();
      }
    }
    function Wo() {
      if (Yt === 1) {
        Yt = 0;
        var t = El, e = Oa, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = M.T, M.T = null;
          var a = H.p;
          H.p = 2;
          var n = ot;
          ot |= 4;
          try {
            Mo(e, t);
            var u = yf, i = Cs(t.containerInfo), s = u.focusedElem, m = u.selectionRange;
            if (i !== s && s && s.ownerDocument && Ds(s.ownerDocument.documentElement, s)) {
              if (m !== null && qi(s)) {
                var S = m.start, T = m.end;
                if (T === void 0 && (T = S), "selectionStart" in s) s.selectionStart = S, s.selectionEnd = Math.min(T, s.value.length);
                else {
                  var U = s.ownerDocument || document, x = U && U.defaultView || window;
                  if (x.getSelection) {
                    var z = x.getSelection(), Y = s.textContent.length, Q = Math.min(m.start, Y), St = m.end === void 0 ? Q : Math.min(m.end, Y);
                    !z.extend && Q > St && (i = St, St = Q, Q = i);
                    var g = Us(s, Q), y = Us(s, St);
                    if (g && y && (z.rangeCount !== 1 || z.anchorNode !== g.node || z.anchorOffset !== g.offset || z.focusNode !== y.node || z.focusOffset !== y.offset)) {
                      var v = U.createRange();
                      v.setStart(g.node, g.offset), z.removeAllRanges(), Q > St ? (z.addRange(v), z.extend(y.node, y.offset)) : (v.setEnd(y.node, y.offset), z.addRange(v));
                    }
                  }
                }
              }
              for (U = [], z = s; z = z.parentNode; ) z.nodeType === 1 && U.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
              for (typeof s.focus == "function" && s.focus(), s = 0; s < U.length; s++) {
                var O = U[s];
                O.element.scrollLeft = O.left, O.element.scrollTop = O.top;
              }
            }
            li = !!mf, yf = mf = null;
          } finally {
            ot = n, H.p = a, M.T = l;
          }
        }
        t.current = e, Yt = 2;
      }
    }
    function Fo() {
      if (Yt === 2) {
        Yt = 0;
        var t = El, e = Oa, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = M.T, M.T = null;
          var a = H.p;
          H.p = 2;
          var n = ot;
          ot |= 4;
          try {
            zo(t, e.alternate, e);
          } finally {
            ot = n, H.p = a, M.T = l;
          }
        }
        Yt = 3;
      }
    }
    function $o() {
      if (Yt === 4 || Yt === 3) {
        Yt = 0, Dm();
        var t = El, e = Oa, l = cl, a = Bo;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Yt = 5 : (Yt = 0, Oa = El = null, Io(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (Nl = null), vi(l), e = e.stateNode, oe && typeof oe.onCommitFiberRoot == "function") try {
          oe.onCommitFiberRoot(Za, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = M.T, n = H.p, H.p = 2, M.T = null;
          try {
            for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
              var s = a[i];
              u(s.value, {
                componentStack: s.stack
              });
            }
          } finally {
            M.T = e, H.p = n;
          }
        }
        (cl & 3) !== 0 && Zu(), Xe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Pc ? En++ : (En = 0, Pc = t) : En = 0, Tn(0);
      }
    }
    function Io(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, cn(e)));
    }
    function Zu() {
      return Wo(), Fo(), $o(), Po();
    }
    function Po() {
      if (Yt !== 5) return false;
      var t = El, e = $c;
      $c = 0;
      var l = vi(cl), a = M.T, n = H.p;
      try {
        H.p = 32 > l ? 32 : l, M.T = null, l = Ic, Ic = null;
        var u = El, i = cl;
        if (Yt = 0, Oa = El = null, cl = 0, (ot & 6) !== 0) throw Error(r(331));
        var s = ot;
        if (ot |= 4, Co(u.current), Oo(u, u.current, i, l), ot = s, Tn(0, false), oe && typeof oe.onPostCommitFiberRoot == "function") try {
          oe.onPostCommitFiberRoot(Za, u);
        } catch {
        }
        return true;
      } finally {
        H.p = n, M.T = a, Io(t, e);
      }
    }
    function td(t, e, l) {
      e = Me(l, e), e = Oc(t.stateNode, e, 2), t = vl(t, e, 2), t !== null && (Ka(t, 2), Xe(t));
    }
    function ht(t, e, l) {
      if (t.tag === 3) td(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          td(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Nl === null || !Nl.has(a))) {
            t = Me(l, t), l = to(2), a = vl(e, l, 2), a !== null && (eo(l, a, e, t), Ka(a, 2), Xe(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function lf(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new uy();
        var n = /* @__PURE__ */ new Set();
        a.set(e, n);
      } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
      n.has(l) || (kc = true, n.add(l), t = ry.bind(null, t, e, l), e.then(t, t));
    }
    function ry(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, xt === t && (at & l) === l && (Mt === 4 || Mt === 3 && (at & 62914560) === at && 300 > re() - qu ? (ot & 2) === 0 && Ua(t, 0) : Wc |= l, wa === at && (wa = 0)), Xe(t);
    }
    function ed(t, e) {
      e === 0 && (e = kf()), t = Ll(t, e), t !== null && (Ka(t, e), Xe(t));
    }
    function oy(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), ed(t, l);
    }
    function dy(t, e) {
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
      a !== null && a.delete(e), ed(t, l);
    }
    function my(t, e) {
      return hi(t, e);
    }
    var Vu = null, Ca = null, af = false, Ku = false, nf = false, jl = 0;
    function Xe(t) {
      t !== Ca && t.next === null && (Ca === null ? Vu = Ca = t : Ca = Ca.next = t), Ku = true, af || (af = true, hy());
    }
    function Tn(t, e) {
      if (!nf && Ku) {
        nf = true;
        do
          for (var l = false, a = Vu; a !== null; ) {
            if (t !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, s = a.pingedLanes;
                u = (1 << 31 - de(42 | t) + 1) - 1, u &= n & ~(i & ~s), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, ud(a, u));
            } else u = at, u = Fn(a, a === xt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Va(a, u) || (l = true, ud(a, u));
            a = a.next;
          }
        while (l);
        nf = false;
      }
    }
    function yy() {
      ld();
    }
    function ld() {
      Ku = af = false;
      var t = 0;
      jl !== 0 && Ny() && (t = jl);
      for (var e = re(), l = null, a = Vu; a !== null; ) {
        var n = a.next, u = ad(a, e);
        u === 0 ? (a.next = null, l === null ? Vu = n : l.next = n, n === null && (Ca = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Ku = true)), a = n;
      }
      Yt !== 0 && Yt !== 5 || Tn(t), jl !== 0 && (jl = 0);
    }
    function ad(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - de(u), s = 1 << i, m = n[i];
        m === -1 ? ((s & l) === 0 || (s & a) !== 0) && (n[i] = Gm(s, e)) : m <= e && (t.expiredLanes |= s), u &= ~s;
      }
      if (e = xt, l = at, l = Fn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (yt === 2 || yt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && gi(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || Va(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (a !== null && gi(a), vi(l)) {
          case 2:
          case 8:
            l = Kf;
            break;
          case 32:
            l = Kn;
            break;
          case 268435456:
            l = Jf;
            break;
          default:
            l = Kn;
        }
        return a = nd.bind(null, t), l = hi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && gi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function nd(t, e) {
      if (Yt !== 0 && Yt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (Zu() && t.callbackNode !== l) return null;
      var a = at;
      return a = Fn(t, t === xt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Yo(t, a, e), ad(t, re()), t.callbackNode != null && t.callbackNode === l ? nd.bind(null, t) : null);
    }
    function ud(t, e) {
      if (Zu()) return null;
      Yo(t, e, true);
    }
    function hy() {
      Ty(function() {
        (ot & 6) !== 0 ? hi(Vf, yy) : ld();
      });
    }
    function uf() {
      if (jl === 0) {
        var t = va;
        t === 0 && (t = Jn, Jn <<= 1, (Jn & 261888) === 0 && (Jn = 256)), jl = t;
      }
      return jl;
    }
    function id(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : tu("" + t);
    }
    function cd(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function gy(t, e, l, a, n) {
      if (e === "submit" && l && l.stateNode === n) {
        var u = id((n[le] || null).action), i = a.submitter;
        i && (e = (e = i[le] || null) ? id(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
        var s = new nu("action", "action", null, a, n);
        t.push({
          event: s,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (jl !== 0) {
                    var m = i ? cd(n, i) : new FormData(n);
                    Nc(l, {
                      pending: true,
                      data: m,
                      method: n.method,
                      action: u
                    }, null, m);
                  }
                } else typeof u == "function" && (s.preventDefault(), m = i ? cd(n, i) : new FormData(n), Nc(l, {
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
    for (var cf = 0; cf < Xi.length; cf++) {
      var ff = Xi[cf], _y = ff.toLowerCase(), by = ff[0].toUpperCase() + ff.slice(1);
      He(_y, "on" + by);
    }
    He(Bs, "onAnimationEnd"), He(qs, "onAnimationIteration"), He(Ys, "onAnimationStart"), He("dblclick", "onDoubleClick"), He("focusin", "onFocus"), He("focusout", "onBlur"), He(C0, "onTransitionRun"), He(R0, "onTransitionStart"), He(H0, "onTransitionCancel"), He(Ls, "onTransitionEnd"), ua("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), ua("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), ua("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), ua("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Hl("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Hl("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Hl("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Hl("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Hl("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), vy = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));
    function fd(t, e) {
      e = (e & 4) !== 0;
      for (var l = 0; l < t.length; l++) {
        var a = t[l], n = a.event;
        a = a.listeners;
        t: {
          var u = void 0;
          if (e) for (var i = a.length - 1; 0 <= i; i--) {
            var s = a[i], m = s.instance, S = s.currentTarget;
            if (s = s.listener, m !== u && n.isPropagationStopped()) break t;
            u = s, n.currentTarget = S;
            try {
              u(n);
            } catch (T) {
              cu(T);
            }
            n.currentTarget = null, u = m;
          }
          else for (i = 0; i < a.length; i++) {
            if (s = a[i], m = s.instance, S = s.currentTarget, s = s.listener, m !== u && n.isPropagationStopped()) break t;
            u = s, n.currentTarget = S;
            try {
              u(n);
            } catch (T) {
              cu(T);
            }
            n.currentTarget = null, u = m;
          }
        }
      }
    }
    function lt(t, e) {
      var l = e[pi];
      l === void 0 && (l = e[pi] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      l.has(a) || (sd(e, t, 2, false), l.add(a));
    }
    function sf(t, e, l) {
      var a = 0;
      e && (a |= 4), sd(l, t, a, e);
    }
    var Ju = "_reactListening" + Math.random().toString(36).slice(2);
    function rf(t) {
      if (!t[Ju]) {
        t[Ju] = true, es.forEach(function(l) {
          l !== "selectionchange" && (vy.has(l) || sf(l, false, t), sf(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[Ju] || (e[Ju] = true, sf("selectionchange", false, e));
      }
    }
    function sd(t, e, l, a) {
      switch (qd(e)) {
        case 2:
          var n = Jy;
          break;
        case 8:
          n = ky;
          break;
        default:
          n = Nf;
      }
      l = n.bind(null, e, l, t), n = void 0, !Mi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: n
      }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
        passive: n
      }) : t.addEventListener(e, l, false);
    }
    function of(t, e, l, a, n) {
      var u = a;
      if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ; ) {
        if (a === null) return;
        var i = a.tag;
        if (i === 3 || i === 4) {
          var s = a.stateNode.containerInfo;
          if (s === n) break;
          if (i === 4) for (i = a.return; i !== null; ) {
            var m = i.tag;
            if ((m === 3 || m === 4) && i.stateNode.containerInfo === n) return;
            i = i.return;
          }
          for (; s !== null; ) {
            if (i = la(s), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue t;
            }
            s = s.parentNode;
          }
        }
        a = a.return;
      }
      ms(function() {
        var S = u, T = Ti(l), U = [];
        t: {
          var x = Gs.get(t);
          if (x !== void 0) {
            var z = nu, Y = t;
            switch (t) {
              case "keypress":
                if (lu(l) === 0) break t;
              case "keydown":
              case "keyup":
                z = d0;
                break;
              case "focusin":
                Y = "focus", z = Di;
                break;
              case "focusout":
                Y = "blur", z = Di;
                break;
              case "beforeblur":
              case "afterblur":
                z = Di;
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
                z = gs;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = t0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = h0;
                break;
              case Bs:
              case qs:
              case Ys:
                z = a0;
                break;
              case Ls:
                z = _0;
                break;
              case "scroll":
              case "scrollend":
                z = Im;
                break;
              case "wheel":
                z = v0;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = u0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = bs;
                break;
              case "toggle":
              case "beforetoggle":
                z = S0;
            }
            var Q = (e & 4) !== 0, St = !Q && (t === "scroll" || t === "scrollend"), g = Q ? x !== null ? x + "Capture" : null : x;
            Q = [];
            for (var y = S, v; y !== null; ) {
              var O = y;
              if (v = O.stateNode, O = O.tag, O !== 5 && O !== 26 && O !== 27 || v === null || g === null || (O = Wa(y, g), O != null && Q.push(Mn(y, O, v))), St) break;
              y = y.return;
            }
            0 < Q.length && (x = new z(x, Y, null, l, T), U.push({
              event: x,
              listeners: Q
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (x = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", x && l !== Ei && (Y = l.relatedTarget || l.fromElement) && (la(Y) || Y[ea])) break t;
            if ((z || x) && (x = T.window === T ? T : (x = T.ownerDocument) ? x.defaultView || x.parentWindow : window, z ? (Y = l.relatedTarget || l.toElement, z = S, Y = Y ? la(Y) : null, Y !== null && (St = E(Y), Q = Y.tag, Y !== St || Q !== 5 && Q !== 27 && Q !== 6) && (Y = null)) : (z = null, Y = S), z !== Y)) {
              if (Q = gs, O = "onMouseLeave", g = "onMouseEnter", y = "mouse", (t === "pointerout" || t === "pointerover") && (Q = bs, O = "onPointerLeave", g = "onPointerEnter", y = "pointer"), St = z == null ? x : ka(z), v = Y == null ? x : ka(Y), x = new Q(O, y + "leave", z, l, T), x.target = St, x.relatedTarget = v, O = null, la(T) === S && (Q = new Q(g, y + "enter", Y, l, T), Q.target = v, Q.relatedTarget = St, O = Q), St = O, z && Y) e: {
                for (Q = py, g = z, y = Y, v = 0, O = g; O; O = Q(O)) v++;
                O = 0;
                for (var G = y; G; G = Q(G)) O++;
                for (; 0 < v - O; ) g = Q(g), v--;
                for (; 0 < O - v; ) y = Q(y), O--;
                for (; v--; ) {
                  if (g === y || y !== null && g === y.alternate) {
                    Q = g;
                    break e;
                  }
                  g = Q(g), y = Q(y);
                }
                Q = null;
              }
              else Q = null;
              z !== null && rd(U, x, z, Q, false), Y !== null && St !== null && rd(U, St, Y, Q, true);
            }
          }
          t: {
            if (x = S ? ka(S) : window, z = x.nodeName && x.nodeName.toLowerCase(), z === "select" || z === "input" && x.type === "file") var st = Es;
            else if (zs(x)) if (Ts) st = O0;
            else {
              st = M0;
              var L = j0;
            }
            else z = x.nodeName, !z || z.toLowerCase() !== "input" || x.type !== "checkbox" && x.type !== "radio" ? S && Ni(S.elementType) && (st = Es) : st = w0;
            if (st && (st = st(t, S))) {
              Ns(U, st, l, T);
              break t;
            }
            L && L(t, x, S), t === "focusout" && S && x.type === "number" && S.memoizedProps.value != null && zi(x, "number", x.value);
          }
          switch (L = S ? ka(S) : window, t) {
            case "focusin":
              (zs(L) || L.contentEditable === "true") && (oa = L, Yi = S, an = null);
              break;
            case "focusout":
              an = Yi = oa = null;
              break;
            case "mousedown":
              Li = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Li = false, Rs(U, l, T);
              break;
            case "selectionchange":
              if (D0) break;
            case "keydown":
            case "keyup":
              Rs(U, l, T);
          }
          var P;
          if (Ri) t: {
            switch (t) {
              case "compositionstart":
                var nt = "onCompositionStart";
                break t;
              case "compositionend":
                nt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                nt = "onCompositionUpdate";
                break t;
            }
            nt = void 0;
          }
          else ra ? xs(t, l) && (nt = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (nt = "onCompositionStart");
          nt && (vs && l.locale !== "ko" && (ra || nt !== "onCompositionStart" ? nt === "onCompositionEnd" && ra && (P = ys()) : (dl = T, wi = "value" in dl ? dl.value : dl.textContent, ra = true)), L = ku(S, nt), 0 < L.length && (nt = new _s(nt, t, null, l, T), U.push({
            event: nt,
            listeners: L
          }), P ? nt.data = P : (P = As(l), P !== null && (nt.data = P)))), (P = A0 ? z0(t, l) : N0(t, l)) && (nt = ku(S, "onBeforeInput"), 0 < nt.length && (L = new _s("onBeforeInput", "beforeinput", null, l, T), U.push({
            event: L,
            listeners: nt
          }), L.data = P)), gy(U, t, S, l, T);
        }
        fd(U, e);
      });
    }
    function Mn(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function ku(t, e) {
      for (var l = e + "Capture", a = []; t !== null; ) {
        var n = t, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Wa(t, l), n != null && a.unshift(Mn(t, n, u)), n = Wa(t, e), n != null && a.push(Mn(t, n, u))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function py(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function rd(t, e, l, a, n) {
      for (var u = e._reactName, i = []; l !== null && l !== a; ) {
        var s = l, m = s.alternate, S = s.stateNode;
        if (s = s.tag, m !== null && m === a) break;
        s !== 5 && s !== 26 && s !== 27 || S === null || (m = S, n ? (S = Wa(l, u), S != null && i.unshift(Mn(l, S, m))) : n || (S = Wa(l, u), S != null && i.push(Mn(l, S, m)))), l = l.return;
      }
      i.length !== 0 && t.push({
        event: e,
        listeners: i
      });
    }
    var Sy = /\r\n?/g, xy = /\u0000|\uFFFD/g;
    function od(t) {
      return (typeof t == "string" ? t : "" + t).replace(Sy, `
`).replace(xy, "");
    }
    function dd(t, e) {
      return e = od(e), od(t) === e;
    }
    function pt(t, e, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || ca(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && ca(t, "" + a);
          break;
        case "className":
          In(t, "class", a);
          break;
        case "tabIndex":
          In(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          In(t, l, a);
          break;
        case "style":
          os(t, a, u);
          break;
        case "data":
          if (e !== "object") {
            In(t, "data", a);
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
          a = tu("" + a), t.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (e !== "input" && pt(t, e, "name", n.name, n, null), pt(t, e, "formEncType", n.formEncType, n, null), pt(t, e, "formMethod", n.formMethod, n, null), pt(t, e, "formTarget", n.formTarget, n, null)) : (pt(t, e, "encType", n.encType, n, null), pt(t, e, "method", n.method, n, null), pt(t, e, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = tu("" + a), t.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (t.onclick = Ke);
          break;
        case "onScroll":
          a != null && lt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && lt("scrollend", t);
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
          l = tu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
          lt("beforetoggle", t), lt("toggle", t), $n(t, "popover", a);
          break;
        case "xlinkActuate":
          Ve(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Ve(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Ve(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Ve(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Ve(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Ve(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Ve(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          $n(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Fm.get(l) || l, $n(t, l, a));
      }
    }
    function df(t, e, l, a, n, u) {
      switch (l) {
        case "style":
          os(t, a, u);
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
          typeof a == "string" ? ca(t, a) : (typeof a == "number" || typeof a == "bigint") && ca(t, "" + a);
          break;
        case "onScroll":
          a != null && lt("scroll", t);
          break;
        case "onScrollEnd":
          a != null && lt("scrollend", t);
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
          if (!ls.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[le] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : $n(t, l, a);
          }
      }
    }
    function $t(t, e, l) {
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
          lt("error", t), lt("load", t);
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
                pt(t, e, u, i, l, null);
            }
          }
          n && pt(t, e, "srcSet", l.srcSet, l, null), a && pt(t, e, "src", l.src, l, null);
          return;
        case "input":
          lt("invalid", t);
          var s = u = i = n = null, m = null, S = null;
          for (a in l) if (l.hasOwnProperty(a)) {
            var T = l[a];
            if (T != null) switch (a) {
              case "name":
                n = T;
                break;
              case "type":
                i = T;
                break;
              case "checked":
                m = T;
                break;
              case "defaultChecked":
                S = T;
                break;
              case "value":
                u = T;
                break;
              case "defaultValue":
                s = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, e));
                break;
              default:
                pt(t, e, a, T, l, null);
            }
          }
          cs(t, u, s, m, S, i, n, false);
          return;
        case "select":
          lt("invalid", t), a = i = u = null;
          for (n in l) if (l.hasOwnProperty(n) && (s = l[n], s != null)) switch (n) {
            case "value":
              u = s;
              break;
            case "defaultValue":
              i = s;
              break;
            case "multiple":
              a = s;
            default:
              pt(t, e, n, s, l, null);
          }
          e = u, l = i, t.multiple = !!a, e != null ? ia(t, !!a, e, false) : l != null && ia(t, !!a, l, true);
          return;
        case "textarea":
          lt("invalid", t), u = n = a = null;
          for (i in l) if (l.hasOwnProperty(i) && (s = l[i], s != null)) switch (i) {
            case "value":
              a = s;
              break;
            case "defaultValue":
              n = s;
              break;
            case "children":
              u = s;
              break;
            case "dangerouslySetInnerHTML":
              if (s != null) throw Error(r(91));
              break;
            default:
              pt(t, e, i, s, l, null);
          }
          ss(t, a, n, u);
          return;
        case "option":
          for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : pt(t, e, m, a, l, null));
          return;
        case "dialog":
          lt("beforetoggle", t), lt("toggle", t), lt("cancel", t), lt("close", t);
          break;
        case "iframe":
        case "object":
          lt("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < jn.length; a++) lt(jn[a], t);
          break;
        case "image":
          lt("error", t), lt("load", t);
          break;
        case "details":
          lt("toggle", t);
          break;
        case "embed":
        case "source":
        case "link":
          lt("error", t), lt("load", t);
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
          for (S in l) if (l.hasOwnProperty(S) && (a = l[S], a != null)) switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, e));
            default:
              pt(t, e, S, a, l, null);
          }
          return;
        default:
          if (Ni(e)) {
            for (T in l) l.hasOwnProperty(T) && (a = l[T], a !== void 0 && df(t, e, T, a, l, void 0));
            return;
          }
      }
      for (s in l) l.hasOwnProperty(s) && (a = l[s], a != null && pt(t, e, s, a, l, null));
    }
    function Ay(t, e, l, a) {
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
          var n = null, u = null, i = null, s = null, m = null, S = null, T = null;
          for (z in l) {
            var U = l[z];
            if (l.hasOwnProperty(z) && U != null) switch (z) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = U;
              default:
                a.hasOwnProperty(z) || pt(t, e, z, null, a, U);
            }
          }
          for (var x in a) {
            var z = a[x];
            if (U = l[x], a.hasOwnProperty(x) && (z != null || U != null)) switch (x) {
              case "type":
                u = z;
                break;
              case "name":
                n = z;
                break;
              case "checked":
                S = z;
                break;
              case "defaultChecked":
                T = z;
                break;
              case "value":
                i = z;
                break;
              case "defaultValue":
                s = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== U && pt(t, e, x, z, a, U);
            }
          }
          Ai(t, i, s, m, S, T, u, n);
          return;
        case "select":
          z = i = s = x = null;
          for (u in l) if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
            case "value":
              break;
            case "multiple":
              z = m;
            default:
              a.hasOwnProperty(u) || pt(t, e, u, null, a, m);
          }
          for (n in a) if (u = a[n], m = l[n], a.hasOwnProperty(n) && (u != null || m != null)) switch (n) {
            case "value":
              x = u;
              break;
            case "defaultValue":
              s = u;
              break;
            case "multiple":
              i = u;
            default:
              u !== m && pt(t, e, n, u, a, m);
          }
          e = s, l = i, a = z, x != null ? ia(t, !!l, x, false) : !!a != !!l && (e != null ? ia(t, !!l, e, true) : ia(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          z = x = null;
          for (s in l) if (n = l[s], l.hasOwnProperty(s) && n != null && !a.hasOwnProperty(s)) switch (s) {
            case "value":
              break;
            case "children":
              break;
            default:
              pt(t, e, s, null, a, n);
          }
          for (i in a) if (n = a[i], u = l[i], a.hasOwnProperty(i) && (n != null || u != null)) switch (i) {
            case "value":
              x = n;
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
              n !== u && pt(t, e, i, n, a, u);
          }
          fs(t, x, z);
          return;
        case "option":
          for (var Y in l) x = l[Y], l.hasOwnProperty(Y) && x != null && !a.hasOwnProperty(Y) && (Y === "selected" ? t.selected = false : pt(t, e, Y, null, a, x));
          for (m in a) x = a[m], z = l[m], a.hasOwnProperty(m) && x !== z && (x != null || z != null) && (m === "selected" ? t.selected = x && typeof x != "function" && typeof x != "symbol" : pt(t, e, m, x, a, z));
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
          for (var Q in l) x = l[Q], l.hasOwnProperty(Q) && x != null && !a.hasOwnProperty(Q) && pt(t, e, Q, null, a, x);
          for (S in a) if (x = a[S], z = l[S], a.hasOwnProperty(S) && x !== z && (x != null || z != null)) switch (S) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (x != null) throw Error(r(137, e));
              break;
            default:
              pt(t, e, S, x, a, z);
          }
          return;
        default:
          if (Ni(e)) {
            for (var St in l) x = l[St], l.hasOwnProperty(St) && x !== void 0 && !a.hasOwnProperty(St) && df(t, e, St, void 0, a, x);
            for (T in a) x = a[T], z = l[T], !a.hasOwnProperty(T) || x === z || x === void 0 && z === void 0 || df(t, e, T, x, a, z);
            return;
          }
      }
      for (var g in l) x = l[g], l.hasOwnProperty(g) && x != null && !a.hasOwnProperty(g) && pt(t, e, g, null, a, x);
      for (U in a) x = a[U], z = l[U], !a.hasOwnProperty(U) || x === z || x == null && z == null || pt(t, e, U, x, a, z);
    }
    function md(t) {
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
    function zy() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, s = n.duration;
          if (u && s && md(i)) {
            for (i = 0, s = n.responseEnd, a += 1; a < l.length; a++) {
              var m = l[a], S = m.startTime;
              if (S > s) break;
              var T = m.transferSize, U = m.initiatorType;
              T && md(U) && (m = m.responseEnd, i += T * (m < s ? 1 : (s - S) / (m - S)));
            }
            if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var mf = null, yf = null;
    function Wu(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function yd(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function hd(t, e) {
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
    function hf(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var gf = null;
    function Ny() {
      var t = window.event;
      return t && t.type === "popstate" ? t === gf ? false : (gf = t, true) : (gf = null, false);
    }
    var gd = typeof setTimeout == "function" ? setTimeout : void 0, Ey = typeof clearTimeout == "function" ? clearTimeout : void 0, _d = typeof Promise == "function" ? Promise : void 0, Ty = typeof queueMicrotask == "function" ? queueMicrotask : typeof _d < "u" ? function(t) {
      return _d.resolve(null).then(t).catch(jy);
    } : gd;
    function jy(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Ml(t) {
      return t === "head";
    }
    function bd(t, e) {
      var l = e, a = 0;
      do {
        var n = l.nextSibling;
        if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), qa(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") wn(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, wn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, s = u.nodeName;
            u[Ja] || s === "SCRIPT" || s === "STYLE" || s === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && wn(t.ownerDocument.body);
        l = n;
      } while (l);
      qa(e);
    }
    function vd(t, e) {
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
    function _f(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            _f(l), Si(l);
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
    function My(t, e, l, a) {
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
        if (t = Ce(t.nextSibling), t === null) break;
      }
      return null;
    }
    function wy(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ce(t.nextSibling), t === null)) return null;
      return t;
    }
    function pd(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ce(t.nextSibling), t === null)) return null;
      return t;
    }
    function bf(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function vf(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function Oy(t, e) {
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
    function Ce(t) {
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
    var pf = null;
    function Sd(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return Ce(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function xd(t) {
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
      switch (e = Wu(l), t) {
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
    function wn(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      Si(t);
    }
    var Re = /* @__PURE__ */ new Map(), zd = /* @__PURE__ */ new Set();
    function Fu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var fl = H.d;
    H.d = {
      f: Uy,
      r: Dy,
      D: Cy,
      C: Ry,
      L: Hy,
      m: By,
      X: Yy,
      S: qy,
      M: Ly
    };
    function Uy() {
      var t = fl.f(), e = Gu();
      return t || e;
    }
    function Dy(t) {
      var e = aa(t);
      e !== null && e.tag === 5 && e.type === "form" ? Lr(e) : fl.r(t);
    }
    var Ra = typeof document > "u" ? null : document;
    function Nd(t, e, l) {
      var a = Ra;
      if (a && typeof e == "string" && e) {
        var n = Te(e);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), zd.has(n) || (zd.add(n), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(n) === null && (e = a.createElement("link"), $t(e, "link", t), Gt(e), a.head.appendChild(e)));
      }
    }
    function Cy(t) {
      fl.D(t), Nd("dns-prefetch", t, null);
    }
    function Ry(t, e) {
      fl.C(t, e), Nd("preconnect", t, e);
    }
    function Hy(t, e, l) {
      fl.L(t, e, l);
      var a = Ra;
      if (a && t && e) {
        var n = 'link[rel="preload"][as="' + Te(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Te(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Te(l.imageSizes) + '"]')) : n += '[href="' + Te(t) + '"]';
        var u = n;
        switch (e) {
          case "style":
            u = Ha(t);
            break;
          case "script":
            u = Ba(t);
        }
        Re.has(u) || (t = C({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), Re.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(On(u)) || e === "script" && a.querySelector(Un(u)) || (e = a.createElement("link"), $t(e, "link", t), Gt(e), a.head.appendChild(e)));
      }
    }
    function By(t, e) {
      fl.m(t, e);
      var l = Ra;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Te(a) + '"][href="' + Te(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Ba(t);
        }
        if (!Re.has(u) && (t = C({
          rel: "modulepreload",
          href: t
        }, e), Re.set(u, t), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Un(u))) return;
          }
          a = l.createElement("link"), $t(a, "link", t), Gt(a), l.head.appendChild(a);
        }
      }
    }
    function qy(t, e, l) {
      fl.S(t, e, l);
      var a = Ra;
      if (a && t) {
        var n = na(a).hoistableStyles, u = Ha(t);
        e = e || "default";
        var i = n.get(u);
        if (!i) {
          var s = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(On(u))) s.loading = 5;
          else {
            t = C({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = Re.get(u)) && Sf(t, l);
            var m = i = a.createElement("link");
            Gt(m), $t(m, "link", t), m._p = new Promise(function(S, T) {
              m.onload = S, m.onerror = T;
            }), m.addEventListener("load", function() {
              s.loading |= 1;
            }), m.addEventListener("error", function() {
              s.loading |= 2;
            }), s.loading |= 4, $u(i, e, a);
          }
          i = {
            type: "stylesheet",
            instance: i,
            count: 1,
            state: s
          }, n.set(u, i);
        }
      }
    }
    function Yy(t, e) {
      fl.X(t, e);
      var l = Ra;
      if (l && t) {
        var a = na(l).hoistableScripts, n = Ba(t), u = a.get(n);
        u || (u = l.querySelector(Un(n)), u || (t = C({
          src: t,
          async: true
        }, e), (e = Re.get(n)) && xf(t, e), u = l.createElement("script"), Gt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Ly(t, e) {
      fl.M(t, e);
      var l = Ra;
      if (l && t) {
        var a = na(l).hoistableScripts, n = Ba(t), u = a.get(n);
        u || (u = l.querySelector(Un(n)), u || (t = C({
          src: t,
          async: true,
          type: "module"
        }, e), (e = Re.get(n)) && xf(t, e), u = l.createElement("script"), Gt(u), $t(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Ed(t, e, l, a) {
      var n = (n = W.current) ? Fu(n) : null;
      if (!n) throw Error(r(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = Ha(l.href), l = na(n).hoistableStyles, a = l.get(e), a || (a = {
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
            t = Ha(l.href);
            var u = na(n).hoistableStyles, i = u.get(t);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, i), (u = n.querySelector(On(t))) && !u._p && (i.instance = u, i.state.loading = 5), Re.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Re.set(t, l), u || Gy(n, t, l, i.state))), e && a === null) throw Error(r(528, ""));
            return i;
          }
          if (e && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ba(l), l = na(n).hoistableScripts, a = l.get(e), a || (a = {
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
    function Ha(t) {
      return 'href="' + Te(t) + '"';
    }
    function On(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function Td(t) {
      return C({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Gy(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), $t(e, "link", l), Gt(e), t.head.appendChild(e));
    }
    function Ba(t) {
      return '[src="' + Te(t) + '"]';
    }
    function Un(t) {
      return "script[async]" + t;
    }
    function jd(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Te(l.href) + '"]');
          if (a) return e.instance = a, Gt(a), a;
          var n = C({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Gt(a), $t(a, "style", n), $u(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = Ha(l.href);
          var u = t.querySelector(On(n));
          if (u) return e.state.loading |= 4, e.instance = u, Gt(u), u;
          a = Td(l), (n = Re.get(n)) && Sf(a, n), u = (t.ownerDocument || t).createElement("link"), Gt(u);
          var i = u;
          return i._p = new Promise(function(s, m) {
            i.onload = s, i.onerror = m;
          }), $t(u, "link", a), e.state.loading |= 4, $u(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Ba(l.src), (n = t.querySelector(Un(u))) ? (e.instance = n, Gt(n), n) : (a = l, (n = Re.get(u)) && (a = C({}, l), xf(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Gt(n), $t(n, "link", a), t.head.appendChild(n), e.instance = n);
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
        var s = a[i];
        if (s.dataset.precedence === e) u = s;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function Sf(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function xf(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Iu = null;
    function Md(t, e, l) {
      if (Iu === null) {
        var a = /* @__PURE__ */ new Map(), n = Iu = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = Iu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(t)) return a;
      for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[Ja] || u[Jt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
          var i = u.getAttribute(e) || "";
          i = t + i;
          var s = a.get(i);
          s ? s.push(u) : a.set(i, [
            u
          ]);
        }
      }
      return a;
    }
    function wd(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function Xy(t, e, l) {
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
    function Od(t) {
      return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
    }
    function Qy(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = Ha(a.href), u = e.querySelector(On(n));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Pu.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Gt(u);
            return;
          }
          u = e.ownerDocument || e, a = Td(a), (n = Re.get(n)) && Sf(a, n), u = u.createElement("link"), Gt(u);
          var i = u;
          i._p = new Promise(function(s, m) {
            i.onload = s, i.onerror = m;
          }), $t(u, "link", a), l.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = Pu.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var Af = 0;
    function Zy(t, e) {
      return t.stylesheets && t.count === 0 && ei(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && ei(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Af === 0 && (Af = 62500 * zy());
        var n = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && ei(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > Af ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function Pu() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) ei(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var ti = null;
    function ei(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, ti = /* @__PURE__ */ new Map(), e.forEach(Vy, t), ti = null, Pu.call(t));
    }
    function Vy(t, e) {
      if (!(e.state.loading & 4)) {
        var l = ti.get(t);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), ti.set(t, l);
          for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
          }
          a && l.set(null, a);
        }
        n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = Pu.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
      }
    }
    var Dn = {
      $$typeof: k,
      Provider: null,
      Consumer: null,
      _currentValue: Z,
      _currentValue2: Z,
      _threadCount: 0
    };
    function Ky(t, e, l, a, n, u, i, s, m) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = _i(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _i(0), this.hiddenUpdates = _i(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Ud(t, e, l, a, n, u, i, s, m, S, T, U) {
      return t = new Ky(t, e, l, i, m, S, T, U, s), e = 1, u === true && (e |= 24), u = ye(3, null, null, e), t.current = u, u.stateNode = t, e = ec(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, uc(u), t;
    }
    function Dd(t) {
      return t ? (t = ya, t) : ya;
    }
    function Cd(t, e, l, a, n, u) {
      n = Dd(n), a.context === null ? a.context = n : a.pendingContext = n, a = bl(e), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = vl(t, a, e), l !== null && (fe(l, t, e), on(l, t, e));
    }
    function Rd(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function zf(t, e) {
      Rd(t, e), (t = t.alternate) && Rd(t, e);
    }
    function Hd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Ll(t, 67108864);
        e !== null && fe(e, t, 67108864), zf(t, 67108864);
      }
    }
    function Bd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ve();
        e = bi(e);
        var l = Ll(t, e);
        l !== null && fe(l, t, e), zf(t, e);
      }
    }
    var li = true;
    function Jy(t, e, l, a) {
      var n = M.T;
      M.T = null;
      var u = H.p;
      try {
        H.p = 2, Nf(t, e, l, a);
      } finally {
        H.p = u, M.T = n;
      }
    }
    function ky(t, e, l, a) {
      var n = M.T;
      M.T = null;
      var u = H.p;
      try {
        H.p = 8, Nf(t, e, l, a);
      } finally {
        H.p = u, M.T = n;
      }
    }
    function Nf(t, e, l, a) {
      if (li) {
        var n = Ef(a);
        if (n === null) of(t, e, a, ai, l), Yd(t, a);
        else if (Fy(n, t, e, l, a)) a.stopPropagation();
        else if (Yd(t, a), e & 4 && -1 < Wy.indexOf(t)) {
          for (; n !== null; ) {
            var u = aa(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Rl(u.pendingLanes);
                  if (i !== 0) {
                    var s = u;
                    for (s.pendingLanes |= 2, s.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - de(i);
                      s.entanglements[1] |= m, i &= ~m;
                    }
                    Xe(u), (ot & 6) === 0 && (Yu = re() + 500, Tn(0));
                  }
                }
                break;
              case 31:
              case 13:
                s = Ll(u, 2), s !== null && fe(s, u, 2), Gu(), zf(u, 2);
            }
            if (u = Ef(a), u === null && of(t, e, a, ai, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else of(t, e, a, null, l);
      }
    }
    function Ef(t) {
      return t = Ti(t), Tf(t);
    }
    var ai = null;
    function Tf(t) {
      if (ai = null, t = la(t), t !== null) {
        var e = E(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = A(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = N(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return ai = t, null;
    }
    function qd(t) {
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
          switch (Cm()) {
            case Vf:
              return 2;
            case Kf:
              return 8;
            case Kn:
            case Rm:
              return 32;
            case Jf:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var jf = false, wl = null, Ol = null, Ul = null, Cn = /* @__PURE__ */ new Map(), Rn = /* @__PURE__ */ new Map(), Dl = [], Wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Yd(t, e) {
      switch (t) {
        case "focusin":
        case "focusout":
          wl = null;
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
          Cn.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Rn.delete(e.pointerId);
      }
    }
    function Hn(t, e, l, a, n, u) {
      return t === null || t.nativeEvent !== u ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, e !== null && (e = aa(e), e !== null && Hd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
    }
    function Fy(t, e, l, a, n) {
      switch (e) {
        case "focusin":
          return wl = Hn(wl, t, e, l, a, n), true;
        case "dragenter":
          return Ol = Hn(Ol, t, e, l, a, n), true;
        case "mouseover":
          return Ul = Hn(Ul, t, e, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Cn.set(u, Hn(Cn.get(u) || null, t, e, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Rn.set(u, Hn(Rn.get(u) || null, t, e, l, a, n)), true;
      }
      return false;
    }
    function Ld(t) {
      var e = la(t.target);
      if (e !== null) {
        var l = E(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = A(l), e !== null) {
              t.blockedOn = e, Pf(t.priority, function() {
                Bd(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = N(l), e !== null) {
              t.blockedOn = e, Pf(t.priority, function() {
                Bd(l);
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
    function ni(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = Ef(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          Ei = a, l.target.dispatchEvent(a), Ei = null;
        } else return e = aa(l), e !== null && Hd(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function Gd(t, e, l) {
      ni(t) && l.delete(e);
    }
    function $y() {
      jf = false, wl !== null && ni(wl) && (wl = null), Ol !== null && ni(Ol) && (Ol = null), Ul !== null && ni(Ul) && (Ul = null), Cn.forEach(Gd), Rn.forEach(Gd);
    }
    function ui(t, e) {
      t.blockedOn === e && (t.blockedOn = null, jf || (jf = true, f.unstable_scheduleCallback(f.unstable_NormalPriority, $y)));
    }
    var ii = null;
    function Xd(t) {
      ii !== t && (ii = t, f.unstable_scheduleCallback(f.unstable_NormalPriority, function() {
        ii === t && (ii = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (Tf(a || l) === null) continue;
            break;
          }
          var u = aa(l);
          u !== null && (t.splice(e, 3), e -= 3, Nc(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function qa(t) {
      function e(m) {
        return ui(m, t);
      }
      wl !== null && ui(wl, t), Ol !== null && ui(Ol, t), Ul !== null && ui(Ul, t), Cn.forEach(e), Rn.forEach(e);
      for (var l = 0; l < Dl.length; l++) {
        var a = Dl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Dl.length && (l = Dl[0], l.blockedOn === null); ) Ld(l), l.blockedOn === null && Dl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[le] || null;
        if (typeof u == "function") i || Xd(l);
        else if (i) {
          var s = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[le] || null) s = i.formAction;
            else if (Tf(n) !== null) continue;
          } else s = i.action;
          typeof s == "function" ? l[a + 1] = s : (l.splice(a, 3), a -= 3), Xd(l);
        }
      }
    }
    function Qd() {
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
    function Mf(t) {
      this._internalRoot = t;
    }
    ci.prototype.render = Mf.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current, a = ve();
      Cd(l, a, t, e, null, null);
    }, ci.prototype.unmount = Mf.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Cd(t.current, 2, null, t, null, null), Gu(), e[ea] = null;
      }
    };
    function ci(t) {
      this._internalRoot = t;
    }
    ci.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = If();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < Dl.length && e !== 0 && e < Dl[l].priority; l++) ;
        Dl.splice(l, 0, t), l === 0 && Ld(t);
      }
    };
    var Zd = c.version;
    if (Zd !== "19.2.3") throw Error(r(527, Zd, "19.2.3"));
    H.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
      return t = b(e), t = t !== null ? D(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var Iy = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: M,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!fi.isDisabled && fi.supportsFiber) try {
        Za = fi.inject(Iy), oe = fi;
      } catch {
      }
    }
    return qn.createRoot = function(t, e) {
      if (!_(t)) throw Error(r(299));
      var l = false, a = "", n = Fr, u = $r, i = Ir;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Ud(t, 1, false, null, null, l, a, null, n, u, i, Qd), t[ea] = e.current, rf(t), new Mf(e);
    }, qn.hydrateRoot = function(t, e, l) {
      if (!_(t)) throw Error(r(299));
      var a = false, n = "", u = Fr, i = $r, s = Ir, m = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (s = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Ud(t, 1, true, e, l ?? null, a, n, m, u, i, s, Qd), e.context = Dd(null), l = e.current, a = ve(), a = bi(a), n = bl(a), n.callback = null, vl(l, n, a), l = a, e.current.lanes = l, Ka(e, l), Xe(e), t[ea] = e.current, rf(t), new ci(e);
    }, qn.version = "19.2.3", qn;
  }
  var tm;
  function sh() {
    if (tm) return Uf.exports;
    tm = 1;
    function f() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(f);
      } catch (c) {
        console.error(c);
      }
    }
    return f(), Uf.exports = fh(), Uf.exports;
  }
  var rh = sh();
  const oh = vm(rh), dh = "modulepreload", mh = function(f, c) {
    return new URL(f, c).href;
  }, em = {}, Hf = function(c, d, r) {
    let _ = Promise.resolve();
    if (d && d.length > 0) {
      let b = function(D) {
        return Promise.all(D.map((C) => Promise.resolve(C).then((q) => ({
          status: "fulfilled",
          value: q
        }), (q) => ({
          status: "rejected",
          reason: q
        }))));
      };
      const A = document.getElementsByTagName("link"), N = document.querySelector("meta[property=csp-nonce]"), w = (N == null ? void 0 : N.nonce) || (N == null ? void 0 : N.getAttribute("nonce"));
      _ = b(d.map((D) => {
        if (D = mh(D, r), D in em) return;
        em[D] = true;
        const C = D.endsWith(".css"), q = C ? '[rel="stylesheet"]' : "";
        if (r) for (let ut = A.length - 1; ut >= 0; ut--) {
          const _t = A[ut];
          if (_t.href === D && (!C || _t.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${D}"]${q}`)) return;
        const tt = document.createElement("link");
        if (tt.rel = C ? "stylesheet" : dh, C || (tt.as = "script"), tt.crossOrigin = "", tt.href = D, w && tt.setAttribute("nonce", w), document.head.appendChild(tt), C) return new Promise((ut, _t) => {
          tt.addEventListener("load", ut), tt.addEventListener("error", () => _t(new Error(`Unable to preload CSS for ${D}`)));
        });
      }));
    }
    function E(A) {
      const N = new Event("vite:preloadError", {
        cancelable: true
      });
      if (N.payload = A, window.dispatchEvent(N), !N.defaultPrevented) throw A;
    }
    return _.then((A) => {
      for (const N of A || []) N.status === "rejected" && E(N.reason);
      return c().catch(E);
    });
  };
  const yh = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), hh = (f) => f.replace(/^([A-Z])|[\s-_]+(\w)/g, (c, d, r) => r ? r.toUpperCase() : d.toLowerCase()), lm = (f) => {
    const c = hh(f);
    return c.charAt(0).toUpperCase() + c.slice(1);
  }, pm = (...f) => f.filter((c, d, r) => !!c && c.trim() !== "" && r.indexOf(c) === d).join(" ").trim(), gh = (f) => {
    for (const c in f) if (c.startsWith("aria-") || c === "role" || c === "title") return true;
  };
  var _h = {
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
  const bh = mt.forwardRef(({ color: f = "currentColor", size: c = 24, strokeWidth: d = 2, absoluteStrokeWidth: r, className: _ = "", children: E, iconNode: A, ...N }, w) => mt.createElement("svg", {
    ref: w,
    ..._h,
    width: c,
    height: c,
    stroke: f,
    strokeWidth: r ? Number(d) * 24 / Number(c) : d,
    className: pm("lucide", _),
    ...!E && !gh(N) && {
      "aria-hidden": "true"
    },
    ...N
  }, [
    ...A.map(([b, D]) => mt.createElement(b, D)),
    ...Array.isArray(E) ? E : [
      E
    ]
  ]));
  const qt = (f, c) => {
    const d = mt.forwardRef(({ className: r, ..._ }, E) => mt.createElement(bh, {
      ref: E,
      iconNode: c,
      className: pm(`lucide-${yh(lm(f))}`, `lucide-${f}`, r),
      ..._
    }));
    return d.displayName = lm(f), d;
  };
  const vh = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], am = qt("activity", vh);
  const ph = [
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
  ], Sh = qt("book-open", ph);
  const xh = [
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
  ], Ah = qt("building-2", xh);
  const zh = [
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
  ], Nh = qt("bug", zh);
  const Eh = [
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
  ], Sm = qt("clock", Eh);
  const Th = [
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
  ], jh = qt("download", Th);
  const Mh = [
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
  ], nm = qt("file-text", Mh);
  const wh = [
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
  ], Oh = qt("guitar", wh);
  const Uh = [
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
  ], Dh = qt("image", Uh);
  const Ch = [
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
  ], Rh = qt("log-out", Ch);
  const Hh = [
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
  ], Bh = qt("mic", Hh);
  const qh = [
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
  ], Yh = qt("monitor", qh);
  const Lh = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], Gh = qt("moon", Lh);
  const Xh = [
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
  ], Qn = qt("music", Xh);
  const Qh = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], Zh = qt("play", Qh);
  const Vh = [
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
  ], Zn = qt("plus", Vh);
  const Kh = [
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
  ], Jh = qt("sun", Kh);
  const kh = [
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
  ], Ya = qt("trash-2", kh);
  const Wh = [
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
  ], um = qt("trending-up", Wh);
  const Fh = [
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
  ], xm = qt("upload", Fh);
  function $h({ file: f, onFileUpload: c, isParsingMetadata: d = false, metadataSummary: r }) {
    const _ = (E) => {
      var _a;
      c(((_a = E.target.files) == null ? void 0 : _a[0]) || null);
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
          "aria-busy": d,
          children: [
            o.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                o.jsx("div", {
                  className: "rounded-full bg-primary/15 p-2 text-primary",
                  children: o.jsx(nm, {
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
              onChange: _,
              className: "sr-only"
            })
          ]
        }),
        f && o.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            o.jsx(nm, {
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
          children: d ? o.jsxs("span", {
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
  const im = [
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
  ], cm = [
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
  ], fm = [
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
      placeholder: "floEditor"
    }
  ], sm = [
    {
      key: "url_commercial",
      label: "Commercial URL",
      placeholder: "https://example.com/buy",
      colSpan: "full"
    }
  ];
  function Ih({ metadata: f, onMetadataChange: c }) {
    var _a, _b;
    const d = Object.values(f).filter((E) => typeof E == "string" && E.trim().length > 0).length, r = im.length + cm.length + fm.length + sm.length + 1, _ = ({ key: E, label: A, placeholder: N, type: w, colSpan: b }) => {
      const D = f[E], C = typeof D == "string" || typeof D == "number" ? D : "";
      return o.jsxs("div", {
        className: `space-y-2 ${b === "full" ? "md:col-span-2" : ""}`,
        children: [
          o.jsx("label", {
            htmlFor: E,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: A
          }),
          o.jsx("input", {
            id: E,
            value: C,
            onChange: (q) => c(E, w === "number" ? parseInt(q.target.value) || void 0 : q.target.value),
            placeholder: N,
            type: w ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, E);
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
                d,
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
                  children: im.map(_)
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
                  children: cm.map(_)
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
                  children: fm.map(_)
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
                  children: sm.map(_)
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
              onChange: (E) => c("comments", [
                {
                  text: E.target.value
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
  const rm = [
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
  ], Ph = [
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
  function tg({ pictures: f = [], onPicturesChange: c, coverVariants: d = [], onCoverVariantsChange: r, animatedCover: _, onAnimatedCoverChange: E }) {
    const A = async (K, X) => {
      var _a, _b;
      const $ = (_a = K.target.files) == null ? void 0 : _a[0];
      if ($) {
        if (!$.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if ($.size > 10485760) {
          alert("Image size must be less than 10MB");
          return;
        }
        const k = await $.arrayBuffer(), Tt = new Uint8Array(k), Qt = {
          mime_type: $.type,
          picture_type: X,
          description: `${(_b = rm.find((I) => I.value === X)) == null ? void 0 : _b.label} Art`,
          data: Tt
        }, Ut = f.filter((I) => I.picture_type !== X);
        Ut.push(Qt), c(Ut);
      }
    }, N = (K) => {
      c(f.filter((X) => X.picture_type !== K));
    }, w = () => {
      r([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, b = async (K, X) => {
      var _a;
      const $ = (_a = X.target.files) == null ? void 0 : _a[0];
      if ($) {
        if (!$.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const k = await $.arrayBuffer(), Tt = [
          ...d
        ];
        Tt[K].data = new Uint8Array(k), Tt[K].mime_type = $.type, r(Tt);
      }
    }, D = (K, X, $) => {
      const k = [
        ...d
      ];
      k[K] = {
        ...k[K],
        [X]: $
      }, r(k);
    }, C = (K) => {
      r(d.filter((X, $) => $ !== K));
    }, q = async (K) => {
      var _a;
      const X = (_a = K.target.files) == null ? void 0 : _a[0];
      if (X) {
        if (!X.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const $ = await X.arrayBuffer(), k = new Uint8Array($), Tt = {
          mime_type: X.type,
          data: k,
          duration_ms: 3e3,
          loop_count: 0
        };
        E(Tt);
      }
    }, tt = (K, X) => {
      _ && E({
        ..._,
        [K]: X
      });
    }, ut = () => {
      E(void 0);
    }, _t = (K, X) => URL.createObjectURL(new Blob([
      K
    ], {
      type: X
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
                  children: rm.map(({ value: K, label: X }) => {
                    const $ = f.find((k) => k.picture_type === K);
                    return o.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: $ ? o.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          o.jsx("img", {
                            src: _t($.data, $.mime_type),
                            alt: X,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          o.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              o.jsx("span", {
                                className: "text-sm font-medium",
                                children: X
                              }),
                              o.jsx("button", {
                                onClick: () => N(K),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: o.jsx(Ya, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : o.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          o.jsx(Zn, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          o.jsx("span", {
                            className: "text-xs font-medium",
                            children: X
                          }),
                          o.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (k) => A(k, K),
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
                      onClick: w,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Zn, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Variant"
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "space-y-3",
                  children: d.length === 0 ? o.jsxs("div", {
                    className: "text-center text-muted-foreground py-4",
                    children: [
                      o.jsx(Dh, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      o.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : d.map((K, X) => o.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      o.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          o.jsx("select", {
                            value: K.variant_type,
                            onChange: ($) => D(X, "variant_type", $.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: Ph.map(({ value: $, label: k }) => o.jsx("option", {
                              value: $,
                              children: k
                            }, $))
                          }),
                          o.jsx("input", {
                            value: K.description || "",
                            onChange: ($) => D(X, "description", $.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          o.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              o.jsx(xm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              o.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: ($) => b(X, $),
                                className: "hidden"
                              })
                            ]
                          }),
                          o.jsx("button", {
                            onClick: () => C(X),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: o.jsx(Ya, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      K.data.length > 0 && o.jsx("img", {
                        src: _t(K.data, K.mime_type),
                        alt: K.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, X))
                })
              ]
            }),
            o.jsxs("div", {
              children: [
                o.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Animated Cover"
                }),
                _ ? o.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    o.jsx("img", {
                      src: _t(_.data, _.mime_type),
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
                              value: _.duration_ms || 0,
                              onChange: (K) => tt("duration_ms", parseInt(K.target.value) || 0),
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
                              value: _.loop_count || 0,
                              onChange: (K) => tt("loop_count", parseInt(K.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    o.jsxs("button", {
                      onClick: ut,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        o.jsx(Ya, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : o.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    o.jsx(Zh, {
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
                      onChange: q,
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
  const si = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, om = {
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
  function eg({ syncedLyrics: f = [], onSyncedLyricsChange: c, lrcText: d, onLrcTextChange: r, onImport: _, unsyncedLyrics: E, onUnsyncedLyricsChange: A }) {
    var _a, _b;
    const N = f.length > 0 ? f[0] : {
      ...si,
      lines: []
    }, w = () => {
      const C = [
        ...f
      ];
      C.length === 0 ? C.push({
        content_type: "lyrics",
        lines: [
          {
            text: "",
            timestamp_ms: 0
          }
        ]
      }) : C[0].lines.push({
        text: "",
        timestamp_ms: 0
      }), c(C);
    }, b = (C, q, tt) => {
      const ut = [
        ...f
      ];
      ut.length > 0 && (ut[0].lines[C] = {
        text: q,
        timestamp_ms: tt
      }, c(ut));
    }, D = (C) => {
      const q = [
        ...f
      ];
      q.length > 0 && (q[0].lines.splice(C, 1), c(q));
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
                ((_a = N.lines) == null ? void 0 : _a.length) || 0,
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
                      onClick: _,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(xm, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Import"
                      ]
                    })
                  ]
                }),
                o.jsx("textarea", {
                  value: d,
                  onChange: (C) => r(C.target.value),
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
                      value: N.language || "",
                      onChange: (C) => {
                        const q = [
                          ...f
                        ];
                        q.length > 0 && (q[0].language = C.target.value, c(q));
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
                      value: E,
                      onChange: (C) => A(C.target.value),
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
                      onClick: w,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        o.jsx(Zn, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                o.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = N.lines) == null ? void 0 : _b.map((C, q) => o.jsx(lg, {
                    index: q,
                    text: C.text,
                    timestamp: C.timestamp_ms,
                    onUpdate: b,
                    onDelete: D
                  }, q))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function lg({ index: f, text: c, timestamp: d, onUpdate: r, onDelete: _ }) {
    return o.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        o.jsx("input", {
          value: c,
          onChange: (E) => r(f, E.target.value, d),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        }),
        o.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            o.jsx(Sm, {
              className: "h-4 w-4 icon-accent"
            }),
            o.jsx("input", {
              type: "number",
              value: d,
              onChange: (E) => r(f, c, parseInt(E.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        }),
        o.jsx("button", {
          onClick: () => _(f),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          children: o.jsx(Ya, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  const dm = [
    {
      value: "intro",
      label: "Intro",
      icon: Qn
    },
    {
      value: "verse",
      label: "Verse",
      icon: Sh
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: Bh
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: Ah
    },
    {
      value: "solo",
      label: "Solo",
      icon: Oh
    },
    {
      value: "outro",
      label: "Outro",
      icon: Rh
    }
  ];
  function ag({ sectionMarkers: f = [], onSectionMarkersChange: c }) {
    const d = () => {
      c([
        ...f,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, r = (A, N, w) => {
      const b = [
        ...f
      ];
      b[A] = {
        ...b[A],
        [N]: w
      }, c(b);
    }, _ = (A) => {
      c(f.filter((N, w) => w !== A));
    }, E = (A) => {
      const N = Math.floor(A / 1e3), w = Math.floor(N / 60), b = N % 60, D = Math.floor(A % 1e3 / 10);
      return `${w}:${b.toString().padStart(2, "0")}.${D.toString().padStart(2, "0")}`;
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
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                o.jsx(Zn, {
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
              o.jsx(Qn, {
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
          }) : f.map((A, N) => {
            var _a;
            const b = ((_a = dm.find((D) => D.value === A.section_type)) == null ? void 0 : _a.icon) || Qn;
            return o.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                o.jsx(b, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                o.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    o.jsx(Sm, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    o.jsx("input", {
                      type: "number",
                      value: A.timestamp_ms,
                      onChange: (D) => r(N, "timestamp_ms", Math.max(0, parseInt(D.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    o.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        E(A.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                o.jsx("select", {
                  value: A.section_type,
                  onChange: (D) => r(N, "section_type", D.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: dm.map(({ value: D, label: C }) => o.jsx("option", {
                    value: D,
                    children: C
                  }, D))
                }),
                o.jsx("input", {
                  value: A.label || "",
                  onChange: (D) => r(N, "label", D.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                o.jsx("button", {
                  onClick: () => _(N),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: o.jsx(Ya, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, N);
          })
        })
      ]
    });
  }
  function ng({ bpmMap: f = [], onBpmMapChange: c }) {
    const d = () => {
      c([
        ...f,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, r = (N, w, b) => {
      const D = [
        ...f
      ];
      D[N] = {
        ...D[N],
        [w]: b
      }, c(D);
    }, _ = (N) => {
      c(f.filter((w, b) => b !== N));
    }, E = (N) => {
      const w = Math.floor(N / 1e3), b = Math.floor(w / 60), D = w % 60;
      return `${b}:${D.toString().padStart(2, "0")}`;
    }, A = [
      ...f
    ].sort((N, w) => N.timestamp_ms - w.timestamp_ms);
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
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                o.jsx(Zn, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        o.jsx("div", {
          className: "space-y-3",
          children: A.length === 0 ? o.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              o.jsx(um, {
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
                  o.jsx(am, {
                    className: "h-4 w-4"
                  }),
                  o.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      A.map((N, w) => `${E(N.timestamp_ms)} \u2192 ${N.bpm} BPM${w < A.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              A.map((N, w) => o.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  o.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      o.jsx(am, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      o.jsx("input", {
                        type: "number",
                        value: N.timestamp_ms,
                        onChange: (b) => r(w, "timestamp_ms", Math.max(0, parseInt(b.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      o.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          E(N.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  o.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      o.jsx(um, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      o.jsx("input", {
                        type: "number",
                        value: N.bpm,
                        onChange: (b) => r(w, "bpm", Math.max(1, parseFloat(b.target.value) || 120)),
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
                    onClick: () => _(w),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: o.jsx(Ya, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, w))
            ]
          })
        })
      ]
    });
  }
  function ug({ disabled: f, isProcessing: c, fileName: d, onProcess: r }) {
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
                children: d ? `Render tags into ${d}` : "Load a flo\u2122 to begin"
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
            children: c ? o.jsxs(o.Fragment, {
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
                  children: o.jsx(jh, {
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
  function mm({ type: f, message: c }) {
    const d = f === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return o.jsx("div", {
      className: `${d} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: c
    });
  }
  const Am = "floeditor-theme", ri = () => typeof window < "u" && typeof document < "u", ig = () => {
    if (!ri()) return "auto";
    const f = window.localStorage.getItem(Am);
    return f === "light" || f === "dark" || f === "auto" ? f : "auto";
  };
  function cg() {
    const [f, c] = mt.useState(ig), [d, r] = mt.useState("light");
    return mt.useEffect(() => {
      if (!ri()) return;
      const A = window.matchMedia("(prefers-color-scheme: dark)"), N = () => r(A.matches ? "dark" : "light");
      return N(), A.addEventListener("change", N), () => {
        A.removeEventListener("change", N);
      };
    }, []), mt.useEffect(() => {
      if (!ri()) return;
      const A = document.documentElement;
      (f === "auto" ? d : f) === "dark" ? (A.classList.add("dark"), A.style.colorScheme = "dark") : (A.classList.remove("dark"), A.style.colorScheme = "light");
    }, [
      f,
      d
    ]), {
      theme: f,
      resolvedTheme: f === "auto" ? d : f,
      setTheme: (A) => {
        c(A), ri() && window.localStorage.setItem(Am, A);
      }
    };
  }
  const ym = [
    {
      value: "auto",
      label: "Auto",
      icon: Yh
    },
    {
      value: "light",
      label: "Light",
      icon: Jh
    },
    {
      value: "dark",
      label: "Dark",
      icon: Gh
    }
  ];
  function fg() {
    var _a;
    const { theme: f, setTheme: c } = cg(), d = ((_a = ym.find((r) => r.value === f)) == null ? void 0 : _a.label) ?? "Auto";
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
              children: d
            })
          ]
        }),
        o.jsx("div", {
          className: "mt-2 grid grid-cols-3 gap-2",
          children: ym.map(({ value: r, label: _, icon: E }) => {
            const A = f === r;
            return o.jsxs("button", {
              type: "button",
              onClick: () => c(r),
              "aria-pressed": A,
              "aria-label": `Switch theme to ${_}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": A,
              children: [
                o.jsx(E, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                o.jsx("span", {
                  children: _
                })
              ]
            }, r);
          })
        })
      ]
    });
  }
  let j;
  function sg(f) {
    const c = j.__externref_table_alloc();
    return j.__wbindgen_externrefs.set(c, f), c;
  }
  function qf(f) {
    const c = typeof f;
    if (c == "number" || c == "boolean" || f == null) return `${f}`;
    if (c == "string") return `"${f}"`;
    if (c == "symbol") {
      const _ = f.description;
      return _ == null ? "Symbol" : `Symbol(${_})`;
    }
    if (c == "function") {
      const _ = f.name;
      return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
    }
    if (Array.isArray(f)) {
      const _ = f.length;
      let E = "[";
      _ > 0 && (E += qf(f[0]));
      for (let A = 1; A < _; A++) E += ", " + qf(f[A]);
      return E += "]", E;
    }
    const d = /\[object ([^\]]+)\]/.exec(toString.call(f));
    let r;
    if (d && d.length > 1) r = d[1];
    else return toString.call(f);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(f) + ")";
    } catch {
      return "Object";
    }
    return f instanceof Error ? `${f.name}: ${f.message}
${f.stack}` : r;
  }
  function Gf(f, c) {
    return f = f >>> 0, zm().subarray(f / 4, f / 4 + c);
  }
  function Se(f, c) {
    return f = f >>> 0, Ga().subarray(f / 1, f / 1 + c);
  }
  let Pl = null;
  function Qe() {
    return (Pl === null || Pl.buffer.detached === true || Pl.buffer.detached === void 0 && Pl.buffer !== j.memory.buffer) && (Pl = new DataView(j.memory.buffer)), Pl;
  }
  let Ln = null;
  function zm() {
    return (Ln === null || Ln.byteLength === 0) && (Ln = new Float32Array(j.memory.buffer)), Ln;
  }
  function La(f, c) {
    return f = f >>> 0, og(f, c);
  }
  let Gn = null;
  function Ga() {
    return (Gn === null || Gn.byteLength === 0) && (Gn = new Uint8Array(j.memory.buffer)), Gn;
  }
  function Yn(f, c) {
    try {
      return f.apply(this, c);
    } catch (d) {
      const r = sg(d);
      j.__wbindgen_exn_store(r);
    }
  }
  function pe(f) {
    return f == null;
  }
  function Lt(f, c) {
    const d = c(f.length * 1, 1) >>> 0;
    return Ga().set(f, d / 1), ft = f.length, d;
  }
  function Xf(f, c) {
    const d = c(f.length * 4, 4) >>> 0;
    return zm().set(f, d / 4), ft = f.length, d;
  }
  function ta(f, c, d) {
    if (d === void 0) {
      const N = Xn.encode(f), w = c(N.length, 1) >>> 0;
      return Ga().subarray(w, w + N.length).set(N), ft = N.length, w;
    }
    let r = f.length, _ = c(r, 1) >>> 0;
    const E = Ga();
    let A = 0;
    for (; A < r; A++) {
      const N = f.charCodeAt(A);
      if (N > 127) break;
      E[_ + A] = N;
    }
    if (A !== r) {
      A !== 0 && (f = f.slice(A)), _ = d(_, r, r = A + f.length * 3, 1) >>> 0;
      const N = Ga().subarray(_ + A, _ + r), w = Xn.encodeInto(f, N);
      A += w.written, _ = d(_, r, A, 1) >>> 0;
    }
    return ft = A, _;
  }
  function gt(f) {
    const c = j.__wbindgen_externrefs.get(f);
    return j.__externref_table_dealloc(f), c;
  }
  let oi = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  oi.decode();
  const rg = 2146435072;
  let Bf = 0;
  function og(f, c) {
    return Bf += c, Bf >= rg && (oi = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), oi.decode(), Bf = c), oi.decode(Ga().subarray(f, f + c));
  }
  const Xn = new TextEncoder();
  "encodeInto" in Xn || (Xn.encodeInto = function(f, c) {
    const d = Xn.encode(f);
    return c.set(d), {
      read: f.length,
      written: d.length
    };
  });
  let ft = 0;
  const hm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((f) => j.__wbg_audioinfo_free(f >>> 0, 1)), gm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((f) => j.__wbg_wasmstreamingdecoder_free(f >>> 0, 1));
  class Xa {
    static __wrap(c) {
      c = c >>> 0;
      const d = Object.create(Xa.prototype);
      return d.__wbg_ptr = c, hm.register(d, d.__wbg_ptr, d), d;
    }
    __destroy_into_raw() {
      const c = this.__wbg_ptr;
      return this.__wbg_ptr = 0, hm.unregister(this), c;
    }
    free() {
      const c = this.__destroy_into_raw();
      j.__wbg_audioinfo_free(c, 0);
    }
    get sample_rate() {
      return j.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
    }
    set sample_rate(c) {
      j.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, c);
    }
    get channels() {
      return j.__wbg_get_audioinfo_channels(this.__wbg_ptr);
    }
    set channels(c) {
      j.__wbg_set_audioinfo_channels(this.__wbg_ptr, c);
    }
    get bit_depth() {
      return j.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
    }
    set bit_depth(c) {
      j.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, c);
    }
    get total_frames() {
      const c = j.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
      return BigInt.asUintN(64, c);
    }
    set total_frames(c) {
      j.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, c);
    }
    get duration_secs() {
      return j.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
    }
    set duration_secs(c) {
      j.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, c);
    }
    get file_size() {
      return j.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
    }
    set file_size(c) {
      j.__wbg_set_audioinfo_file_size(this.__wbg_ptr, c);
    }
    get compression_ratio() {
      return j.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
    }
    set compression_ratio(c) {
      j.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, c);
    }
    get crc_valid() {
      return j.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
    }
    set crc_valid(c) {
      j.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, c);
    }
    get is_lossy() {
      return j.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
    }
    set is_lossy(c) {
      j.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, c);
    }
    get lossy_quality() {
      return j.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
    }
    set lossy_quality(c) {
      j.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, c);
    }
    get version() {
      let c, d;
      try {
        const r = j.audioinfo_version(this.__wbg_ptr);
        return c = r[0], d = r[1], La(r[0], r[1]);
      } finally {
        j.__wbindgen_free(c, d, 1);
      }
    }
  }
  Symbol.dispose && (Xa.prototype[Symbol.dispose] = Xa.prototype.free);
  class Yf {
    __destroy_into_raw() {
      const c = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gm.unregister(this), c;
    }
    free() {
      const c = this.__destroy_into_raw();
      j.__wbg_wasmstreamingdecoder_free(c, 0);
    }
    next_frame() {
      const c = j.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (c[2]) throw gt(c[1]);
      return gt(c[0]);
    }
    is_finished() {
      return j.wasmstreamingdecoder_is_finished(this.__wbg_ptr) !== 0;
    }
    buffered_bytes() {
      return j.wasmstreamingdecoder_buffered_bytes(this.__wbg_ptr) >>> 0;
    }
    available_frames() {
      return j.wasmstreamingdecoder_available_frames(this.__wbg_ptr) >>> 0;
    }
    decode_available() {
      const c = j.wasmstreamingdecoder_decode_available(this.__wbg_ptr);
      if (c[3]) throw gt(c[2]);
      var d = Gf(c[0], c[1]).slice();
      return j.__wbindgen_free(c[0], c[1] * 4, 4), d;
    }
    current_frame_index() {
      return j.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const c = j.wasmstreamingdecoder_new();
      return this.__wbg_ptr = c >>> 0, gm.register(this, this.__wbg_ptr, this), this;
    }
    feed(c) {
      const d = Lt(c, j.__wbindgen_malloc), r = ft, _ = j.wasmstreamingdecoder_feed(this.__wbg_ptr, d, r);
      if (_[2]) throw gt(_[1]);
      return _[0] !== 0;
    }
    reset() {
      j.wasmstreamingdecoder_reset(this.__wbg_ptr);
    }
    state() {
      let c, d;
      try {
        const r = j.wasmstreamingdecoder_state(this.__wbg_ptr);
        return c = r[0], d = r[1], La(r[0], r[1]);
      } finally {
        j.__wbindgen_free(c, d, 1);
      }
    }
    get_info() {
      const c = j.wasmstreamingdecoder_get_info(this.__wbg_ptr);
      if (c[2]) throw gt(c[1]);
      return gt(c[0]);
    }
    is_ready() {
      return j.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return j.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (Yf.prototype[Symbol.dispose] = Yf.prototype.free);
  function dg(f, c, d) {
    var r = pe(f) ? 0 : ta(f, j.__wbindgen_malloc, j.__wbindgen_realloc), _ = ft, E = pe(c) ? 0 : ta(c, j.__wbindgen_malloc, j.__wbindgen_realloc), A = ft, N = pe(d) ? 0 : ta(d, j.__wbindgen_malloc, j.__wbindgen_realloc), w = ft;
    const b = j.create_metadata(r, _, E, A, N, w);
    if (b[3]) throw gt(b[2]);
    var D = Se(b[0], b[1]).slice();
    return j.__wbindgen_free(b[0], b[1] * 1, 1), D;
  }
  function Nm(f) {
    const c = j.create_metadata_from_object(f);
    if (c[3]) throw gt(c[2]);
    var d = Se(c[0], c[1]).slice();
    return j.__wbindgen_free(c[0], c[1] * 1, 1), d;
  }
  function mg(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.decode(c, d);
    if (r[3]) throw gt(r[2]);
    var _ = Gf(r[0], r[1]).slice();
    return j.__wbindgen_free(r[0], r[1] * 4, 4), _;
  }
  function yg(f, c, d, r, _) {
    const E = Xf(f, j.__wbindgen_malloc), A = ft;
    var N = pe(_) ? 0 : Lt(_, j.__wbindgen_malloc), w = ft;
    const b = j.encode(E, A, c, d, r, N, w);
    if (b[3]) throw gt(b[2]);
    var D = Se(b[0], b[1]).slice();
    return j.__wbindgen_free(b[0], b[1] * 1, 1), D;
  }
  function hg(f, c, d, r, _, E) {
    const A = Xf(f, j.__wbindgen_malloc), N = ft;
    var w = pe(E) ? 0 : Lt(E, j.__wbindgen_malloc), b = ft;
    const D = j.encode_lossy(A, N, c, d, r, _, w, b);
    if (D[3]) throw gt(D[2]);
    var C = Se(D[0], D[1]).slice();
    return j.__wbindgen_free(D[0], D[1] * 1, 1), C;
  }
  function gg(f, c, d, r, _, E) {
    const A = Xf(f, j.__wbindgen_malloc), N = ft;
    var w = pe(E) ? 0 : Lt(E, j.__wbindgen_malloc), b = ft;
    const D = j.encode_with_bitrate(A, N, c, d, r, _, w, b);
    if (D[3]) throw gt(D[2]);
    var C = Se(D[0], D[1]).slice();
    return j.__wbindgen_free(D[0], D[1] * 1, 1), C;
  }
  function _g(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.get_cover_art(c, d);
    if (r[2]) throw gt(r[1]);
    return gt(r[0]);
  }
  function Qf(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.get_metadata(c, d);
    if (r[2]) throw gt(r[1]);
    return gt(r[0]);
  }
  function bg(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.get_metadata_bytes(c, d);
    if (r[3]) throw gt(r[2]);
    var _ = Se(r[0], r[1]).slice();
    return j.__wbindgen_free(r[0], r[1] * 1, 1), _;
  }
  function vg(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.get_section_markers(c, d);
    if (r[2]) throw gt(r[1]);
    return gt(r[0]);
  }
  function pg(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.get_synced_lyrics(c, d);
    if (r[2]) throw gt(r[1]);
    return gt(r[0]);
  }
  function Sg(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.get_waveform_data(c, d);
    if (r[2]) throw gt(r[1]);
    return gt(r[0]);
  }
  function xg(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft;
    return j.has_metadata(c, d) !== 0;
  }
  function Em(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.info(c, d);
    if (r[2]) throw gt(r[1]);
    return Xa.__wrap(r[0]);
  }
  function Ag(f, c) {
    const d = Lt(f, j.__wbindgen_malloc), r = ft, _ = j.set_metadata(d, r, c);
    if (_[3]) throw gt(_[2]);
    var E = Se(_[0], _[1]).slice();
    return j.__wbindgen_free(_[0], _[1] * 1, 1), E;
  }
  function zg(f, c, d) {
    var r = pe(f) ? 0 : Lt(f, j.__wbindgen_malloc), _ = ft;
    const E = ta(c, j.__wbindgen_malloc, j.__wbindgen_realloc), A = ft, N = j.set_metadata_field(r, _, E, A, d);
    if (N[3]) throw gt(N[2]);
    var w = Se(N[0], N[1]).slice();
    return j.__wbindgen_free(N[0], N[1] * 1, 1), w;
  }
  function Ng(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.strip_metadata(c, d);
    if (r[3]) throw gt(r[2]);
    var _ = Se(r[0], r[1]).slice();
    return j.__wbindgen_free(r[0], r[1] * 1, 1), _;
  }
  function Tm(f, c) {
    const d = Lt(f, j.__wbindgen_malloc), r = ft, _ = Lt(c, j.__wbindgen_malloc), E = ft, A = j.update_metadata(d, r, _, E);
    if (A[3]) throw gt(A[2]);
    var N = Se(A[0], A[1]).slice();
    return j.__wbindgen_free(A[0], A[1] * 1, 1), N;
  }
  function jm(f) {
    const c = Lt(f, j.__wbindgen_malloc), d = ft, r = j.validate(c, d);
    if (r[2]) throw gt(r[1]);
    return r[0] !== 0;
  }
  function Eg() {
    let f, c;
    try {
      const d = j.version();
      return f = d[0], c = d[1], La(d[0], d[1]);
    } finally {
      j.__wbindgen_free(f, c, 1);
    }
  }
  const Tg = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function jg(f, c) {
    if (typeof Response == "function" && f instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(f, c);
      } catch (r) {
        if (f.ok && Tg.has(f.type) && f.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const d = await f.arrayBuffer();
      return await WebAssembly.instantiate(d, c);
    } else {
      const d = await WebAssembly.instantiate(f, c);
      return d instanceof WebAssembly.Instance ? {
        instance: d,
        module: f
      } : d;
    }
  }
  function Mm() {
    const f = {};
    return f.wbg = {}, f.wbg.__wbg_Error_52673b7de5a0ca89 = function(c, d) {
      return Error(La(c, d));
    }, f.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(c) {
      return Number(c);
    }, f.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(c, d) {
      const r = String(d), _ = ta(r, j.__wbindgen_malloc, j.__wbindgen_realloc), E = ft;
      Qe().setInt32(c + 4, E, true), Qe().setInt32(c + 0, _, true);
    }, f.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(c, d) {
      const r = d, _ = typeof r == "bigint" ? r : void 0;
      Qe().setBigInt64(c + 8, pe(_) ? BigInt(0) : _, true), Qe().setInt32(c + 0, !pe(_), true);
    }, f.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(c) {
      const d = c, r = typeof d == "boolean" ? d : void 0;
      return pe(r) ? 16777215 : r ? 1 : 0;
    }, f.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(c, d) {
      const r = qf(d), _ = ta(r, j.__wbindgen_malloc, j.__wbindgen_realloc), E = ft;
      Qe().setInt32(c + 4, E, true), Qe().setInt32(c + 0, _, true);
    }, f.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(c, d) {
      return c in d;
    }, f.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(c) {
      return typeof c == "bigint";
    }, f.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(c) {
      return typeof c == "function";
    }, f.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(c) {
      return c === null;
    }, f.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(c) {
      const d = c;
      return typeof d == "object" && d !== null;
    }, f.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(c) {
      return typeof c == "string";
    }, f.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(c) {
      return c === void 0;
    }, f.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(c, d) {
      return c === d;
    }, f.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(c, d) {
      return c == d;
    }, f.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(c, d) {
      const r = d, _ = typeof r == "number" ? r : void 0;
      Qe().setFloat64(c + 8, pe(_) ? 0 : _, true), Qe().setInt32(c + 0, !pe(_), true);
    }, f.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(c, d) {
      const r = d, _ = typeof r == "string" ? r : void 0;
      var E = pe(_) ? 0 : ta(_, j.__wbindgen_malloc, j.__wbindgen_realloc), A = ft;
      Qe().setInt32(c + 4, A, true), Qe().setInt32(c + 0, E, true);
    }, f.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(c, d) {
      throw new Error(La(c, d));
    }, f.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Yn(function(c, d) {
        return c.call(d);
      }, arguments);
    }, f.wbg.__wbg_done_62ea16af4ce34b24 = function(c) {
      return c.done;
    }, f.wbg.__wbg_entries_83c79938054e065f = function(c) {
      return Object.entries(c);
    }, f.wbg.__wbg_from_29a8414a7a7cd19d = function(c) {
      return Array.from(c);
    }, f.wbg.__wbg_get_6b7bd52aca3f9671 = function(c, d) {
      return c[d >>> 0];
    }, f.wbg.__wbg_get_af9dab7e9603ea93 = function() {
      return Yn(function(c, d) {
        return Reflect.get(c, d);
      }, arguments);
    }, f.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(c, d) {
      return c[d];
    }, f.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(c) {
      let d;
      try {
        d = c instanceof ArrayBuffer;
      } catch {
        d = false;
      }
      return d;
    }, f.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(c) {
      let d;
      try {
        d = c instanceof Uint8Array;
      } catch {
        d = false;
      }
      return d;
    }, f.wbg.__wbg_isArray_51fd9e6422c0a395 = function(c) {
      return Array.isArray(c);
    }, f.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(c) {
      return Number.isSafeInteger(c);
    }, f.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
      return Symbol.iterator;
    }, f.wbg.__wbg_length_22ac23eaec9d8053 = function(c) {
      return c.length;
    }, f.wbg.__wbg_length_86ce4877baf913bb = function(c) {
      return c.length;
    }, f.wbg.__wbg_length_d45040a40c570362 = function(c) {
      return c.length;
    }, f.wbg.__wbg_new_1ba21ce319a06297 = function() {
      return new Object();
    }, f.wbg.__wbg_new_25f239778d6112b9 = function() {
      return new Array();
    }, f.wbg.__wbg_new_6421f6084cc5bc5a = function(c) {
      return new Uint8Array(c);
    }, f.wbg.__wbg_new_b546ae120718850e = function() {
      return /* @__PURE__ */ new Map();
    }, f.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(c, d) {
      return new Uint8Array(Se(c, d));
    }, f.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(c) {
      return new Float32Array(c >>> 0);
    }, f.wbg.__wbg_next_138a17bbf04e926c = function(c) {
      return c.next;
    }, f.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Yn(function(c) {
        return c.next();
      }, arguments);
    }, f.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(c, d, r) {
      Uint8Array.prototype.set.call(Se(c, d), r);
    }, f.wbg.__wbg_set_3f1d0b984ed272ed = function(c, d, r) {
      c[d] = r;
    }, f.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Yn(function(c, d, r) {
        return Reflect.set(c, d, r);
      }, arguments);
    }, f.wbg.__wbg_set_7df433eea03a5c14 = function(c, d, r) {
      c[d >>> 0] = r;
    }, f.wbg.__wbg_set_cb0e657d1901c8d8 = function(c, d, r) {
      c.set(Gf(d, r));
    }, f.wbg.__wbg_set_efaaf145b9377369 = function(c, d, r) {
      return c.set(d, r);
    }, f.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Yn(function(c) {
        return JSON.stringify(c);
      }, arguments);
    }, f.wbg.__wbg_value_57b7b035e117f7ee = function(c) {
      return c.value;
    }, f.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(c, d) {
      return La(c, d);
    }, f.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(c) {
      return BigInt.asUintN(64, c);
    }, f.wbg.__wbindgen_cast_cb9088102bce6b30 = function(c, d) {
      return Se(c, d);
    }, f.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(c) {
      return c;
    }, f.wbg.__wbindgen_init_externref_table = function() {
      const c = j.__wbindgen_externrefs, d = c.grow(4);
      c.set(0, void 0), c.set(d + 0, void 0), c.set(d + 1, null), c.set(d + 2, true), c.set(d + 3, false);
    }, f;
  }
  function wm(f, c) {
    return j = f.exports, di.__wbindgen_wasm_module = c, Pl = null, Ln = null, Gn = null, j.__wbindgen_start(), j;
  }
  function Mg(f) {
    if (j !== void 0) return j;
    typeof f < "u" && (Object.getPrototypeOf(f) === Object.prototype ? { module: f } = f : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const c = Mm();
    f instanceof WebAssembly.Module || (f = new WebAssembly.Module(f));
    const d = new WebAssembly.Instance(f, c);
    return wm(d, f);
  }
  async function di(f) {
    if (j !== void 0) return j;
    typeof f < "u" && (Object.getPrototypeOf(f) === Object.prototype ? { module_or_path: f } = f : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof f > "u" && (f = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const c = Mm();
    (typeof f == "string" || typeof Request == "function" && f instanceof Request || typeof URL == "function" && f instanceof URL) && (f = fetch(f));
    const { instance: d, module: r } = await jg(await f, c);
    return wm(d, r);
  }
  const _m = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Xa,
    WasmStreamingDecoder: Yf,
    create_metadata: dg,
    create_metadata_from_object: Nm,
    decode: mg,
    default: di,
    encode: yg,
    encode_lossy: hg,
    encode_with_bitrate: gg,
    get_cover_art: _g,
    get_metadata: Qf,
    get_metadata_bytes: bg,
    get_section_markers: vg,
    get_synced_lyrics: pg,
    get_waveform_data: Sg,
    has_metadata: xg,
    info: Em,
    initSync: Mg,
    set_metadata: Ag,
    set_metadata_field: zg,
    strip_metadata: Ng,
    update_metadata: Tm,
    validate: jm,
    version: Eg
  }, Symbol.toStringTag, {
    value: "Module"
  })), wg = {
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
  function Og() {
    const [f, c] = mt.useState(false), [d, r] = mt.useState(false);
    return mt.useEffect(() => {
      (async () => {
        try {
          await di(), r(true);
        } catch (D) {
          console.error("Failed to initialize flo\u2122 WASM:", D);
        }
      })();
    }, []), {
      isProcessing: f,
      isInitialized: d,
      loadMetadata: async (b) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const D = await b.arrayBuffer(), C = new Uint8Array(D);
          return Qf(C);
        } catch (D) {
          return console.error("Failed to load flo\u2122 metadata:", D), null;
        }
      },
      updateMetadata: async (b, D) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        c(true);
        try {
          const C = Nm(D), q = Tm(b, C);
          return c(false), q;
        } catch (C) {
          return console.error("Failed to update flo\u2122 metadata:", C), c(false), null;
        }
      },
      downloadFile: (b, D) => {
        const C = new Blob([
          b
        ], {
          type: "application/octet-stream"
        }), q = URL.createObjectURL(C), tt = document.createElement("a");
        tt.href = q, tt.download = D, tt.click(), URL.revokeObjectURL(q);
      },
      validateFile: (b) => d ? jm(b) : false,
      resetMetadata: () => ({
        ...wg
      })
    };
  }
  function Ug() {
    const [f, c] = mt.useState(false);
    return {
      isLoading: f,
      loadFloFile: async (r) => {
        c(true);
        try {
          if (!r.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await di();
          const _ = await r.arrayBuffer(), E = new Uint8Array(_), A = Qf(E), N = Em(E), w = N ? {
            sample_rate: N.sample_rate,
            channels: N.channels,
            bit_depth: N.bit_depth,
            total_frames: Number(N.total_frames),
            duration_secs: N.duration_secs,
            file_size: N.file_size,
            compression_ratio: N.compression_ratio,
            crc_valid: N.crc_valid,
            is_lossy: N.is_lossy,
            lossy_quality: N.lossy_quality,
            version: N.version
          } : null;
          return {
            metadata: A,
            audioInfo: w,
            error: null
          };
        } catch (_) {
          return console.error("Failed to load flo\u2122 file:", _), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${_ instanceof Error ? _.message : "Unknown error"}`
          };
        } finally {
          c(false);
        }
      }
    };
  }
  function Dg() {
    return {
      parseLRCFormat: (c) => {
        const d = c.split(`
`), r = [];
        return d.forEach((_) => {
          const E = _.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (E) {
            const A = parseInt(E[1]), N = parseInt(E[2]), w = parseInt(E[3]), b = A * 60 * 1e3 + N * 1e3 + w * 10, D = E[4].trim();
            r.push([
              D,
              b
            ]);
          }
        }), r.sort((_, E) => _[1] - E[1]), r;
      }
    };
  }
  function bm(f, c, d, r = 50) {
    const _ = Math.floor(c / r), E = Math.floor(f.length / (_ * d)), A = [];
    for (let N = 0; N < E; N++) for (let w = 0; w < d; w++) {
      let b = 0;
      for (let D = 0; D < _; D++) {
        const C = N * _ * d + D * d + w;
        C < f.length && (b = Math.max(b, Math.abs(f[C])));
      }
      A.push(b);
    }
    return {
      peaks_per_second: r,
      channels: d,
      peaks: A
    };
  }
  function Cg({ waveform: f, onRegenerate: c }) {
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
                  children: "Audio"
                }),
                o.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Audio Waveform"
                }),
                o.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Pre-generated visualization data for use by music players and other tools"
                })
              ]
            }),
            c && o.jsx("button", {
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              onClick: c,
              type: "button",
              children: "Regenerate"
            })
          ]
        }),
        o.jsx("div", {
          children: f && f.peaks && f.peaks.length > 0 ? o.jsx(Rg, {
            waveform: f
          }) : o.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              o.jsx(Qn, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              o.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        o.jsx(Hg, {
          waveform: f
        })
      ]
    });
  }
  function Rg({ waveform: f, width: c = 600, height: d = 80 }) {
    const { peaks: r, channels: _ } = f, E = Math.floor(r.length / _);
    function A(w) {
      return Array.from({
        length: E
      }, (b, D) => {
        const C = Math.floor(D / (E - 1) * (c - 2)) + 1, q = Math.floor((1 - (r[D * _ + w] || 0)) * (d - 10)) + 5;
        return `${C},${q}`;
      }).join(" ");
    }
    function N() {
      const w = Array.from({
        length: E
      }, (D, C) => {
        const q = Math.floor(C / (E - 1) * (c - 2)) + 1, tt = r[C * _] || 0, ut = Math.floor((1 - tt) * (d / 2 - 4)) + d / 2;
        return `${q},${ut}`;
      }), b = Array.from({
        length: E
      }, (D, C) => {
        const q = E - 1 - C, tt = Math.floor(q / (E - 1) * (c - 2)) + 1, ut = r[q * _] || 0, _t = Math.floor((1 + ut) * (d / 2 - 4)) + 4;
        return `${tt},${_t}`;
      });
      return [
        ...w,
        ...b,
        w[0]
      ].join(" ");
    }
    return o.jsx("div", {
      style: {
        width: c,
        maxWidth: "100%"
      },
      className: "overflow-x-auto",
      children: o.jsxs("svg", {
        className: "block rounded border bg-background shadow",
        width: c,
        height: d,
        viewBox: `0 0 ${c} ${d}`,
        "aria-label": "Waveform",
        role: "img",
        children: [
          _ === 1 && o.jsx("polygon", {
            points: N(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          o.jsx("polyline", {
            points: A(0),
            stroke: "#db2777",
            strokeWidth: _ > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          _ > 1 && o.jsx("polyline", {
            points: A(1),
            stroke: "#3b82f6",
            strokeWidth: "1.5",
            fill: "none"
          }),
          o.jsx("defs", {
            children: o.jsxs("linearGradient", {
              id: "wf-gradient",
              x1: "0",
              x2: "0",
              y1: "0",
              y2: "1",
              children: [
                o.jsx("stop", {
                  offset: "0%",
                  stopColor: "#db2777",
                  stopOpacity: "0.75"
                }),
                o.jsx("stop", {
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
  function Hg({ waveform: f }) {
    return f ? o.jsxs("div", {
      className: "mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground",
      children: [
        o.jsxs("span", {
          children: [
            o.jsx("strong", {
              children: "Channels:"
            }),
            " ",
            f.channels === 2 ? "Stereo" : "Mono"
          ]
        }),
        o.jsxs("span", {
          children: [
            o.jsx("strong", {
              children: "Peaks/sec:"
            }),
            " ",
            f.peaks_per_second
          ]
        }),
        o.jsxs("span", {
          children: [
            o.jsx("strong", {
              children: "Total Points:"
            }),
            " ",
            f.peaks.length
          ]
        })
      ]
    }) : null;
  }
  function Bg() {
    var _a, _b;
    const [f, c] = mt.useState(null), [d, r] = mt.useState(null), [_, E] = mt.useState(null), [A, N] = mt.useState(() => ({
      ...om
    })), [w, b] = mt.useState(null), [D, C] = mt.useState(() => ({
      ...si
    })), [q, tt] = mt.useState(""), [ut, _t] = mt.useState(false), [K, X] = mt.useState(null), [$, k] = mt.useState(null), [Tt, Qt] = mt.useState(""), { isProcessing: Ut, updateMetadata: I, downloadFile: It, resetMetadata: ee } = Og(), { parseLRCFormat: sl } = Dg(), { isLoading: xe, loadFloFile: Zt } = Ug(), Ae = mt.useRef(""), ze = mt.useCallback((p) => `${p.name}:${p.lastModified}:${p.size}`, []);
    mt.useEffect(() => {
      typeof window < "u" && ut && Hf(() => import("./eruda-Dk_PcMEJ.js").then((p) => p.e), [], import.meta.url).then((p) => {
        p.default.init(), p.default.show();
      });
    }, [
      ut
    ]);
    const se = mt.useCallback(async () => {
      if (!(!d || !_)) try {
        const R = await (await Hf(() => Promise.resolve().then(() => _m), void 0, import.meta.url)).decode(d), B = bm(R, _.sample_rate, _.channels);
        N((V) => ({
          ...V,
          waveform_data: B
        })), k("Waveform re-generated from audio data.");
      } catch {
        X("Could not re-generate waveform.");
      }
    }, [
      d,
      _
    ]), M = mt.useCallback(async (p) => {
      var _a2, _b2, _c;
      if (!p) {
        Ae.current = "", c(null), r(null), N(ee()), b(null), C({
          ...si
        }), tt(""), Qt(""), k(null), X(null), E(null);
        return;
      }
      if (!p.name.toLowerCase().endsWith(".flo")) {
        X("Please upload a valid .flo file"), k(null);
        return;
      }
      const B = ze(p);
      Ae.current = B, c(p), X(null), k("File loaded. Reading embedded tags..."), Qt("Scanning embedded metadata..."), N(ee()), b(null), C({
        ...si
      }), tt(""), E(null);
      try {
        const { metadata: V, audioInfo: W, error: ct } = await Zt(p);
        if (Ae.current !== B) return;
        if (ct) {
          X(ct), k(null);
          return;
        }
        const Vt = await p.arrayBuffer(), Nt = new Uint8Array(Vt);
        r(Nt), E(W || null);
        let Kt = V ? {
          ...V
        } : {
          ...om
        };
        if ((!Kt.waveform_data || !((_a2 = Kt.waveform_data.peaks) == null ? void 0 : _a2.length)) && W) try {
          const Ne = await (await Hf(() => Promise.resolve().then(() => _m), void 0, import.meta.url)).decode(Nt);
          Kt.waveform_data = bm(Ne, W.sample_rate, W.channels);
        } catch {
        }
        if (N(Kt), Kt.pictures) {
          const Dt = Kt.pictures.find((Ne) => Ne.picture_type === "cover_front");
          if (Dt) {
            const Ne = new Blob([
              Dt.data
            ], {
              type: Dt.mime_type
            });
            b(URL.createObjectURL(Ne));
          }
        }
        if (Kt.synced_lyrics && Kt.synced_lyrics.length > 0) {
          const Dt = Kt.synced_lyrics[0];
          C({
            type: 1,
            timestampFormat: 2,
            language: Dt.language || "eng",
            description: Dt.description || "Synced Lyrics",
            text: Dt.lines.map((Ne) => [
              Ne.text,
              Ne.timestamp_ms
            ])
          });
        }
        const Ze = Object.values(Kt || {}).filter((Dt) => typeof Dt == "string" && Dt.trim().length > 0).length, Qa = ((_c = (_b2 = Kt == null ? void 0 : Kt.synced_lyrics) == null ? void 0 : _b2[0]) == null ? void 0 : _c.lines.length) ?? 0, Vn = Ze > 0 || !!W || Qa > 0;
        Qt(Ze > 0 ? `Imported ${Ze} embedded tag${Ze === 1 ? "" : "s"}.` : "No embedded tags found."), k(Vn ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (V) {
        if (Ae.current !== B) return;
        console.error("Failed to parse metadata", V), Qt(""), X("Loaded file, but could not read embedded metadata automatically."), k(null), E(null);
      }
    }, [
      Zt,
      ze,
      ee
    ]), H = (p, R) => {
      N((B) => ({
        ...B,
        [p]: R
      }));
    }, Z = () => {
      if (q.trim()) {
        const p = sl(q);
        if (C((R) => ({
          ...R,
          text: p
        })), !A.lyrics || A.lyrics.length === 0) {
          const R = p.map(([B]) => B == null ? void 0 : B.trim()).filter(Boolean).join(`
`);
          R && N((B) => ({
            ...B,
            lyrics: [
              {
                text: R
              }
            ]
          }));
        }
        tt(""), k("LRC format lyrics imported successfully!");
      }
    }, dt = async () => {
      if (!f || !d) return;
      X(null), k(null);
      const p = await I(d, A);
      p ? (It(p, `${A.title || f.name.replace(".flo", "")}_tagged.flo`), k("File processed and downloaded successfully!")) : X("Failed to process file");
    }, h = [
      {
        label: "Tag fields set",
        value: Object.values(A).filter((p) => typeof p == "string" && p.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: D.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: w ? "Attached" : "Not added",
        helper: w ? "Cover ready to embed" : "Add PNG / JPG / WebP"
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
                            children: o.jsx(Qn, {
                              className: "h-6 w-6 icon-accent"
                            })
                          }),
                          o.jsxs("div", {
                            children: [
                              o.jsx("h1", {
                                className: "text-3xl font-semibold hero-title",
                                children: o.jsx("span", {
                                  className: "gradient-text inline-block",
                                  children: "floEditor"
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
                            o.jsx(fg, {}),
                            o.jsxs("button", {
                              onClick: () => _t(!ut),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                o.jsx(Nh, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                ut ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                K && o.jsx(mm, {
                  type: "error",
                  message: K
                }),
                $ && o.jsx(mm, {
                  type: "success",
                  message: $
                }),
                o.jsx($h, {
                  file: f,
                  onFileUpload: M,
                  isParsingMetadata: xe,
                  metadataSummary: Tt
                }),
                o.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: h.map(({ label: p, value: R, helper: B }) => o.jsxs("div", {
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
                            children: p
                          }),
                          o.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: R
                          }),
                          o.jsx("p", {
                            className: "text-xs text-white/80",
                            children: B
                          })
                        ]
                      })
                    ]
                  }, p))
                })
              ]
            }),
            o.jsx(Cg, {
              waveform: A.waveform_data,
              onRegenerate: d && _ ? se : void 0
            }),
            o.jsx(Ih, {
              metadata: A,
              onMetadataChange: H
            }),
            o.jsx(tg, {
              pictures: A.pictures,
              onPicturesChange: (p) => N({
                ...A,
                pictures: p
              }),
              coverVariants: A.cover_variants,
              onCoverVariantsChange: (p) => N({
                ...A,
                cover_variants: p
              }),
              animatedCover: A.animated_cover,
              onAnimatedCoverChange: (p) => N({
                ...A,
                animated_cover: p
              })
            }),
            o.jsx(eg, {
              syncedLyrics: A.synced_lyrics,
              onSyncedLyricsChange: (p) => N({
                ...A,
                synced_lyrics: p
              }),
              lrcText: q,
              onLrcTextChange: tt,
              onImport: Z,
              unsyncedLyrics: ((_b = (_a = A.lyrics) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onUnsyncedLyricsChange: (p) => N({
                ...A,
                lyrics: p ? [
                  {
                    text: p
                  }
                ] : []
              })
            }),
            o.jsx(ag, {
              sectionMarkers: A.section_markers,
              onSectionMarkersChange: (p) => N({
                ...A,
                section_markers: p
              })
            }),
            o.jsx(ng, {
              bpmMap: A.bpm_map,
              onBpmMapChange: (p) => N({
                ...A,
                bpm_map: p
              })
            }),
            o.jsx(ug, {
              disabled: !f || Ut,
              isProcessing: Ut,
              fileName: f == null ? void 0 : f.name,
              onProcess: dt
            })
          ]
        })
      ]
    });
  }
  oh.createRoot(document.getElementById("root")).render(o.jsx(ah.StrictMode, {
    children: o.jsx(Bg, {})
  }));
})();
export {
  __tla,
  vm as g
};

let Sm;
let __tla = (async () => {
  (function() {
    const f = document.createElement("link").relList;
    if (f && f.supports && f.supports("modulepreload")) return;
    for (const b of document.querySelectorAll('link[rel="modulepreload"]')) r(b);
    new MutationObserver((b) => {
      for (const A of b) if (A.type === "childList") for (const x of A.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && r(x);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(b) {
      const A = {};
      return b.integrity && (A.integrity = b.integrity), b.referrerPolicy && (A.referrerPolicy = b.referrerPolicy), b.crossOrigin === "use-credentials" ? A.credentials = "include" : b.crossOrigin === "anonymous" ? A.credentials = "omit" : A.credentials = "same-origin", A;
    }
    function r(b) {
      if (b.ep) return;
      b.ep = true;
      const A = d(b);
      fetch(b.href, A);
    }
  })();
  Sm = function(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
  };
  var Ms = {
    exports: {}
  }, Yn = {};
  var kd;
  function sy() {
    if (kd) return Yn;
    kd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(r, b, A) {
      var x = null;
      if (A !== void 0 && (x = "" + A), b.key !== void 0 && (x = "" + b.key), "key" in b) {
        A = {};
        for (var _ in b) _ !== "key" && (A[_] = b[_]);
      } else A = b;
      return b = A.ref, {
        $$typeof: s,
        type: r,
        key: x,
        ref: b !== void 0 ? b : null,
        props: A
      };
    }
    return Yn.Fragment = f, Yn.jsx = d, Yn.jsxs = d, Yn;
  }
  var Kd;
  function fy() {
    return Kd || (Kd = 1, Ms.exports = sy()), Ms.exports;
  }
  var c = fy(), ws = {
    exports: {}
  }, $ = {};
  var Jd;
  function ry() {
    if (Jd) return $;
    Jd = 1;
    var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), f = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), b = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), _ = /* @__PURE__ */ Symbol.for("react.forward_ref"), v = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
    function I(g) {
      return g === null || typeof g != "object" ? null : (g = q && g[q] || g["@@iterator"], typeof g == "function" ? g : null);
    }
    var fe = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, pe = Object.assign, J = {};
    function K(g, C, E) {
      this.props = g, this.context = C, this.refs = J, this.updater = E || fe;
    }
    K.prototype.isReactComponent = {}, K.prototype.setState = function(g, C) {
      if (typeof g != "object" && typeof g != "function" && g != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, g, C, "setState");
    }, K.prototype.forceUpdate = function(g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    };
    function W() {
    }
    W.prototype = K.prototype;
    function te(g, C, E) {
      this.props = g, this.context = C, this.refs = J, this.updater = E || fe;
    }
    var Q = te.prototype = new W();
    Q.constructor = te, pe(Q, K.prototype), Q.isPureReactComponent = true;
    var Ne = Array.isArray;
    function Ce() {
    }
    var F = {
      H: null,
      A: null,
      T: null,
      S: null
    }, $e = Object.prototype.hasOwnProperty;
    function et(g, C, E) {
      var H = E.ref;
      return {
        $$typeof: s,
        type: g,
        key: C,
        ref: H !== void 0 ? H : null,
        props: E
      };
    }
    function Ct(g, C) {
      return et(g.type, C, g.props);
    }
    function St(g) {
      return typeof g == "object" && g !== null && g.$$typeof === s;
    }
    function Ze(g) {
      var C = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + g.replace(/[=:]/g, function(E) {
        return C[E];
      });
    }
    var Vt = /\/+/g;
    function qt(g, C) {
      return typeof g == "object" && g !== null && g.key != null ? Ze("" + g.key) : C.toString(36);
    }
    function ft(g) {
      switch (g.status) {
        case "fulfilled":
          return g.value;
        case "rejected":
          throw g.reason;
        default:
          switch (typeof g.status == "string" ? g.then(Ce, Ce) : (g.status = "pending", g.then(function(C) {
            g.status === "pending" && (g.status = "fulfilled", g.value = C);
          }, function(C) {
            g.status === "pending" && (g.status = "rejected", g.reason = C);
          })), g.status) {
            case "fulfilled":
              return g.value;
            case "rejected":
              throw g.reason;
          }
      }
      throw g;
    }
    function w(g, C, E, H, Y) {
      var k = typeof g;
      (k === "undefined" || k === "boolean") && (g = null);
      var ne = false;
      if (g === null) ne = true;
      else switch (k) {
        case "bigint":
        case "string":
        case "number":
          ne = true;
          break;
        case "object":
          switch (g.$$typeof) {
            case s:
            case f:
              ne = true;
              break;
            case O:
              return ne = g._init, w(ne(g._payload), C, E, H, Y);
          }
      }
      if (ne) return Y = Y(g), ne = H === "" ? "." + qt(g, 0) : H, Ne(Y) ? (E = "", ne != null && (E = ne.replace(Vt, "$&/") + "/"), w(Y, C, E, "", function(dl) {
        return dl;
      })) : Y != null && (St(Y) && (Y = Ct(Y, E + (Y.key == null || g && g.key === Y.key ? "" : ("" + Y.key).replace(Vt, "$&/") + "/") + ne)), C.push(Y)), 1;
      ne = 0;
      var Ge = H === "" ? "." : H + ":";
      if (Ne(g)) for (var Me = 0; Me < g.length; Me++) H = g[Me], k = Ge + qt(H, Me), ne += w(H, C, E, k, Y);
      else if (Me = I(g), typeof Me == "function") for (g = Me.call(g), Me = 0; !(H = g.next()).done; ) H = H.value, k = Ge + qt(H, Me++), ne += w(H, C, E, k, Y);
      else if (k === "object") {
        if (typeof g.then == "function") return w(ft(g), C, E, H, Y);
        throw C = String(g), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
      }
      return ne;
    }
    function B(g, C, E) {
      if (g == null) return g;
      var H = [], Y = 0;
      return w(g, H, "", "", function(k) {
        return C.call(E, k, Y++);
      }), H;
    }
    function V(g) {
      if (g._status === -1) {
        var C = g._result;
        C = C(), C.then(function(E) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = E);
        }, function(E) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = E);
        }), g._status === -1 && (g._status = 0, g._result = C);
      }
      if (g._status === 1) return g._result.default;
      throw g._result;
    }
    var ce = typeof reportError == "function" ? reportError : function(g) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var C = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
          error: g
        });
        if (!window.dispatchEvent(C)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", g);
        return;
      }
      console.error(g);
    }, ye = {
      map: B,
      forEach: function(g, C, E) {
        B(g, function() {
          C.apply(this, arguments);
        }, E);
      },
      count: function(g) {
        var C = 0;
        return B(g, function() {
          C++;
        }), C;
      },
      toArray: function(g) {
        return B(g, function(C) {
          return C;
        }) || [];
      },
      only: function(g) {
        if (!St(g)) throw Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
    };
    return $.Activity = R, $.Children = ye, $.Component = K, $.Fragment = d, $.Profiler = b, $.PureComponent = te, $.StrictMode = r, $.Suspense = v, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, $.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(g) {
        return F.H.useMemoCache(g);
      }
    }, $.cache = function(g) {
      return function() {
        return g.apply(null, arguments);
      };
    }, $.cacheSignal = function() {
      return null;
    }, $.cloneElement = function(g, C, E) {
      if (g == null) throw Error("The argument must be a React element, but you passed " + g + ".");
      var H = pe({}, g.props), Y = g.key;
      if (C != null) for (k in C.key !== void 0 && (Y = "" + C.key), C) !$e.call(C, k) || k === "key" || k === "__self" || k === "__source" || k === "ref" && C.ref === void 0 || (H[k] = C[k]);
      var k = arguments.length - 2;
      if (k === 1) H.children = E;
      else if (1 < k) {
        for (var ne = Array(k), Ge = 0; Ge < k; Ge++) ne[Ge] = arguments[Ge + 2];
        H.children = ne;
      }
      return et(g.type, Y, H);
    }, $.createContext = function(g) {
      return g = {
        $$typeof: x,
        _currentValue: g,
        _currentValue2: g,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, g.Provider = g, g.Consumer = {
        $$typeof: A,
        _context: g
      }, g;
    }, $.createElement = function(g, C, E) {
      var H, Y = {}, k = null;
      if (C != null) for (H in C.key !== void 0 && (k = "" + C.key), C) $e.call(C, H) && H !== "key" && H !== "__self" && H !== "__source" && (Y[H] = C[H]);
      var ne = arguments.length - 2;
      if (ne === 1) Y.children = E;
      else if (1 < ne) {
        for (var Ge = Array(ne), Me = 0; Me < ne; Me++) Ge[Me] = arguments[Me + 2];
        Y.children = Ge;
      }
      if (g && g.defaultProps) for (H in ne = g.defaultProps, ne) Y[H] === void 0 && (Y[H] = ne[H]);
      return et(g, k, Y);
    }, $.createRef = function() {
      return {
        current: null
      };
    }, $.forwardRef = function(g) {
      return {
        $$typeof: _,
        render: g
      };
    }, $.isValidElement = St, $.lazy = function(g) {
      return {
        $$typeof: O,
        _payload: {
          _status: -1,
          _result: g
        },
        _init: V
      };
    }, $.memo = function(g, C) {
      return {
        $$typeof: y,
        type: g,
        compare: C === void 0 ? null : C
      };
    }, $.startTransition = function(g) {
      var C = F.T, E = {};
      F.T = E;
      try {
        var H = g(), Y = F.S;
        Y !== null && Y(E, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Ce, ce);
      } catch (k) {
        ce(k);
      } finally {
        C !== null && E.types !== null && (C.types = E.types), F.T = C;
      }
    }, $.unstable_useCacheRefresh = function() {
      return F.H.useCacheRefresh();
    }, $.use = function(g) {
      return F.H.use(g);
    }, $.useActionState = function(g, C, E) {
      return F.H.useActionState(g, C, E);
    }, $.useCallback = function(g, C) {
      return F.H.useCallback(g, C);
    }, $.useContext = function(g) {
      return F.H.useContext(g);
    }, $.useDebugValue = function() {
    }, $.useDeferredValue = function(g, C) {
      return F.H.useDeferredValue(g, C);
    }, $.useEffect = function(g, C) {
      return F.H.useEffect(g, C);
    }, $.useEffectEvent = function(g) {
      return F.H.useEffectEvent(g);
    }, $.useId = function() {
      return F.H.useId();
    }, $.useImperativeHandle = function(g, C, E) {
      return F.H.useImperativeHandle(g, C, E);
    }, $.useInsertionEffect = function(g, C) {
      return F.H.useInsertionEffect(g, C);
    }, $.useLayoutEffect = function(g, C) {
      return F.H.useLayoutEffect(g, C);
    }, $.useMemo = function(g, C) {
      return F.H.useMemo(g, C);
    }, $.useOptimistic = function(g, C) {
      return F.H.useOptimistic(g, C);
    }, $.useReducer = function(g, C, E) {
      return F.H.useReducer(g, C, E);
    }, $.useRef = function(g) {
      return F.H.useRef(g);
    }, $.useState = function(g) {
      return F.H.useState(g);
    }, $.useSyncExternalStore = function(g, C, E) {
      return F.H.useSyncExternalStore(g, C, E);
    }, $.useTransition = function() {
      return F.H.useTransition();
    }, $.version = "19.2.3", $;
  }
  var Wd;
  function Ls() {
    return Wd || (Wd = 1, ws.exports = ry()), ws.exports;
  }
  var he = Ls();
  const oy = Sm(he);
  var Os = {
    exports: {}
  }, Ln = {}, Ds = {
    exports: {}
  }, Us = {};
  var $d;
  function dy() {
    return $d || ($d = 1, (function(s) {
      function f(w, B) {
        var V = w.length;
        w.push(B);
        e: for (; 0 < V; ) {
          var ce = V - 1 >>> 1, ye = w[ce];
          if (0 < b(ye, B)) w[ce] = B, w[V] = ye, V = ce;
          else break e;
        }
      }
      function d(w) {
        return w.length === 0 ? null : w[0];
      }
      function r(w) {
        if (w.length === 0) return null;
        var B = w[0], V = w.pop();
        if (V !== B) {
          w[0] = V;
          e: for (var ce = 0, ye = w.length, g = ye >>> 1; ce < g; ) {
            var C = 2 * (ce + 1) - 1, E = w[C], H = C + 1, Y = w[H];
            if (0 > b(E, V)) H < ye && 0 > b(Y, E) ? (w[ce] = Y, w[H] = V, ce = H) : (w[ce] = E, w[C] = V, ce = C);
            else if (H < ye && 0 > b(Y, V)) w[ce] = Y, w[H] = V, ce = H;
            else break e;
          }
        }
        return B;
      }
      function b(w, B) {
        var V = w.sortIndex - B.sortIndex;
        return V !== 0 ? V : w.id - B.id;
      }
      if (s.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var A = performance;
        s.unstable_now = function() {
          return A.now();
        };
      } else {
        var x = Date, _ = x.now();
        s.unstable_now = function() {
          return x.now() - _;
        };
      }
      var v = [], y = [], O = 1, R = null, q = 3, I = false, fe = false, pe = false, J = false, K = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, te = typeof setImmediate < "u" ? setImmediate : null;
      function Q(w) {
        for (var B = d(y); B !== null; ) {
          if (B.callback === null) r(y);
          else if (B.startTime <= w) r(y), B.sortIndex = B.expirationTime, f(v, B);
          else break;
          B = d(y);
        }
      }
      function Ne(w) {
        if (pe = false, Q(w), !fe) if (d(v) !== null) fe = true, Ce || (Ce = true, Ze());
        else {
          var B = d(y);
          B !== null && ft(Ne, B.startTime - w);
        }
      }
      var Ce = false, F = -1, $e = 5, et = -1;
      function Ct() {
        return J ? true : !(s.unstable_now() - et < $e);
      }
      function St() {
        if (J = false, Ce) {
          var w = s.unstable_now();
          et = w;
          var B = true;
          try {
            e: {
              fe = false, pe && (pe = false, W(F), F = -1), I = true;
              var V = q;
              try {
                t: {
                  for (Q(w), R = d(v); R !== null && !(R.expirationTime > w && Ct()); ) {
                    var ce = R.callback;
                    if (typeof ce == "function") {
                      R.callback = null, q = R.priorityLevel;
                      var ye = ce(R.expirationTime <= w);
                      if (w = s.unstable_now(), typeof ye == "function") {
                        R.callback = ye, Q(w), B = true;
                        break t;
                      }
                      R === d(v) && r(v), Q(w);
                    } else r(v);
                    R = d(v);
                  }
                  if (R !== null) B = true;
                  else {
                    var g = d(y);
                    g !== null && ft(Ne, g.startTime - w), B = false;
                  }
                }
                break e;
              } finally {
                R = null, q = V, I = false;
              }
              B = void 0;
            }
          } finally {
            B ? Ze() : Ce = false;
          }
        }
      }
      var Ze;
      if (typeof te == "function") Ze = function() {
        te(St);
      };
      else if (typeof MessageChannel < "u") {
        var Vt = new MessageChannel(), qt = Vt.port2;
        Vt.port1.onmessage = St, Ze = function() {
          qt.postMessage(null);
        };
      } else Ze = function() {
        K(St, 0);
      };
      function ft(w, B) {
        F = K(function() {
          w(s.unstable_now());
        }, B);
      }
      s.unstable_IdlePriority = 5, s.unstable_ImmediatePriority = 1, s.unstable_LowPriority = 4, s.unstable_NormalPriority = 3, s.unstable_Profiling = null, s.unstable_UserBlockingPriority = 2, s.unstable_cancelCallback = function(w) {
        w.callback = null;
      }, s.unstable_forceFrameRate = function(w) {
        0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $e = 0 < w ? Math.floor(1e3 / w) : 5;
      }, s.unstable_getCurrentPriorityLevel = function() {
        return q;
      }, s.unstable_next = function(w) {
        switch (q) {
          case 1:
          case 2:
          case 3:
            var B = 3;
            break;
          default:
            B = q;
        }
        var V = q;
        q = B;
        try {
          return w();
        } finally {
          q = V;
        }
      }, s.unstable_requestPaint = function() {
        J = true;
      }, s.unstable_runWithPriority = function(w, B) {
        switch (w) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            w = 3;
        }
        var V = q;
        q = w;
        try {
          return B();
        } finally {
          q = V;
        }
      }, s.unstable_scheduleCallback = function(w, B, V) {
        var ce = s.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? ce + V : ce) : V = ce, w) {
          case 1:
            var ye = -1;
            break;
          case 2:
            ye = 250;
            break;
          case 5:
            ye = 1073741823;
            break;
          case 4:
            ye = 1e4;
            break;
          default:
            ye = 5e3;
        }
        return ye = V + ye, w = {
          id: O++,
          callback: B,
          priorityLevel: w,
          startTime: V,
          expirationTime: ye,
          sortIndex: -1
        }, V > ce ? (w.sortIndex = V, f(y, w), d(v) === null && w === d(y) && (pe ? (W(F), F = -1) : pe = true, ft(Ne, V - ce))) : (w.sortIndex = ye, f(v, w), fe || I || (fe = true, Ce || (Ce = true, Ze()))), w;
      }, s.unstable_shouldYield = Ct, s.unstable_wrapCallback = function(w) {
        var B = q;
        return function() {
          var V = q;
          q = B;
          try {
            return w.apply(this, arguments);
          } finally {
            q = V;
          }
        };
      };
    })(Us)), Us;
  }
  var Fd;
  function my() {
    return Fd || (Fd = 1, Ds.exports = dy()), Ds.exports;
  }
  var Cs = {
    exports: {}
  }, Pe = {};
  var Id;
  function hy() {
    if (Id) return Pe;
    Id = 1;
    var s = Ls();
    function f(v) {
      var y = "https://react.dev/errors/" + v;
      if (1 < arguments.length) {
        y += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var O = 2; O < arguments.length; O++) y += "&args[]=" + encodeURIComponent(arguments[O]);
      }
      return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
    }, b = /* @__PURE__ */ Symbol.for("react.portal");
    function A(v, y, O) {
      var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: b,
        key: R == null ? null : "" + R,
        children: v,
        containerInfo: y,
        implementation: O
      };
    }
    var x = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function _(v, y) {
      if (v === "font") return "";
      if (typeof y == "string") return y === "use-credentials" ? y : "";
    }
    return Pe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Pe.createPortal = function(v, y) {
      var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(f(299));
      return A(v, y, null, O);
    }, Pe.flushSync = function(v) {
      var y = x.T, O = r.p;
      try {
        if (x.T = null, r.p = 2, v) return v();
      } finally {
        x.T = y, r.p = O, r.d.f();
      }
    }, Pe.preconnect = function(v, y) {
      typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(v, y));
    }, Pe.prefetchDNS = function(v) {
      typeof v == "string" && r.d.D(v);
    }, Pe.preinit = function(v, y) {
      if (typeof v == "string" && y && typeof y.as == "string") {
        var O = y.as, R = _(O, y.crossOrigin), q = typeof y.integrity == "string" ? y.integrity : void 0, I = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        O === "style" ? r.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
          crossOrigin: R,
          integrity: q,
          fetchPriority: I
        }) : O === "script" && r.d.X(v, {
          crossOrigin: R,
          integrity: q,
          fetchPriority: I,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0
        });
      }
    }, Pe.preinitModule = function(v, y) {
      if (typeof v == "string") if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var O = _(y.as, y.crossOrigin);
          r.d.M(v, {
            crossOrigin: O,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(v);
    }, Pe.preload = function(v, y) {
      if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var O = y.as, R = _(O, y.crossOrigin);
        r.d.L(v, O, {
          crossOrigin: R,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0
        });
      }
    }, Pe.preloadModule = function(v, y) {
      if (typeof v == "string") if (y) {
        var O = _(y.as, y.crossOrigin);
        r.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: O,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(v);
    }, Pe.requestFormReset = function(v) {
      r.d.r(v);
    }, Pe.unstable_batchedUpdates = function(v, y) {
      return v(y);
    }, Pe.useFormState = function(v, y, O) {
      return x.H.useFormState(v, y, O);
    }, Pe.useFormStatus = function() {
      return x.H.useHostTransitionStatus();
    }, Pe.version = "19.2.3", Pe;
  }
  var Pd;
  function yy() {
    if (Pd) return Cs.exports;
    Pd = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
    }
    return s(), Cs.exports = hy(), Cs.exports;
  }
  var em;
  function gy() {
    if (em) return Ln;
    em = 1;
    var s = my(), f = Ls(), d = yy();
    function r(e) {
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
    function A(e) {
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
    function x(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function _(e) {
      if (e.tag === 31) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function v(e) {
      if (A(e) !== e) throw Error(r(188));
    }
    function y(e) {
      var t = e.alternate;
      if (!t) {
        if (t = A(e), t === null) throw Error(r(188));
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
            if (u === l) return v(n), e;
            if (u === a) return v(n), t;
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
      return l.stateNode.current === l ? e : t;
    }
    function O(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e;
      for (e = e.child; e !== null; ) {
        if (t = O(e), t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var R = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), I = /* @__PURE__ */ Symbol.for("react.transitional.element"), fe = /* @__PURE__ */ Symbol.for("react.portal"), pe = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), K = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), te = /* @__PURE__ */ Symbol.for("react.context"), Q = /* @__PURE__ */ Symbol.for("react.forward_ref"), Ne = /* @__PURE__ */ Symbol.for("react.suspense"), Ce = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), $e = /* @__PURE__ */ Symbol.for("react.lazy"), et = /* @__PURE__ */ Symbol.for("react.activity"), Ct = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), St = Symbol.iterator;
    function Ze(e) {
      return e === null || typeof e != "object" ? null : (e = St && e[St] || e["@@iterator"], typeof e == "function" ? e : null);
    }
    var Vt = /* @__PURE__ */ Symbol.for("react.client.reference");
    function qt(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.$$typeof === Vt ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case pe:
          return "Fragment";
        case K:
          return "Profiler";
        case J:
          return "StrictMode";
        case Ne:
          return "Suspense";
        case Ce:
          return "SuspenseList";
        case et:
          return "Activity";
      }
      if (typeof e == "object") switch (e.$$typeof) {
        case fe:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case W:
          return (e._context.displayName || "Context") + ".Consumer";
        case Q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : qt(e.type) || "Memo";
        case $e:
          t = e._payload, e = e._init;
          try {
            return qt(e(t));
          } catch {
          }
      }
      return null;
    }
    var ft = Array.isArray, w = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, ce = [], ye = -1;
    function g(e) {
      return {
        current: e
      };
    }
    function C(e) {
      0 > ye || (e.current = ce[ye], ce[ye] = null, ye--);
    }
    function E(e, t) {
      ye++, ce[ye] = e.current, e.current = t;
    }
    var H = g(null), Y = g(null), k = g(null), ne = g(null);
    function Ge(e, t) {
      switch (E(k, t), E(Y, e), E(H, null), t.nodeType) {
        case 9:
        case 11:
          e = (e = t.documentElement) && (e = e.namespaceURI) ? yd(e) : 0;
          break;
        default:
          if (e = t.tagName, t = t.namespaceURI) t = yd(t), e = gd(t, e);
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
      C(H), E(H, e);
    }
    function Me() {
      C(H), C(Y), C(k);
    }
    function dl(e) {
      e.memoizedState !== null && E(ne, e);
      var t = H.current, l = gd(t, e.type);
      t !== l && (E(Y, e), E(H, l));
    }
    function Fe(e) {
      Y.current === e && (C(H), C(Y)), ne.current === e && (C(ne), Rn._currentValue = V);
    }
    var ml, kn;
    function kt(e) {
      if (ml === void 0) try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        ml = t && t[1] || "", kn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ml + e + kn;
    }
    var Ie = false;
    function Nt(e, t) {
      if (!e || Ie) return "";
      Ie = true;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var a = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
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
                    var j = z;
                  }
                  Reflect.construct(e, [], U);
                } else {
                  try {
                    U.call();
                  } catch (z) {
                    j = z;
                  }
                  e.call(U.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (z) {
                  j = z;
                }
                (U = e()) && typeof U.catch == "function" && U.catch(function() {
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
                var T = `
` + m[a].replace(" at new ", " at ");
                return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), T;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        Ie = false, Error.prepareStackTrace = l;
      }
      return (l = e ? e.displayName || e.name : "") ? kt(l) : "";
    }
    function Ym(e, t) {
      switch (e.tag) {
        case 26:
        case 27:
        case 5:
          return kt(e.type);
        case 16:
          return kt("Lazy");
        case 13:
          return e.child !== t && t !== null ? kt("Suspense Fallback") : kt("Suspense");
        case 19:
          return kt("SuspenseList");
        case 0:
        case 15:
          return Nt(e.type, false);
        case 11:
          return Nt(e.type.render, false);
        case 1:
          return Nt(e.type, true);
        case 31:
          return kt("Activity");
        default:
          return "";
      }
    }
    function Zs(e) {
      try {
        var t = "", l = null;
        do
          t += Ym(e, l), l = e, e = e.return;
        while (e);
        return t;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var hi = Object.prototype.hasOwnProperty, yi = s.unstable_scheduleCallback, gi = s.unstable_cancelCallback, Lm = s.unstable_shouldYield, Gm = s.unstable_requestPaint, rt = s.unstable_now, Xm = s.unstable_getCurrentPriorityLevel, Vs = s.unstable_ImmediatePriority, ks = s.unstable_UserBlockingPriority, Kn = s.unstable_NormalPriority, Qm = s.unstable_LowPriority, Ks = s.unstable_IdlePriority, Zm = s.log, Vm = s.unstable_setDisableYieldValue, ka = null, ot = null;
    function hl(e) {
      if (typeof Zm == "function" && Vm(e), ot && typeof ot.setStrictMode == "function") try {
        ot.setStrictMode(ka, e);
      } catch {
      }
    }
    var dt = Math.clz32 ? Math.clz32 : Jm, km = Math.log, Km = Math.LN2;
    function Jm(e) {
      return e >>>= 0, e === 0 ? 32 : 31 - (km(e) / Km | 0) | 0;
    }
    var Jn = 256, Wn = 262144, $n = 4194304;
    function Yl(e) {
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
    function Fn(e, t, l) {
      var a = e.pendingLanes;
      if (a === 0) return 0;
      var n = 0, u = e.suspendedLanes, i = e.pingedLanes;
      e = e.warmLanes;
      var o = a & 134217727;
      return o !== 0 ? (a = o & ~u, a !== 0 ? n = Yl(a) : (i &= o, i !== 0 ? n = Yl(i) : l || (l = o & ~e, l !== 0 && (n = Yl(l))))) : (o = a & ~u, o !== 0 ? n = Yl(o) : i !== 0 ? n = Yl(i) : l || (l = a & ~e, l !== 0 && (n = Yl(l)))), n === 0 ? 0 : t !== 0 && t !== n && (t & u) === 0 && (u = n & -n, l = t & -t, u >= l || u === 32 && (l & 4194048) !== 0) ? t : n;
    }
    function Ka(e, t) {
      return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
    }
    function Wm(e, t) {
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
    function Js() {
      var e = $n;
      return $n <<= 1, ($n & 62914560) === 0 && ($n = 4194304), e;
    }
    function bi(e) {
      for (var t = [], l = 0; 31 > l; l++) t.push(e);
      return t;
    }
    function Ja(e, t) {
      e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
    }
    function $m(e, t, l, a, n, u) {
      var i = e.pendingLanes;
      e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
      var o = e.entanglements, m = e.expirationTimes, N = e.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var T = 31 - dt(l), U = 1 << T;
        o[T] = 0, m[T] = -1;
        var j = N[T];
        if (j !== null) for (N[T] = null, T = 0; T < j.length; T++) {
          var z = j[T];
          z !== null && (z.lane &= -536870913);
        }
        l &= ~U;
      }
      a !== 0 && Ws(e, a, 0), u !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(i & ~t));
    }
    function Ws(e, t, l) {
      e.pendingLanes |= t, e.suspendedLanes &= ~t;
      var a = 31 - dt(t);
      e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
    }
    function $s(e, t) {
      var l = e.entangledLanes |= t;
      for (e = e.entanglements; l; ) {
        var a = 31 - dt(l), n = 1 << a;
        n & t | e[a] & t && (e[a] |= t), l &= ~n;
      }
    }
    function Fs(e, t) {
      var l = t & -t;
      return l = (l & 42) !== 0 ? 1 : _i(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
    }
    function _i(e) {
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
    function Is() {
      var e = B.p;
      return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Yd(e.type));
    }
    function Ps(e, t) {
      var l = B.p;
      try {
        return B.p = e, t();
      } finally {
        B.p = l;
      }
    }
    var yl = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + yl, lt = "__reactProps$" + yl, ua = "__reactContainer$" + yl, vi = "__reactEvents$" + yl, Fm = "__reactListeners$" + yl, Im = "__reactHandles$" + yl, ef = "__reactResources$" + yl, Wa = "__reactMarker$" + yl;
    function xi(e) {
      delete e[Ve], delete e[lt], delete e[vi], delete e[Fm], delete e[Im];
    }
    function ia(e) {
      var t = e[Ve];
      if (t) return t;
      for (var l = e.parentNode; l; ) {
        if (t = l[ua] || l[Ve]) {
          if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for (e = Nd(e); e !== null; ) {
            if (l = e[Ve]) return l;
            e = Nd(e);
          }
          return t;
        }
        e = l, l = e.parentNode;
      }
      return null;
    }
    function ca(e) {
      if (e = e[Ve] || e[ua]) {
        var t = e.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
      }
      return null;
    }
    function $a(e) {
      var t = e.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
      throw Error(r(33));
    }
    function sa(e) {
      var t = e[ef];
      return t || (t = e[ef] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Xe(e) {
      e[Wa] = true;
    }
    var tf = /* @__PURE__ */ new Set(), lf = {};
    function Ll(e, t) {
      fa(e, t), fa(e + "Capture", t);
    }
    function fa(e, t) {
      for (lf[e] = t, e = 0; e < t.length; e++) tf.add(t[e]);
    }
    var Pm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), af = {}, nf = {};
    function e0(e) {
      return hi.call(nf, e) ? true : hi.call(af, e) ? false : Pm.test(e) ? nf[e] = true : (af[e] = true, false);
    }
    function In(e, t, l) {
      if (e0(t)) if (l === null) e.removeAttribute(t);
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
    function Pn(e, t, l) {
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
    function Kt(e, t, l, a) {
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
    function jt(e) {
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
    function uf(e) {
      var t = e.type;
      return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function t0(e, t, l) {
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
    function Si(e) {
      if (!e._valueTracker) {
        var t = uf(e) ? "checked" : "value";
        e._valueTracker = t0(e, t, "" + e[t]);
      }
    }
    function cf(e) {
      if (!e) return false;
      var t = e._valueTracker;
      if (!t) return true;
      var l = t.getValue(), a = "";
      return e && (a = uf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), true) : false;
    }
    function eu(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var l0 = /[\n"\\]/g;
    function At(e) {
      return e.replace(l0, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function Ni(e, t, l, a, n, u, i, o) {
      e.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? e.type = i : e.removeAttribute("type"), t != null ? i === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jt(t)) : e.value !== "" + jt(t) && (e.value = "" + jt(t)) : i !== "submit" && i !== "reset" || e.removeAttribute("value"), t != null ? ji(e, i, jt(t)) : l != null ? ji(e, i, jt(l)) : a != null && e.removeAttribute("value"), n == null && u != null && (e.defaultChecked = !!u), n != null && (e.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? e.name = "" + jt(o) : e.removeAttribute("name");
    }
    function sf(e, t, l, a, n, u, i, o) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || t != null)) {
          Si(e);
          return;
        }
        l = l != null ? "" + jt(l) : "", t = t != null ? "" + jt(t) : l, o || t === e.value || (e.value = t), e.defaultValue = t;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = o ? e.checked : !!a, e.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.name = i), Si(e);
    }
    function ji(e, t, l) {
      t === "number" && eu(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
    }
    function ra(e, t, l, a) {
      if (e = e.options, t) {
        t = {};
        for (var n = 0; n < l.length; n++) t["$" + l[n]] = true;
        for (l = 0; l < e.length; l++) n = t.hasOwnProperty("$" + e[l].value), e[l].selected !== n && (e[l].selected = n), n && a && (e[l].defaultSelected = true);
      } else {
        for (l = "" + jt(l), t = null, n = 0; n < e.length; n++) {
          if (e[n].value === l) {
            e[n].selected = true, a && (e[n].defaultSelected = true);
            return;
          }
          t !== null || e[n].disabled || (t = e[n]);
        }
        t !== null && (t.selected = true);
      }
    }
    function ff(e, t, l) {
      if (t != null && (t = "" + jt(t), t !== e.value && (e.value = t), l == null)) {
        e.defaultValue !== t && (e.defaultValue = t);
        return;
      }
      e.defaultValue = l != null ? "" + jt(l) : "";
    }
    function rf(e, t, l, a) {
      if (t == null) {
        if (a != null) {
          if (l != null) throw Error(r(92));
          if (ft(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), t = l;
      }
      l = jt(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Si(e);
    }
    function oa(e, t) {
      if (t) {
        var l = e.firstChild;
        if (l && l === e.lastChild && l.nodeType === 3) {
          l.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var a0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function of(e, t, l) {
      var a = t.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || a0.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
    }
    function df(e, t, l) {
      if (t != null && typeof t != "object") throw Error(r(62));
      if (e = e.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
        for (var n in t) a = t[n], t.hasOwnProperty(n) && l[n] !== a && of(e, n, a);
      } else for (var u in t) t.hasOwnProperty(u) && of(e, u, t[u]);
    }
    function Ai(e) {
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
    var n0 = /* @__PURE__ */ new Map([
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
    ]), u0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function tu(e) {
      return u0.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
    }
    function Jt() {
    }
    var zi = null;
    function Ei(e) {
      return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
    }
    var da = null, ma = null;
    function mf(e) {
      var t = ca(e);
      if (t && (e = t.stateNode)) {
        var l = e[lt] || null;
        e: switch (e = t.stateNode, t.type) {
          case "input":
            if (Ni(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
              for (l = e; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + At("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++) {
                var a = l[t];
                if (a !== e && a.form === e.form) {
                  var n = a[lt] || null;
                  if (!n) throw Error(r(90));
                  Ni(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (t = 0; t < l.length; t++) a = l[t], a.form === e.form && cf(a);
            }
            break e;
          case "textarea":
            ff(e, l.value, l.defaultValue);
            break e;
          case "select":
            t = l.value, t != null && ra(e, !!l.multiple, t, false);
        }
      }
    }
    var Ti = false;
    function hf(e, t, l) {
      if (Ti) return e(t, l);
      Ti = true;
      try {
        var a = e(t);
        return a;
      } finally {
        if (Ti = false, (da !== null || ma !== null) && (Xu(), da && (t = da, e = ma, ma = da = null, mf(t), e))) for (t = 0; t < e.length; t++) mf(e[t]);
      }
    }
    function Fa(e, t) {
      var l = e.stateNode;
      if (l === null) return null;
      var a = l[lt] || null;
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
      if (l && typeof l != "function") throw Error(r(231, t, typeof l));
      return l;
    }
    var Wt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = false;
    if (Wt) try {
      var Ia = {};
      Object.defineProperty(Ia, "passive", {
        get: function() {
          Mi = true;
        }
      }), window.addEventListener("test", Ia, Ia), window.removeEventListener("test", Ia, Ia);
    } catch {
      Mi = false;
    }
    var gl = null, wi = null, lu = null;
    function yf() {
      if (lu) return lu;
      var e, t = wi, l = t.length, a, n = "value" in gl ? gl.value : gl.textContent, u = n.length;
      for (e = 0; e < l && t[e] === n[e]; e++) ;
      var i = l - e;
      for (a = 1; a <= i && t[l - a] === n[u - a]; a++) ;
      return lu = n.slice(e, 1 < a ? 1 - a : void 0);
    }
    function au(e) {
      var t = e.keyCode;
      return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
    }
    function nu() {
      return true;
    }
    function gf() {
      return false;
    }
    function at(e) {
      function t(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var o in e) e.hasOwnProperty(o) && (l = e[o], this[o] = l ? l(u) : u[o]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? nu : gf, this.isPropagationStopped = gf, this;
      }
      return R(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var l = this.nativeEvent;
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = false), this.isDefaultPrevented = nu);
        },
        stopPropagation: function() {
          var l = this.nativeEvent;
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = true), this.isPropagationStopped = nu);
        },
        persist: function() {
        },
        isPersistent: nu
      }), t;
    }
    var Gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, uu = at(Gl), Pa = R({}, Gl, {
      view: 0,
      detail: 0
    }), i0 = at(Pa), Oi, Di, en, iu = R({}, Pa, {
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
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (e !== en && (en && e.type === "mousemove" ? (Oi = e.screenX - en.screenX, Di = e.screenY - en.screenY) : Di = Oi = 0, en = e), Oi);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Di;
      }
    }), bf = at(iu), c0 = R({}, iu, {
      dataTransfer: 0
    }), s0 = at(c0), f0 = R({}, Pa, {
      relatedTarget: 0
    }), Ui = at(f0), r0 = R({}, Gl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), o0 = at(r0), d0 = R({}, Gl, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), m0 = at(d0), h0 = R({}, Gl, {
      data: 0
    }), _f = at(h0), y0 = {
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
    }, g0 = {
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
    }, b0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function _0(e) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(e) : (e = b0[e]) ? !!t[e] : false;
    }
    function Ci() {
      return _0;
    }
    var p0 = R({}, Pa, {
      key: function(e) {
        if (e.key) {
          var t = y0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress" ? (e = au(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? g0[e.keyCode] || "Unidentified" : "";
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
      charCode: function(e) {
        return e.type === "keypress" ? au(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? au(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), v0 = at(p0), x0 = R({}, iu, {
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
    }), pf = at(x0), S0 = R({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci
    }), N0 = at(S0), j0 = R({}, Gl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), A0 = at(j0), z0 = R({}, iu, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), E0 = at(z0), T0 = R({}, Gl, {
      newState: 0,
      oldState: 0
    }), M0 = at(T0), w0 = [
      9,
      13,
      27,
      32
    ], Ri = Wt && "CompositionEvent" in window, tn = null;
    Wt && "documentMode" in document && (tn = document.documentMode);
    var O0 = Wt && "TextEvent" in window && !tn, vf = Wt && (!Ri || tn && 8 < tn && 11 >= tn), xf = " ", Sf = false;
    function Nf(e, t) {
      switch (e) {
        case "keyup":
          return w0.indexOf(t.keyCode) !== -1;
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
    function jf(e) {
      return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
    }
    var ha = false;
    function D0(e, t) {
      switch (e) {
        case "compositionend":
          return jf(t);
        case "keypress":
          return t.which !== 32 ? null : (Sf = true, xf);
        case "textInput":
          return e = t.data, e === xf && Sf ? null : e;
        default:
          return null;
      }
    }
    function U0(e, t) {
      if (ha) return e === "compositionend" || !Ri && Nf(e, t) ? (e = yf(), lu = wi = gl = null, ha = false, e) : null;
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
          return vf && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var C0 = {
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
    function Af(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!C0[e.type] : t === "textarea";
    }
    function zf(e, t, l, a) {
      da ? ma ? ma.push(a) : ma = [
        a
      ] : da = a, t = Wu(t, "onChange"), 0 < t.length && (l = new uu("onChange", "change", null, l, a), e.push({
        event: l,
        listeners: t
      }));
    }
    var ln = null, an = null;
    function R0(e) {
      fd(e, 0);
    }
    function cu(e) {
      var t = $a(e);
      if (cf(t)) return e;
    }
    function Ef(e, t) {
      if (e === "change") return t;
    }
    var Tf = false;
    if (Wt) {
      var Hi;
      if (Wt) {
        var Bi = "oninput" in document;
        if (!Bi) {
          var Mf = document.createElement("div");
          Mf.setAttribute("oninput", "return;"), Bi = typeof Mf.oninput == "function";
        }
        Hi = Bi;
      } else Hi = false;
      Tf = Hi && (!document.documentMode || 9 < document.documentMode);
    }
    function wf() {
      ln && (ln.detachEvent("onpropertychange", Of), an = ln = null);
    }
    function Of(e) {
      if (e.propertyName === "value" && cu(an)) {
        var t = [];
        zf(t, an, e, Ei(e)), hf(R0, t);
      }
    }
    function H0(e, t, l) {
      e === "focusin" ? (wf(), ln = t, an = l, ln.attachEvent("onpropertychange", Of)) : e === "focusout" && wf();
    }
    function B0(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown") return cu(an);
    }
    function q0(e, t) {
      if (e === "click") return cu(t);
    }
    function Y0(e, t) {
      if (e === "input" || e === "change") return cu(t);
    }
    function L0(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var mt = typeof Object.is == "function" ? Object.is : L0;
    function nn(e, t) {
      if (mt(e, t)) return true;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null) return false;
      var l = Object.keys(e), a = Object.keys(t);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!hi.call(t, n) || !mt(e[n], t[n])) return false;
      }
      return true;
    }
    function Df(e) {
      for (; e && e.firstChild; ) e = e.firstChild;
      return e;
    }
    function Uf(e, t) {
      var l = Df(e);
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
        l = Df(l);
      }
    }
    function Cf(e, t) {
      return e && t ? e === t ? true : e && e.nodeType === 3 ? false : t && t.nodeType === 3 ? Cf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : false : false;
    }
    function Rf(e) {
      e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
      for (var t = eu(e.document); t instanceof e.HTMLIFrameElement; ) {
        try {
          var l = typeof t.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) e = t.contentWindow;
        else break;
        t = eu(e.document);
      }
      return t;
    }
    function qi(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    var G0 = Wt && "documentMode" in document && 11 >= document.documentMode, ya = null, Yi = null, un = null, Li = false;
    function Hf(e, t, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Li || ya == null || ya !== eu(a) || (a = ya, "selectionStart" in a && qi(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), un && nn(un, a) || (un = a, a = Wu(Yi, "onSelect"), 0 < a.length && (t = new uu("onSelect", "select", null, t, l), e.push({
        event: t,
        listeners: a
      }), t.target = ya)));
    }
    function Xl(e, t) {
      var l = {};
      return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
    }
    var ga = {
      animationend: Xl("Animation", "AnimationEnd"),
      animationiteration: Xl("Animation", "AnimationIteration"),
      animationstart: Xl("Animation", "AnimationStart"),
      transitionrun: Xl("Transition", "TransitionRun"),
      transitionstart: Xl("Transition", "TransitionStart"),
      transitioncancel: Xl("Transition", "TransitionCancel"),
      transitionend: Xl("Transition", "TransitionEnd")
    }, Gi = {}, Bf = {};
    Wt && (Bf = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
    function Ql(e) {
      if (Gi[e]) return Gi[e];
      if (!ga[e]) return e;
      var t = ga[e], l;
      for (l in t) if (t.hasOwnProperty(l) && l in Bf) return Gi[e] = t[l];
      return e;
    }
    var qf = Ql("animationend"), Yf = Ql("animationiteration"), Lf = Ql("animationstart"), X0 = Ql("transitionrun"), Q0 = Ql("transitionstart"), Z0 = Ql("transitioncancel"), Gf = Ql("transitionend"), Xf = /* @__PURE__ */ new Map(), Xi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xi.push("scrollEnd");
    function Rt(e, t) {
      Xf.set(e, t), Ll(t, [
        e
      ]);
    }
    var su = typeof reportError == "function" ? reportError : function(e) {
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
    }, zt = [], ba = 0, Qi = 0;
    function fu() {
      for (var e = ba, t = Qi = ba = 0; t < e; ) {
        var l = zt[t];
        zt[t++] = null;
        var a = zt[t];
        zt[t++] = null;
        var n = zt[t];
        zt[t++] = null;
        var u = zt[t];
        if (zt[t++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Qf(l, n, u);
      }
    }
    function ru(e, t, l, a) {
      zt[ba++] = e, zt[ba++] = t, zt[ba++] = l, zt[ba++] = a, Qi |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
    }
    function Zi(e, t, l, a) {
      return ru(e, t, l, a), ou(e);
    }
    function Zl(e, t) {
      return ru(e, null, null, t), ou(e);
    }
    function Qf(e, t, l) {
      e.lanes |= l;
      var a = e.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = e.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (n = true)), e = u, u = u.return;
      return e.tag === 3 ? (u = e.stateNode, n && t !== null && (n = 31 - dt(l), e = u.hiddenUpdates, a = e[n], a === null ? e[n] = [
        t
      ] : a.push(t), t.lane = l | 536870912), u) : null;
    }
    function ou(e) {
      if (50 < Tn) throw Tn = 0, Pc = null, Error(r(185));
      for (var t = e.return; t !== null; ) e = t, t = e.return;
      return e.tag === 3 ? e.stateNode : null;
    }
    var _a = {};
    function V0(e, t, l, a) {
      this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function ht(e, t, l, a) {
      return new V0(e, t, l, a);
    }
    function Vi(e) {
      return e = e.prototype, !(!e || !e.isReactComponent);
    }
    function $t(e, t) {
      var l = e.alternate;
      return l === null ? (l = ht(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
    }
    function Zf(e, t) {
      e.flags &= 65011714;
      var l = e.alternate;
      return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), e;
    }
    function du(e, t, l, a, n, u) {
      var i = 0;
      if (a = e, typeof e == "function") Vi(e) && (i = 1);
      else if (typeof e == "string") i = $h(e, l, H.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
      else e: switch (e) {
        case et:
          return e = ht(31, l, t, n), e.elementType = et, e.lanes = u, e;
        case pe:
          return Vl(l.children, n, u, t);
        case J:
          i = 8, n |= 24;
          break;
        case K:
          return e = ht(12, l, t, n | 2), e.elementType = K, e.lanes = u, e;
        case Ne:
          return e = ht(13, l, t, n), e.elementType = Ne, e.lanes = u, e;
        case Ce:
          return e = ht(19, l, t, n), e.elementType = Ce, e.lanes = u, e;
        default:
          if (typeof e == "object" && e !== null) switch (e.$$typeof) {
            case te:
              i = 10;
              break e;
            case W:
              i = 9;
              break e;
            case Q:
              i = 11;
              break e;
            case F:
              i = 14;
              break e;
            case $e:
              i = 16, a = null;
              break e;
          }
          i = 29, l = Error(r(130, e === null ? "null" : typeof e, "")), a = null;
      }
      return t = ht(i, l, t, n), t.elementType = e, t.type = a, t.lanes = u, t;
    }
    function Vl(e, t, l, a) {
      return e = ht(7, e, a, t), e.lanes = l, e;
    }
    function ki(e, t, l) {
      return e = ht(6, e, null, t), e.lanes = l, e;
    }
    function Vf(e) {
      var t = ht(18, null, null, 0);
      return t.stateNode = e, t;
    }
    function Ki(e, t, l) {
      return t = ht(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, t;
    }
    var kf = /* @__PURE__ */ new WeakMap();
    function Et(e, t) {
      if (typeof e == "object" && e !== null) {
        var l = kf.get(e);
        return l !== void 0 ? l : (t = {
          value: e,
          source: t,
          stack: Zs(t)
        }, kf.set(e, t), t);
      }
      return {
        value: e,
        source: t,
        stack: Zs(t)
      };
    }
    var pa = [], va = 0, mu = null, cn = 0, Tt = [], Mt = 0, bl = null, Yt = 1, Lt = "";
    function Ft(e, t) {
      pa[va++] = cn, pa[va++] = mu, mu = e, cn = t;
    }
    function Kf(e, t, l) {
      Tt[Mt++] = Yt, Tt[Mt++] = Lt, Tt[Mt++] = bl, bl = e;
      var a = Yt;
      e = Lt;
      var n = 32 - dt(a) - 1;
      a &= ~(1 << n), l += 1;
      var u = 32 - dt(t) + n;
      if (30 < u) {
        var i = n - n % 5;
        u = (a & (1 << i) - 1).toString(32), a >>= i, n -= i, Yt = 1 << 32 - dt(t) + n | l << n | a, Lt = u + e;
      } else Yt = 1 << u | l << n | a, Lt = e;
    }
    function Ji(e) {
      e.return !== null && (Ft(e, 1), Kf(e, 1, 0));
    }
    function Wi(e) {
      for (; e === mu; ) mu = pa[--va], pa[va] = null, cn = pa[--va], pa[va] = null;
      for (; e === bl; ) bl = Tt[--Mt], Tt[Mt] = null, Lt = Tt[--Mt], Tt[Mt] = null, Yt = Tt[--Mt], Tt[Mt] = null;
    }
    function Jf(e, t) {
      Tt[Mt++] = Yt, Tt[Mt++] = Lt, Tt[Mt++] = bl, Yt = t.id, Lt = t.overflow, bl = e;
    }
    var ke = null, ze = null, se = false, _l = null, wt = false, $i = Error(r(519));
    function pl(e) {
      var t = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw sn(Et(t, e)), $i;
    }
    function Wf(e) {
      var t = e.stateNode, l = e.type, a = e.memoizedProps;
      switch (t[Ve] = e, t[lt] = a, l) {
        case "dialog":
          ae("cancel", t), ae("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          ae("load", t);
          break;
        case "video":
        case "audio":
          for (l = 0; l < wn.length; l++) ae(wn[l], t);
          break;
        case "source":
          ae("error", t);
          break;
        case "img":
        case "image":
        case "link":
          ae("error", t), ae("load", t);
          break;
        case "details":
          ae("toggle", t);
          break;
        case "input":
          ae("invalid", t), sf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          ae("invalid", t);
          break;
        case "textarea":
          ae("invalid", t), rf(t, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === true || md(t.textContent, l) ? (a.popover != null && (ae("beforetoggle", t), ae("toggle", t)), a.onScroll != null && ae("scroll", t), a.onScrollEnd != null && ae("scrollend", t), a.onClick != null && (t.onclick = Jt), t = true) : t = false, t || pl(e, true);
    }
    function $f(e) {
      for (ke = e.return; ke; ) switch (ke.tag) {
        case 5:
        case 31:
        case 13:
          wt = false;
          return;
        case 27:
        case 3:
          wt = true;
          return;
        default:
          ke = ke.return;
      }
    }
    function xa(e) {
      if (e !== ke) return false;
      if (!se) return $f(e), se = true, false;
      var t = e.tag, l;
      if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || hs(e.type, e.memoizedProps)), l = !l), l && ze && pl(e), $f(e), t === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
        ze = Sd(e);
      } else if (t === 31) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(317));
        ze = Sd(e);
      } else t === 27 ? (t = ze, Ul(e.type) ? (e = ps, ps = null, ze = e) : ze = t) : ze = ke ? Dt(e.stateNode.nextSibling) : null;
      return true;
    }
    function kl() {
      ze = ke = null, se = false;
    }
    function Fi() {
      var e = _l;
      return e !== null && (ct === null ? ct = e : ct.push.apply(ct, e), _l = null), e;
    }
    function sn(e) {
      _l === null ? _l = [
        e
      ] : _l.push(e);
    }
    var Ii = g(null), Kl = null, It = null;
    function vl(e, t, l) {
      E(Ii, t._currentValue), t._currentValue = l;
    }
    function Pt(e) {
      e._currentValue = Ii.current, C(Ii);
    }
    function Pi(e, t, l) {
      for (; e !== null; ) {
        var a = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
        e = e.return;
      }
    }
    function ec(e, t, l, a) {
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
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Pi(u.return, l, e), a || (i = null);
              break e;
            }
            u = o.next;
          }
        } else if (n.tag === 18) {
          if (i = n.return, i === null) throw Error(r(341));
          i.lanes |= l, u = i.alternate, u !== null && (u.lanes |= l), Pi(i, l, e), i = null;
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
    function Sa(e, t, l, a) {
      e = null;
      for (var n = t, u = false; n !== null; ) {
        if (!u) {
          if ((n.flags & 524288) !== 0) u = true;
          else if ((n.flags & 262144) !== 0) break;
        }
        if (n.tag === 10) {
          var i = n.alternate;
          if (i === null) throw Error(r(387));
          if (i = i.memoizedProps, i !== null) {
            var o = n.type;
            mt(n.pendingProps.value, i.value) || (e !== null ? e.push(o) : e = [
              o
            ]);
          }
        } else if (n === ne.current) {
          if (i = n.alternate, i === null) throw Error(r(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (e !== null ? e.push(Rn) : e = [
            Rn
          ]);
        }
        n = n.return;
      }
      e !== null && ec(t, e, l, a), t.flags |= 262144;
    }
    function hu(e) {
      for (e = e.firstContext; e !== null; ) {
        if (!mt(e.context._currentValue, e.memoizedValue)) return true;
        e = e.next;
      }
      return false;
    }
    function Jl(e) {
      Kl = e, It = null, e = e.dependencies, e !== null && (e.firstContext = null);
    }
    function Ke(e) {
      return Ff(Kl, e);
    }
    function yu(e, t) {
      return Kl === null && Jl(e), Ff(e, t);
    }
    function Ff(e, t) {
      var l = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: l,
        next: null
      }, It === null) {
        if (e === null) throw Error(r(308));
        It = t, e.dependencies = {
          lanes: 0,
          firstContext: t
        }, e.flags |= 524288;
      } else It = It.next = t;
      return l;
    }
    var k0 = typeof AbortController < "u" ? AbortController : function() {
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
    }, K0 = s.unstable_scheduleCallback, J0 = s.unstable_NormalPriority, Re = {
      $$typeof: te,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function tc() {
      return {
        controller: new k0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function fn(e) {
      e.refCount--, e.refCount === 0 && K0(J0, function() {
        e.controller.abort();
      });
    }
    var rn = null, lc = 0, Na = 0, ja = null;
    function W0(e, t) {
      if (rn === null) {
        var l = rn = [];
        lc = 0, Na = us(), ja = {
          status: "pending",
          value: void 0,
          then: function(a) {
            l.push(a);
          }
        };
      }
      return lc++, t.then(If, If), t;
    }
    function If() {
      if (--lc === 0 && rn !== null) {
        ja !== null && (ja.status = "fulfilled");
        var e = rn;
        rn = null, Na = 0, ja = null;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
    }
    function $0(e, t) {
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
    var Pf = w.S;
    w.S = function(e, t) {
      Bo = rt(), typeof t == "object" && t !== null && typeof t.then == "function" && W0(e, t), Pf !== null && Pf(e, t);
    };
    var Wl = g(null);
    function ac() {
      var e = Wl.current;
      return e !== null ? e : je.pooledCache;
    }
    function gu(e, t) {
      t === null ? E(Wl, Wl.current) : E(Wl, t.pool);
    }
    function er() {
      var e = ac();
      return e === null ? null : {
        parent: Re._currentValue,
        pool: e
      };
    }
    var Aa = Error(r(460)), nc = Error(r(474)), bu = Error(r(542)), _u = {
      then: function() {
      }
    };
    function tr(e) {
      return e = e.status, e === "fulfilled" || e === "rejected";
    }
    function lr(e, t, l) {
      switch (l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(Jt, Jt), t = l), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw e = t.reason, nr(e), e;
        default:
          if (typeof t.status == "string") t.then(Jt, Jt);
          else {
            if (e = je, e !== null && 100 < e.shellSuspendCounter) throw Error(r(482));
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
              throw e = t.reason, nr(e), e;
          }
          throw Fl = t, Aa;
      }
    }
    function $l(e) {
      try {
        var t = e._init;
        return t(e._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Fl = l, Aa) : l;
      }
    }
    var Fl = null;
    function ar() {
      if (Fl === null) throw Error(r(459));
      var e = Fl;
      return Fl = null, e;
    }
    function nr(e) {
      if (e === Aa || e === bu) throw Error(r(483));
    }
    var za = null, on = 0;
    function pu(e) {
      var t = on;
      return on += 1, za === null && (za = []), lr(za, e, t);
    }
    function dn(e, t) {
      t = t.props.ref, e.ref = t !== void 0 ? t : null;
    }
    function vu(e, t) {
      throw t.$$typeof === q ? Error(r(525)) : (e = Object.prototype.toString.call(t), Error(r(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
    }
    function ur(e) {
      function t(p, h) {
        if (e) {
          var S = p.deletions;
          S === null ? (p.deletions = [
            h
          ], p.flags |= 16) : S.push(h);
        }
      }
      function l(p, h) {
        if (!e) return null;
        for (; h !== null; ) t(p, h), h = h.sibling;
        return null;
      }
      function a(p) {
        for (var h = /* @__PURE__ */ new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), p = p.sibling;
        return h;
      }
      function n(p, h) {
        return p = $t(p, h), p.index = 0, p.sibling = null, p;
      }
      function u(p, h, S) {
        return p.index = S, e ? (S = p.alternate, S !== null ? (S = S.index, S < h ? (p.flags |= 67108866, h) : S) : (p.flags |= 67108866, h)) : (p.flags |= 1048576, h);
      }
      function i(p) {
        return e && p.alternate === null && (p.flags |= 67108866), p;
      }
      function o(p, h, S, D) {
        return h === null || h.tag !== 6 ? (h = ki(S, p.mode, D), h.return = p, h) : (h = n(h, S), h.return = p, h);
      }
      function m(p, h, S, D) {
        var X = S.type;
        return X === pe ? T(p, h, S.props.children, D, S.key) : h !== null && (h.elementType === X || typeof X == "object" && X !== null && X.$$typeof === $e && $l(X) === h.type) ? (h = n(h, S.props), dn(h, S), h.return = p, h) : (h = du(S.type, S.key, S.props, null, p.mode, D), dn(h, S), h.return = p, h);
      }
      function N(p, h, S, D) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = Ki(S, p.mode, D), h.return = p, h) : (h = n(h, S.children || []), h.return = p, h);
      }
      function T(p, h, S, D, X) {
        return h === null || h.tag !== 7 ? (h = Vl(S, p.mode, D, X), h.return = p, h) : (h = n(h, S), h.return = p, h);
      }
      function U(p, h, S) {
        if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = ki("" + h, p.mode, S), h.return = p, h;
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case I:
              return S = du(h.type, h.key, h.props, null, p.mode, S), dn(S, h), S.return = p, S;
            case fe:
              return h = Ki(h, p.mode, S), h.return = p, h;
            case $e:
              return h = $l(h), U(p, h, S);
          }
          if (ft(h) || Ze(h)) return h = Vl(h, p.mode, S, null), h.return = p, h;
          if (typeof h.then == "function") return U(p, pu(h), S);
          if (h.$$typeof === te) return U(p, yu(p, h), S);
          vu(p, h);
        }
        return null;
      }
      function j(p, h, S, D) {
        var X = h !== null ? h.key : null;
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return X !== null ? null : o(p, h, "" + S, D);
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case I:
              return S.key === X ? m(p, h, S, D) : null;
            case fe:
              return S.key === X ? N(p, h, S, D) : null;
            case $e:
              return S = $l(S), j(p, h, S, D);
          }
          if (ft(S) || Ze(S)) return X !== null ? null : T(p, h, S, D, null);
          if (typeof S.then == "function") return j(p, h, pu(S), D);
          if (S.$$typeof === te) return j(p, h, yu(p, S), D);
          vu(p, S);
        }
        return null;
      }
      function z(p, h, S, D, X) {
        if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint") return p = p.get(S) || null, o(h, p, "" + D, X);
        if (typeof D == "object" && D !== null) {
          switch (D.$$typeof) {
            case I:
              return p = p.get(D.key === null ? S : D.key) || null, m(h, p, D, X);
            case fe:
              return p = p.get(D.key === null ? S : D.key) || null, N(h, p, D, X);
            case $e:
              return D = $l(D), z(p, h, S, D, X);
          }
          if (ft(D) || Ze(D)) return p = p.get(S) || null, T(h, p, D, X, null);
          if (typeof D.then == "function") return z(p, h, S, pu(D), X);
          if (D.$$typeof === te) return z(p, h, S, yu(h, D), X);
          vu(h, D);
        }
        return null;
      }
      function L(p, h, S, D) {
        for (var X = null, oe = null, G = h, ee = h = 0, ie = null; G !== null && ee < S.length; ee++) {
          G.index > ee ? (ie = G, G = null) : ie = G.sibling;
          var de = j(p, G, S[ee], D);
          if (de === null) {
            G === null && (G = ie);
            break;
          }
          e && G && de.alternate === null && t(p, G), h = u(de, h, ee), oe === null ? X = de : oe.sibling = de, oe = de, G = ie;
        }
        if (ee === S.length) return l(p, G), se && Ft(p, ee), X;
        if (G === null) {
          for (; ee < S.length; ee++) G = U(p, S[ee], D), G !== null && (h = u(G, h, ee), oe === null ? X = G : oe.sibling = G, oe = G);
          return se && Ft(p, ee), X;
        }
        for (G = a(G); ee < S.length; ee++) ie = z(G, p, ee, S[ee], D), ie !== null && (e && ie.alternate !== null && G.delete(ie.key === null ? ee : ie.key), h = u(ie, h, ee), oe === null ? X = ie : oe.sibling = ie, oe = ie);
        return e && G.forEach(function(ql) {
          return t(p, ql);
        }), se && Ft(p, ee), X;
      }
      function Z(p, h, S, D) {
        if (S == null) throw Error(r(151));
        for (var X = null, oe = null, G = h, ee = h = 0, ie = null, de = S.next(); G !== null && !de.done; ee++, de = S.next()) {
          G.index > ee ? (ie = G, G = null) : ie = G.sibling;
          var ql = j(p, G, de.value, D);
          if (ql === null) {
            G === null && (G = ie);
            break;
          }
          e && G && ql.alternate === null && t(p, G), h = u(ql, h, ee), oe === null ? X = ql : oe.sibling = ql, oe = ql, G = ie;
        }
        if (de.done) return l(p, G), se && Ft(p, ee), X;
        if (G === null) {
          for (; !de.done; ee++, de = S.next()) de = U(p, de.value, D), de !== null && (h = u(de, h, ee), oe === null ? X = de : oe.sibling = de, oe = de);
          return se && Ft(p, ee), X;
        }
        for (G = a(G); !de.done; ee++, de = S.next()) de = z(G, p, ee, de.value, D), de !== null && (e && de.alternate !== null && G.delete(de.key === null ? ee : de.key), h = u(de, h, ee), oe === null ? X = de : oe.sibling = de, oe = de);
        return e && G.forEach(function(cy) {
          return t(p, cy);
        }), se && Ft(p, ee), X;
      }
      function Se(p, h, S, D) {
        if (typeof S == "object" && S !== null && S.type === pe && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case I:
              e: {
                for (var X = S.key; h !== null; ) {
                  if (h.key === X) {
                    if (X = S.type, X === pe) {
                      if (h.tag === 7) {
                        l(p, h.sibling), D = n(h, S.props.children), D.return = p, p = D;
                        break e;
                      }
                    } else if (h.elementType === X || typeof X == "object" && X !== null && X.$$typeof === $e && $l(X) === h.type) {
                      l(p, h.sibling), D = n(h, S.props), dn(D, S), D.return = p, p = D;
                      break e;
                    }
                    l(p, h);
                    break;
                  } else t(p, h);
                  h = h.sibling;
                }
                S.type === pe ? (D = Vl(S.props.children, p.mode, D, S.key), D.return = p, p = D) : (D = du(S.type, S.key, S.props, null, p.mode, D), dn(D, S), D.return = p, p = D);
              }
              return i(p);
            case fe:
              e: {
                for (X = S.key; h !== null; ) {
                  if (h.key === X) if (h.tag === 4 && h.stateNode.containerInfo === S.containerInfo && h.stateNode.implementation === S.implementation) {
                    l(p, h.sibling), D = n(h, S.children || []), D.return = p, p = D;
                    break e;
                  } else {
                    l(p, h);
                    break;
                  }
                  else t(p, h);
                  h = h.sibling;
                }
                D = Ki(S, p.mode, D), D.return = p, p = D;
              }
              return i(p);
            case $e:
              return S = $l(S), Se(p, h, S, D);
          }
          if (ft(S)) return L(p, h, S, D);
          if (Ze(S)) {
            if (X = Ze(S), typeof X != "function") throw Error(r(150));
            return S = X.call(S), Z(p, h, S, D);
          }
          if (typeof S.then == "function") return Se(p, h, pu(S), D);
          if (S.$$typeof === te) return Se(p, h, yu(p, S), D);
          vu(p, S);
        }
        return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, h !== null && h.tag === 6 ? (l(p, h.sibling), D = n(h, S), D.return = p, p = D) : (l(p, h), D = ki(S, p.mode, D), D.return = p, p = D), i(p)) : l(p, h);
      }
      return function(p, h, S, D) {
        try {
          on = 0;
          var X = Se(p, h, S, D);
          return za = null, X;
        } catch (G) {
          if (G === Aa || G === bu) throw G;
          var oe = ht(29, G, null, p.mode);
          return oe.lanes = D, oe.return = p, oe;
        }
      };
    }
    var Il = ur(true), ir = ur(false), xl = false;
    function uc(e) {
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
    function ic(e, t) {
      e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      });
    }
    function Sl(e) {
      return {
        lane: e,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Nl(e, t, l) {
      var a = e.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (me & 2) !== 0) {
        var n = a.pending;
        return n === null ? t.next = t : (t.next = n.next, n.next = t), a.pending = t, t = ou(e), Qf(e, null, l), t;
      }
      return ru(e, a, t, l), ou(e);
    }
    function mn(e, t, l) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
        var a = t.lanes;
        a &= e.pendingLanes, l |= a, t.lanes = l, $s(e, l);
      }
    }
    function cc(e, t) {
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
    var sc = false;
    function hn() {
      if (sc) {
        var e = ja;
        if (e !== null) throw e;
      }
    }
    function yn(e, t, l, a) {
      sc = false;
      var n = e.updateQueue;
      xl = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, o = n.shared.pending;
      if (o !== null) {
        n.shared.pending = null;
        var m = o, N = m.next;
        m.next = null, i === null ? u = N : i.next = N, i = m;
        var T = e.alternate;
        T !== null && (T = T.updateQueue, o = T.lastBaseUpdate, o !== i && (o === null ? T.firstBaseUpdate = N : o.next = N, T.lastBaseUpdate = m));
      }
      if (u !== null) {
        var U = n.baseState;
        i = 0, T = N = m = null, o = u;
        do {
          var j = o.lane & -536870913, z = j !== o.lane;
          if (z ? (ue & j) === j : (a & j) === j) {
            j !== 0 && j === Na && (sc = true), T !== null && (T = T.next = {
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            });
            e: {
              var L = e, Z = o;
              j = t;
              var Se = l;
              switch (Z.tag) {
                case 1:
                  if (L = Z.payload, typeof L == "function") {
                    U = L.call(Se, U, j);
                    break e;
                  }
                  U = L;
                  break e;
                case 3:
                  L.flags = L.flags & -65537 | 128;
                case 0:
                  if (L = Z.payload, j = typeof L == "function" ? L.call(Se, U, j) : L, j == null) break e;
                  U = R({}, U, j);
                  break e;
                case 2:
                  xl = true;
              }
            }
            j = o.callback, j !== null && (e.flags |= 64, z && (e.flags |= 8192), z = n.callbacks, z === null ? n.callbacks = [
              j
            ] : z.push(j));
          } else z = {
            lane: j,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          }, T === null ? (N = T = z, m = U) : T = T.next = z, i |= j;
          if (o = o.next, o === null) {
            if (o = n.shared.pending, o === null) break;
            z = o, o = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
          }
        } while (true);
        T === null && (m = U), n.baseState = m, n.firstBaseUpdate = N, n.lastBaseUpdate = T, u === null && (n.shared.lanes = 0), Tl |= i, e.lanes = i, e.memoizedState = U;
      }
    }
    function cr(e, t) {
      if (typeof e != "function") throw Error(r(191, e));
      e.call(t);
    }
    function sr(e, t) {
      var l = e.callbacks;
      if (l !== null) for (e.callbacks = null, e = 0; e < l.length; e++) cr(l[e], t);
    }
    var Ea = g(null), xu = g(0);
    function fr(e, t) {
      e = sl, E(xu, e), E(Ea, t), sl = e | t.baseLanes;
    }
    function fc() {
      E(xu, sl), E(Ea, Ea.current);
    }
    function rc() {
      sl = xu.current, C(Ea), C(xu);
    }
    var yt = g(null), Ot = null;
    function jl(e) {
      var t = e.alternate;
      E(De, De.current & 1), E(yt, e), Ot === null && (t === null || Ea.current !== null || t.memoizedState !== null) && (Ot = e);
    }
    function oc(e) {
      E(De, De.current), E(yt, e), Ot === null && (Ot = e);
    }
    function rr(e) {
      e.tag === 22 ? (E(De, De.current), E(yt, e), Ot === null && (Ot = e)) : Al();
    }
    function Al() {
      E(De, De.current), E(yt, yt.current);
    }
    function gt(e) {
      C(yt), Ot === e && (Ot = null), C(De);
    }
    var De = g(0);
    function Su(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === 13) {
          var l = t.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || bs(l) || _s(l))) return t;
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
    var el = 0, P = null, ve = null, He = null, Nu = false, Ta = false, Pl = false, ju = 0, gn = 0, Ma = null, F0 = 0;
    function we() {
      throw Error(r(321));
    }
    function dc(e, t) {
      if (t === null) return false;
      for (var l = 0; l < t.length && l < e.length; l++) if (!mt(e[l], t[l])) return false;
      return true;
    }
    function mc(e, t, l, a, n, u) {
      return el = u, P = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, w.H = e === null || e.memoizedState === null ? Kr : Tc, Pl = false, u = l(a, n), Pl = false, Ta && (u = dr(t, l, a, n)), or(e), u;
    }
    function or(e) {
      w.H = pn;
      var t = ve !== null && ve.next !== null;
      if (el = 0, He = ve = P = null, Nu = false, gn = 0, Ma = null, t) throw Error(r(300));
      e === null || Be || (e = e.dependencies, e !== null && hu(e) && (Be = true));
    }
    function dr(e, t, l, a) {
      P = e;
      var n = 0;
      do {
        if (Ta && (Ma = null), gn = 0, Ta = false, 25 <= n) throw Error(r(301));
        if (n += 1, He = ve = null, e.updateQueue != null) {
          var u = e.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        w.H = Jr, u = t(l, a);
      } while (Ta);
      return u;
    }
    function I0() {
      var e = w.H, t = e.useState()[0];
      return t = typeof t.then == "function" ? bn(t) : t, e = e.useState()[0], (ve !== null ? ve.memoizedState : null) !== e && (P.flags |= 1024), t;
    }
    function hc() {
      var e = ju !== 0;
      return ju = 0, e;
    }
    function yc(e, t, l) {
      t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
    }
    function gc(e) {
      if (Nu) {
        for (e = e.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Nu = false;
      }
      el = 0, He = ve = P = null, Ta = false, gn = ju = 0, Ma = null;
    }
    function tt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return He === null ? P.memoizedState = He = e : He = He.next = e, He;
    }
    function Ue() {
      if (ve === null) {
        var e = P.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = ve.next;
      var t = He === null ? P.memoizedState : He.next;
      if (t !== null) He = t, ve = e;
      else {
        if (e === null) throw P.alternate === null ? Error(r(467)) : Error(r(310));
        ve = e, e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null
        }, He === null ? P.memoizedState = He = e : He = He.next = e;
      }
      return He;
    }
    function Au() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function bn(e) {
      var t = gn;
      return gn += 1, Ma === null && (Ma = []), e = lr(Ma, e, t), t = P, (He === null ? t.memoizedState : He.next) === null && (t = t.alternate, w.H = t === null || t.memoizedState === null ? Kr : Tc), e;
    }
    function zu(e) {
      if (e !== null && typeof e == "object") {
        if (typeof e.then == "function") return bn(e);
        if (e.$$typeof === te) return Ke(e);
      }
      throw Error(r(438, String(e)));
    }
    function bc(e) {
      var t = null, l = P.updateQueue;
      if (l !== null && (t = l.memoCache), t == null) {
        var a = P.alternate;
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
      }), l === null && (l = Au(), P.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = Ct;
      return t.index++, l;
    }
    function tl(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Eu(e) {
      var t = Ue();
      return _c(t, ve, e);
    }
    function _c(e, t, l) {
      var a = e.queue;
      if (a === null) throw Error(r(311));
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
        var o = i = null, m = null, N = t, T = false;
        do {
          var U = N.lane & -536870913;
          if (U !== N.lane ? (ue & U) === U : (el & U) === U) {
            var j = N.revertLane;
            if (j === 0) m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), U === Na && (T = true);
            else if ((el & j) === j) {
              N = N.next, j === Na && (T = true);
              continue;
            } else U = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, m === null ? (o = m = U, i = u) : m = m.next = U, P.lanes |= j, Tl |= j;
            U = N.action, Pl && l(u, U), u = N.hasEagerState ? N.eagerState : l(u, U);
          } else j = {
            lane: U,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, m === null ? (o = m = j, i = u) : m = m.next = j, P.lanes |= U, Tl |= U;
          N = N.next;
        } while (N !== null && N !== t);
        if (m === null ? i = u : m.next = o, !mt(u, e.memoizedState) && (Be = true, T && (l = ja, l !== null))) throw l;
        e.memoizedState = u, e.baseState = i, e.baseQueue = m, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        e.memoizedState,
        a.dispatch
      ];
    }
    function pc(e) {
      var t = Ue(), l = t.queue;
      if (l === null) throw Error(r(311));
      l.lastRenderedReducer = e;
      var a = l.dispatch, n = l.pending, u = t.memoizedState;
      if (n !== null) {
        l.pending = null;
        var i = n = n.next;
        do
          u = e(u, i.action), i = i.next;
        while (i !== n);
        mt(u, t.memoizedState) || (Be = true), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function mr(e, t, l) {
      var a = P, n = Ue(), u = se;
      if (u) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else l = t();
      var i = !mt((ve || n).memoizedState, l);
      if (i && (n.memoizedState = l, Be = true), n = n.queue, Sc(gr.bind(null, a, n, e), [
        e
      ]), n.getSnapshot !== t || i || He !== null && He.memoizedState.tag & 1) {
        if (a.flags |= 2048, wa(9, {
          destroy: void 0
        }, yr.bind(null, a, n, l, t), null), je === null) throw Error(r(349));
        u || (el & 127) !== 0 || hr(a, t, l);
      }
      return l;
    }
    function hr(e, t, l) {
      e.flags |= 16384, e = {
        getSnapshot: t,
        value: l
      }, t = P.updateQueue, t === null ? (t = Au(), P.updateQueue = t, t.stores = [
        e
      ]) : (l = t.stores, l === null ? t.stores = [
        e
      ] : l.push(e));
    }
    function yr(e, t, l, a) {
      t.value = l, t.getSnapshot = a, br(t) && _r(e);
    }
    function gr(e, t, l) {
      return l(function() {
        br(t) && _r(e);
      });
    }
    function br(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var l = t();
        return !mt(e, l);
      } catch {
        return true;
      }
    }
    function _r(e) {
      var t = Zl(e, 2);
      t !== null && st(t, e, 2);
    }
    function vc(e) {
      var t = tt();
      if (typeof e == "function") {
        var l = e;
        if (e = l(), Pl) {
          hl(true);
          try {
            l();
          } finally {
            hl(false);
          }
        }
      }
      return t.memoizedState = t.baseState = e, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: tl,
        lastRenderedState: e
      }, t;
    }
    function pr(e, t, l, a) {
      return e.baseState = l, _c(e, ve, typeof a == "function" ? a : tl);
    }
    function P0(e, t, l, a, n) {
      if (wu(e)) throw Error(r(485));
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
        w.T !== null ? l(true) : u.isTransition = false, a(u), l = t.pending, l === null ? (u.next = t.pending = u, vr(t, u)) : (u.next = l.next, t.pending = l.next = u);
      }
    }
    function vr(e, t) {
      var l = t.action, a = t.payload, n = e.state;
      if (t.isTransition) {
        var u = w.T, i = {};
        w.T = i;
        try {
          var o = l(n, a), m = w.S;
          m !== null && m(i, o), xr(e, t, o);
        } catch (N) {
          xc(e, t, N);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), w.T = u;
        }
      } else try {
        u = l(n, a), xr(e, t, u);
      } catch (N) {
        xc(e, t, N);
      }
    }
    function xr(e, t, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        Sr(e, t, a);
      }, function(a) {
        return xc(e, t, a);
      }) : Sr(e, t, l);
    }
    function Sr(e, t, l) {
      t.status = "fulfilled", t.value = l, Nr(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, vr(e, l)));
    }
    function xc(e, t, l) {
      var a = e.pending;
      if (e.pending = null, a !== null) {
        a = a.next;
        do
          t.status = "rejected", t.reason = l, Nr(t), t = t.next;
        while (t !== a);
      }
      e.action = null;
    }
    function Nr(e) {
      e = e.listeners;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
    function jr(e, t) {
      return t;
    }
    function Ar(e, t) {
      if (se) {
        var l = je.formState;
        if (l !== null) {
          e: {
            var a = P;
            if (se) {
              if (ze) {
                t: {
                  for (var n = ze, u = wt; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break t;
                    }
                    if (n = Dt(n.nextSibling), n === null) {
                      n = null;
                      break t;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  ze = Dt(n.nextSibling), a = n.data === "F!";
                  break e;
                }
              }
              pl(a);
            }
            a = false;
          }
          a && (t = l[0]);
        }
      }
      return l = tt(), l.memoizedState = l.baseState = t, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: jr,
        lastRenderedState: t
      }, l.queue = a, l = Zr.bind(null, P, a), a.dispatch = l, a = vc(false), u = Ec.bind(null, P, false, a.queue), a = tt(), n = {
        state: t,
        dispatch: null,
        action: e,
        pending: null
      }, a.queue = n, l = P0.bind(null, P, n, u, l), n.dispatch = l, a.memoizedState = e, [
        t,
        l,
        false
      ];
    }
    function zr(e) {
      var t = Ue();
      return Er(t, ve, e);
    }
    function Er(e, t, l) {
      if (t = _c(e, t, jr)[0], e = Eu(tl)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var a = bn(t);
      } catch (i) {
        throw i === Aa ? bu : i;
      }
      else a = t;
      t = Ue();
      var n = t.queue, u = n.dispatch;
      return l !== t.memoizedState && (P.flags |= 2048, wa(9, {
        destroy: void 0
      }, eh.bind(null, n, l), null)), [
        a,
        u,
        e
      ];
    }
    function eh(e, t) {
      e.action = t;
    }
    function Tr(e) {
      var t = Ue(), l = ve;
      if (l !== null) return Er(t, l, e);
      Ue(), t = t.memoizedState, l = Ue();
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
      }, t = P.updateQueue, t === null && (t = Au(), P.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
    }
    function Mr() {
      return Ue().memoizedState;
    }
    function Tu(e, t, l, a) {
      var n = tt();
      P.flags |= e, n.memoizedState = wa(1 | t, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function Mu(e, t, l, a) {
      var n = Ue();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      ve !== null && a !== null && dc(a, ve.memoizedState.deps) ? n.memoizedState = wa(t, u, l, a) : (P.flags |= e, n.memoizedState = wa(1 | t, u, l, a));
    }
    function wr(e, t) {
      Tu(8390656, 8, e, t);
    }
    function Sc(e, t) {
      Mu(2048, 8, e, t);
    }
    function th(e) {
      P.flags |= 4;
      var t = P.updateQueue;
      if (t === null) t = Au(), P.updateQueue = t, t.events = [
        e
      ];
      else {
        var l = t.events;
        l === null ? t.events = [
          e
        ] : l.push(e);
      }
    }
    function Or(e) {
      var t = Ue().memoizedState;
      return th({
        ref: t,
        nextImpl: e
      }), function() {
        if ((me & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function Dr(e, t) {
      return Mu(4, 2, e, t);
    }
    function Ur(e, t) {
      return Mu(4, 4, e, t);
    }
    function Cr(e, t) {
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
    function Rr(e, t, l) {
      l = l != null ? l.concat([
        e
      ]) : null, Mu(4, 4, Cr.bind(null, t, e), l);
    }
    function Nc() {
    }
    function Hr(e, t) {
      var l = Ue();
      t = t === void 0 ? null : t;
      var a = l.memoizedState;
      return t !== null && dc(t, a[1]) ? a[0] : (l.memoizedState = [
        e,
        t
      ], e);
    }
    function Br(e, t) {
      var l = Ue();
      t = t === void 0 ? null : t;
      var a = l.memoizedState;
      if (t !== null && dc(t, a[1])) return a[0];
      if (a = e(), Pl) {
        hl(true);
        try {
          e();
        } finally {
          hl(false);
        }
      }
      return l.memoizedState = [
        a,
        t
      ], a;
    }
    function jc(e, t, l) {
      return l === void 0 || (el & 1073741824) !== 0 && (ue & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = Yo(), P.lanes |= e, Tl |= e, l);
    }
    function qr(e, t, l, a) {
      return mt(l, t) ? l : Ea.current !== null ? (e = jc(e, l, a), mt(e, t) || (Be = true), e) : (el & 42) === 0 || (el & 1073741824) !== 0 && (ue & 261930) === 0 ? (Be = true, e.memoizedState = l) : (e = Yo(), P.lanes |= e, Tl |= e, t);
    }
    function Yr(e, t, l, a, n) {
      var u = B.p;
      B.p = u !== 0 && 8 > u ? u : 8;
      var i = w.T, o = {};
      w.T = o, Ec(e, false, t, l);
      try {
        var m = n(), N = w.S;
        if (N !== null && N(o, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var T = $0(m, a);
          _n(e, t, T, pt(e));
        } else _n(e, t, a, pt(e));
      } catch (U) {
        _n(e, t, {
          then: function() {
          },
          status: "rejected",
          reason: U
        }, pt());
      } finally {
        B.p = u, i !== null && o.types !== null && (i.types = o.types), w.T = i;
      }
    }
    function lh() {
    }
    function Ac(e, t, l, a) {
      if (e.tag !== 5) throw Error(r(476));
      var n = Lr(e).queue;
      Yr(e, n, t, V, l === null ? lh : function() {
        return Gr(e), l(a);
      });
    }
    function Lr(e) {
      var t = e.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: V,
        baseState: V,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: tl,
          lastRenderedState: V
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
          lastRenderedReducer: tl,
          lastRenderedState: l
        },
        next: null
      }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
    }
    function Gr(e) {
      var t = Lr(e);
      t.next === null && (t = e.alternate.memoizedState), _n(e, t.next.queue, {}, pt());
    }
    function zc() {
      return Ke(Rn);
    }
    function Xr() {
      return Ue().memoizedState;
    }
    function Qr() {
      return Ue().memoizedState;
    }
    function ah(e) {
      for (var t = e.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var l = pt();
            e = Sl(l);
            var a = Nl(t, e, l);
            a !== null && (st(a, t, l), mn(a, t, l)), t = {
              cache: tc()
            }, e.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function nh(e, t, l) {
      var a = pt();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, wu(e) ? Vr(t, l) : (l = Zi(e, t, l, a), l !== null && (st(l, e, a), kr(l, t, a)));
    }
    function Zr(e, t, l) {
      var a = pt();
      _n(e, t, l, a);
    }
    function _n(e, t, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (wu(e)) Vr(t, n);
      else {
        var u = e.alternate;
        if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
          var i = t.lastRenderedState, o = u(i, l);
          if (n.hasEagerState = true, n.eagerState = o, mt(o, i)) return ru(e, t, n, 0), je === null && fu(), false;
        } catch {
        }
        if (l = Zi(e, t, n, a), l !== null) return st(l, e, a), kr(l, t, a), true;
      }
      return false;
    }
    function Ec(e, t, l, a) {
      if (a = {
        lane: 2,
        revertLane: us(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, wu(e)) {
        if (t) throw Error(r(479));
      } else t = Zi(e, l, a, 2), t !== null && st(t, e, 2);
    }
    function wu(e) {
      var t = e.alternate;
      return e === P || t !== null && t === P;
    }
    function Vr(e, t) {
      Ta = Nu = true;
      var l = e.pending;
      l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
    }
    function kr(e, t, l) {
      if ((l & 4194048) !== 0) {
        var a = t.lanes;
        a &= e.pendingLanes, l |= a, t.lanes = l, $s(e, l);
      }
    }
    var pn = {
      readContext: Ke,
      use: zu,
      useCallback: we,
      useContext: we,
      useEffect: we,
      useImperativeHandle: we,
      useLayoutEffect: we,
      useInsertionEffect: we,
      useMemo: we,
      useReducer: we,
      useRef: we,
      useState: we,
      useDebugValue: we,
      useDeferredValue: we,
      useTransition: we,
      useSyncExternalStore: we,
      useId: we,
      useHostTransitionStatus: we,
      useFormState: we,
      useActionState: we,
      useOptimistic: we,
      useMemoCache: we,
      useCacheRefresh: we
    };
    pn.useEffectEvent = we;
    var Kr = {
      readContext: Ke,
      use: zu,
      useCallback: function(e, t) {
        return tt().memoizedState = [
          e,
          t === void 0 ? null : t
        ], e;
      },
      useContext: Ke,
      useEffect: wr,
      useImperativeHandle: function(e, t, l) {
        l = l != null ? l.concat([
          e
        ]) : null, Tu(4194308, 4, Cr.bind(null, t, e), l);
      },
      useLayoutEffect: function(e, t) {
        return Tu(4194308, 4, e, t);
      },
      useInsertionEffect: function(e, t) {
        Tu(4, 2, e, t);
      },
      useMemo: function(e, t) {
        var l = tt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Pl) {
          hl(true);
          try {
            e();
          } finally {
            hl(false);
          }
        }
        return l.memoizedState = [
          a,
          t
        ], a;
      },
      useReducer: function(e, t, l) {
        var a = tt();
        if (l !== void 0) {
          var n = l(t);
          if (Pl) {
            hl(true);
            try {
              l(t);
            } finally {
              hl(false);
            }
          }
        } else n = t;
        return a.memoizedState = a.baseState = n, e = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n
        }, a.queue = e, e = e.dispatch = nh.bind(null, P, e), [
          a.memoizedState,
          e
        ];
      },
      useRef: function(e) {
        var t = tt();
        return e = {
          current: e
        }, t.memoizedState = e;
      },
      useState: function(e) {
        e = vc(e);
        var t = e.queue, l = Zr.bind(null, P, t);
        return t.dispatch = l, [
          e.memoizedState,
          l
        ];
      },
      useDebugValue: Nc,
      useDeferredValue: function(e, t) {
        var l = tt();
        return jc(l, e, t);
      },
      useTransition: function() {
        var e = vc(false);
        return e = Yr.bind(null, P, e.queue, true, false), tt().memoizedState = e, [
          false,
          e
        ];
      },
      useSyncExternalStore: function(e, t, l) {
        var a = P, n = tt();
        if (se) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (l = t(), je === null) throw Error(r(349));
          (ue & 127) !== 0 || hr(a, t, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: t
        };
        return n.queue = u, wr(gr.bind(null, a, u, e), [
          e
        ]), a.flags |= 2048, wa(9, {
          destroy: void 0
        }, yr.bind(null, a, u, l, t), null), l;
      },
      useId: function() {
        var e = tt(), t = je.identifierPrefix;
        if (se) {
          var l = Lt, a = Yt;
          l = (a & ~(1 << 32 - dt(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = ju++, 0 < l && (t += "H" + l.toString(32)), t += "_";
        } else l = F0++, t = "_" + t + "r_" + l.toString(32) + "_";
        return e.memoizedState = t;
      },
      useHostTransitionStatus: zc,
      useFormState: Ar,
      useActionState: Ar,
      useOptimistic: function(e) {
        var t = tt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = l, t = Ec.bind(null, P, true, l), l.dispatch = t, [
          e,
          t
        ];
      },
      useMemoCache: bc,
      useCacheRefresh: function() {
        return tt().memoizedState = ah.bind(null, P);
      },
      useEffectEvent: function(e) {
        var t = tt(), l = {
          impl: e
        };
        return t.memoizedState = l, function() {
          if ((me & 2) !== 0) throw Error(r(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, Tc = {
      readContext: Ke,
      use: zu,
      useCallback: Hr,
      useContext: Ke,
      useEffect: Sc,
      useImperativeHandle: Rr,
      useInsertionEffect: Dr,
      useLayoutEffect: Ur,
      useMemo: Br,
      useReducer: Eu,
      useRef: Mr,
      useState: function() {
        return Eu(tl);
      },
      useDebugValue: Nc,
      useDeferredValue: function(e, t) {
        var l = Ue();
        return qr(l, ve.memoizedState, e, t);
      },
      useTransition: function() {
        var e = Eu(tl)[0], t = Ue().memoizedState;
        return [
          typeof e == "boolean" ? e : bn(e),
          t
        ];
      },
      useSyncExternalStore: mr,
      useId: Xr,
      useHostTransitionStatus: zc,
      useFormState: zr,
      useActionState: zr,
      useOptimistic: function(e, t) {
        var l = Ue();
        return pr(l, ve, e, t);
      },
      useMemoCache: bc,
      useCacheRefresh: Qr
    };
    Tc.useEffectEvent = Or;
    var Jr = {
      readContext: Ke,
      use: zu,
      useCallback: Hr,
      useContext: Ke,
      useEffect: Sc,
      useImperativeHandle: Rr,
      useInsertionEffect: Dr,
      useLayoutEffect: Ur,
      useMemo: Br,
      useReducer: pc,
      useRef: Mr,
      useState: function() {
        return pc(tl);
      },
      useDebugValue: Nc,
      useDeferredValue: function(e, t) {
        var l = Ue();
        return ve === null ? jc(l, e, t) : qr(l, ve.memoizedState, e, t);
      },
      useTransition: function() {
        var e = pc(tl)[0], t = Ue().memoizedState;
        return [
          typeof e == "boolean" ? e : bn(e),
          t
        ];
      },
      useSyncExternalStore: mr,
      useId: Xr,
      useHostTransitionStatus: zc,
      useFormState: Tr,
      useActionState: Tr,
      useOptimistic: function(e, t) {
        var l = Ue();
        return ve !== null ? pr(l, ve, e, t) : (l.baseState = e, [
          e,
          l.queue.dispatch
        ]);
      },
      useMemoCache: bc,
      useCacheRefresh: Qr
    };
    Jr.useEffectEvent = Or;
    function Mc(e, t, l, a) {
      t = e.memoizedState, l = l(a, t), l = l == null ? t : R({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
    }
    var wc = {
      enqueueSetState: function(e, t, l) {
        e = e._reactInternals;
        var a = pt(), n = Sl(a);
        n.payload = t, l != null && (n.callback = l), t = Nl(e, n, a), t !== null && (st(t, e, a), mn(t, e, a));
      },
      enqueueReplaceState: function(e, t, l) {
        e = e._reactInternals;
        var a = pt(), n = Sl(a);
        n.tag = 1, n.payload = t, l != null && (n.callback = l), t = Nl(e, n, a), t !== null && (st(t, e, a), mn(t, e, a));
      },
      enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var l = pt(), a = Sl(l);
        a.tag = 2, t != null && (a.callback = t), t = Nl(e, a, l), t !== null && (st(t, e, l), mn(t, e, l));
      }
    };
    function Wr(e, t, l, a, n, u, i) {
      return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, i) : t.prototype && t.prototype.isPureReactComponent ? !nn(l, a) || !nn(n, u) : true;
    }
    function $r(e, t, l, a) {
      e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && wc.enqueueReplaceState(t, t.state, null);
    }
    function ea(e, t) {
      var l = t;
      if ("ref" in t) {
        l = {};
        for (var a in t) a !== "ref" && (l[a] = t[a]);
      }
      if (e = e.defaultProps) {
        l === t && (l = R({}, l));
        for (var n in e) l[n] === void 0 && (l[n] = e[n]);
      }
      return l;
    }
    function Fr(e) {
      su(e);
    }
    function Ir(e) {
      console.error(e);
    }
    function Pr(e) {
      su(e);
    }
    function Ou(e, t) {
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
    function eo(e, t, l) {
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
    function Oc(e, t, l) {
      return l = Sl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        Ou(e, t);
      }, l;
    }
    function to(e) {
      return e = Sl(e), e.tag = 3, e;
    }
    function lo(e, t, l, a) {
      var n = l.type.getDerivedStateFromError;
      if (typeof n == "function") {
        var u = a.value;
        e.payload = function() {
          return n(u);
        }, e.callback = function() {
          eo(t, l, a);
        };
      }
      var i = l.stateNode;
      i !== null && typeof i.componentDidCatch == "function" && (e.callback = function() {
        eo(t, l, a), typeof n != "function" && (Ml === null ? Ml = /* @__PURE__ */ new Set([
          this
        ]) : Ml.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : ""
        });
      });
    }
    function uh(e, t, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (t = l.alternate, t !== null && Sa(t, l, n, true), l = yt.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Ot === null ? Qu() : l.alternate === null && Oe === 0 && (Oe = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === _u ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : t.add(a), ls(e, a, n)), false;
            case 22:
              return l.flags |= 65536, a === _u ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), ls(e, a, n)), false;
          }
          throw Error(r(435, l.tag));
        }
        return ls(e, a, n), Qu(), false;
      }
      if (se) return t = yt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = n, a !== $i && (e = Error(r(422), {
        cause: a
      }), sn(Et(e, l)))) : (a !== $i && (t = Error(r(423), {
        cause: a
      }), sn(Et(t, l))), e = e.current.alternate, e.flags |= 65536, n &= -n, e.lanes |= n, a = Et(a, l), n = Oc(e.stateNode, a, n), cc(e, n), Oe !== 4 && (Oe = 2)), false;
      var u = Error(r(520), {
        cause: a
      });
      if (u = Et(u, l), En === null ? En = [
        u
      ] : En.push(u), Oe !== 4 && (Oe = 2), t === null) return true;
      a = Et(a, l), l = t;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, e = n & -n, l.lanes |= e, e = Oc(l.stateNode, a, e), cc(l, e), false;
          case 1:
            if (t = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ml === null || !Ml.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = to(n), lo(n, e, l, a), cc(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Dc = Error(r(461)), Be = false;
    function Je(e, t, l, a) {
      t.child = e === null ? ir(t, null, l, a) : Il(t, e.child, l, a);
    }
    function ao(e, t, l, a, n) {
      l = l.render;
      var u = t.ref;
      if ("ref" in a) {
        var i = {};
        for (var o in a) o !== "ref" && (i[o] = a[o]);
      } else i = a;
      return Jl(t), a = mc(e, t, l, i, u, n), o = hc(), e !== null && !Be ? (yc(e, t, n), ll(e, t, n)) : (se && o && Ji(t), t.flags |= 1, Je(e, t, a, n), t.child);
    }
    function no(e, t, l, a, n) {
      if (e === null) {
        var u = l.type;
        return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = u, uo(e, t, u, a, n)) : (e = du(l.type, null, a, t, t.mode, n), e.ref = t.ref, e.return = t, t.child = e);
      }
      if (u = e.child, !Lc(e, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : nn, l(i, a) && e.ref === t.ref) return ll(e, t, n);
      }
      return t.flags |= 1, e = $t(u, a), e.ref = t.ref, e.return = t, t.child = e;
    }
    function uo(e, t, l, a, n) {
      if (e !== null) {
        var u = e.memoizedProps;
        if (nn(u, a) && e.ref === t.ref) if (Be = false, t.pendingProps = a = u, Lc(e, n)) (e.flags & 131072) !== 0 && (Be = true);
        else return t.lanes = e.lanes, ll(e, t, n);
      }
      return Uc(e, t, l, a, n);
    }
    function io(e, t, l, a) {
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
          return co(e, t, u, l, a);
        }
        if ((l & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, e !== null && gu(t, u !== null ? u.cachePool : null), u !== null ? fr(t, u) : fc(), rr(t);
        else return a = t.lanes = 536870912, co(e, t, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (gu(t, u.cachePool), fr(t, u), Al(), t.memoizedState = null) : (e !== null && gu(t, null), fc(), Al());
      return Je(e, t, n, l), t.child;
    }
    function vn(e, t) {
      return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function co(e, t, l, a, n) {
      var u = ac();
      return u = u === null ? null : {
        parent: Re._currentValue,
        pool: u
      }, t.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, e !== null && gu(t, null), fc(), rr(t), e !== null && Sa(e, t, a, true), t.childLanes = n, null;
    }
    function Du(e, t) {
      return t = Cu({
        mode: t.mode,
        children: t.children
      }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function so(e, t, l) {
      return Il(t, e.child, null, l), e = Du(t, t.pendingProps), e.flags |= 2, gt(t), t.memoizedState = null, e;
    }
    function ih(e, t, l) {
      var a = t.pendingProps, n = (t.flags & 128) !== 0;
      if (t.flags &= -129, e === null) {
        if (se) {
          if (a.mode === "hidden") return e = Du(t, a), t.lanes = 536870912, vn(null, e);
          if (oc(t), (e = ze) ? (e = xd(e, wt), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: bl !== null ? {
              id: Yt,
              overflow: Lt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Vf(e), l.return = t, t.child = l, ke = t, ze = null)) : e = null, e === null) throw pl(t);
          return t.lanes = 536870912, null;
        }
        return Du(t, a);
      }
      var u = e.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (oc(t), n) if (t.flags & 256) t.flags &= -257, t = so(e, t, l);
        else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
        else throw Error(r(558));
        else if (Be || Sa(e, t, l, false), n = (l & e.childLanes) !== 0, Be || n) {
          if (a = je, a !== null && (i = Fs(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Zl(e, i), st(a, e, i), Dc;
          Qu(), t = so(e, t, l);
        } else e = u.treeContext, ze = Dt(i.nextSibling), ke = t, se = true, _l = null, wt = false, e !== null && Jf(t, e), t = Du(t, a), t.flags |= 4096;
        return t;
      }
      return e = $t(e.child, {
        mode: a.mode,
        children: a.children
      }), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function Uu(e, t) {
      var l = t.ref;
      if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(r(284));
        (e === null || e.ref !== l) && (t.flags |= 4194816);
      }
    }
    function Uc(e, t, l, a, n) {
      return Jl(t), l = mc(e, t, l, a, void 0, n), a = hc(), e !== null && !Be ? (yc(e, t, n), ll(e, t, n)) : (se && a && Ji(t), t.flags |= 1, Je(e, t, l, n), t.child);
    }
    function fo(e, t, l, a, n, u) {
      return Jl(t), t.updateQueue = null, l = dr(t, a, l, n), or(e), a = hc(), e !== null && !Be ? (yc(e, t, u), ll(e, t, u)) : (se && a && Ji(t), t.flags |= 1, Je(e, t, l, u), t.child);
    }
    function ro(e, t, l, a, n) {
      if (Jl(t), t.stateNode === null) {
        var u = _a, i = l.contextType;
        typeof i == "object" && i !== null && (u = Ke(i)), u = new l(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, uc(t), i = l.contextType, u.context = typeof i == "object" && i !== null ? Ke(i) : _a, u.state = t.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Mc(t, l, i, a), u.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && wc.enqueueReplaceState(u, u.state, null), yn(t, a, u, n), hn(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = true;
      } else if (e === null) {
        u = t.stateNode;
        var o = t.memoizedProps, m = ea(l, o);
        u.props = m;
        var N = u.context, T = l.contextType;
        i = _a, typeof T == "object" && T !== null && (i = Ke(T));
        var U = l.getDerivedStateFromProps;
        T = typeof U == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = t.pendingProps !== o, T || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || N !== i) && $r(t, u, a, i), xl = false;
        var j = t.memoizedState;
        u.state = j, yn(t, a, u, n), hn(), N = t.memoizedState, o || j !== N || xl ? (typeof U == "function" && (Mc(t, l, U, a), N = t.memoizedState), (m = xl || Wr(t, l, m, a, j, N, i)) ? (T || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), u.props = a, u.state = N, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = false);
      } else {
        u = t.stateNode, ic(e, t), i = t.memoizedProps, T = ea(l, i), u.props = T, U = t.pendingProps, j = u.context, N = l.contextType, m = _a, typeof N == "object" && N !== null && (m = Ke(N)), o = l.getDerivedStateFromProps, (N = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== U || j !== m) && $r(t, u, a, m), xl = false, j = t.memoizedState, u.state = j, yn(t, a, u, n), hn();
        var z = t.memoizedState;
        i !== U || j !== z || xl || e !== null && e.dependencies !== null && hu(e.dependencies) ? (typeof o == "function" && (Mc(t, l, o, a), z = t.memoizedState), (T = xl || Wr(t, l, T, a, j, z, m) || e !== null && e.dependencies !== null && hu(e.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, m)), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = z), u.props = a, u.state = z, u.context = m, a = T) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && j === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && j === e.memoizedState || (t.flags |= 1024), a = false);
      }
      return u = a, Uu(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Il(t, e.child, null, n), t.child = Il(t, null, l, n)) : Je(e, t, l, n), t.memoizedState = u.state, e = t.child) : e = ll(e, t, n), e;
    }
    function oo(e, t, l, a) {
      return kl(), t.flags |= 256, Je(e, t, l, a), t.child;
    }
    var Cc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Rc(e) {
      return {
        baseLanes: e,
        cachePool: er()
      };
    }
    function Hc(e, t, l) {
      return e = e !== null ? e.childLanes & ~l : 0, t && (e |= _t), e;
    }
    function mo(e, t, l) {
      var a = t.pendingProps, n = false, u = (t.flags & 128) !== 0, i;
      if ((i = u) || (i = e !== null && e.memoizedState === null ? false : (De.current & 2) !== 0), i && (n = true, t.flags &= -129), i = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
        if (se) {
          if (n ? jl(t) : Al(), (e = ze) ? (e = xd(e, wt), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
            dehydrated: e,
            treeContext: bl !== null ? {
              id: Yt,
              overflow: Lt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Vf(e), l.return = t, t.child = l, ke = t, ze = null)) : e = null, e === null) throw pl(t);
          return _s(e) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var o = a.children;
        return a = a.fallback, n ? (Al(), n = t.mode, o = Cu({
          mode: "hidden",
          children: o
        }, n), a = Vl(a, n, l, null), o.return = t, a.return = t, o.sibling = a, t.child = o, a = t.child, a.memoizedState = Rc(l), a.childLanes = Hc(e, i, l), t.memoizedState = Cc, vn(null, a)) : (jl(t), Bc(t, o));
      }
      var m = e.memoizedState;
      if (m !== null && (o = m.dehydrated, o !== null)) {
        if (u) t.flags & 256 ? (jl(t), t.flags &= -257, t = qc(e, t, l)) : t.memoizedState !== null ? (Al(), t.child = e.child, t.flags |= 128, t = null) : (Al(), o = a.fallback, n = t.mode, a = Cu({
          mode: "visible",
          children: a.children
        }, n), o = Vl(o, n, l, null), o.flags |= 2, a.return = t, o.return = t, a.sibling = o, t.child = a, Il(t, e.child, null, l), a = t.child, a.memoizedState = Rc(l), a.childLanes = Hc(e, i, l), t.memoizedState = Cc, t = vn(null, a));
        else if (jl(t), _s(o)) {
          if (i = o.nextSibling && o.nextSibling.dataset, i) var N = i.dgst;
          i = N, a = Error(r(419)), a.stack = "", a.digest = i, sn({
            value: a,
            source: null,
            stack: null
          }), t = qc(e, t, l);
        } else if (Be || Sa(e, t, l, false), i = (l & e.childLanes) !== 0, Be || i) {
          if (i = je, i !== null && (a = Fs(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Zl(e, a), st(i, e, a), Dc;
          bs(o) || Qu(), t = qc(e, t, l);
        } else bs(o) ? (t.flags |= 192, t.child = e.child, t = null) : (e = m.treeContext, ze = Dt(o.nextSibling), ke = t, se = true, _l = null, wt = false, e !== null && Jf(t, e), t = Bc(t, a.children), t.flags |= 4096);
        return t;
      }
      return n ? (Al(), o = a.fallback, n = t.mode, m = e.child, N = m.sibling, a = $t(m, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = m.subtreeFlags & 65011712, N !== null ? o = $t(N, o) : (o = Vl(o, n, l, null), o.flags |= 2), o.return = t, a.return = t, a.sibling = o, t.child = a, vn(null, a), a = t.child, o = e.child.memoizedState, o === null ? o = Rc(l) : (n = o.cachePool, n !== null ? (m = Re._currentValue, n = n.parent !== m ? {
        parent: m,
        pool: m
      } : n) : n = er(), o = {
        baseLanes: o.baseLanes | l,
        cachePool: n
      }), a.memoizedState = o, a.childLanes = Hc(e, i, l), t.memoizedState = Cc, vn(e.child, a)) : (jl(t), l = e.child, e = l.sibling, l = $t(l, {
        mode: "visible",
        children: a.children
      }), l.return = t, l.sibling = null, e !== null && (i = t.deletions, i === null ? (t.deletions = [
        e
      ], t.flags |= 16) : i.push(e)), t.child = l, t.memoizedState = null, l);
    }
    function Bc(e, t) {
      return t = Cu({
        mode: "visible",
        children: t
      }, e.mode), t.return = e, e.child = t;
    }
    function Cu(e, t) {
      return e = ht(22, e, null, t), e.lanes = 0, e;
    }
    function qc(e, t, l) {
      return Il(t, e.child, null, l), e = Bc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
    }
    function ho(e, t, l) {
      e.lanes |= t;
      var a = e.alternate;
      a !== null && (a.lanes |= t), Pi(e.return, t, l);
    }
    function Yc(e, t, l, a, n, u) {
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
    function yo(e, t, l) {
      var a = t.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = De.current, o = (i & 2) !== 0;
      if (o ? (i = i & 1 | 2, t.flags |= 128) : i &= 1, E(De, i), Je(e, t, a, l), a = se ? cn : 0, !o && e !== null && (e.flags & 128) !== 0) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ho(e, l, t);
        else if (e.tag === 19) ho(e, l, t);
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
          for (l = t.child, n = null; l !== null; ) e = l.alternate, e !== null && Su(e) === null && (n = l), l = l.sibling;
          l = n, l === null ? (n = t.child, t.child = null) : (n = l.sibling, l.sibling = null), Yc(t, false, n, l, u, a);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (l = null, n = t.child, t.child = null; n !== null; ) {
            if (e = n.alternate, e !== null && Su(e) === null) {
              t.child = n;
              break;
            }
            e = n.sibling, n.sibling = l, l = n, n = e;
          }
          Yc(t, true, l, null, u, a);
          break;
        case "together":
          Yc(t, false, null, null, void 0, a);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function ll(e, t, l) {
      if (e !== null && (t.dependencies = e.dependencies), Tl |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
        if (Sa(e, t, l, false), (l & t.childLanes) === 0) return null;
      } else return null;
      if (e !== null && t.child !== e.child) throw Error(r(153));
      if (t.child !== null) {
        for (e = t.child, l = $t(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null; ) e = e.sibling, l = l.sibling = $t(e, e.pendingProps), l.return = t;
        l.sibling = null;
      }
      return t.child;
    }
    function Lc(e, t) {
      return (e.lanes & t) !== 0 ? true : (e = e.dependencies, !!(e !== null && hu(e)));
    }
    function ch(e, t, l) {
      switch (t.tag) {
        case 3:
          Ge(t, t.stateNode.containerInfo), vl(t, Re, e.memoizedState.cache), kl();
          break;
        case 27:
        case 5:
          dl(t);
          break;
        case 4:
          Ge(t, t.stateNode.containerInfo);
          break;
        case 10:
          vl(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, oc(t), null;
          break;
        case 13:
          var a = t.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (jl(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? mo(e, t, l) : (jl(t), e = ll(e, t, l), e !== null ? e.sibling : null);
          jl(t);
          break;
        case 19:
          var n = (e.flags & 128) !== 0;
          if (a = (l & t.childLanes) !== 0, a || (Sa(e, t, l, false), a = (l & t.childLanes) !== 0), n) {
            if (a) return yo(e, t, l);
            t.flags |= 128;
          }
          if (n = t.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), E(De, De.current), a) break;
          return null;
        case 22:
          return t.lanes = 0, io(e, t, l, t.pendingProps);
        case 24:
          vl(t, Re, e.memoizedState.cache);
      }
      return ll(e, t, l);
    }
    function go(e, t, l) {
      if (e !== null) if (e.memoizedProps !== t.pendingProps) Be = true;
      else {
        if (!Lc(e, l) && (t.flags & 128) === 0) return Be = false, ch(e, t, l);
        Be = (e.flags & 131072) !== 0;
      }
      else Be = false, se && (t.flags & 1048576) !== 0 && Kf(t, cn, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          e: {
            var a = t.pendingProps;
            if (e = $l(t.elementType), t.type = e, typeof e == "function") Vi(e) ? (a = ea(e, a), t.tag = 1, t = ro(null, t, e, a, l)) : (t.tag = 0, t = Uc(null, t, e, a, l));
            else {
              if (e != null) {
                var n = e.$$typeof;
                if (n === Q) {
                  t.tag = 11, t = ao(null, t, e, a, l);
                  break e;
                } else if (n === F) {
                  t.tag = 14, t = no(null, t, e, a, l);
                  break e;
                }
              }
              throw t = qt(e) || e, Error(r(306, t, ""));
            }
          }
          return t;
        case 0:
          return Uc(e, t, t.type, t.pendingProps, l);
        case 1:
          return a = t.type, n = ea(a, t.pendingProps), ro(e, t, a, n, l);
        case 3:
          e: {
            if (Ge(t, t.stateNode.containerInfo), e === null) throw Error(r(387));
            a = t.pendingProps;
            var u = t.memoizedState;
            n = u.element, ic(e, t), yn(t, a, null, l);
            var i = t.memoizedState;
            if (a = i.cache, vl(t, Re, a), a !== u.cache && ec(t, [
              Re
            ], l, true), hn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = oo(e, t, a, l);
              break e;
            } else if (a !== n) {
              n = Et(Error(r(424)), t), sn(n), t = oo(e, t, a, l);
              break e;
            } else for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ze = Dt(e.firstChild), ke = t, se = true, _l = null, wt = true, l = ir(t, null, a, l), t.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (kl(), a === n) {
                t = ll(e, t, l);
                break e;
              }
              Je(e, t, a, l);
            }
            t = t.child;
          }
          return t;
        case 26:
          return Uu(e, t), e === null ? (l = Ed(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : se || (l = t.type, e = t.pendingProps, a = $u(k.current).createElement(l), a[Ve] = t, a[lt] = e, We(a, l, e), Xe(a), t.stateNode = a) : t.memoizedState = Ed(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
        case 27:
          return dl(t), e === null && se && (a = t.stateNode = jd(t.type, t.pendingProps, k.current), ke = t, wt = true, n = ze, Ul(t.type) ? (ps = n, ze = Dt(a.firstChild)) : ze = n), Je(e, t, t.pendingProps.children, l), Uu(e, t), e === null && (t.flags |= 4194304), t.child;
        case 5:
          return e === null && se && ((n = a = ze) && (a = Bh(a, t.type, t.pendingProps, wt), a !== null ? (t.stateNode = a, ke = t, ze = Dt(a.firstChild), wt = false, n = true) : n = false), n || pl(t)), dl(t), n = t.type, u = t.pendingProps, i = e !== null ? e.memoizedProps : null, a = u.children, hs(n, u) ? a = null : i !== null && hs(n, i) && (t.flags |= 32), t.memoizedState !== null && (n = mc(e, t, I0, null, null, l), Rn._currentValue = n), Uu(e, t), Je(e, t, a, l), t.child;
        case 6:
          return e === null && se && ((e = l = ze) && (l = qh(l, t.pendingProps, wt), l !== null ? (t.stateNode = l, ke = t, ze = null, e = true) : e = false), e || pl(t)), null;
        case 13:
          return mo(e, t, l);
        case 4:
          return Ge(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Il(t, null, a, l) : Je(e, t, a, l), t.child;
        case 11:
          return ao(e, t, t.type, t.pendingProps, l);
        case 7:
          return Je(e, t, t.pendingProps, l), t.child;
        case 8:
          return Je(e, t, t.pendingProps.children, l), t.child;
        case 12:
          return Je(e, t, t.pendingProps.children, l), t.child;
        case 10:
          return a = t.pendingProps, vl(t, t.type, a.value), Je(e, t, a.children, l), t.child;
        case 9:
          return n = t.type._context, a = t.pendingProps.children, Jl(t), n = Ke(n), a = a(n), t.flags |= 1, Je(e, t, a, l), t.child;
        case 14:
          return no(e, t, t.type, t.pendingProps, l);
        case 15:
          return uo(e, t, t.type, t.pendingProps, l);
        case 19:
          return yo(e, t, l);
        case 31:
          return ih(e, t, l);
        case 22:
          return io(e, t, l, t.pendingProps);
        case 24:
          return Jl(t), a = Ke(Re), e === null ? (n = ac(), n === null && (n = je, u = tc(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), t.memoizedState = {
            parent: a,
            cache: n
          }, uc(t), vl(t, Re, n)) : ((e.lanes & l) !== 0 && (ic(e, t), yn(t, null, null, l), hn()), n = e.memoizedState, u = t.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, t.memoizedState = n, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = n), vl(t, Re, a)) : (a = u.cache, vl(t, Re, a), a !== n.cache && ec(t, [
            Re
          ], l, true))), Je(e, t, t.pendingProps.children, l), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(r(156, t.tag));
    }
    function al(e) {
      e.flags |= 4;
    }
    function Gc(e, t, l, a, n) {
      if ((t = (e.mode & 32) !== 0) && (t = false), t) {
        if (e.flags |= 16777216, (n & 335544128) === n) if (e.stateNode.complete) e.flags |= 8192;
        else if (Qo()) e.flags |= 8192;
        else throw Fl = _u, nc;
      } else e.flags &= -16777217;
    }
    function bo(e, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
      else if (e.flags |= 16777216, !Dd(t)) if (Qo()) e.flags |= 8192;
      else throw Fl = _u, nc;
    }
    function Ru(e, t) {
      t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Js() : 536870912, e.lanes |= t, Ca |= t);
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
    function Ee(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
      if (t) for (var n = e.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags & 65011712, a |= n.flags & 65011712, n.return = e, n = n.sibling;
      else for (n = e.child; n !== null; ) l |= n.lanes | n.childLanes, a |= n.subtreeFlags, a |= n.flags, n.return = e, n = n.sibling;
      return e.subtreeFlags |= a, e.childLanes = l, t;
    }
    function sh(e, t, l) {
      var a = t.pendingProps;
      switch (Wi(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return Ee(t), null;
        case 1:
          return Ee(t), null;
        case 3:
          return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Pt(Re), Me(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (xa(t) ? al(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Fi())), Ee(t), null;
        case 26:
          var n = t.type, u = t.memoizedState;
          return e === null ? (al(t), u !== null ? (Ee(t), bo(t, u)) : (Ee(t), Gc(t, n, null, a, l))) : u ? u !== e.memoizedState ? (al(t), Ee(t), bo(t, u)) : (Ee(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && al(t), Ee(t), Gc(t, n, e, a, l)), null;
        case 27:
          if (Fe(t), l = k.current, n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && al(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return Ee(t), null;
            }
            e = H.current, xa(t) ? Wf(t) : (e = jd(n, a, l), t.stateNode = e, al(t));
          }
          return Ee(t), null;
        case 5:
          if (Fe(t), n = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && al(t);
          else {
            if (!a) {
              if (t.stateNode === null) throw Error(r(166));
              return Ee(t), null;
            }
            if (u = H.current, xa(t)) Wf(t);
            else {
              var i = $u(k.current);
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
              u[Ve] = t, u[lt] = a;
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
              e: switch (We(u, n, a), n) {
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
              a && al(t);
            }
          }
          return Ee(t), Gc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
        case 6:
          if (e && t.stateNode != null) e.memoizedProps !== a && al(t);
          else {
            if (typeof a != "string" && t.stateNode === null) throw Error(r(166));
            if (e = k.current, xa(t)) {
              if (e = t.stateNode, l = t.memoizedProps, a = null, n = ke, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              e[Ve] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === true || md(e.nodeValue, l)), e || pl(t, true);
            } else e = $u(e).createTextNode(a), e[Ve] = t, t.stateNode = e;
          }
          return Ee(t), null;
        case 31:
          if (l = t.memoizedState, e === null || e.memoizedState !== null) {
            if (a = xa(t), l !== null) {
              if (e === null) {
                if (!a) throw Error(r(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(r(557));
                e[Ve] = t;
              } else kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ee(t), e = false;
            } else l = Fi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = true;
            if (!e) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
            if ((t.flags & 128) !== 0) throw Error(r(558));
          }
          return Ee(t), null;
        case 13:
          if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (n = xa(t), a !== null && a.dehydrated !== null) {
              if (e === null) {
                if (!n) throw Error(r(318));
                if (n = t.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
                n[Ve] = t;
              } else kl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              Ee(t), n = false;
            } else n = Fi(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), n = true;
            if (!n) return t.flags & 256 ? (gt(t), t) : (gt(t), null);
          }
          return gt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Ru(t, t.updateQueue), Ee(t), null);
        case 4:
          return Me(), e === null && fs(t.stateNode.containerInfo), Ee(t), null;
        case 10:
          return Pt(t.type), Ee(t), null;
        case 19:
          if (C(De), a = t.memoizedState, a === null) return Ee(t), null;
          if (n = (t.flags & 128) !== 0, u = a.rendering, u === null) if (n) xn(a, false);
          else {
            if (Oe !== 0 || e !== null && (e.flags & 128) !== 0) for (e = t.child; e !== null; ) {
              if (u = Su(e), u !== null) {
                for (t.flags |= 128, xn(a, false), e = u.updateQueue, t.updateQueue = e, Ru(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null; ) Zf(l, e), l = l.sibling;
                return E(De, De.current & 1 | 2), se && Ft(t, a.treeForkCount), t.child;
              }
              e = e.sibling;
            }
            a.tail !== null && rt() > Lu && (t.flags |= 128, n = true, xn(a, false), t.lanes = 4194304);
          }
          else {
            if (!n) if (e = Su(u), e !== null) {
              if (t.flags |= 128, n = true, e = e.updateQueue, t.updateQueue = e, Ru(t, e), xn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !se) return Ee(t), null;
            } else 2 * rt() - a.renderingStartTime > Lu && l !== 536870912 && (t.flags |= 128, n = true, xn(a, false), t.lanes = 4194304);
            a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
          }
          return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = rt(), e.sibling = null, l = De.current, E(De, n ? l & 1 | 2 : l & 1), se && Ft(t, a.treeForkCount), e) : (Ee(t), null);
        case 22:
        case 23:
          return gt(t), rc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), l = t.updateQueue, l !== null && Ru(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && C(Wl), null;
        case 24:
          return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Pt(Re), Ee(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, t.tag));
    }
    function fh(e, t) {
      switch (Wi(t), t.tag) {
        case 1:
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
          return Pt(Re), Me(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Fe(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (gt(t), t.alternate === null) throw Error(r(340));
            kl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 13:
          if (gt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
            if (t.alternate === null) throw Error(r(340));
            kl();
          }
          return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
          return C(De), null;
        case 4:
          return Me(), null;
        case 10:
          return Pt(t.type), null;
        case 22:
        case 23:
          return gt(t), rc(), e !== null && C(Wl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 24:
          return Pt(Re), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function _o(e, t) {
      switch (Wi(t), t.tag) {
        case 3:
          Pt(Re), Me();
          break;
        case 26:
        case 27:
        case 5:
          Fe(t);
          break;
        case 4:
          Me();
          break;
        case 31:
          t.memoizedState !== null && gt(t);
          break;
        case 13:
          gt(t);
          break;
        case 19:
          C(De);
          break;
        case 10:
          Pt(t.type);
          break;
        case 22:
        case 23:
          gt(t), rc(), e !== null && C(Wl);
          break;
        case 24:
          Pt(Re);
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
        be(t, t.return, o);
      }
    }
    function zl(e, t, l) {
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
                var m = l, N = o;
                try {
                  N();
                } catch (T) {
                  be(n, m, T);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (T) {
        be(t, t.return, T);
      }
    }
    function po(e) {
      var t = e.updateQueue;
      if (t !== null) {
        var l = e.stateNode;
        try {
          sr(t, l);
        } catch (a) {
          be(e, e.return, a);
        }
      }
    }
    function vo(e, t, l) {
      l.props = ea(e.type, e.memoizedProps), l.state = e.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        be(e, t, a);
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
        be(e, t, n);
      }
    }
    function Gt(e, t) {
      var l = e.ref, a = e.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        be(e, t, n);
      } finally {
        e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        be(e, t, n);
      }
      else l.current = null;
    }
    function xo(e) {
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
        be(e, e.return, n);
      }
    }
    function Xc(e, t, l) {
      try {
        var a = e.stateNode;
        Oh(a, e.type, l, t), a[lt] = t;
      } catch (n) {
        be(e, e.return, n);
      }
    }
    function So(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ul(e.type) || e.tag === 4;
    }
    function Qc(e) {
      e: for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || So(e.return)) return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.tag === 27 && Ul(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Zc(e, t, l) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = Jt));
      else if (a !== 4 && (a === 27 && Ul(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for (Zc(e, t, l), e = e.sibling; e !== null; ) Zc(e, t, l), e = e.sibling;
    }
    function Hu(e, t, l) {
      var a = e.tag;
      if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
      else if (a !== 4 && (a === 27 && Ul(e.type) && (l = e.stateNode), e = e.child, e !== null)) for (Hu(e, t, l), e = e.sibling; e !== null; ) Hu(e, t, l), e = e.sibling;
    }
    function No(e) {
      var t = e.stateNode, l = e.memoizedProps;
      try {
        for (var a = e.type, n = t.attributes; n.length; ) t.removeAttributeNode(n[0]);
        We(t, a, l), t[Ve] = e, t[lt] = l;
      } catch (u) {
        be(e, e.return, u);
      }
    }
    var nl = false, qe = false, Vc = false, jo = typeof WeakSet == "function" ? WeakSet : Set, Qe = null;
    function rh(e, t) {
      if (e = e.containerInfo, ds = ai, e = Rf(e), qi(e)) {
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
            var i = 0, o = -1, m = -1, N = 0, T = 0, U = e, j = null;
            t: for (; ; ) {
              for (var z; U !== l || n !== 0 && U.nodeType !== 3 || (o = i + n), U !== u || a !== 0 && U.nodeType !== 3 || (m = i + a), U.nodeType === 3 && (i += U.nodeValue.length), (z = U.firstChild) !== null; ) j = U, U = z;
              for (; ; ) {
                if (U === e) break t;
                if (j === l && ++N === n && (o = i), j === u && ++T === a && (m = i), (z = U.nextSibling) !== null) break;
                U = j, j = U.parentNode;
              }
              U = z;
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
      for (ms = {
        focusedElem: e,
        selectionRange: l
      }, ai = false, Qe = t; Qe !== null; ) if (t = Qe, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, Qe = e;
      else for (; Qe !== null; ) {
        switch (t = Qe, u = t.alternate, e = t.flags, t.tag) {
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
                var L = ea(l.type, n);
                e = a.getSnapshotBeforeUpdate(L, u), a.__reactInternalSnapshotBeforeUpdate = e;
              } catch (Z) {
                be(l, l.return, Z);
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
            if ((e & 1024) !== 0) throw Error(r(163));
        }
        if (e = t.sibling, e !== null) {
          e.return = t.return, Qe = e;
          break;
        }
        Qe = t.return;
      }
    }
    function Ao(e, t, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          il(e, l), a & 4 && Sn(5, l);
          break;
        case 1:
          if (il(e, l), a & 4) if (e = l.stateNode, t === null) try {
            e.componentDidMount();
          } catch (i) {
            be(l, l.return, i);
          }
          else {
            var n = ea(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              be(l, l.return, i);
            }
          }
          a & 64 && po(l), a & 512 && Nn(l, l.return);
          break;
        case 3:
          if (il(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
            if (t = null, l.child !== null) switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
            try {
              sr(e, t);
            } catch (i) {
              be(l, l.return, i);
            }
          }
          break;
        case 27:
          t === null && a & 4 && No(l);
        case 26:
        case 5:
          il(e, l), t === null && a & 4 && xo(l), a & 512 && Nn(l, l.return);
          break;
        case 12:
          il(e, l);
          break;
        case 31:
          il(e, l), a & 4 && To(e, l);
          break;
        case 13:
          il(e, l), a & 4 && Mo(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = ph.bind(null, l), Yh(e, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || nl, !a) {
            t = t !== null && t.memoizedState !== null || qe, n = nl;
            var u = qe;
            nl = a, (qe = t) && !u ? cl(e, l, (l.subtreeFlags & 8772) !== 0) : il(e, l), nl = n, qe = u;
          }
          break;
        case 30:
          break;
        default:
          il(e, l);
      }
    }
    function zo(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, zo(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && xi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
    }
    var Te = null, nt = false;
    function ul(e, t, l) {
      for (l = l.child; l !== null; ) Eo(e, t, l), l = l.sibling;
    }
    function Eo(e, t, l) {
      if (ot && typeof ot.onCommitFiberUnmount == "function") try {
        ot.onCommitFiberUnmount(ka, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          qe || Gt(l, t), ul(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          qe || Gt(l, t);
          var a = Te, n = nt;
          Ul(l.type) && (Te = l.stateNode, nt = false), ul(e, t, l), Dn(l.stateNode), Te = a, nt = n;
          break;
        case 5:
          qe || Gt(l, t);
        case 6:
          if (a = Te, n = nt, Te = null, ul(e, t, l), Te = a, nt = n, Te !== null) if (nt) try {
            (Te.nodeType === 9 ? Te.body : Te.nodeName === "HTML" ? Te.ownerDocument.body : Te).removeChild(l.stateNode);
          } catch (u) {
            be(l, t, u);
          }
          else try {
            Te.removeChild(l.stateNode);
          } catch (u) {
            be(l, t, u);
          }
          break;
        case 18:
          Te !== null && (nt ? (e = Te, pd(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Xa(e)) : pd(Te, l.stateNode));
          break;
        case 4:
          a = Te, n = nt, Te = l.stateNode.containerInfo, nt = true, ul(e, t, l), Te = a, nt = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          zl(2, l, t), qe || zl(4, l, t), ul(e, t, l);
          break;
        case 1:
          qe || (Gt(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && vo(l, t, a)), ul(e, t, l);
          break;
        case 21:
          ul(e, t, l);
          break;
        case 22:
          qe = (a = qe) || l.memoizedState !== null, ul(e, t, l), qe = a;
          break;
        default:
          ul(e, t, l);
      }
    }
    function To(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
        e = e.dehydrated;
        try {
          Xa(e);
        } catch (l) {
          be(t, t.return, l);
        }
      }
    }
    function Mo(e, t) {
      if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
        Xa(e);
      } catch (l) {
        be(t, t.return, l);
      }
    }
    function oh(e) {
      switch (e.tag) {
        case 31:
        case 13:
        case 19:
          var t = e.stateNode;
          return t === null && (t = e.stateNode = new jo()), t;
        case 22:
          return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new jo()), t;
        default:
          throw Error(r(435, e.tag));
      }
    }
    function Bu(e, t) {
      var l = oh(e);
      t.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = vh.bind(null, e, a);
          a.then(n, n);
        }
      });
    }
    function ut(e, t) {
      var l = t.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = e, i = t, o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Ul(o.type)) {
                Te = o.stateNode, nt = false;
                break e;
              }
              break;
            case 5:
              Te = o.stateNode, nt = false;
              break e;
            case 3:
            case 4:
              Te = o.stateNode.containerInfo, nt = true;
              break e;
          }
          o = o.return;
        }
        if (Te === null) throw Error(r(160));
        Eo(u, i, n), Te = null, nt = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) wo(t, e), t = t.sibling;
    }
    var Ht = null;
    function wo(e, t) {
      var l = e.alternate, a = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ut(t, e), it(e), a & 4 && (zl(3, e, e.return), Sn(3, e), zl(5, e, e.return));
          break;
        case 1:
          ut(t, e), it(e), a & 512 && (qe || l === null || Gt(l, l.return)), a & 64 && nl && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = Ht;
          if (ut(t, e), it(e), a & 512 && (qe || l === null || Gt(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = e.memoizedState, l === null) if (a === null) if (e.stateNode === null) {
              e: {
                a = e.type, l = e.memoizedProps, n = n.ownerDocument || n;
                t: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Wa] || u[Ve] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), We(u, a, l), u[Ve] = e, Xe(u), a = u;
                    break e;
                  case "link":
                    var i = wd("link", "href", n).get(a + (l.href || ""));
                    if (i) {
                      for (var o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(o, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), We(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = wd("meta", "content", n).get(a + (l.content || ""))) {
                      for (o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(o, 1);
                        break t;
                      }
                    }
                    u = n.createElement(a), We(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                u[Ve] = e, Xe(u), a = u;
              }
              e.stateNode = a;
            } else Od(n, e.type, e.stateNode);
            else e.stateNode = Md(n, a, e.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? Od(n, e.type, e.stateNode) : Md(n, a, e.memoizedProps)) : a === null && e.stateNode !== null && Xc(e, e.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          ut(t, e), it(e), a & 512 && (qe || l === null || Gt(l, l.return)), l !== null && a & 4 && Xc(e, e.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (ut(t, e), it(e), a & 512 && (qe || l === null || Gt(l, l.return)), e.flags & 32) {
            n = e.stateNode;
            try {
              oa(n, "");
            } catch (L) {
              be(e, e.return, L);
            }
          }
          a & 4 && e.stateNode != null && (n = e.memoizedProps, Xc(e, n, l !== null ? l.memoizedProps : n)), a & 1024 && (Vc = true);
          break;
        case 6:
          if (ut(t, e), it(e), a & 4) {
            if (e.stateNode === null) throw Error(r(162));
            a = e.memoizedProps, l = e.stateNode;
            try {
              l.nodeValue = a;
            } catch (L) {
              be(e, e.return, L);
            }
          }
          break;
        case 3:
          if (Pu = null, n = Ht, Ht = Fu(t.containerInfo), ut(t, e), Ht = n, it(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Xa(t.containerInfo);
          } catch (L) {
            be(e, e.return, L);
          }
          Vc && (Vc = false, Oo(e));
          break;
        case 4:
          a = Ht, Ht = Fu(e.stateNode.containerInfo), ut(t, e), it(e), Ht = a;
          break;
        case 12:
          ut(t, e), it(e);
          break;
        case 31:
          ut(t, e), it(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Bu(e, a)));
          break;
        case 13:
          ut(t, e), it(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Yu = rt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Bu(e, a)));
          break;
        case 22:
          n = e.memoizedState !== null;
          var m = l !== null && l.memoizedState !== null, N = nl, T = qe;
          if (nl = N || n, qe = T || m, ut(t, e), qe = T, nl = N, it(e), a & 8192) e: for (t = e.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, n && (l === null || m || nl || qe || ta(e)), l = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                m = l = t;
                try {
                  if (u = m.stateNode, n) i = u.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none";
                  else {
                    o = m.stateNode;
                    var U = m.memoizedProps.style, j = U != null && U.hasOwnProperty("display") ? U.display : null;
                    o.style.display = j == null || typeof j == "boolean" ? "" : ("" + j).trim();
                  }
                } catch (L) {
                  be(m, m.return, L);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                m = t;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (L) {
                  be(m, m.return, L);
                }
              }
            } else if (t.tag === 18) {
              if (l === null) {
                m = t;
                try {
                  var z = m.stateNode;
                  n ? vd(z, true) : vd(m.stateNode, false);
                } catch (L) {
                  be(m, m.return, L);
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
          a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Bu(e, l))));
          break;
        case 19:
          ut(t, e), it(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, Bu(e, a)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          ut(t, e), it(e);
      }
    }
    function it(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          for (var l, a = e.return; a !== null; ) {
            if (So(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(r(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Qc(e);
              Hu(e, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (oa(i, ""), l.flags &= -33);
              var o = Qc(e);
              Hu(e, o, i);
              break;
            case 3:
            case 4:
              var m = l.stateNode.containerInfo, N = Qc(e);
              Zc(e, N, m);
              break;
            default:
              throw Error(r(161));
          }
        } catch (T) {
          be(e, e.return, T);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function Oo(e) {
      if (e.subtreeFlags & 1024) for (e = e.child; e !== null; ) {
        var t = e;
        Oo(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
    }
    function il(e, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) Ao(e, t.alternate, t), t = t.sibling;
    }
    function ta(e) {
      for (e = e.child; e !== null; ) {
        var t = e;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            zl(4, t, t.return), ta(t);
            break;
          case 1:
            Gt(t, t.return);
            var l = t.stateNode;
            typeof l.componentWillUnmount == "function" && vo(t, t.return, l), ta(t);
            break;
          case 27:
            Dn(t.stateNode);
          case 26:
          case 5:
            Gt(t, t.return), ta(t);
            break;
          case 22:
            t.memoizedState === null && ta(t);
            break;
          case 30:
            ta(t);
            break;
          default:
            ta(t);
        }
        e = e.sibling;
      }
    }
    function cl(e, t, l) {
      for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var a = t.alternate, n = e, u = t, i = u.flags;
        switch (u.tag) {
          case 0:
          case 11:
          case 15:
            cl(n, u, l), Sn(4, u);
            break;
          case 1:
            if (cl(n, u, l), a = u, n = a.stateNode, typeof n.componentDidMount == "function") try {
              n.componentDidMount();
            } catch (N) {
              be(a, a.return, N);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var o = a.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) cr(m[n], o);
              } catch (N) {
                be(a, a.return, N);
              }
            }
            l && i & 64 && po(u), Nn(u, u.return);
            break;
          case 27:
            No(u);
          case 26:
          case 5:
            cl(n, u, l), l && a === null && i & 4 && xo(u), Nn(u, u.return);
            break;
          case 12:
            cl(n, u, l);
            break;
          case 31:
            cl(n, u, l), l && i & 4 && To(n, u);
            break;
          case 13:
            cl(n, u, l), l && i & 4 && Mo(n, u);
            break;
          case 22:
            u.memoizedState === null && cl(n, u, l), Nn(u, u.return);
            break;
          case 30:
            break;
          default:
            cl(n, u, l);
        }
        t = t.sibling;
      }
    }
    function kc(e, t) {
      var l = null;
      e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && fn(l));
    }
    function Kc(e, t) {
      e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fn(e));
    }
    function Bt(e, t, l, a) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) Do(e, t, l, a), t = t.sibling;
    }
    function Do(e, t, l, a) {
      var n = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Bt(e, t, l, a), n & 2048 && Sn(9, t);
          break;
        case 1:
          Bt(e, t, l, a);
          break;
        case 3:
          Bt(e, t, l, a), n & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && fn(e)));
          break;
        case 12:
          if (n & 2048) {
            Bt(e, t, l, a), e = t.stateNode;
            try {
              var u = t.memoizedProps, i = u.id, o = u.onPostCommit;
              typeof o == "function" && o(i, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
            } catch (m) {
              be(t, t.return, m);
            }
          } else Bt(e, t, l, a);
          break;
        case 31:
          Bt(e, t, l, a);
          break;
        case 13:
          Bt(e, t, l, a);
          break;
        case 23:
          break;
        case 22:
          u = t.stateNode, i = t.alternate, t.memoizedState !== null ? u._visibility & 2 ? Bt(e, t, l, a) : jn(e, t) : u._visibility & 2 ? Bt(e, t, l, a) : (u._visibility |= 2, Oa(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || false)), n & 2048 && kc(i, t);
          break;
        case 24:
          Bt(e, t, l, a), n & 2048 && Kc(t.alternate, t);
          break;
        default:
          Bt(e, t, l, a);
      }
    }
    function Oa(e, t, l, a, n) {
      for (n = n && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var u = e, i = t, o = l, m = a, N = i.flags;
        switch (i.tag) {
          case 0:
          case 11:
          case 15:
            Oa(u, i, o, m, n), Sn(8, i);
            break;
          case 23:
            break;
          case 22:
            var T = i.stateNode;
            i.memoizedState !== null ? T._visibility & 2 ? Oa(u, i, o, m, n) : jn(u, i) : (T._visibility |= 2, Oa(u, i, o, m, n)), n && N & 2048 && kc(i.alternate, i);
            break;
          case 24:
            Oa(u, i, o, m, n), n && N & 2048 && Kc(i.alternate, i);
            break;
          default:
            Oa(u, i, o, m, n);
        }
        t = t.sibling;
      }
    }
    function jn(e, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var l = e, a = t, n = a.flags;
        switch (a.tag) {
          case 22:
            jn(l, a), n & 2048 && kc(a.alternate, a);
            break;
          case 24:
            jn(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          default:
            jn(l, a);
        }
        t = t.sibling;
      }
    }
    var An = 8192;
    function Da(e, t, l) {
      if (e.subtreeFlags & An) for (e = e.child; e !== null; ) Uo(e, t, l), e = e.sibling;
    }
    function Uo(e, t, l) {
      switch (e.tag) {
        case 26:
          Da(e, t, l), e.flags & An && e.memoizedState !== null && Fh(l, Ht, e.memoizedState, e.memoizedProps);
          break;
        case 5:
          Da(e, t, l);
          break;
        case 3:
        case 4:
          var a = Ht;
          Ht = Fu(e.stateNode.containerInfo), Da(e, t, l), Ht = a;
          break;
        case 22:
          e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, Da(e, t, l), An = a) : Da(e, t, l));
          break;
        default:
          Da(e, t, l);
      }
    }
    function Co(e) {
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
          Qe = a, Ho(a, e);
        }
        Co(e);
      }
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Ro(e), e = e.sibling;
    }
    function Ro(e) {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          zn(e), e.flags & 2048 && zl(9, e, e.return);
          break;
        case 3:
          zn(e);
          break;
        case 12:
          zn(e);
          break;
        case 22:
          var t = e.stateNode;
          e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, qu(e)) : zn(e);
          break;
        default:
          zn(e);
      }
    }
    function qu(e) {
      var t = e.deletions;
      if ((e.flags & 16) !== 0) {
        if (t !== null) for (var l = 0; l < t.length; l++) {
          var a = t[l];
          Qe = a, Ho(a, e);
        }
        Co(e);
      }
      for (e = e.child; e !== null; ) {
        switch (t = e, t.tag) {
          case 0:
          case 11:
          case 15:
            zl(8, t, t.return), qu(t);
            break;
          case 22:
            l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, qu(t));
            break;
          default:
            qu(t);
        }
        e = e.sibling;
      }
    }
    function Ho(e, t) {
      for (; Qe !== null; ) {
        var l = Qe;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            zl(8, l, t);
            break;
          case 23:
          case 22:
            if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
              var a = l.memoizedState.cachePool.pool;
              a != null && a.refCount++;
            }
            break;
          case 24:
            fn(l.memoizedState.cache);
        }
        if (a = l.child, a !== null) a.return = l, Qe = a;
        else e: for (l = e; Qe !== null; ) {
          a = Qe;
          var n = a.sibling, u = a.return;
          if (zo(a), a === l) {
            Qe = null;
            break e;
          }
          if (n !== null) {
            n.return = u, Qe = n;
            break e;
          }
          Qe = u;
        }
      }
    }
    var dh = {
      getCacheForType: function(e) {
        var t = Ke(Re), l = t.data.get(e);
        return l === void 0 && (l = e(), t.data.set(e, l)), l;
      },
      cacheSignal: function() {
        return Ke(Re).controller.signal;
      }
    }, mh = typeof WeakMap == "function" ? WeakMap : Map, me = 0, je = null, le = null, ue = 0, ge = 0, bt = null, El = false, Ua = false, Jc = false, sl = 0, Oe = 0, Tl = 0, la = 0, Wc = 0, _t = 0, Ca = 0, En = null, ct = null, $c = false, Yu = 0, Bo = 0, Lu = 1 / 0, Gu = null, Ml = null, Ye = 0, wl = null, Ra = null, fl = 0, Fc = 0, Ic = null, qo = null, Tn = 0, Pc = null;
    function pt() {
      return (me & 2) !== 0 && ue !== 0 ? ue & -ue : w.T !== null ? us() : Is();
    }
    function Yo() {
      if (_t === 0) if ((ue & 536870912) === 0 || se) {
        var e = Wn;
        Wn <<= 1, (Wn & 3932160) === 0 && (Wn = 262144), _t = e;
      } else _t = 536870912;
      return e = yt.current, e !== null && (e.flags |= 32), _t;
    }
    function st(e, t, l) {
      (e === je && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) && (Ha(e, 0), Ol(e, ue, _t, false)), Ja(e, l), ((me & 2) === 0 || e !== je) && (e === je && ((me & 2) === 0 && (la |= l), Oe === 4 && Ol(e, ue, _t, false)), Xt(e));
    }
    function Lo(e, t, l) {
      if ((me & 6) !== 0) throw Error(r(327));
      var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ka(e, t), n = a ? gh(e, t) : ts(e, t, true), u = a;
      do {
        if (n === 0) {
          Ua && !a && Ol(e, t, 0, false);
          break;
        } else {
          if (l = e.current.alternate, u && !hh(l)) {
            n = ts(e, t, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = t, e.errorRecoveryDisabledLanes & u) var i = 0;
            else i = e.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              t = i;
              e: {
                var o = e;
                n = En;
                var m = o.current.memoizedState.isDehydrated;
                if (m && (Ha(o, i).flags |= 256), i = ts(o, i, false), i !== 2) {
                  if (Jc && !m) {
                    o.errorRecoveryDisabledLanes |= u, la |= u, n = 4;
                    break e;
                  }
                  u = ct, ct = n, u !== null && (ct === null ? ct = u : ct.push.apply(ct, u));
                }
                n = i;
              }
              if (u = false, n !== 2) continue;
            }
          }
          if (n === 1) {
            Ha(e, 0), Ol(e, t, 0, true);
            break;
          }
          e: {
            switch (a = e, u = n, u) {
              case 0:
              case 1:
                throw Error(r(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                Ol(a, t, _t, !El);
                break e;
              case 2:
                ct = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(r(329));
            }
            if ((t & 62914560) === t && (n = Yu + 300 - rt(), 10 < n)) {
              if (Ol(a, t, _t, !El), Fn(a, 0, true) !== 0) break e;
              fl = t, a.timeoutHandle = bd(Go.bind(null, a, l, ct, Gu, $c, t, _t, la, Ca, El, u, "Throttled", -0, 0), n);
              break e;
            }
            Go(a, l, ct, Gu, $c, t, _t, la, Ca, El, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Xt(e);
    }
    function Go(e, t, l, a, n, u, i, o, m, N, T, U, j, z) {
      if (e.timeoutHandle = -1, U = t.subtreeFlags, U & 8192 || (U & 16785408) === 16785408) {
        U = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: Jt
        }, Uo(t, u, U);
        var L = (u & 62914560) === u ? Yu - rt() : (u & 4194048) === u ? Bo - rt() : 0;
        if (L = Ih(U, L), L !== null) {
          fl = u, e.cancelPendingCommit = L(Wo.bind(null, e, t, u, l, a, n, i, o, m, T, U, null, j, z)), Ol(e, u, i, !N);
          return;
        }
      }
      Wo(e, t, u, l, a, n, i, o, m);
    }
    function hh(e) {
      for (var t = e; ; ) {
        var l = t.tag;
        if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for (var a = 0; a < l.length; a++) {
          var n = l[a], u = n.getSnapshot;
          n = n.value;
          try {
            if (!mt(u(), n)) return false;
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
    function Ol(e, t, l, a) {
      t &= ~Wc, t &= ~la, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
      for (var n = t; 0 < n; ) {
        var u = 31 - dt(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      l !== 0 && Ws(e, l, t);
    }
    function Xu() {
      return (me & 6) === 0 ? (Mn(0), false) : true;
    }
    function es() {
      if (le !== null) {
        if (ge === 0) var e = le.return;
        else e = le, It = Kl = null, gc(e), za = null, on = 0, e = le;
        for (; e !== null; ) _o(e.alternate, e), e = e.return;
        le = null;
      }
    }
    function Ha(e, t) {
      var l = e.timeoutHandle;
      l !== -1 && (e.timeoutHandle = -1, Ch(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), fl = 0, es(), je = e, le = l = $t(e.current, null), ue = t, ge = 0, bt = null, El = false, Ua = Ka(e, t), Jc = false, Ca = _t = Wc = la = Tl = Oe = 0, ct = En = null, $c = false, (t & 8) !== 0 && (t |= t & 32);
      var a = e.entangledLanes;
      if (a !== 0) for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - dt(a), u = 1 << n;
        t |= e[n], a &= ~u;
      }
      return sl = t, fu(), l;
    }
    function Xo(e, t) {
      P = null, w.H = pn, t === Aa || t === bu ? (t = ar(), ge = 3) : t === nc ? (t = ar(), ge = 4) : ge = t === Dc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, bt = t, le === null && (Oe = 1, Ou(e, Et(t, e.current)));
    }
    function Qo() {
      var e = yt.current;
      return e === null ? true : (ue & 4194048) === ue ? Ot === null : (ue & 62914560) === ue || (ue & 536870912) !== 0 ? e === Ot : false;
    }
    function Zo() {
      var e = w.H;
      return w.H = pn, e === null ? pn : e;
    }
    function Vo() {
      var e = w.A;
      return w.A = dh, e;
    }
    function Qu() {
      Oe = 4, El || (ue & 4194048) !== ue && yt.current !== null || (Ua = true), (Tl & 134217727) === 0 && (la & 134217727) === 0 || je === null || Ol(je, ue, _t, false);
    }
    function ts(e, t, l) {
      var a = me;
      me |= 2;
      var n = Zo(), u = Vo();
      (je !== e || ue !== t) && (Gu = null, Ha(e, t)), t = false;
      var i = Oe;
      e: do
        try {
          if (ge !== 0 && le !== null) {
            var o = le, m = bt;
            switch (ge) {
              case 8:
                es(), i = 6;
                break e;
              case 3:
              case 2:
              case 9:
              case 6:
                yt.current === null && (t = true);
                var N = ge;
                if (ge = 0, bt = null, Ba(e, o, m, N), l && Ua) {
                  i = 0;
                  break e;
                }
                break;
              default:
                N = ge, ge = 0, bt = null, Ba(e, o, m, N);
            }
          }
          yh(), i = Oe;
          break;
        } catch (T) {
          Xo(e, T);
        }
      while (true);
      return t && e.shellSuspendCounter++, It = Kl = null, me = a, w.H = n, w.A = u, le === null && (je = null, ue = 0, fu()), i;
    }
    function yh() {
      for (; le !== null; ) ko(le);
    }
    function gh(e, t) {
      var l = me;
      me |= 2;
      var a = Zo(), n = Vo();
      je !== e || ue !== t ? (Gu = null, Lu = rt() + 500, Ha(e, t)) : Ua = Ka(e, t);
      e: do
        try {
          if (ge !== 0 && le !== null) {
            t = le;
            var u = bt;
            t: switch (ge) {
              case 1:
                ge = 0, bt = null, Ba(e, t, u, 1);
                break;
              case 2:
              case 9:
                if (tr(u)) {
                  ge = 0, bt = null, Ko(t);
                  break;
                }
                t = function() {
                  ge !== 2 && ge !== 9 || je !== e || (ge = 7), Xt(e);
                }, u.then(t, t);
                break e;
              case 3:
                ge = 7;
                break e;
              case 4:
                ge = 5;
                break e;
              case 7:
                tr(u) ? (ge = 0, bt = null, Ko(t)) : (ge = 0, bt = null, Ba(e, t, u, 7));
                break;
              case 5:
                var i = null;
                switch (le.tag) {
                  case 26:
                    i = le.memoizedState;
                  case 5:
                  case 27:
                    var o = le;
                    if (i ? Dd(i) : o.stateNode.complete) {
                      ge = 0, bt = null;
                      var m = o.sibling;
                      if (m !== null) le = m;
                      else {
                        var N = o.return;
                        N !== null ? (le = N, Zu(N)) : le = null;
                      }
                      break t;
                    }
                }
                ge = 0, bt = null, Ba(e, t, u, 5);
                break;
              case 6:
                ge = 0, bt = null, Ba(e, t, u, 6);
                break;
              case 8:
                es(), Oe = 6;
                break e;
              default:
                throw Error(r(462));
            }
          }
          bh();
          break;
        } catch (T) {
          Xo(e, T);
        }
      while (true);
      return It = Kl = null, w.H = a, w.A = n, me = l, le !== null ? 0 : (je = null, ue = 0, fu(), Oe);
    }
    function bh() {
      for (; le !== null && !Lm(); ) ko(le);
    }
    function ko(e) {
      var t = go(e.alternate, e, sl);
      e.memoizedProps = e.pendingProps, t === null ? Zu(e) : le = t;
    }
    function Ko(e) {
      var t = e, l = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = fo(l, t, t.pendingProps, t.type, void 0, ue);
          break;
        case 11:
          t = fo(l, t, t.pendingProps, t.type.render, t.ref, ue);
          break;
        case 5:
          gc(t);
        default:
          _o(l, t), t = le = Zf(t, sl), t = go(l, t, sl);
      }
      e.memoizedProps = e.pendingProps, t === null ? Zu(e) : le = t;
    }
    function Ba(e, t, l, a) {
      It = Kl = null, gc(t), za = null, on = 0;
      var n = t.return;
      try {
        if (uh(e, n, t, l, ue)) {
          Oe = 1, Ou(e, Et(l, e.current)), le = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw le = n, u;
        Oe = 1, Ou(e, Et(l, e.current)), le = null;
        return;
      }
      t.flags & 32768 ? (se || a === 1 ? e = true : Ua || (ue & 536870912) !== 0 ? e = false : (El = e = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = yt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Jo(t, e)) : Zu(t);
    }
    function Zu(e) {
      var t = e;
      do {
        if ((t.flags & 32768) !== 0) {
          Jo(t, El);
          return;
        }
        e = t.return;
        var l = sh(t.alternate, t, sl);
        if (l !== null) {
          le = l;
          return;
        }
        if (t = t.sibling, t !== null) {
          le = t;
          return;
        }
        le = t = e;
      } while (t !== null);
      Oe === 0 && (Oe = 5);
    }
    function Jo(e, t) {
      do {
        var l = fh(e.alternate, e);
        if (l !== null) {
          l.flags &= 32767, le = l;
          return;
        }
        if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
          le = e;
          return;
        }
        le = e = l;
      } while (e !== null);
      Oe = 6, le = null;
    }
    function Wo(e, t, l, a, n, u, i, o, m) {
      e.cancelPendingCommit = null;
      do
        Vu();
      while (Ye !== 0);
      if ((me & 6) !== 0) throw Error(r(327));
      if (t !== null) {
        if (t === e.current) throw Error(r(177));
        if (u = t.lanes | t.childLanes, u |= Qi, $m(e, l, u, i, o, m), e === je && (le = je = null, ue = 0), Ra = t, wl = e, fl = l, Fc = u, Ic = n, qo = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, xh(Kn, function() {
          return ed(), null;
        })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
          a = w.T, w.T = null, n = B.p, B.p = 2, i = me, me |= 4;
          try {
            rh(e, t, l);
          } finally {
            me = i, B.p = n, w.T = a;
          }
        }
        Ye = 1, $o(), Fo(), Io();
      }
    }
    function $o() {
      if (Ye === 1) {
        Ye = 0;
        var e = wl, t = Ra, l = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || l) {
          l = w.T, w.T = null;
          var a = B.p;
          B.p = 2;
          var n = me;
          me |= 4;
          try {
            wo(t, e);
            var u = ms, i = Rf(e.containerInfo), o = u.focusedElem, m = u.selectionRange;
            if (i !== o && o && o.ownerDocument && Cf(o.ownerDocument.documentElement, o)) {
              if (m !== null && qi(o)) {
                var N = m.start, T = m.end;
                if (T === void 0 && (T = N), "selectionStart" in o) o.selectionStart = N, o.selectionEnd = Math.min(T, o.value.length);
                else {
                  var U = o.ownerDocument || document, j = U && U.defaultView || window;
                  if (j.getSelection) {
                    var z = j.getSelection(), L = o.textContent.length, Z = Math.min(m.start, L), Se = m.end === void 0 ? Z : Math.min(m.end, L);
                    !z.extend && Z > Se && (i = Se, Se = Z, Z = i);
                    var p = Uf(o, Z), h = Uf(o, Se);
                    if (p && h && (z.rangeCount !== 1 || z.anchorNode !== p.node || z.anchorOffset !== p.offset || z.focusNode !== h.node || z.focusOffset !== h.offset)) {
                      var S = U.createRange();
                      S.setStart(p.node, p.offset), z.removeAllRanges(), Z > Se ? (z.addRange(S), z.extend(h.node, h.offset)) : (S.setEnd(h.node, h.offset), z.addRange(S));
                    }
                  }
                }
              }
              for (U = [], z = o; z = z.parentNode; ) z.nodeType === 1 && U.push({
                element: z,
                left: z.scrollLeft,
                top: z.scrollTop
              });
              for (typeof o.focus == "function" && o.focus(), o = 0; o < U.length; o++) {
                var D = U[o];
                D.element.scrollLeft = D.left, D.element.scrollTop = D.top;
              }
            }
            ai = !!ds, ms = ds = null;
          } finally {
            me = n, B.p = a, w.T = l;
          }
        }
        e.current = t, Ye = 2;
      }
    }
    function Fo() {
      if (Ye === 2) {
        Ye = 0;
        var e = wl, t = Ra, l = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || l) {
          l = w.T, w.T = null;
          var a = B.p;
          B.p = 2;
          var n = me;
          me |= 4;
          try {
            Ao(e, t.alternate, t);
          } finally {
            me = n, B.p = a, w.T = l;
          }
        }
        Ye = 3;
      }
    }
    function Io() {
      if (Ye === 4 || Ye === 3) {
        Ye = 0, Gm();
        var e = wl, t = Ra, l = fl, a = qo;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ye = 5 : (Ye = 0, Ra = wl = null, Po(e, e.pendingLanes));
        var n = e.pendingLanes;
        if (n === 0 && (Ml = null), pi(l), t = t.stateNode, ot && typeof ot.onCommitFiberRoot == "function") try {
          ot.onCommitFiberRoot(ka, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          t = w.T, n = B.p, B.p = 2, w.T = null;
          try {
            for (var u = e.onRecoverableError, i = 0; i < a.length; i++) {
              var o = a[i];
              u(o.value, {
                componentStack: o.stack
              });
            }
          } finally {
            w.T = t, B.p = n;
          }
        }
        (fl & 3) !== 0 && Vu(), Xt(e), n = e.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? e === Pc ? Tn++ : (Tn = 0, Pc = e) : Tn = 0, Mn(0);
      }
    }
    function Po(e, t) {
      (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, fn(t)));
    }
    function Vu() {
      return $o(), Fo(), Io(), ed();
    }
    function ed() {
      if (Ye !== 5) return false;
      var e = wl, t = Fc;
      Fc = 0;
      var l = pi(fl), a = w.T, n = B.p;
      try {
        B.p = 32 > l ? 32 : l, w.T = null, l = Ic, Ic = null;
        var u = wl, i = fl;
        if (Ye = 0, Ra = wl = null, fl = 0, (me & 6) !== 0) throw Error(r(331));
        var o = me;
        if (me |= 4, Ro(u.current), Do(u, u.current, i, l), me = o, Mn(0, false), ot && typeof ot.onPostCommitFiberRoot == "function") try {
          ot.onPostCommitFiberRoot(ka, u);
        } catch {
        }
        return true;
      } finally {
        B.p = n, w.T = a, Po(e, t);
      }
    }
    function td(e, t, l) {
      t = Et(l, t), t = Oc(e.stateNode, t, 2), e = Nl(e, t, 2), e !== null && (Ja(e, 2), Xt(e));
    }
    function be(e, t, l) {
      if (e.tag === 3) td(e, e, l);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          td(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ml === null || !Ml.has(a))) {
            e = Et(l, e), l = to(2), a = Nl(t, l, 2), a !== null && (lo(l, a, t, e), Ja(a, 2), Xt(a));
            break;
          }
        }
        t = t.return;
      }
    }
    function ls(e, t, l) {
      var a = e.pingCache;
      if (a === null) {
        a = e.pingCache = new mh();
        var n = /* @__PURE__ */ new Set();
        a.set(t, n);
      } else n = a.get(t), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(t, n));
      n.has(l) || (Jc = true, n.add(l), e = _h.bind(null, e, t, l), t.then(e, e));
    }
    function _h(e, t, l) {
      var a = e.pingCache;
      a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, je === e && (ue & l) === l && (Oe === 4 || Oe === 3 && (ue & 62914560) === ue && 300 > rt() - Yu ? (me & 2) === 0 && Ha(e, 0) : Wc |= l, Ca === ue && (Ca = 0)), Xt(e);
    }
    function ld(e, t) {
      t === 0 && (t = Js()), e = Zl(e, t), e !== null && (Ja(e, t), Xt(e));
    }
    function ph(e) {
      var t = e.memoizedState, l = 0;
      t !== null && (l = t.retryLane), ld(e, l);
    }
    function vh(e, t) {
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
          throw Error(r(314));
      }
      a !== null && a.delete(t), ld(e, l);
    }
    function xh(e, t) {
      return yi(e, t);
    }
    var ku = null, qa = null, as = false, Ku = false, ns = false, Dl = 0;
    function Xt(e) {
      e !== qa && e.next === null && (qa === null ? ku = qa = e : qa = qa.next = e), Ku = true, as || (as = true, Nh());
    }
    function Mn(e, t) {
      if (!ns && Ku) {
        ns = true;
        do
          for (var l = false, a = ku; a !== null; ) {
            if (e !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, o = a.pingedLanes;
                u = (1 << 31 - dt(42 | e) + 1) - 1, u &= n & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, id(a, u));
            } else u = ue, u = Fn(a, a === je ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ka(a, u) || (l = true, id(a, u));
            a = a.next;
          }
        while (l);
        ns = false;
      }
    }
    function Sh() {
      ad();
    }
    function ad() {
      Ku = as = false;
      var e = 0;
      Dl !== 0 && Uh() && (e = Dl);
      for (var t = rt(), l = null, a = ku; a !== null; ) {
        var n = a.next, u = nd(a, t);
        u === 0 ? (a.next = null, l === null ? ku = n : l.next = n, n === null && (qa = l)) : (l = a, (e !== 0 || (u & 3) !== 0) && (Ku = true)), a = n;
      }
      Ye !== 0 && Ye !== 5 || Mn(e), Dl !== 0 && (Dl = 0);
    }
    function nd(e, t) {
      for (var l = e.suspendedLanes, a = e.pingedLanes, n = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - dt(u), o = 1 << i, m = n[i];
        m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = Wm(o, t)) : m <= t && (e.expiredLanes |= o), u &= ~o;
      }
      if (t = je, l = ue, l = Fn(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (ge === 2 || ge === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && gi(a), e.callbackNode = null, e.callbackPriority = 0;
      if ((l & 3) === 0 || Ka(e, l)) {
        if (t = l & -l, t === e.callbackPriority) return t;
        switch (a !== null && gi(a), pi(l)) {
          case 2:
          case 8:
            l = ks;
            break;
          case 32:
            l = Kn;
            break;
          case 268435456:
            l = Ks;
            break;
          default:
            l = Kn;
        }
        return a = ud.bind(null, e), l = yi(l, a), e.callbackPriority = t, e.callbackNode = l, t;
      }
      return a !== null && a !== null && gi(a), e.callbackPriority = 2, e.callbackNode = null, 2;
    }
    function ud(e, t) {
      if (Ye !== 0 && Ye !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
      var l = e.callbackNode;
      if (Vu() && e.callbackNode !== l) return null;
      var a = ue;
      return a = Fn(e, e === je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (Lo(e, a, t), nd(e, rt()), e.callbackNode != null && e.callbackNode === l ? ud.bind(null, e) : null);
    }
    function id(e, t) {
      if (Vu()) return null;
      Lo(e, t, true);
    }
    function Nh() {
      Rh(function() {
        (me & 6) !== 0 ? yi(Vs, Sh) : ad();
      });
    }
    function us() {
      if (Dl === 0) {
        var e = Na;
        e === 0 && (e = Jn, Jn <<= 1, (Jn & 261888) === 0 && (Jn = 256)), Dl = e;
      }
      return Dl;
    }
    function cd(e) {
      return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : tu("" + e);
    }
    function sd(e, t) {
      var l = t.ownerDocument.createElement("input");
      return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
    }
    function jh(e, t, l, a, n) {
      if (t === "submit" && l && l.stateNode === n) {
        var u = cd((n[lt] || null).action), i = a.submitter;
        i && (t = (t = i[lt] || null) ? cd(t.formAction) : i.getAttribute("formAction"), t !== null && (u = t, i = null));
        var o = new uu("action", "action", null, a, n);
        e.push({
          event: o,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (Dl !== 0) {
                    var m = i ? sd(n, i) : new FormData(n);
                    Ac(l, {
                      pending: true,
                      data: m,
                      method: n.method,
                      action: u
                    }, null, m);
                  }
                } else typeof u == "function" && (o.preventDefault(), m = i ? sd(n, i) : new FormData(n), Ac(l, {
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
    for (var is = 0; is < Xi.length; is++) {
      var cs = Xi[is], Ah = cs.toLowerCase(), zh = cs[0].toUpperCase() + cs.slice(1);
      Rt(Ah, "on" + zh);
    }
    Rt(qf, "onAnimationEnd"), Rt(Yf, "onAnimationIteration"), Rt(Lf, "onAnimationStart"), Rt("dblclick", "onDoubleClick"), Rt("focusin", "onFocus"), Rt("focusout", "onBlur"), Rt(X0, "onTransitionRun"), Rt(Q0, "onTransitionStart"), Rt(Z0, "onTransitionCancel"), Rt(Gf, "onTransitionEnd"), fa("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), fa("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), fa("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), fa("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Ll("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Ll("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Ll("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Ll("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Ll("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Ll("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Eh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));
    function fd(e, t) {
      t = (t & 4) !== 0;
      for (var l = 0; l < e.length; l++) {
        var a = e[l], n = a.event;
        a = a.listeners;
        e: {
          var u = void 0;
          if (t) for (var i = a.length - 1; 0 <= i; i--) {
            var o = a[i], m = o.instance, N = o.currentTarget;
            if (o = o.listener, m !== u && n.isPropagationStopped()) break e;
            u = o, n.currentTarget = N;
            try {
              u(n);
            } catch (T) {
              su(T);
            }
            n.currentTarget = null, u = m;
          }
          else for (i = 0; i < a.length; i++) {
            if (o = a[i], m = o.instance, N = o.currentTarget, o = o.listener, m !== u && n.isPropagationStopped()) break e;
            u = o, n.currentTarget = N;
            try {
              u(n);
            } catch (T) {
              su(T);
            }
            n.currentTarget = null, u = m;
          }
        }
      }
    }
    function ae(e, t) {
      var l = t[vi];
      l === void 0 && (l = t[vi] = /* @__PURE__ */ new Set());
      var a = e + "__bubble";
      l.has(a) || (rd(t, e, 2, false), l.add(a));
    }
    function ss(e, t, l) {
      var a = 0;
      t && (a |= 4), rd(l, e, a, t);
    }
    var Ju = "_reactListening" + Math.random().toString(36).slice(2);
    function fs(e) {
      if (!e[Ju]) {
        e[Ju] = true, tf.forEach(function(l) {
          l !== "selectionchange" && (Eh.has(l) || ss(l, false, e), ss(l, true, e));
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ju] || (t[Ju] = true, ss("selectionchange", false, t));
      }
    }
    function rd(e, t, l, a) {
      switch (Yd(t)) {
        case 2:
          var n = ty;
          break;
        case 8:
          n = ly;
          break;
        default:
          n = js;
      }
      l = n.bind(null, t, l, e), n = void 0, !Mi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (n = true), a ? n !== void 0 ? e.addEventListener(t, l, {
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
            if (i = ia(o), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue e;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
      hf(function() {
        var N = u, T = Ei(l), U = [];
        e: {
          var j = Xf.get(e);
          if (j !== void 0) {
            var z = uu, L = e;
            switch (e) {
              case "keypress":
                if (au(l) === 0) break e;
              case "keydown":
              case "keyup":
                z = v0;
                break;
              case "focusin":
                L = "focus", z = Ui;
                break;
              case "focusout":
                L = "blur", z = Ui;
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
                z = bf;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = s0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = N0;
                break;
              case qf:
              case Yf:
              case Lf:
                z = o0;
                break;
              case Gf:
                z = A0;
                break;
              case "scroll":
              case "scrollend":
                z = i0;
                break;
              case "wheel":
                z = E0;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = m0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = pf;
                break;
              case "toggle":
              case "beforetoggle":
                z = M0;
            }
            var Z = (t & 4) !== 0, Se = !Z && (e === "scroll" || e === "scrollend"), p = Z ? j !== null ? j + "Capture" : null : j;
            Z = [];
            for (var h = N, S; h !== null; ) {
              var D = h;
              if (S = D.stateNode, D = D.tag, D !== 5 && D !== 26 && D !== 27 || S === null || p === null || (D = Fa(h, p), D != null && Z.push(On(h, D, S))), Se) break;
              h = h.return;
            }
            0 < Z.length && (j = new z(j, L, null, l, T), U.push({
              event: j,
              listeners: Z
            }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (j = e === "mouseover" || e === "pointerover", z = e === "mouseout" || e === "pointerout", j && l !== zi && (L = l.relatedTarget || l.fromElement) && (ia(L) || L[ua])) break e;
            if ((z || j) && (j = T.window === T ? T : (j = T.ownerDocument) ? j.defaultView || j.parentWindow : window, z ? (L = l.relatedTarget || l.toElement, z = N, L = L ? ia(L) : null, L !== null && (Se = A(L), Z = L.tag, L !== Se || Z !== 5 && Z !== 27 && Z !== 6) && (L = null)) : (z = null, L = N), z !== L)) {
              if (Z = bf, D = "onMouseLeave", p = "onMouseEnter", h = "mouse", (e === "pointerout" || e === "pointerover") && (Z = pf, D = "onPointerLeave", p = "onPointerEnter", h = "pointer"), Se = z == null ? j : $a(z), S = L == null ? j : $a(L), j = new Z(D, h + "leave", z, l, T), j.target = Se, j.relatedTarget = S, D = null, ia(T) === N && (Z = new Z(p, h + "enter", L, l, T), Z.target = S, Z.relatedTarget = Se, D = Z), Se = D, z && L) t: {
                for (Z = Th, p = z, h = L, S = 0, D = p; D; D = Z(D)) S++;
                D = 0;
                for (var X = h; X; X = Z(X)) D++;
                for (; 0 < S - D; ) p = Z(p), S--;
                for (; 0 < D - S; ) h = Z(h), D--;
                for (; S--; ) {
                  if (p === h || h !== null && p === h.alternate) {
                    Z = p;
                    break t;
                  }
                  p = Z(p), h = Z(h);
                }
                Z = null;
              }
              else Z = null;
              z !== null && od(U, j, z, Z, false), L !== null && Se !== null && od(U, Se, L, Z, true);
            }
          }
          e: {
            if (j = N ? $a(N) : window, z = j.nodeName && j.nodeName.toLowerCase(), z === "select" || z === "input" && j.type === "file") var oe = Ef;
            else if (Af(j)) if (Tf) oe = Y0;
            else {
              oe = B0;
              var G = H0;
            }
            else z = j.nodeName, !z || z.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? N && Ai(N.elementType) && (oe = Ef) : oe = q0;
            if (oe && (oe = oe(e, N))) {
              zf(U, oe, l, T);
              break e;
            }
            G && G(e, j, N), e === "focusout" && N && j.type === "number" && N.memoizedProps.value != null && ji(j, "number", j.value);
          }
          switch (G = N ? $a(N) : window, e) {
            case "focusin":
              (Af(G) || G.contentEditable === "true") && (ya = G, Yi = N, un = null);
              break;
            case "focusout":
              un = Yi = ya = null;
              break;
            case "mousedown":
              Li = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Li = false, Hf(U, l, T);
              break;
            case "selectionchange":
              if (G0) break;
            case "keydown":
            case "keyup":
              Hf(U, l, T);
          }
          var ee;
          if (Ri) e: {
            switch (e) {
              case "compositionstart":
                var ie = "onCompositionStart";
                break e;
              case "compositionend":
                ie = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ie = "onCompositionUpdate";
                break e;
            }
            ie = void 0;
          }
          else ha ? Nf(e, l) && (ie = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ie = "onCompositionStart");
          ie && (vf && l.locale !== "ko" && (ha || ie !== "onCompositionStart" ? ie === "onCompositionEnd" && ha && (ee = yf()) : (gl = T, wi = "value" in gl ? gl.value : gl.textContent, ha = true)), G = Wu(N, ie), 0 < G.length && (ie = new _f(ie, e, null, l, T), U.push({
            event: ie,
            listeners: G
          }), ee ? ie.data = ee : (ee = jf(l), ee !== null && (ie.data = ee)))), (ee = O0 ? D0(e, l) : U0(e, l)) && (ie = Wu(N, "onBeforeInput"), 0 < ie.length && (G = new _f("onBeforeInput", "beforeinput", null, l, T), U.push({
            event: G,
            listeners: ie
          }), G.data = ee)), jh(U, e, N, l, T);
        }
        fd(U, t);
      });
    }
    function On(e, t, l) {
      return {
        instance: e,
        listener: t,
        currentTarget: l
      };
    }
    function Wu(e, t) {
      for (var l = t + "Capture", a = []; e !== null; ) {
        var n = e, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Fa(e, l), n != null && a.unshift(On(e, n, u)), n = Fa(e, t), n != null && a.push(On(e, n, u))), e.tag === 3) return a;
        e = e.return;
      }
      return [];
    }
    function Th(e) {
      if (e === null) return null;
      do
        e = e.return;
      while (e && e.tag !== 5 && e.tag !== 27);
      return e || null;
    }
    function od(e, t, l, a, n) {
      for (var u = t._reactName, i = []; l !== null && l !== a; ) {
        var o = l, m = o.alternate, N = o.stateNode;
        if (o = o.tag, m !== null && m === a) break;
        o !== 5 && o !== 26 && o !== 27 || N === null || (m = N, n ? (N = Fa(l, u), N != null && i.unshift(On(l, N, m))) : n || (N = Fa(l, u), N != null && i.push(On(l, N, m)))), l = l.return;
      }
      i.length !== 0 && e.push({
        event: t,
        listeners: i
      });
    }
    var Mh = /\r\n?/g, wh = /\u0000|\uFFFD/g;
    function dd(e) {
      return (typeof e == "string" ? e : "" + e).replace(Mh, `
`).replace(wh, "");
    }
    function md(e, t) {
      return t = dd(t), dd(e) === t;
    }
    function xe(e, t, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? t === "body" || t === "textarea" && a === "" || oa(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && oa(e, "" + a);
          break;
        case "className":
          Pn(e, "class", a);
          break;
        case "tabIndex":
          Pn(e, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Pn(e, l, a);
          break;
        case "style":
          df(e, a, u);
          break;
        case "data":
          if (t !== "object") {
            Pn(e, "data", a);
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
          a = tu("" + a), e.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (t !== "input" && xe(e, t, "name", n.name, n, null), xe(e, t, "formEncType", n.formEncType, n, null), xe(e, t, "formMethod", n.formMethod, n, null), xe(e, t, "formTarget", n.formTarget, n, null)) : (xe(e, t, "encType", n.encType, n, null), xe(e, t, "method", n.method, n, null), xe(e, t, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            e.removeAttribute(l);
            break;
          }
          a = tu("" + a), e.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (e.onclick = Jt);
          break;
        case "onScroll":
          a != null && ae("scroll", e);
          break;
        case "onScrollEnd":
          a != null && ae("scrollend", e);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(r(60));
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
          l = tu("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
          ae("beforetoggle", e), ae("toggle", e), In(e, "popover", a);
          break;
        case "xlinkActuate":
          Kt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Kt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Kt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Kt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Kt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Kt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Kt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          In(e, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = n0.get(l) || l, In(e, l, a));
      }
    }
    function os(e, t, l, a, n, u) {
      switch (l) {
        case "style":
          df(e, a, u);
          break;
        case "dangerouslySetInnerHTML":
          if (a != null) {
            if (typeof a != "object" || !("__html" in a)) throw Error(r(61));
            if (l = a.__html, l != null) {
              if (n.children != null) throw Error(r(60));
              e.innerHTML = l;
            }
          }
          break;
        case "children":
          typeof a == "string" ? oa(e, a) : (typeof a == "number" || typeof a == "bigint") && oa(e, "" + a);
          break;
        case "onScroll":
          a != null && ae("scroll", e);
          break;
        case "onScrollEnd":
          a != null && ae("scrollend", e);
          break;
        case "onClick":
          a != null && (e.onclick = Jt);
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
          if (!lf.hasOwnProperty(l)) e: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), t = l.slice(2, n ? l.length - 7 : void 0), u = e[lt] || null, u = u != null ? u[l] : null, typeof u == "function" && e.removeEventListener(t, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, n);
              break e;
            }
            l in e ? e[l] = a : a === true ? e.setAttribute(l, "") : In(e, l, a);
          }
      }
    }
    function We(e, t, l) {
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
          ae("error", e), ae("load", e);
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
                throw Error(r(137, t));
              default:
                xe(e, t, u, i, l, null);
            }
          }
          n && xe(e, t, "srcSet", l.srcSet, l, null), a && xe(e, t, "src", l.src, l, null);
          return;
        case "input":
          ae("invalid", e);
          var o = u = i = n = null, m = null, N = null;
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
                N = T;
                break;
              case "value":
                u = T;
                break;
              case "defaultValue":
                o = T;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(r(137, t));
                break;
              default:
                xe(e, t, a, T, l, null);
            }
          }
          sf(e, u, o, m, N, i, n, false);
          return;
        case "select":
          ae("invalid", e), a = i = u = null;
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
              xe(e, t, n, o, l, null);
          }
          t = u, l = i, e.multiple = !!a, t != null ? ra(e, !!a, t, false) : l != null && ra(e, !!a, l, true);
          return;
        case "textarea":
          ae("invalid", e), u = n = a = null;
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
              xe(e, t, i, o, l, null);
          }
          rf(e, a, n, u);
          return;
        case "option":
          for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : xe(e, t, m, a, l, null));
          return;
        case "dialog":
          ae("beforetoggle", e), ae("toggle", e), ae("cancel", e), ae("close", e);
          break;
        case "iframe":
        case "object":
          ae("load", e);
          break;
        case "video":
        case "audio":
          for (a = 0; a < wn.length; a++) ae(wn[a], e);
          break;
        case "image":
          ae("error", e), ae("load", e);
          break;
        case "details":
          ae("toggle", e);
          break;
        case "embed":
        case "source":
        case "link":
          ae("error", e), ae("load", e);
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
              throw Error(r(137, t));
            default:
              xe(e, t, N, a, l, null);
          }
          return;
        default:
          if (Ai(t)) {
            for (T in l) l.hasOwnProperty(T) && (a = l[T], a !== void 0 && os(e, t, T, a, l, void 0));
            return;
          }
      }
      for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && xe(e, t, o, a, l, null));
    }
    function Oh(e, t, l, a) {
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
          var n = null, u = null, i = null, o = null, m = null, N = null, T = null;
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
                a.hasOwnProperty(z) || xe(e, t, z, null, a, U);
            }
          }
          for (var j in a) {
            var z = a[j];
            if (U = l[j], a.hasOwnProperty(j) && (z != null || U != null)) switch (j) {
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
                T = z;
                break;
              case "value":
                i = z;
                break;
              case "defaultValue":
                o = z;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (z != null) throw Error(r(137, t));
                break;
              default:
                z !== U && xe(e, t, j, z, a, U);
            }
          }
          Ni(e, i, o, m, N, T, u, n);
          return;
        case "select":
          z = i = o = j = null;
          for (u in l) if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
            case "value":
              break;
            case "multiple":
              z = m;
            default:
              a.hasOwnProperty(u) || xe(e, t, u, null, a, m);
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
              u !== m && xe(e, t, n, u, a, m);
          }
          t = o, l = i, a = z, j != null ? ra(e, !!l, j, false) : !!a != !!l && (t != null ? ra(e, !!l, t, true) : ra(e, !!l, l ? [] : "", false));
          return;
        case "textarea":
          z = j = null;
          for (o in l) if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)) switch (o) {
            case "value":
              break;
            case "children":
              break;
            default:
              xe(e, t, o, null, a, n);
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
              n !== u && xe(e, t, i, n, a, u);
          }
          ff(e, j, z);
          return;
        case "option":
          for (var L in l) j = l[L], l.hasOwnProperty(L) && j != null && !a.hasOwnProperty(L) && (L === "selected" ? e.selected = false : xe(e, t, L, null, a, j));
          for (m in a) j = a[m], z = l[m], a.hasOwnProperty(m) && j !== z && (j != null || z != null) && (m === "selected" ? e.selected = j && typeof j != "function" && typeof j != "symbol" : xe(e, t, m, j, a, z));
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
          for (var Z in l) j = l[Z], l.hasOwnProperty(Z) && j != null && !a.hasOwnProperty(Z) && xe(e, t, Z, null, a, j);
          for (N in a) if (j = a[N], z = l[N], a.hasOwnProperty(N) && j !== z && (j != null || z != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (j != null) throw Error(r(137, t));
              break;
            default:
              xe(e, t, N, j, a, z);
          }
          return;
        default:
          if (Ai(t)) {
            for (var Se in l) j = l[Se], l.hasOwnProperty(Se) && j !== void 0 && !a.hasOwnProperty(Se) && os(e, t, Se, void 0, a, j);
            for (T in a) j = a[T], z = l[T], !a.hasOwnProperty(T) || j === z || j === void 0 && z === void 0 || os(e, t, T, j, a, z);
            return;
          }
      }
      for (var p in l) j = l[p], l.hasOwnProperty(p) && j != null && !a.hasOwnProperty(p) && xe(e, t, p, null, a, j);
      for (U in a) j = a[U], z = l[U], !a.hasOwnProperty(U) || j === z || j == null && z == null || xe(e, t, U, j, a, z);
    }
    function hd(e) {
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
    function Dh() {
      if (typeof performance.getEntriesByType == "function") {
        for (var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, o = n.duration;
          if (u && o && hd(i)) {
            for (i = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
              var m = l[a], N = m.startTime;
              if (N > o) break;
              var T = m.transferSize, U = m.initiatorType;
              T && hd(U) && (m = m.responseEnd, i += T * (m < o ? 1 : (o - N) / (m - N)));
            }
            if (--a, t += 8 * (u + i) / (n.duration / 1e3), e++, 10 < e) break;
          }
        }
        if (0 < e) return t / e / 1e6;
      }
      return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
    }
    var ds = null, ms = null;
    function $u(e) {
      return e.nodeType === 9 ? e : e.ownerDocument;
    }
    function yd(e) {
      switch (e) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function gd(e, t) {
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
    function hs(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ys = null;
    function Uh() {
      var e = window.event;
      return e && e.type === "popstate" ? e === ys ? false : (ys = e, true) : (ys = null, false);
    }
    var bd = typeof setTimeout == "function" ? setTimeout : void 0, Ch = typeof clearTimeout == "function" ? clearTimeout : void 0, _d = typeof Promise == "function" ? Promise : void 0, Rh = typeof queueMicrotask == "function" ? queueMicrotask : typeof _d < "u" ? function(e) {
      return _d.resolve(null).then(e).catch(Hh);
    } : bd;
    function Hh(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function Ul(e) {
      return e === "head";
    }
    function pd(e, t) {
      var l = t, a = 0;
      do {
        var n = l.nextSibling;
        if (e.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            e.removeChild(n), Xa(t);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") Dn(e.ownerDocument.documentElement);
        else if (l === "head") {
          l = e.ownerDocument.head, Dn(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, o = u.nodeName;
            u[Wa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && Dn(e.ownerDocument.body);
        l = n;
      } while (l);
      Xa(t);
    }
    function vd(e, t) {
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
            gs(l), xi(l);
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
    function Bh(e, t, l, a) {
      for (; e.nodeType === 1; ) {
        var n = l;
        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
        } else if (a) {
          if (!e[Wa]) switch (t) {
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
        if (e = Dt(e.nextSibling), e === null) break;
      }
      return null;
    }
    function qh(e, t, l) {
      if (t === "") return null;
      for (; e.nodeType !== 3; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = Dt(e.nextSibling), e === null)) return null;
      return e;
    }
    function xd(e, t) {
      for (; e.nodeType !== 8; ) if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Dt(e.nextSibling), e === null)) return null;
      return e;
    }
    function bs(e) {
      return e.data === "$?" || e.data === "$~";
    }
    function _s(e) {
      return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
    }
    function Yh(e, t) {
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
    function Dt(e) {
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
    function Sd(e) {
      e = e.nextSibling;
      for (var t = 0; e; ) {
        if (e.nodeType === 8) {
          var l = e.data;
          if (l === "/$" || l === "/&") {
            if (t === 0) return Dt(e.nextSibling);
            t--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
        }
        e = e.nextSibling;
      }
      return null;
    }
    function Nd(e) {
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
    function jd(e, t, l) {
      switch (t = $u(l), e) {
        case "html":
          if (e = t.documentElement, !e) throw Error(r(452));
          return e;
        case "head":
          if (e = t.head, !e) throw Error(r(453));
          return e;
        case "body":
          if (e = t.body, !e) throw Error(r(454));
          return e;
        default:
          throw Error(r(451));
      }
    }
    function Dn(e) {
      for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
      xi(e);
    }
    var Ut = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new Set();
    function Fu(e) {
      return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
    }
    var rl = B.d;
    B.d = {
      f: Lh,
      r: Gh,
      D: Xh,
      C: Qh,
      L: Zh,
      m: Vh,
      X: Kh,
      S: kh,
      M: Jh
    };
    function Lh() {
      var e = rl.f(), t = Xu();
      return e || t;
    }
    function Gh(e) {
      var t = ca(e);
      t !== null && t.tag === 5 && t.type === "form" ? Gr(t) : rl.r(e);
    }
    var Ya = typeof document > "u" ? null : document;
    function zd(e, t, l) {
      var a = Ya;
      if (a && typeof t == "string" && t) {
        var n = At(t);
        n = 'link[rel="' + e + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), Ad.has(n) || (Ad.add(n), e = {
          rel: e,
          crossOrigin: l,
          href: t
        }, a.querySelector(n) === null && (t = a.createElement("link"), We(t, "link", e), Xe(t), a.head.appendChild(t)));
      }
    }
    function Xh(e) {
      rl.D(e), zd("dns-prefetch", e, null);
    }
    function Qh(e, t) {
      rl.C(e, t), zd("preconnect", e, t);
    }
    function Zh(e, t, l) {
      rl.L(e, t, l);
      var a = Ya;
      if (a && e && t) {
        var n = 'link[rel="preload"][as="' + At(t) + '"]';
        t === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + At(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + At(l.imageSizes) + '"]')) : n += '[href="' + At(e) + '"]';
        var u = n;
        switch (t) {
          case "style":
            u = La(e);
            break;
          case "script":
            u = Ga(e);
        }
        Ut.has(u) || (e = R({
          rel: "preload",
          href: t === "image" && l && l.imageSrcSet ? void 0 : e,
          as: t
        }, l), Ut.set(u, e), a.querySelector(n) !== null || t === "style" && a.querySelector(Un(u)) || t === "script" && a.querySelector(Cn(u)) || (t = a.createElement("link"), We(t, "link", e), Xe(t), a.head.appendChild(t)));
      }
    }
    function Vh(e, t) {
      rl.m(e, t);
      var l = Ya;
      if (l && e) {
        var a = t && typeof t.as == "string" ? t.as : "script", n = 'link[rel="modulepreload"][as="' + At(a) + '"][href="' + At(e) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Ga(e);
        }
        if (!Ut.has(u) && (e = R({
          rel: "modulepreload",
          href: e
        }, t), Ut.set(u, e), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Cn(u))) return;
          }
          a = l.createElement("link"), We(a, "link", e), Xe(a), l.head.appendChild(a);
        }
      }
    }
    function kh(e, t, l) {
      rl.S(e, t, l);
      var a = Ya;
      if (a && e) {
        var n = sa(a).hoistableStyles, u = La(e);
        t = t || "default";
        var i = n.get(u);
        if (!i) {
          var o = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(Un(u))) o.loading = 5;
          else {
            e = R({
              rel: "stylesheet",
              href: e,
              "data-precedence": t
            }, l), (l = Ut.get(u)) && vs(e, l);
            var m = i = a.createElement("link");
            Xe(m), We(m, "link", e), m._p = new Promise(function(N, T) {
              m.onload = N, m.onerror = T;
            }), m.addEventListener("load", function() {
              o.loading |= 1;
            }), m.addEventListener("error", function() {
              o.loading |= 2;
            }), o.loading |= 4, Iu(i, t, a);
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
    function Kh(e, t) {
      rl.X(e, t);
      var l = Ya;
      if (l && e) {
        var a = sa(l).hoistableScripts, n = Ga(e), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (e = R({
          src: e,
          async: true
        }, t), (t = Ut.get(n)) && xs(e, t), u = l.createElement("script"), Xe(u), We(u, "link", e), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Jh(e, t) {
      rl.M(e, t);
      var l = Ya;
      if (l && e) {
        var a = sa(l).hoistableScripts, n = Ga(e), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (e = R({
          src: e,
          async: true,
          type: "module"
        }, t), (t = Ut.get(n)) && xs(e, t), u = l.createElement("script"), Xe(u), We(u, "link", e), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Ed(e, t, l, a) {
      var n = (n = k.current) ? Fu(n) : null;
      if (!n) throw Error(r(446));
      switch (e) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (t = La(l.href), l = sa(n).hoistableStyles, a = l.get(t), a || (a = {
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
            var u = sa(n).hoistableStyles, i = u.get(e);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(e, i), (u = n.querySelector(Un(e))) && !u._p && (i.instance = u, i.state.loading = 5), Ut.has(e) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, Ut.set(e, l), u || Wh(n, e, l, i.state))), t && a === null) throw Error(r(528, ""));
            return i;
          }
          if (t && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Ga(l), l = sa(n).hoistableScripts, a = l.get(t), a || (a = {
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
          throw Error(r(444, e));
      }
    }
    function La(e) {
      return 'href="' + At(e) + '"';
    }
    function Un(e) {
      return 'link[rel="stylesheet"][' + e + "]";
    }
    function Td(e) {
      return R({}, e, {
        "data-precedence": e.precedence,
        precedence: null
      });
    }
    function Wh(e, t, l, a) {
      e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
        return a.loading |= 1;
      }), t.addEventListener("error", function() {
        return a.loading |= 2;
      }), We(t, "link", l), Xe(t), e.head.appendChild(t));
    }
    function Ga(e) {
      return '[src="' + At(e) + '"]';
    }
    function Cn(e) {
      return "script[async]" + e;
    }
    function Md(e, t, l) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + At(l.href) + '"]');
          if (a) return t.instance = a, Xe(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement("style"), Xe(a), We(a, "style", n), Iu(a, l.precedence, e), t.instance = a;
        case "stylesheet":
          n = La(l.href);
          var u = e.querySelector(Un(n));
          if (u) return t.state.loading |= 4, t.instance = u, Xe(u), u;
          a = Td(l), (n = Ut.get(n)) && vs(a, n), u = (e.ownerDocument || e).createElement("link"), Xe(u);
          var i = u;
          return i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), We(u, "link", a), t.state.loading |= 4, Iu(u, l.precedence, e), t.instance = u;
        case "script":
          return u = Ga(l.src), (n = e.querySelector(Cn(u))) ? (t.instance = n, Xe(n), n) : (a = l, (n = Ut.get(u)) && (a = R({}, l), xs(a, n)), e = e.ownerDocument || e, n = e.createElement("script"), Xe(n), We(n, "link", a), e.head.appendChild(n), t.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Iu(a, l.precedence, e));
      return t.instance;
    }
    function Iu(e, t, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var o = a[i];
        if (o.dataset.precedence === t) u = o;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
    }
    function vs(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
    }
    function xs(e, t) {
      e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
    }
    var Pu = null;
    function wd(e, t, l) {
      if (Pu === null) {
        var a = /* @__PURE__ */ new Map(), n = Pu = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = Pu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(e)) return a;
      for (a.set(e, null), l = l.getElementsByTagName(e), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[Wa] || u[Ve] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
    function Od(e, t, l) {
      e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
    }
    function $h(e, t, l) {
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
    function Dd(e) {
      return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
    }
    function Fh(e, t, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = La(a.href), u = t.querySelector(Un(n));
          if (u) {
            t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = ei.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = u, Xe(u);
            return;
          }
          u = t.ownerDocument || t, a = Td(a), (n = Ut.get(n)) && vs(a, n), u = u.createElement("link"), Xe(u);
          var i = u;
          i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), We(u, "link", a), l.instance = u;
        }
        e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = ei.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
      }
    }
    var Ss = 0;
    function Ih(e, t) {
      return e.stylesheets && e.count === 0 && li(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (e.stylesheets && li(e, e.stylesheets), e.unsuspend) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, 6e4 + t);
        0 < e.imgBytes && Ss === 0 && (Ss = 62500 * Dh());
        var n = setTimeout(function() {
          if (e.waitingForImages = false, e.count === 0 && (e.stylesheets && li(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        }, (e.imgBytes > Ss ? 50 : 800) + t);
        return e.unsuspend = l, function() {
          e.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function ei() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) li(this, this.stylesheets);
        else if (this.unsuspend) {
          var e = this.unsuspend;
          this.unsuspend = null, e();
        }
      }
    }
    var ti = null;
    function li(e, t) {
      e.stylesheets = null, e.unsuspend !== null && (e.count++, ti = /* @__PURE__ */ new Map(), t.forEach(Ph, e), ti = null, ei.call(e));
    }
    function Ph(e, t) {
      if (!(t.state.loading & 4)) {
        var l = ti.get(e);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), ti.set(e, l);
          for (var n = e.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
          }
          a && l.set(null, a);
        }
        n = t.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = ei.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(n, e.firstChild)), t.state.loading |= 4;
      }
    }
    var Rn = {
      $$typeof: te,
      Provider: null,
      Consumer: null,
      _currentValue: V,
      _currentValue2: V,
      _threadCount: 0
    };
    function ey(e, t, l, a, n, u, i, o, m) {
      this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bi(0), this.hiddenUpdates = bi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Ud(e, t, l, a, n, u, i, o, m, N, T, U) {
      return e = new ey(e, t, l, i, m, N, T, U, o), t = 1, u === true && (t |= 24), u = ht(3, null, null, t), e.current = u, u.stateNode = e, t = tc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: t
      }, uc(u), e;
    }
    function Cd(e) {
      return e ? (e = _a, e) : _a;
    }
    function Rd(e, t, l, a, n, u) {
      n = Cd(n), a.context === null ? a.context = n : a.pendingContext = n, a = Sl(t), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Nl(e, a, t), l !== null && (st(l, e, t), mn(l, e, t));
    }
    function Hd(e, t) {
      if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var l = e.retryLane;
        e.retryLane = l !== 0 && l < t ? l : t;
      }
    }
    function Ns(e, t) {
      Hd(e, t), (e = e.alternate) && Hd(e, t);
    }
    function Bd(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = Zl(e, 67108864);
        t !== null && st(t, e, 67108864), Ns(e, 67108864);
      }
    }
    function qd(e) {
      if (e.tag === 13 || e.tag === 31) {
        var t = pt();
        t = _i(t);
        var l = Zl(e, t);
        l !== null && st(l, e, t), Ns(e, t);
      }
    }
    var ai = true;
    function ty(e, t, l, a) {
      var n = w.T;
      w.T = null;
      var u = B.p;
      try {
        B.p = 2, js(e, t, l, a);
      } finally {
        B.p = u, w.T = n;
      }
    }
    function ly(e, t, l, a) {
      var n = w.T;
      w.T = null;
      var u = B.p;
      try {
        B.p = 8, js(e, t, l, a);
      } finally {
        B.p = u, w.T = n;
      }
    }
    function js(e, t, l, a) {
      if (ai) {
        var n = As(a);
        if (n === null) rs(e, t, a, ni, l), Ld(e, a);
        else if (ny(n, e, t, l, a)) a.stopPropagation();
        else if (Ld(e, a), t & 4 && -1 < ay.indexOf(e)) {
          for (; n !== null; ) {
            var u = ca(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Yl(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - dt(i);
                      o.entanglements[1] |= m, i &= ~m;
                    }
                    Xt(u), (me & 6) === 0 && (Lu = rt() + 500, Mn(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Zl(u, 2), o !== null && st(o, u, 2), Xu(), Ns(u, 2);
            }
            if (u = As(a), u === null && rs(e, t, a, ni, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else rs(e, t, a, null, l);
      }
    }
    function As(e) {
      return e = Ei(e), zs(e);
    }
    var ni = null;
    function zs(e) {
      if (ni = null, e = ia(e), e !== null) {
        var t = A(e);
        if (t === null) e = null;
        else {
          var l = t.tag;
          if (l === 13) {
            if (e = x(t), e !== null) return e;
            e = null;
          } else if (l === 31) {
            if (e = _(t), e !== null) return e;
            e = null;
          } else if (l === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        }
      }
      return ni = e, null;
    }
    function Yd(e) {
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
          switch (Xm()) {
            case Vs:
              return 2;
            case ks:
              return 8;
            case Kn:
            case Qm:
              return 32;
            case Ks:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var Es = false, Cl = null, Rl = null, Hl = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Bl = [], ay = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ld(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Cl = null;
          break;
        case "dragenter":
        case "dragleave":
          Rl = null;
          break;
        case "mouseover":
        case "mouseout":
          Hl = null;
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
      }, t !== null && (t = ca(t), t !== null && Bd(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, n !== null && t.indexOf(n) === -1 && t.push(n), e);
    }
    function ny(e, t, l, a, n) {
      switch (t) {
        case "focusin":
          return Cl = qn(Cl, e, t, l, a, n), true;
        case "dragenter":
          return Rl = qn(Rl, e, t, l, a, n), true;
        case "mouseover":
          return Hl = qn(Hl, e, t, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Hn.set(u, qn(Hn.get(u) || null, e, t, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Bn.set(u, qn(Bn.get(u) || null, e, t, l, a, n)), true;
      }
      return false;
    }
    function Gd(e) {
      var t = ia(e.target);
      if (t !== null) {
        var l = A(t);
        if (l !== null) {
          if (t = l.tag, t === 13) {
            if (t = x(l), t !== null) {
              e.blockedOn = t, Ps(e.priority, function() {
                qd(l);
              });
              return;
            }
          } else if (t === 31) {
            if (t = _(l), t !== null) {
              e.blockedOn = t, Ps(e.priority, function() {
                qd(l);
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
    function ui(e) {
      if (e.blockedOn !== null) return false;
      for (var t = e.targetContainers; 0 < t.length; ) {
        var l = As(e.nativeEvent);
        if (l === null) {
          l = e.nativeEvent;
          var a = new l.constructor(l.type, l);
          zi = a, l.target.dispatchEvent(a), zi = null;
        } else return t = ca(l), t !== null && Bd(t), e.blockedOn = l, false;
        t.shift();
      }
      return true;
    }
    function Xd(e, t, l) {
      ui(e) && l.delete(t);
    }
    function uy() {
      Es = false, Cl !== null && ui(Cl) && (Cl = null), Rl !== null && ui(Rl) && (Rl = null), Hl !== null && ui(Hl) && (Hl = null), Hn.forEach(Xd), Bn.forEach(Xd);
    }
    function ii(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Es || (Es = true, s.unstable_scheduleCallback(s.unstable_NormalPriority, uy)));
    }
    var ci = null;
    function Qd(e) {
      ci !== e && (ci = e, s.unstable_scheduleCallback(s.unstable_NormalPriority, function() {
        ci === e && (ci = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t], a = e[t + 1], n = e[t + 2];
          if (typeof a != "function") {
            if (zs(a || l) === null) continue;
            break;
          }
          var u = ca(l);
          u !== null && (e.splice(t, 3), t -= 3, Ac(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Xa(e) {
      function t(m) {
        return ii(m, e);
      }
      Cl !== null && ii(Cl, e), Rl !== null && ii(Rl, e), Hl !== null && ii(Hl, e), Hn.forEach(t), Bn.forEach(t);
      for (var l = 0; l < Bl.length; l++) {
        var a = Bl[l];
        a.blockedOn === e && (a.blockedOn = null);
      }
      for (; 0 < Bl.length && (l = Bl[0], l.blockedOn === null); ) Gd(l), l.blockedOn === null && Bl.shift();
      if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[lt] || null;
        if (typeof u == "function") i || Qd(l);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[lt] || null) o = i.formAction;
            else if (zs(n) !== null) continue;
          } else o = i.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Qd(l);
        }
      }
    }
    function Zd() {
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
    si.prototype.render = Ts.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var l = t.current, a = pt();
      Rd(l, a, e, t, null, null);
    }, si.prototype.unmount = Ts.prototype.unmount = function() {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Rd(e.current, 2, null, e, null, null), Xu(), t[ua] = null;
      }
    };
    function si(e) {
      this._internalRoot = e;
    }
    si.prototype.unstable_scheduleHydration = function(e) {
      if (e) {
        var t = Is();
        e = {
          blockedOn: null,
          target: e,
          priority: t
        };
        for (var l = 0; l < Bl.length && t !== 0 && t < Bl[l].priority; l++) ;
        Bl.splice(l, 0, e), l === 0 && Gd(e);
      }
    };
    var Vd = f.version;
    if (Vd !== "19.2.3") throw Error(r(527, Vd, "19.2.3"));
    B.findDOMNode = function(e) {
      var t = e._reactInternals;
      if (t === void 0) throw typeof e.render == "function" ? Error(r(188)) : (e = Object.keys(e).join(","), Error(r(268, e)));
      return e = y(t), e = e !== null ? O(e) : null, e = e === null ? null : e.stateNode, e;
    };
    var iy = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: w,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!fi.isDisabled && fi.supportsFiber) try {
        ka = fi.inject(iy), ot = fi;
      } catch {
      }
    }
    return Ln.createRoot = function(e, t) {
      if (!b(e)) throw Error(r(299));
      var l = false, a = "", n = Fr, u = Ir, i = Pr;
      return t != null && (t.unstable_strictMode === true && (l = true), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (n = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), t = Ud(e, 1, false, null, null, l, a, null, n, u, i, Zd), e[ua] = t.current, fs(e), new Ts(t);
    }, Ln.hydrateRoot = function(e, t, l) {
      if (!b(e)) throw Error(r(299));
      var a = false, n = "", u = Fr, i = Ir, o = Pr, m = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), t = Ud(e, 1, true, t, l ?? null, a, n, m, u, i, o, Zd), t.context = Cd(null), l = t.current, a = pt(), a = _i(a), n = Sl(a), n.callback = null, Nl(l, n, a), l = a, t.current.lanes = l, Ja(t, l), Xt(t), e[ua] = t.current, fs(e), new si(t);
    }, Ln.version = "19.2.3", Ln;
  }
  var tm;
  function by() {
    if (tm) return Os.exports;
    tm = 1;
    function s() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s);
      } catch (f) {
        console.error(f);
      }
    }
    return s(), Os.exports = gy(), Os.exports;
  }
  var _y = by();
  const py = Sm(_y), vy = "modulepreload", xy = function(s, f) {
    return new URL(s, f).href;
  }, lm = {}, Rs = function(f, d, r) {
    let b = Promise.resolve();
    if (d && d.length > 0) {
      let y = function(O) {
        return Promise.all(O.map((R) => Promise.resolve(R).then((q) => ({
          status: "fulfilled",
          value: q
        }), (q) => ({
          status: "rejected",
          reason: q
        }))));
      };
      const x = document.getElementsByTagName("link"), _ = document.querySelector("meta[property=csp-nonce]"), v = (_ == null ? void 0 : _.nonce) || (_ == null ? void 0 : _.getAttribute("nonce"));
      b = y(d.map((O) => {
        if (O = xy(O, r), O in lm) return;
        lm[O] = true;
        const R = O.endsWith(".css"), q = R ? '[rel="stylesheet"]' : "";
        if (r) for (let fe = x.length - 1; fe >= 0; fe--) {
          const pe = x[fe];
          if (pe.href === O && (!R || pe.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${O}"]${q}`)) return;
        const I = document.createElement("link");
        if (I.rel = R ? "stylesheet" : vy, R || (I.as = "script"), I.crossOrigin = "", I.href = O, v && I.setAttribute("nonce", v), document.head.appendChild(I), R) return new Promise((fe, pe) => {
          I.addEventListener("load", fe), I.addEventListener("error", () => pe(new Error(`Unable to preload CSS for ${O}`)));
        });
      }));
    }
    function A(x) {
      const _ = new Event("vite:preloadError", {
        cancelable: true
      });
      if (_.payload = x, window.dispatchEvent(_), !_.defaultPrevented) throw x;
    }
    return b.then((x) => {
      for (const _ of x || []) _.status === "rejected" && A(_.reason);
      return f().catch(A);
    });
  };
  const Sy = (s) => s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Ny = (s) => s.replace(/^([A-Z])|[\s-_]+(\w)/g, (f, d, r) => r ? r.toUpperCase() : d.toLowerCase()), am = (s) => {
    const f = Ny(s);
    return f.charAt(0).toUpperCase() + f.slice(1);
  }, Nm = (...s) => s.filter((f, d, r) => !!f && f.trim() !== "" && r.indexOf(f) === d).join(" ").trim(), jy = (s) => {
    for (const f in s) if (f.startsWith("aria-") || f === "role" || f === "title") return true;
  };
  var Ay = {
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
  const zy = he.forwardRef(({ color: s = "currentColor", size: f = 24, strokeWidth: d = 2, absoluteStrokeWidth: r, className: b = "", children: A, iconNode: x, ..._ }, v) => he.createElement("svg", {
    ref: v,
    ...Ay,
    width: f,
    height: f,
    stroke: s,
    strokeWidth: r ? Number(d) * 24 / Number(f) : d,
    className: Nm("lucide", b),
    ...!A && !jy(_) && {
      "aria-hidden": "true"
    },
    ..._
  }, [
    ...x.map(([y, O]) => he.createElement(y, O)),
    ...Array.isArray(A) ? A : [
      A
    ]
  ]));
  const Ae = (s, f) => {
    const d = he.forwardRef(({ className: r, ...b }, A) => he.createElement(zy, {
      ref: A,
      iconNode: f,
      className: Nm(`lucide-${Sy(am(s))}`, `lucide-${s}`, r),
      ...b
    }));
    return d.displayName = am(s), d;
  };
  const Ey = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], nm = Ae("activity", Ey);
  const Ty = [
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
  ], My = Ae("book-open", Ty);
  const wy = [
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
  ], Oy = Ae("building-2", wy);
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
  ], Uy = Ae("bug", Dy);
  const Cy = [
    [
      "path",
      {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
      }
    ]
  ], Ry = Ae("chevron-down", Cy);
  const Hy = [
    [
      "path",
      {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }
    ]
  ], By = Ae("chevron-right", Hy);
  const qy = [
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
  ], jm = Ae("clock", qy);
  const Yy = [
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
  ], Ly = Ae("download", Yy);
  const Gy = [
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
  ], um = Ae("file-text", Gy);
  const Xy = [
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
  ], Qy = Ae("guitar", Xy);
  const Zy = [
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
  ], Am = Ae("hash", Zy);
  const Vy = [
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
  ], ky = Ae("image", Vy);
  const Ky = [
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
  ], Jy = Ae("info", Ky);
  const Wy = [
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
  ], im = Ae("key-round", Wy);
  const $y = [
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
  ], Fy = Ae("log-out", $y);
  const Iy = [
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
  ], Py = Ae("mic", Iy);
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
  ], tg = Ae("monitor", eg);
  const lg = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], ag = Ae("moon", lg);
  const ng = [
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
  ], Vn = Ae("music", ng);
  const ug = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], ig = Ae("play", ug);
  const cg = [
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
  ], ol = Ae("plus", cg);
  const sg = [
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
  ], fg = Ae("sticky-note", sg);
  const rg = [
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
  ], og = Ae("sun", rg);
  const dg = [
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
  ], Zt = Ae("trash-2", dg);
  const mg = [
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
  ], cm = Ae("trending-up", mg);
  const hg = [
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
  ], zm = Ae("upload", hg);
  const yg = [
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
  ], gg = Ae("users-round", yg);
  function bg({ file: s, onFileUpload: f, isParsingMetadata: d = false, metadataSummary: r }) {
    const b = (A) => {
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
                  children: c.jsx(um, {
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
            c.jsx(um, {
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
    const d = Object.values(s).filter((A) => typeof A == "string" && A.trim().length > 0).length, r = sm.length + fm.length + rm.length + om.length + 1, b = ({ key: A, label: x, placeholder: _, type: v, colSpan: y }) => {
      const O = s[A], R = typeof O == "string" || typeof O == "number" ? O : "";
      return c.jsxs("div", {
        className: `space-y-2 ${y === "full" ? "md:col-span-2" : ""}`,
        children: [
          c.jsx("label", {
            htmlFor: A,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: x
          }),
          c.jsx("input", {
            id: A,
            value: R,
            onChange: (q) => f(A, v === "number" ? parseInt(q.target.value) || void 0 : q.target.value),
            placeholder: _,
            type: v ?? "text",
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
                  children: sm.map(b)
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
                  children: fm.map(b)
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
                  children: rm.map(b)
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
                  children: om.map(b)
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
  ], pg = [
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
  function vg({ pictures: s = [], onPicturesChange: f, coverVariants: d = [], onCoverVariantsChange: r, animatedCover: b, onAnimatedCoverChange: A }) {
    const x = async (J, K) => {
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
        const te = await W.arrayBuffer(), Q = new Uint8Array(te), Ne = {
          mime_type: W.type,
          picture_type: K,
          description: `${(_b = dm.find((F) => F.value === K)) == null ? void 0 : _b.label} Art`,
          data: Q
        }, Ce = s.filter((F) => F.picture_type !== K);
        Ce.push(Ne), f(Ce);
      }
    }, _ = (J) => {
      f(s.filter((K) => K.picture_type !== J));
    }, v = () => {
      r([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, y = async (J, K) => {
      var _a;
      const W = (_a = K.target.files) == null ? void 0 : _a[0];
      if (W) {
        if (!W.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const te = await W.arrayBuffer(), Q = [
          ...d
        ];
        Q[J].data = new Uint8Array(te), Q[J].mime_type = W.type, r(Q);
      }
    }, O = (J, K, W) => {
      const te = [
        ...d
      ];
      te[J] = {
        ...te[J],
        [K]: W
      }, r(te);
    }, R = (J) => {
      r(d.filter((K, W) => W !== J));
    }, q = async (J) => {
      var _a;
      const K = (_a = J.target.files) == null ? void 0 : _a[0];
      if (K) {
        if (!K.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const W = await K.arrayBuffer(), te = new Uint8Array(W), Q = {
          mime_type: K.type,
          data: te,
          duration_ms: 3e3,
          loop_count: 0
        };
        A(Q);
      }
    }, I = (J, K) => {
      b && A({
        ...b,
        [J]: K
      });
    }, fe = () => {
      A(void 0);
    }, pe = (J, K) => URL.createObjectURL(new Blob([
      J
    ], {
      type: K
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
                  children: dm.map(({ value: J, label: K }) => {
                    const W = s.find((te) => te.picture_type === J);
                    return c.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: W ? c.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          c.jsx("img", {
                            src: pe(W.data, W.mime_type),
                            alt: K,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          c.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              c.jsx("span", {
                                className: "text-sm font-medium",
                                children: K
                              }),
                              c.jsx("button", {
                                onClick: () => _(J),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: c.jsx(Zt, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : c.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          c.jsx(ol, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          c.jsx("span", {
                            className: "text-xs font-medium",
                            children: K
                          }),
                          c.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (te) => x(te, J),
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
                      onClick: v,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        c.jsx(ol, {
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
                      c.jsx(ky, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      c.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : d.map((J, K) => c.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      c.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          c.jsx("select", {
                            value: J.variant_type,
                            onChange: (W) => O(K, "variant_type", W.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: pg.map(({ value: W, label: te }) => c.jsx("option", {
                              value: W,
                              children: te
                            }, W))
                          }),
                          c.jsx("input", {
                            value: J.description || "",
                            onChange: (W) => O(K, "description", W.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          c.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              c.jsx(zm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              c.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (W) => y(K, W),
                                className: "hidden"
                              })
                            ]
                          }),
                          c.jsx("button", {
                            onClick: () => R(K),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: c.jsx(Zt, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      J.data.length > 0 && c.jsx("img", {
                        src: pe(J.data, J.mime_type),
                        alt: J.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, K))
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
                      src: pe(b.data, b.mime_type),
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
                              onChange: (J) => I("duration_ms", parseInt(J.target.value) || 0),
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
                              onChange: (J) => I("loop_count", parseInt(J.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    c.jsxs("button", {
                      onClick: fe,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        c.jsx(Zt, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : c.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    c.jsx(ig, {
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
  const ri = {
    type: 1,
    text: [],
    timestampFormat: 2,
    language: "eng",
    description: "Synced Lyrics"
  }, mm = {
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
  function xg({ syncedLyrics: s = [], onSyncedLyricsChange: f, lrcText: d, onLrcTextChange: r, onImport: b, unsyncedLyrics: A, onUnsyncedLyricsChange: x }) {
    var _a, _b;
    const _ = s.length > 0 ? s[0] : {
      ...ri,
      lines: []
    }, v = () => {
      const R = [
        ...s
      ];
      R.length === 0 ? R.push({
        content_type: "lyrics",
        lines: [
          {
            text: "",
            timestamp_ms: 0
          }
        ]
      }) : R[0].lines.push({
        text: "",
        timestamp_ms: 0
      }), f(R);
    }, y = (R, q, I) => {
      const fe = [
        ...s
      ];
      fe.length > 0 && (fe[0].lines[R] = {
        text: q,
        timestamp_ms: I
      }, f(fe));
    }, O = (R) => {
      const q = [
        ...s
      ];
      q.length > 0 && (q[0].lines.splice(R, 1), f(q));
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
                  children: "Lyrics"
                }),
                c.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Lyrics & Sync"
                })
              ]
            }),
            c.jsxs("span", {
              className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
              children: [
                ((_a = _.lines) == null ? void 0 : _a.length) || 0,
                " entries"
              ]
            })
          ]
        }),
        c.jsxs("div", {
          className: "space-y-4",
          children: [
            c.jsxs("div", {
              className: "space-y-2",
              children: [
                c.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-2",
                  children: [
                    c.jsxs("div", {
                      children: [
                        c.jsx("p", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Import from LRC"
                        }),
                        c.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Paste a timestamped block and drop it straight into SYLT."
                        })
                      ]
                    }),
                    c.jsxs("button", {
                      onClick: b,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        c.jsx(zm, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Convert SYLT"
                      ]
                    })
                  ]
                }),
                c.jsx("textarea", {
                  value: d,
                  onChange: (R) => r(R.target.value),
                  rows: 4,
                  placeholder: "[00:01.40]First line\\n[00:08.50]Next line",
                  className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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
                      value: _.language || "",
                      onChange: (R) => {
                        const q = [
                          ...s
                        ];
                        q.length > 0 && (q[0].language = R.target.value, f(q));
                      },
                      placeholder: "eng",
                      maxLength: 3,
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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
                      value: A,
                      onChange: (R) => x(R.target.value),
                      rows: 4,
                      placeholder: "Paste the full lyric sheet if you don\u2019t need timestamps.",
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
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
                      onClick: v,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        c.jsx(ol, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                c.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = _.lines) == null ? void 0 : _b.map((R, q) => c.jsx(Sg, {
                    index: q,
                    text: R.text,
                    timestamp: R.timestamp_ms,
                    onUpdate: y,
                    onDelete: O
                  }, q))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function Sg({ index: s, text: f, timestamp: d, onUpdate: r, onDelete: b }) {
    return c.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        c.jsx("input", {
          value: f,
          onChange: (A) => r(s, A.target.value, d),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        }),
        c.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            c.jsx(jm, {
              className: "h-4 w-4 icon-accent"
            }),
            c.jsx("input", {
              type: "number",
              value: d,
              onChange: (A) => r(s, f, parseInt(A.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        }),
        c.jsx("button", {
          onClick: () => b(s),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          children: c.jsx(Zt, {
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
      icon: Vn
    },
    {
      value: "verse",
      label: "Verse",
      icon: My
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: Py
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: Oy
    },
    {
      value: "solo",
      label: "Solo",
      icon: Qy
    },
    {
      value: "outro",
      label: "Outro",
      icon: Fy
    }
  ];
  function Ng({ sectionMarkers: s = [], onSectionMarkersChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, r = (x, _, v) => {
      const y = [
        ...s
      ];
      y[x] = {
        ...y[x],
        [_]: v
      }, f(y);
    }, b = (x) => {
      f(s.filter((_, v) => v !== x));
    }, A = (x) => {
      const _ = Math.floor(x / 1e3), v = Math.floor(_ / 60), y = _ % 60, O = Math.floor(x % 1e3 / 10);
      return `${v}:${y.toString().padStart(2, "0")}.${O.toString().padStart(2, "0")}`;
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
                c.jsx(ol, {
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
              c.jsx(Vn, {
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
          }) : s.map((x, _) => {
            var _a;
            const y = ((_a = hm.find((O) => O.value === x.section_type)) == null ? void 0 : _a.icon) || Vn;
            return c.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                c.jsx(y, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                c.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    c.jsx(jm, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    c.jsx("input", {
                      type: "number",
                      value: x.timestamp_ms,
                      onChange: (O) => r(_, "timestamp_ms", Math.max(0, parseInt(O.target.value) || 0)),
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
                  onChange: (O) => r(_, "section_type", O.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: hm.map(({ value: O, label: R }) => c.jsx("option", {
                    value: O,
                    children: R
                  }, O))
                }),
                c.jsx("input", {
                  value: x.label || "",
                  onChange: (O) => r(_, "label", O.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                c.jsx("button", {
                  onClick: () => b(_),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: c.jsx(Zt, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, _);
          })
        })
      ]
    });
  }
  function jg({ bpmMap: s = [], onBpmMapChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, r = (_, v, y) => {
      const O = [
        ...s
      ];
      O[_] = {
        ...O[_],
        [v]: y
      }, f(O);
    }, b = (_) => {
      f(s.filter((v, y) => y !== _));
    }, A = (_) => {
      const v = Math.floor(_ / 1e3), y = Math.floor(v / 60), O = v % 60;
      return `${y}:${O.toString().padStart(2, "0")}`;
    }, x = [
      ...s
    ].sort((_, v) => _.timestamp_ms - v.timestamp_ms);
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
                c.jsx(ol, {
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
                  c.jsx(nm, {
                    className: "h-4 w-4"
                  }),
                  c.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      x.map((_, v) => `${A(_.timestamp_ms)} \u2192 ${_.bpm} BPM${v < x.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              x.map((_, v) => c.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  c.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      c.jsx(nm, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      c.jsx("input", {
                        type: "number",
                        value: _.timestamp_ms,
                        onChange: (y) => r(v, "timestamp_ms", Math.max(0, parseInt(y.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          A(_.timestamp_ms),
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
                        value: _.bpm,
                        onChange: (y) => r(v, "bpm", Math.max(1, parseFloat(y.target.value) || 120)),
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
                    onClick: () => b(v),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: c.jsx(Zt, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, v))
            ]
          })
        })
      ]
    });
  }
  function Ag({ keyChanges: s = [], onKeyChangesChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: 0,
          key: ""
        }
      ]);
    }, r = (_, v, y) => {
      const O = [
        ...s
      ];
      O[_] = {
        ...O[_],
        [v]: y
      }, f(O);
    }, b = (_) => {
      f(s.filter((v, y) => y !== _));
    }, A = (_) => {
      const v = Math.floor(_ / 1e3), y = Math.floor(v / 60), O = v % 60;
      return `${y}:${O.toString().padStart(2, "0")}`;
    }, x = [
      ...s
    ].sort((_, v) => _.timestamp_ms - v.timestamp_ms);
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
                c.jsx(ol, {
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
                  c.jsx(Am, {
                    className: "h-4 w-4"
                  }),
                  c.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      x.map((_, v) => `${A(_.timestamp_ms)} \u2192 ${_.key || "?"}${v < x.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              x.map((_, v) => c.jsxs("div", {
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
                        value: _.timestamp_ms,
                        onChange: (y) => r(v, "timestamp_ms", Math.max(0, parseInt(y.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      c.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          A(_.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  c.jsx("div", {
                    className: "flex items-center gap-2",
                    children: c.jsx("input", {
                      type: "text",
                      value: _.key,
                      onChange: (y) => r(v, "key", y.target.value),
                      placeholder: "Key (e.g. C#m)",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    })
                  }),
                  c.jsx("button", {
                    onClick: () => b(v),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    type: "button",
                    children: c.jsx(Zt, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, v))
            ]
          })
        })
      ]
    });
  }
  function zg({ popularimeter: s, onChange: f }) {
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
  function Eg({ userText: s = [], onUserTextChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          description: "",
          value: ""
        }
      ]);
    }, r = (A, x, _) => {
      const v = [
        ...s
      ];
      v[A] = {
        ...v[A],
        [x]: _
      }, f(v);
    }, b = (A) => {
      f(s.filter((x, _) => _ !== A));
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
                c.jsx(ol, {
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
              c.jsx(Am, {
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
                onChange: (_) => r(x, "description", _.target.value),
                placeholder: "Label",
                className: "w-36 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "text",
                value: A.value,
                onChange: (_) => r(x, "value", _.target.value),
                placeholder: "Value",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 255
              }),
              c.jsx("button", {
                onClick: () => b(x),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(Zt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, x))
        })
      ]
    });
  }
  function Tg({ creatorNotes: s = [], onCreatorNotesChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          timestamp_ms: void 0,
          text: ""
        }
      ]);
    }, r = (x, _, v) => {
      const y = [
        ...s
      ];
      y[x] = {
        ...y[x],
        [_]: v
      }, f(y);
    }, b = (x) => {
      f(s.filter((_, v) => v !== x));
    }, A = (x) => {
      if (x == null) return "\u2013";
      const _ = Math.floor(x / 1e3), v = Math.floor(_ / 60), y = _ % 60;
      return `${v}:${y.toString().padStart(2, "0")}`;
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
                c.jsx(ol, {
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
              c.jsx(fg, {
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
          }) : s.map((x, _) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "number",
                value: x.timestamp_ms ?? "",
                onChange: (v) => r(_, "timestamp_ms", v.target.value === "" ? void 0 : Math.max(0, parseInt(v.target.value || "0"))),
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
                onChange: (v) => r(_, "text", v.target.value),
                placeholder: "Note text",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50 min-h-8",
                maxLength: 512
              }),
              c.jsx("button", {
                onClick: () => b(_),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(Zt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, _))
        })
      ]
    });
  }
  function Mg({ collaborationCredits: s = [], onCollaborationCreditsChange: f }) {
    const d = () => {
      f([
        ...s,
        {
          role: "",
          name: "",
          timestamp_ms: void 0
        }
      ]);
    }, r = (x, _, v) => {
      const y = [
        ...s
      ];
      y[x] = {
        ...y[x],
        [_]: v
      }, f(y);
    }, b = (x) => {
      f(s.filter((_, v) => v !== x));
    }, A = (x) => {
      if (x == null) return "\u2013";
      const _ = Math.floor(x / 1e3), v = Math.floor(_ / 60), y = _ % 60;
      return `${v}:${y.toString().padStart(2, "0")}`;
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
                c.jsx(ol, {
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
              c.jsx(gg, {
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
          }) : s.map((x, _) => c.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              c.jsx("input", {
                type: "text",
                value: x.role,
                onChange: (v) => r(_, "role", v.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 40
              }),
              c.jsx("input", {
                type: "text",
                value: x.name,
                onChange: (v) => r(_, "name", v.target.value),
                placeholder: "Name",
                className: "w-48 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              c.jsx("input", {
                type: "number",
                value: x.timestamp_ms ?? "",
                onChange: (v) => r(_, "timestamp_ms", v.target.value === "" ? void 0 : Math.max(0, parseInt(v.target.value || "0"))),
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
                onClick: () => b(_),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: c.jsx(Zt, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, _))
        })
      ]
    });
  }
  function wg({ disabled: s, isProcessing: f, fileName: d, onProcess: r }) {
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
                  children: c.jsx(Ly, {
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
  const Em = "floeditor-theme", oi = () => typeof window < "u" && typeof document < "u", Og = () => {
    if (!oi()) return "auto";
    const s = window.localStorage.getItem(Em);
    return s === "light" || s === "dark" || s === "auto" ? s : "auto";
  };
  function Dg() {
    const [s, f] = he.useState(Og), [d, r] = he.useState("light");
    return he.useEffect(() => {
      if (!oi()) return;
      const x = window.matchMedia("(prefers-color-scheme: dark)"), _ = () => r(x.matches ? "dark" : "light");
      return _(), x.addEventListener("change", _), () => {
        x.removeEventListener("change", _);
      };
    }, []), he.useEffect(() => {
      if (!oi()) return;
      const x = document.documentElement;
      (s === "auto" ? d : s) === "dark" ? (x.classList.add("dark"), x.style.colorScheme = "dark") : (x.classList.remove("dark"), x.style.colorScheme = "light");
    }, [
      s,
      d
    ]), {
      theme: s,
      resolvedTheme: s === "auto" ? d : s,
      setTheme: (x) => {
        f(x), oi() && window.localStorage.setItem(Em, x);
      }
    };
  }
  const gm = [
    {
      value: "auto",
      label: "Auto",
      icon: tg
    },
    {
      value: "light",
      label: "Light",
      icon: og
    },
    {
      value: "dark",
      label: "Dark",
      icon: ag
    }
  ];
  function Ug() {
    var _a;
    const { theme: s, setTheme: f } = Dg(), d = ((_a = gm.find((r) => r.value === s)) == null ? void 0 : _a.label) ?? "Auto";
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
          children: gm.map(({ value: r, label: b, icon: A }) => {
            const x = s === r;
            return c.jsxs("button", {
              type: "button",
              onClick: () => f(r),
              "aria-pressed": x,
              "aria-label": `Switch theme to ${b}`,
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
                  children: b
                })
              ]
            }, r);
          })
        })
      ]
    });
  }
  let M;
  function Cg(s) {
    const f = M.__externref_table_alloc();
    return M.__wbindgen_externrefs.set(f, s), f;
  }
  function qs(s) {
    const f = typeof s;
    if (f == "number" || f == "boolean" || s == null) return `${s}`;
    if (f == "string") return `"${s}"`;
    if (f == "symbol") {
      const b = s.description;
      return b == null ? "Symbol" : `Symbol(${b})`;
    }
    if (f == "function") {
      const b = s.name;
      return typeof b == "string" && b.length > 0 ? `Function(${b})` : "Function";
    }
    if (Array.isArray(s)) {
      const b = s.length;
      let A = "[";
      b > 0 && (A += qs(s[0]));
      for (let x = 1; x < b; x++) A += ", " + qs(s[x]);
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
  function Gs(s, f) {
    return s = s >>> 0, Tm().subarray(s / 4, s / 4 + f);
  }
  function xt(s, f) {
    return s = s >>> 0, Za().subarray(s / 1, s / 1 + f);
  }
  let aa = null;
  function Qt() {
    return (aa === null || aa.buffer.detached === true || aa.buffer.detached === void 0 && aa.buffer !== M.memory.buffer) && (aa = new DataView(M.memory.buffer)), aa;
  }
  let Xn = null;
  function Tm() {
    return (Xn === null || Xn.byteLength === 0) && (Xn = new Float32Array(M.memory.buffer)), Xn;
  }
  function Qa(s, f) {
    return s = s >>> 0, Hg(s, f);
  }
  let Qn = null;
  function Za() {
    return (Qn === null || Qn.byteLength === 0) && (Qn = new Uint8Array(M.memory.buffer)), Qn;
  }
  function Gn(s, f) {
    try {
      return s.apply(this, f);
    } catch (d) {
      const r = Cg(d);
      M.__wbindgen_exn_store(r);
    }
  }
  function vt(s) {
    return s == null;
  }
  function Le(s, f) {
    const d = f(s.length * 1, 1) >>> 0;
    return Za().set(s, d / 1), re = s.length, d;
  }
  function Xs(s, f) {
    const d = f(s.length * 4, 4) >>> 0;
    return Tm().set(s, d / 4), re = s.length, d;
  }
  function na(s, f, d) {
    if (d === void 0) {
      const _ = Zn.encode(s), v = f(_.length, 1) >>> 0;
      return Za().subarray(v, v + _.length).set(_), re = _.length, v;
    }
    let r = s.length, b = f(r, 1) >>> 0;
    const A = Za();
    let x = 0;
    for (; x < r; x++) {
      const _ = s.charCodeAt(x);
      if (_ > 127) break;
      A[b + x] = _;
    }
    if (x !== r) {
      x !== 0 && (s = s.slice(x)), b = d(b, r, r = x + s.length * 3, 1) >>> 0;
      const _ = Za().subarray(b + x, b + r), v = Zn.encodeInto(s, _);
      x += v.written, b = d(b, r, x, 1) >>> 0;
    }
    return re = x, b;
  }
  function _e(s) {
    const f = M.__wbindgen_externrefs.get(s);
    return M.__externref_table_dealloc(s), f;
  }
  let di = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  di.decode();
  const Rg = 2146435072;
  let Hs = 0;
  function Hg(s, f) {
    return Hs += f, Hs >= Rg && (di = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), di.decode(), Hs = f), di.decode(Za().subarray(s, s + f));
  }
  const Zn = new TextEncoder();
  "encodeInto" in Zn || (Zn.encodeInto = function(s, f) {
    const d = Zn.encode(s);
    return f.set(d), {
      read: s.length,
      written: d.length
    };
  });
  let re = 0;
  const bm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_audioinfo_free(s >>> 0, 1)), _m = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((s) => M.__wbg_wasmstreamingdecoder_free(s >>> 0, 1));
  class Va {
    static __wrap(f) {
      f = f >>> 0;
      const d = Object.create(Va.prototype);
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
        return f = r[0], d = r[1], Qa(r[0], r[1]);
      } finally {
        M.__wbindgen_free(f, d, 1);
      }
    }
  }
  Symbol.dispose && (Va.prototype[Symbol.dispose] = Va.prototype.free);
  class Ys {
    __destroy_into_raw() {
      const f = this.__wbg_ptr;
      return this.__wbg_ptr = 0, _m.unregister(this), f;
    }
    free() {
      const f = this.__destroy_into_raw();
      M.__wbg_wasmstreamingdecoder_free(f, 0);
    }
    next_frame() {
      const f = M.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (f[2]) throw _e(f[1]);
      return _e(f[0]);
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
      if (f[3]) throw _e(f[2]);
      var d = Gs(f[0], f[1]).slice();
      return M.__wbindgen_free(f[0], f[1] * 4, 4), d;
    }
    current_frame_index() {
      return M.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const f = M.wasmstreamingdecoder_new();
      return this.__wbg_ptr = f >>> 0, _m.register(this, this.__wbg_ptr, this), this;
    }
    feed(f) {
      const d = Le(f, M.__wbindgen_malloc), r = re, b = M.wasmstreamingdecoder_feed(this.__wbg_ptr, d, r);
      if (b[2]) throw _e(b[1]);
      return b[0] !== 0;
    }
    reset() {
      M.wasmstreamingdecoder_reset(this.__wbg_ptr);
    }
    state() {
      let f, d;
      try {
        const r = M.wasmstreamingdecoder_state(this.__wbg_ptr);
        return f = r[0], d = r[1], Qa(r[0], r[1]);
      } finally {
        M.__wbindgen_free(f, d, 1);
      }
    }
    get_info() {
      const f = M.wasmstreamingdecoder_get_info(this.__wbg_ptr);
      if (f[2]) throw _e(f[1]);
      return _e(f[0]);
    }
    is_ready() {
      return M.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return M.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (Ys.prototype[Symbol.dispose] = Ys.prototype.free);
  function Bg(s, f, d) {
    var r = vt(s) ? 0 : na(s, M.__wbindgen_malloc, M.__wbindgen_realloc), b = re, A = vt(f) ? 0 : na(f, M.__wbindgen_malloc, M.__wbindgen_realloc), x = re, _ = vt(d) ? 0 : na(d, M.__wbindgen_malloc, M.__wbindgen_realloc), v = re;
    const y = M.create_metadata(r, b, A, x, _, v);
    if (y[3]) throw _e(y[2]);
    var O = xt(y[0], y[1]).slice();
    return M.__wbindgen_free(y[0], y[1] * 1, 1), O;
  }
  function Mm(s) {
    const f = M.create_metadata_from_object(s);
    if (f[3]) throw _e(f[2]);
    var d = xt(f[0], f[1]).slice();
    return M.__wbindgen_free(f[0], f[1] * 1, 1), d;
  }
  function qg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.decode(f, d);
    if (r[3]) throw _e(r[2]);
    var b = Gs(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 4, 4), b;
  }
  function Yg(s, f, d, r, b) {
    const A = Xs(s, M.__wbindgen_malloc), x = re;
    var _ = vt(b) ? 0 : Le(b, M.__wbindgen_malloc), v = re;
    const y = M.encode(A, x, f, d, r, _, v);
    if (y[3]) throw _e(y[2]);
    var O = xt(y[0], y[1]).slice();
    return M.__wbindgen_free(y[0], y[1] * 1, 1), O;
  }
  function Lg(s, f, d, r, b, A) {
    const x = Xs(s, M.__wbindgen_malloc), _ = re;
    var v = vt(A) ? 0 : Le(A, M.__wbindgen_malloc), y = re;
    const O = M.encode_lossy(x, _, f, d, r, b, v, y);
    if (O[3]) throw _e(O[2]);
    var R = xt(O[0], O[1]).slice();
    return M.__wbindgen_free(O[0], O[1] * 1, 1), R;
  }
  function Gg(s, f, d, r, b, A) {
    const x = Xs(s, M.__wbindgen_malloc), _ = re;
    var v = vt(A) ? 0 : Le(A, M.__wbindgen_malloc), y = re;
    const O = M.encode_with_bitrate(x, _, f, d, r, b, v, y);
    if (O[3]) throw _e(O[2]);
    var R = xt(O[0], O[1]).slice();
    return M.__wbindgen_free(O[0], O[1] * 1, 1), R;
  }
  function Xg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.get_cover_art(f, d);
    if (r[2]) throw _e(r[1]);
    return _e(r[0]);
  }
  function Qs(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.get_metadata(f, d);
    if (r[2]) throw _e(r[1]);
    return _e(r[0]);
  }
  function Qg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.get_metadata_bytes(f, d);
    if (r[3]) throw _e(r[2]);
    var b = xt(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), b;
  }
  function Zg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.get_section_markers(f, d);
    if (r[2]) throw _e(r[1]);
    return _e(r[0]);
  }
  function Vg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.get_synced_lyrics(f, d);
    if (r[2]) throw _e(r[1]);
    return _e(r[0]);
  }
  function kg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.get_waveform_data(f, d);
    if (r[2]) throw _e(r[1]);
    return _e(r[0]);
  }
  function Kg(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re;
    return M.has_metadata(f, d) !== 0;
  }
  function wm(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.info(f, d);
    if (r[2]) throw _e(r[1]);
    return Va.__wrap(r[0]);
  }
  function Jg(s, f) {
    const d = Le(s, M.__wbindgen_malloc), r = re, b = M.set_metadata(d, r, f);
    if (b[3]) throw _e(b[2]);
    var A = xt(b[0], b[1]).slice();
    return M.__wbindgen_free(b[0], b[1] * 1, 1), A;
  }
  function Wg(s, f, d) {
    var r = vt(s) ? 0 : Le(s, M.__wbindgen_malloc), b = re;
    const A = na(f, M.__wbindgen_malloc, M.__wbindgen_realloc), x = re, _ = M.set_metadata_field(r, b, A, x, d);
    if (_[3]) throw _e(_[2]);
    var v = xt(_[0], _[1]).slice();
    return M.__wbindgen_free(_[0], _[1] * 1, 1), v;
  }
  function $g(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.strip_metadata(f, d);
    if (r[3]) throw _e(r[2]);
    var b = xt(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), b;
  }
  function Om(s, f) {
    const d = Le(s, M.__wbindgen_malloc), r = re, b = Le(f, M.__wbindgen_malloc), A = re, x = M.update_metadata(d, r, b, A);
    if (x[3]) throw _e(x[2]);
    var _ = xt(x[0], x[1]).slice();
    return M.__wbindgen_free(x[0], x[1] * 1, 1), _;
  }
  function Dm(s) {
    const f = Le(s, M.__wbindgen_malloc), d = re, r = M.validate(f, d);
    if (r[2]) throw _e(r[1]);
    return r[0] !== 0;
  }
  function Fg() {
    let s, f;
    try {
      const d = M.version();
      return s = d[0], f = d[1], Qa(d[0], d[1]);
    } finally {
      M.__wbindgen_free(s, f, 1);
    }
  }
  const Ig = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function Pg(s, f) {
    if (typeof Response == "function" && s instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(s, f);
      } catch (r) {
        if (s.ok && Ig.has(s.type) && s.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
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
  function Um() {
    const s = {};
    return s.wbg = {}, s.wbg.__wbg_Error_52673b7de5a0ca89 = function(f, d) {
      return Error(Qa(f, d));
    }, s.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(f) {
      return Number(f);
    }, s.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(f, d) {
      const r = String(d), b = na(r, M.__wbindgen_malloc, M.__wbindgen_realloc), A = re;
      Qt().setInt32(f + 4, A, true), Qt().setInt32(f + 0, b, true);
    }, s.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(f, d) {
      const r = d, b = typeof r == "bigint" ? r : void 0;
      Qt().setBigInt64(f + 8, vt(b) ? BigInt(0) : b, true), Qt().setInt32(f + 0, !vt(b), true);
    }, s.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(f) {
      const d = f, r = typeof d == "boolean" ? d : void 0;
      return vt(r) ? 16777215 : r ? 1 : 0;
    }, s.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(f, d) {
      const r = qs(d), b = na(r, M.__wbindgen_malloc, M.__wbindgen_realloc), A = re;
      Qt().setInt32(f + 4, A, true), Qt().setInt32(f + 0, b, true);
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
      const r = d, b = typeof r == "number" ? r : void 0;
      Qt().setFloat64(f + 8, vt(b) ? 0 : b, true), Qt().setInt32(f + 0, !vt(b), true);
    }, s.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(f, d) {
      const r = d, b = typeof r == "string" ? r : void 0;
      var A = vt(b) ? 0 : na(b, M.__wbindgen_malloc, M.__wbindgen_realloc), x = re;
      Qt().setInt32(f + 4, x, true), Qt().setInt32(f + 0, A, true);
    }, s.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(f, d) {
      throw new Error(Qa(f, d));
    }, s.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Gn(function(f, d) {
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
      return Gn(function(f, d) {
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
      return new Uint8Array(xt(f, d));
    }, s.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(f) {
      return new Float32Array(f >>> 0);
    }, s.wbg.__wbg_next_138a17bbf04e926c = function(f) {
      return f.next;
    }, s.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Gn(function(f) {
        return f.next();
      }, arguments);
    }, s.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(f, d, r) {
      Uint8Array.prototype.set.call(xt(f, d), r);
    }, s.wbg.__wbg_set_3f1d0b984ed272ed = function(f, d, r) {
      f[d] = r;
    }, s.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Gn(function(f, d, r) {
        return Reflect.set(f, d, r);
      }, arguments);
    }, s.wbg.__wbg_set_7df433eea03a5c14 = function(f, d, r) {
      f[d >>> 0] = r;
    }, s.wbg.__wbg_set_cb0e657d1901c8d8 = function(f, d, r) {
      f.set(Gs(d, r));
    }, s.wbg.__wbg_set_efaaf145b9377369 = function(f, d, r) {
      return f.set(d, r);
    }, s.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Gn(function(f) {
        return JSON.stringify(f);
      }, arguments);
    }, s.wbg.__wbg_value_57b7b035e117f7ee = function(f) {
      return f.value;
    }, s.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(f, d) {
      return Qa(f, d);
    }, s.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(f) {
      return BigInt.asUintN(64, f);
    }, s.wbg.__wbindgen_cast_cb9088102bce6b30 = function(f, d) {
      return xt(f, d);
    }, s.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(f) {
      return f;
    }, s.wbg.__wbindgen_init_externref_table = function() {
      const f = M.__wbindgen_externrefs, d = f.grow(4);
      f.set(0, void 0), f.set(d + 0, void 0), f.set(d + 1, null), f.set(d + 2, true), f.set(d + 3, false);
    }, s;
  }
  function Cm(s, f) {
    return M = s.exports, mi.__wbindgen_wasm_module = f, aa = null, Xn = null, Qn = null, M.__wbindgen_start(), M;
  }
  function eb(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module: s } = s : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const f = Um();
    s instanceof WebAssembly.Module || (s = new WebAssembly.Module(s));
    const d = new WebAssembly.Instance(s, f);
    return Cm(d, s);
  }
  async function mi(s) {
    if (M !== void 0) return M;
    typeof s < "u" && (Object.getPrototypeOf(s) === Object.prototype ? { module_or_path: s } = s : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof s > "u" && (s = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const f = Um();
    (typeof s == "string" || typeof Request == "function" && s instanceof Request || typeof URL == "function" && s instanceof URL) && (s = fetch(s));
    const { instance: d, module: r } = await Pg(await s, f);
    return Cm(d, r);
  }
  const pm = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Va,
    WasmStreamingDecoder: Ys,
    create_metadata: Bg,
    create_metadata_from_object: Mm,
    decode: qg,
    default: mi,
    encode: Yg,
    encode_lossy: Lg,
    encode_with_bitrate: Gg,
    get_cover_art: Xg,
    get_metadata: Qs,
    get_metadata_bytes: Qg,
    get_section_markers: Zg,
    get_synced_lyrics: Vg,
    get_waveform_data: kg,
    has_metadata: Kg,
    info: wm,
    initSync: eb,
    set_metadata: Jg,
    set_metadata_field: Wg,
    strip_metadata: $g,
    update_metadata: Om,
    validate: Dm,
    version: Fg
  }, Symbol.toStringTag, {
    value: "Module"
  })), tb = {
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
  function lb() {
    const [s, f] = he.useState(false), [d, r] = he.useState(false);
    return he.useEffect(() => {
      (async () => {
        try {
          await mi(), r(true);
        } catch (O) {
          console.error("Failed to initialize flo\u2122 WASM:", O);
        }
      })();
    }, []), {
      isProcessing: s,
      isInitialized: d,
      loadMetadata: async (y) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const O = await y.arrayBuffer(), R = new Uint8Array(O);
          return Qs(R);
        } catch (O) {
          return console.error("Failed to load flo\u2122 metadata:", O), null;
        }
      },
      updateMetadata: async (y, O) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        f(true);
        try {
          const R = Mm(O), q = Om(y, R);
          return f(false), q;
        } catch (R) {
          return console.error("Failed to update flo\u2122 metadata:", R), f(false), null;
        }
      },
      downloadFile: (y, O) => {
        const R = new Blob([
          y
        ], {
          type: "application/octet-stream"
        }), q = URL.createObjectURL(R), I = document.createElement("a");
        I.href = q, I.download = O, I.click(), URL.revokeObjectURL(q);
      },
      validateFile: (y) => d ? Dm(y) : false,
      resetMetadata: () => ({
        ...tb
      })
    };
  }
  function ab() {
    const [s, f] = he.useState(false);
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
          await mi();
          const b = await r.arrayBuffer(), A = new Uint8Array(b), x = Qs(A), _ = wm(A), v = _ ? {
            sample_rate: _.sample_rate,
            channels: _.channels,
            bit_depth: _.bit_depth,
            total_frames: Number(_.total_frames),
            duration_secs: _.duration_secs,
            file_size: _.file_size,
            compression_ratio: _.compression_ratio,
            crc_valid: _.crc_valid,
            is_lossy: _.is_lossy,
            lossy_quality: _.lossy_quality,
            version: _.version
          } : null;
          return {
            metadata: x,
            audioInfo: v,
            error: null
          };
        } catch (b) {
          return console.error("Failed to load flo\u2122 file:", b), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${b instanceof Error ? b.message : "Unknown error"}`
          };
        } finally {
          f(false);
        }
      }
    };
  }
  function nb() {
    return {
      parseLRCFormat: (f) => {
        const d = f.split(`
`), r = [];
        return d.forEach((b) => {
          const A = b.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (A) {
            const x = parseInt(A[1]), _ = parseInt(A[2]), v = parseInt(A[3]), y = x * 60 * 1e3 + _ * 1e3 + v * 10, O = A[4].trim();
            r.push([
              O,
              y
            ]);
          }
        }), r.sort((b, A) => b[1] - A[1]), r;
      }
    };
  }
  function vm(s, f, d, r = 50) {
    const b = Math.floor(f / r), A = Math.floor(s.length / (b * d)), x = [];
    for (let _ = 0; _ < A; _++) for (let v = 0; v < d; v++) {
      let y = 0;
      for (let O = 0; O < b; O++) {
        const R = _ * b * d + O * d + v;
        R < s.length && (y = Math.max(y, Math.abs(s[R])));
      }
      x.push(y);
    }
    return {
      peaks_per_second: r,
      channels: d,
      peaks: x
    };
  }
  function ub({ waveform: s, onRegenerate: f }) {
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
          children: s && s.peaks && s.peaks.length > 0 ? c.jsx(ib, {
            waveform: s
          }) : c.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              c.jsx(Vn, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              c.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        c.jsx(cb, {
          waveform: s
        })
      ]
    });
  }
  function ib({ waveform: s, width: f = 600, height: d = 80 }) {
    const { peaks: r, channels: b } = s, A = Math.floor(r.length / b);
    function x(v) {
      return Array.from({
        length: A
      }, (y, O) => {
        const R = Math.floor(O / (A - 1) * (f - 2)) + 1, q = Math.floor((1 - (r[O * b + v] || 0)) * (d - 10)) + 5;
        return `${R},${q}`;
      }).join(" ");
    }
    function _() {
      const v = Array.from({
        length: A
      }, (O, R) => {
        const q = Math.floor(R / (A - 1) * (f - 2)) + 1, I = r[R * b] || 0, fe = Math.floor((1 - I) * (d / 2 - 4)) + d / 2;
        return `${q},${fe}`;
      }), y = Array.from({
        length: A
      }, (O, R) => {
        const q = A - 1 - R, I = Math.floor(q / (A - 1) * (f - 2)) + 1, fe = r[q * b] || 0, pe = Math.floor((1 + fe) * (d / 2 - 4)) + 4;
        return `${I},${pe}`;
      });
      return [
        ...v,
        ...y,
        v[0]
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
          b === 1 && c.jsx("polygon", {
            points: _(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          c.jsx("polyline", {
            points: x(0),
            stroke: "#db2777",
            strokeWidth: b > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          b > 1 && c.jsx("polyline", {
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
  function cb({ waveform: s }) {
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
  const Rm = [
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
  ], Hm = [
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
  ], Bm = [
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
  ], qm = [
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
  ], sb = [
    {
      name: "Structure",
      fields: Rm
    },
    {
      name: "Sorting & Ownership",
      fields: Hm
    },
    {
      name: "Links",
      fields: Bm
    },
    {
      name: "Timing & Broadcast",
      fields: qm
    }
  ], xm = [
    ...Rm,
    ...Hm,
    ...Bm,
    ...qm
  ];
  function fb({ metadata: s, onMetadataChange: f }) {
    const [d, r] = he.useState(false), b = xm.filter(({ key: _ }) => {
      const v = s[_];
      return typeof v == "string" && v.trim().length > 0 || typeof v == "number" && !isNaN(v);
    }).length, A = xm.length, x = ({ key: _, label: v, placeholder: y, type: O, colSpan: R }) => {
      const q = s[_];
      return q != null && typeof q != "string" && typeof q != "number" ? null : c.jsxs("div", {
        className: `space-y-2 ${R === "full" ? "md:col-span-2" : ""}`,
        children: [
          c.jsx("label", {
            htmlFor: _,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: v
          }),
          c.jsx("input", {
            id: _,
            value: q ?? "",
            onChange: (I) => f(_, O === "number" ? I.target.value === "" ? void 0 : parseInt(I.target.value) || 0 : I.target.value),
            type: O ?? "text",
            placeholder: y,
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, _);
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
                A,
                " fields filled"
              ]
            })
          ]
        }),
        c.jsx("button", {
          type: "button",
          className: "flex items-center w-full gap-2 text-lg font-semibold mb-4 select-none",
          onClick: () => r((_) => !_),
          "aria-expanded": d,
          children: c.jsx("span", {
            className: "ml-auto",
            children: d ? c.jsx(Ry, {
              className: "h-5 w-5"
            }) : c.jsx(By, {
              className: "h-5 w-5"
            })
          })
        }),
        d && c.jsxs("div", {
          className: "space-y-8",
          children: [
            sb.map(({ name: _, fields: v }) => c.jsxs("div", {
              className: "space-y-4",
              children: [
                c.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: _
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: v.map(x)
                })
              ]
            }, _)),
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
  function rb(s) {
    return typeof s == "string" && s.trim().length > 0 || typeof s == "number" ? s : c.jsx("span", {
      className: "text-muted-foreground",
      children: "\u2013"
    });
  }
  function ob({ metadata: s }) {
    const f = Bs.length, d = Bs.filter(({ key: r }) => {
      const b = s[r];
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
                    c.jsx(Jy, {
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
          children: Bs.map(({ key: r, label: b }) => c.jsxs("div", {
            className: "space-y-1",
            children: [
              c.jsx("div", {
                className: "text-xs text-muted-foreground",
                children: b
              }),
              c.jsx("div", {
                className: "font-mono text-sm bg-primary/5 rounded px-2 py-1 border",
                children: rb(s[r])
              })
            ]
          }, r))
        })
      ]
    });
  }
  function db() {
    var _a, _b, _c, _d, _e2;
    const [s, f] = he.useState(null), [d, r] = he.useState(""), [b, A] = he.useState(false), [x, _] = he.useState(null), [v, y] = he.useState(null), [O, R] = he.useState(""), [q, I] = he.useState(null), { isProcessing: fe, updateMetadata: pe, downloadFile: J, resetMetadata: K } = lb(), [W, te] = he.useState(null), [Q, Ne] = he.useState(() => ({
      ...mm
    })), [Ce, F] = he.useState(null), [$e, et] = he.useState(() => ({
      ...ri
    })), Ct = he.useRef(""), { isLoading: St, loadFloFile: Ze } = ab(), { parseLRCFormat: Vt } = nb();
    he.useEffect(() => {
      typeof window < "u" && b && Rs(() => import("./eruda-XOTdSFcf.js").then((E) => E.e), [], import.meta.url).then((E) => {
        E.default.init(), E.default.show();
      });
    }, [
      b
    ]);
    const ft = [
      {
        label: "Tag fields set",
        value: Object.values(Q).filter((E) => typeof E == "string" && E.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: $e.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: Ce ? "Attached" : "Not added",
        helper: Ce ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ], w = he.useCallback((E) => `${E.name}:${E.lastModified}:${E.size}`, []), B = he.useCallback(async () => {
      if (!(!q || !W)) try {
        const H = await (await Rs(() => Promise.resolve().then(() => pm), void 0, import.meta.url)).decode(q), Y = vm(H, W.sample_rate, W.channels);
        Ne((k) => ({
          ...k,
          waveform_data: Y
        })), y("Waveform re-generated from audio data.");
      } catch {
        _("Could not re-generate waveform.");
      }
    }, [
      q,
      W
    ]), V = he.useCallback(async (E) => {
      var _a2, _b2, _c2;
      if (!E) {
        Ct.current = "", f(null), I(null), Ne(K()), F(null), et({
          ...ri
        }), r(""), R(""), y(null), _(null), te(null);
        return;
      }
      if (!E.name.toLowerCase().endsWith(".flo")) {
        _("Please upload a valid .flo file"), y(null);
        return;
      }
      const Y = w(E);
      Ct.current = Y, f(E), _(null), y("File loaded. Reading embedded tags..."), R("Scanning embedded metadata..."), Ne(K()), F(null), et({
        ...ri
      }), r(""), te(null);
      try {
        const { metadata: k, audioInfo: ne, error: Ge } = await Ze(E);
        if (Ct.current !== Y) return;
        if (Ge) {
          _(Ge), y(null);
          return;
        }
        const Me = await E.arrayBuffer(), dl = new Uint8Array(Me);
        I(dl), te(ne || null);
        let Fe = k ? {
          ...k
        } : {
          ...mm
        };
        if ((!Fe.waveform_data || !((_a2 = Fe.waveform_data.peaks) == null ? void 0 : _a2.length)) && ne) try {
          const Nt = await (await Rs(() => Promise.resolve().then(() => pm), void 0, import.meta.url)).decode(dl);
          Fe.waveform_data = vm(Nt, ne.sample_rate, ne.channels);
        } catch {
        }
        if (Ne(Fe), Fe.pictures) {
          const Ie = Fe.pictures.find((Nt) => Nt.picture_type === "cover_front");
          if (Ie) {
            const Nt = new Blob([
              Ie.data
            ], {
              type: Ie.mime_type
            });
            F(URL.createObjectURL(Nt));
          }
        }
        if (Fe.synced_lyrics && Fe.synced_lyrics.length > 0) {
          const Ie = Fe.synced_lyrics[0];
          et({
            type: 1,
            timestampFormat: 2,
            language: Ie.language || "eng",
            description: Ie.description || "Synced Lyrics",
            text: Ie.lines.map((Nt) => [
              Nt.text,
              Nt.timestamp_ms
            ])
          });
        }
        const ml = Object.values(Fe || {}).filter((Ie) => typeof Ie == "string" && Ie.trim().length > 0).length, kn = ((_c2 = (_b2 = Fe == null ? void 0 : Fe.synced_lyrics) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.lines.length) ?? 0, kt = ml > 0 || !!ne || kn > 0;
        R(ml > 0 ? `Imported ${ml} embedded tag${ml === 1 ? "" : "s"}.` : "No embedded tags found."), y(kt ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (k) {
        if (Ct.current !== Y) return;
        console.error("Failed to parse metadata", k), R(""), _("Loaded file, but could not read embedded metadata automatically."), y(null), te(null);
      }
    }, [
      Ze,
      w,
      K
    ]), ce = (E, H) => {
      Ne((Y) => ({
        ...Y,
        [E]: H
      }));
    };
    function ye(E, H) {
      Ne((Y) => {
        var _a2, _b2, _c2;
        return {
          ...Y,
          popularimeter: {
            email: E === "email" ? H : ((_a2 = Y.popularimeter) == null ? void 0 : _a2.email) ?? "",
            rating: E === "rating" ? H : ((_b2 = Y.popularimeter) == null ? void 0 : _b2.rating) ?? 0,
            play_count: E === "play_count" ? H : ((_c2 = Y.popularimeter) == null ? void 0 : _c2.play_count) ?? 0
          }
        };
      });
    }
    const g = () => {
      if (d.trim()) {
        const E = Vt(d);
        if (et((H) => ({
          ...H,
          text: E
        })), !Q.lyrics || Q.lyrics.length === 0) {
          const H = E.map(([Y]) => Y == null ? void 0 : Y.trim()).filter(Boolean).join(`
`);
          H && Ne((Y) => ({
            ...Y,
            lyrics: [
              {
                text: H
              }
            ]
          }));
        }
        r(""), y("LRC format lyrics imported successfully!");
      }
    }, C = async () => {
      var _a2, _b2;
      if (!s || !q) return;
      _(null), y(null);
      const E = await pe(q, Q);
      if (E) {
        const H = (_a2 = Q.artist) == null ? void 0 : _a2.trim(), Y = (_b2 = Q.title) == null ? void 0 : _b2.trim();
        let k;
        H && Y ? k = `${H} - ${Y}.flo` : Y ? k = `${Y}.flo` : k = s.name.endsWith(".flo") ? s.name : `${s.name.replace(/\.[^/.]+$/, "")}.flo`, J(E, k), y("File processed and downloaded successfully!");
      } else _("Failed to process file");
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
                            children: c.jsx(Vn, {
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
                            c.jsx(Ug, {}),
                            c.jsxs("button", {
                              onClick: () => A(!b),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                c.jsx(Uy, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                b ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                x && c.jsx(ym, {
                  type: "error",
                  message: x
                }),
                v && c.jsx(ym, {
                  type: "success",
                  message: v
                }),
                c.jsx(bg, {
                  file: s,
                  onFileUpload: V,
                  isParsingMetadata: St,
                  metadataSummary: O
                }),
                c.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: ft.map(({ label: E, value: H, helper: Y }) => c.jsxs("div", {
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
                            children: E
                          }),
                          c.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: H
                          }),
                          c.jsx("p", {
                            className: "text-xs text-white/80",
                            children: Y
                          })
                        ]
                      })
                    ]
                  }, E))
                })
              ]
            }),
            c.jsx(ob, {
              metadata: Q
            }),
            c.jsx(ub, {
              waveform: Q.waveform_data,
              onRegenerate: q && W ? B : void 0
            }),
            c.jsx(_g, {
              metadata: Q,
              onMetadataChange: ce
            }),
            c.jsx(fb, {
              metadata: Q,
              onMetadataChange: ce
            }),
            c.jsx(zg, {
              popularimeter: {
                email: ((_a = Q.popularimeter) == null ? void 0 : _a.email) ?? "",
                rating: ((_b = Q.popularimeter) == null ? void 0 : _b.rating) ?? 0,
                play_count: ((_c = Q.popularimeter) == null ? void 0 : _c.play_count) ?? 0
              },
              onChange: ye
            }),
            c.jsx(vg, {
              pictures: Q.pictures,
              onPicturesChange: (E) => Ne({
                ...Q,
                pictures: E
              }),
              coverVariants: Q.cover_variants,
              onCoverVariantsChange: (E) => Ne({
                ...Q,
                cover_variants: E
              }),
              animatedCover: Q.animated_cover,
              onAnimatedCoverChange: (E) => Ne({
                ...Q,
                animated_cover: E
              })
            }),
            c.jsx(xg, {
              syncedLyrics: Q.synced_lyrics,
              onSyncedLyricsChange: (E) => Ne({
                ...Q,
                synced_lyrics: E
              }),
              lrcText: d,
              onLrcTextChange: r,
              onImport: g,
              unsyncedLyrics: ((_e2 = (_d = Q.lyrics) == null ? void 0 : _d[0]) == null ? void 0 : _e2.text) || "",
              onUnsyncedLyricsChange: (E) => Ne({
                ...Q,
                lyrics: E ? [
                  {
                    text: E
                  }
                ] : []
              })
            }),
            c.jsx(Ng, {
              sectionMarkers: Q.section_markers,
              onSectionMarkersChange: (E) => Ne({
                ...Q,
                section_markers: E
              })
            }),
            c.jsx(jg, {
              bpmMap: Q.bpm_map,
              onBpmMapChange: (E) => Ne({
                ...Q,
                bpm_map: E
              })
            }),
            c.jsx(Ag, {
              keyChanges: Q.key_changes,
              onKeyChangesChange: (E) => ce("key_changes", E)
            }),
            c.jsx(Tg, {
              creatorNotes: Q.creator_notes ?? [],
              onCreatorNotesChange: (E) => ce("creator_notes", E)
            }),
            c.jsx(Mg, {
              collaborationCredits: Q.collaboration_credits ?? [],
              onCollaborationCreditsChange: (E) => ce("collaboration_credits", E)
            }),
            c.jsx(Eg, {
              userText: Q.user_text ?? [],
              onUserTextChange: (E) => ce("user_text", E)
            }),
            c.jsx(wg, {
              disabled: !s || fe,
              isProcessing: fe,
              fileName: s == null ? void 0 : s.name,
              onProcess: C
            })
          ]
        })
      ]
    });
  }
  py.createRoot(document.getElementById("root")).render(c.jsx(oy.StrictMode, {
    children: c.jsx(db, {})
  }));
})();
export {
  __tla,
  Sm as g
};

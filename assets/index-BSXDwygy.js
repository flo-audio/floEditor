let pm;
let __tla = (async () => {
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const _ of document.querySelectorAll('link[rel="modulepreload"]')) r(_);
    new MutationObserver((_) => {
      for (const A of _) if (A.type === "childList") for (const x of A.addedNodes) x.tagName === "LINK" && x.rel === "modulepreload" && r(x);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function d(_) {
      const A = {};
      return _.integrity && (A.integrity = _.integrity), _.referrerPolicy && (A.referrerPolicy = _.referrerPolicy), _.crossOrigin === "use-credentials" ? A.credentials = "include" : _.crossOrigin === "anonymous" ? A.credentials = "omit" : A.credentials = "same-origin", A;
    }
    function r(_) {
      if (_.ep) return;
      _.ep = true;
      const A = d(_);
      fetch(_.href, A);
    }
  })();
  pm = function(c) {
    return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, "default") ? c.default : c;
  };
  var Ms = {
    exports: {}
  }, Yn = {};
  var Vd;
  function ly() {
    if (Vd) return Yn;
    Vd = 1;
    var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.fragment");
    function d(r, _, A) {
      var x = null;
      if (A !== void 0 && (x = "" + A), _.key !== void 0 && (x = "" + _.key), "key" in _) {
        A = {};
        for (var v in _) v !== "key" && (A[v] = _[v]);
      } else A = _;
      return _ = A.ref, {
        $$typeof: c,
        type: r,
        key: x,
        ref: _ !== void 0 ? _ : null,
        props: A
      };
    }
    return Yn.Fragment = s, Yn.jsx = d, Yn.jsxs = d, Yn;
  }
  var Kd;
  function ay() {
    return Kd || (Kd = 1, Ms.exports = ly()), Ms.exports;
  }
  var f = ay(), ws = {
    exports: {}
  }, $ = {};
  var Jd;
  function ny() {
    if (Jd) return $;
    Jd = 1;
    var c = /* @__PURE__ */ Symbol.for("react.transitional.element"), s = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), _ = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), x = /* @__PURE__ */ Symbol.for("react.context"), v = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), y = /* @__PURE__ */ Symbol.for("react.memo"), O = /* @__PURE__ */ Symbol.for("react.lazy"), R = /* @__PURE__ */ Symbol.for("react.activity"), q = Symbol.iterator;
    function tt(g) {
      return g === null || typeof g != "object" ? null : (g = q && g[q] || g["@@iterator"], typeof g == "function" ? g : null);
    }
    var ft = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, vt = Object.assign, k = {};
    function J(g, C, E) {
      this.props = g, this.context = C, this.refs = k, this.updater = E || ft;
    }
    J.prototype.isReactComponent = {}, J.prototype.setState = function(g, C) {
      if (typeof g != "object" && typeof g != "function" && g != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, g, C, "setState");
    }, J.prototype.forceUpdate = function(g) {
      this.updater.enqueueForceUpdate(this, g, "forceUpdate");
    };
    function W() {
    }
    W.prototype = J.prototype;
    function et(g, C, E) {
      this.props = g, this.context = C, this.refs = k, this.updater = E || ft;
    }
    var Z = et.prototype = new W();
    Z.constructor = et, vt(Z, J.prototype), Z.isPureReactComponent = true;
    var Nt = Array.isArray;
    function Ct() {
    }
    var F = {
      H: null,
      A: null,
      T: null,
      S: null
    }, $t = Object.prototype.hasOwnProperty;
    function te(g, C, E) {
      var H = E.ref;
      return {
        $$typeof: c,
        type: g,
        key: C,
        ref: H !== void 0 ? H : null,
        props: E
      };
    }
    function Ce(g, C) {
      return te(g.type, C, g.props);
    }
    function Se(g) {
      return typeof g == "object" && g !== null && g.$$typeof === c;
    }
    function Zt(g) {
      var C = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + g.replace(/[=:]/g, function(E) {
        return C[E];
      });
    }
    var Ve = /\/+/g;
    function qe(g, C) {
      return typeof g == "object" && g !== null && g.key != null ? Zt("" + g.key) : C.toString(36);
    }
    function fe(g) {
      switch (g.status) {
        case "fulfilled":
          return g.value;
        case "rejected":
          throw g.reason;
        default:
          switch (typeof g.status == "string" ? g.then(Ct, Ct) : (g.status = "pending", g.then(function(C) {
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
      var K = typeof g;
      (K === "undefined" || K === "boolean") && (g = null);
      var nt = false;
      if (g === null) nt = true;
      else switch (K) {
        case "bigint":
        case "string":
        case "number":
          nt = true;
          break;
        case "object":
          switch (g.$$typeof) {
            case c:
            case s:
              nt = true;
              break;
            case O:
              return nt = g._init, w(nt(g._payload), C, E, H, Y);
          }
      }
      if (nt) return Y = Y(g), nt = H === "" ? "." + qe(g, 0) : H, Nt(Y) ? (E = "", nt != null && (E = nt.replace(Ve, "$&/") + "/"), w(Y, C, E, "", function(dl) {
        return dl;
      })) : Y != null && (Se(Y) && (Y = Ce(Y, E + (Y.key == null || g && g.key === Y.key ? "" : ("" + Y.key).replace(Ve, "$&/") + "/") + nt)), C.push(Y)), 1;
      nt = 0;
      var Gt = H === "" ? "." : H + ":";
      if (Nt(g)) for (var Mt = 0; Mt < g.length; Mt++) H = g[Mt], K = Gt + qe(H, Mt), nt += w(H, C, E, K, Y);
      else if (Mt = tt(g), typeof Mt == "function") for (g = Mt.call(g), Mt = 0; !(H = g.next()).done; ) H = H.value, K = Gt + qe(H, Mt++), nt += w(H, C, E, K, Y);
      else if (K === "object") {
        if (typeof g.then == "function") return w(fe(g), C, E, H, Y);
        throw C = String(g), Error("Objects are not valid as a React child (found: " + (C === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : C) + "). If you meant to render a collection of children, use an array instead.");
      }
      return nt;
    }
    function B(g, C, E) {
      if (g == null) return g;
      var H = [], Y = 0;
      return w(g, H, "", "", function(K) {
        return C.call(E, K, Y++);
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
    var st = typeof reportError == "function" ? reportError : function(g) {
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
    }, yt = {
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
        if (!Se(g)) throw Error("React.Children.only expected to receive a single React element child.");
        return g;
      }
    };
    return $.Activity = R, $.Children = yt, $.Component = J, $.Fragment = d, $.Profiler = _, $.PureComponent = et, $.StrictMode = r, $.Suspense = p, $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, $.__COMPILER_RUNTIME = {
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
      var H = vt({}, g.props), Y = g.key;
      if (C != null) for (K in C.key !== void 0 && (Y = "" + C.key), C) !$t.call(C, K) || K === "key" || K === "__self" || K === "__source" || K === "ref" && C.ref === void 0 || (H[K] = C[K]);
      var K = arguments.length - 2;
      if (K === 1) H.children = E;
      else if (1 < K) {
        for (var nt = Array(K), Gt = 0; Gt < K; Gt++) nt[Gt] = arguments[Gt + 2];
        H.children = nt;
      }
      return te(g.type, Y, H);
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
      var H, Y = {}, K = null;
      if (C != null) for (H in C.key !== void 0 && (K = "" + C.key), C) $t.call(C, H) && H !== "key" && H !== "__self" && H !== "__source" && (Y[H] = C[H]);
      var nt = arguments.length - 2;
      if (nt === 1) Y.children = E;
      else if (1 < nt) {
        for (var Gt = Array(nt), Mt = 0; Mt < nt; Mt++) Gt[Mt] = arguments[Mt + 2];
        Y.children = Gt;
      }
      if (g && g.defaultProps) for (H in nt = g.defaultProps, nt) Y[H] === void 0 && (Y[H] = nt[H]);
      return te(g, K, Y);
    }, $.createRef = function() {
      return {
        current: null
      };
    }, $.forwardRef = function(g) {
      return {
        $$typeof: v,
        render: g
      };
    }, $.isValidElement = Se, $.lazy = function(g) {
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
        Y !== null && Y(E, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(Ct, st);
      } catch (K) {
        st(K);
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
  var kd;
  function Ys() {
    return kd || (kd = 1, ws.exports = ny()), ws.exports;
  }
  var ht = Ys();
  const uy = pm(ht);
  var Os = {
    exports: {}
  }, Ln = {}, Us = {
    exports: {}
  }, Ds = {};
  var Wd;
  function iy() {
    return Wd || (Wd = 1, (function(c) {
      function s(w, B) {
        var V = w.length;
        w.push(B);
        t: for (; 0 < V; ) {
          var st = V - 1 >>> 1, yt = w[st];
          if (0 < _(yt, B)) w[st] = B, w[V] = yt, V = st;
          else break t;
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
          t: for (var st = 0, yt = w.length, g = yt >>> 1; st < g; ) {
            var C = 2 * (st + 1) - 1, E = w[C], H = C + 1, Y = w[H];
            if (0 > _(E, V)) H < yt && 0 > _(Y, E) ? (w[st] = Y, w[H] = V, st = H) : (w[st] = E, w[C] = V, st = C);
            else if (H < yt && 0 > _(Y, V)) w[st] = Y, w[H] = V, st = H;
            else break t;
          }
        }
        return B;
      }
      function _(w, B) {
        var V = w.sortIndex - B.sortIndex;
        return V !== 0 ? V : w.id - B.id;
      }
      if (c.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var A = performance;
        c.unstable_now = function() {
          return A.now();
        };
      } else {
        var x = Date, v = x.now();
        c.unstable_now = function() {
          return x.now() - v;
        };
      }
      var p = [], y = [], O = 1, R = null, q = 3, tt = false, ft = false, vt = false, k = false, J = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, et = typeof setImmediate < "u" ? setImmediate : null;
      function Z(w) {
        for (var B = d(y); B !== null; ) {
          if (B.callback === null) r(y);
          else if (B.startTime <= w) r(y), B.sortIndex = B.expirationTime, s(p, B);
          else break;
          B = d(y);
        }
      }
      function Nt(w) {
        if (vt = false, Z(w), !ft) if (d(p) !== null) ft = true, Ct || (Ct = true, Zt());
        else {
          var B = d(y);
          B !== null && fe(Nt, B.startTime - w);
        }
      }
      var Ct = false, F = -1, $t = 5, te = -1;
      function Ce() {
        return k ? true : !(c.unstable_now() - te < $t);
      }
      function Se() {
        if (k = false, Ct) {
          var w = c.unstable_now();
          te = w;
          var B = true;
          try {
            t: {
              ft = false, vt && (vt = false, W(F), F = -1), tt = true;
              var V = q;
              try {
                e: {
                  for (Z(w), R = d(p); R !== null && !(R.expirationTime > w && Ce()); ) {
                    var st = R.callback;
                    if (typeof st == "function") {
                      R.callback = null, q = R.priorityLevel;
                      var yt = st(R.expirationTime <= w);
                      if (w = c.unstable_now(), typeof yt == "function") {
                        R.callback = yt, Z(w), B = true;
                        break e;
                      }
                      R === d(p) && r(p), Z(w);
                    } else r(p);
                    R = d(p);
                  }
                  if (R !== null) B = true;
                  else {
                    var g = d(y);
                    g !== null && fe(Nt, g.startTime - w), B = false;
                  }
                }
                break t;
              } finally {
                R = null, q = V, tt = false;
              }
              B = void 0;
            }
          } finally {
            B ? Zt() : Ct = false;
          }
        }
      }
      var Zt;
      if (typeof et == "function") Zt = function() {
        et(Se);
      };
      else if (typeof MessageChannel < "u") {
        var Ve = new MessageChannel(), qe = Ve.port2;
        Ve.port1.onmessage = Se, Zt = function() {
          qe.postMessage(null);
        };
      } else Zt = function() {
        J(Se, 0);
      };
      function fe(w, B) {
        F = J(function() {
          w(c.unstable_now());
        }, B);
      }
      c.unstable_IdlePriority = 5, c.unstable_ImmediatePriority = 1, c.unstable_LowPriority = 4, c.unstable_NormalPriority = 3, c.unstable_Profiling = null, c.unstable_UserBlockingPriority = 2, c.unstable_cancelCallback = function(w) {
        w.callback = null;
      }, c.unstable_forceFrameRate = function(w) {
        0 > w || 125 < w ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : $t = 0 < w ? Math.floor(1e3 / w) : 5;
      }, c.unstable_getCurrentPriorityLevel = function() {
        return q;
      }, c.unstable_next = function(w) {
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
      }, c.unstable_requestPaint = function() {
        k = true;
      }, c.unstable_runWithPriority = function(w, B) {
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
      }, c.unstable_scheduleCallback = function(w, B, V) {
        var st = c.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay, V = typeof V == "number" && 0 < V ? st + V : st) : V = st, w) {
          case 1:
            var yt = -1;
            break;
          case 2:
            yt = 250;
            break;
          case 5:
            yt = 1073741823;
            break;
          case 4:
            yt = 1e4;
            break;
          default:
            yt = 5e3;
        }
        return yt = V + yt, w = {
          id: O++,
          callback: B,
          priorityLevel: w,
          startTime: V,
          expirationTime: yt,
          sortIndex: -1
        }, V > st ? (w.sortIndex = V, s(y, w), d(p) === null && w === d(y) && (vt ? (W(F), F = -1) : vt = true, fe(Nt, V - st))) : (w.sortIndex = yt, s(p, w), ft || tt || (ft = true, Ct || (Ct = true, Zt()))), w;
      }, c.unstable_shouldYield = Ce, c.unstable_wrapCallback = function(w) {
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
    })(Ds)), Ds;
  }
  var $d;
  function cy() {
    return $d || ($d = 1, Us.exports = iy()), Us.exports;
  }
  var Cs = {
    exports: {}
  }, Pt = {};
  var Fd;
  function sy() {
    if (Fd) return Pt;
    Fd = 1;
    var c = Ys();
    function s(p) {
      var y = "https://react.dev/errors/" + p;
      if (1 < arguments.length) {
        y += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var O = 2; O < arguments.length; O++) y += "&args[]=" + encodeURIComponent(arguments[O]);
      }
      return "Minified React error #" + p + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function d() {
    }
    var r = {
      d: {
        f: d,
        r: function() {
          throw Error(s(522));
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
    function A(p, y, O) {
      var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: _,
        key: R == null ? null : "" + R,
        children: p,
        containerInfo: y,
        implementation: O
      };
    }
    var x = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function v(p, y) {
      if (p === "font") return "";
      if (typeof y == "string") return y === "use-credentials" ? y : "";
    }
    return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Pt.createPortal = function(p, y) {
      var O = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(s(299));
      return A(p, y, null, O);
    }, Pt.flushSync = function(p) {
      var y = x.T, O = r.p;
      try {
        if (x.T = null, r.p = 2, p) return p();
      } finally {
        x.T = y, r.p = O, r.d.f();
      }
    }, Pt.preconnect = function(p, y) {
      typeof p == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(p, y));
    }, Pt.prefetchDNS = function(p) {
      typeof p == "string" && r.d.D(p);
    }, Pt.preinit = function(p, y) {
      if (typeof p == "string" && y && typeof y.as == "string") {
        var O = y.as, R = v(O, y.crossOrigin), q = typeof y.integrity == "string" ? y.integrity : void 0, tt = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        O === "style" ? r.d.S(p, typeof y.precedence == "string" ? y.precedence : void 0, {
          crossOrigin: R,
          integrity: q,
          fetchPriority: tt
        }) : O === "script" && r.d.X(p, {
          crossOrigin: R,
          integrity: q,
          fetchPriority: tt,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0
        });
      }
    }, Pt.preinitModule = function(p, y) {
      if (typeof p == "string") if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var O = v(y.as, y.crossOrigin);
          r.d.M(p, {
            crossOrigin: O,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0
          });
        }
      } else y == null && r.d.M(p);
    }, Pt.preload = function(p, y) {
      if (typeof p == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
        var O = y.as, R = v(O, y.crossOrigin);
        r.d.L(p, O, {
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
    }, Pt.preloadModule = function(p, y) {
      if (typeof p == "string") if (y) {
        var O = v(y.as, y.crossOrigin);
        r.d.m(p, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: O,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0
        });
      } else r.d.m(p);
    }, Pt.requestFormReset = function(p) {
      r.d.r(p);
    }, Pt.unstable_batchedUpdates = function(p, y) {
      return p(y);
    }, Pt.useFormState = function(p, y, O) {
      return x.H.useFormState(p, y, O);
    }, Pt.useFormStatus = function() {
      return x.H.useHostTransitionStatus();
    }, Pt.version = "19.2.3", Pt;
  }
  var Id;
  function fy() {
    if (Id) return Cs.exports;
    Id = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
    }
    return c(), Cs.exports = sy(), Cs.exports;
  }
  var Pd;
  function ry() {
    if (Pd) return Ln;
    Pd = 1;
    var c = cy(), s = Ys(), d = fy();
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
    function v(t) {
      if (t.tag === 31) {
        var e = t.memoizedState;
        if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
      }
      return null;
    }
    function p(t) {
      if (A(t) !== t) throw Error(r(188));
    }
    function y(t) {
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
            if (u === l) return p(n), t;
            if (u === a) return p(n), e;
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
    function O(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t;
      for (t = t.child; t !== null; ) {
        if (e = O(t), e !== null) return e;
        t = t.sibling;
      }
      return null;
    }
    var R = Object.assign, q = /* @__PURE__ */ Symbol.for("react.element"), tt = /* @__PURE__ */ Symbol.for("react.transitional.element"), ft = /* @__PURE__ */ Symbol.for("react.portal"), vt = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), J = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), et = /* @__PURE__ */ Symbol.for("react.context"), Z = /* @__PURE__ */ Symbol.for("react.forward_ref"), Nt = /* @__PURE__ */ Symbol.for("react.suspense"), Ct = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), $t = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), Ce = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), Se = Symbol.iterator;
    function Zt(t) {
      return t === null || typeof t != "object" ? null : (t = Se && t[Se] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var Ve = /* @__PURE__ */ Symbol.for("react.client.reference");
    function qe(t) {
      if (t == null) return null;
      if (typeof t == "function") return t.$$typeof === Ve ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case vt:
          return "Fragment";
        case J:
          return "Profiler";
        case k:
          return "StrictMode";
        case Nt:
          return "Suspense";
        case Ct:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof t == "object") switch (t.$$typeof) {
        case ft:
          return "Portal";
        case et:
          return t.displayName || "Context";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case F:
          return e = t.displayName || null, e !== null ? e : qe(t.type) || "Memo";
        case $t:
          e = t._payload, t = t._init;
          try {
            return qe(t(e));
          } catch {
          }
      }
      return null;
    }
    var fe = Array.isArray, w = s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, V = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, st = [], yt = -1;
    function g(t) {
      return {
        current: t
      };
    }
    function C(t) {
      0 > yt || (t.current = st[yt], st[yt] = null, yt--);
    }
    function E(t, e) {
      yt++, st[yt] = t.current, t.current = e;
    }
    var H = g(null), Y = g(null), K = g(null), nt = g(null);
    function Gt(t, e) {
      switch (E(K, e), E(Y, t), E(H, null), e.nodeType) {
        case 9:
        case 11:
          t = (t = e.documentElement) && (t = t.namespaceURI) ? hd(t) : 0;
          break;
        default:
          if (t = e.tagName, e = e.namespaceURI) e = hd(e), t = yd(e, t);
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
      C(H), E(H, t);
    }
    function Mt() {
      C(H), C(Y), C(K);
    }
    function dl(t) {
      t.memoizedState !== null && E(nt, t);
      var e = H.current, l = yd(e, t.type);
      e !== l && (E(Y, t), E(H, l));
    }
    function Ft(t) {
      Y.current === t && (C(H), C(Y)), nt.current === t && (C(nt), Rn._currentValue = V);
    }
    var ml, Kn;
    function Ke(t) {
      if (ml === void 0) try {
        throw Error();
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/);
        ml = e && e[1] || "", Kn = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + ml + t + Kn;
    }
    var It = false;
    function Ne(t, e) {
      if (!t || It) return "";
      It = true;
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
                var T = `
` + m[a].replace(" at new ", " at ");
                return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), T;
              }
            while (1 <= a && 0 <= n);
            break;
          }
        }
      } finally {
        It = false, Error.prepareStackTrace = l;
      }
      return (l = t ? t.displayName || t.name : "") ? Ke(l) : "";
    }
    function Dm(t, e) {
      switch (t.tag) {
        case 26:
        case 27:
        case 5:
          return Ke(t.type);
        case 16:
          return Ke("Lazy");
        case 13:
          return t.child !== e && e !== null ? Ke("Suspense Fallback") : Ke("Suspense");
        case 19:
          return Ke("SuspenseList");
        case 0:
        case 15:
          return Ne(t.type, false);
        case 11:
          return Ne(t.type.render, false);
        case 1:
          return Ne(t.type, true);
        case 31:
          return Ke("Activity");
        default:
          return "";
      }
    }
    function Qs(t) {
      try {
        var e = "", l = null;
        do
          e += Dm(t, l), l = t, t = t.return;
        while (t);
        return e;
      } catch (a) {
        return `
Error generating stack: ` + a.message + `
` + a.stack;
      }
    }
    var hi = Object.prototype.hasOwnProperty, yi = c.unstable_scheduleCallback, gi = c.unstable_cancelCallback, Cm = c.unstable_shouldYield, Rm = c.unstable_requestPaint, re = c.unstable_now, Hm = c.unstable_getCurrentPriorityLevel, Zs = c.unstable_ImmediatePriority, Vs = c.unstable_UserBlockingPriority, Jn = c.unstable_NormalPriority, Bm = c.unstable_LowPriority, Ks = c.unstable_IdlePriority, qm = c.log, Ym = c.unstable_setDisableYieldValue, Ka = null, oe = null;
    function hl(t) {
      if (typeof qm == "function" && Ym(t), oe && typeof oe.setStrictMode == "function") try {
        oe.setStrictMode(Ka, t);
      } catch {
      }
    }
    var de = Math.clz32 ? Math.clz32 : Xm, Lm = Math.log, Gm = Math.LN2;
    function Xm(t) {
      return t >>>= 0, t === 0 ? 32 : 31 - (Lm(t) / Gm | 0) | 0;
    }
    var kn = 256, Wn = 262144, $n = 4194304;
    function Yl(t) {
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
      var o = a & 134217727;
      return o !== 0 ? (a = o & ~u, a !== 0 ? n = Yl(a) : (i &= o, i !== 0 ? n = Yl(i) : l || (l = o & ~t, l !== 0 && (n = Yl(l))))) : (o = a & ~u, o !== 0 ? n = Yl(o) : i !== 0 ? n = Yl(i) : l || (l = a & ~t, l !== 0 && (n = Yl(l)))), n === 0 ? 0 : e !== 0 && e !== n && (e & u) === 0 && (u = n & -n, l = e & -e, u >= l || u === 32 && (l & 4194048) !== 0) ? e : n;
    }
    function Ja(t, e) {
      return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
    }
    function Qm(t, e) {
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
    function Js() {
      var t = $n;
      return $n <<= 1, ($n & 62914560) === 0 && ($n = 4194304), t;
    }
    function bi(t) {
      for (var e = [], l = 0; 31 > l; l++) e.push(t);
      return e;
    }
    function ka(t, e) {
      t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
    }
    function Zm(t, e, l, a, n, u) {
      var i = t.pendingLanes;
      t.pendingLanes = l, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= l, t.entangledLanes &= l, t.errorRecoveryDisabledLanes &= l, t.shellSuspendCounter = 0;
      var o = t.entanglements, m = t.expirationTimes, N = t.hiddenUpdates;
      for (l = i & ~l; 0 < l; ) {
        var T = 31 - de(l), D = 1 << T;
        o[T] = 0, m[T] = -1;
        var j = N[T];
        if (j !== null) for (N[T] = null, T = 0; T < j.length; T++) {
          var z = j[T];
          z !== null && (z.lane &= -536870913);
        }
        l &= ~D;
      }
      a !== 0 && ks(t, a, 0), u !== 0 && n === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(i & ~e));
    }
    function ks(t, e, l) {
      t.pendingLanes |= e, t.suspendedLanes &= ~e;
      var a = 31 - de(e);
      t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | l & 261930;
    }
    function Ws(t, e) {
      var l = t.entangledLanes |= e;
      for (t = t.entanglements; l; ) {
        var a = 31 - de(l), n = 1 << a;
        n & e | t[a] & e && (t[a] |= e), l &= ~n;
      }
    }
    function $s(t, e) {
      var l = e & -e;
      return l = (l & 42) !== 0 ? 1 : _i(l), (l & (t.suspendedLanes | e)) !== 0 ? 0 : l;
    }
    function _i(t) {
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
    function Fs() {
      var t = B.p;
      return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : qd(t.type));
    }
    function Is(t, e) {
      var l = B.p;
      try {
        return B.p = t, e();
      } finally {
        B.p = l;
      }
    }
    var yl = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + yl, le = "__reactProps$" + yl, ua = "__reactContainer$" + yl, pi = "__reactEvents$" + yl, Vm = "__reactListeners$" + yl, Km = "__reactHandles$" + yl, Ps = "__reactResources$" + yl, Wa = "__reactMarker$" + yl;
    function xi(t) {
      delete t[Vt], delete t[le], delete t[pi], delete t[Vm], delete t[Km];
    }
    function ia(t) {
      var e = t[Vt];
      if (e) return e;
      for (var l = t.parentNode; l; ) {
        if (e = l[ua] || l[Vt]) {
          if (l = e.alternate, e.child !== null || l !== null && l.child !== null) for (t = Sd(t); t !== null; ) {
            if (l = t[Vt]) return l;
            t = Sd(t);
          }
          return e;
        }
        t = l, l = t.parentNode;
      }
      return null;
    }
    function ca(t) {
      if (t = t[Vt] || t[ua]) {
        var e = t.tag;
        if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t;
      }
      return null;
    }
    function $a(t) {
      var e = t.tag;
      if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
      throw Error(r(33));
    }
    function sa(t) {
      var e = t[Ps];
      return e || (e = t[Ps] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), e;
    }
    function Xt(t) {
      t[Wa] = true;
    }
    var tf = /* @__PURE__ */ new Set(), ef = {};
    function Ll(t, e) {
      fa(t, e), fa(t + "Capture", e);
    }
    function fa(t, e) {
      for (ef[t] = e, t = 0; t < e.length; t++) tf.add(e[t]);
    }
    var Jm = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), lf = {}, af = {};
    function km(t) {
      return hi.call(af, t) ? true : hi.call(lf, t) ? false : Jm.test(t) ? af[t] = true : (lf[t] = true, false);
    }
    function In(t, e, l) {
      if (km(e)) if (l === null) t.removeAttribute(e);
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
    function Pn(t, e, l) {
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
    function Je(t, e, l, a) {
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
    function je(t) {
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
    function nf(t) {
      var e = t.type;
      return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
    }
    function Wm(t, e, l) {
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
    function Si(t) {
      if (!t._valueTracker) {
        var e = nf(t) ? "checked" : "value";
        t._valueTracker = Wm(t, e, "" + t[e]);
      }
    }
    function uf(t) {
      if (!t) return false;
      var e = t._valueTracker;
      if (!e) return true;
      var l = e.getValue(), a = "";
      return t && (a = nf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== l ? (e.setValue(t), true) : false;
    }
    function tu(t) {
      if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
      try {
        return t.activeElement || t.body;
      } catch {
        return t.body;
      }
    }
    var $m = /[\n"\\]/g;
    function Ae(t) {
      return t.replace($m, function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      });
    }
    function Ni(t, e, l, a, n, u, i, o) {
      t.name = "", i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? t.type = i : t.removeAttribute("type"), e != null ? i === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + je(e)) : t.value !== "" + je(e) && (t.value = "" + je(e)) : i !== "submit" && i !== "reset" || t.removeAttribute("value"), e != null ? ji(t, i, je(e)) : l != null ? ji(t, i, je(l)) : a != null && t.removeAttribute("value"), n == null && u != null && (t.defaultChecked = !!u), n != null && (t.checked = n && typeof n != "function" && typeof n != "symbol"), o != null && typeof o != "function" && typeof o != "symbol" && typeof o != "boolean" ? t.name = "" + je(o) : t.removeAttribute("name");
    }
    function cf(t, e, l, a, n, u, i, o) {
      if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || l != null) {
        if (!(u !== "submit" && u !== "reset" || e != null)) {
          Si(t);
          return;
        }
        l = l != null ? "" + je(l) : "", e = e != null ? "" + je(e) : l, o || e === t.value || (t.value = e), t.defaultValue = e;
      }
      a = a ?? n, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = o ? t.checked : !!a, t.defaultChecked = !!a, i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (t.name = i), Si(t);
    }
    function ji(t, e, l) {
      e === "number" && tu(t.ownerDocument) === t || t.defaultValue === "" + l || (t.defaultValue = "" + l);
    }
    function ra(t, e, l, a) {
      if (t = t.options, e) {
        e = {};
        for (var n = 0; n < l.length; n++) e["$" + l[n]] = true;
        for (l = 0; l < t.length; l++) n = e.hasOwnProperty("$" + t[l].value), t[l].selected !== n && (t[l].selected = n), n && a && (t[l].defaultSelected = true);
      } else {
        for (l = "" + je(l), e = null, n = 0; n < t.length; n++) {
          if (t[n].value === l) {
            t[n].selected = true, a && (t[n].defaultSelected = true);
            return;
          }
          e !== null || t[n].disabled || (e = t[n]);
        }
        e !== null && (e.selected = true);
      }
    }
    function sf(t, e, l) {
      if (e != null && (e = "" + je(e), e !== t.value && (t.value = e), l == null)) {
        t.defaultValue !== e && (t.defaultValue = e);
        return;
      }
      t.defaultValue = l != null ? "" + je(l) : "";
    }
    function ff(t, e, l, a) {
      if (e == null) {
        if (a != null) {
          if (l != null) throw Error(r(92));
          if (fe(a)) {
            if (1 < a.length) throw Error(r(93));
            a = a[0];
          }
          l = a;
        }
        l == null && (l = ""), e = l;
      }
      l = je(e), t.defaultValue = l, a = t.textContent, a === l && a !== "" && a !== null && (t.value = a), Si(t);
    }
    function oa(t, e) {
      if (e) {
        var l = t.firstChild;
        if (l && l === t.lastChild && l.nodeType === 3) {
          l.nodeValue = e;
          return;
        }
      }
      t.textContent = e;
    }
    var Fm = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function rf(t, e, l) {
      var a = e.indexOf("--") === 0;
      l == null || typeof l == "boolean" || l === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, l) : typeof l != "number" || l === 0 || Fm.has(e) ? e === "float" ? t.cssFloat = l : t[e] = ("" + l).trim() : t[e] = l + "px";
    }
    function of(t, e, l) {
      if (e != null && typeof e != "object") throw Error(r(62));
      if (t = t.style, l != null) {
        for (var a in l) !l.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "");
        for (var n in e) a = e[n], e.hasOwnProperty(n) && l[n] !== a && rf(t, n, a);
      } else for (var u in e) e.hasOwnProperty(u) && rf(t, u, e[u]);
    }
    function Ai(t) {
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
    var Im = /* @__PURE__ */ new Map([
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
    ]), Pm = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function eu(t) {
      return Pm.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
    }
    function ke() {
    }
    var zi = null;
    function Ei(t) {
      return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
    }
    var da = null, ma = null;
    function df(t) {
      var e = ca(t);
      if (e && (t = e.stateNode)) {
        var l = t[le] || null;
        t: switch (t = e.stateNode, e.type) {
          case "input":
            if (Ni(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), e = l.name, l.type === "radio" && e != null) {
              for (l = t; l.parentNode; ) l = l.parentNode;
              for (l = l.querySelectorAll('input[name="' + Ae("" + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
                var a = l[e];
                if (a !== t && a.form === t.form) {
                  var n = a[le] || null;
                  if (!n) throw Error(r(90));
                  Ni(a, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
                }
              }
              for (e = 0; e < l.length; e++) a = l[e], a.form === t.form && uf(a);
            }
            break t;
          case "textarea":
            sf(t, l.value, l.defaultValue);
            break t;
          case "select":
            e = l.value, e != null && ra(t, !!l.multiple, e, false);
        }
      }
    }
    var Ti = false;
    function mf(t, e, l) {
      if (Ti) return t(e, l);
      Ti = true;
      try {
        var a = t(e);
        return a;
      } finally {
        if (Ti = false, (da !== null || ma !== null) && (Xu(), da && (e = da, t = ma, ma = da = null, df(e), t))) for (e = 0; e < t.length; e++) df(t[e]);
      }
    }
    function Fa(t, e) {
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
    var We = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mi = false;
    if (We) try {
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
    function hf() {
      if (lu) return lu;
      var t, e = wi, l = e.length, a, n = "value" in gl ? gl.value : gl.textContent, u = n.length;
      for (t = 0; t < l && e[t] === n[t]; t++) ;
      var i = l - t;
      for (a = 1; a <= i && e[l - a] === n[u - a]; a++) ;
      return lu = n.slice(t, 1 < a ? 1 - a : void 0);
    }
    function au(t) {
      var e = t.keyCode;
      return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
    }
    function nu() {
      return true;
    }
    function yf() {
      return false;
    }
    function ae(t) {
      function e(l, a, n, u, i) {
        this._reactName = l, this._targetInst = n, this.type = a, this.nativeEvent = u, this.target = i, this.currentTarget = null;
        for (var o in t) t.hasOwnProperty(o) && (l = t[o], this[o] = l ? l(u) : u[o]);
        return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === false) ? nu : yf, this.isPropagationStopped = yf, this;
      }
      return R(e.prototype, {
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
      }), e;
    }
    var Gl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, uu = ae(Gl), Pa = R({}, Gl, {
      view: 0,
      detail: 0
    }), t0 = ae(Pa), Oi, Ui, tn, iu = R({}, Pa, {
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
        return "movementX" in t ? t.movementX : (t !== tn && (tn && t.type === "mousemove" ? (Oi = t.screenX - tn.screenX, Ui = t.screenY - tn.screenY) : Ui = Oi = 0, tn = t), Oi);
      },
      movementY: function(t) {
        return "movementY" in t ? t.movementY : Ui;
      }
    }), gf = ae(iu), e0 = R({}, iu, {
      dataTransfer: 0
    }), l0 = ae(e0), a0 = R({}, Pa, {
      relatedTarget: 0
    }), Di = ae(a0), n0 = R({}, Gl, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), u0 = ae(n0), i0 = R({}, Gl, {
      clipboardData: function(t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      }
    }), c0 = ae(i0), s0 = R({}, Gl, {
      data: 0
    }), bf = ae(s0), f0 = {
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
    }, r0 = {
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
    }, o0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function d0(t) {
      var e = this.nativeEvent;
      return e.getModifierState ? e.getModifierState(t) : (t = o0[t]) ? !!e[t] : false;
    }
    function Ci() {
      return d0;
    }
    var m0 = R({}, Pa, {
      key: function(t) {
        if (t.key) {
          var e = f0[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress" ? (t = au(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? r0[t.keyCode] || "Unidentified" : "";
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
        return t.type === "keypress" ? au(t) : 0;
      },
      keyCode: function(t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function(t) {
        return t.type === "keypress" ? au(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      }
    }), h0 = ae(m0), y0 = R({}, iu, {
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
    }), _f = ae(y0), g0 = R({}, Pa, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Ci
    }), b0 = ae(g0), _0 = R({}, Gl, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), v0 = ae(_0), p0 = R({}, iu, {
      deltaX: function(t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
      },
      deltaY: function(t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), x0 = ae(p0), S0 = R({}, Gl, {
      newState: 0,
      oldState: 0
    }), N0 = ae(S0), j0 = [
      9,
      13,
      27,
      32
    ], Ri = We && "CompositionEvent" in window, en = null;
    We && "documentMode" in document && (en = document.documentMode);
    var A0 = We && "TextEvent" in window && !en, vf = We && (!Ri || en && 8 < en && 11 >= en), pf = " ", xf = false;
    function Sf(t, e) {
      switch (t) {
        case "keyup":
          return j0.indexOf(e.keyCode) !== -1;
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
    function Nf(t) {
      return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
    }
    var ha = false;
    function z0(t, e) {
      switch (t) {
        case "compositionend":
          return Nf(e);
        case "keypress":
          return e.which !== 32 ? null : (xf = true, pf);
        case "textInput":
          return t = e.data, t === pf && xf ? null : t;
        default:
          return null;
      }
    }
    function E0(t, e) {
      if (ha) return t === "compositionend" || !Ri && Sf(t, e) ? (t = hf(), lu = wi = gl = null, ha = false, t) : null;
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
          return vf && e.locale !== "ko" ? null : e.data;
        default:
          return null;
      }
    }
    var T0 = {
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
    function jf(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e === "input" ? !!T0[t.type] : e === "textarea";
    }
    function Af(t, e, l, a) {
      da ? ma ? ma.push(a) : ma = [
        a
      ] : da = a, e = Wu(e, "onChange"), 0 < e.length && (l = new uu("onChange", "change", null, l, a), t.push({
        event: l,
        listeners: e
      }));
    }
    var ln = null, an = null;
    function M0(t) {
      sd(t, 0);
    }
    function cu(t) {
      var e = $a(t);
      if (uf(e)) return t;
    }
    function zf(t, e) {
      if (t === "change") return e;
    }
    var Ef = false;
    if (We) {
      var Hi;
      if (We) {
        var Bi = "oninput" in document;
        if (!Bi) {
          var Tf = document.createElement("div");
          Tf.setAttribute("oninput", "return;"), Bi = typeof Tf.oninput == "function";
        }
        Hi = Bi;
      } else Hi = false;
      Ef = Hi && (!document.documentMode || 9 < document.documentMode);
    }
    function Mf() {
      ln && (ln.detachEvent("onpropertychange", wf), an = ln = null);
    }
    function wf(t) {
      if (t.propertyName === "value" && cu(an)) {
        var e = [];
        Af(e, an, t, Ei(t)), mf(M0, e);
      }
    }
    function w0(t, e, l) {
      t === "focusin" ? (Mf(), ln = e, an = l, ln.attachEvent("onpropertychange", wf)) : t === "focusout" && Mf();
    }
    function O0(t) {
      if (t === "selectionchange" || t === "keyup" || t === "keydown") return cu(an);
    }
    function U0(t, e) {
      if (t === "click") return cu(e);
    }
    function D0(t, e) {
      if (t === "input" || t === "change") return cu(e);
    }
    function C0(t, e) {
      return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
    }
    var me = typeof Object.is == "function" ? Object.is : C0;
    function nn(t, e) {
      if (me(t, e)) return true;
      if (typeof t != "object" || t === null || typeof e != "object" || e === null) return false;
      var l = Object.keys(t), a = Object.keys(e);
      if (l.length !== a.length) return false;
      for (a = 0; a < l.length; a++) {
        var n = l[a];
        if (!hi.call(e, n) || !me(t[n], e[n])) return false;
      }
      return true;
    }
    function Of(t) {
      for (; t && t.firstChild; ) t = t.firstChild;
      return t;
    }
    function Uf(t, e) {
      var l = Of(t);
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
        l = Of(l);
      }
    }
    function Df(t, e) {
      return t && e ? t === e ? true : t && t.nodeType === 3 ? false : e && e.nodeType === 3 ? Df(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : false : false;
    }
    function Cf(t) {
      t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
      for (var e = tu(t.document); e instanceof t.HTMLIFrameElement; ) {
        try {
          var l = typeof e.contentWindow.location.href == "string";
        } catch {
          l = false;
        }
        if (l) t = e.contentWindow;
        else break;
        e = tu(t.document);
      }
      return e;
    }
    function qi(t) {
      var e = t && t.nodeName && t.nodeName.toLowerCase();
      return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
    }
    var R0 = We && "documentMode" in document && 11 >= document.documentMode, ya = null, Yi = null, un = null, Li = false;
    function Rf(t, e, l) {
      var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
      Li || ya == null || ya !== tu(a) || (a = ya, "selectionStart" in a && qi(a) ? a = {
        start: a.selectionStart,
        end: a.selectionEnd
      } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      }), un && nn(un, a) || (un = a, a = Wu(Yi, "onSelect"), 0 < a.length && (e = new uu("onSelect", "select", null, e, l), t.push({
        event: e,
        listeners: a
      }), e.target = ya)));
    }
    function Xl(t, e) {
      var l = {};
      return l[t.toLowerCase()] = e.toLowerCase(), l["Webkit" + t] = "webkit" + e, l["Moz" + t] = "moz" + e, l;
    }
    var ga = {
      animationend: Xl("Animation", "AnimationEnd"),
      animationiteration: Xl("Animation", "AnimationIteration"),
      animationstart: Xl("Animation", "AnimationStart"),
      transitionrun: Xl("Transition", "TransitionRun"),
      transitionstart: Xl("Transition", "TransitionStart"),
      transitioncancel: Xl("Transition", "TransitionCancel"),
      transitionend: Xl("Transition", "TransitionEnd")
    }, Gi = {}, Hf = {};
    We && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete ga.animationend.animation, delete ga.animationiteration.animation, delete ga.animationstart.animation), "TransitionEvent" in window || delete ga.transitionend.transition);
    function Ql(t) {
      if (Gi[t]) return Gi[t];
      if (!ga[t]) return t;
      var e = ga[t], l;
      for (l in e) if (e.hasOwnProperty(l) && l in Hf) return Gi[t] = e[l];
      return t;
    }
    var Bf = Ql("animationend"), qf = Ql("animationiteration"), Yf = Ql("animationstart"), H0 = Ql("transitionrun"), B0 = Ql("transitionstart"), q0 = Ql("transitioncancel"), Lf = Ql("transitionend"), Gf = /* @__PURE__ */ new Map(), Xi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Xi.push("scrollEnd");
    function Re(t, e) {
      Gf.set(t, e), Ll(e, [
        t
      ]);
    }
    var su = typeof reportError == "function" ? reportError : function(t) {
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
    }, ze = [], ba = 0, Qi = 0;
    function fu() {
      for (var t = ba, e = Qi = ba = 0; e < t; ) {
        var l = ze[e];
        ze[e++] = null;
        var a = ze[e];
        ze[e++] = null;
        var n = ze[e];
        ze[e++] = null;
        var u = ze[e];
        if (ze[e++] = null, a !== null && n !== null) {
          var i = a.pending;
          i === null ? n.next = n : (n.next = i.next, i.next = n), a.pending = n;
        }
        u !== 0 && Xf(l, n, u);
      }
    }
    function ru(t, e, l, a) {
      ze[ba++] = t, ze[ba++] = e, ze[ba++] = l, ze[ba++] = a, Qi |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
    }
    function Zi(t, e, l, a) {
      return ru(t, e, l, a), ou(t);
    }
    function Zl(t, e) {
      return ru(t, null, null, e), ou(t);
    }
    function Xf(t, e, l) {
      t.lanes |= l;
      var a = t.alternate;
      a !== null && (a.lanes |= l);
      for (var n = false, u = t.return; u !== null; ) u.childLanes |= l, a = u.alternate, a !== null && (a.childLanes |= l), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (n = true)), t = u, u = u.return;
      return t.tag === 3 ? (u = t.stateNode, n && e !== null && (n = 31 - de(l), t = u.hiddenUpdates, a = t[n], a === null ? t[n] = [
        e
      ] : a.push(e), e.lane = l | 536870912), u) : null;
    }
    function ou(t) {
      if (50 < Tn) throw Tn = 0, Pc = null, Error(r(185));
      for (var e = t.return; e !== null; ) t = e, e = t.return;
      return t.tag === 3 ? t.stateNode : null;
    }
    var _a = {};
    function Y0(t, e, l, a) {
      this.tag = t, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function he(t, e, l, a) {
      return new Y0(t, e, l, a);
    }
    function Vi(t) {
      return t = t.prototype, !(!t || !t.isReactComponent);
    }
    function $e(t, e) {
      var l = t.alternate;
      return l === null ? (l = he(t.tag, e, t.key, t.mode), l.elementType = t.elementType, l.type = t.type, l.stateNode = t.stateNode, l.alternate = t, t.alternate = l) : (l.pendingProps = e, l.type = t.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = t.flags & 65011712, l.childLanes = t.childLanes, l.lanes = t.lanes, l.child = t.child, l.memoizedProps = t.memoizedProps, l.memoizedState = t.memoizedState, l.updateQueue = t.updateQueue, e = t.dependencies, l.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }, l.sibling = t.sibling, l.index = t.index, l.ref = t.ref, l.refCleanup = t.refCleanup, l;
    }
    function Qf(t, e) {
      t.flags &= 65011714;
      var l = t.alternate;
      return l === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = l.childLanes, t.lanes = l.lanes, t.child = l.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = l.memoizedProps, t.memoizedState = l.memoizedState, t.updateQueue = l.updateQueue, t.type = l.type, e = l.dependencies, t.dependencies = e === null ? null : {
        lanes: e.lanes,
        firstContext: e.firstContext
      }), t;
    }
    function du(t, e, l, a, n, u) {
      var i = 0;
      if (a = t, typeof t == "function") Vi(t) && (i = 1);
      else if (typeof t == "string") i = Zh(t, l, H.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
      else t: switch (t) {
        case te:
          return t = he(31, l, e, n), t.elementType = te, t.lanes = u, t;
        case vt:
          return Vl(l.children, n, u, e);
        case k:
          i = 8, n |= 24;
          break;
        case J:
          return t = he(12, l, e, n | 2), t.elementType = J, t.lanes = u, t;
        case Nt:
          return t = he(13, l, e, n), t.elementType = Nt, t.lanes = u, t;
        case Ct:
          return t = he(19, l, e, n), t.elementType = Ct, t.lanes = u, t;
        default:
          if (typeof t == "object" && t !== null) switch (t.$$typeof) {
            case et:
              i = 10;
              break t;
            case W:
              i = 9;
              break t;
            case Z:
              i = 11;
              break t;
            case F:
              i = 14;
              break t;
            case $t:
              i = 16, a = null;
              break t;
          }
          i = 29, l = Error(r(130, t === null ? "null" : typeof t, "")), a = null;
      }
      return e = he(i, l, e, n), e.elementType = t, e.type = a, e.lanes = u, e;
    }
    function Vl(t, e, l, a) {
      return t = he(7, t, a, e), t.lanes = l, t;
    }
    function Ki(t, e, l) {
      return t = he(6, t, null, e), t.lanes = l, t;
    }
    function Zf(t) {
      var e = he(18, null, null, 0);
      return e.stateNode = t, e;
    }
    function Ji(t, e, l) {
      return e = he(4, t.children !== null ? t.children : [], t.key, e), e.lanes = l, e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      }, e;
    }
    var Vf = /* @__PURE__ */ new WeakMap();
    function Ee(t, e) {
      if (typeof t == "object" && t !== null) {
        var l = Vf.get(t);
        return l !== void 0 ? l : (e = {
          value: t,
          source: e,
          stack: Qs(e)
        }, Vf.set(t, e), e);
      }
      return {
        value: t,
        source: e,
        stack: Qs(e)
      };
    }
    var va = [], pa = 0, mu = null, cn = 0, Te = [], Me = 0, bl = null, Ye = 1, Le = "";
    function Fe(t, e) {
      va[pa++] = cn, va[pa++] = mu, mu = t, cn = e;
    }
    function Kf(t, e, l) {
      Te[Me++] = Ye, Te[Me++] = Le, Te[Me++] = bl, bl = t;
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
      t.return !== null && (Fe(t, 1), Kf(t, 1, 0));
    }
    function Wi(t) {
      for (; t === mu; ) mu = va[--pa], va[pa] = null, cn = va[--pa], va[pa] = null;
      for (; t === bl; ) bl = Te[--Me], Te[Me] = null, Le = Te[--Me], Te[Me] = null, Ye = Te[--Me], Te[Me] = null;
    }
    function Jf(t, e) {
      Te[Me++] = Ye, Te[Me++] = Le, Te[Me++] = bl, Ye = e.id, Le = e.overflow, bl = t;
    }
    var Kt = null, At = null, ct = false, _l = null, we = false, $i = Error(r(519));
    function vl(t) {
      var e = Error(r(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw sn(Ee(e, t)), $i;
    }
    function kf(t) {
      var e = t.stateNode, l = t.type, a = t.memoizedProps;
      switch (e[Vt] = t, e[le] = a, l) {
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
          for (l = 0; l < wn.length; l++) at(wn[l], e);
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
          at("invalid", e), cf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, true);
          break;
        case "select":
          at("invalid", e);
          break;
        case "textarea":
          at("invalid", e), ff(e, a.value, a.defaultValue, a.children);
      }
      l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || e.textContent === "" + l || a.suppressHydrationWarning === true || dd(e.textContent, l) ? (a.popover != null && (at("beforetoggle", e), at("toggle", e)), a.onScroll != null && at("scroll", e), a.onScrollEnd != null && at("scrollend", e), a.onClick != null && (e.onclick = ke), e = true) : e = false, e || vl(t, true);
    }
    function Wf(t) {
      for (Kt = t.return; Kt; ) switch (Kt.tag) {
        case 5:
        case 31:
        case 13:
          we = false;
          return;
        case 27:
        case 3:
          we = true;
          return;
        default:
          Kt = Kt.return;
      }
    }
    function xa(t) {
      if (t !== Kt) return false;
      if (!ct) return Wf(t), ct = true, false;
      var e = t.tag, l;
      if ((l = e !== 3 && e !== 27) && ((l = e === 5) && (l = t.type, l = !(l !== "form" && l !== "button") || hs(t.type, t.memoizedProps)), l = !l), l && At && vl(t), Wf(t), e === 13) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        At = xd(t);
      } else if (e === 31) {
        if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
        At = xd(t);
      } else e === 27 ? (e = At, Dl(t.type) ? (t = vs, vs = null, At = t) : At = e) : At = Kt ? Ue(t.stateNode.nextSibling) : null;
      return true;
    }
    function Kl() {
      At = Kt = null, ct = false;
    }
    function Fi() {
      var t = _l;
      return t !== null && (ce === null ? ce = t : ce.push.apply(ce, t), _l = null), t;
    }
    function sn(t) {
      _l === null ? _l = [
        t
      ] : _l.push(t);
    }
    var Ii = g(null), Jl = null, Ie = null;
    function pl(t, e, l) {
      E(Ii, e._currentValue), e._currentValue = l;
    }
    function Pe(t) {
      t._currentValue = Ii.current, C(Ii);
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
            var o = u;
            u = n;
            for (var m = 0; m < e.length; m++) if (o.context === e[m]) {
              u.lanes |= l, o = u.alternate, o !== null && (o.lanes |= l), Pi(u.return, l, t), a || (i = null);
              break t;
            }
            u = o.next;
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
    function Sa(t, e, l, a) {
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
            me(n.pendingProps.value, i.value) || (t !== null ? t.push(o) : t = [
              o
            ]);
          }
        } else if (n === nt.current) {
          if (i = n.alternate, i === null) throw Error(r(387));
          i.memoizedState.memoizedState !== n.memoizedState.memoizedState && (t !== null ? t.push(Rn) : t = [
            Rn
          ]);
        }
        n = n.return;
      }
      t !== null && tc(e, t, l, a), e.flags |= 262144;
    }
    function hu(t) {
      for (t = t.firstContext; t !== null; ) {
        if (!me(t.context._currentValue, t.memoizedValue)) return true;
        t = t.next;
      }
      return false;
    }
    function kl(t) {
      Jl = t, Ie = null, t = t.dependencies, t !== null && (t.firstContext = null);
    }
    function Jt(t) {
      return $f(Jl, t);
    }
    function yu(t, e) {
      return Jl === null && kl(t), $f(t, e);
    }
    function $f(t, e) {
      var l = e._currentValue;
      if (e = {
        context: e,
        memoizedValue: l,
        next: null
      }, Ie === null) {
        if (t === null) throw Error(r(308));
        Ie = e, t.dependencies = {
          lanes: 0,
          firstContext: e
        }, t.flags |= 524288;
      } else Ie = Ie.next = e;
      return l;
    }
    var L0 = typeof AbortController < "u" ? AbortController : function() {
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
    }, G0 = c.unstable_scheduleCallback, X0 = c.unstable_NormalPriority, Rt = {
      $$typeof: et,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function ec() {
      return {
        controller: new L0(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function fn(t) {
      t.refCount--, t.refCount === 0 && G0(X0, function() {
        t.controller.abort();
      });
    }
    var rn = null, lc = 0, Na = 0, ja = null;
    function Q0(t, e) {
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
      return lc++, e.then(Ff, Ff), e;
    }
    function Ff() {
      if (--lc === 0 && rn !== null) {
        ja !== null && (ja.status = "fulfilled");
        var t = rn;
        rn = null, Na = 0, ja = null;
        for (var e = 0; e < t.length; e++) (0, t[e])();
      }
    }
    function Z0(t, e) {
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
    var If = w.S;
    w.S = function(t, e) {
      Ho = re(), typeof e == "object" && e !== null && typeof e.then == "function" && Q0(t, e), If !== null && If(t, e);
    };
    var Wl = g(null);
    function ac() {
      var t = Wl.current;
      return t !== null ? t : jt.pooledCache;
    }
    function gu(t, e) {
      e === null ? E(Wl, Wl.current) : E(Wl, e.pool);
    }
    function Pf() {
      var t = ac();
      return t === null ? null : {
        parent: Rt._currentValue,
        pool: t
      };
    }
    var Aa = Error(r(460)), nc = Error(r(474)), bu = Error(r(542)), _u = {
      then: function() {
      }
    };
    function tr(t) {
      return t = t.status, t === "fulfilled" || t === "rejected";
    }
    function er(t, e, l) {
      switch (l = t[l], l === void 0 ? t.push(e) : l !== e && (e.then(ke, ke), e = l), e.status) {
        case "fulfilled":
          return e.value;
        case "rejected":
          throw t = e.reason, ar(t), t;
        default:
          if (typeof e.status == "string") e.then(ke, ke);
          else {
            if (t = jt, t !== null && 100 < t.shellSuspendCounter) throw Error(r(482));
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
          throw Fl = e, Aa;
      }
    }
    function $l(t) {
      try {
        var e = t._init;
        return e(t._payload);
      } catch (l) {
        throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Fl = l, Aa) : l;
      }
    }
    var Fl = null;
    function lr() {
      if (Fl === null) throw Error(r(459));
      var t = Fl;
      return Fl = null, t;
    }
    function ar(t) {
      if (t === Aa || t === bu) throw Error(r(483));
    }
    var za = null, on = 0;
    function vu(t) {
      var e = on;
      return on += 1, za === null && (za = []), er(za, t, e);
    }
    function dn(t, e) {
      e = e.props.ref, t.ref = e !== void 0 ? e : null;
    }
    function pu(t, e) {
      throw e.$$typeof === q ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t)));
    }
    function nr(t) {
      function e(b, h) {
        if (t) {
          var S = b.deletions;
          S === null ? (b.deletions = [
            h
          ], b.flags |= 16) : S.push(h);
        }
      }
      function l(b, h) {
        if (!t) return null;
        for (; h !== null; ) e(b, h), h = h.sibling;
        return null;
      }
      function a(b) {
        for (var h = /* @__PURE__ */ new Map(); b !== null; ) b.key !== null ? h.set(b.key, b) : h.set(b.index, b), b = b.sibling;
        return h;
      }
      function n(b, h) {
        return b = $e(b, h), b.index = 0, b.sibling = null, b;
      }
      function u(b, h, S) {
        return b.index = S, t ? (S = b.alternate, S !== null ? (S = S.index, S < h ? (b.flags |= 67108866, h) : S) : (b.flags |= 67108866, h)) : (b.flags |= 1048576, h);
      }
      function i(b) {
        return t && b.alternate === null && (b.flags |= 67108866), b;
      }
      function o(b, h, S, U) {
        return h === null || h.tag !== 6 ? (h = Ki(S, b.mode, U), h.return = b, h) : (h = n(h, S), h.return = b, h);
      }
      function m(b, h, S, U) {
        var X = S.type;
        return X === vt ? T(b, h, S.props.children, U, S.key) : h !== null && (h.elementType === X || typeof X == "object" && X !== null && X.$$typeof === $t && $l(X) === h.type) ? (h = n(h, S.props), dn(h, S), h.return = b, h) : (h = du(S.type, S.key, S.props, null, b.mode, U), dn(h, S), h.return = b, h);
      }
      function N(b, h, S, U) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== S.containerInfo || h.stateNode.implementation !== S.implementation ? (h = Ji(S, b.mode, U), h.return = b, h) : (h = n(h, S.children || []), h.return = b, h);
      }
      function T(b, h, S, U, X) {
        return h === null || h.tag !== 7 ? (h = Vl(S, b.mode, U, X), h.return = b, h) : (h = n(h, S), h.return = b, h);
      }
      function D(b, h, S) {
        if (typeof h == "string" && h !== "" || typeof h == "number" || typeof h == "bigint") return h = Ki("" + h, b.mode, S), h.return = b, h;
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case tt:
              return S = du(h.type, h.key, h.props, null, b.mode, S), dn(S, h), S.return = b, S;
            case ft:
              return h = Ji(h, b.mode, S), h.return = b, h;
            case $t:
              return h = $l(h), D(b, h, S);
          }
          if (fe(h) || Zt(h)) return h = Vl(h, b.mode, S, null), h.return = b, h;
          if (typeof h.then == "function") return D(b, vu(h), S);
          if (h.$$typeof === et) return D(b, yu(b, h), S);
          pu(b, h);
        }
        return null;
      }
      function j(b, h, S, U) {
        var X = h !== null ? h.key : null;
        if (typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint") return X !== null ? null : o(b, h, "" + S, U);
        if (typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case tt:
              return S.key === X ? m(b, h, S, U) : null;
            case ft:
              return S.key === X ? N(b, h, S, U) : null;
            case $t:
              return S = $l(S), j(b, h, S, U);
          }
          if (fe(S) || Zt(S)) return X !== null ? null : T(b, h, S, U, null);
          if (typeof S.then == "function") return j(b, h, vu(S), U);
          if (S.$$typeof === et) return j(b, h, yu(b, S), U);
          pu(b, S);
        }
        return null;
      }
      function z(b, h, S, U, X) {
        if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint") return b = b.get(S) || null, o(h, b, "" + U, X);
        if (typeof U == "object" && U !== null) {
          switch (U.$$typeof) {
            case tt:
              return b = b.get(U.key === null ? S : U.key) || null, m(h, b, U, X);
            case ft:
              return b = b.get(U.key === null ? S : U.key) || null, N(h, b, U, X);
            case $t:
              return U = $l(U), z(b, h, S, U, X);
          }
          if (fe(U) || Zt(U)) return b = b.get(S) || null, T(h, b, U, X, null);
          if (typeof U.then == "function") return z(b, h, S, vu(U), X);
          if (U.$$typeof === et) return z(b, h, S, yu(h, U), X);
          pu(h, U);
        }
        return null;
      }
      function L(b, h, S, U) {
        for (var X = null, ot = null, G = h, P = h = 0, it = null; G !== null && P < S.length; P++) {
          G.index > P ? (it = G, G = null) : it = G.sibling;
          var dt = j(b, G, S[P], U);
          if (dt === null) {
            G === null && (G = it);
            break;
          }
          t && G && dt.alternate === null && e(b, G), h = u(dt, h, P), ot === null ? X = dt : ot.sibling = dt, ot = dt, G = it;
        }
        if (P === S.length) return l(b, G), ct && Fe(b, P), X;
        if (G === null) {
          for (; P < S.length; P++) G = D(b, S[P], U), G !== null && (h = u(G, h, P), ot === null ? X = G : ot.sibling = G, ot = G);
          return ct && Fe(b, P), X;
        }
        for (G = a(G); P < S.length; P++) it = z(G, b, P, S[P], U), it !== null && (t && it.alternate !== null && G.delete(it.key === null ? P : it.key), h = u(it, h, P), ot === null ? X = it : ot.sibling = it, ot = it);
        return t && G.forEach(function(ql) {
          return e(b, ql);
        }), ct && Fe(b, P), X;
      }
      function Q(b, h, S, U) {
        if (S == null) throw Error(r(151));
        for (var X = null, ot = null, G = h, P = h = 0, it = null, dt = S.next(); G !== null && !dt.done; P++, dt = S.next()) {
          G.index > P ? (it = G, G = null) : it = G.sibling;
          var ql = j(b, G, dt.value, U);
          if (ql === null) {
            G === null && (G = it);
            break;
          }
          t && G && ql.alternate === null && e(b, G), h = u(ql, h, P), ot === null ? X = ql : ot.sibling = ql, ot = ql, G = it;
        }
        if (dt.done) return l(b, G), ct && Fe(b, P), X;
        if (G === null) {
          for (; !dt.done; P++, dt = S.next()) dt = D(b, dt.value, U), dt !== null && (h = u(dt, h, P), ot === null ? X = dt : ot.sibling = dt, ot = dt);
          return ct && Fe(b, P), X;
        }
        for (G = a(G); !dt.done; P++, dt = S.next()) dt = z(G, b, P, dt.value, U), dt !== null && (t && dt.alternate !== null && G.delete(dt.key === null ? P : dt.key), h = u(dt, h, P), ot === null ? X = dt : ot.sibling = dt, ot = dt);
        return t && G.forEach(function(ey) {
          return e(b, ey);
        }), ct && Fe(b, P), X;
      }
      function St(b, h, S, U) {
        if (typeof S == "object" && S !== null && S.type === vt && S.key === null && (S = S.props.children), typeof S == "object" && S !== null) {
          switch (S.$$typeof) {
            case tt:
              t: {
                for (var X = S.key; h !== null; ) {
                  if (h.key === X) {
                    if (X = S.type, X === vt) {
                      if (h.tag === 7) {
                        l(b, h.sibling), U = n(h, S.props.children), U.return = b, b = U;
                        break t;
                      }
                    } else if (h.elementType === X || typeof X == "object" && X !== null && X.$$typeof === $t && $l(X) === h.type) {
                      l(b, h.sibling), U = n(h, S.props), dn(U, S), U.return = b, b = U;
                      break t;
                    }
                    l(b, h);
                    break;
                  } else e(b, h);
                  h = h.sibling;
                }
                S.type === vt ? (U = Vl(S.props.children, b.mode, U, S.key), U.return = b, b = U) : (U = du(S.type, S.key, S.props, null, b.mode, U), dn(U, S), U.return = b, b = U);
              }
              return i(b);
            case ft:
              t: {
                for (X = S.key; h !== null; ) {
                  if (h.key === X) if (h.tag === 4 && h.stateNode.containerInfo === S.containerInfo && h.stateNode.implementation === S.implementation) {
                    l(b, h.sibling), U = n(h, S.children || []), U.return = b, b = U;
                    break t;
                  } else {
                    l(b, h);
                    break;
                  }
                  else e(b, h);
                  h = h.sibling;
                }
                U = Ji(S, b.mode, U), U.return = b, b = U;
              }
              return i(b);
            case $t:
              return S = $l(S), St(b, h, S, U);
          }
          if (fe(S)) return L(b, h, S, U);
          if (Zt(S)) {
            if (X = Zt(S), typeof X != "function") throw Error(r(150));
            return S = X.call(S), Q(b, h, S, U);
          }
          if (typeof S.then == "function") return St(b, h, vu(S), U);
          if (S.$$typeof === et) return St(b, h, yu(b, S), U);
          pu(b, S);
        }
        return typeof S == "string" && S !== "" || typeof S == "number" || typeof S == "bigint" ? (S = "" + S, h !== null && h.tag === 6 ? (l(b, h.sibling), U = n(h, S), U.return = b, b = U) : (l(b, h), U = Ki(S, b.mode, U), U.return = b, b = U), i(b)) : l(b, h);
      }
      return function(b, h, S, U) {
        try {
          on = 0;
          var X = St(b, h, S, U);
          return za = null, X;
        } catch (G) {
          if (G === Aa || G === bu) throw G;
          var ot = he(29, G, null, b.mode);
          return ot.lanes = U, ot.return = b, ot;
        }
      };
    }
    var Il = nr(true), ur = nr(false), xl = false;
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
    function Sl(t) {
      return {
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function Nl(t, e, l) {
      var a = t.updateQueue;
      if (a === null) return null;
      if (a = a.shared, (mt & 2) !== 0) {
        var n = a.pending;
        return n === null ? e.next = e : (e.next = n.next, n.next = e), a.pending = e, e = ou(t), Xf(t, null, l), e;
      }
      return ru(t, a, e, l), ou(t);
    }
    function mn(t, e, l) {
      if (e = e.updateQueue, e !== null && (e = e.shared, (l & 4194048) !== 0)) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Ws(t, l);
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
    var sc = false;
    function hn() {
      if (sc) {
        var t = ja;
        if (t !== null) throw t;
      }
    }
    function yn(t, e, l, a) {
      sc = false;
      var n = t.updateQueue;
      xl = false;
      var u = n.firstBaseUpdate, i = n.lastBaseUpdate, o = n.shared.pending;
      if (o !== null) {
        n.shared.pending = null;
        var m = o, N = m.next;
        m.next = null, i === null ? u = N : i.next = N, i = m;
        var T = t.alternate;
        T !== null && (T = T.updateQueue, o = T.lastBaseUpdate, o !== i && (o === null ? T.firstBaseUpdate = N : o.next = N, T.lastBaseUpdate = m));
      }
      if (u !== null) {
        var D = n.baseState;
        i = 0, T = N = m = null, o = u;
        do {
          var j = o.lane & -536870913, z = j !== o.lane;
          if (z ? (ut & j) === j : (a & j) === j) {
            j !== 0 && j === Na && (sc = true), T !== null && (T = T.next = {
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: null,
              next: null
            });
            t: {
              var L = t, Q = o;
              j = e;
              var St = l;
              switch (Q.tag) {
                case 1:
                  if (L = Q.payload, typeof L == "function") {
                    D = L.call(St, D, j);
                    break t;
                  }
                  D = L;
                  break t;
                case 3:
                  L.flags = L.flags & -65537 | 128;
                case 0:
                  if (L = Q.payload, j = typeof L == "function" ? L.call(St, D, j) : L, j == null) break t;
                  D = R({}, D, j);
                  break t;
                case 2:
                  xl = true;
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
          }, T === null ? (N = T = z, m = D) : T = T.next = z, i |= j;
          if (o = o.next, o === null) {
            if (o = n.shared.pending, o === null) break;
            z = o, o = z.next, z.next = null, n.lastBaseUpdate = z, n.shared.pending = null;
          }
        } while (true);
        T === null && (m = D), n.baseState = m, n.firstBaseUpdate = N, n.lastBaseUpdate = T, u === null && (n.shared.lanes = 0), Tl |= i, t.lanes = i, t.memoizedState = D;
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
    var Ea = g(null), xu = g(0);
    function sr(t, e) {
      t = sl, E(xu, t), E(Ea, e), sl = t | e.baseLanes;
    }
    function fc() {
      E(xu, sl), E(Ea, Ea.current);
    }
    function rc() {
      sl = xu.current, C(Ea), C(xu);
    }
    var ye = g(null), Oe = null;
    function jl(t) {
      var e = t.alternate;
      E(Ut, Ut.current & 1), E(ye, t), Oe === null && (e === null || Ea.current !== null || e.memoizedState !== null) && (Oe = t);
    }
    function oc(t) {
      E(Ut, Ut.current), E(ye, t), Oe === null && (Oe = t);
    }
    function fr(t) {
      t.tag === 22 ? (E(Ut, Ut.current), E(ye, t), Oe === null && (Oe = t)) : Al();
    }
    function Al() {
      E(Ut, Ut.current), E(ye, ye.current);
    }
    function ge(t) {
      C(ye), Oe === t && (Oe = null), C(Ut);
    }
    var Ut = g(0);
    function Su(t) {
      for (var e = t; e !== null; ) {
        if (e.tag === 13) {
          var l = e.memoizedState;
          if (l !== null && (l = l.dehydrated, l === null || bs(l) || _s(l))) return e;
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
    var tl = 0, I = null, pt = null, Ht = null, Nu = false, Ta = false, Pl = false, ju = 0, gn = 0, Ma = null, V0 = 0;
    function wt() {
      throw Error(r(321));
    }
    function dc(t, e) {
      if (e === null) return false;
      for (var l = 0; l < e.length && l < t.length; l++) if (!me(t[l], e[l])) return false;
      return true;
    }
    function mc(t, e, l, a, n, u) {
      return tl = u, I = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, w.H = t === null || t.memoizedState === null ? Kr : Tc, Pl = false, u = l(a, n), Pl = false, Ta && (u = or(e, l, a, n)), rr(t), u;
    }
    function rr(t) {
      w.H = vn;
      var e = pt !== null && pt.next !== null;
      if (tl = 0, Ht = pt = I = null, Nu = false, gn = 0, Ma = null, e) throw Error(r(300));
      t === null || Bt || (t = t.dependencies, t !== null && hu(t) && (Bt = true));
    }
    function or(t, e, l, a) {
      I = t;
      var n = 0;
      do {
        if (Ta && (Ma = null), gn = 0, Ta = false, 25 <= n) throw Error(r(301));
        if (n += 1, Ht = pt = null, t.updateQueue != null) {
          var u = t.updateQueue;
          u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
        }
        w.H = Jr, u = e(l, a);
      } while (Ta);
      return u;
    }
    function K0() {
      var t = w.H, e = t.useState()[0];
      return e = typeof e.then == "function" ? bn(e) : e, t = t.useState()[0], (pt !== null ? pt.memoizedState : null) !== t && (I.flags |= 1024), e;
    }
    function hc() {
      var t = ju !== 0;
      return ju = 0, t;
    }
    function yc(t, e, l) {
      e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~l;
    }
    function gc(t) {
      if (Nu) {
        for (t = t.memoizedState; t !== null; ) {
          var e = t.queue;
          e !== null && (e.pending = null), t = t.next;
        }
        Nu = false;
      }
      tl = 0, Ht = pt = I = null, Ta = false, gn = ju = 0, Ma = null;
    }
    function ee() {
      var t = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Ht === null ? I.memoizedState = Ht = t : Ht = Ht.next = t, Ht;
    }
    function Dt() {
      if (pt === null) {
        var t = I.alternate;
        t = t !== null ? t.memoizedState : null;
      } else t = pt.next;
      var e = Ht === null ? I.memoizedState : Ht.next;
      if (e !== null) Ht = e, pt = t;
      else {
        if (t === null) throw I.alternate === null ? Error(r(467)) : Error(r(310));
        pt = t, t = {
          memoizedState: pt.memoizedState,
          baseState: pt.baseState,
          baseQueue: pt.baseQueue,
          queue: pt.queue,
          next: null
        }, Ht === null ? I.memoizedState = Ht = t : Ht = Ht.next = t;
      }
      return Ht;
    }
    function Au() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function bn(t) {
      var e = gn;
      return gn += 1, Ma === null && (Ma = []), t = er(Ma, t, e), e = I, (Ht === null ? e.memoizedState : Ht.next) === null && (e = e.alternate, w.H = e === null || e.memoizedState === null ? Kr : Tc), t;
    }
    function zu(t) {
      if (t !== null && typeof t == "object") {
        if (typeof t.then == "function") return bn(t);
        if (t.$$typeof === et) return Jt(t);
      }
      throw Error(r(438, String(t)));
    }
    function bc(t) {
      var e = null, l = I.updateQueue;
      if (l !== null && (e = l.memoCache), e == null) {
        var a = I.alternate;
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
      }), l === null && (l = Au(), I.updateQueue = l), l.memoCache = e, l = e.data[e.index], l === void 0) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = Ce;
      return e.index++, l;
    }
    function el(t, e) {
      return typeof e == "function" ? e(t) : e;
    }
    function Eu(t) {
      var e = Dt();
      return _c(e, pt, t);
    }
    function _c(t, e, l) {
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
        var o = i = null, m = null, N = e, T = false;
        do {
          var D = N.lane & -536870913;
          if (D !== N.lane ? (ut & D) === D : (tl & D) === D) {
            var j = N.revertLane;
            if (j === 0) m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), D === Na && (T = true);
            else if ((tl & j) === j) {
              N = N.next, j === Na && (T = true);
              continue;
            } else D = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, m === null ? (o = m = D, i = u) : m = m.next = D, I.lanes |= j, Tl |= j;
            D = N.action, Pl && l(u, D), u = N.hasEagerState ? N.eagerState : l(u, D);
          } else j = {
            lane: D,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, m === null ? (o = m = j, i = u) : m = m.next = j, I.lanes |= D, Tl |= D;
          N = N.next;
        } while (N !== null && N !== e);
        if (m === null ? i = u : m.next = o, !me(u, t.memoizedState) && (Bt = true, T && (l = ja, l !== null))) throw l;
        t.memoizedState = u, t.baseState = i, t.baseQueue = m, a.lastRenderedState = u;
      }
      return n === null && (a.lanes = 0), [
        t.memoizedState,
        a.dispatch
      ];
    }
    function vc(t) {
      var e = Dt(), l = e.queue;
      if (l === null) throw Error(r(311));
      l.lastRenderedReducer = t;
      var a = l.dispatch, n = l.pending, u = e.memoizedState;
      if (n !== null) {
        l.pending = null;
        var i = n = n.next;
        do
          u = t(u, i.action), i = i.next;
        while (i !== n);
        me(u, e.memoizedState) || (Bt = true), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), l.lastRenderedState = u;
      }
      return [
        u,
        a
      ];
    }
    function dr(t, e, l) {
      var a = I, n = Dt(), u = ct;
      if (u) {
        if (l === void 0) throw Error(r(407));
        l = l();
      } else l = e();
      var i = !me((pt || n).memoizedState, l);
      if (i && (n.memoizedState = l, Bt = true), n = n.queue, Sc(yr.bind(null, a, n, t), [
        t
      ]), n.getSnapshot !== e || i || Ht !== null && Ht.memoizedState.tag & 1) {
        if (a.flags |= 2048, wa(9, {
          destroy: void 0
        }, hr.bind(null, a, n, l, e), null), jt === null) throw Error(r(349));
        u || (tl & 127) !== 0 || mr(a, e, l);
      }
      return l;
    }
    function mr(t, e, l) {
      t.flags |= 16384, t = {
        getSnapshot: e,
        value: l
      }, e = I.updateQueue, e === null ? (e = Au(), I.updateQueue = e, e.stores = [
        t
      ]) : (l = e.stores, l === null ? e.stores = [
        t
      ] : l.push(t));
    }
    function hr(t, e, l, a) {
      e.value = l, e.getSnapshot = a, gr(e) && br(t);
    }
    function yr(t, e, l) {
      return l(function() {
        gr(e) && br(t);
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
    function br(t) {
      var e = Zl(t, 2);
      e !== null && se(e, t, 2);
    }
    function pc(t) {
      var e = ee();
      if (typeof t == "function") {
        var l = t;
        if (t = l(), Pl) {
          hl(true);
          try {
            l();
          } finally {
            hl(false);
          }
        }
      }
      return e.memoizedState = e.baseState = t, e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: el,
        lastRenderedState: t
      }, e;
    }
    function _r(t, e, l, a) {
      return t.baseState = l, _c(t, pt, typeof a == "function" ? a : el);
    }
    function J0(t, e, l, a, n) {
      if (wu(t)) throw Error(r(485));
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
        w.T !== null ? l(true) : u.isTransition = false, a(u), l = e.pending, l === null ? (u.next = e.pending = u, vr(e, u)) : (u.next = l.next, e.pending = l.next = u);
      }
    }
    function vr(t, e) {
      var l = e.action, a = e.payload, n = t.state;
      if (e.isTransition) {
        var u = w.T, i = {};
        w.T = i;
        try {
          var o = l(n, a), m = w.S;
          m !== null && m(i, o), pr(t, e, o);
        } catch (N) {
          xc(t, e, N);
        } finally {
          u !== null && i.types !== null && (u.types = i.types), w.T = u;
        }
      } else try {
        u = l(n, a), pr(t, e, u);
      } catch (N) {
        xc(t, e, N);
      }
    }
    function pr(t, e, l) {
      l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
        xr(t, e, a);
      }, function(a) {
        return xc(t, e, a);
      }) : xr(t, e, l);
    }
    function xr(t, e, l) {
      e.status = "fulfilled", e.value = l, Sr(e), t.state = l, e = t.pending, e !== null && (l = e.next, l === e ? t.pending = null : (l = l.next, e.next = l, vr(t, l)));
    }
    function xc(t, e, l) {
      var a = t.pending;
      if (t.pending = null, a !== null) {
        a = a.next;
        do
          e.status = "rejected", e.reason = l, Sr(e), e = e.next;
        while (e !== a);
      }
      t.action = null;
    }
    function Sr(t) {
      t = t.listeners;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function Nr(t, e) {
      return e;
    }
    function jr(t, e) {
      if (ct) {
        var l = jt.formState;
        if (l !== null) {
          t: {
            var a = I;
            if (ct) {
              if (At) {
                e: {
                  for (var n = At, u = we; n.nodeType !== 8; ) {
                    if (!u) {
                      n = null;
                      break e;
                    }
                    if (n = Ue(n.nextSibling), n === null) {
                      n = null;
                      break e;
                    }
                  }
                  u = n.data, n = u === "F!" || u === "F" ? n : null;
                }
                if (n) {
                  At = Ue(n.nextSibling), a = n.data === "F!";
                  break t;
                }
              }
              vl(a);
            }
            a = false;
          }
          a && (e = l[0]);
        }
      }
      return l = ee(), l.memoizedState = l.baseState = e, a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Nr,
        lastRenderedState: e
      }, l.queue = a, l = Qr.bind(null, I, a), a.dispatch = l, a = pc(false), u = Ec.bind(null, I, false, a.queue), a = ee(), n = {
        state: e,
        dispatch: null,
        action: t,
        pending: null
      }, a.queue = n, l = J0.bind(null, I, n, u, l), n.dispatch = l, a.memoizedState = t, [
        e,
        l,
        false
      ];
    }
    function Ar(t) {
      var e = Dt();
      return zr(e, pt, t);
    }
    function zr(t, e, l) {
      if (e = _c(t, e, Nr)[0], t = Eu(el)[0], typeof e == "object" && e !== null && typeof e.then == "function") try {
        var a = bn(e);
      } catch (i) {
        throw i === Aa ? bu : i;
      }
      else a = e;
      e = Dt();
      var n = e.queue, u = n.dispatch;
      return l !== e.memoizedState && (I.flags |= 2048, wa(9, {
        destroy: void 0
      }, k0.bind(null, n, l), null)), [
        a,
        u,
        t
      ];
    }
    function k0(t, e) {
      t.action = e;
    }
    function Er(t) {
      var e = Dt(), l = pt;
      if (l !== null) return zr(e, l, t);
      Dt(), e = e.memoizedState, l = Dt();
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
      }, e = I.updateQueue, e === null && (e = Au(), I.updateQueue = e), l = e.lastEffect, l === null ? e.lastEffect = t.next = t : (a = l.next, l.next = t, t.next = a, e.lastEffect = t), t;
    }
    function Tr() {
      return Dt().memoizedState;
    }
    function Tu(t, e, l, a) {
      var n = ee();
      I.flags |= t, n.memoizedState = wa(1 | e, {
        destroy: void 0
      }, l, a === void 0 ? null : a);
    }
    function Mu(t, e, l, a) {
      var n = Dt();
      a = a === void 0 ? null : a;
      var u = n.memoizedState.inst;
      pt !== null && a !== null && dc(a, pt.memoizedState.deps) ? n.memoizedState = wa(e, u, l, a) : (I.flags |= t, n.memoizedState = wa(1 | e, u, l, a));
    }
    function Mr(t, e) {
      Tu(8390656, 8, t, e);
    }
    function Sc(t, e) {
      Mu(2048, 8, t, e);
    }
    function W0(t) {
      I.flags |= 4;
      var e = I.updateQueue;
      if (e === null) e = Au(), I.updateQueue = e, e.events = [
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
      var e = Dt().memoizedState;
      return W0({
        ref: e,
        nextImpl: t
      }), function() {
        if ((mt & 2) !== 0) throw Error(r(440));
        return e.impl.apply(void 0, arguments);
      };
    }
    function Or(t, e) {
      return Mu(4, 2, t, e);
    }
    function Ur(t, e) {
      return Mu(4, 4, t, e);
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
      ]) : null, Mu(4, 4, Dr.bind(null, e, t), l);
    }
    function Nc() {
    }
    function Rr(t, e) {
      var l = Dt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      return e !== null && dc(e, a[1]) ? a[0] : (l.memoizedState = [
        t,
        e
      ], t);
    }
    function Hr(t, e) {
      var l = Dt();
      e = e === void 0 ? null : e;
      var a = l.memoizedState;
      if (e !== null && dc(e, a[1])) return a[0];
      if (a = t(), Pl) {
        hl(true);
        try {
          t();
        } finally {
          hl(false);
        }
      }
      return l.memoizedState = [
        a,
        e
      ], a;
    }
    function jc(t, e, l) {
      return l === void 0 || (tl & 1073741824) !== 0 && (ut & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = l, t = qo(), I.lanes |= t, Tl |= t, l);
    }
    function Br(t, e, l, a) {
      return me(l, e) ? l : Ea.current !== null ? (t = jc(t, l, a), me(t, e) || (Bt = true), t) : (tl & 42) === 0 || (tl & 1073741824) !== 0 && (ut & 261930) === 0 ? (Bt = true, t.memoizedState = l) : (t = qo(), I.lanes |= t, Tl |= t, e);
    }
    function qr(t, e, l, a, n) {
      var u = B.p;
      B.p = u !== 0 && 8 > u ? u : 8;
      var i = w.T, o = {};
      w.T = o, Ec(t, false, e, l);
      try {
        var m = n(), N = w.S;
        if (N !== null && N(o, m), m !== null && typeof m == "object" && typeof m.then == "function") {
          var T = Z0(m, a);
          _n(t, e, T, ve(t));
        } else _n(t, e, a, ve(t));
      } catch (D) {
        _n(t, e, {
          then: function() {
          },
          status: "rejected",
          reason: D
        }, ve());
      } finally {
        B.p = u, i !== null && o.types !== null && (i.types = o.types), w.T = i;
      }
    }
    function $0() {
    }
    function Ac(t, e, l, a) {
      if (t.tag !== 5) throw Error(r(476));
      var n = Yr(t).queue;
      qr(t, n, e, V, l === null ? $0 : function() {
        return Lr(t), l(a);
      });
    }
    function Yr(t) {
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
          lastRenderedReducer: el,
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
          lastRenderedReducer: el,
          lastRenderedState: l
        },
        next: null
      }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
    }
    function Lr(t) {
      var e = Yr(t);
      e.next === null && (e = t.alternate.memoizedState), _n(t, e.next.queue, {}, ve());
    }
    function zc() {
      return Jt(Rn);
    }
    function Gr() {
      return Dt().memoizedState;
    }
    function Xr() {
      return Dt().memoizedState;
    }
    function F0(t) {
      for (var e = t.return; e !== null; ) {
        switch (e.tag) {
          case 24:
          case 3:
            var l = ve();
            t = Sl(l);
            var a = Nl(e, t, l);
            a !== null && (se(a, e, l), mn(a, e, l)), e = {
              cache: ec()
            }, t.payload = e;
            return;
        }
        e = e.return;
      }
    }
    function I0(t, e, l) {
      var a = ve();
      l = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, wu(t) ? Zr(e, l) : (l = Zi(t, e, l, a), l !== null && (se(l, t, a), Vr(l, e, a)));
    }
    function Qr(t, e, l) {
      var a = ve();
      _n(t, e, l, a);
    }
    function _n(t, e, l, a) {
      var n = {
        lane: a,
        revertLane: 0,
        gesture: null,
        action: l,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (wu(t)) Zr(e, n);
      else {
        var u = t.alternate;
        if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null)) try {
          var i = e.lastRenderedState, o = u(i, l);
          if (n.hasEagerState = true, n.eagerState = o, me(o, i)) return ru(t, e, n, 0), jt === null && fu(), false;
        } catch {
        }
        if (l = Zi(t, e, n, a), l !== null) return se(l, t, a), Vr(l, e, a), true;
      }
      return false;
    }
    function Ec(t, e, l, a) {
      if (a = {
        lane: 2,
        revertLane: us(),
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, wu(t)) {
        if (e) throw Error(r(479));
      } else e = Zi(t, l, a, 2), e !== null && se(e, t, 2);
    }
    function wu(t) {
      var e = t.alternate;
      return t === I || e !== null && e === I;
    }
    function Zr(t, e) {
      Ta = Nu = true;
      var l = t.pending;
      l === null ? e.next = e : (e.next = l.next, l.next = e), t.pending = e;
    }
    function Vr(t, e, l) {
      if ((l & 4194048) !== 0) {
        var a = e.lanes;
        a &= t.pendingLanes, l |= a, e.lanes = l, Ws(t, l);
      }
    }
    var vn = {
      readContext: Jt,
      use: zu,
      useCallback: wt,
      useContext: wt,
      useEffect: wt,
      useImperativeHandle: wt,
      useLayoutEffect: wt,
      useInsertionEffect: wt,
      useMemo: wt,
      useReducer: wt,
      useRef: wt,
      useState: wt,
      useDebugValue: wt,
      useDeferredValue: wt,
      useTransition: wt,
      useSyncExternalStore: wt,
      useId: wt,
      useHostTransitionStatus: wt,
      useFormState: wt,
      useActionState: wt,
      useOptimistic: wt,
      useMemoCache: wt,
      useCacheRefresh: wt
    };
    vn.useEffectEvent = wt;
    var Kr = {
      readContext: Jt,
      use: zu,
      useCallback: function(t, e) {
        return ee().memoizedState = [
          t,
          e === void 0 ? null : e
        ], t;
      },
      useContext: Jt,
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
        var l = ee();
        e = e === void 0 ? null : e;
        var a = t();
        if (Pl) {
          hl(true);
          try {
            t();
          } finally {
            hl(false);
          }
        }
        return l.memoizedState = [
          a,
          e
        ], a;
      },
      useReducer: function(t, e, l) {
        var a = ee();
        if (l !== void 0) {
          var n = l(e);
          if (Pl) {
            hl(true);
            try {
              l(e);
            } finally {
              hl(false);
            }
          }
        } else n = e;
        return a.memoizedState = a.baseState = n, t = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: n
        }, a.queue = t, t = t.dispatch = I0.bind(null, I, t), [
          a.memoizedState,
          t
        ];
      },
      useRef: function(t) {
        var e = ee();
        return t = {
          current: t
        }, e.memoizedState = t;
      },
      useState: function(t) {
        t = pc(t);
        var e = t.queue, l = Qr.bind(null, I, e);
        return e.dispatch = l, [
          t.memoizedState,
          l
        ];
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = ee();
        return jc(l, t, e);
      },
      useTransition: function() {
        var t = pc(false);
        return t = qr.bind(null, I, t.queue, true, false), ee().memoizedState = t, [
          false,
          t
        ];
      },
      useSyncExternalStore: function(t, e, l) {
        var a = I, n = ee();
        if (ct) {
          if (l === void 0) throw Error(r(407));
          l = l();
        } else {
          if (l = e(), jt === null) throw Error(r(349));
          (ut & 127) !== 0 || mr(a, e, l);
        }
        n.memoizedState = l;
        var u = {
          value: l,
          getSnapshot: e
        };
        return n.queue = u, Mr(yr.bind(null, a, u, t), [
          t
        ]), a.flags |= 2048, wa(9, {
          destroy: void 0
        }, hr.bind(null, a, u, l, e), null), l;
      },
      useId: function() {
        var t = ee(), e = jt.identifierPrefix;
        if (ct) {
          var l = Le, a = Ye;
          l = (a & ~(1 << 32 - de(a) - 1)).toString(32) + l, e = "_" + e + "R_" + l, l = ju++, 0 < l && (e += "H" + l.toString(32)), e += "_";
        } else l = V0++, e = "_" + e + "r_" + l.toString(32) + "_";
        return t.memoizedState = e;
      },
      useHostTransitionStatus: zc,
      useFormState: jr,
      useActionState: jr,
      useOptimistic: function(t) {
        var e = ee();
        e.memoizedState = e.baseState = t;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return e.queue = l, e = Ec.bind(null, I, true, l), l.dispatch = e, [
          t,
          e
        ];
      },
      useMemoCache: bc,
      useCacheRefresh: function() {
        return ee().memoizedState = F0.bind(null, I);
      },
      useEffectEvent: function(t) {
        var e = ee(), l = {
          impl: t
        };
        return e.memoizedState = l, function() {
          if ((mt & 2) !== 0) throw Error(r(440));
          return l.impl.apply(void 0, arguments);
        };
      }
    }, Tc = {
      readContext: Jt,
      use: zu,
      useCallback: Rr,
      useContext: Jt,
      useEffect: Sc,
      useImperativeHandle: Cr,
      useInsertionEffect: Or,
      useLayoutEffect: Ur,
      useMemo: Hr,
      useReducer: Eu,
      useRef: Tr,
      useState: function() {
        return Eu(el);
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = Dt();
        return Br(l, pt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = Eu(el)[0], e = Dt().memoizedState;
        return [
          typeof t == "boolean" ? t : bn(t),
          e
        ];
      },
      useSyncExternalStore: dr,
      useId: Gr,
      useHostTransitionStatus: zc,
      useFormState: Ar,
      useActionState: Ar,
      useOptimistic: function(t, e) {
        var l = Dt();
        return _r(l, pt, t, e);
      },
      useMemoCache: bc,
      useCacheRefresh: Xr
    };
    Tc.useEffectEvent = wr;
    var Jr = {
      readContext: Jt,
      use: zu,
      useCallback: Rr,
      useContext: Jt,
      useEffect: Sc,
      useImperativeHandle: Cr,
      useInsertionEffect: Or,
      useLayoutEffect: Ur,
      useMemo: Hr,
      useReducer: vc,
      useRef: Tr,
      useState: function() {
        return vc(el);
      },
      useDebugValue: Nc,
      useDeferredValue: function(t, e) {
        var l = Dt();
        return pt === null ? jc(l, t, e) : Br(l, pt.memoizedState, t, e);
      },
      useTransition: function() {
        var t = vc(el)[0], e = Dt().memoizedState;
        return [
          typeof t == "boolean" ? t : bn(t),
          e
        ];
      },
      useSyncExternalStore: dr,
      useId: Gr,
      useHostTransitionStatus: zc,
      useFormState: Er,
      useActionState: Er,
      useOptimistic: function(t, e) {
        var l = Dt();
        return pt !== null ? _r(l, pt, t, e) : (l.baseState = t, [
          t,
          l.queue.dispatch
        ]);
      },
      useMemoCache: bc,
      useCacheRefresh: Xr
    };
    Jr.useEffectEvent = wr;
    function Mc(t, e, l, a) {
      e = t.memoizedState, l = l(a, e), l = l == null ? e : R({}, e, l), t.memoizedState = l, t.lanes === 0 && (t.updateQueue.baseState = l);
    }
    var wc = {
      enqueueSetState: function(t, e, l) {
        t = t._reactInternals;
        var a = ve(), n = Sl(a);
        n.payload = e, l != null && (n.callback = l), e = Nl(t, n, a), e !== null && (se(e, t, a), mn(e, t, a));
      },
      enqueueReplaceState: function(t, e, l) {
        t = t._reactInternals;
        var a = ve(), n = Sl(a);
        n.tag = 1, n.payload = e, l != null && (n.callback = l), e = Nl(t, n, a), e !== null && (se(e, t, a), mn(e, t, a));
      },
      enqueueForceUpdate: function(t, e) {
        t = t._reactInternals;
        var l = ve(), a = Sl(l);
        a.tag = 2, e != null && (a.callback = e), e = Nl(t, a, l), e !== null && (se(e, t, l), mn(e, t, l));
      }
    };
    function kr(t, e, l, a, n, u, i) {
      return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, i) : e.prototype && e.prototype.isPureReactComponent ? !nn(l, a) || !nn(n, u) : true;
    }
    function Wr(t, e, l, a) {
      t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && wc.enqueueReplaceState(e, e.state, null);
    }
    function ta(t, e) {
      var l = e;
      if ("ref" in e) {
        l = {};
        for (var a in e) a !== "ref" && (l[a] = e[a]);
      }
      if (t = t.defaultProps) {
        l === e && (l = R({}, l));
        for (var n in t) l[n] === void 0 && (l[n] = t[n]);
      }
      return l;
    }
    function $r(t) {
      su(t);
    }
    function Fr(t) {
      console.error(t);
    }
    function Ir(t) {
      su(t);
    }
    function Ou(t, e) {
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
      return l = Sl(l), l.tag = 3, l.payload = {
        element: null
      }, l.callback = function() {
        Ou(t, e);
      }, l;
    }
    function to(t) {
      return t = Sl(t), t.tag = 3, t;
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
        Pr(e, l, a), typeof n != "function" && (Ml === null ? Ml = /* @__PURE__ */ new Set([
          this
        ]) : Ml.add(this));
        var o = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: o !== null ? o : ""
        });
      });
    }
    function P0(t, e, l, a, n) {
      if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
        if (e = l.alternate, e !== null && Sa(e, l, n, true), l = ye.current, l !== null) {
          switch (l.tag) {
            case 31:
            case 13:
              return Oe === null ? Qu() : l.alternate === null && Ot === 0 && (Ot = 3), l.flags &= -257, l.flags |= 65536, l.lanes = n, a === _u ? l.flags |= 16384 : (e = l.updateQueue, e === null ? l.updateQueue = /* @__PURE__ */ new Set([
                a
              ]) : e.add(a), ls(t, a, n)), false;
            case 22:
              return l.flags |= 65536, a === _u ? l.flags |= 16384 : (e = l.updateQueue, e === null ? (e = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  a
                ])
              }, l.updateQueue = e) : (l = e.retryQueue, l === null ? e.retryQueue = /* @__PURE__ */ new Set([
                a
              ]) : l.add(a)), ls(t, a, n)), false;
          }
          throw Error(r(435, l.tag));
        }
        return ls(t, a, n), Qu(), false;
      }
      if (ct) return e = ye.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = n, a !== $i && (t = Error(r(422), {
        cause: a
      }), sn(Ee(t, l)))) : (a !== $i && (e = Error(r(423), {
        cause: a
      }), sn(Ee(e, l))), t = t.current.alternate, t.flags |= 65536, n &= -n, t.lanes |= n, a = Ee(a, l), n = Oc(t.stateNode, a, n), cc(t, n), Ot !== 4 && (Ot = 2)), false;
      var u = Error(r(520), {
        cause: a
      });
      if (u = Ee(u, l), En === null ? En = [
        u
      ] : En.push(u), Ot !== 4 && (Ot = 2), e === null) return true;
      a = Ee(a, l), l = e;
      do {
        switch (l.tag) {
          case 3:
            return l.flags |= 65536, t = n & -n, l.lanes |= t, t = Oc(l.stateNode, a, t), cc(l, t), false;
          case 1:
            if (e = l.type, u = l.stateNode, (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ml === null || !Ml.has(u)))) return l.flags |= 65536, n &= -n, l.lanes |= n, n = to(n), eo(n, t, l, a), cc(l, n), false;
        }
        l = l.return;
      } while (l !== null);
      return false;
    }
    var Uc = Error(r(461)), Bt = false;
    function kt(t, e, l, a) {
      e.child = t === null ? ur(e, null, l, a) : Il(e, t.child, l, a);
    }
    function lo(t, e, l, a, n) {
      l = l.render;
      var u = e.ref;
      if ("ref" in a) {
        var i = {};
        for (var o in a) o !== "ref" && (i[o] = a[o]);
      } else i = a;
      return kl(e), a = mc(t, e, l, i, u, n), o = hc(), t !== null && !Bt ? (yc(t, e, n), ll(t, e, n)) : (ct && o && ki(e), e.flags |= 1, kt(t, e, a, n), e.child);
    }
    function ao(t, e, l, a, n) {
      if (t === null) {
        var u = l.type;
        return typeof u == "function" && !Vi(u) && u.defaultProps === void 0 && l.compare === null ? (e.tag = 15, e.type = u, no(t, e, u, a, n)) : (t = du(l.type, null, a, e, e.mode, n), t.ref = e.ref, t.return = e, e.child = t);
      }
      if (u = t.child, !Lc(t, n)) {
        var i = u.memoizedProps;
        if (l = l.compare, l = l !== null ? l : nn, l(i, a) && t.ref === e.ref) return ll(t, e, n);
      }
      return e.flags |= 1, t = $e(u, a), t.ref = e.ref, t.return = e, e.child = t;
    }
    function no(t, e, l, a, n) {
      if (t !== null) {
        var u = t.memoizedProps;
        if (nn(u, a) && t.ref === e.ref) if (Bt = false, e.pendingProps = a = u, Lc(t, n)) (t.flags & 131072) !== 0 && (Bt = true);
        else return e.lanes = t.lanes, ll(t, e, n);
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
        }, t !== null && gu(e, u !== null ? u.cachePool : null), u !== null ? sr(e, u) : fc(), fr(e);
        else return a = e.lanes = 536870912, io(t, e, u !== null ? u.baseLanes | l : l, l, a);
      } else u !== null ? (gu(e, u.cachePool), sr(e, u), Al(), e.memoizedState = null) : (t !== null && gu(e, null), fc(), Al());
      return kt(t, e, n, l), e.child;
    }
    function pn(t, e) {
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
        parent: Rt._currentValue,
        pool: u
      }, e.memoizedState = {
        baseLanes: l,
        cachePool: u
      }, t !== null && gu(e, null), fc(), fr(e), t !== null && Sa(t, e, a, true), e.childLanes = n, null;
    }
    function Uu(t, e) {
      return e = Cu({
        mode: e.mode,
        children: e.children
      }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e;
    }
    function co(t, e, l) {
      return Il(e, t.child, null, l), t = Uu(e, e.pendingProps), t.flags |= 2, ge(e), e.memoizedState = null, t;
    }
    function th(t, e, l) {
      var a = e.pendingProps, n = (e.flags & 128) !== 0;
      if (e.flags &= -129, t === null) {
        if (ct) {
          if (a.mode === "hidden") return t = Uu(e, a), e.lanes = 536870912, pn(null, t);
          if (oc(e), (t = At) ? (t = pd(t, we), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: bl !== null ? {
              id: Ye,
              overflow: Le
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Zf(t), l.return = e, e.child = l, Kt = e, At = null)) : t = null, t === null) throw vl(e);
          return e.lanes = 536870912, null;
        }
        return Uu(e, a);
      }
      var u = t.memoizedState;
      if (u !== null) {
        var i = u.dehydrated;
        if (oc(e), n) if (e.flags & 256) e.flags &= -257, e = co(t, e, l);
        else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
        else if (Bt || Sa(t, e, l, false), n = (l & t.childLanes) !== 0, Bt || n) {
          if (a = jt, a !== null && (i = $s(a, l), i !== 0 && i !== u.retryLane)) throw u.retryLane = i, Zl(t, i), se(a, t, i), Uc;
          Qu(), e = co(t, e, l);
        } else t = u.treeContext, At = Ue(i.nextSibling), Kt = e, ct = true, _l = null, we = false, t !== null && Jf(e, t), e = Uu(e, a), e.flags |= 4096;
        return e;
      }
      return t = $e(t.child, {
        mode: a.mode,
        children: a.children
      }), t.ref = e.ref, e.child = t, t.return = e, t;
    }
    function Du(t, e) {
      var l = e.ref;
      if (l === null) t !== null && t.ref !== null && (e.flags |= 4194816);
      else {
        if (typeof l != "function" && typeof l != "object") throw Error(r(284));
        (t === null || t.ref !== l) && (e.flags |= 4194816);
      }
    }
    function Dc(t, e, l, a, n) {
      return kl(e), l = mc(t, e, l, a, void 0, n), a = hc(), t !== null && !Bt ? (yc(t, e, n), ll(t, e, n)) : (ct && a && ki(e), e.flags |= 1, kt(t, e, l, n), e.child);
    }
    function so(t, e, l, a, n, u) {
      return kl(e), e.updateQueue = null, l = or(e, a, l, n), rr(t), a = hc(), t !== null && !Bt ? (yc(t, e, u), ll(t, e, u)) : (ct && a && ki(e), e.flags |= 1, kt(t, e, l, u), e.child);
    }
    function fo(t, e, l, a, n) {
      if (kl(e), e.stateNode === null) {
        var u = _a, i = l.contextType;
        typeof i == "object" && i !== null && (u = Jt(i)), u = new l(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = wc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, uc(e), i = l.contextType, u.context = typeof i == "object" && i !== null ? Jt(i) : _a, u.state = e.memoizedState, i = l.getDerivedStateFromProps, typeof i == "function" && (Mc(e, l, i, a), u.state = e.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (i = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), i !== u.state && wc.enqueueReplaceState(u, u.state, null), yn(e, a, u, n), hn(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = true;
      } else if (t === null) {
        u = e.stateNode;
        var o = e.memoizedProps, m = ta(l, o);
        u.props = m;
        var N = u.context, T = l.contextType;
        i = _a, typeof T == "object" && T !== null && (i = Jt(T));
        var D = l.getDerivedStateFromProps;
        T = typeof D == "function" || typeof u.getSnapshotBeforeUpdate == "function", o = e.pendingProps !== o, T || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (o || N !== i) && Wr(e, u, a, i), xl = false;
        var j = e.memoizedState;
        u.state = j, yn(e, a, u, n), hn(), N = e.memoizedState, o || j !== N || xl ? (typeof D == "function" && (Mc(e, l, D, a), N = e.memoizedState), (m = xl || kr(e, l, m, a, j, N, i)) ? (T || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = i, a = m) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = false);
      } else {
        u = e.stateNode, ic(t, e), i = e.memoizedProps, T = ta(l, i), u.props = T, D = e.pendingProps, j = u.context, N = l.contextType, m = _a, typeof N == "object" && N !== null && (m = Jt(N)), o = l.getDerivedStateFromProps, (N = typeof o == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== D || j !== m) && Wr(e, u, a, m), xl = false, j = e.memoizedState, u.state = j, yn(e, a, u, n), hn();
        var z = e.memoizedState;
        i !== D || j !== z || xl || t !== null && t.dependencies !== null && hu(t.dependencies) ? (typeof o == "function" && (Mc(e, l, o, a), z = e.memoizedState), (T = xl || kr(e, l, T, a, j, z, m) || t !== null && t.dependencies !== null && hu(t.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, z, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(a, z, m)), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = z), u.props = a, u.state = z, u.context = m, a = T) : (typeof u.componentDidUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === t.memoizedProps && j === t.memoizedState || (e.flags |= 1024), a = false);
      }
      return u = a, Du(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Il(e, t.child, null, n), e.child = Il(e, null, l, n)) : kt(t, e, l, n), e.memoizedState = u.state, t = e.child) : t = ll(t, e, n), t;
    }
    function ro(t, e, l, a) {
      return Kl(), e.flags |= 256, kt(t, e, l, a), e.child;
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
        cachePool: Pf()
      };
    }
    function Hc(t, e, l) {
      return t = t !== null ? t.childLanes & ~l : 0, e && (t |= _e), t;
    }
    function oo(t, e, l) {
      var a = e.pendingProps, n = false, u = (e.flags & 128) !== 0, i;
      if ((i = u) || (i = t !== null && t.memoizedState === null ? false : (Ut.current & 2) !== 0), i && (n = true, e.flags &= -129), i = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
        if (ct) {
          if (n ? jl(e) : Al(), (t = At) ? (t = pd(t, we), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
            dehydrated: t,
            treeContext: bl !== null ? {
              id: Ye,
              overflow: Le
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, l = Zf(t), l.return = e, e.child = l, Kt = e, At = null)) : t = null, t === null) throw vl(e);
          return _s(t) ? e.lanes = 32 : e.lanes = 536870912, null;
        }
        var o = a.children;
        return a = a.fallback, n ? (Al(), n = e.mode, o = Cu({
          mode: "hidden",
          children: o
        }, n), a = Vl(a, n, l, null), o.return = e, a.return = e, o.sibling = a, e.child = o, a = e.child, a.memoizedState = Rc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Cc, pn(null, a)) : (jl(e), Bc(e, o));
      }
      var m = t.memoizedState;
      if (m !== null && (o = m.dehydrated, o !== null)) {
        if (u) e.flags & 256 ? (jl(e), e.flags &= -257, e = qc(t, e, l)) : e.memoizedState !== null ? (Al(), e.child = t.child, e.flags |= 128, e = null) : (Al(), o = a.fallback, n = e.mode, a = Cu({
          mode: "visible",
          children: a.children
        }, n), o = Vl(o, n, l, null), o.flags |= 2, a.return = e, o.return = e, a.sibling = o, e.child = a, Il(e, t.child, null, l), a = e.child, a.memoizedState = Rc(l), a.childLanes = Hc(t, i, l), e.memoizedState = Cc, e = pn(null, a));
        else if (jl(e), _s(o)) {
          if (i = o.nextSibling && o.nextSibling.dataset, i) var N = i.dgst;
          i = N, a = Error(r(419)), a.stack = "", a.digest = i, sn({
            value: a,
            source: null,
            stack: null
          }), e = qc(t, e, l);
        } else if (Bt || Sa(t, e, l, false), i = (l & t.childLanes) !== 0, Bt || i) {
          if (i = jt, i !== null && (a = $s(i, l), a !== 0 && a !== m.retryLane)) throw m.retryLane = a, Zl(t, a), se(i, t, a), Uc;
          bs(o) || Qu(), e = qc(t, e, l);
        } else bs(o) ? (e.flags |= 192, e.child = t.child, e = null) : (t = m.treeContext, At = Ue(o.nextSibling), Kt = e, ct = true, _l = null, we = false, t !== null && Jf(e, t), e = Bc(e, a.children), e.flags |= 4096);
        return e;
      }
      return n ? (Al(), o = a.fallback, n = e.mode, m = t.child, N = m.sibling, a = $e(m, {
        mode: "hidden",
        children: a.children
      }), a.subtreeFlags = m.subtreeFlags & 65011712, N !== null ? o = $e(N, o) : (o = Vl(o, n, l, null), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, pn(null, a), a = e.child, o = t.child.memoizedState, o === null ? o = Rc(l) : (n = o.cachePool, n !== null ? (m = Rt._currentValue, n = n.parent !== m ? {
        parent: m,
        pool: m
      } : n) : n = Pf(), o = {
        baseLanes: o.baseLanes | l,
        cachePool: n
      }), a.memoizedState = o, a.childLanes = Hc(t, i, l), e.memoizedState = Cc, pn(t.child, a)) : (jl(e), l = t.child, t = l.sibling, l = $e(l, {
        mode: "visible",
        children: a.children
      }), l.return = e, l.sibling = null, t !== null && (i = e.deletions, i === null ? (e.deletions = [
        t
      ], e.flags |= 16) : i.push(t)), e.child = l, e.memoizedState = null, l);
    }
    function Bc(t, e) {
      return e = Cu({
        mode: "visible",
        children: e
      }, t.mode), e.return = t, t.child = e;
    }
    function Cu(t, e) {
      return t = he(22, t, null, e), t.lanes = 0, t;
    }
    function qc(t, e, l) {
      return Il(e, t.child, null, l), t = Bc(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t;
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
    function ho(t, e, l) {
      var a = e.pendingProps, n = a.revealOrder, u = a.tail;
      a = a.children;
      var i = Ut.current, o = (i & 2) !== 0;
      if (o ? (i = i & 1 | 2, e.flags |= 128) : i &= 1, E(Ut, i), kt(t, e, a, l), a = ct ? cn : 0, !o && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null; ) {
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
    function ll(t, e, l) {
      if (t !== null && (e.dependencies = t.dependencies), Tl |= e.lanes, (l & e.childLanes) === 0) if (t !== null) {
        if (Sa(t, e, l, false), (l & e.childLanes) === 0) return null;
      } else return null;
      if (t !== null && e.child !== t.child) throw Error(r(153));
      if (e.child !== null) {
        for (t = e.child, l = $e(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) t = t.sibling, l = l.sibling = $e(t, t.pendingProps), l.return = e;
        l.sibling = null;
      }
      return e.child;
    }
    function Lc(t, e) {
      return (t.lanes & e) !== 0 ? true : (t = t.dependencies, !!(t !== null && hu(t)));
    }
    function eh(t, e, l) {
      switch (e.tag) {
        case 3:
          Gt(e, e.stateNode.containerInfo), pl(e, Rt, t.memoizedState.cache), Kl();
          break;
        case 27:
        case 5:
          dl(e);
          break;
        case 4:
          Gt(e, e.stateNode.containerInfo);
          break;
        case 10:
          pl(e, e.type, e.memoizedProps.value);
          break;
        case 31:
          if (e.memoizedState !== null) return e.flags |= 128, oc(e), null;
          break;
        case 13:
          var a = e.memoizedState;
          if (a !== null) return a.dehydrated !== null ? (jl(e), e.flags |= 128, null) : (l & e.child.childLanes) !== 0 ? oo(t, e, l) : (jl(e), t = ll(t, e, l), t !== null ? t.sibling : null);
          jl(e);
          break;
        case 19:
          var n = (t.flags & 128) !== 0;
          if (a = (l & e.childLanes) !== 0, a || (Sa(t, e, l, false), a = (l & e.childLanes) !== 0), n) {
            if (a) return ho(t, e, l);
            e.flags |= 128;
          }
          if (n = e.memoizedState, n !== null && (n.rendering = null, n.tail = null, n.lastEffect = null), E(Ut, Ut.current), a) break;
          return null;
        case 22:
          return e.lanes = 0, uo(t, e, l, e.pendingProps);
        case 24:
          pl(e, Rt, t.memoizedState.cache);
      }
      return ll(t, e, l);
    }
    function yo(t, e, l) {
      if (t !== null) if (t.memoizedProps !== e.pendingProps) Bt = true;
      else {
        if (!Lc(t, l) && (e.flags & 128) === 0) return Bt = false, eh(t, e, l);
        Bt = (t.flags & 131072) !== 0;
      }
      else Bt = false, ct && (e.flags & 1048576) !== 0 && Kf(e, cn, e.index);
      switch (e.lanes = 0, e.tag) {
        case 16:
          t: {
            var a = e.pendingProps;
            if (t = $l(e.elementType), e.type = t, typeof t == "function") Vi(t) ? (a = ta(t, a), e.tag = 1, e = fo(null, e, t, a, l)) : (e.tag = 0, e = Dc(null, e, t, a, l));
            else {
              if (t != null) {
                var n = t.$$typeof;
                if (n === Z) {
                  e.tag = 11, e = lo(null, e, t, a, l);
                  break t;
                } else if (n === F) {
                  e.tag = 14, e = ao(null, e, t, a, l);
                  break t;
                }
              }
              throw e = qe(t) || t, Error(r(306, e, ""));
            }
          }
          return e;
        case 0:
          return Dc(t, e, e.type, e.pendingProps, l);
        case 1:
          return a = e.type, n = ta(a, e.pendingProps), fo(t, e, a, n, l);
        case 3:
          t: {
            if (Gt(e, e.stateNode.containerInfo), t === null) throw Error(r(387));
            a = e.pendingProps;
            var u = e.memoizedState;
            n = u.element, ic(t, e), yn(e, a, null, l);
            var i = e.memoizedState;
            if (a = i.cache, pl(e, Rt, a), a !== u.cache && tc(e, [
              Rt
            ], l, true), hn(), a = i.element, u.isDehydrated) if (u = {
              element: a,
              isDehydrated: false,
              cache: i.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = ro(t, e, a, l);
              break t;
            } else if (a !== n) {
              n = Ee(Error(r(424)), e), sn(n), e = ro(t, e, a, l);
              break t;
            } else for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, At = Ue(t.firstChild), Kt = e, ct = true, _l = null, we = true, l = ur(e, null, a, l), e.child = l; l; ) l.flags = l.flags & -3 | 4096, l = l.sibling;
            else {
              if (Kl(), a === n) {
                e = ll(t, e, l);
                break t;
              }
              kt(t, e, a, l);
            }
            e = e.child;
          }
          return e;
        case 26:
          return Du(t, e), t === null ? (l = zd(e.type, null, e.pendingProps, null)) ? e.memoizedState = l : ct || (l = e.type, t = e.pendingProps, a = $u(K.current).createElement(l), a[Vt] = e, a[le] = t, Wt(a, l, t), Xt(a), e.stateNode = a) : e.memoizedState = zd(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null;
        case 27:
          return dl(e), t === null && ct && (a = e.stateNode = Nd(e.type, e.pendingProps, K.current), Kt = e, we = true, n = At, Dl(e.type) ? (vs = n, At = Ue(a.firstChild)) : At = n), kt(t, e, e.pendingProps.children, l), Du(t, e), t === null && (e.flags |= 4194304), e.child;
        case 5:
          return t === null && ct && ((n = a = At) && (a = Oh(a, e.type, e.pendingProps, we), a !== null ? (e.stateNode = a, Kt = e, At = Ue(a.firstChild), we = false, n = true) : n = false), n || vl(e)), dl(e), n = e.type, u = e.pendingProps, i = t !== null ? t.memoizedProps : null, a = u.children, hs(n, u) ? a = null : i !== null && hs(n, i) && (e.flags |= 32), e.memoizedState !== null && (n = mc(t, e, K0, null, null, l), Rn._currentValue = n), Du(t, e), kt(t, e, a, l), e.child;
        case 6:
          return t === null && ct && ((t = l = At) && (l = Uh(l, e.pendingProps, we), l !== null ? (e.stateNode = l, Kt = e, At = null, t = true) : t = false), t || vl(e)), null;
        case 13:
          return oo(t, e, l);
        case 4:
          return Gt(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = Il(e, null, a, l) : kt(t, e, a, l), e.child;
        case 11:
          return lo(t, e, e.type, e.pendingProps, l);
        case 7:
          return kt(t, e, e.pendingProps, l), e.child;
        case 8:
          return kt(t, e, e.pendingProps.children, l), e.child;
        case 12:
          return kt(t, e, e.pendingProps.children, l), e.child;
        case 10:
          return a = e.pendingProps, pl(e, e.type, a.value), kt(t, e, a.children, l), e.child;
        case 9:
          return n = e.type._context, a = e.pendingProps.children, kl(e), n = Jt(n), a = a(n), e.flags |= 1, kt(t, e, a, l), e.child;
        case 14:
          return ao(t, e, e.type, e.pendingProps, l);
        case 15:
          return no(t, e, e.type, e.pendingProps, l);
        case 19:
          return ho(t, e, l);
        case 31:
          return th(t, e, l);
        case 22:
          return uo(t, e, l, e.pendingProps);
        case 24:
          return kl(e), a = Jt(Rt), t === null ? (n = ac(), n === null && (n = jt, u = ec(), n.pooledCache = u, u.refCount++, u !== null && (n.pooledCacheLanes |= l), n = u), e.memoizedState = {
            parent: a,
            cache: n
          }, uc(e), pl(e, Rt, n)) : ((t.lanes & l) !== 0 && (ic(t, e), yn(e, null, null, l), hn()), n = t.memoizedState, u = e.memoizedState, n.parent !== a ? (n = {
            parent: a,
            cache: a
          }, e.memoizedState = n, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = n), pl(e, Rt, a)) : (a = u.cache, pl(e, Rt, a), a !== n.cache && tc(e, [
            Rt
          ], l, true))), kt(t, e, e.pendingProps.children, l), e.child;
        case 29:
          throw e.pendingProps;
      }
      throw Error(r(156, e.tag));
    }
    function al(t) {
      t.flags |= 4;
    }
    function Gc(t, e, l, a, n) {
      if ((e = (t.mode & 32) !== 0) && (e = false), e) {
        if (t.flags |= 16777216, (n & 335544128) === n) if (t.stateNode.complete) t.flags |= 8192;
        else if (Xo()) t.flags |= 8192;
        else throw Fl = _u, nc;
      } else t.flags &= -16777217;
    }
    function go(t, e) {
      if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217;
      else if (t.flags |= 16777216, !Od(e)) if (Xo()) t.flags |= 8192;
      else throw Fl = _u, nc;
    }
    function Ru(t, e) {
      e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Js() : 536870912, t.lanes |= e, Ca |= e);
    }
    function xn(t, e) {
      if (!ct) switch (t.tailMode) {
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
    function lh(t, e, l) {
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
          return l = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Pe(Rt), Mt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (t === null || t.child === null) && (xa(e) ? al(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Fi())), zt(e), null;
        case 26:
          var n = e.type, u = e.memoizedState;
          return t === null ? (al(e), u !== null ? (zt(e), go(e, u)) : (zt(e), Gc(e, n, null, a, l))) : u ? u !== t.memoizedState ? (al(e), zt(e), go(e, u)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && al(e), zt(e), Gc(e, n, t, a, l)), null;
        case 27:
          if (Ft(e), l = K.current, n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && al(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return zt(e), null;
            }
            t = H.current, xa(e) ? kf(e) : (t = Nd(n, a, l), e.stateNode = t, al(e));
          }
          return zt(e), null;
        case 5:
          if (Ft(e), n = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && al(e);
          else {
            if (!a) {
              if (e.stateNode === null) throw Error(r(166));
              return zt(e), null;
            }
            if (u = H.current, xa(e)) kf(e);
            else {
              var i = $u(K.current);
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
              u[Vt] = e, u[le] = a;
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
              t: switch (Wt(u, n, a), n) {
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
              a && al(e);
            }
          }
          return zt(e), Gc(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, l), null;
        case 6:
          if (t && e.stateNode != null) t.memoizedProps !== a && al(e);
          else {
            if (typeof a != "string" && e.stateNode === null) throw Error(r(166));
            if (t = K.current, xa(e)) {
              if (t = e.stateNode, l = e.memoizedProps, a = null, n = Kt, n !== null) switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
              t[Vt] = e, t = !!(t.nodeValue === l || a !== null && a.suppressHydrationWarning === true || dd(t.nodeValue, l)), t || vl(e, true);
            } else t = $u(t).createTextNode(a), t[Vt] = e, e.stateNode = t;
          }
          return zt(e), null;
        case 31:
          if (l = e.memoizedState, t === null || t.memoizedState !== null) {
            if (a = xa(e), l !== null) {
              if (t === null) {
                if (!a) throw Error(r(318));
                if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
                t[Vt] = e;
              } else Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              zt(e), t = false;
            } else l = Fi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = l), t = true;
            if (!t) return e.flags & 256 ? (ge(e), e) : (ge(e), null);
            if ((e.flags & 128) !== 0) throw Error(r(558));
          }
          return zt(e), null;
        case 13:
          if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
            if (n = xa(e), a !== null && a.dehydrated !== null) {
              if (t === null) {
                if (!n) throw Error(r(318));
                if (n = e.memoizedState, n = n !== null ? n.dehydrated : null, !n) throw Error(r(317));
                n[Vt] = e;
              } else Kl(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
              zt(e), n = false;
            } else n = Fi(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), n = true;
            if (!n) return e.flags & 256 ? (ge(e), e) : (ge(e), null);
          }
          return ge(e), (e.flags & 128) !== 0 ? (e.lanes = l, e) : (l = a !== null, t = t !== null && t.memoizedState !== null, l && (a = e.child, n = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (n = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== n && (a.flags |= 2048)), l !== t && l && (e.child.flags |= 8192), Ru(e, e.updateQueue), zt(e), null);
        case 4:
          return Mt(), t === null && fs(e.stateNode.containerInfo), zt(e), null;
        case 10:
          return Pe(e.type), zt(e), null;
        case 19:
          if (C(Ut), a = e.memoizedState, a === null) return zt(e), null;
          if (n = (e.flags & 128) !== 0, u = a.rendering, u === null) if (n) xn(a, false);
          else {
            if (Ot !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null; ) {
              if (u = Su(t), u !== null) {
                for (e.flags |= 128, xn(a, false), t = u.updateQueue, e.updateQueue = t, Ru(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Qf(l, t), l = l.sibling;
                return E(Ut, Ut.current & 1 | 2), ct && Fe(e, a.treeForkCount), e.child;
              }
              t = t.sibling;
            }
            a.tail !== null && re() > Lu && (e.flags |= 128, n = true, xn(a, false), e.lanes = 4194304);
          }
          else {
            if (!n) if (t = Su(u), t !== null) {
              if (e.flags |= 128, n = true, t = t.updateQueue, e.updateQueue = t, Ru(e, t), xn(a, true), a.tail === null && a.tailMode === "hidden" && !u.alternate && !ct) return zt(e), null;
            } else 2 * re() - a.renderingStartTime > Lu && l !== 536870912 && (e.flags |= 128, n = true, xn(a, false), e.lanes = 4194304);
            a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
          }
          return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = re(), t.sibling = null, l = Ut.current, E(Ut, n ? l & 1 | 2 : l & 1), ct && Fe(e, a.treeForkCount), t) : (zt(e), null);
        case 22:
        case 23:
          return ge(e), rc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (l & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), l = e.updateQueue, l !== null && Ru(e, l.retryQueue), l = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && C(Wl), null;
        case 24:
          return l = null, t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Pe(Rt), zt(e), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(r(156, e.tag));
    }
    function ah(t, e) {
      switch (Wi(e), e.tag) {
        case 1:
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 3:
          return Pe(Rt), Mt(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
        case 26:
        case 27:
        case 5:
          return Ft(e), null;
        case 31:
          if (e.memoizedState !== null) {
            if (ge(e), e.alternate === null) throw Error(r(340));
            Kl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 13:
          if (ge(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
            if (e.alternate === null) throw Error(r(340));
            Kl();
          }
          return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 19:
          return C(Ut), null;
        case 4:
          return Mt(), null;
        case 10:
          return Pe(e.type), null;
        case 22:
        case 23:
          return ge(e), rc(), t !== null && C(Wl), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
        case 24:
          return Pe(Rt), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function bo(t, e) {
      switch (Wi(e), e.tag) {
        case 3:
          Pe(Rt), Mt();
          break;
        case 26:
        case 27:
        case 5:
          Ft(e);
          break;
        case 4:
          Mt();
          break;
        case 31:
          e.memoizedState !== null && ge(e);
          break;
        case 13:
          ge(e);
          break;
        case 19:
          C(Ut);
          break;
        case 10:
          Pe(e.type);
          break;
        case 22:
        case 23:
          ge(e), rc(), t !== null && C(Wl);
          break;
        case 24:
          Pe(Rt);
      }
    }
    function Sn(t, e) {
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
        bt(e, e.return, o);
      }
    }
    function zl(t, e, l) {
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
                } catch (T) {
                  bt(n, m, T);
                }
              }
            }
            a = a.next;
          } while (a !== u);
        }
      } catch (T) {
        bt(e, e.return, T);
      }
    }
    function _o(t) {
      var e = t.updateQueue;
      if (e !== null) {
        var l = t.stateNode;
        try {
          cr(e, l);
        } catch (a) {
          bt(t, t.return, a);
        }
      }
    }
    function vo(t, e, l) {
      l.props = ta(t.type, t.memoizedProps), l.state = t.memoizedState;
      try {
        l.componentWillUnmount();
      } catch (a) {
        bt(t, e, a);
      }
    }
    function Nn(t, e) {
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
        bt(t, e, n);
      }
    }
    function Ge(t, e) {
      var l = t.ref, a = t.refCleanup;
      if (l !== null) if (typeof a == "function") try {
        a();
      } catch (n) {
        bt(t, e, n);
      } finally {
        t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
      }
      else if (typeof l == "function") try {
        l(null);
      } catch (n) {
        bt(t, e, n);
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
        bt(t, t.return, n);
      }
    }
    function Xc(t, e, l) {
      try {
        var a = t.stateNode;
        Ah(a, t.type, l, e), a[le] = e;
      } catch (n) {
        bt(t, t.return, n);
      }
    }
    function xo(t) {
      return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Dl(t.type) || t.tag === 4;
    }
    function Qc(t) {
      t: for (; ; ) {
        for (; t.sibling === null; ) {
          if (t.return === null || xo(t.return)) return null;
          t = t.return;
        }
        for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
          if (t.tag === 27 && Dl(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
          t.child.return = t, t = t.child;
        }
        if (!(t.flags & 2)) return t.stateNode;
      }
    }
    function Zc(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(t, e) : (e = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, e.appendChild(t), l = l._reactRootContainer, l != null || e.onclick !== null || (e.onclick = ke));
      else if (a !== 4 && (a === 27 && Dl(t.type) && (l = t.stateNode, e = null), t = t.child, t !== null)) for (Zc(t, e, l), t = t.sibling; t !== null; ) Zc(t, e, l), t = t.sibling;
    }
    function Hu(t, e, l) {
      var a = t.tag;
      if (a === 5 || a === 6) t = t.stateNode, e ? l.insertBefore(t, e) : l.appendChild(t);
      else if (a !== 4 && (a === 27 && Dl(t.type) && (l = t.stateNode), t = t.child, t !== null)) for (Hu(t, e, l), t = t.sibling; t !== null; ) Hu(t, e, l), t = t.sibling;
    }
    function So(t) {
      var e = t.stateNode, l = t.memoizedProps;
      try {
        for (var a = t.type, n = e.attributes; n.length; ) e.removeAttributeNode(n[0]);
        Wt(e, a, l), e[Vt] = t, e[le] = l;
      } catch (u) {
        bt(t, t.return, u);
      }
    }
    var nl = false, qt = false, Vc = false, No = typeof WeakSet == "function" ? WeakSet : Set, Qt = null;
    function nh(t, e) {
      if (t = t.containerInfo, ds = ai, t = Cf(t), qi(t)) {
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
            var i = 0, o = -1, m = -1, N = 0, T = 0, D = t, j = null;
            e: for (; ; ) {
              for (var z; D !== l || n !== 0 && D.nodeType !== 3 || (o = i + n), D !== u || a !== 0 && D.nodeType !== 3 || (m = i + a), D.nodeType === 3 && (i += D.nodeValue.length), (z = D.firstChild) !== null; ) j = D, D = z;
              for (; ; ) {
                if (D === t) break e;
                if (j === l && ++N === n && (o = i), j === u && ++T === a && (m = i), (z = D.nextSibling) !== null) break;
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
      for (ms = {
        focusedElem: t,
        selectionRange: l
      }, ai = false, Qt = e; Qt !== null; ) if (e = Qt, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Qt = t;
      else for (; Qt !== null; ) {
        switch (e = Qt, u = e.alternate, t = e.flags, e.tag) {
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
                var L = ta(l.type, n);
                t = a.getSnapshotBeforeUpdate(L, u), a.__reactInternalSnapshotBeforeUpdate = t;
              } catch (Q) {
                bt(l, l.return, Q);
              }
            }
            break;
          case 3:
            if ((t & 1024) !== 0) {
              if (t = e.stateNode.containerInfo, l = t.nodeType, l === 9) gs(t);
              else if (l === 1) switch (t.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  gs(t);
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
          t.return = e.return, Qt = t;
          break;
        }
        Qt = e.return;
      }
    }
    function jo(t, e, l) {
      var a = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          il(t, l), a & 4 && Sn(5, l);
          break;
        case 1:
          if (il(t, l), a & 4) if (t = l.stateNode, e === null) try {
            t.componentDidMount();
          } catch (i) {
            bt(l, l.return, i);
          }
          else {
            var n = ta(l.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(n, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              bt(l, l.return, i);
            }
          }
          a & 64 && _o(l), a & 512 && Nn(l, l.return);
          break;
        case 3:
          if (il(t, l), a & 64 && (t = l.updateQueue, t !== null)) {
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
              bt(l, l.return, i);
            }
          }
          break;
        case 27:
          e === null && a & 4 && So(l);
        case 26:
        case 5:
          il(t, l), e === null && a & 4 && po(l), a & 512 && Nn(l, l.return);
          break;
        case 12:
          il(t, l);
          break;
        case 31:
          il(t, l), a & 4 && Eo(t, l);
          break;
        case 13:
          il(t, l), a & 4 && To(t, l), a & 64 && (t = l.memoizedState, t !== null && (t = t.dehydrated, t !== null && (l = mh.bind(null, l), Dh(t, l))));
          break;
        case 22:
          if (a = l.memoizedState !== null || nl, !a) {
            e = e !== null && e.memoizedState !== null || qt, n = nl;
            var u = qt;
            nl = a, (qt = e) && !u ? cl(t, l, (l.subtreeFlags & 8772) !== 0) : il(t, l), nl = n, qt = u;
          }
          break;
        case 30:
          break;
        default:
          il(t, l);
      }
    }
    function Ao(t) {
      var e = t.alternate;
      e !== null && (t.alternate = null, Ao(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xi(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
    }
    var Et = null, ne = false;
    function ul(t, e, l) {
      for (l = l.child; l !== null; ) zo(t, e, l), l = l.sibling;
    }
    function zo(t, e, l) {
      if (oe && typeof oe.onCommitFiberUnmount == "function") try {
        oe.onCommitFiberUnmount(Ka, l);
      } catch {
      }
      switch (l.tag) {
        case 26:
          qt || Ge(l, e), ul(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
          break;
        case 27:
          qt || Ge(l, e);
          var a = Et, n = ne;
          Dl(l.type) && (Et = l.stateNode, ne = false), ul(t, e, l), Un(l.stateNode), Et = a, ne = n;
          break;
        case 5:
          qt || Ge(l, e);
        case 6:
          if (a = Et, n = ne, Et = null, ul(t, e, l), Et = a, ne = n, Et !== null) if (ne) try {
            (Et.nodeType === 9 ? Et.body : Et.nodeName === "HTML" ? Et.ownerDocument.body : Et).removeChild(l.stateNode);
          } catch (u) {
            bt(l, e, u);
          }
          else try {
            Et.removeChild(l.stateNode);
          } catch (u) {
            bt(l, e, u);
          }
          break;
        case 18:
          Et !== null && (ne ? (t = Et, _d(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, l.stateNode), Xa(t)) : _d(Et, l.stateNode));
          break;
        case 4:
          a = Et, n = ne, Et = l.stateNode.containerInfo, ne = true, ul(t, e, l), Et = a, ne = n;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          zl(2, l, e), qt || zl(4, l, e), ul(t, e, l);
          break;
        case 1:
          qt || (Ge(l, e), a = l.stateNode, typeof a.componentWillUnmount == "function" && vo(l, e, a)), ul(t, e, l);
          break;
        case 21:
          ul(t, e, l);
          break;
        case 22:
          qt = (a = qt) || l.memoizedState !== null, ul(t, e, l), qt = a;
          break;
        default:
          ul(t, e, l);
      }
    }
    function Eo(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
        t = t.dehydrated;
        try {
          Xa(t);
        } catch (l) {
          bt(e, e.return, l);
        }
      }
    }
    function To(t, e) {
      if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try {
        Xa(t);
      } catch (l) {
        bt(e, e.return, l);
      }
    }
    function uh(t) {
      switch (t.tag) {
        case 31:
        case 13:
        case 19:
          var e = t.stateNode;
          return e === null && (e = t.stateNode = new No()), e;
        case 22:
          return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new No()), e;
        default:
          throw Error(r(435, t.tag));
      }
    }
    function Bu(t, e) {
      var l = uh(t);
      e.forEach(function(a) {
        if (!l.has(a)) {
          l.add(a);
          var n = hh.bind(null, t, a);
          a.then(n, n);
        }
      });
    }
    function ue(t, e) {
      var l = e.deletions;
      if (l !== null) for (var a = 0; a < l.length; a++) {
        var n = l[a], u = t, i = e, o = i;
        t: for (; o !== null; ) {
          switch (o.tag) {
            case 27:
              if (Dl(o.type)) {
                Et = o.stateNode, ne = false;
                break t;
              }
              break;
            case 5:
              Et = o.stateNode, ne = false;
              break t;
            case 3:
            case 4:
              Et = o.stateNode.containerInfo, ne = true;
              break t;
          }
          o = o.return;
        }
        if (Et === null) throw Error(r(160));
        zo(u, i, n), Et = null, ne = false, u = n.alternate, u !== null && (u.return = null), n.return = null;
      }
      if (e.subtreeFlags & 13886) for (e = e.child; e !== null; ) Mo(e, t), e = e.sibling;
    }
    var He = null;
    function Mo(t, e) {
      var l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ue(e, t), ie(t), a & 4 && (zl(3, t, t.return), Sn(3, t), zl(5, t, t.return));
          break;
        case 1:
          ue(e, t), ie(t), a & 512 && (qt || l === null || Ge(l, l.return)), a & 64 && nl && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (l = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
          break;
        case 26:
          var n = He;
          if (ue(e, t), ie(t), a & 512 && (qt || l === null || Ge(l, l.return)), a & 4) {
            var u = l !== null ? l.memoizedState : null;
            if (a = t.memoizedState, l === null) if (a === null) if (t.stateNode === null) {
              t: {
                a = t.type, l = t.memoizedProps, n = n.ownerDocument || n;
                e: switch (a) {
                  case "title":
                    u = n.getElementsByTagName("title")[0], (!u || u[Wa] || u[Vt] || u.namespaceURI === "http://www.w3.org/2000/svg" || u.hasAttribute("itemprop")) && (u = n.createElement(a), n.head.insertBefore(u, n.querySelector("head > title"))), Wt(u, a, l), u[Vt] = t, Xt(u), a = u;
                    break t;
                  case "link":
                    var i = Md("link", "href", n).get(a + (l.href || ""));
                    if (i) {
                      for (var o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && u.getAttribute("rel") === (l.rel == null ? null : l.rel) && u.getAttribute("title") === (l.title == null ? null : l.title) && u.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                        i.splice(o, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), Wt(u, a, l), n.head.appendChild(u);
                    break;
                  case "meta":
                    if (i = Md("meta", "content", n).get(a + (l.content || ""))) {
                      for (o = 0; o < i.length; o++) if (u = i[o], u.getAttribute("content") === (l.content == null ? null : "" + l.content) && u.getAttribute("name") === (l.name == null ? null : l.name) && u.getAttribute("property") === (l.property == null ? null : l.property) && u.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && u.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                        i.splice(o, 1);
                        break e;
                      }
                    }
                    u = n.createElement(a), Wt(u, a, l), n.head.appendChild(u);
                    break;
                  default:
                    throw Error(r(468, a));
                }
                u[Vt] = t, Xt(u), a = u;
              }
              t.stateNode = a;
            } else wd(n, t.type, t.stateNode);
            else t.stateNode = Td(n, a, t.memoizedProps);
            else u !== a ? (u === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : u.count--, a === null ? wd(n, t.type, t.stateNode) : Td(n, a, t.memoizedProps)) : a === null && t.stateNode !== null && Xc(t, t.memoizedProps, l.memoizedProps);
          }
          break;
        case 27:
          ue(e, t), ie(t), a & 512 && (qt || l === null || Ge(l, l.return)), l !== null && a & 4 && Xc(t, t.memoizedProps, l.memoizedProps);
          break;
        case 5:
          if (ue(e, t), ie(t), a & 512 && (qt || l === null || Ge(l, l.return)), t.flags & 32) {
            n = t.stateNode;
            try {
              oa(n, "");
            } catch (L) {
              bt(t, t.return, L);
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
            } catch (L) {
              bt(t, t.return, L);
            }
          }
          break;
        case 3:
          if (Pu = null, n = He, He = Fu(e.containerInfo), ue(e, t), He = n, ie(t), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
            Xa(e.containerInfo);
          } catch (L) {
            bt(t, t.return, L);
          }
          Vc && (Vc = false, wo(t));
          break;
        case 4:
          a = He, He = Fu(t.stateNode.containerInfo), ue(e, t), ie(t), He = a;
          break;
        case 12:
          ue(e, t), ie(t);
          break;
        case 31:
          ue(e, t), ie(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Bu(t, a)));
          break;
        case 13:
          ue(e, t), ie(t), t.child.flags & 8192 && t.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Yu = re()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Bu(t, a)));
          break;
        case 22:
          n = t.memoizedState !== null;
          var m = l !== null && l.memoizedState !== null, N = nl, T = qt;
          if (nl = N || n, qt = T || m, ue(e, t), qt = T, nl = N, ie(t), a & 8192) t: for (e = t.stateNode, e._visibility = n ? e._visibility & -2 : e._visibility | 1, n && (l === null || m || nl || qt || ea(t)), l = null, e = t; ; ) {
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
                } catch (L) {
                  bt(m, m.return, L);
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                m = e;
                try {
                  m.stateNode.nodeValue = n ? "" : m.memoizedProps;
                } catch (L) {
                  bt(m, m.return, L);
                }
              }
            } else if (e.tag === 18) {
              if (l === null) {
                m = e;
                try {
                  var z = m.stateNode;
                  n ? vd(z, true) : vd(m.stateNode, false);
                } catch (L) {
                  bt(m, m.return, L);
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
          a & 4 && (a = t.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, Bu(t, l))));
          break;
        case 19:
          ue(e, t), ie(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, Bu(t, a)));
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
            if (xo(a)) {
              l = a;
              break;
            }
            a = a.return;
          }
          if (l == null) throw Error(r(160));
          switch (l.tag) {
            case 27:
              var n = l.stateNode, u = Qc(t);
              Hu(t, u, n);
              break;
            case 5:
              var i = l.stateNode;
              l.flags & 32 && (oa(i, ""), l.flags &= -33);
              var o = Qc(t);
              Hu(t, o, i);
              break;
            case 3:
            case 4:
              var m = l.stateNode.containerInfo, N = Qc(t);
              Zc(t, N, m);
              break;
            default:
              throw Error(r(161));
          }
        } catch (T) {
          bt(t, t.return, T);
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
    function il(t, e) {
      if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) jo(t, e.alternate, e), e = e.sibling;
    }
    function ea(t) {
      for (t = t.child; t !== null; ) {
        var e = t;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            zl(4, e, e.return), ea(e);
            break;
          case 1:
            Ge(e, e.return);
            var l = e.stateNode;
            typeof l.componentWillUnmount == "function" && vo(e, e.return, l), ea(e);
            break;
          case 27:
            Un(e.stateNode);
          case 26:
          case 5:
            Ge(e, e.return), ea(e);
            break;
          case 22:
            e.memoizedState === null && ea(e);
            break;
          case 30:
            ea(e);
            break;
          default:
            ea(e);
        }
        t = t.sibling;
      }
    }
    function cl(t, e, l) {
      for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
        var a = e.alternate, n = t, u = e, i = u.flags;
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
              bt(a, a.return, N);
            }
            if (a = u, n = a.updateQueue, n !== null) {
              var o = a.stateNode;
              try {
                var m = n.shared.hiddenCallbacks;
                if (m !== null) for (n.shared.hiddenCallbacks = null, n = 0; n < m.length; n++) ir(m[n], o);
              } catch (N) {
                bt(a, a.return, N);
              }
            }
            l && i & 64 && _o(u), Nn(u, u.return);
            break;
          case 27:
            So(u);
          case 26:
          case 5:
            cl(n, u, l), l && a === null && i & 4 && po(u), Nn(u, u.return);
            break;
          case 12:
            cl(n, u, l);
            break;
          case 31:
            cl(n, u, l), l && i & 4 && Eo(n, u);
            break;
          case 13:
            cl(n, u, l), l && i & 4 && To(n, u);
            break;
          case 22:
            u.memoizedState === null && cl(n, u, l), Nn(u, u.return);
            break;
          case 30:
            break;
          default:
            cl(n, u, l);
        }
        e = e.sibling;
      }
    }
    function Kc(t, e) {
      var l = null;
      t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && fn(l));
    }
    function Jc(t, e) {
      t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && fn(t));
    }
    function Be(t, e, l, a) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) Oo(t, e, l, a), e = e.sibling;
    }
    function Oo(t, e, l, a) {
      var n = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Be(t, e, l, a), n & 2048 && Sn(9, e);
          break;
        case 1:
          Be(t, e, l, a);
          break;
        case 3:
          Be(t, e, l, a), n & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && fn(t)));
          break;
        case 12:
          if (n & 2048) {
            Be(t, e, l, a), t = e.stateNode;
            try {
              var u = e.memoizedProps, i = u.id, o = u.onPostCommit;
              typeof o == "function" && o(i, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0);
            } catch (m) {
              bt(e, e.return, m);
            }
          } else Be(t, e, l, a);
          break;
        case 31:
          Be(t, e, l, a);
          break;
        case 13:
          Be(t, e, l, a);
          break;
        case 23:
          break;
        case 22:
          u = e.stateNode, i = e.alternate, e.memoizedState !== null ? u._visibility & 2 ? Be(t, e, l, a) : jn(t, e) : u._visibility & 2 ? Be(t, e, l, a) : (u._visibility |= 2, Oa(t, e, l, a, (e.subtreeFlags & 10256) !== 0 || false)), n & 2048 && Kc(i, e);
          break;
        case 24:
          Be(t, e, l, a), n & 2048 && Jc(e.alternate, e);
          break;
        default:
          Be(t, e, l, a);
      }
    }
    function Oa(t, e, l, a, n) {
      for (n = n && ((e.subtreeFlags & 10256) !== 0 || false), e = e.child; e !== null; ) {
        var u = t, i = e, o = l, m = a, N = i.flags;
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
            i.memoizedState !== null ? T._visibility & 2 ? Oa(u, i, o, m, n) : jn(u, i) : (T._visibility |= 2, Oa(u, i, o, m, n)), n && N & 2048 && Kc(i.alternate, i);
            break;
          case 24:
            Oa(u, i, o, m, n), n && N & 2048 && Jc(i.alternate, i);
            break;
          default:
            Oa(u, i, o, m, n);
        }
        e = e.sibling;
      }
    }
    function jn(t, e) {
      if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) {
        var l = t, a = e, n = a.flags;
        switch (a.tag) {
          case 22:
            jn(l, a), n & 2048 && Kc(a.alternate, a);
            break;
          case 24:
            jn(l, a), n & 2048 && Jc(a.alternate, a);
            break;
          default:
            jn(l, a);
        }
        e = e.sibling;
      }
    }
    var An = 8192;
    function Ua(t, e, l) {
      if (t.subtreeFlags & An) for (t = t.child; t !== null; ) Uo(t, e, l), t = t.sibling;
    }
    function Uo(t, e, l) {
      switch (t.tag) {
        case 26:
          Ua(t, e, l), t.flags & An && t.memoizedState !== null && Vh(l, He, t.memoizedState, t.memoizedProps);
          break;
        case 5:
          Ua(t, e, l);
          break;
        case 3:
        case 4:
          var a = He;
          He = Fu(t.stateNode.containerInfo), Ua(t, e, l), He = a;
          break;
        case 22:
          t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = An, An = 16777216, Ua(t, e, l), An = a) : Ua(t, e, l));
          break;
        default:
          Ua(t, e, l);
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
          Qt = a, Ro(a, t);
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
          zn(t), t.flags & 2048 && zl(9, t, t.return);
          break;
        case 3:
          zn(t);
          break;
        case 12:
          zn(t);
          break;
        case 22:
          var e = t.stateNode;
          t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, qu(t)) : zn(t);
          break;
        default:
          zn(t);
      }
    }
    function qu(t) {
      var e = t.deletions;
      if ((t.flags & 16) !== 0) {
        if (e !== null) for (var l = 0; l < e.length; l++) {
          var a = e[l];
          Qt = a, Ro(a, t);
        }
        Do(t);
      }
      for (t = t.child; t !== null; ) {
        switch (e = t, e.tag) {
          case 0:
          case 11:
          case 15:
            zl(8, e, e.return), qu(e);
            break;
          case 22:
            l = e.stateNode, l._visibility & 2 && (l._visibility &= -3, qu(e));
            break;
          default:
            qu(e);
        }
        t = t.sibling;
      }
    }
    function Ro(t, e) {
      for (; Qt !== null; ) {
        var l = Qt;
        switch (l.tag) {
          case 0:
          case 11:
          case 15:
            zl(8, l, e);
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
        if (a = l.child, a !== null) a.return = l, Qt = a;
        else t: for (l = t; Qt !== null; ) {
          a = Qt;
          var n = a.sibling, u = a.return;
          if (Ao(a), a === l) {
            Qt = null;
            break t;
          }
          if (n !== null) {
            n.return = u, Qt = n;
            break t;
          }
          Qt = u;
        }
      }
    }
    var ih = {
      getCacheForType: function(t) {
        var e = Jt(Rt), l = e.data.get(t);
        return l === void 0 && (l = t(), e.data.set(t, l)), l;
      },
      cacheSignal: function() {
        return Jt(Rt).controller.signal;
      }
    }, ch = typeof WeakMap == "function" ? WeakMap : Map, mt = 0, jt = null, lt = null, ut = 0, gt = 0, be = null, El = false, Da = false, kc = false, sl = 0, Ot = 0, Tl = 0, la = 0, Wc = 0, _e = 0, Ca = 0, En = null, ce = null, $c = false, Yu = 0, Ho = 0, Lu = 1 / 0, Gu = null, Ml = null, Yt = 0, wl = null, Ra = null, fl = 0, Fc = 0, Ic = null, Bo = null, Tn = 0, Pc = null;
    function ve() {
      return (mt & 2) !== 0 && ut !== 0 ? ut & -ut : w.T !== null ? us() : Fs();
    }
    function qo() {
      if (_e === 0) if ((ut & 536870912) === 0 || ct) {
        var t = Wn;
        Wn <<= 1, (Wn & 3932160) === 0 && (Wn = 262144), _e = t;
      } else _e = 536870912;
      return t = ye.current, t !== null && (t.flags |= 32), _e;
    }
    function se(t, e, l) {
      (t === jt && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) && (Ha(t, 0), Ol(t, ut, _e, false)), ka(t, l), ((mt & 2) === 0 || t !== jt) && (t === jt && ((mt & 2) === 0 && (la |= l), Ot === 4 && Ol(t, ut, _e, false)), Xe(t));
    }
    function Yo(t, e, l) {
      if ((mt & 6) !== 0) throw Error(r(327));
      var a = !l && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ja(t, e), n = a ? rh(t, e) : es(t, e, true), u = a;
      do {
        if (n === 0) {
          Da && !a && Ol(t, e, 0, false);
          break;
        } else {
          if (l = t.current.alternate, u && !sh(l)) {
            n = es(t, e, false), u = false;
            continue;
          }
          if (n === 2) {
            if (u = e, t.errorRecoveryDisabledLanes & u) var i = 0;
            else i = t.pendingLanes & -536870913, i = i !== 0 ? i : i & 536870912 ? 536870912 : 0;
            if (i !== 0) {
              e = i;
              t: {
                var o = t;
                n = En;
                var m = o.current.memoizedState.isDehydrated;
                if (m && (Ha(o, i).flags |= 256), i = es(o, i, false), i !== 2) {
                  if (kc && !m) {
                    o.errorRecoveryDisabledLanes |= u, la |= u, n = 4;
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
            Ha(t, 0), Ol(t, e, 0, true);
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
                Ol(a, e, _e, !El);
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
            if ((e & 62914560) === e && (n = Yu + 300 - re(), 10 < n)) {
              if (Ol(a, e, _e, !El), Fn(a, 0, true) !== 0) break t;
              fl = e, a.timeoutHandle = gd(Lo.bind(null, a, l, ce, Gu, $c, e, _e, la, Ca, El, u, "Throttled", -0, 0), n);
              break t;
            }
            Lo(a, l, ce, Gu, $c, e, _e, la, Ca, El, u, null, -0, 0);
          }
        }
        break;
      } while (true);
      Xe(t);
    }
    function Lo(t, e, l, a, n, u, i, o, m, N, T, D, j, z) {
      if (t.timeoutHandle = -1, D = e.subtreeFlags, D & 8192 || (D & 16785408) === 16785408) {
        D = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: ke
        }, Uo(e, u, D);
        var L = (u & 62914560) === u ? Yu - re() : (u & 4194048) === u ? Ho - re() : 0;
        if (L = Kh(D, L), L !== null) {
          fl = u, t.cancelPendingCommit = L(ko.bind(null, t, e, u, l, a, n, i, o, m, T, D, null, j, z)), Ol(t, u, i, !N);
          return;
        }
      }
      ko(t, e, u, l, a, n, i, o, m);
    }
    function sh(t) {
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
    function Ol(t, e, l, a) {
      e &= ~Wc, e &= ~la, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
      for (var n = e; 0 < n; ) {
        var u = 31 - de(n), i = 1 << u;
        a[u] = -1, n &= ~i;
      }
      l !== 0 && ks(t, l, e);
    }
    function Xu() {
      return (mt & 6) === 0 ? (Mn(0), false) : true;
    }
    function ts() {
      if (lt !== null) {
        if (gt === 0) var t = lt.return;
        else t = lt, Ie = Jl = null, gc(t), za = null, on = 0, t = lt;
        for (; t !== null; ) bo(t.alternate, t), t = t.return;
        lt = null;
      }
    }
    function Ha(t, e) {
      var l = t.timeoutHandle;
      l !== -1 && (t.timeoutHandle = -1, Th(l)), l = t.cancelPendingCommit, l !== null && (t.cancelPendingCommit = null, l()), fl = 0, ts(), jt = t, lt = l = $e(t.current, null), ut = e, gt = 0, be = null, El = false, Da = Ja(t, e), kc = false, Ca = _e = Wc = la = Tl = Ot = 0, ce = En = null, $c = false, (e & 8) !== 0 && (e |= e & 32);
      var a = t.entangledLanes;
      if (a !== 0) for (t = t.entanglements, a &= e; 0 < a; ) {
        var n = 31 - de(a), u = 1 << n;
        e |= t[n], a &= ~u;
      }
      return sl = e, fu(), l;
    }
    function Go(t, e) {
      I = null, w.H = vn, e === Aa || e === bu ? (e = lr(), gt = 3) : e === nc ? (e = lr(), gt = 4) : gt = e === Uc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, be = e, lt === null && (Ot = 1, Ou(t, Ee(e, t.current)));
    }
    function Xo() {
      var t = ye.current;
      return t === null ? true : (ut & 4194048) === ut ? Oe === null : (ut & 62914560) === ut || (ut & 536870912) !== 0 ? t === Oe : false;
    }
    function Qo() {
      var t = w.H;
      return w.H = vn, t === null ? vn : t;
    }
    function Zo() {
      var t = w.A;
      return w.A = ih, t;
    }
    function Qu() {
      Ot = 4, El || (ut & 4194048) !== ut && ye.current !== null || (Da = true), (Tl & 134217727) === 0 && (la & 134217727) === 0 || jt === null || Ol(jt, ut, _e, false);
    }
    function es(t, e, l) {
      var a = mt;
      mt |= 2;
      var n = Qo(), u = Zo();
      (jt !== t || ut !== e) && (Gu = null, Ha(t, e)), e = false;
      var i = Ot;
      t: do
        try {
          if (gt !== 0 && lt !== null) {
            var o = lt, m = be;
            switch (gt) {
              case 8:
                ts(), i = 6;
                break t;
              case 3:
              case 2:
              case 9:
              case 6:
                ye.current === null && (e = true);
                var N = gt;
                if (gt = 0, be = null, Ba(t, o, m, N), l && Da) {
                  i = 0;
                  break t;
                }
                break;
              default:
                N = gt, gt = 0, be = null, Ba(t, o, m, N);
            }
          }
          fh(), i = Ot;
          break;
        } catch (T) {
          Go(t, T);
        }
      while (true);
      return e && t.shellSuspendCounter++, Ie = Jl = null, mt = a, w.H = n, w.A = u, lt === null && (jt = null, ut = 0, fu()), i;
    }
    function fh() {
      for (; lt !== null; ) Vo(lt);
    }
    function rh(t, e) {
      var l = mt;
      mt |= 2;
      var a = Qo(), n = Zo();
      jt !== t || ut !== e ? (Gu = null, Lu = re() + 500, Ha(t, e)) : Da = Ja(t, e);
      t: do
        try {
          if (gt !== 0 && lt !== null) {
            e = lt;
            var u = be;
            e: switch (gt) {
              case 1:
                gt = 0, be = null, Ba(t, e, u, 1);
                break;
              case 2:
              case 9:
                if (tr(u)) {
                  gt = 0, be = null, Ko(e);
                  break;
                }
                e = function() {
                  gt !== 2 && gt !== 9 || jt !== t || (gt = 7), Xe(t);
                }, u.then(e, e);
                break t;
              case 3:
                gt = 7;
                break t;
              case 4:
                gt = 5;
                break t;
              case 7:
                tr(u) ? (gt = 0, be = null, Ko(e)) : (gt = 0, be = null, Ba(t, e, u, 7));
                break;
              case 5:
                var i = null;
                switch (lt.tag) {
                  case 26:
                    i = lt.memoizedState;
                  case 5:
                  case 27:
                    var o = lt;
                    if (i ? Od(i) : o.stateNode.complete) {
                      gt = 0, be = null;
                      var m = o.sibling;
                      if (m !== null) lt = m;
                      else {
                        var N = o.return;
                        N !== null ? (lt = N, Zu(N)) : lt = null;
                      }
                      break e;
                    }
                }
                gt = 0, be = null, Ba(t, e, u, 5);
                break;
              case 6:
                gt = 0, be = null, Ba(t, e, u, 6);
                break;
              case 8:
                ts(), Ot = 6;
                break t;
              default:
                throw Error(r(462));
            }
          }
          oh();
          break;
        } catch (T) {
          Go(t, T);
        }
      while (true);
      return Ie = Jl = null, w.H = a, w.A = n, mt = l, lt !== null ? 0 : (jt = null, ut = 0, fu(), Ot);
    }
    function oh() {
      for (; lt !== null && !Cm(); ) Vo(lt);
    }
    function Vo(t) {
      var e = yo(t.alternate, t, sl);
      t.memoizedProps = t.pendingProps, e === null ? Zu(t) : lt = e;
    }
    function Ko(t) {
      var e = t, l = e.alternate;
      switch (e.tag) {
        case 15:
        case 0:
          e = so(l, e, e.pendingProps, e.type, void 0, ut);
          break;
        case 11:
          e = so(l, e, e.pendingProps, e.type.render, e.ref, ut);
          break;
        case 5:
          gc(e);
        default:
          bo(l, e), e = lt = Qf(e, sl), e = yo(l, e, sl);
      }
      t.memoizedProps = t.pendingProps, e === null ? Zu(t) : lt = e;
    }
    function Ba(t, e, l, a) {
      Ie = Jl = null, gc(e), za = null, on = 0;
      var n = e.return;
      try {
        if (P0(t, n, e, l, ut)) {
          Ot = 1, Ou(t, Ee(l, t.current)), lt = null;
          return;
        }
      } catch (u) {
        if (n !== null) throw lt = n, u;
        Ot = 1, Ou(t, Ee(l, t.current)), lt = null;
        return;
      }
      e.flags & 32768 ? (ct || a === 1 ? t = true : Da || (ut & 536870912) !== 0 ? t = false : (El = t = true, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ye.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Jo(e, t)) : Zu(e);
    }
    function Zu(t) {
      var e = t;
      do {
        if ((e.flags & 32768) !== 0) {
          Jo(e, El);
          return;
        }
        t = e.return;
        var l = lh(e.alternate, e, sl);
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
      Ot === 0 && (Ot = 5);
    }
    function Jo(t, e) {
      do {
        var l = ah(t.alternate, t);
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
      Ot = 6, lt = null;
    }
    function ko(t, e, l, a, n, u, i, o, m) {
      t.cancelPendingCommit = null;
      do
        Vu();
      while (Yt !== 0);
      if ((mt & 6) !== 0) throw Error(r(327));
      if (e !== null) {
        if (e === t.current) throw Error(r(177));
        if (u = e.lanes | e.childLanes, u |= Qi, Zm(t, l, u, i, o, m), t === jt && (lt = jt = null, ut = 0), Ra = e, wl = t, fl = l, Fc = u, Ic = n, Bo = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, yh(Jn, function() {
          return Po(), null;
        })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
          a = w.T, w.T = null, n = B.p, B.p = 2, i = mt, mt |= 4;
          try {
            nh(t, e, l);
          } finally {
            mt = i, B.p = n, w.T = a;
          }
        }
        Yt = 1, Wo(), $o(), Fo();
      }
    }
    function Wo() {
      if (Yt === 1) {
        Yt = 0;
        var t = wl, e = Ra, l = (e.flags & 13878) !== 0;
        if ((e.subtreeFlags & 13878) !== 0 || l) {
          l = w.T, w.T = null;
          var a = B.p;
          B.p = 2;
          var n = mt;
          mt |= 4;
          try {
            Mo(e, t);
            var u = ms, i = Cf(t.containerInfo), o = u.focusedElem, m = u.selectionRange;
            if (i !== o && o && o.ownerDocument && Df(o.ownerDocument.documentElement, o)) {
              if (m !== null && qi(o)) {
                var N = m.start, T = m.end;
                if (T === void 0 && (T = N), "selectionStart" in o) o.selectionStart = N, o.selectionEnd = Math.min(T, o.value.length);
                else {
                  var D = o.ownerDocument || document, j = D && D.defaultView || window;
                  if (j.getSelection) {
                    var z = j.getSelection(), L = o.textContent.length, Q = Math.min(m.start, L), St = m.end === void 0 ? Q : Math.min(m.end, L);
                    !z.extend && Q > St && (i = St, St = Q, Q = i);
                    var b = Uf(o, Q), h = Uf(o, St);
                    if (b && h && (z.rangeCount !== 1 || z.anchorNode !== b.node || z.anchorOffset !== b.offset || z.focusNode !== h.node || z.focusOffset !== h.offset)) {
                      var S = D.createRange();
                      S.setStart(b.node, b.offset), z.removeAllRanges(), Q > St ? (z.addRange(S), z.extend(h.node, h.offset)) : (S.setEnd(h.node, h.offset), z.addRange(S));
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
            ai = !!ds, ms = ds = null;
          } finally {
            mt = n, B.p = a, w.T = l;
          }
        }
        t.current = e, Yt = 2;
      }
    }
    function $o() {
      if (Yt === 2) {
        Yt = 0;
        var t = wl, e = Ra, l = (e.flags & 8772) !== 0;
        if ((e.subtreeFlags & 8772) !== 0 || l) {
          l = w.T, w.T = null;
          var a = B.p;
          B.p = 2;
          var n = mt;
          mt |= 4;
          try {
            jo(t, e.alternate, e);
          } finally {
            mt = n, B.p = a, w.T = l;
          }
        }
        Yt = 3;
      }
    }
    function Fo() {
      if (Yt === 4 || Yt === 3) {
        Yt = 0, Rm();
        var t = wl, e = Ra, l = fl, a = Bo;
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Yt = 5 : (Yt = 0, Ra = wl = null, Io(t, t.pendingLanes));
        var n = t.pendingLanes;
        if (n === 0 && (Ml = null), vi(l), e = e.stateNode, oe && typeof oe.onCommitFiberRoot == "function") try {
          oe.onCommitFiberRoot(Ka, e, void 0, (e.current.flags & 128) === 128);
        } catch {
        }
        if (a !== null) {
          e = w.T, n = B.p, B.p = 2, w.T = null;
          try {
            for (var u = t.onRecoverableError, i = 0; i < a.length; i++) {
              var o = a[i];
              u(o.value, {
                componentStack: o.stack
              });
            }
          } finally {
            w.T = e, B.p = n;
          }
        }
        (fl & 3) !== 0 && Vu(), Xe(t), n = t.pendingLanes, (l & 261930) !== 0 && (n & 42) !== 0 ? t === Pc ? Tn++ : (Tn = 0, Pc = t) : Tn = 0, Mn(0);
      }
    }
    function Io(t, e) {
      (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, fn(e)));
    }
    function Vu() {
      return Wo(), $o(), Fo(), Po();
    }
    function Po() {
      if (Yt !== 5) return false;
      var t = wl, e = Fc;
      Fc = 0;
      var l = vi(fl), a = w.T, n = B.p;
      try {
        B.p = 32 > l ? 32 : l, w.T = null, l = Ic, Ic = null;
        var u = wl, i = fl;
        if (Yt = 0, Ra = wl = null, fl = 0, (mt & 6) !== 0) throw Error(r(331));
        var o = mt;
        if (mt |= 4, Co(u.current), Oo(u, u.current, i, l), mt = o, Mn(0, false), oe && typeof oe.onPostCommitFiberRoot == "function") try {
          oe.onPostCommitFiberRoot(Ka, u);
        } catch {
        }
        return true;
      } finally {
        B.p = n, w.T = a, Io(t, e);
      }
    }
    function td(t, e, l) {
      e = Ee(l, e), e = Oc(t.stateNode, e, 2), t = Nl(t, e, 2), t !== null && (ka(t, 2), Xe(t));
    }
    function bt(t, e, l) {
      if (t.tag === 3) td(t, t, l);
      else for (; e !== null; ) {
        if (e.tag === 3) {
          td(e, t, l);
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ml === null || !Ml.has(a))) {
            t = Ee(l, t), l = to(2), a = Nl(e, l, 2), a !== null && (eo(l, a, e, t), ka(a, 2), Xe(a));
            break;
          }
        }
        e = e.return;
      }
    }
    function ls(t, e, l) {
      var a = t.pingCache;
      if (a === null) {
        a = t.pingCache = new ch();
        var n = /* @__PURE__ */ new Set();
        a.set(e, n);
      } else n = a.get(e), n === void 0 && (n = /* @__PURE__ */ new Set(), a.set(e, n));
      n.has(l) || (kc = true, n.add(l), t = dh.bind(null, t, e, l), e.then(t, t));
    }
    function dh(t, e, l) {
      var a = t.pingCache;
      a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & l, t.warmLanes &= ~l, jt === t && (ut & l) === l && (Ot === 4 || Ot === 3 && (ut & 62914560) === ut && 300 > re() - Yu ? (mt & 2) === 0 && Ha(t, 0) : Wc |= l, Ca === ut && (Ca = 0)), Xe(t);
    }
    function ed(t, e) {
      e === 0 && (e = Js()), t = Zl(t, e), t !== null && (ka(t, e), Xe(t));
    }
    function mh(t) {
      var e = t.memoizedState, l = 0;
      e !== null && (l = e.retryLane), ed(t, l);
    }
    function hh(t, e) {
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
    function yh(t, e) {
      return yi(t, e);
    }
    var Ku = null, qa = null, as = false, Ju = false, ns = false, Ul = 0;
    function Xe(t) {
      t !== qa && t.next === null && (qa === null ? Ku = qa = t : qa = qa.next = t), Ju = true, as || (as = true, bh());
    }
    function Mn(t, e) {
      if (!ns && Ju) {
        ns = true;
        do
          for (var l = false, a = Ku; a !== null; ) {
            if (t !== 0) {
              var n = a.pendingLanes;
              if (n === 0) var u = 0;
              else {
                var i = a.suspendedLanes, o = a.pingedLanes;
                u = (1 << 31 - de(42 | t) + 1) - 1, u &= n & ~(i & ~o), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
              }
              u !== 0 && (l = true, ud(a, u));
            } else u = ut, u = Fn(a, a === jt ? u : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (u & 3) === 0 || Ja(a, u) || (l = true, ud(a, u));
            a = a.next;
          }
        while (l);
        ns = false;
      }
    }
    function gh() {
      ld();
    }
    function ld() {
      Ju = as = false;
      var t = 0;
      Ul !== 0 && Eh() && (t = Ul);
      for (var e = re(), l = null, a = Ku; a !== null; ) {
        var n = a.next, u = ad(a, e);
        u === 0 ? (a.next = null, l === null ? Ku = n : l.next = n, n === null && (qa = l)) : (l = a, (t !== 0 || (u & 3) !== 0) && (Ju = true)), a = n;
      }
      Yt !== 0 && Yt !== 5 || Mn(t), Ul !== 0 && (Ul = 0);
    }
    function ad(t, e) {
      for (var l = t.suspendedLanes, a = t.pingedLanes, n = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
        var i = 31 - de(u), o = 1 << i, m = n[i];
        m === -1 ? ((o & l) === 0 || (o & a) !== 0) && (n[i] = Qm(o, e)) : m <= e && (t.expiredLanes |= o), u &= ~o;
      }
      if (e = jt, l = ut, l = Fn(t, t === e ? l : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, l === 0 || t === e && (gt === 2 || gt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && gi(a), t.callbackNode = null, t.callbackPriority = 0;
      if ((l & 3) === 0 || Ja(t, l)) {
        if (e = l & -l, e === t.callbackPriority) return e;
        switch (a !== null && gi(a), vi(l)) {
          case 2:
          case 8:
            l = Vs;
            break;
          case 32:
            l = Jn;
            break;
          case 268435456:
            l = Ks;
            break;
          default:
            l = Jn;
        }
        return a = nd.bind(null, t), l = yi(l, a), t.callbackPriority = e, t.callbackNode = l, e;
      }
      return a !== null && a !== null && gi(a), t.callbackPriority = 2, t.callbackNode = null, 2;
    }
    function nd(t, e) {
      if (Yt !== 0 && Yt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null;
      var l = t.callbackNode;
      if (Vu() && t.callbackNode !== l) return null;
      var a = ut;
      return a = Fn(t, t === jt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Yo(t, a, e), ad(t, re()), t.callbackNode != null && t.callbackNode === l ? nd.bind(null, t) : null);
    }
    function ud(t, e) {
      if (Vu()) return null;
      Yo(t, e, true);
    }
    function bh() {
      Mh(function() {
        (mt & 6) !== 0 ? yi(Zs, gh) : ld();
      });
    }
    function us() {
      if (Ul === 0) {
        var t = Na;
        t === 0 && (t = kn, kn <<= 1, (kn & 261888) === 0 && (kn = 256)), Ul = t;
      }
      return Ul;
    }
    function id(t) {
      return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : eu("" + t);
    }
    function cd(t, e) {
      var l = e.ownerDocument.createElement("input");
      return l.name = e.name, l.value = e.value, t.id && l.setAttribute("form", t.id), e.parentNode.insertBefore(l, e), t = new FormData(t), l.parentNode.removeChild(l), t;
    }
    function _h(t, e, l, a, n) {
      if (e === "submit" && l && l.stateNode === n) {
        var u = id((n[le] || null).action), i = a.submitter;
        i && (e = (e = i[le] || null) ? id(e.formAction) : i.getAttribute("formAction"), e !== null && (u = e, i = null));
        var o = new uu("action", "action", null, a, n);
        t.push({
          event: o,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (a.defaultPrevented) {
                  if (Ul !== 0) {
                    var m = i ? cd(n, i) : new FormData(n);
                    Ac(l, {
                      pending: true,
                      data: m,
                      method: n.method,
                      action: u
                    }, null, m);
                  }
                } else typeof u == "function" && (o.preventDefault(), m = i ? cd(n, i) : new FormData(n), Ac(l, {
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
      var cs = Xi[is], vh = cs.toLowerCase(), ph = cs[0].toUpperCase() + cs.slice(1);
      Re(vh, "on" + ph);
    }
    Re(Bf, "onAnimationEnd"), Re(qf, "onAnimationIteration"), Re(Yf, "onAnimationStart"), Re("dblclick", "onDoubleClick"), Re("focusin", "onFocus"), Re("focusout", "onBlur"), Re(H0, "onTransitionRun"), Re(B0, "onTransitionStart"), Re(q0, "onTransitionCancel"), Re(Lf, "onTransitionEnd"), fa("onMouseEnter", [
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
    var wn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xh = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(wn));
    function sd(t, e) {
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
            } catch (T) {
              su(T);
            }
            n.currentTarget = null, u = m;
          }
          else for (i = 0; i < a.length; i++) {
            if (o = a[i], m = o.instance, N = o.currentTarget, o = o.listener, m !== u && n.isPropagationStopped()) break t;
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
    function at(t, e) {
      var l = e[pi];
      l === void 0 && (l = e[pi] = /* @__PURE__ */ new Set());
      var a = t + "__bubble";
      l.has(a) || (fd(e, t, 2, false), l.add(a));
    }
    function ss(t, e, l) {
      var a = 0;
      e && (a |= 4), fd(l, t, a, e);
    }
    var ku = "_reactListening" + Math.random().toString(36).slice(2);
    function fs(t) {
      if (!t[ku]) {
        t[ku] = true, tf.forEach(function(l) {
          l !== "selectionchange" && (xh.has(l) || ss(l, false, t), ss(l, true, t));
        });
        var e = t.nodeType === 9 ? t : t.ownerDocument;
        e === null || e[ku] || (e[ku] = true, ss("selectionchange", false, e));
      }
    }
    function fd(t, e, l, a) {
      switch (qd(e)) {
        case 2:
          var n = Wh;
          break;
        case 8:
          n = $h;
          break;
        default:
          n = js;
      }
      l = n.bind(null, e, l, t), n = void 0, !Mi || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (n = true), a ? n !== void 0 ? t.addEventListener(e, l, {
        capture: true,
        passive: n
      }) : t.addEventListener(e, l, true) : n !== void 0 ? t.addEventListener(e, l, {
        passive: n
      }) : t.addEventListener(e, l, false);
    }
    function rs(t, e, l, a, n) {
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
            if (i = ia(o), i === null) return;
            if (m = i.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = i;
              continue t;
            }
            o = o.parentNode;
          }
        }
        a = a.return;
      }
      mf(function() {
        var N = u, T = Ei(l), D = [];
        t: {
          var j = Gf.get(t);
          if (j !== void 0) {
            var z = uu, L = t;
            switch (t) {
              case "keypress":
                if (au(l) === 0) break t;
              case "keydown":
              case "keyup":
                z = h0;
                break;
              case "focusin":
                L = "focus", z = Di;
                break;
              case "focusout":
                L = "blur", z = Di;
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
                z = gf;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                z = l0;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                z = b0;
                break;
              case Bf:
              case qf:
              case Yf:
                z = u0;
                break;
              case Lf:
                z = v0;
                break;
              case "scroll":
              case "scrollend":
                z = t0;
                break;
              case "wheel":
                z = x0;
                break;
              case "copy":
              case "cut":
              case "paste":
                z = c0;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                z = _f;
                break;
              case "toggle":
              case "beforetoggle":
                z = N0;
            }
            var Q = (e & 4) !== 0, St = !Q && (t === "scroll" || t === "scrollend"), b = Q ? j !== null ? j + "Capture" : null : j;
            Q = [];
            for (var h = N, S; h !== null; ) {
              var U = h;
              if (S = U.stateNode, U = U.tag, U !== 5 && U !== 26 && U !== 27 || S === null || b === null || (U = Fa(h, b), U != null && Q.push(On(h, U, S))), St) break;
              h = h.return;
            }
            0 < Q.length && (j = new z(j, L, null, l, T), D.push({
              event: j,
              listeners: Q
            }));
          }
        }
        if ((e & 7) === 0) {
          t: {
            if (j = t === "mouseover" || t === "pointerover", z = t === "mouseout" || t === "pointerout", j && l !== zi && (L = l.relatedTarget || l.fromElement) && (ia(L) || L[ua])) break t;
            if ((z || j) && (j = T.window === T ? T : (j = T.ownerDocument) ? j.defaultView || j.parentWindow : window, z ? (L = l.relatedTarget || l.toElement, z = N, L = L ? ia(L) : null, L !== null && (St = A(L), Q = L.tag, L !== St || Q !== 5 && Q !== 27 && Q !== 6) && (L = null)) : (z = null, L = N), z !== L)) {
              if (Q = gf, U = "onMouseLeave", b = "onMouseEnter", h = "mouse", (t === "pointerout" || t === "pointerover") && (Q = _f, U = "onPointerLeave", b = "onPointerEnter", h = "pointer"), St = z == null ? j : $a(z), S = L == null ? j : $a(L), j = new Q(U, h + "leave", z, l, T), j.target = St, j.relatedTarget = S, U = null, ia(T) === N && (Q = new Q(b, h + "enter", L, l, T), Q.target = S, Q.relatedTarget = St, U = Q), St = U, z && L) e: {
                for (Q = Sh, b = z, h = L, S = 0, U = b; U; U = Q(U)) S++;
                U = 0;
                for (var X = h; X; X = Q(X)) U++;
                for (; 0 < S - U; ) b = Q(b), S--;
                for (; 0 < U - S; ) h = Q(h), U--;
                for (; S--; ) {
                  if (b === h || h !== null && b === h.alternate) {
                    Q = b;
                    break e;
                  }
                  b = Q(b), h = Q(h);
                }
                Q = null;
              }
              else Q = null;
              z !== null && rd(D, j, z, Q, false), L !== null && St !== null && rd(D, St, L, Q, true);
            }
          }
          t: {
            if (j = N ? $a(N) : window, z = j.nodeName && j.nodeName.toLowerCase(), z === "select" || z === "input" && j.type === "file") var ot = zf;
            else if (jf(j)) if (Ef) ot = D0;
            else {
              ot = O0;
              var G = w0;
            }
            else z = j.nodeName, !z || z.toLowerCase() !== "input" || j.type !== "checkbox" && j.type !== "radio" ? N && Ai(N.elementType) && (ot = zf) : ot = U0;
            if (ot && (ot = ot(t, N))) {
              Af(D, ot, l, T);
              break t;
            }
            G && G(t, j, N), t === "focusout" && N && j.type === "number" && N.memoizedProps.value != null && ji(j, "number", j.value);
          }
          switch (G = N ? $a(N) : window, t) {
            case "focusin":
              (jf(G) || G.contentEditable === "true") && (ya = G, Yi = N, un = null);
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
              Li = false, Rf(D, l, T);
              break;
            case "selectionchange":
              if (R0) break;
            case "keydown":
            case "keyup":
              Rf(D, l, T);
          }
          var P;
          if (Ri) t: {
            switch (t) {
              case "compositionstart":
                var it = "onCompositionStart";
                break t;
              case "compositionend":
                it = "onCompositionEnd";
                break t;
              case "compositionupdate":
                it = "onCompositionUpdate";
                break t;
            }
            it = void 0;
          }
          else ha ? Sf(t, l) && (it = "onCompositionEnd") : t === "keydown" && l.keyCode === 229 && (it = "onCompositionStart");
          it && (vf && l.locale !== "ko" && (ha || it !== "onCompositionStart" ? it === "onCompositionEnd" && ha && (P = hf()) : (gl = T, wi = "value" in gl ? gl.value : gl.textContent, ha = true)), G = Wu(N, it), 0 < G.length && (it = new bf(it, t, null, l, T), D.push({
            event: it,
            listeners: G
          }), P ? it.data = P : (P = Nf(l), P !== null && (it.data = P)))), (P = A0 ? z0(t, l) : E0(t, l)) && (it = Wu(N, "onBeforeInput"), 0 < it.length && (G = new bf("onBeforeInput", "beforeinput", null, l, T), D.push({
            event: G,
            listeners: it
          }), G.data = P)), _h(D, t, N, l, T);
        }
        sd(D, e);
      });
    }
    function On(t, e, l) {
      return {
        instance: t,
        listener: e,
        currentTarget: l
      };
    }
    function Wu(t, e) {
      for (var l = e + "Capture", a = []; t !== null; ) {
        var n = t, u = n.stateNode;
        if (n = n.tag, n !== 5 && n !== 26 && n !== 27 || u === null || (n = Fa(t, l), n != null && a.unshift(On(t, n, u)), n = Fa(t, e), n != null && a.push(On(t, n, u))), t.tag === 3) return a;
        t = t.return;
      }
      return [];
    }
    function Sh(t) {
      if (t === null) return null;
      do
        t = t.return;
      while (t && t.tag !== 5 && t.tag !== 27);
      return t || null;
    }
    function rd(t, e, l, a, n) {
      for (var u = e._reactName, i = []; l !== null && l !== a; ) {
        var o = l, m = o.alternate, N = o.stateNode;
        if (o = o.tag, m !== null && m === a) break;
        o !== 5 && o !== 26 && o !== 27 || N === null || (m = N, n ? (N = Fa(l, u), N != null && i.unshift(On(l, N, m))) : n || (N = Fa(l, u), N != null && i.push(On(l, N, m)))), l = l.return;
      }
      i.length !== 0 && t.push({
        event: e,
        listeners: i
      });
    }
    var Nh = /\r\n?/g, jh = /\u0000|\uFFFD/g;
    function od(t) {
      return (typeof t == "string" ? t : "" + t).replace(Nh, `
`).replace(jh, "");
    }
    function dd(t, e) {
      return e = od(e), od(t) === e;
    }
    function xt(t, e, l, a, n, u) {
      switch (l) {
        case "children":
          typeof a == "string" ? e === "body" || e === "textarea" && a === "" || oa(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && oa(t, "" + a);
          break;
        case "className":
          Pn(t, "class", a);
          break;
        case "tabIndex":
          Pn(t, "tabindex", a);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Pn(t, l, a);
          break;
        case "style":
          of(t, a, u);
          break;
        case "data":
          if (e !== "object") {
            Pn(t, "data", a);
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
          a = eu("" + a), t.setAttribute(l, a);
          break;
        case "action":
        case "formAction":
          if (typeof a == "function") {
            t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof u == "function" && (l === "formAction" ? (e !== "input" && xt(t, e, "name", n.name, n, null), xt(t, e, "formEncType", n.formEncType, n, null), xt(t, e, "formMethod", n.formMethod, n, null), xt(t, e, "formTarget", n.formTarget, n, null)) : (xt(t, e, "encType", n.encType, n, null), xt(t, e, "method", n.method, n, null), xt(t, e, "target", n.target, n, null)));
          if (a == null || typeof a == "symbol" || typeof a == "boolean") {
            t.removeAttribute(l);
            break;
          }
          a = eu("" + a), t.setAttribute(l, a);
          break;
        case "onClick":
          a != null && (t.onclick = ke);
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
          l = eu("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
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
          at("beforetoggle", t), at("toggle", t), In(t, "popover", a);
          break;
        case "xlinkActuate":
          Je(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
          break;
        case "xlinkArcrole":
          Je(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
          break;
        case "xlinkRole":
          Je(t, "http://www.w3.org/1999/xlink", "xlink:role", a);
          break;
        case "xlinkShow":
          Je(t, "http://www.w3.org/1999/xlink", "xlink:show", a);
          break;
        case "xlinkTitle":
          Je(t, "http://www.w3.org/1999/xlink", "xlink:title", a);
          break;
        case "xlinkType":
          Je(t, "http://www.w3.org/1999/xlink", "xlink:type", a);
          break;
        case "xmlBase":
          Je(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
          break;
        case "xmlLang":
          Je(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
          break;
        case "xmlSpace":
          Je(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
          break;
        case "is":
          In(t, "is", a);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Im.get(l) || l, In(t, l, a));
      }
    }
    function os(t, e, l, a, n, u) {
      switch (l) {
        case "style":
          of(t, a, u);
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
          typeof a == "string" ? oa(t, a) : (typeof a == "number" || typeof a == "bigint") && oa(t, "" + a);
          break;
        case "onScroll":
          a != null && at("scroll", t);
          break;
        case "onScrollEnd":
          a != null && at("scrollend", t);
          break;
        case "onClick":
          a != null && (t.onclick = ke);
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
          if (!ef.hasOwnProperty(l)) t: {
            if (l[0] === "o" && l[1] === "n" && (n = l.endsWith("Capture"), e = l.slice(2, n ? l.length - 7 : void 0), u = t[le] || null, u = u != null ? u[l] : null, typeof u == "function" && t.removeEventListener(e, u, n), typeof a == "function")) {
              typeof u != "function" && u !== null && (l in t ? t[l] = null : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, n);
              break t;
            }
            l in t ? t[l] = a : a === true ? t.setAttribute(l, "") : In(t, l, a);
          }
      }
    }
    function Wt(t, e, l) {
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
                xt(t, e, u, i, l, null);
            }
          }
          n && xt(t, e, "srcSet", l.srcSet, l, null), a && xt(t, e, "src", l.src, l, null);
          return;
        case "input":
          at("invalid", t);
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
                if (T != null) throw Error(r(137, e));
                break;
              default:
                xt(t, e, a, T, l, null);
            }
          }
          cf(t, u, o, m, N, i, n, false);
          return;
        case "select":
          at("invalid", t), a = i = u = null;
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
              xt(t, e, n, o, l, null);
          }
          e = u, l = i, t.multiple = !!a, e != null ? ra(t, !!a, e, false) : l != null && ra(t, !!a, l, true);
          return;
        case "textarea":
          at("invalid", t), u = n = a = null;
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
              xt(t, e, i, o, l, null);
          }
          ff(t, a, n, u);
          return;
        case "option":
          for (m in l) l.hasOwnProperty(m) && (a = l[m], a != null) && (m === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : xt(t, e, m, a, l, null));
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
          for (a = 0; a < wn.length; a++) at(wn[a], t);
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
          for (N in l) if (l.hasOwnProperty(N) && (a = l[N], a != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(r(137, e));
            default:
              xt(t, e, N, a, l, null);
          }
          return;
        default:
          if (Ai(e)) {
            for (T in l) l.hasOwnProperty(T) && (a = l[T], a !== void 0 && os(t, e, T, a, l, void 0));
            return;
          }
      }
      for (o in l) l.hasOwnProperty(o) && (a = l[o], a != null && xt(t, e, o, a, l, null));
    }
    function Ah(t, e, l, a) {
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
          var n = null, u = null, i = null, o = null, m = null, N = null, T = null;
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
                a.hasOwnProperty(z) || xt(t, e, z, null, a, D);
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
                if (z != null) throw Error(r(137, e));
                break;
              default:
                z !== D && xt(t, e, j, z, a, D);
            }
          }
          Ni(t, i, o, m, N, T, u, n);
          return;
        case "select":
          z = i = o = j = null;
          for (u in l) if (m = l[u], l.hasOwnProperty(u) && m != null) switch (u) {
            case "value":
              break;
            case "multiple":
              z = m;
            default:
              a.hasOwnProperty(u) || xt(t, e, u, null, a, m);
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
              u !== m && xt(t, e, n, u, a, m);
          }
          e = o, l = i, a = z, j != null ? ra(t, !!l, j, false) : !!a != !!l && (e != null ? ra(t, !!l, e, true) : ra(t, !!l, l ? [] : "", false));
          return;
        case "textarea":
          z = j = null;
          for (o in l) if (n = l[o], l.hasOwnProperty(o) && n != null && !a.hasOwnProperty(o)) switch (o) {
            case "value":
              break;
            case "children":
              break;
            default:
              xt(t, e, o, null, a, n);
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
              n !== u && xt(t, e, i, n, a, u);
          }
          sf(t, j, z);
          return;
        case "option":
          for (var L in l) j = l[L], l.hasOwnProperty(L) && j != null && !a.hasOwnProperty(L) && (L === "selected" ? t.selected = false : xt(t, e, L, null, a, j));
          for (m in a) j = a[m], z = l[m], a.hasOwnProperty(m) && j !== z && (j != null || z != null) && (m === "selected" ? t.selected = j && typeof j != "function" && typeof j != "symbol" : xt(t, e, m, j, a, z));
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
          for (var Q in l) j = l[Q], l.hasOwnProperty(Q) && j != null && !a.hasOwnProperty(Q) && xt(t, e, Q, null, a, j);
          for (N in a) if (j = a[N], z = l[N], a.hasOwnProperty(N) && j !== z && (j != null || z != null)) switch (N) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (j != null) throw Error(r(137, e));
              break;
            default:
              xt(t, e, N, j, a, z);
          }
          return;
        default:
          if (Ai(e)) {
            for (var St in l) j = l[St], l.hasOwnProperty(St) && j !== void 0 && !a.hasOwnProperty(St) && os(t, e, St, void 0, a, j);
            for (T in a) j = a[T], z = l[T], !a.hasOwnProperty(T) || j === z || j === void 0 && z === void 0 || os(t, e, T, j, a, z);
            return;
          }
      }
      for (var b in l) j = l[b], l.hasOwnProperty(b) && j != null && !a.hasOwnProperty(b) && xt(t, e, b, null, a, j);
      for (D in a) j = a[D], z = l[D], !a.hasOwnProperty(D) || j === z || j == null && z == null || xt(t, e, D, j, a, z);
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
    function zh() {
      if (typeof performance.getEntriesByType == "function") {
        for (var t = 0, e = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++) {
          var n = l[a], u = n.transferSize, i = n.initiatorType, o = n.duration;
          if (u && o && md(i)) {
            for (i = 0, o = n.responseEnd, a += 1; a < l.length; a++) {
              var m = l[a], N = m.startTime;
              if (N > o) break;
              var T = m.transferSize, D = m.initiatorType;
              T && md(D) && (m = m.responseEnd, i += T * (m < o ? 1 : (o - N) / (m - N)));
            }
            if (--a, e += 8 * (u + i) / (n.duration / 1e3), t++, 10 < t) break;
          }
        }
        if (0 < t) return e / t / 1e6;
      }
      return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
    }
    var ds = null, ms = null;
    function $u(t) {
      return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function hd(t) {
      switch (t) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function yd(t, e) {
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
    function hs(t, e) {
      return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
    }
    var ys = null;
    function Eh() {
      var t = window.event;
      return t && t.type === "popstate" ? t === ys ? false : (ys = t, true) : (ys = null, false);
    }
    var gd = typeof setTimeout == "function" ? setTimeout : void 0, Th = typeof clearTimeout == "function" ? clearTimeout : void 0, bd = typeof Promise == "function" ? Promise : void 0, Mh = typeof queueMicrotask == "function" ? queueMicrotask : typeof bd < "u" ? function(t) {
      return bd.resolve(null).then(t).catch(wh);
    } : gd;
    function wh(t) {
      setTimeout(function() {
        throw t;
      });
    }
    function Dl(t) {
      return t === "head";
    }
    function _d(t, e) {
      var l = e, a = 0;
      do {
        var n = l.nextSibling;
        if (t.removeChild(l), n && n.nodeType === 8) if (l = n.data, l === "/$" || l === "/&") {
          if (a === 0) {
            t.removeChild(n), Xa(e);
            return;
          }
          a--;
        } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
        else if (l === "html") Un(t.ownerDocument.documentElement);
        else if (l === "head") {
          l = t.ownerDocument.head, Un(l);
          for (var u = l.firstChild; u; ) {
            var i = u.nextSibling, o = u.nodeName;
            u[Wa] || o === "SCRIPT" || o === "STYLE" || o === "LINK" && u.rel.toLowerCase() === "stylesheet" || l.removeChild(u), u = i;
          }
        } else l === "body" && Un(t.ownerDocument.body);
        l = n;
      } while (l);
      Xa(e);
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
    function gs(t) {
      var e = t.firstChild;
      for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
        var l = e;
        switch (e = e.nextSibling, l.nodeName) {
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
        t.removeChild(l);
      }
    }
    function Oh(t, e, l, a) {
      for (; t.nodeType === 1; ) {
        var n = l;
        if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
          if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
        } else if (a) {
          if (!t[Wa]) switch (e) {
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
        if (t = Ue(t.nextSibling), t === null) break;
      }
      return null;
    }
    function Uh(t, e, l) {
      if (e === "") return null;
      for (; t.nodeType !== 3; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !l || (t = Ue(t.nextSibling), t === null)) return null;
      return t;
    }
    function pd(t, e) {
      for (; t.nodeType !== 8; ) if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = Ue(t.nextSibling), t === null)) return null;
      return t;
    }
    function bs(t) {
      return t.data === "$?" || t.data === "$~";
    }
    function _s(t) {
      return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
    }
    function Dh(t, e) {
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
    function Ue(t) {
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
    var vs = null;
    function xd(t) {
      t = t.nextSibling;
      for (var e = 0; t; ) {
        if (t.nodeType === 8) {
          var l = t.data;
          if (l === "/$" || l === "/&") {
            if (e === 0) return Ue(t.nextSibling);
            e--;
          } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || e++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Sd(t) {
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
    function Nd(t, e, l) {
      switch (e = $u(l), t) {
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
    function Un(t) {
      for (var e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
      xi(t);
    }
    var De = /* @__PURE__ */ new Map(), jd = /* @__PURE__ */ new Set();
    function Fu(t) {
      return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument;
    }
    var rl = B.d;
    B.d = {
      f: Ch,
      r: Rh,
      D: Hh,
      C: Bh,
      L: qh,
      m: Yh,
      X: Gh,
      S: Lh,
      M: Xh
    };
    function Ch() {
      var t = rl.f(), e = Xu();
      return t || e;
    }
    function Rh(t) {
      var e = ca(t);
      e !== null && e.tag === 5 && e.type === "form" ? Lr(e) : rl.r(t);
    }
    var Ya = typeof document > "u" ? null : document;
    function Ad(t, e, l) {
      var a = Ya;
      if (a && typeof e == "string" && e) {
        var n = Ae(e);
        n = 'link[rel="' + t + '"][href="' + n + '"]', typeof l == "string" && (n += '[crossorigin="' + l + '"]'), jd.has(n) || (jd.add(n), t = {
          rel: t,
          crossOrigin: l,
          href: e
        }, a.querySelector(n) === null && (e = a.createElement("link"), Wt(e, "link", t), Xt(e), a.head.appendChild(e)));
      }
    }
    function Hh(t) {
      rl.D(t), Ad("dns-prefetch", t, null);
    }
    function Bh(t, e) {
      rl.C(t, e), Ad("preconnect", t, e);
    }
    function qh(t, e, l) {
      rl.L(t, e, l);
      var a = Ya;
      if (a && t && e) {
        var n = 'link[rel="preload"][as="' + Ae(e) + '"]';
        e === "image" && l && l.imageSrcSet ? (n += '[imagesrcset="' + Ae(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (n += '[imagesizes="' + Ae(l.imageSizes) + '"]')) : n += '[href="' + Ae(t) + '"]';
        var u = n;
        switch (e) {
          case "style":
            u = La(t);
            break;
          case "script":
            u = Ga(t);
        }
        De.has(u) || (t = R({
          rel: "preload",
          href: e === "image" && l && l.imageSrcSet ? void 0 : t,
          as: e
        }, l), De.set(u, t), a.querySelector(n) !== null || e === "style" && a.querySelector(Dn(u)) || e === "script" && a.querySelector(Cn(u)) || (e = a.createElement("link"), Wt(e, "link", t), Xt(e), a.head.appendChild(e)));
      }
    }
    function Yh(t, e) {
      rl.m(t, e);
      var l = Ya;
      if (l && t) {
        var a = e && typeof e.as == "string" ? e.as : "script", n = 'link[rel="modulepreload"][as="' + Ae(a) + '"][href="' + Ae(t) + '"]', u = n;
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            u = Ga(t);
        }
        if (!De.has(u) && (t = R({
          rel: "modulepreload",
          href: t
        }, e), De.set(u, t), l.querySelector(n) === null)) {
          switch (a) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (l.querySelector(Cn(u))) return;
          }
          a = l.createElement("link"), Wt(a, "link", t), Xt(a), l.head.appendChild(a);
        }
      }
    }
    function Lh(t, e, l) {
      rl.S(t, e, l);
      var a = Ya;
      if (a && t) {
        var n = sa(a).hoistableStyles, u = La(t);
        e = e || "default";
        var i = n.get(u);
        if (!i) {
          var o = {
            loading: 0,
            preload: null
          };
          if (i = a.querySelector(Dn(u))) o.loading = 5;
          else {
            t = R({
              rel: "stylesheet",
              href: t,
              "data-precedence": e
            }, l), (l = De.get(u)) && ps(t, l);
            var m = i = a.createElement("link");
            Xt(m), Wt(m, "link", t), m._p = new Promise(function(N, T) {
              m.onload = N, m.onerror = T;
            }), m.addEventListener("load", function() {
              o.loading |= 1;
            }), m.addEventListener("error", function() {
              o.loading |= 2;
            }), o.loading |= 4, Iu(i, e, a);
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
    function Gh(t, e) {
      rl.X(t, e);
      var l = Ya;
      if (l && t) {
        var a = sa(l).hoistableScripts, n = Ga(t), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (t = R({
          src: t,
          async: true
        }, e), (e = De.get(n)) && xs(t, e), u = l.createElement("script"), Xt(u), Wt(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function Xh(t, e) {
      rl.M(t, e);
      var l = Ya;
      if (l && t) {
        var a = sa(l).hoistableScripts, n = Ga(t), u = a.get(n);
        u || (u = l.querySelector(Cn(n)), u || (t = R({
          src: t,
          async: true,
          type: "module"
        }, e), (e = De.get(n)) && xs(t, e), u = l.createElement("script"), Xt(u), Wt(u, "link", t), l.head.appendChild(u)), u = {
          type: "script",
          instance: u,
          count: 1,
          state: null
        }, a.set(n, u));
      }
    }
    function zd(t, e, l, a) {
      var n = (n = K.current) ? Fu(n) : null;
      if (!n) throw Error(r(446));
      switch (t) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof l.precedence == "string" && typeof l.href == "string" ? (e = La(l.href), l = sa(n).hoistableStyles, a = l.get(e), a || (a = {
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
            t = La(l.href);
            var u = sa(n).hoistableStyles, i = u.get(t);
            if (i || (n = n.ownerDocument || n, i = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, u.set(t, i), (u = n.querySelector(Dn(t))) && !u._p && (i.instance = u, i.state.loading = 5), De.has(t) || (l = {
              rel: "preload",
              as: "style",
              href: l.href,
              crossOrigin: l.crossOrigin,
              integrity: l.integrity,
              media: l.media,
              hrefLang: l.hrefLang,
              referrerPolicy: l.referrerPolicy
            }, De.set(t, l), u || Qh(n, t, l, i.state))), e && a === null) throw Error(r(528, ""));
            return i;
          }
          if (e && a !== null) throw Error(r(529, ""));
          return null;
        case "script":
          return e = l.async, l = l.src, typeof l == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = Ga(l), l = sa(n).hoistableScripts, a = l.get(e), a || (a = {
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
    function La(t) {
      return 'href="' + Ae(t) + '"';
    }
    function Dn(t) {
      return 'link[rel="stylesheet"][' + t + "]";
    }
    function Ed(t) {
      return R({}, t, {
        "data-precedence": t.precedence,
        precedence: null
      });
    }
    function Qh(t, e, l, a) {
      t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function() {
        return a.loading |= 1;
      }), e.addEventListener("error", function() {
        return a.loading |= 2;
      }), Wt(e, "link", l), Xt(e), t.head.appendChild(e));
    }
    function Ga(t) {
      return '[src="' + Ae(t) + '"]';
    }
    function Cn(t) {
      return "script[async]" + t;
    }
    function Td(t, e, l) {
      if (e.count++, e.instance === null) switch (e.type) {
        case "style":
          var a = t.querySelector('style[data-href~="' + Ae(l.href) + '"]');
          if (a) return e.instance = a, Xt(a), a;
          var n = R({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement("style"), Xt(a), Wt(a, "style", n), Iu(a, l.precedence, t), e.instance = a;
        case "stylesheet":
          n = La(l.href);
          var u = t.querySelector(Dn(n));
          if (u) return e.state.loading |= 4, e.instance = u, Xt(u), u;
          a = Ed(l), (n = De.get(n)) && ps(a, n), u = (t.ownerDocument || t).createElement("link"), Xt(u);
          var i = u;
          return i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), Wt(u, "link", a), e.state.loading |= 4, Iu(u, l.precedence, t), e.instance = u;
        case "script":
          return u = Ga(l.src), (n = t.querySelector(Cn(u))) ? (e.instance = n, Xt(n), n) : (a = l, (n = De.get(u)) && (a = R({}, l), xs(a, n)), t = t.ownerDocument || t, n = t.createElement("script"), Xt(n), Wt(n, "link", a), t.head.appendChild(n), e.instance = n);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
      else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Iu(a, l.precedence, t));
      return e.instance;
    }
    function Iu(t, e, l) {
      for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), n = a.length ? a[a.length - 1] : null, u = n, i = 0; i < a.length; i++) {
        var o = a[i];
        if (o.dataset.precedence === e) u = o;
        else if (u !== n) break;
      }
      u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = l.nodeType === 9 ? l.head : l, e.insertBefore(t, e.firstChild));
    }
    function ps(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
    }
    function xs(t, e) {
      t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
    }
    var Pu = null;
    function Md(t, e, l) {
      if (Pu === null) {
        var a = /* @__PURE__ */ new Map(), n = Pu = /* @__PURE__ */ new Map();
        n.set(l, a);
      } else n = Pu, a = n.get(l), a || (a = /* @__PURE__ */ new Map(), n.set(l, a));
      if (a.has(t)) return a;
      for (a.set(t, null), l = l.getElementsByTagName(t), n = 0; n < l.length; n++) {
        var u = l[n];
        if (!(u[Wa] || u[Vt] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
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
    function wd(t, e, l) {
      t = t.ownerDocument || t, t.head.insertBefore(l, e === "title" ? t.querySelector("head > title") : null);
    }
    function Zh(t, e, l) {
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
    function Vh(t, e, l, a) {
      if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== false) && (l.state.loading & 4) === 0) {
        if (l.instance === null) {
          var n = La(a.href), u = e.querySelector(Dn(n));
          if (u) {
            e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ti.bind(t), e.then(t, t)), l.state.loading |= 4, l.instance = u, Xt(u);
            return;
          }
          u = e.ownerDocument || e, a = Ed(a), (n = De.get(n)) && ps(a, n), u = u.createElement("link"), Xt(u);
          var i = u;
          i._p = new Promise(function(o, m) {
            i.onload = o, i.onerror = m;
          }), Wt(u, "link", a), l.instance = u;
        }
        t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(l, e), (e = l.state.preload) && (l.state.loading & 3) === 0 && (t.count++, l = ti.bind(t), e.addEventListener("load", l), e.addEventListener("error", l));
      }
    }
    var Ss = 0;
    function Kh(t, e) {
      return t.stylesheets && t.count === 0 && li(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(l) {
        var a = setTimeout(function() {
          if (t.stylesheets && li(t, t.stylesheets), t.unsuspend) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, 6e4 + e);
        0 < t.imgBytes && Ss === 0 && (Ss = 62500 * zh());
        var n = setTimeout(function() {
          if (t.waitingForImages = false, t.count === 0 && (t.stylesheets && li(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        }, (t.imgBytes > Ss ? 50 : 800) + e);
        return t.unsuspend = l, function() {
          t.unsuspend = null, clearTimeout(a), clearTimeout(n);
        };
      } : null;
    }
    function ti() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) li(this, this.stylesheets);
        else if (this.unsuspend) {
          var t = this.unsuspend;
          this.unsuspend = null, t();
        }
      }
    }
    var ei = null;
    function li(t, e) {
      t.stylesheets = null, t.unsuspend !== null && (t.count++, ei = /* @__PURE__ */ new Map(), e.forEach(Jh, t), ei = null, ti.call(t));
    }
    function Jh(t, e) {
      if (!(e.state.loading & 4)) {
        var l = ei.get(t);
        if (l) var a = l.get(null);
        else {
          l = /* @__PURE__ */ new Map(), ei.set(t, l);
          for (var n = t.querySelectorAll("link[data-precedence],style[data-precedence]"), u = 0; u < n.length; u++) {
            var i = n[u];
            (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") && (l.set(i.dataset.precedence, i), a = i);
          }
          a && l.set(null, a);
        }
        n = e.instance, i = n.getAttribute("data-precedence"), u = l.get(i) || a, u === a && l.set(null, n), l.set(i, n), this.count++, a = ti.bind(this), n.addEventListener("load", a), n.addEventListener("error", a), u ? u.parentNode.insertBefore(n, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(n, t.firstChild)), e.state.loading |= 4;
      }
    }
    var Rn = {
      $$typeof: et,
      Provider: null,
      Consumer: null,
      _currentValue: V,
      _currentValue2: V,
      _threadCount: 0
    };
    function kh(t, e, l, a, n, u, i, o, m) {
      this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = bi(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = bi(0), this.hiddenUpdates = bi(null), this.identifierPrefix = a, this.onUncaughtError = n, this.onCaughtError = u, this.onRecoverableError = i, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function Ud(t, e, l, a, n, u, i, o, m, N, T, D) {
      return t = new kh(t, e, l, i, m, N, T, D, o), e = 1, u === true && (e |= 24), u = he(3, null, null, e), t.current = u, u.stateNode = t, e = ec(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
        element: a,
        isDehydrated: l,
        cache: e
      }, uc(u), t;
    }
    function Dd(t) {
      return t ? (t = _a, t) : _a;
    }
    function Cd(t, e, l, a, n, u) {
      n = Dd(n), a.context === null ? a.context = n : a.pendingContext = n, a = Sl(e), a.payload = {
        element: l
      }, u = u === void 0 ? null : u, u !== null && (a.callback = u), l = Nl(t, a, e), l !== null && (se(l, t, e), mn(l, t, e));
    }
    function Rd(t, e) {
      if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
        var l = t.retryLane;
        t.retryLane = l !== 0 && l < e ? l : e;
      }
    }
    function Ns(t, e) {
      Rd(t, e), (t = t.alternate) && Rd(t, e);
    }
    function Hd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = Zl(t, 67108864);
        e !== null && se(e, t, 67108864), Ns(t, 67108864);
      }
    }
    function Bd(t) {
      if (t.tag === 13 || t.tag === 31) {
        var e = ve();
        e = _i(e);
        var l = Zl(t, e);
        l !== null && se(l, t, e), Ns(t, e);
      }
    }
    var ai = true;
    function Wh(t, e, l, a) {
      var n = w.T;
      w.T = null;
      var u = B.p;
      try {
        B.p = 2, js(t, e, l, a);
      } finally {
        B.p = u, w.T = n;
      }
    }
    function $h(t, e, l, a) {
      var n = w.T;
      w.T = null;
      var u = B.p;
      try {
        B.p = 8, js(t, e, l, a);
      } finally {
        B.p = u, w.T = n;
      }
    }
    function js(t, e, l, a) {
      if (ai) {
        var n = As(a);
        if (n === null) rs(t, e, a, ni, l), Yd(t, a);
        else if (Ih(n, t, e, l, a)) a.stopPropagation();
        else if (Yd(t, a), e & 4 && -1 < Fh.indexOf(t)) {
          for (; n !== null; ) {
            var u = ca(n);
            if (u !== null) switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var i = Yl(u.pendingLanes);
                  if (i !== 0) {
                    var o = u;
                    for (o.pendingLanes |= 2, o.entangledLanes |= 2; i; ) {
                      var m = 1 << 31 - de(i);
                      o.entanglements[1] |= m, i &= ~m;
                    }
                    Xe(u), (mt & 6) === 0 && (Lu = re() + 500, Mn(0));
                  }
                }
                break;
              case 31:
              case 13:
                o = Zl(u, 2), o !== null && se(o, u, 2), Xu(), Ns(u, 2);
            }
            if (u = As(a), u === null && rs(t, e, a, ni, l), u === n) break;
            n = u;
          }
          n !== null && a.stopPropagation();
        } else rs(t, e, a, null, l);
      }
    }
    function As(t) {
      return t = Ei(t), zs(t);
    }
    var ni = null;
    function zs(t) {
      if (ni = null, t = ia(t), t !== null) {
        var e = A(t);
        if (e === null) t = null;
        else {
          var l = e.tag;
          if (l === 13) {
            if (t = x(e), t !== null) return t;
            t = null;
          } else if (l === 31) {
            if (t = v(e), t !== null) return t;
            t = null;
          } else if (l === 3) {
            if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null;
            t = null;
          } else e !== t && (t = null);
        }
      }
      return ni = t, null;
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
          switch (Hm()) {
            case Zs:
              return 2;
            case Vs:
              return 8;
            case Jn:
            case Bm:
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
    var Es = false, Cl = null, Rl = null, Hl = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Bl = [], Fh = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Yd(t, e) {
      switch (t) {
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
          Hn.delete(e.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Bn.delete(e.pointerId);
      }
    }
    function qn(t, e, l, a, n, u) {
      return t === null || t.nativeEvent !== u ? (t = {
        blockedOn: e,
        domEventName: l,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [
          n
        ]
      }, e !== null && (e = ca(e), e !== null && Hd(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, n !== null && e.indexOf(n) === -1 && e.push(n), t);
    }
    function Ih(t, e, l, a, n) {
      switch (e) {
        case "focusin":
          return Cl = qn(Cl, t, e, l, a, n), true;
        case "dragenter":
          return Rl = qn(Rl, t, e, l, a, n), true;
        case "mouseover":
          return Hl = qn(Hl, t, e, l, a, n), true;
        case "pointerover":
          var u = n.pointerId;
          return Hn.set(u, qn(Hn.get(u) || null, t, e, l, a, n)), true;
        case "gotpointercapture":
          return u = n.pointerId, Bn.set(u, qn(Bn.get(u) || null, t, e, l, a, n)), true;
      }
      return false;
    }
    function Ld(t) {
      var e = ia(t.target);
      if (e !== null) {
        var l = A(e);
        if (l !== null) {
          if (e = l.tag, e === 13) {
            if (e = x(l), e !== null) {
              t.blockedOn = e, Is(t.priority, function() {
                Bd(l);
              });
              return;
            }
          } else if (e === 31) {
            if (e = v(l), e !== null) {
              t.blockedOn = e, Is(t.priority, function() {
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
    function ui(t) {
      if (t.blockedOn !== null) return false;
      for (var e = t.targetContainers; 0 < e.length; ) {
        var l = As(t.nativeEvent);
        if (l === null) {
          l = t.nativeEvent;
          var a = new l.constructor(l.type, l);
          zi = a, l.target.dispatchEvent(a), zi = null;
        } else return e = ca(l), e !== null && Hd(e), t.blockedOn = l, false;
        e.shift();
      }
      return true;
    }
    function Gd(t, e, l) {
      ui(t) && l.delete(e);
    }
    function Ph() {
      Es = false, Cl !== null && ui(Cl) && (Cl = null), Rl !== null && ui(Rl) && (Rl = null), Hl !== null && ui(Hl) && (Hl = null), Hn.forEach(Gd), Bn.forEach(Gd);
    }
    function ii(t, e) {
      t.blockedOn === e && (t.blockedOn = null, Es || (Es = true, c.unstable_scheduleCallback(c.unstable_NormalPriority, Ph)));
    }
    var ci = null;
    function Xd(t) {
      ci !== t && (ci = t, c.unstable_scheduleCallback(c.unstable_NormalPriority, function() {
        ci === t && (ci = null);
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e], a = t[e + 1], n = t[e + 2];
          if (typeof a != "function") {
            if (zs(a || l) === null) continue;
            break;
          }
          var u = ca(l);
          u !== null && (t.splice(e, 3), e -= 3, Ac(u, {
            pending: true,
            data: n,
            method: l.method,
            action: a
          }, a, n));
        }
      }));
    }
    function Xa(t) {
      function e(m) {
        return ii(m, t);
      }
      Cl !== null && ii(Cl, t), Rl !== null && ii(Rl, t), Hl !== null && ii(Hl, t), Hn.forEach(e), Bn.forEach(e);
      for (var l = 0; l < Bl.length; l++) {
        var a = Bl[l];
        a.blockedOn === t && (a.blockedOn = null);
      }
      for (; 0 < Bl.length && (l = Bl[0], l.blockedOn === null); ) Ld(l), l.blockedOn === null && Bl.shift();
      if (l = (t.ownerDocument || t).$$reactFormReplay, l != null) for (a = 0; a < l.length; a += 3) {
        var n = l[a], u = l[a + 1], i = n[le] || null;
        if (typeof u == "function") i || Xd(l);
        else if (i) {
          var o = null;
          if (u && u.hasAttribute("formAction")) {
            if (n = u, i = u[le] || null) o = i.formAction;
            else if (zs(n) !== null) continue;
          } else o = i.action;
          typeof o == "function" ? l[a + 1] = o : (l.splice(a, 3), a -= 3), Xd(l);
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
    function Ts(t) {
      this._internalRoot = t;
    }
    si.prototype.render = Ts.prototype.render = function(t) {
      var e = this._internalRoot;
      if (e === null) throw Error(r(409));
      var l = e.current, a = ve();
      Cd(l, a, t, e, null, null);
    }, si.prototype.unmount = Ts.prototype.unmount = function() {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var e = t.containerInfo;
        Cd(t.current, 2, null, t, null, null), Xu(), e[ua] = null;
      }
    };
    function si(t) {
      this._internalRoot = t;
    }
    si.prototype.unstable_scheduleHydration = function(t) {
      if (t) {
        var e = Fs();
        t = {
          blockedOn: null,
          target: t,
          priority: e
        };
        for (var l = 0; l < Bl.length && e !== 0 && e < Bl[l].priority; l++) ;
        Bl.splice(l, 0, t), l === 0 && Ld(t);
      }
    };
    var Zd = s.version;
    if (Zd !== "19.2.3") throw Error(r(527, Zd, "19.2.3"));
    B.findDOMNode = function(t) {
      var e = t._reactInternals;
      if (e === void 0) throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
      return t = y(e), t = t !== null ? O(t) : null, t = t === null ? null : t.stateNode, t;
    };
    var ty = {
      bundleType: 0,
      version: "19.2.3",
      rendererPackageName: "react-dom",
      currentDispatcherRef: w,
      reconcilerVersion: "19.2.3"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var fi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!fi.isDisabled && fi.supportsFiber) try {
        Ka = fi.inject(ty), oe = fi;
      } catch {
      }
    }
    return Ln.createRoot = function(t, e) {
      if (!_(t)) throw Error(r(299));
      var l = false, a = "", n = $r, u = Fr, i = Ir;
      return e != null && (e.unstable_strictMode === true && (l = true), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError)), e = Ud(t, 1, false, null, null, l, a, null, n, u, i, Qd), t[ua] = e.current, fs(t), new Ts(e);
    }, Ln.hydrateRoot = function(t, e, l) {
      if (!_(t)) throw Error(r(299));
      var a = false, n = "", u = $r, i = Fr, o = Ir, m = null;
      return l != null && (l.unstable_strictMode === true && (a = true), l.identifierPrefix !== void 0 && (n = l.identifierPrefix), l.onUncaughtError !== void 0 && (u = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (o = l.onRecoverableError), l.formState !== void 0 && (m = l.formState)), e = Ud(t, 1, true, e, l ?? null, a, n, m, u, i, o, Qd), e.context = Dd(null), l = e.current, a = ve(), a = _i(a), n = Sl(a), n.callback = null, Nl(l, n, a), l = a, e.current.lanes = l, ka(e, l), Xe(e), t[ua] = e.current, fs(t), new si(e);
    }, Ln.version = "19.2.3", Ln;
  }
  var tm;
  function oy() {
    if (tm) return Os.exports;
    tm = 1;
    function c() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
    }
    return c(), Os.exports = ry(), Os.exports;
  }
  var dy = oy();
  const my = pm(dy), hy = "modulepreload", yy = function(c, s) {
    return new URL(c, s).href;
  }, em = {}, Rs = function(s, d, r) {
    let _ = Promise.resolve();
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
      const x = document.getElementsByTagName("link"), v = document.querySelector("meta[property=csp-nonce]"), p = (v == null ? void 0 : v.nonce) || (v == null ? void 0 : v.getAttribute("nonce"));
      _ = y(d.map((O) => {
        if (O = yy(O, r), O in em) return;
        em[O] = true;
        const R = O.endsWith(".css"), q = R ? '[rel="stylesheet"]' : "";
        if (r) for (let ft = x.length - 1; ft >= 0; ft--) {
          const vt = x[ft];
          if (vt.href === O && (!R || vt.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${O}"]${q}`)) return;
        const tt = document.createElement("link");
        if (tt.rel = R ? "stylesheet" : hy, R || (tt.as = "script"), tt.crossOrigin = "", tt.href = O, p && tt.setAttribute("nonce", p), document.head.appendChild(tt), R) return new Promise((ft, vt) => {
          tt.addEventListener("load", ft), tt.addEventListener("error", () => vt(new Error(`Unable to preload CSS for ${O}`)));
        });
      }));
    }
    function A(x) {
      const v = new Event("vite:preloadError", {
        cancelable: true
      });
      if (v.payload = x, window.dispatchEvent(v), !v.defaultPrevented) throw x;
    }
    return _.then((x) => {
      for (const v of x || []) v.status === "rejected" && A(v.reason);
      return s().catch(A);
    });
  };
  const gy = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), by = (c) => c.replace(/^([A-Z])|[\s-_]+(\w)/g, (s, d, r) => r ? r.toUpperCase() : d.toLowerCase()), lm = (c) => {
    const s = by(c);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }, xm = (...c) => c.filter((s, d, r) => !!s && s.trim() !== "" && r.indexOf(s) === d).join(" ").trim(), _y = (c) => {
    for (const s in c) if (s.startsWith("aria-") || s === "role" || s === "title") return true;
  };
  var vy = {
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
  const py = ht.forwardRef(({ color: c = "currentColor", size: s = 24, strokeWidth: d = 2, absoluteStrokeWidth: r, className: _ = "", children: A, iconNode: x, ...v }, p) => ht.createElement("svg", {
    ref: p,
    ...vy,
    width: s,
    height: s,
    stroke: c,
    strokeWidth: r ? Number(d) * 24 / Number(s) : d,
    className: xm("lucide", _),
    ...!A && !_y(v) && {
      "aria-hidden": "true"
    },
    ...v
  }, [
    ...x.map(([y, O]) => ht.createElement(y, O)),
    ...Array.isArray(A) ? A : [
      A
    ]
  ]));
  const Tt = (c, s) => {
    const d = ht.forwardRef(({ className: r, ..._ }, A) => ht.createElement(py, {
      ref: A,
      iconNode: s,
      className: xm(`lucide-${gy(lm(c))}`, `lucide-${c}`, r),
      ..._
    }));
    return d.displayName = lm(c), d;
  };
  const xy = [
    [
      "path",
      {
        d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
        key: "169zse"
      }
    ]
  ], am = Tt("activity", xy);
  const Sy = [
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
  ], Ny = Tt("book-open", Sy);
  const jy = [
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
  ], Ay = Tt("building-2", jy);
  const zy = [
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
  ], Ey = Tt("bug", zy);
  const Ty = [
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
  ], Sm = Tt("clock", Ty);
  const My = [
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
  ], wy = Tt("download", My);
  const Oy = [
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
  ], nm = Tt("file-text", Oy);
  const Uy = [
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
  ], Dy = Tt("guitar", Uy);
  const Cy = [
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
  ], Nm = Tt("hash", Cy);
  const Ry = [
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
  ], Hy = Tt("image", Ry);
  const By = [
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
  ], um = Tt("key-round", By);
  const qy = [
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
  ], Yy = Tt("log-out", qy);
  const Ly = [
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
  ], Gy = Tt("mic", Ly);
  const Xy = [
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
  ], Qy = Tt("monitor", Xy);
  const Zy = [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ], Vy = Tt("moon", Zy);
  const Ky = [
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
  ], Vn = Tt("music", Ky);
  const Jy = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ], ky = Tt("play", Jy);
  const Wy = [
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
  ], ol = Tt("plus", Wy);
  const $y = [
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
  ], Fy = Tt("sticky-note", $y);
  const Iy = [
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
  ], Py = Tt("sun", Iy);
  const tg = [
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
  ], Ze = Tt("trash-2", tg);
  const eg = [
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
  ], im = Tt("trending-up", eg);
  const lg = [
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
  ], jm = Tt("upload", lg);
  const ag = [
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
  ], ng = Tt("users-round", ag);
  function ug({ file: c, onFileUpload: s, isParsingMetadata: d = false, metadataSummary: r }) {
    const _ = (A) => {
      var _a;
      s(((_a = A.target.files) == null ? void 0 : _a[0]) || null);
    };
    return f.jsxs("div", {
      className: "space-y-3",
      children: [
        f.jsx("label", {
          className: "micro-label",
          children: "Upload flo\u2122 File"
        }),
        f.jsxs("label", {
          className: "group flex flex-wrap items-center justify-between gap-4 rounded-xl border border-dashed border-primary/30 bg-primary/5 px-4 py-4 text-sm shadow-sm transition hover:-translate-y-0.5 hover:bg-primary/10",
          "aria-busy": d,
          children: [
            f.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                f.jsx("div", {
                  className: "rounded-full bg-primary/15 p-2 text-primary",
                  children: f.jsx(nm, {
                    className: "h-4 w-4 icon-accent"
                  })
                }),
                f.jsxs("div", {
                  children: [
                    f.jsx("p", {
                      className: "font-semibold",
                      children: "Drop or browse your .flo file"
                    }),
                    f.jsx("p", {
                      className: "text-xs text-muted-foreground",
                      children: "All metadata editing happens locally."
                    })
                  ]
                })
              ]
            }),
            f.jsx("span", {
              className: "btn",
              "data-variant": "solid",
              "data-tone": "primary",
              "data-size": "xs",
              children: "Browse"
            }),
            f.jsx("input", {
              type: "file",
              accept: ".flo",
              onChange: _,
              className: "sr-only"
            })
          ]
        }),
        c && f.jsxs("div", {
          className: "rounded-lg border border-input/60 bg-background/60 px-3 py-2 text-sm flex items-center gap-2",
          children: [
            f.jsx(nm, {
              className: "h-4 w-4 icon-accent"
            }),
            f.jsxs("div", {
              className: "flex flex-col",
              children: [
                f.jsx("span", {
                  className: "font-medium",
                  children: c.name
                }),
                f.jsxs("span", {
                  className: "text-xs text-muted-foreground",
                  children: [
                    "Ready to tag \xB7 ",
                    (c.size / (1024 * 1024)).toFixed(2),
                    " MB"
                  ]
                })
              ]
            })
          ]
        }),
        c && f.jsx("div", {
          className: "text-xs text-muted-foreground",
          children: d ? f.jsxs("span", {
            className: "flex items-center gap-2 text-primary",
            children: [
              f.jsx("span", {
                className: "h-1.5 w-1.5 animate-ping rounded-full bg-primary",
                "aria-hidden": "true"
              }),
              "Reading embedded tags..."
            ]
          }) : r ? f.jsx("span", {
            className: "text-foreground/70",
            children: r
          }) : null
        })
      ]
    });
  }
  const cm = [
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
  ], sm = [
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
  ], rm = [
    {
      key: "url_commercial",
      label: "Commercial URL",
      placeholder: "https://example.com/buy",
      colSpan: "full"
    }
  ];
  function ig({ metadata: c, onMetadataChange: s }) {
    var _a, _b;
    const d = Object.values(c).filter((A) => typeof A == "string" && A.trim().length > 0).length, r = cm.length + sm.length + fm.length + rm.length + 1, _ = ({ key: A, label: x, placeholder: v, type: p, colSpan: y }) => {
      const O = c[A], R = typeof O == "string" || typeof O == "number" ? O : "";
      return f.jsxs("div", {
        className: `space-y-2 ${y === "full" ? "md:col-span-2" : ""}`,
        children: [
          f.jsx("label", {
            htmlFor: A,
            className: "text-sm font-semibold tracking-wide text-foreground/80",
            children: x
          }),
          f.jsx("input", {
            id: A,
            value: R,
            onChange: (q) => s(A, p === "number" ? parseInt(q.target.value) || void 0 : q.target.value),
            placeholder: v,
            type: p ?? "text",
            className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          })
        ]
      }, A);
    };
    return f.jsxs("section", {
      className: "glass-panel p-6 mb-6",
      children: [
        f.jsxs("div", {
          className: "flex items-center justify-between flex-wrap gap-3 mb-6",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Metadata"
                }),
                f.jsx("h2", {
                  className: "text-xl font-semibold mt-1",
                  children: "Flo\u2122 Tag Editor"
                })
              ]
            }),
            f.jsxs("div", {
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
        f.jsxs("div", {
          className: "space-y-8",
          children: [
            f.jsxs("div", {
              className: "space-y-4",
              children: [
                f.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Essentials"
                }),
                f.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: cm.map(_)
                })
              ]
            }),
            f.jsxs("div", {
              className: "space-y-4",
              children: [
                f.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Release Details"
                }),
                f.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: sm.map(_)
                })
              ]
            }),
            f.jsxs("div", {
              className: "space-y-4",
              children: [
                f.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Credits & Codes"
                }),
                f.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: fm.map(_)
                })
              ]
            }),
            f.jsxs("div", {
              className: "space-y-4",
              children: [
                f.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70",
                  children: "Links"
                }),
                f.jsx("div", {
                  className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                  children: rm.map(_)
                })
              ]
            })
          ]
        }),
        f.jsxs("div", {
          className: "mt-8 space-y-2",
          children: [
            f.jsx("label", {
              htmlFor: "comment",
              className: "text-sm font-semibold tracking-wide text-foreground/80",
              children: "Comments"
            }),
            f.jsx("textarea", {
              id: "comment",
              rows: 4,
              value: ((_b = (_a = c.comments) == null ? void 0 : _a[0]) == null ? void 0 : _b.text) || "",
              onChange: (A) => s("comments", [
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
  const om = [
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
  ], cg = [
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
  function sg({ pictures: c = [], onPicturesChange: s, coverVariants: d = [], onCoverVariantsChange: r, animatedCover: _, onAnimatedCoverChange: A }) {
    const x = async (k, J) => {
      var _a, _b;
      const W = (_a = k.target.files) == null ? void 0 : _a[0];
      if (W) {
        if (!W.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        if (W.size > 10485760) {
          alert("Image size must be less than 10MB");
          return;
        }
        const et = await W.arrayBuffer(), Z = new Uint8Array(et), Nt = {
          mime_type: W.type,
          picture_type: J,
          description: `${(_b = om.find((F) => F.value === J)) == null ? void 0 : _b.label} Art`,
          data: Z
        }, Ct = c.filter((F) => F.picture_type !== J);
        Ct.push(Nt), s(Ct);
      }
    }, v = (k) => {
      s(c.filter((J) => J.picture_type !== k));
    }, p = () => {
      r([
        ...d,
        {
          variant_type: "standard",
          mime_type: "image/jpeg",
          data: new Uint8Array(),
          description: ""
        }
      ]);
    }, y = async (k, J) => {
      var _a;
      const W = (_a = J.target.files) == null ? void 0 : _a[0];
      if (W) {
        if (!W.type.startsWith("image/")) {
          alert("Please select an image file");
          return;
        }
        const et = await W.arrayBuffer(), Z = [
          ...d
        ];
        Z[k].data = new Uint8Array(et), Z[k].mime_type = W.type, r(Z);
      }
    }, O = (k, J, W) => {
      const et = [
        ...d
      ];
      et[k] = {
        ...et[k],
        [J]: W
      }, r(et);
    }, R = (k) => {
      r(d.filter((J, W) => W !== k));
    }, q = async (k) => {
      var _a;
      const J = (_a = k.target.files) == null ? void 0 : _a[0];
      if (J) {
        if (!J.type.startsWith("image/")) {
          alert("Please select an animated image file (e.g., WebP)");
          return;
        }
        const W = await J.arrayBuffer(), et = new Uint8Array(W), Z = {
          mime_type: J.type,
          data: et,
          duration_ms: 3e3,
          loop_count: 0
        };
        A(Z);
      }
    }, tt = (k, J) => {
      _ && A({
        ..._,
        [k]: J
      });
    }, ft = () => {
      A(void 0);
    }, vt = (k, J) => URL.createObjectURL(new Blob([
      k
    ], {
      type: J
    }));
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4",
          children: [
            f.jsx("p", {
              className: "micro-label",
              children: "Artwork"
            }),
            f.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Album Art & Covers"
            }),
            f.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Manage covers, variants, and animated art"
            })
          ]
        }),
        f.jsxs("div", {
          className: "space-y-8",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Standard Covers"
                }),
                f.jsx("div", {
                  className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                  children: om.map(({ value: k, label: J }) => {
                    const W = c.find((et) => et.picture_type === k);
                    return f.jsx("div", {
                      className: "relative group rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/20 to-secondary/10 p-4 shadow-lg overflow-hidden",
                      children: W ? f.jsxs("div", {
                        className: "space-y-3",
                        children: [
                          f.jsx("img", {
                            src: vt(W.data, W.mime_type),
                            alt: J,
                            className: "w-full h-32 object-cover rounded-lg"
                          }),
                          f.jsxs("div", {
                            className: "flex justify-between items-center",
                            children: [
                              f.jsx("span", {
                                className: "text-sm font-medium",
                                children: J
                              }),
                              f.jsx("button", {
                                onClick: () => v(k),
                                className: "btn",
                                "data-variant": "soft",
                                "data-tone": "danger",
                                "data-size": "xs",
                                children: f.jsx(Ze, {
                                  className: "h-4 w-4"
                                })
                              })
                            ]
                          })
                        ]
                      }) : f.jsxs("label", {
                        className: "flex flex-col items-center justify-center gap-2 h-32 cursor-pointer hover:bg-primary/10 rounded-lg transition",
                        children: [
                          f.jsx(ol, {
                            className: "h-6 w-6 icon-accent"
                          }),
                          f.jsx("span", {
                            className: "text-xs font-medium",
                            children: J
                          }),
                          f.jsx("input", {
                            type: "file",
                            accept: "image/*",
                            onChange: (et) => x(et, k),
                            className: "hidden"
                          })
                        ]
                      })
                    }, k);
                  })
                })
              ]
            }),
            f.jsxs("div", {
              children: [
                f.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    f.jsx("h3", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Cover Variants"
                    }),
                    f.jsxs("button", {
                      onClick: p,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        f.jsx(ol, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Variant"
                      ]
                    })
                  ]
                }),
                f.jsx("div", {
                  className: "space-y-3",
                  children: d.length === 0 ? f.jsxs("div", {
                    className: "text-center text-muted-foreground py-4",
                    children: [
                      f.jsx(Hy, {
                        className: "h-8 w-8 mx-auto mb-2 opacity-50"
                      }),
                      f.jsx("p", {
                        className: "text-sm",
                        children: "No variants added"
                      })
                    ]
                  }) : d.map((k, J) => f.jsxs("div", {
                    className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                    children: [
                      f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          f.jsx("select", {
                            value: k.variant_type,
                            onChange: (W) => O(J, "variant_type", W.target.value),
                            className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                            children: cg.map(({ value: W, label: et }) => f.jsx("option", {
                              value: W,
                              children: et
                            }, W))
                          }),
                          f.jsx("input", {
                            value: k.description || "",
                            onChange: (W) => O(J, "description", W.target.value),
                            placeholder: "Description",
                            className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                          }),
                          f.jsxs("label", {
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "primary",
                            "data-size": "xs",
                            children: [
                              f.jsx(jm, {
                                className: "h-4 w-4 icon-accent"
                              }),
                              "Upload",
                              f.jsx("input", {
                                type: "file",
                                accept: "image/*",
                                onChange: (W) => y(J, W),
                                className: "hidden"
                              })
                            ]
                          }),
                          f.jsx("button", {
                            onClick: () => R(J),
                            className: "btn",
                            "data-variant": "soft",
                            "data-tone": "danger",
                            "data-size": "xs",
                            children: f.jsx(Ze, {
                              className: "h-4 w-4"
                            })
                          })
                        ]
                      }),
                      k.data.length > 0 && f.jsx("img", {
                        src: vt(k.data, k.mime_type),
                        alt: k.description || "Variant",
                        className: "w-24 h-24 object-cover rounded-lg border"
                      })
                    ]
                  }, J))
                })
              ]
            }),
            f.jsxs("div", {
              children: [
                f.jsx("h3", {
                  className: "text-sm font-semibold tracking-wide text-foreground/70 mb-4",
                  children: "Animated Cover"
                }),
                _ ? f.jsxs("div", {
                  className: "rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm space-y-3",
                  children: [
                    f.jsx("img", {
                      src: vt(_.data, _.mime_type),
                      alt: "Animated Cover",
                      className: "w-32 h-32 object-cover rounded-lg border"
                    }),
                    f.jsxs("div", {
                      className: "grid grid-cols-2 gap-3",
                      children: [
                        f.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            f.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Duration (ms)"
                            }),
                            f.jsx("input", {
                              type: "number",
                              value: _.duration_ms || 0,
                              onChange: (k) => tt("duration_ms", parseInt(k.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        }),
                        f.jsxs("div", {
                          className: "space-y-1",
                          children: [
                            f.jsx("label", {
                              className: "text-xs font-medium",
                              children: "Loop Count"
                            }),
                            f.jsx("input", {
                              type: "number",
                              value: _.loop_count || 0,
                              onChange: (k) => tt("loop_count", parseInt(k.target.value) || 0),
                              className: "w-full border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                            })
                          ]
                        })
                      ]
                    }),
                    f.jsxs("button", {
                      onClick: ft,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "danger",
                      "data-size": "sm",
                      children: [
                        f.jsx(Ze, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Remove Animated Cover"
                      ]
                    })
                  ]
                }) : f.jsxs("label", {
                  className: "flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 text-center transition hover:border-primary/60 hover:bg-primary/10 cursor-pointer",
                  children: [
                    f.jsx(ky, {
                      className: "h-8 w-8 icon-accent"
                    }),
                    f.jsxs("div", {
                      children: [
                        f.jsx("p", {
                          className: "font-semibold",
                          children: "Upload Animated Cover"
                        }),
                        f.jsx("p", {
                          className: "text-sm text-muted-foreground",
                          children: "WebP or GIF for animation"
                        })
                      ]
                    }),
                    f.jsx("input", {
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
  }, dm = {
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
  function fg({ syncedLyrics: c = [], onSyncedLyricsChange: s, lrcText: d, onLrcTextChange: r, onImport: _, unsyncedLyrics: A, onUnsyncedLyricsChange: x }) {
    var _a, _b;
    const v = c.length > 0 ? c[0] : {
      ...ri,
      lines: []
    }, p = () => {
      const R = [
        ...c
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
      }), s(R);
    }, y = (R, q, tt) => {
      const ft = [
        ...c
      ];
      ft.length > 0 && (ft[0].lines[R] = {
        text: q,
        timestamp_ms: tt
      }, s(ft));
    }, O = (R) => {
      const q = [
        ...c
      ];
      q.length > 0 && (q[0].lines.splice(R, 1), s(q));
    };
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Lyrics"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Lyrics & Sync"
                })
              ]
            }),
            f.jsxs("span", {
              className: "rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary",
              children: [
                ((_a = v.lines) == null ? void 0 : _a.length) || 0,
                " entries"
              ]
            })
          ]
        }),
        f.jsxs("div", {
          className: "space-y-4",
          children: [
            f.jsxs("div", {
              className: "space-y-2",
              children: [
                f.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-2",
                  children: [
                    f.jsxs("div", {
                      children: [
                        f.jsx("p", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Import from LRC"
                        }),
                        f.jsx("p", {
                          className: "text-xs text-muted-foreground",
                          children: "Paste a timestamped block and drop it straight into SYLT."
                        })
                      ]
                    }),
                    f.jsxs("button", {
                      onClick: _,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        f.jsx(jm, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Convert SYLT"
                      ]
                    })
                  ]
                }),
                f.jsx("textarea", {
                  value: d,
                  onChange: (R) => r(R.target.value),
                  rows: 4,
                  placeholder: "[00:01.40]First line\\n[00:08.50]Next line",
                  className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm font-mono transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                })
              ]
            }),
            f.jsxs("div", {
              className: "grid grid-cols-1 gap-4 md:grid-cols-2",
              children: [
                f.jsxs("div", {
                  className: "space-y-2",
                  children: [
                    f.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Language"
                    }),
                    f.jsx("input", {
                      value: v.language || "",
                      onChange: (R) => {
                        const q = [
                          ...c
                        ];
                        q.length > 0 && (q[0].language = R.target.value, s(q));
                      },
                      placeholder: "eng",
                      maxLength: 3,
                      className: "w-full border border-input/80 bg-background/50 focus:bg-background rounded-md px-3 py-2 text-sm uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                    })
                  ]
                }),
                f.jsxs("div", {
                  className: "space-y-2 md:col-span-2",
                  children: [
                    f.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        f.jsx("label", {
                          className: "text-sm font-semibold tracking-wide text-foreground/70",
                          children: "Unsynced Lyrics"
                        }),
                        f.jsx("span", {
                          className: "text-xs text-muted-foreground text-right",
                          children: "Leave blank to auto-fill from the synced lines above."
                        })
                      ]
                    }),
                    f.jsx("textarea", {
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
            f.jsxs("div", {
              className: "space-y-3",
              children: [
                f.jsxs("div", {
                  className: "flex flex-wrap items-center justify-between gap-3",
                  children: [
                    f.jsx("label", {
                      className: "text-sm font-semibold tracking-wide text-foreground/70",
                      children: "Timeline Entries"
                    }),
                    f.jsxs("button", {
                      onClick: p,
                      className: "btn",
                      "data-variant": "soft",
                      "data-tone": "primary",
                      "data-size": "sm",
                      children: [
                        f.jsx(ol, {
                          className: "h-4 w-4 icon-accent"
                        }),
                        "Add Entry"
                      ]
                    })
                  ]
                }),
                f.jsx("div", {
                  className: "space-y-2 max-h-96 overflow-y-auto pr-1",
                  children: (_b = v.lines) == null ? void 0 : _b.map((R, q) => f.jsx(rg, {
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
  function rg({ index: c, text: s, timestamp: d, onUpdate: r, onDelete: _ }) {
    return f.jsxs("div", {
      className: "flex flex-col gap-2 rounded-lg border border-input/60 bg-background/60 p-3 sm:flex-row sm:items-center sm:gap-3",
      children: [
        f.jsx("input", {
          value: s,
          onChange: (A) => r(c, A.target.value, d),
          placeholder: "Lyrics text",
          className: "flex-1 border border-input/60 rounded-md px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        }),
        f.jsxs("div", {
          className: "flex items-center gap-2",
          children: [
            f.jsx(Sm, {
              className: "h-4 w-4 icon-accent"
            }),
            f.jsx("input", {
              type: "number",
              value: d,
              onChange: (A) => r(c, s, parseInt(A.target.value) || 0),
              placeholder: "ms",
              className: "w-24 border border-input/60 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
            })
          ]
        }),
        f.jsx("button", {
          onClick: () => _(c),
          className: "btn",
          "data-variant": "soft",
          "data-tone": "danger",
          "data-size": "sm",
          children: f.jsx(Ze, {
            className: "h-4 w-4"
          })
        })
      ]
    });
  }
  const mm = [
    {
      value: "intro",
      label: "Intro",
      icon: Vn
    },
    {
      value: "verse",
      label: "Verse",
      icon: Ny
    },
    {
      value: "chorus",
      label: "Chorus",
      icon: Gy
    },
    {
      value: "bridge",
      label: "Bridge",
      icon: Ay
    },
    {
      value: "solo",
      label: "Solo",
      icon: Dy
    },
    {
      value: "outro",
      label: "Outro",
      icon: Yy
    }
  ];
  function og({ sectionMarkers: c = [], onSectionMarkersChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: 0,
          section_type: "verse",
          label: ""
        }
      ]);
    }, r = (x, v, p) => {
      const y = [
        ...c
      ];
      y[x] = {
        ...y[x],
        [v]: p
      }, s(y);
    }, _ = (x) => {
      s(c.filter((v, p) => p !== x));
    }, A = (x) => {
      const v = Math.floor(x / 1e3), p = Math.floor(v / 60), y = v % 60, O = Math.floor(x % 1e3 / 10);
      return `${p}:${y.toString().padStart(2, "0")}.${O.toString().padStart(2, "0")}`;
    };
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Timing"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Section Markers"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Mark song sections for better playback"
                })
              ]
            }),
            f.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                f.jsx(ol, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Marker"
              ]
            })
          ]
        }),
        f.jsx("div", {
          className: "space-y-3",
          children: c.length === 0 ? f.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              f.jsx(Vn, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No section markers added"
              }),
              f.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Marker" to start'
              })
            ]
          }) : c.map((x, v) => {
            var _a;
            const y = ((_a = mm.find((O) => O.value === x.section_type)) == null ? void 0 : _a.icon) || Vn;
            return f.jsxs("div", {
              className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
              children: [
                f.jsx(y, {
                  className: "h-5 w-5 icon-accent flex-shrink-0"
                }),
                f.jsxs("div", {
                  className: "flex items-center gap-2 min-w-0 flex-1",
                  children: [
                    f.jsx(Sm, {
                      className: "h-4 w-4 icon-accent flex-shrink-0"
                    }),
                    f.jsx("input", {
                      type: "number",
                      value: x.timestamp_ms,
                      onChange: (O) => r(v, "timestamp_ms", Math.max(0, parseInt(O.target.value) || 0)),
                      placeholder: "ms",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    }),
                    f.jsxs("span", {
                      className: "text-xs text-muted-foreground",
                      children: [
                        "(",
                        A(x.timestamp_ms),
                        ")"
                      ]
                    })
                  ]
                }),
                f.jsx("select", {
                  value: x.section_type,
                  onChange: (O) => r(v, "section_type", O.target.value),
                  className: "border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                  children: mm.map(({ value: O, label: R }) => f.jsx("option", {
                    value: O,
                    children: R
                  }, O))
                }),
                f.jsx("input", {
                  value: x.label || "",
                  onChange: (O) => r(v, "label", O.target.value),
                  placeholder: "Custom label",
                  className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                }),
                f.jsx("button", {
                  onClick: () => _(v),
                  className: "btn",
                  "data-variant": "soft",
                  "data-tone": "danger",
                  "data-size": "xs",
                  children: f.jsx(Ze, {
                    className: "h-4 w-4"
                  })
                })
              ]
            }, v);
          })
        })
      ]
    });
  }
  function dg({ bpmMap: c = [], onBpmMapChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: 0,
          bpm: 120
        }
      ]);
    }, r = (v, p, y) => {
      const O = [
        ...c
      ];
      O[v] = {
        ...O[v],
        [p]: y
      }, s(O);
    }, _ = (v) => {
      s(c.filter((p, y) => y !== v));
    }, A = (v) => {
      const p = Math.floor(v / 1e3), y = Math.floor(p / 60), O = p % 60;
      return `${y}:${O.toString().padStart(2, "0")}`;
    }, x = [
      ...c
    ].sort((v, p) => v.timestamp_ms - p.timestamp_ms);
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "BPM Map"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track tempo changes over time"
                })
              ]
            }),
            f.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              children: [
                f.jsx(ol, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        f.jsx("div", {
          className: "space-y-3",
          children: x.length === 0 ? f.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              f.jsx(im, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No BPM changes added"
              }),
              f.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : f.jsxs(f.Fragment, {
            children: [
              f.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  f.jsx(am, {
                    className: "h-4 w-4"
                  }),
                  f.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      x.map((v, p) => `${A(v.timestamp_ms)} \u2192 ${v.bpm} BPM${p < x.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              x.map((v, p) => f.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  f.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      f.jsx(am, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      f.jsx("input", {
                        type: "number",
                        value: v.timestamp_ms,
                        onChange: (y) => r(p, "timestamp_ms", Math.max(0, parseInt(y.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      f.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          A(v.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  f.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      f.jsx(im, {
                        className: "h-4 w-4 icon-accent"
                      }),
                      f.jsx("input", {
                        type: "number",
                        value: v.bpm,
                        onChange: (y) => r(p, "bpm", Math.max(1, parseFloat(y.target.value) || 120)),
                        placeholder: "BPM",
                        step: "0.1",
                        className: "w-16 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      f.jsx("span", {
                        className: "text-xs text-muted-foreground",
                        children: "BPM"
                      })
                    ]
                  }),
                  f.jsx("button", {
                    onClick: () => _(p),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    children: f.jsx(Ze, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, p))
            ]
          })
        })
      ]
    });
  }
  function mg({ keyChanges: c = [], onKeyChangesChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: 0,
          key: ""
        }
      ]);
    }, r = (v, p, y) => {
      const O = [
        ...c
      ];
      O[v] = {
        ...O[v],
        [p]: y
      }, s(O);
    }, _ = (v) => {
      s(c.filter((p, y) => y !== v));
    }, A = (v) => {
      const p = Math.floor(v / 1e3), y = Math.floor(p / 60), O = p % 60;
      return `${y}:${O.toString().padStart(2, "0")}`;
    }, x = [
      ...c
    ].sort((v, p) => v.timestamp_ms - p.timestamp_ms);
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Analysis"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Key Changes"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Track musical key changes over time (e.g. C, F#m, D\u266D)"
                })
              ]
            }),
            f.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                f.jsx(ol, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Change"
              ]
            })
          ]
        }),
        f.jsx("div", {
          className: "space-y-3",
          children: x.length === 0 ? f.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              f.jsx(um, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No key changes added"
              }),
              f.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Change" to start'
              })
            ]
          }) : f.jsxs(f.Fragment, {
            children: [
              f.jsxs("div", {
                className: "flex items-center gap-2 text-sm text-muted-foreground",
                children: [
                  f.jsx(Nm, {
                    className: "h-4 w-4"
                  }),
                  f.jsxs("span", {
                    children: [
                      "Timeline:",
                      " ",
                      x.map((v, p) => `${A(v.timestamp_ms)} \u2192 ${v.key || "?"}${p < x.length - 1 ? ", " : ""}`).join("")
                    ]
                  })
                ]
              }),
              x.map((v, p) => f.jsxs("div", {
                className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
                children: [
                  f.jsxs("div", {
                    className: "flex items-center gap-2 min-w-0 flex-1",
                    children: [
                      f.jsx(um, {
                        className: "h-4 w-4 icon-accent flex-shrink-0"
                      }),
                      f.jsx("input", {
                        type: "number",
                        value: v.timestamp_ms,
                        onChange: (y) => r(p, "timestamp_ms", Math.max(0, parseInt(y.target.value) || 0)),
                        placeholder: "ms",
                        className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                      }),
                      f.jsxs("span", {
                        className: "text-xs text-muted-foreground",
                        children: [
                          "(",
                          A(v.timestamp_ms),
                          ")"
                        ]
                      })
                    ]
                  }),
                  f.jsx("div", {
                    className: "flex items-center gap-2",
                    children: f.jsx("input", {
                      type: "text",
                      value: v.key,
                      onChange: (y) => r(p, "key", y.target.value),
                      placeholder: "Key (e.g. C#m)",
                      className: "w-20 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50"
                    })
                  }),
                  f.jsx("button", {
                    onClick: () => _(p),
                    className: "btn",
                    "data-variant": "soft",
                    "data-tone": "danger",
                    "data-size": "xs",
                    type: "button",
                    children: f.jsx(Ze, {
                      className: "h-4 w-4"
                    })
                  })
                ]
              }, p))
            ]
          })
        })
      ]
    });
  }
  function hg({ popularimeter: c, onChange: s }) {
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4",
          children: [
            f.jsx("p", {
              className: "micro-label",
              children: "Stats"
            }),
            f.jsx("h2", {
              className: "text-lg font-semibold",
              children: "Popularity & Usage"
            }),
            f.jsx("p", {
              className: "text-xs text-muted-foreground mt-1",
              children: "Track ratings and play count (for history or sync)"
            })
          ]
        }),
        f.jsxs("div", {
          className: "flex flex-col gap-4 sm:flex-row sm:items-end",
          children: [
            f.jsxs("div", {
              className: "flex flex-col gap-2 flex-1",
              children: [
                f.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "User Email"
                }),
                f.jsx("input", {
                  type: "email",
                  className: "w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50",
                  value: c.email || "",
                  onChange: (d) => s("email", d.target.value),
                  placeholder: "user@email.com",
                  autoComplete: "email"
                })
              ]
            }),
            f.jsxs("div", {
              className: "flex flex-col gap-2 w-1/3 min-w-[120px]",
              children: [
                f.jsxs("label", {
                  className: "text-xs font-medium text-muted-foreground flex justify-between",
                  children: [
                    "Rating",
                    " ",
                    f.jsxs("span", {
                      className: "text-[0.85em] text-muted-foreground",
                      children: [
                        c.rating ?? 0,
                        " / 255"
                      ]
                    })
                  ]
                }),
                f.jsx("input", {
                  type: "range",
                  min: 0,
                  max: 255,
                  step: 1,
                  className: "w-full",
                  value: c.rating ?? 0,
                  onChange: (d) => s("rating", Number(d.target.value))
                })
              ]
            }),
            f.jsxs("div", {
              className: "flex flex-col gap-2 w-1/4 min-w-[80px]",
              children: [
                f.jsx("label", {
                  className: "text-xs font-medium text-muted-foreground",
                  children: "Play Count"
                }),
                f.jsx("input", {
                  type: "number",
                  min: 0,
                  className: "w-full rounded border border-input/60 px-2 py-1 text-sm bg-background/50",
                  value: c.play_count ?? 0,
                  onChange: (d) => s("play_count", Math.max(0, Number(d.target.value))),
                  placeholder: "0"
                })
              ]
            })
          ]
        })
      ]
    });
  }
  function yg({ userText: c = [], onUserTextChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          description: "",
          value: ""
        }
      ]);
    }, r = (A, x, v) => {
      const p = [
        ...c
      ];
      p[A] = {
        ...p[A],
        [x]: v
      }, s(p);
    }, _ = (A) => {
      s(c.filter((x, v) => v !== A));
    };
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Advanced"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Custom Metadata"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Store custom key/value info for your own app or player"
                })
              ]
            }),
            f.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                f.jsx(ol, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Pair"
              ]
            })
          ]
        }),
        f.jsx("div", {
          className: "space-y-3",
          children: c.length === 0 ? f.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              f.jsx(Nm, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No custom data added"
              }),
              f.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Pair" to start'
              })
            ]
          }) : c.map((A, x) => f.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-4 shadow-sm",
            children: [
              f.jsx("input", {
                type: "text",
                value: A.description,
                onChange: (v) => r(x, "description", v.target.value),
                placeholder: "Label",
                className: "w-36 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              f.jsx("input", {
                type: "text",
                value: A.value,
                onChange: (v) => r(x, "value", v.target.value),
                placeholder: "Value",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 255
              }),
              f.jsx("button", {
                onClick: () => _(x),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: f.jsx(Ze, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, x))
        })
      ]
    });
  }
  function gg({ creatorNotes: c = [], onCreatorNotesChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          timestamp_ms: void 0,
          text: ""
        }
      ]);
    }, r = (x, v, p) => {
      const y = [
        ...c
      ];
      y[x] = {
        ...y[x],
        [v]: p
      }, s(y);
    }, _ = (x) => {
      s(c.filter((v, p) => p !== x));
    }, A = (x) => {
      if (x == null) return "\u2013";
      const v = Math.floor(x / 1e3), p = Math.floor(v / 60), y = v % 60;
      return `${p}:${y.toString().padStart(2, "0")}`;
    };
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Notes"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Creator Notes"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Personal/team notes with optional timestamps (ms)"
                })
              ]
            }),
            f.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                f.jsx(ol, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Note"
              ]
            })
          ]
        }),
        f.jsx("div", {
          className: "space-y-3",
          children: c.length === 0 ? f.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              f.jsx(Fy, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No notes yet"
              }),
              f.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Note" to start'
              })
            ]
          }) : c.map((x, v) => f.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              f.jsx("input", {
                type: "number",
                value: x.timestamp_ms ?? "",
                onChange: (p) => r(v, "timestamp_ms", p.target.value === "" ? void 0 : Math.max(0, parseInt(p.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              f.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  A(x.timestamp_ms),
                  ")"
                ]
              }),
              f.jsx("textarea", {
                value: x.text,
                onChange: (p) => r(v, "text", p.target.value),
                placeholder: "Note text",
                className: "flex-1 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50 min-h-8",
                maxLength: 512
              }),
              f.jsx("button", {
                onClick: () => _(v),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: f.jsx(Ze, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, v))
        })
      ]
    });
  }
  function bg({ collaborationCredits: c = [], onCollaborationCreditsChange: s }) {
    const d = () => {
      s([
        ...c,
        {
          role: "",
          name: "",
          timestamp_ms: void 0
        }
      ]);
    }, r = (x, v, p) => {
      const y = [
        ...c
      ];
      y[x] = {
        ...y[x],
        [v]: p
      }, s(y);
    }, _ = (x) => {
      s(c.filter((v, p) => p !== x));
    }, A = (x) => {
      if (x == null) return "\u2013";
      const v = Math.floor(x / 1e3), p = Math.floor(v / 60), y = v % 60;
      return `${p}:${y.toString().padStart(2, "0")}`;
    };
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "People"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Collaboration Credits"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Add credits for each contributor and their role. Optionally timestamp their contribution!"
                })
              ]
            }),
            f.jsxs("button", {
              onClick: d,
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              type: "button",
              children: [
                f.jsx(ol, {
                  className: "h-4 w-4 icon-accent"
                }),
                "Add Credit"
              ]
            })
          ]
        }),
        f.jsx("div", {
          className: "space-y-3",
          children: c.length === 0 ? f.jsxs("div", {
            className: "text-center text-muted-foreground py-8",
            children: [
              f.jsx(ng, {
                className: "h-10 w-10 mx-auto mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No collaboration credits"
              }),
              f.jsx("p", {
                className: "text-xs",
                children: 'Click "Add Credit" to start'
              })
            ]
          }) : c.map((x, v) => f.jsxs("div", {
            className: "flex items-center gap-4 rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/10 p-4 shadow-sm",
            children: [
              f.jsx("input", {
                type: "text",
                value: x.role,
                onChange: (p) => r(v, "role", p.target.value),
                placeholder: "Role (e.g. Producer)",
                className: "w-32 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 40
              }),
              f.jsx("input", {
                type: "text",
                value: x.name,
                onChange: (p) => r(v, "name", p.target.value),
                placeholder: "Name",
                className: "w-48 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/50",
                maxLength: 64
              }),
              f.jsx("input", {
                type: "number",
                value: x.timestamp_ms ?? "",
                onChange: (p) => r(v, "timestamp_ms", p.target.value === "" ? void 0 : Math.max(0, parseInt(p.target.value || "0"))),
                placeholder: "ms",
                className: "w-24 border border-input/60 rounded-md px-2 py-1 text-sm bg-background/40",
                min: 0
              }),
              f.jsxs("span", {
                className: "text-xs text-muted-foreground w-16",
                children: [
                  "(",
                  A(x.timestamp_ms),
                  ")"
                ]
              }),
              f.jsx("button", {
                onClick: () => _(v),
                className: "btn",
                "data-variant": "soft",
                "data-tone": "danger",
                "data-size": "xs",
                type: "button",
                children: f.jsx(Ze, {
                  className: "h-4 w-4"
                })
              })
            ]
          }, v))
        })
      ]
    });
  }
  function _g({ disabled: c, isProcessing: s, fileName: d, onProcess: r }) {
    return f.jsx("section", {
      className: "glass-panel p-6 sm:p-8",
      children: f.jsxs("div", {
        className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
        children: [
          f.jsxs("div", {
            children: [
              f.jsx("p", {
                className: "micro-label",
                children: "Final step"
              }),
              f.jsx("p", {
                className: "text-base font-semibold",
                children: d ? `Render tags into ${d}` : "Load a flo\u2122 to begin"
              })
            ]
          }),
          f.jsx("button", {
            type: "button",
            onClick: r,
            disabled: c,
            className: "btn",
            "data-variant": "gradient",
            "data-size": "lg",
            children: s ? f.jsxs(f.Fragment, {
              children: [
                f.jsx("div", {
                  className: "h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                }),
                "Processing"
              ]
            }) : f.jsxs(f.Fragment, {
              children: [
                f.jsx("span", {
                  className: "icon-chip",
                  children: f.jsx(wy, {
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
  function hm({ type: c, message: s }) {
    const d = c === "error" ? "bg-destructive/10 text-destructive border border-destructive/30" : "bg-primary/10 text-primary border border-primary/30";
    return f.jsx("div", {
      className: `${d} rounded-lg px-4 py-3 text-sm shadow-sm`,
      children: s
    });
  }
  const Am = "floeditor-theme", oi = () => typeof window < "u" && typeof document < "u", vg = () => {
    if (!oi()) return "auto";
    const c = window.localStorage.getItem(Am);
    return c === "light" || c === "dark" || c === "auto" ? c : "auto";
  };
  function pg() {
    const [c, s] = ht.useState(vg), [d, r] = ht.useState("light");
    return ht.useEffect(() => {
      if (!oi()) return;
      const x = window.matchMedia("(prefers-color-scheme: dark)"), v = () => r(x.matches ? "dark" : "light");
      return v(), x.addEventListener("change", v), () => {
        x.removeEventListener("change", v);
      };
    }, []), ht.useEffect(() => {
      if (!oi()) return;
      const x = document.documentElement;
      (c === "auto" ? d : c) === "dark" ? (x.classList.add("dark"), x.style.colorScheme = "dark") : (x.classList.remove("dark"), x.style.colorScheme = "light");
    }, [
      c,
      d
    ]), {
      theme: c,
      resolvedTheme: c === "auto" ? d : c,
      setTheme: (x) => {
        s(x), oi() && window.localStorage.setItem(Am, x);
      }
    };
  }
  const ym = [
    {
      value: "auto",
      label: "Auto",
      icon: Qy
    },
    {
      value: "light",
      label: "Light",
      icon: Py
    },
    {
      value: "dark",
      label: "Dark",
      icon: Vy
    }
  ];
  function xg() {
    var _a;
    const { theme: c, setTheme: s } = pg(), d = ((_a = ym.find((r) => r.value === c)) == null ? void 0 : _a.label) ?? "Auto";
    return f.jsxs("div", {
      className: "w-full rounded-2xl border border-primary/20 bg-background/80 p-3 shadow-sm shadow-primary/10 backdrop-blur-md",
      children: [
        f.jsxs("div", {
          className: "flex items-center justify-between text-[0.65rem] uppercase tracking-[0.35em] text-primary/80",
          children: [
            f.jsx("span", {
              children: "Theme"
            }),
            f.jsx("span", {
              className: "font-semibold tracking-tight text-foreground/70",
              children: d
            })
          ]
        }),
        f.jsx("div", {
          className: "mt-2 grid grid-cols-3 gap-2",
          children: ym.map(({ value: r, label: _, icon: A }) => {
            const x = c === r;
            return f.jsxs("button", {
              type: "button",
              onClick: () => s(r),
              "aria-pressed": x,
              "aria-label": `Switch theme to ${_}`,
              className: "btn w-full justify-center text-[0.65rem]",
              "data-size": "xs",
              "data-tone": "primary",
              "data-variant": "soft",
              "data-toggle": "theme",
              "data-active": x,
              children: [
                f.jsx(A, {
                  className: "h-3.5 w-3.5 icon-accent",
                  "aria-hidden": "true"
                }),
                f.jsx("span", {
                  children: _
                })
              ]
            }, r);
          })
        })
      ]
    });
  }
  let M;
  function Sg(c) {
    const s = M.__externref_table_alloc();
    return M.__wbindgen_externrefs.set(s, c), s;
  }
  function Bs(c) {
    const s = typeof c;
    if (s == "number" || s == "boolean" || c == null) return `${c}`;
    if (s == "string") return `"${c}"`;
    if (s == "symbol") {
      const _ = c.description;
      return _ == null ? "Symbol" : `Symbol(${_})`;
    }
    if (s == "function") {
      const _ = c.name;
      return typeof _ == "string" && _.length > 0 ? `Function(${_})` : "Function";
    }
    if (Array.isArray(c)) {
      const _ = c.length;
      let A = "[";
      _ > 0 && (A += Bs(c[0]));
      for (let x = 1; x < _; x++) A += ", " + Bs(c[x]);
      return A += "]", A;
    }
    const d = /\[object ([^\]]+)\]/.exec(toString.call(c));
    let r;
    if (d && d.length > 1) r = d[1];
    else return toString.call(c);
    if (r == "Object") try {
      return "Object(" + JSON.stringify(c) + ")";
    } catch {
      return "Object";
    }
    return c instanceof Error ? `${c.name}: ${c.message}
${c.stack}` : r;
  }
  function Ls(c, s) {
    return c = c >>> 0, zm().subarray(c / 4, c / 4 + s);
  }
  function xe(c, s) {
    return c = c >>> 0, Za().subarray(c / 1, c / 1 + s);
  }
  let aa = null;
  function Qe() {
    return (aa === null || aa.buffer.detached === true || aa.buffer.detached === void 0 && aa.buffer !== M.memory.buffer) && (aa = new DataView(M.memory.buffer)), aa;
  }
  let Xn = null;
  function zm() {
    return (Xn === null || Xn.byteLength === 0) && (Xn = new Float32Array(M.memory.buffer)), Xn;
  }
  function Qa(c, s) {
    return c = c >>> 0, jg(c, s);
  }
  let Qn = null;
  function Za() {
    return (Qn === null || Qn.byteLength === 0) && (Qn = new Uint8Array(M.memory.buffer)), Qn;
  }
  function Gn(c, s) {
    try {
      return c.apply(this, s);
    } catch (d) {
      const r = Sg(d);
      M.__wbindgen_exn_store(r);
    }
  }
  function pe(c) {
    return c == null;
  }
  function Lt(c, s) {
    const d = s(c.length * 1, 1) >>> 0;
    return Za().set(c, d / 1), rt = c.length, d;
  }
  function Gs(c, s) {
    const d = s(c.length * 4, 4) >>> 0;
    return zm().set(c, d / 4), rt = c.length, d;
  }
  function na(c, s, d) {
    if (d === void 0) {
      const v = Zn.encode(c), p = s(v.length, 1) >>> 0;
      return Za().subarray(p, p + v.length).set(v), rt = v.length, p;
    }
    let r = c.length, _ = s(r, 1) >>> 0;
    const A = Za();
    let x = 0;
    for (; x < r; x++) {
      const v = c.charCodeAt(x);
      if (v > 127) break;
      A[_ + x] = v;
    }
    if (x !== r) {
      x !== 0 && (c = c.slice(x)), _ = d(_, r, r = x + c.length * 3, 1) >>> 0;
      const v = Za().subarray(_ + x, _ + r), p = Zn.encodeInto(c, v);
      x += p.written, _ = d(_, r, x, 1) >>> 0;
    }
    return rt = x, _;
  }
  function _t(c) {
    const s = M.__wbindgen_externrefs.get(c);
    return M.__externref_table_dealloc(c), s;
  }
  let di = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  di.decode();
  const Ng = 2146435072;
  let Hs = 0;
  function jg(c, s) {
    return Hs += s, Hs >= Ng && (di = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), di.decode(), Hs = s), di.decode(Za().subarray(c, c + s));
  }
  const Zn = new TextEncoder();
  "encodeInto" in Zn || (Zn.encodeInto = function(c, s) {
    const d = Zn.encode(c);
    return s.set(d), {
      read: c.length,
      written: d.length
    };
  });
  let rt = 0;
  const gm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((c) => M.__wbg_audioinfo_free(c >>> 0, 1)), bm = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((c) => M.__wbg_wasmstreamingdecoder_free(c >>> 0, 1));
  class Va {
    static __wrap(s) {
      s = s >>> 0;
      const d = Object.create(Va.prototype);
      return d.__wbg_ptr = s, gm.register(d, d.__wbg_ptr, d), d;
    }
    __destroy_into_raw() {
      const s = this.__wbg_ptr;
      return this.__wbg_ptr = 0, gm.unregister(this), s;
    }
    free() {
      const s = this.__destroy_into_raw();
      M.__wbg_audioinfo_free(s, 0);
    }
    get sample_rate() {
      return M.__wbg_get_audioinfo_sample_rate(this.__wbg_ptr) >>> 0;
    }
    set sample_rate(s) {
      M.__wbg_set_audioinfo_sample_rate(this.__wbg_ptr, s);
    }
    get channels() {
      return M.__wbg_get_audioinfo_channels(this.__wbg_ptr);
    }
    set channels(s) {
      M.__wbg_set_audioinfo_channels(this.__wbg_ptr, s);
    }
    get bit_depth() {
      return M.__wbg_get_audioinfo_bit_depth(this.__wbg_ptr);
    }
    set bit_depth(s) {
      M.__wbg_set_audioinfo_bit_depth(this.__wbg_ptr, s);
    }
    get total_frames() {
      const s = M.__wbg_get_audioinfo_total_frames(this.__wbg_ptr);
      return BigInt.asUintN(64, s);
    }
    set total_frames(s) {
      M.__wbg_set_audioinfo_total_frames(this.__wbg_ptr, s);
    }
    get duration_secs() {
      return M.__wbg_get_audioinfo_duration_secs(this.__wbg_ptr);
    }
    set duration_secs(s) {
      M.__wbg_set_audioinfo_duration_secs(this.__wbg_ptr, s);
    }
    get file_size() {
      return M.__wbg_get_audioinfo_file_size(this.__wbg_ptr) >>> 0;
    }
    set file_size(s) {
      M.__wbg_set_audioinfo_file_size(this.__wbg_ptr, s);
    }
    get compression_ratio() {
      return M.__wbg_get_audioinfo_compression_ratio(this.__wbg_ptr);
    }
    set compression_ratio(s) {
      M.__wbg_set_audioinfo_compression_ratio(this.__wbg_ptr, s);
    }
    get crc_valid() {
      return M.__wbg_get_audioinfo_crc_valid(this.__wbg_ptr) !== 0;
    }
    set crc_valid(s) {
      M.__wbg_set_audioinfo_crc_valid(this.__wbg_ptr, s);
    }
    get is_lossy() {
      return M.__wbg_get_audioinfo_is_lossy(this.__wbg_ptr) !== 0;
    }
    set is_lossy(s) {
      M.__wbg_set_audioinfo_is_lossy(this.__wbg_ptr, s);
    }
    get lossy_quality() {
      return M.__wbg_get_audioinfo_lossy_quality(this.__wbg_ptr);
    }
    set lossy_quality(s) {
      M.__wbg_set_audioinfo_lossy_quality(this.__wbg_ptr, s);
    }
    get version() {
      let s, d;
      try {
        const r = M.audioinfo_version(this.__wbg_ptr);
        return s = r[0], d = r[1], Qa(r[0], r[1]);
      } finally {
        M.__wbindgen_free(s, d, 1);
      }
    }
  }
  Symbol.dispose && (Va.prototype[Symbol.dispose] = Va.prototype.free);
  class qs {
    __destroy_into_raw() {
      const s = this.__wbg_ptr;
      return this.__wbg_ptr = 0, bm.unregister(this), s;
    }
    free() {
      const s = this.__destroy_into_raw();
      M.__wbg_wasmstreamingdecoder_free(s, 0);
    }
    next_frame() {
      const s = M.wasmstreamingdecoder_next_frame(this.__wbg_ptr);
      if (s[2]) throw _t(s[1]);
      return _t(s[0]);
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
      const s = M.wasmstreamingdecoder_decode_available(this.__wbg_ptr);
      if (s[3]) throw _t(s[2]);
      var d = Ls(s[0], s[1]).slice();
      return M.__wbindgen_free(s[0], s[1] * 4, 4), d;
    }
    current_frame_index() {
      return M.wasmstreamingdecoder_current_frame_index(this.__wbg_ptr) >>> 0;
    }
    constructor() {
      const s = M.wasmstreamingdecoder_new();
      return this.__wbg_ptr = s >>> 0, bm.register(this, this.__wbg_ptr, this), this;
    }
    feed(s) {
      const d = Lt(s, M.__wbindgen_malloc), r = rt, _ = M.wasmstreamingdecoder_feed(this.__wbg_ptr, d, r);
      if (_[2]) throw _t(_[1]);
      return _[0] !== 0;
    }
    reset() {
      M.wasmstreamingdecoder_reset(this.__wbg_ptr);
    }
    state() {
      let s, d;
      try {
        const r = M.wasmstreamingdecoder_state(this.__wbg_ptr);
        return s = r[0], d = r[1], Qa(r[0], r[1]);
      } finally {
        M.__wbindgen_free(s, d, 1);
      }
    }
    get_info() {
      const s = M.wasmstreamingdecoder_get_info(this.__wbg_ptr);
      if (s[2]) throw _t(s[1]);
      return _t(s[0]);
    }
    is_ready() {
      return M.wasmstreamingdecoder_is_ready(this.__wbg_ptr) !== 0;
    }
    has_error() {
      return M.wasmstreamingdecoder_has_error(this.__wbg_ptr) !== 0;
    }
  }
  Symbol.dispose && (qs.prototype[Symbol.dispose] = qs.prototype.free);
  function Ag(c, s, d) {
    var r = pe(c) ? 0 : na(c, M.__wbindgen_malloc, M.__wbindgen_realloc), _ = rt, A = pe(s) ? 0 : na(s, M.__wbindgen_malloc, M.__wbindgen_realloc), x = rt, v = pe(d) ? 0 : na(d, M.__wbindgen_malloc, M.__wbindgen_realloc), p = rt;
    const y = M.create_metadata(r, _, A, x, v, p);
    if (y[3]) throw _t(y[2]);
    var O = xe(y[0], y[1]).slice();
    return M.__wbindgen_free(y[0], y[1] * 1, 1), O;
  }
  function Em(c) {
    const s = M.create_metadata_from_object(c);
    if (s[3]) throw _t(s[2]);
    var d = xe(s[0], s[1]).slice();
    return M.__wbindgen_free(s[0], s[1] * 1, 1), d;
  }
  function zg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.decode(s, d);
    if (r[3]) throw _t(r[2]);
    var _ = Ls(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 4, 4), _;
  }
  function Eg(c, s, d, r, _) {
    const A = Gs(c, M.__wbindgen_malloc), x = rt;
    var v = pe(_) ? 0 : Lt(_, M.__wbindgen_malloc), p = rt;
    const y = M.encode(A, x, s, d, r, v, p);
    if (y[3]) throw _t(y[2]);
    var O = xe(y[0], y[1]).slice();
    return M.__wbindgen_free(y[0], y[1] * 1, 1), O;
  }
  function Tg(c, s, d, r, _, A) {
    const x = Gs(c, M.__wbindgen_malloc), v = rt;
    var p = pe(A) ? 0 : Lt(A, M.__wbindgen_malloc), y = rt;
    const O = M.encode_lossy(x, v, s, d, r, _, p, y);
    if (O[3]) throw _t(O[2]);
    var R = xe(O[0], O[1]).slice();
    return M.__wbindgen_free(O[0], O[1] * 1, 1), R;
  }
  function Mg(c, s, d, r, _, A) {
    const x = Gs(c, M.__wbindgen_malloc), v = rt;
    var p = pe(A) ? 0 : Lt(A, M.__wbindgen_malloc), y = rt;
    const O = M.encode_with_bitrate(x, v, s, d, r, _, p, y);
    if (O[3]) throw _t(O[2]);
    var R = xe(O[0], O[1]).slice();
    return M.__wbindgen_free(O[0], O[1] * 1, 1), R;
  }
  function wg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.get_cover_art(s, d);
    if (r[2]) throw _t(r[1]);
    return _t(r[0]);
  }
  function Xs(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.get_metadata(s, d);
    if (r[2]) throw _t(r[1]);
    return _t(r[0]);
  }
  function Og(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.get_metadata_bytes(s, d);
    if (r[3]) throw _t(r[2]);
    var _ = xe(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), _;
  }
  function Ug(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.get_section_markers(s, d);
    if (r[2]) throw _t(r[1]);
    return _t(r[0]);
  }
  function Dg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.get_synced_lyrics(s, d);
    if (r[2]) throw _t(r[1]);
    return _t(r[0]);
  }
  function Cg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.get_waveform_data(s, d);
    if (r[2]) throw _t(r[1]);
    return _t(r[0]);
  }
  function Rg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt;
    return M.has_metadata(s, d) !== 0;
  }
  function Tm(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.info(s, d);
    if (r[2]) throw _t(r[1]);
    return Va.__wrap(r[0]);
  }
  function Hg(c, s) {
    const d = Lt(c, M.__wbindgen_malloc), r = rt, _ = M.set_metadata(d, r, s);
    if (_[3]) throw _t(_[2]);
    var A = xe(_[0], _[1]).slice();
    return M.__wbindgen_free(_[0], _[1] * 1, 1), A;
  }
  function Bg(c, s, d) {
    var r = pe(c) ? 0 : Lt(c, M.__wbindgen_malloc), _ = rt;
    const A = na(s, M.__wbindgen_malloc, M.__wbindgen_realloc), x = rt, v = M.set_metadata_field(r, _, A, x, d);
    if (v[3]) throw _t(v[2]);
    var p = xe(v[0], v[1]).slice();
    return M.__wbindgen_free(v[0], v[1] * 1, 1), p;
  }
  function qg(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.strip_metadata(s, d);
    if (r[3]) throw _t(r[2]);
    var _ = xe(r[0], r[1]).slice();
    return M.__wbindgen_free(r[0], r[1] * 1, 1), _;
  }
  function Mm(c, s) {
    const d = Lt(c, M.__wbindgen_malloc), r = rt, _ = Lt(s, M.__wbindgen_malloc), A = rt, x = M.update_metadata(d, r, _, A);
    if (x[3]) throw _t(x[2]);
    var v = xe(x[0], x[1]).slice();
    return M.__wbindgen_free(x[0], x[1] * 1, 1), v;
  }
  function wm(c) {
    const s = Lt(c, M.__wbindgen_malloc), d = rt, r = M.validate(s, d);
    if (r[2]) throw _t(r[1]);
    return r[0] !== 0;
  }
  function Yg() {
    let c, s;
    try {
      const d = M.version();
      return c = d[0], s = d[1], Qa(d[0], d[1]);
    } finally {
      M.__wbindgen_free(c, s, 1);
    }
  }
  const Lg = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function Gg(c, s) {
    if (typeof Response == "function" && c instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(c, s);
      } catch (r) {
        if (c.ok && Lg.has(c.type) && c.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", r);
        else throw r;
      }
      const d = await c.arrayBuffer();
      return await WebAssembly.instantiate(d, s);
    } else {
      const d = await WebAssembly.instantiate(c, s);
      return d instanceof WebAssembly.Instance ? {
        instance: d,
        module: c
      } : d;
    }
  }
  function Om() {
    const c = {};
    return c.wbg = {}, c.wbg.__wbg_Error_52673b7de5a0ca89 = function(s, d) {
      return Error(Qa(s, d));
    }, c.wbg.__wbg_Number_2d1dcfcf4ec51736 = function(s) {
      return Number(s);
    }, c.wbg.__wbg_String_8f0eb39a4a4c2f66 = function(s, d) {
      const r = String(d), _ = na(r, M.__wbindgen_malloc, M.__wbindgen_realloc), A = rt;
      Qe().setInt32(s + 4, A, true), Qe().setInt32(s + 0, _, true);
    }, c.wbg.__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d = function(s, d) {
      const r = d, _ = typeof r == "bigint" ? r : void 0;
      Qe().setBigInt64(s + 8, pe(_) ? BigInt(0) : _, true), Qe().setInt32(s + 0, !pe(_), true);
    }, c.wbg.__wbg___wbindgen_boolean_get_dea25b33882b895b = function(s) {
      const d = s, r = typeof d == "boolean" ? d : void 0;
      return pe(r) ? 16777215 : r ? 1 : 0;
    }, c.wbg.__wbg___wbindgen_debug_string_adfb662ae34724b6 = function(s, d) {
      const r = Bs(d), _ = na(r, M.__wbindgen_malloc, M.__wbindgen_realloc), A = rt;
      Qe().setInt32(s + 4, A, true), Qe().setInt32(s + 0, _, true);
    }, c.wbg.__wbg___wbindgen_in_0d3e1e8f0c669317 = function(s, d) {
      return s in d;
    }, c.wbg.__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27 = function(s) {
      return typeof s == "bigint";
    }, c.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(s) {
      return typeof s == "function";
    }, c.wbg.__wbg___wbindgen_is_null_dfda7d66506c95b5 = function(s) {
      return s === null;
    }, c.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(s) {
      const d = s;
      return typeof d == "object" && d !== null;
    }, c.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(s) {
      return typeof s == "string";
    }, c.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(s) {
      return s === void 0;
    }, c.wbg.__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36 = function(s, d) {
      return s === d;
    }, c.wbg.__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d = function(s, d) {
      return s == d;
    }, c.wbg.__wbg___wbindgen_number_get_9619185a74197f95 = function(s, d) {
      const r = d, _ = typeof r == "number" ? r : void 0;
      Qe().setFloat64(s + 8, pe(_) ? 0 : _, true), Qe().setInt32(s + 0, !pe(_), true);
    }, c.wbg.__wbg___wbindgen_string_get_a2a31e16edf96e42 = function(s, d) {
      const r = d, _ = typeof r == "string" ? r : void 0;
      var A = pe(_) ? 0 : na(_, M.__wbindgen_malloc, M.__wbindgen_realloc), x = rt;
      Qe().setInt32(s + 4, x, true), Qe().setInt32(s + 0, A, true);
    }, c.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(s, d) {
      throw new Error(Qa(s, d));
    }, c.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return Gn(function(s, d) {
        return s.call(d);
      }, arguments);
    }, c.wbg.__wbg_done_62ea16af4ce34b24 = function(s) {
      return s.done;
    }, c.wbg.__wbg_entries_83c79938054e065f = function(s) {
      return Object.entries(s);
    }, c.wbg.__wbg_from_29a8414a7a7cd19d = function(s) {
      return Array.from(s);
    }, c.wbg.__wbg_get_6b7bd52aca3f9671 = function(s, d) {
      return s[d >>> 0];
    }, c.wbg.__wbg_get_af9dab7e9603ea93 = function() {
      return Gn(function(s, d) {
        return Reflect.get(s, d);
      }, arguments);
    }, c.wbg.__wbg_get_with_ref_key_1dc361bd10053bfe = function(s, d) {
      return s[d];
    }, c.wbg.__wbg_instanceof_ArrayBuffer_f3320d2419cd0355 = function(s) {
      let d;
      try {
        d = s instanceof ArrayBuffer;
      } catch {
        d = false;
      }
      return d;
    }, c.wbg.__wbg_instanceof_Uint8Array_da54ccc9d3e09434 = function(s) {
      let d;
      try {
        d = s instanceof Uint8Array;
      } catch {
        d = false;
      }
      return d;
    }, c.wbg.__wbg_isArray_51fd9e6422c0a395 = function(s) {
      return Array.isArray(s);
    }, c.wbg.__wbg_isSafeInteger_ae7d3f054d55fa16 = function(s) {
      return Number.isSafeInteger(s);
    }, c.wbg.__wbg_iterator_27b7c8b35ab3e86b = function() {
      return Symbol.iterator;
    }, c.wbg.__wbg_length_22ac23eaec9d8053 = function(s) {
      return s.length;
    }, c.wbg.__wbg_length_86ce4877baf913bb = function(s) {
      return s.length;
    }, c.wbg.__wbg_length_d45040a40c570362 = function(s) {
      return s.length;
    }, c.wbg.__wbg_new_1ba21ce319a06297 = function() {
      return new Object();
    }, c.wbg.__wbg_new_25f239778d6112b9 = function() {
      return new Array();
    }, c.wbg.__wbg_new_6421f6084cc5bc5a = function(s) {
      return new Uint8Array(s);
    }, c.wbg.__wbg_new_b546ae120718850e = function() {
      return /* @__PURE__ */ new Map();
    }, c.wbg.__wbg_new_from_slice_f9c22b9153b26992 = function(s, d) {
      return new Uint8Array(xe(s, d));
    }, c.wbg.__wbg_new_with_length_95ba657dfb7d3dfb = function(s) {
      return new Float32Array(s >>> 0);
    }, c.wbg.__wbg_next_138a17bbf04e926c = function(s) {
      return s.next;
    }, c.wbg.__wbg_next_3cfe5c0fe2a4cc53 = function() {
      return Gn(function(s) {
        return s.next();
      }, arguments);
    }, c.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(s, d, r) {
      Uint8Array.prototype.set.call(xe(s, d), r);
    }, c.wbg.__wbg_set_3f1d0b984ed272ed = function(s, d, r) {
      s[d] = r;
    }, c.wbg.__wbg_set_781438a03c0c3c81 = function() {
      return Gn(function(s, d, r) {
        return Reflect.set(s, d, r);
      }, arguments);
    }, c.wbg.__wbg_set_7df433eea03a5c14 = function(s, d, r) {
      s[d >>> 0] = r;
    }, c.wbg.__wbg_set_cb0e657d1901c8d8 = function(s, d, r) {
      s.set(Ls(d, r));
    }, c.wbg.__wbg_set_efaaf145b9377369 = function(s, d, r) {
      return s.set(d, r);
    }, c.wbg.__wbg_stringify_655a6390e1f5eb6b = function() {
      return Gn(function(s) {
        return JSON.stringify(s);
      }, arguments);
    }, c.wbg.__wbg_value_57b7b035e117f7ee = function(s) {
      return s.value;
    }, c.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(s, d) {
      return Qa(s, d);
    }, c.wbg.__wbindgen_cast_4625c577ab2ec9ee = function(s) {
      return BigInt.asUintN(64, s);
    }, c.wbg.__wbindgen_cast_cb9088102bce6b30 = function(s, d) {
      return xe(s, d);
    }, c.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(s) {
      return s;
    }, c.wbg.__wbindgen_init_externref_table = function() {
      const s = M.__wbindgen_externrefs, d = s.grow(4);
      s.set(0, void 0), s.set(d + 0, void 0), s.set(d + 1, null), s.set(d + 2, true), s.set(d + 3, false);
    }, c;
  }
  function Um(c, s) {
    return M = c.exports, mi.__wbindgen_wasm_module = s, aa = null, Xn = null, Qn = null, M.__wbindgen_start(), M;
  }
  function Xg(c) {
    if (M !== void 0) return M;
    typeof c < "u" && (Object.getPrototypeOf(c) === Object.prototype ? { module: c } = c : console.warn("using deprecated parameters for `initSync()`; pass a single object instead"));
    const s = Om();
    c instanceof WebAssembly.Module || (c = new WebAssembly.Module(c));
    const d = new WebAssembly.Instance(c, s);
    return Um(d, c);
  }
  async function mi(c) {
    if (M !== void 0) return M;
    typeof c < "u" && (Object.getPrototypeOf(c) === Object.prototype ? { module_or_path: c } = c : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof c > "u" && (c = new URL("" + new URL("libflo_audio_bg-B6Abkcq5.wasm", import.meta.url).href, import.meta.url));
    const s = Om();
    (typeof c == "string" || typeof Request == "function" && c instanceof Request || typeof URL == "function" && c instanceof URL) && (c = fetch(c));
    const { instance: d, module: r } = await Gg(await c, s);
    return Um(d, r);
  }
  const _m = Object.freeze(Object.defineProperty({
    __proto__: null,
    AudioInfo: Va,
    WasmStreamingDecoder: qs,
    create_metadata: Ag,
    create_metadata_from_object: Em,
    decode: zg,
    default: mi,
    encode: Eg,
    encode_lossy: Tg,
    encode_with_bitrate: Mg,
    get_cover_art: wg,
    get_metadata: Xs,
    get_metadata_bytes: Og,
    get_section_markers: Ug,
    get_synced_lyrics: Dg,
    get_waveform_data: Cg,
    has_metadata: Rg,
    info: Tm,
    initSync: Xg,
    set_metadata: Hg,
    set_metadata_field: Bg,
    strip_metadata: qg,
    update_metadata: Mm,
    validate: wm,
    version: Yg
  }, Symbol.toStringTag, {
    value: "Module"
  })), Qg = {
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
  function Zg() {
    const [c, s] = ht.useState(false), [d, r] = ht.useState(false);
    return ht.useEffect(() => {
      (async () => {
        try {
          await mi(), r(true);
        } catch (O) {
          console.error("Failed to initialize flo\u2122 WASM:", O);
        }
      })();
    }, []), {
      isProcessing: c,
      isInitialized: d,
      loadMetadata: async (y) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        try {
          const O = await y.arrayBuffer(), R = new Uint8Array(O);
          return Xs(R);
        } catch (O) {
          return console.error("Failed to load flo\u2122 metadata:", O), null;
        }
      },
      updateMetadata: async (y, O) => {
        if (!d) throw new Error("flo\u2122 WASM not initialized");
        s(true);
        try {
          const R = Em(O), q = Mm(y, R);
          return s(false), q;
        } catch (R) {
          return console.error("Failed to update flo\u2122 metadata:", R), s(false), null;
        }
      },
      downloadFile: (y, O) => {
        const R = new Blob([
          y
        ], {
          type: "application/octet-stream"
        }), q = URL.createObjectURL(R), tt = document.createElement("a");
        tt.href = q, tt.download = O, tt.click(), URL.revokeObjectURL(q);
      },
      validateFile: (y) => d ? wm(y) : false,
      resetMetadata: () => ({
        ...Qg
      })
    };
  }
  function Vg() {
    const [c, s] = ht.useState(false);
    return {
      isLoading: c,
      loadFloFile: async (r) => {
        s(true);
        try {
          if (!r.name.toLowerCase().endsWith(".flo")) return {
            metadata: null,
            audioInfo: null,
            error: "Please upload a valid .flo file"
          };
          await mi();
          const _ = await r.arrayBuffer(), A = new Uint8Array(_), x = Xs(A), v = Tm(A), p = v ? {
            sample_rate: v.sample_rate,
            channels: v.channels,
            bit_depth: v.bit_depth,
            total_frames: Number(v.total_frames),
            duration_secs: v.duration_secs,
            file_size: v.file_size,
            compression_ratio: v.compression_ratio,
            crc_valid: v.crc_valid,
            is_lossy: v.is_lossy,
            lossy_quality: v.lossy_quality,
            version: v.version
          } : null;
          return {
            metadata: x,
            audioInfo: p,
            error: null
          };
        } catch (_) {
          return console.error("Failed to load flo\u2122 file:", _), {
            metadata: null,
            audioInfo: null,
            error: `Failed to parse flo\u2122 file: ${_ instanceof Error ? _.message : "Unknown error"}`
          };
        } finally {
          s(false);
        }
      }
    };
  }
  function Kg() {
    return {
      parseLRCFormat: (s) => {
        const d = s.split(`
`), r = [];
        return d.forEach((_) => {
          const A = _.match(/\[(\d{2}):(\d{2})[:.](\d{2})\](.*)/);
          if (A) {
            const x = parseInt(A[1]), v = parseInt(A[2]), p = parseInt(A[3]), y = x * 60 * 1e3 + v * 1e3 + p * 10, O = A[4].trim();
            r.push([
              O,
              y
            ]);
          }
        }), r.sort((_, A) => _[1] - A[1]), r;
      }
    };
  }
  function vm(c, s, d, r = 50) {
    const _ = Math.floor(s / r), A = Math.floor(c.length / (_ * d)), x = [];
    for (let v = 0; v < A; v++) for (let p = 0; p < d; p++) {
      let y = 0;
      for (let O = 0; O < _; O++) {
        const R = v * _ * d + O * d + p;
        R < c.length && (y = Math.max(y, Math.abs(c[R])));
      }
      x.push(y);
    }
    return {
      peaks_per_second: r,
      channels: d,
      peaks: x
    };
  }
  function Jg({ waveform: c, onRegenerate: s }) {
    return f.jsxs("section", {
      className: "glass-panel p-6 sm:p-8",
      children: [
        f.jsxs("div", {
          className: "mb-4 flex items-center justify-between",
          children: [
            f.jsxs("div", {
              children: [
                f.jsx("p", {
                  className: "micro-label",
                  children: "Audio"
                }),
                f.jsx("h2", {
                  className: "text-lg font-semibold",
                  children: "Audio Waveform"
                }),
                f.jsx("p", {
                  className: "text-xs text-muted-foreground mt-1",
                  children: "Pre-generated visualization data for use by music players and other tools"
                })
              ]
            }),
            s && f.jsx("button", {
              className: "btn",
              "data-variant": "soft",
              "data-tone": "primary",
              "data-size": "sm",
              onClick: s,
              type: "button",
              children: "Regenerate"
            })
          ]
        }),
        f.jsx("div", {
          children: c && c.peaks && c.peaks.length > 0 ? f.jsx(kg, {
            waveform: c
          }) : f.jsxs("div", {
            className: "flex flex-col items-center justify-center py-8 text-center text-muted-foreground",
            children: [
              f.jsx(Vn, {
                className: "h-10 w-10 mb-2 opacity-50"
              }),
              f.jsx("p", {
                className: "text-sm",
                children: "No waveform data. Load a file or regenerate."
              })
            ]
          })
        }),
        f.jsx(Wg, {
          waveform: c
        })
      ]
    });
  }
  function kg({ waveform: c, width: s = 600, height: d = 80 }) {
    const { peaks: r, channels: _ } = c, A = Math.floor(r.length / _);
    function x(p) {
      return Array.from({
        length: A
      }, (y, O) => {
        const R = Math.floor(O / (A - 1) * (s - 2)) + 1, q = Math.floor((1 - (r[O * _ + p] || 0)) * (d - 10)) + 5;
        return `${R},${q}`;
      }).join(" ");
    }
    function v() {
      const p = Array.from({
        length: A
      }, (O, R) => {
        const q = Math.floor(R / (A - 1) * (s - 2)) + 1, tt = r[R * _] || 0, ft = Math.floor((1 - tt) * (d / 2 - 4)) + d / 2;
        return `${q},${ft}`;
      }), y = Array.from({
        length: A
      }, (O, R) => {
        const q = A - 1 - R, tt = Math.floor(q / (A - 1) * (s - 2)) + 1, ft = r[q * _] || 0, vt = Math.floor((1 + ft) * (d / 2 - 4)) + 4;
        return `${tt},${vt}`;
      });
      return [
        ...p,
        ...y,
        p[0]
      ].join(" ");
    }
    return f.jsx("div", {
      style: {
        width: s,
        maxWidth: "100%"
      },
      className: "overflow-x-auto",
      children: f.jsxs("svg", {
        className: "block rounded border bg-background shadow",
        width: s,
        height: d,
        viewBox: `0 0 ${s} ${d}`,
        "aria-label": "Waveform",
        role: "img",
        children: [
          _ === 1 && f.jsx("polygon", {
            points: v(),
            fill: "url(#wf-gradient)",
            opacity: 0.85
          }),
          f.jsx("polyline", {
            points: x(0),
            stroke: "#db2777",
            strokeWidth: _ > 1 ? 1.5 : 2.5,
            fill: "none"
          }),
          _ > 1 && f.jsx("polyline", {
            points: x(1),
            stroke: "#3b82f6",
            strokeWidth: "1.5",
            fill: "none"
          }),
          f.jsx("defs", {
            children: f.jsxs("linearGradient", {
              id: "wf-gradient",
              x1: "0",
              x2: "0",
              y1: "0",
              y2: "1",
              children: [
                f.jsx("stop", {
                  offset: "0%",
                  stopColor: "#db2777",
                  stopOpacity: "0.75"
                }),
                f.jsx("stop", {
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
  function Wg({ waveform: c }) {
    return c ? f.jsxs("div", {
      className: "mt-2 flex flex-wrap gap-4 text-xs text-muted-foreground",
      children: [
        f.jsxs("span", {
          children: [
            f.jsx("strong", {
              children: "Channels:"
            }),
            " ",
            c.channels === 2 ? "Stereo" : "Mono"
          ]
        }),
        f.jsxs("span", {
          children: [
            f.jsx("strong", {
              children: "Peaks/sec:"
            }),
            " ",
            c.peaks_per_second
          ]
        }),
        f.jsxs("span", {
          children: [
            f.jsx("strong", {
              children: "Total Points:"
            }),
            " ",
            c.peaks.length
          ]
        })
      ]
    }) : null;
  }
  function $g() {
    var _a, _b, _c, _d, _e;
    const [c, s] = ht.useState(null), [d, r] = ht.useState(""), [_, A] = ht.useState(false), [x, v] = ht.useState(null), [p, y] = ht.useState(null), [O, R] = ht.useState(""), [q, tt] = ht.useState(null), { isProcessing: ft, updateMetadata: vt, downloadFile: k, resetMetadata: J } = Zg(), [W, et] = ht.useState(null), [Z, Nt] = ht.useState(() => ({
      ...dm
    })), [Ct, F] = ht.useState(null), [$t, te] = ht.useState(() => ({
      ...ri
    })), Ce = ht.useRef(""), { isLoading: Se, loadFloFile: Zt } = Vg(), { parseLRCFormat: Ve } = Kg();
    ht.useEffect(() => {
      typeof window < "u" && _ && Rs(() => import("./eruda-BH0aMfP5.js").then((E) => E.e), [], import.meta.url).then((E) => {
        E.default.init(), E.default.show();
      });
    }, [
      _
    ]);
    const fe = [
      {
        label: "Tag fields set",
        value: Object.values(Z).filter((E) => typeof E == "string" && E.trim().length > 0).length.toString(),
        helper: "metadata saved this session"
      },
      {
        label: "Synced lines",
        value: $t.text.length.toString(),
        helper: "timestamped lyric rows"
      },
      {
        label: "Artwork",
        value: Ct ? "Attached" : "Not added",
        helper: Ct ? "Cover ready to embed" : "Add PNG / JPG / WebP"
      }
    ], w = ht.useCallback((E) => `${E.name}:${E.lastModified}:${E.size}`, []), B = ht.useCallback(async () => {
      if (!(!q || !W)) try {
        const H = await (await Rs(() => Promise.resolve().then(() => _m), void 0, import.meta.url)).decode(q), Y = vm(H, W.sample_rate, W.channels);
        Nt((K) => ({
          ...K,
          waveform_data: Y
        })), y("Waveform re-generated from audio data.");
      } catch {
        v("Could not re-generate waveform.");
      }
    }, [
      q,
      W
    ]), V = ht.useCallback(async (E) => {
      var _a2, _b2, _c2;
      if (!E) {
        Ce.current = "", s(null), tt(null), Nt(J()), F(null), te({
          ...ri
        }), r(""), R(""), y(null), v(null), et(null);
        return;
      }
      if (!E.name.toLowerCase().endsWith(".flo")) {
        v("Please upload a valid .flo file"), y(null);
        return;
      }
      const Y = w(E);
      Ce.current = Y, s(E), v(null), y("File loaded. Reading embedded tags..."), R("Scanning embedded metadata..."), Nt(J()), F(null), te({
        ...ri
      }), r(""), et(null);
      try {
        const { metadata: K, audioInfo: nt, error: Gt } = await Zt(E);
        if (Ce.current !== Y) return;
        if (Gt) {
          v(Gt), y(null);
          return;
        }
        const Mt = await E.arrayBuffer(), dl = new Uint8Array(Mt);
        tt(dl), et(nt || null);
        let Ft = K ? {
          ...K
        } : {
          ...dm
        };
        if ((!Ft.waveform_data || !((_a2 = Ft.waveform_data.peaks) == null ? void 0 : _a2.length)) && nt) try {
          const Ne = await (await Rs(() => Promise.resolve().then(() => _m), void 0, import.meta.url)).decode(dl);
          Ft.waveform_data = vm(Ne, nt.sample_rate, nt.channels);
        } catch {
        }
        if (Nt(Ft), Ft.pictures) {
          const It = Ft.pictures.find((Ne) => Ne.picture_type === "cover_front");
          if (It) {
            const Ne = new Blob([
              It.data
            ], {
              type: It.mime_type
            });
            F(URL.createObjectURL(Ne));
          }
        }
        if (Ft.synced_lyrics && Ft.synced_lyrics.length > 0) {
          const It = Ft.synced_lyrics[0];
          te({
            type: 1,
            timestampFormat: 2,
            language: It.language || "eng",
            description: It.description || "Synced Lyrics",
            text: It.lines.map((Ne) => [
              Ne.text,
              Ne.timestamp_ms
            ])
          });
        }
        const ml = Object.values(Ft || {}).filter((It) => typeof It == "string" && It.trim().length > 0).length, Kn = ((_c2 = (_b2 = Ft == null ? void 0 : Ft.synced_lyrics) == null ? void 0 : _b2[0]) == null ? void 0 : _c2.lines.length) ?? 0, Ke = ml > 0 || !!nt || Kn > 0;
        R(ml > 0 ? `Imported ${ml} embedded tag${ml === 1 ? "" : "s"}.` : "No embedded tags found."), y(Ke ? "Existing metadata imported. Continue editing below." : "File loaded. Add or update tags below.");
      } catch (K) {
        if (Ce.current !== Y) return;
        console.error("Failed to parse metadata", K), R(""), v("Loaded file, but could not read embedded metadata automatically."), y(null), et(null);
      }
    }, [
      Zt,
      w,
      J
    ]), st = (E, H) => {
      Nt((Y) => ({
        ...Y,
        [E]: H
      }));
    };
    function yt(E, H) {
      Nt((Y) => {
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
        const E = Ve(d);
        if (te((H) => ({
          ...H,
          text: E
        })), !Z.lyrics || Z.lyrics.length === 0) {
          const H = E.map(([Y]) => Y == null ? void 0 : Y.trim()).filter(Boolean).join(`
`);
          H && Nt((Y) => ({
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
      if (!c || !q) return;
      v(null), y(null);
      const E = await vt(q, Z);
      if (E) {
        const H = (_a2 = Z.artist) == null ? void 0 : _a2.trim(), Y = (_b2 = Z.title) == null ? void 0 : _b2.trim();
        let K;
        H && Y ? K = `${H} - ${Y}.flo` : Y ? K = `${Y}.flo` : K = c.name.endsWith(".flo") ? c.name : `${c.name.replace(/\.[^/.]+$/, "")}.flo`, k(E, K), y("File processed and downloaded successfully!");
      } else v("Failed to process file");
    };
    return f.jsxs("div", {
      className: "relative min-h-screen overflow-hidden px-4 py-10 sm:px-6",
      children: [
        f.jsx("div", {
          className: "pointer-events-none absolute -top-24 -right-16 h-80 w-80 rounded-full blur-3xl opacity-60",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        f.jsx("div", {
          className: "pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full blur-[140px] opacity-40",
          style: {
            backgroundImage: "var(--themegradient-active)"
          }
        }),
        f.jsxs("main", {
          className: "relative mx-auto flex max-w-5xl flex-col gap-6",
          children: [
            f.jsxs("section", {
              className: "glass-panel p-6 sm:p-8 space-y-6",
              children: [
                f.jsxs("div", {
                  className: "flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between",
                  children: [
                    f.jsx("div", {
                      className: "space-y-4 lg:max-w-2xl",
                      children: f.jsxs("div", {
                        className: "flex items-center gap-3",
                        children: [
                          f.jsx("div", {
                            className: "rounded-full bg-primary/12 p-3 text-primary shadow-inner shadow-primary/30",
                            children: f.jsx(Vn, {
                              className: "h-6 w-6 icon-accent"
                            })
                          }),
                          f.jsxs("div", {
                            children: [
                              f.jsx("h1", {
                                className: "text-3xl font-semibold hero-title",
                                children: f.jsx("span", {
                                  className: "gradient-text inline-block",
                                  children: "floEditor"
                                })
                              }),
                              f.jsx("p", {
                                className: "text-sm text-muted-foreground",
                                children: "Tag flo\u2122 files, embed art, and sync lyrics without leaving your browser."
                              })
                            ]
                          })
                        ]
                      })
                    }),
                    f.jsxs("div", {
                      className: "flex w-full flex-col gap-4 lg:max-w-xs",
                      children: [
                        f.jsxs("div", {
                          className: "rounded-2xl border border-primary/25 bg-primary/5 p-4 text-right shadow-inner shadow-primary/10",
                          children: [
                            f.jsx("p", {
                              className: "micro-label justify-end text-primary/80",
                              children: "Current file"
                            }),
                            f.jsx("p", {
                              className: `text-2xl font-semibold ${c ? "text-primary" : "text-muted-foreground"}`,
                              children: c ? c.name : "No file loaded"
                            }),
                            f.jsx("p", {
                              className: "text-xs text-muted-foreground",
                              children: c ? "Ready for metadata tweaks." : "Load a flo\u2122 to unlock controls."
                            })
                          ]
                        }),
                        f.jsxs("div", {
                          className: "grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-1",
                          children: [
                            f.jsx(xg, {}),
                            f.jsxs("button", {
                              onClick: () => A(!_),
                              type: "button",
                              className: "btn",
                              "data-variant": "soft",
                              "data-size": "sm",
                              "data-tone": "secondary",
                              children: [
                                f.jsx(Ey, {
                                  className: "h-4 w-4 icon-accent"
                                }),
                                _ ? "Hide" : "Show",
                                " Debug"
                              ]
                            })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                x && f.jsx(hm, {
                  type: "error",
                  message: x
                }),
                p && f.jsx(hm, {
                  type: "success",
                  message: p
                }),
                f.jsx(ug, {
                  file: c,
                  onFileUpload: V,
                  isParsingMetadata: Se,
                  metadataSummary: O
                }),
                f.jsx("div", {
                  className: "grid grid-cols-1 gap-4 sm:grid-cols-3",
                  children: fe.map(({ label: E, value: H, helper: Y }) => f.jsxs("div", {
                    className: "relative overflow-hidden rounded-xl border px-4 py-3 text-sm text-white shadow-lg shadow-primary/30",
                    style: {
                      backgroundImage: "var(--stat-card-gradient, var(--themegradient-active))",
                      borderColor: "var(--stat-card-border, transparent)"
                    },
                    children: [
                      f.jsx("div", {
                        className: "pointer-events-none absolute inset-0 bg-black/10"
                      }),
                      f.jsxs("div", {
                        className: "relative space-y-1",
                        children: [
                          f.jsx("p", {
                            className: "text-xs font-semibold uppercase tracking-wide text-white/80",
                            children: E
                          }),
                          f.jsx("p", {
                            className: "text-2xl font-semibold",
                            children: H
                          }),
                          f.jsx("p", {
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
            f.jsx(Jg, {
              waveform: Z.waveform_data,
              onRegenerate: q && W ? B : void 0
            }),
            f.jsx(ig, {
              metadata: Z,
              onMetadataChange: st
            }),
            f.jsx(hg, {
              popularimeter: {
                email: ((_a = Z.popularimeter) == null ? void 0 : _a.email) ?? "",
                rating: ((_b = Z.popularimeter) == null ? void 0 : _b.rating) ?? 0,
                play_count: ((_c = Z.popularimeter) == null ? void 0 : _c.play_count) ?? 0
              },
              onChange: yt
            }),
            f.jsx(sg, {
              pictures: Z.pictures,
              onPicturesChange: (E) => Nt({
                ...Z,
                pictures: E
              }),
              coverVariants: Z.cover_variants,
              onCoverVariantsChange: (E) => Nt({
                ...Z,
                cover_variants: E
              }),
              animatedCover: Z.animated_cover,
              onAnimatedCoverChange: (E) => Nt({
                ...Z,
                animated_cover: E
              })
            }),
            f.jsx(fg, {
              syncedLyrics: Z.synced_lyrics,
              onSyncedLyricsChange: (E) => Nt({
                ...Z,
                synced_lyrics: E
              }),
              lrcText: d,
              onLrcTextChange: r,
              onImport: g,
              unsyncedLyrics: ((_e = (_d = Z.lyrics) == null ? void 0 : _d[0]) == null ? void 0 : _e.text) || "",
              onUnsyncedLyricsChange: (E) => Nt({
                ...Z,
                lyrics: E ? [
                  {
                    text: E
                  }
                ] : []
              })
            }),
            f.jsx(og, {
              sectionMarkers: Z.section_markers,
              onSectionMarkersChange: (E) => Nt({
                ...Z,
                section_markers: E
              })
            }),
            f.jsx(dg, {
              bpmMap: Z.bpm_map,
              onBpmMapChange: (E) => Nt({
                ...Z,
                bpm_map: E
              })
            }),
            f.jsx(mg, {
              keyChanges: Z.key_changes,
              onKeyChangesChange: (E) => st("key_changes", E)
            }),
            f.jsx(gg, {
              creatorNotes: Z.creator_notes ?? [],
              onCreatorNotesChange: (E) => st("creator_notes", E)
            }),
            f.jsx(bg, {
              collaborationCredits: Z.collaboration_credits ?? [],
              onCollaborationCreditsChange: (E) => st("collaboration_credits", E)
            }),
            f.jsx(yg, {
              userText: Z.user_text ?? [],
              onUserTextChange: (E) => st("user_text", E)
            }),
            f.jsx(_g, {
              disabled: !c || ft,
              isProcessing: ft,
              fileName: c == null ? void 0 : c.name,
              onProcess: C
            })
          ]
        })
      ]
    });
  }
  my.createRoot(document.getElementById("root")).render(f.jsx(uy.StrictMode, {
    children: f.jsx($g, {})
  }));
})();
export {
  __tla,
  pm as g
};
